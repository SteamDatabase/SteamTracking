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
      n.d(t, { Xt: () => E, _I: () => p, hx: () => u });
      var i = n(47427),
        s = n(90069),
        o = n(31846),
        r = n(37563),
        a = n(99327),
        l = n(22791),
        c = n(35791),
        m = n(27438);
      function d(e) {
        return i.createElement(
          s.e1,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          i.createElement(f, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function u(e) {
        const { redirectURL: t = window.location.href } = e;
        return i.createElement(
          m.Yy,
          { active: !0 },
          i.createElement(d, { redirectURL: t }),
        );
      }
      function E() {
        (0, s.AM)(
          i.createElement(d, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, o.Xx)("#Login_SignIn") },
        );
      }
      function p(e, t) {
        (0, s.AM)(
          i.createElement(d, {
            ownerWin: window,
            redirectURL: e,
            guestOption: t,
          }),
          window,
          { strTitle: (0, o.Xx)("#Login_SignIn") },
        );
      }
      function f(e) {
        const { redirectURL: t, guestOption: n } = e,
          [s] = (0, i.useState)(
            new l.J(r.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [o, m] = (0, i.useState)(!1);
        return i.createElement(
          "div",
          null,
          o
            ? i.createElement(a.pT, null)
            : i.createElement(
                a.wK,
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
                n && i.createElement(a.bU, { redirectURL: t }),
              ),
        );
      }
    },
    89457: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => O });
      var i = n(47427),
        s = n(59704),
        o = n.n(s),
        r = n(8285),
        a = n(40057),
        l = n(39773),
        c = n(85556),
        m = n(73799),
        d = n.n(m),
        u = n(42718),
        E = n(79545),
        p = n(18015),
        f = n(65255),
        v = n(77936);
      let _;
      const h = 864e5;
      function g(e) {
        return `appinfo_${e}_${f.De.LANGUAGE}`;
      }
      function w(e) {
        return Boolean(e && Date.now() - e.timeCached < h);
      }
      function I(e) {
        const t = (0, a.bY)(),
          n = (0, a.y$)();
        return (0, u.useQuery)(
          ["appinfo", e],
          () =>
            (0, c.mG)(this, void 0, void 0, function* () {
              return (function (e, t) {
                return (
                  _ ||
                    (_ = new (d())(
                      (n) =>
                        (0, c.mG)(this, void 0, void 0, function* () {
                          const i = new Map();
                          (yield Promise.all(n.map((e) => t.GetObject(g(e)))))
                            .filter(w)
                            .forEach(({ value: e }) => i.set(e.appid, e));
                          const s = n.slice().filter((e) => !i.has(e));
                          if (s.length) {
                            const n = E.gA.Init(p.Fi);
                            n.Body().set_language((0, v.jM)(f.De.LANGUAGE)),
                              n.Body().set_appids(s);
                            const o = yield p.AE.GetApps(e, n);
                            if (1 != o.GetEResult()) throw o.GetErrorMessage();
                            o.Body()
                              .toObject()
                              .apps.forEach((e) => {
                                t.StoreObject(g(e.appid), {
                                  timeCached: Date.now(),
                                  value: e,
                                }),
                                  i.set(e.appid, e);
                              });
                          }
                          return n.map((e) => i.get(e));
                        }),
                      { cache: !1 },
                    )),
                  _
                );
              })(t, n).load(e);
            }),
          { staleTime: h, enabled: !!e },
        ).data;
      }
      var L = n(53923),
        y = (n(67573), n(83120));
      const S = "RemoteDownload_OnlineClient";
      function N() {
        const e = (0, a.bY)(),
          t = (0, L.M)();
        return (0, u.useQuery)(
          [S, t],
          () =>
            (0, c.mG)(this, void 0, void 0, function* () {
              const t = E.gA.Init(y.II),
                n = yield y.b5.GetAllClientLogonInfo(e, t);
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
              const i = [];
              for (const e of n.Body().sessions())
                e.device_type() !== v.gg.k_EGamingDeviceType_Unknown &&
                  i.push(e.toObject());
              return {
                sessions: i,
                refetchInterval: n.Body().refetch_interval_sec() || 300,
              };
            }),
          {
            staleTime: 3e5,
            refetchInterval: (e) =>
              1e3 * ((null == e ? void 0 : e.refetchInterval) || 300),
          },
        );
      }
      var b = n(31846),
        A = n(80212),
        G = n(1485),
        C = n(46882),
        D = n(37563);
      function R(e) {
        return `?joinsessionid=${e}`;
      }
      function U(e) {
        return i.createElement(
          G.zx,
          {
            className: o().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${e.steamAppId}` + R(e.sessionID)),
          },
          e.children,
        );
      }
      function B(e) {
        var t, n, s;
        const r = N(),
          l = (0, a.bY)();
        return r.isSuccess
          ? (null ===
              (n =
                null === (t = r.data) || void 0 === t ? void 0 : t.sessions) ||
            void 0 === n
              ? void 0
              : n.length) > 0
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  G.__,
                  { className: o().AvailableSessionsText },
                  "Available Steam Sessions:",
                ),
                i.createElement(
                  "div",
                  { className: o().SessionList },
                  null === (s = r.data) || void 0 === s
                    ? void 0
                    : s.sessions.map((t) =>
                        i.createElement(
                          "div",
                          { className: o().Session, key: t.client_instanceid },
                          i.createElement(
                            "div",
                            { className: o().MachineName },
                            t.machine_name,
                          ),
                          i.createElement(
                            "div",
                            { className: o().OsName },
                            t.os_name,
                          ),
                          i.createElement(
                            G.zx,
                            {
                              className: o().JoinSessionButton,
                              onClick: () =>
                                (function (e, t, n, i) {
                                  return (0, c.mG)(
                                    this,
                                    void 0,
                                    void 0,
                                    function* () {
                                      const s = E.gA.Init(y.Z$);
                                      s.Body().set_appid(n),
                                        s.Body().set_client_instanceid(t),
                                        s.Body().set_query_params(i);
                                      const o = yield y.b5.LaunchClientApp(
                                        e,
                                        s,
                                      );
                                      if (1 !== o.GetEResult())
                                        throw (
                                          (console.error(
                                            "Received error from LaunchClientApp",
                                            o.GetEResult(),
                                            o.Hdr().transport_error(),
                                          ),
                                          new Error(
                                            `Error from LaunchClientApp: ${o.GetEResult()}`,
                                          ))
                                        );
                                    },
                                  );
                                })(
                                  l,
                                  t.client_instanceid,
                                  e.steamAppId,
                                  R(e.sessionID),
                                ),
                            },
                            "Launch Game",
                          ),
                        ),
                      ),
                ),
              )
            : i.createElement(
                "div",
                { className: o().Error },
                "No logged in sessions",
              )
          : r.isFetching || r.isRefetching
            ? i.createElement(C.V, null)
            : i.createElement(
                "div",
                { className: o().Error },
                "Error ",
                r.error.message,
              );
      }
      function k(e) {
        const t = I(e.steamAppId);
        return t
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: o().Header },
                "Join Game Session",
              ),
              i.createElement(
                "div",
                { className: o().Explanation },
                "You've been invited to join a game! Click below to launch ",
                t.friendly_name || t.name,
                " on Steam and start playing.",
              ),
              i.createElement(
                "div",
                { className: o().SessionInfoCtr },
                i.createElement("iframe", { src: e.sessionLiveDataUrl }),
              ),
              D.De.IN_CLIENT
                ? i.createElement(
                    "div",
                    { className: o().SectionCtr },
                    i.createElement(U, Object.assign({}, e), "Launch Game"),
                  )
                : i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      "div",
                      { className: o().SectionCtr },
                      D.L7.logged_in
                        ? i.createElement(B, Object.assign({}, e))
                        : i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(
                              G.__,
                              null,
                              "Login to join on another device",
                            ),
                            i.createElement(
                              G.zx,
                              { onClick: A.Xt },
                              (0, b.Xx)("#Login_SignIn"),
                            ),
                          ),
                    ),
                    !D.De.IN_MOBILE &&
                      !D.De.IN_MOBILE_WEBVIEW &&
                      i.createElement(
                        "div",
                        { className: o().SectionCtr },
                        i.createElement(G.__, null, "Or launch on this PC"),
                        i.createElement(
                          U,
                          Object.assign({}, e),
                          "Launch Game Here",
                        ),
                      ),
                  ),
            )
          : i.createElement(C.V, null);
      }
      function O() {
        const e = (0, D.kQ)("multiplayersession_join", "application_config"),
          t = new URLSearchParams((0, r.TH)().search).get("jws"),
          { header: n, body: s } = (0, l.Xl)(t) || { header: {}, body: {} };
        let { steamAppId: a } = s;
        const c = s[e.jws_sessionid_key],
          m = s[e.jws_livedata_url_key];
        return (
          "string" == typeof a && (a = parseInt(a)),
          i.createElement(
            "div",
            { className: o().JoinApp },
            a && m && m
              ? i.createElement(k, {
                  steamAppId: a,
                  sessionLiveDataUrl: m,
                  sessionID: c,
                })
              : i.createElement("div", null, "Invalid session link"),
            " ",
          )
        );
      }
    },
  },
]);
