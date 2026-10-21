/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [4874],
    {
      4874: (Ae, j, m) => {
        m.d(j, {
          BO: () => le,
          Bc: () => oe,
          DD: () => ne,
          Ee: () => Pe,
          HM: () => re,
          Hs: () => L,
          IN: () => Q,
          Ke: () => _e,
          QU: () => ue,
          Qn: () => me,
          RC: () => w,
          TI: () => te,
          Tv: () => Z,
          Vo: () => Fe,
          Ww: () => fe,
          Xq: () => qe,
          Y0: () => se,
          YW: () => Se,
          Yc: () => ye,
          _K: () => ae,
          eS: () => k,
          fO: () => Ge,
          gv: () => ve,
          lF: () => he,
          ll: () => ce,
          p8: () => Ee,
          tN: () => Me,
          v2: () => ie,
          vo: () => A,
          vu: () => Te,
          w1: () => Re,
          yM: () => Ce,
        });
        var d = m(90626),
          y = m(35038),
          q = m(80902),
          v = m(75233),
          g = m(51614),
          V = m(57168),
          f = m(42993),
          l = m(68312),
          c = m(72604),
          i = m(2289),
          I = m(27386),
          S = m(18210),
          Le = m(36053),
          K = m(98609),
          W = m(97996),
          M = m(96214),
          H = m(48473),
          N = m(20117);
        const R = (e, t) =>
            t === void 0
              ? ["get_family_group_for_user ", e]
              : ["get_family_group_for_user ", e, t],
          E = (e) => ["get_family_group", e],
          p = (e) => ["get_family_history", e],
          J = (e) => ["get_users_sharing_device", e],
          Y = (e) => ["get_shopping_cart_contents", e],
          $ = (e) => ["recent_playtime_sessions", e],
          z = (e) => ["get_playtime_summary", e],
          X = (e, t) => ["get_invite_check_results", e, t];
        function T(e, t, r) {
          return r
            ? ["get_purchase_requests", e, t, r]
            : t
              ? ["get_purchase_requests", e, t]
              : ["get_purchase_requests", e];
        }
        function u(e, t) {
          if (e != c.R) throw e;
        }
        const P = d.createContext({ staleTimeMs: 1 / 0 });
        function Z(e) {
          const { staleTimeMs: t, children: r } = e,
            s = d.useMemo(() => ({ staleTimeMs: t ?? 3e3 }), [t]);
          return d.createElement(P.Provider, { value: s }, r);
        }
        function A(e = !1) {
          return ee((0, f.LH)(), e);
        }
        function ee(e, t = !1) {
          const r = (0, l.KV)(),
            s = (0, d.useContext)(P).staleTimeMs;
          return (0, q.I)({
            queryKey: R(e, t),
            queryFn: async () => {
              const n = y.w.Init(i.Gt);
              n.Body().set_steamid(e),
                n.Body().set_include_family_group_response(t);
              const o = await i.Ex.GetFamilyGroupForUser(r, n);
              return u(o.GetEResult(), "GetFamilyGroupForUser"), o.Body();
            },
            staleTime: s,
            enabled: !!e,
            placeholderData: e ? void 0 : new i.yj(),
          });
        }
        function L(e) {
          const t = (0, l.KV)(),
            r = (0, d.useContext)(P).staleTimeMs;
          return (0, q.I)({
            queryKey: E(e),
            queryFn: async () => {
              if (e) {
                const s = y.w.Init(i.qb);
                s.Body().set_family_groupid(e);
                const n = await i.Ex.GetFamilyGroup(t, s);
                return u(n.GetEResult(), "GetFamilyGroup"), n.Body();
              } else throw c.p;
            },
            staleTime: r,
          });
        }
        function te() {
          const e = (0, l.KV)(),
            t = (0, v.jE)(),
            r = (0, f.LH)();
          return (0, g.n)({
            mutationFn: async (s) => {
              const n = y.w.Init(i.y0);
              n.Body().set_name(s);
              const o = await i.Ex.CreateFamilyGroup(e, n);
              return u(o.GetEResult(), "CreateFamilyGroup"), o.Body();
            },
            onSuccess: () => {
              t.invalidateQueries({ queryKey: R(r) });
            },
          });
        }
        function se(e) {
          const t = (0, l.KV)(),
            r = (0, v.jE)(),
            s = (0, f.LH)();
          return (0, g.n)({
            mutationFn: async () => {
              const n = y.w.Init(i.h);
              n.Body().set_family_groupid(e);
              const o = await i.Ex.DeleteFamilyGroup(t, n);
              return u(o.GetEResult(), "DeleteFamilyGroup"), o.Body();
            },
            onSuccess: () => {
              r.invalidateQueries({ queryKey: R(s) }),
                r.invalidateQueries({ queryKey: E(e) }),
                r.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function ne(e) {
          const t = (0, l.KV)(),
            r = (0, v.jE)();
          return (0, g.n)({
            mutationFn: async (s) => {
              const n = y.w.Init(i.YD);
              n.Body().set_family_groupid(e), n.Body().set_name(s);
              const o = await i.Ex.ModifyFamilyGroupDetails(t, n);
              return u(o.GetEResult(), "ModifyFamilyGroupDetails"), o.Body();
            },
            onSuccess: () => {
              r.invalidateQueries({ queryKey: E(e) }),
                r.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function re(e, t, r) {
          const s = (0, l.KV)(),
            n = (0, v.jE)();
          return (0, g.n)({
            mutationFn: async () => {
              const o = y.w.Init(i._Y);
              o.Body().set_family_groupid(e),
                o.Body().set_receiver_steamid(t),
                o.Body().set_receiver_role(r);
              const a = await i.Ex.InviteToFamilyGroup(s, o);
              return u(a.GetEResult(), "InviteToFamilyGroup"), a.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: R(t) }),
                n.invalidateQueries({ queryKey: E(e) }),
                n.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function oe(e) {
          const t = (0, l.KV)(),
            r = (0, f.LH)(),
            s = (0, v.jE)();
          return (0, g.n)({
            mutationFn: async () => {
              const n = y.w.Init(i.sv);
              n.Body().set_family_groupid(e);
              const o = await i.Ex.JoinFamilyGroup(t, n);
              return u(o.GetEResult(), "JoinFamilyGroup"), o.Body();
            },
            onSuccess: () => {
              s.invalidateQueries({ queryKey: R(r) }),
                s.invalidateQueries({ queryKey: E(e) }),
                s.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function ie(e, t) {
          const r = (0, l.KV)(),
            s = (0, v.jE)();
          return (0, g.n)({
            mutationFn: async () => {
              const n = y.w.Init(i.V1);
              n.Body().set_family_groupid(e), n.Body().set_steamid_to_cancel(t);
              const o = await i.Ex.CancelFamilyGroupInvite(r, n);
              return u(o.GetEResult(), "CancelFamilyGroupInvite"), o.Body();
            },
            onSuccess: () => {
              s.invalidateQueries({ queryKey: R(t) }),
                s.invalidateQueries({ queryKey: E(e) }),
                s.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function ae(e, t) {
          const r = (0, l.KV)(),
            s = (0, v.jE)();
          return (0, g.n)({
            mutationFn: async () => {
              const n = y.w.Init(i.Oe);
              n.Body().set_family_groupid(e), n.Body().set_steamid_to_remove(t);
              const o = await i.Ex.RemoveFromFamilyGroup(r, n);
              return u(o.GetEResult(), "RemoveFromFamilyGroup"), o.Body();
            },
            onSuccess: () => {
              s.invalidateQueries({ queryKey: R(t) }),
                s.invalidateQueries({ queryKey: E(e) }),
                s.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function ue(e) {
          const t = (0, l.KV)();
          return (0, q.I)({
            queryKey: J(e),
            queryFn: async () => {
              const r = (0, W.VY)("clientsessionid"),
                s = r && BigInt("0x" + r).toString(),
                n = y.w.Init(i.HP);
              n.Body().set_family_groupid(e),
                n.Body().set_client_instance_id(s ?? void 0);
              const o = await i.Ex.GetUsersSharingDevice(t, n);
              return u(o.GetEResult(), "GetUsersSharingDevice"), o.Body();
            },
          });
        }
        function ce(e) {
          const t = (0, f.LH)();
          return L(e)
            .data?.members()
            .find((s) => s.steamid() == t)
            ?.role();
        }
        function ye(e, t) {
          const r = (0, l.KV)();
          return (0, g.n)({
            mutationFn: async () => {
              const s = y.w.Init(i.Fk);
              s.Body().set_family_groupid(e),
                s.Body().set_use_account_cart(!0),
                s.Body().set_store_country_code(t);
              const n = await i.Ex.RequestPurchase(r, s);
              return u(n.GetEResult(), "RequestPurchase"), n.Body();
            },
          });
        }
        function le(e, t) {
          const r = (0, l.KV)(),
            s = (0, f.LH)();
          return (0, q.I)({
            queryKey: T(e, s),
            queryFn: async () => {
              const n = y.w.Init(i.K5);
              n.Body().set_family_groupid(e),
                t !== void 0 && n.Body().set_rt_include_completed_since(t);
              const o = await i.Ex.GetPurchaseRequests(r, n);
              return u(o.GetEResult(), "GetPurchaseRequests"), o.Body();
            },
          });
        }
        function me(e, t) {
          const r = (0, l.KV)(),
            s = (0, f.LH)();
          return (0, q.I)({
            queryKey: T(e, s, t),
            queryFn: async () => {
              const n = y.w.Init(i.K5);
              n.Body().set_family_groupid(e), n.Body().add_request_ids(t);
              const o = await i.Ex.GetPurchaseRequests(r, n);
              return u(o.GetEResult(), "GetPurchaseRequests"), o.Body();
            },
            select: (n) =>
              n.toObject().requests?.find(({ request_id: o }) => o === t),
          });
        }
        function _e(e, t, r) {
          const s = (0, l.KV)(),
            n = (0, v.jE)();
          return (0, g.n)({
            mutationFn: async () => {
              const o = y.w.Init(i.e$);
              o.Body().set_family_groupid(e),
                o.Body().set_request_id(t),
                o.Body().set_action(r);
              const a = await i.Ex.RespondToRequestedPurchase(s, o);
              return u(a.GetEResult(), "RespondToRequestedPurchase"), a.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: T(e) }),
                n.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        const Q = (0, d.createContext)({
          errorMessage: null,
          setErrorMessage: (e) => {},
        });
        function de(e, t) {
          return e;
        }
        var k = ((e) => (
          (e[(e.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (e[(e.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (e[(e.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (e[(e.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (e[(e.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (e[(e.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (e[(e.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (e[(e.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (e[(e.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (e[(e.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (e[(e.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (e[(e.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (e[(e.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (e[(e.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (e[(e.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (e[(e.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (e[(e.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite"),
          e
        ))(k || {});
        const D = {
          [c.nO]: "#FamilyManagement_ErrorInternalServerError",
          [c.zi]: "#FamilyManagement_ErrorInternalServerError",
          [c.S7]: "#FamilyManagement_ErrorInternalServerError",
          [c.Te]: "#FamilyManagement_ErrorInternalServerError",
          [c.sW]: "#FamilyManagement_AccessDenied",
          [c.p]: "#FamilyManagement_ErrorNoMatch",
          [c.uN]: "#FamilyManagement_ErrorAccountDisabled",
          [c.$U]: "#FamilyManagement_ErrorNoActiveInvite",
          [c.ZI]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [c.UT]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [c.TE]: "#FamilyManagement_ErrorLimitExceeded",
          [c.B1]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [c.Nb]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [c.h_]: { 5: "#FamilyManagement_RateLimitExceeded_CreateFamily" },
          [c.lG]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [c.zL]: { 2: "#FamilyManagement_Household_JoinFamily" },
          [c.iC]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [c.Ze]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [c.fb]: { 4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails" },
        };
        function pe(e, t, r, s) {
          let n = "";
          if (e in D) {
            const o = D[e];
            if (typeof o == "string") n = (0, S.we)(o, ...s);
            else {
              const a = o;
              r in a && (n = (0, S.we)(a[r], ...s));
            }
          }
          return de((0, S.we)(t, n), e);
        }
        function w() {
          const { setErrorMessage: e } = (0, d.useContext)(Q);
          return { setErrorMessage: e };
        }
        function ve(e, t, r) {
          const { setErrorMessage: s } = w(),
            { isError: n, error: o } = e,
            a = A();
          (0, d.useEffect)(() => {
            if (n) {
              const _ = o,
                F = [];
              if (_ === c.TE || _ === c.B1) {
                let B;
                a.isSuccess &&
                  a.data &&
                  (B = a.data.cooldown_seconds_remaining()),
                  F.push(ge(B));
              }
              s(pe(_, t, r, F));
            }
          }, [s, n, o, t, r, a.isSuccess, a.data]);
        }
        function ge(e) {
          if (!e) return (0, S.we)("#FamilyManagement_LoadingPlaceholder");
          const t = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return (0, S.TW)(Date.now() / 1e3 + e, t);
        }
        function Ee(e, t) {
          const { setErrorMessage: r } = w();
          (0, d.useEffect)(() => {
            e.isError && r((0, S.we)(t));
          }, [r, e.isError, t]);
        }
        function fe(e) {
          const t = (0, l.KV)();
          return (0, q.I)({
            queryKey: p(e),
            queryFn: async () => {
              const r = y.w.Init(i.pr);
              r.Body().set_family_groupid(e);
              const s = await i.Ex.GetChangeLog(t, r);
              return (
                u(s.GetEResult(), "GetFamilyGroupChangeLog"), s.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function Qe(e) {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: Y(e),
            queryFn: async () => {
              const r = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              r.Body().set_gidshoppingcart(e);
              const s = await ShoppingCartService.GetShoppingCartContents(t, r);
              return u(s.GetEResult(), "GetShoppingCartContents"), s.Body();
            },
          });
        }
        function ke(e) {
          const t = useActiveServiceTransport(),
            r = useQueryClient();
          return useMutation({
            mutationFn: async (s) => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              n.Body().set_family_groupid(e), n.Body().set_cooldown_count(s);
              const o =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(t, n);
              return u(o.GetEResult(), "SetFamilyCooldownOverrides"), o.Body();
            },
            onSuccess: () => {
              r.invalidateQueries({ queryKey: E(e) }),
                r.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function Re(e, t) {
          return `${K.TS.STORE_BASE_URL}cart/purchaserequest/${e}/${t}`;
        }
        function Fe(e) {
          return `${K.TS.STORE_BASE_URL}cart/purchaserequested/${e}`;
        }
        function De(e, t) {
          const r = useActiveServiceTransport(),
            s = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              n.Body().set_steamid(e), n.Body().set_name(t);
              const o = await FGS.FamilyGroupsService.CreateFamilyGroup(r, n);
              return (
                u(o.GetEResult(), "ForceCreateFamilyGroup"),
                o.Body().family_groupid()
              );
            },
            onSuccess: () => {
              s.invalidateQueries({ queryKey: R(e) });
            },
          });
        }
        function x(e, t, r, s) {
          return [
            "get_shared_library_apps",
            e,
            t?.bIncludeOwn,
            t?.bIncludeExcluded,
            t?.bIncludeNonGames,
            t?.for_account_id,
            r,
            s,
          ];
        }
        function Ce(e, t) {
          const r = (0, f.LH)(),
            { settings: s, mapAppsAllowed: n } = (0, M.S0)(r).data,
            o = (0, M.BM)(),
            a = (0, l.KV)(),
            {
              bIncludeOwn: _,
              bIncludeExcluded: F,
              bIncludeNonGames: B,
              for_account_id: G,
            } = t ?? {},
            we = t?.enabled !== void 0 ? t.enabled : !0,
            Oe = x(e, t, s, o),
            Ie = (C) => !(0, M.or)(C.appid(), o, s, n);
          return (0, q.I)({
            queryKey: Oe,
            queryFn: async () => {
              const C = y.w.Init(i.xy);
              if (
                (C.Body().set_family_groupid(e),
                C.Body().set_include_own(_),
                C.Body().set_include_excluded(F),
                C.Body().set_language(K.TS.LANGUAGE),
                C.Body().set_include_non_games(B),
                G)
              ) {
                const O = N.b2.InitFromAccountID(G, K.TS.EUNIVERSE);
                C.Body().set_steamid(O.ConvertTo64BitString());
              }
              const b = await i.Ex.GetSharedLibraryApps(a, C);
              return (
                u(b.GetEResult(), "GetSharedLibraryApps"),
                b
                  .Body()
                  .apps()
                  .filter(Ie)
                  .map((O) => O.toObject())
              );
            },
            enabled: !!s && we,
            placeholderData: V.rX,
            select: t?.select,
          });
        }
        function qe(e, t) {
          const r = (0, v.jE)(),
            s = (0, f.LH)(),
            { settings: n } = (0, M.S0)(s).data ?? {},
            o = (0, M.BM)(),
            a = x(e, t, n, o);
          return (0, d.useCallback)(() => {
            r.invalidateQueries({ queryKey: a });
          }, [r, a]);
        }
        function h(e, t) {
          let r = e.sort_as || e.name,
            s = t.sort_as || t.name;
          return (0, H.lY)(r, s);
        }
        function U(e, t) {
          return t.rt_time_acquired - e.rt_time_acquired || h(e, t);
        }
        function Be(e, t, r) {
          if (!e && t.length === 0) return !0;
          const s = r.name?.toLocaleLowerCase(),
            n = e.toLocaleLowerCase(),
            o = s?.includes(n) || r.appid?.toString() == n;
          let a = !0;
          if (r.content_descriptors) {
            for (const _ of t)
              if (!r.content_descriptors.includes(_)) {
                a = !1;
                break;
              }
          }
          return o && a;
        }
        function Se(e, t, r, s = []) {
          const n = (0, d.useMemo)(
              () => e?.filter((a) => Be(r, s, a)) || [],
              [e, r, s],
            ),
            o = (0, d.useCallback)(
              (a, _) => {
                let F = h;
                switch (t) {
                  case "alpha-asc":
                    F = h;
                    break;
                  case "alpha-desc":
                    F = (B, G) => h(G, B);
                    break;
                  case "date_acquired-asc":
                    F = (B, G) => U(G, B);
                    break;
                  case "date_acquired-desc":
                    F = U;
                    break;
                }
                return F(a, _);
              },
              [t],
            );
          return (0, d.useMemo)(() => n.slice().sort(o), [n, o]);
        }
        function Ge(e, t) {
          const r = (0, l.KV)(),
            s = (0, v.jE)(),
            n = (0, f.LH)();
          return (0, g.n)({
            mutationFn: async (o) => {
              const a = y.w.Init(i.GF);
              a.Body().set_family_groupid(e),
                a.Body().set_invite_id(t),
                a.Body().set_nonce(o);
              const _ = await i.Ex.ConfirmJoinFamilyGroup(r, a);
              return u(_.GetEResult(), "ConfirmJoinFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              s.invalidateQueries({ queryKey: R(n) }),
                s.invalidateQueries({ queryKey: E(e) }),
                s.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function Me(e, t, r) {
          const s = (0, l.KV)(),
            n = (0, v.jE)();
          return (0, g.n)({
            mutationFn: async () => {
              const o = y.w.Init(i.U6);
              o.Body().set_family_groupid(e),
                o.Body().set_invite_id(t),
                o.Body().set_nonce(r);
              const a = await i.Ex.ConfirmInviteToFamilyGroup(s, o);
              return u(a.GetEResult(), "ConfirmInviteToFamilyGroup"), a.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: E(e) }),
                n.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function xe(e, t) {
          const r = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const s = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              s.Body().set_family_groupid(e), s.Body().set_steamid(t);
              const n =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  r,
                  s,
                );
              return u(n.GetEResult(), "ResendInvitationToFamilyGroup"), n;
            },
          });
        }
        function Ke(e) {
          let t = [];
          e.sort((s, n) => s.time_start - n.time_start);
          let r = new Map();
          for (const s of e) {
            let n = r.get(s.appid);
            n === void 0
              ? r.set(s.appid, s)
              : s.time_start <= n.time_end
                ? (n.time_end = Math.max(n.time_end, s.time_end))
                : (t.push(n), r.set(s.appid, s));
          }
          for (const s of r.values()) t.push(s);
          return t.sort((s, n) => s.time_start - n.time_start), t;
        }
        function he(e) {
          const t = (0, l.KV)();
          return (0, q.I)({
            queryKey: $(e),
            queryFn: async () => {
              const r = y.w.Init(I.m8g);
              r.Body().set_steamid(e);
              const s = await I.xtC.GetRecentPlaytimeSessionsForChild(t, r);
              u(s.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let n = s.Body().toObject().sessions || [];
              return Ke(n);
            },
          });
        }
        function Ue(e) {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: z(e),
            queryFn: async () => {
              const r = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              r.Body().set_family_groupid(e);
              const s = await FGS.FamilyGroupsService.GetPlaytimeSummary(t, r);
              u(s.GetEResult(), "GetPlaytimeSummary");
              let n = s.Body().toObject().entries ?? [];
              n.sort((a, _) => _.seconds_played - a.seconds_played);
              let o = s.Body().toObject().entries_by_owner ?? [];
              return (
                o.sort((a, _) => _.seconds_played - a.seconds_played),
                { borrowed: n, loaned: o }
              );
            },
            enabled: e !== "0",
          });
        }
        function Te(e) {
          const t = (0, l.KV)(),
            r = (0, f.LH)(),
            s = (0, v.jE)();
          return (0, g.n)({
            mutationFn: async () => {
              const n = y.w.Init(i.cl);
              n.Body().set_family_groupid(e);
              const o = await i.Ex.UndeleteFamilyGroup(t, n);
              return u(o.GetEResult(), "UndeleteFamilyGroup"), o;
            },
            onSuccess: () => {
              s.invalidateQueries({ queryKey: R(r) }),
                s.invalidateQueries({ queryKey: E(e) }),
                s.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function be(e, t) {
          const r = useActiveServiceTransport(),
            s = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              n.Body().set_family_groupid(e), n.Body().set_steamid(t);
              const o = await FGS.FamilyGroupsService.ForceAcceptInvite(r, n);
              return u(o.GetEResult(), "ForceAcceptInvite"), null;
            },
            onSuccess: () => {
              s.invalidateQueries({ queryKey: R(t) }),
                s.invalidateQueries({ queryKey: E(e) }),
                s.invalidateQueries({ queryKey: p(e) });
            },
          });
        }
        function je(e, t) {
          const r = useActiveServiceTransport();
          return useQuery({
            queryKey: X(e, t),
            queryFn: async () => {
              const s = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              s.Body().set_family_groupid(e), s.Body().set_steamid(t);
              const n = await FGS.FamilyGroupsService.GetInviteCheckResults(
                r,
                s,
              );
              return (
                u(n.GetEResult(), "GetInviteCheckResults"), n.Body().toObject()
              );
            },
          });
        }
        function Pe(e, t) {
          return e.members().find((r) => r.steamid() == t);
        }
      },
    },
  ]);
})();
