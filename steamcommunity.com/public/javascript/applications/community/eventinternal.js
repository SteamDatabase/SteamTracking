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
      a.r(t), a.d(t, { default: () => J });
      var n = a(43527),
        r = a(25918),
        o = a(34629),
        l = a(41735),
        i = a.n(l),
        s = a(14947),
        c = a(75844),
        d = a(90626),
        u = a(37085),
        m = a(17720),
        g = a(6626),
        h = a(68255),
        p = a(9154),
        E = a(738),
        S = a(12155),
        _ = a(22797),
        v = a(56011),
        f = a(61859),
        C = a(68797),
        I = a(78327),
        A = a(22517),
        b = a(88997),
        M = a(67165),
        T = a(60155),
        w = a(84811),
        D = a(64641),
        y = a(41338),
        L = a(82062);
      const N = (e) => {
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
                    const a = await M.pF.SearchCreatorHomeStore(t, r, e);
                    if (e.token.reason) return;
                    l.current = (0, b.lX)(
                      d.createElement(R, { list: a, fnSetCurator: n }),
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
                    const a = (0, C.H)(t);
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
            w.tH,
            null,
            d.createElement(h.pd, {
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
        R = (e) => {
          const { list: t, fnSetCurator: a } = e;
          return d.createElement(
            T.tz,
            { className: L.SearchResults },
            t.map((e) =>
              d.createElement(
                T.kt,
                {
                  key: "curatorresult" + e.GetClanAccountID(),
                  onSelected: () => a(e),
                },
                d.createElement(
                  "div",
                  { style: { display: "flex", alignItems: "center" } },
                  d.createElement(
                    "div",
                    { className: D.GameImageContainer },
                    d.createElement("img", {
                      src: e.GetAvatarURLFullSize(),
                      className: D.AvatarImage,
                    }),
                  ),
                  (0, y.EK)(e.GetName()),
                ),
              ),
            ),
          );
        };
      var G = a(32541);
      const B = (0, c.PA)((e) => {
          const t = (function () {
            const [e, t] = d.useState(!U.Get().BHasLoadCompleted());
            return (
              d.useEffect(() => {
                U.Get().BHasLoadCompleted() ||
                  U.Get()
                    .LoadSalePageMigrationInfo()
                    .finally(() => t(!1));
              }, []),
              e ? void 0 : U.Get().GetMigrationRecords()
            );
          })();
          if (!t)
            return d.createElement(_.t, {
              string: (0, f.we)("#Loading"),
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
            d.createElement(O, {
              strName: "Unmigrated Franchises",
              records: n,
            }),
            d.createElement(O, {
              strName: "Unmigrated Generic Sale PAges",
              records: r,
              bHideByDefault: !0,
            }),
            d.createElement(O, { strName: "Migrated but Hidden", records: o }),
            d.createElement(O, {
              strName: "Migrated and Visible",
              records: l,
              bHideByDefault: !0,
            }),
          );
        }),
        O = (e) => {
          const { strName: t, records: a, bHideByDefault: n } = e,
            [r, o] = (0, d.useState)(n);
          return d.createElement(
            "div",
            { className: A.SectionContainer },
            d.createElement(
              "h2",
              { className: A.SectionTitle, onDoubleClick: () => o(!r) },
              t,
              " (",
              a.length,
              ")",
              d.createElement("span", null, " "),
              d.createElement(
                h.$n,
                { onClick: () => o(!r) },
                r ? d.createElement(S.hz4, null) : d.createElement(S.Xjb, null),
              ),
            ),
            d.createElement("hr", null),
            Boolean(r)
              ? d.createElement(
                  h.$n,
                  { onClick: () => o(!1) },
                  (0, f.we)("#Sale_ShowContents"),
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
            a = (0, g.m1)(t.clan_account_id);
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(
              "div",
              { className: A.RecordCtn },
              d.createElement(
                "div",
                { className: A.RecordInfoCtn },
                d.createElement(
                  "div",
                  null,
                  d.createElement(
                    "a",
                    { href: I.TS.STORE_BASE_URL + "sale/" + t.vanity },
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
                          I.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          m.b
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
                  h.$n,
                  {
                    onClick: (e) =>
                      (0, E.pg)(
                        d.createElement(P, { record: t }),
                        (0, v.uX)(e),
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
            [c, u] = (0, d.useState)(!1),
            [g, h] = (0, d.useState)(t.gid_clan_event),
            [E, S] = (0, d.useState)(null);
          return d.createElement(
            p.o0,
            {
              strTitle: "Migrate Sale page",
              strDescription: `Will migrate the sale page ${t.vanity} to the below clan `,
              bOKDisabled: !n || o,
              onOK: () => {
                l(!0),
                  U.Get()
                    .MigrateOrUpdateSalePage(
                      t.sale_page_id,
                      n,
                      t.gid_clan_event,
                    )
                    .then(([e, t, a]) => {
                      s(e), u(t), h(a);
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
                  d.createElement(N, {
                    bLimitToCreatorHome: !0,
                    strLabel: "Search for Creator Home to house the Sale Event",
                    strToolTip:
                      "Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)",
                    fnSetCurator: (e) => {
                      r(e.GetClanAccountID()), S(e);
                    },
                  }),
                  Boolean(E) && d.createElement(k, { creatorHome: E }),
                ),
            Boolean(o && !i) &&
              d.createElement(_.t, { position: "center", size: "medium" }),
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
                      href: I.TS.STORE_BASE_URL + "sale/" + t.vanity,
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
                        I.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        m.b.InitFromClanID(n).ConvertTo64BitString() +
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
        k = (e) => {
          const { creatorHome: t } = e,
            a = m.b.InitFromClanID(t.GetClanAccountID()),
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
      class U {
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
              I.TS.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
            let c = new URLSearchParams();
            c.append("sessionid", I.TS.SESSIONID),
              c.append("salePageID", e),
              c.append("clanAccountID", "" + t),
              a && c.append("gidClanEvent", a);
            const d = await i().post(l, c, { withCredentials: !0 });
            if (
              200 == (null == d ? void 0 : d.status) &&
              (null === (n = null == d ? void 0 : d.data) || void 0 === n
                ? void 0
                : n.success) == u.d.k_EResultOK &&
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
              const e = (0, C.H)(d);
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
            const t = (0, C.H)(e);
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
                I.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetsalepagestomigrate",
              n = { sessionid: I.TS.SESSIONID },
              r = await i().get(a, { params: n, withCredentials: !0 });
            if (
              ((this.m_bLoadComplete = !0),
              200 == (null == r ? void 0 : r.status) &&
                (null === (e = null == r ? void 0 : r.data) || void 0 === e
                  ? void 0
                  : e.success) == u.d.k_EResultOK &&
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
              const e = (0, C.H)(r);
              console.error(
                "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                  e.strErrorMsg,
                e,
              );
            }
          } catch (e) {
            const t = (0, C.H)(e);
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
            U.s_Singleton ||
              ((U.s_Singleton = new U()),
              ("dev" != I.TS.WEB_UNIVERSE && "beta" != I.TS.WEB_UNIVERSE) ||
                (window.g_MigrateSaleStore = U.s_Singleton)),
            U.s_Singleton
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
      (0, o.Cg)([s.sH], U.prototype, "m_mapSaleIDToInfo", void 0),
        (0, o.Cg)([s.sH], U.prototype, "m_listSaleState", void 0);
      var F = a(22837),
        x = a(4796),
        z = a(60746),
        q = a(95034);
      class Y {
        constructor() {
          (this.m_rgApps = []),
            (this.m_rgClanAccountIDs = []),
            (this.m_nHighestAppOffsetRequested = 0),
            (this.m_nHighestClanOffsetRequested = 0),
            (0, s.Gn)(this);
        }
        static Get() {
          return (
            Y.s_globalSingletonStore ||
              ((Y.s_globalSingletonStore = new Y()),
              Y.s_globalSingletonStore.Init()),
            Y.s_globalSingletonStore
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
              c = I.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
            let d = null;
            try {
              const a = await i().get(c, {
                params: l,
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                (null === (r = null == a ? void 0 : a.data) || void 0 === r
                  ? void 0
                  : r.success) == u.d.k_EResultOK &&
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
              d = (0, C.H)(null == a ? void 0 : a.data);
            } catch (e) {
              d = (0, C.H)(e);
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
            o = I.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
          let l = null;
          try {
            const e = await i().get(o, {
              params: r,
              withCredentials: !0,
              cancelToken: null == a ? void 0 : a.token,
            });
            if (
              (null === (n = null == e ? void 0 : e.data) || void 0 === n
                ? void 0
                : n.success) == u.d.k_EResultOK &&
              e.data.accountids
            )
              return void (this.m_rgClanAccountIDs =
                this.m_rgClanAccountIDs.concat(e.data.accountids.map(Number)));
            l = (0, C.H)(null == e ? void 0 : e.data);
          } catch (e) {
            l = (0, C.H)(e);
          }
          console.error(
            "FetchClans: ajax request failed with error",
            l.strErrorMsg,
          );
        }
      }
      (0, o.Cg)([s.sH.shallow], Y.prototype, "m_rgApps", void 0),
        (0, o.Cg)([s.sH.shallow], Y.prototype, "m_rgClanAccountIDs", void 0);
      var $ = a(6503),
        K = a(80778),
        Q = a.n(K);
      const V = (0, c.PA)((e) => {
          const [t, a] = (0, d.useState)(!0);
          (0, d.useEffect)(() => {
            Promise.all([z.KN.InitGlobal(), r.mh.Init()]).then(() => a(!1));
          }, []);
          const [n, o] = (0, q.QD)("start", 0),
            [l, i] = (0, q.QD)("start_appid", 0),
            [s, c] = (0, q.QD)("count", 10),
            [u, m] = (0, q.QD)("autoload", !0),
            [g, h] = (0, q.QD)("batch_size", 1),
            [p, E] = (0, q.QD)("automigrate", !1),
            [S, v] = (0, d.useState)(!1),
            [f, C] = (0, q.QD)("rolling", 0),
            [I, A] = (0, d.useState)(new Set()),
            b = (0, d.useRef)(0),
            M = Y.Get().GetApps(n, s, l),
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
            { className: Q().MigrateToolCtn },
            d.createElement(
              "div",
              { className: Q().ToolHeader },
              "Partner Events Migration Tools",
            ),
            T.map((e) =>
              d.createElement(j, {
                key: e.id,
                app: e,
                bAutoLoad: u,
                bAutoMigrate: p || S,
                nMigrateBatchSize: g,
                fnOnCompletion: w,
              }),
            ),
            t &&
              d.createElement(_.t, {
                size: "xlarge",
                position: "center",
                string: "initializing",
              }),
            !M.length &&
              d.createElement(_.t, {
                size: "xlarge",
                position: "center",
                string: "loading apps",
              }),
            d.createElement(
              "div",
              {
                className: Q().LoadEventsButton,
                onClick: () => {
                  v(!1), A(new Set()), o(n + s);
                },
              },
              "LOAD NEXT PAGE",
            ),
            !p &&
              d.createElement(
                "div",
                { className: Q().LoadEventsButton, onClick: () => v(!0) },
                "MIGRATE ALL ON PAGE",
              ),
            d.createElement(
              "div",
              { className: Q().StatusMessage },
              I.size +
                " OF " +
                M.length +
                " APPS COMPLETE. #EVENTS: " +
                b.current,
            ),
          );
        }),
        j = (0, c.PA)((e) => {
          const t = Number(e.app.id),
            [a, n] = (0, d.useState)(0),
            [o, l] = (0, d.useState)([]),
            [i, s] = (0, d.useState)(!1),
            c = (0, d.useRef)(new Set()),
            u = (0, d.useRef)(0);
          (0, d.useEffect)(() => {
            x.ac.LoadOGGClanInfoForAppID(t).then((e) => {
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
          const m = x.ac.GetOGGClanInfo(t),
            g = m ? m.group_name : e.app.name,
            h = `${I.TS.COMMUNITY_BASE_URL}games/${m ? m.vanity_url : t}/partnerevents/`,
            p = o.length,
            E = a == p,
            S = o.filter((e) => e.BIsVisibleEvent()),
            v = S.length,
            f = S.filter(
              (e) =>
                e.bOldAnnouncement &&
                m &&
                m.clanAccountID != e.announcementClanSteamID.GetAccountID(),
            ).length,
            A = S.filter(
              (e) =>
                e.bOldAnnouncement &&
                !c.current.has(e.AnnouncementGID) &&
                (!m ||
                  m.clanAccountID == e.announcementClanSteamID.GetAccountID()),
            ),
            b = A.length,
            M = !E && b > 0 && (null == m ? void 0 : m.clanSteamID),
            T = async () => {
              const e = a;
              n(a + 50), s(!0);
              const i = await r.mh.LoadPartnerEventsPageable(void 0, t, e, 50);
              l(o.concat(i)), s(!1);
            };
          (0, d.useEffect)(() => {
            e.bAutoLoad && E && !i && T();
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
                      l.GetNameWithFallback(F.gS.k_Lang_English),
                      l,
                    );
                    try {
                      const e = await (0, $.e6)(l.AnnouncementGID, a, n);
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
                      const t = (0, C.H)(e);
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
              E || M || i || e.fnOnCompletion(t, u.current);
            }),
            d.createElement(
              "div",
              { className: Q().ClanRow },
              d.createElement("div", { className: Q().ID }, t),
              d.createElement("a", { className: Q().ClanName, href: h }, g),
              d.createElement(
                "div",
                { className: Q().Counts },
                `Loaded: ${p}\tVisible: ${v}\tOld: ${b}`,
                f > 0 &&
                  d.createElement(
                    "span",
                    { className: Q().LinkedAnnouncements },
                    `Linked: ${f}`,
                  ),
              ),
              E
                ? d.createElement(
                    "div",
                    { className: Q().LoadEventsButton, onClick: T },
                    "LOAD EVENTS",
                  )
                : i
                  ? d.createElement(_.t, { size: "small" })
                  : M
                    ? d.createElement(
                        "div",
                        { className: Q().MigrateEventsButton, onClick: D },
                        "MIGRATE EVENTS",
                      )
                    : d.createElement(
                        "div",
                        { className: Q().CompleteMessage },
                        "NOTHING TO MIGRATE",
                      ),
            )
          );
        });
      var W = a(92757),
        X = a(91254),
        Z = (a(5977), a(97058));
      function J(e) {
        const [t, a] = d.useState(!0);
        return (
          d.useEffect(() => {
            X.O3.Init(), Promise.all([]).then(() => a(!1));
          }, []),
          t
            ? d.createElement(_.t, { position: "center", size: "medium" })
            : d.createElement(
                W.dO,
                null,
                d.createElement(W.qh, {
                  path: n.mQ.MigrateSaleEvents(),
                  component: B,
                }),
                d.createElement(W.qh, {
                  path: n.mQ.MigrateEvents(),
                  component: V,
                }),
                d.createElement(W.qh, { component: Z.a }),
              )
        );
      }
    },
  },
]);
