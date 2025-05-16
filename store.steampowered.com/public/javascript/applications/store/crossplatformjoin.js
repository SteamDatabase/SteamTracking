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
    51706: (e, t, s) => {
      "use strict";
      s.d(t, {
        mt: () => l,
        Qs: () => p,
        o0: () => E.o0,
        eV: () => f.e,
        KG: () => E.KG,
        Ee: () => E.Ee,
        x_: () => a.x_,
        of: () => c,
        pY: () => E.pY,
        EN: () => i.E,
      });
      var n = s(90626),
        r = s(10981),
        i = s(21869),
        a = s(2654),
        o =
          (s(72739),
          s(48902),
          s(60155),
          s(25118),
          s(73745),
          s(52745),
          s(13871),
          s(78327));
      s(28460);
      const l = ({
        active: e,
        onDismiss: t,
        className: s,
        modalClassName: o,
        children: l,
      }) =>
        n.createElement(
          i.E,
          { active: e },
          n.createElement(
            a.x_,
            { onEscKeypress: t, className: o },
            n.createElement(r.UC, { className: s }, l),
          ),
        );
      function c(e) {
        const { className: t, children: s } = e;
        return n.createElement(
          i.E,
          { active: !0 },
          n.createElement("div", { className: t }, s),
        );
      }
      s(81194);
      var u = s(85585),
        m = s(7445),
        h = s(76217),
        d = s(88843);
      function p(e) {
        const { children: t, navID: s, closeModal: r } = e,
          i = n.createRef(),
          a = (e) => (e.stopPropagation(), e.preventDefault(), !0);
        return (0, o.Qn)() && !o.TS.IN_STEAMUI
          ? n.createElement(
              u.B2,
              {
                navID: s,
                navTreeRef: i,
                onCancelButton: r,
                className: d.GamepadOnlyModalWrapper,
              },
              n.createElement(
                m.q,
                null,
                n.createElement(
                  h.Z,
                  {
                    className: d.GamepadOnlyPanelWrapper,
                    onGamepadDirection: a,
                    focusableIfNoChildren: !0,
                  },
                  t,
                ),
              ),
            )
          : n.createElement(n.Fragment, null, t);
      }
      var E = s(78395),
        f = s(10411);
      s(76222);
    },
    40917: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => M });
      var n = s(90626),
        r = s(9054),
        i = s.n(r),
        a = s(92757),
        o = s(23809),
        l = s(41762),
        c = s(58632),
        u = s.n(c),
        m = s(20194),
        h = s(56545),
        d = s(37403),
        p = s(30470),
        E = s(22837);
      let f;
      const b = 864e5;
      function v(e) {
        return `appinfo_${e}_${p.TS.LANGUAGE}`;
      }
      function y(e) {
        return Boolean(e && Date.now() - e.timeCached < b);
      }
      function g(e) {
        const t = (0, o.KV)(),
          s = (0, o.rX)();
        return (0, m.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                f ||
                  (f = new (u())(
                    async (s) => {
                      const n = new Map();
                      (await Promise.all(s.map((e) => t.GetObject(v(e)))))
                        .filter(y)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const r = s.slice().filter((e) => !n.has(e));
                      if (r.length) {
                        const s = h.w.Init(d._z);
                        s.Body().set_language((0, E.sf)(p.TS.LANGUAGE)),
                          s.Body().set_appids(r);
                        const i = await d.BE.GetApps(e, s);
                        if (1 != i.GetEResult()) throw i.GetErrorMessage();
                        i.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(v(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              n.set(e.appid, e);
                          });
                      }
                      return s.map((e) => n.get(e));
                    },
                    { cache: !1 },
                  )),
                f
              );
            })(t, s).load(e),
          staleTime: b,
          enabled: !!e,
        }).data;
      }
      var N = s(79908),
        S = s(61859),
        C = s(82477),
        _ = s(10981),
        O = s(22797),
        I = s(78327);
      function R(e) {
        return `?joinsessionid=${e}`;
      }
      function w(e) {
        return n.createElement(
          _.$n,
          {
            className: i().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${e.steamAppId}` + R(e.sessionID)),
          },
          e.children,
        );
      }
      function L(e) {
        const t = (0, N.Vc)(),
          s = (0, o.KV)();
        return t.isSuccess
          ? t.data?.sessions?.length > 0
            ? n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  _.JU,
                  { className: i().AvailableSessionsText },
                  "Available Steam Sessions:",
                ),
                n.createElement(
                  "div",
                  { className: i().SessionList },
                  t.data?.sessions.map((t) =>
                    n.createElement(
                      "div",
                      { className: i().Session, key: t.client_instanceid },
                      n.createElement(
                        "div",
                        { className: i().MachineName },
                        t.machine_name,
                      ),
                      n.createElement(
                        "div",
                        { className: i().OsName },
                        t.os_name,
                      ),
                      n.createElement(
                        _.$n,
                        {
                          className: i().JoinSessionButton,
                          onClick: () =>
                            (0, N.o6)(
                              s,
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
            : n.createElement(
                "div",
                { className: i().Error },
                "No logged in sessions",
              )
          : t.isFetching || t.isRefetching
            ? n.createElement(O.t, null)
            : n.createElement(
                "div",
                { className: i().Error },
                "Error ",
                t.error.message,
              );
      }
      function q(e) {
        const t = g(e.steamAppId);
        return t
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "div",
                { className: i().Header },
                "Join Game Session",
              ),
              n.createElement(
                "div",
                { className: i().Explanation },
                "You've been invited to join a game! Click below to launch ",
                t.friendly_name || t.name,
                " on Steam and start playing.",
              ),
              n.createElement(
                "div",
                { className: i().SessionInfoCtr },
                n.createElement("iframe", { src: e.sessionLiveDataUrl }),
              ),
              I.TS.IN_CLIENT
                ? n.createElement(
                    "div",
                    { className: i().SectionCtr },
                    n.createElement(w, { ...e }, "Launch Game"),
                  )
                : n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      "div",
                      { className: i().SectionCtr },
                      I.iA.logged_in
                        ? n.createElement(L, { ...e })
                        : n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(
                              _.JU,
                              null,
                              "Login to join on another device",
                            ),
                            n.createElement(
                              _.$n,
                              { onClick: C.vg },
                              (0, S.we)("#Login_SignIn"),
                            ),
                          ),
                    ),
                    !I.TS.IN_MOBILE &&
                      !I.TS.IN_MOBILE_WEBVIEW &&
                      n.createElement(
                        "div",
                        { className: i().SectionCtr },
                        n.createElement(_.JU, null, "Or launch on this PC"),
                        n.createElement(w, { ...e }, "Launch Game Here"),
                      ),
                  ),
            )
          : n.createElement(O.t, null);
      }
      function M() {
        const e = (0, I.Tc)("multiplayersession_join", "application_config"),
          t = new URLSearchParams((0, a.zy)().search).get("jws"),
          { header: s, body: r } = (0, l.I3)(t) || { header: {}, body: {} };
        let { steamAppId: o } = r;
        const c = r[e.jws_sessionid_key],
          u = r[e.jws_livedata_url_key];
        return (
          "string" == typeof o && (o = parseInt(o)),
          n.createElement(
            "div",
            { className: i().JoinApp },
            o && u && u
              ? n.createElement(q, {
                  steamAppId: o,
                  sessionLiveDataUrl: u,
                  sessionID: c,
                })
              : n.createElement("div", null, "Invalid session link"),
            " ",
          )
        );
      }
    },
    54806: (e, t, s) => {
      "use strict";
      s.d(t, { E: () => f });
      var n = s(90626),
        r = s(86709),
        i = s(45747),
        a = s(74500),
        o = s(57168);
      function l(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var c = class extends a.Q {
          #e;
          #t;
          #s;
          #n;
          #r;
          #i;
          #a;
          #o;
          constructor(e, t, s) {
            super(),
              (this.#e = e),
              (this.#n = s),
              (this.#s = []),
              (this.#r = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#r.forEach((e) => {
                e.subscribe((t) => {
                  this.#l(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#r.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, s) {
            (this.#s = e),
              (this.#n = t),
              r.j.batch(() => {
                const e = this.#r,
                  t = this.#c(this.#s);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, s),
                );
                const n = t.map((e) => e.observer),
                  r = n.map((e) => e.getCurrentResult()),
                  i = n.some((t, s) => t !== e[s]);
                (e.length !== n.length || i) &&
                  ((this.#r = n),
                  (this.#t = r),
                  this.hasListeners() &&
                    (l(e, n).forEach((e) => {
                      e.destroy();
                    }),
                    l(n, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#l(e, t);
                      });
                    }),
                    this.#u()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#r.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#r;
          }
          getOptimisticResult(e, t) {
            const s = this.#c(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [s, (e) => this.#m(e ?? s, t), () => this.#h(s, e)];
          }
          #h(e, t) {
            const s = this.#c(t);
            return s.map((t, n) => {
              const r = e[n];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? r
                : t.observer.trackResult(r, (e) => {
                    s.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #m(e, t) {
            return t
              ? ((this.#i && this.#t === this.#o && t === this.#a) ||
                  ((this.#a = t),
                  (this.#o = this.#t),
                  (this.#i = (0, o.BH)(this.#i, t(e)))),
                this.#i)
              : e;
          }
          #c(e) {
            const t = new Map(this.#r.map((e) => [e.options.queryHash, e])),
              s = [];
            return (
              e.forEach((e) => {
                const n = this.#e.defaultQueryOptions(e),
                  r = t.get(n.queryHash);
                if (r) s.push({ defaultedQueryOptions: n, observer: r });
                else {
                  const e = this.#r.find(
                    (e) => e.options.queryHash === n.queryHash,
                  );
                  s.push({
                    defaultedQueryOptions: n,
                    observer: e ?? new i.$(this.#e, n),
                  });
                }
              }),
              s.sort(
                (t, s) =>
                  e.findIndex(
                    (e) => e.queryHash === t.defaultedQueryOptions.queryHash,
                  ) -
                  e.findIndex(
                    (e) => e.queryHash === s.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #l(e, t) {
            const s = this.#r.indexOf(e);
            -1 !== s &&
              ((this.#t = (function (e, t, s) {
                const n = e.slice(0);
                return (n[t] = s), n;
              })(this.#t, s, t)),
              this.#u());
          }
          #u() {
            if (this.hasListeners()) {
              this.#i !==
                this.#m(this.#h(this.#t, this.#s), this.#n?.combine) &&
                r.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        u = s(75233),
        m = s(22730),
        h = s(43424),
        d = s(19086),
        p = s(44407),
        E = s(19866);
      function f({ queries: e, ...t }, s) {
        const a = (0, u.jE)(s),
          o = (0, m.w)(),
          l = (0, h.h)(),
          f = n.useMemo(
            () =>
              e.map((e) => {
                const t = a.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = o ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, a, o],
          );
        f.forEach((e) => {
          (0, p.jv)(e), (0, d.LJ)(e, l);
        }),
          (0, d.wZ)(l);
        const [b] = n.useState(() => new c(a, f, t)),
          [v, y, g] = b.getOptimisticResult(f, t.combine);
        n.useSyncExternalStore(
          n.useCallback(
            (e) => (o ? E.l : b.subscribe(r.j.batchCalls(e))),
            [b, o],
          ),
          () => b.getCurrentResult(),
          () => b.getCurrentResult(),
        ),
          n.useEffect(() => {
            b.setQueries(f, t, { listeners: !1 });
          }, [f, t, b]);
        const N = v.some((e, t) => (0, p.EU)(f[t], e))
          ? v.flatMap((e, t) => {
              const s = f[t];
              if (s) {
                const t = new i.$(a, s);
                if ((0, p.EU)(s, e)) return (0, p.iL)(s, t, l);
                (0, p.nE)(e, o) && (0, p.iL)(s, t, l);
              }
              return [];
            })
          : [];
        if (N.length > 0) throw Promise.all(N);
        const S = v.find((e, t) => {
          const s = f[t];
          return (
            s &&
            (0, d.$1)({
              result: e,
              errorResetBoundary: l,
              throwOnError: s.throwOnError,
              query: a.getQueryCache().get(s.queryHash),
            })
          );
        });
        if (S?.error) throw S.error;
        return y(g());
      }
    },
  },
]);
