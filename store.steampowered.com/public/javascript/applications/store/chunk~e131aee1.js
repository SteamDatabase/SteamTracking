/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    E4gw: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return A;
      }),
        a.d(t, "a", function () {
          return D;
        });
      var n = a("q1tI"),
        o = a.n(n),
        r = a("GpIp"),
        i = a("fsrB"),
        s = a("Lsvi"),
        l = a("O8Yk"),
        c = (a("XrGS"), a("lfGQ")),
        u = (a("yfxr"), a("FmLm")),
        d = a("hAgw"),
        p = a("RrtU"),
        m = a("qTYy"),
        _ = a("oEKi"),
        h = a("4EJs"),
        y = a("zy5s"),
        b = a.n(y),
        v = a("zWNq"),
        f = a("KXdY"),
        g = (a("i1T+"), a("vx0u")),
        E = a("1mk1"),
        C = a("j/dN"),
        P = a("5ZQm"),
        O = a("bCaE"),
        I = a("0JCO"),
        S = a("GbHM"),
        w = a("GXif"),
        L = a("/Q1a");
      const A = "capsule_index_";
      function D(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            strExtraParams: n,
            elElementToAppendToHover: c,
            index: u,
            bAutoFocus: h,
          } = e,
          [y, v] = o.a.useState(!1),
          [f] = Object(p.a)(t.id, Object(d.d)(t.type), r.e),
          [C] = Object(p.b)(
            a && (null == f ? void 0 : f.GetParentAppID()),
            r.e
          ),
          O = Object(I.c)();
        if (!f) return null;
        const D = Boolean(C);
        return o.a.createElement(
          s.a,
          {
            className: Object(S.a)({
              [b.a.OuterCapsuleContainer]: !0,
              [A + u]: 0 == u,
            }),
            navEntryPreferPosition: l.d.PREFERRED_CHILD,
            autoFocus: h,
          },
          o.a.createElement(
            E.a,
            { appid: f.GetAppID() },
            o.a.createElement(
              _.d,
              {
                className: b.a.CapsuleContainer,
                item: t,
                elElementToAppend: e.elElementToAppendToHover,
                bShowDemoButton: e.bShowDemoButton,
                bShowDeckCompatibilityDialog: e.bShowDeckCompatibilityDialog,
                bHidePrice: e.bHidePrice,
                bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                strExtraParams: e.strExtraParams,
                fnOnHoverStateChange: !L.d.IN_GAMEPADUI && v,
                nCreatorAccountID: e.creatorAccountID,
              },
              o.a.createElement(
                j,
                Object.assign({}, e, {
                  info: t,
                  bIsHovered: y,
                  bHasParentAppToDisplay: D,
                })
              )
            ),
            Boolean(c) && o.a.createElement("div", null, c)
          ),
          D &&
            o.a.createElement(
              i.e,
              Object.assign(
                { className: b.a.CapsuleParentInfo },
                Object(g.a)(C, O, e.strExtraParams)
              ),
              o.a.createElement(
                E.a,
                { appid: C.GetAppID() },
                o.a.createElement(
                  "div",
                  { className: b.a.ParentType },
                  Object(w.g)(
                    11 == f.GetAppType()
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC"
                  )
                ),
                o.a.createElement(
                  P.a,
                  {
                    type: "app",
                    id: C.GetAppID(),
                    strExtraParams: e.strExtraParams,
                  },
                  o.a.createElement(
                    "img",
                    Object.assign(
                      {
                        loading: "lazy",
                        className: m.AppCapsuleImage,
                        alt: C.GetName(),
                        src: C.GetAssets().GetSmallCapsuleURL(),
                      },
                      Object(r.c)()
                    )
                  )
                )
              )
            )
        );
      }
      function j(e) {
        var t;
        const {
            info: a,
            bHidePriceIfOwned: r,
            bHideStatusBanners: s,
            strExtraParams: l,
            imageType: m,
            bHasParentAppToDisplay: y,
            bUseSubscriptionLayout: b,
            elElementToAppendToHover: g,
            bHidePrice: P,
            bHidePlatforms: S,
            creatorAccountID: w,
            bIsHovered: A,
          } = e,
          [D] = Object(p.a)(a.id, Object(d.d)(a.type), {
            include_platforms: !0,
          }),
          j = Object(I.c)(),
          T = Object(E.b)(a.type),
          G = Object(n.useMemo)(
            () => (null == D ? void 0 : D.GetIncludedAppIDsOrSelf()),
            [D]
          ),
          k =
            D &&
            (null == D
              ? void 0
              : D.GetIncludedAppIDsOrSelf().every((e) =>
                  u.a.Get().BOwnsApp(e)
                ));
        if (!D) return null;
        const N = k && !s,
          R = Object(c.b)(
            `${L.d.STORE_BASE_URL}${T}/${a.id}${l ? `?${l}` : ""}`,
            j
          );
        let Y,
          z = null;
        if (b && 0 == (null == D ? void 0 : D.GetStoreItemType()))
          z = o.a.createElement(C.a, { appid: D.GetAppID(), bIsMuted: A });
        else if (g);
        else {
          const e = k && r,
            t = N;
          z = o.a.createElement(h.a, {
            info: a,
            bShowAsMuted: t,
            bHidePrice: P,
            bShowInLibraryInsteadOfPrice: e,
            bHidePlatforms: S,
            creatorAccountID: w,
          });
        }
        return (
          "overrideNavigation" in a &&
            (Y = (e) => (
              a.overrideNavigation(),
              e.preventDefault(),
              e.stopPropagation(),
              !1
            )),
          o.a.createElement(
            i.c,
            {
              href: Y ? null : R,
              style: { display: "block" },
              preferredFocus: y,
              onClick: Y,
            },
            o.a.createElement(f.c, { appids: G, hide_status_banners: s }),
            o.a.createElement(h.b, { imageType: m, info: a }),
            o.a.createElement(O.a, {
              eDeckCompatibilityCategory:
                null === (t = null == D ? void 0 : D.GetPlatforms()) ||
                void 0 === t
                  ? void 0
                  : t.steam_deck_compat_category,
            }),
            Boolean(A && !Object(_.a)()) &&
              o.a.createElement(v.a, { appInfo: a }),
            z
          )
        );
      }
    },
    T9kP: function (e, t, a) {
      e.exports = {
        YoutubePreviewImage: "youtubepreviewimage_YoutubePreviewImage_MzScK",
        YoutubePlayer: "youtubepreviewimage_YoutubePlayer_3uK6c",
      };
    },
    lmAv: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return g;
      }),
        a.d(t, "b", function () {
          return C;
        }),
        a.d(t, "f", function () {
          return P;
        }),
        a.d(t, "e", function () {
          return O;
        }),
        a.d(t, "a", function () {
          return I;
        }),
        a.d(t, "d", function () {
          return S;
        });
      var n = a("mrSG"),
        o = a("vDqi"),
        r = a.n(o),
        i = a("2vnA"),
        s = a("q1tI"),
        l = (a("msu0"), a("Zdsb"), a("XrGS"), a("oleE")),
        c = a("wijF"),
        u = a("44wC"),
        d = a("FmLm"),
        p = a("KVor"),
        m = a("upZW"),
        _ = (a("sTxY"), a("ApMK")),
        h = a("f5iL"),
        y = a("TqgT"),
        b = a("hCpY"),
        v = a("/Q1a");
      function f(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : (Object(h.a)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata
            ),
            (e.list_jsondata = {}));
      }
      const g = "0";
      function E(e, t) {
        (t.localized_flat_title = Object(_.e)([], 30, null)),
          (t.localized_flat_blurb = Object(_.e)([], 30, null)),
          (t.localized_flat_link = Object(_.e)([], 30, null)),
          t.title !== g && (t.localized_flat_title[e] = t.title),
          t.blurb !== g && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== g && (t.localized_flat_link[e] = t.link),
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
            "dev" == v.d.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = Object(v.h)("curatorlistdata", "application_config");
          ("dev" != v.d.WEB_UNIVERSE && "beta" != v.d.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " +
                (null == e ? void 0 : e.length),
              e
            ),
            this.ValidateStoreDefault(e) &&
              Object(i.G)(() => {
                e.forEach((e) => {
                  e.multi_detail_lists.forEach((t) => {
                    f(t),
                      E(e.curation_language, t),
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
          return Object(n.a)(this, void 0, void 0, function* () {
            if (this.m_mapList.has(t)) return this.m_mapList.get(t);
            const n =
                v.d.STORE_BASE_URL +
                "curator/" +
                e.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              i = { listid: t };
            try {
              const s = yield r.a.get(n, {
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
                  Object(h.a)(
                    t == (null == a ? void 0 : a.listid),
                    "Wanted" + t + "but got" + (null == a ? void 0 : a.listid)
                  ),
                  f(a),
                  E(s.data.curation_language, a),
                  this.m_mapList.set(t, a),
                  this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                  a
                );
              }
            } catch (e) {
              const t = Object(y.a)(e);
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
          return Object(n.a)(this, void 0, void 0, function* () {
            if (
              !v.l.logged_in ||
              (d.a.Get().BIsLoaded() &&
                0 == d.a.Get().GetFollowedCuratorCount())
            )
              return [];
            const n = v.d.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              o = {
                clan_account_id: e.GetAccountID(),
                clan_event_gid: t,
                origin: self.origin,
                curator_clan_account_followed: d.a.Get().BIsLoaded()
                  ? d.a.Get().GetFollowedCuratorsAccountID().join(",")
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
          return Object(n.a)(this, void 0, void 0, function* () {
            if (this.m_mapEventGIDToLists.has(t))
              return this.m_mapEventGIDToLists.get(t);
            const n = v.d.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
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
          var c;
          return Object(n.a)(this, void 0, void 0, function* () {
            try {
              const a = yield r.a.get(e, {
                params: t,
                cancelToken: null == l ? void 0 : l.token,
              });
              if (
                1 ==
                (null === (c = null == a ? void 0 : a.data) || void 0 === c
                  ? void 0
                  : c.success)
              ) {
                const e = new Array();
                return (
                  Object(i.G)(() => {
                    a.data.matches &&
                      a.data.matches.forEach((t) => {
                        t.multi_detail_lists.forEach((a) => {
                          this.m_mapListIDToClanAccount.set(
                            a.listid,
                            t.clan_account_id
                          ),
                            f(a),
                            E(t.curation_language, a),
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
              const t = Object(y.a)(e);
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
        const a = Object(b.f)();
        return (
          Object(s.useEffect)(() => {
            if (C.Get().GetListDetails(t) || !e) return;
            const o = r.a.CancelToken.source();
            return (
              (() => {
                Object(n.a)(this, void 0, void 0, function* () {
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
                      Object(m.g)(
                        e,
                        Object.assign(Object.assign({}, m.i), {
                          include_assets: !0,
                          include_release: !0,
                        })
                      ),
                        u.a.Get().LoadAppIDsBatch(e.map((e) => e.id)),
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
      function O(e) {
        const t = e && c.a.GetClanInfoByClanAccountID(e),
          [a, n] = Object(s.useState)(!!t);
        return (
          Object(s.useEffect)(() => {
            if (a && e) {
              const t = l.a.InitFromClanID(e);
              c.a.LoadClanInfoForClanSteamID(t).finally(() => {
                n(!0);
              });
            }
          }, [a, e]),
          t
        );
      }
      function I(e) {
        return (
          Boolean(null == e ? void 0 : e.sale_clan_event_gid) &&
          Boolean(null == e ? void 0 : e.sale_clan_steamid)
        );
      }
      function S(e) {
        const t = Object(b.f)(),
          a = I(e) ? e.sale_clan_event_gid : null,
          o = a && p.b.GetClanEventModel(a);
        return (
          Object(s.useEffect)(() => {
            if (o || !I(e)) return;
            const i = r.a.CancelToken.source();
            return (
              (() => {
                Object(n.a)(this, void 0, void 0, function* () {
                  p.b.Init(),
                    yield p.b.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                      new l.a(e.sale_clan_steamid),
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
      Object(n.b)([i.C], C.prototype, "m_mapList", void 0);
    },
    qTYy: function (e, t, a) {
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
    yENa: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return E;
      }),
        a.d(t, "b", function () {
          return C;
        });
      var n,
        o = a("q1tI"),
        r = a("poS6"),
        i = a("e356"),
        s = a("mrSG"),
        l = a("ApMK"),
        c = a("uuth"),
        u = a("hCpY"),
        d = a("GbHM"),
        p = a("kWcV");
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
      class b extends o.Component {
        constructor(e) {
          super(e),
            (this.m_strPlayerID = ""),
            (this.m_player = null),
            (this.m_playerContainer = null),
            (this.m_bPlayerReady = !1),
            (this.m_strPlayerID = "YoutubePlayer_" + b.s_nPlayerIndex++),
            (this.state = { bYoutubeLoaded: !1 });
        }
        componentWillUnmount() {
          var e;
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), l.b(_, e);
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
              className: Object(d.a)("YoutubePlayer", this.props.classnames),
            },
            o.createElement(p.a, { className: "YoutubePlayerThrobber" })
          );
          return this.props.autopause
            ? o.createElement(c.a, { onLeave: this.OnPlayerLeftView }, e)
            : e;
        }
      }
      (b.s_nPlayerIndex = 0),
        Object(s.b)([u.b], b.prototype, "BindPlayerContainer", null),
        Object(s.b)([u.b], b.prototype, "OnYoutubeScriptsReady", null),
        Object(s.b)([u.b], b.prototype, "CreatePlayer", null),
        Object(s.b)([u.b], b.prototype, "OnPlayerReady", null),
        Object(s.b)([u.b], b.prototype, "OnPlayerStateChange", null),
        Object(s.b)([u.b], b.prototype, "OnError", null),
        Object(s.b)([u.b], b.prototype, "OnPlayerLeftView", null),
        Object(s.b)([u.b], b.prototype, "PlayVideo", null);
      var v = a("GXif"),
        f = a("T9kP"),
        g = a.n(f);
      const E = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, n] = o.useState(0);
          o.useEffect(() => n(0), [e.video]);
          const i = o.useRef();
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return o.createElement(r.b, {
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
              className: Object(d.a)(g.a.YoutubePreviewImage, e.className),
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
              b,
              Object.assign({}, e, {
                classnames: Object(d.a)(g.a.YoutubePlayer, e.classnames),
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
                className: Object(d.a)(
                  "YoutubePreviewContainer",
                  g.a.YoutubePreviewImage,
                  e.imageClassnames
                ),
                onClick: t,
              },
              o.createElement(E, {
                className: "YoutubePreviewImage",
                altImgWithFallback: e.altImgWithFallback,
                altImg: e.altImg,
                video: e.video,
              }),
              o.createElement(
                "div",
                { className: "YoutubePreviewPlay" },
                o.createElement(i.Ab, null)
              ),
              o.createElement(
                "div",
                { className: "VideoHintText" },
                Object(v.g)("#EventCalendar_WatchYouTubeVideo")
              )
            );
          }
        };
    },
  },
]);
