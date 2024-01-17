/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7280],
  {
    9496: (e) => {
      e.exports = {
        RoleIcon: "familysharedcomponents_RoleIcon_2OqP3",
        ProfileLink: "familysharedcomponents_ProfileLink_iKwt8",
        MeBadge: "familysharedcomponents_MeBadge_qeLJ_",
        PlayerName: "familysharedcomponents_PlayerName_3YHL9",
        RoleAndIcon: "familysharedcomponents_RoleAndIcon_1VP1W",
        RoleName: "familysharedcomponents_RoleName_3rvHm",
        FamilyErrorDisplay: "familysharedcomponents_FamilyErrorDisplay_3EgCv",
        FamilyMemberRow: "familysharedcomponents_FamilyMemberRow_3QkkY",
        FamilyMemberRowTop: "familysharedcomponents_FamilyMemberRowTop_3kaLZ",
        Left: "familysharedcomponents_Left_3KlqU",
        InvitePending: "familysharedcomponents_InvitePending_2xtN_",
        ExpandRowButton: "familysharedcomponents_ExpandRowButton_2a0Yy",
        Selected: "familysharedcomponents_Selected_2DsLI",
      };
    },
    96271: (e) => {
      e.exports = {
        RequestPurchasePage: "requestpurchasepage_RequestPurchasePage_3F6rI",
        Header: "requestpurchasepage_Header_1JteR",
        ThrobberContainer: "requestpurchasepage_ThrobberContainer_1mHKl",
        ButtonContainer: "requestpurchasepage_ButtonContainer_2H4GY",
        RequestButton: "requestpurchasepage_RequestButton_3thyo",
        RequestPurchaseButton:
          "requestpurchasepage_RequestPurchaseButton_18U0s",
      };
    },
    10847: (e, t, a) => {
      "use strict";
      a.d(t, { In: () => v, L4: () => g, Mm: () => y });
      var r = a(47427),
        n = a(9496),
        s = a(62613),
        l = a(1485),
        o = a(31846),
        c = a(13129),
        i = a(38605),
        m = a(35427),
        u = a(92686),
        d = a(51915),
        E = a(53923),
        _ = a(88619),
        h = a(70548),
        R = a(18434);
      function p(e) {
        return r.createElement(s.LpF, null);
      }
      function f(e) {
        return r.createElement(s.soM, null);
      }
      function y(e) {
        return r.createElement(
          "div",
          { className: (0, c.Z)(n.RoleIcon, e.className) },
          2 == e.role ? r.createElement(f, null) : r.createElement(p, null),
        );
      }
      function P(e) {
        var t, a;
        const { strSteamID: s, role: l, persona: c, isSelf: u } = e,
          d = new m.K(s);
        let E = e.size || "Large";
        const p = (0, _.N5)(),
          f = (0, R.h)(),
          P =
            null === (t = p.data) || void 0 === t
              ? void 0
              : t.get(d.GetAccountID()),
          g =
            null === (a = f.data) || void 0 === a
              ? void 0
              : a.preferences().parenthesize_nicknames();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "a",
            { className: n.ProfileLink, href: c.GetCommunityProfileURL() },
            r.createElement(i.vV, {
              className: n.Avatar,
              persona: c,
              size: E,
              statusPosition: "right",
            }),
            r.createElement(h.o, {
              className: n.PlayerName,
              bIsSelf: u,
              bHideStatus: !1,
              bHidePersona: !1,
              bParenthesizeNicknames: g,
              bCompactView: !1,
              persona: c,
              strNickname: P,
              eFriendRelationship: 3,
            }),
          ),
          r.createElement(
            "div",
            { className: n.RoleAndIcon },
            r.createElement(y, { className: n.ProfileRoleIcon, role: l }),
            r.createElement(
              "div",
              { className: n.RoleName },
              (0, o.Xx)(`#FamilyManagement_Role_${l}`),
            ),
          ),
        );
      }
      function g(e) {
        const t = (0, r.useContext)(u.Xe);
        return t.errorMessage
          ? r.createElement(
              "div",
              { className: n.FamilyErrorDisplay },
              t.errorMessage,
            )
          : null;
      }
      function v(e) {
        const { strSteamID: t, role: a, bInvitePending: i, children: m } = e,
          _ = (0, E.M)(),
          [h, R] = (0, r.useState)(!1),
          p = _ == t,
          f = (0, d.IE)(t);
        if (
          ((0, u.sT)(f, "#FamilyManagement_ErrorLoadFamilyGeneric"),
          !f.isSuccess)
        )
          return null;
        const y = f.data;
        return r.createElement(
          "div",
          {
            className: (0, c.Z)(
              n.FamilyMemberRow,
              p && n.ActiveFamilyMemberRow,
            ),
          },
          r.createElement(
            "div",
            { className: n.FamilyMemberRowTop },
            r.createElement(
              "div",
              { className: n.Left },
              r.createElement(P, {
                strSteamID: t,
                role: a,
                persona: y,
                isSelf: p,
              }),
              i &&
                r.createElement(
                  "div",
                  { className: n.InvitePending },
                  (0, o.Xx)("#FamilyManagement_InvitePending"),
                ),
              p &&
                r.createElement(
                  "span",
                  { className: n.MeBadge },
                  (0, o.Xx)("#FamilyManagement_Me"),
                ),
            ),
            m &&
              r.createElement(
                l.Yz,
                {
                  className: (0, c.Z)(n.ExpandRowButton, h && n.Selected),
                  onClick: () => R(!h),
                },
                r.createElement(s.vVQ, { direction: "down" }),
              ),
          ),
          h && m,
        );
      }
    },
    18434: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => c });
      var r = a(85556),
        n = a(35750),
        s = a(82182),
        l = a(42718),
        o = a(40057);
      function c() {
        const e = (0, o.bY)();
        return (0, l.useQuery)(["communitypreferences"], () =>
          (0, r.mG)(this, void 0, void 0, function* () {
            const t = n.gA.Init(s.AP),
              a = yield s.lk.GetCommunityPreferences(e, t);
            if (1 != a.GetEResult())
              throw new Error(
                `Error from GetCommunityPreferences: ${a.GetEResult()} ${a.GetErrorMessage()}`,
              );
            return a.Body();
          }),
        );
      }
    },
    79798: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => u });
      var r = a(47427),
        n = a(96271),
        s = a.n(n),
        l = a(31846),
        o = a(92686),
        c = a(10847),
        i = a(65255),
        m = a(1485);
      function u(e) {
        const [t, a] = r.useState(null);
        return r.createElement(
          "div",
          { className: s().RequestPurchasePage },
          r.createElement(
            o.Xe.Provider,
            { value: { errorMessage: t, setErrorMessage: a } },
            r.createElement(
              "div",
              { className: s().Header },
              (0, l.Xx)("#PurchaseRequested_Header"),
            ),
            r.createElement(c.L4, null),
            r.createElement(
              "div",
              { className: s().Info },
              (0, l.Xx)("#PurchaseRequested_Info"),
            ),
            r.createElement(
              "div",
              { className: s().ButtonContainer },
              r.createElement(
                m.KM,
                {
                  className: s().PrimaryButton,
                  onClick: () => {
                    window.location.assign(i.De.STORE_BASE_URL);
                  },
                },
                (0, l.Xx)("#PurchaseRequested_ReturnToStore"),
              ),
              r.createElement(
                m.zx,
                {
                  className: s().Button,
                  onClick: () => {
                    window.location.assign(
                      i.De.STORE_BASE_URL +
                        "account/familymanagement?tab=requests",
                    );
                  },
                },
                (0, l.Xx)("#PurchaseRequested_ViewRequests"),
              ),
            ),
          ),
        );
      }
    },
    54845: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => E });
      var r = a(47427),
        n = a(96271),
        s = a.n(n),
        l = a(31846),
        o = a(92686),
        c = a(46882),
        i = a(10847),
        m = a(65255),
        u = a(1485),
        d = a(13129);
      function E(e) {
        const { shoppingCartGID: t } = e,
          a = (0, o.Rs)(),
          [n, m] = r.useState(null),
          u = r.useMemo(() => (0, l.Xx)("#RequestPurchase_PageTitle"), []);
        return a.isLoading
          ? r.createElement(
              "div",
              { className: s().RequestPurchasePage },
              r.createElement(
                "div",
                { className: s().ThrobberContainer },
                r.createElement(c.V, null),
              ),
            )
          : a.isError
          ? null
          : r.createElement(
              "div",
              { className: s().RequestPurchasePage },
              r.createElement(
                o.Xe.Provider,
                { value: { errorMessage: n, setErrorMessage: m } },
                r.createElement("div", { className: s().Header }, u),
                r.createElement(i.L4, null),
                r.createElement(_, {
                  familyGroupID: a.data.family_groupid(),
                  shoppingCartGID: t,
                }),
              ),
            );
      }
      function _(e) {
        const { familyGroupID: t, shoppingCartGID: a } = e,
          n = (0, o.BU)(t, a, m.L7.country_code),
          { setErrorMessage: i } = (0, o.cL)();
        (0, o.zj)(
          n,
          "#RequestPurchase_GenericError",
          o.zs.k_EFamilyQueryPurchaseRequest,
        );
        const E = `${m.De.STORE_BASE_URL}cart`;
        return n.isLoading
          ? r.createElement(
              "div",
              { className: s().ThrobberContainer },
              r.createElement(c.V, null),
            )
          : n.isError
          ? null
          : r.createElement(
              "div",
              null,
              r.createElement(
                "div",
                null,
                (0, l.Xx)(
                  n.isSuccess
                    ? "#RequestPurchase_PurchaseRequested"
                    : "#RequestPurchase_WillNotifyAllAdults",
                ),
              ),
              !n.isSuccess &&
                r.createElement(
                  "div",
                  { className: s().ButtonContainer },
                  r.createElement(
                    u.zx,
                    {
                      className: (0, d.Z)(
                        s().RequestPurchaseButton,
                        s().RequestButton,
                      ),
                      onClick: () => {
                        i(null), n.mutate();
                      },
                    },
                    (0, l.Xx)("#RequestPurchase_RequestPurchase"),
                  ),
                  r.createElement(
                    "a",
                    { href: E },
                    r.createElement(
                      u.zx,
                      {
                        className: (0, d.Z)(
                          s().BackToCartButton,
                          s().RequestButton,
                        ),
                      },
                      (0, l.Xx)("#RequestPurchase_BackToCart"),
                    ),
                  ),
                ),
            );
      }
    },
  },
]);
