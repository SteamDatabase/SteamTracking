/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    "+chf": function (e, t, a) {
      e.exports = { SearchResults: "search_curator_SearchResults_1roMu" };
    },
    "75vZ": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return Z;
        });
      var n = a("1fPh"),
        o = (a("jZUi"), a("t0uJ")),
        r = a("mrSG"),
        l = a("vDqi"),
        i = a.n(l),
        c = a("2vnA"),
        s = a("TyAF"),
        d = (a("wd/R"), a("q1tI")),
        u = a.n(d),
        m = (a("mgoM"), a("65aj"), a("kLLr")),
        g = a("UCyf"),
        h = a("Mgs7"),
        p = a("7Q8g"),
        v = a("ka0M"),
        _ = a("6Y59"),
        E = a("0OaU"),
        b = (a("AiWL"), a("X3Ds")),
        S = a("TLQK"),
        f = a("OS6B"),
        C = a("lkRc"),
        O = a("a0ud"),
        I = a("TtDX"),
        M = (a("pKbv"), a("uIWk")),
        j = a("y+6m"),
        A = a("IjL/"),
        T = a("xnZ7"),
        w = a("bS9Q"),
        L = a("+chf");
      const D = (e) => {
          const {
              strLabel: t,
              strToolTip: a,
              fnSetCurator: n,
              bLimitToCreatorHome: o,
            } = e,
            l = Object(d.useRef)(null),
            c = Object(d.useRef)(null),
            s = Object(d.useRef)(0),
            m = Object(d.useRef)();
          Object(d.useEffect)(
            () => () => {
              window.clearTimeout(s.current),
                l.current && l.current("SearchForCurator: unmounting"),
                c.current && c.current.Hide();
            },
            []
          );
          const g = Object(d.useCallback)(
            (e) =>
              Object(r.a)(void 0, void 0, void 0, function* () {
                const t = e.target.value;
                t &&
                  0 != t.trim().length &&
                  (window.clearTimeout(s.current),
                  l.current && l.current("SearchForCurator: new request"),
                  (s.current = window.setTimeout(
                    () =>
                      Object(r.a)(void 0, void 0, void 0, function* () {
                        const e = i.a.CancelToken.source();
                        l.current = e.cancel;
                        try {
                          const a = yield M.a.SearchCreatorHomeStore(t, o, e);
                          if (e.token.reason) return;
                          c.current = Object(I.a)(
                            u.a.createElement(G, { list: a, fnSetCurator: n }),
                            m.current.element,
                            {
                              bOverlapHorizontal: !0,
                              bMatchWidth: !0,
                              bFitToWindow: !0,
                              bDisablePopTop: !0,
                            }
                          );
                        } catch (t) {
                          if (e.token.reason) return;
                          const a = Object(f.a)(t);
                          console.log(
                            "SearchForCurator.SearchCreatorHomeStore error " +
                              a.strErrorMsg,
                            a
                          );
                        }
                      }),
                    300
                  )));
              }),
            [n, o]
          );
          return u.a.createElement(
            A.a,
            null,
            u.a.createElement(h.A, {
              type: "text",
              label: t,
              onChange: g,
              onBlur: () => {
                setTimeout(() => c.current && c.current.Hide(), 200);
              },
              ref: m,
              tooltip: a,
            })
          );
        },
        G = (e) => {
          const { list: t, fnSetCurator: a } = e;
          return u.a.createElement(
            j.c,
            { className: L.SearchResults },
            t.map((e) =>
              u.a.createElement(
                j.d,
                {
                  key: "curatorresult" + e.GetClanAccountID(),
                  onSelected: () => a(e),
                },
                u.a.createElement(
                  "div",
                  { style: { display: "flex", alignItems: "center" } },
                  u.a.createElement(
                    "div",
                    { className: T.GameImageContainer },
                    u.a.createElement("img", {
                      src: e.GetAvatarURLFullSize(),
                      className: T.AvatarImage,
                    })
                  ),
                  Object(w.b)(e.GetName())
                )
              )
            )
          );
        };
      var R = a("BRUS");
      const y = Object(s.a)((e) => {
          const t = (function () {
            const [e, t] = u.a.useState(!U.Get().BHasLoadCompleted());
            return (
              u.a.useEffect(() => {
                U.Get().BHasLoadCompleted() ||
                  U.Get()
                    .LoadSalePageMigrationInfo()
                    .finally(() => t(!1));
              }, []),
              e ? void 0 : U.Get().GetMigrationRecords()
            );
          })();
          if (!t)
            return u.a.createElement(E.a, {
              string: Object(S.f)("#Loading"),
              position: "center",
              size: "medium",
            });
          const a = t.filter((e) => !e.gid_clan_event),
            n = a.filter(
              (e) =>
                e.display_name.toLocaleLowerCase().indexOf("franchise") >= 0
            ),
            o = a.filter(
              (e) => e.display_name.toLocaleLowerCase().indexOf("franchise") < 0
            ),
            r = t.filter((e) => Boolean(e.gid_clan_event && e.hidden)),
            l = t.filter((e) => Boolean(e.gid_clan_event && !e.hidden));
          return u.a.createElement(
            "div",
            null,
            u.a.createElement("h1", null, "Migration Sale Tool:"),
            u.a.createElement(
              "p",
              null,
              "For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account."
            ),
            u.a.createElement(B, {
              strName: "Unmigrated Franchises",
              records: n,
            }),
            u.a.createElement(B, {
              strName: "Unmigrated Generic Sale PAges",
              records: o,
              bHideByDefault: !0,
            }),
            u.a.createElement(B, {
              strName: "Migrated but Hidden",
              records: r,
            }),
            u.a.createElement(B, {
              strName: "Migrated and Visible",
              records: l,
              bHideByDefault: !0,
            })
          );
        }),
        B = (e) => {
          const { strName: t, records: a, bHideByDefault: n } = e,
            [o, r] = Object(d.useState)(n);
          return u.a.createElement(
            "div",
            { className: O.SectionContainer },
            u.a.createElement(
              "h2",
              { className: O.SectionTitle, onDoubleClick: () => r(!o) },
              t,
              " (",
              a.length,
              ")",
              u.a.createElement("span", null, " "),
              u.a.createElement(
                h.e,
                { onClick: () => r(!o) },
                o ? u.a.createElement(_.P, null) : u.a.createElement(_.S, null)
              )
            ),
            u.a.createElement("hr", null),
            Boolean(o)
              ? u.a.createElement(
                  h.e,
                  { onClick: () => r(!1) },
                  Object(S.f)("#Sale_ShowContents")
                )
              : u.a.createElement(
                  u.a.Fragment,
                  null,
                  a.map((e) =>
                    u.a.createElement(N, { key: e.sale_page_id, record: e })
                  )
                )
          );
        },
        N = Object(s.a)((e) => {
          const { record: t } = e,
            a = Object(g.b)(t.clan_account_id);
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(
              "div",
              { className: O.RecordCtn },
              u.a.createElement(
                "div",
                { className: O.RecordInfoCtn },
                u.a.createElement(
                  "div",
                  null,
                  u.a.createElement(
                    "a",
                    { href: C.c.STORE_BASE_URL + "sale/" + t.vanity },
                    u.a.createElement(
                      "b",
                      null,
                      `${t.display_name} - (${t.vanity})`
                    )
                  )
                ),
                Boolean(a) &&
                  u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      "a",
                      { href: a.vanity_url },
                      "Sale Page part of ",
                      a.group_name
                    )
                  ),
                Boolean(t.gid_clan_event) &&
                  u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      "a",
                      {
                        href:
                          C.c.COMMUNITY_BASE_URL +
                          "gid/" +
                          m.a
                            .InitFromClanID(t.clan_account_id)
                            .ConvertTo64BitString() +
                          "/partnerevents/edit/" +
                          t.gid_clan_event,
                      },
                      `Migrated: Event Editor Links: State hidden: ${t.hidden} published: ${t.published} sale/ vanity?: ${t.valve_approved_sale_vanity_id}`
                    )
                  )
              ),
              Boolean(!t.gid_clan_event || (t.hidden && !t.published)) &&
                u.a.createElement(
                  h.e,
                  {
                    onClick: (e) =>
                      Object(v.d)(
                        u.a.createElement(P, { record: t }),
                        Object(b.o)(e)
                      ),
                  },
                  "Migrate Sale Page"
                )
            ),
            u.a.createElement("hr", null)
          );
        }),
        P = (e) => {
          const { record: t, closeModal: a } = e,
            [n, o] = Object(d.useState)(t.clan_account_id),
            [r, l] = Object(d.useState)(!1),
            [i, c] = Object(d.useState)(void 0),
            [s, g] = Object(d.useState)(!1),
            [h, v] = Object(d.useState)(t.gid_clan_event),
            [_, b] = Object(d.useState)(null);
          return u.a.createElement(
            p.e,
            {
              strTitle: "Migrate Sale page",
              strDescription: `Will migrate the sale page ${t.vanity} to the below clan `,
              bOKDisabled: !n || r,
              onOK: () => {
                l(!0),
                  U.Get()
                    .MigrateOrUpdateSalePage(
                      t.sale_page_id,
                      n,
                      t.gid_clan_event
                    )
                    .then(([e, t, a]) => {
                      c(e), g(t), v(a);
                    });
              },
              onCancel: a,
            },
            Boolean(t.clan_account_id)
              ? u.a.createElement(
                  u.a.Fragment,
                  null,
                  u.a.createElement(
                    "div",
                    null,
                    "Sale page already migrated. This will update the hidden page with latest migration code"
                  ),
                  u.a.createElement(
                    "div",
                    null,
                    "ClanID = ",
                    t.clan_account_id
                  ),
                  u.a.createElement("div", null, "GID = ", t.gid_clan_event)
                )
              : u.a.createElement(
                  u.a.Fragment,
                  null,
                  u.a.createElement(D, {
                    bLimitToCreatorHome: !0,
                    strLabel: "Search for Creator Home to house the Sale Event",
                    strToolTip:
                      "Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)",
                    fnSetCurator: (e) => {
                      o(e.GetClanAccountID()), b(e);
                    },
                  }),
                  Boolean(_) && u.a.createElement(k, { creatorHome: _ })
                ),
            Boolean(r && !i) &&
              u.a.createElement(E.a, { position: "center", size: "medium" }),
            Boolean(i) && u.a.createElement("div", null, i),
            Boolean(s) &&
              u.a.createElement(
                "div",
                null,
                u.a.createElement(
                  "div",
                  null,
                  u.a.createElement(
                    "a",
                    {
                      href: C.c.STORE_BASE_URL + "sale/" + t.vanity,
                      target: "_blank",
                    },
                    "Sale Page"
                  )
                ),
                u.a.createElement(
                  "div",
                  null,
                  u.a.createElement(
                    "a",
                    {
                      href:
                        C.c.COMMUNITY_BASE_URL +
                        "gid/" +
                        m.a.InitFromClanID(n).ConvertTo64BitString() +
                        "/partnerevents/edit/" +
                        h,
                      target: "_blank",
                    },
                    "New Sale Page Editor"
                  )
                )
              )
          );
        },
        k = (e) => {
          const { creatorHome: t } = e,
            a = m.a.InitFromClanID(t.GetClanAccountID()),
            n = t.GetClanAccountID();
          return t
            ? u.a.createElement(
                "div",
                null,
                u.a.createElement(
                  "div",
                  null,
                  "ClanID = ",
                  n,
                  " - SteamID ",
                  a.ConvertTo64BitString()
                ),
                u.a.createElement(
                  "div",
                  null,
                  u.a.createElement(
                    "a",
                    {
                      href:
                        "https://steamsupport.valvesoftware.com/clan/overview/" +
                        a.ConvertTo64BitString(),
                    },
                    "Group Support Page"
                  )
                ),
                Boolean(!t.BIsPartnerEventEditorEnabled()) &&
                  u.a.createElement(
                    "div",
                    null,
                    "To use this Creator Home for the sale page migration, the process will need to enable partner event editing on the clan. This both updates the creator home but also puts a small limitation upon it.",
                    u.a.createElement(
                      "a",
                      {
                        href: "https://confluence.valve.org/display/STEAM/Creator+home+and+Partner+Events+Beta",
                        target: "_blank",
                      },
                      "Read more about the state here."
                    )
                  ),
                u.a.createElement(R.a, {
                  creatorID: t.GetCreatorHomeIdentifier(),
                  bHideCreatorType: !0,
                })
              )
            : null;
        };
      class U {
        constructor() {
          (this.m_mapSaleIDToInfo = new Map()),
            (this.m_listSaleState = new Array()),
            (this.m_stateLoadPromise = null),
            (this.m_bLoadComplete = !1);
        }
        BHasLoadCompleted() {
          return this.m_bLoadComplete;
        }
        GetMigrationRecords() {
          return this.m_listSaleState;
        }
        MigrateOrUpdateSalePage(e, t, a) {
          var n, o;
          return Object(r.a)(this, void 0, void 0, function* () {
            const r = this.m_mapSaleIDToInfo.get(e);
            if (!r)
              return [
                "Record not found to begin the migration processing, cannot take action.: " +
                  e,
                !1,
                void 0,
              ];
            if (r.gid_clan_event && (!r.hidden || r.published))
              return [
                "Sale event is already public, cannot take action.: " + e,
                !1,
                void 0,
              ];
            try {
              const l =
                C.c.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
              let s = new URLSearchParams();
              s.append("sessionid", C.c.SESSIONID),
                s.append("salePageID", e),
                s.append("clanAccountID", "" + t),
                a && s.append("gidClanEvent", a);
              const d = yield i.a.post(l, s, { withCredentials: !0 });
              if (
                200 == (null == d ? void 0 : d.status) &&
                1 ==
                  (null === (n = null == d ? void 0 : d.data) || void 0 === n
                    ? void 0
                    : n.success) &&
                (null === (o = null == d ? void 0 : d.data) || void 0 === o
                  ? void 0
                  : o.gidClanEvent)
              )
                return (
                  Object(c.G)(() => {
                    r.gid_clan_event ||
                      ((r.gid_clan_event = d.data.gidClanEvent),
                      (r.clan_account_id = t),
                      (r.hidden = !0),
                      (r.published = !1),
                      (r.valve_approved_sale_vanity_id = !0));
                  }),
                  [d.data.msg || "Success", !0, d.data.gidClanEvent]
                );
              {
                const e = Object(f.a)(d);
                return (
                  console.error(
                    "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                      e.strErrorMsg,
                    e
                  ),
                  [d.data.msg || "Failed", !1, void 0]
                );
              }
            } catch (e) {
              const t = Object(f.a)(e);
              console.error(
                "CMigrateSaleStore.MigrateOrUpdateSalePage: caught error with " +
                  t.strErrorMsg,
                t
              );
            }
            return ["failed", !1, void 0];
          });
        }
        LoadSalePageMigrationInfo() {
          return Object(r.a)(this, void 0, void 0, function* () {
            return (
              this.m_stateLoadPromise ||
                (this.m_stateLoadPromise =
                  this.InternalLoadSalePageMigrationInfo()),
              this.m_stateLoadPromise
            );
          });
        }
        InternalLoadSalePageMigrationInfo() {
          var e, t;
          return Object(r.a)(this, void 0, void 0, function* () {
            try {
              const a =
                  C.c.COMMUNITY_BASE_URL + "migrate/ajaxgetsalepagestomigrate",
                n = { sessionid: C.c.SESSIONID },
                o = yield i.a.get(a, { params: n, withCredentials: !0 });
              if (
                ((this.m_bLoadComplete = !0),
                200 == (null == o ? void 0 : o.status) &&
                  1 ==
                    (null === (e = null == o ? void 0 : o.data) || void 0 === e
                      ? void 0
                      : e.success) &&
                  (null === (t = null == o ? void 0 : o.data) || void 0 === t
                    ? void 0
                    : t.data))
              )
                return (
                  Object(c.G)(() => {
                    o.data.data.forEach((e) => {
                      this.m_mapSaleIDToInfo.set(e.sale_page_id, e),
                        this.m_listSaleState.push(
                          this.m_mapSaleIDToInfo.get(e.sale_page_id)
                        );
                    });
                  }),
                  console.log(
                    "InternalLoadSalePageMigrationInfo Loaded: " +
                      this.m_listSaleState.length
                  ),
                  this.m_listSaleState
                );
              {
                const e = Object(f.a)(o);
                console.error(
                  "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                    e.strErrorMsg,
                  e
                );
              }
            } catch (e) {
              const t = Object(f.a)(e);
              console.error(
                "CMigrateSaleStore.LoadSalePageMigrationInfo: caught error with " +
                  t.strErrorMsg,
                t
              );
            }
            return [];
          });
        }
        static Get() {
          return (
            U.s_Singleton ||
              ((U.s_Singleton = new U()),
              ("dev" != C.c.WEB_UNIVERSE && "beta" != C.c.WEB_UNIVERSE) ||
                (window.g_MigrateSaleStore = U.s_Singleton)),
            U.s_Singleton
          );
        }
      }
      Object(r.b)([c.C], U.prototype, "m_mapSaleIDToInfo", void 0),
        Object(r.b)([c.C], U.prototype, "m_listSaleState", void 0);
      var H = a("TQGK"),
        F = (a("3+zv"), a("9w6b")),
        x = a("GiuM");
      class z {
        constructor() {
          (this.m_rgApps = []),
            (this.m_rgClanAccountIDs = []),
            (this.m_nHighestAppOffsetRequested = 0),
            (this.m_nHighestClanOffsetRequested = 0);
        }
        static Get() {
          return (
            z.s_globalSingletonStore ||
              ((z.s_globalSingletonStore = new z()),
              z.s_globalSingletonStore.Init()),
            z.s_globalSingletonStore
          );
        }
        Init() {}
        GetApps(e, t, a) {
          const n = Math.max(e, this.m_nHighestAppOffsetRequested),
            o = e + t - n;
          return (
            o > 0 && (this.m_mostRecentRequest = this.FetchApps(n, o, a)),
            this.m_rgApps.slice(e, e + t)
          );
        }
        FetchApps(e, t, a, n) {
          var o;
          return Object(r.a)(this, void 0, void 0, function* () {
            if (this.m_startAppID && this.m_startAppID != a)
              throw new Error(
                "Cannot switch starting AppID from " +
                  this.m_startAppID +
                  " to " +
                  a
              );
            this.m_startAppID = a;
            let r = Math.max(t, 20);
            for (
              this.m_nHighestAppOffsetRequested = e + r,
                yield this.m_mostRecentRequest;
              r > 0;

            ) {
              const t = Math.min(r, 100),
                l = { offset: e, nBatchSize: t, start_appid: a },
                s = C.c.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
              let d = null;
              try {
                const a = yield i.a.get(s, {
                  params: l,
                  withCredentials: !0,
                  cancelToken: null == n ? void 0 : n.token,
                });
                if (
                  1 ==
                    (null === (o = null == a ? void 0 : a.data) || void 0 === o
                      ? void 0
                      : o.success) &&
                  a.data.apps
                ) {
                  Object(c.G)(() => {
                    if (e > this.m_rgApps.length)
                      for (let t = this.m_rgApps.length; t < e; t++)
                        this.m_rgApps[t] = null;
                    for (let n = 0; n < t; n++)
                      this.m_rgApps[e + n] = a.data.apps[n];
                  }),
                    (e += t),
                    (r -= t);
                  continue;
                }
                d = Object(f.a)(null == a ? void 0 : a.data);
              } catch (e) {
                d = Object(f.a)(e);
              }
              throw new Error(
                "ajax request failed with error " +
                  d.errorCode +
                  ':"' +
                  d.strErrorMsg +
                  '"'
              );
            }
          });
        }
        GetClanAccountIDs(e, t) {
          const a = this.m_nHighestClanOffsetRequested,
            n = e + t - a;
          return (
            n > 0 && this.FetchClans(a, n),
            this.m_rgClanAccountIDs.slice(e, e + t)
          );
        }
        FetchClans(e, t, a) {
          var n;
          return Object(r.a)(this, void 0, void 0, function* () {
            this.m_nHighestClanOffsetRequested = e + t;
            const o = { offset: e, count: t },
              r = C.c.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
            let l = null;
            try {
              const e = yield i.a.get(r, {
                params: o,
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                1 ==
                  (null === (n = null == e ? void 0 : e.data) || void 0 === n
                    ? void 0
                    : n.success) &&
                e.data.accountids
              )
                return void (this.m_rgClanAccountIDs =
                  this.m_rgClanAccountIDs.concat(
                    e.data.accountids.map(Number)
                  ));
              l = Object(f.a)(null == e ? void 0 : e.data);
            } catch (e) {
              l = Object(f.a)(e);
            }
            console.error(
              "FetchClans: ajax request failed with error",
              l.strErrorMsg
            );
          });
        }
      }
      Object(r.b)([c.C.shallow], z.prototype, "m_rgApps", void 0),
        Object(r.b)([c.C.shallow], z.prototype, "m_rgClanAccountIDs", void 0);
      var q = a("EGVG"),
        V = a("Tgxo"),
        Y = a.n(V);
      const $ = Object(s.a)((e) => {
          const [t, a] = Object(d.useState)(!0);
          Object(d.useEffect)(() => {
            Promise.all([F.a.InitGlobal(), o.c.Init()]).then(() => a(!1));
          }, []);
          const [n, r] = Object(x.d)("start", 0),
            [l, i] = Object(x.d)("start_appid", 0),
            [c, s] = Object(x.d)("count", 10),
            [m, g] = Object(x.d)("autoload", !0),
            [h, p] = Object(x.d)("batch_size", 1),
            [v, _] = Object(x.d)("automigrate", !1),
            [b, S] = Object(d.useState)(!1),
            [f, C] = Object(x.d)("rolling", 0),
            [O, I] = Object(d.useState)(new Set()),
            M = Object(d.useRef)(0),
            j = z.Get().GetApps(n, c, l),
            A = 0 == f ? j : j.filter((e) => !O.has(Number(e.id))).slice(0, f),
            T = (e, t) => {
              O.has(e) ||
                (console.log("completed: ", e, t),
                O.add(e),
                (M.current += t),
                I(new Set(O)));
            };
          return u.a.createElement(
            "div",
            { className: Y.a.MigrateToolCtn },
            u.a.createElement(
              "div",
              { className: Y.a.ToolHeader },
              "Partner Events Migration Tools"
            ),
            A.map((e) =>
              u.a.createElement(W, {
                key: e.id,
                app: e,
                bAutoLoad: m,
                bAutoMigrate: v || b,
                nMigrateBatchSize: h,
                fnOnCompletion: T,
              })
            ),
            t &&
              u.a.createElement(E.a, {
                size: "xlarge",
                position: "center",
                string: "initializing",
              }),
            !j.length &&
              u.a.createElement(E.a, {
                size: "xlarge",
                position: "center",
                string: "loading apps",
              }),
            u.a.createElement(
              "div",
              {
                className: Y.a.LoadEventsButton,
                onClick: () => {
                  S(!1), I(new Set()), r(n + c);
                },
              },
              "LOAD NEXT PAGE"
            ),
            !v &&
              u.a.createElement(
                "div",
                { className: Y.a.LoadEventsButton, onClick: () => S(!0) },
                "MIGRATE ALL ON PAGE"
              ),
            u.a.createElement(
              "div",
              { className: Y.a.StatusMessage },
              O.size +
                " OF " +
                j.length +
                " APPS COMPLETE. #EVENTS: " +
                M.current
            )
          );
        }),
        W = Object(s.a)((e) => {
          const t = Number(e.app.id),
            [a, n] = Object(d.useState)(0),
            [l, i] = Object(d.useState)([]),
            [c, s] = Object(d.useState)(!1),
            m = Object(d.useRef)(new Set()),
            g = Object(d.useRef)(0);
          Object(d.useEffect)(() => {
            H.a.LoadOGGClanInfoForAppID(t).then((e) => {
              var a;
              return console.log(
                "Loaded app",
                t,
                null == e ? void 0 : e.group_name,
                null === (a = null == e ? void 0 : e.clanSteamID) ||
                  void 0 === a
                  ? void 0
                  : a.ConvertTo64BitString()
              );
            });
          }, [t]);
          const h = H.a.GetOGGClanInfo(t),
            p = h ? h.group_name : e.app.name,
            v = `${C.c.COMMUNITY_BASE_URL}games/${
              h ? h.vanity_url : t
            }/partnerevents/`,
            _ = l.length,
            b = a == _,
            S = l.filter((e) => e.BIsVisibleEvent()),
            O = S.length,
            I = S.filter(
              (e) =>
                e.bOldAnnouncement &&
                h &&
                h.clanAccountID != e.announcementClanSteamID.GetAccountID()
            ).length,
            M = S.filter(
              (e) =>
                e.bOldAnnouncement &&
                !m.current.has(e.AnnouncementGID) &&
                (!h ||
                  h.clanAccountID == e.announcementClanSteamID.GetAccountID())
            ),
            j = M.length,
            A = !b && j > 0 && (null == h ? void 0 : h.clanSteamID),
            T = () =>
              Object(r.a)(void 0, void 0, void 0, function* () {
                const e = a;
                n(a + 50), s(!0);
                const r = yield o.c.LoadPartnerEventsPageable(void 0, t, e, 50);
                i(l.concat(r)), s(!1);
              });
          Object(d.useEffect)(() => {
            e.bAutoLoad && b && !c && T();
          });
          const w = (e, t) => {
              t ? (g.current += 1) : m.current.add(e);
            },
            L = () =>
              Object(r.a)(void 0, void 0, void 0, function* () {
                s(!0),
                  yield (function (e, t, a, n, l) {
                    return Object(r.a)(this, void 0, void 0, function* () {
                      for (const r of e.slice(0, t)) {
                        console.log(
                          "Migrating",
                          a,
                          r.AnnouncementGID,
                          r.GetNameWithFallback(0),
                          r
                        );
                        try {
                          const e = yield Object(q.a)(r.AnnouncementGID, a, n);
                          if (e) console.warn("Already migrated to event", e);
                          else {
                            const e = o.c.GetEditModel();
                            e.AddTag("auto_migrated"),
                              e.AddTag("hide_library_overview"),
                              e.AddTag("hide_library_detail"),
                              yield o.c.SaveModel(n),
                              console.log("Successfully migrated the event!"),
                              (r.bOldAnnouncement = !1),
                              l(r.AnnouncementGID, !0);
                          }
                        } catch (e) {
                          const t = Object(f.a)(e);
                          console.error(
                            "MigrateEvents: " + t.strErrorMsg.slice(0, 512),
                            t
                          ),
                            l(r.AnnouncementGID, !1);
                        }
                      }
                    });
                  })(M, e.nMigrateBatchSize, t, h.clanSteamID, w),
                  s(!1);
              });
          return (
            Object(d.useEffect)(() => {
              e.bAutoMigrate && A && !c && L();
            }),
            Object(d.useEffect)(() => {
              b || A || c || e.fnOnCompletion(t, g.current);
            }),
            u.a.createElement(
              "div",
              { className: Y.a.ClanRow },
              u.a.createElement("div", { className: Y.a.ID }, t),
              u.a.createElement("a", { className: Y.a.ClanName, href: v }, p),
              u.a.createElement(
                "div",
                { className: Y.a.Counts },
                `Loaded: ${_}\tVisible: ${O}\tOld: ${j}`,
                I > 0 &&
                  u.a.createElement(
                    "span",
                    { className: Y.a.LinkedAnnouncements },
                    `Linked: ${I}`
                  )
              ),
              b
                ? u.a.createElement(
                    "div",
                    { className: Y.a.LoadEventsButton, onClick: T },
                    "LOAD EVENTS"
                  )
                : c
                ? u.a.createElement(E.a, { size: "small" })
                : A
                ? u.a.createElement(
                    "div",
                    { className: Y.a.MigrateEventsButton, onClick: L },
                    "MIGRATE EVENTS"
                  )
                : u.a.createElement(
                    "div",
                    { className: Y.a.CompleteMessage },
                    "NOTHING TO MIGRATE"
                  )
            )
          );
        });
      a("M1X1"), a("Y9L4");
      var K = a("EC67"),
        Q = a("6oCP"),
        X = a("hKFG");
      a("idvb"), a("mRR+");
      function Z(e) {
        const [t, a] = u.a.useState(!0);
        return (
          u.a.useEffect(() => {
            Q.b.Init(), Promise.all([Object(X.a)(null)]).then(() => a(!1));
          }, []),
          t
            ? u.a.createElement(E.a, { position: "center", size: "medium" })
            : u.a.createElement(
                K.e,
                null,
                u.a.createElement(K.c, {
                  path: n.b.MigrateSaleEvents(),
                  component: y,
                }),
                u.a.createElement(K.c, {
                  path: n.b.MigrateEvents(),
                  component: $,
                }),
                u.a.createElement(K.c, { component: J })
              )
        );
      }
      function J(e) {
        return "dev" !== C.c.WEB_UNIVERSE
          ? u.a.createElement(K.b, { push: !0, to: "/" })
          : u.a.createElement("div", null, "Unknown route");
      }
    },
    Tgxo: function (e, t, a) {
      e.exports = {
        MigrateToolCtn: "migratetool_MigrateToolCtn_fGggy",
        ToolHeader: "migratetool_ToolHeader_2cI57",
        StatusMessage: "migratetool_StatusMessage_1YCAU",
        ClanRow: "migratetool_ClanRow_2PbMC",
        ID: "migratetool_ID_1YSGm",
        ClanName: "migratetool_ClanName_2VUhh",
        Counts: "migratetool_Counts_3uIV0",
        LinkedAnnouncements: "migratetool_LinkedAnnouncements_3u41k",
        MigrateEventsButton: "migratetool_MigrateEventsButton_3-jPB",
        CompleteMessage: "migratetool_CompleteMessage_3f-Cw",
        LoadEventsButton: "migratetool_LoadEventsButton_2qtK6",
      };
    },
    a0ud: function (e, t, a) {
      e.exports = {
        SectionContainer: "migratesaletool_SectionContainer_3ZElG",
        SectionTitle: "migratesaletool_SectionTitle_1-ftd",
        RecordCtn: "migratesaletool_RecordCtn_1gW9g",
        RecordInfoCtn: "migratesaletool_RecordInfoCtn_6eQgp",
      };
    },
  },
]);
