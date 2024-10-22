/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6762],
  {
    85761: (e) => {
      e.exports = { Ctn: "_8n9wPNrWDu91tlwBW9bHt" };
    },
    14766: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => g });
      var r = n(90626),
        s = n(85761),
        i = n.n(s),
        a = n(61859),
        o = n(71541),
        l = n(14336),
        u = n(22797),
        c = n(12155),
        d = n(41735),
        m = n.n(d),
        h = n(78327),
        p = n(56330),
        f = n(79645);
      function g(e) {
        const t = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("bRegistrationOpen", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, h.Tc)("rgUserReg", "application_config") || {},
            );
            return e;
          })(),
          { data: s } = (0, l.js)(h.iA.accountid),
          [c, d] = (0, r.useState)(!1),
          f = _(),
          g = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("nPrimaryPartnerID", "application_config"),
            );
            return e;
          })(),
          [v, y] = (0, r.useState)(() =>
            n.email_override ? n : { ...n, email_override: f, partner_id: g },
          );
        return t
          ? !s || s.m_bPlayerNamePending
            ? r.createElement(u.t, {
                size: "medium",
                position: "center",
                string: (0, a.we)("#Loading"),
              })
            : r.createElement(
                "div",
                { className: i().Ctn },
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "h2",
                    null,
                    (0, a.we)("#MeetSteam_Intro", s.m_strPlayerName),
                  ),
                  r.createElement("h2", null, (0, a.we)("#MeetSteam_Intro2")),
                ),
                r.createElement("div", null, (0, a.we)("#MeetSteam_Desc1")),
                r.createElement(b, { oRegistration: v, fnSetRegistration: y }),
                r.createElement(E, { oRegistration: v, fnSetRegistration: y }),
                r.createElement(
                  o.jn,
                  {
                    onClick: async () => {
                      const e = `${h.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                        t = new FormData();
                      t.append("sessionid", h.TS.SESSIONID),
                        t.append("registrationJson", JSON.stringify(v));
                      const n = await m().post(e, t, { withCredentials: !0 });
                      1 != n.data.success &&
                        (console.error(
                          "MeetSteamLanding failed " + n.data.success,
                        ),
                        d(!0));
                    },
                  },
                  (0, a.we)("#Button_Submit"),
                ),
                c &&
                  r.createElement(
                    "div",
                    { className: p.ErrorStylesWithIcon },
                    (0, a.we)("#Error_ErrorCommunicatingWithNetwork"),
                  ),
              )
          : r.createElement(
              "div",
              { className: i().Ctn },
              (0, a.we)("#MeetSteam_closed"),
            );
      }
      function E(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          s = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("rgEvents", "application_config"),
            );
            return e;
          })();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("h3", null, (0, a.we)("#MeetSteam_Events_title")),
          r.createElement(
            "div",
            null,
            (0, a.PP)("#MeetSteam_Events_desc", r.createElement(c.FEq, null)),
          ),
          r.createElement(
            "table",
            null,
            r.createElement("thead", null),
            r.createElement(
              "tbody",
              null,
              s.map((e) =>
                r.createElement(
                  "tr",
                  { key: e.id },
                  r.createElement(
                    "td",
                    null,
                    e.attending ? r.createElement(c.FEq, null) : "",
                  ),
                  r.createElement(
                    "td",
                    null,
                    r.createElement("div", null, e.name),
                    r.createElement("div", null, e.place),
                  ),
                  r.createElement(
                    "td",
                    null,
                    r.createElement("div", null, e.time),
                  ),
                  r.createElement(
                    "td",
                    null,
                    r.createElement(o.Yh, {
                      checked: t.attending?.includes(e.id),
                      onChange: (r) => {
                        let s = t.attending ? [...t.attending] : [];
                        r && !s.includes(e.id)
                          ? (s.push(e.id), n({ ...t, attending: s }))
                          : !r &&
                            s.includes(e.id) &&
                            (s.splice(s.indexOf(e.id), 1),
                            n({ ...t, attending: s }));
                      },
                      tooltip: (0, a.we)("#MeetSteam_attend_ttip"),
                    }),
                  ),
                ),
              ),
            ),
          ),
          r.createElement(o.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, a.we)("#MeetSteam_others"),
          }),
        );
      }
      function b(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          s = (0, l.js)(h.iA.accountid),
          i = _(),
          [c, d] = (0, r.useState)(() => Boolean(t.email_override != i));
        return s.data
          ? r.createElement(
              "div",
              null,
              r.createElement("h3", null, (0, a.we)("#MeetSteam_You")),
              r.createElement(
                "div",
                null,
                r.createElement(o.pd, {
                  type: "string",
                  label: (0, a.we)("#MeetSteam_You_Email"),
                  disabled: !c,
                  value: t.email_override || i || "",
                  mustBeEmail: !0,
                  onChange: (e) =>
                    n({ ...t, email_override: e.currentTarget.value }),
                }),
                !c &&
                  r.createElement(o.Yh, {
                    checked: c,
                    onChange: d,
                    label: (0, a.we)("#MeetSteam_You_Update"),
                    tooltip: (0, a.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              r.createElement(v, {
                nPartnerID: t.partner_id,
                label: (0, a.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
            )
          : r.createElement(u.t, {
              size: "medium",
              position: "center",
              string: (0, a.we)("#Loading"),
            });
      }
      function v(e) {
        const { nPartnerID: t, setPartnerID: n, label: s } = e,
          i = (0, f.c)(h.iA.accountid);
        if (!i)
          return r.createElement(u.t, {
            size: "small",
            position: "center",
            string: (0, a.we)("#Loading"),
          });
        const l = [];
        return (
          i.forEach((e) =>
            l.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          r.createElement(o.m, {
            layout: "inline",
            label: s,
            rgOptions: l,
            selectedOption: t,
            onChange: (e) => {
              n(e.data);
            },
          })
        );
      }
      function _() {
        const [e] = (0, r.useState)(
          () => (0, h.Tc)("strPartnerUserEmail", "application_config") || "",
        );
        return e;
      }
    },
    79645: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => c, c: () => u });
      var r = n(41735),
        s = n.n(r),
        i = n(20194),
        a = n(68797),
        o = n(30470),
        l = n(78327);
      function u(e) {
        const { data: t, isLoading: n } = (0, i.I)({
          queryKey: ["PartnerInfoList", e],
          queryFn: () =>
            (async function (e) {
              const t = { accountid: e, origin: self.origin };
              let n = `${o.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
              "partnerweb" == (0, l.yK)() &&
                (n = `${o.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
              const r = await s().get(n, { params: t, withCredentials: !0 });
              if (
                !r ||
                200 != r.status ||
                1 != r.data?.success ||
                !r.data?.partners
              )
                throw `Load single user partner info failed ${((0, a.H))(r).strErrorMsg}`;
              return r.data.partners;
            })(e),
        });
        return n ? null : t;
      }
      function c(e, t) {
        const n = u(e);
        return n?.find((e) => e.partnerid === t);
      }
    },
    54806: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => f });
      var r = n(90626),
        s = n(86709),
        i = n(45747),
        a = n(74500),
        o = n(57168);
      function l(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var u = class extends a.Q {
          #e;
          #t;
          #n;
          #r;
          #s;
          #i;
          #a;
          constructor(e, t, n) {
            super(),
              (this.#e = e),
              (this.#n = []),
              (this.#r = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#r.forEach((e) => {
                e.subscribe((t) => {
                  this.#o(e, t);
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
          setQueries(e, t, n) {
            (this.#n = e),
              s.j.batch(() => {
                const e = this.#r,
                  t = this.#l(this.#n);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, n),
                );
                const r = t.map((e) => e.observer),
                  s = r.map((e) => e.getCurrentResult()),
                  i = r.some((t, n) => t !== e[n]);
                (e.length !== r.length || i) &&
                  ((this.#r = r),
                  (this.#t = s),
                  this.hasListeners() &&
                    (l(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    l(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#o(e, t);
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
            const n = this.#l(e),
              r = n.map((e) =>
                e.observer.getOptimisticResult(e.defaultedQueryOptions),
              );
            return [
              r,
              (e) => this.#c(e ?? r, t),
              () =>
                n.map((e, t) => {
                  const s = r[t];
                  return e.defaultedQueryOptions.notifyOnChangeProps
                    ? s
                    : e.observer.trackResult(s, (e) => {
                        n.forEach((t) => {
                          t.observer.trackProp(e);
                        });
                      });
                }),
            ];
          }
          #c(e, t) {
            return t
              ? ((this.#s && this.#t === this.#a && t === this.#i) ||
                  ((this.#i = t),
                  (this.#a = this.#t),
                  (this.#s = (0, o.BH)(this.#s, t(e)))),
                this.#s)
              : e;
          }
          #l(e) {
            const t = this.#r,
              n = new Map(t.map((e) => [e.options.queryHash, e])),
              r = e.map((e) => this.#e.defaultQueryOptions(e)),
              s = r.flatMap((e) => {
                const t = n.get(e.queryHash);
                return null != t
                  ? [{ defaultedQueryOptions: e, observer: t }]
                  : [];
              }),
              a = new Set(s.map((e) => e.defaultedQueryOptions.queryHash)),
              o = r.filter((e) => !a.has(e.queryHash)),
              l = (e) => {
                const t = this.#e.defaultQueryOptions(e);
                return (
                  this.#r.find((e) => e.options.queryHash === t.queryHash) ??
                  new i.$(this.#e, t)
                );
              },
              u = o.map((e) => ({ defaultedQueryOptions: e, observer: l(e) }));
            return s
              .concat(u)
              .sort(
                (e, t) =>
                  r.indexOf(e.defaultedQueryOptions) -
                  r.indexOf(t.defaultedQueryOptions),
              );
          }
          #o(e, t) {
            const n = this.#r.indexOf(e);
            -1 !== n &&
              ((this.#t = (function (e, t, n) {
                const r = e.slice(0);
                return (r[t] = n), r;
              })(this.#t, n, t)),
              this.#u());
          }
          #u() {
            s.j.batch(() => {
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        c = n(75233),
        d = n(22730),
        m = n(43424),
        h = n(19086),
        p = n(44407);
      function f({ queries: e, ...t }, n) {
        const a = (0, c.jE)(n),
          o = (0, d.w)(),
          l = (0, m.h)(),
          f = r.useMemo(
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
          (0, p.tu)(e), (0, h.LJ)(e, l);
        }),
          (0, h.wZ)(l);
        const [g] = r.useState(() => new u(a, f, t)),
          [E, b, v] = g.getOptimisticResult(f, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (o ? () => {} : g.subscribe(s.j.batchCalls(e))),
            [g, o],
          ),
          () => g.getCurrentResult(),
          () => g.getCurrentResult(),
        ),
          r.useEffect(() => {
            g.setQueries(f, t, { listeners: !1 });
          }, [f, t, g]);
        const _ = E.some((e, t) => (0, p.EU)(f[t], e))
          ? E.flatMap((e, t) => {
              const n = f[t];
              if (n) {
                const t = new i.$(a, n);
                if ((0, p.EU)(n, e)) return (0, p.iL)(n, t, l);
                (0, p.nE)(e, o) && (0, p.iL)(n, t, l);
              }
              return [];
            })
          : [];
        if (_.length > 0) throw Promise.all(_);
        const y = E.find((e, t) => {
          const n = f[t];
          return (
            n &&
            (0, h.$1)({
              result: e,
              errorResetBoundary: l,
              throwOnError: n.throwOnError,
              query: a.getQueryCache().get(n.queryHash),
            })
          );
        });
        if (y?.error) throw y.error;
        return b(v());
      }
    },
  },
]);
