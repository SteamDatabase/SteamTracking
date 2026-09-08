/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [33884],
  {
    38390: (e, t, n) => {
      n.d(t, { B9: () => m, RR: () => d, hE: () => c });
      var a = n(90626),
        s = n(37085),
        i = n(6379),
        o = n(4434),
        r = n(17720),
        l = (n(78327), n(17690), n(61859));
      n(41735), n(68797);
      function d(e) {
        const [t, n] = (0, a.useState)(() => i.O3.GetClanEventModel(e)),
          s = (0, o.m)("usePartnerEventByEventGID");
        return (
          (0, a.useEffect)(() => {
            e &&
              t?.GID != e &&
              (i.O3.Init(),
              i.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                [e],
                [],
                s,
              ).then((t) => {
                1 != t?.length || t[0].GID != e || s.token.reason || n(t[0]);
              }));
          }, [e, t, s]),
          t
        );
      }
      function m(e, t, n) {
        const [l, d] = (0, a.useState)(t ? i.O3.GetClanEventModel(t) : void 0),
          [m, c] = (0, a.useState)(!!e && !!t),
          [_, u] = (0, a.useState)(),
          [p, v] = (0, a.useState)(s.R),
          E = (0, o.m)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, a.useEffect)(() => {
            (async () => {
              try {
                if (l?.GID != t && t && e) {
                  i.O3.Init();
                  const a = r.b.InitFromClanID(e);
                  let o;
                  try {
                    o =
                      await i.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                        a,
                        t,
                        0,
                        n,
                      );
                  } catch (e) {
                    u(e?.response?.data?.err_msg),
                      v(e?.response?.data?.success || s.zi);
                  }
                  E.token.reason || d(o);
                }
              } finally {
                c(!1);
              }
            })();
          }, [e, t, l, n, E]),
          { eventModel: l, bLoading: m, sErrorMessage: _, eResult: p }
        );
      }
      function c(e) {
        let t = "" + e;
        const n = l.A0.GetELanguageFallback(e);
        return e != n && (t += "_" + n), t;
      }
    },
    6379: (e, t, n) => {
      n.d(t, { ZQ: () => b, O3: () => S, MX: () => T, dB: () => P });
      var a = n(34629),
        s = n(41735),
        i = n.n(s),
        o = n(14947),
        r = n(31561),
        l = n(22837),
        d = n(37085),
        m = n(62641),
        c = n(17720),
        _ = n(55563),
        u = n(62490),
        p = n(81393),
        v = n(68797),
        E = n(6144),
        h = n(41338),
        g = n(78327),
        y = n(90626),
        I = n(84933),
        A = n(38390);
      function f(e) {
        return (
          (null == e.gid || null == e.gid || "0" == e.gid) &&
          !!e.announcement_body &&
          "0" != e.announcement_body.gid
        );
      }
      function D(e) {
        return f(e) ? m.cB + e.announcement_body?.gid : e.gid;
      }
      var C = n(63340);
      class G {
        appid;
        date;
        can_play;
        playtime;
        announcementid;
        constructor(e) {
          (0, p.wT)(
            "number" == typeof e.appid,
            "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
          ),
            (this.appid = e.appid),
            (this.date = e.date),
            (this.can_play = e.can_play),
            (this.playtime = e.playtime),
            (this.announcementid = e.announcementid);
        }
      }
      class b {
        constructor(e = !1) {
          (0, o.Gn)(this), (this.m_bOnlySummary = e);
        }
        m_bOnlySummary = !1;
        m_mapExistingEvents = new Map();
        m_mapEventUpdateCallback = new Map();
        m_mapAnnouncementBodyToEvent = new Map();
        m_mapClanToGIDs = new Map();
        m_mapAppIDToGIDs = new Map();
        m_mapAdjacentAnnouncementGIDs = new Map();
        m_mapUpdatedApps = new Map();
        m_tsUpdatedAppsQueryTime = 0;
        m_rgQueuedEventsClanIDs = new Array();
        m_rgQueuedEventsUniqueIDs = new Array();
        m_rgQueuedEventsForEditFlags = new Array();
        m_QueuedEventTimeout = new E.LU();
        m_PendingInfoPromise;
        m_PendingInfoResolve;
        m_bLoadedFromConfig = !1;
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, _.v)("PartnerEventStore");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                if (e) {
                  let t = new c.b(e.clan_steamid);
                  const n = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    this.m_mapExistingEvents.set(
                      m.cB + e.announcement_body.gid,
                      n,
                    );
                }
              });
            let t = (0, g.Fd)("partnereventstore", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((e) => {
                if (e) {
                  let t = new c.b(e.clan_steamid);
                  const n = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    !this.m_mapExistingEvents.has(
                      m.cB + e.announcement_body.gid,
                    ) &&
                    this.m_mapExistingEvents.set(
                      m.cB + e.announcement_body.gid,
                      n,
                    );
                }
              });
            let n = (0, g.Fd)("partnereventadjacents", "application_config");
            this.ValidateAdjacentEvent(n) &&
              n.forEach((e) => {
                e &&
                  this.m_mapAdjacentAnnouncementGIDs.set(
                    e.announcementGID,
                    e.adjacents,
                  );
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              t[0] &&
              "object" == typeof t[0]
            ) &&
            ("string" == typeof t[0].gid ||
              ("object" == typeof t[0].announcement_body &&
                "string" == typeof t[0].announcement_body.gid))
          );
        }
        ValidateAdjacentEvent(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].announcementGID &&
              Array.isArray(t[0].adjacents) &&
            (0 == t[0].adjacents.length || "string" == typeof t[0].adjacents[0])
          );
        }
        GetPartnerEventChangeCallback(e) {
          let t = this.m_mapEventUpdateCallback.get(e);
          return (
            t ||
              (this.m_mapEventUpdateCallback.set(e, new E.lu()),
              (t = this.m_mapEventUpdateCallback.get(e))),
            t
          );
        }
        GetClanEventGIDs(e) {
          let t = this.m_mapClanToGIDs.get(e.GetAccountID());
          return t || [];
        }
        GetClanEventGIDsForApp(e) {
          let t = this.m_mapAppIDToGIDs.get(e);
          return t || [];
        }
        GetClanEventModel(e) {
          return this.m_mapExistingEvents.get(e);
        }
        BHasClanEventModel(e) {
          return this.m_mapExistingEvents.has(e);
        }
        BHasClanAnnouncementGID(e) {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            const t = this.m_mapAnnouncementBodyToEvent.get(e);
            return !!t && this.BHasClanEventModel(t);
          }
          return !1;
        }
        GetClanEventGIDFromAnnouncementGID(e) {
          return this.m_mapAnnouncementBodyToEvent.get(e);
        }
        GetClanEventFromAnnouncementGID(e) {
          const t = this.m_mapAnnouncementBodyToEvent.get(e);
          return t ? this.m_mapExistingEvents.get(t) : void 0;
        }
        DefaultEventSortFunction(e, t) {
          return e.startTime == t.startTime
            ? (0, h.kd)(e.GID ?? "", t.GID ?? "")
            : (t.startTime ?? 0) - (e.startTime ?? 0);
        }
        RegisterClanEvents(e) {
          if (e)
            for (const t of e) {
              const e = D(t);
              if (!this.m_mapExistingEvents.has(e)) {
                const e = new c.b(t.clan_steamid);
                this.InsertEventModelFromClanEventData(e, t);
              }
            }
        }
        GetRankedClanEvents(e, t) {
          let n = [],
            a = e
              ? this.GetClanEventGIDs(e)
              : t
                ? this.GetClanEventGIDsForApp(t)
                : void 0;
          if (!a || 0 == a.length) return n;
          for (let e of a) {
            let t = this.GetClanEventModel(e);
            t && n.push(t);
          }
          return n.sort(this.DefaultEventSortFunction), n;
        }
        InsertEventModelFromClanEventData(e, t) {
          const n = (function (e, t) {
            let n = new m.lh();
            if (
              ((n.clanSteamID = e),
              (0, p.wT)(
                n.clanSteamID && n.clanSteamID.BIsValid(),
                "Invalid Clan SteamID: " +
                  n.clanSteamID.ConvertTo64BitString() +
                  " " +
                  g.TS.EUNIVERSE,
              ),
              (n.GID = D(t)),
              (n.bOldAnnouncement = f(t)),
              (n.appid = t.appid ?? 0),
              (n.createTime = t.rtime_created),
              (n.startTime = t.rtime32_start_time),
              (n.endTime = t.rtime32_end_time),
              (n.visibilityStartTime = t.rtime32_visibility_start),
              (n.visibilityEndTime = t.rtime32_visibility_end),
              (n.loadedAllLanguages = !1),
              (n.type = t.event_type ?? l.DRF),
              (n.nVotesUp = t.votes_up ?? 0),
              (n.nVotesDown = t.votes_down ?? 0),
              (n.comment_type = t.comment_type),
              (n.gidfeature = t.gidfeature),
              (n.gidfeature2 = t.gidfeature2),
              (n.featured_app_tagid = t.featured_app_tagid),
              (n.vecTags = new Array()),
              (n.creator_steamid = t.creator_steamid),
              (n.last_update_steamid = t.last_update_steamid),
              (n.rtime32_last_modified = t.rtime32_last_modified),
              (n.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
              (n.video_preview_type = t.video_preview_type),
              (n.video_preview_id = t.video_preview_id),
              (n.has_live_stream = t.has_live_stream),
              (n.live_stream_viewer_count = t.live_stream_viewer_count),
              (n.m_nBuildID = t.build_id),
              (n.m_strBuildBranch = t.build_branch),
              t.announcement_body)
            ) {
              let e = t.announcement_body;
              (n.AnnouncementGID = e.gid),
                n.name.set(e.language, e.headline),
                n.description.set(e.language, e.body),
                n.timestamp_loc_updated.clear(),
                (n.forumTopicGID = e.forum_topic_id),
                (n.nCommentCount = e.commentcount),
                (n.postTime = e.posttime),
                n.bOldAnnouncement && !e.hidden && (n.startTime = e.posttime),
                (n.announcementClanSteamID = new c.b(e.clanid)),
                e.tags &&
                  e.tags.length > 0 &&
                  e.tags.forEach((e) => n.vecTags.push(e)),
                !n.rtime32_last_solr_search_col_updated &&
                  n.rtime32_last_modified &&
                  ((n.rtime32_last_solr_search_col_updated =
                    n.rtime32_last_modified),
                  (n.rtime32_last_modified = e.updatetime));
            } else
              (n.AnnouncementGID = "0"),
                (n.forumTopicGID = t.forum_topic_id),
                n.name.clear(),
                n.description.clear(),
                n.timestamp_loc_updated.clear(),
                (n.postTime = t.rtime32_start_time),
                (n.nCommentCount = t.comment_count ?? 0),
                n.name.set(l.Bhc, t.event_name ?? ""),
                n.description.set(l.Bhc, t.event_notes ?? "");
            t.broadcaster_accountid &&
              (n.broadcaster = new c.b(t.broadcaster_accountid));
            const a = m.DJ;
            try {
              n.jsondata = {
                ...a,
                ...(t.jsondata ? JSON.parse(t.jsondata) : void 0),
              };
            } catch (e) {
              const t = (0, v.H)(e);
              throw (
                (console.error(
                  "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                    t.strErrorMsg,
                  t,
                ),
                e)
              );
            }
            if (
              ((n.jsondata.localized_capsule_image = (0, u.$Y)(
                n.jsondata.localized_capsule_image || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_title_image = (0, u.$Y)(
                n.jsondata.localized_title_image || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_subtitle = (0, u.$Y)(
                n.jsondata.localized_subtitle || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_summary = (0, u.$Y)(
                n.jsondata.localized_summary || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_broadcast_title = (0, u.$Y)(
                n.jsondata.localized_broadcast_title || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_broadcast_left_image = (0, u.$Y)(
                n.jsondata.localized_broadcast_left_image || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_broadcast_right_image = (0, u.$Y)(
                n.jsondata.localized_broadcast_right_image || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_sale_header = (0, u.$Y)(
                n.jsondata.localized_sale_header || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_sale_overlay = (0, u.$Y)(
                n.jsondata.localized_sale_overlay || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_sale_product_banner = (0, u.$Y)(
                n.jsondata.localized_sale_product_banner || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_sale_product_mobile_banner = (0, u.$Y)(
                n.jsondata.localized_sale_product_mobile_banner || [],
                l.bP9,
                null,
              )),
              (n.jsondata.localized_sale_logo = (0, u.$Y)(
                n.jsondata.localized_sale_logo || [],
                l.bP9,
                null,
              )),
              void 0 !== n.jsondata.sale_num_headers &&
                n.jsondata.localized_per_day_sales_header)
            )
              for (let e = 0; e < n.jsondata.sale_num_headers; ++e)
                n.jsondata.localized_per_day_sales_header[e] = (0, u.$Y)(
                  n.jsondata.localized_per_day_sales_header[e],
                  l.bP9,
                  null,
                );
            return (
              n.jsondata.sale_sections &&
                n.jsondata.sale_sections.forEach((e, t) => {
                  e.localized_label &&
                    (e.localized_label = (0, u.$Y)(
                      e.localized_label,
                      l.bP9,
                      null,
                    )),
                    "trailercarousel" === e.section_type &&
                      (e.show_as_carousel = !1),
                    (n.jsondata.sale_sections[t] = { ...m.G6, ...e });
                }),
              n.jsondata.email_setting &&
                n.jsondata.email_setting.sections &&
                n.jsondata.email_setting.sections.forEach((e) => {
                  void 0 !== e.localized_headline &&
                    null !== e.localized_headline &&
                    (e.localized_headline = (0, u.$Y)(
                      e.localized_headline,
                      l.bP9,
                      null,
                    )),
                    void 0 !== e.localized_body &&
                      null !== e.localized_body &&
                      (e.localized_body = (0, u.$Y)(
                        e.localized_body,
                        l.bP9,
                        null,
                      )),
                    void 0 !== e.localized_image &&
                      null !== e.localized_image &&
                      (e.localized_image = (0, u.$Y)(
                        e.localized_image,
                        l.bP9,
                        null,
                      ));
                }),
              n.jsondata.localized_title_image.forEach((e, t) => {
                if (null != e && "http" == e.substr(0, 4)) {
                  let a = e.lastIndexOf("/"),
                    s = e.substr(a + 1);
                  n.jsondata.localized_title_image[t] = s;
                }
              }),
              (n.bLoaded = !0),
              t.published
                ? t.unlisted
                  ? (n.visibility_state = m.zv.k_EEventStateUnlisted)
                  : t.hidden
                    ? (n.visibility_state = m.zv.k_EEventStateStaged)
                    : (n.visibility_state = m.zv.k_EEventStateVisible)
                : (n.visibility_state = m.zv.k_EEventStateUnpublished),
              n
            );
          })(e, t);
          return (
            this.InsertUniqueEventGID(e.GetAccountID(), n.appid, n.GID),
            this.m_mapExistingEvents.set(n.GID, n),
            n.AnnouncementGID &&
              n.AnnouncementGID.length > 1 &&
              this.m_mapAnnouncementBodyToEvent.set(n.AnnouncementGID, n.GID),
            n
          );
        }
        HelperInitializeNumSalesHeaderArray(e) {
          if ((e.jsondata.sale_num_headers ?? 0) > 1) {
            e.jsondata.localized_per_day_sales_header = [];
            for (let t = 0; t < (e.jsondata.sale_num_headers ?? 0); ++t)
              e.jsondata.localized_per_day_sales_header.push(
                (0, u.$Y)([], l.bP9, null),
              );
            e.m_overrideCurrentDay = 0;
          } else e.m_overrideCurrentDay = void 0;
        }
        GetAllClanEvents(e) {
          let t = new Array();
          return (
            this.m_mapClanToGIDs.has(e.GetAccountID()) &&
              this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
                let n = this.m_mapExistingEvents.get(e);
                n && t.push(n);
              }),
            t
          );
        }
        async QueueLoadPartnerEvent(e, t, n) {
          if (this.m_mapExistingEvents.has(t)) return;
          this.m_rgQueuedEventsClanIDs.push(e),
            this.m_rgQueuedEventsUniqueIDs.push(t),
            this.m_rgQueuedEventsForEditFlags.push(Boolean(n)),
            this.m_PendingInfoPromise ||
              (this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e),
              ));
          const a = this.m_PendingInfoPromise,
            s = () => {
              const e = this.m_PendingInfoResolve,
                t = this.m_rgQueuedEventsClanIDs,
                n = this.m_rgQueuedEventsUniqueIDs,
                a = this.m_rgQueuedEventsForEditFlags;
              (this.m_PendingInfoPromise = void 0),
                (this.m_rgQueuedEventsClanIDs = new Array()),
                (this.m_rgQueuedEventsUniqueIDs = new Array()),
                (this.m_rgQueuedEventsForEditFlags = new Array()),
                this.InternalLoadPartnerEventList(t, n, a).then(() => e?.());
            };
          if (this.m_rgQueuedEventsClanIDs.length >= 30)
            this.m_QueuedEventTimeout.Cancel(), s();
          else if (!this.m_QueuedEventTimeout.IsScheduled()) {
            const e = 50;
            this.m_QueuedEventTimeout.Schedule(e, s);
          }
          return a;
        }
        async InternalLoadPartnerEventList(e, t, n) {
          let a = n.some((e) => e);
          const s =
              g.TS.STORE_BASE_URL +
              (a
                ? "events/ajaxgeteventdetailsforedit/"
                : "events/ajaxgeteventdetails/"),
            o = (0, A.hE)((0, l.sfN)(g.TS.LANGUAGE)),
            r = {
              clanid_list: e.join(","),
              uniqueid_list: t.join(","),
              lang_list: o,
              origin: self.origin,
            };
          try {
            const e = await i().get(s, { params: r, withCredentials: a });
            this.RegisterClanEvents(e.data.events);
          } catch (e) {
            let t = (0, v.H)(e);
            console.error("GetEventDetails hit error " + t.strErrorMsg, t);
          }
        }
        async LoadAdjacentPartnerEvents(e, t, n, a, s, i, o) {
          return this.InternalLoadAdjacentPartnerEvents(
            e,
            void 0,
            t,
            n,
            a,
            s,
            i,
            o,
          );
        }
        async LoadAdjacentPartnerEventsByAnnouncement(e, t, n, a, s, i, o) {
          return this.InternalLoadAdjacentPartnerEvents(
            void 0,
            e,
            t,
            n,
            a,
            s,
            i,
            o,
          );
        }
        async LoadAdjacentPartnerEventsByEvent(e, t, n, a, s, i, o) {
          const r = t || e.clanSteamID;
          return e.bOldAnnouncement
            ? this.InternalLoadAdjacentPartnerEvents(
                void 0,
                e.AnnouncementGID,
                r,
                n,
                a,
                s,
                i,
                o,
              )
            : this.InternalLoadAdjacentPartnerEvents(
                e.GID,
                e.AnnouncementGID,
                r,
                n,
                a,
                s,
                i,
                o,
              );
        }
        async InternalLoadAdjacentPartnerEvents(e, t, n, a, s, r, m, _) {
          let u = new Array();
          if (t && this.m_mapAdjacentAnnouncementGIDs.has(t)) {
            let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
              n = new Array();
            if (
              (e?.forEach((e) => {
                if (this.m_mapAnnouncementBodyToEvent.has(e)) {
                  let t = this.m_mapAnnouncementBodyToEvent.get(e);
                  t &&
                    this.m_mapExistingEvents.get(t) &&
                    u.push(this.m_mapExistingEvents.get(t));
                } else n.push(e);
              }),
              n.length > 0)
            ) {
              (
                await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  void 0,
                  n,
                  _,
                )
              ).forEach((e) => u.push(e));
            }
          } else {
            let E =
              g.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
            const h = (0, A.hE)((0, l.sfN)(g.TS.LANGUAGE));
            m?.only_summaries &&
              !this.m_bOnlySummary &&
              ((0, p.wT)(
                this.m_bOnlySummary,
                "Only Summary: Incorrect parameter passed in, unsetting",
              ),
              (m.only_summaries = void 0));
            let y = {
              clan_accountid: n ? n.GetAccountID() : void 0,
              appid: a,
              count_before: s,
              count_after: r,
              gidevent: e,
              gidannouncement: t,
              lang_list: h,
              rtime_oldestevent: m ? m.rtime_oldestevent : void 0,
              require_tags:
                m && m.require_tags ? m.require_tags.join(",") : void 0,
              exclude_tags:
                m && m.exclude_tags ? m.exclude_tags.join(",") : void 0,
              require_no_tags: m ? m.require_no_tags : void 0,
              event_type_filter:
                m && m.event_type_filter
                  ? m.event_type_filter.join(",")
                  : void 0,
              exclude_event_types:
                m && m.exclude_event_types
                  ? m.exclude_event_types.join(",")
                  : void 0,
              only_summaries: m && !!m.only_summaries,
              origin: self.origin,
            };
            try {
              let s = await i().get(E, { params: y, cancelToken: _?.token });
              if (s?.data?.success == d.R)
                (0, o.h5)(() => {
                  for (let e of s.data.events) {
                    let t = D(e);
                    if (!this.m_mapExistingEvents.has(t)) {
                      let t = new c.b(e.clan_steamid);
                      this.InsertEventModelFromClanEventData(n || t, e);
                    }
                    u.push(this.m_mapExistingEvents.get(t));
                  }
                  if (0 == u.length)
                    if (e && this.BHasClanEventModel(e))
                      this.m_mapExistingEvents.get(e) &&
                        u.push(this.m_mapExistingEvents.get(e));
                    else if (t && this.BHasClanAnnouncementGID(t)) {
                      const e = this.GetClanEventFromAnnouncementGID(t);
                      e && u.push(e);
                    }
                });
              else {
                let e = (0, v.H)(s?.data);
                console.error(
                  "LoadAdjacentPartnerEvents Success but empty response:" +
                    a +
                    " clanAccount:" +
                    (n ? n.GetAccountID() : 0) +
                    " " +
                    e.strErrorMsg,
                  e,
                );
              }
            } catch (e) {
              let t = (0, v.H)(e);
              t.errorCode != d.e9 &&
                console.error(
                  "LoadAdjacentPartnerEvents hit error on appid:" +
                    a +
                    " clanAccount:" +
                    (n ? n.GetAccountID() : 0) +
                    " " +
                    t.strErrorMsg,
                  t,
                );
            }
          }
          return u;
        }
        async LoadPartnerEventsPageable(e, t, n = 0, a = 0, s) {
          let r = new Array(),
            l = g.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
            d = {
              clan_accountid: e ? e.GetAccountID() : void 0,
              appid: t,
              offset: n,
              count: a,
              l: g.TS.LANGUAGE,
              origin: self.origin,
              exclude_tags: s && s.length > 0 ? s?.join(",") : void 0,
            };
          try {
            let e = await i().get(l, { params: d });
            (0, o.h5)(() => {
              for (let t of e.data.events) {
                let e = D(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new c.b(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                r.push(this.m_mapExistingEvents.get(e));
              }
            });
          } catch (e) {
            console.error(
              "LoadClanEventInDateRange hit error " + (0, v.H)(e).strErrorMsg,
            );
          }
          return r;
        }
        async GetBestEventsForCurrentUser(e, t, n) {
          let a = new Array(),
            s = {
              l: g.TS.LANGUAGE,
              include_steam_blog: !0,
              filter_to_played_within_days: e,
              include_only_game_updates: t,
            },
            r = g.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
            l = await i().get(r, {
              params: s,
              withCredentials: !0,
              cancelToken: n ? n.token : void 0,
            });
          if (!l.data?.events) {
            let e = l.data?.err_msg || "";
            throw new Error(
              `GetBestEventsForCurrentUser request failed (${e})`,
            );
          }
          return (
            (0, o.h5)(() => {
              for (let e of l.data.events) {
                let t = D(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new c.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                let n = {
                  nAppPriority: e.nAppPriority,
                  bPossibleTakeOver: e.bPossibleTakeOver,
                  event: this.m_mapExistingEvents.get(t),
                };
                a.push(n);
              }
            }),
            a
          );
        }
        async LoadImportantEventsAroundToday(e, t, n, a, s, r) {
          let l = new Array(),
            d = new Array();
          d.push({ priority: 0, appids: t }),
            n && d.push({ priority: 1, appids: n }),
            a && d.push({ priority: 2, appids: a });
          let m = {
              count: e,
              strAppIDPriority: JSON.stringify({ prioritized_apps: d }),
              filterToEventTypes: r ? r.toString() : "",
              l: g.TS.LANGUAGE,
            },
            _ = g.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
            u = await i().get(_, {
              params: m,
              withCredentials: !0,
              cancelToken: s.token,
            });
          return (
            (0, o.h5)(() => {
              for (let e of u.data.events) {
                let t = D(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new c.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                l.push(this.m_mapExistingEvents.get(t));
              }
            }),
            l
          );
        }
        InsertUniqueEventGID(e, t, n) {
          let a = this.m_mapClanToGIDs.get(e);
          a ||
            (this.m_mapClanToGIDs.set(e, new Array()),
            (a = this.m_mapClanToGIDs.get(e)));
          let s = this.m_mapAppIDToGIDs.get(t);
          s ||
            (this.m_mapAppIDToGIDs.set(t, new Array()),
            (s = this.m_mapAppIDToGIDs.get(t))),
            -1 == a.indexOf(n) && (a.push(n), s.push(n));
        }
        ResetModel() {}
        async DeleteClanEvent(e, t) {
          this.m_mapExistingEvents.has(t) &&
            (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
          let n = new URLSearchParams();
          n.append("sessionid", (0, g.KC)()),
            n.append("bDelete", "1"),
            n.append("gid", t);
          const a = await i().post(
            g.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/ajaxcreateupdatedeletepartnerevents/",
            n,
          );
          return this.RemoveGIDFromList(e, t), a.data;
        }
        RemoveGIDFromList(e, t) {
          if (
            (this.m_mapExistingEvents.delete(t),
            this.m_mapClanToGIDs.has(e.GetAccountID()))
          ) {
            let n = this.m_mapClanToGIDs.get(e.GetAccountID()),
              a = n.indexOf(t);
            a >= 0 && n.splice(a, 1);
          }
        }
        FlushEventFromCache(e, t) {
          if (e && this.m_mapExistingEvents.has(e)) {
            if (!t) {
              t = this.m_mapExistingEvents.get(e).AnnouncementGID;
            }
            this.m_mapExistingEvents.delete(e);
          }
          if (
            t &&
            (this.m_mapExistingEvents.has(m.cB + t) &&
              this.m_mapExistingEvents.delete(m.cB + t),
            this.m_mapAnnouncementBodyToEvent.has(t))
          ) {
            const e = this.m_mapAnnouncementBodyToEvent.get(t);
            e &&
              this.m_mapExistingEvents.has(e) &&
              this.m_mapExistingEvents.delete(e),
              this.m_mapAnnouncementBodyToEvent.delete(t);
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
          e,
          t,
          n,
          a,
          s,
          o = !1,
        ) {
          let r = (0, A.hE)(o ? l.Bhc : (0, l.sfN)(g.TS.LANGUAGE)),
            m = {
              appid: t,
              clan_accountid: e ? e.GetAccountID() : void 0,
              announcement_gid: a,
              event_gid: n,
              lang_list: r,
              last_modified_time: s || 0,
              origin: self.origin,
              for_edit: o,
              only_summary: this.m_bOnlySummary,
            },
            _ = null,
            u = null;
          if (o) {
            const n = (0, g.yK)();
            "community" === n
              ? ((u = g.TS.COMMUNITY_BASE_URL),
                (u += e ? "gid/" + e.ConvertTo64BitString() : "ogg/" + t),
                (u += "/"))
              : (u =
                  "partnerweb" === n
                    ? g.TS.PARTNER_BASE_URL + "sales/"
                    : g.TS.STORE_BASE_URL + "events/"),
              (u += "ajaxgetpartnereventforedit"),
              (_ = { params: m, withCredentials: !0 });
          } else
            (u = g.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
              (_ = { params: m, withCredentials: !1 });
          try {
            let e = await i().get(u, _);
            if (e.data.success !== d.R) return;
            let t = e.data.event,
              n = D(t);
            if (
              !this.m_mapExistingEvents.has(n) ||
              (this.m_mapExistingEvents.get(n).rtime32_last_modified ?? 0) <
                (t.rtime32_last_modified ?? 0) ||
              (this.m_mapExistingEvents.get(n).rtime32_moderator_reviewed ??
                0) < (t.rtime_mod_reviewed ?? 0)
            ) {
              (0, p.wT)(
                t.clan_steamid,
                "ClanSteamID is missing from data we received",
              );
              let e = new c.b(t.clan_steamid);
              this.InsertEventModelFromClanEventData(e, t);
            }
            return this.m_mapExistingEvents.get(n);
          } catch (e) {
            return;
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
          e,
          t,
          n,
          a,
          s,
          i,
        ) {
          if (n && this.m_mapExistingEvents.has(n))
            return this.m_mapExistingEvents.get(n);
          if (a) {
            if (this.m_mapExistingEvents.has(m.cB + a))
              return this.m_mapExistingEvents.get(m.cB + a);
            if (this.m_mapAnnouncementBodyToEvent.has(a)) {
              const e = this.m_mapAnnouncementBodyToEvent.get(a);
              if (e && this.m_mapExistingEvents.has(e))
                return this.m_mapExistingEvents.get(e);
            }
          }
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            t,
            n,
            a,
            s,
            i,
          );
        }
        async LoadPartnerEventFromAnnoucementGID(e, t, n, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            void 0,
            t,
            n,
            a,
          );
        }
        async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, n, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            void 0,
            t,
            n,
            a,
          );
        }
        async LoadPartnerEventFromClanEventGID(e, t, n, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            t,
            void 0,
            n,
            a,
          );
        }
        async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, n, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            t,
            void 0,
            n,
            a,
          );
        }
        async LoadPartnerEventGeneric(e, t, n, a, s) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            t,
            n,
            a,
            s,
          );
        }
        async LoadHiddenPartnerEvent(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            t,
            void 0,
            0,
            !0,
          );
        }
        async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            void 0,
            t,
            0,
            !0,
          );
        }
        async HintLoadImportantUpdates() {
          const e = (0, r.tB)(36e5);
          if (e != this.m_tsUpdatedAppsQueryTime) {
            this.m_tsUpdatedAppsQueryTime = e;
            const t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
              n = g.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
              a = await i().get(n, { params: t, withCredentials: !0 });
            a.data.apps &&
              a.data.apps.length > 0 &&
              (0, o.h5)(() => {
                const e = new Map(a.data.apps?.map((e) => [e.appid, new G(e)]));
                this.m_mapUpdatedApps = e;
              });
          }
          return this.m_mapUpdatedApps;
        }
        GetAppImportantUpdate(e) {
          return (
            this.HintLoadImportantUpdates().catch((e) => {
              console.log("UpdatedApps failed to load: ", e.response?.data);
            }),
            this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
          );
        }
        async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
          let n =
            g.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/announcements/ajaxgetlocalization/" +
            t;
          return (await i().get(n)).data.localization;
        }
        async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, n) {
          const a = new Array(),
            s = g.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
            r = (0, A.hE)((0, l.sfN)(g.TS.LANGUAGE));
          let d = null,
            m = null;
          if (e) {
            let t = new Array();
            e.forEach((e) => {
              this.m_mapExistingEvents.has(e)
                ? a.push(this.m_mapExistingEvents.get(e))
                : t.push(e);
            }),
              t.sort(),
              (d = t);
          }
          if (t) {
            let e = new Array();
            t.forEach((t) => {
              if (
                this.m_mapAnnouncementBodyToEvent.has(t) &&
                this.m_mapAnnouncementBodyToEvent.get(t) &&
                this.m_mapExistingEvents.has(
                  this.m_mapAnnouncementBodyToEvent.get(t),
                )
              ) {
                let e = this.m_mapAnnouncementBodyToEvent.get(t);
                if (e) {
                  const t = this.m_mapExistingEvents.get(e);
                  t && a.push(t);
                }
              } else e.push(t);
            }),
              e.sort(),
              (m = e);
          }
          if (!d && !m) return a;
          const _ = new Array();
          for (; (d?.length ?? 0) > 0 || (m?.length ?? 0) > 0; ) {
            let e = {
              event_gids:
                (d?.length ?? 0) > 0 ? d?.splice(0, 100).join(",") : void 0,
              announcement_gids:
                (m?.length ?? 0) > 0 ? m?.splice(0, 100).join(",") : void 0,
              lang_list: r,
              origin: self.origin,
            };
            _.push(
              i().get(s, { params: e, cancelToken: n ? n.token : void 0 }),
            );
          }
          try {
            const e = await Promise.all([..._]);
            let t = 0;
            (0, o.h5)(() =>
              e.forEach((e) => {
                if (e && e.data && e.data.events)
                  for (let t of e.data.events) {
                    let e = D(t);
                    if (!this.m_mapExistingEvents.has(e)) {
                      let e = new c.b(t.clan_steamid);
                      this.InsertEventModelFromClanEventData(e, t);
                    }
                    a.push(this.m_mapExistingEvents.get(e));
                  }
                else {
                  const t = (0, v.H)(e);
                  console.error(
                    "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                      t.strErrorMsg,
                    t,
                  );
                }
                t += 1;
              }),
            );
          } catch (e) {
            const t = (0, v.H)(e);
            console.error(
              "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                t.strErrorMsg,
              t,
            );
          }
          return a;
        }
        async SavePartnerEventSaleAssets(e, t, n, a) {
          let s = null;
          if (!this.m_mapExistingEvents.has(t)) return !1;
          try {
            const o = `${g.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
              r = new FormData();
            r.append("sessionid", (0, g.KC)()),
              r.append("gidclanevent", t),
              r.append("json", JSON.stringify(n)),
              r.append("pageStyles", JSON.stringify(a));
            const l = await i().post(o, r, { withCredentials: !0 });
            if (l?.data?.success == d.R) {
              const e = this.m_mapExistingEvents.get(t);
              if (e && e.jsondata)
                for (const t in n)
                  if (n.hasOwnProperty(t) && n[t]) {
                    const a = t,
                      s = n[a];
                    void 0 !== s && void 0 !== a && (e.jsondata[a] = s);
                  }
              return this.GetPartnerEventChangeCallback(t).Dispatch(e), !0;
            }
            s = (0, v.H)(l);
          } catch (e) {
            s = (0, v.H)(e);
          }
          return (
            console.error(
              "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                s?.strErrorMsg,
              s,
            ),
            !1
          );
        }
        BIsSummaryOnlyStore() {
          return this.m_bOnlySummary;
        }
      }
      (0, a.Cg)([o.sH], b.prototype, "m_mapExistingEvents", void 0),
        (0, a.Cg)([o.sH], b.prototype, "m_mapAnnouncementBodyToEvent", void 0),
        (0, a.Cg)([o.sH], b.prototype, "m_mapClanToGIDs", void 0),
        (0, a.Cg)([o.sH], b.prototype, "m_mapAppIDToGIDs", void 0),
        (0, a.Cg)([o.sH], b.prototype, "m_mapUpdatedApps", void 0),
        (0, a.Cg)([o.XI], b.prototype, "Init", null),
        (0, a.Cg)([I.oI], b.prototype, "GetPartnerEventChangeCallback", null),
        (0, a.Cg)([o.XI], b.prototype, "RegisterClanEvents", null),
        (0, a.Cg)(
          [o.XI],
          b.prototype,
          "InsertEventModelFromClanEventData",
          null,
        ),
        (0, a.Cg)([o.XI], b.prototype, "DeleteClanEvent", null),
        (0, a.Cg)([o.XI], b.prototype, "RemoveGIDFromList", null),
        (0, a.Cg)([o.XI], b.prototype, "FlushEventFromCache", null),
        (0, a.Cg)([I.oI], b.prototype, "SavePartnerEventSaleAssets", null);
      const S = new b();
      (0, C.V)("g_PartnerEventStore", S);
      const T = new b(!0);
      function P(e, t, n = !1) {
        const [a, s] = (0, y.useState)(() => S.GetClanEventModel(t)),
          [i, o] = (0, y.useState)(!0),
          r = (0, y.useMemo)(() => c.b.InitFromClanID(e), [e]);
        return (
          (0, y.useEffect)(() => {
            !a &&
              e > 0 &&
              (S.Init(),
              S.LoadPartnerEventFromClanEventGIDAndClanSteamID(r, t, 0, n)
                .then(s)
                .finally(() => o(!1)));
          }, [r, t, a, e, n]),
          (0, I.hL)(n ? S.GetPartnerEventChangeCallback(t) : void 0, s),
          { eventModel: a, bLoading: i }
        );
      }
      (0, C.V)("g_PartnerEventSummaryStore", T);
    },
    55563: (e, t, n) => {
      function a(e) {
        return window.StoreDefaults ? window.StoreDefaults[e] : void 0;
      }
      n.d(t, { v: () => a });
    },
  },
]);
