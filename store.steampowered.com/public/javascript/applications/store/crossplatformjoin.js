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
    40917: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => q });
      var n = s(90626),
        r = s(9054),
        i = s.n(r),
        a = s(92757),
        o = s(23809),
        l = s(41762),
        c = s(58632),
        u = s.n(c),
        h = s(20194),
        m = s(56545),
        d = s(37403),
        p = s(30470),
        f = s(22837);
      let b;
      const E = 864e5;
      function v(e) {
        return `appinfo_${e}_${p.TS.LANGUAGE}`;
      }
      function y(e) {
        return Boolean(e && Date.now() - e.timeCached < E);
      }
      function g(e) {
        const t = (0, o.KV)(),
          s = (0, o.rX)();
        return (0, h.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                b ||
                  (b = new (u())(
                    async (s) => {
                      const n = new Map();
                      (await Promise.all(s.map((e) => t.GetObject(v(e)))))
                        .filter(y)
                        .forEach(({ value: e }) => n.set(e.appid, e));
                      const r = s.slice().filter((e) => !n.has(e));
                      if (r.length) {
                        const s = m.w.Init(d._z);
                        s.Body().set_language((0, f.sf)(p.TS.LANGUAGE)),
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
                b
              );
            })(t, s).load(e),
          staleTime: E,
          enabled: !!e,
        }).data;
      }
      var S = s(79908),
        C = s(61859),
        N = s(82477),
        O = s(33737),
        _ = s(22797),
        w = s(78327);
      function R(e) {
        return `?joinsessionid=${e}`;
      }
      function I(e) {
        return n.createElement(
          O.$n,
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
        const t = (0, S.Vc)(),
          s = (0, o.KV)();
        return t.isSuccess
          ? t.data?.sessions?.length > 0
            ? n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  O.JU,
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
                        O.$n,
                        {
                          className: i().JoinSessionButton,
                          onClick: () =>
                            (0, S.o6)(
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
            ? n.createElement(_.t, null)
            : n.createElement(
                "div",
                { className: i().Error },
                "Error ",
                t.error.message,
              );
      }
      function k(e) {
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
              w.TS.IN_CLIENT
                ? n.createElement(
                    "div",
                    { className: i().SectionCtr },
                    n.createElement(I, { ...e }, "Launch Game"),
                  )
                : n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      "div",
                      { className: i().SectionCtr },
                      w.iA.logged_in
                        ? n.createElement(L, { ...e })
                        : n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(
                              O.JU,
                              null,
                              "Login to join on another device",
                            ),
                            n.createElement(
                              O.$n,
                              { onClick: N.vg },
                              (0, C.we)("#Login_SignIn"),
                            ),
                          ),
                    ),
                    !w.TS.IN_MOBILE &&
                      !w.TS.IN_MOBILE_WEBVIEW &&
                      n.createElement(
                        "div",
                        { className: i().SectionCtr },
                        n.createElement(O.JU, null, "Or launch on this PC"),
                        n.createElement(I, { ...e }, "Launch Game Here"),
                      ),
                  ),
            )
          : n.createElement(_.t, null);
      }
      function q() {
        const e = (0, w.Tc)("multiplayersession_join", "application_config"),
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
              ? n.createElement(k, {
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
      s.d(t, { E: () => b });
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
            return [s, (e) => this.#h(e ?? s, t), () => this.#m(s, e)];
          }
          #m(e, t) {
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
          #h(e, t) {
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
                this.#h(this.#m(this.#t, this.#s), this.#n?.combine) &&
                r.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        u = s(75233),
        h = s(22730),
        m = s(43424),
        d = s(19086),
        p = s(44407),
        f = s(19866);
      function b({ queries: e, ...t }, s) {
        const a = (0, u.jE)(s),
          o = (0, h.w)(),
          l = (0, m.h)(),
          b = n.useMemo(
            () =>
              e.map((e) => {
                const t = a.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = o ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, a, o],
          );
        b.forEach((e) => {
          (0, p.jv)(e), (0, d.LJ)(e, l);
        }),
          (0, d.wZ)(l);
        const [E] = n.useState(() => new c(a, b, t)),
          [v, y, g] = E.getOptimisticResult(b, t.combine);
        n.useSyncExternalStore(
          n.useCallback(
            (e) => (o ? f.l : E.subscribe(r.j.batchCalls(e))),
            [E, o],
          ),
          () => E.getCurrentResult(),
          () => E.getCurrentResult(),
        ),
          n.useEffect(() => {
            E.setQueries(b, t, { listeners: !1 });
          }, [b, t, E]);
        const S = v.some((e, t) => (0, p.EU)(b[t], e))
          ? v.flatMap((e, t) => {
              const s = b[t];
              if (s) {
                const t = new i.$(a, s);
                if ((0, p.EU)(s, e)) return (0, p.iL)(s, t, l);
                (0, p.nE)(e, o) && (0, p.iL)(s, t, l);
              }
              return [];
            })
          : [];
        if (S.length > 0) throw Promise.all(S);
        const C = v.find((e, t) => {
          const s = b[t];
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
        if (C?.error) throw C.error;
        return y(g());
      }
    },
  },
]);
