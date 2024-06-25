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
        o = a(85556),
        l = a(80751),
        s = a.n(l),
        i = a(54842),
        c = a(27605),
        m = a(47427),
        d = a(35427),
        u = a(78910),
        g = a(1485),
        p = a(50898),
        h = a(90069),
        E = a(62613),
        _ = a(46882),
        S = a(50423),
        f = a(31846),
        v = a(16649),
        C = a(37563),
        I = a(19758),
        A = a(95315),
        b = a(58670),
        M = a(22042),
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
            o = (0, m.useRef)(null),
            l = (0, m.useRef)(null),
            i = (0, m.useRef)(0),
            c = (0, m.useRef)();
          (0, m.useEffect)(
            () => () => {
              window.clearTimeout(i.current),
                o.current && o.current("SearchForCurator: unmounting"),
                l.current && l.current.Hide();
            },
            [],
          );
          const d = (0, m.useCallback)(
            async (e) => {
              const t = e.target.value;
              t &&
                0 != t.trim().length &&
                (window.clearTimeout(i.current),
                o.current && o.current("SearchForCurator: new request"),
                (i.current = window.setTimeout(async () => {
                  const e = s().CancelToken.source();
                  o.current = e.cancel;
                  try {
                    const a = await b.bq.SearchCreatorHomeStore(t, r, e);
                    if (e.token.reason) return;
                    l.current = (0, A.yV)(
                      m.createElement(N, { list: a, fnSetCurator: n }),
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
                    const a = (0, v.l)(t);
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
          return m.createElement(
            w.SV,
            null,
            m.createElement(g.II, {
              type: "text",
              label: t,
              onChange: d,
              onBlur: (e) =>
                setTimeout(() => l.current && l.current.Hide(), 200),
              ref: c,
              tooltip: a,
            }),
          );
        },
        N = (e) => {
          const { list: t, fnSetCurator: a } = e;
          return m.createElement(
            M.xV,
            { className: T.SearchResults },
            t.map((e) =>
              m.createElement(
                M.Zo,
                {
                  key: "curatorresult" + e.GetClanAccountID(),
                  onSelected: () => a(e),
                },
                m.createElement(
                  "div",
                  { style: { display: "flex", alignItems: "center" } },
                  m.createElement(
                    "div",
                    { className: D.GameImageContainer },
                    m.createElement("img", {
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
            const [e, t] = m.useState(!H.Get().BHasLoadCompleted());
            return (
              m.useEffect(() => {
                H.Get().BHasLoadCompleted() ||
                  H.Get()
                    .LoadSalePageMigrationInfo()
                    .finally(() => t(!1));
              }, []),
              e ? void 0 : H.Get().GetMigrationRecords()
            );
          })();
          if (!t)
            return m.createElement(_.V, {
              string: (0, f.Xx)("#Loading"),
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
          return m.createElement(
            "div",
            null,
            m.createElement("h1", null, "Migration Sale Tool:"),
            m.createElement(
              "p",
              null,
              "For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account.",
            ),
            m.createElement(G, {
              strName: "Unmigrated Franchises",
              records: n,
            }),
            m.createElement(G, {
              strName: "Unmigrated Generic Sale PAges",
              records: r,
              bHideByDefault: !0,
            }),
            m.createElement(G, { strName: "Migrated but Hidden", records: o }),
            m.createElement(G, {
              strName: "Migrated and Visible",
              records: l,
              bHideByDefault: !0,
            }),
          );
        }),
        G = (e) => {
          const { strName: t, records: a, bHideByDefault: n } = e,
            [r, o] = (0, m.useState)(n);
          return m.createElement(
            "div",
            { className: I.SectionContainer },
            m.createElement(
              "h2",
              { className: I.SectionTitle, onDoubleClick: () => o(!r) },
              t,
              " (",
              a.length,
              ")",
              m.createElement("span", null, " "),
              m.createElement(
                g.zx,
                { onClick: () => o(!r) },
                r ? m.createElement(E.YqJ, null) : m.createElement(E.gR, null),
              ),
            ),
            m.createElement("hr", null),
            Boolean(r)
              ? m.createElement(
                  g.zx,
                  { onClick: () => o(!1) },
                  (0, f.Xx)("#Sale_ShowContents"),
                )
              : m.createElement(
                  m.Fragment,
                  null,
                  a.map((e) =>
                    m.createElement(O, { key: e.sale_page_id, record: e }),
                  ),
                ),
          );
        },
        O = (0, c.Pi)((e) => {
          const { record: t } = e,
            a = (0, u.P4)(t.clan_account_id);
          return m.createElement(
            m.Fragment,
            null,
            m.createElement(
              "div",
              { className: I.RecordCtn },
              m.createElement(
                "div",
                { className: I.RecordInfoCtn },
                m.createElement(
                  "div",
                  null,
                  m.createElement(
                    "a",
                    { href: C.De.STORE_BASE_URL + "sale/" + t.vanity },
                    m.createElement(
                      "b",
                      null,
                      `${t.display_name} - (${t.vanity})`,
                    ),
                  ),
                ),
                Boolean(a) &&
                  m.createElement(
                    "div",
                    null,
                    m.createElement(
                      "a",
                      { href: a.vanity_url },
                      "Sale Page part of ",
                      a.group_name,
                    ),
                  ),
                Boolean(t.gid_clan_event) &&
                  m.createElement(
                    "div",
                    null,
                    m.createElement(
                      "a",
                      {
                        href:
                          C.De.COMMUNITY_BASE_URL +
                          "gid/" +
                          d.K.InitFromClanID(
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
                m.createElement(
                  g.zx,
                  {
                    onClick: (e) =>
                      (0, h.AM)(
                        m.createElement(P, { record: t }),
                        (0, S.RA)(e),
                      ),
                  },
                  "Migrate Sale Page",
                ),
            ),
            m.createElement("hr", null),
          );
        }),
        P = (e) => {
          const { record: t, closeModal: a } = e,
            [n, r] = (0, m.useState)(t.clan_account_id),
            [o, l] = (0, m.useState)(!1),
            [s, i] = (0, m.useState)(void 0),
            [c, u] = (0, m.useState)(!1),
            [g, h] = (0, m.useState)(t.gid_clan_event),
            [E, S] = (0, m.useState)(null);
          return m.createElement(
            p.uH,
            {
              strTitle: "Migrate Sale page",
              strDescription: `Will migrate the sale page ${t.vanity} to the below clan `,
              bOKDisabled: !n || o,
              onOK: () => {
                l(!0),
                  H.Get()
                    .MigrateOrUpdateSalePage(
                      t.sale_page_id,
                      n,
                      t.gid_clan_event,
                    )
                    .then(([e, t, a]) => {
                      i(e), u(t), h(a);
                    });
              },
              onCancel: a,
            },
            Boolean(t.clan_account_id)
              ? m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(
                    "div",
                    null,
                    "Sale page already migrated. This will update the hidden page with latest migration code",
                  ),
                  m.createElement("div", null, "ClanID = ", t.clan_account_id),
                  m.createElement("div", null, "GID = ", t.gid_clan_event),
                )
              : m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(y, {
                    bLimitToCreatorHome: !0,
                    strLabel: "Search for Creator Home to house the Sale Event",
                    strToolTip:
                      "Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)",
                    fnSetCurator: (e) => {
                      r(e.GetClanAccountID()), S(e);
                    },
                  }),
                  Boolean(E) && m.createElement(k, { creatorHome: E }),
                ),
            Boolean(o && !s) &&
              m.createElement(_.V, { position: "center", size: "medium" }),
            Boolean(s) && m.createElement("div", null, s),
            Boolean(c) &&
              m.createElement(
                "div",
                null,
                m.createElement(
                  "div",
                  null,
                  m.createElement(
                    "a",
                    {
                      href: C.De.STORE_BASE_URL + "sale/" + t.vanity,
                      target: "_blank",
                    },
                    "Sale Page",
                  ),
                ),
                m.createElement(
                  "div",
                  null,
                  m.createElement(
                    "a",
                    {
                      href:
                        C.De.COMMUNITY_BASE_URL +
                        "gid/" +
                        d.K.InitFromClanID(n).ConvertTo64BitString() +
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
            a = d.K.InitFromClanID(t.GetClanAccountID()),
            n = t.GetClanAccountID();
          return t
            ? m.createElement(
                "div",
                null,
                m.createElement(
                  "div",
                  null,
                  "ClanID = ",
                  n,
                  " - SteamID ",
                  a.ConvertTo64BitString(),
                ),
                m.createElement(
                  "div",
                  null,
                  m.createElement(
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
                  m.createElement(
                    "div",
                    null,
                    "To use this Creator Home for the sale page migration, the process will need to enable partner event editing on the clan. This both updates the creator home but also puts a small limitation upon it.",
                    m.createElement(
                      "a",
                      {
                        href: "https://confluence.valve.org/display/STEAM/Creator+home+and+Partner+Events+Beta",
                        target: "_blank",
                      },
                      "Read more about the state here.",
                    ),
                  ),
                m.createElement(R.oZ, {
                  creatorID: t.GetCreatorHomeIdentifier(),
                  bHideCreatorType: !0,
                }),
              )
            : null;
        };
      class H {
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
        async MigrateOrUpdateSalePage(e, t, a) {
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
            const r =
              C.De.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
            let o = new URLSearchParams();
            o.append("sessionid", C.De.SESSIONID),
              o.append("salePageID", e),
              o.append("clanAccountID", "" + t),
              a && o.append("gidClanEvent", a);
            const l = await s().post(r, o, { withCredentials: !0 });
            if (
              200 == l?.status &&
              1 == l?.data?.success &&
              l?.data?.gidClanEvent
            )
              return (
                (0, i.z)(() => {
                  n.gid_clan_event ||
                    ((n.gid_clan_event = l.data.gidClanEvent),
                    (n.clan_account_id = t),
                    (n.hidden = !0),
                    (n.published = !1),
                    (n.valve_approved_sale_vanity_id = !0));
                }),
                [l.data.msg || "Success", !0, l.data.gidClanEvent]
              );
            {
              const e = (0, v.l)(l);
              return (
                console.error(
                  "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                    e.strErrorMsg,
                  e,
                ),
                [l.data.msg || "Failed", !1, void 0]
              );
            }
          } catch (e) {
            const t = (0, v.l)(e);
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
          try {
            const e =
                C.De.COMMUNITY_BASE_URL + "migrate/ajaxgetsalepagestomigrate",
              t = { sessionid: C.De.SESSIONID },
              a = await s().get(e, { params: t, withCredentials: !0 });
            if (
              ((this.m_bLoadComplete = !0),
              200 == a?.status && 1 == a?.data?.success && a?.data?.data)
            )
              return (
                (0, i.z)(() => {
                  a.data.data.forEach((e) => {
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
              const e = (0, v.l)(a);
              console.error(
                "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                  e.strErrorMsg,
                e,
              );
            }
          } catch (e) {
            const t = (0, v.l)(e);
            console.error(
              "CMigrateSaleStore.LoadSalePageMigrationInfo: caught error with " +
                t.strErrorMsg,
              t,
            );
          }
          return [];
        }
        static s_Singleton;
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
          (0, i.rC)(this);
        }
      }
      (0, o.gn)([i.LO], H.prototype, "m_mapSaleIDToInfo", void 0),
        (0, o.gn)([i.LO], H.prototype, "m_listSaleState", void 0);
      var U = a(93243),
        x = a(42855),
        F = a(71472);
      class z {
        constructor() {
          (0, i.rC)(this);
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
          if (this.m_startAppID && this.m_startAppID != a)
            throw new Error(
              "Cannot switch starting AppID from " +
                this.m_startAppID +
                " to " +
                a,
            );
          this.m_startAppID = a;
          let r = Math.max(t, 20);
          for (
            this.m_nHighestAppOffsetRequested = e + r,
              await this.m_mostRecentRequest;
            r > 0;

          ) {
            const t = Math.min(r, 100),
              o = { offset: e, nBatchSize: t, start_appid: a },
              l = C.De.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
            let c = null;
            try {
              const a = await s().get(l, {
                params: o,
                withCredentials: !0,
                cancelToken: n?.token,
              });
              if (1 == a?.data?.success && a.data.apps) {
                (0, i.z)(() => {
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
              c = (0, v.l)(a?.data);
            } catch (e) {
              c = (0, v.l)(e);
            }
            throw new Error(
              "ajax request failed with error " +
                c.errorCode +
                ':"' +
                c.strErrorMsg +
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
          this.m_nHighestClanOffsetRequested = e + t;
          const n = { offset: e, count: t },
            r = C.De.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
          let o = null;
          try {
            const e = await s().get(r, {
              params: n,
              withCredentials: !0,
              cancelToken: a?.token,
            });
            if (1 == e?.data?.success && e.data.accountids)
              return void (this.m_rgClanAccountIDs =
                this.m_rgClanAccountIDs.concat(e.data.accountids.map(Number)));
            o = (0, v.l)(e?.data);
          } catch (e) {
            o = (0, v.l)(e);
          }
          console.error(
            "FetchClans: ajax request failed with error",
            o.strErrorMsg,
          );
        }
      }
      (0, o.gn)([i.LO.shallow], z.prototype, "m_rgApps", void 0),
        (0, o.gn)([i.LO.shallow], z.prototype, "m_rgClanAccountIDs", void 0);
      var V = a(73941),
        q = a(46452),
        Y = a.n(q);
      const W = (0, c.Pi)((e) => {
          const [t, a] = (0, m.useState)(!0);
          (0, m.useEffect)(() => {
            Promise.all([x.cb.InitGlobal(), r.wk.Init()]).then(() => a(!1));
          }, []);
          const [n, o] = (0, F.Ar)("start", 0),
            [l, s] = (0, F.Ar)("start_appid", 0),
            [i, c] = (0, F.Ar)("count", 10),
            [d, u] = (0, F.Ar)("autoload", !0),
            [g, p] = (0, F.Ar)("batch_size", 1),
            [h, E] = (0, F.Ar)("automigrate", !1),
            [S, f] = (0, m.useState)(!1),
            [v, C] = (0, F.Ar)("rolling", 0),
            [I, A] = (0, m.useState)(new Set()),
            b = (0, m.useRef)(0),
            M = z.Get().GetApps(n, i, l),
            w = 0 == v ? M : M.filter((e) => !I.has(Number(e.id))).slice(0, v),
            D = (e, t) => {
              I.has(e) ||
                (console.log("completed: ", e, t),
                I.add(e),
                (b.current += t),
                A(new Set(I)));
            };
          return m.createElement(
            "div",
            { className: Y().MigrateToolCtn },
            m.createElement(
              "div",
              { className: Y().ToolHeader },
              "Partner Events Migration Tools",
            ),
            w.map((e) =>
              m.createElement($, {
                key: e.id,
                app: e,
                bAutoLoad: d,
                bAutoMigrate: h || S,
                nMigrateBatchSize: g,
                fnOnCompletion: D,
              }),
            ),
            t &&
              m.createElement(_.V, {
                size: "xlarge",
                position: "center",
                string: "initializing",
              }),
            !M.length &&
              m.createElement(_.V, {
                size: "xlarge",
                position: "center",
                string: "loading apps",
              }),
            m.createElement(
              "div",
              {
                className: Y().LoadEventsButton,
                onClick: () => {
                  f(!1), A(new Set()), o(n + i);
                },
              },
              "LOAD NEXT PAGE",
            ),
            !h &&
              m.createElement(
                "div",
                { className: Y().LoadEventsButton, onClick: () => f(!0) },
                "MIGRATE ALL ON PAGE",
              ),
            m.createElement(
              "div",
              { className: Y().StatusMessage },
              I.size +
                " OF " +
                M.length +
                " APPS COMPLETE. #EVENTS: " +
                b.current,
            ),
          );
        }),
        $ = (0, c.Pi)((e) => {
          const t = Number(e.app.id),
            [a, n] = (0, m.useState)(0),
            [o, l] = (0, m.useState)([]),
            [s, i] = (0, m.useState)(!1),
            c = (0, m.useRef)(new Set()),
            d = (0, m.useRef)(0);
          (0, m.useEffect)(() => {
            U.sV
              .LoadOGGClanInfoForAppID(t)
              .then((e) =>
                console.log(
                  "Loaded app",
                  t,
                  e?.group_name,
                  e?.clanSteamID?.ConvertTo64BitString(),
                ),
              );
          }, [t]);
          const u = U.sV.GetOGGClanInfo(t),
            g = u ? u.group_name : e.app.name,
            p = `${C.De.COMMUNITY_BASE_URL}games/${u ? u.vanity_url : t}/partnerevents/`,
            h = o.length,
            E = a == h,
            S = o.filter((e) => e.BIsVisibleEvent()),
            f = S.length,
            I = S.filter(
              (e) =>
                e.bOldAnnouncement &&
                u &&
                u.clanAccountID != e.announcementClanSteamID.GetAccountID(),
            ).length,
            A = S.filter(
              (e) =>
                e.bOldAnnouncement &&
                !c.current.has(e.AnnouncementGID) &&
                (!u ||
                  u.clanAccountID == e.announcementClanSteamID.GetAccountID()),
            ),
            b = A.length,
            M = !E && b > 0 && u?.clanSteamID,
            w = async () => {
              const e = a;
              n(a + 50), i(!0);
              const s = await r.wk.LoadPartnerEventsPageable(void 0, t, e, 50);
              l(o.concat(s)), i(!1);
            };
          (0, m.useEffect)(() => {
            e.bAutoLoad && E && !s && w();
          });
          const D = (e, t) => {
              t ? (d.current += 1) : c.current.add(e);
            },
            L = async () => {
              i(!0),
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
                      const e = await (0, V.HO)(l.AnnouncementGID, a, n);
                      if (e) console.warn("Already migrated to event", e);
                      else {
                        const e = r.wk.GetEditModel();
                        e.AddTag("auto_migrated"),
                          e.AddTag("hide_library_overview"),
                          e.AddTag("hide_library_detail"),
                          await r.wk.SaveModel(n),
                          console.log("Successfully migrated the event!"),
                          (l.bOldAnnouncement = !1),
                          o(l.AnnouncementGID, !0);
                      }
                    } catch (e) {
                      const t = (0, v.l)(e);
                      console.error(
                        "MigrateEvents: " + t.strErrorMsg.slice(0, 512),
                        t,
                      ),
                        o(l.AnnouncementGID, !1);
                    }
                  }
                })(A, e.nMigrateBatchSize, t, u.clanSteamID, D),
                i(!1);
            };
          return (
            (0, m.useEffect)(() => {
              e.bAutoMigrate && M && !s && L();
            }),
            (0, m.useEffect)(() => {
              E || M || s || e.fnOnCompletion(t, d.current);
            }),
            m.createElement(
              "div",
              { className: Y().ClanRow },
              m.createElement("div", { className: Y().ID }, t),
              m.createElement("a", { className: Y().ClanName, href: p }, g),
              m.createElement(
                "div",
                { className: Y().Counts },
                `Loaded: ${h}\tVisible: ${f}\tOld: ${b}`,
                I > 0 &&
                  m.createElement(
                    "span",
                    { className: Y().LinkedAnnouncements },
                    `Linked: ${I}`,
                  ),
              ),
              E
                ? m.createElement(
                    "div",
                    { className: Y().LoadEventsButton, onClick: w },
                    "LOAD EVENTS",
                  )
                : s
                  ? m.createElement(_.V, { size: "small" })
                  : M
                    ? m.createElement(
                        "div",
                        { className: Y().MigrateEventsButton, onClick: L },
                        "MIGRATE EVENTS",
                      )
                    : m.createElement(
                        "div",
                        { className: Y().CompleteMessage },
                        "NOTHING TO MIGRATE",
                      ),
            )
          );
        });
      var j = a(8285),
        K = a(82071),
        Z = (a(34345), a(69406));
      function X(e) {
        const [t, a] = m.useState(!0);
        return (
          m.useEffect(() => {
            K.j1.Init(), Promise.all([]).then(() => a(!1));
          }, []),
          t
            ? m.createElement(_.V, { position: "center", size: "medium" })
            : m.createElement(
                j.rs,
                null,
                m.createElement(j.AW, {
                  path: n.wZ.MigrateSaleEvents(),
                  component: B,
                }),
                m.createElement(j.AW, {
                  path: n.wZ.MigrateEvents(),
                  component: W,
                }),
                m.createElement(j.AW, { component: Z.R }),
              )
        );
      }
    },
  },
]);
