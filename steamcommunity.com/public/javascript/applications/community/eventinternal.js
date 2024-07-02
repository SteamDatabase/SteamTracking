/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3352],
  {
    65534: (e) => {
      e.exports = { SearchResults: "_3ao90VJXRm_s7dNasLNd3I" };
    },
    19758: (e) => {
      e.exports = {
        SectionContainer: "_3ZElG443QUegFs_bnylS3a",
        SectionTitle: "_1-ftdQuCgy6Eu3lmIy7GzJ",
        RecordCtn: "_1gW9gaaia6sAUsiG510BdF",
        RecordInfoCtn: "_6eQgp5l-li4-ItHochfRq",
      };
    },
    46452: (e) => {
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
    18312: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => X });
      var n = a(760),
        r = a(74257),
        l = a(85556),
        o = a(80751),
        i = a.n(o),
        s = a(54842),
        c = a(27605),
        d = a(47427),
        u = a(35427),
        m = a(78910),
        g = a(1485),
        h = a(50898),
        p = a(90069),
        E = a(62613),
        _ = a(46882),
        v = a(50423),
        S = a(31846),
        f = a(16649),
        C = a(37563),
        I = a(19758),
        A = a(95315),
        M = a(58670),
        b = a(22042),
        w = a(10162),
        D = a(7765),
        L = a(45284),
        T = a(65534);
      const y = (e) => {
          const {
              strLabel: t,
              strToolTip: a,
              fnSetCurator: n,
              bLimitToCreatorHome: r,
            } = e,
            l = (0, d.useRef)(null),
            o = (0, d.useRef)(null),
            s = (0, d.useRef)(0),
            c = (0, d.useRef)();
          (0, d.useEffect)(
            () => () => {
              window.clearTimeout(s.current),
                l.current && l.current("SearchForCurator: unmounting"),
                o.current && o.current.Hide();
            },
            [],
          );
          const u = (0, d.useCallback)(
            async (e) => {
              const t = e.target.value;
              t &&
                0 != t.trim().length &&
                (window.clearTimeout(s.current),
                l.current && l.current("SearchForCurator: new request"),
                (s.current = window.setTimeout(async () => {
                  const e = i().CancelToken.source();
                  l.current = e.cancel;
                  try {
                    const a = await M.bq.SearchCreatorHomeStore(t, r, e);
                    if (e.token.reason) return;
                    o.current = (0, A.yV)(
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
                    const a = (0, f.l)(t);
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
            w.SV,
            null,
            d.createElement(g.II, {
              type: "text",
              label: t,
              onChange: u,
              onBlur: (e) =>
                setTimeout(() => o.current && o.current.Hide(), 200),
              ref: c,
              tooltip: a,
            }),
          );
        },
        N = (e) => {
          const { list: t, fnSetCurator: a } = e;
          return d.createElement(
            b.xV,
            { className: T.SearchResults },
            t.map((e) =>
              d.createElement(
                b.Zo,
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
                  (0, L.HA)(e.GetName()),
                ),
              ),
            ),
          );
        };
      var R = a(43389);
      const B = (0, c.Pi)((e) => {
          const t = (function () {
            const [e, t] = d.useState(!H.Get().BHasLoadCompleted());
            return (
              d.useEffect(() => {
                H.Get().BHasLoadCompleted() ||
                  H.Get()
                    .LoadSalePageMigrationInfo()
                    .finally(() => t(!1));
              }, []),
              e ? void 0 : H.Get().GetMigrationRecords()
            );
          })();
          if (!t)
            return d.createElement(_.V, {
              string: (0, S.Xx)("#Loading"),
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
            l = t.filter((e) => Boolean(e.gid_clan_event && e.hidden)),
            o = t.filter((e) => Boolean(e.gid_clan_event && !e.hidden));
          return d.createElement(
            "div",
            null,
            d.createElement("h1", null, "Migration Sale Tool:"),
            d.createElement(
              "p",
              null,
              "For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account.",
            ),
            d.createElement(G, {
              strName: "Unmigrated Franchises",
              records: n,
            }),
            d.createElement(G, {
              strName: "Unmigrated Generic Sale PAges",
              records: r,
              bHideByDefault: !0,
            }),
            d.createElement(G, { strName: "Migrated but Hidden", records: l }),
            d.createElement(G, {
              strName: "Migrated and Visible",
              records: o,
              bHideByDefault: !0,
            }),
          );
        }),
        G = (e) => {
          const { strName: t, records: a, bHideByDefault: n } = e,
            [r, l] = (0, d.useState)(n);
          return d.createElement(
            "div",
            { className: I.SectionContainer },
            d.createElement(
              "h2",
              { className: I.SectionTitle, onDoubleClick: () => l(!r) },
              t,
              " (",
              a.length,
              ")",
              d.createElement("span", null, " "),
              d.createElement(
                g.zx,
                { onClick: () => l(!r) },
                r ? d.createElement(E.YqJ, null) : d.createElement(E.gR, null),
              ),
            ),
            d.createElement("hr", null),
            Boolean(r)
              ? d.createElement(
                  g.zx,
                  { onClick: () => l(!1) },
                  (0, S.Xx)("#Sale_ShowContents"),
                )
              : d.createElement(
                  d.Fragment,
                  null,
                  a.map((e) =>
                    d.createElement(O, { key: e.sale_page_id, record: e }),
                  ),
                ),
          );
        },
        O = (0, c.Pi)((e) => {
          const { record: t } = e,
            a = (0, m.P4)(t.clan_account_id);
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
                    { href: C.De.STORE_BASE_URL + "sale/" + t.vanity },
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
                          C.De.COMMUNITY_BASE_URL +
                          "gid/" +
                          u.K.InitFromClanID(
                            t.clan_account_id,
                          ).ConvertTo64BitString() +
                          "/partnerevents/edit/" +
                          t.gid_clan_event,
                      },
                      `Migrated: Event Editor Links: State hidden: ${t.hidden} published: ${t.published} sale/ vanity?: ${t.valve_approved_sale_vanity_id}`,
                    ),
                  ),
              ),
              Boolean(!t.gid_clan_event || (t.hidden && !t.published)) &&
                d.createElement(
                  g.zx,
                  {
                    onClick: (e) =>
                      (0, p.AM)(
                        d.createElement(P, { record: t }),
                        (0, v.RA)(e),
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
            [l, o] = (0, d.useState)(!1),
            [i, s] = (0, d.useState)(void 0),
            [c, m] = (0, d.useState)(!1),
            [g, p] = (0, d.useState)(t.gid_clan_event),
            [E, v] = (0, d.useState)(null);
          return d.createElement(
            h.uH,
            {
              strTitle: "Migrate Sale page",
              strDescription: `Will migrate the sale page ${t.vanity} to the below clan `,
              bOKDisabled: !n || l,
              onOK: () => {
                o(!0),
                  H.Get()
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
                  d.createElement(y, {
                    bLimitToCreatorHome: !0,
                    strLabel: "Search for Creator Home to house the Sale Event",
                    strToolTip:
                      "Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)",
                    fnSetCurator: (e) => {
                      r(e.GetClanAccountID()), v(e);
                    },
                  }),
                  Boolean(E) && d.createElement(k, { creatorHome: E }),
                ),
            Boolean(l && !i) &&
              d.createElement(_.V, { position: "center", size: "medium" }),
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
                      href: C.De.STORE_BASE_URL + "sale/" + t.vanity,
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
                        C.De.COMMUNITY_BASE_URL +
                        "gid/" +
                        u.K.InitFromClanID(n).ConvertTo64BitString() +
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
            a = u.K.InitFromClanID(t.GetClanAccountID()),
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
                d.createElement(R.oZ, {
                  creatorID: t.GetCreatorHomeIdentifier(),
                  bHideCreatorType: !0,
                }),
              )
            : null;
        };
      class H {
        BHasLoadCompleted() {
          return this.m_bLoadComplete;
        }
        GetMigrationRecords() {
          return this.m_listSaleState;
        }
        async MigrateOrUpdateSalePage(e, t, a) {
          var n, r;
          const l = this.m_mapSaleIDToInfo.get(e);
          if (!l)
            return [
              "Record not found to begin the migration processing, cannot take action.: " +
                e,
              !1,
              void 0,
            ];
          if (l.gid_clan_event && (!l.hidden || l.published))
            return [
              "Sale event is already public, cannot take action.: " + e,
              !1,
              void 0,
            ];
          try {
            const o =
              C.De.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
            let c = new URLSearchParams();
            c.append("sessionid", C.De.SESSIONID),
              c.append("salePageID", e),
              c.append("clanAccountID", "" + t),
              a && c.append("gidClanEvent", a);
            const d = await i().post(o, c, { withCredentials: !0 });
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
                (0, s.z)(() => {
                  l.gid_clan_event ||
                    ((l.gid_clan_event = d.data.gidClanEvent),
                    (l.clan_account_id = t),
                    (l.hidden = !0),
                    (l.published = !1),
                    (l.valve_approved_sale_vanity_id = !0));
                }),
                [d.data.msg || "Success", !0, d.data.gidClanEvent]
              );
            {
              const e = (0, f.l)(d);
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
            const t = (0, f.l)(e);
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
                C.De.COMMUNITY_BASE_URL + "migrate/ajaxgetsalepagestomigrate",
              n = { sessionid: C.De.SESSIONID },
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
                (0, s.z)(() => {
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
              const e = (0, f.l)(r);
              console.error(
                "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                  e.strErrorMsg,
                e,
              );
            }
          } catch (e) {
            const t = (0, f.l)(e);
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
            H.s_Singleton ||
              ((H.s_Singleton = new H()),
              ("dev" != C.De.WEB_UNIVERSE && "beta" != C.De.WEB_UNIVERSE) ||
                (window.g_MigrateSaleStore = H.s_Singleton)),
            H.s_Singleton
          );
        }
        constructor() {
          (this.m_mapSaleIDToInfo = new Map()),
            (this.m_listSaleState = new Array()),
            (this.m_stateLoadPromise = null),
            (this.m_bLoadComplete = !1),
            (0, s.rC)(this);
        }
      }
      (0, l.gn)([s.LO], H.prototype, "m_mapSaleIDToInfo", void 0),
        (0, l.gn)([s.LO], H.prototype, "m_listSaleState", void 0);
      var U = a(93243),
        x = a(42855),
        F = a(71472);
      class z {
        constructor() {
          (this.m_rgApps = []),
            (this.m_rgClanAccountIDs = []),
            (this.m_nHighestAppOffsetRequested = 0),
            (this.m_nHighestClanOffsetRequested = 0),
            (0, s.rC)(this);
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
          let l = Math.max(t, 20);
          for (
            this.m_nHighestAppOffsetRequested = e + l,
              await this.m_mostRecentRequest;
            l > 0;

          ) {
            const t = Math.min(l, 100),
              o = { offset: e, nBatchSize: t, start_appid: a },
              c = C.De.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
            let d = null;
            try {
              const a = await i().get(c, {
                params: o,
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
                (0, s.z)(() => {
                  if (e > this.m_rgApps.length)
                    for (let t = this.m_rgApps.length; t < e; t++)
                      this.m_rgApps[t] = null;
                  for (let n = 0; n < t; n++)
                    this.m_rgApps[e + n] = a.data.apps[n];
                }),
                  (e += t),
                  (l -= t);
                continue;
              }
              d = (0, f.l)(null == a ? void 0 : a.data);
            } catch (e) {
              d = (0, f.l)(e);
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
            l = C.De.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
          let o = null;
          try {
            const e = await i().get(l, {
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
            o = (0, f.l)(null == e ? void 0 : e.data);
          } catch (e) {
            o = (0, f.l)(e);
          }
          console.error(
            "FetchClans: ajax request failed with error",
            o.strErrorMsg,
          );
        }
      }
      (0, l.gn)([s.LO.shallow], z.prototype, "m_rgApps", void 0),
        (0, l.gn)([s.LO.shallow], z.prototype, "m_rgClanAccountIDs", void 0);
      var V = a(73941),
        Y = a(46452),
        q = a.n(Y);
      const W = (0, c.Pi)((e) => {
          const [t, a] = (0, d.useState)(!0);
          (0, d.useEffect)(() => {
            Promise.all([x.cb.InitGlobal(), r.wk.Init()]).then(() => a(!1));
          }, []);
          const [n, l] = (0, F.Ar)("start", 0),
            [o, i] = (0, F.Ar)("start_appid", 0),
            [s, c] = (0, F.Ar)("count", 10),
            [u, m] = (0, F.Ar)("autoload", !0),
            [g, h] = (0, F.Ar)("batch_size", 1),
            [p, E] = (0, F.Ar)("automigrate", !1),
            [v, S] = (0, d.useState)(!1),
            [f, C] = (0, F.Ar)("rolling", 0),
            [I, A] = (0, d.useState)(new Set()),
            M = (0, d.useRef)(0),
            b = z.Get().GetApps(n, s, o),
            w = 0 == f ? b : b.filter((e) => !I.has(Number(e.id))).slice(0, f),
            D = (e, t) => {
              I.has(e) ||
                (console.log("completed: ", e, t),
                I.add(e),
                (M.current += t),
                A(new Set(I)));
            };
          return d.createElement(
            "div",
            { className: q().MigrateToolCtn },
            d.createElement(
              "div",
              { className: q().ToolHeader },
              "Partner Events Migration Tools",
            ),
            w.map((e) =>
              d.createElement($, {
                key: e.id,
                app: e,
                bAutoLoad: u,
                bAutoMigrate: p || v,
                nMigrateBatchSize: g,
                fnOnCompletion: D,
              }),
            ),
            t &&
              d.createElement(_.V, {
                size: "xlarge",
                position: "center",
                string: "initializing",
              }),
            !b.length &&
              d.createElement(_.V, {
                size: "xlarge",
                position: "center",
                string: "loading apps",
              }),
            d.createElement(
              "div",
              {
                className: q().LoadEventsButton,
                onClick: () => {
                  S(!1), A(new Set()), l(n + s);
                },
              },
              "LOAD NEXT PAGE",
            ),
            !p &&
              d.createElement(
                "div",
                { className: q().LoadEventsButton, onClick: () => S(!0) },
                "MIGRATE ALL ON PAGE",
              ),
            d.createElement(
              "div",
              { className: q().StatusMessage },
              I.size +
                " OF " +
                b.length +
                " APPS COMPLETE. #EVENTS: " +
                M.current,
            ),
          );
        }),
        $ = (0, c.Pi)((e) => {
          const t = Number(e.app.id),
            [a, n] = (0, d.useState)(0),
            [l, o] = (0, d.useState)([]),
            [i, s] = (0, d.useState)(!1),
            c = (0, d.useRef)(new Set()),
            u = (0, d.useRef)(0);
          (0, d.useEffect)(() => {
            U.sV.LoadOGGClanInfoForAppID(t).then((e) => {
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
          const m = U.sV.GetOGGClanInfo(t),
            g = m ? m.group_name : e.app.name,
            h = `${C.De.COMMUNITY_BASE_URL}games/${m ? m.vanity_url : t}/partnerevents/`,
            p = l.length,
            E = a == p,
            v = l.filter((e) => e.BIsVisibleEvent()),
            S = v.length,
            I = v.filter(
              (e) =>
                e.bOldAnnouncement &&
                m &&
                m.clanAccountID != e.announcementClanSteamID.GetAccountID(),
            ).length,
            A = v.filter(
              (e) =>
                e.bOldAnnouncement &&
                !c.current.has(e.AnnouncementGID) &&
                (!m ||
                  m.clanAccountID == e.announcementClanSteamID.GetAccountID()),
            ),
            M = A.length,
            b = !E && M > 0 && (null == m ? void 0 : m.clanSteamID),
            w = async () => {
              const e = a;
              n(a + 50), s(!0);
              const i = await r.wk.LoadPartnerEventsPageable(void 0, t, e, 50);
              o(l.concat(i)), s(!1);
            };
          (0, d.useEffect)(() => {
            e.bAutoLoad && E && !i && w();
          });
          const D = (e, t) => {
              t ? (u.current += 1) : c.current.add(e);
            },
            L = async () => {
              s(!0),
                await (async function (e, t, a, n, l) {
                  for (const o of e.slice(0, t)) {
                    console.log(
                      "Migrating",
                      a,
                      o.AnnouncementGID,
                      o.GetNameWithFallback(0),
                      o,
                    );
                    try {
                      const e = await (0, V.HO)(o.AnnouncementGID, a, n);
                      if (e) console.warn("Already migrated to event", e);
                      else {
                        const e = r.wk.GetEditModel();
                        e.AddTag("auto_migrated"),
                          e.AddTag("hide_library_overview"),
                          e.AddTag("hide_library_detail"),
                          await r.wk.SaveModel(n),
                          console.log("Successfully migrated the event!"),
                          (o.bOldAnnouncement = !1),
                          l(o.AnnouncementGID, !0);
                      }
                    } catch (e) {
                      const t = (0, f.l)(e);
                      console.error(
                        "MigrateEvents: " + t.strErrorMsg.slice(0, 512),
                        t,
                      ),
                        l(o.AnnouncementGID, !1);
                    }
                  }
                })(A, e.nMigrateBatchSize, t, m.clanSteamID, D),
                s(!1);
            };
          return (
            (0, d.useEffect)(() => {
              e.bAutoMigrate && b && !i && L();
            }),
            (0, d.useEffect)(() => {
              E || b || i || e.fnOnCompletion(t, u.current);
            }),
            d.createElement(
              "div",
              { className: q().ClanRow },
              d.createElement("div", { className: q().ID }, t),
              d.createElement("a", { className: q().ClanName, href: h }, g),
              d.createElement(
                "div",
                { className: q().Counts },
                `Loaded: ${p}\tVisible: ${S}\tOld: ${M}`,
                I > 0 &&
                  d.createElement(
                    "span",
                    { className: q().LinkedAnnouncements },
                    `Linked: ${I}`,
                  ),
              ),
              E
                ? d.createElement(
                    "div",
                    { className: q().LoadEventsButton, onClick: w },
                    "LOAD EVENTS",
                  )
                : i
                  ? d.createElement(_.V, { size: "small" })
                  : b
                    ? d.createElement(
                        "div",
                        { className: q().MigrateEventsButton, onClick: L },
                        "MIGRATE EVENTS",
                      )
                    : d.createElement(
                        "div",
                        { className: q().CompleteMessage },
                        "NOTHING TO MIGRATE",
                      ),
            )
          );
        });
      var j = a(8285),
        K = a(82071),
        Z = (a(34345), a(69406));
      function X(e) {
        const [t, a] = d.useState(!0);
        return (
          d.useEffect(() => {
            K.j1.Init(), Promise.all([]).then(() => a(!1));
          }, []),
          t
            ? d.createElement(_.V, { position: "center", size: "medium" })
            : d.createElement(
                j.rs,
                null,
                d.createElement(j.AW, {
                  path: n.wZ.MigrateSaleEvents(),
                  component: B,
                }),
                d.createElement(j.AW, {
                  path: n.wZ.MigrateEvents(),
                  component: W,
                }),
                d.createElement(j.AW, { component: Z.R }),
              )
        );
      }
    },
  },
]);
