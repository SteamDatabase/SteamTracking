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
        DeviceWrapper: "_2fzfPUIAzZV7i8hrd1ITwy",
        CapsuleWrapper: "_3ITlsF2xSEJOu22StqAI04",
        Link: "ToHDGm6UHpfNOf4qmfMhX",
        HardwareBannerCtn: "d7Myq8xED1tsLqMM_fmU8",
        TrailerCtn: "_10yYTQmd_qaFLKu4E9q9Jc",
      };
    },
    69409: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => d });
      var a = r(90626),
        n = r(22837),
        s = r(38390),
        l = r(52038),
        i = r(61859),
        c = r(61336),
        o = r(78327),
        m = r(15392),
        g = r(27666);
      function d(e) {
        const { gidEvent: t } = e,
          r = (0, s.RR)(t),
          [d, u] = (0, a.useMemo)(() => {
            if (
              r?.jsondata?.localized_sale_product_banner?.length > 0 &&
              r?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, n.sf)(o.TS.LANGUAGE),
                t = i.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_banner,
                  e,
                ),
                a = i.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && a?.length > 0)
                return [
                  g.z.GenerateURLFromHashAndExt(r.clanSteamID, t),
                  g.z.GenerateURLFromHashAndExt(r.clanSteamID, a),
                ];
            }
            return [null, null];
          }, [r]);
        return d?.length > 0 && u?.length > 0
          ? a.createElement(
              "a",
              { href: (0, c.k2)(r.GetSaleURL()), className: m.Link },
              a.createElement("img", {
                src: d,
                className: (0, l.A)(m.Banner, m.Big),
              }),
              a.createElement("img", {
                src: u,
                className: (0, l.A)(m.Banner, m.Mobile),
              }),
            )
          : null;
      }
    },
    3088: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => l });
      var a = r(34629),
        n = r(90626),
        s = r(84933);
      class l extends n.Component {
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
            l = this.src;
          return n.createElement("img", {
            ref: this.m_refImage,
            ...s,
            src: l,
            onError: this.OnImageError,
            alt: a,
          });
        }
      }
      (0, a.Cg)([s.oI], l.prototype, "OnImageError", null);
    },
    12813: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => b });
      var a = r(22837),
        n = r(45699),
        s = r(8527),
        l = r(60014),
        i = r(90626),
        c = r(57876),
        o = r(55263),
        m = r(84811),
        g = r(53354),
        d = r(89409),
        u = r(60801),
        p = r(32630),
        h = r(54096),
        f = r(10224),
        E = r(52038),
        A = r(61859),
        I = r(61336),
        _ = r(70124),
        S = r.n(_);
      function b(e) {
        const {
            match: {
              params: { appid: t },
            },
          } = e,
          r = Number.parseInt(t),
          [a] = (0, o.t7)(r, c.Xh);
        return (
          (0, i.useEffect)(() => {
            if (a) {
              const e = a.GetStorePageURL().replace("/app/", "/verified/");
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [a]),
          i.createElement(
            p.Ay,
            { method: "verifiedprogram" },
            i.createElement(m.tH, null, i.createElement(k, { storeItem: a })),
          )
        );
      }
      function G(e) {
        const { storeItem: t } = e,
          r = (0, I.L$)(
            "https://clan.akamai.steamstatic.com/images/41316928/846f603df6057b070667f2741730c2038648955d.png",
          );
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: S().Headline },
            (0, A.PP)(
              "#VerifiedProgram_DeckTitle",
              t.GetName(),
              i.createElement(
                "span",
                { className: S().Verified },
                i.createElement("img", {
                  src: r,
                  alt: (0, A.we)("#VerifiedProgram_DeckAlt"),
                }),
                (0, A.we)("#VerifiedProgram_DeckTitle_Verified"),
              ),
            ),
          ),
          i.createElement(
            "div",
            { className: S().Subtitle },
            (0, A.oW)(
              "#VerifiedProgram_DeckSubTitle",
              i.createElement(n.Ii, {
                className: S().Link,
                href: `${s.TS.STORE_BASE_URL}greatondeck`,
              }),
            ),
          ),
        );
      }
      function k(e) {
        const { storeItem: t } = e;
        if (!t) return null;
        const r =
          t.GetAssets().GetLibraryHeroURL_2x() ??
          t.GetAssets().GetLibraryHeroURL();
        return i.createElement(
          "div",
          { className: S().Ctn },
          i.createElement(
            "div",
            { className: S().BackgroundImageCtn },
            i.createElement("img", { src: r, alt: "" }),
          ),
          i.createElement(
            "div",
            { className: S().BackgroundImageBlurCtn },
            i.createElement("img", { src: r, alt: "" }),
          ),
          i.createElement(
            "div",
            { className: (0, E.A)("page_content") },
            i.createElement(G, { storeItem: t }),
            i.createElement(L, { storeItem: t }),
            i.createElement(N, { storeItem: t }),
            i.createElement(T, { storeItem: t }),
          ),
        );
      }
      function N(e) {
        const { storeItem: t } = e;
        return i.createElement(
          "div",
          { className: S().CapsuleWrapper },
          i.createElement(d.y, {
            id: t.GetID(),
            type: "game",
            bShowDeckCompatibilityDialog: !1,
            bShowDemoButton: !0,
            bAutoFocus: !0,
            displayStyle: "library",
          }),
        );
      }
      function T(e) {
        const { storeItem: t } = e,
          r = (0, l.aL)(
            `${s.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
            "banner",
          );
        return i.createElement(
          n.Ii,
          { href: r, className: (0, E.A)(S().HardwareBannerCtn) },
          i.createElement(C, null),
        );
      }
      function L(e) {
        const { storeItem: t } = e,
          r = (0, I.L$)(
            "https://clan.akamai.steamstatic.com/images//39049601/6d623258307ee751edb132215ffe83e9b31bba95.png",
          ),
          a = [
            ...t.GetAllTrailers().GetHighlightTrailers(!0),
            ...t.GetAllTrailers().GetOtherTrailers(!0),
          ],
          n = a?.[0]?.GetTrailersDash(),
          s = a?.[0]?.GetTrailerHls(),
          l = a?.[0]?.GetScreenshot();
        return i.createElement(
          "div",
          { className: S().DeviceFullWidthShadow },
          i.createElement(
            "div",
            { className: (0, E.A)(S().DeviceWrapper) },
            i.createElement(
              u.S,
              null,
              i.createElement(
                "div",
                { className: S().TrailerCtn },
                i.createElement(h.P, {
                  dashManifests: n,
                  hlsManifest: s,
                  screenshot: l,
                  altText: t.GetName(),
                  muteWhenAutoplayBlocked: !0,
                }),
              ),
            ),
            i.createElement("img", {
              src: r,
              alt: (0, A.we)("#VerifiedProgram_DeckDeviceAlt"),
            }),
          ),
        );
      }
      function C(e) {
        const t = (0, f.zI)(),
          r = (0, a.sf)(s.TS.LANGUAGE);
        return i.createElement(g.u, {
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
