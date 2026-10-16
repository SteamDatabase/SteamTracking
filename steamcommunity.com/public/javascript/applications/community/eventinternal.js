/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [50258],
    {
      23062: (b, q, l) => {
        "use strict";
        l.r(q), l.d(q, { default: () => Fe });
        var t = l(7850),
          _ = l(58732),
          F = l(75372),
          ce = l(41735),
          G = l.n(ce),
          A = l(14947),
          z = l(75844),
          c = l(90626),
          Y = l(72604),
          X = l(76559),
          de = l(8303),
          $ = l(19316),
          ue = l(2801),
          ge = l(88003),
          ee = l(36118),
          P = l(85599),
          he = l(82734),
          te = l(18210),
          x = l(34592),
          C = l(3166),
          V = l(22517),
          me = l(16346),
          ve = l(60480),
          ne = l(34360),
          Se = l(25792),
          ae = l(64641),
          fe = l(48473),
          pe = l(82062);
        const Ce = (d) => {
            const {
                strLabel: e,
                strToolTip: o,
                fnSetCurator: n,
                bLimitToCreatorHome: a,
              } = d,
              r = (0, c.useRef)(null),
              s = (0, c.useRef)(null),
              i = (0, c.useRef)(0),
              u = (0, c.useRef)(void 0);
            (0, c.useEffect)(
              () => () => {
                window.clearTimeout(i.current),
                  r.current && r.current("SearchForCurator: unmounting"),
                  s.current && s.current.Hide();
              },
              [],
            );
            const h = (0, c.useCallback)(
              async (g) => {
                const v = g.target.value;
                !v ||
                  v.trim().length == 0 ||
                  (window.clearTimeout(i.current),
                  r.current && r.current("SearchForCurator: new request"),
                  (i.current = window.setTimeout(async () => {
                    const S = G().CancelToken.source();
                    r.current = S.cancel;
                    try {
                      const p = await ve.pF.SearchCreatorHomeStore(v, a, S);
                      if (S.token.reason) return;
                      s.current = (0, me.lX)(
                        (0, t.jsx)(xe, { list: p, fnSetCurator: n }),
                        u.current.element,
                        {
                          bOverlapHorizontal: !0,
                          bMatchWidth: !0,
                          bFitToWindow: !0,
                          bDisablePopTop: !0,
                          bNoFocusWhenShown: !0,
                          bSkipFocusWhenReady: !0,
                        },
                      );
                    } catch (p) {
                      if (S.token.reason) return;
                      const I = (0, x.H)(p);
                      console.log(
                        "SearchForCurator.SearchCreatorHomeStore error " +
                          I.strErrorMsg,
                        I,
                      );
                    }
                  }, 300)));
              },
              [n, a],
            );
            return (0, t.jsx)(Se.tH, {
              children: (0, t.jsx)($.pd, {
                type: "text",
                label: e,
                onChange: h,
                onBlur: (g) =>
                  setTimeout(() => s.current && s.current.Hide(), 200),
                ref: u,
                tooltip: o,
              }),
            });
          },
          xe = (d) => {
            const { list: e, fnSetCurator: o } = d;
            return (0, t.jsx)(ne.tz, {
              className: pe.SearchResults,
              children: e.map((n) =>
                (0, t.jsx)(
                  ne.kt,
                  {
                    onSelected: () => o(n),
                    children: (0, t.jsxs)("div", {
                      style: { display: "flex", alignItems: "center" },
                      children: [
                        (0, t.jsx)("div", {
                          className: ae.GameImageContainer,
                          children: (0, t.jsx)("img", {
                            src: n.GetAvatarURLFullSize(),
                            className: ae.AvatarImage,
                          }),
                        }),
                        (0, fe.EK)(n.GetName()),
                      ],
                    }),
                  },
                  "curatorresult" + n.GetClanAccountID(),
                ),
              ),
            });
          };
        var Ie = l(13784),
          Ae = Object.defineProperty,
          Me = Object.getOwnPropertyDescriptor,
          se = (d, e, o, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Me(e, o) : e, r = d.length - 1, s;
              r >= 0;
              r--
            )
              (s = d[r]) && (a = (n ? s(e, o, a) : s(a)) || a);
            return n && a && Ae(e, o, a), a;
          };
        const je = (0, z.PA)((d) => {
            const e = Te();
            if (!e)
              return (0, t.jsx)(P.t, {
                string: (0, te.we)("#Loading"),
                position: "center",
                size: "medium",
              });
            const o = e.filter((i) => !i.gid_clan_event),
              n = o.filter(
                (i) =>
                  i.display_name.toLocaleLowerCase().indexOf("franchise") >= 0,
              ),
              a = o.filter(
                (i) =>
                  i.display_name.toLocaleLowerCase().indexOf("franchise") < 0,
              ),
              r = e.filter((i) => !!(i.gid_clan_event && i.hidden)),
              s = e.filter((i) => !!(i.gid_clan_event && !i.hidden));
            return (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("h1", { children: "Migration Sale Tool:" }),
                (0, t.jsx)("p", {
                  children:
                    "For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account.",
                }),
                (0, t.jsx)(Q, { strName: "Unmigrated Franchises", records: n }),
                (0, t.jsx)(Q, {
                  strName: "Unmigrated Generic Sale PAges",
                  records: a,
                  bHideByDefault: !0,
                }),
                (0, t.jsx)(Q, { strName: "Migrated but Hidden", records: r }),
                (0, t.jsx)(Q, {
                  strName: "Migrated and Visible",
                  records: s,
                  bHideByDefault: !0,
                }),
              ],
            });
          }),
          Q = (d) => {
            const { strName: e, records: o, bHideByDefault: n } = d,
              [a, r] = (0, c.useState)(n);
            return (0, t.jsxs)("div", {
              className: V.SectionContainer,
              children: [
                (0, t.jsxs)("h2", {
                  className: V.SectionTitle,
                  onDoubleClick: () => r(!a),
                  children: [
                    e,
                    " (",
                    o.length,
                    ")",
                    (0, t.jsx)("span", { children: "\xA0" }),
                    (0, t.jsx)($.$n, {
                      onClick: () => r(!a),
                      children: a
                        ? (0, t.jsx)(ee.hz4, {})
                        : (0, t.jsx)(ee.Xjb, {}),
                    }),
                  ],
                }),
                (0, t.jsx)("hr", {}),
                a
                  ? (0, t.jsx)($.$n, {
                      onClick: () => r(!1),
                      children: (0, te.we)("#Sale_ShowContents"),
                    })
                  : (0, t.jsx)(t.Fragment, {
                      children: o.map((s) =>
                        (0, t.jsx)(Ee, { record: s }, s.sale_page_id),
                      ),
                    }),
              ],
            });
          },
          Ee = (0, z.PA)((d) => {
            const { record: e } = d,
              o = (0, de.m1)(e.clan_account_id);
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("div", {
                  className: V.RecordCtn,
                  children: [
                    (0, t.jsxs)("div", {
                      className: V.RecordInfoCtn,
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("a", {
                            href: C.TS.STORE_BASE_URL + "sale/" + e.vanity,
                            children: (0, t.jsx)("b", {
                              children: `${e.display_name} - (${e.vanity})`,
                            }),
                          }),
                        }),
                        !!o &&
                          (0, t.jsx)("div", {
                            children: (0, t.jsxs)("a", {
                              href: o.vanity_url,
                              children: ["Sale Page part of ", o.group_name],
                            }),
                          }),
                        !!e.gid_clan_event &&
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)("a", {
                              href:
                                C.TS.COMMUNITY_BASE_URL +
                                "gid/" +
                                X.b
                                  .InitFromClanID(e.clan_account_id)
                                  .ConvertTo64BitString() +
                                "/partnerevents/edit/" +
                                e.gid_clan_event,
                              children: `Migrated: Event Editor Links: State hidden: ${e.hidden} published: ${e.published} sale/ vanity?: ${e.valve_approved_sale_vanity_id}`,
                            }),
                          }),
                      ],
                    }),
                    !!(!e.gid_clan_event || (e.hidden && !e.published)) &&
                      (0, t.jsx)($.$n, {
                        onClick: (n) =>
                          (0, ge.pg)(
                            (0, t.jsx)(Le, { record: e }),
                            (0, he.uX)(n),
                          ),
                        children: "Migrate Sale Page",
                      }),
                  ],
                }),
                (0, t.jsx)("hr", {}),
              ],
            });
          }),
          Le = (d) => {
            const { record: e, closeModal: o } = d,
              [n, a] = (0, c.useState)(e.clan_account_id),
              [r, s] = (0, c.useState)(!1),
              [i, u] = (0, c.useState)(void 0),
              [h, g] = (0, c.useState)(!1),
              [v, S] = (0, c.useState)(e.gid_clan_event),
              [p, I] = (0, c.useState)(null),
              T = () => {
                s(!0),
                  N.Get()
                    .MigrateOrUpdateSalePage(
                      e.sale_page_id,
                      n,
                      e.gid_clan_event,
                    )
                    .then(([M, H, B]) => {
                      u(M), g(H), S(B);
                    });
              };
            return (0, t.jsxs)(ue.o0, {
              strTitle: "Migrate Sale page",
              strDescription: `Will migrate the sale page ${e.vanity} to the below clan `,
              bOKDisabled: !n || r,
              onOK: T,
              onCancel: o,
              children: [
                e.clan_account_id
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", {
                          children:
                            "Sale page already migrated. This will update the hidden page with latest migration code",
                        }),
                        (0, t.jsxs)("div", {
                          children: ["ClanID = ", e.clan_account_id],
                        }),
                        (0, t.jsxs)("div", {
                          children: ["GID = ", e.gid_clan_event],
                        }),
                      ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(Ce, {
                          bLimitToCreatorHome: !0,
                          strLabel:
                            "Search for Creator Home to house the Sale Event",
                          strToolTip:
                            "Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)",
                          fnSetCurator: (M) => {
                            a(M.GetClanAccountID()), I(M);
                          },
                        }),
                        !!p && (0, t.jsx)(De, { creatorHome: p }),
                      ],
                    }),
                !!(r && !i) &&
                  (0, t.jsx)(P.t, { position: "center", size: "medium" }),
                !!i && (0, t.jsx)("div", { children: i }),
                !!h &&
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("a", {
                          href: C.TS.STORE_BASE_URL + "sale/" + e.vanity,
                          target: "_blank",
                          children: "Sale Page",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("a", {
                          href:
                            C.TS.COMMUNITY_BASE_URL +
                            "gid/" +
                            X.b.InitFromClanID(n).ConvertTo64BitString() +
                            "/partnerevents/edit/" +
                            v,
                          target: "_blank",
                          children: "New Sale Page Editor",
                        }),
                      }),
                    ],
                  }),
              ],
            });
          },
          De = (d) => {
            const { creatorHome: e } = d,
              o = X.b.InitFromClanID(e.GetClanAccountID()),
              n = e.GetClanAccountID();
            return e
              ? (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        "ClanID = ",
                        n,
                        " - SteamID ",
                        o.ConvertTo64BitString(),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("a", {
                        href:
                          "https://steamsupport.valvesoftware.com/clan/overview/" +
                          o.ConvertTo64BitString(),
                        children: "Group Support Page",
                      }),
                    }),
                    !e.BIsPartnerEventEditorEnabled() &&
                      (0, t.jsxs)("div", {
                        children: [
                          "To use this Creator Home for the sale page migration, the process will need to enable partner event editing on the clan. This both updates the creator home but also puts a small limitation upon it.",
                          (0, t.jsx)("a", {
                            href: "https://confluence.valve.org/display/STEAM/Creator+home+and+Partner+Events+Beta",
                            target: "_blank",
                            children: "Read more about the state here.",
                          }),
                        ],
                      }),
                    (0, t.jsx)(Ie.hA, {
                      creatorID: e.GetCreatorHomeIdentifier(),
                      bHideCreatorType: !0,
                    }),
                  ],
                })
              : null;
          },
          Z = class U {
            constructor() {
              (this.m_mapSaleIDToInfo = new Map()),
                (this.m_listSaleState = new Array()),
                (this.m_stateLoadPromise = null),
                (this.m_bLoadComplete = !1),
                (0, A.Gn)(this);
            }
            BHasLoadCompleted() {
              return this.m_bLoadComplete;
            }
            GetMigrationRecords() {
              return this.m_listSaleState;
            }
            async MigrateOrUpdateSalePage(e, o, n) {
              var a, r;
              const s = this.m_mapSaleIDToInfo.get(e);
              if (!s)
                return [
                  "Record not found to begin the migration processing, cannot take action.: " +
                    e,
                  !1,
                  void 0,
                ];
              if (s.gid_clan_event && (!s.hidden || s.published))
                return [
                  "Sale event is already public, cannot take action.: " + e,
                  !1,
                  void 0,
                ];
              try {
                const i =
                  C.TS.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
                let u = new URLSearchParams();
                u.append("sessionid", (0, C.KC)()),
                  u.append("salePageID", e),
                  u.append("clanAccountID", "" + o),
                  n && u.append("gidClanEvent", n);
                const h = await G().post(i, u, { withCredentials: !0 });
                if (
                  (h == null ? void 0 : h.status) == 200 &&
                  ((a = h == null ? void 0 : h.data) == null
                    ? void 0
                    : a.success) == Y.R &&
                  (r = h == null ? void 0 : h.data) != null &&
                  r.gidClanEvent
                )
                  return (
                    (0, A.h5)(() => {
                      s.gid_clan_event ||
                        ((s.gid_clan_event = h.data.gidClanEvent),
                        (s.clan_account_id = o),
                        (s.hidden = !0),
                        (s.published = !1),
                        (s.valve_approved_sale_vanity_id = !0));
                    }),
                    [h.data.msg || "Success", !0, h.data.gidClanEvent]
                  );
                {
                  const g = (0, x.H)(h);
                  return (
                    console.error(
                      "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                        g.strErrorMsg,
                      g,
                    ),
                    [h.data.msg || "Failed", !1, void 0]
                  );
                }
              } catch (i) {
                const u = (0, x.H)(i);
                console.error(
                  "CMigrateSaleStore.MigrateOrUpdateSalePage: caught error with " +
                    u.strErrorMsg,
                  u,
                );
              }
              return ["failed", !1, void 0];
            }
            async LoadSalePageMigrationInfo() {
              return (
                this.m_stateLoadPromise ||
                  (this.m_stateLoadPromise =
                    this.InternalLoadSalePageMigrationInfo()),
                this.m_stateLoadPromise
              );
            }
            async InternalLoadSalePageMigrationInfo() {
              var e, o;
              try {
                const n =
                    C.TS.COMMUNITY_BASE_URL +
                    "migrate/ajaxgetsalepagestomigrate",
                  a = { sessionid: (0, C.KC)() },
                  r = await G().get(n, { params: a, withCredentials: !0 });
                if (
                  ((this.m_bLoadComplete = !0),
                  (r == null ? void 0 : r.status) == 200 &&
                    ((e = r == null ? void 0 : r.data) == null
                      ? void 0
                      : e.success) == Y.R &&
                    (o = r == null ? void 0 : r.data) != null &&
                    o.data)
                )
                  return (
                    (0, A.h5)(() => {
                      r.data.data.forEach((s) => {
                        this.m_mapSaleIDToInfo.set(s.sale_page_id, s),
                          this.m_listSaleState.push(
                            this.m_mapSaleIDToInfo.get(s.sale_page_id),
                          );
                      });
                    }),
                    console.log(
                      "InternalLoadSalePageMigrationInfo Loaded: " +
                        this.m_listSaleState.length,
                    ),
                    this.m_listSaleState
                  );
                {
                  const s = (0, x.H)(r);
                  console.error(
                    "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                      s.strErrorMsg,
                    s,
                  );
                }
              } catch (n) {
                const a = (0, x.H)(n);
                console.error(
                  "CMigrateSaleStore.LoadSalePageMigrationInfo: caught error with " +
                    a.strErrorMsg,
                  a,
                );
              }
              return [];
            }
            static Get() {
              return U.s_Singleton || (U.s_Singleton = new U()), U.s_Singleton;
            }
          };
        se([A.sH], Z.prototype, "m_mapSaleIDToInfo", 2),
          se([A.sH], Z.prototype, "m_listSaleState", 2);
        let N = Z;
        function Te() {
          const [d, e] = c.useState(!N.Get().BHasLoadCompleted());
          return (
            c.useEffect(() => {
              N.Get().BHasLoadCompleted() ||
                N.Get()
                  .LoadSalePageMigrationInfo()
                  .finally(() => e(!1));
            }, []),
            d ? void 0 : N.Get().GetMigrationRecords()
          );
        }
        var oe = l(813),
          D = l(179),
          Re = Object.defineProperty,
          be = Object.getOwnPropertyDescriptor,
          re = (d, e, o, n) => {
            for (
              var a = n > 1 ? void 0 : n ? be(e, o) : e, r = d.length - 1, s;
              r >= 0;
              r--
            )
              (s = d[r]) && (a = (n ? s(e, o, a) : s(a)) || a);
            return n && a && Re(e, o, a), a;
          };
        const J = class O {
          constructor() {
            (this.m_rgApps = []),
              (this.m_rgClanAccountIDs = []),
              (this.m_nHighestAppOffsetRequested = 0),
              (this.m_nHighestClanOffsetRequested = 0),
              (0, A.Gn)(this);
          }
          static Get() {
            return (
              O.s_globalSingletonStore ||
                ((O.s_globalSingletonStore = new O()),
                O.s_globalSingletonStore.Init()),
              O.s_globalSingletonStore
            );
          }
          Init() {}
          GetApps(e, o, n) {
            const a = Math.max(e, this.m_nHighestAppOffsetRequested),
              r = e + o - a;
            return (
              r > 0 && (this.m_mostRecentRequest = this.FetchApps(a, r, n)),
              this.m_rgApps.slice(e, e + o)
            );
          }
          async FetchApps(e, o, n, a) {
            var r;
            if (this.m_startAppID && this.m_startAppID != n)
              throw new Error(
                "Cannot switch starting AppID from " +
                  this.m_startAppID +
                  " to " +
                  n,
              );
            this.m_startAppID = n;
            let s = Math.max(o, 20);
            for (
              this.m_nHighestAppOffsetRequested = e + s,
                await this.m_mostRecentRequest;
              s > 0;
            ) {
              const i = Math.min(s, 100),
                u = { offset: e, nBatchSize: i, start_appid: n },
                h = C.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
              let g = null;
              try {
                const v = await G().get(h, {
                  params: u,
                  withCredentials: !0,
                  cancelToken: a == null ? void 0 : a.token,
                });
                if (
                  ((r = v == null ? void 0 : v.data) == null
                    ? void 0
                    : r.success) == Y.R &&
                  v.data.apps
                ) {
                  (0, A.h5)(() => {
                    if (e > this.m_rgApps.length)
                      for (let S = this.m_rgApps.length; S < e; S++)
                        this.m_rgApps[S] = null;
                    for (let S = 0; S < i; S++)
                      this.m_rgApps[e + S] = v.data.apps[S];
                  }),
                    (e += i),
                    (s -= i);
                  continue;
                }
                g = (0, x.H)(v == null ? void 0 : v.data);
              } catch (v) {
                g = (0, x.H)(v);
              }
              throw new Error(
                "ajax request failed with error " +
                  g.errorCode +
                  ':"' +
                  g.strErrorMsg +
                  '"',
              );
            }
          }
          GetClanAccountIDs(e, o) {
            const n = this.m_nHighestClanOffsetRequested,
              a = e + o - n;
            return (
              a > 0 && this.FetchClans(n, a),
              this.m_rgClanAccountIDs.slice(e, e + o)
            );
          }
          async FetchClans(e, o, n) {
            var a;
            this.m_nHighestClanOffsetRequested = e + o;
            const r = { offset: e, count: o },
              s = C.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
            let i = null;
            try {
              const u = await G().get(s, {
                params: r,
                withCredentials: !0,
                cancelToken: n == null ? void 0 : n.token,
              });
              if (
                ((a = u == null ? void 0 : u.data) == null
                  ? void 0
                  : a.success) == Y.R &&
                u.data.accountids
              ) {
                this.m_rgClanAccountIDs = this.m_rgClanAccountIDs.concat(
                  u.data.accountids.map(Number),
                );
                return;
              }
              i = (0, x.H)(u == null ? void 0 : u.data);
            } catch (u) {
              i = (0, x.H)(u);
            }
            console.error(
              "FetchClans: ajax request failed with error",
              i.strErrorMsg,
            );
          }
        };
        re([A.sH.shallow], J.prototype, "m_rgApps", 2),
          re([A.sH.shallow], J.prototype, "m_rgClanAccountIDs", 2);
        let Pe = J;
        var ye = l(9608),
          Oe = l(80778),
          f = l.n(Oe),
          Ge = l(99412);
        const Ne = (0, z.PA)((d) => {
            const [e, o] = (0, c.useState)(!0);
            (0, c.useEffect)(() => {
              F.mh.Init(), o(!1);
            }, []);
            const [n, a] = (0, D.QD)("start", 0),
              [r, s] = (0, D.QD)("start_appid", 0),
              [i, u] = (0, D.QD)("count", 10),
              [h, g] = (0, D.QD)("autoload", !0),
              [v, S] = (0, D.QD)("batch_size", 1),
              [p, I] = (0, D.QD)("automigrate", !1),
              [T, M] = (0, c.useState)(!1),
              [H, B] = (0, D.QD)("rolling", 0),
              [j, w] = (0, c.useState)(new Set()),
              y = (0, c.useRef)(0),
              K = () => {
                M(!1), w(new Set()), a(n + i);
              },
              k = () => M(!0),
              R = Pe.Get().GetApps(n, i, r),
              m =
                H == 0 ? R : R.filter((L) => !j.has(Number(L.id))).slice(0, H),
              E = (L, le) => {
                j.has(L) ||
                  (console.log("completed: ", L, le),
                  j.add(L),
                  (y.current += le),
                  w(new Set(j)));
              };
            return (0, t.jsxs)("div", {
              className: f().MigrateToolCtn,
              children: [
                (0, t.jsx)("div", {
                  className: f().ToolHeader,
                  children: "Partner Events Migration Tools",
                }),
                m.map((L) =>
                  (0, t.jsx)(
                    He,
                    {
                      app: L,
                      bAutoLoad: h,
                      bAutoMigrate: p || T,
                      nMigrateBatchSize: v,
                      fnOnCompletion: E,
                    },
                    L.id,
                  ),
                ),
                e &&
                  (0, t.jsx)(P.t, {
                    size: "xlarge",
                    position: "center",
                    string: "initializing",
                  }),
                !R.length &&
                  (0, t.jsx)(P.t, {
                    size: "xlarge",
                    position: "center",
                    string: "loading apps",
                  }),
                (0, t.jsx)("div", {
                  className: f().LoadEventsButton,
                  onClick: K,
                  children: "LOAD NEXT PAGE",
                }),
                !p &&
                  (0, t.jsx)("div", {
                    className: f().LoadEventsButton,
                    onClick: k,
                    children: "MIGRATE ALL ON PAGE",
                  }),
                (0, t.jsx)("div", {
                  className: f().StatusMessage,
                  children:
                    j.size +
                    " OF " +
                    R.length +
                    " APPS COMPLETE. #EVENTS: " +
                    y.current,
                }),
              ],
            });
          }),
          ie = 50,
          He = (0, z.PA)((d) => {
            const e = Number(d.app.id),
              [o, n] = (0, c.useState)(0),
              [a, r] = (0, c.useState)([]),
              [s, i] = (0, c.useState)(!1),
              u = (0, c.useRef)(new Set()),
              h = (0, c.useRef)(0);
            (0, c.useEffect)(() => {
              oe.ac.LoadOGGClanInfoForAppID(e).then((m) => {
                var E;
                return console.log(
                  "Loaded app",
                  e,
                  m == null ? void 0 : m.group_name,
                  (E = m == null ? void 0 : m.clanSteamID) == null
                    ? void 0
                    : E.ConvertTo64BitString(),
                );
              });
            }, [e]);
            const g = oe.ac.GetOGGClanInfo(e),
              v = g ? g.group_name : d.app.name,
              S = `${C.TS.COMMUNITY_BASE_URL}games/${g ? g.vanity_url : e}/partnerevents/`,
              p = a.length,
              I = o == p,
              T = a.filter((m) => m.BIsVisibleEvent()),
              M = T.length,
              B = T.filter(
                (m) =>
                  m.bOldAnnouncement &&
                  g &&
                  g.clanAccountID != m.announcementClanSteamID.GetAccountID(),
              ).length,
              j = T.filter(
                (m) =>
                  m.bOldAnnouncement &&
                  !u.current.has(m.AnnouncementGID) &&
                  (!g ||
                    g.clanAccountID ==
                      m.announcementClanSteamID.GetAccountID()),
              ),
              w = j.length,
              y = !I && w > 0 && (g == null ? void 0 : g.clanSteamID),
              K = async () => {
                const m = o;
                n(o + ie), i(!0);
                const E = await F.mh.LoadPartnerEventsPageable(
                  void 0,
                  e,
                  m,
                  ie,
                );
                r(a.concat(E)), i(!1);
              };
            (0, c.useEffect)(() => {
              d.bAutoLoad && I && !s && K();
            });
            const k = (m, E) => {
                E ? (h.current += 1) : u.current.add(m);
              },
              R = async () => {
                i(!0),
                  await Be(j, d.nMigrateBatchSize, e, g.clanSteamID, k),
                  i(!1);
              };
            return (
              (0, c.useEffect)(() => {
                d.bAutoMigrate && y && !s && R();
              }),
              (0, c.useEffect)(() => {
                !I && !y && !s && d.fnOnCompletion(e, h.current);
              }),
              (0, t.jsxs)("div", {
                className: f().ClanRow,
                children: [
                  (0, t.jsx)("div", { className: f().ID, children: e }),
                  (0, t.jsx)("a", {
                    className: f().ClanName,
                    href: S,
                    children: v,
                  }),
                  (0, t.jsxs)("div", {
                    className: f().Counts,
                    children: [
                      `Loaded: ${p}	Visible: ${M}	Old: ${w}`,
                      B > 0 &&
                        (0, t.jsx)("span", {
                          className: f().LinkedAnnouncements,
                          children: `Linked: ${B}`,
                        }),
                    ],
                  }),
                  I
                    ? (0, t.jsx)("div", {
                        className: f().LoadEventsButton,
                        onClick: K,
                        children: "LOAD EVENTS",
                      })
                    : s
                      ? (0, t.jsx)(P.t, { size: "small" })
                      : y
                        ? (0, t.jsx)("div", {
                            className: f().MigrateEventsButton,
                            onClick: R,
                            children: "MIGRATE EVENTS",
                          })
                        : (0, t.jsx)("div", {
                            className: f().CompleteMessage,
                            children: "NOTHING TO MIGRATE",
                          }),
                ],
              })
            );
          });
        async function Be(d, e, o, n, a) {
          for (const r of d.slice(0, e)) {
            console.log(
              "Migrating",
              o,
              r.AnnouncementGID,
              r.GetNameWithFallback(Ge.Bhc),
              r,
            );
            try {
              const s = await (0, ye.e6)(r.AnnouncementGID, o, n);
              if (s) console.warn("Already migrated to event", s);
              else {
                const i = F.mh.GetEditModel();
                i.AddTag("auto_migrated"),
                  i.AddTag("hide_library_overview"),
                  i.AddTag("hide_library_detail"),
                  await F.mh.SaveModel(n),
                  console.log("Successfully migrated the event!"),
                  (r.bOldAnnouncement = !1),
                  a(r.AnnouncementGID, !0);
              }
            } catch (s) {
              const i = (0, x.H)(s);
              console.error("MigrateEvents: " + i.strErrorMsg.slice(0, 512), i),
                a(r.AnnouncementGID, !1);
            }
          }
        }
        var W = l(92757),
          we = l(77495),
          ze = l(83492),
          Ue = l(90783);
        function Fe(d) {
          const [e, o] = c.useState(!0);
          return (
            c.useEffect(() => {
              we.O3.Init(), Promise.all([]).then(() => o(!1));
            }, []),
            e
              ? (0, t.jsx)(P.t, { position: "center", size: "medium" })
              : (0, t.jsxs)(W.dO, {
                  children: [
                    (0, t.jsx)(W.qh, {
                      path: _.mQ.MigrateSaleEvents(),
                      component: je,
                    }),
                    (0, t.jsx)(W.qh, {
                      path: _.mQ.MigrateEvents(),
                      component: Ne,
                    }),
                    (0, t.jsx)(W.qh, { component: Ue.a }),
                  ],
                })
          );
        }
      },
      22517: (b) => {
        b.exports = {
          SectionContainer: "_3ZElG443QUegFs_bnylS3a",
          SectionTitle: "_1-ftdQuCgy6Eu3lmIy7GzJ",
          RecordCtn: "_1gW9gaaia6sAUsiG510BdF",
          RecordInfoCtn: "_6eQgp5l-li4-ItHochfRq",
        };
      },
      80778: (b) => {
        b.exports = {
          MigrateToolCtn: "fGggyaprxt-kYf9Ny0qDA",
          ToolHeader: "_2cI57Kr3zPfSnarN-nYKX_",
          StatusMessage: "_1YCAUON4nfBO2D-18FMRsz",
          ClanRow: "_2PbMCRgo26ntjYzPfcjx2k",
          ID: "_1YSGmj9iQytwW9hb1kHu88",
          ClanName: "_2VUhhpNIoONWpToHrRSLu9",
          Counts: "_3uIV0lew2g1pMZCH8S7HiE",
          LinkedAnnouncements: "_3u41kYYGE6rgKk4ATh3i4h",
          MigrateEventsButton: "_3-jPB4911B6r8ucMw0VJmY",
          CompleteMessage: "_3f-CwZABHOr8_h9I_ubPzG",
          LoadEventsButton: "_2qtK6EgvPizbxuOUs7kxeA",
        };
      },
      82062: (b) => {
        b.exports = { SearchResults: "_1roMuz15pxKZcGYgASP5xg" };
      },
    },
  ]);
})();
