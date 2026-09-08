/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [15068],
  {
    9054: (e) => {
      e.exports = {
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
    82477: (e, s, n) => {
      "use strict";
      n.d(s, { Cg: () => p, pZ: () => x, vg: () => j });
      var i = n(7850),
        t = n(90626),
        a = n(738),
        o = n(61859),
        r = n(78327),
        c = n(92120),
        l = n(51883),
        d = n(72034),
        u = n(28240),
        h = n(74568);
      function m(e) {
        return (0, i.jsx)(a.x_, {
          onEscKeypress: e.closeModal,
          bDisableBackgroundDismiss: !0,
          children: (0, i.jsx)(S, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        });
      }
      function p(e) {
        const { redirectURL: s = window.location.href } = e;
        return (0, i.jsx)(h.EN, {
          active: !0,
          children: (0, i.jsx)(m, { redirectURL: s }),
        });
      }
      function j() {
        (0, a.pg)(
          (0, i.jsx)(m, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function x(e, s) {
        (0, a.pg)(
          (0, i.jsx)(m, { ownerWin: window, redirectURL: e, guestOption: s }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function S(e) {
        const { redirectURL: s, guestOption: n } = e,
          [a] = (0, t.useState)(
            new d.D(r.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [o, h] = (0, t.useState)(!1);
        return (0, i.jsx)("div", {
          children: o
            ? (0, i.jsx)(c.Fn, {})
            : (0, i.jsx)(c.YN, {
                autoFocus: !0,
                transport: a,
                platform: l.SS.tS,
                onComplete: (e) => {
                  e == u.wI.k_PrimaryDomainFail
                    ? h(!0)
                    : window.location.assign(s);
                },
                redirectUrl: s,
                theme: "modal",
                children: n && (0, i.jsx)(c.Mk, { redirectURL: s }),
              }),
        });
      }
    },
    40917: (e, s, n) => {
      "use strict";
      n.r(s), n.d(s, { default: () => k });
      var i = n(7850),
        t = n(9054),
        a = n.n(t),
        o = n(92757),
        r = n(23809),
        c = n(41762),
        l = n(58632),
        d = n.n(l),
        u = n(80902),
        h = n(37085),
        m = n(56545),
        p = n(34214),
        j = n(30470),
        x = n(22837);
      let S;
      const g = 864e5;
      function f(e) {
        return `appinfo_${e}_${j.TS.LANGUAGE}`;
      }
      function w(e) {
        return Boolean(e && Date.now() - e.timeCached < g);
      }
      function _(e) {
        const s = (0, r.KV)(),
          n = (0, r.rX)();
        return (0, u.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, s) {
              return (
                S ||
                  (S = new (d())(
                    async (n) => {
                      const i = new Map();
                      (await Promise.all(n.map((e) => s.GetObject(f(e)))))
                        .filter(w)
                        .forEach(({ value: e }) => i.set(e.appid, e));
                      const t = n.slice().filter((e) => !i.has(e));
                      if (t.length) {
                        const n = m.w.Init(p._z);
                        n.Body().set_language((0, x.sfN)(j.TS.LANGUAGE)),
                          n.Body().set_appids(t);
                        const a = await p.BE.GetApps(e, n);
                        if (a.GetEResult() != h.R) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            s.StoreObject(f(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              i.set(e.appid, e);
                          });
                      }
                      return n.map((e) => i.get(e));
                    },
                    { cache: !1 },
                  )),
                S
              );
            })(s, n).load(e),
          staleTime: g,
          enabled: !!e,
        }).data;
      }
      var N = n(96873),
        v = n(61859),
        L = n(82477),
        I = n(56283),
        y = n(22797),
        E = n(78327);
      function C(e) {
        return `?joinsessionid=${e}`;
      }
      function U(e) {
        return (0, i.jsx)(I.$n, {
          className: a().JoinSessionButton,
          onClick: () =>
            (window.location.href =
              `steam://launch/${e.steamAppId}` + C(e.sessionID)),
          children: e.children,
        });
      }
      function b(e) {
        const s = (0, N.Vc)(),
          n = (0, r.KV)();
        return s.isSuccess
          ? s.data?.sessions?.length > 0
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(I.JU, {
                    className: a().AvailableSessionsText,
                    children: "Available Steam Sessions:",
                  }),
                  (0, i.jsx)("div", {
                    className: a().SessionList,
                    children: s.data?.sessions.map((s) =>
                      (0, i.jsxs)(
                        "div",
                        {
                          className: a().Session,
                          children: [
                            (0, i.jsx)("div", {
                              className: a().MachineName,
                              children: s.machine_name,
                            }),
                            (0, i.jsx)("div", {
                              className: a().OsName,
                              children: s.os_name,
                            }),
                            (0, i.jsx)(I.$n, {
                              className: a().JoinSessionButton,
                              onClick: () =>
                                (0, N.o6)(
                                  n,
                                  s.client_instanceid,
                                  e.steamAppId,
                                  C(e.sessionID),
                                ),
                              children: "Launch Game",
                            }),
                          ],
                        },
                        s.client_instanceid,
                      ),
                    ),
                  }),
                ],
              })
            : (0, i.jsx)("div", {
                className: a().Error,
                children: "No logged in sessions",
              })
          : s.isFetching || s.isRefetching
            ? (0, i.jsx)(y.t, {})
            : (0, i.jsxs)("div", {
                className: a().Error,
                children: ["Error ", s.error.message],
              });
      }
      function A(e) {
        const s = _(e.steamAppId);
        return s
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: a().Header,
                  children: "Join Game Session",
                }),
                (0, i.jsxs)("div", {
                  className: a().Explanation,
                  children: [
                    "You've been invited to join a game! Click below to launch ",
                    s.friendly_name || s.name,
                    " on Steam and start playing.",
                  ],
                }),
                (0, i.jsx)("div", {
                  className: a().SessionInfoCtr,
                  children: (0, i.jsx)("iframe", { src: e.sessionLiveDataUrl }),
                }),
                E.TS.IN_CLIENT
                  ? (0, i.jsx)("div", {
                      className: a().SectionCtr,
                      children: (0, i.jsx)(U, {
                        ...e,
                        children: "Launch Game",
                      }),
                    })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", {
                          className: a().SectionCtr,
                          children: E.iA.logged_in
                            ? (0, i.jsx)(b, { ...e })
                            : (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)(I.JU, {
                                    children: "Login to join on another device",
                                  }),
                                  (0, i.jsx)(I.$n, {
                                    onClick: L.vg,
                                    children: (0, v.we)("#Login_SignIn"),
                                  }),
                                ],
                              }),
                        }),
                        !E.TS.IN_MOBILE_WEBVIEW &&
                          (0, i.jsxs)("div", {
                            className: a().SectionCtr,
                            children: [
                              (0, i.jsx)(I.JU, {
                                children: "Or launch on this PC",
                              }),
                              (0, i.jsx)(U, {
                                ...e,
                                children: "Launch Game Here",
                              }),
                            ],
                          }),
                      ],
                    }),
              ],
            })
          : (0, i.jsx)(y.t, {});
      }
      function k() {
        const e = (0, E.Tc)("multiplayersession_join", "application_config"),
          s = new URLSearchParams((0, o.zy)().search).get("jws"),
          { header: n, body: t } = (0, c.I3)(s) || { header: {}, body: {} };
        let { steamAppId: r } = t;
        const l = t[e.jws_sessionid_key],
          d = t[e.jws_livedata_url_key];
        return (
          "string" == typeof r && (r = parseInt(r)),
          (0, i.jsxs)("div", {
            className: a().JoinApp,
            children: [
              r && d && d
                ? (0, i.jsx)(A, {
                    steamAppId: r,
                    sessionLiveDataUrl: d,
                    sessionID: l,
                  })
                : (0, i.jsx)("div", { children: "Invalid session link" }),
              " ",
            ],
          })
        );
      }
    },
  },
]);
