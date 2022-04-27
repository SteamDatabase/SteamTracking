/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    "4yG/": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("1fPh"),
        i = n("q1tI"),
        o = n.n(i),
        r = n("EC67"),
        c = n("kLLr"),
        l = n("hKFG"),
        s = n("GiuM"),
        d = n("vDqi"),
        m = n.n(d),
        u = n("TyAF"),
        v = n("mgoM"),
        p = n("65aj"),
        b = (n("3+zv"), n("MUT6"), n("TQGK")),
        E = n("BVKn"),
        _ = n("IjL/"),
        h = n("YWVM"),
        g = n("r3N9"),
        S = n("mB/g"),
        I = n("SdTr"),
        A = n("YNty"),
        f = n("6eA3"),
        w = n.n(f),
        j = n("fpVW"),
        O = n.n(j),
        G = n("0OaU"),
        D = n("exH9"),
        y = n("TLQK"),
        C = n("OS6B"),
        L = n("lkRc"),
        k = n("A8Lc"),
        T = n.n(k),
        B = n("mrSG"),
        P = n("2vnA");
      n("AiWL");
      class M {
        constructor() {
          (this.m_objApprovalPriviledge = null),
            (this.m_LoadingPriviledgePromise = null);
          let e = Object(L.h)("sc_app_privildge", "application_config");
          this.ValidateStoreDefault(e)
            ? ("dev" === L.d.WEB_UNIVERSE &&
                console.log(
                  "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                    e.bHasAccess
                ),
              (this.m_objApprovalPriviledge = e),
              (this.m_LoadingPriviledgePromise = null))
            : (L.k.logged_in && L.d.EREALM === p.h.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = { bHasAccess: !1 });
        }
        BHasSteamChinaAppApprovalPriviledge() {
          var e;
          return null === (e = this.m_objApprovalPriviledge) || void 0 === e
            ? void 0
            : e.bHasAccess;
        }
        HintLoadAppApprovalPriviledge() {
          return Object(B.a)(this, void 0, void 0, function* () {
            return this.m_objApprovalPriviledge
              ? this.m_objApprovalPriviledge
              : (this.m_LoadingPriviledgePromise ||
                  (this.m_LoadingPriviledgePromise = this.InternalLoadAppApprovalPriviledge()),
                this.m_LoadingPriviledgePromise);
          });
        }
        InternalLoadAppApprovalPriviledge() {
          var e;
          return Object(B.a)(this, void 0, void 0, function* () {
            const t =
              L.d.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
            try {
              const n = yield m.a.get(t, { withCredentials: !0 });
              if (
                1 ==
                (null === (e = null == n ? void 0 : n.data) || void 0 === e
                  ? void 0
                  : e.success)
              )
                return (
                  (this.m_objApprovalPriviledge = {
                    bHasAccess: n.data.bHasAccess,
                  }),
                  this.m_objApprovalPriviledge
                );
            } catch (e) {
              const t = Object(C.a)(e);
              console.error(
                "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                  t.strErrorMsg,
                t
              );
            }
            return { bHasAccess: !1 };
          });
        }
        static Get() {
          return M.s_Singleton || (M.s_Singleton = new M()), M.s_Singleton;
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "boolean" == typeof e.bHasAccess;
        }
      }
      Object(B.b)([P.C], M.prototype, "m_objApprovalPriviledge", void 0);
      var N = n("9w6b"),
        U = n("Jqb/"),
        R = n("ka0M"),
        H = n("X3Ds");
      const x = Object(u.a)((e) => {
          const [t, n] = i.useState(null),
            { eventModel: a } = e;
          let o = a.clanSteamID.GetAccountID();
          i.useEffect(() => {
            const e = m.a.CancelToken.source();
            return (
              Object(B.a)(void 0, void 0, void 0, function* () {
                const t = c.a.InitFromClanID(o),
                  a = yield N.a.Get().LoadSingleAppEventPermissions(t),
                  i = yield M.Get().HintLoadAppApprovalPriviledge();
                e.token.reason ||
                  n(L.k.is_support || a.can_edit || i.bHasAccess);
              }),
              () => e.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [o]);
          const r = c.a.InitFromClanID(o);
          return L.k.is_support ||
            N.a.Get().GetPartnerEventPermissions(r).can_edit
            ? i.createElement(h.a, {
                eventModel: a,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: t
                  ? [
                      i.createElement(F, {
                        key: "removesteamchina",
                        eventModel: a,
                      }),
                    ]
                  : void 0,
              })
            : M.Get().BHasSteamChinaAppApprovalPriviledge()
            ? i.createElement(
                "div",
                { className: f.DisplayAdminPanel },
                i.createElement(
                  "span",
                  { className: f.DisplayAdminPanel_Title },
                  Object(y.f)("#EventDisplay_Admin_Title")
                ),
                i.createElement(F, { key: "removesteamchina", eventModel: a })
              )
            : null;
        }),
        F = (e) => {
          const { eventModel: t } = e;
          return i.createElement(
            "div",
            {
              className: Object(D.a)(
                j.Button,
                f.AdminButton,
                j.ValveOnlyBackground
              ),
              onClick: (n) => {
                let a = !1;
                Object(R.d)(
                  i.createElement(
                    U.e,
                    {
                      strTitle: Object(y.f)(
                        "#EventAdmin_Moderation_HideEventInSC"
                      ),
                      strDescription: Object(y.f)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc"
                      ),
                      bDestructiveWarning: !0,
                      closeModal: e.closeModal,
                      onOK: () => {
                        (a = !0),
                          Object(B.a)(void 0, void 0, void 0, function* () {
                            var n, a, o, r;
                            let c = new URLSearchParams();
                            c.append("sessionid", L.d.SESSIONID),
                              c.append(
                                "clan_accountid",
                                "" + t.clanSteamID.GetAccountID()
                              ),
                              c.append("gid_clan_event", "" + t.GID);
                            let l = !1,
                              s = 0;
                            try {
                              const e = `${L.d.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                                i = yield m.a.post(e, c, {
                                  withCredentials: !0,
                                });
                              (l =
                                1 ==
                                  (null === (n = null == i ? void 0 : i.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n.success) ||
                                29 ==
                                  (null === (a = null == i ? void 0 : i.data) ||
                                  void 0 === a
                                    ? void 0
                                    : a.success)),
                                29 ==
                                  (null === (o = null == i ? void 0 : i.data) ||
                                  void 0 === o
                                    ? void 0
                                    : o.success) &&
                                  console.warn(
                                    `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${
                                      t.GID
                                    }; event is still removed from SC`
                                  ),
                                (s =
                                  null === (r = null == i ? void 0 : i.data) ||
                                  void 0 === r
                                    ? void 0
                                    : r.success);
                            } catch (e) {
                              const t = Object(C.a)(e);
                              (s = t.errorCode),
                                console.error(
                                  "RemoveEventFromSteamChinaButton: error " +
                                    t.strErrorMsg,
                                  t
                                );
                            }
                            e.closeModal && e.closeModal(),
                              Object(R.d)(
                                l
                                  ? i.createElement(
                                      U.e,
                                      { bAlertDialog: !0 },
                                      Object(y.f)("#EventDisplay_Share_Success")
                                    )
                                  : i.createElement(
                                      U.g,
                                      null,
                                      Object(y.f)(
                                        "#EventDisplay_Share_Failure"
                                      ) +
                                        " " +
                                        s
                                    ),
                                window
                              );
                          });
                      },
                    },
                    a &&
                      i.createElement(G.a, {
                        size: "medium",
                        position: "center",
                      })
                  ),
                  Object(H.o)(n)
                );
              },
            },
            Object(y.f)("#EventAdmin_Moderation_HideEventInSC")
          );
        };
      var q = n("C4Nl"),
        V = n("b3LC");
      const W = E.a.Get();
      function z() {
        document.body.classList.contains("events_hub") &&
          document.body.classList.remove("events_hub");
      }
      const K = Object(u.a)((e) => {
        const {
            bInfiniteScroll: t,
            event_gid: n,
            announcement_gid: a,
            clansteamid: r,
            appid: c,
          } = e,
          [l, s] = Object(i.useState)(n ? W.GetClanEventModel(n) : void 0),
          [d] = Object(V.b)(null == l ? void 0 : l.appid, {
            include_assets: !0,
            include_release: !0,
            include_platforms: !0,
            include_screenshots: !0,
          }),
          [u, E] = Object(i.useState)(!1),
          f = (e, t) => {
            t.token.reason ||
              (s(e),
              (function (e) {
                var t;
                let n;
                if (e && e.appid)
                  n =
                    null === (t = q.a.Get().GetApp(e.appid)) || void 0 === t
                      ? void 0
                      : t.GetName();
                else if (e && e.clanSteamID) {
                  const t = b.a.GetClanInfoByClanAccountID(
                    e.clanSteamID.GetAccountID()
                  );
                  n = t && t.group_name;
                }
                const a = e && e.GetNameWithFallback(Object(v.g)(L.d.LANGUAGE));
                if (e && n && a) {
                  const e = Object(y.f)(
                    "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                    n,
                    a
                  );
                  document.title != e && (document.title = e);
                }
              })(e));
          },
          j = (e) => {
            const t = Object(C.a)(e);
            console.error("StoreEventDetailView failed " + t.strErrorMsg, t),
              E(!0);
          };
        if (
          (Object(i.useEffect)(z, []),
          Object(i.useEffect)(() => {
            const e = m.a.CancelToken.source();
            return (
              l ||
                (n && !W.GetClanEventModel(n)
                  ? W.LoadPartnerEventGeneric(r, c, n, void 0, 0)
                      .then((t) => f(t, e))
                      .catch(() => {
                        e.token.reason ||
                          W.LoadPartnerEventGeneric(r, c, void 0, n, 0)
                            .then((t) => f(t, e))
                            .catch(j);
                      })
                  : a &&
                    !W.GetClanEventGIDFromAnnouncementGID(a) &&
                    W.LoadPartnerEventGeneric(r, c, void 0, a, 0)
                      .then((t) => f(t, e))
                      .catch(j)),
              () => {
                e.cancel("StoreEventDetailView: unmounting");
              }
            );
          }, [n, r, c, a, l]),
          u || !l || ((null == l ? void 0 : l.appid) && !d))
        ) {
          const e = "lang_" + Object(v.e)(Object(v.g)(L.d.LANGUAGE)),
            t = "";
          return o.a.createElement(
            "div",
            {
              className: Object(D.a)(
                w.a.EventDetailsPageContainer,
                e,
                O.a.PartnerEventFont,
                w.a.NoTitleArtwork
              ),
            },
            o.a.createElement("div", { style: { height: "100px" } }),
            o.a.createElement(A.a, { strImageURL: t }),
            o.a.createElement(A.b, {
              strImageURL: t,
              body: u
                ? o.a.createElement(
                    "div",
                    { className: T.a.ErrorMsg },
                    Object(y.m)(
                      "#Events_FailedToFind",
                      o.a.createElement(
                        "a",
                        { href: L.d.STORE_BASE_URL + "news/" },
                        Object(y.f)("#EventDisplay_NewsHubSubtitle")
                      )
                    )
                  )
                : o.a.createElement(G.a, {
                    string: Object(y.f)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
              postbody: Boolean(u && r)
                ? o.a.createElement(I.a, {
                    clanAccountID: r.GetAccountID(),
                    partnerEventStore: W,
                  })
                : void 0,
            })
          );
        }
        return t
          ? o.a.createElement(
              _.a,
              null,
              o.a.createElement(g.a, {
                appid: l.appid,
                trackingLocation: 7,
                announcementGID: l.GetAnnouncementGID(),
                partnerEventStore: W,
                eventModel: l,
                showAppHeader: !0,
                closeModal: () =>
                  e.history.push(
                    Object(S.d)(l, S.a.k_eStoreNewsHub, "allowRelative")
                  ),
              })
            )
          : o.a.createElement(
              _.a,
              null,
              o.a.createElement(A.c, {
                lang: Object(v.g)(L.d.LANGUAGE),
                partnerEventStore: W,
                event: l,
                adminPanel:
                  L.d.EREALM === p.h.k_ESteamRealmChina
                    ? o.a.createElement(x, { eventModel: l })
                    : o.a.createElement(h.a, {
                        eventModel: l,
                        partnerEventStore: W,
                      }),
                otherEventRow: o.a.createElement(I.a, {
                  clanAccountID: l.clanSteamID.GetAccountID(),
                  gidAnnouncement: l.AnnouncementGID,
                  partnerEventStore: W,
                }),
              })
            );
      });
      var J = Object(r.j)(K),
        Q = n("daJ/"),
        Y = n("rkHy");
      t.default = (e) => {
        const [t] = Object(s.d)("byday", !1),
          [n] = Object(s.d)("upcoming", !1);
        return Object(l.b)()
          ? o.a.createElement(
              Y.a,
              null,
              o.a.createElement(
                r.d,
                null,
                o.a.createElement(r.b, {
                  exact: !0,
                  path: a.b.EventViewByApp(
                    ":appid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    o.a.createElement(
                      J,
                      Object.assign(
                        { key: "detailview_" + e.match.params.event_gid },
                        e,
                        {
                          appid:
                            e.match.params.appid &&
                            Number.parseInt(e.match.params.appid),
                          event_gid: e.match.params.event_gid,
                          bInfiniteScroll: "inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                o.a.createElement(r.b, {
                  exact: !0,
                  path: a.b.EventViewByGroup(
                    ":groupid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    o.a.createElement(
                      J,
                      Object.assign(
                        { key: "detailview_" + e.match.params.event_gid },
                        e,
                        {
                          clansteamid: new c.a(e.match.params.groupid),
                          event_gid: e.match.params.event_gid,
                          bInfiniteScroll: "inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                o.a.createElement(r.b, {
                  exact: !0,
                  path: a.b.OldAnnouncementViewByApp(
                    ":appid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    o.a.createElement(
                      J,
                      Object.assign(
                        {
                          key:
                            "detailoldview_" + e.match.params.announcement_gid,
                        },
                        e,
                        {
                          appid:
                            e.match.params.appid &&
                            Number.parseInt(e.match.params.appid),
                          announcement_gid: e.match.params.announcement_gid,
                          bInfiniteScroll:
                            "old_inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                o.a.createElement(r.b, {
                  exact: !0,
                  path: a.b.OldAnnouncementViewByGroup(
                    ":groupid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?"
                  ),
                  render: (e) =>
                    o.a.createElement(
                      J,
                      Object.assign(
                        {
                          key:
                            "detailoldview_" + e.match.params.announcement_gid,
                        },
                        e,
                        {
                          clansteamid: new c.a(e.match.params.groupid),
                          announcement_gid: e.match.params.announcement_gid,
                          bInfiniteScroll:
                            "old_inline" == e.match.params.viewtype,
                        }
                      )
                    ),
                }),
                o.a.createElement(r.b, {
                  exact: !0,
                  path: a.b.NewsHubApp(":appid(\\d+)", ":vanity?"),
                  render: (e) =>
                    o.a.createElement(
                      Q.c,
                      Object.assign({ key: e.match.params.appid }, e, {
                        filter_to_appids: [Number(e.match.params.appid)],
                        section_by_day: t,
                      })
                    ),
                }),
                o.a.createElement(r.b, {
                  exact: !0,
                  path: a.b.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
                  render: (e) =>
                    o.a.createElement(
                      Q.c,
                      Object.assign({ key: e.match.params.groupid }, e, {
                        filter_to_clanids: [Number(e.match.params.groupid)],
                        section_by_day: t,
                      })
                    ),
                }),
                o.a.createElement(r.b, {
                  exact: !0,
                  path: a.b.NewsHubCollection(":collectionid", ":vanity?"),
                  render: (e) =>
                    o.a.createElement(
                      Q.c,
                      Object.assign({ key: e.match.params.collectionid }, e, {
                        filter_to_collection: e.match.params.collectionid,
                        section_by_day: t,
                      })
                    ),
                }),
                o.a.createElement(r.b, {
                  exact: !0,
                  path: a.b.NewsHubSale(":saleid", ":vanity?"),
                  render: (e) =>
                    o.a.createElement(
                      Q.c,
                      Object.assign({ key: e.match.params.saleid }, e, {
                        filter_to_saleid: e.match.params.saleid,
                        section_by_day: t || n,
                      })
                    ),
                }),
                o.a.createElement(r.b, {
                  exact: !0,
                  path: a.b.NewsHub(),
                  render: (e) =>
                    o.a.createElement(
                      Q.c,
                      Object.assign({ key: "global" }, e, { section_by_day: t })
                    ),
                })
              )
            )
          : null;
      };
    },
    A8Lc: function (e, t, n) {
      e.exports = { ErrorMsg: "eventdetailview_ErrorMsg_1ZEL9" };
    },
    Wym2: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "Events", function () {
          return z;
        }),
        n.d(t, "DemoAndQuickPitch", function () {
          return K;
        });
      var a = n("rkHy"),
        i = n("q1tI"),
        o = n.n(i),
        r = n("mrSG"),
        c = (n("3+zv"), n("b3LC")),
        l = n("vDqi"),
        s = n.n(l),
        d = n("TyAF"),
        m = n("mgoM"),
        u = (n("65aj"), n("gOcu")),
        v = n("6oCP"),
        p = n("UWWC"),
        b = n("yJqL"),
        E = n("X3Ds"),
        _ = n("TLQK"),
        h = n("lkRc"),
        g = n("YLyR"),
        S = n("ka0M"),
        I = n("eWxH"),
        A = n("PHKo"),
        f = n("5L1o");
      const w = Object(d.a)((e) => {
        const t = Object(i.useRef)(null),
          n = Number(e.appID),
          a = Object(i.useMemo)(() => ({ id: n, type: "game" }), [n]),
          [l] = Object(c.b)(n, {}),
          [d, w] = Object(i.useState)(null),
          [j, O] = Object(i.useState)(null);
        Object(i.useEffect)(
          () => (
            Object(r.a)(void 0, void 0, void 0, function* () {
              const e = s.a.CancelToken.source();
              (t.current = e.cancel), yield u.a.Get().LoadAppIDsBatch([n], e);
              const a = u.a.Get().GetDemoEventInfo(n),
                i = yield v.b.LoadAdjacentPartnerEvents(null, null, n, 0, 1, {
                  exclude_tags: ["steam_game_festival_artist_statement"],
                  require_tags: ["steam_game_festival_broadcast"],
                });
              e.token.reason || (w(a), i.length > 0 && O(i[0]));
            }),
            () => {
              t.current && t.current("DemoAndQuickPitch: Unmounting");
            }
          ),
          [n]
        );
        const G = d && d.demo_appid > 0,
          D = j ? j.GetNameWithFallback(Object(m.g)(h.d.LANGUAGE)) : null,
          y = !j || j.BHasEventEnded();
        return G
          ? o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                "div",
                { className: I.TileContainer },
                o.a.createElement(
                  "div",
                  { className: I.TileTitleContainer },
                  o.a.createElement(
                    "div",
                    { className: I.TileTitleInnerContainer },
                    o.a.createElement(
                      "div",
                      { className: I.TileTitle },
                      Object(_.f)(
                        "#Sale_DownloadDemo",
                        null == l ? void 0 : l.GetName()
                      )
                    ),
                    o.a.createElement(f.i, { item: a })
                  ),
                  o.a.createElement(A.a, {
                    info: a,
                    className: I.TileActionButton,
                  })
                ),
                o.a.createElement(
                  "div",
                  { className: I.TileActionContainer },
                  D &&
                    o.a.createElement(
                      "div",
                      { className: I.TileActionInnerContainer },
                      y
                        ? o.a.createElement(
                            "h1",
                            null,
                            Object(_.f)("#EventBrowse_RecentUpdates")
                          )
                        : o.a.createElement(
                            "h1",
                            null,
                            Object(_.f)("#EventCalendar_TuneIn")
                          ),
                      o.a.createElement(
                        "div",
                        {
                          className: I.TileActionInner,
                          onClick: (e) => {
                            Object(S.d)(
                              o.a.createElement(b.a, {
                                initialEvent: j,
                                bShowOnlyInitialEvent: !1,
                                partnerEventStore: v.b,
                                emoticonStore: p.b,
                                showAppHeader: !0,
                              }),
                              E.o(e)
                            );
                          },
                        },
                        o.a.createElement(
                          "div",
                          { className: I.TileActionInnerTitle },
                          D
                        ),
                        o.a.createElement(
                          "div",
                          { className: I.TileActionInnerText },
                          o.a.createElement(g.a, {
                            dateAndTime: j.GetStartTimeAndDateUnixSeconds(),
                            bSingleLine: !0,
                          })
                        )
                      )
                    )
                )
              )
            )
          : null;
      });
      n("RD/U"), n("MUT6");
      var j = n("5izx"),
        O = n("BVKn"),
        G = (n("ykc/"), n("av+R")),
        D = n("qDk6"),
        y = n("j+5p"),
        C = (n("kKgT"), n("hwrv"), n("9w6b")),
        L = n("apHd"),
        k = n("SdTr"),
        T = n("xnZ7"),
        B = n.n(T),
        P = n("6Y59"),
        M = n("0OaU"),
        N = n("opsS"),
        U = n("r3N9"),
        R = n("mB/g"),
        H = n("r+ba");
      class x extends o.a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: [],
              last_update_event: null,
            });
          const t = Object(L.a)("EventWebRowEmbed");
          this.ValidateStoreDefault(t) &&
            ((this.state.bPreLoaded = t.bPreLoaded),
            (this.state.announcementGIDList = t.announcementGIDList),
            (this.state.last_update_event = t.last_update_event),
            (this.state.events = []),
            this.state.announcementGIDList.forEach((e) => {
              const t = v.b.GetClanEventFromAnnouncementGID(e);
              t && this.state.events.push(t);
            }));
        }
        componentDidMount() {
          return Object(r.a)(this, void 0, void 0, function* () {
            const {
              appid: e,
              event_customization: t,
              partnerEventStore: n,
              trackingLocation: a,
            } = this.props;
            if (!this.state.bPreLoaded) {
              const i = yield n.LoadAdjacentPartnerEvents(
                null,
                null,
                e,
                0,
                2,
                t
              );
              if ((this.setState({ events: i }), a && i && i.length > 0)) {
                const e = C.a.Get().GetTracker();
                this.state.events
                  .filter((e) => e.BIsPartnerEvent())
                  .forEach((t) =>
                    e.MarkEventShown(t.GID, t.clanSteamID.GetAccountID(), a)
                  ),
                  e.Flush();
              }
            }
            window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
              this.setState({
                bShowModal: !0,
                announcementGID: t,
                modalInitialEvent: void 0,
              });
            };
          });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t) &&
            void 0 !== t.bPreLoaded &&
            "boolean" == typeof t.bPreLoaded &&
            Array.isArray(t.announcementGIDList)
          );
        }
        ShowModal(e) {
          const { trackingLocation: t } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: e,
            announcementGID: void 0,
          });
          const n = C.a.Get().GetTracker();
          e &&
            e.BIsPartnerEvent() &&
            n.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
            n.Flush();
        }
        ShowLatestUpdateModal() {
          const {
              event_gid: e,
              announcement_gid: t,
              clan_account_id: n,
            } = this.state.last_update_event,
            { trackingLocation: a } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: void 0,
            announcementGID: t,
          });
          const i = C.a.Get().GetTracker();
          e && i.MarkEventRead(e, n, a) && i.Flush();
        }
        CloseModal() {
          this.setState({ bShowModal: !1, modalInitialEvent: null });
        }
        BHasLastUpdateEvent() {
          var e;
          return Boolean(
            null === (e = this.state.last_update_event) || void 0 === e
              ? void 0
              : e.rtime
          );
        }
        BShouldShowLastUpdateEvent() {
          const { last_update_event: e, events: t } = this.state;
          return (
            !(
              !this.BHasLastUpdateEvent() ||
              !(null == e ? void 0 : e.announcement_gid)
            ) && !(null == t ? void 0 : t.length)
          );
        }
        render() {
          var e;
          const t = this.state.events;
          if (!t)
            return o.a.createElement(
              "div",
              { className: B.a.FlexCenter },
              o.a.createElement(M.a, { size: "medium", position: "center" })
            );
          const n = window.screen.width <= 500 ? 1 : 2,
            a = Boolean(null == t ? void 0 : t.length),
            i = this.BHasLastUpdateEvent(),
            r = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: c } = this.props;
          return o.a.createElement(
            G.e,
            { className: c },
            this.state.bShowModal &&
              o.a.createElement(
                F,
                Object.assign({}, this.props, {
                  announcementGID:
                    this.state.announcementGID ||
                    (null === (e = this.state.modalInitialEvent) || void 0 === e
                      ? void 0
                      : e.AnnouncementGID),
                  eventModel: this.state.modalInitialEvent,
                  closeModal: this.CloseModal,
                })
              ),
            a &&
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "h2",
                  null,
                  Object(_.f)("#EventBrowse_RecentEvents")
                ),
                !h.d.IN_GAMEPADUI &&
                  o.a.createElement(
                    "div",
                    { className: H.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? o.a.createElement(
                          G.e,
                          {
                            className: H.SectionButton,
                            onClick: () => this.ShowModal(t[0]),
                          },
                          Object(_.f)("#EventBrowse_MoreEventsBtn")
                        )
                      : o.a.createElement(
                          R.c,
                          {
                            eventModel: t[0],
                            route: R.a.k_eViewWebSiteHub,
                            className: H.SectionButton,
                          },
                          Object(_.f)("#EventBrowse_MoreEventsBtn")
                        )
                  ),
                o.a.createElement(
                  "div",
                  { className: H.EventsSummariesCtn },
                  t.slice(0, n).map((e) => {
                    const n =
                      1 === t.length && window.screen.width > 500 ? k.c : k.b;
                    return o.a.createElement(n, {
                      key: e.GID,
                      event: e,
                      onClick: (t) => {
                        this.ShowModal(e),
                          t.stopPropagation(),
                          t.preventDefault();
                      },
                    });
                  })
                )
              ),
            Boolean(i && r) &&
              o.a.createElement(V, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: r,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(i && !r && !h.d.IN_GAMEPADUI) &&
              o.a.createElement(q, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              })
          );
        }
      }
      function F(e) {
        const {
          appid: t,
          partnerEventStore: n,
          trackingLocation: a,
          announcementGID: i,
          eventModel: r,
          closeModal: c,
        } = e;
        return o.a.createElement(U.a, {
          className: h.d.IN_GAMEPADUI ? void 0 : H.StoreHeaderAdjust,
          eventClassName: h.d.IN_GAMEPADUI ? H.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: a,
          announcementGID: i,
          partnerEventStore: n,
          eventModel: r,
          closeModal: c,
        });
      }
      function q(e) {
        return o.a.createElement(
          "div",
          { className: H.LatestUpdateButtonCtn },
          o.a.createElement(
            "div",
            { className: H.LatestUpdateIcon },
            o.a.createElement(P.wb, null)
          ),
          o.a.createElement(
            G.e,
            { className: H.LatestUpdateButton, onClick: e.onClick },
            Object(_.f)(
              "#EventBrowse_LatestUpdateTime_Button",
              Object(_.o)(e.nUpdateTime)
            )
          )
        );
      }
      function V(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          i = n ? v.b.GetClanEventFromAnnouncementGID(n) : null,
          r = (e) => {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          };
        return o.a.createElement(
          "div",
          null,
          o.a.createElement(
            "h2",
            null,
            Object(_.f)("#EventBrowse_LastUpdateDate", Object(_.o)(t))
          ),
          o.a.createElement(
            "div",
            { className: H.SectionButtonCtn },
            o.a.createElement(
              "div",
              { className: H.SectionButton, onClick: r },
              Object(_.f)("#EventBrowse_ViewLatestUpdate")
            )
          ),
          Boolean(i) &&
            o.a.createElement(
              D.a,
              {
                className: H.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: y.d.PREFERRED_CHILD,
              },
              o.a.createElement(k.c, { event: i, onClick: r })
            )
        );
      }
      function W(e) {
        return (t) => o.a.createElement(a.a, null, o.a.createElement(e, t));
      }
      Object(r.b)([N.b], x.prototype, "ShowModal", null),
        Object(r.b)([N.b], x.prototype, "ShowLatestUpdateModal", null),
        Object(r.b)([N.b], x.prototype, "CloseModal", null);
      const z = W(function (e) {
          const t = Object(j.b)(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3),
            { appid: i } = e;
          return o.a.createElement(x, {
            appid: i,
            partnerEventStore: O.a.Get(),
            event_customization: {
              rtime_oldestevent: a,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [34],
            },
            strClassName: "early_access_announcements",
            trackingLocation: 3,
          });
        }),
        K = W(w);
    },
    eWxH: function (e, t, n) {
      e.exports = {
        TileContainer: "demoandquickpitch_TileContainer_3YSNl",
        TileTitleContainer: "demoandquickpitch_TileTitleContainer_huv5k",
        TileTitleInnerContainer:
          "demoandquickpitch_TileTitleInnerContainer_3Semw",
        TileTitle: "demoandquickpitch_TileTitle_3VhTo",
        TileActionButton: "demoandquickpitch_TileActionButton_NxUN-",
        TileSubtitle: "demoandquickpitch_TileSubtitle_2FwWg",
        TileActionContainer: "demoandquickpitch_TileActionContainer_1AC_X",
        TileActionInnerContainer:
          "demoandquickpitch_TileActionInnerContainer_2H9PU",
        TileActionInner: "demoandquickpitch_TileActionInner_3Fxxr",
        TileActionInnerTitle: "demoandquickpitch_TileActionInnerTitle_zB1xw",
        TileActionInnerText: "demoandquickpitch_TileActionInnerText_-piyE",
      };
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
          return v;
        });
      var a = n("mrSG"),
        i = n("iO5U"),
        o = n("q1tI"),
        r = n("WBba"),
        c = n("C4Nl"),
        l = n("X2UP"),
        s = n("r64O"),
        d = n("lkRc");
      function m() {
        const e = Object(l.a)("usePartnerStoreBrowseAPI"),
          [t, n] = Object(o.useState)(!1);
        return (
          Object(o.useEffect)(() => {
            (function (e = !1) {
              return Object(a.a)(this, void 0, void 0, function* () {
                if (e && c.a.BIsInitialized()) return;
                const t = Object(d.h)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                Object(s.a)(Boolean(t), "require partnerbrowse_webapi_token");
                const n = new r.a(d.d.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != d.d.WEB_UNIVERSE && "beta" != d.d.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  u(t),
                  c.a.Initialize(n, d.k.is_partner_member)
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
        i.a.BIsInitialized() || i.a.Initialize(new r.a(d.d.WEBAPI_BASE_URL, e));
      }
      function v(e) {
        return i.a.BIsInitialized() || u(e || null), !0;
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
        i = n("q1tI"),
        o = n("WBba"),
        r = n("qD+2"),
        c = n("9w6b"),
        l = n("6oCP"),
        s = n("hKFG"),
        d = n("TLQK"),
        m = n("lkRc");
      function u(e) {
        const [t, n] = i.useState(c.a.IsInitialized());
        return (
          i.useEffect(() => {
            r.a.Init(new o.a(m.d.WEBAPI_BASE_URL)),
              l.b.Init(),
              c.a.InitGlobal().then(() => n(!0)),
              Object(s.a)(null);
          }, []),
          i.useEffect(() => {
            const e = Object(d.c)();
            e && a.locale(e);
          }, []),
          t ? e.children : null
        );
      }
    },
    "ykc/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var a = n("mrSG"),
        i = n("q1tI"),
        o = n.n(i),
        r = n("av+R"),
        c = n("yLGM"),
        l = n("opsS"),
        s = n("lkRc");
      function d(e) {
        const { children: t, navTreeRef: n } = e,
          i = Object(a.c)(e, ["children", "navTreeRef"]),
          d = o.a.useRef(),
          m = Object(l.g)(d, n);
        if (s.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return o.a.createElement(
            r.b,
            Object.assign({}, i, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            o.a.createElement(c.a, null, t)
          );
        }
        return o.a.createElement(o.a.Fragment, null, t);
      }
    },
  },
]);
