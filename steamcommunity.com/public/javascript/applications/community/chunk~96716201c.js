/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [3347],
    {
      76006: (_, t0, l) => {
        "use strict";
        l.d(t0, { EX: () => u1, Ay: () => w0 });
        var t = l(7850),
          g = l(90626),
          w = l(72604),
          T = l(24660),
          e0 = l(19298),
          s0 = l(7967),
          h = l(9591),
          F = l(38506),
          D = l(35038),
          z = l(99412),
          E = l(72609),
          P = l(29385),
          y = l(61739),
          L = l(88942);
        function n0(e) {
          const s = (0, P.jE)();
          return (0, y.n)({
            mutationFn: async (a) => {
              if (!E.iA.logged_in) throw w.Dy;
              const { targetid: r, targetType: n, nReactionId: c } = a;
              let i = D.w.Init(h.RY);
              i.Body().set_target_type(n),
                i.Body().set_targetid(r),
                i.Body().set_reactionid(c);
              const u = await h.a9.AddReaction(e, i);
              if (u.GetEResult() != w.R) throw u.GetEResult();
            },
            onSuccess: () => {
              s.invalidateQueries({ queryKey: ["UserPointBalance"] });
            },
          });
        }
        function b0(e, s) {
          return (0, L.I)({
            queryKey: ["UserPointBalance"],
            queryFn: async () => {
              var a, r;
              if (!E.iA.logged_in) throw w.Dy;
              const n = E.iA.steamid,
                c = D.w.Init(h.pt);
              c.Body().set_steamid(n);
              let i = await h.a9.GetSummary(s, c);
              if (i.GetEResult() == w.R)
                return F.A.fromString(
                  (r =
                    (a = i.Body().toObject().summary) == null
                      ? void 0
                      : a.points) != null
                    ? r
                    : "0",
                );
              throw i.GetEResult();
            },
            enabled: e,
          });
        }
        function M0(e, s) {
          return (0, L.I)({
            queryKey: ["AwardsConfiguration"],
            queryFn: async () => {
              var a;
              const r = D.w.Init(h.Sm);
              r.Body().set_elanguage((0, z.sfN)(E.TS.LANGUAGE));
              let n = await h.a9.GetReactionConfig(s, r);
              if (n.GetEResult() == w.R) {
                const c = new Map();
                let i = (a = n.Body().toObject().reactions) != null ? a : [];
                for (const u of i) u.reactionid && c.set(u.reactionid, u);
                return c;
              } else throw n.GetEResult();
            },
            enabled: e,
          });
        }
        function P0(e, s, a, r) {
          return (0, L.I)({
            queryKey: ["UserReactions", a, r],
            queryFn: async () => {
              if (!E.iA.logged_in) throw w.Dy;
              const n = D.w.Init(h.bA);
              n.Body().set_target_type(r), n.Body().set_targetid(a);
              let c = await h.a9.GetReactions(s, n);
              if (c.GetEResult() == w.R) return new Set(c.Body().reactionids());
              throw c.GetEResult();
            },
            enabled: e,
          });
        }
        var O = l(19316),
          N0 = l(2801),
          d0 = l(36118),
          B0 = l(85599),
          G = l(36707),
          d = l(18210),
          W = l(54963),
          x = l(65414),
          E0 = l(13854);
        const G0 = 8e3,
          I0 = 200;
        var u0 = ((e) => (
          (e[(e.Default = 0)] = "Default"),
          (e[(e.Gold = 1)] = "Gold"),
          (e[(e.LNY2020 = 2)] = "LNY2020"),
          e
        ))(u0 || {});
        function D0(e) {
          switch (e) {
            case 1:
              return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
            case 2:
              return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
            default:
              return `hsl(${Math.random() * 360}, 100%, 40%)`;
          }
        }
        function O0(e) {
          return e == 2 ? `hue-rotate(${360 + ((0, E0.Tg))(-30, 10)}deg)` : "";
        }
        function _0(e, s) {
          const a = [];
          if (!e) return a;
          const { width: r, height: n } = e;
          for (let c = 0; c < I0; c++) {
            const i = Math.random(),
              u = Math.random() * i,
              f = Math.random() * u,
              v = (Math.random() - 0.5) * 4 * Math.PI * 20,
              R = Math.random() + 0.5,
              S = [Math.random() * n - n - 20, n + 20 + Math.random() * n * R],
              B = r <= 1e3 ? 1 : r / 1e3,
              C = R * B * (s == 1 ? 2 : 1),
              H = (Math.random() - 0.5) * r,
              j = (Math.random() - 0.5) * r,
              A = [j, H + j],
              U = D0(s),
              X = O0(s);
            a.push({
              rotationCoefficient: v,
              rotationRatioY: u,
              rotationRatioX: i,
              rotationRatioZ: f,
              yRange: S,
              xRange: A,
              scale: C,
              colorHue: U,
              filter: X,
            });
          }
          return a;
        }
        function T0(e, s, a) {
          const r = a == 0,
            {
              rotationCoefficient: n,
              rotationRatioY: c,
              rotationRatioX: i,
              rotationRatioZ: u,
              yRange: f,
              xRange: v,
              scale: R,
              colorHue: S,
              filter: B,
            } = e;
          return {
            backgroundColor: S,
            fill: S,
            filter: B,
            flRandom: 0,
            transform: s.interpolate((C) => {
              const H = C * n * c,
                j = C * n * i,
                A = C * n * u,
                U = C * (f[1] - f[0]) + f[0];
              return `translate(${C * (v[1] - v[0]) + v[0]}px, ${U}px) rotateY(${H}rad) rotateX(${j}rad) rotateZ(${A}rad) scale(${R})`;
            }),
          };
        }
        function F0(e, s, a) {
          if (Math.random() > 0.1) return null;
          const {
            rotationCoefficient: r,
            rotationRatioZ: n,
            yRange: c,
            xRange: i,
            scale: u,
            colorHue: f,
            filter: v,
          } = e;
          return {
            backgroundColor: void 0,
            fill: f,
            filter: v,
            flRandom: Math.random(),
            transform: s.interpolate((R) => {
              const S = ((R * r) / 4) * n,
                B = R * (c[1] - c[0]) + c[0];
              return `translate(${R * (i[1] - i[0]) + i[0]}px, ${B}px) rotateZ(${S}rad) scale(${u})`;
            }),
          };
        }
        const Z0 = (e, s) => {
            const { anim: a } = (0, x.zh)({
              anim: 1,
              from: { anim: 0 },
              config: { duration: G0 },
            });
            return (0, g.useMemo)(() => {
              let n = _0(e, s),
                c = n.map((u) => T0(u, a, s)),
                i = n.map((u) => F0(u, a, s)).filter((u) => !!u);
              return { rgParticleStyles: c, rgStreamerStyles: i };
            }, [e, s, a]);
          },
          a0 = { position: "absolute", left: "50%", top: 0 },
          k0 = {
            ...a0,
            width: 10,
            height: 5,
            borderWidth: 1,
            borderColor: "black",
          },
          H0 = ({ eType: e }) => {
            const s = e == 1,
              a = e == 2,
              [r, n] = t1();
            let { rgParticleStyles: c, rgStreamerStyles: i } = Z0(r, e),
              u;
            switch (e) {
              case 1:
                u = c.map((f, v) => (0, t.jsx)(U0, { style: f }, v));
                break;
              case 2:
                u = c.map((f, v) =>
                  v % 2
                    ? (0, t.jsx)(h0, { style: f }, v)
                    : (0, t.jsx)(K0, { style: f }, v),
                );
                break;
              case 0:
                u = c.map((f, v) => (0, t.jsx)(h0, { style: f }, v));
                break;
            }
            return (0, t.jsxs)("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              },
              ref: n,
              children: [
                u,
                i.map((f, v) =>
                  f.flRandom > 0.5
                    ? (0, t.jsx)(q0, { style: f }, v)
                    : (0, t.jsx)(J0, { style: f }, v),
                ),
              ],
            });
          },
          h0 = ({ style: e }) =>
            (0, t.jsx)(x.CS.div, { style: { ...k0, ...e } }),
          U0 = ({ style: e }) => {
            const [s] = (0, g.useState)(Math.floor(Math.random() * m0.length)),
              a = m0[s];
            return (0, t.jsx)(a, {
              style: { ...a0, ...e, backgroundColor: void 0 },
            });
          },
          K0 = ({ style: e }) => {
            const [s] = (0, g.useState)(Math.floor(Math.random() * C0.length)),
              a = C0[s];
            return (0, t.jsx)(a, {
              style: { ...a0, ...e, backgroundColor: void 0 },
            });
          },
          z0 = ({ style: e }) =>
            (0, t.jsx)(x.CS.svg, {
              viewBox: "0 0 48 102",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 5, height: 10, ...e },
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z",
                fill: "#F7D51E",
              }),
            }),
          W0 = ({ style: e }) =>
            (0, t.jsxs)(x.CS.svg, {
              viewBox: "0 0 50 39",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 7, ...e },
              children: [
                (0, t.jsx)("path", {
                  d: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                  fill: "#C4C4C4",
                }),
                (0, t.jsx)("path", {
                  d: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                  fill: e.fill,
                }),
              ],
            }),
          Q0 = ({ style: e }) =>
            (0, t.jsx)(x.CS.svg, {
              viewBox: "0 0 68 69",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 10, ...e },
              children: (0, t.jsx)("rect", {
                y: "34.6389",
                width: "48",
                height: "48",
                transform: "rotate(-45 0 34.6389)",
                fill: e.fill,
              }),
            }),
          V0 = ({ style: e }) =>
            (0, t.jsx)(x.CS.svg, {
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 10, ...e },
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z",
                fill: e.fill,
              }),
            }),
          Y0 = ({ style: e }) =>
            (0, t.jsx)(x.CS.svg, {
              viewBox: "0 0 48 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 8, ...e },
              children: (0, t.jsx)("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              }),
            }),
          X0 = ({ style: e }) =>
            (0, t.jsx)(x.CS.svg, {
              viewBox: "0 0 48 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 8, ...e },
              children: (0, t.jsx)("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              }),
            }),
          $0 = ({ style: e }) =>
            (0, t.jsx)(x.CS.svg, {
              viewBox: "0 0 48 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 8, ...e },
              children: (0, t.jsx)("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              }),
            }),
          J0 = ({ style: e }) =>
            (0, t.jsx)(x.CS.svg, {
              viewBox: "0 0 80 620",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 70, ...e },
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z",
                fill: e.fill,
              }),
            }),
          q0 = ({ style: e }) =>
            (0, t.jsx)(x.CS.svg, {
              viewBox: "0 0 203 295",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 20, ...e },
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z",
                fill: e.fill,
              }),
            }),
          m0 = [
            z0,
            W0,
            Q0,
            V0,
            Y0,
            X0,
            $0,
            ({ style: e }) =>
              (0, t.jsx)(x.CS.svg, {
                viewBox: "0 0 48 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: { width: 10, height: 8, ...e },
                children: (0, t.jsx)("path", {
                  d: "M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z",
                  fill: e.fill,
                }),
              }),
            ({ style: e }) =>
              (0, t.jsx)(x.CS.svg, {
                width: "48",
                height: "35",
                viewBox: "0 0 48 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: { width: 10, height: 7, ...e },
                children: (0, t.jsx)("path", {
                  d: "M48 0H0L24 35L48 0Z",
                  fill: e.fill,
                }),
              }),
          ],
          C0 = [
            ({ style: e }) =>
              (0, t.jsxs)(x.CS.svg, {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 54 47.18",
                style: { width: 28, height: 28, ...e },
                children: [
                  (0, t.jsx)("polygon", {
                    fill: "#60000e",
                    points: "10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06",
                  }),
                  (0, t.jsx)("path", {
                    fill: "#f93838",
                    d: "M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z",
                  }),
                  (0, t.jsx)("path", {
                    fill: "#f93838",
                    d: "M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z",
                  }),
                ],
              }),
            ({ style: e }) =>
              (0, t.jsxs)(x.CS.svg, {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 14.5 22",
                style: { width: 28, height: 28, ...e },
                children: [
                  (0, t.jsx)("path", {
                    fill: "#fc1010",
                    d: "M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z",
                  }),
                  (0, t.jsx)("path", {
                    fill: "#fc1010",
                    d: "M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z",
                  }),
                  (0, t.jsx)("path", {
                    fill: "#fc1010",
                    d: "M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z",
                  }),
                  (0, t.jsx)("path", {
                    fill: "#fc1010",
                    d: "M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z",
                  }),
                ],
              }),
          ];
        function t1() {
          const [e, s] = (0, g.useState)(null),
            a = (0, g.useCallback)((r) => {
              r &&
                typeof r.getBoundingClientRect == "function" &&
                s(r.getBoundingClientRect());
            }, []);
          return [e, a];
        }
        var r0 = l(3166),
          o = l(15799),
          e1 = l(21991),
          s1 = l(56425);
        const n1 = (e) => {
          const { className: s, ...a } = e;
          return (0, t.jsx)(T.fu, {
            className: (0, G.A)(s, s1.UnstyledButton),
            ...a,
          });
        };
        var Z = l(24642),
          a1 = l(68312),
          f0 = Object.defineProperty,
          r1 = Object.getOwnPropertyDescriptor,
          o1 = (e, s, a) =>
            s in e
              ? f0(e, s, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (e[s] = a),
          Q = (e, s, a, r) => {
            for (
              var n = r > 1 ? void 0 : r ? r1(s, a) : s, c = e.length - 1, i;
              c >= 0;
              c--
            )
              (i = e[c]) && (n = (r ? i(s, a, n) : i(n)) || n);
            return r && n && f0(s, a, n), n;
          },
          i1 = (e, s, a) => o1(e, typeof s != "symbol" ? s + "" : s, a),
          c1 = ((e) => (
            (e[(e.SELECTING = 0)] = "SELECTING"),
            (e[(e.CONFIRM = 1)] = "CONFIRM"),
            (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
            (e[(e.DONE = 3)] = "DONE"),
            (e[(e.ERROR = 4)] = "ERROR"),
            (e[(e.LOADING_ERROR = 5)] = "LOADING_ERROR"),
            e
          ))(c1 || {});
        const l1 = (e) =>
          (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, t.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
            }),
          });
        class k extends g.PureComponent {
          constructor(s) {
            super(s), (this.state = { bHovered: !1 });
          }
          handleMouseOver(s) {
            this.setState({ bHovered: !0 });
          }
          handleMouseOut() {
            this.setState({ bHovered: !1 });
          }
          render() {
            const s = (0, e1.eU)(
              this.props.reactionType,
              this.props.bDisableAnimation == !1 &&
                (!!this.state.bHovered || !!this.props.bForceAnimated),
            );
            return (0, t.jsx)("img", {
              className: this.props.className,
              src: s,
              onMouseEnter: this.handleMouseOver,
              onMouseLeave: this.handleMouseOut,
            });
          }
        }
        Q([W.oI], k.prototype, "handleMouseOver", 1),
          Q([W.oI], k.prototype, "handleMouseOut", 1);
        function d1(e, s, a) {
          let r = [];
          return (
            e.forEach(function (n) {
              var c, i;
              if (
                (c = n.valid_target_types) != null &&
                c.includes(s) &&
                !(!n.purchaseable || !n.reactionid)
              )
                switch (s) {
                  case h.Pw.j3:
                    r.push(n.reactionid);
                    break;
                  case h.Pw.tN:
                    a !== void 0 &&
                      (i = n.valid_ugc_types) != null &&
                      i.includes(a) &&
                      r.push(n.reactionid);
                    break;
                  case h.Pw.BZ:
                    r.push(n.reactionid);
                    break;
                  case h.Pw.uz:
                    r.push(n.reactionid);
                    break;
                  case h.Pw.Zp:
                    r.push(n.reactionid);
                    break;
                }
            }),
            r
          );
        }
        class w0 extends g.Component {
          constructor(s) {
            super(s),
              (window.fnLoyalty_ShowAwardModal = (a, r, n, c, i) => {
                i || (i = h.Pk.au),
                  this.setState({
                    bShowModal: !0,
                    fnSuccessFunc: n,
                    targetid: a,
                    ugcType: c,
                    initialSelectedReaction: i,
                    targetType: r,
                  });
              }),
              (this.state = {
                bShowModal: !1,
                targetid: "",
                targetType: h.Pw.Ri,
              });
          }
          render() {
            const {
              bShowModal: s,
              targetType: a,
              fnSuccessFunc: r,
              targetid: n,
              ugcType: c,
              initialSelectedReaction: i,
            } = this.state;
            return s
              ? (0, t.jsx)(
                  v0,
                  {
                    targetid: n,
                    active: s,
                    targetType: a != null ? a : h.Pw.Ri,
                    ugcType: c,
                    onDismiss: () => this.setState({ bShowModal: !1 }),
                    onSuccess: r,
                    initialSelectedReaction: i,
                  },
                  n,
                )
              : null;
          }
        }
        i1(w0, "defaultProps", { targetType: h.Pw.j3 });
        function u1(e) {
          const {
            targetType: s,
            targetid: a,
            bShowModal: r,
            ugcType: n,
            initialSelectedReaction: c,
            onDismiss: i,
            onSuccess: u,
          } = e;
          return (0, t.jsx)(
            v0,
            {
              targetid: a,
              active: r,
              targetType: s,
              ugcType: n,
              onDismiss: i,
              onSuccess: u,
              initialSelectedReaction: c,
            },
            a,
          );
        }
        function v0(e) {
          var s, a, r, n, c;
          const {
              active: i,
              targetid: u,
              targetType: f,
              ugcType: v,
              initialSelectedReaction: R,
              onSuccess: S,
              onDismiss: B,
            } = e,
            [C, H] = g.useState(R || h.Pk.au),
            [j, A] = g.useState(0),
            [U, X] = g.useState(!1),
            [x0, j0] = g.useState(w.zi),
            h1 = (0, r0.Qn)(),
            $ = (0, a1.KV)(),
            b = P0(!!i, $, u, f),
            c0 = M0(!!i, $),
            m1 = b0(!!i, $),
            C1 = n0($),
            p0 = b.isPending || c0.isPending;
          async function f1() {
            C === null ||
              C == h.Pk.au ||
              (A(2),
              await C1.mutate(
                { targetid: u, targetType: f, nReactionId: C },
                {
                  onSuccess: () => {
                    A(3),
                      X(!0),
                      setTimeout(() => {
                        S && S(u, C);
                      }, 2e3);
                  },
                  onError: (m) => {
                    A(4), j0(m);
                  },
                },
              ));
          }
          if (
            (g.useEffect(() => {
              b.error && (j0(b.error), A(5));
            }, [b.error]),
            !i)
          )
            return null;
          const J = (s = c0.data) != null ? s : new Map(),
            I = (a = m1.data) != null ? a : new F.A(0),
            w1 = d1(J, f, v),
            q = C === h.Pk.au ? null : J.get(C),
            l0 = q ? q.points_cost : 0,
            A0 = q ? q.points_transferred : 0;
          let M = "";
          switch (f) {
            case h.Pw.j3:
              M = (0, d.we)("#GrantAwardDescription_Review");
              break;
            case h.Pw.tN:
              M = (0, d.we)("#GrantAwardDescription_UGC");
              break;
            case h.Pw.BZ:
              M = (0, d.we)("#GrantAwardDescription_Profile");
              break;
            case h.Pw.uz:
              M = (0, d.we)("#GrantAwardDescription_ForumTopic");
              break;
            case h.Pw.Zp:
              M = (0, d.we)("#GrantAwardDescription_Comment");
              break;
          }
          let K;
          switch (j) {
            case 0:
              {
                const m =
                    C === h.Pk.au || ((r = b.data) == null ? void 0 : r.has(C)),
                  v1 = !I || I.greaterThanOrEqual(l0),
                  g1 = (0, t.jsx)(O.jn, {
                    onClick: () => A(1),
                    disabled: m,
                    focusable: !m,
                    title: (0, d.we)(
                      m
                        ? "#GrantAward_PromptTooltip"
                        : "#GrantAward_SubmitTooltip",
                    ),
                    children: (0, d.we)(
                      m ? "#GrantAward_SelectAward" : "#GrantAward_Next",
                    ),
                  });
                K = (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(V, { description: M }),
                    (0, t.jsx)(N, {}),
                    p0 &&
                      (0, t.jsx)("div", {
                        className: o.InitialLoading,
                        children: (0, t.jsx)("div", {
                          className: (0, G.A)(o.LoadingContainer, o.Visible),
                          children: (0, t.jsx)(g0, {}),
                        }),
                      }),
                    (0, t.jsx)(s0.MS, {
                      className: o.ButtonContainer,
                      scrollDirection: h1 ? "x" : "y",
                      "flow-children": "grid",
                      children:
                        !p0 &&
                        w1.map((p, x1) => {
                          var y0, L0, R0;
                          return (0, t.jsx)(
                            o0,
                            {
                              autoFocus:
                                (C === void 0 && x1 == 0) ||
                                (p === C &&
                                  !((y0 = b.data) != null && y0.has(p))),
                              reaction: p,
                              selected:
                                p === C &&
                                !((L0 = b.data) != null && L0.has(p)),
                              cost: J.get(p).points_cost,
                              alreadyAwarded:
                                (R0 = b.data) == null ? void 0 : R0.has(p),
                              awardConfig: J.get(p),
                              onClick: () => {
                                var S0;
                                ((S0 = b.data) != null && S0.has(p)) ||
                                  H(p === C ? h.Pk.au : p);
                              },
                            },
                            p,
                          );
                        }),
                    }),
                    (0, t.jsx)(N, {}),
                    (0, t.jsx)(Y, {
                      pointBalance: I,
                      children:
                        m || v1
                          ? g1
                          : [
                              (0, t.jsx)(
                                "div",
                                {
                                  className: o.NotEnoughPoints,
                                  children: (0, d.we)(
                                    "#GrantAward_CantAfford",
                                    (0, Z.D)(I.negate().add(l0).toNumber()),
                                  ),
                                },
                                "msg",
                              ),
                              (0, t.jsx)(
                                T.Ii,
                                {
                                  href: `${r0.TS.STORE_BASE_URL}points/howitworks`,
                                  children: (0, t.jsx)(
                                    O.$n,
                                    {
                                      children: (0, d.we)(
                                        "#GrantAward_HowToGetPoints",
                                      ),
                                    },
                                    "button",
                                  ),
                                },
                                "button",
                              ),
                            ],
                    }),
                  ],
                });
              }
              break;
            case 1:
            case 2:
            case 3:
              {
                let m = (0, t.jsxs)(Y, {
                  pointBalance: I,
                  children: [
                    (0, t.jsx)(O.$n, {
                      onClick: () => A(0),
                      disabled: j !== 1,
                      children: (0, d.we)("#GrantAward_Back"),
                    }),
                    (0, t.jsx)(O.jn, {
                      onClick: f1,
                      title: (0, d.we)("#GrantAward_SubmitTooltip"),
                      disabled: j !== 1,
                      children: (0, d.we)("#GrantAwardNowButton"),
                    }),
                  ],
                });
                j === 3 &&
                  (m = (0, t.jsx)(Y, {
                    pointBalance: I,
                    children: (0, t.jsx)(O.$n, {
                      onClick: B,
                      children: (0, d.we)("#Button_Close"),
                    }),
                  })),
                  (K = (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(V, { description: M }),
                      (0, t.jsx)(N, {}),
                      (0, t.jsxs)("div", {
                        style: { position: "relative" },
                        children: [
                          (0, t.jsxs)("div", {
                            className: (0, G.A)(
                              o.ConfirmContainer,
                              j === 1 && o.Visible,
                            ),
                            children: [
                              (0, t.jsx)(k, {
                                className: o.ConfirmAwardImage,
                                reactionType: C,
                              }),
                              (0, t.jsxs)("div", {
                                className: o.ConfirmTextCtn,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: o.ConfirmText,
                                    children: (0, d.PP)(
                                      "#GrantAward_Confirm",
                                      (0, t.jsx)(i0, {
                                        children: (0, Z.D)(l0),
                                      }),
                                      (0, t.jsx)("span", {
                                        className: o.AwardName,
                                        children:
                                          (c =
                                            (n = c0.data) == null
                                              ? void 0
                                              : n.get(C)) == null
                                            ? void 0
                                            : c.localized_title,
                                      }),
                                    ),
                                  }),
                                  A0 > 0 &&
                                    (0, t.jsx)("div", {
                                      className: o.ConfirmText,
                                      children: (0, d.PP)(
                                        "#GrantAward_Confirm_Details",
                                        (0, t.jsx)(i0, {
                                          children: (0, Z.D)(A0),
                                        }),
                                        (0, t.jsx)("span", {
                                          className: o.TimePeriod,
                                          children: (0, d.we)(
                                            "#GrantAward_Confirm_DetailsTimePeriod",
                                          ),
                                        }),
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: (0, G.A)(
                              o.LoadingContainer,
                              j === 2 && o.Visible,
                            ),
                            children: (0, t.jsx)(g0, {}),
                          }),
                          (0, t.jsxs)("div", {
                            className: (0, G.A)(
                              o.SuccessContainer,
                              j === 3 && o.Visible,
                            ),
                            children: [
                              (0, t.jsx)(k, {
                                className: o.ConfirmAwardImage,
                                reactionType: C,
                                bForceAnimated: !0,
                              }),
                              (0, t.jsx)("div", {
                                className: o.SuccessText,
                                children: (0, d.we)("#GrantAward_Success"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)(N, {}),
                      m,
                    ],
                  }));
              }
              break;
            case 4:
              {
                let m = "";
                switch (x0) {
                  case w.S7:
                    m = (0, d.we)("#GrantAwardError_Busy");
                    break;
                  case w.yw:
                    m = (0, d.we)("#GrantAwardError_PersistFailed");
                    break;
                  case w.nO:
                    m = (0, d.we)("#GrantAwardError_InvalidParam");
                    break;
                  case w.p:
                    m = (0, d.we)("#GrantAwardError_NoMatch");
                    break;
                  case w.O4:
                    m = (0, d.we)("#GrantAwardError_InsufficientFunds");
                    break;
                  case w.sW:
                    m = (0, d.we)("#GrantAwardError_AccessDenied");
                    break;
                  case w.Dy:
                    m = (0, d.we)("#GrantAwardError_NotLoggedOn");
                    break;
                  case w.Ze:
                    m = (0, d.we)("#GrantAwardError_DuplicateRequest");
                    break;
                  default:
                    m = (0, d.we)("#GrantAwardError_Fail");
                    break;
                }
                K = (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(V, { description: M }),
                    (0, t.jsx)(N, {}),
                    (0, t.jsx)("div", {
                      style: { position: "relative" },
                      children: (0, t.jsx)("div", {
                        className: o.ErrorContainer,
                        children: (0, t.jsx)("div", {
                          className: o.ErrorText,
                          children: m,
                        }),
                      }),
                    }),
                    (0, t.jsx)(N, {}),
                    (0, t.jsx)(Y, {
                      pointBalance: I,
                      children: (0, t.jsx)(O.$n, {
                        onClick: () => A(0),
                        children: (0, d.we)("#GrantAward_Back"),
                      }),
                    }),
                  ],
                });
              }
              break;
            case 5:
              {
                let m = "";
                switch (x0) {
                  case w.S7:
                    m = (0, d.we)("#GrantAwardError_Busy");
                    break;
                  case w.Dy:
                    m = (0, d.we)("#GrantAwardError_NotLoggedOn");
                    break;
                  default:
                    m = (0, d.we)("#GrantAwardError_LoadExistingReactions");
                    break;
                }
                K = (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(V, { description: M }),
                    (0, t.jsx)(N, {}),
                    (0, t.jsx)("div", {
                      style: { position: "relative" },
                      children: (0, t.jsx)("div", {
                        className: o.ErrorContainer,
                        children: (0, t.jsx)("div", {
                          className: o.ErrorText,
                          children: m,
                        }),
                      }),
                    }),
                    (0, t.jsx)(N, {}),
                  ],
                });
              }
              break;
          }
          return (0, t.jsxs)(N0.mt, {
            className: o.GrantAwardModal,
            active: i,
            onDismiss: B,
            children: [U && (0, t.jsx)(H0, { eType: u0.Default }), K],
          });
        }
        const V = ({ description: e }) =>
          (0, t.jsxs)("div", {
            className: o.Header,
            children: [
              (0, t.jsx)("div", {
                className: o.Title,
                children: (0, d.we)("#GrantAwardTitle"),
              }),
              (0, t.jsx)("div", { className: o.Description, children: e }),
            ],
          });
        function Y(e) {
          const { pointBalance: s, children: a } = e,
            r = s && (0, Z.D)(s.toNumber());
          return (0, t.jsxs)("div", {
            className: o.Footer,
            children: [
              (0, t.jsxs)("div", {
                className: o.PointsArea,
                children: [
                  (0, t.jsxs)("div", {
                    className: o.Left,
                    children: [
                      (0, t.jsx)(d0.vrn, { className: o.BalanceIcon }),
                      (0, t.jsxs)("div", {
                        className: o.BalanceDetails,
                        children: [
                          (0, t.jsx)("div", {
                            className: o.BalanceLabel,
                            children: (0, d.we)("#YourBalance"),
                          }),
                          (0, t.jsx)("div", {
                            className: o.BalanceAmount,
                            children: r,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: o.Column,
                    children: (0, t.jsx)("a", {
                      className: o.FooterLink,
                      href: `${r0.TS.STORE_BASE_URL}points/howitworks`,
                      children: (0, d.we)("#GrantAward_PointsLink"),
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: o.Right,
                children: (0, t.jsx)(e0.Z, {
                  className: o.Actions,
                  "flow-children": "row",
                  children: g.Children.map(a, (n) =>
                    (0, t.jsx)("div", { className: o.Action, children: n }),
                  ),
                }),
              }),
            ],
          });
        }
        const N = () => (0, t.jsx)("div", { className: o.Divider });
        class o0 extends g.PureComponent {
          constructor(s) {
            super(s), (this.state = { bHovered: !1 });
          }
          handleMouseOver(s) {
            this.setState({ bHovered: !0 });
          }
          handleMouseOut() {
            this.setState({ bHovered: !1 });
          }
          render() {
            const {
              reaction: s,
              selected: a,
              alreadyAwarded: r,
              cost: n,
              autoFocus: c,
              awardConfig: i,
              ...u
            } = this.props;
            return (0, t.jsxs)(n1, {
              type: "button",
              onMouseEnter: this.handleMouseOver,
              onMouseLeave: this.handleMouseOut,
              className: (0, G.A)(o.Button, a && o.Selected, r && o.Disabled),
              autoFocus: c,
              ...u,
              children: [
                (0, t.jsx)("div", {
                  className: o.IconCtn,
                  children: (0, t.jsx)(k, {
                    reactionType: s,
                    bForceAnimated: this.state.bHovered,
                    bDisableAnimation: r,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: o.LabelCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: o.Label,
                      children: i == null ? void 0 : i.localized_title,
                    }),
                    (0, t.jsx)(i0, {
                      className: o.Points,
                      children: (0, Z.D)(n != null ? n : 0),
                    }),
                  ],
                }),
                r && (0, t.jsx)(l1, { className: o.IconCheckMark }),
              ],
            });
          }
        }
        Q([W.oI], o0.prototype, "handleMouseOver", 1),
          Q([W.oI], o0.prototype, "handleMouseOut", 1);
        const g0 = () =>
            (0, t.jsx)(B0.t, { size: "large", className: o.Loading }),
          i0 = (e) => {
            const { children: s, className: a, ...r } = e;
            return (0, t.jsxs)("span", {
              ...r,
              className: (0, G.A)(a, o.PointsAmount),
              children: [
                (0, t.jsx)(d0.vrn, { className: o.PointsAmountIcon }),
                s,
              ],
            });
          };
      },
      21991: (_, t0, l) => {
        "use strict";
        l.d(t0, { KL: () => E, eU: () => D, lT: () => z });
        var t = l(99412),
          g = l(72604),
          w = l(35038),
          T = l(9591),
          e0 = l(88942),
          s0 = l(90626),
          h = l(68312),
          F = l(3166);
        function D(P, y) {
          return `${F.TS.STORE_CDN_URL}public/images/loyalty/reactions/${y ? "animated" : "still"}/${P}.png`;
        }
        function z() {
          const P = (0, h.KV)();
          return (0, e0.I)({
            queryKey: ["useGetReactionConfiguration"],
            queryFn: async () => {
              const y = w.w.Init(T.Sm);
              y.Body().set_elanguage((0, t.sfN)(F.TS.LANGUAGE));
              let L = await T.a9.GetReactionConfig(P, y);
              return L.GetEResult() == g.R
                ? L.Body().toObject().reactions
                : (console.error(
                    `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${L.GetEResult()}`,
                  ),
                  null);
            },
            staleTime: 1 / 0,
          });
        }
        function E(P) {
          const y = z();
          return (0, s0.useMemo)(() => {
            var L;
            return (L = y == null ? void 0 : y.data) == null
              ? void 0
              : L.find((n0) => n0.reactionid === P);
          }, [y, P]);
        }
      },
      15799: (_) => {
        _.exports = {
          "duration-app-launch": "800ms",
          GrantAwardModal: "_2ilpH-HpvuSm6s5MWX5bA-",
          Header: "_2_vbZB-J_M1GH9js-PXnEj",
          Title: "_2yJ4jvaS0kUJdPVIPR_gld",
          Description: "_16dREqlIrGflPfbNtLGdJh",
          ButtonContainer: "JYQgsMzgbFLgarphirEoQ",
          Button: "_3M92hj6aELzceURcKR7WFu",
          Selected: "Efo_8muMPNLjjSbObMuDq",
          Disabled: "_3k_TnD8zygLxN0YOdqn9B1",
          LabelCtn: "_3jka4zmfNL8_t69ZkB-JmU",
          IconCtn: "_1fdGEFL1uEyxjfiarnOXI",
          Label: "_2iEkqauHWZiCAOo0cWqnPP",
          Points: "_3k_jxlKBddOAxgSknpHNTq",
          IconCheckMark: "_38WUBpAcqEe6Neu89Kri9T",
          Footer: "_164mmLkSJ91cXzABhIrlZq",
          PointsArea: "_3CsHeO3G5c1fQY9Xx4lgUI",
          Column: "_2ihFd-KfZvzA81NOi3SEEJ",
          Left: "_1v0jLHAK-8P4IONBwuF4kv",
          BalanceIcon: "_3VvvB-r8dZsAaPGZ2nsi1A",
          BalanceDetails: "_209Gyxysjz0vcGVVWuh_Xc",
          BalanceLabel: "_2u9RZJXJSDg3e-J_EX1exE",
          BalanceAmount: "_1O3FSoJxkQYLv1MB6H7QNy",
          Right: "_1hgRCff96-fQY4zKEKUkac",
          Actions: "_1-AT2x5dQpwoR2WGoLgbhi",
          Action: "_1Beae_Paey3Y7zly_GQZpI",
          FooterLink: "KId8dCUFbYh_bz-jozERD",
          Divider: "_105pyOdHwQJP6rdcKymwUq",
          ConfirmContainer: "_3rAoeyoUq23O8OYP09P1oz",
          ConfirmTextCtn: "j0Jt4NEMft-y_QAF5NFFh",
          ConfirmText: "_1uA9QkRBqGe3Xt5tlGGhlU",
          AwardName: "_25N0xPcslHWWCQovL3Ycpk",
          TimePeriod: "_6mEUOxWKweU9C1C2VmgsZ",
          Visible: "_2QQTWF2AuPKh-8O0fgjl3b",
          ConfirmAwardImage: "_1ARgx7wEEFOEolu5lBhrk-",
          LoadingContainer: "_1hKG3O3_MI7rp8_HJ7_0fV",
          SuccessContainer: "Uz_0uByMqbJfo6n5oW71y",
          SuccessText: "_1kQzNssyGs4FwglLbkE3mx",
          InitialLoading: "_1ZKr7z5ZdQghkZZCnjx455",
          Loading: "fGpQ7K-RTxeDJfNELWaCD",
          ErrorContainer: "_1SebPOeiRaEqfXHg_dsaYQ",
          ErrorText: "ok8moMj5E4XI25uTRhAHN",
          PointsAmount: "_1WCEAVbVX-TuOWAkFll4DS",
          PointsAmountIcon: "_3-jpV0SaW4qH2i8S7BXeAB",
          NotEnoughPoints: "_2VkAejyr5j-VMhlWHIoMvK",
          BackgroundAnimation: "_1dGxeV63iL-VPsLfbtRDra",
          "ItemFocusAnim-darkerGrey-nocolor": "_3PwWfrjawpqtZMP71qH__f",
          "ItemFocusAnim-darkerGrey": "_3pFUIQyasuCljjQdUfdQoh",
          "ItemFocusAnim-darkGreySettings": "XvVy1qhFrJwjYK25wo2O6",
          "ItemFocusAnim-darkGrey": "_2mlkZwUbL9iw-WNDhros9P",
          "ItemFocusAnim-grey": "_25JEbaqvCWjTwa0yrCrTyb",
          "ItemFocusAnim-translucent-white-10": "_2zTgffSnrFLo9cd9TVkw-0",
          "ItemFocusAnim-translucent-white-20": "_1ohKSKUe9yYXmfwmAa1Wr2",
          "ItemFocusAnimBorder-darkGrey": "_2QcwIQVbc3j-0vpunMVnrl",
          "ItemFocusAnim-green": "_2Im3k1rcp859B-7DqgxyDg",
          focusAnimation: "FanUWGtzO0vNKSd-zZ9gh",
          hoverAnimation: "Yg3LLh88Vk89tuQCRoYjE",
        };
      },
      56425: (_) => {
        _.exports = { UnstyledButton: "_1hcJa9ylImmFKuHsfilos" };
      },
    },
  ]);
})();
