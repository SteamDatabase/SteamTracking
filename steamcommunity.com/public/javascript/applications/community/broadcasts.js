/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5436],
  {
    71: (e) => {
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
    61386: (e) => {
      e.exports = {
        SubSection: "broadcastdebug_SubSection_3Ac4z",
        Header: "broadcastdebug_Header_2vrXB",
        AppSummaryWidgetCtn: "broadcastdebug_AppSummaryWidgetCtn_35ozI",
      };
    },
    59797: (e) => {
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
    97477: (e) => {
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
    37231: (e) => {
      e.exports = { AdminControls: "broadcastsupport_AdminControls_3KL0b" };
    },
    99230: (e) => {
      e.exports = {
        AvatarCtn: "communityavatar_AvatarCtn_3n3n0",
        NameAndProps: "communityavatar_NameAndProps_3Pljh",
      };
    },
    49234: (e, t, a) => {
      "use strict";
      a.d(t, { KE: () => F, T4: () => H, _G: () => P, zY: () => z });
      var n = a(33940),
        r = a(52868),
        o = a.n(r),
        l = a(88464),
        s = a(25125),
        i = a(89526),
        c = a(46132),
        d = a(62983),
        m = a(51438),
        u = a(16221),
        _ = a(81245),
        v = a(47165),
        p = a(1063),
        E = a(82079),
        S = a(62505),
        C = a(56368),
        h = a(25871),
        b = a(1275),
        g = a(20790),
        f = a(52629),
        B = a.n(f),
        I = a(87539),
        y = a(21904),
        G = a(71161),
        D = a(11837),
        A = a(19304),
        N = a(14826),
        w = a(32765),
        T = a(17547),
        O = a(3301),
        k = a(71),
        x = a.n(k),
        M = a(51441),
        R = a(1631),
        U = a.n(R),
        L = a(701);
      const P = (0, l.Pi)((e) => {
          const {
              clanAccountID: t,
              gidAnnouncement: a,
              partnerEventStore: r,
              trackingLocation: l,
              bViewAllShowInfiniteScroll: s,
            } = e,
            c = v.K.InitFromClanID(t),
            d = (0, i.useRef)(null),
            [_, p] = (0, i.useState)(null),
            [S, h] = (0, i.useState)(!0),
            [f, I] = (0, i.useState)(!1);
          if (
            ((0, i.useEffect)(
              () => (
                (0, n.mG)(void 0, void 0, void 0, function* () {
                  d.current &&
                    d.current("PartnerEventRow Initializng new mount");
                  const e = o().CancelToken.source();
                  d.current = e.cancel;
                  const n = v.K.InitFromClanID(t);
                  yield E.sV.LoadClanInfoForClanSteamID(n);
                  let s = yield r.LoadAdjacentPartnerEventsByAnnouncement(
                    a,
                    n,
                    null,
                    4,
                    4,
                    void 0,
                    e,
                  );
                  if (!e.token.reason) {
                    s = s || [];
                    let e = s
                      .filter((e) => e.GetAnnouncementGID() != a)
                      .map((e) => e.AnnouncementGID);
                    D.LQ(e);
                    const t = e
                      .slice(0, 3)
                      .map((e) => r.GetClanEventFromAnnouncementGID(e));
                    if ((p(t), h(!1), l)) {
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
                            l,
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
                              l,
                            ),
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
              [t, a, r, l],
            ),
            S)
          )
            return i.createElement(O.V, { position: "center", size: "medium" });
          if (0 == _.length) return i.createElement("div", null);
          const y = E.sV.GetClanInfoByClanAccountID(t);
          return i.createElement(
            T.SV,
            null,
            i.createElement(
              "div",
              { className: (0, A.Z)(x().OtherEventsCtn, "OtherEventsCtn") },
              i.createElement(
                "div",
                { className: B().EventSectionTitleCtn },
                i.createElement(
                  "div",
                  {
                    className: (0, A.Z)(
                      B().EventSectionTitle,
                      "EventSectionTitle",
                    ),
                  },
                  (0, N.kQ)("#EventBrowse_MoreEventsTitle", y.group_name),
                  " ",
                ),
                i.createElement(
                  "div",
                  { className: B().EventSectionSpacer },
                  " ",
                ),
                s
                  ? i.createElement(
                      "div",
                      {
                        className: B().EventSectionMoreBtn,
                        onClick: () => I(!0),
                      },
                      (0, N.Xx)("#EventBrowse_MoreEventsBtn"),
                    )
                  : i.createElement(
                      g.JW,
                      {
                        eventModel: _[0],
                        route: g.Ue.k_eViewWebSiteHub,
                        className: B().EventSectionMoreBtn,
                      },
                      (0, N.Xx)("#EventBrowse_MoreEventsBtn"),
                    ),
              ),
              i.createElement(
                m.s,
                {
                  className: x().OtherEvents,
                  "flow-children": "column",
                  navEntryPreferPosition: u.c4.PREFERRED_CHILD,
                },
                _.map((e) =>
                  i.createElement(H, { key: e.AnnouncementGID, event: e }),
                ),
              ),
              Boolean(f) &&
                i.createElement(b.x, {
                  appid: _[0].appid,
                  clanSteamID: c,
                  announcementGID: _[0].AnnouncementGID,
                  closeModal: () => I(!1),
                  partnerEventStore: r,
                }),
            ),
          );
        }),
        V = 30;
      function H(e) {
        const {
            event: t,
            imageURLOverride: a,
            bShowAssociatedApp: n,
            langOverride: r,
            onClick: o,
          } = e,
          [l, d, m, u, v, E, C, b] =
            ((0, G.bJ)(),
            (0, s.SZ)(() => {
              const e = r || (0, c.jM)(w.De.LANGUAGE),
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
          [f, B] = (0, h.vs)(d, {
            include_assets: !0,
            include_screenshots: !0,
          });
        if (!t)
          return i.createElement("div", {
            className: x().OtherEvents_EventCtn,
          });
        if (!f && d)
          return i.createElement(O.V, {
            size: "small",
            position: "center",
            string: (0, N.Xx)("#Loading"),
          });
        const I = (0, S.vY)().GetStoreInitializationTimestamp().getTime() / 1e3,
          D = t ? t.GetStartTimeAndDateUnixSeconds() : 0;
        let T = b;
        return (
          b && (b.length > V || u.length > V) && (T = void 0),
          i.createElement(
            i.Fragment,
            null,
            i.createElement(
              g.JW,
              {
                className: (0, A.Z)(
                  x().OtherEvents_EventCtn,
                  x().HoversEnabled,
                ),
                eventModel: t,
                route: g.Ue.k_eView,
                onClick: o,
                preferredFocus: !0,
              },
              i.createElement(
                "div",
                { className: x().EventSummaryContainer },
                i.createElement("div", { className: x().EventSummaryType }, v),
                i.createElement("div", { className: x().EventSummaryText }, E),
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
                    src: m,
                    className: x().OtherEvents_MainImage,
                  }),
                ),
                i.createElement(
                  "div",
                  { className: x().OtherEvents_TextCtn },
                  i.createElement(
                    "div",
                    { className: x().OtherEvents_TextTitle },
                    u,
                  ),
                  Boolean(T) &&
                    i.createElement(
                      "div",
                      { className: x().OtherEvents_SubTitle },
                      T,
                    ),
                  Boolean(D > I)
                    ? i.createElement(
                        "div",
                        { className: x().UpcomingCtn },
                        i.createElement(y.H6, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                        }),
                      )
                    : i.createElement(y.H6, {
                        bSingleLine: !0,
                        bOnlyDate: !0,
                        dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                      }),
                ),
              ),
            ),
            Boolean(n && t.appid) && i.createElement(z, { appid: t.appid }),
          )
        );
      }
      function z(e) {
        const { appid: t, bHidePrice: a } = e,
          [n] = (0, h.vs)(t, d.bk),
          r = (0, G.bJ)(),
          o = (0, w.id)();
        if (!n) return null;
        const l = n.GetBestPurchaseOption(),
          s = (null == l ? void 0 : l.hide_discount_pct_for_compliance) && !0;
        return i.createElement(
          m.s,
          Object.assign(
            { className: (0, A.Z)(x().AppCapsuleCtn, "AppCapsuleCtn") },
            (0, I.h)(n, r, o),
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
            }),
          ),
          Boolean(!a && !n.BIsFree()) &&
            i.createElement(
              "span",
              {
                className: (0, A.Z)(
                  x().AppCapsulePrice,
                  Boolean(null == l ? void 0 : l.discount_pct)
                    ? U().Discounted
                    : "",
                ),
              },
              Boolean((null == l ? void 0 : l.discount_pct) && s) &&
                i.createElement(
                  "div",
                  { className: U().DiscountIconCtn },
                  i.createElement(L.dCe, null),
                ),
              Boolean((null == l ? void 0 : l.discount_pct) && !s) &&
                i.createElement(
                  "span",
                  { className: U().StoreSaleDiscountBox },
                  `-${null == l ? void 0 : l.discount_pct}%`,
                ),
              Boolean(l.final_price_in_cents) &&
                i.createElement(
                  "span",
                  { className: U().StoreSalePriceBox },
                  l.formatted_final_price,
                ),
            ),
        );
      }
      function F(e) {
        const { event: t, imageURLOverride: a, onClick: n } = e,
          r = (0, c.jM)(w.De.LANGUAGE),
          [o, l, d] = (0, s.SZ)(() =>
            t
              ? [
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        r,
                        p.FN.capsule_main,
                      ),
                  t.GetNameWithFallback(r),
                  t.GetCategoryAsString(),
                ]
              : [void 0, void 0, void 0],
          );
        return t
          ? i.createElement(
              g.JW,
              {
                className: x().OtherEvents_EventCtn + " " + x().HorizontalEvent,
                eventModel: t,
                route: g.Ue.k_eView,
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
                  }),
                ),
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
                    d,
                  ),
                  i.createElement(y.H6, {
                    bSingleLine: !0,
                    dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                  }),
                ),
                i.createElement("div", { className: x().HorizontalTitle }, l),
              ),
            )
          : i.createElement("div", { className: x().OtherEvents_EventCtn });
      }
    },
    25911: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => pe });
      a(35266);
      var n = a(89526),
        r = a(59934),
        o = a(71209),
        l = a(33940),
        s = a(52868),
        i = a.n(s),
        c = a(50265),
        d = a(47165),
        m = a(45475),
        u = a(23217),
        _ = a(32765);
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
          return (0, l.mG)(this, void 0, void 0, function* () {
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
                t,
              );
            }
            return null;
          });
        }
        UpdateBroadcastSettings(e, t, a) {
          return (0, l.mG)(this, void 0, void 0, function* () {
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
                  this.m_steamid.ConvertTo64BitString(),
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
                t,
              );
            }
            return !1;
          });
        }
        StopBroadcast(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
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
              e,
            );
          });
        }
        SetBroadcasterRestrictions(e, t, a) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const n = this.m_steamid.ConvertTo64BitString(),
              r = m.c9.GetBroadcast(n);
            let o =
                _.De.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              l = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                type: e,
                days: t,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              o,
              l,
              a,
            );
          });
        }
        SetUnBannable(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
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
              e,
            );
          });
        }
        SendUserReportOnBroadcast(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
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
              null,
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
                a,
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
      (0, l.gn)([c.LO], v.prototype, "m_curDebugInfo", void 0);
      var p = a(88464),
        E = a(55844),
        S = a(28388),
        C = a(29291),
        h = a.n(C),
        b = a(98889),
        g = a(82079),
        f = a(10412),
        B = a(57605),
        I = a(17547),
        y = a(49234),
        G = a(5029),
        D = a(52629),
        A = a.n(D),
        N = a(44421),
        w = a(99307),
        T = a(57742),
        O = a(19304),
        k = a(60161),
        x = a(14826),
        M = a(82988),
        R = a(21904),
        U = a(88443),
        L = a(61386);
      const P = (e) => {
          const t = (0, n.useRef)(null),
            [a, r] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(
              () => () => {
                t.current && t.current("BroadcastDebugSection: unmounting");
              },
              [],
            ),
            n.createElement(
              I.SV,
              null,
              n.createElement(
                "div",
                { className: (0, O.Z)(L.Container) },
                n.createElement(
                  "div",
                  { className: L.Controls },
                  n.createElement(
                    B.zx,
                    {
                      onClick: () =>
                        (0, l.mG)(void 0, void 0, void 0, function* () {
                          t.current && t.current();
                          const e = i().CancelToken.source();
                          (t.current = e.cancel),
                            r(yield v.Get().LoadBroadcastDebugInfo(e));
                        }),
                    },
                    "(VO) Load Debug Info",
                  ),
                ),
                n.createElement(I.SV, null, n.createElement(V, { info: a })),
              ),
            )
          );
        },
        V = (e) => {
          var t;
          const { info: a } = e,
            [r, o] = (0, n.useState)(!1);
          if (!a) return null;
          const l = v.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            s = m.c9.GetBroadcast(l);
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
                  n.createElement(R.H6, {
                    dateAndTime: a.last_error_time,
                    bSingleLine: !0,
                  }),
                ),
              ),
            n.createElement(
              "div",
              { className: L.SubSection },
              n.createElement(
                "div",
                { className: L.Header },
                "Broadcast Setup",
              ),
              n.createElement(
                "div",
                null,
                "Broadcaster: ",
                a.steam_id,
                ", SteamID: ",
                l,
              ),
              n.createElement(
                "div",
                null,
                "Directory Server: ",
                a.directory_server,
                ", SessionID: ",
                a.broadcast_id,
              ),
              n.createElement(
                "div",
                null,
                "Ingester Server: ",
                a.relay_server,
                ", UploadID: ",
                a.upload_id,
              ),
              n.createElement("div", null, "Origin Server: ", a.origin_server),
              n.createElement(
                "div",
                null,
                "Chat Server: ",
                a.chat_server,
                ", chat_id: ",
                a.chat_id,
              ),
              n.createElement(
                "div",
                null,
                "Transcoder Server : ",
                a.transcode_server,
              ),
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
                Boolean(a.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)",
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
                " kbps ",
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
                " kbps ",
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
                " msec key frame interval",
              ),
              n.createElement(
                "div",
                null,
                "Upload Totals: ",
                a.upload_total_frames_received,
                " video frames,  ",
                Math.round(
                  (a.upload_current_video_pts - a.upload_first_video_pts) /
                    a.upload_video_timescale,
                ),
                " seconds ( ",
                (0, U.l)(a.upload_total_bytes_uploaded || 0, 1),
                " ) ",
              ),
            ),
            Boolean(a.transcode_server) &&
              n.createElement(
                "div",
                { className: L.SubSection },
                n.createElement(
                  "div",
                  { className: L.Header },
                  "Transcoder Info",
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
                  " decoded",
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
                    " encoded",
                  ),
                ),
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
                      (0, U.l)(e.memory_used, 2),
                      " )",
                    ),
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
              (0, U.l)(a.origin_audio_stream.memory_used, 2),
              " )",
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
                " max concurrent",
              ),
              n.createElement(
                "div",
                null,
                "Average time watched: ",
                a.average_watch_duration,
                " seconds",
              ),
              n.createElement(
                "div",
                null,
                "Last Minute: ",
                a.added_viewers_last_minute,
                " watch requests, ",
                a.rejected_viewers_last_minute,
                " rejected",
              ),
              n.createElement("div", null, "Restrictions: ", a.restriction),
              n.createElement("div", null, a.extra_viewer_info),
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
                a.is_replay_local_file,
              ),
              n.createElement(
                "div",
                null,
                "is replay clip? ",
                a.is_replay_clip,
              ),
              n.createElement(
                "div",
                null,
                "is capturing VOD? ",
                a.is_capturing_vod,
              ),
              n.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                a.is_whitelisted,
              ),
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
                  n.createElement(N.ju, { id: a.app_id, type: "game" }),
                ),
            ),
            n.createElement(
              "div",
              { className: L.SubSection },
              n.createElement(
                "div",
                { className: L.Header },
                "Manifest Information",
              ),
              n.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                s.m_data.heartbeat_interval,
              ),
              n.createElement("div", null, "DASH MPEG Url: ", s.m_data.url),
              n.createElement("div", null, "HLS Url: ", s.m_data.hls_url),
            ),
            n.createElement(B.zx, { onClick: () => o(!r) }, "Toggle Raw Data"),
            Boolean(r) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: L.SubSection },
                  n.createElement(M.G, { data: a }),
                ),
                n.createElement(
                  "div",
                  { className: L.SubSection },
                  n.createElement(M.G, {
                    data: (null == s ? void 0 : s.m_data) || "",
                  }),
                ),
              ),
          );
        };
      var H = a(59797),
        z = a(11301),
        F = a(68943),
        X = a(24448),
        W = a(99230);
      function Z(e) {
        const t = X.y$.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          let a = new z.Pv(e);
          return (
            (a.m_strPlayerName = t.persona_name),
            (a.m_strAvatarHash = t.avatar_hash),
            (a.m_ePersonaState = t.persona_state),
            a
          );
        }
        return null;
      }
      const q = (e) => {
        e.steamid.GetAccountID();
        const [t, a] = (0, n.useState)(Z(e.steamid)),
          [r, o] = (0, n.useState)(X.y$.GetProfileURLBySteamID(e.steamid)),
          [s, i] = (0, n.useState)(X.y$.GetPersonaNameBySteamID(e.steamid));
        return (
          (0, n.useEffect)(() => {
            if (!t) {
              (() =>
                (0, l.mG)(void 0, void 0, void 0, function* () {
                  yield X.y$.LoadProfiles([e.steamid.ConvertTo64BitString()]),
                    a(Z(e.steamid)),
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
              n.createElement(F.vV, {
                persona: t,
                size: e.size,
                statusPosition: "bottom",
              }),
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
                  s,
                ),
              e.children,
            ),
          )
        );
      };
      var K = a(25125),
        Y = a(25871),
        j = a(32905),
        $ = a(701),
        Q = a(75962),
        J = a(207),
        ee = a(97477);
      function te(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [r, o] = (0, K.SZ)(() => {
            const e = m.c9.GetOrCreateBroadcastInfo(a);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [l] = (0, Y.vs)(o, { include_assets: !0 });
        let s = null == l ? void 0 : l.GetAssets().GetMainCapsuleURL(),
          i = s && s.length > 0;
        return n.createElement(
          I.SV,
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
                    (null == l ? void 0 : l.GetStorePageURL()) ||
                      _.De.STORE_BASE_URL + "app/" + o,
                  ),
                },
                n.createElement("img", { src: s }),
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
                    (0, x.kb)("#Broadcast_ViewerCount", r.toLocaleString()),
                  ),
                ),
                n.createElement(ne, { broadcasterSteamID: t }),
              ),
              n.createElement(q, { steamid: t, size: "Medium", bShowName: !0 }),
            ),
          ),
        );
      }
      const ae = (0, p.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [r, o] = (0, K.SZ)(() => {
              const e = m.c9.GetOrCreateBroadcastInfo(a);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [l] = (0, Y.vs)(o, { include_assets: !0 });
          return n.createElement(
            "div",
            { className: ee.BroadcastTitleCtn },
            (0, x.Xx)("#Broadcast_Playing"),
            n.createElement(
              "a",
              {
                href: (0, J.OL)(
                  (null == l ? void 0 : l.GetStorePageURL()) ||
                    _.De.STORE_BASE_URL + "app/" + o,
                ),
              },
              Boolean(r) ? r : null == l ? void 0 : l.GetName(),
            ),
            Boolean((null == r ? void 0 : r.length) > 0) &&
              n.createElement("span", null, " - ", r),
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
              _.L7.steamid != e.broadcasterSteamID.ConvertTo64BitString(),
            ) &&
              n.createElement(
                B.zx,
                {
                  "data-tooltip-text": (0, x.Xx)("#Broadcast_User_Report_ttip"),
                  onClick: (e) => {
                    _.L7.logged_in
                      ? (0, T.AM)(
                          n.createElement(re, { broadcasterSteamID: t }),
                          (0, k.RA)(e),
                        )
                      : (0, T.AM)(
                          n.createElement(w.uH, {
                            strTitle: (0, x.Xx)(
                              "#EventDisplay_Share_NotLoggedIn",
                            ),
                            strDescription: (0, x.Xx)(
                              "#EventDisplay_Share_NotLoggedIn_Description",
                            ),
                            strOKButtonText: (0, x.Xx)("#MobileLogin_SignIn"),
                            onOK: () => (0, j.X)(),
                          }),
                          (0, k.RA)(e),
                        );
                  },
                },
                n.createElement($.WNf, null),
              ),
            n.createElement(
              B.zx,
              {
                "data-tooltip-text": (0, x.Xx)("#Broadcast_User_FAQ_ttip"),
                onClick: (e) =>
                  (0, Q.b8)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497",
                  ),
              },
              n.createElement($.daM, null),
            ),
          );
        }),
        re = (e) => {
          const [t, a] = (0, n.useState)("");
          return n.createElement(
            w.uH,
            {
              strTitle: (0, x.Xx)("#Broadcast_ReportItem_Title"),
              strDescription: (0, x.Xx)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: () =>
                (0, l.mG)(void 0, void 0, void 0, function* () {
                  yield v.Get().SendUserReportOnBroadcast(t),
                    e.closeModal && e.closeModal();
                }),
            },
            n.createElement("textarea", {
              value: t,
              onChange: (e) => a(e.currentTarget.value),
              rows: 10,
              cols: 80,
            }),
          );
        };
      var oe = a(37231),
        le = a(3301);
      const se = (e) => {
          if (!_.L7.is_support) return null;
          const t = (t, a) => {
              (0, T.AM)(
                n.createElement(ie, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                (0, k.RA)(t),
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
              B.zx,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page",
            ),
            n.createElement(
              B.zx,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting",
            ),
            n.createElement(
              B.zx,
              {
                onClick: (t) => {
                  (0, T.AM)(
                    n.createElement(ce, { steamid: e.broadcastSteamID }),
                    (0, k.RA)(t),
                  );
                },
              },
              "Make Unbannable",
            ),
            n.createElement(
              B.zx,
              { onClick: (e) => (0, Q.b8)(e, a) },
              "Go to Support Page",
            ),
          );
        },
        ie = (0, p.Pi)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [r, o] = (0, n.useState)(1),
            [s, c] = (0, n.useState)(!1),
            [d, m] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(!1),
            p = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              p.current && p.current("BroadcastConfirmBanAction: unmounting");
            },
            [],
          );
          const E = () => e.closeModal && e.closeModal();
          return n.createElement(
            I.SV,
            null,
            n.createElement(
              w.e1,
              { onEscKeypress: E },
              n.createElement(
                B.VY,
                null,
                n.createElement(B.h4, null, "Remove Broadcast From Front Page"),
                n.createElement(
                  B.uT,
                  null,
                  n.createElement(
                    B.Ac,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "frontpage" == a
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?",
                    ),
                    n.createElement(
                      "div",
                      null,
                      n.createElement(B.ry, {
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
                      Boolean(s) && n.createElement(le.V, null),
                      Boolean(d) &&
                        n.createElement(
                          "div",
                          null,
                          u
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later",
                        ),
                    ),
                  ),
                ),
                n.createElement(
                  B.$_,
                  null,
                  d
                    ? n.createElement(
                        B.KM,
                        { onClick: E },
                        (0, x.Xx)("#Button_Dismiss"),
                      )
                    : n.createElement(
                        B.Uq,
                        null,
                        n.createElement(
                          B.zx,
                          { onClick: E },
                          (0, x.Xx)("#Button_Cancel"),
                        ),
                        n.createElement(
                          B.KM,
                          {
                            onClick: () =>
                              (0, l.mG)(void 0, void 0, void 0, function* () {
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
                                  c(!1), m(!0), _(false);
                                }
                              }),
                          },
                          (0, x.Xx)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        }),
        ce = (e) => {
          const [t, a] = (0, n.useState)(!1),
            [r, o] = (0, n.useState)(!1),
            [s, c] = (0, n.useState)(!1),
            d = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              d.current && d.current("BroadcastMakeUnbannable: unmounting");
            },
            [],
          );
          const m = () => e.closeModal && e.closeModal();
          return n.createElement(
            I.SV,
            null,
            n.createElement(
              w.e1,
              { onEscKeypress: m },
              n.createElement(
                B.VY,
                null,
                n.createElement(B.h4, null, "Make Broadcast Unbannable"),
                n.createElement(
                  B.uT,
                  null,
                  n.createElement(
                    B.Ac,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                    ),
                    n.createElement(
                      "div",
                      null,
                      Boolean(t) && n.createElement(le.V, null),
                      Boolean(r) &&
                        n.createElement(
                          "div",
                          null,
                          s
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable",
                        ),
                    ),
                  ),
                ),
                n.createElement(
                  B.$_,
                  null,
                  r
                    ? n.createElement(
                        B.KM,
                        { onClick: m },
                        (0, x.Xx)("#Button_Dismiss"),
                      )
                    : n.createElement(
                        B.Uq,
                        null,
                        n.createElement(
                          B.zx,
                          { onClick: m },
                          (0, x.Xx)("#Button_Cancel"),
                        ),
                        n.createElement(
                          B.KM,
                          {
                            onClick: () =>
                              (0, l.mG)(void 0, void 0, void 0, function* () {
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
                          (0, x.Xx)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        },
        de = (0, p.Pi)((e) => {
          const t = v.Get().GetBroadcasterSteamID(),
            a = t.ConvertTo64BitString(),
            [r, o] = (0, G.Ar)("muted", !0),
            l = m.c9.GetBroadcast(a),
            s = m.c9.GetOrCreateBroadcastInfo(a);
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              "div",
              { className: (0, O.Z)(H.BroadcastPage) },
              n.createElement(
                "div",
                { className: (0, O.Z)(h().BroadcastAndChat) },
                Boolean(!v.Get().BShowOnlyChat()) &&
                  n.createElement(
                    I.SV,
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
                            [h().NoChat]: v.Get().BShowOnlyVideo(),
                          }),
                        },
                        n.createElement(
                          "div",
                          { className: h().BroadcastPlayerContainer },
                          n.createElement(
                            I.SV,
                            null,
                            n.createElement(S.default, {
                              steamIDBroadcast: a,
                              watchLocation: 5,
                              bStartMuted: r,
                            }),
                          ),
                        ),
                      ),
                    ),
                  ),
                Boolean(!v.Get().BShowOnlyVideo()) &&
                  n.createElement(
                    "div",
                    { className: h().detail_chat_ctn },
                    n.createElement(
                      "div",
                      { className: h().ChatContainer },
                      n.createElement(
                        I.SV,
                        null,
                        n.createElement(E.c, {
                          emoticonStore: b.D$,
                          watchLocation: 6,
                          steamID: a,
                          broadcastID: l ? l.m_ulBroadcastID : void 0,
                        }),
                      ),
                    ),
                  ),
              ),
              Boolean(!v.Get().BShowInIframe()) &&
                n.createElement(me, {
                  broadcasterSteamID: t,
                  broadcastInfo: s,
                }),
            ),
          );
        }),
        me = (0, p.Pi)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [r, o] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(() => {
              (0, l.mG)(void 0, void 0, void 0, function* () {
                let e = yield g.sV.LoadOGGClanInfoForAppID(
                  Number.parseInt(a.m_strAppId),
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
                  n.createElement(se, { broadcastSteamID: t }),
                  n.createElement(
                    "div",
                    {
                      className: (0, O.Z)(A().ValveOnlyBackground, H.DebugCtn),
                    },
                    n.createElement(P, null),
                  ),
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
                      " ",
                    ),
                    n.createElement(
                      "div",
                      { className: A().EventSectionSpacer },
                      " ",
                    ),
                  ),
                  n.createElement(
                    "div",
                    { className: H.GameInfo },
                    n.createElement(N.ju, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    }),
                  ),
                ),
              Boolean(r) &&
                n.createElement(
                  "div",
                  { className: H.RelatedEvents },
                  n.createElement(y._G, {
                    clanAccountID: r.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: f.j1,
                    bViewAllShowInfiniteScroll: !0,
                  }),
                ),
            )
          );
        }),
        ue = (0, p.Pi)((e) => {
          const t = (0, n.useRef)(null);
          let a = m.c9.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString(),
          );
          const [r, o] = (0, n.useState)(a.m_strTitle),
            [s, c] = (0, n.useState)(""),
            [d, u] = (0, n.useState)(null);
          if (
            ((0, n.useEffect)(
              () => (
                o(a.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [a.m_strTitle],
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
              (0, x.Xx)("#Broadcaster_Control_title"),
            ),
            n.createElement(
              "div",
              { className: H.TitleInput },
              n.createElement(
                "div",
                { className: H.Options },
                n.createElement(B.II, {
                  type: "text",
                  label: (0, x.Xx)("#Broadcast_title_title"),
                  onChange: (e) => o(e.currentTarget.value || ""),
                  placeholder: (0, x.Xx)("#Broadcast_title_placeholder"),
                  value: r,
                }),
                n.createElement(B.II, {
                  type: "text",
                  label: (0, x.Xx)("#Broadcast_Control_matchid"),
                  onChange: (e) => c(e.currentTarget.value || ""),
                  value: s,
                }),
                n.createElement(
                  B.zx,
                  {
                    onClick: () =>
                      (0, l.mG)(void 0, void 0, void 0, function* () {
                        t.current && t.current();
                        const e = i().CancelToken.source();
                        t.current = e.cancel;
                        let a = yield v.Get().UpdateBroadcastSettings(s, r, e);
                        e.token.reason ||
                          u(
                            (0, x.Xx)(
                              a
                                ? "#Broadcast_Control_Success"
                                : "#Broadcast_Control_Failure",
                            ),
                          );
                      }),
                    "data-tooltip-text": (0, x.Xx)(
                      "#Broadcast_save_title_ttip",
                    ),
                  },
                  (0, x.Xx)("#Broadcast_save_changes"),
                ),
              ),
              n.createElement(
                "div",
                { className: H.StopCtn },
                n.createElement(
                  B.zx,
                  {
                    onClick: (e) => {
                      (0, T.AM)(
                        n.createElement(w.uH, {
                          strTitle: (0, x.Xx)(
                            "#Broadcast_Control_StopBroadcast",
                          ),
                          strDescription: (0, x.Xx)(
                            "#EventEditor_GenericAreYouSure",
                          ),
                          onOK: () =>
                            (0, l.mG)(void 0, void 0, void 0, function* () {
                              t.current && t.current();
                              const e = i().CancelToken.source();
                              t.current = e.cancel;
                              let a = yield v.Get().StopBroadcast(e);
                              e.token.reason ||
                                u(
                                  (0, x.Xx)(
                                    a
                                      ? "#Broadcast_Control_StopSuccess"
                                      : "#Broadcast_Control_StopFailure",
                                  ),
                                );
                            }),
                        }),
                        (0, k.RA)(e),
                      );
                    },
                  },
                  (0, x.Xx)("#Broadcast_Control_StopBroadcast"),
                ),
                Boolean(d) && n.createElement("div", null, d),
              ),
            ),
          );
        });
      var _e = a(56368);
      let ve = { BroadcastWatch: (e) => `/broadcast/(watch|watchnew)/${e}` };
      function pe(e) {
        const [t, a] = n.useState(!0);
        return (
          (0, n.useEffect)(() => {
            t && _e.cb.InitGlobal().then(() => a(!1));
          }, [t]),
          t
            ? n.createElement(le.V, {
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
                    path: ve.BroadcastWatch(":steamid_or_user_vanity"),
                    render: (e) =>
                      n.createElement(de, {
                        strSteamID: e.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  n.createElement(r.AW, { component: o.R }),
                ),
              )
        );
      }
    },
  },
]);
