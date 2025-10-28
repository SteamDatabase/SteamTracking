/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6991],
  {
    15392: (e) => {
      e.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    70124: (e) => {
      e.exports = {
        Ctn: "-AGIgcIMyFaX7DZf8Hdmh",
        BackgroundImageCtn: "_3wq00gbjoboM_ATEtxdjQc",
        BackgroundImageBlurCtn: "_1cZ8g-PtBYLe8FFmDtth7p",
        Headline: "_1P8dm7giNlZwCfq5rbmtSP",
        Verified: "rPLi6KykwBz7wWFaOR1No",
        Subtitle: "_6LI-PA19CCd4wG66K1LCD",
        DeviceFullWidthShadow: "_1ZypsWqUQ3VfW_f7ejdOZK",
        VideoDisclaimer: "_15KuWTak5pd2L2qftpXWxR",
        DeviceWrapper: "_2fzfPUIAzZV7i8hrd1ITwy",
        CapsuleWrapper: "_3ITlsF2xSEJOu22StqAI04",
        Link: "ToHDGm6UHpfNOf4qmfMhX",
        HardwareBannerCtn: "d7Myq8xED1tsLqMM_fmU8",
        TrailerCtn: "_10yYTQmd_qaFLKu4E9q9Jc",
      };
    },
    69409: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => g });
      var a = r(90626),
        n = r(22837),
        s = r(38390),
        i = r(52038),
        l = r(61859),
        c = r(61336),
        o = r(78327),
        m = r(15392),
        d = r(27666);
      function g(e) {
        const { gidEvent: t } = e,
          r = (0, s.RR)(t),
          [g, u] = (0, a.useMemo)(() => {
            if (
              r?.jsondata?.localized_sale_product_banner?.length > 0 &&
              r?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, n.sf)(o.TS.LANGUAGE),
                t = l.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_banner,
                  e,
                ),
                a = l.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && a?.length > 0)
                return [
                  d.z.GenerateURLFromHashAndExt(r.clanSteamID, t),
                  d.z.GenerateURLFromHashAndExt(r.clanSteamID, a),
                ];
            }
            return [null, null];
          }, [r]);
        return g?.length > 0 && u?.length > 0
          ? a.createElement(
              "a",
              { href: (0, c.k2)(r.GetSaleURL()), className: m.Link },
              a.createElement("img", {
                src: g,
                className: (0, i.A)(m.Banner, m.Big),
              }),
              a.createElement("img", {
                src: u,
                className: (0, i.A)(m.Banner, m.Mobile),
              }),
            )
          : null;
      }
    },
    3088: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => i });
      var a = r(34629),
        n = r(90626),
        s = r(84933);
      class i extends n.Component {
        m_refImage = n.createRef();
        constructor(e) {
          super(e), (this.state = { nImage: 0 });
        }
        componentDidUpdate(e) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let e = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (e = this.props.rgSources[this.state.nImage]),
            e ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage,
              ),
              (e =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            e
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(e) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              e,
              this.props.rgSources[this.state.nImage],
              this.state.nImage,
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const {
              rgSources: e,
              onIncrementalError: t,
              onError: r,
              strAltText: a,
              ...s
            } = this.props,
            i = this.src;
          return n.createElement("img", {
            ref: this.m_refImage,
            ...s,
            src: i,
            onError: this.OnImageError,
            alt: a,
          });
        }
      }
      (0, a.Cg)([s.oI], i.prototype, "OnImageError", null);
    },
    12813: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => b });
      var a = r(22837),
        n = r(45699),
        s = r(8527),
        i = r(60014),
        l = r(90626),
        c = r(57876),
        o = r(55263),
        m = r(84811),
        d = r(53354),
        g = r(89409),
        u = r(60801),
        p = r(32630),
        h = r(54096),
        f = r(10224),
        E = r(52038),
        A = r(61859),
        _ = r(61336),
        I = r(70124),
        S = r.n(I);
      function b(e) {
        const {
            match: {
              params: { appid: t },
            },
          } = e,
          r = Number.parseInt(t),
          [a] = (0, o.t7)(r, c.Xh);
        return (
          (0, l.useEffect)(() => {
            if (a) {
              const e = a.GetStorePageURL().replace("/app/", "/verified/");
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [a]),
          l.createElement(
            p.Ay,
            { method: "verifiedprogram" },
            l.createElement(m.tH, null, l.createElement(D, { storeItem: a })),
          )
        );
      }
      function k(e) {
        const { storeItem: t } = e,
          r = (0, _.L$)(
            "https://clan.akamai.steamstatic.com/images/41316928/846f603df6057b070667f2741730c2038648955d.png",
          );
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "div",
            { className: S().Headline },
            (0, A.PP)(
              "#VerifiedProgram_DeckTitle",
              t.GetName(),
              l.createElement(
                "span",
                { className: S().Verified },
                l.createElement("img", {
                  src: r,
                  alt: (0, A.we)("#VerifiedProgram_DeckAlt"),
                }),
                (0, A.we)("#VerifiedProgram_DeckTitle_Verified"),
              ),
            ),
          ),
          l.createElement(
            "div",
            { className: S().Subtitle },
            (0, A.oW)(
              "#VerifiedProgram_DeckSubTitle",
              l.createElement(n.Ii, {
                className: S().Link,
                href: `${s.TS.STORE_BASE_URL}greatondeck`,
              }),
            ),
          ),
        );
      }
      function D(e) {
        const { storeItem: t } = e;
        if (!t) return null;
        const r =
          t.GetAssets().GetLibraryHeroURL_2x() ??
          t.GetAssets().GetLibraryHeroURL();
        return l.createElement(
          "div",
          { className: S().Ctn },
          l.createElement(
            "div",
            { className: S().BackgroundImageCtn },
            l.createElement("img", { src: r, alt: "" }),
          ),
          l.createElement(
            "div",
            { className: S().BackgroundImageBlurCtn },
            l.createElement("img", { src: r, alt: "" }),
          ),
          l.createElement(
            "div",
            { className: (0, E.A)("page_content") },
            l.createElement(k, { storeItem: t }),
            l.createElement(T, { storeItem: t }),
            l.createElement(G, { storeItem: t }),
            l.createElement(N, { storeItem: t }),
          ),
        );
      }
      function G(e) {
        const { storeItem: t } = e;
        return l.createElement(
          "div",
          { className: S().CapsuleWrapper },
          l.createElement(g.y, {
            id: t.GetID(),
            type: "game",
            bShowDeckCompatibilityDialog: !1,
            bShowDemoButton: !0,
            bAutoFocus: !0,
            displayStyle: "library",
          }),
        );
      }
      function N(e) {
        const { storeItem: t } = e,
          r = (0, i.aL)(
            `${s.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
            "banner",
          );
        return l.createElement(
          n.Ii,
          { href: r, className: (0, E.A)(S().HardwareBannerCtn) },
          l.createElement(L, null),
        );
      }
      function T(e) {
        const { storeItem: t } = e,
          r = (0, _.L$)(
            "https://clan.akamai.steamstatic.com/images//39049601/6d623258307ee751edb132215ffe83e9b31bba95.png",
          ),
          a = [
            ...t.GetAllTrailers().GetHighlightTrailers(!0),
            ...t.GetAllTrailers().GetOtherTrailers(!0),
          ],
          n = a?.[0]?.GetTrailersDash(),
          s = a?.[0]?.GetTrailerHls(),
          i = a?.[0]?.GetScreenshot();
        return l.createElement(
          "div",
          { className: S().DeviceFullWidthShadow },
          l.createElement(
            "div",
            { className: (0, E.A)(S().DeviceWrapper) },
            l.createElement(
              u.S,
              null,
              l.createElement(
                "div",
                { className: S().TrailerCtn },
                l.createElement(h.P, {
                  dashManifests: n,
                  hlsManifest: s,
                  screenshot: i,
                  altText: t.GetName(),
                  muteWhenAutoplayBlocked: !0,
                }),
              ),
            ),
            l.createElement("img", {
              src: r,
              alt: (0, A.we)("#VerifiedProgram_DeckDeviceAlt"),
            }),
          ),
          l.createElement(
            "div",
            { className: S().VideoDisclaimer },
            (0, A.we)("#VerifiedProgram_DeckDisclaimer"),
          ),
        );
      }
      function L(e) {
        const t = (0, f.zI)(),
          r = (0, a.sf)(s.TS.LANGUAGE);
        return l.createElement(d.u, {
          language: r,
          strAltText: (0, A.we)("#VerifiedProgram_DeckShopBannerAlt"),
          strImageToken: t
            ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
            : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
        });
      }
    },
  },
]);
