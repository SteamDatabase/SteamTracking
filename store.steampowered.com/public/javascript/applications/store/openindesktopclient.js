/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [38843],
  {
    97824: (n) => {
      n.exports = {
        OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
        OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
        ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
        BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
        BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
        BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
        BannerButton: "_1jso7z80FWGn42k1HP0_cf",
      };
    },
    71009: (n, e, a) => {
      "use strict";
      a.r(e),
        a.d(e, {
          OpenInDesktopClient: () => c,
          default: () => B,
          useOpenWebInSteamClient: () => d,
        });
      var t = a(7850),
        s = a(90626),
        r = a(84811),
        o = a(97824),
        i = a(78327),
        l = a(2627),
        p = a(61859);
      const c = (0, r.Nr)(function (n) {
        const { fnOpenInSteamClient: e } = d();
        return (0, t.jsx)("div", {
          className: o.OpenInBannerContainer,
          children: (0, t.jsxs)("div", {
            className: o.OpenInBannerContent,
            children: [
              (0, t.jsx)("div", {
                className: o.BannerButtonContainer,
                children: (0, t.jsx)("div", {
                  onClick: e,
                  className: o.BannerButton,
                  children: (0, p.we)("#OpenInDesktopAppBanner_OpenAppButton"),
                }),
              }),
              (0, t.jsx)("div", {
                className: o.BannerMessage,
                children: (0, t.jsxs)("div", {
                  className: o.BannerTitle,
                  children: [
                    (0, t.jsx)("b", {
                      children: (0, p.we)(
                        "#OpenInDesktopAppBanner_NotSignedIn",
                      ),
                    }),
                    (0, t.jsx)("br", {}),
                    (0, p.we)("#OpenInDesktopAppBanner_Body"),
                  ],
                }),
              }),
            ],
          }),
        });
      });
      function d() {
        return {
          fnOpenInSteamClient: s.useCallback(() => {
            let n = `${(0, i.yl)()}//openurl/`;
            const e = (0, l.VY)("browserid");
            if (e) {
              const a = new URL(window.location.href),
                t = new URLSearchParams(a.search);
              t.set("utm_bid", e),
                (n += a.origin + a.pathname + "?" + t.toString() + a.hash);
            } else n += window.location.href;
            window.location.href = n;
          }, []),
        };
      }
      const B = c;
    },
  },
]);
