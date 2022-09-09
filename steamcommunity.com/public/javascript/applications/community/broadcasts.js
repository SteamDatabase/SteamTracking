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
    70350: (e, t, a) => {
      "use strict";
      a.d(t, { KE: () => H, T4: () => L, _G: () => U });
      var n = a(70655),
        r = (a(73285), a(9669)),
        l = a.n(r),
        o = a(29323),
        s = a(13271),
        c = a(67294),
        i = a(26149),
        m = (a(92398), a(35921)),
        d = a(39746),
        u = a(49186),
        v = a(3389),
        _ = (a(68002), a(24399)),
        E = a(76776),
        p = a(35118),
        S = a(9915),
        C = (a(7200), a(52114)),
        h = a(3044),
        b = a(23937),
        g = a(34133),
        B = a.n(g),
        I = a(75896),
        f = a(96602),
        y = a(65924),
        G = a(48780),
        A = a(7573),
        D = a(41311),
        N = a(90666),
        w = a(32548),
        T = a(13596),
        O = a(36567),
        x = a.n(O),
        k = a(88335),
        M = a.n(k),
        R = a(5146);
      const U = (0, o.Pi)((e) => {
        const {
            clanAccountID: t,
            gidAnnouncement: a,
            partnerEventStore: r,
            trackingLocation: o,
            bViewAllShowInfiniteScroll: s,
          } = e,
          i = v.K.InitFromClanID(t),
          u = (0, c.useRef)(null),
          [_, p] = (0, c.useState)(null),
          [C, g] = (0, c.useState)(!0),
          [I, f] = (0, c.useState)(!1);
        if (
          ((0, c.useEffect)(
            () => (
              (0, n.mG)(void 0, void 0, void 0, function* () {
                u.current && u.current("PartnerEventRow Initializng new mount");
                const e = l().CancelToken.source();
                u.current = e.cancel;
                const n = v.K.InitFromClanID(t);
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
                  G.LQ(e);
                  const t = e
                    .slice(0, 3)
                    .map((e) => r.GetClanEventFromAnnouncementGID(e));
                  if ((p(t), g(!1), o)) {
                    let e = S.cb.Get().GetTracker(),
                      n = !1;
                    if (r.BHasClanAnnouncementGID(a)) {
                      let t = r.GetClanEventFromAnnouncementGID(a);
                      t &&
                        t.BIsPartnerEvent() &&
                        t.BIsVisibleEvent() &&
                        (e.MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          o
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
                            o
                          )
                        ),
                      (n = !0)),
                      n && e.Flush();
                  }
                }
              }),
              () => {
                u.current && u.current("PartnerEventRow: unmounting");
              }
            ),
            [t, a, r, o]
          ),
          C)
        )
          return c.createElement(T.V, { position: "center", size: "medium" });
        if (0 == _.length) return c.createElement("div", null);
        const y = E.sV.GetClanInfoByClanAccountID(t);
        return c.createElement(
          w.S,
          null,
          c.createElement(
            "div",
            { className: (0, A.Z)(x().OtherEventsCtn, "OtherEventsCtn") },
            c.createElement(
              "div",
              { className: B().EventSectionTitleCtn },
              c.createElement(
                "div",
                {
                  className: (0, A.Z)(
                    B().EventSectionTitle,
                    "EventSectionTitle"
                  ),
                },
                (0, D.kQ)("#EventBrowse_MoreEventsTitle", y.group_name),
                " "
              ),
              c.createElement(
                "div",
                { className: B().EventSectionSpacer },
                " "
              ),
              s
                ? c.createElement(
                    "div",
                    {
                      className: B().EventSectionMoreBtn,
                      onClick: () => f(!0),
                    },
                    (0, D.Xx)("#EventBrowse_MoreEventsBtn")
                  )
                : c.createElement(
                    b.JW,
                    {
                      eventModel: _[0],
                      route: b.Ue.k_eViewWebSiteHub,
                      className: B().EventSectionMoreBtn,
                    },
                    (0, D.Xx)("#EventBrowse_MoreEventsBtn")
                  )
            ),
            c.createElement(
              m.s,
              {
                className: x().OtherEvents,
                "flow-children": "column",
                navEntryPreferPosition: d.c4.PREFERRED_CHILD,
              },
              _.map((e) =>
                c.createElement(L, { key: e.AnnouncementGID, event: e })
              )
            ),
            Boolean(I) &&
              c.createElement(h.x, {
                appid: _[0].appid,
                clanSteamID: i,
                announcementGID: _[0].AnnouncementGID,
                closeModal: () => f(!1),
                partnerEventStore: r,
              })
          )
        );
      });
      function L(e) {
        const {
            event: t,
            imageURLOverride: a,
            bShowAssociatedApp: n,
            langOverride: r,
            onClick: l,
          } = e,
          [o, m, d, v, E, S, h, g] =
            ((0, y.bJ)(),
            (0, s.SZ)(() => {
              const e = r || (0, i.jM)(N.De.LANGUAGE),
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
                (0, u.ax)(n),
                t.GetSubTitleWithLanguageFallback(e) || "",
              ];
            })),
          [B, I] = (0, C.vs)(m, {
            include_assets: !0,
            include_screenshots: !0,
          });
        if (!t)
          return c.createElement("div", {
            className: x().OtherEvents_EventCtn,
          });
        if (!B && m)
          return c.createElement(T.V, {
            size: "small",
            position: "center",
            string: (0, D.Xx)("#Loading"),
          });
        const G = (0, p.vY)().GetStoreInitializationTimestamp().getTime() / 1e3,
          w = t ? t.GetStartTimeAndDateUnixSeconds() : "";
        let O = g;
        return (
          g && (g.length > 30 || v.length > 30) && (O = void 0),
          c.createElement(
            c.Fragment,
            null,
            c.createElement(
              b.JW,
              {
                className: (0, A.Z)(
                  x().OtherEvents_EventCtn,
                  x().HoversEnabled
                ),
                eventModel: t,
                route: b.Ue.k_eView,
                onClick: l,
                preferredFocus: !0,
              },
              c.createElement(
                "div",
                { className: x().EventSummaryContainer },
                c.createElement("div", { className: x().EventSummaryType }, E),
                c.createElement("div", { className: x().EventSummaryText }, S)
              ),
              c.createElement("div", {
                className: x().OtherEvents_BGImage,
                style: {
                  backgroundColor: "#ffffff",
                  backgroundImage: `url(${h})`,
                },
              }),
              c.createElement(
                "div",
                { className: x().OtherEvents_ContentCtn },
                c.createElement(
                  "div",
                  { className: x().OtherEvents_MainImageCtn },
                  c.createElement("img", {
                    src: d,
                    className: x().OtherEvents_MainImage,
                  })
                ),
                c.createElement(
                  "div",
                  { className: x().OtherEvents_TextCtn },
                  c.createElement(
                    "div",
                    { className: x().OtherEvents_TextTitle },
                    v
                  ),
                  Boolean(O) &&
                    c.createElement(
                      "div",
                      { className: x().OtherEvents_SubTitle },
                      O
                    ),
                  Boolean(w > G)
                    ? c.createElement(
                        "div",
                        { className: x().UpcomingCtn },
                        c.createElement(f.H6, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                        })
                      )
                    : c.createElement(f.H6, {
                        bSingleLine: !0,
                        bOnlyDate: !0,
                        dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                      })
                )
              )
            ),
            Boolean(n && t.appid) && c.createElement(P, { appid: t.appid })
          )
        );
      }
      function P(e) {
        const { appid: t } = e,
          [a] = (0, C.vs)(t, { include_assets: !0, include_release: !0 }),
          n = (0, y.bJ)();
        if (!a) return null;
        const r = a.GetBestPurchaseOption();
        return c.createElement(
          m.s,
          Object.assign(
            { className: (0, A.Z)(x().AppCapsuleCtn, "AppCapsuleCtn") },
            (0, I.h)(a, n)
          ),
          c.createElement(
            R._,
            { type: "app", id: t, hoverClassName: x().AppCapsuleImageHover },
            c.createElement("img", {
              className: x().AppCapsuleImage,
              src: a.GetAssets().GetSmallCapsuleURL(),
            })
          ),
          c.createElement(
            "span",
            { className: x().AppCapsulePrice },
            Boolean(null == r ? void 0 : r.discount_pct) &&
              c.createElement(
                "span",
                { className: M().StoreSaleDiscountBox },
                `-${null == r ? void 0 : r.discount_pct}%`
              ),
            !a.BIsFree() &&
              r.final_price_in_cents &&
              c.createElement(
                "span",
                { className: M().StoreSalePriceBox },
                r.formatted_final_price
              )
          )
        );
      }
      function H(e) {
        const { event: t, imageURLOverride: a, onClick: n } = e,
          r = (0, i.jM)(N.De.LANGUAGE),
          [l, o, m] = (0, s.SZ)(() =>
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
          ? c.createElement(
              b.JW,
              {
                className: x().OtherEvents_EventCtn + " " + x().HorizontalEvent,
                eventModel: t,
                route: b.Ue.k_eView,
                onClick: n,
              },
              c.createElement(
                "div",
                { className: x().OtherEvents_ContentCtn },
                c.createElement(
                  "div",
                  { className: x().OtherEvents_MainImageCtn },
                  c.createElement("img", {
                    src: l,
                    className: x().OtherEvents_MainImage,
                  })
                )
              ),
              c.createElement(
                "div",
                { className: x().OtherEvents_TextCtn },
                c.createElement(
                  "div",
                  { className: x().HorizontalDescriptionCtn },
                  c.createElement(
                    "div",
                    { className: x().HorizontalDescription },
                    m
                  ),
                  c.createElement(f.H6, {
                    bSingleLine: !0,
                    dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                  })
                ),
                c.createElement("div", { className: x().HorizontalTitle }, o)
              )
            )
          : c.createElement("div", { className: x().OtherEvents_EventCtn });
      }
    },
    5265: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => Ee });
      a(69491);
      var n = a(67294),
        r = a(78587),
        l = a(65090),
        o = a(70655),
        s = a(9669),
        c = a.n(s),
        i = a(22188),
        m = (a(92398), a(3389)),
        d = a(52795),
        u = (a(82946), a(93976)),
        v = a(90666);
      class _ {
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            let t = v.De.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
              a = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                origin: self.origin,
              };
            try {
              let n = yield c().get(t, {
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            let n =
                v.De.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: e,
                title: t,
                sessionid: v.De.SESSIONID,
              };
            try {
              let e = yield c().get(n, {
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
                    (0, i.z)(() => {
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
          return (0, o.mG)(this, void 0, void 0, function* () {
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            const n = this.m_steamid.ConvertTo64BitString(),
              r = d.c9.GetBroadcast(n);
            let l =
                v.De.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              o = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                type: e,
                days: t,
                sessionid: v.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              l,
              o,
              a
            );
          });
        }
        SetUnBannable(e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
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
          return (0, o.mG)(this, void 0, void 0, function* () {
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            try {
              let e = yield c().get(t, {
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
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
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
      (0, o.gn)([i.LO], _.prototype, "m_curDebugInfo", void 0);
      var E = a(29323),
        p = a(85503),
        S = a(63405),
        C = a(17157),
        h = a.n(C),
        b = (a(69765), a(68002), a(28976)),
        g = a(76776),
        B = a(7200),
        I = a(48341),
        f = a(32548),
        y = a(70350),
        G = a(31933),
        A = a(34133),
        D = a.n(A),
        N = a(85732),
        w = a(8850),
        T = a(59650),
        O = a(7573),
        x = a(53622),
        k = a(41311),
        M = (a(26149), a(88254)),
        R = a(96602),
        U = a(64393);
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
              f.S,
              null,
              n.createElement(
                "div",
                { className: (0, O.Z)(U.Container) },
                n.createElement(
                  "div",
                  { className: U.Controls },
                  n.createElement(
                    I.zx,
                    {
                      onClick: () =>
                        (0, o.mG)(void 0, void 0, void 0, function* () {
                          t.current && t.current();
                          const e = c().CancelToken.source();
                          (t.current = e.cancel),
                            r(yield _.Get().LoadBroadcastDebugInfo(e));
                        }),
                    },
                    "(VO) Load Debug Info"
                  )
                ),
                n.createElement(f.S, null, n.createElement(P, { info: a }))
              )
            )
          );
        },
        P = (e) => {
          const { info: t } = e,
            [a, r] = (0, n.useState)(!1);
          if (!t) return null;
          const l = _.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            o = d.c9.GetBroadcast(l);
          return n.createElement(
            "div",
            { className: U.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              n.createElement(
                "div",
                { className: U.SubSection },
                n.createElement("div", { className: U.Header }, "Error"),
                n.createElement(
                  "div",
                  null,
                  "EResult: ",
                  t.last_error_result,
                  ", occurred ",
                  t.last_error_time,
                  " - ",
                  n.createElement(R.H6, {
                    dateAndTime: t.last_error_time,
                    bSingleLine: !0,
                  })
                )
              ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement(
                "div",
                { className: U.Header },
                "Broadcast Setup"
              ),
              n.createElement(
                "div",
                null,
                "Broadcaster: ",
                t.steam_id,
                ", SteamID: ",
                l
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
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "Upload Info"),
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
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "Viewer Info"),
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
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "Settings"),
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
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "App Info"),
              n.createElement("div", null, "appid: ", t.app_id),
              n.createElement("div", null, "app name: ", t.app_name),
              n.createElement("div", null, "broadcast title: ", t.title),
              n.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                n.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && t.app_id > 0) &&
                n.createElement(
                  "div",
                  { className: U.AppSummaryWidgetCtn },
                  n.createElement(N.ju, { id: t.app_id, type: "game" })
                )
            ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement(
                "div",
                { className: U.Header },
                "Manifest Information"
              ),
              n.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                o.m_data.heartbeat_interval
              ),
              n.createElement("div", null, "DASH MPEG Url: ", o.m_data.url),
              n.createElement("div", null, "HLS Url: ", o.m_data.hls_url)
            ),
            n.createElement(I.zx, { onClick: () => r(!a) }, "Toggle Raw Data"),
            Boolean(a) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: U.SubSection },
                  n.createElement(M.G, { data: t })
                ),
                n.createElement(
                  "div",
                  { className: U.SubSection },
                  n.createElement(M.G, { data: o.m_data })
                )
              )
          );
        };
      var H = a(63103),
        V = a(93981),
        z = a(44298),
        F = a(2388),
        X = a(83147);
      function K(e) {
        const t = F.y$.GetProfileByAccountID(e.GetAccountID());
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
      const Z = (e) => {
        e.steamid.GetAccountID();
        const [t, a] = (0, n.useState)(K(e.steamid)),
          [r, l] = (0, n.useState)(F.y$.GetProfileURLBySteamID(e.steamid)),
          [s, c] = (0, n.useState)(F.y$.GetPersonaNameBySteamID(e.steamid));
        return (
          (0, n.useEffect)(() => {
            if (!t) {
              (() =>
                (0, o.mG)(void 0, void 0, void 0, function* () {
                  yield F.y$.LoadProfiles([e.steamid.ConvertTo64BitString()]),
                    a(K(e.steamid)),
                    l(F.y$.GetProfileURLBySteamID(e.steamid)),
                    c(F.y$.GetPersonaNameBySteamID(e.steamid));
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
              n.createElement(z.vV, {
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
      var W = a(13271),
        q = a(52114),
        j = a(9410),
        Y = a(95598),
        $ = a(72258),
        Q = a(35092),
        J = a(87266);
      function ee(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [r, l] = (0, W.SZ)(() => {
            const e = d.c9.GetOrCreateBroadcastInfo(a);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [o] = (0, q.vs)(l, { include_assets: !0 });
        return n.createElement(
          f.S,
          null,
          n.createElement(
            "div",
            { className: J.ProfileCtn },
            n.createElement(
              "a",
              {
                href: (0, Q.OL)(
                  (null == o ? void 0 : o.GetStorePageURL()) ||
                    v.De.STORE_BASE_URL + "app/" + l
                ),
                className: J.GameCapsule,
              },
              n.createElement("img", {
                src: null == o ? void 0 : o.GetAssets().GetMainCapsuleURL(),
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
                    (0, k.kb)("#Broadcast_ViewerCount", r.toLocaleString())
                  )
                ),
                n.createElement(ae, { broadcasterSteamID: t })
              ),
              n.createElement(Z, { steamid: t, size: "Medium", bShowName: !0 })
            )
          )
        );
      }
      const te = (0, E.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [r, l] = (0, W.SZ)(() => {
              const e = d.c9.GetOrCreateBroadcastInfo(a);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [o] = (0, q.vs)(l, { include_assets: !0 });
          return n.createElement(
            "div",
            { className: J.BroadcastTitleCtn },
            (0, k.Xx)("#Broadcast_Playing"),
            n.createElement(
              "a",
              {
                href: (0, Q.OL)(
                  (null == o ? void 0 : o.GetStorePageURL()) ||
                    v.De.STORE_BASE_URL + "app/" + l
                ),
              },
              Boolean(r) ? r : null == o ? void 0 : o.GetName()
            ),
            Boolean((null == r ? void 0 : r.length) > 0) &&
              n.createElement("span", null, " - ", r)
          );
        }),
        ae = (0, E.Pi)((e) => {
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
                I.zx,
                {
                  "data-tooltip-text": (0, k.Xx)("#Broadcast_User_Report_ttip"),
                  onClick: (e) => {
                    v.L7.logged_in
                      ? (0, T.AM)(
                          n.createElement(ne, { broadcasterSteamID: t }),
                          (0, x.RA)(e)
                        )
                      : (0, T.AM)(
                          n.createElement(w.uH, {
                            strTitle: (0, k.Xx)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: (0, k.Xx)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: (0, k.Xx)("#MobileLogin_SignIn"),
                            onOK: () => (0, j.Xt)(),
                          }),
                          (0, x.RA)(e)
                        );
                  },
                },
                n.createElement(Y.WNf, null)
              ),
            n.createElement(
              I.zx,
              {
                "data-tooltip-text": (0, k.Xx)("#Broadcast_User_FAQ_ttip"),
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
            w.uH,
            {
              strTitle: (0, k.Xx)("#Broadcast_ReportItem_Title"),
              strDescription: (0, k.Xx)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: () =>
                (0, o.mG)(void 0, void 0, void 0, function* () {
                  yield _.Get().SendUserReportOnBroadcast(t),
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
        le = a(13596);
      const oe = (e) => {
          if (!v.L7.is_support) return null;
          const t = (t, a) => {
              (0, T.AM)(
                n.createElement(se, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                (0, x.RA)(t)
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return n.createElement(
            "div",
            { className: (0, O.Z)(re.AdminControls, D().ValveOnlyBackground) },
            n.createElement("div", null, "(VO) Support Tools"),
            n.createElement(
              I.zx,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page"
            ),
            n.createElement(
              I.zx,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting"
            ),
            n.createElement(
              I.zx,
              {
                onClick: (t) => {
                  (0, T.AM)(
                    n.createElement(ce, { steamid: e.broadcastSteamID }),
                    (0, x.RA)(t)
                  );
                },
              },
              "Make Unbannable"
            ),
            n.createElement(
              I.zx,
              { onClick: (e) => (0, $.b8)(e, a) },
              "Go to Support Page"
            )
          );
        },
        se = (0, E.Pi)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [r, l] = (0, n.useState)(1),
            [s, i] = (0, n.useState)(!1),
            [m, d] = (0, n.useState)(!1),
            [u, v] = (0, n.useState)(!1),
            E = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              E.current && E.current("BroadcastConfirmBanAction: unmounting");
            },
            []
          );
          const p = () => e.closeModal && e.closeModal();
          return n.createElement(
            f.S,
            null,
            n.createElement(
              w.e1,
              { onEscKeypress: p },
              n.createElement(
                I.VY,
                null,
                n.createElement(I.h4, null, "Remove Broadcast From Front Page"),
                n.createElement(
                  I.uT,
                  null,
                  n.createElement(
                    I.Ac,
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
                      n.createElement(I.ry, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: r,
                        onChange: (e) => l(e.data),
                      }),
                      Boolean(s) && n.createElement(le.V, null, " "),
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
                  I.$_,
                  null,
                  m
                    ? n.createElement(
                        I.KM,
                        { onClick: p },
                        (0, k.Xx)("#Button_Dismiss")
                      )
                    : n.createElement(
                        I.Uq,
                        null,
                        n.createElement(
                          I.zx,
                          { onClick: p },
                          (0, k.Xx)("#Button_Cancel")
                        ),
                        n.createElement(
                          I.KM,
                          {
                            onClick: () =>
                              (0, o.mG)(void 0, void 0, void 0, function* () {
                                i(!0);
                                try {
                                  E.current && E.current();
                                  const e = c().CancelToken.source();
                                  E.current = e.cancel;
                                  let t =
                                    yield _.Get().SetBroadcasterRestrictions(
                                      a,
                                      r,
                                      e
                                    );
                                  e.token.reason || (t = !0);
                                } finally {
                                  i(!1), d(!0), v(t);
                                }
                              }),
                          },
                          (0, k.Xx)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        }),
        ce = (e) => {
          const [t, a] = (0, n.useState)(!1),
            [r, l] = (0, n.useState)(!1),
            [s, i] = (0, n.useState)(!1),
            m = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              m.current && m.current("BroadcastMakeUnbannable: unmounting");
            },
            []
          );
          const d = () => e.closeModal && e.closeModal();
          return n.createElement(
            f.S,
            null,
            n.createElement(
              w.e1,
              { onEscKeypress: d },
              n.createElement(
                I.VY,
                null,
                n.createElement(I.h4, null, "Make Broadcast Unbannable"),
                n.createElement(
                  I.uT,
                  null,
                  n.createElement(
                    I.Ac,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?"
                    ),
                    n.createElement(
                      "div",
                      null,
                      Boolean(t) && n.createElement(le.V, null, " "),
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
                  I.$_,
                  null,
                  r
                    ? n.createElement(
                        I.KM,
                        { onClick: d },
                        (0, k.Xx)("#Button_Dismiss")
                      )
                    : n.createElement(
                        I.Uq,
                        null,
                        n.createElement(
                          I.zx,
                          { onClick: d },
                          (0, k.Xx)("#Button_Cancel")
                        ),
                        n.createElement(
                          I.KM,
                          {
                            onClick: () =>
                              (0, o.mG)(void 0, void 0, void 0, function* () {
                                a(!0);
                                let e = !1;
                                try {
                                  m.current && m.current();
                                  const t = c().CancelToken.source();
                                  (m.current = t.cancel),
                                    (e = yield _.Get().SetUnBannable(t));
                                } finally {
                                  a(!1), l(!0), i(e);
                                }
                              }),
                          },
                          (0, k.Xx)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        },
        ie = (0, E.Pi)((e) => {
          const t = _.Get().GetBroadcasterSteamID(),
            a = t.ConvertTo64BitString(),
            [r, l] = (0, G.Ar)("muted", !0),
            o = d.c9.GetBroadcast(a),
            s = d.c9.GetOrCreateBroadcastInfo(a);
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              "div",
              { className: (0, O.Z)(H.BroadcastPage) },
              n.createElement(
                "div",
                { className: (0, O.Z)(h().BroadcastAndChat) },
                Boolean(!_.Get().BShowOnlyChat()) &&
                  n.createElement(
                    f.S,
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
                            [h().NoChat]: _.Get().BShowOnlyVideo(),
                          }),
                        },
                        n.createElement(
                          "div",
                          { className: h().BroadcastPlayerContainer },
                          n.createElement(
                            f.S,
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
                Boolean(!_.Get().BShowOnlyVideo()) &&
                  n.createElement(
                    "div",
                    { className: h().detail_chat_ctn },
                    n.createElement(
                      "div",
                      { className: h().ChatContainer },
                      n.createElement(
                        f.S,
                        null,
                        n.createElement(p.c, {
                          emoticonStore: b.D$,
                          watchLocation: 6,
                          steamID: a,
                          broadcastID: o ? o.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
              ),
              Boolean(!_.Get().BShowInIframe()) &&
                n.createElement(me, { broadcasterSteamID: t, broadcastInfo: s })
            )
          );
        }),
        me = (0, E.Pi)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [r, l] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(() => {
              (0, o.mG)(void 0, void 0, void 0, function* () {
                let e = yield g.sV.LoadOGGClanInfoForAppID(
                  Number.parseInt(a.m_strAppId)
                );
                l(e);
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
                  n.createElement(oe, { broadcastSteamID: t }),
                  n.createElement(
                    "div",
                    {
                      className: (0, O.Z)(D().ValveOnlyBackground, H.DebugCtn),
                    },
                    n.createElement(L, null)
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
                      (0, k.Xx)("#Broadcast_About_Game"),
                      " "
                    ),
                    n.createElement(
                      "div",
                      { className: D().EventSectionSpacer },
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
                  n.createElement(y._G, {
                    clanAccountID: r.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: B.j1,
                    bViewAllShowInfiniteScroll: !0,
                  })
                )
            )
          );
        }),
        de = (0, E.Pi)((e) => {
          const t = (0, n.useRef)(null);
          let a = d.c9.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString()
          );
          const [r, l] = (0, n.useState)(a.m_strTitle),
            [s, i] = (0, n.useState)(""),
            [m, u] = (0, n.useState)(null);
          if (
            ((0, n.useEffect)(
              () => (
                l(a.m_strTitle),
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
            { className: H.ControlCtn },
            n.createElement(
              "div",
              { className: H.ControlsTitle },
              (0, k.Xx)("#Broadcaster_Control_title")
            ),
            n.createElement(
              "div",
              { className: H.TitleInput },
              n.createElement(
                "div",
                { className: H.Options },
                n.createElement(I.II, {
                  type: "text",
                  label: (0, k.Xx)("#Broadcast_title_title"),
                  onChange: (e) => l(e.currentTarget.value || ""),
                  placeholder: (0, k.Xx)("#Broadcast_title_placeholder"),
                  value: r,
                }),
                n.createElement(I.II, {
                  type: "text",
                  label: (0, k.Xx)("#Broadcast_Control_matchid"),
                  onChange: (e) => i(e.currentTarget.value || ""),
                  value: s,
                }),
                n.createElement(
                  I.zx,
                  {
                    onClick: () =>
                      (0, o.mG)(void 0, void 0, void 0, function* () {
                        t.current && t.current();
                        const e = c().CancelToken.source();
                        t.current = e.cancel;
                        let a = yield _.Get().UpdateBroadcastSettings(s, r, e);
                        e.token.reason ||
                          u(
                            (0, k.Xx)(
                              a
                                ? "#Broadcast_Control_Success"
                                : "#Broadcast_Control_Failure"
                            )
                          );
                      }),
                    "data-tooltip-text": (0, k.Xx)(
                      "#Broadcast_save_title_ttip"
                    ),
                  },
                  (0, k.Xx)("#Broadcast_save_changes")
                )
              ),
              n.createElement(
                "div",
                { className: H.StopCtn },
                n.createElement(
                  I.zx,
                  {
                    onClick: (e) => {
                      (0, T.AM)(
                        n.createElement(w.uH, {
                          strTitle: (0, k.Xx)(
                            "#Broadcast_Control_StopBroadcast"
                          ),
                          strDescription: (0, k.Xx)(
                            "#EventEditor_GenericAreYouSure"
                          ),
                          onOK: () =>
                            (0, o.mG)(void 0, void 0, void 0, function* () {
                              t.current && t.current();
                              const e = c().CancelToken.source();
                              t.current = e.cancel;
                              let a = yield _.Get().StopBroadcast(e);
                              e.token.reason ||
                                u(
                                  (0, k.Xx)(
                                    a
                                      ? "#Broadcast_Control_StopSuccess"
                                      : "#Broadcast_Control_StopFailure"
                                  )
                                );
                            }),
                        }),
                        (0, x.RA)(e)
                      );
                    },
                  },
                  (0, k.Xx)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(m) && n.createElement("div", null, m)
              )
            )
          );
        });
      var ue = a(9915),
        ve = a(27991);
      let _e = (e) => `/broadcast/(watch|watchnew)/${e}`;
      function Ee(e) {
        const [t, a] = n.useState(!0);
        return (
          (0, n.useEffect)(() => {
            t && ((0, ve.nf)(null), ue.cb.InitGlobal().then(() => a(!1)));
          }, [t]),
          t
            ? n.createElement(le.V, {
                string: (0, k.Xx)("#Loading"),
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
                    path: _e(":steamid_or_user_vanity"),
                    render: (e) =>
                      n.createElement(ie, {
                        strSteamID: e.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  n.createElement(r.AW, { component: l.R })
                )
              )
        );
      }
    },
  },
]);
