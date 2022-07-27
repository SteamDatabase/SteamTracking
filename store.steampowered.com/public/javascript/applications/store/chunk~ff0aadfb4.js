/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9211],
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
    47784: (e) => {
      e.exports = {
        YoutubePreviewImage: "youtubepreviewimage_YoutubePreviewImage_MzScK",
        YoutubePlayer: "youtubepreviewimage_YoutubePlayer_3uK6c",
      };
    },
    13354: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bo: () => C,
        FG: () => S,
        N: () => P,
        P4: () => I,
        mb: () => E,
        yS: () => L,
      });
      var n = a(70655),
        o = a(9669),
        r = a.n(o),
        i = a(22188),
        s = a(67294),
        l = (a(26149), a(37301), a(37662), a(3389)),
        u = a(76776),
        c = a(39388),
        d = a(77636),
        p = a(7200),
        m = a(89673),
        _ = (a(82946), a(48780)),
        h = a(77520),
        y = a(93976),
        v = a(30156),
        g = a(90666);
      function f(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, h.X)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata
            ),
            (e.list_jsondata = {}));
      }
      const E = "0";
      function b(e, t) {
        (t.localized_flat_title = (0, _.LG)([], 30, null)),
          (t.localized_flat_blurb = (0, _.LG)([], 30, null)),
          (t.localized_flat_link = (0, _.LG)([], 30, null)),
          t.title !== E && (t.localized_flat_title[e] = t.title),
          t.blurb !== E && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== E && (t.localized_flat_link[e] = t.link),
          t.title_localization.forEach((e) => {
            var a;
            (null === (a = e.localized_string) || void 0 === a
              ? void 0
              : a.length) > 0 &&
              (t.localized_flat_title[e.language] = e.localized_string);
          }),
          t.blurb_localization.forEach((e) => {
            var a;
            (null === (a = e.localized_string) || void 0 === a
              ? void 0
              : a.length) > 0 &&
              (t.localized_flat_blurb[e.language] = e.localized_string);
          }),
          t.link_localization.forEach((e) => {
            var a;
            (null === (a = e.localized_string) || void 0 === a
              ? void 0
              : a.length) > 0 &&
              (t.localized_flat_link[e.language] = e.localized_string);
          });
      }
      class C {
        constructor() {
          (this.m_mapList = new Map()),
            (this.m_mapEventGIDToLists = new Map()),
            (this.m_mapListIDToClanAccount = new Map()),
            "dev" == g.De.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, g.kQ)("curatorlistdata", "application_config");
          ("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " +
                (null == e ? void 0 : e.length),
              e
            ),
            this.ValidateStoreDefault(e) &&
              (0, i.z)(() => {
                e.forEach((e) => {
                  e.multi_detail_lists.forEach((t) => {
                    f(t),
                      b(e.curation_language, t),
                      this.m_mapList.set(t.listid, t);
                  });
                });
              });
        }
        GetListDetails(e) {
          return this.m_mapList.get(e);
        }
        GetAllSaleCurationLists(e) {
          return this.m_mapEventGIDToLists.get(e) || [];
        }
        GetClanAccountFromListID(e) {
          return this.m_mapListIDToClanAccount.get(e);
        }
        LoadListDetails(e, t, a) {
          var o;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapList.has(t)) return this.m_mapList.get(t);
            const n =
                g.De.STORE_BASE_URL +
                "curator/" +
                e.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              i = { listid: t };
            try {
              const s = yield r().get(n, {
                params: i,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                1 ==
                (null === (o = null == s ? void 0 : s.data) || void 0 === o
                  ? void 0
                  : o.success)
              ) {
                const a = Object.assign({}, s.data.list_details);
                return (
                  (0, h.X)(
                    t == (null == a ? void 0 : a.listid),
                    "Wanted" + t + "but got" + (null == a ? void 0 : a.listid)
                  ),
                  f(a),
                  b(s.data.curation_language, a),
                  this.m_mapList.set(t, a),
                  this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                  a
                );
              }
            } catch (e) {
              const t = (0, y.l)(e);
              console.error(
                "CCuratorListStore.LoadListDetails: error on load: " +
                  t.strErrorMsg,
                t
              );
            }
            return null;
          });
        }
        LoadMyFollowedSaleCurationLists(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              !g.L7.logged_in ||
              (d.jg.Get().BIsLoaded() &&
                0 == d.jg.Get().GetFollowedCuratorCount())
            )
              return [];
            const n =
                g.De.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              o = {
                clan_account_id: e.GetAccountID(),
                clan_event_gid: t,
                origin: self.origin,
                curator_clan_account_followed: d.jg.Get().BIsLoaded()
                  ? d.jg.Get().GetFollowedCuratorsAccountID().join(",")
                  : void 0,
              };
            return this.InternalLoadSaleCuratorLists(
              n,
              o,
              "CCuratorListStore.LoadMyFollowedSaleCurationLists",
              e,
              t,
              a
            );
          });
        }
        LoadAllSaleCurationLists(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapEventGIDToLists.has(t))
              return this.m_mapEventGIDToLists.get(t);
            const n = g.De.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
              o = {
                clan_account_id: e.GetAccountID(),
                clan_event_gid: t,
                origin: self.origin,
              };
            return this.InternalLoadSaleCuratorLists(
              n,
              o,
              "CCuratorListStore.LoadAllSaleCurationLists",
              e,
              t,
              a
            );
          });
        }
        InternalLoadSaleCuratorLists(e, t, a, o, s, l) {
          var u;
          return (0, n.mG)(this, void 0, void 0, function* () {
            try {
              const a = yield r().get(e, {
                params: t,
                cancelToken: null == l ? void 0 : l.token,
              });
              if (
                1 ==
                (null === (u = null == a ? void 0 : a.data) || void 0 === u
                  ? void 0
                  : u.success)
              ) {
                const e = new Array();
                return (
                  (0, i.z)(() => {
                    a.data.matches &&
                      a.data.matches.forEach((t) => {
                        t.multi_detail_lists.forEach((a) => {
                          this.m_mapListIDToClanAccount.set(
                            a.listid,
                            t.clan_account_id
                          ),
                            f(a),
                            b(t.curation_language, a),
                            this.m_mapList.set(a.listid, a),
                            e.push(a);
                        });
                      }),
                      this.m_mapEventGIDToLists.set(s, e);
                  }),
                  e
                );
              }
            } catch (e) {
              const t = (0, y.l)(e);
              console.error(a + ": error on load: " + t.strErrorMsg, t);
            }
            return [];
          });
        }
        static Get() {
          return C.s_Singleton || (C.s_Singleton = new C()), C.s_Singleton;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return t &&
            Array.isArray(t) &&
            t.length > 0 &&
            "object" == typeof t[0]
            ? "number" == typeof t[0].curation_language &&
                t[0].multi_detail_lists &&
                Array.isArray(t[0].multi_detail_lists) &&
                "string" == typeof t[0].multi_detail_lists[0].listid &&
                "number" == typeof t[0].multi_detail_lists[0].list_type &&
                "number" == typeof t[0].multi_detail_lists[0].list_state
            : t && Array.isArray(t) && 0 == t.length;
        }
      }
      function P(e, t) {
        const a = (0, v.NW)();
        return (
          (0, s.useEffect)(() => {
            if (C.Get().GetListDetails(t) || !e) return;
            const o = r().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  var n, r;
                  const i = yield C.Get().LoadListDetails(e, t);
                  if (!o.token.reason)
                    if (
                      null === (n = null == i ? void 0 : i.apps) || void 0 === n
                        ? void 0
                        : n.length
                    ) {
                      const e = [];
                      for (const t of i.apps) {
                        const a =
                          null ===
                            (r = null == t ? void 0 : t.recommended_app) ||
                          void 0 === r
                            ? void 0
                            : r.appid;
                        a && e.push({ id: a, type: "game" });
                      }
                      (0, m.qr)(
                        e,
                        Object.assign(Object.assign({}, m.NC), {
                          include_assets: !0,
                          include_release: !0,
                        })
                      ),
                        c.ZP.Get().LoadAppIDsBatch(e.map((e) => e.id)),
                        a();
                    } else console.error("Found no list data");
                });
              })(),
              () => o.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          C.Get().GetListDetails(t)
        );
      }
      function I(e) {
        const t = e && u.sV.GetClanInfoByClanAccountID(e),
          [a, n] = (0, s.useState)(!!t);
        return (
          (0, s.useEffect)(() => {
            if (a && e) {
              const t = l.K.InitFromClanID(e);
              u.sV.LoadClanInfoForClanSteamID(t).finally(() => {
                n(!0);
              });
            }
          }, [a, e]),
          t
        );
      }
      function S(e) {
        return (
          Boolean(null == e ? void 0 : e.sale_clan_event_gid) &&
          Boolean(null == e ? void 0 : e.sale_clan_steamid)
        );
      }
      function L(e) {
        const t = (0, v.NW)(),
          a = S(e) ? e.sale_clan_event_gid : null,
          o = a && p.j1.GetClanEventModel(a);
        return (
          (0, s.useEffect)(() => {
            if (o || !S(e)) return;
            const i = r().CancelToken.source();
            return (
              (() => {
                (0, n.mG)(this, void 0, void 0, function* () {
                  p.j1.Init(),
                    yield p.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                      new l.K(e.sale_clan_steamid),
                      a,
                      0
                    ),
                    i.token.reason || t();
                });
              })(),
              () => i.cancel("unmounting CuratorList")
            );
          }, [e, a, o, t]),
          o
        );
      }
      (0, n.gn)([i.LO], C.prototype, "m_mapList", void 0);
    },
    87541: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => A, O: () => D });
      var n = a(67294),
        o = a(77442),
        r = a(7707),
        i = a(35921),
        s = a(39746),
        l = (a(37662), a(67833)),
        u = (a(990), a(77636)),
        c = a(73285),
        d = a(52114),
        p = a(36567),
        m = a(67777),
        _ = a(54104),
        h = a(88335),
        y = a.n(h),
        v = a(88592),
        g = a(71387),
        f = (a(45031), a(75896)),
        E = a(72062),
        b = a(72842),
        C = a(5146),
        P = a(65160),
        I = a(65924),
        S = a(7573),
        L = a(41311),
        w = a(90666);
      const D = "capsule_index_";
      function A(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            strExtraParams: l,
            elElementToAppendToHover: u,
            index: _,
            bAutoFocus: h,
          } = e,
          [v, g] = n.useState(!1),
          [b] = (0, d.jk)(t.id, (0, c.TM)(t.type), o.bk),
          [P] = (0, d.vs)(a && (null == b ? void 0 : b.GetParentAppID()), o.bk),
          A = (0, I.bJ)();
        if (!b) return null;
        const G = Boolean(P);
        return n.createElement(
          i.s,
          {
            className: (0, S.Z)({
              [y().OuterCapsuleContainer]: !0,
              [D + _]: 0 == _,
            }),
            navEntryPreferPosition: s.c4.PREFERRED_CHILD,
            autoFocus: h,
          },
          n.createElement(
            E.zw,
            { appid: b.GetAppID() },
            n.createElement(
              m.ll,
              {
                className: y().CapsuleContainer,
                item: t,
                elElementToAppend: e.elElementToAppendToHover,
                bShowDemoButton: e.bShowDemoButton,
                bShowDeckCompatibilityDialog: e.bShowDeckCompatibilityDialog,
                bHidePrice: e.bHidePrice,
                bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                strExtraParams: e.strExtraParams,
                fnOnHoverStateChange: !w.De.IN_GAMEPADUI && g,
                nCreatorAccountID: e.creatorAccountID,
              },
              n.createElement(
                T,
                Object.assign({}, e, {
                  info: t,
                  bIsHovered: v,
                  bHasParentAppToDisplay: G,
                })
              )
            ),
            Boolean(u) && n.createElement("div", null, u)
          ),
          G &&
            n.createElement(
              r.Ks,
              Object.assign(
                { className: y().CapsuleParentInfo },
                (0, f.h)(P, A, e.strExtraParams)
              ),
              n.createElement(
                E.zw,
                { appid: P.GetAppID() },
                n.createElement(
                  "div",
                  { className: y().ParentType },
                  (0, L.Xx)(
                    11 == b.GetAppType()
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC"
                  )
                ),
                n.createElement(
                  C._,
                  {
                    type: "app",
                    id: P.GetAppID(),
                    strExtraParams: e.strExtraParams,
                  },
                  n.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: p.AppCapsuleImage,
                        alt: P.GetName(),
                        src: P.GetAssets().GetSmallCapsuleURL(),
                      },
                      (0, o.fn)()
                    )
                  )
                )
              )
            )
        );
      }
      function T(e) {
        var t;
        const {
            info: a,
            bHidePriceIfOwned: o,
            bHideStatusBanners: i,
            strExtraParams: s,
            imageType: p,
            bHasParentAppToDisplay: h,
            bUseSubscriptionLayout: y,
            elElementToAppendToHover: f,
            bHidePrice: C,
            bHidePlatforms: S,
            creatorAccountID: L,
            bIsHovered: D,
          } = e,
          [A] = (0, d.jk)(a.id, (0, c.TM)(a.type), { include_platforms: !0 }),
          T = (0, I.bJ)(),
          G = (0, E.Dt)(a.type),
          O = (0, n.useMemo)(
            () => (null == A ? void 0 : A.GetIncludedAppIDsOrSelf()),
            [A]
          ),
          k =
            A &&
            (null == A
              ? void 0
              : A.GetIncludedAppIDsOrSelf().every((e) =>
                  u.jg.Get().BOwnsApp(e)
                ));
        if (!A) return null;
        const N = k && !i,
          R = (0, l.Hf)(
            `${w.De.STORE_BASE_URL}${G}/${a.id}${s ? `?${s}` : ""}`,
            T
          );
        let z,
          B = null;
        if (y && 0 == (null == A ? void 0 : A.GetStoreItemType()))
          B = n.createElement(b.r, { appid: A.GetAppID(), bIsMuted: D });
        else if (f);
        else {
          const e = k && o,
            t = N;
          B = n.createElement(_.Hl, {
            info: a,
            bShowAsMuted: t,
            bHidePrice: C,
            bShowInLibraryInsteadOfPrice: e,
            bHidePlatforms: S,
            creatorAccountID: L,
          });
        }
        return (
          "overrideNavigation" in a &&
            (z = (e) => (
              a.overrideNavigation(),
              e.preventDefault(),
              e.stopPropagation(),
              !1
            )),
          n.createElement(
            r.IS,
            {
              href: z ? null : R,
              style: { display: "block" },
              preferredFocus: h,
              onClick: z,
            },
            n.createElement(g.vs, { appids: O, hide_status_banners: i }),
            n.createElement(_.a4, { imageType: p, info: a }),
            n.createElement(P.y, {
              eDeckCompatibilityCategory:
                null === (t = null == A ? void 0 : A.GetPlatforms()) ||
                void 0 === t
                  ? void 0
                  : t.steam_deck_compat_category,
            }),
            Boolean(D && !(0, m.Hu)()) && n.createElement(v.v, { appInfo: a }),
            B
          )
        );
      }
    },
    13308: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => b, C: () => C });
      var n,
        o = a(67294),
        r = a(96187),
        i = a(95598),
        s = a(70655),
        l = a(48780),
        u = a(80533),
        c = a(30156),
        d = a(7573),
        p = a(13596);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(n || (n = {}));
      let m = n.NotLoaded,
        _ = [];
      function h(e) {
        if (m == n.Loaded) return void e();
        if (m == n.NotLoaded) {
          let e = document.createElement("script");
          e.src = "https://www.youtube.com/iframe_api";
          let t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t), (window.onYouTubeIframeAPIReady = y);
        }
        _.findIndex((t) => e == t) < 0 && _.push(e);
      }
      function y() {
        m = n.Loaded;
        for (let e of _) e();
        _ = [];
      }
      class v extends o.Component {
        constructor(e) {
          super(e),
            (this.m_strPlayerID = ""),
            (this.m_player = null),
            (this.m_playerContainer = null),
            (this.m_bPlayerReady = !1),
            (this.m_strPlayerID = "YoutubePlayer_" + v.s_nPlayerIndex++),
            (this.state = { bYoutubeLoaded: !1 });
        }
        componentWillUnmount() {
          var e;
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), l.Zf(_, e);
        }
        shouldComponentUpdate(e, t) {
          if (!this.m_player) return !1;
          const a = this.props;
          return a.autoplay != e.autoplay ||
            a.controls != e.controls ||
            a.showInfo != e.showInfo ||
            a.video != e.video
            ? (this.CreatePlayer(e), !1)
            : ((a.width == e.width && a.height == e.height) ||
                (this.m_bPlayerReady &&
                  e.width &&
                  e.height &&
                  this.m_player.setSize(e.width, e.height)),
              a.forcePause != e.forcePause);
        }
        componentDidUpdate(e) {
          e.forcePause != this.props.forcePause &&
            (this.props.forcePause
              ? this.m_player.pauseVideo()
              : this.m_player.playVideo());
        }
        DestroyPlayer() {
          if (this.m_player)
            try {
              this.m_player.stopVideo && this.m_player.stopVideo(),
                this.m_player.destroy && this.m_player.destroy();
            } catch (e) {
            } finally {
              this.m_player = null;
            }
        }
        BindPlayerContainer(e) {
          this.m_playerContainer != e &&
            ((this.m_playerContainer = e),
            this.DestroyPlayer(),
            this.m_playerContainer && h(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(e) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const t = !1 === e.autoplay ? 0 : 1,
            a = !0 === e.showInfo ? 1 : 0,
            n = !0 === e.controls ? 1 : 0,
            o = !0 === e.showFullscreenBtn ? 1 : 0,
            r = !0 === e.playsInline ? 1 : 0;
          let i = {
              width: void 0 !== e.width ? String(e.width) : void 0,
              height: void 0 !== e.height ? String(e.height) : void 0,
              videoId: e.video,
              playerVars: {
                autoplay: t,
                showinfo: a,
                autohide: 1,
                fs: o,
                modestbranding: 1,
                rel: 0,
                playsinline: r,
                iv_load_policy: 3,
                controls: n,
                start: e.startSeconds,
              },
              events: {
                onReady: this.OnPlayerReady,
                onStateChange: this.OnPlayerStateChange,
                onError: this.OnError,
              },
            },
            s = this.m_playerContainer.firstElementChild;
          (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(s, i));
        }
        OnPlayerReady(e) {
          if (((this.m_bPlayerReady = !0), this.props.onVideoInfoChanged)) {
            let e = this.m_player.getVideoData(),
              t = { strAuthor: "", strTitle: "", strVideoID: "" };
            e.author && (t.strAuthor = e.author),
              e.title && (t.strTitle = e.title),
              e.video_id && (t.strVideoID = e.video_id),
              this.props.onVideoInfoChanged(t);
          }
          this.props.width &&
            this.props.height &&
            this.m_player.setSize(this.props.width, this.props.height),
            this.props.autoplay && this.m_player.playVideo(),
            this.props.onPlayerReady && this.props.onPlayerReady();
        }
        OnPlayerStateChange(e) {
          switch (e.data) {
            case YT.PlayerState.UNSTARTED:
              break;
            case YT.PlayerState.BUFFERING:
              this.props.onBuffering && this.props.onBuffering();
              break;
            case YT.PlayerState.PLAYING:
              this.props.onPlaying && this.props.onPlaying();
              break;
            case YT.PlayerState.PAUSED:
              this.props.onPaused && this.props.onPaused();
              break;
            case YT.PlayerState.ENDED:
              this.props.onMovieEnd && this.props.onMovieEnd();
          }
        }
        OnError(e) {
          console.log("Youtube: Playback failed", e),
            this.props.onError && this.props.onError(e);
        }
        OnPlayerLeftView() {
          this.props.autopause &&
            this.m_player &&
            this.m_bPlayerReady &&
            this.m_player.pauseVideo();
        }
        PlayVideo(e) {
          this.m_player &&
            this.m_bPlayerReady &&
            (e && this.m_player.seekTo(0, !0), this.m_player.playVideo());
        }
        render() {
          const e = o.createElement(
            "div",
            {
              key: this.m_strPlayerID,
              ref: this.BindPlayerContainer,
              className: (0, d.Z)("YoutubePlayer", this.props.classnames),
            },
            o.createElement(p.V, { className: "YoutubePlayerThrobber" })
          );
          return this.props.autopause
            ? o.createElement(u.h, { onLeave: this.OnPlayerLeftView }, e)
            : e;
        }
      }
      (v.s_nPlayerIndex = 0),
        (0, s.gn)([c.ak], v.prototype, "BindPlayerContainer", null),
        (0, s.gn)([c.ak], v.prototype, "OnYoutubeScriptsReady", null),
        (0, s.gn)([c.ak], v.prototype, "CreatePlayer", null),
        (0, s.gn)([c.ak], v.prototype, "OnPlayerReady", null),
        (0, s.gn)([c.ak], v.prototype, "OnPlayerStateChange", null),
        (0, s.gn)([c.ak], v.prototype, "OnError", null),
        (0, s.gn)([c.ak], v.prototype, "OnPlayerLeftView", null),
        (0, s.gn)([c.ak], v.prototype, "PlayVideo", null);
      var g = a(41311),
        f = a(47784),
        E = a.n(f);
      const b = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, n] = o.useState(0);
          o.useEffect(() => n(0), [e.video]);
          const i = o.useRef();
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return o.createElement(r.J, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return o.createElement("img", {
              src: e.altImg,
              className: e.className,
            });
          {
            const r =
                "https://img.youtube.com/vi/" + e.video + "/" + t[a] + ".jpg",
              s = () => {
                a + 1 < t.length && n(a + 1);
              },
              l = () => {
                i.current && i.current.naturalHeight < 91 && s();
              };
            return o.createElement("img", {
              ref: i,
              onLoad: l,
              onError: s,
              src: r,
              className: (0, d.Z)(E().YoutubePreviewImage, e.className),
            });
          }
        },
        C = (e) => {
          const [t, a] = o.useState(!1);
          if (
            (o.useEffect(() => {
              e.preloadYoutubeScripts && h(() => {});
            }, [e.preloadYoutubeScripts]),
            t)
          )
            return o.createElement(
              v,
              Object.assign({}, e, {
                classnames: (0, d.Z)(E().YoutubePlayer, e.classnames),
              })
            );
          {
            const t = (t) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                a(!0),
                t.stopPropagation(),
                t.preventDefault();
            };
            return o.createElement(
              "div",
              {
                className: (0, d.Z)(
                  "YoutubePreviewContainer",
                  E().YoutubePreviewImage,
                  e.imageClassnames
                ),
                onClick: t,
              },
              o.createElement(b, {
                className: "YoutubePreviewImage",
                altImgWithFallback: e.altImgWithFallback,
                altImg: e.altImg,
                video: e.video,
              }),
              o.createElement(
                "div",
                { className: "YoutubePreviewPlay" },
                o.createElement(i.GhU, null)
              ),
              o.createElement(
                "div",
                { className: "VideoHintText" },
                (0, g.Xx)("#EventCalendar_WatchYouTubeVideo")
              )
            );
          }
        };
    },
  },
]);
