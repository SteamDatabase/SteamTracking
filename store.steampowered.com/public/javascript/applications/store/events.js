/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [74268],
    {
      97442: (O, ye, i) => {
        "use strict";
        i.d(ye, { r: () => G });
        var e = i(7850),
          Y = i(24660),
          P = i(19298),
          J = i(17083),
          F = i(36707),
          ee = i(2108),
          te = i.n(ee);
        function G(w) {
          const { crumbs: B, className: ne, bHideLastArrow: ae } = w;
          return !B || B.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: (0, F.A)(ee.BreadContainer, ne),
                children: [
                  (0, e.jsx)(P.Z, {
                    className: "blockbg",
                    "flow-children": "row",
                    children: B.map((T, fe) => {
                      const L = new Array();
                      return (
                        T.url.startsWith("http")
                          ? L.push(
                              (0, e.jsx)(
                                Y.Ii,
                                { href: T.url, children: T.name },
                                "anchor_" + T.name,
                              ),
                            )
                          : L.push(
                              (0, e.jsx)(
                                J.N_,
                                { to: T.url, children: T.name },
                                "link_" + T.name,
                              ),
                            ),
                        (!ae || fe < B.length - 1) &&
                          L.push(
                            (0, e.jsx)(
                              "span",
                              { children: "\xA0> " },
                              T.name + "span",
                            ),
                          ),
                        L
                      );
                    }),
                  }),
                  (0, e.jsx)("div", { style: { clear: "left" } }),
                ],
              });
        }
      },
      85528: (O, ye, i) => {
        "use strict";
        i.d(ye, { Vw: () => he });
        var e = i(14947),
          Y = i(99412),
          P = i(72604),
          J = i(35038),
          F = i(67529),
          ee = i(3166);
        class te {
          m_nLastUpdated = 0;
          m_mapLanguages = e.sH.map();
          m_appid;
          m_fetching = null;
          constructor(g) {
            this.m_appid = g;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(g) {
            return this.m_mapLanguages.has(g)
              ? this.m_mapLanguages.get(g)
              : null;
          }
          Localize(g, m) {
            let C = ee.TS.LANGUAGE,
              _ = this.GetTokenList(C),
              j = C != "english" ? this.GetTokenList("english") : null;
            return G(g, _, j, this.m_appid, m);
          }
          SubstituteParams(g, m) {
            let C = ee.TS.LANGUAGE,
              _ = this.GetTokenList(C),
              j = C != "english" ? this.GetTokenList("english") : null;
            return w(g, _, j, this.m_appid, m);
          }
        }
        function G(R, g, m, C, _) {
          if (!R.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                R,
                "appid",
                C,
                "tokens",
                g,
              ),
              ""
            );
          let j = R;
          R = R.toLowerCase();
          let v = "";
          if (
            (g && g.has(R) && (v = g.get(R)),
            !v && m && m.has(R) && (v = m.get(R)),
            v)
          )
            v = w(v, g, m, C, _);
          else if (
            ((g || m) &&
              console.log(
                "No loc found for appid",
                C,
                j,
                "Tokens:",
                g,
                "Fallback:",
                m,
              ),
            g && ee.TS.EUNIVERSE != Y.wLO)
          )
            return R;
          return v;
        }
        function w(R, g, m, C, _) {
          let j = /{[A-za-z0-9_%#:]+}/g,
            v = R.match(j);
          if (v)
            for (let l of v) {
              let W = l.slice(1, -1),
                Z = B(W, _),
                X = G(Z, g, m, C, _);
              if (!X) return "";
              R = R.replace(l, X);
            }
          return (R = B(R, _)), R;
        }
        function B(R, g) {
          let m = /%[A-Za-z0-9_:]+%/g,
            C = R.match(m);
          if (C)
            for (let _ of C) {
              let j = _.slice(1, -1).toLowerCase(),
                v = g.get(j);
              v == null
                ? console.log("No rich presence found for", j)
                : (R = R.replace(_, v));
            }
          return R;
        }
        var ne = i(72849),
          ae = i(71742),
          T = i(8323),
          fe = Object.defineProperty,
          L = Object.getOwnPropertyDescriptor,
          me = (R, g, m, C) => {
            for (
              var _ = C > 1 ? void 0 : C ? L(g, m) : g, j = R.length - 1, v;
              j >= 0;
              j--
            )
              (v = R[j]) && (_ = (C ? v(g, m, _) : v(_)) || _);
            return C && _ && fe(g, m, _), _;
          };
        function Ee(R) {
          return useObserver(() => he.GetAppInfo(R));
        }
        function V(R) {
          return useObserver(() => R.map((g) => he.GetAppInfo(g)));
        }
        const we = 3600 * 24 * 7 * 2;
        class ie {
          m_CMInterface;
          m_mapAppInfo = e.sH.map();
          m_mapRichPresenceLoc = e.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new T.lu();
          constructor() {
            (0, e.Gn)(this);
          }
          Init(g) {
            this.m_CMInterface = g;
          }
          BHavePendingAppInfoRequests() {
            return (
              this.m_setPendingAppInfo.size > 0 ||
              this.m_cAppInfoRequestsInFlight > 0
            );
          }
          get CMInterface() {
            return this.m_CMInterface;
          }
          RegisterCallbackOnLoad(g) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, ae.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                g();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(g);
          }
          IsLoadingAppID(g) {
            return this.m_setPendingAppInfo.has(g);
          }
          GetAppInfo(g) {
            if (
              ((0, ae.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(g))
            ) {
              let m = new F.by(g);
              this.m_mapAppInfo.set(g, m), this.QueueAppInfoRequest(g);
            }
            return this.m_mapAppInfo.get(g);
          }
          QueueAppInfoRequest(g) {
            return g
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (m) => (this.m_PendingAppInfoResolve = m),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(g),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const g = this.m_PendingAppInfoResolve,
              m = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(m),
              g?.();
          }
          async LoadAppInfoBatch(g) {
            this.m_cAppInfoRequestsInFlight++;
            let m = await this.LoadAppInfoBatchFromLocalCache(g);
            if (m.length) {
              console.log("Loading batch of App Info from Steam: ", m),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let C = J.w.Init(ne._z);
              C.Body().set_language((0, Y.sfN)(ee.TS.LANGUAGE));
              const _ = 50;
              for (; m.length > 0; ) {
                const j = Math.min(_, m.length),
                  v = m.slice(0, j);
                (m = m.slice(j)), C.Body().set_appids(v);
                const l = await ne.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  C,
                );
                l.GetEResult() == P.R
                  ? this.OnGetAppsResponse(l)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${l.GetEResult()}, AppIDs:`,
                      v,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(g) {
            let m = [];
            for (let C of g.Body().apps()) {
              let _ = this.m_mapAppInfo.get(C.appid());
              (0, ae.wT)(
                _,
                `Got AppInfo response for unrequested AppID: ${C.appid()}`,
              ),
                _ &&
                  ((_ = new F.by(C.appid())),
                  _.DeserializeFromMessage(C),
                  this.m_mapAppInfo.set(C.appid(), _),
                  m.push(_));
            }
            this.SaveAppInfoBatchToLocalCache(m);
          }
          OnAppOverviewChange(g) {
            for (let m of g) {
              const C = new F.by(m.appid());
              C.DeserializeFromAppOverview(m),
                C.is_initialized && this.m_mapAppInfo.set(m.appid(), C);
            }
          }
          async EnsureAppInfoForAppIDs(g) {
            let m = !1;
            return (
              g.forEach((C) => {
                let _ = this.m_mapAppInfo.get(C);
                if (_) {
                  _.is_valid || (m = !0);
                  return;
                }
                (_ = new F.by(C)),
                  this.m_mapAppInfo.set(C, _),
                  this.QueueAppInfoRequest(C),
                  (m = !0);
              }),
              m && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(g) {
            this.m_CacheStorage = g;
          }
          GetCacheKeyForAppID(g) {
            return "APPINFO_" + g;
          }
          async LoadAppInfoBatchFromLocalCache(g) {
            if (!this.m_CacheStorage) return g;
            console.log("Loading batch of App Info from Local Cache: ", g);
            const m = new Date(new Date().getTime() - we * 1e3),
              C = async (l) => {
                const W = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(l),
                );
                if (!W) return l;
                let Z = this.m_mapAppInfo.get(l);
                return (
                  (0, ae.wT)(
                    Z,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  Z
                    ? ((Z = new F.by(l)),
                      Z.DeserializeFromCacheObject(W),
                      Z.is_initialized
                        ? (this.m_mapAppInfo.set(l, Z),
                          Z.time_updated_from_server < m ? l : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            l,
                            W,
                          ),
                          l))
                    : l
                );
              };
            let _ = g.map((l) => C(l));
            return (await Promise.all(_)).filter((l) => l !== null);
          }
          async SaveAppInfoBatchToLocalCache(g) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                g.map((m) => m.appid),
              );
              for (const m of g) {
                const C = m.SerializeToCacheObject();
                C &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(m.appid),
                    C,
                  );
              }
            }
          }
          Localize(g, m, C) {
            const _ = this.GetRichPresenceLoc(g);
            return _
              ? _.Localize(m, C)
              : ee.TS.EUNIVERSE != Y.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${g} token ${m}, this may not have had a chance to load yet`,
                  ),
                  m)
                : "";
          }
          GetRichPresenceLoc(g) {
            if (this.m_mapRichPresenceLoc.has(g.toString())) {
              let C = this.m_mapRichPresenceLoc.get(g.toString());
              return (
                C.m_nLastUpdated + 1e3 * 60 * F.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(C),
                C
              );
            }
            let m = new te(g);
            return (
              this.m_mapRichPresenceLoc.set(g.toString(), m),
              this.QueueRichPresenceLocRequest(m),
              m
            );
          }
          GetRichPresenceLocAsync(g) {
            let m = this.GetRichPresenceLoc(g);
            return m.m_nLastUpdated ? Promise.resolve(m) : m.m_fetching;
          }
          OnRichPresenceLocUpdate(g, m) {
            g.m_nLastUpdated = Date.now();
            for (let C of m) {
              let _ = C.language(),
                j = g.m_mapLanguages.get(_);
              j
                ? j.clear()
                : (g.m_mapLanguages.set(_, new Map()),
                  (j = g.m_mapLanguages.get(_)));
              for (let v of C.tokens())
                j?.set(v.name().toLowerCase(), v.value());
            }
          }
          QueueRichPresenceLocRequest(g) {
            return (
              g.m_fetching ||
                ((g.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let m = J.w.Init(ne.zQ);
                    return (
                      m.Body().set_appid(g.GetAppID()),
                      m.Body().set_language(ee.TS.LANGUAGE),
                      ne.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        m,
                      )
                    );
                  })
                  .then(
                    (m) => (
                      (g.m_fetching = null),
                      m.GetEResult() != P.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            g,
                            m.Body().token_lists(),
                          ),
                          Promise.resolve(g))
                    ),
                  )),
                g.m_fetching.catch(() => {
                  g.m_fetching = null;
                })),
              g.m_fetching
            );
          }
        }
        me([e.XI], ie.prototype, "OnGetAppsResponse", 1),
          me([e.XI], ie.prototype, "OnRichPresenceLocUpdate", 1);
        const he = new ie();
      },
      13532: (O, ye, i) => {
        "use strict";
        i.d(ye, { l: () => ae, r: () => ne });
        var e = i(7850),
          Y = i(90626),
          P = i(39239),
          J = i(36118),
          F = i(32608),
          ee = i(36707),
          te = i(18210),
          G = i(70758),
          w = i.n(G),
          B = i(1123);
        const ne = (T) => {
            const fe = ["maxresdefault", "mqdefault", "default"],
              [L, me] = Y.useState(0);
            Y.useEffect(() => me(0), [T.video]);
            const Ee = Y.useRef(void 0);
            if (T.altImgWithFallback && T.altImgWithFallback.length > 0)
              return (0, e.jsx)(P.o, {
                className: T.className,
                srcs: T.altImgWithFallback,
              });
            if (T.altImg)
              return (0, e.jsx)("img", {
                src: T.altImg,
                className: T.className,
              });
            {
              const V =
                  "https://img.youtube.com/vi/" +
                  T.video +
                  "/" +
                  fe[L] +
                  ".jpg",
                we = () => {
                  L + 1 < fe.length && me(L + 1);
                },
                ie = () => {
                  Ee.current && Ee.current.naturalHeight < 91 && we();
                };
              return (0, e.jsx)("img", {
                ref: Ee,
                onLoad: ie,
                onError: we,
                src: V,
                className: (0, ee.A)(w().YoutubePreviewImage, T.className),
              });
            }
          },
          ae = (T) => {
            const [fe, L] = Y.useState(!1);
            (0, F.VC)(!!T.preloadYoutubeScripts);
            const me = (0, B.Rp)("youtube");
            if (!fe || !me) {
              const Ee = (V) => {
                T.onPlayerActivated && T.onPlayerActivated(),
                  L(!0),
                  V.stopPropagation(),
                  V.preventDefault();
              };
              return (0, e.jsxs)("div", {
                className: (0, ee.A)(
                  "YoutubePreviewContainer",
                  w().YoutubePreviewImage,
                  T.imageClassnames,
                ),
                onClick: me ? Ee : void 0,
                children: [
                  (0, e.jsx)(ne, {
                    className: "YoutubePreviewImage",
                    altImgWithFallback: T.altImgWithFallback,
                    altImg: T.altImg,
                    video: T.video,
                  }),
                  me &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("div", {
                          className: "YoutubePreviewPlay",
                          children: (0, e.jsx)(J.IOc, {}),
                        }),
                        (0, e.jsx)("div", {
                          className: "VideoHintText",
                          children: (0, te.we)(
                            "#EventCalendar_WatchYouTubeVideo",
                          ),
                        }),
                      ],
                    }),
                ],
              });
            } else
              return (0, e.jsx)(F.N1, {
                ...T,
                classnames: (0, ee.A)(w().YoutubePlayer, T.classnames),
              });
          };
      },
      32558: (O, ye, i) => {
        "use strict";
        i.r(ye), i.d(ye, { default: () => Wo });
        var e = i(7850),
          Y = i(58732),
          P = i(92757),
          J = i(76559),
          F = i(179),
          ee = i(41735),
          te = i.n(ee),
          G = i(75844),
          w = i(90626),
          B = i(99412),
          ne = i(32093),
          ae = i(72849),
          T = i(813),
          fe = i(53025),
          L = i(25792),
          me = i(85671),
          Ee = i(19188),
          V = i(56492),
          we = i(90537),
          ie = i(55483),
          he = i(19298),
          R = i(20169),
          g = i(95174),
          m = i(33924),
          C = i.n(m),
          _ = i(95695),
          j = i.n(_),
          v = i(36707),
          l = i(18210);
        function W(n) {
          const { events: t, clanAccountID: s, onViewAll: o, children: a } = n,
            { data: r } = (0, ie.TB)(s);
          return !t.length || !r
            ? null
            : (0, e.jsx)(L.tH, {
                children: (0, e.jsxs)("div", {
                  className: (0, v.A)(C().OtherEventsCtn, "OtherEventsCtn"),
                  children: [
                    (0, e.jsxs)("div", {
                      className: j().EventSectionTitleCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, v.A)(
                            j().EventSectionTitle,
                            "EventSectionTitle",
                          ),
                          children: (0, l.PP)(
                            "#EventBrowse_MoreEventsTitle",
                            r.group_name,
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: j().EventSectionSpacer,
                          children: "\xA0",
                        }),
                        o
                          ? (0, e.jsx)(he.Z, {
                              focusable: !0,
                              className: j().EventSectionMoreBtn,
                              onActivate: o,
                              children: (0, l.we)("#EventBrowse_MoreEventsBtn"),
                            })
                          : (0, e.jsx)(V.tj, {
                              eventModel: t[0],
                              route: V.PH.k_eViewWebSiteHub,
                              className: j().EventSectionMoreBtn,
                              children: (0, l.we)("#EventBrowse_MoreEventsBtn"),
                            }),
                      ],
                    }),
                    (0, e.jsx)(he.Z, {
                      className: C().OtherEvents,
                      "flow-children": "row",
                      navEntryPreferPosition: R.iU.PREFERRED_CHILD,
                      children: t.map((c) =>
                        (0, e.jsx)(g.u, { event: c }, c.AnnouncementGID),
                      ),
                    }),
                    a,
                  ],
                }),
              });
        }
        var Z = i(41635),
          X = i(85599);
        const le = (0, G.PA)((n) => {
          const {
              clanAccountID: t,
              gidAnnouncement: s,
              partnerEventStore: o,
              trackingLocation: a,
              bViewAllShowInfiniteScroll: r,
            } = n,
            c = J.b.InitFromClanID(t),
            h = (0, we.Y)(),
            d = (0, w.useRef)(null),
            [p, E] = (0, w.useState)([]),
            [A, x] = (0, w.useState)(!0),
            [f, b] = (0, w.useState)(!1);
          return (
            (0, w.useEffect)(
              () => (
                (async () => {
                  d.current &&
                    d.current("PartnerEventRow Initializng new mount");
                  const k = te().CancelToken.source();
                  d.current = k.cancel;
                  const Q = J.b.InitFromClanID(t),
                    q = { only_summaries: !0 };
                  let K = await o.LoadAdjacentPartnerEventsByAnnouncement(
                    s,
                    Q,
                    null,
                    4,
                    4,
                    q,
                    k,
                  );
                  if (!k.token.reason) {
                    K = K || [];
                    let ge = K.filter((ue) => ue.GetAnnouncementGID() != s).map(
                      (ue) => ue.AnnouncementGID,
                    );
                    Z.fW(ge);
                    const qe = ge
                      .slice(0, 3)
                      .map((ue) => o.GetClanEventFromAnnouncementGID(ue))
                      .filter((ue) => !!ue);
                    if ((E(qe), x(!1), a)) {
                      let ue = !1;
                      if (o.BHasClanAnnouncementGID(s)) {
                        let Ce = o.GetClanEventFromAnnouncementGID(s);
                        Ce &&
                          Ce.BIsPartnerEvent() &&
                          Ce.BIsVisibleEvent() &&
                          (h.RecordEventRead(Ce, a), (ue = !0));
                      }
                      qe.length > 0 &&
                        (K.filter((Ce) => Ce.BIsPartnerEvent()).forEach((Ce) =>
                          h.RecordEventShown(Ce, a),
                        ),
                        (ue = !0)),
                        ue && h.Flush();
                    }
                  }
                })().catch((k) => {
                  console.error(
                    "PartnerEventRow: loading the adjacent events failed",
                    k,
                  ),
                    x(!1);
                }),
                () => {
                  d.current && d.current("PartnerEventRow: unmounting");
                }
              ),
              [t, s, o, a, h],
            ),
            A
              ? (0, e.jsx)(X.t, { position: "center", size: "medium" })
              : (0, e.jsx)(W, {
                  events: p,
                  clanAccountID: t,
                  onViewAll: r ? () => b(!0) : void 0,
                  children:
                    !!(f && p.length) &&
                    (0, e.jsx)(Ee.N, {
                      appid: p[0].appid,
                      clanSteamID: c,
                      announcementGID: p[0].AnnouncementGID,
                      closeModal: () => b(!1),
                      partnerEventStore: o,
                    }),
                })
          );
        });
        var Ae = i(26589),
          Ie = i(40358),
          pe = i(65946),
          I = i(3166),
          U = i(14947),
          De = i(34592),
          ht = Object.defineProperty,
          yt = Object.getOwnPropertyDescriptor,
          je = (n, t, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? yt(t, s) : t, r = n.length - 1, c;
              r >= 0;
              r--
            )
              (c = n[r]) && (a = (o ? c(t, s, a) : c(a)) || a);
            return o && a && ht(t, s, a), a;
          };
        class xe {
          constructor(t) {
            (0, U.Gn)(this),
              (this.m_stats = {
                event_gid: "0",
                library_overview_shown: 0,
                library_overview_read: 0,
                app_details_spotlight_shown: 0,
                app_details_spotlight_read: 0,
                app_details_activity_shown: 0,
                app_details_activity_read: 0,
                store_app_page_shown: 0,
                store_app_page_read: 0,
                store_front_page_shown: 0,
                store_front_page_read: 0,
                community_hub_shown: 0,
                community_hub_read: 0,
                news_hub_shown: 0,
                news_hub_read: 0,
                event_scroller_read: 0,
                ...t,
              }),
              (this.m_stats.total_showm =
                this.m_stats.library_overview_shown +
                this.m_stats.app_details_activity_shown +
                this.m_stats.app_details_spotlight_shown +
                this.m_stats.store_app_page_shown +
                this.m_stats.store_front_page_shown +
                this.m_stats.community_hub_shown +
                this.m_stats.news_hub_shown),
              (this.m_stats.total_read =
                this.m_stats.library_overview_read +
                this.m_stats.app_details_activity_read +
                this.m_stats.app_details_spotlight_read +
                this.m_stats.store_app_page_read +
                this.m_stats.store_front_page_read +
                this.m_stats.community_hub_read +
                this.m_stats.news_hub_read +
                this.m_stats.event_scroller_read),
              (this.m_lastUpdateTime = t ? Math.floor(Date.now() / 1e3) : 0);
          }
          reset(t) {
            (this.m_stats.library_overview_shown = t.library_overview_shown),
              (this.m_stats.library_overview_read = t.library_overview_read),
              (this.m_stats.app_details_spotlight_shown =
                t.app_details_spotlight_shown),
              (this.m_stats.app_details_spotlight_read =
                t.app_details_spotlight_read),
              (this.m_stats.app_details_activity_shown =
                t.app_details_activity_shown),
              (this.m_stats.app_details_activity_read =
                t.app_details_activity_read),
              (this.m_stats.store_app_page_shown = t.store_app_page_shown),
              (this.m_stats.store_app_page_read = t.store_app_page_read),
              (this.m_stats.store_front_page_shown = t.store_front_page_shown),
              (this.m_stats.store_front_page_read = t.store_front_page_read),
              (this.m_stats.community_hub_shown = t.community_hub_shown),
              (this.m_stats.community_hub_read = t.community_hub_read),
              (this.m_stats.news_hub_shown = t.news_hub_shown),
              (this.m_stats.news_hub_read = t.news_hub_read),
              (this.m_stats.event_scroller_read = t.event_scroller_read),
              (this.m_stats.total_showm =
                t.library_overview_shown +
                t.app_details_activity_shown +
                t.app_details_spotlight_shown +
                t.store_app_page_shown +
                t.store_front_page_shown +
                t.community_hub_shown +
                t.news_hub_shown),
              (this.m_stats.total_read =
                t.library_overview_read +
                t.app_details_activity_read +
                t.app_details_spotlight_read +
                t.store_app_page_read +
                t.store_front_page_read +
                t.community_hub_read +
                t.news_hub_read +
                t.event_scroller_read),
              (this.m_lastUpdateTime = Date.now() / 1e3);
          }
          m_stats = void 0;
          m_lastUpdateTime = void 0;
        }
        je([U.sH], xe.prototype, "m_stats", 2),
          je([U.sH], xe.prototype, "m_lastUpdateTime", 2);
        const wt = 3600;
        class ke {
          m_mapPerEventStats = new Map();
          m_mapSummaryStats = new Map();
          m_bLoadedFromConfig = !1;
          constructor() {
            (0, U.Gn)(this);
          }
          LazyInit() {
            if (!this.m_bLoadedFromConfig) {
              let t = (0, I.Tc)("trackingdatasummary", "application_config");
              this.ValidateStoreDefault(t) &&
                this.m_mapSummaryStats.set(t.clan_account_id, new xe(t));
              let s = (0, I.Tc)("trackingdataevents", "application_config");
              this.ValidateStoreDefaultList(s) &&
                s.forEach((o) => {
                  let a = J.b.InitFromClanID(o.clan_account_id),
                    r = this.GetKey(a, o.event_gid);
                  this.m_mapPerEventStats.set(r, new xe(o));
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          ValidateStoreDefault(t) {
            const s = t;
            return s && typeof s == "object" && s.clan_account_id
              ? typeof s.clan_account_id == "number" && s.clan_account_id > 0
              : !1;
          }
          ValidateStoreDefaultList(t) {
            const s = t;
            return s &&
              Array.isArray(s) &&
              s.length > 0 &&
              typeof s[0] == "object"
              ? typeof s[0].clan_account_id == "number" &&
                  s[0].clan_account_id > 0
              : !1;
          }
          GetStatsFor(t, s) {
            this.LazyInit();
            let o = this.GetKey(t, s);
            return (
              this.m_mapPerEventStats.has(o) ||
                this.m_mapPerEventStats.set(o, new xe(null)),
              this.m_mapPerEventStats.get(o)
            );
          }
          GetTotalStats(t) {
            return (
              this.LazyInit(),
              this.m_mapSummaryStats.has(t.GetAccountID()) ||
                this.m_mapSummaryStats.set(t.GetAccountID(), new xe(null)),
              this.m_mapSummaryStats.get(t.GetAccountID())
            );
          }
          GetKey(t, s) {
            return t.GetAccountID() + "_" + s;
          }
          async LoadStatsForEvents(t, s, o) {
            this.LazyInit();
            let a = Date.now() / 1e3,
              r = s.filter((d) => {
                let p = this.GetKey(t, d),
                  E = this.m_mapPerEventStats.get(p);
                return !E || E.m_stats == null || E.m_lastUpdateTime < a - wt;
              });
            if (!r || r.length == 0) return !0;
            let c = (0, I.xv)() + "actions/ajaxgetpartnereventsreport",
              h = {
                sessionid: (0, I.KC)(),
                clan_account_id: t.GetAccountID(),
                gidlist: r.join(","),
              };
            try {
              let d = await te().get(c, {
                params: h,
                withCredentials: !0,
                cancelToken: o?.token,
              });
              return (
                (0, U.h5)(() => {
                  this.m_mapSummaryStats.set(
                    t.GetAccountID(),
                    new xe(d.data.summary),
                  ),
                    d.data.events_detail.forEach((p) => {
                      let E = this.GetKey(t, p.event_gid);
                      this.m_mapPerEventStats.has(E)
                        ? this.m_mapPerEventStats.get(E).reset(p)
                        : this.m_mapPerEventStats.set(E, new xe(p));
                    });
                }),
                !0
              );
            } catch (d) {
              let p = (0, De.H)(d);
              console.error("CPartnerEventReportingStore " + p.strErrorMsg, p);
            }
            return !1;
          }
          BHasEventStats(t, s) {
            let o = J.b.InitFromClanID(t),
              a = this.GetKey(o, s),
              r = this.m_mapPerEventStats.get(a);
            return !!(r && r.m_stats);
          }
        }
        je([U.sH], ke.prototype, "m_mapPerEventStats", 2),
          je([U.sH], ke.prototype, "m_mapSummaryStats", 2),
          je([U.XI], ke.prototype, "LazyInit", 1);
        const Ve = new ke();
        function pt(n, t) {
          const [s, o] = useState(void 0);
          return (
            useEffect(() => {
              n &&
                t &&
                s == null &&
                Ve.LoadStatsForEvents(n, [t]).then((a) => {
                  o(a ? Ve.GetStatsFor(n, t).m_stats : null);
                });
            }, [n, t, s]),
            s
          );
        }
        var tt = i(13784),
          nt = i(31117),
          vt = i(94520),
          us = i(75654),
          fn = i(48156),
          At = i(90316),
          D = i.n(At),
          ms = i(61431);
        function hs(n) {
          const { appid: t, creatorHome: s } = n;
          return (0, e.jsx)("div", {
            className: D().AppSummaryCtn,
            children: (0, e.jsxs)("div", {
              className: D().EventBodyPosition,
              children: [t ? (0, e.jsx)(ps, { appid: t }) : null, s],
            }),
          });
        }
        function ps(n) {
          const { appid: t } = n,
            { data: s } = (0, Ie.J$)({ appid: t });
          if (!s) return null;
          const o = (0, us.U)(s.type ?? fn.uE.HT);
          return (0, e.jsxs)("div", {
            className: D().AppSummaryWidgetTitleCtn,
            children: [
              (0, e.jsx)("span", {
                className: D().Title,
                children: (0, l.we)("#CreatorHome_ThisGame"),
              }),
              (0, e.jsx)("div", {
                className: (0, v.A)(
                  D().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, e.jsx)(ms.p, {
                  id: t,
                  type: o,
                  bPreferAssetWithoutOverride: !1,
                }),
              }),
            ],
          });
        }
        var gt = i(73259),
          jt = i(28515),
          $ = i(19730),
          zt = i(72609),
          H = i(5065);
        function vs(n) {
          const {
              summary: t,
              bEventIsInModerationQueue: s,
              bIsAllowedInLibrary: o,
              bCompact: a,
              bExpanded: r,
              header: c,
            } = n,
            {
              total_showm: h = 0,
              total_read: d = 0,
              library_overview_shown: p = 0,
              library_overview_read: E = 0,
              app_details_spotlight_shown: A = 0,
              app_details_spotlight_read: x = 0,
              app_details_activity_shown: f = 0,
              app_details_activity_read: b = 0,
              store_app_page_shown: y = 0,
              store_app_page_read: k = 0,
              community_hub_shown: Q = 0,
              community_hub_read: q = 0,
              news_hub_shown: K = 0,
              news_hub_read: ge = 0,
            } = t;
          return d + h == 0
            ? null
            : (0, e.jsxs)("div", {
                className: (0, v.A)(a ? H.EventDetailView : H.DashboardView),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, v.A)(H.HeaderCtn),
                    children: [
                      c,
                      (0, e.jsxs)("div", {
                        className: H.TotalsCtn,
                        children: [
                          (0, e.jsxs)("div", {
                            className: H.HeaderStat,
                            children: [
                              (0, e.jsx)("span", {
                                className: H.StatDescription,
                                children: (0, l.we)(
                                  "#EventDashBoard_SummaryStats_TotalImpressions",
                                ),
                              }),
                              (0, e.jsx)("span", {
                                className: H.StatFigure,
                                children: (0, $.Dq)(h),
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: H.HeaderStat,
                            children: [
                              (0, e.jsx)("span", {
                                className: H.StatDescription,
                                children: (0, l.we)(
                                  "#EventDashBoard_SummaryStats_TotalViews",
                                ),
                              }),
                              (0, e.jsx)("span", {
                                className: H.StatFigure,
                                children: (0, $.Dq)(d),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  !!(o && s) &&
                    (0, e.jsxs)("div", {
                      className: H.ModerationWarningCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: H.ModerationWarning,
                          children: (0, l.we)(
                            "#EventDashBoard_ModerationQueueWarning",
                          ),
                        }),
                        (0, e.jsx)("a", {
                          href:
                            zt.TS.PARTNER_BASE_URL +
                            "doc/marketing/event_tools/moderation",
                          children: (0, l.we)(
                            "#EventDashBoard_Location_ModerationTitle",
                          ),
                        }),
                      ],
                    }),
                  r &&
                    (0, e.jsxs)("div", {
                      className: (0, v.A)(H.StatsCtn),
                      children: [
                        o &&
                          (0, e.jsxs)("div", {
                            className: (0, v.A)(
                              H.StatsLeftSection,
                              s && H.DisabledStats,
                            ),
                            children: [
                              (0, e.jsxs)("div", {
                                className: H.StatsTitle_ctn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, l.we)(
                                      "#EventDashBoard_Location_LibraryHome",
                                    ),
                                  }),
                                  (0, e.jsxs)("span", {
                                    className: H.ModerationNote,
                                    children: [
                                      "( ",
                                      (0, l.we)(
                                        "#EventDashBoard_Location_WaitingModeraion",
                                      ),
                                      " )",
                                    ],
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: H.StatsTitle,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, l.we)(
                                      "#EventDashBoard_Summary_LibraryHome_Shown",
                                    ),
                                  }),
                                  (0, e.jsx)("span", {
                                    children: (0, $.Dq)(p),
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: H.StatsTitle,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, l.we)(
                                      "#EventDashBoard_Summary_LibraryHome_Read",
                                    ),
                                  }),
                                  (0, e.jsx)("span", {
                                    children: (0, $.Dq)(E),
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: H.StatsTitle_ctn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, l.we)(
                                      "#EventDashBoard_Location_LibraryDetail",
                                    ),
                                  }),
                                  (0, e.jsxs)("span", {
                                    className: H.ModerationNote,
                                    children: [
                                      "( ",
                                      (0, l.we)(
                                        "#EventDashBoard_Location_WaitingModeraion",
                                      ),
                                      " )",
                                    ],
                                  }),
                                ],
                              }),
                              A > 0 &&
                                (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: H.StatsTitle,
                                      children: [
                                        (0, e.jsx)("span", {
                                          children: (0, l.we)(
                                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown",
                                          ),
                                        }),
                                        (0, e.jsx)("span", {
                                          children: (0, $.Dq)(A),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: H.StatsTitle,
                                      children: [
                                        (0, e.jsx)("span", {
                                          children: (0, l.we)(
                                            "#EventDashBoard_Summary_AppDetailSpotlight_Read",
                                          ),
                                        }),
                                        (0, e.jsx)("span", {
                                          children: (0, $.Dq)(x),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, e.jsxs)("div", {
                                className: H.StatsTitle,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, l.we)(
                                      "#EventDashBoard_Summary_AppDetailActivity_Shown",
                                    ),
                                  }),
                                  (0, e.jsx)("span", {
                                    children: (0, $.Dq)(f),
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: H.StatsTitle,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, l.we)(
                                      "#EventDashBoard_Summary_AppDetailActivity_Read",
                                    ),
                                  }),
                                  (0, e.jsx)("span", {
                                    children: (0, $.Dq)(b),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          className: H.StatsRightSection,
                          children: [
                            (0, e.jsx)("div", {
                              className: H.StatsTitle_ctn,
                              children: (0, e.jsx)("span", {
                                children: (0, l.we)(
                                  "#EventDashBoard_Location_StoreDetail",
                                ),
                              }),
                            }),
                            (0, e.jsxs)("div", {
                              className: H.StatsTitle,
                              children: [
                                (0, e.jsx)("span", {
                                  children: (0, l.we)(
                                    "#EventDashBoard_Summary_StoreAppPage_Shown",
                                  ),
                                }),
                                (0, e.jsx)("span", { children: (0, $.Dq)(y) }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: H.StatsTitle,
                              children: [
                                (0, e.jsx)("span", {
                                  children: (0, l.we)(
                                    "#EventDashBoard_Summary_StoreAppPage_Read",
                                  ),
                                }),
                                (0, e.jsx)("span", { children: (0, $.Dq)(k) }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: H.StatsTitle_ctn,
                              children: (0, e.jsx)("span", {
                                children: (0, l.we)(
                                  "#EventDashBoard_Location_CommunityDetail",
                                ),
                              }),
                            }),
                            (0, e.jsxs)("div", {
                              className: H.StatsTitle,
                              children: [
                                (0, e.jsx)("span", {
                                  children: (0, l.we)(
                                    "#EventDashBoard_Summary_Community_Shown",
                                  ),
                                }),
                                (0, e.jsx)("span", { children: (0, $.Dq)(Q) }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: H.StatsTitle,
                              children: [
                                (0, e.jsx)("span", {
                                  children: (0, l.we)(
                                    "#EventDashBoard_Summary_Community_Read",
                                  ),
                                }),
                                (0, e.jsx)("span", { children: (0, $.Dq)(q) }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: H.StatsTitle_ctn,
                              children: (0, e.jsx)("span", {
                                children: (0, l.we)(
                                  "#EventDashBoard_Location_NewsHubDetail",
                                ),
                              }),
                            }),
                            (0, e.jsxs)("div", {
                              className: H.StatsTitle,
                              children: [
                                (0, e.jsx)("span", {
                                  children: (0, l.we)(
                                    "#EventDashBoard_Summary_NewsHub_Shown",
                                  ),
                                }),
                                (0, e.jsx)("span", { children: (0, $.Dq)(K) }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: H.StatsTitle,
                              children: [
                                (0, e.jsx)("span", {
                                  children: (0, l.we)(
                                    "#EventDashBoard_Summary_NewsHub_Read",
                                  ),
                                }),
                                (0, e.jsx)("span", { children: (0, $.Dq)(ge) }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
        }
        const gs = (0, G.PA)(function (t) {
          const { event: s, bIsOGG: o, summary: a } = t,
            r = (0, jt.n)();
          return (0, e.jsxs)(L.tH, {
            children: [
              (0, e.jsxs)("div", {
                className: D().EditorStatsCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: D().EditorStatsRow,
                    children: [
                      (0, e.jsx)("span", {
                        children: (0, l.we)("#EventEditor_Comments"),
                      }),
                      (0, e.jsx)("span", {
                        children: (0, $.Dq)(s.nCommentCount),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: D().EditorStatsRow,
                    children: [
                      (0, e.jsx)("span", {
                        children: (0, l.we)("#EventEditor_UpVotes"),
                      }),
                      (0, e.jsx)("span", {
                        children: s.nVotesUp ? (0, $.Dq)(s.nVotesUp) : 0,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: D().EditorStatsRow,
                    children: [
                      (0, e.jsx)("span", {
                        children: (0, l.we)("#EventEditor_DownVotes"),
                      }),
                      (0, e.jsx)("span", {
                        children: s.nVotesDown ? (0, $.Dq)(s.nVotesDown) : 0,
                      }),
                    ],
                  }),
                ],
              }),
              a &&
                (0, e.jsxs)("div", {
                  className: D().EditorStatsCtn,
                  children: [
                    (0, l.we)("#EventDashBoard_SummaryStats_Admin_Title"),
                    (0, e.jsx)(vs, {
                      summary: a,
                      bIsAllowedInLibrary: o,
                      bEventIsInModerationQueue: (0, gt.Dn)(s, r),
                      bCompact: !0,
                      bExpanded: !0,
                    }),
                  ],
                }),
            ],
          });
        });
        var Sn = i(10985),
          fs = i(32606),
          Ss = i(96117),
          Cs = i(64774),
          Es = i(45826),
          st = i(71742),
          Kt = i(53113);
        const Is = (0, G.PA)((n) => {
          const {
              event: t,
              lang: s,
              nOverrideStartTime: o,
              nOverrideEndTime: a,
              reminder: r,
              editorInfo: c,
              meetSteamInfo: h,
            } = n,
            d = (0, jt.n)(),
            p = t.appid,
            E = t.clanSteamID,
            A = o || t.GetStartTimeAndDateUnixSeconds(),
            { data: x, isPending: f } = (0, Ie.J$)(p ? { appid: p } : void 0),
            { data: b, isPending: y } = (0, ie.TB)(E.GetAccountID());
          return y || (p && f)
            ? null
            : (0, e.jsx)("div", {
                className: D().EventDetailTitleDesc,
                children: (0, e.jsxs)("div", {
                  className: D().EventDetailsSticky,
                  children: [
                    (b?.is_ogg ?? !!p)
                      ? (0, e.jsx)(xs, { appid: b?.appid || p })
                      : (0, e.jsx)(_s, { clanSteamID: E }),
                    (0, e.jsx)(fs.j, {
                      event: t,
                      className: D().EventDetailTimeInfo,
                      nOverrideEndTime: a,
                      nOverrideStartTime: o,
                    }),
                    r &&
                      t.type !== B.uYK &&
                      d < A &&
                      (0, e.jsx)("div", {
                        className: D().EventDetailTimeInfo,
                        children: r,
                      }),
                    (0, e.jsxs)("div", {
                      className: D().EventDetailUserType,
                      children: [
                        (0, e.jsx)("div", {
                          className: D().RightSideTitles,
                          children: (0, l.we)(
                            "#EventDisplay_RightColumnTitle_EventType",
                          ),
                        }),
                        (0, e.jsxs)("div", {
                          className: D().EventDetailsType,
                          children: [t.GetCategoryAsString(), " "],
                        }),
                      ],
                    }),
                    c,
                    !!t.jsondata.meet_steam_groups && h,
                  ],
                }),
              });
        });
        function xs(n) {
          const { appid: t } = n;
          (0, st.wT)(t && t != 0, "Expected Appid In Game Info Section");
          const { data: s, isPending: o } = (0, Ie.J$)(
            t ? { appid: t } : void 0,
          );
          return (0, e.jsxs)("div", {
            className: D().EventDetailGameCallToAction,
            children: [
              (0, e.jsx)("div", {
                className: D().RightSideTitles,
                children: gt.zK.some((a) => t === a)
                  ? (0, l.we)("#EventDisplay_RightColumnTitle_Blog")
                  : (0, l.we)("#EventDisplay_RightColumnTitle_Game"),
              }),
              (0, e.jsx)(Ss.W, {
                imageType: "header",
                capsule: { id: t, type: "game" },
                bHidePriceIfOwned: !0,
                bHideStatusBanners: !0,
                bPreferAssetWithoutOverride: !1,
              }),
              (0, e.jsxs)("div", {
                className: (0, v.A)(D().GameActions),
                children: [
                  s &&
                    (0, e.jsx)(Cs._, {
                      appid: t,
                      bIsFree: !!s.is_free,
                      bIsComingSoon: !!s.is_coming_soon,
                      className: D().ActionButton,
                    }),
                  o && (0, e.jsx)(X.t, { size: "small", position: "center" }),
                ],
              }),
            ],
          });
        }
        function _s(n) {
          const { clanSteamID: t } = n,
            s = t.GetAccountID(),
            { data: o } = (0, ie.TB)(s),
            { data: a } = (0, Sn.A5)(s);
          if (!o) return null;
          const r = a
            ? (0, Sn.LO)(a, "developer")
            : zt.TS.COMMUNITY_BASE_URL +
              (o.vanity_url
                ? "groups/" + o.vanity_url
                : "gid/" + t.ConvertTo64BitString());
          return (0, e.jsxs)("div", {
            className: D().EventDetailGameCallToAction,
            children: [
              (0, e.jsx)("div", {
                className: D().RightSideTitles,
                children: o.group_name,
              }),
              (0, e.jsx)(Es.m, {
                href: (0, Kt.k2)(r),
                children: (0, e.jsx)("div", {
                  className: D().EventDetailsAvatar,
                  style: { backgroundImage: `url(${o.avatar_full_url})` },
                }),
              }),
            ],
          });
        }
        var bs = i(42184),
          Cn = i(5191),
          En = i(98144),
          ys = i(36631),
          ws = i(80684),
          As = i(79590),
          js = i(64641),
          Ts = i.n(js),
          at = i(53107),
          Ds = i(87949),
          In = i(73644),
          Yt = i(98609),
          Fe = i(16412),
          Ns = i(45737),
          xn = i.n(Ns);
        function Bs(n) {
          const { event: t, lang: s } = n,
            o = (0, pe.q3)(() => t.jsondata.meet_steam_groups),
            { data: a } = (0, Ae.hM)(t.clanSteamID.GetAccountID()),
            [r, c, h] = (0, w.useMemo)(() => {
              const d = new Map(),
                p = new Map();
              let E = !1;
              return (
                o.forEach((A) => {
                  A.group_visibility_tokens?.length > 0
                    ? (A.group_visibility_tokens.forEach((x) => {
                        d.has(x)
                          ? d.get(x).push(A.group_id)
                          : d.set(x, [A.group_id]);
                      }),
                      p.set(A.group_id, A.localized_session_title[B.Bhc]))
                    : (E = !0);
                }),
                [d, p, E]
              );
            }, [o]);
          return r.size == 0 || !a?.can_edit
            ? null
            : (0, e.jsxs)("div", {
                className: (0, v.A)(
                  xn().DefaultSectionCtn,
                  xn().ValveOnlyBackground,
                ),
                children: [
                  (0, e.jsx)(Fe.JU, { children: "(VO) Meet Steam URLs" }),
                  Array.from(r.keys()).map((d) => {
                    const p = r.get(d);
                    return (0, e.jsx)(
                      "div",
                      {
                        children: (0, e.jsxs)("a", {
                          href: `${Yt.TS.STORE_BASE_URL}meetsteam/${t.GID}/${d}`,
                          target: "_blank",
                          children: [
                            "Shows Sessions: ",
                            p.map((E) =>
                              (0, e.jsxs)(
                                "span",
                                { children: [c.get(E), ","] },
                                "name" + d + "_" + E,
                              ),
                            ),
                          ],
                        }),
                      },
                      `tokenurl_${d}`,
                    );
                  }),
                  !!h &&
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("a", {
                        href: `${Yt.TS.STORE_BASE_URL}meetsteam/${t.GID}`,
                        target: "_blank",
                        children: "Show all public sessions",
                      }),
                    }),
                ],
              });
        }
        var Ls = i(97442),
          Jt = i(24660),
          _n = i(60480),
          Tt = i(68266),
          Gs = i(24179),
          Rs = i(37901);
        const Xt = {};
        Xt.english = () => i.e(23130).then(i.t.bind(i, 23130, 19));
        async function Fs(n) {
          if (Xt[n]) return Xt[n]();
        }
        const bn = (0, Rs.l)(Fs);
        function Hs(n) {
          const { appid: t } = n,
            { data: s } = (0, Ie.J$)(t ? { appid: t } : void 0);
          return !t || !zt.iA.logged_in || s?.type != fn.uE.Vi
            ? null
            : (0, e.jsx)(Ps, { appid: t });
        }
        function Ps(n) {
          return (0, Gs.S6)(n.appid) !== !1
            ? null
            : (0, e.jsxs)("div", {
                className: D().EventNotPublicBar,
                children: [
                  (0, e.jsx)("span", {
                    className: D().EventNotPublicBarTitle,
                    children: bn.Localize("#PartnerEvents_PlaytestOnly_Header"),
                  }),
                  (0, e.jsx)("span", {
                    className: D().EventNotPublicBarDetail,
                    children: bn.Localize("#PartnerEvents_PlaytestOnly_Detail"),
                  }),
                ],
              });
        }
        const Ms = (0, G.PA)((n) => {
            const {
                event: t,
                lang: s,
                banner: o,
                titleBar: a,
                body: r,
                postbody: c,
                footer: h,
              } = n,
              d = (0, Tt.m0)(t, "background", s),
              { data: p } = (0, Ie.j4)(t.appid ? { appid: t.appid } : void 0),
              { data: E } = (0, ie.TB)(t.clanSteamID.GetAccountID()),
              A = t.BIsImageSafeForAllAges("background", s, {
                bAppHasAgeSafeScreenshots:
                  (p?.all_ages_screenshots?.length ?? 0) > 0,
                clanInfo: E ?? void 0,
              }),
              x = "lang_" + (0, B.wwZ)(s),
              f = !!d && t.BImageNeedScreenshotFallback("background", s);
            return (0, e.jsxs)(he.Z, {
              scrollIntoViewType: R.Yo.NoTransformSparseContent,
              className: (0, v.A)(
                D().EventDetailsPageContainer,
                x,
                j().PartnerEventFont,
                A
                  ? D().DetailArtworkAgeAppropriate
                  : D().DetailArtworkAgeNotAppropriate,
                !d && D().NoTitleArtwork,
                f && D().ScreenshotInsteadOfCover,
              ),
              children: [
                o,
                a,
                (0, e.jsx)(Hs, { appid: t.appid }),
                (0, e.jsx)(yn, { strImageURL: d }),
                (0, e.jsx)(wn, { strImageURL: d, body: r, postbody: c }),
                !!h && (0, e.jsx)(L.tH, { children: h }),
              ],
            });
          }),
          yn = (n) => {
            const { strImageURL: t } = n;
            return (0, e.jsxs)("div", {
              className: D().EventCoverImageCtn,
              children: [
                (0, e.jsx)("div", {
                  className: D().EventCoverImageBlr,
                  children:
                    t &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("div", {
                          className: D().EventCoverImageFuzz,
                          style: {
                            backgroundColor: "rgb(37, 41, 46)",
                            backgroundImage: `url(${t})`,
                          },
                        }),
                        (0, e.jsx)("div", {
                          className: D().EventCoverImage,
                          style: {
                            backgroundColor: "rgb(37, 41, 46)",
                            backgroundImage: `url(${t})`,
                          },
                        }),
                      ],
                    }),
                }),
                t && (0, e.jsx)("div", { className: D().CoverImageGradient }),
              ],
            });
          },
          wn = (n) => {
            const { body: t, postbody: s, strImageURL: o } = n;
            return (0, e.jsxs)("div", {
              className: D().EventBodyCtn,
              children: [
                (0, e.jsx)("div", { className: D().EventBackgroundBlurCtn }),
                (0, e.jsxs)("div", {
                  className: D().EventBodyPosition,
                  children: [
                    (0, e.jsxs)("div", {
                      className: D().EventBody,
                      children: [
                        !!o &&
                          (0, e.jsx)("div", {
                            className: D().EventBackgroundBlur,
                            style: { backgroundImage: `url(${o})` },
                          }),
                        (0, e.jsx)(L.tH, { children: t }),
                      ],
                    }),
                    !!s && (0, e.jsx)(L.tH, { children: s }),
                  ],
                }),
              ],
            });
          },
          Os = w.lazy(() =>
            Promise.all([
              i.e(36597),
              i.e(56589),
              i.e(85599),
              i.e(33512),
              i.e(94781),
              i.e(18307),
              i.e(8892),
              i.e(80702),
              i.e(48355),
              i.e(36786),
              i.e(55050),
              i.e(60480),
              i.e(60839),
              i.e(14632),
              i.e(54409),
              i.e(73810),
              i.e(49968),
              i.e(74974),
              i.e(11095),
              i.e(14867),
              i.e(8319),
              i.e(10177),
              i.e(68396),
            ]).then(i.bind(i, 2422)),
          ),
          Us = (0, G.PA)((n) => {
            const {
                event: t,
                lang: s,
                emoticonStore: o,
                nOverrideStartTime: a,
                nOverrideEndTime: r,
                adminPanel: c,
                otherEventRow: h,
                titleBar: d,
              } = n,
              p = t.appid,
              E = t.clanSteamID.GetAccountID(),
              A = (0, ys.MU)(),
              x = (0, jt.n)(),
              { data: f, isPending: b } = (0, Ie.J$)(p ? { appid: p } : void 0),
              { data: y, isPending: k } = (0, ie.TB)(E);
            if (
              (w.useEffect(() => {
                window.scrollTo(0, 0);
              }, [p, E]),
              !A && t.GetEventType() == B.ajI)
            )
              return (0, e.jsx)(V.OG, {
                eventModel: t,
                route: V.PH.k_eStoreSalePage,
                bPopup: !1,
              });
            const Q = (0, V.Bw)(t, V.PH.k_eStoreNewsHub, "allowRelative"),
              q = (0, V.Bw)(t, V.PH.k_eStoreUsersNewsHub, "allowRelative");
            if (!t.bLoaded || k || (p && b))
              return (0, e.jsx)("div", {
                className: Ts().FlexCenter,
                style: { height: "400px" },
                children: (0, e.jsx)(X.t, {
                  size: "medium",
                  string: (0, l.we)("#Loading"),
                }),
              });
            const K = f?.name || y?.group_name;
            let ge = t.GetDescriptionWithFallback(s);
            return (0, e.jsx)(Ms, {
              event: t,
              lang: s,
              titleBar: d,
              banner: (0, e.jsx)(bs.v, { appId: t.appid, clanId: E }),
              body: (0, e.jsxs)(L.tH, {
                children: [
                  (0, e.jsxs)("div", {
                    className: D().EventDetailTitleContainer,
                    children: [
                      (0, e.jsx)(Ls.r, {
                        crumbs: [
                          { name: (0, l.we)("#BreadCrumbs_AllEvents"), url: q },
                          ...(K
                            ? [
                                {
                                  name: (0, l.we)("#BreadCrumbs_GameEvents", K),
                                  url: Q,
                                },
                              ]
                            : []),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: D().EventDetailTitle,
                        children: t.GetNameWithFallback(s),
                      }),
                      t.BHasSubTitle(s) &&
                        (0, e.jsx)("div", {
                          className: D().EventDetailsSubTitle,
                          children: t.GetSubTitle(s),
                        }),
                    ],
                  }),
                  !!t.BEventCanShowBroadcastWidget(A, x) &&
                    (0, e.jsx)("div", {
                      className: D().EventBroadcastCtn,
                      children: (0, e.jsx)(w.Suspense, {
                        fallback: null,
                        children: (0, e.jsx)(Os, {
                          event: t,
                          bIsPreview: A,
                          accountIDs: A
                            ? t.jsondata.broadcast_whitelist
                            : void 0,
                        }),
                      }),
                    }),
                  (0, e.jsxs)("div", {
                    className: (0, v.A)(D().EventColumns, "EventDetail"),
                    children: [
                      (0, e.jsxs)("div", {
                        className: D().EventDetailsDescription,
                        children: [
                          (0, e.jsxs)(L.tH, {
                            children: [
                              t.BHasTag("steam_award_nomination_request") &&
                                (0, e.jsx)(
                                  En.EventDisplaySteamAwardNomination,
                                  { event: t, lang: s, previewMode: A },
                                ),
                              t.BHasTag("steam_award_vote_request") &&
                                (0, e.jsx)(En.WinterSaleSteamAwardVoteWrapper, {
                                  appID: t.appid,
                                  bIsEventActionEnabled:
                                    t.BIsEventActionEnabled(x),
                                  voteCategories:
                                    t.GetSteamAwardNomineeCategories(),
                                }),
                            ],
                          }),
                          (0, e.jsx)(L.tH, {
                            children: (0, e.jsxs)("div", {
                              className: (0, v.A)(
                                "EventDetailsBody",
                                D().EventDetailsBody,
                              ),
                              children: [
                                (0, e.jsx)(vt.fh, {
                                  text: ge || "",
                                  showErrorInfo: A,
                                  event: t,
                                  languageOverride: s,
                                }),
                                !!(
                                  t.jsondata.bSaleEnabled &&
                                  t.jsondata.sale_vanity_id
                                ) &&
                                  (0, e.jsxs)("div", {
                                    className: (0, v.A)(D().ReadMoreCnt),
                                    children: [
                                      (0, e.jsx)(As.m, { gidEvent: t.GID }),
                                      (0, e.jsx)(Jt.Ii, {
                                        className: (0, v.A)(
                                          j().Button,
                                          "LinkButton",
                                        ),
                                        href: (0, Kt.k2)((0, _n.n4)(t)),
                                        children: (0, l.we)(
                                          "#Event_Button_VisitSalePage",
                                        ),
                                      }),
                                    ],
                                  }),
                                !!t.jsondata.associated_appid &&
                                  (0, e.jsx)(Ds.e, {
                                    id: t.jsondata.associated_appid,
                                    inputType: "game",
                                    bApplyUserContentPref: !1,
                                  }),
                              ],
                            }),
                          }),
                          (0, e.jsx)(L.tH, {
                            children: (0, e.jsx)(ws._, { event: t }),
                          }),
                          !!t.jsondata.read_more_link &&
                            (0, e.jsx)("div", {
                              className: (0, v.A)(D().ReadMoreCnt),
                              children: (0, e.jsx)(at.uU, {
                                className: (0, v.A)(j().Button),
                                href: t.jsondata.read_more_link,
                                children: (0, l.we)(
                                  "#EventEmail_Button_ClickForMoreDetails",
                                ),
                              }),
                            }),
                          (0, e.jsx)("span", { className: j().Clear }),
                          (0, e.jsxs)(L.tH, {
                            children: [
                              !!t.appid &&
                                (0, e.jsx)(In.lS, { appid: t.appid }),
                              !!t.jsondata.sale_social_media_items &&
                                (0, e.jsx)(In.lz, {
                                  gidClanEvent: t.GID,
                                  rgSocial: t.jsondata.sale_social_media_items,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)(L.tH, {
                        children: (0, e.jsx)(Is, {
                          event: t,
                          lang: s,
                          nOverrideStartTime: a,
                          nOverrideEndTime: r,
                          reminder: (0, e.jsx)(Cn.j, {
                            eventModel: t,
                            lang: s,
                          }),
                          editorInfo: (0, e.jsx)(ks, {
                            event: t,
                            bIsOGG: y?.is_ogg ?? !!p,
                          }),
                          meetSteamInfo: (0, e.jsx)(Bs, { event: t, lang: s }),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(nt.F, { eventModel: t, emoticonStore: o }),
                ],
              }),
              postbody: (0, e.jsxs)(L.tH, { children: [c, h] }),
              footer: (0, e.jsx)(hs, {
                appid: t.appid,
                creatorHome: (0, e.jsx)(tt.LG, {
                  appid: t.appid,
                  bSmallFormat: !0,
                }),
              }),
            });
          });
        function ks(n) {
          const { event: t, bIsOGG: s } = n,
            o = (0, jt.n)(),
            { data: a } = (0, Ae.hM)(t.clanSteamID.GetAccountID()),
            r = !!a?.can_edit,
            c = t.clanSteamID,
            h = t.GID,
            d = r && t.BIsPartnerEvent() && t.BIsVisibleEvent(o);
          w.useEffect(() => {
            if (!d) return;
            const E = te().CancelToken.source();
            return (
              Ve.LoadStatsForEvents(c, [h], E),
              () => E.cancel("EventDisplayEditorInfo cancelled")
            );
          }, [d, c, h]);
          const p = (0, pe.q3)(() => d && Ve.GetStatsFor(c, h));
          return r
            ? (0, e.jsx)(gs, {
                event: t,
                bIsOGG: s,
                summary: p ? p.m_stats : void 0,
              })
            : null;
        }
        var Vs = i(9905),
          Ws = i.n(Vs),
          ft = i(72604),
          zs = Object.defineProperty,
          Ks = Object.getOwnPropertyDescriptor,
          Ys = (n, t, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? Ks(t, s) : t, r = n.length - 1, c;
              r >= 0;
              r--
            )
              (c = n[r]) && (a = (o ? c(t, s, a) : c(a)) || a);
            return o && a && zs(t, s, a), a;
          };
        const An = class bt {
          m_objApprovalPriviledge = null;
          m_LoadingPriviledgePromise = null;
          BHasSteamChinaAppApprovalPriviledge() {
            return this.m_objApprovalPriviledge?.bHasAccess;
          }
          async HintLoadAppApprovalPriviledge() {
            return this.m_objApprovalPriviledge
              ? this.m_objApprovalPriviledge
              : (this.m_LoadingPriviledgePromise ||
                  (this.m_LoadingPriviledgePromise =
                    this.InternalLoadAppApprovalPriviledge()),
                this.m_LoadingPriviledgePromise);
          }
          async InternalLoadAppApprovalPriviledge() {
            const t =
              I.TS.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
            try {
              const s = await te().get(t, { withCredentials: !0 });
              if (s?.data?.success == ft.R)
                return (
                  (this.m_objApprovalPriviledge = {
                    bHasAccess: s.data.bHasAccess,
                  }),
                  this.m_objApprovalPriviledge
                );
            } catch (s) {
              const o = (0, De.H)(s);
              console.error(
                "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                  o.strErrorMsg,
                o,
              );
            }
            return { bHasAccess: !1 };
          }
          static s_Singleton;
          static Get() {
            return (
              bt.s_Singleton || (bt.s_Singleton = new bt()), bt.s_Singleton
            );
          }
          constructor() {
            (0, U.Gn)(this);
            let t = (0, I.Tc)("sc_app_privildge", "application_config");
            this.ValidateStoreDefault(t)
              ? ((this.m_objApprovalPriviledge = t),
                (this.m_LoadingPriviledgePromise = null))
              : (!I.iA.logged_in || I.TS.EREALM !== ne.TU.k_ESteamRealmChina) &&
                (this.m_objApprovalPriviledge = { bHasAccess: !1 });
          }
          ValidateStoreDefault(t) {
            const s = t;
            return (
              s && typeof s == "object" && typeof s.bHasAccess == "boolean"
            );
          }
        };
        Ys([U.sH], An.prototype, "m_objApprovalPriviledge", 2);
        let jn = An;
        var He = i(96538),
          We = i(88003),
          Dt = i(82734);
        const Js = (0, G.PA)((n) => {
            const [t, s] = w.useState(null),
              { eventModel: o } = n;
            let a = o.clanSteamID.GetAccountID();
            const { data: r } = (0, Ae.hM)(a);
            return (
              w.useEffect(() => {
                const c = te().CancelToken.source();
                return (
                  (async () => {
                    const d = await jn.Get().HintLoadAppApprovalPriviledge();
                    c.token.reason ||
                      s(I.iA.is_support || !!r?.can_edit || d.bHasAccess);
                  })(),
                  () => c.cancel("SteamChinaAdminPanel is unmounting")
                );
              }, [a, r]),
              I.iA.is_support || r?.can_edit
                ? (0, e.jsx)(me.g, {
                    eventModel: o,
                    partnerEventStore: n.partnerEventStore,
                    addtionalAdminButtons: t
                      ? [(0, e.jsx)(Tn, { eventModel: o }, "removesteamchina")]
                      : void 0,
                  })
                : jn.Get().BHasSteamChinaAppApprovalPriviledge()
                  ? (0, e.jsxs)("div", {
                      className: At.DisplayAdminPanel,
                      children: [
                        (0, e.jsx)("span", {
                          className: At.DisplayAdminPanel_Title,
                          children: (0, l.we)("#EventDisplay_Admin_Title"),
                        }),
                        (0, e.jsx)(Tn, { eventModel: o }, "removesteamchina"),
                      ],
                    })
                  : null
            );
          }),
          Tn = (n) => {
            const { eventModel: t } = n,
              s = async () => {
                let a = new URLSearchParams();
                a.append("sessionid", (0, I.KC)()),
                  a.append("clan_accountid", "" + t.clanSteamID.GetAccountID()),
                  a.append("gid_clan_event", "" + t.GID);
                let r = !1,
                  c = 0;
                try {
                  const h = `${I.TS.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                    d = await te().post(h, a, { withCredentials: !0 });
                  (r = d?.data?.success == ft.R || d?.data?.success == ft.Ze),
                    d?.data?.success == ft.Ze &&
                      console.warn(
                        `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${t.GID}; event is still removed from SC`,
                      ),
                    (c = d?.data?.success);
                } catch (h) {
                  const d = (0, De.H)(h);
                  (c = d.errorCode),
                    console.error(
                      "RemoveEventFromSteamChinaButton: error " + d.strErrorMsg,
                      d,
                    );
                }
                n.closeModal && n.closeModal(),
                  (0, We.pg)(
                    r
                      ? (0, e.jsx)(He.o0, {
                          bAlertDialog: !0,
                          children: (0, l.we)("#EventDisplay_Share_Success"),
                        })
                      : (0, e.jsx)(He.KG, {
                          children:
                            (0, l.we)("#EventDisplay_Share_Failure") + " " + c,
                        }),
                    window,
                  );
              },
              o = (a) => {
                let r = !1;
                (0, We.pg)(
                  (0, e.jsx)(He.o0, {
                    strTitle: (0, l.we)("#EventAdmin_Moderation_HideEventInSC"),
                    strDescription: (0, l.we)(
                      "#EventAdmin_Moderation_HideEventInSC_Desc",
                    ),
                    bDestructiveWarning: !0,
                    closeModal: n.closeModal,
                    onOK: () => {
                      (r = !0), s();
                    },
                    children:
                      r &&
                      (0, e.jsx)(X.t, { size: "medium", position: "center" }),
                  }),
                  (0, Dt.uX)(a),
                );
              };
            return (0, e.jsx)("div", {
              className: (0, v.A)(
                _.Button,
                At.AdminButton,
                _.ValveOnlyBackground,
              ),
              onClick: o,
              children: (0, l.we)("#EventAdmin_Moderation_HideEventInSC"),
            });
          };
        var _e = i(10142),
          Dn = i(84676);
        const Pe = fe.$.Get(),
          Nn = fe.$.GetSummaryStore();
        function Xs() {
          document.body.classList.contains("events_hub") &&
            document.body.classList.remove("events_hub");
        }
        function Qs(n) {
          let t;
          if (n && n.appid) t = _e.A.Get().GetApp(n.appid)?.GetName();
          else if (n && n.clanSteamID) {
            const o = T.ac.GetClanInfoByClanAccountID(
              n.clanSteamID.GetAccountID(),
            );
            t = o && o.group_name;
          }
          const s = n && n.GetNameWithFallback((0, B.sfN)(I.TS.LANGUAGE));
          if (n && t && s) {
            const o = (0, l.we)(
              "#EventCalendar_TabTitle_GroupNameAndEventDetail",
              t,
              s,
            );
            document.title != o && (document.title = o);
          }
        }
        const Zs = (0, G.PA)((n) => {
            const {
                bInfiniteScroll: t,
                event_gid: s,
                announcement_gid: o,
                clansteamid: a,
                appid: r,
              } = n,
              [c, h] = (0, w.useState)(s ? Pe.GetClanEventModel(s) : void 0),
              [, d] = (0, Dn.t7)(c?.appid, {
                include_assets: !0,
                include_release: !0,
                include_platforms: !0,
                include_screenshots: !0,
              }),
              [p, E] = (0, w.useState)(!1),
              A = (b, y) => {
                y.token.reason || (h(b), Qs(b));
              },
              x = (b) => {
                const y = (0, De.H)(b);
                console.error(
                  "StoreEventDetailView failed " + y.strErrorMsg,
                  y,
                ),
                  E(!0);
              };
            (0, w.useEffect)(Xs, []),
              (0, w.useEffect)(() => {
                const b = te().CancelToken.source();
                return (
                  c ||
                    (s && !Pe.GetClanEventModel(s)
                      ? Pe.LoadPartnerEventGeneric(a, r, s, void 0, 0)
                          .then((y) => A(y, b))
                          .catch(() => {
                            b.token.reason ||
                              Pe.LoadPartnerEventGeneric(a, r, void 0, s, 0)
                                .then((y) => A(y, b))
                                .catch(x);
                          })
                      : o &&
                        !Pe.GetClanEventGIDFromAnnouncementGID(o) &&
                        Pe.LoadPartnerEventGeneric(a, r, void 0, o, 0)
                          .then((y) => A(y, b))
                          .catch(x)),
                  () => {
                    b.cancel("StoreEventDetailView: unmounting");
                  }
                );
              }, [s, a, r, o, c]);
            const f = (0, V.Bw)(c, V.PH.k_eStoreNewsHub, "allowRelative");
            if (p || !c || (c?.appid && d == Dn.Sq)) {
              const b = "lang_" + (0, B.wwZ)((0, B.sfN)(I.TS.LANGUAGE)),
                y = "";
              return (0, e.jsxs)("div", {
                className: (0, v.A)(
                  D().EventDetailsPageContainer,
                  b,
                  j().PartnerEventFont,
                  D().NoTitleArtwork,
                ),
                children: [
                  (0, e.jsx)("div", { style: { height: "100px" } }),
                  (0, e.jsx)(yn, { strImageURL: y }),
                  (0, e.jsx)(wn, {
                    strImageURL: y,
                    body: p
                      ? (0, e.jsx)("div", {
                          className: Ws().ErrorMsg,
                          children: (0, l.PP)(
                            "#Events_FailedToFind",
                            (0, e.jsx)("a", {
                              href: I.TS.STORE_BASE_URL + "news/",
                              children: (0, l.we)(
                                "#EventDisplay_NewsHubSubtitle",
                              ),
                            }),
                          ),
                        })
                      : (0, e.jsx)(X.t, {
                          string: (0, l.we)("#Loading"),
                          size: "medium",
                          position: "center",
                        }),
                    postbody:
                      p && a
                        ? (0, e.jsx)(le, {
                            clanAccountID: a.GetAccountID(),
                            partnerEventStore: Nn,
                          })
                        : void 0,
                  }),
                ],
              });
            }
            return t
              ? (0, e.jsx)(L.tH, {
                  children: (0, e.jsx)(Ee.N, {
                    appid: c.appid,
                    trackingLocation: ae.Tc.HX,
                    announcementGID: c.GetAnnouncementGID(),
                    partnerEventStore: Pe,
                    eventModel: c,
                    showAppHeader: !0,
                    closeModal: () => n.history.push(f),
                  }),
                })
              : (0, e.jsx)(L.tH, {
                  children: (0, e.jsx)(Us, {
                    lang: (0, B.sfN)(I.TS.LANGUAGE),
                    event: c,
                    adminPanel:
                      I.TS.EREALM === ne.TU.k_ESteamRealmChina
                        ? (0, e.jsx)(Js, { eventModel: c })
                        : (0, e.jsx)(me.g, {
                            eventModel: c,
                            partnerEventStore: Pe,
                          }),
                    otherEventRow: (0, e.jsx)(le, {
                      clanAccountID: c.clanSteamID.GetAccountID(),
                      gidAnnouncement: c.AnnouncementGID,
                      partnerEventStore: Nn,
                    }),
                  }),
                });
          }),
          Nt = (0, P.y)(Zs);
        var Bn = i(31561),
          $s = i(41623),
          se = i(49789),
          Ln = i(50974),
          ze = i(9046),
          N = i(38581),
          M = i(81673),
          z = i(42507),
          Ke = i(7582),
          Qt = i(74618),
          ve = i(77495),
          Gn = i(17083),
          qs = i(92025),
          ce = i(36118),
          Me = i(71421),
          Se = i(30096),
          ot = i(6469),
          ea = Object.defineProperty,
          ta = Object.getOwnPropertyDescriptor,
          St = (n, t, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? ta(t, s) : t, r = n.length - 1, c;
              r >= 0;
              r--
            )
              (c = n[r]) && (a = (o ? c(t, s, a) : c(a)) || a);
            return o && a && ea(t, s, a), a;
          };
        const rt = class Ue {
          static s_newsCuratorStore;
          m_mapNewsCurators = new Map();
          m_bIsLoadComplete = !1;
          m_mapLangToNewsCurators = new Map();
          m_LoadingPromise = null;
          static Get() {
            return (
              Ue.s_newsCuratorStore ||
                ((Ue.s_newsCuratorStore = new Ue()),
                (Ue.s_newsCuratorStore.m_LoadingPromise =
                  Ue.s_newsCuratorStore.Init()),
                (window.g_NewsCuratorStore = Ue.s_newsCuratorStore)),
              Ue.s_newsCuratorStore
            );
          }
          constructor() {
            (0, U.Gn)(this);
          }
          IsLoaded() {
            return this.m_bIsLoadComplete;
          }
          WaitForInitialLoad() {
            return this.m_LoadingPromise;
          }
          get allNewsCurators() {
            return Array.from(this.m_mapNewsCurators.values());
          }
          GetCuratorsForLang(t) {
            return this.m_mapLangToNewsCurators.get(t);
          }
          GetNewsCuratorForAccount(t) {
            return this.m_mapNewsCurators.get(t);
          }
          BIsTrustedPressAccount(t) {
            return this.GetNewsCuratorForAccount(t) !== void 0;
          }
          async Init() {
            l.A0.GetLanguageListForRealms([I.TS.EREALM]).forEach((r) =>
              this.m_mapLangToNewsCurators.set(r, []),
            );
            const s = I.TS.STORE_BASE_URL + "events/ajaxgetnewscurators";
            let o = { origin: self.origin };
            const a = await te().get(s, { params: o });
            (0, U.h5)(() => {
              a.data && a.data.success && this.HandleCuratorResponse(a.data),
                (this.m_bIsLoadComplete = !0);
            });
          }
          HandleCuratorResponse(t) {
            if (
              (t.groupvanityinfo && T.ac.RegisterClanData(t.groupvanityinfo),
              t.newscuratorinfo)
            )
              for (const s of t.newscuratorinfo) {
                if (this.m_mapNewsCurators.has(s.clanAccountID)) continue;
                this.m_mapNewsCurators.set(s.clanAccountID, s);
                const o = T.ac.GetClanInfoByClanAccountID(s.clanAccountID);
                o && this.m_mapLangToNewsCurators.get(o.rss_language)?.push(s);
              }
          }
        };
        St([U.sH], rt.prototype, "m_mapNewsCurators", 2),
          St([U.sH], rt.prototype, "m_bIsLoadComplete", 2),
          St([U.sH], rt.prototype, "m_mapLangToNewsCurators", 2),
          St([U.EW], rt.prototype, "allNewsCurators", 1),
          St([U.XI], rt.prototype, "HandleCuratorResponse", 1);
        let it = rt;
        var na = i(8323),
          sa = i(48473),
          aa = i(16345),
          Ne = i.n(aa),
          oa = Object.defineProperty,
          ra = Object.getOwnPropertyDescriptor,
          ia = (n, t, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? ra(t, s) : t, r = n.length - 1, c;
              r >= 0;
              r--
            )
              (c = n[r]) && (a = (o ? c(t, s, a) : c(a)) || a);
            return o && a && oa(t, s, a), a;
          };
        function Bt(n) {
          const t = new Set();
          return (
            (n.indexOf("games") >= 0 || n.indexOf("dlc") >= 0) && t.add("apps"),
            n.indexOf("curators") >= 0 && t.add("curators"),
            t
          );
        }
        function la(n) {
          return n == "game" || n == "software"
            ? "games"
            : n == "dlc" || n == "music"
              ? "dlc"
              : null;
        }
        const ca = 300;
        class Rn extends w.Component {
          state = {
            strSearchString: "",
            rgAppSuggestions: null,
            rgCuratorSuggestions: null,
          };
          m_nHighestSentRequestID = 0;
          m_mapHighestReceivedRequestIDFromBackEnd = new Map([
            ["apps", 0],
            ["curators", 0],
          ]);
          m_timerForChange = new na.LU();
          componentWillUnmount() {
            this.m_timerForChange.Cancel();
          }
          CloseSuggestions() {
            this.setState({
              rgCuratorSuggestions: null,
              rgAppSuggestions: null,
              strSearchString: "",
            });
          }
          async GetSuggestionsFromServer(t) {
            const s = Bt(this.props.rgCorporaToSearch);
            s.has("apps") && this.GetAppSuggestionsFromServer(t),
              s.has("curators") && this.GetCuratorSuggestions(t);
          }
          async GetCuratorSuggestions(t) {
            const s = it.Get().allNewsCurators,
              o = [];
            for (const a of s) {
              const r = T.ac.GetClanInfoByClanAccountID(a.clanAccountID),
                c = {
                  corpus: "curators",
                  id: a.clanAccountID,
                  name: r?.group_name,
                  img: r?.avatar_full_url,
                };
              if ((r?.group_name?.toLocaleLowerCase() || "").indexOf(t) >= 0) {
                if (
                  (this.props.fnFilterSuggestion &&
                    !this.props.fnFilterSuggestion(c)) ||
                  ot.Fm.Get().BIsIgnoringCurator(r.clanAccountID)
                )
                  continue;
                const d = ot.Fm.Get().BIsFollowingCurator(r.clanAccountID),
                  p = (0, e.jsx)(
                    Fn,
                    {
                      suggestion: c,
                      fnOnSelected: this.props.fnOnSelected,
                      bShowFollowingLabel: d,
                    },
                    "curatorsug_" + c.id,
                  );
                o.push(
                  this.props.fnDecorateSuggestion
                    ? this.props.fnDecorateSuggestion(c, p)
                    : p,
                );
              }
            }
            this.m_mapHighestReceivedRequestIDFromBackEnd.set(
              "curators",
              this.m_nHighestSentRequestID,
            ),
              this.setState({ rgCuratorSuggestions: o });
          }
          async GetAppSuggestionsFromServer(t) {
            const s = this.m_nHighestSentRequestID,
              o = [];
            this.props.rgCorporaToSearch.indexOf("games") >= 0 &&
              (o.push("game"), o.push("software")),
              this.props.rgCorporaToSearch.indexOf("dlc") >= 0 &&
                (o.push("dlc"), o.push("music"));
            const a = {
                cc: I.TS.COUNTRY,
                l: I.TS.LANGUAGE,
                realm: ne.TU.k_ESteamRealmGlobal,
                origin: self.origin,
                f: "jsonfull",
                term: t.replace(" ", "+"),
                require_type: o.join(","),
                excluded_tags: ot.Fm.Get().GetExcludedTagsSortedByID(),
                excluded_content_descriptors:
                  ot.Fm.Get().ExcludedContentDescriptor,
              },
              r = `${I.TS.STORE_BASE_URL}search/suggest`,
              c = await te().get(r, { params: a, withCredentials: !0 });
            if (s < this.m_mapHighestReceivedRequestIDFromBackEnd.get("apps"))
              return;
            this.m_mapHighestReceivedRequestIDFromBackEnd.set("apps", s);
            let h;
            c?.data?.length &&
              (h = c.data.map((d) => {
                const p = { corpus: la(d.type), ...d, id: parseInt(d.id) };
                if (
                  this.props.fnFilterSuggestion &&
                  !this.props.fnFilterSuggestion(p)
                )
                  return null;
                const E = (0, e.jsx)(
                  Fn,
                  { suggestion: p, fnOnSelected: this.props.fnOnSelected },
                  p.type + p.id,
                );
                return this.props.fnDecorateSuggestion
                  ? this.props.fnDecorateSuggestion(p, E)
                  : E;
              })),
              this.setState({ rgAppSuggestions: h });
          }
          async UpdateSuggestions(t) {
            const s =
              t.target.value && t.target.value.trim().toLocaleLowerCase();
            if ((this.m_nHighestSentRequestID++, !s?.length)) {
              Array.from(Bt(this.props.rgCorporaToSearch)).forEach((o) =>
                this.m_mapHighestReceivedRequestIDFromBackEnd.set(
                  o,
                  this.m_nHighestSentRequestID,
                ),
              ),
                this.m_timerForChange.Cancel(),
                this.setState({ strSearchString: "" }),
                this.ResetSuggestions();
              return;
            }
            this.setState({ strSearchString: s }),
              this.m_timerForChange.Schedule(ca, () =>
                this.GetSuggestionsFromServer(s),
              );
          }
          ResetSuggestions() {
            this.setState({
              rgAppSuggestions: null,
              rgCuratorSuggestions: null,
            });
          }
          GetLimitedSuggestions() {
            let { rgAppSuggestions: t, rgCuratorSuggestions: s } = this.state;
            const o = 10;
            let a = t ? t.length : o,
              r = s ? s.length : o;
            return (
              a + r > o && (a = o - Math.min(r, 2)),
              (r = o - a),
              (t = t?.slice(0, a)),
              (s = s?.slice(0, r)),
              { rgAppSuggestions: t, rgCuratorSuggestions: s }
            );
          }
          render() {
            const {
                strLabel: t,
                focusOnMount: s,
                rgCorporaToSearch: o,
                strResultsClass: a,
              } = this.props,
              { strSearchString: r } = this.state,
              { rgAppSuggestions: c, rgCuratorSuggestions: h } =
                this.GetLimitedSuggestions(),
              d = r?.length > 0,
              p = c?.length > 0,
              E = h?.length > 0,
              A = Bt(o).size > 1,
              x =
                A &&
                p &&
                (0, l.we)(
                  o.indexOf("dlc") >= 0
                    ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                    : "#EventCalendar_SearchResultsHeader_GameSection",
                ),
              f = Array.from(Bt(o)).some(
                (y) =>
                  this.m_nHighestSentRequestID >
                  this.m_mapHighestReceivedRequestIDFromBackEnd.get(y),
              ),
              b = !E && !p && !f;
            return (0, e.jsxs)("div", {
              className: Ne().SuggestContainer,
              children: [
                (0, e.jsx)(Fe.pd, {
                  type: "text",
                  label: t,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: d,
                  focusOnMount: s,
                }),
                d &&
                  (0, e.jsxs)("div", {
                    className: (0, v.A)(Ne().Results, a),
                    children: [
                      p &&
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              A &&
                                (0, e.jsx)("div", {
                                  className: Ne().ResultSectionHeader,
                                  children: x,
                                }),
                              c,
                            ],
                          },
                          "game-suggestions",
                        ),
                      E &&
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              A &&
                                (0, e.jsx)("div", {
                                  className: Ne().ResultSectionHeader,
                                  children: (0, l.we)(
                                    "#EventCalendar_SearchResultsHeader_CuratorSection",
                                  ),
                                }),
                              h,
                            ],
                          },
                          "curator-suggestions",
                        ),
                      b &&
                        (0, e.jsx)(
                          "div",
                          {
                            className: Ne().EmptyResults,
                            children: (0, l.we)(
                              "#EventCalendar_GameSearch_NoneFound",
                            ),
                          },
                          "empty-results",
                        ),
                      f && (0, e.jsx)(X.t, { size: "small" }),
                    ],
                  }),
              ],
            });
          }
        }
        ia([Se.oI], Rn.prototype, "UpdateSuggestions", 1);
        const Fn = (n) =>
          (0, e.jsxs)(
            "div",
            {
              className: Ne().ResultRow,
              onClick: () => n.fnOnSelected(n.suggestion),
              children: [
                (0, e.jsx)("img", {
                  src: n.suggestion.img,
                  className: Ne().AvatarImage,
                }),
                (0, e.jsxs)("div", {
                  className: Ne().GameName,
                  children: [" ", (0, sa.EK)(n.suggestion.name), " "],
                }),
                n.bShowFollowingLabel &&
                  (0, e.jsx)("div", {
                    className: Ne().Label,
                    children: (0, l.we)("#EventCalendar_FollowingCurator"),
                  }),
              ],
            },
            `suggestion-${n.suggestion.id}`,
          );
        var Hn = i(72147),
          da = i(63292),
          Be = i.n(da);
        function ua(n) {
          const { closeModal: t } = n,
            s = () => {
              (0, N.v0)().m_visibilityStore.SetGameSourceAllowed(
                M.FD.k_ECurator,
                !0,
              ),
                t && t();
            },
            o = () => {
              (0,
              N.v0)().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(
                !0,
              ),
                t && t();
            };
          return (0, e.jsx)(He.o0, {
            strTitle: (0, l.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_Title",
            ),
            strDescription: (0, l.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_Description",
            ),
            strOKButtonText: (0, l.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton",
            ),
            strCancelButtonText: (0, l.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton",
            ),
            onOK: s,
            onCancel: o,
          });
        }
        function Pn(n) {
          n ||
            ((0, N.dP)() &&
              ((0,
              N.v0)().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
                (0, N.v0)().m_visibilityStore.BIsGameSourceAllowed(
                  M.FD.k_ECurator,
                ) ||
                (0, We.pg)((0, e.jsx)(ua, {}), window)));
        }
        const ma = (n) =>
            (0, e.jsx)(He.x_, {
              onEscKeypress: n.closeModal,
              children: (0, e.jsx)(L.tH, {
                children: (0, e.jsxs)(Fe.UC, {
                  children: [
                    (0, e.jsx)(Fe.Y9, {
                      children: (0, l.we)("#EventCurator_BrowseDialog_Title"),
                    }),
                    (0, e.jsxs)(Fe.nB, {
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, l.we)(
                            "#EventCurator_BrowseDialog_Desc",
                          ),
                        }),
                        (0, e.jsx)(Mn, {}),
                      ],
                    }),
                    (0, e.jsx)(Fe.wi, {
                      children: (0, e.jsx)(Fe.jn, {
                        onClick: n.closeModal,
                        children: (0, l.we)("#Button_Dismiss"),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ha = (n) =>
            (0, e.jsx)(Wn, {
              title: (0, l.we)("#EventCurator_BrowseDialog_Title"),
              description: (0, l.we)("#EventCurator_BrowseDialog_Desc"),
              children: (0, e.jsx)(Mn, {}),
            }),
          Mn = (n) => {
            const [t, s] = w.useState(it.Get().IsLoaded());
            w.useEffect(() => {
              t || (async () => (await it.Get().WaitForInitialLoad(), s(!0)))();
            }, [t]);
            let o = new Array();
            return (
              t &&
                l.pf
                  .GetELanguageFallbackOrder([ne.TU.k_ESteamRealmGlobal])
                  .forEach((r) =>
                    o.push((0, e.jsx)(pa, { lang: r }, "curlang" + r)),
                  ),
              (0, e.jsx)(e.Fragment, {
                children: t
                  ? (0, e.jsx)(w.Fragment, { children: o })
                  : (0, e.jsx)(X.t, {
                      size: "medium",
                      position: "center",
                      string: (0, l.we)("#Loading"),
                    }),
              })
            );
          },
          pa = (n) => {
            const t = it.Get().GetCuratorsForLang(n.lang);
            if (!t) return null;
            const s = t
              .map((a) => T.ac.GetClanInfoByClanAccountID(a.clanAccountID))
              .filter((a) => !!a);
            if (s.length == 0) return null;
            s.sort((a, r) => a.group_name.localeCompare(r.group_name));
            const o = s.map((a) =>
              (0, e.jsx)(
                On,
                { clanInfo: a, layout: "row" },
                "curatorbrowse_" + a.clanAccountID,
              ),
            );
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: Be().LanguageHeader,
                  children: (0, l.we)(
                    "#EventCurator_BrowseDialog_LangCurator",
                    (0, l.we)("#Language_" + (0, B.LgB)(n.lang)),
                  ),
                }),
                o,
              ],
            });
          },
          va = (0, G.PA)((n) => {
            const t = T.ac.GetClanInfoByClanAccountID(n.clanid);
            if (!t) return (0, e.jsx)("div", { children: n.children });
            const s = {
                clan_account_id: t.clanAccountID,
                name: t.group_name,
                type: "developer",
              },
              o = (0, e.jsx)("div", {
                className: Be().CuratorHoverContainer,
                children: (0, e.jsx)(tt.hA, {
                  creatorID: s,
                  bSmallFormat: !0,
                  bHideCreatorType: !0,
                  bHideFollowButton: !0,
                }),
              });
            return (0, e.jsx)(Me.m9, {
              toolTipContent: o,
              bTopmost: !0,
              children: n.children,
            });
          }),
          On = (n) => {
            const [t, s] = w.useState(!1),
              o = () => {
                (0, We.pg)(
                  (0, e.jsx)(He.KG, {
                    strDescription: (0, l.we)(
                      "#EventCurator_NoEventsFound_Body",
                    ),
                    strTitle: (0, l.we)("#EventCurator_NoEventsFound_Title"),
                  }),
                  window,
                ),
                  s(!1);
              },
              a = () =>
                t
                  ? (0, e.jsx)(L.tH, {
                      children: (0, e.jsx)(Ee.N, {
                        onEventNotFound: o,
                        appid: 0,
                        clanSteamID: n.clanInfo.clanSteamID,
                        trackingLocation: ae.Tc.qC,
                        eventModel: void 0,
                        announcementGID: void 0,
                        partnerEventStore: ve.O3,
                        showAppHeader: !0,
                        closeModal: () => s(!1),
                      }),
                    })
                  : null,
              { clanInfo: r, layout: c } = n,
              h = c === "row" ? Be().CuratorInfoRow : Be().CuratorInfoIcon,
              d = (0, e.jsx)(va, {
                clanid: r.clanSteamID.GetAccountID(),
                children: (0, e.jsxs)("div", {
                  className: (0, v.A)(
                    j().FlexRowContainer,
                    Be().CuratorInfoTitleCtn,
                  ),
                  onClick: () => s(!0),
                  children: [
                    (0, e.jsx)("img", {
                      className: Be().CuratorInfoImg,
                      src: r.avatar_full_url,
                      alt: r.group_name,
                    }),
                    (0, e.jsx)("div", {
                      className: Be().CuratorInfoName,
                      children: r.group_name,
                    }),
                  ],
                }),
              });
            return (0, e.jsxs)("div", {
              className: (0, v.A)(j().FlexRowWrapSpaceBetweenContainer, h),
              children: [
                a(),
                (0, e.jsx)("div", { onClick: () => s(!0), children: d }),
                (0, e.jsx)("div", {
                  className: (0, v.A)(
                    j().FlexRowContainer,
                    Be().CuratorInfoActionCtn,
                  ),
                  children: (0, e.jsx)(Hn.of, {
                    clanAccountID: r.clanAccountID,
                    className: Be().CuratorInfoFollow,
                    fnSuccessCallback: Pn,
                  }),
                }),
              ],
            });
          };
        var ga = i(10686),
          u = i.n(ga),
          fa = i(19367),
          Lt = i.n(fa);
        class Zt {
          m_dateLoadTime = Ke.HD.GetTimeNowWithOverrideAsDate();
          IsCurrentlyVisible(t) {
            return (
              (!t.startVisible || t.startVisible <= this.m_dateLoadTime) &&
              (!t.endVisible || t.endVisible >= this.m_dateLoadTime)
            );
          }
          static IsCurrentlyActive(t) {
            const s = Ke.HD.GetTimeNowWithOverrideAsDate();
            return (
              (!t.startEvent || t.startEvent <= s) &&
              (!t.endEvent || t.endEvent >= s)
            );
          }
          static LocalizeDateString(t) {
            if (!t.startEvent) return null;
            const s = { month: "long", day: "numeric" },
              o = t.startEvent.toLocaleDateString(
                l.pf.GetPreferredLocales(),
                s,
              );
            if (!t.endEvent) return o;
            const a = {
                month:
                  t.startEvent.getMonth() != t.endEvent.getMonth()
                    ? "long"
                    : void 0,
                day: "numeric",
              },
              r = t.endEvent.toLocaleDateString(l.pf.GetPreferredLocales(), a);
            return `${o} - ${r}`;
          }
          GetVisibleSpecialEvents() {
            return [
              {
                sLocToken: "#NewsHubSpecialEvent_GameFestival",
                startVisible: new Date(
                  Lt()("2020-06-16T14:00:00-07:00").unix() * 1e3,
                ),
                endVisible: new Date(
                  Lt()("2020-06-22T10:00:00-07:00").unix() * 1e3,
                ),
                startEvent: new Date(
                  Lt()("2020-06-16T10:00:00-07:00").unix() * 1e3,
                ),
                endEvent: new Date(
                  Lt()("2020-06-22T10:00:00-07:00").unix() * 1e3,
                ),
                newshubUrl: "news/collection/GameFestival2020",
              },
            ].filter((s) => this.IsCurrentlyVisible(s));
          }
        }
        const Un = new Zt();
        class Sa extends w.Component {
          render() {
            const { specialEvent: t } = this.props,
              s = window.location.href === I.TS.STORE_BASE_URL + t.newshubUrl,
              o = Zt.IsCurrentlyActive(t),
              a = Zt.LocalizeDateString(t);
            return (0, e.jsx)(Gn.N_, {
              to: "/" + t.newshubUrl,
              children: (0, e.jsxs)("div", {
                className: (0, v.A)(
                  u().SpecialEvent,
                  s && u().SpecialEventOnPage,
                  o && u().SpecialEventActive,
                ),
                children: [
                  (0, e.jsx)("div", {
                    className: u().SpecialEventTitle,
                    children: (0, l.we)(t.sLocToken),
                  }),
                  a &&
                    (0, e.jsx)("div", {
                      className: u().SpecialEventTime,
                      children: a,
                    }),
                ],
              }),
            });
          }
        }
        class Ca extends w.Component {
          render() {
            const t = Un.GetVisibleSpecialEvents();
            return t.length === 0
              ? null
              : (0, e.jsxs)("div", {
                  className: u().SpecialEventListGroup,
                  children: [
                    (0, e.jsx)("div", {
                      className: u().SpecialEventListTitle,
                      children: (0, l.we)("#Events_SpecialEvents"),
                    }),
                    (0, e.jsx)("div", {
                      className: u().SpecialEventList,
                      children: t.map((s) =>
                        (0, e.jsx)(Sa, { specialEvent: s }, s.sLocToken),
                      ),
                    }),
                  ],
                });
          }
        }
        var Ea = i(68900),
          Ia = i(12088),
          be = i.n(Ia);
        function kn() {
          return (0, l.vl)(new Date());
        }
        const xa = (n) => {
            const t = I.TS.PUBLIC_SHARED_URL + "images/";
            return (0, e.jsxs)("div", {
              className: be().LegalFooter,
              children: [
                (0, e.jsxs)("div", {
                  className: be().mainmenu_links_china,
                  children: [
                    (0, e.jsx)("a", {
                      href: I.TS.STORE_BASE_URL + "about",
                      children: "\u5173\u4E8E\u84B8\u6C7D\u5E73\u53F0",
                    }),
                    "\xA0 | \xA0",
                    (0, e.jsx)("a", {
                      href: I.TS.STORE_BASE_URL + "steam_refunds",
                      children: "\u9000\u6B3E\u653F\u7B56",
                    }),
                    "\xA0 | \xA0",
                    (0, e.jsx)("a", {
                      href: I.TS.STORE_BASE_URL + "subscriber_agreement",
                      children:
                        "\u8F6F\u4EF6\u8BB8\u53EF\u670D\u52A1\u534F\u8BAE",
                    }),
                    "\xA0 | \xA0",
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("a", {
                      href: I.TS.STORE_BASE_URL + "privacy_agreement",
                      children:
                        "\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u653F\u7B56",
                    }),
                    "\xA0 | \xA0",
                    (0, e.jsx)("a", {
                      href: "https://about.steamchina.com/content_report.html",
                      target: "_blank",
                      rel: "noreferrer",
                      children:
                        "\u4E0D\u826F\u5185\u5BB9\u4E3E\u62A5\u6295\u8BC9",
                    }),
                    "\xA0 | \xA0",
                    (0, e.jsx)("a", {
                      href: "https://about.steamchina.com/infringement_report.html",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "\u4FB5\u6743\u6295\u8BC9",
                    }),
                    "\xA0 | \xA0",
                    (0, e.jsx)("a", {
                      href: "https://about.steamchina.com/parentguardianship_agreement.html",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "\u5BB6\u957F\u76D1\u62A4",
                    }),
                  ],
                }),
                (0, e.jsx)("div", { className: be().mainmenu_line }),
                (0, e.jsxs)("div", {
                  className: be().mainmenu_logos_china,
                  children: [
                    (0, e.jsx)("a", {
                      href: "https://www.wanmei.com/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: (0, e.jsx)("img", {
                        className: be().mainmenu_china_pw_logo,
                        src: t + "footer/pw_logo_gy.svg?v=1",
                      }),
                    }),
                    (0, e.jsx)("a", {
                      href: "https://valvesoftware.com",
                      target: "_blank",
                      rel: "noreferrer",
                      children: (0, e.jsx)("img", {
                        className: be().mainmenu_china_valve_logo,
                        src: t + "footer/valve_logo_gy.svg?v=1",
                      }),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: be().mainmenu_legal_china,
                  children: [
                    (0, e.jsxs)("div", {
                      className: be().mainmenu_legal_valvelegal,
                      children: [
                        `\xA9 ${kn()} Valve Corporation \u7248\u6743\u6240\u6709\uFF0C\u5B8C\u7F8E\u4E16\u754C\u5DF2\u83B7\u6388\u6743`,
                        (0, e.jsx)("br", {}),
                        "\u6240\u6709\u5546\u6807\u5747\u5C5E\u4E8E\u5176\u5728\u7F8E\u56FD\u6216\u5176\u4ED6\u56FD\u5BB6\u7684\u62E5\u6709\u8005\u3002",
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: be().mainmenu_legal_pwlegal,
                      children: [
                        "\xA9 \u5B8C\u7F8E\u4E16\u754C\u5F81\u5947(\u4E0A\u6D77)\u591A\u5A92\u4F53\u79D1\u6280\u6709\u9650\u516C\u53F8 \u7248\u6743\u6240\u6709\u3002",
                        (0, e.jsx)("br", {}),
                        "\u589E\u503C\u7535\u4FE1\u4E1A\u52A1\u7ECF\u8425\u8BB8\u53EF\u8BC1\u6CAAB2-20180406",
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          _a = (n) =>
            (0, e.jsxs)("div", {
              className: be().LegalFooter,
              children: [
                (0, e.jsx)("img", {
                  src:
                    I.TS.STORE_CDN_URL +
                    "public/images/footerLogo_valve_new.png",
                }),
                (0, e.jsx)("div", {
                  className: be().FooterLegal,
                  children: (0, l.we)("#Legal_Footer_WithYear", kn()),
                }),
              ],
            }),
          ba = (n) => ((0, I.Y2)() ? (0, e.jsx)(xa, {}) : (0, e.jsx)(_a, {}));
        var Ct = i(35675),
          ya = Object.defineProperty,
          wa = Object.getOwnPropertyDescriptor,
          lt = (n, t, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? wa(t, s) : t, r = n.length - 1, c;
              r >= 0;
              r--
            )
              (c = n[r]) && (a = (o ? c(t, s, a) : c(a)) || a);
            return o && a && ya(t, s, a), a;
          };
        const Vn = class mt {
          m_curDisplay = "desktop_navigation";
          m_fnGetRouterHistory = void 0;
          static s_GlobalStore;
          static Get() {
            return (
              mt.s_GlobalStore || (mt.s_GlobalStore = new mt()),
              mt.s_GlobalStore
            );
          }
          constructor() {
            (0, U.Gn)(this);
          }
          UpdateLocation(t, s) {
            this.m_fnGetRouterHistory = t;
            const o = (0, F.f3)(s, "optionpane");
            if (o)
              switch (o) {
                case "event_filter":
                case "browse_curator":
                case "desktop_navigation":
                  this.m_curDisplay != o && (this.m_curDisplay = o);
                  break;
              }
            else
              this.m_curDisplay != "desktop_navigation" &&
                (this.m_curDisplay = "desktop_navigation");
            return this.m_curDisplay;
          }
          SetDisplay(t) {
            (this.m_curDisplay = t),
              this.m_fnGetRouterHistory &&
                (0, F.Bm)(
                  this.m_fnGetRouterHistory(),
                  "optionpane",
                  this.m_curDisplay == "desktop_navigation"
                    ? void 0
                    : this.m_curDisplay,
                );
          }
          GetDisplay() {
            return this.m_curDisplay;
          }
          ShowBrowseCurator(t) {
            $e()
              ? mt.Get().SetDisplay("browse_curator")
              : (0, We.pg)((0, e.jsx)(ma, {}), (0, Dt.uX)(t));
          }
        };
        lt([U.sH], Vn.prototype, "m_curDisplay", 2);
        let ct = Vn,
          $t = class extends w.Component {
            GetVisibilityStore() {
              return (0, N.v0)().m_visibilityStore;
            }
            OnEventTypeChange(n, t) {
              this.GetVisibilityStore().SetEventTypeGroupAllowed(n, t),
                this.props.fnOnFilterChange();
            }
            RenderEventTypeCheckbox(n) {
              const t = this.GetVisibilityStore().BIsEventTypeGroupAllowed(n);
              return (0, e.jsx)(
                Me.he,
                {
                  toolTipContent: (0, l.we)(
                    "#EventCalendar_EventTypeGroup_ttip_" + n,
                  ),
                  direction: "top",
                  children: (0, e.jsx)(Ft, {
                    label: (0, l.we)("#EventCalendar_EventTypeGroup_" + n),
                    checked: t,
                    onChange: (s) => this.OnEventTypeChange(n, s),
                  }),
                },
                `group-${n}`,
              );
            }
            OnGameSourceChange(n, t) {
              this.GetVisibilityStore().SetGameSourceAllowed(n, t),
                this.props.fnOnFilterChange();
            }
            RenderGameSourceCheckbox(n, t) {
              const s =
                this.GetVisibilityStore().BIsGameSourceAllowed(n) ||
                (n == M.FD.k_ELibrary &&
                  this.GetVisibilityStore().BIsGameSourceAllowed(
                    M.FD.k_ERecent,
                  ));
              return (0, e.jsx)(
                Me.he,
                {
                  direction: "top",
                  toolTipContent: t
                    ? (0, l.we)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : (0, l.we)("#EventCalendar_GameSource_ttip_" + n),
                  children: (0, e.jsx)(Ft, {
                    label: (0, l.we)("#EventCalendar_GameSource_" + n),
                    checked: s,
                    disabled: t,
                    onChange: (o) => this.OnGameSourceChange(n, o),
                  }),
                },
                `gs-${n}`,
              );
            }
            render() {
              const { bUserIsLoggedIn: n } = this.props,
                t = (0, N.v0)();
              let s = !0;
              if (t.BIsSingleGroupCalendar()) {
                let c = T.ac.GetClanInfoByClanAccountID(t.GetSingleGroupID());
                c && c.has_rss_feed && (s = !1);
              } else
                t.BIsCollectionCalendar() &&
                  (t.GetKey().collectionid == z.g.Press ||
                    t.GetKey().collectionid == z.g.Dev_Sales ||
                    t.GetKey().collectionid == z.g.Dev_AssociatedPress) &&
                  (s = !1);
              const o = Ra(t),
                a = Qt.S.Get().GetMutedSourceCount(),
                r =
                  t.BIsSingleSourceMuted() ||
                  (!t.BIsSingleSourceCalendar() && a > 0);
              return (0, e.jsxs)(Wn, {
                title: (0, l.we)("#EventCalendar_FiltersTitle"),
                description: (0, l.we)(
                  t.BIsGlobalCalendar()
                    ? "#EventCalendar_FiltersDescription"
                    : "#EventCalendar_FiltersDescription_NonPersonalized",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: u().FilterSection,
                    children: [
                      s &&
                        (0, e.jsxs)(Gt, {
                          children: [
                            (0, e.jsx)(Rt, {
                              children: (0, l.we)(
                                "#EventCalendar_FilterSubSection_EventTypeGroups",
                              ),
                            }),
                            this.RenderEventTypeCheckbox(M.xj.k_EEvents),
                            this.RenderEventTypeCheckbox(M.xj.k_EStreaming),
                            this.RenderEventTypeCheckbox(M.xj.k_EUpdates),
                            this.RenderEventTypeCheckbox(M.xj.k_EReleases),
                            this.RenderEventTypeCheckbox(M.xj.k_ESales),
                            this.RenderEventTypeCheckbox(M.xj.k_ENews),
                          ],
                        }),
                      !!t.BIsGlobalCalendar() &&
                        (0, e.jsxs)(Gt, {
                          children: [
                            (0, e.jsx)(Rt, {
                              children: (0, l.we)(
                                "#EventCalendar_FilterSubSection_GameSources",
                              ),
                            }),
                            this.RenderGameSourceCheckbox(M.FD.k_ELibrary, !n),
                            (0, e.jsx)("div", {
                              className: u().FilterSubOption,
                              children: this.RenderGameSourceCheckbox(
                                M.FD.k_ERecent,
                                !n,
                              ),
                            }),
                            this.RenderGameSourceCheckbox(M.FD.k_EWishlist, !n),
                            (0, Ct.xU)() &&
                              this.RenderGameSourceCheckbox(
                                M.FD.k_EFollowing,
                                !n,
                              ),
                            this.RenderGameSourceCheckbox(
                              M.FD.k_ERecommended,
                              !n,
                            ),
                            this.RenderGameSourceCheckbox(M.FD.k_ESteam),
                            Ke.HD.bIncludeFeaturedAsGameSource &&
                              this.RenderGameSourceCheckbox(M.FD.k_EFeatured),
                          ],
                        }),
                      !!(
                        (0, Ct.Us)() &&
                        (t.BIsGlobalCalendar() || t.BIsSingleAppCalendar())
                      ) &&
                        (0, e.jsxs)(Gt, {
                          children: [
                            (0, e.jsx)(Rt, {
                              children: (0, l.we)(
                                "#EventCalendar_FilterSubSection_CuratorSources",
                              ),
                            }),
                            this.RenderGameSourceCheckbox(M.FD.k_ECurator, !n),
                            (0, e.jsx)(qt, {
                              onClick: ct.Get().ShowBrowseCurator,
                              children: (0, l.we)(
                                "#EventCalendar_BrowseCurators",
                              ),
                            }),
                          ],
                        }),
                      o &&
                        (0, e.jsx)(Aa, {
                          calendar: t,
                          onFilterChange: this.props.fnOnFilterChange,
                        }),
                      !!t.BIsSingleSourceMuted() &&
                        (0, e.jsx)("div", {
                          children: (0, l.we)(
                            t.BIsSingleGroupCalendar()
                              ? "#EventCalendar_SingleGroupIsMuted"
                              : "#EventCalendar_SingleAppIsMuted",
                          ),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: u().SideBarFilterNavLinks,
                    children: [
                      r &&
                        (0, e.jsx)(at.uU, {
                          className: u().MutedSourcesGroup,
                          href: I.TS.STORE_BASE_URL + "account/emailoptout/app",
                          bDisableContextMenu: !0,
                          children: (0, e.jsxs)(qt, {
                            children: [
                              (0, e.jsx)(ce.fSs, { muted: !0 }),
                              (0, l.we)("#EventCalendar_ManageMutedSources"),
                              (0, e.jsx)("div", {
                                className: u().NumberDisplay,
                                children: a,
                              }),
                            ],
                          }),
                        }),
                      (0, e.jsx)(at.uU, {
                        href: I.TS.STORE_BASE_URL + "account/preferences",
                        bDisableContextMenu: !0,
                        children: (0, e.jsxs)(qt, {
                          children: [
                            (0, e.jsx)(ce.nkJ, {}),
                            (0, l.we)("#EventCalendar_ManageStorePref"),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              });
            }
          };
        $t = lt([G.PA], $t);
        const Gt = (0, at.Ri)(u().FilterSubSection),
          Rt = (0, at.Ri)(u().FilterSubSectionTitle),
          qt = (0, at.Ri)(u().FilterLink);
        function Aa(n) {
          const { calendar: t, onFilterChange: s } = n,
            [o, a] = (0, pe.q3)(() => [
              t
                .GetAllClans()
                .filter((r) => T.ac.GetClanInfoByClanAccountID(r)?.group_name),
              t.GetAllApps().filter((r) => _e.A.Get().GetApp(r)?.GetName()),
            ]);
          return (
            (0, st.wT)(
              t.BIsCollectionCalendar,
              "Attempted to render collection source filters for a non collection calendar",
            ),
            t.BIsCollectionCalendar()
              ? (0, e.jsxs)(Gt, {
                  children: [
                    (0, e.jsx)(Rt, {
                      children: (0, l.we)(
                        "#EventCalendar_FilterSubSection_CollectionSources",
                      ),
                    }),
                    o.map((r) =>
                      (0, e.jsx)(
                        ja,
                        { calendar: t, clanid: r, onFilterChange: s },
                        r,
                      ),
                    ),
                    a.map((r) =>
                      (0, e.jsx)(
                        Ta,
                        { calendar: t, appid: r, onFilterChange: s },
                        r,
                      ),
                    ),
                  ],
                })
              : null
          );
        }
        function ja(n) {
          const { calendar: t, clanid: s, onFilterChange: o } = n,
            a = (0, pe.q3)(() => t.m_visibilityStore.BIsClanVisible(s)),
            r = (c) => {
              t.m_visibilityStore.SetClanVisibility(s, c), o();
            };
          return (0, e.jsx)(Ft, {
            label: T.ac.GetClanInfoByClanAccountID(s)?.group_name,
            checked: a,
            onChange: r,
          });
        }
        function Ta(n) {
          const { calendar: t, appid: s, onFilterChange: o } = n,
            a = t.m_visibilityStore.BIsAppVisible(s),
            r = (c) => {
              t.m_visibilityStore.SetAppVisibility(s, c), o();
            };
          return (0, e.jsx)(Ft, {
            label: _e.A.Get().GetApp(s)?.GetName(),
            checked: a,
            onChange: r,
          });
        }
        function Ft(n) {
          return (0, e.jsx)("div", {
            className: u().FilterOption,
            children: (0, e.jsx)(Fe.Yh, { ...n }),
          });
        }
        const Wn = (n) =>
          (0, e.jsxs)("div", {
            className: u().FilterControlPage,
            children: [
              (0, e.jsx)("div", {
                className: u().FiltersTitle,
                children: n.title,
              }),
              !!n.description &&
                (0, e.jsx)("div", {
                  className: u().FiltersDescription,
                  children: n.description,
                }),
              n.children,
            ],
          });
        function Ht(n) {
          ct.Get().SetDisplay(n ? "event_filter" : "desktop_navigation");
        }
        const Da = (0, G.PA)(function (t) {
            const {
                bUserIsLoggedIn: s,
                nDisappearingHeaderVisibleHeight: o,
                bIsCollapsed: a,
                fnToggleCollapsed: r,
                fnOnFilterChange: c,
              } = t,
              h = $e(),
              d = (0, e.jsx)("div", {
                className: u().MobileCloseButton,
                onClick: () => {
                  Ht(!1), r();
                },
                children: (0, e.jsx)(ce.i6V, {}),
              }),
              p = (0, I.Qn)(),
              E = a ? Math.max(0, o) : 0,
              A =
                h || p
                  ? null
                  : (0, e.jsx)("div", {
                      onClick: r,
                      className: u().CollapseButton,
                      children: (0, e.jsx)("div", {
                        style: { marginTop: `${E}px` },
                        className: u().DesktopButton,
                        children: (0, e.jsx)(ce.F2T, { angle: a ? 180 : 0 }),
                      }),
                    }),
              x = h
                ? null
                : (0, e.jsx)("div", {
                    onClick: () => Ht(!1),
                    className: u().CollapseButton,
                    children: (0, e.jsx)("div", {
                      style: { marginTop: `${E}px` },
                      className: u().DesktopButton,
                      children: (0, e.jsx)(ce.i6V, {}),
                    }),
                  }),
              f = ct.Get().GetDisplay() != "desktop_navigation" ? x : A,
              b = a ? void 0 : { top: `${o}px` },
              y = (0, N.v0)();
            let k;
            switch (ct.Get().GetDisplay()) {
              case "event_filter":
                k = (0, e.jsx)($t, { bUserIsLoggedIn: s, fnOnFilterChange: c });
                break;
              case "browse_curator":
                k = (0, e.jsx)(ha, {});
                break;
              case "desktop_navigation":
                k = (0, e.jsx)(Na, { ...t, fnOpenFilterSettings: Ht });
                break;
            }
            return (0, e.jsx)(w.Fragment, {
              children: (0, e.jsx)(he.Z, {
                className: (0, v.A)(
                  u().SidebarContainer,
                  a && u().SidebarCollapsed,
                ),
                style: b,
                "flow-children": "column",
                children: a
                  ? f
                  : (0, e.jsxs)("div", {
                      className: u().Sidebar,
                      children: [
                        d,
                        f,
                        (0, e.jsx)("div", {
                          className: u().ControlPageContainer,
                          children: k,
                        }),
                      ],
                    }),
              }),
            });
          }),
          Na = (0, G.PA)((n) => {
            const { bShouldIncludeLegalFooter: t, bShowUpcoming: s } = n,
              o =
                "Responsive_RequestMobileView" in window &&
                window.Responsive_RequestMobileView,
              a = (0, I.Qn)();
            return (0, e.jsxs)(w.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: u().SidebarBackground,
                  children: (0, e.jsx)(ce.Qte, {}),
                }),
                (0, e.jsx)("div", {
                  className: u().SidebarTitle,
                  children: (0, l.PP)(
                    "#EventCalendar_Title",
                    (0, e.jsx)("br", {}),
                  ),
                }),
                (0, e.jsx)(tn, { bIsUpcoming: s }),
                (0, e.jsx)(Ca, {}),
                (0, e.jsx)("div", {
                  className: u().SidePanelGameSearch,
                  children: (0, e.jsx)(Pt, {
                    label: (0, l.we)("#EventCalendar_UniversalSearch"),
                  }),
                }),
                (0, e.jsx)(Ga, { bIsUpcoming: s }),
                !a &&
                  (0, e.jsx)("div", {
                    className: u().FilterSettingsCtn,
                    children: (0, e.jsxs)("div", {
                      className: (0, v.A)(
                        u().FilterLink,
                        u().OpenFilterSettings,
                      ),
                      onClick: () => n.fnOpenFilterSettings(!0),
                      children: [
                        (0, e.jsx)(ce.wB_, {}),
                        (0, l.we)("#EventCalendar_EditFilters"),
                      ],
                    }),
                  }),
                o &&
                  (0, e.jsx)("div", {
                    className: (0, v.A)(
                      u().SidebarLink,
                      u().ForceResponsiveLink,
                    ),
                    onClick: o,
                    children: (0, l.we)("#EventCalendar_ShowResponsiveView"),
                  }),
                t && (0, e.jsx)(ba, {}),
              ],
            });
          });
        let Pt = class extends w.Component {
          DecorateSearchSuggestion(n, t) {
            if (n && n.id) {
              let s = "";
              return (
                n.corpus == "curators"
                  ? (s = "group/" + n.id)
                  : n.corpus == "games" &&
                    ((0, st.wT)(
                      (0, qs.fp)(n.type),
                      "Unexpected app type " + n.type,
                    ),
                    (s = "app/" + n.id)),
                (0, e.jsx)(
                  Jt.Ii,
                  { href: `/${(0, V.LJ)()}/${s}/`, children: t },
                  `suggestion-${n.id}`,
                )
              );
            }
            return t;
          }
          render() {
            const n = ["games", "curators"];
            return (0, e.jsx)(Rn, {
              strLabel: this.props.label,
              fnOnSelected: () => {},
              fnDecorateSuggestion: this.DecorateSearchSuggestion,
              rgCorporaToSearch: n,
              focusOnMount: this.props.focusOnMount,
            });
          }
        };
        Pt = lt([G.PA], Pt);
        const $o = (n) => {
          const { strLabNumber: t, strForumURL: s } = n,
            o = Config.STORE_BASE_URL + "labs";
          return jsxs("div", {
            className: styles.SideSteamLabsBannerCtn,
            children: [
              jsxs("div", {
                className: styles.SteamLabsIdentifiers,
                children: [
                  jsx("a", {
                    className: styles.SteamLabsName,
                    href: o,
                    target: Config.IN_CLIENT ? void 0 : "_blank",
                    children: Localize("#SteamLabs"),
                  }),
                  jsx("div", {
                    className: styles.SteamLabsNumber,
                    children: Localize("#SteamLabs_ExperimentNumber", t),
                  }),
                ],
              }),
              jsx("a", {
                className: styles.SteamLabsButton,
                href: s,
                target: Config.IN_CLIENT ? void 0 : "_blank",
                children: jsx(SVG.ChatBubble, {}),
              }),
            ],
          });
        };
        function Ba() {
          if (!(0, N.v0)().BIsGlobalCalendar() || !I.iA.logged_in) return;
          const n =
              (0, N.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
            t = (0, N.v0)().GetCurrentlyLoadedEventCount(n);
          return t
            ? (0, N.v0)().BHitEventHorizon("forward")
              ? String(t.nCount)
              : t.nCount + "+"
            : void 0;
        }
        function Le(n, t) {
          const s = (0, z.d)(n);
          if (((0, st.wT)(!!s, "Must define collection " + n), !s)) return null;
          let o = (0, N.v0)().GetCollectionID() == n,
            a;
          switch (n) {
            case z.g.Default:
              o = (0, N.v0)().BIsGlobalCalendar() && !t;
              break;
            case z.g.Upcoming:
              (o = (0, N.v0)().BIsGlobalCalendar() && t), (a = Ba());
              break;
          }
          return {
            name: s.strName,
            shortName: s.strShortName,
            key: n,
            url: s.strUrl,
            subtitle: s.strSubtitle,
            onPage: o,
            count: a,
            bValveOnly: s.bIsValveOnly,
          };
        }
        function zn(n, t) {
          const s = new Array();
          return s.push(Le(z.g.Default, n)), s.push(Le(z.g.Upcoming, n)), s;
        }
        function Kn(n, t) {
          const s = new Array();
          return (
            s.push(Le(z.g.Featured, n)),
            s.push(Le(z.g.Steam, n)),
            Ke.HD.GetTimeNowWithOverride() < 1668160800 &&
              s.push(Le(z.g.Halloween, n)),
            s
          );
        }
        function Yn(n, t) {
          const s = (0, N.v0)().BIsCollectionCalendar(),
            o = (0, V.LJ)(),
            a = new Array();
          if (((0, Ct.Us)() && a.push(Le(z.g.Press, n)), t))
            for (const r of Un.GetVisibleSpecialEvents())
              a.push({
                name: (0, l.we)(r.sLocToken),
                url: r.newshubUrl,
                onPage: !1,
                key: "event_" + r.sLocToken,
              });
          return (
            a.push(Le(z.g.Dev_Sales, n)),
            I.iA.is_support &&
              (a.push(Le(z.g.Dev_All, n)),
              a.push(Le(z.g.Dev_AssociatedPress, n))),
            a
          );
        }
        const La = (n) => {
          const {
            shortName: t,
            name: s,
            url: o,
            onPage: a,
            count: r,
            bValveOnly: c,
          } = n.element;
          return !I.iA.is_support && c
            ? null
            : (0, e.jsx)(Gn.N_, {
                to: "/" + o,
                children: (0, e.jsxs)("div", {
                  className: (0, v.A)(
                    u().MobileNavButton,
                    a && u().MobileNavButtonActive,
                  ),
                  children: [
                    t || s,
                    r &&
                      (0, e.jsx)("div", {
                        className: u().MobileNavCount,
                        children: r,
                      }),
                  ],
                }),
              });
        };
        let Mt = class extends w.Component {
          state = { bSearchExpanded: !1 };
          onExpandSearch(n) {
            this.setState({ bSearchExpanded: n });
          }
          render() {
            const { bSearchExpanded: n } = this.state,
              t = zn(this.props.bIsUpcoming, !1),
              s = Kn(this.props.bIsUpcoming, !1),
              o = Yn(this.props.bIsUpcoming, !1),
              a = [...t, ...s, ...o];
            return (0, e.jsxs)("div", {
              style: { transform: `translateY(${this.props.nTopOffset}px)` },
              className: u().MobileNavBannerCtn,
              children: [
                (0, e.jsx)("div", {
                  className: u().SettingsPanel,
                  onClick: this.props.fnToggleCollapsed,
                  children: (0, e.jsx)(ce.wB_, {}),
                }),
                (0, e.jsx)("div", {
                  className: (0, v.A)(
                    u().SettingsPanel,
                    n && u().SearchExpanded,
                  ),
                  onClick: () => this.onExpandSearch(!n),
                  children: (0, e.jsx)(ce.eSy, {}),
                }),
                n &&
                  (0, e.jsxs)(w.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        className: u().SearchDismiss,
                        onClick: () => this.onExpandSearch(!1),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, v.A)(
                          u().SearchBox,
                          n && u().SearchExpanded,
                        ),
                        children: (0, e.jsx)(Pt, { focusOnMount: !0 }),
                      }),
                    ],
                  }),
                (0, e.jsx)(Ea.Z, {
                  className: u().MobileNavHScroll,
                  children: (0, e.jsx)("div", {
                    className: u().MobileNavBannerList,
                    children: a.map((r) =>
                      (0, e.jsx)(La, { element: r }, r.key),
                    ),
                  }),
                }),
              ],
            });
          }
        };
        lt([Se.oI], Mt.prototype, "onExpandSearch", 1), (Mt = lt([G.PA], Mt));
        function en(n) {
          const {
            key: t,
            name: s,
            subtitle: o,
            url: a,
            onPage: r,
            count: c,
            bValveOnly: h,
            icon: d,
          } = n.element;
          return !I.iA.is_support && h
            ? null
            : (0, e.jsx)(Jt.Ii, {
                href: "/" + a,
                children: (0, e.jsxs)("div", {
                  className: (0, v.A)({
                    [u().NewsChannel]: !0,
                    [u().NewsChannelOnPage]: r,
                    [j().ValveOnlyBackground]: h,
                  }),
                  children: [
                    !!d &&
                      (0, e.jsx)("img", {
                        className: (0, v.A)(u().NewsChannelIcon),
                        src: d,
                      }),
                    (0, e.jsxs)("div", {
                      className: u().NewsChannelText,
                      children: [
                        (0, e.jsxs)("div", {
                          className: u().NewsChannelTitle,
                          children: [h && "(VO) ", s],
                        }),
                        o &&
                          (0, e.jsx)("div", {
                            className: u().NewsChannelSubtitle,
                            children: o,
                          }),
                      ],
                    }),
                    c !== void 0 &&
                      (0, e.jsx)("div", {
                        className: u().NewsChannelCount,
                        children: c,
                      }),
                  ],
                }),
              });
        }
        let tn = class extends w.Component {
          render() {
            const n = zn(this.props.bIsUpcoming, !1),
              t = Kn(this.props.bIsUpcoming, !1);
            return (0, e.jsxs)("div", {
              className: u().NewsChannelGroup,
              children: [
                (0, e.jsx)("div", {
                  className: u().NewsChannelListTitle,
                  children: (0, l.we)("#EventCalendar_NewsChannels"),
                }),
                (0, e.jsx)("div", {
                  className: u().NewsChannelList,
                  children: n.map((s) => (0, e.jsx)(en, { element: s }, s.key)),
                }),
                (0, e.jsx)("div", {
                  className: u().NewsChannelListTitle,
                  children: (0, l.we)("#EventCalendar_NewsChannels_Global"),
                }),
                (0, e.jsx)("div", {
                  className: u().NewsChannelList,
                  children: t.map((s) => (0, e.jsx)(en, { element: s }, s.key)),
                }),
              ],
            });
          }
        };
        tn = lt([G.PA], tn);
        function Ga(n) {
          const { bIsUpcoming: t } = n,
            s = Yn(t, !1);
          return s && s.length > 0
            ? (0, e.jsxs)("div", {
                className: (0, v.A)(u().NewsChannelGroup, u().DiscoverGroup),
                children: [
                  (0, e.jsx)("div", {
                    className: u().NewsChannelListTitle,
                    children: (0, l.we)("#EventCalendar_NewsChannels_Discover"),
                  }),
                  (0, e.jsx)("div", {
                    className: u().NewsChannelList,
                    children: s.map((o) =>
                      (0, e.jsx)(en, { element: o }, o.key),
                    ),
                  }),
                ],
              })
            : null;
        }
        function Ra(n) {
          return n.BIsCollectionCalendar() && n.GetCollectionID() === "steam";
        }
        var Fa = i(16346),
          Te = i(34360),
          Ha = i(72978),
          S = i.n(Ha),
          Jn = i(89926);
        const Pa = (0, G.PA)((n) => {
          const { eventModel: t, calendarEvent: s, history: o } = n,
            a = (x) => {
              let f = s.GetEntityName();
              (0, We.pg)(
                (0, e.jsx)(He.o0, {
                  strTitle: (0, l.we)("#EventCalendar_MuteApp_Title", f),
                  strDescription: (0, l.we)(
                    "#EventCalendar_MuteApp_details",
                    f,
                  ),
                  onOK: () =>
                    (0, N.v0)().UpdateEventBlockFromCalendarEvent(s, !1),
                  children: (0, e.jsx)("a", {
                    href: I.TS.STORE_BASE_URL + "account/emailoptout/app",
                    target: I.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, l.we)("#EventCalendar_ManageMutedSources"),
                  }),
                }),
                (0, Dt.uX)(x),
              );
            },
            r = () => {
              (0, N.v0)().UpdateEventBlockFromCalendarEvent(s, !0);
            },
            c = () => {
              const x = h().MapClanEventTypeToGroup(t.GetEventType());
              h().SetEventTypeGroupAllowed(x, !1);
            },
            h = () => (0, N.v0)().m_visibilityStore,
            d = (x, f, b, y = !0) => {
              h().BIsGameSourceAllowed(f) &&
                (y &&
                  x.push(
                    (0, e.jsx)(
                      Te.kt,
                      {
                        disabled: !0,
                        onSelected: () => {},
                        children: (0, l.we)("#EventCalender_Reason_" + f),
                      },
                      `item-source-${b}-${f}`,
                    ),
                  ),
                x.push(
                  (0, e.jsx)(
                    Te.kt,
                    {
                      onSelected: () => {
                        h().SetGameSourceAllowed(f, !1);
                      },
                      children: (0, l.we)("#EventCalender_Hide_Reason_" + f),
                    },
                    `item-hidesource-${b}-${f}`,
                  ),
                ));
            },
            p = (0, V.Bw)(t, V.PH.k_eStoreNewsHub, "allowRelative"),
            E = () => {
              p.startsWith("http") ? (window.location.href = p) : o.push(p);
            },
            A = (x) => {
              let f = [];
              const b = s.GetSource(),
                y = s.unique_id,
                k = (0, I.Y2)(),
                Q = (0, N.v0)();
              Q.BIsGlobalCalendar() &&
                (b &&
                  b & se.bK.k_eLibrary &&
                  (h().BIsGameSourceAllowed(M.FD.k_ERecent) && s.appInfo
                    ? (f.push(
                        (0, e.jsx)(
                          Te.kt,
                          {
                            disabled: !0,
                            onSelected: () => {},
                            children: (0, l.we)(
                              "#EventCalender_LastPlayed",
                              (0, l.Hq)(
                                Ke.HD.GetTimeNowWithOverride() -
                                  s.appInfo.last_played,
                              ),
                            ),
                          },
                          `item-source-${y}-lastplayed`,
                        ),
                      ),
                      d(f, M.FD.k_ERecent, y, !1))
                    : d(f, M.FD.k_ELibrary, y)),
                b && b & se.bK.k_eWishlist && d(f, M.FD.k_EWishlist, y),
                b && b & se.bK.k_eFollowing && d(f, M.FD.k_EFollowing, y),
                !k && b && b & se.bK.k_eCurator && d(f, M.FD.k_ECurator, y),
                b && b & se.bK.k_eRecommended && d(f, M.FD.k_ERecommended, y),
                b && b & se.bK.k_eSteam && d(f, M.FD.k_ESteam, y),
                b && b & se.bK.k_eFeatured && d(f, M.FD.k_EFeatured, y)),
                f.push(
                  (0, e.jsx)(
                    Te.kt,
                    {
                      onSelected: c,
                      children: (0, l.we)(
                        "#EVentCalendar_Hide_EventType",
                        (0, l.we)(
                          "#EventCalendar_EventTypeGroup_" +
                            h().MapClanEventTypeToGroup(t.GetEventType()),
                        ),
                      ),
                    },
                    t.GID + "hidetype",
                  ),
                ),
                I.iA.logged_in &&
                  (Qt.S.Get().BIsEventBlocked(s)
                    ? f.push(
                        (0, e.jsx)(
                          Te.kt,
                          {
                            onSelected: r,
                            children: (0, e.jsx)(Me.he, {
                              toolTipContent: (0, l.we)(
                                "#EventCalendar_UnMuteApp_ttip",
                              ),
                              children: (0, l.we)(
                                "#EventCalendar_UnMuteApp_Title",
                                s.GetEntityName(),
                              ),
                            }),
                          },
                          t.GID + "unmuteapp",
                        ),
                      )
                    : f.push(
                        (0, e.jsx)(
                          Te.kt,
                          {
                            onSelected: a,
                            children: (0, e.jsx)(Me.he, {
                              toolTipContent: (0, l.we)(
                                "#EventCalendar_MuteApp_ttip",
                              ),
                              children: (0, l.we)(
                                "#EventCalendar_MuteApp_Title",
                                s.GetEntityName(),
                              ),
                            }),
                          },
                          t.GID + "muteapp",
                        ),
                      )),
                !t.BIsOGGEvent() &&
                  !k &&
                  f.push((0, e.jsx)(Ma, { eventModel: t, calendarEvent: s })),
                Q.BIsSingleSourceCalendar() ||
                  f.push(
                    (0, e.jsx)(
                      Te.kt,
                      {
                        onSelected: E,
                        children: (0, l.we)(
                          "#EventCalendar_Goto_SpecificCalendar",
                          s.GetEntityName(),
                        ),
                      },
                      t.GID + "goto",
                    ),
                  ),
                t.appid &&
                  f.push(
                    (0, e.jsx)(
                      Te.kt,
                      {
                        onSelected: () =>
                          (window.location.href = (0, Kt.k2)(
                            I.TS.STORE_BASE_URL + "app/" + t.appid,
                          )),
                        children: (0, l.we)("#EventDisplay_ViewStorePage"),
                      },
                      t.GID + "goto",
                    ),
                  ),
                (0, Fa.lX)((0, e.jsx)(Te.tz, { children: f }), x);
            };
          return (0, e.jsx)("div", {
            className: (0, v.A)(S().FooterStat, S().Options),
            onClick: A,
            children: (0, e.jsx)(ce.faJ, {}),
          });
        });
        function Ma(n) {
          const { eventModel: t, calendarEvent: s } = n,
            o = (0, Ct.eT)(t.clanSteamID.GetAccountID()),
            { elDialogElement: a, fnShowLogonDialog: r } = (0, Jn.l)(),
            c = w.useCallback(async () => {
              I.iA.logged_in
                ? (await ot.Fm.Get().UpdateFollowOrIgnoreCurator(
                    t.clanSteamID,
                    !0,
                    !o,
                  ),
                  Pn(!!o))
                : r();
            }, [o, t.clanSteamID, r]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(
                Te.kt,
                {
                  onSelected: c,
                  children: (0, e.jsx)(Me.he, {
                    toolTipContent: (0, l.we)(
                      o
                        ? "#EventCalendar_UnFollowCurator_ttip"
                        : "#EventCalendar_FollowCurator_ttip",
                    ),
                    children: (0, l.we)(
                      o
                        ? "#EventCalendar_UnFollowCurator"
                        : "#EventCalendar_FollowCurator",
                      s.GetEntityName(),
                    ),
                  }),
                },
                t.GID + "followcurator",
              ),
              a,
            ],
          });
        }
        const Oa = (0, P.y)(Pa);
        var Ua = i(20035),
          ka = i(68988),
          Ye = i(90533),
          Va = i(85741),
          Wa = i(53876),
          za = i(88812),
          Et = i(18057),
          Je = i(21659),
          Xn = i(13532),
          Ka = i(71684),
          Ya = i(1123),
          Ja = i(29522);
        function Xa(n) {
          const {
              eventModel: t,
              calendarEvent: s,
              bSuppressHoverEffects: o,
              mode: a,
              bHideGameTitle: r,
              fnOnClicked: c,
            } = n,
            [h, d] = w.useState(!1),
            p = (0, Ye.fm)(),
            E = (0, Ja.$5)(t.GetAppIDOrReferenceAppID());
          (0, Ie.lv)(E);
          const A = (0, Va.Mg)(t);
          (0, T.$5)(s.clanInfo?.clanid);
          const x = (0, B.sfN)(I.TS.LANGUAGE),
            f = "capsule",
            [b, y, k, Q, q, K, ge, qe, ue, Ce, dn] = (0, pe.q3)(() => [
              t.has_live_stream,
              t.GetEventType(),
              t.GetAllTags(),
              t.GetCategoryAsString(),
              t.GetNameWithFallback(x),
              t.BImageNeedScreenshotFallback(f, x),
              t.appid,
              t.GID,
              t.GetStartTimeAndDateUnixSeconds(),
              t.GetSubTitleWithLanguageFallback(x),
              t.GetSummaryWithFallback(x),
            ]),
            [un, mn] = w.useState(() =>
              (0, Je.c5)() && y == B.zeJ ? ze.wI.full : ze.wI.capsule_main,
            ),
            hn = (0, Ya.Ey)(),
            pn = !!(K && ge && A),
            vn = (0, Tt.m0)(pn ? void 0 : t, f, x, un, hn) ?? A,
            Ut = nn(t, a),
            gn = (0, Wa.uU)(qe),
            kt = S()[`EventType${y}`],
            Vt = k.map((Wt) => S()[`Tag-${Wt}`]),
            zo = (0, v.A)(
              S().TileContainer,
              kt,
              b && S().TileVideoIcon,
              o ? S().DisableHovers : S().EnableHovers,
              h && S().VideoPlayerReady,
              Ut && S().HasVideo,
              gn && S().HasBeenRead,
              a === "wide" && S().WideMode,
              a === "carousel" && S().CarouselMode,
              a === "upcoming" && S().UpcomingMode,
              ...Vt,
            );
          let et = Ce,
            _t = dn;
          et === _t && (_t = void 0), et === q && (et = void 0);
          const rs = (0, gt.j3)(vn),
            is = (0, e.jsx)($a, {
              setVideoPlayerReady: d,
              calendarEvent: s,
              eventModel: t,
              mode: a,
              artworkType: f,
              strCapsuleImgURLForBackground: rs,
              fnSetCoverSize: mn,
            }),
            Ko = h && a !== "carousel",
            ls = o && y != B.zeJ && !Ko,
            Yo = ls && is,
            Jo = !ls && is,
            Xo =
              y !== B.uYK && y !== B.Fwr && Ke.HD.GetTimeNowWithOverride() < ue,
            ut = a !== "wide" || o,
            cs =
              Xo &&
              (0, e.jsx)("div", {
                className: (0, v.A)(S().ReminderContainer, ut && S().OnlyIcon),
                children: (0, e.jsx)(Cn.j, {
                  eventModel: t,
                  lang: x,
                  bShowStartTime: !0,
                  bOnlyShowIcon: ut,
                  bExpandLeft: ut,
                }),
              }),
            ds = !!(y !== B.Fwr && _t),
            Qo = !!(et && (!ds || !Qa(et, _t)));
          return (0, e.jsxs)("div", {
            className: zo,
            children: [
              (0, e.jsx)(Ua.C, { event: t, recordNewsHubStats: !0 }),
              (0, e.jsx)(V.tj, {
                eventModel: t,
                route: V.PH.k_eView,
                children: (0, e.jsxs)("div", {
                  className: S().Tile,
                  onClick: (Wt) => {
                    p.RecordInteraction(Ye.Eg.k_eClickThrough),
                      !(0, V.sY)() &&
                        (c(t), Wt.stopPropagation(), Wt.preventDefault());
                  },
                  children: [
                    y === B.zeJ &&
                      (0, e.jsx)("div", {
                        className: (0, v.A)(
                          S().TileBackgroundImage,
                          K && S().FallbackImage,
                        ),
                        style: { backgroundImage: `url(${rs})` },
                      }),
                    (0, e.jsxs)("div", {
                      className: S().MainContentContainer,
                      children: [
                        Jo,
                        (0, e.jsxs)("div", {
                          className: S().TileTextContainer,
                          children: [
                            y == B.Fwr &&
                              (0, e.jsx)("div", {
                                className: S().PatchIconCtn,
                                children: (0, e.jsx)(ce.vjL, {}),
                              }),
                            (0, e.jsxs)("div", {
                              className: S().EventTitleCtn,
                              children: [
                                Yo,
                                !r &&
                                  (0, e.jsxs)("div", {
                                    className: S().GameSource,
                                    children: [
                                      (0, e.jsx)(Qn, { ...n }),
                                      s && (0, e.jsx)(to, { calendarEvent: s }),
                                    ],
                                  }),
                                (0, e.jsx)("div", {
                                  className: S().EventName,
                                  children: q,
                                }),
                                (0, e.jsxs)("div", {
                                  className: S().EventTypeAndDateCtn,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: (0, v.A)(
                                        S().TileTextCategoryType,
                                        kt,
                                      ),
                                      children: Q,
                                    }),
                                    (0, e.jsx)(eo, {
                                      eventModel: t,
                                      className: (0, v.A)(
                                        ut && S().LeaveRoomForReminder,
                                      ),
                                    }),
                                    ut && cs,
                                  ],
                                }),
                                Qo &&
                                  (0, e.jsx)("div", {
                                    className: S().EventSubTitle,
                                    children: et,
                                  }),
                                ds &&
                                  (0, e.jsx)("div", {
                                    className: (0, v.A)(
                                      S().EventSummaryDefault,
                                      et ? S().SubTitleShown : "",
                                    ),
                                    children: _t,
                                  }),
                              ],
                            }),
                            !ut && cs,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, e.jsx)(ao, { ...n }),
            ],
          });
        }
        function Qa(n, t) {
          const s = (r) => r.replace(/\W+/g, "").toLocaleLowerCase(),
            o = s(n);
          return s(t).startsWith(o);
        }
        function nn(n, t) {
          const { video_preview_type: s, video_preview_id: o, type: a } = n;
          return !(t === "upcoming" || !o || a === B.Fwr || s !== "youtube");
        }
        function Za(n) {
          const { eventModel: t, fnSetVideoStateReady: s, mode: o } = n,
            { video_preview_id: a, type: r } = n.eventModel,
            c = (0, Ye.fm)(),
            h = (0, B.sfN)(I.TS.LANGUAGE),
            d = (0, Je.c5)() && r == B.zeJ ? ze.wI.full : ze.wI.capsule_main,
            p = (0, za.WC)(t, "capsule", h, d, !0);
          if (o === "carousel")
            return (0, e.jsx)(Xn.r, {
              altImgWithFallback: p,
              video: a,
              className: S().YoutubePreviewImage,
            });
          const E = () => {
            c.RecordInteraction(Ye.Eg.k_ePlayedVideo), s(!0);
          };
          return (0, e.jsx)(Xn.l, {
            video: a,
            altImgWithFallback: p,
            autoplay: !0,
            autopause: !0,
            showFullscreenBtn: !0,
            controls: !0,
            imageClassnames: S().YoutubePreviewImage,
            onPlayerActivated: E,
            preloadYoutubeScripts: !0,
            playsInline: !0,
          });
        }
        function $a(n) {
          const {
              eventModel: t,
              calendarEvent: s,
              mode: o,
              artworkType: a,
              strCapsuleImgURLForBackground: r,
              setVideoPlayerReady: c,
              fnSetCoverSize: h,
            } = n,
            d = (0, B.sfN)(I.TS.LANGUAGE),
            p = nn(t, o),
            E = !nn(t, o) && o !== "upcoming",
            [A, x, f, b, y, k] = (0, pe.q3)(() => [
              t.GetEventType(),
              t.has_live_stream,
              t.has_live_stream,
              t.clanSteamID.GetAccountID(),
              s.GetGameCapsule(),
              t.BImageNeedScreenshotFallback(a, d),
            ]);
          w.useEffect(() => {
            if (r) {
              const ge = new Image();
              (ge.src = r),
                (ge.onerror = () => {
                  h(ze.wI.full);
                });
            }
          }, [r, h]);
          const [, Q] = (0, T.TB)(b),
            q = Q && !Q.is_ogg;
          let K = t.GetSummaryWithFallback(d);
          return (
            t.GetSubTitleWithLanguageFallback(d) === K && (K = void 0),
            (0, e.jsxs)("div", {
              className: S().CoverImageCtn,
              children: [
                p &&
                  (0, e.jsx)(Za, {
                    eventModel: t,
                    mode: o,
                    calendarEvent: s,
                    fnSetVideoStateReady: c,
                  }),
                E &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      A === B.Fwr &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: S().GameCapsuleCtn,
                              children: (0, e.jsx)("div", {
                                className: (0, v.A)({
                                  [S().AppBannerLogo]: !0,
                                  [S().FallbackImage]: k,
                                  [S().ClanSource]: q,
                                }),
                                style: { backgroundImage: `url(${y})` },
                              }),
                            }),
                            (0, e.jsx)("div", {
                              className: S().GameShortDescription,
                              children: K,
                            }),
                          ],
                        }),
                      A !== B.Fwr &&
                        (0, e.jsxs)("div", {
                          className: (0, v.A)({
                            [S().EventCapsuleCtn]: !0,
                            [S().LiveBroadcastPreview]: f,
                          }),
                          children: [
                            (0, e.jsx)("div", {
                              className: (0, v.A)({
                                [S().TileImage]: !0,
                                [S().FallbackImage]: k,
                                [S().ClanSource]: q,
                              }),
                              style: { backgroundImage: `url(${r})` },
                            }),
                            f &&
                              (0, e.jsx)("div", {
                                className: S().TileCoverImagePlayable,
                              }),
                            x &&
                              (0, e.jsx)("div", {
                                className: S().TileCoverLiveIcon,
                                children: (0, l.we)(
                                  "#home_page_live_broadcast",
                                ),
                              }),
                            f &&
                              (0, e.jsx)("div", {
                                className: "VideoHintText",
                                children: (0, l.we)(
                                  "#EventCalendar_WatchLiveBroadcast",
                                ),
                              }),
                          ],
                        }),
                    ],
                  }),
              ],
            })
          );
        }
        const qa = (0, G.PA)((n) => {
            const {
                eventModel: t,
                calendarEvent: s,
                bSuppressHoverEffects: o,
                history: a,
              } = n,
              r = (0, V.Bw)(t, V.PH.k_eStoreNewsHub, "allowRelative"),
              c = (E) => {
                r.startsWith("http") ? (window.location.href = r) : a.push(r),
                  E.stopPropagation(),
                  E.preventDefault();
              },
              h = s.GetEntityName(),
              d = s.GetGameIcon(),
              p = (0, v.A)(
                S().GameTitleContainer,
                o ? S().DisableHovers : S().EnableHovers,
              );
            return (0, e.jsx)(L.tH, {
              children: (0, e.jsx)("div", {
                className: S().TileTextHeader,
                children: (0, e.jsxs)("div", {
                  className: p,
                  onClick: c,
                  children: [
                    (0, e.jsx)("img", { className: S().AppIcon, src: d }),
                    (0, e.jsxs)("div", {
                      className: S().TileTextAppName,
                      children: [h, " "],
                    }),
                  ],
                }),
              }),
            });
          }),
          Qn = (0, P.y)(qa),
          eo = (0, G.PA)((n) => {
            const { eventModel: t, calendarEvent: s, className: o } = n,
              a = (0, N.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
              r = t ? t.GetStartTimeAndDateUnixSeconds() : s.start_time,
              c = t && (0, Ka.JS)(t.type) && t.GetEndTimeAndDateUnixSeconds();
            if (c && r < a && a < c) {
              const h = c - a,
                d = (0, l.Hq)(h, !0);
              return (0, e.jsxs)("div", {
                className: (0, v.A)(S().LiveText, o),
                children: [
                  (0, e.jsx)(Et.gS, {
                    rtFullDate: r,
                    stylesmodule: S(),
                    children: (0, e.jsx)("div", {
                      className: S().LiveNow,
                      children: (0, l.we)("#EventCalendar_LiveNow"),
                    }),
                  }),
                  (0, e.jsx)(Et.gS, {
                    rtFullDate: c,
                    stylesmodule: S(),
                    children: (0, l.we)("#EventCalendar_TimeLeft", d),
                  }),
                ],
              });
            } else if (r < a) {
              const h = a - r,
                d = h < 24 * 3600 ? (0, l.Hq)(h, !1, !0) : (0, l._l)(r);
              return (0, e.jsx)(Et.gS, {
                className: o,
                rtFullDate: r,
                stylesmodule: S(),
                children: (0, e.jsx)("div", {
                  className: S().PastDateText,
                  children: d,
                }),
              });
            } else {
              const h = new Date(a * 1e3);
              h.setHours(0, 0, 0, 1);
              const d = h.getTime() / 1e3,
                p = Math.floor((r - d) / (24 * 3600)),
                E =
                  p > 1 && p <= 5 ? (0, l.cc)(new Date(r * 1e3)) : (0, l._l)(r),
                A = (0, Et.pg)(r);
              return (0, e.jsx)(Et.gS, {
                className: o,
                rtFullDate: r,
                stylesmodule: S(),
                children: (0, e.jsx)("div", {
                  className: S().FutureDateText,
                  children: (0, l.we)(
                    "#EventCalendar_WillStartAtDateTime",
                    E,
                    A,
                  ),
                }),
              });
            }
          }),
          to = (0, G.PA)((n) => {
            const t = n.calendarEvent.GetSource(),
              s = [],
              o = (0, N.v0)().m_visibilityStore;
            t & se.bK.k_eLibrary && o.BIsGameSourceAllowed(M.FD.k_ELibrary)
              ? s.push({
                  id: se.bK.k_eLibrary,
                  name: "#EventCalendar_GameSource_inLibrary",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_library",
                  styles: S().LibrarySource,
                })
              : t & se.bK.k_eWishlist &&
                  o.BIsGameSourceAllowed(M.FD.k_EWishlist)
                ? s.push({
                    id: se.bK.k_eWishlist,
                    name: "#EventCalendar_GameSource_onWishlist",
                    ttip: "#EventCalendar_GameSource_EventExplanation_ttip_wishlist",
                    styles: S().WishlistSource,
                  })
                : t & se.bK.k_eRecommended &&
                    o.BIsGameSourceAllowed(M.FD.k_ERecommended)
                  ? s.push({
                      id: se.bK.k_eRecommended,
                      name: "#EventCalendar_GameSource_recommended_Verbose",
                      ttip: "#EventCalendar_GameSource_EventExplanation_ttip_recommended",
                      styles: S().RecommendedSource,
                    })
                  : t & se.bK.k_eFeatured &&
                    o.BIsGameSourceAllowed(M.FD.k_EFeatured) &&
                    s.push({
                      id: se.bK.k_eFeatured,
                      name: "#EventCalendar_GameSource_featured",
                      ttip: "#EventCalendar_GameSource_ttip_featured",
                      styles: S().FeaturedSource,
                    }),
              t & se.bK.k_eFollowing &&
                o.BIsGameSourceAllowed(M.FD.k_EFollowing) &&
                s.push({
                  id: se.bK.k_eFollowing,
                  name: "#EventCalendar_GameSource_followed",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_following",
                  styles: S().FollowingSource,
                });
            const a = s.map((r, c) => {
              const h = n.calendarEvent.unique_id;
              return no(
                `item-source-${h}-${r.id}`,
                r.name,
                r.ttip,
                r.styles,
                c + 1 < s.length,
              );
            });
            return (0, e.jsx)("div", {
              className: S().SourceList,
              children: a,
            });
          }),
          no = (n, t, s, o, a) =>
            (0, e.jsx)(
              Me.he,
              {
                className: (0, v.A)(S().Source, o),
                toolTipContent: (0, l.we)(s),
                children: (0, l.we)(t) + (a ? ", " : ""),
              },
              n,
            );
        function so(n) {
          return I.iA.logged_in
            ? I.iA.is_limited
              ? S().Vote_LimitedUser
              : n === "up"
                ? S().Vote_Positive
                : n === "down"
                  ? S().Vote_Negative
                  : S().Vote_Ready
            : S().Vote_NotLoggedIn;
        }
        function ao(n) {
          const { eventModel: t } = n,
            s = (0, Ye.fm)(),
            { myVote: o, Vote: a } = (0, ka.C)(t, { bAsk: !1 }),
            [, r] = (0, T.TB)(t.clanSteamID.GetAccountID()),
            c = () => {
              o !== "up" &&
                (0, nt.W)() &&
                (a("up"), s.RecordInteraction(Ye.Eg.k_eThumbsUp));
            },
            h = () => {
              s.RecordInteraction(Ye.Eg.k_eDiscussions);
            },
            [d, p, E] = (0, pe.q3)(() => [
              Math.max(0, t.nVotesUp - t.nVotesDown),
              t.GetDiscussionURL(r?.vanity_url),
              t.nCommentCount,
            ]),
            A = so(o),
            x = !(0, I.Y2)() && p,
            f =
              t.live_stream_viewer_count > 0
                ? t.live_stream_viewer_count
                : void 0;
          return (0, e.jsx)("div", {
            className: S().Footer,
            children: (0, e.jsxs)("div", {
              className: S().FooterRightSide,
              children: [
                !!f &&
                  (0, e.jsx)("div", {
                    className: S().TileViewerCount,
                    children: (0, $.Dq)(f),
                  }),
                (0, e.jsxs)("div", {
                  className: (0, v.A)(S().FooterStat, S().Vote, A),
                  onClick: c,
                  children: [
                    (0, e.jsx)(ce.bfp, { className: S().RateIcon }),
                    (0, e.jsx)("span", { children: (0, $.Dq)(Number(d)) }),
                  ],
                }),
                x &&
                  (0, e.jsx)("div", {
                    className: S().FooterStat,
                    children: (0, e.jsxs)("a", {
                      href: p,
                      className: S().CommentIconCtn,
                      target: "_blank",
                      onClick: h,
                      children: [
                        (0, e.jsx)(ce._h6, { className: S().CommentIcon }),
                        (0, e.jsx)("span", { children: (0, $.Dq)(Number(E)) }),
                      ],
                    }),
                  }),
                (0, e.jsx)(Oa, { ...n }),
              ],
            }),
          });
        }
        var oo = i(2259);
        function ro(n, t, s) {
          const o = Array();
          o.push(t.QueueLoadPartnerEvent(n.clanid, n.unique_id)),
            n.appid && o.push(_e.A.Get().QueueAppRequest(n.appid, It)),
            n.clanInfo &&
              o.push(T.ac.LoadClanInfoForClanAccountID(n.clanInfo.clanid)),
            Promise.all(o).then(() => {
              const a = t.GetClanEventModel(n.unique_id);
              a &&
              a.appid &&
              a.appid != n.appid &&
              !_e.A.Get().BHasApp(a.appid, It)
                ? _e.A.Get().QueueAppRequest(a.appid, It).then(s)
                : s();
            });
        }
        const It = {
          include_assets: !0,
          include_release: !0,
          include_screenshots: !0,
        };
        function io(n, t) {
          const s = t.GetClanEventModel(n.unique_id);
          return !(
            !s ||
            (n.appid && !_e.A.Get().BHasApp(n.appid, It)) ||
            (s.appid &&
              s.appid != n.appid &&
              !_e.A.Get().BHasApp(s.appid, It)) ||
            (n.clanInfo && !T.ac.HasLoadedClanAccountID(n.clanInfo.clanid))
          );
        }
        const lo = (0, G.PA)((n) => {
            const {
                calendarEvent: t,
                partnerEventStore: s,
                mode: o,
                forceParentUpdate: a,
              } = n,
              r = "500px",
              c = S()[`EventType${t.event_type}`],
              h = (0, v.A)(S().TileContainer, c),
              d = o === "carousel",
              p = () => {
                ro(t, s, a);
              },
              E = (0, oo.OO)(
                { onEnter: p },
                { rootMargin: `${r} 0px ${r} 0px` },
              );
            return (0, e.jsxs)("div", {
              className: h,
              ref: E,
              children: [
                (0, e.jsx)("div", {
                  className: (0, v.A)(S().Tile, S().LoadingTile),
                  children: d && (0, e.jsx)(X.t, {}),
                }),
                (0, e.jsx)("div", { className: S().Footer }),
              ],
            });
          }),
          sn = (0, G.PA)((n) => {
            const { partnerEventStore: t, calendarEvent: s, ...o } = n,
              a = t.GetClanEventModel(s.unique_id),
              r = io(s, t),
              c = (0, Se.CH)();
            return r
              ? (0, e.jsx)(Xa, { eventModel: a, calendarEvent: s, ...o })
              : (0, e.jsx)(lo, {
                  calendarEvent: s,
                  partnerEventStore: t,
                  ...o,
                  forceParentUpdate: c,
                });
          });
        var co = i(90405),
          uo = i(17009),
          Ot = i.n(uo),
          mo = i(33752),
          ho = i(47689),
          po = i(68224),
          Xe = i.n(po);
        const Zn = "SteamNewsHub_SuggestCuratorsDismissed";
        function vo() {
          const n = JSON.parse(localStorage.getItem(Zn));
          return n && n.bDismissed;
        }
        function go() {
          const n = l.pf.GetELanguageFallbackOrder();
          n.find((s) => s === B.Bhc) === void 0 && n.push(B.Bhc);
          const t = new Array();
          for (const s of n) {
            const o = it.Get().GetCuratorsForLang(s);
            if (!o) continue;
            const a = o.filter(
              (r) => !ot.Fm.Get().BIsIgnoringCurator(r.clanAccountID),
            );
            (0, Z.fW)(a), t.push(...a);
          }
          return t;
        }
        function $n(n) {
          const { bCanDismiss: t } = n,
            [s, o] = (0, w.useState)(() => vo()),
            [a, r] = (0, w.useState)(0),
            [c, h] = (0, w.useState)(null),
            d = (0, w.useRef)(void 0),
            p = (0, ho.m)("CuratorFeedSuggestRow"),
            E = (0, w.useCallback)(() => {
              if (!p.token.reason)
                if (!d.current) r(0);
                else {
                  const f = Math.floor(
                    Math.min(d.current.clientWidth, window.innerWidth) / 118,
                  );
                  r(Math.max(f - 1, 0));
                }
            }, [p.token.reason]);
          if (
            ((0, w.useEffect)(() => E(), [E]),
            (0, w.useEffect)(
              () => (
                c == null &&
                  (async () => (
                    await it.Get().WaitForInitialLoad(), p.token.reason || h(go)
                  ))(),
                window.addEventListener("resize", E),
                () => window.removeEventListener("resize", E)
              ),
              [p.token.reason, E, c],
            ),
            s)
          )
            return null;
          let A = c?.slice(0, a).map((x) => {
            const f = T.ac.GetClanInfoByClanAccountID(x.clanAccountID);
            return f
              ? (0, e.jsx)(
                  "div",
                  {
                    className: Xe().ClanInfo,
                    children: (0, e.jsx)(On, { clanInfo: f, layout: "icon" }),
                  },
                  f.clanAccountID,
                )
              : null;
          });
          return (0, e.jsx)(L.tH, {
            children: (0, e.jsx)("div", {
              className: Xe().FeedSuggestContainerBG,
              children: (0, e.jsxs)("div", {
                className: Xe().FeedSuggestContainer,
                children: [
                  (0, e.jsx)("div", {
                    className: Xe().FeedSuggestCaption,
                    children: (0, l.we)("#EventCurator_FeedCaption_Long"),
                  }),
                  t &&
                    (0, e.jsx)("div", {
                      className: Xe().DismissButton,
                      onClick: (x) => {
                        (0, We.pg)(
                          (0, e.jsx)(He.o0, {
                            strTitle: (0, l.we)("#EventCurator_DismissTitle"),
                            strDescription: (0, l.we)(
                              "#EventCurator_DismissBody",
                            ),
                            onOK: () => {
                              localStorage.setItem(
                                Zn,
                                JSON.stringify({ bDismissed: !0 }),
                              ),
                                p.token.reason || o(!0);
                            },
                          }),
                          (0, Dt.uX)(x),
                        );
                      },
                      children: (0, e.jsx)(ce.i6V, {}),
                    }),
                  (0, e.jsxs)(he.Z, {
                    className: Xe().RowContainer,
                    ref: d,
                    "flow-children": "row",
                    children: [
                      A || (0, e.jsx)(X.t, {}),
                      (0, e.jsx)("div", {
                        className: Xe().BrowseMore,
                        onClick: ct.Get().ShowBrowseCurator,
                        children: (0, l.we)("#EventCurator_BrowseMore"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        var fo = i(57688),
          oe = i.n(fo);
        const qn = (n) => {
          const {
              titleToken: t,
              subtitleToken: s,
              backgroundImg: o,
              headerImg: a,
              headerURL: r,
            } = n,
            c = o ? { backgroundImage: o } : {};
          return (0, e.jsx)("div", {
            className: (0, v.A)(
              oe().CommonHeaderStyles,
              oe().SimpleTitleHeaderCtn,
              n.largeHeader && oe().LargeHeader,
            ),
            style: c,
            children: (0, e.jsxs)("div", {
              className: (0, v.A)(
                oe().CollectionBannerGroup,
                a ? oe().HeaderImg : oe().NoHeaderImg,
              ),
              children: [
                !!(r && a) &&
                  (0, e.jsx)("a", {
                    href: r,
                    className: oe().AppBannerLogoCtn,
                    children: (0, e.jsx)("img", {
                      className: oe().AppBannerLogo,
                      src: a,
                    }),
                  }),
                !!(a && !r) &&
                  (0, e.jsx)("div", {
                    className: oe().AppBannerLogoCtn,
                    children: (0, e.jsx)("img", {
                      className: oe().AppBannerLogo,
                      src: a,
                    }),
                  }),
                (0, e.jsxs)("div", {
                  className: oe().SimpleTitleCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: oe().Title,
                      children: t.startsWith("#") ? (0, l.we)(t) : t,
                    }),
                    s &&
                      (0, e.jsx)("div", {
                        className: oe().Subtitle,
                        children: s.startsWith("#") ? (0, l.we)(s) : s,
                      }),
                  ],
                }),
              ],
            }),
          });
        };
        function es(n) {
          const t = (0, z.d)(n);
          return (
            (0, st.wT)(!!t, "Must define collection " + n),
            {
              collection: n,
              smallHeight: Number(oe().simpleTitleSmallHeight),
              largeHeight: Number(oe().simpleTitleLargeHeight),
              component: (s, o, a) =>
                (0, e.jsx)(qn, {
                  largeHeader: s,
                  titleToken: t?.strHeaderTitle ?? "",
                  subtitleToken: t?.strHeaderSubtitle,
                  headerImg: o,
                  headerURL: a,
                }),
            }
          );
        }
        function So(n, t) {
          if (!n) return 0;
          const s = ts().find((o) => o.collection === n);
          return s ? (t ? s.largeHeight : s.smallHeight) : 0;
        }
        function Co(n, t, s, o) {
          if (!n) return null;
          const a = ts().find((r) => r.collection === n);
          return a ? a.component(t, s, o) : null;
        }
        function Eo(n, t) {
          return !n || !ve.O3.GetClanEventModel(n)
            ? 0
            : Number(
                t ? oe().simpleTitleLargeHeight : oe().simpleTitleSmallHeight,
              );
        }
        function Io(n, t) {
          if (!n) return null;
          let s = ve.O3.GetClanEventModel(n);
          return s ? (0, e.jsx)(xo, { bLargeHeader: t, eventModel: s }) : null;
        }
        function xo(n) {
          const { bLargeHeader: t, eventModel: s } = n;
          let o = (0, B.sfN)(I.TS.LANGUAGE);
          const a = (0, Tt.m0)(s, "capsule", o, ze.wI.capsule_main);
          return (0, e.jsx)(qn, {
            largeHeader: t,
            titleToken: s.GetNameWithFallback(o) ?? "",
            subtitleToken: s.GetSubTitleWithSummaryFallback(o),
            headerImg: a,
          });
        }
        let xt = null;
        function ts() {
          return (
            xt ||
              ((xt = new Array()),
              xt.push(es(z.g.Press)),
              xt.push(es(z.g.Halloween))),
            xt
          );
        }
        var _o = i(68538),
          bo = i(25738),
          Oe = i.n(bo),
          yo = Object.defineProperty,
          wo = Object.getOwnPropertyDescriptor,
          an = (n, t, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? wo(t, s) : t, r = n.length - 1, c;
              r >= 0;
              r--
            )
              (c = n[r]) && (a = (o ? c(t, s, a) : c(a)) || a);
            return o && a && yo(t, s, a), a;
          };
        let on = class extends w.Component {
          render() {
            const {
              rgCalendarItems: n,
              bSuppressHoverEffects: t,
              strMultipleSourceTitle: s,
            } = this.props;
            if (!n || n.length == 0) return null;
            const o = n[0];
            if (!n.every((r) => r.appid === o.appid && r.clanid === o.clanid))
              return s
                ? (0, e.jsx)("div", {
                    className: Oe().EventTileCarouselTitleContainer,
                    children: (0, e.jsx)("div", {
                      className: Oe().EventTileCarouselTextTitle,
                      children: s,
                    }),
                  })
                : null;
            const a = !!(o.appid === 0 && I.iA.accountid);
            return (0, e.jsxs)("div", {
              className: Oe().EventTileCarouselTitleContainer,
              children: [
                (0, e.jsx)("div", {
                  className: Oe().EventTileCarouselTitle,
                  children: (0, e.jsx)(Fo, {
                    calendarItem: o,
                    bSuppressHoverEffects: t,
                  }),
                }),
                a &&
                  (0, e.jsx)("div", {
                    className: Oe().EventTileCarouselFollow,
                    children: (0, e.jsx)(Hn.of, { clanAccountID: o.clanid }),
                  }),
              ],
            });
          }
        };
        on = an([G.PA], on);
        let Qe = class extends w.Component {
          state = {
            bScreenIsWide: Qe.IsWideScreen(),
            nMaxCapsulesPerRow: this.GetMaxCapsulesPerRow(),
          };
          componentDidMount() {
            window.addEventListener("resize", this.OnResize);
          }
          componentWillUnmount() {
            window.removeEventListener("resize", this.OnResize);
          }
          static IsWideScreen() {
            return window.innerWidth >= 910;
          }
          GetMaxCapsulesPerRow() {
            return Qe.IsWideScreen() ? 3 : window.innerWidth > 700 ? 2 : 1;
          }
          OnResize() {
            this.setState({
              bScreenIsWide: Qe.IsWideScreen(),
              nMaxCapsulesPerRow: this.GetMaxCapsulesPerRow(),
            });
          }
          render() {
            const {
              rgCalendarItems: n,
              fnOnEventClick: t,
              bSuppressHoverEffects: s,
              bHideGameTitle: o,
              strMultipleSourceTitle: a,
            } = this.props;
            if (!n || n.length == 0) return null;
            const r = n.map((c) =>
              (0, e.jsx)(
                sn,
                {
                  calendarEvent: c,
                  partnerEventStore: ve.O3,
                  fnOnClicked: t,
                  bSuppressHoverEffects: s,
                  mode: n.length > 1 ? "carousel" : "wide",
                  bHideGameTitle: o,
                },
                "ht-" + c.unique_id,
              ),
            );
            return (0, e.jsxs)("div", {
              className: Oe().CalendarRow,
              children: [
                (0, e.jsx)(on, {
                  rgCalendarItems: n,
                  bSuppressHoverEffects: s,
                  strMultipleSourceTitle: a,
                }),
                (0, e.jsx)("div", {
                  className: (0, v.A)(
                    Oe().EventTileCarousel,
                    "EventTileCarouselCtn",
                  ),
                  children: (0, e.jsx)(_o.F, {
                    ...this.props,
                    hideArrows: !0,
                    visibleElements: Math.min(
                      this.state.nMaxCapsulesPerRow,
                      this.props.rgCalendarItems.length,
                    ),
                    className: Oe().HorizontalTiles,
                    useTestScrollbar: !0,
                    bLazyRenderChildren: !0,
                    disableEdgeWrap: !0,
                    screenIsWide: this.state.bScreenIsWide,
                    children: r,
                  }),
                }),
              ],
            });
          }
        };
        an([Se.oI], Qe.prototype, "OnResize", 1), (Qe = an([G.PA], Qe));
        var Ao = i(29342),
          Ge = i.n(Ao);
        const jo = (n) => {
            let t = new Array();
            return (
              I.TS.SUPPORTED_LANGUAGES?.length
                ? (t = I.TS.SUPPORTED_LANGUAGES.map((s) => s.localizedName))
                : t.push((0, l.we)("#Language_" + I.TS.LANGUAGE)),
              (0, e.jsx)("div", {
                className: Ge().LanguageList,
                children: t.join(", "),
              })
            );
          },
          To = (n) => {
            const t = "SteamNewsHub_LanguageDismissed",
              s = () => {
                const h = JSON.parse(localStorage.getItem(t));
                return h && h.bDismissed;
              },
              [o, a] = w.useState(s());
            if (o || (0, I.Y2)()) return null;
            const r = () => {
                a(!0),
                  localStorage.setItem(t, JSON.stringify({ bDismissed: !0 }));
              },
              c = I.TS.STORE_BASE_URL + "account/languagepreferences/";
            return (0, e.jsx)("div", {
              className: Ge().LanguageFeedNoteBucket,
              children: (0, e.jsxs)("div", {
                className: Ge().LanguageFeedNoteCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: Ge().DismissButton,
                    onClick: r,
                    children: (0, e.jsx)(ce.i6V, {}),
                  }),
                  (0, e.jsxs)("div", {
                    className: Ge().BodyFlow,
                    children: [
                      (0, e.jsx)("div", {
                        className: Ge().LeftColumn,
                        children: (0, e.jsx)(ce.vCk, {}),
                      }),
                      (0, e.jsxs)("div", {
                        className: Ge().RightColumn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ge().Title,
                            children: (0, l.we)(
                              "#EventCalendar_NewsLanguage_Title",
                            ),
                          }),
                          (0, e.jsx)(jo, {}),
                          (0, e.jsx)("div", {
                            className: Ge().Text,
                            children: (0, l.PP)(
                              "#EventCalendar_NewsLanguage_Text",
                              (0, e.jsx)("a", {
                                href: c,
                                children: (0, l.we)(
                                  "#EventCalendar_NewsLanguage_TextInHyperlink",
                                ),
                              }),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
        var Do = i(24642),
          ns = Object.defineProperty,
          No = Object.getOwnPropertyDescriptor,
          Bo = (n, t, s) =>
            t in n
              ? ns(n, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (n[t] = s),
          re = (n, t, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? No(t, s) : t, r = n.length - 1, c;
              r >= 0;
              r--
            )
              (c = n[r]) && (a = (o ? c(t, s, a) : c(a)) || a);
            return o && a && ns(t, s, a), a;
          },
          Lo = (n, t, s) => Bo(n, typeof t != "symbol" ? t + "" : t, s);
        const ss = "global_header";
        function Ze() {
          const n = document.getElementById(ss);
          if (n && getComputedStyle(n).display != "none") return n;
          const t = document.getElementsByClassName("responsive_header");
          return (
            (0, st.wT)(
              t.length <= 1,
              "Must have at most one responsive_header",
            ),
            t.length == 1 ? t[0] : null
          );
        }
        function $e() {
          const n = Ze();
          return (n && n.id != ss) || I.TS.IN_MOBILE_WEBVIEW;
        }
        function as() {
          return (
            $e() ||
            window.innerWidth <
              parseInt(u().strDesktopControlBarWidth) +
                parseInt(u().strMaxMobileWidth)
          );
        }
        let de = class extends w.Component {
          state = {
            bUserIsLoggedIn: I.iA.logged_in,
            nVisibleHeight: 0,
            nScrollTop: 0,
            bControlBarIsCollapsed: as(),
            bControlBarWasOpenedByUser: !1,
            nDisappearingHeaderTop: 0,
            nSteamNavHeaderHeight: 0,
            nMobileNavBannerHeight: 0,
            nHubBannerHeight: 0,
            nGroupHeaderHeight: 0,
            nLogInBannerHeight: 0,
            nAccumScrollUp: 0,
            nAccumScrollDown: 0,
          };
          m_cancelSignal = te().CancelToken.source();
          componentDidMount() {
            this.InitEventCalendarStore(),
              this.UpdateDocumentUI(),
              window.addEventListener("resize", this.OnResize),
              window.addEventListener("scroll", this.OnScroll),
              this.setState({ nVisibleHeight: window.innerHeight }),
              window.scrollTo(0, 0),
              this.UpdateEventControlLocationAndVisibility(),
              I.TS.IN_MOBILE_WEBVIEW &&
                this.props.location &&
                this.props.history.length == 0 &&
                this.props.history.push(this.props.location),
              (0, $s.s)();
          }
          componentDidUpdate(n, t) {
            (t.bUserIsLoggedIn != this.state.bUserIsLoggedIn ||
              JSON.stringify(n.filter_to_appids) !=
                JSON.stringify(this.props.filter_to_appids) ||
              JSON.stringify(n.filter_to_clanids) !=
                JSON.stringify(this.props.filter_to_clanids) ||
              n.filter_to_collection !== this.props.filter_to_collection ||
              n.filter_to_saleid !== this.props.filter_to_saleid ||
              n.filter_to_contenthub_hubtype !==
                this.props.filter_to_contenthub_hubtype ||
              n.filter_to_contenthub_category_or_language !==
                this.props.filter_to_contenthub_category_or_language ||
              n.filter_to_contenthub_tag_name !==
                this.props.filter_to_contenthub_tag_name ||
              n.section_by_day !== this.props.section_by_day) &&
              (window.scrollTo(0, 0), this.InitEventCalendarStore()),
              this.UpdateDocumentUI(),
              this.LoadEventToShowAsModal(),
              this.UpdateEventControlLocationAndVisibility();
          }
          UpdateEventControlLocationAndVisibility() {
            if (this.props.location) {
              const n = ct
                .Get()
                .UpdateLocation(() => this.props.history, this.props.location);
              ((n != "desktop_navigation" &&
                this.state.bControlBarIsCollapsed) ||
                (n == "desktop_navigation" &&
                  !this.state.bControlBarIsCollapsed &&
                  $e())) &&
                this.ToggleControlBarCollapsed();
            }
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("component unmounted"),
              window.removeEventListener("resize", this.OnResize),
              window.removeEventListener("scroll", this.OnScroll),
              this.UpdateBodyScrollState(!0);
            const n = Ze();
            n && (n.style.transform = "");
          }
          GetCurrentHubBannerHeight(n) {
            const t = n && !(0, Je.c5)();
            return (0, N.v0)().GetCollectionID()
              ? So((0, N.v0)().GetCollectionID(), t)
              : (0, N.v0)().BIsSaleCalendar()
                ? Eo((0, N.v0)().GetSaleID(), t)
                : (0, N.v0)().BIsSingleSourceCalendar()
                  ? parseInt(
                      t
                        ? u().strJumboHubBannerHeight
                        : u().strDesktopHubBannerHeight,
                    ) - 1
                  : 0;
          }
          BShowLogInBanner() {
            return !!(
              !this.state.bUserIsLoggedIn && (0, N.v0)().BIsGlobalCalendar()
            );
          }
          GetCurrentHeaderHeights(n) {
            const t = $e(),
              s = (0, Je.c5)();
            let o = 0;
            Ze() &&
              ((o = parseInt(
                t
                  ? u().strMobileGlobalHeaderHeight
                  : u().strDesktopGlobalHeaderHeight,
              )),
              (o -= 1));
            const a =
                parseInt(
                  s
                    ? u().strMobileGroupHeaderHeight
                    : u().strDesktopGroupHeaderHeight,
                ) - 1,
              r = (t ? parseInt(u().strMobileNavBannerHeight) : 0) - 1,
              c = this.GetCurrentHubBannerHeight(n);
            let h = 0;
            return (
              this.BShowLogInBanner() &&
                (h = parseInt(
                  n && !s
                    ? u().strLogInBannerLargeHeight
                    : u().strLogInBannerSmallHeight,
                )),
              {
                nSteamNavHeaderHeight: o,
                nMobileNavBannerHeight: r,
                nHubBannerHeight: c,
                nGroupHeaderHeight: a,
                nLogInBannerHeight: h,
              }
            );
          }
          async LoadEventToShowAsModal() {
            const n = (0, F.f3)(this.props.location, "megaphone");
            if (!!n && n !== "0" && n !== "false") {
              (0, F.le)(this.props.history, "megaphone", null);
              const c = { exclude_tags: ["patchnotes", "skip_megaphone"] },
                h = await ve.O3.LoadAdjacentPartnerEvents(
                  null,
                  null,
                  gt.DU,
                  0,
                  1,
                  c,
                );
              if (h?.length == 1) {
                const d = h[0];
                (0, F.iV)(this.props.history, {
                  emclan: d.clanSteamID.ConvertTo64BitString(),
                  emgid: d.GID,
                });
              } else
                console.error(
                  "Could not find the most recent Steam Blog post.",
                );
            }
            const s = (0, F.f3)(this.props.location, "clientpatchnotes");
            if (!!s && s !== "0" && s !== "false") {
              (0, F.le)(this.props.history, "clientpatchnotes", null);
              const [c, h] = s === "beta" ? [null, Ln.Ro] : [gt.DU, null],
                d = { require_tags: ["patchnotes"] },
                p = await ve.O3.LoadAdjacentPartnerEvents(
                  null,
                  J.b.InitFromClanID(h),
                  c,
                  0,
                  1,
                  d,
                );
              if (p?.length == 1) {
                const E = p[0];
                (0, F.iV)(this.props.history, {
                  emclan: E.clanSteamID.ConvertTo64BitString(),
                  emgid: E.GID,
                });
              } else
                console.error(
                  "Could not find the most recent Steam client patch notes.",
                );
            }
            const a = (0, F.f3)(this.props.location, "emclan"),
              r = (0, F.f3)(this.props.location, "emgid");
            if (a && r) {
              const c = new J.b(a);
              if (
                this.state.modalEvent &&
                this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
                  c.ConvertTo64BitString() &&
                this.state.modalEvent.GID == r
              )
                return;
              const h =
                await ve.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  c,
                  r,
                  0,
                );
              this.setState({ modalEvent: h });
            } else this.state.modalEvent && this.setState({ modalEvent: null });
          }
          BShowFutureView() {
            const n = (0, F.f3)(this.props.location, "upcoming");
            return n && n != "false";
          }
          BShowUpdatesOnly() {
            return !!(
              this.props.filter_to_appids &&
              this.props.filter_to_appids.length == 1 &&
              (0, F.f3)(this.props.location, "updates") == "true"
            );
          }
          UpdateDocumentUI() {
            let n, t;
            const s = (0, N.v0)();
            if (s.BIsGlobalCalendar()) {
              const a = (0, z.d)(
                this.BShowFutureView() ? z.g.Upcoming : z.g.Default,
              );
              n = a?.strHeaderTitle ?? a?.strName;
            } else if (s.BIsSingleAppCalendar()) {
              const a = s.GetSingleAppID();
              n = _e.A.Get().GetApp(a)?.GetName();
            } else if (s.BIsSingleGroupCalendar()) {
              const a = s.GetSingleGroupID(),
                r = a && T.ac.GetClanInfoByClanAccountID(a);
              n = r && r.group_name;
            } else if (s.BIsCollectionCalendar()) {
              const a = s.GetCollectionID(),
                r = (0, z.d)(a);
              n = r?.strHeaderTitle ?? r?.strName;
            } else if (s.BIsSaleCalendar()) {
              const a = ve.O3.GetClanEventModel(s.GetSaleID());
              if (a) {
                if (a.appid) n = _e.A.Get().GetApp(a.appid)?.GetName();
                else {
                  const r = a.clanSteamID?.GetAccountID(),
                    c = r && T.ac.GetClanInfoByClanAccountID(r);
                  n = c && c.group_name;
                }
                t = a && a.GetNameWithFallback((0, B.sfN)(I.TS.LANGUAGE));
              }
            }
            let o = (0, l.we)("#EventCalendar_TabTitle_Global");
            n &&
              (t
                ? (o = (0, l.we)(
                    "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                    n,
                    t,
                  ))
                : (o = (0, l.we)("#EventCalendar_TabTitle_GroupHub", n))),
              document.title != o && (document.title = o),
              document.body.classList.contains("events_hub") ||
                document.body.classList.add("events_hub");
          }
          OnResize() {
            this.setState((n) => {
              const t = window.innerHeight,
                s = !n.bControlBarWasOpenedByUser && as(),
                o = this.GetCurrentHeaderHeights(this.state.nScrollTop <= 0);
              return (
                this.UpdateBodyScrollState(s),
                { nVisibleHeight: t, bControlBarIsCollapsed: s, ...o }
              );
            });
          }
          OnScroll() {
            const n = Math.round(window.scrollY);
            this.setState((t) => {
              const s = t.nScrollTop <= 0,
                o = n <= 0;
              let { nHubBannerHeight: a, nLogInBannerHeight: r } = t;
              if (s != o) {
                const y = this.GetCurrentHeaderHeights(o);
                (a = y.nHubBannerHeight), (r = y.nLogInBannerHeight);
              }
              const c = n - t.nScrollTop;
              let h = Math.max(0, t.nAccumScrollUp - c),
                d = Math.max(0, t.nAccumScrollDown + c),
                p = t.nDisappearingHeaderTop;
              const E = 100,
                A = 80;
              let f = t.nDisappearingHeaderTop < 0;
              d > A && ((h = 0), (d = 0), (f = !0)),
                (h > E || o) && ((h = 0), (d = 0), (f = !1)),
                this.state.bControlBarIsCollapsed || (f = !1),
                t.modalEvent && (f = !0);
              const b = t.nSteamNavHeaderHeight + a + t.nMobileNavBannerHeight;
              if (((p = f ? -1 * b : 0), p !== t.nDisappearingHeaderTop)) {
                const y = Ze();
                y && (y.style.transform = `translateY(${p}px)`);
              }
              return {
                nScrollTop: n,
                nAccumScrollUp: h,
                nAccumScrollDown: d,
                nDisappearingHeaderTop: p,
                nHubBannerHeight: a,
                nLogInBannerHeight: r,
              };
            });
          }
          async InitEventCalendarStore() {
            const n = {
                appids: this.props.filter_to_appids,
                clanaccountids: this.props.filter_to_clanids,
                collectionid: this.props.filter_to_collection,
                saleid: this.props.filter_to_saleid,
                hubtype: this.props.filter_to_contenthub_hubtype,
                category_or_language:
                  this.props.filter_to_contenthub_category_or_language,
                tag_name: this.props.filter_to_contenthub_tag_name,
                bSectionByDay: this.props.section_by_day,
              },
              t = (0, N.Zr)(n, this.props.initialFilters),
              s = (0, N.v0)(),
              o = Qt.S.Get(),
              a = !!(this.state.bUserIsLoggedIn && I.iA.accountid),
              r = s.BIsGlobalCalendar() && a ? "local" : "session",
              c = s.BIsGlobalCalendar() ? "U" + I.iA.accountid : t;
            s.m_visibilityStore.Init(
              a,
              this.BShowUpdatesOnly(),
              s.BIsShowingFeaturedFeed(),
              c,
              r,
            );
            const h = !s.BIsCollectionCalendar();
            if (
              (s.SetFilteredView(
                (p) => s.m_visibilityStore.BShouldDisplayEvent(p),
                h,
              ),
              de.m_bInitialLoad)
            ) {
              const p = (0, I.Tc)("metadatainfo", "application_config");
              s.SetCollectionMetaData(
                s.ValidateCollectionMetadata(p) ? p : null,
              );
            }
            const d =
              de.m_bInitialLoad &&
              (0, I.Tc)("initialEvents", "application_config");
            d
              ? (await s.RegisterCalendarEventsAndModels(d),
                (de.m_bInitialLoad = !1))
              : await s.RegisterCalendarEventsAndModels({ success: ft.R }),
              s.BIsSingleSourceCalendar() &&
                (s.BIsSingleAppCalendar()
                  ? _e.A.Get().QueueAppRequest(s.GetSingleAppID(), {
                      include_assets: !0,
                      include_platforms: !0,
                      include_basic_info: !0,
                      include_release: !0,
                    })
                  : T.ac.LoadClanInfoForClanSteamID(
                      J.b.InitFromClanID(s.GetSingleGroupID()),
                    )),
              this.OnResize();
          }
          UpdateBodyScrollState(n) {
            const t = !n && $e(),
              s = document.body;
            s &&
              (t
                ? s.classList.add(u().BodyNoScroll)
                : s.classList.remove(u().BodyNoScroll));
          }
          MobileNavOpenSettings() {
            this.ToggleControlBarCollapsed(), Ht(!0);
          }
          ToggleControlBarCollapsed() {
            this.setState((n) => {
              const t = !n.bControlBarIsCollapsed,
                s = n.bControlBarIsCollapsed,
                o = t ? n.nDisappearingHeaderTop : 0,
                a = Ze();
              return (
                a && (a.style.transform = `translateY(${o}px)`),
                this.UpdateBodyScrollState(t),
                {
                  bControlBarIsCollapsed: t,
                  bControlBarWasOpenedByUser: s,
                  nDisappearingHeaderTop: o,
                }
              );
            });
          }
          OnControlBarChange() {
            window.scrollTo(0, 0);
          }
          CloseEventModal() {
            const n = Ze();
            n &&
              (n.style.transform = `translateY(${this.state.nDisappearingHeaderTop}px)`),
              this.props.history.action === "PUSH"
                ? this.props.history.goBack()
                : (0, F.ip)(this.props.history, {
                    emclan: void 0,
                    emgid: void 0,
                  });
          }
          async OnEventClicked(n) {
            this.props.tracker.RecordEventRead(n, ae.Tc.qC);
            const t =
                this.state.nSteamNavHeaderHeight +
                this.state.nHubBannerHeight +
                this.state.nMobileNavBannerHeight,
              s = Ze();
            s && (s.style.transform = `translateY(${-1 * t}px)`),
              (0, F.ip)(this.props.history, {
                emclan: n.clanSteamID.ConvertTo64BitString(),
                emgid: n.GID,
              });
          }
          ToggleFutureView() {
            (0, F.Bm)(
              this.props.history,
              "upcoming",
              this.BShowFutureView() ? "false" : "true",
            );
          }
          ResetAllFilters() {
            (0, F.Bm)(this.props.history, "updates", void 0),
              (0, N.v0)().m_visibilityStore.InitDefaultCheckboxes(
                this.state.bUserIsLoggedIn,
                !1,
              );
          }
          render() {
            const n =
                this.state.nSteamNavHeaderHeight +
                this.state.nHubBannerHeight +
                this.state.nMobileNavBannerHeight +
                this.state.nLogInBannerHeight,
              s =
                this.state.nDisappearingHeaderTop +
                this.state.nSteamNavHeaderHeight,
              o = s + this.state.nMobileNavBannerHeight,
              a = o + this.state.nLogInBannerHeight,
              r = this.state.nVisibleHeight <= parseInt(u().strMinMobileHeight),
              c = r
                ? 0
                : this.state.nDisappearingHeaderTop +
                  this.state.nSteamNavHeaderHeight,
              h = r ? 0 : this.state.nDisappearingHeaderTop + n,
              d = (0, N.v0)().m_visibilityStore.BAreAnyEventsFiltered(
                this.state.bUserIsLoggedIn,
              )
                ? this.ResetAllFilters
                : null;
            return (0, e.jsx)(w.Fragment, {
              children: (0, e.jsxs)(he.Z, {
                className: (0, v.A)(
                  u().EventCalendarContainer,
                  this.state.bControlBarIsCollapsed ? u().CollapsedMenu : "",
                ),
                "flow-children": "row",
                children: [
                  (0, e.jsx)(L.tH, {
                    children: this.state.modalEvent
                      ? (0, e.jsx)(Ee.N, {
                          appid: this.state.modalEvent.appid,
                          trackingLocation: ae.Tc.qC,
                          announcementGID:
                            this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: ve.O3,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal,
                        })
                      : null,
                  }),
                  (0, e.jsx)(L.tH, {
                    children: (0, e.jsx)(Da, {
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: c,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShowUpcoming: this.BShowFutureView(),
                      bShouldIncludeLegalFooter: !$e(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange,
                    }),
                  }),
                  (0, e.jsx)(L.tH, {
                    children: (0, e.jsxs)(he.Z, {
                      className: (0, v.A)(
                        u().ReserveControlSpace,
                        !this.state.bControlBarIsCollapsed &&
                          u().WideLeftGutter,
                      ),
                      "flow-children": "column",
                      children: [
                        (0, e.jsx)(L.tH, {
                          children:
                            this.state.nLogInBannerHeight > 0 &&
                            (0, e.jsx)(Mo, {
                              nTopOffset: o,
                              bLargeMode:
                                this.state.nScrollTop <= 0 && !(0, Je.c5)(),
                            }),
                        }),
                        (0, e.jsxs)(L.tH, {
                          children: [
                            this.state.nMobileNavBannerHeight > 0 &&
                              (0, e.jsx)(Mt, {
                                bIsUpcoming: this.BShowFutureView(),
                                nTopOffset: s,
                                fnToggleCollapsed: this.MobileNavOpenSettings,
                              }),
                            (0, e.jsx)(Go, {
                              nTopOffset: a,
                              bLargeMode:
                                this.state.nScrollTop <= 0 && !(0, Je.c5)(),
                            }),
                          ],
                        }),
                        (0, e.jsx)(L.tH, {
                          children: (0, e.jsx)(rn, {
                            bShowFutureViewOnly: this.BShowFutureView(),
                            bShowUpdatesOnly: this.BShowUpdatesOnly(),
                            fnOnEventClick: this.OnEventClicked,
                            fnToggleSeeFuture: this.ToggleFutureView,
                            fnResetFilters: d,
                            nVisibleHeight: this.state.nVisibleHeight,
                            nScrollTop: this.state.nScrollTop,
                            nDisappearingHeaderVisibleHeight: h,
                            bUserIsLoggedIn: !!(
                              this.state.bUserIsLoggedIn && I.iA.accountid
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        Lo(de, "m_bInitialLoad", !0),
          re([Se.oI], de.prototype, "OnResize", 1),
          re([Se.oI], de.prototype, "OnScroll", 1),
          re([Se.oI], de.prototype, "MobileNavOpenSettings", 1),
          re([Se.oI], de.prototype, "ToggleControlBarCollapsed", 1),
          re([Se.oI], de.prototype, "OnControlBarChange", 1),
          re([Se.oI], de.prototype, "CloseEventModal", 1),
          re([Se.oI], de.prototype, "OnEventClicked", 1),
          re([Se.oI], de.prototype, "ToggleFutureView", 1),
          re([Se.oI], de.prototype, "ResetAllFilters", 1),
          (de = re([G.PA], de));
        const dt = (0, P.y)(function (t) {
          return (0, e.jsx)(de, { ...t, tracker: (0, we.Y)() });
        });
        function Go(n) {
          const t = (0, pe.q3)(() => (0, N.v0)()),
            [s, o, a, r, c, h, d, p] = (0, pe.q3)(() => [
              t.GetCollectionMetaData()?.clan_event_gid || void 0,
              t.GetCollectionID(),
              t.BHasCollectionMetaData(),
              t.BIsSaleCalendar(),
              t.GetSaleID(),
              t.BIsSingleSourceCalendar(),
              t.BIsSingleAppCalendar() ? t.GetSingleAppID() : void 0,
              t.BIsSingleGroupCalendar() ? t.GetSingleGroupID() : void 0,
            ]),
            [E, A] = w.useState(!1),
            x = (0, B.sfN)(I.TS.LANGUAGE);
          if (
            (w.useEffect(() => {
              a &&
                s &&
                !ve.O3.GetClanEventModel(s) &&
                (A(!0),
                (async () => {
                  const b = t.GetCollectionMetaData(),
                    y = J.b.InitFromClanID(b.clanid);
                  await ve.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    y,
                    b.clan_event_gid,
                    0,
                  ),
                    A(!1);
                })());
            }, [t, a, s]),
            o)
          ) {
            let f;
            return (
              a && !E && (f = ve.O3.GetClanEventModel(s)),
              (0, e.jsx)(Ro, {
                ...n,
                collectionID: o,
                eventModel: f,
                language: x,
              })
            );
          }
          if (r) {
            const f = Io(c, n.bLargeMode);
            if (!f) return null;
            const b = (0, v.A)(u().HubBanner, Ot().WideBanner);
            return (0, e.jsx)("div", {
              style: { transform: `translateY(${n.nTopOffset}px)` },
              className: b,
              children: f,
            });
          }
          if (h) {
            const f = (0, v.A)(
              u().HubBanner,
              Ot().WideBanner,
              n.bLargeMode && u().LargeMode,
              n.bLargeMode && Ot().TallBanner,
            );
            return (0, e.jsx)("div", {
              style: { transform: `translateY(${n.nTopOffset}px)` },
              className: f,
              children: (0, e.jsx)(mo.W, {
                appId: d,
                clanId: p,
                bShowRSSFeed: !0,
              }),
            });
          }
          return null;
        }
        function Ro(n) {
          const { collectionID: t, language: s, eventModel: o } = n;
          let a = (0, Tt.m0)(o, "capsule", s, ze.wI.capsule_main),
            r = (0, _n.n4)(o) ?? void 0;
          const c = Co(t, n.bLargeMode, a, r);
          if (!c) return null;
          const h = (0, v.A)(u().HubBanner, Ot().WideBanner);
          return (0, e.jsx)("div", {
            style: { transform: `translateY(${n.nTopOffset}px)` },
            className: h,
            children: c,
          });
        }
        let rn = class extends w.Component {
          GetCurrentSectionLayout() {
            let n = 0;
            return (0, N.v0)()
              .GetCalendarSections(this.props.bShowFutureViewOnly)
              .map((s) => {
                const o = Math.max(n, s.nTopOffset);
                return (
                  (n = o + s.nRenderedHeight), { section: s, nTopOfSection: o }
                );
              });
          }
          GetMergeEventsType() {
            const n = (0, N.v0)(),
              t = n.GetCollectionID();
            return n.BIsSingleSourceCalendar() || t === z.g.Steam
              ? "none"
              : n.BIsShowingFeaturedFeed()
                ? "full"
                : t
                  ? "samesource"
                  : "full";
          }
          GetCuratorSuggestionSettings(n) {
            if (I.iA.accountid && (0, Ct.Us)()) {
              if (n.BIsGlobalCalendar() && !this.props.bShowFutureViewOnly) {
                if (n.m_visibilityStore.BIsGameSourceAllowed(M.FD.k_ECurator))
                  return {
                    nInlineOffset: 1e3,
                    bInlineDismissable: !0,
                    bShowAtEnd: !0,
                  };
              } else if (n.GetCollectionID() === z.g.Press)
                return {
                  nInlineOffset: 1e3,
                  bInlineDismissable: !1,
                  bShowAtEnd: !1,
                };
            }
            return {
              nInlineOffset: void 0,
              bInlineDismissable: !1,
              bShowAtEnd: !1,
            };
          }
          render() {
            const n = (0, N.v0)(),
              {
                bShowFutureViewOnly: t,
                bShowUpdatesOnly: s,
                fnOnEventClick: o,
                fnToggleSeeFuture: a,
                fnResetFilters: r,
                nScrollTop: c,
                nDisappearingHeaderVisibleHeight: h,
              } = this.props,
              d = n.GetCalendarSections(t);
            if (d.length == 0) return null;
            const p = (0, Je.c5)(),
              E = n.m_visibilityStore.BAreAllEventsHidden(),
              A = c;
            let x = !0;
            const f = this.GetCuratorSuggestionSettings(n);
            let b;
            const y = E
              ? []
              : this.GetCurrentSectionLayout().map(
                  ({ section: ue, nTopOfSection: Ce }, dn) => {
                    const {
                        strId: un,
                        strSectionLabel: mn,
                        rtSectionStart: hn,
                        rtSectionEnd: pn,
                        bIsFutureSection: vn,
                        nRenderedHeight: Ut,
                      } = ue,
                      gn = Ce < A,
                      kt = (0, v.A)(u().PastSection, x && u().DarkerBackground);
                    Ut > 0 &&
                      ((x = !x),
                      f.nInlineOffset !== void 0 &&
                        Ce >= f.nInlineOffset &&
                        b === void 0 &&
                        (b = dn));
                    const Vt = !t && vn;
                    return (0, e.jsx)(
                      co.K,
                      {
                        className: u().LazyCalendarSectionCtn,
                        placeholderHeight: Ut,
                        rootMargin: "100% 0px 100% 0px",
                        children: (0, e.jsx)(Re, {
                          bRenderStickyHeader: gn,
                          strSectionLabel: mn,
                          rtSectionStart: hn,
                          rtSectionEnd: pn,
                          strSectionClassname: kt,
                          bUseHorizontalLayout: Vt,
                          fnOnSeeFutureClick: a,
                          bShowEarliestFirst: t || Vt,
                          section: ue,
                          fnOnEventClick: o,
                          bSuppressHoverEffects: p,
                          strMergeEvents: this.GetMergeEventsType(),
                        }),
                      },
                      un,
                    );
                  },
                );
            b !== void 0 &&
              y.splice(
                b,
                0,
                (0, e.jsx)(
                  $n,
                  { bCanDismiss: f.bInlineDismissable },
                  "CuratorSuggestions",
                ),
              ),
              n.GetCollectionID() === z.g.Press &&
                y.splice(0, 0, (0, e.jsx)(To, {}, "LanguageFeedRow"));
            const k = d[0].rtSectionStart,
              Q = (0, N.v0)().GetCurrentlyLoadedEventCount(0, k),
              q = (0, N.v0)().GetCurrentlyLoadedEventCount(k);
            let K =
                Q &&
                (Q.nCount
                  ? "#EventCalendar_NoMorePastEvents"
                  : "#EventCalendar_NoPastEvents"),
              ge =
                r &&
                (0, e.jsx)(
                  Me.he,
                  {
                    toolTipContent: (0, l.we)(
                      "#EventCalendar_ResetFilters_ttip",
                    ),
                    className: (0, v.A)(u().BackToThePast, u().NoCount),
                    onClick: r,
                    children: (0, l.we)("#EventCalendar_ResetFiltersButton"),
                  },
                  "link-back",
                );
            E && this.props.fnResetFilters
              ? (K = "#EventCalendar_EmptyCalendar")
              : t
                ? ((K =
                    q &&
                    (q.nCount
                      ? "#EventCalendar_NoMoreFutureEvents"
                      : "#EventCalendar_NoFutureEvents")),
                  (ge =
                    Q &&
                    (0, e.jsxs)(
                      "div",
                      {
                        className: u().BackToThePast,
                        onClick: a,
                        children: [
                          (0, l.we)("#EventCalendar_PastEventsLink"),
                          (0, e.jsx)("span", {
                            className: u().SeeAllCount,
                            children: Q.nCount + (Q.bIsComplete ? "" : "+"),
                          }),
                        ],
                      },
                      "link-back",
                    )))
                : s &&
                  (K =
                    Q &&
                    (Q.nCount
                      ? "#EventCalendar_NoMorePastUpdates"
                      : "#EventCalendar_NoPastUpdates"));
            let qe = null;
            return (
              (E || n.BHitEventHorizon(t ? "forward" : "backward")) &&
                (qe = (0, e.jsxs)(w.Fragment, {
                  children: [
                    (0, e.jsx)(
                      "div",
                      {
                        className: (0, v.A)(u().EndOfRows, u().CalendarRow),
                        children: (0, e.jsxs)("div", {
                          className: u().NoMoreRows,
                          children: [" ", (0, l.we)(K), " "],
                        }),
                      },
                      "no-more-events",
                    ),
                    f.bShowAtEnd &&
                      (0, e.jsx)($n, { bCanDismiss: !1 }, "CuratorSuggestions"),
                    ge,
                  ],
                })),
              (0, e.jsx)("div", {
                className: u().RowContainer,
                style: { transform: `translateY(${h - 1}px)` },
                children: (0, e.jsxs)("div", {
                  className: u().Rows,
                  children: [
                    s &&
                      (0, e.jsx)("div", {
                        className: u().UpdatePageBanner,
                        children: (0, l.we)("#EventCalendar_UpdatesViewHeader"),
                      }),
                    y,
                    qe,
                  ],
                }),
              })
            );
          }
        };
        rn = re([G.PA], rn);
        let ln = class extends w.Component {
          render() {
            const n = this.props.rgCalendarItems[0].start_time,
              t = (0, N.v0)().GetCurrentlyLoadedEventCount(n);
            return this.props.rgCalendarItems.length <= 1
              ? null
              : (0, e.jsxs)(
                  "div",
                  {
                    className: u().MobileSeeAllink,
                    onClick: this.props.fnOnSeeFutureClick,
                    children: [
                      (0, l.we)("#EventCalendar_FutureEventsLink"),
                      (0, e.jsx)("span", {
                        className: u().SeeAllCount,
                        children: t.nCount + (t.bIsComplete ? "" : "+"),
                      }),
                    ],
                  },
                  "see-all-link",
                );
          }
        };
        ln = re([G.PA], ln);
        let cn = class extends w.Component {
          render() {
            const {
              rgCalendarItems: n,
              fnOnEventClick: t,
              fnOnSeeFutureClick: s,
              bSuppressHoverEffects: o,
            } = this.props;
            return !n || n.length == 0
              ? null
              : (0, e.jsx)("div", {
                  className: u().CalendarRow,
                  children: (0, e.jsxs)("div", {
                    className: (0, v.A)(
                      u().HorizontalTileContainer,
                      "HorizontalTileCtn",
                    ),
                    children: [
                      (0, e.jsx)(he.Z, {
                        className: u().HorizontalTiles,
                        "flow-children": "row",
                        children: n.map((a) =>
                          (0, e.jsx)(
                            sn,
                            {
                              calendarEvent: a,
                              partnerEventStore: ve.O3,
                              fnOnClicked: t,
                              bSuppressHoverEffects: o,
                              mode: n.length > 1 ? "upcoming" : "wide",
                              bHideGameTitle:
                                (0, N.v0)().BIsSingleSourceCalendar() &&
                                (0, N.v0)().BEventMatchCalendarSingleSource(a),
                            },
                            "ht-" + a.unique_id,
                          ),
                        ),
                      }),
                      (0, e.jsx)(ln, {
                        rgCalendarItems: n,
                        fnOnSeeFutureClick: s,
                      }),
                    ],
                  }),
                });
          }
        };
        cn = re([G.PA], cn);
        const Fo = (0, G.PA)((n) => {
          const { calendarItem: t, bSuppressHoverEffects: s } = n,
            o = ve.O3.GetClanEventModel(t.unique_id);
          return o
            ? (0, e.jsx)("div", {
                className: u().EventListTitle,
                children: (0, e.jsx)(Qn, {
                  eventModel: o,
                  calendarEvent: t,
                  bSuppressHoverEffects: s,
                }),
              })
            : null;
        });
        var Ho = ((n) => ((n[(n.eCurators = 1)] = "eCurators"), n))(Ho || {});
        let Re = class extends w.Component {
          m_ref = w.createRef();
          rtSectionStart = void 0;
          rtSectionEnd = void 0;
          constructor(n) {
            super(n),
              (0, U.Gn)(this),
              (this.rtSectionStart = n.rtSectionStart),
              (this.rtSectionEnd = n.rtSectionEnd);
          }
          componentDidMount() {
            this.UpdatePositioning();
          }
          componentDidUpdate() {
            this.UpdatePositioning(),
              (this.rtSectionStart = this.props.rtSectionStart),
              (this.rtSectionEnd = this.props.rtSectionEnd);
          }
          UpdatePositioning() {
            this.m_ref.current &&
              (0, U.h5)(() => {
                const { section: n } = this.props,
                  t = this.m_ref.current.getBoundingClientRect().height;
                n.nRenderedHeight != t && (n.nRenderedHeight = t);
                const s = this.m_ref.current.offsetTop;
                n.nTopOffset != s && (n.nTopOffset = s);
              });
          }
          get cachedCalendarItems() {
            return (0, N.v0)().GetCalendarItemsInTimeRange(
              (0, Bn.uP)(() => this.rtSectionStart),
              (0, Bn.uP)(() => this.rtSectionEnd),
            );
          }
          GetCarouselGroupTitle(n) {
            return n.BIsShowingFeaturedFeed()
              ? (0, l.we)("#EventCalendar_GroupTitle_FeaturedCurators")
              : n.BIsGlobalCalendar()
                ? (0, l.we)("#EventCalendar_GroupTitle_Curators")
                : "";
          }
          GenerateKeyFromItem(n, t) {
            return t.GetSource() & se.bK.k_eSteam
              ? t.clanid
              : !t.appid && n === "full"
                ? 1
                : t.clanid;
          }
          static IsTimestampInRange(n, t, s) {
            return !!n && t < n && n <= s;
          }
          GetTimestampEvents(n) {
            const t = new Array();
            if (
              !!1 ||
              !n.BIsSingleAppCalendar() ||
              this.props.bShowEarliestFirst
            )
              return t;
            const o = n.GetCalendarAppInfoForAppID(n.GetSingleAppID());
            return (
              o &&
                (Re.IsTimestampInRange(
                  o.last_played,
                  this.props.rtSectionStart,
                  this.props.rtSectionEnd,
                ) &&
                  t.push({
                    rtTime: o.last_played,
                    component: (0, e.jsx)(
                      os,
                      {
                        className: u().TimeEventLastPlayed,
                        locToken: "#EventCalendar_TimeEventLastPlayed",
                        time: o.last_played,
                      },
                      "TimeEventLastPlayed",
                    ),
                  }),
                Re.IsTimestampInRange(
                  o.wishlist_added,
                  this.props.rtSectionStart,
                  this.props.rtSectionEnd,
                ) &&
                  t.push({
                    rtTime: o.wishlist_added,
                    component: (0, e.jsx)(
                      os,
                      {
                        className: u().TimeEventWishlisted,
                        locToken: "#EventCalendar_TimeEventWishlisted",
                        time: o.wishlist_added,
                      },
                      "TimeEventWishlisted",
                    ),
                  })),
              t.sort(
                this.props.bShowEarliestFirst
                  ? (a, r) => r.rtTime - a.rtTime
                  : (a, r) => a.rtTime - r.rtTime,
              ),
              t
            );
          }
          AddTimestampEventsInInterval(n, t, s, o) {
            for (const a of n)
              Re.IsTimestampInRange(a.rtTime, t, s) && o.push(a.component);
          }
          RenderEventList(n) {
            const {
                fnOnEventClick: t,
                bSuppressHoverEffects: s,
                strMergeEvents: o,
              } = this.props,
              a = (0, N.v0)();
            let r = null;
            if (o !== "none") {
              r = new Map();
              for (const x of n) {
                const f = this.GenerateKeyFromItem(o, x),
                  b = r.get(f);
                if (b) b.push(x);
                else {
                  const y = new Array();
                  y.push(x), r.set(f, y);
                }
              }
            }
            const c = new Array(),
              h = new Array(),
              d = o === "full" ? h : c,
              p = 3,
              E = this.GetTimestampEvents(a);
            let A = this.props.bShowEarliestFirst
              ? this.props.rtSectionStart
              : this.props.rtSectionEnd;
            for (const x of n) {
              let f = c;
              if (r) {
                const b = this.GenerateKeyFromItem(o, x),
                  y = r.get(b);
                if (!y) continue;
                if ((b === 1 && (f = d), y.length >= p)) {
                  const k = b === 1 ? this.GetCarouselGroupTitle(a) : "",
                    Q = !y.find((q) => q.clanid != x.clanid);
                  y.sort((q, K) =>
                    K.score != q.score
                      ? K.score - q.score
                      : K.start_time - q.start_time,
                  ),
                    f.push(
                      (0, e.jsx)(
                        "div",
                        {
                          className: u().CalendarEventListRow,
                          children: (0, e.jsx)("div", {
                            className: u().CalendarEventListContainer,
                            children: (0, e.jsx)(
                              Qe,
                              {
                                rgCalendarItems: y,
                                bSuppressHoverEffects: s,
                                fnOnEventClick: t,
                                bHideGameTitle: Q,
                                strMultipleSourceTitle: k,
                              },
                              x.unique_id,
                            ),
                          }),
                        },
                        x.unique_id,
                      ),
                    ),
                    r.delete(b);
                  continue;
                }
              }
              f === c &&
                (this.AddTimestampEventsInInterval(
                  E,
                  Math.min(A, x.start_time),
                  Math.max(A, x.start_time),
                  c,
                ),
                (A = x.start_time)),
                f.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: u().CalendarRow,
                      children: (0, e.jsx)(sn, {
                        calendarEvent: x,
                        partnerEventStore: ve.O3,
                        mode: "wide",
                        fnOnClicked: t,
                        bSuppressHoverEffects: s,
                        bHideGameTitle:
                          a.BIsSingleSourceCalendar() &&
                          a.BEventMatchCalendarSingleSource(x),
                      }),
                    },
                    x.unique_id,
                  ),
                );
            }
            return (
              this.props.bShowEarliestFirst
                ? this.AddTimestampEventsInInterval(
                    E,
                    A,
                    this.props.rtSectionEnd,
                    c,
                  )
                : this.AddTimestampEventsInInterval(
                    E,
                    this.props.rtSectionStart,
                    A,
                    c,
                  ),
              c.push(...h),
              c
            );
          }
          render() {
            const {
              bRenderStickyHeader: n,
              strSectionLabel: t,
              strSectionClassname: s,
              bUseHorizontalLayout: o,
              fnOnSeeFutureClick: a,
              bShowEarliestFirst: r,
              fnOnEventClick: c,
              bSuppressHoverEffects: h,
            } = this.props;
            let { rgCalendarItems: d, bIsComplete: p } =
              this.cachedCalendarItems;
            if (d.length == 0 && p)
              return (0, e.jsx)("div", { ref: this.m_ref, className: s });
            d.length && r && (d = d.slice().reverse());
            const E = 3;
            let A = null;
            d.length > 0 &&
              (A = (0, e.jsx)("div", {
                className: (0, v.A)(
                  u().GroupHeader,
                  u().CalendarRow,
                  n && u().HeaderAtTop,
                ),
                children: (0, e.jsxs)("div", {
                  className: u().GroupHeaderTitle,
                  children: [
                    (0, e.jsx)("span", { children: t }),
                    (0, e.jsx)("div", { className: u().GroupHeaderLine }),
                    o &&
                      d.length > E &&
                      (0, e.jsxs)("div", {
                        className: u().SeeAllLink,
                        onClick: a,
                        children: [
                          (0, l.we)("#EventCalendar_FutureEventsLink"),
                          (0, e.jsx)("span", {
                            className: u().SeeAllCount,
                            children: d.length + (p ? "" : "+"),
                          }),
                        ],
                      }),
                  ],
                }),
              }));
            const x =
              !Ke.HD.bRequireAllEventsLoadedInTimeBlock ||
              p ||
              (o && d.length >= E);
            let f = null;
            return (
              x &&
                (f = o
                  ? (0, e.jsx)(cn, {
                      rgCalendarItems: d.slice(0, E),
                      fnOnEventClick: c,
                      fnOnSeeFutureClick: a,
                      bSuppressHoverEffects: h,
                    })
                  : this.RenderEventList(d)),
              (0, e.jsxs)("div", {
                ref: this.m_ref,
                className: s,
                children: [
                  A,
                  f,
                  !p &&
                    !o &&
                    (0, e.jsx)(Po, {
                      bShowEarliestFirst: this.props.bShowEarliestFirst,
                    }),
                ],
              })
            );
          }
        };
        re([U.sH], Re.prototype, "rtSectionStart", 2),
          re([U.sH], Re.prototype, "rtSectionEnd", 2),
          re([U.EW], Re.prototype, "cachedCalendarItems", 1),
          (Re = re([G.PA], Re));
        const Po = (n) => {
            const t = (0, N.v0)().GetTimeEdgeForDirection(
              n.bShowEarliestFirst ? "forward" : "backward",
              void 0,
            );
            return (0, e.jsxs)("div", {
              className: u().Loading,
              children: [
                (0, e.jsx)(X.t, { size: "xlarge", position: "center" }),
                t &&
                  (0, e.jsxs)(w.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        className: u().LoadingProgress,
                        children: (0, l.we)(
                          "#EventCalendar_LoadEventsProgress",
                          (0, Do.D)(Number((0, N.v0)().GetNumEventsLoaded())),
                          (0, l.lQ)(t),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: u().AdjustFiltersText,
                        children: (0, l.we)("#EventCalendar_LoadEventsFilters"),
                      }),
                    ],
                  }),
              ],
            });
          },
          Mo = (n) => {
            const { elDialogElement: t, fnShowLogonDialog: s } = (0, Jn.l)();
            return (0, e.jsxs)("div", {
              className: (0, v.A)(
                u().LogInFeedRow,
                !n.bLargeMode && u().LogInSmallMode,
              ),
              style: { transform: `translateY(${n.nTopOffset}px)` },
              children: [
                (0, e.jsxs)("div", {
                  className: u().PromptCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: u().LogInFeedTitle,
                      children: (0, l.we)("#EventCalendar_SignIn_Title"),
                    }),
                    (0, e.jsx)("button", {
                      onClick: s,
                      className: u().LogInButton,
                      children: (0, l.we)("#Login_SignIn"),
                    }),
                    (0, e.jsx)("div", {
                      className: u().LogInFeedText,
                      children: (0, l.we)("#EventCalendar_SignIn_Text"),
                    }),
                  ],
                }),
                t,
              ],
            });
          },
          os = (n) => {
            const { locToken: t, time: s, className: o } = n,
              a = s ? (0, l.$w)(new Date(s * 1e3), !0) : "",
              r = (0, l.we)(t, a);
            return (0, e.jsx)("div", {
              className: (0, v.A)(u().TimeEventRow, o),
              children: r,
            });
          };
        var Oo = i(59970),
          Uo = i(39567);
        const ko = (n) => {
          const [t] = (0, F.QD)("byday", !1),
            [s] = (0, F.QD)("upcoming", !1);
          return (0, Uo.vb)(Yt.TS.LANGUAGE)
            ? (0, e.jsx)(Oo.d, {
                bSalePage: !0,
                children: (0, e.jsxs)(P.dO, {
                  children: [
                    (0, e.jsx)(P.qh, {
                      exact: !0,
                      path: Y.B.EventViewByApp(
                        ":appid(\\d+)",
                        ":event_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (a) =>
                        (0, e.jsx)(
                          Nt,
                          {
                            ...a,
                            appid:
                              a.match.params.appid &&
                              Number.parseInt(a.match.params.appid),
                            event_gid: a.match.params.event_gid,
                            bInfiniteScroll:
                              a.match.params.viewtype == "inline",
                          },
                          "detailview_" + a.match.params.event_gid,
                        ),
                    }),
                    (0, e.jsx)(P.qh, {
                      exact: !0,
                      path: Y.B.EventViewByGroup(
                        ":groupid(\\d+)",
                        ":event_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (a) =>
                        (0, e.jsx)(
                          Nt,
                          {
                            ...a,
                            clansteamid: new J.b(a.match.params.groupid),
                            event_gid: a.match.params.event_gid,
                            bInfiniteScroll:
                              a.match.params.viewtype == "inline",
                          },
                          "detailview_" + a.match.params.event_gid,
                        ),
                    }),
                    (0, e.jsx)(P.qh, {
                      exact: !0,
                      path: Y.B.OldAnnouncementViewByApp(
                        ":appid(\\d+)",
                        ":announcement_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (a) =>
                        (0, e.jsx)(
                          Nt,
                          {
                            ...a,
                            appid:
                              a.match.params.appid &&
                              Number.parseInt(a.match.params.appid),
                            announcement_gid: a.match.params.announcement_gid,
                            bInfiniteScroll:
                              a.match.params.viewtype == "old_inline",
                          },
                          "detailoldview_" + a.match.params.announcement_gid,
                        ),
                    }),
                    (0, e.jsx)(P.qh, {
                      exact: !0,
                      path: Y.B.OldAnnouncementViewByGroup(
                        ":groupid(\\d+)",
                        ":announcement_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (a) =>
                        (0, e.jsx)(
                          Nt,
                          {
                            ...a,
                            clansteamid: new J.b(a.match.params.groupid),
                            announcement_gid: a.match.params.announcement_gid,
                            bInfiniteScroll:
                              a.match.params.viewtype == "old_inline",
                          },
                          "detailoldview_" + a.match.params.announcement_gid,
                        ),
                    }),
                    (0, e.jsx)(P.qh, {
                      exact: !0,
                      path: Y.B.NewsHubApp(":appid(\\d+)", ":vanity?"),
                      render: (a) =>
                        (0, e.jsx)(
                          dt,
                          {
                            ...a,
                            filter_to_appids: [Number(a.match.params.appid)],
                            section_by_day: t,
                          },
                          a.match.params.appid,
                        ),
                    }),
                    (0, e.jsx)(P.qh, {
                      exact: !0,
                      path: Y.B.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
                      render: (a) =>
                        (0, e.jsx)(
                          dt,
                          {
                            ...a,
                            filter_to_clanids: [Number(a.match.params.groupid)],
                            section_by_day: t,
                          },
                          a.match.params.groupid,
                        ),
                    }),
                    (0, e.jsx)(P.qh, {
                      exact: !0,
                      path: Y.B.NewsHubCollection(":collectionid", ":vanity?"),
                      render: (a) =>
                        (0, e.jsx)(
                          dt,
                          {
                            initialFilters: Vo(a.match.params.collectionid),
                            ...a,
                            filter_to_collection: a.match.params.collectionid,
                            section_by_day: t,
                          },
                          a.match.params.collectionid,
                        ),
                    }),
                    (0, e.jsx)(P.qh, {
                      exact: !0,
                      path: Y.B.NewsHubSale(":saleid", ":vanity?"),
                      render: (a) =>
                        (0, e.jsx)(
                          dt,
                          {
                            ...a,
                            filter_to_saleid: a.match.params.saleid,
                            section_by_day: t || s,
                          },
                          a.match.params.saleid,
                        ),
                    }),
                    (0, e.jsx)(P.qh, {
                      exact: !0,
                      path: Y.B.NewsHubContentHub(
                        ":hubtype",
                        ":category_or_language?",
                        ":tag_name?",
                      ),
                      render: (a) =>
                        (0, e.jsx)(
                          dt,
                          {
                            ...a,
                            filter_to_contenthub_hubtype:
                              a.match.params.hubtype,
                            filter_to_contenthub_category_or_language:
                              a.match.params.category_or_language,
                            filter_to_contenthub_tag_name:
                              a.match.params.tag_name,
                            section_by_day: t,
                          },
                          a.match.params.hubtype +
                            "_" +
                            a.match.params.category_or_language +
                            "_" +
                            a.match.params.tag_name,
                        ),
                    }),
                    (0, e.jsx)(P.qh, {
                      exact: !0,
                      path: Y.B.NewsHub(),
                      render: (a) =>
                        (0, e.jsx)(dt, { ...a, section_by_day: t }, "global"),
                    }),
                  ],
                }),
              })
            : null;
        };
        function Vo(n) {
          if (n === "steam" && new URLSearchParams().get("branch") !== "beta")
            return { rgHiddenClans: [Ln.Ro] };
        }
        const Wo = ko;
      },
      2108: (O) => {
        O.exports = { BreadContainer: "YaL4BAoqywnKnb5jbU_il" };
      },
      45737: (O) => {
        O.exports = {
          AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
          BaseUI: "_3ar6NZpkNtMK2pmiKMadXq",
          WidePageCtn: "uHgjQHyNygSKukDngfNQO",
          AdminHeader: "vrqqGANTuXeQs27RGumFj",
          Breadcrumbs: "_31raJsbMXVc33oW6c5hNxS",
          Required: "_1-jmJyKnLRFoN-GX0Oqor8",
          PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
          PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
          Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
          PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
          ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
          ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
          SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
          DividerHeading: "_2kKPmwgbsJ_P67Vo-HwwRf",
          ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
          LeftCol: "_1AqrivbzwCs57BXiugqpeA",
          ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
          Blue: "J7iYYml2Jf_PcaACW1hEr",
          ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
          Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
          ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
          SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
          warning: "_2HiNh3o5cgMEbzFKYBUjAy",
          IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
          RightCol: "_3kaQhRnhNh_awrnNX90rui",
          NoSticky: "JQNb8bHftBTAYpCXTx52v",
          SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
          Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
          TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
          DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
          Indent: "_7PV326-4cpZdmTCEdgC2l",
          DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
          FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
          MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
          UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
          UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
          MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
          BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
          UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
          LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
          LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
          UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
          LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
          DeleteAll: "rYuknI3K1VFknv90GNUTc",
          EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
          StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
          HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
          StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
          Stat: "_3OYQbVCq1yBuEx1XcDzG06",
          BigStat: "lYYwDDss378Sm0FKPBxPh",
          IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
          AdminVerticalTabs: "_38rhsxAONglYlA01yweB9r",
          RightPanel: "_1QYBs5PGw6PClZRx9WNL6z",
        };
      },
      63292: (O) => {
        O.exports = {
          LanguageHeader: "_3lQvIyPYpaHHXs7hQOWgDs",
          CuratorInfoRow: "_3tR2dfU_Wenr_xcshy1wUY",
          CuratorInfoImg: "_1BVHFIbcMgjId-0ciy-1ob",
          CuratorInfoName: "_2X1CS5jZKk28-_m8wP08G8",
          CuratorInfoTitleCtn: "_3odsmWB7MUrxxcucBMYcgN",
          CuratorInfoActionCtn: "_2y3rSYHLpo0MERj2EMWQQ9",
          CuratorInfoPreview: "_1EbwpNpOWS4nmsjolxyUhi",
          CuratorInfoIcon: "_3Y0jFDFWk_msMNnvpgfjwB",
          CuratorInfoFollow: "_1I_eQgAgorxHE60P5m2zqq",
          CuratorHoverContainer: "_38fVPOADgxGJbfbw7jz_uG",
          CuratorHoverToolTip: "rSTyUxh3-fZYKih45mKb1",
        };
      },
      68224: (O) => {
        O.exports = {
          FeedSuggestContainerBG: "_3ICp4Zk0uKS3wBOo3rcx-6",
          FeedSuggestContainer: "_1420TVzKCePW589d4gqd4d",
          FeedSuggestCaption: "_38Zh0nmnrxXlh3yhtCnIPn",
          RowContainer: "_39bJZgNeIUX9mSWi0r8tNT",
          ClanInfo: "_2gUTgIVt7XIFc01CxohM9B",
          DismissButton: "_3YtGjvmV0WmN0i3sdMqGz2",
          BrowseMore: "_2nWAPvq239PI0lGHmtFmgc",
        };
      },
      10686: (O) => {
        O.exports = {
          strMaxMobileWidth: "700px",
          strMinMobileHeight: "360px",
          strDesktopControlBarWidth: "300px",
          strDesktopGlobalHeaderHeight: "104px",
          strMobileGlobalHeaderHeight: "62px",
          strDesktopHubBannerHeight: "80px",
          strMobileHubBannerHeight: "80px",
          strJumboHubBannerHeight: "150px",
          strDesktopGroupHeaderHeight: "70px",
          strMobileGroupHeaderHeight: "37px",
          strMobileNavBannerHeight: "52px",
          strLogInBannerLargeHeight: "239px",
          strLogInBannerSmallHeight: "70px",
          HubBanner: "_2zTu0OPJoqo1BXb1J9pDJ2",
          LargeMode: "_3OnTrhLh97xov3GKenO-l_",
          CloseFilterPage: "_3XZe_jfTYppPFYW0hZ0LRl",
          ShowSettings: "_1qCUdL_PYKT0_bKFAFAWQa",
          ControlPageContainer: "_2LztMgS2eI0MWKHJ3v-l0H",
          FiltersTitle: "tQZ7I-5Bxpp4zpDf48imu",
          FiltersDescription: "_17nuaBuSlylN8eWUkcLsAv",
          SidebarContainer: "_15YLDKm80opUF5Tivo7UK-",
          SidebarCollapsed: "_3x2Igmho_SeKqPI3_cnWfG",
          CollapseButton: "_1RCioHSgo99b0iUemHy2OE",
          DesktopButton: "_2vMIlVM2BeWTC0m5_Ys2WN",
          SidebarBackground: "_1ZO60tnVO9UhZWFk1zLM4r",
          Sidebar: "_1nf0vlWuKk9Qn7ncHC5uhq",
          SidebarTitle: "_3uZE-tI5d1lF6NQwSrxauh",
          FilterControlPage: "_uX0hAa1v6coYNh6Al4D6",
          FilterOption: "_2LoObf7xShKZbZ1G71rR_3",
          FilterSubOption: "_2ctVaeTDGGfjh-pOjQ4ktO",
          SideBarFilterNavLinks: "fhYfjG7Ry-VB6uq75Ccbm",
          FilterLink: "_1zyVyzldzUj085oNa8Y0r1",
          NumberDisplay: "_23qmf5MYL9D2szWuV-txE2",
          FilterSettingsCtn: "_3CSX8aqaZna9ZM6WLxhZC3",
          OpenFilterSettings: "_3cMESjaODP5L2fXHzANkNT",
          SidebarBackLink: "_2NQEg_ngTN4otkyy-9VfGQ",
          MobileCloseButton: "_3Es2qlfJBkwe2Yqco9B1VL",
          FilterSection: "_34HOA5NqMETdKvOv8I0QPz",
          FilterSubSection: "_1Ko6oJ92gSqJKHJhVCi2Pc",
          FilterSubSectionTitle: "MeJhm7ZvNEcgMNrj4YyRg",
          ForceResponsiveLink: "_3dRqLQAbzE1yESy7-PmVZK",
          SidebarLink: "_2VFTM7o6Mn2fvJXYr9mSVo",
          SidebarManageMutedApps: "_2IWYfBr6LLolwVjYdZcBco",
          MutedSourcesGroup: "_2B7QL2HvQhNvxTElRnADjb",
          MutedSourcesCount: "_3nwCq_gduAro-qt7Kt3x6s",
          SidebarFooter: "_3sXsgTKq8xa1K7EYzNNOBq",
          FooterLegal: "_3YG_3Z8DhgeYtKBWrOkNAA",
          MobileButton: "_3cMvc6AfC8k2OaILY81XXB",
          BodyNoScroll: "_1d-cxT1sPNzIVcm8qsNT7o",
          EventCalendarContainer: "_1e3WbBz7-mqMKmK8HnpzFF",
          CollapsedMenu: "WXATz6O52NqxwM0VJR-rV",
          ReserveControlSpace: "_18npkDI3gKg9S7EeTFOj-2",
          WideLeftGutter: "ws9ANxmy2MKDDodGRGkqN",
          LogInFeedRow: "nydHEEVdYQNQyocchG2Kr",
          RowContainer: "_3yqpPRFLwr6ETVDgLGT37s",
          Loading: "_2XF_gSfLb9JlFYAqd0PRA8",
          LoadingProgress: "_2k5Q_MrQn9caFbIUp8eEdr",
          AdjustFiltersText: "gM9YyLCnVPfTKfy2_Hsue",
          Rows: "r3Dia2Yw2X-goqFn-_UPT",
          FutureSection: "_290nkT9By-jIKGFyKBcIn3",
          PastSection: "_3FpvGiwJqnukNOcrsKd_sN",
          DarkerBackground: "_1U2BW9tpHKOVi_TG0XvjT",
          EmptySectionText: "_3TwYr6FsLY9hGiZ2Ed5897",
          CalendarEventListRow: "_3m6GW1eCeaSg9ypsv0JVD9",
          CalendarEventListContainer: "_3QenzSfSDt0SQcUy8yeaD-",
          CalendarRow: "_398u23KF15gxmeH741ZSyL",
          EventListTitle: "_qpO2uX5bg1l7b0G2FbFI",
          GroupHeader: "_3j2deAP85R6gftsIWiHe7n",
          GroupHeaderTitle: "_2aVLRsz60HV81P8VKT3kQj",
          GroupHeaderLine: "bcTEUtZM5us_nPhh-83J9",
          SeeAllLink: "_28rp7N0KcAtfF3xtD0m2DZ",
          SeeAllCount: "IOckOLV5f75IljZ0DqXdX",
          HorizontalTileContainer: "muk0v4M7AjwCVox0Kk1Q6",
          HorizontalTiles: "_1YVOyhzWrYyfeINbwhHVqc",
          HeaderAtTop: "_2VZunYlTR5OcMdubo0AYh_",
          EndOfRows: "_1lK7p5C13fouRsvpdUxeya",
          BackToThePast: "_18uWsMJww9J9esJ56PvIGe",
          MobileSeeAllink: "_3yeVNRj7J_UtR-fgIDVAMr",
          NoCount: "_2qW89hLYPJtBAANjQ9kJR-",
          LiveText: "_14EbBf2Uz8VI7xVl0RuDue",
          UpdatePageBanner: "_1hWgY3UxRcdnjka_axlCxE",
          LoginPrompt: "_1EXXCsUBCckCnFzBip-EwP",
          LoginButton: "_1wuxXz1nGOaX_Hj3qnXchJ",
          SpecialEventListGroup: "_5UEq9U_QY0YTaXXOsSIV2",
          SpecialEventListTitle: "_2fFKiTlt1nFQb3dFvEaqWW",
          SpecialEventList: "_3AESvlyhJ0vmRThgNB6Ebb",
          SpecialEvent: "_2s-UQIMf5ZWwh4641BF6Vy",
          SpecialEventTitle: "_3xq6Fl5_4RS4LYFK0NJGY1",
          SpecialEventTime: "_3cGYpNuy_GrG8AK-OwuvIZ",
          NewsChannelGroup: "_3U5MYaJE0i8UYZ_pUzyNk7",
          NewsChannelListTitle: "_3X16Tg0OrHJJL36_8dwlHo",
          NewsChannelList: "_19CIwB_GEUli1IquP3CIHn",
          NewsChannel: "_1n4vpyqKJYF8lc1kW9fr8-",
          NewsChannelText: "_2NbubYs7clHa8InE5qSifq",
          NewsChannelCount: "_1HQl8PnDDWs3V4bob4bBNk",
          NewsChannelOnPage: "kJoC7bJXT-uU6GorEljio",
          NewsChannelTitle: "_11O61s8Pr7CrLbKxzm9VMK",
          NewsChannelSubtitle: "_3_CIMpiaZYsgSD9rEIImZh",
          DiscoverGroup: "kUY00QAjWvDLtDIbUN5A",
          NewsChannelIcon: "_2NCtvce1qaFUggZ9OFpf8N",
          SidePanelGameSearch: "_1LTVIwFRYJjiwzhWzSVOd4",
          MobileNavBannerCtn: "_20PrZ-yvcNH561NUmAH7_Y",
          SearchDismiss: "eIKAr3iSqLCgmFyiNryB2",
          SearchBox: "_2i8gkeopkt1mSdGiNXYmd-",
          SearchExpanded: "_3rn-PPTfKI7di5ILvkjVyy",
          SettingsPanel: "tifiV2QTtklqCycSc8RpW",
          MobileNavHScroll: "yps0ywc-By1zfTHujot5E",
          MobileNavBannerList: "_3xi45UCnCWYdn3vwsjNkYD",
          MobileNavButton: "_3kOf_98MdXe617YcQtkFO6",
          MobileNavCount: "_3m7pyQzrfOHXYdheEaL0oM",
          MobileNavButtonActive: "_2XXBax726YbJCKgIAAgPhM",
          CalendarEventList: "_3Pm1aWPIBv2SjplauZbDnI",
          LogInSmallMode: "_21ANYFXCED2fJk0gtzrBci",
          LogInFeedText: "_3HgPBoJHm2b4URrMDxMeAs",
          PromptCtn: "_19gywKI5KqBR4uSRoXMxmB",
          LogInFeedTitle: "cmQc676wTF0GVI4iDpw_g",
          LogInButton: "_35WTOIomH5SPesM-UbjHBB",
          LazyCalendarSectionCtn: "_1_BP6N2tGh4484bcmYnZeX",
          TimeEventRow: "_2JQL9twuHonw_iuvnsdVBi",
          TimeEventLastPlayed: "_1QplXJ_L-d0BqrYdzD7uSN",
          TimeEventWishlisted: "_3_HujJS7DVArS8dgqixpOJ",
        };
      },
      57688: (O) => {
        O.exports = {
          simpleTitleSmallHeight: "80",
          simpleTitleLargeHeight: "200",
          SimpleTitleHeaderCtn: "_3VhPz9bkSXYdTyrsNHyclF",
          CollectionBannerGroup: "XKrAaB35oi_F1FfPvgMIe",
          AppBannerLogoCtn: "_1Vrsgns9yWeU55IkUV47iw",
          SimpleTitleCtn: "zWLw0Q_JjKfhgFgSDvBu1",
          Title: "_1_MCH_a2eJssfIIs2ipZjw",
          Subtitle: "_2Ym_jx4AIkRhj7T0qvKwhx",
          LargeHeader: "_1Y7af9n7NgyJVP8OA1voO5",
          NoHeaderImg: "_1wnpWYTPyd-qnyinYlNKwa",
          AppBannerLogo: "QDuRwp2w0MLb6hWd0_HT8",
        };
      },
      72978: (O) => {
        O.exports = {
          narrowWidth: "500px",
          GameTitleContainer: "WHJ_WMTSDKqO4yn_MLrau",
          AppIcon: "_3gwk6hFh7bUc2K174mzjyQ",
          TileTextAppName: "_71phFKOzg8aQlBU1rCA2T",
          EnableHovers: "_2BniJe0boLDKV9lwtWTCtm",
          TileContainer: "_1E3Anhs34BXsWWWqH4RNPL",
          CoverImageCtn: "_3HF9tOy_soo1B_odf1XArk",
          GameShortDescription: "_3Se1TZA5yo9V-vrUszNDAI",
          LiveText: "RNDf0d63hDSUu28sIkteH",
          LiveNow: "EVDkYKG_ikfyfH16lmQ-1",
          FutureDateText: "_2xdhMrjKEposPfgPK9UPe-",
          PastDateText: "_4-fqVd8yRSHEAjj7Hkx_V",
          GameSource: "vfv1QjSe1vEobRaHWlf3",
          SourceList: "_3BIx7glwN6Q0_mUUMyFyHu",
          Source: "_2lYFqIB0i1IONPFV4BTvfl",
          RecommendedSource: "_3ayJyXzZoAWy8wXs6YlftR",
          SourceRecommended: "_1yaRLkRkzjuw8xLjPX-zlc",
          DateAndSourceLine: "_2xxMBw-_ndXEC-SIBejGuu",
          EventTypeAndDateCtn: "sUBHF-Qdb_RUPYOBkgO1a",
          LeaveRoomForReminder: "_3djUmSsXnHX2qN5HdooYJz",
          SmallAppName: "_1-Jl_evfBGuwaMNm1CNSR5",
          TileTextCategoryType: "_1LkWXJVxWYdKiKf2Mxq3zs",
          EventType28: "_1qGfEmcWJdG1dp2gDhH7oP",
          EventType10: "_22QY5O4_i6LqHbtIXgilEV",
          EventType11: "_2Gv13-3mXe6Q4QJmTs3mNX",
          EventType23: "_590_lEtmh8atjjKVBT9t7",
          EventType35: "_2wHiBVvtv56AMUWeVWRbuz",
          EventType13: "_2D0ZNOuC3rrY9bf_BY1msw",
          EventType14: "_2mVdtaB_oY5b1fladlbBaM",
          EventType15: "_2Xke62sWB6bPMJuv72Qkw8",
          Tile: "_3xvUZtQ1j-pu-l2xy-lFAq",
          MainContentContainer: "_2pq2vP5kJ_wI2nw-igwJXF",
          YoutubePreviewImage: "_1UgZvqy4xNDdu4gJ6tlT-Q",
          TileImage: "d8bPiEt0DUII_mRqek_ht",
          TileTextContainer: "_3IQK4rcEU5IYtZuW-Ogsgu",
          EventType12: "_2X_hMZpqI8fyqbeFPi4JPj",
          EventName: "_1M8-Pa3b3WboayCgd5VBJT",
          EventSubTitle: "_1JjUp7sfpntpaOqu1_lyvO",
          GameCapsuleCtn: "_3HJFiuJiM5fUKk0czInoZg",
          AppBannerLogo: "u8z1m_ainssHj7AbLKOZs",
          FallbackImage: "_9rv9PL7ZWe4vZofYqYl3M",
          ClanSource: "_17Iog8CXlR0s8DuWS0rD0n",
          TileTextHeader: "_3-0KOhYVQX2zIP3z-jCAdu",
          PatchIconCtn: "Fm9_5yqk4wkh8BTsDC7CU",
          EventTitleCtn: "_1h5cJPC1IYFGDEMbRAWSNy",
          Footer: "_1tdf14bc7ZlvhWfiLIlpEf",
          EventCapsuleCtn: "_27kWH1D3y2WfR8D-sD8Rw2",
          LiveBroadcastPreview: "_4UYuS9QM4MsN9y4q5Livc",
          TileBackgroundImage: "gGujG17QdIx5Nn89DjTl8",
          TileCoverImagePlayable: "_2eoFkqfZovVT02IaU8nRNn",
          TileCoverLiveIcon: "_dmbjH8bEtPkaRrVTzwov",
          ReminderContainer: "_1_taBomEIggVub90iRWW1Y",
          OnlyIcon: "iO5Eug6GGz9JIqPndBJIG",
          EventSummaryDefault: "_2g3JjlrRkzgUWXF57w3leW",
          Vote_NotLoggedIn: "_17oqR-EnZiAHLri2CKnxmC",
          Vote_LimitedUser: "_2FlPoqF3vz8s8KjjoZ7sXn",
          Vote_Positive: "ysX-kDvwrjduqk2LGUkUg",
          RateIcon: "_2se4HtRbAckWOfTCGHox0X",
          Vote_Negative: "_3LqNuO0ebCJ_aJo3YJYjdE",
          Vote_Ready: "_3issE2anPtdsqPA_3_72Z0",
          FooterRightSide: "_1Hhqg7g-POjV0ysalDN4YM",
          Options: "_3nZg0h8xaxxZeW0g870Htl",
          TileViewerCount: "pg-a3zK8HAVaAKqUDx7t-",
          FooterStat: "_3_86JJo-1O_KkOZwRl2uZ6",
          CommentIcon: "Wn7qAQikmqUtnSPDCnzi3",
          CommentIconCtn: "PR8xM_Lig1kieA79gLjOB",
          LoadingTile: "_24QfL3thPI_MZMIbgL7tmb",
          CarouselMode: "_144ghSsl2jkmXzzHxgtQtX",
          UpcomingMode: "_2vzY3sqcpyNcqGqlP6cLOv",
          TileVideoIcon: "aK0jlBL0B6MxMGC4n-WzB",
          DateAndTime: "_1gEM9daUydLT65bFx2wXwE",
          HasVideo: "qbgBAwp3iK3ESknHvr2SQ",
          SubTitleShown: "_5C13zntXVrSwbAGXNrmv6",
          VideoPlayerReady: "_1onQjxTJsTnadbj-DAgoPK",
        };
      },
      25738: (O) => {
        O.exports = {
          EventTileCarousel: "_1mKD0MQ507t89Ii7mxDqSO",
          HorizontalTiles: "_1mUGBQxkYbGPRBk1SDhMHi",
          EventTileCarouselTitleContainer: "_3I_aGTx-KPOMeeyG7MAhPl",
          EventTileCarouselTextTitle: "_1kQ9N4FGH5M9XE7WS_Tk4o",
          EventTileCarouselTitle: "_3X3hCmDBBr2dKG-77H4TuQ",
          EventTileCarouselFollow: "_1qgVA9sM06WHigo755qFWq",
        };
      },
      29342: (O) => {
        O.exports = {
          LanguageFeedNoteBucket: "r8580cv-HTxYA6k0N1n-U",
          LanguageFeedNoteCtn: "_3jTgs16YR8cjlIdBj-VfXM",
          BodyFlow: "_1JI7CLvlOj0UNyivvhIaO4",
          LeftColumn: "_3l03TsLKQ1kgJ9y9srfOtu",
          RightColumn: "XKuYh_bCSCQcXf-hL_G3Y",
          Title: "TzlhguvzJY0mbc-5KxGQW",
          LanguageList: "_1VBz-c24qcoV4360Y5ZW2b",
          Text: "_1SGbC-0D-qeX8p1wEKWHcN",
          DismissButton: "_3zHKDN908qfKPXxxiQRS1A",
        };
      },
      5065: (O) => {
        O.exports = {
          DashboardView: "_1QwMyGKe9F8g1QnNoMz1JP",
          HeaderCtn: "_3KXER7qT57ii-dLNJO926C",
          TotalsCtn: "FQKvUJASJ1JVJ28HSbIt-",
          EventDetailView: "_2xYo3SIDAveAIlOqU6Tolu",
          HeaderStat: "_3VEmudDnkNmWv6uoQEicRy",
          StatFigure: "_30CaMtSkoYlQf82iQSskB6",
          StatsTitle_ctn: "_1QGGF04ktVe1bIIhdEtXaD",
          StatsTitle: "_3YLaBiVHp_mPV3f8YD9MrK",
          StatsCtnTitle: "_1LlRFhVuQF26o2UG7Vg5s3",
          StatTitle: "_1SPyq_BoQrA60DbjY_Eoke",
          VisibilityNote: "_1G-k1HX2M60Sx-vP4SEe5k",
          StatsActionRow: "_23Ra5sX6-aVU2ayKSkIzE5",
          StatsCtn: "hWCs41T0tFwuGLTHxvthv",
          StatsLeftSection: "_3L-uhfyc1hVkz4mrHwVm9x",
          StatsRightSection: "_1yibDM6eeZtYQXEdjO_Scg",
          ModerationWarningCtn: "_3Jwi3DKhGEzxba2BP4X8wo",
          ModerationWarning: "_1aIU0L2u2GWHUvc2oV1zyd",
          ModerationNote: "_11Z9Iz4InEbE8AVPdJ6iFY",
          DisabledStats: "_2Zp-jzTV09Qjj3uTxcFLN3",
        };
      },
      12088: (O) => {
        O.exports = {
          LegalFooter: "_2XzXRucgCsdN2x7oRwSJu0",
          FooterLegal: "_7TrXidlVTKkfcdujKCtM5",
          mainmenu_socials_china: "sfMZciSGx86izSy_6vXjH",
          mainmenu_social_box: "_1BGLVq8Z8sJY-fjcMuT2VP",
          mainmenu_line: "ykCRRQsIcQBjAwGpnQFG7",
          mainmenu_links_china: "_9ImS9D7NtBJGkHgcrwlUX",
          mainmenu_legal_china: "_3hCum12eFRKC9ukPg3-305",
          mainmenu_legal_pwlegal: "_3RFkMNbBZIBVARA4st-AjH",
          mainmenu_logos_china: "_3D_5cMcjUFurdWptDxoP3y",
          mainmenu_china_wechat_logo: "_2sDKMGZPUGhXYuJnr4RO2g",
          mainmenu_china_weibo_logo: "E2dhWjYyH6xGs7zJ2KHC8",
          mainmenu_china_pw_logo: "_2vnv_k5xmD37qKbr7I8pTr",
          mainmenu_china_valve_logo: "Ig7VEoh78RH53WEJS3MKv",
          mainmenu_footer_spacer: "_3w1gNL-euGEyq49PCOGvbQ",
          china_spacer: "_16fnFsYrB3xAg2va_37FfV",
        };
      },
      16345: (O) => {
        O.exports = {
          SuggestContainer: "_2gBFqL_6eXiRN7TI_GDjzF",
          Results: "_3eXNgAtnlHBfgWZbxO2n3h",
          EmptyResults: "_3w0K5X735sKAZhhifZGs84",
          ResultSectionHeader: "_1KK1sGDuxehec0lBB_4lpU",
          ResultRow: "_16oSf0MiTpUTJe7YQpCV2A",
          AvatarImage: "_3dr2A8wfoYU0kJtS9ACoR1",
          GameName: "_3CWrph5moGF_F746uM5tdI",
          Label: "I1zVikvORZt41zc-QTAsw",
        };
      },
      70758: (O) => {
        O.exports = {
          YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
          YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
        };
      },
      9905: (O) => {
        O.exports = { ErrorMsg: "_1ZEL9R8kTy3jJqcuU_IguM" };
      },
      17083: (O, ye, i) => {
        "use strict";
        i.d(ye, { N_: () => me, k2: () => R });
        var e = i(92757),
          Y = i(42891),
          P = i(90626),
          J = i(29248),
          F = i(58584),
          ee = i(81115),
          te = i(68841),
          G = (function (m) {
            (0, Y.A)(C, m);
            function C() {
              for (
                var j, v = arguments.length, l = new Array(v), W = 0;
                W < v;
                W++
              )
                l[W] = arguments[W];
              return (
                (j = m.call.apply(m, [this].concat(l)) || this),
                (j.history = (0, J.zR)(j.props)),
                j
              );
            }
            var _ = C.prototype;
            return (
              (_.render = function () {
                return P.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              C
            );
          })(P.Component),
          w = (function (m) {
            (0, Y.A)(C, m);
            function C() {
              for (
                var j, v = arguments.length, l = new Array(v), W = 0;
                W < v;
                W++
              )
                l[W] = arguments[W];
              return (
                (j = m.call.apply(m, [this].concat(l)) || this),
                (j.history = (0, J.TM)(j.props)),
                j
              );
            }
            var _ = C.prototype;
            return (
              (_.render = function () {
                return P.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              C
            );
          })(P.Component),
          B = function (C, _) {
            return typeof C == "function" ? C(_) : C;
          },
          ne = function (C, _) {
            return typeof C == "string" ? (0, J.yJ)(C, null, null, _) : C;
          },
          ae = function (C) {
            return C;
          },
          T = P.forwardRef;
        typeof T > "u" && (T = ae);
        function fe(m) {
          return !!(m.metaKey || m.altKey || m.ctrlKey || m.shiftKey);
        }
        var L = T(function (m, C) {
            var _ = m.innerRef,
              j = m.navigate,
              v = m.onClick,
              l = (0, ee.A)(m, ["innerRef", "navigate", "onClick"]),
              W = l.target,
              Z = (0, F.A)({}, l, {
                onClick: function (le) {
                  try {
                    v && v(le);
                  } catch (Ae) {
                    throw (le.preventDefault(), Ae);
                  }
                  !le.defaultPrevented &&
                    le.button === 0 &&
                    (!W || W === "_self") &&
                    !fe(le) &&
                    (le.preventDefault(), j());
                },
              });
            return (
              ae !== T ? (Z.ref = C || _) : (Z.ref = _), P.createElement("a", Z)
            );
          }),
          me = T(function (m, C) {
            var _ = m.component,
              j = _ === void 0 ? L : _,
              v = m.replace,
              l = m.to,
              W = m.innerRef,
              Z = (0, ee.A)(m, ["component", "replace", "to", "innerRef"]);
            return P.createElement(e.XZ.Consumer, null, function (X) {
              X || (0, te.A)(!1);
              var le = X.history,
                Ae = ne(B(l, X.location), X.location),
                Ie = Ae ? le.createHref(Ae) : "",
                pe = (0, F.A)({}, Z, {
                  href: Ie,
                  navigate: function () {
                    var U = B(l, X.location),
                      De = (0, J.AO)(X.location) === (0, J.AO)(ne(U)),
                      ht = v || De ? le.replace : le.push;
                    ht(U);
                  },
                });
              return (
                ae !== T ? (pe.ref = C || W) : (pe.innerRef = W),
                P.createElement(j, pe)
              );
            });
          });
        if (0) var Ee, V;
        var we = function (C) {
            return C;
          },
          ie = P.forwardRef;
        typeof ie > "u" && (ie = we);
        function he() {
          for (var m = arguments.length, C = new Array(m), _ = 0; _ < m; _++)
            C[_] = arguments[_];
          return C.filter(function (j) {
            return j;
          }).join(" ");
        }
        var R = ie(function (m, C) {
          var _ = m["aria-current"],
            j = _ === void 0 ? "page" : _,
            v = m.activeClassName,
            l = v === void 0 ? "active" : v,
            W = m.activeStyle,
            Z = m.className,
            X = m.exact,
            le = m.isActive,
            Ae = m.location,
            Ie = m.sensitive,
            pe = m.strict,
            I = m.style,
            U = m.to,
            De = m.innerRef,
            ht = (0, ee.A)(m, [
              "aria-current",
              "activeClassName",
              "activeStyle",
              "className",
              "exact",
              "isActive",
              "location",
              "sensitive",
              "strict",
              "style",
              "to",
              "innerRef",
            ]);
          return P.createElement(e.XZ.Consumer, null, function (yt) {
            yt || (0, te.A)(!1);
            var je = Ae || yt.location,
              xe = ne(B(U, je), je),
              wt = xe.pathname,
              ke = wt && wt.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              Ve = ke
                ? (0, e.B6)(je.pathname, {
                    path: ke,
                    exact: X,
                    sensitive: Ie,
                    strict: pe,
                  })
                : null,
              pt = !!(le ? le(Ve, je) : Ve),
              tt = typeof Z == "function" ? Z(pt) : Z,
              nt = typeof I == "function" ? I(pt) : I;
            pt && ((tt = he(tt, l)), (nt = (0, F.A)({}, nt, W)));
            var vt = (0, F.A)(
              {
                "aria-current": (pt && j) || null,
                className: tt,
                style: nt,
                to: xe,
              },
              ht,
            );
            return (
              we !== ie ? (vt.ref = C || De) : (vt.innerRef = De),
              P.createElement(me, vt)
            );
          });
        });
        if (0) var g;
      },
    },
  ]);
})();
