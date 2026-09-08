/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [70514],
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
    42248: (e, r, t) => {
      "use strict";
      t.d(r, { q: () => s });
      var c = t(78327),
        o = t(22837);
      function s() {
        return c.TS.IN_CLIENT && (0, o.DOG)(c.TS.LAUNCHER_TYPE);
      }
    },
    74568: (e, r, t) => {
      "use strict";
      t.d(r, {
        mt: () => a,
        o0: () => f.o0,
        eV: () => h.eV,
        KG: () => f.KG,
        Ee: () => f.Ee,
        x_: () => l.x_,
        of: () => d,
        pY: () => f.pY,
        EN: () => i.E,
      });
      var c = t(7850),
        o = t(90626),
        s = t(56283),
        i = t(21869),
        l = t(2654);
      t(37049);
      function n(e) {
        const { labelledBy: r } = e || {},
          [t, c] = o.useState(void 0);
        return {
          headerId: r || t,
          context: o.useMemo(() => ({ setHeaderId: c }), []),
        };
      }
      function a(e) {
        const {
            active: r,
            onDismiss: t,
            className: o,
            modalClassName: a,
            bGamepadUIScrollWithin: d,
            children: f,
            ...h
          } = e,
          { headerId: u, context: p } = n({ labelledBy: e["aria-labelledby"] });
        return (0, c.jsx)(s.t6.Provider, {
          value: p,
          children: (0, c.jsx)(i.E, {
            active: r,
            children: (0, c.jsx)(l.x_, {
              onEscKeypress: t,
              className: a,
              bGamepadUIScrollWithin: d,
              children: (0, c.jsx)(s.UC, {
                role: "dialog",
                "aria-labelledby": u,
                className: o,
                ...h,
                children: f,
              }),
            }),
          }),
        });
      }
      function d(e) {
        const { className: r, children: t } = e;
        return (0, c.jsx)(i.E, {
          active: !0,
          children: (0, c.jsx)("div", { className: r, children: t }),
        });
      }
      t(6230);
      var f = t(78395),
        h = t(10411);
      t(76222);
    },
    37049: (e, r, t) => {
      "use strict";
      t.d(r, { wA: () => _ });
      var c = t(7850),
        o = t(40236),
        s = t(90626),
        i = t(72739),
        l = t(13871),
        n = t(48902),
        a = t(60155),
        d = t(52745),
        f = t(21869),
        h = t(25118),
        u = t(66703),
        p = t(52038),
        b = t(28460);
      function m(e) {
        const { popup: r, className: t, ...o } = e,
          i = (0, b.GD)(r),
          l = s.useRef(null);
        return (
          s.useEffect(() => {
            const e = l.current;
            if (e && (0, u.Fj)(r, "Window.SetResizeGrip")) {
              let t = 0,
                c = 0;
              const o = e.getBoundingClientRect(),
                s = e.ownerDocument.defaultView;
              o &&
                s &&
                !i &&
                ((t = Math.ceil(s.innerWidth - o.left)),
                (c = Math.ceil(s.innerHeight - o.top))),
                r.SteamClient.Window.SetResizeGrip(t, c);
            }
            return () => {
              (0, u.Fj)(r, "Window.SetResizeGrip") &&
                r.SteamClient.Window.SetResizeGrip(0, 0);
            };
          }, [r, i]),
          i
            ? null
            : (0, c.jsx)("div", {
                className: (0, p.A)("window_resize_grip", t),
                ref: l,
                ...o,
              })
        );
      }
      var x = t(84933),
        k = t(78327);
      const _ = (e) =>
        (function (e) {
          const r = (0, l.R7)().ownerWindow,
            t = (0, k.Qn)(),
            [o, i] = s.useState(() =>
              t ||
              (!0 === e.onlyPopoutIfNeeded &&
                e.popupHeight < 0.9 * r.innerHeight &&
                e.popupWidth < 0.9 * r.innerWidth &&
                "visible" == r.document.visibilityState)
                ? "inline"
                : "popout",
            );
          return "inline" === o
            ? (0, c.jsx)(f.E, { active: !0, children: e.children })
            : "popout" === o
              ? (0, c.jsx)(T, { ...e })
              : null;
        })({ modal: !0, ...e });
      function j(e) {
        const {
            popup: r,
            children: t,
            bFitToContent: i,
            className: l,
            ...n
          } = e,
          a = s.useCallback(
            (e) => {
              const t = Math.ceil(e.borderBoxSize[0].inlineSize),
                c = Math.ceil(e.borderBoxSize[0].blockSize);
              r?.SteamClient.Window.ResizeTo(t, c, !0);
            },
            [r],
          ),
          d = (0, o.wY)(a);
        return (0, c.jsx)("div", {
          className: (0, p.A)("PopupFullWindow", i && "FitToContent", l),
          ref: i ? d : void 0,
          ...n,
          children: t,
        });
      }
      function T(e) {
        const {
            strName: r,
            strTitle: t,
            popupWidth: o,
            popupHeight: f,
            browserType: u,
            onDismiss: p,
            bFitToContent: b,
            refPopup: k,
            children: _,
            titleBarClassName: T,
            saveDimensionsKey: M,
          } = e,
          S = (0, l.R7)(),
          g = S?.ownerWindow,
          w = (0, d.yk)(),
          L = { ...(0, n.h3)(M), onClose: p };
        let W = 0;
        e.resizable && (W |= l.Wf.Resizable),
          (e.minWidth || e.minHeight) &&
            (W |= l.Wf.ApplyBrowserScaleToDimensions),
          e.fullscreen && (W |= l.Wf.FullScreen);
        const v = "PopupWindow_" + (r ? `${r}_` : "") + s.useId(),
          { popup: z, element: C } = (0, n.OJ)(
            v,
            {
              title: t,
              dimensions: { width: o, height: f },
              html_class: "client_chat_frame fullheight ModalDialogPopup",
              body_class: "fullheight ModalDialogBody",
              popup_class: "fullheight",
              browserType: u,
              minWidth: e.minWidth,
              minHeight: e.minHeight,
              replace_existing_popup: !0,
              center_on_window: w?.BCenterPopupsOnWindow() ? g : void 0,
              eCreationFlags: W,
              target_browser: w?.GetBrowserInfo(),
            },
            L,
          );
        if (
          (s.useEffect(
            () => ((0, x.cZ)(k, z), () => (0, x.cZ)(k, void 0)),
            [k, z],
          ),
          s.useEffect(() => {
            z && (z.document.title = t ?? r);
          }, [z, t, r]),
          !C)
        )
          return null;
        const y = e.modal ?? e.onlyPopoutIfNeeded,
          E = !e.resizable;
        return (0, c.jsxs)(c.Fragment, {
          children: [
            y && (0, c.jsx)(N, { popup: z }),
            i.createPortal(
              (0, c.jsxs)(l.kc, {
                ownerWindow: z,
                children: [
                  (0, c.jsxs)(j, {
                    popup: z,
                    bFitToContent: b,
                    onContextMenu: a.aE,
                    children: [
                      (0, c.jsx)(h.c, {
                        className: T,
                        hideMin: E,
                        hideMax: E,
                        popup: z,
                        hideActions: !p,
                      }),
                      (0, c.jsx)(d.EO, {
                        bCenterPopupsOnWindow: w?.BCenterPopupsOnWindow(),
                        browserInfo: w?.GetBrowserInfo(),
                        children: _,
                      }),
                    ],
                  }),
                  e.resizable && !b && (0, c.jsx)(m, { popup: z }),
                ],
              }),
              C,
            ),
          ],
        });
      }
      function N(e) {
        const { popup: r } = e,
          t = s.useCallback(() => {
            r?.SteamClient.Window.BringToFront();
          }, [r]);
        return (
          s.useEffect(t, [t]),
          (0, c.jsx)(f.E, {
            active: !0,
            children: (0, c.jsx)("div", {
              style: {
                position: "fixed",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
              },
              onClick: t,
            }),
          })
        );
      }
    },
    22797: (e, r, t) => {
      "use strict";
      t.d(r, { t: () => f });
      var c = t(7850),
        o = t(90626),
        s = t(52038),
        i = t(20978),
        l = t.n(i);
      const n =
        t.p +
        "images/applications/store/steam_spinner.png?v=valveisgoodatcaching";
      var a = t(42248),
        d = t(66418);
      const f = o.memo(function (e) {
        const {
          className: r,
          size: t,
          string: i,
          position: f,
          static: u,
          msDelayAppear: p,
        } = e;
        let b = [l().LoadingWrapper, "SteamLogoThrobber", h(t)];
        const [m, x] = o.useState(!p),
          k = !(0, a.q)();
        return (
          (0, o.useEffect)(() => {
            if (m) return;
            const e = setTimeout(() => x(!0), p);
            return () => clearTimeout(e);
          }, [p, m]),
          void 0 === i && b.push(l().noString),
          r && b.push(r),
          u && b.push(l().Static),
          (0, c.jsxs)("div", {
            className: (0, s.A)(
              "center" == f && l().throbber_center_wrapper,
              !!p && l().ThrobberDelayAppear,
              m && l().Visible,
            ),
            children: [
              m &&
                k &&
                (0, c.jsx)("div", {
                  className: b.join(" "),
                  children: (0, c.jsx)("div", {
                    className: l().NewThrobber,
                    children: (0, c.jsx)("img", { src: (0, d.YJ)(n) }),
                  }),
                }),
              Boolean(i) &&
                (0, c.jsx)("div", { className: l().ThrobberText, children: i }),
            ],
          })
        );
      });
      o.memo(function (e) {
        const {
          className: r,
          size: t,
          string: i,
          position: n,
          static: a,
          msDelayAppear: d,
        } = e;
        let f = [l().LoadingWrapper, "SteamLogoThrobber", h(t)];
        const [p, b] = o.useState(!d);
        return (
          (0, o.useEffect)(() => {
            if (p) return;
            const e = setTimeout(() => b(!0), d);
            return () => clearTimeout(e);
          }, [d, p]),
          void 0 === i && f.push(l().noString),
          r && f.push(r),
          a && f.push(l().Static),
          (0, c.jsxs)("div", {
            className: (0, s.A)(
              "center" == n && l().throbber_center_wrapper,
              !!d && l().ThrobberDelayAppear,
              p && l().Visible,
            ),
            children: [
              p &&
                (0, c.jsx)("div", {
                  className: f.join(" "),
                  children: (0, c.jsxs)("div", {
                    className: l().Throbber,
                    children: [
                      (0, c.jsx)(u, { className: l().base }),
                      (0, c.jsx)(u, { className: l().blur }),
                    ],
                  }),
                }),
              Boolean(i) &&
                (0, c.jsx)("div", { className: l().ThrobberText, children: i }),
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
      function u(e) {
        let r = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (r += e.className),
          (0, c.jsxs)("svg", {
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
              (0, c.jsxs)("g", {
                className: l().partCircle,
                children: [
                  (0, c.jsx)("path", {
                    className: l().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M201.432,101.166",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
                  }),
                ],
              }),
              (0, c.jsxs)("g", {
                className: l().mainOutline,
                children: [
                  (0, c.jsx)("path", {
                    className: l().roundFill,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundOuterOutline,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber01,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber02,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber03,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber04,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber05,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber06,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber07,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber08,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber09,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber10,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber11,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber12,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber13,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
                    className: l().roundThrobber14,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, c.jsx)("path", {
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
              (0, c.jsx)("g", {
                className: l().bottomCircle,
                children: (0, c.jsx)("path", {
                  fill: "#ffffff",
                  d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
                }),
              }),
              (0, c.jsx)("g", {
                className: l().topCircle,
                children: (0, c.jsx)("circle", {
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
