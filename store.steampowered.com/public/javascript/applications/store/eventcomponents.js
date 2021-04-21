/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
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
          return gt;
        }),
        n.d(t, "EventBackfillLanding", function () {
          return St;
        }),
        n.d(t, "EventSaleDisplay", function () {
          return yt;
        }),
        n.d(t, "EventCalendar", function () {
          return At;
        }),
        n.d(t, "EventDetailView", function () {
          return Ot;
        }),
        n.d(t, "Events", function () {
          return Ct;
        }),
        n.d(t, "EventSteamGameFestivalDebug", function () {
          return Tt;
        }),
        n.d(t, "RssEnabledAccountDashboard", function () {
          return jt;
        });
      var a,
        r = n("q1tI"),
        o = n.n(r),
        i = n("daJ/"),
        l = n("mrSG"),
        c = n("vDqi"),
        s = n.n(c),
        d = n("2vnA"),
        u = n("TyAF"),
        m = n("s4NR"),
        p = n.n(m),
        v = n("AXHe"),
        h = n("Ty5D"),
        E = n("Cs6D"),
        b = n("kyHq"),
        f = n("3+zv"),
        _ = n("kLLr"),
        g = n("U+Q5"),
        S = n("TQGK"),
        y = n("N0Ye"),
        A = n("f0Wu"),
        O = ["mod_reviewed", "auto_migrated"],
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
                n = p.a.parse(e.substring(1)),
                a = void 0;
              "string" == typeof n.selectedTags
                ? n.selectedTags.length > 0 &&
                  (a = [{ label: n.selectedTags, value: n.selectedTags }])
                : n.selectedTags &&
                  ((a = []),
                  n.selectedTags.forEach(function (e) {
                    return a.push({ label: e, value: e });
                  }));
              var r = !1,
                o = O.map(function (e) {
                  return { label: e, value: e };
                });
              "string" == typeof n.excludedTags
                ? n.excludedTags.length > 0 &&
                  ((r = !0),
                  (o = [{ label: n.excludedTags, value: n.excludedTags }]))
                : n.excludedTags &&
                  ((o = []),
                  n.excludedTags.forEach(function (e) {
                    return o.push({ label: e, value: e });
                  }),
                  (r = o && o.length > 0));
              var i = void 0;
              if ("string" == typeof n.eventtype) {
                if (n.eventtype.length > 0) {
                  var l = Number.parseInt(n.eventtype);
                  i = [{ label: Object(y.b)(l), value: l }];
                }
              } else
                n.eventtype &&
                  ((i = []),
                  n.eventtype.forEach(function (e) {
                    var t = Number.parseInt(e);
                    i.push({ label: Object(y.b)(t), value: t });
                  }));
              var c = void 0;
              "string" == typeof n.filterDate &&
                n.filterDate.length > 0 &&
                (c = A.unix(Number(n.filterDate)));
              var s = !1;
              "string" == typeof n.orderByVisibility &&
                n.orderByVisibility.length > 0 &&
                (s = Boolean(n.orderByVisibility)),
                Object(d.G)(function () {
                  (t.selectedTags = a),
                    (t.excludedTags = o),
                    (t.filterEventTypes = i),
                    (t.filterDate = c),
                    (t.bOrderByVisibilityStartTime = s),
                    (t.bUseCustomQuery =
                      (a && a.length > 0) || r || (i && i.length > 0));
                });
            }),
            Object(l.c)([d.C], e.prototype, "selectedTags", void 0),
            Object(l.c)([d.C], e.prototype, "excludedTags", void 0),
            Object(l.c)([d.C], e.prototype, "filterDate", void 0),
            Object(l.c)([d.C], e.prototype, "filterDateAsString", void 0),
            Object(l.c)([d.C], e.prototype, "eventsToLoadPerPaging", void 0),
            Object(l.c)([d.C], e.prototype, "filterEventTypes", void 0),
            Object(l.c)(
              [d.C],
              e.prototype,
              "bOrderByVisibilityStartTime",
              void 0
            ),
            Object(l.c)([d.C], e.prototype, "bUseCustomQuery", void 0),
            e
          );
        })(),
        T = n("bDQf"),
        j = n("lkRc");
      !(function (e) {
        (e[(e.k_ModReviewed = 0)] = "k_ModReviewed"),
          (e[(e.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
          (e[(e.k_ChangeEventType = 2)] = "k_ChangeEventType"),
          (e[(e.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
          (e[(e.k_ModReReviewed = 4)] = "k_ModReReviewed"),
          (e[(e.k_ModRemovedFromSteamChina = 5)] =
            "k_ModRemovedFromSteamChina"),
          (e[(e.k_ModFlagAdultOnlyContent = 6)] = "k_ModFlagAdultOnlyContent"),
          (e[(e.k_ModRemoveAdultOnlyContent = 7)] =
            "k_ModRemoveAdultOnlyContent");
      })(a || (a = {}));
      var M = "ModAct",
        I = (function () {
          function e() {}
          return (
            (e.prototype.ToModString = function () {
              var e =
                "ModAct_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case a.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case a.k_UpdateSeasonTags:
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
                case a.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case a.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function (e) {
              return (
                (this.m_moderator = j.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = a.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function (e) {
              return (
                (this.m_moderator = j.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? a.k_ModReviewed : a.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetAdultOnlyContentAction = function (e) {
              return (
                (this.m_moderator = j.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e
                  ? a.k_ModFlagAdultOnlyContent
                  : a.k_ModRemoveAdultOnlyContent),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function (e) {
              return (
                (this.m_moderator = j.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? a.k_ModReReviewed : a.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function (e) {
              return e.startsWith(M);
            }),
            (e.prototype.SetUpdateSeasonalTags = function (e) {
              return (
                (this.m_moderator = j.k.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = a.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        D = (function () {
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
              e,
              t
            ) {
              var n;
              return (
                void 0 === t && (t = 30),
                Object(l.b)(this, void 0, void 0, function () {
                  var a,
                    r,
                    o,
                    i,
                    c,
                    u,
                    m,
                    p = this;
                  return Object(l.e)(this, function (l) {
                    switch (l.label) {
                      case 0:
                        (a =
                          j.d.STORE_BASE_URL +
                          "events_admin/ajaxgetmoderationspecificpartnerevents"),
                          (r = 0),
                          (null === (n = this.m_listEvents) || void 0 === n
                            ? void 0
                            : n.length) &&
                            (this.m_listEvents.forEach(function (e) {
                              return (r = Math.max(
                                r,
                                Math.floor(
                                  Date.parse(e.last_modified_date) / 1e3
                                )
                              ));
                            }),
                            this.m_listEvents.filter(function (e) {
                              return (
                                Math.floor(
                                  Date.parse(e.last_modified_date) / 1e3
                                ) == r
                              );
                            }).length >= t && r++),
                          (o = { start_time: r, count: t }),
                          (l.label = 1);
                      case 1:
                        return (
                          l.trys.push([1, 3, , 4]),
                          [
                            4,
                            s.a.get(a, {
                              params: o,
                              withCredentials: !0,
                              cancelToken: e ? e.token : void 0,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (i = l.sent()),
                          e && e.token.reason
                            ? [2, []]
                            : i && i.data
                            ? ((c = new Array()),
                              Object(d.G)(function () {
                                i.data.docs.forEach(function (e) {
                                  p.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                    (c.push(e),
                                    p.m_mapEventGIDToSolrData.set(
                                      e.unique_id,
                                      e
                                    ),
                                    p.m_listEvents.push(e));
                                });
                              }),
                              [2, c])
                            : [3, 4]
                        );
                      case 3:
                        return (
                          (u = l.sent()),
                          (m = Object(T.a)(u)),
                          console.error(
                            "LoadPartnerEventForModerationIncremental failed:" +
                              m.strErrorMsg,
                            m
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
              e,
              t,
              n,
              a,
              r,
              o
            ) {
              return Object(l.b)(this, void 0, void 0, function () {
                var i, c, d;
                return Object(l.e)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (
                        (i =
                          j.d.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (c = a.join(",")),
                        o &&
                          (a.length > 0 && (c += ","), (c += o.ToModString())),
                        (d = new FormData()).append("sessionid", j.d.SESSIONID),
                        d.append("clan_accountid", "" + t.GetAccountID()),
                        d.append("gid_announcement", n),
                        d.append("add_tags", c),
                        d.append("remove_tags", r.join(",")),
                        [
                          4,
                          s.a.post(i, d, {
                            withCredentials: !0,
                            cancelToken: e.token,
                          }),
                        ]
                      );
                    case 1:
                      return [2, l.sent().data.tags];
                  }
                });
              });
            }),
            (e.prototype.UpdatePartnerEventType = function (e, t, n, a) {
              return Object(l.b)(this, void 0, void 0, function () {
                var r, o;
                return Object(l.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (r =
                          j.d.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (o = new FormData()).append("sessionid", j.d.SESSIONID),
                        o.append("clan_accountid", "" + t.GetAccountID()),
                        o.append("gid_event", n),
                        o.append("new_event_type", "" + a),
                        [
                          4,
                          s.a.post(r, o, {
                            withCredentials: !0,
                            cancelToken: e.token,
                          }),
                        ]
                      );
                    case 1:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            Object(l.c)([d.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(l.c)([d.C], e.prototype, "m_listEvents", void 0),
            Object(l.c)([d.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        w = (function () {
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
              e,
              t,
              n,
              a,
              r,
              o,
              i,
              c,
              s
            ) {
              return (
                void 0 === t && (t = 0),
                void 0 === n && (n = 10),
                Object(l.b)(this, void 0, void 0, function () {
                  var u,
                    m,
                    p = this;
                  return Object(l.e)(this, function (l) {
                    switch (l.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(
                            e,
                            t,
                            n,
                            a,
                            r,
                            o,
                            i,
                            c,
                            s
                          ),
                        ];
                      case 1:
                        return (
                          (u = l.sent()),
                          (m = new Array()),
                          Object(d.G)(function () {
                            u.forEach(function (e) {
                              p.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                (m.push(e),
                                p.m_mapEventGIDToSolrData.set(e.unique_id, e),
                                p.m_listEvents.push(e));
                            });
                          }),
                          [2, m]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.GetLatestPartnerEvents = function (
              e,
              t,
              n,
              a,
              r,
              o,
              i,
              c,
              d,
              u,
              m,
              p
            ) {
              return (
                void 0 === t && (t = 0),
                void 0 === n && (n = 10),
                Object(l.b)(this, void 0, void 0, function () {
                  var v, h, E;
                  return Object(l.e)(this, function (l) {
                    switch (l.label) {
                      case 0:
                        return (
                          (v =
                            j.d.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (h = {
                            page: t,
                            count: n,
                            date: i,
                            appids: void 0 === a ? void 0 : a.join(","),
                            required_tags: void 0 === r ? void 0 : r.join(","),
                            exclude_tags: void 0 === o ? void 0 : o.join(","),
                            eventtypefilter:
                              void 0 === c ? void 0 : c.join(","),
                            orderByVisibility: d || void 0,
                            creator_home_clan_id:
                              void 0 === u ? void 0 : u.join(","),
                            showUnpublished: void 0 === p ? void 0 : p,
                            term: void 0 === m ? void 0 : m,
                          }),
                          [
                            4,
                            s.a.get(v, {
                              params: h,
                              withCredentials: !0,
                              cancelToken: e ? e.token : void 0,
                            }),
                          ]
                        );
                      case 1:
                        return [2, (E = l.sent()).data ? E.data.docs : []];
                    }
                  });
                })
              );
            }),
            Object(l.c)([d.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(l.c)([d.C], e.prototype, "m_listEvents", void 0),
            Object(l.c)([d.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        k = n("6oCP"),
        G = n("C4Nl"),
        R = n("Mgs7"),
        L = n("IjL/"),
        B = n("T27q"),
        P = n("Qcoi"),
        F = n("TLQK"),
        H = n("zrk3"),
        N = Object(u.a)(function (e) {
          var t = e.accountID,
            n = e.locToken,
            a = _.a.InitFromAccountID(t).ConvertTo64BitString(),
            o = r.useRef(null),
            i = r.useState(P.a.GetProfile(a)),
            c = i[0],
            d = i[1];
          r.useEffect(
            function () {
              var e = _.a.InitFromAccountID(t).ConvertTo64BitString();
              if (!P.a.BHasProfile(e)) {
                Object(l.b)(void 0, void 0, void 0, function () {
                  var t, n, a;
                  return Object(l.e)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        (t = s.a.CancelToken.source()),
                          (o.current = t.cancel),
                          (r.label = 1);
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]), [4, P.a.LoadProfiles([e])]
                        );
                      case 2:
                        return r.sent(), [3, 4];
                      case 3:
                        return (
                          (n = r.sent()),
                          (a = Object(T.a)(n)),
                          console.error(
                            "EventModerationTile profile load : " +
                              a.strErrorMsg,
                            a
                          ),
                          [3, 4]
                        );
                      case 4:
                        return t.token.reason || d(P.a.GetProfile(e)), [2];
                    }
                  });
                });
              }
              return function () {
                o.current && o.current("ModEventUserProfile: unmounting");
              };
            },
            [t]
          );
          var u =
            "https://steamsupport.valvesoftware.com/account/overview/" + a;
          return r.createElement(
            "div",
            null,
            Object(F.n)(
              n,
              r.createElement(
                "a",
                { href: u, target: j.d.IN_CLIENT ? void 0 : "_blank" },
                Boolean(c)
                  ? r.createElement(r.Fragment, null, c.persona_name)
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement("span", null, t)
                    )
              )
            )
          );
        }),
        U = function (e) {
          var t = e.modAction,
            n = Object(F.k)(t.m_rtWhen) + " @ " + Object(F.m)(t.m_rtWhen),
            o = r.createElement(N, {
              locToken: "#EventModTile_Moderator",
              accountID: t.m_moderator,
            });
          switch (t.m_action) {
            case a.k_ModReviewed:
              return r.createElement(
                "div",
                { className: H.ModeratorAuditActionCtn },
                Object(F.n)(
                  "#EventModTile_Action_Reviewed",
                  r.createElement("span", null, n),
                  o
                )
              );
            case a.k_ModUnreviewed:
              return r.createElement(
                "div",
                { className: H.ModeratorAuditActionCtn },
                Object(F.n)(
                  "#EventModTile_Action_UnReviewed",
                  r.createElement("span", null, n),
                  o
                )
              );
            case a.k_ChangeEventType:
              return r.createElement(
                "div",
                { className: H.ModeratorAuditActionCtn },
                Object(F.n)(
                  "#EventModTile_Action_NewEventType",
                  r.createElement("span", null, n),
                  o,
                  Object(y.b)(t.m_newEventType)
                )
              );
            case a.k_UpdateSeasonTags:
              return r.createElement(
                "div",
                { className: H.ModeratorAuditActionCtn },
                Object(F.n)(
                  "#EventModTile_Action_SeasonTagUpdate",
                  r.createElement("span", null, n),
                  o,
                  t.m_newTagAdded
                )
              );
            case a.k_ModReReviewed:
              return r.createElement(
                "div",
                { className: H.ModeratorAuditActionCtn },
                Object(F.n)(
                  "#EventModTile_Action_ReReviewed",
                  r.createElement("span", null, n),
                  o
                )
              );
            case a.k_ModRemovedFromSteamChina:
              return r.createElement(
                "div",
                { className: H.ModeratorAuditActionCtn },
                Object(F.n)(
                  "#EventModTile_Action_RemoveFromSC",
                  r.createElement("span", null, n),
                  o
                )
              );
            case a.k_ModFlagAdultOnlyContent:
              return r.createElement(
                "div",
                { className: H.ModeratorAuditActionCtn },
                Object(F.n)(
                  "#EventModTile_Action_FlagAdultContent",
                  r.createElement("span", null, n),
                  o
                )
              );
            case a.k_ModRemoveAdultOnlyContent:
              return r.createElement(
                "div",
                { className: H.ModeratorAuditActionCtn },
                Object(F.n)(
                  "#EventModTile_Action_RemoveAdultContent",
                  r.createElement("span", null, n),
                  o
                )
              );
            default:
              return r.createElement(
                "div",
                { className: H.ModeratorAuditActionCtn },
                t.ToModString
              );
          }
        },
        x = function (e) {
          var t = r.useState(!0),
            n = t[0],
            a = t[1],
            o = e.eventModel
              .GetAllTags()
              .filter(function (e) {
                return I.IsAuditAction(e);
              })
              .reverse(),
            i = o.length,
            l = o.length > 3 && n;
          return 0 == o.length
            ? null
            : (l && (o = o.splice(0, 3)),
              r.createElement(
                "div",
                null,
                r.createElement(
                  "h4",
                  null,
                  Object(F.f)("#EventModTile_Action_Title")
                ),
                (function (t) {
                  var n = e.eventModel;
                  return t.map(function (e) {
                    var t = new I();
                    return (
                      t.FromString(e),
                      r.createElement(U, { key: n.GID + e, modAction: t })
                    );
                  });
                })(o),
                l &&
                  r.createElement(
                    "a",
                    {
                      onClick: function () {
                        return a(!1);
                      },
                      className: H.ExpandModActions,
                    },
                    Object(F.f)("#EventModTile_Action_More", i - 3)
                  ),
                Boolean(!l && i > 3) &&
                  r.createElement(
                    "a",
                    {
                      onClick: function () {
                        return a(!0);
                      },
                      className: H.ExpandModActions,
                    },
                    Object(F.f)("#EventModTile_Action_Hide")
                  )
              ));
        },
        z = n("BpzF"),
        W = n("fpVW"),
        V = n.n(W),
        q = n("RQmk"),
        Q = n("Jqb/"),
        K = n("UxvL"),
        Y = n("ka0M"),
        J = n("0OaU"),
        X = n("5E+2"),
        Z = n("+d9t"),
        $ = n("exH9"),
        ee = n("X3Ds"),
        te = n("bxiW"),
        ne = n("IzPI"),
        ae = n("E9gz"),
        re = n("f0Wu"),
        oe = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0,
        },
        ie = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_cancelSignal = s.a.CancelToken.source()),
              (t.m_refScroll = o.a.createRef()),
              (t.m_IntervalTimer = void 0),
              (t.state = {
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !1,
                nLastFetchCompletedMS: 0,
              }),
              (t.m_nPage = 0),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0),
                C.Get().Init(this.props.history.location.search);
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "EventModerationLanding component unmounted"
              ),
                window.removeEventListener("scroll", this.OnScroll),
                this.ClearTimer();
            }),
            (t.prototype.HandleUpdateQueryParameter = function () {
              var e = C.Get();
              if (e.bUseCustomQuery && this.props.history) {
                var t = e.selectedTags,
                  n = e.excludedTags,
                  a = e.filterEventTypes,
                  r = e.filterDate,
                  o = e.bOrderByVisibilityStartTime;
                t || n || a || r || o
                  ? this.props.history.push(
                      "?" +
                        p.a.stringify({
                          selectedTags:
                            t && t.length > 0
                              ? t.map(function (e) {
                                  return e.value;
                                })
                              : null,
                          excludedTags:
                            n && n.length > 0
                              ? n.map(function (e) {
                                  return e.value;
                                })
                              : null,
                          eventtype:
                            a && a.length > 0
                              ? a.map(function (e) {
                                  return "" + e.value;
                                })
                              : null,
                          filterDate: r && r.unix() > 0 ? "" + r.unix() : null,
                          orderByVisibility: o ? "1" : null,
                        })
                    )
                  : this.props.history.push("?");
              }
            }),
            (t.prototype.ClearTimer = function () {
              this.m_IntervalTimer &&
                (window.clearInterval(this.m_IntervalTimer),
                (this.m_IntervalTimer = void 0));
            }),
            (t.prototype.HandleError = function (e) {
              var t = Object(T.a)(e);
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
            (t.prototype.LoadMorePublicEventWithDelay = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                return Object(l.e)(this, function (e) {
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
            (t.prototype.LoadMoreModerationEvents = function () {
              var e = this;
              if ((this.ClearTimer(), this.state.bInfiniteScrollLoading)) {
                var t = void 0,
                  n = C.Get();
                if (n.bUseCustomQuery) {
                  var a = n.filterEventTypes
                      ? n.filterEventTypes.map(function (e) {
                          return e.value;
                        })
                      : void 0,
                    r = n.selectedTags
                      ? n.selectedTags.map(function (e) {
                          return e.value;
                        })
                      : void 0,
                    o = n.excludedTags
                      ? n.excludedTags.map(function (e) {
                          return e.value;
                        })
                      : void 0;
                  t = w
                    .Get()
                    .LoadPartnerEventForQueryIncremental(
                      this.m_cancelSignal,
                      this.m_nPage,
                      n.eventsToLoadPerPaging,
                      [this.props.appid],
                      r,
                      o,
                      n.filterDate,
                      a,
                      n.bOrderByVisibilityStartTime
                    );
                } else
                  t = D.Get().LoadPartnerEventForModerationIncremental(
                    this.m_cancelSignal,
                    n.eventsToLoadPerPaging
                  );
                t.then(function (t) {
                  (e.m_nPage += n.eventsToLoadPerPaging),
                    e.setState({
                      bInfiniteScrollLoading: !1,
                      bExhaustedEventList: 0 == t.length,
                      nLastFetchCompletedMS: Date.now(),
                    });
                }).catch(function (t) {
                  return e.HandleError(t);
                });
              }
            }),
            (t.prototype.UpdateQueryParametersAndLoadMoreEvents = function () {
              this.HandleUpdateQueryParameter(),
                this.LoadMoreModerationEvents();
            }),
            (t.prototype.RenderTiles = function () {
              var e = new Array();
              return (
                (C.Get().bUseCustomQuery
                  ? w.Get().GetAllSolrEvents()
                  : D.Get().GetAllSolrEvents()
                ).forEach(function (t) {
                  e.push(
                    o.a.createElement(me, { solrData: t, key: t.unique_id })
                  );
                }),
                e
              );
            }),
            (t.prototype.OnScroll = function () {
              if (this.m_refScroll && this.m_refScroll.current) {
                var e = this.m_refScroll.current;
                e &&
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
              }
            }),
            (t.prototype.RefetchAllEventTiles = function () {
              (this.m_nPage = 0),
                D.Get().ClearAllSolrEvents(),
                w.Get().ClearAllSolrEvents(),
                this.setState(
                  Object(l.a)({}, oe),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (t.prototype.render = function () {
              var e = this.RenderTiles(),
                t = C.Get();
              return o.a.createElement(
                "div",
                { className: ae.ModerationContainer, ref: this.m_refScroll },
                o.a.createElement(
                  "div",
                  null,
                  o.a.createElement(
                    "h2",
                    null,
                    Object(F.f)("#EventModeration_Title")
                  ),
                  o.a.createElement(
                    L.a,
                    null,
                    o.a.createElement(
                      "div",
                      { className: Object($.a)(V.a.FlexRowContainer) },
                      o.a.createElement(ce, {
                        fnRequireRefetchEvents: this.RefetchAllEventTiles,
                      }),
                      Boolean(t.bUseCustomQuery) &&
                        o.a.createElement(se, {
                          fnRequireRefetchEvents: this.RefetchAllEventTiles,
                        })
                    )
                  )
                ),
                o.a.createElement(L.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  o.a.createElement(J.a, {
                    position: "center",
                    size: "medium",
                    string: Object(F.f)("#Loading"),
                  })
              );
            }),
            Object(l.c)([te.a], t.prototype, "HandleError", null),
            Object(l.c)(
              [te.a],
              t.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(l.c)([te.a], t.prototype, "LoadMoreModerationEvents", null),
            Object(l.c)(
              [te.a],
              t.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(l.c)([te.a], t.prototype, "OnScroll", null),
            Object(l.c)([te.a], t.prototype, "RefetchAllEventTiles", null),
            (t = Object(l.c)([u.a], t))
          );
        })(o.a.Component),
        le = Object(h.i)(ie),
        ce = Object(u.a)(function (e) {
          var t = C.Get(),
            n = e.fnRequireRefetchEvents;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: ae.FilterContainer },
              o.a.createElement(
                X.a,
                {
                  toolTipContent: Object(F.f)(
                    "#EventModeration_ShowCustomFilter_ttip"
                  ),
                },
                o.a.createElement(R.e, {
                  label: Object(F.f)("#EventModeration_ShowCustomFilter"),
                  checked: t.bUseCustomQuery,
                  onChange: function (e) {
                    (t.bUseCustomQuery = e), n();
                  },
                })
              )
            ),
            o.a.createElement(
              "div",
              { className: ae.FilterContainer },
              o.a.createElement(
                "label",
                { htmlFor: "EventPerLoad" },
                Object(F.f)("#EventModeration_PerPageLoad")
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("input", {
                  type: "number",
                  id: "EventPerLoad",
                  min: "10",
                  max: "200",
                  value: t.eventsToLoadPerPaging,
                  onChange: function (e) {
                    var n = Number.parseInt(e.currentTarget.value);
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
        se = Object(u.a)(function (e) {
          var t = C.Get(),
            n = e.fnRequireRefetchEvents,
            a = b.d
              .map(function (e) {
                return { value: e, label: Object(y.b)(e) };
              })
              .sort(function (e, t) {
                return e.label.localeCompare(t.label);
              }),
            r = f.a
              .map(function (e) {
                return { value: e, label: e };
              })
              .sort(function (e, t) {
                return e.label.localeCompare(t.label);
              }),
            i = {
              option: function (e) {
                return Object(l.a)(Object(l.a)({}, e), { color: "#444444" });
              },
            };
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: ae.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(F.f)("#EventModeration_FilterByTag")
              ),
              o.a.createElement(E.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function (e) {
                  (t.selectedTags = e), n();
                },
                value: t.selectedTags,
                options: r,
                styles: i,
              })
            ),
            o.a.createElement(
              "div",
              { className: ae.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(F.f)("#EventModeration_FilterExcludeByTag")
              ),
              o.a.createElement(E.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function (e) {
                  (t.excludedTags = e), n();
                },
                value: t.excludedTags,
                options: r,
                styles: i,
              })
            ),
            o.a.createElement(
              "div",
              { className: ae.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(F.f)("#EventModeration_FilterToType")
              ),
              o.a.createElement(E.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function (e) {
                  (t.filterEventTypes = e), n();
                },
                value: t.filterEventTypes,
                options: a,
                styles: i,
              })
            ),
            o.a.createElement(
              "div",
              { className: ae.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(F.f)("#EventModeration_FilterToDate")
              ),
              o.a.createElement(v, {
                timeFormat: !1,
                onChange: function (e) {
                  if ("string" == typeof e) {
                    var a = re(e, "M/D/YYYY", !0);
                    if (!a.isValid()) return void (t.filterDateAsString = e);
                    e = a;
                  }
                  t.filterDate != e &&
                    ((t.filterDateAsString = void 0), (t.filterDate = e), n());
                },
                value: t.filterDate,
                isValidDate: function (e) {
                  var t = new Date();
                  return (
                    e.unix() <
                    re
                      .unix(t.getTime() / 1e3 + 86400)
                      .hour(0)
                      .seconds(0)
                      .minute(0)
                      .unix()
                  );
                },
                inputProps: {
                  placeholder: Object(F.f)("#EventModeration_PickDatee"),
                  className: ae.TimeWidth,
                },
              })
            ),
            o.a.createElement(
              "div",
              { className: ae.FilterContainer },
              o.a.createElement("input", {
                type: "checkbox",
                id: "VisibilityStart",
                checked: t.bOrderByVisibilityStartTime,
                onChange: function (e) {
                  (t.bOrderByVisibilityStartTime = e.currentTarget.checked),
                    n();
                },
              }),
              o.a.createElement(
                "label",
                { htmlFor: "VisibilityStart" },
                Object(F.f)("#EventModeration_OrderByFirstVisible")
              )
            )
          );
        }),
        de = Object(u.a)(function (e) {
          var t = e.onClick,
            n = e.event,
            a = e.bSaving,
            r = Object(F.f)("#EventModTile_Moderate_ClearReviewed"),
            i = ae.EventModerateClearReview,
            l = !1;
          return (
            Object(f.g)(n) ||
              ((r = Object(F.f)("#EventModTile_Moderate_MarkReviewed")),
              (i = ae.EventModerateMarkReview),
              (l = !0)),
            a &&
              ((r = Object(F.f)("#EventModTile_Moderate_Saving")),
              (i = ae.EventModerateSaving)),
            o.a.createElement(
              "button",
              {
                className: Object($.a)(V.a.Button, ae.Button, i),
                onClick: function () {
                  return t(l);
                },
                disabled: a,
              },
              a && o.a.createElement(J.a, { size: "small" }),
              r
            )
          );
        }),
        ue = Object(u.a)(function (e) {
          var t = e.onClick,
            n = e.event,
            a = e.bSaving,
            r = n.BHasTag("adult_only_content"),
            i = Object(F.f)(
              r
                ? "#EventModTile_Moderate_RemoveAdultContent"
                : "#EventModTile_Moderate_FlagAdultContent"
            );
          return (
            a && (i = Object(F.f)("#EventModTile_Moderate_Saving")),
            o.a.createElement(
              "button",
              {
                className: Object($.a)(V.a.Button, ae.Button),
                onClick: function () {
                  return t(!r);
                },
                disabled: a,
              },
              a && o.a.createElement(J.a, { size: "small" }),
              i
            )
          );
        }),
        me = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bLoadingEvent: !k.c.BHasClanEventModel(
                  t.props.solrData.unique_id
                ),
                bShowAsModal: !1,
                bSavingModeration: !1,
              }),
              (t.m_cancelSignal = s.a.CancelToken.source()),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.props.solrData,
                n = t.unique_id;
              k.c.BHasClanEventModel(n) ||
                k.c
                  .LoadHiddenPartnerEvent(new _.a(t.clan_steamid), n)
                  .then(function () {
                    return e.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function (t) {
                    var n = Object(T.a)(t);
                    console.error(
                      "EventModerationTile: Event Load: " + n.strErrorMsg,
                      n
                    ),
                      e.setState({ bLoadingEvent: !1 });
                  });
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "EventModerationTile component unmounted"
              );
            }),
            (t.prototype.ShowModalEvent = function (e) {
              var t = this.props.solrData.unique_id;
              !this.state.bLoadingEvent &&
                k.c.BHasClanEventModel(t) &&
                this.setState({ bShowAsModal: !0 }),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (t.prototype.HideModalEvent = function () {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (t.prototype.SetAdultContentState = function (e) {
              if (!this.state.bSavingModeration) {
                var t = this.props.solrData.unique_id,
                  n = k.c.GetClanEventModel(t);
                if (n)
                  if (e !== n.BHasTag("adult_only_content")) {
                    var a = new Array(),
                      r = new Array(),
                      o = new I().SetAdultOnlyContentAction(e);
                    e
                      ? a.push("adult_only_content")
                      : r.push("adult_only_content"),
                      this.UpdateTagsOnEvent(t, a, r, o);
                  }
              }
            }),
            (t.prototype.SetModeratedState = function (e) {
              if (!this.state.bSavingModeration) {
                var t = this.props.solrData.unique_id,
                  n = k.c.GetClanEventModel(t);
                if (n)
                  if (e !== Object(f.g)(n)) {
                    var a = new Array(),
                      r = new Array(),
                      o = new I().SetReviewAction(e);
                    e
                      ? (a.push("mod_reviewed"),
                        r.push("mod_require_rereview"),
                        n.BHasTag("mod_require_rereview") &&
                          o.SetReReviewAction(e))
                      : a.push("mod_require_rereview"),
                      this.UpdateTagsOnEvent(t, a, r, o);
                  }
              }
            }),
            (t.prototype.UpdateTagsOnEvent = function (e, t, n, a) {
              var r = this;
              this.state.bSavingModeration ||
                this.setState({ bSavingModeration: !0 }, function () {
                  return Object(l.b)(r, void 0, void 0, function () {
                    var r, o, i, c;
                    return Object(l.e)(this, function (l) {
                      switch (l.label) {
                        case 0:
                          (r = k.c.GetClanEventModel(e)), (l.label = 1);
                        case 1:
                          return (
                            l.trys.push([1, 3, , 4]),
                            [
                              4,
                              D.Get().UpdateTagsOnPartnerEvent(
                                this.m_cancelSignal,
                                r.clanSteamID,
                                r.AnnouncementGID,
                                t,
                                n,
                                a
                              ),
                            ]
                          );
                        case 2:
                          return (o = l.sent()), (r.vecTags = o), [3, 4];
                        case 3:
                          return (
                            (i = l.sent()),
                            (c = Object(T.a)(i)),
                            console.error(
                              "UpdateTagsOnPartnerEvent " + c.strErrorMsg,
                              c
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
            (t.prototype.OnChangeCategory = function (e) {
              var t = this.props.solrData,
                n = k.c.GetClanEventModel(t.unique_id);
              Object(Y.d)(
                o.a.createElement(he, { eventModel: n }),
                Object(ee.m)(e)
              );
            }),
            (t.prototype.OnUpdateSeasonalTag = function (e) {
              var t = this.props.solrData,
                n = k.c.GetClanEventModel(t.unique_id);
              Object(Y.d)(
                o.a.createElement(Ee, { eventModel: n }),
                Object(ee.m)(e)
              );
            }),
            (t.prototype.render = function () {
              var e,
                t = this.props.solrData,
                n = t.unique_id,
                a = Number(t.appid),
                r = Object(b.f)(j.d.LANGUAGE),
                i = k.c.GetClanEventModel(n),
                l = null;
              if (i) {
                this.state.bShowAsModal &&
                  (l = o.a.createElement(
                    Q.j,
                    { className: ae.StoreHeaderAdjust },
                    o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(B.b, {
                        event: i,
                        fnClose: this.HideModalEvent,
                      })
                    )
                  ));
                var c = i.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    r,
                    g.c.capsule_main
                  ),
                  s = i.BImageNeedScreenshotFallback("capsule", r);
                e =
                  c.length > 0
                    ? o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(K.a, { rgSources: c }),
                        s &&
                          o.a.createElement(
                            "div",
                            { className: ae.NoCapsuleFallback },
                            Object(F.f)("#EventModTile_FallbackImageText")
                          )
                      )
                    : o.a.createElement(
                        "div",
                        { className: ae.NoCapsule },
                        Object(F.f)("#EventModTile_NoCapsule")
                      );
              } else e = Object(F.f)("#Loading");
              var d = t.last_modified_date
                  ? Date.parse(t.last_modified_date) / 1e3
                  : 0,
                u = i ? i.type : Number(t.event_type),
                m = new _.a(t.clan_steamid),
                p = a ? "app/" + a : "group/" + m.GetAccountID(),
                v =
                  j.d.STORE_BASE_URL +
                  "news/" +
                  p +
                  "/view/" +
                  t.announcement_gid,
                h = Boolean(i && i.BHasTag("adult_only_content"));
              return o.a.createElement(
                L.a,
                null,
                l,
                o.a.createElement(
                  "div",
                  { className: ae.Tile },
                  o.a.createElement(
                    "a",
                    {
                      href: v,
                      className: ae.TileCapsule,
                      onClick: this.ShowModalEvent,
                    },
                    e
                  ),
                  o.a.createElement(
                    "div",
                    { className: ae.TileDetails },
                    o.a.createElement(
                      "div",
                      { className: ae.DetailsLeft },
                      o.a.createElement(
                        "a",
                        {
                          className: ae.EventTitle,
                          href: v,
                          onClick: this.ShowModalEvent,
                        },
                        t.event_name
                      ),
                      o.a.createElement(
                        "div",
                        {
                          className: Object($.a)(
                            ae.TileEventType,
                            1 == u ? ae.TileEventOtherType : ""
                          ),
                        },
                        i ? i.GetCategoryAsString() : t.event_type
                      ),
                      h &&
                        o.a.createElement(
                          "div",
                          { className: ae.HasAdultContent },
                          Object(F.f)("#EventModTile_HasAdultContent")
                        ),
                      this.state.bLoadingEvent &&
                        o.a.createElement(J.a, {
                          size: "small",
                          string: Object(F.f)("#Loading"),
                        }),
                      o.a.createElement(
                        "div",
                        { className: ae.ChannelInfo },
                        o.a.createElement(pe, {
                          appid: a,
                          clanSteamID: new _.a(t.clan_steamid),
                        })
                      )
                    ),
                    o.a.createElement(
                      "div",
                      { className: ae.DetailsMiddle },
                      i &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(de, {
                            onClick: this.SetModeratedState,
                            bSaving: this.state.bSavingModeration,
                            event: i,
                          }),
                          o.a.createElement(
                            "button",
                            {
                              className: Object($.a)(V.a.Button, ae.Button),
                              onClick: this.OnChangeCategory,
                            },
                            Object(F.f)("#EventModTile_ChangeEventType")
                          ),
                          o.a.createElement(ue, {
                            onClick: this.SetAdultContentState,
                            bSaving: this.state.bSavingModeration,
                            event: i,
                          }),
                          Boolean(i.BHasTag("halloween2019candidate")) &&
                            o.a.createElement(
                              "button",
                              {
                                className: Object($.a)(V.a.Button),
                                onClick: this.OnUpdateSeasonalTag,
                              },
                              Object(F.f)("#EventModTile_SeasonalTag")
                            ),
                          o.a.createElement(x, { eventModel: i })
                        )
                    ),
                    o.a.createElement(
                      "div",
                      { className: ae.DetailsRight },
                      o.a.createElement(
                        "div",
                        { className: ae.EventTimingBlock },
                        Boolean(d) &&
                          o.a.createElement(
                            "div",
                            { className: ae.LastUpdateTime },
                            Object(F.f)(
                              "#EventModTile_LastModified",
                              Object(F.k)(d) + "@" + Object(F.m)(d)
                            )
                          ),
                        i &&
                          o.a.createElement(z.b, {
                            event: i,
                            stylesmodule: ae,
                            nOverrideEndTime: i.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: i.GetStartTimeAndDateUnixSeconds(),
                          })
                      ),
                      i &&
                        o.a.createElement(ve, {
                          event: i,
                          hidden: t.hidden,
                          published: t.published,
                        })
                    )
                  )
                )
              );
            }),
            Object(l.c)([te.a], t.prototype, "ShowModalEvent", null),
            Object(l.c)([te.a], t.prototype, "HideModalEvent", null),
            Object(l.c)([te.a], t.prototype, "SetAdultContentState", null),
            Object(l.c)([te.a], t.prototype, "SetModeratedState", null),
            Object(l.c)([te.a], t.prototype, "OnChangeCategory", null),
            Object(l.c)([te.a], t.prototype, "OnUpdateSeasonalTag", null),
            (t = Object(l.c)([u.a], t))
          );
        })(o.a.Component),
        pe =
          (o.a.Component,
          Object(u.a)(function (e) {
            var t = Object(r.useState)(!G.a.Get().BHasApp(e.appid)),
              n = t[0],
              a = t[1],
              i = o.a.useRef(s.a.CancelToken.source());
            if (
              (Object(r.useEffect)(function () {
                return function () {
                  return i.current.cancel(
                    "EventModerationChannelInfo component unmounted"
                  );
                };
              }, []),
              Object(r.useEffect)(
                function () {
                  var t = e.appid,
                    n = e.clanSteamID;
                  if (
                    (t && !G.a.Get().BHasApp(t)) ||
                    (n && !S.a.BHasClanInfoLoaded(n))
                  ) {
                    Object(l.b)(void 0, void 0, void 0, function () {
                      var e, r;
                      return Object(l.e)(this, function (o) {
                        switch (o.label) {
                          case 0:
                            return (
                              o.trys.push([0, 2, 3, 4]),
                              [
                                4,
                                Promise.all([
                                  G.a
                                    .Get()
                                    .QueueAppRequest(t, {
                                      include_assets: !0,
                                      include_release: !0,
                                    }),
                                  n
                                    ? S.a.LoadClanInfoForClanSteamID(n)
                                    : void 0,
                                ]),
                              ]
                            );
                          case 1:
                            return o.sent(), [3, 4];
                          case 2:
                            return (
                              (e = o.sent()),
                              (r = Object(T.a)(e)),
                              console.error(
                                "EventModerationChannelInfo: App Load: " +
                                  r.strErrorMsg,
                                r
                              ),
                              [3, 4]
                            );
                          case 3:
                            return i.current.token.reason || a(!1), [7];
                          case 4:
                            return [2];
                        }
                      });
                    });
                  }
                },
                [e]
              ),
              n)
            )
              return o.a.createElement(J.a, {
                size: "small",
                string: Object(F.f)("#EventModTile_AppInfoLoading"),
              });
            var c = e.appid,
              d = e.clanSteamID;
            if (c) {
              var u = G.a.Get().GetApp(c);
              return u
                ? o.a.createElement(
                    "div",
                    { className: ae.TileAppInfo },
                    o.a.createElement(
                      "div",
                      { className: ae.TileAppInfoTitle },
                      o.a.createElement(
                        q.b,
                        { type: "app", id: u.GetAppID() },
                        o.a.createElement(
                          Z.a,
                          { href: Object(ne.f)(u.GetStorePageURL()) },
                          o.a.createElement("img", {
                            className: ae.TileAppInfoImage,
                            src: u.assets.GetMainCapsuleURL(),
                          })
                        )
                      ),
                      o.a.createElement(
                        q.b,
                        { type: "app", id: u.GetAppID() },
                        o.a.createElement(
                          Z.a,
                          { href: Object(ne.f)(u.GetStorePageURL()) },
                          o.a.createElement("div", null, u.GetName())
                        )
                      )
                    )
                  )
                : null;
            }
            if (d) {
              var m = d.GetAccountID(),
                p = S.a.GetClanInfoByClanAccountID(m);
              if (p && p.is_curator)
                return o.a.createElement(
                  "div",
                  { className: ae.TileAppInfo },
                  o.a.createElement(
                    "div",
                    { className: ae.TileAppInfoTitle },
                    o.a.createElement(
                      Z.a,
                      {
                        href: Object(ne.f)(
                          j.d.STORE_BASE_URL + "/curator/" + m + "/"
                        ),
                      },
                      o.a.createElement("img", {
                        className: ae.TileAppInfoImage,
                        src: p.avatar_full_url,
                      }),
                      o.a.createElement(
                        "div",
                        null,
                        Object(F.f)("#EventModTile_CuratorName", p.group_name)
                      )
                    )
                  )
                );
            }
            return null;
          })),
        ve = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.event,
                n = e.hidden,
                a = e.published,
                r = n
                  ? a
                    ? Object(F.f)("#EVentModTile_State_Staged")
                    : Object(F.f)("#EVentModTile_State_Draft")
                  : Object(F.f)("#EVentModTile_State_Published"),
                i = Object(f.c)(t),
                l = Object(f.b)(t),
                c = Object(f.d)(t),
                s =
                  c && !t.BHasTag("hide_store") && !t.BHasTag("mod_hide_store"),
                d =
                  i &&
                  !t.BHasTag("hide_library_overview") &&
                  !t.BHasTag("mod_hide_library_overview"),
                u =
                  l &&
                  !t.BHasTag("hide_library_detail") &&
                  !t.BHasTag("mod_hide_library_detail");
              return o.a.createElement(
                "div",
                { className: ae.VisibiltyCtn },
                o.a.createElement("div", { className: ae.TileTitle }, r),
                o.a.createElement(
                  "div",
                  null,
                  Object(F.f)(
                    "#EventModTile_Store_Visibility",
                    s
                      ? Object(F.f)("#WriteReview_Dialog_Yes")
                      : Object(F.f)("#WriteReview_Dialog_No"),
                    s
                      ? ""
                      : c
                      ? Object(F.f)(
                          "#EventModTime_Hidden_EventType",
                          t.GetEventTypeAsString()
                        )
                      : t.BHasTag("hide_store")
                      ? Object(F.f)("#EventModTime_Hidden_OptOut")
                      : Object(F.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                o.a.createElement(
                  "div",
                  null,
                  Object(F.f)(
                    "#EventModTile_LibraryHome_Visibility",
                    d
                      ? Object(F.f)("#WriteReview_Dialog_Yes")
                      : Object(F.f)("#WriteReview_Dialog_No"),
                    d
                      ? ""
                      : c
                      ? Object(F.f)(
                          "#EventModTime_Hidden_EventType",
                          t.GetEventTypeAsString()
                        )
                      : t.BHasTag("hide_library_overview")
                      ? Object(F.f)("#EventModTime_Hidden_OptOut")
                      : Object(F.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                o.a.createElement(
                  "div",
                  null,
                  Object(F.f)(
                    "#EventModTile_LibraryDetail_Visibility",
                    u
                      ? Object(F.f)("#WriteReview_Dialog_Yes")
                      : Object(F.f)("#WriteReview_Dialog_No"),
                    u
                      ? ""
                      : c
                      ? Object(F.f)(
                          "#EventModTime_Hidden_EventType",
                          t.GetEventTypeAsString()
                        )
                      : t.BHasTag("hide_library_detail")
                      ? Object(F.f)("#EventModTime_Hidden_OptOut")
                      : Object(F.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                t.BHasTag("enable_steam_china") &&
                  o.a.createElement(
                    "div",
                    null,
                    Object(F.f)("#EventModTile_SteamChina_Visibility")
                  ),
                t.BHasTag("disable_steam_global") &&
                  o.a.createElement(
                    "div",
                    null,
                    Object(F.f)("#EventModTile_SteamGlobal_Hidden")
                  )
              );
            }),
            (t = Object(l.c)([u.a], t))
          );
        })(o.a.Component),
        he = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(y.b)(34),
                  value: { eventType: 34 },
                },
              }),
              (t.m_cancelSignal = s.a.CancelToken.source()),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (t.prototype.ChangeCategoryForEvent = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e, t, n, a, r, o, i, c, s, u;
                return Object(l.e)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      (e = this.props),
                        (t = e.eventModel),
                        (n = e.closeModal),
                        (l.label = 1);
                    case 1:
                      return (
                        l.trys.push([1, 4, , 5]),
                        (a = this.state.newCategoryOption),
                        (r = a.value.eventType),
                        [
                          4,
                          D.Get().UpdatePartnerEventType(
                            this.m_cancelSignal,
                            t.clanSteamID,
                            t.GID,
                            r
                          ),
                        ]
                      );
                    case 2:
                      return (
                        l.sent(),
                        (o = f.o),
                        (i = []),
                        a.value.tags &&
                          a.value.tags.forEach(function (e) {
                            i.push(e);
                            var t = new I()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            i.push(t);
                          }),
                        [
                          4,
                          D.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            t.clanSteamID,
                            t.GetAnnouncementGID(),
                            i,
                            o,
                            new I().SetActionChangeEvent(r)
                          ),
                        ]
                      );
                    case 3:
                      return (
                        (c = l.sent()),
                        Object(d.G)(function () {
                          (t.type = r), (t.vecTags = c);
                        }),
                        this.setState({ bUpdating: !1 }, n),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (s = l.sent()),
                        (u = Object(T.a)(s)),
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
            (t.prototype.OnChangeSelection = function (e) {
              this.setState({ newCategoryOption: e });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.eventModel,
                a = t.closeModal,
                r = b.d
                  .filter(function (e) {
                    return 1 == e || 4 == e || e >= 9;
                  })
                  .map(function (e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(y.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(F.f)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"],
                  },
                }),
                r.push({
                  label: Object(F.f)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] },
                }),
                r.unshift({
                  value: { eventType: 15, tags: ["halloween"] },
                  label: Object(F.f)("#EventEditor_Category_DLC_Halloween"),
                }),
                r.unshift({
                  value: { eventType: 22, tags: ["halloween"] },
                  label: Object(F.f)("#PartnerEvent_22"),
                }),
                r.unshift({
                  value: { eventType: 23, tags: ["halloween"] },
                  label: Object(F.f)("#PartnerEvent_23"),
                }),
                r.unshift({
                  value: { eventType: 24, tags: ["halloween"] },
                  label: Object(F.f)("#PartnerEvent_24"),
                }),
                r.unshift({
                  value: { eventType: 35, tags: ["halloween"] },
                  label: Object(F.f)("#PartnerEvent_35"),
                }),
                o.a.createElement(
                  Q.d,
                  {
                    strTitle: Object(F.f)("#EventModTile_ChangeEventType"),
                    strDescription: Object(F.f)(
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
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      "div",
                      { className: ae.CategoryChangeDialog },
                      o.a.createElement("br", null),
                      this.state.bUpdating &&
                        o.a.createElement(J.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        o.a.createElement(
                          "div",
                          null,
                          Object(F.f)("#Chat_Settings_Error_ServerError"),
                          o.a.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      o.a.createElement(E.a, {
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
            Object(l.c)([te.a], t.prototype, "ChangeCategoryForEvent", null),
            Object(l.c)([te.a], t.prototype, "OnChangeSelection", null),
            (t = Object(l.c)([u.a], t))
          );
        })(o.a.Component),
        Ee = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bUpdating: !1,
                bAccept: t.props.eventModel.BHasTag("halloween2019"),
                bHorror: t.props.eventModel.BHasTag("horror"),
                bCute: t.props.eventModel.BHasTag("cute"),
              }),
              (t.m_cancelSignal = s.a.CancelToken.source()),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "UpdateSeasonalTagDialog component unmounted"
              );
            }),
            (t.prototype.ChangeAcceptance = function () {
              this.setState({ bAccept: !this.state.bAccept });
            }),
            (t.prototype.ChangeHorror = function () {
              this.setState({ bHorror: !this.state.bHorror });
            }),
            (t.prototype.ChangeCute = function () {
              this.setState({ bCute: !this.state.bCute });
            }),
            (t.prototype.ApplyAction = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e, t, n, a, r, o;
                return Object(l.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (e = new Array()),
                        (t = new Array()),
                        this.state.bAccept
                          ? (e.push("halloween2019"),
                            t.push("halloween2019reviewed"))
                          : (t.push("halloween2019"),
                            e.push("halloween2019reviewed")),
                        this.state.bCute ? e.push("cute") : t.push("cute"),
                        this.state.bHorror
                          ? e.push("horror")
                          : t.push("horror"),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        (n = this.props.eventModel),
                        [
                          4,
                          D.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            e,
                            t,
                            new I().SetUpdateSeasonalTags(
                              this.state.bAccept
                                ? "halloween2019"
                                : "halloween2019reviewed"
                            )
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = i.sent()),
                        (n.vecTags = a),
                        this.props.closeModal(),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (r = i.sent()),
                        (o = Object(T.a)(r)),
                        console.error(
                          "EventModerationTile " + o.strErrorMsg,
                          o
                        ),
                        this.setState({ strErrorMsg: o.strErrorMsg }),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = (t.eventModel, t.closeModal);
              return o.a.createElement(
                Q.d,
                {
                  strTitle: Object(F.f)("#EventModTile_SeasonalTag"),
                  onCancel: n,
                  onOK: function () {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  },
                },
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    "div",
                    { className: ae.CategoryChangeDialog },
                    o.a.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance,
                    }),
                    o.a.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(F.f)("#EventModTile_SeasonalTag_Desc")
                    ),
                    o.a.createElement(
                      "div",
                      null,
                      Object(F.f)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    o.a.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror,
                    }),
                    o.a.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    o.a.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute,
                    }),
                    o.a.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      o.a.createElement(J.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      o.a.createElement(
                        "div",
                        null,
                        Object(F.f)("#Chat_Settings_Error_ServerError"),
                        o.a.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(l.c)([te.a], t.prototype, "ChangeAcceptance", null),
            Object(l.c)([te.a], t.prototype, "ChangeHorror", null),
            Object(l.c)([te.a], t.prototype, "ChangeCute", null),
            Object(l.c)([te.a], t.prototype, "ApplyAction", null),
            t
          );
        })(o.a.Component),
        be = n("5eAM"),
        fe = n("ir+G"),
        _e = n("gOcu"),
        ge = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { bLoadingEvent: !0 }),
              (t.m_cancelSignal = s.a.CancelToken.source()),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "SteamGameFestivalStoreDebug to unload "
              );
            }),
            (t.prototype.componentDidMount = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e, t, n, a, r, o, i, c, s;
                return Object(l.e)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (
                        (e = this.props),
                        (t = e.clanEventGID),
                        (n = e.clanAccountID),
                        console.log(t, n, typeof t, typeof n),
                        !t || k.c.BHasClanEventModel(t)
                          ? [3, 8]
                          : ((a = _.a.InitFromClanID(Number.parseInt(n))),
                            [
                              4,
                              k.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                                a,
                                t,
                                0
                              ),
                            ])
                      );
                    case 1:
                      return (
                        (r = l.sent()),
                        (o = new Array()),
                        (i = new Array()),
                        r.BHasSaleEnabled()
                          ? (this.setState({
                              event: r,
                              bLoadingEvent: !1,
                              bLoadingApps: !0,
                              bLoadingDemos: !0,
                              bLoadingAssociatedDemoInfo: !0,
                            }),
                            (c = new Map()),
                            r.jsondata.sale_sections.forEach(function (e) {
                              "tabs" == e.section_type &&
                                e.tabs.forEach(function (e) {
                                  e.capsules.forEach(function (e) {
                                    "game" == e.type ||
                                    "application" == e.type ||
                                    "software" == e.type
                                      ? c.has(e.id) ||
                                        (c.set(e.id, !0), o.push(e.id))
                                      : c.has(e.id) ||
                                        (c.set(e.id, !0), i.push(e.id));
                                  });
                                });
                            }),
                            [4, be.a.LoadAppLinkInfo(o)])
                          : [3, 6]
                      );
                    case 2:
                      return (
                        l.sent(),
                        this.setState({
                          rgAppIDs: o,
                          rgUnknownTypeAppIDs: i,
                          bLoadingApps: !1,
                        }),
                        [4, fe.a.BatchLoadAppCapsules(o)]
                      );
                    case 3:
                      return (
                        l.sent(),
                        this.setState({ bLoadingAssociatedDemoInfo: !1 }),
                        [4, _e.a.Get().LoadAppIDsBatch(o, this.m_cancelSignal)]
                      );
                    case 4:
                      return (
                        l.sent(),
                        (s = new Array()),
                        _e.a
                          .Get()
                          .GetAllDemoInfo()
                          .forEach(function (e) {
                            return s.push(e.demo_appid);
                          }),
                        [4, be.a.LoadAppLinkInfo(s)]
                      );
                    case 5:
                      return (
                        l.sent(),
                        this.setState({ bLoadingDemos: !1, rgDemoIDs: s }),
                        [3, 7]
                      );
                    case 6:
                      this.setState({ bLoadingEvent: !1, rgAppIDs: o }),
                        (l.label = 7);
                    case 7:
                      return [3, 9];
                    case 8:
                      this.setState({ bLoadingEvent: !1 }), (l.label = 9);
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.render = function () {
              if (
                this.state.bLoadingEvent ||
                this.state.bLoadingDemos ||
                this.state.bLoadingApps ||
                this.state.bLoadingAssociatedDemoInfo
              )
                return r.createElement(J.a, {
                  string:
                    Object(F.f)("#Loading") +
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
                return r.createElement("div", null, " Failed to load event");
              var e = this.state.event;
              if (!e.jsondata.bSaleEnabled)
                return r.createElement("div", null, "Not a sale evnet");
              var t = new Map();
              this.state.rgDemoIDs.forEach(function (e) {
                return t.set(e, !0);
              });
              var n = new Array(),
                a = new Array();
              be.a.GetMissingAppIDs().forEach(function (e, t) {
                n.push(
                  r.createElement(
                    "div",
                    { key: "missing: " + t },
                    r.createElement(
                      "a",
                      {
                        href: j.d.STORE_BASE_URL + "app/" + t + "/?beta=1",
                        target: "_blank",
                      },
                      t
                    )
                  )
                ),
                  a.push(t);
              });
              var o = new Array();
              be.a.GetAllLoadedAppLinks().forEach(function (e, n) {
                if (!t.has(n) && !_e.a.Get().BHasDemoAppID(n)) {
                  var a = be.a.GetAppLinkInfo(n);
                  o.push(
                    r.createElement(
                      "div",
                      { key: "missingdemo_" + n },
                      "demo" == a.type &&
                        r.createElement(
                          "b",
                          null,
                          "--Error: Sale Page has Demo AppID, based game -- "
                        ),
                      a.name,
                      " (",
                      n,
                      ")",
                      r.createElement(
                        "a",
                        {
                          href: Object(ne.f)(
                            j.d.STORE_BASE_URL + "app/" + n + "/?beta=0"
                          ),
                          target: "_blank",
                        },
                        "Store Page"
                      ),
                      " ",
                      r.createElement(
                        "a",
                        {
                          href: j.d.PARTNER_BASE_URL + "apps/landing/" + n,
                          target: "_blank",
                        },
                        "App Landing Page"
                      )
                    )
                  );
                }
              });
              var i = 0,
                l = 0,
                c = new Array(),
                s = 0,
                d = 0,
                u = 0,
                m = 0;
              fe.a.GetAllAppInfos().forEach(function (e, t) {
                var n = !1;
                if (e.BIsLoaded() && _e.a.Get().BHasDemoAppID(t)) {
                  var r = _e.a.Get().GetDemoEventInfo(t);
                  be.a.GetAppLinkInfo(r.demo_appid).coming_soon
                    ? ((s += 1), (n = !0))
                    : (d += 1);
                }
                e.BIsLoaded() && e.GetAppStoreData().BHasDemoAppID()
                  ? ((i += 1), n && (u += 1))
                  : e.BIsLoaded() && _e.a.Get().BHasDemoAppID(t)
                  ? ((l += 1), n || (m += 1))
                  : -1 ==
                      a.findIndex(function (e) {
                        return e == t;
                      }) && c.push(e.GetAppStoreData());
              });
              var p = new Array();
              c.forEach(function (e) {
                p.push(
                  r.createElement(
                    "div",
                    { key: "missing_capps" + e.appid },
                    r.createElement(
                      "a",
                      {
                        href:
                          j.d.STORE_BASE_URL + "app/" + e.appid + "/?beta=1",
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
              var v = 0;
              return (
                be.a.GetAllLoadedAppLinks().forEach(function (e) {
                  "demo" != e.type && (v += 1);
                }),
                r.createElement(
                  L.a,
                  null,
                  r.createElement(
                    "h1",
                    null,
                    e.GetNameWithFallback(Object(b.f)(j.d.LANGUAGE))
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Unique AppIDs:"),
                    " ",
                    this.state.rgAppIDs.length,
                    " "
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "Visible Apps in ",
                      j.d.COUNTRY,
                      ":"
                    ),
                    " ",
                    v
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Unknown AppID types:"),
                    " ",
                    this.state.rgUnknownTypeAppIDs.length
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Missing AppIDs:"),
                    " ",
                    be.a.GetNumMissingAppLinks(),
                    " "
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Demo via DemoStore:"),
                    " ",
                    _e.a.Get().GetNumDemos()
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "Visible apps missing demo store:"
                    ),
                    " ",
                    o.length
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "CApplications Loaded:"),
                    " ",
                    fe.a.GetNumAppLinkLoaded(),
                    " "
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "CApplication with Associated Demos:"
                    ),
                    " ",
                    i
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "  Associated with store page but not released: "
                    ),
                    " ",
                    u
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "CApplication with demo without association:"
                    ),
                    " ",
                    l
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "  Released but not associated with store page: "
                    ),
                    " ",
                    m
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "CApplication missing:"),
                    " ",
                    fe.a.GetMissingAppIDs().size
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "b",
                      null,
                      "CApplication without demo store and demo associations:"
                    ),
                    " ",
                    c.length
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Released Demo: "),
                    d
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("b", null, "Unreleased Demo: "),
                    s
                  ),
                  r.createElement("hr", null),
                  r.createElement("h2", null, "Missing Appids:"),
                  n,
                  r.createElement(
                    "h2",
                    null,
                    "Missing BOTH demo list and associated demo on product page:"
                  ),
                  p,
                  r.createElement(
                    "h2",
                    null,
                    "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
                  ),
                  o
                )
              );
            }),
            (t = Object(l.c)([u.a], t))
          );
        })(r.Component),
        Se = new ((function () {
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
            Object(l.c)([d.C], e.prototype, "m_backfill", void 0),
            Object(l.c)([d.C], e.prototype, "m_mapEventGIDProcessed", void 0),
            Object(l.c)([d.C], e.prototype, "m_bBackfillInProgress", void 0),
            Object(l.c)([d.C], e.prototype, "m_nProcessed", void 0),
            Object(l.c)([d.C], e.prototype, "m_nSuccesses", void 0),
            Object(l.c)([d.C], e.prototype, "m_nFailures", void 0),
            Object(l.c)([d.C], e.prototype, "m_nWarning", void 0),
            Object(l.c)([d.C], e.prototype, "m_nSkipped", void 0),
            Object(l.c)([d.k], e.prototype, "StartBackfill", null),
            Object(l.c)([d.k], e.prototype, "CompleteBackfill", null),
            Object(l.c)([d.k], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        ye = n("vNkc"),
        Ae = n("Nsq5"),
        Oe = n("mB/g"),
        Ce = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_cancelSignal = s.a.CancelToken.source()),
              (t.m_nImageID = 0),
              (t.m_mapArtworkResizeSuccess = new Map()),
              (t.state = { eBackfillState: void 0 }),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "EventBackfillLanding component unmounted"
              );
            }),
            (t.prototype.OnArtworkResizeBackfill = function () {
              null == this.state.eBackfillState &&
                this.setState(
                  { eBackfillState: "started" },
                  this.BeginArtworkResize
                );
            }),
            (t.prototype.BeginArtworkResize = function () {
              var e = this;
              this.m_mapArtworkResizeSuccess.set("capsule", 0),
                this.m_mapArtworkResizeSuccess.set("spotlight", 0),
                this.m_mapArtworkResizeSuccess.set("background", 0),
                this.RunArtworkResizeBackfill()
                  .then(function () {
                    return e.setState({ eBackfillState: "success" });
                  })
                  .catch(function (t) {
                    var n = Object(T.a)(t);
                    console.error(
                      "EventBackfillLanding: error " + n.strErrorMsg,
                      n
                    ),
                      e.setState({ eBackfillState: "error" });
                  });
            }),
            (t.prototype.GetImageInfo = function (e, t, n) {
              return (
                void 0 === n && (n = ""),
                Object(l.b)(this, void 0, void 0, function () {
                  var a, r;
                  return Object(l.e)(this, function (o) {
                    return (
                      (a = g.a.GetExtensionTypeFromURL(t)),
                      (r = g.a.GetHashFromHashAndExt(t) + n),
                      [
                        2,
                        g.e.AsyncGetImageResolution(
                          e,
                          r,
                          a,
                          this.m_cancelSignal,
                          !0
                        ),
                      ]
                    );
                  });
                })
              );
            }),
            (t.prototype.HandleErrorFatal = function (e, t, n, a) {
              var r = Object(T.a)(t),
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
                    Se.CloseProgress(e, a))
                  : Se.CompleteBackfill("resize_image");
            }),
            (t.prototype.HandleResizeForImageType = function (e, t, n, a, r) {
              return Object(l.b)(this, void 0, void 0, function () {
                var o,
                  i,
                  c,
                  s = this;
                return Object(l.e)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      (o = function (o) {
                        var c, d, u, m, p, v, h;
                        return Object(l.e)(this, function (l) {
                          switch (l.label) {
                            case 0:
                              return e[o] && e[o].length > 0
                                ? ((c = e[o]),
                                  (d = g.a.GetExtensionTypeFromURL(c)),
                                  (u = new _.a(t.clan_steamid)),
                                  d
                                    ? [
                                        4,
                                        i
                                          .GetImageInfo(u, c)
                                          .catch(function (e) {
                                            return (
                                              s.HandleErrorFatal(
                                                null,
                                                e,
                                                "GetImageInfo Original",
                                                n
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
                              return 1 == (m = l.sent()).success &&
                                Object(Ae.d)(m.width, m.height, a)
                                ? [
                                    4,
                                    i.GetImageInfo(u, c, r).catch(function (e) {
                                      return (
                                        s.HandleErrorFatal(
                                          null,
                                          e,
                                          "GetImageInfo Resize",
                                          n
                                        ),
                                        { height: 0, width: 0, success: 2 }
                                      );
                                    }),
                                  ]
                                : [3, 6];
                            case 2:
                              return 1 != l.sent().success
                                ? [3, 3]
                                : ((n.bAlreadyProcessed = !0), [3, 5]);
                            case 3:
                              return (
                                (n.bProcessing = !0),
                                (p = g.a.GetHashFromHashAndExt(c)),
                                (v = g.a.GetExtensionStringFromHashAndExt(c)),
                                (h = g.d.GetResizeDimension(a)),
                                [
                                  4,
                                  g.b
                                    .SendResizeRequest(
                                      i.m_cancelSignal,
                                      u,
                                      p,
                                      v,
                                      h
                                    )
                                    .then(function (e) {
                                      console.log(
                                        "success on the resize request"
                                      ),
                                        e == h.length
                                          ? ((n.bSucceeded = !0),
                                            s.m_mapArtworkResizeSuccess.set(
                                              a,
                                              s.m_mapArtworkResizeSuccess.get(
                                                a
                                              ) + 1
                                            ))
                                          : ((n.bFailed = !0),
                                            (n.strMessage =
                                              "Did not resize all: " +
                                              a +
                                              " " +
                                              e +
                                              " / " +
                                              h.length));
                                    })
                                    .catch(function (e) {
                                      n.bFailed = !0;
                                      var t = Object(T.a)(e);
                                      (n.strMessage = t.strErrorMsg),
                                        console.error(
                                          "Resize: " + t.strErrorMsg,
                                          t
                                        );
                                    }),
                                ]
                              );
                            case 4:
                              l.sent(), (l.label = 5);
                            case 5:
                              return [3, 7];
                            case 6:
                              (n.bSkipped = !0), (l.label = 7);
                            case 7:
                              return [3, 9];
                            case 8:
                              (n.bSkipped = !0), (l.label = 9);
                            case 9:
                              return [2];
                          }
                        });
                      }),
                        (i = this),
                        (c = 0),
                        (d.label = 1);
                    case 1:
                      return c < e.length && c < 30 ? [5, o(c)] : [3, 4];
                    case 2:
                      d.sent(), (d.label = 3);
                    case 3:
                      return ++c, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.RunArtworkResizeBackfill = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  n,
                  a,
                  r,
                  o = this;
                return Object(l.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      Se.StartBackfill("resize_image"), (e = 0), (i.label = 1);
                    case 1:
                      return Se.BIsBackkFillInProgress()
                        ? [
                            4,
                            w
                              .Get()
                              .LoadPartnerEventForQueryIncremental(
                                this.m_cancelSignal,
                                e,
                                25
                              )
                              .catch(function (e) {
                                return o.HandleErrorFatal(
                                  null,
                                  e,
                                  "LoadPartnerEventForQueryIncremental"
                                );
                              }),
                          ]
                        : [3, 7];
                    case 2:
                      if (!(t = i.sent()) || 0 == t.length)
                        return (
                          Se.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (e += t.length),
                        (n = function (e) {
                          var n, r, i, c;
                          return Object(l.e)(this, function (l) {
                            switch (l.label) {
                              case 0:
                                return (
                                  (n = t[e]),
                                  (r = Se.CreateOrGetBackfillProgess(
                                    n.unique_id
                                  )),
                                  n.announcement_gid &&
                                  0 != n.announcement_gid.length
                                    ? [
                                        4,
                                        k.c
                                          .LoadPartnerEventFromAnnoucementGID(
                                            Number(n.appid),
                                            n.announcement_gid,
                                            100
                                          )
                                          .catch(function (e) {
                                            o.HandleErrorFatal(
                                              n.announcement_gid,
                                              e,
                                              "LoadPartnerEventFromAnnoucementGID",
                                              r
                                            );
                                          }),
                                      ]
                                    : ((r.bSkipped = !0),
                                      (r.bWarning = !0),
                                      Se.CloseProgress(n.unique_id, r),
                                      [2, "continue"])
                                );
                              case 1:
                                return (
                                  l.sent(),
                                  r.bFailed
                                    ? [2, "continue"]
                                    : (i = k.c.GetClanEventFromAnnouncementGID(
                                        n.announcement_gid
                                      ))
                                    ? r.bSucceeded ||
                                      r.bFailed ||
                                      r.bAlreadyProcessed
                                      ? ((r.bAlreadyProcessed = !0),
                                        Se.CloseProgress(n.unique_id, r),
                                        [2, "continue"])
                                      : ((r.bAnalysing = !0),
                                        a.setState({
                                          strInfo:
                                            "Processing " +
                                            Se.GetBackfillGIDs().length +
                                            " Appid: " +
                                            i.appid +
                                            " Event " +
                                            i.GID +
                                            " Title: " +
                                            i.GetNameWithFallback(0),
                                        }),
                                        i.jsondata &&
                                        i.jsondata.localized_capsule_image
                                          ? ((c =
                                              i.jsondata
                                                .localized_capsule_image),
                                            [
                                              4,
                                              a
                                                .HandleResizeForImageType(
                                                  c,
                                                  n,
                                                  r,
                                                  "capsule",
                                                  g.c.capsule_main
                                                )
                                                .catch(function (e) {
                                                  return o.HandleErrorFatal(
                                                    null,
                                                    e,
                                                    "HandleResizeForImageType capsule",
                                                    r
                                                  );
                                                }),
                                            ])
                                          : [3, 3])
                                    : ((r.bFailed = !0),
                                      (r.strMessage =
                                        "Failed to load the event: " +
                                        n.unique_id),
                                      Se.CloseProgress(n.unique_id, r),
                                      [2, "continue"])
                                );
                              case 2:
                                l.sent(), (l.label = 3);
                              case 3:
                                return i.jsondata &&
                                  i.jsondata.localized_title_image
                                  ? ((c = i.jsondata.localized_title_image),
                                    [
                                      4,
                                      a
                                        .HandleResizeForImageType(
                                          c,
                                          n,
                                          r,
                                          "background",
                                          g.c.background_mini
                                        )
                                        .catch(function (e) {
                                          return o.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType background",
                                            r
                                          );
                                        }),
                                    ])
                                  : [3, 5];
                              case 4:
                                l.sent(), (l.label = 5);
                              case 5:
                                return i.jsondata &&
                                  i.jsondata.localized_spotlight_image
                                  ? ((c = i.jsondata.localized_spotlight_image),
                                    [
                                      4,
                                      a
                                        .HandleResizeForImageType(
                                          c,
                                          n,
                                          r,
                                          "spotlight",
                                          g.c.spotlight_main
                                        )
                                        .catch(function (e) {
                                          return o.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType spotlight",
                                            r
                                          );
                                        }),
                                    ])
                                  : [3, 7];
                              case 6:
                                l.sent(), (l.label = 7);
                              case 7:
                                return (
                                  Se.CloseProgress(n.unique_id, r),
                                  Se.BIsBackkFillInProgress()
                                    ? [2]
                                    : [2, "break"]
                                );
                            }
                          });
                        }),
                        (a = this),
                        (r = 0),
                        (i.label = 3);
                    case 3:
                      return r < t.length ? [5, n(r)] : [3, 6];
                    case 4:
                      if ("break" === i.sent()) return [3, 6];
                      i.label = 5;
                    case 5:
                      return ++r, [3, 3];
                    case 6:
                      return Se.m_nFailures > 5e3
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
            (t.prototype.RenderFailure = function () {
              var e = new Array();
              return (
                Se.m_nFailures > 0 &&
                  Se.GetBackfillGIDs().forEach(function (t) {
                    var n = Se.GetEventBackfillProgress().get(t);
                    if (n && n.bFailed) {
                      var a = k.c.GetClanEventModel(t);
                      a &&
                        e.push(
                          r.createElement(
                            "div",
                            { key: t },
                            r.createElement(
                              Oe.c,
                              { eventModel: a, route: Oe.a.k_eView },
                              a.GetNameWithFallback(0)
                            ),
                            r.createElement(
                              "div",
                              { className: ye.Error },
                              n.strMessage
                            )
                          )
                        );
                    }
                  }),
                e
              );
            }),
            (t.prototype.RenderResizeProgress = function () {
              var e = new Array();
              return (
                e.push(
                  r.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  r.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  r.createElement(
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
            (t.prototype.render = function () {
              var e = this.RenderFailure(),
                t = this.m_mapArtworkResizeSuccess.has("capsule")
                  ? this.RenderResizeProgress()
                  : void 0;
              return r.createElement(
                "div",
                null,
                r.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "button",
                    {
                      onClick: function () {
                        return Se.CompleteBackfill("resize_image");
                      },
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  r.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                r.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  Se.m_nProcessed
                ),
                r.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  Se.m_nSuccesses
                ),
                r.createElement("div", null, "Events Warning: ", Se.m_nWarning),
                r.createElement("div", null, "Events Failed: ", Se.m_nFailures),
                r.createElement("div", null, "Events Skipped: ", Se.m_nSkipped),
                e.length > 0 &&
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  r.createElement(
                    "div",
                    null,
                    r.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  r.createElement(J.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress",
                  })
              );
            }),
            Object(l.c)([te.a], t.prototype, "OnArtworkResizeBackfill", null),
            Object(l.c)([te.a], t.prototype, "BeginArtworkResize", null),
            (t = Object(l.c)([u.a], t))
          );
        })(r.Component),
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
            var e = Object(j.h)("sc_app_privildge", "application_config");
            this.ValidateStoreDefault(e)
              ? ("dev" === j.d.WEB_UNIVERSE &&
                  console.log(
                    "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                      e.bHasAccess
                  ),
                (this.m_objApprovalPriviledge = e),
                (this.m_LoadingPriviledgePromise = null))
              : (j.k.logged_in && j.d.EREALM === b.e.k_ESteamRealmChina) ||
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
              return Object(l.b)(this, void 0, void 0, function () {
                return Object(l.e)(this, function (e) {
                  return this.m_objApprovalPriviledge
                    ? [2, this.m_objApprovalPriviledge]
                    : (this.m_LoadingPriviledgePromise ||
                        (this.m_LoadingPriviledgePromise = this.InternalLoadAppApprovalPriviledge()),
                      [2, this.m_LoadingPriviledgePromise]);
                });
              });
            }),
            (e.prototype.InternalLoadAppApprovalPriviledge = function () {
              var e;
              return Object(l.b)(this, void 0, void 0, function () {
                var t, n, a, r;
                return Object(l.e)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      (t =
                        j.d.STORE_BASE_URL +
                        "events_admin/ajaxgetscapprovalpriviledge"),
                        (o.label = 1);
                    case 1:
                      return (
                        o.trys.push([1, 3, , 4]),
                        [4, s.a.get(t, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        (n = o.sent()),
                        1 ==
                        (null === (e = null == n ? void 0 : n.data) ||
                        void 0 === e
                          ? void 0
                          : e.success)
                          ? ((this.m_objApprovalPriviledge = {
                              bHasAccess: n.data.bHasAccess,
                            }),
                            [2, this.m_objApprovalPriviledge])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (a = o.sent()),
                        (r = Object(T.a)(a)),
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
            Object(l.c)([d.C], e.prototype, "m_objApprovalPriviledge", void 0),
            e
          );
        })(),
        He = Object(u.a)(function (e) {
          var t = r.useState(null),
            n = t[0],
            a = t[1],
            o = e.eventModel,
            i = o.clanSteamID.GetAccountID();
          r.useEffect(
            function () {
              var e = s.a.CancelToken.source();
              return (
                Object(l.b)(void 0, void 0, void 0, function () {
                  var t, n, r;
                  return Object(l.e)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (t = _.a.InitFromClanID(i)),
                          [4, je.a.Get().LoadSingleAppEventPermissions(t)]
                        );
                      case 1:
                        return (
                          (n = o.sent()),
                          [4, Fe.Get().HintLoadAppApprovalPriviledge()]
                        );
                      case 2:
                        return (
                          (r = o.sent()),
                          e.token.reason ||
                            a(j.k.is_support || n.can_edit || r.bHasAccess),
                          [2]
                        );
                    }
                  });
                }),
                function () {
                  return e.cancel("SteamChinaAdminPanel is unmounting");
                }
              );
            },
            [i]
          );
          var c = _.a.InitFromClanID(i);
          return j.k.is_support ||
            je.a.Get().GetPartnerEventPermissions(c).can_edit
            ? r.createElement(De.a, {
                eventModel: o,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: n
                  ? [
                      r.createElement(Ne, {
                        key: "removesteamchina",
                        eventModel: o,
                      }),
                    ]
                  : void 0,
              })
            : Fe.Get().BHasSteamChinaAppApprovalPriviledge()
            ? r.createElement(
                "div",
                { className: Re.DisplayAdminPanel },
                r.createElement(
                  "span",
                  { className: Re.DisplayAdminPanel_Title },
                  Object(F.f)("#EventDisplay_Admin_Title")
                ),
                r.createElement(Ne, { key: "removesteamchina", eventModel: o })
              )
            : null;
        }),
        Ne = function (e) {
          var t = e.eventModel;
          return r.createElement(
            "div",
            {
              className: Object($.a)(
                W.Button,
                Re.AdminButton,
                W.ValveOnlyBackground
              ),
              onClick: function (n) {
                var a = !1;
                Object(Y.d)(
                  r.createElement(
                    Q.d,
                    {
                      strTitle: Object(F.f)(
                        "#EventAdmin_Moderation_HideEventInSC"
                      ),
                      strDescription: Object(F.f)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc"
                      ),
                      bDestructiveWarning: !0,
                      closeModal: e.closeModal,
                      onOK: function () {
                        (a = !0),
                          Object(l.b)(void 0, void 0, void 0, function () {
                            var n, a, o, i, c, d, u, m, p, v, h;
                            return Object(l.e)(this, function (l) {
                              switch (l.label) {
                                case 0:
                                  (n = new URLSearchParams()).append(
                                    "sessionid",
                                    j.d.SESSIONID
                                  ),
                                    n.append(
                                      "clan_accountid",
                                      "" + t.clanSteamID.GetAccountID()
                                    ),
                                    n.append("gid_clan_event", "" + t.GID),
                                    (a = !1),
                                    (o = 0),
                                    (l.label = 1);
                                case 1:
                                  return (
                                    l.trys.push([1, 3, , 4]),
                                    (i =
                                      j.d.STORE_BASE_URL +
                                      "/events_admin/ajaxhidefromsteamchina"),
                                    [4, s.a.post(i, n, { withCredentials: !0 })]
                                  );
                                case 2:
                                  return (
                                    (c = l.sent()),
                                    (a =
                                      1 ==
                                        (null ===
                                          (m = null == c ? void 0 : c.data) ||
                                        void 0 === m
                                          ? void 0
                                          : m.success) ||
                                      29 ==
                                        (null ===
                                          (p = null == c ? void 0 : c.data) ||
                                        void 0 === p
                                          ? void 0
                                          : p.success)),
                                    29 ==
                                      (null ===
                                        (v = null == c ? void 0 : c.data) ||
                                      void 0 === v
                                        ? void 0
                                        : v.success) &&
                                      console.warn(
                                        "RemoveEventFromSteamChinaButton: we receive duplicate request " +
                                          t.clanSteamID.GetAccountID() +
                                          " : " +
                                          t.GID +
                                          "; event is still removed from SC"
                                      ),
                                    (o =
                                      null ===
                                        (h = null == c ? void 0 : c.data) ||
                                      void 0 === h
                                        ? void 0
                                        : h.success),
                                    [3, 4]
                                  );
                                case 3:
                                  return (
                                    (d = l.sent()),
                                    (u = Object(T.a)(d)),
                                    (o = u.errorCode),
                                    console.error(
                                      "RemoveEventFromSteamChinaButton: error " +
                                        u.strErrorMsg,
                                      u
                                    ),
                                    [3, 4]
                                  );
                                case 4:
                                  return (
                                    e.closeModal && e.closeModal(),
                                    Object(Y.d)(
                                      a
                                        ? r.createElement(
                                            Q.d,
                                            { bAlertDialog: !0 },
                                            Object(F.f)(
                                              "#EventDisplay_Share_Success"
                                            )
                                          )
                                        : r.createElement(
                                            Q.f,
                                            null,
                                            Object(F.f)(
                                              "#EventDisplay_Share_Failure"
                                            ) +
                                              " " +
                                              o
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
                    a &&
                      r.createElement(J.a, {
                        size: "medium",
                        position: "center",
                      })
                  ),
                  Object(ee.m)(n)
                );
              },
            },
            Object(F.f)("#EventAdmin_Moderation_HideEventInSC")
          );
        },
        Ue = Ie.a.Get();
      function xe() {
        document.body.classList.contains("events_hub") &&
          document.body.classList.remove("events_hub");
      }
      var ze = Object(u.a)(function (e) {
          var t = e.bInfiniteScroll,
            n = e.event_gid,
            a = e.announcement_gid,
            i = e.clansteamid,
            l = e.appid,
            c = Object(r.useState)(n ? Ue.GetClanEventModel(n) : void 0),
            d = c[0],
            u = c[1],
            m = Object(r.useState)(!1),
            p = m[0],
            v = m[1],
            h = function (e, t) {
              t.token.reason ||
                (u(e),
                (function (e) {
                  var t;
                  if (e && e.appid) {
                    var n = fe.a.GetStoreCapsuleInfo(e.appid).GetAppStoreData();
                    t = n && n.title;
                  } else if (e && e.clanSteamID) {
                    var a = S.a.GetClanInfoByClanAccountID(
                      e.clanSteamID.GetAccountID()
                    );
                    t = a && a.group_name;
                  }
                  var r =
                    e && e.GetNameWithFallback(Object(Me.g)(j.d.LANGUAGE));
                  if (e && t && r) {
                    var o = Object(F.f)(
                      "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                      t,
                      r
                    );
                    document.title != o && (document.title = o);
                  }
                })(e));
            },
            E = function (e) {
              var t = Object(T.a)(e);
              console.error("StoreEventDetailView failed " + t.strErrorMsg, t),
                v(!0);
            };
          if (
            (Object(r.useEffect)(xe, []),
            Object(r.useEffect)(
              function () {
                var e = s.a.CancelToken.source();
                return (
                  d ||
                    (n && !Ue.GetClanEventModel(n)
                      ? Ue.LoadPartnerEventGeneric(i, l, n, void 0, 0)
                          .then(function (t) {
                            return h(t, e);
                          })
                          .catch(function () {
                            e.token.reason ||
                              Ue.LoadPartnerEventGeneric(i, l, void 0, n, 0)
                                .then(function (t) {
                                  return h(t, e);
                                })
                                .catch(E);
                          })
                      : a &&
                        !Ue.GetClanEventGIDFromAnnouncementGID(a) &&
                        Ue.LoadPartnerEventGeneric(i, l, void 0, a, 0)
                          .then(function (t) {
                            return h(t, e);
                          })
                          .catch(E)),
                  function () {
                    e.cancel("StoreEventDetailView: unmounting");
                  }
                );
              },
              [n, i, l, a, d]
            ),
            p || !d)
          ) {
            var f = "lang_" + Object(Me.e)(Object(Me.g)(j.d.LANGUAGE));
            return o.a.createElement(
              "div",
              {
                className: Object($.a)(
                  Le.a.EventDetailsPageContainer,
                  f,
                  V.a.PartnerEventFont,
                  Le.a.NoTitleArtwork
                ),
              },
              o.a.createElement("div", { style: { height: "100px" } }),
              o.a.createElement(Ge.a, { strImageURL: "" }),
              o.a.createElement(Ge.b, {
                strImageURL: "",
                body: p
                  ? o.a.createElement(
                      "div",
                      { className: Pe.a.ErrorMsg },
                      Object(F.n)(
                        "#Events_FailedToFind",
                        o.a.createElement(
                          "a",
                          { href: j.d.STORE_BASE_URL + "news/" },
                          Object(F.f)("#EventDisplay_NewsHubSubtitle")
                        )
                      )
                    )
                  : o.a.createElement(J.a, {
                      string: Object(F.f)("#Loading"),
                      size: "medium",
                      position: "center",
                    }),
                postbody: Boolean(p && i)
                  ? o.a.createElement(ke.a, {
                      clanAccountID: i.GetAccountID(),
                      partnerEventStore: Ue,
                    })
                  : void 0,
              })
            );
          }
          return t
            ? o.a.createElement(
                L.a,
                null,
                o.a.createElement(we.a, {
                  appid: d.appid,
                  trackingLocation: 7,
                  announcementGID: d.GetAnnouncementGID(),
                  partnerEventStore: Ue,
                  eventModel: d,
                  showAppHeader: !0,
                  closeModal: function () {
                    return e.history.push(
                      Object(Oe.d)(d, Oe.a.k_eStoreNewsHub, "allowRelative")
                    );
                  },
                })
              )
            : o.a.createElement(
                L.a,
                null,
                o.a.createElement(Ge.c, {
                  lang: Object(Me.g)(j.d.LANGUAGE),
                  partnerEventStore: Ue,
                  event: d,
                  adminPanel:
                    j.d.EREALM === b.e.k_ESteamRealmChina
                      ? o.a.createElement(He, { eventModel: d })
                      : o.a.createElement(De.a, {
                          eventModel: d,
                          partnerEventStore: Ue,
                        }),
                  otherEventRow: o.a.createElement(ke.a, {
                    clanAccountID: d.clanSteamID.GetAccountID(),
                    gidAnnouncement: d.AnnouncementGID,
                    partnerEventStore: Ue,
                  }),
                })
              );
        }),
        We = Object(h.i)(ze),
        Ve = n("WBba"),
        qe = n("qD+2"),
        Qe = n("apHd"),
        Ke = n("xnZ7"),
        Ye = n.n(Ke),
        Je = n("6Y59"),
        Xe = n("r+ba"),
        Ze = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            n.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: [],
              last_update_event: null,
            };
            var a = Object(Qe.a)("EventWebRowEmbed");
            return (
              n.ValidateStoreDefault(a) &&
                ((n.state.bPreLoaded = a.bPreLoaded),
                (n.state.announcementGIDList = a.announcementGIDList),
                (n.state.last_update_event = a.last_update_event),
                (n.state.events = []),
                n.state.announcementGIDList.forEach(function (e) {
                  var t = k.c.GetClanEventFromAnnouncementGID(e);
                  t && n.state.events.push(t);
                })),
              n
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentDidMount = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  n,
                  a,
                  r,
                  o,
                  i,
                  c = this;
                return Object(l.e)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (
                        (e = this.props),
                        (t = e.appid),
                        (n = e.event_customization),
                        (a = e.partnerEventStore),
                        (r = e.trackingLocation),
                        this.state.bPreLoaded
                          ? [3, 2]
                          : [
                              4,
                              a.LoadAdjacentPartnerEvents(
                                null,
                                null,
                                t,
                                0,
                                2,
                                n
                              ),
                            ]
                      );
                    case 1:
                      (o = l.sent()),
                        this.setState({ events: o }),
                        r &&
                          o &&
                          o.length > 0 &&
                          ((i = je.a.Get().GetTracker()),
                          this.state.events
                            .filter(function (e) {
                              return e.BIsPartnerEvent();
                            })
                            .forEach(function (e) {
                              return i.MarkEventShown(
                                e.GID,
                                e.clanSteamID.GetAccountID(),
                                r
                              );
                            }),
                          i.Flush()),
                        (l.label = 2);
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
            (t.prototype.ValidateStoreDefault = function (e) {
              var t = e;
              return (
                !(!t || "object" != typeof t) &&
                void 0 !== t.bPreLoaded &&
                "boolean" == typeof t.bPreLoaded &&
                Array.isArray(t.announcementGIDList)
              );
            }),
            (t.prototype.ShowModal = function (e) {
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
            (t.prototype.ShowLatestUpdateModal = function () {
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
            (t.prototype.CloseModal = function () {
              this.setState({ bShowModal: !1, modalInitialEvent: null });
            }),
            (t.prototype.BHasLastUpdateEvent = function () {
              var e;
              return Boolean(
                null === (e = this.state.last_update_event) || void 0 === e
                  ? void 0
                  : e.rtime
              );
            }),
            (t.prototype.BShouldShowLastUpdateEvent = function () {
              var e = this.state,
                t = e.last_update_event,
                n = e.events;
              return (
                !(
                  !this.BHasLastUpdateEvent() ||
                  !(null == t ? void 0 : t.announcement_gid)
                ) && !(null == n ? void 0 : n.length)
              );
            }),
            (t.prototype.render = function () {
              var e,
                t = this,
                n = this.state.events;
              if (!n)
                return o.a.createElement(
                  "div",
                  { className: Ye.a.FlexCenter },
                  o.a.createElement(J.a, { size: "medium", position: "center" })
                );
              var a = window.screen.width <= 500 ? 1 : 2,
                r = Boolean(null == n ? void 0 : n.length),
                i = this.BHasLastUpdateEvent(),
                l = this.BShouldShowLastUpdateEvent()
                  ? this.state.last_update_event.announcement_gid
                  : void 0,
                c = this.props,
                s = c.partnerEventStore,
                d = c.strClassName,
                u = c.appid,
                m = c.trackingLocation;
              return o.a.createElement(
                "div",
                { className: d },
                this.state.bShowModal &&
                  o.a.createElement(we.a, {
                    classname: Xe.StoreHeaderAdjust,
                    appid: u,
                    trackingLocation: m,
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
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "h2",
                      null,
                      Object(F.f)("#EventBrowse_RecentEvents")
                    ),
                    o.a.createElement(
                      "div",
                      { className: Xe.SectionButtonCtn },
                      this.props.bViewAllShowInfiniteScroll
                        ? o.a.createElement(
                            "div",
                            {
                              className: Xe.SectionButton,
                              onClick: function () {
                                return t.ShowModal(n[0]);
                              },
                            },
                            Object(F.f)("#EventBrowse_MoreEventsBtn")
                          )
                        : o.a.createElement(
                            Oe.c,
                            {
                              eventModel: n[0],
                              route: Oe.a.k_eViewWebSiteHub,
                              className: Xe.SectionButton,
                            },
                            Object(F.f)("#EventBrowse_MoreEventsBtn")
                          )
                    ),
                    o.a.createElement(
                      "div",
                      { className: Xe.EventsSummariesCtn },
                      n.slice(0, a).map(function (e) {
                        var a =
                          1 === n.length && window.screen.width > 500
                            ? ke.c
                            : ke.b;
                        return o.a.createElement(a, {
                          key: e.GID,
                          event: e,
                          onClick: function (n) {
                            t.ShowModal(e),
                              n.stopPropagation(),
                              n.preventDefault();
                          },
                        });
                      })
                    )
                  ),
                Boolean(i && l) &&
                  o.a.createElement(et, {
                    nUpdateTime: this.state.last_update_event.rtime,
                    announcementGID: l,
                    onClick: this.ShowLatestUpdateModal,
                  }),
                Boolean(i && !l) &&
                  o.a.createElement($e, {
                    nUpdateTime: this.state.last_update_event.rtime,
                    onClick: this.ShowLatestUpdateModal,
                  })
              );
            }),
            Object(l.c)([te.a], t.prototype, "ShowModal", null),
            Object(l.c)([te.a], t.prototype, "ShowLatestUpdateModal", null),
            Object(l.c)([te.a], t.prototype, "CloseModal", null),
            t
          );
        })(o.a.Component),
        $e = function (e) {
          return o.a.createElement(
            "div",
            { className: Xe.LatestUpdateButtonCtn },
            o.a.createElement(
              "div",
              { className: Xe.LatestUpdateIcon },
              o.a.createElement(Je.hb, null)
            ),
            o.a.createElement(
              "div",
              { className: Xe.LatestUpdateButton, onClick: e.onClick },
              Object(F.f)(
                "#EventBrowse_LatestUpdateTime_Button",
                Object(F.p)(e.nUpdateTime)
              )
            )
          );
        },
        et = function (e) {
          var t = e.nUpdateTime,
            n = e.announcementGID,
            a = e.onClick,
            r = n ? k.c.GetClanEventFromAnnouncementGID(n) : null,
            i = function (e) {
              null == a || a(), e.stopPropagation(), e.preventDefault();
            };
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "h2",
              null,
              Object(F.f)("#EventBrowse_LastUpdateDate", Object(F.p)(t))
            ),
            o.a.createElement(
              "div",
              { className: Xe.SectionButtonCtn },
              o.a.createElement(
                "div",
                { className: Xe.SectionButton, onClick: i },
                Object(F.f)("#EventBrowse_ViewLatestUpdate")
              )
            ),
            Boolean(r) &&
              o.a.createElement(
                "div",
                { className: Xe.EventsSummariesCtn },
                o.a.createElement(ke.c, { event: r, onClick: i })
              )
          );
        },
        tt = n("5izx"),
        nt = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            n.m_rtimeOldest = 0;
            var a = tt.a.GetTimeNowWithOverrideAsDate(),
              r = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (n.m_rtimeOldest = Math.floor(r.getTime() / 1e3)), n;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props.appid;
              return o.a.createElement(Ze, {
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
            t
          );
        })(o.a.Component),
        at = n("2l+k"),
        rt = (function () {
          function e() {
            this.m_rgRSSEnabledClans = [];
          }
          return (
            (e.prototype.GetAllRSSEnabledClans = function () {
              return this.m_rgRSSEnabledClans;
            }),
            (e.prototype.GetTrustedEnabledClans = function (e) {
              return this.m_rgRSSEnabledClans
                .filter(function (t) {
                  return t.is_trusted_press == e;
                })
                .map(function (e) {
                  return e.clan_accoundid;
                });
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()), e.s_Singleton.Init()),
                e.s_Singleton
              );
            }),
            (e.prototype.Init = function () {
              var e = Object(j.h)("rssaccountinfo", "application_config");
              this.ValidateRSSAccountConfig(e) &&
                (this.m_rgRSSEnabledClans = e);
            }),
            (e.prototype.ValidateRSSAccountConfig = function (e) {
              var t = e;
              return (
                t &&
                Array.isArray(t) &&
                t.length > 0 &&
                "object" == typeof t[0] &&
                "number" == typeof t[0].clan_accoundid
              );
            }),
            (e.prototype.LoadKnownAllRSSInfo = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(l.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = new Array()),
                        (t = at.a.Get()),
                        this.m_rgRSSEnabledClans.forEach(function (n) {
                          t.BHasClanIDLoaded(n.clan_accoundid) ||
                            e.push(
                              t.QueueCuratorAdminInfoLoad(n.clan_accoundid)
                            );
                        }),
                        [4, Promise.all(e)]
                      );
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.ExtractWithoutRSSAutomation = function () {
              var e = [],
                t = at.a.Get();
              return (
                this.m_rgRSSEnabledClans.forEach(function (n) {
                  var a = t.GetRSSAdminForClanAccountID(n.clan_accoundid);
                  a && !a.BIsAutomationEnabled() && e.push(n.clan_accoundid);
                }),
                e
              );
            }),
            (e.prototype.HintLoadAccounts = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                return Object(l.e)(this, function (e) {
                  return [2];
                });
              });
            }),
            (e.prototype.ReindexClanEventsAndReloadAccount = function (e) {
              var t;
              return Object(l.b)(this, void 0, void 0, function () {
                var n, a, r, o, i;
                return Object(l.e)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      (n =
                        j.d.STORE_BASE_URL +
                        "events_admin/ajaxflushandreindexrss"),
                        (a = new FormData()).set("sessionid", j.d.SESSIONID),
                        a.append("clanids", "" + e),
                        (l.label = 1);
                    case 1:
                      return (
                        l.trys.push([1, 3, , 4]),
                        [4, s.a.post(n, a, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        (r = l.sent()),
                        1 ==
                        (null === (t = null == r ? void 0 : r.data) ||
                        void 0 === t
                          ? void 0
                          : t.success)
                          ? [2, !0]
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (o = l.sent()),
                        (i = Object(T.a)(o)),
                        console.error(
                          "Failed to ReindexClanEventsAndReloadAccount: " +
                            i.strErrorMsg,
                          i
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
        ot = n("wjMc"),
        it = n("BRUS"),
        lt = n("d+Me"),
        ct = n("WGPV"),
        st = n.n(ct),
        dt = Object(h.i)(function (e) {
          var t = Object(r.useState)(!0),
            n = t[0],
            a = t[1];
          if (
            (Object(r.useEffect)(function () {
              Object(l.b)(void 0, void 0, void 0, function () {
                return Object(l.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return S.a.Init(), [4, rt.Get().HintLoadAccounts()];
                    case 1:
                      return e.sent(), a(!1), [2];
                  }
                });
              });
            }, []),
            n)
          )
            return o.a.createElement(J.a, {
              string: Object(F.f)("#Loading"),
              size: "medium",
            });
          var i = rt.Get().GetTrustedEnabledClans(!0),
            c = rt.Get().GetTrustedEnabledClans(!1);
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              L.a,
              null,
              o.a.createElement(
                "h1",
                null,
                Object(F.f)("#RSSModeration_Title")
              ),
              o.a.createElement(ut, null),
              o.a.createElement(Et, {
                rgClanIDs: rt
                  .Get()
                  .GetAllRSSEnabledClans()
                  .map(function (e) {
                    return e.clan_accoundid;
                  }),
              }),
              o.a.createElement(mt, {
                rgClanIDs: i,
                strTitle: Object(F.f)("#RSSModeration_TrustTitle"),
              }),
              o.a.createElement(mt, {
                rgClanIDs: c,
                strTitle: Object(F.f)("#RSSModeration_RestTitle"),
              })
            )
          );
        }),
        ut = Object(u.a)(function (e) {
          var t = Object(r.useState)(!1),
            n = t[0],
            a = t[1],
            i = Object(r.useState)(void 0),
            c = i[0],
            s = i[1];
          return n
            ? o.a.createElement(J.a, {
                string: Object(F.f)("#Loading"),
                size: "medium",
              })
            : void 0 !== c
            ? Boolean(c.length > 0)
              ? o.a.createElement(mt, {
                  rgClanIDs: c,
                  strTitle: Object(F.f)("#RSSModeration_InactiveAutomation"),
                })
              : o.a.createElement(
                  "div",
                  null,
                  Object(F.f)("#RSSModreation_AllAutomationEnabled")
                )
            : o.a.createElement(
                R.d,
                {
                  onClick: function () {
                    return Object(l.b)(void 0, void 0, void 0, function () {
                      return Object(l.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return a(!0), [4, rt.Get().LoadKnownAllRSSInfo()];
                          case 1:
                            return (
                              e.sent(),
                              s(rt.Get().ExtractWithoutRSSAutomation()),
                              a(!1),
                              [2]
                            );
                        }
                      });
                    });
                  },
                },
                Object(F.f)("#RSSModeration_FindInActive"),
                " "
              );
        }),
        mt = function (e) {
          var t = e.rgClanIDs,
            n = e.strTitle,
            a = Object(r.useState)(!1),
            i = a[0],
            l = a[1],
            c = null;
          return (
            i ||
              (c = t.map(function (e) {
                return o.a.createElement(pt, { key: e, clanAccountID: e });
              })),
            o.a.createElement(
              "div",
              { className: Object($.a)(st.a.SectionContainer) },
              o.a.createElement(
                "h2",
                {
                  className: Object($.a)(st.a.ModSectionTitle),
                  onDoubleClick: function () {
                    return l(!i);
                  },
                },
                n,
                o.a.createElement("span", null, " "),
                o.a.createElement(
                  R.d,
                  {
                    className: st.a.ResizeButton,
                    onClick: function () {
                      return l(!i);
                    },
                  },
                  i
                    ? o.a.createElement(Je.J, null)
                    : o.a.createElement(Je.M, null)
                )
              ),
              i &&
                o.a.createElement(
                  R.d,
                  {
                    onClick: function () {
                      return l(!1);
                    },
                  },
                  Object(F.f)("#Sale_ShowContents")
                ),
              c
            )
          );
        },
        pt = Object(u.a)(function (e) {
          var t = e.clanAccountID;
          return S.a.BHasClanInfoLoadedByAccountID(t) &&
            at.a.Get().BHasClanIDLoaded(t)
            ? o.a.createElement(ht, {
                clanInfo: S.a.GetClanInfoByClanAccountID(t),
                rssAdminInfo: at.a.Get().GetRSSAdminForClanAccountID(t),
              })
            : o.a.createElement(vt, { clanAccountID: t });
        }),
        vt = function (e) {
          var t = e.clanAccountID,
            n = "-500px";
          return o.a.createElement(
            lt.a,
            {
              onEnter: function () {
                return Object(l.b)(void 0, void 0, void 0, function () {
                  var e;
                  return Object(l.e)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (e = _.a.InitFromClanID(t)),
                          [
                            4,
                            Promise.all([
                              S.a.LoadClanInfoForClanSteamID(e),
                              at.a.Get().QueueCuratorAdminInfoLoad(t),
                            ]),
                          ]
                        );
                      case 1:
                        return n.sent(), [2];
                    }
                  });
                });
              },
              topOffset: n,
              bottomOffset: n,
            },
            o.a.createElement(
              "div",
              { className: st.a.TileContainer },
              o.a.createElement("div", null, Object(F.f)("#Loading"), " - ", t)
            )
          );
        },
        ht = function (e) {
          var t = e.clanInfo,
            n = e.rssAdminInfo,
            a = Object(r.useState)(!1),
            i = a[0],
            l = a[1],
            c = j.d.STORE_BASE_URL + "newshub/group/" + t.clanAccountID,
            s =
              j.d.STORE_BASE_URL +
              "curator/" +
              t.clanAccountID +
              "/admin/manage_rss",
            d = j.d.COMMUNITY_BASE_URL + "group/" + t.clanAccountID,
            u =
              "https://steamsupport.valvesoftware.com/clan/overview/" +
              _.a.InitFromClanID(t.clanAccountID).ConvertTo64BitString(),
            m = at.a.Get().GetRSSAdminStats(t.clanAccountID);
          return o.a.createElement(
            "div",
            { className: Object($.a)(st.a.TileContainer) },
            o.a.createElement(
              "div",
              { className: Object($.a)(st.a.TileSpread) },
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "div",
                  null,
                  t.group_name,
                  " - ",
                  t.clanAccountID
                ),
                o.a.createElement(
                  "div",
                  null,
                  o.a.createElement(
                    "div",
                    null,
                    Object(F.f)("#CuratorAdmin_RSSFeed"),
                    ":"
                  ),
                  o.a.createElement("a", { href: n.GetRSSUrl() }, n.GetRSSUrl())
                ),
                Boolean(m) &&
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "div",
                      null,
                      Object(F.f)(
                        "#RSSModeration_TotalEvents",
                        m.total_event_count.toLocaleString()
                      )
                    ),
                    o.a.createElement(
                      "div",
                      null,
                      Object(F.f)(
                        "#RSSModeration_RSSEvents",
                        m.rss_event_count.toLocaleString()
                      )
                    )
                  ),
                o.a.createElement(
                  R.d,
                  {
                    onClick: function () {
                      return l(!i);
                    },
                  },
                  Object(F.f)(
                    i
                      ? "#Bbcode_Expand_Details_Expanded"
                      : "#Bbcode_Expand_Details_Collapsed"
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: c },
                      Object(F.f)("#EventDisplay_NewsHubSubtitle")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: s },
                      Object(F.f)("#CuratorAdmin_RSSFeed_title")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: d },
                      Object(F.f)("#RSSModeration_GroupPage")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: u },
                      Object(F.f)("#RSSModeration_SupportPage")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(Et, { rgClanIDs: [t.clanAccountID] })
                  )
                )
              ),
              o.a.createElement(
                "div",
                { className: st.a.CreatorCtn },
                o.a.createElement(it.a, {
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
            Boolean(i) &&
              o.a.createElement(
                o.a.Fragment,
                null,
                Boolean(n.BHasSavedRSSURL())
                  ? o.a.createElement(ot.a, {
                      strRssURL: n.GetRSSUrl(),
                      admin: n,
                    })
                  : o.a.createElement(
                      "div",
                      null,
                      Object(F.f)("#RSSModeration_NoRSSFeed")
                    )
              )
          );
        },
        Et = function (e) {
          return o.a.createElement(
            X.a,
            {
              toolTipContent: Object(F.f)(
                "#RSSModeration_ReindexAndReload_ttip"
              ),
            },
            o.a.createElement(
              R.d,
              {
                onClick: function (t) {
                  Object(Y.d)(
                    o.a.createElement(bt, Object(l.a)({}, e)),
                    Object(ee.m)(t)
                  );
                },
              },
              Object(F.f)("#RSSModeration_ReindexAndReload")
            )
          );
        },
        bt = function (e) {
          var t = Object(r.useState)(void 0),
            n = t[0],
            a = t[1],
            i = Object(r.useState)(!1),
            c = i[0],
            s = i[1],
            d = Object(r.useState)(void 0),
            u = d[0],
            m = d[1],
            p = function () {
              return e.closeModal && e.closeModal();
            };
          return o.a.createElement(
            Q.h,
            { onEscKeypress: p },
            o.a.createElement(
              R.f,
              null,
              o.a.createElement(
                R.k,
                null,
                " ",
                Object(F.f)("#RSSModeration_ReindexAndReload"),
                " "
              ),
              o.a.createElement(
                R.b,
                null,
                o.a.createElement(
                  R.c,
                  null,
                  void 0 === n
                    ? o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                          "span",
                          null,
                          Object(F.f)(
                            "#RSSModeration_Reindex_Verify",
                            e.rgClanIDs.length
                          )
                        ),
                        o.a.createElement(
                          R.q,
                          {
                            onClick: function () {
                              return Object(l.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var t, n, r;
                                  return Object(l.e)(this, function (o) {
                                    switch (o.label) {
                                      case 0:
                                        a((t = 0)), (n = 0), (o.label = 1);
                                      case 1:
                                        return n < e.rgClanIDs.length
                                          ? ((r = e.rgClanIDs[n]),
                                            [
                                              4,
                                              rt
                                                .Get()
                                                .ReindexClanEventsAndReloadAccount(
                                                  r
                                                ),
                                            ])
                                          : [3, 4];
                                      case 2:
                                        if (!o.sent())
                                          return (
                                            m(
                                              Object(F.f)(
                                                "#Error_Generic_Label"
                                              )
                                            ),
                                            [3, 4]
                                          );
                                        a((t += 1)), (o.label = 3);
                                      case 3:
                                        return ++n, [3, 1];
                                      case 4:
                                        return s(!0), [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(F.f)("#Button_Continue")
                        )
                      )
                    : o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                          "span",
                          null,
                          Object(F.f)(
                            "#RSSModeration_Reindex_Action",
                            n,
                            e.rgClanIDs.length
                          )
                        ),
                        c
                          ? o.a.createElement(
                              "span",
                              null,
                              Object(F.f)(
                                "#EventEditor_ImportFromHTML_ConvertFinished"
                              )
                            )
                          : o.a.createElement(J.a, {
                              size: "small",
                              string: Object(F.f)("#Updating"),
                            })
                      ),
                  Boolean(u) && o.a.createElement("span", null, u, " ")
                ),
                o.a.createElement(
                  R.j,
                  null,
                  o.a.createElement(
                    R.d,
                    { onClick: p },
                    Object(F.f)(c ? "#Button_OK" : "#Button_Cancel")
                  )
                )
              )
            )
          );
        };
      qe.a.Init(new Ve.a(j.d.WEBAPI_BASE_URL)), k.c.Init();
      var ft = function (e) {
        var t = e.children,
          n = Object(r.useState)(je.a.IsInitialized()),
          a = n[0],
          i = n[1];
        return a
          ? o.a.createElement(o.a.Fragment, null, t)
          : (je.a.InitGlobal().then(function () {
              return i(!0);
            }),
            null);
      };
      function _t(e) {
        return function (t) {
          return o.a.createElement(ft, null, o.a.createElement(e, t));
        };
      }
      var gt = _t(le),
        St = _t(Ce),
        yt = _t(Te.b),
        At = _t(i.c),
        Ot = _t(We),
        Ct = _t(nt),
        Tt = _t(ge),
        jt = _t(dt);
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
