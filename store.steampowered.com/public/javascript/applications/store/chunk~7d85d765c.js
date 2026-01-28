/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4867],
  {
    34010: (e, t, a) => {
      a.d(t, {
        M5: () => S,
        MU: () => B,
        MX: () => C,
        Rt: () => b,
        U7: () => f,
        fn: () => A,
        j: () => _,
      });
      var r = a(34629),
        s = a(16021),
        o = a(41735),
        n = a.n(o),
        i = a(14947),
        d = a(17720),
        m = a(54728),
        c = a(44165),
        l = a(68033),
        p = a(68797),
        u = a(78327),
        h = a(75515);
      function A(e) {
        return Boolean(e && e.thumbnail_http_address);
      }
      function S(e, t) {
        if (t || e) {
          const a = t || e;
          return Boolean(a && _.Get().BIsAppStreaming(a));
        }
        return !1;
      }
      class _ {
        constructor() {
          (0, i.Gn)(this);
        }
        static s_GlobalStore;
        m_inFlightRequests = new Map();
        m_lookupKeyToEmbedStreamDef = new Map();
        m_lookupStreams = new Map();
        m_playReadyStream = new Map();
        m_bMapHasStartedVideo = new Map();
        m_mapBroadcastChecked = new Map();
        m_pageChatStatus = "hide";
        m_streamChatStatus = "hide";
        m_bUserChatExpanded = void 0;
        m_bUserPreferenceHideBroadcastByDefault = void 0;
        m_bCollapsed = void 0;
        m_setStreamChangedListeners = new Set();
        m_bUseFakeData = !1;
        m_onLoadContextCall = new Map();
        BHasStreams(e) {
          const t = this.GetStreams(e);
          return Boolean(t && t.length > 0);
        }
        AddCallbackOnNewContext(e, t, a) {
          this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(e), {
            name: t,
            fnCallback: a,
          });
        }
        ClearCallbackOnNewContext(e) {
          this.m_onLoadContextCall.set(
            this.GetStreamsLookupKeyFromDef(e),
            null,
          );
        }
        GetPlayReadyStream(e) {
          let t = this.GetStreamsLookupKeyFromDef(e);
          return this.m_playReadyStream.get(t);
        }
        BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
          return Boolean(this.m_bUserPreferenceHideBroadcastByDefault);
        }
        BIsEmbeddedStreamCollapsed() {
          return Boolean(this.m_bCollapsed);
        }
        SetEmbeddedStreamCollapsed(e) {
          this.m_bCollapsed != e && (this.m_bCollapsed = e);
        }
        GetConcurrentStreams(e) {
          const t = this.GetStreams(e);
          return t ? t.filter((e) => A(e)).length : 0;
        }
        GetChatVisibility() {
          return "remove" === this.m_pageChatStatus ||
            "remove" === this.m_streamChatStatus
            ? "remove"
            : void 0 !== this.m_bUserChatExpanded
              ? this.m_bUserChatExpanded
                ? "show"
                : "hide"
              : "show" === this.m_pageChatStatus
                ? "show"
                : "hide" === this.m_pageChatStatus ||
                    "hide" === this.m_streamChatStatus
                  ? "hide"
                  : "show";
        }
        ToggleChatVisibility() {
          const e = this.GetChatVisibility();
          "remove" !== e && (this.m_bUserChatExpanded = "hide" === e);
        }
        DebugDumpContextAndAvailableContext(e) {
          console.log("Requested context", this.GetStreamsLookupKeyFromDef(e)),
            console.log("Available context count: ", this.m_lookupStreams.size),
            this.m_lookupStreams.forEach((e, t) => {
              console.log(t, e.length);
            });
        }
        GetStreams(e) {
          const t = this.GetStreamsLookupKeyFromDef(e);
          return this.m_lookupStreams.get(t);
        }
        GetBroadcastURL(e) {
          let t = null;
          return (
            (t = e.steamid
              ? new d.b(e.steamid)
              : d.b.InitFromAccountID(e.accountid)),
            u.TS.COMMUNITY_BASE_URL +
              "broadcast/watch/" +
              t.ConvertTo64BitString()
          );
        }
        BIsAppStreaming(e) {
          let t = !1;
          return (
            this.m_lookupStreams.forEach((a) => {
              t ||
                (t =
                  Boolean(a) &&
                  a.some(
                    (t) =>
                      m.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID === e,
                  ));
            }),
            t
          );
        }
        GetStreamsForAppID(e) {
          const t = new Array();
          return (
            this.m_lookupStreams.forEach((a) => {
              a?.forEach((a) => {
                m.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID === e &&
                  t.push(a);
              });
            }),
            t
          );
        }
        AddStreamChangedListener(e) {
          this.m_setStreamChangedListeners.add(e);
        }
        RemoveStreamChangedListener(e) {
          this.m_setStreamChangedListeners.delete(e);
        }
        async LoadBIsEmbeddedBroadcastHidden(e) {
          if (void 0 === this.m_bUserPreferenceHideBroadcastByDefault) {
            let t = (0, u.Tc)("broadcastuser", "application_config");
            if (!t)
              try {
                let a =
                    u.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences",
                  r = await n().get(a, { params: {}, cancelToken: e.token });
                t = r.data;
              } catch (e) {
                console.log(
                  "LoadBIsEmbeddedBroadcastHidden: " + (0, p.H)(e).strErrorMsg,
                ),
                  (t = { bHideStoreBroadcast: !1 });
              }
            (0, i.h5)(() => {
              (this.m_bUserPreferenceHideBroadcastByDefault =
                t.bHideStoreBroadcast),
                (this.m_bCollapsed = t.bHideStoreBroadcast);
            });
          }
          return this.m_bUserPreferenceHideBroadcastByDefault;
        }
        async SetupEmbeddableVOD(e, t) {
          (this.m_bUseFakeData = !1),
            (this.m_streamChatStatus = "remove"),
            await s.A.Get().QueueAppRequest(e.nAppIDVOD, {
              include_assets: !0,
              include_trailers: !0,
            });
          const a = s.A.Get().GetApp(e.nAppIDVOD),
            r = new h.TT();
          if (
            ((r.accountid = 0),
            (r.nAppIDVOD = e.nAppIDVOD),
            (r.default_selection_priority = h.mY.k_ePrimary),
            (r.current_selection_priority = h.mY.k_ePrimary),
            (r.thumbnail_http_address = a?.GetAssets().GetHeaderURL() || ""),
            (r.title = a?.GetName() || ""),
            this.GetStreams(e).unshift(r),
            t)
          ) {
            const t = this.GetStreamsLookupKeyFromDef(e);
            this.m_playReadyStream.set(t, r);
          }
        }
        async HintLoadEmbeddablePreviewStreams(e) {
          let t = null,
            a = {
              eventid: e.event ? e.event.GID : void 0,
              previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
                ? e.accountIDs.slice().sort().join(",")
                : void 0,
            };
          try {
            return (
              (t = await n().get(
                u.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                { params: a },
              )),
              this.HandleHintLoadBroadcastResponse(e, t.data)
            );
          } catch (e) {
            let t = (0, p.H)(e);
            console.error(
              "HintLoadEmbeddablePreviewStreams hit error loading: " +
                t.strErrorMsg,
              t,
            );
          }
          return [];
        }
        async HintLoadEmbeddableStreams(e) {
          let t = this.MapEmbeddableStreamToRequest(e),
            a = this.GetStreamsLookupKeyFromParam(t);
          if (!this.m_inFlightRequests.has(a)) {
            this.m_lookupKeyToEmbedStreamDef.set(a, e);
            const r = this.InternalHintLoadEmbeddableStreams(e, t);
            this.m_inFlightRequests.set(a, r);
          }
          return this.m_inFlightRequests.get(a);
        }
        async InternalHintLoadEmbeddableStreams(e, t) {
          let a = (0, u.Tc)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, h.h7)(a)) return this.HandleHintLoadBroadcastResponse(e, a);
          try {
            let a = null;
            return (
              (a = await n().get(
                u.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                { params: t },
              )),
              this.HandleHintLoadBroadcastResponse(e, a.data)
            );
          } catch (e) {
            let t = (0, p.H)(e);
            console.error(
              "HintLoadEmbeddableStreams hit error loading: " + t.strErrorMsg,
              t,
            );
          }
          return [];
        }
        async HandleHintLoadBroadcastResponse(e, t) {
          (this.m_bUseFakeData = !1),
            e.bIsPreview &&
              (t?.filtered?.length > 0
                ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                    e.event,
                    t.filtered,
                  )
                : ((t = {
                    filtered: [{}],
                    success: 1,
                    total_count: 1,
                    err_msg: "",
                    broadcast_chat_visibility: "hide",
                  }),
                  (this.m_bUseFakeData = !0))),
            t.broadcast_chat_visibility &&
              (this.m_pageChatStatus = t.broadcast_chat_visibility);
          const a = new Array();
          (0, i.h5)(() => {
            t.filtered.forEach((e) => {
              if (!e.steamid) {
                const t = d.b.InitFromAccountID(e.accountid);
                e.steamid = t.ConvertTo64BitString();
              }
              const t = m.es.GetOrCreateBroadcastInfo(e.steamid),
                r = e.appid ? Number(e.appid) : m.fO;
              (t.m_nAppID = r),
                (t.m_strAppId = "" + r),
                void 0 === e.current_selection_priority &&
                  (e.current_selection_priority = e.default_selection_priority),
                r != m.fO && a.push(r);
            });
          });
          const r = this.GetStreamsLookupKeyFromDef(e);
          if (
            (this.m_lookupStreams.set(r, t.filtered),
            this.m_onLoadContextCall.has(r))
          ) {
            const e = this.m_onLoadContextCall.get(r);
            e
              ? ("dev" == u.TS.WEB_UNIVERSE &&
                  console.log(
                    "CBroadcastEmbeddableStore initialized after caller using callback to " +
                      e.name,
                  ),
                e.fnCallback())
              : "dev" == u.TS.WEB_UNIVERSE &&
                console.log(
                  "CBroadcastEmbeddableStore initialized after caller, however callback is since cleared",
                );
          }
          const s = this.GetStreams(e);
          return await this.AutoStartVideoStream(e, s), s;
        }
        ExtractBroadcastPrioritiesFromPartnerEventForPreview(e, t) {
          const a = Array.from(e.jsondata.broadcast_whitelist ?? []),
            r = Array.from(e.jsondata.broadcast_priority ?? []),
            s = new Map();
          for (let e = 0; e < a.length && !(e >= r.length); e++)
            s.set(a[e], (0, h.PH)(r[e]));
          t.forEach((e) => {
            const t = Number(e.accountid);
            s.has(t) && (e.current_selection_priority = s.get(t));
          });
        }
        async AutoStartVideoStream(e, t) {
          let a = this.GetStreamsLookupKeyFromDef(e);
          if (this.m_bMapHasStartedVideo.get(a)) return null;
          if (this.m_bUseFakeData) {
            if (!this.m_playReadyStream.get(a)) {
              const e = {
                accountid: 0,
                thumbnail_http_address: "",
                default_selection_priority: h.mY.k_eGeneral,
                current_selection_priority: h.mY.k_eGeneral,
              };
              this.m_playReadyStream.set(a, e);
            }
            return this.m_playReadyStream;
          }
          return this.PlayFromAvailableStreams(e, t);
        }
        async PlayFromAvailableStreams(e, t, a = !1) {
          const r = new Set();
          for (;;) {
            const s = t.filter((e) => !(r.has(e) || (a && e.nAppIDVOD))),
              o = this.GetAutoStartStream(s);
            if (!o) return null;
            if (await this.AttemptToPlayStream(e, o)) return o;
            r.add(o);
          }
        }
        async AttemptToPlayStream(e, t) {
          let a = this.GetStreamsLookupKeyFromDef(e);
          if (
            (this.m_bMapHasStartedVideo.set(a, !0),
            this.m_mapBroadcastChecked.has(t.accountid) ||
              this.m_mapBroadcastChecked.set(
                t.accountid,
                this.InternalAttemptToPlayStream(e, t),
              ),
            t.nAppIDVOD)
          )
            this.m_playReadyStream.set(a, t);
          else {
            const r = await this.m_mapBroadcastChecked.get(t.accountid);
            if (1 != r?.success) return null;
            (t.steamid = r.steamid),
              this.m_playReadyStream.set(a, t),
              this.GetConcurrentStreams(e) > 1
                ? (this.m_streamChatStatus = "hide")
                : (this.m_streamChatStatus = t.broadcast_chat_visibility),
              this.m_setStreamChangedListeners.forEach((e) => e(t));
            f(m.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID, 1, t.snr);
          }
          return t;
        }
        async InternalAttemptToPlayStream(e, t) {
          this.GetStreamsLookupKeyFromDef(e);
          let a = null;
          try {
            const e = u.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
            let r = {
              broadcastaccountid: t.accountid,
              viewer_token: m.es.GetViewerToken(),
              origin: self.origin,
            };
            return (a = await n().get(e, { params: r })), a.data;
          } catch (e) {
            let t = (0, p.H)(e);
            console.error("Broadcast.AttemptToPlayStream: " + t.strErrorMsg, t);
          }
          return null;
        }
        GetAutoStartStream(e) {
          if (!e) return null;
          const t = e.filter((e) => A(e)),
            a = t.reduce((e, t) => Math.max(e, b(t)), 0),
            r = t.filter((e) => b(e) === a);
          if (0 === r.length) return null;
          return r[Math.floor(Math.random() * r.length)];
        }
        MapEmbeddableStreamToRequest(e) {
          return {
            appid: e.appid,
            promotionName: e.bIsPreview ? "preview" : e.promotionName,
            clanid: e.clanid
              ? e.clanid
              : e.event
                ? e.event.clanSteamID.GetAccountID()
                : void 0,
            listid: e.listid,
            subid: e.subid,
            bundleid: e.bundleid,
            eventid: e.event ? e.event.GID : void 0,
            previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
              ? e.accountIDs.slice().sort().join(",")
              : void 0,
            test: false,
            cc: u.TS.COUNTRY,
            l: u.TS.LANGUAGE,
            hubtype: e.event?.GetContentHubType(),
            hubcategory: e.event?.GetContentHubCategory(),
            hubtagid: e.event?.GetContentHubTag(),
            tabuniqueid: e.tabuniqueid,
            tabfilter: e.tabfilter,
            rt_now_override_test: c.HD.BHasTimeOverride()
              ? c.HD.GetTimeNowWithOverride()
              : void 0,
          };
        }
        GetStreamsLookupKeyFromDef(e) {
          return this.GetStreamsLookupKeyFromParam(
            this.MapEmbeddableStreamToRequest(e),
          );
        }
        GetStreamsLookupKeyFromParam(e) {
          return JSON.stringify(e);
        }
        static Get() {
          return (
            _.s_GlobalStore ||
              ((_.s_GlobalStore = new _()),
              "dev" == u.TS.WEB_UNIVERSE &&
                (window.g_BroadcastEmbeddableStore = _.s_GlobalStore),
              _.s_GlobalStore.Init()),
            _.s_GlobalStore
          );
        }
        Init() {}
      }
      function b(e) {
        return e.current_selection_priority || h.mY.k_eGeneral;
      }
      function B(e) {
        e.sort((e, t) =>
          b(e) != b(t)
            ? b(t) - b(e)
            : e.viewer_count != t.viewer_count
              ? t.viewer_count - e.viewer_count
              : t.accountid - e.accountid,
        );
      }
      async function f(e, t, a) {
        if (e > 0 && 7 != e && a) {
          let r = new URLSearchParams();
          r.append("page_action", "" + t),
            r.append("snr", a),
            n().post(
              u.TS.STORE_BASE_URL + "ajaxreportproductaction/" + e + "/",
              r,
            );
        }
      }
      (0, r.Cg)([i.sH], _.prototype, "m_lookupStreams", void 0),
        (0, r.Cg)([i.sH], _.prototype, "m_playReadyStream", void 0),
        (0, r.Cg)([i.sH], _.prototype, "m_pageChatStatus", void 0),
        (0, r.Cg)([i.sH], _.prototype, "m_streamChatStatus", void 0),
        (0, r.Cg)([i.sH], _.prototype, "m_bUserChatExpanded", void 0),
        (0, r.Cg)(
          [i.sH],
          _.prototype,
          "m_bUserPreferenceHideBroadcastByDefault",
          void 0,
        ),
        (0, r.Cg)([i.sH], _.prototype, "m_bCollapsed", void 0),
        (0, r.Cg)(
          [i.XI],
          _.prototype,
          "HintLoadEmbeddablePreviewStreams",
          null,
        ),
        (0, r.Cg)([i.XI], _.prototype, "AttemptToPlayStream", null);
      const C = new l.T();
    },
    60727: (e, t, a) => {
      a.d(t, { l: () => m, m: () => d });
      var r = a(34629),
        s = a(14947),
        o = a(17720),
        n = a(44165),
        i = a(6379);
      class d {
        constructor() {
          (0, s.Gn)(this);
        }
        m_mapBroadcasterSteamIDToEvents = new Map();
        m_mapBroadcasterSteamIDData = new Map();
        static GetBBCodeParam(e, t, a = "") {
          const r = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return r ? r[1] : a;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            a = new Array();
          for (;;) {
            const r = t.exec(e);
            if (null === r) break;
            const s = r[1],
              n = r[2],
              i = d.GetBBCodeParam(s, "steamid"),
              m = {
                steamID: i ? new o.b(i) : void 0,
                name: d.GetBBCodeParam(s, "name"),
                title: d.GetBBCodeParam(s, "title"),
                company: d.GetBBCodeParam(s, "company"),
                photo: d.GetBBCodeParam(s, "photo"),
                bio: n,
              };
            a.push(m);
          }
          return a;
        }
        static ParseEventModelPresenters(e, t) {
          const a = e.GetDescriptionWithFallback(t);
          return d.ParseCalendarEventPresentersFromText(a);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            a = new Set();
          for (;;) {
            const r = t.exec(e);
            if (null === r) break;
            const s = r[1];
            a.add(Number(s));
          }
          return a;
        }
        static ParseEventModelAppReferences(e, t) {
          const a = e.GetDescriptionWithFallback(t),
            r = d.ParseEventAppReferencesFromText(a);
          if (e.jsondata?.referenced_appids)
            for (const t of e.jsondata.referenced_appids) r.add(t);
          return r;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(e) {
          const t = n.HD.GetTimeNowWithOverride(),
            a = e.GetCalendarItemsInTimeRange(t - 3600, t);
          for (const e of a.rgCalendarItems)
            i.O3.QueueLoadPartnerEvent(e.clanid, e.unique_id);
          const r = a.rgCalendarItems.map((e) =>
              i.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                o.b.InitFromClanID(e.clanid),
                e.unique_id,
                0,
              ),
            ),
            s = await Promise.all(r),
            d = new Map();
          for (const e of s)
            if (e && !(e.endTime && e.endTime < t))
              for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                d.has(t) ? d.get(t).push(e) : d.set(t, [e]);
          return d;
        }
        IsBroadcasterAlreadyBound(e, t) {
          const a = this.m_mapBroadcasterSteamIDToEvents.get(e),
            r = a ? a.length : 0;
          if ((t ? t.length : 0) != r) return !1;
          for (let e = 0; e < r; e++) if (a[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let a = new Map();
          for (const r of e) {
            if (!r) continue;
            const e = d.ParseEventModelPresenters(r, t);
            for (const t of e)
              t.steamID && a.set(t.steamID.ConvertTo64BitString(), t);
          }
          return a;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((a, r) => {
            e.has(r) || t.push(r);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const a = new Set();
          for (const r of e) {
            d.ParseEventModelAppReferences(r, t).forEach((e) => a.add(e));
          }
          return Array.from(a);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, a) => {
            if (this.IsBroadcasterAlreadyBound(a, e)) return;
            const r = {
              m_mapPresenters: d.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: d.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(a, r),
              this.m_mapBroadcasterSteamIDToEvents.set(
                a,
                e.map((e) => e.GID),
              );
          });
        }
        async SynchronizeEventsWithBroadcasts(e, t) {
          const a = await this.BuildBroadcasterSteamIDToActiveEventMap(e);
          this.RemoveCachedDataIfNotInMap(a),
            this.UpdateCachedDataFromEvents(a, t);
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          return this.m_mapBroadcasterSteamIDData.get(e)?.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          return this.m_mapBroadcasterSteamIDData.get(e)?.m_rgAppIDs;
        }
      }
      (0, r.Cg)([s.sH], d.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const m = new d();
    },
    68033: (e, t, a) => {
      a.d(t, { A: () => d, T: () => i });
      var r = a(30193),
        s = a(78327),
        o = a(41735),
        n = a.n(o);
      class i extends r.pN {
        constructor() {
          super();
        }
        BTransportReady() {
          return !0;
        }
        GetServerTime() {
          return s.TS.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
        }
        async RequestEmoticonListInternal() {
          let e = [];
          try {
            let t = await n().get(s.TS.CHAT_BASE_URL + "actions/EmoticonData", {
              withCredentials: !0,
            });
            if (t.data.emoticons)
              for (let a of t.data.emoticons) {
                let t = a.name;
                if (t.startsWith("^")) e.push({ name: t });
                else {
                  let r = { name: t.substr(1, t.length - 2) },
                    s = r.name.toLowerCase();
                  s != r.name && (r.name_normalized = s),
                    a.time_last_used && (r.last_used = a.time_last_used),
                    a.use_count && (r.use_count = a.use_count),
                    a.time_received && (r.time_received = a.time_received),
                    a.appid && (r.appid = a.appid),
                    e.push(r);
                }
              }
          } catch (e) {
            console.error("error loading emoticon list", e);
          }
          this.OnEmoticonListReceived(e);
        }
      }
      const d = new i();
    },
    10886: (e, t, a) => {
      a.d(t, { A: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    3209: (e, t, a) => {
      a.d(t, { A: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
