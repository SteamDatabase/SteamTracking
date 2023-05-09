/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4158],
  {
    53592: (e) => {
      e.exports = {
        MarketingMessagePage: "messagelist_MarketingMessagePage_1HVoK",
        MessageListPage: "messagelist_MessageListPage_1N7O3",
        MessageListScroll: "messagelist_MessageListScroll_2RW7G",
        CarouselBar: "messagelist_CarouselBar_O7VJK",
        Content: "messagelist_Content_1qtg3",
        LeftArrow: "messagelist_LeftArrow_3ZyZU",
        RightArrow: "messagelist_RightArrow_2WuPu",
        Active: "messagelist_Active_cwA5j",
        Spacer: "messagelist_Spacer_COvXC",
        PipContainer: "messagelist_PipContainer_3ASpk",
        Pips: "messagelist_Pips_1rpuG",
        Pip: "messagelist_Pip_ZQrtM",
        MessageListContainer: "messagelist_MessageListContainer_33cf4",
        Loading: "messagelist_Loading_1xSKZ",
        MessageWrapper: "messagelist_MessageWrapper_152h7",
        Enter: "messagelist_Enter_DZICE",
        EnterActive: "messagelist_EnterActive_RU-xm",
        EnterDone: "messagelist_EnterDone_3AP2Y",
        Exit: "messagelist_Exit_2xmDI",
        ExitActive: "messagelist_ExitActive_32DFH",
        ExitDone: "messagelist_ExitDone_3cFXR",
      };
    },
    66960: (e) => {
      e.exports = {
        Dummy: "featurevideo_Dummy_Bz-g3",
        Poster: "featurevideo_Poster_3Lbyx",
        Video: "featurevideo_Video_2bH_J",
      };
    },
    56985: (e) => {
      e.exports = {
        MessageContent: "image_MessageContent_rohJ-",
        IsBlur: "image_IsBlur_2lGtR",
        GameImage: "image_GameImage_2It5b",
        Legal: "image_Legal_zzC_W",
        MessageFooter: "image_MessageFooter_20RJ2",
        ButtonAndPriceCtn: "image_ButtonAndPriceCtn_2FwUG",
        NoButton: "image_NoButton_1FbSd",
        Btn: "image_Btn_3YohC",
        MessagePriceCtn: "image_MessagePriceCtn_ddVk7",
        Price: "image_Price_KtsI7",
        NoPrice: "image_NoPrice_3gtjP",
        PriceReal: "image_PriceReal_zlxx_",
        PriceRealShort: "image_PriceRealShort_1XB_w",
        PriceRegular: "image_PriceRegular_7m4i8",
        Strike: "image_Strike_3fFJl",
        ShareLinks: "image_ShareLinks_2FhhQ",
        All: "image_All_1WpMe",
        TextTop: "image_TextTop_3cnZM",
        TextBottom: "image_TextBottom_2pJeu",
        ButtonContainer: "image_ButtonContainer_3CVNg",
      };
    },
    84080: (e, t, s) => {
      "use strict";
      s.d(t, { Ke: () => p, N8: () => _, Q2: () => E });
      var a = s(33940),
        n = s(5615),
        r = s(89526),
        i = s(6960),
        l = s(17922),
        o = (s(89252), s(98831)),
        c = s(70983),
        m = s(79983),
        u = s(55449),
        g = (s(82702), s(32338));
      class _ {
        constructor(e) {
          (this.m_setMessagesSeen = new Set()), (this.m_SteamInterface = e);
        }
        static Init(e) {
          _.sm_Instance = new _(e);
        }
        SetSteamInterfacePromotions(e) {
          this.m_SteamInterfacePromotions = e;
        }
        static Get() {
          return (
            (0, g.X)(_.sm_Instance, "MarketingMessages store not initialized"),
            _.sm_Instance
          );
        }
        GetMessageList(e, t = !1) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (!c.L7.logged_in) return [];
            const s = l.gA.Init(o.Pe);
            s.Body().set_country_code(c.De.COUNTRY),
              s.Body().set_elanguage((0, i.jM)(c.De.LANGUAGE)),
              s.Body().set_client_package_version(e.nClientPackageVersion),
              s.Body().set_operating_system(e.eOSType),
              t && s.Body().set_include_seen_messages(!0),
              (0, m.pA)(s),
              (0, m.De)(s, _.sm_DefaultDataRequest);
            const a = yield o.Bn.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              s
            );
            if (1 != a.GetEResult())
              throw `Error loading marketing messages: ${a.GetEResult()}`;
            if (t)
              for (const e of a.Body().messages())
                e.already_seen() &&
                  this.m_setMessagesSeen.add(e.message().gid());
            return a.Body().messages();
          });
        }
        GetSingleMessage(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const s = l.gA.Init(o.F5);
            let a;
            if (
              (s.Body().set_gid(e),
              (0, m.pA)(s),
              (0, m.De)(s, _.sm_DefaultDataRequest),
              (a = t
                ? yield o.Bn.GetDisplayMarketingMessageAdmin(
                    this.m_SteamInterfacePromotions.GetServiceTransport(),
                    s
                  )
                : yield o.Bn.GetDisplayMarketingMessage(
                    this.m_SteamInterface.GetAnonymousServiceTransport(),
                    s
                  )),
              1 != a.GetEResult())
            )
              throw `Error loading marketing messages: ${a.GetEResult()}`;
            return a.Body().message();
          });
        }
        MarkMessageSeen(e) {
          if (this.m_setMessagesSeen.has(e)) return;
          const t = l.gA.Init(o.UD);
          t.Body().set_gid(e),
            o.Bn.MarkMessageSeen(
              this.m_SteamInterface.GetServiceTransport(),
              t
            ),
            this.m_setMessagesSeen.add(e);
        }
        BIsMessageSeen(e) {
          return this.m_setMessagesSeen.has(e);
        }
      }
      _.sm_DefaultDataRequest = { include_release: !0 };
      class d {
        constructor(e) {
          (this.m_message = e),
            e.associated_item() &&
              (this.m_item = new u.Z(
                e.associated_item(),
                _.sm_DefaultDataRequest
              )),
            (this.m_templateVars = (function (e) {
              try {
                const t = JSON.parse(e);
                return (
                  t.use_additional_fields &&
                    (t.use_additional_fields =
                      "true" === t.use_additional_fields),
                  t.use_custom_legal_text &&
                    (t.use_custom_legal_text =
                      "true" === t.use_custom_legal_text),
                  t.last_asset_mtime &&
                    (t.last_asset_mtime = parseInt(t.last_asset_mtime)),
                  (t.ll_image = t.ll_image || {}),
                  t
                );
              } catch (e) {
                "dev" == c.De.WEB_UNIVERSE &&
                  console.error(
                    "MarketingMessageReadAndParseTemplateVars: Failed to prase",
                    e
                  );
              }
              return null;
            })(e.template_vars_json()));
        }
        get id() {
          return this.m_message.gid();
        }
        GetTemplateType() {
          return this.m_message.template_type();
        }
        GetTemplateVars() {
          return this.m_templateVars;
        }
        GetTemplateImage() {
          let e = this.m_templateVars.ll_image[c.De.LANGUAGE];
          return (
            e ||
              c.De.LANGUAGE != (0, i.j_)(27) ||
              (e = this.m_templateVars.ll_image.LATAM),
            e || (e = this.m_templateVars.ll_image.english),
            null == e ? void 0 : e.path
          );
        }
        GetFeaturedVideoMP4URL() {
          return this.m_templateVars.featured_video_mp4;
        }
        GetFeaturedVideoWebMURL() {
          return this.m_templateVars.featured_video_webm;
        }
        GetPosterImage() {
          let e = this.m_templateVars.poster[c.De.LANGUAGE];
          return (
            e || (e = this.m_templateVars.poster.english),
            null == e ? void 0 : e.path
          );
        }
        GetSubtitleObj() {
          return this.m_templateVars.subtitles;
        }
        BHasTemplateAnimatedAssets() {
          return this.m_templateVars.has_animated_assets;
        }
        BHasTemplateAnimatedAssetForLanguage(e) {
          const t = (0, i.j_)(e);
          return Boolean(this.m_templateVars.mp4[t]);
        }
        GetTemplateWebM(e) {
          var t;
          const s = (0, i.j_)(e);
          return null === (t = this.m_templateVars.webm[s]) || void 0 === t
            ? void 0
            : t.path;
        }
        GetTemplateMP4(e) {
          var t;
          const s = (0, i.j_)(e);
          return null === (t = this.m_templateVars.mp4[s]) || void 0 === t
            ? void 0
            : t.path;
        }
        GetLegalHTML() {
          return this.GetTemplateVars().use_custom_legal_text
            ? this.GetTemplateVars().custom_legal_text
            : ((e = this.GetTemplateVars().partner),
              `© ${new Date().getFullYear()} Valve Corporation${
                e ? " and " + e : ""
              }. <br/>All trademarks are property of their respective owners in the US and other countries.`);
          var e;
        }
        get associated_item() {
          return this.m_item;
        }
      }
      function p(e, t, s) {
        const { bIncludeSeenMessages: i } = t,
          l = (0, a._T)(t, ["bIncludeSeenMessages"]),
          {
            data: o,
            isLoading: c,
            isError: m,
          } = (0, n.useQuery)(
            ["MarketingMessages", "List", l, { bIncludeSeenMessages: !!i }],
            () => e.GetMessageList(l, i),
            s
          ),
          u = r.useMemo(
            () => (null == o ? void 0 : o.map((e) => new d(e.message()))),
            [o]
          );
        return { rgMessages: c ? null : u, isError: m };
      }
      function E(e, t, s) {
        const { data: a, isError: i } = (0, n.useQuery)(
          ["MarketingMessages", s ? "SinglePreivew" : "Single", t],
          () => e.GetSingleMessage(t, s),
          { enabled: !!t }
        );
        return { message: r.useMemo(() => a && new d(a), [a]), isError: i };
      }
    },
    70762: (e, t, s) => {
      "use strict";
      s.d(t, { KY: () => i, Ks: () => o, li: () => l });
      var a = s(89526),
        n = s(50840);
      const r = a.createContext({ setLegalText: void 0 });
      function i() {
        return !!a.useContext(r).setLegalText;
      }
      function l() {
        return a.useContext(r).setLegalText || function (e) {};
      }
      function o(e) {
        const [t, s] = a.useState(),
          i = (0, n.U5)("BrowserView.RegisterForMessageFromParent"),
          l = a.useMemo(() => ({ setLegalText: i ? s : void 0 }), [i, s]);
        return a.createElement(
          r.Provider,
          { value: l },
          i && a.createElement(c, { strLegalText: t }),
          e.children
        );
      }
      function c(e) {
        const { strLegalText: t } = e,
          s = a.useRef();
        return (
          a.useEffect(() => {
            (s.current = t),
              SteamClient.BrowserView.PostMessageToParent(
                "MarketingMessageLegal",
                t || ""
              );
          }, [t]),
          a.useEffect(
            () =>
              SteamClient.BrowserView.RegisterForMessageFromParent((e) => {
                "MarketingMessageDialogReady" == e &&
                  SteamClient.BrowserView.PostMessageToParent(
                    "MarketingMessageLegal",
                    s.current
                  );
              }).unregister,
            []
          ),
          null
        );
      }
    },
    54324: (e, t, s) => {
      "use strict";
      s.d(t, { P: () => n, h: () => r });
      var a = s(89526);
      function n(e) {
        const { title: t, bodyClassName: s, children: n } = e;
        return (
          a.useEffect(() => {
            const e = document.title;
            return (
              (document.title = t),
              () => {
                document.title = e;
              }
            );
          }, [t]),
          r(s),
          n
        );
      }
      function r(e) {
        a.useEffect(() => {
          if (!e) return;
          const t = [];
          for (const s of e.split(/ /))
            document.body.classList.contains(s) || t.push(s);
          return (
            document.body.classList.add(...t),
            () => document.body.classList.remove(...t)
          );
        }, [e]);
      }
    },
    58390: (e, t, s) => {
      "use strict";
      s.d(t, { v: () => I, U: () => V });
      var a = s(89526),
        n = s(6960),
        r = (s(84080), s(70762)),
        i = s(70983),
        l = s(18370),
        o = s(23907),
        c = s(22840),
        m = s(16147),
        u = s(33940),
        g = (s(49969), s(5545));
      function _(e, t, s, a) {
        if (!a) return null;
        const n = s ? "?t=" + s : "";
        return a.path.startsWith("images")
          ? `${g.De.MEDIA_CDN_URL}steam/marketing/${e}/${a.path}${n}`
          : `${g.De.BASE_URL_SHARED_CDN}store_item_assets/mm/${e}/${t}/${a.path}${n}`;
      }
      function d(e) {
        var t;
        const { path: s, message: r } = e,
          l = (0, u._T)(e, ["path", "message"]),
          o =
            null === (t = r.GetTemplateVars()) || void 0 === t
              ? void 0
              : t.last_asset_mtime,
          c = (0, n.jM)(i.De.LANGUAGE),
          m = _(r.id, c, o, { type: "file", path: s });
        return a.createElement("img", Object.assign({}, l, { src: m }));
      }
      function p(e) {
        var t;
        const { message: s, mp4Path: n, webmPath: r, language: i } = e,
          l = (0, u._T)(e, ["message", "mp4Path", "webmPath", "language"]),
          o =
            null === (t = s.GetTemplateVars()) || void 0 === t
              ? void 0
              : t.last_asset_mtime,
          c = _(s.id, i, o, { type: "file", path: r }),
          m = _(s.id, i, o, { type: "file", path: n });
        return a.createElement(
          "video",
          Object.assign({}, l),
          a.createElement("source", { src: c, type: "video/webm" }),
          a.createElement("source", { src: m, type: "video/mp4" })
        );
      }
      var E = s(68910),
        M = (s(72745), s(13806)),
        v = s(81052),
        f = s(31587),
        h = s(98197),
        S = s(66960);
      function A(e) {
        const t = V(),
          [s, n] = (0, a.useState)(!1);
        return a.createElement(
          o.s,
          { focusable: !0, noFocusRing: !0, onActivate: () => n(!0) },
          s
            ? a.createElement(
                "video",
                {
                  controls: !0,
                  muted: !0,
                  className: S.Video,
                  crossOrigin:
                    "dev" == g.De.WEB_UNIVERSE ? void 0 : "anonymous",
                },
                a.createElement("source", {
                  src: (0, h.et)(t.GetFeaturedVideoWebMURL()),
                  type: "video/webm",
                }),
                Boolean(!g.De.IN_CLIENT) &&
                  a.createElement("source", {
                    src: (0, h.et)(t.GetFeaturedVideoMP4URL()),
                    type: "video/mp4",
                  }),
                a.createElement(k, { message: t })
              )
            : a.createElement(P, { message: t })
        );
      }
      function P(e) {
        var t;
        const { message: s } = e,
          r = (0, n.jM)(g.De.LANGUAGE),
          i =
            null === (t = s.GetTemplateVars()) || void 0 === t
              ? void 0
              : t.last_asset_mtime,
          l = s.GetPosterImage(),
          o = _(s.id, r, i, { type: "file", path: l });
        return a.createElement("img", { src: o, className: S.Poster });
      }
      function k(e) {
        const { message: t } = e,
          s = (0, a.useMemo)(() => {
            var e;
            const s = t.GetSubtitleObj(),
              r =
                null === (e = t.GetTemplateVars()) || void 0 === e
                  ? void 0
                  : e.last_asset_mtime,
              i = new Array();
            for (let e = 0; e < 30; ++e) {
              if (!f.LJ.IsELanguageValidInRealm(e, g.De.EREALM)) continue;
              const l = (0, n.j_)(e);
              if (s && s[l]) {
                const o = s[l].path,
                  c = _(t.id, e, r, { type: "file", path: o });
                i.push(
                  a.createElement("track", {
                    key: t.id + " " + e,
                    src: c,
                    kind: "subtitles",
                    srcLang: (0, n.dt)(e),
                    default: g.De.LANGUAGE == l,
                    label: (0, f.Xx)("#language_selection_" + (0, n.j_)(e)),
                  })
                );
              }
            }
            return i;
          }, [t]);
        return a.createElement(a.Fragment, null, s);
      }
      var G = s(56985);
      function L(e) {
        const t = V();
        return a.createElement(
          "div",
          { className: G.All },
          a.createElement(
            "div",
            { className: G.MessageContent },
            a.createElement(T, { isBackgroundBlur: !0 }),
            a.createElement(T, null),
            "featured_video" === t.GetTemplateVars().custom_display &&
              a.createElement(A, null),
            a.createElement(C, null),
            a.createElement("div", { style: { clear: "both" } })
          )
        );
      }
      function y(e) {
        return a.createElement(
          "div",
          { className: G.All },
          a.createElement(
            "div",
            { className: G.MessageContent },
            a.createElement(T, { isBackgroundBlur: !0 }),
            a.createElement(b, null),
            a.createElement(C, null),
            a.createElement("div", { style: { clear: "both" } })
          )
        );
      }
      function B(e, t) {
        const s = e.GetTemplateVars();
        let n = (0, E.YR)(
          ((r = s.linkurl),
          (0, i.h4)() && r.startsWith("https://store.steampowered.com")
            ? r.replace(
                "https://store.steampowered.com",
                "https://store.steamchina.com"
              )
            : r),
          t
        );
        var r;
        return (
          n.startsWith("steam://") || (n = `steam://openurl/${n}`),
          a.useCallback(
            (e) => {
              (0, v.RA)(e).location.href = n;
            },
            [n]
          )
        );
      }
      function T(e) {
        const { isBackgroundBlur: t } = e,
          s = V(),
          n = B(s, "image"),
          r = s.GetTemplateImage();
        return a.createElement(
          o.s,
          {
            focusable: !0,
            noFocusRing: !0,
            className: (0, M.Z)(G.GameImage, t && G.IsBlur),
            onActivate: n,
          },
          r && a.createElement(d, { message: s, path: r })
        );
      }
      function b(e) {
        const t = V(),
          s = B(t, "image"),
          r = (0, n.jM)(i.De.LANGUAGE),
          l = t.GetTemplateMP4(r),
          c = t.GetTemplateWebM(r);
        return a.createElement(
          o.s,
          {
            focusable: !0,
            noFocusRing: !0,
            className: (0, M.Z)(G.GameImage),
            onActivate: s,
          },
          a.createElement(p, {
            muted: !0,
            autoPlay: !0,
            controls: !1,
            loop: !0,
            mp4Path: l,
            message: t,
            webmPath: c,
            language: r,
          })
        );
      }
      function C(e) {
        const t = V(),
          s = B(t, "button"),
          n =
            t.GetTemplateVars().button_text_custom ||
            t.GetTemplateVars().button_text;
        return a.createElement(
          "div",
          { className: (0, M.Z)(G.MessageFooter, !1) },
          a.createElement(
            "div",
            { className: G.ButtonAndPriceCtn },
            a.createElement(
              o.s,
              {
                focusable: !0,
                noFocusRing: !0,
                className: G.Btn,
                onActivate: s,
              },
              n
            ),
            a.createElement(c.SV, null, a.createElement(N, null))
          ),
          a.createElement(x, null)
        );
      }
      function N() {
        const e = V().associated_item;
        if (
          e &&
          e.GetBestPurchaseOption() &&
          e.GetBestPurchaseOption().formatted_final_price
        ) {
          e.GetBestPurchaseOption();
          return a.createElement(
            "div",
            { className: G.MessagePriceCtn },
            a.createElement(m.nk, { storeItem: e })
          );
        }
        return a.createElement("div", { className: G.NoPrice });
      }
      function x(e) {
        const t = V();
        return (0, r.KY)()
          ? null
          : a.createElement("div", {
              className: G.Legal,
              dangerouslySetInnerHTML: { __html: t.GetLegalHTML() },
            });
      }
      const w = a.createContext(null);
      function V() {
        return a.useContext(w);
      }
      function I(e) {
        const { message: t } = e,
          s = !1 !== e.active,
          n = (0, r.li)();
        return (
          a.useEffect(() => {
            s && n(t.GetLegalHTML());
          }, [s, t, n]),
          a.createElement(
            w.Provider,
            { value: t },
            a.createElement(
              a.Suspense,
              { fallback: null },
              a.createElement(D, { message: t, active: s })
            )
          )
        );
      }
      const R = a.lazy(() => s.e(938).then(s.bind(s, 96194)));
      function D(e) {
        const { message: t, active: s } = e,
          r = (0, n.jM)(i.De.LANGUAGE);
        if ("replay2022" === t.GetTemplateVars().custom_display)
          if (i.L7.logged_in) return a.createElement(R, { active: s });
        return "image" === t.GetTemplateType()
          ? (0, l.p8)(t, r)
            ? a.createElement(y, null)
            : a.createElement(L, { active: s })
          : null;
      }
    },
    18370: (e, t, s) => {
      "use strict";
      s.d(t, { YW: () => r, j4: () => i, p8: () => l });
      var a = s(89526),
        n = s(59934);
      s(6960), s(84080);
      function r() {
        const e = (0, n.TH)();
        return a.useMemo(() => {
          const t = new URLSearchParams(e.search);
          return {
            bIncludeSeenMessages: !!t.get("include_seen"),
            nClientPackageVersion: parseInt(
              t.get("client_package_version") || "0"
            ),
            eOSType: parseInt(t.get("os_type") || "0"),
          };
        }, [e.search]);
      }
      function i(e) {
        const t = new URLSearchParams();
        return (
          e.bIncludeSeenMessages && t.append("include_seen", "1"),
          e.nClientPackageVersion &&
            t.append(
              "client_package_version",
              e.nClientPackageVersion.toString()
            ),
          e.eOSType && t.append("os_type", e.eOSType.toString()),
          t.toString()
        );
      }
      function l(e, t) {
        return (
          !!e.BHasTemplateAnimatedAssets() &&
          e.BHasTemplateAnimatedAssetForLanguage(t)
        );
      }
    },
    41448: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { MarketingMessageRoutes: () => N, default: () => x });
      var a = s(89526),
        n = s(94629),
        r = s(59934),
        i = s(68910),
        l = s(84080),
        o = s(57255),
        c = s(31587),
        m = s(18370),
        u = s(53592),
        g = s(86701),
        _ = s(13806),
        d = s(22171),
        p = s(54324),
        E = s(8392),
        M = s(58390);
      const v = 8;
      function f(e) {
        const { MarketingMessagesStore: t } = e,
          s = (0, m.YW)(),
          { rgMessages: n, isError: i } = (0, l.Ke)(t, s),
          [o, g] = a.useState(!1),
          [_, d] = a.useState(0);
        (0, p.h)(u.MarketingMessagePage);
        const E = (0, r.k6)();
        if (
          (a.useEffect(() => {
            !n ||
              n.length ||
              i ||
              (s.bIncludeSeenMessages
                ? g(!0)
                : E.replace(
                    Object.assign(Object.assign({}, E.location), {
                      search: (0, m.j4)(
                        Object.assign(Object.assign({}, s), {
                          bIncludeSeenMessages: !0,
                        })
                      ),
                    })
                  ));
          }, [n, s, E, i]),
          i)
        )
          return a.createElement(
            k,
            null,
            (0, c.Xx)("#Error_ErrorCommunicatingWithNetwork")
          );
        if (o)
          return a.createElement(
            k,
            null,
            (0, c.Xx)("#MarketingMessages_NoneAvailable")
          );
        const M = s.bIncludeSeenMessages
          ? n
          : null == n
          ? void 0
          : n.slice(0, v);
        return a.createElement(
          "div",
          { className: u.MessageListPage },
          a.createElement(
            "div",
            { className: u.MessageListScroll },
            a.createElement(h, {
              MarketingMessagesStore: t,
              rgMessages: M,
              iActiveMessage: _,
            })
          ),
          a.createElement(S, {
            cMessages: null == M ? void 0 : M.length,
            iMessage: _,
            setMessage: d,
          })
        );
      }
      function h(e) {
        const {
          MarketingMessagesStore: t,
          rgMessages: s,
          iActiveMessage: n,
        } = e;
        return s
          ? a.createElement(
              "div",
              { className: u.MessageListContainer },
              null == s
                ? void 0
                : s.map((e, s) =>
                    a.createElement(G, {
                      key: e.id,
                      message: e,
                      MarketingMessagesStore: t,
                      active: s == n,
                      next: s == n + 1 || s == n - 1,
                    })
                  )
            )
          : a.createElement(
              "div",
              { className: (0, _.Z)(u.MessageListContainer, u.Loading) },
              a.createElement(E.V, { size: "xxlarge", msDelayAppear: 500 })
            );
      }
      function S(e) {
        const { cMessages: t, iMessage: s, setMessage: n } = e,
          r = a.useCallback(() => n(s - 1), [n, s]),
          i = a.useCallback(() => n(s + 1), [n, s]),
          l = [];
        for (let e = 0; e < t; e++)
          l.push(
            a.createElement(A, {
              key: e,
              active: e == s,
              iMessage: e,
              setMessage: n,
            })
          );
        const o = s > 0 ? r : void 0,
          c = s < t - 1 ? i : void 0;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("div", { className: u.CarouselSpacer }),
          a.createElement(
            "div",
            { className: u.CarouselBar },
            a.createElement(
              "div",
              { className: u.Content },
              a.createElement(
                "div",
                { className: (0, _.Z)(u.LeftArrow, o && u.Active), onClick: o },
                a.createElement(g.BKy, { angle: 180 })
              ),
              a.createElement("div", { className: u.Spacer }),
              a.createElement(
                "div",
                { className: u.PipContainer },
                a.createElement("div", { className: u.Pips }, l)
              ),
              a.createElement("div", { className: u.Spacer }),
              a.createElement(
                "div",
                { className: (0, _.Z)(u.LeftArrow, c && u.Active), onClick: c },
                a.createElement(g.BKy, { angle: 0 })
              )
            )
          )
        );
      }
      function A(e) {
        const { active: t, iMessage: s, setMessage: n } = e,
          r = a.useCallback(() => n(s), [n, s]);
        return a.createElement("div", {
          className: (0, _.Z)(u.Pip, t && u.Active),
          onClick: r,
        });
      }
      function P(e) {
        const { MarketingMessagesStore: t, preview: s } = e,
          n = (0, r.$B)(),
          { message: i, isError: o } = (0, l.Q2)(t, n.params.messageid, s);
        return (
          (0, p.h)(u.MarketingMessagePage),
          o
            ? a.createElement(
                k,
                null,
                (0, c.Xx)("#Error_ErrorCommunicatingWithNetwork")
              )
            : n.params.messageid
            ? i
              ? a.createElement(M.v, { message: i })
              : null
            : a.createElement(
                k,
                null,
                (0, c.Xx)("#MarketingMessages_NoneAvailable")
              )
        );
      }
      function k(e) {
        return a.createElement(
          o.VY,
          { style: { maxWidth: "400px", margin: "0 auto" } },
          a.createElement(o.h4, null, (0, c.Xx)("#Error_Generic"), " "),
          a.createElement(o.uT, null, e.children)
        );
      }
      function G(e) {
        const { message: t, MarketingMessagesStore: s, active: n, next: r } = e,
          i = a.useRef(),
          l = a.useRef(n || r);
        if (
          ((function (e, t) {
            a.useEffect(() => {
              t && e.MarkMessageSeen(t.id);
            }, [t, e]);
          })(s, n ? t : null),
          (n || r) && (l.current = !0),
          !l.current)
        )
          return null;
        let o = {
          enter: u.Enter,
          enterActive: u.EnterActive,
          enterDone: u.EnterDone,
          exit: u.Exit,
          exitActive: u.ExitActive,
          exitDone: u.ExitDone,
        };
        return a.createElement(
          d.Z,
          {
            in: n,
            nodeRef: i,
            classNames: o,
            timeout: 300,
            mountOnEnter: !r,
            unmountOnExit: !r,
          },
          a.createElement(
            "div",
            { className: (0, _.Z)(u.MessageWrapper, n && u.Active), ref: i },
            a.createElement(M.v, { message: t, active: n })
          )
        );
      }
      var L = s(24808),
        y = s(70657),
        B = s(70983),
        T = s(70762);
      const b = a.createContext({});
      function C(e) {
        const [t, s] = a.useState(),
          n = (0, r.TH)(),
          i = a.useMemo(() => {
            new URLSearchParams(n.search);
            return {};
          }, [n.search]);
        return (
          a.useLayoutEffect(() => {
            (0, B.kQ)("marketingmessage_config", "application_config");
            s({});
          }, [i]),
          t ? a.createElement(b.Provider, { value: t }, e.children, " ") : null
        );
      }
      const N = {
        List: () => `${n.Z.MarketingMessages()}list/`,
        Message: (e) => `${n.Z.MarketingMessages()}${e}`,
        MessagePreview: (e) => `${n.Z.MarketingMessages()}preview/${e}`,
      };
      function x(e) {
        const t = (function () {
          const [e, t] = a.useState(null);
          return (
            a.useLayoutEffect(() => {
              e ||
                t(
                  (function () {
                    if (!w) {
                      const e = (0, L.T)(),
                        t = (0, B.kQ)(
                          "marketingmessage_config",
                          "application_config"
                        ),
                        s = new y.J(B.De.WEBAPI_BASE_URL, e.webapi_token);
                      if (
                        ((w = new l.N8(s)),
                        null == t ? void 0 : t.promotion_operation_token)
                      ) {
                        const e = new y.J(
                          B.De.WEBAPI_BASE_URL,
                          t.promotion_operation_token
                        );
                        w.SetSteamInterfacePromotions(e);
                      }
                    }
                    return w;
                  })()
                );
            }, [e]),
            e
          );
        })();
        return t
          ? a.createElement(
              i.ZP,
              {
                domain: "store.steampowered.com",
                controller: "message",
                method: "default",
              },
              a.createElement(
                C,
                null,
                a.createElement(
                  T.Ks,
                  null,
                  a.createElement(
                    r.rs,
                    null,
                    a.createElement(
                      r.AW,
                      { path: `${N.List()}` },
                      a.createElement(f, { MarketingMessagesStore: t })
                    ),
                    a.createElement(
                      r.AW,
                      { path: `${N.MessagePreview(":messageid")}` },
                      a.createElement(P, {
                        MarketingMessagesStore: t,
                        preview: !0,
                      })
                    ),
                    a.createElement(
                      r.AW,
                      { path: `${N.Message(":messageid")}` },
                      a.createElement(P, { MarketingMessagesStore: t })
                    ),
                    a.createElement(
                      r.AW,
                      null,
                      a.createElement(r.l_, { to: `${N.List()}` })
                    )
                  )
                )
              )
            )
          : null;
      }
      let w;
    },
  },
]);
