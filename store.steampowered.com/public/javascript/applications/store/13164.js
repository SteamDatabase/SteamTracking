/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [13164],
  {
    20803: (e) => {
      e.exports = {
        narrowWidth: "500px",
        RoleIcon: "_1uvKF_UbD6VhnVdaRkXhbu",
        ProfileLink: "_2oSTSohQ1CZIgVn7E6_0Ft",
        MeBadge: "_2W_HQa5Rhf-hHITgV5H0bu",
        PlayerName: "AdQYbMq7HHJ3Jgljib9UX",
        RoleAndIcon: "_3VzCnvA_1SxskuCqmZkkHA",
        RoleName: "_3C9nRrwzQk9qHlJx6NaXDI",
        FamilyErrorDisplay: "egC2pffk2Ff-wvlnEHOqf",
        FamilyMemberStatus: "bMHOg1F_hCL_s5erx4pWC",
        FamilyMemberRow: "_2LyGIHuQ8SFKb5T262YUvg",
        InfoRow: "_3TgL3aJ2hUdLP2stFZ2wZv",
        InvitePending: "_1IeeH6Qo58UdaFJ3hkLMzs",
      };
    },
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
    75048: (e, n, a) => {
      "use strict";
      a.d(n, { ff: () => w, iM: () => j, iV: () => q, pC: () => P });
      var s = a(7850),
        t = a(90626),
        r = a(20803),
        i = a(12155),
        o = a(61859),
        c = a(35850),
        u = a(52038),
        l = a(1035),
        d = a(17720),
        m = a(30925),
        f = a(41471),
        h = a(68950),
        g = a(49451),
        p = a(34181),
        y = a(83137),
        I = (a(51272), a(30470), a(22837));
      function x(e) {
        return (0, s.jsx)(i.d1w, {});
      }
      function _(e) {
        return (0, s.jsx)(i.Bir, {});
      }
      function j(e) {
        return (0, s.jsx)("div", {
          className: (0, u.A)(r.RoleIcon, e.className),
          children: e.role == c.PQ.sf ? (0, s.jsx)(_, {}) : (0, s.jsx)(x, {}),
        });
      }
      function q(e) {
        const { steamid: n } = e,
          a = (0, f.js)(n),
          t = (0, g.M8)(),
          i = (0, y.T)(),
          o = t.data?.get(new d.b(n).GetAccountID()),
          c = i.data?.preferences().parenthesize_nicknames();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            a.data?.m_strPlayerName || " ",
            " ",
            c &&
              o &&
              (0, s.jsxs)("span", {
                className: r.playerNickname,
                children: ["(", o, ")"],
              }),
          ],
        });
      }
      function R(e) {
        const { role: n, persona: a, isSelf: t } = e;
        let i = e.size || "Large";
        const c = (0, g.M8)(),
          u = (0, y.T)(),
          d = c.data?.get(a.GetAccountID()),
          m = u.data?.preferences().parenthesize_nicknames();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: r.ProfileLink,
              children: [
                (0, s.jsx)(l.i8, {
                  className: r.Avatar,
                  persona: a,
                  size: i,
                  statusPosition: "right",
                }),
                (0, s.jsx)(p.D, {
                  className: r.PlayerName,
                  bIsSelf: t,
                  bHideStatus: !1,
                  bHidePersona: !1,
                  bParenthesizeNicknames: m,
                  bCompactView: !1,
                  persona: a,
                  strNickname: d,
                  eFriendRelationship: I._UC,
                  bEllipsisName: !0,
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: r.RoleAndIcon,
              children: [
                (0, s.jsx)(j, { className: r.ProfileRoleIcon, role: n }),
                (0, s.jsx)("div", {
                  className: r.RoleName,
                  children: (0, o.we)(`#FamilyManagement_Role_${n}`),
                }),
              ],
            }),
          ],
        });
      }
      function P(e) {
        const n = (0, t.useContext)(m.IN);
        return n.errorMessage
          ? (0, s.jsx)("div", {
              className: r.FamilyErrorDisplay,
              children: n.errorMessage,
            })
          : null;
      }
      function w(e) {
        const { persona: n, role: a, invitePending: t } = e,
          i = (0, h.LH)() == n.GetSteamIDAsString();
        return (0, s.jsxs)("div", {
          className: r.FamilyMemberStatus,
          children: [
            (0, s.jsx)(R, { role: a, persona: n, isSelf: i }),
            t &&
              (0, s.jsx)("div", {
                className: r.InvitePending,
                children: (0, o.we)("#FamilyManagement_InvitePending"),
              }),
            i &&
              (0, s.jsx)("span", {
                className: r.MeBadge,
                children: (0, o.we)("#FamilyManagement_Me"),
              }),
          ],
        });
      }
    },
    27144: (e, n, a) => {
      "use strict";
      a.d(n, { B3: () => q, KM: () => I, KT: () => j });
      var s = a(41735),
        t = a.n(s),
        r = a(58632),
        i = a.n(r),
        o = a(90626),
        c = a(80902),
        u = a(75233),
        l = a(37085),
        d = a(17720),
        m = a(68797),
        f = a(78327),
        h = a(56545),
        g = a(42457),
        p = a(23809);
      const y = "nicknames";
      function I(e) {
        const n = (0, p.KV)(),
          { data: a, isLoading: s } = (0, c.I)({
            queryKey: [y],
            queryFn: async () => {
              const e = new Map();
              if (f.iA.logged_in) {
                const a = h.w.Init(g.w_T),
                  s = (await g.xtC.GetNicknameList(n, a)).Body().toObject();
                s?.nicknames &&
                  s.nicknames.length > 0 &&
                  s.nicknames.forEach((n) => {
                    e.set(n.accountid, n.nickname);
                  });
              }
              return e;
            },
          });
        return a ? a.get(e) : null;
      }
      const x = new (i())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const n =
                "community" == (0, f.yK)()
                  ? f.TS.COMMUNITY_BASE_URL
                  : f.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const a = { accountid: e[0], origin: self.origin },
                  s = await t().get(`${n}actions/ajaxgetavatarpersona`, {
                    params: a,
                  });
                if (
                  !s ||
                  200 != s.status ||
                  s.data?.success != l.R ||
                  !s.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(s).strErrorMsg}`;
                return [s.data.userinfo];
              }
              {
                const a = { accountids: e.join(","), origin: self.origin },
                  s = await t().get(`${n}actions/ajaxgetmultiavatarpersona`, {
                    params: a,
                  });
                if (
                  !s ||
                  200 != s.status ||
                  s.data?.success != l.R ||
                  !s.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(s).strErrorMsg}`;
                const r = new Map();
                return (
                  s.data.userinfos.forEach((e) =>
                    r.set(new d.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => r.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        _ = "avatarandpersonas";
      function j(e) {
        const { data: n, isLoading: a } = (0, c.I)({
          queryKey: [_, e],
          queryFn: () => x.load(e),
        });
        return [n, a];
      }
      function q(e) {
        const n = (0, u.jE)(),
          { data: a, isLoading: s } = (0, c.I)({
            queryKey: [_, e],
            queryFn: async () => {
              const a = await x.loadMany(e);
              return (
                a.forEach((e) => {
                  const a = [_, new d.b(e.steamid).GetAccountID()];
                  n.setQueryData(a, e);
                }),
                a
              );
            },
            enabled: e?.length > 0,
          }),
          t = (0, o.useMemo)(() => {
            const e = new Array();
            return (
              a?.forEach((n) => {
                n instanceof Error || e.push(n);
              }),
              e
            );
          }, [a]);
        return s ? null : t;
      }
    },
    83137: (e, n, a) => {
      "use strict";
      a.d(n, { T: () => c });
      var s = a(37085),
        t = a(56545),
        r = a(42457),
        i = a(80902),
        o = a(23809);
      function c() {
        const e = (0, o.KV)();
        return (0, i.I)(
          (function (e) {
            return {
              queryKey: ["communitypreferences"],
              queryFn: async () => {
                const n = t.w.Init(r.tzK),
                  a = await r.xtC.GetCommunityPreferences(e, n);
                if (a.GetEResult() != s.R)
                  throw new Error(
                    `Error from GetCommunityPreferences: ${a.GetEResult()} ${a.GetErrorMessage()}`,
                  );
                return a.Body();
              },
              staleTime: 3e5,
            };
          })(e),
        );
      }
    },
    13164: (e, n, a) => {
      "use strict";
      a.r(n),
        a.d(n, { PurchaseRequestSimpleInfoPage: () => k, default: () => R });
      var s = a(7850),
        t = a(65244),
        r = a(93676),
        i = a(41515),
        o = a(90626),
        c = a(75233),
        u = a(68950),
        l = a(30925),
        d = a(75048),
        m = a(17720),
        f = a(27144),
        h = a(56283),
        g = a(22797),
        p = a(61859),
        y = a(30470),
        I = a(66372);
      function x(e) {
        const { familyGroupID: n } = e,
          a = (0, l.Hs)(n),
          t = (0, l.BO)(n),
          r = t.data?.requests()?.length;
        if (!r) return null;
        const i = (0, p.Yp)("#PurchaseRequestBanner_PendingRequest", r);
        return (0, s.jsx)("div", {
          className: I.PurchaseRequestBanner,
          children: (0, p.PP)(
            "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
            (0, s.jsx)("a", {
              href:
                y.TS.STORE_BASE_URL + "account/familymanagement?tab=requests",
              children: i,
            }),
            (0, s.jsx)("span", { children: a.data?.name() }),
          ),
        });
      }
      var _ = a(91721),
        j = a.n(_),
        q = a(88237);
      function R(e) {
        const { familyGroupID: n, requestID: a } = e,
          [d, m] = o.useState(),
          f = (0, l.Qn)(n, a),
          h = (0, q.useInitCartLocalization)(),
          g = (0, u.LH)(),
          p = (0, c.jE)(),
          y = f.data;
        return (
          (0, o.useEffect)(() => {
            if (y) {
              const e = {
                  type: "request",
                  gid: y.gidshoppingcart,
                  requestID: y.request_id,
                },
                n = (0, i.Vh)();
              n?.requestcartgid === e.gid &&
                n.requestcart &&
                (0, r.LN)(p, e, (0, t.qS)(n.requestcart)),
                m(e);
            }
          }, [y, p]),
          f.isError
            ? (0, s.jsx)(P, { familyGroupID: n })
            : f.isLoading || !h || (y && !d)
              ? (0, s.jsx)(w, {})
              : y
                ? y.is_completed
                  ? (0, s.jsx)(v, { familyGroupID: n })
                  : y.requester_steamid === g
                    ? (0, s.jsx)(D, { familyGroupID: n })
                    : (0, s.jsx)(G, { request: y, cartID: d })
                : (0, s.jsx)(N, { familyGroupID: n })
        );
      }
      function P(e) {
        const { familyGroupID: n } = e;
        return (0, s.jsx)(k, {
          familyGroupID: n,
          headerLocToken: "#PurchaseRequest_RequestErrorHeader",
        });
      }
      function w() {
        return (0, s.jsx)("div", {
          className: j().PurchaseRequestInfoPage,
          children: (0, s.jsx)(g.t, { size: "medium", msDelayAppear: 300 }),
        });
      }
      function N(e) {
        const { familyGroupID: n } = e;
        return (0, s.jsx)(k, {
          familyGroupID: n,
          headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
        });
      }
      function v(e) {
        const { familyGroupID: n } = e;
        return (0, s.jsx)(k, {
          familyGroupID: n,
          headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
        });
      }
      function D(e) {
        const { familyGroupID: n } = e;
        return (0, s.jsx)(k, {
          familyGroupID: n,
          headerLocToken: "#PurchaseRequest_RequestPendingHeader",
          infoLocToken: "#PurchaseRequest_RequestPendingInfo",
        });
      }
      function k(e) {
        const { familyGroupID: n, headerLocToken: a, infoLocToken: t } = e,
          [r, i] = o.useState(null);
        return (0, s.jsx)("div", {
          className: j().PurchaseRequestInfoPage,
          children: (0, s.jsxs)(l.IN.Provider, {
            value: { errorMessage: r, setErrorMessage: i },
            children: [
              (0, s.jsx)("div", {
                className: j().Header,
                children: (0, p.we)(a),
              }),
              (0, s.jsx)(d.pC, {}),
              (0, s.jsx)(x, { familyGroupID: n }),
              !!t &&
                (0, s.jsx)("div", {
                  className: j().Info,
                  children: (0, p.we)(t),
                }),
              (0, s.jsx)("div", {
                className: j().ButtonContainer,
                children: (0, s.jsx)(h.jn, {
                  className: j().PrimaryButton,
                  onClick: () => {
                    window.location.assign(y.TS.STORE_BASE_URL);
                  },
                  children: (0, p.we)("#PurchaseRequested_ReturnToStore"),
                }),
              }),
            ],
          }),
        });
      }
      function G(e) {
        const { request: n, cartID: a } = e,
          t = new m.b(n.requester_steamid).GetAccountID(),
          [r] = (0, f.KT)(t),
          [i, c] = o.useState({ accountid_giftee: t }),
          u = o.useRef(() => {}).current,
          l = (0, p.we)("#Cart_PurchaseRequestTitle", r?.persona_name);
        return (0, s.jsx)(q.BaseCartPage, {
          cartID: a,
          step: "gifts",
          onStepChange: u,
          title: l,
          cartWideGiftInfo: i,
          onCartWideGiftInfoChange: c,
        });
      }
    },
  },
]);
