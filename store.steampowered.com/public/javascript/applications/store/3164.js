/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3164],
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
    75048: (e, t, a) => {
      "use strict";
      a.d(t, {
        Pr: () => N,
        co: () => v,
        iM: () => q,
        iV: () => w,
        pC: () => k,
      });
      var n = a(90626),
        r = a(20803),
        s = a(12155),
        o = a(53835),
        c = a(61859),
        i = a(64868),
        u = a(52038),
        l = a(1035),
        m = a(17720),
        d = a(30925),
        f = a(14336),
        E = a(68950),
        p = a(26505),
        g = a(34181),
        y = a(22837),
        I = a(83137),
        R = a(76217);
      function h(e) {
        return n.createElement(s.d1w, null);
      }
      function _(e) {
        return n.createElement(s.Bir, null);
      }
      function q(e) {
        return n.createElement(
          "div",
          { className: (0, u.A)(r.RoleIcon, e.className) },
          e.role == i.PQ.k_EFamilyGroupRole_Child
            ? n.createElement(_, null)
            : n.createElement(h, null),
        );
      }
      function w(e) {
        const { steamid: t } = e,
          a = (0, f.js)(t),
          s = (0, p.M8)(),
          o = (0, I.T)(),
          c = s.data?.get(new m.b(t).GetAccountID()),
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
      function P(e) {
        const { strSteamID: t, role: a, persona: s, isSelf: o } = e,
          i = new m.b(t);
        let u = e.size || "Large";
        const d = (0, p.M8)(),
          f = (0, I.T)(),
          E = d.data?.get(i.GetAccountID()),
          R = f.data?.preferences().parenthesize_nicknames();
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
            n.createElement(l.i8, {
              className: r.Avatar,
              persona: s,
              size: u,
              statusPosition: "right",
            }),
            n.createElement(g.D, {
              className: r.PlayerName,
              bIsSelf: o,
              bHideStatus: !1,
              bHidePersona: !1,
              bParenthesizeNicknames: R,
              bCompactView: !1,
              persona: s,
              strNickname: E,
              eFriendRelationship: y.SX.k_EFriendRelationshipFriend,
            }),
          ),
          n.createElement(
            "div",
            { className: r.RoleAndIcon },
            n.createElement(q, { className: r.ProfileRoleIcon, role: a }),
            n.createElement(
              "div",
              { className: r.RoleName },
              (0, c.we)(`#FamilyManagement_Role_${a}`),
            ),
          ),
        );
      }
      function k(e) {
        const t = (0, n.useContext)(d.IN);
        return t.errorMessage
          ? n.createElement(
              "div",
              { className: r.FamilyErrorDisplay },
              t.errorMessage,
            )
          : null;
      }
      function N(e) {
        const { strSteamID: t, role: a, bInvitePending: s, children: o } = e,
          i = (0, E.LH)(),
          [l, m] = (0, n.useState)(!1),
          p = i == t,
          g = (0, f.js)(t);
        if (
          ((0, d.p8)(g, "#FamilyManagement_ErrorLoadFamilyGeneric"),
          !g.isSuccess)
        )
          return null;
        const y = g.data;
        return n.createElement(
          R.Z,
          {
            className: (0, u.A)(
              r.FamilyMemberRow,
              p && r.ActiveFamilyMemberRow,
            ),
          },
          n.createElement(
            R.Z,
            {
              className: r.FamilyMemberRowTop,
              onActivate: o ? () => m(!l) : void 0,
            },
            n.createElement(
              "div",
              { className: r.Left },
              n.createElement(P, {
                strSteamID: t,
                role: a,
                persona: y,
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
            o && n.createElement(v, { bExpanded: l, setExpanded: m }),
          ),
          l && o,
        );
      }
      function v(e) {
        const { bExpanded: t, setExpanded: a } = e;
        return n.createElement(
          o.wl,
          {
            className: (0, u.A)(r.ExpandRowButton, t && r.Selected),
            onClick: () => a(!t),
          },
          n.createElement(s.b8_, { direction: "down" }),
        );
      }
    },
    27144: (e, t, a) => {
      "use strict";
      a.d(t, { B3: () => q, KM: () => I, KT: () => _ });
      var n = a(41735),
        r = a.n(n),
        s = a(58632),
        o = a.n(s),
        c = a(90626),
        i = a(20194),
        u = a(75233),
        l = a(37085),
        m = a(17720),
        d = a(68797),
        f = a(78327),
        E = a(56545),
        p = a(37735),
        g = a(23809);
      const y = "nicknames";
      function I(e) {
        const t = (0, g.KV)(),
          { data: a, isLoading: n } = (0, i.I)({
            queryKey: [y],
            queryFn: async () => {
              const e = new Map();
              if (f.iA.logged_in) {
                const a = E.w.Init(p.dN),
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
      const R = new (o())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, f.yK)()
                  ? f.TS.COMMUNITY_BASE_URL
                  : f.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const a = { accountid: e[0], origin: self.origin },
                  n = await r().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: a,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  n.data?.success != l.d.k_EResultOK ||
                  !n.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(n).strErrorMsg}`;
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
                  n.data?.success != l.d.k_EResultOK ||
                  !n.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(n).strErrorMsg}`;
                const s = new Map();
                return (
                  n.data.userinfos.forEach((e) =>
                    s.set(new m.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => s.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        h = "avatarandpersonas";
      function _(e) {
        const { data: t, isLoading: a } = (0, i.I)({
          queryKey: [h, e],
          queryFn: () => R.load(e),
        });
        return [t, a];
      }
      function q(e) {
        const t = (0, u.jE)(),
          { data: a, isLoading: n } = (0, i.I)({
            queryKey: [h, e],
            queryFn: async () => {
              const a = await R.loadMany(e);
              return (
                a.forEach((e) => {
                  const a = [h, new m.b(e.steamid).GetAccountID()];
                  t.setQueryData(a, e);
                }),
                a
              );
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
      a.d(t, { T: () => i });
      var n = a(37085),
        r = a(56545),
        s = a(37735),
        o = a(20194),
        c = a(23809);
      function i() {
        const e = (0, c.KV)();
        return (0, o.I)({
          queryKey: ["communitypreferences"],
          queryFn: async () => {
            const t = r.w.Init(s.tz),
              a = await s.xt.GetCommunityPreferences(e, t);
            if (a.GetEResult() != n.d.k_EResultOK)
              throw new Error(
                `Error from GetCommunityPreferences: ${a.GetEResult()} ${a.GetErrorMessage()}`,
              );
            return a.Body();
          },
        });
      }
    },
    13164: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, { PurchaseRequestSimpleInfoPage: () => D, default: () => q });
      var n = a(12229),
        r = a(93676),
        s = a(43830),
        o = a(90626),
        c = a(75233),
        i = a(68950),
        u = a(30925),
        l = a(75048),
        m = a(17720),
        d = a(27144),
        f = a(53835),
        E = a(22797),
        p = a(61859),
        g = a(30470),
        y = a(66372);
      function I(e) {
        const { familyGroupID: t } = e,
          a = (0, u.Hs)(t),
          n = (0, u.BO)(t),
          r = n.data?.requests()?.length;
        if (!r) return null;
        const s = (0, p.Yp)("#PurchaseRequestBanner_PendingRequest", r);
        return o.createElement(
          "div",
          { className: y.PurchaseRequestBanner },
          (0, p.PP)(
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
      var R = a(91721),
        h = a.n(R),
        _ = a(42976);
      function q(e) {
        const { familyGroupID: t, requestID: a } = e,
          [l, m] = o.useState(),
          d = (0, u.Qn)(t, a),
          f = (0, _.useInitCartLocalization)(),
          E = (0, i.LH)(),
          p = (0, c.jE)(),
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
                (0, r.LN)(p, e, (0, n.qS)(t.requestcart)),
                m(e);
            }
          }, [g, p]),
          d.isError
            ? o.createElement(w, { familyGroupID: t })
            : d.isLoading || !f || (g && !l)
              ? o.createElement(P, null)
              : g
                ? g.is_completed
                  ? o.createElement(N, { familyGroupID: t })
                  : g.requester_steamid === E
                    ? o.createElement(v, { familyGroupID: t })
                    : o.createElement(S, { request: g, cartID: l })
                : o.createElement(k, { familyGroupID: t })
        );
      }
      function w(e) {
        const { familyGroupID: t } = e;
        return o.createElement(D, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestErrorHeader",
        });
      }
      function P() {
        return o.createElement(
          "div",
          { className: h().PurchaseRequestInfoPage },
          o.createElement(E.t, { size: "medium", msDelayAppear: 300 }),
        );
      }
      function k(e) {
        const { familyGroupID: t } = e;
        return o.createElement(D, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
        });
      }
      function N(e) {
        const { familyGroupID: t } = e;
        return o.createElement(D, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
        });
      }
      function v(e) {
        const { familyGroupID: t } = e;
        return o.createElement(D, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestPendingHeader",
          infoLocToken: "#PurchaseRequest_RequestPendingInfo",
        });
      }
      function D(e) {
        const { familyGroupID: t, headerLocToken: a, infoLocToken: n } = e,
          [r, s] = o.useState(null);
        return o.createElement(
          "div",
          { className: h().PurchaseRequestInfoPage },
          o.createElement(
            u.IN.Provider,
            { value: { errorMessage: r, setErrorMessage: s } },
            o.createElement("div", { className: h().Header }, (0, p.we)(a)),
            o.createElement(l.pC, null),
            o.createElement(I, { familyGroupID: t }),
            !!n &&
              o.createElement("div", { className: h().Info }, (0, p.we)(n)),
            o.createElement(
              "div",
              { className: h().ButtonContainer },
              o.createElement(
                f.jn,
                {
                  className: h().PrimaryButton,
                  onClick: () => {
                    window.location.assign(g.TS.STORE_BASE_URL);
                  },
                },
                (0, p.we)("#PurchaseRequested_ReturnToStore"),
              ),
            ),
          ),
        );
      }
      function S(e) {
        const { request: t, cartID: a } = e,
          n = new m.b(t.requester_steamid).GetAccountID(),
          [r] = (0, d.KT)(n),
          [s, c] = o.useState({ accountid_giftee: n }),
          i = o.useRef(() => {}).current,
          u = (0, p.we)("#Cart_PurchaseRequestTitle", r?.persona_name);
        return o.createElement(_.BaseCartPage, {
          cartID: a,
          step: "gifts",
          onStepChange: i,
          title: u,
          cartWideGiftInfo: s,
          onCartWideGiftInfoChange: c,
        });
      }
    },
  },
]);
