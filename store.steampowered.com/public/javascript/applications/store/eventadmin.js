/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    "/EF7": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("1fPh"),
        r = n("mrSG"),
        i = n("2l+k"),
        s = n("65aj"),
        o = n("lkRc"),
        l = n("vDqi"),
        c = n.n(l),
        d = (n("AiWL"), n("OS6B"));
      class m {
        constructor() {
          this.m_rgRSSEnabledClans = [];
        }
        GetAllRSSEnabledClans() {
          return this.m_rgRSSEnabledClans;
        }
        GetTrustedEnabledClans(e) {
          return this.m_rgRSSEnabledClans
            .filter((t) => t.is_trusted_press == e)
            .map((e) => e.clan_accoundid);
        }
        static Get() {
          return (
            m.s_Singleton || ((m.s_Singleton = new m()), m.s_Singleton.Init()),
            m.s_Singleton
          );
        }
        Init() {
          let e = Object(o.h)("rssaccountinfo", "application_config");
          this.ValidateRSSAccountConfig(e) && (this.m_rgRSSEnabledClans = e);
        }
        ValidateRSSAccountConfig(e) {
          const t = e;
          return (
            t &&
            Array.isArray(t) &&
            t.length > 0 &&
            "object" == typeof t[0] &&
            "number" == typeof t[0].clan_accoundid
          );
        }
        LoadKnownAllRSSInfo() {
          return Object(r.a)(this, void 0, void 0, function* () {
            const e = new Array(),
              t = i.a.Get();
            this.m_rgRSSEnabledClans.forEach((n) => {
              t.BHasClanIDLoaded(n.clan_accoundid) ||
                e.push(t.QueueCuratorAdminInfoLoad(n.clan_accoundid));
            }),
              yield Promise.all(e);
          });
        }
        ExtractWithoutRSSAutomation() {
          const e = [],
            t = i.a.Get();
          return (
            this.m_rgRSSEnabledClans.forEach((n) => {
              const a = t.GetRSSAdminForClanAccountID(n.clan_accoundid);
              a && !a.BIsAutomationEnabled() && e.push(n.clan_accoundid);
            }),
            e
          );
        }
        HintLoadAccounts() {
          return Object(r.a)(this, void 0, void 0, function* () {});
        }
        ReindexClanEventsAndReloadAccount(e) {
          var t;
          return Object(r.a)(this, void 0, void 0, function* () {
            const n =
                o.d.STORE_BASE_URL + "events_admin/ajaxflushandreindexrss",
              a = new FormData();
            a.set("sessionid", o.d.SESSIONID), a.append("clanids", "" + e);
            try {
              let e = yield c.a.post(n, a, { withCredentials: !0 });
              if (
                1 ==
                (null === (t = null == e ? void 0 : e.data) || void 0 === t
                  ? void 0
                  : t.success)
              )
                return !0;
            } catch (e) {
              const t = Object(d.a)(e);
              console.error(
                "Failed to ReindexClanEventsAndReloadAccount: " + t.strErrorMsg,
                t
              );
            }
            return !1;
          });
        }
      }
      var u = n("wjMc"),
        _ = n("TyAF"),
        p = n("q1tI"),
        h = n.n(p),
        b = n("EC67"),
        v = n("kLLr"),
        g = n("TQGK"),
        E = n("Mgs7"),
        S = n("IjL/"),
        f = n("BRUS"),
        C = n("Jqb/"),
        O = n("ka0M"),
        w = n("6Y59"),
        R = n("0OaU"),
        y = n("5E+2"),
        j = n("uuth"),
        M = n("exH9"),
        A = n("X3Ds"),
        T = n("TLQK"),
        B = n("WGPV"),
        I = n.n(B);
      n("uobO");
      const D = Object(b.j)((e) => {
          const [t, n] = Object(p.useState)(!0);
          if (
            (Object(p.useEffect)(() => {
              Object(r.a)(void 0, void 0, void 0, function* () {
                g.a.Init(), yield m.Get().HintLoadAccounts(), n(!1);
              });
            }, []),
            t)
          )
            return h.a.createElement(R.a, {
              string: Object(T.f)("#Loading"),
              size: "medium",
            });
          const a = m.Get().GetTrustedEnabledClans(!0),
            i = m.Get().GetTrustedEnabledClans(!1);
          return h.a.createElement(
            "div",
            null,
            h.a.createElement(
              S.a,
              null,
              h.a.createElement(
                "h1",
                null,
                Object(T.f)("#RSSModeration_Title")
              ),
              h.a.createElement(P, null),
              h.a.createElement(U, {
                rgClanIDs: m
                  .Get()
                  .GetAllRSSEnabledClans()
                  .map((e) => e.clan_accoundid),
              }),
              h.a.createElement(L, {
                rgClanIDs: a,
                strTitle: Object(T.f)("#RSSModeration_TrustTitle"),
              }),
              h.a.createElement(L, {
                rgClanIDs: i,
                strTitle: Object(T.f)("#RSSModeration_RestTitle"),
              })
            )
          );
        }),
        P = Object(_.a)((e) => {
          const [t, n] = Object(p.useState)(!1),
            [a, i] = Object(p.useState)(void 0);
          return t
            ? h.a.createElement(R.a, {
                string: Object(T.f)("#Loading"),
                size: "medium",
              })
            : void 0 !== a
            ? Boolean(a.length > 0)
              ? h.a.createElement(L, {
                  rgClanIDs: a,
                  strTitle: Object(T.f)("#RSSModeration_InactiveAutomation"),
                })
              : h.a.createElement(
                  "div",
                  null,
                  Object(T.f)("#RSSModreation_AllAutomationEnabled")
                )
            : h.a.createElement(
                E.f,
                {
                  onClick: () =>
                    Object(r.a)(void 0, void 0, void 0, function* () {
                      n(!0),
                        yield m.Get().LoadKnownAllRSSInfo(),
                        i(m.Get().ExtractWithoutRSSAutomation()),
                        n(!1);
                    }),
                },
                Object(T.f)("#RSSModeration_FindInActive"),
                " "
              );
        }),
        L = (e) => {
          const { rgClanIDs: t, strTitle: n } = e,
            [a, r] = Object(p.useState)(!1);
          let i = null;
          return (
            a ||
              (i = t.map((e) =>
                h.a.createElement(G, { key: e, clanAccountID: e })
              )),
            h.a.createElement(
              "div",
              { className: Object(M.a)(I.a.SectionContainer) },
              h.a.createElement(
                "h2",
                {
                  className: Object(M.a)(I.a.ModSectionTitle),
                  onDoubleClick: () => r(!a),
                },
                n,
                h.a.createElement("span", null, " "),
                h.a.createElement(
                  E.f,
                  { className: I.a.ResizeButton, onClick: () => r(!a) },
                  a
                    ? h.a.createElement(w.Q, null)
                    : h.a.createElement(w.T, null)
                )
              ),
              a &&
                h.a.createElement(
                  E.f,
                  { onClick: () => r(!1) },
                  Object(T.f)("#Sale_ShowContents")
                ),
              i
            )
          );
        },
        G = Object(_.a)((e) => {
          const { clanAccountID: t } = e;
          return g.a.BHasClanInfoLoadedByAccountID(t) &&
            i.a.Get().BHasClanIDLoaded(t)
            ? h.a.createElement(k, {
                clanInfo: g.a.GetClanInfoByClanAccountID(t),
                rssAdminInfo: i.a.Get().GetRSSAdminForClanAccountID(t),
              })
            : h.a.createElement(F, { clanAccountID: t });
        }),
        F = (e) => {
          const { clanAccountID: t } = e,
            n = "-500px";
          return h.a.createElement(
            j.a,
            {
              onEnter: () =>
                Object(r.a)(void 0, void 0, void 0, function* () {
                  const e = v.a.InitFromClanID(t);
                  yield Promise.all([
                    g.a.LoadClanInfoForClanSteamID(e),
                    i.a.Get().QueueCuratorAdminInfoLoad(t),
                  ]);
                }),
              topOffset: n,
              bottomOffset: n,
            },
            h.a.createElement(
              "div",
              { className: I.a.TileContainer },
              h.a.createElement("div", null, Object(T.f)("#Loading"), " - ", t)
            )
          );
        },
        k = (e) => {
          const { clanInfo: t, rssAdminInfo: n } = e,
            [a, r] = Object(p.useState)(!1),
            s = o.d.STORE_BASE_URL + "newshub/group/" + t.clanAccountID,
            l =
              o.d.STORE_BASE_URL +
              "curator/" +
              t.clanAccountID +
              "/admin/manage_rss",
            c = o.d.COMMUNITY_BASE_URL + "group/" + t.clanAccountID,
            d =
              "https://steamsupport.valvesoftware.com/clan/overview/" +
              v.a.InitFromClanID(t.clanAccountID).ConvertTo64BitString(),
            m = i.a.Get().GetRSSAdminStats(t.clanAccountID);
          return h.a.createElement(
            "div",
            { className: Object(M.a)(I.a.TileContainer) },
            h.a.createElement(
              "div",
              { className: Object(M.a)(I.a.TileSpread) },
              h.a.createElement(
                "div",
                null,
                h.a.createElement(
                  "div",
                  null,
                  t.group_name,
                  " - ",
                  t.clanAccountID
                ),
                h.a.createElement(
                  "div",
                  null,
                  h.a.createElement(
                    "div",
                    null,
                    Object(T.f)("#CuratorAdmin_RSSFeed"),
                    ":"
                  ),
                  h.a.createElement("a", { href: n.GetRSSUrl() }, n.GetRSSUrl())
                ),
                Boolean(m) &&
                  h.a.createElement(
                    "div",
                    null,
                    h.a.createElement(
                      "div",
                      null,
                      Object(T.f)(
                        "#RSSModeration_TotalEvents",
                        m.total_event_count.toLocaleString()
                      )
                    ),
                    h.a.createElement(
                      "div",
                      null,
                      Object(T.f)(
                        "#RSSModeration_RSSEvents",
                        m.rss_event_count.toLocaleString()
                      )
                    )
                  ),
                h.a.createElement(
                  E.f,
                  { onClick: () => r(!a) },
                  Object(T.f)(
                    a
                      ? "#Bbcode_Expand_Details_Expanded"
                      : "#Bbcode_Expand_Details_Collapsed"
                  )
                )
              ),
              h.a.createElement(
                "div",
                null,
                h.a.createElement(
                  "ul",
                  null,
                  h.a.createElement(
                    "li",
                    null,
                    h.a.createElement(
                      "a",
                      { href: s },
                      Object(T.f)("#EventDisplay_NewsHubSubtitle")
                    )
                  ),
                  h.a.createElement(
                    "li",
                    null,
                    h.a.createElement(
                      "a",
                      { href: l },
                      Object(T.f)("#CuratorAdmin_RSSFeed_title")
                    )
                  ),
                  h.a.createElement(
                    "li",
                    null,
                    h.a.createElement(
                      "a",
                      { href: c },
                      Object(T.f)("#RSSModeration_GroupPage")
                    )
                  ),
                  h.a.createElement(
                    "li",
                    null,
                    h.a.createElement(
                      "a",
                      { href: d },
                      Object(T.f)("#RSSModeration_SupportPage")
                    )
                  ),
                  h.a.createElement(
                    "li",
                    null,
                    h.a.createElement(U, { rgClanIDs: [t.clanAccountID] })
                  )
                )
              ),
              h.a.createElement(
                "div",
                { className: I.a.CreatorCtn },
                h.a.createElement(f.a, {
                  bHideCreatorType: !0,
                  creatorID: {
                    name: null,
                    clan_account_id: t.clanAccountID,
                    type: "developer",
                  },
                  bSmallFormat: !0,
                })
              )
            ),
            Boolean(a) &&
              h.a.createElement(
                h.a.Fragment,
                null,
                Boolean(n.BHasSavedRSSURL())
                  ? h.a.createElement(u.a, {
                      strRssURL: n.GetRSSUrl(),
                      admin: n,
                    })
                  : h.a.createElement(
                      "div",
                      null,
                      Object(T.f)("#RSSModeration_NoRSSFeed")
                    )
              )
          );
        },
        U = (e) =>
          h.a.createElement(
            y.a,
            {
              toolTipContent: Object(T.f)(
                "#RSSModeration_ReindexAndReload_ttip"
              ),
            },
            h.a.createElement(
              E.f,
              {
                onClick: (t) => {
                  Object(O.d)(
                    h.a.createElement(N, Object.assign({}, e)),
                    Object(A.o)(t)
                  );
                },
              },
              Object(T.f)("#RSSModeration_ReindexAndReload")
            )
          ),
        N = (e) => {
          const [t, n] = Object(p.useState)(void 0),
            [a, i] = Object(p.useState)(!1),
            [s, o] = Object(p.useState)(void 0),
            l = () => e.closeModal && e.closeModal();
          return h.a.createElement(
            C.i,
            { onEscKeypress: l },
            h.a.createElement(
              E.h,
              null,
              h.a.createElement(
                E.y,
                null,
                " ",
                Object(T.f)("#RSSModeration_ReindexAndReload"),
                " "
              ),
              h.a.createElement(
                E.d,
                null,
                h.a.createElement(
                  E.e,
                  null,
                  void 0 === t
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(
                          "span",
                          null,
                          Object(T.f)(
                            "#RSSModeration_Reindex_Verify",
                            e.rgClanIDs.length
                          )
                        ),
                        h.a.createElement(
                          E.F,
                          {
                            onClick: () =>
                              Object(r.a)(void 0, void 0, void 0, function* () {
                                let t = 0;
                                n(t);
                                for (let a = 0; a < e.rgClanIDs.length; ++a) {
                                  let r = e.rgClanIDs[a];
                                  if (
                                    !(yield m
                                      .Get()
                                      .ReindexClanEventsAndReloadAccount(r))
                                  ) {
                                    o(Object(T.f)("#Error_Generic_Label"));
                                    break;
                                  }
                                  (t += 1), n(t);
                                }
                                i(!0);
                              }),
                          },
                          Object(T.f)("#Button_Continue")
                        )
                      )
                    : h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(
                          "span",
                          null,
                          Object(T.f)(
                            "#RSSModeration_Reindex_Action",
                            t,
                            e.rgClanIDs.length
                          )
                        ),
                        a
                          ? h.a.createElement(
                              "span",
                              null,
                              Object(T.f)(
                                "#EventEditor_ImportFromHTML_ConvertFinished"
                              )
                            )
                          : h.a.createElement(R.a, {
                              size: "small",
                              string: Object(T.f)("#Updating"),
                            })
                      ),
                  Boolean(s) && h.a.createElement("span", null, s, " ")
                ),
                h.a.createElement(
                  E.q,
                  null,
                  h.a.createElement(
                    E.f,
                    { onClick: l },
                    Object(T.f)(a ? "#Button_OK" : "#Button_Cancel")
                  )
                )
              )
            )
          );
        };
      var z = n("6oCP"),
        H = n("opsS"),
        x = n("2vnA"),
        W = (n("wd/R"), n("mgoM"), n("3+zv"));
      class q {
        constructor() {
          (this.m_mapEventGIDToSolrData = new Map()),
            (this.m_listEvents = new Array());
        }
        BHasSolrEvent(e) {
          return this.m_mapEventGIDToSolrData.has(e);
        }
        GetAllSolrEvents() {
          return this.m_listEvents;
        }
        static Get() {
          return q.s_Singleton || (q.s_Singleton = new q()), q.s_Singleton;
        }
        ClearAllSolrEvents() {
          (this.m_mapEventGIDToSolrData = new Map()),
            (this.m_listEvents = new Array());
        }
        LoadPartnerEventForQueryIncremental(
          e,
          t = 0,
          n = 10,
          a,
          i,
          s,
          o,
          l,
          c
        ) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const r = yield this.GetLatestPartnerEvents(
              e,
              t,
              n,
              a,
              i,
              s,
              o,
              l,
              c
            );
            let d = new Array();
            return (
              Object(x.G)(() => {
                r.forEach((e) => {
                  this.m_mapEventGIDToSolrData.has(e.unique_id) ||
                    (d.push(e),
                    this.m_mapEventGIDToSolrData.set(e.unique_id, e),
                    this.m_listEvents.push(e));
                });
              }),
              d
            );
          });
        }
        GetLatestPartnerEvents(e, t = 0, n = 10, a, i, s, l, d, m, u, _, p) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const r =
                o.d.STORE_BASE_URL + "events_admin/ajaxgetlatestpartnerevents",
              h = {
                page: t,
                count: n,
                date: l,
                appids: void 0 === a ? void 0 : a.join(","),
                required_tags: void 0 === i ? void 0 : i.join(","),
                exclude_tags: void 0 === s ? void 0 : s.join(","),
                eventtypefilter: void 0 === d ? void 0 : d.join(","),
                orderByVisibility: m || void 0,
                creator_home_clan_id: void 0 === u ? void 0 : u.join(","),
                showUnpublished: void 0 === p ? void 0 : p,
                term: void 0 === _ ? void 0 : _,
              },
              b = yield c.a.get(r, {
                params: h,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
            return b.data ? b.data.docs : [];
          });
        }
      }
      Object(r.b)([x.C], q.prototype, "m_mapEventGIDToSolrData", void 0),
        Object(r.b)([x.C], q.prototype, "m_listEvents", void 0),
        Object(r.b)([x.k], q.prototype, "ClearAllSolrEvents", null);
      var V = n("U+Q5");
      class Q {
        constructor() {
          (this.m_backfill = void 0),
            (this.m_mapEventGIDProcessed = new Map()),
            (this.m_vecEventGID = new Array()),
            (this.m_bBackfillInProgress = !1),
            (this.m_nProcessed = 0),
            (this.m_nSuccesses = 0),
            (this.m_nFailures = 0),
            (this.m_nWarning = 0),
            (this.m_nSkipped = 0);
        }
        GetBackfill() {
          return this.m_backfill;
        }
        SetBackfill(e) {
          this.m_backfill = e;
        }
        StartBackfill(e) {
          (this.m_backfill = e), (this.m_bBackfillInProgress = !0);
        }
        CompleteBackfill(e) {
          (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
        }
        BIsBackkFillInProgress() {
          return this.m_bBackfillInProgress;
        }
        GetEventBackfillProgress() {
          return this.m_mapEventGIDProcessed;
        }
        CreateOrGetBackfillProgess(e) {
          return (
            this.m_mapEventGIDProcessed.has(e) ||
              (this.m_mapEventGIDProcessed.set(e, { bProcessing: !1 }),
              this.m_vecEventGID.push(e)),
            this.m_mapEventGIDProcessed.get(e)
          );
        }
        BHasProgress(e) {
          return this.m_mapEventGIDProcessed.has(e);
        }
        GetBackfillGIDs() {
          return this.m_vecEventGID;
        }
        CloseProgress(e, t) {
          (this.m_nProcessed += 1),
            t.bAlreadyProcessed || t.bSkipped
              ? (this.m_nSkipped += 1)
              : t.bSucceeded
              ? (this.m_nSuccesses += 1)
              : t.bFailed && (this.m_nFailures += 1),
            t.bWarning && (this.m_nWarning += 1),
            this.m_mapEventGIDProcessed.set(e, t);
        }
      }
      Object(r.b)([x.C], Q.prototype, "m_backfill", void 0),
        Object(r.b)([x.C], Q.prototype, "m_mapEventGIDProcessed", void 0),
        Object(r.b)([x.C], Q.prototype, "m_bBackfillInProgress", void 0),
        Object(r.b)([x.C], Q.prototype, "m_nProcessed", void 0),
        Object(r.b)([x.C], Q.prototype, "m_nSuccesses", void 0),
        Object(r.b)([x.C], Q.prototype, "m_nFailures", void 0),
        Object(r.b)([x.C], Q.prototype, "m_nWarning", void 0),
        Object(r.b)([x.C], Q.prototype, "m_nSkipped", void 0),
        Object(r.b)([x.k], Q.prototype, "StartBackfill", null),
        Object(r.b)([x.k], Q.prototype, "CompleteBackfill", null),
        Object(r.b)([x.k], Q.prototype, "CloseProgress", null);
      const K = new Q();
      var Y = n("vNkc"),
        J = n("Nsq5"),
        X = n("mB/g");
      let Z = class extends p.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = c.a.CancelToken.source()),
            (this.m_nImageID = 0),
            (this.m_mapArtworkResizeSuccess = new Map()),
            (this.state = { eBackfillState: void 0 });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "EventBackfillLanding component unmounted"
          );
        }
        OnArtworkResizeBackfill() {
          null == this.state.eBackfillState &&
            this.setState(
              { eBackfillState: "started" },
              this.BeginArtworkResize
            );
        }
        BeginArtworkResize() {
          this.m_mapArtworkResizeSuccess.set("capsule", 0),
            this.m_mapArtworkResizeSuccess.set("spotlight", 0),
            this.m_mapArtworkResizeSuccess.set("background", 0),
            this.RunArtworkResizeBackfill()
              .then(() => this.setState({ eBackfillState: "success" }))
              .catch((e) => {
                let t = Object(d.a)(e);
                console.error(
                  "EventBackfillLanding: error " + t.strErrorMsg,
                  t
                ),
                  this.setState({ eBackfillState: "error" });
              });
        }
        GetImageInfo(e, t, n = "") {
          return Object(r.a)(this, void 0, void 0, function* () {
            const a = V.a.GetExtensionTypeFromURL(t),
              r = V.a.GetHashFromHashAndExt(t) + n;
            return V.e.AsyncGetImageResolution(
              e,
              r,
              a,
              this.m_cancelSignal,
              !0
            );
          });
        }
        HandleErrorFatal(e, t, n, a) {
          let r = Object(d.a)(t),
            i =
              "EventBackfillLanding: " +
              n +
              " on GID " +
              e +
              " : " +
              r.strErrorMsg;
          console.error(i, r),
            a
              ? ((a.bFailed = !0), (a.strMessage = i), K.CloseProgress(e, a))
              : K.CompleteBackfill("resize_image");
        }
        HandleResizeForImageType(e, t, n, a, i) {
          return Object(r.a)(this, void 0, void 0, function* () {
            for (let r = 0; r < e.length && r < 30; ++r)
              if (e[r] && e[r].length > 0) {
                let s = e[r],
                  o = V.a.GetExtensionTypeFromURL(s);
                const l = new v.a(t.clan_steamid);
                if (o) {
                  let e = yield this.GetImageInfo(l, s).catch(
                    (e) => (
                      this.HandleErrorFatal(
                        null,
                        e,
                        "GetImageInfo Original",
                        n
                      ),
                      { height: 0, width: 0, success: 2 }
                    )
                  );
                  if (1 == e.success && Object(J.d)(e.width, e.height, a)) {
                    if (
                      1 ==
                      (yield this.GetImageInfo(l, s, i).catch(
                        (e) => (
                          this.HandleErrorFatal(
                            null,
                            e,
                            "GetImageInfo Resize",
                            n
                          ),
                          { height: 0, width: 0, success: 2 }
                        )
                      )).success
                    )
                      n.bAlreadyProcessed = !0;
                    else {
                      n.bProcessing = !0;
                      let e = V.a.GetHashFromHashAndExt(s),
                        t = V.a.GetExtensionStringFromHashAndExt(s),
                        r = V.d.GetResizeDimension(a);
                      yield V.b
                        .SendResizeRequest(this.m_cancelSignal, l, e, t, r)
                        .then((e) => {
                          console.log("success on the resize request"),
                            e == r.length
                              ? ((n.bSucceeded = !0),
                                this.m_mapArtworkResizeSuccess.set(
                                  a,
                                  this.m_mapArtworkResizeSuccess.get(a) + 1
                                ))
                              : ((n.bFailed = !0),
                                (n.strMessage =
                                  "Did not resize all: " +
                                  a +
                                  " " +
                                  e +
                                  " / " +
                                  r.length));
                        })
                        .catch((e) => {
                          n.bFailed = !0;
                          let t = Object(d.a)(e);
                          (n.strMessage = t.strErrorMsg),
                            console.error("Resize: " + t.strErrorMsg, t);
                        });
                    }
                  } else n.bSkipped = !0;
                } else n.bSkipped = !0;
              }
          });
        }
        RunArtworkResizeBackfill() {
          return Object(r.a)(this, void 0, void 0, function* () {
            K.StartBackfill("resize_image");
            let e = 0;
            for (; K.BIsBackkFillInProgress(); ) {
              let t = yield q
                .Get()
                .LoadPartnerEventForQueryIncremental(this.m_cancelSignal, e, 25)
                .catch((e) =>
                  this.HandleErrorFatal(
                    null,
                    e,
                    "LoadPartnerEventForQueryIncremental"
                  )
                );
              if (!t || 0 == t.length) {
                K.CompleteBackfill("resize_image"),
                  console.log("Compelted the backfill");
                break;
              }
              e += t.length;
              for (let e = 0; e < t.length; ++e) {
                let n = t[e],
                  a = K.CreateOrGetBackfillProgess(n.unique_id);
                if (!n.announcement_gid || 0 == n.announcement_gid.length) {
                  (a.bSkipped = !0),
                    (a.bWarning = !0),
                    K.CloseProgress(n.unique_id, a);
                  continue;
                }
                if (
                  (yield z.b
                    .LoadPartnerEventFromAnnoucementGID(
                      Number(n.appid),
                      n.announcement_gid,
                      100
                    )
                    .catch((e) => {
                      this.HandleErrorFatal(
                        n.announcement_gid,
                        e,
                        "LoadPartnerEventFromAnnoucementGID",
                        a
                      );
                    }),
                  a.bFailed)
                )
                  continue;
                let r = z.b.GetClanEventFromAnnouncementGID(n.announcement_gid);
                if (r)
                  if (a.bSucceeded || a.bFailed || a.bAlreadyProcessed)
                    (a.bAlreadyProcessed = !0), K.CloseProgress(n.unique_id, a);
                  else {
                    if (
                      ((a.bAnalysing = !0),
                      this.setState({
                        strInfo:
                          "Processing " +
                          K.GetBackfillGIDs().length +
                          " Appid: " +
                          r.appid +
                          " Event " +
                          r.GID +
                          " Title: " +
                          r.GetNameWithFallback(0),
                      }),
                      r.jsondata && r.jsondata.localized_capsule_image)
                    ) {
                      let e = r.jsondata.localized_capsule_image;
                      yield this.HandleResizeForImageType(
                        e,
                        n,
                        a,
                        "capsule",
                        V.c.capsule_main
                      ).catch((e) =>
                        this.HandleErrorFatal(
                          null,
                          e,
                          "HandleResizeForImageType capsule",
                          a
                        )
                      );
                    }
                    if (r.jsondata && r.jsondata.localized_title_image) {
                      let e = r.jsondata.localized_title_image;
                      yield this.HandleResizeForImageType(
                        e,
                        n,
                        a,
                        "background",
                        V.c.background_mini
                      ).catch((e) =>
                        this.HandleErrorFatal(
                          null,
                          e,
                          "HandleResizeForImageType background",
                          a
                        )
                      );
                    }
                    if (r.jsondata && r.jsondata.localized_spotlight_image) {
                      let e = r.jsondata.localized_spotlight_image;
                      yield this.HandleResizeForImageType(
                        e,
                        n,
                        a,
                        "spotlight",
                        V.c.spotlight_main
                      ).catch((e) =>
                        this.HandleErrorFatal(
                          null,
                          e,
                          "HandleResizeForImageType spotlight",
                          a
                        )
                      );
                    }
                    if (
                      (K.CloseProgress(n.unique_id, a),
                      !K.BIsBackkFillInProgress())
                    )
                      break;
                  }
                else
                  (a.bFailed = !0),
                    (a.strMessage = "Failed to load the event: " + n.unique_id),
                    K.CloseProgress(n.unique_id, a);
              }
              if (K.m_nFailures > 5e3) {
                console.log("Hit too many errors, stoppinng the backfill");
                break;
              }
            }
          });
        }
        RenderFailure() {
          let e = new Array();
          return (
            K.m_nFailures > 0 &&
              K.GetBackfillGIDs().forEach((t) => {
                let n = K.GetEventBackfillProgress().get(t);
                if (n && n.bFailed) {
                  let a = z.b.GetClanEventModel(t);
                  a &&
                    e.push(
                      p.createElement(
                        "div",
                        { key: t },
                        p.createElement(
                          X.c,
                          { eventModel: a, route: X.a.k_eView },
                          a.GetNameWithFallback(0)
                        ),
                        p.createElement(
                          "div",
                          { className: Y.Error },
                          n.strMessage
                        )
                      )
                    );
                }
              }),
            e
          );
        }
        RenderResizeProgress() {
          let e = new Array();
          return (
            e.push(
              p.createElement(
                "div",
                { key: "res_capsule" },
                "Capsule Resized: ",
                this.m_mapArtworkResizeSuccess.get("capsule"),
                " "
              )
            ),
            e.push(
              p.createElement(
                "div",
                { key: "res_header" },
                "Header Resized: ",
                this.m_mapArtworkResizeSuccess.get("background"),
                " "
              )
            ),
            e.push(
              p.createElement(
                "div",
                { key: "res_spotlightr" },
                "Spotlight Resized: ",
                this.m_mapArtworkResizeSuccess.get("spotlight"),
                " "
              )
            ),
            e
          );
        }
        render() {
          let e = this.RenderFailure(),
            t = this.m_mapArtworkResizeSuccess.has("capsule")
              ? this.RenderResizeProgress()
              : void 0;
          return p.createElement(
            "div",
            null,
            p.createElement(
              "h2",
              null,
              "Partner Events Backfill Processing Page"
            ),
            null == this.state.eBackfillState &&
              p.createElement(
                "div",
                null,
                p.createElement(
                  "button",
                  { onClick: this.OnArtworkResizeBackfill },
                  "Begin Artwork Resize Backfill"
                )
              ),
            p.createElement(
              "div",
              null,
              p.createElement(
                "button",
                { onClick: () => K.CompleteBackfill("resize_image") },
                "Stop Backfill"
              )
            ),
            this.state.strInfo &&
              p.createElement("div", null, "Processing: ", this.state.strInfo),
            p.createElement("div", null, "Events Processed: ", K.m_nProcessed),
            p.createElement("div", null, "Events Succeeded: ", K.m_nSuccesses),
            p.createElement("div", null, "Events Warning: ", K.m_nWarning),
            p.createElement("div", null, "Events Failed: ", K.m_nFailures),
            p.createElement("div", null, "Events Skipped: ", K.m_nSkipped),
            e.length > 0 &&
              p.createElement(
                p.Fragment,
                null,
                p.createElement("h2", null, "Failure Info"),
                e
              ),
            Boolean(t) &&
              p.createElement(
                "div",
                null,
                p.createElement("h2", null, "Resizing Actions"),
                t
              ),
            "started" == this.state.eBackfillState &&
              p.createElement(R.a, {
                size: "medium",
                position: "center",
                string: "Backfill In Progress",
              })
          );
        }
      };
      Object(r.b)([H.b], Z.prototype, "OnArtworkResizeBackfill", null),
        Object(r.b)([H.b], Z.prototype, "BeginArtworkResize", null),
        (Z = Object(r.b)([_.a], Z));
      var $ = n("s4NR"),
        ee = n.n($),
        te = n("y2g3"),
        ne = n.n(te),
        ae = n("Cs6D"),
        re = n("N0Ye");
      const ie = n("f0Wu"),
        se = ["mod_reviewed", "auto_migrated"];
      class oe {
        constructor() {
          (this.selectedTags = void 0),
            (this.excludedTags = void 0),
            (this.filterDate = void 0),
            (this.eventsToLoadPerPaging = 20),
            (this.filterEventTypes = void 0),
            (this.bOrderByVisibilityStartTime = !1),
            (this.bUseCustomQuery = !1);
        }
        static Get() {
          return oe.s_Singleton || (oe.s_Singleton = new oe()), oe.s_Singleton;
        }
        Init(e) {
          const t = ee.a.parse(e.substring(1));
          let n;
          "string" == typeof t.selectedTags
            ? t.selectedTags.length > 0 &&
              (n = [{ label: t.selectedTags, value: t.selectedTags }])
            : t.selectedTags &&
              ((n = []),
              t.selectedTags.forEach((e) => n.push({ label: e, value: e })));
          let a,
            r,
            i = !1,
            s = se.map((e) => ({ label: e, value: e }));
          if (
            ("string" == typeof t.excludedTags
              ? t.excludedTags.length > 0 &&
                ((i = !0),
                (s = [{ label: t.excludedTags, value: t.excludedTags }]))
              : t.excludedTags &&
                ((s = []),
                t.excludedTags.forEach((e) => s.push({ label: e, value: e })),
                (i = s && s.length > 0)),
            "string" == typeof t.eventtype)
          ) {
            if (t.eventtype.length > 0) {
              let e = Number.parseInt(t.eventtype);
              a = [{ label: Object(re.b)(e), value: e }];
            }
          } else
            t.eventtype &&
              ((a = []),
              t.eventtype.forEach((e) => {
                let t = Number.parseInt(e);
                a.push({ label: Object(re.b)(t), value: t });
              }));
          "string" == typeof t.filterDate &&
            t.filterDate.length > 0 &&
            (r = ie.unix(Number(t.filterDate)));
          let o = !1;
          "string" == typeof t.orderByVisibility &&
            t.orderByVisibility.length > 0 &&
            (o = Boolean(t.orderByVisibility)),
            Object(x.G)(() => {
              (this.selectedTags = n),
                (this.excludedTags = s),
                (this.filterEventTypes = a),
                (this.filterDate = r),
                (this.bOrderByVisibilityStartTime = o),
                (this.bUseCustomQuery =
                  (n && n.length > 0) || i || (a && a.length > 0));
            });
        }
      }
      var le;
      Object(r.b)([x.C], oe.prototype, "selectedTags", void 0),
        Object(r.b)([x.C], oe.prototype, "excludedTags", void 0),
        Object(r.b)([x.C], oe.prototype, "filterDate", void 0),
        Object(r.b)([x.C], oe.prototype, "filterDateAsString", void 0),
        Object(r.b)([x.C], oe.prototype, "eventsToLoadPerPaging", void 0),
        Object(r.b)([x.C], oe.prototype, "filterEventTypes", void 0),
        Object(r.b)([x.C], oe.prototype, "bOrderByVisibilityStartTime", void 0),
        Object(r.b)([x.C], oe.prototype, "bUseCustomQuery", void 0),
        (function (e) {
          (e[(e.k_ModReviewed = 0)] = "k_ModReviewed"),
            (e[(e.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
            (e[(e.k_ChangeEventType = 2)] = "k_ChangeEventType"),
            (e[(e.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
            (e[(e.k_ModReReviewed = 4)] = "k_ModReReviewed"),
            (e[(e.k_ModRemovedFromSteamChina = 5)] =
              "k_ModRemovedFromSteamChina"),
            (e[(e.k_ModFlagAdultOnlyContent = 6)] =
              "k_ModFlagAdultOnlyContent"),
            (e[(e.k_ModRemoveAdultOnlyContent = 7)] =
              "k_ModRemoveAdultOnlyContent");
        })(le || (le = {}));
      const ce = "ModAct";
      class de {
        ToModString() {
          let e =
            "ModAct_" +
            this.m_moderator +
            "_" +
            Math.floor(this.m_rtWhen) +
            "_" +
            this.m_action;
          switch (this.m_action) {
            case le.k_ChangeEventType:
              e += "_" + this.m_newEventType;
              break;
            case le.k_UpdateSeasonTags:
              e += "_" + this.m_newTagAdded;
          }
          return e;
        }
        FromString(e) {
          let t = e.split("_");
          if (!t || t[0] !== ce) return !1;
          switch (
            ((this.m_moderator = Number(t[1])),
            (this.m_rtWhen = Number(t[2])),
            (this.m_action = Number(t[3])),
            this.m_action)
          ) {
            case le.k_ChangeEventType:
              this.m_newEventType = Number(t[4]);
              break;
            case le.k_UpdateSeasonTags:
              this.m_newTagAdded = t.slice(4).join("_");
          }
          return !0;
        }
        SetActionChangeEvent(e) {
          return (
            (this.m_moderator = o.k.accountid),
            (this.m_rtWhen = Date.now() / 1e3),
            (this.m_action = le.k_ChangeEventType),
            (this.m_newEventType = e),
            this
          );
        }
        SetReviewAction(e) {
          return (
            (this.m_moderator = o.k.accountid),
            (this.m_rtWhen = Date.now() / 1e3),
            (this.m_action = e ? le.k_ModReviewed : le.k_ModUnreviewed),
            this
          );
        }
        SetAdultOnlyContentAction(e) {
          return (
            (this.m_moderator = o.k.accountid),
            (this.m_rtWhen = Date.now() / 1e3),
            (this.m_action = e
              ? le.k_ModFlagAdultOnlyContent
              : le.k_ModRemoveAdultOnlyContent),
            this
          );
        }
        SetReReviewAction(e) {
          return (
            (this.m_moderator = o.k.accountid),
            (this.m_rtWhen = Date.now() / 1e3),
            (this.m_action = e ? le.k_ModReReviewed : le.k_ModUnreviewed),
            this
          );
        }
        static IsAuditAction(e) {
          return e.startsWith(ce);
        }
        SetUpdateSeasonalTags(e) {
          return (
            (this.m_moderator = o.k.accountid),
            (this.m_rtWhen = Date.now() / 1e3),
            (this.m_action = le.k_UpdateSeasonTags),
            (this.m_newTagAdded = e),
            this
          );
        }
      }
      class me {
        constructor() {
          (this.m_mapEventGIDToSolrData = new Map()),
            (this.m_listEvents = new Array());
        }
        BHasSolrEvent(e) {
          return this.m_mapEventGIDToSolrData.has(e);
        }
        GetAllSolrEvents() {
          return this.m_listEvents;
        }
        static Get() {
          return me.s_Singleton || (me.s_Singleton = new me()), me.s_Singleton;
        }
        ClearAllSolrEvents() {
          (this.m_mapEventGIDToSolrData = new Map()),
            (this.m_listEvents = new Array());
        }
        LoadPartnerEventForModerationIncremental(e, t = 30) {
          var n;
          return Object(r.a)(this, void 0, void 0, function* () {
            const a =
              o.d.STORE_BASE_URL +
              "events_admin/ajaxgetmoderationspecificpartnerevents";
            let r = 0;
            if (
              null === (n = this.m_listEvents) || void 0 === n
                ? void 0
                : n.length
            ) {
              this.m_listEvents.forEach(
                (e) =>
                  (r = Math.max(
                    r,
                    Math.floor(Date.parse(e.last_modified_date) / 1e3)
                  ))
              );
              this.m_listEvents.filter(
                (e) => Math.floor(Date.parse(e.last_modified_date) / 1e3) == r
              ).length >= t && r++;
            }
            const i = { start_time: r, count: t };
            try {
              const t = yield c.a.get(a, {
                params: i,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
              if (e && e.token.reason) return [];
              if (t && t.data) {
                let e = new Array();
                return (
                  Object(x.G)(() => {
                    t.data.docs.forEach((t) => {
                      this.m_mapEventGIDToSolrData.has(t.unique_id) ||
                        (e.push(t),
                        this.m_mapEventGIDToSolrData.set(t.unique_id, t),
                        this.m_listEvents.push(t));
                    });
                  }),
                  e
                );
              }
            } catch (e) {
              const t = Object(d.a)(e);
              console.error(
                "LoadPartnerEventForModerationIncremental failed:" +
                  t.strErrorMsg,
                t
              );
            }
            return [];
          });
        }
        UpdateTagsOnPartnerEvent(e, t, n, a, i, s) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const r = o.d.STORE_BASE_URL + "events_admin/ajaxupdatetags";
            let l = a.join(",");
            s && (a.length > 0 && (l += ","), (l += s.ToModString()));
            const d = new FormData();
            d.append("sessionid", o.d.SESSIONID),
              d.append("clan_accountid", "" + t.GetAccountID()),
              d.append("gid_announcement", n),
              d.append("add_tags", l),
              d.append("remove_tags", i.join(","));
            return (yield c.a.post(r, d, {
              withCredentials: !0,
              cancelToken: e.token,
            })).data.tags;
          });
        }
        UpdatePartnerEventType(e, t, n, a) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const r = o.d.STORE_BASE_URL + "events_admin/ajaxupdateeventtype",
              i = new FormData();
            i.append("sessionid", o.d.SESSIONID),
              i.append("clan_accountid", "" + t.GetAccountID()),
              i.append("gid_event", n),
              i.append("new_event_type", "" + a),
              yield c.a.post(r, i, {
                withCredentials: !0,
                cancelToken: e.token,
              });
          });
        }
      }
      Object(r.b)([x.C], me.prototype, "m_mapEventGIDToSolrData", void 0),
        Object(r.b)([x.C], me.prototype, "m_listEvents", void 0),
        Object(r.b)([x.k], me.prototype, "ClearAllSolrEvents", null);
      var ue = n("C4Nl"),
        _e = n("T27q"),
        pe = n("Qcoi"),
        he = n("Z1oF"),
        be = n("zrk3");
      function ve(e) {
        const { accountID: t, locToken: n } = e,
          a = p.useMemo(() => v.a.InitFromAccountID(t), [t]),
          [r, i] = Object(pe.b)(a);
        let s =
          "https://steamsupport.valvesoftware.com/account/overview/" +
          a.ConvertTo64BitString();
        return p.createElement(
          "div",
          null,
          Object(T.m)(
            n,
            p.createElement(
              "a",
              { href: s, target: o.d.IN_CLIENT ? void 0 : "_blank" },
              Boolean(!r && i)
                ? p.createElement(p.Fragment, null, i.persona_name)
                : p.createElement(
                    p.Fragment,
                    null,
                    p.createElement("span", null, t)
                  )
            )
          )
        );
      }
      function ge(e) {
        const { modAction: t } = e,
          n =
            Object(T.k)(t.m_rtWhen) +
            " @ " +
            Object(he.f)(t.m_rtWhen, { bForce24HourClock: !1 }),
          a = p.createElement(ve, {
            locToken: "#EventModTile_Moderator",
            accountID: t.m_moderator,
          });
        switch (t.m_action) {
          case le.k_ModReviewed:
            return p.createElement(
              "div",
              { className: be.ModeratorAuditActionCtn },
              Object(T.m)(
                "#EventModTile_Action_Reviewed",
                p.createElement("span", null, n),
                a
              )
            );
          case le.k_ModUnreviewed:
            return p.createElement(
              "div",
              { className: be.ModeratorAuditActionCtn },
              Object(T.m)(
                "#EventModTile_Action_UnReviewed",
                p.createElement("span", null, n),
                a
              )
            );
          case le.k_ChangeEventType:
            return p.createElement(
              "div",
              { className: be.ModeratorAuditActionCtn },
              Object(T.m)(
                "#EventModTile_Action_NewEventType",
                p.createElement("span", null, n),
                a,
                Object(re.b)(t.m_newEventType)
              )
            );
          case le.k_UpdateSeasonTags:
            return p.createElement(
              "div",
              { className: be.ModeratorAuditActionCtn },
              Object(T.m)(
                "#EventModTile_Action_SeasonTagUpdate",
                p.createElement("span", null, n),
                a,
                t.m_newTagAdded
              )
            );
          case le.k_ModReReviewed:
            return p.createElement(
              "div",
              { className: be.ModeratorAuditActionCtn },
              Object(T.m)(
                "#EventModTile_Action_ReReviewed",
                p.createElement("span", null, n),
                a
              )
            );
          case le.k_ModRemovedFromSteamChina:
            return p.createElement(
              "div",
              { className: be.ModeratorAuditActionCtn },
              Object(T.m)(
                "#EventModTile_Action_RemoveFromSC",
                p.createElement("span", null, n),
                a
              )
            );
          case le.k_ModFlagAdultOnlyContent:
            return p.createElement(
              "div",
              { className: be.ModeratorAuditActionCtn },
              Object(T.m)(
                "#EventModTile_Action_FlagAdultContent",
                p.createElement("span", null, n),
                a
              )
            );
          case le.k_ModRemoveAdultOnlyContent:
            return p.createElement(
              "div",
              { className: be.ModeratorAuditActionCtn },
              Object(T.m)(
                "#EventModTile_Action_RemoveAdultContent",
                p.createElement("span", null, n),
                a
              )
            );
          default:
            return p.createElement(
              "div",
              { className: be.ModeratorAuditActionCtn },
              t.ToModString
            );
        }
      }
      function Ee(e) {
        const [t, n] = p.useState(!0),
          { eventModel: a } = e;
        let r = a
          .GetAllTags()
          .filter((e) => de.IsAuditAction(e))
          .reverse();
        const i = r.length,
          s = r.length > 3 && t;
        return 0 == r.length
          ? null
          : (s && (r = r.splice(0, 3)),
            p.createElement(
              "div",
              null,
              p.createElement(
                "h4",
                null,
                Object(T.f)("#EventModTile_Action_Title")
              ),
              ((t) => {
                const { eventModel: n } = e;
                return t.map((e) => {
                  const t = new de();
                  return (
                    t.FromString(e),
                    p.createElement(ge, { key: n.GID + e, modAction: t })
                  );
                });
              })(r),
              s &&
                p.createElement(
                  "a",
                  { onClick: () => n(!1), className: be.ExpandModActions },
                  Object(T.f)("#EventModTile_Action_More", i - 3)
                ),
              Boolean(!s && i > 3) &&
                p.createElement(
                  "a",
                  { onClick: () => n(!0), className: be.ExpandModActions },
                  Object(T.f)("#EventModTile_Action_Hide")
                )
            ));
      }
      var Se = n("BpzF"),
        fe = n("fpVW"),
        Ce = n.n(fe),
        Oe = n("RQmk"),
        we = n("UxvL"),
        Re = n("+d9t"),
        ye = n("IzPI"),
        je = n("E9gz");
      const Me = n("f0Wu"),
        Ae = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0,
        };
      let Te = class extends h.a.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = c.a.CancelToken.source()),
            (this.m_refScroll = h.a.createRef()),
            (this.m_IntervalTimer = void 0),
            (this.state = {
              bInfiniteScrollLoading: !1,
              bExhaustedEventList: !1,
              nLastFetchCompletedMS: 0,
            }),
            (this.m_nPage = 0);
        }
        componentDidMount() {
          this.setState(
            { bInfiniteScrollLoading: !0 },
            this.LoadMoreModerationEvents
          ),
            window.addEventListener("scroll", this.OnScroll, !0),
            oe.Get().Init(this.props.history.location.search);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "EventModerationLanding component unmounted"
          ),
            window.removeEventListener("scroll", this.OnScroll),
            this.ClearTimer();
        }
        HandleUpdateQueryParameter() {
          const e = oe.Get();
          if (e.bUseCustomQuery && this.props.history) {
            const {
              selectedTags: t,
              excludedTags: n,
              filterEventTypes: a,
              filterDate: r,
              bOrderByVisibilityStartTime: i,
            } = e;
            t || n || a || r || i
              ? this.props.history.push(
                  `?${ee.a.stringify({
                    selectedTags:
                      t && t.length > 0 ? t.map((e) => e.value) : null,
                    excludedTags:
                      n && n.length > 0 ? n.map((e) => e.value) : null,
                    eventtype:
                      a && a.length > 0 ? a.map((e) => "" + e.value) : null,
                    filterDate: r && r.unix() > 0 ? "" + r.unix() : null,
                    orderByVisibility: i ? "1" : null,
                  })}`
                )
              : this.props.history.push("?");
          }
        }
        ClearTimer() {
          this.m_IntervalTimer &&
            (window.clearInterval(this.m_IntervalTimer),
            (this.m_IntervalTimer = void 0));
        }
        HandleError(e) {
          let t = Object(d.a)(e);
          console.error("EventModerationLanding error: " + t.strErrorMsg, t),
            this.setState({
              bInfiniteScrollLoading: !1,
              bExhaustedEventList: !0,
              nLastFetchCompletedMS: Date.now(),
            });
        }
        LoadMorePublicEventWithDelay() {
          return Object(r.a)(this, void 0, void 0, function* () {
            this.m_IntervalTimer = window.setInterval(
              this.LoadMoreModerationEvents,
              500
            );
          });
        }
        LoadMoreModerationEvents() {
          if ((this.ClearTimer(), this.state.bInfiniteScrollLoading)) {
            let e;
            const t = oe.Get();
            if (t.bUseCustomQuery) {
              let n = t.filterEventTypes
                  ? t.filterEventTypes.map((e) => e.value)
                  : void 0,
                a = t.selectedTags
                  ? t.selectedTags.map((e) => e.value)
                  : void 0,
                r = t.excludedTags
                  ? t.excludedTags.map((e) => e.value)
                  : void 0;
              e = q
                .Get()
                .LoadPartnerEventForQueryIncremental(
                  this.m_cancelSignal,
                  this.m_nPage,
                  t.eventsToLoadPerPaging,
                  [this.props.appid],
                  a,
                  r,
                  t.filterDate,
                  n,
                  t.bOrderByVisibilityStartTime
                );
            } else
              e = me
                .Get()
                .LoadPartnerEventForModerationIncremental(
                  this.m_cancelSignal,
                  t.eventsToLoadPerPaging
                );
            e.then((e) => {
              (this.m_nPage += t.eventsToLoadPerPaging),
                this.setState({
                  bInfiniteScrollLoading: !1,
                  bExhaustedEventList: 0 == e.length,
                  nLastFetchCompletedMS: Date.now(),
                });
            }).catch((e) => this.HandleError(e));
          }
        }
        UpdateQueryParametersAndLoadMoreEvents() {
          this.HandleUpdateQueryParameter(), this.LoadMoreModerationEvents();
        }
        RenderTiles() {
          let e = new Array();
          return (
            (oe.Get().bUseCustomQuery
              ? q.Get().GetAllSolrEvents()
              : me.Get().GetAllSolrEvents()
            ).forEach((t) => {
              e.push(h.a.createElement(Ge, { solrData: t, key: t.unique_id }));
            }),
            e
          );
        }
        OnScroll() {
          if (!this.m_refScroll || !this.m_refScroll.current) return;
          let e = this.m_refScroll.current;
          e &&
            (this.state.bExhaustedEventList ||
              this.state.bInfiniteScrollLoading ||
              (e.getBoundingClientRect().bottom <= window.innerHeight + 50 &&
                (this.state.nLastFetchCompletedMS + 500 < Date.now()
                  ? this.setState(
                      { bInfiniteScrollLoading: !0 },
                      this.LoadMorePublicEventWithDelay
                    )
                  : this.setState(
                      { bInfiniteScrollLoading: !0 },
                      this.LoadMoreModerationEvents
                    ))));
        }
        RefetchAllEventTiles() {
          (this.m_nPage = 0),
            me.Get().ClearAllSolrEvents(),
            q.Get().ClearAllSolrEvents(),
            this.setState(
              Object.assign({}, Ae),
              this.UpdateQueryParametersAndLoadMoreEvents
            );
        }
        render() {
          let e = this.RenderTiles();
          const t = oe.Get();
          return h.a.createElement(
            "div",
            { className: je.ModerationContainer, ref: this.m_refScroll },
            h.a.createElement(
              "div",
              null,
              h.a.createElement(
                "h2",
                null,
                Object(T.f)("#EventModeration_Title")
              ),
              h.a.createElement(
                S.a,
                null,
                h.a.createElement(
                  "div",
                  { className: Object(M.a)(Ce.a.FlexRowContainer) },
                  h.a.createElement(Ie, {
                    fnRequireRefetchEvents: this.RefetchAllEventTiles,
                  }),
                  Boolean(t.bUseCustomQuery) &&
                    h.a.createElement(De, {
                      fnRequireRefetchEvents: this.RefetchAllEventTiles,
                    })
                )
              )
            ),
            h.a.createElement(S.a, null, e),
            this.state.bInfiniteScrollLoading &&
              h.a.createElement(R.a, {
                position: "center",
                size: "medium",
                string: Object(T.f)("#Loading"),
              })
          );
        }
      };
      Object(r.b)([H.b], Te.prototype, "HandleError", null),
        Object(r.b)([H.b], Te.prototype, "LoadMorePublicEventWithDelay", null),
        Object(r.b)([H.b], Te.prototype, "LoadMoreModerationEvents", null),
        Object(r.b)(
          [H.b],
          Te.prototype,
          "UpdateQueryParametersAndLoadMoreEvents",
          null
        ),
        Object(r.b)([H.b], Te.prototype, "OnScroll", null),
        Object(r.b)([H.b], Te.prototype, "RefetchAllEventTiles", null),
        (Te = Object(r.b)([_.a], Te));
      const Be = Object(b.j)(Te),
        Ie = Object(_.a)((e) => {
          const t = oe.Get(),
            { fnRequireRefetchEvents: n } = e;
          return h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(
              "div",
              { className: je.FilterContainer },
              h.a.createElement(
                y.a,
                {
                  toolTipContent: Object(T.f)(
                    "#EventModeration_ShowCustomFilter_ttip"
                  ),
                },
                h.a.createElement(E.g, {
                  label: Object(T.f)("#EventModeration_ShowCustomFilter"),
                  checked: t.bUseCustomQuery,
                  onChange: (e) => {
                    (t.bUseCustomQuery = e), n();
                  },
                })
              )
            ),
            h.a.createElement(
              "div",
              { className: je.FilterContainer },
              h.a.createElement(
                "label",
                { htmlFor: "EventPerLoad" },
                Object(T.f)("#EventModeration_PerPageLoad")
              ),
              h.a.createElement(
                "div",
                null,
                h.a.createElement("input", {
                  type: "number",
                  id: "EventPerLoad",
                  min: "10",
                  max: "200",
                  value: t.eventsToLoadPerPaging,
                  onChange: (e) => {
                    let n = Number.parseInt(e.currentTarget.value);
                    n &&
                      n > 0 &&
                      n != t.eventsToLoadPerPaging &&
                      (t.eventsToLoadPerPaging = n);
                  },
                })
              )
            )
          );
        }),
        De = Object(_.a)((e) => {
          const t = oe.Get(),
            { fnRequireRefetchEvents: n } = e,
            a = s.e
              .map((e) => ({ value: e, label: Object(re.b)(e) }))
              .sort((e, t) => e.label.localeCompare(t.label)),
            r = W.a
              .map((e) => ({ value: e, label: e }))
              .sort((e, t) => e.label.localeCompare(t.label)),
            i = {
              option: (e) =>
                Object.assign(Object.assign({}, e), { color: "#444444" }),
            };
          return h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(
              "div",
              { className: je.FilterContainer },
              h.a.createElement(
                "span",
                null,
                Object(T.f)("#EventModeration_FilterByTag")
              ),
              h.a.createElement(ae.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: (e) => {
                  (t.selectedTags = e), n();
                },
                value: t.selectedTags,
                options: r,
                styles: i,
              })
            ),
            h.a.createElement(
              "div",
              { className: je.FilterContainer },
              h.a.createElement(
                "span",
                null,
                Object(T.f)("#EventModeration_FilterExcludeByTag")
              ),
              h.a.createElement(ae.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: (e) => {
                  (t.excludedTags = e), n();
                },
                value: t.excludedTags,
                options: r,
                styles: i,
              })
            ),
            h.a.createElement(
              "div",
              { className: je.FilterContainer },
              h.a.createElement(
                "span",
                null,
                Object(T.f)("#EventModeration_FilterToType")
              ),
              h.a.createElement(ae.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: (e) => {
                  (t.filterEventTypes = e), n();
                },
                value: t.filterEventTypes,
                options: a,
                styles: i,
              })
            ),
            h.a.createElement(
              "div",
              { className: je.FilterContainer },
              h.a.createElement(
                "span",
                null,
                Object(T.f)("#EventModeration_FilterToDate")
              ),
              h.a.createElement(ne.a, {
                timeFormat: !1,
                onChange: (e) => {
                  if ("string" == typeof e) {
                    let n = Me(e, "M/D/YYYY", !0);
                    if (!n.isValid()) return void (t.filterDateAsString = e);
                    e = n;
                  }
                  t.filterDate != e &&
                    ((t.filterDateAsString = void 0), (t.filterDate = e), n());
                },
                value: t.filterDate,
                isValidDate: (e) => {
                  let t = new Date();
                  return (
                    e.unix() <
                    Me.unix(t.getTime() / 1e3 + 86400)
                      .hour(0)
                      .seconds(0)
                      .minute(0)
                      .unix()
                  );
                },
                inputProps: {
                  placeholder: Object(T.f)("#EventModeration_PickDatee"),
                  className: je.TimeWidth,
                },
              })
            ),
            h.a.createElement(
              "div",
              { className: je.FilterContainer },
              h.a.createElement("input", {
                type: "checkbox",
                id: "VisibilityStart",
                checked: t.bOrderByVisibilityStartTime,
                onChange: (e) => {
                  (t.bOrderByVisibilityStartTime = e.currentTarget.checked),
                    n();
                },
              }),
              h.a.createElement(
                "label",
                { htmlFor: "VisibilityStart" },
                Object(T.f)("#EventModeration_OrderByFirstVisible")
              )
            )
          );
        }),
        Pe = Object(_.a)((e) => {
          const { onClick: t, event: n, bSaving: a } = e;
          let r = Object(T.f)("#EventModTile_Moderate_ClearReviewed"),
            i = je.EventModerateClearReview,
            s = !1;
          return (
            Object(W.g)(n) ||
              ((r = Object(T.f)("#EventModTile_Moderate_MarkReviewed")),
              (i = je.EventModerateMarkReview),
              (s = !0)),
            a &&
              ((r = Object(T.f)("#EventModTile_Moderate_Saving")),
              (i = je.EventModerateSaving)),
            h.a.createElement(
              "button",
              {
                className: Object(M.a)(Ce.a.Button, je.Button, i),
                onClick: () => t(s),
                disabled: a,
              },
              a && h.a.createElement(R.a, { size: "small" }),
              r
            )
          );
        }),
        Le = Object(_.a)((e) => {
          const { onClick: t, event: n, bSaving: a } = e,
            r = n.BHasTag("adult_only_content");
          let i = Object(T.f)(
            r
              ? "#EventModTile_Moderate_RemoveAdultContent"
              : "#EventModTile_Moderate_FlagAdultContent"
          );
          return (
            a && (i = Object(T.f)("#EventModTile_Moderate_Saving")),
            h.a.createElement(
              "button",
              {
                className: Object(M.a)(Ce.a.Button, je.Button),
                onClick: () => t(!r),
                disabled: a,
              },
              a && h.a.createElement(R.a, { size: "small" }),
              i
            )
          );
        });
      let Ge = class extends h.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bLoadingEvent: !z.b.BHasClanEventModel(
                this.props.solrData.unique_id
              ),
              bShowAsModal: !1,
              bSavingModeration: !1,
            }),
            (this.m_cancelSignal = c.a.CancelToken.source());
        }
        componentDidMount() {
          const { solrData: e } = this.props,
            t = e.unique_id;
          z.b.BHasClanEventModel(t) ||
            z.b
              .LoadHiddenPartnerEvent(new v.a(e.clan_steamid), t)
              .then(() => this.setState({ bLoadingEvent: !1 }))
              .catch((e) => {
                const t = Object(d.a)(e);
                console.error(
                  "EventModerationTile: Event Load: " + t.strErrorMsg,
                  t
                ),
                  this.setState({ bLoadingEvent: !1 });
              });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventModerationTile component unmounted");
        }
        ShowModalEvent(e) {
          const { solrData: t } = this.props,
            n = t.unique_id;
          !this.state.bLoadingEvent &&
            z.b.BHasClanEventModel(n) &&
            this.setState({ bShowAsModal: !0 }),
            e.preventDefault(),
            e.stopPropagation();
        }
        HideModalEvent() {
          this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
        }
        SetAdultContentState(e) {
          if (this.state.bSavingModeration) return;
          const { solrData: t } = this.props,
            n = t.unique_id,
            a = z.b.GetClanEventModel(n);
          if (!a) return;
          if (e === a.BHasTag("adult_only_content")) return;
          const r = new Array(),
            i = new Array();
          let s = new de().SetAdultOnlyContentAction(e);
          e ? r.push("adult_only_content") : i.push("adult_only_content"),
            this.UpdateTagsOnEvent(n, r, i, s);
        }
        SetModeratedState(e) {
          if (this.state.bSavingModeration) return;
          const { solrData: t } = this.props,
            n = t.unique_id,
            a = z.b.GetClanEventModel(n);
          if (!a) return;
          if (e === Object(W.g)(a)) return;
          const r = new Array(),
            i = new Array();
          let s = new de().SetReviewAction(e);
          e
            ? (r.push("mod_reviewed"),
              i.push("mod_require_rereview"),
              a.BHasTag("mod_require_rereview") && s.SetReReviewAction(e))
            : r.push("mod_require_rereview"),
            this.UpdateTagsOnEvent(n, r, i, s);
        }
        UpdateTagsOnEvent(e, t, n, a) {
          this.state.bSavingModeration ||
            this.setState({ bSavingModeration: !0 }, () =>
              Object(r.a)(this, void 0, void 0, function* () {
                let r = z.b.GetClanEventModel(e);
                try {
                  let e = yield me
                    .Get()
                    .UpdateTagsOnPartnerEvent(
                      this.m_cancelSignal,
                      r.clanSteamID,
                      r.AnnouncementGID,
                      t,
                      n,
                      a
                    );
                  r.vecTags = e;
                } catch (e) {
                  let t = Object(d.a)(e);
                  console.error("UpdateTagsOnPartnerEvent " + t.strErrorMsg, t);
                }
                this.setState({ bSavingModeration: !1 });
              })
            );
        }
        OnChangeCategory(e) {
          const { solrData: t } = this.props;
          let n = z.b.GetClanEventModel(t.unique_id);
          Object(O.d)(h.a.createElement(Ne, { eventModel: n }), Object(A.o)(e));
        }
        OnUpdateSeasonalTag(e) {
          const { solrData: t } = this.props;
          let n = z.b.GetClanEventModel(t.unique_id);
          Object(O.d)(h.a.createElement(ze, { eventModel: n }), Object(A.o)(e));
        }
        render() {
          const { solrData: e } = this.props,
            t = e.unique_id,
            n = Number(e.appid);
          let a,
            r = Object(s.l)(o.d.LANGUAGE),
            i = z.b.GetClanEventModel(t),
            l = null;
          if (i) {
            this.state.bShowAsModal &&
              (l = h.a.createElement(
                C.k,
                { className: je.StoreHeaderAdjust },
                h.a.createElement(
                  "div",
                  null,
                  h.a.createElement(_e.b, {
                    event: i,
                    fnClose: this.HideModalEvent,
                  })
                )
              ));
            const e = i.GetImageForSizeAsArrayWithFallback(
                "capsule",
                r,
                V.c.capsule_main
              ),
              t = i.BImageNeedScreenshotFallback("capsule", r);
            a =
              e.length > 0
                ? h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(we.a, { rgSources: e }),
                    t &&
                      h.a.createElement(
                        "div",
                        { className: je.NoCapsuleFallback },
                        Object(T.f)("#EventModTile_FallbackImageText")
                      )
                  )
                : h.a.createElement(
                    "div",
                    { className: je.NoCapsule },
                    Object(T.f)("#EventModTile_NoCapsule")
                  );
          } else a = Object(T.f)("#Loading");
          const c = e.last_modified_date
              ? Date.parse(e.last_modified_date) / 1e3
              : 0,
            d = i ? i.type : Number(e.event_type),
            m = new v.a(e.clan_steamid),
            u = n ? `app/${n}` : `group/${m.GetAccountID()}`,
            _ = `${o.d.STORE_BASE_URL}news/${u}/view/${e.announcement_gid}`,
            p = Boolean(i && i.BHasTag("adult_only_content"));
          return h.a.createElement(
            S.a,
            null,
            l,
            h.a.createElement(
              "div",
              { className: je.Tile },
              h.a.createElement(
                "a",
                {
                  href: _,
                  className: je.TileCapsule,
                  onClick: this.ShowModalEvent,
                },
                a
              ),
              h.a.createElement(
                "div",
                { className: je.TileDetails },
                h.a.createElement(
                  "div",
                  { className: je.DetailsLeft },
                  h.a.createElement(
                    "a",
                    {
                      className: je.EventTitle,
                      href: _,
                      onClick: this.ShowModalEvent,
                    },
                    e.event_name
                  ),
                  h.a.createElement(
                    "div",
                    {
                      className: Object(M.a)(
                        je.TileEventType,
                        1 == d ? je.TileEventOtherType : ""
                      ),
                    },
                    i ? i.GetCategoryAsString() : e.event_type
                  ),
                  p &&
                    h.a.createElement(
                      "div",
                      { className: je.HasAdultContent },
                      Object(T.f)("#EventModTile_HasAdultContent")
                    ),
                  this.state.bLoadingEvent &&
                    h.a.createElement(R.a, {
                      size: "small",
                      string: Object(T.f)("#Loading"),
                    }),
                  h.a.createElement(
                    "div",
                    { className: je.ChannelInfo },
                    h.a.createElement(ke, {
                      appid: n,
                      clanSteamID: new v.a(e.clan_steamid),
                    })
                  )
                ),
                h.a.createElement(
                  "div",
                  { className: je.DetailsMiddle },
                  i &&
                    h.a.createElement(
                      h.a.Fragment,
                      null,
                      h.a.createElement(Pe, {
                        onClick: this.SetModeratedState,
                        bSaving: this.state.bSavingModeration,
                        event: i,
                      }),
                      h.a.createElement(
                        "button",
                        {
                          className: Object(M.a)(Ce.a.Button, je.Button),
                          onClick: this.OnChangeCategory,
                        },
                        Object(T.f)("#EventModTile_ChangeEventType")
                      ),
                      h.a.createElement(Le, {
                        onClick: this.SetAdultContentState,
                        bSaving: this.state.bSavingModeration,
                        event: i,
                      }),
                      Boolean(i.BHasTag("halloween2019candidate")) &&
                        h.a.createElement(
                          "button",
                          {
                            className: Object(M.a)(Ce.a.Button),
                            onClick: this.OnUpdateSeasonalTag,
                          },
                          Object(T.f)("#EventModTile_SeasonalTag")
                        ),
                      h.a.createElement(Ee, { eventModel: i })
                    )
                ),
                h.a.createElement(
                  "div",
                  { className: je.DetailsRight },
                  h.a.createElement(
                    "div",
                    { className: je.EventTimingBlock },
                    Boolean(c) &&
                      h.a.createElement(
                        "div",
                        { className: je.LastUpdateTime },
                        Object(T.f)(
                          "#EventModTile_LastModified",
                          Object(T.k)(c) +
                            "@" +
                            Object(he.f)(c, { bForce24HourClock: !1 })
                        )
                      ),
                    i &&
                      h.a.createElement(Se.b, {
                        event: i,
                        stylesmodule: je,
                        nOverrideEndTime: i.GetEndTimeAndDateUnixSeconds(),
                        nOverrideStartTime: i.GetStartTimeAndDateUnixSeconds(),
                      })
                  ),
                  i &&
                    h.a.createElement(Ue, {
                      event: i,
                      hidden: e.hidden,
                      published: e.published,
                    })
                )
              )
            )
          );
        }
      };
      Object(r.b)([H.b], Ge.prototype, "ShowModalEvent", null),
        Object(r.b)([H.b], Ge.prototype, "HideModalEvent", null),
        Object(r.b)([H.b], Ge.prototype, "SetAdultContentState", null),
        Object(r.b)([H.b], Ge.prototype, "SetModeratedState", null),
        Object(r.b)([H.b], Ge.prototype, "OnChangeCategory", null),
        Object(r.b)([H.b], Ge.prototype, "OnUpdateSeasonalTag", null),
        (Ge = Object(r.b)([_.a], Ge));
      let Fe = class extends h.a.Component {
        constructor() {
          super(...arguments),
            (this.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
            (this.m_cancelSignal = c.a.CancelToken.source());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "ChangeEventTypeDialog component unmounted"
          );
        }
        CountLanguages(e) {
          let t = 0;
          if (e && e.length > 0)
            for (let n = 0; n < e.length && n < 30; ++n)
              e[n] && e[n].length > 0 && (t += 1);
          return t;
        }
        componentDidMount() {
          const { event: e } = this.props;
          z.b
            .LoadClanEventLocalizationFromAnnouncementGID(
              e.clanSteamID,
              e.AnnouncementGID
            )
            .then((e) => {
              this.m_cancelSignal.token.reason ||
                this.setState({ nLocLanguages: e.length });
            })
            .catch((e) => {
              let t = Object(d.a)(e);
              console.error(
                "EventInspection.LoadLoc : error " + t.strErrorMsg,
                t
              ),
                this.m_cancelSignal.token.reason ||
                  this.setState({ nLocLanguages: -1 });
            });
        }
        render() {
          const { event: e } = this.props;
          let t = this.CountLanguages(e.jsondata.localized_title_image),
            n = this.CountLanguages(e.jsondata.localized_capsule_image),
            a = this.CountLanguages(e.jsondata.localized_spotlight_image),
            r = Math.max(
              this.CountLanguages(e.jsondata.localized_broadcast_left_image),
              this.CountLanguages(e.jsondata.localized_broadcast_right_image)
            ),
            i = t + n + a + r,
            s = this.CountLanguages(e.jsondata.localized_summary),
            o = this.CountLanguages(e.jsondata.localized_subtitle);
          return h.a.createElement(
            "div",
            { className: je.AnalysisCtn },
            h.a.createElement(
              "div",
              { className: je.TileTitle },
              Object(T.f)("#EventModTile_Analysis")
            ),
            h.a.createElement(
              "div",
              null,
              Object(T.f)("#EventModTile_Stats_Comments", e.nCommentCount)
            ),
            h.a.createElement(
              "div",
              null,
              Object(T.f)("#EventModTile_Stats_VoteUp", e.nVotesUp)
            ),
            h.a.createElement(
              "div",
              null,
              Object(T.f)("#EventModTile_Stats_VoteDown", e.nVotesDown)
            ),
            Boolean(t) &&
              h.a.createElement(
                "div",
                { className: je.ArtHeader },
                Object(T.f)("#EventModTile_ImageAnalysis_Header", t),
                " "
              ),
            Boolean(n) &&
              h.a.createElement(
                "div",
                null,
                Object(T.f)("#EventModTile_ImageAnalysis_Capsule", n),
                " "
              ),
            Boolean(a) &&
              h.a.createElement(
                "div",
                { className: je.ArtSpotlight },
                Object(T.f)("#EventModTile_ImageAnalysis_Spotlight", a),
                " "
              ),
            Boolean(r) &&
              h.a.createElement(
                "div",
                null,
                Object(T.f)("#EventModTile_ImageAnalysis_Broadcast", r),
                " "
              ),
            0 == i &&
              h.a.createElement(
                "div",
                { className: je.AnalysisMissing },
                Object(T.f)("#EventModTile_ImageAnalysis_None"),
                " "
              ),
            0 == this.state.nLocLanguages &&
              h.a.createElement(R.a, {
                size: "small",
                string: Object(T.f)("#EventModTile_LoadingLocs"),
              }),
            this.state.nLocLanguages > 0 &&
              h.a.createElement(
                "div",
                null,
                Object(T.f)("#EventModTile_Languages", this.state.nLocLanguages)
              ),
            Boolean(s) &&
              h.a.createElement(
                "div",
                null,
                Object(T.f)("#EventModTile_Languages_Summary", s),
                " "
              ),
            Boolean(o) &&
              h.a.createElement(
                "div",
                null,
                Object(T.f)("#EventModTile_Languages_Subtitle", o),
                " "
              )
          );
        }
      };
      Fe = Object(r.b)([_.a], Fe);
      const ke = Object(_.a)((e) => {
        const [t, n] = Object(p.useState)(!ue.a.Get().BHasApp(e.appid)),
          a = h.a.useRef(c.a.CancelToken.source());
        if (
          (Object(p.useEffect)(
            () => () =>
              a.current.cancel(
                "EventModerationChannelInfo component unmounted"
              ),
            []
          ),
          Object(p.useEffect)(() => {
            const { appid: t, clanSteamID: i } = e;
            if (
              (t && !ue.a.Get().BHasApp(t)) ||
              (i && !g.a.BHasClanInfoLoaded(i))
            ) {
              (() =>
                Object(r.a)(void 0, void 0, void 0, function* () {
                  try {
                    yield Promise.all([
                      ue.a
                        .Get()
                        .QueueAppRequest(t, {
                          include_assets: !0,
                          include_release: !0,
                          include_screenshots: !0,
                        }),
                      i ? g.a.LoadClanInfoForClanSteamID(i) : void 0,
                    ]);
                  } catch (e) {
                    const t = Object(d.a)(e);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + t.strErrorMsg,
                      t
                    );
                  } finally {
                    a.current.token.reason || n(!1);
                  }
                }))();
            }
          }, [e]),
          t)
        )
          return h.a.createElement(R.a, {
            size: "small",
            string: Object(T.f)("#EventModTile_AppInfoLoading"),
          });
        const { appid: i, clanSteamID: s } = e;
        if (i) {
          const e = ue.a.Get().GetApp(i);
          return e
            ? h.a.createElement(
                "div",
                { className: je.TileAppInfo },
                h.a.createElement(
                  "div",
                  { className: je.TileAppInfoTitle },
                  h.a.createElement(
                    Oe.b,
                    { type: "app", id: e.GetAppID() },
                    h.a.createElement(
                      Re.b,
                      { href: Object(ye.h)(e.GetStorePageURL()) },
                      h.a.createElement("img", {
                        className: je.TileAppInfoImage,
                        src: e.GetAssets().GetMainCapsuleURL(),
                      })
                    )
                  ),
                  h.a.createElement(
                    Oe.b,
                    { type: "app", id: e.GetAppID() },
                    h.a.createElement(
                      Re.b,
                      { href: Object(ye.h)(e.GetStorePageURL()) },
                      h.a.createElement("div", null, e.GetName())
                    )
                  )
                )
              )
            : null;
        }
        if (s) {
          const e = s.GetAccountID(),
            t = g.a.GetClanInfoByClanAccountID(e);
          if (t && t.is_curator)
            return h.a.createElement(
              "div",
              { className: je.TileAppInfo },
              h.a.createElement(
                "div",
                { className: je.TileAppInfoTitle },
                h.a.createElement(
                  Re.b,
                  {
                    href: Object(ye.h)(
                      o.d.STORE_BASE_URL + "/curator/" + e + "/"
                    ),
                  },
                  h.a.createElement("img", {
                    className: je.TileAppInfoImage,
                    src: t.avatar_full_url,
                  }),
                  h.a.createElement(
                    "div",
                    null,
                    Object(T.f)("#EventModTile_CuratorName", t.group_name)
                  )
                )
              )
            );
        }
        return null;
      });
      let Ue = class extends h.a.Component {
        render() {
          const { event: e, hidden: t, published: n } = this.props,
            a = t
              ? n
                ? Object(T.f)("#EVentModTile_State_Staged")
                : Object(T.f)("#EVentModTile_State_Draft")
              : Object(T.f)("#EVentModTile_State_Published"),
            r = Object(W.c)(e),
            i = Object(W.b)(e),
            s = Object(W.d)(e);
          let o = s && !e.BHasTag("hide_store") && !e.BHasTag("mod_hide_store"),
            l =
              r &&
              !e.BHasTag("hide_library_overview") &&
              !e.BHasTag("mod_hide_library_overview"),
            c =
              i &&
              !e.BHasTag("hide_library_detail") &&
              !e.BHasTag("mod_hide_library_detail");
          return h.a.createElement(
            "div",
            { className: je.VisibiltyCtn },
            h.a.createElement("div", { className: je.TileTitle }, a),
            h.a.createElement(
              "div",
              null,
              Object(T.f)(
                "#EventModTile_Store_Visibility",
                o
                  ? Object(T.f)("#WriteReview_Dialog_Yes")
                  : Object(T.f)("#WriteReview_Dialog_No"),
                o
                  ? ""
                  : s
                  ? Object(T.f)(
                      "#EventModTime_Hidden_EventType",
                      e.GetEventTypeAsString()
                    )
                  : e.BHasTag("hide_store")
                  ? Object(T.f)("#EventModTime_Hidden_OptOut")
                  : Object(T.f)("#EventModTime_Hidden_Moderator")
              )
            ),
            h.a.createElement(
              "div",
              null,
              Object(T.f)(
                "#EventModTile_LibraryHome_Visibility",
                l
                  ? Object(T.f)("#WriteReview_Dialog_Yes")
                  : Object(T.f)("#WriteReview_Dialog_No"),
                l
                  ? ""
                  : s
                  ? Object(T.f)(
                      "#EventModTime_Hidden_EventType",
                      e.GetEventTypeAsString()
                    )
                  : e.BHasTag("hide_library_overview")
                  ? Object(T.f)("#EventModTime_Hidden_OptOut")
                  : Object(T.f)("#EventModTime_Hidden_Moderator")
              )
            ),
            h.a.createElement(
              "div",
              null,
              Object(T.f)(
                "#EventModTile_LibraryDetail_Visibility",
                c
                  ? Object(T.f)("#WriteReview_Dialog_Yes")
                  : Object(T.f)("#WriteReview_Dialog_No"),
                c
                  ? ""
                  : s
                  ? Object(T.f)(
                      "#EventModTime_Hidden_EventType",
                      e.GetEventTypeAsString()
                    )
                  : e.BHasTag("hide_library_detail")
                  ? Object(T.f)("#EventModTime_Hidden_OptOut")
                  : Object(T.f)("#EventModTime_Hidden_Moderator")
              )
            ),
            e.BHasTag("enable_steam_china") &&
              h.a.createElement(
                "div",
                null,
                Object(T.f)("#EventModTile_SteamChina_Visibility")
              ),
            e.BHasTag("disable_steam_global") &&
              h.a.createElement(
                "div",
                null,
                Object(T.f)("#EventModTile_SteamGlobal_Hidden")
              )
          );
        }
      };
      Ue = Object(r.b)([_.a], Ue);
      let Ne = class extends h.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bUpdating: !1,
              newCategoryOption: {
                label: Object(re.b)(34),
                value: { eventType: 34 },
              },
            }),
            (this.m_cancelSignal = c.a.CancelToken.source());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "ChangeEventTypeDialog component unmounted"
          );
        }
        ChangeCategoryForEvent() {
          return Object(r.a)(this, void 0, void 0, function* () {
            const { eventModel: e, closeModal: t } = this.props;
            try {
              const n = this.state.newCategoryOption,
                a = n.value.eventType;
              yield me
                .Get()
                .UpdatePartnerEventType(
                  this.m_cancelSignal,
                  e.clanSteamID,
                  e.GID,
                  a
                );
              const r = W.p,
                i = [];
              n.value.tags &&
                n.value.tags.forEach((e) => {
                  i.push(e);
                  const t = new de().SetUpdateSeasonalTags(e).ToModString();
                  i.push(t);
                });
              const s = yield me
                .Get()
                .UpdateTagsOnPartnerEvent(
                  this.m_cancelSignal,
                  e.clanSteamID,
                  e.GetAnnouncementGID(),
                  i,
                  r,
                  new de().SetActionChangeEvent(a)
                );
              Object(x.G)(() => {
                (e.type = a), (e.vecTags = s);
              }),
                this.setState({ bUpdating: !1 }, t);
            } catch (e) {
              const t = Object(d.a)(e);
              console.error("ChangeEventTypeDialog error " + t.strErrorMsg, t),
                this.setState({ bUpdating: !1, strErrorMsg: t.strErrorMsg });
            }
          });
        }
        OnChangeSelection(e) {
          this.setState({ newCategoryOption: e });
        }
        render() {
          const { eventModel: e, closeModal: t } = this.props,
            n = s.e
              .filter((e) => 1 == e || 4 == e || e >= 9)
              .map((e) => {
                const t = { eventType: e };
                return (
                  12 == e && (t.tags = ["patchnotes"]),
                  { label: Object(re.b)(e), value: t }
                );
              });
          return (
            n.push({
              label: Object(T.f)("#PartnerEvent_Curator_Group_Members"),
              value: {
                eventType: 28,
                tags: ["curator", "curator_group_members"],
              },
            }),
            n.push({
              label: Object(T.f)("#PartnerEvent_Curator_Public"),
              value: { eventType: 28, tags: ["curator", "curator_public"] },
            }),
            n.push({
              label: Object(T.f)("#PartnerEvent_SteamAwardNominations"),
              value: {
                eventType: 28,
                tags: [
                  "steam_award_nomination_request",
                  "mod_hide_library_overview",
                ],
              },
            }),
            n.push({
              label: Object(T.f)("#PartnerEvent_SteamAwardVoteRequest"),
              value: {
                eventType: 28,
                tags: ["steam_award_vote_request", "mod_hide_library_overview"],
              },
            }),
            n.unshift({
              value: { eventType: 15, tags: ["halloween"] },
              label: Object(T.f)("#PartnerEvent_15"),
            }),
            n.unshift({
              value: { eventType: 22, tags: ["halloween"] },
              label: Object(T.f)("#PartnerEvent_22"),
            }),
            n.unshift({
              value: { eventType: 23, tags: ["halloween"] },
              label: Object(T.f)("#PartnerEvent_23"),
            }),
            n.unshift({
              value: { eventType: 24, tags: ["halloween"] },
              label: Object(T.f)("#PartnerEvent_24"),
            }),
            n.unshift({
              value: { eventType: 35, tags: ["halloween"] },
              label: Object(T.f)("#PartnerEvent_35"),
            }),
            h.a.createElement(
              C.e,
              {
                strTitle: Object(T.f)("#EventModTile_ChangeEventType"),
                strDescription: Object(T.f)(
                  "#EventModTile_ChangeEventType_Desc",
                  e.GetEventTypeAsString()
                ),
                onCancel: t,
                onOK: () =>
                  this.setState({ bUpdating: !0 }, this.ChangeCategoryForEvent),
              },
              h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(
                  "div",
                  { className: je.CategoryChangeDialog },
                  h.a.createElement("br", null),
                  this.state.bUpdating &&
                    h.a.createElement(R.a, { size: "small" }),
                  this.state.strErrorMsg &&
                    h.a.createElement(
                      "div",
                      null,
                      Object(T.f)("#Chat_Settings_Error_ServerError"),
                      h.a.createElement("br", null),
                      this.state.strErrorMsg
                    ),
                  h.a.createElement(ae.a, {
                    isSearchable: !0,
                    onChange: this.OnChangeSelection,
                    value: this.state.newCategoryOption,
                    options: n,
                  })
                )
              )
            )
          );
        }
      };
      Object(r.b)([H.b], Ne.prototype, "ChangeCategoryForEvent", null),
        Object(r.b)([H.b], Ne.prototype, "OnChangeSelection", null),
        (Ne = Object(r.b)([_.a], Ne));
      class ze extends h.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bUpdating: !1,
              bAccept: this.props.eventModel.BHasTag("halloween2019"),
              bHorror: this.props.eventModel.BHasTag("horror"),
              bCute: this.props.eventModel.BHasTag("cute"),
            }),
            (this.m_cancelSignal = c.a.CancelToken.source());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "UpdateSeasonalTagDialog component unmounted"
          );
        }
        ChangeAcceptance() {
          this.setState({ bAccept: !this.state.bAccept });
        }
        ChangeHorror() {
          this.setState({ bHorror: !this.state.bHorror });
        }
        ChangeCute() {
          this.setState({ bCute: !this.state.bCute });
        }
        ApplyAction() {
          return Object(r.a)(this, void 0, void 0, function* () {
            let e = new Array(),
              t = new Array();
            this.state.bAccept
              ? (e.push("halloween2019"), t.push("halloween2019reviewed"))
              : (t.push("halloween2019"), e.push("halloween2019reviewed")),
              this.state.bCute ? e.push("cute") : t.push("cute"),
              this.state.bHorror ? e.push("horror") : t.push("horror");
            try {
              const { eventModel: n } = this.props;
              let a = yield me
                .Get()
                .UpdateTagsOnPartnerEvent(
                  this.m_cancelSignal,
                  n.clanSteamID,
                  n.AnnouncementGID,
                  e,
                  t,
                  new de().SetUpdateSeasonalTags(
                    this.state.bAccept
                      ? "halloween2019"
                      : "halloween2019reviewed"
                  )
                );
              (n.vecTags = a), this.props.closeModal();
            } catch (e) {
              let t = Object(d.a)(e);
              console.error("EventModerationTile " + t.strErrorMsg, t),
                this.setState({ strErrorMsg: t.strErrorMsg });
            }
          });
        }
        render() {
          const { eventModel: e, closeModal: t } = this.props;
          return h.a.createElement(
            C.e,
            {
              strTitle: Object(T.f)("#EventModTile_SeasonalTag"),
              onCancel: t,
              onOK: () => this.setState({ bUpdating: !0 }, this.ApplyAction),
            },
            h.a.createElement(
              h.a.Fragment,
              null,
              h.a.createElement(
                "div",
                { className: je.CategoryChangeDialog },
                h.a.createElement("input", {
                  id: "Acceptance",
                  type: "checkbox",
                  checked: this.state.bAccept,
                  onChange: this.ChangeAcceptance,
                }),
                h.a.createElement(
                  "label",
                  { htmlFor: "Acceptance" },
                  Object(T.f)("#EventModTile_SeasonalTag_Desc")
                ),
                h.a.createElement(
                  "div",
                  null,
                  Object(T.f)("#EventModTile_SeasonalTag_Desc_Secondary")
                ),
                h.a.createElement("input", {
                  id: "Horror",
                  type: "checkbox",
                  checked: this.state.bHorror,
                  onChange: this.ChangeHorror,
                }),
                h.a.createElement("label", { htmlFor: "Horror" }, "Horror Tag"),
                h.a.createElement("input", {
                  id: "Cute",
                  type: "checkbox",
                  checked: this.state.bCute,
                  onChange: this.ChangeCute,
                }),
                h.a.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                this.state.bUpdating &&
                  h.a.createElement(R.a, { size: "small" }),
                this.state.strErrorMsg &&
                  h.a.createElement(
                    "div",
                    null,
                    Object(T.f)("#Chat_Settings_Error_ServerError"),
                    h.a.createElement("br", null),
                    this.state.strErrorMsg
                  )
              )
            )
          );
        }
      }
      Object(r.b)([H.b], ze.prototype, "ChangeAcceptance", null),
        Object(r.b)([H.b], ze.prototype, "ChangeHorror", null),
        Object(r.b)([H.b], ze.prototype, "ChangeCute", null),
        Object(r.b)([H.b], ze.prototype, "ApplyAction", null);
      n("sRB7");
      var He = n("gOcu");
      let xe = class extends p.Component {
        constructor() {
          super(...arguments),
            (this.state = { bLoadingEvent: !0 }),
            (this.m_cancelSignal = c.a.CancelToken.source());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("SteamGameFestivalStoreDebug to unload ");
        }
        componentDidMount() {
          return Object(r.a)(this, void 0, void 0, function* () {
            const { clanEventGID: e, clanAccountID: t } = this.props;
            if (
              (console.log(e, t, typeof e, typeof t),
              e && !z.b.BHasClanEventModel(e))
            ) {
              let n = v.a.InitFromClanID(Number.parseInt(t)),
                a = yield z.b.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  n,
                  e,
                  0
                ),
                r = new Array(),
                i = new Array();
              if (a.BHasSaleEnabled()) {
                this.setState({
                  event: a,
                  bLoadingEvent: !1,
                  bLoadingApps: !0,
                  bLoadingDemos: !0,
                  bLoadingAssociatedDemoInfo: !0,
                });
                let e = new Map();
                a.jsondata.sale_sections.forEach((t) => {
                  "tabs" == t.section_type &&
                    t.tabs.forEach((t) => {
                      t.capsules.forEach((t) => {
                        "game" == t.type ||
                        "application" == t.type ||
                        "software" == t.type
                          ? e.has(t.id) || (e.set(t.id, !0), r.push(t.id))
                          : e.has(t.id) || (e.set(t.id, !0), i.push(t.id));
                      });
                    });
                });
                const t = {
                  include_assets: !0,
                  include_screenshots: !0,
                  include_release: !0,
                };
                yield ue.a.Get().QueueMultipleAppRequests(r, t),
                  this.setState({
                    rgAppIDs: r,
                    rgUnknownTypeAppIDs: i,
                    bLoadingApps: !1,
                  }),
                  yield ue.a.Get().QueueMultipleAppRequests(r, t),
                  this.setState({ bLoadingAssociatedDemoInfo: !1 }),
                  yield He.a.Get().LoadAppIDsBatch(r, this.m_cancelSignal);
                let n = new Array();
                He.a
                  .Get()
                  .GetAllDemoInfo()
                  .forEach((e) => n.push(e.demo_appid)),
                  yield ue.a.Get().QueueMultipleAppRequests(n, t),
                  this.setState({ bLoadingDemos: !1, rgDemoIDs: n });
              } else this.setState({ bLoadingEvent: !1, rgAppIDs: r });
            } else this.setState({ bLoadingEvent: !1 });
          });
        }
        render() {
          if (
            this.state.bLoadingEvent ||
            this.state.bLoadingDemos ||
            this.state.bLoadingApps ||
            this.state.bLoadingAssociatedDemoInfo
          )
            return p.createElement(R.a, {
              string:
                Object(T.f)("#Loading") +
                (this.state.bLoadingEvent
                  ? " Events"
                  : this.state.bLoadingApps
                  ? " Apps"
                  : this.state.bLoadingAssociatedDemoInfo
                  ? " Associated Demo Info"
                  : this.state.bLoadingDemos
                  ? " Demos"
                  : "done"),
              position: "center",
            });
          if (!this.state.event)
            return p.createElement("div", null, " Failed to load event");
          const { event: e } = this.state;
          if (!e.jsondata.bSaleEnabled)
            return p.createElement("div", null, "Not a sale event");
          let t = new Map();
          this.state.rgDemoIDs.forEach((e) => t.set(e, !0));
          let n = new Array(),
            a = new Array();
          this.state.rgAppIDs
            .filter((e) => !ue.a.Get().GetApp(e))
            .forEach((e) => {
              n.push(
                p.createElement(
                  "div",
                  { key: "missing: " + e },
                  p.createElement(
                    "a",
                    {
                      href: o.d.STORE_BASE_URL + "app/" + e + "/?beta=1",
                      target: "_blank",
                    },
                    e
                  )
                )
              ),
                a.push(e);
            });
          let r = new Array();
          this.state.rgAppIDs
            .filter((e) => ue.a.Get().GetApp(e))
            .forEach((e) => {
              if (!t.has(e) && !He.a.Get().BHasDemoAppID(e)) {
                let t = ue.a.Get().GetApp(e);
                r.push(
                  p.createElement(
                    "div",
                    { key: "missingdemo_" + e },
                    1 == (null == t ? void 0 : t.GetAppType()) &&
                      p.createElement(
                        "b",
                        null,
                        "--Error: Sale Page has Demo AppID, based game -- "
                      ),
                    null == t ? void 0 : t.GetName(),
                    " (",
                    e,
                    ")",
                    p.createElement(
                      "a",
                      {
                        href: Object(ye.h)(t.GetStorePageURL() + "?beta=0"),
                        target: "_blank",
                      },
                      "Store Page"
                    ),
                    " ",
                    p.createElement(
                      "a",
                      {
                        href: o.d.PARTNER_BASE_URL + "apps/landing/" + e,
                        target: "_blank",
                      },
                      "App Landing Page"
                    )
                  )
                );
              }
            });
          let i = 0,
            l = 0;
          this.state.rgAppIDs.forEach((e) => {
            let t = !1;
            if (ue.a.Get().GetApp(e) && He.a.Get().BHasDemoAppID(e)) {
              let n = He.a.Get().GetDemoEventInfo(e);
              ue.a.Get().GetApp(n.demo_appid).BIsComingSoon()
                ? ((i += 1), (t = !0))
                : (l += 1);
            }
          });
          let c = new Array(),
            d = 0;
          return (
            this.state.rgAppIDs.forEach((e) => {
              const t = ue.a.Get().GetApp(e);
              1 != (null == t ? void 0 : t.GetAppType()) && (d += 1);
            }),
            p.createElement(
              S.a,
              null,
              p.createElement(
                "h1",
                null,
                e.GetNameWithFallback(Object(s.l)(o.d.LANGUAGE))
              ),
              p.createElement(
                "div",
                null,
                p.createElement("b", null, "Unique AppIDs:"),
                " ",
                this.state.rgAppIDs.length,
                " "
              ),
              p.createElement(
                "div",
                null,
                p.createElement(
                  "b",
                  null,
                  "Visible Apps in ",
                  o.d.COUNTRY,
                  ":"
                ),
                " ",
                d
              ),
              p.createElement(
                "div",
                null,
                p.createElement("b", null, "Unknown AppID types:"),
                " ",
                this.state.rgUnknownTypeAppIDs.length
              ),
              p.createElement(
                "div",
                null,
                p.createElement("b", null, "Missing AppIDs:"),
                " ",
                " "
              ),
              p.createElement(
                "div",
                null,
                p.createElement("b", null, "Demo via DemoStore:"),
                " ",
                He.a.Get().GetNumDemos()
              ),
              p.createElement(
                "div",
                null,
                p.createElement("b", null, "Visible apps missing demo store:"),
                " ",
                r.length
              ),
              p.createElement(
                "div",
                null,
                p.createElement("b", null, "CApplications Loaded:"),
                " ",
                " "
              ),
              p.createElement(
                "div",
                null,
                p.createElement(
                  "b",
                  null,
                  "CApplication with Associated Demos:"
                ),
                " ",
                0
              ),
              p.createElement(
                "div",
                null,
                p.createElement(
                  "b",
                  null,
                  "  Associated with store page but not released: "
                ),
                " ",
                0
              ),
              p.createElement(
                "div",
                null,
                p.createElement(
                  "b",
                  null,
                  "CApplication with demo without association:"
                ),
                " ",
                0
              ),
              p.createElement(
                "div",
                null,
                p.createElement(
                  "b",
                  null,
                  "  Released but not associated with store page: "
                ),
                " ",
                0
              ),
              p.createElement(
                "div",
                null,
                p.createElement("b", null, "CApplication missing:"),
                " "
              ),
              p.createElement(
                "div",
                null,
                p.createElement(
                  "b",
                  null,
                  "CApplication without demo store and demo associations:"
                ),
                " "
              ),
              p.createElement(
                "div",
                null,
                p.createElement("b", null, "Released Demo: "),
                l
              ),
              p.createElement(
                "div",
                null,
                p.createElement("b", null, "Unreleased Demo: "),
                i
              ),
              p.createElement("hr", null),
              p.createElement("h2", null, "Missing Appids:"),
              n,
              p.createElement(
                "h2",
                null,
                "Missing BOTH demo list and associated demo on product page:"
              ),
              c,
              p.createElement(
                "h2",
                null,
                "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
              ),
              r
            )
          );
        }
      };
      xe = Object(r.b)([_.a], xe);
      var We = n("hKFG"),
        qe = n("rkHy");
      t.default = () =>
        Object(We.c)()
          ? h.a.createElement(
              qe.a,
              null,
              h.a.createElement(
                b.d,
                null,
                h.a.createElement(b.b, {
                  path: a.b.EventGameFestivalDebug(),
                  render: (e) =>
                    h.a.createElement(
                      xe,
                      Object.assign({}, e, {
                        clanAccountID: e.match.params.clanacountid,
                        clanEventGID: e.match.params.claneventgid,
                      })
                    ),
                }),
                h.a.createElement(b.b, {
                  exact: !0,
                  path: a.b.EventBackfill(),
                  render: (e) => h.a.createElement(Z, Object.assign({}, e)),
                }),
                h.a.createElement(b.b, {
                  path: a.b.EventRSSModeration(),
                  render: (e) => h.a.createElement(D, Object.assign({}, e)),
                }),
                h.a.createElement(b.b, {
                  path: a.b.EventModeration(),
                  render: (e) =>
                    h.a.createElement(
                      Be,
                      Object.assign({}, e, {
                        appid:
                          e.match.params.appid &&
                          Number.parseInt(e.match.params.appid),
                      })
                    ),
                })
              )
            )
          : null;
    },
    "2l+k": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      });
      var a = n("mrSG"),
        r = n("vDqi"),
        i = n.n(r),
        s = n("2vnA"),
        o = n("lkRc"),
        l = n("WBba"),
        c = n("bxBv"),
        d = n("hJ1w"),
        m = (n("mgoM"), n("65aj"), n("kLLr")),
        u = (n("AiWL"), n("6oCP")),
        _ = n("NtSG"),
        p = n("r64O"),
        h = n("OS6B");
      class b {
        constructor(e) {
          (this.m_mapURLToPosted = new Map()),
            (this.m_clanAccountID = e.clanid),
            (this.m_clanSteamID = m.a.InitFromClanID(this.m_clanAccountID)),
            Object(s.G)(() => {
              (this.m_strRSSFeedURL = e.rss_feed_url),
                (this.m_strRSSGID = e.rss_feed_gid),
                (this.m_eRSSFeedLanguage = e.rss_feed_language),
                (this.m_rtimeRSSLastChecked = e.rss_feed_last_checked),
                (this.m_nPollIntervalSeconds = e.poll_interval),
                (this.m_eCuratorLanguage = e.curation_language);
            });
        }
        GetFeedLanguageHandleUnset() {
          return -1 == this.m_eRSSFeedLanguage
            ? -1 == this.m_eCuratorLanguage
              ? 0
              : this.m_eCuratorLanguage
            : this.m_eRSSFeedLanguage;
        }
        GetCuratorLanguage() {
          return -1 == this.m_eCuratorLanguage ? 0 : this.m_eCuratorLanguage;
        }
        BHasSavedRSSURL() {
          return Boolean(this.m_strRSSFeedURL);
        }
        GetRSSUrl() {
          return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : "";
        }
        GetRSSLastRtimeChecked() {
          return this.m_rtimeRSSLastChecked;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanAccountID;
        }
        BHasSetupFeed(e) {
          return Boolean(this.m_strRSSGID) && this.m_strRSSFeedURL === e;
        }
        BIsAutomationEnabled() {
          return Boolean(this.m_nPollIntervalSeconds > 0);
        }
        BHasFeedGID() {
          return Boolean(this.m_strRSSGID);
        }
        PreviewPartnerEventsFromRSSFeed(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "PreviewPartnerEventsFromRSSFeed: User not logged in"
                ),
                null
              );
            const t = c.b.Init(d.c);
            t.Body().set_rss_url(e),
              t.Body().set_lang(this.GetFeedLanguageHandleUnset());
            let n = yield d.e.PreviewPartnerEvents(
              v.Get().GetCuratorTransport(),
              t
            );
            return (
              1 != n.GetEResult() &&
                console.error(
                  "PreviewPartnerEventsFromRSSFeed error: " +
                    n.GetEMsg() +
                    " " +
                    n.GetEResult()
                ),
              n
            );
          });
        }
        FetchPublishedEvents(e = 100) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return (
                console.error("FetchPublishedEvents: User not logged in"), null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "FetchPublishedEvents: Need to create a news feed first"
                ),
                null
              );
            const t = c.b.Init(d.b);
            t.Body().set_news_feed_gid(this.m_strRSSGID),
              t.Body().set_amount(e);
            let n = yield d.e.GetBatchPublishedPartnerEvent(
              v.Get().GetCuratorTransport(),
              t
            );
            return (
              1 != n.GetEResult()
                ? console.error(
                    "FetchPublishedEvents error: EMsg:" +
                      Object(_.a)(n.GetEMsg()) +
                      " EResult:" +
                      n.GetEResult() +
                      " msg:" +
                      n.Hdr().error_message()
                  )
                : Object(s.G)(() => {
                    for (let e = 0; e < n.Body().clan_event_gid().length; ++e) {
                      let t = {
                        url: n.Body().news_url()[e],
                        clan_event_gid: n.Body().clan_event_gid()[e],
                        news_post_gid: n.Body().news_post_gid()[e],
                      };
                      this.m_mapURLToPosted.set(t.url, t);
                    }
                  }),
              n
            );
          });
        }
        MapArticleURLToClanEventGID(e) {
          let t = this.m_mapURLToPosted.get(e);
          if (t) return t.clan_event_gid;
        }
        BIsLoggedIn() {
          return o.k.logged_in;
        }
        CreateOrUpdateRSSNewFeed(e, t = 0) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let n = new FormData();
            n.append("sessionid", o.d.SESSIONID),
              n.append("gid", this.m_strRSSGID),
              n.append("lang", "" + this.GetCuratorLanguage()),
              n.append("rss_url", e),
              n.append("polling_interval", "" + t);
            const a =
              o.d.STORE_BASE_URL +
              "curator/" +
              this.m_clanAccountID +
              "/admin/ajaxmanagerssfeed";
            let r = yield i.a.post(a, n, { withCredentials: !0 });
            return (
              1 == r.data.success &&
                Object(s.G)(() => {
                  (this.m_strRSSGID = r.data.gid),
                    (this.m_strRSSFeedURL = e),
                    (this.m_nPollIntervalSeconds = t);
                }),
              r.data
            );
          });
        }
        UpdateAutomation(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            return this.CreateOrUpdateRSSNewFeed(
              this.m_strRSSFeedURL,
              e ? 300 : 0
            );
          });
        }
        CheckForNewUpdate() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_strRSSGID) {
              let e = new FormData();
              e.append("sessionid", o.d.SESSIONID),
                e.append("gid", this.m_strRSSGID);
              const t =
                o.d.STORE_BASE_URL +
                "curator/" +
                this.m_clanAccountID +
                "/admin/ajaxcheckfornews";
              yield i.a.post(t, e, { withCredentials: !0 });
            }
          });
        }
        CreatePost(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: User not logged in"
                ),
                null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: Need to create a news feed first"
                ),
                null
              );
            let n = new d.a();
            n.set_gid(e.post.gid),
              n.set_news_feed_gid(this.m_strRSSGID),
              n.set_title(e.post.title),
              n.set_url(e.post.url),
              n.set_author(e.post.author),
              n.set_rtime_date(e.post.rtime_date),
              n.set_contents(e.post.contents),
              n.set_commited(e.post.commited),
              n.set_deleted(e.post.deleted),
              n.set_tags(e.post.tags),
              n.set_appids(e.post.appids),
              n.set_recommendation_state(e.post.recommendation_state),
              n.set_received_for_free(e.post.received_for_free),
              n.set_received_compensation(e.post.received_compensation),
              n.set_blurb(e.post.blurb);
            const a = c.b.Init(d.d);
            a.Body().set_post(n), a.Body().set_draft(t);
            let r = yield d.e.PublishPartnerEvent(
              v.Get().GetCuratorTransport(),
              a
            );
            return (
              1 != r.GetEResult()
                ? console.error(
                    "CreatePost error: " + r.GetEMsg() + " " + r.GetEResult()
                  )
                : (Object(s.G)(() => {
                    let t = {
                      url: e.post.url,
                      clan_event_gid: r.Body().clan_event_gid(),
                      news_post_gid: r.Body().news_post_gid(),
                    };
                    this.m_mapURLToPosted.set(e.post.url, t);
                  }),
                  u.b.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    this.m_clanSteamID,
                    r.Body().clan_event_gid(),
                    0
                  )),
              r
            );
          });
        }
      }
      Object(a.b)([s.C], b.prototype, "m_strRSSFeedURL", void 0),
        Object(a.b)([s.C], b.prototype, "m_strRSSGID", void 0),
        Object(a.b)([s.C], b.prototype, "m_rtimeRSSLastChecked", void 0),
        Object(a.b)([s.C], b.prototype, "m_nPollIntervalSeconds", void 0),
        Object(a.b)([s.C], b.prototype, "m_eRSSFeedLanguage", void 0),
        Object(a.b)([s.C], b.prototype, "m_eCuratorLanguage", void 0),
        Object(a.b)([s.C], b.prototype, "m_mapURLToPosted", void 0);
      class v {
        constructor() {
          (this.m_mapClanAccountToAdmin = new Map()),
            (this.m_defaultAdmin = void 0),
            (this.m_mapClanToEventRSSStats = new Map()),
            (this.m_setPendingClanInfo = new Set()),
            (this.m_cClanInfoRequestsInFlight = 0);
        }
        GetCuratorTransport() {
          return (
            Object(p.a)(
              this.m_transport,
              "Expects Transpoate to be initialized but it is now"
            ),
            this.m_transport
          );
        }
        GetDefaultAdmin() {
          return this.m_defaultAdmin;
        }
        GetRSSAdminStats(e) {
          return this.m_mapClanToEventRSSStats.get(e);
        }
        static Get() {
          return (
            v.s_CuratorAdminStore ||
              ((v.s_CuratorAdminStore = new v()),
              v.s_CuratorAdminStore.Init(),
              "dev" === o.d.WEB_UNIVERSE &&
                (window.g_CuratorAdminStore = v.s_CuratorAdminStore)),
            v.s_CuratorAdminStore
          );
        }
        Init() {
          let e = Object(o.h)("curatoradmin", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_defaultAdmin = new b(e)),
            this.m_mapClanAccountToAdmin.set(e.clanid, this.m_defaultAdmin)),
            this.ValidateWebAPI(e) &&
              (this.m_transport = new l.a(
                o.d.WEBAPI_BASE_URL,
                e.webapi_token
              ).GetServiceTransport());
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "number" == typeof e.clanid;
        }
        ValidateWebAPI(e) {
          return e && "string" == typeof e.webapi_token;
        }
        BIsLoggedIn() {
          return o.k.logged_in;
        }
        BHavePendingInfoRequests() {
          return (
            this.m_setPendingClanInfo.size > 0 ||
            this.m_cClanInfoRequestsInFlight > 0
          );
        }
        BIsLoadingClanID(e) {
          return this.m_setPendingClanInfo.has(e);
        }
        BHasClanIDLoaded(e) {
          return this.m_mapClanAccountToAdmin.has(e);
        }
        GetRSSAdminForClanAccountID(e) {
          return this.m_mapClanAccountToAdmin.get(e);
        }
        QueueCuratorAdminInfoLoad(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            return e
              ? this.m_mapClanAccountToAdmin.has(e)
                ? Promise.resolve()
                : (this.m_setPendingClanInfo.size ||
                    ((this.m_PendingClanInfoPromise = new Promise(
                      (e) => (this.m_PendingClanInfoResolve = e)
                    )),
                    window.setTimeout(() => this.FlushPendingClanInfo(), 25)),
                  this.m_setPendingClanInfo.add(e),
                  this.m_PendingClanInfoPromise)
              : (Object(p.a)(
                  !e,
                  "unexpected clanid of zero or undefined: " + e
                ),
                Promise.resolve());
          });
        }
        FlushPendingClanInfo() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = this.m_PendingClanInfoResolve,
              t = Array.from(this.m_setPendingClanInfo);
            (this.m_PendingClanInfoPromise = void 0),
              (this.m_PendingClanInfoResolve = void 0),
              this.m_setPendingClanInfo.clear(),
              yield this.LoadBatchedClanRSSAdminInfo(t),
              e();
          });
        }
        EnsureClanInfoLoaded(e) {
          const t = e.filter(
            (e) =>
              !this.m_mapClanAccountToAdmin.has(e) &&
              this.m_setPendingClanInfo.has(e)
          );
          return (
            t.forEach((e) => this.QueueCuratorAdminInfoLoad(e)),
            t.length > 0 && this.m_PendingClanInfoPromise
              ? this.m_PendingClanInfoPromise
              : Promise.resolve()
          );
        }
        LoadBatchedClanRSSAdminInfo(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.m_cClanInfoRequestsInFlight++;
            let t = e.filter((e) => !this.m_mapClanAccountToAdmin.has(e));
            for (; t.length > 0; ) {
              const n = Math.min(50, t.length);
              t.slice(0, n);
              t = t.slice(n);
              try {
                const t =
                    o.d.STORE_BASE_URL + "events_admin/ajaxgetrssadmininfo",
                  n = { clanids: e },
                  a = yield i.a.get(t, { params: n, withCredentials: !0 });
                if (
                  a &&
                  a.data &&
                  1 == a.data.success &&
                  a.data.rss_admin_infos &&
                  Array.isArray(a.data.rss_admin_infos)
                )
                  Object(s.G)(() => {
                    a.data.rss_admin_infos.forEach((e) => {
                      this.m_mapClanAccountToAdmin.set(e.clanid, new b(e));
                    }),
                      a.data.rss_event_stats.forEach((e) => {
                        this.m_mapClanToEventRSSStats.set(e.clan_account_id, e);
                      });
                  });
                else {
                  const e = Object(h.a)(a.data || {});
                  console.error(
                    "LoadBatchedClanRSSAdminInfo error:" + e.strErrorMsg,
                    e
                  );
                }
              } catch (e) {
                const t = Object(h.a)(e);
                console.error(
                  "LoadBatchedClanRSSAdminInfo catched error:" + t.strErrorMsg,
                  t
                );
              }
            }
            this.m_cClanInfoRequestsInFlight--;
          });
        }
      }
      Object(a.b)(
        [s.C.shallow],
        v.prototype,
        "m_mapClanAccountToAdmin",
        void 0
      ),
        Object(a.b)(
          [s.C.shallow],
          v.prototype,
          "m_mapClanToEventRSSStats",
          void 0
        );
    },
    "3rT3": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return m;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        s = n("EC67"),
        o = (n("r64O"), n("wjMc")),
        l = n("2l+k"),
        c = n("IjL/"),
        d = n("9w6b");
      class m extends i.a.Component {
        constructor() {
          super(...arguments), (this.state = { bIsLoading: !0 });
        }
        componentDidMount() {
          return Object(a.a)(this, void 0, void 0, function* () {
            l.a.Get(),
              yield d.a.InitGlobal(),
              this.setState({ bIsLoading: !1 });
          });
        }
        render() {
          return this.state.bIsLoading
            ? null
            : i.a.createElement(
                c.a,
                null,
                i.a.createElement(
                  s.d,
                  null,
                  i.a.createElement(s.b, {
                    exact: !0,
                    path:
                      "/:prefix(curator|pub|publisher|dev|developer|franchise)/:curatorVanity/admin/manage_rss",
                    component: o.b,
                  }),
                  i.a.createElement(s.b, null, !1)
                )
              );
        }
      }
    },
    A2AY: function (e, t, n) {
      e.exports = {
        Ctn: "managerss_Ctn_1cSpO",
        RssInput: "managerss_RssInput_8NQ9L",
        PreviewListCtn: "managerss_PreviewListCtn_HRcOM",
        PostCtn: "managerss_PostCtn_3MI2h",
        PostTitle: "managerss_PostTitle_1Zsns",
        ActivePost: "managerss_ActivePost_h-qBF",
        PostDate: "managerss_PostDate_2vXmu",
        ErrorPost: "managerss_ErrorPost_aBLy2",
        PostDraft: "managerss_PostDraft_10_gL",
        PostStaged: "managerss_PostStaged_nNzd6",
        PreviewListBtn: "managerss_PreviewListBtn_3NT8s",
        PreviewButtons: "managerss_PreviewButtons_3lbyc",
        UrlSettingCtn: "managerss_UrlSettingCtn_iN4At",
        Error: "managerss_Error_1ZZ51",
        DialogPostTitle: "managerss_DialogPostTitle_1XamD",
        DashboardBtn: "managerss_DashboardBtn_2Hlrm",
        RawRSS: "managerss_RawRSS_2mOAh",
        ButtonCtn: "managerss_ButtonCtn_13jSB",
        PreviewBtn: "managerss_PreviewBtn_3HssD",
        ViewRaw: "managerss_ViewRaw_2jvHr",
        LanguageRow: "managerss_LanguageRow_g_9tL",
        LanguageTitle: "managerss_LanguageTitle_2jkBi",
        LanguageSet: "managerss_LanguageSet_2zsMr",
      };
    },
    E9gz: function (e, t, n) {
      e.exports = {
        AnalysisCtn: "eventmoderation_AnalysisCtn_1YGfW",
        AnalysisMissing: "eventmoderation_AnalysisMissing_rH1Dt",
        ModerationContainer: "eventmoderation_ModerationContainer_4HRKp",
        FilterContainer: "eventmoderation_FilterContainer_qY07T",
        Tile: "eventmoderation_Tile_3oU1y",
        DetailsMiddle: "eventmoderation_DetailsMiddle_VcJpZ",
        EventModerateMarkReview:
          "eventmoderation_EventModerateMarkReview_1RqKA",
        EventModerateMarkReReview:
          "eventmoderation_EventModerateMarkReReview_qd-K7",
        TileEventOtherType: "eventmoderation_TileEventOtherType_3LUrW",
        TileCapsule: "eventmoderation_TileCapsule_36tP8",
        NoCapsuleFallback: "eventmoderation_NoCapsuleFallback_16oQL",
        NoCapsule: "eventmoderation_NoCapsule_1onVF",
        TileDetails: "eventmoderation_TileDetails_2mRup",
        DetailsLeft: "eventmoderation_DetailsLeft_1O0y5",
        EventTitle: "eventmoderation_EventTitle_3ahHd",
        DetailsRight: "eventmoderation_DetailsRight_2BaxW",
        ArtHeader: "eventmoderation_ArtHeader_38IkF",
        ArtSpotlight: "eventmoderation_ArtSpotlight_2oUPY",
        ModeratedFlagCtn: "eventmoderation_ModeratedFlagCtn_2JGGc",
        TitleLink: "eventmoderation_TitleLink_1OG__",
        TileAppInfo: "eventmoderation_TileAppInfo_2IJ__",
        TileAppInfoTitle: "eventmoderation_TileAppInfoTitle_2X75q",
        TileAppInfoImage: "eventmoderation_TileAppInfoImage_1rVmL",
        TileSplit: "eventmoderation_TileSplit_aaFuC",
        TileTitle: "eventmoderation_TileTitle_yJw1i",
        TimeWidth: "eventmoderation_TimeWidth_xSOgV",
        CategoryChangeDialog: "eventmoderation_CategoryChangeDialog_1VSAj",
        Button: "eventmoderation_Button_wu9Kr",
        RightSideTitles: "eventmoderation_RightSideTitles_XDAwD",
        DateAndTime: "eventmoderation_DateAndTime_2cW9N",
        StoreHeaderAdjust: "eventmoderation_StoreHeaderAdjust_3U7ja",
        LastUpdateTime: "eventmoderation_LastUpdateTime_2x7zH",
        EventTimingBlock: "eventmoderation_EventTimingBlock_31d_R",
        TileEventType: "eventmoderation_TileEventType_1z1xt",
        ChannelInfo: "eventmoderation_ChannelInfo_H__RK",
        HasAdultContent: "eventmoderation_HasAdultContent_2PcmC",
      };
    },
    WGPV: function (e, t, n) {
      e.exports = {
        SectionContainer: "rss_moderation_SectionContainer_3P-ff",
        ModSectionTitle: "rss_moderation_ModSectionTitle_2lc8m",
        ResizeButton: "rss_moderation_ResizeButton_29RNN",
        TileContainer: "rss_moderation_TileContainer_2D4XH",
        CreatorCtn: "rss_moderation_CreatorCtn_GKust",
        TileSpread: "rss_moderation_TileSpread_1s_El",
      };
    },
    hJ1w: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return d;
        }),
        n.d(t, "d", function () {
          return _;
        }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "e", function () {
          return v;
        });
      var a = n("hRO2"),
        r = n("OS8t");
      const i = a.Message;
      class s extends i {
        constructor(e = null) {
          super(),
            s.prototype.gid || r.a(s.M()),
            i.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  gid: {
                    n: 1,
                    br: r.d.readFixed64String,
                    bw: r.h.writeFixed64String,
                  },
                  name: { n: 2, br: r.d.readString, bw: r.h.writeString },
                  type: { n: 3, d: 0, br: r.d.readUint32, bw: r.h.writeUint32 },
                  url: { n: 4, br: r.d.readString, bw: r.h.writeString },
                  associated_apps: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: r.d.readUint32,
                    bw: r.h.writeRepeatedUint32,
                  },
                  poll_interval: {
                    n: 6,
                    d: 300,
                    br: r.d.readUint32,
                    bw: r.h.writeUint32,
                  },
                  kv_description: {
                    n: 7,
                    br: r.d.readString,
                    bw: r.h.writeString,
                  },
                  kv_filter: { n: 8, br: r.d.readString, bw: r.h.writeString },
                  publish_to_clan_account_id: {
                    n: 9,
                    br: r.d.readUint32,
                    bw: r.h.writeUint32,
                  },
                  language: { n: 10, br: r.d.readUint32, bw: r.h.writeUint32 },
                  last_error: {
                    n: 11,
                    br: r.d.readUint32,
                    bw: r.h.writeUint32,
                  },
                  last_update: {
                    n: 12,
                    br: r.d.readUint32,
                    bw: r.h.writeUint32,
                  },
                  last_checked: {
                    n: 13,
                    br: r.d.readUint32,
                    bw: r.h.writeUint32,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = r.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(s.M(), e, t);
        }
        static fromObject(e) {
          return r.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new s();
          return s.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNewsFeedDef";
        }
      }
      class o extends i {
        constructor(e = null) {
          super(),
            o.prototype.gid || r.a(o.M()),
            i.initialize(this, e, 0, -1, [11], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  gid: {
                    n: 1,
                    br: r.d.readFixed64String,
                    bw: r.h.writeFixed64String,
                  },
                  news_feed_gid: {
                    n: 2,
                    br: r.d.readFixed64String,
                    bw: r.h.writeFixed64String,
                  },
                  title: { n: 3, br: r.d.readString, bw: r.h.writeString },
                  url: { n: 4, br: r.d.readString, bw: r.h.writeString },
                  author: { n: 5, br: r.d.readString, bw: r.h.writeString },
                  rtime_date: { n: 6, br: r.d.readUint32, bw: r.h.writeUint32 },
                  contents: { n: 7, br: r.d.readString, bw: r.h.writeString },
                  commited: { n: 8, br: r.d.readBool, bw: r.h.writeBool },
                  deleted: { n: 9, br: r.d.readBool, bw: r.h.writeBool },
                  tags: { n: 10, br: r.d.readString, bw: r.h.writeString },
                  appids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: r.d.readUint32,
                    bw: r.h.writeRepeatedUint32,
                  },
                  recommendation_state: {
                    n: 12,
                    br: r.d.readEnum,
                    bw: r.h.writeEnum,
                  },
                  received_compensation: {
                    n: 13,
                    br: r.d.readBool,
                    bw: r.h.writeBool,
                  },
                  received_for_free: {
                    n: 14,
                    br: r.d.readBool,
                    bw: r.h.writeBool,
                  },
                  blurb: { n: 15, br: r.d.readString, bw: r.h.writeString },
                  event_subtitle: {
                    n: 16,
                    br: r.d.readString,
                    bw: r.h.writeString,
                  },
                  event_summary: {
                    n: 17,
                    br: r.d.readString,
                    bw: r.h.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = r.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(o.M(), e, t);
        }
        static fromObject(e) {
          return r.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new o();
          return o.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNewsFeedPostDef";
        }
      }
      class l extends i {
        constructor(e = null) {
          super(),
            l.prototype.converted_content || r.a(l.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  converted_content: {
                    n: 1,
                    br: r.d.readString,
                    bw: r.h.writeString,
                  },
                  found_html: { n: 2, br: r.d.readBool, bw: r.h.writeBool },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = r.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(l.M(), e, t);
        }
        static fromObject(e) {
          return r.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new l();
          return l.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_ConvertHTMLToBBCode_Response";
        }
      }
      class c extends i {
        constructor(e = null) {
          super(),
            c.prototype.rss_message || r.a(c.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  rss_message: {
                    n: 1,
                    br: r.d.readString,
                    bw: r.h.writeString,
                  },
                  unique_id: { n: 2, br: r.d.readString, bw: r.h.writeString },
                  title: { n: 3, br: r.d.readString, bw: r.h.writeString },
                  desc: { n: 4, br: r.d.readString, bw: r.h.writeString },
                  jsondata: { n: 5, br: r.d.readString, bw: r.h.writeString },
                  post: { n: 6, c: o },
                  valid_post: { n: 7, br: r.d.readBool, bw: r.h.writeBool },
                  post_error_msg: {
                    n: 8,
                    br: r.d.readString,
                    bw: r.h.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = r.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(c.M(), e, t);
        }
        static fromObject(e) {
          return r.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new c();
          return c.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNewsPartnerEventPreview";
        }
      }
      class d extends i {
        constructor(e = null) {
          super(),
            d.prototype.rss_url || r.a(d.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  rss_url: { n: 1, br: r.d.readString, bw: r.h.writeString },
                  lang: { n: 2, br: r.d.readUint32, bw: r.h.writeUint32 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = r.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(d.M(), e, t);
        }
        static fromObject(e) {
          return r.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_PreviewPartnerEvents_Request";
        }
      }
      class m extends i {
        constructor(e = null) {
          super(),
            m.prototype.rss_url || r.a(m.M()),
            i.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  rss_url: { n: 1, br: r.d.readString, bw: r.h.writeString },
                  results: { n: 2, c: c, r: !0, q: !0 },
                  error_msg: { n: 3, br: r.d.readString, bw: r.h.writeString },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = r.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(m.M(), e, t);
        }
        static fromObject(e) {
          return r.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_PreviewPartnerEvents_Response";
        }
      }
      class u extends i {
        constructor(e = null) {
          super(),
            u.prototype.feeds || r.a(u.M()),
            i.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { feeds: { n: 1, c: s, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = r.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(u.M(), e, t);
        }
        static fromObject(e) {
          return r.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_GetNewsFeedByRepublishClan_Response";
        }
      }
      class _ extends i {
        constructor(e = null) {
          super(),
            _.prototype.post || r.a(_.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  post: { n: 1, c: o },
                  draft: { n: 2, br: r.d.readBool, bw: r.h.writeBool },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = r.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(_.M(), e, t);
        }
        static fromObject(e) {
          return r.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new _();
          return _.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_PublishPartnerEvent_Request";
        }
      }
      class p extends i {
        constructor(e = null) {
          super(),
            p.prototype.clan_event_gid || r.a(p.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: r.d.readFixed64String,
                    bw: r.h.writeFixed64String,
                  },
                  news_post_gid: {
                    n: 2,
                    br: r.d.readFixed64String,
                    bw: r.h.writeFixed64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = r.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(p.M(), e, t);
        }
        static fromObject(e) {
          return r.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new p();
          return p.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_PublishPartnerEvent_Response";
        }
      }
      class h extends i {
        constructor(e = null) {
          super(),
            h.prototype.news_feed_gid || r.a(h.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  news_feed_gid: {
                    n: 1,
                    br: r.d.readFixed64String,
                    bw: r.h.writeFixed64String,
                  },
                  start_index: {
                    n: 2,
                    d: 0,
                    br: r.d.readUint32,
                    bw: r.h.writeUint32,
                  },
                  amount: {
                    n: 3,
                    d: 100,
                    br: r.d.readUint32,
                    bw: r.h.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = r.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(h.M(), e, t);
        }
        static fromObject(e) {
          return r.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_GetBatchPublishedPartnerEvent_Request";
        }
      }
      class b extends i {
        constructor(e = null) {
          super(),
            b.prototype.clan_account_id || r.a(b.M()),
            i.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: r.d.readUint32,
                    bw: r.h.writeUint32,
                  },
                  news_feed_gid: {
                    n: 2,
                    br: r.d.readFixed64String,
                    bw: r.h.writeFixed64String,
                  },
                  clan_event_gid: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: r.d.readFixed64String,
                    bw: r.h.writeRepeatedFixed64String,
                  },
                  news_post_gid: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: r.d.readFixed64String,
                    bw: r.h.writeRepeatedFixed64String,
                  },
                  news_url: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: r.d.readString,
                    bw: r.h.writeRepeatedString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = r.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return r.g(b.M(), e, t);
        }
        static fromObject(e) {
          return r.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            n = new b();
          return b.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_GetBatchPublishedPartnerEvent_Response";
        }
      }
      var v;
      !(function (e) {
        (e.ConvertHTMLToBBCode = function (e, t) {
          return e.SendMsg("News.ConvertHTMLToBBCode#1", t, l, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.PreviewPartnerEvents = function (e, t) {
            return e.SendMsg("News.PreviewPartnerEvents#1", t, m, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetNewsFeedByRepublishClan = function (e, t) {
            return e.SendMsg("News.GetNewsFeedByRepublishClan#1", t, u, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.PublishPartnerEvent = function (e, t) {
            return e.SendMsg("News.PublishPartnerEvent#1", t, p, {
              ePrivilege: 1,
            });
          }),
          (e.GetBatchPublishedPartnerEvent = function (e, t) {
            return e.SendMsg("News.GetBatchPublishedPartnerEvent#1", t, b, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(v || (v = {}));
    },
    hKFG: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return m;
      }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return _;
        });
      var a = n("mrSG"),
        r = n("iO5U"),
        i = n("q1tI"),
        s = n("WBba"),
        o = n("C4Nl"),
        l = n("X2UP"),
        c = n("r64O"),
        d = n("lkRc");
      function m() {
        const e = Object(l.a)("usePartnerStoreBrowseAPI"),
          [t, n] = Object(i.useState)(!1);
        return (
          Object(i.useEffect)(() => {
            (function (e = !1) {
              return Object(a.a)(this, void 0, void 0, function* () {
                if (e && o.a.BIsInitialized()) return;
                const t = Object(d.h)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                Object(c.a)(Boolean(t), "require partnerbrowse_webapi_token");
                const n = new s.a(d.d.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != d.d.WEB_UNIVERSE && "beta" != d.d.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  u(t),
                  o.a.Initialize(n, d.k.is_partner_member)
                );
              });
            })().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || n(!0);
            });
          }, []),
          t
        );
      }
      function u(e) {
        r.a.BIsInitialized() || r.a.Initialize(new s.a(d.d.WEBAPI_BASE_URL, e));
      }
      function _(e) {
        return r.a.BIsInitialized() || u(e || null), !0;
      }
    },
    "r+ba": function (e, t, n) {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "partnereventwebrowembed_Container_2Jd3M",
        StoreHeaderAdjust: "partnereventwebrowembed_StoreHeaderAdjust_3YyCp",
        SectionButtonCtn: "partnereventwebrowembed_SectionButtonCtn_1HP0y",
        SectionButton: "partnereventwebrowembed_SectionButton_3n8sw",
        EventsSummariesCtn: "partnereventwebrowembed_EventsSummariesCtn_1snIw",
        LatestUpdateButtonCtn:
          "partnereventwebrowembed_LatestUpdateButtonCtn_2vEwZ",
        LatestUpdateIcon: "partnereventwebrowembed_LatestUpdateIcon_mq3RO",
        LatestUpdateButton: "partnereventwebrowembed_LatestUpdateButton_1TRFt",
      };
    },
    rkHy: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n("wd/R"),
        r = n("q1tI"),
        i = n("WBba"),
        s = n("qD+2"),
        o = n("9w6b"),
        l = n("6oCP"),
        c = n("hKFG"),
        d = n("TLQK"),
        m = n("lkRc");
      function u(e) {
        const [t, n] = r.useState(o.a.IsInitialized());
        return (
          r.useEffect(() => {
            s.a.Init(new i.a(m.d.WEBAPI_BASE_URL)),
              l.b.Init(),
              o.a.InitGlobal().then(() => n(!0)),
              Object(c.a)(null);
          }, []),
          r.useEffect(() => {
            const e = Object(d.c)();
            e && a.locale(e);
          }, []),
          t ? e.children : null
        );
      }
    },
    vNkc: function (e, t, n) {
      e.exports = { Error: "eventbackfill_Error_1eWgI" };
    },
    wjMc: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return k;
      });
      var a = n("mrSG"),
        r = n("vDqi"),
        i = n.n(r),
        s = n("2l+k"),
        o = n("lkRc"),
        l = (n("65aj"), n("kLLr"));
      n("AiWL"), n("UCyf");
      class c {
        constructor() {
          this.m_mapClanToRecommendation = new Map();
        }
        static Get() {
          return (
            c.s_CuratorStore ||
              ((c.s_CuratorStore = new c()),
              c.s_CuratorStore.Init(),
              (window.g_CuratorRecommendationStore = c.s_CuratorStore)),
            c.s_CuratorStore
          );
        }
        Init() {}
        GetReviewForApp(e, t) {
          if (this.m_mapClanToRecommendation.has(e.GetAccountID())) {
            return this.m_mapClanToRecommendation.get(e.GetAccountID()).get(t);
          }
        }
        BHasReviewForApp(e, t) {
          return Boolean(this.GetReviewForApp(e, t));
        }
        BHasReviewForAppByClanAccount(e, t) {
          let n = l.a.InitFromClanID(e);
          return Boolean(this.GetReviewForApp(n, t));
        }
        LoadAppRecommendation(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.m_mapClanToRecommendation.has(e.GetAccountID()) ||
              this.m_mapClanToRecommendation.set(e.GetAccountID(), new Map());
            let n = this.m_mapClanToRecommendation.get(e.GetAccountID());
            const a = [];
            if (
              (t.forEach((e) => {
                n.has(e) || a.push(e);
              }),
              a.length > 0)
            ) {
              const t =
                  o.d.STORE_BASE_URL +
                  "curator/" +
                  e.GetAccountID() +
                  "/admin/ajaxgetrecbyapps",
                r = yield i.a.get(t, {
                  params: {
                    appids: a,
                    cc: o.d.COUNTRY || "US",
                    l: o.d.LANGUAGE,
                  },
                }),
                s = r && r.data;
              s &&
                s.rec_app &&
                s.rec_app.forEach((e) => {
                  n.set(Number(e.appid), e);
                });
            }
          });
        }
      }
      var d = n("TyAF"),
        m = n("q1tI"),
        u = n.n(m),
        _ = n("mgoM"),
        p = n("3+zv"),
        h = (n("hJ1w"), n("6oCP")),
        b = n("Mgs7"),
        v = n("T27q"),
        g = n("fpVW"),
        E = n.n(g),
        S = n("r+ba"),
        f = n("Jqb/"),
        C = n("ka0M"),
        O = n("0OaU"),
        w = n("+d9t"),
        R = n("exH9"),
        y = n("X3Ds"),
        j = n("TLQK"),
        M = n("OS6B"),
        A = n("opsS"),
        T = n("A2AY"),
        B = (n("sOw0"), n("bxBv"), n("Kw0F")),
        I = n("bS9Q"),
        D = n("qP7j"),
        P = n.n(D),
        L = n("IzPI"),
        G = n("Z1oF");
      let F = class extends u.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              strRssURL: s.a.Get().GetDefaultAdmin().GetRSSUrl(),
            }),
            (this.m_Admin = s.a.Get().GetDefaultAdmin());
        }
        OnChangeActualRSSURL(e) {
          this.setState({ strRssURL: e.target.value });
        }
        OnCreateOrSaveFeed(e) {
          e.preventDefault(),
            Object(C.d)(
              u.a.createElement(z, {
                strRSSUrl: this.state.strRssURL,
                admin: this.m_Admin,
              }),
              Object(y.o)(e)
            );
        }
        OnRevert(e) {
          e.preventDefault(),
            this.setState({ strRssURL: this.m_Admin.GetRSSUrl() });
        }
        render() {
          let e = Boolean(this.state.strRssURL === this.m_Admin.GetRSSUrl());
          if (void 0 !== window.Prototype)
            return window.location.reload(), null;
          const t = Object(_.f)(
              Object(_.d)(this.m_Admin.GetFeedLanguageHandleUnset())
            ),
            n = s.a.Get().GetDefaultAdmin();
          return u.a.createElement(
            "div",
            { className: Object(R.a)(T.Ctn) },
            u.a.createElement(
              "div",
              { className: "titleframe" },
              u.a.createElement(
                "h4",
                null,
                Object(j.f)("#CuratorAdmin_RSSFeed_title")
              ),
              u.a.createElement(
                "p",
                { className: "subtitle" },
                Object(j.f)("#CuratorAdmin_RSSFeed_desc")
              ),
              u.a.createElement(
                "p",
                null,
                Object(j.m)(
                  "#CuratorAdmin_RSSFeed_doc_link",
                  u.a.createElement(
                    "a",
                    {
                      href: "https://partner.steamgames.com/doc/store/news/rss",
                      target: "_blank",
                    },
                    Object(j.f)("#CuratorAdmin_RSSFeed_doc_link_text")
                  )
                )
              ),
              u.a.createElement(
                "p",
                { className: T.DashboardBtn },
                u.a.createElement(
                  w.b,
                  {
                    href:
                      o.d.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                      "/partnerevents/",
                    className: Object(R.a)(E.a.Button, E.a.Primary),
                  },
                  Object(j.f)("#RSSManager_EventDashBoard")
                )
              )
            ),
            u.a.createElement(
              "div",
              { className: "darkframe" },
              u.a.createElement(
                "div",
                { className: T.LanguageRow },
                u.a.createElement(
                  "span",
                  { className: T.LanguageTitle },
                  Object(j.f)("#CuratorAdmin_RSSFeed_lang_only")
                ),
                u.a.createElement("span", { className: T.LanguageSet }, t),
                u.a.createElement(
                  "a",
                  {
                    href:
                      o.d.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                      "/edit ",
                    target: "_blank",
                    className: Object(R.a)(E.a.Button, T.PreviewBtn),
                  },
                  Object(j.f)("#CuratorAdmin_RSSFeed_edit_language")
                )
              ),
              Boolean(
                this.m_Admin.GetFeedLanguageHandleUnset() !=
                  this.m_Admin.GetCuratorLanguage()
              ) &&
                u.a.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      T.LanguageRow,
                      P.a.WarningIconLayout
                    ),
                  },
                  u.a.createElement(
                    "span",
                    { className: T.LanguageTitle },
                    Object(j.f)(
                      "#CuratorAdmin_Curator_lang_only",
                      Object(j.f)(
                        "#Language_" +
                          Object(_.d)(this.m_Admin.GetCuratorLanguage())
                      ),
                      t
                    )
                  )
                ),
              u.a.createElement(
                "div",
                {
                  className: Object(R.a)(E.a.FlexRowContainer, T.UrlSettingCtn),
                },
                u.a.createElement(b.z, {
                  className: T.RssInpu,
                  type: "text",
                  name: "link_url",
                  id: "link_url",
                  value: this.state.strRssURL,
                  label: Object(j.f)("#CuratorAdmin_RSSFeed"),
                  placeholder: Object(j.f)("#CuratorAdmin_RSSFeed_placeholder"),
                  onChange: this.OnChangeActualRSSURL,
                  mustBeURL: !0,
                }),
                u.a.createElement(
                  "a",
                  {
                    className: "btn_green_white_innerfade btn_medium",
                    onClick: this.OnCreateOrSaveFeed,
                  },
                  u.a.createElement(
                    "span",
                    null,
                    Object(j.f)(e ? "#Button_Saved" : "#Button_Save")
                  )
                ),
                !e &&
                  u.a.createElement(
                    "a",
                    {
                      onClick: this.OnRevert,
                      className: "btn_grey_white_innerfade btn_medium",
                    },
                    Object(j.f)("#Button_Revert")
                  )
              ),
              u.a.createElement(U, { admin: n }),
              u.a.createElement("br", null),
              u.a.createElement(k, {
                strRssURL: this.state.strRssURL,
                admin: n,
              })
            )
          );
        }
      };
      Object(a.b)([A.b], F.prototype, "OnChangeActualRSSURL", null),
        Object(a.b)([A.b], F.prototype, "OnCreateOrSaveFeed", null),
        Object(a.b)([A.b], F.prototype, "OnRevert", null),
        (F = Object(a.b)([d.a], F));
      t.b = F;
      let k = class extends u.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              strParseRssURL: this.props.strRssURL,
              bLoadingPreview: !1,
            }),
            (this.m_cancelSignal = i.a.CancelToken.source());
        }
        componentDidMount() {
          const { admin: e } = this.props;
          e.BHasFeedGID() &&
            e.BHasSavedRSSURL() &&
            e.GetRSSUrl() == this.props.strRssURL &&
            this.OnLoadPreview();
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "PreviewRSSViewAndControl component unmounted"
          );
        }
        RenderPreviews() {
          let e = this.props.admin,
            t = new Array();
          if (this.state.previews) {
            let n = this.state.previews;
            (n = n.sort((t, n) => {
              let a = e.MapArticleURLToClanEventGID(t.post.url),
                r = e.MapArticleURLToClanEventGID(n.post.url),
                i = a ? h.b.GetClanEventModel(a) : null,
                s = r ? h.b.GetClanEventModel(r) : null;
              return i && s
                ? s.postTime - i.postTime
                : i
                ? -1
                : s
                ? 1
                : n.post.rtime_date - t.post.rtime_date;
            })),
              n.forEach((n) => {
                t.push(
                  u.a.createElement(N, {
                    newsData: n,
                    admin: e,
                    key: "id: " + n.unique_id,
                    clanSteamID: e.GetClanSteamID(),
                    fnGetRSSUrl: this.GetRSSPreviewURL,
                  })
                );
              });
          }
          return t;
        }
        GetRSSPreviewURL() {
          return this.state.strParseRssURL;
        }
        OnLoadPreview() {
          this.setState(
            {
              bLoadingPreview: !0,
              previews: void 0,
              strPreviewURL: this.props.strRssURL,
              strPreviewErrorMsg: void 0,
            },
            this.DoLoadPreview
          );
        }
        DoLoadPreview() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = this.props.admin,
              t = yield e.PreviewPartnerEventsFromRSSFeed(this.props.strRssURL);
            if (t && 1 == t.GetEResult()) {
              let n = t.Body().toObject();
              this.setState(
                { strParseRssURL: n.rss_url, bLoadingPreview: !0 },
                () =>
                  Object(a.a)(this, void 0, void 0, function* () {
                    yield e.FetchPublishedEvents(
                      Math.max(100, n.results.length)
                    );
                    let t = new Array(),
                      a = new Array();
                    if (
                      (n.results.forEach((n) => {
                        let r = e.MapArticleURLToClanEventGID(n.post.url);
                        r && t.push(r),
                          n.post.appids &&
                            1 === n.post.appids.length &&
                            0 !== n.post.recommendation_state &&
                            a.push(n.post.appids[0]);
                      }),
                      t.length > 0 &&
                        (yield h.b.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                          t,
                          null,
                          this.m_cancelSignal
                        )),
                      a.length > 0)
                    ) {
                      const t = e.GetClanSteamID();
                      yield c.Get().LoadAppRecommendation(t, a);
                    }
                    this.setState({
                      previews: n.results,
                      bLoadingPreview: void 0,
                    });
                  })
              );
            } else
              this.setState({
                bLoadingPreview: void 0,
                strPreviewErrorMsg: Object(j.f)(
                  "#Error_Description",
                  t.GetEResult(),
                  t.Hdr().error_message()
                ),
              });
          });
        }
        render() {
          const e = this.RenderPreviews();
          let t = this.props.admin;
          return u.a.createElement(
            "div",
            null,
            Boolean(
              !this.state.bLoadingPreview &&
                this.state.strPreviewURL !== this.props.strRssURL
            ) &&
              u.a.createElement(
                "div",
                { className: T.PreviewListBtn },
                u.a.createElement(
                  b.f,
                  {
                    disabled: !b.z.validateUrl(this.props.strRssURL),
                    onClick: this.OnLoadPreview,
                  },
                  Object(j.f)("#CuratorAdmin_RSSFeed_preview")
                )
              ),
            this.state.bLoadingPreview &&
              u.a.createElement(O.a, {
                string: Object(j.f)("#Loading"),
                size: "medium",
                position: "center",
              }),
            this.state.strPreviewErrorMsg &&
              u.a.createElement(
                "div",
                { className: E.a.ErrorMsg },
                this.state.strPreviewErrorMsg
              ),
            Boolean(e.length > 0) &&
              u.a.createElement(
                "div",
                null,
                u.a.createElement(
                  "p",
                  null,
                  Object(j.f)(
                    "#RSSManager_PreviewInfo",
                    this.state.strPreviewURL
                  )
                ),
                u.a.createElement("div", { className: T.PreviewListCtn }, e),
                u.a.createElement(
                  "p",
                  { className: T.DashboardBtn },
                  u.a.createElement(
                    w.b,
                    {
                      href:
                        o.d.COMMUNITY_BASE_URL +
                        "gid/" +
                        t.GetClanSteamID().ConvertTo64BitString() +
                        "/partnerevents/",
                      className: Object(R.a)(E.a.Button, E.a.Primary),
                    },
                    Object(j.f)("#RSSManager_EventDashBoard")
                  )
                )
              )
          );
        }
      };
      Object(a.b)([A.b], k.prototype, "GetRSSPreviewURL", null),
        Object(a.b)([A.b], k.prototype, "OnLoadPreview", null),
        (k = Object(a.b)([d.a], k));
      let U = class extends u.a.Component {
        constructor() {
          super(...arguments), (this.state = {});
        }
        OnToggleChannelAutomation(e) {
          e
            ? (this.setState({ strErrorMessage: void 0 }),
              Object(C.d)(
                u.a.createElement(z, {
                  strRSSUrl: this.props.admin.GetRSSUrl(),
                  admin: this.props.admin,
                  bActivatePooling: !0,
                }),
                window
              ))
            : this.setState(
                {
                  strErrorMessage: void 0,
                  strReasonWaiting: Object(j.f)("#Saving"),
                },
                this.BDisableAutomation
              );
        }
        BDisableAutomation() {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.props.admin
              .UpdateAutomation(!1)
              .catch(() =>
                this.setState({
                  strErrorMessage: Object(j.f)(
                    "#RSSManager_Status_Automation_DisableFailed"
                  ),
                })
              )
              .finally(() => this.setState({ strReasonWaiting: void 0 }));
          });
        }
        OnQueueScan(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({
              strReasonWaiting: Object(j.f)("#CuratorAdmin_RSSFeed_scannow"),
            }),
              this.props.admin
                .CheckForNewUpdate()
                .then(() =>
                  Object(C.d)(
                    u.a.createElement(f.e, {
                      strTitle: Object(j.f)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: Object(j.f)(
                        "#CuratorAdmin_RSSFeed_queued"
                      ),
                    }),
                    Object(y.o)(e)
                  )
                )
                .catch((t) =>
                  Object(C.d)(
                    u.a.createElement(f.g, {
                      strTitle: Object(j.f)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: Object(M.a)(t),
                    }),
                    Object(y.o)(e)
                  )
                )
                .finally(() => this.setState({ strReasonWaiting: void 0 }));
          });
        }
        render() {
          return this.props.admin.BHasSavedRSSURL()
            ? u.a.createElement(
                "div",
                null,
                Boolean(this.state.strReasonWaiting) &&
                  u.a.createElement(O.a, {
                    size: "medium",
                    string: this.state.strReasonWaiting,
                  }),
                Boolean(this.state.strErrorMessage) &&
                  u.a.createElement(
                    "div",
                    { className: T.Error },
                    this.state.strErrorMessage
                  ),
                u.a.createElement(b.J, {
                  onChange: this.OnToggleChannelAutomation,
                  label: Object(j.f)("#RSSManager_Status_Automation_Desc"),
                  checked: this.props.admin.BIsAutomationEnabled(),
                  description: "",
                }),
                this.props.admin.BIsAutomationEnabled() &&
                  u.a.createElement(
                    "p",
                    null,
                    Object(j.f)("#CuratorAdmin_RSSFeed_lastscanned"),
                    " ",
                    Object(j.k)(this.props.admin.GetRSSLastRtimeChecked(), !1),
                    "  @ ",
                    Object(G.f)(this.props.admin.GetRSSLastRtimeChecked(), {
                      bForce24HourClock: !1,
                    }),
                    " ",
                    u.a.createElement(
                      "a",
                      { onClick: this.OnQueueScan },
                      u.a.createElement(
                        "span",
                        null,
                        Object(j.f)("#CuratorAdmin_RSSFeed_scannow")
                      )
                    )
                  )
              )
            : null;
        }
      };
      Object(a.b)([A.b], U.prototype, "OnToggleChannelAutomation", null),
        Object(a.b)([A.b], U.prototype, "OnQueueScan", null),
        (U = Object(a.b)([d.a], U));
      let N = class extends u.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              clan_event_gid: this.props.admin.MapArticleURLToClanEventGID(
                this.props.newsData.post.url
              ),
              bLoadingPartnerEvent: Boolean(
                this.props.admin.MapArticleURLToClanEventGID(
                  this.props.newsData.post.url
                )
              ),
            });
        }
        componentDidMount() {
          this.DoPartnerEventLoad();
        }
        DoPartnerEventLoad() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.state.clan_event_gid) {
              let e = this.props.admin.GetClanSteamID(),
                t = h.b.GetClanEventModel(this.state.clan_event_gid);
              t ||
                (t = yield h.b.LoadHiddenPartnerEvent(
                  e,
                  this.state.clan_event_gid
                )),
                this.setState({
                  bLoadingPartnerEvent: !1,
                  existingEventModel: t,
                });
            }
          });
        }
        OnOpenPreviewAsPartnerEvent(e) {
          const { newsData: t, clanSteamID: n } = this.props;
          let a = new p.q();
          (a.GID = "PreviewPartnerEventRow_0"),
            (a.clanSteamID = n),
            (a.postTime = Date.now() / 1e3),
            (a.startTime = Date.now() / 1e3),
            (a.type = 28),
            a.vecTags.push("auto_rssfeed"),
            a.vecTags.push("curator"),
            a.vecTags.push("curator_public"),
            a.name.set(0, t.title),
            a.description.set(0, t.desc),
            this.ValidateJSONDefault(t.jsondata) && (a.jsondata = t.jsondata),
            a.jsondata.read_more_link ||
              (a.jsondata.read_more_link = t.unique_id);
          let r = this.props.admin.GetFeedLanguageHandleUnset();
          !a.jsondata.localized_summary &&
            t.post.event_summary &&
            ((a.jsondata.localized_summary = Object(B.e)(
              a.jsondata.localized_summary,
              30,
              null
            )),
            (a.jsondata.localized_summary[0] = t.post.event_summary),
            0 != r && (a.jsondata.localized_summary[r] = t.post.event_summary)),
            !a.jsondata.localized_subtitle &&
              t.post.event_subtitle &&
              ((a.jsondata.localized_subtitle = Object(B.e)(
                a.jsondata.localized_subtitle,
                30,
                null
              )),
              (a.jsondata.localized_subtitle[0] = t.post.event_subtitle),
              0 != r &&
                (a.jsondata.localized_subtitle[r] = t.post.event_subtitle)),
            this.ShowModalEvent(a);
        }
        OnViewEvent() {
          this.ShowModalEvent(h.b.GetClanEventModel(this.state.clan_event_gid));
        }
        ShowModalEvent(e) {
          let t = document.getElementById("curator_header_area_ctn_id");
          t &&
            (e
              ? t.classList.add("curator_header_area_ctn_hideme")
              : t.classList.remove("curator_header_area_ctn_hideme")),
            this.setState({ eventModelForPreviewNow: e });
        }
        ValidateJSONDefault(e) {
          const t = e;
          return !(!t || Array.isArray(t) || "object" != typeof t);
        }
        OnPostNewsEvent(e) {
          const { newsData: t, fnGetRSSUrl: n } = this.props;
          Object(C.d)(
            u.a.createElement(z, {
              newsData: t,
              admin: this.props.admin,
              strRSSUrl: n(),
              fnClanEventGID: this.OnClanEventCreateSuccess,
            }),
            Object(y.o)(e)
          );
        }
        OnUpdateNewsEvent(e) {
          const { newsData: t, fnGetRSSUrl: n } = this.props;
          Object(C.d)(
            u.a.createElement(z, {
              newsData: t,
              strRSSUrl: n(),
              admin: this.props.admin,
              fnClanEventGID: this.OnClanEventCreateSuccess,
              bUpdatePost: !0,
            }),
            Object(y.o)(e)
          );
        }
        HideModalEvent() {
          this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
        }
        OnClanEventCreateSuccess(e) {
          this.setState(
            { clan_event_gid: e, bLoadingPartnerEvent: !0 },
            this.DoPartnerEventLoad
          );
        }
        OnShowRawRSS(e) {
          const t = this.props.newsData.rss_message,
            n = (() => {
              const e = t.match(/<entry[^>]*>([\s\S]*)<\/entry>/m);
              if (!e) return t;
              const n = e[1].match(/<content[^>]*>[\s\S]*<\/content>/m);
              return n ? Object(I.b)(n[0]) : e[0];
            })();
          Object(C.d)(
            u.a.createElement(
              f.e,
              {
                bAlertDialog: !0,
                strTitle: Object(j.f)("#RSSManager_PostEvent_ViewRaw"),
              },
              u.a.createElement("textarea", {
                className: T.RawRSS,
                value: n,
                disabled: !0,
              })
            ),
            Object(y.o)(e)
          );
        }
        render() {
          const { newsData: e } = this.props,
            {
              clan_event_gid: t,
              existingEventModel: n,
              bLoadingPartnerEvent: a,
            } = this.state;
          let r = this.props.admin,
            i = r.GetClanSteamID(),
            s = n && n.BIsStagedEvent(),
            l = e.post.appids && 1 == e.post.appids.length && e.post.appids[0],
            d =
              0 !== e.post.recommendation_state &&
              l &&
              c.Get().BHasReviewForApp(i, l),
            m = "";
          if (n) {
            const e =
              n.GetVisibilityStartTimeAndDateUnixSeconds() ||
              n.GetPostTimeAndDateUnixSeconds();
            m =
              Object(j.n)(e) +
              " @ " +
              Object(G.f)(e, { bForce24HourClock: !1 });
          }
          return u.a.createElement(
            "div",
            {
              className: Object(R.a)(
                T.PostCtn,
                Boolean(t) ? T.ActivePost : "",
                Boolean(e.valid_post) ? "" : T.ErrorPost
              ),
            },
            u.a.createElement("span", { className: T.PostTitle }, e.title),
            u.a.createElement("br", null),
            Boolean(n) &&
              u.a.createElement(
                u.a.Fragment,
                null,
                Boolean(n.BIsVisibleEvent()) &&
                  u.a.createElement(
                    "span",
                    { className: T.PostDate },
                    Object(j.f)("#RSSManager_PostEvent_PostedDate", m)
                  ),
                Boolean(!n.BIsVisibleEvent()) &&
                  u.a.createElement(
                    "span",
                    {
                      className: Object(R.a)(
                        T.PostDraft,
                        s ? T.PostStaged : ""
                      ),
                    },
                    Object(j.f)(
                      s
                        ? "#RSSManager_PostEvent_Staged"
                        : "#RSSManager_PostEvent_Draft",
                      m
                    )
                  )
              ),
            Boolean(!e.valid_post && e.post_error_msg) &&
              u.a.createElement(
                "div",
                { className: P.a.ErrorStylesBackground },
                Object(j.f)("#Error_Generic_Label"),
                " ",
                Object(j.f)(e.post_error_msg)
              ),
            u.a.createElement(
              "div",
              { className: T.ButtonCtn },
              Boolean(t)
                ? u.a.createElement(
                    u.a.Fragment,
                    null,
                    Boolean(a)
                      ? u.a.createElement(O.a, {
                          string: Object(j.f)("#Loading"),
                          size: "small",
                          position: "center",
                        })
                      : u.a.createElement(
                          "div",
                          {
                            onClick: this.OnViewEvent,
                            className: Object(R.a)(E.a.Button, T.PreviewBtn),
                          },
                          Object(j.f)("#RSSManager_PostEvent_ViewEvent")
                        ),
                    u.a.createElement(
                      "a",
                      {
                        className: Object(R.a)(E.a.Button, T.PreviewBtn),
                        href:
                          o.d.COMMUNITY_BASE_URL +
                          "gid/" +
                          r.GetClanSteamID().ConvertTo64BitString() +
                          "/partnerevents/edit/" +
                          this.state.clan_event_gid,
                      },
                      Object(j.f)("#RSSManager_PostEvent_EditEvent")
                    ),
                    u.a.createElement(
                      "div",
                      {
                        onClick: this.OnUpdateNewsEvent,
                        className: Object(R.a)(E.a.Button, T.PreviewBtn),
                      },
                      Object(j.f)("#RSSManager_PostEvent_UpdateEvent")
                    ),
                    d &&
                      u.a.createElement(
                        "a",
                        {
                          className: Object(R.a)(E.a.Button, T.PreviewBtn),
                          href: Object(L.h)(
                            o.d.STORE_BASE_URL +
                              "app/" +
                              e.post.appids[0] +
                              "/?curator_clanid=" +
                              i.GetAccountID()
                          ),
                        },
                        Object(j.f)("#RSSManager_SeeReview")
                      )
                  )
                : u.a.createElement(
                    u.a.Fragment,
                    null,
                    u.a.createElement(
                      "div",
                      {
                        onClick: this.OnOpenPreviewAsPartnerEvent,
                        className: Object(R.a)(E.a.Button, T.PreviewBtn),
                      },
                      Object(j.f)("#CuratorAdmin_RSSFeed_col_preview_event")
                    ),
                    u.a.createElement(
                      "div",
                      {
                        onClick: this.OnPostNewsEvent,
                        className: Object(R.a)(E.a.Button, T.PreviewBtn),
                      },
                      Object(j.f)("#CuratorAdmin_RSSFeed_col_create_event")
                    )
                  ),
              Boolean(e.rss_message && e.rss_message.length > 0) &&
                u.a.createElement(
                  "div",
                  { onClick: this.OnShowRawRSS, className: T.ViewRaw },
                  Object(j.f)("#RSSManager_PostEvent_ViewRaw")
                ),
              Boolean(this.state.eventModelForPreviewNow) &&
                u.a.createElement(
                  f.k,
                  { className: S.StoreHeaderAdjust },
                  u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(v.b, {
                      event: this.state.eventModelForPreviewNow,
                      fnClose: this.HideModalEvent,
                    })
                  )
                )
            )
          );
        }
      };
      Object(a.b)([A.b], N.prototype, "DoPartnerEventLoad", null),
        Object(a.b)([A.b], N.prototype, "OnOpenPreviewAsPartnerEvent", null),
        Object(a.b)([A.b], N.prototype, "OnViewEvent", null),
        Object(a.b)([A.b], N.prototype, "OnPostNewsEvent", null),
        Object(a.b)([A.b], N.prototype, "OnUpdateNewsEvent", null),
        Object(a.b)([A.b], N.prototype, "HideModalEvent", null),
        Object(a.b)([A.b], N.prototype, "OnClanEventCreateSuccess", null),
        Object(a.b)([A.b], N.prototype, "OnShowRawRSS", null),
        (N = Object(a.b)([d.a], N));
      class z extends u.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              initialState: z.DetermineStartState(this.props),
              step: z.DetermineStartState(this.props),
              bDraftMode: !0,
            });
        }
        static DetermineStartState(e) {
          let t = e.admin.BHasSetupFeed(e.strRSSUrl);
          return e.newsData && t
            ? e.bUpdatePost
              ? "update_post"
              : "create_post"
            : e.bActivatePooling
            ? "activate_feed"
            : e.admin.BHasSavedRSSURL()
            ? "update_feed"
            : "feed_missing";
        }
        OnCreateNewsFeed() {
          this.setState({ step: "creating_feed" }, this.DoCreateNewsFeed);
        }
        DoCreateNewsFeed() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = yield this.props.admin.CreateOrUpdateRSSNewFeed(
              this.props.strRSSUrl,
              this.props.bActivatePooling ? 300 : 0
            );
            1 != e.success
              ? this.setState({
                  step: "failure",
                  eResult: e.success,
                  strErrorMessage: Object(j.f)("#RSSManager_PostEvent_Failure"),
                })
              : this.setState({
                  step: this.props.newsData ? "create_post" : "success",
                });
          });
        }
        OnCreatePost() {
          this.setState({ step: "waiting_post" }, this.DoCreatePost);
        }
        DoCreatePost() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = yield this.props.admin.CreatePost(
              this.props.newsData,
              Boolean(this.state.bDraftMode)
            );
            1 != e.GetEResult()
              ? this.setState({
                  step: "failure",
                  eResult: e.GetEResult(),
                  strErrorMessage: Object(j.f)("#RSSManager_PostEvent_Failure"),
                })
              : (this.props.fnClanEventGID &&
                  this.props.fnClanEventGID(e.Body().clan_event_gid()),
                this.setState({
                  step: "success",
                  eventGID: e.Body().clan_event_gid(),
                }));
          });
        }
        OnChangeDraftMode(e) {
          this.setState({ bDraftMode: e });
        }
        OnChangePermissionsCreateFeed(e) {
          this.setState({ bPermissions: e });
        }
        OnChangeConductCreateFeed(e) {
          this.setState({ bConduct: e });
        }
        GetStrTitle() {
          if (this.props.newsData)
            return Object(j.f)(
              this.props.bUpdatePost
                ? "#RSSManager_PostEvent_UpdateEvent"
                : "#RSSManager_PostEvent_Tilte"
            );
          switch (this.state.initialState) {
            case "feed_missing":
              return Object(j.f)("#RSSManager_PostEvent_CreateFeedTitle");
            default:
            case "update_feed":
              return Object(j.f)("#RSSManager_PostEvent_UpdateFeedTitle");
            case "activate_feed":
              return Object(j.f)("#RSSManager_Status_Automation_Activate");
          }
        }
        render() {
          const { strRSSUrl: e } = this.props;
          switch (this.state.step) {
            case "feed_missing":
            case "activate_feed":
            case "update_feed":
            default:
              return u.a.createElement(
                f.f,
                null,
                u.a.createElement(b.y, null, " ", this.GetStrTitle(), " "),
                u.a.createElement(
                  b.d,
                  null,
                  u.a.createElement(
                    b.e,
                    null,
                    this.props.newsData &&
                      u.a.createElement(
                        "div",
                        null,
                        Object(j.f)(
                          "#RSSManager_PostEvent_CreateFeed_DuringPost"
                        )
                      ),
                    Boolean("activate_feed" !== this.state.step) &&
                      u.a.createElement(
                        "div",
                        null,
                        Object(j.f)("#RSSManager_PostEvent_CreateFeed_Desc", e)
                      ),
                    u.a.createElement(
                      "div",
                      null,
                      Object(j.f)("#RSSManager_CreateFeed_Review")
                    ),
                    u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(b.g, {
                        label: Object(j.f)(
                          "#RSSManager_CreateFeed_Permissions_v1"
                        ),
                        onChange: this.OnChangePermissionsCreateFeed,
                        checked: Boolean(this.state.bPermissions),
                      })
                    ),
                    u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(b.g, {
                        label: Object(j.f)("#RSSManager_CreateFeed_Conduct_v1"),
                        onChange: this.OnChangeConductCreateFeed,
                        checked: Boolean(this.state.bConduct),
                      }),
                      u.a.createElement(
                        w.b,
                        { href: o.d.STORE_BASE_URL + "online_conduct/" },
                        Object(j.f)("#RSSManager_CreateFeed_Conduct_Link")
                      )
                    )
                  ),
                  u.a.createElement(
                    b.q,
                    null,
                    u.a.createElement(b.D, {
                      bOKDisabled: !Boolean(
                        this.state.bPermissions && this.state.bConduct
                      ),
                      onOK: this.OnCreateNewsFeed,
                      onCancel: this.props.closeModal,
                    })
                  )
                )
              );
            case "failure":
              return u.a.createElement(
                f.g,
                {
                  strDescription: Object(j.f)("#RSSManager_PostEvent_Failure"),
                  closeModal: this.props.closeModal,
                },
                u.a.createElement(
                  "div",
                  null,
                  Object(j.f)(
                    "#Error_Description",
                    this.state.eResult,
                    this.state.strErrorMessage
                  )
                )
              );
            case "creating_feed":
            case "waiting_post":
              return u.a.createElement(
                f.e,
                {
                  strTitle: this.GetStrTitle(),
                  strDescription: Object(j.f)("#RSSManager_PostEvent_InFlight"),
                  closeModal: this.props.closeModal,
                },
                u.a.createElement(O.a, { position: "center" })
              );
            case "create_post":
              return u.a.createElement(
                f.f,
                null,
                u.a.createElement(b.y, null, " ", this.GetStrTitle(), " "),
                u.a.createElement(
                  b.d,
                  null,
                  u.a.createElement(
                    b.e,
                    null,
                    u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(
                        "div",
                        null,
                        Object(j.f)("#RSSManager_PostEvent_CreatePost")
                      ),
                      u.a.createElement(
                        "div",
                        { className: T.DialogPostTitle },
                        this.props.newsData.title
                      ),
                      u.a.createElement("br", null),
                      u.a.createElement(
                        "div",
                        null,
                        u.a.createElement(b.g, {
                          label: Object(j.f)(
                            "#RSSManager_PostEvent_CreatePost_Draft"
                          ),
                          onChange: this.OnChangeDraftMode,
                          checked: Boolean(this.state.bDraftMode),
                        })
                      )
                    )
                  ),
                  u.a.createElement(
                    b.q,
                    null,
                    u.a.createElement(b.D, {
                      onOK: this.OnCreatePost,
                      onCancel: this.props.closeModal,
                    })
                  )
                )
              );
            case "update_post":
              return u.a.createElement(
                f.f,
                null,
                u.a.createElement(b.y, null, " ", this.GetStrTitle(), " "),
                u.a.createElement(
                  b.d,
                  null,
                  u.a.createElement(
                    b.e,
                    null,
                    u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(
                        "div",
                        null,
                        Object(j.f)("#RSSManager_PostEvent_UpdatePost")
                      ),
                      u.a.createElement("br", null),
                      u.a.createElement(
                        "div",
                        { className: T.DialogPostTitle },
                        this.props.newsData.title
                      ),
                      u.a.createElement("br", null)
                    )
                  ),
                  u.a.createElement(
                    b.q,
                    null,
                    u.a.createElement(b.D, {
                      onOK: this.OnCreatePost,
                      onCancel: this.props.closeModal,
                    })
                  )
                )
              );
            case "success":
              return u.a.createElement(
                f.e,
                {
                  strTitle: this.GetStrTitle(),
                  strDescription: Object(j.f)(
                    this.props.newsData
                      ? "#RSSManager_PostEvent_Success"
                      : "#RSSManager_PostEvent_Success_feed"
                  ),
                  closeModal: this.props.closeModal,
                  bAlertDialog: !0,
                },
                Boolean(this.state.eventGID) &&
                  u.a.createElement(
                    "a",
                    {
                      href:
                        o.d.COMMUNITY_BASE_URL +
                        "gid/" +
                        this.props.admin
                          .GetClanSteamID()
                          .ConvertTo64BitString() +
                        "/partnerevents/edit/" +
                        this.state.eventGID,
                    },
                    Object(j.f)("#RSSManager_PostEvent_EventLink")
                  )
              );
          }
        }
      }
      Object(a.b)([A.b], z.prototype, "OnCreateNewsFeed", null),
        Object(a.b)([A.b], z.prototype, "DoCreateNewsFeed", null),
        Object(a.b)([A.b], z.prototype, "OnCreatePost", null),
        Object(a.b)([A.b], z.prototype, "DoCreatePost", null),
        Object(a.b)([A.b], z.prototype, "OnChangeDraftMode", null),
        Object(a.b)([A.b], z.prototype, "OnChangePermissionsCreateFeed", null),
        Object(a.b)([A.b], z.prototype, "OnChangeConductCreateFeed", null),
        Object(a.b)([A.b], z.prototype, "GetStrTitle", null);
    },
    zrk3: function (e, t, n) {
      e.exports = {
        ModeratorAuditActionCtn:
          "eventmoderationaudit_ModeratorAuditActionCtn_f6z__",
        ExpandModActions: "eventmoderationaudit_ExpandModActions_3nNMe",
      };
    },
  },
]);
