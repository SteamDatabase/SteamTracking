/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [20976],
    {
      55483: (V, z, d) => {
        "use strict";
        d.d(z, {
          yT: () => A,
          MR: () => L,
          AB: () => jt,
          Rc: () => bt,
          Gt: () => mt,
          ko: () => It,
          fy: () => Dt,
          ec: () => $,
          aA: () => Nt,
          TB: () => ft,
          W$: () => W,
        });
        var t = d(99412),
          v = d(76559),
          F = d(75233),
          E = d(80902),
          x = d(72604),
          U = d(72609);
        async function G(l) {
          const _ = `${U.TS.COMMUNITY_BASE_URL}ogg/${l}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return M(_);
        }
        async function Q(l) {
          const _ = v.b.InitFromClanID(l),
            C = `${U.TS.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return M(C);
        }
        async function H(l) {
          const _ = `${U.TS.COMMUNITY_BASE_URL}groups/${l}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return M(_);
        }
        async function y(l) {
          const _ = `${U.TS.COMMUNITY_BASE_URL}games/${l}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return M(_);
        }
        async function M(l) {
          const _ = await fetch(l, { method: "GET" });
          if (_.status == 404) return null;
          if (!_.ok) throw new Error(`Server returned ${_.status}`);
          const C = await _.json();
          return C.success != x.R ? null : C;
        }
        function N(l) {
          return ["clantoclaninfo", l];
        }
        function g(l) {
          return ["apptoclanid", l];
        }
        function s(l, _ = "group") {
          return ["vanitytoclanid", _, l?.toLocaleLowerCase()];
        }
        function A(l) {
          const _ = l?.[0];
          return (
            _ == "clantoclaninfo" || _ == "apptoclanid" || _ == "vanitytoclanid"
          );
        }
        const X = new WeakSet();
        function ct(l) {
          if (!X.has(l)) {
            X.add(l);
            for (const _ of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              l.setQueryDefaults(_, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const w = new WeakMap();
        function O(l) {
          if (!l) return null;
          let _ = w.get(l);
          return (
            _ ||
              ((_ = {
                ...l,
                clanSteamID: l.clanSteamIDString
                  ? new v.b(l.clanSteamIDString)
                  : v.b.InitFromClanID(l.clanAccountID),
              }),
              w.set(l, _)),
            _
          );
        }
        function ut(l) {
          const { msg: _, success: C, ...lt } = l;
          return {
            ...lt,
            rss_language: l.rss_language ? l.rss_language : t.Bhc,
          };
        }
        function Z(l, _) {
          if (!_) return null;
          ct(l);
          const C = ut(_);
          return (
            l.setQueryData(N(C.clanAccountID), C),
            C.appid && l.setQueryData(g(C.appid), C.clanAccountID),
            C.vanity_url &&
              l.setQueryData(s(C.vanity_url, "group"), C.clanAccountID),
            C
          );
        }
        function Nt(l, _) {
          for (const C of _) Z(l, C);
        }
        function ft(l) {
          const _ = (0, F.jE)();
          return (0, E.I)($(l, _));
        }
        function $(l, _) {
          return (
            ct(_),
            {
              queryKey: N(l ?? null),
              queryFn: async () => (l ? Z(_, await Q(l)) : null),
              enabled: l !== void 0,
              select: O,
            }
          );
        }
        function _t(l, _) {
          return (
            ct(_),
            {
              queryKey: g(l),
              queryFn: async () => Z(_, await G(l))?.clanAccountID ?? null,
              enabled: !!l,
            }
          );
        }
        function yt(l, _, C = "group") {
          return (
            ct(_),
            {
              queryKey: s(l, C),
              queryFn: async () => {
                if (C == "store") {
                  const Y = _.getQueryData(s(l, "group"));
                  if (Y) return Y;
                }
                const lt = C == "store" ? await y(l) : await H(l);
                return Z(_, lt)?.clanAccountID ?? null;
              },
              enabled: !!l,
            }
          );
        }
        function S(l) {
          return l.isPending ? void 0 : (l.data ?? null);
        }
        function u(l) {
          return ft(l.BIsClanAccount() ? l.GetAccountID() : void 0);
        }
        function P(l) {
          const _ = useQueryClient(),
            C = useQuery(_t(l, _));
          return ft(l ? S(C) : void 0);
        }
        function W(l, _ = "group") {
          const C = (0, F.jE)(),
            lt = (0, E.I)(yt(l, C, _));
          return ft(l ? S(lt) : void 0);
        }
        function mt(l, _) {
          if (l) return O(_.getQueryData(N(l))) ?? void 0;
        }
        function It(l, _) {
          if (l) return mt(_.getQueryData(g(l)), _);
        }
        function Dt(l, _, C) {
          if (!l) return;
          const lt = C ? [C] : ["store", "group"];
          for (const Y of lt) {
            const St = mt(_.getQueryData(s(l, Y)), _);
            if (St) return St;
          }
        }
        async function L(l, _) {
          return l ? O(await _.fetchQuery($(l, _))) : null;
        }
        async function jt(l, _) {
          return l ? L(await _.fetchQuery(_t(l, _)), _) : null;
        }
        async function bt(l, _, C = "group") {
          return l ? L(await _.fetchQuery(yt(l, _, C)), _) : null;
        }
      },
      15860: (V, z, d) => {
        "use strict";
        d.d(z, { L: () => U, c: () => x });
        var t = d(27386),
          v = d(76617),
          F = d(58632),
          E = d.n(F);
        function x(G, Q) {
          return new (E())(
            async (H) => {
              const y = [...H],
                M = await t.xtC.GetPlayerLinkDetails(G, { steamids: y }),
                N = new Map();
              return (
                M.Body()
                  .accounts()
                  .forEach((g) => {
                    const s = g.toObject();
                    N.set(s.public_data.steamid, s);
                  }),
                y.map((g) => N.get(g) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...Q },
          );
        }
        function U(G) {
          return (0, v.V)("PlayerLinkDetails", () => x(G));
        }
      },
      24525: (V, z, d) => {
        "use strict";
        d.d(z, { $e: () => v, B7: () => E, Pe: () => O, Pv: () => F });
        const t = 0,
          v = 1,
          F = 2,
          E = 4,
          x = 8,
          U = 16,
          G = 32,
          Q = 64,
          H = 128,
          y = 256,
          M = 512,
          N = 1024,
          g = 2048,
          s = 4096,
          A = 8192,
          X = 16384,
          ct = 32768,
          w = 65536,
          O = 1073741824,
          ut = null;
      },
      76617: (V, z, d) => {
        "use strict";
        d.d(z, { V: () => Q });
        function t(H) {
          return Object.prototype.toString.call(H) === "[object Object]";
        }
        function v(H) {
          if (!t(H)) return !1;
          const y = H.constructor;
          if (typeof y > "u") return !0;
          const M = y.prototype;
          return !(
            !t(M) || !Object.prototype.hasOwnProperty.call(M, "isPrototypeOf")
          );
        }
        function F(...H) {
          return JSON.stringify(H, (y, M) => {
            if (v(M)) {
              const N = {};
              return (
                Object.keys(M)
                  .sort()
                  .forEach((g) => {
                    N[g] = M[g];
                  }),
                N
              );
            }
            return M;
          });
        }
        var E = d(90626),
          x = d(7850);
        const U = (0, E.createContext)({ instances: {}, factories: {} });
        function G(H) {
          const { name: y, fnFactory: M, children: N } = H,
            g = React.useContext(U),
            [s] = useState({}),
            A = useMemo(
              () => ({
                instances: s,
                factories: { ...g.factories, [y]: M },
                parent: g,
              }),
              [s, y, g],
            );
          return jsx(U.Provider, { value: A, children: N });
        }
        function Q(H, y) {
          const M = (0, E.useContext)(U),
            N = typeof H == "string" ? H : F(...H);
          let g = M;
          for (; g; ) {
            if (N in g.instances) return g.instances[N];
            if (N in g.factories) break;
            g = g.parent;
          }
          const A = (g?.factories[N] ?? y)();
          return ((g ?? M).instances[N] = A), A;
        }
      },
      67529: (V, z, d) => {
        "use strict";
        d.d(z, { IU: () => H, by: () => y, sc: () => x });
        var t = d(3166),
          v = d(35413),
          F = d(71742),
          E = d(24525);
        const x = 0,
          U = "061818254b2c99ac49e6626adb128ed1282a392f",
          G = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          Q = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          H = 120;
        class y {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(g) {
            this.m_unAppID = g;
          }
          get appid() {
            return this.m_unAppID;
          }
          get is_initialized() {
            return this.m_bInitialized;
          }
          get is_valid() {
            return this.m_bInitialized && !!this.m_strName;
          }
          get name() {
            return this.m_strName;
          }
          get icon_url_no_default() {
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, U);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, U);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == E.B7 || this.apptype == E.Pv;
          }
          BuildAppURL(g, s) {
            return g
              ? t.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  g +
                  ".jpg"
              : (0, v.t)(s);
          }
          DeserializeFromMessage(g) {
            (this.m_bInitialized = !0),
              (this.m_strName = g.name()),
              (this.m_strIconURL = g.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = g.app_type());
          }
          DeserializeFromAppOverview(g) {
            g.icon_hash() && g.app_type() != E.Pe
              ? ((this.m_bInitialized = !0),
                (this.m_strName = g.display_name()),
                (this.m_strIconURL = g.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = g.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(g) {
            try {
              (this.m_strName = g.strName),
                (this.m_strIconURL = g.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(g.strUpdatedFromServer)),
                (this.m_eAppType = g.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, F.wT)(
                this.m_bInitialized,
                "Attempting to serialize an uninitialized AppInfo object for caching!",
              ),
              this.m_bInitialized
                ? {
                    strName: this.m_strName,
                    strIconURL: this.m_strIconURL,
                    strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                    eAppType: this.m_eAppType,
                  }
                : null
            );
          }
        }
        class M {}
      },
      35413: (V, z, d) => {
        "use strict";
        d.d(z, { d: () => v, t: () => F });
        var t = d(3166);
        const v = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function F(E, x) {
          let U = ".jpg";
          (!E || E === "0000000000000000000000000000000000000000") && (E = v),
            E.length == 44 && ((U = E.substr(-4)), (E = E.substr(0, 40)));
          let G = t.TS.AVATAR_BASE_URL;
          return (
            G ||
              ((G = t.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (G += E.substr(0, 2) + "/")),
            (G += E),
            x && x != "small" && (G += "_" + x),
            (G += U),
            G
          );
        }
      },
      813: (V, z, d) => {
        "use strict";
        d.d(z, { $5: () => Z, TB: () => ut, ac: () => w });
        var t = d(40497),
          v = d(75233),
          F = d(14947),
          E = d(90626),
          x = d(76559),
          U = d(71742),
          G = d(3166),
          Q = d(60480),
          H = d(33512),
          y = d(55483),
          M = d(77291);
        const N = new WeakSet();
        function g(S = t.L) {
          if (typeof window > "u" || typeof document > "u" || N.has(S)) return;
          const u = (0, G.Fd)("groupvanityinfo", "application_config");
          (u === void 0 && document.readyState != "complete") ||
            (N.add(S), s(u) && (0, y.aA)(S, u));
        }
        function s(S) {
          const u = S;
          return u &&
            Array.isArray(u) &&
            u.length > 0 &&
            typeof u[0] == "object"
            ? typeof u[0].clanAccountID == "number" &&
                (typeof u[0].appid == "number" ||
                  typeof u[0].vanity_url == "string")
            : !1;
        }
        function A(S) {
          return typeof S == "string" ? parseInt(S) : S;
        }
        function X(S) {
          return typeof S == "string" ? Number.parseInt(S) : S;
        }
        class ct {
          m_queryClient = t.L;
          m_boxCacheVersion = F.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            g(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((u) => {
                  (u?.type != "added" &&
                    u?.type != "updated" &&
                    u?.type != "removed") ||
                    ((0, y.yT)(u.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, F.h5)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(u) {
            this.LazyInit(), s(u) && (0, y.aA)(this.m_queryClient, u);
          }
          BHasClanInfoLoaded(u) {
            return (
              (0, U.wT)(
                u.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, U.wT)(
                u.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(u.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(u) {
            return !!(0, y.Gt)(X(u), this.ReadCache());
          }
          RegisterClanData(u) {
            this.LazyInit(), (0, y.aA)(this.m_queryClient, u);
          }
          async LoadOGGClanInfoForAppID(u) {
            return (
              this.LazyInit(),
              (u = A(u)),
              (0, U.wT)(
                u != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              u == 0 ? null : (0, y.AB)(u, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(u) {
            return this.LazyInit(), (0, y.Rc)(u, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(u) {
            return this.LazyInit(), (0, y.Rc)(u, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(u) {
            return this.LoadClanInfoForClanAccountID(u.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(u) {
            return this.LazyInit(), (0, y.MR)(X(u), this.m_queryClient);
          }
          GetOGGClanInfo(u) {
            const P = this.ReadCache();
            return typeof u == "string" ? (0, y.fy)(u, P) : (0, y.ko)(u, P);
          }
          GetClanSteamIDForAppID(u) {
            const P = (0, y.ko)(A(u), this.ReadCache());
            return P ? x.b.InitFromClanID(P.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(u) {
            return (0, y.ko)(A(u), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(u) {
            return (0, y.Gt)(u.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(u) {
            return this.BHasClanInfoLoadedByAccountID(u);
          }
          GetClanMemberCount(u) {
            return (0, y.ko)(A(u), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(u) {
            return (
              (0, U.wT)(
                !!u,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, y.Gt)(X(u), this.ReadCache())
            );
          }
          GetCreatorStoreURL(u) {
            let P = Q.pF.GetCreatorHome(u);
            if (P) return P.GetCreatorHomeURL("developer");
            let W = this.GetClanInfoByClanAccountID(u.GetAccountID());
            return (
              G.TS.COMMUNITY_BASE_URL +
              (W.vanity_url
                ? "groups/" + W.vanity_url
                : "gid/" + u.ConvertTo64BitString())
            );
          }
        }
        const w = new ct();
        (0, M.V)("g_ClanStore", w);
        function O() {
          const S = (0, v.jE)();
          return g(S), S;
        }
        function ut(S) {
          O();
          const { data: u, isPending: P } = (0, y.TB)(S ? X(S) : void 0);
          return [!!S && P, u ?? void 0];
        }
        function Z(S) {
          const u = O();
          (0, E.useEffect)(() => {
            S &&
              (0, y.MR)(X(S), u).catch((P) =>
                console.error(`Failed to hint load clan info ${S}`, P),
              );
          }, [S, u]);
        }
        function Nt(S) {
          return O(), useClanInfoByVanityQuery(S).data ?? null;
        }
        function ft(S) {
          O();
          const u = S ? A(S) : void 0,
            { data: P, isPending: W } = useClanInfoByAppIDQuery(u);
          return { bLoadingClanInfo: !!u && W, clanInfo: P ?? null };
        }
        function $(S, u) {
          if (S.BIsOGGEvent()) return { bVisible: !1 };
          if (S.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (S.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            S.jsondata.clone_from_event_gid &&
            S.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (S.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const W = g_CreatorHomeStore.GetCreatorHome(S.clanSteamID);
          return W &&
            W.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : u
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function _t(S, u) {
          return S.BIsOGGEvent()
            ? S.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : u
                  ? S.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function yt(S) {
          return S.BIsOGGEvent()
            ? { bVisible: !1 }
            : S.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : S.BHasSaleEnabled()
                ? { bVisible: !0 }
                : S.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      45404: (V, z, d) => {
        "use strict";
        d.r(z),
          d.d(z, {
            GreenEnvelope: () => Ft,
            default: () => Me,
            useSteamNotifications: () => At,
          });
        var t = d(7850),
          v = d(99412),
          F = d(79365),
          E = d(65946),
          x = d(90626),
          U = d(42993),
          G = d(96214),
          Q = d(68312),
          H = d(16346),
          y = d(84750),
          M = d(56718),
          N = d(36118),
          g = d(36707),
          s = d(18210),
          A = d(98609),
          X = d(25792),
          ct = d(29553),
          w = d.n(ct),
          O = d(48453),
          ut = d(76559);
        function Z(e) {
          if (!e) return;
          const n = typeof e == "string" ? e : e.locString,
            i = typeof e == "string" ? [] : e.params || [];
          if (n) return n[0] !== "#" ? n : (0, s.we)(n, ...i);
        }
        function Nt(e, n) {
          return x.useMemo(() => {
            if (e === void 0) return null;
            let i = (0, y.K9)(e);
            const a = (0, y.u5)(n);
            if (!i || !a) return null;
            const r =
                typeof i.displayNameLoc != "function"
                  ? { locString: i.displayNameLoc }
                  : i.displayNameLoc(a),
              m =
                typeof i.titleLoc != "function"
                  ? { locString: i.titleLoc }
                  : i.titleLoc(a),
              o =
                typeof i.bodyLoc != "function"
                  ? { locString: i.bodyLoc }
                  : i.bodyLoc(a),
              c = typeof i.image != "function" ? i.image : i.image(a),
              f = typeof i.link != "function" ? i.link : i.link(a);
            return {
              display_name: Z(r),
              title: Z(m),
              body: Z(o),
              image: c,
              link: f,
            };
          }, [n, e]);
        }
        function ft(e, n) {
          return x.useMemo(() => {
            const i = e,
              a = (0, y.aq)(i),
              r = (0, y.u5)(n);
            if (!a) return null;
            const m =
                typeof a.titleLoc == "string" ? a.titleLoc : a.titleLoc(r),
              o = typeof a.bodyLoc == "string" ? a.bodyLoc : a.bodyLoc(r),
              c = typeof a.url == "string" ? a.url : a.url(r),
              f =
                typeof a.steamidAttribute == "string"
                  ? a.steamidAttribute
                  : a.steamidAttribute(r),
              p = r && r[f];
            return { strTitleLoc: m, strBodyLoc: o, strUrl: c, steamid: p };
          }, [n, e]);
        }
        function $(e) {
          return x.useMemo(
            () => ((0, y.V4)(e.type) ? (0, y.bP)(e) : null),
            [e],
          );
        }
        var _t = d(87910),
          yt = d.n(_t),
          S = d(51079),
          u = d(72865),
          P = d(35098),
          W = d(19298),
          mt = d(92264),
          It = d(36174),
          Dt = d(93761),
          L = d.n(Dt);
        const jt = !0;
        function bt(e) {
          let {
              onActivate: n,
              icon: i,
              body: a,
              eUIMode: r,
              classNames: m,
            } = e,
            o = n,
            c = L().PinnedTemplate;
          return (
            r == v.ogI
              ? (c = L().PinnedTemplateDesktop)
              : r == v.yrU && (c = L().PinnedTemplateWeb),
            (c = (0, g.A)(c, m)),
            (0, t.jsx)(W.Z, {
              className: c,
              onActivate: o,
              children: (0, t.jsx)("div", {
                className: L().Content,
                children: (0, t.jsxs)("div", {
                  className: L().PinnedBody,
                  children: [
                    (0, t.jsx)("span", { className: L().Icon, children: i }),
                    a,
                  ],
                }),
              }),
            })
          );
        }
        function l(e) {
          const {
            count: n,
            icon: i,
            onActivate: a,
            strBody: r,
            bAlwaysShow: m,
            eUIMode: o,
            classNames: c,
            visible: f,
          } = e;
          return !n && !m
            ? null
            : (0, t.jsx)(bt, {
                icon: i,
                body: r,
                onActivate: a,
                eUIMode: o,
                classNames: c,
                visible: f,
              });
        }
        var _ = ((e) => (
          (e[(e.none = 0)] = "none"),
          (e[(e.loadingActive = 1)] = "loadingActive"),
          (e[(e.loadingComplete = 2)] = "loadingComplete"),
          e
        ))(_ || {});
        function C(e) {
          let {
            nUnread: n,
            location: i,
            eUIMode: a,
            bLoading: r,
            footer: m,
            bNewIndicator: o,
          } = e;
          const [c, f] = x.useState(r ? 1 : 0),
            [p, h] = x.useState(void 0);
          x.useEffect(() => {
            c == 1 && !r ? f(2) : c == 2 && r && f(1);
          }, [c, r]),
            x.useEffect(() => {
              let B =
                parseInt(L().loadinganimationiterationcount) *
                parseInt(L().loadinganimationduration) *
                1e3;
              const b = window.setTimeout(() => f(0), B);
              return () => window.clearTimeout(b);
            }, []),
            x.useEffect(() => {
              n && n > 0 && p !== L().Unread && i != v.miK && i != v.PN1
                ? h(L().Unread)
                : !n && p == L().Unread && h(L().MarkedRead);
            }, [n, i, p]);
          let I = e.onActivate;
          I || (I = () => console.log("Missing activate function")),
            c == 1 && (I = void 0);
          let T = L().StandardTemplate;
          i == v.oYe
            ? (T = L().AllNotificationsTemplate)
            : i == v.miK
              ? (T = L().DesktopToastTemplate)
              : (a == v.ogI || a == v.yrU) && (T = L().StandardTemplateDesktop);
          let D = null;
          if (c != 0 && i != v.miK && i != v.PN1) {
            let B = c == 2 ? L().Hide : null;
            D = (0, t.jsxs)("div", {
              className: (0, g.A)(L().LoadingTemplate, B),
              children: [
                (0, t.jsx)("div", {
                  className: (0, g.A)(
                    L().StandardLogoDimensions,
                    L().ShimmerLogo,
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: L().Content,
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, g.A)(L().Header, L().ShimmerHeader),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, g.A)(L().Body, L().ShimmerBody),
                    }),
                  ],
                }),
              ],
            });
          }
          return (0, t.jsxs)(W.Z, {
            onActivate: I,
            className: L().StandardTemplateContainer,
            onOptionsButton: e.onOptionsButton,
            onOptionsActionDescription: e.onOptionsButtonDesc,
            children: [
              (0, t.jsxs)("div", {
                className: (0, g.A)(T, p),
                children: [
                  (0, t.jsx)("div", {
                    className: L().StandardLogoDimensions,
                    children: e.logo,
                  }),
                  e.personaStatus &&
                    (0, t.jsx)("div", {
                      className: (0, g.A)(L().AvatarStatus, e.personaStatus),
                    }),
                  (0, t.jsx)("div", {
                    className: L().Content,
                    children: e.children,
                  }),
                  D,
                  o && (0, t.jsx)(lt, { location: i }),
                ],
              }),
              m || null,
            ],
          });
        }
        function lt(e) {
          const { location: n } = e;
          return !jt || n != v.B3I
            ? null
            : (0, t.jsx)("div", {
                className: L().NewIndicator,
                children: (0, t.jsx)(N.jlt, {}),
              });
        }
        function Y(e) {
          let {
            icon: n,
            title: i,
            timestamp: a,
            location: r,
            fnRenderTimestamp: m,
          } = e;
          const o = !!a && (r == v.B3I || r == v.oYe);
          let c;
          return (
            r == v.oYe ? (c = Kt) : (c = m ?? zt),
            (0, t.jsxs)("div", {
              className: L().Header,
              children: [
                (0, t.jsx)(St, { icon: n }),
                !!i && (0, t.jsx)(Vt, { title: i }),
                o && c({ timestamp: a }),
              ],
            })
          );
        }
        function St(e) {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !!e.icon &&
                (0, t.jsx)("div", { className: L().Icon, children: e.icon }),
              " ",
            ],
          });
        }
        function Vt(e) {
          return (0, t.jsx)("div", { className: L().Title, children: e.title });
        }
        function q(e) {
          let n = (0, g.A)(
            L().StandardNotificationDescription,
            e.multiline && L().Multiline,
          );
          return (0, t.jsx)("div", { className: n, children: e.children });
        }
        function tt(e) {
          let n = (0, g.A)(
            L().StandardNotificationSubText,
            e.multiline && L().Multiline,
          );
          return (0, t.jsx)("div", { className: n, children: e.children });
        }
        function Kt(e) {
          if (e.timestamp === void 0) return null;
          let n = new Date(),
            i = new Date(e.timestamp * 1e3),
            a = (0, mt.KC)(e.timestamp);
          return (
            (0, It.JD)(n, i) ||
              (a = (0, mt._l)(e.timestamp, !1, !1, !1) + " " + a),
            (0, t.jsx)("div", { className: L().Timestamp, children: a })
          );
        }
        function zt(e) {
          if (e.timestamp === void 0) return null;
          let n = new Date(),
            i = new Date(e.timestamp * 1e3),
            a = (0, It.JD)(n, i)
              ? (0, mt.KC)(e.timestamp)
              : (0, mt._l)(e.timestamp, !1, !1, !1);
          return (0, t.jsx)("div", { className: L().Timestamp, children: a });
        }
        function Re(e) {
          const { text: n } = e;
          return jsx("div", { className: styles.BottomBar, children: n });
        }
        function Ge(e) {
          let {
              playerName: n,
              nickName: i,
              parenthesizeNickNames: a,
              state: r,
            } = e,
            m = !!i,
            o = m && !a,
            c = o ? i : n,
            f = r == "ingame" ? styles.IngameTitle : styles.OnlineTitle;
          return jsxs(Fragment, {
            children: [
              jsx("span", { className: classnames(f), children: c }),
              a &&
                m &&
                jsxs("span", {
                  className: classnames(styles.PlayerNickName, styles.FullName),
                  children: ["(", i, ")"],
                }),
              o &&
                jsx("span", {
                  className: styles.PlayerNickName,
                  children: " *",
                }),
            ],
          });
        }
        var wt = d(25236),
          vt = d(68495),
          Pt = d(3166);
        function et(e) {
          return e == v.PN1;
        }
        function Yt(e, n) {
          return x.useCallback(
            (i) => {
              e && e(i), n && n();
            },
            [e, n],
          );
        }
        var Qt = d(97786),
          nt = d.n(Qt);
        function it(e) {
          let {
              onActivate: n,
              onDismiss: i,
              logo: a,
              icon: r,
              title: m,
              body: o,
              personaStatus: c,
              className: f,
              singleLineOnly: p,
              fullWidth: h,
            } = e,
            I = Yt(n, i),
            T = (D) => {
              D.button == 1 && i && i();
            };
          return (0, t.jsxs)(W.Z, {
            className: (0, g.A)(nt().ShortTemplate, !p && nt().TwoLine, f),
            onActivate: I,
            onMouseDown: T,
            children: [
              (0, t.jsx)("div", {
                className: nt().ShortLogoDimensions,
                children: a,
              }),
              e.personaStatus &&
                (0, t.jsx)("div", {
                  className: (0, g.A)(nt().AvatarStatus, c),
                }),
              (0, t.jsxs)("div", {
                className: (0, g.A)(nt().Content, h && nt().FullWidth),
                children: [
                  (0, t.jsxs)("div", {
                    className: nt().Header,
                    children: [
                      !!r &&
                        (0, t.jsx)("div", {
                          className: nt().Icon,
                          children: r,
                        }),
                      (0, t.jsx)("div", { className: nt().Title, children: m }),
                    ],
                  }),
                  (0, t.jsx)("div", { className: nt().Body, children: o }),
                ],
              }),
            ],
          });
        }
        var $t = d(92012),
          K = d.n($t),
          Xt = d(813),
          J = d(40358),
          Jt = d(21721);
        function Zt(e) {
          switch (e) {
            case O.Vv.wp:
              return (0, t.jsx)(N.ilR, {});
            case O.Vv.wY:
              return (0, t.jsx)(N.Cv4, {});
            default:
              return (0, t.jsx)(N.Qte, {});
          }
        }
        function qt(e) {
          let {
            fallbackLogo: n,
            data: i,
            location: a,
            icon: r,
            timestamp: m,
            fnRenderTimestamp: o,
            onHide: c,
          } = e;
          const f = typeof i?.image == "number",
            p = f ? { appid: i.image } : void 0,
            { data: h } = (0, J.J$)(p),
            { data: I } = (0, J.lv)(p),
            T = i?.display_name ?? "",
            D = i?.title ?? i?.body,
            B = i?.title ? i.body : null,
            b = et(a),
            j = p && (!h || !I),
            [R, rt] = x.useState(!1),
            dt = () => rt(!0);
          let k = null;
          if (f) k = Bt(I, n, b);
          else {
            const pt = b ? K().ShortLogoDimensions : K().StandardLogoDimensions;
            k =
              i?.image && !R
                ? (0, t.jsx)("img", {
                    className: pt,
                    src: i.image,
                    onError: dt,
                  })
                : n;
          }
          return b
            ? (0, t.jsx)(it, { ...e, logo: k, icon: r, title: T, body: D })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  logo: k,
                  bLoading: j,
                  ...e,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: r,
                      title: T,
                      timestamp: m,
                      location: a,
                      fnRenderTimestamp: o,
                    }),
                    (0, t.jsx)(q, { multiline: !B, children: D }),
                    !!B && (0, t.jsx)(tt, { children: B }),
                    c ? (0, t.jsx)(ot, { onHide: c }) : null,
                  ],
                }),
              });
        }
        function te(e) {
          let {
            displayName: n,
            location: i,
            icon: a,
            timestamp: r,
            fnRenderTimestamp: m,
            onHide: o,
          } = e;
          const c = et(i),
            f = (0, s.we)("#SteamNotifications_TradeOffer_Title"),
            p = c
              ? (0, s.we)("#SteamNotifications_TradeOffer_Body_Short", n ?? "")
              : (0, s.we)("#SteamNotifications_TradeOffer_Body"),
            h = (0, s.we)(
              "#SteamNotifications_TradeOffer_Description",
              n ?? "",
            ),
            I = !n;
          return c
            ? (0, t.jsx)(it, {
                ...e,
                logo: e.logo,
                icon: e.icon,
                title: f,
                body: p,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  bLoading: I,
                  ...e,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: a,
                      title: f,
                      timestamp: r,
                      location: i,
                      fnRenderTimestamp: m,
                    }),
                    (0, t.jsx)(q, { children: p }),
                    (0, t.jsx)(tt, { children: h }),
                    o ? (0, t.jsx)(ot, { onHide: o }) : null,
                  ],
                }),
              });
        }
        const ee = (e) => {
          let {
            location: n,
            icon: i,
            timestamp: a,
            fnRenderTimestamp: r,
            onHide: m,
          } = e;
          const o = et(n),
            c = (0, s.we)("#SteamNotifications_TradeReversal_Title"),
            f = o
              ? (0, s.we)("#SteamNotifications_TradeReversal_Body_Short")
              : (0, s.we)("#SteamNotifications_TradeReversal_Body"),
            p = (0, s.we)("#SteamNotifications_TradeReversal_Description");
          return o
            ? (0, t.jsx)(it, {
                ...e,
                logo: e.logo,
                icon: e.icon,
                title: c,
                body: f,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  ...e,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: i,
                      title: c,
                      timestamp: a,
                      location: n,
                      fnRenderTimestamp: r,
                    }),
                    (0, t.jsx)(q, { children: f }),
                    (0, t.jsx)(tt, { children: p }),
                    m ? (0, t.jsx)(ot, { onHide: m }) : null,
                  ],
                }),
              });
        };
        function ne(e) {
          let {
            senderName: n,
            location: i,
            icon: a,
            timestamp: r,
            fnRenderTimestamp: m,
            onHide: o,
          } = e;
          const c = et(i),
            f = c
              ? (0, s.we)("#Notification_GiftReceived_Body_Short", n ?? "")
              : (0, s.we)("#Notification_GiftReceived_Body"),
            p = n
              ? (0, s.we)("#Notification_GiftReceived_Description", n)
              : null,
            h = (0, s.we)("#Notification_GiftReceived_Title"),
            I = !n;
          return c
            ? (0, t.jsx)(it, {
                ...e,
                logo: e.logo,
                icon: e.icon,
                title: h,
                body: f,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  bLoading: I,
                  ...e,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: a,
                      title: h,
                      timestamp: r,
                      location: i,
                      fnRenderTimestamp: m,
                    }),
                    (0, t.jsx)(q, { multiline: !p, children: f }),
                    !!p && (0, t.jsx)(tt, { children: p }),
                    o ? (0, t.jsx)(ot, { onHide: o }) : null,
                  ],
                }),
              });
        }
        function ie(e) {
          let {
            requestorName: n,
            requestorAvatarURL: i,
            fallbackLogo: a,
            data: r,
            location: m,
            icon: o,
            timestamp: c,
            fnRenderTimestamp: f,
            onHide: p,
          } = e;
          const h = et(m);
          let I = "";
          n && r.state == v.UXi
            ? (I = (0, s.we)(
                "#SteamNotifications_FriendInvite_Description_AwaitingResponse",
              ))
            : n && r.state == v._UC
              ? (I = (0, s.we)(
                  "#SteamNotifications_FriendInvite_Description_Friends",
                ))
              : n &&
                (I = (0, s.we)("#SteamNotifications_FriendInvite_Description"));
          const [T, D] = x.useState(!1),
            B = () => D(!0);
          let b = a;
          if (i && !T) {
            const rt = r.state == v._UC && m != v.PN1,
              dt = h ? K().ShortLogoDimensions : K().StandardLogoDimensions;
            b = (0, t.jsxs)(W.Z, {
              style: { position: "relative" },
              children: [
                rt && (0, t.jsx)(N.GSe, { className: K().FriendIndicator }),
                (0, t.jsx)("img", { className: dt, src: i, onError: B }),
              ],
            });
          }
          const j =
              n || (0, s.we)("#SteamNotifications_FriendInvite_Body_Generic"),
            R = !n;
          return h
            ? (0, t.jsx)(it, {
                ...e,
                logo: b,
                icon: e.icon,
                title: (0, s.we)("#Notification_FriendInvite_Title"),
                body: j,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  logo: b,
                  bLoading: R,
                  ...e,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: o,
                      title: (0, s.we)("#Notification_FriendInvite_Title"),
                      timestamp: c,
                      location: m,
                      fnRenderTimestamp: f,
                    }),
                    (0, t.jsx)(q, { multiline: !I, children: j }),
                    !!I && (0, t.jsx)(tt, { children: I }),
                    p ? (0, t.jsx)(ot, { onHide: p }) : null,
                  ],
                }),
              });
        }
        function oe(e) {
          let {
            itemState: n,
            fallbackLogo: i,
            data: a,
            location: r,
            icon: m,
            timestamp: o,
            appName: c,
            fnRenderTimestamp: f,
            nUnread: p,
            onHide: h,
          } = e;
          const [I, T] = x.useState(!1),
            D = () => T(!0),
            B = et(r);
          let b = i;
          if (n?.icon_url && !I) {
            let k = `${Pt.TS.COMMUNITY_CDN_URL}economy/image/${n.icon_url}`,
              pt = n.background_color ? "#" + n.background_color : null;
            const Tt = B ? K().ShortLogoDimensions : K().StandardLogoDimensions;
            b = (0, t.jsx)(W.Z, {
              style: { position: "relative" },
              children: (0, t.jsx)("img", {
                className: Tt,
                style: {
                  backgroundColor: pt ?? void 0,
                  justifyContent: "center",
                },
                src: k,
                onError: D,
              }),
            });
          }
          const j = a.appid == 753;
          let R = null;
          if (p !== void 0 && p > 1) {
            const k = p - 1;
            j
              ? (R = (0, s.we)("#Notification_Item_RollupMore_Steam", k))
              : c
                ? (R = (0, s.we)(
                    "#Notification_Item_RollupMore_GameName",
                    k,
                    c,
                  ))
                : (R = (0, s.we)("#Notification_Item_RollupMore", k));
          } else
            c &&
              (R = j ? c : (0, s.we)("#Notification_Item_Single_GameName", c));
          const rt = n?.name
              ? n.name
              : (0, s.we)("#Notification_Item_Body_Generic"),
            dt = !n;
          if (B) {
            let k = "";
            return (
              c
                ? (k =
                    p > 1
                      ? (0, s.we)("#Notification_Item_Body_Short_Plural", c)
                      : (0, s.we)("#Notification_Item_Body_Short", c))
                : (k = (0, s.we)("#Notification_Item_Body_Generic")),
              (0, t.jsx)(it, {
                ...e,
                logo: b,
                icon: e.icon,
                title: (0, s.we)("#Notification_ItemAnnouncement_Body"),
                body: k,
              })
            );
          }
          return (0, t.jsx)(at, {
            children: (0, t.jsxs)(C, {
              logo: b,
              bLoading: dt,
              ...e,
              children: [
                (0, t.jsx)(Y, {
                  icon: m,
                  title: (0, s.we)("#Notification_ItemAnnouncement_TitleLong"),
                  timestamp: o,
                  location: r,
                  fnRenderTimestamp: f,
                }),
                (0, t.jsx)(q, { multiline: !R, children: rt }),
                !!R && (0, t.jsx)(tt, { children: R }),
                h ? (0, t.jsx)(ot, { onHide: h }) : null,
              ],
            }),
          });
        }
        function ae(e) {
          let {
            fallbackLogo: n,
            data: i,
            location: a,
            icon: r,
            timestamp: m,
            fnRenderTimestamp: o,
            onHide: c,
          } = e;
          const f = et(a),
            p = i.appid ? { appid: i.appid } : void 0,
            { data: h } = (0, J.J$)(p),
            { data: I } = (0, J.lv)(p),
            T = Bt(I, n, f),
            D = p && (!h || !I);
          let B = "";
          return (
            i.state == wt.GO
              ? (B =
                  f && h?.name
                    ? (0, s.we)(
                        "#SteamNotification_AsyncGame_Action_Short",
                        h.name,
                      )
                    : (0, s.we)("#SteamNotification_AsyncGame_Action"))
              : i.state == wt.cf &&
                (B =
                  f && h?.name
                    ? (0, s.we)(
                        "#SteamNotification_AsyncGame_Done_Short",
                        h.name,
                      )
                    : (0, s.we)("#SteamNotification_AsyncGame_Done")),
            f
              ? (0, t.jsx)(it, {
                  ...e,
                  logo: T,
                  icon: e.icon,
                  title: (0, s.we)("#SteamNotification_AsyncGame_Title"),
                  body: B,
                })
              : (0, t.jsx)(at, {
                  children: (0, t.jsxs)(C, {
                    logo: T,
                    bLoading: D,
                    ...e,
                    children: [
                      (0, t.jsx)(Y, {
                        icon: r,
                        title: (0, s.we)("#SteamNotification_AsyncGame_Title"),
                        timestamp: m,
                        location: a,
                        fnRenderTimestamp: o,
                      }),
                      (0, t.jsx)(q, { children: B }),
                      (0, t.jsx)(tt, { children: h?.name }),
                      c ? (0, t.jsx)(ot, { onHide: c }) : null,
                    ],
                  }),
                })
          );
        }
        function Rt(e) {
          const {
              title: n,
              body: i,
              logoUrl: a,
              bDataLoading: r,
              icon: m,
              onHide: o,
              location: c,
              timestamp: f,
              fnRenderTimestamp: p,
              onActivate: h,
              personaStatus: I,
            } = e,
            T = et(c),
            D = T ? K().ShortLogoDimensions : K().StandardLogoDimensions,
            B = (0, t.jsx)(W.Z, {
              style: { position: "relative" },
              children: (0, t.jsx)("img", {
                className: D,
                style: { justifyContent: "center" },
                src: a,
              }),
            });
          return T
            ? (0, t.jsx)(it, {
                logo: B,
                icon: e.icon,
                title: n,
                body: i,
                onActivate: h,
                personaStatus: I,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  logo: B,
                  bLoading: r,
                  onActivate: h,
                  personaStatus: I,
                  ...e,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: m,
                      title: n,
                      timestamp: f,
                      location: c,
                      fnRenderTimestamp: p,
                    }),
                    (0, t.jsx)(q, { multiline: !0, children: i }),
                    o ? (0, t.jsx)(ot, { onHide: o }) : null,
                  ],
                }),
              });
        }
        function se(e) {
          let {
              currentUserSteamID: n,
              fallbackLogo: i,
              postedByDisplayName: a,
              postedByAvatarURL: r,
              ownerDisplayName: m,
              data: o,
              location: c,
              icon: f,
              timestamp: p,
              fnRenderTimestamp: h,
              nUnread: I,
              appName: T,
              onHide: D,
              commentTitle: B,
              commentBody: b,
            } = e,
            j = B;
          const R = et(c),
            [rt, dt] = x.useState(!1),
            k = () => dt(!0),
            [pt, Tt] = (0, Xt.TB)(
              o.bclan_account ? o.owner_steam_id?.GetAccountID() : void 0,
            ),
            Lt = (0, y.hr)(o) ? a : null,
            Et = (0, y.T4)(o) ? m : null;
          o.comment_type == vt.Yd
            ? o.owner_steam_id?.ConvertTo64BitString() == n
              ? c == v.oYe && Lt
                ? (j = (0, s.we)(
                    "#SteamNotifications_Comment_Your_Profile_By",
                    Lt,
                  ))
                : (j = (0, s.we)("#SteamNotifications_Comment_Your_Profile"))
              : Et
                ? c == v.oYe && Lt
                  ? (j = (0, s.we)(
                      "#SteamNotifications_Comment_Player_Profile_By",
                      Lt,
                      Et,
                    ))
                  : (j = (0, s.we)(
                      "#SteamNotifications_Comment_Player_Profile",
                      Et,
                    ))
                : (j = (0, s.we)("#SteamNotifications_Comment_Profile"))
            : o.comment_type == vt.Dq && o.json_data?.file_type == v.pmA
              ? o.owner_steam_id?.ConvertTo64BitString() == n
                ? T
                  ? (j = (0, s.we)(
                      "#SteamNotifications_Comment_Your_Screenshot_Game",
                      T,
                    ))
                  : (j = (0, s.we)(
                      "#SteamNotifications_Comment_Your_Screenshot",
                    ))
                : T
                  ? (j = (0, s.we)(
                      "#SteamNotifications_Comment_Screenshot_Game",
                      T,
                    ))
                  : (j = (0, s.we)("#SteamNotifications_Comment_Screenshot"))
              : !j && o.json_data?.title && (j = o.json_data.title);
          let Mt = null;
          o.brate_limited
            ? o.comment_type == vt.Bv && o.bis_forum && b
              ? (j = (0, s.we)(
                  "#SteamNotifications_Comment_RateLimited_Forum",
                  b,
                ))
              : (j = (0, s.we)("#SteamNotifications_Comment_RateLimited"))
            : o.comment_type == vt.Bv && o.bis_forum && b
              ? (Mt = (0, t.jsx)(tt, {
                  children: (0, s.we)(
                    "#SteamNotifications_Comment_NewDiscussion",
                    b,
                  ),
                }))
              : (Mt = (0, t.jsxs)(tt, { children: ['"', b, '"'] }));
          let Ct = (0, s.we)("#SteamNotifications_Comment"),
            kt = null;
          if (I !== void 0 && I > 1) {
            const ht = "+" + (I - 1);
            c == v.oYe
              ? (kt = (0, t.jsx)("div", {
                  className: K().AllNotificationsCommentPlus,
                  children: ht,
                }))
              : (Ct = Ct + " " + ht);
          }
          let xt = i;
          if (!rt) {
            const ht = R ? K().ShortLogoDimensions : K().StandardLogoDimensions;
            if (r && (0, y.n8)(o)) {
              const Pe = o.bhas_friend && c != v.PN1;
              xt = (0, t.jsxs)("div", {
                style: { position: "relative" },
                children: [
                  Pe && (0, t.jsx)(N.GSe, { className: K().FriendIndicator }),
                  (0, t.jsx)("img", { className: ht, src: r, onError: k }),
                ],
              });
            } else
              Tt?.avatar_medium_url &&
                (xt = (0, t.jsx)("img", {
                  className: ht,
                  src: Tt.avatar_medium_url,
                  onError: k,
                }));
          }
          return R
            ? (0, t.jsx)(it, {
                ...e,
                logo: xt,
                icon: e.icon,
                title: Ct,
                body: j,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  logo: xt,
                  ...e,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: f,
                      title: Ct,
                      timestamp: p,
                      location: c,
                      fnRenderTimestamp: h,
                    }),
                    (0, t.jsx)(q, { children: j }),
                    Mt,
                    kt,
                    D ? (0, t.jsx)(ot, { onHide: D }) : null,
                  ],
                }),
              });
        }
        function re(e) {
          let {
            fallbackLogo: n,
            data: i,
            location: a,
            icon: r,
            timestamp: m,
            fnRenderTimestamp: o,
            onHide: c,
          } = e;
          const f = et(a),
            p = i.appid ? { appid: i.appid } : void 0,
            { data: h } = (0, J.J$)(p),
            { data: I } = (0, J.lv)(p),
            { data: T } = (0, J.Q_)(p),
            D = Bt(I, n, f),
            B = p && (!h || !I || !T);
          let b = "",
            j = null;
          if (h) {
            const R = h.name ?? "";
            (b = R),
              i.count == 1
                ? f
                  ? (b = (0, s.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single_Short",
                      (0, t.jsx)("span", { children: R }),
                      (0, t.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: T?.formatted_final_price,
                      }),
                    ))
                  : (j = (0, s.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single",
                      (0, t.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: T?.formatted_final_price,
                      }),
                    ))
                : i.count == 2
                  ? f
                    ? (b = (0, s.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                        R,
                      ))
                    : (j = (0, s.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne",
                      ))
                  : f
                    ? (b = (0, s.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                        R,
                        i.count - 1,
                      ))
                    : (j = (0, s.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany",
                        i.count - 1,
                      ));
          } else b = (0, s.we)("#SteamNotifications_Wishlist_Generic");
          return f
            ? (0, t.jsx)(it, {
                ...e,
                logo: D,
                icon: e.icon,
                title: (0, s.we)("#SteamNotifications_Wishlist"),
                body: b,
              })
            : (0, t.jsx)(at, {
                children: (0, t.jsxs)(C, {
                  logo: D,
                  bLoading: B,
                  ...e,
                  children: [
                    (0, t.jsx)(Y, {
                      icon: r,
                      title: (0, s.we)("#SteamNotifications_Wishlist"),
                      timestamp: m,
                      location: a,
                      fnRenderTimestamp: o,
                    }),
                    (0, t.jsx)(q, { multiline: !j, children: b }),
                    !!j && (0, t.jsx)(tt, { children: j }),
                    c ? (0, t.jsx)(ot, { onHide: c }) : null,
                  ],
                }),
              });
        }
        function Bt(e, n, i = !1) {
          const [a, r] = x.useState(!1),
            m = () => r(!0);
          if (!e || a)
            return (0, t.jsx)(W.Z, {
              style: { position: "relative" },
              children: n,
            });
          const o = (0, Jt.b0)(e, "community_icon");
          return i
            ? (0, t.jsx)(W.Z, {
                style: { position: "relative" },
                children: (0, t.jsx)("img", {
                  src: o,
                  className: K().ShortLogoDimensions,
                  onError: m,
                }),
              })
            : (0, t.jsxs)(W.Z, {
                style: { position: "relative" },
                children: [
                  (0, t.jsx)("img", {
                    className: (0, g.A)(K().WishlistBlurImage),
                    src: o,
                    onError: m,
                  }),
                  (0, t.jsx)("img", {
                    src: o,
                    onError: m,
                    style: {
                      position: "absolute",
                      left: 7,
                      top: 7,
                      height: 32,
                      width: 32,
                    },
                  }),
                ],
              });
        }
        function ot(e) {
          const n = (a) => {
              a.stopPropagation(), a.preventDefault();
            },
            i = (a) => {
              e.onHide(), a.stopPropagation(), a.preventDefault();
            };
          return (0, t.jsx)("div", {
            className: K().HideButton,
            onClick: i,
            onMouseDown: n,
            children: (0, t.jsx)(N.zHo, {}),
          });
        }
        function at(e) {
          return (0, t.jsx)("div", {
            className: K().SteamNotificationWrapper,
            children: e.children,
          });
        }
        var Gt = d(24544);
        let gt = null,
          Ut = !1;
        function ce() {
          return gt || (gt = new Gt.s({ BIsFriend: (0, Gt.Q)() })), gt;
        }
        function le() {
          const e = (0, Q.KV)(),
            n = (0, Q.rX)(),
            i = (0, E.q3)(() => ce().m_bInitialized);
          return (
            !i &&
              !Ut &&
              ((Ut = !0),
              gt.Init(Pt.iA.accountid, e, n).finally(() => (Ut = !1))),
            [i, gt]
          );
        }
        function de(e) {
          let n = null;
          return (
            (0, y.sR)(e)
              ? (n = _e)
              : (0, y.IC)(e)
                ? (n = ue)
                : Ot[e] && (n = Ot[e]),
            n
          );
        }
        function me(e) {
          const { rollup: n, uimode: i, location: a } = e,
            r = de(n.type);
          return r
            ? (0, t.jsx)(S.Ay, {
                controller: "notification",
                method: (0, v.fLp)(i),
                submethod: (0, v.ey3)(a),
                children: (0, t.jsx)(r, { ...e }),
              })
            : null;
        }
        function ue(e) {
          const {
              rollup: n,
              onNotificationClick: i,
              location: a,
              uimode: r,
              onHide: m,
            } = e,
            o = Nt(n.item.notification_type, n.item.body_data),
            c = (0, O.p$)(n.type)
              .replace("k_ESteamNotificationType_", "")
              ?.toLowerCase(),
            f = (0, u.aL)(o?.link ?? "#", c),
            p = () =>
              i(() => {
                o?.link && f && window.location.assign(f);
              }, n.item),
            h = (I) => i(() => {}, n.item, I);
          return (0, t.jsx)("a", {
            href: o?.link ? f : "#",
            onMouseDown: h,
            children: (0, t.jsx)(qt, {
              icon: Zt(n.type),
              onActivate: p,
              fallbackLogo: (0, t.jsx)(N.Qte, {}),
              location: a,
              eUIMode: r,
              data: o,
              timestamp: n.timestamp,
              nUnread: n.rgunread.length,
              bNewIndicator: (0, y.Rl)(n.item),
              onHide: m,
            }),
          });
        }
        function fe(e) {
          const {
              rollup: n,
              onNotificationClick: i,
              location: a,
              uimode: r,
              onHide: m,
            } = e,
            o = `${A.TS.COMMUNITY_BASE_URL}my/gamenotifications/`,
            c = () => i(() => window.location.assign(o), n.item),
            f = (h) => i(() => {}, n.item, h),
            p = $(n);
          return (0, t.jsx)("a", {
            href: o,
            onMouseDown: f,
            children: (0, t.jsx)(ae, {
              icon: (0, t.jsx)(N.Qte, {}),
              fallbackLogo: (0, t.jsx)(N.wC1, {}),
              onActivate: c,
              location: a,
              eUIMode: r,
              data: p,
              timestamp: n.timestamp,
              nUnread: n.rgunread.length,
              bNewIndicator: (0, y.Rl)(n.item),
              onHide: m,
            }),
          });
        }
        function pe(e) {
          const {
              steamid: n,
              url: i,
              strTitleLoc: a,
              strBodyLoc: r,
              rollup: m,
              onNotificationClick: o,
              location: c,
              uimode: f,
              onHide: p,
            } = e,
            { data: h } = (0, P.js)(n),
            I = (j) => o(() => {}, m.item, j),
            T = () => o(() => window.location.assign(i), m.item);
          if (!r) return null;
          const D = !h,
            B = (0, s.we)(a, h?.m_strPlayerName ?? ""),
            b = (0, s.we)(r, h?.m_strPlayerName ?? "");
          return (0, t.jsx)("a", {
            href: i,
            onMouseDown: I,
            children: (0, t.jsx)(Rt, {
              title: B,
              body: b,
              bDataLoading: D,
              logoUrl: h?.avatar_url_medium,
              icon: (0, t.jsx)(N.Qte, {}),
              onActivate: T,
              location: c,
              eUIMode: f,
              timestamp: m.timestamp,
              nUnread: m.rgunread.length,
              bNewIndicator: (0, y.Rl)(m.item),
              onHide: p,
            }),
          });
        }
        function _e(e) {
          const n = ft(e.rollup.type, e.rollup.item.body_data);
          if (!n) return null;
          const { strTitleLoc: i, strBodyLoc: a, strUrl: r, steamid: m } = n;
          return !m || !i || !a
            ? null
            : (0, t.jsx)(pe, {
                steamid: m,
                url: r,
                strTitleLoc: i,
                strBodyLoc: a,
                ...e,
              });
        }
        function ye(e) {
          const {
              rollup: n,
              onNotificationClick: i,
              location: a,
              uimode: r,
              onHide: m,
            } = e,
            o = (0, U.LH)(),
            c = $(n),
            f = `${A.TS.COMMUNITY_BASE_URL}profiles/${o}/tradeoffers`,
            p = () => i(() => window.location.assign(f), n.item),
            h = (D) => i(() => {}, n.item, D),
            I = ut.b.InitFromAccountID(c),
            { data: T } = (0, P.js)(I.GetAccountID());
          return (0, t.jsx)("a", {
            href: f,
            onMouseDown: h,
            children: (0, t.jsx)(te, {
              logo: (0, t.jsx)(N.Qte, {}),
              icon: (0, t.jsx)(N.h20, {}),
              onActivate: p,
              location: a,
              eUIMode: r,
              timestamp: n.timestamp,
              nUnread: n.rgunread.length,
              displayName: T?.m_strPlayerName,
              bNewIndicator: (0, y.Rl)(n.item),
              onHide: m,
            }),
          });
        }
        const ge = (e) => {
          const {
              rollup: n,
              onNotificationClick: i,
              location: a,
              uimode: r,
              onHide: m,
            } = e,
            o = `${A.TS.COMMUNITY_BASE_URL}my/tradehistory`,
            c = () => i(() => window.location.assign(o), n.item),
            f = (p) => i(() => {}, n.item, p);
          return (0, t.jsx)("a", {
            href: o,
            onMouseDown: f,
            children: (0, t.jsx)(ee, {
              logo: (0, t.jsx)(N.Qte, {}),
              icon: (0, t.jsx)(N.h20, {}),
              onActivate: c,
              location: a,
              eUIMode: r,
              timestamp: n.timestamp,
              nUnread: n.rgunread.length,
              bNewIndicator: (0, y.Rl)(n.item),
              onHide: m,
            }),
          });
        };
        function he(e) {
          const {
              rollup: n,
              onNotificationClick: i,
              location: a,
              uimode: r,
              onHide: m,
            } = e,
            o = (0, U.LH)(),
            c = `${A.TS.COMMUNITY_BASE_URL}profiles/${o}/inventory/#pending_gifts`,
            f = () => i(() => window.location.assign(c), n.item),
            p = (D) => i(() => {}, n.item, D),
            h = $(n),
            I = ut.b.InitFromAccountID(h),
            { data: T } = (0, P.js)(I.GetAccountID());
          return (0, t.jsx)("a", {
            href: c,
            onMouseDown: p,
            children: (0, t.jsx)(ne, {
              logo: (0, t.jsx)(N.Qte, {}),
              icon: (0, t.jsx)(N.pD, {}),
              onActivate: f,
              location: a,
              eUIMode: r,
              timestamp: n.timestamp,
              nUnread: n.rgunread.length,
              senderName: T?.m_strPlayerName,
              bNewIndicator: (0, y.Rl)(n.item),
              onHide: m,
            }),
          });
        }
        function Ne(e) {
          const {
              rollup: n,
              onNotificationClick: i,
              location: a,
              uimode: r,
              onHide: m,
            } = e,
            o = $(n),
            { data: c } = (0, P.js)(o.responder_steamid),
            f =
              o.package_id > 0
                ? { packageid: o.package_id }
                : { bundleid: o.bundle_id },
            { data: p } = (0, J.U2)(f),
            h = p ? `app/${p.appid}` : "",
            I = `${A.TS.STORE_BASE_URL}${h}`,
            T = () => i(() => window.location.assign(I), n.item),
            D = (R) => i(() => {}, n.item, R),
            B = !c || !p,
            b = (0, s.we)("#SteamNotifications_RequestedGameAddedTitle"),
            j = p
              ? (0, s.we)(
                  "#SteamNotifications_RequestedGameAddedBody",
                  p.name ?? "",
                )
              : "";
          return (0, t.jsx)("a", {
            href: I,
            onMouseDown: D,
            children: (0, t.jsx)(Rt, {
              title: b,
              body: j,
              bDataLoading: B,
              logoUrl: c?.avatar_url_medium,
              icon: (0, t.jsx)(N.Qte, {}),
              onActivate: T,
              location: a,
              eUIMode: r,
              timestamp: n.timestamp,
              nUnread: n.rgunread.length,
              bNewIndicator: (0, y.Rl)(n.item),
              onHide: m,
            }),
          });
        }
        function Ie(e) {
          const {
              rollup: n,
              onNotificationClick: i,
              location: a,
              uimode: r,
              onHide: m,
            } = e,
            o = (0, U.LH)(),
            c = (0, Q.KV)(),
            f = (0, y.IL)(n.item, o, c),
            p = $(n),
            { data: h } = (0, J.J$)(p?.appid ? { appid: p.appid } : void 0),
            I = `${A.TS.COMMUNITY_BASE_URL}profiles/${o}/inventory`,
            T = () => i(() => window.location.assign(I), n.item),
            D = (B) => i(() => {}, n.item, B);
          return (0, t.jsx)("a", {
            href: I,
            onMouseDown: D,
            children: (0, t.jsx)(oe, {
              appName: h?.name,
              icon: (0, t.jsx)(N.rI_, {}),
              fallbackLogo: (0, t.jsx)(N.Qte, {}),
              onActivate: T,
              location: a,
              eUIMode: r,
              data: p,
              timestamp: n.timestamp,
              nUnread: n.rgunread.length,
              itemState: f,
              bNewIndicator: (0, y.Rl)(n.item),
              onHide: m,
            }),
          });
        }
        function Se(e) {
          const {
              rollup: n,
              onNotificationClick: i,
              location: a,
              uimode: r,
              onHide: m,
            } = e,
            o = (0, U.LH)(),
            c = `${A.TS.COMMUNITY_BASE_URL}profiles/${o}/friends/pending`,
            f = () => i(() => window.location.assign(c), n.item),
            p = (T) => i(() => {}, n.item, T),
            h = $(n),
            { data: I } = (0, P.js)(h.requestorID);
          return (0, t.jsx)("a", {
            href: c,
            onMouseDown: p,
            children: (0, t.jsx)(ie, {
              fallbackLogo: (0, t.jsx)(N.Gv$, {}),
              icon: (0, t.jsx)(N.sdo, {}),
              onActivate: f,
              location: a,
              eUIMode: r,
              data: h,
              timestamp: n.timestamp,
              nUnread: n.rgunread.length,
              requestorAvatarURL: I?.avatar_url_medium,
              requestorName: I?.m_strPlayerName,
              bNewIndicator: (0, y.Rl)(n.item),
              onHide: m,
            }),
          });
        }
        function ve(e) {
          const {
              rollup: n,
              onNotificationClick: i,
              location: a,
              uimode: r,
              onHide: m,
            } = e,
            o = $(n),
            c = (0, U.LH)(),
            f = A.TS.COMMUNITY_BASE_URL + n.url,
            p = () => i(() => window.location.assign(f), n.item),
            h = (pt) => {
              i(() => {}, n.item, pt);
            },
            I = (0, y.iO)(o) ? o?.account_steam_id?.GetAccountID() : null,
            { data: T } = (0, P.js)(I),
            D = (0, y.OT)(o) ? o?.owner_steam_id?.GetAccountID() : null,
            { data: B } = (0, P.js)(D),
            b = o.json_data?.app_id ? { appid: o.json_data?.app_id } : void 0,
            { data: j } = (0, J.J$)(b),
            [R, rt] = le(),
            dt = R
              ? rt.FilterText(o.account_steam_id.GetAccountID(), o.title)
              : "",
            k = R
              ? rt.FilterText(o.account_steam_id.GetAccountID(), o.comment)
              : "";
          return (0, t.jsx)("a", {
            href: f,
            onMouseDown: h,
            children: (0, t.jsx)(se, {
              fallbackLogo: (0, t.jsx)(N.Qte, {}),
              icon: (0, t.jsx)(N.MwB, {}),
              onActivate: p,
              location: a,
              currentUserSteamID: c,
              eUIMode: r,
              data: o,
              timestamp: n.timestamp,
              nUnread: n.rgunread.length,
              postedByAvatarURL: T?.avatar_url_medium,
              postedByDisplayName: T?.m_strPlayerName,
              ownerDisplayName: B?.m_strPlayerName,
              bNewIndicator: (0, y.Rl)(n.item),
              appName: j?.name,
              onHide: m,
              commentTitle: dt,
              commentBody: k,
              bLoading: !R,
            }),
          });
        }
        function Ae(e) {
          const {
              rollup: n,
              onNotificationClick: i,
              location: a,
              uimode: r,
              onHide: m,
            } = e,
            o = $(n),
            { data: c } = (0, J.J$)({ appid: o.appid }),
            [f, p] = (0, x.useState)(""),
            h = (0, U.LH)();
          (0, x.useEffect)(() => {
            if (o.count > 1 && o.appids?.length)
              return p(
                A.TS.STORE_BASE_URL +
                  `wishlist/profiles/${h}/?wng=${o.appids.toString()}#sort=discount`,
              );
            if (c) return p(A.TS.STORE_BASE_URL + c.store_url_path);
            const D = o.appid ? `?appid=${o.appid}` : "";
            p(
              A.TS.STORE_BASE_URL + `wishlist/profiles/${h}/${D}#sort=discount`,
            );
          }, [o, c, h]);
          const I = () => i(() => window.location.assign(f), n.item),
            T = (D) => i(() => {}, n.item, D);
          return (0, t.jsx)("a", {
            href: f,
            onMouseDown: T,
            children: (0, t.jsx)(re, {
              fallbackLogo: (0, t.jsx)(N.Qte, {}),
              icon: (0, t.jsx)(N.ilR, {}),
              onActivate: I,
              location: a,
              data: o,
              timestamp: n.timestamp,
              nUnread: n.rgunread.length,
              eUIMode: r,
              bNewIndicator: (0, y.Rl)(n.item),
              onHide: m,
            }),
          });
        }
        function Te(e) {
          const { url: n, count: i, icon: a, strBody: r, eFeature: m } = e,
            o = (0, G.Hw)(m);
          return !i || o
            ? null
            : (0, t.jsx)("a", {
                href: n,
                className: yt().WebPinnedNotification,
                children: (0, t.jsx)(l, {
                  icon: (0, t.jsx)(a, {}),
                  count: i,
                  onActivate: () => window.location.assign(n),
                  strBody: r,
                  eUIMode: v.yrU,
                  visible: !0,
                }),
              });
        }
        const Ot = {
          [O.Vv.v_]: ve,
          [O.Vv.XJ]: Ae,
          [O.Vv.pZ]: Se,
          [O.Vv.hW]: Ie,
          [O.Vv.K]: he,
          [O.Vv.an]: ye,
          [O.Vv.Y9]: fe,
          [O.Vv.YE]: Ne,
          [O.Vv.mr]: ge,
        };
        var Le = d(81944);
        const st = new y.cE(),
          Ft = (0, X.Nr)(function (n) {
            const { bResponsiveHeader: i, notifications: a } = n;
            x.useEffect(() => {
              a && !st.m_bLoaded && st.ProcessNewNotificationPayload(a);
            }, [a]);
            const r = (0, Q.KV)();
            (0, x.useEffect)(() => {
              st.setTransport(r),
                (window.RefreshSteamNotifications = () => we(r));
            }, [r]);
            const m = At();
            return i
              ? (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(Wt, {}), (0, t.jsx)(je, {})],
                })
              : (0, t.jsx)(Ce, { nTotalUnviewed: m.nUnviewed });
          });
        function At() {
          return (0, E.q3)(() => ({
            notifications: st.m_rgNotificationRollups,
            summary: st.m_summary,
            loaded: st.m_bLoaded,
            nUnviewed: st.m_nUnviewed,
          }));
        }
        function Ht() {
          const e = At(),
            n = (0, U.LH)(),
            { data: i } = (0, G.S0)(n),
            a = (0, G.BM)(),
            r = i?.settings;
          return e.notifications.filter(
            (m) => !(0, y.jb)(m.type, r, a) && !(0, y.XT)(m.item),
          );
        }
        function Ce(e) {
          const { nTotalUnviewed: n } = e,
            i = x.useRef(null),
            a = Ht(),
            [r, m] = x.useState(w().AnimateBell);
          x.useEffect(() => {
            i.current ||
              ((i.current = (0, H.lX)(
                (0, t.jsx)(xe, { popupRef: i }),
                document.getElementById("green_envelope_menu_root"),
                {
                  bPreferPopLeft: !0,
                  bOverlapHorizontal: !0,
                  strClassName: "GreenEnvelopeMenu",
                },
              )),
              i.current.Hide());
            const f = document.getElementById("header_notification_link");
            f && (f.style.cssText = "background-color: rgba(0,0,0,0)"),
              window.setTimeout(() => m(null), 2e3);
          }, []);
          const o = () => {
              i.current?.visible ||
                (i.current?.Show(),
                a.findIndex((p) => !p.item.viewed) != -1 &&
                  st.MarkAllItemsViewed());
            },
            c = x.useCallback(
              (f) => {
                !f && i.current?.visible && i.current.Hide();
              },
              [i],
            );
          return (0, t.jsx)(Le.J, {
            trigger: "repeated",
            onVisibilityChange: c,
            children: (0, t.jsx)("button", {
              onClick: o,
              id: "green_envelope_menu_root",
              className: (0, g.A)(
                w().NotificationsButton,
                n ? w().Green : w().Grey,
                r,
              ),
              children: (0, t.jsx)(M.$0s, {
                className: w().SVGNotifications,
                "aria-label": (0, s.we)("#NotificationsMenu_Title"),
              }),
            }),
          });
        }
        const xe = (e) => {
            const { popupRef: n } = e,
              i = x.useRef(null),
              [a, r] = x.useState(!1);
            x.useEffect(() => {
              r(
                i.current != null &&
                  i.current?.scrollHeight > i.current?.clientHeight,
              );
            }, [i.current?.scrollHeight, a]);
            const m = a ? void 0 : w().MenuScrollbarHidden;
            return (0, t.jsxs)("div", {
              className: w().NotificationsMenu,
              onClick: () => n?.current?.Hide(),
              children: [
                (0, t.jsx)(De, {}),
                (0, t.jsxs)("div", {
                  className: (0, g.A)(w().NotificationsMenuScrollable, m),
                  ref: i,
                  children: [
                    (0, t.jsx)(Wt, {}),
                    (0, t.jsx)(Be, {}),
                    (0, t.jsx)(Ee, {}),
                  ],
                }),
              ],
            });
          },
          De = () => {
            const e = `${A.TS.COMMUNITY_BASE_URL}profiles/${A.iA.steamid}/notifications`;
            return (0, t.jsxs)("div", {
              className: (0, g.A)(w().NotificationHeader),
              children: [
                (0, t.jsx)("div", {
                  className: w().AllNotificationsTitle,
                  children: (0, s.we)("#NotificationsMenu_Title"),
                }),
                (0, t.jsx)("a", {
                  href: e,
                  children: (0, t.jsx)("div", {
                    className: w().AllNotificationsButton,
                    children: (0, s.we)("#NotificationsMenu_ViewAll"),
                  }),
                }),
              ],
            });
          },
          je = () => {
            const e = `${A.TS.COMMUNITY_BASE_URL}profiles/${A.iA.steamid}/notifications`;
            return (0, t.jsx)("div", {
              className: (0, g.A)(
                w().NotificationHeader,
                w().ResponsiveViewAll,
              ),
              children: (0, t.jsx)("a", {
                href: e,
                children: (0, t.jsx)("div", {
                  className: w().AllNotificationsButton,
                  children: (0, s.we)("#NotificationsMenu_ViewAll"),
                }),
              }),
            });
          };
        function be(e, n, i) {
          !n.read &&
            (!i || i.button == 0 || i.button == 1) &&
            n.notification_id &&
            st.MarkItemRead(n.notification_id),
            e();
        }
        function Be() {
          const e = Ht();
          return e.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: w().NotificationsMenuEntriesContainer,
                children: e.map((n, i) =>
                  (0, t.jsx)(
                    me,
                    {
                      rollup: n,
                      onNotificationClick: be,
                      uimode: v.yrU,
                      location: v.B3I,
                    },
                    i,
                  ),
                ),
              });
        }
        const Ue = [
          {
            fnUrl: () =>
              `${A.TS.COMMUNITY_BASE_URL}profiles/${A.iA.steamid}/inventory/#pending_gifts`,
            countItem: "pending_gifts",
            icon: N.pD,
            fnLocalizeBody: (e) =>
              (0, s.Yp)("#Notification_NewGiftsPinned_Body", e),
            feature: F.ip,
          },
          {
            fnUrl: () =>
              `${A.TS.COMMUNITY_BASE_URL}profiles/${A.iA.steamid}/home/invites`,
            countItem: "pending_invites",
            icon: N.sdo,
            fnLocalizeBody: (e) =>
              (0, s.Yp)("#Notification_FriendInvitePinned_Body", e),
            feature: F.M,
          },
          {
            fnUrl: () =>
              `${A.TS.COMMUNITY_BASE_URL}profiles/${A.iA.steamid}/notifications#comments`,
            countItem: "comments",
            icon: N.MwB,
            fnLocalizeBody: (e) =>
              (0, s.Yp)("#Notification_NewCommentPinned_Body", e),
            feature: F.qR,
          },
          {
            fnUrl: () =>
              `${A.TS.COMMUNITY_BASE_URL}profiles/${A.iA.steamid}/inventory`,
            countItem: "inventory_items",
            icon: N.rI_,
            fnLocalizeBody: (e) =>
              (0, s.Yp)("#Notification_NewItemAnnouncementPinned_Body", e),
            feature: F.WJ,
          },
          {
            fnUrl: () =>
              `${A.TS.COMMUNITY_BASE_URL}profiles/${A.iA.steamid}/tradeoffers`,
            countItem: "trade_offers",
            icon: N.h20,
            fnLocalizeBody: (e) =>
              (0, s.Yp)("#Notification_NewTradeOffersPinned_Body", e),
            feature: F.ut,
          },
          {
            fnUrl: () =>
              `${A.TS.COMMUNITY_BASE_URL}profiles/${A.iA.steamid}/gamenotifications`,
            countItem: "async_game_updates",
            icon: N.wC1,
            fnLocalizeBody: (e) =>
              (0, s.Yp)("#Notification_NewAsyncGamePinned_Body", e),
          },
          {
            fnUrl: () => `${A.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
            countItem: "moderator_messages",
            icon: M.hJ4,
            fnLocalizeBody: (e) =>
              (0, s.Yp)("#Notification_NewModeratorMessagePinned_Body", e),
            feature: F.qR,
          },
          {
            fnUrl: () => `${A.TS.HELP_BASE_URL}wizard/HelpRequests`,
            countItem: "help_request_replies",
            icon: N.Cv4,
            fnLocalizeBody: (e) =>
              (0, s.Yp)("#Notification_NewHelpRequestRepliesPinned_Body", e),
          },
          {
            fnUrl: () =>
              `${A.TS.STORE_BASE_URL}account/familymanagement/join?ft=${A.iA.steamid}`,
            countItem: "family_invites",
            icon: N.Qte,
            fnLocalizeBody: (e) =>
              (0, s.Yp)("#Notification_FamilyInvitePinned_Body", e),
          },
        ];
        function Wt() {
          const e = At();
          return (0, t.jsx)(t.Fragment, {
            children: Ue.map((n) =>
              (0, t.jsx)(
                Te,
                {
                  url: n.fnUrl(),
                  count: e.summary[n.countItem],
                  icon: n.icon,
                  strBody: n.fnLocalizeBody(e.summary[n.countItem]),
                  eFeature: n.feature,
                },
                n.countItem,
              ),
            ),
          });
        }
        function Ee() {
          return (0, t.jsxs)("div", {
            className: w().EmptyNotificationsCtn,
            children: [
              (0, t.jsx)("div", {
                className: w().EmptyNotificationsTitle,
                children: (0, s.we)("#NotificationsList_EmptyTitle_New"),
              }),
              (0, t.jsx)("div", {
                className: w().EmptyNotificationsBody,
                children: (0, s.we)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        const Me = Ft;
        async function we(e) {
          let n = null;
          try {
            n = await (0, y.tM)(
              e,
              A.iA.steamid,
              (0, v.sfN)(A.TS.LANGUAGE),
              void 0,
              !1,
              !1,
            );
          } catch {}
          n && st.ProcessNewNotificationPayload(n);
        }
      },
      29553: (V) => {
        V.exports = {
          NotificationsMenu: "_3EPagkYPxulGbe-5invUhK",
          NotificationsMenuEntriesContainer: "m0H4PhlsBcw0NzlQje7q",
          NotificationsMenuScrollable: "_2hgxpK_sWS7mDF66uPetpF",
          MenuScrollbarHidden: "_2Qeur5RWXHnW-xneBJUfH-",
          NotificationHeader: "_1Uh_y1atXoMOUxGyUQK8vC",
          ResponsiveViewAll: "_2q-LyEsEZpxFZBbqO07xgp",
          AllNotificationsTitle: "-Dpw5WXg2gjckpFAkP_lg",
          AllNotificationsButton: "_1OH7OiFxIJo5Y7Z4Z6U6iO",
          NotificationsButton: "_1jW5_Ycv6jGKu28A1OSIQK",
          SVGNotifications: "_13fwmIK8Ajo0qndUS5zb7E",
          Grey: "_34A9kjlnmgfUWSmr16VjXE",
          Disabled: "_3h1sV2qrp20U37VwC47pM2",
          Green: "_2Hpe0_DGY0TBz45Lg0zUr9",
          AnimateBell: "_34o7mvTYzowbNAllqYUQuJ",
          NotificationBellAnimation: "_3W6ngOzFfcJJpftaQ5t9bk",
          NotificationBellUvula: "xpAr9gP3YAkKomrGUivf8",
          EmptyNotificationsCtn: "_2a4xLIvDI3rmLxVfLMQFTz",
          EmptyNotificationsTitle: "_2SIA4NMfduV_HWDptv6cAK",
          EmptyNotificationsBody: "EpEznkfiKxcqI9p52OmRx",
        };
      },
      97786: (V) => {
        V.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_2yhmcyeUOyM8lt__Skbk9O",
          "ItemFocusAnim-darkerGrey": "_3mfiE_PUWOPy8UTDJlYI0u",
          Timestamp: "_26rvbcKFCQjLKx-pD7BhvY",
          StandardTemplate: "_3-H47wPl1Ng3lh7xGZOPIg",
          PinnedTemplate: "_3V6804k2yutEiF6IWg8axH",
          StandardLogoDimensions: "_1KIwOtwkYQUtRoPyxlh3G-",
          Content: "_2axKS7MCnzMBRXRcYLn2Is",
          Header: "_1WuK_iZ6ARkIiptCX5qd7G",
          Icon: "_2F0wqsu2mqsHxBSJcu1sPJ",
          Title: "_18PwvOcpWfW3M8j2-bEPPJ",
          StandardNotificationDescription: "_3fUrGm-WHq3qxIpSqRZDgc",
          StandardNotificationSubText: "_2yUEtF_eCucoxdu85zlOCp",
          Multiline: "_2sQoMK-0onl8u8WHHUnDdw",
          Count: "_2zZKXEnYcEZsL5OGHzkKv2",
          PinnedBody: "_1nziGc41LlyGfDufK0iQos",
          AllNotificationsTemplate: "_1xvIUtLkTrdEk2Ob1MqFcQ",
          StandardTemplateDesktop: "_1GcAugE5c4nbBUwrA4_xwS",
          DesktopToastTemplate: "_3ENh9LzRnZgfTyfxp_J2rr",
          PinnedTemplateWeb: "_2Mo87NUHyjLkjvKcPQxPRu",
          PinnedTemplateDesktop: "j9jQA6QaLJ23lyfuo9nY6",
          AppLogo: "_3mWpfn1_PDwd1gOm26RhMl",
          AppLogoBackgroundImage: "_2FcBwxd4lGOEMTXCnmxczK",
          MarkedRead: "_15_E6efeCt2NTqCgUKav1W",
          markReadBackground: "_1paPuAH6aCXNKdXvf5jv1d",
          Unread: "_1YAQHDHv4hsPaauccvAFtn",
          PlayerNickName: "_2n0ipWJFroZdQVwkXHqdJL",
          FullName: "_2EWNcLrlrl9Gx-yZH039tH",
          IngameTitle: "_3uSbhtY3vHtdj-3tpua_Pb",
          OnlineTitle: "_3bqD-bBMgrGwLsBY2L1gSL",
          GroupMessageTitle: "_3C8GdaaS-zmchnCHHiHG6n",
          GroupMessageUserName: "_2hs2ZR_wYkRHWdtlr681Z6",
          GroupMessageBody: "_3AbCrY-d5NpL5E5DUfgdQ8",
          GroupMessageIcon: "_3vDmqJBvNPH1D_p-Da_djj",
          Body: "_2jpxEWvo06efD6-NR1cplA",
          FriendInGameAppColor: "_2XSwzNWGiJvW0zTgqT0DUI",
          WishlistBlurImage: "_2HBcq6niThHlNihI9xiBSm",
          AvatarStatus: "_1mMC7Hv71CzO0jfm_66W4K",
          IncomingCallToast: "_3wNcsYlo3lQ-yamJPMco8F",
          ShortLogoDimensions: "_1-CP3jNFd252Y0uV_Ua0VE",
          LoadingTemplate: "_2mFLv5Puw95n9oUFp9OMAs",
          Hide: "_1W2rIElq16YPQi4DqoqPLM",
          ShimmerLogo: "_3QrlTtpidzjKPhrvgxFXbI",
          ShimmerBody: "_1ugrCy0x7fRJ7TyoURzzTa",
          ShimmerHeader: "_1Tp3oOeqWARWDsQDI3owRD",
          loading: "_3CI8AFu67GMoINumH6Yvax",
          BottomBar: "_2FMNpalUV1wDdi-cywGIMN",
          NewIndicator: "-B93GaGXJf0lPTNh66m4i",
          ShortTemplate: "fntOoeLPSTpmyXGGmgf99",
          TwoLine: "P1FhGdWv2NCXZXWsaKqqY",
          FullWidth: "_6EcDVXFHtdirTkETQjKOK",
        };
      },
      93761: (V) => {
        V.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_30fVm4Rsel-4nUKEiPJgz9",
          "ItemFocusAnim-darkerGrey": "_3z4hV832fi8W9gRRPhmC1V",
          Timestamp: "_7XKFnSNjW_tHfyxaezoD3",
          StandardTemplate: "_2h6KD6p6y4vIgO2Toxx-_K",
          PinnedTemplate: "_3oKFhPrh1lbp-WtA72Q2Yi",
          StandardLogoDimensions: "_1VRx9qVxigUC4qeM0NWNMR",
          Content: "_1SQjN025UZ0z_8AkWHCsGd",
          Header: "_3u0Sb5gUTscs0TQlKpA7WZ",
          Icon: "_2auM-VHPU-KKomAWyuWrSV",
          Title: "_2MGSmn9lIFnmLVIX49POSx",
          StandardNotificationDescription: "_26v9mHAi56x63OwY-jxett",
          StandardNotificationSubText: "_3hEeummFKRey8l5VXxZwxz",
          Multiline: "_21DVSDVmPUgGXuTkI2HqbO",
          Count: "CRYjulQaQOjokS7b_8cOH",
          PinnedBody: "h-lNlCUnCRbIcn38-Oqaw",
          AllNotificationsTemplate: "QFW0BtI4l77AFmv1xLAkx",
          StandardTemplateDesktop: "_3B8wRA4H7e_oSksYNqpSPv",
          DesktopToastTemplate: "_2NdiftmP-B3C4LPWnNGTCB",
          PinnedTemplateWeb: "_25gii5r23MmAqXvLZj24tK",
          PinnedTemplateDesktop: "_3k90ug209sE23xAMqcM74s",
          AppLogo: "_3p74fAyjLzNltNbJUf55kk",
          AppLogoBackgroundImage: "_2qpzt_PffGJwN3Vm2bkKQI",
          MarkedRead: "FMwg5OFGT6NP3h3EW89IP",
          markReadBackground: "_3eZECZ7BxfGeq4yfoKHDal",
          Unread: "_1B1XTNsfuwOaDPAkkr8M42",
          PlayerNickName: "_1YqYJ2yaHfODWbIB0abgzQ",
          FullName: "fozLrCNjCbPGiVKYi2L_M",
          IngameTitle: "rN6p14MiFEoCZvdjnfpgQ",
          OnlineTitle: "_35uWYHT2zJoSv9PE_euqxo",
          GroupMessageTitle: "_33qpBDHTkkQ4TCFB4gPGk_",
          GroupMessageUserName: "_3m94SADycX0JIk8urdZQ2X",
          GroupMessageBody: "_1XTFkmspXcukxWSFz5Fn61",
          GroupMessageIcon: "brsvX3XkZwkemQ_HM3JOP",
          Body: "_3JT9UI68R_-oZc63_NRIcA",
          FriendInGameAppColor: "_10165iFPxrqzt0kfV00tbu",
          WishlistBlurImage: "_3QLXE6SzCKiwEgK5iORZPA",
          AvatarStatus: "_1iutOH026zK2dbpsMFDmMm",
          IncomingCallToast: "j2oDsM6xV2rFx-UrisfYh",
          ShortLogoDimensions: "BNKAIWal-7E00ymauRaHg",
          LoadingTemplate: "Lakql1yamweHbP1OPuahF",
          Hide: "WnLkF0HwOQr2BIjlAlrjF",
          ShimmerLogo: "_2macs5lWMPN5NfDpGE3Iyh",
          ShimmerBody: "_3Ivl8dbxH6D6LwaSLTNTLe",
          ShimmerHeader: "_2a2loheX4ZKGZCGNEdAT3h",
          loading: "_2PdZZCNo176UV7FcPPdqTt",
          BottomBar: "_3yiWpBXwEmDLlaIupVXjUt",
          NewIndicator: "_1pIhbqWsrCVPaGGYc6fT-H",
        };
      },
      92012: (V) => {
        V.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_1lqXpJpRlYvyM2fBx6beHd",
          "ItemFocusAnim-darkerGrey": "_3WRewosNPP9V6g7O3hWH5k",
          Timestamp: "w1Bf_xO8scHETzsfr2HtM",
          StandardTemplate: "_1k275cE1gk-jpZE5r-37zl",
          PinnedTemplate: "_4egmnB1wTrDll5Mc_eal8",
          StandardLogoDimensions: "_3n8vALReUk851YHiEiWEfQ",
          Content: "_3c_vhR2WnZLHuyVP2m4UO2",
          Header: "_1186NyOXeTBoB-vvWlJq1I",
          Icon: "_1piyUE09t3QXktcD3FrCwJ",
          Title: "_2x6qMHeQndH78e6sL2XHk_",
          StandardNotificationDescription: "Wh50moO-nKvfE3l4Buav",
          StandardNotificationSubText: "_2T5BxMT87QHfYWXDHFzpT1",
          Multiline: "_2fLmG6Oxk7tiZGLfH8dwXG",
          Count: "sdjVIgKSOKqyi7O2VDy70",
          PinnedBody: "_3OCMnBpXVpdYv5isBLVdJK",
          AllNotificationsTemplate: "d9RJTj9G8qU-U9-he2cQx",
          StandardTemplateDesktop: "_2uW9K6fqc6jZX1XBjnLjw",
          DesktopToastTemplate: "QbSr4hMpMfp0Qtsg4qOh5",
          PinnedTemplateWeb: "_3BvcYKoq-n7GgNwbfFgRAc",
          PinnedTemplateDesktop: "alS2LW_qAwNkYk_GPUC_3",
          AppLogo: "CA_EGBMvnnGy5ib6McPk1",
          AppLogoBackgroundImage: "_1WuzAPck-kGxa4mMIJvAzm",
          MarkedRead: "Wu9rtfDDzG6xfABpqX6oN",
          markReadBackground: "ULHzVL1tuahqUcVisVW-P",
          Unread: "_2kLHZTRgRl0POZfXPcfxks",
          PlayerNickName: "_2YpLUGZ7uC8ZZn67r0WFW_",
          FullName: "_31kBipdYxJf7OOfdvXt0_h",
          IngameTitle: "uoMiFtc9c1Qj-4N-yFmVY",
          OnlineTitle: "_1HmXUbyHRzGqMtpIXrI9-T",
          GroupMessageTitle: "_2sd1s2w2m26_3gQi1EUTR_",
          GroupMessageUserName: "gAoOCl1gHHigL5slBv_yA",
          GroupMessageBody: "_8o4Xz7dGPPQqf36w2HN--",
          GroupMessageIcon: "_15V41jl8st_uQsDMGCqnBx",
          Body: "_1bPTPIVs6QoX2gWvrhM6J-",
          FriendInGameAppColor: "_3xh1N-yvA3u7rLrq-DYZ1U",
          WishlistBlurImage: "_1GTWEgiW95vRIhUWfk6omo",
          AvatarStatus: "_2wKwJWdgy12ZO1tSjI9lXY",
          IncomingCallToast: "YukY0Anz5NHyFELGf9mPn",
          ShortLogoDimensions: "_1DaCc7OUCLHfc6VrQ3OIne",
          LoadingTemplate: "_5iNL0HazAvED5sWE9InJy",
          Hide: "_40XuJsiNG2Ls-sTWqrXG8",
          ShimmerLogo: "_1vzYeDqT7Eiy-LKfLm42sI",
          ShimmerBody: "_12dqPPvVDehwCa8i2oM-eA",
          ShimmerHeader: "_2ZzsgKvsaWmnKQRz0W83GA",
          loading: "_2qr7PO4jvslSCsJbTRFpwd",
          BottomBar: "IUPLZJhHdBex9tQTgC6Ug",
          NewIndicator: "_38yM72K6RxKmOhKZtInP2x",
          AllNotificationsCommentPlus: "WbA7y77Ujam9JOnYuGsMj",
          FriendIndicator: "_2Hphxk564S5yQHog-MFXfN",
          HideButton: "_3M-7E5Nj8iNX_jL5pAQDy_",
          SteamNotificationWrapper: "UmtNgXD92RoDeYjxKEskk",
        };
      },
      87910: (V) => {
        V.exports = { WebPinnedNotification: "_34nLZDNirxRHssbsjB_dJf" };
      },
    },
  ]);
})();
