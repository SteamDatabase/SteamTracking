/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8987, 3164],
  {
    66372: (e) => {
      e.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_1xIt8XUBQEbK-xSRQhbtW0",
        PurchaseRequestBanner: "_-0ewDwG8C2PYKGJDqSP40",
      };
    },
    91721: (e) => {
      e.exports = {
        PurchaseRequestInfoPage: "_2vUK2Ij_I2rOkqw9wZ2Diy",
        Header: "kw7cBqn_8NJ4l9R4nkZXE",
        ButtonContainer: "_2TQ_WuHwPbieu3aZfxn2TN",
        PrimaryButton: "_2-7r0qbPMo9ML9sGFiKwq6",
      };
    },
    27144: (e, t, a) => {
      "use strict";
      a.d(t, { B3: () => P, KM: () => h, KT: () => y });
      var n = a(41735),
        r = a.n(n),
        s = a(58632),
        o = a.n(s),
        u = a(90626),
        c = a(20194),
        i = a(75233),
        l = a(17720),
        m = a(68797),
        d = a(78327),
        f = a(56545),
        p = a(37735),
        q = a(23809);
      const g = "nicknames";
      function h(e) {
        const t = (0, q.KV)(),
          { data: a, isLoading: n } = (0, c.I)({
            queryKey: [g],
            queryFn: async () => {
              const e = new Map();
              if (d.iA.logged_in) {
                const a = f.w.Init(p.dN),
                  n = (await p.xt.GetNicknameList(t, a)).Body().toObject();
                n?.nicknames &&
                  n.nicknames.length > 0 &&
                  n.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return a ? a.get(e) : null;
      }
      const E = new (o())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, d.yK)()
                  ? d.TS.COMMUNITY_BASE_URL
                  : d.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const a = { accountid: e[0], origin: self.origin },
                  n = await r().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: a,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  1 != n.data?.success ||
                  !n.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(n).strErrorMsg}`;
                return [n.data.userinfo];
              }
              {
                const a = { accountids: e.join(","), origin: self.origin },
                  n = await r().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: a,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  1 != n.data?.success ||
                  !n.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(n).strErrorMsg}`;
                const s = new Map();
                return (
                  n.data.userinfos.forEach((e) =>
                    s.set(new l.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => s.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        I = "avatarandpersonas";
      function y(e) {
        const { data: t, isLoading: a } = (0, c.I)({
          queryKey: [I, e],
          queryFn: () => E.load(e),
        });
        return [t, a];
      }
      function P(e) {
        const t = (0, i.jE)(),
          { data: a, isLoading: n } = (0, c.I)({
            queryKey: [I, e],
            queryFn: async () => {
              const a = await E.loadMany(e);
              return (
                a.forEach((e) => {
                  const a = [I, new l.b(e.steamid).GetAccountID()];
                  t.setQueryData(a, e);
                }),
                a
              );
            },
            enabled: e?.length > 0,
          }),
          r = (0, u.useMemo)(() => {
            const e = new Array();
            return (
              a?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [a]);
        return n ? null : r;
      }
    },
    35649: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => s });
      var n = a(90626),
        r = a(13164);
      function s(e) {
        const { familyGroupID: t } = e;
        return n.createElement(r.PurchaseRequestSimpleInfoPage, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequested_Header",
          infoLocToken: "#PurchaseRequested_Info",
        });
      }
    },
    13164: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, { PurchaseRequestSimpleInfoPage: () => k, default: () => R });
      var n = a(12229),
        r = a(93676),
        s = a(43830),
        o = a(90626),
        u = a(75233),
        c = a(68950),
        i = a(14860),
        l = a(75048),
        m = a(17720),
        d = a(27144),
        f = a(10981),
        p = a(22797),
        q = a(61859),
        g = a(30470),
        h = a(66372);
      function E(e) {
        const { familyGroupID: t } = e,
          a = (0, i.Hs)(t),
          n = (0, i.BO)(t),
          r = n.data?.requests()?.length;
        if (!r) return null;
        const s = (0, q.Yp)("#PurchaseRequestBanner_PendingRequest", r);
        return o.createElement(
          "div",
          { className: h.PurchaseRequestBanner },
          (0, q.PP)(
            "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
            o.createElement(
              "a",
              {
                href:
                  g.TS.STORE_BASE_URL + "account/familymanagement?tab=requests",
              },
              s,
            ),
            o.createElement("span", null, a.data?.name()),
          ),
        );
      }
      var I = a(91721),
        y = a.n(I),
        P = a(42976);
      function R(e) {
        const { familyGroupID: t, requestID: a } = e,
          [l, m] = o.useState(),
          d = (0, i.Qn)(t, a),
          f = (0, P.useInitCartLocalization)(),
          p = (0, c.LH)(),
          q = (0, u.jE)(),
          g = d.data;
        return (
          (0, o.useEffect)(() => {
            if (g) {
              const e = {
                  type: "request",
                  gid: g.gidshoppingcart,
                  requestID: g.request_id,
                },
                t = (0, s.Vh)();
              t?.requestcartgid === e.gid &&
                t.requestcart &&
                (0, r.LN)(q, e, (0, n.qS)(t.requestcart)),
                m(e);
            }
          }, [g, q]),
          d.isError
            ? o.createElement(_, { familyGroupID: t })
            : d.isLoading || !f || (g && !l)
              ? o.createElement(D, null)
              : g
                ? g.is_completed
                  ? o.createElement(G, { familyGroupID: t })
                  : g.requester_steamid === p
                    ? o.createElement(L, { familyGroupID: t })
                    : o.createElement(T, { request: g, cartID: l })
                : o.createElement(w, { familyGroupID: t })
        );
      }
      function _(e) {
        const { familyGroupID: t } = e;
        return o.createElement(k, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestErrorHeader",
        });
      }
      function D() {
        return o.createElement(
          "div",
          { className: y().PurchaseRequestInfoPage },
          o.createElement(p.t, { size: "medium", msDelayAppear: 300 }),
        );
      }
      function w(e) {
        const { familyGroupID: t } = e;
        return o.createElement(k, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
        });
      }
      function G(e) {
        const { familyGroupID: t } = e;
        return o.createElement(k, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
        });
      }
      function L(e) {
        const { familyGroupID: t } = e;
        return o.createElement(k, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestPendingHeader",
          infoLocToken: "#PurchaseRequest_RequestPendingInfo",
        });
      }
      function k(e) {
        const { familyGroupID: t, headerLocToken: a, infoLocToken: n } = e,
          [r, s] = o.useState(null);
        return o.createElement(
          "div",
          { className: y().PurchaseRequestInfoPage },
          o.createElement(
            i.IN.Provider,
            { value: { errorMessage: r, setErrorMessage: s } },
            o.createElement("div", { className: y().Header }, (0, q.we)(a)),
            o.createElement(l.pC, null),
            o.createElement(E, { familyGroupID: t }),
            !!n &&
              o.createElement("div", { className: y().Info }, (0, q.we)(n)),
            o.createElement(
              "div",
              { className: y().ButtonContainer },
              o.createElement(
                f.jn,
                {
                  className: y().PrimaryButton,
                  onClick: () => {
                    window.location.assign(g.TS.STORE_BASE_URL);
                  },
                },
                (0, q.we)("#PurchaseRequested_ReturnToStore"),
              ),
            ),
          ),
        );
      }
      function T(e) {
        const { request: t, cartID: a } = e,
          n = new m.b(t.requester_steamid).GetAccountID(),
          [r] = (0, d.KT)(n),
          [s, u] = o.useState({ accountid_giftee: n }),
          c = o.useRef(() => {}).current,
          i = (0, q.we)("#Cart_PurchaseRequestTitle", r?.persona_name);
        return o.createElement(P.BaseCartPage, {
          cartID: a,
          step: "gifts",
          onStepChange: c,
          title: i,
          cartWideGiftInfo: s,
          onCartWideGiftInfoChange: u,
        });
      }
    },
  },
]);
