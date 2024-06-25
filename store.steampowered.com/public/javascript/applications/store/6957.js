/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6957],
  {
    9496: (e) => {
      e.exports = {
        RoleIcon: "_2OqP3U4Xva0slDya7T_h9z",
        ProfileLink: "iKwt8JWlzzFgS6UsereGW",
        MeBadge: "qeLJ_1Yz0fl7HhQaPUSeZ",
        PlayerName: "_3YHL9yHTQbTTevVp9b8gOD",
        RoleAndIcon: "_1VP1WperM9AtlP6cNIYFHK",
        RoleName: "_3rvHmUp522O41nzDaN_nH8",
        FamilyErrorDisplay: "_3EgCvTO7-C5-UcwS6d9q_u",
        FamilyMemberRow: "_3QkkYqYUNkuL-1EOrIbEhB",
        FamilyMemberRowTop: "_3kaLZDbhALcwTVAvXAkUM3",
        Left: "_3KlqUdasBjes1Yug5vDtAA",
        InvitePending: "_2xtN_GSWHByJwYYB8notwd",
        ExpandRowButton: "_2a0YydnHd-iRihjZCXFH2t",
        Selected: "_2DsLII3ICyyAkenN6BZmnl",
      };
    },
    97418: (e) => {
      e.exports = {
        CartCard: "_1xIt8XUBQEbK-xSRQhbtW0",
        PurchaseRequestBanner: "_-0ewDwG8C2PYKGJDqSP40",
      };
    },
    83090: (e) => {
      e.exports = {
        PurchaseRequestInfoPage: "_2vUK2Ij_I2rOkqw9wZ2Diy",
        Header: "kw7cBqn_8NJ4l9R4nkZXE",
        ButtonContainer: "_2TQ_WuHwPbieu3aZfxn2TN",
        PrimaryButton: "_2-7r0qbPMo9ML9sGFiKwq6",
      };
    },
    10847: (e, t, a) => {
      "use strict";
      a.d(t, {
        In: () => D,
        L4: () => q,
        Mm: () => _,
        bk: () => N,
        pw: () => P,
      });
      var n = a(47427),
        r = a(9496),
        s = a(62613),
        o = a(1485),
        c = a(31846),
        i = a(13129),
        u = a(38605),
        l = a(35427),
        m = a(92686),
        d = a(51915),
        f = a(53923),
        E = a(88619),
        p = a(70548),
        g = a(18434),
        y = a(91618);
      function I(e) {
        return n.createElement(s.LpF, null);
      }
      function h(e) {
        return n.createElement(s.soM, null);
      }
      function _(e) {
        return n.createElement(
          "div",
          { className: (0, i.Z)(r.RoleIcon, e.className) },
          2 == e.role ? n.createElement(h, null) : n.createElement(I, null),
        );
      }
      function P(e) {
        const { steamid: t } = e,
          a = (0, d.IE)(t),
          s = (0, E.N5)(),
          o = (0, g.h)(),
          c = s.data?.get(new l.K(t).GetAccountID()),
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
      function R(e) {
        const { strSteamID: t, role: a, persona: s, isSelf: o } = e,
          i = new l.K(t);
        let m = e.size || "Large";
        const d = (0, E.N5)(),
          f = (0, g.h)(),
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
            n.createElement(u.vV, {
              className: r.Avatar,
              persona: s,
              size: m,
              statusPosition: "right",
            }),
            n.createElement(p.o, {
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
            n.createElement(_, { className: r.ProfileRoleIcon, role: a }),
            n.createElement(
              "div",
              { className: r.RoleName },
              (0, c.Xx)(`#FamilyManagement_Role_${a}`),
            ),
          ),
        );
      }
      function q(e) {
        const t = (0, n.useContext)(m.Xe);
        return t.errorMessage
          ? n.createElement(
              "div",
              { className: r.FamilyErrorDisplay },
              t.errorMessage,
            )
          : null;
      }
      function D(e) {
        const { strSteamID: t, role: a, bInvitePending: s, children: o } = e,
          u = (0, f.M)(),
          [l, E] = (0, n.useState)(!1),
          p = u == t,
          g = (0, d.IE)(t);
        if (
          ((0, m.sT)(g, "#FamilyManagement_ErrorLoadFamilyGeneric"),
          !g.isSuccess)
        )
          return null;
        const I = g.data;
        return n.createElement(
          y.s,
          {
            className: (0, i.Z)(
              r.FamilyMemberRow,
              p && r.ActiveFamilyMemberRow,
            ),
          },
          n.createElement(
            y.s,
            {
              className: r.FamilyMemberRowTop,
              onActivate: o ? () => E(!l) : void 0,
            },
            n.createElement(
              "div",
              { className: r.Left },
              n.createElement(R, {
                strSteamID: t,
                role: a,
                persona: I,
                isSelf: p,
              }),
              s &&
                n.createElement(
                  "div",
                  { className: r.InvitePending },
                  (0, c.Xx)("#FamilyManagement_InvitePending"),
                ),
              p &&
                n.createElement(
                  "span",
                  { className: r.MeBadge },
                  (0, c.Xx)("#FamilyManagement_Me"),
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
          o.Yz,
          {
            className: (0, i.Z)(r.ExpandRowButton, t && r.Selected),
            onClick: () => a(!t),
          },
          n.createElement(s.vVQ, { direction: "down" }),
        );
      }
    },
    85948: (e, t, a) => {
      "use strict";
      a.d(t, { Fz: () => h, TQ: () => g, tE: () => _ });
      var n = a(80751),
        r = a.n(n),
        s = a(73799),
        o = a.n(s),
        c = a(47427),
        i = a(42718),
        u = a(35427),
        l = a(16649),
        m = a(37563),
        d = a(79545),
        f = a(82182),
        E = a(40057);
      const p = "nicknames";
      function g(e) {
        const t = (0, E.bY)(),
          { data: a, isLoading: n } = (0, i.useQuery)([p], async () => {
            const e = new Map();
            if (m.L7.logged_in) {
              const a = d.gA.Init(f.bM),
                n = (await f.lk.GetNicknameList(t, a)).Body().toObject();
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
                "community" == (0, m.Zv)()
                  ? m.De.COMMUNITY_BASE_URL
                  : m.De.STORE_BASE_URL;
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
                  throw `Load single avatar/persona failed ${(0, l.l)(n).strErrorMsg}`;
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
                  throw `Load single avatar/persona failed ${(0, l.l)(n).strErrorMsg}`;
                const s = new Map();
                return (
                  n.data.userinfos.forEach((e) =>
                    s.set(new u.K(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => s.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        I = "avatarandpersonas";
      function h(e) {
        const { data: t, isLoading: a } = (0, i.useQuery)([I, e], () =>
          y.load(e),
        );
        return [t, a];
      }
      function _(e) {
        const t = (0, i.useQueryClient)(),
          { data: a, isLoading: n } = (0, i.useQuery)({
            queryKey: [I, e],
            queryFn: () => y.loadMany(e),
            onSuccess(e) {
              e.forEach((e) => {
                const a = [I, new u.K(e.steamid).GetAccountID()];
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
    18434: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => c });
      var n = a(79545),
        r = a(82182),
        s = a(42718),
        o = a(40057);
      function c() {
        const e = (0, o.bY)();
        return (0, s.useQuery)(["communitypreferences"], async () => {
          const t = n.gA.Init(r.AP),
            a = await r.lk.GetCommunityPreferences(e, t);
          if (1 != a.GetEResult())
            throw new Error(
              `Error from GetCommunityPreferences: ${a.GetEResult()} ${a.GetErrorMessage()}`,
            );
          return a.Body();
        });
      }
    },
    76957: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, { PurchaseRequestSimpleInfoPage: () => k, default: () => R });
      var n = a(47427),
        r = a(83090),
        s = a.n(r),
        o = a(1485),
        c = a(92686),
        i = a(46193),
        u = a(31846),
        l = a(85948),
        m = a(35427),
        d = a(65255),
        f = a(97418);
      function E(e) {
        const { familyGroupID: t } = e,
          a = (0, c.JM)(t),
          r = (0, c.P2)(t),
          s = r.data?.requests()?.length;
        if (!s) return null;
        const o = (0, u.kb)("#PurchaseRequestBanner_PendingRequest", s);
        return n.createElement(
          "div",
          { className: f.PurchaseRequestBanner },
          (0, u.kQ)(
            "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
            n.createElement(
              "a",
              {
                href:
                  d.De.STORE_BASE_URL + "account/familymanagement?tab=requests",
              },
              o,
            ),
            n.createElement("span", null, a.data?.name()),
          ),
        );
      }
      var p = a(46882),
        g = a(10847),
        y = a(53923),
        I = a(42718),
        h = a(44731),
        _ = a(45137),
        P = a(92790);
      function R(e) {
        const { familyGroupID: t, requestID: a } = e,
          [r, s] = n.useState(),
          o = (0, c.jo)(t, a),
          u = (0, i.useInitCartLocalization)(),
          l = (0, y.M)(),
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
                t = (0, _.WR)();
              t?.requestcartgid === e.gid &&
                t.requestcart &&
                (0, h.IS)(m, e, (0, P.S6)(t.requestcart)),
                s(e);
            }
          }, [d, m]),
          o.isError
            ? n.createElement(q, { familyGroupID: t })
            : o.isLoading || !u || (d && !r)
              ? n.createElement(D, null)
              : d
                ? d.is_completed
                  ? n.createElement(v, { familyGroupID: t })
                  : d.requester_steamid === l
                    ? n.createElement(w, { familyGroupID: t })
                    : n.createElement(L, { request: d, cartID: r })
                : n.createElement(N, { familyGroupID: t })
        );
      }
      function q(e) {
        const { familyGroupID: t } = e;
        return n.createElement(k, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestErrorHeader",
        });
      }
      function D() {
        return n.createElement(
          "div",
          { className: s().PurchaseRequestInfoPage },
          n.createElement(p.V, { size: "medium", msDelayAppear: 300 }),
        );
      }
      function N(e) {
        const { familyGroupID: t } = e;
        return n.createElement(k, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
        });
      }
      function v(e) {
        const { familyGroupID: t } = e;
        return n.createElement(k, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
        });
      }
      function w(e) {
        const { familyGroupID: t } = e;
        return n.createElement(k, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestPendingHeader",
          infoLocToken: "#PurchaseRequest_RequestPendingInfo",
        });
      }
      function k(e) {
        const { familyGroupID: t, headerLocToken: a, infoLocToken: r } = e,
          [i, l] = n.useState(null);
        return n.createElement(
          "div",
          { className: s().PurchaseRequestInfoPage },
          n.createElement(
            c.Xe.Provider,
            { value: { errorMessage: i, setErrorMessage: l } },
            n.createElement("div", { className: s().Header }, (0, u.Xx)(a)),
            n.createElement(g.L4, null),
            n.createElement(E, { familyGroupID: t }),
            !!r &&
              n.createElement("div", { className: s().Info }, (0, u.Xx)(r)),
            n.createElement(
              "div",
              { className: s().ButtonContainer },
              n.createElement(
                o.KM,
                {
                  className: s().PrimaryButton,
                  onClick: () => {
                    window.location.assign(d.De.STORE_BASE_URL);
                  },
                },
                (0, u.Xx)("#PurchaseRequested_ReturnToStore"),
              ),
            ),
          ),
        );
      }
      function L(e) {
        const { request: t, cartID: a } = e,
          r = new m.K(t.requester_steamid).GetAccountID(),
          [s] = (0, l.Fz)(r),
          [o, c] = n.useState({ accountid_giftee: r }),
          d = n.useRef(() => {}).current,
          f = (0, u.Xx)("#Cart_PurchaseRequestTitle", s?.persona_name);
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
