/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5436],
  {
    36567: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        OtherEventsCtn: "eventrow_OtherEventsCtn_1qNsZ",
        OtherEvents_MainImageCtn: "eventrow_OtherEvents_MainImageCtn_1_8oy",
        OtherEvents: "eventrow_OtherEvents_2ioeM",
        OtherEvents_EventCtn: "eventrow_OtherEvents_EventCtn_17gGs",
        OtherEvents_MainImage: "eventrow_OtherEvents_MainImage_3xf4A",
        OtherEvents_BGImage: "eventrow_OtherEvents_BGImage_3rp-l",
        OtherEvents_ContentCtn: "eventrow_OtherEvents_ContentCtn_3QaFW",
        OtherEvents_TextCtn: "eventrow_OtherEvents_TextCtn_2AVL1",
        OtherEvents_TextTitle: "eventrow_OtherEvents_TextTitle_3Zufl",
        UpcomingCtn: "eventrow_UpcomingCtn_--lM7",
        OtherEvents_SubTitle: "eventrow_OtherEvents_SubTitle_2UUNj",
        HoversEnabled: "eventrow_HoversEnabled_34Nxj",
        PartnerEventRowCapsule_MainImage:
          "eventrow_PartnerEventRowCapsule_MainImage_2bZBn",
        EventSummaryContainer: "eventrow_EventSummaryContainer_3PdWg",
        EventSummaryText: "eventrow_EventSummaryText_h5tE8",
        EventSummaryType: "eventrow_EventSummaryType_1Fp_l",
        HorizontalEvent: "eventrow_HorizontalEvent_1RS0b",
        HorizontalSummary: "eventrow_HorizontalSummary_3_1Qo",
        HorizontalTitle: "eventrow_HorizontalTitle_1m9zE",
        HorizontalDescriptionCtn: "eventrow_HorizontalDescriptionCtn_2s9cB",
        HorizontalDescription: "eventrow_HorizontalDescription_Dc9KC",
        AppCapsuleImage: "eventrow_AppCapsuleImage_2vo-l",
        AppCapsuleCtn: "eventrow_AppCapsuleCtn_1kYha",
        AppCapsuleImageHover: "eventrow_AppCapsuleImageHover_rcwMf",
        AppCapsulePrice: "eventrow_AppCapsulePrice_Jq75m",
      };
    },
    64393: (e) => {
      e.exports = {
        SubSection: "broadcastdebug_SubSection_3Ac4z",
        Header: "broadcastdebug_Header_2vrXB",
        AppSummaryWidgetCtn: "broadcastdebug_AppSummaryWidgetCtn_35ozI",
      };
    },
    63103: (e) => {
      e.exports = {
        BroadcastPage: "broadcastplayer_BroadcastPage_3IVNU",
        ChatAndVideoContainer: "broadcastplayer_ChatAndVideoContainer_3T2Xh",
        PlayerContainer: "broadcastplayer_PlayerContainer_1YtbI",
        ControlCtn: "broadcastplayer_ControlCtn_3NMuA",
        ControlsTitle: "broadcastplayer_ControlsTitle_2gpZb",
        TitleInput: "broadcastplayer_TitleInput_2hXPK",
        Options: "broadcastplayer_Options_1zp3Y",
        StopCtn: "broadcastplayer_StopCtn_3swF9",
        GameInfoCtn: "broadcastplayer_GameInfoCtn_4stlZ",
        GameInfo: "broadcastplayer_GameInfo_3LaZv",
        GameAboutTitleCtn: "broadcastplayer_GameAboutTitleCtn_3CMlO",
        GameAboutTitle: "broadcastplayer_GameAboutTitle_2RJzu",
        RelatedEvents: "broadcastplayer_RelatedEvents_2RjLr",
        DebugCtn: "broadcastplayer_DebugCtn_FKW0z",
      };
    },
    87266: (e) => {
      e.exports = {
        ProfileCtn: "broadcastprofile_ProfileCtn__qonR",
        GameAndOptionsCtn: "broadcastprofile_GameAndOptionsCtn_Qo4I3",
        GameAndViewersCtn: "broadcastprofile_GameAndViewersCtn_XQo2J",
        BroadcastTitleCtn: "broadcastprofile_BroadcastTitleCtn_1R6Q5",
        StreamDetailsCtn: "broadcastprofile_StreamDetailsCtn_11FAt",
        ViewerCount: "broadcastprofile_ViewerCount_2skQ1",
        BroadcastUserActionsCtn:
          "broadcastprofile_BroadcastUserActionsCtn_1MeMB",
        GameCapsule: "broadcastprofile_GameCapsule_1oJMx",
      };
    },
    96584: (e) => {
      e.exports = { AdminControls: "broadcastsupport_AdminControls_3KL0b" };
    },
    83147: (e) => {
      e.exports = {
        AvatarCtn: "communityavatar_AvatarCtn_3n3n0",
        NameAndProps: "communityavatar_NameAndProps_3Pljh",
      };
    },
    81503: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => c, R: () => i });
      var n = a(70655),
        r = a(22188),
        o = (a(26149), a(49186), a(54698), a(3389)),
        l = (a(55546), a(5525)),
        s = a(7200);
      class i {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map());
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
              l = n[2],
              s = i.GetBBCodeParam(r, "steamid"),
              c = {
                steamID: s ? new o.K(s) : void 0,
                name: i.GetBBCodeParam(r, "name"),
                title: i.GetBBCodeParam(r, "title"),
                company: i.GetBBCodeParam(r, "company"),
                photo: i.GetBBCodeParam(r, "photo"),
                bio: l,
              };
            a.push(c);
          }
          return a;
        }
        static ParseEventModelPresenters(e, t) {
          const a = e.GetDescriptionWithFallback(t);
          return i.ParseCalendarEventPresentersFromText(a);
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
            r = i.ParseEventAppReferencesFromText(n);
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
            const t = l.JW.GetTimeNowWithOverride(),
              a = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of a.rgCalendarItems)
              s.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const n = a.rgCalendarItems.map((e) =>
                s.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  o.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0
                )
              ),
              r = yield Promise.all(n),
              i = new Map();
            for (const e of r)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  i.has(t) ? i.get(t).push(e) : i.set(t, [e]);
            return i;
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
            const e = i.ParseEventModelPresenters(n, t);
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
            i.ParseEventModelAppReferences(n, t).forEach((e) => a.add(e));
          }
          return Array.from(a);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, a) => {
            if (this.IsBroadcasterAlreadyBound(a, e)) return;
            const n = {
              m_mapPresenters: i.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: i.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(a, n),
              this.m_mapBroadcasterSteamIDToEvents.set(
                a,
                e.map((e) => e.GID)
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
      (0, n.gn)([r.LO], i.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const c = new i();
    },
    70350: (e, t, a) => {
      "use strict";
      a.d(t, { KE: () => H, T4: () => U, _G: () => L, zY: () => F });
      var n = a(70655),
        r = a(9669),
        o = a.n(r),
        l = a(29323),
        s = a(13271),
        i = a(67294),
        c = a(26149),
        m = (a(54698), a(77442)),
        d = a(35921),
        u = a(39746),
        v = a(49186),
        p = a(3389),
        _ = (a(68002), a(24399)),
        E = a(76776),
        S = a(55546),
        C = a(9915),
        h = (a(7200), a(52114)),
        B = a(3044),
        I = a(23937),
        f = a(34133),
        g = a.n(f),
        b = a(75896),
        D = a(96602),
        G = a(65924),
        y = a(48780),
        A = a(7573),
        N = a(41311),
        T = a(90666),
        w = a(32548),
        O = a(13596),
        M = a(36567),
        x = a.n(M),
        P = a(67777),
        k = a(88335),
        R = a.n(k);
      const L = (0, l.Pi)((e) => {
        const {
            clanAccountID: t,
            gidAnnouncement: a,
            partnerEventStore: r,
            trackingLocation: l,
            bViewAllShowInfiniteScroll: s,
          } = e,
          c = p.K.InitFromClanID(t),
          m = (0, i.useRef)(null),
          [v, _] = (0, i.useState)(null),
          [S, h] = (0, i.useState)(!0),
          [f, b] = (0, i.useState)(!1);
        if (
          ((0, i.useEffect)(
            () => (
              (0, n.mG)(void 0, void 0, void 0, function* () {
                m.current && m.current("PartnerEventRow Initializng new mount");
                const e = o().CancelToken.source();
                m.current = e.cancel;
                const n = p.K.InitFromClanID(t);
                yield E.sV.LoadClanInfoForClanSteamID(n);
                let s = yield r.LoadAdjacentPartnerEventsByAnnouncement(
                  a,
                  n,
                  null,
                  4,
                  4,
                  void 0,
                  e
                );
                if (!e.token.reason) {
                  s = s || [];
                  let e = s
                    .filter((e) => e.GetAnnouncementGID() != a)
                    .map((e) => e.AnnouncementGID);
                  y.LQ(e);
                  const t = e
                    .slice(0, 3)
                    .map((e) => r.GetClanEventFromAnnouncementGID(e));
                  if ((_(t), h(!1), l)) {
                    let e = C.cb.Get().GetTracker(),
                      n = !1;
                    if (r.BHasClanAnnouncementGID(a)) {
                      let t = r.GetClanEventFromAnnouncementGID(a);
                      t &&
                        t.BIsPartnerEvent() &&
                        t.BIsVisibleEvent() &&
                        (e.MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          l
                        ),
                        (n = !0));
                    }
                    t.length > 0 &&
                      (s
                        .filter((e) => e.BIsPartnerEvent())
                        .forEach((t) =>
                          e.MarkEventShown(
                            t.GID,
                            t.clanSteamID.GetAccountID(),
                            l
                          )
                        ),
                      (n = !0)),
                      n && e.Flush();
                  }
                }
              }),
              () => {
                m.current && m.current("PartnerEventRow: unmounting");
              }
            ),
            [t, a, r, l]
          ),
          S)
        )
          return i.createElement(O.V, { position: "center", size: "medium" });
        if (0 == v.length) return i.createElement("div", null);
        const D = E.sV.GetClanInfoByClanAccountID(t);
        return i.createElement(
          w.S,
          null,
          i.createElement(
            "div",
            { className: (0, A.Z)(x().OtherEventsCtn, "OtherEventsCtn") },
            i.createElement(
              "div",
              { className: g().EventSectionTitleCtn },
              i.createElement(
                "div",
                {
                  className: (0, A.Z)(
                    g().EventSectionTitle,
                    "EventSectionTitle"
                  ),
                },
                (0, N.kQ)("#EventBrowse_MoreEventsTitle", D.group_name),
                " "
              ),
              i.createElement(
                "div",
                { className: g().EventSectionSpacer },
                " "
              ),
              s
                ? i.createElement(
                    "div",
                    {
                      className: g().EventSectionMoreBtn,
                      onClick: () => b(!0),
                    },
                    (0, N.Xx)("#EventBrowse_MoreEventsBtn")
                  )
                : i.createElement(
                    I.JW,
                    {
                      eventModel: v[0],
                      route: I.Ue.k_eViewWebSiteHub,
                      className: g().EventSectionMoreBtn,
                    },
                    (0, N.Xx)("#EventBrowse_MoreEventsBtn")
                  )
            ),
            i.createElement(
              d.s,
              {
                className: x().OtherEvents,
                "flow-children": "column",
                navEntryPreferPosition: u.c4.PREFERRED_CHILD,
              },
              v.map((e) =>
                i.createElement(U, { key: e.AnnouncementGID, event: e })
              )
            ),
            Boolean(f) &&
              i.createElement(B.x, {
                appid: v[0].appid,
                clanSteamID: c,
                announcementGID: v[0].AnnouncementGID,
                closeModal: () => b(!1),
                partnerEventStore: r,
              })
          )
        );
      });
      function U(e) {
        const {
            event: t,
            imageURLOverride: a,
            bShowAssociatedApp: n,
            langOverride: r,
            onClick: o,
          } = e,
          [l, m, d, u, p, E, C, B] =
            ((0, G.bJ)(),
            (0, s.SZ)(() => {
              const e = r || (0, c.jM)(T.De.LANGUAGE),
                n = Boolean(void 0 !== a)
                  ? a
                  : t.GetImageURLWithFallback("capsule", e, _.FN.capsule_main);
              return [
                e,
                t.appid,
                n,
                t.GetNameWithFallback(e) || "",
                t.GetCategoryAsString(),
                t.GetSummaryWithFallback(e),
                (0, v.ax)(n),
                t.GetSubTitleWithLanguageFallback(e) || "",
              ];
            })),
          [f, g] = (0, h.vs)(m, {
            include_assets: !0,
            include_screenshots: !0,
          });
        if (!t)
          return i.createElement("div", {
            className: x().OtherEvents_EventCtn,
          });
        if (!f && m)
          return i.createElement(O.V, {
            size: "small",
            position: "center",
            string: (0, N.Xx)("#Loading"),
          });
        const b = (0, S.vY)().GetStoreInitializationTimestamp().getTime() / 1e3,
          y = t ? t.GetStartTimeAndDateUnixSeconds() : "";
        let w = B;
        return (
          B && (B.length > 30 || u.length > 30) && (w = void 0),
          i.createElement(
            i.Fragment,
            null,
            i.createElement(
              I.JW,
              {
                className: (0, A.Z)(
                  x().OtherEvents_EventCtn,
                  x().HoversEnabled
                ),
                eventModel: t,
                route: I.Ue.k_eView,
                onClick: o,
                preferredFocus: !0,
              },
              i.createElement(
                "div",
                { className: x().EventSummaryContainer },
                i.createElement("div", { className: x().EventSummaryType }, p),
                i.createElement("div", { className: x().EventSummaryText }, E)
              ),
              i.createElement("div", {
                className: x().OtherEvents_BGImage,
                style: {
                  backgroundColor: "#ffffff",
                  backgroundImage: `url(${C})`,
                },
              }),
              i.createElement(
                "div",
                { className: x().OtherEvents_ContentCtn },
                i.createElement(
                  "div",
                  { className: x().OtherEvents_MainImageCtn },
                  i.createElement("img", {
                    src: d,
                    className: x().OtherEvents_MainImage,
                  })
                ),
                i.createElement(
                  "div",
                  { className: x().OtherEvents_TextCtn },
                  i.createElement(
                    "div",
                    { className: x().OtherEvents_TextTitle },
                    u
                  ),
                  Boolean(w) &&
                    i.createElement(
                      "div",
                      { className: x().OtherEvents_SubTitle },
                      w
                    ),
                  Boolean(y > b)
                    ? i.createElement(
                        "div",
                        { className: x().UpcomingCtn },
                        i.createElement(D.H6, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                        })
                      )
                    : i.createElement(D.H6, {
                        bSingleLine: !0,
                        bOnlyDate: !0,
                        dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                      })
                )
              )
            ),
            Boolean(n && t.appid) && i.createElement(F, { appid: t.appid })
          )
        );
      }
      function F(e) {
        const { appid: t, bHidePrice: a } = e,
          [n] = (0, h.vs)(t, m.bk),
          r = (0, G.bJ)(),
          o = (0, T.id)();
        if (!n) return null;
        const l = n.GetBestPurchaseOption();
        return i.createElement(
          d.s,
          Object.assign(
            { className: (0, A.Z)(x().AppCapsuleCtn, "AppCapsuleCtn") },
            (0, b.h)(n, r, o)
          ),
          i.createElement(
            P.ll,
            {
              item: { type: "game", id: t },
              hoverProps: {
                direction: "overlay",
                style: { minWidth: "320px" },
              },
            },
            i.createElement("img", {
              className: x().AppCapsuleImage,
              src: n.GetAssets().GetSmallCapsuleURL(),
            })
          ),
          Boolean(!a && !n.BIsFree()) &&
            i.createElement(
              "span",
              {
                className: (0, A.Z)(
                  x().AppCapsulePrice,
                  Boolean(null == l ? void 0 : l.discount_pct)
                    ? R().Discounted
                    : ""
                ),
              },
              Boolean(null == l ? void 0 : l.discount_pct) &&
                i.createElement(
                  "span",
                  { className: R().StoreSaleDiscountBox },
                  `-${null == l ? void 0 : l.discount_pct}%`
                ),
              Boolean(l.final_price_in_cents) &&
                i.createElement(
                  "span",
                  { className: R().StoreSalePriceBox },
                  l.formatted_final_price
                )
            )
        );
      }
      function H(e) {
        const { event: t, imageURLOverride: a, onClick: n } = e,
          r = (0, c.jM)(T.De.LANGUAGE),
          [o, l, m] = (0, s.SZ)(() =>
            t
              ? [
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        r,
                        _.FN.capsule_main
                      ),
                  t.GetNameWithFallback(r),
                  t.GetCategoryAsString(),
                ]
              : [void 0, void 0, void 0]
          );
        return t
          ? i.createElement(
              I.JW,
              {
                className: x().OtherEvents_EventCtn + " " + x().HorizontalEvent,
                eventModel: t,
                route: I.Ue.k_eView,
                onClick: n,
              },
              i.createElement(
                "div",
                { className: x().OtherEvents_ContentCtn },
                i.createElement(
                  "div",
                  { className: x().OtherEvents_MainImageCtn },
                  i.createElement("img", {
                    src: o,
                    className: x().OtherEvents_MainImage,
                  })
                )
              ),
              i.createElement(
                "div",
                { className: x().OtherEvents_TextCtn },
                i.createElement(
                  "div",
                  { className: x().HorizontalDescriptionCtn },
                  i.createElement(
                    "div",
                    { className: x().HorizontalDescription },
                    m
                  ),
                  i.createElement(D.H6, {
                    bSingleLine: !0,
                    dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                  })
                ),
                i.createElement("div", { className: x().HorizontalTitle }, l)
              )
            )
          : i.createElement("div", { className: x().OtherEvents_EventCtn });
      }
    },
    5265: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => _e });
      a(69491);
      var n = a(67294),
        r = a(78587),
        o = a(92244),
        l = a(70655),
        s = a(9669),
        i = a.n(s),
        c = a(22188),
        m = (a(54698), a(3389)),
        d = a(49805),
        u = (a(82946), a(93976)),
        v = a(90666);
      class p {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null);
        }
        GetBroadcasterSteamID() {
          return this.m_steamid;
        }
        GetDebugInfo() {
          return this.m_curDebugInfo;
        }
        BShowOnlyVideo() {
          return this.m_bShowOnlyVideo;
        }
        BShowOnlyChat() {
          return this.m_bShowOnlyChat;
        }
        BShowInIframe() {
          return this.m_bShowOnlyChat || this.m_bShowOnlyVideo;
        }
        LoadBroadcastDebugInfo(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            let t = v.De.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
              a = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                origin: self.origin,
              };
            try {
              let n = yield i().get(t, {
                params: a,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
              if (e && e.token.reason) return null;
              if (n && 200 == n.status && n.data && 1 == n.data.success)
                return (this.m_curDebugInfo = n.data), this.m_curDebugInfo;
            } catch (e) {
              let t = (0, u.l)(e);
              console.error(
                "LoadBroadcastDebugInfo: Failed " + t.strErrorMsg,
                t
              );
            }
            return null;
          });
        }
        UpdateBroadcastSettings(e, t, a) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            let n =
                v.De.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: e,
                title: t,
                sessionid: v.De.SESSIONID,
              };
            try {
              let e = yield i().get(n, {
                params: r,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
              if (a && a.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success) {
                const e = d.c9.GetOrCreateBroadcastInfo(
                  this.m_steamid.ConvertTo64BitString()
                );
                return (
                  e &&
                    (0, c.z)(() => {
                      e.m_strTitle = t;
                    }),
                  !0
                );
              }
            } catch (e) {
              let t = (0, u.l)(e);
              console.error(
                "UpdateBroadcastSettings: Failed " + t.strErrorMsg,
                t
              );
            }
            return !1;
          });
        }
        StopBroadcast(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = d.c9.GetBroadcast(t);
            let n = v.De.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: v.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "StopBroadcast",
              n,
              r,
              e
            );
          });
        }
        SetBroadcasterRestrictions(e, t, a) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const n = this.m_steamid.ConvertTo64BitString(),
              r = d.c9.GetBroadcast(n);
            let o =
                v.De.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              l = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                type: e,
                days: t,
                sessionid: v.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              o,
              l,
              a
            );
          });
        }
        SetUnBannable(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = d.c9.GetBroadcast(t);
            let n = v.De.COMMUNITY_BASE_URL + "broadcast/unban",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: v.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetUnBannable",
              n,
              r,
              e
            );
          });
        }
        SendUserReportOnBroadcast(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = d.c9.GetBroadcast(t);
            let n = v.De.COMMUNITY_BASE_URL + "broadcast/report",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                description: e,
                sessionid: v.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SendUserReportOnBroadcast",
              n,
              r,
              null
            );
          });
        }
        InternalSendSimpleGetRequest(e, t, a, n) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            try {
              let e = yield i().get(t, {
                params: a,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
              if (n && n.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success)
                return !0;
            } catch (t) {
              let a = (0, u.l)(t);
              console.error(
                `CCommunityBroadcastStore:${e}: Failed ` + a.strErrorMsg,
                a
              );
            }
            return !1;
          });
        }
        static Get() {
          return (
            p.s_Singleton || ((p.s_Singleton = new p()), p.s_Singleton.Init()),
            p.s_Singleton
          );
        }
        Init() {
          let e = (0, v.kQ)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_steamid = new m.K(e.steamid)),
            (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
        }
        ValidateStoreDefault(e) {
          return !(!e || "object" != typeof e) && "string" == typeof e.steamid;
        }
      }
      (0, l.gn)([c.LO], p.prototype, "m_curDebugInfo", void 0);
      var _ = a(29323),
        E = a(85503),
        S = a(63405),
        C = a(17157),
        h = a.n(C),
        B = (a(69765), a(68002), a(28976)),
        I = a(76776),
        f = a(7200),
        g = a(48341),
        b = a(32548),
        D = a(70350),
        G = a(31933),
        y = a(34133),
        A = a.n(y),
        N = a(85732),
        T = a(69472),
        w = a(59650),
        O = a(7573),
        M = a(53622),
        x = a(41311),
        P = (a(26149), a(88254)),
        k = a(96602),
        R = a(64393);
      const L = (e) => {
          const t = (0, n.useRef)(null),
            [a, r] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(
              () => () => {
                t.current && t.current("BroadcastDebugSection: unmounting");
              },
              []
            ),
            n.createElement(
              b.S,
              null,
              n.createElement(
                "div",
                { className: (0, O.Z)(R.Container) },
                n.createElement(
                  "div",
                  { className: R.Controls },
                  n.createElement(
                    g.zx,
                    {
                      onClick: () =>
                        (0, l.mG)(void 0, void 0, void 0, function* () {
                          t.current && t.current();
                          const e = i().CancelToken.source();
                          (t.current = e.cancel),
                            r(yield p.Get().LoadBroadcastDebugInfo(e));
                        }),
                    },
                    "(VO) Load Debug Info"
                  )
                ),
                n.createElement(b.S, null, n.createElement(U, { info: a }))
              )
            )
          );
        },
        U = (e) => {
          const { info: t } = e,
            [a, r] = (0, n.useState)(!1);
          if (!t) return null;
          const o = p.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            l = d.c9.GetBroadcast(o);
          return n.createElement(
            "div",
            { className: R.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              n.createElement(
                "div",
                { className: R.SubSection },
                n.createElement("div", { className: R.Header }, "Error"),
                n.createElement(
                  "div",
                  null,
                  "EResult: ",
                  t.last_error_result,
                  ", occurred ",
                  t.last_error_time,
                  " - ",
                  n.createElement(k.H6, {
                    dateAndTime: t.last_error_time,
                    bSingleLine: !0,
                  })
                )
              ),
            n.createElement(
              "div",
              { className: R.SubSection },
              n.createElement(
                "div",
                { className: R.Header },
                "Broadcast Setup"
              ),
              n.createElement(
                "div",
                null,
                "Broadcaster: ",
                t.steam_id,
                ", SteamID: ",
                o
              ),
              n.createElement(
                "div",
                null,
                "Broadcast Directory: ",
                t.directory_server,
                ", SessionID: ",
                t.broadcast_id
              ),
              n.createElement(
                "div",
                null,
                "Broadcast Ingestor: ",
                t.relay_server,
                ", UploadID: ",
                t.upload_id
              ),
              n.createElement(
                "div",
                null,
                "Broadcast Origin: ",
                t.origin_server
              ),
              n.createElement("div", null, "Broadcast Chat: ", t.chat_server)
            ),
            n.createElement(
              "div",
              { className: R.SubSection },
              n.createElement("div", { className: R.Header }, "Upload Info"),
              n.createElement(
                "div",
                null,
                "Upload Client: ",
                t.remote_address,
                " ",
                Boolean(t.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)"
              ),
              n.createElement(
                "div",
                null,
                "Avg Upload: ",
                t.upload_avg_fps,
                " FPS, ",
                t.upload_avg_bandwidth,
                " KBPS, ",
                t.upload_avg_key_interval,
                " MSEC key frame interval"
              )
            ),
            n.createElement(
              "div",
              { className: R.SubSection },
              n.createElement("div", { className: R.Header }, "Viewer Info"),
              n.createElement(
                "div",
                null,
                "Viewers: ",
                t.current_viewers,
                " current (",
                t.current_anon_viewers,
                " anonymous), ",
                t.total_unique_viewers,
                " total unique, ",
                t.max_concurrent_viewers,
                " max concurrent"
              ),
              n.createElement(
                "div",
                null,
                "Average time watched: ",
                t.average_watch_duration,
                " seconds"
              ),
              n.createElement(
                "div",
                null,
                "Last Minute: ",
                t.added_viewers_last_minute,
                " watch requests, ",
                t.rejected_viewers_last_minute,
                " rejected"
              ),
              n.createElement("div", null, "Restrictions: ", t.restriction),
              n.createElement("div", null, t.extra_viewer_info)
            ),
            n.createElement(
              "div",
              { className: R.SubSection },
              n.createElement("div", { className: R.Header }, "Settings"),
              n.createElement("div", null, "is replay? ", t.is_replay),
              n.createElement(
                "div",
                null,
                "is replay local file? ",
                t.is_replay_local_file
              ),
              n.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_local_file
              ),
              n.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_clip
              ),
              n.createElement(
                "div",
                null,
                "is capturing VOD? ",
                t.is_capturing_vod
              ),
              n.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                t.is_whitelisted
              )
            ),
            n.createElement(
              "div",
              { className: R.SubSection },
              n.createElement("div", { className: R.Header }, "App Info"),
              n.createElement("div", null, "appid: ", t.app_id),
              n.createElement("div", null, "app name: ", t.app_name),
              n.createElement("div", null, "broadcast title: ", t.title),
              n.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                n.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && t.app_id > 0) &&
                n.createElement(
                  "div",
                  { className: R.AppSummaryWidgetCtn },
                  n.createElement(N.ju, { id: t.app_id, type: "game" })
                )
            ),
            n.createElement(
              "div",
              { className: R.SubSection },
              n.createElement(
                "div",
                { className: R.Header },
                "Manifest Information"
              ),
              n.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                l.m_data.heartbeat_interval
              ),
              n.createElement("div", null, "DASH MPEG Url: ", l.m_data.url),
              n.createElement("div", null, "HLS Url: ", l.m_data.hls_url)
            ),
            n.createElement(g.zx, { onClick: () => r(!a) }, "Toggle Raw Data"),
            Boolean(a) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: R.SubSection },
                  n.createElement(P.G, { data: t })
                ),
                n.createElement(
                  "div",
                  { className: R.SubSection },
                  n.createElement(P.G, { data: l.m_data })
                )
              )
          );
        };
      var F = a(63103),
        H = a(93981),
        V = a(44298),
        z = a(2388),
        X = a(83147);
      function W(e) {
        const t = z.y$.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          let a = new H.Pv(e);
          return (
            (a.m_strPlayerName = t.persona_name),
            (a.m_strAvatarHash = t.avatar_hash),
            (a.m_ePersonaState = t.persona_state),
            a
          );
        }
        return null;
      }
      const K = (e) => {
        e.steamid.GetAccountID();
        const [t, a] = (0, n.useState)(W(e.steamid)),
          [r, o] = (0, n.useState)(z.y$.GetProfileURLBySteamID(e.steamid)),
          [s, i] = (0, n.useState)(z.y$.GetPersonaNameBySteamID(e.steamid));
        return (
          (0, n.useEffect)(() => {
            if (!t) {
              (() =>
                (0, l.mG)(void 0, void 0, void 0, function* () {
                  yield z.y$.LoadProfiles([e.steamid.ConvertTo64BitString()]),
                    a(W(e.steamid)),
                    o(z.y$.GetProfileURLBySteamID(e.steamid)),
                    i(z.y$.GetPersonaNameBySteamID(e.steamid));
                }))();
            }
          }, [e.steamid, t]),
          n.createElement(
            "div",
            { className: X.AvatarCtn },
            n.createElement(
              "a",
              {
                href: r,
                "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
              },
              n.createElement(V.vV, {
                persona: t,
                size: e.size,
                statusPosition: "bottom",
              })
            ),
            n.createElement(
              "div",
              { className: X.NameAndProps },
              Boolean(e.bShowName) &&
                n.createElement(
                  "a",
                  {
                    href: r,
                    "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                  },
                  s
                ),
              e.children
            )
          )
        );
      };
      var Z = a(13271),
        j = a(52114),
        q = a(23211),
        Y = a(95598),
        $ = a(72258),
        Q = a(35092),
        J = a(87266);
      function ee(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [r, o] = (0, Z.SZ)(() => {
            const e = d.c9.GetOrCreateBroadcastInfo(a);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [l] = (0, j.vs)(o, { include_assets: !0 });
        return n.createElement(
          b.S,
          null,
          n.createElement(
            "div",
            { className: J.ProfileCtn },
            n.createElement(
              "a",
              {
                href: (0, Q.OL)(
                  (null == l ? void 0 : l.GetStorePageURL()) ||
                    v.De.STORE_BASE_URL + "app/" + o
                ),
                className: J.GameCapsule,
              },
              n.createElement("img", {
                src: null == l ? void 0 : l.GetAssets().GetMainCapsuleURL(),
              })
            ),
            n.createElement(
              "div",
              { className: J.StreamDetailsCtn },
              n.createElement(
                "div",
                { className: J.GameAndOptionsCtn },
                n.createElement(
                  "div",
                  { className: J.GameAndViewersCtn },
                  n.createElement(te, { broadcasterSteamID: t }),
                  n.createElement(
                    "div",
                    { className: J.ViewerCount },
                    (0, x.kb)("#Broadcast_ViewerCount", r.toLocaleString())
                  )
                ),
                n.createElement(ae, { broadcasterSteamID: t })
              ),
              n.createElement(K, { steamid: t, size: "Medium", bShowName: !0 })
            )
          )
        );
      }
      const te = (0, _.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [r, o] = (0, Z.SZ)(() => {
              const e = d.c9.GetOrCreateBroadcastInfo(a);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [l] = (0, j.vs)(o, { include_assets: !0 });
          return n.createElement(
            "div",
            { className: J.BroadcastTitleCtn },
            (0, x.Xx)("#Broadcast_Playing"),
            n.createElement(
              "a",
              {
                href: (0, Q.OL)(
                  (null == l ? void 0 : l.GetStorePageURL()) ||
                    v.De.STORE_BASE_URL + "app/" + o
                ),
              },
              Boolean(r) ? r : null == l ? void 0 : l.GetName()
            ),
            Boolean((null == r ? void 0 : r.length) > 0) &&
              n.createElement("span", null, " - ", r)
          );
        }),
        ae = (0, _.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString();
          d.c9.GetOrCreateBroadcastInfo(a);
          return n.createElement(
            "div",
            { className: J.BroadcastUserActionsCtn },
            Boolean(
              v.L7.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              n.createElement(
                g.zx,
                {
                  "data-tooltip-text": (0, x.Xx)("#Broadcast_User_Report_ttip"),
                  onClick: (e) => {
                    v.L7.logged_in
                      ? (0, w.AM)(
                          n.createElement(ne, { broadcasterSteamID: t }),
                          (0, M.RA)(e)
                        )
                      : (0, w.AM)(
                          n.createElement(T.uH, {
                            strTitle: (0, x.Xx)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: (0, x.Xx)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: (0, x.Xx)("#MobileLogin_SignIn"),
                            onOK: () => (0, q.X)(),
                          }),
                          (0, M.RA)(e)
                        );
                  },
                },
                n.createElement(Y.WNf, null)
              ),
            n.createElement(
              g.zx,
              {
                "data-tooltip-text": (0, x.Xx)("#Broadcast_User_FAQ_ttip"),
                onClick: (e) =>
                  (0, $.b8)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  ),
              },
              n.createElement(Y.daM, null)
            )
          );
        }),
        ne = (e) => {
          const [t, a] = (0, n.useState)("");
          return n.createElement(
            T.uH,
            {
              strTitle: (0, x.Xx)("#Broadcast_ReportItem_Title"),
              strDescription: (0, x.Xx)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: () =>
                (0, l.mG)(void 0, void 0, void 0, function* () {
                  yield p.Get().SendUserReportOnBroadcast(t),
                    e.closeModal && e.closeModal();
                }),
            },
            n.createElement("textarea", {
              value: t,
              onChange: (e) => a(e.currentTarget.value),
              rows: 10,
              cols: 80,
            })
          );
        };
      var re = a(96584),
        oe = a(13596);
      const le = (e) => {
          if (!v.L7.is_support) return null;
          const t = (t, a) => {
              (0, w.AM)(
                n.createElement(se, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                (0, M.RA)(t)
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return n.createElement(
            "div",
            { className: (0, O.Z)(re.AdminControls, A().ValveOnlyBackground) },
            n.createElement("div", null, "(VO) Support Tools"),
            n.createElement(
              g.zx,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page"
            ),
            n.createElement(
              g.zx,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting"
            ),
            n.createElement(
              g.zx,
              {
                onClick: (t) => {
                  (0, w.AM)(
                    n.createElement(ie, { steamid: e.broadcastSteamID }),
                    (0, M.RA)(t)
                  );
                },
              },
              "Make Unbannable"
            ),
            n.createElement(
              g.zx,
              { onClick: (e) => (0, $.b8)(e, a) },
              "Go to Support Page"
            )
          );
        },
        se = (0, _.Pi)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [r, o] = (0, n.useState)(1),
            [s, c] = (0, n.useState)(!1),
            [m, d] = (0, n.useState)(!1),
            [u, v] = (0, n.useState)(!1),
            _ = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              _.current && _.current("BroadcastConfirmBanAction: unmounting");
            },
            []
          );
          const E = () => e.closeModal && e.closeModal();
          return n.createElement(
            b.S,
            null,
            n.createElement(
              T.e1,
              { onEscKeypress: E },
              n.createElement(
                g.VY,
                null,
                n.createElement(g.h4, null, "Remove Broadcast From Front Page"),
                n.createElement(
                  g.uT,
                  null,
                  n.createElement(
                    g.Ac,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "frontpage" == a
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?"
                    ),
                    n.createElement(
                      "div",
                      null,
                      n.createElement(g.ry, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: r,
                        onChange: (e) => o(e.data),
                      }),
                      Boolean(s) && n.createElement(oe.V, null),
                      Boolean(m) &&
                        n.createElement(
                          "div",
                          null,
                          u
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later"
                        )
                    )
                  )
                ),
                n.createElement(
                  g.$_,
                  null,
                  m
                    ? n.createElement(
                        g.KM,
                        { onClick: E },
                        (0, x.Xx)("#Button_Dismiss")
                      )
                    : n.createElement(
                        g.Uq,
                        null,
                        n.createElement(
                          g.zx,
                          { onClick: E },
                          (0, x.Xx)("#Button_Cancel")
                        ),
                        n.createElement(
                          g.KM,
                          {
                            onClick: () =>
                              (0, l.mG)(void 0, void 0, void 0, function* () {
                                c(!0);
                                try {
                                  _.current && _.current();
                                  const e = i().CancelToken.source();
                                  _.current = e.cancel;
                                  let t = yield p
                                    .Get()
                                    .SetBroadcasterRestrictions(a, r, e);
                                  e.token.reason || (t = !0);
                                } finally {
                                  c(!1), d(!0), v(t);
                                }
                              }),
                          },
                          (0, x.Xx)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        }),
        ie = (e) => {
          const [t, a] = (0, n.useState)(!1),
            [r, o] = (0, n.useState)(!1),
            [s, c] = (0, n.useState)(!1),
            m = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              m.current && m.current("BroadcastMakeUnbannable: unmounting");
            },
            []
          );
          const d = () => e.closeModal && e.closeModal();
          return n.createElement(
            b.S,
            null,
            n.createElement(
              T.e1,
              { onEscKeypress: d },
              n.createElement(
                g.VY,
                null,
                n.createElement(g.h4, null, "Make Broadcast Unbannable"),
                n.createElement(
                  g.uT,
                  null,
                  n.createElement(
                    g.Ac,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?"
                    ),
                    n.createElement(
                      "div",
                      null,
                      Boolean(t) && n.createElement(oe.V, null),
                      Boolean(r) &&
                        n.createElement(
                          "div",
                          null,
                          s
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable"
                        )
                    )
                  )
                ),
                n.createElement(
                  g.$_,
                  null,
                  r
                    ? n.createElement(
                        g.KM,
                        { onClick: d },
                        (0, x.Xx)("#Button_Dismiss")
                      )
                    : n.createElement(
                        g.Uq,
                        null,
                        n.createElement(
                          g.zx,
                          { onClick: d },
                          (0, x.Xx)("#Button_Cancel")
                        ),
                        n.createElement(
                          g.KM,
                          {
                            onClick: () =>
                              (0, l.mG)(void 0, void 0, void 0, function* () {
                                a(!0);
                                let e = !1;
                                try {
                                  m.current && m.current();
                                  const t = i().CancelToken.source();
                                  (m.current = t.cancel),
                                    (e = yield p.Get().SetUnBannable(t));
                                } finally {
                                  a(!1), o(!0), c(e);
                                }
                              }),
                          },
                          (0, x.Xx)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        },
        ce = (0, _.Pi)((e) => {
          const t = p.Get().GetBroadcasterSteamID(),
            a = t.ConvertTo64BitString(),
            [r, o] = (0, G.Ar)("muted", !0),
            l = d.c9.GetBroadcast(a),
            s = d.c9.GetOrCreateBroadcastInfo(a);
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              "div",
              { className: (0, O.Z)(F.BroadcastPage) },
              n.createElement(
                "div",
                { className: (0, O.Z)(h().BroadcastAndChat) },
                Boolean(!p.Get().BShowOnlyChat()) &&
                  n.createElement(
                    b.S,
                    null,
                    n.createElement(
                      "div",
                      { className: (0, O.Z)(h().wrapper) },
                      n.createElement(
                        "div",
                        {
                          className: (0, O.Z)({
                            [h().video_placeholder]: !0,
                            video_placeholder_trgt: !0,
                            [h().NoChat]: p.Get().BShowOnlyVideo(),
                          }),
                        },
                        n.createElement(
                          "div",
                          { className: h().BroadcastPlayerContainer },
                          n.createElement(
                            b.S,
                            null,
                            n.createElement(S.default, {
                              steamIDBroadcast: a,
                              watchLocation: 5,
                              bStartMuted: r,
                            })
                          )
                        )
                      )
                    )
                  ),
                Boolean(!p.Get().BShowOnlyVideo()) &&
                  n.createElement(
                    "div",
                    { className: h().detail_chat_ctn },
                    n.createElement(
                      "div",
                      { className: h().ChatContainer },
                      n.createElement(
                        b.S,
                        null,
                        n.createElement(E.c, {
                          emoticonStore: B.D$,
                          watchLocation: 6,
                          steamID: a,
                          broadcastID: l ? l.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
              ),
              Boolean(!p.Get().BShowInIframe()) &&
                n.createElement(me, { broadcasterSteamID: t, broadcastInfo: s })
            )
          );
        }),
        me = (0, _.Pi)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [r, o] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(() => {
              (0, l.mG)(void 0, void 0, void 0, function* () {
                let e = yield I.sV.LoadOGGClanInfoForAppID(
                  Number.parseInt(a.m_strAppId)
                );
                o(e);
              });
            }, [a.m_strAppId]),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(ee, { broadcasterSteamID: t }),
              n.createElement(de, { steamid: t }),
              Boolean(v.L7.is_support) &&
                n.createElement(
                  "div",
                  null,
                  n.createElement(le, { broadcastSteamID: t }),
                  n.createElement(
                    "div",
                    {
                      className: (0, O.Z)(A().ValveOnlyBackground, F.DebugCtn),
                    },
                    n.createElement(L, null)
                  )
                ),
              Boolean(a.m_strAppId && Number.parseInt(a.m_strAppId) > 7) &&
                n.createElement(
                  "div",
                  { className: F.GameInfoCtn },
                  n.createElement(
                    "div",
                    { className: F.GameAboutTitleCtn },
                    n.createElement(
                      "div",
                      { className: F.GameAboutTitle },
                      " ",
                      (0, x.Xx)("#Broadcast_About_Game"),
                      " "
                    ),
                    n.createElement(
                      "div",
                      { className: A().EventSectionSpacer },
                      " "
                    )
                  ),
                  n.createElement(
                    "div",
                    { className: F.GameInfo },
                    n.createElement(N.ju, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    })
                  )
                ),
              Boolean(r) &&
                n.createElement(
                  "div",
                  { className: F.RelatedEvents },
                  n.createElement(D._G, {
                    clanAccountID: r.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: f.j1,
                    bViewAllShowInfiniteScroll: !0,
                  })
                )
            )
          );
        }),
        de = (0, _.Pi)((e) => {
          const t = (0, n.useRef)(null);
          let a = d.c9.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString()
          );
          const [r, o] = (0, n.useState)(a.m_strTitle),
            [s, c] = (0, n.useState)(""),
            [m, u] = (0, n.useState)(null);
          if (
            ((0, n.useEffect)(
              () => (
                o(a.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [a.m_strTitle]
            ),
            v.L7.accountid != e.steamid.GetAccountID())
          )
            return null;
          return n.createElement(
            "div",
            { className: F.ControlCtn },
            n.createElement(
              "div",
              { className: F.ControlsTitle },
              (0, x.Xx)("#Broadcaster_Control_title")
            ),
            n.createElement(
              "div",
              { className: F.TitleInput },
              n.createElement(
                "div",
                { className: F.Options },
                n.createElement(g.II, {
                  type: "text",
                  label: (0, x.Xx)("#Broadcast_title_title"),
                  onChange: (e) => o(e.currentTarget.value || ""),
                  placeholder: (0, x.Xx)("#Broadcast_title_placeholder"),
                  value: r,
                }),
                n.createElement(g.II, {
                  type: "text",
                  label: (0, x.Xx)("#Broadcast_Control_matchid"),
                  onChange: (e) => c(e.currentTarget.value || ""),
                  value: s,
                }),
                n.createElement(
                  g.zx,
                  {
                    onClick: () =>
                      (0, l.mG)(void 0, void 0, void 0, function* () {
                        t.current && t.current();
                        const e = i().CancelToken.source();
                        t.current = e.cancel;
                        let a = yield p.Get().UpdateBroadcastSettings(s, r, e);
                        e.token.reason ||
                          u(
                            (0, x.Xx)(
                              a
                                ? "#Broadcast_Control_Success"
                                : "#Broadcast_Control_Failure"
                            )
                          );
                      }),
                    "data-tooltip-text": (0, x.Xx)(
                      "#Broadcast_save_title_ttip"
                    ),
                  },
                  (0, x.Xx)("#Broadcast_save_changes")
                )
              ),
              n.createElement(
                "div",
                { className: F.StopCtn },
                n.createElement(
                  g.zx,
                  {
                    onClick: (e) => {
                      (0, w.AM)(
                        n.createElement(T.uH, {
                          strTitle: (0, x.Xx)(
                            "#Broadcast_Control_StopBroadcast"
                          ),
                          strDescription: (0, x.Xx)(
                            "#EventEditor_GenericAreYouSure"
                          ),
                          onOK: () =>
                            (0, l.mG)(void 0, void 0, void 0, function* () {
                              t.current && t.current();
                              const e = i().CancelToken.source();
                              t.current = e.cancel;
                              let a = yield p.Get().StopBroadcast(e);
                              e.token.reason ||
                                u(
                                  (0, x.Xx)(
                                    a
                                      ? "#Broadcast_Control_StopSuccess"
                                      : "#Broadcast_Control_StopFailure"
                                  )
                                );
                            }),
                        }),
                        (0, M.RA)(e)
                      );
                    },
                  },
                  (0, x.Xx)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(m) && n.createElement("div", null, m)
              )
            )
          );
        });
      var ue = a(9915),
        ve = a(27991);
      let pe = (e) => `/broadcast/(watch|watchnew)/${e}`;
      function _e(e) {
        const [t, a] = n.useState(!0);
        return (
          (0, n.useEffect)(() => {
            t && ((0, ve.nf)(null), ue.cb.InitGlobal().then(() => a(!1)));
          }, [t]),
          t
            ? n.createElement(oe.V, {
                string: (0, x.Xx)("#Loading"),
                position: "center",
                size: "medium",
              })
            : n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  r.rs,
                  null,
                  n.createElement(r.AW, {
                    path: pe(":steamid_or_user_vanity"),
                    render: (e) =>
                      n.createElement(ce, {
                        strSteamID: e.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  n.createElement(r.AW, { component: o.R })
                )
              )
        );
      }
    },
  },
]);
