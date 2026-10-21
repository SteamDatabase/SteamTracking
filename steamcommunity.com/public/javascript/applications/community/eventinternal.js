/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [50258],
    {
      23062: (R, q, l) => {
        "use strict";
        l.r(q), l.d(q, { default: () => Fe });
        var t = l(7850),
          _ = l(58732),
          F = l(75372),
          ce = l(41735),
          O = l.n(ce),
          x = l(14947),
          z = l(75844),
          c = l(90626),
          Y = l(72604),
          X = l(76559),
          de = l(8303),
          $ = l(19316),
          ge = l(2801),
          ue = l(88003),
          ee = l(36118),
          b = l(85599),
          he = l(82734),
          te = l(18210),
          C = l(34592),
          p = l(3166),
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
                strToolTip: s,
                fnSetCurator: a,
                bLimitToCreatorHome: n,
              } = d,
              i = (0, c.useRef)(null),
              o = (0, c.useRef)(null),
              r = (0, c.useRef)(0),
              v = (0, c.useRef)(void 0);
            (0, c.useEffect)(
              () => () => {
                window.clearTimeout(r.current),
                  i.current && i.current("SearchForCurator: unmounting"),
                  o.current && o.current.Hide();
              },
              [],
            );
            const S = (0, c.useCallback)(
              async (g) => {
                const u = g.target.value;
                !u ||
                  u.trim().length == 0 ||
                  (window.clearTimeout(r.current),
                  i.current && i.current("SearchForCurator: new request"),
                  (r.current = window.setTimeout(async () => {
                    const A = O().CancelToken.source();
                    i.current = A.cancel;
                    try {
                      const f = await ve.pF.SearchCreatorHomeStore(u, n, A);
                      if (A.token.reason) return;
                      o.current = (0, me.lX)(
                        (0, t.jsx)(Ie, { list: f, fnSetCurator: a }),
                        v.current.element,
                        {
                          bOverlapHorizontal: !0,
                          bMatchWidth: !0,
                          bFitToWindow: !0,
                          bDisablePopTop: !0,
                          bNoFocusWhenShown: !0,
                          bSkipFocusWhenReady: !0,
                        },
                      );
                    } catch (f) {
                      if (A.token.reason) return;
                      const I = (0, C.H)(f);
                      console.log(
                        "SearchForCurator.SearchCreatorHomeStore error " +
                          I.strErrorMsg,
                        I,
                      );
                    }
                  }, 300)));
              },
              [a, n],
            );
            return (0, t.jsx)(Se.tH, {
              children: (0, t.jsx)($.pd, {
                type: "text",
                label: e,
                onChange: S,
                onBlur: (g) =>
                  setTimeout(() => o.current && o.current.Hide(), 200),
                ref: v,
                tooltip: s,
              }),
            });
          },
          Ie = (d) => {
            const { list: e, fnSetCurator: s } = d;
            return (0, t.jsx)(ne.tz, {
              className: pe.SearchResults,
              children: e.map((a) =>
                (0, t.jsx)(
                  ne.kt,
                  {
                    onSelected: () => s(a),
                    children: (0, t.jsxs)("div", {
                      style: { display: "flex", alignItems: "center" },
                      children: [
                        (0, t.jsx)("div", {
                          className: ae.GameImageContainer,
                          children: (0, t.jsx)("img", {
                            src: a.GetAvatarURLFullSize(),
                            className: ae.AvatarImage,
                          }),
                        }),
                        (0, fe.EK)(a.GetName()),
                      ],
                    }),
                  },
                  "curatorresult" + a.GetClanAccountID(),
                ),
              ),
            });
          };
        var xe = l(13784),
          Ae = Object.defineProperty,
          Me = Object.getOwnPropertyDescriptor,
          se = (d, e, s, a) => {
            for (
              var n = a > 1 ? void 0 : a ? Me(e, s) : e, i = d.length - 1, o;
              i >= 0;
              i--
            )
              (o = d[i]) && (n = (a ? o(e, s, n) : o(n)) || n);
            return a && n && Ae(e, s, n), n;
          };
        const je = (0, z.PA)((d) => {
            const e = Te();
            if (!e)
              return (0, t.jsx)(b.t, {
                string: (0, te.we)("#Loading"),
                position: "center",
                size: "medium",
              });
            const s = e.filter((r) => !r.gid_clan_event),
              a = s.filter(
                (r) =>
                  r.display_name.toLocaleLowerCase().indexOf("franchise") >= 0,
              ),
              n = s.filter(
                (r) =>
                  r.display_name.toLocaleLowerCase().indexOf("franchise") < 0,
              ),
              i = e.filter((r) => !!(r.gid_clan_event && r.hidden)),
              o = e.filter((r) => !!(r.gid_clan_event && !r.hidden));
            return (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("h1", { children: "Migration Sale Tool:" }),
                (0, t.jsx)("p", {
                  children:
                    "For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account.",
                }),
                (0, t.jsx)(Q, { strName: "Unmigrated Franchises", records: a }),
                (0, t.jsx)(Q, {
                  strName: "Unmigrated Generic Sale PAges",
                  records: n,
                  bHideByDefault: !0,
                }),
                (0, t.jsx)(Q, { strName: "Migrated but Hidden", records: i }),
                (0, t.jsx)(Q, {
                  strName: "Migrated and Visible",
                  records: o,
                  bHideByDefault: !0,
                }),
              ],
            });
          }),
          Q = (d) => {
            const { strName: e, records: s, bHideByDefault: a } = d,
              [n, i] = (0, c.useState)(a);
            return (0, t.jsxs)("div", {
              className: V.SectionContainer,
              children: [
                (0, t.jsxs)("h2", {
                  className: V.SectionTitle,
                  onDoubleClick: () => i(!n),
                  children: [
                    e,
                    " (",
                    s.length,
                    ")",
                    (0, t.jsx)("span", { children: "\xA0" }),
                    (0, t.jsx)($.$n, {
                      onClick: () => i(!n),
                      children: n
                        ? (0, t.jsx)(ee.hz4, {})
                        : (0, t.jsx)(ee.Xjb, {}),
                    }),
                  ],
                }),
                (0, t.jsx)("hr", {}),
                n
                  ? (0, t.jsx)($.$n, {
                      onClick: () => i(!1),
                      children: (0, te.we)("#Sale_ShowContents"),
                    })
                  : (0, t.jsx)(t.Fragment, {
                      children: s.map((o) =>
                        (0, t.jsx)(Ee, { record: o }, o.sale_page_id),
                      ),
                    }),
              ],
            });
          },
          Ee = (0, z.PA)((d) => {
            const { record: e } = d,
              s = (0, de.m1)(e.clan_account_id);
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
                            href: p.TS.STORE_BASE_URL + "sale/" + e.vanity,
                            children: (0, t.jsx)("b", {
                              children: `${e.display_name} - (${e.vanity})`,
                            }),
                          }),
                        }),
                        !!s &&
                          (0, t.jsx)("div", {
                            children: (0, t.jsxs)("a", {
                              href: s.vanity_url,
                              children: ["Sale Page part of ", s.group_name],
                            }),
                          }),
                        !!e.gid_clan_event &&
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)("a", {
                              href:
                                p.TS.COMMUNITY_BASE_URL +
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
                        onClick: (a) =>
                          (0, ue.pg)(
                            (0, t.jsx)(Le, { record: e }),
                            (0, he.uX)(a),
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
            const { record: e, closeModal: s } = d,
              [a, n] = (0, c.useState)(e.clan_account_id),
              [i, o] = (0, c.useState)(!1),
              [r, v] = (0, c.useState)(void 0),
              [S, g] = (0, c.useState)(!1),
              [u, A] = (0, c.useState)(e.gid_clan_event),
              [f, I] = (0, c.useState)(null),
              D = () => {
                o(!0),
                  G.Get()
                    .MigrateOrUpdateSalePage(
                      e.sale_page_id,
                      a,
                      e.gid_clan_event,
                    )
                    .then(([M, N, H]) => {
                      v(M), g(N), A(H);
                    });
              };
            return (0, t.jsxs)(ge.o0, {
              strTitle: "Migrate Sale page",
              strDescription: `Will migrate the sale page ${e.vanity} to the below clan `,
              bOKDisabled: !a || i,
              onOK: D,
              onCancel: s,
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
                            n(M.GetClanAccountID()), I(M);
                          },
                        }),
                        !!f && (0, t.jsx)(De, { creatorHome: f }),
                      ],
                    }),
                !!(i && !r) &&
                  (0, t.jsx)(b.t, { position: "center", size: "medium" }),
                !!r && (0, t.jsx)("div", { children: r }),
                !!S &&
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("a", {
                          href: p.TS.STORE_BASE_URL + "sale/" + e.vanity,
                          target: "_blank",
                          children: "Sale Page",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("a", {
                          href:
                            p.TS.COMMUNITY_BASE_URL +
                            "gid/" +
                            X.b.InitFromClanID(a).ConvertTo64BitString() +
                            "/partnerevents/edit/" +
                            u,
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
              s = X.b.InitFromClanID(e.GetClanAccountID()),
              a = e.GetClanAccountID();
            return e
              ? (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        "ClanID = ",
                        a,
                        " - SteamID ",
                        s.ConvertTo64BitString(),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("a", {
                        href:
                          "https://steamsupport.valvesoftware.com/clan/overview/" +
                          s.ConvertTo64BitString(),
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
                    (0, t.jsx)(xe.hA, {
                      creatorID: e.GetCreatorHomeIdentifier(),
                      bHideCreatorType: !0,
                    }),
                  ],
                })
              : null;
          },
          Z = class U {
            m_mapSaleIDToInfo = new Map();
            m_listSaleState = new Array();
            m_stateLoadPromise = null;
            m_bLoadComplete = !1;
            BHasLoadCompleted() {
              return this.m_bLoadComplete;
            }
            GetMigrationRecords() {
              return this.m_listSaleState;
            }
            async MigrateOrUpdateSalePage(e, s, a) {
              const n = this.m_mapSaleIDToInfo.get(e);
              if (!n)
                return [
                  "Record not found to begin the migration processing, cannot take action.: " +
                    e,
                  !1,
                  void 0,
                ];
              if (n.gid_clan_event && (!n.hidden || n.published))
                return [
                  "Sale event is already public, cannot take action.: " + e,
                  !1,
                  void 0,
                ];
              try {
                const i =
                  p.TS.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
                let o = new URLSearchParams();
                o.append("sessionid", (0, p.KC)()),
                  o.append("salePageID", e),
                  o.append("clanAccountID", "" + s),
                  a && o.append("gidClanEvent", a);
                const r = await O().post(i, o, { withCredentials: !0 });
                if (
                  r?.status == 200 &&
                  r?.data?.success == Y.R &&
                  r?.data?.gidClanEvent
                )
                  return (
                    (0, x.h5)(() => {
                      n.gid_clan_event ||
                        ((n.gid_clan_event = r.data.gidClanEvent),
                        (n.clan_account_id = s),
                        (n.hidden = !0),
                        (n.published = !1),
                        (n.valve_approved_sale_vanity_id = !0));
                    }),
                    [r.data.msg || "Success", !0, r.data.gidClanEvent]
                  );
                {
                  const v = (0, C.H)(r);
                  return (
                    console.error(
                      "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                        v.strErrorMsg,
                      v,
                    ),
                    [r.data.msg || "Failed", !1, void 0]
                  );
                }
              } catch (i) {
                const o = (0, C.H)(i);
                console.error(
                  "CMigrateSaleStore.MigrateOrUpdateSalePage: caught error with " +
                    o.strErrorMsg,
                  o,
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
              try {
                const e =
                    p.TS.COMMUNITY_BASE_URL +
                    "migrate/ajaxgetsalepagestomigrate",
                  s = { sessionid: (0, p.KC)() },
                  a = await O().get(e, { params: s, withCredentials: !0 });
                if (
                  ((this.m_bLoadComplete = !0),
                  a?.status == 200 && a?.data?.success == Y.R && a?.data?.data)
                )
                  return (
                    (0, x.h5)(() => {
                      a.data.data.forEach((n) => {
                        this.m_mapSaleIDToInfo.set(n.sale_page_id, n),
                          this.m_listSaleState.push(
                            this.m_mapSaleIDToInfo.get(n.sale_page_id),
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
                  const n = (0, C.H)(a);
                  console.error(
                    "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                      n.strErrorMsg,
                    n,
                  );
                }
              } catch (e) {
                const s = (0, C.H)(e);
                console.error(
                  "CMigrateSaleStore.LoadSalePageMigrationInfo: caught error with " +
                    s.strErrorMsg,
                  s,
                );
              }
              return [];
            }
            static s_Singleton;
            static Get() {
              return U.s_Singleton || (U.s_Singleton = new U()), U.s_Singleton;
            }
            constructor() {
              (0, x.Gn)(this);
            }
          };
        se([x.sH], Z.prototype, "m_mapSaleIDToInfo", 2),
          se([x.sH], Z.prototype, "m_listSaleState", 2);
        let G = Z;
        function Te() {
          const [d, e] = c.useState(!G.Get().BHasLoadCompleted());
          return (
            c.useEffect(() => {
              G.Get().BHasLoadCompleted() ||
                G.Get()
                  .LoadSalePageMigrationInfo()
                  .finally(() => e(!1));
            }, []),
            d ? void 0 : G.Get().GetMigrationRecords()
          );
        }
        var re = l(813),
          L = l(179),
          Re = Object.defineProperty,
          be = Object.getOwnPropertyDescriptor,
          oe = (d, e, s, a) => {
            for (
              var n = a > 1 ? void 0 : a ? be(e, s) : e, i = d.length - 1, o;
              i >= 0;
              i--
            )
              (o = d[i]) && (n = (a ? o(e, s, n) : o(n)) || n);
            return a && n && Re(e, s, n), n;
          };
        const J = class y {
          constructor() {
            (0, x.Gn)(this);
          }
          m_rgApps = [];
          m_rgClanAccountIDs = [];
          m_nHighestAppOffsetRequested = 0;
          m_nHighestClanOffsetRequested = 0;
          m_mostRecentRequest;
          m_startAppID;
          static s_globalSingletonStore;
          static Get() {
            return (
              y.s_globalSingletonStore ||
                ((y.s_globalSingletonStore = new y()),
                y.s_globalSingletonStore.Init()),
              y.s_globalSingletonStore
            );
          }
          Init() {}
          GetApps(e, s, a) {
            const n = Math.max(e, this.m_nHighestAppOffsetRequested),
              i = e + s - n;
            return (
              i > 0 && (this.m_mostRecentRequest = this.FetchApps(n, i, a)),
              this.m_rgApps.slice(e, e + s)
            );
          }
          async FetchApps(e, s, a, n) {
            if (this.m_startAppID && this.m_startAppID != a)
              throw new Error(
                "Cannot switch starting AppID from " +
                  this.m_startAppID +
                  " to " +
                  a,
              );
            this.m_startAppID = a;
            let i = Math.max(s, 20);
            for (
              this.m_nHighestAppOffsetRequested = e + i,
                await this.m_mostRecentRequest;
              i > 0;
            ) {
              const o = Math.min(i, 100),
                r = { offset: e, nBatchSize: o, start_appid: a },
                v = p.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
              let S = null;
              try {
                const g = await O().get(v, {
                  params: r,
                  withCredentials: !0,
                  cancelToken: n?.token,
                });
                if (g?.data?.success == Y.R && g.data.apps) {
                  (0, x.h5)(() => {
                    if (e > this.m_rgApps.length)
                      for (let u = this.m_rgApps.length; u < e; u++)
                        this.m_rgApps[u] = null;
                    for (let u = 0; u < o; u++)
                      this.m_rgApps[e + u] = g.data.apps[u];
                  }),
                    (e += o),
                    (i -= o);
                  continue;
                }
                S = (0, C.H)(g?.data);
              } catch (g) {
                S = (0, C.H)(g);
              }
              throw new Error(
                "ajax request failed with error " +
                  S.errorCode +
                  ':"' +
                  S.strErrorMsg +
                  '"',
              );
            }
          }
          GetClanAccountIDs(e, s) {
            const a = this.m_nHighestClanOffsetRequested,
              n = e + s - a;
            return (
              n > 0 && this.FetchClans(a, n),
              this.m_rgClanAccountIDs.slice(e, e + s)
            );
          }
          async FetchClans(e, s, a) {
            this.m_nHighestClanOffsetRequested = e + s;
            const n = { offset: e, count: s },
              i = p.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
            let o = null;
            try {
              const r = await O().get(i, {
                params: n,
                withCredentials: !0,
                cancelToken: a?.token,
              });
              if (r?.data?.success == Y.R && r.data.accountids) {
                this.m_rgClanAccountIDs = this.m_rgClanAccountIDs.concat(
                  r.data.accountids.map(Number),
                );
                return;
              }
              o = (0, C.H)(r?.data);
            } catch (r) {
              o = (0, C.H)(r);
            }
            console.error(
              "FetchClans: ajax request failed with error",
              o.strErrorMsg,
            );
          }
        };
        oe([x.sH.shallow], J.prototype, "m_rgApps", 2),
          oe([x.sH.shallow], J.prototype, "m_rgClanAccountIDs", 2);
        let Pe = J;
        var ye = l(9608),
          Oe = l(80778),
          m = l.n(Oe),
          Ge = l(99412);
        const Ne = (0, z.PA)((d) => {
            const [e, s] = (0, c.useState)(!0);
            (0, c.useEffect)(() => {
              F.mh.Init(), s(!1);
            }, []);
            const [a, n] = (0, L.QD)("start", 0),
              [i, o] = (0, L.QD)("start_appid", 0),
              [r, v] = (0, L.QD)("count", 10),
              [S, g] = (0, L.QD)("autoload", !0),
              [u, A] = (0, L.QD)("batch_size", 1),
              [f, I] = (0, L.QD)("automigrate", !1),
              [D, M] = (0, c.useState)(!1),
              [N, H] = (0, L.QD)("rolling", 0),
              [j, B] = (0, c.useState)(new Set()),
              P = (0, c.useRef)(0),
              K = () => {
                M(!1), B(new Set()), n(a + r);
              },
              k = () => M(!0),
              T = Pe.Get().GetApps(a, r, i),
              h =
                N == 0 ? T : T.filter((E) => !j.has(Number(E.id))).slice(0, N),
              w = (E, le) => {
                j.has(E) ||
                  (console.log("completed: ", E, le),
                  j.add(E),
                  (P.current += le),
                  B(new Set(j)));
              };
            return (0, t.jsxs)("div", {
              className: m().MigrateToolCtn,
              children: [
                (0, t.jsx)("div", {
                  className: m().ToolHeader,
                  children: "Partner Events Migration Tools",
                }),
                h.map((E) =>
                  (0, t.jsx)(
                    He,
                    {
                      app: E,
                      bAutoLoad: S,
                      bAutoMigrate: f || D,
                      nMigrateBatchSize: u,
                      fnOnCompletion: w,
                    },
                    E.id,
                  ),
                ),
                e &&
                  (0, t.jsx)(b.t, {
                    size: "xlarge",
                    position: "center",
                    string: "initializing",
                  }),
                !T.length &&
                  (0, t.jsx)(b.t, {
                    size: "xlarge",
                    position: "center",
                    string: "loading apps",
                  }),
                (0, t.jsx)("div", {
                  className: m().LoadEventsButton,
                  onClick: K,
                  children: "LOAD NEXT PAGE",
                }),
                !f &&
                  (0, t.jsx)("div", {
                    className: m().LoadEventsButton,
                    onClick: k,
                    children: "MIGRATE ALL ON PAGE",
                  }),
                (0, t.jsx)("div", {
                  className: m().StatusMessage,
                  children:
                    j.size +
                    " OF " +
                    T.length +
                    " APPS COMPLETE. #EVENTS: " +
                    P.current,
                }),
              ],
            });
          }),
          ie = 50,
          He = (0, z.PA)((d) => {
            const e = Number(d.app.id),
              [s, a] = (0, c.useState)(0),
              [n, i] = (0, c.useState)([]),
              [o, r] = (0, c.useState)(!1),
              v = (0, c.useRef)(new Set()),
              S = (0, c.useRef)(0);
            (0, c.useEffect)(() => {
              re.ac
                .LoadOGGClanInfoForAppID(e)
                .then((h) =>
                  console.log(
                    "Loaded app",
                    e,
                    h?.group_name,
                    h?.clanSteamID?.ConvertTo64BitString(),
                  ),
                );
            }, [e]);
            const g = re.ac.GetOGGClanInfo(e),
              u = g ? g.group_name : d.app.name,
              A = `${p.TS.COMMUNITY_BASE_URL}games/${g ? g.vanity_url : e}/partnerevents/`,
              f = n.length,
              I = s == f,
              D = n.filter((h) => h.BIsVisibleEvent()),
              M = D.length,
              H = D.filter(
                (h) =>
                  h.bOldAnnouncement &&
                  g &&
                  g.clanAccountID != h.announcementClanSteamID.GetAccountID(),
              ).length,
              j = D.filter(
                (h) =>
                  h.bOldAnnouncement &&
                  !v.current.has(h.AnnouncementGID) &&
                  (!g ||
                    g.clanAccountID ==
                      h.announcementClanSteamID.GetAccountID()),
              ),
              B = j.length,
              P = !I && B > 0 && g?.clanSteamID,
              K = async () => {
                const h = s;
                a(s + ie), r(!0);
                const w = await F.mh.LoadPartnerEventsPageable(
                  void 0,
                  e,
                  h,
                  ie,
                );
                i(n.concat(w)), r(!1);
              };
            (0, c.useEffect)(() => {
              d.bAutoLoad && I && !o && K();
            });
            const k = (h, w) => {
                w ? (S.current += 1) : v.current.add(h);
              },
              T = async () => {
                r(!0),
                  await Be(j, d.nMigrateBatchSize, e, g.clanSteamID, k),
                  r(!1);
              };
            return (
              (0, c.useEffect)(() => {
                d.bAutoMigrate && P && !o && T();
              }),
              (0, c.useEffect)(() => {
                !I && !P && !o && d.fnOnCompletion(e, S.current);
              }),
              (0, t.jsxs)("div", {
                className: m().ClanRow,
                children: [
                  (0, t.jsx)("div", { className: m().ID, children: e }),
                  (0, t.jsx)("a", {
                    className: m().ClanName,
                    href: A,
                    children: u,
                  }),
                  (0, t.jsxs)("div", {
                    className: m().Counts,
                    children: [
                      `Loaded: ${f}	Visible: ${M}	Old: ${B}`,
                      H > 0 &&
                        (0, t.jsx)("span", {
                          className: m().LinkedAnnouncements,
                          children: `Linked: ${H}`,
                        }),
                    ],
                  }),
                  I
                    ? (0, t.jsx)("div", {
                        className: m().LoadEventsButton,
                        onClick: K,
                        children: "LOAD EVENTS",
                      })
                    : o
                      ? (0, t.jsx)(b.t, { size: "small" })
                      : P
                        ? (0, t.jsx)("div", {
                            className: m().MigrateEventsButton,
                            onClick: T,
                            children: "MIGRATE EVENTS",
                          })
                        : (0, t.jsx)("div", {
                            className: m().CompleteMessage,
                            children: "NOTHING TO MIGRATE",
                          }),
                ],
              })
            );
          });
        async function Be(d, e, s, a, n) {
          for (const i of d.slice(0, e)) {
            console.log(
              "Migrating",
              s,
              i.AnnouncementGID,
              i.GetNameWithFallback(Ge.Bhc),
              i,
            );
            try {
              const o = await (0, ye.e6)(i.AnnouncementGID, s, a);
              if (o) console.warn("Already migrated to event", o);
              else {
                const r = F.mh.GetEditModel();
                r.AddTag("auto_migrated"),
                  r.AddTag("hide_library_overview"),
                  r.AddTag("hide_library_detail"),
                  await F.mh.SaveModel(a),
                  console.log("Successfully migrated the event!"),
                  (i.bOldAnnouncement = !1),
                  n(i.AnnouncementGID, !0);
              }
            } catch (o) {
              const r = (0, C.H)(o);
              console.error("MigrateEvents: " + r.strErrorMsg.slice(0, 512), r),
                n(i.AnnouncementGID, !1);
            }
          }
        }
        var W = l(92757),
          we = l(77495),
          ze = l(83492),
          Ue = l(90783);
        function Fe(d) {
          const [e, s] = c.useState(!0);
          return (
            c.useEffect(() => {
              we.O3.Init(), Promise.all([]).then(() => s(!1));
            }, []),
            e
              ? (0, t.jsx)(b.t, { position: "center", size: "medium" })
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
      22517: (R) => {
        R.exports = {
          SectionContainer: "_3ZElG443QUegFs_bnylS3a",
          SectionTitle: "_1-ftdQuCgy6Eu3lmIy7GzJ",
          RecordCtn: "_1gW9gaaia6sAUsiG510BdF",
          RecordInfoCtn: "_6eQgp5l-li4-ItHochfRq",
        };
      },
      80778: (R) => {
        R.exports = {
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
      82062: (R) => {
        R.exports = { SearchResults: "_1roMuz15pxKZcGYgASP5xg" };
      },
    },
  ]);
})();
