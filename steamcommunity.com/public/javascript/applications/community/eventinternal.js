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
    87699: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => c, R: () => l });
      var n = a(85556),
        r = a(54842),
        o = a(35427),
        i = a(64936),
        s = a(82071);
      class l {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, r.rC)(this);
        }
        static GetBBCodeParam(e, t, a = "") {
          const n = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return n ? n[1] : a;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            a = new Array();
          for (;;) {
            const n = t.exec(e);
            if (null === n) break;
            const r = n[1],
              i = n[2],
              s = l.GetBBCodeParam(r, "steamid"),
              c = {
                steamID: s ? new o.K(s) : void 0,
                name: l.GetBBCodeParam(r, "name"),
                title: l.GetBBCodeParam(r, "title"),
                company: l.GetBBCodeParam(r, "company"),
                photo: l.GetBBCodeParam(r, "photo"),
                bio: i,
              };
            a.push(c);
          }
          return a;
        }
        static ParseEventModelPresenters(e, t) {
          const a = e.GetDescriptionWithFallback(t);
          return l.ParseCalendarEventPresentersFromText(a);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            a = new Set();
          for (;;) {
            const n = t.exec(e);
            if (null === n) break;
            const r = n[1];
            a.add(Number(r));
          }
          return a;
        }
        static ParseEventModelAppReferences(e, t) {
          var a;
          const n = e.GetDescriptionWithFallback(t),
            r = l.ParseEventAppReferencesFromText(n);
          if (
            null === (a = e.jsondata) || void 0 === a
              ? void 0
              : a.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) r.add(t);
          return r;
        }
        BuildBroadcasterSteamIDToActiveEventMap(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = i.JW.GetTimeNowWithOverride(),
              a = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of a.rgCalendarItems)
              s.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const n = a.rgCalendarItems.map((e) =>
                s.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  o.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0,
                ),
              ),
              r = yield Promise.all(n),
              l = new Map();
            for (const e of r)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  l.has(t) ? l.get(t).push(e) : l.set(t, [e]);
            return l;
          });
        }
        IsBroadcasterAlreadyBound(e, t) {
          const a = this.m_mapBroadcasterSteamIDToEvents.get(e),
            n = a ? a.length : 0;
          if ((t ? t.length : 0) != n) return !1;
          for (let e = 0; e < n; e++) if (a[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let a = new Map();
          for (const n of e) {
            if (!n) continue;
            const e = l.ParseEventModelPresenters(n, t);
            for (const t of e)
              t.steamID && a.set(t.steamID.ConvertTo64BitString(), t);
          }
          return a;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((a, n) => {
            e.has(n) || t.push(n);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const a = new Set();
          for (const n of e) {
            l.ParseEventModelAppReferences(n, t).forEach((e) => a.add(e));
          }
          return Array.from(a);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, a) => {
            if (this.IsBroadcasterAlreadyBound(a, e)) return;
            const n = {
              m_mapPresenters: l.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: l.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(a, n),
              this.m_mapBroadcasterSteamIDToEvents.set(
                a,
                e.map((e) => e.GID),
              );
          });
        }
        SynchronizeEventsWithBroadcasts(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a = yield this.BuildBroadcasterSteamIDToActiveEventMap(e);
            this.RemoveCachedDataIfNotInMap(a),
              this.UpdateCachedDataFromEvents(a, t);
          });
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_rgAppIDs;
        }
      }
      (0, n.gn)([r.LO], l.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const c = new l();
    },
    18312: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => J });
      var n = a(760),
        r = a(74257),
        o = a(85556),
        i = a(80751),
        s = a.n(i),
        l = a(54842),
        c = a(27605),
        d = a(47427),
        m = a(35427),
        u = a(78910),
        g = a(1485),
        p = a(50898),
        h = a(90069),
        v = a(62613),
        E = a(46882),
        f = a(50423),
        _ = a(31846),
        S = a(16649),
        I = a(37563),
        C = a(19758),
        D = a(95315),
        A = a(58670),
        M = a(22042),
        B = a(10162),
        b = a(7765),
        w = a(45284),
        T = a(65534);
      const G = (e) => {
          const {
              strLabel: t,
              strToolTip: a,
              fnSetCurator: n,
              bLimitToCreatorHome: r,
            } = e,
            i = (0, d.useRef)(null),
            l = (0, d.useRef)(null),
            c = (0, d.useRef)(0),
            m = (0, d.useRef)();
          (0, d.useEffect)(
            () => () => {
              window.clearTimeout(c.current),
                i.current && i.current("SearchForCurator: unmounting"),
                l.current && l.current.Hide();
            },
            [],
          );
          const u = (0, d.useCallback)(
            (e) =>
              (0, o.mG)(void 0, void 0, void 0, function* () {
                const t = e.target.value;
                t &&
                  0 != t.trim().length &&
                  (window.clearTimeout(c.current),
                  i.current && i.current("SearchForCurator: new request"),
                  (c.current = window.setTimeout(
                    () =>
                      (0, o.mG)(void 0, void 0, void 0, function* () {
                        const e = s().CancelToken.source();
                        i.current = e.cancel;
                        try {
                          const a = yield A.bq.SearchCreatorHomeStore(t, r, e);
                          if (e.token.reason) return;
                          l.current = (0, D.yV)(
                            d.createElement(P, { list: a, fnSetCurator: n }),
                            m.current.element,
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
                          const a = (0, S.l)(t);
                          console.log(
                            "SearchForCurator.SearchCreatorHomeStore error " +
                              a.strErrorMsg,
                            a,
                          );
                        }
                      }),
                    300,
                  )));
              }),
            [n, r],
          );
          return d.createElement(
            B.SV,
            null,
            d.createElement(g.II, {
              type: "text",
              label: t,
              onChange: u,
              onBlur: (e) =>
                setTimeout(() => l.current && l.current.Hide(), 200),
              ref: m,
              tooltip: a,
            }),
          );
        },
        P = (e) => {
          const { list: t, fnSetCurator: a } = e;
          return d.createElement(
            M.xV,
            { className: T.SearchResults },
            t.map((e) =>
              d.createElement(
                M.Zo,
                {
                  key: "curatorresult" + e.GetClanAccountID(),
                  onSelected: () => a(e),
                },
                d.createElement(
                  "div",
                  { style: { display: "flex", alignItems: "center" } },
                  d.createElement(
                    "div",
                    { className: b.GameImageContainer },
                    d.createElement("img", {
                      src: e.GetAvatarURLFullSize(),
                      className: b.AvatarImage,
                    }),
                  ),
                  (0, w.HA)(e.GetName()),
                ),
              ),
            ),
          );
        };
      var y = a(43389);
      const L = (0, c.Pi)((e) => {
          const t = (function () {
            const [e, t] = d.useState(!F.Get().BHasLoadCompleted());
            return (
              d.useEffect(() => {
                F.Get().BHasLoadCompleted() ||
                  F.Get()
                    .LoadSalePageMigrationInfo()
                    .finally(() => t(!1));
              }, []),
              e ? void 0 : F.Get().GetMigrationRecords()
            );
          })();
          if (!t)
            return d.createElement(E.V, {
              string: (0, _.Xx)("#Loading"),
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
            i = t.filter((e) => Boolean(e.gid_clan_event && !e.hidden));
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
              records: i,
              bHideByDefault: !0,
            }),
          );
        }),
        R = (e) => {
          const { strName: t, records: a, bHideByDefault: n } = e,
            [r, o] = (0, d.useState)(n);
          return d.createElement(
            "div",
            { className: C.SectionContainer },
            d.createElement(
              "h2",
              { className: C.SectionTitle, onDoubleClick: () => o(!r) },
              t,
              " (",
              a.length,
              ")",
              d.createElement("span", null, " "),
              d.createElement(
                g.zx,
                { onClick: () => o(!r) },
                r ? d.createElement(v.YqJ, null) : d.createElement(v.gR, null),
              ),
            ),
            d.createElement("hr", null),
            Boolean(r)
              ? d.createElement(
                  g.zx,
                  { onClick: () => o(!1) },
                  (0, _.Xx)("#Sale_ShowContents"),
                )
              : d.createElement(
                  d.Fragment,
                  null,
                  a.map((e) =>
                    d.createElement(N, { key: e.sale_page_id, record: e }),
                  ),
                ),
          );
        },
        N = (0, c.Pi)((e) => {
          const { record: t } = e,
            a = (0, u.P4)(t.clan_account_id);
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(
              "div",
              { className: C.RecordCtn },
              d.createElement(
                "div",
                { className: C.RecordInfoCtn },
                d.createElement(
                  "div",
                  null,
                  d.createElement(
                    "a",
                    { href: I.De.STORE_BASE_URL + "sale/" + t.vanity },
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
                          I.De.COMMUNITY_BASE_URL +
                          "gid/" +
                          m.K.InitFromClanID(
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
                      (0, h.AM)(
                        d.createElement(O, { record: t }),
                        (0, f.RA)(e),
                      ),
                  },
                  "Migrate Sale Page",
                ),
            ),
            d.createElement("hr", null),
          );
        }),
        O = (e) => {
          const { record: t, closeModal: a } = e,
            [n, r] = (0, d.useState)(t.clan_account_id),
            [o, i] = (0, d.useState)(!1),
            [s, l] = (0, d.useState)(void 0),
            [c, u] = (0, d.useState)(!1),
            [g, h] = (0, d.useState)(t.gid_clan_event),
            [v, f] = (0, d.useState)(null);
          return d.createElement(
            p.uH,
            {
              strTitle: "Migrate Sale page",
              strDescription: `Will migrate the sale page ${t.vanity} to the below clan `,
              bOKDisabled: !n || o,
              onOK: () => {
                i(!0),
                  F.Get()
                    .MigrateOrUpdateSalePage(
                      t.sale_page_id,
                      n,
                      t.gid_clan_event,
                    )
                    .then(([e, t, a]) => {
                      l(e), u(t), h(a);
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
                  d.createElement(G, {
                    bLimitToCreatorHome: !0,
                    strLabel: "Search for Creator Home to house the Sale Event",
                    strToolTip:
                      "Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)",
                    fnSetCurator: (e) => {
                      r(e.GetClanAccountID()), f(e);
                    },
                  }),
                  Boolean(v) && d.createElement(k, { creatorHome: v }),
                ),
            Boolean(o && !s) &&
              d.createElement(E.V, { position: "center", size: "medium" }),
            Boolean(s) && d.createElement("div", null, s),
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
                      href: I.De.STORE_BASE_URL + "sale/" + t.vanity,
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
                        I.De.COMMUNITY_BASE_URL +
                        "gid/" +
                        m.K.InitFromClanID(n).ConvertTo64BitString() +
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
            a = m.K.InitFromClanID(t.GetClanAccountID()),
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
                d.createElement(y.oZ, {
                  creatorID: t.GetCreatorHomeIdentifier(),
                  bHideCreatorType: !0,
                }),
              )
            : null;
        };
      class F {
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
              const i =
                I.De.COMMUNITY_BASE_URL + "migrate/ajaxcreateupdatesalepage";
              let c = new URLSearchParams();
              c.append("sessionid", I.De.SESSIONID),
                c.append("salePageID", e),
                c.append("clanAccountID", "" + t),
                a && c.append("gidClanEvent", a);
              const d = yield s().post(i, c, { withCredentials: !0 });
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
                  (0, l.z)(() => {
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
                const e = (0, S.l)(d);
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
              const t = (0, S.l)(e);
              console.error(
                "CMigrateSaleStore.MigrateOrUpdateSalePage: caught error with " +
                  t.strErrorMsg,
                t,
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
                  I.De.COMMUNITY_BASE_URL + "migrate/ajaxgetsalepagestomigrate",
                n = { sessionid: I.De.SESSIONID },
                r = yield s().get(a, { params: n, withCredentials: !0 });
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
                  (0, l.z)(() => {
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
                const e = (0, S.l)(r);
                console.error(
                  "CMigrateSaleStore.LoadSalePageMigrationInfo: failed with " +
                    e.strErrorMsg,
                  e,
                );
              }
            } catch (e) {
              const t = (0, S.l)(e);
              console.error(
                "CMigrateSaleStore.LoadSalePageMigrationInfo: caught error with " +
                  t.strErrorMsg,
                t,
              );
            }
            return [];
          });
        }
        static Get() {
          return (
            F.s_Singleton ||
              ((F.s_Singleton = new F()),
              ("dev" != I.De.WEB_UNIVERSE && "beta" != I.De.WEB_UNIVERSE) ||
                (window.g_MigrateSaleStore = F.s_Singleton)),
            F.s_Singleton
          );
        }
        constructor() {
          (this.m_mapSaleIDToInfo = new Map()),
            (this.m_listSaleState = new Array()),
            (this.m_stateLoadPromise = null),
            (this.m_bLoadComplete = !1),
            (0, l.rC)(this);
        }
      }
      (0, o.gn)([l.LO], F.prototype, "m_mapSaleIDToInfo", void 0),
        (0, o.gn)([l.LO], F.prototype, "m_listSaleState", void 0);
      var H = a(93243),
        x = a(42855),
        U = a(71472);
      class z {
        constructor() {
          (this.m_rgApps = []),
            (this.m_rgClanAccountIDs = []),
            (this.m_nHighestAppOffsetRequested = 0),
            (this.m_nHighestClanOffsetRequested = 0),
            (0, l.rC)(this);
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
        FetchApps(e, t, a, n) {
          var r;
          return (0, o.mG)(this, void 0, void 0, function* () {
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
                yield this.m_mostRecentRequest;
              o > 0;

            ) {
              const t = Math.min(o, 100),
                i = { offset: e, nBatchSize: t, start_appid: a },
                c = I.De.COMMUNITY_BASE_URL + "migrate/ajaxgetallapps";
              let d = null;
              try {
                const a = yield s().get(c, {
                  params: i,
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
                  (0, l.z)(() => {
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
                d = (0, S.l)(null == a ? void 0 : a.data);
              } catch (e) {
                d = (0, S.l)(e);
              }
              throw new Error(
                "ajax request failed with error " +
                  d.errorCode +
                  ':"' +
                  d.strErrorMsg +
                  '"',
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
              o = I.De.COMMUNITY_BASE_URL + "migrate/ajaxgetallclans";
            let i = null;
            try {
              const e = yield s().get(o, {
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
                    e.data.accountids.map(Number),
                  ));
              i = (0, S.l)(null == e ? void 0 : e.data);
            } catch (e) {
              i = (0, S.l)(e);
            }
            console.error(
              "FetchClans: ajax request failed with error",
              i.strErrorMsg,
            );
          });
        }
      }
      (0, o.gn)([l.LO.shallow], z.prototype, "m_rgApps", void 0),
        (0, o.gn)([l.LO.shallow], z.prototype, "m_rgClanAccountIDs", void 0);
      var W = a(73941),
        V = a(46452),
        q = a.n(V);
      const Y = (0, c.Pi)((e) => {
          const [t, a] = (0, d.useState)(!0);
          (0, d.useEffect)(() => {
            Promise.all([x.cb.InitGlobal(), r.wk.Init()]).then(() => a(!1));
          }, []);
          const [n, o] = (0, U.Ar)("start", 0),
            [i, s] = (0, U.Ar)("start_appid", 0),
            [l, c] = (0, U.Ar)("count", 10),
            [m, u] = (0, U.Ar)("autoload", !0),
            [g, p] = (0, U.Ar)("batch_size", 1),
            [h, v] = (0, U.Ar)("automigrate", !1),
            [f, _] = (0, d.useState)(!1),
            [S, I] = (0, U.Ar)("rolling", 0),
            [C, D] = (0, d.useState)(new Set()),
            A = (0, d.useRef)(0),
            M = z.Get().GetApps(n, l, i),
            B = 0 == S ? M : M.filter((e) => !C.has(Number(e.id))).slice(0, S),
            b = (e, t) => {
              C.has(e) ||
                (console.log("completed: ", e, t),
                C.add(e),
                (A.current += t),
                D(new Set(C)));
            };
          return d.createElement(
            "div",
            { className: q().MigrateToolCtn },
            d.createElement(
              "div",
              { className: q().ToolHeader },
              "Partner Events Migration Tools",
            ),
            B.map((e) =>
              d.createElement(j, {
                key: e.id,
                app: e,
                bAutoLoad: m,
                bAutoMigrate: h || f,
                nMigrateBatchSize: g,
                fnOnCompletion: b,
              }),
            ),
            t &&
              d.createElement(E.V, {
                size: "xlarge",
                position: "center",
                string: "initializing",
              }),
            !M.length &&
              d.createElement(E.V, {
                size: "xlarge",
                position: "center",
                string: "loading apps",
              }),
            d.createElement(
              "div",
              {
                className: q().LoadEventsButton,
                onClick: () => {
                  _(!1), D(new Set()), o(n + l);
                },
              },
              "LOAD NEXT PAGE",
            ),
            !h &&
              d.createElement(
                "div",
                { className: q().LoadEventsButton, onClick: () => _(!0) },
                "MIGRATE ALL ON PAGE",
              ),
            d.createElement(
              "div",
              { className: q().StatusMessage },
              C.size +
                " OF " +
                M.length +
                " APPS COMPLETE. #EVENTS: " +
                A.current,
            ),
          );
        }),
        j = (0, c.Pi)((e) => {
          const t = Number(e.app.id),
            [a, n] = (0, d.useState)(0),
            [i, s] = (0, d.useState)([]),
            [l, c] = (0, d.useState)(!1),
            m = (0, d.useRef)(new Set()),
            u = (0, d.useRef)(0);
          (0, d.useEffect)(() => {
            H.sV.LoadOGGClanInfoForAppID(t).then((e) => {
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
          const g = H.sV.GetOGGClanInfo(t),
            p = g ? g.group_name : e.app.name,
            h = `${I.De.COMMUNITY_BASE_URL}games/${
              g ? g.vanity_url : t
            }/partnerevents/`,
            v = i.length,
            f = a == v,
            _ = i.filter((e) => e.BIsVisibleEvent()),
            C = _.length,
            D = _.filter(
              (e) =>
                e.bOldAnnouncement &&
                g &&
                g.clanAccountID != e.announcementClanSteamID.GetAccountID(),
            ).length,
            A = _.filter(
              (e) =>
                e.bOldAnnouncement &&
                !m.current.has(e.AnnouncementGID) &&
                (!g ||
                  g.clanAccountID == e.announcementClanSteamID.GetAccountID()),
            ),
            M = A.length,
            B = !f && M > 0 && (null == g ? void 0 : g.clanSteamID),
            b = () =>
              (0, o.mG)(void 0, void 0, void 0, function* () {
                const e = a;
                n(a + 50), c(!0);
                const o = yield r.wk.LoadPartnerEventsPageable(
                  void 0,
                  t,
                  e,
                  50,
                );
                s(i.concat(o)), c(!1);
              });
          (0, d.useEffect)(() => {
            e.bAutoLoad && f && !l && b();
          });
          const w = (e, t) => {
              t ? (u.current += 1) : m.current.add(e);
            },
            T = () =>
              (0, o.mG)(void 0, void 0, void 0, function* () {
                c(!0),
                  yield (function (e, t, a, n, i) {
                    return (0, o.mG)(this, void 0, void 0, function* () {
                      for (const o of e.slice(0, t)) {
                        console.log(
                          "Migrating",
                          a,
                          o.AnnouncementGID,
                          o.GetNameWithFallback(0),
                          o,
                        );
                        try {
                          const e = yield (0, W.HO)(o.AnnouncementGID, a, n);
                          if (e) console.warn("Already migrated to event", e);
                          else {
                            const e = r.wk.GetEditModel();
                            e.AddTag("auto_migrated"),
                              e.AddTag("hide_library_overview"),
                              e.AddTag("hide_library_detail"),
                              yield r.wk.SaveModel(n),
                              console.log("Successfully migrated the event!"),
                              (o.bOldAnnouncement = !1),
                              i(o.AnnouncementGID, !0);
                          }
                        } catch (e) {
                          const t = (0, S.l)(e);
                          console.error(
                            "MigrateEvents: " + t.strErrorMsg.slice(0, 512),
                            t,
                          ),
                            i(o.AnnouncementGID, !1);
                        }
                      }
                    });
                  })(A, e.nMigrateBatchSize, t, g.clanSteamID, w),
                  c(!1);
              });
          return (
            (0, d.useEffect)(() => {
              e.bAutoMigrate && B && !l && T();
            }),
            (0, d.useEffect)(() => {
              f || B || l || e.fnOnCompletion(t, u.current);
            }),
            d.createElement(
              "div",
              { className: q().ClanRow },
              d.createElement("div", { className: q().ID }, t),
              d.createElement("a", { className: q().ClanName, href: h }, p),
              d.createElement(
                "div",
                { className: q().Counts },
                `Loaded: ${v}\tVisible: ${C}\tOld: ${M}`,
                D > 0 &&
                  d.createElement(
                    "span",
                    { className: q().LinkedAnnouncements },
                    `Linked: ${D}`,
                  ),
              ),
              f
                ? d.createElement(
                    "div",
                    { className: q().LoadEventsButton, onClick: b },
                    "LOAD EVENTS",
                  )
                : l
                ? d.createElement(E.V, { size: "small" })
                : B
                ? d.createElement(
                    "div",
                    { className: q().MigrateEventsButton, onClick: T },
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
      var $ = a(8285),
        K = a(82071),
        Z = (a(34345), a(69406));
      function J(e) {
        const [t, a] = d.useState(!0);
        return (
          d.useEffect(() => {
            K.j1.Init(), Promise.all([]).then(() => a(!1));
          }, []),
          t
            ? d.createElement(E.V, { position: "center", size: "medium" })
            : d.createElement(
                $.rs,
                null,
                d.createElement($.AW, {
                  path: n.wZ.MigrateSaleEvents(),
                  component: L,
                }),
                d.createElement($.AW, {
                  path: n.wZ.MigrateEvents(),
                  component: Y,
                }),
                d.createElement($.AW, { component: Z.R }),
              )
        );
      }
    },
  },
]);
