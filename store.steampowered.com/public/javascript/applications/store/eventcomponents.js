/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    E9gz: function (e, t, n) {
      e.exports = {
        AnalysisCtn: "eventmoderation_AnalysisCtn_1YGfW",
        AnalysisMissing: "eventmoderation_AnalysisMissing_rH1Dt",
        ModerationContainer: "eventmoderation_ModerationContainer_4HRKp",
        FilterContainer: "eventmoderation_FilterContainer_qY07T",
        Tile: "eventmoderation_Tile_3oU1y",
        TileEventOtherType: "eventmoderation_TileEventOtherType_3LUrW",
        TileCapsule: "eventmoderation_TileCapsule_36tP8",
        NoCapsule: "eventmoderation_NoCapsule_1onVF",
        TileDetails: "eventmoderation_TileDetails_2mRup",
        DetailsLeft: "eventmoderation_DetailsLeft_1O0y5",
        EventTitle: "eventmoderation_EventTitle_3ahHd",
        DetailsRight: "eventmoderation_DetailsRight_2BaxW",
        ArtHeader: "eventmoderation_ArtHeader_38IkF",
        ArtSpotlight: "eventmoderation_ArtSpotlight_2oUPY",
        DetailsMiddle: "eventmoderation_DetailsMiddle_VcJpZ",
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
    Wym2: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "EventModerationLanding", function () {
          return mt;
        }),
        n.d(t, "EventBackfillLanding", function () {
          return vt;
        }),
        n.d(t, "EventSaleDisplay", function () {
          return ht;
        }),
        n.d(t, "EventCalendar", function () {
          return Et;
        }),
        n.d(t, "EventDetailView", function () {
          return bt;
        }),
        n.d(t, "Events", function () {
          return _t;
        }),
        n.d(t, "EventSteamGameFestivalDebug", function () {
          return gt;
        }),
        n.d(t, "RssEnabledAccountDashboard", function () {
          return ft;
        });
      var d,
        a,
        v = n("q1tI"),
        p = n.n(v),
        r = n("daJ/"),
        E = n("mrSG"),
        o = n("vDqi"),
        b = n.n(o),
        m = n("2vnA"),
        i = n("TyAF"),
        l = n("s4NR"),
        u = n.n(l),
        s = n("AXHe"),
        c = n("Ty5D"),
        h = n("Cs6D"),
        _ = n("kyHq"),
        g = n("3+zv"),
        f = n("kLLr"),
        S = n("U+Q5"),
        y = n("TQGK"),
        O = n("N0Ye"),
        A = n("f0Wu"),
        T = ["mod_reviewed", "auto_migrated"],
        C = (function () {
          function e() {
            (this.selectedTags = void 0),
              (this.excludedTags = void 0),
              (this.filterDate = void 0),
              (this.eventsToLoadPerPaging = 20),
              (this.filterEventTypes = void 0),
              (this.bOrderByVisibilityStartTime = !1),
              (this.bUseCustomQuery = !1);
          }
          return (
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.Init = function (e) {
              var t = this,
                n = u.a.parse(e.substring(1)),
                a = void 0;
              "string" == typeof n.selectedTags
                ? 0 < n.selectedTags.length &&
                  (a = [{ label: n.selectedTags, value: n.selectedTags }])
                : n.selectedTags &&
                  ((a = []),
                  n.selectedTags.forEach(function (e) {
                    return a.push({ label: e, value: e });
                  }));
              var r = !1,
                o = T.map(function (e) {
                  return { label: e, value: e };
                });
              "string" == typeof n.excludedTags
                ? 0 < n.excludedTags.length &&
                  ((r = !0),
                  (o = [{ label: n.excludedTags, value: n.excludedTags }]))
                : n.excludedTags &&
                  ((o = []),
                  n.excludedTags.forEach(function (e) {
                    return o.push({ label: e, value: e });
                  }),
                  (r = o && 0 < o.length));
              var i,
                l = void 0;
              "string" == typeof n.eventtype
                ? 0 < n.eventtype.length &&
                  ((i = Number.parseInt(n.eventtype)),
                  (l = [{ label: Object(O.b)(i), value: i }]))
                : n.eventtype &&
                  ((l = []),
                  n.eventtype.forEach(function (e) {
                    var t = Number.parseInt(e);
                    l.push({ label: Object(O.b)(t), value: t });
                  }));
              var s = void 0;
              "string" == typeof n.filterDate &&
                0 < n.filterDate.length &&
                (s = A.unix(Number(n.filterDate)));
              var c = !1;
              "string" == typeof n.orderByVisibility &&
                0 < n.orderByVisibility.length &&
                (c = Boolean(n.orderByVisibility)),
                Object(m.G)(function () {
                  (t.selectedTags = a),
                    (t.excludedTags = o),
                    (t.filterEventTypes = l),
                    (t.filterDate = s),
                    (t.bOrderByVisibilityStartTime = c),
                    (t.bUseCustomQuery =
                      (a && 0 < a.length) || r || (l && 0 < l.length));
                });
            }),
            Object(E.c)([m.C], e.prototype, "selectedTags", void 0),
            Object(E.c)([m.C], e.prototype, "excludedTags", void 0),
            Object(E.c)([m.C], e.prototype, "filterDate", void 0),
            Object(E.c)([m.C], e.prototype, "filterDateAsString", void 0),
            Object(E.c)([m.C], e.prototype, "eventsToLoadPerPaging", void 0),
            Object(E.c)([m.C], e.prototype, "filterEventTypes", void 0),
            Object(E.c)(
              [m.C],
              e.prototype,
              "bOrderByVisibilityStartTime",
              void 0
            ),
            Object(E.c)([m.C], e.prototype, "bUseCustomQuery", void 0),
            e
          );
        })(),
        j = n("bDQf"),
        I = n("lkRc");
      ((a = d = d || {})[(a.k_ModReviewed = 0)] = "k_ModReviewed"),
        (a[(a.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (a[(a.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (a[(a.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (a[(a.k_ModReReviewed = 4)] = "k_ModReReviewed"),
        (a[(a.k_ModRemovedFromSteamChina = 5)] = "k_ModRemovedFromSteamChina");
      function D(e) {
        var t = v.useState(!0),
          n = t[0],
          a = t[1],
          r = e.eventModel.GetAllTags().filter(function (e) {
            return w.IsAuditAction(e);
          }),
          o = r.length,
          i = 3 < r.length && n;
        if (0 == r.length) return null;
        i && (r = r.splice(0, 3));
        var l,
          s,
          c,
          u =
            ((l = r),
            (s = new Array()),
            (c = e.eventModel),
            l.forEach(function (e) {
              var t = new w();
              t.FromString(e),
                s.push(
                  v.createElement(
                    "div",
                    { key: c.GID + e },
                    (function (e) {
                      var t =
                          Object(H.k)(e.m_rtWhen) +
                          " @ " +
                          Object(H.m)(e.m_rtWhen),
                        n = v.createElement(U, {
                          locToken: "#EventModTile_Moderator",
                          accountID: e.m_moderator,
                        });
                      switch (e.m_action) {
                        case d.k_ModReviewed:
                          return v.createElement(
                            "div",
                            { className: N.ModeratorAuditActionCtn },
                            Object(H.n)(
                              "#EventModTile_Action_Reviewed",
                              v.createElement("span", null, t),
                              n
                            )
                          );
                        case d.k_ModUnreviewed:
                          return v.createElement(
                            "div",
                            { className: N.ModeratorAuditActionCtn },
                            Object(H.n)(
                              "#EventModTile_Action_UnReviewed",
                              v.createElement("span", null, t),
                              n
                            )
                          );
                        case d.k_ChangeEventType:
                          return v.createElement(
                            "div",
                            { className: N.ModeratorAuditActionCtn },
                            Object(H.n)(
                              "#EventModTile_Action_NewEventType",
                              v.createElement("span", null, t),
                              n,
                              Object(O.b)(e.m_newEventType)
                            )
                          );
                        case d.k_UpdateSeasonTags:
                          return v.createElement(
                            "div",
                            { className: N.ModeratorAuditActionCtn },
                            Object(H.n)(
                              "#EventModTile_Action_SeasonTagUpdate",
                              v.createElement("span", null, t),
                              n,
                              e.m_newTagAdded
                            )
                          );
                        case d.k_ModReReviewed:
                          return v.createElement(
                            "div",
                            { className: N.ModeratorAuditActionCtn },
                            Object(H.n)(
                              "#EventModTile_Action_ReReviewed",
                              v.createElement("span", null, t),
                              n
                            )
                          );
                        case d.k_ModRemovedFromSteamChina:
                          return v.createElement(
                            "div",
                            { className: N.ModeratorAuditActionCtn },
                            Object(H.n)(
                              "#EventModTile_Action_RemoveFromSC",
                              v.createElement("span", null, t),
                              n
                            )
                          );
                        default:
                          return v.createElement(
                            "div",
                            { className: N.ModeratorAuditActionCtn },
                            e.ToModString
                          );
                      }
                    })(t)
                  )
                );
            }),
            s);
        return v.createElement(
          "div",
          null,
          v.createElement(
            "h4",
            null,
            Object(H.f)("#EventModTile_Action_Title")
          ),
          u,
          i &&
            v.createElement(
              "a",
              {
                onClick: function () {
                  return a(!1);
                },
              },
              Object(H.f)("#EventModTile_Action_More", o - 3)
            ),
          Boolean(!i && 3 < o) &&
            v.createElement(
              "a",
              {
                onClick: function () {
                  return a(!0);
                },
              },
              Object(H.f)("#EventModTile_Action_Hide")
            )
        );
      }
      var M = "ModAct",
        w = (function () {
          function e() {}
          return (
            (e.prototype.ToModString = function () {
              var e =
                M +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case d.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case d.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function (e) {
              var t = e.split("_");
              if (!t || t[0] !== M) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case d.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case d.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function (e) {
              return (
                (this.m_moderator = I.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = d.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function (e) {
              return (
                (this.m_moderator = I.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? d.k_ModReviewed : d.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function (e) {
              return (
                (this.m_moderator = I.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? d.k_ModReReviewed : d.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function (e) {
              return e.startsWith(M);
            }),
            (e.prototype.SetUpdateSeasonalTags = function (e) {
              return (
                (this.m_moderator = I.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = d.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        G = (function () {
          function e() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          return (
            (e.prototype.BHasSolrEvent = function (e) {
              return this.m_mapEventGIDToSolrData.has(e);
            }),
            (e.prototype.GetAllSolrEvents = function () {
              return this.m_listEvents;
            }),
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.ClearAllSolrEvents = function () {
              (this.m_mapEventGIDToSolrData = new Map()),
                (this.m_listEvents = new Array());
            }),
            (e.prototype.LoadPartnerEventForModerationIncremental = function (
              s,
              c,
              u
            ) {
              return (
                void 0 === c && (c = 0),
                void 0 === u && (u = 10),
                Object(E.b)(this, void 0, void 0, function () {
                  var t,
                    n,
                    a,
                    r,
                    o,
                    i,
                    l = this;
                  return Object(E.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        (t =
                          I.c.STORE_BASE_URL +
                          "events_admin/ajaxgetmoderationspecificpartnerevents"),
                          (n = { page: c, count: u }),
                          (e.label = 1);
                      case 1:
                        return (
                          e.trys.push([1, 3, , 4]),
                          [
                            4,
                            b.a.get(t, {
                              params: n,
                              withCredentials: !0,
                              cancelToken: s ? s.token : void 0,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (a = e.sent()),
                          s && s.token.reason
                            ? [2, []]
                            : a && a.data
                            ? ((r = new Array()),
                              Object(m.G)(function () {
                                a.data.docs.forEach(function (e) {
                                  l.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                    (r.push(e),
                                    l.m_mapEventGIDToSolrData.set(
                                      e.unique_id,
                                      e
                                    ),
                                    l.m_listEvents.push(e));
                                });
                              }),
                              [2, r])
                            : [3, 4]
                        );
                      case 3:
                        return (
                          (o = e.sent()),
                          (i = Object(j.a)(o)),
                          console.error(
                            "LoadPartnerEventForModerationIncremental failed:" +
                              i.strErrorMsg,
                            i
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2, []];
                    }
                  });
                })
              );
            }),
            (e.prototype.UpdateTagsOnPartnerEvent = function (
              r,
              o,
              i,
              l,
              s,
              c
            ) {
              return Object(E.b)(this, void 0, void 0, function () {
                var t, n, a;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          I.c.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (n = l.join(",")),
                        c &&
                          (0 < l.length && (n += ","), (n += c.ToModString())),
                        (a = new FormData()).append("sessionid", I.c.SESSIONID),
                        a.append("clan_accountid", "" + o.GetAccountID()),
                        a.append("gid_announcement", i),
                        a.append("add_tags", n),
                        a.append("remove_tags", s.join(",")),
                        [
                          4,
                          b.a.post(t, a, {
                            withCredentials: !0,
                            cancelToken: r.token,
                          }),
                        ]
                      );
                    case 1:
                      return [2, e.sent().data.tags];
                  }
                });
              });
            }),
            (e.prototype.UpdatePartnerEventType = function (a, r, o, i) {
              return Object(E.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          I.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (n = new FormData()).append("sessionid", I.c.SESSIONID),
                        n.append("clan_accountid", "" + r.GetAccountID()),
                        n.append("gid_event", o),
                        n.append("new_event_type", "" + i),
                        [
                          4,
                          b.a.post(t, n, {
                            withCredentials: !0,
                            cancelToken: a.token,
                          }),
                        ]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            Object(E.c)([m.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(E.c)([m.C], e.prototype, "m_listEvents", void 0),
            Object(E.c)([m.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        k = (function () {
          function e() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          return (
            (e.prototype.BHasSolrEvent = function (e) {
              return this.m_mapEventGIDToSolrData.has(e);
            }),
            (e.prototype.GetAllSolrEvents = function () {
              return this.m_listEvents;
            }),
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.ClearAllSolrEvents = function () {
              (this.m_mapEventGIDToSolrData = new Map()),
                (this.m_listEvents = new Array());
            }),
            (e.prototype.LoadPartnerEventForQueryIncremental = function (
              r,
              o,
              i,
              l,
              s,
              c,
              u,
              d,
              p
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(E.b)(this, void 0, void 0, function () {
                  var t,
                    n,
                    a = this;
                  return Object(E.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(
                            r,
                            o,
                            i,
                            l,
                            s,
                            c,
                            u,
                            d,
                            p
                          ),
                        ];
                      case 1:
                        return (
                          (t = e.sent()),
                          (n = new Array()),
                          Object(m.G)(function () {
                            t.forEach(function (e) {
                              a.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                (n.push(e),
                                a.m_mapEventGIDToSolrData.set(e.unique_id, e),
                                a.m_listEvents.push(e));
                            });
                          }),
                          [2, n]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.GetLatestPartnerEvents = function (
              r,
              o,
              i,
              l,
              s,
              c,
              u,
              d,
              p,
              m,
              v,
              h
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(E.b)(this, void 0, void 0, function () {
                  var t, n, a;
                  return Object(E.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            I.c.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (n = {
                            page: o,
                            count: i,
                            date: u,
                            appids: void 0 === l ? void 0 : l.join(","),
                            required_tags: void 0 === s ? void 0 : s.join(","),
                            exclude_tags: void 0 === c ? void 0 : c.join(","),
                            eventtypefilter:
                              void 0 === d ? void 0 : d.join(","),
                            orderByVisibility: p || void 0,
                            creator_home_clan_id:
                              void 0 === m ? void 0 : m.join(","),
                            showUnpublished: void 0 === h ? void 0 : h,
                            term: void 0 === v ? void 0 : v,
                          }),
                          [
                            4,
                            b.a.get(t, {
                              params: n,
                              withCredentials: !0,
                              cancelToken: r ? r.token : void 0,
                            }),
                          ]
                        );
                      case 1:
                        return [2, (a = e.sent()).data ? a.data.docs : []];
                    }
                  });
                })
              );
            }),
            Object(E.c)([m.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(E.c)([m.C], e.prototype, "m_listEvents", void 0),
            Object(E.c)([m.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        L = n("6oCP"),
        R = n("IjL/"),
        B = n("T27q"),
        P = n("Qcoi"),
        F = n("0OaU"),
        H = n("TLQK"),
        N = n("zrk3"),
        U = Object(i.a)(function (e) {
          var t = e.accountID,
            n = e.locToken,
            a = f.a.InitFromAccountID(t).ConvertTo64BitString(),
            o = v.useRef(null),
            r = v.useState(P.a.GetProfile(a)),
            i = r[0],
            l = r[1],
            s = v.useState(!P.a.BHasProfile(a)),
            c = s[0],
            u = s[1];
          v.useEffect(
            function () {
              var r = f.a.InitFromAccountID(t).ConvertTo64BitString();
              return (
                P.a.BHasProfile(r) ||
                  (u(!0),
                  Object(E.b)(void 0, void 0, void 0, function () {
                    var t, n, a;
                    return Object(E.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          (t = b.a.CancelToken.source()),
                            (o.current = t.cancel),
                            (e.label = 1);
                        case 1:
                          return (
                            e.trys.push([1, 3, , 4]), [4, P.a.LoadProfiles([r])]
                          );
                        case 2:
                          return e.sent(), [3, 4];
                        case 3:
                          return (
                            (n = e.sent()),
                            (a = Object(j.a)(n)),
                            console.error(
                              "EventModerationTile profile load : " +
                                a.strErrorMsg,
                              a
                            ),
                            [3, 4]
                          );
                        case 4:
                          return (
                            t.token.reason || (l(P.a.GetProfile(r)), u(!1)), [2]
                          );
                      }
                    });
                  })),
                function () {
                  o.current && o.current("ModEventUserProfile: unmounting");
                }
              );
            },
            [t]
          );
          var d =
            "https://steamsupport.valvesoftware.com/account/overview/" + a;
          return v.createElement(
            "div",
            null,
            Object(H.n)(
              n,
              v.createElement(
                "a",
                { href: d, target: I.c.IN_CLIENT ? void 0 : "_blank" },
                Boolean(i)
                  ? v.createElement(v.Fragment, null, i.persona_name)
                  : v.createElement(
                      v.Fragment,
                      null,
                      c && v.createElement(F.a, { size: "small" }),
                      v.createElement("span", null, t)
                    )
              )
            )
          );
        }),
        z = n("BpzF"),
        x = n("fpVW"),
        W = n.n(x),
        V = n("Jqb/"),
        q = n("UxvL"),
        Q = n("ka0M"),
        Y = n("+d9t"),
        K = n("exH9"),
        J = n("X3Ds"),
        X = n("bxiW"),
        Z = n("E9gz"),
        $ = n("Mgs7"),
        ee = n("5E+2"),
        te = n("IzPI"),
        ne = n("C4Nl"),
        ae = n("f0Wu"),
        re = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0,
        },
        oe = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = b.a.CancelToken.source()),
              (e.m_refScroll = p.a.createRef()),
              (e.m_IntervalTimer = void 0),
              (e.state = {
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !1,
                nLastFetchCompletedMS: 0,
              }),
              (e.m_nPage = 0),
              e
            );
          }
          return (
            Object(E.d)(e, t),
            (e.prototype.componentDidMount = function () {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0),
                C.Get().Init(this.props.history.location.search);
            }),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "EventModerationLanding component unmounted"
              ),
                window.removeEventListener("scroll", this.OnScroll),
                this.ClearTimer();
            }),
            (e.prototype.HandleUpdateQueryParameter = function () {
              var e,
                t,
                n,
                a,
                r,
                o = C.Get();
              o.bUseCustomQuery &&
                this.props.history &&
                ((e = o.selectedTags),
                (t = o.excludedTags),
                (n = o.filterEventTypes),
                (a = o.filterDate),
                (r = o.bOrderByVisibilityStartTime),
                e || t || n || a || r
                  ? this.props.history.push(
                      "?" +
                        u.a.stringify({
                          selectedTags:
                            e && 0 < e.length
                              ? e.map(function (e) {
                                  return e.value;
                                })
                              : null,
                          excludedTags:
                            t && 0 < t.length
                              ? t.map(function (e) {
                                  return e.value;
                                })
                              : null,
                          eventtype:
                            n && 0 < n.length
                              ? n.map(function (e) {
                                  return "" + e.value;
                                })
                              : null,
                          filterDate: a && 0 < a.unix() ? "" + a.unix() : null,
                          orderByVisibility: r ? "1" : null,
                        })
                    )
                  : this.props.history.push("?"));
            }),
            (e.prototype.ClearTimer = function () {
              this.m_IntervalTimer &&
                (window.clearInterval(this.m_IntervalTimer),
                (this.m_IntervalTimer = void 0));
            }),
            (e.prototype.HandleError = function (e) {
              var t = Object(j.a)(e);
              console.error(
                "EventModerationLanding error: " + t.strErrorMsg,
                t
              ),
                this.setState({
                  bInfiniteScrollLoading: !1,
                  bExhaustedEventList: !0,
                  nLastFetchCompletedMS: Date.now(),
                });
            }),
            (e.prototype.LoadMorePublicEventWithDelay = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                return Object(E.e)(this, function (e) {
                  return (
                    (this.m_IntervalTimer = window.setInterval(
                      this.LoadMoreModerationEvents,
                      500
                    )),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.LoadMoreModerationEvents = function () {
              var t,
                e,
                n,
                a,
                r = this;
              this.ClearTimer(),
                this.state.bInfiniteScrollLoading &&
                  ((t = C.Get()).bUseCustomQuery
                    ? ((e = t.filterEventTypes
                        ? t.filterEventTypes.map(function (e) {
                            return e.value;
                          })
                        : void 0),
                      (n = t.selectedTags
                        ? t.selectedTags.map(function (e) {
                            return e.value;
                          })
                        : void 0),
                      (a = t.excludedTags
                        ? t.excludedTags.map(function (e) {
                            return e.value;
                          })
                        : void 0),
                      k
                        .Get()
                        .LoadPartnerEventForQueryIncremental(
                          this.m_cancelSignal,
                          this.m_nPage,
                          t.eventsToLoadPerPaging,
                          [this.props.appid],
                          n,
                          a,
                          t.filterDate,
                          e,
                          t.bOrderByVisibilityStartTime
                        ))
                    : G.Get().LoadPartnerEventForModerationIncremental(
                        this.m_cancelSignal,
                        this.m_nPage,
                        t.eventsToLoadPerPaging
                      )
                  )
                    .then(function (e) {
                      (r.m_nPage += t.eventsToLoadPerPaging),
                        r.setState({
                          bInfiniteScrollLoading: !1,
                          bExhaustedEventList: 0 == e.length,
                          nLastFetchCompletedMS: Date.now(),
                        });
                    })
                    .catch(function (e) {
                      return r.HandleError(e);
                    });
            }),
            (e.prototype.UpdateQueryParametersAndLoadMoreEvents = function () {
              this.HandleUpdateQueryParameter(),
                this.LoadMoreModerationEvents();
            }),
            (e.prototype.RenderTiles = function () {
              var t = new Array();
              return (
                (C.Get().bUseCustomQuery
                  ? k.Get().GetAllSolrEvents()
                  : G.Get().GetAllSolrEvents()
                ).forEach(function (e) {
                  t.push(
                    p.a.createElement(ce, { solrData: e, key: e.unique_id })
                  );
                }),
                t
              );
            }),
            (e.prototype.OnScroll = function () {
              var e;
              this.m_refScroll &&
                this.m_refScroll.current &&
                (e = this.m_refScroll.current) &&
                (this.state.bExhaustedEventList ||
                  this.state.bInfiniteScrollLoading ||
                  (e.getBoundingClientRect().bottom <=
                    window.innerHeight + 50 &&
                    (this.state.nLastFetchCompletedMS + 500 < Date.now()
                      ? this.setState(
                          { bInfiniteScrollLoading: !0 },
                          this.LoadMorePublicEventWithDelay
                        )
                      : this.setState(
                          { bInfiniteScrollLoading: !0 },
                          this.LoadMoreModerationEvents
                        ))));
            }),
            (e.prototype.RefetchAllEventTiles = function () {
              (this.m_nPage = 0),
                G.Get().ClearAllSolrEvents(),
                k.Get().ClearAllSolrEvents(),
                this.setState(
                  Object(E.a)({}, re),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function () {
              var e = this.RenderTiles(),
                t = C.Get();
              return p.a.createElement(
                "div",
                { className: Z.ModerationContainer, ref: this.m_refScroll },
                p.a.createElement(
                  "div",
                  null,
                  p.a.createElement(
                    "h2",
                    null,
                    Object(H.f)("#EventModeration_Title")
                  ),
                  p.a.createElement(
                    R.a,
                    null,
                    p.a.createElement(
                      "div",
                      { className: Object(K.a)(W.a.FlexRowContainer) },
                      p.a.createElement(le, {
                        fnRequireRefetchEvents: this.RefetchAllEventTiles,
                      }),
                      Boolean(t.bUseCustomQuery) &&
                        p.a.createElement(se, {
                          fnRequireRefetchEvents: this.RefetchAllEventTiles,
                        })
                    )
                  )
                ),
                p.a.createElement(R.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  p.a.createElement(F.a, {
                    position: "center",
                    size: "medium",
                    string: Object(H.f)("#Loading"),
                  })
              );
            }),
            Object(E.c)([X.a], e.prototype, "HandleError", null),
            Object(E.c)(
              [X.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(E.c)([X.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(E.c)(
              [X.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(E.c)([X.a], e.prototype, "OnScroll", null),
            Object(E.c)([X.a], e.prototype, "RefetchAllEventTiles", null),
            (e = Object(E.c)([i.a], e))
          );
        })(p.a.Component),
        ie = Object(c.i)(oe),
        le = Object(i.a)(function (e) {
          var n = C.Get(),
            t = e.fnRequireRefetchEvents;
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(
              "div",
              { className: Z.FilterContainer },
              p.a.createElement(
                ee.a,
                {
                  toolTipContent: Object(H.f)(
                    "#EventModeration_ShowCustomFilter_ttip"
                  ),
                },
                p.a.createElement($.e, {
                  label: Object(H.f)("#EventModeration_ShowCustomFilter"),
                  checked: n.bUseCustomQuery,
                  onChange: function (e) {
                    (n.bUseCustomQuery = e), t();
                  },
                })
              )
            ),
            p.a.createElement(
              "div",
              { className: Z.FilterContainer },
              p.a.createElement(
                "label",
                { htmlFor: "EventPerLoad" },
                Object(H.f)("#EventModeration_PerPageLoad")
              ),
              p.a.createElement(
                "div",
                null,
                p.a.createElement("input", {
                  type: "number",
                  id: "EventPerLoad",
                  min: "10",
                  max: "200",
                  value: n.eventsToLoadPerPaging,
                  onChange: function (e) {
                    var t = Number.parseInt(e.currentTarget.value);
                    t &&
                      0 < t &&
                      t != n.eventsToLoadPerPaging &&
                      (n.eventsToLoadPerPaging = t);
                  },
                })
              )
            )
          );
        }),
        se = Object(i.a)(function (e) {
          var n = C.Get(),
            a = e.fnRequireRefetchEvents,
            t = _.d.map(function (e) {
              return { value: e, label: Object(O.b)(e) };
            }),
            r = g.a.map(function (e) {
              return { value: e, label: e };
            }),
            o = {
              option: function (e) {
                return Object(E.a)(Object(E.a)({}, e), { color: "#444444" });
              },
            };
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(
              "div",
              { className: Z.FilterContainer },
              p.a.createElement(
                "span",
                null,
                Object(H.f)("#EventModeration_FilterByTag")
              ),
              p.a.createElement(h.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function (e) {
                  (n.selectedTags = e), a();
                },
                value: n.selectedTags,
                options: r,
                styles: o,
              })
            ),
            p.a.createElement(
              "div",
              { className: Z.FilterContainer },
              p.a.createElement(
                "span",
                null,
                Object(H.f)("#EventModeration_FilterExcludeByTag")
              ),
              p.a.createElement(h.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function (e) {
                  (n.excludedTags = e), a();
                },
                value: n.excludedTags,
                options: r,
                styles: o,
              })
            ),
            p.a.createElement(
              "div",
              { className: Z.FilterContainer },
              p.a.createElement(
                "span",
                null,
                Object(H.f)("#EventModeration_FilterToType")
              ),
              p.a.createElement(h.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function (e) {
                  (n.filterEventTypes = e), a();
                },
                value: n.filterEventTypes,
                options: t,
                styles: o,
              })
            ),
            p.a.createElement(
              "div",
              { className: Z.FilterContainer },
              p.a.createElement(
                "span",
                null,
                Object(H.f)("#EventModeration_FilterToDate")
              ),
              p.a.createElement(s, {
                timeFormat: !1,
                onChange: function (e) {
                  if ("string" == typeof e) {
                    var t = ae(e, "M/D/YYYY", !0);
                    if (!t.isValid()) return void (n.filterDateAsString = e);
                    e = t;
                  }
                  n.filterDate != e &&
                    ((n.filterDateAsString = void 0), (n.filterDate = e), a());
                },
                value: n.filterDate,
                isValidDate: function (e) {
                  var t = new Date();
                  return (
                    e.unix() <
                    ae
                      .unix(t.getTime() / 1e3 + 86400)
                      .hour(0)
                      .seconds(0)
                      .minute(0)
                      .unix()
                  );
                },
                inputProps: {
                  placeholder: Object(H.f)("#EventModeration_PickDatee"),
                  className: Z.TimeWidth,
                },
              })
            ),
            p.a.createElement(
              "div",
              { className: Z.FilterContainer },
              p.a.createElement("input", {
                type: "checkbox",
                id: "VisibilityStart",
                checked: n.bOrderByVisibilityStartTime,
                onChange: function (e) {
                  (n.bOrderByVisibilityStartTime = e.currentTarget.checked),
                    a();
                },
              }),
              p.a.createElement(
                "label",
                { htmlFor: "VisibilityStart" },
                Object(H.f)("#EventModeration_OrderByFirstVisible")
              )
            )
          );
        }),
        ce = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !L.c.BHasClanEventModel(
                  e.props.solrData.unique_id
                ),
                bShowAsModal: !1,
                bSavingModeration: !1,
              }),
              (e.m_cancelSignal = b.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(E.d)(e, t),
            (e.prototype.componentDidMount = function () {
              var e,
                n = this,
                t = this.props.solrData,
                a = t.unique_id;
              L.c.BHasClanEventModel(a) ||
                ((e = Date.now() / 1e3),
                L.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new f.a(t.clan_steamid),
                    a,
                    e
                  )
                  .then(function () {
                    return n.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function (e) {
                    var t = Object(j.a)(e);
                    console.error(
                      "EventModerationTile: Event Load: " + t.strErrorMsg,
                      t
                    ),
                      n.setState({ bLoadingEvent: !1 });
                  }));
            }),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "EventModerationTile component unmounted"
              );
            }),
            (e.prototype.ShowModalEvent = function () {
              var e = this.props.solrData.unique_id;
              !this.state.bLoadingEvent &&
                L.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function () {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function (e) {
              var t, n, a, r;
              this.state.bSavingModeration ||
                ((t = this.props.solrData.unique_id),
                (n = L.c.GetClanEventModel(t)),
                (a = e.target.checked),
                (r =
                  !n.BHasTag("mod_reviewed") ||
                  n.BHasTag("mod_require_rereview")),
                n &&
                  a === r &&
                  this.setState(
                    { bSavingModeration: !0 },
                    this.ApplyModerationToggle
                  ));
            }),
            (e.prototype.ApplyModerationToggle = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                var t, n, a, r, o, i, l, s, c, u;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (n = t.unique_id),
                        (a = L.c.GetClanEventModel(n)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (r = new Array()),
                        (o = new Array()),
                        (i =
                          a.BHasTag("mod_reviewed") &&
                          !a.BHasTag("mod_require_rereview")),
                        (l = new w().SetReviewAction(!i)),
                        i
                          ? r.push("mod_require_rereview")
                          : (r.push("mod_reviewed"),
                            o.push("mod_require_rereview"),
                            a.BHasTag("mod_require_rereview") &&
                              l.SetReReviewAction(!i)),
                        [
                          4,
                          G.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.AnnouncementGID,
                            r,
                            o,
                            l
                          ),
                        ]
                      );
                    case 2:
                      return (s = e.sent()), (a.vecTags = s), [3, 4];
                    case 3:
                      return (
                        (c = e.sent()),
                        (u = Object(j.a)(c)),
                        console.error(
                          "EventModerationTile " + u.strErrorMsg,
                          u
                        ),
                        [3, 4]
                      );
                    case 4:
                      return this.setState({ bSavingModeration: !1 }), [2];
                  }
                });
              });
            }),
            (e.prototype.OnChangeCategory = function (e) {
              var t = this.props.solrData,
                n = L.c.GetClanEventModel(t.unique_id);
              Object(Q.d)(
                p.a.createElement(me, { eventModel: n }),
                Object(J.m)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function (e) {
              var t = this.props.solrData,
                n = L.c.GetClanEventModel(t.unique_id);
              Object(Q.d)(
                p.a.createElement(ve, { eventModel: n }),
                Object(J.m)(e)
              );
            }),
            (e.prototype.render = function () {
              var e = this.props.solrData,
                t = e.unique_id,
                n = Number(e.appid),
                a = Object(_.f)(I.c.LANGUAGE),
                r = L.c.GetClanEventModel(t);
              if (r) {
                if (this.state.bShowAsModal)
                  return p.a.createElement(
                    V.h,
                    { className: Z.StoreHeaderAdjust },
                    p.a.createElement(
                      "div",
                      null,
                      p.a.createElement(B.b, {
                        event: r,
                        fnClose: this.HideModalEvent,
                      })
                    )
                  );
                var o = r.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    a,
                    S.c.capsule_main
                  ),
                  i = r.BImageNeedScreenshotFallback("capsule", a),
                  l =
                    0 < o.length
                      ? p.a.createElement(
                          p.a.Fragment,
                          null,
                          p.a.createElement(q.a, { rgSources: o }),
                          i &&
                            p.a.createElement(
                              "div",
                              { className: Z.NoCapsule },
                              Object(H.f)("#EventModTile_FallbackImageText")
                            )
                        )
                      : p.a.createElement(
                          "div",
                          { className: Z.NoCapsule },
                          Object(H.f)("#EventModTile_NoCapsule")
                        );
              } else l = Object(H.f)("#Loading");
              var s = e.hidden
                  ? e.published
                    ? Object(H.f)("#EVentModTile_State_Staged")
                    : Object(H.f)("#EVentModTile_State_Draft")
                  : Object(H.f)("#EVentModTile_State_Published"),
                c = r ? r.type : Number(e.event_type);
              return p.a.createElement(
                R.a,
                null,
                p.a.createElement(
                  "div",
                  { className: Z.Tile },
                  p.a.createElement(
                    "div",
                    { className: Z.TileCapsule, onClick: this.ShowModalEvent },
                    l
                  ),
                  p.a.createElement(
                    "div",
                    { className: Z.TileDetails },
                    p.a.createElement(
                      "div",
                      { className: Z.DetailsLeft },
                      p.a.createElement("div", null, s),
                      p.a.createElement(
                        "a",
                        {
                          href:
                            I.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            n +
                            "/announcements/detail/" +
                            e.announcement_gid,
                          target: I.c.IN_CLIENT ? void 0 : "_blank",
                          className: Z.EventTitle,
                        },
                        e.event_name
                      ),
                      p.a.createElement(
                        "div",
                        {
                          className: Object(K.a)(
                            1 == c ? Z.TileEventOtherType : ""
                          ),
                        },
                        r ? r.GetCategoryAsString() : e.event_type
                      ),
                      this.state.bLoadingEvent &&
                        p.a.createElement(F.a, {
                          size: "small",
                          string: Object(H.f)("#Loading"),
                        }),
                      p.a.createElement(U, {
                        accountID: Number(e.creator_accountid),
                        locToken: "#EventModTile_Author",
                      }),
                      Boolean(
                        e.updator_accountid &&
                          0 < Number(e.updator_accountid) &&
                          e.updator_accountid != e.creator_accountid
                      ) &&
                        p.a.createElement(U, {
                          accountID: Number(e.updator_accountid),
                          locToken: "#EventModTile_Updator",
                        }),
                      p.a.createElement(de, {
                        appid: n,
                        clanSteamID: new f.a(e.clan_steamid),
                      })
                    ),
                    r &&
                      p.a.createElement(
                        p.a.Fragment,
                        null,
                        p.a.createElement(
                          "div",
                          { className: Z.DetailsMiddle },
                          p.a.createElement(
                            "div",
                            { className: Z.ModeratedFlagCtn },
                            p.a.createElement("input", {
                              type: "checkbox",
                              id: r.GID + "_moderated",
                              checked: Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ),
                              onChange: this.OnModeratedChanged,
                            }),
                            p.a.createElement(
                              "label",
                              { htmlFor: r.GID + "_moderated" },
                              this.state.bSavingModeration &&
                                p.a.createElement(F.a, { size: "small" }),
                              Boolean(!r.BHasTag("mod_reviewed")) &&
                                Object(H.f)("#EventModTile_Moderated_Review"),
                              Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ) && Object(H.f)("#EventModTile_Moderated"),
                              Boolean(r.BHasTag("mod_require_rereview")) &&
                                Object(H.f)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          p.a.createElement(
                            "button",
                            {
                              className: Object(K.a)(W.a.Button, Z.Button),
                              onClick: this.OnChangeCategory,
                            },
                            Object(H.f)("#EventModTile_ChangeEventType")
                          ),
                          r.BHasTag("halloween2019candidate") &&
                            p.a.createElement(
                              "button",
                              {
                                className: Object(K.a)(W.a.Button),
                                onClick: this.OnUpdateSeasonalTag,
                              },
                              Object(H.f)("#EventModTile_SeasonalTag")
                            ),
                          p.a.createElement(D, { eventModel: r })
                        ),
                        p.a.createElement(
                          "div",
                          { className: Z.DetailsRight },
                          p.a.createElement(z.b, {
                            event: r,
                            stylesmodule: Z,
                            nOverrideEndTime: r.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: r.GetStartTimeAndDateUnixSeconds(),
                          }),
                          p.a.createElement(ue, { event: r }),
                          p.a.createElement(pe, { event: r })
                        )
                      )
                  )
                )
              );
            }),
            Object(E.c)([X.a], e.prototype, "ShowModalEvent", null),
            Object(E.c)([X.a], e.prototype, "HideModalEvent", null),
            Object(E.c)([X.a], e.prototype, "OnModeratedChanged", null),
            Object(E.c)([X.a], e.prototype, "ApplyModerationToggle", null),
            Object(E.c)([X.a], e.prototype, "OnChangeCategory", null),
            Object(E.c)([X.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(E.c)([i.a], e))
          );
        })(p.a.Component);
      var ue = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
              (e.m_cancelSignal = b.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(E.d)(e, t),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.CountLanguages = function (e) {
              var t = 0;
              if (e && 0 < e.length)
                for (var n = 0; n < e.length && n < 30; ++n)
                  e[n] && 0 < e[n].length && (t += 1);
              return t;
            }),
            (e.prototype.componentDidMount = function () {
              var n = this,
                e = this.props.event;
              L.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function (e) {
                  n.m_cancelSignal.token.reason ||
                    n.setState({ nLocLanguages: e.length });
                })
                .catch(function (e) {
                  var t = Object(j.a)(e);
                  console.error(
                    "EventInspection.LoadLoc : error " + t.strErrorMsg,
                    t
                  ),
                    n.m_cancelSignal.token.reason ||
                      n.setState({ nLocLanguages: -1 });
                });
            }),
            (e.prototype.render = function () {
              var e = this.props.event,
                t = this.CountLanguages(e.jsondata.localized_title_image),
                n = this.CountLanguages(e.jsondata.localized_capsule_image),
                a = this.CountLanguages(e.jsondata.localized_spotlight_image),
                r = Math.max(
                  this.CountLanguages(
                    e.jsondata.localized_broadcast_left_image
                  ),
                  this.CountLanguages(
                    e.jsondata.localized_broadcast_right_image
                  )
                ),
                o = t + n + a + r,
                i = this.CountLanguages(e.jsondata.localized_summary),
                l = this.CountLanguages(e.jsondata.localized_subtitle);
              return p.a.createElement(
                "div",
                { className: Z.AnalysisCtn },
                p.a.createElement(
                  "div",
                  { className: Z.TileTitle },
                  Object(H.f)("#EventModTile_Analysis")
                ),
                p.a.createElement(
                  "div",
                  null,
                  Object(H.f)("#EventModTile_Stats_Comments", e.nCommentCount)
                ),
                p.a.createElement(
                  "div",
                  null,
                  Object(H.f)("#EventModTile_Stats_VoteUp", e.nVotesUp)
                ),
                p.a.createElement(
                  "div",
                  null,
                  Object(H.f)("#EventModTile_Stats_VoteDown", e.nVotesDown)
                ),
                Boolean(t) &&
                  p.a.createElement(
                    "div",
                    { className: Z.ArtHeader },
                    Object(H.f)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(n) &&
                  p.a.createElement(
                    "div",
                    null,
                    Object(H.f)("#EventModTile_ImageAnalysis_Capsule", n),
                    " "
                  ),
                Boolean(a) &&
                  p.a.createElement(
                    "div",
                    { className: Z.ArtSpotlight },
                    Object(H.f)("#EventModTile_ImageAnalysis_Spotlight", a),
                    " "
                  ),
                Boolean(r) &&
                  p.a.createElement(
                    "div",
                    null,
                    Object(H.f)("#EventModTile_ImageAnalysis_Broadcast", r),
                    " "
                  ),
                0 == o &&
                  p.a.createElement(
                    "div",
                    { className: Z.AnalysisMissing },
                    Object(H.f)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  p.a.createElement(F.a, {
                    size: "small",
                    string: Object(H.f)("#EventModTile_LoadingLocs"),
                  }),
                0 < this.state.nLocLanguages &&
                  p.a.createElement(
                    "div",
                    null,
                    Object(H.f)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages
                    )
                  ),
                Boolean(i) &&
                  p.a.createElement(
                    "div",
                    null,
                    Object(H.f)("#EventModTile_Languages_Summary", i),
                    " "
                  ),
                Boolean(l) &&
                  p.a.createElement(
                    "div",
                    null,
                    Object(H.f)("#EventModTile_Languages_Subtitle", l),
                    " "
                  )
              );
            }),
            (e = Object(E.c)([i.a], e))
          );
        })(p.a.Component),
        de = Object(i.a)(function (e) {
          var t = Object(v.useState)(!ne.a.Get().BHasApp(e.appid)),
            n = t[0],
            o = t[1],
            i = p.a.useRef(b.a.CancelToken.source());
          if (
            (Object(v.useEffect)(function () {
              return function () {
                return i.current.cancel(
                  "EventModerationChannelInfo component unmounted"
                );
              };
            }, []),
            Object(v.useEffect)(
              function () {
                var a = e.appid,
                  r = e.clanSteamID;
                ((a && !ne.a.Get().BHasApp(a)) ||
                  (r && !y.a.BHasClanInfoLoaded(r))) &&
                  Object(E.b)(void 0, void 0, void 0, function () {
                    var t, n;
                    return Object(E.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return (
                            e.trys.push([0, 2, 3, 4]),
                            [
                              4,
                              Promise.all([
                                ne.a
                                  .Get()
                                  .QueueAppRequest(a, {
                                    include_assets: !0,
                                    include_release: !0,
                                  }),
                                r ? y.a.LoadClanInfoForClanSteamID(r) : void 0,
                              ]),
                            ]
                          );
                        case 1:
                          return e.sent(), [3, 4];
                        case 2:
                          return (
                            (t = e.sent()),
                            (n = Object(j.a)(t)),
                            console.error(
                              "EventModerationChannelInfo: App Load: " +
                                n.strErrorMsg,
                              n
                            ),
                            [3, 4]
                          );
                        case 3:
                          return i.current.token.reason || o(!1), [7];
                        case 4:
                          return [2];
                      }
                    });
                  });
              },
              [e]
            ),
            n)
          )
            return p.a.createElement(F.a, {
              size: "small",
              string: Object(H.f)("#EventModTile_AppInfoLoading"),
            });
          var a = e.appid,
            r = e.clanSteamID;
          if (a) {
            var l = ne.a.Get().GetApp(a);
            return l
              ? p.a.createElement(
                  "div",
                  { className: Z.TileAppInfo },
                  p.a.createElement(
                    "div",
                    { className: Z.TileAppInfoTitle },
                    p.a.createElement(
                      Y.a,
                      { href: Object(te.e)(l.GetStorePageURL()) },
                      p.a.createElement("img", {
                        className: Z.TileAppInfoImage,
                        src: l.assets.GetMainCapsuleURL(),
                      }),
                      p.a.createElement(
                        "div",
                        null,
                        Object(H.f)("#EventModTile_GameName", l.GetName())
                      )
                    )
                  ),
                  p.a.createElement(
                    "div",
                    null,
                    Object(H.f)(
                      "#EventModTile_ReleaseDate",
                      l.GetFormattedSteamReleaseDate()
                    )
                  )
                )
              : null;
          }
          if (r) {
            var s = r.GetAccountID(),
              c = y.a.GetClanInfoByClanAccountID(s);
            if (c && c.is_curator)
              return p.a.createElement(
                "div",
                { className: Z.TileAppInfo },
                p.a.createElement(
                  "div",
                  { className: Z.TileAppInfoTitle },
                  p.a.createElement(
                    Y.a,
                    {
                      href: Object(te.e)(
                        I.c.STORE_BASE_URL + "/curator/" + s + "/"
                      ),
                    },
                    p.a.createElement("img", {
                      className: Z.TileAppInfoImage,
                      src: c.avatar_full_url,
                    }),
                    p.a.createElement(
                      "div",
                      null,
                      Object(H.f)("#EventModTile_CuratorName", c.group_name)
                    )
                  )
                )
              );
          }
          return null;
        }),
        pe = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(E.d)(e, t),
            (e.prototype.render = function () {
              var e = this.props.event,
                t = Object(g.d)(e),
                n = Object(g.c)(e),
                a = Object(g.e)(e),
                r =
                  a && !e.BHasTag("hide_store") && !e.BHasTag("mod_hide_store"),
                o =
                  t &&
                  !e.BHasTag("hide_library_overview") &&
                  !e.BHasTag("mod_hide_library_overview"),
                i =
                  n &&
                  !e.BHasTag("hide_library_detail") &&
                  !e.BHasTag("mod_hide_library_detail");
              return p.a.createElement(
                "div",
                { className: Z.VisibiltyCtn },
                p.a.createElement(
                  "div",
                  { className: Z.TileTitle },
                  Object(H.f)("#EventModTile_Visibility")
                ),
                p.a.createElement(
                  "div",
                  null,
                  Object(H.f)(
                    "#EventModTile_Store_Visibility",
                    r
                      ? Object(H.f)("#WriteReview_Dialog_Yes")
                      : Object(H.f)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : a
                      ? Object(H.f)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_store")
                      ? Object(H.f)("#EventModTime_Hidden_OptOut")
                      : Object(H.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                p.a.createElement(
                  "div",
                  null,
                  Object(H.f)(
                    "#EventModTile_LibraryHome_Visibility",
                    o
                      ? Object(H.f)("#WriteReview_Dialog_Yes")
                      : Object(H.f)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : a
                      ? Object(H.f)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_overview")
                      ? Object(H.f)("#EventModTime_Hidden_OptOut")
                      : Object(H.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                p.a.createElement(
                  "div",
                  null,
                  Object(H.f)(
                    "#EventModTile_LibraryDetail_Visibility",
                    i
                      ? Object(H.f)("#WriteReview_Dialog_Yes")
                      : Object(H.f)("#WriteReview_Dialog_No"),
                    i
                      ? ""
                      : a
                      ? Object(H.f)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_detail")
                      ? Object(H.f)("#EventModTime_Hidden_OptOut")
                      : Object(H.f)("#EventModTime_Hidden_Moderator")
                  )
                )
              );
            }),
            (e = Object(E.c)([i.a], e))
          );
        })(p.a.Component),
        me = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(O.b)(34),
                  value: { eventType: 34 },
                },
              }),
              (e.m_cancelSignal = b.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(E.d)(e, t),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.ChangeCategoryForEvent = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                var t, n, a, r, o, i, l, s, c, u;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props),
                        (n = t.eventModel),
                        (a = t.closeModal),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 4, , 5]),
                        (r = this.state.newCategoryOption),
                        (o = r.value.eventType),
                        [
                          4,
                          G.Get().UpdatePartnerEventType(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.GID,
                            o
                          ),
                        ]
                      );
                    case 2:
                      return (
                        e.sent(),
                        (i = g.p),
                        (l = []),
                        r.value.tags &&
                          r.value.tags.forEach(function (e) {
                            l.push(e);
                            var t = new w()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            l.push(t);
                          }),
                        [
                          4,
                          G.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.GetAnnouncementGID(),
                            l,
                            i,
                            new w().SetActionChangeEvent(o)
                          ),
                        ]
                      );
                    case 3:
                      return (
                        (s = e.sent()),
                        Object(m.G)(function () {
                          (n.type = o), (n.vecTags = s);
                        }),
                        this.setState({ bUpdating: !1 }, a),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (c = e.sent()),
                        (u = Object(j.a)(c)),
                        console.error(
                          "ChangeEventTypeDialog error " + u.strErrorMsg,
                          u
                        ),
                        this.setState({
                          bUpdating: !1,
                          strErrorMsg: u.strErrorMsg,
                        }),
                        [3, 5]
                      );
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnChangeSelection = function (e) {
              this.setState({ newCategoryOption: e });
            }),
            (e.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.eventModel,
                a = t.closeModal,
                r = _.d
                  .filter(function (e) {
                    return 1 == e || 4 == e || 9 <= e;
                  })
                  .map(function (e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(O.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(H.f)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"],
                  },
                }),
                r.push({
                  label: Object(H.f)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] },
                }),
                r.unshift({
                  value: { eventType: 15, tags: ["halloween"] },
                  label: Object(H.f)("#EventEditor_Category_DLC_Halloween"),
                }),
                r.unshift({
                  value: { eventType: 22, tags: ["halloween"] },
                  label: Object(H.f)("#PartnerEvent_22"),
                }),
                r.unshift({
                  value: { eventType: 23, tags: ["halloween"] },
                  label: Object(H.f)("#PartnerEvent_23"),
                }),
                r.unshift({
                  value: { eventType: 24, tags: ["halloween"] },
                  label: Object(H.f)("#PartnerEvent_24"),
                }),
                r.unshift({
                  value: { eventType: 35, tags: ["halloween"] },
                  label: Object(H.f)("#PartnerEvent_35"),
                }),
                p.a.createElement(
                  V.c,
                  {
                    strTitle: Object(H.f)("#EventModTile_ChangeEventType"),
                    strDescription: Object(H.f)(
                      "#EventModTile_ChangeEventType_Desc",
                      n.GetEventTypeAsString()
                    ),
                    onCancel: a,
                    onOK: function () {
                      return e.setState(
                        { bUpdating: !0 },
                        e.ChangeCategoryForEvent
                      );
                    },
                  },
                  p.a.createElement(
                    p.a.Fragment,
                    null,
                    p.a.createElement(
                      "div",
                      { className: Z.CategoryChangeDialog },
                      p.a.createElement("br", null),
                      this.state.bUpdating &&
                        p.a.createElement(F.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        p.a.createElement(
                          "div",
                          null,
                          Object(H.f)("#Chat_Settings_Error_ServerError"),
                          p.a.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      p.a.createElement(h.a, {
                        isSearchable: !0,
                        onChange: this.OnChangeSelection,
                        value: this.state.newCategoryOption,
                        options: r,
                      })
                    )
                  )
                )
              );
            }),
            Object(E.c)([X.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(E.c)([X.a], e.prototype, "OnChangeSelection", null),
            (e = Object(E.c)([i.a], e))
          );
        })(p.a.Component),
        ve = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                bAccept: e.props.eventModel.BHasTag("halloween2019"),
                bHorror: e.props.eventModel.BHasTag("horror"),
                bCute: e.props.eventModel.BHasTag("cute"),
              }),
              (e.m_cancelSignal = b.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(E.d)(e, t),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "UpdateSeasonalTagDialog component unmounted"
              );
            }),
            (e.prototype.ChangeAcceptance = function () {
              this.setState({ bAccept: !this.state.bAccept });
            }),
            (e.prototype.ChangeHorror = function () {
              this.setState({ bHorror: !this.state.bHorror });
            }),
            (e.prototype.ChangeCute = function () {
              this.setState({ bCute: !this.state.bCute });
            }),
            (e.prototype.ApplyAction = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                var t, n, a, r, o, i;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = new Array()),
                        (n = new Array()),
                        this.state.bAccept
                          ? (t.push("halloween2019"),
                            n.push("halloween2019reviewed"))
                          : (n.push("halloween2019"),
                            t.push("halloween2019reviewed")),
                        this.state.bCute ? t.push("cute") : n.push("cute"),
                        this.state.bHorror
                          ? t.push("horror")
                          : n.push("horror"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (a = this.props.eventModel),
                        [
                          4,
                          G.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.AnnouncementGID,
                            t,
                            n,
                            new w().SetUpdateSeasonalTags(
                              this.state.bAccept
                                ? "halloween2019"
                                : "halloween2019reviewed"
                            )
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        (a.vecTags = r),
                        this.props.closeModal(),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = e.sent()),
                        (i = Object(j.a)(o)),
                        console.error(
                          "EventModerationTile " + i.strErrorMsg,
                          i
                        ),
                        this.setState({ strErrorMsg: i.strErrorMsg }),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function () {
              var e = this,
                t = this.props,
                n = (t.eventModel, t.closeModal);
              return p.a.createElement(
                V.c,
                {
                  strTitle: Object(H.f)("#EventModTile_SeasonalTag"),
                  onCancel: n,
                  onOK: function () {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  },
                },
                p.a.createElement(
                  p.a.Fragment,
                  null,
                  p.a.createElement(
                    "div",
                    { className: Z.CategoryChangeDialog },
                    p.a.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance,
                    }),
                    p.a.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(H.f)("#EventModTile_SeasonalTag_Desc")
                    ),
                    p.a.createElement(
                      "div",
                      null,
                      Object(H.f)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    p.a.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror,
                    }),
                    p.a.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    p.a.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute,
                    }),
                    p.a.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      p.a.createElement(F.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      p.a.createElement(
                        "div",
                        null,
                        Object(H.f)("#Chat_Settings_Error_ServerError"),
                        p.a.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(E.c)([X.a], e.prototype, "ChangeAcceptance", null),
            Object(E.c)([X.a], e.prototype, "ChangeHorror", null),
            Object(E.c)([X.a], e.prototype, "ChangeCute", null),
            Object(E.c)([X.a], e.prototype, "ApplyAction", null),
            e
          );
        })(p.a.Component),
        he = n("5eAM"),
        Ee = n("ir+G"),
        be = n("gOcu"),
        _e = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoadingEvent: !0 }),
              (e.m_cancelSignal = b.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(E.d)(e, t),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "SteamGameFestivalStoreDebug to unload "
              );
            }),
            (e.prototype.componentDidMount = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                var t, n, a, r, o, i, l, s, c;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = this.props),
                      (n = t.clanEventGID),
                      (a = t.clanAccountID),
                      console.log(n, a, typeof n, typeof a),
                      !n || L.c.BHasClanEventModel(n))
                        ? [3, 8]
                        : ((r = f.a.InitFromClanID(Number.parseInt(a))),
                          [
                            4,
                            L.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              r,
                              n,
                              0
                            ),
                          ]);
                    case 1:
                      return ((o = e.sent()),
                      (i = new Array()),
                      (l = new Array()),
                      o.BHasSaleEnabled())
                        ? (this.setState({
                            event: o,
                            bLoadingEvent: !1,
                            bLoadingApps: !0,
                            bLoadingDemos: !0,
                            bLoadingAssociatedDemoInfo: !0,
                          }),
                          (s = new Map()),
                          o.jsondata.sale_sections.forEach(function (e) {
                            "tabs" == e.section_type &&
                              e.tabs.forEach(function (e) {
                                e.capsules.forEach(function (e) {
                                  "game" == e.type ||
                                  "application" == e.type ||
                                  "software" == e.type
                                    ? s.has(e.id) ||
                                      (s.set(e.id, !0), i.push(e.id))
                                    : s.has(e.id) ||
                                      (s.set(e.id, !0), l.push(e.id));
                                });
                              });
                          }),
                          [4, he.a.LoadAppLinkInfo(i)])
                        : [3, 6];
                    case 2:
                      return (
                        e.sent(),
                        this.setState({
                          rgAppIDs: i,
                          rgUnknownTypeAppIDs: l,
                          bLoadingApps: !1,
                        }),
                        [4, Ee.a.BatchLoadAppCapsules(i)]
                      );
                    case 3:
                      return (
                        e.sent(),
                        this.setState({ bLoadingAssociatedDemoInfo: !1 }),
                        [4, be.a.Get().LoadAppIDsBatch(i, this.m_cancelSignal)]
                      );
                    case 4:
                      return (
                        e.sent(),
                        (c = new Array()),
                        be.a
                          .Get()
                          .GetAllDemoInfo()
                          .forEach(function (e) {
                            return c.push(e.demo_appid);
                          }),
                        [4, he.a.LoadAppLinkInfo(c)]
                      );
                    case 5:
                      return (
                        e.sent(),
                        this.setState({ bLoadingDemos: !1, rgDemoIDs: c }),
                        [3, 7]
                      );
                    case 6:
                      this.setState({ bLoadingEvent: !1, rgAppIDs: i }),
                        (e.label = 7);
                    case 7:
                      return [3, 9];
                    case 8:
                      this.setState({ bLoadingEvent: !1 }), (e.label = 9);
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function () {
              if (
                this.state.bLoadingEvent ||
                this.state.bLoadingDemos ||
                this.state.bLoadingApps ||
                this.state.bLoadingAssociatedDemoInfo
              )
                return v.createElement(F.a, {
                  string:
                    Object(H.f)("#Loading") +
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
                return v.createElement("div", null, " Failed to load event");
              var e = this.state.event;
              if (!e.jsondata.bSaleEnabled)
                return v.createElement("div", null, "Not a sale evnet");
              var a = new Map();
              this.state.rgDemoIDs.forEach(function (e) {
                return a.set(e, !0);
              });
              var n = new Array(),
                r = new Array();
              he.a.GetMissingAppIDs().forEach(function (e, t) {
                n.push(
                  v.createElement(
                    "div",
                    { key: "missing: " + t },
                    v.createElement(
                      "a",
                      {
                        href: I.c.STORE_BASE_URL + "app/" + t + "/?beta=1",
                        target: "_blank",
                      },
                      t
                    )
                  )
                ),
                  r.push(t);
              });
              var o = new Array();
              he.a.GetAllLoadedAppLinks().forEach(function (e, t) {
                var n;
                a.has(t) ||
                  be.a.Get().BHasDemoAppID(t) ||
                  ((n = he.a.GetAppLinkInfo(t)),
                  o.push(
                    v.createElement(
                      "div",
                      { key: "missingdemo_" + t },
                      "demo" == n.type &&
                        v.createElement(
                          "b",
                          null,
                          "--Error: Sale Page has Demo AppID, based game -- "
                        ),
                      n.name,
                      " (",
                      t,
                      ")",
                      v.createElement(
                        "a",
                        {
                          href: Object(te.e)(
                            I.c.STORE_BASE_URL + "app/" + t + "/?beta=0"
                          ),
                          target: "_blank",
                        },
                        "Store Page"
                      ),
                      " ",
                      v.createElement(
                        "a",
                        {
                          href: I.c.PARTNER_BASE_URL + "apps/landing/" + t,
                          target: "_blank",
                        },
                        "App Landing Page"
                      )
                    )
                  ));
              });
              var i = 0,
                l = 0,
                s = new Array(),
                c = 0,
                u = 0,
                d = 0,
                p = 0;
              Ee.a.GetAllAppInfos().forEach(function (e, t) {
                var n,
                  a = !1;
                e.BIsLoaded() &&
                  be.a.Get().BHasDemoAppID(t) &&
                  ((n = be.a.Get().GetDemoEventInfo(t)),
                  he.a.GetAppLinkInfo(n.demo_appid).coming_soon
                    ? ((c += 1), (a = !0))
                    : (u += 1)),
                  e.BIsLoaded() && e.GetAppStoreData().BHasDemoAppID()
                    ? ((i += 1), a && (d += 1))
                    : e.BIsLoaded() && be.a.Get().BHasDemoAppID(t)
                    ? ((l += 1), a || (p += 1))
                    : -1 ==
                        r.findIndex(function (e) {
                          return e == t;
                        }) && s.push(e.GetAppStoreData());
              });
              var t = new Array();
              s.forEach(function (e) {
                t.push(
                  v.createElement(
                    "div",
                    { key: "missing_capps" + e.appid },
                    v.createElement(
                      "a",
                      {
                        href:
                          I.c.STORE_BASE_URL + "app/" + e.appid + "/?beta=1",
                        target: "_blank",
                      },
                      e.name,
                      " (",
                      e.appid,
                      ")"
                    )
                  )
                );
              });
              var m = 0;
              return (
                he.a.GetAllLoadedAppLinks().forEach(function (e) {
                  "demo" != e.type && (m += 1);
                }),
                v.createElement(
                  R.a,
                  null,
                  v.createElement(
                    "h1",
                    null,
                    e.GetNameWithFallback(Object(_.f)(I.c.LANGUAGE))
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement("b", null, "Unique AppIDs:"),
                    " ",
                    this.state.rgAppIDs.length,
                    " "
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement(
                      "b",
                      null,
                      "Visible Apps in ",
                      I.c.COUNTRY,
                      ":"
                    ),
                    " ",
                    m
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement("b", null, "Unknown AppID types:"),
                    " ",
                    this.state.rgUnknownTypeAppIDs.length
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement("b", null, "Missing AppIDs:"),
                    " ",
                    he.a.GetNumMissingAppLinks(),
                    " "
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement("b", null, "Demo via DemoStore:"),
                    " ",
                    be.a.Get().GetNumDemos()
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement(
                      "b",
                      null,
                      "Visible apps missing demo store:"
                    ),
                    " ",
                    o.length
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement("b", null, "CApplications Loaded:"),
                    " ",
                    Ee.a.GetNumAppLinkLoaded(),
                    " "
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement(
                      "b",
                      null,
                      "CApplication with Associated Demos:"
                    ),
                    " ",
                    i
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement(
                      "b",
                      null,
                      "  Associated with store page but not released: "
                    ),
                    " ",
                    d
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement(
                      "b",
                      null,
                      "CApplication with demo without association:"
                    ),
                    " ",
                    l
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement(
                      "b",
                      null,
                      "  Released but not associated with store page: "
                    ),
                    " ",
                    p
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement("b", null, "CApplication missing:"),
                    " ",
                    Ee.a.GetMissingAppIDs().size
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement(
                      "b",
                      null,
                      "CApplication without demo store and demo associations:"
                    ),
                    " ",
                    s.length
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement("b", null, "Released Demo: "),
                    u
                  ),
                  v.createElement(
                    "div",
                    null,
                    v.createElement("b", null, "Unreleased Demo: "),
                    c
                  ),
                  v.createElement("hr", null),
                  v.createElement("h2", null, "Missing Appids:"),
                  n,
                  v.createElement(
                    "h2",
                    null,
                    "Missing BOTH demo list and associated demo on product page:"
                  ),
                  t,
                  v.createElement(
                    "h2",
                    null,
                    "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
                  ),
                  o
                )
              );
            }),
            (e = Object(E.c)([i.a], e))
          );
        })(v.Component),
        ge = new ((function () {
          function e() {
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
          return (
            (e.prototype.GetBackfill = function () {
              return this.m_backfill;
            }),
            (e.prototype.SetBackfill = function (e) {
              this.m_backfill = e;
            }),
            (e.prototype.StartBackfill = function (e) {
              (this.m_backfill = e), (this.m_bBackfillInProgress = !0);
            }),
            (e.prototype.CompleteBackfill = function (e) {
              (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
            }),
            (e.prototype.BIsBackkFillInProgress = function () {
              return this.m_bBackfillInProgress;
            }),
            (e.prototype.GetEventBackfillProgress = function () {
              return this.m_mapEventGIDProcessed;
            }),
            (e.prototype.CreateOrGetBackfillProgess = function (e) {
              return (
                this.m_mapEventGIDProcessed.has(e) ||
                  (this.m_mapEventGIDProcessed.set(e, { bProcessing: !1 }),
                  this.m_vecEventGID.push(e)),
                this.m_mapEventGIDProcessed.get(e)
              );
            }),
            (e.prototype.BHasProgress = function (e) {
              return this.m_mapEventGIDProcessed.has(e);
            }),
            (e.prototype.GetBackfillGIDs = function () {
              return this.m_vecEventGID;
            }),
            (e.prototype.CloseProgress = function (e, t) {
              (this.m_nProcessed += 1),
                t.bAlreadyProcessed || t.bSkipped
                  ? (this.m_nSkipped += 1)
                  : t.bSucceeded
                  ? (this.m_nSuccesses += 1)
                  : t.bFailed && (this.m_nFailures += 1),
                t.bWarning && (this.m_nWarning += 1),
                this.m_mapEventGIDProcessed.set(e, t);
            }),
            Object(E.c)([m.C], e.prototype, "m_backfill", void 0),
            Object(E.c)([m.C], e.prototype, "m_mapEventGIDProcessed", void 0),
            Object(E.c)([m.C], e.prototype, "m_bBackfillInProgress", void 0),
            Object(E.c)([m.C], e.prototype, "m_nProcessed", void 0),
            Object(E.c)([m.C], e.prototype, "m_nSuccesses", void 0),
            Object(E.c)([m.C], e.prototype, "m_nFailures", void 0),
            Object(E.c)([m.C], e.prototype, "m_nWarning", void 0),
            Object(E.c)([m.C], e.prototype, "m_nSkipped", void 0),
            Object(E.c)([m.k], e.prototype, "StartBackfill", null),
            Object(E.c)([m.k], e.prototype, "CompleteBackfill", null),
            Object(E.c)([m.k], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        fe = n("vNkc"),
        Se = n("mB/g"),
        ye = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = b.a.CancelToken.source()),
              (e.m_nImageID = 0),
              (e.m_mapArtworkResizeSuccess = new Map()),
              (e.state = { eBackfillState: void 0 }),
              e
            );
          }
          return (
            Object(E.d)(e, t),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "EventBackfillLanding component unmounted"
              );
            }),
            (e.prototype.OnArtworkResizeBackfill = function () {
              null == this.state.eBackfillState &&
                this.setState(
                  { eBackfillState: "started" },
                  this.BeginArtworkResize
                );
            }),
            (e.prototype.BeginArtworkResize = function () {
              var n = this;
              this.m_mapArtworkResizeSuccess.set("capsule", 0),
                this.m_mapArtworkResizeSuccess.set("spotlight", 0),
                this.m_mapArtworkResizeSuccess.set("background", 0),
                this.RunArtworkResizeBackfill()
                  .then(function () {
                    return n.setState({ eBackfillState: "success" });
                  })
                  .catch(function (e) {
                    var t = Object(j.a)(e);
                    console.error(
                      "EventBackfillLanding: error " + t.strErrorMsg,
                      t
                    ),
                      n.setState({ eBackfillState: "error" });
                  });
            }),
            (e.prototype.GetImageInfo = function (a, r, o) {
              return (
                void 0 === o && (o = ""),
                Object(E.b)(this, void 0, void 0, function () {
                  var t, n;
                  return Object(E.e)(this, function (e) {
                    return (
                      (t = S.a.GetExtensionTypeFromURL(r)),
                      (n = S.a.GetHashFromHashAndExt(r) + o),
                      [
                        2,
                        S.e.AsyncGetImageResolution(
                          a,
                          n,
                          t,
                          this.m_cancelSignal,
                          !0
                        ),
                      ]
                    );
                  });
                })
              );
            }),
            (e.prototype.HandleErrorFatal = function (e, t, n, a) {
              var r = Object(j.a)(t),
                o =
                  "EventBackfillLanding: " +
                  n +
                  " on GID " +
                  e +
                  " : " +
                  r.strErrorMsg;
              console.error(o, r),
                a
                  ? ((a.bFailed = !0),
                    (a.strMessage = o),
                    ge.CloseProgress(e, a))
                  : ge.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function (d, p, m, v, h) {
              return Object(E.b)(this, void 0, void 0, function () {
                var t,
                  c,
                  n,
                  u = this;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = function (t) {
                        var n, a, r, o, i, l, s;
                        return Object(E.e)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return d[t] && 0 < d[t].length
                                ? ((n = d[t]),
                                  (a = S.a.GetExtensionTypeFromURL(n)),
                                  (r = new f.a(p.clan_steamid)),
                                  a
                                    ? [
                                        4,
                                        c
                                          .GetImageInfo(r, n)
                                          .catch(function (e) {
                                            return (
                                              u.HandleErrorFatal(
                                                null,
                                                e,
                                                "GetImageInfo Original",
                                                m
                                              ),
                                              {
                                                height: 0,
                                                width: 0,
                                                success: 2,
                                              }
                                            );
                                          }),
                                      ]
                                    : [3, 8])
                                : [3, 9];
                            case 1:
                              return 1 == (o = e.sent()).success &&
                                Object(g.j)(o.width, o.height, v)
                                ? [
                                    4,
                                    c.GetImageInfo(r, n, h).catch(function (e) {
                                      return (
                                        u.HandleErrorFatal(
                                          null,
                                          e,
                                          "GetImageInfo Resize",
                                          m
                                        ),
                                        { height: 0, width: 0, success: 2 }
                                      );
                                    }),
                                  ]
                                : [3, 6];
                            case 2:
                              return 1 != e.sent().success
                                ? [3, 3]
                                : ((m.bAlreadyProcessed = !0), [3, 5]);
                            case 3:
                              return (
                                (m.bProcessing = !0),
                                (i = S.a.GetHashFromHashAndExt(n)),
                                (l = S.a.GetExtensionStringFromHashAndExt(n)),
                                (s = S.d.GetResizeDimension(v)),
                                [
                                  4,
                                  S.b
                                    .SendResizeRequest(
                                      c.m_cancelSignal,
                                      r,
                                      i,
                                      l,
                                      s
                                    )
                                    .then(function (e) {
                                      console.log(
                                        "success on the resize request"
                                      ),
                                        e == s.length
                                          ? ((m.bSucceeded = !0),
                                            u.m_mapArtworkResizeSuccess.set(
                                              v,
                                              u.m_mapArtworkResizeSuccess.get(
                                                v
                                              ) + 1
                                            ))
                                          : ((m.bFailed = !0),
                                            (m.strMessage =
                                              "Did not resize all: " +
                                              v +
                                              " " +
                                              e +
                                              " / " +
                                              s.length));
                                    })
                                    .catch(function (e) {
                                      m.bFailed = !0;
                                      var t = Object(j.a)(e);
                                      (m.strMessage = t.strErrorMsg),
                                        console.error(
                                          "Resize: " + t.strErrorMsg,
                                          t
                                        );
                                    }),
                                ]
                              );
                            case 4:
                              e.sent(), (e.label = 5);
                            case 5:
                              return [3, 7];
                            case 6:
                              (m.bSkipped = !0), (e.label = 7);
                            case 7:
                              return [3, 9];
                            case 8:
                              (m.bSkipped = !0), (e.label = 9);
                            case 9:
                              return [2];
                          }
                        });
                      }),
                        (c = this),
                        (n = 0),
                        (e.label = 1);
                    case 1:
                      return n < d.length && n < 30 ? [5, t(n)] : [3, 4];
                    case 2:
                      e.sent(), (e.label = 3);
                    case 3:
                      return ++n, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RunArtworkResizeBackfill = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                var t,
                  i,
                  n,
                  l,
                  a,
                  s = this;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      ge.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return ge.BIsBackkFillInProgress()
                        ? [
                            4,
                            k
                              .Get()
                              .LoadPartnerEventForQueryIncremental(
                                this.m_cancelSignal,
                                t,
                                25
                              )
                              .catch(function (e) {
                                return s.HandleErrorFatal(
                                  null,
                                  e,
                                  "LoadPartnerEventForQueryIncremental"
                                );
                              }),
                          ]
                        : [3, 7];
                    case 2:
                      if (!(i = e.sent()) || 0 == i.length)
                        return (
                          ge.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (t += i.length),
                        (n = function (t) {
                          var n, a, r, o;
                          return Object(E.e)(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  (n = i[t]),
                                  (a = ge.CreateOrGetBackfillProgess(
                                    n.unique_id
                                  )),
                                  n.announcement_gid &&
                                  0 != n.announcement_gid.length
                                    ? [
                                        4,
                                        L.c
                                          .LoadPartnerEventFromAnnoucementGID(
                                            Number(n.appid),
                                            n.announcement_gid,
                                            100
                                          )
                                          .catch(function (e) {
                                            s.HandleErrorFatal(
                                              n.announcement_gid,
                                              e,
                                              "LoadPartnerEventFromAnnoucementGID",
                                              a
                                            );
                                          }),
                                      ]
                                    : ((a.bSkipped = !0),
                                      (a.bWarning = !0),
                                      ge.CloseProgress(n.unique_id, a),
                                      [2, "continue"])
                                );
                              case 1:
                                return (e.sent(), a.bFailed)
                                  ? [2, "continue"]
                                  : (r = L.c.GetClanEventFromAnnouncementGID(
                                      n.announcement_gid
                                    ))
                                  ? a.bSucceeded ||
                                    a.bFailed ||
                                    a.bAlreadyProcessed
                                    ? ((a.bAlreadyProcessed = !0),
                                      ge.CloseProgress(n.unique_id, a),
                                      [2, "continue"])
                                    : ((a.bAnalysing = !0),
                                      l.setState({
                                        strInfo:
                                          "Processing " +
                                          ge.GetBackfillGIDs().length +
                                          " Appid: " +
                                          r.appid +
                                          " Event " +
                                          r.GID +
                                          " Title: " +
                                          r.GetNameWithFallback(0),
                                      }),
                                      r.jsondata &&
                                      r.jsondata.localized_capsule_image
                                        ? ((o =
                                            r.jsondata.localized_capsule_image),
                                          [
                                            4,
                                            l
                                              .HandleResizeForImageType(
                                                o,
                                                n,
                                                a,
                                                "capsule",
                                                S.c.capsule_main
                                              )
                                              .catch(function (e) {
                                                return s.HandleErrorFatal(
                                                  null,
                                                  e,
                                                  "HandleResizeForImageType capsule",
                                                  a
                                                );
                                              }),
                                          ])
                                        : [3, 3])
                                  : ((a.bFailed = !0),
                                    (a.strMessage =
                                      "Failed to load the event: " +
                                      n.unique_id),
                                    ge.CloseProgress(n.unique_id, a),
                                    [2, "continue"]);
                              case 2:
                                e.sent(), (e.label = 3);
                              case 3:
                                return r.jsondata &&
                                  r.jsondata.localized_title_image
                                  ? ((o = r.jsondata.localized_title_image),
                                    [
                                      4,
                                      l
                                        .HandleResizeForImageType(
                                          o,
                                          n,
                                          a,
                                          "background",
                                          S.c.background_mini
                                        )
                                        .catch(function (e) {
                                          return s.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType background",
                                            a
                                          );
                                        }),
                                    ])
                                  : [3, 5];
                              case 4:
                                e.sent(), (e.label = 5);
                              case 5:
                                return r.jsondata &&
                                  r.jsondata.localized_spotlight_image
                                  ? ((o = r.jsondata.localized_spotlight_image),
                                    [
                                      4,
                                      l
                                        .HandleResizeForImageType(
                                          o,
                                          n,
                                          a,
                                          "spotlight",
                                          S.c.spotlight_main
                                        )
                                        .catch(function (e) {
                                          return s.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType spotlight",
                                            a
                                          );
                                        }),
                                    ])
                                  : [3, 7];
                              case 6:
                                e.sent(), (e.label = 7);
                              case 7:
                                return (
                                  ge.CloseProgress(n.unique_id, a),
                                  ge.BIsBackkFillInProgress()
                                    ? [2]
                                    : [2, "break"]
                                );
                            }
                          });
                        }),
                        (l = this),
                        (a = 0),
                        (e.label = 3);
                    case 3:
                      return a < i.length ? [5, n(a)] : [3, 6];
                    case 4:
                      if ("break" === e.sent()) return [3, 6];
                      e.label = 5;
                    case 5:
                      return ++a, [3, 3];
                    case 6:
                      return 5e3 < ge.m_nFailures
                        ? (console.log(
                            "Hit too many errors, stoppinng the backfill"
                          ),
                          [3, 7])
                        : [3, 1];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RenderFailure = function () {
              var a = new Array();
              return (
                0 < ge.m_nFailures &&
                  ge.GetBackfillGIDs().forEach(function (e) {
                    var t,
                      n = ge.GetEventBackfillProgress().get(e);
                    n &&
                      n.bFailed &&
                      (t = L.c.GetClanEventModel(e)) &&
                      a.push(
                        v.createElement(
                          "div",
                          { key: e },
                          v.createElement(
                            Se.c,
                            {
                              eventModel: t,
                              route: Se.a.k_eView,
                              openNewWindow: !0,
                            },
                            t.GetNameWithFallback(0)
                          ),
                          v.createElement(
                            "div",
                            { className: fe.Error },
                            n.strMessage
                          )
                        )
                      );
                  }),
                a
              );
            }),
            (e.prototype.RenderResizeProgress = function () {
              var e = new Array();
              return (
                e.push(
                  v.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  v.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  v.createElement(
                    "div",
                    { key: "res_spotlightr" },
                    "Spotlight Resized: ",
                    this.m_mapArtworkResizeSuccess.get("spotlight"),
                    " "
                  )
                ),
                e
              );
            }),
            (e.prototype.render = function () {
              var e = this.RenderFailure(),
                t = this.m_mapArtworkResizeSuccess.has("capsule")
                  ? this.RenderResizeProgress()
                  : void 0;
              return v.createElement(
                "div",
                null,
                v.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  v.createElement(
                    "div",
                    null,
                    v.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                v.createElement(
                  "div",
                  null,
                  v.createElement(
                    "button",
                    {
                      onClick: function () {
                        return ge.CompleteBackfill("resize_image");
                      },
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  v.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                v.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  ge.m_nProcessed
                ),
                v.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  ge.m_nSuccesses
                ),
                v.createElement("div", null, "Events Warning: ", ge.m_nWarning),
                v.createElement("div", null, "Events Failed: ", ge.m_nFailures),
                v.createElement("div", null, "Events Skipped: ", ge.m_nSkipped),
                0 < e.length &&
                  v.createElement(
                    v.Fragment,
                    null,
                    v.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  v.createElement(
                    "div",
                    null,
                    v.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  v.createElement(F.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress",
                  })
              );
            }),
            Object(E.c)([X.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(E.c)([X.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(E.c)([i.a], e))
          );
        })(v.Component),
        Oe = n("6AJf"),
        Ae = n("9w6b"),
        Te = n("mgoM"),
        Ce = n("BVKn"),
        je = n("YWVM"),
        Ie = n("r3N9"),
        De = n("SdTr"),
        Me = n("YNty"),
        we = (function () {
          function e() {
            (this.m_objApprovalPriviledge = null),
              (this.m_LoadingPriviledgePromise = null);
            var e = Object(I.f)("sc_app_privildge", "application_config");
            this.ValidateStoreDefault(e)
              ? ("dev" === I.c.WEB_UNIVERSE &&
                  console.log(
                    "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                      e.bHasAccess
                  ),
                (this.m_objApprovalPriviledge = e),
                (this.m_LoadingPriviledgePromise = null))
              : (I.i.logged_in && I.c.EREALM === _.e.k_ESteamRealmChina) ||
                (this.m_objApprovalPriviledge = { bHasAccess: !1 });
          }
          return (
            (e.prototype.BHasSteamChinaAppApprovalPriviledge = function () {
              var e;
              return null === (e = this.m_objApprovalPriviledge) || void 0 === e
                ? void 0
                : e.bHasAccess;
            }),
            (e.prototype.HintLoadAppApprovalPriviledge = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                return Object(E.e)(this, function (e) {
                  return this.m_objApprovalPriviledge
                    ? [2, this.m_objApprovalPriviledge]
                    : (this.m_LoadingPriviledgePromise ||
                        (this.m_LoadingPriviledgePromise = this.InternalLoadAppApprovalPriviledge()),
                      [2, this.m_LoadingPriviledgePromise]);
                });
              });
            }),
            (e.prototype.InternalLoadAppApprovalPriviledge = function () {
              var o;
              return Object(E.b)(this, void 0, void 0, function () {
                var t, n, a, r;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t =
                        I.c.STORE_BASE_URL +
                        "events_admin/ajaxgetscapprovalpriviledge"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, b.a.get(t, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        (n = e.sent()),
                        1 ==
                        (null === (o = null == n ? void 0 : n.data) ||
                        void 0 === o
                          ? void 0
                          : o.success)
                          ? ((this.m_objApprovalPriviledge = {
                              bHasAccess: n.data.bHasAccess,
                            }),
                            [2, this.m_objApprovalPriviledge])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (a = e.sent()),
                        (r = Object(j.a)(a)),
                        console.error(
                          "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                            r.strErrorMsg,
                          r
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, { bHasAccess: !1 }];
                  }
                });
              });
            }),
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              return (
                e && "object" == typeof e && "boolean" == typeof e.bHasAccess
              );
            }),
            Object(E.c)([m.C], e.prototype, "m_objApprovalPriviledge", void 0),
            e
          );
        })(),
        Ge = n("6eA3"),
        ke = Object(i.a)(function (e) {
          var t = v.useState(null),
            n = t[0],
            o = t[1],
            a = e.eventModel,
            i = a.clanSteamID.GetAccountID();
          v.useEffect(
            function () {
              var r = b.a.CancelToken.source();
              return (
                Object(E.b)(void 0, void 0, void 0, function () {
                  var t, n, a;
                  return Object(E.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = f.a.InitFromClanID(i)),
                          [4, Ae.a.Get().LoadSingleAppEventPermissions(t)]
                        );
                      case 1:
                        return (
                          (n = e.sent()),
                          [4, we.Get().HintLoadAppApprovalPriviledge()]
                        );
                      case 2:
                        return (
                          (a = e.sent()),
                          r.token.reason ||
                            o(I.i.is_support || n.can_edit || a.bHasAccess),
                          [2]
                        );
                    }
                  });
                }),
                function () {
                  return r.cancel("SteamChinaAdminPanel is unmounting");
                }
              );
            },
            [i]
          );
          var r = f.a.InitFromClanID(i);
          return I.i.is_support ||
            Ae.a.Get().GetPartnerEventPermissions(r).can_edit
            ? v.createElement(je.a, {
                eventModel: a,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: n
                  ? [
                      v.createElement(Le, {
                        key: "removesteamchina",
                        eventModel: a,
                      }),
                    ]
                  : void 0,
              })
            : we.Get().BHasSteamChinaAppApprovalPriviledge()
            ? v.createElement(
                "div",
                { className: Ge.DisplayAdminPanel },
                v.createElement(
                  "span",
                  { className: Ge.DisplayAdminPanel_Title },
                  Object(H.f)("#EventDisplay_Admin_Title")
                ),
                v.createElement(Le, { key: "removesteamchina", eventModel: a })
              )
            : null;
        }),
        Le = function (p) {
          var m = p.eventModel;
          return v.createElement(
            "div",
            {
              className: Object(K.a)(
                x.Button,
                Ge.AdminButton,
                x.ValveOnlyBackground
              ),
              onClick: function (e) {
                var t = !1;
                Object(Q.d)(
                  v.createElement(
                    V.c,
                    {
                      strTitle: Object(H.f)(
                        "#EventAdmin_Moderation_HideEventInSC"
                      ),
                      strDescription: Object(H.f)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc"
                      ),
                      bDestructiveWarning: !0,
                      closeModal: p.closeModal,
                      onOK: function () {
                        (t = !0),
                          Object(E.b)(void 0, void 0, void 0, function () {
                            var t, n, a, r, o, i, l, s, c, u, d;
                            return Object(E.e)(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  (t = new URLSearchParams()).append(
                                    "sessionid",
                                    I.c.SESSIONID
                                  ),
                                    t.append(
                                      "clan_accountid",
                                      "" + m.clanSteamID.GetAccountID()
                                    ),
                                    t.append("gid_clan_event", "" + m.GID),
                                    (n = !1),
                                    (a = 0),
                                    (e.label = 1);
                                case 1:
                                  return (
                                    e.trys.push([1, 3, , 4]),
                                    (r =
                                      I.c.STORE_BASE_URL +
                                      "/events_admin/ajaxhidefromsteamchina"),
                                    [4, b.a.post(r, t, { withCredentials: !0 })]
                                  );
                                case 2:
                                  return (
                                    (o = e.sent()),
                                    (n =
                                      1 ==
                                        (null ===
                                          (s = null == o ? void 0 : o.data) ||
                                        void 0 === s
                                          ? void 0
                                          : s.success) ||
                                      29 ==
                                        (null ===
                                          (c = null == o ? void 0 : o.data) ||
                                        void 0 === c
                                          ? void 0
                                          : c.success)),
                                    29 ==
                                      (null ===
                                        (u = null == o ? void 0 : o.data) ||
                                      void 0 === u
                                        ? void 0
                                        : u.success) &&
                                      console.warn(
                                        "RemoveEventFromSteamChinaButton: we receive duplicate request " +
                                          m.clanSteamID.GetAccountID() +
                                          " : " +
                                          m.GID +
                                          "; event is still removed from SC"
                                      ),
                                    (a =
                                      null ===
                                        (d = null == o ? void 0 : o.data) ||
                                      void 0 === d
                                        ? void 0
                                        : d.success),
                                    [3, 4]
                                  );
                                case 3:
                                  return (
                                    (i = e.sent()),
                                    (l = Object(j.a)(i)),
                                    (a = l.errorCode),
                                    console.error(
                                      "RemoveEventFromSteamChinaButton: error " +
                                        l.strErrorMsg,
                                      l
                                    ),
                                    [3, 4]
                                  );
                                case 4:
                                  return (
                                    p.closeModal && p.closeModal(),
                                    Object(Q.d)(
                                      n
                                        ? v.createElement(
                                            V.c,
                                            { bAlertDialog: !0 },
                                            Object(H.f)(
                                              "#EventDisplay_Share_Success"
                                            )
                                          )
                                        : v.createElement(
                                            V.e,
                                            null,
                                            Object(H.f)(
                                              "#EventDisplay_Share_Failure"
                                            ) +
                                              " " +
                                              a
                                          ),
                                      window
                                    ),
                                    [2]
                                  );
                              }
                            });
                          });
                      },
                    },
                    t &&
                      v.createElement(F.a, {
                        size: "medium",
                        position: "center",
                      })
                  ),
                  Object(J.m)(e)
                );
              },
            },
            Object(H.f)("#EventAdmin_Moderation_HideEventInSC")
          );
        },
        Re = Ce.a.Get(),
        Be = (function (n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : Re.GetClanEventGIDFromAnnouncementGID(
                      t.props.announcement_gid
                    ),
              }),
              t
            );
          }
          return (
            Object(E.d)(e, n),
            (e.prototype.LoadEvent = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                var t,
                  n = this;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !this.props.event_gid ||
                        Re.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          Re.LoadPartnerEventGeneric(
                            this.props.clansteamid,
                            this.props.appid,
                            this.props.event_gid,
                            void 0,
                            0
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (t = e.sent()),
                        this.setState({ lookupGID: t.GID }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        e.sent(),
                        Re.LoadPartnerEventGeneric(
                          this.props.clansteamid,
                          this.props.appid,
                          void 0,
                          this.props.event_gid,
                          0
                        )
                          .then(function (e) {
                            return n.setState({ lookupGID: e.GID });
                          })
                          .catch(function (e) {
                            return console.error(
                              "StoreEventDetailView failed " +
                                Object(j.a)(e).strErrorMsg
                            );
                          }),
                        [3, 4]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      this.props.announcement_gid &&
                        !Re.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        Re.LoadPartnerEventGeneric(
                          this.props.clansteamid,
                          this.props.appid,
                          void 0,
                          this.props.announcement_gid,
                          0
                        )
                          .then(function (e) {
                            return n.setState({ lookupGID: e.GID });
                          })
                          .catch(function (e) {
                            return console.error(
                              "StoreEventDetailView failed " +
                                Object(j.a)(e).strErrorMsg
                            );
                          }),
                        (e.label = 6);
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.componentDidMount = function () {
              this.LoadEvent(), this.UpdateDocumentUI();
            }),
            (e.prototype.componentDidUpdate = function () {
              this.UpdateDocumentUI();
            }),
            (e.prototype.UpdateDocumentUI = function () {
              var e,
                t,
                n,
                a =
                  this.state.lookupGID &&
                  Re.GetClanEventModel(this.state.lookupGID);
              a && a.appid
                ? (t =
                    (e = Ee.a.GetStoreCapsuleInfo(a.appid).GetAppStoreData()) &&
                    e.title)
                : a &&
                  a.clanSteamID &&
                  (t =
                    (n = y.a.GetClanInfoByClanAccountID(
                      a.clanSteamID.GetAccountID()
                    )) && n.group_name);
              var r,
                o = a && a.GetNameWithFallback(Object(Te.g)(I.c.LANGUAGE));
              a &&
                t &&
                o &&
                ((r = Object(H.f)(
                  "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                  t,
                  o
                )),
                document.title != r && (document.title = r)),
                document.body.classList.contains("events_hub") &&
                  document.body.classList.remove("events_hub");
            }),
            (e.prototype.InfiniteScrollCloseModal = function () {
              var e,
                t = Re.GetClanEventModel(this.state.lookupGID);
              t &&
                ((e = Object(Se.d)(t, Se.a.k_eStoreNewsHub, "allowRelative")),
                this.props.history.push(e));
            }),
            (e.prototype.render = function () {
              var e = Re.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? p.a.createElement(
                      R.a,
                      null,
                      p.a.createElement(Ie.a, {
                        appid: e.appid,
                        trackingLocation: 7,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: Re,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal,
                      })
                    )
                  : p.a.createElement(
                      R.a,
                      null,
                      p.a.createElement(Me.a, {
                        lang: Object(Te.g)(I.c.LANGUAGE),
                        partnerEventStore: Re,
                        event: e,
                        adminPanel:
                          I.c.EREALM === _.e.k_ESteamRealmChina
                            ? p.a.createElement(ke, { eventModel: e })
                            : p.a.createElement(je.a, {
                                eventModel: e,
                                partnerEventStore: Re,
                              }),
                        otherEventRow: p.a.createElement(De.a, {
                          clanAccountID: e.clanSteamID.GetAccountID(),
                          gidAnnouncement: e.AnnouncementGID,
                          partnerEventStore: Re,
                        }),
                      })
                    )
                : p.a.createElement(F.a, null);
            }),
            Object(E.c)([X.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(E.c)([i.a], e))
          );
        })(p.a.Component),
        Pe = Object(c.i)(Be),
        Fe = n("WBba"),
        He = n("qD+2"),
        Ne = n("apHd"),
        Ue = n("xnZ7"),
        ze = n.n(Ue),
        xe = n("6Y59"),
        We = n("r+ba"),
        Ve = (function (a) {
          function e(e) {
            var n = a.call(this, e) || this;
            n.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: [],
              last_update_event: null,
            };
            var t = Object(Ne.a)("EventWebRowEmbed");
            return (
              n.ValidateStoreDefault(t) &&
                ((n.state.bPreLoaded = t.bPreLoaded),
                (n.state.announcementGIDList = t.announcementGIDList),
                (n.state.last_update_event = t.last_update_event),
                (n.state.events = []),
                n.state.announcementGIDList.forEach(function (e) {
                  var t = L.c.GetClanEventFromAnnouncementGID(e);
                  t && n.state.events.push(t);
                })),
              n
            );
          }
          return (
            Object(E.d)(e, a),
            (e.prototype.componentDidMount = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                var t,
                  n,
                  a,
                  r,
                  o,
                  i,
                  l,
                  s = this;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props),
                        (n = t.appid),
                        (a = t.event_customization),
                        (r = t.partnerEventStore),
                        (o = t.trackingLocation),
                        this.state.bPreLoaded
                          ? [3, 2]
                          : [
                              4,
                              r.LoadAdjacentPartnerEvents(
                                null,
                                null,
                                n,
                                0,
                                2,
                                a
                              ),
                            ]
                      );
                    case 1:
                      (i = e.sent()),
                        this.setState({ events: i }),
                        o &&
                          i &&
                          0 < i.length &&
                          ((l = Ae.a.Get().GetTracker()),
                          this.state.events
                            .filter(function (e) {
                              return e.BIsPartnerEvent();
                            })
                            .forEach(function (e) {
                              return l.MarkEventShown(
                                e.GID,
                                e.clanSteamID.GetAccountID(),
                                o
                              );
                            }),
                          l.Flush()),
                        (e.label = 2);
                    case 2:
                      return (
                        (window.fnPartnerEvent_ShowInfiniteScroll = function (
                          e,
                          t
                        ) {
                          s.setState({
                            bShowModal: !0,
                            announcementGID: t,
                            modalInitialEvent: void 0,
                          });
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              return (
                !(!e || "object" != typeof e) &&
                void 0 !== e.bPreLoaded &&
                "boolean" == typeof e.bPreLoaded &&
                Array.isArray(e.announcementGIDList)
              );
            }),
            (e.prototype.ShowModal = function (e) {
              var t = this.props.trackingLocation;
              this.setState({
                bShowModal: !0,
                modalInitialEvent: e,
                announcementGID: void 0,
              });
              var n = Ae.a.Get().GetTracker();
              e &&
                e.BIsPartnerEvent() &&
                n.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
                n.Flush();
            }),
            (e.prototype.ShowLatestUpdateModal = function () {
              var e = this.state.last_update_event,
                t = e.event_gid,
                n = e.announcement_gid,
                a = e.clan_account_id,
                r = this.props.trackingLocation;
              this.setState({
                bShowModal: !0,
                modalInitialEvent: void 0,
                announcementGID: n,
              });
              var o = Ae.a.Get().GetTracker();
              t && o.MarkEventRead(t, a, r) && o.Flush();
            }),
            (e.prototype.CloseModal = function () {
              this.setState({ bShowModal: !1, modalInitialEvent: null });
            }),
            (e.prototype.BHasLastUpdateEvent = function () {
              var e;
              return Boolean(
                null === (e = this.state.last_update_event) || void 0 === e
                  ? void 0
                  : e.rtime
              );
            }),
            (e.prototype.BShouldShowLastUpdateEvent = function () {
              var e = this.state,
                t = e.last_update_event,
                n = e.events;
              return (
                !(
                  !this.BHasLastUpdateEvent() ||
                  null == t ||
                  !t.announcement_gid
                ) &&
                (null == n || !n.length)
              );
            }),
            (e.prototype.render = function () {
              var e,
                n = this,
                a = this.state.events;
              if (!a)
                return p.a.createElement(
                  "div",
                  { className: ze.a.FlexCenter },
                  p.a.createElement(F.a, { size: "medium", position: "center" })
                );
              var t = window.screen.width <= 500 ? 1 : 2,
                r = Boolean(null == a ? void 0 : a.length),
                o = this.BHasLastUpdateEvent(),
                i = this.BShouldShowLastUpdateEvent()
                  ? this.state.last_update_event.announcement_gid
                  : void 0,
                l = this.props,
                s = l.partnerEventStore,
                c = l.strClassName,
                u = l.appid,
                d = l.trackingLocation;
              return p.a.createElement(
                "div",
                { className: c },
                this.state.bShowModal &&
                  p.a.createElement(Ie.a, {
                    classname: We.StoreHeaderAdjust,
                    appid: u,
                    trackingLocation: d,
                    announcementGID:
                      this.state.announcementGID ||
                      (null === (e = this.state.modalInitialEvent) ||
                      void 0 === e
                        ? void 0
                        : e.AnnouncementGID),
                    partnerEventStore: s,
                    eventModel: this.state.modalInitialEvent,
                    closeModal: this.CloseModal,
                  }),
                r &&
                  p.a.createElement(
                    "div",
                    null,
                    p.a.createElement(
                      "h2",
                      null,
                      Object(H.f)("#EventBrowse_RecentEvents")
                    ),
                    p.a.createElement(
                      "div",
                      { className: We.SectionButtonCtn },
                      this.props.bViewAllShowInfiniteScroll
                        ? p.a.createElement(
                            "div",
                            {
                              className: We.SectionButton,
                              onClick: function () {
                                return n.ShowModal(a[0]);
                              },
                            },
                            Object(H.f)("#EventBrowse_MoreEventsBtn")
                          )
                        : p.a.createElement(
                            Se.c,
                            {
                              eventModel: a[0],
                              route: Se.a.k_eViewWebSiteHub,
                              forceAnchor: !0,
                              className: We.SectionButton,
                            },
                            Object(H.f)("#EventBrowse_MoreEventsBtn")
                          )
                    ),
                    p.a.createElement(
                      "div",
                      { className: We.EventsSummariesCtn },
                      a.slice(0, t).map(function (t) {
                        var e =
                          1 === a.length && 500 < window.screen.width
                            ? De.c
                            : De.b;
                        return p.a.createElement(e, {
                          key: t.GID,
                          event: t,
                          onClick: function (e) {
                            n.ShowModal(t),
                              e.stopPropagation(),
                              e.preventDefault();
                          },
                        });
                      })
                    )
                  ),
                Boolean(o && i) &&
                  p.a.createElement(Qe, {
                    nUpdateTime: this.state.last_update_event.rtime,
                    announcementGID: i,
                    onClick: this.ShowLatestUpdateModal,
                  }),
                Boolean(o && !i) &&
                  p.a.createElement(qe, {
                    nUpdateTime: this.state.last_update_event.rtime,
                    onClick: this.ShowLatestUpdateModal,
                  })
              );
            }),
            Object(E.c)([X.a], e.prototype, "ShowModal", null),
            Object(E.c)([X.a], e.prototype, "ShowLatestUpdateModal", null),
            Object(E.c)([X.a], e.prototype, "CloseModal", null),
            e
          );
        })(p.a.Component),
        qe = function (e) {
          return p.a.createElement(
            "div",
            { className: We.LatestUpdateButtonCtn },
            p.a.createElement(
              "div",
              { className: We.LatestUpdateIcon },
              p.a.createElement(xe.gb, null)
            ),
            p.a.createElement(
              "div",
              { className: We.LatestUpdateButton, onClick: e.onClick },
              Object(H.f)(
                "#EventBrowse_LatestUpdateTime_Button",
                Object(H.p)(e.nUpdateTime)
              )
            )
          );
        },
        Qe = function (e) {
          function t(e) {
            null != r && r(), e.stopPropagation(), e.preventDefault();
          }
          var n = e.nUpdateTime,
            a = e.announcementGID,
            r = e.onClick,
            o = a ? L.c.GetClanEventFromAnnouncementGID(a) : null;
          return p.a.createElement(
            "div",
            null,
            p.a.createElement(
              "h2",
              null,
              Object(H.f)("#EventBrowse_LastUpdateDate", Object(H.p)(n))
            ),
            p.a.createElement(
              "div",
              { className: We.SectionButtonCtn },
              p.a.createElement(
                "div",
                { className: We.SectionButton, onClick: t },
                Object(H.f)("#EventBrowse_ViewLatestUpdate")
              )
            ),
            Boolean(o) &&
              p.a.createElement(
                "div",
                { className: We.EventsSummariesCtn },
                p.a.createElement(De.c, { event: o, onClick: t })
              )
          );
        },
        Ye = n("5izx"),
        Ke = (function (r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var n = Ye.a.GetTimeNowWithOverrideAsDate(),
              a = new Date(n.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(a.getTime() / 1e3)), t;
          }
          return (
            Object(E.d)(e, r),
            (e.prototype.render = function () {
              var e = this.props.appid;
              return p.a.createElement(Ve, {
                appid: e,
                partnerEventStore: Ce.a.Get(),
                event_customization: {
                  rtime_oldestevent: this.m_rtimeOldest,
                  exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
                  exclude_event_types: [34],
                },
                strClassName: "early_access_announcements",
                trackingLocation: 3,
              });
            }),
            e
          );
        })(p.a.Component),
        Je = n("2l+k"),
        Xe = (function () {
          function e() {
            this.m_rgRSSEnabledClans = [];
          }
          return (
            (e.prototype.GetAllRSSEnabledClans = function () {
              return this.m_rgRSSEnabledClans;
            }),
            (e.prototype.GetTrustedEnabledClans = function (t) {
              return this.m_rgRSSEnabledClans
                .filter(function (e) {
                  return e.is_trusted_press == t;
                })
                .map(function (e) {
                  return e.clan_accoundid;
                });
            }),
            (e.Get = function () {
              return (
                e.s_Singleton || (e.s_Singleton = new e()).Init(), e.s_Singleton
              );
            }),
            (e.prototype.Init = function () {
              var e = Object(I.f)("rssaccountinfo", "application_config");
              this.ValidateRSSAccountConfig(e) &&
                (this.m_rgRSSEnabledClans = e);
            }),
            (e.prototype.ValidateRSSAccountConfig = function (e) {
              var t = e;
              return (
                t &&
                Array.isArray(t) &&
                0 < t.length &&
                "object" == typeof t[0] &&
                "number" == typeof t[0].clan_accoundid
              );
            }),
            (e.prototype.LoadKnownAllRSSInfo = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new Array()),
                        (n = Je.a.Get()),
                        this.m_rgRSSEnabledClans.forEach(function (e) {
                          n.BHasClanIDLoaded(e.clan_accoundid) ||
                            t.push(
                              n.QueueCuratorAdminInfoLoad(e.clan_accoundid)
                            );
                        }),
                        [4, Promise.all(t)]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.ExtractWithoutRSSAutomation = function () {
              var n = [],
                a = Je.a.Get();
              return (
                this.m_rgRSSEnabledClans.forEach(function (e) {
                  var t = a.GetRSSAdminForClanAccountID(e.clan_accoundid);
                  t && !t.BIsAutomationEnabled() && n.push(e.clan_accoundid);
                }),
                n
              );
            }),
            (e.prototype.HintLoadAccounts = function () {
              return Object(E.b)(this, void 0, void 0, function () {
                return Object(E.e)(this, function (e) {
                  return [2];
                });
              });
            }),
            (e.prototype.ReindexClanEventsAndReloadAccount = function (i) {
              var l;
              return Object(E.b)(this, void 0, void 0, function () {
                var t, n, a, r, o;
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t =
                        I.c.STORE_BASE_URL +
                        "events_admin/ajaxflushandreindexrss"),
                        (n = new FormData()).set("sessionid", I.c.SESSIONID),
                        n.append("clanids", "" + i),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, b.a.post(t, n, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        (a = e.sent()),
                        1 ==
                        (null === (l = null == a ? void 0 : a.data) ||
                        void 0 === l
                          ? void 0
                          : l.success)
                          ? [2, !0]
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (r = e.sent()),
                        (o = Object(j.a)(r)),
                        console.error(
                          "Failed to ReindexClanEventsAndReloadAccount: " +
                            o.strErrorMsg,
                          o
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, !1];
                  }
                });
              });
            }),
            e
          );
        })(),
        Ze = n("wjMc"),
        $e = n("BRUS"),
        et = n("d+Me"),
        tt = n("WGPV"),
        nt = n.n(tt),
        at = Object(c.i)(function (e) {
          var t = Object(v.useState)(!0),
            n = t[0],
            a = t[1];
          if (
            (Object(v.useEffect)(function () {
              Object(E.b)(void 0, void 0, void 0, function () {
                return Object(E.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return y.a.Init(), [4, Xe.Get().HintLoadAccounts()];
                    case 1:
                      return e.sent(), a(!1), [2];
                  }
                });
              });
            }, []),
            n)
          )
            return p.a.createElement(F.a, {
              string: Object(H.f)("#Loading"),
              size: "medium",
            });
          var r = Xe.Get().GetTrustedEnabledClans(!0),
            o = Xe.Get().GetTrustedEnabledClans(!1);
          return p.a.createElement(
            "div",
            null,
            p.a.createElement(
              R.a,
              null,
              p.a.createElement(
                "h1",
                null,
                Object(H.f)("#RSSModeration_Title")
              ),
              p.a.createElement(rt, null),
              p.a.createElement(ct, {
                rgClanIDs: Xe.Get()
                  .GetAllRSSEnabledClans()
                  .map(function (e) {
                    return e.clan_accoundid;
                  }),
              }),
              p.a.createElement(ot, {
                rgClanIDs: r,
                strTitle: Object(H.f)("#RSSModeration_TrustTitle"),
              }),
              p.a.createElement(ot, {
                rgClanIDs: o,
                strTitle: Object(H.f)("#RSSModeration_RestTitle"),
              })
            )
          );
        }),
        rt = Object(i.a)(function (e) {
          var t = Object(v.useState)(!1),
            n = t[0],
            a = t[1],
            r = Object(v.useState)(void 0),
            o = r[0],
            i = r[1];
          return n
            ? p.a.createElement(F.a, {
                string: Object(H.f)("#Loading"),
                size: "medium",
              })
            : void 0 !== o
            ? Boolean(0 < o.length)
              ? p.a.createElement(ot, {
                  rgClanIDs: o,
                  strTitle: Object(H.f)("#RSSModeration_InactiveAutomation"),
                })
              : p.a.createElement(
                  "div",
                  null,
                  Object(H.f)("#RSSModreation_AllAutomationEnabled")
                )
            : p.a.createElement(
                $.d,
                {
                  onClick: function () {
                    return Object(E.b)(void 0, void 0, void 0, function () {
                      return Object(E.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return a(!0), [4, Xe.Get().LoadKnownAllRSSInfo()];
                          case 1:
                            return (
                              e.sent(),
                              i(Xe.Get().ExtractWithoutRSSAutomation()),
                              a(!1),
                              [2]
                            );
                        }
                      });
                    });
                  },
                },
                Object(H.f)("#RSSModeration_FindInActive"),
                " "
              );
        }),
        ot = function (e) {
          var t = e.rgClanIDs,
            n = e.strTitle,
            a = Object(v.useState)(!1),
            r = a[0],
            o = a[1],
            i = null;
          return (
            r ||
              (i = t.map(function (e) {
                return p.a.createElement(it, { key: e, clanAccountID: e });
              })),
            p.a.createElement(
              "div",
              { className: Object(K.a)(nt.a.SectionContainer) },
              p.a.createElement(
                "h2",
                {
                  className: Object(K.a)(nt.a.ModSectionTitle),
                  onDoubleClick: function () {
                    return o(!r);
                  },
                },
                n,
                p.a.createElement("span", null, " "),
                p.a.createElement(
                  $.d,
                  {
                    className: nt.a.ResizeButton,
                    onClick: function () {
                      return o(!r);
                    },
                  },
                  r
                    ? p.a.createElement(xe.I, null)
                    : p.a.createElement(xe.L, null)
                )
              ),
              r &&
                p.a.createElement(
                  $.d,
                  {
                    onClick: function () {
                      return o(!1);
                    },
                  },
                  Object(H.f)("#Sale_ShowContents")
                ),
              i
            )
          );
        },
        it = Object(i.a)(function (e) {
          var t = e.clanAccountID;
          return y.a.BHasClanInfoLoadedByAccountID(t) &&
            Je.a.Get().BHasClanIDLoaded(t)
            ? p.a.createElement(st, {
                clanInfo: y.a.GetClanInfoByClanAccountID(t),
                rssAdminInfo: Je.a.Get().GetRSSAdminForClanAccountID(t),
              })
            : p.a.createElement(lt, { clanAccountID: t });
        }),
        lt = function (e) {
          var n = e.clanAccountID;
          return p.a.createElement(
            et.a,
            {
              onEnter: function () {
                return Object(E.b)(void 0, void 0, void 0, function () {
                  var t;
                  return Object(E.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = f.a.InitFromClanID(n)),
                          [
                            4,
                            Promise.all([
                              y.a.LoadClanInfoForClanSteamID(t),
                              Je.a.Get().QueueCuratorAdminInfoLoad(n),
                            ]),
                          ]
                        );
                      case 1:
                        return e.sent(), [2];
                    }
                  });
                });
              },
              topOffset: "-500px",
              bottomOffset: "-500px",
            },
            p.a.createElement(
              "div",
              { className: nt.a.TileContainer },
              p.a.createElement("div", null, Object(H.f)("#Loading"), " - ", n)
            )
          );
        },
        st = function (e) {
          var t = e.clanInfo,
            n = e.rssAdminInfo,
            a = Object(v.useState)(!1),
            r = a[0],
            o = a[1],
            i = I.c.STORE_BASE_URL + "newshub/group/" + t.clanAccountID,
            l =
              I.c.STORE_BASE_URL +
              "curator/" +
              t.clanAccountID +
              "/admin/manage_rss",
            s = I.c.COMMUNITY_BASE_URL + "group/" + t.clanAccountID,
            c =
              "https://steamsupport.valvesoftware.com/clan/overview/" +
              f.a.InitFromClanID(t.clanAccountID).ConvertTo64BitString(),
            u = Je.a.Get().GetRSSAdminStats(t.clanAccountID);
          return p.a.createElement(
            "div",
            { className: Object(K.a)(nt.a.TileContainer) },
            p.a.createElement(
              "div",
              { className: Object(K.a)(nt.a.TileSpread) },
              p.a.createElement(
                "div",
                null,
                p.a.createElement(
                  "div",
                  null,
                  t.group_name,
                  " - ",
                  t.clanAccountID
                ),
                p.a.createElement(
                  "div",
                  null,
                  p.a.createElement(
                    "div",
                    null,
                    Object(H.f)("#CuratorAdmin_RSSFeed"),
                    ":"
                  ),
                  p.a.createElement("a", { href: n.GetRSSUrl() }, n.GetRSSUrl())
                ),
                Boolean(u) &&
                  p.a.createElement(
                    "div",
                    null,
                    p.a.createElement(
                      "div",
                      null,
                      Object(H.f)(
                        "#RSSModeration_TotalEvents",
                        u.total_event_count.toLocaleString()
                      )
                    ),
                    p.a.createElement(
                      "div",
                      null,
                      Object(H.f)(
                        "#RSSModeration_RSSEvents",
                        u.rss_event_count.toLocaleString()
                      )
                    )
                  ),
                p.a.createElement(
                  $.d,
                  {
                    onClick: function () {
                      return o(!r);
                    },
                  },
                  Object(H.f)(
                    r
                      ? "#Bbcode_Expand_Details_Expanded"
                      : "#Bbcode_Expand_Details_Collapsed"
                  )
                )
              ),
              p.a.createElement(
                "div",
                null,
                p.a.createElement(
                  "ul",
                  null,
                  p.a.createElement(
                    "li",
                    null,
                    p.a.createElement(
                      "a",
                      { href: i },
                      Object(H.f)("#EventDisplay_NewsHubSubtitle")
                    )
                  ),
                  p.a.createElement(
                    "li",
                    null,
                    p.a.createElement(
                      "a",
                      { href: l },
                      Object(H.f)("#CuratorAdmin_RSSFeed_title")
                    )
                  ),
                  p.a.createElement(
                    "li",
                    null,
                    p.a.createElement(
                      "a",
                      { href: s },
                      Object(H.f)("#RSSModeration_GroupPage")
                    )
                  ),
                  p.a.createElement(
                    "li",
                    null,
                    p.a.createElement(
                      "a",
                      { href: c },
                      Object(H.f)("#RSSModeration_SupportPage")
                    )
                  ),
                  p.a.createElement(
                    "li",
                    null,
                    p.a.createElement(ct, { rgClanIDs: [t.clanAccountID] })
                  )
                )
              ),
              p.a.createElement(
                "div",
                { className: nt.a.CreatorCtn },
                p.a.createElement($e.a, {
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
            Boolean(r) &&
              p.a.createElement(
                p.a.Fragment,
                null,
                Boolean(n.BHasSavedRSSURL())
                  ? p.a.createElement(Ze.a, {
                      strRssURL: n.GetRSSUrl(),
                      admin: n,
                    })
                  : p.a.createElement(
                      "div",
                      null,
                      Object(H.f)("#RSSModeration_NoRSSFeed")
                    )
              )
          );
        },
        ct = function (t) {
          return p.a.createElement(
            ee.a,
            {
              toolTipContent: Object(H.f)(
                "#RSSModeration_ReindexAndReload_ttip"
              ),
            },
            p.a.createElement(
              $.d,
              {
                onClick: function (e) {
                  Object(Q.d)(
                    p.a.createElement(ut, Object(E.a)({}, t)),
                    Object(J.m)(e)
                  );
                },
              },
              Object(H.f)("#RSSModeration_ReindexAndReload")
            )
          );
        },
        ut = function (r) {
          function e() {
            return r.closeModal && r.closeModal();
          }
          var t = Object(v.useState)(void 0),
            n = t[0],
            o = t[1],
            a = Object(v.useState)(!1),
            i = a[0],
            l = a[1],
            s = Object(v.useState)(void 0),
            c = s[0],
            u = s[1];
          return p.a.createElement(
            V.g,
            { onEscKeypress: e },
            p.a.createElement(
              $.f,
              null,
              p.a.createElement(
                $.j,
                null,
                " ",
                Object(H.f)("#RSSModeration_ReindexAndReload"),
                " "
              ),
              p.a.createElement(
                $.b,
                null,
                p.a.createElement(
                  $.c,
                  null,
                  void 0 === n
                    ? p.a.createElement(
                        p.a.Fragment,
                        null,
                        p.a.createElement(
                          "span",
                          null,
                          Object(H.f)(
                            "#RSSModeration_Reindex_Verify",
                            r.rgClanIDs.length
                          )
                        ),
                        p.a.createElement(
                          $.p,
                          {
                            onClick: function () {
                              return Object(E.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var t, n, a;
                                  return Object(E.e)(this, function (e) {
                                    switch (e.label) {
                                      case 0:
                                        o((t = 0)), (n = 0), (e.label = 1);
                                      case 1:
                                        return n < r.rgClanIDs.length
                                          ? ((a = r.rgClanIDs[n]),
                                            [
                                              4,
                                              Xe.Get().ReindexClanEventsAndReloadAccount(
                                                a
                                              ),
                                            ])
                                          : [3, 4];
                                      case 2:
                                        if (!e.sent())
                                          return (
                                            u(
                                              Object(H.f)(
                                                "#Error_Generic_Label"
                                              )
                                            ),
                                            [3, 4]
                                          );
                                        o((t += 1)), (e.label = 3);
                                      case 3:
                                        return ++n, [3, 1];
                                      case 4:
                                        return l(!0), [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(H.f)("#Button_Continue")
                        )
                      )
                    : p.a.createElement(
                        p.a.Fragment,
                        null,
                        p.a.createElement(
                          "span",
                          null,
                          Object(H.f)(
                            "#RSSModeration_Reindex_Action",
                            n,
                            r.rgClanIDs.length
                          )
                        ),
                        i
                          ? p.a.createElement(
                              "span",
                              null,
                              Object(H.f)(
                                "#EventEditor_ImportFromHTML_ConvertFinished"
                              )
                            )
                          : p.a.createElement(F.a, {
                              size: "small",
                              string: Object(H.f)("#Updating"),
                            })
                      ),
                  Boolean(c) && p.a.createElement("span", null, c, " ")
                ),
                p.a.createElement(
                  $.i,
                  null,
                  p.a.createElement(
                    $.d,
                    { onClick: e },
                    Object(H.f)(i ? "#Button_OK" : "#Button_Cancel")
                  )
                )
              )
            )
          );
        };
      He.a.Init(new Fe.a(I.c.WEBAPI_BASE_URL)), L.c.Init();
      function dt(e) {
        var t = e.children,
          n = Object(v.useState)(Ae.a.IsInitialized()),
          a = n[0],
          r = n[1];
        return a
          ? p.a.createElement(p.a.Fragment, null, t)
          : (Ae.a.InitGlobal().then(function () {
              return r(!0);
            }),
            null);
      }
      function pt(t) {
        return function (e) {
          return p.a.createElement(dt, null, p.a.createElement(t, e));
        };
      }
      var mt = pt(ie),
        vt = pt(ye),
        ht = pt(Oe.b),
        Et = pt(r.d),
        bt = pt(Pe),
        _t = pt(Ke),
        gt = pt(_e),
        ft = pt(at);
    },
    vNkc: function (e, t, n) {
      e.exports = { Error: "eventbackfill_Error_1eWgI" };
    },
    zrk3: function (e, t, n) {
      e.exports = {
        ModeratorAuditActionCtn:
          "eventmoderationaudit_ModeratorAuditActionCtn_f6z__",
      };
    },
  },
]);
