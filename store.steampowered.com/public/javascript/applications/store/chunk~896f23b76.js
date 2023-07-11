/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4994],
  {
    98009: (e, t, s) => {
      s.d(t, {
        OL: () => c,
        Hf: () => i,
        mY: () => m,
        B1: () => l,
        ZP: () => u,
      });
      var r = s(23801),
        a = s(207),
        n = s(32765);
      const o = JSON.parse(
        '{"store.steampowered.com":1,"default":4,"message":41,"steamtv":2200,"steamclient":5000,"library":5100,"friendsui":5200,"friendcontextmenu":5201,"topsellers":7000,"steamcharts":7001,"weeklytopsellers":7002,"topchartlist":7003,"overview":7004,"mostplayed":7005,"salecreatorhome":100700,"saleitembrowse":100701,"salefacetbrowse":100702,"salesection":100703,"saletabsection":100704,"salebroadcast":100705,"salecuratorrec":100706,"saleeventsched":100707,"salesubscription":100708,"saleitemsearch":100709,"salesmartwishlist":100710,"salesmartir":100711,"salesmartdlc":100712,"salesmarttagrec":100713,"salebrowsetopwishlisted":100714,"salebrowsetrendingwishlisted":100715,"salebrowsepopularcomingsoon":100716,"salebrowsemostplayeddemo":100717,"salebrowsedailyactiveuserdemo":100718,"salebrowseplayednowdemo":100719,"salebrowserecentlyreleased":100720,"salebrowsepopularpurchased":100721,"salebrowsepopularpurchaseddiscounted":100722,"salebrowsediscounted":100723,"salebrowseprice":100724,"salebrowsenewandtrending":100725,"salebrowsetopsellers":100726,"salebrowsetoprated":100727,"discoveryqueue2022":100728,"saleeventsection":100729,"salesectionlinks":100730,"salesectionrewards":100731,"salesectiontext":100732,"salesectioneventschedule":100733,"spotlight":40,"daily-deal":43,"promo-takeover":118,"live-broadcast":143,"large-cluster":201,"yearinreview":662}',
      );
      function c(e, t = "", s = null) {
        return u.InstrumentLink(e, t, s);
      }
      function l(e, t, s = null) {
        const r = (0, a.FM)(e).toLowerCase(),
          o = (0, a.FM)(n.De.COMMUNITY_BASE_URL).toLowerCase(),
          c = (0, a.FM)(n.De.STORE_BASE_URL).toLowerCase();
        return r === o || r === c ? i(e, t, s) : e;
      }
      function i(e, t, s = null) {
        const r = m(t, s);
        return u.AddNavParamToURL(e, r);
      }
      function m(e, t = null) {
        return (null == e ? void 0 : e.domain)
          ? u.GetLinkParam(e, t)
          : n.De.SNR;
      }
      class u {
        static SetNavEventParams(e, t, s = null, r = null) {
          (u.sm_strDomain = e),
            (u.sm_strController = t),
            (u.sm_strMethod = s),
            (u.sm_strSubmethod = r),
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
          const r = u.GetLinkParam(t, s);
          return u.AddNavParamToURL(e, r);
        }
        static GetLinkParam(e, t = null) {
          let s, r;
          if (
            ("string" == typeof e || e.domain || (e = e.feature),
            "string" != typeof e && e.domain)
          )
            (s = u.ComputeLinkPrefix(
              e.domain,
              e.controller,
              e.method,
              e.submethod,
            )),
              (r = e.feature),
              (t = null != t ? t : e.depth);
          else {
            if (!u.sm_strComputedLinkPrefix && !u.ComputeStaticLinkPrefix())
              return null;
            (s = u.sm_strComputedLinkPrefix),
              (r = "string" == typeof e ? e : e.feature);
          }
          let a = u.EncodeEventComponent(r);
          return a && ((s += "_" + a), t && (s += "_" + t)), s;
        }
        static AddNavParamToURL(e, t) {
          try {
            const s = new URL((0, a.Pm)(e)),
              r = new URLSearchParams(s.search);
            return (
              r.set("snr", encodeURIComponent(t)),
              s.origin + s.pathname + "?" + r.toString() + s.hash
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
                u.sm_strSubmethod,
              )),
              !0)
            : ((0, r.X)(
                !1,
                "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
              ),
              !1);
        }
        static ComputeLinkPrefix(e, t, s, r) {
          let a = "";
          return (
            (a += u.EncodeEventComponent(e)),
            (a += "_"),
            (a += u.EncodeEventComponent(t)),
            (a += "_"),
            (a += u.EncodeEventComponent(s)),
            (a += "_"),
            (a += u.EncodeEventComponent(r)),
            a
          );
        }
        static EncodeEventComponent(e) {
          if (!e) return "";
          return e in o
            ? "" + o[e]
            : (e.match(/^[0-9]+$/) || (e = e.replace(/^[0-9]+/, "")),
              e.replace(/[^a-zA-Z0-9\- ]+/g, ""));
        }
      }
    },
    13345: (e, t, s) => {
      s.d(t, { HZ: () => c, OL: () => n, pd: () => o });
      var r = s(24174),
        a = s(44973);
      function n() {
        return `${a.De.CLAN_CDN_ASSET_URL}images/`;
      }
      function o(e) {
        return (e = e.replace(r.A1, n())).replace("http://", "https://");
      }
      function c(e) {
        return e.replace(/{STEAM_CLAN_IMAGE}/g, n());
      }
    },
    71161: (e, t, s) => {
      s.d(t, { HC: () => i, YR: () => u, ZP: () => l, bJ: () => m });
      var r = s(33940),
        a = s(89526),
        n = s(98009),
        o = s(32765);
      const c = a.createContext({});
      function l(e) {
        const { children: t } = e,
          s = (0, r._T)(e, ["children"]),
          o = m();
        return a.createElement(
          c.Provider,
          {
            value: Object.assign(
              Object.assign(Object.assign({}, n.ZP.GetDefaultParams()), o),
              s,
            ),
          },
          t,
        );
      }
      function i(e) {
        const { children: t } = e,
          s = e.snr || o.De.SNR,
          r = n.ZP.ParseSNR(s);
        return a.createElement(
          c.Provider,
          {
            value: Object.assign(Object.assign({}, n.ZP.GetDefaultParams()), r),
          },
          t,
        );
      }
      function m() {
        return a.useContext(c);
      }
      function u(e, t, s) {
        const r = m(),
          o = a.useMemo(
            () =>
              n.ZP.GetLinkParam(
                Object.assign(Object.assign({}, r), {
                  feature: t || r.feature,
                }),
                s,
              ),
            [r, t, s],
          );
        return a.useMemo(() => n.ZP.AddNavParamToURL(e, o), [e, o]);
      }
    },
    207: (e, t, s) => {
      s.d(t, {
        FM: () => o,
        H7: () => n,
        OL: () => L,
        Pm: () => i,
        XW: () => c,
        dK: () => u,
        et: () => m,
        k6: () => _,
        md: () => D,
        xL: () => p,
      });
      var r = s(32765),
        a = (s(14826), s(13345));
      const n =
        /((?:(?:https?:)|(?:www[.,])|(?:[!#-;=?-Z\\\^-~]+[\.,](?:(?:[a-zA-Z]{2,4}[\.?]*[\/\\\?#])|(?:(?:biz|com|gallery|in|name|net|online|org|tech|trade|xyz)(?=\W|$)))))(?:[^ː\s"<>\[\]]*[^\\s"<>\[\],.ː:])?)/;
      function o(e) {
        let t = new RegExp(
            "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
            "im",
          ),
          s = e.match(t);
        return s && s.length > 5 ? s[6].toString() : e;
      }
      function c(e) {
        let t = o(e);
        return t.startsWith("www.") && (t = t.slice(4)), t;
      }
      const l = /^(steam|ftp|https?):\/\//;
      function i(e) {
        return l.test(e) ? e : "https://" + e;
      }
      function m(e) {
        return e
          ? 1 != r.De.EUNIVERSE
            ? e
            : ("http:" == e.substring(0, 5) && (e = "https:" + e.substring(5)),
              (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                (e = (e = (e = e.replace(
                  /https:\/\/media.steampowered.com\//g,
                  r.De.MEDIA_CDN_URL,
                )).replace(
                  /https:\/\/cdn.akamai.steamstatic.com\//g,
                  r.De.MEDIA_CDN_URL,
                )).replace(
                  /https:\/\/cdn.cloudflare.steamstatic.com\//g,
                  r.De.MEDIA_CDN_URL,
                )).replace(
                  /https:\/\/cdn.edgecast.steamstatic.com\//g,
                  r.De.MEDIA_CDN_URL,
                )).replace(
                /https:\/\/cdn.dota2.com\//g,
                r.De.MEDIA_CDN_URL,
              )).replace(
                /https:\/\/storefront.steampowered.com\/v\/gfx\//g,
                r.De.MEDIA_CDN_URL + "steam/",
              )).replace(
                /https:\/\/clan.akamai.steamstatic.com\//g,
                r.De.CLAN_CDN_ASSET_URL,
              )).replace(
                /https:\/\/clan.cloudflare.steamstatic.com\//g,
                r.De.CLAN_CDN_ASSET_URL,
              )).replace(
                /https:\/\/cdn.steamcommunity.com\//g,
                r.De.COMMUNITY_CDN_URL,
              )).replace(
                /https:\/\/community.akamai.steamstatic.com\//g,
                r.De.COMMUNITY_CDN_URL,
              )).replace(
                /https:\/\/community.cloudflare.steamstatic.com\//g,
                r.De.COMMUNITY_CDN_URL,
              )).replace(
                /https:\/\/community.edgecast.steamstatic.com\//g,
                r.De.COMMUNITY_CDN_URL,
              )).replace(/{IMG_URL}/g, r.De.IMG_URL)).replace(
                /{MEDIA_CDN_URL}/g,
                r.De.MEDIA_CDN_URL,
              )).replace(
                /{MEDIA_CDN_COMMUNITY_URL}/g,
                r.De.MEDIA_CDN_COMMUNITY_URL,
              )).replace(/{COMMUNITY_CDN_URL}/g, r.De.COMMUNITY_CDN_URL)),
              (e = (0, a.HZ)(e)))
          : e;
      }
      function u(e) {
        if (!e) return !0;
        const t = o(e).toLocaleLowerCase();
        return (
          [
            o(r.De.COMMUNITY_CDN_URL).toLocaleLowerCase(),
            o(r.De.MEDIA_CDN_URL).toLocaleLowerCase(),
            o(r.De.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
            o(r.De.STORE_CDN_URL).toLocaleLowerCase(),
            o(r.De.BASE_URL_SHARED_CDN).toLocaleLowerCase(),
            o(r.De.CLAN_CDN_ASSET_URL).toLocaleLowerCase(),
            "support.steampowered.com",
            "steamcdn-a.akamaihd.net",
            "cdn.cloudflare.steamstatic.com",
            "cdn.akamai.steamstatic.com",
          ].indexOf(t) >= 0
        );
      }
      function d(e, t) {
        return `${r.De.MEDIA_CDN_URL}steam/apps/${e}/${t}`;
      }
      function p(e) {
        return d(e, "page_bg_generated.jpg");
      }
      function _(e) {
        return d(e, "page_bg_generated_v6b.jpg");
      }
      function L(e) {
        return r.De.SNR &&
          r.De.SNR.length > 0 &&
          e &&
          -1 == e.toLocaleLowerCase().indexOf("snr=")
          ? e + (e.indexOf("?") >= 0 ? "&" : "?") + "snr=" + r.De.SNR
          : e;
      }
      function D(e, t) {
        try {
          const s = new URL(t),
            r = new URL(e);
          return s.href.replace(/\/$/, "") + r.pathname + r.search + r.hash;
        } catch (e) {
          return "";
        }
      }
    },
  },
]);
