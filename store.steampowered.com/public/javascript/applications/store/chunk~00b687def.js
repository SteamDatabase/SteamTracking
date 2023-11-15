/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9267],
  {
    23384: (e, t, o) => {
      o.d(t, {
        BU: () => D,
        JM: () => P,
        MP: () => Q,
        Nu: () => I,
        Nw: () => b,
        Rj: () => S,
        Rs: () => G,
        XX: () => R,
        Xe: () => U,
        Xn: () => F,
        ZB: () => q,
        bF: () => E,
        cc: () => L,
        kz: () => M,
        lV: () => A,
        oZ: () => Y,
        rQ: () => C,
        sT: () => K,
        wy: () => T,
      });
      var i = o(33940),
        n = o(89526),
        r = o(68333),
        s = o(5615),
        u = o(47742),
        a = o(27070),
        l = o(19447),
        c = o(14826),
        d = o(66427),
        y = o(44973);
      const m = (e) => (t) => (t ? [e, t] : [e]),
        f = m("get_family_group_for_user "),
        _ = m("get_family_group"),
        v = m("get_family_history"),
        g = m("get_users_sharing_device"),
        B = m("get_purchase_requests"),
        p = m("get_shopping_cart_contents");
      function h(e, t) {
        if (1 != e) throw e;
      }
      function G() {
        const e = (0, a.bY)(),
          t = (0, u.M)();
        return (0, s.useQuery)(f(t), () =>
          (0, i.mG)(this, void 0, void 0, function* () {
            const t = r.gA.Init(l.fd),
              o = yield l.s4.GetFamilyGroupForUser(e, t);
            return h(o.GetEResult()), o.Body();
          }),
        );
      }
      function P(e) {
        const t = (0, a.bY)();
        return (0, s.useQuery)(_(e), () =>
          (0, i.mG)(this, void 0, void 0, function* () {
            const o = r.gA.Init(l.ep);
            o.Body().set_family_groupid(e);
            const i = yield l.s4.GetFamilyGroup(t, o);
            return h(i.GetEResult()), i.Body();
          }),
        );
      }
      function I() {
        const e = (0, a.bY)(),
          t = (0, s.useQueryClient)(),
          o = (0, u.M)();
        return (0, s.useMutation)({
          mutationFn: (t) =>
            (0, i.mG)(this, void 0, void 0, function* () {
              const o = r.gA.Init(l.tP);
              o.Body().set_name(t);
              const i = yield l.s4.CreateFamilyGroup(e, o);
              return h(i.GetEResult()), i.Body();
            }),
          onSuccess: () => {
            t.invalidateQueries({ queryKey: f(o) });
          },
        });
      }
      function S(e) {
        const t = (0, a.bY)(),
          o = (0, s.useQueryClient)(),
          n = (0, u.M)();
        return (0, s.useMutation)({
          mutationFn: () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              const o = r.gA.Init(l.UL);
              o.Body().set_family_groupid(e);
              const i = yield l.s4.DeleteFamilyGroup(t, o);
              return h(i.GetEResult()), i.Body();
            }),
          onSuccess: () => {
            o.invalidateQueries({ queryKey: f(n) }),
              o.invalidateQueries({ queryKey: _(e) });
          },
        });
      }
      function C(e) {
        const t = (0, a.bY)(),
          o = (0, s.useQueryClient)();
        return (0, s.useMutation)({
          mutationFn: (o) =>
            (0, i.mG)(this, void 0, void 0, function* () {
              const i = r.gA.Init(l.$X);
              i.Body().set_family_groupid(e), i.Body().set_name(o);
              const n = yield l.s4.ModifyFamilyGroupDetails(t, i);
              return h(n.GetEResult()), n.Body();
            }),
          onSuccess: () => {
            o.invalidateQueries({ queryKey: _(e) });
          },
        });
      }
      function M(e, t, o) {
        const n = (0, a.bY)(),
          u = (0, s.useQueryClient)();
        return (0, s.useMutation)({
          mutationFn: () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              const i = r.gA.Init(l.oI);
              i.Body().set_family_groupid(e),
                i.Body().set_receiver_steamid(t),
                i.Body().set_receiver_role(o);
              const s = yield l.s4.InviteToFamilyGroup(n, i);
              return h(s.GetEResult()), s.Body();
            }),
          onSuccess: () => {
            u.invalidateQueries({ queryKey: f(t) }),
              u.invalidateQueries({ queryKey: _(e) });
          },
        });
      }
      function E(e) {
        const t = (0, a.bY)(),
          o = (0, u.M)(),
          n = (0, s.useQueryClient)();
        return (0, s.useMutation)({
          mutationFn: () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              const o = r.gA.Init(l.QV);
              o.Body().set_family_groupid(e);
              const i = yield l.s4.JoinFamilyGroup(t, o);
              return h(i.GetEResult()), i.Body();
            }),
          onSuccess: () => {
            n.invalidateQueries({ queryKey: f(o) }),
              n.invalidateQueries({ queryKey: _(e) });
          },
        });
      }
      function Q(e, t) {
        const o = (0, a.bY)(),
          n = (0, s.useQueryClient)();
        return (0, s.useMutation)({
          mutationFn: () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              const i = r.gA.Init(l._U);
              i.Body().set_family_groupid(e), i.Body().set_steamid_to_cancel(t);
              const n = yield l.s4.CancelFamilyGroupInvite(o, i);
              return h(n.GetEResult()), n.Body();
            }),
          onSuccess: () => {
            n.invalidateQueries({ queryKey: f(t) }),
              n.invalidateQueries({ queryKey: _(e) });
          },
        });
      }
      function R(e, t) {
        const o = (0, a.bY)(),
          n = (0, s.useQueryClient)();
        return (0, s.useMutation)({
          mutationFn: () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              const i = r.gA.Init(l.BV);
              i.Body().set_family_groupid(e), i.Body().set_steamid_to_remove(t);
              const n = yield l.s4.RemoveFromFamilyGroup(o, i);
              return h(n.GetEResult()), n.Body();
            }),
          onSuccess: () => {
            n.invalidateQueries({ queryKey: f(t) }),
              n.invalidateQueries({ queryKey: _(e) }),
              n.invalidateQueries({ queryKey: v(e) });
          },
        });
      }
      function A(e) {
        const t = (0, a.bY)();
        return (0, s.useQuery)(g(e), () =>
          (0, i.mG)(this, void 0, void 0, function* () {
            const o = r.gA.Init(l.Hm);
            o.Body().set_family_groupid(e);
            const i = yield l.s4.GetUsersSharingDevice(t, o);
            return h(i.GetEResult()), i.Body();
          }),
        );
      }
      function F(e) {
        var t, o;
        const i = (0, u.M)();
        return null ===
          (o =
            null === (t = P(e).data) || void 0 === t
              ? void 0
              : t.members().find((e) => e.steamid() == i)) || void 0 === o
          ? void 0
          : o.role();
      }
      function D(e, t, o) {
        const n = (0, a.bY)();
        return (0, s.useMutation)({
          mutationFn: () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              const i = r.gA.Init(l.xv);
              i.Body().set_family_groupid(e),
                i.Body().set_gidshoppingcart(t),
                i.Body().set_store_country_code(o);
              const s = yield l.s4.RequestPurchase(n, i);
              return h(s.GetEResult()), s.Body();
            }),
        });
      }
      function q(e) {
        const t = (0, a.bY)();
        return (0, s.useQuery)(B(e), () =>
          (0, i.mG)(this, void 0, void 0, function* () {
            const o = r.gA.Init(l.SE);
            o.Body().set_family_groupid(e);
            const i = yield l.s4.GetPurchaseRequests(t, o);
            return h(i.GetEResult()), i.Body();
          }),
        );
      }
      function b(e, t, o) {
        const n = (0, a.bY)(),
          u = (0, s.useQueryClient)();
        return (0, s.useMutation)({
          mutationFn: () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              const i = r.gA.Init(l.fB);
              i.Body().set_family_groupid(e),
                i.Body().set_purchase_requester_steamid(t),
                i.Body().set_action(o);
              const s = yield l.s4.RespondToRequestedPurchase(n, i);
              return h(s.GetEResult()), s.Body();
            }),
          onSuccess: () => {
            u.invalidateQueries({ queryKey: B(e) });
          },
        });
      }
      const U = (0, n.createContext)({
        errorMessage: null,
        setErrorMessage: (e) => {},
      });
      function K(e, t) {
        const { setErrorMessage: o } = (0, n.useContext)(U);
        return (
          (0, n.useEffect)(() => {
            e.isError && o((0, c.Xx)(t));
          }, [o, e.isError, t]),
          { setErrorMessage: o }
        );
      }
      function Y(e) {
        const t = (0, a.bY)();
        return (0, s.useQuery)(
          v(e),
          () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              const o = r.gA.Init(l.Uf);
              o.Body().set_family_groupid(e);
              const i = yield l.s4.GetChangeLog(t, o);
              return h(i.GetEResult()), i.Body().changes();
            }),
          { staleTime: 0 },
        );
      }
      function T(e) {
        const t = (0, a.bY)();
        return (0, s.useQuery)(p(e), () =>
          (0, i.mG)(this, void 0, void 0, function* () {
            const o = r.gA.Init(d.AC);
            o.Body().set_gidshoppingcart(e);
            const i = yield d.FP.GetShoppingCartContents(t, o);
            return h(i.GetEResult()), i.Body();
          }),
        );
      }
      function L(e, t) {
        return `${y.De.STORE_BASE_URL}cart/?cart=${e}&fpr=1&prsi=${t}`;
      }
    },
    24448: (e, t, o) => {
      o.d(t, { Gr: () => _, Jq: () => v, y$: () => f });
      var i = o(33940),
        n = o(52868),
        r = o.n(n),
        s = o(59621),
        u = o(89526),
        a = o(4556),
        l = o(47165),
        c = o(23801),
        d = o(23217),
        y = o(32765);
      class m {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, s.rC)(this);
        }
        LoadProfiles(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0, c.X)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let o = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
            );
            if (0 == o.length) return this.m_mapProfilesLoading.get(e[0]);
            let i = y.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              n = r().get(i, {
                params: { steamids: o.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            o.forEach((e) => this.m_mapProfilesLoading.set(e, n));
            let s = yield n;
            s.data &&
              200 == s.status &&
              s.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = (0, a.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, a.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, a.U)(e.avatar_url)),
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
            l.K.InitFromAccountID(e).ConvertTo64BitString(),
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
            l.K.InitFromAccountID(e).ConvertTo64BitString(),
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
            ? y.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : y.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, i.gn)([s.LO], m.prototype, "m_mapProfiles", void 0);
      const f = new m();
      function _(e) {
        const t = u.useMemo(
            () => (e ? ("string" == typeof e ? new l.K(e) : e) : null),
            [e],
          ),
          [o, i] = (0, u.useState)(!!t && !f.BHasProfileBySteamID(t));
        (0, u.useEffect)(() => {
          const e = r().CancelToken.source();
          return (
            t &&
              !f.BHasProfileBySteamID(t) &&
              f
                .LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const o = (0, d.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      o.strErrorMsg,
                    o,
                  );
                })
                .finally(() => {
                  e.token.reason || i(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [o, !!t && f.GetProfileBySteamID(t)];
      }
      function v(e) {
        return _(u.useMemo(() => (e ? l.K.InitFromAccountID(e) : null), [e]));
      }
      window.g_ProfileStore = f;
    },
  },
]);
