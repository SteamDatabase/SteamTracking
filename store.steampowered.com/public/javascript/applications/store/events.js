/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4268],
  {
    9905: (e) => {
      e.exports = { ErrorMsg: "_1ZEL9R8kTy3jJqcuU_IguM" };
    },
    49355: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => $ });
      var n = a(43527),
        r = a(90626),
        c = a(92757),
        i = a(17720),
        o = a(95034),
        l = a(41735),
        m = a.n(l),
        d = a(75844),
        s = a(22837),
        p = a(2160),
        u = a(4796),
        _ = a(73964),
        h = a(84811),
        E = a(30756),
        v = a(8107),
        y = a(75113),
        g = a(35685),
        b = a(92557),
        A = a(90316),
        w = a.n(A),
        f = a(95695),
        G = a.n(f),
        S = a(22797),
        I = a(52038),
        N = a(61859),
        k = a(68797),
        D = a(78327),
        B = a(9905),
        L = a.n(B),
        H = a(43068),
        C = a(82097),
        P = a(55263);
      const T = _.$.Get(),
        x = _.$.GetSummaryStore();
      function q() {
        document.body.classList.contains("events_hub") &&
          document.body.classList.remove("events_hub");
      }
      const M = (0, d.PA)((e) => {
          const {
              bInfiniteScroll: t,
              event_gid: a,
              announcement_gid: n,
              clansteamid: c,
              appid: i,
            } = e,
            [o, l] = (0, r.useState)(a ? T.GetClanEventModel(a) : void 0),
            [d] = (0, P.t7)(o?.appid, {
              include_assets: !0,
              include_release: !0,
              include_platforms: !0,
              include_screenshots: !0,
            }),
            [_, A] = (0, r.useState)(!1),
            f = (e, t) => {
              t.token.reason ||
                (l(e),
                (function (e) {
                  let t;
                  if (e && e.appid) t = C.A.Get().GetApp(e.appid)?.GetName();
                  else if (e && e.clanSteamID) {
                    const a = u.ac.GetClanInfoByClanAccountID(
                      e.clanSteamID.GetAccountID(),
                    );
                    t = a && a.group_name;
                  }
                  const a =
                    e && e.GetNameWithFallback((0, s.sf)(D.TS.LANGUAGE));
                  if (e && t && a) {
                    const e = (0, N.we)(
                      "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                      t,
                      a,
                    );
                    document.title != e && (document.title = e);
                  }
                })(e));
            },
            B = (e) => {
              const t = (0, k.H)(e);
              console.error("StoreEventDetailView failed " + t.strErrorMsg, t),
                A(!0);
            };
          (0, r.useEffect)(q, []),
            (0, r.useEffect)(() => {
              const e = m().CancelToken.source();
              return (
                o ||
                  (a && !T.GetClanEventModel(a)
                    ? T.LoadPartnerEventGeneric(c, i, a, void 0, 0)
                        .then((t) => f(t, e))
                        .catch(() => {
                          e.token.reason ||
                            T.LoadPartnerEventGeneric(c, i, void 0, a, 0)
                              .then((t) => f(t, e))
                              .catch(B);
                        })
                    : n &&
                      !T.GetClanEventGIDFromAnnouncementGID(n) &&
                      T.LoadPartnerEventGeneric(c, i, void 0, n, 0)
                        .then((t) => f(t, e))
                        .catch(B)),
                () => {
                  e.cancel("StoreEventDetailView: unmounting");
                }
              );
            }, [a, c, i, n, o]);
          const M = (0, y.Bw)(o, y.PH.k_eStoreNewsHub, "allowRelative");
          if (_ || !o || (o?.appid && !d)) {
            const e = "lang_" + (0, s.ww)((0, s.sf)(D.TS.LANGUAGE)),
              t = "";
            return r.createElement(
              "div",
              {
                className: (0, I.A)(
                  w().EventDetailsPageContainer,
                  e,
                  G().PartnerEventFont,
                  w().NoTitleArtwork,
                ),
              },
              r.createElement("div", { style: { height: "100px" } }),
              r.createElement(b.K8, { strImageURL: t }),
              r.createElement(b.P2, {
                strImageURL: t,
                body: _
                  ? r.createElement(
                      "div",
                      { className: L().ErrorMsg },
                      (0, N.PP)(
                        "#Events_FailedToFind",
                        r.createElement(
                          "a",
                          { href: D.TS.STORE_BASE_URL + "news/" },
                          (0, N.we)("#EventDisplay_NewsHubSubtitle"),
                        ),
                      ),
                    )
                  : r.createElement(S.t, {
                      string: (0, N.we)("#Loading"),
                      size: "medium",
                      position: "center",
                    }),
                postbody: Boolean(_ && c)
                  ? r.createElement(g.rN, {
                      clanAccountID: c.GetAccountID(),
                      partnerEventStore: x,
                    })
                  : void 0,
              }),
            );
          }
          return t
            ? r.createElement(
                h.tH,
                null,
                r.createElement(v.N, {
                  appid: o.appid,
                  trackingLocation: 7,
                  announcementGID: o.GetAnnouncementGID(),
                  partnerEventStore: T,
                  eventModel: o,
                  showAppHeader: !0,
                  closeModal: () => e.history.push(M),
                }),
              )
            : r.createElement(
                h.tH,
                null,
                r.createElement(b.jA, {
                  lang: (0, s.sf)(D.TS.LANGUAGE),
                  partnerEventStore: T,
                  event: o,
                  adminPanel:
                    D.TS.EREALM === p.TU.k_ESteamRealmChina
                      ? r.createElement(H.P, { eventModel: o })
                      : r.createElement(E.g, {
                          eventModel: o,
                          partnerEventStore: T,
                        }),
                  otherEventRow: r.createElement(g.rN, {
                    clanAccountID: o.clanSteamID.GetAccountID(),
                    gidAnnouncement: o.AnnouncementGID,
                    partnerEventStore: x,
                  }),
                }),
              );
        }),
        R = (0, c.y)(M);
      var U = a(31586),
        F = a(63486),
        V = a(77516),
        O = a(39020),
        j = a(30470);
      function Q(e) {
        if ("steam" === e) {
          if ("beta" !== new URLSearchParams().get("branch"))
            return { rgHiddenClans: [V.Ro] };
        }
      }
      const $ = (e) => {
        const [t] = (0, o.QD)("byday", !1),
          [a] = (0, o.QD)("upcoming", !1);
        return (0, O.vb)(j.TS.LANGUAGE)
          ? r.createElement(
              F.d,
              { bSalePage: !0 },
              r.createElement(
                c.dO,
                null,
                r.createElement(c.qh, {
                  exact: !0,
                  path: n.B.EventViewByApp(
                    ":appid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?",
                  ),
                  render: (e) =>
                    r.createElement(R, {
                      key: "detailview_" + e.match.params.event_gid,
                      ...e,
                      appid:
                        e.match.params.appid &&
                        Number.parseInt(e.match.params.appid),
                      event_gid: e.match.params.event_gid,
                      bInfiniteScroll: "inline" == e.match.params.viewtype,
                    }),
                }),
                r.createElement(c.qh, {
                  exact: !0,
                  path: n.B.EventViewByGroup(
                    ":groupid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?",
                  ),
                  render: (e) =>
                    r.createElement(R, {
                      key: "detailview_" + e.match.params.event_gid,
                      ...e,
                      clansteamid: new i.b(e.match.params.groupid),
                      event_gid: e.match.params.event_gid,
                      bInfiniteScroll: "inline" == e.match.params.viewtype,
                    }),
                }),
                r.createElement(c.qh, {
                  exact: !0,
                  path: n.B.OldAnnouncementViewByApp(
                    ":appid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?",
                  ),
                  render: (e) =>
                    r.createElement(R, {
                      key: "detailoldview_" + e.match.params.announcement_gid,
                      ...e,
                      appid:
                        e.match.params.appid &&
                        Number.parseInt(e.match.params.appid),
                      announcement_gid: e.match.params.announcement_gid,
                      bInfiniteScroll: "old_inline" == e.match.params.viewtype,
                    }),
                }),
                r.createElement(c.qh, {
                  exact: !0,
                  path: n.B.OldAnnouncementViewByGroup(
                    ":groupid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?",
                  ),
                  render: (e) =>
                    r.createElement(R, {
                      key: "detailoldview_" + e.match.params.announcement_gid,
                      ...e,
                      clansteamid: new i.b(e.match.params.groupid),
                      announcement_gid: e.match.params.announcement_gid,
                      bInfiniteScroll: "old_inline" == e.match.params.viewtype,
                    }),
                }),
                r.createElement(c.qh, {
                  exact: !0,
                  path: n.B.NewsHubApp(":appid(\\d+)", ":vanity?"),
                  render: (e) =>
                    r.createElement(U.Ay, {
                      key: e.match.params.appid,
                      ...e,
                      filter_to_appids: [Number(e.match.params.appid)],
                      section_by_day: t,
                    }),
                }),
                r.createElement(c.qh, {
                  exact: !0,
                  path: n.B.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
                  render: (e) =>
                    r.createElement(U.Ay, {
                      key: e.match.params.groupid,
                      ...e,
                      filter_to_clanids: [Number(e.match.params.groupid)],
                      section_by_day: t,
                    }),
                }),
                r.createElement(c.qh, {
                  exact: !0,
                  path: n.B.NewsHubCollection(":collectionid", ":vanity?"),
                  render: (e) =>
                    r.createElement(U.Ay, {
                      key: e.match.params.collectionid,
                      initialFilters: Q(e.match.params.collectionid),
                      ...e,
                      filter_to_collection: e.match.params.collectionid,
                      section_by_day: t,
                    }),
                }),
                r.createElement(c.qh, {
                  exact: !0,
                  path: n.B.NewsHubSale(":saleid", ":vanity?"),
                  render: (e) =>
                    r.createElement(U.Ay, {
                      key: e.match.params.saleid,
                      ...e,
                      filter_to_saleid: e.match.params.saleid,
                      section_by_day: t || a,
                    }),
                }),
                r.createElement(c.qh, {
                  exact: !0,
                  path: n.B.NewsHubContentHub(
                    ":hubtype",
                    ":category_or_language?",
                    ":tag_name?",
                  ),
                  render: (e) =>
                    r.createElement(U.Ay, {
                      key:
                        e.match.params.hubtype +
                        "_" +
                        e.match.params.category_or_language +
                        "_" +
                        e.match.params.tag_name,
                      ...e,
                      filter_to_contenthub_hubtype: e.match.params.hubtype,
                      filter_to_contenthub_category_or_language:
                        e.match.params.category_or_language,
                      filter_to_contenthub_tag_name: e.match.params.tag_name,
                      section_by_day: t,
                    }),
                }),
                r.createElement(c.qh, {
                  exact: !0,
                  path: n.B.NewsHub(),
                  render: (e) =>
                    r.createElement(U.Ay, {
                      key: "global",
                      ...e,
                      section_by_day: t,
                    }),
                }),
              ),
            )
          : null;
      };
    },
  },
]);
