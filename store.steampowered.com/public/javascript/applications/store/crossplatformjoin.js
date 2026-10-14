/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [15068],
    {
      86390: (J, B, n) => {
        "use strict";
        n.d(B, { Cg: () => U, pZ: () => p, vg: () => K });
        var e = n(7850),
          y = n(90626),
          i = n(88003),
          d = n(18210),
          I = n(3166),
          E = n(87242),
          S = n(74974),
          z = n(6740),
          A = n(62179),
          G = n(3685),
          F = n(96538);
        function N(m) {
          return (0, e.jsx)(i.x_, {
            onEscKeypress: m.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(O, {
              redirectURL: m.redirectURL,
              guestOption: m.guestOption,
            }),
          });
        }
        function U(m) {
          const { redirectURL: a = window.location.href } = m;
          return (0, e.jsx)(F.EN, {
            active: !0,
            children: (0, e.jsx)(N, { redirectURL: a }),
          });
        }
        function K() {
          (0, i.pg)(
            (0, e.jsx)(N, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, d.we)("#Login_SignInTitle") },
          );
        }
        function p(m, a) {
          (0, i.pg)(
            (0, e.jsx)(N, { ownerWin: window, redirectURL: m, guestOption: a }),
            window,
            { strTitle: (0, d.we)("#Login_SignInTitle") },
          );
        }
        function O(m) {
          const { redirectURL: a, guestOption: c } = m,
            [h] = (0, y.useState)(
              new A.x(
                new G.D(I.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [v, g] = (0, y.useState)(!1),
            o = (t) => {
              t == E.wI.k_PrimaryDomainFail ? g(!0) : window.location.assign(a);
            };
          return (0, e.jsx)("div", {
            children: v
              ? (0, e.jsx)(S.Fn, {})
              : (0, e.jsx)(S.YN, {
                  autoFocus: !0,
                  transport: h,
                  platform: z.SS.tS,
                  onComplete: o,
                  redirectUrl: a,
                  theme: "modal",
                  children: c && (0, e.jsx)(S.Mk, { redirectURL: a }),
                }),
          });
        }
      },
      96538: (J, B, n) => {
        "use strict";
        n.d(B, {
          mt: () => z,
          o0: () => p.o0,
          eV: () => O.eV,
          KG: () => p.KG,
          Ee: () => p.Ee,
          x_: () => I.x_,
          of: () => F,
          pY: () => p.pY,
          EN: () => d.E,
        });
        var e = n(7850),
          y = n(90626),
          i = n(16412),
          d = n(69168),
          I = n(50731),
          E = n(15568);
        function S(a) {
          const { labelledBy: c } = a || {},
            [h, v] = y.useState(void 0),
            g = y.useMemo(() => ({ setHeaderId: v }), []);
          return { headerId: c || h, context: g };
        }
        function z(a) {
          const {
              active: c,
              onDismiss: h,
              className: v,
              modalClassName: g,
              bGamepadUIScrollWithin: o,
              children: t,
              ...r
            } = a,
            { headerId: u, context: x } = S({
              labelledBy: a["aria-labelledby"],
            });
          return (0, e.jsx)(i.t6.Provider, {
            value: x,
            children: (0, e.jsx)(d.E, {
              active: c,
              children: (0, e.jsx)(I.x_, {
                onEscKeypress: h,
                className: g,
                bGamepadUIScrollWithin: o,
                children: (0, e.jsx)(i.UC, {
                  role: "dialog",
                  "aria-labelledby": u,
                  className: v,
                  ...r,
                  children: t,
                }),
              }),
            }),
          });
        }
        function A(a) {
          const {
              onDismiss: c,
              className: h,
              modalClassName: v,
              bGamepadUIScrollWithin: g,
              children: o,
              ...t
            } = a,
            { headerId: r, context: u } = S();
          return jsx(Dialog.DialogStructureContext.Provider, {
            value: u,
            children: jsx(PopupWindow, {
              ...t,
              onDismiss: c,
              children: jsx(ModalPosition, {
                onEscKeypress: c,
                className: v,
                bGamepadUIScrollWithin: g,
                children: jsx(Dialog.Content, {
                  role: "dialog",
                  "aria-labelledby": r,
                  "aria-label": t.strTitle,
                  className: h,
                  children: o,
                }),
              }),
            }),
          });
        }
        const G = (a) => A({ modal: !0, ...a });
        function F(a) {
          const { className: c, children: h } = a;
          return (0, e.jsx)(d.E, {
            active: !0,
            children: (0, e.jsx)("div", { className: c, children: h }),
          });
        }
        var N = n(30343);
        function U(a) {
          const c = React.useMemo(() => K(), []);
          return jsx(DialogOverlay, { ...a, DialogWrapper: c });
        }
        function K() {
          return function (c) {
            const { className: h, active: v, children: g, modalKey: o } = c,
              t = React.useRef(void 0);
            return (
              useActivateNavTree(t, v, !0),
              jsx(FocusNavigationRoot, {
                className: h,
                navTreeRef: t,
                modal: !0,
                enabled: v,
                navID: `ModalDialogOverlay_${o}`,
                children: g,
              })
            );
          };
        }
        var p = n(1880),
          O = n(90506),
          m = n(47515);
      },
      15568: (J, B, n) => {
        "use strict";
        n.d(B, { wA: () => a });
        var e = n(7850),
          y = n(1418),
          i = n(2259),
          d = n(90626),
          I = n(72739),
          E = n(71568),
          S = n(9705),
          z = n(34360),
          A = n(31032),
          G = n(69168),
          F = n(83203),
          N = n(44930),
          U = n(36707),
          K = n(25091);
        function p(o) {
          const { popup: t, className: r, ...u } = o,
            x = (0, K.GD)(t),
            L = d.useRef(null);
          return (
            d.useEffect(() => {
              const P = L.current;
              if (P && (0, N.Fj)(t, "Window.SetResizeGrip")) {
                let w = 0,
                  C = 0;
                const s = P.getBoundingClientRect(),
                  l = P.ownerDocument.defaultView;
                s &&
                  l &&
                  !x &&
                  ((w = Math.ceil(l.innerWidth - s.left)),
                  (C = Math.ceil(l.innerHeight - s.top))),
                  t.SteamClient.Window.SetResizeGrip(w, C);
              }
              return () => {
                (0, N.Fj)(t, "Window.SetResizeGrip") &&
                  t.SteamClient.Window.SetResizeGrip(0, 0);
              };
            }, [t, x]),
            x
              ? null
              : (0, e.jsx)("div", {
                  className: (0, U.A)("window_resize_grip", r),
                  ref: L,
                  ...u,
                })
          );
        }
        var O = n(30096),
          m = n(3166);
        const a = (o) => c({ modal: !0, ...o });
        function c(o) {
          const t = (0, E.R7)().ownerWindow,
            r = (0, m.Qn)(),
            [u, x] = d.useState(() =>
              r ||
              (o.onlyPopoutIfNeeded === !0 &&
                o.popupHeight < t.innerHeight * 0.9 &&
                o.popupWidth < t.innerWidth * 0.9 &&
                t.document.visibilityState == "visible")
                ? "inline"
                : "popout",
            );
          return u === "inline"
            ? (0, e.jsx)(G.E, { active: !0, children: o.children })
            : u === "popout"
              ? (0, e.jsx)(v, { ...o })
              : null;
        }
        function h(o) {
          const {
              popup: t,
              children: r,
              bFitToContent: u,
              className: x,
              ...L
            } = o,
            P = d.useCallback(
              (C) => {
                const s = Math.ceil(C.borderBoxSize[0].inlineSize),
                  l = Math.ceil(C.borderBoxSize[0].blockSize);
                t?.SteamClient.Window.ResizeTo(s, l, !0);
              },
              [t],
            ),
            w = (0, i.wY)(P);
          return (0, e.jsx)("div", {
            className: (0, U.A)("PopupFullWindow", u && "FitToContent", x),
            ref: u ? w : void 0,
            ...L,
            children: r,
          });
        }
        function v(o) {
          const {
              strName: t,
              strTitle: r,
              popupWidth: u,
              popupHeight: x,
              browserType: L,
              onDismiss: P,
              bFitToContent: w,
              refPopup: C,
              children: s,
              titleBarClassName: l,
              saveDimensionsKey: D,
            } = o,
            b = (0, E.R7)()?.ownerWindow,
            j = (0, A.yk)(),
            R = { ...(0, S.h3)(D), onClose: P };
          let T = 0;
          o.resizable && (T |= E.Wf.Resizable),
            (o.minWidth || o.minHeight) &&
              (T |= E.Wf.ApplyBrowserScaleToDimensions),
            o.fullscreen && (T |= E.Wf.FullScreen);
          const Y = "PopupWindow_" + (t ? `${t}_` : "") + d.useId(),
            { popup: W, element: H } = (0, S.OJ)(
              Y,
              {
                title: r,
                dimensions: { width: u, height: x },
                html_class: "client_chat_frame fullheight ModalDialogPopup",
                body_class: "fullheight ModalDialogBody",
                popup_class: "fullheight",
                browserType: L,
                minWidth: o.minWidth,
                minHeight: o.minHeight,
                replace_existing_popup: !0,
                center_on_window: j?.BCenterPopupsOnWindow() ? b : void 0,
                eCreationFlags: T,
                target_browser: j?.GetBrowserInfo(),
              },
              R,
            );
          if (
            (d.useEffect(
              () => ((0, O.cZ)(C, W), () => (0, O.cZ)(C, void 0)),
              [C, W],
            ),
            d.useEffect(() => {
              W && (W.document.title = r ?? t);
            }, [W, r, t]),
            !H)
          )
            return null;
          const $ = o.modal ?? o.onlyPopoutIfNeeded,
            V = !o.resizable;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              $ && (0, e.jsx)(g, { popup: W }),
              I.createPortal(
                (0, e.jsx)(E.kc, {
                  ownerWindow: W,
                  children: (0, e.jsxs)(y.Y, {
                    children: [
                      (0, e.jsxs)(h, {
                        popup: W,
                        bFitToContent: w,
                        onContextMenu: z.aE,
                        children: [
                          (0, e.jsx)(F.c, {
                            className: l,
                            hideMin: V,
                            hideMax: V,
                            popup: W,
                            hideActions: !P,
                          }),
                          (0, e.jsx)(A.EO, {
                            bCenterPopupsOnWindow: j?.BCenterPopupsOnWindow(),
                            browserInfo: j?.GetBrowserInfo(),
                            children: s,
                          }),
                        ],
                      }),
                      o.resizable && !w && (0, e.jsx)(p, { popup: W }),
                    ],
                  }),
                }),
                H,
              ),
            ],
          });
        }
        function g(o) {
          const { popup: t } = o,
            r = d.useCallback(() => {
              t?.SteamClient.Window.BringToFront();
            }, [t]);
          return (
            d.useEffect(r, [r]),
            (0, e.jsx)(G.E, {
              active: !0,
              children: (0, e.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                onClick: r,
              }),
            })
          );
        }
      },
      67628: (J, B, n) => {
        "use strict";
        n.r(B), n.d(B, { default: () => C });
        var e = n(7850),
          y = n(9054),
          i = n.n(y),
          d = n(92757),
          I = n(68312),
          E = n(84732),
          S = n(58632),
          z = n.n(S),
          A = n(80902),
          G = n(72604),
          F = n(35038),
          N = n(72849),
          U = n(98609),
          K = n(99412);
        let p;
        const O = 1440 * 60 * 1e3;
        function m(s) {
          return `appinfo_${s}_${U.TS.LANGUAGE}`;
        }
        function a(s) {
          return !!(s && Date.now() - s.timeCached < O);
        }
        function c(s, l) {
          return (
            p ||
              (p = new (z())(
                async (D) => {
                  const M = new Map();
                  (await Promise.all(D.map((f) => l.GetObject(m(f)))))
                    .filter(a)
                    .forEach(({ value: f }) => M.set(f.appid, f));
                  const j = D.slice().filter((f) => !M.has(f));
                  if (j.length) {
                    const f = F.w.Init(N._z);
                    f.Body().set_language((0, K.sfN)(U.TS.LANGUAGE)),
                      f.Body().set_appids(j);
                    const R = await N.BE.GetApps(s, f);
                    if (R.GetEResult() != G.R) throw R.GetErrorMessage();
                    R.Body()
                      .toObject()
                      .apps.forEach((T) => {
                        l.StoreObject(m(T.appid), {
                          timeCached: Date.now(),
                          value: T,
                        }),
                          M.set(T.appid, T);
                      });
                  }
                  return D.map((f) => M.get(f));
                },
                { cache: !1 },
              )),
            p
          );
        }
        function h(s) {
          const l = (0, I.KV)(),
            D = (0, I.rX)();
          return (0, A.I)({
            queryKey: ["appinfo", s],
            queryFn: async () => c(l, D).load(s),
            staleTime: O,
            enabled: !!s,
          }).data;
        }
        var v = n(23761),
          g = n(18210),
          o = n(86390),
          t = n(16412),
          r = n(85599),
          u = n(3166);
        function x(s) {
          return `?joinsessionid=${s}`;
        }
        function L(s) {
          return (0, e.jsx)(t.$n, {
            className: i().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${s.steamAppId}` + x(s.sessionID)),
            children: s.children,
          });
        }
        function P(s) {
          const l = (0, v.Vc)(),
            D = (0, I.KV)();
          return l.isSuccess
            ? l.data?.sessions?.length > 0
              ? (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(t.JU, {
                      className: i().AvailableSessionsText,
                      children: "Available Steam Sessions:",
                    }),
                    (0, e.jsx)("div", {
                      className: i().SessionList,
                      children: l.data?.sessions.map((M) =>
                        (0, e.jsxs)(
                          "div",
                          {
                            className: i().Session,
                            children: [
                              (0, e.jsx)("div", {
                                className: i().MachineName,
                                children: M.machine_name,
                              }),
                              (0, e.jsx)("div", {
                                className: i().OsName,
                                children: M.os_name,
                              }),
                              (0, e.jsx)(t.$n, {
                                className: i().JoinSessionButton,
                                onClick: () =>
                                  (0, v.o6)(
                                    D,
                                    M.client_instanceid,
                                    s.steamAppId,
                                    x(s.sessionID),
                                  ),
                                children: "Launch Game",
                              }),
                            ],
                          },
                          M.client_instanceid,
                        ),
                      ),
                    }),
                  ],
                })
              : (0, e.jsx)("div", {
                  className: i().Error,
                  children: "No logged in sessions",
                })
            : l.isFetching || l.isRefetching
              ? (0, e.jsx)(r.t, {})
              : (0, e.jsxs)("div", {
                  className: i().Error,
                  children: ["Error ", l.error.message],
                });
        }
        function w(s) {
          const l = h(s.steamAppId);
          return l
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: i().Header,
                    children: "Join Game Session",
                  }),
                  (0, e.jsxs)("div", {
                    className: i().Explanation,
                    children: [
                      "You've been invited to join a game! Click below to launch ",
                      l.friendly_name || l.name,
                      " on Steam and start playing.",
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: i().SessionInfoCtr,
                    children: (0, e.jsx)("iframe", {
                      src: s.sessionLiveDataUrl,
                    }),
                  }),
                  u.TS.IN_CLIENT
                    ? (0, e.jsx)("div", {
                        className: i().SectionCtr,
                        children: (0, e.jsx)(L, {
                          ...s,
                          children: "Launch Game",
                        }),
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: i().SectionCtr,
                            children: u.iA.logged_in
                              ? (0, e.jsx)(P, { ...s })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(t.JU, {
                                      children:
                                        "Login to join on another device",
                                    }),
                                    (0, e.jsx)(t.$n, {
                                      onClick: o.vg,
                                      children: (0, g.we)("#Login_SignIn"),
                                    }),
                                  ],
                                }),
                          }),
                          !u.TS.IN_MOBILE_WEBVIEW &&
                            (0, e.jsxs)("div", {
                              className: i().SectionCtr,
                              children: [
                                (0, e.jsx)(t.JU, {
                                  children: "Or launch on this PC",
                                }),
                                (0, e.jsx)(L, {
                                  ...s,
                                  children: "Launch Game Here",
                                }),
                              ],
                            }),
                        ],
                      }),
                ],
              })
            : (0, e.jsx)(r.t, {});
        }
        function C() {
          const s = (0, u.Tc)("multiplayersession_join", "application_config"),
            D = new URLSearchParams((0, d.zy)().search).get("jws"),
            { header: M, body: b } = (0, E.I3)(D) || { header: {}, body: {} };
          let { steamAppId: j } = b;
          const f = b[s.jws_sessionid_key],
            R = b[s.jws_livedata_url_key];
          return (
            typeof j == "string" && (j = parseInt(j)),
            (0, e.jsxs)("div", {
              className: i().JoinApp,
              children: [
                !j || !R || !R
                  ? (0, e.jsx)("div", { children: "Invalid session link" })
                  : (0, e.jsx)(w, {
                      steamAppId: j,
                      sessionLiveDataUrl: R,
                      sessionID: f,
                    }),
                " ",
              ],
            })
          );
        }
      },
      9054: (J) => {
        J.exports = {
          narrowWidth: "500px",
          JoinApp: "_27LPt-4kZ0Y0j9DNG19rsN",
          SessionInfoCtr: "z4yEIu1D7pKZ9BNib5lIq",
          SectionCtr: "_3pJz3d4_3A43Jh7D44SUlm",
          JoinSessionButton: "oFMSJB00CTFnfT-758yts",
          SessionList: "_25Du_Z4_ooVhqUEkiYSqxt",
          Session: "zNbRzxK68u4bzfA0OyV0I",
          MachineName: "EOLg7Cdie5CHJUEGL6-CB",
          OsName: "S5bNzjo6KMcWWn6Ms9QuY",
          AvailableSessionsText: "_1NtbtSr3XzLpXPC3ugtzr9",
          Header: "_239fSrbkMDKdFJQsaOV8MW",
          Explanation: "_1isyHy9nKabM8wUFKUu-lm",
        };
      },
    },
  ]);
})();
