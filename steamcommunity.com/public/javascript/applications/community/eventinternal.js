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
      var n = a(7850),
        s = a(43527),
        r = a(25888),
        o = a(34629),
        i = a(41735),
        l = a.n(i),
        c = a(14947),
        d = a(75844),
        u = a(90626),
        h = a(37085),
        g = a(17720),
        m = a(6626),
        p = a(68255),
        v = a(9154),
        _ = a(738),
        S = a(12155),
        f = a(22797),
        C = a(56011),
        x = a(61859),
        I = a(68797),
        j = a(78327),
        A = a(22517),
        b = a(88997),
        M = a(67165),
        E = a(60155),
        w = a(84811),
        T = a(64641),
        D = a(41338),
        L = a(82062);
      const y = (e) => {
          const {
              strLabel: t,
              strToolTip: a,
              fnSetCurator: s,
              bLimitToCreatorHome: r,
            } = e,
            o = (0, u.useRef)(null),
            i = (0, u.useRef)(null),
            c = (0, u.useRef)(0),
            d = (0, u.useRef)(void 0);
          (0, u.useEffect)(
            () => () => {
              window.clearTimeout(c.current),
                o.current && o.current("SearchForCurator: unmounting"),
                i.current && i.current.Hide();
            },
            [],
          );
          const h = (0, u.useCallback)(
            async (e) => {
              const t = e.target.value;
              t &&
                0 != t.trim().length &&
                (window.clearTimeout(c.current),
                o.current && o.current("SearchForCurator: new request"),
                (c.current = window.setTimeout(async () => {
                  const e = l().CancelToken.source();
                  o.current = e.cancel;
                  try {
                    const a = await M.pF.SearchCreatorHomeStore(t, r, e);
                    if (e.token.reason) return;
                    i.current = (0, b.lX)(
                      (0, n.jsx)(G, { list: a, fnSetCurator: s }),
                      d.current.element,
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
                    const a = (0, I.H)(t);
                    console.log(
                      "SearchForCurator.SearchCreatorHomeStore error " +
                        a.strErrorMsg,
                      a,
                    );
                  }
                }, 300)));
            },
            [s, r],
          );
          return (0, n.jsx)(w.tH, {
            children: (0, n.jsx)(p.pd, {
              type: "text",
              label: t,
              onChange: h,
              onBlur: (e) =>
                setTimeout(() => i.current && i.current.Hide(), 200),
              ref: d,
              tooltip: a,
            }),
          });
        },
        G = (e) => {
          const { list: t, fnSetCurator: a } = e;
          return (0, n.jsx)(E.tz, {
            className: L.SearchResults,
            children: t.map((e) =>
              (0, n.jsx)(
                E.kt,
                {
                  onSelected: () => a(e),
                  children: (0, n.jsxs)("div", {
                    style: { display: "flex", alignItems: "center" },
                    children: [
                      (0, n.jsx)("div", {
                        className: T.GameImageContainer,
                        children: (0, n.jsx)("img", {
                          src: e.GetAvatarURLFullSize(),
                          className: T.AvatarImage,
                        }),
                      }),
                      (0, D.EK)(e.GetName()),
                    ],
                  }),
                },
                "curatorresult" + e.GetClanAccountID(),
              ),
            ),
          });
        };
      var R = a(94333);
      const N = (0, d.PA)((e) => {
          const t = (function () {
            const [e, t] = u.useState(!k.Get().BHasLoadCompleted());
            return (
              u.useEffect(() => {
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
            return (0, n.jsx)(f.t, {
              string: (0, x.we)("#Loading"),
              position: "center",
              size: "medium",
            });
          const a = t.filter((e) => !e.gid_clan_event),
            s = a.filter(
              (e) =>
                e.display_name.toLocaleLowerCase().indexOf("franchise") >= 0,
            ),
            r = a.filter(
              (e) =>
                e.display_name.toLocaleLowerCase().indexOf("franchise") < 0,
            ),
            o = t.filter((e) => Boolean(e.gid_clan_event && e.hidden)),
            i = t.filter((e) => Boolean(e.gid_clan_event && !e.hidden));
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("h1", { children: "Migration Sale Tool:" }),
              (0, n.jsx)("p", {
                children:
                  "For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account.",
              }),
              (0, n.jsx)(B, { strName: "Unmigrated Franchises", records: s }),
              (0, n.jsx)(B, {
                strName: "Unmigrated Generic Sale PAges",
                records: r,
                bHideByDefault: !0,
              }),
              (0, n.jsx)(B, { strName: "Migrated but Hidden", records: o }),
              (0, n.jsx)(B, {
                strName: "Migrated and Visible",
                records: i,
                bHideByDefault: !0,
              }),
            ],
          });
        }),
        B = (e) => {
          const { strName: t, records: a, bHideByDefault: s } = e,
            [r, o] = (0, u.useState)(s);
          return (0, n.jsxs)("div", {
            className: A.SectionContainer,
            children: [
              (0, n.jsxs)("h2", {
                className: A.SectionTitle,
                onDoubleClick: () => o(!r),
                children: [
                  t,
                  " (",
                  a.length,
                  ")",
                  (0, n.jsx)("span", { children: " " }),
                  (0, n.jsx)(p.$n, {
                    onClick: () => o(!r),
                    children: r ? (0, n.jsx)(S.hz4, {}) : (0, n.jsx)(S.Xjb, {}),
                  }),
                ],
              }),
              (0, n.jsx)("hr", {}),
              Boolean(r)
                ? (0, n.jsx)(p.$n, {
                    onClick: () => o(!1),
                    children: (0, x.we)("#Sale_ShowContents"),
                  })
                : (0, n.jsx)(n.Fragment, {
                    children: a.map((e) =>
                      (0, n.jsx)(H, { record: e }, e.sale_page_id),
                    ),
                  }),
            ],
          });
        },
        H = (0, d.PA)((e) => {
          const { record: t } = e,
            a = (0, m.m1)(t.clan_account_id);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: A.RecordCtn,
                children: [
                  (0, n.jsxs)("div", {
                    className: A.RecordInfoCtn,
                    children: [
                      (0, n.jsx)("div", {
                        children: (0, n.jsx)("a", {
                          href: j.TS.STORE_BASE_URL + "sale/" + t.vanity,
                          children: (0, n.jsx)("b", {
                            children: `${t.display_name} - (${t.vanity})`,
                          }),
                        }),
                      }),
                      Boolean(a) &&
                        (0, n.jsx)("div", {
                          children: (0, n.jsxs)("a", {
                            href: a.vanity_url,
                            children: ["Sale Page part of ", a.group_name],
                          }),
                        }),
                      Boolean(t.gid_clan_event) &&
                        (0, n.jsx)("div", {
                          children: (0, n.jsx)("a", {
                            href:
                              j.TS.COMMUNITY_BASE_URL +
                              "gid/" +
                              g.b
                                .InitFromClanID(t.clan_account_id)
                                .ConvertTo64BitString() +
                              "/partnerevents/edit/" +
                              t.gid_clan_event,
                            children: `Migrated: Event Editor Links: State hidden: ${t.hidden} published: ${t.published} sale/ vanity?: ${t.valve_approved_sale_vanity_id}`,
                          }),
                        }),
                    ],
                  }),
                  Boolean(!t.gid_clan_event || (t.hidden && !t.published)) &&
                    (0, n.jsx)(p.$n, {
                      onClick: (e) =>
                        (0, _.pg)((0, n.jsx)(P, { record: t }), (0, C.uX)(e)),
                      children: "Migrate Sale Page",
                    }),
                ],
              }),
              (0, n.jsx)("hr", {}),
            ],
          });
        }),
        P = (e) => {
          const { record: t, closeModal: a } = e,
            [s, r] = (0, u.useState)(t.clan_account_id),
            [o, i] = (0, u.useState)(!1),
            [l, c] = (0, u.useState)(void 0),
            [d, h] = (0, u.useState)(!1),
            [m, p] = (0, u.useState)(t.gid_clan_event),
            [_, S] = (0, u.useState)(null);
          return (0, n.jsxs)(v.o0, {
            strTitle: "Migrate Sale page",
            strDescription: `Will migrate the sale page ${t.vanity} to the below clan `,
            bOKDisabled: !s || o,
            onOK: () => {
              i(!0),
                k
                  .Get()
                  .MigrateOrUpdateSalePage(t.sale_page_id, s, t.gid_clan_event)
                  .then(([e, t, a]) => {
                    c(e), h(t), p(a);
                  });
            },
            onCancel: a,
            children: [
              Boolean(t.clan_account_id)
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        children:
                          "Sale page already migrated. This will update the hidden page with latest migration code",
                      }),
                      (0, n.jsxs)("div", {
                        children: ["ClanID = ", t.clan_account_id],
                      }),
                      (0, n.jsxs)("div", {
                        children: ["GID = ", t.gid_clan_event],
                      }),
                    ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(y, {
                        bLimitToCreatorHome: !0,
                        strLabel:
                          "Search for Creator Home to house the Sale Event",
                        strToolTip:
                          "Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)",
                        fnSetCurator: (e) => {
                          r(e.GetClanAccountID()), S(e);
                        },
                      }),
                      Boolean(_) && (0, n.jsx)(O, { creatorHome: _ }),
                    ],
                  }),
              Boolean(o && !l) &&
                (0, n.jsx)(f.t, { position: "center", size: "medium" }),
              Boolean(l) && (0, n.jsx)("div", { children: l }),
              Boolean(d) &&
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)("a", {
                        href: j.TS.STORE_BASE_URL + "sale/" + t.vanity,
                        target: "_blank",
                        children: "Sale Page",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)("a", {
                        href:
                          j.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          g.b.InitFromClanID(s).ConvertTo64BitString() +
                          "/partnerevents/edit/" +
                          m,
                        target: "_blank",
                        children: "New Sale Page Editor",
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        O = (e) => {
          const { creatorHome: t } = e,
            a = g.b.InitFromClanID(t.GetClanAccountID()),
            s = t.GetClanAccountID();
          return t
            ? (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      "ClanID = ",
                      s,
                      " - SteamID ",
                      a.ConvertTo64BitString(),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)("a", {
                      href:
                        "https://steamsupport.valvesoftware.com/clan/overview/" +
                        a.ConvertTo64BitString(),
                      children: "Group Support Page",
                    }),
                  }),
                  Boolean(!t.BIsPartnerEventEditorEnabled()) &&
                    (0, n.jsxs)("div", {
                      children: [
                        "To use this Creator Home for the sale page migration, the process will need to enable partner event editing on the clan. This both updates the creator home but also puts a small limitation upon it.",
                        (0, n.jsx)("a", {
                          href: "https://confluence.valve.org/display/STEAM/Creator+home+and+Partner+Events+Beta",
                          target: "_blank",
                          children: "Read more about the state here.",
                        }),
                      ],
                    }),
                  (0, n.jsx)(R.hA, {
                    creatorID: t.GetCreatorHomeIdentifier(),
                    bHideCreatorType: !0,
                  }),
                ],
              })
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
          var n, s;
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
            const o =
              j.TS.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
            let i = new URLSearchParams();
            i.append("sessionid", (0, j.KC)()),
              i.append("salePageID", e),
              i.append("clanAccountID", "" + t),
              a && i.append("gidClanEvent", a);
            const d = await l().post(o, i, { withCredentials: !0 });
            if (
              200 == (null == d ? void 0 : d.status) &&
              (null === (n = null == d ? void 0 : d.data) || void 0 === n
                ? void 0
                : n.success) == h.R &&
              (null === (s = null == d ? void 0 : d.data) || void 0 === s
                ? void 0
                : s.gidClanEvent)
            )
              return (
                (0, c.h5)(() => {
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
              const e = (0, I.H)(d);
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
            const t = (0, I.H)(e);
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
                j.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetsalepagestomigrate",
              n = { sessionid: (0, j.KC)() },
              s = await l().get(a, { params: n, withCredentials: !0 });
            if (
              ((this.m_bLoadComplete = !0),
              200 == (null == s ? void 0 : s.status) &&
                (null === (e = null == s ? void 0 : s.data) || void 0 === e
                  ? void 0
                  : e.success) == h.R &&
                (null === (t = null == s ? void 0 : s.data) || void 0 === t
                  ? void 0
                  : t.data))
            )
              return (
                (0, c.h5)(() => {
                  s.data.data.forEach((e) => {
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
              const e = (0, I.H)(s);
              console.error(
                "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                  e.strErrorMsg,
                e,
              );
            }
          } catch (e) {
            const t = (0, I.H)(e);
            console.error(
              "CMigrateSaleStore.LoadSalePageMigrationInfo: caught error with " +
                t.strErrorMsg,
              t,
            );
          }
          return [];
        }
        static Get() {
          return k.s_Singleton || (k.s_Singleton = new k()), k.s_Singleton;
        }
        constructor() {
          (this.m_mapSaleIDToInfo = new Map()),
            (this.m_listSaleState = new Array()),
            (this.m_stateLoadPromise = null),
            (this.m_bLoadComplete = !1),
            (0, c.Gn)(this);
        }
      }
      (0, o.Cg)([c.sH], k.prototype, "m_mapSaleIDToInfo", void 0),
        (0, o.Cg)([c.sH], k.prototype, "m_listSaleState", void 0);
      var F = a(4796),
        U = a(95034);
      class z {
        constructor() {
          (this.m_rgApps = []),
            (this.m_rgClanAccountIDs = []),
            (this.m_nHighestAppOffsetRequested = 0),
            (this.m_nHighestClanOffsetRequested = 0),
            (0, c.Gn)(this);
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
            s = e + t - n;
          return (
            s > 0 && (this.m_mostRecentRequest = this.FetchApps(n, s, a)),
            this.m_rgApps.slice(e, e + t)
          );
        }
        async FetchApps(e, t, a, n) {
          var s;
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
              i = j.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
            let d = null;
            try {
              const a = await l().get(i, {
                params: o,
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                (null === (s = null == a ? void 0 : a.data) || void 0 === s
                  ? void 0
                  : s.success) == h.R &&
                a.data.apps
              ) {
                (0, c.h5)(() => {
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
              d = (0, I.H)(null == a ? void 0 : a.data);
            } catch (e) {
              d = (0, I.H)(e);
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
          const s = { offset: e, count: t },
            r = j.TS.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
          let o = null;
          try {
            const e = await l().get(r, {
              params: s,
              withCredentials: !0,
              cancelToken: null == a ? void 0 : a.token,
            });
            if (
              (null === (n = null == e ? void 0 : e.data) || void 0 === n
                ? void 0
                : n.success) == h.R &&
              e.data.accountids
            )
              return void (this.m_rgClanAccountIDs =
                this.m_rgClanAccountIDs.concat(e.data.accountids.map(Number)));
            o = (0, I.H)(null == e ? void 0 : e.data);
          } catch (e) {
            o = (0, I.H)(e);
          }
          console.error(
            "FetchClans: ajax request failed with error",
            o.strErrorMsg,
          );
        }
      }
      (0, o.Cg)([c.sH.shallow], z.prototype, "m_rgApps", void 0),
        (0, o.Cg)([c.sH.shallow], z.prototype, "m_rgClanAccountIDs", void 0);
      var q = a(6503),
        Y = a(80778),
        $ = a.n(Y),
        Q = a(22837);
      const K = (0, d.PA)((e) => {
          const [t, a] = (0, u.useState)(!0);
          (0, u.useEffect)(() => {
            r.mh.Init(), a(!1);
          }, []);
          const [s, o] = (0, U.QD)("start", 0),
            [i, l] = (0, U.QD)("start_appid", 0),
            [c, d] = (0, U.QD)("count", 10),
            [h, g] = (0, U.QD)("autoload", !0),
            [m, p] = (0, U.QD)("batch_size", 1),
            [v, _] = (0, U.QD)("automigrate", !1),
            [S, C] = (0, u.useState)(!1),
            [x, I] = (0, U.QD)("rolling", 0),
            [j, A] = (0, u.useState)(new Set()),
            b = (0, u.useRef)(0),
            M = z.Get().GetApps(s, c, i),
            E = 0 == x ? M : M.filter((e) => !j.has(Number(e.id))).slice(0, x),
            w = (e, t) => {
              j.has(e) ||
                (console.log("completed: ", e, t),
                j.add(e),
                (b.current += t),
                A(new Set(j)));
            };
          return (0, n.jsxs)("div", {
            className: $().MigrateToolCtn,
            children: [
              (0, n.jsx)("div", {
                className: $().ToolHeader,
                children: "Partner Events Migration Tools",
              }),
              E.map((e) =>
                (0, n.jsx)(
                  V,
                  {
                    app: e,
                    bAutoLoad: h,
                    bAutoMigrate: v || S,
                    nMigrateBatchSize: m,
                    fnOnCompletion: w,
                  },
                  e.id,
                ),
              ),
              t &&
                (0, n.jsx)(f.t, {
                  size: "xlarge",
                  position: "center",
                  string: "initializing",
                }),
              !M.length &&
                (0, n.jsx)(f.t, {
                  size: "xlarge",
                  position: "center",
                  string: "loading apps",
                }),
              (0, n.jsx)("div", {
                className: $().LoadEventsButton,
                onClick: () => {
                  C(!1), A(new Set()), o(s + c);
                },
                children: "LOAD NEXT PAGE",
              }),
              !v &&
                (0, n.jsx)("div", {
                  className: $().LoadEventsButton,
                  onClick: () => C(!0),
                  children: "MIGRATE ALL ON PAGE",
                }),
              (0, n.jsx)("div", {
                className: $().StatusMessage,
                children:
                  j.size +
                  " OF " +
                  M.length +
                  " APPS COMPLETE. #EVENTS: " +
                  b.current,
              }),
            ],
          });
        }),
        V = (0, d.PA)((e) => {
          const t = Number(e.app.id),
            [a, s] = (0, u.useState)(0),
            [o, i] = (0, u.useState)([]),
            [l, c] = (0, u.useState)(!1),
            d = (0, u.useRef)(new Set()),
            h = (0, u.useRef)(0);
          (0, u.useEffect)(() => {
            F.ac.LoadOGGClanInfoForAppID(t).then((e) => {
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
          const g = F.ac.GetOGGClanInfo(t),
            m = g ? g.group_name : e.app.name,
            p = `${j.TS.COMMUNITY_BASE_URL}games/${g ? g.vanity_url : t}/partnerevents/`,
            v = o.length,
            _ = a == v,
            S = o.filter((e) => e.BIsVisibleEvent()),
            C = S.length,
            x = S.filter(
              (e) =>
                e.bOldAnnouncement &&
                g &&
                g.clanAccountID != e.announcementClanSteamID.GetAccountID(),
            ).length,
            A = S.filter(
              (e) =>
                e.bOldAnnouncement &&
                !d.current.has(e.AnnouncementGID) &&
                (!g ||
                  g.clanAccountID == e.announcementClanSteamID.GetAccountID()),
            ),
            b = A.length,
            M = !_ && b > 0 && (null == g ? void 0 : g.clanSteamID),
            E = async () => {
              const e = a;
              s(a + 50), c(!0);
              const n = await r.mh.LoadPartnerEventsPageable(void 0, t, e, 50);
              i(o.concat(n)), c(!1);
            };
          (0, u.useEffect)(() => {
            e.bAutoLoad && _ && !l && E();
          });
          const w = (e, t) => {
              t ? (h.current += 1) : d.current.add(e);
            },
            T = async () => {
              c(!0),
                await (async function (e, t, a, n, s) {
                  for (const o of e.slice(0, t)) {
                    console.log(
                      "Migrating",
                      a,
                      o.AnnouncementGID,
                      o.GetNameWithFallback(Q.Bhc),
                      o,
                    );
                    try {
                      const e = await (0, q.e6)(o.AnnouncementGID, a, n);
                      if (e) console.warn("Already migrated to event", e);
                      else {
                        const e = r.mh.GetEditModel();
                        e.AddTag("auto_migrated"),
                          e.AddTag("hide_library_overview"),
                          e.AddTag("hide_library_detail"),
                          await r.mh.SaveModel(n),
                          console.log("Successfully migrated the event!"),
                          (o.bOldAnnouncement = !1),
                          s(o.AnnouncementGID, !0);
                      }
                    } catch (e) {
                      const t = (0, I.H)(e);
                      console.error(
                        "MigrateEvents: " + t.strErrorMsg.slice(0, 512),
                        t,
                      ),
                        s(o.AnnouncementGID, !1);
                    }
                  }
                })(A, e.nMigrateBatchSize, t, g.clanSteamID, w),
                c(!1);
            };
          return (
            (0, u.useEffect)(() => {
              e.bAutoMigrate && M && !l && T();
            }),
            (0, u.useEffect)(() => {
              _ || M || l || e.fnOnCompletion(t, h.current);
            }),
            (0, n.jsxs)("div", {
              className: $().ClanRow,
              children: [
                (0, n.jsx)("div", { className: $().ID, children: t }),
                (0, n.jsx)("a", {
                  className: $().ClanName,
                  href: p,
                  children: m,
                }),
                (0, n.jsxs)("div", {
                  className: $().Counts,
                  children: [
                    `Loaded: ${v}\tVisible: ${C}\tOld: ${b}`,
                    x > 0 &&
                      (0, n.jsx)("span", {
                        className: $().LinkedAnnouncements,
                        children: `Linked: ${x}`,
                      }),
                  ],
                }),
                _
                  ? (0, n.jsx)("div", {
                      className: $().LoadEventsButton,
                      onClick: E,
                      children: "LOAD EVENTS",
                    })
                  : l
                    ? (0, n.jsx)(f.t, { size: "small" })
                    : M
                      ? (0, n.jsx)("div", {
                          className: $().MigrateEventsButton,
                          onClick: T,
                          children: "MIGRATE EVENTS",
                        })
                      : (0, n.jsx)("div", {
                          className: $().CompleteMessage,
                          children: "NOTHING TO MIGRATE",
                        }),
              ],
            })
          );
        });
      var W = a(92757),
        X = a(91254),
        Z = (a(5977), a(97058));
      function J(e) {
        const [t, a] = u.useState(!0);
        return (
          u.useEffect(() => {
            X.O3.Init(), Promise.all([]).then(() => a(!1));
          }, []),
          t
            ? (0, n.jsx)(f.t, { position: "center", size: "medium" })
            : (0, n.jsxs)(W.dO, {
                children: [
                  (0, n.jsx)(W.qh, {
                    path: s.mQ.MigrateSaleEvents(),
                    component: N,
                  }),
                  (0, n.jsx)(W.qh, {
                    path: s.mQ.MigrateEvents(),
                    component: K,
                  }),
                  (0, n.jsx)(W.qh, { component: Z.a }),
                ],
              })
        );
      }
    },
  },
]);
