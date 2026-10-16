/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [50762],
    {
      26589: (ge, de, r) => {
        "use strict";
        r.d(de, { gg: () => W, hM: () => _ });
        var n = r(72609),
          x = r(75233),
          a = r(80902),
          s = r(67705),
          t = r(76559),
          y = r(3166);
        function z(S, v) {
          return {
            clanid: S,
            appid: v,
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
        function V(S, v) {
          return !v || !(S.support_user || S.valve_admin)
            ? S
            : { ...S, can_edit: !0, support_user: !1, valve_admin: !1 };
        }
        async function U(S, v, w) {
          const g = (0, s.Bu)(),
            o = (0, s.Fd)("partnereventpermissions", "application_config");
          if (N(o)) {
            const h = o.find((b) => b.clanid == S);
            if (h) {
              let { success: b, warn_msg: k, err_msg: te, ...re } = h;
              return V(re, g);
            }
          }
          if (n.iA.logged_in) {
            const h = t.b.InitFromClanID(S);
            let b = `${n.TS.COMMUNITY_BASE_URL}gid/${h.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
            (0, y.yK)() == "partner"
              ? (b = `${n.TS.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${S}`)
              : (0, y.yK)() == "store" &&
                (b = `${n.TS.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${S}`);
            const k = await fetch(b, { method: "GET", credentials: "include" });
            if (k.status == 200) {
              const te = await k.json();
              if (te) {
                let { success: re, warn_msg: J, err_msg: Q, ...c } = te;
                return V(c, g);
              }
            }
          }
          return z(S, void 0);
        }
        function N(S) {
          const v = S;
          return v &&
            Array.isArray(v) &&
            v.length > 0 &&
            typeof v[0] == "object"
            ? typeof v[0].clanid == "number" && typeof v[0].appid == "number"
            : !1;
        }
        var F = r(68312);
        function _(S) {
          const v = (0, x.jE)(),
            w = (0, F.KV)();
          return (0, a.I)(W(S, v, w));
        }
        function W(S, v, w) {
          return {
            queryKey: A(S),
            queryFn: async () => await U(S, v, w),
            enabled: !!S,
          };
        }
        function A(S) {
          return ["useEventUserPermissions", n.iA.accountid, S];
        }
      },
      3946: (ge, de, r) => {
        "use strict";
        r.d(de, { V: () => a });
        var n = r(7850),
          x = r(72080);
        function a(s) {
          return (0, n.jsxs)("a", {
            href: s.strURL,
            className: x.gg.Box,
            "data-modal-content-sizetofit": !!s.bSizeToFit,
            "data-appid": s.appid,
            "data-publishedfileid": s.publishedfileid,
            children: [
              (0, n.jsx)(x.KN, { strURL: s.strPreviewURL }),
              (0, n.jsxs)(x.J7, {
                children: [
                  (0, n.jsx)(x.bv, { children: s.strTitle }),
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)("span", {
                      className: x.gg.Type,
                      children: s.strType,
                    }),
                  }),
                  s.author && (0, n.jsx)(x.zN, { children: s.author }),
                  (0, n.jsx)(x.AT, { children: s.strDescription }),
                ],
              }),
            ],
          });
        }
      },
      54357: (ge, de, r) => {
        "use strict";
        r.d(de, { B: () => U });
        var n = r(7850),
          x = r(90626);
        function a(F) {
          const [_, W] = useState(!1);
          return (
            useEffect(() => {
              window.SSR && (window.SSR.hydrated = !0),
                startTransition(() => W(!0));
            }, []),
            jsx(s.Provider, { value: _, children: F.children })
          );
        }
        const s = (0, x.createContext)(!1);
        function t() {
          return !0;
        }
        const y = Intl.DateTimeFormat().resolvedOptions().timeZone,
          z =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((F) => F.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          V = z && decodeURIComponent(z);
        function U() {
          return t() ? y : (V ?? y);
        }
        function N() {
          "document" in globalThis &&
            y &&
            (document.cookie = `timezoneName=${y};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        N();
      },
      69596: (ge, de, r) => {
        "use strict";
        r.d(de, { O: () => a });
        const n =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function x(s) {
          return s ? n.test(s.trim()) : !1;
        }
        function a(s, t) {
          return x(s) ? s : t;
        }
      },
      11547: (ge, de, r) => {
        "use strict";
        r.d(de, { H: () => ze, k: () => Ae });
        var n = r(7850),
          x = r(29950),
          a = r(29630),
          s = r(68941),
          t = r(70187),
          y = r(1917),
          z = r(24660),
          V = r(72609),
          U = r(86722),
          N = r(6878),
          F = r.n(N),
          _ = r(53107),
          W = r(36707),
          A = r(53113),
          S = r(69596),
          v = r(35265);
        function w(B) {
          switch (B) {
            case "button":
              return (0, W.A)(F().LinkButton, "LinkButton");
            case "pill":
              return (0, W.A)(F().LinkPill, "LinkPill");
            default:
              return (0, W.A)(F().Link, "Link");
          }
        }
        function g(B, ee, ye) {
          let Me = "";
          return (
            B == "button" && ee && (Me += `background-color: ${ee};`),
            B == "pill" && ye && (Me += `color: ${ye};`),
            Me.length == 0 ? void 0 : Me
          );
        }
        function o(B, ee, ye) {
          let Me;
          return (
            (B == "button" || B == "pill") &&
              ee &&
              (Me = { backgroundColor: ee }),
            (B == "button" || B == "pill") &&
              ye &&
              (Me = { ...(Me ?? {}), color: ye }),
            Me
          );
        }
        function h(B, ee) {
          const ye = (
            typeof B == "string"
              ? B
              : Array.isArray(B) && B.length == 1 && typeof B[0] == "string"
                ? B[0]
                : void 0
          )?.trim();
          return !ye || !ee ? !0 : ye != ee.trim();
        }
        function b(B) {
          let ee = (0, x.J)((0, t.j$)(B.args) || (0, t.j$)(B.args, "href"));
          const ye = (0, t.j$)(B.args, "style"),
            Me = (0, t.j$)(B.args, "id"),
            Je = (0, S.O)(
              (0, t.j$)(B.args, "buttoncolor") || (0, t.j$)(B.args, "bgcolor"),
              void 0,
            ),
            $e = (0, S.O)(
              (0, t.j$)(B.args, "labelcolor") || (0, t.j$)(B.args, "color"),
              void 0,
            ),
            T = w(ye),
            $ = B.context.event,
            he = (0, a.z5)(ee, B.language, $?.rtime32_last_modified),
            xe = (0, v.W7)(h(B.children, ee) ? "" : (ee ?? ""));
          if (xe && ee) return xe.fnBBComponent(ee, { event: B.context.event });
          if (he === void 0 || he == null) return B.children || "";
          typeof he == "string" ? (ee = he) : (ee = he[1]);
          const we = o(ye, Je, $e);
          return typeof ee == "string" && ee.length > 0 && ee[0] == "#"
            ? (0, n.jsx)(z.Ii, {
                className: T,
                href: ee,
                style: we,
                children: B.children,
              })
            : ee == "steam://settings/account"
              ? (0, n.jsx)(_.uU, {
                  className: T,
                  href: "steam://settings/account",
                  children: B.children,
                })
              : (0, n.jsx)(U.d$, {
                  className: T,
                  url: ee,
                  event: B.context.event,
                  id: Me,
                  style: we,
                  children: B.children,
                });
        }
        function k(B) {
          const ee = (0, t.j$)(B.args, "href"),
            ye = (0, v.W7)(ee);
          return ye
            ? ye.fnBBComponent(ee, { event: B.context.event })
            : (0, n.jsx)(b, { ...B });
        }
        var te = r(25046),
          re = r(29522),
          J = r(40358),
          Q = r(64271),
          c = r(90626),
          m = r(67523),
          M = r.n(m),
          p = r(36118),
          L = r(18210),
          P = r(85599),
          D = r(89767),
          I = r.n(D),
          C = r(64457),
          G = r(48963),
          q = r.n(G),
          pe = ((B) => (
            (B.k_TrailerAsButton = "button"),
            (B.k_TrailerAsPill = "pill"),
            (B.k_TrailerAsFull = "full"),
            (B.k_TrailerAsPoster = "poster"),
            (B.k_TrailerAsMicro = "micro"),
            B
          ))(pe || {});
        const E = /\bappid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function ve(B, ee) {
          const ye = new Set();
          for (const Me of B.matchAll(/\[trailer\b([^\]]*)\]/gi)) {
            const Je = E.exec(Me[1] ?? ""),
              $e = Je ? Number.parseInt(Je[1] ?? Je[2] ?? Je[3] ?? "") : ee;
            $e && ye.add($e);
          }
          return Array.from(ye);
        }
        function me(B) {
          const {
              embedStyle: ee,
              appid: ye,
              color: Me,
              bgcolor: Je,
              children: $e,
              trailerBaseID: T,
              subtitles: $,
            } = B,
            [he, xe] = (0, c.useState)(!1),
            we = (0, c.useMemo)(() => ({ appid: ye }), [ye]);
          switch (ee) {
            case "button":
            case "pill":
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("button", {
                    type: "button",
                    className: (0, W.A)({
                      [I().Pill]: ee == "pill",
                      [I().Button]: ee == "button",
                    }),
                    onClick: () => xe(!0),
                    style: { color: Me, backgroundColor: Je },
                    children: [
                      (0, n.jsx)(p.jGG, {}),
                      $e || (0, L.we)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, n.jsx)(C.PE, {
                    id: we,
                    bShowModal: he,
                    trailerBaseID: T,
                    hideModal: () => xe(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, n.jsx)(Y, { ...B });
          }
        }
        function Y(B) {
          const { appid: ee, trailerBaseID: ye } = B,
            Me = (0, re.$5)(ee),
            { data: Je } = (0, J.J$)(Me),
            [$e, T] = (0, c.useState)(() =>
              !ee || !ye ? (0, L.we)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            $ = (0, te.kB)(Me),
            he = (0, c.useMemo)(
              () => ($ ? $.find((xe) => xe.trailer_base_id === ye) : null),
              [$, ye],
            );
          return (
            (0, c.useEffect)(() => {
              Je?.unvailable_for_country_restriction &&
                T((0, L.we)("#TrailerPlayer_CouldNotLoad", ee, ye)),
                $ &&
                  !he &&
                  T(
                    (0, L.we)(
                      "#TrailerPlayer_CouldNotLoad",
                      B.appid,
                      B.trailerBaseID,
                    ),
                  );
            }, [
              ee,
              B.appid,
              B.trailerBaseID,
              Je?.unvailable_for_country_restriction,
              ye,
              he,
              $,
            ]),
            $e
              ? B.bIsPreviewMode
                ? (0, n.jsx)("div", { className: M().ErrorDiv, children: $e })
                : null
              : he
                ? (0, n.jsx)(be, { trailerToPlay: he })
                : (0, n.jsx)(P.t, {
                    string: (0, L.we)("#Loading"),
                    size: "small",
                  })
          );
        }
        function be(B) {
          const { trailerToPlay: ee } = B,
            {
              rgDashTrailers: ye,
              rgHlsTrailers: Me,
              strCaptionManufest: Je,
            } = (0, c.useMemo)(() => {
              const { rgDashTrailers: $e, rgHlsTrailers: T } = (0, te.hg)(ee),
                $ = (0, te.Wv)(ee);
              return {
                rgDashTrailers: $e,
                rgHlsTrailers: T,
                strCaptionManufest: $,
              };
            }, [ee]);
          return ye?.length == 0
            ? null
            : (0, n.jsx)("div", {
                className: q().VideoPopupContainers,
                children: (0, n.jsx)(Q.P, {
                  dashManifests: ye || [],
                  hlsManifest: (Me.length > 0 && Me?.[0]) || "",
                  screenshot: (0, te.hl)(ee),
                  altText: ee.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: Je,
                }),
              });
        }
        var fe = r(34736),
          Ie = r(39239),
          Te = r(13465),
          Re = r(80150),
          Fe = r(18994),
          De = r(3166),
          H = r(68538);
        function ue(B) {
          const ee = (0, De.Qn)(),
            ye = (0, Fe.a4)(Fe.Wn),
            Me =
              String((0, t.j$)(B.args, "autoadvance")).toLowerCase() === "true";
          return (0, n.jsx)(H.F, {
            hideArrows: !ye,
            hidePips: ee,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: ye,
            bAutoAdvance: Me,
            className: F().ScreenshotCarousel,
            children: B.children,
          });
        }
        var K = r(37501),
          oe = r.n(K),
          se = r(1123);
        function Ee(B) {
          const { strURL: ee, children: ye } = B;
          return (
            typeof ee == "string"
              ? !(0, A.ZF)(ee)
              : ee.some((Je) => !(0, A.ZF)(Je))
          )
            ? (0, n.jsx)(Se, { children: ye })
            : (0, n.jsx)(n.Fragment, { children: ye });
        }
        function Se(B) {
          const { children: ee } = B;
          return (0, se.Ey)()
            ? (0, n.jsx)(n.Fragment, { children: ee })
            : (0, n.jsx)("div", {
                className: oe().ImageBlocked,
                children: (0, L.oW)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, n.jsx)("a", {
                    href: V.TS.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var ne = r(33645),
          le = r.n(ne);
        let je = null;
        function Ae() {
          return (
            je == null &&
              (je = new Map([
                ["url", { Constructor: b, autocloses: !1 }],
                ["dynamiclink", { Constructor: k, autocloses: !1 }],
                [
                  "h1",
                  {
                    Constructor: t.Tu(t.Zb, F().Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: t.Tu(t.Sz, F().Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: t.Tu(t.ZS, F().Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  { Constructor: t.Tu(t.Pk, F().BlockQuote), autocloses: !1 },
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
                ["img", { Constructor: Le, autocloses: !1 }],
                ["previewyoutube", { Constructor: y.gH, autocloses: !1 }],
                ["looping_media", { Constructor: s.$A, autocloses: !1 }],
                ["video", { Constructor: s.UT, autocloses: !1 }],
                ["youtubeorvideo", { Constructor: y.Eo, autocloses: !1 }],
                ["trailer", { Constructor: ke, autocloses: !1 }],
                [
                  "speaker",
                  {
                    Constructor: Ue,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["docimg", { Constructor: Ge, autocloses: !1 }],
                ["carousel", { Constructor: ue, autocloses: !1 }],
              ])),
            je
          );
        }
        function Le(B) {
          const { showErrorInfo: ee, event: ye } = B.context;
          let Me = (0, t.j$)(B.args, "src") || B.children?.toString();
          Me || (Me = (0, t.j$)(B.args)), (Me = (0, x.J)(Me ?? "") || void 0);
          const Je = (0, t.j$)(B.args, "style") === "inline",
            $e = (0, a.z5)(Me, B.language, ye?.rtime32_last_modified);
          if ($e == null) return null;
          if (typeof $e == "string") {
            Me = $e;
            let T;
            return (
              (T = !(0, A.ZF)(Me)),
              ye?.BHasTag("auto_rssfeed") && (T = !1),
              ee
                ? (0, n.jsx)(Ie.i, {
                    className: (0, W.A)({ [le().Image_Inline]: Je }),
                    src: Me,
                    crossOrigin: T ? "anonymous" : void 0,
                  })
                : ((Me = (0, A.L$)(Me)),
                  (0, n.jsx)(Ee, {
                    strURL: Me,
                    children: (0, n.jsx)(Re.o, {
                      className: (0, W.A)({ [le().Image_Inline]: Je }),
                      src: Me,
                      crossOrigin: T ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, n.jsx)(Ee, {
              strURL: $e,
              children: (0, n.jsx)(Te.c, { rgSources: $e }),
            });
        }
        function Ge(B) {
          const ee = (0, t.j$)(B.args);
          if (ee == null || ee == null || ee.length == 0) return "";
          const ye = B.children?.toString(),
            Me = new Array();
          return (
            Me.push(
              `${V.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${V.TS.LANGUAGE}/${ee}`,
            ),
            V.TS.LANGUAGE != "english" &&
              Me.push(
                `${V.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${ee}`,
              ),
            (0, n.jsx)(Te.c, { rgSources: Me, alt: ye })
          );
        }
        function ke(B) {
          const ee = ze(B.args, "appid", B.context.event?.appid ?? 0),
            ye = ze(B.args, "trailerid", 0);
          let Me =
            (0, t.j$)(B.args, "style")?.toLocaleLowerCase() ??
            pe.k_TrailerAsFull;
          Me = Object.values(pe).includes(Me) ? Me : pe.k_TrailerAsFull;
          const Je = (0, S.O)(B.args.color, "black"),
            $e = (0, S.O)(B.args.bgcolor, "white"),
            T = (0, s.g4)(B.args);
          return (0, n.jsx)(me, {
            appid: ee,
            trailerBaseID: ye,
            bIsPreviewMode: B.context.showErrorInfo,
            embedStyle: Me,
            color: Je,
            bgcolor: $e,
            subtitles: T.rgVideoTracks,
            children: B.children,
          });
        }
        function Ue(B) {
          const ee = (0, t.j$)(B.args, "name"),
            ye = (0, t.j$)(B.args, "title"),
            Me = (0, t.j$)(B.args, "company"),
            Je = (0, t.j$)(B.args, "photo");
          return B.context.bShowShortSpeakerInfo
            ? (0, n.jsx)(fe.S8, {
                name: ee,
                title: ye,
                company: Me,
                photo: Je,
                bio: B.children,
              })
            : (0, n.jsx)(fe.$k, {
                name: ee,
                title: ye,
                company: Me,
                photo: Je,
                bio: B.children,
              });
        }
        function ze(B, ee, ye) {
          const Me = (0, t.j$)(B, ee);
          return Me === void 0 || Me == null ? ye : Number.parseInt(Me);
        }
      },
      1683: (ge, de, r) => {
        "use strict";
        r.d(de, { d3: () => te, Zn: () => re });
        var n = r(7850),
          x = r(33770),
          a = r(7487),
          s = r(72609),
          t = r(90626),
          y = r(70187),
          z = r(86722),
          V = r(39414),
          U = r(38340),
          N = r(96197),
          F = r(53113);
        class _ extends a.K0 {
          m_LinkFilter = V.O;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(c, m, M, p) {
            super(c),
              (this.m_parentNode = m),
              (this.m_mapHostToComponent = M),
              (this.m_globalStoreLink = p);
          }
          AppendText(c, m = !1) {
            let M = c;
            if (
              (m || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let p = this.m_LinkFilter.exec(M);
              for (; p; ) {
                if (p.index > 0) {
                  let D = p.input.substring(0, p.index);
                  super.AppendText(D, m);
                }
                let L = p[0],
                  P = !1;
                if (this.m_mapHostToComponent) {
                  for (let D = 0; D < this.m_mapHostToComponent.length; ++D)
                    if (this.m_mapHostToComponent[D].urlRegExp.exec(L)) {
                      (P = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[D].fnBBComponent(
                            L,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                P || super.AppendNode((0, z.Pm)(L)),
                  (M = p.input.substring(p.index + L.length)),
                  (p = this.m_LinkFilter.exec(M));
              }
            }
            M.length > 0 && super.AppendText(M, m);
          }
        }
        const W = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class A extends a.K0 {
          m_EmoteRegex = new RegExp(W);
          AppendText(c, m = !1) {
            let M = c;
            if (c.length >= 3) {
              let p = this.m_EmoteRegex.exec(M);
              for (; p; ) {
                if (p.index > 0) {
                  let P = p.input.substring(0, p.index);
                  super.AppendText(P, m);
                }
                let L = p[1];
                super.AppendNode(t.createElement(N.n, { emoticon: L }, [])),
                  (M = p.input.substring(p.index + L.length + 2)),
                  (p = this.m_EmoteRegex.exec(M));
              }
            }
            M.length > 0 && super.AppendText(M, m);
          }
        }
        class S extends a.K0 {
          m_parentNode = void 0;
          constructor(c, m) {
            super(c), (this.m_parentNode = m);
          }
          AppendText(c, m = !1) {
            let M = c;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              !v(M) &&
              (M = (0, F.L$)(M)),
              super.AppendText(M, m);
          }
        }
        function v(Q) {
          const c = Q.trim();
          return c.startsWith(U.lw) || c.startsWith(U.eg);
        }
        var w = r(11547),
          g = r(35265);
        let o = null;
        function h() {
          return (
            o == null &&
              (o = new Map([
                ...Array.from(y.W4.entries()),
                ...Array.from((0, w.k)().entries()),
              ])),
            o
          );
        }
        const b = t.createContext(null);
        function k() {
          return t.useContext(b) ?? h();
        }
        function te(Q) {
          const c = k(),
            m = t.useMemo(
              () =>
                new Map([
                  ...Array.from(c.entries()),
                  ...Array.from(Q.dictionary.entries()),
                ]),
              [c, Q.dictionary],
            );
          return (0, n.jsx)(b.Provider, { value: m, children: Q.children });
        }
        function re(Q) {
          const {
              text: c,
              languageOverride: m,
              event: M,
              showErrorInfo: p,
              bShowShortSpeakerInfo: L,
            } = Q,
            P = (0, g.m$)(),
            D = t.useCallback(
              (G) =>
                new S(
                  new A(new _(new a.OJ(new a.R8()), G, P, { event: M })),
                  G,
                ),
              [M, P],
            ),
            I = k();
          return t
            .useMemo(() => new x.B(I, D, m || s.TS.LANGUAGE), [I, D, m])
            .ParseBBCode(c, {
              showErrorInfo: p,
              event: M,
              bShowShortSpeakerInfo: L,
              bbcode: c,
            });
        }
        function J(Q) {
          const {
              strTag: c,
              args: m,
              rawargs: M,
              language: p = PchLanguageToELanguage(Config.LANGUAGE),
              children: L,
              ...P
            } = Q,
            D = k().get(c);
          return D
            ? jsx(D.Constructor, {
                context: P,
                tagname: c,
                args: m,
                language: p,
                rawargs: M,
                children: L,
              })
            : jsxs(Fragment, { children: [`[${c}]`, L, `[/${c}]`] });
        }
      },
      35265: (ge, de, r) => {
        "use strict";
        r.d(de, { m$: () => dt, W7: () => It });
        var n = r(7850),
          x = r(32093),
          a = r(72609),
          s = r(88743),
          t = r(40358),
          y = r(90626),
          z = r(86722),
          V = r(6878),
          U = r.n(V),
          N = r(36118),
          F = r(36707),
          _ = r(87949),
          W = r(55483),
          A = r(10985),
          S = r(99412),
          v = r(47797),
          w = r(76559);
        const g =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          o =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
          h = [g, o],
          b =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
        function k(Z, X) {
          const ie = new RegExp(Z).exec(X);
          if (!ie || ie.length <= 3) return;
          const Pe = ie[3];
          if (Pe)
            switch (ie[1]) {
              case "gid":
                return { eventGID: Pe, strClanSteamID64: ie[2] };
              case "group":
                return { eventGID: Pe, clanAccountID: Number.parseInt(ie[2]) };
              case "groups":
                return { eventGID: Pe, strGroupVanity: ie[2] };
              default:
                return isNaN(+ie[2])
                  ? { eventGID: Pe, strOGGVanity: ie[2] }
                  : { eventGID: Pe, appid: Number(ie[2]) };
            }
        }
        function te(Z) {
          for (const X of h) {
            const ie = k(X, Z);
            if (ie) return ie;
          }
        }
        function re(Z) {
          const X = [],
            ie = new Set(),
            Pe = [
              ...h.map((Oe) => ({ regExp: Oe, bAnnouncement: !1 })),
              { regExp: b, bAnnouncement: !0 },
            ];
          for (const { regExp: Oe, bAnnouncement: Ye } of Pe)
            for (const _e of Z.matchAll(new RegExp(Oe, "gi"))) {
              const nt = k(Oe, _e[0]);
              nt &&
                !ie.has(`${Ye ? "A" : "E"}${nt.eventGID}`) &&
                (ie.add(`${Ye ? "A" : "E"}${nt.eventGID}`),
                X.push({ link: nt, bAnnouncement: Ye }));
            }
          return X;
        }
        var J = r(9046),
          Q = r(72080),
          c = r(29522),
          m = r(85599),
          M = r(18210),
          p = r(13465),
          L = r(56492),
          P = r(88812),
          D = r(39654);
        function I({ clanSteamID: Z, strVanity: X, strGroupVanity: ie }) {
          const Pe = X !== void 0 || ie !== void 0,
            { data: Oe, isPending: Ye } = (0, W.W$)(
              Pe ? (X ?? ie ?? "") : "",
              X !== void 0 ? "store" : "group",
            );
          if (!Pe) return Z?.GetAccountID();
          if (!Ye) return Oe?.clanAccountID ?? null;
        }
        function C(Z) {
          const { appid: X, announcementGID: ie, eventGID: Pe, strURL: Oe } = Z,
            Ye = I(Z),
            _e = Ye === null,
            nt = Ye != null,
            {
              data: it,
              isPending: Dt,
              isError: Yt,
            } = (0, D.vE)(
              _e
                ? void 0
                : {
                    clanAccountID: nt ? Ye : void 0,
                    appid: X,
                    eventGID: Pe,
                    announcementGID: ie,
                  },
            ),
            Zt = (0, c.$5)(X || it?.appid || void 0),
            { data: He } = (0, t.J$)(Zt);
          if (_e || Yt || it === null) return (0, z.Pm)(Oe);
          if (Dt || !it) return (0, n.jsx)(m.t, {});
          const e = (0, S.sfN)(a.TS.LANGUAGE),
            i = it.GetNameWithFallback(e),
            O = it.GetSubTitleWithSummaryFallback(e),
            Xt = He?.name,
            en = (0, M.TW)(it.GetStartTimeAndDateUnixSeconds());
          return (0, n.jsxs)(L.tj, {
            eventModel: it,
            route: L.PH.k_eView,
            className: Q.gg.Box,
            "data-modal-content-sizetofit": !0,
            "data-appid": X,
            children: [
              (0, n.jsx)(G, { ...Z, event: it }),
              (0, n.jsxs)(Q.J7, {
                children: [
                  (0, n.jsxs)(Q.zN, {
                    children: [
                      (0, M.we)(
                        it.type == S.uYK
                          ? "#EventDisplay_Share_Announcement"
                          : "#EventDisplay_Share_Event",
                        Xt ?? "",
                      ),
                      (0, n.jsx)(Q.MG, { children: en }),
                    ],
                  }),
                  (0, n.jsx)(Q.bv, {
                    children: (0, n.jsx)("div", {
                      className: Q.gg.Type,
                      children: i,
                    }),
                  }),
                  (0, n.jsx)(Q.AT, { children: O }),
                ],
              }),
            ],
          });
        }
        function G(Z) {
          const {
            event: X,
            fnFilterImageURLsForKnownFailures: ie,
            fnImageFailureCallback: Pe,
          } = Z;
          let Oe = (0, S.sfN)(a.TS.LANGUAGE),
            Ye = (0, P.WC)(X, "capsule", Oe, J.wI.capsule_main) ?? [];
          return (
            Ye && ie && (Ye = ie(Ye)),
            (0, n.jsx)(p.c, {
              className: Q.gg.Preview,
              rgSources: Ye ?? [],
              onIncrementalError: (_e, nt, it) => Pe && Pe(nt),
            })
          );
        }
        var q = r(10349),
          pe = r(53113);
        const E =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          ve = ["store.steampowered.com", "store.steamchina.com"],
          me = ["steampowered.com", "steamcommunity.com"],
          Y = ["steamchina.com"],
          be = ["steam.dev", "valve.org"];
        function fe(Z, X) {
          return X.some((ie) => Z == ie || Z.endsWith(`.${ie}`));
        }
        function Ie(Z) {
          const X = (0, pe.wm)(Z).toLocaleLowerCase(),
            ie = (0, pe.wm)(a.TS.STORE_BASE_URL).toLocaleLowerCase(),
            Pe = (0, pe.wm)(a.TS.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return X == ie || X == Pe
            ? !0
            : ve.includes(ie)
              ? fe(X, fe(ie, Y) ? Y : me)
              : fe(X, [...me, ...Y, ...be]);
        }
        function Te(Z) {
          if (Ie(Z)) return Re(Z);
        }
        function Re(Z) {
          const X = new RegExp(E).exec(Z);
          if (!X || X.length <= 2) return;
          const ie = X[1].toLowerCase(),
            Pe = Number(X[2]);
          if (!(!(Pe > 0) || !(0, q.nB)(ie)))
            return {
              id: Pe,
              strItemType: ie,
              storeItemKey:
                ie == "sub"
                  ? { packageid: Pe }
                  : ie == "bundle"
                    ? { bundleid: Pe }
                    : { appid: Pe },
            };
        }
        function Fe(Z) {
          const X = [],
            ie = new Set();
          for (const Pe of Z.matchAll(new RegExp(E, "gi"))) {
            const Oe = Re(Pe[0]);
            Oe &&
              !ie.has(`${Oe.strItemType}/${Oe.id}`) &&
              (ie.add(`${Oe.strItemType}/${Oe.id}`), X.push(Oe));
          }
          return X;
        }
        function De(Z) {
          return (
            !!Z && (Z.GetEventType() == S.ajI || Z.GetEventType() == S.HRy)
          );
        }
        function H(Z) {
          const X = De(Z),
            ie = X ? Z.clanSteamID.GetAccountID() : void 0,
            { data: Pe, isLoading: Oe } = (0, W.TB)(ie),
            { data: Ye, isLoading: _e } = (0, A.A5)(ie);
          if (!X) return null;
          if (!(Oe || _e))
            return !Ye || !Pe || !(0, v.Ns)(Z, Pe) ? null : (Ye.appids ?? []);
        }
        function ue(Z, X) {
          return Z === null
            ? !0
            : X.length > 0 && X.every((ie) => Z.includes(ie));
        }
        function K(Z, X) {
          const ie = H(X);
          if (Z.appid === void 0) return !0;
          if (!(Z.appid > 0)) return !1;
          if (ie !== void 0) return ue(ie, [Z.appid]);
        }
        function oe({ link: Z, strURL: X, eventModel: ie, bAnnouncement: Pe }) {
          const Oe = K(Z, ie);
          if (Oe === void 0) return null;
          if (!Oe) return (0, z.Pm)(X, ie);
          const Ye =
            Z.strClanSteamID64 !== void 0
              ? new w.b(Z.strClanSteamID64)
              : Z.clanAccountID !== void 0
                ? w.b.InitFromClanID(Z.clanAccountID)
                : void 0;
          return (0, n.jsx)(C, {
            appid: Z.appid,
            clanSteamID: Ye,
            strVanity: Z.strOGGVanity,
            strGroupVanity: Z.strGroupVanity,
            eventGID: Pe ? void 0 : Z.eventGID,
            announcementGID: Pe ? Z.eventGID : void 0,
            strURL: X,
          });
        }
        function se(Z, X, ie, Pe = !1) {
          if (Ie(X)) {
            const Oe = k(Z, X);
            if (Oe)
              return (0, n.jsx)(oe, {
                link: Oe,
                strURL: X,
                eventModel: ie?.event,
                bAnnouncement: Pe,
              });
          }
          return (0, z.Pm)(X, ie?.event);
        }
        function Ee(Z, X) {
          return se(o, Z, X);
        }
        function Se(Z, X) {
          return se(g, Z, X);
        }
        function ne(Z, X) {
          return se(b, Z, X, !0);
        }
        const le = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
        function je(Z) {
          if (!le.test(Z)) return;
          const X = Z.split("?");
          if (X.length == 2)
            return new URLSearchParams(X[1]).get("id") ?? void 0;
        }
        var Ae = r(3946),
          Le = r(13854),
          Ge = r(374);
        function ke(Z) {
          const { sharedFileID: X } = Z,
            { data: ie } = (0, Ge.oK)(X),
            Pe = a.TS.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=",
            Oe = ie ?? {
              sharedfileid: X,
              title: (0, M.we)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url: Pe + X,
            },
            Ye = (0, Le.TG)(Oe.url) ? Pe + Oe.url : Oe.url;
          let _e = Oe.personnaname !== void 0 && Oe.personnaname.length > 0;
          return (0, n.jsx)(Ae.V, {
            strURL: Ye,
            strTitle: Oe.title,
            strPreviewURL: Oe.previewurl,
            strType: Oe.type,
            strDescription: Oe.description,
            author:
              _e &&
              (0, M.PP)(
                "#EventEditor_Author",
                (0, n.jsx)(Q.mZ, { children: Oe.personnaname }),
              ),
            publishedfileid: X,
            appid: Oe.appid,
            bSizeToFit: Oe.bSizeToFit,
          });
        }
        var Ue = r(80902),
          ze = r(32651),
          B = r.n(ze);
        const ee = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
        function ye(Z) {
          const X = new Set();
          for (const ie of Z.matchAll(new RegExp(ee, "gi")))
            ie[1] && X.add(ie[1]);
          return Array.from(X);
        }
        function Me(Z) {
          return ["sketchfab_oembed", Z];
        }
        function Je(Z) {
          return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(Z)}`;
        }
        function $e(Z) {
          return {
            queryKey: Me(Z),
            queryFn: async () => {
              const X = await fetch(Je(Z));
              if (X.status === 404) return null;
              if (!X.ok)
                throw new Error(`sketchfab oembed returned ${X.status}`);
              return await X.json();
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function T(Z) {
          return (0, Ue.I)($e(Z));
        }
        function $(Z) {
          const { modelID: X } = Z,
            [ie, Pe] = y.useState(!0),
            { data: Oe } = T(X);
          if (ie) {
            const Ye = () => Pe(!1),
              _e = (nt) => {
                (nt.key === "Enter" || nt.key === " ") &&
                  (nt.preventDefault(), Ye());
              };
            return (0, n.jsxs)("div", {
              className: B().dynamiclink_box,
              role: "button",
              tabIndex: 0,
              onClick: Ye,
              onKeyDown: _e,
              children: [
                Oe?.thumbnail_url &&
                  (0, n.jsx)("img", {
                    className: B().dynamiclink_preview,
                    src: Oe.thumbnail_url,
                    alt: Oe.title,
                  }),
                (0, n.jsx)("img", {
                  className: B().sketchfab_play_overlay_image,
                  alt: "",
                }),
                (0, n.jsxs)("div", {
                  className: B().dynamiclink_content,
                  children: [
                    (0, n.jsxs)("div", {
                      className: B().dynamiclink_name,
                      children: [
                        (0, n.jsx)("span", {
                          className: B().dynamiclink_type,
                          children: (0, M.we)("#EventDisplay_Sketchfab"),
                        }),
                        Oe?.title &&
                          (0, n.jsxs)("div", { children: [Oe.title, "\xA0"] }),
                      ],
                    }),
                    Oe?.author_name &&
                      (0, n.jsx)("div", {
                        className: B().dynamiclink_author,
                        children: Oe.author_name,
                      }),
                  ],
                }),
              ],
            });
          }
          return (0, n.jsx)("div", {
            className: B().sketchfabmodelembedded,
            children: (0, n.jsx)("iframe", {
              className: B().sketchfabmodelembedded,
              title: Oe?.title ?? X,
              src: `https://sketchfab.com/models/${encodeURIComponent(X)}/embed?autostart=1`,
              frameBorder: 0,
              allowFullScreen: !0,
            }),
          });
        }
        const he =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
        function xe(Z) {
          const X = he.exec(Z),
            ie = X ? Number(X[1]) : 0;
          return ie > 0 ? ie : void 0;
        }
        function we(Z) {
          return Ie(Z) ? xe(Z) : void 0;
        }
        function Qe(Z) {
          const X = new Set();
          for (const ie of Z.matchAll(new RegExp(k_LinkRegex, "g"))) {
            const Pe = xe(ie[0]);
            Pe && X.add(Pe);
          }
          return Array.from(X);
        }
        var Ce = r(31774),
          ut = r(71421),
          tt = r(33998),
          Mt = r.n(tt);
        function et(Z) {
          const { defid: X } = Z,
            ie = (0, Ce.wk)(X);
          if (!ie || !ie.community_item_data) return null;
          const Pe = ie.appid,
            Oe = ie.community_item_data.item_image_large,
            Ye = `${a.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${Pe}/${Oe}`;
          return (0, n.jsx)("div", {
            className: Mt().Ctn,
            children: (0, n.jsx)(ut.he, {
              toolTipContent: ie.community_item_data.item_description,
              children: (0, n.jsx)("img", {
                src: Ye,
                alt: ie.community_item_data.item_title,
              }),
            }),
          });
        }
        var lt = r(43597);
        const yt = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
          Wt = /twitter\.com\/(\w+)(\/?)$/i,
          ht = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
          ct = /twitch\.tv\/(\w+)(\/?)$/i,
          qe =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
        function st() {
          return a.TS.EREALM === x.TU.k_ESteamRealmChina;
        }
        const at = new Map();
        function dt() {
          const Z = a.TS.EREALM;
          let X = at.get(Z);
          return (
            X ||
              (st()
                ? (X = [
                    { urlRegExp: new RegExp(E), fnBBComponent: Ve },
                    { urlRegExp: new RegExp(g), fnBBComponent: Se },
                    { urlRegExp: new RegExp(o), fnBBComponent: Ee },
                    { urlRegExp: new RegExp(b), fnBBComponent: ne },
                    { urlRegExp: new RegExp(qe), fnBBComponent: Nt },
                  ])
                : (X = [
                    {
                      urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                      fnBBComponent: lt.j6,
                    },
                    { urlRegExp: new RegExp(le), fnBBComponent: Rt },
                    { urlRegExp: new RegExp(E), fnBBComponent: Ve },
                    { urlRegExp: new RegExp(g), fnBBComponent: Se },
                    { urlRegExp: new RegExp(o), fnBBComponent: Ee },
                    { urlRegExp: new RegExp(b), fnBBComponent: ne },
                    { urlRegExp: new RegExp(yt), fnBBComponent: bt },
                    { urlRegExp: new RegExp(ee), fnBBComponent: pt },
                    { urlRegExp: new RegExp(Wt), fnBBComponent: kt },
                    { urlRegExp: new RegExp(ht), fnBBComponent: St },
                    { urlRegExp: new RegExp(ct), fnBBComponent: jt },
                    { urlRegExp: new RegExp(qe), fnBBComponent: Nt },
                    { urlRegExp: new RegExp(he), fnBBComponent: xt },
                  ]),
              at.set(Z, X)),
            X
          );
        }
        function Et(Z) {
          return dt().find((X) => !!X.urlRegExp.exec(Z));
        }
        function It(Z) {
          return y.useMemo(() => Et(Z), [Z]);
        }
        function bt(Z, X) {
          if (st()) return null;
          const ie = new RegExp(yt).exec(Z);
          if (ie && ie.length > 1) {
            const Pe = ie[1];
            if (Pe?.length > 0) {
              let Oe =
                "https://medal.tv/clip/" +
                Pe +
                "/?autoplay=0&donate=0" +
                (X && X.event ? "&steamappid=" + X.event.appid : "");
              return (0, n.jsx)("iframe", {
                className: U().MedalTVWidget,
                src: Oe,
                title: Pe,
                frameBorder: 0,
                allow: "autoplay",
              });
            }
          }
          return (0, z.Pm)(Z, X?.event);
        }
        function pt(Z, X) {
          let ie = new RegExp(ee).exec(Z);
          if (ie && ie.length > 1) {
            let Pe = ie[1];
            if (Pe && Pe.length > 1) return (0, n.jsx)($, { modelID: Pe });
          }
          return (0, z.Pm)(Z, X?.event);
        }
        function Rt(Z, X) {
          const ie = je(Z);
          return ie !== void 0
            ? (0, n.jsx)(ke, { sharedFileID: ie })
            : (0, z.Pm)(Z, X?.event);
        }
        function Ve(Z, X) {
          const ie = Te(Z);
          return ie
            ? (0, n.jsx)(Gt, {
                eventModel: X?.event,
                inputID: ie.id,
                inputType: ie.strItemType,
                fallbackUrl: Z,
              })
            : (0, z.Pm)(Z, X?.event);
        }
        function Gt(Z) {
          const {
              inputID: X,
              inputType: ie,
              eventModel: Pe,
              fallbackUrl: Oe,
            } = Z,
            Ye = (0, s.dE)(X, ie),
            { data: _e } = (0, t.J$)(Ye),
            nt = H(Pe);
          let it;
          if (nt === null) it = !0;
          else if (nt && _e) {
            const Dt = _e.appid ? [_e.appid] : (_e.included_appids ?? []);
            it = ue(nt, Dt);
          }
          return it === void 0
            ? null
            : it
              ? (0, n.jsx)(_.e, {
                  id: X,
                  inputType: ie,
                  bApplyUserContentPref: !0,
                })
              : (0, z.Pm)(Oe, Pe);
        }
        function xt(Z, X) {
          const ie = we(Z);
          return ie
            ? (0, n.jsx)("div", {
                className: (0, F.A)(U().LoyaltyRewardCtn),
                children: (0, n.jsx)(et, { defid: ie, url: Z }),
              })
            : (0, z.Pm)(Z, X?.event);
        }
        function kt(Z, X) {
          return st() ? null : wt(Z, (0, n.jsx)(N.KKS, {}), "@", X);
        }
        function St(Z, X) {
          return st() ? null : wt(Z, (0, n.jsx)(N.KKS, {}), "#", X);
        }
        function jt(Z, X) {
          return st() ? null : wt(Z, (0, n.jsx)(N.qcc, {}), void 0, X);
        }
        function Nt(Z, X) {
          return wt(Z, (0, n.jsx)(N.Qte, {}), void 0, X);
        }
        function wt(Z, X, ie, Pe) {
          let Oe;
          const Ye = Z.endsWith("/") ? Z.length - 1 : Z.length,
            _e = Z.lastIndexOf("/", Ye - 1);
          _e != -1 && _e + 1 < Z.length && (Oe = Z.substring(_e + 1, Ye)),
            ie && Oe && (Oe = ie + Oe);
          const nt = (0, z.Pm)(Z, Pe?.event, Oe ?? Z);
          return (0, n.jsxs)("div", {
            className: U().SocialLink,
            children: [
              (0, n.jsx)("div", { className: U().SocialIcon, children: X }),
              nt,
            ],
          });
        }
      },
      39654: (ge, de, r) => {
        "use strict";
        r.d(de, { vE: () => S });
        var n = r(72604),
          x = r(99412),
          a = r(72609),
          s = r(80902),
          t = r(38884),
          y = r(76559),
          z = r(18210);
        const V = "events/ajaxgetpartnerevent";
        function U(v) {
          const w = z.A0.GetELanguageFallback(v);
          return v != w ? `${v}_${w}` : `${v}`;
        }
        function N(v) {
          return v ? (0, t.oE)(new y.b(v.clanSteamID64), v.event) : null;
        }
        async function F(v, w) {
          const g = new URLSearchParams();
          v.clanAccountID && g.set("clan_accountid", String(v.clanAccountID)),
            v.appid && g.set("appid", String(v.appid)),
            v.eventGID && g.set("event_gid", v.eventGID),
            v.announcementGID && g.set("announcement_gid", v.announcementGID),
            g.set("lang_list", U(w)),
            g.set("last_modified_time", "0"),
            g.set("origin", window.location.origin);
          const o = a.TS.STORE_BASE_URL + V + "?" + g.toString(),
            h = await fetch(o);
          if (!h.ok) throw new Error(`${o} answered ${h.status}`);
          const b = await h.json();
          return b.success !== n.R || !b.event?.clan_steamid
            ? null
            : { clanSteamID64: b.event.clan_steamid, event: b.event };
        }
        function _(v, w) {
          return [
            "LinkedPartnerEvent",
            v.clanAccountID,
            v.appid,
            v.eventGID,
            v.announcementGID,
            w,
          ];
        }
        function W(v) {
          return (
            !!v &&
            (!!v.clanAccountID || !!v.appid) &&
            (!!v.eventGID || !!v.announcementGID)
          );
        }
        function A(v, w) {
          const g = W(v);
          return {
            queryKey: _(v ?? {}, w),
            queryFn: () => F(v ?? {}, w),
            select: N,
            enabled: g,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function S(v) {
          const w = (0, x.sfN)(a.TS.LANGUAGE);
          return (0, s.I)(A(v, w));
        }
      },
      56492: (ge, de, r) => {
        "use strict";
        r.d(de, {
          Bw: () => I,
          EX: () => re,
          Hx: () => q,
          JP: () => te,
          LJ: () => M,
          OG: () => G,
          PH: () => o,
          T7: () => Q,
          sY: () => p,
          tj: () => pe,
          yh: () => D,
        });
        var n = r(7850),
          x = r(50974),
          a = r(99412),
          s = r(24660),
          t = r(72865),
          y = r(90626),
          z = r(92757),
          V = r(83482),
          U = r(16369),
          N = r(10303),
          F = r(64165),
          _ = r(71742),
          W = r(53113),
          A = r(3166),
          S = r(72609),
          v = r(39905),
          w = r(47875),
          g = r(40358),
          o = ((E) => (
            (E.k_eView = "view"),
            (E.k_eViewWebSiteHub = "websitehub"),
            (E.k_eCommunityView = "communityview"),
            (E.k_eCommunityEdit = "edit"),
            (E.k_eCommunityEditBroadcast = "editBroadcast"),
            (E.k_eCommunityAdminPage = "admin"),
            (E.k_eCommunityPublish = "publish"),
            (E.k_eCommunityMigrate = "migrate"),
            (E.k_eCommunityPreview = "preview"),
            (E.k_eCommunityPreviewSale = "previewsale"),
            (E.k_eCommunityAnnouncementHub = "community_announcehub"),
            (E.k_eStoreView = "storeview"),
            (E.k_eStoreNewsHub = "newshub"),
            (E.k_eStoreOwnerPage = "store"),
            (E.k_eStoreSalePage = "sale"),
            (E.k_eStoreHardwarePreview = "hardwarepreview"),
            (E.k_eStoreUsersNewsHub = "usernewshub"),
            E
          ))(o || {});
        const h =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function b(E) {
          return E.match(h)?.[1];
        }
        function k(E, ve) {
          if (!ve) return !1;
          const me = !0,
            Y = b(window.location.href),
            be = me && Y == "news",
            fe = ve.GetEventType() == a.ajI,
            Ie = !1,
            Te = ve.appid ? "games" : "groups",
            Re =
              Ie &&
              Te == Y &&
              ((ve.appid && ve.appid === A.UF.APPID) ||
                (!ve.appid &&
                  ve.clanSteamID.GetAccountID() === A.UF.CLANACCOUNTID));
          switch (E) {
            case "view":
              return Re || (be && !p());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return Re;
            case "admin":
              return fe ? !1 : Re;
            case "websitehub":
              return Re || be;
            case "storeview":
              return be && !p();
            case "newshub":
            case "store":
            case "usernewshub":
              return be;
            case "sale":
              return !1;
            case "hardwarepreview":
              return !1;
            default:
              return (
                (0, _.wT)(!1, "Unknown route specified for link: " + E), !1
              );
          }
        }
        function te(E) {
          const ve =
            S.TS.COMMUNITY_BASE_URL +
            "gid/" +
            E.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            E.AnnouncementGID;
          return {
            strFacebookUrl: ve + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: ve + "?site=twitter",
            strRedditUrl: ve + "?site=reddit",
          };
        }
        function re(E) {
          return P(E, "sale", "absolute");
        }
        function J(E, ve) {
          return D(E, ve, "sale", "absolute");
        }
        function Q(E) {
          return P(E, "storeview", "absolute");
        }
        function c(E, ve) {
          return D(E, ve, "storeview", "absolute");
        }
        function m(E, ve, me) {
          if (me)
            return (
              (E ? "/games/" + A.UF.VANITY_ID : "/groups/" + A.UF.VANITY_ID) +
              "/"
            );
          const Y = E ? "ogg/" + E : "gid/" + ve.ConvertTo64BitString();
          return S.TS.COMMUNITY_BASE_URL + Y + "/";
        }
        function M() {
          return "news";
        }
        function p() {
          return !1;
        }
        function L(E) {
          return E.clanSteamID.GetAccountID() === x.gt && !1;
        }
        function P(E, ve, me) {
          const { data: Y } = (0, g.J$)(E?.appid ? { appid: E.appid } : void 0);
          if (E) return D(E, Y, ve, me);
        }
        function D(E, ve, me, Y) {
          const be = Y === "relative",
            fe = !1,
            Ie = be ? "/" : S.TS.STORE_BASE_URL,
            Te = m(E.appid, E.clanSteamID, be);
          me === "view"
            ? (me = fe ? "communityview" : "storeview")
            : me === "websitehub" &&
              (me = fe ? "community_announcehub" : "newshub");
          const Re = E.GID ? E.GID : "",
            Fe = E.AnnouncementGID ? E.AnnouncementGID : "",
            De =
              E.BIsOGGEvent() &&
              E.appid &&
              ve &&
              E.BHasSaleUpdateLandingPageVanity(),
            H = E.GetEventType() == a.ajI;
          switch (me) {
            case "publish":
              return (
                Te +
                (E.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Fe
                  : "partnerevents/publish/" + Re + "?tab=publishing")
              );
            case "edit":
              return (
                Te +
                (E.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Fe
                  : "partnerevents/edit/" + Re)
              );
            case "editBroadcast":
              return (
                Te +
                (E.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Fe
                  : "partnerevents/edit/" + Re) +
                "?tab=broadcast"
              );
            case "migrate":
              return Te + "partnerevents/migrate_announcement/" + Fe;
            case "preview":
              return H
                ? Te + "partnerevents/previewsale/" + Re
                : Te +
                    (E.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + Fe
                      : "partnerevents/preview/" + Re);
            case "previewsale":
              return Te + "partnerevents/previewsale/" + Re;
            case "admin":
              return H
                ? `${Ie}curator/${E.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : Te + "partnerevents";
            case "community_announcehub":
              return Te + "announcements";
            case "newshub": {
              const ue = E.appid
                ? `app/${E.appid}`
                : `group/${E.clanSteamID.GetAccountID()}`;
              return Ie + `${M()}/${ue}`;
            }
            case "store":
              return (
                Ie +
                (E.appid
                  ? "app/" + E.appid
                  : "curator/" + E.clanSteamID.GetAccountID())
              );
            case "sale":
              return E.jsondata.bSaleEnabled
                ? De
                  ? `${(0, w._)(ve)}/${E.GetSaleUpdateLandingPageVanity()}`
                  : H
                    ? `${Ie}curator/${E.clanSteamID.GetAccountID()}`
                    : Ie +
                      (0, F.n)(
                        E.clanSteamID.GetAccountID(),
                        E.GetSaleVanity(),
                        !!E.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath,
                      )
                : Ie;
            case "hardwarepreview":
              return L(E) ? `${Ie}hardware_v2/${Fe}?beta=1` : Ie;
            case "communityview":
              return Te + "announcements/detail/" + Fe;
            case "storeview": {
              if (E.clanSteamID.GetAccountID() == (0, U.H)())
                return `${S.TS.STORE_BASE_URL}meetsteam/${Re}`;
              if (De)
                return `${(0, w._)(ve)}/${E.GetSaleUpdateLandingPageVanity()}`;
              if (H) return `${Ie}curator/${E.clanSteamID.GetAccountID()}`;
              {
                const ue = E.appid
                    ? `app/${E.appid}`
                    : `group/${E.clanSteamID.GetAccountID()}`,
                  K = p() ? "view_v2" : "view",
                  oe = E.bOldAnnouncement ? `old_view/${Fe}` : `${K}/${Re}`;
                return `${Ie}${M()}/${ue}/${oe}`;
              }
            }
            case "usernewshub":
              return `${Ie}${M()}/`;
            default:
              return (0, _.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function I(E, ve, me) {
          const Y = me === "forceAbsolute" || !k(ve, E);
          return P(E, ve, Y ? "absolute" : "relative");
        }
        function C(E, ve, me, Y) {
          const be = Y === "forceAbsolute" || !k(me, E);
          return D(E, ve, me, be ? "absolute" : "relative");
        }
        function G(E) {
          const { eventModel: ve, route: me, bPopup: Y = !0 } = E,
            be = k(me, ve),
            fe = P(ve, me, be ? "relative" : "absolute");
          return (
            y.useEffect(() => {
              fe && (Y ? window.open(fe) : window.location.assign(fe));
            }, [Y, fe]),
            be && fe ? (0, n.jsx)(z.rd, { push: !0, to: fe }) : null
          );
        }
        function q(E, ve, me) {
          const Y = m(E, ve, !1);
          return me === "admin" ? Y + "partnerevents" : "";
        }
        function pe(E) {
          const { eventModel: ve, preferredFocus: me } = E,
            { bCanUseLink: Y } = y.useContext(N.I),
            be = (0, t.n9)(),
            fe = (0, z.W6)(),
            Ie = Y && k(E.route, ve),
            Te = P(ve, E.route, Ie ? "relative" : "absolute"),
            Re = !Ie && Te ? (0, W.NT)(Te) : Te,
            Fe = Ie || !Re ? Re : (0, V.wJ)(Re, be),
            De = P(ve, "websitehub", "absolute"),
            H =
              E.route != "websitehub"
                ? v.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            ue = y.useCallback(() => {
              De && window.location.assign(De);
            }, [De]);
          return ve
            ? Ie
              ? (0, n.jsx)(s.Ii, {
                  style: E.style,
                  className: E.className,
                  href: fe.createHref({ pathname: Fe }),
                  onClick: (K) => {
                    Fe && (E.onClick?.(K), fe.push(Fe), K.preventDefault());
                  },
                  onOptionsActionDescription: H,
                  onOptionsButton: H ? ue : void 0,
                  preferredFocus: me,
                  children: E.children,
                })
              : (0, n.jsx)(s.Ii, {
                  href: Fe,
                  style: E.style,
                  className: E.className,
                  onClick: E.onClick,
                  preferredFocus: me,
                  onOptionsActionDescription: H,
                  onOptionsButton: H ? ue : void 0,
                  children: E.children,
                })
            : null;
        }
      },
      32606: (ge, de, r) => {
        "use strict";
        r.d(de, { O: () => U, j: () => V });
        var n = r(7850),
          x = r(65946),
          a = r(18057),
          s = r(36707),
          t = r(71684),
          y = r(38182),
          z = r.n(y);
        function V(N) {
          const {
              event: F,
              className: _,
              nOverrideStartTime: W,
              nOverrideEndTime: A,
            } = N,
            S = N.stylesmodule ? { ...z(), ...N.stylesmodule } : z(),
            [v, w, g] = (0, x.q3)(() => [
              W ||
                (F.bOldAnnouncement
                  ? F.postTime
                  : F.GetStartTimeAndDateUnixSeconds()),
              A || F.GetEndTimeAndDateUnixSeconds(),
              F.type,
            ]),
            o = !(0, t.JS)(g);
          return (0, n.jsx)("div", {
            className: (0, s.A)(S.EventDetailTimeInfo, _),
            children: (0, n.jsx)(a.v9, {
              startDateAndTime: v,
              endDateAndTime: w,
              bHideEndTime: o,
              stylesmodule: S,
            }),
          });
        }
        function U(N) {
          const {
              id: F,
              event: _,
              className: W,
              dateRangeLayout: A = "horizontal",
            } = N,
            [S, v, w] = (0, x.q3)(() => [
              _.GetStartTimeAndDateUnixSeconds(),
              _.GetEndTimeAndDateUnixSeconds(),
              _.type,
            ]),
            g = {};
          return (
            A == "vertical" &&
              (g.ShortDateRange = z().VerticalLocalDateAndTime),
            (0, n.jsx)("div", {
              id: F,
              className: (0, s.A)(z().EventDetailTimeInfo, W),
              children: (0, n.jsx)(a.u1, {
                startDateAndTime: S,
                endDateAndTime: v,
                bHideEndTime: !(0, t.JS)(w),
                stylesmodule: g,
              }),
            })
          );
        }
      },
      87949: (ge, de, r) => {
        "use strict";
        r.d(de, { e: () => F });
        var n = r(7850),
          x = r(48156),
          a = r(72609),
          s = r(40358),
          t = r(88743),
          y = r(61431),
          z = r(36707),
          V = r(18210),
          U = r(20881),
          N = r.n(U);
        function F(_) {
          const { inputType: W, id: A, bApplyUserContentPref: S } = _,
            v = W == "bundle" ? "bundle" : W == "sub" ? "sub" : "game",
            w = (0, t.zl)(A, v),
            { data: g } = (0, s.J$)(w),
            { data: o, isPending: h } = (0, s.Ij)(S ? w : void 0);
          if (!g) return null;
          if (S) {
            if (h) return null;
            if (o?.filter_failure == x.hQ.Zy || o?.filter_failure == x.hQ.ir) {
              let b = "#StoreCapsule_App_Excluded";
              switch (W) {
                case "sub":
                  b = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  b = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, n.jsx)("div", {
                className: (0, z.A)(
                  N().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, V.oW)(
                  b,
                  (0, n.jsx)("a", {
                    href: a.TS.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, n.jsx)("div", {
            className: (0, z.A)(N().AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
            children: (0, n.jsx)(y.p, {
              id: A,
              type: v,
              bShowDemoButton: g.type == x.uE.ue,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
      },
      42277: (ge, de, r) => {
        "use strict";
        r.d(de, { KL: () => U, mc: () => N });
        var n = r(72604),
          x = r(72609),
          a = r(75233),
          s = r(80902),
          t = r(51614),
          y = r(83028);
        function z(F, _) {
          return ["GetClanAnnouncementVoteForUser", _, F];
        }
        function V(F) {
          return F == "up" ? 1 : F == "down" ? -1 : 0;
        }
        function U(F, _, W, A) {
          const S = (0, a.jE)(),
            v = z(F, x.iA.accountid),
            { data: w } = (0, s.I)({
              queryKey: v,
              queryFn: async () => await W.GetMyEventVote(F),
              initialData: A?.initialVote,
              enabled: !!F && !!x.iA.accountid && (A?.bAsk ?? !0),
              staleTime: 1 / 0,
              gcTime: 1 / 0,
            }),
            { mutate: g } = (0, t.n)({
              mutationFn: async (h) => {
                const b = await W.RateEvent(F, _, h);
                if (b != n.R)
                  throw new Error(`RateClanAnnouncement failed with ${b}`);
              },
              onMutate: (h) => S.setQueryData(v, h),
              onError: () => S.invalidateQueries({ queryKey: v }),
            });
          return {
            myVote: w,
            Vote: (h) => {
              !F || h == w || g(h);
            },
          };
        }
        function N(F, _) {
          if (F.length == 0) return;
          const W = _ ?? (0, y.X)("SetMyEventVotes");
          W &&
            F.forEach((A) =>
              W.setQueryData(z(A.gidAnnouncement, x.iA.accountid), A.vote),
            );
        }
      },
      80684: (ge, de, r) => {
        "use strict";
        r.d(de, { _: () => F });
        var n = r(7850),
          x = r(5827),
          a = r(40358),
          s = r(47875),
          t = r(54806),
          y = r(65946),
          z = r(1683),
          V = r(18210),
          U = r(98462),
          N = r.n(U);
        function F(_) {
          const { event: W } = _,
            A = (0, y.q3)(() => W.jsondata?.referenced_appids || []),
            S = (0, x.eG)(),
            v = (0, t.E)({
              queries: A.map((o) => (0, a.us)(S, { appid: o })),
              combine: (o) => ({
                bLoaded: o.every((h) => !h.isPending),
                data: o.map((h) => h.data),
              }),
            });
          if (!A.length || !v.bLoaded) return null;
          const w = v.data
              .flatMap((o) =>
                o?.store_url_path && o?.name
                  ? [`[url="${(0, s._)(o)}"]${o.name}[/url]`]
                  : [],
              )
              .join((0, V.we)("#EventDisplay_ReferencedApps_Joiner")),
            g = (0, V.Yp)("#EventDisplay_ReferencedApps", A.length, w);
          return (0, n.jsx)("div", {
            className: N().ReferencedApps,
            children: (0, n.jsx)(z.Zn, { text: g, event: W }),
          });
        }
      },
      88812: (ge, de, r) => {
        "use strict";
        r.d(de, { WC: () => V });
        var n = r(9046),
          x = r(5827),
          a = r(75233),
          s = r(80902),
          t = r(71742),
          y = r(68266),
          z = r(85741);
        function V(F, _, W, A, S) {
          const v = (0, a.jE)(),
            w = (0, x.eG)();
          return (0, s.I)(N(v, w, F, _, W, A, S)).data ?? void 0;
        }
        function U(F, _, W, A, S) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            F?.GID,
            _,
            W,
            A,
            S,
          ];
        }
        function N(F, _, W, A, S, v, w) {
          return {
            queryKey: U(W, A, S, v, w),
            enabled: W && !!W.GID,
            queryFn: async () => {
              if (!W) return null;
              let g = new Array();
              if (!W.BImageNeedScreenshotFallback(A, S)) {
                const o = await F.ensureQueryData((0, y.lx)(F, _, W, A, S, v));
                if ((o && g.push(o), v != n.wI.full)) {
                  const h = await F.ensureQueryData(
                    (0, y.lx)(F, _, W, A, S, n.wI.full),
                  );
                  h && g.push(h);
                }
              }
              if (!w)
                try {
                  const o = await F.ensureQueryData((0, z.dO)(F, _, W));
                  o && g.push(o);
                } catch (o) {
                  if (
                    ((0, t.wT)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${W?.GID} from clan ${W?.clanSteamID.GetAccountID()}`,
                    ),
                    g.length == 0)
                  )
                    throw o;
                }
              return g;
            },
          };
        }
      },
      68266: (ge, de, r) => {
        "use strict";
        r.d(de, { lx: () => A, m0: () => _ });
        var n = r(9046),
          x = r(55483),
          a = r(72609),
          s = r(21721),
          t = r(5827),
          y = r(40358),
          z = r(75233),
          V = r(80902),
          U = r(18210),
          N = r(53113),
          F = r(85741);
        function _(v, w, g, o = n.wI.full, h = !0) {
          const b = (0, z.jE)(),
            k = (0, t.eG)();
          return (0, V.I)(A(b, k, v, w, g, o, h)).data ?? void 0;
        }
        function W(v, w, g, o = n.wI.full, h = !0) {
          return ["useEventImageURLWithFallback", v?.GID, w, g, o, h];
        }
        function A(v, w, g, o, h, b = n.wI.full, k = !0) {
          return {
            queryKey: W(g, o, h, b, k),
            enabled: !!g?.GID,
            initialData: () => S(g, o, h, b, k),
            queryFn: async () => {
              if (!g) return null;
              let te = S(g, o, h, b, k);
              if (te) return te;
              const re = await v.ensureQueryData(
                (0, x.ec)(g.clanSteamID.GetAccountID(), v),
              );
              if (o == "capsule") {
                let Q = g.appid;
                if (
                  !Q &&
                  re &&
                  ((re.is_creator_home && !re.is_ogg) || re.is_curator)
                )
                  if (g.jsondata?.referenced_appids?.length)
                    Q = g.jsondata.referenced_appids[0];
                  else return re.avatar_full_url ?? null;
                const c = await v.ensureQueryData((0, y.AQ)(w, { appid: Q }));
                return c
                  ? ((0, s.b0)(c, "main_capsule") ?? null)
                  : re?.avatar_full_url
                    ? re.avatar_full_url
                    : `${a.TS.STORE_ITEM_BASE_URL}steam/apps/${Q}/header.jpg`;
              }
              return o == "background" &&
                re &&
                ((re.is_creator_home && !re.is_ogg) || re.is_curator)
                ? (re.creator_page_bg_url ?? null)
                : await v.ensureQueryData((0, F.dO)(v, w, g));
            },
          };
        }
        function S(v, w, g, o = n.wI.full, h = !0) {
          if (!v) return;
          const b = v.GetImageURL(w, g, o);
          if (b && b.trim().length > 0) return b;
          const k = U.A0.GetELanguageFallback(g);
          if (g != k) {
            const re = v.GetImageURL(w, k, o);
            if (re && re.trim().length > 0) return re;
          }
          if (w == "capsule") {
            let re = v.GetImageFromBeginningOfDescription(g, Number.MAX_VALUE);
            if (re && (h || (0, N.ZF)(re))) return re;
          }
        }
      },
      85741: (ge, de, r) => {
        "use strict";
        r.d(de, { Mg: () => V, dO: () => U });
        var n = r(55483),
          x = r(99412),
          a = r(72609),
          s = r(5827),
          t = r(40358),
          y = r(75233),
          z = r(80902);
        function V(F) {
          const _ = (0, y.jE)(),
            W = (0, s.eG)();
          return (0, z.I)(U(_, W, F)).data ?? void 0;
        }
        function U(F, _, W) {
          return {
            queryKey: N(W),
            enabled: !!W?.GID,
            queryFn: async () => {
              if (!W) return null;
              const A = W.appid
                  ? await F.ensureQueryData((0, t.OE)(_, { appid: W.appid }))
                  : null,
                S = await F.ensureQueryData(
                  (0, n.ec)(W.clanSteamID.GetAccountID(), F),
                );
              if (W.appid)
                if (A) {
                  if (
                    A.all_ages_screenshots &&
                    A.all_ages_screenshots.length > 0
                  ) {
                    let v = Number(
                      W.bOldAnnouncement
                        ? W.AnnouncementGID
                        : W.GID == null
                          ? 0
                          : W.GID,
                    );
                    return (
                      (v = v % A.all_ages_screenshots.length),
                      `${a.TS.STORE_ITEM_BASE_URL}${A.all_ages_screenshots[v].filename}`
                    );
                  }
                } else return "";
              return W.GetEventType() != x.ajI &&
                S &&
                ((S.is_creator_home && !S.is_ogg) || S.is_curator)
                ? (S.avatar_full_url ?? null)
                : null;
            },
          };
        }
        function N(F) {
          return ["useFallbackArtworkScreenshot", F?.GID];
        }
      },
      28515: (ge, de, r) => {
        "use strict";
        r.d(de, { n: () => y });
        var n = r(7850),
          x = r(90626),
          a = r(59432);
        const s = x.createContext(void 0);
        function t(z) {
          const [V, U] = React.useState(z.rtServerNow),
            N = !!z.bHoldSeed;
          return (
            React.useEffect(() => {
              N || U(void 0);
            }, [N]),
            jsx(s.Provider, { value: V, children: z.children })
          );
        }
        function y() {
          return x.useContext(s) ?? (0, a.Gw)();
        }
      },
      90533: (ge, de, r) => {
        "use strict";
        r.d(de, { Eg: () => V, m4: () => S, EG: () => A, fm: () => g });
        var n = r(61639),
          x = r(75233),
          a = r(51614),
          s = r(90626),
          t = r(3166);
        async function y(o, h) {
          const b = new URLSearchParams();
          b.append("page_action", String(o)),
            b.append("snr", t.TS.SNR),
            b.append("uint_data", String(h)),
            b.append("str_data", z());
          try {
            await fetch(
              t.TS.STORE_BASE_URL + "events/ajaxreportnewshubstats/",
              { method: "POST", body: b },
            );
          } catch {}
        }
        function z() {
          if (t.TS.IN_CLIENT) return "steam";
          const o = navigator.userAgent;
          return /iPhone|iPad|iPod/i.test(o) ||
            (/Macintosh/i.test(o) && /Safari/i.test(o))
            ? "ios"
            : /Android/i.test(o)
              ? "android"
              : "";
        }
        var V = ((o) => (
          (o[(o.k_eDiscussions = 0)] = "k_eDiscussions"),
          (o[(o.k_eThumbsUp = 1)] = "k_eThumbsUp"),
          (o[(o.k_eClickThrough = 2)] = "k_eClickThrough"),
          (o[(o.k_eMuted = 3)] = "k_eMuted"),
          (o[(o.k_ePlayedVideo = 4)] = "k_ePlayedVideo"),
          (o[(o.k_eReminder_Opened = 5)] = "k_eReminder_Opened"),
          (o[(o.k_eReminder_MobilePush = 6)] = "k_eReminder_MobilePush"),
          (o[(o.k_eReminder_Email = 7)] = "k_eReminder_Email"),
          (o[(o.k_eReminder_CalendarApple = 8)] = "k_eReminder_CalendarApple"),
          (o[(o.k_eReminder_CalendarGoogle = 9)] =
            "k_eReminder_CalendarGoogle"),
          (o[(o.k_eReminder_CalendarOutlook = 10)] =
            "k_eReminder_CalendarOutlook"),
          (o[(o.k_eReminder_EmailUnverified = 11)] =
            "k_eReminder_EmailUnverified"),
          (o[(o.k_eReminder_MobilePushMissing = 12)] =
            "k_eReminder_MobilePushMissing"),
          o
        ))(V || {});
        const U = {
          nFutureViewedIndex: 0,
          nPastViewedIndex: 0,
          nLastRecordedFilter: 0,
        };
        function N() {
          return ["EventCalendarTrackingProgress"];
        }
        function F(o) {
          return o.getQueryData(N()) ?? U;
        }
        function _(o, h) {
          o.setQueryDefaults(N(), { staleTime: 1 / 0, gcTime: 1 / 0 }),
            o.setQueryData(N(), (b) => ({ ...(b ?? U), ...h }));
        }
        function W(o, h, b) {
          return clearTimeout(o), setTimeout(b, h);
        }
        function A(o) {
          y(n.Mc.ej, o);
        }
        function S(o, h) {
          const k = W(F(o).schFilter, 1e3, () => {
            h != F(o).nLastRecordedFilter &&
              (_(o, { nLastRecordedFilter: h }), y(n.Mc.Ms, h));
          });
          _(o, { schFilter: k });
        }
        function v(o, h, b, k) {
          let te = 0,
            re = 0,
            J,
            Q;
          for (const P of b) {
            const D = P.start_time > k;
            if ((P.unique_id == h && ((J = re), (Q = P)), D)) te++;
            else if (J !== void 0) break;
            re++;
          }
          if (J === void 0 || !Q) return;
          const c = 500,
            m = F(o);
          if (J < te) {
            const P = te - J;
            if (m.nFutureViewedIndex >= P) return;
            const D = W(m.schFuture, c, () => {
              const I =
                Math.min(P, 4095) |
                (Math.min(te, 255) << 12) |
                (Math.min(w(k), 2047) << 20);
              y(n.Mc.R, I);
            });
            _(o, { nFutureViewedIndex: P, schFuture: D });
            return;
          }
          const M = J - te;
          if (m.nPastViewedIndex >= M) return;
          const p = Math.floor((k - Q.start_time) / (24 * 3600)),
            L = W(m.schPast, c, () => {
              const P =
                Math.min(M, 4095) |
                (Math.min(p, 255) << 12) |
                (Math.min(w(k), 2047) << 20);
              y(n.Mc.mZ, P);
            });
          _(o, { nPastViewedIndex: M, schPast: L });
        }
        function w(o) {
          return Math.max(0, Math.floor(Date.now() / 1e3 - o));
        }
        function g() {
          const o = (0, x.jE)(),
            { mutate: h } = (0, a.n)({
              mutationFn: async (b) => {
                switch (b.type) {
                  case "interaction":
                    A(b.interaction);
                    break;
                  case "filter-change":
                    S(o, b.nFilterBitMask);
                    break;
                  case "event-viewed":
                    v(o, b.gidEvent, b.rgItemsInView, b.rtCalendarInit);
                    break;
                }
              },
            });
          return s.useMemo(
            () => ({
              RecordInteraction: (b) =>
                h({ type: "interaction", interaction: b }),
              RecordFilterChange: (b) =>
                h({ type: "filter-change", nFilterBitMask: b }),
              RecordEventViewed: (b, k, te) =>
                h({
                  type: "event-viewed",
                  gidEvent: b,
                  rgItemsInView: k,
                  rtCalendarInit: te,
                }),
            }),
            [h],
          );
        }
      },
      16369: (ge, de, r) => {
        "use strict";
        r.d(de, { H: () => a });
        var n = r(99412),
          x = r(72609);
        const a = () => (x.TS.EUNIVERSE === n.Rv ? 2581 : 45267781);
      },
      69909: (ge, de, r) => {
        "use strict";
        r.d(de, {
          Lc: () => h,
          Mr: () => Q,
          Sk: () => b,
          Ue: () => te,
          _t: () => k,
          ee: () => g,
          hh: () => N,
          mG: () => S,
          my: () => _,
          rF: () => re,
          us: () => J,
        });
        var n = r(16936),
          x = r(54357),
          a = r(80902),
          s = r(16369),
          t = r(36174),
          y = r(65946),
          z = r(92264),
          V = r(87937),
          U = r.n(V);
        const N = "America/Los_Angeles";
        function F(c, m) {
          return {
            queryKey: W(c, m),
            queryFn: () => (0, n.t3)(m),
            enabled: (0, s.H)() == c,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function _(c, m) {
          return (0, a.I)(F(c, m));
        }
        const W = (c, m) => ["useMeetSteamGetAvailability", c, m];
        function A(c, m, M) {
          return {
            queryKey: v(c, m, M),
            queryFn: async () => {
              const p = await (0, n.vd)(m);
              return p ? JSON.parse(p) : {};
            },
            enabled: (0, s.H)() == c && !!M,
          };
        }
        function S(c, m, M) {
          return (0, a.I)(A(c, m, M));
        }
        const v = (c, m, M) => ["useMeetSteamGetRegistrationDetails", c, m, M];
        function w(c) {
          return {
            queryKey: ["MeetSteamRegistrantInfo", c],
            queryFn: () => (0, n.Nc)(),
            enabled: !!c,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function g(c) {
          return (0, a.I)(w(c));
        }
        function o(c, m) {
          return {
            queryKey: ["useMeetSteamQRCode", c, m],
            queryFn: () => (0, n.EI)(c, m),
            enabled: !!m && !0,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function h(c, m) {
          return (0, a.I)(o(c, m)).data?.qrcode;
        }
        function b(c, m = Intl.DateTimeFormat().resolvedOptions().timeZone) {
          return c.location_type === "in_person"
            ? (c.in_person_time_zone ?? N)
            : m;
        }
        function k(c) {
          const m = (0, x.B)();
          return (0, y.q3)(() => ({
            rtime_start: c.rtime_start,
            rtime_end: c.rtime_end,
            sDisplayTimeZone: b(c, m),
          }));
        }
        function te(c, m) {
          const M = U().unix(c),
            L = U().unix(c).tz(m).utcOffset() - M.utcOffset();
          return new Date((c + L * 60) * 1e3);
        }
        function re(c, m) {
          const M = te(c, m),
            p = new Date();
          return M.getFullYear() == p.getFullYear()
            ? (0, z.$w)(M)
            : (0, z._9)(M);
        }
        function J(c, m) {
          const M = U().unix(c),
            L = U().unix(c).tz(m).utcOffset() - M.utcOffset();
          return (0, z.KC)(c + L * 60);
        }
        function Q(c, m, M, p) {
          const L = U().unix(c),
            D = U().unix(c).tz(M).utcOffset() - L.utcOffset(),
            I = U().unix(m),
            C = U().unix(m).tz(M),
            G = C.utcOffset() - I.utcOffset();
          return (
            (0, z.Vx)(c + D * 60, m + G * 60, !0) +
            (p ? "" : " " + C.format("z"))
          );
        }
      },
      5191: (ge, de, r) => {
        "use strict";
        r.d(de, { j: () => se });
        var n = r(7850),
          x = r(55483),
          a = r(29522),
          s = r(40358),
          t = r(90533),
          y = r(72609),
          z = r(89926),
          V = r(28515),
          U = r(99412),
          N = r(64868),
          F = r(90626),
          _ = r(16346),
          W = r(40650),
          A = r(16412),
          S = r(18057),
          v = r(96538),
          w = r(36118),
          g = r(85599),
          o = r(71421),
          h = r(36707),
          b = r(18210),
          k = r(36174),
          te = r(53113),
          re = r(6878),
          J = r.n(re),
          Q = r(95695),
          c = r(56492),
          m = r(42937);
        function M(ne) {
          return (
            (ne.bHasVerifiedEmail && ne.bFollowsByEmail) ||
            (ne.bHasPushNotification && ne.bFollowsByPush)
          );
        }
        function p(ne) {
          const {
              eventModel: le,
              rtNow: je,
              notifyState: Ae,
              bOnlyShowIcon: Le,
              renderPanel: Ge,
              onRequestSignIn: ke,
              bSignedIn: Ue,
              onTrack: ze,
            } = ne,
            [B, ee] = F.useState(!1),
            ye = F.useRef(null),
            Me = F.useRef(null),
            Je = F.useCallback(() => {
              Me.current?.Hide(), ee(!1);
            }, []),
            $e = () => {
              const we = {
                bOverlapHorizontal: !0,
                bOverlapVertical: !0,
                bDisablePopTop: !0,
                bMatchWidth: !0,
                strClassName: (0, h.A)(
                  m.ReminderDialog,
                  m.ReminderOptions,
                  W.contextMenu,
                ),
              };
              (Me.current = (0, _.lX)(Ge(Je), ye.current, we)),
                Me.current.SetOnHideCallback(Je),
                ee(!0),
                ze?.("opened");
            },
            T = (we) => {
              if (!Ue) {
                ke?.();
                return;
              }
              B ? Je() : $e(), we.stopPropagation(), we.preventDefault();
            },
            $ = Le && !B,
            he = M(Ae);
          return (le.startTime !== void 0 && le.startTime < je) ||
            le.BIsUnlistedEvent()
            ? null
            : (0, n.jsxs)("div", {
                className: (0, h.A)({
                  [m.ReminderCheckBox]: !0,
                  [J().ReminderCtn]: !0,
                  [m.IconMode]: $,
                  [m.TextMode]: !$,
                  ReminderSet: he,
                  RemindMeWidget: !0,
                }),
                role: "button",
                tabIndex: 0,
                "aria-expanded": B,
                onClick: T,
                onKeyDown: (we) => {
                  (we.key === "Enter" || we.key === " ") && T(we);
                },
                ref: ye,
                children: [
                  he &&
                    (0, n.jsx)("div", {
                      className: m.RemindCheck,
                      children: (0, n.jsx)(w.Jlk, {}),
                    }),
                  $ &&
                    (0, n.jsx)("div", {
                      className: m.RemindBell,
                      children: (0, n.jsx)(w.IrQ, {}),
                    }),
                  (0, n.jsx)("div", {
                    className: m.ReminderDefault,
                    children: (0, b.we)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, n.jsx)("div", { className: m.ReminderOptions }),
                ],
              });
        }
        function L(ne) {
          const {
              eventModel: le,
              lang: je,
              rtNow: Ae,
              notifyState: Le,
              bShowStartTime: Ge,
              bExpandLeft: ke,
              bOnlyShowIcon: Ue,
              strCalendarEventTitle: ze,
              onChangeNotify: B,
              onTrack: ee,
              fnHidePanel: ye,
            } = ne,
            [Me, Je] = F.useState(!1),
            [$e, T] = F.useState(void 0),
            [$, he, xe] = (0, N.uD)(),
            we = async (qe, st) => {
              if (!(!le.GID || le.GID == U.kFb)) {
                Je(!0);
                try {
                  await B(qe, st),
                    qe && ee?.(st == "email" ? "notify-email" : "notify-push");
                } catch (at) {
                  T(at instanceof Error ? at.message : String(at)), he();
                }
                Je(!1);
              }
            },
            Qe = le.jsondata.bSaleEnabled
              ? c.PH.k_eStoreSalePage
              : c.PH.k_eStoreView,
            Ce = (0, c.Bw)(le, Qe, "forceAbsolute"),
            ut = () => {
              let qe = le.GetSubTitleWithLanguageFallback(je);
              qe = qe
                ? `${qe}


`
                : "";
              const st = le.GetSummaryWithFallback(je);
              return `${qe}${st}

${Ce}`;
            },
            tt = () => {
              const qe = encodeURIComponent(ze),
                st = encodeURIComponent(ut()),
                at = le.GetStartTimeAndDateUnixSeconds(),
                dt = P(at),
                Et = le.GetEndTimeAndDateUnixSeconds() || at + k.Kp.PerHour,
                It = P(Et),
                bt =
                  (y.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                  `https://calendar.google.com/calendar/r/eventedit?text=${qe}&details=${st}&dates=${dt}/${It}`;
              return (0, te.k2)(bt);
            },
            Mt = (qe) => {
              const st = le.appid
                  ? "app/" + le.appid
                  : "group/" + le.clanSteamID.GetAccountID(),
                at = "l=" + (0, U.LgB)(je);
              return `${y.TS.STORE_BASE_URL}${(0, c.LJ)()}/download/${st}/${qe}/${le.GID}?${at}`;
            },
            {
              bHasVerifiedEmail: et,
              bHasPushNotification: lt,
              bFollowsByEmail: yt,
              bFollowsByPush: Wt,
            } = Le,
            ht = !1,
            ct = Ge && le.GetStartTimeAndDateUnixSeconds();
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsxs)("div", {
                className: (0, h.A)(
                  m.ReminderCheckBox,
                  Ue ? m.IconMode : m.TextMode,
                  "RemindMeWidget",
                ),
                role: "button",
                tabIndex: 0,
                onClick: ye,
                onKeyDown: (qe) => {
                  (qe.key === "Enter" || qe.key === " ") &&
                    (qe.preventDefault(), ye());
                },
                children: [
                  M(Le) &&
                    (0, n.jsx)("div", {
                      className: m.RemindCheck,
                      children: (0, n.jsx)(w.Jlk, {}),
                    }),
                  Ue &&
                    (0, n.jsx)("div", {
                      className: m.RemindBell,
                      children: (0, n.jsx)(w.IrQ, {}),
                    }),
                  (0, n.jsx)("div", {
                    className: m.ReminderDefault,
                    children: (0, b.we)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, n.jsx)("div", { className: m.ReminderOpennedOptions }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: (0, h.A)(
                  m.FlexColumnContainer,
                  m.ReminderBackground,
                  ke && m.ReminderExpandsLeft,
                ),
                children: [
                  Me &&
                    (0, n.jsx)(g.t, {
                      className: m.RpcThrobber,
                      size: "xlarge",
                      position: "center",
                    }),
                  ct &&
                    (0, n.jsx)("div", {
                      className: m.FullStartTime,
                      children: (0, b.PP)(
                        "#EventDisplay_EventUpcoming_WithDateAndTime",
                        (0, b.TW)(
                          ct,
                          (0, k.Ct)(new Date(ct * 1e3), new Date(Ae * 1e3)),
                        ),
                        (0, S.yi)(ct, !0),
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: m.ReminderOptionsHeader,
                    children: (0, b.we)(
                      "#EventDisplay_Reminder_GetNotification_Via",
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, h.A)(m.ReminderOption, !et && m.Unverified),
                    children: [
                      (0, n.jsx)(o.he, {
                        className: m.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, b.we)(
                          et
                            ? "#EventReminder_NotifyByEmail_ttip"
                            : "#EventReminder_NotifyByEmail_Missing",
                        ),
                        children: (0, n.jsx)(A.Yh, {
                          label: (0, b.we)("#EventDisplay_Reminder_ViaEmail"),
                          disabled: !et,
                          checked: yt,
                          onChange: (qe) => we(qe, "email"),
                        }),
                      }),
                      !et &&
                        (0, n.jsx)("div", {
                          className: Q.FlexColumnContainer,
                          children: (0, n.jsx)("a", {
                            href: y.TS.STORE_BASE_URL + "account/",
                            target: y.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => ee?.("email-unverified"),
                            rel: "noreferrer",
                            children: (0, b.we)(
                              "#EventReminder_NotifyByEmail_Missing_Add",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, h.A)(m.ReminderOption, !lt && m.Unverified),
                    children: [
                      (0, n.jsx)(o.he, {
                        className: m.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, b.we)(
                          lt
                            ? "#EventReminder_NotifyByMobile_ttip"
                            : "#EventReminder_NotifyByMobile_Missing",
                        ),
                        children: (0, n.jsx)(A.Yh, {
                          label: (0, b.we)(
                            "#EventDisplay_Reminder_ViaMobileApp",
                          ),
                          disabled: !lt,
                          checked: Wt,
                          onChange: (qe) => we(qe, "push"),
                        }),
                      }),
                      !lt &&
                        (0, n.jsx)("div", {
                          className: Q.FlexColumnContainer,
                          children: (0, n.jsx)("a", {
                            href: y.TS.STORE_BASE_URL + "mobile/?show=steamapp",
                            target: y.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => ee?.("push-missing"),
                            rel: "noreferrer",
                            children: (0, b.we)(
                              "#EventReminder_NotifyByMobile_Install",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsxs)(F.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: m.ReminderOptionsHeader,
                        children: (0, b.we)(
                          "#EventDisplay_Reminder_AddToCalendar",
                        ),
                      }),
                      (0, n.jsxs)("div", {
                        className: m.ReminderCalendarOptions,
                        children: [
                          (0, n.jsx)("a", {
                            className: m.ReminderOption,
                            href: Mt("ics"),
                            onClick: () => ee?.("calendar-apple"),
                            children: (0, b.we)(
                              "#EventDisplay_Reminder_AppleCalendar_Short",
                            ),
                          }),
                          (0, n.jsx)("a", {
                            className: m.ReminderOption,
                            target: y.TS.IN_CLIENT ? void 0 : "_blank",
                            href: tt(),
                            onClick: () => ee?.("calendar-google"),
                            rel: "noreferrer",
                            children: (0, b.we)(
                              "#EventDisplay_Reminder_GoogleCalendar_Short",
                            ),
                          }),
                          (0, n.jsx)("a", {
                            className: m.ReminderOption,
                            href: Mt("outlook"),
                            onClick: () => ee?.("calendar-outlook"),
                            children: (0, b.we)(
                              "#EventDisplay_Reminder_OutlookCalendar_Short",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  ht &&
                    (0, n.jsx)("div", {
                      className: (0, h.A)(m.ReminderSettings, m.ReminderOption),
                      children: (0, b.we)("#EventDisplay_Reminder_Preferences"),
                    }),
                ],
              }),
              (0, n.jsx)(v.EN, {
                active: $,
                children: (0, n.jsx)(v.KG, {
                  strTitle: (0, b.we)(
                    "#EventDisplay_Reminder_FollowEvent_Error",
                  ),
                  strDescription: (0, b.we)(
                    "#EventDisplay_Reminder_FollowEvent_ErrorDesc",
                  ),
                  closeModal: xe,
                  children: $e,
                }),
              }),
            ],
          });
        }
        function P(ne) {
          return new Date(ne * 1e3)
            .toISOString()
            .replace(/[-:]/g, "")
            .replace(/\.\d{3}Z$/, "Z");
        }
        var D = r(26589),
          I = r(68312),
          C = r(75233),
          G = r(80902),
          q = r(76559),
          pe = r(67705),
          E = ((ne) => (
            (ne[(ne.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (ne[(ne.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (ne[(ne.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
            ne
          ))(E || {});
        const ve = "notificationaction/usercontactmethods";
        async function me() {
          const ne = y.TS.STORE_BASE_URL + ve,
            le = await fetch(ne, { credentials: "include" });
          if (!le.ok) throw new Error(`${ne} answered ${le.status}`);
          return await le.json();
        }
        const Y = { bHasValidatedEmail: !1, bHasPushNotification: !1 };
        function be() {
          const { data: ne } = (0, G.I)(Ie());
          return ne ?? Y;
        }
        function fe(ne) {
          return ["useUserContactMethods", ne];
        }
        function Ie() {
          return {
            queryKey: fe(y.iA.accountid),
            queryFn: me,
            enabled: !!y.iA.logged_in,
            initialData: () => {
              const ne = (0, pe.Fd)("notificationstore", "application_config");
              return Re(ne) ? Te(ne) : void 0;
            },
          };
        }
        function Te(ne) {
          return {
            bHasValidatedEmail: !!ne.email_validated,
            bHasPushNotification: (ne.mobile_device_count ?? 0) > 0,
          };
        }
        function Re(ne) {
          const le = ne;
          return (
            !!le &&
            typeof le == "object" &&
            typeof le.mobile_device_count == "number"
          );
        }
        function Fe(ne, le) {
          const je = (0, C.jE)(),
            Ae = (0, I.KV)(),
            { data: Le } = (0, G.I)((0, D.gg)(ne, je, Ae)),
            Ge = be(),
            ke = H(Le, le);
          return {
            bHasVerifiedEmail: Ge.bHasValidatedEmail,
            bHasPushNotification: Ge.bHasPushNotification,
            bFollowsByEmail: (ke & E.k_ENotifyFlagByEmail) != 0,
            bFollowsByPush: (ke & E.k_ENotifyFlagByPush) != 0,
          };
        }
        function De(ne, le) {
          const je = (0, C.jE)(),
            Ae = (0, I.KV)(),
            Le = (0, D.gg)(ne, je, Ae);
          return async (Ge, ke) => {
            if (!le) return;
            const Ue = je.getQueryData(Le.queryKey),
              ze =
                ke == "email" ? E.k_ENotifyFlagByEmail : E.k_ENotifyFlagByPush,
              B = H(Ue, le),
              ee = Ge ? B | ze : B & ~ze;
            await ue(ne, le, ee),
              await je.invalidateQueries({ queryKey: Le.queryKey });
          };
        }
        function H(ne, le) {
          const je = le ? (ne?.event_followed?.indexOf(le) ?? -1) : -1;
          return je == -1 ? 0 : (ne?.event_followed_flags?.[je] ?? 0);
        }
        async function ue(ne, le, je) {
          const Ae = je == 0,
            Ge = `${`${y.TS.STORE_BASE_URL}events/`}${Ae ? "unfolloworunignoreevent" : "followorignoreevent"}`,
            ke = new URLSearchParams();
          ke.append("sessionid", (0, pe.KC)()),
            ke.append("ignore", "false"),
            ke.append("gid", le),
            ke.append("notification_flag", "" + je),
            ke.append("clan_accountid", "" + ne);
          const Ue = await fetch(Ge, {
            method: "POST",
            body: ke,
            credentials: "include",
          });
          if (!Ue.ok) throw new Error(`${Ge} answered ${Ue.status}`);
        }
        function K(ne) {
          const { eventModel: le, bOnlyShowIcon: je, onTrack: Ae } = ne,
            Le = (0, V.n)(),
            Ge = Fe(le.clanSteamID.GetAccountID(), le.GID),
            { elDialogElement: ke, fnShowLogonDialog: Ue } = (0, z.l)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(p, {
                eventModel: le,
                rtNow: Le,
                notifyState: Ge,
                bOnlyShowIcon: je,
                bSignedIn: !!y.iA.logged_in || y.TS.IN_CLIENT,
                onRequestSignIn: Ue,
                onTrack: Ae,
                renderPanel: (ze) =>
                  (0, n.jsx)(oe, { ...ne, rtNow: Le, fnHidePanel: ze }),
              }),
              ke,
            ],
          });
        }
        function oe(ne) {
          const {
              eventModel: le,
              lang: je,
              strHubName: Ae,
              bShowStartTime: Le,
              bExpandLeft: Ge,
              bOnlyShowIcon: ke,
              onTrack: Ue,
              rtNow: ze,
              fnHidePanel: B,
            } = ne,
            ee = le.clanSteamID.GetAccountID(),
            ye = Fe(ee, le.GID),
            Me = De(ee, le.GID),
            Je = le.GetNameWithFallback(je) ?? "",
            $e = Ae ? `${Ae}: ${Je}` : Je;
          return (0, n.jsx)(L, {
            eventModel: le,
            lang: je,
            rtNow: ze,
            notifyState: ye,
            strCalendarEventTitle: $e,
            bShowStartTime: Le,
            bExpandLeft: Ge,
            bOnlyShowIcon: ke,
            onChangeNotify: Me,
            onTrack: Ue,
            fnHidePanel: B,
          });
        }
        function se(ne) {
          const {
              eventModel: le,
              lang: je,
              bShowStartTime: Ae,
              bExpandLeft: Le,
              bOnlyShowIcon: Ge,
            } = ne,
            ke = (0, t.fm)(),
            Ue = Ee(le);
          return (0, n.jsx)(K, {
            eventModel: le,
            lang: je,
            strHubName: Ue,
            bShowStartTime: Ae,
            bExpandLeft: Le,
            bOnlyShowIcon: Ge,
            onTrack: (ze) => ke.RecordInteraction(Se[ze]),
          });
        }
        function Ee(ne) {
          const le = ne.appid || void 0,
            je = (0, a.$5)(le),
            { data: Ae } = (0, s.J$)(je),
            { data: Le } = (0, x.TB)(
              le ? void 0 : ne.clanSteamID.GetAccountID(),
            );
          return (le ? Ae?.name : Le?.group_name) || void 0;
        }
        const Se = {
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
      91778: (ge, de, r) => {
        "use strict";
        r.d(de, { k: () => t });
        var n = r(7850),
          x = r(90626),
          a = r(69168);
        const s = x.lazy(() =>
          Promise.all([
            r.e(5858),
            r.e(58612),
            r.e(98028),
            r.e(8319),
            r.e(34178),
            r.e(98656),
          ])
            .then(r.bind(r, 21637))
            .then((y) => ({ default: y.ShareEventDialogBody })),
        );
        function t(y) {
          const { bActive: z, ...V } = y;
          return (0, n.jsx)(a.E, {
            active: z,
            children: (0, n.jsx)(x.Suspense, {
              fallback: null,
              children: (0, n.jsx)(s, { ...V }),
            }),
          });
        }
      },
      73644: (ge, de, r) => {
        "use strict";
        r.d(de, {
          D1: () => te,
          Nk: () => o,
          k6: () => m,
          lS: () => w,
          lz: () => h,
        });
        var n = r(7850),
          x = r(32093),
          a = r(48156),
          s = r(72609),
          t = r(40358),
          y = r(90626),
          z = r(95695),
          V = r.n(z),
          U = r(36118),
          N = r(71421),
          F = r(36707),
          _ = r(18210),
          W = r(53113),
          A = r(19890),
          S = r.n(A),
          v = r(4515);
        function w(M) {
          const { appid: p } = M;
          return (0, n.jsx)("div", {
            className: S().AppSocialLinksCtn,
            children: (0, n.jsx)(g, { appid: p }),
          });
        }
        function g(M) {
          const { appid: p } = M,
            { data: L } = (0, t.bg)({ appid: p });
          return !L || L.length == 0
            ? null
            : (0, n.jsx)(b, {
                strTitle: (0, _.we)("#EventDisplay_SocialTitle"),
                id: "" + p,
                rgSocialMedia: L,
              });
        }
        function o(M) {
          return (0, y.useMemo)(
            () =>
              M
                ? M.map((p) => {
                    const L = (0, v.v)(p.type);
                    return L == a.jL.EK || L == a.jL.Or
                      ? { link_type: L, text: p.link }
                      : { link_type: L, url: p.link };
                  })
                : [],
            [M],
          );
        }
        function h(M) {
          const { gidClanEvent: p, rgSocial: L, bIsCreatorHomeEvent: P } = M,
            D = o(L);
          if (D.length == 0) return null;
          const I = P
            ? (0, _.we)("#EventDisplay_Sale_SocialTitle_Dev")
            : (0, _.we)("#EventDisplay_Sale_SocialTitle");
          return (0, n.jsx)(b, { strTitle: I, id: p, rgSocialMedia: D });
        }
        function b(M) {
          const { strTitle: p, id: L, rgSocialMedia: P } = M;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: (0, F.A)(
                  V().EventEditorTextTitle,
                  "EventEditorTextTitle",
                ),
                children: p,
              }),
              (0, n.jsx)(te, { id: L, rgSocialMedia: P }),
            ],
          });
        }
        const k = [
          a.jL.EK,
          a.jL.$3,
          a.jL.M0,
          a.jL.Ow,
          a.jL.Ib,
          a.jL.qe,
          a.jL.Lk,
        ];
        function te(M) {
          const { id: p, rgSocialMedia: L, className: P } = M,
            D = s.TS.EREALM === x.TU.k_ESteamRealmChina;
          return (0, n.jsx)("div", {
            className: (0, F.A)(S().AppSocialLinks, P),
            children: L.filter(
              (I) => !D || k.includes(I.link_type || a.jL.I0),
            ).map((I) =>
              I.url
                ? (0, n.jsx)(
                    re,
                    { social: I },
                    "app_social_link_" + p + "_" + I.link_type,
                  )
                : (0, n.jsx)(
                    J,
                    { social: I },
                    "app_social_text_" + p + "_" + I.link_type + "_" + I.text,
                  ),
            ),
          });
        }
        function re(M) {
          const { social: p } = M;
          return p.url
            ? (0, n.jsx)("a", {
                href: (0, W.NT)(p.url, !0),
                target: s.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, n.jsx)(N.he, {
                  toolTipContent: p.url,
                  children: (0, n.jsx)(Q, { social: p }),
                }),
              })
            : null;
        }
        function J(M) {
          const { social: p } = M;
          return (0, n.jsxs)("div", {
            className: S().AppSocialLinkWithText,
            children: [
              (0, n.jsx)(N.he, {
                toolTipContent: p.text,
                children: (0, n.jsx)(Q, { social: p }),
              }),
              (0, n.jsx)("div", {
                className: S().AppSocialText,
                children: p.text,
              }),
            ],
          });
        }
        function Q(M) {
          const { social: p } = M;
          return (0, n.jsx)(m, {
            linkType: p.link_type || a.jL.I0,
            className: S().AppSocialLinkIcon,
          });
        }
        const c = {
          [a.jL.lQ]: U.agV,
          [a.jL.GO]: U.ZnA,
          [a.jL.jG]: U.oy,
          [a.jL.F7]: U.ofN,
          [a.jL.Eb]: U.Bki,
          [a.jL.EK]: U.$vK,
          [a.jL.M0]: U.$vK,
          [a.jL.$3]: U.$vK,
          [a.jL.a$]: U.OSJ,
          [a.jL.Ow]: U.nm_,
          [a.jL.Ib]: U.tIO,
          [a.jL.uw]: U.Vt2,
          [a.jL.sP]: U.Vgk,
          [a.jL.u5]: U.VSd,
          [a.jL.db]: U.ccb,
          [a.jL.Yu]: U.rNt,
          [a.jL.JN]: U.g$j,
          [a.jL.EM]: U.BQz,
          [a.jL.Or]: U.jdP,
          [a.jL.qe]: U.bKN,
          [a.jL.H5]: U.sDU,
          [a.jL.Xm]: U.MbF,
          [a.jL.DB]: U.emH,
          [a.jL.Lk]: U.Yoo,
        };
        function m(M) {
          const { linkType: p, ...L } = M,
            P = c[p];
          return P ? (0, n.jsx)(P, { ...L }) : null;
        }
      },
      4515: (ge, de, r) => {
        "use strict";
        r.d(de, { X: () => t, v: () => a });
        var n = r(48156);
        const x = {
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
        function a(y) {
          return x[y] ?? n.jL.I0;
        }
        const s = new Map(Object.entries(x).map(([y, z]) => [z, y]));
        function t(y) {
          return s.get(y);
        }
      },
      16936: (ge, de, r) => {
        "use strict";
        r.d(de, {
          t3: () => U,
          EI: () => W,
          Nc: () => _,
          vd: () => F,
          _V: () => N,
          kR: () => A,
        });
        var n = r(72609);
        const x = "meetsteam/availability",
          a = "meetsteam/registrations",
          s = "meetsteam/registrationdetails",
          t = "meetsteam/updateregistration",
          y = "meetsteam/registrantinfo",
          z = "meetsteam/attendance_qrcode";
        async function V(S, v) {
          const w = new URL(n.TS.STORE_BASE_URL + S);
          for (const [o, h] of Object.entries(v)) w.searchParams.set(o, h);
          const g = await fetch(w, { credentials: "include" });
          if (!g.ok) throw new Error(`${w} answered ${g.status}`);
          return await g.json();
        }
        async function U(S) {
          return (await V(x, { gid: S })).availability ?? [];
        }
        async function N(S) {
          return (await V(a, { gid: S })).registrations ?? [];
        }
        async function F(S) {
          return (await V(s, { gid: S })).strJSONData ?? "";
        }
        async function _() {
          return (
            (await V(y, {})).info ?? { realname: "", email: "", partners: [] }
          );
        }
        async function W(S, v) {
          return await V(z, { gid: S, accountid: String(v) });
        }
        async function A(S) {
          const v = n.TS.STORE_BASE_URL + t,
            w = new URLSearchParams({
              gid: S.gid,
              group_id: String(S.group_id),
              session_id: String(S.session_id),
              guest_count: String(S.guest_count),
              jsondata: S.jsondata,
              skip_email: S.skip_email ? "1" : "0",
            }),
            g = await fetch(v, {
              method: "POST",
              credentials: "include",
              body: w,
            });
          if (!g.ok) throw new Error(`${v} answered ${g.status}`);
          return (await g.json()).success;
        }
      },
      90711: (ge, de, r) => {
        "use strict";
        r.d(de, {
          DK: () => Yt,
          hW: () => Me,
          Lw: () => ze,
          ku: () => $e,
          Mn: () => ee,
          sW: () => x,
          nn: () => n,
        });
        var n = {};
        r.r(n), r.d(n, { Tq: () => U, TC: () => g, fe: () => S });
        var x = {};
        r.r(x), r.d(x, { rx: () => J, XP: () => Q });
        var a = r(80613),
          s = r.n(a),
          t = r(75245),
          y = r(35038);
        const z = 0,
          V = 1,
          U = 0,
          N = 1,
          F = 2,
          _ = 3,
          W = 4,
          A = 5,
          S = 6,
          v = 7,
          w = 8,
          g = 9,
          o = 10,
          h = 11,
          b = 12,
          k = 13,
          te = 14,
          re = 15,
          J = 0,
          Q = 1,
          c = 2;
        function m(He) {
          return "unknown EBroadcastChatPermission ( " + He + " )";
        }
        function M(He) {
          return "unknown EBroadcastWatchLocation ( " + He + " )";
        }
        function p(He) {
          return "unknown EBroadcastChatBan ( " + He + " )";
        }
        function L(He) {
          return "unknown EBroadcastRestriction ( " + He + " )";
        }
        class P extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.permission || t.Sg(P.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
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
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = t.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(P.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new P();
            return P.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(P.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(P.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class D extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.broadcast_id || t.Sg(D.M()),
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
              O = new D();
            return D.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_BeginBroadcastSession_Response";
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
              O = new I();
            return I.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_EndBroadcastSession_Request";
          }
        }
        class C extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new C();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new C();
            return C.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Response";
          }
        }
        class G extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.broadcast_id || t.Sg(G.M()),
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
              O = new G();
            return G.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_StartBroadcastUpload_Request";
          }
        }
        class q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.upload_token || t.Sg(q.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
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
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = t.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(q.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new q();
            return q.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(q.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(q.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Response";
          }
        }
        class pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.broadcast_id || t.Sg(pe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
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
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(pe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new pe();
            return pe.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(pe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(pe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastUploadStarted_Notification";
          }
        }
        class E extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              E.prototype.steamid || t.Sg(E.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
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
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = t.w0(E.M())), E.sm_mbf;
          }
          toObject(e = !1) {
            return E.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(E.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(E.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new E();
            return E.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(E.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(E.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Request";
          }
        }
        class ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.gameid || t.Sg(ve.M()),
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
              O = new ve();
            return ve.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetBroadcastStatus_Response";
          }
        }
        class me extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.steamid || t.Sg(me.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
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
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = t.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(me.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new me();
            return me.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(me.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(me.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
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
              O = new Y();
            return Y.deserializeBinaryFromReader(O, i);
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
        class be extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.steamid || t.Sg(be.M()),
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
              O = new be();
            return be.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_WatchBroadcast_Request";
          }
        }
        class fe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.response || t.Sg(fe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
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
              O = new fe();
            return fe.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_WatchBroadcast_Response";
          }
        }
        function Ie(He) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            He +
            " )"
          );
        }
        class Te extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.steamid || t.Sg(Te.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
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
              O = new Te();
            return Te.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_HeartbeatBroadcast_Notification";
          }
        }
        class Re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.steamid || t.Sg(Re.M()),
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
              O = new Re();
            return Re.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_StopWatchingBroadcast_Notification";
          }
        }
        class Fe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.steamid || t.Sg(Fe.M()),
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
              O = new Fe();
            return Fe.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_InviteToBroadcast_Request";
          }
        }
        class De extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.success || t.Sg(De.M()),
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
                    success: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
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
              O = new De();
            return De.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_InviteToBroadcast_Response";
          }
        }
        class H extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.permission || t.Sg(H.M()),
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
              O = new H();
            return H.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_SendBroadcastStateToServer_Request";
          }
        }
        class ue extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new ue();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new ue();
            return ue.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Response";
          }
        }
        class K extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.steamid || t.Sg(K.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    state: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(K.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new K();
            return K.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(K.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(K.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastViewerState_Notification";
          }
        }
        function oe(He) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            He +
            " )"
          );
        }
        class se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.broadcast_id || t.Sg(se.M()),
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
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
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
              O = new se();
            return se.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_WaitingBroadcastViewer_Notification";
          }
        }
        class Ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.broadcast_id || t.Sg(Ee.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
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
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ee.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Ee();
            return Ee.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ee.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ee.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopBroadcastUpload_Notification";
          }
        }
        class Se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.broadcast_id || t.Sg(Se.M()),
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
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
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
              O = new Se();
            return Se.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class ne extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.broadcast_id || t.Sg(ne.M()),
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
              O = new ne();
            return ne.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class le extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.broadcast_channel_id || t.Sg(le.M()),
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
              O = new le();
            return le.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class je extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.thumbnail_upload_token || t.Sg(je.M()),
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
              O = new je();
            return je.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class Ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.broadcast_upload_id || t.Sg(Ae.M()),
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
              O = new Ae();
            return Ae.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class Le extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.broadcaster_steamid || t.Sg(Le.M()),
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
                    broadcaster_steamid: {
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
              O = new Le();
            return Le.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_ViewerBroadcastInvite_Notification";
          }
        }
        class Ge extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.broadcast_id || t.Sg(Ge.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = t.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ge.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Ge();
            return Ge.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ge.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ge.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
          }
        }
        class ke extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.steamid || t.Sg(ke.M()),
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
              O = new ke();
            return ke.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetBroadcastChatInfo_Request";
          }
        }
        class Ue extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.chat_id || t.Sg(Ue.M()),
              a.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
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
              O = new Ue();
            return Ue.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class ze extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.chat_id || t.Sg(ze.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
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
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = t.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ze.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new ze();
            return ze.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ze.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ze.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class B extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.persona_name || t.Sg(B.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
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
              O = new B();
            return B.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_PostChatMessage_Response";
          }
        }
        class ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.chat_id || t.Sg(ee.M()),
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
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
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
              O = new ee();
            return ee.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class ye extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.result || t.Sg(ye.M()),
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
                    result: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    chat_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
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
              O = new ye();
            return ye.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class Me extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.chat_id || t.Sg(Me.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
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
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = t.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Me.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Me();
            return Me.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Me.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Me.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Request";
          }
        }
        class Je extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Je();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Je();
            return Je.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class $e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.chat_id || t.Sg($e.M()),
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
              O = new $e();
            return $e.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_RemoveUserChatText_Request";
          }
        }
        class T extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new T();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new T();
            return T.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Response";
          }
        }
        class $ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.chat_id || t.Sg($.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
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
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT($.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new $();
            return $.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj($.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0($.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class he extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.persona_names || t.Sg(he.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: { persona_names: { n: 1, c: xe, r: !0, q: !0 } },
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
              O = new he();
            return he.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class xe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.steam_id || t.Sg(xe.M()),
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
              O = new xe();
            return xe.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
          }
        }
        class we extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.steamid || t.Sg(we.M()),
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
              O = new we();
            return we.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_StartBuildClip_Request";
          }
        }
        class Qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.broadcast_clip_id || t.Sg(Qe.M()),
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
                    broadcast_clip_id: {
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
              O = new Qe();
            return Qe.deserializeBinaryFromReader(O, i);
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
              O = new Ce();
            return Ce.deserializeBinaryFromReader(O, i);
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
              O = new ut();
            return ut.deserializeBinaryFromReader(O, i);
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
        class tt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.broadcast_clip_id || t.Sg(tt.M()),
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
              O = new tt();
            return tt.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_SetClipDetails_Request";
          }
        }
        class Mt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Mt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Mt();
            return Mt.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Response";
          }
        }
        class et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.broadcast_clip_id || t.Sg(et.M()),
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
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
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
              O = new et();
            return et.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetClipDetails_Request";
          }
        }
        class lt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.broadcast_clip_id || t.Sg(lt.M()),
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
              O = new lt();
            return lt.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetClipDetails_Response";
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
                      d: z,
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
              O = new yt();
            return yt.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_SetRTMPInfo_Request";
          }
        }
        class Wt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Wt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Wt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Wt();
            return Wt.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Response";
          }
        }
        class ht extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.ip || t.Sg(ht.M()),
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
                    ip: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
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
              O = new ht();
            return ht.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetRTMPInfo_Request";
          }
        }
        class ct extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.broadcast_permission || t.Sg(ct.M()),
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
              O = new ct();
            return ct.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetRTMPInfo_Response";
          }
        }
        class qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.row_limit || t.Sg(qe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
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
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = t.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(qe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new qe();
            return qe.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(qe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(qe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class st extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.upload_stats || t.Sg(st.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: { upload_stats: { n: 1, c: at, r: !0, q: !0 } },
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
              O = new st();
            return st.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class at extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.upload_result || t.Sg(at.M()),
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
              O = new at();
            return at.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
          }
        }
        class dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.upload_id || t.Sg(dt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
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
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = t.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(dt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new dt();
            return dt.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(dt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(dt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Request";
          }
        }
        class Et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.viewer_stats || t.Sg(Et.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    viewer_stats: { n: 1, c: It, r: !0, q: !0 },
                    country_stats: { n: 2, c: bt, r: !0, q: !0 },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = t.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Et.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Et();
            return Et.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Et.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Et.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class It extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              It.prototype.time || t.Sg(It.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    time: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = t.w0(It.M())), It.sm_mbf;
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(It.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(It.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new It();
            return It.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(It.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(It.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.country_code || t.Sg(bt.M()),
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
              O = new bt();
            return bt.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class pt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.webrtc_session_id || t.Sg(pt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
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
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = t.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(pt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new pt();
            return pt.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(pt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(pt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Request";
          }
        }
        class Rt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Rt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Rt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Rt();
            return Rt.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Response";
          }
        }
        class Ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.webrtc_session_id || t.Sg(Ve.M()),
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
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
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
              O = new Ve();
            return Ve.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_WebRTCStopped_Request";
          }
        }
        class Gt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Gt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Gt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Gt();
            return Gt.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class xt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.broadcaster_steamid || t.Sg(xt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
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
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = t.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(xt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new xt();
            return xt.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(xt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(xt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
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
              O = new kt();
            return kt.deserializeBinaryFromReader(O, i);
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
              O = new St();
            return St.deserializeBinaryFromReader(O, i);
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
              O = new jt();
            return jt.deserializeBinaryFromReader(O, i);
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
              O = new Nt();
            return Nt.deserializeBinaryFromReader(O, i);
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
        class wt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wt.prototype.broadcaster_steamid || t.Sg(wt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
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
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = t.w0(wt.M())), wt.sm_mbf;
          }
          toObject(e = !1) {
            return wt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(wt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(wt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new wt();
            return wt.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(wt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(wt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Request";
          }
        }
        class Z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Z();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Z();
            return Z.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Response";
          }
        }
        class X extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.broadcaster_steamid || t.Sg(X.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
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
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(X.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new X();
            return X.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(X.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(X.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.candidate_generation || t.Sg(ie.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    candidate_generation: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    candidates: { n: 2, c: St, r: !0, q: !0 },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = t.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ie.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new ie();
            return ie.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ie.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ie.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class Pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.broadcast_session_id || t.Sg(Pe.M()),
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
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
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
              O = new Pe();
            return Pe.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class Oe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.cellid || t.Sg(Oe.M()),
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
                    cellid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
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
              O = new Oe();
            return Oe.deserializeBinaryFromReader(O, i);
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
              O = new Ye();
            return Ye.deserializeBinaryFromReader(O, i);
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
        class _e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.broadcast_session_id || t.Sg(_e.M()),
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
              O = new _e();
            return _e.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_WebRTCHaveTURNServer_Notification";
          }
        }
        class nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.broadcast_session_id || t.Sg(nt.M()),
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
              O = new nt();
            return nt.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class it extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.broadcast_session_id || t.Sg(it.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
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
              O = new it();
            return it.deserializeBinaryFromReader(O, i);
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
            return "CBroadcast_WebRTCSetAnswer_Notification";
          }
        }
        class Dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Dt.prototype.broadcast_session_id || t.Sg(Dt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
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
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = t.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(e = !1) {
            return Dt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Dt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Dt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              O = new Dt();
            return Dt.deserializeBinaryFromReader(O, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Dt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Dt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Notification";
          }
        }
        var Yt;
        ((He) => {
          function e(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, y.I8)(P, Ne, We),
              D,
              { ePrivilege: 1 },
            );
          }
          He.BeginBroadcastSession = e;
          function i(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, y.I8)(I, Ne, We),
              C,
              { ePrivilege: 1 },
            );
          }
          He.EndBroadcastSession = i;
          function O(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, y.I8)(G, Ne, We),
              q,
              { ePrivilege: 1 },
            );
          }
          He.StartBroadcastUpload = O;
          function Xt(Be, Ne) {
            return Be.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, y.I8)(Ae, Ne),
              { ePrivilege: 1 },
            );
          }
          He.NotifyBroadcastUploadStop = Xt;
          function en(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, y.I8)(be, Ne, We),
              fe,
              { ePrivilege: 2 },
            );
          }
          He.WatchBroadcast = en;
          function rn(Be, Ne) {
            return Be.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, y.I8)(Te, Ne),
              { ePrivilege: 2 },
            );
          }
          He.HeartbeatBroadcast = rn;
          function un(Be, Ne) {
            return Be.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, y.I8)(Re, Ne),
              { ePrivilege: 2 },
            );
          }
          He.StopWatchingBroadcast = un;
          function cn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, y.I8)(E, Ne, We),
              ve,
              { ePrivilege: 2 },
            );
          }
          He.GetBroadcastStatus = cn;
          function dn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, y.I8)(me, Ne, We),
              Y,
              { ePrivilege: 2 },
            );
          }
          He.GetBroadcastThumbnail = dn;
          function gn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, y.I8)(Fe, Ne, We),
              De,
              { ePrivilege: 1 },
            );
          }
          He.InviteToBroadcast = gn;
          function fn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, y.I8)(H, Ne, We),
              ue,
              { ePrivilege: 1 },
            );
          }
          He.SendBroadcastStateToServer = fn;
          function zn(Be, Ne) {
            return Be.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, y.I8)(Ge, Ne),
              { ePrivilege: 1 },
            );
          }
          He.NotifyBroadcastSessionHeartbeat = zn;
          function Ct(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, y.I8)(ke, Ne, We),
              Ue,
              { ePrivilege: 2 },
            );
          }
          He.GetBroadcastChatInfo = Ct;
          function yn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, y.I8)(ze, Ne, We),
              B,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          He.PostChatMessage = yn;
          function vn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, y.I8)(ee, Ne, We),
              ye,
              { ePrivilege: 1, rgBrowserAPISites: ["store", "community"] },
            );
          }
          He.UpdateChatMessageFlair = vn;
          function Tt(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, y.I8)(Me, Ne, We),
              Je,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          He.MuteBroadcastChatUser = Tt;
          function hn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, y.I8)($e, Ne, We),
              T,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          He.RemoveUserChatText = hn;
          function sn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, y.I8)($, Ne, We),
              he,
              { ePrivilege: 1 },
            );
          }
          He.GetBroadcastChatUserNames = sn;
          function tn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, y.I8)(we, Ne, We),
              Qe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.StartBuildClip = tn;
          function an(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, y.I8)(Ce, Ne, We),
              ut,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetBuildClipStatus = an;
          function pn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, y.I8)(tt, Ne, We),
              Mt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.SetClipDetails = pn;
          function Vt(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, y.I8)(et, Ne, We),
              lt,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetClipDetails = Vt;
          function qt(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.SetRTMPInfo#1",
              (0, y.I8)(yt, Ne, We),
              Wt,
              { ePrivilege: 1 },
            );
          }
          He.SetRTMPInfo = qt;
          function _t(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.GetRTMPInfo#1",
              (0, y.I8)(ht, Ne, We),
              ct,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          He.GetRTMPInfo = _t;
          function Mn(Be, Ne) {
            return Be.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, y.I8)(_e, Ne),
              { ePrivilege: 1 },
            );
          }
          He.NotifyWebRTCHaveTURNServer = Mn;
          function ln(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, y.I8)(pt, Ne, We),
              Rt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCStartResult = ln;
          function En(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, y.I8)(Ve, Ne, We),
              Gt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCStopped = En;
          function bn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, y.I8)(xt, Ne, We),
              kt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCSetAnswer = bn;
          function Sn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, y.I8)(Oe, Ne, We),
              Ye,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCLookupTURNServer = Sn;
          function wn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, y.I8)(jt, Ne, We),
              Nt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCAddHostCandidate = wn;
          function Dn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, y.I8)(wt, Ne, We),
              Z,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCAddViewerCandidate = Dn;
          function nn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, y.I8)(X, Ne, We),
              ie,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCGetHostCandidates = nn;
          function In(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, y.I8)(qe, Ne, We),
              st,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetBroadcastUploadStats = In;
          function xn(Be, Ne, We) {
            return Be.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, y.I8)(dt, Ne, We),
              Et,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetBroadcastViewerStats = xn;
        })(Yt || (Yt = {}));
        var Zt;
        ((He) => {
          (He.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: K,
          }),
            (He.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: se,
            }),
            (He.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: pe,
            }),
            (He.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: Ee,
            }),
            (He.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: Se,
            }),
            (He.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: Le,
            }),
            (He.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: ne,
            }),
            (He.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: le,
            }),
            (He.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: je,
            }),
            (He.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: Pe,
            }),
            (He.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: nt,
            }),
            (He.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: it,
            }),
            (He.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: Dt,
            });
        })(Zt || (Zt = {}));
      },
      61639: (ge, de, r) => {
        "use strict";
        r.d(de, { Mc: () => n });
        var n = {};
        r.r(n),
          r.d(n, {
            Ms: () => k,
            n6: () => W,
            U6: () => V,
            kz: () => F,
            ej: () => J,
            R: () => re,
            mZ: () => te,
            Is: () => S,
            B_: () => U,
            bW: () => N,
            iy: () => z,
          });
        var x = r(80613),
          a = r.n(x),
          s = r(75245),
          t = r(35038);
        const y = 0,
          z = 1,
          V = 2,
          U = 3,
          N = 4,
          F = 5,
          _ = 6,
          W = 7,
          A = 8,
          S = 9,
          v = 10,
          w = 11,
          g = 12,
          o = 13,
          h = 14,
          b = 15,
          k = 16,
          te = 17,
          re = 18,
          J = 19;
        function Q(C) {
          return "unknown EProductPageAction ( " + C + " )";
        }
        function c(C) {
          return "unknown EProductViewAction ( " + C + " )";
        }
        function m(C) {
          return "unknown EProductImpressionFromClientType ( " + C + " )";
        }
        function M(C) {
          return "unknown ETrackedEmailType ( " + C + " )";
        }
        function p(C) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + C + " )"
          );
        }
        function L(C) {
          return "unknown EUnifedProductInteractionActions ( " + C + " )";
        }
        class P extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(G = null) {
            super(),
              P.prototype.impressions || s.Sg(P.M()),
              x.Message.initialize(this, G, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: { impressions: { n: 1, c: D, r: !0, q: !0 } },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = s.w0(P.M())), P.sm_mbf;
          }
          toObject(G = !1) {
            return P.toObject(G, this);
          }
          static toObject(G, q) {
            return s.BT(P.M(), G, q);
          }
          static fromObject(G) {
            return s.Uq(P.M(), G);
          }
          static deserializeBinary(G) {
            let q = new (a().BinaryReader)(G),
              pe = new P();
            return P.deserializeBinaryFromReader(pe, q);
          }
          static deserializeBinaryFromReader(G, q) {
            return s.zj(P.MBF(), G, q);
          }
          serializeBinary() {
            var G = new (a().BinaryWriter)();
            return P.serializeBinaryToWriter(this, G), G.getResultBuffer();
          }
          static serializeBinaryToWriter(G, q) {
            s.i0(P.M(), G, q);
          }
          serializeBase64String() {
            var G = new (a().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, G), G.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification";
          }
        }
        class D extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(G = null) {
            super(),
              D.prototype.type || s.Sg(D.M()),
              x.Message.initialize(this, G, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
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
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = s.w0(D.M())), D.sm_mbf;
          }
          toObject(G = !1) {
            return D.toObject(G, this);
          }
          static toObject(G, q) {
            return s.BT(D.M(), G, q);
          }
          static fromObject(G) {
            return s.Uq(D.M(), G);
          }
          static deserializeBinary(G) {
            let q = new (a().BinaryReader)(G),
              pe = new D();
            return D.deserializeBinaryFromReader(pe, q);
          }
          static deserializeBinaryFromReader(G, q) {
            return s.zj(D.MBF(), G, q);
          }
          serializeBinary() {
            var G = new (a().BinaryWriter)();
            return D.serializeBinaryToWriter(this, G), G.getResultBuffer();
          }
          static serializeBinaryToWriter(G, q) {
            s.i0(D.M(), G, q);
          }
          serializeBase64String() {
            var G = new (a().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, G), G.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var I;
        ((C) => {
          function G(q, pe) {
            return q.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, t.I8)(P, pe),
              { ePrivilege: 1 },
            );
          }
          C.ReportProductImpressionsFromClient = G;
        })(I || (I = {}));
      },
      36631: (ge, de, r) => {
        "use strict";
        r.d(de, {
          Ay: () => z,
          Cs: () => N,
          HN: () => A,
          HY: () => t,
          LD: () => U,
          MU: () => W,
          W3: () => y,
          bs: () => a,
          uF: () => s,
          yD: () => F,
        });
        var n = r(7850),
          x = r(90626);
        const a = 0,
          s = 1,
          t = 2,
          y = 3,
          z = 4,
          V = { eLocation: a },
          U = x.createContext(V);
        function N(S) {
          const { children: v, location: w } = S;
          return (0, n.jsx)(U.Provider, {
            value: { ...V, eLocation: w ?? a },
            children: v,
          });
        }
        function F() {
          return x.useContext(U);
        }
        function _() {
          return F().eLocation == s;
        }
        function W() {
          return F().eLocation == t;
        }
        function A() {
          const S = F();
          return S.eLocation == t || S.eLocation == s;
        }
      },
      92799: (ge, de, r) => {
        "use strict";
        r.d(de, { m: () => o });
        var n = r(7850),
          x = r(23386),
          a = r(24660),
          s = r(64868),
          t = r(72609),
          y = r(90626),
          z = r(16412),
          V = r(73191),
          U = r(69168),
          N = r(36118),
          F = r(85599),
          _ = r(36707),
          W = r(18210),
          A = r(6881),
          S = r(4105),
          v = r(94253),
          w = r(74187),
          g = r.n(w);
        function o(re) {
          const J = (0, v.Oz)(),
            { bLoading: Q } = J,
            { className: c, bPreviewMode: m, rewardType: M } = re,
            [p, L, P] = (0, s.uD)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(z.$n, {
                className: (0, _.A)("CSSClaimItemButton", c),
                onClick: () => {
                  J.bCanClaimNewItem
                    ? L()
                    : m &&
                      (L(),
                      console.log(
                        "Show dialog for debugging, since already claimed: ",
                        J,
                      ));
                },
                disabled: Q,
                children: Q
                  ? (0, n.jsx)(F.t, {
                      string: (0, W.we)("#Loading"),
                      size: "small",
                    })
                  : (0, n.jsx)(h, { claimState: J }),
              }),
              (0, n.jsx)(U.E, {
                active: p,
                children: (0, n.jsx)(b, { rewardType: M, closeModal: P }),
              }),
            ],
          });
        }
        function h(re) {
          const { claimState: J, strButtonOverride: Q, rewardType: c } = re;
          if (J.bAlreadyClaimedCurrentItem)
            return (0, n.jsxs)("div", {
              className: (0, _.A)(w.CheckMark, "CSSClaimedState"),
              children: [
                (0, n.jsx)(N.Jlk, {}),
                (0, n.jsxs)("span", {
                  children: [
                    " ",
                    Q || (0, W.we)("#Sale_ClaimableReward_AlreadyClaimed"),
                  ],
                }),
              ],
            });
          let m = (0, W.we)("#Sale_ClaimableReward_generic");
          switch (J?.community_item_class || c) {
            case x.Ed:
              m = (0, W.we)("#Sale_ClaimableReward_sticker");
              break;
            case x.jE:
              m = (0, W.we)("#Sale_ClaimableReward_profilemodifier");
              break;
            case x.xw:
              m = (0, W.we)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, n.jsx)("span", {
            className: "CSSUnclaimedState",
            children: m,
          });
        }
        function b(re) {
          const { closeModal: J, rewardType: Q } = re,
            { fnClaimItem: c } = (0, v.CC)(),
            m = (0, V.vs)(),
            [M, p] = y.useState(null);
          y.useEffect(() => {
            m.bLoading ||
              (m.fnSetLoading(!0),
              c()
                .then((D) => {
                  if ((p(D), D.appid)) {
                    let I = (0, W.we)(
                      "#Sale_ClaimableReward_completed_generic",
                    );
                    const C = M?.community_item_class || Q;
                    switch (C) {
                      case x.Ed:
                        I = (0, W.we)(
                          "#Sale_ClaimableReward_completed_sticker",
                        );
                        break;
                      case x.jE:
                        I = (0, W.we)(
                          "#Sale_ClaimableReward_completed_profilemodifier",
                        );
                        break;
                      case x.xw:
                        I = (0, W.we)(
                          "#Sale_ClaimableReward_completed_animatedavatar",
                        );
                        break;
                    }
                    m.fnSetStrSuccess("   "),
                      m.fnSetElSuccess(
                        (0, n.jsxs)("div", {
                          className: w.DialogCtn,
                          children: [
                            (0, n.jsx)("span", { children: I }),
                            (0, n.jsx)(k, {
                              appid: D.appid,
                              community_item_type: D.community_item_type,
                              rewardType: C,
                            }),
                          ],
                        }),
                      );
                  } else
                    m.fnSetStrError((0, W.we)("#Sale_ClaimableReward_Busy"));
                })
                .catch(() =>
                  m.fnSetStrError((0, W.we)("#Sale_ClaimableReward_Busy")),
                ));
          }, [M?.community_item_class, m, c, Q]);
          let L = (0, W.we)("#Sale_ClaimableReward_generic");
          switch (M?.community_item_class || Q) {
            case x.Ed:
              L = (0, W.we)("#Sale_ClaimableReward_sticker");
              break;
            case x.jE:
              L = (0, W.we)("#Sale_ClaimableReward_profilemodifier");
              break;
            case x.xw:
              L = (0, W.we)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, n.jsx)(V.Hh, {
            state: m,
            strDialogTitle: L,
            closeModal: J,
          });
        }
        function k(re) {
          const { appid: J, community_item_type: Q, rewardType: c } = re;
          return !J || !Q
            ? null
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(S.f8, { appid: J, community_item_type: Q }),
                  c == x.jE &&
                    (0, n.jsx)(te, { appid: J, community_item_type: Q }),
                ],
              });
        }
        function te(re) {
          const { appid: J, community_item_type: Q } = re,
            c = (0, A.fw)(J),
            { mutate: m, isSuccess: M } = (0, v.t5)();
          if (!c) return null;
          const p = c.find((L) => L.item_type == Q);
          return p
            ? (0, n.jsxs)("div", {
                className: w.EquipCtn,
                children: [
                  M
                    ? (0, n.jsx)("div", {
                        children: (0, W.we)(
                          "#Sale_ClaimableReward_profilemodifier_apply_success",
                        ),
                      })
                    : (0, n.jsx)(z.$n, {
                        onClick: () => m(p),
                        children: (0, W.we)(
                          "#Sale_ClaimableReward_profilemodifier_apply",
                        ),
                      }),
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}`,
                    children: (0, W.we)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              })
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/edit/goldenprofile`,
                    children: (0, W.we)(
                      "#Sale_ClaimableReward_profilemodifier_choose",
                    ),
                  }),
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}`,
                    children: (0, W.we)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              });
        }
      },
      11587: (ge, de, r) => {
        "use strict";
        r.d(de, { Qg: () => v, h3: () => S });
        var n = r(72609),
          x = r(80902),
          a = r(75233),
          s = r(51614),
          t = r(90626),
          y = r(72604);
        const z = "saleaction/giveawayregistration",
          V = "saleaction/creategiveawayregistration";
        async function U(w) {
          const g = n.TS.STORE_BASE_URL + z + "?name=" + encodeURIComponent(w),
            o = await fetch(g, { credentials: "include" });
          return await F("GetUserGiveawayRegistration", w, g, o);
        }
        async function N(w) {
          const g = n.TS.STORE_BASE_URL + V,
            o = await fetch(g, {
              method: "POST",
              credentials: "include",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ name: w }),
            });
          return await F("UpdateUserGiveawayRegistration", w, g, o);
        }
        async function F(w, g, o, h) {
          if (!h.ok) throw new Error(o + " answered " + h.status);
          const b = await h.json();
          if (b?.success == y.R && b.registration) return b.registration;
          throw new Error(w + " on " + g + " answered " + b?.success);
        }
        const _ = { registered: !1 };
        function W(w, g) {
          return ["sale", "giveawayregistration", w, g];
        }
        function A(w, g) {
          return {
            queryKey: W(w, g),
            queryFn: () => U(w),
            enabled: !!w,
            retry: !1,
          };
        }
        function S(w) {
          const { data: g, isError: o } = (0, x.I)(A(w, n.iA.accountid));
          return o ? _ : g;
        }
        function v() {
          const w = (0, a.jE)(),
            { mutateAsync: g } = (0, s.n)({
              mutationFn: N,
              onSuccess: (h, b) => w.setQueryData(W(b, n.iA.accountid), h),
            });
          return {
            fnCreateRegistration: (0, t.useCallback)(
              async (h) => {
                try {
                  return await g(h);
                } catch (b) {
                  return (
                    console.error(
                      "Registering for giveaway " + h + " failed",
                      b,
                    ),
                    _
                  );
                }
              },
              [g],
            ),
          };
        }
      },
      31774: (ge, de, r) => {
        "use strict";
        r.d(de, { $O: () => g, wk: () => w });
        var n = r(80902),
          x = r(75233),
          a = r(90626),
          s = r(72609),
          t = r(45806),
          y = r(48491),
          z = r(49288);
        async function V(o, h) {
          const { rgDefIDs: b, strCategory: k, itemClass: te } = h,
            re = await z.a9.QueryRewardItems(o, {
              definitionids: b,
              community_item_classes: te ? [te] : void 0,
              filter_match_any_category_tags: k ? [k] : void 0,
            });
          if (!re.BSuccess())
            throw new Error(
              "LoyaltyRewards.QueryRewardItems answered " + re.GetEResult(),
            );
          return re.Body().toObject().definitions ?? [];
        }
        let U;
        function N() {
          const o = (0, t.q)();
          return o
            ? o.GetAnonymousServiceTransport()
            : (U || (U = new y.D(s.TS.WEBAPI_BASE_URL)),
              U.GetServiceTransport());
        }
        async function F(o) {
          return V(N(), o);
        }
        const _ = 3600 * 1e3;
        function W(o) {
          return ["LoyaltyRewardDef", o];
        }
        function A(o, h) {
          return ["LoyaltyRewardDefsByCategoryAndClass", o, h];
        }
        function S(o) {
          return {
            queryKey: W(o),
            queryFn: async () => {
              const h = await F({ rgDefIDs: [o] }),
                b = h.length == 1 ? h[0] : void 0;
              if (!b)
                throw new Error(
                  `Asked for point shop item ${o} and got ${h.length} items back, wanted exactly one.`,
                );
              return b;
            },
            enabled: o > 0,
            staleTime: _,
            retry: !1,
          };
        }
        function v(o, h) {
          return {
            queryKey: A(o, h),
            queryFn: () => F({ strCategory: o, itemClass: h }),
            enabled: !!(o && h),
            staleTime: _,
            retry: !1,
          };
        }
        function w(o) {
          const { data: h } = (0, n.I)(S(o));
          return h;
        }
        function g(o, h) {
          const b = (0, x.jE)(),
            { data: k } = (0, n.I)(v(o, h));
          return (
            (0, a.useEffect)(() => {
              k?.forEach((te) => {
                te.defid !== void 0 && b.setQueryData(W(te.defid), te);
              });
            }, [k, b]),
            k
          );
        }
      },
      6881: (ge, de, r) => {
        "use strict";
        r.d(de, { _u: () => M, fw: () => b, p1: () => k, Km: () => te });
        var n = r(80902),
          x = r(75233),
          a = r(51614),
          s = r(90626),
          t = r(72609),
          y = r(45806),
          z = r(33828),
          V = r(48491),
          U = r(67705),
          N = r(72604),
          F = r(31224);
        async function _(p, L) {
          const P = await F.uy.GetCommunityInventory(p, { filter_appids: [L] });
          if (P.GetEResult() != N.R)
            throw new Error(
              "Quest.GetCommunityInventory on app " +
                L +
                " answered " +
                P.GetEResult(),
            );
          return P.Body().toObject().items ?? [];
        }
        let W;
        function A() {
          const p = (0, y.q)();
          if (p) return p.GetServiceTransport();
          if (!W) {
            const L = (0, U.Fd)("read_inventory_token", "application_config");
            W = L ? new V.D(t.TS.WEBAPI_BASE_URL, L) : (0, z.P)();
          }
          return W.GetServiceTransport();
        }
        async function S(p) {
          return _(A(), p);
        }
        const v = 3 * 1e3,
          w = 5 * 1e3,
          g = 15 * 1e3;
        function o(p) {
          return ["QuestCommunityInventory", p];
        }
        function h(p) {
          return {
            queryKey: o(p),
            queryFn: () => S(p),
            enabled: !!p,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function b(p) {
          const { data: L } = (0, n.I)(h(p));
          return L;
        }
        function k(p, L) {
          const P = b(p);
          return {
            communityItem: (0, s.useMemo)(
              () => P?.find((I) => I.appid == p && I.item_type == L),
              [P, p, L],
            ),
            bLoaded: P != null,
          };
        }
        function te() {
          const p = (0, x.jE)();
          return (0, a.n)({
            mutationFn: (L) => J(p, L.appid, L.fnBHasExpectedItems),
          });
        }
        const re = new WeakMap();
        function J(p, L, P) {
          if (!L || P(p.getQueryData(o(L)) ?? [])) return Promise.resolve();
          let D = re.get(p);
          D || ((D = new Map()), re.set(p, D));
          let I = D.get(L);
          return (
            I || ((I = Q(p, L, P).finally(() => D?.delete(L))), D.set(L, I)), I
          );
        }
        async function Q(p, L, P) {
          const D = [0, v, c()];
          for (const I of D) {
            I > 0 && (await m(I));
            let C;
            try {
              (C = await S(L)), p.setQueryData(o(L), C);
            } catch (G) {
              console.error(
                "Re-reading the community inventory for app " + L + " failed",
                G,
              );
            }
            if (P(C ?? [])) return;
          }
        }
        function c() {
          return w + Math.floor(Math.random() * (g - w));
        }
        function m(p) {
          return new Promise((L) => setTimeout(L, p));
        }
        function M(p, L, P) {
          p.setQueryData(o(L), P);
        }
      },
      4105: (ge, de, r) => {
        "use strict";
        r.d(de, { Zx: () => k, f8: () => b });
        var n = r(7850),
          x = r(65946),
          a = r(23386),
          s = r(85599),
          t = r(18210),
          y = r(72609),
          z = r(56330),
          V = r(80902),
          U = r(90626),
          N = r(72604);
        const F = "minigamev2/itemdefs",
          _ = "appid",
          W = "editor";
        function A() {
          return (typeof self < "u" ? self.origin + "/" : "") ===
            y.TS.STORE_BASE_URL
            ? y.TS.STORE_BASE_URL
            : y.TS.COMMUNITY_BASE_URL;
        }
        async function S(te, re) {
          if (!te) return [];
          const J = new URLSearchParams({ [_]: String(te), l: y.TS.LANGUAGE });
          re && J.set(W, "1");
          const Q = `${A()}${F}?${J}`,
            c = await fetch(Q, { credentials: re ? "include" : "same-origin" });
          if (!c.ok) throw new Error(`${Q} answered ${c.status}`);
          const m = await c.json();
          if (m?.success == N.R && m.item_definitions)
            return m.item_definitions;
          throw new Error(
            "Community item definitions for app " +
              te +
              " answered " +
              m?.success,
          );
        }
        function v(te, re) {
          return ["MinigameCommunityItemDefs", te, !!re];
        }
        function w(te, re) {
          return {
            queryKey: v(te, re),
            queryFn: () => S(te, re),
            enabled: !!te,
            retry: !1,
          };
        }
        function g(te, re) {
          const { data: J } = (0, V.I)(w(te, re));
          return J;
        }
        function o(te, re, J) {
          const Q = g(te, J);
          return (0, U.useMemo)(
            () =>
              Q?.find(
                (c) => (J || c.active) && c.appid == te && c.item_type == re,
              ),
            [Q, te, re, J],
          );
        }
        function h(te) {
          const {
            appid: re,
            item_image_small: J,
            item_image_large: Q,
            item_movie_mp4: c,
            item_movie_webm: m,
            item_title: M,
          } = te;
          if (c && m) {
            const p = `${y.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${re}/${J}`,
              L = `${y.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${re}/${m}`,
              P = `${y.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${re}/${c}`;
            return (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("video", {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: p,
                playsInline: !0,
                className: te.videoClassName,
                children: [
                  (0, n.jsx)("source", { src: L, type: "video/webm" }),
                  !y.TS.IN_CLIENT &&
                    (0, n.jsx)("source", { src: P, type: "video/mp4" }),
                ],
              }),
            });
          } else {
            const p = `${y.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${re}/${J || Q}`;
            return (0, n.jsx)("img", {
              className: te.className,
              src: p,
              alt: M,
            });
          }
        }
        function b(te) {
          const { appid: re, community_item_type: J, bForEdit: Q } = te,
            c = o(re, J, Q),
            m =
              c && !c.active
                ? (0, n.jsx)("div", {
                    className: z.WarningStylesBackground,
                    children: (0, t.we)(
                      "#Sale_Section_RewardShelf_ItemInActiveWarning",
                    ),
                  })
                : void 0;
          return c
            ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(h, { ...c }), m],
              })
            : (0, n.jsx)(s.t, { size: "small", string: (0, t.we)("#Loading") });
        }
        function k(te) {
          const { section: re, rewardDef: J, language: Q } = te,
            c = o(J.appid ?? 0, J.community_item_type ?? 0),
            [m] = (0, x.q3)(() => [!!re.rewards?.show_reward_item_name]);
          let M;
          switch (J.community_class) {
            case a.xi:
            case a.xw:
              M = `${y.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
              break;
            case a.u8:
              M = `${y.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
              break;
            case a.sU:
            case a.jE:
              M = `${y.TS.COMMUNITY_BASE_URL}my/edit/background`;
              break;
            case a.zs:
              M = `${y.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
              break;
            case a.Ed:
              M = `${y.TS.COMMUNITY_BASE_URL}chat`;
              break;
          }
          return (0, n.jsxs)("a", {
            href: M,
            children: [
              (0, n.jsx)(b, {
                appid: J.appid ?? 0,
                community_item_type: J.community_item_type ?? 0,
              }),
              !!m && (0, n.jsx)("span", { children: c?.item_name }),
            ],
          });
        }
      },
      94253: (ge, de, r) => {
        "use strict";
        r.d(de, {
          t5: () => I,
          os: () => me,
          Qt: () => pe,
          CC: () => D,
          Oz: () => P,
          lu: () => C,
        });
        var n = r(23386),
          x = r(72609),
          a = r(68312),
          s = r(75233),
          t = r(80902),
          y = r(51614),
          z = r(90626),
          V = r(45806),
          U = r(33828),
          N = r(48491),
          F = r(67705),
          _ = r(72604),
          W = r(31224),
          A = r(7112);
        const S = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        async function v(Y, be) {
          const fe = await A.Qm.CanClaimItem(Y, { language: be });
          if (fe.GetEResult() != _.R)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + fe.GetEResult(),
            );
          const Ie = fe.Body().toObject(),
            Te = Ie.reward_item?.defid ? Ie.reward_item : void 0;
          return {
            bCanClaimNewItem: !!Ie.can_claim,
            bAlreadyClaimedCurrentItem: !!Te,
            appid: Te?.appid,
            community_item_type: Te?.community_item_type,
            community_item_class: Te?.community_item_class,
            rtNextClaimTime:
              (Ie.next_claim_time ?? 0) > 0 ? Ie.next_claim_time : void 0,
          };
        }
        async function w(Y, be) {
          const fe = await A.Qm.ClaimItem(Y, { language: be });
          if (fe.GetEResult() == _.Ze) return v(Y, be);
          if (fe.GetEResult() != _.R)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + fe.GetEResult(),
            );
          const Ie = fe.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: Ie?.appid,
            community_item_type: Ie?.community_item_type,
            community_item_class: Ie?.community_item_class,
            rtNextClaimTime:
              (fe.Body().next_claim_time() ?? 0) > 0
                ? fe.Body().next_claim_time()
                : void 0,
          };
        }
        async function g(Y, be) {
          const fe = await W.uy.ActivateProfileModifierItem(Y, {
            communityitemid: be.communityitemid,
            appid: be.appid,
            activate: !0,
          });
          if (fe.GetEResult() != _.R)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + fe.GetEResult(),
            );
          return fe.GetEResult();
        }
        async function o(Y, be, fe, Ie) {
          return (
            await A.Qm.GetCurrentDefinition(Y, {
              sale_def_type: be,
              language: fe,
              include_community_item_def: Ie,
            })
          )
            .Body()
            .toObject();
        }
        async function h(Y, be, fe, Ie) {
          return (
            await A.Qm.GetClaimedSaleRewards(Y, {
              sale_def_type: be,
              language: fe,
              include_community_item_def: Ie,
            })
          )
            .Body()
            .toObject();
        }
        let b;
        function k() {
          const Y = (0, V.q)();
          if (Y) return Y.GetServiceTransport();
          if (!b) {
            const be = (0, F.Fd)("loyalty_webapi_token", "application_config");
            b = be ? new N.D(x.TS.WEBAPI_BASE_URL, be) : (0, U.P)();
          }
          return b.GetServiceTransport();
        }
        async function te(Y) {
          return v(k(), Y);
        }
        async function re(Y) {
          return w(k(), Y);
        }
        async function J(Y) {
          return g(k(), Y);
        }
        const Q = 300 * 1e3;
        let c = !1,
          m = null;
        const M = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: n.Ed,
        };
        function p(Y) {
          return ["SaleItemCanClaim", Y];
        }
        function L(Y) {
          return {
            queryKey: p(Y),
            queryFn: () => te(Y),
            enabled: !c,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function P() {
          const Y = x.TS.LANGUAGE,
            be = (0, s.jE)(),
            { data: fe, isLoading: Ie } = (0, t.I)(L(Y)),
            Te = fe?.rtNextClaimTime;
          return (
            (0, z.useEffect)(() => {
              let Re = 0;
              if (Te) {
                const Fe = () => {
                  const De = Te * 1e3 - Date.now();
                  if (De <= 0) {
                    be.invalidateQueries({ queryKey: p(Y) });
                    return;
                  }
                  Re = window.setTimeout(Fe, De > Q ? De / 2 : De);
                };
                Fe();
              }
              return () => window.clearTimeout(Re);
            }, [Te, Y, be]),
            { ...(fe ?? S), bLoading: Ie }
          );
        }
        function D() {
          const Y = (0, s.jE)(),
            { mutateAsync: be } = (0, y.n)({
              mutationFn: () => {
                if (m) {
                  const Ie = m;
                  return (m = null), Promise.resolve(Ie);
                }
                return c
                  ? Promise.resolve(Y.getQueryData(p(x.TS.LANGUAGE)) ?? S)
                  : re(x.TS.LANGUAGE);
              },
              onSuccess: (Ie) => Y.setQueryData(p(x.TS.LANGUAGE), Ie),
            });
          return { fnClaimItem: (0, z.useCallback)(() => be(), [be]) };
        }
        function I() {
          return (0, y.n)({ mutationFn: (Y) => J(Y) });
        }
        function C() {
          const Y = (0, s.jE)();
          return {
            fnSetClaimState: (0, z.useCallback)(
              (fe) => {
                (c = !0),
                  (m = fe.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ...M,
                      }
                    : null),
                  Y.setQueryData(p(x.TS.LANGUAGE), fe);
              },
              [Y],
            ),
          };
        }
        function G(Y, be, fe) {
          return ["SaleRewardsGetDefinition", Y, be, fe];
        }
        function q(Y, be, fe, Ie) {
          return {
            queryKey: G(be, fe, Ie),
            queryFn: () => o(Y, be, fe, Ie),
            staleTime: 1 / 0,
          };
        }
        function pe(Y, be, fe) {
          const Ie = (0, a.KV)();
          return (0, t.I)(q(Ie, Y, be, fe));
        }
        function E(Y, be, fe, Ie) {
          return ["GetClaimedSaleRewards", Y, be, !!fe, Ie];
        }
        function ve(Y, be, fe, Ie, Te) {
          return {
            queryKey: E(be, fe, Ie, Te),
            queryFn: () => h(Y, be, fe, Ie),
            staleTime: 1 / 0,
          };
        }
        function me(Y, be, fe, Ie) {
          const Te = (0, a.KV)();
          return (0, t.I)(ve(Te, Y, be, fe, Ie));
        }
      },
      86959: (ge, de, r) => {
        "use strict";
        r.d(de, { Fk: () => a, rz: () => V });
        var n = r(53113),
          x = r(72609);
        function a(g, o) {
          return !o || o.startsWith("https://") || o.startsWith("http://")
            ? o
            : `${x.TS.CLAN_CDN_ASSET_URL}images/clan/${g}/${o}`;
        }
        function s(g, o, h) {
          return !o || IsHttpOrHttps(o) ? o : `${h}images/clan/${g}/${o}`;
        }
        const t = "poster",
          y = `${t}.avif`,
          z = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
        function V(g) {
          const o = g.video_webm_src || g.video_mp4_src;
          if (!o || g.image?.includes(`.${t}.`)) return g.image;
          const h = z.exec(o);
          return h ? `${h[1]}.${y}` : g.image;
        }
        const U = 0.01,
          N = 100,
          F = 4,
          _ = null,
          W = 0.005;
        function A(g, o) {
          if (!(!g || !o || g <= 0 || o <= 0)) return S(g / o);
        }
        function S(g) {
          if (!g || !Number.isFinite(g) || g < U || g > N) return;
          const o = Math.pow(10, F);
          return Math.round(g * o) / o;
        }
        function v(g) {
          const o = g.trim();
          if (!o) return;
          const h = /^(\d+(?:\.\d+)?)\s*[:x/]\s*(\d+(?:\.\d+)?)$/i.exec(o);
          if (h) return A(parseFloat(h[1]), parseFloat(h[2]));
          if (/^\d+(?:\.\d+)?$/.test(o)) return S(parseFloat(o));
        }
        function w(g) {
          const o = _.find(([h, b]) => Math.abs(g - h / b) < W);
          return o ? `${o[0]}:${o[1]}` : String(g);
        }
      },
      47797: (ge, de, r) => {
        "use strict";
        r.d(de, { Ns: () => a });
        var n = r(99412);
        const x = 1778623200;
        function a(y, z) {
          let V = !1;
          return (
            y && y.GetEventType() == n.ajI
              ? (V = !0)
              : y && z && z.is_creator_home && (V = s(y, z)),
            V
          );
        }
        function s(y, z) {
          return !!z && !!z.is_creator_home && (y.createTime ?? 0) > x;
        }
        function t(y) {
          const z = useClanInfoByAccountID(y.clanSteamID.GetAccountID());
          return a(y, z.data);
        }
      },
      64457: (ge, de, r) => {
        "use strict";
        r.d(de, { PE: () => te, Yg: () => h, _t: () => b, gO: () => J });
        var n = r(7850),
          x = r(21721),
          a = r(25046),
          s = r(40358),
          t = r(68094),
          y = r(41032),
          z = r(90626),
          V = r(62571),
          U = r(40426),
          N = r(36118),
          F = r(36707),
          _ = r(18210),
          W = r(72609),
          A = r(96538),
          S = r(85599),
          v = r(64271),
          w = r(48963),
          g = r.n(w),
          o = r(50573);
        function h(c) {
          const { id: m, bPopOutTrailerPlayback: M } = c,
            { data: p } = (0, s.Yo)(m),
            { data: L } = (0, s.j4)(m),
            { data: P } = (0, s.J$)(m),
            [D, I] = (0, z.useState)(!1),
            [C, G] = (0, z.useState)(!1),
            q = (0, y.dy)(),
            pe = p?.highlights?.filter((Y) => !q || Y.all_ages),
            E = pe && pe?.length > 0 ? pe[0] : void 0,
            ve = z.useCallback(() => {
              E && (M ? G(!0) : I((Y) => !Y));
            }, [E, M]);
          if (!P)
            return (0, n.jsx)("div", {
              className: (0, F.A)(g().HilightGrid, g().MediaContainer),
              children: (0, n.jsx)(S.t, { size: "medium" }),
            });
          const me = E
            ? (0, n.jsx)(Q, {
                trailer: E,
                bPlayVideo: D,
                fnTogglePlayTrailer: ve,
              })
            : null;
          return !E &&
            !(L && L.all_ages_screenshots && L.all_ages_screenshots.length > 0)
            ? null
            : (0, n.jsxs)("div", {
                className: (0, F.A)(g().HilightGrid, g().MediaContainer),
                children: [
                  (0, n.jsx)(b, {
                    elFeaturedInCenter: me,
                    storeItemScreenshots: L,
                    trailer: E,
                    id: m,
                    name: P.name || "",
                  }),
                  M
                    ? (0, n.jsx)(te, {
                        id: m,
                        bShowModal: C,
                        hideModal: () => G(!1),
                      })
                    : (0, n.jsx)(k, {
                        name: P.name || "",
                        trailer: E,
                        bPlayVideo: D,
                        fnTogglePlayTrailer: ve,
                        bControls: !0,
                      }),
                ],
              });
        }
        function b(c) {
          const {
              elFeaturedInCenter: m,
              id: M,
              name: p,
              trailer: L,
              storeItemScreenshots: P,
              featureElementclassName: D,
              bUseTrailerAsFirstThumb: I,
              bNoScreenShotModals: C,
            } = c,
            [G, q] = z.useState(void 0),
            [pe, E] = (0, U.XC)(),
            ve = (0, y.dy)(),
            me = (0, z.useRef)(null),
            [Y, be] = (0, z.useState)(0);
          if (!M) return null;
          const fe = m || (G !== void 0 && G !== -1) ? G : 0,
            Ie = new Array(),
            Te = new Array();
          I &&
            L &&
            (Ie.push(
              (0, n.jsx)(
                Q,
                {
                  trailer: L,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => q(0),
                  onMouseLeave: () => {
                    const H = me.current;
                    H && be(H.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            Te.push(
              (0, n.jsx)(
                k,
                {
                  ref: me,
                  name: p,
                  trailer: L,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: Y,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const Re = (
            ve ? P?.all_ages_screenshots : P?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (Re?.forEach((H, ue) => {
              if ((m || ue > 0) && Ie.length < 3) {
                const K = (0, x.bu)(H, "thumb"),
                  oe = (0, x.bu)(H, "600x338"),
                  se = Ie.length;
                Ie.push(
                  (0, n.jsx)(
                    "div",
                    {
                      className: (0, F.A)({
                        [g().ThumbnailCtn]: !0,
                        [g().ThumbnialClickable]: !C,
                      }),
                      onMouseEnter: () => q(se),
                      children: C
                        ? (0, n.jsx)("img", { src: K, alt: p })
                        : (0, n.jsx)("button", {
                            type: "button",
                            className: g().ThumbnailButton,
                            onClick: () => {
                              const Ee = [...(Re || [])];
                              if (Ee.length > 0) {
                                for (let Se = 0; Se < ue; ++Se) {
                                  const ne = Ee.shift();
                                  ne && Ee.push(ne);
                                }
                                pe(Ee.map((Se) => (0, x.bu)(Se, "full")));
                              }
                            },
                            children: (0, n.jsx)("img", { src: K, alt: p }),
                          }),
                    },
                    ue + "_small_" + K,
                  ),
                ),
                  Te.push(
                    (0, n.jsx)(
                      "div",
                      {
                        className: g().ScreenshotDisplayCtn,
                        children: (0, n.jsx)("img", { src: oe, alt: p }),
                      },
                      ue + "_big_" + K,
                    ),
                  );
              }
            }),
            !m && (!Te || Te.length == 0))
          )
            return null;
          const Fe = Ie.slice(0, 3),
            De = Array.from({ length: Math.max(0, 3 - Fe.length) });
          return (0, n.jsxs)(n.Fragment, {
            children: [
              E,
              (0, n.jsx)("div", {
                className: D || g().MainMediaCtn,
                children:
                  m && (fe === -1 || fe === void 0)
                    ? (0, n.jsx)(n.Fragment, { children: m })
                    : (0, n.jsx)(n.Fragment, {
                        children: fe !== void 0 && Te[fe],
                      }),
              }),
              Fe.length > 0 &&
                (0, n.jsxs)("div", {
                  className: g().ScreenshotThumbnailRow,
                  onMouseLeave: () => q(-1),
                  children: [
                    Fe,
                    De.map((H, ue) =>
                      (0, n.jsx)(
                        "div",
                        { className: g().ThumbnailCtn },
                        `app_${(0, t.ER)(M)}_${ue}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function k(c) {
          const {
            ref: m,
            name: M,
            trailer: p,
            bControls: L,
            bPlayVideo: P,
            fnTogglePlayTrailer: D,
            startTime: I,
          } = c;
          if (
            ((0, z.useEffect)(() => {
              const G = m?.current;
              if (I != null && I > 0 && G) {
                const q = () => {
                  G.currentTime = I || 0;
                };
                return (
                  G.addEventListener("loadedmetadata", q),
                  () => {
                    G.removeEventListener("loadedmetadata", q);
                  }
                );
              }
            }, [m, I]),
            !p)
          )
            return null;
          let C = (0, F.A)(g().VideoLargeContainer, P && g().videoPlaying);
          return (0, n.jsxs)("div", {
            className: C,
            onClick: D,
            role: "presentation",
            children: [
              (0, n.jsx)(o.hj, {
                name: M,
                trailerCategory: p.trailer_category,
                trailerDisplay: o.g,
                mouseOver: !1,
              }),
              !!(P && p.microtrailer) &&
                (0, n.jsx)("video", {
                  className: g().VideoLarge,
                  ref: m,
                  controls: L,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: I != null && I > 0 ? void 0 : p.screenshot_full,
                  children: p.microtrailer?.map((G) =>
                    W.TS.IN_CLIENT && G.type == "video/mp4"
                      ? null
                      : (0, n.jsx)(
                          "source",
                          { src: (0, a.M4)(p, G.filename || ""), type: G.type },
                          G.filename,
                        ),
                  ),
                }),
              L &&
                (0, n.jsx)("button", {
                  type: "button",
                  className: g().CloseButton,
                  "aria-label": (0, _.we)("#Button_Close"),
                  children: (0, n.jsx)(N.sED, {}),
                }),
            ],
          });
        }
        function te(c) {
          return c.bShowModal ? (0, n.jsx)(re, { ...c }) : null;
        }
        function re(c) {
          const { id: m, bShowModal: M, trailerBaseID: p, hideModal: L } = c,
            { data: P } = (0, s.J$)(m),
            D = (0, a.kB)(m),
            I = (0, z.useMemo)(() => {
              if (!(!D || D.length == 0)) {
                if (p) {
                  const me = D.find((Y) => Y.trailer_base_id == p);
                  if (me) return me;
                }
                return D[0];
              }
            }, [D, p]),
            C = z.useId(),
            G = z.useId(),
            {
              rgDashTrailers: q,
              rgHlsTrailers: pe,
              strCaptionManufest: E,
              strScreenshot: ve,
            } = (0, z.useMemo)(() => {
              if (!I)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: me, rgHlsTrailers: Y } = (0, a.hg)(I);
              return {
                rgDashTrailers: me,
                rgHlsTrailers: Y,
                strCaptionManufest: (0, a.Wv)(I),
                strScreenshot: (0, a.hl)(I),
              };
            }, [I]);
          return !I || !I.adaptive_trailers || q.length == 0
            ? null
            : (0, n.jsx)(A.EN, {
                active: M,
                children: (0, n.jsxs)(A.eV, {
                  "aria-labelledby": (0, V.q)(C, G),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: L,
                  children: [
                    (0, n.jsx)("div", {
                      className: g().VideoPopupContainers,
                      children: (0, n.jsx)(v.P, {
                        dashManifests: q,
                        hlsManifest: pe[0] || "",
                        screenshot: ve,
                        altText: I.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: E,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      id: C,
                      style: { display: "none" },
                      children: P?.name || "",
                    }),
                    (0, n.jsx)("div", {
                      id: G,
                      style: { display: "none" },
                      children: I.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function J(c) {
          const { appid: m, trailerBaseID: M, bShowModal: p, hideModal: L } = c,
            P = (0, z.useMemo)(() => ({ appid: m }), [m]);
          return (0, n.jsx)(te, {
            id: P,
            trailerBaseID: M,
            bShowModal: p,
            hideModal: L,
          });
        }
        function Q(c) {
          const {
            trailer: m,
            fnTogglePlayTrailer: M,
            bPlayVideo: p,
            onMouseEnter: L,
            onMouseLeave: P,
          } = c;
          return (0, n.jsxs)("div", {
            className: (0, F.A)({
              [g().VideoThumbnail]: !p,
              [g().videoPlaying]: p,
              [g().ThumbnailCtn]: !0,
            }),
            onClick: M,
            onMouseEnter: L,
            onMouseLeave: P,
            role: "presentation",
            children: [
              (0, n.jsx)("img", { src: (0, a.hl)(m), alt: m.trailer_name }),
              (0, n.jsx)("button", {
                type: "button",
                className: g().VideoPlayButton,
                "aria-label": (0, _.we)("#Playback_Play_Tooltip"),
                children: (0, n.jsx)(N.jGG, {}),
              }),
            ],
          });
        }
      },
      76945: (ge, de, r) => {
        "use strict";
        r.d(de, {
          $G: () => J,
          Hu: () => S,
          TY: () => A,
          VV: () => D,
          Xx: () => P,
          aS: () => m,
          bs: () => F,
          m1: () => v,
          sK: () => h,
          xh: () => _,
        });
        var n = r(72604),
          x = r(34041),
          a = r(72609),
          s = r(75233),
          t = r(80902),
          y = r(51614),
          z = r(19367),
          V = r.n(z);
        const U = V()("2026-11-23T09:30:00-08:00").unix(),
          N = V()("2026-11-30T10:00:00-08:00").unix(),
          F = "store/promo/steamawards2025/";
        function _() {
          return 2025;
        }
        function W(I) {
          return `${Config.MEDIA_CDN_URL}store/promo/${I}`;
        }
        const A = "#173471",
          S = "#ee6c5d",
          v = "#FFFFFF",
          w = V()("2026-12-17T09:30:00-08:00").unix(),
          g = V()("2027-01-02T10:00:00-08:00").unix(),
          o = { 2023: 2640290, 2024: 3334340, 2025: 4147080, 2026: 5350740 },
          h = 4147080,
          b = 2215130;
        function k(I) {
          switch (I) {
            case 2023:
            case 2024:
            case 2025:
              return !0;
            case 2026:
              return !1;
          }
          return !1;
        }
        function te(I) {
          return I >= U && I < N;
        }
        function re(I) {
          return I >= U;
        }
        function J(I, C, G, q) {
          const pe = te(q),
            E = M(I, C),
            ve = M(I, G);
          if (!(!E.length && !ve.length))
            return {
              nomination: E.length
                ? { rgCategories: E, bNominationsLive: pe }
                : void 0,
              vote: ve.length
                ? { rgCategories: ve, bNominationsLive: pe }
                : void 0,
            };
        }
        function Q(I) {
          return I >= w && I < g;
        }
        function c(I) {
          return I >= g;
        }
        function m(I) {
          return I > 0;
        }
        function M(I, C) {
          const G = [];
          for (const q of C.filter(m)) {
            const pe = I.find((E) => E.voteid == q);
            pe?.localization?.title &&
              G.push({
                eCategoryID: q,
                strTitle: pe.localization.title,
                strDescription: pe.localization.award_description ?? "",
                bLaborOfLove: pe.flag == x.Xs.bV,
              });
          }
          return G;
        }
        function p(I) {
          return ["SteamAwards.GetUserNominations", I];
        }
        function L(I) {
          return ["StoreSales.GetUserVotes", I, h];
        }
        function P(I, C) {
          const G = (0, s.jE)(),
            q = p(a.iA.accountid),
            { data: pe, isPending: E } = (0, t.I)({
              queryKey: q,
              queryFn: async () => await C.GetMySteamAwardNominations(),
              enabled: !!a.iA.accountid,
            }),
            { mutate: ve } = (0, y.n)({
              mutationFn: async (me) => {
                const Y = await C.NominateForSteamAward(me, I);
                if (Y != n.R)
                  throw new Error(`SteamAwards.Nominate failed with ${Y}`);
              },
              onMutate: (me) =>
                G.setQueryData(q, (Y) => [
                  ...(Y ?? []).filter((be) => be.category_id != I),
                  { category_id: I, appid: me },
                ]),
              onError: () => G.invalidateQueries({ queryKey: q }),
            });
          return {
            unNominatedAppID: pe?.find((me) => me.category_id == I)?.appid,
            bAnswered: pe != null || !a.iA.accountid || !E,
            Nominate: ve,
          };
        }
        function D(I, C) {
          const G = (0, s.jE)(),
            q = L(a.iA.accountid),
            { data: pe, isPending: E } = (0, t.I)({
              queryKey: q,
              queryFn: async () => await C.GetMySteamAwardVotes(),
              enabled: !!a.iA.accountid,
            }),
            { mutate: ve } = (0, y.n)({
              mutationFn: async (me) => {
                const Y = await C.SetSteamAwardVote(me, I);
                if (Y != n.R)
                  throw new Error(`StoreSales.SetVote failed with ${Y}`);
              },
              onMutate: (me) =>
                G.setQueryData(q, (Y) => [
                  ...(Y ?? []).filter((be) => be.voteid != I),
                  { voteid: I, appid: me },
                ]),
              onError: () => G.invalidateQueries({ queryKey: q }),
            });
          return {
            unVotedAppID: pe?.find((me) => me.voteid == I)?.appid,
            bAnswered: pe != null || !a.iA.accountid || !E,
            Vote: ve,
          };
        }
      },
      91354: (ge, de, r) => {
        "use strict";
        r.d(de, { c: () => V });
        var n = r(7850),
          x = r(64238),
          a = r.n(x),
          s = r(16412),
          t = r(36118),
          y = r(89206),
          z = r.n(y);
        function V(U) {
          const { bExpanded: N, setExpanded: F } = U;
          return (0, n.jsx)(s.wl, {
            className: a()(y.ExpandRowButton, N && y.Selected),
            onClick: () => F(!N),
            children: (0, n.jsx)(t.b8_, { direction: "down" }),
          });
        }
      },
      9032: (ge, de, r) => {
        "use strict";
        r.d(de, { uj: () => y, fB: () => z });
        var n = r(80902),
          x = r(72604),
          a = r(72609);
        async function s(V, U) {
          const N = a.TS.STORE_BASE_URL + "video/details/" + V + "/0",
            F = await fetch(N, { credentials: "include", signal: U });
          if (!F.ok) throw new Error(N + " answered " + F.status);
          const _ = await F.json();
          if (_?.success != x.R && _?.success != "ready")
            throw new Error(
              "video/details on " + V + " answered " + _?.success,
            );
          return { appid: V, video_url: _.video_url, bookmark: _.bookmark };
        }
        function t(V) {
          return ["video", "vod", V];
        }
        function y(V) {
          return {
            queryKey: t(V),
            queryFn: ({ signal: U }) => s(V, U),
            retry: !1,
          };
        }
        function z(V) {
          const { data: U, isPending: N } = (0, n.I)(y(V));
          return { vodInfo: U, bLoading: N };
        }
      },
      813: (ge, de, r) => {
        "use strict";
        r.d(de, { $5: () => b, TB: () => h, ac: () => g });
        var n = r(40497),
          x = r(75233),
          a = r(14947),
          s = r(90626),
          t = r(76559),
          y = r(71742),
          z = r(3166),
          V = r(60480),
          U = r(33512),
          N = r(55483),
          F = r(77291);
        const _ = new WeakSet();
        function W(c = n.L) {
          if (typeof window > "u" || typeof document > "u" || _.has(c)) return;
          const m = (0, z.Fd)("groupvanityinfo", "application_config");
          (m === void 0 && document.readyState != "complete") ||
            (_.add(c), A(m) && (0, N.aA)(c, m));
        }
        function A(c) {
          const m = c;
          return m &&
            Array.isArray(m) &&
            m.length > 0 &&
            typeof m[0] == "object"
            ? typeof m[0].clanAccountID == "number" &&
                (typeof m[0].appid == "number" ||
                  typeof m[0].vanity_url == "string")
            : !1;
        }
        function S(c) {
          return typeof c == "string" ? parseInt(c) : c;
        }
        function v(c) {
          return typeof c == "string" ? Number.parseInt(c) : c;
        }
        class w {
          m_queryClient = n.L;
          m_boxCacheVersion = a.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            W(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((m) => {
                  (m?.type != "added" &&
                    m?.type != "updated" &&
                    m?.type != "removed") ||
                    ((0, N.yT)(m.query?.queryKey) &&
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
          AddGroupVanities(m) {
            this.LazyInit(), A(m) && (0, N.aA)(this.m_queryClient, m);
          }
          BHasClanInfoLoaded(m) {
            return (
              (0, y.wT)(
                m.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, y.wT)(
                m.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(m.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(m) {
            return !!(0, N.Gt)(v(m), this.ReadCache());
          }
          RegisterClanData(m) {
            this.LazyInit(), (0, N.aA)(this.m_queryClient, m);
          }
          async LoadOGGClanInfoForAppID(m) {
            return (
              this.LazyInit(),
              (m = S(m)),
              (0, y.wT)(
                m != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              m == 0 ? null : (0, N.AB)(m, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(m) {
            return this.LazyInit(), (0, N.Rc)(m, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(m) {
            return this.LazyInit(), (0, N.Rc)(m, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(m) {
            return this.LoadClanInfoForClanAccountID(m.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(m) {
            return this.LazyInit(), (0, N.MR)(v(m), this.m_queryClient);
          }
          GetOGGClanInfo(m) {
            const M = this.ReadCache();
            return typeof m == "string" ? (0, N.fy)(m, M) : (0, N.ko)(m, M);
          }
          GetClanSteamIDForAppID(m) {
            const M = (0, N.ko)(S(m), this.ReadCache());
            return M ? t.b.InitFromClanID(M.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(m) {
            return (0, N.ko)(S(m), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(m) {
            return (0, N.Gt)(m.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(m) {
            return this.BHasClanInfoLoadedByAccountID(m);
          }
          GetClanMemberCount(m) {
            return (0, N.ko)(S(m), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(m) {
            return (
              (0, y.wT)(
                !!m,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, N.Gt)(v(m), this.ReadCache())
            );
          }
          GetCreatorStoreURL(m) {
            let M = V.pF.GetCreatorHome(m);
            if (M) return M.GetCreatorHomeURL("developer");
            let p = this.GetClanInfoByClanAccountID(m.GetAccountID());
            return (
              z.TS.COMMUNITY_BASE_URL +
              (p.vanity_url
                ? "groups/" + p.vanity_url
                : "gid/" + m.ConvertTo64BitString())
            );
          }
        }
        const g = new w();
        (0, F.V)("g_ClanStore", g);
        function o() {
          const c = (0, x.jE)();
          return W(c), c;
        }
        function h(c) {
          o();
          const { data: m, isPending: M } = (0, N.TB)(c ? v(c) : void 0);
          return [!!c && M, m ?? void 0];
        }
        function b(c) {
          const m = o();
          (0, s.useEffect)(() => {
            c &&
              (0, N.MR)(v(c), m).catch((M) =>
                console.error(`Failed to hint load clan info ${c}`, M),
              );
          }, [c, m]);
        }
        function k(c) {
          return o(), useClanInfoByVanityQuery(c).data ?? null;
        }
        function te(c) {
          o();
          const m = c ? S(c) : void 0,
            { data: M, isPending: p } = useClanInfoByAppIDQuery(m);
          return { bLoadingClanInfo: !!m && p, clanInfo: M ?? null };
        }
        function re(c, m) {
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
          const p = g_CreatorHomeStore.GetCreatorHome(c.clanSteamID);
          return p &&
            p.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : m
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function J(c, m) {
          return c.BIsOGGEvent()
            ? c.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : m
                  ? c.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function Q(c) {
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
      53025: (ge, de, r) => {
        "use strict";
        r.d(de, { $: () => z });
        var n = r(41735),
          x = r.n(n),
          a = r(3166),
          s = r(77495),
          t = r(73259),
          y = r(72604);
        class z extends s.ZQ {
          async DeleteOldAnnouncement(U, N) {
            let F = new URLSearchParams();
            F.append("sessionid", (0, a.KC)());
            let _ =
                a.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                U.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                N,
              W = await x().post(_, F);
            if (W.data.success != y.R) throw W.data;
            return this.RemoveGIDFromList(U, t.cB + N), W.data;
          }
          static sm_Instance;
          static sm_SummaryInstance;
          static Get() {
            return (
              z.sm_Instance ||
                ((z.sm_Instance = new z()), z.sm_Instance.Init()),
              z.sm_Instance
            );
          }
          static GetSummaryStore() {
            return (
              z.sm_SummaryInstance ||
                ((z.sm_SummaryInstance = new z(!0)),
                z.sm_SummaryInstance.Init()),
              z.sm_SummaryInstance
            );
          }
        }
      },
      76035: (ge, de, r) => {
        "use strict";
        r.d(de, {
          $d: () => C,
          AD: () => J,
          CF: () => De,
          Fq: () => k,
          Jo: () => Q,
          Mn: () => Te,
          N2: () => I,
          PV: () => Fe,
          QS: () => fe,
          RE: () => re,
          Ri: () => b,
          Vz: () => M,
          ZB: () => be,
          _C: () => me,
          a8: () => Ie,
          cO: () => m,
          ed: () => L,
          jT: () => P,
          kr: () => c,
          lE: () => q,
          np: () => ve,
          rv: () => Y,
        });
        var n = r(72604),
          x = r(32093),
          a = r(35038),
          s = r(27386),
          t = r(34041),
          y = r(80902),
          z = r(75233),
          V = r(51614),
          U = r(68312),
          N = r(98609),
          F = r(67705),
          _ = r(6469),
          W = r(41735),
          A = r.n(W),
          S = r(75779),
          v = r(90626),
          w = r(31224),
          g = r(76945);
        const o = 2640290,
          h = 3334340,
          b = g.sK,
          k = 2215130;
        let te;
        function re() {
          return (
            te || (te = (0, F.Fd)("steam_awards_config", "application_config")),
            te
          );
        }
        const J = v.createContext(null);
        function Q(H) {
          const ue = (0, U.KV)();
          return (0, y.I)({
            queryKey: [`SteamAwardDefs_${H}`],
            queryFn: async () => {
              const K = a.w.Init(t.cD);
              return (
                K.Body().set_sale_appid(H),
                K.Body().set_language(N.TS.LANGUAGE),
                (await t.zF.GetVoteDefinitions(ue, K)).Body().toObject()
              );
            },
            initialData: () => re()?.definitions,
            enabled: H > 0,
          });
        }
        async function c(H) {
          const ue = a.w.Init(t.Dp);
          return (
            (await t.AH.GetUserNominations(H, ue)).Body().toObject()
              ?.nominations ?? []
          );
        }
        function m() {
          const H = (0, U.KV)();
          return (0, y.I)({
            queryKey: [`SteamAwardNominations_${N.iA.accountid}`],
            queryFn: () => c(H),
            initialData: () => re()?.user_nominations?.nominations,
            enabled: N.iA.logged_in,
          });
        }
        function M(H) {
          const ue = m();
          return ue.isLoading
            ? { bLoadingNominationForCategory: !0 }
            : {
                currentNomination: ue.data?.find((K) => K.category_id == H),
                bLoadingNominationForCategory: !1,
              };
        }
        function p() {
          return [`SteamAwardBadgeProgress_${N.iA.accountid}`];
        }
        function L(H) {
          const ue = (0, U.KV)();
          return (0, y.I)({
            queryKey: p(),
            queryFn: async () => {
              const K = a.w.Init(s.jng);
              return (
                K.Body().set_badgeid(H),
                K.Body().set_steamid(N.iA.steamid),
                (await s.xtC.GetCommunityBadgeProgress(ue, K)).Body().toObject()
              );
            },
            initialData: () => re()?.badge_progress,
            enabled: N.iA.logged_in,
          });
        }
        function P(H) {
          const ue = (0, U.KV)();
          return (0, y.I)({
            queryKey: [`SteamAwardSuggestions_${H}`],
            queryFn: async () => {
              const K = a.w.Init(t.$N);
              return (
                K.Body().set_category_id(H),
                (await t.AH.GetNominationRecommendations(ue, K))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
          });
        }
        function D(H, ue) {
          H.setQueryData([`SteamAwardNominations_${N.iA.accountid}`], ue);
        }
        async function I(H, ue, K, oe) {
          const se = a.w.Init(t.wz);
          se.Body().set_category_id(K),
            se.Body().set_source(oe),
            se.Body().set_nominated_id(ue);
          const Ee = await t.AH.Nominate(H, se);
          return (
            Ee.BSuccess() ||
              console.warn(`Failed to nominate app: ${Ee.GetEResult()}`),
            [Ee.GetEResult(), Ee.Body().toObject()]
          );
        }
        function C(H, ue, K, oe, se) {
          const Ee = (0, U.KV)(),
            Se = (0, z.jE)();
          return (0, V.n)({
            mutationFn: () => I(Ee, H, ue, K),
            onSuccess: ([ne, le]) => {
              ne == n.R
                ? (D(Se, le.nominations),
                  window.setTimeout(
                    () => Se.invalidateQueries({ queryKey: p() }),
                    1e3,
                  ),
                  se && se())
                : oe && oe(ne);
            },
            onError: () => {
              oe && oe();
            },
          });
        }
        async function G(H, ue, K) {
          let oe = {
            cc: N.TS.COUNTRY,
            l: N.TS.LANGUAGE,
            realm: x.TU.k_ESteamRealmGlobal,
            origin: self.origin,
            f: "jsonfull",
            term: H.replace(" ", "+"),
            require_type: "game",
            is_released_somewhere: 1,
            excluded_tags: _.Fm.Get().GetExcludedTagsSortedByID(),
            excluded_content_descriptors: _.Fm.Get().ExcludedContentDescriptor,
            excluded_apps: K,
          };
          ue.release_date_max &&
            (oe.release_date_max = new Date(
              ue.release_date_max * 1e3,
            ).toISOString()),
            ue.release_date_min &&
              (oe.release_date_min = new Date(
                ue.release_date_min * 1e3,
              ).toISOString()),
            ue.flag == t.Xs.O8 && (oe.vrsupport = 1),
            ue.flag == t.Xs.x1 &&
              (oe.steam_deck_compat_categories = [S.YX, S.sd, S.I2]);
          const se = `${N.TS.STORE_BASE_URL}search/suggest`;
          return (
            (await A().get(se, { params: oe, withCredentials: !0 })).data ?? []
          );
        }
        function q(H, ue, K) {
          return (0, y.I)({
            queryKey: [H, ue.voteid, K],
            queryFn: () => G(H, ue, K),
            staleTime: 1 / 0,
          });
        }
        function pe() {
          const H = m();
          return H.data ? H.data.map((ue) => ue.appid) : [];
        }
        async function E(H, ue) {
          const K = a.w.Init(t.CX);
          K.Body().set_generate_new(ue);
          const oe = await t.AH.GetNominationShareLink(H, K);
          return (
            oe.BSuccess() ||
              console.warn(
                `Failed to GetNominationShareLink: ${oe.GetEResult()}`,
              ),
            [oe.GetEResult(), oe.Body().toObject()]
          );
        }
        function ve() {
          const H = (0, U.KV)();
          return (0, y.I)({
            queryKey: [`GetNominationShareLink_${N.iA.accountid}`],
            queryFn: async () => E(H, !1),
            initialData: () => [n.R, re()?.share_link],
            staleTime: 1 / 0,
            enabled: N.iA.logged_in,
          });
        }
        function me() {
          const H = (0, U.KV)(),
            ue = (0, z.jE)();
          return (0, V.n)({
            mutationFn: () => E(H, !0),
            onSuccess: ([K, oe]) => {
              K == n.R &&
                ue.setQueryData(
                  [`GetNominationShareLink_${N.iA.accountid}`],
                  [K, oe],
                );
            },
          });
        }
        async function Y(H, ue, K, oe) {
          const se = a.w.Init(t.yX);
          se.Body().set_voteid(K),
            se.Body().set_appid(ue),
            se.Body().set_sale_appid(oe);
          const Ee = await t.zF.SetVote(H, se);
          return (
            Ee.BSuccess() ||
              console.warn(
                `Failed to set vote for app (${ue}): ${Ee.GetEResult()}`,
              ),
            [Ee.GetEResult(), Ee.Body().toObject()]
          );
        }
        function be(H, ue, K) {
          const oe = (0, U.KV)(),
            se = (0, z.jE)();
          return (0, V.n)({
            mutationFn: () => Y(oe, H, ue, K),
            onSuccess: ([Ee, Se]) => {
              Ee == n.R &&
                se.setQueryData(
                  [`SteamAwardUserVotes_${N.iA.accountid}`],
                  Se.user_votes,
                );
            },
          });
        }
        async function fe(H, ue) {
          const K = a.w.Init(t.qX);
          K.Body().set_sale_appid(ue);
          const oe = await t.zF.GetUserVotes(H, K);
          return (
            oe.BSuccess() ||
              console.warn(`Failed to get votes for user: ${oe.GetEResult()}`),
            oe.Body().toObject()?.user_votes
          );
        }
        function Ie(H) {
          const ue = (0, U.KV)();
          return (0, y.I)({
            queryKey: [`SteamAwardUserVotes_${N.iA.accountid}`],
            queryFn: () => fe(ue, H),
            initialData: () => re()?.user_votes,
            enabled: N.iA.logged_in,
          });
        }
        function Te(H, ue) {
          const K = Ie(H);
          return (0, v.useMemo)(
            () => K.data?.find((oe) => oe.voteid == ue)?.appid,
            [ue, K.data],
          );
        }
        function Re(H) {
          const ue = (0, U.KV)();
          return (0, y.I)({
            queryKey: [`SteamAwardItemDefs_${H}`],
            queryFn: async () => {
              const K = a.w.Init(w.RG);
              return (
                K.Body().set_appid(H),
                K.Body().set_language(N.TS.LANGUAGE),
                (await w.uy.GetCommunityItemDefinitions(ue, K))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
            initialData: () => re()?.item_definitions,
          });
        }
        function Fe(H, ue) {
          const K = Re(H),
            oe = Q(H);
          if (!K.data || !oe.data) return null;
          const se = oe.data.votes.find((Ee) => Ee.voteid == ue);
          return K.data.item_definitions?.find(
            (Ee) => Ee.item_type == se.item_type,
          );
        }
        function De() {
          return v.useContext(J).yearStyles;
        }
      },
      73191: (ge, de, r) => {
        "use strict";
        r.d(de, { Hh: () => N, vs: () => V });
        var n = r(7850),
          x = r(90626),
          a = r(96538),
          s = r(56330),
          t = r.n(s),
          y = r(18210),
          z = r(85599);
        function V(F) {
          const [_, W] = (0, x.useState)(() => !!F),
            [A, S] = (0, x.useState)(!1),
            [v, w] = (0, x.useState)(!1),
            [g, o] = (0, x.useState)(null),
            [h, b] = (0, x.useState)(null),
            [k, te] = (0, x.useState)(null),
            [re, J] = (0, x.useState)(null),
            [Q, c] = (0, x.useState)(null);
          return {
            bLoading: _,
            bError: A,
            bSuccess: v,
            strError: g,
            strSuccess: h,
            elSuccess: re,
            elError: k,
            strThrobber: Q,
            fnSetLoading: W,
            fnSetError: S,
            fnSetSuccess: w,
            fnSetStrError: o,
            fnSetStrSuccess: b,
            fnSetElSuccess: J,
            fnSetElError: te,
            fnSetThrobber: c,
          };
        }
        function U(F, _) {
          _ != k_EResultOK ? F.fnSetError(!0) : F.fnSetSuccess(!0);
        }
        function N(F) {
          const {
              strDialogTitle: _,
              state: W,
              closeModal: A,
              strThrobber: S,
            } = F,
            {
              bLoading: v,
              bError: w,
              bSuccess: g,
              strError: o,
              strSuccess: h,
              elSuccess: b,
              elError: k,
              strThrobber: te,
            } = W;
          return w || o || k
            ? (0, n.jsxs)(a.o0, {
                strTitle: _,
                bAlertDialog: !0,
                closeModal: A,
                className: s.SuccessErrorDialog,
                children: [
                  !!o &&
                    (0, n.jsx)("div", {
                      className: s.ErrorStylesWithIcon,
                      children:
                        o || (0, y.we)("#Error_ErrorCommunicatingWithNetwork"),
                    }),
                  !!k && k,
                ],
              })
            : g || h || b
              ? (0, n.jsx)(a.o0, {
                  strTitle: _,
                  strDescription: h || (0, y.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: A,
                  className: s.SuccessErrorDialog,
                  children: (0, n.jsx)(n.Fragment, { children: !!b && b }),
                })
              : (0, n.jsx)(a.o0, {
                  strTitle: _,
                  className: s.SuccessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                  children: (0, n.jsx)(z.t, {
                    string: S || te || (0, y.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                });
        }
      },
      82385: (ge, de, r) => {
        "use strict";
        r.d(de, { AD: () => ze, He: () => ee });
        var n = r(7850),
          x = r(14947),
          a = r(75844),
          s = r(90626),
          t = r(99412),
          y = r(41301),
          z = r(19298),
          V = r(72849),
          U = r(9046),
          N = r(32606),
          F = r(813),
          _ = r(7582),
          W = r(34360),
          A = r(31117),
          S = r(94520),
          v = r(98144),
          w = r(90316),
          g = r.n(w),
          o = r(95695),
          h = r.n(o),
          b = r(13465),
          k = r(36118),
          te = r(85599),
          re = r(53107),
          J = r(5552),
          Q = r(71742),
          c = r(8323),
          m = r(36707),
          M = r(82734),
          p = r(18210),
          L = r(30096),
          P = r(53113),
          D = r(3166),
          I = r(17009),
          C = r.n(I),
          G = r(90537),
          q = r(56492),
          pe = r(88812),
          E = r(42184),
          ve = r(5191),
          me = r(80684),
          Y = r(7967),
          be = r(76559),
          fe = r(60480),
          Ie = r(84676);
        function Te(T) {
          const { bOn: $ } = T;
          return jsx("div", {
            className: $ ? sharedstyles.OnIndicator : sharedstyles.OffIndicator,
            children: Localize($ ? "#Dialog_On" : "#Dialog_Off"),
          });
        }
        function Re(T) {
          return CommunityConfig.IS_CREATOR_HOME
            ? jsx(Fe, { identifier: T.identifier })
            : CommunityConfig.IS_CURATOR
              ? jsx(De, { identifier: T.identifier })
              : jsx(H, { identifier: T.identifier });
        }
        function Fe(T) {
          const $ = new CSteamID(CommunityConfig.CLANSTEAMID),
            { creatorHome: he } = useCreatorHome($.GetAccountID());
          return !he || !he.BIsLoaded()
            ? null
            : jsx(ue, {
                strURL: NavLink(he.GetCreatorHomeURL("developer")),
                strImgUrl: he.GetAvatarURLFullSize(),
                strName: he.GetName(),
              });
        }
        function De(T) {
          const $ = useClanInfoByVanity(CommunityConfig.VANITY_ID);
          return $
            ? jsx(ue, {
                strURL: NavLink(
                  Config.COMMUNITY_BASE_URL +
                    "groups/" +
                    CommunityConfig.VANITY_ID,
                ),
                strImgUrl: $.avatar_full_url,
                strName: $.group_name,
              })
            : null;
        }
        function H(T) {
          const [$] = useStoreItemCacheApp(CommunityConfig.APPID, {
            include_assets: !0,
            include_release: !0,
          });
          return $
            ? jsx(ue, {
                strURL: NavLink($.GetStorePageURL()),
                strImgUrl: $.GetAssets().GetSmallCapsuleURL(),
                strName: $.GetName(),
              })
            : null;
        }
        function ue(T) {
          const { strURL: $, strImgUrl: he, strName: xe } = T;
          return jsx("div", {
            className: sharedstyles.EventDashboardAppCtn,
            children: jsx("div", {
              className: sharedstyles.AppTitle,
              children: jsxs("a", {
                href: $,
                target: Config.IN_CLIENT ? void 0 : "_blank",
                children: [jsx("img", { src: he }), xe],
              }),
            }),
          });
        }
        function K(T) {
          const { children: $ } = T;
          return (0, D.Qn)() && !D.TS.IN_STEAMUI
            ? (0, n.jsx)(Y.Qg, {
                className: o.GamepadOnlyScrollPanel,
                children: $,
              })
            : (0, n.jsx)(n.Fragment, { children: $ });
        }
        var oe = r(79590),
          se = r(73644),
          Ee = r(41032),
          Se = r(37589),
          ne = r(20169),
          le = Object.defineProperty,
          je = Object.getOwnPropertyDescriptor,
          Ae = (T, $, he, xe) => {
            for (
              var we = xe > 1 ? void 0 : xe ? je($, he) : $,
                Qe = T.length - 1,
                Ce;
              Qe >= 0;
              Qe--
            )
              (Ce = T[Qe]) && (we = (xe ? Ce($, he, we) : Ce(we)) || we);
            return xe && we && le($, he, we), we;
          };
        const Le = 56,
          Ge = 136,
          ke = s.lazy(() =>
            Promise.all([
              r.e(36597),
              r.e(56589),
              r.e(85599),
              r.e(33512),
              r.e(94781),
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
        function Ue(T) {
          const [$, he] = (0, Ie.t7)(T.appid, { include_assets: !0 }),
            [xe, we] = (0, F.TB)(T.clanID);
          let Qe = "";
          return (
            T.appid
              ? (Qe = $?.GetAssets()?.GetCommunityIconURL() || "")
              : T.clanID && (Qe = we ? we.avatar_full_url : ""),
            (0, n.jsx)("div", {
              className: (0, m.A)(C().ScrollButton, C().GameArt, C().AnimIn),
              onClick: T.onAppIconClick,
              children: !!Qe && (0, n.jsx)("img", { src: Qe }),
            })
          );
        }
        let ze = class extends s.Component {
          m_loader = null;
          m_refPage = s.createRef();
          m_refContent = s.createRef();
          m_refScroll = s.createRef();
          m_refScrollAnchor = s.createRef();
          m_scrollAnimation = null;
          m_nTouchStartClientY;
          m_nPreviousRenderCount = 0;
          m_nCurrentRenderCount = 0;
          constructor(T) {
            super(T),
              !this.props.bShowOnlyInitialEvent &&
                this.props.initialEvent &&
                ((this.m_loader = new $e(this.props.partnerEventStore)),
                this.m_loader.InitAroundEvent(
                  this.props.initialEvent,
                  this.props.additionalParams,
                ));
          }
          FindCurrentlyViewedEventIndex() {
            if (!this.m_refContent.current || !this.m_refScroll.current)
              return -1;
            let $ = this.m_refContent.current.children,
              he = this.GetScrollTopForComparison();
            for (let xe = 0; xe < $.length; xe++) {
              let we = $[xe],
                Qe = we.offsetTop,
                Ce = Qe + we.clientHeight;
              if (Qe <= he && Ce > he) return xe;
            }
            return -1;
          }
          GetPaddingTop() {
            return this.props.showAppHeader ? Ge : Le;
          }
          GetScrollTopForComparison() {
            return Math.ceil(
              this.m_refScroll.current.scrollTop + this.GetPaddingTop() + 24,
            );
          }
          ScrollToEvent(T) {
            let $ = this.m_refContent.current;
            if (!$ || T < 0 || T >= $.children.length || this.m_scrollAnimation)
              return;
            let he = $.children[T].offsetTop - this.GetPaddingTop();
            this.ScrollToOffset(he);
          }
          ScrollToOffset(T) {
            let $ = this.m_refScroll.current;
            if (!$) return;
            let he = {
              msDuration: 500,
              timing: "cubic-in-out",
              onComplete: this.OnScrollComplete,
            };
            (this.m_scrollAnimation = new J.JV($, { scrollTop: T }, he)),
              this.m_scrollAnimation.Start();
          }
          ScrollToBottom() {
            this.m_refScroll.current &&
              this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
          }
          ScrollToNextEvent() {
            let T = this.m_loader.GetEvents(),
              $ = this.FindCurrentlyViewedEventIndex() + 1;
            if ($ >= T.length) {
              this.ScrollToBottom();
              return;
            }
            this.ScrollToEvent($),
              $ == T.length - 1 && this.m_loader.LoadMoreAtEnd();
          }
          ScrollToPrevEvent() {
            let T = this.FindCurrentlyViewedEventIndex(),
              $ = T - 1;
            if ($ < 0) {
              this.ScrollToOffset(0);
              return;
            }
            let he = this.m_refContent.current;
            if (he) {
              let xe = he.children[T],
                we = xe.offsetTop,
                Qe = we + xe.clientHeight,
                Ce = this.GetScrollTopForComparison();
              (Ce = Ce - (Qe - we) * 0.3), we <= Ce && ($ = T);
            }
            this.ScrollToEvent($);
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
          OnBackgroundClick(T) {
            T.currentTarget == T.target && this.Close();
          }
          OnKeyDown(T) {
            T.keyCode == y.zV && this.Close();
          }
          OnScroll(T) {
            if (this.props.bShowOnlyInitialEvent) return;
            let $ = this.m_refScroll.current;
            if (!$) return;
            let he = $.clientHeight;
            $.scrollHeight - ($.scrollTop + he) <= he &&
              this.m_loader.LoadMoreAtEnd(),
              $.scrollTop <= he && this.m_loader.LoadMoreAtBeginning();
          }
          getSnapshotBeforeUpdate(T) {
            let $ = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
            if (
              ((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !$)
            )
              return null;
            let he = this.m_refScroll.current;
            if (!he || !this.m_refScrollAnchor.current) return null;
            let xe = this.m_refScrollAnchor.current.GetDOM();
            return xe ? xe.offsetTop - he.scrollTop : null;
          }
          OnTouchStart(T) {
            T.touches.length == 1 &&
              (this.m_nTouchStartClientY = T.touches[0].clientY);
          }
          OnTouchMove(T) {
            if (!this.m_refScroll.current || T.touches.length == 0) return;
            const $ = this.m_nTouchStartClientY - T.touches[0].clientY;
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(T, $);
          }
          OnWheel(T) {
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(T, T.deltaY);
          }
          SuppressUnwantedScrollEventsBecauseSafariIsDumb(T, $) {
            const he =
                M.kD(T.target) && M.id(this.m_refScroll.current, T.target),
              xe = $ < 0 && this.m_refScroll.current.scrollTop < 1,
              we =
                this.m_refScroll.current.scrollHeight -
                  this.m_refScroll.current.scrollTop <=
                this.m_refScroll.current.clientHeight,
              Qe = $ > 0 && we;
            (!he || xe || Qe) && T.cancelable && T.preventDefault();
          }
          SetGlobalHeaderHidden(T) {
            const $ = document.getElementsByClassName("responsive_header");
            (0, Q.wT)($.length <= 1, "Must have at most one responsive_header"),
              $.length >= 1 && ($[0].style.display = T ? "none" : null);
          }
          SetFooterPinnedToBottom(T) {
            const $ = document.getElementById("footer");
            $ && ($.style.position = T ? "absolute" : null);
          }
          componentDidMount() {
            const T = this.m_refScroll.current;
            T && !M.id(T, T.ownerDocument.activeElement) && T.focus();
            const $ = this.m_refPage.current;
            $ &&
              ($.addEventListener("touchstart", this.OnTouchStart),
              $.addEventListener("touchmove", this.OnTouchMove, {
                passive: !1,
              }),
              $.addEventListener("wheel", this.OnWheel, { passive: !1 })),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
              this.SetFooterPinnedToBottom(!0);
          }
          componentDidUpdate(T, $, he) {
            if (he !== null) {
              let xe = this.m_refScroll.current;
              xe && !M.id(xe, xe.ownerDocument.activeElement) && xe.focus();
              let we = this.m_refScrollAnchor.current
                ? this.m_refScrollAnchor.current.GetDOM()
                : null;
              we && (xe.scrollTop = we.offsetTop - he);
            }
          }
          componentWillUnmount() {
            const T = this.m_refPage.current;
            T &&
              (T.removeEventListener("touchstart", this.OnTouchStart),
              T.removeEventListener("touchmove", this.OnTouchMove),
              T.removeEventListener("wheel", this.OnWheel)),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
              this.SetFooterPinnedToBottom(!1);
          }
          render() {
            const { initialEvent: T, bShowOnlyInitialEvent: $ } = this.props,
              he = !T,
              xe = he ? [] : $ ? [T] : this.m_loader.GetEvents(),
              we = [];
            let Qe = this.props.appid,
              Ce = this.props.clanSteamID?.GetAccountID();
            for (const ut of xe) {
              const tt = ut.GID == this.props.initialEvent.GID,
                Mt = tt;
              we.push(
                (0, n.jsx)(
                  ee,
                  {
                    ref: tt ? this.m_refScrollAnchor : null,
                    event: ut,
                    emoticonStore: this.props.emoticonStore,
                    partnerEventStore: this.props.partnerEventStore,
                    disableReadTracking: tt,
                    fnFilterImageURLsForKnownFailures:
                      this.props.fnFilterImageURLsForKnownFailures,
                    fnImageFailureCallback: this.props.fnImageFailureCallback,
                    bDisableBroadcastPlayer: !Mt,
                    className: this.props.eventClassName,
                  },
                  ut.GID,
                ),
              ),
                Qe == null && (Qe = ut.appid),
                Ce == null && (Ce = ut.clanSteamID.GetAccountID());
            }
            return (
              (this.m_nCurrentRenderCount = we.length),
              (0, n.jsxs)(z.Z, {
                onCancelButton: this.props.closeModal,
                className: C().AppPartnerEventsPage,
                ref: this.m_refPage,
                children: [
                  this.props.showAppHeader &&
                    (0, n.jsx)(E.v, { appId: Qe, clanId: Ce }),
                  (0, n.jsx)(z.Z, {
                    className: (0, m.A)(
                      C().AppPartnerEventsBody,
                      C().EndlessScroll,
                    ),
                    ref: this.m_refScroll,
                    onScroll: this.OnScroll,
                    onClick: this.OnBackgroundClick,
                    tabIndex: -1,
                    onKeyDown: this.OnKeyDown,
                    scrollIntoViewType: ne.Yo.NoTransformSparseContent,
                    children: he
                      ? (0, n.jsx)("div", {
                          className: C().NoEvents,
                          children: (0, p.we)("#EventDisplay_NoEventsToSee"),
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              className: (0, m.A)(
                                C().ControlSection,
                                !this.props.onAppIconClick && C().NoGameLink,
                                $ && C().NoScrollArrows,
                              ),
                              children: (0, n.jsx)("div", {
                                className: C().ControlSectionWidth,
                                children: (0, n.jsxs)("div", {
                                  className: C().ControlSectionRightSide,
                                  children: [
                                    !!this.props.closeModal &&
                                      (0, n.jsx)("div", {
                                        className: (0, m.A)(
                                          C().CloseButton,
                                          C().AnimIn,
                                        ),
                                        onClick: this.Close,
                                        children: (0, n.jsx)(k.sED, {}),
                                      }),
                                    !$ &&
                                      (0, n.jsx)("div", {
                                        className: (0, m.A)(
                                          C().ScrollButton,
                                          C().Up,
                                          C().AnimIn,
                                        ),
                                        onClick: this.ScrollToPrevEvent,
                                        children: (0, n.jsx)(k.V5W, {
                                          angle: 0,
                                        }),
                                      }),
                                    !$ &&
                                      (0, n.jsx)("div", {
                                        className: (0, m.A)(
                                          C().ScrollButton,
                                          C().Down,
                                          C().AnimIn,
                                        ),
                                        onClick: this.ScrollToNextEvent,
                                        children: (0, n.jsx)(k.V5W, {
                                          angle: 180,
                                        }),
                                      }),
                                    this.props.onAppIconClick &&
                                      (0, n.jsx)(Ue, {
                                        appid: Qe,
                                        clanID: Ce,
                                        onAppIconClick:
                                          this.props.onAppIconClick,
                                      }),
                                  ],
                                }),
                              }),
                            }),
                            !$ &&
                              (0, n.jsx)(B, {
                                loader: this.m_loader,
                                location: "top",
                              }),
                            (0, n.jsx)("div", {
                              ref: this.m_refContent,
                              className: (0, m.A)(
                                C().AppPartnerEventsContainer,
                                !this.props.onAppIconClick && C().NoGameLink,
                              ),
                              children: we,
                            }),
                            !$ &&
                              (0, n.jsx)(B, {
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
        Ae([L.oI], ze.prototype, "ScrollToNextEvent", 1),
          Ae([L.oI], ze.prototype, "ScrollToPrevEvent", 1),
          Ae([L.oI], ze.prototype, "OnScrollComplete", 1),
          Ae([L.oI], ze.prototype, "Close", 1),
          Ae([L.oI], ze.prototype, "OnBackgroundClick", 1),
          Ae([L.oI], ze.prototype, "OnKeyDown", 1),
          Ae([L.oI], ze.prototype, "OnScroll", 1),
          Ae([L.oI], ze.prototype, "OnTouchStart", 1),
          Ae([L.oI], ze.prototype, "OnTouchMove", 1),
          Ae([L.oI], ze.prototype, "OnWheel", 1),
          (ze = Ae([a.PA], ze));
        const B = (0, a.PA)((T) => {
            let $ = T.loader.GetNewerState(),
              he = T.loader.GetOlderState();
            return $ == 2 && he == 2
              ? null
              : (T.location == "top" ? $ : he) == 2
                ? (0, n.jsx)("div", {
                    className: C().DirectionState,
                    children: (0, n.jsx)(te.t, {
                      position: "center",
                      string: (0, p.we)("#Loading"),
                    }),
                  })
                : null;
          }),
          ee = s.forwardRef(function ($, he) {
            const xe = (0, D.Qn)(),
              [we, Qe] = (0, Ie.t7)($.event.appid, { include_assets: !0 }),
              Ce = (0, Ee.Zj)($.event.appid),
              ut = (0, G.Y)();
            return (0, n.jsx)(ye, {
              ref: he,
              ...$,
              bInGamepadUI: xe,
              bShouldMaskImages: Ce,
              storeItem: we,
              tracker: ut,
            });
          });
        let ye = class extends s.Component {
          m_refContent = s.createRef();
          m_sendReadInfo = new c.LU();
          m_bSentRead = !1;
          OnEnterVisible() {
            if (this.m_bSentRead || this.m_sendReadInfo.IsScheduled()) return;
            const T = 750,
              $ = () => {
                this.props.tracker.RecordEventRead(this.props.event, V.Tc.ot),
                  (this.m_bSentRead = !0);
              };
            this.m_sendReadInfo.Schedule(T, $);
          }
          OnLeaveVisible() {
            this.m_sendReadInfo.Cancel();
          }
          GetDOM() {
            return this.m_refContent.current;
          }
          render() {
            const {
                event: T,
                langOverride: $,
                partnerEventStore: he,
                emoticonStore: xe,
                className: we,
                additionalTypeAndDateElement: Qe,
                headerClassnames: Ce,
                isPreview: ut,
                bShouldMaskImages: tt,
                storeItem: Mt,
              } = this.props,
              et = $ || (0, t.sfN)(D.TS.LANGUAGE),
              lt = T.GetDescriptionWithFallback(et) || "",
              yt = Ce,
              Wt = "300px",
              ht = T.GetCategoryAsString(),
              ct = T.type;
            let qe = "";
            if (T.appid) qe = Mt?.GetName() || "";
            else if (T.clanSteamID) {
              const dt = F.ac.GetClanInfoByClanAccountID(
                T.clanSteamID.GetAccountID(),
              );
              qe = dt ? dt.group_name : "";
            }
            const st = _.HD.GetTimeNowWithOverride(),
              at =
                ct !== t.uYK && st < T.GetStartTimeAndDateUnixSeconds() && !ut;
            return (0, n.jsx)(K, {
              children: (0, n.jsxs)("div", {
                ref: this.m_refContent,
                className: (0, m.A)(
                  we,
                  C().PartnerEvent,
                  g().InLibraryView,
                  yt == "editor" ? g().InEditor : "",
                ),
                children: [
                  (0, n.jsx)(Me, { ...this.props, eLanguage: et }),
                  (0, n.jsx)("div", {
                    className: g().LibraryEventTitleContainer,
                    children: (0, n.jsxs)("div", {
                      className: g().EventDetailTitleContainer,
                      children: [
                        this.props.headerElement,
                        (0, n.jsxs)("div", {
                          className: (0, m.A)(
                            C().EventTypeAndTimeRow,
                            at && C().WithReminder,
                          ),
                          children: [
                            (0, n.jsxs)("div", {
                              className: C().TimeandPostedBy,
                              children: [
                                (0, n.jsx)("span", {
                                  className: C().EventType,
                                  children: ht,
                                }),
                                (0, n.jsxs)("span", {
                                  className: C().PostedBy,
                                  children: [
                                    " ",
                                    (0, p.we)("#EventDisplay_PostedBy"),
                                    qe,
                                    " ",
                                  ],
                                }),
                                (0, n.jsx)(N.O, {
                                  event: T,
                                  className: g().EventDetailTimeInfo,
                                }),
                              ],
                            }),
                            at &&
                              !ut &&
                              (0, n.jsx)("div", {
                                className: C().ReminderContainer,
                                children: (0, n.jsx)(ve.j, {
                                  eventModel: T,
                                  lang: et,
                                  bExpandLeft: !0,
                                }),
                              }),
                            !ut && Qe,
                          ],
                        }),
                        !this.props.disableReadTracking &&
                          !ut &&
                          (0, n.jsx)(Se.Y, {
                            onEnter: this.OnEnterVisible,
                            onLeave: this.OnLeaveVisible,
                            options: { rootMargin: `0px 0px -${Wt} 0px` },
                          }),
                        this.props.bInGamepadUI
                          ? (0, n.jsx)("div", {
                              className: g().EventDetailTitle,
                              children: T.GetNameWithFallback(et),
                            })
                          : (0, n.jsx)(q.tj, {
                              eventModel: T,
                              route: q.PH.k_eView,
                              className: g().EventDetailTitle,
                              children: T.GetNameWithFallback(et),
                            }),
                        T.BHasSubTitle(et) &&
                          (0, n.jsx)("div", {
                            className: (0, m.A)(
                              g().EventDetailsSubTitle,
                              C().LibraryViewSubtitle,
                            ),
                            children: T.GetSubTitle(et),
                          }),
                        (0, n.jsx)("div", {
                          className: g().EventDetailUserType,
                        }),
                      ],
                    }),
                  }),
                  !!(
                    T.BEventCanShowBroadcastWidget() &&
                    !this.props.bDisableBroadcastPlayer
                  ) &&
                    (0, n.jsx)("div", {
                      className: g().EventBroadcastCtn,
                      children: (0, n.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, n.jsx)(ke, { event: this.props.event }),
                      }),
                    }),
                  T.BHasTag("steam_award_nomination_request") &&
                    (0, n.jsx)(v.EventDisplaySteamAwardNomination, {
                      event: T,
                      lang: et,
                    }),
                  T.BHasTag("steam_award_vote_request") &&
                    (0, n.jsx)(v.WinterSaleSteamAwardVoteWrapper, {
                      appID: T.appid,
                      bIsEventActionEnabled: T.BIsEventActionEnabled(),
                      voteCategories: T.GetSteamAwardNomineeCategories(),
                    }),
                  (0, n.jsxs)("div", {
                    className: g().LibraryEventBodyContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, m.A)(
                          g().EventDetailsBody,
                          C().EventDetailsBody,
                          tt && g().MaskImages,
                        ),
                        onContextMenu: D.TS.IN_CLIENT ? W.aE : void 0,
                        children: [
                          (0, n.jsx)(S.fh, { text: lt, event: T }),
                          (0, n.jsx)("span", { className: h().Clear }),
                        ],
                      }),
                      (0, n.jsx)(me._, { event: this.props.event }),
                      !!T.jsondata.read_more_link &&
                        (0, n.jsx)("div", {
                          className: (0, m.A)(C().ReadMoreCnt),
                          children: (0, n.jsx)(re.uU, {
                            className: (0, m.A)(h().Button),
                            href: T.jsondata.read_more_link,
                            children: (0, p.we)(
                              "#EventEmail_Button_ClickForMoreDetails",
                            ),
                          }),
                        }),
                      !!(
                        T.jsondata.bSaleEnabled && T.jsondata.sale_vanity_id
                      ) &&
                        (0, n.jsxs)("div", {
                          className: (0, m.A)(C().ReadMoreCnt),
                          children: [
                            (0, n.jsx)(oe.m, { gidEvent: T.GID }),
                            (0, n.jsx)("a", {
                              className: (0, m.A)(h().Button, "LinkButton"),
                              href: (0, P.k2)((0, fe.n4)(T)),
                              children: (0, p.we)(
                                "#Event_Button_VisitSalePage",
                              ),
                            }),
                          ],
                        }),
                      (0, n.jsx)(se.lS, { appid: T.appid }),
                    ],
                  }),
                  !ut && (0, n.jsx)(A.F, { eventModel: T, emoticonStore: xe }),
                ],
              }),
            });
          }
        };
        Ae([L.oI], ye.prototype, "OnEnterVisible", 1),
          Ae([L.oI], ye.prototype, "OnLeaveVisible", 1),
          (ye = Ae([a.PA], ye));
        function Me(T) {
          const {
              event: $,
              fnFilterImageURLsForKnownFailures: he,
              fnImageFailureCallback: xe,
              eLanguage: we,
              bShouldMaskImages: Qe,
            } = T,
            Ce = $.BImageNeedScreenshotFallback("background", we),
            ut = $.type;
          let tt = (0, pe.WC)($, "background", we, U.wI.background_main, !Ce);
          return (
            he && tt && (tt = he(tt)),
            (0, n.jsxs)(n.Fragment, {
              children: [
                ut != t.Fwr &&
                  !Ce &&
                  (0, n.jsx)(b.c, {
                    className: (0, m.A)(
                      g().EventCoverImageBackground,
                      Qe && g().MaskImages,
                    ),
                    rgSources: tt,
                    onIncrementalError: (Mt, et, lt) => xe && xe(et),
                  }),
                tt &&
                  tt.length > 0 &&
                  (0, n.jsx)(b.c, {
                    className: g().EventBackgroundBlur,
                    rgSources: tt,
                    onIncrementalError: (Mt, et, lt) => xe && xe(et),
                  }),
              ],
            })
          );
        }
        var Je = ((T) => (
          (T[(T.Idle = 1)] = "Idle"),
          (T[(T.Loading = 2)] = "Loading"),
          (T[(T.EndOfContent = 3)] = "EndOfContent"),
          T
        ))(Je || {});
        class $e {
          k_nMaxPerDirection = 3;
          m_nAppID = 0;
          m_clanSteamID;
          m_partnerEventStore;
          m_additionalParams;
          m_rgEvents = [];
          m_eOlderDirection = 1;
          m_eNewerDirection = 1;
          constructor($) {
            (0, x.Gn)(this), (this.m_partnerEventStore = $);
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
          async InitAroundEvent($, he) {
            const xe = this.m_partnerEventStore;
            (this.m_nAppID = $.appid),
              (this.m_clanSteamID = $.clanSteamID),
              (this.m_rgEvents = []),
              (this.m_eOlderDirection = 2),
              (this.m_eNewerDirection = 2),
              (this.m_additionalParams = he),
              this.m_rgEvents.push($);
            let we = null;
            try {
              we = await xe.LoadAdjacentPartnerEventsByEvent(
                $,
                this.m_clanSteamID,
                this.m_nAppID,
                this.k_nMaxPerDirection,
                this.k_nMaxPerDirection,
                this.m_additionalParams,
              );
            } catch {}
            (0, x.h5)(() => {
              if (!we || we.length == 0) {
                (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
                return;
              }
              let Qe = we.findIndex((tt) => tt.GID == $.GID),
                Ce = Qe,
                ut = Qe >= 0 ? we.length - Qe - 1 : 0;
              (this.m_eNewerDirection = Ce >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_eOlderDirection =
                  ut >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_rgEvents = we);
            });
          }
          async LoadMoreAtEnd() {
            if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let $ = this.m_rgEvents[this.m_rgEvents.length - 1];
            this.m_eOlderDirection = 2;
            let he = null;
            try {
              he =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  $,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  0,
                  this.k_nMaxPerDirection,
                  this.m_additionalParams,
                );
            } catch {}
            (0, x.h5)(() => {
              if (!he) {
                this.m_eOlderDirection = 1;
                return;
              }
              const xe = new Set(this.m_rgEvents.map((we) => we.GID));
              for (let we of he)
                xe.has(we.GID) || (this.m_rgEvents.push(we), xe.add(we.GID));
              this.m_eOlderDirection =
                he.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
          async LoadMoreAtBeginning() {
            if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let $ = this.m_rgEvents[0];
            this.m_eNewerDirection = 2;
            let he = null;
            try {
              he =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  $,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  this.k_nMaxPerDirection,
                  0,
                );
            } catch {}
            (0, x.h5)(() => {
              if (!he) {
                this.m_eNewerDirection = 1;
                return;
              }
              const xe = new Set(this.m_rgEvents.map((we) => we.GID));
              for (let we of he.reverse())
                xe.has(we.GID) || (this.m_rgEvents.unshift(we), xe.add(we.GID));
              this.m_eNewerDirection =
                he.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
        }
        Ae([x.sH.shallow], $e.prototype, "m_rgEvents", 2),
          Ae([x.sH], $e.prototype, "m_eOlderDirection", 2),
          Ae([x.sH], $e.prototype, "m_eNewerDirection", 2);
      },
      33752: (ge, de, r) => {
        "use strict";
        r.d(de, { W: () => L });
        var n = r(7850),
          x = r(26589),
          a = r(40358),
          s = r(75844),
          t = r(90626),
          y = r(76559),
          z = r(813),
          V = r(6469),
          U = r(10142),
          N = r(16412),
          F = r(36118),
          _ = r(53107),
          W = r(47689),
          A = r(36707),
          S = r(18210),
          v = r(53113),
          w = r(3166),
          g = r(17009),
          o = r.n(g),
          h = r(80702),
          b = r(95414),
          k = r(73259);
        function te(P) {
          const {
              appId: D,
              clanId: I,
              strCapsuleUrl: C,
              strGroupTitle: G,
              strExtraBannerGroupStyle: q,
              actions: pe,
            } = P,
            E = D !== k.DU,
            ve = t.useMemo(() => (D ? { appid: D } : { creatorid: I }), [D, I]),
            me = (0, n.jsx)("img", { className: o().AppBannerLogo, src: C });
          return (0, w.Qn)()
            ? null
            : (0, n.jsxs)("div", {
                className: o().AppBannerCtn,
                children: [
                  (0, n.jsx)("div", {
                    className: o().AppBannerBackground,
                    style: { backgroundImage: `url(${C})` },
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, A.A)(o().AppBannerGroup, q),
                    children: [
                      E
                        ? D
                          ? (0, n.jsx)(h.Q, {
                              id: ve,
                              className: o().AppBannerLogoCtn,
                              hoverProps: {
                                direction: "overlay",
                                style: { minWidth: "320px" },
                              },
                              children: me,
                            })
                          : (0, n.jsx)(b.u, {
                              id: ve,
                              hoverClassName: o().AppBannerLogoCtn,
                              children: me,
                            })
                        : (0, n.jsxs)("div", {
                            className: o().AppBannerLogoCtn,
                            children: [me, " "],
                          }),
                      (0, n.jsxs)("div", {
                        className: o().AppBannerTitle,
                        children: [
                          G,
                          (0, n.jsx)("div", {
                            className: o().NewsHubSubTitle,
                            children: (0, S.we)(
                              "#EventDisplay_NewsHubSubtitle",
                            ),
                          }),
                        ],
                      }),
                      E &&
                        (0, n.jsx)("div", {
                          className: o().AppBannerLinks,
                          children: pe,
                        }),
                    ],
                  }),
                ],
              });
        }
        function re(P) {
          const { appid: D, clanAccountID: I } = P,
            C = React.useMemo(() => (D ? { appid: D } : void 0), [D]),
            { data: G } = useStoreItemDefaultInfo(C),
            { data: q } = useStoreItemAssets(C),
            { data: pe } = useClanInfoByAccountID(D ? void 0 : I),
            { bIsOwned: E } = useIsStoreItemOwned(C),
            ve = D
              ? q
                ? StoreAssetURL(q, "header")
                : void 0
              : pe?.avatar_full_url,
            me = D ? G?.name : pe?.group_name;
          return jsx(te, {
            appId: D ?? 0,
            clanId: I,
            strCapsuleUrl: ve,
            strGroupTitle: me,
            strExtraBannerGroupStyle: D ? void 0 : styles.ClanBanner,
            actions: jsxs(Fragment, {
              children: [
                !!(D && !E) &&
                  jsx("div", {
                    className: styles.HeaderWishlistButton,
                    children: jsx(WishlistButton, {
                      appid: D,
                      bIsFree: !!G?.is_free,
                      bIsComingSoon: !!G?.is_coming_soon,
                      className: classnames(
                        styles.ActionButton,
                        styles.WishlistBtnShort,
                      ),
                    }),
                  }),
                jsx("div", {
                  className: styles.HeaderFollowButton,
                  children: D
                    ? jsx(AppFollowButton, {
                        appid: D,
                        className: styles.HeaderButtonDark,
                      })
                    : jsx(CuratorFollowButton, {
                        clanAccountID: I,
                        className: styles.HeaderButtonDark,
                      }),
                }),
              ],
            }),
          });
        }
        var J = r(56492),
          Q = r(72147),
          c = r(64774);
        function m(P, D) {
          const [I, C] = (0, t.useState)({}),
            G = (0, W.m)("useEventHeaderData");
          return (
            (0, t.useEffect)(() => {
              if (P)
                U.A.Get()
                  .QueueAppRequest(P, {
                    include_assets: !0,
                    include_screenshots: !0,
                  })
                  .then(() => {
                    const q = U.A.Get().GetApp(P);
                    q &&
                      !G?.token?.reason &&
                      C({
                        strCapsuleUrl: q.GetAssets().GetHeaderURL(),
                        strGroupTitle: q.GetName(),
                        strStoreURL:
                          (w.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          q.GetStorePageURL(),
                        strCommunityURL:
                          (w.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          q.GetCommunityPageURL(),
                        strForumURL:
                          (w.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          q.GetCommunityDiscussionForumsURL(),
                      });
                  });
              else if (D) {
                const q = y.b.InitFromClanID(D);
                z.ac.LoadClanInfoForClanSteamID(q).then((pe) => {
                  G?.token?.reason ||
                    C({
                      strCapsuleUrl: pe.avatar_full_url,
                      strGroupTitle: pe.group_name,
                      strStoreURL:
                        (w.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        w.TS.STORE_BASE_URL +
                        "curator/" +
                        D +
                        "/",
                      strCommunityURL:
                        (w.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        w.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        q.ConvertTo64BitString(),
                      strExtraBannerGroupStyle: o().ClanBanner,
                    });
                });
              }
            }, [P, G?.token?.reason, D]),
            I
          );
        }
        const M = {};
        function p(P) {
          const { appId: D, clanId: I, bShowRSSFeed: C } = P,
            { strStoreURL: G, strCommunityURL: q, strForumURL: pe } = m(D, I),
            E = (0, w.Y2)(),
            ve =
              w.TS.STORE_BASE_URL +
              "feeds/" +
              (0, J.LJ)() +
              (D ? "/app/" + D : "/group/" + I) +
              "/?cc=" +
              w.TS.COUNTRY +
              "&l=" +
              w.TS.LANGUAGE,
            { data: me } = (0, x.hM)(I),
            Y = !!(me?.can_edit || me?.support_user),
            be = V.Fm.Get().BOwnsApp(D),
            fe = (0, t.useMemo)(() => {
              const Ie = [];
              return (
                w.TS.IN_CLIENT &&
                  be &&
                  Ie.push({
                    label: (0, S.we)("#EventDisplay_ViewInLibrary_ExtraShort"),
                    data: "steam://nav/games/details/" + D,
                  }),
                Ie.push({
                  label: (0, S.we)("#EventDisplay_ViewStorePage_ExtraShort"),
                  data: (0, v.k2)(G),
                }),
                E ||
                  (Ie.push({
                    label: (0, S.we)(
                      "#EventDisplay_ViewCommunityPage_ExtraShort",
                    ),
                    data: (0, v.k2)(q),
                  }),
                  pe &&
                    Ie.push({
                      label: (0, S.we)("#EventDisplay_ViewForum_ExtraShort"),
                      data: (0, v.k2)(pe),
                    }),
                  C &&
                    Ie.push({
                      label: (0, n.jsxs)("div", {
                        className: o().RssRow,
                        children: [
                          (0, n.jsx)(F.ZPc, {}),
                          (0, S.we)("#EventDisplay_RSSFeed_ExtraShort"),
                        ],
                      }),
                      data: ve,
                    })),
                Y &&
                  Ie.push({
                    label: (0, S.we)("#EventDisplay_Admin_ExtraShort"),
                    data: (0, J.Hx)(D, y.b.InitFromClanID(I), "admin"),
                  }),
                Ie
              );
            }, [be, G, E, Y, q, pe, C, ve, D, I]);
          return (0, n.jsx)(N.m, {
            strDefaultLabel: (0, S.we)(
              "#EventDisplay_LinksDropDown_ExtraShort",
            ),
            strClassName: o().AppBannerLinkDD,
            strDropDownButtonClassName: o().AppBannerLinkDDButton,
            strDropDownMenuCtnClass: o().AppBannerLinkDDContainer,
            contextMenuPositionOptions: { bMatchWidth: !1 },
            arrowClassName: o().DDButtonArrow,
            rgOptions: fe,
            onChange: (Ie, Te, Re) => (0, _.EP)(Re, Ie.data),
          });
        }
        const L = (0, s.PA)((P) => {
          const { appId: D, clanId: I } = P,
            {
              strCapsuleUrl: C,
              strGroupTitle: G,
              strExtraBannerGroupStyle: q,
            } = m(D, I),
            pe = (0, t.useMemo)(
              () => (D ? { appid: D } : { creatorid: I }),
              [D, I],
            ),
            { data: E } = (0, a.J$)(pe),
            ve = V.Fm.Get().BOwnsApp(D);
          return (0, n.jsx)(te, {
            appId: D,
            clanId: I,
            strCapsuleUrl: C,
            strGroupTitle: G,
            strExtraBannerGroupStyle: q,
            actions: (0, n.jsxs)(n.Fragment, {
              children: [
                !!(!ve && D) &&
                  (0, n.jsx)("div", {
                    className: o().HeaderWishlistButton,
                    children: (0, n.jsx)(c._, {
                      appid: D,
                      bIsFree: !!E?.is_free,
                      bIsComingSoon: !!E?.is_coming_soon,
                      className: (0, A.A)(
                        o().ActionButton,
                        o().WishlistBtnShort,
                      ),
                    }),
                  }),
                (0, n.jsx)("div", {
                  className: o().HeaderFollowButton,
                  children: D
                    ? (0, n.jsx)(Q.do, {
                        appid: D,
                        className: o().HeaderButtonDark,
                      })
                    : (0, n.jsx)(Q.of, {
                        clanAccountID: I,
                        className: o().HeaderButtonDark,
                      }),
                }),
                (0, n.jsx)(p, { ...P }),
              ],
            }),
          });
        });
      },
      91424: (ge, de, r) => {
        "use strict";
        r.d(de, { H: () => w, Y: () => v });
        var n = r(7850),
          x = r(75844),
          a = r(90626),
          s = r(53025),
          t = r(77495),
          y = r(58483),
          z = r(82385),
          V = r(88003),
          U = r(30096),
          N = r(19332),
          F = r.n(N),
          _ = Object.defineProperty,
          W = Object.getOwnPropertyDescriptor,
          A = (g, o, h, b) => {
            for (
              var k = b > 1 ? void 0 : b ? W(o, h) : o, te = g.length - 1, re;
              te >= 0;
              te--
            )
              (re = g[te]) && (k = (b ? re(o, h, k) : re(k)) || k);
            return b && k && _(o, h, k), k;
          };
        function S(g) {
          const { event: o, closeModal: h } = g,
            b = (0, y.LJ)();
          return (0, n.jsx)(z.AD, {
            initialEvent: o,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: t.O3,
            emoticonStore: b,
            showAppHeader: !0,
            closeModal: h,
          });
        }
        function v(g, o) {
          (0, V.pg)((0, n.jsx)(S, { event: g }), o);
        }
        let w = class extends a.Component {
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
          escFunction(g) {
            const { fnClose: o } = this.props;
            g.keyCode === 27 && o && o();
          }
          OnBackgroundClick(g) {
            g.currentTarget == g.target && this.props.fnClose();
          }
          render() {
            const { event: g, langOverride: o, isPreview: h } = this.props;
            return (0, n.jsx)("div", {
              ref: this.m_refFocus,
              className: N.Main,
              onClick: this.OnBackgroundClick,
              children: (0, n.jsx)(y.sU, {
                children: (b) =>
                  (0, n.jsx)(
                    z.He,
                    {
                      event: g,
                      emoticonStore: b,
                      partnerEventStore: s.$.Get(),
                      langOverride: o,
                      isPreview: h,
                      bDisableBroadcastPlayer: !1,
                    },
                    g.GID,
                  ),
              }),
            });
          }
        };
        A([U.oI], w.prototype, "escFunction", 1),
          A([U.oI], w.prototype, "OnBackgroundClick", 1),
          (w = A([x.PA], w));
      },
      31117: (ge, de, r) => {
        "use strict";
        r.d(de, { W: () => Te, F: () => Re });
        var n = r(7850),
          x = r(19298),
          a = r(65946),
          s = r(813),
          t = r(41735),
          y = r.n(t),
          z = r(14947),
          V = r(72604),
          U = r(34592),
          N = r(3166),
          F = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          W = (Fe, De, H, ue) => {
            for (
              var K = ue > 1 ? void 0 : ue ? _(De, H) : De,
                oe = Fe.length - 1,
                se;
              oe >= 0;
              oe--
            )
              (se = Fe[oe]) && (K = (ue ? se(De, H, K) : se(K)) || K);
            return ue && K && F(De, H, K), K;
          };
        const A = class Jt {
          constructor() {
            (0, z.Gn)(this);
          }
          m_mapClanReposted = new Set();
          m_mapSourceEventGIDToPostedClans = new Map();
          static s_EventRepost;
          static Get() {
            return (
              Jt.s_EventRepost ||
                ((Jt.s_EventRepost = new Jt()), Jt.s_EventRepost.Initialize()),
              Jt.s_EventRepost
            );
          }
          static ValidateRepostData(De) {
            const H = De;
            return H &&
              H.repost_clan_account_ids &&
              Array.isArray(H.repost_clan_account_ids) &&
              H.repost_clan_account_ids.length > 0
              ? typeof H.repost_clan_account_ids[0] == "number"
              : !1;
          }
          Initialize() {
            if (document.getElementById("application_config")) {
              let De = (0, N.Tc)("repostcontrols", "application_config");
              Jt.ValidateRepostData(De) &&
                De.repost_clan_account_ids.forEach((H) =>
                  this.m_mapClanReposted.add(H),
                );
            }
          }
          BCanRepostPartnerEvent() {
            return this.m_mapClanReposted.size > 0;
          }
          GetRepostClanAccountID() {
            return Array.from(this.m_mapClanReposted);
          }
          async LoadClansAlreadyRepostedTo(De, H, ue) {
            if (this.m_mapSourceEventGIDToPostedClans.has(H))
              return this.m_mapSourceEventGIDToPostedClans.get(H);
            const K = N.TS.STORE_BASE_URL + "events/ajaxgetrepostedevent",
              oe = {
                sessionid: (0, N.KC)(),
                source_clan_accountid: De.GetAccountID(),
                source_event_gid: H,
              };
            try {
              const se = await y().get(K, {
                params: oe,
                withCredentials: !0,
                cancelToken: ue?.token,
              });
              if (se?.data?.success == V.R)
                return (
                  this.m_mapSourceEventGIDToPostedClans.set(
                    H,
                    se.data.repost_clan_accountid || [],
                  ),
                  se.data.repost_clan_accountid
                );
              console.error(
                "GetRepostClanAccountID: failed " +
                  se?.data?.success +
                  " and msg: " +
                  se?.data?.msg,
              );
            } catch (se) {
              const Ee = (0, U.H)(se);
              console.error(
                "GetRepostClanAccountID: fail repost with " + Ee.strErrorMsg,
                Ee,
              );
            }
            return new Array();
          }
          async RepostEvent(De, H, ue, K, oe) {
            const se = N.TS.STORE_BASE_URL + "events/ajaxrepostevent",
              Ee = new FormData();
            Ee.append("sessionid", (0, N.KC)()),
              Ee.append("source_clan_accountid", "" + De.GetAccountID()),
              Ee.append("source_event_gid", "" + H),
              Ee.append("repost_clan_accountid", "" + ue.GetAccountID()),
              Ee.append("add", "" + K);
            try {
              let Se = await y().post(se, Ee, {
                withCredentials: !0,
                cancelToken: oe?.token,
              });
              if (Se?.data?.success == V.R && Se.data.repost_gid) {
                this.m_mapSourceEventGIDToPostedClans.has(H) ||
                  this.m_mapSourceEventGIDToPostedClans.set(H, []);
                const ne = this.m_mapSourceEventGIDToPostedClans
                  .get(H)
                  .findIndex((le) => ue.GetAccountID() == le);
                return (
                  K && ne == -1
                    ? this.m_mapSourceEventGIDToPostedClans
                        .get(H)
                        .push(ue.GetAccountID())
                    : !K &&
                      ne !== -1 &&
                      this.m_mapSourceEventGIDToPostedClans
                        .get(H)
                        .splice(ne, 1),
                  Se.data.repost_gid
                );
              } else
                console.error(
                  "RepostEvent: failed " +
                    Se?.data?.success +
                    " and msg: " +
                    Se?.data?.msg,
                );
            } catch (Se) {
              const ne = (0, U.H)(Se);
              console.error(
                "RepostEvent: fail repost with " + ne.strErrorMsg,
                ne,
              );
            }
            return null;
          }
        };
        W([z.sH], A.prototype, "m_mapClanReposted", 2);
        let S = A;
        var v = r(95695),
          w = r.n(v),
          g = r(47875),
          o = r(88003),
          h = r(36707),
          b = r(82734),
          k = r(18210),
          te = r(13854),
          re = r(53113),
          J = r(96538),
          Q = r(14256),
          c = r.n(Q),
          m = r(64868),
          M = r(36118),
          p = r(56492),
          L = r(91778);
        function P(Fe) {
          const { eventModel: De, emoticonStore: H } = Fe,
            [ue, K, oe] = (0, m.uD)(),
            se = (0, p.T7)(De);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(x.Z, {
                focusable: !0,
                className: (0, h.A)(w().Button, w().Icon, c().DiscussionButton),
                onActivate: K,
                children: [
                  (0, n.jsx)(M.SYj, { className: c().ShareIcon }),
                  (0, n.jsx)("span", {
                    className: c().DiscussionButtonText,
                    children: (0, k.we)("#Button_Share"),
                  }),
                ],
              }),
              (0, n.jsx)(L.k, {
                eventModel: De,
                strEventLink: se ?? "",
                bActive: ue,
                closeModal: oe,
                emoticonStore: H,
              }),
            ],
          });
        }
        var D = r(68988),
          I = r(85385),
          C = r(75844),
          G = r(90626),
          q = r(76559),
          pe = r(16412),
          E = r(25792),
          ve = r(85599);
        const me = (0, C.PA)((Fe) => {
          const { eventModel: De } = Fe,
            [H, ue] = (0, G.useState)(!0),
            [K, oe] = (0, G.useState)(new Set()),
            [se, Ee] = (0, G.useState)(new Set()),
            [Se, ne] = (0, G.useState)(new Set()),
            [le, je] = (0, G.useState)(null),
            [Ae, Le] = (0, G.useState)(null),
            Ge = (0, G.useRef)(null);
          (0, G.useEffect)(
            () => (
              H &&
                (async () => {
                  const ze = y().CancelToken.source();
                  Ge.current = ze.cancel;
                  const B = S.Get().LoadClansAlreadyRepostedTo(
                    De.clanSteamID,
                    De.GID,
                    ze,
                  );
                  B.then((ye) => {
                    const Me = new Set();
                    ye.forEach((Je) => Me.add(Je)), oe(Me);
                  });
                  let ee = new Array();
                  ee.push(B),
                    S.Get()
                      .GetRepostClanAccountID()
                      .forEach((ye) => {
                        const Me = q.b.InitFromClanID(ye);
                        ee.push(s.ac.LoadClanInfoForClanSteamID(Me));
                      }),
                    await Promise.all(ee),
                    ue(!1);
                })(),
              () => Ge.current && Ge.current()
            ),
            [H, De.GID, De.clanSteamID],
          );
          const ke = new Array();
          return (
            S.Get()
              .GetRepostClanAccountID()
              .forEach((Ue) => {
                const ze = s.ac.GetClanInfoByClanAccountID(Ue);
                if (ze && Ue != De.clanSteamID.GetAccountID()) {
                  const B = K.has(Ue),
                    ee = se.has(Ue) || (B && !Se.has(Ue));
                  ke.push(
                    (0, n.jsx)(
                      pe.Yh,
                      {
                        label: B
                          ? (0, k.we)(
                              "#EventRepost_Dialog_Existing",
                              ze.group_name,
                            )
                          : ze.group_name,
                        checked: ee,
                        disabled: le !== null,
                        onChange: (ye) => {
                          K.has(Ue)
                            ? (ye ? Se.delete(Ue) : Se.add(Ue), ne(new Set(Se)))
                            : (ye ? se.add(Ue) : se.delete(Ue),
                              Ee(new Set(se)));
                        },
                      },
                      "checkbox" + Ue,
                    ),
                  );
                }
              }),
            (0, n.jsx)(E.tH, {
              children: (0, n.jsx)(J.x_, {
                onEscKeypress: () => Fe.closeModal && Fe.closeModal(),
                children: (0, n.jsxs)(pe.UC, {
                  children: [
                    (0, n.jsx)(pe.Y9, {
                      children: (0, k.we)("#EventRepost_Dialog_Title"),
                    }),
                    (0, n.jsxs)(pe.nB, {
                      children: [
                        (0, n.jsx)(pe.a3, {
                          children: (0, k.we)("#EventRepost_Dialog_Desc"),
                        }),
                        H
                          ? (0, n.jsx)(ve.t, { string: (0, k.we)("#Loading") })
                          : (0, n.jsx)("div", { children: ke }),
                        !!(se.size || Se.size) &&
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("span", {
                                children: (0, k.we)(
                                  "#EventRepost_Dialog_Action_Desc",
                                ),
                              }),
                              (0, n.jsxs)("ul", {
                                children: [
                                  !!se.size &&
                                    (0, n.jsx)("li", {
                                      children: (0, k.we)(
                                        "#EventRepost_Dialog_Action_Add",
                                        se.size,
                                      ),
                                    }),
                                  !!Se.size &&
                                    (0, n.jsx)("li", {
                                      children: (0, k.we)(
                                        "#EventRepost_Dialog_Action_Remove",
                                        Se.size,
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        !!le && (0, n.jsx)("div", { children: le }),
                        !!Ae && (0, n.jsx)("div", { children: Ae }),
                      ],
                    }),
                    (0, n.jsx)(pe.wi, {
                      children: (0, n.jsx)(pe.CB, {
                        onCancel: () => Fe.closeModal && Fe.closeModal(),
                        strOKText: (0, k.we)("#EventRepost_Dialog_OK"),
                        bOKDisabled:
                          (se.size == 0 && Se.size == 0) ||
                          le !== null ||
                          Ae !== null,
                        onOK: async () => {
                          Ge.current && Ge.current();
                          const Ue = y().CancelToken.source();
                          Ge.current = Ue.cancel;
                          const ze = se.size + Se.size;
                          let B = 1;
                          je((0, k.we)("#EventRepost_Dialog_Progress", B, ze));
                          for (const ee of Array.from(se)) {
                            const ye = q.b.InitFromClanID(ee);
                            if (
                              await S.Get().RepostEvent(
                                De.clanSteamID,
                                De.GID,
                                ye,
                                !0,
                                Ue,
                              )
                            )
                              je(
                                (0, k.we)(
                                  "#EventRepost_Dialog_Progress",
                                  ++B,
                                  ze,
                                ),
                              );
                            else {
                              Le((0, k.we)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          for (const ee of Array.from(Se)) {
                            const ye = q.b.InitFromClanID(ee);
                            if (
                              await S.Get().RepostEvent(
                                De.clanSteamID,
                                De.GID,
                                ye,
                                !1,
                                Ue,
                              )
                            )
                              je(
                                (0, k.we)(
                                  "#EventRepost_Dialog_Progress",
                                  ++B,
                                  ze,
                                ),
                              );
                            else {
                              Le((0, k.we)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          Le((0, k.we)("#EventRepost_Dialog_ResultSuccess"));
                        },
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        });
        var Y = r(24660),
          be = r(19730);
        function fe(Fe) {
          const {
            nVoteCount: De,
            nCommentCount: H,
            myVote: ue,
            onVote: K,
            strDiscussionURL: oe,
            onDiscussionUnavailable: se,
            bShowDiscussion: Ee,
            repost: Se,
            share: ne,
          } = Fe;
          return (0, n.jsxs)(x.Z, {
            className: c().Container,
            "flow-children": "row",
            focusable: !1,
            children: [
              (0, n.jsxs)("div", {
                className: c().InnerContainer,
                children: [
                  (0, n.jsxs)("div", {
                    className: c().VoteContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: c().VoteCount,
                        children: [
                          (0, n.jsx)(M.bfp, {
                            className: c().VoteUpStaticIcon,
                          }),
                          (0, be.Dq)(De),
                        ],
                      }),
                      (0, n.jsxs)(x.Z, {
                        focusable: !0,
                        className: (0, h.A)(
                          w().Button,
                          w().Icon,
                          c().DiscussionButton,
                          ue == "up" ? c().VoteButtonSelected : "",
                        ),
                        onActivate: () => K("up"),
                        children: [
                          (0, n.jsx)(M.bfp, {
                            className:
                              ue == "up"
                                ? c().VoteUpSelectedIcon
                                : c().VoteUpIcon,
                          }),
                          (0, n.jsx)("span", {
                            className: c().DiscussionButtonText,
                            children: (0, k.we)("#Button_RateUp"),
                          }),
                        ],
                      }),
                      (0, n.jsx)(x.Z, {
                        focusable: !0,
                        className: (0, h.A)(
                          w().Button,
                          w().Icon,
                          c().DiscussionButton,
                          ue == "down" ? c().VoteButtonSelected : "",
                        ),
                        onActivate: () => K("down"),
                        "aria-label": (0, k.we)("#Button_RateDown"),
                        children: (0, n.jsx)(M.bfp, {
                          className:
                            ue == "down"
                              ? c().VoteDownSelectedIcon
                              : c().VoteDownIcon,
                        }),
                      }),
                    ],
                  }),
                  Ee &&
                    (0, n.jsx)(Ie, {
                      commentCount: H,
                      discussionURL: oe,
                      gotoDiscussion: se,
                    }),
                  Se,
                ],
              }),
              ne &&
                (0, n.jsx)("div", {
                  className: c().ShareContainer,
                  children: ne,
                }),
            ],
          });
        }
        function Ie(Fe) {
          const { commentCount: De, discussionURL: H, gotoDiscussion: ue } = Fe;
          return (0, n.jsxs)("div", {
            className: c().DiscussContainer,
            children: [
              (0, n.jsxs)("div", {
                className: c().DiscussionCount,
                children: [(0, n.jsx)(M.ROZ, {}), (0, be.Dq)(De)],
              }),
              H &&
                (0, n.jsx)(Y.Ii, {
                  href: (0, re.k2)(H),
                  children: (0, n.jsxs)("div", {
                    className: (0, h.A)(
                      w().Button,
                      w().Icon,
                      c().DiscussionButton,
                    ),
                    children: [
                      (0, n.jsx)(M.ROZ, {}),
                      (0, n.jsx)("span", {
                        className: c().DiscussionButtonText,
                        children: (0, k.we)("#Button_Discuss"),
                      }),
                    ],
                  }),
                }),
              !H &&
                (0, n.jsxs)(x.Z, {
                  focusable: !0,
                  onActivate: ue,
                  className: (0, h.A)(
                    w().Button,
                    w().Icon,
                    c().DiscussionButton,
                  ),
                  children: [
                    (0, n.jsx)(M.ROZ, {}),
                    (0, n.jsx)("span", {
                      className: c().DiscussionButtonText,
                      children: (0, k.we)("#Button_Discuss"),
                    }),
                  ],
                }),
            ],
          });
        }
        function Te() {
          return N.iA.logged_in
            ? N.iA.is_limited
              ? ((0, o.pg)((0, n.jsx)(I.g, {}), window), !1)
              : !0
            : (N.TS.IN_CLIENT
                ? console.log(
                    "EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : (0, o.pg)(
                    (0, n.jsx)(J.o0, {
                      strTitle: (0, k.we)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: (0, k.we)(
                        "#EventDisplay_Share_NotLoggedIn_Description",
                      ),
                      strOKButtonText: (0, k.we)("#MobileLogin_SignIn"),
                      onOK: () => (0, g.l)(),
                    }),
                    window,
                  ),
              !1);
        }
        function Re(Fe) {
          const { eventModel: De, emoticonStore: H } = Fe,
            ue = (0, N.Qn)(),
            { myVote: K, Vote: oe } = (0, D.C)(De),
            se = (Ue) => {
              Te() && K !== void 0 && oe(Ue);
            },
            [, Ee] = (0, s.TB)(De.clanSteamID.GetAccountID()),
            Se = (Ue) => {
              (0, o.pg)(
                (0, n.jsx)(J.KG, {
                  strDescription: (0, k.we)(
                    "#EventDisplay_Share_CommentMigrationInProcess",
                  ),
                }),
                (0, b.uX)(Ue),
              );
            },
            ne = (Ue) => {
              (0, o.pg)((0, n.jsx)(me, { eventModel: De }), (0, b.uX)(Ue));
            },
            [le, je, Ae, Le] = (0, a.q3)(() => [
              (0, te.OQ)(
                De.nVotesUp - De.nVotesDown,
                0,
                Number.MAX_SAFE_INTEGER,
              ),
              (0, re.NT)(De.GetDiscussionURL(Ee?.vanity_url)),
              De.BIsUnlistedEvent(),
              De.nCommentCount,
            ]),
            Ge = (0, N.Y2)(),
            ke = N.iA.logged_in && S.Get().BCanRepostPartnerEvent();
          return (0, n.jsx)(fe, {
            nVoteCount: le,
            nCommentCount: Le,
            myVote: K ?? void 0,
            onVote: se,
            strDiscussionURL: je,
            onDiscussionUnavailable: Se,
            bShowDiscussion: !Ge && !Ae,
            repost:
              ke &&
              (0, n.jsx)("div", {
                className: c().VoteContainer,
                children: (0, n.jsx)(x.Z, {
                  focusable: !0,
                  className: (0, h.A)(
                    w().Button,
                    w().Icon,
                    c().DiscussionButton,
                    K == "down" ? c().VoteButtonSelected : "",
                  ),
                  onActivate: ne,
                  children: (0, k.we)("#EventRepost_Dialog_Title"),
                }),
              }),
            share: !ue && (0, n.jsx)(P, { eventModel: De, emoticonStore: H }),
          });
        }
      },
      94520: (ge, de, r) => {
        "use strict";
        r.d(de, { zj: () => Tn, d3: () => pt.d3, fh: () => Dr });
        var n = r(7850),
          x = r(5191),
          a = r(70187),
          s = r(39256),
          t = r(18210),
          y = r(39654);
        function z(u) {
          const { MissingEventFallback: l } = u,
            { event: d, showErrorInfo: f } = u.context,
            j = (0, a.j$)(u.args),
            R = !!j && j != d?.GID,
            { data: ae, isPending: ce } = (0, y.vE)(
              R && d
                ? { clanAccountID: d.clanSteamID.GetAccountID(), eventGID: j }
                : void 0,
            );
          if (!R)
            return d
              ? (0, n.jsx)(x.j, { eventModel: d, lang: u.language })
              : null;
          if (d) {
            if (ae)
              return (0, n.jsx)(x.j, { eventModel: ae, lang: u.language });
            if (ce) return null;
          }
          return l
            ? (0, n.jsx)(l, {
                eventGID: j,
                lang: u.language,
                bShowErrorInfo: !!f,
              })
            : f
              ? (0, n.jsx)(V, { eventGID: j })
              : null;
        }
        function V({ eventGID: u }) {
          return (0, n.jsx)("div", {
            className: s.ErrorDiv,
            children: (0, t.we)("#EventDidplay_Reminder_EventNotVisible", u),
          });
        }
        function U(u) {
          return /\[remindme\b/i.test(u);
        }
        function N(u) {
          const l = new Set();
          for (const d of u.matchAll(/\[remindme=(\d+)\]/gi)) l.add(d[1]);
          return [...l];
        }
        var F = r(48421);
        const _ = new Map([["remindme", { Constructor: W, autocloses: !1 }]]);
        function W(u) {
          return (0, n.jsx)(z, { ...u, MissingEventFallback: A });
        }
        function A({ eventGID: u, lang: l, bShowErrorInfo: d }) {
          const f = (0, F.RR)(u);
          return f
            ? (0, n.jsx)(x.j, { eventModel: f, lang: l })
            : d
              ? (0, n.jsx)(V, { eventGID: u })
              : null;
        }
        var S = r(64868),
          v = r(72609),
          w = r(11587),
          g = r(89926),
          o = r(90626),
          h = r(16412),
          b = r(96538),
          k = r(69168),
          te = r(85599);
        function re(u) {
          if (u === "GameAwardDrop2022") {
            const l = (0, w.h3)(u),
              d = (0, w.Qg)();
            return l
              ? l.registered
                ? {
                    bInitialState: !1,
                    bSuccessState: l.eligible,
                    bFailedState: !l.eligible,
                    fnAction: l.eligible
                      ? void 0
                      : async () => {
                          await d.fnCreateRegistration(u);
                        },
                  }
                : {
                    bInitialState: !0,
                    fnAction: async () => {
                      await d.fnCreateRegistration(u);
                    },
                  }
              : { bInitialState: !0 };
          }
          return { bInitialState: !0 };
        }
        function J(u) {
          const l = (0, a.j$)(u.args, "action"),
            d = (0, a.j$)(u.args, "initialToken"),
            f = (0, a.j$)(u.args, "successToken"),
            j = (0, a.j$)(u.args, "failToken"),
            R = re(l),
            { elDialogElement: ae, fnShowLogonDialog: ce } = (0, g.l)(),
            [Ke, Xe, rt] = (0, S.uD)();
          return !l || !d || !f || !j
            ? u.context.showErrorInfo
              ? (0, n.jsx)("div", {
                  children:
                    "Failed to provide all tokens. Dialog will not appear",
                })
              : null
            : !v.iA.logged_in && l != "test" && l != "nologinrequired"
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(h.$n, {
                      className: "CSSActionDialogButton",
                      onClick: ce,
                      children: (0, t.we)("#Login_SignIn"),
                    }),
                    ae,
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)(h.$n, {
                      className: "CSSActionDialogButton",
                      onClick: Xe,
                      children: [
                        !!R.bInitialState && (0, t.we)(d),
                        !!R.bSuccessState && (0, t.we)(f),
                        !!R.bFailedState && (0, t.we)(j),
                      ],
                    }),
                    (0, n.jsx)(k.E, {
                      active: Ke,
                      children: (0, n.jsx)(Q, {
                        strAction: l,
                        strInitialToken: d,
                        strSuccessToken: f,
                        strFailToken: j,
                        closeModal: rt,
                        children: u.children,
                      }),
                    }),
                  ],
                });
        }
        function Q(u) {
          const {
              strAction: l,
              children: d,
              closeModal: f,
              strInitialToken: j,
              strSuccessToken: R,
              strFailToken: ae,
            } = u,
            ce = re(l),
            [Ke, Xe] = o.useState(!!ce.fnAction),
            rt = o.useRef(!1);
          o.useEffect(() => {
            !ce.fnAction ||
              rt.current ||
              ((rt.current = !0), Xe(!0), ce.fnAction().finally(() => Xe(!1)));
          }, [ce]);
          const Ze = o.useId();
          return (0, n.jsxs)(b.eV, {
            bDisableBackgroundDismiss: !0,
            closeModal: f,
            onCancel: f,
            className: "CSSActionDialogDialog",
            "aria-labelledby": Ze,
            children: [
              (0, n.jsxs)(h.Y9, {
                id: Ze,
                children: [
                  !!ce.bInitialState && (0, t.we)(j),
                  !!ce.bSuccessState && (0, t.we)(R),
                  !!ce.bFailedState && (0, t.we)(ae),
                ],
              }),
              (0, n.jsx)(h.nB, {
                children: (0, n.jsx)(h.a3, {
                  children: Ke
                    ? (0, n.jsx)(te.t, {
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
          m = r(92799);
        function M(u) {
          const l = !!u.context.showErrorInfo,
            { elDialogElement: d, fnShowLogonDialog: f } = (0, g.l)();
          if (!v.iA.logged_in)
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(h.$n, {
                  onClick: f,
                  className: "CSSClaimItemLoginButton",
                  children: (0, t.we)("#Sale_ClaimableReward_Login"),
                }),
                d,
              ],
            });
          const j = (0, a.j$)(u.args, "type");
          let R;
          if (j)
            switch (j) {
              case "profilemodifier":
                R = c.jE;
                break;
              case "sticker":
                R = c.Ed;
                break;
            }
          return (0, n.jsx)(m.m, { bPreviewMode: l, rewardType: R });
        }
        function p(u) {
          return /\[claimitem\b/i.test(u);
        }
        function L(u) {
          const l = (0, a.j$)(u.args, "name"),
            d =
              ((0, a.j$)(u.args, "visible") || "false").toLowerCase() ===
              "true",
            f = (0, w.h3)(l);
          return l
            ? !f || !f.registered
              ? null
              : (f.eligible && d) || (!f.eligible && !d)
                ? (0, n.jsx)(n.Fragment, { children: u.children })
                : null
            : u.context.showErrorInfo
              ? (0, n.jsx)("div", {
                  children: "Failed to provide giveaway name",
                })
              : null;
        }
        const P = /\bname\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function D(u) {
          const l = new Set();
          for (const d of u.matchAll(/\[giveawayeligible\b([^\]]*)\]/gi)) {
            const f = P.exec(d[1] ?? ""),
              j = f?.[1] ?? f?.[2] ?? f?.[3];
            j && l.add(j);
          }
          return Array.from(l);
        }
        var I = r(99412),
          C = r(86048);
        function G(u, l) {
          const d = o.useCallback(
            (f) => {
              f.preventDefault(), (f.returnValue = l);
            },
            [l],
          );
          (0, C.l6)(window, "beforeunload", u ? d : void 0),
            o.useEffect(() => {
              if (!u || !window.navigation) return;
              const f = (j) => {
                (j.navigationType != "push" &&
                  j.navigationType != "traverse") ||
                  j.hashChange ||
                  j.downloadRequest !== null ||
                  !j.cancelable ||
                  window.confirm(l) ||
                  j.preventDefault();
              };
              return (
                window.navigation.addEventListener("navigate", f),
                () => window.navigation.removeEventListener("navigate", f)
              );
            }, [u, l]);
        }
        var q = r(65946),
          pe = r(87937),
          E = r.n(pe),
          ve = r(91354),
          me = r(69909),
          Y = r(72604),
          be = r(16936),
          fe = r(80902),
          Ie = r(75233),
          Te = r(51614),
          Re = r(16369);
        const Fe = 0,
          De = 1,
          H = 2,
          ue = 3,
          K = new Map(),
          oe = "",
          se = 0;
        function Ee(u, l) {
          return ["MeetSteamRegistrations", u, l];
        }
        function Se(u, l) {
          return ["MeetSteamSelections", u, l];
        }
        function ne(u) {
          return {
            queryKey: Ee(u?.gidClanEvent ?? oe, u?.userAccountID ?? se),
            queryFn: async () => {
              if (!u) return K;
              const l = await (0, be._V)(u.gidClanEvent),
                d = new Map();
              return (
                l.forEach((f) => {
                  const j = {
                    ...f,
                    regmodel: f.jsondata ? JSON.parse(f.jsondata) : void 0,
                  };
                  j.group_id === void 0 ||
                    j.session_id === void 0 ||
                    d.set(j.group_id, j);
                }),
                d
              );
            },
            enabled:
              !!u && (0, Re.H)() == u?.clanAccountID && !!u?.userAccountID,
          };
        }
        function le(u, l) {
          return {
            queryKey: Se(u, l),
            queryFn: () => null,
            initialData: null,
            staleTime: 1 / 0,
            gcTime: 1 / 0,
          };
        }
        const je = o.createContext(void 0);
        function Ae(u) {
          const {
              clanAccountID: l,
              gidClanEvent: d,
              userAccountID: f,
              children: j,
            } = u,
            R = o.useMemo(
              () => ({ clanAccountID: l, gidClanEvent: d, userAccountID: f }),
              [l, d, f],
            );
          return (0, n.jsx)(je.Provider, { value: R, children: j });
        }
        function Le() {
          const u = o.useContext(je),
            l = (0, fe.I)(ne(u)),
            d = (0, fe.I)(le(u?.gidClanEvent ?? oe, u?.userAccountID ?? se)),
            f = l.data ?? K;
          return o.useMemo(
            () => ({
              registrations: f,
              selections: d.data ?? Ge(f),
              bLoading: l.isFetching,
            }),
            [f, d.data, l.isFetching],
          );
        }
        function Ge(u) {
          const l = new Map();
          return (
            u.forEach((d, f) => {
              d.session_id !== void 0 && l.set(f, d.session_id);
            }),
            l
          );
        }
        function ke(u, l) {
          return l === void 0 ? void 0 : u.selections.get(l);
        }
        function Ue(u) {
          return Array.from(u.selections.keys());
        }
        function ze(u, l, d) {
          if (l === void 0 || d === void 0) return Fe;
          const f = u.registrations.get(l)?.session_id == d,
            j = u.selections.get(l) == d;
          return f && j ? De : !f && j ? H : f && !j ? ue : Fe;
        }
        function B(u, l, d) {
          if (l === void 0 || d === void 0) return !1;
          const f = !!u.registrations.get(l),
            j = u.selections.get(l) == d,
            R = u.registrations.get(l)?.session_id == u.selections.get(l);
          return f && !j && R;
        }
        function ee(u, l) {
          return l === void 0 ? void 0 : u.registrations.get(l)?.session_id;
        }
        function ye(u) {
          return u.selections.size == 0 && u.registrations.size == 0
            ? !1
            : u.selections.size != u.registrations.size ||
                !Array.from(u.selections.entries()).every(
                  (l) => u.registrations.get(l[0])?.session_id == l[1],
                );
        }
        function Me(u) {
          return Array.from(u.selections.entries()).some((l) => {
            const d = u.registrations.get(l[0]);
            return !d || d.session_id != l[1];
          });
        }
        function Je(u) {
          return u.registrations.size > 0;
        }
        function $e() {
          return Le().bLoading;
        }
        function T() {
          return ye(Le());
        }
        function $() {
          return Je(Le());
        }
        function he(u, l) {
          const d = Le();
          return we(d, u, l);
        }
        function xe(u, l) {
          const d = Le();
          return we(
            d,
            u.filter((f) => !!f.ask_registration_question),
            l,
          );
        }
        function we(u, l, d) {
          return l
            .filter((f) => f.sessions.some((j) => ze(u, f.group_id, j.id) == d))
            .map((f) => f.group_id)
            .filter((f) => f !== void 0);
        }
        function Qe(u, l, d, f) {
          d !== void 0 &&
            u.setQueryData(Se(l.gidClanEvent, l.userAccountID), (j) => {
              const R =
                  u.getQueryData(Ee(l.gidClanEvent, l.userAccountID)) ?? K,
                ae = new Map(j ?? Ge(R));
              return f !== void 0 && f > 0 ? ae.set(d, f) : ae.delete(d), ae;
            });
        }
        function Ce() {
          const u = o.useContext(je),
            l = (0, Ie.jE)(),
            d = Le();
          return o.useCallback(
            (f, j) => {
              if (!u) return;
              const R = ke(d, f) == j;
              Qe(l, u, f, R ? void 0 : j);
            },
            [u, l, d],
          );
        }
        function ut() {
          const u = o.useContext(je),
            l = (0, Ie.jE)(),
            d = Le(),
            { mutateAsync: f } = (0, Te.n)({
              mutationFn: async (j) => {
                if (!u) return !1;
                const R = Object.fromEntries(
                    Object.entries(j).filter(
                      ([Ke]) => !Ke.startsWith("registration_emailed_"),
                    ),
                  ),
                  ae = [];
                for (const [Ke, Xe] of d.selections)
                  ae.push({
                    gid: u.gidClanEvent,
                    group_id: Ke,
                    session_id: Xe,
                    guest_count: j.guests_registered ?? 1,
                    jsondata: JSON.stringify(R),
                    skip_email: !1,
                  });
                for (const Ke of d.registrations.keys())
                  d.selections.has(Ke) ||
                    ae.push({
                      gid: u.gidClanEvent,
                      group_id: Ke,
                      session_id: 0,
                      guest_count: 0,
                      jsondata: JSON.stringify({}),
                      skip_email: !1,
                    });
                let ce = !0;
                for (let Ke = 0; Ke < ae.length; Ke++) {
                  const Xe = await (0, be.kR)({
                    ...ae[Ke],
                    skip_email: Ke != ae.length - 1,
                  });
                  ce = ce && Xe == Y.R;
                }
                return (
                  l.setQueryData(Se(u.gidClanEvent, u.userAccountID), null),
                  await l.invalidateQueries({
                    queryKey: Ee(u.gidClanEvent, u.userAccountID),
                  }),
                  ce
                );
              },
            });
          return f;
        }
        var tt = r(71421),
          Mt = r(36707),
          et = r(92264),
          lt = r(36631),
          yt = r(84346),
          Wt = r(54357);
        const ht =
            /(?<!\\)\[(meetsteamsessiongroup|meetsteamscheduleview)\b([^\]]*)\]/gi,
          ct = /\b(?:group_id|schedule_id)\s*=\s*"?(\d+)/i;
        function qe(u) {
          const l = [];
          for (const d of u.matchAll(ht))
            l.push({
              strTag: d[1].toLowerCase(),
              nID: Number(ct.exec(d[2])?.[1] ?? 0),
            });
          return l;
        }
        function st(u) {
          return qe(u).length > 0;
        }
        function at(u, l) {
          return u === void 0
            ? !0
            : qe(u).find((f) => f.strTag == "meetsteamsessiongroup")?.nID == l;
        }
        function dt(u, l, d) {
          if (u === void 0) return !0;
          const f = qe(u),
            j = f[f.length - 1];
          return j?.strTag == l && j.nID == d;
        }
        const Et = o.createContext(null);
        function It(u) {
          return jsx(Et.Provider, {
            value: u.nVisibilityID ?? null,
            children: u.children,
          });
        }
        function bt() {
          return o.useContext(Et);
        }
        var pt = r(1683),
          Rt = r(93507),
          Ve = r.n(Rt),
          Gt = r(41635);
        const xt = [];
        function kt(u) {
          const {
              eventModel: l,
              fnConfirm: d,
              fnHideModal: f,
              nMaxPerTeam: j,
              bAddingOrChangingSessions: R,
            } = u,
            ae = (0, I.sfN)(v.TS.LANGUAGE),
            [ce, Ke] = o.useState({}),
            [Xe, rt] = o.useState(!1),
            Ze = o.useCallback(
              (ft) => {
                Ke({ ...ce, ...ft });
              },
              [ce],
            ),
            gt = (0, me.mG)(
              l.clanSteamID.GetAccountID(),
              l.GID ?? "",
              v.iA.accountid,
            ),
            { data: Ft } = (0, me.ee)(v.iA.accountid),
            Lt = Ft?.realname ?? "",
            vt = Ft?.email ?? "",
            ot = Ft?.partners ?? xt,
            [At, zt] = o.useState(void 0),
            [mt, Pt] = o.useState(void 0),
            Ht = o.useMemo(() => {
              const ft = [];
              return (
                mt == null &&
                  ft.push({
                    data: void 0,
                    label: (0, t.we)("#MeetSteam_ChoosePartner"),
                  }),
                ft.push(
                  ...ot.map((Ot, Qt) => ({
                    data: Ot.partnerid,
                    label: Ot.partner_name,
                  })),
                ),
                ft.push({
                  data: 0,
                  label: (0, t.we)("#MeetSteam_ChoosePartnerOther"),
                }),
                ft
              );
            }, [ot, mt]);
          o.useEffect(() => {
            if (!gt.isSuccess) return;
            const ft = ot.find((Qt) => Qt.partnerid == gt.data.partner_id),
              Ot = gt.data.partner_id === 0 ? 0 : ft?.partnerid;
            Pt(Ot), zt(Ot), Ke(gt.data);
          }, [gt.isSuccess, gt.data, ot]);
          const Bt = ot?.length > 0,
            Ut = !Bt || mt != null,
            $t = Ut && mt === 0;
          o.useEffect(() => {
            if (mt == At || (zt(mt), !Bt || !Ut)) return;
            let ft;
            const Ot = ot.find((Qt) => Qt.partnerid == mt);
            $t || !Ot
              ? (ft = {
                  name: vt?.length > 0 ? Lt : void 0,
                  email_override: vt?.length > 0 ? vt : void 0,
                  partner_id: 0,
                })
              : (ft = {
                  name:
                    Ot.partneruserrealname?.length > 0
                      ? Ot.partneruserrealname
                      : void 0,
                  company:
                    Ot.partner_name?.length > 0 ? Ot.partner_name : void 0,
                  email_override:
                    Ot.partneruseremail?.length > 0
                      ? Ot.partneruseremail
                      : void 0,
                  partner_id: Ot.partnerid,
                }),
              Object.values(ft).some((Qt) => Qt != null) && Ze(St(ft));
          }, [Ut, $t, Bt, mt, At, ot, vt, Lt, Ze]);
          const mn = gt.isLoading || Xe,
            Fn = R
              ? (0, t.we)(
                  "#MeetSteam_Register_title",
                  l.GetNameWithFallback(ae) ?? "",
                )
              : (0, t.we)("#MeetSteam_Unregister_title"),
            Ln =
              !R ||
              (Ut &&
                !!ce.name &&
                (!ce.guest_names ||
                  ce.guest_names.every((ft) => ft.length > 0)) &&
                !!ce.email_override &&
                !!ce.company);
          return (0, n.jsxs)(b.EN, {
            active: !0,
            children: [
              mn &&
                (0, n.jsx)(b.eV, {
                  "aria-label": Xe
                    ? (0, t.we)("#Saving")
                    : (0, t.we)("#Loading"),
                  bOKDisabled: !0,
                  bHideCloseIcon: !0,
                  onCancel: () => !1,
                  children: (0, n.jsx)(te.t, {
                    size: "medium",
                    position: "center",
                    string: Xe ? (0, t.we)("#Saving") : (0, t.we)("#Loading"),
                  }),
                }),
              !mn &&
                (0, n.jsx)(b.o0, {
                  strTitle: Fn,
                  onCancel: f,
                  bOKDisabled: !Ln,
                  onOK: async () => {
                    rt(!0), await d(ce), rt(!1), gt.refetch(), f();
                  },
                  children:
                    R &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          children: (0, t.we)("#MeetSteam_Reg_Intro"),
                        }),
                        (0, n.jsx)("br", {}),
                        Bt &&
                          (0, n.jsx)(h.m, {
                            label: (0, t.we)("#MeetSteam_Reg_Preset"),
                            tooltip: (0, t.we)("#MeetSteam_Reg_Preset_ttip"),
                            rgOptions: Ht,
                            selectedOption: mt,
                            onChange: (ft) => Pt(ft.data),
                          }),
                        Ut &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(h.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Name"),
                                value: ce.name || "",
                                onChange: (ft) =>
                                  Ze({ name: ft.currentTarget.value }),
                              }),
                              (0, n.jsx)(h.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Email"),
                                value: ce.email_override || "",
                                mustBeEmail: !0,
                                onChange: (ft) =>
                                  Ze({
                                    email_override: ft.currentTarget.value,
                                  }),
                              }),
                              (0, n.jsx)(h.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Company"),
                                value: ce.company || "",
                                onChange: (ft) =>
                                  Ze({ company: ft.currentTarget.value }),
                              }),
                              (0, n.jsx)(h.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Game"),
                                value: ce.game || "",
                                onChange: (ft) =>
                                  Ze({ game: ft.currentTarget.value }),
                              }),
                              j > 0 &&
                                (0, n.jsx)(h.m, {
                                  label: (0, t.we)("#MeetSteam_Reg_GuestCount"),
                                  tooltip: (0, t.we)(
                                    "#MeetSteam_Reg_GuestCount_ttip",
                                  ),
                                  rgOptions: Array.from({ length: j + 1 }).map(
                                    (ft, Ot) => ({ data: Ot, label: Ot }),
                                  ),
                                  selectedOption:
                                    (ce.guests_registered ?? 1) - 1,
                                  onChange: (ft) => {
                                    const Ot = ce.guest_names ?? [];
                                    Ze({
                                      guests_registered: ft.data + 1,
                                      guest_names:
                                        Ot.length > ft.data
                                          ? Ot.slice(0, ft.data)
                                          : Gt.$Y(Ot, ft.data, ""),
                                    });
                                  },
                                }),
                              (ce.guests_registered ?? 0) > 1 &&
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("div", {
                                      children: (0, t.we)(
                                        "#MeetSteam_Reg_Others",
                                      ),
                                    }),
                                    (0, n.jsx)("br", {}),
                                    (ce.guest_names ?? []).map((ft, Ot) =>
                                      (0, n.jsx)(
                                        h.pd,
                                        {
                                          type: "text",
                                          label: (0, t.we)(
                                            "#MeetSteam_Reg_Others_name",
                                          ),
                                          value: ft,
                                          onChange: (Qt) => {
                                            const kn = [
                                              ...(ce.guest_names ?? []),
                                            ];
                                            (kn[Ot] = Qt.currentTarget.value),
                                              Ze({ guest_names: kn });
                                          },
                                        },
                                        "guesname_" + Ot,
                                      ),
                                    ),
                                  ],
                                }),
                              (0, n.jsx)(jt, {
                                eventModel: l,
                                oReg: ce,
                                fnUpdateRegistration: Ze,
                              }),
                            ],
                          }),
                      ],
                    }),
                }),
            ],
          });
        }
        function St(u) {
          return Object.fromEntries(
            Object.entries(u).filter(([l, d]) => d !== void 0),
          );
        }
        function jt(u) {
          const { eventModel: l, oReg: d, fnUpdateRegistration: f } = u,
            j = xe(l.jsondata.meet_steam_groups ?? [], H);
          return !j || j.length == 0
            ? null
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h3", {
                    children: (0, t.we)("#MeetSteam_Reg_Question_title"),
                  }),
                  (0, n.jsx)("p", {
                    children: (0, t.we)("#MeetSteam_Reg_Question_desc"),
                  }),
                  j.map((R) => {
                    const ae = l.jsondata.meet_steam_groups?.find(
                      (ce) => ce.group_id == R,
                    );
                    return ae
                      ? (0, n.jsx)(
                          Nt,
                          {
                            groupInfo: ae,
                            oReg: d,
                            fnUpdateText: (ce) => {
                              let Ke = d.pre_event_partner_questions
                                  ? [...d.pre_event_partner_questions]
                                  : [],
                                Xe = Ke.findIndex((rt) => rt.group_id == R);
                              Xe < 0
                                ? Ke.push({ group_id: R, question: ce })
                                : (Ke[Xe] = { group_id: R, question: ce }),
                                f({ pre_event_partner_questions: Ke });
                            },
                          },
                          "groupquestion" + R,
                        )
                      : null;
                  }),
                ],
              });
        }
        function Nt(u) {
          const { fnUpdateText: l, groupInfo: d, oReg: f } = u,
            j = (0, I.sfN)(v.TS.LANGUAGE),
            [R, ae] = (0, q.q3)(() => [
              t.NT.GetWithFallback(d.localized_session_title, j) ?? "",
              f.pre_event_partner_questions?.find(
                (ce) => ce.group_id == d.group_id,
              )?.question || "",
            ]);
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(h.JU, { children: R }),
              (0, n.jsx)("div", {
                className: "DialogInput_Wrapper",
                children: (0, n.jsx)("textarea", {
                  value: ae,
                  className: (0, Mt.A)(
                    "DialogTextInputBase",
                    "_DialogInputContainer",
                  ),
                  cols: 80,
                  rows: 3,
                  placeholder: (0, t.we)("#MeetSteam_Reg_Question_placeholder"),
                  onChange: (ce) => l(ce.currentTarget.value),
                }),
              }),
            ],
          });
        }
        function wt(u) {
          const l = u.context.event,
            d = u.context.showErrorInfo,
            f = (0, a.j$)(u.args, "group_id"),
            j = Number.parseInt(f),
            R = (0, q.q3)(() => Dt(l, j));
          if (!R || !l)
            return d
              ? (0, n.jsxs)("div", {
                  children: ["Failed to find session group id ", j],
                })
              : null;
          if (l.clanSteamID.GetAccountID() != (0, Re.H)())
            return d
              ? (0, n.jsx)("div", { children: "Only support on special group" })
              : null;
          const ae = at(u.context.bbcode, j),
            ce = dt(u.context.bbcode, "meetsteamsessiongroup", j);
          return (0, n.jsxs)(Ae, {
            clanAccountID: l.clanSteamID.GetAccountID(),
            gidClanEvent: l.GID ?? "",
            userAccountID: v.iA.accountid,
            children: [
              ae && (0, n.jsx)(Z, { eventModel: l }),
              (0, n.jsx)(ie, { groupData: R, eventModel: l }),
              (0, n.jsx)(it, { eventModel: l, bIsLast: ce }),
            ],
          });
        }
        function Z(u) {
          const { eventModel: l } = u;
          return $()
            ? (0, n.jsx)(X, { eventModel: l, accountID: v.iA.accountid })
            : null;
        }
        function X(u) {
          const { eventModel: l, accountID: d } = u,
            f = (0, me.Lc)(l.GID ?? "", d);
          return (0, n.jsx)("div", {
            children:
              !!f &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    children: (0, t.we)("#MeetSteam_QR_CheckIn"),
                  }),
                  (0, n.jsx)("img", { src: f, alt: "" }),
                ],
              }),
          });
        }
        function ie(u) {
          const { groupData: l, eventModel: d } = u,
            f = (0, lt.MU)(),
            j = bt(),
            R = $e(),
            ae = (0, me.my)(d.clanSteamID.GetAccountID(), d.GID ?? ""),
            ce = (0, o.useMemo)(
              () =>
                l?.sessions &&
                [...l.sessions].sort(
                  (mt, Pt) => (mt.rtime_start ?? 0) - (Pt.rtime_start ?? 0),
                ),
              [l?.sessions],
            ),
            { elLogInDialog: Ke, fnRequireLogIn: Xe } = Zt(),
            rt = Le(),
            Ze = (0, q.q3)(() =>
              ce?.reduce(
                (mt, Pt) => mt.set(Pt.id ?? 0, ze(rt, l.group_id, Pt.id)),
                new Map(),
              ),
            ),
            gt = Ce(),
            Ft = (0, me.mG)(
              d.clanSteamID.GetAccountID(),
              d.GID ?? "",
              v.iA.accountid,
            ),
            Lt = Ft.isSuccess && !!Ft.data.allow_registration_if_full,
            vt = ae.data;
          if (ae.isError)
            return (0, n.jsx)("div", {
              children: (0, t.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (!vt || (R && v.iA.accountid))
            return (0, n.jsx)(te.t, {
              size: "medium",
              position: "center",
              string: (0, t.we)("#Loading"),
            });
          const ot = (mt) => gt(l.group_id, mt),
            At = l.group_visibility_tokens ?? [],
            zt = j !== null && At.includes(j);
          return At.length > 0 && !zt && !f
            ? null
            : (0, n.jsxs)(Pe, {
                groupData: l,
                children: [
                  ce?.map((mt, Pt) => {
                    const Ht = vt.find(
                        ($t) =>
                          $t.group_id === l.group_id && $t.session_id === mt.id,
                      ),
                      Bt = Ze?.get(mt.id ?? 0),
                      Ut = Pt + 1 < ce.length;
                    return (0, n.jsxs)(
                      o.Fragment,
                      {
                        children: [
                          (0, n.jsx)("div", {
                            className: Ve().SessionColumnCtn,
                            children: (0, n.jsx)(Ye, {
                              sessionData: mt,
                              onClick: () => Xe(() => ot(mt.id)),
                              nGuestReservations: Ht?.guest_count || 0,
                              eRegistrationStatus: Bt,
                              bAllowedToRegisterIfFull: Lt,
                            }),
                          }),
                          Ut && (0, n.jsx)(nt, {}),
                        ],
                      },
                      "timecol_" + l.group_id + "_" + mt.id,
                    );
                  }),
                  Ke,
                ],
              });
        }
        function Pe(u) {
          const { groupData: l, children: d } = u,
            f = (0, I.sfN)(v.TS.LANGUAGE),
            j = t.NT.GetWithFallback(l?.localized_session_title, f),
            R = t.NT.GetWithFallback(l?.localized_session_description, f),
            ae = t.NT.GetWithFallback(l?.localized_intended_audience, f),
            ce = t.NT.GetWithFallback(l?.localized_sesssion_faq, f),
            Ke = (0, lt.MU)(),
            [Xe, rt] = (0, o.useState)(!1);
          return l
            ? (0, n.jsxs)("div", {
                className: (0, Mt.A)({
                  [Ve().Ctn]: !0,
                  [Ve().CtnRegistered]: !1,
                  [Ve().VisibilityOverride]:
                    Ke && (l.group_visibility_tokens?.length ?? 0) > 0,
                }),
                children: [
                  !!j &&
                    (0, n.jsx)("div", {
                      className: Ve().SessionTitle,
                      children: j,
                    }),
                  !!R &&
                    (0, n.jsx)("div", {
                      className: Ve().SessionDesc,
                      children: R,
                    }),
                  !!ae &&
                    (0, n.jsx)("div", {
                      className: Ve().SessionAudience,
                      children: (0, t.we)(
                        "#MeetSteam_Session_Audience",
                        ae ?? "",
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: Ve().SessionOptions,
                    children: d,
                  }),
                  !!ce &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("div", {
                          className: Ve().ExpanderRow,
                          children: [
                            (0, n.jsx)(ve.c, {
                              bExpanded: Xe,
                              setExpanded: rt,
                            }),
                            (0, n.jsx)("div", {
                              children: (0, t.we)("#MeetSteam_FAQ"),
                            }),
                          ],
                        }),
                        Xe &&
                          (0, n.jsx)("div", {
                            className: Ve().FAQDisplay,
                            children: (0, n.jsx)(pt.Zn, { text: ce ?? "" }),
                          }),
                      ],
                    }),
                ],
              })
            : null;
        }
        function Oe(u, l, d, f) {
          const j = d || (u === Fe && l > 0) || u === De || u === H || u === ue;
          let R = null,
            ae = null;
          return (
            u == De
              ? ((R = (0, t.we)("#MeetSteam_Registered")),
                (ae = Ve().Registered))
              : u == H
                ? ((R = (0, t.we)("#MeetSteam_Registering")),
                  (ae = Ve().Registering))
                : u == ue
                  ? ((R = (0, t.we)("#MeetSteam_Unegistering")),
                    (ae = Ve().Unregistering))
                  : f &&
                    ((R = (0, t.we)("#MeetSteam_Already")),
                    (ae = Ve().RegisteredElsewhere)),
            { bEnabled: j, strStatusClass: ae, strStatusToken: R }
          );
        }
        function Ye(u) {
          const {
              sessionData: l,
              onClick: d,
              nGuestReservations: f,
              eRegistrationStatus: j = Fe,
              bAllowedToRegisterIfFull: R,
            } = u,
            ae = (0, q.q3)(() => l.max_capacity ?? 0),
            ce = Math.max(0, ae - (f || 0)),
            {
              strStatusClass: Ke,
              strStatusToken: Xe,
              bEnabled: rt,
            } = Oe(j, ce, !!R),
            {
              sDisplayTimeZone: Ze,
              rtime_start: gt,
              rtime_end: Ft,
            } = (0, me._t)(l),
            Lt = (0, me.rF)(gt ?? 0, Ze),
            vt = (0, me.Mr)(gt ?? 0, Ft ?? 0, Ze);
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className: (0, Mt.A)(Ve().SessionInstance, Ke),
              children: [
                (0, n.jsx)("div", {
                  className: Ve().StatusText,
                  children: (0, n.jsx)("span", { children: Xe }),
                }),
                (0, n.jsxs)("button", {
                  className: (0, Mt.A)(Ve().Button, Ve().Background),
                  disabled: !rt,
                  onClick: d,
                  children: [
                    (0, n.jsx)("div", { className: Ve().Title, children: Lt }),
                    (0, n.jsx)("div", {
                      className: Ve().TimeFrame,
                      children: vt,
                    }),
                  ],
                }),
                (0, n.jsx)(_e, {
                  nAvailableSpace: ce,
                  bAllowedToRegisterIfFull: R,
                }),
              ],
            }),
          });
        }
        function _e(u) {
          const { nAvailableSpace: l, bAllowedToRegisterIfFull: d } = u;
          return (0, n.jsx)(n.Fragment, {
            children:
              d ||
              (0, n.jsxs)(n.Fragment, {
                children: [
                  " ",
                  l < 1
                    ? (0, n.jsx)("div", {
                        className: Ve().SoldOut,
                        children: (0, t.we)("#MeetSteam_SoldOut"),
                      })
                    : (0, n.jsx)("div", {
                        className: Ve().MaxSize,
                        children: (0, t.Yp)(
                          "#MeetSteam_Spot",
                          l.toLocaleString((0, yt.J)()),
                        ),
                      }),
                  " ",
                ],
              }),
          });
        }
        function nt() {
          return (0, n.jsx)("div", {
            className: Ve().InstanceDivider,
            children: "\u25C6",
          });
        }
        function it(u) {
          const { eventModel: l, bIsLast: d } = u,
            [f, j] = o.useState(!1),
            [R, ae] = o.useState(!1),
            ce = (0, me.my)(l.clanSteamID.GetAccountID(), l.GID ?? ""),
            [Ke, Xe, rt] = (0, S.uD)(),
            { elLogInDialog: Ze, fnRequireLogIn: gt } = Zt(),
            Ft = ut(),
            Lt = async (Bt) => {
              j(!0), (await Ft(Bt)) || Xe(), ce.refetch(), j(!1);
            },
            vt = $e(),
            ot = f || vt,
            At = T(),
            zt = Le(),
            mt = Me(zt),
            Pt = Je(zt),
            Ht = (0, q.q3)(() =>
              Ue(zt).reduce((Bt, Ut) => {
                const $t = Dt(l, Ut),
                  mn = ke(zt, $t?.group_id),
                  Fn =
                    $t?.sessions?.find((Ln) => Ln.id == mn)?.max_per_team ?? 0;
                return Math.max(Bt, Fn);
              }, 1),
            );
          return (
            G(At, (0, t.we)("#EventEditor_UnsavedChanges")),
            (0, n.jsxs)("div", {
              className: (0, Mt.A)(
                Ve().CompleteRegistrationCtn,
                d && At && Ve().Visible,
              ),
              children: [
                (0, n.jsx)("p", {
                  children: Pt
                    ? (0, t.we)("#MeetSteam_UpdateRegistration_Desc")
                    : (0, t.we)("#MeetSteam_CompleteRegistration_Desc"),
                }),
                d &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      !ot &&
                        (0, n.jsx)(h.jn, {
                          disabled: !At,
                          onClick: () => gt(() => ae(!0)),
                          children: Pt
                            ? (0, t.we)("#MeetSteam_UpdateRegistration")
                            : (0, t.we)("#MeetSteam_CompleteRegistration"),
                        }),
                      ot &&
                        (0, n.jsx)(te.t, {
                          size: "small",
                          position: "center",
                          string: (0, t.we)("#Saving"),
                        }),
                      R &&
                        (0, n.jsx)(kt, {
                          eventModel: l,
                          fnConfirm: Lt,
                          fnHideModal: () => ae(!1),
                          nMaxPerTeam: Ht,
                          bAddingOrChangingSessions: mt,
                        }),
                      Ke &&
                        (0, n.jsx)(b.EN, {
                          active: !0,
                          children: (0, n.jsx)(b.Ee, {
                            strTitle: (0, t.we)("#Error_Generic"),
                            strDescription: (0, t.we)(
                              "#MeetSteam_RegistrationFailed",
                            ),
                            closeModal: rt,
                          }),
                        }),
                      Ze,
                    ],
                  }),
              ],
            })
          );
        }
        function Dt(u, l) {
          return (u?.jsondata?.meet_steam_groups || [])?.find(
            (f) => f.group_id == l,
          );
        }
        function Yt(u, l) {
          return (u?.jsondata?.meet_steam_schedules || [])?.find(
            (f) => f.schedule_id == l,
          );
        }
        function Zt() {
          const { elDialogElement: u, fnShowLogonDialog: l } = (0, g.l)(
            (0, t.we)("#EventDisplay_Share_NotLoggedIn_Description"),
          );
          return {
            elLogInDialog: u,
            fnRequireLogIn: (f) => {
              v.iA.logged_in ? f() : l();
            },
          };
        }
        function He(u) {
          const l = u.context.event,
            d = u.context.showErrorInfo,
            f = (0, a.j$)(u.args, "schedule_id"),
            j = Number.parseInt(f),
            R = (0, q.q3)(() => Yt(l, j));
          if (!R || !l)
            return d
              ? (0, n.jsxs)("div", {
                  children: ["Failed to find session schedule id ", j],
                })
              : null;
          if (l.clanSteamID.GetAccountID() != (0, Re.H)())
            return d
              ? (0, n.jsx)("div", { children: "Only support on special group" })
              : null;
          const ae = dt(u.context.bbcode, "meetsteamscheduleview", j);
          return (0, n.jsxs)(Ae, {
            clanAccountID: l.clanSteamID.GetAccountID(),
            gidClanEvent: l.GID ?? "",
            userAccountID: v.iA.accountid,
            children: [
              (0, n.jsx)(e, { scheduleData: R, eventModel: l }),
              (0, n.jsx)(it, { eventModel: l, bIsLast: ae }),
            ],
          });
        }
        function e(u) {
          const { eventModel: l } = u,
            d = Ce(),
            f = $e(),
            j = (0, me.my)(l.clanSteamID.GetAccountID(), l.GID ?? ""),
            R = (0, me.mG)(
              l.clanSteamID.GetAccountID(),
              l.GID ?? "",
              v.iA.accountid,
            ),
            ae = j.data;
          return j.isError
            ? (0, n.jsx)("div", {
                children: (0, t.we)("#Error_ErrorCommunicatingWithNetwork"),
              })
            : !ae || (f && v.iA.accountid)
              ? (0, n.jsx)(te.t, {
                  size: "medium",
                  position: "center",
                  string: (0, t.we)("#Loading"),
                })
              : (0, n.jsx)(i, {
                  ...u,
                  fnOnClick: d,
                  rgAvailability: ae,
                  bAllowedToRegisterIfFull: R.data?.allow_registration_if_full,
                });
        }
        function i(u) {
          const {
              eventModel: l,
              scheduleData: d,
              bAllowedToRegisterIfFull: f,
              fnOnClick: j,
              rgAvailability: R,
            } = u,
            ae = (0, lt.HN)(),
            ce = bt(),
            Ke = (0, Wt.B)(),
            [Xe, rt, Ze] = (0, q.q3)(() => [
              l.jsondata.meet_steam_groups,
              d.in_person_time_zone ?? me.hh,
              d.location_type,
            ]),
            [gt, Ft, Lt] = (0, o.useMemo)(() => {
              if (!Xe) return [new Map(), new Map(), new Array()];
              const vt = new Map(),
                ot = new Map();
              for (const At of Xe) {
                const zt = At.group_visibility_tokens ?? [],
                  mt = ce !== null && zt.includes(ce);
                if (!(zt.length > 0 && !mt && !ae))
                  for (const Pt of At.sessions) {
                    const Bt = (
                      Ze == "in_person"
                        ? E()
                            .unix(Pt.rtime_start ?? 0)
                            .tz(rt)
                        : E()
                            .unix(Pt.rtime_start ?? 0)
                            .tz(Ke)
                    ).format("YYYY-MM-DD");
                    let Ut = vt.get(Bt);
                    Ut || ((Ut = []), vt.set(Bt, Ut)),
                      Ut.push({ group: At, session: Pt });
                  }
              }
              for (const At of d.session_breaks || []) {
                const mt = (
                  Ze == "in_person"
                    ? E()
                        .unix(At.rtime_start ?? 0)
                        .tz(rt)
                    : E()
                        .unix(At.rtime_start ?? 0)
                        .tz(Ke)
                ).format("YYYY-MM-DD");
                let Pt = ot.get(mt);
                Pt || ((Pt = []), ot.set(mt, Pt)), Pt.push(At);
              }
              for (const At of vt.values())
                At.sort(
                  (zt, mt) =>
                    (zt.session.rtime_start ?? 0) -
                    (mt.session.rtime_start ?? 0),
                );
              return [vt, ot, Array.from(vt.keys()).sort()];
            }, [Xe, ce, ae, Ze, rt, Ke, d.session_breaks]);
          return Xe
            ? (0, n.jsx)(n.Fragment, {
                children: Lt.map((vt) => {
                  const ot = gt.get(vt);
                  return (0, n.jsx)(
                    "div",
                    {
                      className: Ve().SingleDayCtn,
                      children: (0, n.jsx)(O, {
                        scheduleData: d,
                        bAllowedToRegisterIfFull: !!f,
                        fnOnClick: j,
                        rgDayGroupSessions: ot ?? [],
                        rgBreakSessions: Ft.get(vt) || [],
                        rgAvailability: R ?? [],
                      }),
                    },
                    "day_" + vt,
                  );
                }),
              })
            : (0, n.jsx)("div", {
                children: "No Meet Steam Events; please create some first.",
              });
        }
        function O(u) {
          const {
              scheduleData: l,
              rgDayGroupSessions: d,
              rgBreakSessions: f,
              bAllowedToRegisterIfFull: j,
              fnOnClick: R,
              rgAvailability: ae,
            } = u,
            ce = (0, o.useMemo)(() => {
              const Ze = [];
              for (const gt of d)
                Ze.length == 0 ||
                Ze[Ze.length - 1][0].session.rtime_start !=
                  gt.session.rtime_start
                  ? Ze.push([gt])
                  : Ze[Ze.length - 1].push(gt);
              return Ze;
            }, [d]),
            { sDisplayTimeZone: Ke, rtime_start: Xe } = (0, me._t)(
              d[0].session,
            ),
            rt = (0, me.rF)(Xe ?? 0, Ke);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("h2", {
                className: Ve().ScheduleTopDate,
                children: rt,
              }),
              f
                .filter(
                  (Ze) =>
                    (Ze.rtime_end ?? 0) <= (ce[0][0].session.rtime_start ?? 0),
                )
                .map((Ze) =>
                  (0, n.jsx)(
                    Xt,
                    { scheduleData: l, breakSession: Ze },
                    `breaks_${l.schedule_id}_${Ze.break_id}`,
                  ),
                ),
              ce.map((Ze, gt) => {
                let Ft = [];
                if (gt + 1 < ce.length) {
                  const Lt = Ze[0].session.rtime_start ?? 0,
                    vt = ce[gt + 1][0].session.rtime_end ?? 0;
                  Ft = f.filter(
                    (ot) =>
                      Lt < (ot.rtime_start ?? 0) && (ot.rtime_end ?? 0) < vt,
                  );
                }
                return (0, n.jsxs)(
                  o.Fragment,
                  {
                    children: [
                      (0, n.jsx)(en, {
                        bAllowedToRegisterIfFull: j,
                        fnOnClick: R,
                        scheduleData: l,
                        rgSlotSessions: Ze,
                        rgAvailability: ae,
                      }),
                      Ft.map((Lt) =>
                        (0, n.jsx)(
                          Xt,
                          { scheduleData: l, breakSession: Lt },
                          `breaks_${l.schedule_id}_${Lt.break_id}`,
                        ),
                      ),
                    ],
                  },
                  "start_" + Ze[0].session.rtime_start,
                );
              }),
              f
                .filter(
                  (Ze) =>
                    (Ze.rtime_start ?? 0) >=
                    (ce[ce.length - 1][0].session.rtime_end ?? 0),
                )
                .map((Ze) =>
                  (0, n.jsx)(
                    Xt,
                    { scheduleData: l, breakSession: Ze },
                    `breaks_${l.schedule_id}_${Ze.break_id}`,
                  ),
                ),
            ],
          });
        }
        function Xt(u) {
          const { scheduleData: l, breakSession: d } = u,
            f = (0, I.sfN)(v.TS.LANGUAGE),
            j = (0, q.q3)(
              () =>
                t.NT.GetWithFallback(d.localized_break_description, f) ?? "",
            ),
            R = (0, q.q3)(() => ({
              rtime_start: d.rtime_start,
              rtime_end: d.rtime_end,
              location_type: l.location_type,
              in_person_time_zone: l.in_person_time_zone,
            }));
          return (0, n.jsxs)("div", {
            className: Ve().ScheduleRow,
            children: [
              (0, n.jsx)(rn, { session: R }),
              (0, n.jsx)("div", { children: j }),
            ],
          });
        }
        function en(u) {
          const {
            scheduleData: l,
            rgSlotSessions: d,
            bAllowedToRegisterIfFull: f,
            fnOnClick: j,
            rgAvailability: R,
          } = u;
          return (0, n.jsxs)("div", {
            className: Ve().ScheduleRow,
            children: [
              (0, n.jsx)(rn, { session: d[0].session }),
              (0, n.jsx)("div", {
                className: Ve().ScheduleSessionsColumn,
                children: d.map((ae) =>
                  (0, n.jsx)(
                    un,
                    {
                      bAllowedToRegisterIfFull: f,
                      fnOnClick: j,
                      session: ae,
                      rgAvailability: R,
                    },
                    `entry_${ae.group.group_id}_${ae.session.id}`,
                  ),
                ),
              }),
            ],
          });
        }
        function rn(u) {
          const { session: l } = u,
            {
              sDisplayTimeZone: d,
              rtime_start: f,
              rtime_end: j,
            } = (0, me._t)(l),
            R = (0, me.rF)(f ?? 0, d),
            ae = (0, me.Mr)(f ?? 0, j ?? 0, d);
          return (0, n.jsxs)("div", {
            className: Ve().ScheduleTimeColumn,
            children: [
              (0, n.jsx)("div", { children: ae }),
              (0, n.jsx)("div", { className: Ve().Timezone, children: R }),
            ],
          });
        }
        function un(u) {
          const {
              session: l,
              bAllowedToRegisterIfFull: d,
              fnOnClick: f,
              rgAvailability: j,
            } = u,
            R = (0, I.sfN)(v.TS.LANGUAGE),
            [ae, ce, Ke, Xe] = (0, q.q3)(() => [
              t.NT.GetWithFallback(l.group.localized_session_title, R) ?? "",
              t.NT.GetWithFallback(l.group.localized_intended_audience, R) ??
                "",
              t.NT.GetWithFallback(l.group.localized_sesssion_faq, R) ?? "",
              t.NT.GetWithFallback(l.group.localized_session_description, R) ??
                "",
            ]),
            [rt, Ze, gt] = (0, S.uD)(!1),
            Ft = Le(),
            [Lt, vt, ot] = (0, q.q3)(() => [
              ze(Ft, l.group.group_id, l.session.id),
              B(Ft, l.group.group_id, l.session.id),
              ee(Ft, l.group.group_id),
            ]),
            At = j?.find(
              (Ut) =>
                Ut.group_id === l.group.group_id &&
                Ut.session_id === l.session.id,
            )?.guest_count,
            zt = Math.max(0, (l.session.max_capacity ?? 0) - (At || 0)),
            {
              strStatusClass: mt,
              strStatusToken: Pt,
              bEnabled: Ht,
            } = Oe(Lt, zt, d, vt),
            Bt =
              vt && ot
                ? l.group.sessions.find((Ut) => Ut.id == ot)?.rtime_start
                : void 0;
          return (0, n.jsx)(tt.Gq, {
            toolTipContent: Bt
              ? (0, t.we)(
                  "#MeetSteam_AlreadyReg",
                  (0, et.TW)(Bt),
                  (0, et.KC)(Bt),
                )
              : void 0,
            children: (0, n.jsxs)("div", {
              className: (0, Mt.A)(Ve().SessionInstance, mt),
              children: [
                (0, n.jsx)("div", {
                  className: Ve().StatusText,
                  children: (0, n.jsx)("span", { children: Pt }),
                }),
                (0, n.jsxs)("div", {
                  className: Ve().Background,
                  children: [
                    (0, n.jsx)("div", {
                      className: Ve().SessionTitle,
                      children: ae,
                    }),
                    ce &&
                      (0, n.jsx)("div", {
                        className: Ve().SessionAudience,
                        children: (0, t.we)("#MeetSteam_Session_Audience", ce),
                      }),
                    (0, n.jsx)("button", {
                      type: "button",
                      className: Ve().SessionInfoLink,
                      onClick: Ze,
                      children: (0, t.we)("#MeetSteam_Session_Details"),
                    }),
                    (0, n.jsx)("div", {
                      className: Ve().ScheduleActionRow,
                      children: (0, n.jsx)(h.$n, {
                        onClick: () => {
                          f && f(l.group.group_id, l.session.id);
                        },
                        disabled: !Ht,
                        children: (0, t.we)(
                          Lt == De ? "#Button_Unselect" : "#Button_Select",
                        ),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(_e, {
                  nAvailableSpace: zt,
                  bAllowedToRegisterIfFull: d,
                }),
                (0, n.jsx)(b.EN, {
                  active: rt,
                  children: (0, n.jsxs)(b.o0, {
                    strTitle: ae,
                    bAlertDialog: !0,
                    bAllowFullSize: !0,
                    closeModal: gt,
                    children: [
                      (0, n.jsx)("div", { children: ce }),
                      (0, n.jsx)("div", { children: Xe }),
                      !!Ke &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              children: (0, t.we)("#MeetSteam_FAQ"),
                            }),
                            (0, n.jsx)(pt.Zn, { text: Ke }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        var cn = r(29522),
          dn = r(40358);
        function gn(u) {
          const l = Number.parseInt((0, a.j$)(u.args, "id")) || 0,
            d =
              ((0, a.j$)(u.args, "visible") || "false").toLowerCase() ===
              "true",
            f = u.context.showErrorInfo,
            j = (0, cn.oc)(l),
            { data: R, isPending: ae } = (0, dn.J$)(j);
          if (!l)
            return f
              ? (0, n.jsx)("div", { children: "Error: PackageID Not Set" })
              : null;
          if (ae) return null;
          const ce =
            R?.success == Y.R
              ? !!(R.visible && R.best_purchase_option)
              : !R?.unvailable_for_country_restriction;
          return (!ce && !d) || (ce && d)
            ? (0, n.jsx)(n.Fragment, { children: u.children })
            : null;
        }
        const fn = /\bid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function zn(u) {
          const l = new Set();
          for (const d of u.matchAll(/\[packagepurchaseable\b([^\]]*)\]/gi)) {
            const f = fn.exec(d[1] ?? ""),
              j = Number.parseInt(f?.[1] ?? f?.[2] ?? f?.[3] ?? "");
            j && l.add(j);
          }
          return Array.from(l);
        }
        var Ct = r(50974),
          yn = r(41735),
          vn = r.n(yn),
          Tt = r(14947),
          hn = r(71742),
          sn = r(67705);
        const tn = 0,
          an = 1,
          pn = 2,
          Vt = 3,
          qt = 4,
          _t = 5,
          Mn = 6,
          ln = 7;
        function En() {
          const u = {
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
            eUploadState: tn,
            uploadProgress: 0,
            strErrorDescription: void 0,
          };
          return (0, Tt.l_)(u, {
            exportFn: !1,
            file: Tt.sH.ref,
            uploadFileName: !1,
            displayFileName: !1,
            sha1: !1,
            hmac: !1,
            timestamp: !1,
            fileInfo: !1,
            uploadInfo: !1,
          });
        }
        class bn {
          m_Callbacks;
          m_fileUploadProps = En();
          m_onComplete;
          constructor(l) {
            (0, Tt.Gn)(this, {
              SetUploadFileError: Tt.XI,
              StartFileExportToUpload: Tt.XI,
              SetImageFileToUpload: Tt.XI,
              SetOtherFileToUpload: Tt.XI,
              SetFileToUpload: Tt.XI,
              RetryFileUpload: Tt.XI,
              BeginFileUpload: Tt.XI,
              DoFileUpload: Tt.XI,
              CommitFileUpload: Tt.XI,
              ClearFileUploadError: Tt.XI,
              Reset: Tt.XI,
            }),
              (this.m_Callbacks = l);
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
          LogFileUploadMessage(l) {
            this.m_Callbacks.LogFileUploadMessage &&
              this.m_Callbacks.LogFileUploadMessage(l);
          }
          SetUploadFileError(l, d) {
            (this.m_fileUploadProps.eUploadState = l),
              (this.m_fileUploadProps.strErrorDescription = d),
              (this.m_fileUploadProps.displayFileName = void 0);
          }
          async StartFileExportToUpload(l, d = {}) {
            const { displayFilename: f, info: j, onComplete: R } = d;
            (this.m_fileUploadProps.eUploadState = ln),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_onComplete = R),
              (this.m_fileUploadProps.fileInfo = j),
              this.SetFileToUpload(l),
              (this.m_fileUploadProps.displayFileName = f);
          }
          async SetImageFileToUpload(l, d = {}) {
            const { processor: f = Sn, info: j } = d;
            if (!l) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = j;
            const R = this.m_Callbacks.GetFileNameOverride?.() ?? l.name;
            if (l.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                qt,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  R,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let ae = [
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
              ce = l.name.split(".").pop()?.toLowerCase() ?? "";
            if (ae.indexOf(ce) == -1) {
              let Xe = ce || R;
              this.SetUploadFileError(
                _t,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatUploadFileTypeNotSupported",
                  Xe,
                ),
              );
              return;
            }
            const Ke = await f(l);
            this.SetFileToUpload(Ke.file),
              (this.m_fileUploadProps.imageHeight = Ke.height),
              (this.m_fileUploadProps.imageWidth = Ke.width);
          }
          async SetOtherFileToUpload(l, d = {}) {
            if (!l) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = d.info;
            const f = this.m_Callbacks.GetFileNameOverride?.() ?? l.name;
            if (l.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                qt,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  f,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let j = ["zip"],
              R = l.name.split(".").pop()?.toLowerCase() ?? "";
            if (j.indexOf(R) == -1) {
              let ae = R || f;
              this.SetUploadFileError(
                _t,
                (0, t.we)("#Chat_Settings_Error_FileTypeNotZip", ae),
              );
              return;
            }
            this.SetFileToUpload(l);
          }
          SetFileToUpload(l) {
            if (
              ((this.m_fileUploadProps.file = void 0),
              (this.m_fileUploadProps.dataURL = void 0),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.sha1 = ""),
              (this.m_fileUploadProps.imageWidth = 0),
              (this.m_fileUploadProps.imageHeight = 0),
              (this.m_fileUploadProps.displayFileName = void 0),
              !l)
            ) {
              this.m_fileUploadProps.eUploadState = tn;
              return;
            }
            let d = "";
            if (typeof l == "function")
              (this.m_fileUploadProps.file = void 0),
                (this.m_fileUploadProps.exportFn = l);
            else {
              (this.m_fileUploadProps.file = l),
                (this.m_fileUploadProps.exportFn = void 0);
              try {
                d = URL.createObjectURL(l);
              } catch (j) {
                console.error(`Failed to created object URL from file: ${j}`);
              }
              (this.m_fileUploadProps.displayFileName =
                this.m_fileUploadProps.file.name),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() +
                  "_" +
                  this.m_fileUploadProps.file.name);
            }
            this.m_fileUploadProps.eUploadState = an;
            let f = "";
            for (; f.length < 40; )
              f += Math.floor(Math.random() * 16).toString(16);
            (this.m_fileUploadProps.dataURL = d),
              (this.m_fileUploadProps.sha1 = f),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.timestamp = 0);
          }
          async RetryFileUpload() {
            return this.BeginFileUpload();
          }
          async BeginFileUpload(l) {
            if (
              ((this.m_fileUploadProps.uploadProgress = 0),
              this.m_fileUploadProps.exportFn)
            ) {
              this.m_fileUploadProps.eUploadState = ln;
              const { eResult: j, file: R } =
                await this.m_fileUploadProps.exportFn((ae) => {
                  (0, Tt.h5)(() => {
                    this.m_fileUploadProps.uploadProgress = ae * 0.5;
                  });
                });
              if (j != Y.R || !R)
                return (
                  this.SetUploadFileError(
                    Vt,
                    (0, t.we)("#Chat_Settings_Error_ExportFailed"),
                  ),
                  new Response()
                );
              (this.m_fileUploadProps.file = R),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() + "_" + R.name);
            }
            let d = this.m_fileUploadProps.file;
            if (!d)
              throw (
                ((0, hn.wT)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload",
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = pn),
              (this.m_fileUploadProps.uploadInfo = l);
            let f = new FormData();
            f.append("sessionid", (0, sn.KC)()),
              f.append("l", v.TS.LANGUAGE),
              f.append("file_size", d.size.toString()),
              f.append("file_name", this.m_fileUploadProps.uploadFileName),
              f.append("file_sha", this.m_fileUploadProps.sha1),
              f.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              f.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              f.append("file_type", d.type),
              this.m_Callbacks.PopulateBeginFileUploadFormData &&
                this.m_Callbacks.PopulateBeginFileUploadFormData(
                  f,
                  this.file_upload_props.uploadInfo,
                  this.file_upload_props.fileInfo,
                );
            try {
              let j = await fetch(
                  this.m_Callbacks.GetBeginFileUploadURL() +
                    `?l=${v.TS.LANGUAGE}`,
                  { method: "POST", body: f, credentials: "include" },
                ),
                R;
              try {
                R = await j.json();
              } catch {}
              if (!j.ok) {
                let ae = "";
                throw (
                  ((0, Tt.h5)(() => {
                    (this.m_fileUploadProps.eUploadState = Vt),
                      this.LogFileUploadMessage(j),
                      R?.message
                        ? (ae = R?.message)
                        : (ae = (0, t.we)("#Chat_Settings_Error_ServerError")),
                      (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                        "#Chat_Upload_ErrorStart",
                        ae,
                      ));
                  }),
                  ae)
                );
              }
              if (!R || !R.result) throw new Error();
              return (
                (this.m_fileUploadProps.timestamp = R.timestamp),
                (this.m_fileUploadProps.hmac = R.hmac),
                this.DoFileUpload(R.result, d)
              );
            } catch (j) {
              let R = j || (0, t.we)("#ConnectionTrouble_FailedToConnect");
              throw (
                ((0, Tt.h5)(() => {
                  (this.m_fileUploadProps.eUploadState = Vt),
                    (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                      "#Chat_Upload_ErrorStart",
                      R,
                    ));
                }),
                R)
              );
            }
          }
          async DoFileUpload(l, d) {
            let f = l.use_https ? "https://" : "http://";
            f += l.url_host + l.url_path;
            const j = {};
            for (const ae of l.request_headers) {
              if (
                ae.name.toLowerCase() == "content-length" ||
                ae.name.toLowerCase() == "host"
              )
                continue;
              let ce = ae.name;
              ce.toLowerCase() === "content-type" && (ce = "Content-Type"),
                (j[ce] = ae.value);
            }
            let R = {
              onUploadProgress: (ae) => {
                const ce = !!this.m_fileUploadProps.exportFn,
                  Ke = ce ? 50 : 0,
                  Xe = ce ? 50 : 100,
                  rt = Ke + (ae.loaded / ae.total) * Xe;
                rt > this.m_fileUploadProps.uploadProgress &&
                  (0, Tt.h5)(() => {
                    this.m_fileUploadProps.uploadProgress = rt;
                  });
              },
              headers: j,
              transformRequest: [(ae) => ae],
            };
            try {
              return (
                await vn().put(f, d, R), this.CommitFileUpload(!0, l.ugcid, d)
              );
            } catch (ae) {
              throw (
                (this.LogFileUploadMessage(ae.response),
                (0, Tt.h5)(() => {
                  (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                    "#Chat_Upload_ErrorCloud",
                  )),
                    (this.m_fileUploadProps.eUploadState = Vt),
                    (this.m_fileUploadProps.uploadProgress = 0);
                }),
                this.CommitFileUpload(!1, l.ugcid, d),
                this.m_fileUploadProps.strErrorDescription)
              );
            }
          }
          async CommitFileUpload(l, d, f) {
            let j = this.m_fileUploadProps.sha1,
              R = new FormData();
            R.append("sessionid", (0, sn.KC)()),
              R.append("l", v.TS.LANGUAGE),
              R.append("file_name", this.m_fileUploadProps.uploadFileName),
              R.append("file_sha", j),
              R.append("success", l ? "1" : "0"),
              R.append("ugcid", d),
              R.append("file_type", f.type),
              R.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              R.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              R.append(
                "timestamp",
                this.m_fileUploadProps.timestamp.toString(),
              ),
              R.append("hmac", this.m_fileUploadProps.hmac),
              this.m_Callbacks.PopulateCommitFileUploadFormData(
                R,
                this.file_upload_props.uploadInfo,
                this.file_upload_props.fileInfo,
              );
            try {
              let ae = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
                method: "POST",
                body: R,
                credentials: "include",
              });
              return (
                l
                  ? ((this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = Mn),
                    this.m_onComplete && this.m_onComplete(Y.R, f.size))
                  : ((this.m_fileUploadProps.eUploadState = Vt),
                    this.m_onComplete && this.m_onComplete(Y.zi, f.size)),
                ae
              );
            } catch (ae) {
              if (!l) return;
              let ce = "";
              throw (
                ((0, Tt.h5)(() => {
                  if (
                    (this.LogFileUploadMessage(ae),
                    (this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = Vt),
                    ae.response)
                  ) {
                    let Ke = ae.response.data,
                      Xe = ae.response.status,
                      rt = Ke && Ke.success;
                    Ke.message
                      ? (ce = Ke.message)
                      : (ce = (0, t.we)("#Chat_Settings_Error_ServerError"));
                  } else ce = (0, t.we)("#ConnectionTrouble_FailedToConnect");
                  (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${ce}`),
                    this.m_onComplete && this.m_onComplete(Y.zi, f.size);
                }),
                ce)
              );
            }
          }
          ClearFileUploadError() {
            (this.m_fileUploadProps.eUploadState != Vt &&
              this.m_fileUploadProps.eUploadState != qt &&
              this.m_fileUploadProps.eUploadState != _t) ||
              this.Reset();
          }
          Reset() {
            this.SetFileToUpload(void 0);
          }
        }
        function Sn(u) {
          return new Promise((l) => {
            let d = new FileReader();
            (d.onload = () => {
              let f = u,
                j = d.result,
                R = wn(j),
                ae = new Blob([R], { type: u.type });
              if (ae) {
                let ce = ae;
                (ce.lastModifiedDate = new Date(u.lastModified)),
                  (ce.name = u.name),
                  (f = ce);
              }
              if (u.type.indexOf("image") == 0) {
                let ce = new Image();
                (ce.src = URL.createObjectURL(u)),
                  (ce.onload = (Ke) => {
                    l({ file: f, width: ce.width, height: ce.height });
                  });
              } else l({ file: f, width: 0, height: 0 });
            }),
              d.readAsArrayBuffer(u);
          });
        }
        function wn(u) {
          let l = new DataView(u),
            d = 0,
            f = 0,
            j = [],
            R = 0;
          if (l.getUint16(d) == 65496) {
            d += 2;
            let ae = l.getUint16(d);
            for (d += 2; d < l.byteLength && d < 131072; ) {
              if (ae == 65505)
                (j[R] = { recess: f, offset: d - 2 }),
                  (f = d + l.getUint16(d)),
                  R++;
              else if (ae == 65498) break;
              (d += l.getUint16(d)), (ae = l.getUint16(d)), (d += 2);
            }
            let ce = u.byteLength - f;
            if (
              (j.forEach((Xe) => {
                ce += Xe.offset - Xe.recess;
              }),
              ce === u.byteLength)
            )
              return u;
            const Ke = new Uint8Array(ce);
            if (j.length > 0) {
              let Xe = 0;
              j.forEach((rt) => {
                let Ze = rt.offset - rt.recess;
                Ke.set(new Uint8Array(u.slice(rt.recess, rt.offset)), Xe),
                  (Xe += Ze);
              }),
                Ke.set(new Uint8Array(u.slice(f)), Xe);
            }
            return Ke.buffer;
          }
          return u;
        }
        var Dn = r(24660),
          nn = r(36118),
          In = r(39362),
          xn = r.n(In);
        function Be(u) {
          const { fileUploadManager: l } = u,
            d = (0, o.useRef)(null);
          return (0, n.jsxs)("div", {
            className: xn().Ctn,
            children: [
              (0, n.jsx)("input", {
                type: "file",
                accept: ".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4",
                style: { display: "none" },
                name: "fileupload",
                ref: d,
                onChange: (f) => {
                  const j = f.currentTarget.files;
                  j?.length &&
                    (l.SetImageFileToUpload(j[0]),
                    (f.currentTarget.value = ""));
                },
              }),
              (0, n.jsx)(Dn.fu, {
                type: "button",
                title: (0, t.we)("#Button_Upload"),
                onOKActionDescription: (0, t.we)("#Button_Upload"),
                onClick: () => d.current?.click(),
                children: (0, n.jsx)(nn.xv8, {}),
              }),
            ],
          });
        }
        var Ne = r(71714),
          We = r.n(Ne);
        function Vn(u) {
          const { fileUploadManager: l } = u,
            d = (0, q.q3)(() => l.file_upload_props.eUploadState);
          return d == an
            ? (0, n.jsx)(Hn, { fileUploadManager: l })
            : d == Vt || d == _t || d == qt
              ? (0, n.jsx)(Qn, { fileUploadManager: l })
              : d != tn
                ? (0, n.jsx)($n, { fileUploadManager: l })
                : null;
        }
        function Hn(u) {
          const { fileUploadManager: l } = u,
            d = l.file;
          return d
            ? (0, n.jsxs)("div", {
                className: We().UploadPreviewContainer,
                children: [
                  d.type.indexOf("image") != -1 &&
                    (0, n.jsx)("img", {
                      className: We().UploadPreview,
                      src: l.file_upload_data_url,
                    }),
                  d.type.indexOf("video") != -1 && (0, n.jsx)(nn.CeX, {}),
                  (0, n.jsxs)("div", {
                    className: We().FileUploadFileName,
                    children: ["'", d.name, "'"],
                  }),
                  (0, n.jsx)("div", {
                    className: We().FileUploadCancel,
                    onClick: () => l.Reset(),
                    children: (0, n.jsx)(nn.sED, {}),
                  }),
                  (0, n.jsx)(h.jn, {
                    className: We().FileUploadBtn,
                    onClick: async () => {
                      await l.BeginFileUpload(), l.Reset();
                    },
                    children: (0, t.we)("#Button_Upload"),
                  }),
                ],
              })
            : null;
        }
        function $n(u) {
          const { fileUploadManager: l } = u,
            [d, f, j] = (0, q.q3)(() => [
              l.file_upload_props.file,
              l.file_upload_props.displayFileName,
              l.file_upload_props.uploadProgress,
            ]),
            R = d ? (0, t.we)("#Uploading_Item", f ?? "") : "",
            ae = { width: j + "%" };
          return (0, n.jsxs)("div", {
            className: We().FileUploadProgressContainer,
            children: [
              (0, n.jsx)("div", {
                className: We().FileUploadProgressName,
                children: R,
              }),
              (0, n.jsx)("div", {
                className: (0, Mt.A)(
                  We().FileUploadProgressBarContainer,
                  "DialogProgressBar_ProgressBarContainer",
                ),
                children: (0, n.jsx)("div", {
                  className: "DialogProgressBar_Value",
                  style: ae,
                }),
              }),
            ],
          });
        }
        function Qn(u) {
          const { fileUploadManager: l } = u,
            [d, f, j] = (0, q.q3)(() => [
              l.file_upload_props.strErrorDescription,
              l.file_upload_props.displayFileName,
              l.file_upload_props.eUploadState,
            ]),
            R = f ? (0, t.we)("#Uploading_Item", f) : "",
            ae = d || (0, t.we)("#Chat_Upload_ErrorCloud");
          return (0, n.jsxs)("div", {
            className: We().FileUploadProgressContainer,
            children: [
              (0, n.jsx)("div", {
                className: We().FileUploadProgressName,
                children: R,
              }),
              (0, n.jsx)("div", {
                className: We().FileUploadErrorDescription,
                children: ae,
              }),
              (0, n.jsx)("div", {
                className: We().FileUploadActions,
                children: (0, n.jsxs)(h.dR, {
                  className: "DialogLayout_NoMinWidth",
                  children: [
                    j == Vt &&
                      (0, n.jsx)(h.jn, {
                        onClick: async () => {
                          await l.RetryFileUpload(), l.Reset();
                        },
                        children: (0, t.we)("#Chat_Upload_ErrorAction_Retry"),
                      }),
                    (0, n.jsx)(h.$n, {
                      onClick: () => l.ClearFileUploadError(),
                      children: (0, t.we)("#Chat_Upload_ErrorAction_Close"),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var jn = r(25792);
        function Yn(u) {
          const { showErrorInfo: l, event: d } = u.context,
            f = d?.clanSteamID.GetAccountID() ?? 0;
          return f == Ct.GU ||
            f == Ct.bv ||
            (v.TS.EUNIVERSE == I.Rv && f == Ct.mW) ||
            (v.TS.EUNIVERSE == I.wLO && f == Ct.Kd)
            ? (0, n.jsx)(jn.tH, {
                children: (0, n.jsx)(Zn, { clanAccountID: f }),
              })
            : l
              ? (0, n.jsx)("div", {
                  children: (0, t.we)("#CloudUpload_NotSupport"),
                })
              : null;
        }
        function Zn(u) {
          const { clanAccountID: l } = u,
            [d] = o.useState(() => new bn(Xn(l)));
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(Be, { fileUploadManager: d }),
              (0, n.jsx)(Vn, { fileUploadManager: d }),
            ],
          });
        }
        function Xn(u) {
          return {
            PopulateBeginFileUploadFormData: (l) => {
              l.append("clan_account_id", "" + u);
            },
            PopulateCommitFileUploadFormData: (l) => {
              l.append("clan_account_id", "" + u);
            },
            GetBeginFileUploadURL: () =>
              v.TS.STORE_BASE_URL + "saleaction/ajaxbeginfileupload",
            GetCommitFileUploadURL: () =>
              v.TS.STORE_BASE_URL + "saleaction/ajaxcommitfileupload",
            LogFileUploadMessage: (l) => {
              console.log("UploadFileButton: ", l);
            },
            GetMaxFileSizeMB: () => 100,
          };
        }
        var Jn = r(86336),
          Cn = r(24642),
          qn = r(16114);
        function Un(u, l, d) {
          const f = _n(u, l);
          return (0, o.useMemo)(() => {
            const j = f.results.find((R) => d == R.unique_id);
            return {
              bLoading: f.bLoading,
              success: f.success,
              userPollData: j,
              error_message: f.error_message,
              userPollSubmitData: f.userPollSubmitData,
            };
          }, [f, d]);
        }
        function _n(u, l) {
          const d = (0, fe.I)({
            queryKey: on(u, l),
            queryFn: async () => {
              const j = await (
                await fetch(Bn(u, l, !1), {
                  method: "GET",
                  credentials: "include",
                })
              ).json();
              return Wn(j);
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
        function er(u, l) {
          const d = (0, Ie.jE)();
          return (0, Te.n)({
            mutationKey: [
              "useSetPartnerEventCastVoteUserPoll",
              u.GetAccountID(),
              l,
            ],
            mutationFn: async (f) => {
              const j = { votes: f.votes },
                R = await fetch(Bn(u, l, !0), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(j),
                  credentials: "include",
                });
              if (!R.ok) throw new Error(`Server returned ${R.status}`);
              return await R.json();
            },
            onSuccess: (f, j) => {
              if (f.success == Y.R) d.setQueryData(on(u, l), () => Wn(f));
              else {
                const R = d.getQueryData(on(u, l));
                if (R) {
                  const ae = {
                    ...R,
                    success: f.success,
                    error_message: f.error_message,
                  };
                  d.setQueryData(on(u, l), () => ae);
                }
              }
            },
          });
        }
        function Wn(u) {
          return {
            ...u,
            bLoading: !1,
            userPollSubmitData: {
              user_poll_option_votes: u.results
                .map((l) => l.voted_option_id)
                .reduce((l, d) => l.concat(d), []),
            },
          };
        }
        function on(u, l) {
          return tr(u.ConvertTo64BitString(), l);
        }
        function tr(u, l) {
          return ["usePartnerEventUserPoll", u, l];
        }
        function Bn(u, l, d) {
          return `${v.TS.COMMUNITY_BASE_URL}partnerevents/${u.ConvertTo64BitString()}/userpoll/${l}/${d ? "ajaxcastvote" : "ajaxloaddata"}/?origin=${encodeURIComponent(location.origin)}`;
        }
        const nr = 1440 * 60;
        function Nn(u, l) {
          let d = 0;
          return (
            l.poll_end_time
              ? (d = l.poll_end_time)
              : (d =
                  (u.rtime32_visibility_start ?? u.rtime32_start_time ?? 0) +
                  (l.poll_end_days_since_start || nr)),
            d
          );
        }
        function rr(u, l) {
          return Nn(u, l) < Math.floor(Date.now() / 1e3);
        }
        var Ir = r(98609);
        const xr = null;
        function jr(u) {
          return `${Config.COMMUNITY_BASE_URL}mediaconvert/ajaxgroupconvert/${u.ConvertTo64BitString()}`;
        }
        var Kn = ((u) => (
            (u.k_EPollResult_NotVisible = "not_visible"),
            (u.k_EPollResult_Visible_After_Vote = "after_vote"),
            (u.k_EPollResult_Visible_After_End = "after_end"),
            (u.k_EPollResult_Visible_After_Vote_Or_End = "after_vote_or_end"),
            (u.k_EPollResult_Visible_On_Demand = "on_demand"),
            u
          ))(Kn || {}),
          ir = ((u) => (
            (u.k_EPollVoter_AnyUser = "any_user"),
            (u.k_EPollVoter_UserGameInLibrary = "user_game_in_library"),
            (u.k_EPollVoter_MinPlayTime = "min_play_time"),
            (u.k_EPollVoter_MemberOfGroup = "member_of_group"),
            u
          ))(ir || {}),
          sr = r(76559),
          ar = r(28515),
          Rn = r(56330),
          lr = r(86959),
          or = r(6365),
          Kt = r.n(or);
        function mr(u) {
          const l = u.context.event,
            d = u.context.showErrorInfo,
            f = (0, a.j$)(u.args, "poll_id"),
            j = Number.parseInt(f),
            R = (0, q.q3)(() => ur(l, j));
          if (!R || !l)
            return d
              ? (0, n.jsx)("div", {
                  className: Rn.ErrorStylesWithIcon,
                  children: (0, t.we)("#UserPolls_Editor_FailToFindModel", j),
                })
              : null;
          const ae = (0, I.sfN)(v.TS.LANGUAGE);
          return (0, n.jsx)(jn.tH, {
            children: (0, n.jsx)(cr, {
              userPollDef: R,
              lang: ae,
              eventModel: l,
            }),
          });
        }
        function ur(u, l) {
          return (
            (u?.jsondata?.user_polls || [])?.find((f) => f.poll_id == l) || null
          );
        }
        function cr(u) {
          const { eventModel: l, userPollDef: d, lang: f } = u,
            { userPollData: j, ...R } = Un(
              l.clanSteamID,
              l.GID || "0",
              d.poll_id,
            ),
            ae = !!(R.error_message && R.error_message?.length > 0),
            ce = er(l.clanSteamID, l.GID || "0"),
            [Ke, Xe] = (0, o.useState)(void 0),
            [rt, Ze] = (0, o.useState)(!1),
            [gt, Ft] = (0, o.useState)(!1),
            Lt = j?.option_results && j?.option_results.length > 0,
            vt = ((j && j.voted_option_id?.length) || 0) > 0;
          return (
            (0, o.useEffect)(() => {
              !gt &&
                d.results_visibility_settings != Kn.k_EPollResult_NotVisible &&
                Lt &&
                (rr(
                  {
                    rtime32_visibility_start:
                      l.GetVisibilityStartTimeAndDateUnixSeconds(),
                    rtime32_start_time: l.GetStartTimeAndDateUnixSeconds(),
                  },
                  d,
                ) ||
                  vt) &&
                Ft(!0);
            }, [Lt, vt, gt, l, d]),
            (0, n.jsxs)(dr, {
              ...u,
              children: [
                d.options?.map((ot) => {
                  const At = j?.option_results.find(
                      (mt) => mt.unique_id == ot.option_id,
                    ),
                    zt =
                      j?.voted_option_id.includes(ot.option_id || 0) ||
                      Ke === ot.option_id;
                  return (0, n.jsx)(
                    gr,
                    {
                      lang: f,
                      pollOptionDef: ot,
                      bSelected: zt,
                      nPercentage: gt ? At?.percent : void 0,
                      onClick: () => Xe(ot.option_id),
                      bDisableSelection:
                        R.bLoading || !j?.vote_permitted || ae || rt || vt,
                    },
                    "polloption" + ot.option_id,
                  );
                }),
                !!Ke &&
                  (0, n.jsx)(h.$n, {
                    onClick: async () => {
                      if (
                        !R.userPollSubmitData.user_poll_option_votes.includes(
                          Ke,
                        )
                      ) {
                        Ze(!0);
                        const ot = {
                          user_poll_option_votes: [
                            ...R.userPollSubmitData.user_poll_option_votes,
                          ],
                        };
                        ot.user_poll_option_votes.push(Ke),
                          await ce.mutateAsync({ votes: ot }),
                          Xe(void 0),
                          Ze(!1);
                      }
                    },
                    children: (0, t.we)("#Button_Submit"),
                  }),
                (rt || R.bLoading) &&
                  (0, n.jsx)(te.t, {
                    size: "small",
                    position: "center",
                    string: R.bLoading ? (0, t.we)("#Loading") : void 0,
                  }),
                Lt &&
                  !vt &&
                  !gt &&
                  (0, n.jsx)(Jn.W, {
                    onClick: () => Ft(!0),
                    children: (0, t.we)("#UserPolls_JustSeeResults"),
                  }),
                ae &&
                  (0, n.jsx)("div", {
                    className: Rn.ErrorStylesWithIcon,
                    children: R.error_message,
                  }),
              ],
            })
          );
        }
        function dr(u) {
          const { userPollDef: l, lang: d, eventModel: f, children: j } = u,
            R = (0, ar.n)(),
            [ae, ce] = (0, q.q3)(() => [
              t.NT.GetWithFallback(l.localized_poll_description, d),
              l.user_poll_background,
            ]);
          let Ke;
          const Xe = f.clanSteamID.GetAccountID();
          ce &&
            (Ke = {
              backgroundImage: `url('${(0, lr.Fk)(Xe, ce)}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            });
          const rt = (0, o.useMemo)(() => sr.b.InitFromClanID(Xe), [Xe]),
            { userPollData: Ze } = Un(rt, f.GID || "0", l.poll_id),
            gt = Nn(
              {
                rtime32_visibility_start:
                  f.GetVisibilityStartTimeAndDateUnixSeconds(),
                rtime32_start_time: f.GetStartTimeAndDateUnixSeconds(),
              },
              l,
            );
          return (0, n.jsx)("div", {
            className: Kt().PollBackground,
            style: Ke,
            children: (0, n.jsxs)("div", {
              className: Kt().PollContainer,
              children: [
                (0, n.jsx)("div", {
                  className: Kt().PollQuestion,
                  children: ae,
                }),
                (0, n.jsx)("div", { className: Kt().PollOptions, children: j }),
                (0, n.jsxs)("div", {
                  className: Kt().PollStatus,
                  children: [
                    (0, n.jsx)("div", {
                      children: (0, t.Yp)(
                        "#UserPolls_status_N_Votes",
                        (0, Cn.D)(Ze?.total_votes || 0),
                      ),
                    }),
                    Ze?.display_message
                      ? (0, n.jsx)("div", { children: Ze?.display_message })
                      : (0, n.jsx)("div", {
                          children: (0, t.PP)(
                            "#UserPolls_status_N_TimeRemaining",
                            (0, qn.R2)(gt - R),
                          ),
                        }),
                  ],
                }),
              ],
            }),
          });
        }
        function gr(u) {
          const {
              pollOptionDef: l,
              onClick: d,
              lang: f,
              bDisableSelection: j,
              bSelected: R,
              nPercentage: ae,
            } = u,
            [ce] = (0, q.q3)(() => [
              t.NT.GetWithFallback(l.localized_option, f),
            ]),
            Ke = Math.round((ae ?? 0) * 100),
            Xe = !j && !!d;
          return (0, n.jsxs)("div", {
            className: (0, Mt.A)({
              [Kt().PollOption]: !0,
              [Kt().Selected]: R,
              [Kt().Disabled]: j,
            }),
            role: "button",
            "aria-pressed": !!R,
            "aria-disabled": !!j,
            tabIndex: Xe ? 0 : void 0,
            onClick: Xe ? d : void 0,
            onKeyDown: Xe
              ? (rt) => {
                  (rt.key === "Enter" || rt.key === " ") &&
                    (rt.preventDefault(), d?.());
                }
              : void 0,
            children: [
              (0, n.jsx)("div", { className: Kt().BackgroundBar }),
              (0, n.jsx)("div", {
                className: Kt().ForegroundBar,
                style: { width: `${Ke}%` },
              }),
              (0, n.jsxs)("div", {
                className: Kt().ContentRow,
                children: [
                  (0, n.jsx)("div", { className: Kt().PollVoteIcon }),
                  ae !== void 0 &&
                    (0, n.jsxs)("div", {
                      className: Kt().PctText,
                      children: [Ke, "%"],
                    }),
                  (0, n.jsx)("span", {
                    className: Kt().OptionText,
                    children: ce,
                  }),
                ],
              }),
            ],
          });
        }
        function Ar(u) {
          return /\[userpolls\b/i.test(u);
        }
        var fr = r(90711),
          yr = r(30985),
          vr = r(30364);
        function hr(u) {
          const { dynamicImport: l, fallback: d, ...f } = u,
            [j] = (0, o.useState)(() =>
              o.lazy(async () => {
                const R = await l();
                return await (0, yr.u)(), { default: R };
              }),
            );
          return (0, n.jsx)(vr.f, {
            fallback: d,
            children: (0, n.jsx)(o.Suspense, {
              fallback: d,
              children: (0, n.jsx)(j, { ...f }),
            }),
          });
        }
        var pr = r(9032),
          Mr = r(11547),
          Er = r(1491);
        const br = (u) => {
          const { vodInfo: l, bLoading: d } = (0, pr.fB)(u.appid);
          return !l && u.bPreviewMode
            ? (0, n.jsx)("div", {
                children: (0, t.we)(
                  d ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading",
                  u.appid,
                ),
              })
            : (0, n.jsx)("div", {
                className: Er.BroadcastCtn,
                children: (0, n.jsx)(jn.tH, {
                  children: (0, n.jsx)(hr, {
                    dynamicImport: async () =>
                      (
                        await Promise.all([
                          r.e(36597),
                          r.e(56589),
                          r.e(85599),
                          r.e(33512),
                          r.e(94781),
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
                    nAppIDVOD: u.appid,
                    watchLocation: fr.nn.TC,
                    bStartPaused: !0,
                  }),
                }),
              });
        };
        function Or(u) {
          const l = new Set();
          for (const d of u.matchAll(/\[vod\b([^\]]*)\]/gi)) {
            const f = k_BBCodeAppIDArgRegExp.exec(d[1] ?? ""),
              j = f ? Number.parseInt(f[1] ?? f[2] ?? f[3] ?? "") : 0;
            j && l.add(j);
          }
          return Array.from(l);
        }
        function Sr(u) {
          const l = (0, Mr.H)(u.args, "appid", 0);
          return (0, n.jsx)(br, {
            appid: l,
            bPreviewMode: !!u.context.showErrorInfo,
          });
        }
        let An = null;
        function wr() {
          return (
            An == null &&
              (An = new Map([
                ["remindme", { Constructor: z, autocloses: !1 }],
                ["vod", { Constructor: Sr, autocloses: !1 }],
                ["giveawayeligible", { Constructor: L, autocloses: !1 }],
                ["claimitem", { Constructor: M, autocloses: !0 }],
                ["packagepurchaseable", { Constructor: gn, autocloses: !1 }],
                ["actiondialog", { Constructor: J, autocloses: !1 }],
                ["uploadfilebutton", { Constructor: Yn, autocloses: !0 }],
                ["userpolls", { Constructor: mr, autocloses: !1 }],
                ["meetsteamsessiongroup", { Constructor: wt, autocloses: !1 }],
                ["meetsteamscheduleview", { Constructor: He, autocloses: !1 }],
              ])),
            An
          );
        }
        let On = null;
        function Gn() {
          return (
            On == null &&
              (On = new Map([
                ...Array.from(wr().entries()),
                ...Array.from(_.entries()),
              ])),
            On
          );
        }
        let Pn = null;
        function Pr() {
          return (
            Pn == null &&
              (Pn = new Map([
                ...Array.from(GetEventBBCodeDisplayDictionary().entries()),
                ...Array.from(Gn().entries()),
              ])),
            Pn
          );
        }
        function Dr(u) {
          return (0, n.jsx)(Tn, { children: (0, n.jsx)(pt.Zn, { ...u }) });
        }
        function Tr(u) {
          return jsx(Tn, { children: jsx(EventBBDisplayElement, { ...u }) });
        }
        function Tn(u) {
          return (0, n.jsx)(pt.d3, { dictionary: Gn(), children: u.children });
        }
      },
      42184: (ge, de, r) => {
        "use strict";
        r.d(de, { v: () => y });
        var n = r(7850),
          x = r(33752),
          a = r(36707),
          s = r(17009),
          t = r.n(s);
        function y(z) {
          return (0, n.jsx)("div", {
            className: (0, a.A)(
              t().AppPartnerEventsBanner,
              "AppPartnerEventsBanner",
            ),
            children: (0, n.jsx)(x.W, { ...z }),
          });
        }
      },
      68988: (ge, de, r) => {
        "use strict";
        r.d(de, { C: () => S });
        var n = r(42277),
          x = r(72604),
          a = r(72609);
        const s = "partnereventaction/myvote",
          t = "partnereventaction/rateevent";
        async function y(h) {
          const b = a.TS.STORE_BASE_URL + s + "?gid=" + encodeURIComponent(h),
            k = await fetch(b, { credentials: "include" });
          if (!k.ok) throw new Error(`${b} answered ${k.status}`);
          return (await k.json()).vote ?? null;
        }
        async function z(h, b, k) {
          const te = a.TS.STORE_BASE_URL + t,
            re = {
              gid: h,
              clanaccountid: String(b),
              voteup: k == "up" ? "1" : "0",
            },
            J = await fetch(te, {
              method: "POST",
              credentials: "include",
              body: new URLSearchParams(re),
            });
          if (!J.ok) throw new Error(`${te} answered ${J.status}`);
          return (await J.json()).success ?? x.zi;
        }
        const V = { GetMyEventVote: y, RateEvent: z };
        var U = r(72849),
          N = r(68312),
          F = r(90626),
          _ = r(71742),
          W = r(67705);
        let A;
        function S(h, b) {
          const k = h?.AnnouncementGID,
            te = h?.clanSteamID.GetAccountID() ?? 0,
            re = v(),
            { myVote: J, Vote: Q } = (0, n.KL)(k, te, re, {
              initialVote: o(k),
              ...b,
            });
          return {
            myVote: J,
            Vote: (m) => {
              !h ||
                !k ||
                m == J ||
                (J && h.UpdateVoteCount(J, -1), h.UpdateVoteCount(m, 1), Q(m));
            },
          };
        }
        function v() {
          const { useActiveCMInterface: h } = (0, N.tc)(),
            b = (0, N.KV)(),
            k = !!h;
          return F.useMemo(
            () =>
              k
                ? {
                    GetMyEventVote: async (te) => await w(b, te),
                    RateEvent: async (te, re, J) => await g(b, te, re, J),
                  }
                : V,
            [k, b],
          );
        }
        async function w(h, b) {
          if (!h) return null;
          const k = await U.BE.GetClanAnnouncementVoteForUser(h, {
            announcementid: b,
          });
          return k.BSuccess()
            ? k.Body().voted_up()
              ? "up"
              : k.Body().voted_down()
                ? "down"
                : null
            : null;
        }
        async function g(h, b, k, te) {
          return h
            ? (
                await U.BE.RateClanAnnouncement(h, {
                  announcementid: b,
                  vote_up: te == "up",
                  clan_accountid: k,
                })
              ).GetEResult()
            : x.Dy;
        }
        function o(h) {
          if (typeof window > "u") {
            (0, _.wT)(!1, "GetVoteFromPageConfig is browser only");
            return;
          }
          return (
            A ||
              ((A = new Map()),
              (0, W.Fd)("uservotes", "application_config")?.forEach((k) => {
                k.clanAnnouncementGID &&
                  A.set(
                    k.clanAnnouncementGID,
                    k.voted_up ? "up" : k.voted_down ? "down" : null,
                  );
              })),
            h ? A.get(h) : void 0
          );
        }
      },
      98144: (ge, de, r) => {
        "use strict";
        r.r(de),
          r.d(de, {
            EventDisplaySteamAwardNomination: () => De,
            UserEligibleToNominateOrVote: () => be,
            WinterSaleSteamAwardVoteWrapper: () => H,
            default: () => ue,
          });
        var n = r(7850),
          x = r(72604),
          a = r(99412),
          s = r(76945),
          t = r(64868),
          y = r(72609),
          z = r(89926),
          V = r(39905),
          U = r(40358),
          N = r(21721),
          F = r(1880),
          _ = r(69168),
          W = r(12247),
          A = r.n(W),
          S = r(95695),
          v = r.n(S),
          w = r(85599),
          g = r(36707);
        function o(K) {
          return `${y.TS.MEDIA_CDN_URL}${s.bs}${K}`;
        }
        function h(K) {
          const {
              strMainTitle: oe,
              subtitle: se,
              headerText: Ee,
              headerContent: Se,
              children: ne,
              footer: le,
            } = K,
            je = {
              backgroundColor: s.TY,
              backgroundImage: `url( ${o("header_notrophy.webp")} )`,
              color: s.m1,
            };
          return (0, n.jsxs)("div", {
            style: je,
            className: (0, g.A)(A().SteamAwardContainer, v().PartnerEventFont),
            children: [
              (0, n.jsxs)("div", {
                className: A().SteamAwardHeader,
                children: [
                  (0, n.jsx)("img", {
                    className: A().SteamAwardHeaderImage,
                    src: o("trophy_220.png?v=1"),
                    alt: "",
                  }),
                  (0, n.jsxs)("div", {
                    className: A().SteamAwardMainCtn,
                    children: [
                      (0, n.jsx)("div", {
                        className: A().SteamAwardMainTitle,
                        children: oe,
                      }),
                      se,
                      (0, n.jsx)("div", {
                        className: A().SteamAwardHeaderText,
                        children: Ee,
                      }),
                      Se,
                    ],
                  }),
                ],
              }),
              ne,
              !!le &&
                (0, n.jsx)("div", {
                  className: A().SteamAwardLinkToNominationPage,
                  children: le,
                }),
            ],
          });
        }
        function b(K) {
          return `${y.TS.STORE_BASE_URL}steamawards/${K ? "nominations/" : ""}`;
        }
        function k() {
          return (0, n.jsx)(w.t, {
            className: A().SteamAwardContainer,
            size: "medium",
            position: "center",
            string: V.Z.Localize("#Loading"),
          });
        }
        function te(K) {
          const { elDialogElement: oe, fnShowLogonDialog: se } = (0, z.l)(),
            [Ee, Se, ne] = (0, t.uD)();
          return {
            elDialogElement: (0, n.jsxs)(n.Fragment, {
              children: [
                oe,
                (0, n.jsx)(_.E, {
                  active: Ee,
                  children: (0, n.jsx)(re, { bVote: K, closeModal: ne }),
                }),
              ],
            }),
            BCanTakeAction: () =>
              y.iA.logged_in ? (y.iA.is_limited ? (Se(), !1) : !0) : (se(), !1),
          };
        }
        function re(K) {
          const { bVote: oe, closeModal: se } = K;
          return (0, n.jsx)(F.o0, {
            strTitle: V.Z.Localize("#Informational_Message"),
            onCancel: se,
            onOK: se,
            bAlertDialog: !0,
            children: (0, n.jsx)("div", {
              children: V.Z.LocalizeReact(
                oe
                  ? "#SteamAward_Vote_LimitedAccount"
                  : "#SteamAward_Nominate_LimitedAccount",
                (0, n.jsx)("a", {
                  href: `${y.TS.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
                  target: y.TS.IN_CLIENT ? void 0 : "_blank",
                  rel: "noreferrer",
                  children: V.Z.Localize("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        }
        function J(K) {
          const {
              strLocTokenInfix: oe,
              unCurrentAppID: se,
              unNewAppID: Ee,
              fnOnConfirm: Se,
              closeModal: ne,
            } = K,
            { data: le } = (0, U.J$)({ appid: se }),
            { data: je } = (0, U.J$)({ appid: Ee }),
            { data: Ae } = (0, U.lv)({ appid: se }),
            { data: Le } = (0, U.lv)({ appid: Ee }),
            Ge = Ae ? (0, N.b0)(Ae, "small_capsule") : void 0,
            ke = Le ? (0, N.b0)(Le, "small_capsule") : void 0;
          return (0, n.jsx)(F.o0, {
            modalClassName: A().SteamAwardConflictModal,
            strTitle: V.Z.Localize(
              oe == "Vote"
                ? "#SteamAward_VoteConflictWarning_Title"
                : "#SteamAward_NominationConflictWarning_Title",
            ),
            closeModal: ne,
            onOK: Se,
            onCancel: ne,
            children: (0, n.jsxs)("div", {
              className: A().ConflictBody,
              children: [
                V.Z.LocalizeReact(
                  oe == "Vote"
                    ? "#SteamAward_VoteConflictWarning_Explanation"
                    : "#SteamAward_NominationConflictWarning_Explanation",
                  (0, n.jsx)("span", {
                    className: A().SteamAwardModalGameTitle,
                    children: le?.name,
                  }),
                  (0, n.jsx)("span", {
                    className: A().SteamAwardModalGameTitle,
                    children: je?.name,
                  }),
                ),
                Ge && ke
                  ? (0, n.jsxs)("div", {
                      className: A().NominationSwitchCtn,
                      children: [
                        (0, n.jsx)("img", { src: Ge, alt: "" }),
                        "\u2192",
                        (0, n.jsx)("img", { src: ke, alt: "" }),
                      ],
                    })
                  : (0, n.jsx)(w.t, {
                      size: "small",
                      position: "center",
                      string: V.Z.Localize("#Loading"),
                    }),
              ],
            }),
          });
        }
        var Q = r(16412),
          c = r(53113);
        function m(K) {
          const {
              unAppID: oe,
              widget: se,
              actions: Ee,
              bNominationsOpen: Se,
            } = K,
            ne = se.rgCategories[0],
            { data: le } = (0, U.J$)({ appid: oe }),
            {
              unNominatedAppID: je,
              bAnswered: Ae,
              Nominate: Le,
            } = (0, s.Xx)(ne.eCategoryID, Ee),
            { elDialogElement: Ge, BCanTakeAction: ke } = te(!1),
            [Ue, ze, B] = (0, t.uD)();
          if (!se.bNominationsLive) return null;
          if (!Ae) return (0, n.jsx)(k, {});
          const ee = (0, c.NT)(b(!0)),
            ye = je == oe,
            Me = se.rgCategories.length == 1,
            Je = Se && !ne.bLaborOfLove,
            $e = (T) => {
              if (!(!T || !ke())) {
                if (je && je != oe) {
                  ze();
                  return;
                }
                Le(oe);
              }
            };
          return (0, n.jsxs)(h, {
            strMainTitle: V.Z.Localize("#SteamAwards_EventMainTitle"),
            subtitle: (0, n.jsxs)("div", {
              className: A().SteamAwardSubTitle,
              children: [
                Se
                  ? V.Z.Localize("#SteamAwards_EventCallToAction")
                  : V.Z.Localize(
                      "#SteamAwards_EventVotingDateTeaser",
                      (0, s.xh)(),
                    ),
                Se &&
                  (0, n.jsxs)("a", {
                    href: ee,
                    className: A().SteamAwardLearnMore,
                    children: [
                      "(",
                      V.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
                      ")",
                    ],
                  }),
              ],
            }),
            headerText: Se
              ? Me
                ? V.Z.Localize(
                    "#SteamAwards_EventNominateGamePrompt_Long",
                    le?.name ?? "",
                  )
                : (0, n.jsx)("a", {
                    className: A().LinkText,
                    href: ee,
                    children: V.Z.Localize(
                      "#SteamAwards_EventNominateGamePrompt_NoCategory",
                      le?.name ?? "",
                    ),
                  })
              : V.Z.Localize("#SteamAwards_Event_NominationsClosed"),
            footer:
              Je &&
              (0, n.jsx)("a", {
                href: ee,
                children: V.Z.Localize(
                  "#SteamAwards_EventNominationAlternativeLinkText",
                ),
              }),
            children: [
              !!(Me && (Se || ye)) &&
                (0, n.jsx)("div", {
                  className: (0, g.A)(
                    A().SteamAwardNominationWidget,
                    A().SteamAwardVoteWidget,
                  ),
                  children: (0, n.jsxs)("div", {
                    className: A().NominateCtn,
                    children: [
                      (0, n.jsx)("div", {
                        style: { background: s.Hu },
                        className: (0, g.A)(
                          A().SteamAwardNominateButton,
                          ye && A().Nominated,
                        ),
                        children: (0, n.jsx)(Q.Yh, {
                          controlled: !0,
                          className: (0, g.A)(
                            A().SteamAwardVoteCheckBox,
                            ye && A().Nominated,
                          ),
                          checked: ye,
                          onChange: $e,
                          disabled: ye,
                          color: "#FFFFFF",
                          highlightColor: "white",
                          label: (0, n.jsx)("div", {
                            className: A().SteamAwardCategoryTitle,
                            children: V.Z.Localize(
                              ye
                                ? "#SteamAwards_NominateWidget_CTA_PastTense"
                                : "#SteamAwards_NominateWidget_CTA",
                              ne.strTitle,
                            ),
                          }),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: A().SteamAwardCategoryDesc,
                        children: ne.strDescription,
                      }),
                    ],
                  }),
                }),
              Ge,
              (0, n.jsx)(_.E, {
                active: Ue,
                children: (0, n.jsx)(J, {
                  strLocTokenInfix: "Nomination",
                  unCurrentAppID: je,
                  unNewAppID: oe,
                  fnOnConfirm: () => Le(oe),
                  closeModal: B,
                }),
              }),
            ],
          });
        }
        function M(K) {
          const {
              unAppID: oe,
              widget: se,
              actions: Ee,
              bVotesOpen: Se,
              bHideCategoryDescriptions: ne,
            } = K,
            { data: le } = (0, U.J$)({ appid: oe }),
            je = (0, c.NT)(b(!1));
          return (0, n.jsx)(h, {
            strMainTitle: V.Z.Localize("#SteamAwards_EventMainTitleCombined"),
            headerText: Se
              ? V.Z.Localize(
                  "#SteamAwards_EventVoteForGamePrompt",
                  le?.name ?? "",
                )
              : (0, n.jsx)("a", {
                  href: je,
                  className: A().LinkText,
                  children: V.Z.Localize("#SteamAwards_Event_VotesClosed"),
                }),
            headerContent: (0, n.jsx)("div", {
              className: A().AwardCategoriesCtn,
              children: se.rgCategories.map((Ae) =>
                (0, n.jsx)(
                  p,
                  {
                    unAppID: oe,
                    category: Ae,
                    actions: Ee,
                    bVotesOpen: Se,
                    bHideDescription: ne,
                  },
                  Ae.eCategoryID,
                ),
              ),
            }),
            footer: (0, n.jsx)("a", {
              href: je,
              children: V.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
            }),
          });
        }
        function p(K) {
          const {
              unAppID: oe,
              category: se,
              actions: Ee,
              bVotesOpen: Se,
              bHideDescription: ne,
            } = K,
            {
              unVotedAppID: le,
              bAnswered: je,
              Vote: Ae,
            } = (0, s.VV)(se.eCategoryID, Ee),
            { elDialogElement: Le, BCanTakeAction: Ge } = te(!0),
            [ke, Ue, ze] = (0, t.uD)(),
            B = le == oe;
          if (!Se && !B) return null;
          const ee = () => {
            if (!(!je || !Ge())) {
              if (le && le != oe) {
                Ue();
                return;
              }
              Ae(oe);
            }
          };
          return (0, n.jsxs)("div", {
            style: { backgroundColor: s.Hu },
            className: A().SteamAwardVoteWidget,
            children: [
              (0, n.jsxs)("div", {
                className: A().SteamAwardVoteButtonArea,
                children: [
                  (0, n.jsx)("div", {
                    className: (0, g.A)(
                      A().SteamAwardCategoryTitle,
                      A().VotingTitle,
                    ),
                    children: se.strTitle,
                  }),
                  !ne &&
                    (0, n.jsx)("div", {
                      className: A().SteamAwardCategoryDesc,
                      children: se.strDescription,
                    }),
                  B
                    ? (0, n.jsx)("button", {
                        className: A().SteamAwardVoteButtonSubmitted,
                        children: (0, n.jsx)("span", {
                          className: A().SteamAwardVoteButtonText,
                          children: V.Z.Localize(
                            "#SteamAward_VoteButton_VotedText",
                          ),
                        }),
                      })
                    : (0, n.jsx)("button", {
                        className: A().SteamAwardVoteButton,
                        onClick: ee,
                        children: (0, n.jsx)("span", {
                          className: A().SteamAwardVoteButtonText,
                          children: V.Z.Localize(
                            "#SteamAward_VoteButton_PromptText",
                          ),
                        }),
                      }),
                ],
              }),
              Le,
              (0, n.jsx)(_.E, {
                active: ke,
                children: (0, n.jsx)(J, {
                  strLocTokenInfix: "Vote",
                  unCurrentAppID: le,
                  unNewAppID: oe,
                  fnOnConfirm: () => Ae(oe),
                  closeModal: ze,
                }),
              }),
            ],
          });
        }
        var L = r(68312),
          P = r(34041),
          D = r(65946),
          I = r(90626),
          C = r(76035),
          G = r(28515),
          q = r(18210),
          pe = r(3166),
          E = r(96538),
          ve = r(88003),
          me = r(85385),
          Y = r(47875);
        function be(K) {
          return pe.iA.logged_in
            ? pe.iA.is_limited
              ? ((0, ve.pg)(
                  (0, n.jsx)(me.g, {
                    strTokenOverride: K
                      ? "#SteamAward_Vote_LimitedAccount"
                      : "#SteamAward_Nominate_LimitedAccount",
                  }),
                  window,
                ),
                !1)
              : !0
            : ((0, ve.pg)(
                (0, n.jsx)(E.o0, {
                  strTitle: (0, q.we)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: (0, q.we)(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: (0, q.we)("#MobileLogin_SignIn"),
                  onOK: Y.l,
                }),
                window,
              ),
              !1);
        }
        function fe(K) {
          const oe = (0, L.KV)();
          return (0, I.useMemo)(
            () => ({
              GetMySteamAwardNominations: () => (0, C.kr)(oe),
              NominateForSteamAward: async (se, Ee) => {
                if (K) return x.R;
                const [Se] = await (0, C.N2)(oe, se, Ee, P.Ji.mP);
                return Se;
              },
              GetMySteamAwardVotes: () => (0, C.QS)(oe, s.sK),
              SetSteamAwardVote: async (se, Ee) => {
                if (K) return x.R;
                const [Se] = await (0, C.rv)(oe, se, Ee, s.sK);
                return Se;
              },
            }),
            [oe, K],
          );
        }
        const Ie = [];
        function Te(K, oe, se) {
          const Ee = K.some(s.aS) || oe.some(s.aS),
            Se = (0, C.Jo)(Ee ? s.sK : void 0);
          return Ee
            ? Se.data
              ? {
                  widgets: (0, s.$G)(Se.data.votes ?? [], K, oe, se),
                  bLoading: !1,
                }
              : { bLoading: Se.isPending }
            : { bLoading: !1 };
        }
        function Re(K, oe) {
          return oe ? { ...K, bNominationsLive: !0 } : K;
        }
        function Fe(K) {
          return !!K && pe.TS.EUNIVERSE == a.wLO;
        }
        function De(K) {
          const { event: oe, previewMode: se } = K,
            [Ee, Se] = (0, D.q3)(() => [oe.GetSteamAwardCategory(), oe.appid]),
            ne = (0, G.n)(),
            { widgets: le, bLoading: je } = Te([Ee], Ie, ne),
            Ae = fe(Fe(se));
          if (je) return (0, n.jsx)(k, {});
          if (!le?.nomination) return null;
          const Le =
            oe.BIsEventActionEnabled(ne) ||
            ne < oe.GetStartTimeAndDateUnixSeconds();
          return (0, n.jsx)(m, {
            unAppID: Se,
            actions: Ae,
            widget: Re(le.nomination, !!se),
            bNominationsOpen: Le,
          });
        }
        function H(K) {
          const {
              appID: oe,
              voteCategories: se,
              bIsEventActionEnabled: Ee,
              previewMode: Se,
              bRenderFromStorePage: ne,
            } = K,
            le = (0, G.n)(),
            { widgets: je, bLoading: Ae } = Te(Ie, se ?? Ie, le),
            Le = fe(Fe(Se));
          return Ae
            ? (0, n.jsx)(k, {})
            : je?.vote
              ? (0, n.jsx)(M, {
                  unAppID: oe,
                  widget: je.vote,
                  actions: Le,
                  bVotesOpen: Ee || !!Se,
                  bHideCategoryDescriptions: ne,
                })
              : null;
        }
        function ue(K) {
          const oe = (0, pe.Tc)(
            "steamwawards",
            "application_config",
          )?.votecategories;
          return oe
            ? (0, n.jsx)(H, {
                appID: K.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: oe,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${K.appID}`,
              ),
              null);
        }
      },
      79590: (ge, de, r) => {
        "use strict";
        r.d(de, { m: () => A });
        var n = r(7850),
          x = r(99412),
          a = r(29630),
          s = r(72609),
          t = r(90626),
          y = r(48421),
          z = r(60480),
          V = r(36707),
          U = r(18210),
          N = r(53113),
          F = r(20193);
        function _(S) {
          const { gidEvent: v } = S,
            w = usePartnerEventByEventGID(v);
          return w
            ? jsx(W, {
                event: w,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(w) ?? ""),
              })
            : null;
        }
        function W(S) {
          const { event: v, lang: w, href: g } = S,
            [o, h] = (0, t.useMemo)(() => {
              const b = v.jsondata.localized_sale_product_banner,
                k = v.jsondata.localized_sale_product_mobile_banner;
              if (b?.length && k?.length) {
                const te = U.NT.GetWithFallback(b, w),
                  re = U.NT.GetWithFallback(k, w);
                if (te?.length && re?.length)
                  return [
                    a.zU.GenerateURLFromHashAndExt(v.clanSteamID, te),
                    a.zU.GenerateURLFromHashAndExt(v.clanSteamID, re),
                  ];
              }
              return [void 0, void 0];
            }, [v, w]);
          return !o?.length || !h?.length
            ? null
            : (0, n.jsxs)("a", {
                href: g,
                className: F.Link,
                children: [
                  (0, n.jsx)("img", {
                    src: o,
                    className: (0, V.A)(F.Banner, F.Big),
                    alt: v.GetNameWithFallback(w),
                  }),
                  (0, n.jsx)("img", {
                    src: h,
                    className: (0, V.A)(F.Banner, F.Mobile),
                    alt: v.GetNameWithFallback(w),
                  }),
                ],
              });
        }
        function A(S) {
          const { gidEvent: v } = S,
            w = (0, y.RR)(v);
          return w
            ? (0, n.jsx)(W, {
                event: w,
                lang: (0, x.sfN)(s.TS.LANGUAGE),
                href: (0, N.k2)((0, z.n4)(w) ?? ""),
              })
            : null;
        }
      },
      18057: (ge, de, r) => {
        "use strict";
        r.d(de, {
          K4: () => o,
          gS: () => h,
          pg: () => S,
          u1: () => k,
          v9: () => b,
          yi: () => v,
        });
        var n = r(7850),
          x = r(90626),
          a = r(71421),
          s = r(18210),
          t = r(75844),
          y = r(36707),
          z = r(36174),
          V = r(55351),
          U = r.n(V),
          N = r(7582),
          F = r(28515),
          _ = r(54357),
          W = r(87937),
          A = r.n(W);
        function S(J, Q) {
          const m = Q ?? A().tz.guess(),
            M = A().unix(J).tz(m),
            p = (0, s.l4)();
          return p && M.locale(p), M.format("LT");
        }
        function v(J, Q, c) {
          const M = c ?? A().tz.guess(),
            p = A().unix(J).tz(M),
            L = (0, s.l4)();
          return (
            L && p.locale(L),
            (0, n.jsxs)(x.Fragment, {
              children: [
                p.format("LT"),
                Q
                  ? (0, n.jsx)(a.Gq, {
                      toolTipContent: p.format("Z") + ", " + M,
                      children: (0, n.jsxs)("span", {
                        children: ["\xA0", p.zoneAbbr()],
                      }),
                    })
                  : null,
              ],
            })
          );
        }
        function w(J, Q, c) {
          return (0, s.TW)(J, {
            weekday: "short",
            year: c ? void 0 : "numeric",
            timeZone: Q,
          });
        }
        function g(J, Q, c, m) {
          return A().unix(J).tz(c).isSame(A().unix(Q).tz(c), m);
        }
        const o = (0, t.PA)((J) => {
            const {
                dateAndTime: Q,
                bSingleLine: c,
                bOnlyTime: m,
                bOnlyDate: M,
              } = J,
              p = (0, _.B)(),
              L = !m && !!Q,
              P = !M && !!Q,
              D = L && w(Q, p),
              I = J.stylesmodule ? { ...U(), ...J.stylesmodule } : U();
            return c
              ? (0, n.jsxs)("span", {
                  className: m || M ? I.DateAndTimeInline : I.DateAndTime,
                  children: [
                    L && D,
                    L && P ? (0, n.jsx)("span", { children: "\xA0" }) : void 0,
                    !!(Q && P) && v(Q, P, p),
                  ],
                })
              : (0, n.jsxs)("div", {
                  className: I.DateAndTime,
                  children: [
                    L &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: I.LocalizedDate,
                            children: D,
                          }),
                          " ",
                          (0, n.jsx)("span", {
                            className: I.At,
                            children: (0, s.we)(
                              "#EventDisplay_DateAndTimeCombiner",
                            ),
                          }),
                        ],
                      }),
                    (0, n.jsx)("div", {
                      className: I.LocalizedTime,
                      children: !!(Q && P) && v(Q, P, p),
                    }),
                  ],
                });
          }),
          h = (J) => {
            const Q = (0, n.jsx)("div", {
              className: J.stylesmodule?.DateToolTip,
              children: (0, n.jsx)(o, {
                dateAndTime: J.rtFullDate,
                bSingleLine: !0,
                stylesmodule: J.stylesmodule,
              }),
            });
            return (0, n.jsx)(a.m9, {
              toolTipContent: Q,
              direction: "top",
              className: J.className,
              bTopmost: !0,
              children: J.children,
            });
          },
          b = (0, t.PA)((J) => {
            const { startDateAndTime: Q, endDateAndTime: c = 0 } = J,
              m = J.stylesmodule ? { ...U(), ...J.stylesmodule } : U(),
              M = (0, _.B)(),
              p = (0, F.n)(),
              L =
                J.bHideEndTime ||
                J.endDateAndTime == null ||
                J.endDateAndTime < 1;
            if (Q == null || Q == 0)
              return (0, n.jsxs)("div", {
                className: m.DateAndTime,
                children: [
                  (0, n.jsx)("span", {
                    className: m.RightSideTitles,
                    children: (0, s.we)("#EventDisplay_TimeRange"),
                  }),
                  (0, s.we)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            if (L)
              return (0, n.jsxs)("div", {
                className: m.StartDate,
                children: [
                  (0, n.jsxs)("div", {
                    className: m.RightSideTitles,
                    children: [
                      (0, s.we)(
                        Q < p
                          ? "#EventDisplay_TimeInPast"
                          : "#EventDisplay_TimeUpcoming",
                      ),
                      "\xA0",
                    ],
                  }),
                  (0, n.jsx)(o, { stylesmodule: m, dateAndTime: Q }),
                ],
              });
            const P = Q <= p && p <= c,
              D = g(Q, c, M, "day");
            return (0, n.jsxs)("div", {
              className: m.MultiDateAndTime,
              children: [
                (0, n.jsxs)("div", {
                  className: m.StartDate,
                  children: [
                    (0, n.jsx)("span", {
                      className: m.RightSideTitles,
                      children: (0, s.we)(
                        Q >= p
                          ? "#EventDisplay_TimeBeginsOn"
                          : c >= p
                            ? "#EventDisplay_TimeBeginsOn_Past"
                            : "#EventDisplay_TimeBeginsOn_StartAndEnd_Past",
                      ),
                    }),
                    (0, n.jsx)(o, {
                      stylesmodule: m,
                      bSingleLine: !0,
                      dateAndTime: Q,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: m.EndDate,
                  children: [
                    (0, n.jsx)("span", {
                      className: m.RightSideTitles,
                      children: (0, s.we)(
                        c < p
                          ? "#EventDisplay_TimeEndsOn_Past"
                          : "#EventDisplay_TimeEndsOn",
                      ),
                    }),
                    (0, n.jsx)(o, {
                      stylesmodule: m,
                      bSingleLine: !0,
                      bOnlyTime: D,
                      dateAndTime: c,
                    }),
                  ],
                }),
                P &&
                  (0, n.jsx)("span", {
                    className: m.ActiveEvent,
                    children: (0, n.jsx)("span", {
                      className: (0, y.A)(
                        m.RightSideTitles,
                        m.ActiveEventCallOut,
                      ),
                      children: (0, s.we)("#Time_Now"),
                    }),
                  }),
              ],
            });
          }),
          k = (0, t.PA)((J) => {
            const {
                startDateAndTime: Q,
                endDateAndTime: c,
                bHideEndTime: m,
              } = J,
              M = J.stylesmodule ? { ...U(), ...J.stylesmodule } : U(),
              p = (0, _.B)(),
              L = (0, F.n)();
            if (Q == null || Q == 0)
              return (0, n.jsxs)("div", {
                className: M.DateAndTime,
                children: [
                  (0, n.jsx)("span", {
                    className: M.RightSideTitles,
                    children: (0, s.we)("#EventDisplay_TimeRange"),
                  }),
                  (0, s.we)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            const P = g(Q, L, p, "year"),
              D = (0, n.jsx)("div", {
                className: M.ShortDateAndTime,
                children: w(Q, p, P),
              });
            let I = (0, n.jsxs)(h, {
              rtFullDate: Q,
              stylesmodule: M,
              children: [
                (0, n.jsx)("div", {
                  className: M.RightSideTitles,
                  children: (0, s.we)(
                    Q < L
                      ? "#EventDisplay_TimeInPast"
                      : "#EventDisplay_TimeUpcoming",
                  ),
                }),
                D,
              ],
            });
            if (
              (L < Q &&
                Q < L + z.Kp.PerWeek &&
                (I = (0, n.jsx)(h, {
                  rtFullDate: Q,
                  stylesmodule: M,
                  children: (0, n.jsx)("div", {
                    className: M.RightSideTitles,
                    children: (0, s.PP)(
                      "#EventDisplay_EventUpcoming_WithDateAndTime",
                      D,
                      (0, n.jsxs)("div", {
                        className: M.ShortDateAndTime,
                        children: [v(Q, !1, p), " "],
                      }),
                    ),
                  }),
                })),
              m || c == null || c < 1)
            )
              return I;
            const C = Q <= L && L <= c;
            C &&
              (I = (0, n.jsx)(h, {
                rtFullDate: Q,
                className: M.ActiveEvent,
                stylesmodule: M,
                children: (0, n.jsx)("span", {
                  className: M.ActiveEventCallOut,
                  children: (0, s.we)("#Time_Now"),
                }),
              }));
            let G = null;
            const q = C ? c - L : c - Q;
            if (q <= z.Kp.PerDay) {
              const E = (0, n.jsx)("div", {
                className: M.ShortDateAndTime,
                children: (0, s.Hq)(q, !0),
              });
              c < L
                ? (G = (0, n.jsxs)("div", {
                    className: M.RightSideTitles,
                    children: [(0, s.we)("#EventDisplay_TimeEndsOn_Ran"), E],
                  }))
                : (G = (0, n.jsx)("div", {
                    className: M.RightSideTitles,
                    children: (0, s.PP)(
                      C
                        ? "#EventDisplay_TimeLeft"
                        : "#EventDisplay_RunsForDuration",
                      E,
                    ),
                  }));
            } else {
              const E = g(c, L, p, "year");
              G = (0, n.jsxs)(x.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: M.RightSideTitles,
                    children: (0, s.we)(
                      c < L
                        ? "#EventDisplay_TimeEndsOn_Past"
                        : "#EventDisplay_TimeEndsOn",
                    ),
                  }),
                  (0, n.jsx)("div", {
                    className: M.ShortDateAndTime,
                    children: w(c, p, E),
                  }),
                ],
              });
            }
            const pe = (0, n.jsx)(h, {
              rtFullDate: c,
              stylesmodule: M,
              children: G,
            });
            return (0, n.jsxs)("div", {
              className: M.ShortDateRange,
              children: [I, pe],
            });
          });
        function te(J, Q, c) {
          const m = g_EventCalendarDevFeatures.GetTimeNowWithOverrideAsDate(),
            M = new Date(J * 1e3),
            p = new Date(Q * 1e3),
            L = m.getFullYear() == M.getFullYear(),
            P = m.getFullYear() == p.getFullYear(),
            D = M.getFullYear() == p.getFullYear(),
            I = D && M.getMonth() == p.getMonth(),
            C = I && M.getDate() == p.getDate(),
            G = {
              day: "numeric",
              month: c ?? "long",
              year: L ? void 0 : "numeric",
            },
            q = M.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              G,
            );
          if (C) return q;
          {
            const pe = {
                day: "numeric",
                month: I && P ? void 0 : (c ?? "long"),
                year: D ? void 0 : "numeric",
              },
              E = p.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                pe,
              );
            return q + " - " + E;
          }
        }
        function re(J) {
          const {
            rtStartDate: Q,
            rtEndDate: c,
            strMonthFormat: m,
            className: M,
          } = J;
          return jsxs("div", { className: M, children: [te(Q, c, m), " "] });
        }
      },
      32651: (ge) => {
        ge.exports = {
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
      89767: (ge) => {
        ge.exports = {
          Pill: "_1LHHH9LxL4_OV0jcL9EZ7I",
          Button: "_3ECnEY2jSbeonbMSe3SQif",
        };
      },
      37501: (ge) => {
        ge.exports = { ImageBlocked: "_21Qmyw5l-_fHfVvaYXgIrm" };
      },
      33998: (ge) => {
        ge.exports = { Ctn: "_1BsM1CkjnMDPzj027r1TEC" };
      },
      93507: (ge) => {
        ge.exports = {
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
      6365: (ge) => {
        ge.exports = {
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
      1491: (ge) => {
        ge.exports = { BroadcastCtn: "b2Fu47WqOo1P0imbAoSy1" };
      },
      38182: (ge) => {
        ge.exports = {
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
      20881: (ge) => {
        ge.exports = { AppSummaryWidgetCtn: "s-ezVsX8n5lz8y_Nljmv2" };
      },
      20193: (ge) => {
        ge.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      98462: (ge) => {
        ge.exports = { ReferencedApps: "_1aDVPEAcrxRDEyIXlfcBMG" };
      },
      42937: (ge) => {
        ge.exports = {
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
      19890: (ge) => {
        ge.exports = {
          AppSocialLinksCtn: "JlFZxFyO0IOSiYmJt-NlE",
          AppSocialLinks: "_1SBP3NCWhesT_T7Zncoe_x",
          AppSocialLinkIcon: "_2p4QK5FnPikdfXUGvhz-rj",
          AppSocialLinkWithText: "_1pCGa1Dqa9xwEjXFCTbeaB",
          AppSocialText: "V88BDse5RqlvrzYpxlgFS",
        };
      },
      74187: (ge) => {
        ge.exports = {
          CheckMark: "_3QpozFqH35lAw0VLMCSzjT",
          DialogCtn: "_1Bzbk55gxuoPniZQJkoTjn",
          EquipCtn: "_2_ZLb7Wk-U4cDrBvFBE7b5",
        };
      },
      48963: (ge) => {
        ge.exports = {
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
      89206: (ge) => {
        ge.exports = {
          narrowWidth: "500px",
          ExpandRowButton: "r6FhuuUn6dvEsEckchXo5",
          Selected: "wOEL5nQgChVeJX_0DwcXg",
        };
      },
      39362: (ge) => {
        ge.exports = { Ctn: "_1xGaMOW4aakB5uwqOCT3nI" };
      },
      71714: (ge) => {
        ge.exports = {
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
      17009: (ge) => {
        ge.exports = {
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
          BackgroundAnimation: "_2-llXPi4w88rsWfJFYSLHB",
          "ItemFocusAnim-darkerGrey-nocolor": "_2eejrtSFYCSnzH8C6-WC3a",
          "ItemFocusAnim-darkerGrey": "oMlqiiSY2Eqr2ln_FmAg4",
          "ItemFocusAnim-darkGreySettings": "AcW48fP-EnfyD8bO6anBj",
          "ItemFocusAnim-darkGrey": "_3lAc02j3vPGIoXryYyGTZR",
          "ItemFocusAnim-grey": "_388VkzVpUFRuQ1HZEymCy",
          "ItemFocusAnim-translucent-white-10": "tK-6xcUa6TrN9X1V5zj25",
          "ItemFocusAnim-translucent-white-20": "_1UaaS_yXA7SqNdxVDXCD9W",
          "ItemFocusAnimBorder-darkGrey": "_1V7Z378RTDEmk3dXXGXsQa",
          "ItemFocusAnim-green": "_2ldXxMP_HINQZvEbjgDdbf",
          focusAnimation: "_3zr66n761wV-ZHFKw_Yvbn",
          hoverAnimation: "_1MvZ2haWg8XTcl8VHKnoS0",
        };
      },
      19332: (ge) => {
        ge.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
      },
      14256: (ge) => {
        ge.exports = {
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
      6878: (ge) => {
        ge.exports = {
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
      12247: (ge) => {
        ge.exports = {
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
      56330: (ge) => {
        ge.exports = {
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
      90316: (ge) => {
        ge.exports = {
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
      39256: (ge) => {
        ge.exports = { ErrorDiv: "XeZExtCZ_zIcbkPRCqsnV" };
      },
      55351: (ge) => {
        ge.exports = {
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
