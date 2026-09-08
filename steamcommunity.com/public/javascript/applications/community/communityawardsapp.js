/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7561],
  {
    20978: (e) => {
      e.exports = {
        LoadingWrapper: "_2wAKy-0ZkO_vhbiQCP9MgE",
        Static: "_1QfwpLmLTSuiIRLDzdY_7l",
        none: "_1F0lzP-Krz_y5P9ewZEvBD",
        bottomCircle: "_2qjZm0dB7I6lcRkZhNTqvD",
        noString: "_1Sy0pXVZOdWbgouFyD2zJj",
        Throbber: "lYUEjD8Qh3GM_ZrZeLwpI",
        throbber_small: "_2zbyh5jEDlV5HVD3iUve-k",
        throbber_medium: "_2CphUsHNDgIWItNIzeIldY",
        throbber_large: "_1x18vR7Qop8v8_G8qSR6CL",
        throbber_center_wrapper: "_3IYPzqtvB2ZE7x710d5x2C",
        ThrobberText: "_21nVi2jNuF_prxLY1mAaKK",
        blur: "_1ctjA2yjeB21eCDj_r1mVz",
        ThrobberRoundLoop: "_1O-cWE6nuIVO3x6-Onw0IU",
        roundOuterOutline: "_1Vv--mA6PueyEKXXMTwljt",
        roundOuter: "_2K0LzwjOXDopMHoqY_v_CO",
        roundFill: "_3sQFkavAEPhliH6DiFmHRH",
        ThrobberFillLoop: "ofdi9VLSRZ5W98WsXVHiq",
        topCircle: "_1LZffuoDq-N25wNHckxsf",
        circlePulse: "_1XN6ZJ1l8nVoUxp1WnOBqw",
        ThrobberTopCircleLoop: "_1jALk36CiS_T9Pg7vBjpIQ",
        ThrobberBottomCircleLoop: "_1KvOgdKiNE9XuSYUau3hKW",
        roundThrobber15: "_2LGHpu_-ihfOhQwdfR3Kiy",
        roundThrobber14: "_2FGCneH2AemMrIrZnZskw_",
        roundThrobber13: "_1X-5j16jaQntVrZfadibyc",
        roundThrobber12: "_1pj1Q3Ef4FdHDdl9QEtpxp",
        roundThrobber11: "xFmZaMe5nZpoTc5PQBKn3",
        roundThrobber10: "_3MGYowzMQ6TwbH3fu9SVjt",
        roundThrobber09: "ktVJ42jiVhWEVV9O6z2FK",
        roundThrobber08: "_3s_7my869lIOj-1vnqJ39y",
        roundThrobber07: "_11MVp53Me_frOuaJfsQ4FE",
        roundThrobber06: "_2cl-maglen-RF0YQjShgqG",
        roundThrobber05: "_3-JE0FpIzECzeqtd5cyjGI",
        roundThrobber04: "_1xNIKvHdzLhBldONo6yIZs",
        roundThrobber03: "_1S17yicfcrPc11m83ydGp3",
        roundThrobber02: "_1-oUJqmCLOoGqVJz5dgj6J",
        roundThrobber01: "_2tXgejjqNKy6cSX1Lv7PrG",
        ThrobberRoundLoopThickness: "_1fs4RGcMBRzbQQirDBiFoM",
        throbber_xlarge: "_1gYeZMYKBDqNpVuw58_LCl",
        throbber_xxlarge: "_3j-p4JOqdpaF4obGtIeAB",
        ThrobberDelayAppear: "I3aEq3lbK7Pm8ujENvtri",
        Visible: "_2SwSJd-DlX2dRiDGxZWHI5",
        NewThrobber: "_1m8iQOSVziKDHiInrfskv_",
      };
    },
    80837: (e, r, c) => {
      "use strict";
      c.r(r), c.d(r, { default: () => o });
      var t = c(7850),
        s = c(30760);
      function o(e) {
        return (0, t.jsx)("div", { children: (0, t.jsx)(s.Ay, {}) });
      }
    },
    3049: (e, r, c) => {
      "use strict";
      c.d(r, { J: () => o });
      var t = c(66418),
        s = c(13843);
      function o() {
        return (0, s.A)().languages.map((e) => {
          return 2 == (r = e.strISOCode).length && t.TS.COUNTRY
            ? `${r}-${t.TS.COUNTRY}`
            : r;
          var r;
        });
      }
    },
    42248: (e, r, c) => {
      "use strict";
      c.d(r, { q: () => o });
      var t = c(78327),
        s = c(22837);
      function o() {
        return t.TS.IN_CLIENT && (0, s.DOG)(t.TS.LAUNCHER_TYPE);
      }
    },
    22797: (e, r, c) => {
      "use strict";
      c.d(r, { t: () => b });
      var t = c(7850),
        s = c(90626),
        o = c(52038),
        i = c(20978),
        l = c.n(i);
      const n =
        c.p +
        "images/applications/community/steam_spinner.png?v=valveisgoodatcaching";
      var a = c(42248),
        f = c(66418);
      const b = s.memo(function (e) {
        const {
          className: r,
          size: c,
          string: i,
          position: b,
          static: d,
          msDelayAppear: u,
        } = e;
        let p = [l().LoadingWrapper, "SteamLogoThrobber", h(c)];
        const [m, k] = s.useState(!u),
          _ = !(0, a.q)();
        return (
          (0, s.useEffect)(() => {
            if (m) return;
            const e = setTimeout(() => k(!0), u);
            return () => clearTimeout(e);
          }, [u, m]),
          void 0 === i && p.push(l().noString),
          r && p.push(r),
          d && p.push(l().Static),
          (0, t.jsxs)("div", {
            className: (0, o.A)(
              "center" == b && l().throbber_center_wrapper,
              !!u && l().ThrobberDelayAppear,
              m && l().Visible,
            ),
            children: [
              m &&
                _ &&
                (0, t.jsx)("div", {
                  className: p.join(" "),
                  children: (0, t.jsx)("div", {
                    className: l().NewThrobber,
                    children: (0, t.jsx)("img", { src: (0, f.YJ)(n) }),
                  }),
                }),
              Boolean(i) &&
                (0, t.jsx)("div", { className: l().ThrobberText, children: i }),
            ],
          })
        );
      });
      s.memo(function (e) {
        const {
          className: r,
          size: c,
          string: i,
          position: n,
          static: a,
          msDelayAppear: f,
        } = e;
        let b = [l().LoadingWrapper, "SteamLogoThrobber", h(c)];
        const [u, p] = s.useState(!f);
        return (
          (0, s.useEffect)(() => {
            if (u) return;
            const e = setTimeout(() => p(!0), f);
            return () => clearTimeout(e);
          }, [f, u]),
          void 0 === i && b.push(l().noString),
          r && b.push(r),
          a && b.push(l().Static),
          (0, t.jsxs)("div", {
            className: (0, o.A)(
              "center" == n && l().throbber_center_wrapper,
              !!f && l().ThrobberDelayAppear,
              u && l().Visible,
            ),
            children: [
              u &&
                (0, t.jsx)("div", {
                  className: b.join(" "),
                  children: (0, t.jsxs)("div", {
                    className: l().Throbber,
                    children: [
                      (0, t.jsx)(d, { className: l().base }),
                      (0, t.jsx)(d, { className: l().blur }),
                    ],
                  }),
                }),
              Boolean(i) &&
                (0, t.jsx)("div", { className: l().ThrobberText, children: i }),
            ],
          })
        );
      });
      function h(e) {
        switch (e) {
          case "small":
            return l().throbber_small;
          case "medium":
            return l().throbber_medium;
          case "xlarge":
            return l().throbber_xlarge;
          case "xxlarge":
            return l().throbber_xxlarge;
          default:
            return l().throbber_large;
        }
      }
      function d(e) {
        let r = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (r += e.className),
          (0, t.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: r,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, t.jsxs)("g", {
                className: l().partCircle,
                children: [
                  (0, t.jsx)("path", {
                    className: l().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M201.432,101.166",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
                  }),
                ],
              }),
              (0, t.jsxs)("g", {
                className: l().mainOutline,
                children: [
                  (0, t.jsx)("path", {
                    className: l().roundFill,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundOuterOutline,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber01,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber02,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber03,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber04,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber05,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber06,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber07,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber08,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber09,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber10,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber11,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber12,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber13,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber14,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: l().roundThrobber15,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                ],
              }),
              (0, t.jsx)("g", {
                className: l().bottomCircle,
                children: (0, t.jsx)("path", {
                  fill: "#ffffff",
                  d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
                }),
              }),
              (0, t.jsx)("g", {
                className: l().topCircle,
                children: (0, t.jsx)("circle", {
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "6",
                  strokeMiterlimit: "10",
                  cx: "161.731",
                  cy: "101.274",
                  r: "23.019",
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);
