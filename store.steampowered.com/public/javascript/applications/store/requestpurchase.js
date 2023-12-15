/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7280],
  {
    28536: (e) => {
      e.exports = {
        RoleIcon: "familysharedcomponents_RoleIcon_2OqP3",
        ProfileLink: "familysharedcomponents_ProfileLink_iKwt8",
        MeBadge: "familysharedcomponents_MeBadge_qeLJ_",
        ExpandRow: "familysharedcomponents_ExpandRow_168MV",
        PlayerName: "familysharedcomponents_PlayerName_3YHL9",
        RoleAndIcon: "familysharedcomponents_RoleAndIcon_1VP1W",
        RoleName: "familysharedcomponents_RoleName_3rvHm",
        FamilyErrorDisplay: "familysharedcomponents_FamilyErrorDisplay_3EgCv",
        FamilyMemberRow: "familysharedcomponents_FamilyMemberRow_3QkkY",
        FamilyMemberRowTop: "familysharedcomponents_FamilyMemberRowTop_3kaLZ",
        Left: "familysharedcomponents_Left_3KlqU",
        InvitePending: "familysharedcomponents_InvitePending_2xtN_",
      };
    },
    57473: (e) => {
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
    53765: (e, t, a) => {
      "use strict";
      a.d(t, { In: () => R, L4: () => v, Mm: () => g });
      var r = a(89526),
        n = a(28536),
        s = a(701),
        o = a(14826),
        l = a(19304),
        i = a(24448),
        m = a(50355),
        c = a(47165),
        u = a(23384),
        d = a(49437),
        f = a(47742),
        _ = a(39323),
        h = a(45761),
        P = a(67406);
      function p(e) {
        return r.createElement(s.LpF, null);
      }
      function E(e) {
        return r.createElement(s.soM, null);
      }
      function g(e) {
        return r.createElement(
          "div",
          { className: (0, l.Z)(n.RoleIcon, e.className) },
          2 == e.role ? r.createElement(E, null) : r.createElement(p, null),
        );
      }
      function y(e) {
        var t, a;
        const { strSteamID: s, role: l, persona: u, isSelf: d } = e,
          f = new c.K(s);
        let p = e.size || "Large";
        const E = (0, _.N5)(),
          y = (0, P.h)(),
          v =
            null === (t = E.data) || void 0 === t
              ? void 0
              : t.get(f.GetAccountID()),
          R =
            null === (a = y.data) || void 0 === a
              ? void 0
              : a.preferences().parenthesize_nicknames();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "a",
            {
              className: n.ProfileLink,
              href: i.y$.GetProfileURLBySteamID(new c.K(s)),
            },
            r.createElement(m.vV, {
              className: n.Avatar,
              persona: u,
              size: p,
              statusPosition: "right",
            }),
            r.createElement(h.o, {
              className: n.PlayerName,
              bIsSelf: d,
              bHideStatus: !1,
              bHidePersona: !1,
              bParenthesizeNicknames: R,
              bCompactView: !1,
              persona: u,
              strNickname: v,
              eFriendRelationship: 3,
            }),
          ),
          r.createElement(
            "div",
            { className: n.RoleAndIcon },
            r.createElement(g, { className: n.ProfileRoleIcon, role: l }),
            r.createElement(
              "div",
              { className: n.RoleName },
              (0, o.Xx)(`#FamilyManagement_Role_${l}`),
            ),
          ),
        );
      }
      function v(e) {
        const t = (0, r.useContext)(u.Xe);
        return t.errorMessage
          ? r.createElement(
              "div",
              { className: n.FamilyErrorDisplay },
              t.errorMessage,
            )
          : null;
      }
      function R(e) {
        const { strSteamID: t, role: a, bInvitePending: i, children: m } = e,
          c = (0, f.M)(),
          [_, h] = (0, r.useState)(!1),
          P = c == t,
          p = (0, d.IE)(t);
        if (
          ((0, u.sT)(p, "#FamilyManagement_ErrorLoadFamilyGeneric"),
          !p.isSuccess)
        )
          return null;
        const E = p.data,
          g = null != m;
        return r.createElement(
          "div",
          {
            className: (0, l.Z)(
              n.FamilyMemberRow,
              P && n.ActiveFamilyMemberRow,
            ),
          },
          r.createElement(
            "div",
            { className: n.FamilyMemberRowTop },
            r.createElement(
              "div",
              { className: n.Left },
              r.createElement(y, {
                strSteamID: t,
                role: a,
                persona: E,
                isSelf: P,
              }),
              i &&
                r.createElement(
                  "div",
                  { className: n.InvitePending },
                  (0, o.Xx)("#FamilyManagement_InvitePending"),
                ),
              P &&
                r.createElement(
                  "span",
                  { className: n.MeBadge },
                  (0, o.Xx)("#FamilyManagement_Me"),
                ),
            ),
            g &&
              r.createElement(
                "div",
                { className: n.ExpandRow, onClick: () => h(!_) },
                r.createElement(s.ret, { angle: _ ? 180 : 0 }),
              ),
          ),
          g && _ && m,
        );
      }
    },
    24448: (e, t, a) => {
      "use strict";
      a.d(t, { Gr: () => h, Jq: () => P, y$: () => _ });
      var r = a(33940),
        n = a(52868),
        s = a.n(n),
        o = a(59621),
        l = a(89526),
        i = a(4556),
        m = a(47165),
        c = a(23801),
        u = a(23217),
        d = a(32765);
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, o.rC)(this);
        }
        LoadProfiles(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            (0, c.X)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let a = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
            );
            if (0 == a.length) return this.m_mapProfilesLoading.get(e[0]);
            let r = d.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              n = s().get(r, {
                params: { steamids: a.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            a.forEach((e) => this.m_mapProfilesLoading.set(e, n));
            let o = yield n;
            o.data &&
              200 == o.status &&
              o.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = (0, i.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, i.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, i.U)(e.avatar_url)),
                  this.m_mapProfiles.set(e.steamid, e),
                  this.m_mapProfilesLoading.delete(e.steamid);
              });
          });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            m.K.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        GetProfileBySteamID(e) {
          return this.m_mapProfiles.get(e.ConvertTo64BitString());
        }
        BHasProfile(e) {
          return this.m_mapProfiles.has(e);
        }
        BHasProfileByAccountID(e) {
          return this.m_mapProfiles.has(
            m.K.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        BHasAllProfilesBySteamID(e) {
          return !e.some((e) => !this.BHasProfileBySteamID(e));
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? d.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : d.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, r.gn)([o.LO], f.prototype, "m_mapProfiles", void 0);
      const _ = new f();
      function h(e) {
        const t = l.useMemo(
            () => (e ? ("string" == typeof e ? new m.K(e) : e) : null),
            [e],
          ),
          [a, r] = (0, l.useState)(!!t && !_.BHasProfileBySteamID(t));
        (0, l.useEffect)(() => {
          const e = s().CancelToken.source();
          return (
            t &&
              !_.BHasProfileBySteamID(t) &&
              _.LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const a = (0, u.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      a.strErrorMsg,
                    a,
                  );
                })
                .finally(() => {
                  e.token.reason || r(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [a, !!t && _.GetProfileBySteamID(t)];
      }
      function P(e) {
        return h(l.useMemo(() => (e ? m.K.InitFromAccountID(e) : null), [e]));
      }
      window.g_ProfileStore = _;
    },
    67406: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => i });
      var r = a(33940),
        n = a(68333),
        s = a(97940),
        o = a(5615),
        l = a(27070);
      function i() {
        const e = (0, l.bY)();
        return (0, o.useQuery)(["communitypreferences"], () =>
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
    37046: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => u });
      var r = a(89526),
        n = a(57473),
        s = a.n(n),
        o = a(14826),
        l = a(23384),
        i = a(53765),
        m = a(44973),
        c = a(57605);
      function u(e) {
        const [t, a] = r.useState(null);
        return r.createElement(
          "div",
          { className: s().RequestPurchasePage },
          r.createElement(
            l.Xe.Provider,
            { value: { errorMessage: t, setErrorMessage: a } },
            r.createElement(
              "div",
              { className: s().Header },
              (0, o.Xx)("#PurchaseRequested_Header"),
            ),
            r.createElement(i.L4, null),
            r.createElement(
              "div",
              { className: s().Info },
              (0, o.Xx)("#PurchaseRequested_Info"),
            ),
            r.createElement(
              "div",
              { className: s().ButtonContainer },
              r.createElement(
                c.KM,
                {
                  className: s().PrimaryButton,
                  onClick: () => {
                    window.location.assign(m.De.STORE_BASE_URL);
                  },
                },
                (0, o.Xx)("#PurchaseRequested_ReturnToStore"),
              ),
              r.createElement(
                c.zx,
                {
                  className: s().Button,
                  onClick: () => {
                    window.location.assign(
                      m.De.STORE_BASE_URL +
                        "account/familymanagement?tab=requests",
                    );
                  },
                },
                (0, o.Xx)("#PurchaseRequested_ViewRequests"),
              ),
            ),
          ),
        );
      }
    },
    40151: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => f });
      var r = a(89526),
        n = a(57473),
        s = a.n(n),
        o = a(14826),
        l = a(23384),
        i = a(69338),
        m = a(53765),
        c = a(44973),
        u = a(57605),
        d = a(19304);
      function f(e) {
        const { shoppingCartGID: t } = e,
          a = (0, l.Rs)(),
          [n, c] = r.useState(null),
          u = r.useMemo(() => (0, o.Xx)("#RequestPurchase_PageTitle"), []);
        return a.isLoading
          ? r.createElement(
              "div",
              { className: s().RequestPurchasePage },
              r.createElement(
                "div",
                { className: s().ThrobberContainer },
                r.createElement(i.V, null),
              ),
            )
          : a.isError
          ? null
          : r.createElement(
              "div",
              { className: s().RequestPurchasePage },
              r.createElement(
                l.Xe.Provider,
                { value: { errorMessage: n, setErrorMessage: c } },
                r.createElement("div", { className: s().Header }, u),
                r.createElement(m.L4, null),
                r.createElement(_, {
                  familyGroupID: a.data.family_groupid(),
                  shoppingCartGID: t,
                }),
              ),
            );
      }
      function _(e) {
        const { familyGroupID: t, shoppingCartGID: a } = e,
          n = (0, l.BU)(t, a, c.L7.country_code),
          { setErrorMessage: m } = (0, l.cL)();
        (0, l.zj)(
          n,
          "#RequestPurchase_GenericError",
          l.zs.k_EFamilyQueryPurchaseRequest,
        );
        const f = `${c.De.STORE_BASE_URL}cart`;
        return n.isLoading
          ? r.createElement(
              "div",
              { className: s().ThrobberContainer },
              r.createElement(i.V, null),
            )
          : n.isError
          ? null
          : r.createElement(
              "div",
              null,
              r.createElement(
                "div",
                null,
                (0, o.Xx)(
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
                        m(null), n.mutate();
                      },
                    },
                    (0, o.Xx)("#RequestPurchase_RequestPurchase"),
                  ),
                  r.createElement(
                    "a",
                    { href: f },
                    r.createElement(
                      u.zx,
                      {
                        className: (0, d.Z)(
                          s().BackToCartButton,
                          s().RequestButton,
                        ),
                      },
                      (0, o.Xx)("#RequestPurchase_BackToCart"),
                    ),
                  ),
                ),
            );
      }
    },
  },
]);
