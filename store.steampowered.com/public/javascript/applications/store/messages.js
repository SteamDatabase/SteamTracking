/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4158],
  {
    81124: (e) => {
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
    3028: (e) => {
      e.exports = {
        Dummy: "featurevideo_Dummy_Bz-g3",
        PosterCtn: "featurevideo_PosterCtn_24bJJ",
        Poster: "featurevideo_Poster_3Lbyx",
        Video: "featurevideo_Video_2bH_J",
      };
    },
    92894: (e) => {
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
    39120: (e, t, r) => {
      "use strict";
      r.d(t, { KY: () => l, Ks: () => c, li: () => o });
      var s = r(89526),
        a = r(34433),
        i = r(32765);
      const n = s.createContext({ setLegalText: void 0 });
      function l() {
        return !!s.useContext(n).setLegalText;
      }
      function o() {
        return s.useContext(n).setLegalText || function (e) {};
      }
      function c(e) {
        const [t, r] = s.useState(),
          l = (0, a.U5)("BrowserView.RegisterForMessageFromParent"),
          o = (0, i.id)(),
          c = s.useMemo(
            () => ({ setLegalText: l && !o ? r : void 0 }),
            [l, r, o]
          );
        return s.createElement(
          n.Provider,
          { value: c },
          l && s.createElement(m, { strLegalText: t }),
          e.children
        );
      }
      function m(e) {
        const { strLegalText: t } = e,
          r = s.useRef();
        return (
          s.useEffect(() => {
            (r.current = t),
              SteamClient.BrowserView.PostMessageToParent(
                "MarketingMessageLegal",
                t || ""
              );
          }, [t]),
          s.useEffect(
            () =>
              SteamClient.BrowserView.RegisterForMessageFromParent((e) => {
                "MarketingMessageDialogReady" == e &&
                  SteamClient.BrowserView.PostMessageToParent(
                    "MarketingMessageLegal",
                    r.current
                  );
              }).unregister,
            []
          ),
          null
        );
      }
    },
    12360: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => a, h: () => i });
      var s = r(89526);
      function a(e) {
        const { title: t, bodyClassName: r, children: a } = e;
        return (
          s.useEffect(() => {
            const e = document.title;
            return (
              (document.title = t),
              () => {
                document.title = e;
              }
            );
          }, [t]),
          i(r),
          a
        );
      }
      function i(e) {
        s.useEffect(() => {
          if (!e) return;
          const t = [];
          for (const r of e.split(/ /))
            document.body.classList.contains(r) || t.push(r);
          return (
            document.body.classList.add(...t),
            () => document.body.classList.remove(...t)
          );
        }, [e]);
      }
    },
    27734: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => O, U: () => L });
      var s = r(89526),
        a = r(46132),
        i = r(39120),
        n = r(32765),
        l = r(53853),
        o = r(90699),
        c = r(17547),
        m = r(44865),
        u = r(33940),
        g = r(44973);
      function d(e, t, r, s) {
        if (!s) return null;
        const a = r ? "?t=" + r : "";
        return s.path.startsWith("images")
          ? `${g.De.MEDIA_CDN_URL}steam/marketing/${e}/${s.path}${a}`
          : `${g.De.BASE_URL_SHARED_CDN}store_item_assets/mm/${e}/${t}/${s.path}${a}`;
      }
      var _ = r(4306);
      function M(e) {
        var t;
        const { path: r, message: a, eLanguage: i } = e,
          n = (0, u._T)(e, ["path", "message", "eLanguage"]),
          l =
            null === (t = a.GetTemplateVars()) || void 0 === t
              ? void 0
              : t.last_asset_mtime,
          o = d(a.id, i, l, { type: "file", path: r });
        return s.createElement("img", Object.assign({}, n, { src: o }));
      }
      function B(e) {
        var t;
        const { message: r, mp4Path: a, webmPath: i, language: n } = e,
          l = (0, u._T)(e, ["message", "mp4Path", "webmPath", "language"]),
          o =
            null === (t = r.GetTemplateVars()) || void 0 === t
              ? void 0
              : t.last_asset_mtime,
          c = d(r.id, n, o, { type: "file", path: i }),
          m = d(r.id, n, o, { type: "file", path: a }),
          g = (0, s.useRef)(null),
          M = (0, s.useCallback)(() => {
            var e, t;
            "visible" === document.visibilityState
              ? null === (e = g.current) || void 0 === e || e.play()
              : null === (t = g.current) || void 0 === t || t.pause();
          }, []);
        return (
          (0, _.JI)(document, "visibilitychange", M),
          (0, s.useEffect)(() => M(), [M]),
          s.createElement(
            "video",
            Object.assign({}, l, { ref: g }),
            s.createElement("source", { src: c, type: "video/webm" }),
            s.createElement("source", { src: m, type: "video/mp4" })
          )
        );
      }
      var p = r(71161),
        b = (r(75962), r(19304)),
        y = r(60161),
        f = r(701),
        v = r(14826),
        h = r(207),
        E = r(3028);
      function w(e) {
        const t = L(),
          [r, a] = (0, s.useState)(!1);
        return s.createElement(
          o.s,
          {
            focusable: !0,
            noFocusRing: !0,
            onActivate: () => a(!0),
            className: E.PosterCtn,
          },
          r
            ? s.createElement(
                "video",
                {
                  controls: !0,
                  muted: !0,
                  autoPlay: !0,
                  className: E.Video,
                  crossOrigin:
                    "dev" == g.De.WEB_UNIVERSE ? void 0 : "anonymous",
                },
                s.createElement("source", {
                  src: (0, h.et)(t.GetFeaturedVideoWebMURL()),
                  type: "video/webm",
                }),
                Boolean(!g.De.IN_CLIENT) &&
                  s.createElement("source", {
                    src: (0, h.et)(t.GetFeaturedVideoMP4URL()),
                    type: "video/mp4",
                  }),
                s.createElement(F, { message: t })
              )
            : s.createElement(S, { message: t })
        );
      }
      function S(e) {
        var t;
        const { message: r } = e,
          a =
            null === (t = r.GetTemplateVars()) || void 0 === t
              ? void 0
              : t.last_asset_mtime,
          [i, n] = r.GetPosterImage(),
          l = d(r.id, n, a, { type: "file", path: i });
        return s.createElement(
          s.Fragment,
          null,
          s.createElement("img", { src: l, className: E.Poster }),
          s.createElement(f.GhU, null)
        );
      }
      function F(e) {
        const { message: t } = e,
          r = (0, s.useMemo)(() => {
            var e;
            const r = t.GetSubtitleObj(),
              i =
                null === (e = t.GetTemplateVars()) || void 0 === e
                  ? void 0
                  : e.last_asset_mtime,
              n = new Array();
            for (let e = 0; e < 30; ++e) {
              if (!v.LJ.IsELanguageValidInRealm(e, g.De.EREALM)) continue;
              const l = (0, a.j_)(e);
              if (r && r[l]) {
                const o = r[l].path,
                  c = d(t.id, e, i, { type: "file", path: o });
                n.push(
                  s.createElement("track", {
                    key: t.id + " " + e,
                    src: c,
                    kind: "subtitles",
                    srcLang: (0, a.dt)(e),
                    default: g.De.LANGUAGE == l,
                    label: (0, v.Xx)("#language_selection_" + (0, a.j_)(e)),
                  })
                );
              }
            }
            return n;
          }, [t]);
        return s.createElement(s.Fragment, null, r);
      }
      var R = r(92894);
      function k(e) {
        const { bLowBandwidthMode: t } = e,
          r = L(),
          a = !t && "featured_video" === r.GetTemplateVars().custom_display;
        return s.createElement(
          p.ZP,
          null,
          s.createElement(
            "div",
            { className: R.All },
            s.createElement(
              "div",
              { className: R.MessageContent },
              s.createElement(A, {
                isBackgroundBlur: !0,
                bOverrideUseBackgroundImage: a,
              }),
              s.createElement(A, { bOverrideUseBackgroundImage: a }),
              Boolean(a) && s.createElement(w, null),
              s.createElement(P, null),
              s.createElement("div", { style: { clear: "both" } })
            )
          )
        );
      }
      function z(e) {
        return s.createElement(
          "div",
          { className: R.All },
          s.createElement(
            "div",
            { className: R.MessageContent },
            s.createElement(A, { isBackgroundBlur: !0 }),
            s.createElement(W, null),
            s.createElement(P, null),
            s.createElement("div", { style: { clear: "both" } })
          )
        );
      }
      function T(e, t) {
        const r = e.GetTemplateVars();
        let a = (0, p.YR)(
          ((i = r.linkurl),
          (0, n.h4)() && i.startsWith("https://store.steampowered.com")
            ? i.replace(
                "https://store.steampowered.com",
                "https://store.steamchina.com"
              )
            : i),
          t
        );
        var i;
        return (
          a.startsWith("steam://") || (a = `steam://openurl/${a}`),
          s.useCallback(
            (e) => {
              (0, y.RA)(e).location.href = a;
            },
            [a]
          )
        );
      }
      function A(e) {
        const { isBackgroundBlur: t, bOverrideUseBackgroundImage: r } = e,
          a = L(),
          i = T(a, "image"),
          [n, l] = r ? a.GetTemplateBackgroundImage() : a.GetTemplateImage();
        return s.createElement(
          o.s,
          {
            focusable: !0,
            noFocusRing: !0,
            className: (0, b.Z)(R.GameImage, t && R.IsBlur),
            onActivate: i,
          },
          n && s.createElement(M, { message: a, path: n, eLanguage: l })
        );
      }
      function W(e) {
        const t = L(),
          r = T(t, "image"),
          i = (0, a.jM)(n.De.LANGUAGE),
          l = t.GetTemplateMP4(i),
          c = t.GetTemplateWebM(i);
        return s.createElement(
          o.s,
          {
            focusable: !0,
            noFocusRing: !0,
            className: (0, b.Z)(R.GameImage),
            onActivate: r,
          },
          s.createElement(B, {
            muted: !0,
            autoPlay: !0,
            controls: !1,
            loop: !0,
            mp4Path: l,
            message: t,
            webmPath: c,
            language: i,
          })
        );
      }
      function P(e) {
        const t = L(),
          r = T(t, "button"),
          a =
            t.GetTemplateVars().button_text_custom ||
            t.GetTemplateVars().button_text;
        return s.createElement(
          "div",
          { className: (0, b.Z)(R.MessageFooter, !1) },
          s.createElement(
            "div",
            { className: R.ButtonAndPriceCtn },
            s.createElement(
              o.s,
              {
                focusable: !0,
                noFocusRing: !0,
                className: R.Btn,
                onActivate: r,
              },
              a
            ),
            s.createElement(c.SV, null, s.createElement(C, null))
          ),
          s.createElement(G, null)
        );
      }
      function C() {
        const e = L().associated_item;
        if (
          e &&
          e.GetBestPurchaseOption() &&
          e.GetBestPurchaseOption().formatted_final_price
        ) {
          e.GetBestPurchaseOption();
          return s.createElement(
            "div",
            { className: R.MessagePriceCtn },
            s.createElement(m.nk, { storeItem: e })
          );
        }
        return s.createElement("div", { className: R.NoPrice });
      }
      function G(e) {
        const t = L();
        return (0, i.KY)()
          ? null
          : s.createElement("div", {
              className: R.Legal,
              dangerouslySetInnerHTML: { __html: t.GetLegalHTML() },
            });
      }
      const j = s.createContext(null);
      function L() {
        return s.useContext(j);
      }
      function O(e) {
        const { message: t } = e,
          r = !1 !== e.active,
          a = (0, i.li)();
        return (
          s.useEffect(() => {
            r && a(t.GetLegalHTML());
          }, [r, t, a]),
          s.createElement(
            j.Provider,
            { value: t },
            s.createElement(
              s.Suspense,
              { fallback: null },
              s.createElement(N, { message: t, active: r })
            )
          )
        );
      }
      const x = s.lazy(() => r.e(938).then(r.bind(r, 75176)));
      function N(e) {
        const { message: t, active: r } = e,
          i = (0, a.jM)(n.De.LANGUAGE),
          { bLowBandwidthMode: o } = (0, l.YW)();
        if ("replay2022" === t.GetTemplateVars().custom_display)
          if (n.L7.logged_in) return s.createElement(x, { active: r });
        return "image" === t.GetTemplateType()
          ? (0, l.p8)(t, i, o)
            ? s.createElement(z, null)
            : s.createElement(k, { bLowBandwidthMode: o })
          : null;
      }
    },
    53853: (e, t, r) => {
      "use strict";
      r.d(t, { YW: () => i, j4: () => n, p8: () => l });
      var s = r(89526),
        a = r(59934);
      function i() {
        const e = (0, a.TH)();
        return s.useMemo(() => {
          const t = new URLSearchParams(e.search);
          return {
            bIncludeSeenMessages: !!t.get("include_seen"),
            nClientPackageVersion: parseInt(
              t.get("client_package_version") || "0"
            ),
            eOSType: parseInt(t.get("os_type") || "0"),
            bLowBandwidthMode: !!t.get("low_bandwidth"),
          };
        }, [e.search]);
      }
      function n(e) {
        const t = new URLSearchParams();
        return (
          e.bIncludeSeenMessages && t.append("include_seen", "1"),
          e.nClientPackageVersion &&
            t.append(
              "client_package_version",
              e.nClientPackageVersion.toString()
            ),
          e.eOSType && t.append("os_type", e.eOSType.toString()),
          e.bLowBandwidthMode && t.append("low_bandwidth", "1"),
          t.toString()
        );
      }
      function l(e, t, r) {
        return (
          !(r || !e.BHasTemplateAnimatedAssets()) &&
          e.BHasTemplateAnimatedAssetForLanguage(t)
        );
      }
    },
    20080: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { MarketingMessageRoutes: () => le, default: () => oe });
      var s = r(89526),
        a = r(96927),
        i = r(59934),
        n = r(71161),
        l = r(33940),
        o = r(5615),
        c = r(46132),
        m = r(54856),
        u = r(45878),
        g = r(29063),
        d = r(53143);
      const _ = u.Message;
      class M extends _ {
        constructor(e = null) {
          super(),
            M.prototype.gid || g.aR(M.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  gid: {
                    n: 1,
                    br: g.FE.readFixed64String,
                    bw: g.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: g.FE.readString, bw: g.Xc.writeString },
                  type: { n: 3, br: g.FE.readEnum, bw: g.Xc.writeEnum },
                  visibility: { n: 4, br: g.FE.readEnum, bw: g.Xc.writeEnum },
                  priority: { n: 5, br: g.FE.readUint32, bw: g.Xc.writeUint32 },
                  association_type: {
                    n: 6,
                    br: g.FE.readEnum,
                    bw: g.Xc.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: g.FE.readUint32,
                    bw: g.Xc.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  start_date: {
                    n: 9,
                    br: g.FE.readUint32,
                    bw: g.Xc.writeUint32,
                  },
                  end_date: {
                    n: 10,
                    br: g.FE.readUint32,
                    bw: g.Xc.writeUint32,
                  },
                  country_allow: {
                    n: 11,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: g.FE.readBool,
                    bw: g.Xc.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: g.FE.readUint32,
                    bw: g.Xc.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: g.FE.readUint32,
                    bw: g.Xc.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: g.FE.readUint32,
                    bw: g.Xc.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: g.FE.readUint32,
                    bw: g.Xc.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: g.FE.readUint32,
                    bw: g.Xc.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  flags: { n: 22, br: g.FE.readUint32, bw: g.Xc.writeUint32 },
                  creator_name: {
                    n: 23,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 24,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  additional_restrictions_json: {
                    n: 25,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = g.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageProto";
        }
      }
      class B extends _ {
        constructor(e = null) {
          super(),
            B.prototype.gid || g.aR(B.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  gid: {
                    n: 1,
                    br: g.FE.readFixed64String,
                    bw: g.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: g.FE.readString, bw: g.Xc.writeString },
                  type: { n: 3, br: g.FE.readEnum, bw: g.Xc.writeEnum },
                  associated_item_id: { n: 4, c: d.oY },
                  associated_item: { n: 5, c: d.VL },
                  associated_name: {
                    n: 6,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  template_type: {
                    n: 10,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 11,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = g.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDisplayMarketingMessage";
        }
      }
      class p extends _ {
        constructor(e = null) {
          super(),
            p.prototype.messages || g.aR(p.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  messages: { n: 1, c: M, r: !0, q: !0 },
                  time_next_message_age: {
                    n: 2,
                    br: g.FE.readUint32,
                    bw: g.Xc.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = g.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class b extends _ {
        constructor(e = null) {
          super(),
            b.prototype.include_seen_messages || g.aR(b.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  include_seen_messages: {
                    n: 1,
                    br: g.FE.readBool,
                    bw: g.Xc.writeBool,
                  },
                  country_code: {
                    n: 2,
                    br: g.FE.readString,
                    bw: g.Xc.writeString,
                  },
                  elanguage: { n: 3, br: g.FE.readInt32, bw: g.Xc.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: g.FE.readInt32,
                    bw: g.Xc.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: g.FE.readInt32,
                    bw: g.Xc.writeInt32,
                  },
                  context: { n: 6, c: d.WJ },
                  data_request: { n: 7, c: d.Qn },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = g.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Request";
        }
      }
      class y extends _ {
        constructor(e = null) {
          super(),
            y.prototype.messages || g.aR(y.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { messages: { n: 1, c: f, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = g.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response";
        }
      }
      class f extends _ {
        constructor(e = null) {
          super(),
            f.prototype.already_seen || g.aR(f.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  already_seen: { n: 1, br: g.FE.readBool, bw: g.Xc.writeBool },
                  message: { n: 2, c: B },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = g.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
        }
      }
      class v extends _ {
        constructor(e = null) {
          super(),
            v.prototype.has_pending_messages || g.aR(v.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  has_pending_messages: {
                    n: 1,
                    br: g.FE.readBool,
                    bw: g.Xc.writeBool,
                  },
                  pending_message_count: {
                    n: 2,
                    br: g.FE.readInt32,
                    bw: g.Xc.writeInt32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = g.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
        }
      }
      class h extends _ {
        constructor(e = null) {
          super(),
            h.prototype.gid || g.aR(h.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  gid: {
                    n: 1,
                    br: g.FE.readFixed64String,
                    bw: g.Xc.writeFixed64String,
                  },
                  context: { n: 2, c: d.WJ },
                  data_request: { n: 3, c: d.Qn },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = g.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Request";
        }
      }
      class E extends _ {
        constructor(e = null) {
          super(),
            E.prototype.message || g.aR(E.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = { proto: E, fields: { message: { n: 1, c: B } } }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = g.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Response";
        }
      }
      class w extends _ {
        constructor(e = null) {
          super(),
            w.prototype.gid || g.aR(w.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  gid: {
                    n: 1,
                    br: g.FE.readFixed64String,
                    bw: g.Xc.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = g.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_MarkMessageSeen_Notification";
        }
      }
      class S extends _ {
        constructor(e = null) {
          super(),
            S.prototype.message || g.aR(S.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = { proto: S, fields: { message: { n: 1, c: M } } }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = g.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class F extends _ {
        constructor(e = null) {
          super(),
            F.prototype.messages || g.aR(F.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { messages: { n: 1, c: M, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = g.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class R extends _ {
        constructor(e = null) {
          super(),
            R.prototype.gid || g.aR(R.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  gid: {
                    n: 1,
                    br: g.FE.readFixed64String,
                    bw: g.Xc.writeFixed64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = g.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return g.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return g.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class k extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class z extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new z();
        }
        static deserializeBinary(e) {
          let t = new u.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new u.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new u.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      var T;
      !(function (e) {
        (e.GetActiveMarketingMessages = function (e, t) {
          return e.SendMsg(
            "MarketingMessages.GetActiveMarketingMessages#1",
            t,
            p,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
          );
        }),
          (e.GetMarketingMessagesForUser = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              t,
              y,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.DoesUserHavePendingMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
              t,
              v,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.GetDisplayMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              t,
              E,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetDisplayMarketingMessageAdmin = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
              t,
              E,
              { bConstMethod: !0, ePrivilege: 4 }
            );
          }),
          (e.MarkMessageSeen = function (e, t) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.GetMarketingMessage = function (e, t) {
            return e.SendMsg("MarketingMessages.GetMarketingMessage#1", t, S, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.CreateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              t,
              R,
              { ePrivilege: 4 }
            );
          }),
          (e.UpdateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              t,
              k,
              { ePrivilege: 4 }
            );
          }),
          (e.DeleteMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              t,
              z,
              { ePrivilege: 4 }
            );
          }),
          (e.FindMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              t,
              F,
              { ePrivilege: 4 }
            );
          });
      })(T || (T = {}));
      var A = r(32765),
        W = r(11195),
        P = r(36704),
        C = r(23801);
      class G {
        constructor(e) {
          (this.m_setMessagesSeen = new Set()), (this.m_SteamInterface = e);
        }
        static Init(e) {
          G.sm_Instance = new G(e);
        }
        SetSteamInterfacePromotions(e) {
          this.m_SteamInterfacePromotions = e;
        }
        static Get() {
          return (
            (0, C.X)(G.sm_Instance, "MarketingMessages store not initialized"),
            G.sm_Instance
          );
        }
        GetMessageList(e, t = !1) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            if (!A.L7.logged_in) return [];
            const r = m.gA.Init(b);
            r.Body().set_country_code(A.De.COUNTRY),
              r.Body().set_elanguage((0, c.jM)(A.De.LANGUAGE)),
              r.Body().set_client_package_version(e.nClientPackageVersion),
              r.Body().set_operating_system(e.eOSType),
              t && r.Body().set_include_seen_messages(!0),
              (0, W.pA)(r),
              (0, W.De)(r, G.sm_DefaultDataRequest);
            const s = yield T.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              r
            );
            if (1 != s.GetEResult())
              throw `Error loading marketing messages: ${s.GetEResult()}`;
            if (t)
              for (const e of s.Body().messages())
                e.already_seen() &&
                  this.m_setMessagesSeen.add(e.message().gid());
            return s.Body().messages();
          });
        }
        GetSingleMessage(e, t) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const r = m.gA.Init(h);
            let s;
            if (
              (r.Body().set_gid(e),
              (0, W.pA)(r),
              (0, W.De)(r, G.sm_DefaultDataRequest),
              (s = t
                ? yield T.GetDisplayMarketingMessageAdmin(
                    this.m_SteamInterfacePromotions.GetServiceTransport(),
                    r
                  )
                : yield T.GetDisplayMarketingMessage(
                    this.m_SteamInterface.GetAnonymousServiceTransport(),
                    r
                  )),
              1 != s.GetEResult())
            )
              throw `Error loading marketing messages: ${s.GetEResult()}`;
            return s.Body().message();
          });
        }
        MarkMessageSeen(e) {
          if (this.m_setMessagesSeen.has(e)) return;
          const t = m.gA.Init(w);
          t.Body().set_gid(e),
            T.MarkMessageSeen(this.m_SteamInterface.GetServiceTransport(), t),
            this.m_setMessagesSeen.add(e);
        }
        BIsMessageSeen(e) {
          return this.m_setMessagesSeen.has(e);
        }
      }
      G.sm_DefaultDataRequest = { include_release: !0 };
      class j {
        constructor(e) {
          (this.m_message = e),
            e.associated_item() &&
              (this.m_item = new P.Z(
                e.associated_item(),
                G.sm_DefaultDataRequest
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
                "dev" == A.De.WEB_UNIVERSE &&
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
          let e = this.m_templateVars.ll_image[A.De.LANGUAGE],
            t = (0, c.jM)(A.De.LANGUAGE);
          return (
            e ||
              A.De.LANGUAGE != (0, c.j_)(27) ||
              ((e = this.m_templateVars.ll_image.LATAM), (t = 27)),
            e || ((e = this.m_templateVars.ll_image.english), (t = 0)),
            [null == e ? void 0 : e.path, t]
          );
        }
        GetTemplateBackgroundImage() {
          let e = this.m_templateVars.background[A.De.LANGUAGE],
            t = (0, c.jM)(A.De.LANGUAGE);
          return (
            e || ((e = this.m_templateVars.background.english), (t = 0)),
            [null == e ? void 0 : e.path, t]
          );
        }
        GetFeaturedVideoMP4URL() {
          return this.m_templateVars.featured_video_mp4;
        }
        GetFeaturedVideoWebMURL() {
          return this.m_templateVars.featured_video_webm;
        }
        GetPosterImage() {
          let e = this.m_templateVars.poster[A.De.LANGUAGE],
            t = (0, c.jM)(A.De.LANGUAGE);
          return (
            e || ((e = this.m_templateVars.poster.english), (t = 0)),
            [null == e ? void 0 : e.path, t]
          );
        }
        GetSubtitleObj() {
          return this.m_templateVars.subtitles;
        }
        BHasTemplateAnimatedAssets() {
          return this.m_templateVars.has_animated_assets;
        }
        BHasTemplateAnimatedAssetForLanguage(e) {
          const t = (0, c.j_)(e);
          return Boolean(this.m_templateVars.mp4[t]);
        }
        GetTemplateWebM(e) {
          var t;
          const r = (0, c.j_)(e);
          return null === (t = this.m_templateVars.webm[r]) || void 0 === t
            ? void 0
            : t.path;
        }
        GetTemplateMP4(e) {
          var t;
          const r = (0, c.j_)(e);
          return null === (t = this.m_templateVars.mp4[r]) || void 0 === t
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
      function L(e, t, r) {
        const { bIncludeSeenMessages: a } = t,
          i = (0, l._T)(t, ["bIncludeSeenMessages"]),
          {
            data: n,
            isLoading: c,
            isError: m,
          } = (0, o.useQuery)(
            ["MarketingMessages", "List", i, { bIncludeSeenMessages: !!a }],
            () => e.GetMessageList(i, a),
            r
          ),
          u = s.useMemo(
            () => (null == n ? void 0 : n.map((e) => new j(e.message()))),
            [n]
          );
        return { rgMessages: c ? null : u, isError: m };
      }
      var O = r(57605),
        x = r(14826),
        N = r(53853),
        D = r(81124),
        I = r(701),
        U = r(19304),
        V = r(22171),
        X = r(12360),
        $ = r(69338),
        Z = r(27734);
      const H = 8;
      function q(e) {
        const { MarketingMessagesStore: t } = e,
          r = (0, N.YW)(),
          { rgMessages: a, isError: n } = L(t, r),
          [l, o] = s.useState(!1),
          [c, m] = s.useState(0);
        (0, X.h)(D.MarketingMessagePage);
        const u = (0, i.k6)();
        if (
          (s.useEffect(() => {
            !a ||
              a.length ||
              n ||
              (r.bIncludeSeenMessages
                ? o(!0)
                : u.replace(
                    Object.assign(Object.assign({}, u.location), {
                      search: (0, N.j4)(
                        Object.assign(Object.assign({}, r), {
                          bIncludeSeenMessages: !0,
                        })
                      ),
                    })
                  ));
          }, [a, r, u, n]),
          n)
        )
          return s.createElement(
            ee,
            null,
            (0, x.Xx)("#Error_ErrorCommunicatingWithNetwork")
          );
        if (l)
          return s.createElement(
            ee,
            null,
            (0, x.Xx)("#MarketingMessages_NoneAvailable")
          );
        const g = r.bIncludeSeenMessages
          ? a
          : null == a
          ? void 0
          : a.slice(0, H);
        return s.createElement(
          "div",
          { className: D.MessageListPage },
          s.createElement(
            "div",
            { className: D.MessageListScroll },
            s.createElement(J, {
              MarketingMessagesStore: t,
              rgMessages: g,
              iActiveMessage: c,
            })
          ),
          s.createElement(K, {
            cMessages: null == g ? void 0 : g.length,
            iMessage: c,
            setMessage: m,
          })
        );
      }
      function J(e) {
        const {
          MarketingMessagesStore: t,
          rgMessages: r,
          iActiveMessage: a,
        } = e;
        return r
          ? s.createElement(
              "div",
              { className: D.MessageListContainer },
              null == r
                ? void 0
                : r.map((e, r) =>
                    s.createElement(te, {
                      key: e.id,
                      message: e,
                      MarketingMessagesStore: t,
                      active: r == a,
                      next: r == a + 1 || r == a - 1,
                    })
                  )
            )
          : s.createElement(
              "div",
              { className: (0, U.Z)(D.MessageListContainer, D.Loading) },
              s.createElement($.V, { size: "xxlarge", msDelayAppear: 500 })
            );
      }
      function K(e) {
        const { cMessages: t, iMessage: r, setMessage: a } = e,
          i = s.useCallback(() => a(r - 1), [a, r]),
          n = s.useCallback(() => a(r + 1), [a, r]),
          l = [];
        for (let e = 0; e < t; e++)
          l.push(
            s.createElement(Y, {
              key: e,
              active: e == r,
              iMessage: e,
              setMessage: a,
            })
          );
        const o = r > 0 ? i : void 0,
          c = r < t - 1 ? n : void 0;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement("div", { className: D.CarouselSpacer }),
          s.createElement(
            "div",
            { className: D.CarouselBar },
            s.createElement(
              "div",
              { className: D.Content },
              s.createElement(
                "div",
                { className: (0, U.Z)(D.LeftArrow, o && D.Active), onClick: o },
                s.createElement(I.BKy, { angle: 180 })
              ),
              s.createElement("div", { className: D.Spacer }),
              s.createElement(
                "div",
                { className: D.PipContainer },
                s.createElement("div", { className: D.Pips }, l)
              ),
              s.createElement("div", { className: D.Spacer }),
              s.createElement(
                "div",
                { className: (0, U.Z)(D.LeftArrow, c && D.Active), onClick: c },
                s.createElement(I.BKy, { angle: 0 })
              )
            )
          )
        );
      }
      function Y(e) {
        const { active: t, iMessage: r, setMessage: a } = e,
          i = s.useCallback(() => a(r), [a, r]);
        return s.createElement("div", {
          className: (0, U.Z)(D.Pip, t && D.Active),
          onClick: i,
        });
      }
      function Q(e) {
        const { MarketingMessagesStore: t, preview: r } = e,
          a = (0, i.$B)(),
          { message: n, isError: l } = (function (e, t, r) {
            const { data: a, isError: i } = (0, o.useQuery)(
              ["MarketingMessages", r ? "SinglePreivew" : "Single", t],
              () => e.GetSingleMessage(t, r),
              { enabled: !!t }
            );
            return { message: s.useMemo(() => a && new j(a), [a]), isError: i };
          })(t, a.params.messageid, r);
        return (
          (0, X.h)(D.MarketingMessagePage),
          l
            ? s.createElement(
                ee,
                null,
                (0, x.Xx)("#Error_ErrorCommunicatingWithNetwork")
              )
            : a.params.messageid
            ? n
              ? s.createElement(Z.v, { message: n })
              : null
            : s.createElement(
                ee,
                null,
                (0, x.Xx)("#MarketingMessages_NoneAvailable")
              )
        );
      }
      function ee(e) {
        return s.createElement(
          O.VY,
          { style: { maxWidth: "400px", margin: "0 auto" } },
          s.createElement(O.h4, null, (0, x.Xx)("#Error_Generic"), " "),
          s.createElement(O.uT, null, e.children)
        );
      }
      function te(e) {
        const { message: t, MarketingMessagesStore: r, active: a, next: i } = e,
          n = s.useRef(),
          l = s.useRef(a || i);
        if (
          ((function (e, t) {
            s.useEffect(() => {
              t && e.MarkMessageSeen(t.id);
            }, [t, e]);
          })(r, a ? t : null),
          (a || i) && (l.current = !0),
          !l.current)
        )
          return null;
        let o = {
          enter: D.Enter,
          enterActive: D.EnterActive,
          enterDone: D.EnterDone,
          exit: D.Exit,
          exitActive: D.ExitActive,
          exitDone: D.ExitDone,
        };
        return s.createElement(
          V.Z,
          {
            in: a,
            nodeRef: n,
            classNames: o,
            timeout: 300,
            mountOnEnter: !i,
            unmountOnExit: !i,
          },
          s.createElement(
            "div",
            { className: (0, U.Z)(D.MessageWrapper, a && D.Active), ref: n },
            s.createElement(Z.v, { message: t, active: a })
          )
        );
      }
      var re = r(19094),
        se = r(39120);
      const ae = s.createContext({ show_feature_video_template: !0 });
      function ie(e) {
        const [t, r] = s.useState(),
          a = (0, i.TH)(),
          n = s.useMemo(() => {
            new URLSearchParams(a.search);
            return {};
          }, [a.search]);
        return (
          s.useLayoutEffect(() => {
            r({});
          }, [n]),
          t ? s.createElement(ae.Provider, { value: t }, e.children, " ") : null
        );
      }
      var ne = r(27070);
      const le = {
        List: () => `${a.Z.MarketingMessages()}list/`,
        Message: (e) => `${a.Z.MarketingMessages()}${e}`,
        MessagePreview: (e) => `${a.Z.MarketingMessages()}preview/${e}`,
      };
      function oe(e) {
        const t = (function () {
          const [e, t] = s.useState(null),
            r = (0, ne.lS)();
          return (
            s.useLayoutEffect(() => {
              e ||
                t(
                  (function (e) {
                    if (!ce) {
                      const t = (0, A.kQ)(
                        "marketingmessage_config",
                        "application_config"
                      );
                      if (
                        ((ce = new G(e)),
                        null == t ? void 0 : t.promotion_operation_token)
                      ) {
                        const e = new re.J(
                          A.De.WEBAPI_BASE_URL,
                          t.promotion_operation_token
                        );
                        ce.SetSteamInterfacePromotions(e);
                      }
                    }
                    return ce;
                  })(r)
                );
            }, [e, r]),
            e
          );
        })();
        return t
          ? s.createElement(
              n.ZP,
              {
                domain: "store.steampowered.com",
                controller: "message",
                method: "default",
              },
              s.createElement(
                ie,
                null,
                s.createElement(
                  se.Ks,
                  null,
                  s.createElement(
                    i.rs,
                    null,
                    s.createElement(
                      i.AW,
                      { path: `${le.List()}` },
                      s.createElement(q, { MarketingMessagesStore: t })
                    ),
                    s.createElement(
                      i.AW,
                      { path: `${le.MessagePreview(":messageid")}` },
                      s.createElement(Q, {
                        MarketingMessagesStore: t,
                        preview: !0,
                      })
                    ),
                    s.createElement(
                      i.AW,
                      { path: `${le.Message(":messageid")}` },
                      s.createElement(Q, { MarketingMessagesStore: t })
                    ),
                    s.createElement(
                      i.AW,
                      null,
                      s.createElement(i.l_, { to: `${le.List()}` })
                    )
                  )
                )
              )
            )
          : null;
      }
      let ce;
    },
  },
]);
