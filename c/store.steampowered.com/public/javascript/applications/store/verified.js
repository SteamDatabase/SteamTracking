(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6991],
  {
    chunkid: (module) => {
      module.exports = {
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
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        m_refImage = _.createRef();
        constructor(_) {
          super(_),
            (this.state = {
              nImage: 0,
            });
        }
        componentDidUpdate(_) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(_.rgSources) &&
            this.setState({
              nImage: 0,
            });
        }
        get src() {
          let _ = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (_ = this.props.rgSources[this.state.nImage]),
            _ ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage,
              ),
              (_ =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            _
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(_) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              _,
              this.props.rgSources[this.state.nImage],
              this.state.nImage,
            );
          let _ = this.state.nImage + 1;
          _ >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(_),
            _ < this.props.rgSources.length &&
              this.setState({
                nImage: _,
              });
        }
        render() {
          const {
              rgSources: _,
              onIncrementalError: _,
              onError: __webpack_require__,
              ..._
            } = this.props,
            _ = this.src;
          return _.createElement("img", {
            ref: this.m_refImage,
            ..._,
            src: _,
            onError: this.OnImageError,
          });
        }
      }
      (0, _._)([_._], _.prototype, "OnImageError", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            match: {
              params: { appid: _ },
            },
          } = _,
          _ = Number.parseInt(_),
          [_] = (0, _._)(_, _._);
        return _.createElement(
          _._,
          {
            method: "verifiedprogram",
          },
          _.createElement(
            _._,
            null,
            _.createElement(_, {
              storeItem: _,
            }),
          ),
        );
      }
      function _(_) {
        const { storeItem: _ } = _,
          _ = (0, _._)(
            "https://clan.akamai.steamstatic.com/images/41316928/846f603df6057b070667f2741730c2038648955d.png",
          );
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: _().Headline,
            },
            (0, _._)(
              "#VerifiedProgram_DeckTitle",
              _.GetName(),
              _.createElement(
                "span",
                {
                  className: _().Verified,
                },
                _.createElement("img", {
                  src: _,
                  "aria-label": (0, _._)("#VerifiedProgram_DeckAlt"),
                }),
                (0, _._)("#VerifiedProgram_DeckTitle_Verified"),
              ),
            ),
          ),
          _.createElement(
            "div",
            {
              className: _().Subtitle,
            },
            (0, _._)(
              "#VerifiedProgram_DeckSubTitle",
              _.createElement(_._, {
                className: _().Link,
                href: `${_._.STORE_BASE_URL}greatondeck`,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const { storeItem: _ } = _;
        if (!_) return null;
        const _ =
          _.GetAssets().GetLibraryHeroURL_2x() ??
          _.GetAssets().GetLibraryHeroURL();
        return _.createElement(
          "div",
          {
            className: _().Ctn,
          },
          _.createElement(
            "div",
            {
              className: _().BackgroundImageCtn,
            },
            _.createElement("img", {
              src: _,
            }),
          ),
          _.createElement(
            "div",
            {
              className: _().BackgroundImageBlurCtn,
            },
            _.createElement("img", {
              src: _,
            }),
          ),
          _.createElement(
            "div",
            {
              className: (0, _._)(_().BackgroundDarken, "page_content"),
            },
            _.createElement(_, {
              storeItem: _,
            }),
            _.createElement(_, {
              storeItem: _,
            }),
            _.createElement(_, {
              storeItem: _,
            }),
            _.createElement(_, {
              storeItem: _,
            }),
          ),
        );
      }
      function _(_) {
        const { storeItem: _ } = _;
        return _.createElement(
          "div",
          null,
          _.createElement(_._, {
            _: _.GetID(),
            type: "game",
            bShowDeckCompatibilityDialog: !1,
            bShowDemoButton: !0,
            bAutoFocus: !0,
            displayStyle: "library",
          }),
        );
      }
      function _(_) {
        const { storeItem: _ } = _,
          _ = (0, _._)(
            `${_._.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
            "banner",
          );
        return _.createElement(
          _._,
          {
            href: _,
            className: (0, _._)(_().HardwareBannerCtn),
          },
          _.createElement(_, null),
        );
      }
      function _(_) {
        const { storeItem: _ } = _,
          _ = (0, _._)(
            "https://clan.akamai.steamstatic.com/images//39049601/6d623258307ee751edb132215ffe83e9b31bba95.png",
          ),
          _ = [
            ..._.GetAllTrailers().GetHighlightTrailers(!0),
            ..._.GetAllTrailers().GetOtherTrailers(!0),
          ],
          _ = _?.[0]?.GetTrailersDash(),
          _ = _?.[0]?.GetTrailerHls(),
          _ = _?.[0]?.GetScreenshot();
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().DeviceWrapper),
          },
          _.createElement(
            "div",
            {
              className: _().TrailerCtn,
            },
            _.createElement(_._, {
              dashManifests: _,
              hlsManifest: _,
              screenshot: _,
              altText: _.GetName(),
              muteWhenAutoplayBlocked: !0,
            }),
          ),
          _.createElement("img", {
            src: _,
          }),
        );
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _._)(_._.LANGUAGE);
        return _.createElement(_._, {
          language: _,
          strImageToken: _
            ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
            : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
        });
      }
    },
  },
]);
