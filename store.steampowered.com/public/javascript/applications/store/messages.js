/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4158],
  {
    43044: (e) => {
      e.exports = {
        MessageContent: "image_MessageContent_rohJ-",
        GameImage: "image_GameImage_2It5b",
        TextTop: "image_TextTop_3cnZM",
        TextBottom: "image_TextBottom_2pJeu",
        Legal: "image_Legal_zzC_W",
        ButtonContainer: "image_ButtonContainer_3CVNg",
        Btn: "image_Btn_3YohC",
        Price: "image_Price_KtsI7",
        NoPrice: "image_NoPrice_3gtjP",
        PriceReal: "image_PriceReal_zlxx_",
        PriceRealShort: "image_PriceRealShort_1XB_w",
        PriceRegular: "image_PriceRegular_7m4i8",
        Strike: "image_Strike_3fFJl",
        ShareLinks: "image_ShareLinks_2FhhQ",
        All: "image_All_1WpMe",
      };
    },
    67833: (e, t, a) => {
      "use strict";
      a.d(t, {
        OL: () => o,
        Hf: () => c,
        mY: () => m,
        B1: () => i,
        ZP: () => u,
      });
      var s = a(77520),
        r = a(35092),
        n = a(90666);
      const l = JSON.parse(
        '{"store.steampowered.com":1,"steamtv":2200,"steamclient":5000,"library":5100,"friendsui":5200,"friendcontextmenu":5201,"topsellers":7000,"steamcharts":7001,"weeklytopsellers":7002,"topchartlist":7003,"overview":7004,"mostplayed":7005,"salecreatorhome":100700,"saleitembrowse":100701,"salefacetbrowse":100702,"salesection":100703,"saletabsection":100704,"salebroadcast":100705,"salecuratorrec":100706,"saleeventsched":100707,"salesubscription":100708,"saleitemsearch":100709,"salesmartwishlist":100710,"salesmartir":100711,"salesmartdlc":100712,"salesmarttagrec":100713,"salebrowsetopwishlisted":100714,"salebrowsetrendingwishlisted":100715,"salebrowsepopularcomingsoon":100716,"salebrowsemostplayeddemo":100717,"salebrowsedailyactiveuserdemo":100718,"salebrowseplayednowdemo":100719,"salebrowserecentlyreleased":100720,"salebrowsepopularpurchased":100721,"salebrowsepopularpurchaseddiscounted":100722,"salebrowsediscounted":100723,"salebrowseprice":100724,"salebrowsenewandtrending":100725,"salebrowsetopsellers":100726,"salebrowsetoprated":100727,"spotlight":40,"daily-deal":43,"promo-takeover":118,"live-broadcast":143,"large-cluster":201}'
      );
      function o(e, t = "", a = null) {
        return u.InstrumentLink(e, t, a);
      }
      function i(e, t, a = null) {
        const s = (0, r.FM)(e).toLowerCase(),
          l = (0, r.FM)(n.De.COMMUNITY_BASE_URL).toLowerCase(),
          o = (0, r.FM)(n.De.STORE_BASE_URL).toLowerCase();
        return s === l || s === o ? c(e, t, a) : e;
      }
      function c(e, t, a = null) {
        const s = m(t, a);
        return u.AddNavParamToURL(e, s);
      }
      function m(e, t = null) {
        return (null == e ? void 0 : e.domain)
          ? u.GetLinkParam(e, t)
          : n.De.SNR;
      }
      class u {
        static SetNavEventParams(e, t, a = null, s = null) {
          (u.sm_strDomain = e),
            (u.sm_strController = t),
            (u.sm_strMethod = a),
            (u.sm_strSubmethod = s),
            (u.sm_strComputedLinkPrefix = null);
        }
        static GetDefaultParams() {
          let e = { domain: u.sm_strDomain, controller: u.sm_strController };
          return (
            u.sm_strMethod && (e.method = u.sm_strMethod),
            u.sm_strSubmethod && (e.submethod = u.sm_strSubmethod),
            e
          );
        }
        static ParseSNR(e) {
          const t = e.split("_") || [];
          return {
            domain: t[0],
            controller: t[1],
            method: t[2],
            submethod: t[3],
            feature: t[4],
            depth: t[5] ? Number(t[5]) : void 0,
          };
        }
        static InstrumentLink(e, t, a = null) {
          const s = u.GetLinkParam(t, a);
          return u.AddNavParamToURL(e, s);
        }
        static GetLinkParam(e, t = null) {
          let a, s;
          if (
            ("string" == typeof e || e.domain || (e = e.feature),
            "string" != typeof e && e.domain)
          )
            (a = u.ComputeLinkPrefix(
              e.domain,
              e.controller,
              e.method,
              e.submethod
            )),
              (s = e.feature),
              (t = null != t ? t : e.depth);
          else {
            if (!u.sm_strComputedLinkPrefix && !u.ComputeStaticLinkPrefix())
              return null;
            (a = u.sm_strComputedLinkPrefix),
              (s = "string" == typeof e ? e : e.feature);
          }
          let r = u.EncodeEventComponent(s);
          return r && ((a += "_" + r), t && (a += "_" + t)), a;
        }
        static AddNavParamToURL(e, t) {
          try {
            const a = new URL((0, r.Pm)(e)),
              s = new URLSearchParams(a.search);
            return (
              s.set("snr", encodeURIComponent(t)),
              a.origin + a.pathname + "?" + s.toString() + a.hash
            );
          } catch (t) {
            return console.error(e, t), e;
          }
        }
        static ComputeStaticLinkPrefix() {
          return u.sm_strDomain
            ? ((u.sm_strComputedLinkPrefix = u.ComputeLinkPrefix(
                u.sm_strDomain,
                u.sm_strController,
                u.sm_strMethod,
                u.sm_strSubmethod
              )),
              !0)
            : ((0, s.X)(
                !1,
                "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!"
              ),
              !1);
        }
        static ComputeLinkPrefix(e, t, a, s) {
          let r = "";
          return (
            (r += u.EncodeEventComponent(e)),
            (r += "_"),
            (r += u.EncodeEventComponent(t)),
            (r += "_"),
            (r += u.EncodeEventComponent(a)),
            (r += "_"),
            (r += u.EncodeEventComponent(s)),
            r
          );
        }
        static EncodeEventComponent(e) {
          if (!e) return "";
          return e in l
            ? "" + l[e]
            : (e.match(/^[0-9]+$/) || (e = e.replace(/^[0-9]+/, "")),
              e.replace(/[^a-zA-Z0-9\- ]+/g, ""));
        }
      }
    },
    65924: (e, t, a) => {
      "use strict";
      a.d(t, { HC: () => c, ZP: () => i, bJ: () => m });
      var s = a(70655),
        r = a(67294),
        n = a(67833),
        l = a(90666);
      const o = r.createContext({});
      function i(e) {
        const { children: t } = e,
          a = (0, s._T)(e, ["children"]),
          l = m();
        return r.createElement(
          o.Provider,
          {
            value: Object.assign(
              Object.assign(Object.assign({}, n.ZP.GetDefaultParams()), l),
              a
            ),
          },
          t
        );
      }
      function c(e) {
        const { children: t } = e,
          a = e.snr || l.De.SNR,
          s = n.ZP.ParseSNR(a);
        return r.createElement(
          o.Provider,
          {
            value: Object.assign(Object.assign({}, n.ZP.GetDefaultParams()), s),
          },
          t
        );
      }
      function m() {
        return r.useContext(o);
      }
    },
    13596: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => o });
      var s = a(67294),
        r = a(95598),
        n = a(50732),
        l = a.n(n);
      class o extends s.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(l().throbber_small)
            : "medium" == this.props.size
            ? e.push(l().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(l().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(l().throbber_xxlarge)
            : e.push(l().throbber_large);
        }
        render() {
          let e = [l().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(l().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(l().Static);
          let t = s.createElement(
            "div",
            { className: e.join(" ") },
            s.createElement(
              "div",
              { className: l().Throbber },
              s.createElement(r.wUs, { className: l().base }),
              s.createElement(r.wUs, { className: l().blur })
            )
          );
          return s.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? l().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              s.createElement(
                "div",
                { className: l().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    35092: (e, t, a) => {
      "use strict";
      a.d(t, {
        FM: () => r,
        OL: () => p,
        Pm: () => o,
        XW: () => n,
        dK: () => c,
        et: () => i,
        k6: () => _,
        md: () => d,
        xL: () => u,
      });
      var s = a(90666);
      a(92398);
      function r(e) {
        let t = new RegExp(
            "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
            "im"
          ),
          a = e.match(t);
        return a && a.length > 5 ? a[6].toString() : e;
      }
      function n(e) {
        let t = r(e);
        return t.startsWith("www.") && (t = t.slice(4)), t;
      }
      const l = /^(steam|ftp|https?):\/\//;
      function o(e) {
        return l.test(e) ? e : "https://" + e;
      }
      function i(e) {
        return e
          ? 1 != s.De.EUNIVERSE
            ? e
            : ("http:" == e.substring(0, 5) && (e = "https:" + e.substring(5)),
              (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                (e = (e = e.replace(
                  /https:\/\/media.steampowered.com\//g,
                  s.De.MEDIA_CDN_URL
                )).replace(
                  /https:\/\/cdn.akamai.steamstatic.com\//g,
                  s.De.MEDIA_CDN_URL
                )).replace(
                  /https:\/\/cdn.cloudflare.steamstatic.com\//g,
                  s.De.MEDIA_CDN_URL
                )).replace(
                /https:\/\/cdn.edgecast.steamstatic.com\//g,
                s.De.MEDIA_CDN_URL
              )).replace(
                /https:\/\/cdn.dota2.com\//g,
                s.De.MEDIA_CDN_URL
              )).replace(
                /https:\/\/storefront.steampowered.com\/v\/gfx\//g,
                s.De.MEDIA_CDN_URL + "steam/"
              )).replace(
                /https:\/\/cdn.steamcommunity.com\//g,
                s.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.akamai.steamstatic.com\//g,
                s.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.cloudflare.steamstatic.com\//g,
                s.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.edgecast.steamstatic.com\//g,
                s.De.COMMUNITY_CDN_URL
              )).replace(/{IMG_URL}/g, s.De.IMG_URL)).replace(
                /{MEDIA_CDN_URL}/g,
                s.De.MEDIA_CDN_URL
              )).replace(
                /{MEDIA_CDN_COMMUNITY_URL}/g,
                s.De.MEDIA_CDN_COMMUNITY_URL
              )).replace(
                /{COMMUNITY_CDN_URL}/g,
                s.De.COMMUNITY_CDN_URL
              )).replace(
                /{STEAM_CLAN_IMAGE}/g,
                s.De.MEDIA_CDN_COMMUNITY_URL + "images/clans/"
              )))
          : e;
      }
      function c(e) {
        if (!e) return !0;
        const t = r(e).toLocaleLowerCase();
        return (
          [
            r(s.De.COMMUNITY_CDN_URL).toLocaleLowerCase(),
            r(s.De.MEDIA_CDN_URL).toLocaleLowerCase(),
            r(s.De.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
            r(s.De.STORE_CDN_URL).toLocaleLowerCase(),
            "support.steampowered.com",
            "steamcdn-a.akamaihd.net",
            "cdn.cloudflare.steamstatic.com",
            "cdn.akamai.steamstatic.com",
          ].indexOf(t) >= 0
        );
      }
      function m(e, t) {
        return `${s.De.MEDIA_CDN_URL}steam/apps/${e}/${t}`;
      }
      function u(e) {
        return m(e, "page_bg_generated.jpg");
      }
      function _(e) {
        return m(e, "page_bg_generated_v6b.jpg");
      }
      function p(e) {
        return s.De.SNR &&
          s.De.SNR.length > 0 &&
          e &&
          -1 == e.toLocaleLowerCase().indexOf("snr=")
          ? e + (e.indexOf("?") >= 0 ? "&" : "?") + "snr=" + s.De.SNR
          : e;
      }
      function d(e, t) {
        try {
          const a = new URL(t),
            s = new URL(e);
          return a.origin + s.pathname + s.search + s.hash;
        } catch (e) {
          return "";
        }
      }
    },
    71034: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { MarketingMessageRoutes: () => G, default: () => O });
      var s = a(67294),
        r = a(9355),
        n = a(78587),
        l = a(65924),
        o = a(70655),
        i = a(88767),
        c = a(26149),
        m = a(58114),
        u = a(39722),
        _ = a(90666);
      class p {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        GetMessageList() {
          return (0, o.mG)(this, void 0, void 0, function* () {
            const e = m.gA.Init(u.Pe);
            e.Body().set_country_code(_.De.COUNTRY),
              e.Body().set_elanguage((0, c.jM)(_.De.LANGUAGE));
            return (yield u.Bn.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              e
            ))
              .Body()
              .toObject().messages;
          });
        }
      }
      class d {
        constructor(e) {
          this.m_message = e;
          try {
            const t = JSON.parse(e.template_vars_json);
            t.use_additional_fields &&
              (t.use_additional_fields = "true" === t.use_additional_fields),
              t.use_custom_legal_text &&
                (t.use_custom_legal_text = "true" === t.use_custom_legal_text),
              t.last_asset_mtime &&
                (t.last_asset_mtime = parseInt(t.last_asset_mtime)),
              (t.ll_image = t.ll_image || {}),
              (this.m_templateVars = t);
          } catch (e) {}
        }
        get id() {
          return this.m_message.gid;
        }
        GetTemplateType() {
          return this.m_message.template_type;
        }
        GetTemplateVars() {
          return this.m_templateVars;
        }
      }
      var g = a(13596),
        h = a(43044),
        E = a(72258),
        f = a(67833),
        C = a(92398);
      const L = s.createContext(null);
      function D() {
        return s.useContext(L);
      }
      function b(e) {
        const { message: t } = e;
        return s.createElement(
          L.Provider,
          { value: t },
          s.createElement(
            "div",
            { className: h.all },
            s.createElement(
              "div",
              { className: h.MessageContent },
              s.createElement(M, null),
              s.createElement(v, null),
              s.createElement("div", { style: { clear: "both" } }),
              s.createElement(k, null)
            )
          )
        );
      }
      function N(e) {
        const t = (0, l.bJ)(),
          a = e.GetTemplateVars();
        return s.useCallback(
          (e) => (0, E.b8)(e, (0, f.OL)(a.linkurl, t)),
          [a.linkurl, t]
        );
      }
      function M(e) {
        const t = D(),
          a = t.GetTemplateVars(),
          r = N(t);
        let n = a.ll_image[_.De.LANGUAGE];
        return (
          n || (n = a.ll_image.english),
          s.createElement(
            "div",
            { className: h.GameImage, onClick: r },
            n && s.createElement(S, { path: n.path })
          )
        );
      }
      function v(e) {
        const t = D(),
          a = N(t),
          r =
            t.GetTemplateVars().button_text_custom ||
            t.GetTemplateVars().button_text;
        return s.createElement(
          "div",
          { className: h.ButtonContainer },
          s.createElement(w, null),
          s.createElement(R, null),
          s.createElement(
            "div",
            { className: h.Btn, style: { cursor: "pointer" }, onClick: a },
            r
          )
        );
      }
      function w() {
        return s.createElement("div", { className: h.NoPrice });
      }
      function R() {
        const e = D();
        return e.GetTemplateVars().disable_sharing ||
          !e.GetTemplateVars().shareurl ||
          _.De.EREALM == C.IN.k_ESteamRealmChina ||
          "XC" == _.De.COUNTRY
          ? null
          : s.createElement(
              "div",
              { className: h.ShareLinks },
              "Share:",
              s.createElement("br", null),
              s.createElement(
                U,
                { sitename: "facebook" },
                s.createElement(T, { path: "marketing/image/facebook.gif" })
              ),
              s.createElement(
                U,
                { sitename: "twitter" },
                s.createElement(T, { path: "marketing/image/twitter.gif" })
              ),
              s.createElement(
                U,
                { sitename: "reddit" },
                s.createElement(T, { path: "marketing/image/reddit.gif" })
              )
            );
      }
      function U(e) {
        const t = D()
          .GetTemplateVars()
          .shareurl.replace(/%SITENAME%/, e.sitename);
        return s.createElement(E.ns, { href: t, children: e.children });
      }
      function k(e) {
        const t = D();
        let a = s.createElement(
          s.Fragment,
          null,
          `© ${new Date().getFullYear()} Valve Corporation and ${
            t.GetTemplateVars().partner
          }.`,
          s.createElement("br", null),
          "All trademarks are property of their respective owners in the US and other countries."
        );
        return (
          t.GetTemplateVars().use_custom_legal_text &&
            (a = s.createElement(
              s.Fragment,
              null,
              t.GetTemplateVars().custom_legal_text
            )),
          s.createElement("div", { className: h.Legal }, a)
        );
      }
      function T(e) {
        const { path: t } = e,
          a = (0, o._T)(e, ["path"]);
        return s.createElement(
          "img",
          Object.assign({}, a, { src: `${_.De.PUBLIC_SHARED_URL}images/${t}` })
        );
      }
      function S(e) {
        var t;
        const { path: a } = e,
          r = (0, o._T)(e, ["path"]),
          n = D();
        return s.createElement(
          "img",
          Object.assign({}, r, {
            src: `${_.De.MEDIA_CDN_URL}steam/marketing/${n.id}/${a}?t=${
              null === (t = n.GetTemplateVars()) || void 0 === t
                ? void 0
                : t.last_asset_mtime
            }`,
          })
        );
      }
      function P(e) {
        const { message: t } = e;
        return "image" === t.GetTemplateType()
          ? s.createElement(b, { message: t })
          : null;
      }
      var I = a(48341);
      function x(e) {
        const t = (function (e) {
            const { data: t, isLoading: a } = (0, i.useQuery)(
                ["MarketingMessages", "List"],
                () => e.GetMessageList()
              ),
              r = s.useMemo(
                () =>
                  null == t
                    ? void 0
                    : t.map((e) => {
                        var { message: t } = e,
                          a = (0, o._T)(e, ["message"]);
                        return Object.assign({ message: new d(t) }, a);
                      }),
                [t]
              );
            return a ? null : r;
          })(e.MarketingMessagesStore),
          [a, r] = s.useState(0);
        if (null === t) return s.createElement(g.V, null);
        const n = t[a];
        return s.createElement(
          "div",
          null,
          s.createElement(P, { message: n.message }),
          s.createElement(
            I.Uq,
            null,
            a > 0
              ? s.createElement(
                  I.zx,
                  { onClick: () => r(a - 1) },
                  "<< Previous"
                )
              : s.createElement("div", null),
            a < t.length - 1
              ? s.createElement(I.zx, { onClick: () => r(a + 1) }, "Next >>")
              : s.createElement("div", null)
          )
        );
      }
      var A = a(65902);
      const G = {
        List: () => `${r.Z.MarketingMessages()}list/`,
        Message: (e) => `${r.Z.MarketingMessages()}${e}`,
      };
      function O(e) {
        const t = (function () {
          const [e, t] = s.useState(null);
          return (
            s.useEffect(() => {
              e ||
                t(
                  (function () {
                    if (!B) {
                      const e = (0, _.kQ)(
                          "store_user_config",
                          "application_config"
                        ),
                        t = new A.J(_.De.WEBAPI_BASE_URL, e.webapi_token);
                      B = new p(t);
                    }
                    return B;
                  })()
                );
            }, [e]),
            e
          );
        })();
        return t
          ? s.createElement(
              l.ZP,
              { domain: "store.steampowered.com", controller: "messages" },
              s.createElement(
                n.rs,
                null,
                s.createElement(
                  n.AW,
                  { path: `${G.List()}` },
                  s.createElement(x, { MarketingMessagesStore: t })
                ),
                s.createElement(
                  n.AW,
                  { path: `${G.Message(":messageid")}` },
                  s.createElement(y, null)
                ),
                s.createElement(
                  n.AW,
                  null,
                  s.createElement(n.l_, { to: `${G.List()}` })
                )
              )
            )
          : null;
      }
      function y() {
        const e = (0, n.$B)();
        return s.createElement(
          "h1",
          null,
          "This is message ",
          e.params.messageid
        );
      }
      let B;
    },
  },
]);
