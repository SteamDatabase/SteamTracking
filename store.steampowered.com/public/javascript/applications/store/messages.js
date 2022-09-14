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
    67833: (e, t, s) => {
      "use strict";
      s.d(t, {
        OL: () => i,
        Hf: () => c,
        mY: () => m,
        B1: () => o,
        ZP: () => u,
      });
      var a = s(77520),
        r = s(35092),
        n = s(90666);
      const l = JSON.parse(
        '{"store.steampowered.com":1,"steamtv":2200,"steamclient":5000,"library":5100,"friendsui":5200,"friendcontextmenu":5201,"topsellers":7000,"steamcharts":7001,"weeklytopsellers":7002,"topchartlist":7003,"overview":7004,"mostplayed":7005,"salecreatorhome":100700,"saleitembrowse":100701,"salefacetbrowse":100702,"salesection":100703,"saletabsection":100704,"salebroadcast":100705,"salecuratorrec":100706,"saleeventsched":100707,"salesubscription":100708,"saleitemsearch":100709,"salesmartwishlist":100710,"salesmartir":100711,"salesmartdlc":100712,"salesmarttagrec":100713,"salebrowsetopwishlisted":100714,"salebrowsetrendingwishlisted":100715,"salebrowsepopularcomingsoon":100716,"salebrowsemostplayeddemo":100717,"salebrowsedailyactiveuserdemo":100718,"salebrowseplayednowdemo":100719,"salebrowserecentlyreleased":100720,"salebrowsepopularpurchased":100721,"salebrowsepopularpurchaseddiscounted":100722,"salebrowsediscounted":100723,"salebrowseprice":100724,"salebrowsenewandtrending":100725,"salebrowsetopsellers":100726,"salebrowsetoprated":100727,"spotlight":40,"daily-deal":43,"promo-takeover":118,"live-broadcast":143,"large-cluster":201}'
      );
      function i(e, t = "", s = null) {
        return u.InstrumentLink(e, t, s);
      }
      function o(e, t, s = null) {
        const a = (0, r.FM)(e).toLowerCase(),
          l = (0, r.FM)(n.De.COMMUNITY_BASE_URL).toLowerCase(),
          i = (0, r.FM)(n.De.STORE_BASE_URL).toLowerCase();
        return a === l || a === i ? c(e, t, s) : e;
      }
      function c(e, t, s = null) {
        const a = m(t, s);
        return u.AddNavParamToURL(e, a);
      }
      function m(e, t = null) {
        return (null == e ? void 0 : e.domain)
          ? u.GetLinkParam(e, t)
          : n.De.SNR;
      }
      class u {
        static SetNavEventParams(e, t, s = null, a = null) {
          (u.sm_strDomain = e),
            (u.sm_strController = t),
            (u.sm_strMethod = s),
            (u.sm_strSubmethod = a),
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
        static InstrumentLink(e, t, s = null) {
          const a = u.GetLinkParam(t, s);
          return u.AddNavParamToURL(e, a);
        }
        static GetLinkParam(e, t = null) {
          let s, a;
          if (
            ("string" == typeof e || e.domain || (e = e.feature),
            "string" != typeof e && e.domain)
          )
            (s = u.ComputeLinkPrefix(
              e.domain,
              e.controller,
              e.method,
              e.submethod
            )),
              (a = e.feature),
              (t = null != t ? t : e.depth);
          else {
            if (!u.sm_strComputedLinkPrefix && !u.ComputeStaticLinkPrefix())
              return null;
            (s = u.sm_strComputedLinkPrefix),
              (a = "string" == typeof e ? e : e.feature);
          }
          let r = u.EncodeEventComponent(a);
          return r && ((s += "_" + r), t && (s += "_" + t)), s;
        }
        static AddNavParamToURL(e, t) {
          try {
            const s = new URL((0, r.Pm)(e)),
              a = new URLSearchParams(s.search);
            return (
              a.set("snr", encodeURIComponent(t)),
              s.origin + s.pathname + "?" + a.toString() + s.hash
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
            : ((0, a.X)(
                !1,
                "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!"
              ),
              !1);
        }
        static ComputeLinkPrefix(e, t, s, a) {
          let r = "";
          return (
            (r += u.EncodeEventComponent(e)),
            (r += "_"),
            (r += u.EncodeEventComponent(t)),
            (r += "_"),
            (r += u.EncodeEventComponent(s)),
            (r += "_"),
            (r += u.EncodeEventComponent(a)),
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
    65924: (e, t, s) => {
      "use strict";
      s.d(t, { HC: () => c, ZP: () => o, bJ: () => m });
      var a = s(70655),
        r = s(67294),
        n = s(67833),
        l = s(90666);
      const i = r.createContext({});
      function o(e) {
        const { children: t } = e,
          s = (0, a._T)(e, ["children"]),
          l = m();
        return r.createElement(
          i.Provider,
          {
            value: Object.assign(
              Object.assign(Object.assign({}, n.ZP.GetDefaultParams()), l),
              s
            ),
          },
          t
        );
      }
      function c(e) {
        const { children: t } = e,
          s = e.snr || l.De.SNR,
          a = n.ZP.ParseSNR(s);
        return r.createElement(
          i.Provider,
          {
            value: Object.assign(Object.assign({}, n.ZP.GetDefaultParams()), a),
          },
          t
        );
      }
      function m() {
        return r.useContext(i);
      }
    },
    13596: (e, t, s) => {
      "use strict";
      s.d(t, { V: () => i });
      var a = s(67294),
        r = s(95598),
        n = s(50732),
        l = s.n(n);
      class i extends a.PureComponent {
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
          let t = a.createElement(
            "div",
            { className: e.join(" ") },
            a.createElement(
              "div",
              { className: l().Throbber },
              a.createElement(r.wUs, { className: l().base }),
              a.createElement(r.wUs, { className: l().blur })
            )
          );
          return a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? l().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              a.createElement(
                "div",
                { className: l().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    35092: (e, t, s) => {
      "use strict";
      s.d(t, {
        FM: () => r,
        OL: () => g,
        Pm: () => i,
        XW: () => n,
        dK: () => c,
        et: () => o,
        k6: () => _,
        md: () => d,
        xL: () => u,
      });
      var a = s(90666);
      s(54698), s(41311);
      function r(e) {
        let t = new RegExp(
            "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
            "im"
          ),
          s = e.match(t);
        return s && s.length > 5 ? s[6].toString() : e;
      }
      function n(e) {
        let t = r(e);
        return t.startsWith("www.") && (t = t.slice(4)), t;
      }
      const l = /^(steam|ftp|https?):\/\//;
      function i(e) {
        return l.test(e) ? e : "https://" + e;
      }
      function o(e) {
        return e
          ? 1 != a.De.EUNIVERSE
            ? e
            : ("http:" == e.substring(0, 5) && (e = "https:" + e.substring(5)),
              (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                (e = (e = e.replace(
                  /https:\/\/media.steampowered.com\//g,
                  a.De.MEDIA_CDN_URL
                )).replace(
                  /https:\/\/cdn.akamai.steamstatic.com\//g,
                  a.De.MEDIA_CDN_URL
                )).replace(
                  /https:\/\/cdn.cloudflare.steamstatic.com\//g,
                  a.De.MEDIA_CDN_URL
                )).replace(
                /https:\/\/cdn.edgecast.steamstatic.com\//g,
                a.De.MEDIA_CDN_URL
              )).replace(
                /https:\/\/cdn.dota2.com\//g,
                a.De.MEDIA_CDN_URL
              )).replace(
                /https:\/\/storefront.steampowered.com\/v\/gfx\//g,
                a.De.MEDIA_CDN_URL + "steam/"
              )).replace(
                /https:\/\/cdn.steamcommunity.com\//g,
                a.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.akamai.steamstatic.com\//g,
                a.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.cloudflare.steamstatic.com\//g,
                a.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.edgecast.steamstatic.com\//g,
                a.De.COMMUNITY_CDN_URL
              )).replace(/{IMG_URL}/g, a.De.IMG_URL)).replace(
                /{MEDIA_CDN_URL}/g,
                a.De.MEDIA_CDN_URL
              )).replace(
                /{MEDIA_CDN_COMMUNITY_URL}/g,
                a.De.MEDIA_CDN_COMMUNITY_URL
              )).replace(
                /{COMMUNITY_CDN_URL}/g,
                a.De.COMMUNITY_CDN_URL
              )).replace(
                /{STEAM_CLAN_IMAGE}/g,
                a.De.MEDIA_CDN_COMMUNITY_URL + "images/clans/"
              )))
          : e;
      }
      function c(e) {
        if (!e) return !0;
        const t = r(e).toLocaleLowerCase();
        return (
          [
            r(a.De.COMMUNITY_CDN_URL).toLocaleLowerCase(),
            r(a.De.MEDIA_CDN_URL).toLocaleLowerCase(),
            r(a.De.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
            r(a.De.STORE_CDN_URL).toLocaleLowerCase(),
            "support.steampowered.com",
            "steamcdn-a.akamaihd.net",
            "cdn.cloudflare.steamstatic.com",
            "cdn.akamai.steamstatic.com",
          ].indexOf(t) >= 0
        );
      }
      function m(e, t) {
        return `${a.De.MEDIA_CDN_URL}steam/apps/${e}/${t}`;
      }
      function u(e) {
        return m(e, "page_bg_generated.jpg");
      }
      function _(e) {
        return m(e, "page_bg_generated_v6b.jpg");
      }
      function g(e) {
        return a.De.SNR &&
          a.De.SNR.length > 0 &&
          e &&
          -1 == e.toLocaleLowerCase().indexOf("snr=")
          ? e + (e.indexOf("?") >= 0 ? "&" : "?") + "snr=" + a.De.SNR
          : e;
      }
      function d(e, t) {
        try {
          const s = new URL(t),
            a = new URL(e);
          return s.href.replace(/\/$/, "") + a.pathname + a.search + a.hash;
        } catch (e) {
          return "";
        }
      }
    },
    75075: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { MarketingMessageRoutes: () => j, default: () => z });
      var a = s(67294),
        r = s(9355),
        n = s(78587),
        l = s(65924),
        i = s(70655),
        o = s(88767),
        c = s(26149),
        m = s(58114),
        u = s(39722),
        _ = s(90666),
        g = s(32367),
        d = s(14146);
      s(990);
      class p {
        constructor(e) {
          (this.m_setMessagesSeen = new Set()), (this.m_SteamInterface = e);
        }
        GetMessageList(e, t = !1) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const s = m.gA.Init(u.Pe);
            s.Body().set_country_code(_.De.COUNTRY),
              s.Body().set_elanguage((0, c.jM)(_.De.LANGUAGE)),
              s.Body().set_client_package_version(e.nClientPackageVersion),
              s.Body().set_operating_system(e.eOSType),
              t && s.Body().set_include_seen_messages(!0),
              (0, g.pA)(s),
              (0, g.De)(s, p.sm_DefaultDataRequest);
            const a = yield u.Bn.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              s
            );
            if (t)
              for (const e of a.Body().messages())
                e.already_seen() &&
                  this.m_setMessagesSeen.add(e.message().gid());
            return a.Body().messages();
          });
        }
        MarkMessageSeen(e) {
          if (this.m_setMessagesSeen.has(e)) return;
          const t = m.gA.Init(u.UD);
          t.Body().set_gid(e),
            u.Bn.MarkMessageSeen(
              this.m_SteamInterface.GetServiceTransport(),
              t
            ),
            this.m_setMessagesSeen.add(e);
        }
      }
      p.sm_DefaultDataRequest = {};
      class h {
        constructor(e) {
          (this.m_message = e),
            e.associated_item() &&
              (this.m_item = new d.Z(
                e.associated_item(),
                p.sm_DefaultDataRequest
              ));
          try {
            const t = JSON.parse(e.template_vars_json());
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
          return this.m_message.gid();
        }
        GetTemplateType() {
          return this.m_message.template_type();
        }
        GetTemplateVars() {
          return this.m_templateVars;
        }
        get associated_item() {
          return this.m_item;
        }
      }
      var E = s(48341),
        f = s(13596),
        M = s(41311),
        C = s(43044),
        L = s(72258),
        D = s(67833),
        b = s(54698),
        N = s(32548);
      const S = a.createContext(null);
      function v() {
        return a.useContext(S);
      }
      function k(e) {
        const { message: t } = e;
        return a.createElement(
          S.Provider,
          { value: t },
          a.createElement(
            "div",
            { className: C.all },
            a.createElement(
              "div",
              { className: C.MessageContent },
              a.createElement(w, null),
              a.createElement(P, null),
              a.createElement("div", { style: { clear: "both" } }),
              a.createElement(x, null)
            )
          )
        );
      }
      function R(e) {
        const t = (0, l.bJ)(),
          s = e.GetTemplateVars();
        return a.useCallback(
          (e) => (0, L.b8)(e, (0, D.OL)(s.linkurl, t)),
          [s.linkurl, t]
        );
      }
      function w(e) {
        const t = v(),
          s = t.GetTemplateVars(),
          r = R(t);
        let n = s.ll_image[_.De.LANGUAGE];
        return (
          n || (n = s.ll_image.english),
          a.createElement(
            "div",
            { className: C.GameImage, onClick: r },
            n && a.createElement(A, { path: n.path })
          )
        );
      }
      function P(e) {
        const t = v(),
          s = R(t),
          r =
            t.GetTemplateVars().button_text_custom ||
            t.GetTemplateVars().button_text;
        return a.createElement(
          "div",
          { className: C.ButtonContainer },
          a.createElement(N.S, null, a.createElement(U, null)),
          a.createElement(T, null),
          a.createElement(
            "div",
            { className: C.Btn, style: { cursor: "pointer" }, onClick: s },
            r
          )
        );
      }
      function U() {
        const e = v().associated_item;
        if (
          e &&
          e.GetBestPurchaseOption() &&
          e.GetBestPurchaseOption().formatted_final_price
        ) {
          const t = e.GetBestPurchaseOption();
          return a.createElement(
            "div",
            { className: C.Price },
            a.createElement(
              "div",
              {
                className:
                  t.formatted_final_price.length < 7
                    ? C.PriceReal
                    : C.PriceRealShort,
              },
              t.formatted_final_price
            ),
            t.discount_pct > 0 &&
              a.createElement(
                "div",
                { className: C.PriceRegular },
                t.formatted_original_price
              )
          );
        }
        return a.createElement("div", { className: C.NoPrice });
      }
      function T() {
        const e = v();
        return e.GetTemplateVars().disable_sharing ||
          !e.GetTemplateVars().shareurl ||
          _.De.EREALM == b.IN.k_ESteamRealmChina ||
          "XC" == _.De.COUNTRY
          ? null
          : a.createElement(
              "div",
              { className: C.ShareLinks },
              "Share:",
              a.createElement("br", null),
              a.createElement(
                I,
                { sitename: "facebook" },
                a.createElement(y, { path: "marketing/image/facebook.gif" })
              ),
              a.createElement(
                I,
                { sitename: "twitter" },
                a.createElement(y, { path: "marketing/image/twitter.gif" })
              ),
              a.createElement(
                I,
                { sitename: "reddit" },
                a.createElement(y, { path: "marketing/image/reddit.gif" })
              )
            );
      }
      function I(e) {
        const t = v()
          .GetTemplateVars()
          .shareurl.replace(/%SITENAME%/, e.sitename);
        return a.createElement(L.ns, { href: t, children: e.children });
      }
      function x(e) {
        const t = v();
        let s = a.createElement(
          a.Fragment,
          null,
          `© ${new Date().getFullYear()} Valve Corporation and ${
            t.GetTemplateVars().partner
          }.`,
          a.createElement("br", null),
          "All trademarks are property of their respective owners in the US and other countries."
        );
        return (
          t.GetTemplateVars().use_custom_legal_text &&
            (s = a.createElement(
              a.Fragment,
              null,
              t.GetTemplateVars().custom_legal_text
            )),
          a.createElement("div", { className: C.Legal }, s)
        );
      }
      function y(e) {
        const { path: t } = e,
          s = (0, i._T)(e, ["path"]);
        return a.createElement(
          "img",
          Object.assign({}, s, { src: `${_.De.PUBLIC_SHARED_URL}images/${t}` })
        );
      }
      function A(e) {
        var t;
        const { path: s } = e,
          r = (0, i._T)(e, ["path"]),
          n = v();
        return a.createElement(
          "img",
          Object.assign({}, r, {
            src: `${_.De.MEDIA_CDN_URL}steam/marketing/${n.id}/${s}?t=${
              null === (t = n.GetTemplateVars()) || void 0 === t
                ? void 0
                : t.last_asset_mtime
            }`,
          })
        );
      }
      function O(e) {
        const { message: t } = e;
        return "image" === t.GetTemplateType()
          ? a.createElement(k, { message: t })
          : null;
      }
      function G(e) {
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
      function B(e) {
        const { MarketingMessagesStore: t } = e,
          s = (function () {
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
          })(),
          { rgMessages: r, isError: l } = (function (e, t) {
            const { bIncludeSeenMessages: s } = t,
              r = (0, i._T)(t, ["bIncludeSeenMessages"]),
              {
                data: n,
                isLoading: l,
                isError: c,
              } = (0, o.useQuery)(
                ["MarketingMessages", "List", r, { bIncludeSeenMessages: !!s }],
                () => e.GetMessageList(r, s)
              ),
              m = a.useMemo(
                () =>
                  null == n
                    ? void 0
                    : n.map((e) => ({
                        message: new h(e.message()),
                        alreadySeen: e.already_seen(),
                      })),
                [n]
              );
            return { rgMessages: l ? null : m, isError: c };
          })(t, s),
          [c, m] = a.useState(!1),
          [u, _] = a.useState(0),
          g = (0, n.k6)();
        if (
          (a.useEffect(() => {
            !r ||
              r.length ||
              l ||
              (s.bIncludeSeenMessages
                ? m(!0)
                : g.replace(
                    Object.assign(Object.assign({}, g.location), {
                      search: G(
                        Object.assign(Object.assign({}, s), {
                          bIncludeSeenMessages: !0,
                        })
                      ),
                    })
                  ));
          }, [r, s, g, l]),
          l)
        )
          return a.createElement(
            V,
            null,
            (0, M.Xx)("#Error_ErrorCommunicatingWithNetwork")
          );
        if (c)
          return a.createElement(
            V,
            null,
            (0, M.Xx)("#MarketingMessages_NoneAvailable")
          );
        if (null === r || !r.length) return a.createElement(f.V, null);
        const d = r[u].message,
          p = u < r.length - 1 ? r[u + 1].message : null;
        return a.createElement(
          "div",
          null,
          a.createElement($, {
            key: d.id,
            message: d,
            MarketingMessagesStore: t,
          }),
          p &&
            a.createElement($, {
              key: p.id,
              message: p,
              MarketingMessagesStore: t,
              preload: !0,
            }),
          a.createElement(
            E.Uq,
            null,
            u > 0
              ? a.createElement(
                  E.zx,
                  { onClick: () => _(u - 1) },
                  "<< Previous"
                )
              : a.createElement("div", null),
            u < r.length - 1
              ? a.createElement(E.zx, { onClick: () => _(u + 1) }, "Next >>")
              : a.createElement("div", null)
          )
        );
      }
      function V(e) {
        return a.createElement(
          E.VY,
          { style: { maxWidth: "400px", margin: "0 auto" } },
          a.createElement(E.h4, null, (0, M.Xx)("#Error_Generic"), " "),
          a.createElement(E.uT, null, e.children)
        );
      }
      function $(e) {
        const { message: t, MarketingMessagesStore: s, preload: r } = e;
        return (
          (function (e, t) {
            a.useEffect(() => {
              t && e.MarkMessageSeen(t.id);
            }, [t, e]);
          })(s, r ? null : t),
          a.createElement(
            "div",
            { style: r ? { display: "none" } : {} },
            a.createElement(O, { message: t })
          )
        );
      }
      var Y = s(65902);
      const j = {
        List: () => `${r.Z.MarketingMessages()}list/`,
        Message: (e) => `${r.Z.MarketingMessages()}${e}`,
      };
      function z(e) {
        const t = (function () {
          const [e, t] = a.useState(null);
          return (
            a.useEffect(() => {
              e ||
                t(
                  (function () {
                    if (!Z) {
                      const e = (0, _.kQ)(
                          "store_user_config",
                          "application_config"
                        ),
                        t = new Y.J(_.De.WEBAPI_BASE_URL, e.webapi_token);
                      Z = new p(t);
                    }
                    return Z;
                  })()
                );
            }, [e]),
            e
          );
        })();
        return t
          ? a.createElement(
              l.ZP,
              { domain: "store.steampowered.com", controller: "messages" },
              a.createElement(
                n.rs,
                null,
                a.createElement(
                  n.AW,
                  { path: `${j.List()}` },
                  a.createElement(B, { MarketingMessagesStore: t })
                ),
                a.createElement(
                  n.AW,
                  { path: `${j.Message(":messageid")}` },
                  a.createElement(W, null)
                ),
                a.createElement(
                  n.AW,
                  null,
                  a.createElement(n.l_, { to: `${j.List()}` })
                )
              )
            )
          : null;
      }
      function W() {
        const e = (0, n.$B)();
        return a.createElement(
          "h1",
          null,
          "This is message ",
          e.params.messageid
        );
      }
      let Z;
    },
  },
]);
