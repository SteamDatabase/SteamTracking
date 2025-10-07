/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6991],
  {
    70124: (e) => {
      e.exports = {
        Ctn: "-AGIgcIMyFaX7DZf8Hdmh",
        BackgroundDarken: "_3OZXrjevpO_VZXQdZfLuyM",
        BackgroundImageCtn: "_3wq00gbjoboM_ATEtxdjQc",
        BackgroundImageBlurCtn: "_1cZ8g-PtBYLe8FFmDtth7p",
        Headline: "_1P8dm7giNlZwCfq5rbmtSP",
        Verified: "rPLi6KykwBz7wWFaOR1No",
        Subtitle: "_6LI-PA19CCd4wG66K1LCD",
        DeviceWrapper: "_2fzfPUIAzZV7i8hrd1ITwy",
        Link: "ToHDGm6UHpfNOf4qmfMhX",
        HardwareBannerCtn: "d7Myq8xED1tsLqMM_fmU8",
        TrailerCtn: "_10yYTQmd_qaFLKu4E9q9Jc",
      };
    },
    3088: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => c });
      var a = r(34629),
        s = r(90626),
        n = r(84933);
      class c extends s.Component {
        m_refImage = s.createRef();
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
              ...a
            } = this.props,
            n = this.src;
          return s.createElement("img", {
            ref: this.m_refImage,
            ...a,
            src: n,
            onError: this.OnImageError,
          });
        }
      }
      (0, a.Cg)([n.oI], c.prototype, "OnImageError", null);
    },
    12813: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => S });
      var a = r(90626),
        s = r(57876),
        n = r(55263),
        c = r(84811),
        i = r(32630),
        m = r(70124),
        o = r.n(m),
        l = r(61859),
        g = r(22837),
        u = r(8527),
        d = r(52038),
        p = r(61336),
        h = r(45699),
        E = r(54096),
        f = r(53354),
        I = r(10224),
        A = r(60014),
        _ = r(89409);
      function S(e) {
        const {
            match: {
              params: { appid: t },
            },
          } = e,
          r = Number.parseInt(t),
          [m] = (0, n.t7)(r, s.Xh);
        return a.createElement(
          i.Ay,
          { method: "verifiedprogram" },
          a.createElement(c.tH, null, a.createElement(k, { storeItem: m })),
        );
      }
      function b(e) {
        const { storeItem: t } = e,
          r = (0, p.L$)(
            "https://clan.akamai.steamstatic.com/images/41316928/846f603df6057b070667f2741730c2038648955d.png",
          );
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            { className: o().Headline },
            (0, l.PP)(
              "#VerifiedProgram_DeckTitle",
              t.GetName(),
              a.createElement(
                "span",
                { className: o().Verified },
                a.createElement("img", {
                  src: r,
                  "aria-label": (0, l.we)("#VerifiedProgram_DeckAlt"),
                }),
                (0, l.we)("#VerifiedProgram_DeckTitle_Verified"),
              ),
            ),
          ),
          a.createElement(
            "div",
            { className: o().Subtitle },
            (0, l.oW)(
              "#VerifiedProgram_DeckSubTitle",
              a.createElement(h.Ii, {
                className: o().Link,
                href: `${u.TS.STORE_BASE_URL}greatondeck`,
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
        return a.createElement(
          "div",
          { className: o().Ctn },
          a.createElement(
            "div",
            { className: o().BackgroundImageCtn },
            a.createElement("img", { src: r }),
          ),
          a.createElement(
            "div",
            { className: o().BackgroundImageBlurCtn },
            a.createElement("img", { src: r }),
          ),
          a.createElement(
            "div",
            { className: (0, d.A)(o().BackgroundDarken, "page_content") },
            a.createElement(b, { storeItem: t }),
            a.createElement(L, { storeItem: t }),
            a.createElement(T, { storeItem: t }),
            a.createElement(C, { storeItem: t }),
          ),
        );
      }
      function C(e) {
        const { storeItem: t } = e;
        return a.createElement(
          "div",
          null,
          a.createElement(_.y, {
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
          r = (0, A.aL)(
            `${u.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
            "banner",
          );
        return a.createElement(
          h.Ii,
          { href: r, className: (0, d.A)(o().HardwareBannerCtn) },
          a.createElement(D, null),
        );
      }
      function L(e) {
        const { storeItem: t } = e,
          r = (0, p.L$)(
            "https://clan.akamai.steamstatic.com/images//39049601/6d623258307ee751edb132215ffe83e9b31bba95.png",
          ),
          s = [
            ...t.GetAllTrailers().GetHighlightTrailers(!0),
            ...t.GetAllTrailers().GetOtherTrailers(!0),
          ],
          n = s?.[0]?.GetTrailersDash(),
          c = s?.[0]?.GetTrailerHls(),
          i = s?.[0]?.GetScreenshot();
        return a.createElement(
          "div",
          { className: (0, d.A)(o().DeviceWrapper) },
          a.createElement(
            "div",
            { className: o().TrailerCtn },
            a.createElement(E.P, {
              dashManifests: n,
              hlsManifest: c,
              screenshot: i,
              altText: t.GetName(),
              muteWhenAutoplayBlocked: !0,
            }),
          ),
          a.createElement("img", { src: r }),
        );
      }
      function D(e) {
        const t = (0, I.zI)(),
          r = (0, g.sf)(u.TS.LANGUAGE);
        return a.createElement(f.u, {
          language: r,
          strImageToken: t
            ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
            : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
        });
      }
    },
  },
]);
