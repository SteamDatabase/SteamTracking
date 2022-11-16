/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3352],
  {
    70010: (e) => {
      e.exports = { SearchResults: "search_curator_SearchResults_3ao90" };
    },
    52494: (e) => {
      e.exports = {
        SectionContainer: "migratesaletool_SectionContainer_3ZElG",
        SectionTitle: "migratesaletool_SectionTitle_1-ftd",
        RecordCtn: "migratesaletool_RecordCtn_1gW9g",
        RecordInfoCtn: "migratesaletool_RecordInfoCtn_6eQgp",
      };
    },
    72270: (e) => {
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
    93871: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => J });
      var n = a(9355),
        r = a(10669),
        o = a(70655),
        l = a(9669),
        i = a.n(l),
        s = a(22188),
        c = a(29323),
        d = (a(30381), a(67294)),
        u = (a(26149), a(92398), a(3389)),
        m = a(13354),
        g = a(48341),
        h = a(59253),
        p = a(41414),
        v = a(95598),
        _ = a(13596),
        E = (a(82946), a(53622)),
        S = a(41311),
        f = a(93976),
        C = a(90666),
        I = a(52494),
        A = a(57287),
        M = (a(19663), a(461)),
        b = a(10847),
        D = a(32548),
        w = a(69491),
        L = a(73604),
        T = a(70010);
      const G = (e) => {
          const {
              strLabel: t,
              strToolTip: a,
              fnSetCurator: n,
              bLimitToCreatorHome: r,
            } = e,
            l = (0, d.useRef)(null),
            s = (0, d.useRef)(null),
            c = (0, d.useRef)(0),
            u = (0, d.useRef)();
          (0, d.useEffect)(
            () => () => {
              window.clearTimeout(c.current),
                l.current && l.current("SearchForCurator: unmounting"),
                s.current && s.current.Hide();
            },
            []
          );
          const m = (0, d.useCallback)(
            (e) =>
              (0, o.mG)(void 0, void 0, void 0, function* () {
                const t = e.target.value;
                t &&
                  0 != t.trim().length &&
                  (window.clearTimeout(c.current),
                  l.current && l.current("SearchForCurator: new request"),
                  (c.current = window.setTimeout(
                    () =>
                      (0, o.mG)(void 0, void 0, void 0, function* () {
                        const e = i().CancelToken.source();
                        l.current = e.cancel;
                        try {
                          const a = yield M.bq.SearchCreatorHomeStore(t, r, e);
                          if (e.token.reason) return;
                          s.current = (0, A.yV)(
                            d.createElement(y, { list: a, fnSetCurator: n }),
                            u.current.element,
                            {
                              bOverlapHorizontal: !0,
                              bMatchWidth: !0,
                              bFitToWindow: !0,
                              bDisablePopTop: !0,
                            }
                          );
                        } catch (t) {
                          if (e.token.reason) return;
                          const a = (0, f.l)(t);
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
            [n, r]
          );
          return d.createElement(
            D.S,
            null,
            d.createElement(g.II, {
              type: "text",
              label: t,
              onChange: m,
              onBlur: () => {
                setTimeout(() => s.current && s.current.Hide(), 200);
              },
              ref: u,
              tooltip: a,
            })
          );
        },
        y = (e) => {
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
                    { className: w.GameImageContainer },
                    d.createElement("img", {
                      src: e.GetAvatarURLFullSize(),
                      className: w.AvatarImage,
                    })
                  ),
                  (0, L.HA)(e.GetName())
                )
              )
            )
          );
        };
      var R = a(22093);
      const N = (0, c.Pi)((e) => {
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
                e.display_name.toLocaleLowerCase().indexOf("franchise") >= 0
            ),
            r = a.filter(
              (e) => e.display_name.toLocaleLowerCase().indexOf("franchise") < 0
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
              "For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account."
            ),
            d.createElement(B, {
              strName: "Unmigrated Franchises",
              records: n,
            }),
            d.createElement(B, {
              strName: "Unmigrated Generic Sale PAges",
              records: r,
              bHideByDefault: !0,
            }),
            d.createElement(B, { strName: "Migrated but Hidden", records: o }),
            d.createElement(B, {
              strName: "Migrated and Visible",
              records: l,
              bHideByDefault: !0,
            })
          );
        }),
        B = (e) => {
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
                g.zx,
                { onClick: () => o(!r) },
                r ? d.createElement(v.YqJ, null) : d.createElement(v.gR, null)
              )
            ),
            d.createElement("hr", null),
            Boolean(r)
              ? d.createElement(
                  g.zx,
                  { onClick: () => o(!1) },
                  (0, S.Xx)("#Sale_ShowContents")
                )
              : d.createElement(
                  d.Fragment,
                  null,
                  a.map((e) =>
                    d.createElement(O, { key: e.sale_page_id, record: e })
                  )
                )
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
                      `${t.display_name} - (${t.vanity})`
                    )
                  )
                ),
                Boolean(a) &&
                  d.createElement(
                    "div",
                    null,
                    d.createElement(
                      "a",
                      { href: a.vanity_url },
                      "Sale Page part of ",
                      a.group_name
                    )
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
                            t.clan_account_id
                          ).ConvertTo64BitString() +
                          "/partnerevents/edit/" +
                          t.gid_clan_event,
                      },
                      `Migrated: Event Editor Links: State hidden: ${t.hidden} published: ${t.published} sale/ vanity?: ${t.valve_approved_sale_vanity_id}`
                    )
                  )
              ),
              Boolean(!t.gid_clan_event || (t.hidden && !t.published)) &&
                d.createElement(
                  g.zx,
                  {
                    onClick: (e) =>
                      (0, p.AM)(
                        d.createElement(P, { record: t }),
                        (0, E.RA)(e)
                      ),
                  },
                  "Migrate Sale Page"
                )
            ),
            d.createElement("hr", null)
          );
        }),
        P = (e) => {
          const { record: t, closeModal: a } = e,
            [n, r] = (0, d.useState)(t.clan_account_id),
            [o, l] = (0, d.useState)(!1),
            [i, s] = (0, d.useState)(void 0),
            [c, m] = (0, d.useState)(!1),
            [g, p] = (0, d.useState)(t.gid_clan_event),
            [v, E] = (0, d.useState)(null);
          return d.createElement(
            h.uH,
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
                      t.gid_clan_event
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
                    "Sale page already migrated. This will update the hidden page with latest migration code"
                  ),
                  d.createElement("div", null, "ClanID = ", t.clan_account_id),
                  d.createElement("div", null, "GID = ", t.gid_clan_event)
                )
              : d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(G, {
                    bLimitToCreatorHome: !0,
                    strLabel: "Search for Creator Home to house the Sale Event",
                    strToolTip:
                      "Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)",
                    fnSetCurator: (e) => {
                      r(e.GetClanAccountID()), E(e);
                    },
                  }),
                  Boolean(v) && d.createElement(k, { creatorHome: v })
                ),
            Boolean(o && !i) &&
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
                    "Sale Page"
                  )
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
                    "New Sale Page Editor"
                  )
                )
              )
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
                  a.ConvertTo64BitString()
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
                    "Group Support Page"
                  )
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
                      "Read more about the state here."
                    )
                  ),
                d.createElement(R.oZ, {
                  creatorID: t.GetCreatorHomeIdentifier(),
                  bHideCreatorType: !0,
                })
              )
            : null;
        };
      class H {
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
          var n, r;
          return (0, o.mG)(this, void 0, void 0, function* () {
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
                C.De.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
              let c = new URLSearchParams();
              c.append("sessionid", C.De.SESSIONID),
                c.append("salePageID", e),
                c.append("clanAccountID", "" + t),
                a && c.append("gidClanEvent", a);
              const d = yield i().post(l, c, { withCredentials: !0 });
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
                const e = (0, f.l)(d);
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
              const t = (0, f.l)(e);
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
          return (0, o.mG)(this, void 0, void 0, function* () {
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            try {
              const a =
                  C.De.COMMUNITY_BASE_URL + "migrate/ajaxgetsalepagestomigrate",
                n = { sessionid: C.De.SESSIONID },
                r = yield i().get(a, { params: n, withCredentials: !0 });
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
                const e = (0, f.l)(r);
                console.error(
                  "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                    e.strErrorMsg,
                  e
                );
              }
            } catch (e) {
              const t = (0, f.l)(e);
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
            H.s_Singleton ||
              ((H.s_Singleton = new H()),
              ("dev" != C.De.WEB_UNIVERSE && "beta" != C.De.WEB_UNIVERSE) ||
                (window.g_MigrateSaleStore = H.s_Singleton)),
            H.s_Singleton
          );
        }
      }
      (0, o.gn)([s.LO], H.prototype, "m_mapSaleIDToInfo", void 0),
        (0, o.gn)([s.LO], H.prototype, "m_listSaleState", void 0);
      var U = a(76776),
        x = (a(49186), a(9915)),
        F = a(31933);
      class V {
        constructor() {
          (this.m_rgApps = []),
            (this.m_rgClanAccountIDs = []),
            (this.m_nHighestAppOffsetRequested = 0),
            (this.m_nHighestClanOffsetRequested = 0);
        }
        static Get() {
          return (
            V.s_globalSingletonStore ||
              ((V.s_globalSingletonStore = new V()),
              V.s_globalSingletonStore.Init()),
            V.s_globalSingletonStore
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
        FetchApps(e, t, a, n) {
          var r;
          return (0, o.mG)(this, void 0, void 0, function* () {
            if (this.m_startAppID && this.m_startAppID != a)
              throw new Error(
                "Cannot switch starting AppID from " +
                  this.m_startAppID +
                  " to " +
                  a
              );
            this.m_startAppID = a;
            let o = Math.max(t, 20);
            for (
              this.m_nHighestAppOffsetRequested = e + o,
                yield this.m_mostRecentRequest;
              o > 0;

            ) {
              const t = Math.min(o, 100),
                l = { offset: e, nBatchSize: t, start_appid: a },
                c = C.De.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
              let d = null;
              try {
                const a = yield i().get(c, {
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
                  (0, s.z)(() => {
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
                d = (0, f.l)(null == a ? void 0 : a.data);
              } catch (e) {
                d = (0, f.l)(e);
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            this.m_nHighestClanOffsetRequested = e + t;
            const r = { offset: e, count: t },
              o = C.De.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
            let l = null;
            try {
              const e = yield i().get(o, {
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
                  this.m_rgClanAccountIDs.concat(
                    e.data.accountids.map(Number)
                  ));
              l = (0, f.l)(null == e ? void 0 : e.data);
            } catch (e) {
              l = (0, f.l)(e);
            }
            console.error(
              "FetchClans: ajax request failed with error",
              l.strErrorMsg
            );
          });
        }
      }
      (0, o.gn)([s.LO.shallow], V.prototype, "m_rgApps", void 0),
        (0, o.gn)([s.LO.shallow], V.prototype, "m_rgClanAccountIDs", void 0);
      var z = a(70882),
        q = a(72270),
        $ = a.n(q);
      const Y = (0, c.Pi)((e) => {
          const [t, a] = (0, d.useState)(!0);
          (0, d.useEffect)(() => {
            Promise.all([x.cb.InitGlobal(), r.wk.Init()]).then(() => a(!1));
          }, []);
          const [n, o] = (0, F.Ar)("start", 0),
            [l, i] = (0, F.Ar)("start_appid", 0),
            [s, c] = (0, F.Ar)("count", 10),
            [u, m] = (0, F.Ar)("autoload", !0),
            [g, h] = (0, F.Ar)("batch_size", 1),
            [p, v] = (0, F.Ar)("automigrate", !1),
            [E, S] = (0, d.useState)(!1),
            [f, C] = (0, F.Ar)("rolling", 0),
            [I, A] = (0, d.useState)(new Set()),
            M = (0, d.useRef)(0),
            b = V.Get().GetApps(n, s, l),
            D = 0 == f ? b : b.filter((e) => !I.has(Number(e.id))).slice(0, f),
            w = (e, t) => {
              I.has(e) ||
                (console.log("completed: ", e, t),
                I.add(e),
                (M.current += t),
                A(new Set(I)));
            };
          return d.createElement(
            "div",
            { className: $().MigrateToolCtn },
            d.createElement(
              "div",
              { className: $().ToolHeader },
              "Partner Events Migration Tools"
            ),
            D.map((e) =>
              d.createElement(W, {
                key: e.id,
                app: e,
                bAutoLoad: u,
                bAutoMigrate: p || E,
                nMigrateBatchSize: g,
                fnOnCompletion: w,
              })
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
                className: $().LoadEventsButton,
                onClick: () => {
                  S(!1), A(new Set()), o(n + s);
                },
              },
              "LOAD NEXT PAGE"
            ),
            !p &&
              d.createElement(
                "div",
                { className: $().LoadEventsButton, onClick: () => S(!0) },
                "MIGRATE ALL ON PAGE"
              ),
            d.createElement(
              "div",
              { className: $().StatusMessage },
              I.size +
                " OF " +
                b.length +
                " APPS COMPLETE. #EVENTS: " +
                M.current
            )
          );
        }),
        W = (0, c.Pi)((e) => {
          const t = Number(e.app.id),
            [a, n] = (0, d.useState)(0),
            [l, i] = (0, d.useState)([]),
            [s, c] = (0, d.useState)(!1),
            u = (0, d.useRef)(new Set()),
            m = (0, d.useRef)(0);
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
                  : a.ConvertTo64BitString()
              );
            });
          }, [t]);
          const g = U.sV.GetOGGClanInfo(t),
            h = g ? g.group_name : e.app.name,
            p = `${C.De.COMMUNITY_BASE_URL}games/${
              g ? g.vanity_url : t
            }/partnerevents/`,
            v = l.length,
            E = a == v,
            S = l.filter((e) => e.BIsVisibleEvent()),
            I = S.length,
            A = S.filter(
              (e) =>
                e.bOldAnnouncement &&
                g &&
                g.clanAccountID != e.announcementClanSteamID.GetAccountID()
            ).length,
            M = S.filter(
              (e) =>
                e.bOldAnnouncement &&
                !u.current.has(e.AnnouncementGID) &&
                (!g ||
                  g.clanAccountID == e.announcementClanSteamID.GetAccountID())
            ),
            b = M.length,
            D = !E && b > 0 && (null == g ? void 0 : g.clanSteamID),
            w = () =>
              (0, o.mG)(void 0, void 0, void 0, function* () {
                const e = a;
                n(a + 50), c(!0);
                const o = yield r.wk.LoadPartnerEventsPageable(
                  void 0,
                  t,
                  e,
                  50
                );
                i(l.concat(o)), c(!1);
              });
          (0, d.useEffect)(() => {
            e.bAutoLoad && E && !s && w();
          });
          const L = (e, t) => {
              t ? (m.current += 1) : u.current.add(e);
            },
            T = () =>
              (0, o.mG)(void 0, void 0, void 0, function* () {
                c(!0),
                  yield (function (e, t, a, n, l) {
                    return (0, o.mG)(this, void 0, void 0, function* () {
                      for (const o of e.slice(0, t)) {
                        console.log(
                          "Migrating",
                          a,
                          o.AnnouncementGID,
                          o.GetNameWithFallback(0),
                          o
                        );
                        try {
                          const e = yield (0, z.HO)(o.AnnouncementGID, a, n);
                          if (e) console.warn("Already migrated to event", e);
                          else {
                            const e = r.wk.GetEditModel();
                            e.AddTag("auto_migrated"),
                              e.AddTag("hide_library_overview"),
                              e.AddTag("hide_library_detail"),
                              yield r.wk.SaveModel(n),
                              console.log("Successfully migrated the event!"),
                              (o.bOldAnnouncement = !1),
                              l(o.AnnouncementGID, !0);
                          }
                        } catch (e) {
                          const t = (0, f.l)(e);
                          console.error(
                            "MigrateEvents: " + t.strErrorMsg.slice(0, 512),
                            t
                          ),
                            l(o.AnnouncementGID, !1);
                        }
                      }
                    });
                  })(M, e.nMigrateBatchSize, t, g.clanSteamID, L),
                  c(!1);
              });
          return (
            (0, d.useEffect)(() => {
              e.bAutoMigrate && D && !s && T();
            }),
            (0, d.useEffect)(() => {
              E || D || s || e.fnOnCompletion(t, m.current);
            }),
            d.createElement(
              "div",
              { className: $().ClanRow },
              d.createElement("div", { className: $().ID }, t),
              d.createElement("a", { className: $().ClanName, href: p }, h),
              d.createElement(
                "div",
                { className: $().Counts },
                `Loaded: ${v}\tVisible: ${I}\tOld: ${b}`,
                A > 0 &&
                  d.createElement(
                    "span",
                    { className: $().LinkedAnnouncements },
                    `Linked: ${A}`
                  )
              ),
              E
                ? d.createElement(
                    "div",
                    { className: $().LoadEventsButton, onClick: w },
                    "LOAD EVENTS"
                  )
                : s
                ? d.createElement(_.V, { size: "small" })
                : D
                ? d.createElement(
                    "div",
                    { className: $().MigrateEventsButton, onClick: T },
                    "MIGRATE EVENTS"
                  )
                : d.createElement(
                    "div",
                    { className: $().CompleteMessage },
                    "NOTHING TO MIGRATE"
                  )
            )
          );
        });
      var j = a(78587),
        K = a(7200),
        Z = a(27991),
        X = (a(55038), a(92244));
      function J(e) {
        const [t, a] = d.useState(!0);
        return (
          d.useEffect(() => {
            K.j1.Init(), Promise.all([(0, Z.nf)(null)]).then(() => a(!1));
          }, []),
          t
            ? d.createElement(_.V, { position: "center", size: "medium" })
            : d.createElement(
                j.rs,
                null,
                d.createElement(j.AW, {
                  path: n.wZ.MigrateSaleEvents(),
                  component: N,
                }),
                d.createElement(j.AW, {
                  path: n.wZ.MigrateEvents(),
                  component: Y,
                }),
                d.createElement(j.AW, { component: X.R })
              )
        );
      }
    },
  },
]);
