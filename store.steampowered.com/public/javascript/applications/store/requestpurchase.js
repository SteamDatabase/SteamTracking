/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7280, 6957],
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
    10847: (e, t, n) => {
      "use strict";
      n.d(t, { In: () => R, L4: () => _, Mm: () => I, bk: () => q });
      var a = n(47427),
        r = n(9496),
        s = n(62613),
        o = n(1485),
        i = n(31846),
        c = n(13129),
        l = n(38605),
        u = n(35427),
        m = n(92686),
        d = n(51915),
        f = n(53923),
        E = n(88619),
        p = n(70548),
        v = n(18434),
        g = n(91618);
      function y(e) {
        return a.createElement(s.LpF, null);
      }
      function h(e) {
        return a.createElement(s.soM, null);
      }
      function I(e) {
        return a.createElement(
          "div",
          { className: (0, c.Z)(r.RoleIcon, e.className) },
          2 == e.role ? a.createElement(h, null) : a.createElement(y, null),
        );
      }
      function P(e) {
        var t, n;
        const { strSteamID: s, role: o, persona: c, isSelf: m } = e,
          d = new u.K(s);
        let f = e.size || "Large";
        const g = (0, E.N5)(),
          y = (0, v.h)(),
          h =
            null === (t = g.data) || void 0 === t
              ? void 0
              : t.get(d.GetAccountID()),
          P =
            null === (n = y.data) || void 0 === n
              ? void 0
              : n.preferences().parenthesize_nicknames();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "a",
            {
              className: r.ProfileLink,
              href: c.GetCommunityProfileURL(),
              onClick: (e) => {
                e.stopPropagation();
              },
            },
            a.createElement(l.vV, {
              className: r.Avatar,
              persona: c,
              size: f,
              statusPosition: "right",
            }),
            a.createElement(p.o, {
              className: r.PlayerName,
              bIsSelf: m,
              bHideStatus: !1,
              bHidePersona: !1,
              bParenthesizeNicknames: P,
              bCompactView: !1,
              persona: c,
              strNickname: h,
              eFriendRelationship: 3,
            }),
          ),
          a.createElement(
            "div",
            { className: r.RoleAndIcon },
            a.createElement(I, { className: r.ProfileRoleIcon, role: o }),
            a.createElement(
              "div",
              { className: r.RoleName },
              (0, i.Xx)(`#FamilyManagement_Role_${o}`),
            ),
          ),
        );
      }
      function _(e) {
        const t = (0, a.useContext)(m.Xe);
        return t.errorMessage
          ? a.createElement(
              "div",
              { className: r.FamilyErrorDisplay },
              t.errorMessage,
            )
          : null;
      }
      function R(e) {
        const { strSteamID: t, role: n, bInvitePending: s, children: o } = e,
          l = (0, f.M)(),
          [u, E] = (0, a.useState)(!1),
          p = l == t,
          v = (0, d.IE)(t);
        if (
          ((0, m.sT)(v, "#FamilyManagement_ErrorLoadFamilyGeneric"),
          !v.isSuccess)
        )
          return null;
        const y = v.data;
        return a.createElement(
          g.s,
          {
            className: (0, c.Z)(
              r.FamilyMemberRow,
              p && r.ActiveFamilyMemberRow,
            ),
          },
          a.createElement(
            g.s,
            {
              className: r.FamilyMemberRowTop,
              onActivate: o ? () => E(!u) : void 0,
            },
            a.createElement(
              "div",
              { className: r.Left },
              a.createElement(P, {
                strSteamID: t,
                role: n,
                persona: y,
                isSelf: p,
              }),
              s &&
                a.createElement(
                  "div",
                  { className: r.InvitePending },
                  (0, i.Xx)("#FamilyManagement_InvitePending"),
                ),
              p &&
                a.createElement(
                  "span",
                  { className: r.MeBadge },
                  (0, i.Xx)("#FamilyManagement_Me"),
                ),
            ),
            o && a.createElement(q, { bExpanded: u, setExpanded: E }),
          ),
          u && o,
        );
      }
      function q(e) {
        const { bExpanded: t, setExpanded: n } = e;
        return a.createElement(
          o.Yz,
          {
            className: (0, c.Z)(r.ExpandRowButton, t && r.Selected),
            onClick: () => n(!t),
          },
          a.createElement(s.vVQ, { direction: "down" }),
        );
      }
    },
    85948: (e, t, n) => {
      "use strict";
      n.d(t, { Fz: () => I, TQ: () => g, tE: () => P });
      var a = n(85556),
        r = n(80751),
        s = n.n(r),
        o = n(73799),
        i = n.n(o),
        c = n(47427),
        l = n(42718),
        u = n(35427),
        m = n(16649),
        d = n(37563),
        f = n(79545),
        E = n(82182),
        p = n(40057);
      const v = "nicknames";
      function g(e) {
        const t = (0, p.bY)(),
          { data: n, isLoading: r } = (0, l.useQuery)([v], () =>
            (0, a.mG)(this, void 0, void 0, function* () {
              const e = new Map();
              if (d.L7.logged_in) {
                const n = f.gA.Init(E.bM),
                  a = (yield E.lk.GetNicknameList(t, n)).Body().toObject();
                (null == a ? void 0 : a.nicknames) &&
                  a.nicknames.length > 0 &&
                  a.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            }),
          );
        return n ? n.get(e) : null;
      }
      const y = new (i())(
          (e) =>
            (function (e) {
              var t, n, r, o;
              return (0, a.mG)(this, void 0, void 0, function* () {
                if (!e || 0 == e.length) return [];
                const a =
                  "community" == (0, d.Zv)()
                    ? d.De.COMMUNITY_BASE_URL
                    : d.De.STORE_BASE_URL;
                if (1 == e.length) {
                  const r = { accountid: e[0], origin: self.origin },
                    o = yield s().get(`${a}actions/ajaxgetavatarpersona`, {
                      params: r,
                    });
                  if (
                    !o ||
                    200 != o.status ||
                    1 !=
                      (null === (t = o.data) || void 0 === t
                        ? void 0
                        : t.success) ||
                    !(null === (n = o.data) || void 0 === n
                      ? void 0
                      : n.userinfo)
                  )
                    throw `Load single avatar/persona failed ${(0, m.l)(o).strErrorMsg}`;
                  return [o.data.userinfo];
                }
                {
                  const t = { accountids: e.join(","), origin: self.origin },
                    n = yield s().get(`${a}actions/ajaxgetmultiavatarpersona`, {
                      params: t,
                    });
                  if (
                    !n ||
                    200 != n.status ||
                    1 !=
                      (null === (r = n.data) || void 0 === r
                        ? void 0
                        : r.success) ||
                    !(null === (o = n.data) || void 0 === o
                      ? void 0
                      : o.userinfos)
                  )
                    throw `Load single avatar/persona failed ${(0, m.l)(n).strErrorMsg}`;
                  const i = new Map();
                  return (
                    n.data.userinfos.forEach((e) =>
                      i.set(new u.K(e.steamid).GetAccountID(), e),
                    ),
                    e.map((e) => i.get(e))
                  );
                }
              });
            })(e),
          { cache: !1 },
        ),
        h = "avatarandpersonas";
      function I(e) {
        const { data: t, isLoading: n } = (0, l.useQuery)([h, e], () =>
          y.load(e),
        );
        return [t, n];
      }
      function P(e) {
        const t = (0, l.useQueryClient)(),
          { data: n, isLoading: a } = (0, l.useQuery)({
            queryKey: [h, e],
            queryFn: () => y.loadMany(e),
            onSuccess(e) {
              e.forEach((e) => {
                const n = [h, new u.K(e.steamid).GetAccountID()];
                t.setQueryData(n, e);
              });
            },
            enabled: (null == e ? void 0 : e.length) > 0,
          }),
          r = (0, c.useMemo)(() => {
            const e = new Array();
            return (
              null == n ||
                n.forEach((t) => {
                  t instanceof Error || e.push(t);
                }),
              e
            );
          }, [n]);
        return a ? null : r;
      }
    },
    18434: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => c });
      var a = n(85556),
        r = n(79545),
        s = n(82182),
        o = n(42718),
        i = n(40057);
      function c() {
        const e = (0, i.bY)();
        return (0, o.useQuery)(["communitypreferences"], () =>
          (0, a.mG)(this, void 0, void 0, function* () {
            const t = r.gA.Init(s.AP),
              n = yield s.lk.GetCommunityPreferences(e, t);
            if (1 != n.GetEResult())
              throw new Error(
                `Error from GetCommunityPreferences: ${n.GetEResult()} ${n.GetErrorMessage()}`,
              );
            return n.Body();
          }),
        );
      }
    },
    79798: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var a = n(47427),
        r = n(76957);
      function s(e) {
        const { familyGroupID: t } = e;
        return a.createElement(r.PurchaseRequestSimpleInfoPage, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequested_Header",
          infoLocToken: "#PurchaseRequested_Info",
        });
      }
    },
    76957: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, { PurchaseRequestSimpleInfoPage: () => q, default: () => y });
      var a = n(47427),
        r = n(83090),
        s = n.n(r),
        o = n(1485),
        i = n(92686),
        c = n(46193),
        l = n(31846),
        u = n(85948),
        m = n(35427),
        d = n(65255),
        f = n(97418);
      function E(e) {
        var t, n, r;
        const { familyGroupID: s } = e,
          o = (0, i.JM)(s),
          c =
            null ===
              (n =
                null === (t = (0, i.P2)(s).data) || void 0 === t
                  ? void 0
                  : t.requests()) || void 0 === n
              ? void 0
              : n.length;
        if (!c) return null;
        const u = (0, l.kb)("#PurchaseRequestBanner_PendingRequest", c);
        return a.createElement(
          "div",
          { className: f.PurchaseRequestBanner },
          (0, l.kQ)(
            "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
            a.createElement(
              "a",
              {
                href:
                  d.De.STORE_BASE_URL + "account/familymanagement?tab=requests",
              },
              u,
            ),
            a.createElement(
              "span",
              null,
              null === (r = o.data) || void 0 === r ? void 0 : r.name(),
            ),
          ),
        );
      }
      var p = n(46882),
        v = n(10847),
        g = n(53923);
      function y(e) {
        const { familyGroupID: t, requestID: n } = e,
          r = (0, i.jo)(t, n),
          s = (0, c.useInitCartLocalization)(),
          o = (0, g.M)();
        if (r.isError) return a.createElement(h, { familyGroupID: t });
        if (r.isLoading || !s) return a.createElement(I, null);
        const { requests: l } = r.data.toObject(),
          u = l.find(({ request_id: e }) => e === n);
        return u
          ? u.is_completed
            ? a.createElement(_, { familyGroupID: t })
            : u.requester_steamid === o
              ? a.createElement(R, { familyGroupID: t })
              : a.createElement(D, { request: u })
          : a.createElement(P, { familyGroupID: t });
      }
      function h(e) {
        const { familyGroupID: t } = e;
        return a.createElement(q, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestErrorHeader",
        });
      }
      function I() {
        return a.createElement(
          "div",
          { className: s().PurchaseRequestInfoPage },
          a.createElement(p.V, { size: "medium", msDelayAppear: 300 }),
        );
      }
      function P(e) {
        const { familyGroupID: t } = e;
        return a.createElement(q, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
        });
      }
      function _(e) {
        const { familyGroupID: t } = e;
        return a.createElement(q, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
        });
      }
      function R(e) {
        const { familyGroupID: t } = e;
        return a.createElement(q, {
          familyGroupID: t,
          headerLocToken: "#PurchaseRequest_RequestPendingHeader",
          infoLocToken: "#PurchaseRequest_RequestPendingInfo",
        });
      }
      function q(e) {
        const { familyGroupID: t, headerLocToken: n, infoLocToken: r } = e,
          [c, u] = a.useState(null);
        return a.createElement(
          "div",
          { className: s().PurchaseRequestInfoPage },
          a.createElement(
            i.Xe.Provider,
            { value: { errorMessage: c, setErrorMessage: u } },
            a.createElement("div", { className: s().Header }, (0, l.Xx)(n)),
            a.createElement(v.L4, null),
            a.createElement(E, { familyGroupID: t }),
            !!r &&
              a.createElement("div", { className: s().Info }, (0, l.Xx)(r)),
            a.createElement(
              "div",
              { className: s().ButtonContainer },
              a.createElement(
                o.KM,
                {
                  className: s().PrimaryButton,
                  onClick: () => {
                    window.location.assign(d.De.STORE_BASE_URL);
                  },
                },
                (0, l.Xx)("#PurchaseRequested_ReturnToStore"),
              ),
            ),
          ),
        );
      }
      function D(e) {
        const { request: t } = e,
          n = new m.K(t.requester_steamid).GetAccountID(),
          [r] = (0, u.Fz)(n),
          [s, o] = a.useState({ accountid_giftee: n }),
          i = a.useRef(() => {}).current,
          d = (0, l.Xx)(
            "#Cart_PurchaseRequestTitle",
            null == r ? void 0 : r.persona_name,
          );
        return a.createElement(c.BaseCartPage, {
          cartID: {
            type: "request",
            gid: t.gidshoppingcart,
            requestID: t.request_id,
          },
          step: "gifts",
          onStepChange: i,
          title: d,
          cartWideGiftInfo: s,
          onCartWideGiftInfoChange: o,
        });
      }
    },
  },
]);
