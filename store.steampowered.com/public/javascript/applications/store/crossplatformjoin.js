/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3369],
  {
    59704: (e) => {
      e.exports = {
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
    80212: (e, t, n) => {
      "use strict";
      n.d(t, { Xt: () => E, _I: () => p, hx: () => d });
      var a = n(47427),
        s = n(90069),
        r = n(31846),
        i = n(37563),
        o = n(99327),
        l = n(22791),
        c = n(35791),
        m = n(27438);
      function u(e) {
        return a.createElement(
          s.e1,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          a.createElement(f, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function d(e) {
        const { redirectURL: t = window.location.href } = e;
        return a.createElement(
          m.Yy,
          { active: !0 },
          a.createElement(u, { redirectURL: t }),
        );
      }
      function E() {
        (0, s.AM)(
          a.createElement(u, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, r.Xx)("#Login_SignInTitle") },
        );
      }
      function p(e, t) {
        (0, s.AM)(
          a.createElement(u, {
            ownerWin: window,
            redirectURL: e,
            guestOption: t,
          }),
          window,
          { strTitle: (0, r.Xx)("#Login_SignInTitle") },
        );
      }
      function f(e) {
        const { redirectURL: t, guestOption: n } = e,
          [s] = (0, a.useState)(
            new l.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [r, m] = (0, a.useState)(!1);
        return a.createElement(
          "div",
          null,
          r
            ? a.createElement(o.pT, null)
            : a.createElement(
                o.wK,
                {
                  autoFocus: !0,
                  transport: s,
                  platform: 2,
                  onComplete: (e) => {
                    e == c.TG.k_PrimaryDomainFail
                      ? m(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                n && a.createElement(o.bU, { redirectURL: t }),
              ),
        );
      }
    },
    89457: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => k });
      var a = n(47427),
        s = n(59704),
        r = n.n(s),
        i = n(8285),
        o = n(40057),
        l = n(39773),
        c = n(73799),
        m = n.n(c),
        u = n(42718),
        d = n(79545),
        E = n(18015),
        p = n(65255),
        f = n(77936);
      let _;
      const h = 864e5;
      function g(e) {
        return `appinfo_${e}_${p.De.LANGUAGE}`;
      }
      function w(e) {
        return Boolean(e && Date.now() - e.timeCached < h);
      }
      function v(e) {
        const t = (0, o.bY)(),
          n = (0, o.y$)();
        return (0, u.useQuery)(
          ["appinfo", e],
          async () =>
            (function (e, t) {
              return (
                _ ||
                  (_ = new (m())(
                    async (n) => {
                      const a = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(g(e)))))
                        .filter(w)
                        .forEach(({ value: e }) => a.set(e.appid, e));
                      const s = n.slice().filter((e) => !a.has(e));
                      if (s.length) {
                        const n = d.gA.Init(E.Fi);
                        n.Body().set_language((0, f.jM)(p.De.LANGUAGE)),
                          n.Body().set_appids(s);
                        const r = await E.AE.GetApps(e, n);
                        if (1 != r.GetEResult()) throw r.GetErrorMessage();
                        r.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(g(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              a.set(e.appid, e);
                          });
                      }
                      return n.map((e) => a.get(e));
                    },
                    { cache: !1 },
                  )),
                _
              );
            })(t, n).load(e),
          { staleTime: h, enabled: !!e },
        ).data;
      }
      var I = n(53923),
        L = (n(67573), n(83120));
      const y = "RemoteDownload_OnlineClient";
      function S() {
        const e = (0, o.bY)(),
          t = (0, I.M)();
        return (0, u.useQuery)(
          [y, t],
          async () => {
            const t = d.gA.Init(L.II),
              n = await L.b5.GetAllClientLogonInfo(e, t);
            if (1 !== n.GetEResult())
              throw (
                (console.error(
                  "Received error from GetAllClientLogonInfo",
                  n.GetEResult(),
                  n.Hdr().transport_error(),
                ),
                new Error(
                  `Error from GetAllClientLogonInfo: ${n.GetEResult()}`,
                ))
              );
            const a = [];
            for (const e of n.Body().sessions())
              e.device_type() !== f.gg.k_EGamingDeviceType_Unknown &&
                a.push(e.toObject());
            return {
              sessions: a,
              refetchInterval: n.Body().refetch_interval_sec() || 300,
            };
          },
          {
            staleTime: 3e5,
            refetchInterval: (e) => 1e3 * (e?.refetchInterval || 300),
          },
        );
      }
      var N = n(31846),
        A = n(80212),
        b = n(1485),
        C = n(46882),
        G = n(37563);
      function D(e) {
        return `?joinsessionid=${e}`;
      }
      function R(e) {
        return a.createElement(
          b.zx,
          {
            className: r().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${e.steamAppId}` + D(e.sessionID)),
          },
          e.children,
        );
      }
      function U(e) {
        const t = S(),
          n = (0, o.bY)();
        return t.isSuccess
          ? t.data?.sessions?.length > 0
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  b.__,
                  { className: r().AvailableSessionsText },
                  "Available Steam Sessions:",
                ),
                a.createElement(
                  "div",
                  { className: r().SessionList },
                  t.data?.sessions.map((t) =>
                    a.createElement(
                      "div",
                      { className: r().Session, key: t.client_instanceid },
                      a.createElement(
                        "div",
                        { className: r().MachineName },
                        t.machine_name,
                      ),
                      a.createElement(
                        "div",
                        { className: r().OsName },
                        t.os_name,
                      ),
                      a.createElement(
                        b.zx,
                        {
                          className: r().JoinSessionButton,
                          onClick: () =>
                            (async function (e, t, n, a) {
                              const s = d.gA.Init(L.Z$);
                              s.Body().set_appid(n),
                                s.Body().set_client_instanceid(t),
                                s.Body().set_query_params(a);
                              const r = await L.b5.LaunchClientApp(e, s);
                              if (1 !== r.GetEResult())
                                throw (
                                  (console.error(
                                    "Received error from LaunchClientApp",
                                    r.GetEResult(),
                                    r.Hdr().transport_error(),
                                  ),
                                  new Error(
                                    `Error from LaunchClientApp: ${r.GetEResult()}`,
                                  ))
                                );
                            })(
                              n,
                              t.client_instanceid,
                              e.steamAppId,
                              D(e.sessionID),
                            ),
                        },
                        "Launch Game",
                      ),
                    ),
                  ),
                ),
              )
            : a.createElement(
                "div",
                { className: r().Error },
                "No logged in sessions",
              )
          : t.isFetching || t.isRefetching
            ? a.createElement(C.V, null)
            : a.createElement(
                "div",
                { className: r().Error },
                "Error ",
                t.error.message,
              );
      }
      function B(e) {
        const t = v(e.steamAppId);
        return t
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "div",
                { className: r().Header },
                "Join Game Session",
              ),
              a.createElement(
                "div",
                { className: r().Explanation },
                "You've been invited to join a game! Click below to launch ",
                t.friendly_name || t.name,
                " on Steam and start playing.",
              ),
              a.createElement(
                "div",
                { className: r().SessionInfoCtr },
                a.createElement("iframe", { src: e.sessionLiveDataUrl }),
              ),
              G.De.IN_CLIENT
                ? a.createElement(
                    "div",
                    { className: r().SectionCtr },
                    a.createElement(R, { ...e }, "Launch Game"),
                  )
                : a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                      "div",
                      { className: r().SectionCtr },
                      G.L7.logged_in
                        ? a.createElement(U, { ...e })
                        : a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                              b.__,
                              null,
                              "Login to join on another device",
                            ),
                            a.createElement(
                              b.zx,
                              { onClick: A.Xt },
                              (0, N.Xx)("#Login_SignIn"),
                            ),
                          ),
                    ),
                    !G.De.IN_MOBILE &&
                      !G.De.IN_MOBILE_WEBVIEW &&
                      a.createElement(
                        "div",
                        { className: r().SectionCtr },
                        a.createElement(b.__, null, "Or launch on this PC"),
                        a.createElement(R, { ...e }, "Launch Game Here"),
                      ),
                  ),
            )
          : a.createElement(C.V, null);
      }
      function k() {
        const e = (0, G.kQ)("multiplayersession_join", "application_config"),
          t = new URLSearchParams((0, i.TH)().search).get("jws"),
          { header: n, body: s } = (0, l.Xl)(t) || { header: {}, body: {} };
        let { steamAppId: o } = s;
        const c = s[e.jws_sessionid_key],
          m = s[e.jws_livedata_url_key];
        return (
          "string" == typeof o && (o = parseInt(o)),
          a.createElement(
            "div",
            { className: r().JoinApp },
            o && m && m
              ? a.createElement(B, {
                  steamAppId: o,
                  sessionLiveDataUrl: m,
                  sessionID: c,
                })
              : a.createElement("div", null, "Invalid session link"),
            " ",
          )
        );
      }
    },
  },
]);
