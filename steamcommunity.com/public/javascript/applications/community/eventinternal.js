/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [258],
  {
    22517: (e) => {
      e.exports = {
        SectionContainer: "_3ZElG443QUegFs_bnylS3a",
        SectionTitle: "_1-ftdQuCgy6Eu3lmIy7GzJ",
        RecordCtn: "_1gW9gaaia6sAUsiG510BdF",
        RecordInfoCtn: "_6eQgp5l-li4-ItHochfRq",
      };
    },
    80778: (e) => {
      e.exports = {
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
    82062: (e) => {
      e.exports = { SearchResults: "_1roMuz15pxKZcGYgASP5xg" };
    },
    98378: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => X });
      var n = a(43527),
        r = a(25918),
        o = a(34629),
        l = a(41735),
        i = a.n(l),
        s = a(14947),
        c = a(75844),
        d = a(90626),
        u = a(17720),
        m = a(6626),
        g = a(68255),
        h = a(9154),
        p = a(738),
        S = a(12155),
        E = a(22797),
        _ = a(56011),
        v = a(61859),
        f = a(68797),
        C = a(78327),
        I = a(22517),
        A = a(88997),
        b = a(8092),
        M = a(60155),
        T = a(84811),
        w = a(64641),
        D = a(41338),
        y = a(82062);
      const L = (e) => {
          const {
              strLabel: t,
              strToolTip: a,
              fnSetCurator: n,
              bLimitToCreatorHome: r,
            } = e,
            o = (0, d.useRef)(null),
            l = (0, d.useRef)(null),
            s = (0, d.useRef)(0),
            c = (0, d.useRef)(void 0);
          (0, d.useEffect)(
            () => () => {
              window.clearTimeout(s.current),
                o.current && o.current("SearchForCurator: unmounting"),
                l.current && l.current.Hide();
            },
            [],
          );
          const u = (0, d.useCallback)(
            async (e) => {
              const t = e.target.value;
              t &&
                0 != t.trim().length &&
                (window.clearTimeout(s.current),
                o.current && o.current("SearchForCurator: new request"),
                (s.current = window.setTimeout(async () => {
                  const e = i().CancelToken.source();
                  o.current = e.cancel;
                  try {
                    const a = await b.pF.SearchCreatorHomeStore(t, r, e);
                    if (e.token.reason) return;
                    l.current = (0, A.lX)(
                      d.createElement(N, { list: a, fnSetCurator: n }),
                      c.current.element,
                      {
                        bOverlapHorizontal: !0,
                        bMatchWidth: !0,
                        bFitToWindow: !0,
                        bDisablePopTop: !0,
                        bNoFocusWhenShown: !0,
                        bSkipFocusWhenReady: !0,
                      },
                    );
                  } catch (t) {
                    if (e.token.reason) return;
                    const a = (0, f.H)(t);
                    console.log(
                      "SearchForCurator.SearchCreatorHomeStore error " +
                        a.strErrorMsg,
                      a,
                    );
                  }
                }, 300)));
            },
            [n, r],
          );
          return d.createElement(
            T.tH,
            null,
            d.createElement(g.pd, {
              type: "text",
              label: t,
              onChange: u,
              onBlur: (e) =>
                setTimeout(() => l.current && l.current.Hide(), 200),
              ref: c,
              tooltip: a,
            }),
          );
        },
        N = (e) => {
          const { list: t, fnSetCurator: a } = e;
          return d.createElement(
            M.tz,
            { className: y.SearchResults },
            t.map((e) =>
              d.createElement(
                M.kt,
                {
                  key: "curatorresult" + e.GetClanAccountID(),
                  onSelected: () => a(e),
                },
                d.createElement(
                  "div",
                  { style: { display: "flex", alignItems: "center" } },
                  d.createElement(
                    "div",
                    { className: w.GameImageContainer },
                    d.createElement("img", {
                      src: e.GetAvatarURLFullSize(),
                      className: w.AvatarImage,
                    }),
                  ),
                  (0, D.EK)(e.GetName()),
                ),
              ),
            ),
          );
        };
      var G = a(32541);
      const B = (0, c.PA)((e) => {
          const t = (function () {
            const [e, t] = d.useState(!k.Get().BHasLoadCompleted());
            return (
              d.useEffect(() => {
                k.Get().BHasLoadCompleted() ||
                  k
                    .Get()
                    .LoadSalePageMigrationInfo()
                    .finally(() => t(!1));
              }, []),
              e ? void 0 : k.Get().GetMigrationRecords()
            );
          })();
          if (!t)
            return d.createElement(E.t, {
              string: (0, v.we)("#Loading"),
              position: "center",
              size: "medium",
            });
          const a = t.filter((e) => !e.gid_clan_event),
            n = a.filter(
              (e) =>
                e.display_name.toLocaleLowerCase().indexOf("franchise") >= 0,
            ),
            r = a.filter(
              (e) =>
                e.display_name.toLocaleLowerCase().indexOf("franchise") < 0,
            ),
            o = t.filter((e) => Boolean(e.gid_clan_event && e.hidden)),
            l = t.filter((e) => Boolean(e.gid_clan_event && !e.hidden));
          return d.createElement(
            "div",
            null,
            d.createElement("h1", null, "Migration Sale Tool:"),
            d.createElement(
              "p",
              null,
              "For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account.",
            ),
            d.createElement(R, {
              strName: "Unmigrated Franchises",
              records: n,
            }),
            d.createElement(R, {
              strName: "Unmigrated Generic Sale PAges",
              records: r,
              bHideByDefault: !0,
            }),
            d.createElement(R, { strName: "Migrated but Hidden", records: o }),
            d.createElement(R, {
              strName: "Migrated and Visible",
              records: l,
              bHideByDefault: !0,
            }),
          );
        }),
        R = (e) => {
          const { strName: t, records: a, bHideByDefault: n } = e,
            [r, o] = (0, d.useState)(n);
          return d.createElement(
            "div",
            { className: I.SectionContainer },
            d.createElement(
              "h2",
              { className: I.SectionTitle, onDoubleClick: () => o(!r) },
              t,
              " (",
              a.length,
              ")",
              d.createElement("span", null, " "),
              d.createElement(
                g.$n,
                { onClick: () => o(!r) },
                r ? d.createElement(S.hz4, null) : d.createElement(S.Xjb, null),
              ),
            ),
            d.createElement("hr", null),
            Boolean(r)
              ? d.createElement(
                  g.$n,
                  { onClick: () => o(!1) },
                  (0, v.we)("#Sale_ShowContents"),
                )
              : d.createElement(
                  d.Fragment,
                  null,
                  a.map((e) =>
                    d.createElement(H, { key: e.sale_page_id, record: e }),
                  ),
                ),
          );
        },
        H = (0, c.PA)((e) => {
          const { record: t } = e,
            a = (0, m.m1)(t.clan_account_id);
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(
              "div",
              { className: I.RecordCtn },
              d.createElement(
                "div",
                { className: I.RecordInfoCtn },
                d.createElement(
                  "div",
                  null,
                  d.createElement(
                    "a",
                    { href: C.TS.STORE_BASE_URL + "sale/" + t.vanity },
                    d.createElement(
                      "b",
                      null,
                      `${t.display_name} - (${t.vanity})`,
                    ),
                  ),
                ),
                Boolean(a) &&
                  d.createElement(
                    "div",
                    null,
                    d.createElement(
                      "a",
                      { href: a.vanity_url },
                      "Sale Page part of ",
                      a.group_name,
                    ),
                  ),
                Boolean(t.gid_clan_event) &&
                  d.createElement(
                    "div",
                    null,
                    d.createElement(
                      "a",
                      {
                        href:
                          C.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          u.b
                            .InitFromClanID(t.clan_account_id)
                            .ConvertTo64BitString() +
                          "/partnerevents/edit/" +
                          t.gid_clan_event,
                      },
                      `Migrated: Event Editor Links: State hidden: ${t.hidden} published: ${t.published} sale/ vanity?: ${t.valve_approved_sale_vanity_id}`,
                    ),
                  ),
              ),
              Boolean(!t.gid_clan_event || (t.hidden && !t.published)) &&
                d.createElement(
                  g.$n,
                  {
                    onClick: (e) =>
                      (0, p.pg)(
                        d.createElement(P, { record: t }),
                        (0, _.uX)(e),
                      ),
                  },
                  "Migrate Sale Page",
                ),
            ),
            d.createElement("hr", null),
          );
        }),
        P = (e) => {
          const { record: t, closeModal: a } = e,
            [n, r] = (0, d.useState)(t.clan_account_id),
            [o, l] = (0, d.useState)(!1),
            [i, s] = (0, d.useState)(void 0),
            [c, m] = (0, d.useState)(!1),
            [g, p] = (0, d.useState)(t.gid_clan_event),
            [S, _] = (0, d.useState)(null);
          return d.createElement(
            h.o0,
            {
              strTitle: "Migrate Sale page",
              strDescription: `Will migrate the sale page ${t.vanity} to the below clan `,
              bOKDisabled: !n || o,
              onOK: () => {
                l(!0),
                  k
                    .Get()
                    .MigrateOrUpdateSalePage(
                      t.sale_page_id,
                      n,
                      t.gid_clan_event,
                    )
                    .then(([e, t, a]) => {
                      s(e), m(t), p(a);
                    });
              },
              onCancel: a,
            },
            Boolean(t.clan_account_id)
              ? d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(
                    "div",
                    null,
                    "Sale page already migrated. This will update the hidden page with latest migration code",
                  ),
                  d.createElement("div", null, "ClanID = ", t.clan_account_id),
                  d.createElement("div", null, "GID = ", t.gid_clan_event),
                )
              : d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(L, {
                    bLimitToCreatorHome: !0,
                    strLabel: "Search for Creator Home to house the Sale Event",
                    strToolTip:
                      "Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)",
                    fnSetCurator: (e) => {
                      r(e.GetClanAccountID()), _(e);
                    },
                  }),
                  Boolean(S) && d.createElement(O, { creatorHome: S }),
                ),
            Boolean(o && !i) &&
              d.createElement(E.t, { position: "center", size: "medium" }),
            Boolean(i) && d.createElement("div", null, i),
            Boolean(c) &&
              d.createElement(
                "div",
                null,
                d.createElement(
                  "div",
                  null,
                  d.createElement(
                    "a",
                    {
                      href: C.TS.STORE_BASE_URL + "sale/" + t.vanity,
                      target: "_blank",
                    },
                    "Sale Page",
                  ),
                ),
                d.createElement(
                  "div",
                  null,
                  d.createElement(
                    "a",
                    {
                      href:
                        C.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        u.b.InitFromClanID(n).ConvertTo64BitString() +
                        "/partnerevents/edit/" +
                        g,
                      target: "_blank",
                    },
                    "New Sale Page Editor",
                  ),
                ),
              ),
          );
        },
        O = (e) => {
          const { creatorHome: t } = e,
            a = u.b.InitFromClanID(t.GetClanAccountID()),
            n = t.GetClanAccountID();
          return t
            ? d.createElement(
                "div",
                null,
                d.createElement(
                  "div",
                  null,
                  "ClanID = ",
                  n,
                  " - SteamID ",
                  a.ConvertTo64BitString(),
                ),
                d.createElement(
                  "div",
                  null,
                  d.createElement(
                    "a",
                    {
                      href:
                        "https://steamsupport.valvesoftware.com/clan/overview/" +
                        a.ConvertTo64BitString(),
                    },
                    "Group Support Page",
                  ),
                ),
                Boolean(!t.BIsPartnerEventEditorEnabled()) &&
                  d.createElement(
                    "div",
                    null,
                    "To use this Creator Home for the sale page migration, the process will need to enable partner event editing on the clan. This both updates the creator home but also puts a small limitation upon it.",
                    d.createElement(
                      "a",
                      {
                        href: "https://confluence.valve.org/display/STEAM/Creator+home+and+Partner+Events+Beta",
                        target: "_blank",
                      },
                      "Read more about the state here.",
                    ),
                  ),
                d.createElement(G.hA, {
                  creatorID: t.GetCreatorHomeIdentifier(),
                  bHideCreatorType: !0,
                }),
              )
            : null;
        };
      class k {
        BHasLoadCompleted() {
          return this.m_bLoadComplete;
        }
        GetMigrationRecords() {
          return this.m_listSaleState;
        }
        async MigrateOrUpdateSalePage(e, t, a) {
          var n, r;
          const o = this.m_mapSaleIDToInfo.get(e);
          if (!o)
            return [
              "Record not found to begin the migration processing, cannot take action.: " +
                e,
              !1,
              void 0,
            ];
          if (o.gid_clan_event && (!o.hidden || o.published))
            return [
              "Sale event is already public, cannot take action.: " + e,
              !1,
              void 0,
            ];
          try {
            const l =
              C.TS.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
            let c = new URLSearchParams();
            c.append("sessionid", C.TS.SESSIONID),
              c.append("salePageID", e),
              c.append("clanAccountID", "" + t),
              a && c.append("gidClanEvent", a);
            const d = await i().post(l, c, { withCredentials: !0 });
            if (
              200 == (null == d ? void 0 : d.status) &&
              1 ==
                (null === (n = null == d ? void 0 : d.data) || void 0 === n
                  ? void 0
                  : n.success) &&
              (null === (r = null == d ? void 0 : d.data) || void 0 === r
                ? void 0
                : r.gidClanEvent)
            )
              return (
                (0, s.h5)(() => {
                  o.gid_clan_event ||
                    ((o.gid_clan_event = d.data.gidClanEvent),
                    (o.clan_account_id = t),
                    (o.hidden = !0),
                    (o.published = !1),
                    (o.valve_approved_sale_vanity_id = !0));
                }),
                [d.data.msg || "Success", !0, d.data.gidClanEvent]
              );
            {
              const e = (0, f.H)(d);
              return (
                console.error(
                  "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                    e.strErrorMsg,
                  e,
                ),
                [d.data.msg || "Failed", !1, void 0]
              );
            }
          } catch (e) {
            const t = (0, f.H)(e);
            console.error(
              "CMigrateSaleStore.MigrateOrUpdateSalePage: caught error with " +
                t.strErrorMsg,
              t,
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
          var e, t;
          try {
            const a =
                C.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetsalepagestomigrate",
              n = { sessionid: C.TS.SESSIONID },
              r = await i().get(a, { params: n, withCredentials: !0 });
            if (
              ((this.m_bLoadComplete = !0),
              200 == (null == r ? void 0 : r.status) &&
                1 ==
                  (null === (e = null == r ? void 0 : r.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                (null === (t = null == r ? void 0 : r.data) || void 0 === t
                  ? void 0
                  : t.data))
            )
              return (
                (0, s.h5)(() => {
                  r.data.data.forEach((e) => {
                    this.m_mapSaleIDToInfo.set(e.sale_page_id, e),
                      this.m_listSaleState.push(
                        this.m_mapSaleIDToInfo.get(e.sale_page_id),
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
              const e = (0, f.H)(r);
              console.error(
                "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                  e.strErrorMsg,
                e,
              );
            }
          } catch (e) {
            const t = (0, f.H)(e);
            console.error(
              "CMigrateSaleStore.LoadSalePageMigrationInfo: caught error with " +
                t.strErrorMsg,
              t,
            );
          }
          return [];
        }
        static Get() {
          return (
            k.s_Singleton ||
              ((k.s_Singleton = new k()),
              ("dev" != C.TS.WEB_UNIVERSE && "beta" != C.TS.WEB_UNIVERSE) ||
                (window.g_MigrateSaleStore = k.s_Singleton)),
            k.s_Singleton
          );
        }
        constructor() {
          (this.m_mapSaleIDToInfo = new Map()),
            (this.m_listSaleState = new Array()),
            (this.m_stateLoadPromise = null),
            (this.m_bLoadComplete = !1),
            (0, s.Gn)(this);
        }
      }
      (0, o.Cg)([s.sH], k.prototype, "m_mapSaleIDToInfo", void 0),
        (0, o.Cg)([s.sH], k.prototype, "m_listSaleState", void 0);
      var U = a(4796),
        F = a(60746),
        x = a(95034);
      class z {
        constructor() {
          (this.m_rgApps = []),
            (this.m_rgClanAccountIDs = []),
            (this.m_nHighestAppOffsetRequested = 0),
            (this.m_nHighestClanOffsetRequested = 0),
            (0, s.Gn)(this);
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
            r = e + t - n;
          return (
            r > 0 && (this.m_mostRecentRequest = this.FetchApps(n, r, a)),
            this.m_rgApps.slice(e, e + t)
          );
        }
        async FetchApps(e, t, a, n) {
          var r;
          if (this.m_startAppID && this.m_startAppID != a)
            throw new Error(
              "Cannot switch starting AppID from " +
                this.m_startAppID +
                " to " +
                a,
            );
          this.m_startAppID = a;
          let o = Math.max(t, 20);
          for (
            this.m_nHighestAppOffsetRequested = e + o,
              await this.m_mostRecentRequest;
            o > 0;
          ) {
            const t = Math.min(o, 100),
              l = { offset: e, nBatchSize: t, start_appid: a },
              c = C.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
            let d = null;
            try {
              const a = await i().get(c, {
                params: l,
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                1 ==
                  (null === (r = null == a ? void 0 : a.data) || void 0 === r
                    ? void 0
                    : r.success) &&
                a.data.apps
              ) {
                (0, s.h5)(() => {
                  if (e > this.m_rgApps.length)
                    for (let t = this.m_rgApps.length; t < e; t++)
                      this.m_rgApps[t] = null;
                  for (let n = 0; n < t; n++)
                    this.m_rgApps[e + n] = a.data.apps[n];
                }),
                  (e += t),
                  (o -= t);
                continue;
              }
              d = (0, f.H)(null == a ? void 0 : a.data);
            } catch (e) {
              d = (0, f.H)(e);
            }
            throw new Error(
              "ajax request failed with error " +
                d.errorCode +
                ':"' +
                d.strErrorMsg +
                '"',
            );
          }
        }
        GetClanAccountIDs(e, t) {
          const a = this.m_nHighestClanOffsetRequested,
            n = e + t - a;
          return (
            n > 0 && this.FetchClans(a, n),
            this.m_rgClanAccountIDs.slice(e, e + t)
          );
        }
        async FetchClans(e, t, a) {
          var n;
          this.m_nHighestClanOffsetRequested = e + t;
          const r = { offset: e, count: t },
            o = C.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
          let l = null;
          try {
            const e = await i().get(o, {
              params: r,
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
                this.m_rgClanAccountIDs.concat(e.data.accountids.map(Number)));
            l = (0, f.H)(null == e ? void 0 : e.data);
          } catch (e) {
            l = (0, f.H)(e);
          }
          console.error(
            "FetchClans: ajax request failed with error",
            l.strErrorMsg,
          );
        }
      }
      (0, o.Cg)([s.sH.shallow], z.prototype, "m_rgApps", void 0),
        (0, o.Cg)([s.sH.shallow], z.prototype, "m_rgClanAccountIDs", void 0);
      var q = a(6503),
        Y = a(80778),
        $ = a.n(Y);
      const Q = (0, c.PA)((e) => {
          const [t, a] = (0, d.useState)(!0);
          (0, d.useEffect)(() => {
            Promise.all([F.KN.InitGlobal(), r.mh.Init()]).then(() => a(!1));
          }, []);
          const [n, o] = (0, x.QD)("start", 0),
            [l, i] = (0, x.QD)("start_appid", 0),
            [s, c] = (0, x.QD)("count", 10),
            [u, m] = (0, x.QD)("autoload", !0),
            [g, h] = (0, x.QD)("batch_size", 1),
            [p, S] = (0, x.QD)("automigrate", !1),
            [_, v] = (0, d.useState)(!1),
            [f, C] = (0, x.QD)("rolling", 0),
            [I, A] = (0, d.useState)(new Set()),
            b = (0, d.useRef)(0),
            M = z.Get().GetApps(n, s, l),
            T = 0 == f ? M : M.filter((e) => !I.has(Number(e.id))).slice(0, f),
            w = (e, t) => {
              I.has(e) ||
                (console.log("completed: ", e, t),
                I.add(e),
                (b.current += t),
                A(new Set(I)));
            };
          return d.createElement(
            "div",
            { className: $().MigrateToolCtn },
            d.createElement(
              "div",
              { className: $().ToolHeader },
              "Partner Events Migration Tools",
            ),
            T.map((e) =>
              d.createElement(V, {
                key: e.id,
                app: e,
                bAutoLoad: u,
                bAutoMigrate: p || _,
                nMigrateBatchSize: g,
                fnOnCompletion: w,
              }),
            ),
            t &&
              d.createElement(E.t, {
                size: "xlarge",
                position: "center",
                string: "initializing",
              }),
            !M.length &&
              d.createElement(E.t, {
                size: "xlarge",
                position: "center",
                string: "loading apps",
              }),
            d.createElement(
              "div",
              {
                className: $().LoadEventsButton,
                onClick: () => {
                  v(!1), A(new Set()), o(n + s);
                },
              },
              "LOAD NEXT PAGE",
            ),
            !p &&
              d.createElement(
                "div",
                { className: $().LoadEventsButton, onClick: () => v(!0) },
                "MIGRATE ALL ON PAGE",
              ),
            d.createElement(
              "div",
              { className: $().StatusMessage },
              I.size +
                " OF " +
                M.length +
                " APPS COMPLETE. #EVENTS: " +
                b.current,
            ),
          );
        }),
        V = (0, c.PA)((e) => {
          const t = Number(e.app.id),
            [a, n] = (0, d.useState)(0),
            [o, l] = (0, d.useState)([]),
            [i, s] = (0, d.useState)(!1),
            c = (0, d.useRef)(new Set()),
            u = (0, d.useRef)(0);
          (0, d.useEffect)(() => {
            U.ac.LoadOGGClanInfoForAppID(t).then((e) => {
              var a;
              return console.log(
                "Loaded app",
                t,
                null == e ? void 0 : e.group_name,
                null === (a = null == e ? void 0 : e.clanSteamID) ||
                  void 0 === a
                  ? void 0
                  : a.ConvertTo64BitString(),
              );
            });
          }, [t]);
          const m = U.ac.GetOGGClanInfo(t),
            g = m ? m.group_name : e.app.name,
            h = `${C.TS.COMMUNITY_BASE_URL}games/${m ? m.vanity_url : t}/partnerevents/`,
            p = o.length,
            S = a == p,
            _ = o.filter((e) => e.BIsVisibleEvent()),
            v = _.length,
            I = _.filter(
              (e) =>
                e.bOldAnnouncement &&
                m &&
                m.clanAccountID != e.announcementClanSteamID.GetAccountID(),
            ).length,
            A = _.filter(
              (e) =>
                e.bOldAnnouncement &&
                !c.current.has(e.AnnouncementGID) &&
                (!m ||
                  m.clanAccountID == e.announcementClanSteamID.GetAccountID()),
            ),
            b = A.length,
            M = !S && b > 0 && (null == m ? void 0 : m.clanSteamID),
            T = async () => {
              const e = a;
              n(a + 50), s(!0);
              const i = await r.mh.LoadPartnerEventsPageable(void 0, t, e, 50);
              l(o.concat(i)), s(!1);
            };
          (0, d.useEffect)(() => {
            e.bAutoLoad && S && !i && T();
          });
          const w = (e, t) => {
              t ? (u.current += 1) : c.current.add(e);
            },
            D = async () => {
              s(!0),
                await (async function (e, t, a, n, o) {
                  for (const l of e.slice(0, t)) {
                    console.log(
                      "Migrating",
                      a,
                      l.AnnouncementGID,
                      l.GetNameWithFallback(0),
                      l,
                    );
                    try {
                      const e = await (0, q.e6)(l.AnnouncementGID, a, n);
                      if (e) console.warn("Already migrated to event", e);
                      else {
                        const e = r.mh.GetEditModel();
                        e.AddTag("auto_migrated"),
                          e.AddTag("hide_library_overview"),
                          e.AddTag("hide_library_detail"),
                          await r.mh.SaveModel(n),
                          console.log("Successfully migrated the event!"),
                          (l.bOldAnnouncement = !1),
                          o(l.AnnouncementGID, !0);
                      }
                    } catch (e) {
                      const t = (0, f.H)(e);
                      console.error(
                        "MigrateEvents: " + t.strErrorMsg.slice(0, 512),
                        t,
                      ),
                        o(l.AnnouncementGID, !1);
                    }
                  }
                })(A, e.nMigrateBatchSize, t, m.clanSteamID, w),
                s(!1);
            };
          return (
            (0, d.useEffect)(() => {
              e.bAutoMigrate && M && !i && D();
            }),
            (0, d.useEffect)(() => {
              S || M || i || e.fnOnCompletion(t, u.current);
            }),
            d.createElement(
              "div",
              { className: $().ClanRow },
              d.createElement("div", { className: $().ID }, t),
              d.createElement("a", { className: $().ClanName, href: h }, g),
              d.createElement(
                "div",
                { className: $().Counts },
                `Loaded: ${p}\tVisible: ${v}\tOld: ${b}`,
                I > 0 &&
                  d.createElement(
                    "span",
                    { className: $().LinkedAnnouncements },
                    `Linked: ${I}`,
                  ),
              ),
              S
                ? d.createElement(
                    "div",
                    { className: $().LoadEventsButton, onClick: T },
                    "LOAD EVENTS",
                  )
                : i
                  ? d.createElement(E.t, { size: "small" })
                  : M
                    ? d.createElement(
                        "div",
                        { className: $().MigrateEventsButton, onClick: D },
                        "MIGRATE EVENTS",
                      )
                    : d.createElement(
                        "div",
                        { className: $().CompleteMessage },
                        "NOTHING TO MIGRATE",
                      ),
            )
          );
        });
      var j = a(92757),
        W = a(91254),
        K = (a(5977), a(97058));
      function X(e) {
        const [t, a] = d.useState(!0);
        return (
          d.useEffect(() => {
            W.O3.Init(), Promise.all([]).then(() => a(!1));
          }, []),
          t
            ? d.createElement(E.t, { position: "center", size: "medium" })
            : d.createElement(
                j.dO,
                null,
                d.createElement(j.qh, {
                  path: n.mQ.MigrateSaleEvents(),
                  component: B,
                }),
                d.createElement(j.qh, {
                  path: n.mQ.MigrateEvents(),
                  component: Q,
                }),
                d.createElement(j.qh, { component: K.a }),
              )
        );
      }
    },
  },
]);
