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
        o = (a(26149), a(49186), a(92398), a(3389)),
        s = (a(55546), a(5525)),
        l = a(7200);
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
              s = n[2],
              l = i.GetBBCodeParam(r, "steamid"),
              c = {
                steamID: l ? new o.K(l) : void 0,
                name: i.GetBBCodeParam(r, "name"),
                title: i.GetBBCodeParam(r, "title"),
                company: i.GetBBCodeParam(r, "company"),
                photo: i.GetBBCodeParam(r, "photo"),
                bio: s,
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
            const t = s.JW.GetTimeNowWithOverride(),
              a = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of a.rgCalendarItems)
              l.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const n = a.rgCalendarItems.map((e) =>
                l.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
        s = a(29323),
        l = a(13271),
        i = a(67294),
        c = a(26149),
        d = (a(92398), a(77442)),
        m = a(35921),
        u = a(39746),
        _ = a(49186),
        v = a(3389),
        p = (a(68002), a(24399)),
        E = a(76776),
        S = a(55546),
        h = a(9915),
        C = (a(7200), a(52114)),
        f = a(3044),
        I = a(23937),
        B = a(34133),
        g = a.n(B),
        b = a(75896),
        D = a(96602),
        y = a(65924),
        G = a(48780),
        A = a(7573),
        N = a(41311),
        T = a(90666),
        w = a(32548),
        O = a(13596),
        k = a(36567),
        x = a.n(k),
        M = a(67777),
        P = a(88335),
        R = a.n(P);
      const L = (0, s.Pi)((e) => {
        const {
            clanAccountID: t,
            gidAnnouncement: a,
            partnerEventStore: r,
            trackingLocation: s,
            bViewAllShowInfiniteScroll: l,
          } = e,
          c = v.K.InitFromClanID(t),
          d = (0, i.useRef)(null),
          [_, p] = (0, i.useState)(null),
          [S, C] = (0, i.useState)(!0),
          [B, b] = (0, i.useState)(!1);
        if (
          ((0, i.useEffect)(
            () => (
              (0, n.mG)(void 0, void 0, void 0, function* () {
                d.current && d.current("PartnerEventRow Initializng new mount");
                const e = o().CancelToken.source();
                d.current = e.cancel;
                const n = v.K.InitFromClanID(t);
                yield E.sV.LoadClanInfoForClanSteamID(n);
                let l = yield r.LoadAdjacentPartnerEventsByAnnouncement(
                  a,
                  n,
                  null,
                  4,
                  4,
                  void 0,
                  e
                );
                if (!e.token.reason) {
                  l = l || [];
                  let e = l
                    .filter((e) => e.GetAnnouncementGID() != a)
                    .map((e) => e.AnnouncementGID);
                  G.LQ(e);
                  const t = e
                    .slice(0, 3)
                    .map((e) => r.GetClanEventFromAnnouncementGID(e));
                  if ((p(t), C(!1), s)) {
                    let e = h.cb.Get().GetTracker(),
                      n = !1;
                    if (r.BHasClanAnnouncementGID(a)) {
                      let t = r.GetClanEventFromAnnouncementGID(a);
                      t &&
                        t.BIsPartnerEvent() &&
                        t.BIsVisibleEvent() &&
                        (e.MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          s
                        ),
                        (n = !0));
                    }
                    t.length > 0 &&
                      (l
                        .filter((e) => e.BIsPartnerEvent())
                        .forEach((t) =>
                          e.MarkEventShown(
                            t.GID,
                            t.clanSteamID.GetAccountID(),
                            s
                          )
                        ),
                      (n = !0)),
                      n && e.Flush();
                  }
                }
              }),
              () => {
                d.current && d.current("PartnerEventRow: unmounting");
              }
            ),
            [t, a, r, s]
          ),
          S)
        )
          return i.createElement(O.V, { position: "center", size: "medium" });
        if (0 == _.length) return i.createElement("div", null);
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
              l
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
                      eventModel: _[0],
                      route: I.Ue.k_eViewWebSiteHub,
                      className: g().EventSectionMoreBtn,
                    },
                    (0, N.Xx)("#EventBrowse_MoreEventsBtn")
                  )
            ),
            i.createElement(
              m.s,
              {
                className: x().OtherEvents,
                "flow-children": "column",
                navEntryPreferPosition: u.c4.PREFERRED_CHILD,
              },
              _.map((e) =>
                i.createElement(U, { key: e.AnnouncementGID, event: e })
              )
            ),
            Boolean(B) &&
              i.createElement(f.x, {
                appid: _[0].appid,
                clanSteamID: c,
                announcementGID: _[0].AnnouncementGID,
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
          [s, d, m, u, v, E, h, f] =
            ((0, y.bJ)(),
            (0, l.SZ)(() => {
              const e = r || (0, c.jM)(T.De.LANGUAGE),
                n = Boolean(void 0 !== a)
                  ? a
                  : t.GetImageURLWithFallback("capsule", e, p.FN.capsule_main);
              return [
                e,
                t.appid,
                n,
                t.GetNameWithFallback(e) || "",
                t.GetCategoryAsString(),
                t.GetSummaryWithFallback(e),
                (0, _.ax)(n),
                t.GetSubTitleWithLanguageFallback(e) || "",
              ];
            })),
          [B, g] = (0, C.vs)(d, {
            include_assets: !0,
            include_screenshots: !0,
          });
        if (!t)
          return i.createElement("div", {
            className: x().OtherEvents_EventCtn,
          });
        if (!B && d)
          return i.createElement(O.V, {
            size: "small",
            position: "center",
            string: (0, N.Xx)("#Loading"),
          });
        const b = (0, S.vY)().GetStoreInitializationTimestamp().getTime() / 1e3,
          G = t ? t.GetStartTimeAndDateUnixSeconds() : "";
        let w = f;
        return (
          f && (f.length > 30 || u.length > 30) && (w = void 0),
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
                i.createElement("div", { className: x().EventSummaryType }, v),
                i.createElement("div", { className: x().EventSummaryText }, E)
              ),
              i.createElement("div", {
                className: x().OtherEvents_BGImage,
                style: {
                  backgroundColor: "#ffffff",
                  backgroundImage: `url(${h})`,
                },
              }),
              i.createElement(
                "div",
                { className: x().OtherEvents_ContentCtn },
                i.createElement(
                  "div",
                  { className: x().OtherEvents_MainImageCtn },
                  i.createElement("img", {
                    src: m,
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
                  Boolean(G > b)
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
          [n] = (0, C.vs)(t, d.bk),
          r = (0, y.bJ)(),
          o = (0, T.id)();
        if (!n) return null;
        const s = n.GetBestPurchaseOption();
        return i.createElement(
          m.s,
          Object.assign(
            { className: (0, A.Z)(x().AppCapsuleCtn, "AppCapsuleCtn") },
            (0, b.h)(n, r, o)
          ),
          i.createElement(
            M.ll,
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
                  Boolean(null == s ? void 0 : s.discount_pct)
                    ? R().Discounted
                    : ""
                ),
              },
              Boolean(null == s ? void 0 : s.discount_pct) &&
                i.createElement(
                  "span",
                  { className: R().StoreSaleDiscountBox },
                  `-${null == s ? void 0 : s.discount_pct}%`
                ),
              Boolean(s.final_price_in_cents) &&
                i.createElement(
                  "span",
                  { className: R().StoreSalePriceBox },
                  s.formatted_final_price
                )
            )
        );
      }
      function H(e) {
        const { event: t, imageURLOverride: a, onClick: n } = e,
          r = (0, c.jM)(T.De.LANGUAGE),
          [o, s, d] = (0, l.SZ)(() =>
            t
              ? [
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        r,
                        p.FN.capsule_main
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
                    d
                  ),
                  i.createElement(D.H6, {
                    bSingleLine: !0,
                    dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                  })
                ),
                i.createElement("div", { className: x().HorizontalTitle }, s)
              )
            )
          : i.createElement("div", { className: x().OtherEvents_EventCtn });
      }
    },
    5265: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => Ee });
      a(69491);
      var n = a(67294),
        r = a(78587),
        o = a(92244),
        s = a(70655),
        l = a(9669),
        i = a.n(l),
        c = a(22188),
        d = (a(92398), a(3389)),
        m = a(52795),
        u = (a(82946), a(93976)),
        _ = a(90666);
      class v {
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            let t = _.De.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            let n =
                _.De.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: e,
                title: t,
                sessionid: _.De.SESSIONID,
              };
            try {
              let e = yield i().get(n, {
                params: r,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
              if (a && a.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success) {
                const e = m.c9.GetOrCreateBroadcastInfo(
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = m.c9.GetBroadcast(t);
            let n = _.De.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: _.De.SESSIONID,
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            const n = this.m_steamid.ConvertTo64BitString(),
              r = m.c9.GetBroadcast(n);
            let o =
                _.De.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              s = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                type: e,
                days: t,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              o,
              s,
              a
            );
          });
        }
        SetUnBannable(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = m.c9.GetBroadcast(t);
            let n = _.De.COMMUNITY_BASE_URL + "broadcast/unban",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: _.De.SESSIONID,
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = m.c9.GetBroadcast(t);
            let n = _.De.COMMUNITY_BASE_URL + "broadcast/report",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                description: e,
                sessionid: _.De.SESSIONID,
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
          return (0, s.mG)(this, void 0, void 0, function* () {
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
            v.s_Singleton || ((v.s_Singleton = new v()), v.s_Singleton.Init()),
            v.s_Singleton
          );
        }
        Init() {
          let e = (0, _.kQ)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_steamid = new d.K(e.steamid)),
            (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
        }
        ValidateStoreDefault(e) {
          return !(!e || "object" != typeof e) && "string" == typeof e.steamid;
        }
      }
      (0, s.gn)([c.LO], v.prototype, "m_curDebugInfo", void 0);
      var p = a(29323),
        E = a(85503),
        S = a(63405),
        h = a(17157),
        C = a.n(h),
        f = (a(69765), a(68002), a(28976)),
        I = a(76776),
        B = a(7200),
        g = a(48341),
        b = a(32548),
        D = a(70350),
        y = a(31933),
        G = a(34133),
        A = a.n(G),
        N = a(85732),
        T = a(37699),
        w = a(41414),
        O = a(7573),
        k = a(53622),
        x = a(41311),
        M = (a(26149), a(88254)),
        P = a(96602),
        R = a(47808),
        L = a(64393);
      const U = (e) => {
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
                { className: (0, O.Z)(L.Container) },
                n.createElement(
                  "div",
                  { className: L.Controls },
                  n.createElement(
                    g.zx,
                    {
                      onClick: () =>
                        (0, s.mG)(void 0, void 0, void 0, function* () {
                          t.current && t.current();
                          const e = i().CancelToken.source();
                          (t.current = e.cancel),
                            r(yield v.Get().LoadBroadcastDebugInfo(e));
                        }),
                    },
                    "(VO) Load Debug Info"
                  )
                ),
                n.createElement(b.S, null, n.createElement(F, { info: a }))
              )
            )
          );
        },
        F = (e) => {
          var t;
          const { info: a } = e,
            [r, o] = (0, n.useState)(!1);
          if (!a) return null;
          const s = v.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            l = m.c9.GetBroadcast(s);
          return n.createElement(
            "div",
            { className: L.DisplaySection },
            Boolean(a.last_error_result && 1 != a.last_error_result) &&
              n.createElement(
                "div",
                { className: L.SubSection },
                n.createElement("div", { className: L.Header }, "Error"),
                n.createElement(
                  "div",
                  null,
                  "EResult: ",
                  a.last_error_result,
                  ", occurred ",
                  a.last_error_time,
                  " - ",
                  n.createElement(P.H6, {
                    dateAndTime: a.last_error_time,
                    bSingleLine: !0,
                  })
                )
              ),
            n.createElement(
              "div",
              { className: L.SubSection },
              n.createElement(
                "div",
                { className: L.Header },
                "Broadcast Setup"
              ),
              n.createElement(
                "div",
                null,
                "Broadcaster: ",
                a.steam_id,
                ", SteamID: ",
                s
              ),
              n.createElement(
                "div",
                null,
                "Directory Server: ",
                a.directory_server,
                ", SessionID: ",
                a.broadcast_id
              ),
              n.createElement(
                "div",
                null,
                "Ingester Server: ",
                a.relay_server,
                ", UploadID: ",
                a.upload_id
              ),
              n.createElement("div", null, "Origin Server: ", a.origin_server),
              n.createElement(
                "div",
                null,
                "Chat Server: ",
                a.chat_server,
                ", chat_id: ",
                a.chat_id
              ),
              n.createElement(
                "div",
                null,
                "Transcoder Server : ",
                a.transcode_server
              )
            ),
            n.createElement(
              "div",
              { className: L.SubSection },
              n.createElement("div", { className: L.Header }, "Ingester Info"),
              n.createElement(
                "div",
                null,
                "Client: ",
                a.remote_address,
                " ",
                Boolean(a.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)"
              ),
              n.createElement(
                "div",
                null,
                "Video Config: ",
                a.upload_height,
                "x",
                a.upload_width,
                "@",
                a.upload_fps,
                ", ",
                a.upload_bandwidth,
                " kbps "
              ),
              n.createElement(
                "div",
                null,
                "Audio Config: ",
                a.upload_audio_channels,
                "x",
                a.upload_audio_samplerate,
                "Hz, ",
                a.upload_audio_bitrate / 1e3,
                " kbps "
              ),
              n.createElement(
                "div",
                null,
                "Upload Stats: ",
                a.upload_avg_fps,
                " FPS, ",
                a.upload_avg_bandwidth,
                " kbps, ",
                a.upload_avg_key_interval,
                " msec key frame interval"
              ),
              n.createElement(
                "div",
                null,
                "Upload Totals: ",
                a.upload_total_frames_received,
                " video frames,  ",
                Math.round(
                  (a.upload_current_video_pts - a.upload_first_video_pts) /
                    a.upload_video_timescale
                ),
                " seconds ( ",
                (0, R.l)(a.upload_total_bytes_uploaded || 0, 1),
                " ) "
              )
            ),
            Boolean(a.transcode_server) &&
              n.createElement(
                "div",
                { className: L.SubSection },
                n.createElement(
                  "div",
                  { className: L.Header },
                  "Transcoder Info"
                ),
                n.createElement(
                  "div",
                  null,
                  "Decoder ( ",
                  a.upload_height,
                  "x",
                  a.upload_width,
                  "@",
                  a.upload_fps,
                  ", ",
                  a.upload_bandwidth,
                  " kbps ) :  ",
                  a.transcoder_frames_to_decode,
                  " queued,  ",
                  a.transcoder_frames_total_decoded,
                  " decoded"
                ),
                a.transcoder_streams.map((e) =>
                  n.createElement(
                    "div",
                    { key: e.representation_id },
                    "Encoder ",
                    e.representation_id,
                    " ( ",
                    e.height,
                    "x",
                    e.width,
                    "@",
                    e.fps,
                    " ",
                    e.bitrate,
                    " kbps ) : ",
                    e.frames_to_encode,
                    " queued, ",
                    e.frames_total_encoded,
                    " encoded"
                  )
                )
              ),
            n.createElement(
              "div",
              { className: L.SubSection },
              n.createElement("div", { className: L.Header }, "Origin Info"),
              null === (t = null == a ? void 0 : a.origin_video_streams) ||
                void 0 === t
                ? void 0
                : t.map((e) =>
                    n.createElement(
                      "div",
                      { key: e.representation_id },
                      "Video Stream ",
                      e.representation_id,
                      " ( ",
                      e.height,
                      "x",
                      e.width,
                      "@",
                      e.fps,
                      " ",
                      e.bitrate,
                      " kbps ) :  ",
                      e.num_frames_queued,
                      " frames queued,  ",
                      e.num_segments_received,
                      " segments received,  ",
                      2 * e.num_segments_cached,
                      " seconds cached ( ",
                      (0, R.l)(e.memory_used, 2),
                      " )"
                    )
                  ),
              "Audio Stream ",
              a.origin_audio_stream.representation_id,
              " ( ",
              a.upload_audio_channels,
              "x",
              a.upload_audio_samplerate,
              "Hz, ",
              a.upload_audio_bitrate / 1e3,
              " kbps ) :  ",
              a.origin_audio_stream.num_frames_queued,
              " frames queued,  ",
              a.origin_audio_stream.num_segments_received,
              " segments received,  ",
              2 * a.origin_audio_stream.num_segments_cached,
              " seconds cached ( ",
              (0, R.l)(a.origin_audio_stream.memory_used, 2),
              " )"
            ),
            n.createElement(
              "div",
              { className: L.SubSection },
              n.createElement("div", { className: L.Header }, "Viewer Info"),
              n.createElement(
                "div",
                null,
                "Viewers: ",
                a.current_viewers,
                " current (",
                a.current_anon_viewers,
                " anonymous), ",
                a.total_unique_viewers,
                " total unique, ",
                a.max_concurrent_viewers,
                " max concurrent"
              ),
              n.createElement(
                "div",
                null,
                "Average time watched: ",
                a.average_watch_duration,
                " seconds"
              ),
              n.createElement(
                "div",
                null,
                "Last Minute: ",
                a.added_viewers_last_minute,
                " watch requests, ",
                a.rejected_viewers_last_minute,
                " rejected"
              ),
              n.createElement("div", null, "Restrictions: ", a.restriction),
              n.createElement("div", null, a.extra_viewer_info)
            ),
            n.createElement(
              "div",
              { className: L.SubSection },
              n.createElement("div", { className: L.Header }, "Settings"),
              n.createElement("div", null, "is replay? ", a.is_replay),
              n.createElement(
                "div",
                null,
                "is replay local file? ",
                a.is_replay_local_file
              ),
              n.createElement(
                "div",
                null,
                "is replay clip? ",
                a.is_replay_clip
              ),
              n.createElement(
                "div",
                null,
                "is capturing VOD? ",
                a.is_capturing_vod
              ),
              n.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                a.is_whitelisted
              )
            ),
            n.createElement(
              "div",
              { className: L.SubSection },
              n.createElement("div", { className: L.Header }, "App Info"),
              n.createElement("div", null, "appid: ", a.app_id),
              n.createElement("div", null, "app name: ", a.app_name),
              n.createElement("div", null, "broadcast title: ", a.title),
              n.createElement("div", null, "thumbnail: ", a.thumbnail_url),
              Boolean(a.thumbnail_url) &&
                n.createElement("img", { src: a.thumbnail_url }),
              Boolean(a.app_id && a.app_id > 0) &&
                n.createElement(
                  "div",
                  { className: L.AppSummaryWidgetCtn },
                  n.createElement(N.ju, { id: a.app_id, type: "game" })
                )
            ),
            n.createElement(
              "div",
              { className: L.SubSection },
              n.createElement(
                "div",
                { className: L.Header },
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
            n.createElement(g.zx, { onClick: () => o(!r) }, "Toggle Raw Data"),
            Boolean(r) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: L.SubSection },
                  n.createElement(M.G, { data: a })
                ),
                n.createElement(
                  "div",
                  { className: L.SubSection },
                  n.createElement(M.G, {
                    data: (null == l ? void 0 : l.m_data) || "",
                  })
                )
              )
          );
        };
      var H = a(63103),
        V = a(93981),
        z = a(44298),
        X = a(2388),
        W = a(83147);
      function q(e) {
        const t = X.y$.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          let a = new V.Pv(e);
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
        const [t, a] = (0, n.useState)(q(e.steamid)),
          [r, o] = (0, n.useState)(X.y$.GetProfileURLBySteamID(e.steamid)),
          [l, i] = (0, n.useState)(X.y$.GetPersonaNameBySteamID(e.steamid));
        return (
          (0, n.useEffect)(() => {
            if (!t) {
              (() =>
                (0, s.mG)(void 0, void 0, void 0, function* () {
                  yield X.y$.LoadProfiles([e.steamid.ConvertTo64BitString()]),
                    a(q(e.steamid)),
                    o(X.y$.GetProfileURLBySteamID(e.steamid)),
                    i(X.y$.GetPersonaNameBySteamID(e.steamid));
                }))();
            }
          }, [e.steamid, t]),
          n.createElement(
            "div",
            { className: W.AvatarCtn },
            n.createElement(
              "a",
              {
                href: r,
                "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
              },
              n.createElement(z.vV, {
                persona: t,
                size: e.size,
                statusPosition: "bottom",
              })
            ),
            n.createElement(
              "div",
              { className: W.NameAndProps },
              Boolean(e.bShowName) &&
                n.createElement(
                  "a",
                  {
                    href: r,
                    "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                  },
                  l
                ),
              e.children
            )
          )
        );
      };
      var Z = a(13271),
        j = a(52114),
        Y = a(23211),
        $ = a(95598),
        Q = a(72258),
        J = a(35092),
        ee = a(87266);
      function te(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [r, o] = (0, Z.SZ)(() => {
            const e = m.c9.GetOrCreateBroadcastInfo(a);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [s] = (0, j.vs)(o, { include_assets: !0 });
        let l = null == s ? void 0 : s.GetAssets().GetMainCapsuleURL(),
          i = l && l.length > 0;
        return n.createElement(
          b.S,
          null,
          n.createElement(
            "div",
            { className: ee.ProfileCtn },
            i &&
              n.createElement(
                "a",
                {
                  className: ee.GameCapsule,
                  href: (0, J.OL)(
                    (null == s ? void 0 : s.GetStorePageURL()) ||
                      _.De.STORE_BASE_URL + "app/" + o
                  ),
                },
                n.createElement("img", { src: l })
              ),
            n.createElement(
              "div",
              { className: ee.StreamDetailsCtn },
              n.createElement(
                "div",
                { className: ee.GameAndOptionsCtn },
                n.createElement(
                  "div",
                  { className: ee.GameAndViewersCtn },
                  n.createElement(ae, { broadcasterSteamID: t }),
                  n.createElement(
                    "div",
                    { className: ee.ViewerCount },
                    (0, x.kb)("#Broadcast_ViewerCount", r.toLocaleString())
                  )
                ),
                n.createElement(ne, { broadcasterSteamID: t })
              ),
              n.createElement(K, { steamid: t, size: "Medium", bShowName: !0 })
            )
          )
        );
      }
      const ae = (0, p.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [r, o] = (0, Z.SZ)(() => {
              const e = m.c9.GetOrCreateBroadcastInfo(a);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [s] = (0, j.vs)(o, { include_assets: !0 });
          return n.createElement(
            "div",
            { className: ee.BroadcastTitleCtn },
            (0, x.Xx)("#Broadcast_Playing"),
            n.createElement(
              "a",
              {
                href: (0, J.OL)(
                  (null == s ? void 0 : s.GetStorePageURL()) ||
                    _.De.STORE_BASE_URL + "app/" + o
                ),
              },
              Boolean(r) ? r : null == s ? void 0 : s.GetName()
            ),
            Boolean((null == r ? void 0 : r.length) > 0) &&
              n.createElement("span", null, " - ", r)
          );
        }),
        ne = (0, p.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString();
          m.c9.GetOrCreateBroadcastInfo(a);
          return n.createElement(
            "div",
            { className: ee.BroadcastUserActionsCtn },
            Boolean(
              _.L7.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              n.createElement(
                g.zx,
                {
                  "data-tooltip-text": (0, x.Xx)("#Broadcast_User_Report_ttip"),
                  onClick: (e) => {
                    _.L7.logged_in
                      ? (0, w.AM)(
                          n.createElement(re, { broadcasterSteamID: t }),
                          (0, k.RA)(e)
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
                            onOK: () => (0, Y.X)(),
                          }),
                          (0, k.RA)(e)
                        );
                  },
                },
                n.createElement($.WNf, null)
              ),
            n.createElement(
              g.zx,
              {
                "data-tooltip-text": (0, x.Xx)("#Broadcast_User_FAQ_ttip"),
                onClick: (e) =>
                  (0, Q.b8)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  ),
              },
              n.createElement($.daM, null)
            )
          );
        }),
        re = (e) => {
          const [t, a] = (0, n.useState)("");
          return n.createElement(
            T.uH,
            {
              strTitle: (0, x.Xx)("#Broadcast_ReportItem_Title"),
              strDescription: (0, x.Xx)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: () =>
                (0, s.mG)(void 0, void 0, void 0, function* () {
                  yield v.Get().SendUserReportOnBroadcast(t),
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
      var oe = a(96584),
        se = a(13596);
      const le = (e) => {
          if (!_.L7.is_support) return null;
          const t = (t, a) => {
              (0, w.AM)(
                n.createElement(ie, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                (0, k.RA)(t)
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return n.createElement(
            "div",
            { className: (0, O.Z)(oe.AdminControls, A().ValveOnlyBackground) },
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
                    n.createElement(ce, { steamid: e.broadcastSteamID }),
                    (0, k.RA)(t)
                  );
                },
              },
              "Make Unbannable"
            ),
            n.createElement(
              g.zx,
              { onClick: (e) => (0, Q.b8)(e, a) },
              "Go to Support Page"
            )
          );
        },
        ie = (0, p.Pi)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [r, o] = (0, n.useState)(1),
            [l, c] = (0, n.useState)(!1),
            [d, m] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(!1),
            p = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              p.current && p.current("BroadcastConfirmBanAction: unmounting");
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
                      Boolean(l) && n.createElement(se.V, null),
                      Boolean(d) &&
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
                  d
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
                              (0, s.mG)(void 0, void 0, void 0, function* () {
                                c(!0);
                                try {
                                  p.current && p.current();
                                  const e = i().CancelToken.source();
                                  p.current = e.cancel;
                                  let t = yield v
                                    .Get()
                                    .SetBroadcasterRestrictions(a, r, e);
                                  e.token.reason || (t = !0);
                                } finally {
                                  c(!1), m(!0), _(t);
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
        ce = (e) => {
          const [t, a] = (0, n.useState)(!1),
            [r, o] = (0, n.useState)(!1),
            [l, c] = (0, n.useState)(!1),
            d = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              d.current && d.current("BroadcastMakeUnbannable: unmounting");
            },
            []
          );
          const m = () => e.closeModal && e.closeModal();
          return n.createElement(
            b.S,
            null,
            n.createElement(
              T.e1,
              { onEscKeypress: m },
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
                      Boolean(t) && n.createElement(se.V, null),
                      Boolean(r) &&
                        n.createElement(
                          "div",
                          null,
                          l
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
                        { onClick: m },
                        (0, x.Xx)("#Button_Dismiss")
                      )
                    : n.createElement(
                        g.Uq,
                        null,
                        n.createElement(
                          g.zx,
                          { onClick: m },
                          (0, x.Xx)("#Button_Cancel")
                        ),
                        n.createElement(
                          g.KM,
                          {
                            onClick: () =>
                              (0, s.mG)(void 0, void 0, void 0, function* () {
                                a(!0);
                                let e = !1;
                                try {
                                  d.current && d.current();
                                  const t = i().CancelToken.source();
                                  (d.current = t.cancel),
                                    (e = yield v.Get().SetUnBannable(t));
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
        de = (0, p.Pi)((e) => {
          const t = v.Get().GetBroadcasterSteamID(),
            a = t.ConvertTo64BitString(),
            [r, o] = (0, y.Ar)("muted", !0),
            s = m.c9.GetBroadcast(a),
            l = m.c9.GetOrCreateBroadcastInfo(a);
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              "div",
              { className: (0, O.Z)(H.BroadcastPage) },
              n.createElement(
                "div",
                { className: (0, O.Z)(C().BroadcastAndChat) },
                Boolean(!v.Get().BShowOnlyChat()) &&
                  n.createElement(
                    b.S,
                    null,
                    n.createElement(
                      "div",
                      { className: (0, O.Z)(C().wrapper) },
                      n.createElement(
                        "div",
                        {
                          className: (0, O.Z)({
                            [C().video_placeholder]: !0,
                            video_placeholder_trgt: !0,
                            [C().NoChat]: v.Get().BShowOnlyVideo(),
                          }),
                        },
                        n.createElement(
                          "div",
                          { className: C().BroadcastPlayerContainer },
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
                Boolean(!v.Get().BShowOnlyVideo()) &&
                  n.createElement(
                    "div",
                    { className: C().detail_chat_ctn },
                    n.createElement(
                      "div",
                      { className: C().ChatContainer },
                      n.createElement(
                        b.S,
                        null,
                        n.createElement(E.c, {
                          emoticonStore: f.D$,
                          watchLocation: 6,
                          steamID: a,
                          broadcastID: s ? s.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
              ),
              Boolean(!v.Get().BShowInIframe()) &&
                n.createElement(me, { broadcasterSteamID: t, broadcastInfo: l })
            )
          );
        }),
        me = (0, p.Pi)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [r, o] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(() => {
              (0, s.mG)(void 0, void 0, void 0, function* () {
                let e = yield I.sV.LoadOGGClanInfoForAppID(
                  Number.parseInt(a.m_strAppId)
                );
                o(e);
              });
            }, [a.m_strAppId]),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(te, { broadcasterSteamID: t }),
              n.createElement(ue, { steamid: t }),
              Boolean(_.L7.is_support) &&
                n.createElement(
                  "div",
                  null,
                  n.createElement(le, { broadcastSteamID: t }),
                  n.createElement(
                    "div",
                    {
                      className: (0, O.Z)(A().ValveOnlyBackground, H.DebugCtn),
                    },
                    n.createElement(U, null)
                  )
                ),
              Boolean(a.m_strAppId && Number.parseInt(a.m_strAppId) > 7) &&
                n.createElement(
                  "div",
                  { className: H.GameInfoCtn },
                  n.createElement(
                    "div",
                    { className: H.GameAboutTitleCtn },
                    n.createElement(
                      "div",
                      { className: H.GameAboutTitle },
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
                    { className: H.GameInfo },
                    n.createElement(N.ju, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    })
                  )
                ),
              Boolean(r) &&
                n.createElement(
                  "div",
                  { className: H.RelatedEvents },
                  n.createElement(D._G, {
                    clanAccountID: r.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: B.j1,
                    bViewAllShowInfiniteScroll: !0,
                  })
                )
            )
          );
        }),
        ue = (0, p.Pi)((e) => {
          const t = (0, n.useRef)(null);
          let a = m.c9.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString()
          );
          const [r, o] = (0, n.useState)(a.m_strTitle),
            [l, c] = (0, n.useState)(""),
            [d, u] = (0, n.useState)(null);
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
            _.L7.accountid != e.steamid.GetAccountID())
          )
            return null;
          return n.createElement(
            "div",
            { className: H.ControlCtn },
            n.createElement(
              "div",
              { className: H.ControlsTitle },
              (0, x.Xx)("#Broadcaster_Control_title")
            ),
            n.createElement(
              "div",
              { className: H.TitleInput },
              n.createElement(
                "div",
                { className: H.Options },
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
                  value: l,
                }),
                n.createElement(
                  g.zx,
                  {
                    onClick: () =>
                      (0, s.mG)(void 0, void 0, void 0, function* () {
                        t.current && t.current();
                        const e = i().CancelToken.source();
                        t.current = e.cancel;
                        let a = yield v.Get().UpdateBroadcastSettings(l, r, e);
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
                { className: H.StopCtn },
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
                            (0, s.mG)(void 0, void 0, void 0, function* () {
                              t.current && t.current();
                              const e = i().CancelToken.source();
                              t.current = e.cancel;
                              let a = yield v.Get().StopBroadcast(e);
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
                        (0, k.RA)(e)
                      );
                    },
                  },
                  (0, x.Xx)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(d) && n.createElement("div", null, d)
              )
            )
          );
        });
      var _e = a(9915),
        ve = a(27991);
      let pe = (e) => `/broadcast/(watch|watchnew)/${e}`;
      function Ee(e) {
        const [t, a] = n.useState(!0);
        return (
          (0, n.useEffect)(() => {
            t && ((0, ve.nf)(null), _e.cb.InitGlobal().then(() => a(!1)));
          }, [t]),
          t
            ? n.createElement(se.V, {
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
                      n.createElement(de, {
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
