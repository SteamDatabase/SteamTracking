/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7280],
  {
    28536: (e) => {
      e.exports = {
        RoleIcon: "familysharedcomponents_RoleIcon_2OqP3",
        ProfileLink: "familysharedcomponents_ProfileLink_iKwt8",
        MyProfile: "familysharedcomponents_MyProfile_2nixW",
        Avatar: "familysharedcomponents_Avatar_3h6_a",
        PlayerName: "familysharedcomponents_PlayerName_3YHL9",
        MeBadge: "familysharedcomponents_MeBadge_qeLJ_",
        ProfileRoleIcon: "familysharedcomponents_ProfileRoleIcon_1SlHw",
        RoleName: "familysharedcomponents_RoleName_3rvHm",
        FamilyErrorDisplay: "familysharedcomponents_FamilyErrorDisplay_3EgCv",
        FamilyMemberRow: "familysharedcomponents_FamilyMemberRow_3QkkY",
        FamilyMemberRowTop: "familysharedcomponents_FamilyMemberRowTop_3kaLZ",
        ExpandRow: "familysharedcomponents_ExpandRow_168MV",
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
    53765: (e, t, r) => {
      "use strict";
      r.d(t, { In: () => R, L4: () => v, Mm: () => y });
      var a = r(89526),
        n = r(28536),
        s = r(701),
        o = r(14826),
        l = r(19304),
        i = r(24448),
        m = r(50355),
        c = r(47165),
        u = r(23384),
        d = r(49437),
        f = r(47742),
        _ = r(39323),
        h = r(45761),
        P = r(67406);
      function p(e) {
        return a.createElement(s.LpF, null);
      }
      function E(e) {
        return a.createElement(s.soM, null);
      }
      function y(e) {
        return a.createElement(
          "div",
          { className: (0, l.Z)(n.RoleIcon, e.className) },
          2 == e.role ? a.createElement(E, null) : a.createElement(p, null),
        );
      }
      function g(e) {
        var t, r;
        const { strSteamID: s, role: u, persona: d, isSelf: f } = e,
          p = new c.K(s);
        let E = e.size || "Large";
        const g = (0, _.N5)(),
          v = (0, P.h)(),
          R =
            null === (t = g.data) || void 0 === t
              ? void 0
              : t.get(p.GetAccountID()),
          B =
            null === (r = v.data) || void 0 === r
              ? void 0
              : r.preferences().parenthesize_nicknames();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "a",
            {
              className: (0, l.Z)(n.ProfileLink, f ? n.MyProfile : ""),
              href: i.y$.GetProfileURLBySteamID(new c.K(s)),
            },
            a.createElement(m.vV, {
              className: n.Avatar,
              persona: d,
              size: E,
              statusPosition: "right",
            }),
            a.createElement(h.o, {
              className: n.PlayerName,
              bIsSelf: f,
              bHideStatus: !1,
              bHidePersona: !1,
              bParenthesizeNicknames: B,
              bCompactView: !1,
              persona: d,
              strNickname: R,
              eFriendRelationship: 3,
            }),
          ),
          a.createElement(y, { className: n.ProfileRoleIcon, role: u }),
          a.createElement(
            "div",
            { className: n.RoleName },
            (0, o.Xx)(`#FamilyManagement_Role_${u}`),
          ),
          f &&
            a.createElement(
              "span",
              { className: n.MeBadge },
              (0, o.Xx)("#FamilyManagement_Me"),
            ),
        );
      }
      function v(e) {
        const t = (0, a.useContext)(u.Xe);
        return t.errorMessage
          ? a.createElement(
              "div",
              { className: n.FamilyErrorDisplay },
              t.errorMessage,
            )
          : null;
      }
      function R(e) {
        const { strSteamID: t, role: r, bInvitePending: i, children: m } = e,
          c = (0, f.M)(),
          [_, h] = (0, a.useState)(!1),
          P = c == t,
          p = (0, d.IE)(t);
        if (
          ((0, u.sT)(p, "#FamilyManagement_ErrorLoadFamilyGeneric"),
          !p.isSuccess)
        )
          return null;
        const E = p.data,
          y = null != m;
        return a.createElement(
          "div",
          {
            className: (0, l.Z)(
              n.FamilyMemberRow,
              P ? n.ActiveFamilyMemberRow : "",
            ),
          },
          a.createElement(
            "div",
            { className: n.FamilyMemberRowTop },
            a.createElement(g, {
              strSteamID: t,
              role: r,
              persona: E,
              isSelf: P,
            }),
            i &&
              a.createElement(
                "div",
                { className: n.InvitePending },
                (0, o.Xx)("#FamilyManagement_InvitePending"),
              ),
            y &&
              a.createElement(
                "div",
                { className: n.ExpandRow, onClick: () => h(!_) },
                a.createElement(s.ret, { angle: _ ? 180 : 0 }),
              ),
          ),
          y && _ && m,
        );
      }
    },
    24448: (e, t, r) => {
      "use strict";
      r.d(t, { Gr: () => h, Jq: () => P, y$: () => _ });
      var a = r(33940),
        n = r(52868),
        s = r.n(n),
        o = r(59621),
        l = r(89526),
        i = r(4556),
        m = r(47165),
        c = r(23801),
        u = r(23217),
        d = r(32765);
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, o.rC)(this);
        }
        LoadProfiles(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            (0, c.X)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let r = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
            );
            if (0 == r.length) return this.m_mapProfilesLoading.get(e[0]);
            let a = d.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              n = s().get(a, {
                params: { steamids: r.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            r.forEach((e) => this.m_mapProfilesLoading.set(e, n));
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
      (0, a.gn)([o.LO], f.prototype, "m_mapProfiles", void 0);
      const _ = new f();
      function h(e) {
        const t = l.useMemo(
            () => (e ? ("string" == typeof e ? new m.K(e) : e) : null),
            [e],
          ),
          [r, a] = (0, l.useState)(!!t && !_.BHasProfileBySteamID(t));
        (0, l.useEffect)(() => {
          const e = s().CancelToken.source();
          return (
            t &&
              !_.BHasProfileBySteamID(t) &&
              _.LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const r = (0, u.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      r.strErrorMsg,
                    r,
                  );
                })
                .finally(() => {
                  e.token.reason || a(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [r, !!t && _.GetProfileBySteamID(t)];
      }
      function P(e) {
        return h(l.useMemo(() => (e ? m.K.InitFromAccountID(e) : null), [e]));
      }
      window.g_ProfileStore = _;
    },
    67406: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => i });
      var a = r(33940),
        n = r(68333),
        s = r(97940),
        o = r(5615),
        l = r(27070);
      function i() {
        const e = (0, l.bY)();
        return (0, o.useQuery)(["communitypreferences"], () =>
          (0, a.mG)(this, void 0, void 0, function* () {
            const t = n.gA.Init(s.AP),
              r = yield s.lk.GetCommunityPreferences(e, t);
            if (1 != r.GetEResult())
              throw new Error(
                `Error from GetCommunityPreferences: ${r.GetEResult()} ${r.GetErrorMessage()}`,
              );
            return r.Body();
          }),
        );
      }
    },
    37046: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => u });
      var a = r(89526),
        n = r(57473),
        s = r.n(n),
        o = r(14826),
        l = r(23384),
        i = r(53765),
        m = r(44973),
        c = r(57605);
      function u(e) {
        const [t, r] = a.useState(null);
        return a.createElement(
          "div",
          { className: s().RequestPurchasePage },
          a.createElement(
            l.Xe.Provider,
            { value: { errorMessage: t, setErrorMessage: r } },
            a.createElement(
              "div",
              { className: s().Header },
              (0, o.Xx)("#PurchaseRequested_Header"),
            ),
            a.createElement(i.L4, null),
            a.createElement(
              "div",
              { className: s().Info },
              (0, o.Xx)("#PurchaseRequested_Info"),
            ),
            a.createElement(
              "div",
              { className: s().ButtonContainer },
              a.createElement(
                c.KM,
                {
                  className: s().PrimaryButton,
                  onClick: () => {
                    window.location.assign(m.De.STORE_BASE_URL);
                  },
                },
                (0, o.Xx)("#PurchaseRequested_ReturnToStore"),
              ),
              a.createElement(
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
    40151: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => f });
      var a = r(89526),
        n = r(57473),
        s = r.n(n),
        o = r(14826),
        l = r(23384),
        i = r(69338),
        m = r(53765),
        c = r(44973),
        u = r(57605),
        d = r(19304);
      function f(e) {
        const { shoppingCartGID: t } = e,
          r = (0, l.Rs)(),
          [n, c] = a.useState(null),
          u = a.useMemo(() => (0, o.Xx)("#RequestPurchase_PageTitle"), []);
        return r.isLoading
          ? a.createElement(
              "div",
              { className: s().RequestPurchasePage },
              a.createElement(
                "div",
                { className: s().ThrobberContainer },
                a.createElement(i.V, null),
              ),
            )
          : r.isError
          ? null
          : a.createElement(
              "div",
              { className: s().RequestPurchasePage },
              a.createElement(
                l.Xe.Provider,
                { value: { errorMessage: n, setErrorMessage: c } },
                a.createElement("div", { className: s().Header }, u),
                a.createElement(m.L4, null),
                a.createElement(_, {
                  familyGroupID: r.data.family_groupid(),
                  shoppingCartGID: t,
                }),
              ),
            );
      }
      function _(e) {
        const { familyGroupID: t, shoppingCartGID: r } = e,
          n = (0, l.BU)(t, r, c.L7.country_code),
          { setErrorMessage: m } = (0, l.cL)();
        (0, l.zj)(
          n,
          "#RequestPurchase_GenericError",
          l.zs.k_EFamilyQueryPurchaseRequest,
        );
        const f = `${c.De.STORE_BASE_URL}cart`;
        return n.isLoading
          ? a.createElement(
              "div",
              { className: s().ThrobberContainer },
              a.createElement(i.V, null),
            )
          : n.isError
          ? null
          : a.createElement(
              "div",
              null,
              a.createElement(
                "div",
                null,
                (0, o.Xx)(
                  n.isSuccess
                    ? "#RequestPurchase_PurchaseRequested"
                    : "#RequestPurchase_WillNotifyAllAdults",
                ),
              ),
              !n.isSuccess &&
                a.createElement(
                  "div",
                  { className: s().ButtonContainer },
                  a.createElement(
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
                  a.createElement(
                    "a",
                    { href: f },
                    a.createElement(
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
