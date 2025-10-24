/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5068],
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
    51706: (e, n, a) => {
      "use strict";
      a.d(n, {
        mt: () => o,
        Qs: () => v,
        o0: () => f.o0,
        eV: () => N.eV,
        KG: () => f.KG,
        Ee: () => f.Ee,
        x_: () => r.x_,
        of: () => m,
        pY: () => f.pY,
        EN: () => l.E,
      });
      var t = a(90626),
        s = a(53835),
        l = a(21869),
        r = a(2654),
        i =
          (a(72739),
          a(48902),
          a(68451),
          a(25118),
          a(84933),
          a(52745),
          a(13871),
          a(78327));
      a(28460);
      function c(e) {
        const { labelledBy: n } = e || {},
          [a, s] = t.useState(void 0);
        return {
          headerId: n || a,
          context: t.useMemo(() => ({ setHeaderId: s }), []),
        };
      }
      function o(e) {
        const {
            active: n,
            onDismiss: a,
            className: i,
            modalClassName: o,
            children: m,
            ...d
          } = e,
          { headerId: u, context: E } = c({ labelledBy: e["aria-labelledby"] });
        return t.createElement(
          s.t6.Provider,
          { value: E },
          t.createElement(
            l.E,
            { active: n },
            t.createElement(
              r.x_,
              { onEscKeypress: a, className: o },
              t.createElement(
                s.UC,
                { role: "dialog", "aria-labelledby": u, className: i, ...d },
                m,
              ),
            ),
          ),
        );
      }
      function m(e) {
        const { className: n, children: a } = e;
        return t.createElement(
          l.E,
          { active: !0 },
          t.createElement("div", { className: n }, a),
        );
      }
      a(81194);
      var d = a(85585),
        u = a(7445),
        E = a(76217),
        p = a(88843);
      function v(e) {
        const { children: n, navID: a, closeModal: s } = e,
          l = t.createRef(),
          r = (e) => (e.stopPropagation(), e.preventDefault(), !0);
        return (0, i.Qn)() && !i.TS.IN_STEAMUI
          ? t.createElement(
              d.B2,
              {
                navID: a,
                navTreeRef: l,
                onCancelButton: s,
                className: p.GamepadOnlyModalWrapper,
              },
              t.createElement(
                u.q,
                null,
                t.createElement(
                  E.Z,
                  {
                    className: p.GamepadOnlyPanelWrapper,
                    onGamepadDirection: r,
                    focusableIfEmpty: !0,
                  },
                  n,
                ),
              ),
            )
          : t.createElement(t.Fragment, null, n);
      }
      var f = a(78395),
        N = a(10411);
      a(76222);
    },
    40917: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, { default: () => D });
      var t = a(90626),
        s = a(9054),
        l = a.n(s),
        r = a(92757),
        i = a(23809),
        c = a(41762),
        o = a(58632),
        m = a.n(o),
        d = a(20194),
        u = a(56545),
        E = a(37403),
        p = a(30470),
        v = a(22837);
      let f;
      const N = 864e5;
      function h(e) {
        return `appinfo_${e}_${p.TS.LANGUAGE}`;
      }
      function S(e) {
        return Boolean(e && Date.now() - e.timeCached < N);
      }
      function _(e) {
        const n = (0, i.KV)(),
          a = (0, i.rX)();
        return (0, d.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, n) {
              return (
                f ||
                  (f = new (m())(
                    async (a) => {
                      const t = new Map();
                      (await Promise.all(a.map((e) => n.GetObject(h(e)))))
                        .filter(S)
                        .forEach(({ value: e }) => t.set(e.appid, e));
                      const s = a.slice().filter((e) => !t.has(e));
                      if (s.length) {
                        const a = u.w.Init(E._z);
                        a.Body().set_language((0, v.sf)(p.TS.LANGUAGE)),
                          a.Body().set_appids(s);
                        const l = await E.BE.GetApps(e, a);
                        if (1 != l.GetEResult()) throw l.GetErrorMessage();
                        l.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            n.StoreObject(h(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              t.set(e.appid, e);
                          });
                      }
                      return a.map((e) => t.get(e));
                    },
                    { cache: !1 },
                  )),
                f
              );
            })(n, a).load(e),
          staleTime: N,
          enabled: !!e,
        }).data;
      }
      var I = a(79908),
        g = a(61859),
        y = a(82477),
        b = a(53835),
        C = a(22797),
        w = a(78327);
      function A(e) {
        return `?joinsessionid=${e}`;
      }
      function G(e) {
        return t.createElement(
          b.$n,
          {
            className: l().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${e.steamAppId}` + A(e.sessionID)),
          },
          e.children,
        );
      }
      function L(e) {
        const n = (0, I.Vc)(),
          a = (0, i.KV)();
        return n.isSuccess
          ? n.data?.sessions?.length > 0
            ? t.createElement(
                t.Fragment,
                null,
                t.createElement(
                  b.JU,
                  { className: l().AvailableSessionsText },
                  "Available Steam Sessions:",
                ),
                t.createElement(
                  "div",
                  { className: l().SessionList },
                  n.data?.sessions.map((n) =>
                    t.createElement(
                      "div",
                      { className: l().Session, key: n.client_instanceid },
                      t.createElement(
                        "div",
                        { className: l().MachineName },
                        n.machine_name,
                      ),
                      t.createElement(
                        "div",
                        { className: l().OsName },
                        n.os_name,
                      ),
                      t.createElement(
                        b.$n,
                        {
                          className: l().JoinSessionButton,
                          onClick: () =>
                            (0, I.o6)(
                              a,
                              n.client_instanceid,
                              e.steamAppId,
                              A(e.sessionID),
                            ),
                        },
                        "Launch Game",
                      ),
                    ),
                  ),
                ),
              )
            : t.createElement(
                "div",
                { className: l().Error },
                "No logged in sessions",
              )
          : n.isFetching || n.isRefetching
            ? t.createElement(C.t, null)
            : t.createElement(
                "div",
                { className: l().Error },
                "Error ",
                n.error.message,
              );
      }
      function B(e) {
        const n = _(e.steamAppId);
        return n
          ? t.createElement(
              t.Fragment,
              null,
              t.createElement(
                "div",
                { className: l().Header },
                "Join Game Session",
              ),
              t.createElement(
                "div",
                { className: l().Explanation },
                "You've been invited to join a game! Click below to launch ",
                n.friendly_name || n.name,
                " on Steam and start playing.",
              ),
              t.createElement(
                "div",
                { className: l().SessionInfoCtr },
                t.createElement("iframe", { src: e.sessionLiveDataUrl }),
              ),
              w.TS.IN_CLIENT
                ? t.createElement(
                    "div",
                    { className: l().SectionCtr },
                    t.createElement(G, { ...e }, "Launch Game"),
                  )
                : t.createElement(
                    t.Fragment,
                    null,
                    t.createElement(
                      "div",
                      { className: l().SectionCtr },
                      w.iA.logged_in
                        ? t.createElement(L, { ...e })
                        : t.createElement(
                            t.Fragment,
                            null,
                            t.createElement(
                              b.JU,
                              null,
                              "Login to join on another device",
                            ),
                            t.createElement(
                              b.$n,
                              { onClick: y.vg },
                              (0, g.we)("#Login_SignIn"),
                            ),
                          ),
                    ),
                    !w.TS.IN_MOBILE_WEBVIEW &&
                      t.createElement(
                        "div",
                        { className: l().SectionCtr },
                        t.createElement(b.JU, null, "Or launch on this PC"),
                        t.createElement(G, { ...e }, "Launch Game Here"),
                      ),
                  ),
            )
          : t.createElement(C.t, null);
      }
      function D() {
        const e = (0, w.Tc)("multiplayersession_join", "application_config"),
          n = new URLSearchParams((0, r.zy)().search).get("jws"),
          { header: a, body: s } = (0, c.I3)(n) || { header: {}, body: {} };
        let { steamAppId: i } = s;
        const o = s[e.jws_sessionid_key],
          m = s[e.jws_livedata_url_key];
        return (
          "string" == typeof i && (i = parseInt(i)),
          t.createElement(
            "div",
            { className: l().JoinApp },
            i && m && m
              ? t.createElement(B, {
                  steamAppId: i,
                  sessionLiveDataUrl: m,
                  sessionID: o,
                })
              : t.createElement("div", null, "Invalid session link"),
            " ",
          )
        );
      }
    },
  },
]);
