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
    51706: (e, n, t) => {
      "use strict";
      t.d(n, {
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
      var a = t(90626),
        s = t(53835),
        l = t(21869),
        r = t(2654),
        i =
          (t(72739),
          t(48902),
          t(68451),
          t(25118),
          t(84933),
          t(52745),
          t(13871),
          t(78327));
      t(28460);
      function c(e) {
        const { labelledBy: n } = e || {},
          [t, s] = a.useState(void 0);
        return {
          headerId: n || t,
          context: a.useMemo(() => ({ setHeaderId: s }), []),
        };
      }
      function o(e) {
        const {
            active: n,
            onDismiss: t,
            className: i,
            modalClassName: o,
            children: m,
            ...d
          } = e,
          { headerId: u, context: E } = c({ labelledBy: e["aria-labelledby"] });
        return a.createElement(
          s.t6.Provider,
          { value: E },
          a.createElement(
            l.E,
            { active: n },
            a.createElement(
              r.x_,
              { onEscKeypress: t, className: o },
              a.createElement(
                s.UC,
                { role: "dialog", "aria-labelledby": u, className: i, ...d },
                m,
              ),
            ),
          ),
        );
      }
      function m(e) {
        const { className: n, children: t } = e;
        return a.createElement(
          l.E,
          { active: !0 },
          a.createElement("div", { className: n }, t),
        );
      }
      t(81194);
      var d = t(85585),
        u = t(7445),
        E = t(76217),
        p = t(88843);
      function v(e) {
        const { children: n, navID: t, closeModal: s } = e,
          l = a.createRef(),
          r = (e) => (e.stopPropagation(), e.preventDefault(), !0);
        return (0, i.Qn)() && !i.TS.IN_STEAMUI
          ? a.createElement(
              d.B2,
              {
                navID: t,
                navTreeRef: l,
                onCancelButton: s,
                className: p.GamepadOnlyModalWrapper,
              },
              a.createElement(
                u.q,
                null,
                a.createElement(
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
          : a.createElement(a.Fragment, null, n);
      }
      var f = t(78395),
        N = t(10411);
      t(76222);
    },
    40917: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => k });
      var a = t(90626),
        s = t(9054),
        l = t.n(s),
        r = t(92757),
        i = t(23809),
        c = t(41762),
        o = t(58632),
        m = t.n(o),
        d = t(20194),
        u = t(37085),
        E = t(56545),
        p = t(37403),
        v = t(30470),
        f = t(22837);
      let N;
      const h = 864e5;
      function S(e) {
        return `appinfo_${e}_${v.TS.LANGUAGE}`;
      }
      function _(e) {
        return Boolean(e && Date.now() - e.timeCached < h);
      }
      function I(e) {
        const n = (0, i.KV)(),
          t = (0, i.rX)();
        return (0, d.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, n) {
              return (
                N ||
                  (N = new (m())(
                    async (t) => {
                      const a = new Map();
                      (await Promise.all(t.map((e) => n.GetObject(S(e)))))
                        .filter(_)
                        .forEach(({ value: e }) => a.set(e.appid, e));
                      const s = t.slice().filter((e) => !a.has(e));
                      if (s.length) {
                        const t = E.w.Init(p._z);
                        t.Body().set_language((0, f.sf)(v.TS.LANGUAGE)),
                          t.Body().set_appids(s);
                        const l = await p.BE.GetApps(e, t);
                        if (l.GetEResult() != u.d.k_EResultOK)
                          throw l.GetErrorMessage();
                        l.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            n.StoreObject(S(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              a.set(e.appid, e);
                          });
                      }
                      return t.map((e) => a.get(e));
                    },
                    { cache: !1 },
                  )),
                N
              );
            })(n, t).load(e),
          staleTime: h,
          enabled: !!e,
        }).data;
      }
      var g = t(96873),
        y = t(61859),
        b = t(82477),
        C = t(53835),
        w = t(22797),
        A = t(78327);
      function G(e) {
        return `?joinsessionid=${e}`;
      }
      function L(e) {
        return a.createElement(
          C.$n,
          {
            className: l().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${e.steamAppId}` + G(e.sessionID)),
          },
          e.children,
        );
      }
      function B(e) {
        const n = (0, g.Vc)(),
          t = (0, i.KV)();
        return n.isSuccess
          ? n.data?.sessions?.length > 0
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  C.JU,
                  { className: l().AvailableSessionsText },
                  "Available Steam Sessions:",
                ),
                a.createElement(
                  "div",
                  { className: l().SessionList },
                  n.data?.sessions.map((n) =>
                    a.createElement(
                      "div",
                      { className: l().Session, key: n.client_instanceid },
                      a.createElement(
                        "div",
                        { className: l().MachineName },
                        n.machine_name,
                      ),
                      a.createElement(
                        "div",
                        { className: l().OsName },
                        n.os_name,
                      ),
                      a.createElement(
                        C.$n,
                        {
                          className: l().JoinSessionButton,
                          onClick: () =>
                            (0, g.o6)(
                              t,
                              n.client_instanceid,
                              e.steamAppId,
                              G(e.sessionID),
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
                { className: l().Error },
                "No logged in sessions",
              )
          : n.isFetching || n.isRefetching
            ? a.createElement(w.t, null)
            : a.createElement(
                "div",
                { className: l().Error },
                "Error ",
                n.error.message,
              );
      }
      function D(e) {
        const n = I(e.steamAppId);
        return n
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "div",
                { className: l().Header },
                "Join Game Session",
              ),
              a.createElement(
                "div",
                { className: l().Explanation },
                "You've been invited to join a game! Click below to launch ",
                n.friendly_name || n.name,
                " on Steam and start playing.",
              ),
              a.createElement(
                "div",
                { className: l().SessionInfoCtr },
                a.createElement("iframe", { src: e.sessionLiveDataUrl }),
              ),
              A.TS.IN_CLIENT
                ? a.createElement(
                    "div",
                    { className: l().SectionCtr },
                    a.createElement(L, { ...e }, "Launch Game"),
                  )
                : a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                      "div",
                      { className: l().SectionCtr },
                      A.iA.logged_in
                        ? a.createElement(B, { ...e })
                        : a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                              C.JU,
                              null,
                              "Login to join on another device",
                            ),
                            a.createElement(
                              C.$n,
                              { onClick: b.vg },
                              (0, y.we)("#Login_SignIn"),
                            ),
                          ),
                    ),
                    !A.TS.IN_MOBILE_WEBVIEW &&
                      a.createElement(
                        "div",
                        { className: l().SectionCtr },
                        a.createElement(C.JU, null, "Or launch on this PC"),
                        a.createElement(L, { ...e }, "Launch Game Here"),
                      ),
                  ),
            )
          : a.createElement(w.t, null);
      }
      function k() {
        const e = (0, A.Tc)("multiplayersession_join", "application_config"),
          n = new URLSearchParams((0, r.zy)().search).get("jws"),
          { header: t, body: s } = (0, c.I3)(n) || { header: {}, body: {} };
        let { steamAppId: i } = s;
        const o = s[e.jws_sessionid_key],
          m = s[e.jws_livedata_url_key];
        return (
          "string" == typeof i && (i = parseInt(i)),
          a.createElement(
            "div",
            { className: l().JoinApp },
            i && m && m
              ? a.createElement(D, {
                  steamAppId: i,
                  sessionLiveDataUrl: m,
                  sessionID: o,
                })
              : a.createElement("div", null, "Invalid session link"),
            " ",
          )
        );
      }
    },
  },
]);
