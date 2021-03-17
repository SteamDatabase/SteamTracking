/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    A8Lc: function (e, t, n) {
      e.exports = { ErrorMsg: "eventdetailview_ErrorMsg_1ZEL9" };
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
    Wym2: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "EventModerationLanding", function () {
          return ft;
        }),
        n.d(t, "EventBackfillLanding", function () {
          return gt;
        }),
        n.d(t, "EventSaleDisplay", function () {
          return St;
        }),
        n.d(t, "EventCalendar", function () {
          return yt;
        }),
        n.d(t, "EventDetailView", function () {
          return At;
        }),
        n.d(t, "Events", function () {
          return Ot;
        }),
        n.d(t, "EventSteamGameFestivalDebug", function () {
          return Ct;
        }),
        n.d(t, "RssEnabledAccountDashboard", function () {
          return Tt;
        });
      var r,
        a,
        h = n("q1tI"),
        E = n.n(h),
        o = n("daJ/"),
        b = n("mrSG"),
        i = n("vDqi"),
        _ = n.n(i),
        p = n("2vnA"),
        l = n("TyAF"),
        c = n("s4NR"),
        d = n.n(c),
        s = n("AXHe"),
        u = n("Ty5D"),
        m = n("Cs6D"),
        f = n("kyHq"),
        g = n("3+zv"),
        S = n("kLLr"),
        y = n("U+Q5"),
        A = n("TQGK"),
        v = n("N0Ye"),
        O = n("f0Wu"),
        C = ["mod_reviewed", "auto_migrated"],
        T = (function () {
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
                n = d.a.parse(e.substring(1)),
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
                o = C.map(function (e) {
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
                  (l = [{ label: Object(v.b)(i), value: i }]))
                : n.eventtype &&
                  ((l = []),
                  n.eventtype.forEach(function (e) {
                    var t = Number.parseInt(e);
                    l.push({ label: Object(v.b)(t), value: t });
                  }));
              var c = void 0;
              "string" == typeof n.filterDate &&
                0 < n.filterDate.length &&
                (c = O.unix(Number(n.filterDate)));
              var s = !1;
              "string" == typeof n.orderByVisibility &&
                0 < n.orderByVisibility.length &&
                (s = Boolean(n.orderByVisibility)),
                Object(p.G)(function () {
                  (t.selectedTags = a),
                    (t.excludedTags = o),
                    (t.filterEventTypes = l),
                    (t.filterDate = c),
                    (t.bOrderByVisibilityStartTime = s),
                    (t.bUseCustomQuery =
                      (a && 0 < a.length) || r || (l && 0 < l.length));
                });
            }),
            Object(b.c)([p.C], e.prototype, "selectedTags", void 0),
            Object(b.c)([p.C], e.prototype, "excludedTags", void 0),
            Object(b.c)([p.C], e.prototype, "filterDate", void 0),
            Object(b.c)([p.C], e.prototype, "filterDateAsString", void 0),
            Object(b.c)([p.C], e.prototype, "eventsToLoadPerPaging", void 0),
            Object(b.c)([p.C], e.prototype, "filterEventTypes", void 0),
            Object(b.c)(
              [p.C],
              e.prototype,
              "bOrderByVisibilityStartTime",
              void 0
            ),
            Object(b.c)([p.C], e.prototype, "bUseCustomQuery", void 0),
            e
          );
        })(),
        j = n("bDQf"),
        M = n("lkRc");
      ((a = r = r || {})[(a.k_ModReviewed = 0)] = "k_ModReviewed"),
        (a[(a.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (a[(a.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (a[(a.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (a[(a.k_ModReReviewed = 4)] = "k_ModReReviewed"),
        (a[(a.k_ModRemovedFromSteamChina = 5)] = "k_ModRemovedFromSteamChina"),
        (a[(a.k_ModFlagAdultOnlyContent = 6)] = "k_ModFlagAdultOnlyContent"),
        (a[(a.k_ModRemoveAdultOnlyContent = 7)] =
          "k_ModRemoveAdultOnlyContent");
      function I(e) {
        var t = e.modAction,
          n = Object(U.k)(t.m_rtWhen) + " @ " + Object(U.m)(t.m_rtWhen),
          a = h.createElement(z, {
            locToken: "#EventModTile_Moderator",
            accountID: t.m_moderator,
          });
        switch (t.m_action) {
          case r.k_ModReviewed:
            return h.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.n)(
                "#EventModTile_Action_Reviewed",
                h.createElement("span", null, n),
                a
              )
            );
          case r.k_ModUnreviewed:
            return h.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.n)(
                "#EventModTile_Action_UnReviewed",
                h.createElement("span", null, n),
                a
              )
            );
          case r.k_ChangeEventType:
            return h.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.n)(
                "#EventModTile_Action_NewEventType",
                h.createElement("span", null, n),
                a,
                Object(v.b)(t.m_newEventType)
              )
            );
          case r.k_UpdateSeasonTags:
            return h.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.n)(
                "#EventModTile_Action_SeasonTagUpdate",
                h.createElement("span", null, n),
                a,
                t.m_newTagAdded
              )
            );
          case r.k_ModReReviewed:
            return h.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.n)(
                "#EventModTile_Action_ReReviewed",
                h.createElement("span", null, n),
                a
              )
            );
          case r.k_ModRemovedFromSteamChina:
            return h.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.n)(
                "#EventModTile_Action_RemoveFromSC",
                h.createElement("span", null, n),
                a
              )
            );
          case r.k_ModFlagAdultOnlyContent:
            return h.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.n)(
                "#EventModTile_Action_FlagAdultContent",
                h.createElement("span", null, n),
                a
              )
            );
          case r.k_ModRemoveAdultOnlyContent:
            return h.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.n)(
                "#EventModTile_Action_RemoveAdultContent",
                h.createElement("span", null, n),
                a
              )
            );
          default:
            return h.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              t.ToModString
            );
        }
      }
      function D(e) {
        var t,
          n,
          a = h.useState(!0),
          r = a[0],
          o = a[1],
          i = e.eventModel
            .GetAllTags()
            .filter(function (e) {
              return k.IsAuditAction(e);
            })
            .reverse(),
          l = i.length,
          c = 3 < i.length && r;
        return 0 == i.length
          ? null
          : (c && (i = i.splice(0, 3)),
            h.createElement(
              "div",
              null,
              h.createElement(
                "h4",
                null,
                Object(U.f)("#EventModTile_Action_Title")
              ),
              ((t = i),
              (n = e.eventModel),
              t.map(function (e) {
                var t = new k();
                return (
                  t.FromString(e),
                  h.createElement(I, { key: n.GID + e, modAction: t })
                );
              })),
              c &&
                h.createElement(
                  "a",
                  {
                    onClick: function () {
                      return o(!1);
                    },
                    className: x.ExpandModActions,
                  },
                  Object(U.f)("#EventModTile_Action_More", l - 3)
                ),
              Boolean(!c && 3 < l) &&
                h.createElement(
                  "a",
                  {
                    onClick: function () {
                      return o(!0);
                    },
                    className: x.ExpandModActions,
                  },
                  Object(U.f)("#EventModTile_Action_Hide")
                )
            ));
      }
      var w = "ModAct",
        k = (function () {
          function e() {}
          return (
            (e.prototype.ToModString = function () {
              var e =
                w +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case r.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case r.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function (e) {
              var t = e.split("_");
              if (!t || t[0] !== w) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case r.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case r.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function (e) {
              return (
                (this.m_moderator = M.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = r.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function (e) {
              return (
                (this.m_moderator = M.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? r.k_ModReviewed : r.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetAdultOnlyContentAction = function (e) {
              return (
                (this.m_moderator = M.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e
                  ? r.k_ModFlagAdultOnlyContent
                  : r.k_ModRemoveAdultOnlyContent),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function (e) {
              return (
                (this.m_moderator = M.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? r.k_ModReReviewed : r.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function (e) {
              return e.startsWith(w);
            }),
            (e.prototype.SetUpdateSeasonalTags = function (e) {
              return (
                (this.m_moderator = M.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = r.k_UpdateSeasonTags),
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
              d
            ) {
              var u;
              return (
                void 0 === d && (d = 30),
                Object(b.b)(this, void 0, void 0, function () {
                  var t,
                    n,
                    a,
                    r,
                    o,
                    i,
                    l,
                    c = this;
                  return Object(b.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        (t =
                          M.d.STORE_BASE_URL +
                          "events_admin/ajaxgetmoderationspecificpartnerevents"),
                          (n = 0),
                          null !== (u = this.m_listEvents) &&
                            void 0 !== u &&
                            u.length &&
                            (this.m_listEvents.forEach(function (e) {
                              return (n = Math.max(
                                n,
                                Math.floor(
                                  Date.parse(e.last_modified_date) / 1e3
                                )
                              ));
                            }),
                            this.m_listEvents.filter(function (e) {
                              return (
                                Math.floor(
                                  Date.parse(e.last_modified_date) / 1e3
                                ) == n
                              );
                            }).length >= d && n++),
                          (a = { start_time: n, count: d }),
                          (e.label = 1);
                      case 1:
                        return (
                          e.trys.push([1, 3, , 4]),
                          [
                            4,
                            _.a.get(t, {
                              params: a,
                              withCredentials: !0,
                              cancelToken: s ? s.token : void 0,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (r = e.sent()),
                          s && s.token.reason
                            ? [2, []]
                            : r && r.data
                            ? ((o = new Array()),
                              Object(p.G)(function () {
                                r.data.docs.forEach(function (e) {
                                  c.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                    (o.push(e),
                                    c.m_mapEventGIDToSolrData.set(
                                      e.unique_id,
                                      e
                                    ),
                                    c.m_listEvents.push(e));
                                });
                              }),
                              [2, o])
                            : [3, 4]
                        );
                      case 3:
                        return (
                          (i = e.sent()),
                          (l = Object(j.a)(i)),
                          console.error(
                            "LoadPartnerEventForModerationIncremental failed:" +
                              l.strErrorMsg,
                            l
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
              c,
              s
            ) {
              return Object(b.b)(this, void 0, void 0, function () {
                var t, n, a;
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          M.d.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (n = l.join(",")),
                        s &&
                          (0 < l.length && (n += ","), (n += s.ToModString())),
                        (a = new FormData()).append("sessionid", M.d.SESSIONID),
                        a.append("clan_accountid", "" + o.GetAccountID()),
                        a.append("gid_announcement", i),
                        a.append("add_tags", n),
                        a.append("remove_tags", c.join(",")),
                        [
                          4,
                          _.a.post(t, a, {
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
              return Object(b.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          M.d.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (n = new FormData()).append("sessionid", M.d.SESSIONID),
                        n.append("clan_accountid", "" + r.GetAccountID()),
                        n.append("gid_event", o),
                        n.append("new_event_type", "" + i),
                        [
                          4,
                          _.a.post(t, n, {
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
            Object(b.c)([p.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(b.c)([p.C], e.prototype, "m_listEvents", void 0),
            Object(b.c)([p.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        R = (function () {
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
              c,
              s,
              d,
              u,
              m
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(b.b)(this, void 0, void 0, function () {
                  var t,
                    n,
                    a = this;
                  return Object(b.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(
                            r,
                            o,
                            i,
                            l,
                            c,
                            s,
                            d,
                            u,
                            m
                          ),
                        ];
                      case 1:
                        return (
                          (t = e.sent()),
                          (n = new Array()),
                          Object(p.G)(function () {
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
              c,
              s,
              d,
              u,
              m,
              p,
              v,
              h
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(b.b)(this, void 0, void 0, function () {
                  var t, n, a;
                  return Object(b.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            M.d.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (n = {
                            page: o,
                            count: i,
                            date: d,
                            appids: void 0 === l ? void 0 : l.join(","),
                            required_tags: void 0 === c ? void 0 : c.join(","),
                            exclude_tags: void 0 === s ? void 0 : s.join(","),
                            eventtypefilter:
                              void 0 === u ? void 0 : u.join(","),
                            orderByVisibility: m || void 0,
                            creator_home_clan_id:
                              void 0 === p ? void 0 : p.join(","),
                            showUnpublished: void 0 === h ? void 0 : h,
                            term: void 0 === v ? void 0 : v,
                          }),
                          [
                            4,
                            _.a.get(t, {
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
            Object(b.c)([p.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(b.c)([p.C], e.prototype, "m_listEvents", void 0),
            Object(b.c)([p.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        L = n("6oCP"),
        B = n("C4Nl"),
        P = n("Mgs7"),
        F = n("IjL/"),
        H = n("T27q"),
        N = n("Qcoi"),
        U = n("TLQK"),
        x = n("zrk3"),
        z = Object(l.a)(function (e) {
          var t = e.accountID,
            n = e.locToken,
            a = S.a.InitFromAccountID(t).ConvertTo64BitString(),
            o = h.useRef(null),
            r = h.useState(N.a.GetProfile(a)),
            i = r[0],
            l = r[1];
          h.useEffect(
            function () {
              var r = S.a.InitFromAccountID(t).ConvertTo64BitString();
              return (
                N.a.BHasProfile(r) ||
                  Object(b.b)(void 0, void 0, void 0, function () {
                    var t, n, a;
                    return Object(b.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          (t = _.a.CancelToken.source()),
                            (o.current = t.cancel),
                            (e.label = 1);
                        case 1:
                          return (
                            e.trys.push([1, 3, , 4]), [4, N.a.LoadProfiles([r])]
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
                          return t.token.reason || l(N.a.GetProfile(r)), [2];
                      }
                    });
                  }),
                function () {
                  o.current && o.current("ModEventUserProfile: unmounting");
                }
              );
            },
            [t]
          );
          var c =
            "https://steamsupport.valvesoftware.com/account/overview/" + a;
          return h.createElement(
            "div",
            null,
            Object(U.n)(
              n,
              h.createElement(
                "a",
                { href: c, target: M.d.IN_CLIENT ? void 0 : "_blank" },
                Boolean(i)
                  ? h.createElement(h.Fragment, null, i.persona_name)
                  : h.createElement(
                      h.Fragment,
                      null,
                      h.createElement("span", null, t)
                    )
              )
            )
          );
        }),
        W = n("BpzF"),
        V = n("fpVW"),
        q = n.n(V),
        Q = n("RQmk"),
        K = n("Jqb/"),
        Y = n("UxvL"),
        J = n("ka0M"),
        X = n("0OaU"),
        Z = n("5E+2"),
        $ = n("+d9t"),
        ee = n("exH9"),
        te = n("X3Ds"),
        ne = n("bxiW"),
        ae = n("IzPI"),
        re = n("E9gz"),
        oe = n("f0Wu"),
        ie = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0,
        },
        le = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = _.a.CancelToken.source()),
              (e.m_refScroll = E.a.createRef()),
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
            Object(b.d)(e, t),
            (e.prototype.componentDidMount = function () {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0),
                T.Get().Init(this.props.history.location.search);
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
                o = T.Get();
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
                        d.a.stringify({
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
              return Object(b.b)(this, void 0, void 0, function () {
                return Object(b.e)(this, function (e) {
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
                  ((t = T.Get()).bUseCustomQuery
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
                      R.Get().LoadPartnerEventForQueryIncremental(
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
                (T.Get().bUseCustomQuery
                  ? R.Get().GetAllSolrEvents()
                  : G.Get().GetAllSolrEvents()
                ).forEach(function (e) {
                  t.push(
                    E.a.createElement(pe, { solrData: e, key: e.unique_id })
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
                R.Get().ClearAllSolrEvents(),
                this.setState(
                  Object(b.a)({}, ie),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function () {
              var e = this.RenderTiles(),
                t = T.Get();
              return E.a.createElement(
                "div",
                { className: re.ModerationContainer, ref: this.m_refScroll },
                E.a.createElement(
                  "div",
                  null,
                  E.a.createElement(
                    "h2",
                    null,
                    Object(U.f)("#EventModeration_Title")
                  ),
                  E.a.createElement(
                    F.a,
                    null,
                    E.a.createElement(
                      "div",
                      { className: Object(ee.a)(q.a.FlexRowContainer) },
                      E.a.createElement(se, {
                        fnRequireRefetchEvents: this.RefetchAllEventTiles,
                      }),
                      Boolean(t.bUseCustomQuery) &&
                        E.a.createElement(de, {
                          fnRequireRefetchEvents: this.RefetchAllEventTiles,
                        })
                    )
                  )
                ),
                E.a.createElement(F.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  E.a.createElement(X.a, {
                    position: "center",
                    size: "medium",
                    string: Object(U.f)("#Loading"),
                  })
              );
            }),
            Object(b.c)([ne.a], e.prototype, "HandleError", null),
            Object(b.c)(
              [ne.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(b.c)([ne.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(b.c)(
              [ne.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(b.c)([ne.a], e.prototype, "OnScroll", null),
            Object(b.c)([ne.a], e.prototype, "RefetchAllEventTiles", null),
            (e = Object(b.c)([l.a], e))
          );
        })(E.a.Component),
        ce = Object(u.i)(le),
        se = Object(l.a)(function (e) {
          var n = T.Get(),
            t = e.fnRequireRefetchEvents;
          return E.a.createElement(
            E.a.Fragment,
            null,
            E.a.createElement(
              "div",
              { className: re.FilterContainer },
              E.a.createElement(
                Z.a,
                {
                  toolTipContent: Object(U.f)(
                    "#EventModeration_ShowCustomFilter_ttip"
                  ),
                },
                E.a.createElement(P.e, {
                  label: Object(U.f)("#EventModeration_ShowCustomFilter"),
                  checked: n.bUseCustomQuery,
                  onChange: function (e) {
                    (n.bUseCustomQuery = e), t();
                  },
                })
              )
            ),
            E.a.createElement(
              "div",
              { className: re.FilterContainer },
              E.a.createElement(
                "label",
                { htmlFor: "EventPerLoad" },
                Object(U.f)("#EventModeration_PerPageLoad")
              ),
              E.a.createElement(
                "div",
                null,
                E.a.createElement("input", {
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
        de = Object(l.a)(function (e) {
          var n = T.Get(),
            a = e.fnRequireRefetchEvents,
            t = f.d
              .map(function (e) {
                return { value: e, label: Object(v.b)(e) };
              })
              .sort(function (e, t) {
                return e.label.localeCompare(t.label);
              }),
            r = g.a
              .map(function (e) {
                return { value: e, label: e };
              })
              .sort(function (e, t) {
                return e.label.localeCompare(t.label);
              }),
            o = {
              option: function (e) {
                return Object(b.a)(Object(b.a)({}, e), { color: "#444444" });
              },
            };
          return E.a.createElement(
            E.a.Fragment,
            null,
            E.a.createElement(
              "div",
              { className: re.FilterContainer },
              E.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterByTag")
              ),
              E.a.createElement(m.a, {
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
            E.a.createElement(
              "div",
              { className: re.FilterContainer },
              E.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterExcludeByTag")
              ),
              E.a.createElement(m.a, {
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
            E.a.createElement(
              "div",
              { className: re.FilterContainer },
              E.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterToType")
              ),
              E.a.createElement(m.a, {
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
            E.a.createElement(
              "div",
              { className: re.FilterContainer },
              E.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterToDate")
              ),
              E.a.createElement(s, {
                timeFormat: !1,
                onChange: function (e) {
                  if ("string" == typeof e) {
                    var t = oe(e, "M/D/YYYY", !0);
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
                    oe
                      .unix(t.getTime() / 1e3 + 86400)
                      .hour(0)
                      .seconds(0)
                      .minute(0)
                      .unix()
                  );
                },
                inputProps: {
                  placeholder: Object(U.f)("#EventModeration_PickDatee"),
                  className: re.TimeWidth,
                },
              })
            ),
            E.a.createElement(
              "div",
              { className: re.FilterContainer },
              E.a.createElement("input", {
                type: "checkbox",
                id: "VisibilityStart",
                checked: n.bOrderByVisibilityStartTime,
                onChange: function (e) {
                  (n.bOrderByVisibilityStartTime = e.currentTarget.checked),
                    a();
                },
              }),
              E.a.createElement(
                "label",
                { htmlFor: "VisibilityStart" },
                Object(U.f)("#EventModeration_OrderByFirstVisible")
              )
            )
          );
        }),
        ue = Object(l.a)(function (e) {
          var t = e.onClick,
            n = e.event,
            a = e.bSaving,
            r = Object(U.f)("#EventModTile_Moderate_ClearReviewed"),
            o = re.EventModerateClearReview,
            i = !1;
          return (
            (n.BHasTag("mod_reviewed") && !n.BHasTag("mod_require_rereview")) ||
              ((r = Object(U.f)("#EventModTile_Moderate_MarkReviewed")),
              (o = re.EventModerateMarkReview),
              (i = !0)),
            a &&
              ((r = Object(U.f)("#EventModTile_Moderate_Saving")),
              (o = re.EventModerateSaving)),
            E.a.createElement(
              "button",
              {
                className: Object(ee.a)(q.a.Button, re.Button, o),
                onClick: function () {
                  return t(i);
                },
                disabled: a,
              },
              a && E.a.createElement(X.a, { size: "small" }),
              r
            )
          );
        }),
        me = Object(l.a)(function (e) {
          var t = e.onClick,
            n = e.event,
            a = e.bSaving,
            r = n.BHasTag("adult_only_content"),
            o = Object(U.f)(
              r
                ? "#EventModTile_Moderate_RemoveAdultContent"
                : "#EventModTile_Moderate_FlagAdultContent"
            );
          return (
            a && (o = Object(U.f)("#EventModTile_Moderate_Saving")),
            E.a.createElement(
              "button",
              {
                className: Object(ee.a)(q.a.Button, re.Button),
                onClick: function () {
                  return t(!r);
                },
                disabled: a,
              },
              a && E.a.createElement(X.a, { size: "small" }),
              o
            )
          );
        }),
        pe = (function (t) {
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
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(b.d)(e, t),
            (e.prototype.componentDidMount = function () {
              var n = this,
                e = this.props.solrData,
                t = e.unique_id;
              L.c.BHasClanEventModel(t) ||
                L.c
                  .LoadHiddenPartnerEvent(new S.a(e.clan_steamid), t)
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
                  });
            }),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "EventModerationTile component unmounted"
              );
            }),
            (e.prototype.ShowModalEvent = function (e) {
              var t = this.props.solrData.unique_id;
              !this.state.bLoadingEvent &&
                L.c.BHasClanEventModel(t) &&
                this.setState({ bShowAsModal: !0 }),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (e.prototype.HideModalEvent = function () {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.SetAdultContentState = function (e) {
              var t, n, a, r, o;
              this.state.bSavingModeration ||
                ((t = this.props.solrData.unique_id),
                (n = L.c.GetClanEventModel(t)) &&
                  e !== n.BHasTag("adult_only_content") &&
                  ((a = new Array()),
                  (r = new Array()),
                  (o = new k().SetAdultOnlyContentAction(e)),
                  e
                    ? a.push("adult_only_content")
                    : r.push("adult_only_content"),
                  this.UpdateTagsOnEvent(t, a, r, o)));
            }),
            (e.prototype.SetModeratedState = function (e) {
              var t, n, a, r, o;
              this.state.bSavingModeration ||
                ((t = this.props.solrData.unique_id),
                (n = L.c.GetClanEventModel(t)) &&
                  e !==
                    (n.BHasTag("mod_reviewed") &&
                      !n.BHasTag("mod_require_rereview")) &&
                  ((a = new Array()),
                  (r = new Array()),
                  (o = new k().SetReviewAction(e)),
                  e
                    ? (a.push("mod_reviewed"),
                      r.push("mod_require_rereview"),
                      n.BHasTag("mod_require_rereview") &&
                        o.SetReReviewAction(e))
                    : a.push("mod_require_rereview"),
                  this.UpdateTagsOnEvent(t, a, r, o)));
            }),
            (e.prototype.UpdateTagsOnEvent = function (o, i, l, c) {
              var e = this;
              this.state.bSavingModeration ||
                this.setState({ bSavingModeration: !0 }, function () {
                  return Object(b.b)(e, void 0, void 0, function () {
                    var t, n, a, r;
                    return Object(b.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          (t = L.c.GetClanEventModel(o)), (e.label = 1);
                        case 1:
                          return (
                            e.trys.push([1, 3, , 4]),
                            [
                              4,
                              G.Get().UpdateTagsOnPartnerEvent(
                                this.m_cancelSignal,
                                t.clanSteamID,
                                t.AnnouncementGID,
                                i,
                                l,
                                c
                              ),
                            ]
                          );
                        case 2:
                          return (n = e.sent()), (t.vecTags = n), [3, 4];
                        case 3:
                          return (
                            (a = e.sent()),
                            (r = Object(j.a)(a)),
                            console.error(
                              "UpdateTagsOnPartnerEvent " + r.strErrorMsg,
                              r
                            ),
                            [3, 4]
                          );
                        case 4:
                          return this.setState({ bSavingModeration: !1 }), [2];
                      }
                    });
                  });
                });
            }),
            (e.prototype.OnChangeCategory = function (e) {
              var t = this.props.solrData,
                n = L.c.GetClanEventModel(t.unique_id);
              Object(J.d)(
                E.a.createElement(Ee, { eventModel: n }),
                Object(te.m)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function (e) {
              var t = this.props.solrData,
                n = L.c.GetClanEventModel(t.unique_id);
              Object(J.d)(
                E.a.createElement(be, { eventModel: n }),
                Object(te.m)(e)
              );
            }),
            (e.prototype.render = function () {
              var e,
                t,
                n,
                a = this.props.solrData,
                r = a.unique_id,
                o = Number(a.appid),
                i = Object(f.f)(M.d.LANGUAGE),
                l = L.c.GetClanEventModel(r),
                c = null;
              n = l
                ? (this.state.bShowAsModal &&
                    (c = E.a.createElement(
                      K.h,
                      { className: re.StoreHeaderAdjust },
                      E.a.createElement(
                        "div",
                        null,
                        E.a.createElement(H.b, {
                          event: l,
                          fnClose: this.HideModalEvent,
                        })
                      )
                    )),
                  (e = l.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    i,
                    y.c.capsule_main
                  )),
                  (t = l.BImageNeedScreenshotFallback("capsule", i)),
                  0 < e.length
                    ? E.a.createElement(
                        E.a.Fragment,
                        null,
                        E.a.createElement(Y.a, { rgSources: e }),
                        t &&
                          E.a.createElement(
                            "div",
                            { className: re.NoCapsuleFallback },
                            Object(U.f)("#EventModTile_FallbackImageText")
                          )
                      )
                    : E.a.createElement(
                        "div",
                        { className: re.NoCapsule },
                        Object(U.f)("#EventModTile_NoCapsule")
                      ))
                : Object(U.f)("#Loading");
              var s = a.last_modified_date
                  ? Date.parse(a.last_modified_date) / 1e3
                  : 0,
                d = l ? l.type : Number(a.event_type),
                u = new S.a(a.clan_steamid),
                m = o ? "app/" + o : "group/" + u.GetAccountID(),
                p =
                  M.d.STORE_BASE_URL +
                  "news/" +
                  m +
                  "/view/" +
                  a.announcement_gid,
                v = Boolean(l && l.BHasTag("adult_only_content"));
              return E.a.createElement(
                F.a,
                null,
                c,
                E.a.createElement(
                  "div",
                  { className: re.Tile },
                  E.a.createElement(
                    "a",
                    {
                      href: p,
                      className: re.TileCapsule,
                      onClick: this.ShowModalEvent,
                    },
                    n
                  ),
                  E.a.createElement(
                    "div",
                    { className: re.TileDetails },
                    E.a.createElement(
                      "div",
                      { className: re.DetailsLeft },
                      E.a.createElement(
                        "a",
                        {
                          className: re.EventTitle,
                          href: p,
                          onClick: this.ShowModalEvent,
                        },
                        a.event_name
                      ),
                      E.a.createElement(
                        "div",
                        {
                          className: Object(ee.a)(
                            re.TileEventType,
                            1 == d ? re.TileEventOtherType : ""
                          ),
                        },
                        l ? l.GetCategoryAsString() : a.event_type
                      ),
                      v &&
                        E.a.createElement(
                          "div",
                          { className: re.HasAdultContent },
                          Object(U.f)("#EventModTile_HasAdultContent")
                        ),
                      this.state.bLoadingEvent &&
                        E.a.createElement(X.a, {
                          size: "small",
                          string: Object(U.f)("#Loading"),
                        }),
                      E.a.createElement(
                        "div",
                        { className: re.ChannelInfo },
                        E.a.createElement(ve, {
                          appid: o,
                          clanSteamID: new S.a(a.clan_steamid),
                        })
                      )
                    ),
                    E.a.createElement(
                      "div",
                      { className: re.DetailsMiddle },
                      l &&
                        E.a.createElement(
                          E.a.Fragment,
                          null,
                          E.a.createElement(ue, {
                            onClick: this.SetModeratedState,
                            bSaving: this.state.bSavingModeration,
                            event: l,
                          }),
                          E.a.createElement(
                            "button",
                            {
                              className: Object(ee.a)(q.a.Button, re.Button),
                              onClick: this.OnChangeCategory,
                            },
                            Object(U.f)("#EventModTile_ChangeEventType")
                          ),
                          E.a.createElement(me, {
                            onClick: this.SetAdultContentState,
                            bSaving: this.state.bSavingModeration,
                            event: l,
                          }),
                          Boolean(l.BHasTag("halloween2019candidate")) &&
                            E.a.createElement(
                              "button",
                              {
                                className: Object(ee.a)(q.a.Button),
                                onClick: this.OnUpdateSeasonalTag,
                              },
                              Object(U.f)("#EventModTile_SeasonalTag")
                            ),
                          E.a.createElement(D, { eventModel: l })
                        )
                    ),
                    E.a.createElement(
                      "div",
                      { className: re.DetailsRight },
                      E.a.createElement(
                        "div",
                        { className: re.EventTimingBlock },
                        Boolean(s) &&
                          E.a.createElement(
                            "div",
                            { className: re.LastUpdateTime },
                            Object(U.f)(
                              "#EventModTile_LastModified",
                              Object(U.k)(s) + "@" + Object(U.m)(s)
                            )
                          ),
                        l &&
                          E.a.createElement(W.b, {
                            event: l,
                            stylesmodule: re,
                            nOverrideEndTime: l.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: l.GetStartTimeAndDateUnixSeconds(),
                          })
                      ),
                      l &&
                        E.a.createElement(he, {
                          event: l,
                          hidden: a.hidden,
                          published: a.published,
                        })
                    )
                  )
                )
              );
            }),
            Object(b.c)([ne.a], e.prototype, "ShowModalEvent", null),
            Object(b.c)([ne.a], e.prototype, "HideModalEvent", null),
            Object(b.c)([ne.a], e.prototype, "SetAdultContentState", null),
            Object(b.c)([ne.a], e.prototype, "SetModeratedState", null),
            Object(b.c)([ne.a], e.prototype, "OnChangeCategory", null),
            Object(b.c)([ne.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(b.c)([l.a], e))
          );
        })(E.a.Component),
        ve =
          (E.a.Component,
          Object(l.a)(function (e) {
            var t = Object(h.useState)(!B.a.Get().BHasApp(e.appid)),
              n = t[0],
              o = t[1],
              i = E.a.useRef(_.a.CancelToken.source());
            if (
              (Object(h.useEffect)(function () {
                return function () {
                  return i.current.cancel(
                    "EventModerationChannelInfo component unmounted"
                  );
                };
              }, []),
              Object(h.useEffect)(
                function () {
                  var a = e.appid,
                    r = e.clanSteamID;
                  ((a && !B.a.Get().BHasApp(a)) ||
                    (r && !A.a.BHasClanInfoLoaded(r))) &&
                    Object(b.b)(void 0, void 0, void 0, function () {
                      var t, n;
                      return Object(b.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return (
                              e.trys.push([0, 2, 3, 4]),
                              [
                                4,
                                Promise.all([
                                  B.a
                                    .Get()
                                    .QueueAppRequest(a, {
                                      include_assets: !0,
                                      include_release: !0,
                                    }),
                                  r
                                    ? A.a.LoadClanInfoForClanSteamID(r)
                                    : void 0,
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
              return E.a.createElement(X.a, {
                size: "small",
                string: Object(U.f)("#EventModTile_AppInfoLoading"),
              });
            var a = e.appid,
              r = e.clanSteamID;
            if (a) {
              var l = B.a.Get().GetApp(a);
              return l
                ? E.a.createElement(
                    "div",
                    { className: re.TileAppInfo },
                    E.a.createElement(
                      "div",
                      { className: re.TileAppInfoTitle },
                      E.a.createElement(
                        Q.b,
                        { type: "app", id: l.GetAppID() },
                        E.a.createElement(
                          $.a,
                          { href: Object(ae.f)(l.GetStorePageURL()) },
                          E.a.createElement("img", {
                            className: re.TileAppInfoImage,
                            src: l.assets.GetMainCapsuleURL(),
                          })
                        )
                      ),
                      E.a.createElement(
                        Q.b,
                        { type: "app", id: l.GetAppID() },
                        E.a.createElement(
                          $.a,
                          { href: Object(ae.f)(l.GetStorePageURL()) },
                          E.a.createElement("div", null, l.GetName())
                        )
                      )
                    )
                  )
                : null;
            }
            if (r) {
              var c = r.GetAccountID(),
                s = A.a.GetClanInfoByClanAccountID(c);
              if (s && s.is_curator)
                return E.a.createElement(
                  "div",
                  { className: re.TileAppInfo },
                  E.a.createElement(
                    "div",
                    { className: re.TileAppInfoTitle },
                    E.a.createElement(
                      $.a,
                      {
                        href: Object(ae.f)(
                          M.d.STORE_BASE_URL + "/curator/" + c + "/"
                        ),
                      },
                      E.a.createElement("img", {
                        className: re.TileAppInfoImage,
                        src: s.avatar_full_url,
                      }),
                      E.a.createElement(
                        "div",
                        null,
                        Object(U.f)("#EventModTile_CuratorName", s.group_name)
                      )
                    )
                  )
                );
            }
            return null;
          })),
        he = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(b.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.event,
                n = e.hidden,
                a = e.published,
                r = n
                  ? a
                    ? Object(U.f)("#EVentModTile_State_Staged")
                    : Object(U.f)("#EVentModTile_State_Draft")
                  : Object(U.f)("#EVentModTile_State_Published"),
                o = Object(g.d)(t),
                i = Object(g.c)(t),
                l = Object(g.e)(t),
                c =
                  l && !t.BHasTag("hide_store") && !t.BHasTag("mod_hide_store"),
                s =
                  o &&
                  !t.BHasTag("hide_library_overview") &&
                  !t.BHasTag("mod_hide_library_overview"),
                d =
                  i &&
                  !t.BHasTag("hide_library_detail") &&
                  !t.BHasTag("mod_hide_library_detail");
              return E.a.createElement(
                "div",
                { className: re.VisibiltyCtn },
                E.a.createElement("div", { className: re.TileTitle }, r),
                E.a.createElement(
                  "div",
                  null,
                  Object(U.f)(
                    "#EventModTile_Store_Visibility",
                    c
                      ? Object(U.f)("#WriteReview_Dialog_Yes")
                      : Object(U.f)("#WriteReview_Dialog_No"),
                    c
                      ? ""
                      : l
                      ? Object(U.f)(
                          "#EventModTime_Hidden_EventType",
                          t.GetEventTypeAsString()
                        )
                      : t.BHasTag("hide_store")
                      ? Object(U.f)("#EventModTime_Hidden_OptOut")
                      : Object(U.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                E.a.createElement(
                  "div",
                  null,
                  Object(U.f)(
                    "#EventModTile_LibraryHome_Visibility",
                    s
                      ? Object(U.f)("#WriteReview_Dialog_Yes")
                      : Object(U.f)("#WriteReview_Dialog_No"),
                    s
                      ? ""
                      : l
                      ? Object(U.f)(
                          "#EventModTime_Hidden_EventType",
                          t.GetEventTypeAsString()
                        )
                      : t.BHasTag("hide_library_overview")
                      ? Object(U.f)("#EventModTime_Hidden_OptOut")
                      : Object(U.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                E.a.createElement(
                  "div",
                  null,
                  Object(U.f)(
                    "#EventModTile_LibraryDetail_Visibility",
                    d
                      ? Object(U.f)("#WriteReview_Dialog_Yes")
                      : Object(U.f)("#WriteReview_Dialog_No"),
                    d
                      ? ""
                      : l
                      ? Object(U.f)(
                          "#EventModTime_Hidden_EventType",
                          t.GetEventTypeAsString()
                        )
                      : t.BHasTag("hide_library_detail")
                      ? Object(U.f)("#EventModTime_Hidden_OptOut")
                      : Object(U.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                t.BHasTag("enable_steam_china") &&
                  E.a.createElement(
                    "div",
                    null,
                    Object(U.f)("#EventModTile_SteamChina_Visibility")
                  ),
                t.BHasTag("disable_steam_global") &&
                  E.a.createElement(
                    "div",
                    null,
                    Object(U.f)("#EventModTile_SteamGlobal_Hidden")
                  )
              );
            }),
            (t = Object(b.c)([l.a], t))
          );
        })(E.a.Component),
        Ee = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(v.b)(34),
                  value: { eventType: 34 },
                },
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(b.d)(e, t),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.ChangeCategoryForEvent = function () {
              return Object(b.b)(this, void 0, void 0, function () {
                var t, n, a, r, o, i, l, c, s, d;
                return Object(b.e)(this, function (e) {
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
                        (i = g.o),
                        (l = []),
                        r.value.tags &&
                          r.value.tags.forEach(function (e) {
                            l.push(e);
                            var t = new k()
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
                            new k().SetActionChangeEvent(o)
                          ),
                        ]
                      );
                    case 3:
                      return (
                        (c = e.sent()),
                        Object(p.G)(function () {
                          (n.type = o), (n.vecTags = c);
                        }),
                        this.setState({ bUpdating: !1 }, a),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (s = e.sent()),
                        (d = Object(j.a)(s)),
                        console.error(
                          "ChangeEventTypeDialog error " + d.strErrorMsg,
                          d
                        ),
                        this.setState({
                          bUpdating: !1,
                          strErrorMsg: d.strErrorMsg,
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
                r = f.d
                  .filter(function (e) {
                    return 1 == e || 4 == e || 9 <= e;
                  })
                  .map(function (e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(v.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(U.f)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"],
                  },
                }),
                r.push({
                  label: Object(U.f)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] },
                }),
                r.unshift({
                  value: { eventType: 15, tags: ["halloween"] },
                  label: Object(U.f)("#EventEditor_Category_DLC_Halloween"),
                }),
                r.unshift({
                  value: { eventType: 22, tags: ["halloween"] },
                  label: Object(U.f)("#PartnerEvent_22"),
                }),
                r.unshift({
                  value: { eventType: 23, tags: ["halloween"] },
                  label: Object(U.f)("#PartnerEvent_23"),
                }),
                r.unshift({
                  value: { eventType: 24, tags: ["halloween"] },
                  label: Object(U.f)("#PartnerEvent_24"),
                }),
                r.unshift({
                  value: { eventType: 35, tags: ["halloween"] },
                  label: Object(U.f)("#PartnerEvent_35"),
                }),
                E.a.createElement(
                  K.c,
                  {
                    strTitle: Object(U.f)("#EventModTile_ChangeEventType"),
                    strDescription: Object(U.f)(
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
                  E.a.createElement(
                    E.a.Fragment,
                    null,
                    E.a.createElement(
                      "div",
                      { className: re.CategoryChangeDialog },
                      E.a.createElement("br", null),
                      this.state.bUpdating &&
                        E.a.createElement(X.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        E.a.createElement(
                          "div",
                          null,
                          Object(U.f)("#Chat_Settings_Error_ServerError"),
                          E.a.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      E.a.createElement(m.a, {
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
            Object(b.c)([ne.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(b.c)([ne.a], e.prototype, "OnChangeSelection", null),
            (e = Object(b.c)([l.a], e))
          );
        })(E.a.Component),
        be = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                bAccept: e.props.eventModel.BHasTag("halloween2019"),
                bHorror: e.props.eventModel.BHasTag("horror"),
                bCute: e.props.eventModel.BHasTag("cute"),
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(b.d)(e, t),
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
              return Object(b.b)(this, void 0, void 0, function () {
                var t, n, a, r, o, i;
                return Object(b.e)(this, function (e) {
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
                            new k().SetUpdateSeasonalTags(
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
              return E.a.createElement(
                K.c,
                {
                  strTitle: Object(U.f)("#EventModTile_SeasonalTag"),
                  onCancel: n,
                  onOK: function () {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  },
                },
                E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(
                    "div",
                    { className: re.CategoryChangeDialog },
                    E.a.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance,
                    }),
                    E.a.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(U.f)("#EventModTile_SeasonalTag_Desc")
                    ),
                    E.a.createElement(
                      "div",
                      null,
                      Object(U.f)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    E.a.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror,
                    }),
                    E.a.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    E.a.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute,
                    }),
                    E.a.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      E.a.createElement(X.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      E.a.createElement(
                        "div",
                        null,
                        Object(U.f)("#Chat_Settings_Error_ServerError"),
                        E.a.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(b.c)([ne.a], e.prototype, "ChangeAcceptance", null),
            Object(b.c)([ne.a], e.prototype, "ChangeHorror", null),
            Object(b.c)([ne.a], e.prototype, "ChangeCute", null),
            Object(b.c)([ne.a], e.prototype, "ApplyAction", null),
            e
          );
        })(E.a.Component),
        _e = n("5eAM"),
        fe = n("ir+G"),
        ge = n("gOcu"),
        Se = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoadingEvent: !0 }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(b.d)(e, t),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "SteamGameFestivalStoreDebug to unload "
              );
            }),
            (e.prototype.componentDidMount = function () {
              return Object(b.b)(this, void 0, void 0, function () {
                var t, n, a, r, o, i, l, c, s;
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = this.props),
                      (n = t.clanEventGID),
                      (a = t.clanAccountID),
                      console.log(n, a, typeof n, typeof a),
                      !n || L.c.BHasClanEventModel(n))
                        ? [3, 8]
                        : ((r = S.a.InitFromClanID(Number.parseInt(a))),
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
                          (c = new Map()),
                          o.jsondata.sale_sections.forEach(function (e) {
                            "tabs" == e.section_type &&
                              e.tabs.forEach(function (e) {
                                e.capsules.forEach(function (e) {
                                  "game" == e.type ||
                                  "application" == e.type ||
                                  "software" == e.type
                                    ? c.has(e.id) ||
                                      (c.set(e.id, !0), i.push(e.id))
                                    : c.has(e.id) ||
                                      (c.set(e.id, !0), l.push(e.id));
                                });
                              });
                          }),
                          [4, _e.a.LoadAppLinkInfo(i)])
                        : [3, 6];
                    case 2:
                      return (
                        e.sent(),
                        this.setState({
                          rgAppIDs: i,
                          rgUnknownTypeAppIDs: l,
                          bLoadingApps: !1,
                        }),
                        [4, fe.a.BatchLoadAppCapsules(i)]
                      );
                    case 3:
                      return (
                        e.sent(),
                        this.setState({ bLoadingAssociatedDemoInfo: !1 }),
                        [4, ge.a.Get().LoadAppIDsBatch(i, this.m_cancelSignal)]
                      );
                    case 4:
                      return (
                        e.sent(),
                        (s = new Array()),
                        ge.a
                          .Get()
                          .GetAllDemoInfo()
                          .forEach(function (e) {
                            return s.push(e.demo_appid);
                          }),
                        [4, _e.a.LoadAppLinkInfo(s)]
                      );
                    case 5:
                      return (
                        e.sent(),
                        this.setState({ bLoadingDemos: !1, rgDemoIDs: s }),
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
                return h.createElement(X.a, {
                  string:
                    Object(U.f)("#Loading") +
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
                return h.createElement("div", null, " Failed to load event");
              var e = this.state.event;
              if (!e.jsondata.bSaleEnabled)
                return h.createElement("div", null, "Not a sale evnet");
              var a = new Map();
              this.state.rgDemoIDs.forEach(function (e) {
                return a.set(e, !0);
              });
              var n = new Array(),
                r = new Array();
              _e.a.GetMissingAppIDs().forEach(function (e, t) {
                n.push(
                  h.createElement(
                    "div",
                    { key: "missing: " + t },
                    h.createElement(
                      "a",
                      {
                        href: M.d.STORE_BASE_URL + "app/" + t + "/?beta=1",
                        target: "_blank",
                      },
                      t
                    )
                  )
                ),
                  r.push(t);
              });
              var o = new Array();
              _e.a.GetAllLoadedAppLinks().forEach(function (e, t) {
                var n;
                a.has(t) ||
                  ge.a.Get().BHasDemoAppID(t) ||
                  ((n = _e.a.GetAppLinkInfo(t)),
                  o.push(
                    h.createElement(
                      "div",
                      { key: "missingdemo_" + t },
                      "demo" == n.type &&
                        h.createElement(
                          "b",
                          null,
                          "--Error: Sale Page has Demo AppID, based game -- "
                        ),
                      n.name,
                      " (",
                      t,
                      ")",
                      h.createElement(
                        "a",
                        {
                          href: Object(ae.f)(
                            M.d.STORE_BASE_URL + "app/" + t + "/?beta=0"
                          ),
                          target: "_blank",
                        },
                        "Store Page"
                      ),
                      " ",
                      h.createElement(
                        "a",
                        {
                          href: M.d.PARTNER_BASE_URL + "apps/landing/" + t,
                          target: "_blank",
                        },
                        "App Landing Page"
                      )
                    )
                  ));
              });
              var i = 0,
                l = 0,
                c = new Array(),
                s = 0,
                d = 0,
                u = 0,
                m = 0;
              fe.a.GetAllAppInfos().forEach(function (e, t) {
                var n,
                  a = !1;
                e.BIsLoaded() &&
                  ge.a.Get().BHasDemoAppID(t) &&
                  ((n = ge.a.Get().GetDemoEventInfo(t)),
                  _e.a.GetAppLinkInfo(n.demo_appid).coming_soon
                    ? ((s += 1), (a = !0))
                    : (d += 1)),
                  e.BIsLoaded() && e.GetAppStoreData().BHasDemoAppID()
                    ? ((i += 1), a && (u += 1))
                    : e.BIsLoaded() && ge.a.Get().BHasDemoAppID(t)
                    ? ((l += 1), a || (m += 1))
                    : -1 ==
                        r.findIndex(function (e) {
                          return e == t;
                        }) && c.push(e.GetAppStoreData());
              });
              var t = new Array();
              c.forEach(function (e) {
                t.push(
                  h.createElement(
                    "div",
                    { key: "missing_capps" + e.appid },
                    h.createElement(
                      "a",
                      {
                        href:
                          M.d.STORE_BASE_URL + "app/" + e.appid + "/?beta=1",
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
              var p = 0;
              return (
                _e.a.GetAllLoadedAppLinks().forEach(function (e) {
                  "demo" != e.type && (p += 1);
                }),
                h.createElement(
                  F.a,
                  null,
                  h.createElement(
                    "h1",
                    null,
                    e.GetNameWithFallback(Object(f.f)(M.d.LANGUAGE))
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement("b", null, "Unique AppIDs:"),
                    " ",
                    this.state.rgAppIDs.length,
                    " "
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement(
                      "b",
                      null,
                      "Visible Apps in ",
                      M.d.COUNTRY,
                      ":"
                    ),
                    " ",
                    p
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement("b", null, "Unknown AppID types:"),
                    " ",
                    this.state.rgUnknownTypeAppIDs.length
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement("b", null, "Missing AppIDs:"),
                    " ",
                    _e.a.GetNumMissingAppLinks(),
                    " "
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement("b", null, "Demo via DemoStore:"),
                    " ",
                    ge.a.Get().GetNumDemos()
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement(
                      "b",
                      null,
                      "Visible apps missing demo store:"
                    ),
                    " ",
                    o.length
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement("b", null, "CApplications Loaded:"),
                    " ",
                    fe.a.GetNumAppLinkLoaded(),
                    " "
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement(
                      "b",
                      null,
                      "CApplication with Associated Demos:"
                    ),
                    " ",
                    i
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement(
                      "b",
                      null,
                      "  Associated with store page but not released: "
                    ),
                    " ",
                    u
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement(
                      "b",
                      null,
                      "CApplication with demo without association:"
                    ),
                    " ",
                    l
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement(
                      "b",
                      null,
                      "  Released but not associated with store page: "
                    ),
                    " ",
                    m
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement("b", null, "CApplication missing:"),
                    " ",
                    fe.a.GetMissingAppIDs().size
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement(
                      "b",
                      null,
                      "CApplication without demo store and demo associations:"
                    ),
                    " ",
                    c.length
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement("b", null, "Released Demo: "),
                    d
                  ),
                  h.createElement(
                    "div",
                    null,
                    h.createElement("b", null, "Unreleased Demo: "),
                    s
                  ),
                  h.createElement("hr", null),
                  h.createElement("h2", null, "Missing Appids:"),
                  n,
                  h.createElement(
                    "h2",
                    null,
                    "Missing BOTH demo list and associated demo on product page:"
                  ),
                  t,
                  h.createElement(
                    "h2",
                    null,
                    "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
                  ),
                  o
                )
              );
            }),
            (e = Object(b.c)([l.a], e))
          );
        })(h.Component),
        ye = new ((function () {
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
            Object(b.c)([p.C], e.prototype, "m_backfill", void 0),
            Object(b.c)([p.C], e.prototype, "m_mapEventGIDProcessed", void 0),
            Object(b.c)([p.C], e.prototype, "m_bBackfillInProgress", void 0),
            Object(b.c)([p.C], e.prototype, "m_nProcessed", void 0),
            Object(b.c)([p.C], e.prototype, "m_nSuccesses", void 0),
            Object(b.c)([p.C], e.prototype, "m_nFailures", void 0),
            Object(b.c)([p.C], e.prototype, "m_nWarning", void 0),
            Object(b.c)([p.C], e.prototype, "m_nSkipped", void 0),
            Object(b.c)([p.k], e.prototype, "StartBackfill", null),
            Object(b.c)([p.k], e.prototype, "CompleteBackfill", null),
            Object(b.c)([p.k], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        Ae = n("vNkc"),
        Oe = n("mB/g"),
        Ce = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = _.a.CancelToken.source()),
              (e.m_nImageID = 0),
              (e.m_mapArtworkResizeSuccess = new Map()),
              (e.state = { eBackfillState: void 0 }),
              e
            );
          }
          return (
            Object(b.d)(e, t),
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
                Object(b.b)(this, void 0, void 0, function () {
                  var t, n;
                  return Object(b.e)(this, function (e) {
                    return (
                      (t = y.a.GetExtensionTypeFromURL(r)),
                      (n = y.a.GetHashFromHashAndExt(r) + o),
                      [
                        2,
                        y.e.AsyncGetImageResolution(
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
                    ye.CloseProgress(e, a))
                  : ye.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function (u, m, p, v, h) {
              return Object(b.b)(this, void 0, void 0, function () {
                var t,
                  s,
                  n,
                  d = this;
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = function (t) {
                        var n, a, r, o, i, l, c;
                        return Object(b.e)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return u[t] && 0 < u[t].length
                                ? ((n = u[t]),
                                  (a = y.a.GetExtensionTypeFromURL(n)),
                                  (r = new S.a(m.clan_steamid)),
                                  a
                                    ? [
                                        4,
                                        s
                                          .GetImageInfo(r, n)
                                          .catch(function (e) {
                                            return (
                                              d.HandleErrorFatal(
                                                null,
                                                e,
                                                "GetImageInfo Original",
                                                p
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
                                Object(g.i)(o.width, o.height, v)
                                ? [
                                    4,
                                    s.GetImageInfo(r, n, h).catch(function (e) {
                                      return (
                                        d.HandleErrorFatal(
                                          null,
                                          e,
                                          "GetImageInfo Resize",
                                          p
                                        ),
                                        { height: 0, width: 0, success: 2 }
                                      );
                                    }),
                                  ]
                                : [3, 6];
                            case 2:
                              return 1 != e.sent().success
                                ? [3, 3]
                                : ((p.bAlreadyProcessed = !0), [3, 5]);
                            case 3:
                              return (
                                (p.bProcessing = !0),
                                (i = y.a.GetHashFromHashAndExt(n)),
                                (l = y.a.GetExtensionStringFromHashAndExt(n)),
                                (c = y.d.GetResizeDimension(v)),
                                [
                                  4,
                                  y.b
                                    .SendResizeRequest(
                                      s.m_cancelSignal,
                                      r,
                                      i,
                                      l,
                                      c
                                    )
                                    .then(function (e) {
                                      console.log(
                                        "success on the resize request"
                                      ),
                                        e == c.length
                                          ? ((p.bSucceeded = !0),
                                            d.m_mapArtworkResizeSuccess.set(
                                              v,
                                              d.m_mapArtworkResizeSuccess.get(
                                                v
                                              ) + 1
                                            ))
                                          : ((p.bFailed = !0),
                                            (p.strMessage =
                                              "Did not resize all: " +
                                              v +
                                              " " +
                                              e +
                                              " / " +
                                              c.length));
                                    })
                                    .catch(function (e) {
                                      p.bFailed = !0;
                                      var t = Object(j.a)(e);
                                      (p.strMessage = t.strErrorMsg),
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
                              (p.bSkipped = !0), (e.label = 7);
                            case 7:
                              return [3, 9];
                            case 8:
                              (p.bSkipped = !0), (e.label = 9);
                            case 9:
                              return [2];
                          }
                        });
                      }),
                        (s = this),
                        (n = 0),
                        (e.label = 1);
                    case 1:
                      return n < u.length && n < 30 ? [5, t(n)] : [3, 4];
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
              return Object(b.b)(this, void 0, void 0, function () {
                var t,
                  i,
                  n,
                  l,
                  a,
                  c = this;
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      ye.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return ye.BIsBackkFillInProgress()
                        ? [
                            4,
                            R.Get()
                              .LoadPartnerEventForQueryIncremental(
                                this.m_cancelSignal,
                                t,
                                25
                              )
                              .catch(function (e) {
                                return c.HandleErrorFatal(
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
                          ye.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (t += i.length),
                        (n = function (t) {
                          var n, a, r, o;
                          return Object(b.e)(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  (n = i[t]),
                                  (a = ye.CreateOrGetBackfillProgess(
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
                                            c.HandleErrorFatal(
                                              n.announcement_gid,
                                              e,
                                              "LoadPartnerEventFromAnnoucementGID",
                                              a
                                            );
                                          }),
                                      ]
                                    : ((a.bSkipped = !0),
                                      (a.bWarning = !0),
                                      ye.CloseProgress(n.unique_id, a),
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
                                      ye.CloseProgress(n.unique_id, a),
                                      [2, "continue"])
                                    : ((a.bAnalysing = !0),
                                      l.setState({
                                        strInfo:
                                          "Processing " +
                                          ye.GetBackfillGIDs().length +
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
                                                y.c.capsule_main
                                              )
                                              .catch(function (e) {
                                                return c.HandleErrorFatal(
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
                                    ye.CloseProgress(n.unique_id, a),
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
                                          y.c.background_mini
                                        )
                                        .catch(function (e) {
                                          return c.HandleErrorFatal(
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
                                          y.c.spotlight_main
                                        )
                                        .catch(function (e) {
                                          return c.HandleErrorFatal(
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
                                  ye.CloseProgress(n.unique_id, a),
                                  ye.BIsBackkFillInProgress()
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
                      return 5e3 < ye.m_nFailures
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
                0 < ye.m_nFailures &&
                  ye.GetBackfillGIDs().forEach(function (e) {
                    var t,
                      n = ye.GetEventBackfillProgress().get(e);
                    n &&
                      n.bFailed &&
                      (t = L.c.GetClanEventModel(e)) &&
                      a.push(
                        h.createElement(
                          "div",
                          { key: e },
                          h.createElement(
                            Oe.c,
                            {
                              eventModel: t,
                              route: Oe.a.k_eView,
                              openNewWindow: !0,
                            },
                            t.GetNameWithFallback(0)
                          ),
                          h.createElement(
                            "div",
                            { className: Ae.Error },
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
                  h.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  h.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  h.createElement(
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
              return h.createElement(
                "div",
                null,
                h.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  h.createElement(
                    "div",
                    null,
                    h.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                h.createElement(
                  "div",
                  null,
                  h.createElement(
                    "button",
                    {
                      onClick: function () {
                        return ye.CompleteBackfill("resize_image");
                      },
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  h.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                h.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  ye.m_nProcessed
                ),
                h.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  ye.m_nSuccesses
                ),
                h.createElement("div", null, "Events Warning: ", ye.m_nWarning),
                h.createElement("div", null, "Events Failed: ", ye.m_nFailures),
                h.createElement("div", null, "Events Skipped: ", ye.m_nSkipped),
                0 < e.length &&
                  h.createElement(
                    h.Fragment,
                    null,
                    h.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  h.createElement(
                    "div",
                    null,
                    h.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  h.createElement(X.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress",
                  })
              );
            }),
            Object(b.c)([ne.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(b.c)([ne.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(b.c)([l.a], e))
          );
        })(h.Component),
        Te = n("6AJf"),
        je = n("9w6b"),
        Me = n("mgoM"),
        Ie = n("BVKn"),
        De = n("YWVM"),
        we = n("r3N9"),
        ke = n("SdTr"),
        Ge = n("YNty"),
        Re = n("6eA3"),
        Le = n.n(Re),
        Be = n("A8Lc"),
        Pe = n.n(Be),
        Fe = (function () {
          function e() {
            (this.m_objApprovalPriviledge = null),
              (this.m_LoadingPriviledgePromise = null);
            var e = Object(M.h)("sc_app_privildge", "application_config");
            this.ValidateStoreDefault(e)
              ? ("dev" === M.d.WEB_UNIVERSE &&
                  console.log(
                    "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                      e.bHasAccess
                  ),
                (this.m_objApprovalPriviledge = e),
                (this.m_LoadingPriviledgePromise = null))
              : (M.k.logged_in && M.d.EREALM === f.e.k_ESteamRealmChina) ||
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
              return Object(b.b)(this, void 0, void 0, function () {
                return Object(b.e)(this, function (e) {
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
              return Object(b.b)(this, void 0, void 0, function () {
                var t, n, a, r;
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t =
                        M.d.STORE_BASE_URL +
                        "events_admin/ajaxgetscapprovalpriviledge"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, _.a.get(t, { withCredentials: !0 })]
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
            Object(b.c)([p.C], e.prototype, "m_objApprovalPriviledge", void 0),
            e
          );
        })(),
        He = Object(l.a)(function (e) {
          var t = h.useState(null),
            n = t[0],
            o = t[1],
            a = e.eventModel,
            i = a.clanSteamID.GetAccountID();
          h.useEffect(
            function () {
              var r = _.a.CancelToken.source();
              return (
                Object(b.b)(void 0, void 0, void 0, function () {
                  var t, n, a;
                  return Object(b.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = S.a.InitFromClanID(i)),
                          [4, je.a.Get().LoadSingleAppEventPermissions(t)]
                        );
                      case 1:
                        return (
                          (n = e.sent()),
                          [4, Fe.Get().HintLoadAppApprovalPriviledge()]
                        );
                      case 2:
                        return (
                          (a = e.sent()),
                          r.token.reason ||
                            o(M.k.is_support || n.can_edit || a.bHasAccess),
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
          var r = S.a.InitFromClanID(i);
          return M.k.is_support ||
            je.a.Get().GetPartnerEventPermissions(r).can_edit
            ? h.createElement(De.a, {
                eventModel: a,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: n
                  ? [
                      h.createElement(Ne, {
                        key: "removesteamchina",
                        eventModel: a,
                      }),
                    ]
                  : void 0,
              })
            : Fe.Get().BHasSteamChinaAppApprovalPriviledge()
            ? h.createElement(
                "div",
                { className: Re.DisplayAdminPanel },
                h.createElement(
                  "span",
                  { className: Re.DisplayAdminPanel_Title },
                  Object(U.f)("#EventDisplay_Admin_Title")
                ),
                h.createElement(Ne, { key: "removesteamchina", eventModel: a })
              )
            : null;
        }),
        Ne = function (m) {
          var p = m.eventModel;
          return h.createElement(
            "div",
            {
              className: Object(ee.a)(
                V.Button,
                Re.AdminButton,
                V.ValveOnlyBackground
              ),
              onClick: function (e) {
                var t = !1;
                Object(J.d)(
                  h.createElement(
                    K.c,
                    {
                      strTitle: Object(U.f)(
                        "#EventAdmin_Moderation_HideEventInSC"
                      ),
                      strDescription: Object(U.f)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc"
                      ),
                      bDestructiveWarning: !0,
                      closeModal: m.closeModal,
                      onOK: function () {
                        (t = !0),
                          Object(b.b)(void 0, void 0, void 0, function () {
                            var t, n, a, r, o, i, l, c, s, d, u;
                            return Object(b.e)(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  (t = new URLSearchParams()).append(
                                    "sessionid",
                                    M.d.SESSIONID
                                  ),
                                    t.append(
                                      "clan_accountid",
                                      "" + p.clanSteamID.GetAccountID()
                                    ),
                                    t.append("gid_clan_event", "" + p.GID),
                                    (n = !1),
                                    (a = 0),
                                    (e.label = 1);
                                case 1:
                                  return (
                                    e.trys.push([1, 3, , 4]),
                                    (r =
                                      M.d.STORE_BASE_URL +
                                      "/events_admin/ajaxhidefromsteamchina"),
                                    [4, _.a.post(r, t, { withCredentials: !0 })]
                                  );
                                case 2:
                                  return (
                                    (o = e.sent()),
                                    (n =
                                      1 ==
                                        (null ===
                                          (c = null == o ? void 0 : o.data) ||
                                        void 0 === c
                                          ? void 0
                                          : c.success) ||
                                      29 ==
                                        (null ===
                                          (s = null == o ? void 0 : o.data) ||
                                        void 0 === s
                                          ? void 0
                                          : s.success)),
                                    29 ==
                                      (null ===
                                        (d = null == o ? void 0 : o.data) ||
                                      void 0 === d
                                        ? void 0
                                        : d.success) &&
                                      console.warn(
                                        "RemoveEventFromSteamChinaButton: we receive duplicate request " +
                                          p.clanSteamID.GetAccountID() +
                                          " : " +
                                          p.GID +
                                          "; event is still removed from SC"
                                      ),
                                    (a =
                                      null ===
                                        (u = null == o ? void 0 : o.data) ||
                                      void 0 === u
                                        ? void 0
                                        : u.success),
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
                                    m.closeModal && m.closeModal(),
                                    Object(J.d)(
                                      n
                                        ? h.createElement(
                                            K.c,
                                            { bAlertDialog: !0 },
                                            Object(U.f)(
                                              "#EventDisplay_Share_Success"
                                            )
                                          )
                                        : h.createElement(
                                            K.e,
                                            null,
                                            Object(U.f)(
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
                      h.createElement(X.a, {
                        size: "medium",
                        position: "center",
                      })
                  ),
                  Object(te.m)(e)
                );
              },
            },
            Object(U.f)("#EventAdmin_Moderation_HideEventInSC")
          );
        },
        Ue = Ie.a.Get();
      var xe = Object(l.a)(function (e) {
          function n(e, t) {
            t.token.reason ||
              (d(e),
              (function (e) {
                var t, n, a;
                e && e.appid
                  ? (n =
                      (t = fe.a
                        .GetStoreCapsuleInfo(e.appid)
                        .GetAppStoreData()) && t.title)
                  : e &&
                    e.clanSteamID &&
                    (n =
                      (a = A.a.GetClanInfoByClanAccountID(
                        e.clanSteamID.GetAccountID()
                      )) && a.group_name);
                var r,
                  o = e && e.GetNameWithFallback(Object(Me.g)(M.d.LANGUAGE));
                e &&
                  n &&
                  o &&
                  ((r = Object(U.f)(
                    "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                    n,
                    o
                  )),
                  document.title != r && (document.title = r)),
                  document.body.classList.contains("events_hub") &&
                    document.body.classList.remove("events_hub");
              })(e));
          }
          function a(e) {
            var t = Object(j.a)(e);
            console.error("StoreEventDetailView failed " + t.strErrorMsg, t),
              p(!0);
          }
          var t = e.bInfiniteScroll,
            r = e.event_gid,
            o = e.announcement_gid,
            i = e.clansteamid,
            l = e.appid,
            c = Object(h.useState)(r ? Ue.GetClanEventModel(r) : void 0),
            s = c[0],
            d = c[1],
            u = Object(h.useState)(!1),
            m = u[0],
            p = u[1];
          if (
            (Object(h.useEffect)(
              function () {
                var t = _.a.CancelToken.source();
                return (
                  s ||
                    (r && !Ue.GetClanEventModel(r)
                      ? Ue.LoadPartnerEventGeneric(i, l, r, void 0, 0)
                          .then(function (e) {
                            return n(e, t);
                          })
                          .catch(function () {
                            t.token.reason ||
                              Ue.LoadPartnerEventGeneric(i, l, void 0, r, 0)
                                .then(function (e) {
                                  return n(e, t);
                                })
                                .catch(a);
                          })
                      : o &&
                        !Ue.GetClanEventGIDFromAnnouncementGID(o) &&
                        Ue.LoadPartnerEventGeneric(i, l, void 0, o, 0)
                          .then(function (e) {
                            return n(e, t);
                          })
                          .catch(a)),
                  function () {
                    t.cancel("StoreEventDetailView: unmounting");
                  }
                );
              },
              [r, i, l, o, s]
            ),
            !m && s)
          )
            return t
              ? E.a.createElement(
                  F.a,
                  null,
                  E.a.createElement(we.a, {
                    appid: s.appid,
                    trackingLocation: 7,
                    announcementGID: s.GetAnnouncementGID(),
                    partnerEventStore: Ue,
                    eventModel: s,
                    showAppHeader: !0,
                    closeModal: function () {
                      return e.history.push(
                        Object(Oe.d)(s, Oe.a.k_eStoreNewsHub, "allowRelative")
                      );
                    },
                  })
                )
              : E.a.createElement(
                  F.a,
                  null,
                  E.a.createElement(Ge.c, {
                    lang: Object(Me.g)(M.d.LANGUAGE),
                    partnerEventStore: Ue,
                    event: s,
                    adminPanel:
                      M.d.EREALM === f.e.k_ESteamRealmChina
                        ? E.a.createElement(He, { eventModel: s })
                        : E.a.createElement(De.a, {
                            eventModel: s,
                            partnerEventStore: Ue,
                          }),
                    otherEventRow: E.a.createElement(ke.a, {
                      clanAccountID: s.clanSteamID.GetAccountID(),
                      gidAnnouncement: s.AnnouncementGID,
                      partnerEventStore: Ue,
                    }),
                  })
                );
          var v = "lang_" + Object(Me.e)(Object(Me.g)(M.d.LANGUAGE));
          return E.a.createElement(
            "div",
            {
              className: Object(ee.a)(
                Le.a.EventDetailsPageContainer,
                v,
                q.a.PartnerEventFont,
                Le.a.NoTitleArtwork
              ),
            },
            E.a.createElement("div", { style: { height: "100px" } }),
            E.a.createElement(Ge.a, { strImageURL: "" }),
            E.a.createElement(Ge.b, {
              strImageURL: "",
              body: m
                ? E.a.createElement(
                    "div",
                    { className: Pe.a.ErrorMsg },
                    Object(U.n)(
                      "#Events_FailedToFind",
                      E.a.createElement(
                        "a",
                        { href: M.d.STORE_BASE_URL + "news/" },
                        Object(U.f)("#EventDisplay_NewsHubSubtitle")
                      )
                    )
                  )
                : E.a.createElement(X.a, {
                    string: Object(U.f)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
              postbody: Boolean(m && i)
                ? E.a.createElement(ke.a, {
                    clanAccountID: i.GetAccountID(),
                    partnerEventStore: Ue,
                  })
                : void 0,
            })
          );
        }),
        ze = Object(u.i)(xe),
        We = n("WBba"),
        Ve = n("qD+2"),
        qe = n("apHd"),
        Qe = n("xnZ7"),
        Ke = n.n(Qe),
        Ye = n("6Y59"),
        Je = n("r+ba"),
        Xe = (function (a) {
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
            var t = Object(qe.a)("EventWebRowEmbed");
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
            Object(b.d)(e, a),
            (e.prototype.componentDidMount = function () {
              return Object(b.b)(this, void 0, void 0, function () {
                var t,
                  n,
                  a,
                  r,
                  o,
                  i,
                  l,
                  c = this;
                return Object(b.e)(this, function (e) {
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
                          ((l = je.a.Get().GetTracker()),
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
                          c.setState({
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
              var n = je.a.Get().GetTracker();
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
              var o = je.a.Get().GetTracker();
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
                return E.a.createElement(
                  "div",
                  { className: Ke.a.FlexCenter },
                  E.a.createElement(X.a, { size: "medium", position: "center" })
                );
              var t = window.screen.width <= 500 ? 1 : 2,
                r = Boolean(null == a ? void 0 : a.length),
                o = this.BHasLastUpdateEvent(),
                i = this.BShouldShowLastUpdateEvent()
                  ? this.state.last_update_event.announcement_gid
                  : void 0,
                l = this.props,
                c = l.partnerEventStore,
                s = l.strClassName,
                d = l.appid,
                u = l.trackingLocation;
              return E.a.createElement(
                "div",
                { className: s },
                this.state.bShowModal &&
                  E.a.createElement(we.a, {
                    classname: Je.StoreHeaderAdjust,
                    appid: d,
                    trackingLocation: u,
                    announcementGID:
                      this.state.announcementGID ||
                      (null === (e = this.state.modalInitialEvent) ||
                      void 0 === e
                        ? void 0
                        : e.AnnouncementGID),
                    partnerEventStore: c,
                    eventModel: this.state.modalInitialEvent,
                    closeModal: this.CloseModal,
                  }),
                r &&
                  E.a.createElement(
                    "div",
                    null,
                    E.a.createElement(
                      "h2",
                      null,
                      Object(U.f)("#EventBrowse_RecentEvents")
                    ),
                    E.a.createElement(
                      "div",
                      { className: Je.SectionButtonCtn },
                      this.props.bViewAllShowInfiniteScroll
                        ? E.a.createElement(
                            "div",
                            {
                              className: Je.SectionButton,
                              onClick: function () {
                                return n.ShowModal(a[0]);
                              },
                            },
                            Object(U.f)("#EventBrowse_MoreEventsBtn")
                          )
                        : E.a.createElement(
                            Oe.c,
                            {
                              eventModel: a[0],
                              route: Oe.a.k_eViewWebSiteHub,
                              forceAnchor: !0,
                              className: Je.SectionButton,
                            },
                            Object(U.f)("#EventBrowse_MoreEventsBtn")
                          )
                    ),
                    E.a.createElement(
                      "div",
                      { className: Je.EventsSummariesCtn },
                      a.slice(0, t).map(function (t) {
                        var e =
                          1 === a.length && 500 < window.screen.width
                            ? ke.c
                            : ke.b;
                        return E.a.createElement(e, {
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
                  E.a.createElement($e, {
                    nUpdateTime: this.state.last_update_event.rtime,
                    announcementGID: i,
                    onClick: this.ShowLatestUpdateModal,
                  }),
                Boolean(o && !i) &&
                  E.a.createElement(Ze, {
                    nUpdateTime: this.state.last_update_event.rtime,
                    onClick: this.ShowLatestUpdateModal,
                  })
              );
            }),
            Object(b.c)([ne.a], e.prototype, "ShowModal", null),
            Object(b.c)([ne.a], e.prototype, "ShowLatestUpdateModal", null),
            Object(b.c)([ne.a], e.prototype, "CloseModal", null),
            e
          );
        })(E.a.Component),
        Ze = function (e) {
          return E.a.createElement(
            "div",
            { className: Je.LatestUpdateButtonCtn },
            E.a.createElement(
              "div",
              { className: Je.LatestUpdateIcon },
              E.a.createElement(Ye.hb, null)
            ),
            E.a.createElement(
              "div",
              { className: Je.LatestUpdateButton, onClick: e.onClick },
              Object(U.f)(
                "#EventBrowse_LatestUpdateTime_Button",
                Object(U.p)(e.nUpdateTime)
              )
            )
          );
        },
        $e = function (e) {
          function t(e) {
            null != r && r(), e.stopPropagation(), e.preventDefault();
          }
          var n = e.nUpdateTime,
            a = e.announcementGID,
            r = e.onClick,
            o = a ? L.c.GetClanEventFromAnnouncementGID(a) : null;
          return E.a.createElement(
            "div",
            null,
            E.a.createElement(
              "h2",
              null,
              Object(U.f)("#EventBrowse_LastUpdateDate", Object(U.p)(n))
            ),
            E.a.createElement(
              "div",
              { className: Je.SectionButtonCtn },
              E.a.createElement(
                "div",
                { className: Je.SectionButton, onClick: t },
                Object(U.f)("#EventBrowse_ViewLatestUpdate")
              )
            ),
            Boolean(o) &&
              E.a.createElement(
                "div",
                { className: Je.EventsSummariesCtn },
                E.a.createElement(ke.c, { event: o, onClick: t })
              )
          );
        },
        et = n("5izx"),
        tt = (function (r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var n = et.a.GetTimeNowWithOverrideAsDate(),
              a = new Date(n.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(a.getTime() / 1e3)), t;
          }
          return (
            Object(b.d)(e, r),
            (e.prototype.render = function () {
              var e = this.props.appid;
              return E.a.createElement(Xe, {
                appid: e,
                partnerEventStore: Ie.a.Get(),
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
        })(E.a.Component),
        nt = n("2l+k"),
        at = (function () {
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
              var e = Object(M.h)("rssaccountinfo", "application_config");
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
              return Object(b.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new Array()),
                        (n = nt.a.Get()),
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
                a = nt.a.Get();
              return (
                this.m_rgRSSEnabledClans.forEach(function (e) {
                  var t = a.GetRSSAdminForClanAccountID(e.clan_accoundid);
                  t && !t.BIsAutomationEnabled() && n.push(e.clan_accoundid);
                }),
                n
              );
            }),
            (e.prototype.HintLoadAccounts = function () {
              return Object(b.b)(this, void 0, void 0, function () {
                return Object(b.e)(this, function (e) {
                  return [2];
                });
              });
            }),
            (e.prototype.ReindexClanEventsAndReloadAccount = function (i) {
              var l;
              return Object(b.b)(this, void 0, void 0, function () {
                var t, n, a, r, o;
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t =
                        M.d.STORE_BASE_URL +
                        "events_admin/ajaxflushandreindexrss"),
                        (n = new FormData()).set("sessionid", M.d.SESSIONID),
                        n.append("clanids", "" + i),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, _.a.post(t, n, { withCredentials: !0 })]
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
        rt = n("wjMc"),
        ot = n("BRUS"),
        it = n("d+Me"),
        lt = n("WGPV"),
        ct = n.n(lt),
        st = Object(u.i)(function (e) {
          var t = Object(h.useState)(!0),
            n = t[0],
            a = t[1];
          if (
            (Object(h.useEffect)(function () {
              Object(b.b)(void 0, void 0, void 0, function () {
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return A.a.Init(), [4, at.Get().HintLoadAccounts()];
                    case 1:
                      return e.sent(), a(!1), [2];
                  }
                });
              });
            }, []),
            n)
          )
            return E.a.createElement(X.a, {
              string: Object(U.f)("#Loading"),
              size: "medium",
            });
          var r = at.Get().GetTrustedEnabledClans(!0),
            o = at.Get().GetTrustedEnabledClans(!1);
          return E.a.createElement(
            "div",
            null,
            E.a.createElement(
              F.a,
              null,
              E.a.createElement(
                "h1",
                null,
                Object(U.f)("#RSSModeration_Title")
              ),
              E.a.createElement(dt, null),
              E.a.createElement(ht, {
                rgClanIDs: at
                  .Get()
                  .GetAllRSSEnabledClans()
                  .map(function (e) {
                    return e.clan_accoundid;
                  }),
              }),
              E.a.createElement(ut, {
                rgClanIDs: r,
                strTitle: Object(U.f)("#RSSModeration_TrustTitle"),
              }),
              E.a.createElement(ut, {
                rgClanIDs: o,
                strTitle: Object(U.f)("#RSSModeration_RestTitle"),
              })
            )
          );
        }),
        dt = Object(l.a)(function (e) {
          var t = Object(h.useState)(!1),
            n = t[0],
            a = t[1],
            r = Object(h.useState)(void 0),
            o = r[0],
            i = r[1];
          return n
            ? E.a.createElement(X.a, {
                string: Object(U.f)("#Loading"),
                size: "medium",
              })
            : void 0 !== o
            ? Boolean(0 < o.length)
              ? E.a.createElement(ut, {
                  rgClanIDs: o,
                  strTitle: Object(U.f)("#RSSModeration_InactiveAutomation"),
                })
              : E.a.createElement(
                  "div",
                  null,
                  Object(U.f)("#RSSModreation_AllAutomationEnabled")
                )
            : E.a.createElement(
                P.d,
                {
                  onClick: function () {
                    return Object(b.b)(void 0, void 0, void 0, function () {
                      return Object(b.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return a(!0), [4, at.Get().LoadKnownAllRSSInfo()];
                          case 1:
                            return (
                              e.sent(),
                              i(at.Get().ExtractWithoutRSSAutomation()),
                              a(!1),
                              [2]
                            );
                        }
                      });
                    });
                  },
                },
                Object(U.f)("#RSSModeration_FindInActive"),
                " "
              );
        }),
        ut = function (e) {
          var t = e.rgClanIDs,
            n = e.strTitle,
            a = Object(h.useState)(!1),
            r = a[0],
            o = a[1],
            i = null;
          return (
            r ||
              (i = t.map(function (e) {
                return E.a.createElement(mt, { key: e, clanAccountID: e });
              })),
            E.a.createElement(
              "div",
              { className: Object(ee.a)(ct.a.SectionContainer) },
              E.a.createElement(
                "h2",
                {
                  className: Object(ee.a)(ct.a.ModSectionTitle),
                  onDoubleClick: function () {
                    return o(!r);
                  },
                },
                n,
                E.a.createElement("span", null, " "),
                E.a.createElement(
                  P.d,
                  {
                    className: ct.a.ResizeButton,
                    onClick: function () {
                      return o(!r);
                    },
                  },
                  r
                    ? E.a.createElement(Ye.J, null)
                    : E.a.createElement(Ye.M, null)
                )
              ),
              r &&
                E.a.createElement(
                  P.d,
                  {
                    onClick: function () {
                      return o(!1);
                    },
                  },
                  Object(U.f)("#Sale_ShowContents")
                ),
              i
            )
          );
        },
        mt = Object(l.a)(function (e) {
          var t = e.clanAccountID;
          return A.a.BHasClanInfoLoadedByAccountID(t) &&
            nt.a.Get().BHasClanIDLoaded(t)
            ? E.a.createElement(vt, {
                clanInfo: A.a.GetClanInfoByClanAccountID(t),
                rssAdminInfo: nt.a.Get().GetRSSAdminForClanAccountID(t),
              })
            : E.a.createElement(pt, { clanAccountID: t });
        }),
        pt = function (e) {
          var n = e.clanAccountID;
          return E.a.createElement(
            it.a,
            {
              onEnter: function () {
                return Object(b.b)(void 0, void 0, void 0, function () {
                  var t;
                  return Object(b.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = S.a.InitFromClanID(n)),
                          [
                            4,
                            Promise.all([
                              A.a.LoadClanInfoForClanSteamID(t),
                              nt.a.Get().QueueCuratorAdminInfoLoad(n),
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
            E.a.createElement(
              "div",
              { className: ct.a.TileContainer },
              E.a.createElement("div", null, Object(U.f)("#Loading"), " - ", n)
            )
          );
        },
        vt = function (e) {
          var t = e.clanInfo,
            n = e.rssAdminInfo,
            a = Object(h.useState)(!1),
            r = a[0],
            o = a[1],
            i = M.d.STORE_BASE_URL + "newshub/group/" + t.clanAccountID,
            l =
              M.d.STORE_BASE_URL +
              "curator/" +
              t.clanAccountID +
              "/admin/manage_rss",
            c = M.d.COMMUNITY_BASE_URL + "group/" + t.clanAccountID,
            s =
              "https://steamsupport.valvesoftware.com/clan/overview/" +
              S.a.InitFromClanID(t.clanAccountID).ConvertTo64BitString(),
            d = nt.a.Get().GetRSSAdminStats(t.clanAccountID);
          return E.a.createElement(
            "div",
            { className: Object(ee.a)(ct.a.TileContainer) },
            E.a.createElement(
              "div",
              { className: Object(ee.a)(ct.a.TileSpread) },
              E.a.createElement(
                "div",
                null,
                E.a.createElement(
                  "div",
                  null,
                  t.group_name,
                  " - ",
                  t.clanAccountID
                ),
                E.a.createElement(
                  "div",
                  null,
                  E.a.createElement(
                    "div",
                    null,
                    Object(U.f)("#CuratorAdmin_RSSFeed"),
                    ":"
                  ),
                  E.a.createElement("a", { href: n.GetRSSUrl() }, n.GetRSSUrl())
                ),
                Boolean(d) &&
                  E.a.createElement(
                    "div",
                    null,
                    E.a.createElement(
                      "div",
                      null,
                      Object(U.f)(
                        "#RSSModeration_TotalEvents",
                        d.total_event_count.toLocaleString()
                      )
                    ),
                    E.a.createElement(
                      "div",
                      null,
                      Object(U.f)(
                        "#RSSModeration_RSSEvents",
                        d.rss_event_count.toLocaleString()
                      )
                    )
                  ),
                E.a.createElement(
                  P.d,
                  {
                    onClick: function () {
                      return o(!r);
                    },
                  },
                  Object(U.f)(
                    r
                      ? "#Bbcode_Expand_Details_Expanded"
                      : "#Bbcode_Expand_Details_Collapsed"
                  )
                )
              ),
              E.a.createElement(
                "div",
                null,
                E.a.createElement(
                  "ul",
                  null,
                  E.a.createElement(
                    "li",
                    null,
                    E.a.createElement(
                      "a",
                      { href: i },
                      Object(U.f)("#EventDisplay_NewsHubSubtitle")
                    )
                  ),
                  E.a.createElement(
                    "li",
                    null,
                    E.a.createElement(
                      "a",
                      { href: l },
                      Object(U.f)("#CuratorAdmin_RSSFeed_title")
                    )
                  ),
                  E.a.createElement(
                    "li",
                    null,
                    E.a.createElement(
                      "a",
                      { href: c },
                      Object(U.f)("#RSSModeration_GroupPage")
                    )
                  ),
                  E.a.createElement(
                    "li",
                    null,
                    E.a.createElement(
                      "a",
                      { href: s },
                      Object(U.f)("#RSSModeration_SupportPage")
                    )
                  ),
                  E.a.createElement(
                    "li",
                    null,
                    E.a.createElement(ht, { rgClanIDs: [t.clanAccountID] })
                  )
                )
              ),
              E.a.createElement(
                "div",
                { className: ct.a.CreatorCtn },
                E.a.createElement(ot.a, {
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
              E.a.createElement(
                E.a.Fragment,
                null,
                Boolean(n.BHasSavedRSSURL())
                  ? E.a.createElement(rt.a, {
                      strRssURL: n.GetRSSUrl(),
                      admin: n,
                    })
                  : E.a.createElement(
                      "div",
                      null,
                      Object(U.f)("#RSSModeration_NoRSSFeed")
                    )
              )
          );
        },
        ht = function (t) {
          return E.a.createElement(
            Z.a,
            {
              toolTipContent: Object(U.f)(
                "#RSSModeration_ReindexAndReload_ttip"
              ),
            },
            E.a.createElement(
              P.d,
              {
                onClick: function (e) {
                  Object(J.d)(
                    E.a.createElement(Et, Object(b.a)({}, t)),
                    Object(te.m)(e)
                  );
                },
              },
              Object(U.f)("#RSSModeration_ReindexAndReload")
            )
          );
        },
        Et = function (r) {
          function e() {
            return r.closeModal && r.closeModal();
          }
          var t = Object(h.useState)(void 0),
            n = t[0],
            o = t[1],
            a = Object(h.useState)(!1),
            i = a[0],
            l = a[1],
            c = Object(h.useState)(void 0),
            s = c[0],
            d = c[1];
          return E.a.createElement(
            K.g,
            { onEscKeypress: e },
            E.a.createElement(
              P.f,
              null,
              E.a.createElement(
                P.j,
                null,
                " ",
                Object(U.f)("#RSSModeration_ReindexAndReload"),
                " "
              ),
              E.a.createElement(
                P.b,
                null,
                E.a.createElement(
                  P.c,
                  null,
                  void 0 === n
                    ? E.a.createElement(
                        E.a.Fragment,
                        null,
                        E.a.createElement(
                          "span",
                          null,
                          Object(U.f)(
                            "#RSSModeration_Reindex_Verify",
                            r.rgClanIDs.length
                          )
                        ),
                        E.a.createElement(
                          P.p,
                          {
                            onClick: function () {
                              return Object(b.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var t, n, a;
                                  return Object(b.e)(this, function (e) {
                                    switch (e.label) {
                                      case 0:
                                        o((t = 0)), (n = 0), (e.label = 1);
                                      case 1:
                                        return n < r.rgClanIDs.length
                                          ? ((a = r.rgClanIDs[n]),
                                            [
                                              4,
                                              at
                                                .Get()
                                                .ReindexClanEventsAndReloadAccount(
                                                  a
                                                ),
                                            ])
                                          : [3, 4];
                                      case 2:
                                        if (!e.sent())
                                          return (
                                            d(
                                              Object(U.f)(
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
                          Object(U.f)("#Button_Continue")
                        )
                      )
                    : E.a.createElement(
                        E.a.Fragment,
                        null,
                        E.a.createElement(
                          "span",
                          null,
                          Object(U.f)(
                            "#RSSModeration_Reindex_Action",
                            n,
                            r.rgClanIDs.length
                          )
                        ),
                        i
                          ? E.a.createElement(
                              "span",
                              null,
                              Object(U.f)(
                                "#EventEditor_ImportFromHTML_ConvertFinished"
                              )
                            )
                          : E.a.createElement(X.a, {
                              size: "small",
                              string: Object(U.f)("#Updating"),
                            })
                      ),
                  Boolean(s) && E.a.createElement("span", null, s, " ")
                ),
                E.a.createElement(
                  P.i,
                  null,
                  E.a.createElement(
                    P.d,
                    { onClick: e },
                    Object(U.f)(i ? "#Button_OK" : "#Button_Cancel")
                  )
                )
              )
            )
          );
        };
      Ve.a.Init(new We.a(M.d.WEBAPI_BASE_URL)), L.c.Init();
      function bt(e) {
        var t = e.children,
          n = Object(h.useState)(je.a.IsInitialized()),
          a = n[0],
          r = n[1];
        return a
          ? E.a.createElement(E.a.Fragment, null, t)
          : (je.a.InitGlobal().then(function () {
              return r(!0);
            }),
            null);
      }
      function _t(t) {
        return function (e) {
          return E.a.createElement(bt, null, E.a.createElement(t, e));
        };
      }
      var ft = _t(ce),
        gt = _t(Ce),
        St = _t(Te.b),
        yt = _t(o.c),
        At = _t(ze),
        Ot = _t(tt),
        Ct = _t(Se),
        Tt = _t(st);
    },
    vNkc: function (e, t, n) {
      e.exports = { Error: "eventbackfill_Error_1eWgI" };
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
