/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3164],
  {
    20803: (e) => {
      e.exports = {
        RoleIcon: "_1uvKF_UbD6VhnVdaRkXhbu",
        ProfileLink: "_2oSTSohQ1CZIgVn7E6_0Ft",
        MeBadge: "_2W_HQa5Rhf-hHITgV5H0bu",
        PlayerName: "AdQYbMq7HHJ3Jgljib9UX",
        RoleAndIcon: "_3VzCnvA_1SxskuCqmZkkHA",
        RoleName: "_3C9nRrwzQk9qHlJx6NaXDI",
        FamilyErrorDisplay: "egC2pffk2Ff-wvlnEHOqf",
        FamilyMemberRow: "_2LyGIHuQ8SFKb5T262YUvg",
        FamilyMemberRowTop: "mz0H0iSlLfX7SQ7hv3kVY",
        Left: "_3wWOEuQJ9QVG2xqb3s4xTw",
        InvitePending: "_1IeeH6Qo58UdaFJ3hkLMzs",
        ExpandRowButton: "_3Qa1urRRWR4tjkBSNaO8Wi",
        Selected: "r0ToHd0tmv46GM00Lr0a_",
      };
    },
    66372: (e) => {
      e.exports = {
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
    75048: (e, t, a) => {
      "use strict";
      a.d(t, {
        Pr: () => q,
        co: () => N,
        iM: () => h,
        iV: () => _,
        pC: () => P,
      });
      var n = a(90626),
        r = a(20803),
        s = a(12155),
        o = a(7068),
        c = a(61859),
        i = a(52038),
        u = a(1035),
        l = a(17720),
        m = a(14860),
        d = a(41471),
        f = a(92298),
        E = a(26505),
        p = a(34181),
        g = a(83137),
        y = a(32381);
      function I(e) {
        return n.createElement(s.d1w, null);
      }
      function R(e) {
        return n.createElement(s.Bir, null);
      }
      function h(e) {
        return n.createElement(
          "div",
          { className: (0, i.A)(r.RoleIcon, e.className) },
          2 == e.role ? n.createElement(R, null) : n.createElement(I, null),
        );
      }
      function _(e) {
        const { steamid: t } = e,
          a = (0, d.js)(t),
          s = (0, E.M8)(),
          o = (0, g.T)(),
          c = s.data?.get(new l.b(t).GetAccountID()),
          i = o.data?.preferences().parenthesize_nicknames();
        return n.createElement(
          n.Fragment,
          null,
          a.data?.m_strPlayerName || " ",
          " ",
          i &&
            c &&
            n.createElement(
              "span",
              { className: r.playerNickname },
              "(",
              c,
              ")",
            ),
        );
      }
      function w(e) {
        const { strSteamID: t, role: a, persona: s, isSelf: o } = e,
          i = new l.b(t);
        let m = e.size || "Large";
        const d = (0, E.M8)(),
          f = (0, g.T)(),
          y = d.data?.get(i.GetAccountID()),
          I = f.data?.preferences().parenthesize_nicknames();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "a",
            {
              className: r.ProfileLink,
              href: s.GetCommunityProfileURL(),
              onClick: (e) => {
                e.stopPropagation();
              },
            },
            n.createElement(u.i8, {
              className: r.Avatar,
              persona: s,
              size: m,
              statusPosition: "right",
            }),
            n.createElement(p.D, {
              className: r.PlayerName,
              bIsSelf: o,
              bHideStatus: !1,
              bHidePersona: !1,
              bParenthesizeNicknames: I,
              bCompactView: !1,
              persona: s,
              strNickname: y,
              eFriendRelationship: 3,
            }),
          ),
          n.createElement(
            "div",
            { className: r.RoleAndIcon },
            n.createElement(h, { className: r.ProfileRoleIcon, role: a }),
            n.createElement(
              "div",
              { className: r.RoleName },
              (0, c.we)(`#FamilyManagement_Role_${a}`),
            ),
          ),
        );
      }
      function P(e) {
        const t = (0, n.useContext)(m.IN);
        return t.errorMessage
          ? n.createElement(
              "div",
              { className: r.FamilyErrorDisplay },
              t.errorMessage,
            )
          : null;
      }
      function q(e) {
        const { strSteamID: t, role: a, bInvitePending: s, children: o } = e,
          u = (0, f.L)(),
          [l, E] = (0, n.useState)(!1),
          p = u == t,
          g = (0, d.js)(t);
        if (
          ((0, m.p8)(g, "#FamilyManagement_ErrorLoadFamilyGeneric"),
          !g.isSuccess)
        )
          return null;
        const I = g.data;
        return n.createElement(
          y.Z,
          {
            className: (0, i.A)(
              r.FamilyMemberRow,
              p && r.ActiveFamilyMemberRow,
            ),
          },
          n.createElement(
            y.Z,
            {
              className: r.FamilyMemberRowTop,
              onActivate: o ? () => E(!l) : void 0,
            },
            n.createElement(
              "div",
              { className: r.Left },
              n.createElement(w, {
                strSteamID: t,
                role: a,
                persona: I,
                isSelf: p,
              }),
              s &&
                n.createElement(
                  "div",
                  { className: r.InvitePending },
                  (0, c.we)("#FamilyManagement_InvitePending"),
                ),
              p &&
                n.createElement(
                  "span",
                  { className: r.MeBadge },
                  (0, c.we)("#FamilyManagement_Me"),
                ),
            ),
            o && n.createElement(N, { bExpanded: l, setExpanded: E }),
          ),
          l && o,
        );
      }
      function N(e) {
        const { bExpanded: t, setExpanded: a } = e;
        return n.createElement(
          o.wl,
          {
            className: (0, i.A)(r.ExpandRowButton, t && r.Selected),
            onClick: () => a(!t),
          },
          n.createElement(s.b8_, { direction: "down" }),
        );
      }
    },
    27144: (e, t, a) => {
      "use strict";
      a.d(t, { B3: () => h, KM: () => g, KT: () => R });
      var n = a(41735),
        r = a.n(n),
        s = a(58632),
        o = a.n(s),
        c = a(90626),
        i = a(31380),
        u = a(17720),
        l = a(68797),
        m = a(78327),
        d = a(56545),
        f = a(37735),
        E = a(78205);
      const p = "nicknames";
      function g(e) {
        const t = (0, E.KV)(),
          { data: a, isLoading: n } = (0, i.useQuery)([p], async () => {
            const e = new Map();
            if (m.iA.logged_in) {
              const a = d.w.Init(f.dN),
                n = (await f.xt.GetNicknameList(t, a)).Body().toObject();
              n?.nicknames &&
                n.nicknames.length > 0 &&
                n.nicknames.forEach((t) => {
                  e.set(t.accountid, t.nickname);
                });
            }
            return e;
          });
        return a ? a.get(e) : null;
      }
      const y = new (o())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, m.yK)()
                  ? m.TS.COMMUNITY_BASE_URL
                  : m.TS.STORE_BASE_URL;
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
                  throw `Load single avatar/persona failed ${(0, l.H)(n).strErrorMsg}`;
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
                  throw `Load single avatar/persona failed ${(0, l.H)(n).strErrorMsg}`;
                const s = new Map();
                return (
                  n.data.userinfos.forEach((e) =>
                    s.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => s.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        I = "avatarandpersonas";
      function R(e) {
        const { data: t, isLoading: a } = (0, i.useQuery)([I, e], () =>
          y.load(e),
        );
        return [t, a];
      }
      function h(e) {
        const t = (0, i.useQueryClient)(),
          { data: a, isLoading: n } = (0, i.useQuery)({
            queryKey: [I, e],
            queryFn: () => y.loadMany(e),
            onSuccess(e) {
              e.forEach((e) => {
                const a = [I, new u.b(e.steamid).GetAccountID()];
                t.setQueryData(a, e);
              });
            },
            enabled: e?.length > 0,
          }),
          r = (0, c.useMemo)(() => {
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
    83137: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => c });
      var n = a(56545),
        r = a(37735),
        s = a(31380),
        o = a(78205);
      function c() {
        const e = (0, o.KV)();
        return (0, s.useQuery)(["communitypreferences"], async () => {
          const t = n.w.Init(r.tz),
            a = await r.xt.GetCommunityPreferences(e, t);
          if (1 != a.GetEResult())
            throw new Error(
              `Error from GetCommunityPreferences: ${a.GetEResult()} ${a.GetErrorMessage()}`,
            );
          return a.Body();
        });
      }
    },
    13164: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, { PurchaseRequestSimpleInfoPage: () => D, default: () => w });
      var n = a(90626),
        r = a(91721),
        s = a.n(r),
        o = a(7068),
        c = a(14860),
        i = a(28386),
        u = a(61859),
        l = a(27144),
        m = a(17720),
        d = a(30470),
        f = a(66372);
      function E(e) {
        const { familyGroupID: t } = e,
          a = (0, c.Hs)(t),
          r = (0, c.BO)(t),
          s = r.data?.requests()?.length;
        if (!s) return null;
        const o = (0, u.Yp)("#PurchaseRequestBanner_PendingRequest", s);
        return n.createElement(
          "div",
          { className: f.PurchaseRequestBanner },
          (0, u.PP)(
            "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
            n.createElement(
              "a",
              {
                href:
                  d.TS.STORE_BASE_URL + "account/familymanagement?tab=requests",
              },
              o,
            ),
            n.createElement("span", null, a.data?.name()),
          ),
        );
      }
      var p = a(22797),
        g = a(75048),
        y = a(92298),
        I = a(31380),
        R = a(5789),
        h = a(41515),
        _ = a(58367);
      function w(e) {
        const { familyGroupID: t, requestID: a } = e,
          [r, s] = n.useState(),
          o = (0, c.Qn)(t, a),
          u = (0, i.useInitCartLocalization)(),
          l = (0, y.L)(),
          m = (0, I.useQueryClient)(),
          d = o.data;
        return (
          (0, n.useEffect)(() => {
            if (d) {
              const e = {
                  type: "request",
                  gid: d.gidshoppingcart,
                  requestID: d.request_id,
                },
                t = (0, h.Vh)();
              t?.requestcartgid === e.gid &&
                t.requestcart &&
                (0, R.LN)(m, e, (0, _.qS)(t.requestcart)),
                s(e);
            }
          }, [d, m]),
          o.isError
            ? n.createElement(P, { familyGroupID: t })
            : o.isLoading || !u || (d && !r)
              ? n.createElement(q, null)
              : d
                ? d.is_completed
                  ? n.createElement(v, { familyGroupID: t })
                  : d.requester_steamid === l
                    ? n.createElement(k, { familyGroupID: t })
                    : n.createElement(S, { request: d, cartID: r })
                : n.createElement(N, { familyGroupID: t })
        );
      }
      function P(e) {
        const { familyGroupID: t } = e;
        return n.createElement(D, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestErrorHeader",
        });
      }
      function q() {
        return n.createElement(
          "div",
          { className: s().PurchaseRequestInfoPage },
          n.createElement(p.t, { size: "medium", msDelayAppear: 300 }),
        );
      }
      function N(e) {
        const { familyGroupID: t } = e;
        return n.createElement(D, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
        });
      }
      function v(e) {
        const { familyGroupID: t } = e;
        return n.createElement(D, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
        });
      }
      function k(e) {
        const { familyGroupID: t } = e;
        return n.createElement(D, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestPendingHeader",
          infoLocToken: "#PurchaseRequest_RequestPendingInfo",
        });
      }
      function D(e) {
        const { familyGroupID: t, headerLocToken: a, infoLocToken: r } = e,
          [i, l] = n.useState(null);
        return n.createElement(
          "div",
          { className: s().PurchaseRequestInfoPage },
          n.createElement(
            c.IN.Provider,
            { value: { errorMessage: i, setErrorMessage: l } },
            n.createElement("div", { className: s().Header }, (0, u.we)(a)),
            n.createElement(g.pC, null),
            n.createElement(E, { familyGroupID: t }),
            !!r &&
              n.createElement("div", { className: s().Info }, (0, u.we)(r)),
            n.createElement(
              "div",
              { className: s().ButtonContainer },
              n.createElement(
                o.jn,
                {
                  className: s().PrimaryButton,
                  onClick: () => {
                    window.location.assign(d.TS.STORE_BASE_URL);
                  },
                },
                (0, u.we)("#PurchaseRequested_ReturnToStore"),
              ),
            ),
          ),
        );
      }
      function S(e) {
        const { request: t, cartID: a } = e,
          r = new m.b(t.requester_steamid).GetAccountID(),
          [s] = (0, l.KT)(r),
          [o, c] = n.useState({ accountid_giftee: r }),
          d = n.useRef(() => {}).current,
          f = (0, u.we)("#Cart_PurchaseRequestTitle", s?.persona_name);
        return n.createElement(i.BaseCartPage, {
          cartID: a,
          step: "gifts",
          onStepChange: d,
          title: f,
          cartWideGiftInfo: o,
          onCartWideGiftInfoChange: c,
        });
      }
    },
  },
]);
