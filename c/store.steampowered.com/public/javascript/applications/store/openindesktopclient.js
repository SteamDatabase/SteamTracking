(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [38843],
  {
    chunkid: (module) => {
      module.exports = {
        OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
        OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
        ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
        BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
        BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
        BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
        BannerButton: "_1jso7z80FWGn42k1HP0_cf",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          OpenInDesktopClient: () => _,
          default: () => _,
          useOpenWebInSteamClient: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)(function (_) {
        const { fnOpenInSteamClient: _ } = _();
        return (0, _.jsx)("div", {
          className: _.OpenInBannerContainer,
          children: (0, _.jsxs)("div", {
            className: _.OpenInBannerContent,
            children: [
              (0, _.jsx)("div", {
                className: _.BannerButtonContainer,
                children: (0, _.jsx)("div", {
                  onClick: _,
                  className: _.BannerButton,
                  children: (0, _._)("#OpenInDesktopAppBanner_OpenAppButton"),
                }),
              }),
              (0, _.jsx)("div", {
                className: _.BannerMessage,
                children: (0, _.jsxs)("div", {
                  className: _.BannerTitle,
                  children: [
                    (0, _.jsx)("b", {
                      children: (0, _._)("#OpenInDesktopAppBanner_NotSignedIn"),
                    }),
                    (0, _.jsx)("br", {}),
                    (0, _._)("#OpenInDesktopAppBanner_Body"),
                  ],
                }),
              }),
            ],
          }),
        });
      });
      function _() {
        return {
          fnOpenInSteamClient: _.useCallback(() => {
            let _ = `${(0, _._)()}//openurl/`;
            const _ = (0, _._)("browserid");
            if (_) {
              const _ = new URL(window.location.href),
                _ = new URLSearchParams(_.search);
              _.set("utm_bid", _),
                (_ += _.origin + _.pathname + "?" + _.toString() + _.hash);
            } else _ += window.location.href;
            window.location.href = _;
          }, []),
        };
      }
      const _ = _;
    },
  },
]);
