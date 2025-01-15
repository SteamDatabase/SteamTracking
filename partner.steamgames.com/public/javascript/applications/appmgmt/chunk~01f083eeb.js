/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6060],
  {
    12916: (e) => {
      e.exports = {
        EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
        EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
        EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
        EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
        TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
        EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
        DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
        PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
        TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
        InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
        TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
        TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
        TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
        EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
        EndRound: "jwuNowbLB28M6nkqFkF_C",
        VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
        VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
        EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
        DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
      };
    },
    15736: (e) => {
      e.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
    },
    27144: (e, n, t) => {
      "use strict";
      t.d(n, { B3: () => D, KM: () => E, KT: () => v });
      var a = t(41735),
        i = t.n(a),
        r = t(58632),
        s = t.n(r),
        o = t(90626),
        l = t(20194),
        c = t(75233),
        u = t(17720),
        m = t(68797),
        d = t(78327),
        f = t(56545),
        g = t(37735),
        p = t(23809);
      const A = "nicknames";
      function E(e) {
        const n = (0, p.KV)(),
          { data: t, isLoading: a } = (0, l.I)({
            queryKey: [A],
            queryFn: async () => {
              const e = new Map();
              if (d.iA.logged_in) {
                const t = f.w.Init(g.dN),
                  a = (await g.xt.GetNicknameList(n, t)).Body().toObject();
                a?.nicknames &&
                  a.nicknames.length > 0 &&
                  a.nicknames.forEach((n) => {
                    e.set(n.accountid, n.nickname);
                  });
              }
              return e;
            },
          });
        return t ? t.get(e) : null;
      }
      const T = new (s())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const n =
                "community" == (0, d.yK)()
                  ? d.TS.COMMUNITY_BASE_URL
                  : d.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const t = { accountid: e[0], origin: self.origin },
                  a = await i().get(`${n}actions/ajaxgetavatarpersona`, {
                    params: t,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(a).strErrorMsg}`;
                return [a.data.userinfo];
              }
              {
                const t = { accountids: e.join(","), origin: self.origin },
                  a = await i().get(`${n}actions/ajaxgetmultiavatarpersona`, {
                    params: t,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(a).strErrorMsg}`;
                const r = new Map();
                return (
                  a.data.userinfos.forEach((e) =>
                    r.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => r.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        h = "avatarandpersonas";
      function v(e) {
        const { data: n, isLoading: t } = (0, l.I)({
          queryKey: [h, e],
          queryFn: () => T.load(e),
        });
        return [n, t];
      }
      function D(e) {
        const n = (0, c.jE)(),
          { data: t, isLoading: a } = (0, l.I)({
            queryKey: [h, e],
            queryFn: async () => {
              const t = await T.loadMany(e);
              return (
                t.forEach((e) => {
                  const t = [h, new u.b(e.steamid).GetAccountID()];
                  n.setQueryData(t, e);
                }),
                t
              );
            },
            enabled: e?.length > 0,
          }),
          i = (0, o.useMemo)(() => {
            const e = new Array();
            return (
              t?.forEach((n) => {
                n instanceof Error || e.push(n);
              }),
              e
            );
          }, [t]);
        return a ? null : i;
      }
    },
    99637: (e, n, t) => {
      "use strict";
      t.d(n, { K: () => h });
      var a = t(90626),
        i = t(92298),
        r = t.n(i),
        s = t(44894),
        o = t(44165),
        l = t(95695),
        c = t.n(l),
        u = t(52038),
        m = t(61859),
        d = t(32754),
        f = t(12916),
        g = t.n(f),
        p = t(87937),
        A = t.n(p);
      const E = "hh:mm a",
        T = "HH:mm";
      function h(e) {
        const {
          nLatestTime: n,
          nEarliestTime: t,
          fnGetTimeToUpdate: i,
          onError: l,
          strAlsoShowTimeZone: f,
          disabled: p,
          bNoDefaultDate: h,
          className: w,
          strDescToolTip: y,
          strDescription: x,
          bShowTimeZone: B,
          strInvalidDateTimeLocalizedMsg: S,
          fnIsValidDateTime: _,
          bWeekdaysOnly: N,
          fnSetTimeToUpdate: C,
        } = e;
        let b = (function () {
          const e = A()("2025-01-14T13:00:00");
          return e.format("LT").toLowerCase().includes("13");
        })()
          ? T
          : E;
        const k = i(),
          [L, G] = a.useState(k > 0 ? A()(1e3 * k) : null),
          [P, M] = a.useState(),
          [V, F] = a.useState(),
          O = (function (e, n, t, i, r) {
            const s = i && i(),
              o = n && !D(n).isValid(),
              l = e && !I(e).isValid();
            let c = null;
            (l || o || "string" == typeof s || !1 === s) &&
              ((c = (0, m.we)(
                t || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              l
                ? (c = (0, m.we)("#DateTimePicker_Time_CannotParse"))
                : o
                  ? (c = (0, m.we)("#DateTimePicker_Date_CannotParse"))
                  : "string" == typeof s && (c = s));
            return (
              a.useEffect(() => {
                r && r(c);
              }, [c, r]),
              c
            );
          })(P, V, S, _, l),
          W = !l && O;
        let R, U;
        if (n && t && n == t && t > o.HD.GetTimeNowWithOverride()) {
          const e = A().unix(t);
          (R = {
            hours: { max: e.hour(), min: e.hour(), step: 0 },
            minutes: { max: e.minute(), min: e.minute(), step: 0 },
            seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
            milliseconds: { max: 0, min: 0, step: 0 },
          }),
            (b = T);
        }
        k || !t || h || (U = A().unix(t));
        const Y = A().tz.guess(),
          Z = A().unix(k).tz(Y),
          j = !!f && Y != f && A().unix(k).tz(f),
          {
            fnOnInput: z,
            fnOnInputBlur: H,
            fnOnChange: K,
          } = v(
            D,
            (e) => {
              if (p) return;
              F(null);
              const n = i(),
                t = A().unix(n || o.HD.GetTimeNowWithOverride());
              (e = e.clone()).hour(t.hour()),
                e.minute(t.minute()),
                e.second(0),
                C(e.unix()),
                G(e);
            },
            F,
          ),
          {
            fnOnInput: q,
            fnOnInputBlur: J,
            fnOnChange: Q,
          } = v(
            I,
            (e) => {
              if (p) return;
              M(null);
              let n = i(),
                a = 0;
              if (n) {
                const t = A().unix(n);
                (e = e.clone()).year(t.year()),
                  e.month(t.month()),
                  e.date(t.date()),
                  (a = e.unix());
              } else {
                a =
                  A().unix(t).hour(0).second(0).minutes(0).unix() +
                  3600 * e.hour() +
                  60 * e.minutes();
              }
              C(a), G(A().unix(a));
            },
            M,
          );
        return a.createElement(
          "div",
          { className: (0, u.A)(g().EventTimeSection, w) },
          a.createElement(
            "div",
            { className: (0, u.A)(g().EventTimeTitle, "DialogLabel") },
            a.createElement(
              d.he,
              { toolTipContent: y, direction: "top" },
              Boolean(x) && a.createElement("span", null, x),
            ),
            W &&
              a.createElement(
                "span",
                { className: g().DateErrorCtn },
                a.createElement("img", { src: s.A }),
                W,
              ),
          ),
          a.createElement(
            "div",
            { className: c().FlexRowContainer },
            a.createElement(
              "div",
              { className: (0, u.A)(c().InputBorder, g().TimeBlock) },
              a.createElement(r(), {
                onChange: K,
                timeFormat: !1,
                value: null != V ? V : L,
                isValidDate: (e) =>
                  !p &&
                  (function (e, n, t, a) {
                    const i = A().unix(e).hour(0).seconds(0).minute(0);
                    let r = a.unix() >= i.unix();
                    if (r && n && n >= e) {
                      const e = A().unix(n).hour(23).minute(59).seconds(59);
                      r = a.unix() <= e.unix();
                    }
                    r &&
                      t &&
                      ((0 != a.weekday() && 6 != a.weekday()) || (r = !1));
                    return r;
                  })(t, n, N, e),
                initialValue: U,
                inputProps: {
                  placeholder: (0, m.we)("#DateTimePicker_Enter_Date"),
                  className: (0, u.A)(
                    g().DateWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: p,
                  onChange: (e) => z(e.currentTarget.value),
                  onBlur: (e) => H(e.currentTarget.value),
                },
              }),
              !!j &&
                a.createElement(
                  "div",
                  { className: g().PacificTimeHint },
                  j.format("L"),
                ),
            ),
            a.createElement(
              "div",
              { className: (0, u.A)(c().InputBorder, g().TimeBlock) },
              a.createElement(r(), {
                onChange: Q,
                dateFormat: !1,
                timeFormat: b,
                timeConstraints: R,
                value: null != P ? P : L,
                inputProps: {
                  placeholder: (0, m.we)("#DateTimePicker_Enter_Time"),
                  className: (0, u.A)(
                    g().TimeWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: p,
                  onChange: (e) => q(e.currentTarget.value),
                  onBlur: (e) => J(e.currentTarget.value),
                },
              }),
              !!j &&
                a.createElement(
                  "div",
                  { className: g().PacificTimeHint },
                  j.format("LT"),
                ),
            ),
            B &&
              a.createElement(
                "div",
                null,
                a.createElement(
                  "div",
                  { className: g().TimeZone },
                  Z.zoneAbbr(),
                ),
                !!j &&
                  a.createElement(
                    "div",
                    { className: g().TimeZone },
                    j.zoneAbbr(),
                  ),
              ),
          ),
          Boolean(R) &&
            a.createElement(
              "div",
              null,
              (0, m.we)("#DateTimePicker_DateTime_Fixed"),
            ),
        );
      }
      function v(e, n, t) {
        const [i, r] = a.useState(!1);
        return {
          fnOnInput: (e) => {
            t(e), r(!0);
          },
          fnOnInputBlur: (t) => {
            if (i) {
              const a = e(t);
              a.isValid() && n(a);
            }
            r(!1);
          },
          fnOnChange: (t) => {
            if (!i)
              if ("string" == typeof t) {
                const a = e(t);
                a.isValid() && n(a);
              } else n(t);
          },
        };
      }
      function D(e) {
        return A()(
          e,
          (function () {
            const e = A()("2025-01-14").format("L").split(/[-/.]/),
              n = e.indexOf("14");
            return e.indexOf("01") < n;
          })()
            ? "M/D/YYYY"
            : "D/M/YYYY",
          !1,
        );
      }
      function I(e) {
        return A()(e, [E, T], !1);
      }
    },
    8905: (e, n, t) => {
      "use strict";
      t.d(n, { p: () => o });
      var a = t(90626),
        i = t(17720),
        r = t(27144),
        s = t(15736);
      function o(e) {
        const { accountID: n, bHideWhenNotAvailable: t, bHideName: o } = e,
          [l] = (0, r.KT)(n),
          c = (0, r.KM)(n),
          u = a.useMemo(() => i.b.InitFromAccountID(n), [n]);
        return a.createElement(
          a.Fragment,
          null,
          Boolean(!l)
            ? a.createElement(
                a.Fragment,
                null,
                Boolean(!t) && a.createElement("span", null, n),
              )
            : a.createElement(
                a.Fragment,
                null,
                a.createElement("img", {
                  className: s.SmallAvatar,
                  src: l.avatar_url,
                  "data-miniprofile": "s" + u.ConvertTo64BitString(),
                }),
                Boolean(!o) &&
                  a.createElement(
                    "span",
                    null,
                    c ? `${c} (${l.persona_name})` : l.persona_name,
                  ),
              ),
        );
      }
    },
    44894: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
