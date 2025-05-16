/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9399],
  {
    17083: (e, t, s) => {
      s.d(t, { N_: () => b, k2: () => y });
      var r = s(92757),
        n = s(42891),
        i = s(90626),
        o = s(29248),
        u = s(58584),
        a = s(81115),
        c = s(68841);
      i.Component;
      i.Component;
      var l = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        h = function (e, t) {
          return "string" == typeof e ? (0, o.yJ)(e, null, null, t) : e;
        },
        f = function (e) {
          return e;
        },
        p = i.forwardRef;
      void 0 === p && (p = f);
      var v = p(function (e, t) {
        var s = e.innerRef,
          r = e.navigate,
          n = e.onClick,
          o = (0, a.A)(e, ["innerRef", "navigate", "onClick"]),
          c = o.target,
          l = (0, u.A)({}, o, {
            onClick: function (e) {
              try {
                n && n(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && "_self" !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (l.ref = (f !== p && t) || s), i.createElement("a", l);
      });
      var b = p(function (e, t) {
          var s = e.component,
            n = void 0 === s ? v : s,
            b = e.replace,
            d = e.to,
            m = e.innerRef,
            y = (0, a.A)(e, ["component", "replace", "to", "innerRef"]);
          return i.createElement(r.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var s = e.history,
              r = h(l(d, e.location), e.location),
              a = r ? s.createHref(r) : "",
              v = (0, u.A)({}, y, {
                href: a,
                navigate: function () {
                  var t = l(d, e.location),
                    r = (0, o.AO)(e.location) === (0, o.AO)(h(t));
                  (b || r ? s.replace : s.push)(t);
                },
              });
            return (
              f !== p ? (v.ref = t || m) : (v.innerRef = m),
              i.createElement(n, v)
            );
          });
        }),
        d = function (e) {
          return e;
        },
        m = i.forwardRef;
      void 0 === m && (m = d);
      var y = m(function (e, t) {
        var s = e["aria-current"],
          n = void 0 === s ? "page" : s,
          o = e.activeClassName,
          f = void 0 === o ? "active" : o,
          p = e.activeStyle,
          v = e.className,
          y = e.exact,
          R = e.isActive,
          g = e.location,
          O = e.sensitive,
          C = e.strict,
          E = e.style,
          w = e.to,
          q = e.innerRef,
          Q = (0, a.A)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return i.createElement(r.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var s = g || e.location,
            o = h(l(w, s), s),
            a = o.pathname,
            k = a && a.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            A = k
              ? (0, r.B6)(s.pathname, {
                  path: k,
                  exact: y,
                  sensitive: O,
                  strict: C,
                })
              : null,
            H = !!(R ? R(A, s) : A),
            x = "function" == typeof v ? v(H) : v,
            M = "function" == typeof E ? E(H) : E;
          H &&
            ((x = (function () {
              for (
                var e = arguments.length, t = new Array(e), s = 0;
                s < e;
                s++
              )
                t[s] = arguments[s];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(x, f)),
            (M = (0, u.A)({}, M, p)));
          var S = (0, u.A)(
            { "aria-current": (H && n) || null, className: x, style: M, to: o },
            Q,
          );
          return (
            d !== m ? (S.ref = t || q) : (S.innerRef = q), i.createElement(b, S)
          );
        });
      });
    },
    54806: (e, t, s) => {
      s.d(t, { E: () => d });
      var r = s(90626),
        n = s(86709),
        i = s(45747),
        o = s(74500),
        u = s(57168);
      function a(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var c = class extends o.Q {
          #e;
          #t;
          #s;
          #r;
          #n;
          #i;
          #o;
          #u;
          constructor(e, t, s) {
            super(),
              (this.#e = e),
              (this.#r = s),
              (this.#s = []),
              (this.#n = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#n.forEach((e) => {
                e.subscribe((t) => {
                  this.#a(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#n.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, s) {
            (this.#s = e),
              (this.#r = t),
              n.j.batch(() => {
                const e = this.#n,
                  t = this.#c(this.#s);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, s),
                );
                const r = t.map((e) => e.observer),
                  n = r.map((e) => e.getCurrentResult()),
                  i = r.some((t, s) => t !== e[s]);
                (e.length !== r.length || i) &&
                  ((this.#n = r),
                  (this.#t = n),
                  this.hasListeners() &&
                    (a(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    a(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#a(e, t);
                      });
                    }),
                    this.#l()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#n.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#n;
          }
          getOptimisticResult(e, t) {
            const s = this.#c(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [s, (e) => this.#h(e ?? s, t), () => this.#f(s, e)];
          }
          #f(e, t) {
            const s = this.#c(t);
            return s.map((t, r) => {
              const n = e[r];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? n
                : t.observer.trackResult(n, (e) => {
                    s.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #h(e, t) {
            return t
              ? ((this.#i && this.#t === this.#u && t === this.#o) ||
                  ((this.#o = t),
                  (this.#u = this.#t),
                  (this.#i = (0, u.BH)(this.#i, t(e)))),
                this.#i)
              : e;
          }
          #c(e) {
            const t = new Map(this.#n.map((e) => [e.options.queryHash, e])),
              s = [];
            return (
              e.forEach((e) => {
                const r = this.#e.defaultQueryOptions(e),
                  n = t.get(r.queryHash);
                if (n) s.push({ defaultedQueryOptions: r, observer: n });
                else {
                  const e = this.#n.find(
                    (e) => e.options.queryHash === r.queryHash,
                  );
                  s.push({
                    defaultedQueryOptions: r,
                    observer: e ?? new i.$(this.#e, r),
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
          #a(e, t) {
            const s = this.#n.indexOf(e);
            -1 !== s &&
              ((this.#t = (function (e, t, s) {
                const r = e.slice(0);
                return (r[t] = s), r;
              })(this.#t, s, t)),
              this.#l());
          }
          #l() {
            if (this.hasListeners()) {
              this.#i !==
                this.#h(this.#f(this.#t, this.#s), this.#r?.combine) &&
                n.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        l = s(75233),
        h = s(22730),
        f = s(43424),
        p = s(19086),
        v = s(44407),
        b = s(19866);
      function d({ queries: e, ...t }, s) {
        const o = (0, l.jE)(s),
          u = (0, h.w)(),
          a = (0, f.h)(),
          d = r.useMemo(
            () =>
              e.map((e) => {
                const t = o.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = u ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, o, u],
          );
        d.forEach((e) => {
          (0, v.jv)(e), (0, p.LJ)(e, a);
        }),
          (0, p.wZ)(a);
        const [m] = r.useState(() => new c(o, d, t)),
          [y, R, g] = m.getOptimisticResult(d, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (u ? b.l : m.subscribe(n.j.batchCalls(e))),
            [m, u],
          ),
          () => m.getCurrentResult(),
          () => m.getCurrentResult(),
        ),
          r.useEffect(() => {
            m.setQueries(d, t, { listeners: !1 });
          }, [d, t, m]);
        const O = y.some((e, t) => (0, v.EU)(d[t], e))
          ? y.flatMap((e, t) => {
              const s = d[t];
              if (s) {
                const t = new i.$(o, s);
                if ((0, v.EU)(s, e)) return (0, v.iL)(s, t, a);
                (0, v.nE)(e, u) && (0, v.iL)(s, t, a);
              }
              return [];
            })
          : [];
        if (O.length > 0) throw Promise.all(O);
        const C = y.find((e, t) => {
          const s = d[t];
          return (
            s &&
            (0, p.$1)({
              result: e,
              errorResetBoundary: a,
              throwOnError: s.throwOnError,
              query: o.getQueryCache().get(s.queryHash),
            })
          );
        });
        if (C?.error) throw C.error;
        return R(g());
      }
    },
  },
]);
