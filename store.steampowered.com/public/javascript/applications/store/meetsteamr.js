/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [98620],
    {
      54357: (N, L, t) => {
        "use strict";
        t.d(L, { B: () => m });
        var e = t(7850),
          E = t(90626);
        function j(p) {
          const [D, i] = useState(!1);
          return (
            useEffect(() => {
              window.SSR && (window.SSR.hydrated = !0),
                startTransition(() => i(!0));
            }, []),
            jsx(a.Provider, { value: D, children: p.children })
          );
        }
        const a = (0, E.createContext)(!1);
        function M() {
          return !0;
        }
        const T = Intl.DateTimeFormat().resolvedOptions().timeZone,
          C =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((p) => p.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          B = C && decodeURIComponent(C);
        function m() {
          return M() ? T : (B ?? T);
        }
        function o() {
          "document" in globalThis &&
            T &&
            (document.cookie = `timezoneName=${T};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        o();
      },
      16369: (N, L, t) => {
        "use strict";
        t.d(L, { H: () => j });
        var e = t(99412),
          E = t(72609);
        const j = () => (E.TS.EUNIVERSE === e.Rv ? 2581 : 45267781);
      },
      69909: (N, L, t) => {
        "use strict";
        t.d(L, {
          Lc: () => U,
          Mr: () => R,
          Sk: () => b,
          Ue: () => c,
          _t: () => W,
          ee: () => v,
          hh: () => o,
          mG: () => h,
          my: () => D,
          rF: () => S,
          us: () => y,
        });
        var e = t(16936),
          E = t(54357),
          j = t(80902),
          a = t(16369),
          M = t(36174),
          T = t(65946),
          C = t(92264),
          B = t(87937),
          m = t.n(B);
        const o = "America/Los_Angeles";
        function p(l, g) {
          return {
            queryKey: i(l, g),
            queryFn: () => (0, e.t3)(g),
            enabled: (0, a.H)() == l,
            staleTime: M.Kp.PerMinute * 10,
          };
        }
        function D(l, g) {
          return (0, j.I)(p(l, g));
        }
        const i = (l, g) => ["useMeetSteamGetAvailability", l, g];
        function O(l, g, I) {
          return {
            queryKey: P(l, g, I),
            queryFn: async () => {
              const w = await (0, e.vd)(g);
              return w ? JSON.parse(w) : {};
            },
            enabled: (0, a.H)() == l && !!I,
          };
        }
        function h(l, g, I) {
          return (0, j.I)(O(l, g, I));
        }
        const P = (l, g, I) => ["useMeetSteamGetRegistrationDetails", l, g, I];
        function A(l) {
          return {
            queryKey: ["MeetSteamRegistrantInfo", l],
            queryFn: () => (0, e.Nc)(),
            enabled: !!l,
            staleTime: M.Kp.PerMinute * 10,
          };
        }
        function v(l) {
          return (0, j.I)(A(l));
        }
        function x(l, g) {
          return {
            queryKey: ["useMeetSteamQRCode", l, g],
            queryFn: () => (0, e.EI)(l, g),
            enabled: !!g && !0,
            staleTime: M.Kp.PerMinute * 10,
          };
        }
        function U(l, g) {
          return (0, j.I)(x(l, g)).data?.qrcode;
        }
        function b(l, g = Intl.DateTimeFormat().resolvedOptions().timeZone) {
          return l.location_type === "in_person"
            ? (l.in_person_time_zone ?? o)
            : g;
        }
        function W(l) {
          const g = (0, E.B)();
          return (0, T.q3)(() => ({
            rtime_start: l.rtime_start,
            rtime_end: l.rtime_end,
            sDisplayTimeZone: b(l, g),
          }));
        }
        function c(l, g) {
          const I = m().unix(l),
            F = m().unix(l).tz(g).utcOffset() - I.utcOffset();
          return new Date((l + F * 60) * 1e3);
        }
        function S(l, g) {
          const I = c(l, g),
            w = new Date();
          return I.getFullYear() == w.getFullYear()
            ? (0, C.$w)(I)
            : (0, C._9)(I);
        }
        function y(l, g) {
          const I = m().unix(l),
            F = m().unix(l).tz(g).utcOffset() - I.utcOffset();
          return (0, C.KC)(l + F * 60);
        }
        function R(l, g, I, w) {
          const F = m().unix(l),
            Q = m().unix(l).tz(I).utcOffset() - F.utcOffset(),
            Z = m().unix(g),
            de = m().unix(g).tz(I),
            re = de.utcOffset() - Z.utcOffset();
          return (
            (0, C.Vx)(l + Q * 60, g + re * 60, !0) +
            (w ? "" : " " + de.format("z"))
          );
        }
      },
      16936: (N, L, t) => {
        "use strict";
        t.d(L, {
          t3: () => m,
          EI: () => i,
          Nc: () => D,
          vd: () => p,
          _V: () => o,
          kR: () => O,
        });
        var e = t(72609);
        const E = "meetsteam/availability",
          j = "meetsteam/registrations",
          a = "meetsteam/registrationdetails",
          M = "meetsteam/updateregistration",
          T = "meetsteam/registrantinfo",
          C = "meetsteam/attendance_qrcode";
        async function B(h, P) {
          const A = new URL(e.TS.STORE_BASE_URL + h);
          for (const [x, U] of Object.entries(P)) A.searchParams.set(x, U);
          const v = await fetch(A, { credentials: "include" });
          if (!v.ok) throw new Error(`${A} answered ${v.status}`);
          return await v.json();
        }
        async function m(h) {
          return (await B(E, { gid: h })).availability ?? [];
        }
        async function o(h) {
          return (await B(j, { gid: h })).registrations ?? [];
        }
        async function p(h) {
          return (await B(a, { gid: h })).strJSONData ?? "";
        }
        async function D() {
          return (
            (await B(T, {})).info ?? { realname: "", email: "", partners: [] }
          );
        }
        async function i(h, P) {
          return await B(C, { gid: h, accountid: String(P) });
        }
        async function O(h) {
          const P = e.TS.STORE_BASE_URL + M,
            A = new URLSearchParams({
              gid: h.gid,
              group_id: String(h.group_id),
              session_id: String(h.session_id),
              guest_count: String(h.guest_count),
              jsondata: h.jsondata,
              skip_email: h.skip_email ? "1" : "0",
            }),
            v = await fetch(P, {
              method: "POST",
              credentials: "include",
              body: A,
            });
          if (!v.ok) throw new Error(`${P} answered ${v.status}`);
          return (await v.json()).success;
        }
      },
      24525: (N, L, t) => {
        "use strict";
        t.d(L, { $e: () => E, B7: () => a, Pe: () => x, Pv: () => j });
        const e = 0,
          E = 1,
          j = 2,
          a = 4,
          M = 8,
          T = 16,
          C = 32,
          B = 64,
          m = 128,
          o = 256,
          p = 512,
          D = 1024,
          i = 2048,
          O = 4096,
          h = 8192,
          P = 16384,
          A = 32768,
          v = 65536,
          x = 1073741824,
          U = null;
      },
      67529: (N, L, t) => {
        "use strict";
        t.d(L, { IU: () => m, by: () => o, sc: () => M });
        var e = t(3166),
          E = t(35413),
          j = t(71742),
          a = t(24525);
        const M = 0,
          T = "061818254b2c99ac49e6626adb128ed1282a392f",
          C = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          B = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          m = 120;
        class o {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(i) {
            this.m_unAppID = i;
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
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, T);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, T);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == a.B7 || this.apptype == a.Pv;
          }
          BuildAppURL(i, O) {
            return i
              ? e.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  i +
                  ".jpg"
              : (0, E.t)(O);
          }
          DeserializeFromMessage(i) {
            (this.m_bInitialized = !0),
              (this.m_strName = i.name()),
              (this.m_strIconURL = i.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = i.app_type());
          }
          DeserializeFromAppOverview(i) {
            i.icon_hash() && i.app_type() != a.Pe
              ? ((this.m_bInitialized = !0),
                (this.m_strName = i.display_name()),
                (this.m_strIconURL = i.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = i.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(i) {
            try {
              (this.m_strName = i.strName),
                (this.m_strIconURL = i.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(i.strUpdatedFromServer)),
                (this.m_eAppType = i.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, j.wT)(
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
        class p {}
      },
      35413: (N, L, t) => {
        "use strict";
        t.d(L, { d: () => E, t: () => j });
        var e = t(3166);
        const E = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function j(a, M) {
          let T = ".jpg";
          (!a || a === "0000000000000000000000000000000000000000") && (a = E),
            a.length == 44 && ((T = a.substr(-4)), (a = a.substr(0, 40)));
          let C = e.TS.AVATAR_BASE_URL;
          return (
            C ||
              ((C = e.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (C += a.substr(0, 2) + "/")),
            (C += a),
            M && M != "small" && (C += "_" + M),
            (C += T),
            C
          );
        }
      },
      7582: (N, L, t) => {
        "use strict";
        t.d(L, { HD: () => B, f1: () => O, s4: () => h, sB: () => i });
        var e = t(19367),
          E = t.n(e),
          j = t(90626),
          a = t(59432),
          M = t(47689),
          T = t(77291);
        class C {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, a.mm)();
          }
          set nOverrideDateNow(A) {
            (0, a.ai)(A);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, a.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, a.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, a.mm)();
          }
          ParseDevOverrides(A) {
            if (!A || A.length == 0) return;
            new URLSearchParams(A[0] == "?" ? A.substring(1) : A).has("t");
          }
        }
        const B = new C();
        (0, T.V)("g_EventCalendarDevFeatures", B);
        function m(P = 1) {
          const [A, v] = React.useState(() => D()),
            x = useCancelTokenSource("useTimeNowWithOverride"),
            U = React.useCallback(() => {
              x.token.reason || v(D());
            }, []);
          return (
            React.useEffect(() => {
              const b = 1e3 * P,
                W = Date.now() % b,
                c = b - W,
                S = window.setTimeout(U, c);
              return () => {
                window.clearTimeout(S);
              };
            }, [A, P, U]),
            A
          );
        }
        const p = Math.floor(new Date().getTime() / 1e3);
        function D() {
          const P = Math.floor(Date.now() / 1e3);
          return B.nOverrideDateNow ? B.nOverrideDateNow + (P - p) : P;
        }
        function i() {
          return B.nOverrideDateNow ?? p;
        }
        function O() {
          return j.useMemo(() => i(), []);
        }
        function h() {
          return j.useMemo(() => B.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      54407: (N, L, t) => {
        "use strict";
        t.d(L, { B3: () => b, KM: () => P, KT: () => U });
        var e = t(41735),
          E = t.n(e),
          j = t(58632),
          a = t.n(j),
          M = t(90626),
          T = t(80902),
          C = t(75233),
          B = t(72604),
          m = t(76559),
          o = t(34592),
          p = t(3166),
          D = t(35038),
          i = t(27386),
          O = t(68312);
        const h = "nicknames";
        function P(c) {
          const S = (0, O.KV)(),
            { data: y, isLoading: R } = (0, T.I)({
              queryKey: [h],
              queryFn: async () => {
                const l = new Map();
                if (p.iA.logged_in) {
                  const g = D.w.Init(i.w_T),
                    w = (await i.xtC.GetNicknameList(S, g)).Body().toObject();
                  w?.nicknames &&
                    w.nicknames.length > 0 &&
                    w.nicknames.forEach((F) => {
                      F.accountid &&
                        F.nickname &&
                        l.set(F.accountid, F.nickname);
                    });
                }
                return l;
              },
            });
          return y ? y.get(c) : null;
        }
        async function A(c) {
          if (!c || c.length == 0) return [];
          const S =
            (0, p.yK)() == "community"
              ? p.TS.COMMUNITY_BASE_URL
              : p.TS.STORE_BASE_URL;
          if (c.length == 1) {
            const y = { accountid: c[0], origin: self.origin },
              R = await E().get(`${S}actions/ajaxgetavatarpersona`, {
                params: y,
              });
            if (
              !R ||
              R.status != 200 ||
              R.data?.success != B.R ||
              !R.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, o.H))(R).strErrorMsg}`;
            return [R.data.userinfo];
          } else {
            const y = { accountids: c.join(","), origin: self.origin },
              R = await E().get(`${S}actions/ajaxgetmultiavatarpersona`, {
                params: y,
              });
            if (
              !R ||
              R.status != 200 ||
              R.data?.success != B.R ||
              !R.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, o.H))(R).strErrorMsg}`;
            const l = new Map();
            return (
              R.data.userinfos.forEach((g) =>
                l.set(new m.b(g.steamid).GetAccountID(), g),
              ),
              c.map((g) => l.get(g))
            );
          }
        }
        const v = new (a())((c) => A(c), { cache: !1 }),
          x = "avatarandpersonas";
        function U(c) {
          const { data: S, isLoading: y } = (0, T.I)({
            queryKey: [x, c],
            queryFn: () => v.load(c),
          });
          return [S, y];
        }
        function b(c) {
          const S = (0, C.jE)(),
            { data: y, isLoading: R } = (0, T.I)({
              queryKey: [x, c],
              queryFn: async () => {
                const g = await v.loadMany(c);
                return (
                  g.forEach((I) => {
                    if (I instanceof Error) return;
                    const w = [x, new m.b(I.steamid).GetAccountID()];
                    S.setQueryData(w, I);
                  }),
                  g
                );
              },
              enabled: c?.length > 0,
            }),
            l = (0, M.useMemo)(() => {
              const g = new Array();
              return (
                y?.forEach((I) => {
                  I instanceof Error || g.push(I);
                }),
                g
              );
            }, [y]);
          return R ? null : l;
        }
        function W(c) {
          return ReactQueryClient.getQueryData([x, c]);
        }
      },
      73191: (N, L, t) => {
        "use strict";
        t.d(L, { Hh: () => o, vs: () => B });
        var e = t(7850),
          E = t(90626),
          j = t(96538),
          a = t(56330),
          M = t.n(a),
          T = t(18210),
          C = t(85599);
        function B(p) {
          const [D, i] = (0, E.useState)(() => !!p),
            [O, h] = (0, E.useState)(!1),
            [P, A] = (0, E.useState)(!1),
            [v, x] = (0, E.useState)(null),
            [U, b] = (0, E.useState)(null),
            [W, c] = (0, E.useState)(null),
            [S, y] = (0, E.useState)(null),
            [R, l] = (0, E.useState)(null);
          return {
            bLoading: D,
            bError: O,
            bSuccess: P,
            strError: v,
            strSuccess: U,
            elSuccess: S,
            elError: W,
            strThrobber: R,
            fnSetLoading: i,
            fnSetError: h,
            fnSetSuccess: A,
            fnSetStrError: x,
            fnSetStrSuccess: b,
            fnSetElSuccess: y,
            fnSetElError: c,
            fnSetThrobber: l,
          };
        }
        function m(p, D) {
          D != k_EResultOK ? p.fnSetError(!0) : p.fnSetSuccess(!0);
        }
        function o(p) {
          const {
              strDialogTitle: D,
              state: i,
              closeModal: O,
              strThrobber: h,
            } = p,
            {
              bLoading: P,
              bError: A,
              bSuccess: v,
              strError: x,
              strSuccess: U,
              elSuccess: b,
              elError: W,
              strThrobber: c,
            } = i;
          return A || x || W
            ? (0, e.jsxs)(j.o0, {
                strTitle: D,
                bAlertDialog: !0,
                closeModal: O,
                className: a.SuccessErrorDialog,
                children: [
                  !!x &&
                    (0, e.jsx)("div", {
                      className: a.ErrorStylesWithIcon,
                      children:
                        x || (0, T.we)("#Error_ErrorCommunicatingWithNetwork"),
                    }),
                  !!W && W,
                ],
              })
            : v || U || b
              ? (0, e.jsx)(j.o0, {
                  strTitle: D,
                  strDescription: U || (0, T.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: O,
                  className: a.SuccessErrorDialog,
                  children: (0, e.jsx)(e.Fragment, { children: !!b && b }),
                })
              : (0, e.jsx)(j.o0, {
                  strTitle: D,
                  className: a.SuccessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                  children: (0, e.jsx)(C.t, {
                    string: h || c || (0, T.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                });
        }
      },
      179: (N, L, t) => {
        "use strict";
        t.d(L, {
          Bm: () => a,
          QD: () => T,
          f3: () => j,
          iV: () => B,
          ip: () => C,
          le: () => M,
        });
        var e = t(90626),
          E = t(92757);
        function j(m, o) {
          let p;
          if (typeof m == "string") p = m;
          else if ("location" in m) p = m.location.search;
          else if ("search" in m) p = m.search;
          else return;
          const D = new URLSearchParams(p.substring(1));
          if (D.has(o)) {
            const i = D.getAll(o);
            return i[i.length - 1];
          }
        }
        function a(m, o, p, D = !1) {
          const i = new URLSearchParams(m.location.search.substring(1));
          if (p != null && p != null) {
            if (i.get(o) == p) return;
            i.set(o, p);
          } else {
            if (!i.has(o)) return;
            i.delete(o);
          }
          D
            ? m.replace(`?${i.toString()}`, { ...m.location.state })
            : m.push(`?${i.toString()}`);
        }
        function M(m, o, p) {
          a(m, o, p, !0);
        }
        function T(m, o) {
          const p = (0, E.W6)(),
            D = (0, E.zy)(),
            i = (0, e.useMemo)(() => {
              const h = j(D.search, m);
              return h != null && h != null
                ? o != null && o != null
                  ? typeof o == "boolean"
                    ? o.constructor(h !== "false")
                    : o.constructor(h)
                  : h
                : o;
            }, [D.search, m, o]),
            O = (0, e.useCallback)(
              (h, P = !1) => {
                a(p, m, h != null && h != null ? String(h) : null, P);
              },
              [p, m],
            );
          return [i, O];
        }
        function C(m, o, p = !1) {
          const D = new URLSearchParams(m.location.search.substring(1));
          for (const i in o)
            if (o.hasOwnProperty(i)) {
              const O = o[i];
              D.delete(i), O != null && O != null && D.append(i, O);
            }
          p
            ? m.replace(`?${D.toString()}`, { ...m.location.state })
            : m.push(`?${D.toString()}`);
        }
        function B(m, o) {
          C(m, o, !0);
        }
      },
      59490: (N, L, t) => {
        "use strict";
        t.d(L, { p: () => B });
        var e = t(7850),
          E = t(90626),
          j = t(76559),
          a = t(54407),
          M = t(15736),
          T = t.n(M),
          C = t(3166);
        function B(m) {
          const {
              accountID: o,
              bHideWhenNotAvailable: p,
              bHideName: D,
              bLink: i = !0,
            } = m,
            [O] = (0, a.KT)(o),
            h = (0, a.KM)(o),
            P = E.useMemo(() => j.b.InitFromAccountID(o), [o]),
            A = `${C.TS.COMMUNITY_BASE_URL}profiles/${P.ConvertTo64BitString()}`,
            v = i ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: O
              ? (0, e.jsxs)(v, {
                  href: i ? A : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: M.SmallAvatar,
                      src: O.avatar_url,
                      "data-miniprofile": "s" + P.ConvertTo64BitString(),
                    }),
                    !D &&
                      (0, e.jsx)("span", {
                        children: h
                          ? `${h} (${O.persona_name})`
                          : O.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !p && (0, e.jsx)("span", { children: o }),
                }),
          });
        }
      },
      96538: (N, L, t) => {
        "use strict";
        t.d(L, {
          mt: () => B,
          o0: () => h.o0,
          eV: () => P.eV,
          KG: () => h.KG,
          Ee: () => h.Ee,
          x_: () => M.x_,
          of: () => p,
          pY: () => h.pY,
          EN: () => a.E,
        });
        var e = t(7850),
          E = t(90626),
          j = t(16412),
          a = t(69168),
          M = t(50731),
          T = t(15568);
        function C(v) {
          const { labelledBy: x } = v || {},
            [U, b] = E.useState(void 0),
            W = E.useMemo(() => ({ setHeaderId: b }), []);
          return { headerId: x || U, context: W };
        }
        function B(v) {
          const {
              active: x,
              onDismiss: U,
              className: b,
              modalClassName: W,
              bGamepadUIScrollWithin: c,
              children: S,
              ...y
            } = v,
            { headerId: R, context: l } = C({
              labelledBy: v["aria-labelledby"],
            });
          return (0, e.jsx)(j.t6.Provider, {
            value: l,
            children: (0, e.jsx)(a.E, {
              active: x,
              children: (0, e.jsx)(M.x_, {
                onEscKeypress: U,
                className: W,
                bGamepadUIScrollWithin: c,
                children: (0, e.jsx)(j.UC, {
                  role: "dialog",
                  "aria-labelledby": R,
                  className: b,
                  ...y,
                  children: S,
                }),
              }),
            }),
          });
        }
        function m(v) {
          const {
              onDismiss: x,
              className: U,
              modalClassName: b,
              bGamepadUIScrollWithin: W,
              children: c,
              ...S
            } = v,
            { headerId: y, context: R } = C();
          return jsx(Dialog.DialogStructureContext.Provider, {
            value: R,
            children: jsx(PopupWindow, {
              ...S,
              onDismiss: x,
              children: jsx(ModalPosition, {
                onEscKeypress: x,
                className: b,
                bGamepadUIScrollWithin: W,
                children: jsx(Dialog.Content, {
                  role: "dialog",
                  "aria-labelledby": y,
                  "aria-label": S.strTitle,
                  className: U,
                  children: c,
                }),
              }),
            }),
          });
        }
        const o = (v) => m({ modal: !0, ...v });
        function p(v) {
          const { className: x, children: U } = v;
          return (0, e.jsx)(a.E, {
            active: !0,
            children: (0, e.jsx)("div", { className: x, children: U }),
          });
        }
        var D = t(30343);
        function i(v) {
          const x = React.useMemo(() => O(), []);
          return jsx(DialogOverlay, { ...v, DialogWrapper: x });
        }
        function O() {
          return function (x) {
            const { className: U, active: b, children: W, modalKey: c } = x,
              S = React.useRef(void 0);
            return (
              useActivateNavTree(S, b, !0),
              jsx(FocusNavigationRoot, {
                className: U,
                navTreeRef: S,
                modal: !0,
                enabled: b,
                navID: `ModalDialogOverlay_${c}`,
                children: W,
              })
            );
          };
        }
        var h = t(1880),
          P = t(90506),
          A = t(47515);
      },
      15568: (N, L, t) => {
        "use strict";
        t.d(L, { wA: () => v });
        var e = t(7850),
          E = t(1418),
          j = t(2259),
          a = t(90626),
          M = t(72739),
          T = t(71568),
          C = t(9705),
          B = t(34360),
          m = t(31032),
          o = t(69168),
          p = t(83203),
          D = t(44930),
          i = t(36707),
          O = t(25091);
        function h(c) {
          const { popup: S, className: y, ...R } = c,
            l = (0, O.GD)(S),
            g = a.useRef(null);
          return (
            a.useEffect(() => {
              const I = g.current;
              if (I && (0, D.Fj)(S, "Window.SetResizeGrip")) {
                let w = 0,
                  F = 0;
                const q = I.getBoundingClientRect(),
                  Q = I.ownerDocument.defaultView;
                q &&
                  Q &&
                  !l &&
                  ((w = Math.ceil(Q.innerWidth - q.left)),
                  (F = Math.ceil(Q.innerHeight - q.top))),
                  S.SteamClient.Window.SetResizeGrip(w, F);
              }
              return () => {
                (0, D.Fj)(S, "Window.SetResizeGrip") &&
                  S.SteamClient.Window.SetResizeGrip(0, 0);
              };
            }, [S, l]),
            l
              ? null
              : (0, e.jsx)("div", {
                  className: (0, i.A)("window_resize_grip", y),
                  ref: g,
                  ...R,
                })
          );
        }
        var P = t(30096),
          A = t(3166);
        const v = (c) => x({ modal: !0, ...c });
        function x(c) {
          const S = (0, T.R7)().ownerWindow,
            y = (0, A.Qn)(),
            [R, l] = a.useState(() =>
              y ||
              (c.onlyPopoutIfNeeded === !0 &&
                c.popupHeight < S.innerHeight * 0.9 &&
                c.popupWidth < S.innerWidth * 0.9 &&
                S.document.visibilityState == "visible")
                ? "inline"
                : "popout",
            );
          return R === "inline"
            ? (0, e.jsx)(o.E, { active: !0, children: c.children })
            : R === "popout"
              ? (0, e.jsx)(b, { ...c })
              : null;
        }
        function U(c) {
          const {
              popup: S,
              children: y,
              bFitToContent: R,
              className: l,
              ...g
            } = c,
            I = a.useCallback(
              (F) => {
                const q = Math.ceil(F.borderBoxSize[0].inlineSize),
                  Q = Math.ceil(F.borderBoxSize[0].blockSize);
                S?.SteamClient.Window.ResizeTo(q, Q, !0);
              },
              [S],
            ),
            w = (0, j.wY)(I);
          return (0, e.jsx)("div", {
            className: (0, i.A)("PopupFullWindow", R && "FitToContent", l),
            ref: R ? w : void 0,
            ...g,
            children: y,
          });
        }
        function b(c) {
          const {
              strName: S,
              strTitle: y,
              popupWidth: R,
              popupHeight: l,
              browserType: g,
              onDismiss: I,
              bFitToContent: w,
              refPopup: F,
              children: q,
              titleBarClassName: Q,
              saveDimensionsKey: Z,
            } = c,
            re = (0, T.R7)()?.ownerWindow,
            le = (0, m.yk)(),
            ge = { ...(0, C.h3)(Z), onClose: I };
          let ee = 0;
          c.resizable && (ee |= T.Wf.Resizable),
            (c.minWidth || c.minHeight) &&
              (ee |= T.Wf.ApplyBrowserScaleToDimensions),
            c.fullscreen && (ee |= T.Wf.FullScreen);
          const he = "PopupWindow_" + (S ? `${S}_` : "") + a.useId(),
            { popup: $, element: fe } = (0, C.OJ)(
              he,
              {
                title: y,
                dimensions: { width: R, height: l },
                html_class: "client_chat_frame fullheight ModalDialogPopup",
                body_class: "fullheight ModalDialogBody",
                popup_class: "fullheight",
                browserType: g,
                minWidth: c.minWidth,
                minHeight: c.minHeight,
                replace_existing_popup: !0,
                center_on_window: le?.BCenterPopupsOnWindow() ? re : void 0,
                eCreationFlags: ee,
                target_browser: le?.GetBrowserInfo(),
              },
              ge,
            );
          if (
            (a.useEffect(
              () => ((0, P.cZ)(F, $), () => (0, P.cZ)(F, void 0)),
              [F, $],
            ),
            a.useEffect(() => {
              $ && ($.document.title = y ?? S);
            }, [$, y, S]),
            !fe)
          )
            return null;
          const se = c.modal ?? c.onlyPopoutIfNeeded,
            _e = !c.resizable;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              se && (0, e.jsx)(W, { popup: $ }),
              M.createPortal(
                (0, e.jsx)(T.kc, {
                  ownerWindow: $,
                  children: (0, e.jsxs)(E.Y, {
                    children: [
                      (0, e.jsxs)(U, {
                        popup: $,
                        bFitToContent: w,
                        onContextMenu: B.aE,
                        children: [
                          (0, e.jsx)(p.c, {
                            className: Q,
                            hideMin: _e,
                            hideMax: _e,
                            popup: $,
                            hideActions: !I,
                          }),
                          (0, e.jsx)(m.EO, {
                            bCenterPopupsOnWindow: le?.BCenterPopupsOnWindow(),
                            browserInfo: le?.GetBrowserInfo(),
                            children: q,
                          }),
                        ],
                      }),
                      c.resizable && !w && (0, e.jsx)(h, { popup: $ }),
                    ],
                  }),
                }),
                fe,
              ),
            ],
          });
        }
        function W(c) {
          const { popup: S } = c,
            y = a.useCallback(() => {
              S?.SteamClient.Window.BringToFront();
            }, [S]);
          return (
            a.useEffect(y, [y]),
            (0, e.jsx)(o.E, {
              active: !0,
              children: (0, e.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                onClick: y,
              }),
            })
          );
        }
      },
      12932: (N, L, t) => {
        "use strict";
        t.d(L, { qx: () => h });
        var e = t(7850),
          E = t(16412),
          j = t(18210),
          a = t(36118),
          M = t(90626),
          T = t(36707),
          C = t(95695),
          B = t.n(C),
          m = t(25792),
          o = t(64734),
          p = t.n(o),
          D = t(65946),
          i = t(11243);
        function O(A) {
          const {
              title: v,
              tooltip: x,
              getMinimized: U,
              toggleMinimized: b,
              className: W,
              children: c,
              elAdditionalButtons: S,
            } = A,
            y = (0, D.q3)(() => U());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, T.A)(
                  W,
                  o.SectionTitleHeader,
                  o.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, T.A)(
                      C.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [v, !!x && (0, e.jsx)(i.o, { tooltip: x })],
                  }),
                  (0, e.jsxs)("div", {
                    className: o.SectionTitleButtons,
                    children: [
                      S,
                      (0, e.jsx)(P, { bIsMinimized: y, fnToggleMinimize: b }),
                    ],
                  }),
                ],
              }),
              !y && (0, e.jsx)(m.tH, { children: c }),
            ],
          });
        }
        function h(A) {
          const [v, x] = M.useState(!!A.bStartMinimized);
          return (0, e.jsx)(O, {
            ...A,
            getMinimized: () => v,
            toggleMinimized: () => x(!v),
            children: A.children,
          });
        }
        function P(A) {
          const { bIsMinimized: v, fnToggleMinimize: x } = A,
            U = v ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(E.$n, {
            "data-tooltip-text": (0, j.we)(U),
            onClick: x,
            children: A.bIsMinimized
              ? (0, e.jsx)(a.hz4, {})
              : (0, e.jsx)(a.Xjb, {}),
          });
        }
      },
      47689: (N, L, t) => {
        "use strict";
        t.d(L, { m: () => a });
        var e = t(41735),
          E = t.n(e),
          j = t(90626);
        function a(M) {
          const T = j.useRef(E().CancelToken.source());
          return (
            j.useEffect(() => {
              const C = T.current;
              return () => C.cancel(M ? `${M}: unmounting` : "unmounting");
            }, [M]),
            T.current
          );
        }
      },
      27628: (N, L, t) => {
        "use strict";
        t.r(L), t.d(L, { MeetSteamRoutes: () => Ee, default: () => We });
        var e = t(7850),
          E = t(58732),
          j = t(92757),
          a = t(25792),
          M = t(99412),
          T = t(72604),
          C = t(51614),
          B = t(41735),
          m = t.n(B),
          o = t(90626),
          p = t(69909),
          D = t(7582),
          i = t(98609),
          O = t(67705);
        function h(_, s, n, u) {
          return (0, C.n)({
            mutationFn: async ({ bIncludeSelf: d, rgGuests: r }) => {
              const f = new FormData();
              f.append("sessionid", (0, O.KC)()),
                f.append("gid", _),
                f.append("accountid", "" + s),
                f.append("meetsteam_group_id", "" + n),
                f.append("meetsteam_session_id", "" + u),
                f.append("include_self", "" + (d ? 1 : 0)),
                r?.length && f.append("guests", r.join("|"));
              const z = `${i.TS.STORE_BASE_URL}meetsteam/ajaxupdateattendance`;
              return (
                (await m().post(z, f, { withCredentials: !0 }))?.data
                  ?.success == T.R
              );
            },
          });
        }
        function P(_, s, n) {
          return (0, C.n)({
            mutationFn: async ({ nCapacity: u }) => {
              const d = new FormData();
              d.append("sessionid", (0, O.KC)()),
                d.append("gid", _),
                d.append("meetsteam_group_id", "" + s),
                d.append("meetsteam_session_id", "" + n),
                d.append("capacity", "" + u);
              const r = `${i.TS.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`;
              return (
                (await m().post(r, d, { withCredentials: !0 }))?.data
                  ?.success == T.R
              );
            },
          });
        }
        function A(_) {
          return _.reduce(
            (s, n) => (
              s[n.relativeToToday] || (s[n.relativeToToday] = []),
              s[n.relativeToToday].push(n),
              s
            ),
            { today: [], past: [], future: [] },
          );
        }
        function v(_, s, n) {
          for (const u of _)
            if (u.group_id === s) {
              const d = u.sessions.find((r) => r.id === n);
              if (d) return { group: u, session: d };
            }
          return { group: null, session: null };
        }
        function x(_, s) {
          const n = (0, D.f1)(),
            [u] = (0, o.useState)(() =>
              (0, O.Tc)("registrations", "application_config")
                .map((r) => ((r.userReg = JSON.parse(r.jsondata)), r))
                .sort((r, f) => {
                  const z = v(
                    _.jsondata.meet_steam_groups,
                    r.group_id,
                    r.session_id,
                  );
                  return (
                    (v(_.jsondata.meet_steam_groups, f.group_id, f.session_id)
                      ?.session?.rtime_start || 0) -
                    (z?.session?.rtime_start || 0)
                  );
                })
                .map((r) => {
                  const f = v(
                    _.jsondata.meet_steam_groups,
                    r.group_id,
                    r.session_id,
                  );
                  return (
                    (r.relativeToToday = b(f?.session, n)),
                    (r.rtSesssionTime = f?.session?.rtime_start ?? 0),
                    r
                  );
                }),
            ),
            d = s?.trim().toLowerCase() || "";
          return (0, o.useMemo)(
            () =>
              u.filter(
                (r) =>
                  !d.length ||
                  r.userReg.name?.toLowerCase().includes(d) ||
                  r.userReg.company?.toLowerCase().includes(d) ||
                  r.userReg.guest_names?.find((f) =>
                    f.toLowerCase().includes(d),
                  ) ||
                  r.userReg.email_override?.toLowerCase().includes(d),
              ),
            [u, s],
          );
        }
        function U(_, s) {
          return (0, o.useMemo)(() => A(_), [_, s]);
        }
        function b(_, s) {
          if (!_) return "past";
          const n = (0, p.Sk)(_),
            u = (0, p.Ue)(_.rtime_start, n),
            d = s !== void 0 ? new Date(s * 1e3) : new Date(),
            r = new Date(d.getFullYear(), d.getMonth(), d.getDate()),
            f = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
          return u >= r && u < f ? "today" : u < r ? "past" : "future";
        }
        var W = t(48421),
          c = t(54407),
          S = t(36118),
          y = t(16412),
          R = t(73191),
          l = t(179),
          g = t(59490),
          I = t(1880),
          w = t(69168),
          F = t(85599),
          q = t(12932),
          Q = t(36707),
          Z = t(18210),
          de = t(92264),
          re = t(30096),
          le = t(15588),
          V = t.n(le),
          ge = t(40313),
          ee = t.n(ge),
          he = t(20117);
        function $(_) {
          const [s] = (0, l.QD)("gid"),
            n = (0, W.RR)(s),
            u = (0, M.sfN)(i.TS.LANGUAGE),
            d = (0, o.useCallback)(
              () =>
                window.location.assign(
                  `${i.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${s}`,
                ),
              [s],
            );
          return n
            ? (0, e.jsxs)("div", {
                className: V().Ctn,
                children: [
                  (0, e.jsxs)("div", {
                    className: V().EventName,
                    children: [
                      (0, e.jsx)("h2", { children: n.GetNameWithFallback(u) }),
                      (0, e.jsx)("a", {
                        href: `${i.TS.STORE_BASE_URL}meetsteam/${s}`,
                        target: "_blank",
                        children: "See Event Details",
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: ee().AtendeeListButtonRow,
                    children: (0, e.jsxs)(y.$n, {
                      onClick: d,
                      children: [
                        (0, e.jsx)(S.uMb, {
                          angle: 180,
                          className: ee().BackToListIcon,
                        }),
                        "Back to full list",
                      ],
                    }),
                  }),
                  (0, e.jsx)(fe, { eventModel: n }),
                ],
              })
            : (0, e.jsx)(F.t, { string: (0, Z.we)("#Loading") });
        }
        function fe(_) {
          const { eventModel: s } = _,
            n = U(x(s)),
            [u] = (0, l.QD)("accountid"),
            d = (0, D.f1)();
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: V().User,
                children: (0, e.jsx)(g.p, { accountID: u }),
              }),
              (0, e.jsx)(se, {
                eventModel: s,
                rgUserRegs: n.today,
                strTitle: "Today " + (0, de.$z)(d),
              }),
              (0, e.jsx)(se, {
                eventModel: s,
                rgUserRegs: n.future,
                bHideIfEmpty: !0,
                strTitle: "Future",
              }),
              (0, e.jsx)(se, {
                eventModel: s,
                rgUserRegs: n.past,
                bHideIfEmpty: !0,
                strTitle: "Past",
              }),
            ],
          });
        }
        function se(_) {
          const {
            eventModel: s,
            rgUserRegs: n,
            bHideIfEmpty: u,
            strTitle: d,
          } = _;
          return n.length == 0 && u
            ? null
            : (0, e.jsx)(q.qx, {
                title: `${d} (${n.length})`,
                bStartMinimized: u,
                children:
                  !n || n.length == 0
                    ? (0, e.jsx)("div", {
                        children: u ? "" : "No registrations",
                      })
                    : (0, e.jsx)("div", {
                        children: n
                          .sort((r, f) => r.rtSesssionTime - f.rtSesssionTime)
                          .map((r) =>
                            (0, e.jsx)(
                              Me,
                              { eventModel: s, reg: r },
                              `${r.group_id}_${r.session_id}`,
                            ),
                          ),
                      }),
              });
        }
        function _e(_) {
          const { desc: s } = _,
            [n, u] = (0, o.useState)(!1),
            d = (0, o.useCallback)(() => u((r) => !r), []);
          return (0, e.jsx)("div", {
            className: (0, Q.A)({
              [V().DescriptionWrapper]: !0,
              [V().Expanded]: n,
            }),
            onClick: d,
            onMouseEnter: () => u(!0),
            onMouseLeave: () => u(!1),
            children: s,
          });
        }
        function Me(_) {
          const { reg: s, eventModel: n } = _,
            u = new he.b2(s.steamid).GetAccountID(),
            [d] = (0, c.KT)(s.userReg.accountid),
            [r, f] = (0, o.useState)(!0),
            [z, K] = (0, o.useState)([]),
            [X, k] = (0, o.useState)(!1),
            H = s.userReg,
            { group: J, session: ne } = v(
              n.jsondata.meet_steam_groups,
              s.group_id,
              s.session_id,
            ),
            [Y, ae, me] = (0, re.uD)(),
            pe = h(n.GID, u, s.group_id, s.session_id),
            ce = new Set(
              s.guests_attendance?.length > 0
                ? s.guests_attendance.split("|")
                : [],
            ),
            oe = s.attendance_count > ce.size,
            ye = (te, ve, ie, Se) =>
              (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsxs)("span", {
                    className: V().GuestTitle,
                    children: [te, ":", "\xA0"],
                  }),
                  ve,
                  ie &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        "\xA0",
                        (0, e.jsxs)("span", {
                          className: V().GuestEmail,
                          children: ["(", ie, ")"],
                        }),
                      ],
                    }),
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      "\xA0",
                      "-",
                      (0, e.jsx)("span", {
                        children: Se
                          ? "\u2705 checked in"
                          : "\u2610 not checked in",
                      }),
                    ],
                  }),
                ],
              });
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(xe, { group: J, session: ne }),
              X
                ? (0, e.jsx)("div", {
                    className: V().CheckedIn,
                    children: "Attendee has been checked in",
                  })
                : (0, e.jsxs)("div", {
                    className: V().RegisteredUsers,
                    children: [
                      (0, e.jsx)(y.Yh, {
                        label: (0, e.jsx)(e.Fragment, {
                          children: ye(
                            "Attendee",
                            H.name || d.persona_name,
                            H.email_override,
                            oe,
                          ),
                        }),
                        checked: r,
                        onChange: f,
                      }),
                      H.guest_names?.length > 0 &&
                        (0, e.jsx)(e.Fragment, {
                          children: H.guest_names.map((te) =>
                            (0, e.jsx)(
                              y.Yh,
                              {
                                label: (0, e.jsx)(e.Fragment, {
                                  children: ye("Guest", te, void 0, ce.has(te)),
                                }),
                                checked: z.includes(te),
                                onChange: (ve) => {
                                  K((ie) =>
                                    ve
                                      ? ie.includes(te)
                                        ? ie
                                        : [...ie, te]
                                      : ie.filter((Se) => Se !== te),
                                  );
                                },
                              },
                              "" + s.group_id + "_" + s.session_id + "_" + te,
                            ),
                          ),
                        }),
                      (0, e.jsx)(y.jn, {
                        onClick: ae,
                        children: "Check in selected people",
                      }),
                    ],
                  }),
              (0, e.jsx)(w.E, {
                active: Y,
                children: (0, e.jsx)(a.tH, {
                  children: (0, e.jsx)(Te, {
                    closeModal: me,
                    bIncludeSelf: r,
                    rgGuestsAttending: z,
                    fnMarkAttendance: pe,
                    fnOnSuccess: () => k(!0),
                  }),
                }),
              }),
            ],
          });
        }
        function Te(_) {
          const {
              closeModal: s,
              bIncludeSelf: n,
              rgGuestsAttending: u,
              fnMarkAttendance: d,
              fnOnSuccess: r,
            } = _,
            f = (0, R.vs)();
          return f.bLoading
            ? (0, e.jsx)(R.Hh, {
                state: f,
                strDialogTitle: (0, Z.we)("#Saving"),
                closeModal: s,
              })
            : (0, e.jsx)(I.o0, {
                onCancel: s,
                strTitle: (0, Z.we)("#Button_Submit"),
                bAllowFullSize: !0,
                onOK: async () => {
                  f.fnSetLoading(!0),
                    d
                      .mutateAsync({ bIncludeSelf: n, rgGuests: u })
                      .then((z) => {
                        z
                          ? (r(),
                            f.fnSetStrSuccess(
                              "Success! This person has been checked in.",
                            ))
                          : f.fnSetStrError(
                              (0, Z.we)("#Login_Error_Network_Description"),
                            );
                      })
                      .catch(() =>
                        f.fnSetStrError(
                          (0, Z.we)("#Login_Error_Network_Description"),
                        ),
                      );
                },
                children: "Mark as checked in?",
              });
        }
        function xe(_) {
          const { session: s, group: n } = _,
            {
              sDisplayTimeZone: u,
              rtime_start: d,
              rtime_end: r,
            } = (0, p._t)(_.session),
            f = (0, p.rF)(d, u),
            z = (0, p.Mr)(d, r, u);
          return !s || !n
            ? (0, e.jsx)("div", { children: "Session Infomrmation Missing" })
            : (0, e.jsxs)("div", {
                className: V().SessionInfo,
                children: [
                  (0, e.jsx)("div", {
                    className: V().SessionName,
                    children: n.localized_session_title[M.Bhc],
                  }),
                  (0, e.jsxs)("div", {
                    className: V().SessionTime,
                    children: [f, " @ ", (0, e.jsx)("b", { children: z })],
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)(_e, {
                      desc: `Description: ${n.localized_session_description[M.Bhc] || ""}`,
                    }),
                  }),
                  !1,
                ],
              });
        }
        var Ce = t(90783),
          Ae = t(29645),
          G = t.n(Ae),
          De = t(36174),
          Re = t(3166);
        function ue(_) {
          const s = new Date(_.getTime());
          return s.setHours(0, 0, 0, 0), s;
        }
        function we(_) {
          const s = new Date(_.getTime());
          return s.setDate(1), s.setHours(0, 0, 0, 0), s;
        }
        function ze(_, s) {
          const n = new Date(_);
          return n.setDate(_.getDate() + s), n;
        }
        function Pe(_, s) {
          return _.reduce((n, u) => {
            const d = s(u),
              r = Math.floor(d.getTime() / 1e3),
              f = n.get(r) || [];
            return n.set(r, [...f, u]), n;
          }, new Map());
        }
        function Ie(_) {
          const [s] = (0, l.QD)("gid"),
            n = (0, W.RR)(s),
            u = (0, M.sfN)(i.TS.LANGUAGE),
            [d, r] = (0, o.useState)("");
          return n
            ? (0, e.jsxs)("div", {
                className: G().Ctn,
                children: [
                  (0, e.jsxs)("div", {
                    className: G().EventName,
                    children: [
                      (0, e.jsx)("h1", { children: n.GetNameWithFallback(u) }),
                      (0, e.jsx)("a", {
                        href: `${i.TS.STORE_BASE_URL}meetsteam/${s}`,
                        target: "_blank",
                        children: "See Event Details",
                      }),
                    ],
                  }),
                  (0, e.jsx)(Be, { eventModel: n }),
                  (0, e.jsx)("div", {
                    className: G().AtendeeSearchRow,
                    children: (0, e.jsx)(y.pd, {
                      type: "text",
                      label: "Search for an attendee",
                      value: d,
                      bShowClearAction: !0,
                      onChange: (f) => r(f.currentTarget.value || ""),
                      placeholder: "Type name or partner or email address",
                    }),
                  }),
                  (0, e.jsx)(Oe, { eventModel: n, strSearch: d.toLowerCase() }),
                ],
              })
            : (0, e.jsx)(F.t, { string: (0, Z.we)("#Loading") });
        }
        function Oe(_) {
          const { eventModel: s, strSearch: n } = _,
            u = x(s, n),
            [d, r] = (0, o.useState)(null),
            [f, z] = (0, o.useMemo)(() => {
              const K = new Map();
              return (
                u.forEach((X) => {
                  [X.userReg.name, ...(X.userReg.guest_names || [])].forEach(
                    (H) => {
                      const J = H.toLowerCase();
                      K.has(J) ? K.get(J).push(X) : K.set(J, [X]);
                    },
                  );
                }),
                [K, Array.from(K.keys()).sort()]
              );
            }, [u]);
          return (
            o.useEffect(() => {
              r(null);
            }, [n]),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("h3", { children: "Attendees" }),
                d
                  ? (0, e.jsx)(Le, {
                      eventModel: s,
                      rgSelected: d,
                      strSearch: n,
                      onCleanSelection: () => r(null),
                    })
                  : (0, e.jsx)(e.Fragment, {
                      children: z
                        .filter((K) => !n || K.includes(n))
                        .map((K) =>
                          (0, e.jsx)(
                            "div",
                            {
                              className: G().AttendeeRow,
                              children: (0, e.jsx)(y.$n, {
                                onClick: () => r(f.get(K.toLowerCase())),
                                children: K,
                              }),
                            },
                            K,
                          ),
                        ),
                    }),
              ],
            })
          );
        }
        function Le(_) {
          const {
              eventModel: s,
              rgSelected: n,
              strSearch: u,
              onCleanSelection: d,
            } = _,
            r = (0, D.f1)(),
            f = U(n, u);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: ee().AtendeeListButtonRow,
                children: (0, e.jsxs)(y.$n, {
                  onClick: d,
                  children: [
                    (0, e.jsx)(S.uMb, {
                      angle: 180,
                      className: ee().BackToListIcon,
                    }),
                    "Back to full list",
                  ],
                }),
              }),
              (0, e.jsx)(se, {
                eventModel: s,
                rgUserRegs: f.today,
                strTitle: "Today " + (0, Z.$z)(r),
              }),
              (0, e.jsx)(se, {
                eventModel: s,
                rgUserRegs: f.future,
                bHideIfEmpty: !0,
                strTitle: "Future",
              }),
              (0, e.jsx)(se, {
                eventModel: s,
                rgUserRegs: f.past,
                bHideIfEmpty: !0,
                strTitle: "Past",
              }),
            ],
          });
        }
        function Be(_) {
          const { eventModel: s } = _,
            n = (0, D.s4)(),
            [u, d] = o.useState(!1),
            { rgGroupedSessions: r, bMoreSessions: f } = o.useMemo(() => {
              const k = s?.jsondata?.meet_steam_groups?.flatMap((Y) =>
                  Y.sessions.map((ae) => {
                    const me = (0, p.Sk)(ae),
                      pe = (0, p.Ue)(ae.rtime_start, me);
                    return { group: Y, session: ae, displayDate: pe };
                  }),
                ),
                H = k?.filter((Y) => u || ue(Y.displayDate) >= ue(n)),
                J = u || (k && k.length > H.length);
              return {
                rgGroupedSessions: Pe(H ?? [], (Y) => ue(Y.displayDate)),
                bMoreSessions: J,
              };
            }, [s?.jsondata?.meet_steam_groups, n, u]),
            z = o.useMemo(() => {
              const k = (0, Re.Tc)("registrations", "application_config");
              if (!(!k || typeof k != "object"))
                return k.reduce((H, J) => {
                  const ne = `${J.group_id}_${J.session_id}`,
                    Y = H.get(ne) ?? [];
                  return Y.push(J), H.set(ne, Y), H;
                }, new Map());
            }, []);
          if (!z || (r.size == 0 && !f)) return;
          const K =
              Array.from(r.keys()).reduce(
                (k, H) =>
                  k == null || (H * 1e3 > n.getTime() && H < k) ? H : k,
                void 0,
              ) ?? 0,
            X = Array.from(r.keys()).some((k) =>
              (0, De.JD)(n, new Date(k * 1e3)),
            );
          return (0, e.jsxs)("div", {
            className: G().DisplayAllDaysCtn,
            children: [
              f &&
                (0, e.jsx)(y.Yh, {
                  label: "Show past events",
                  checked: u,
                  onChange: d,
                }),
              (0, e.jsx)("div", {
                className: G().DisplayDaysCtn,
                children: Array.from(r.keys()).map((k) =>
                  (0, e.jsx)(
                    Ue,
                    {
                      eventModel: s,
                      date: new Date(k * 1e3),
                      sessionsAndGroups: r.get(k),
                      rgRegistrationInfo: z,
                      isToday: (0, De.JD)(
                        X ? n : new Date(K * 1e3),
                        new Date(k * 1e3),
                      ),
                    },
                    k,
                  ),
                ),
              }),
            ],
          });
        }
        function Ue(_) {
          const {
            eventModel: s,
            date: n,
            sessionsAndGroups: u,
            rgRegistrationInfo: d,
            isToday: r,
          } = _;
          return (0, e.jsxs)("div", {
            className: (0, Q.A)(G().DisplayDaySessions, !r && G().NotToday),
            children: [
              (0, e.jsx)("div", {
                className: G().DateName,
                children: (0, Z.$w)(n),
              }),
              (0, e.jsx)("div", {
                className: G().DisplayDaySessionsRow,
                children: u.map((f) =>
                  (0, e.jsx)(
                    Ne,
                    {
                      eventModel: s,
                      date: n,
                      registrations:
                        d.get(`${f.group.group_id}_${f.session.id}`) ?? [],
                      group: f.group,
                      session: f.session,
                    },
                    `${f.group.group_id}_${f.session.id}`,
                  ),
                ),
              }),
            ],
          });
        }
        function Ne(_) {
          const {
              eventModel: s,
              date: n,
              group: u,
              session: d,
              registrations: r,
            } = _,
            f = (0, M.sfN)(i.TS.LANGUAGE),
            z = (0, D.s4)(),
            { sDisplayTimeZone: K, rtime_start: X } = (0, p._t)(d),
            k = (0, p.us)(X, K),
            H = r.reduce((ce, oe) => ce + (oe.guests_registered ?? 0), 0),
            J = r.reduce(
              (ce, oe) =>
                ce +
                (oe.rt_attendance_marked > 0 && oe.guests_registered
                  ? oe.guests_registered
                  : 0),
              0,
            ),
            [ne, Y, ae] = (0, re.uD)(),
            me = P(s.GID, u.group_id, d.id),
            pe = () => window.location.reload();
          return (0, e.jsxs)("div", {
            className: G().DisplaySession,
            children: [
              (0, e.jsxs)("div", {
                className: G().Header,
                children: [
                  (0, e.jsx)("div", {
                    className: G().SessionName,
                    children:
                      u.localized_session_title[f] ??
                      u.localized_session_title[M.Bhc],
                  }),
                  (0, e.jsx)("div", {
                    className: G().SessionTime,
                    children: k,
                  }),
                ],
              }),
              (0, e.jsx)(je, {
                title: "Registered:",
                nCount: H,
                nCapacity: d.max_capacity,
              }),
              (0, e.jsx)(je, {
                title: "Checked in:",
                nCount: J,
                nCapacity: d.max_capacity,
              }),
              ue(n) >= ue(z) &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(y.$n, {
                      className: (0, Q.A)(G().SetCapacityButton),
                      onClick: Y,
                      children: "Update capacity...",
                    }),
                    (0, e.jsx)(w.E, {
                      active: ne,
                      children: (0, e.jsx)(a.tH, {
                        children: (0, e.jsx)(be, {
                          closeModal: ae,
                          nCapacity: d.max_capacity ?? 0,
                          fnUpdateCapacity: me,
                          fnOnSuccess: () => pe(),
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function be(_) {
          const {
              closeModal: s,
              nCapacity: n,
              fnUpdateCapacity: u,
              fnOnSuccess: d,
            } = _,
            [r, f] = o.useState(n.toString()),
            z = (0, R.vs)();
          return z.bLoading
            ? (0, e.jsx)(R.Hh, {
                state: z,
                strDialogTitle: (0, Z.we)("#Saving"),
                closeModal: s,
              })
            : (0, e.jsx)(I.o0, {
                onCancel: s,
                strTitle: (0, Z.we)("Update Capacity"),
                bAllowFullSize: !0,
                onOK: async () => {
                  z.fnSetLoading(!0);
                  const K = Number.isNaN(Number.parseInt(r))
                    ? void 0
                    : Number.parseInt(r);
                  u.mutateAsync({ nCapacity: K })
                    .then((X) => {
                      X
                        ? (d(), z.fnSetStrSuccess("Max capacity updated."))
                        : z.fnSetStrError(
                            (0, Z.we)("#Login_Error_Network_Description"),
                          );
                    })
                    .catch(() =>
                      z.fnSetStrError(
                        (0, Z.we)("#Login_Error_Network_Description"),
                      ),
                    );
                },
                children: (0, e.jsx)(y.pd, {
                  className: G().SetCapacityInput,
                  label: "New capacity",
                  type: "text",
                  autoComplete: "off",
                  value: r,
                  onChange: (K) => f(K.currentTarget.value),
                }),
              });
        }
        function je(_) {
          const { title: s, nCount: n, nCapacity: u } = _,
            d = n >= u,
            r = Math.min((n / u) * 100, 100),
            f = n > 0 ? `${r}%` : "0%";
          return (0, e.jsxs)("div", {
            className: G().CapacityCtn,
            children: [
              (0, e.jsxs)("span", { children: [s, " ", n, " / ", u] }),
              (0, e.jsx)("div", {
                className: G().CapacityBarMax,
                children: (0, e.jsx)("div", {
                  className: (0, Q.A)(
                    G().CapacityBarCurrent,
                    d ? G().Full : "",
                  ),
                  style: { width: f },
                }),
              }),
            ],
          });
        }
        const Ee = {
          MeetSteamAttendance: () => `${E.B.MeetSteamRoute()}attendance`,
          MeetSteamAttendeeList: () => `${E.B.MeetSteamRoute()}attendeelist`,
        };
        function We(_) {
          return (0, e.jsxs)(j.dO, {
            children: [
              (0, e.jsx)(j.qh, {
                path: Ee.MeetSteamAttendance(),
                render: (s) => (0, e.jsx)($, { ...s }),
              }),
              (0, e.jsx)(j.qh, {
                path: Ee.MeetSteamAttendeeList(),
                render: (s) => (0, e.jsx)(Ie, { ...s }),
              }),
              (0, e.jsx)(j.qh, { children: (0, e.jsx)(Ce.a, {}) }),
            ],
          });
        }
      },
      56330: (N) => {
        N.exports = {
          ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
          ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
          ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
          ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
          ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
          WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
          WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
          WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
          WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
          Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
          WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
          InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
          InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
          InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
          InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
          Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
          NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
          ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
          SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
        };
      },
      95695: (N) => {
        N.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PartnerEventFont: "LK4bXmKAknKopK864hJFM",
          Clear: "_3UhsQfZfx8h_mvk1qQ2E7p",
          Divider: "_3B5HO7jdTpNaectJS1a6UZ",
          EventDefaultRowContainer: "_3WO6cZns4r39Cg__Yd-7zn",
          EventStartPublic: "_2LU_YLKpLTGuqBMQLckmkk",
          EventOptions: "_2r_QeL5bd04KiohE77Gq-t",
          EventStatusContainer: "vOPSZ6WQ2uCEbtYrtUkJ5",
          FlexColumnContainer: "_1qhLqXcizfytm6omB4ywDD",
          FlexRowContainer: "Ke5f13IVZVzYSmQVJgVyd",
          Centered: "qy-9mgJyhfEb8Wt0gqzaF",
          VCentered: "_2Ke6gF28pxI9dp-gD87LfB",
          FlexContainSpaceBetween: "_3nPGWNNLFjqXgZ6hjwUnkf",
          FlexRowWrapSpaceBetweenContainer: "_19CjIj6mAtlIoY_7_iyOlz",
          FlexRowWrapFlexStartContainer: "tyP_cnaOBcolou13sADst",
          SaveBackground: "V0mbIUnoAWzmWNmnsjwlx",
          SupportedGroupLabel: "APmJNwEEvE9w4_JVyRQ3J",
          LanguageWithContent: "_2Cd1uISocztoq_3uIIDOXm",
          LargeInput: "fq68IvZbR5nyI81kv1dwh",
          InputBorder: "ObyysoLsv_KyZYdZkoC7W",
          RadioOption: "_3iJX1gtbWR_mkLvuDCeoNd",
          FlexGrow: "_1KvZAJk52RAyJKIXK3-wO0",
          EventEditorTextTitleCtn: "htm7dxJtSOP0s_Mcb3Ejx",
          doclink: "_1-bAKvDZnkuyP6Nmt66mQB",
          EventEditorUnpaddedTextTitle: "_9hsCLz0BkV6oeIrNt7M3D",
          EventEditorTextTitle: "_18fHxiLGI4r8_CPauC1oep",
          EventEditorTextTitleLengthInfo: "_2nHJ1mgbC-yNBhl6tjLgmD",
          CollapsableSectionTitle: "_2zejQIbvaMIPvk98NrTDzs",
          SectionTitle: "_7Qc_eWjn_s3VWDe79FmEq",
          EventSectionTitleCtn: "onqWKRp2JgmjHjFAtHUAM",
          EventSectionTitle: "Idd_AoQMoEWIZamI72mP7",
          EventSectionSpacer: "_1BloexLaoA9uwhXnsLWe6M",
          EventSectionMoreBtn: "uckBibUwkj9tX_NZHf6wN",
          EventEditorSpacerPadding: "_1RBfNW2ja0sibxeZdEEJX",
          EventEditorVisibilityCtn: "_1nqBhG2Wx5fvxBZz_TG7B9",
          EventEditorTextSubTitle: "_1i_pY6xNDaeC-hpFtw_bnr",
          FloatingTitle: "_31XRtqJrtSr23BOez9F94m",
          EventEditorEventStatus: "_2JGoLoYTtzbQVxL0l_1m3a",
          EventHidden: "_2H6fnGkwmWVynWQb7QvxLN",
          EventVisible: "_3Z0QrVP5ZnTQ2dk4TtNgY2",
          EventBarBackAndTitle: "_2rTjP81ZJlRiaauPzNG7K4",
          EventBarTitleCtn: "WfVzeWGwNKWJkHrZGYin4",
          EventBarTitle: "_29kVXprENYbLFAtuCiS9sQ",
          EventEditButtons: "_3nYmf7ouiiC2Fb1BBu5Gra",
          EventStatus: "_1sOFBLpnblzmUTv7zVK5bM",
          EventBarBack: "s3r9bZXo9Hn_LJ2KuwEdl",
          EditPreviewButton: "_1FhZQ0qnT9Cg5iDVCM4kUM",
          Delete: "_32kR7vbPRNV7B8ZsiduNmF",
          Disabled: "_2wVCx2MbxsBE0UA-mTs9GA",
          BrowseMoreButton: "_1YrclhbHAxZpfgTuGj4VeB",
          Button: "_1ABCOz8DSrl-YJdh1xD-m0",
          Icon: "_1dDpSuaJBGZzS41s0SPk4c",
          Primary: "_30iplBvtu2x5qDH5gkzuvV",
          ClearThings: "_3x_qLReSea_Uq9nqUlRsE2",
          OnIndicator: "_1GBsBcWhLJ4t6Fr7B5Je1z",
          OffIndicator: "w0I94_DnBuP6_sAy2jJOL",
          IconImage: "_2RY897Hy2yhwXPKZZIMbVc",
          RightColumnContainer: "_30-E9De2BTSA_LQAluUDUI",
          FloatRight: "_1bzHf_n9CdWgjfVlmRX68A",
          TTip: "_2aWukx6Wd2nw_kXZ1FP2NP",
          ValveSupportOnly: "wC6-UDN4iQob1NcD0Rpty",
          ArtworkAgeNotAppropriate: "_3V64ZhKy9wBGIO4DpFne9v",
          EventDashboardHeader: "_2kZr_0HccJXPhB1ZUZ5ouf",
          ContainerSpaceBetween: "_3gYZGtbFQRCQssXFJTFwmV",
          EventDashboardTitles: "_1ym4r-4rlOJQoOzRprSo8l",
          EventDashboardActions: "_2z_02l2jZf-9jcO4USrYak",
          EventDashboardStatsCtn: "_3IptFPCOJnBgUfgUej_jIH",
          EventDashboardAppCtn: "_2iPrKEyo2kmzykCYxURzj3",
          maintitle: "vEk_z-3SSNZ_QNdilG5U8",
          AppTitle: "l-Ow7jLX9GkLm9eYHQVAP",
          subtitle: "_2mJfcOfmivoiCR4CW-GrjN",
          ValveOnlyText: "_206saj_KMAibQF6XQ50lq0",
          ValveOnlyBackground: "JckrnbJXboKxpRp3fULfa",
          ValveOnlyAdminBackground: "_3HVu1O7B4zeCZWaOaUWPCo",
          DropDownOptionHelpLabel: "_2O-Yi5SNKU3AinaDygrO9y",
          Columns: "_1oVIRGhMwAB3uN9G3t8kZe",
          LeftCol: "_3PPz-6LrUAum0x5iKTRxzc",
          RightCol: "_25xelN-JQnAHv3pp9qVrpl",
          DropDownScroll: "_1CewBTRfw0excEQTv17oBF",
          DropDownScrollItem: "_3D3hCqbc4w-srLqZG9Uue1",
          CloseButton: "gR2gSLc4AtnoUyq29Np8F",
          CloseSectionTools: "_1d0D9Wb15dNSzABGRNMKzl",
          HalfColumn: "_3Xmp43r8PjDuBvfl8dK6Rt",
          InsetOption: "PKGX85T0vHviq8Tm_2GeT",
          tooltip_Ctn: "_3nqxIgL0a0DbPZHRZRzWsp",
          SaleEditorSpacing: "_2ZGwd2fru49CK-m22nkFg3",
          InstructionText: "ktxW5d8M1ectIDhxxa1M5",
          BackgroundImage: "_2wlqOo3XXW1wCAxwfudaL8",
          InEditor: "_1qfNCm-vmBy2gW4vlcWfgD",
          Blur: "_1rJkktMMsrzAultu2NgHkZ",
          SalePageBackground: "_2StYOVdV9beNEHqNB_UQuQ",
          SaleSectionHeader: "_2WMiQ5MbP_ReyaX5DOpoUD",
          SaleImageCtn: "_1_lNQ4U_L9dnN9dgC8h-m_",
          SaleImageHelper: "_12S7LpS3uz_qitMXmZV0Ky",
          JumpToButtonCtn: "_19bDhRwBW1auKJVn5jamrh",
          JumpToButton: "c4K67QJ5cG4Zr1eb4H_Fu",
          QACtn: "_337X4KlsU9k5t9s423wb_I",
          SaleSectionSubtitle: "_2rIaWN5LbF3muB3D2A-q5k",
          SaleSectionContainer: "_3gb3JeV_1IMaIeODzBSrP3",
          AddSectionButton: "_2_djjQBZmuIsrDz2l04Ua7",
          EventElementRequired: "_12rm6-FOWcy0YB458vbp5l",
          EventElementOptional: "_1mpG6blNZY9m8bmFF-Krii",
          EventElementComplete: "_1uZCvmPkcgPb6hJYpF9IYU",
          PixelOffsetCtn: "_3Xk96WC-5G6sSuI0Zw2aeZ",
          PixelOffsetRow: "_2PtWb-j9bnMM467osLZO2B",
          PixelOffsetNote: "JjEwaxBnKLv7wm8lbhcbX",
          PixelOffsetCallout: "f5QZTTLfNRcsOdH31-Kxv",
          Error: "mSSEDpLo6ibX1Ed5anQD_",
          GamepadOnlyScrollPanel: "_2NO6wzenl44Mce3akguO_",
          BackgroundAnimation: "_3jOnURPodgSJ0VVO2lchIh",
          "ItemFocusAnim-darkerGrey-nocolor": "_2J2q_u-IE_3MWcK8YJwYX5",
          "ItemFocusAnim-darkerGrey": "hml57jb3ouTfP1qbnI4_V",
          "ItemFocusAnim-darkGreySettings": "_1ex6ItU2bR-tAYkBYAfqnF",
          "ItemFocusAnim-darkGrey": "_3ILf95Fdqnqg9OfLO3lrZH",
          "ItemFocusAnim-grey": "_159SLrXx_wC4ZI3ZLaz1A_",
          "ItemFocusAnim-translucent-white-10": "_2LlOq5G2PXnoXnElUH9sZS",
          "ItemFocusAnim-translucent-white-20": "oskDWTSKtzqVUSfD5nKvN",
          "ItemFocusAnimBorder-darkGrey": "_22jWCdivanrS6yxyLk3zMH",
          "ItemFocusAnim-green": "_3JEJrM-AMsqF1VHbRBXYvZ",
          focusAnimation: "KS3LLxXLFm_S6AWOrqeVo",
          hoverAnimation: "_9UqiMHhWNZyuE_A0XwG9N",
        };
      },
      15736: (N) => {
        N.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      64734: (N) => {
        N.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      40313: (N) => {
        N.exports = {
          AtendeeListButtonRow: "_1EtV67mAPZ0HqX9gDKHQk-",
          BackToListIcon: "_32U0JhithwvTeeStn41PFK",
        };
      },
      29645: (N) => {
        N.exports = {
          Ctn: "_35KiKa7cq-3mn4lChNW67c",
          EventName: "e-36dCsEtoK52wg6Qx1iq",
          AtendeeSearchRow: "_1KbfPGq52sl-NB4ku90gN3",
          AttendeeRow: "_35gHo_M6tBBUOL8PWGEmA9",
          DisplayAllDaysCtn: "_3bvF759mojZQZv_TGXaM5Q",
          DisplayDaysCtn: "_1b8sKAzr4LILvJyl7fkRrL",
          DateName: "_32Ut51xzdWXCL6OOaz4vY2",
          DisplayDaySessions: "_32v8UGu0FfxnCHtltxqiEV",
          NotToday: "_1PB1JESsJ8abJrTzTqOVBk",
          DisplayDaySessionsRow: "_3DhIykQH8p8dQb2VOZg4-L",
          DisplaySession: "_27ybiS1mMlsYotyoQGVmI_",
          Header: "_1jOgBHcEXg1l6kSowBxwn6",
          SessionName: "vl9qom9droT0L3xZs2JhG",
          SessionTime: "PG1xFNh9UdoEjEvvw22V5",
          CapacityCtn: "_2jxcROaKoRgZCIKUHALVRH",
          CapacityBarMax: "_2Kd3cw8fPPyzDXTWBxltj7",
          CapacityBarCurrent: "_3jKSoLI8ytiyq9ELWTJNVY",
          Full: "_27_ZZ6xz-L8KC1u6uQmDz",
          SetCapacityButton: "_1BPqndgvTdc3n4fPDlcvAQ",
          SetCapacityInput: "QnMJIDEn4Rz26VtL1RdUu",
        };
      },
      15588: (N) => {
        N.exports = {
          Ctn: "_3cmUbcgdPxM7o5hl986RgB",
          User: "_3E6Usl36asxUFK3vPKa7Us",
          EventName: "_2GHTaky49GZrPLyiOgKWB7",
          SessionInfo: "Kk38rrvnYm3-E2jJMahSH",
          SessionName: "_2uJvCA4FncHONmSI37VVyw",
          SessionTime: "_2vYmHfXJIHj2eCv8NsiqZv",
          RegisteredUsers: "HLiipgmnfEQ2O-9WritfU",
          CheckedIn: "_17S0ayInAou4_ptPoMguR0",
          GuestTitle: "_2fMFlfbH8xUEtW28kSLf5-",
          GuestEmail: "Tm-tj9XNHRPGqdqqNiTEp",
          DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
        };
      },
      61738: (N, L, t) => {
        var e = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function E(a) {
          var M = j(a);
          return t(M);
        }
        function j(a) {
          if (!t.o(e, a)) {
            var M = new Error("Cannot find module '" + a + "'");
            throw ((M.code = "MODULE_NOT_FOUND"), M);
          }
          return e[a];
        }
        (E.keys = function () {
          return Object.keys(e);
        }),
          (E.resolve = j),
          (N.exports = E),
          (E.id = 61738);
      },
    },
  ]);
})();
