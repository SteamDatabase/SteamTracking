/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8521],
    {
      5306: (A, ce, s) => {
        "use strict";
        s.r(ce), s.d(ce, { ConferenceRoutes: () => Ge, default: () => cn });
        var e = s(7850),
          Y = s(92757),
          Re = s(20076),
          de = s(29630),
          I = s(99412),
          $ = s(76559),
          me = s(90395),
          x = s(3166),
          Ue = s(14947);
        class B {
          constructor() {
            this.m_mapConferences = Ue.sH.map();
          }
          GetConferenceInfo(t) {
            return this.m_mapConferences.get(t);
          }
          static Get() {
            return (
              B.s_Singleton ||
                ((B.s_Singleton = new B()), B.s_Singleton.Init()),
              B.s_Singleton
            );
          }
          async Init() {
            let t = (0, x.Tc)("conferenceinfo", "application_config");
            if (this.ValidateStoreDefault(t)) {
              const n = (0, I.sfN)(x.TS.LANGUAGE),
                a = (0, me.CJ)(t.clan_faq_about_page),
                r = me.pN.Get().GetFAQPublishedContent(a, n),
                l = {
                  strConferenceID: t.vanity,
                  rtStartTime: t.start_rtime,
                  rtEndTime: t.end_rtime,
                  clanSteamID: new $.b(t.event_group_steamid),
                  broadcastSteamID: new $.b(t.broadcast_steamid),
                  bPartnerOnly: t.partner_only,
                  faqAboutPage: r,
                  strLocalizedLogos: null,
                  strLocalizedMobileLogos: null,
                  globalQandASessionID: t.global_qanda_session_id,
                  youtubeVideoID: t.youtubeVideoID,
                };
              this.m_mapConferences.set(t.vanity, l);
              const d = await (0, de.Er)(
                  t.localized_logo,
                  n,
                  r == null ? void 0 : r.timestamp,
                ),
                m = await (0, de.Er)(
                  t.localized_mobile_logo,
                  n,
                  r == null ? void 0 : r.timestamp,
                );
              this.m_mapConferences.set(t.vanity, {
                ...l,
                strLocalizedLogos: typeof d == "string" ? [d] : d,
                strLocalizedMobileLogos: typeof m == "string" ? [m] : m,
              });
            }
          }
          ValidateStoreDefault(t) {
            const n = t;
            return n && typeof n == "object"
              ? typeof n.event_group_steamid == "string" &&
                  typeof n.start_rtime == "number" &&
                  typeof n.end_rtime == "number"
              : !1;
          }
        }
        var U = s(7582),
          L = s(25792),
          V = s(18057),
          ue = s(13465),
          Ve = s(21418),
          c = s(18210),
          _ = s(65946),
          j = s(90626),
          Oe = s(9398),
          We = s(23240),
          ve = s(90711),
          Qe = s(25317),
          g = s(36707),
          Ye = s(88619),
          Ke = s(53120),
          ze = s(54089);
        function Je(o) {
          const { conferenceInfo: t } = o,
            n = t.broadcastSteamID.ConvertTo64BitString();
          return (0, e.jsx)(L.tH, {
            children: (0, e.jsx)(We.default, {
              steamIDBroadcast: n,
              watchLocation: ve.nn.CJ,
              bStartMuted: !0,
            }),
          });
        }
        function he(o) {
          const { conferenceInfo: t } = o,
            n = (0, _.q3)(() => t.broadcastSteamID.ConvertTo64BitString());
          return (0, e.jsx)("div", {
            className: (0, g.A)(
              Ye.BroadcastChatCtn,
              o.className ? `${o.className}` : "",
            ),
            children: (0, e.jsx)(L.tH, {
              children: (0, e.jsx)(Oe.I, {
                emoticonStore: Qe.MX,
                watchLocation: ve.nn.CJ,
                steamID: n,
                globalChat: !0,
                bPartnerMemberOnlyChat: t.bPartnerOnly,
                bInvertLayout: !0,
              }),
            }),
          });
        }
        function Ce(o) {
          const { conferenceInfo: t } = o,
            [n, a] = j.useState(!1);
          return n
            ? null
            : (0, e.jsxs)("div", {
                className: Ke.broadcast_floating,
                children: [
                  (0, e.jsx)(ze.BroadcastEmbeddablePopoutHeader, {
                    steamIDBroadcast: t.broadcastSteamID.ConvertTo64BitString(),
                    OnPreventPopup: () => a(!0),
                  }),
                  (0, e.jsx)(Je, { conferenceInfo: t }),
                ],
              });
        }
        var fe = s(26485);
        function Xe(o) {
          const { conferenceInfo: t } = o;
          return null;
        }
        var ge = s(67628),
          Ze = s(71462),
          w = s(36118),
          F = s(71421),
          ne = s(36174),
          b = s(98241);
        class O {
          constructor() {
            this.m_inFlight = null;
          }
          async LoadInitialCalendarData(t, n) {
            return (
              this.m_inFlight ||
                (this.m_inFlight = this.InternalLoadInitialCalendarData(t, n)),
              this.m_inFlight
            );
          }
          async InternalLoadInitialCalendarData(t, n) {
            (0, b.Zr)({ collectionid: n, bSectionByDay: !0, rtCalendarEnd: t });
            const a = (0, b.v0)(),
              r = (0, x.Tc)("conference_calendar", "application_config");
            r && (await a.RegisterCalendarEventsAndModels(r)),
              a.SetFilteredView((l) => !0);
          }
          static Get() {
            return O.m_singleton || (O.m_singleton = new O()), O.m_singleton;
          }
        }
        var xe = s(98112),
          $e = s(18614),
          K = s(77495),
          _e = s(19316),
          qe = s(91424),
          q = s(75844),
          E = s(49789),
          et = s(90825),
          z = s(9046),
          ae = s(813),
          T = s(81673),
          tt = s(31117),
          nt = s(16346),
          at = s(19619),
          ot = s(74618),
          G = s(34360),
          Se = s(82734),
          st = s(53113),
          oe = s(2801),
          se = s(88003),
          lt = s(72978),
          i = s.n(lt),
          M = s(56492),
          it = s(89926),
          rt = s(35675);
        function ct(o) {
          const { closeModal: t } = o,
            n = () => {
              (0, b.v0)().m_visibilityStore.SetGameSourceAllowed(
                T.FD.k_ECurator,
                !0,
              ),
                t && t();
            },
            a = () => {
              (0,
              b.v0)().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(
                !0,
              ),
                t && t();
            };
          return (0, e.jsx)(oe.o0, {
            strTitle: (0, c.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_Title",
            ),
            strDescription: (0, c.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_Description",
            ),
            strOKButtonText: (0, c.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton",
            ),
            strCancelButtonText: (0, c.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton",
            ),
            onOK: n,
            onCancel: a,
          });
        }
        function dt(o) {
          o ||
            ((0, b.dP)() &&
              ((0,
              b.v0)().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
                (0, b.v0)().m_visibilityStore.BIsGameSourceAllowed(
                  T.FD.k_ECurator,
                ) ||
                (0, se.pg)((0, e.jsx)(ct, {}), window)));
        }
        const mt = (0, q.PA)((o) => {
          const { eventModel: t, calendarEvent: n, history: a } = o,
            r = (D) => {
              let v = n.GetEntityName();
              (0, se.pg)(
                (0, e.jsx)(oe.o0, {
                  strTitle: (0, c.we)("#EventCalendar_MuteApp_Title", v),
                  strDescription: (0, c.we)(
                    "#EventCalendar_MuteApp_details",
                    v,
                  ),
                  onOK: () =>
                    (0, b.v0)().UpdateEventBlockFromCalendarEvent(n, !1),
                  children: (0, e.jsx)("a", {
                    href: x.TS.STORE_BASE_URL + "account/emailoptout/app",
                    target: x.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, c.we)("#EventCalendar_ManageMutedSources"),
                  }),
                }),
                (0, Se.uX)(D),
              );
            },
            l = () => {
              (0, b.v0)().UpdateEventBlockFromCalendarEvent(n, !0);
            },
            d = () => {
              const D = m().MapClanEventTypeToGroup(t.GetEventType());
              m().SetEventTypeGroupAllowed(D, !1);
            },
            m = () => (0, b.v0)().m_visibilityStore,
            u = (D, v, C, p = !0) => {
              m().BIsGameSourceAllowed(v) &&
                (p &&
                  D.push(
                    (0, e.jsx)(
                      G.kt,
                      {
                        disabled: !0,
                        onSelected: () => {},
                        children: (0, c.we)("#EventCalender_Reason_" + v),
                      },
                      `item-source-${C}-${v}`,
                    ),
                  ),
                D.push(
                  (0, e.jsx)(
                    G.kt,
                    {
                      onSelected: () => {
                        m().SetGameSourceAllowed(v, !1);
                      },
                      children: (0, c.we)("#EventCalender_Hide_Reason_" + v),
                    },
                    `item-hidesource-${C}-${v}`,
                  ),
                ));
            },
            f = (0, M.Bw)(t, M.PH.k_eStoreNewsHub, "allowRelative"),
            y = () => {
              f.startsWith("http") ? (window.location.href = f) : a.push(f);
            },
            P = (D) => {
              let v = [];
              const C = n.GetSource(),
                p = n.unique_id,
                k = (0, x.Y2)(),
                N = (0, b.v0)();
              N.BIsGlobalCalendar() &&
                (C &&
                  C & E.bK.k_eLibrary &&
                  (m().BIsGameSourceAllowed(T.FD.k_ERecent) && n.appInfo
                    ? (v.push(
                        (0, e.jsx)(
                          G.kt,
                          {
                            disabled: !0,
                            onSelected: () => {},
                            children: (0, c.we)(
                              "#EventCalender_LastPlayed",
                              (0, c.Hq)(
                                U.HD.GetTimeNowWithOverride() -
                                  n.appInfo.last_played,
                              ),
                            ),
                          },
                          `item-source-${p}-lastplayed`,
                        ),
                      ),
                      u(v, T.FD.k_ERecent, p, !1))
                    : u(v, T.FD.k_ELibrary, p)),
                C && C & E.bK.k_eWishlist && u(v, T.FD.k_EWishlist, p),
                C && C & E.bK.k_eFollowing && u(v, T.FD.k_EFollowing, p),
                !k && C && C & E.bK.k_eCurator && u(v, T.FD.k_ECurator, p),
                C && C & E.bK.k_eRecommended && u(v, T.FD.k_ERecommended, p),
                C && C & E.bK.k_eSteam && u(v, T.FD.k_ESteam, p),
                C && C & E.bK.k_eFeatured && u(v, T.FD.k_EFeatured, p)),
                v.push(
                  (0, e.jsx)(
                    G.kt,
                    {
                      onSelected: d,
                      children: (0, c.we)(
                        "#EVentCalendar_Hide_EventType",
                        (0, c.we)(
                          "#EventCalendar_EventTypeGroup_" +
                            m().MapClanEventTypeToGroup(t.GetEventType()),
                        ),
                      ),
                    },
                    t.GID + "hidetype",
                  ),
                ),
                x.iA.logged_in &&
                  (ot.S.Get().BIsEventBlocked(n)
                    ? v.push(
                        (0, e.jsx)(
                          G.kt,
                          {
                            onSelected: l,
                            children: (0, e.jsx)(F.he, {
                              toolTipContent: (0, c.we)(
                                "#EventCalendar_UnMuteApp_ttip",
                              ),
                              children: (0, c.we)(
                                "#EventCalendar_UnMuteApp_Title",
                                n.GetEntityName(),
                              ),
                            }),
                          },
                          t.GID + "unmuteapp",
                        ),
                      )
                    : v.push(
                        (0, e.jsx)(
                          G.kt,
                          {
                            onSelected: r,
                            children: (0, e.jsx)(F.he, {
                              toolTipContent: (0, c.we)(
                                "#EventCalendar_MuteApp_ttip",
                              ),
                              children: (0, c.we)(
                                "#EventCalendar_MuteApp_Title",
                                n.GetEntityName(),
                              ),
                            }),
                          },
                          t.GID + "muteapp",
                        ),
                      )),
                !t.BIsOGGEvent() &&
                  !k &&
                  v.push((0, e.jsx)(ut, { eventModel: t, calendarEvent: n })),
                N.BIsSingleSourceCalendar() ||
                  v.push(
                    (0, e.jsx)(
                      G.kt,
                      {
                        onSelected: y,
                        children: (0, c.we)(
                          "#EventCalendar_Goto_SpecificCalendar",
                          n.GetEntityName(),
                        ),
                      },
                      t.GID + "goto",
                    ),
                  ),
                t.appid &&
                  v.push(
                    (0, e.jsx)(
                      G.kt,
                      {
                        onSelected: () =>
                          (window.location.href = (0, st.k2)(
                            x.TS.STORE_BASE_URL + "app/" + t.appid,
                          )),
                        children: (0, c.we)("#EventDisplay_ViewStorePage"),
                      },
                      t.GID + "goto",
                    ),
                  ),
                (0, nt.lX)((0, e.jsx)(G.tz, { children: v }), D);
            };
          return (0, e.jsx)("div", {
            className: (0, g.A)(i().FooterStat, i().Options),
            onClick: P,
            children: (0, e.jsx)(w.faJ, {}),
          });
        });
        function ut(o) {
          const { eventModel: t, calendarEvent: n } = o,
            a = (0, rt.eT)(t.clanSteamID.GetAccountID()),
            { elDialogElement: r, fnShowLogonDialog: l } = (0, it.l)(),
            d = j.useCallback(async () => {
              x.iA.logged_in
                ? (await at.Fm.Get().UpdateFollowOrIgnoreCurator(
                    t.clanSteamID,
                    !0,
                    !a,
                  ),
                  dt(!!a))
                : l();
            }, [a, t.clanSteamID, l]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(
                G.kt,
                {
                  onSelected: d,
                  children: (0, e.jsx)(F.he, {
                    toolTipContent: (0, c.we)(
                      a
                        ? "#EventCalendar_UnFollowCurator_ttip"
                        : "#EventCalendar_FollowCurator_ttip",
                    ),
                    children: (0, c.we)(
                      a
                        ? "#EventCalendar_UnFollowCurator"
                        : "#EventCalendar_FollowCurator",
                      n.GetEntityName(),
                    ),
                  }),
                },
                t.GID + "followcurator",
              ),
              r,
            ],
          });
        }
        const vt = (0, Y.y)(mt);
        var ht = s(20035),
          Ct = s(68988),
          H = s(90533),
          ft = s(85741),
          gt = s(68266),
          xt = s(53876),
          St = s(88812),
          je = s(6221),
          Ie = s(21659),
          jt = s(39239),
          Ee = s(32608),
          It = s(70758),
          le = s.n(It),
          pe = s(1123);
        const be = (o) => {
            const t = ["maxresdefault", "mqdefault", "default"],
              [n, a] = j.useState(0);
            j.useEffect(() => a(0), [o.video]);
            const r = j.useRef(void 0);
            if (o.altImgWithFallback && o.altImgWithFallback.length > 0)
              return (0, e.jsx)(jt.o, {
                className: o.className,
                srcs: o.altImgWithFallback,
              });
            if (o.altImg)
              return (0, e.jsx)("img", {
                src: o.altImg,
                className: o.className,
              });
            {
              const l =
                  "https://img.youtube.com/vi/" + o.video + "/" + t[n] + ".jpg",
                d = () => {
                  n + 1 < t.length && a(n + 1);
                },
                m = () => {
                  r.current && r.current.naturalHeight < 91 && d();
                };
              return (0, e.jsx)("img", {
                ref: r,
                onLoad: m,
                onError: d,
                src: l,
                className: (0, g.A)(le().YoutubePreviewImage, o.className),
              });
            }
          },
          Et = (o) => {
            const [t, n] = j.useState(!1);
            (0, Ee.VC)(!!o.preloadYoutubeScripts);
            const a = (0, pe.Rp)("youtube");
            if (!t || !a) {
              const r = (l) => {
                o.onPlayerActivated && o.onPlayerActivated(),
                  n(!0),
                  l.stopPropagation(),
                  l.preventDefault();
              };
              return (0, e.jsxs)("div", {
                className: (0, g.A)(
                  "YoutubePreviewContainer",
                  le().YoutubePreviewImage,
                  o.imageClassnames,
                ),
                onClick: a ? r : void 0,
                children: [
                  (0, e.jsx)(be, {
                    className: "YoutubePreviewImage",
                    altImgWithFallback: o.altImgWithFallback,
                    altImg: o.altImg,
                    video: o.video,
                  }),
                  a &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("div", {
                          className: "YoutubePreviewPlay",
                          children: (0, e.jsx)(w.IOc, {}),
                        }),
                        (0, e.jsx)("div", {
                          className: "VideoHintText",
                          children: (0, c.we)(
                            "#EventCalendar_WatchYouTubeVideo",
                          ),
                        }),
                      ],
                    }),
                ],
              });
            } else
              return (0, e.jsx)(Ee.N1, {
                ...o,
                classnames: (0, g.A)(le().YoutubePlayer, o.classnames),
              });
          };
        var ie = s(19730),
          pt = s(71684),
          bt = s(29522),
          Tt = s(40358);
        function yt(o) {
          var t, n;
          const {
              eventModel: a,
              calendarEvent: r,
              bSuppressHoverEffects: l,
              mode: d,
              bHideGameTitle: m,
              fnOnClicked: u,
            } = o,
            [f, y] = j.useState(!1),
            P = (0, H.fm)(),
            D = (0, bt.$5)(a.GetAppIDOrReferenceAppID());
          (0, Tt.lv)(D);
          const v = (0, ft.Mg)(a);
          (0, ae.$5)((t = r.clanInfo) == null ? void 0 : t.clanid);
          const C = (0, I.sfN)(x.TS.LANGUAGE),
            p = "capsule",
            [k, N, ee, J, X, Pe, dn, mn, un, vn, hn] = (0, _.q3)(() => [
              a.has_live_stream,
              a.GetEventType(),
              a.GetAllTags(),
              a.GetCategoryAsString(),
              a.GetNameWithFallback(C),
              a.BImageNeedScreenshotFallback(p, C),
              a.appid,
              a.GID,
              a.GetStartTimeAndDateUnixSeconds(),
              a.GetSubTitleWithLanguageFallback(C),
              a.GetSummaryWithFallback(C),
            ]),
            [Cn, fn] = j.useState(() =>
              (0, Ie.c5)() && N == I.zeJ ? z.wI.full : z.wI.capsule_main,
            ),
            gn = (0, pe.Ey)(),
            xn = !!(Pe && dn && v),
            Sn =
              (n = (0, gt.m0)(xn ? void 0 : a, p, C, Cn, gn)) != null ? n : v,
            jn = re(a, d),
            In = (0, xt.uU)(mn),
            Fe = i()[`EventType${N}`],
            En = ee.map((te) => i()[`Tag-${te}`]),
            pn = (0, g.A)(
              i().TileContainer,
              Fe,
              k && i().TileVideoIcon,
              l ? i().DisableHovers : i().EnableHovers,
              f && i().VideoPlayerReady,
              jn && i().HasVideo,
              In && i().HasBeenRead,
              d === "wide" && i().WideMode,
              d === "carousel" && i().CarouselMode,
              d === "upcoming" && i().UpcomingMode,
              ...En,
            );
          let R = vn,
            Z = hn;
          R === Z && (Z = void 0), R === X && (R = void 0);
          const Le = (0, et.j3)(Sn),
            Be = (0, e.jsx)(At, {
              setVideoPlayerReady: y,
              calendarEvent: r,
              eventModel: a,
              mode: d,
              artworkType: p,
              strCapsuleImgURLForBackground: Le,
              fnSetCoverSize: fn,
            }),
            bn = f && d !== "carousel",
            Me = l && N != I.zeJ && !bn,
            Tn = Me && Be,
            yn = !Me && Be,
            Dn =
              N !== I.uYK && N !== I.Fwr && U.HD.GetTimeNowWithOverride() < un,
            Q = d !== "wide" || l,
            He =
              Dn &&
              (0, e.jsx)("div", {
                className: (0, g.A)(i().ReminderContainer, Q && i().OnlyIcon),
                children: (0, e.jsx)(je.j, {
                  eventModel: a,
                  lang: C,
                  bShowStartTime: !0,
                  bOnlyShowIcon: Q,
                  bExpandLeft: Q,
                }),
              }),
            ke = !!(N !== I.Fwr && Z),
            Nn = !!(R && (!ke || !Dt(R, Z)));
          return (0, e.jsxs)("div", {
            className: pn,
            children: [
              (0, e.jsx)(ht.C, { event: a, recordNewsHubStats: !0 }),
              (0, e.jsx)(M.tj, {
                eventModel: a,
                route: M.PH.k_eView,
                children: (0, e.jsxs)("div", {
                  className: i().Tile,
                  onClick: (te) => {
                    P.RecordInteraction(H.Eg.k_eClickThrough),
                      !(0, M.sY)() &&
                        (u(a), te.stopPropagation(), te.preventDefault());
                  },
                  children: [
                    N === I.zeJ &&
                      (0, e.jsx)("div", {
                        className: (0, g.A)(
                          i().TileBackgroundImage,
                          Pe && i().FallbackImage,
                        ),
                        style: { backgroundImage: `url(${Le})` },
                      }),
                    (0, e.jsxs)("div", {
                      className: i().MainContentContainer,
                      children: [
                        yn,
                        (0, e.jsxs)("div", {
                          className: i().TileTextContainer,
                          children: [
                            N == I.Fwr &&
                              (0, e.jsx)("div", {
                                className: i().PatchIconCtn,
                                children: (0, e.jsx)(w.vjL, {}),
                              }),
                            (0, e.jsxs)("div", {
                              className: i().EventTitleCtn,
                              children: [
                                Tn,
                                !m &&
                                  (0, e.jsxs)("div", {
                                    className: i().GameSource,
                                    children: [
                                      (0, e.jsx)(Gt, { ...o }),
                                      r && (0, e.jsx)(Ft, { calendarEvent: r }),
                                    ],
                                  }),
                                (0, e.jsx)("div", {
                                  className: i().EventName,
                                  children: X,
                                }),
                                (0, e.jsxs)("div", {
                                  className: i().EventTypeAndDateCtn,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: (0, g.A)(
                                        i().TileTextCategoryType,
                                        Fe,
                                      ),
                                      children: J,
                                    }),
                                    (0, e.jsx)(Pt, {
                                      eventModel: a,
                                      className: (0, g.A)(
                                        Q && i().LeaveRoomForReminder,
                                      ),
                                    }),
                                    Q && He,
                                  ],
                                }),
                                Nn &&
                                  (0, e.jsx)("div", {
                                    className: i().EventSubTitle,
                                    children: R,
                                  }),
                                ke &&
                                  (0, e.jsx)("div", {
                                    className: (0, g.A)(
                                      i().EventSummaryDefault,
                                      R ? i().SubTitleShown : "",
                                    ),
                                    children: Z,
                                  }),
                              ],
                            }),
                            !Q && He,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, e.jsx)(Mt, { ...o }),
            ],
          });
        }
        function Dt(o, t) {
          const n = (l) => l.replace(/\W+/g, "").toLocaleLowerCase(),
            a = n(o);
          return n(t).startsWith(a);
        }
        function re(o, t) {
          const { video_preview_type: n, video_preview_id: a, type: r } = o;
          return !(t === "upcoming" || !a || r === I.Fwr || n !== "youtube");
        }
        function Nt(o) {
          const { eventModel: t, fnSetVideoStateReady: n, mode: a } = o,
            { video_preview_id: r, type: l } = o.eventModel,
            d = (0, H.fm)(),
            m = (0, I.sfN)(x.TS.LANGUAGE),
            u = (0, Ie.c5)() && l == I.zeJ ? z.wI.full : z.wI.capsule_main,
            f = (0, St.WC)(t, "capsule", m, u, !0);
          if (a === "carousel")
            return (0, e.jsx)(be, {
              altImgWithFallback: f,
              video: r,
              className: i().YoutubePreviewImage,
            });
          const y = () => {
            d.RecordInteraction(H.Eg.k_ePlayedVideo), n(!0);
          };
          return (0, e.jsx)(Et, {
            video: r,
            altImgWithFallback: f,
            autoplay: !0,
            autopause: !0,
            showFullscreenBtn: !0,
            controls: !0,
            imageClassnames: i().YoutubePreviewImage,
            onPlayerActivated: y,
            preloadYoutubeScripts: !0,
            playsInline: !0,
          });
        }
        function At(o) {
          const {
              eventModel: t,
              calendarEvent: n,
              mode: a,
              artworkType: r,
              strCapsuleImgURLForBackground: l,
              setVideoPlayerReady: d,
              fnSetCoverSize: m,
            } = o,
            u = (0, I.sfN)(x.TS.LANGUAGE),
            f = re(t, a),
            y = !re(t, a) && a !== "upcoming",
            [P, D, v, C, p, k] = (0, _.q3)(() => [
              t.GetEventType(),
              t.has_live_stream,
              t.has_live_stream,
              t.clanSteamID.GetAccountID(),
              n.GetGameCapsule(),
              t.BImageNeedScreenshotFallback(r, u),
            ]);
          j.useEffect(() => {
            if (l) {
              const X = new Image();
              (X.src = l),
                (X.onerror = () => {
                  m(z.wI.full);
                });
            }
          }, [l, m]);
          const [, N] = (0, ae.TB)(C),
            ee = N && !N.is_ogg;
          let J = t.GetSummaryWithFallback(u);
          return (
            t.GetSubTitleWithLanguageFallback(u) === J && (J = void 0),
            (0, e.jsxs)("div", {
              className: i().CoverImageCtn,
              children: [
                f &&
                  (0, e.jsx)(Nt, {
                    eventModel: t,
                    mode: a,
                    calendarEvent: n,
                    fnSetVideoStateReady: d,
                  }),
                y &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      P === I.Fwr &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: i().GameCapsuleCtn,
                              children: (0, e.jsx)("div", {
                                className: (0, g.A)({
                                  [i().AppBannerLogo]: !0,
                                  [i().FallbackImage]: k,
                                  [i().ClanSource]: ee,
                                }),
                                style: { backgroundImage: `url(${p})` },
                              }),
                            }),
                            (0, e.jsx)("div", {
                              className: i().GameShortDescription,
                              children: J,
                            }),
                          ],
                        }),
                      P !== I.Fwr &&
                        (0, e.jsxs)("div", {
                          className: (0, g.A)({
                            [i().EventCapsuleCtn]: !0,
                            [i().LiveBroadcastPreview]: v,
                          }),
                          children: [
                            (0, e.jsx)("div", {
                              className: (0, g.A)({
                                [i().TileImage]: !0,
                                [i().FallbackImage]: k,
                                [i().ClanSource]: ee,
                              }),
                              style: { backgroundImage: `url(${l})` },
                            }),
                            v &&
                              (0, e.jsx)("div", {
                                className: i().TileCoverImagePlayable,
                              }),
                            D &&
                              (0, e.jsx)("div", {
                                className: i().TileCoverLiveIcon,
                                children: (0, c.we)(
                                  "#home_page_live_broadcast",
                                ),
                              }),
                            v &&
                              (0, e.jsx)("div", {
                                className: "VideoHintText",
                                children: (0, c.we)(
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
        const wt = (0, q.PA)((o) => {
            const {
                eventModel: t,
                calendarEvent: n,
                bSuppressHoverEffects: a,
                history: r,
              } = o,
              l = (0, M.Bw)(t, M.PH.k_eStoreNewsHub, "allowRelative"),
              d = (y) => {
                l.startsWith("http") ? (window.location.href = l) : r.push(l),
                  y.stopPropagation(),
                  y.preventDefault();
              },
              m = n.GetEntityName(),
              u = n.GetGameIcon(),
              f = (0, g.A)(
                i().GameTitleContainer,
                a ? i().DisableHovers : i().EnableHovers,
              );
            return (0, e.jsx)(L.tH, {
              children: (0, e.jsx)("div", {
                className: i().TileTextHeader,
                children: (0, e.jsxs)("div", {
                  className: f,
                  onClick: d,
                  children: [
                    (0, e.jsx)("img", { className: i().AppIcon, src: u }),
                    (0, e.jsxs)("div", {
                      className: i().TileTextAppName,
                      children: [m, " "],
                    }),
                  ],
                }),
              }),
            });
          }),
          Gt = (0, Y.y)(wt),
          Pt = (0, q.PA)((o) => {
            const { eventModel: t, calendarEvent: n, className: a } = o,
              r = (0, b.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
              l = t ? t.GetStartTimeAndDateUnixSeconds() : n.start_time,
              d = t && (0, pt.JS)(t.type) && t.GetEndTimeAndDateUnixSeconds();
            if (d && l < r && r < d) {
              const m = d - r,
                u = (0, c.Hq)(m, !0);
              return (0, e.jsxs)("div", {
                className: (0, g.A)(i().LiveText, a),
                children: [
                  (0, e.jsx)(V.gS, {
                    rtFullDate: l,
                    stylesmodule: i(),
                    children: (0, e.jsx)("div", {
                      className: i().LiveNow,
                      children: (0, c.we)("#EventCalendar_LiveNow"),
                    }),
                  }),
                  (0, e.jsx)(V.gS, {
                    rtFullDate: d,
                    stylesmodule: i(),
                    children: (0, c.we)("#EventCalendar_TimeLeft", u),
                  }),
                ],
              });
            } else if (l < r) {
              const m = r - l,
                u = m < 24 * 3600 ? (0, c.Hq)(m, !1, !0) : (0, c._l)(l);
              return (0, e.jsx)(V.gS, {
                className: a,
                rtFullDate: l,
                stylesmodule: i(),
                children: (0, e.jsx)("div", {
                  className: i().PastDateText,
                  children: u,
                }),
              });
            } else {
              const m = new Date(r * 1e3);
              m.setHours(0, 0, 0, 1);
              const u = m.getTime() / 1e3,
                f = Math.floor((l - u) / (24 * 3600)),
                y =
                  f > 1 && f <= 5 ? (0, c.cc)(new Date(l * 1e3)) : (0, c._l)(l),
                P = (0, V.pg)(l);
              return (0, e.jsx)(V.gS, {
                className: a,
                rtFullDate: l,
                stylesmodule: i(),
                children: (0, e.jsx)("div", {
                  className: i().FutureDateText,
                  children: (0, c.we)(
                    "#EventCalendar_WillStartAtDateTime",
                    y,
                    P,
                  ),
                }),
              });
            }
          }),
          Ft = (0, q.PA)((o) => {
            const t = o.calendarEvent.GetSource(),
              n = [],
              a = (0, b.v0)().m_visibilityStore;
            t & E.bK.k_eLibrary && a.BIsGameSourceAllowed(T.FD.k_ELibrary)
              ? n.push({
                  id: E.bK.k_eLibrary,
                  name: "#EventCalendar_GameSource_inLibrary",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_library",
                  styles: i().LibrarySource,
                })
              : t & E.bK.k_eWishlist && a.BIsGameSourceAllowed(T.FD.k_EWishlist)
                ? n.push({
                    id: E.bK.k_eWishlist,
                    name: "#EventCalendar_GameSource_onWishlist",
                    ttip: "#EventCalendar_GameSource_EventExplanation_ttip_wishlist",
                    styles: i().WishlistSource,
                  })
                : t & E.bK.k_eRecommended &&
                    a.BIsGameSourceAllowed(T.FD.k_ERecommended)
                  ? n.push({
                      id: E.bK.k_eRecommended,
                      name: "#EventCalendar_GameSource_recommended_Verbose",
                      ttip: "#EventCalendar_GameSource_EventExplanation_ttip_recommended",
                      styles: i().RecommendedSource,
                    })
                  : t & E.bK.k_eFeatured &&
                    a.BIsGameSourceAllowed(T.FD.k_EFeatured) &&
                    n.push({
                      id: E.bK.k_eFeatured,
                      name: "#EventCalendar_GameSource_featured",
                      ttip: "#EventCalendar_GameSource_ttip_featured",
                      styles: i().FeaturedSource,
                    }),
              t & E.bK.k_eFollowing &&
                a.BIsGameSourceAllowed(T.FD.k_EFollowing) &&
                n.push({
                  id: E.bK.k_eFollowing,
                  name: "#EventCalendar_GameSource_followed",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_following",
                  styles: i().FollowingSource,
                });
            const r = n.map((l, d) => {
              const m = o.calendarEvent.unique_id;
              return Lt(
                `item-source-${m}-${l.id}`,
                l.name,
                l.ttip,
                l.styles,
                d + 1 < n.length,
              );
            });
            return (0, e.jsx)("div", {
              className: i().SourceList,
              children: r,
            });
          }),
          Lt = (o, t, n, a, r) =>
            (0, e.jsx)(
              F.he,
              {
                className: (0, g.A)(i().Source, a),
                toolTipContent: (0, c.we)(n),
                children: (0, c.we)(t) + (r ? ", " : ""),
              },
              o,
            );
        function Bt(o) {
          return x.iA.logged_in
            ? x.iA.is_limited
              ? i().Vote_LimitedUser
              : o === "up"
                ? i().Vote_Positive
                : o === "down"
                  ? i().Vote_Negative
                  : i().Vote_Ready
            : i().Vote_NotLoggedIn;
        }
        function Mt(o) {
          const { eventModel: t } = o,
            n = (0, H.fm)(),
            { myVote: a, Vote: r } = (0, Ct.C)(t, { bAsk: !1 }),
            [, l] = (0, ae.TB)(t.clanSteamID.GetAccountID()),
            d = () => {
              a !== "up" &&
                (0, tt.W)() &&
                (r("up"), n.RecordInteraction(H.Eg.k_eThumbsUp));
            },
            m = () => {
              n.RecordInteraction(H.Eg.k_eDiscussions);
            },
            [u, f, y] = (0, _.q3)(() => [
              Math.max(0, t.nVotesUp - t.nVotesDown),
              t.GetDiscussionURL(l == null ? void 0 : l.vanity_url),
              t.nCommentCount,
            ]),
            P = Bt(a),
            D = !(0, x.Y2)() && f,
            v =
              t.live_stream_viewer_count > 0
                ? t.live_stream_viewer_count
                : void 0;
          return (0, e.jsx)("div", {
            className: i().Footer,
            children: (0, e.jsxs)("div", {
              className: i().FooterRightSide,
              children: [
                !!v &&
                  (0, e.jsx)("div", {
                    className: i().TileViewerCount,
                    children: (0, ie.Dq)(v),
                  }),
                (0, e.jsxs)("div", {
                  className: (0, g.A)(i().FooterStat, i().Vote, P),
                  onClick: d,
                  children: [
                    (0, e.jsx)(w.bfp, { className: i().RateIcon }),
                    (0, e.jsx)("span", { children: (0, ie.Dq)(Number(u)) }),
                  ],
                }),
                D &&
                  (0, e.jsx)("div", {
                    className: i().FooterStat,
                    children: (0, e.jsxs)("a", {
                      href: f,
                      className: i().CommentIconCtn,
                      target: "_blank",
                      onClick: m,
                      children: [
                        (0, e.jsx)(w._h6, { className: i().CommentIcon }),
                        (0, e.jsx)("span", { children: (0, ie.Dq)(Number(y)) }),
                      ],
                    }),
                  }),
                (0, e.jsx)(vt, { ...o }),
              ],
            }),
          });
        }
        var Ht = s(19188),
          Te = s(179),
          kt = s(54963);
        const Rt = "emclan",
          Ut = "emgid";
        function ye(o) {
          const { displayLocation: t, fnChangeModalEvent: n } = o,
            [a, r] = j.useState(null),
            [l, d] = (0, Te.QD)(Ut, null),
            [m, u] = (0, Te.QD)(Rt, null);
          return (
            (0, kt.hL)(n, (f, y) => {
              d(f), u($.b.InitFromClanID(y).ConvertTo64BitString());
            }),
            j.useEffect(() => {
              if (l != null && m != null) {
                const f = new $.b(m);
                K.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  f,
                  l,
                  0,
                ).then(r);
              }
            }, [l, m]),
            a
              ? (0, e.jsx)(Ht.N, {
                  appid: a.appid,
                  trackingLocation: t,
                  announcementGID: a.GetAnnouncementGID(),
                  partnerEventStore: K.O3,
                  eventModel: a,
                  showAppHeader: !0,
                  closeModal: () => {
                    r(null), u(null), d(null);
                  },
                })
              : null
          );
        }
        var Vt = s(34736),
          Ot = s(85599),
          Wt = s(47689),
          De = s(8323),
          Qt = s(92264),
          S = s(63585);
        const Ne = 10;
        function Yt(o) {
          const t = (0, b.v0)(),
            n = (0, U.P_)(Ne),
            a = t.GetActiveEventsAt(n) || [],
            [r] = j.useState(new De.lu()),
            l = j.useCallback(
              (d, m) => (0, qe.Y)(K.O3.GetClanEventModel(d), window),
              [],
            );
          return t.GetNumEventsLoaded() == 0
            ? (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_No_Schedule_Yet"),
              })
            : (0, e.jsxs)("div", {
                className: S.EventsScheduleCtn,
                children: [
                  (0, e.jsx)(ye, {
                    displayLocation: xe.Tc.My,
                    fnChangeModalEvent: r,
                  }),
                  (0, e.jsx)(Xt, { rgActiveEvents: a, fnDisplayModalEvent: l }),
                  (0, e.jsx)(zt, {
                    rgActiveEvents: a,
                    fnDisplayModalEvent: l,
                    rtNow: n,
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(_e.$n, {
                    onClick: (d) =>
                      (0, se.pg)((0, e.jsx)(_t, {}), (0, Se.uX)(d)),
                    children: (0, c.we)("#Conference_NeedHelp"),
                  }),
                ],
              });
        }
        function Kt(o) {
          return (0, e.jsx)(Ae, { ...o, children: (0, e.jsx)(Yt, { ...o }) });
        }
        function zt(o) {
          const { rgActiveEvents: t, rtNow: n } = o,
            r = (0, b.v0)()
              .GetCalendarItemsInTimeRange(n + 1)
              .rgCalendarItems.filter(
                (l) => !t.some((d) => d.GID == l.unique_id),
              )
              .sort((l, d) => l.start_time - d.start_time);
          return r.length == 0
            ? (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_No_More_Schedule"),
              })
            : (0, e.jsxs)("div", {
                className: S.UpcomingEventsCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: S.SectionTitle,
                    children: (0, c.we)("#Conference_ScheduleNext"),
                  }),
                  (0, e.jsx)("div", {
                    className: S.EventSchedCtn,
                    children: r.map((l, d) =>
                      (0, e.jsx)(
                        Jt,
                        {
                          bDisplayAsUpNext: d == 0 && t.length >= 1,
                          calendarItem: l,
                          fnDisplayModalEvent: o.fnDisplayModalEvent,
                          rtNow: n,
                        },
                        l.unique_id,
                      ),
                    ),
                  }),
                ],
              });
        }
        function Jt(o) {
          const {
              calendarItem: t,
              bDisplayAsUpNext: n,
              fnDisplayModalEvent: a,
              rtNow: r,
            } = o,
            l = K.O3.GetClanEventModel(t.unique_id),
            d = (0, I.sfN)(x.TS.LANGUAGE),
            m = l.GetStartTimeAndDateUnixSeconds(),
            u = (0, ne.JD)(new Date(r * 1e3), new Date(m * 1e3));
          return (0, e.jsxs)("div", {
            className: S.EventItemCtn,
            onClick: () => a(l.GID, l.clanSteamID.GetAccountID()),
            children: [
              (0, e.jsx)("div", {
                className: S.Title,
                children: l.GetNameWithFallback(d),
              }),
              (0, e.jsxs)("div", {
                className: S.SessionTime,
                children: [
                  !u && (0, e.jsx)("div", { children: (0, c.TW)(m, !0) }),
                  (0, e.jsx)("div", {
                    children:
                      n && u
                        ? (0, c.we)(
                            "#Conference_StartInMin",
                            Math.max(1, Math.floor((m - r) / 60)),
                          )
                        : (0, c.we)(
                            "#Conference_StartsAt",
                            (0, Qt.KC)(m, { bForce24HourClock: !1 }),
                          ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: (0, g.A)(S.ReminderContainer, S.OnlyIcon),
                children: (0, e.jsx)(je.j, {
                  eventModel: l,
                  lang: d,
                  bOnlyShowIcon: !0,
                  bExpandLeft: !0,
                  bShowStartTime: !1,
                }),
              }),
            ],
          });
        }
        function Xt(o) {
          const { rgActiveEvents: t, fnDisplayModalEvent: n } = o;
          if (!t || t.length == 0) return null;
          const a = t[0],
            r = (0, I.sfN)(x.TS.LANGUAGE),
            l = $e.m.ParseEventModelPresenters(a, r);
          return (0, e.jsxs)("div", {
            className: S.ActiveEventCtn,
            children: [
              (0, e.jsxs)("div", {
                className: S.LiveNote,
                children: [
                  (0, e.jsx)("div", { className: S.LiveIcon }),
                  "Live Now!",
                ],
              }),
              (0, e.jsx)("div", {
                className: S.Title,
                children: a.GetNameWithFallback(r),
              }),
              !!l &&
                l.map((d) =>
                  (0, e.jsx)(
                    Vt.fI,
                    {
                      name: d.name,
                      title: d.title,
                      photo: d.photo,
                      company: d.company,
                      bioString: d.bio,
                      children: (0, e.jsx)("div", { children: d.name }),
                    },
                    "presenter_" + d.name,
                  ),
                ),
              (0, e.jsx)("div", {
                className: S.EventDescription,
                children: a.GetSummaryWithFallback(r),
              }),
              (0, e.jsx)("div", {
                className: S.ReadMoreBtn,
                onClick: () => n(a.GID, a.clanSteamID.GetAccountID()),
                children: (0, c.we)("#EventEmail_Button_ClickForMoreDetails"),
              }),
            ],
          });
        }
        function Zt(o) {
          const { conferenceInfo: t } = o,
            n = (0, b.v0)(),
            a = (0, U.P_)(Ne),
            r = n.GetActiveEventsAt(a) || [],
            [l] = j.useState(new De.lu()),
            d = n
              .GetCalendarItemsInTimeRange(t.rtStartTime - 1, a)
              .rgCalendarItems.filter(
                (m) => r.length == 0 || r[0].GID != m.unique_id,
              )
              .sort((m, u) => m.start_time - u.start_time);
          return d.length == 0
            ? (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_NoPastEvents"),
              })
            : (0, e.jsxs)("div", {
                className: S.PastEventsCtn,
                children: [
                  (0, e.jsx)(ye, {
                    displayLocation: xe.Tc.My,
                    fnChangeModalEvent: l,
                  }),
                  d.map((m) => {
                    const u = K.O3.GetClanEventModel(m.unique_id);
                    return (0, e.jsx)(
                      yt,
                      {
                        eventModel: u,
                        calendarEvent: m,
                        bSuppressHoverEffects: !1,
                        mode: "wide",
                        fnOnClicked: () =>
                          l.Dispatch(u.GID, u.clanSteamID.GetAccountID()),
                      },
                      "row" + m.unique_id,
                    );
                  }),
                ],
              });
        }
        function $t(o) {
          return (0, e.jsx)(Ae, { ...o, children: (0, e.jsx)(Zt, { ...o }) });
        }
        function Ae(o) {
          const { conferenceInfo: t } = o,
            n = (0, Wt.m)("WithCalendarStore"),
            [a, r] = (0, j.useState)(!0);
          return (
            (0, j.useEffect)(() => {
              n.token.reason ||
                O.Get()
                  .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
                  .finally(() => {
                    n.token.reason || r(!1);
                  });
            }, [t.rtEndTime, t.strConferenceID, n]),
            a
              ? (0, e.jsx)(Ot.t, {})
              : (0, e.jsx)(e.Fragment, { children: o.children })
          );
        }
        function _t(o) {
          const { closeModal: t } = o;
          return (0, e.jsxs)(oe.o0, {
            strTitle: (0, c.we)("#Conference_NeedHelp"),
            bAlertDialog: !0,
            onCancel: t,
            onOK: t,
            children: [
              (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_NeedHelp_Desc1"),
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsxs)("div", {
                    className: S.HelpDialogDetailsCtn,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)(
                          "#Conference_NeedHelp_BroadcastChatQ",
                        ),
                      }),
                      (0, e.jsxs)("ul", {
                        className: S.HelpRequirements,
                        children: [
                          (0, e.jsx)("li", {
                            children: (0, c.we)("#Conference_NeedHelp_ChatA1"),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, c.PP)(
                              "#Conference_NeedHelp_BroadcastChatA1",
                              (0, e.jsx)("a", {
                                href: "https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A",
                                children: (0, c.we)(
                                  "#Conferenec_NeedHelp_LimitedAccounts",
                                ),
                              }),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: S.HelpDialogDetailsCtn,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)("#Conference_NeedHelp_QandAQ"),
                      }),
                      (0, e.jsx)("ul", {
                        children: (0, e.jsx)("li", {
                          children: (0, c.we)("#Conference_NeedHelp_ChatA1"),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: S.HelpDialogDetailsCtn,
                    children: [
                      (0, e.jsx)("span", {
                        children: (0, c.we)(
                          "#Conference_NeedHelp_StillHaveQuestions",
                        ),
                      }),
                      (0, e.jsx)("a", {
                        href: "https://help.steampowered.com/wizard/HelpWithPublishing?issueid=933",
                        children: (0, c.we)(
                          "#Conference_NeedHelp_CreateTicket",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var h = s(44104),
          qt = s(43597);
        const we = 30;
        function en(o) {
          const { conferenceInfo: t, bShowYouTube: n } = o,
            [a, r] = j.useState(!1),
            d =
              (0, U.P_)(ne.Kp.PerMinute) < t.rtStartTime - we * ne.Kp.PerMinute;
          return (0, e.jsxs)("div", {
            className: h.ConferenceHome,
            children: [
              (0, e.jsx)("div", {
                className: (0, g.A)(h.LeftCol, a ? "Active" : "Hidden"),
                children: (0, e.jsxs)("div", {
                  className: h.AgendaCtn,
                  children: [
                    (0, e.jsx)(Kt, { conferenceInfo: t }),
                    (0, e.jsxs)("div", {
                      className: h.AgendaToggle,
                      onClick: () => {
                        r(!a);
                      },
                      children: [
                        (0, e.jsx)(F.he, {
                          toolTipContent: (0, c.we)("#QAndA_HideSchedule"),
                          children: (0, e.jsx)("div", {
                            className: h.CollapseBtn,
                            children: (0, e.jsx)(w.F2T, { angle: 0 }),
                          }),
                        }),
                        (0, e.jsx)(F.he, {
                          toolTipContent: (0, c.we)("#QAndA_ShowSchedule"),
                          children: (0, e.jsxs)("div", {
                            className: h.CalendarBtn,
                            children: [
                              (0, e.jsx)(w.VvS, {}),
                              (0, e.jsx)("div", {
                                className: h.CalendarText,
                                children: "See Event Schedule",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, e.jsxs)("div", {
                className: h.MainCol,
                children: [
                  n &&
                    (0, e.jsx)(qt.AX, {
                      videoID: t.youtubeVideoID,
                      bAutoPlay: !0,
                      bShowVideoImmediately: !0,
                    }),
                  d
                    ? (0, e.jsx)("div", {
                        className: h.InteractionCtn,
                        children: (0, e.jsx)("div", {
                          className: h.PreEventNote,
                          children: (0, c.we)("#Conference_ChatHidden", we),
                        }),
                      })
                    : (0, e.jsx)(tn, { conferenceInfo: t }),
                ],
              }),
            ],
          });
        }
        function tn(o) {
          const { conferenceInfo: t } = o,
            [n, a] = j.useState(window.innerWidth > 910),
            [r, l] = j.useState(!0),
            d =
              x.TS.COMMUNITY_BASE_URL +
              "broadcast/chatonly/" +
              t.broadcastSteamID.ConvertTo64BitString(),
            m =
              x.TS.COMMUNITY_BASE_URL +
              "questions/" +
              x.UF.VANITY_ID +
              "/view/" +
              t.globalQandASessionID;
          return (0, e.jsxs)("div", {
            className: h.InteractionCtn,
            children: [
              (0, e.jsxs)("div", {
                className: h.TabControlsCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, g.A)(
                      h.InnerChatTab,
                      h.ChatTab,
                      n ? h.Active : "",
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: h.TabTitle,
                        onClick: () => {
                          a(!0), l(!1);
                        },
                        children: (0, c.we)("#Conference_Tab_Chat"),
                      }),
                      (0, e.jsx)(F.he, {
                        toolTipContent: (0, c.we)("#QAndA_PopOutChat_ttip"),
                        children: (0, e.jsx)("a", {
                          className: h.Popout,
                          href: d,
                          target: "_blank",
                          children: (0, e.jsx)(w.YNO, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, g.A)(
                      h.InnerChatTab,
                      h.QATab,
                      r ? h.Active : "",
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: h.TabTitle,
                        onClick: () => {
                          a(!1), l(!0);
                        },
                        children: (0, c.we)("#Conference_Tab_QandA"),
                      }),
                      (0, e.jsx)(F.he, {
                        toolTipContent: (0, c.we)("#QAndA_PopOutQAndA_ttip"),
                        children: (0, e.jsx)("a", {
                          className: h.Popout,
                          href: m,
                          target: "_blank",
                          children: (0, e.jsx)(w.YNO, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(F.he, {
                    toolTipContent: (0, c.we)("#QAndA_ChatToggle_ShowBoth"),
                    children: (0, e.jsx)("div", {
                      className: h.ShowBothTabs,
                      onClick: () => {
                        a(!0), l(!0);
                      },
                      children: (0, e.jsx)(w.QQ4, {}),
                    }),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: h.ChatStack,
                children: [
                  !!((n && r) || (!r && !n)) &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("div", {
                          className: h.ChatColumn,
                          children: (0, e.jsx)(he, {
                            conferenceInfo: t,
                            className: h.ChatCtn,
                          }),
                        }),
                        (0, e.jsx)("div", {
                          className: h.QAColumn,
                          children: (0, e.jsx)(ge.u6, {
                            gidSession: t.globalQandASessionID,
                          }),
                        }),
                      ],
                    }),
                  !!(n && !r) &&
                    (0, e.jsx)(he, { conferenceInfo: t, className: h.ChatCtn }),
                  !!(!n && r) &&
                    (0, e.jsx)(ge.u6, { gidSession: t.globalQandASessionID }),
                ],
              }),
            ],
          });
        }
        function nn(o) {
          const { conferenceInfo: t } = o;
          if (!t.faqAboutPage)
            return (0, e.jsx)("div", {
              children: (0, c.we)("#Conference_NoAbout"),
            });
          const { title: n, content: a, timestamp: r } = t.faqAboutPage;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { className: h.AboutTitle, children: n }),
              (0, e.jsx)(Ze.u, { text: a, bShowErrorInfo: !1, version: "0" }),
            ],
          });
        }
        function an(o) {
          const { conferenceInfo: t } = o;
          return (0, e.jsx)($t, { conferenceInfo: t });
        }
        var W = s(61937);
        function on(o) {
          const { strVanity: t } = o,
            n = B.Get().GetConferenceInfo(t);
          return n
            ? (0, e.jsx)(L.tH, {
                children: (0, e.jsx)("div", {
                  className: W.ConferencePageCtn,
                  children: (0, e.jsx)(sn, { conferenceInfo: n }),
                }),
              })
            : (0, e.jsx)("div", { children: (0, c.we)("#Conference_Invalid") });
        }
        function sn(o) {
          const { conferenceInfo: t } = o,
            n = (l) =>
              window.sessionStorage.setItem(
                "conferenceCurrentTab",
                `?tab=${l.key}`,
              ),
            a = [],
            r = (0, U.f1)();
          return (
            r < t.rtEndTime &&
              a.push({
                name: (0, c.we)("#Conference_tab_Home"),
                key: "live",
                contents: (0, e.jsx)(L.tH, {
                  children: (0, e.jsx)(en, {
                    bShowYouTube: !!t.youtubeVideoID,
                    conferenceInfo: t,
                  }),
                }),
                onClick: n,
              }),
            a.push({
              name: (0, c.we)("#Conference_tab_Past"),
              key: "past",
              contents: (0, e.jsxs)(L.tH, {
                children: [
                  (0, e.jsx)(an, { conferenceInfo: t }),
                  !t.youtubeVideoID &&
                    r < t.rtEndTime &&
                    (0, e.jsx)(Ce, { conferenceInfo: t }),
                ],
              }),
              onClick: n,
            }),
            a.push({
              name: (0, c.we)("#Conference_tab_Info"),
              key: "about",
              contents: (0, e.jsxs)(L.tH, {
                children: [
                  (0, e.jsx)(nn, { conferenceInfo: t }),
                  !t.youtubeVideoID &&
                    r < t.rtEndTime &&
                    (0, e.jsx)(Ce, { conferenceInfo: t }),
                ],
              }),
              onClick: n,
            }),
            a.push({
              name: "(VO/Internal) Debug",
              key: "debug",
              hidden: !0,
              contents: (0, e.jsx)(L.tH, {
                children: (0, e.jsx)(Xe, { conferenceInfo: t }),
              }),
              onClick: n,
            }),
            (0, e.jsxs)("div", {
              className: W.ConferenceContentsCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: W.ConferenceHeaderCtn,
                  children: [
                    (0, e.jsx)(ue.c, {
                      className: W.LogoImage,
                      rgSources: t.strLocalizedLogos,
                    }),
                    (0, e.jsx)(ue.c, {
                      className: W.LogoImageMobile,
                      rgSources: t.strLocalizedMobileLogos,
                    }),
                    (0, e.jsx)("div", {
                      className: W.ConferenceDateRange,
                      children: (0, e.jsx)(V.X0, {
                        rtStartDate: t.rtStartTime,
                        rtEndDate: t.rtEndTime,
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(Ve.V, { tabs: a }),
              ],
            })
          );
        }
        var ln = s(90783);
        const Ge = {
          LandingPage: (o) => `/(conference|steamworksvirtualconference)/${o}`,
        };
        function rn(o) {
          return (0, e.jsxs)(Y.dO, {
            children: [
              (0, e.jsx)(Y.qh, {
                path: Ge.LandingPage(":vanity_str"),
                render: (t) =>
                  (0, e.jsx)(Re.X, {
                    config: {
                      "conference-root": () => {
                        const { vanity_str: n } = t.match.params;
                        return (0, e.jsx)(on, {
                          strVanity: n.toLocaleLowerCase(),
                        });
                      },
                    },
                  }),
              }),
              (0, e.jsx)(Y.qh, { component: ln.a }),
            ],
          });
        }
        const cn = rn;
      },
      88619: (A) => {
        A.exports = { BroadcastChatCtn: "_28b1vPJH7sip9Uh_p3OJvD" };
      },
      63585: (A) => {
        A.exports = {
          narrowWidth: "500px",
          UpcomingEventsCtn: "_2bWupCdqo2ydQKY6NnkUB6",
          SectionTitle: "_7MpRs3COqajm5Yq2cyHCk",
          EventSchedCtn: "Tn2UrQKNb5TtPYtu9eJOo",
          EventItemCtn: "z6qIMnRuBMfsKvkgAMr4X",
          Title: "_2EqgH8ow9heADdpLvDdJFn",
          SessionTime: "_IkarZfcdwDZIzHBUAup1",
          ActiveEventCtn: "_2lP0CenzIHyncnSquDOYX2",
          LiveNote: "_3zSJmWuHhBAbq80HWDxRZg",
          LiveIcon: "_38GJhGq-WQnIwnn8cr7h5p",
          EventDescription: "_3hKDoSYfjaFvieDQXVYs82",
          ReadMoreBtn: "_2z4bawzux4DqU5n4BaSssW",
          EventsScheduleCtn: "_33-478dIs2y89VpwjBKd5Q",
          ReminderContainer: "_2vLZTXCwfColAphn-AKL29",
          OnlyIcon: "_3fZISAQ1UOTiyviS_bMh3-",
          PastEventsCtn: "_3pfjFJ9WVi45La-eVD1EBw",
          HelpDialogDetailsCtn: "_1IQeQq6EP-VdV6AZAJ3Rug",
          HelpRequirements: "_3yMlxXljDQU9oAEzydEHBB",
        };
      },
      44104: (A) => {
        A.exports = {
          narrowWidth: "500px",
          ConferenceHome: "_3tSqDwD1rkt0nwIB8025VK",
          LeftCol: "_19xFd3vdYEozXiTDzOEto9",
          AgendaToggle: "_1rjE02_5_HPWGT3UJXQKL2",
          CollapseBtn: "_2RCNdz1kCYXgL3wheg5ts6",
          CalendarBtn: "_22bby_AsedipJlq0-5qtmY",
          CalendarText: "kxtN0yE4qv3o_wwBWnnLs",
          MainCol: "_1qlknQargwyqHQhwj_8oum",
          InteractionCtn: "_39uHL_Fe3PpolZLRdah_VU",
          BroadcastCtn: "_240cuck3u91loqxwvTCj-",
          videoContainerSizer: "twsjQDioroj0pL68fDPZh",
          Hidden: "aE3VL3T6yQRMd_AKTrhue",
          ChatColumn: "_2ldId97FtoJ0M0Sw45iEC6",
          ChatTitle: "_3CjWmRtkS-bipkNJfDvGal",
          QAColumn: "_1RCLwKL1eycfalZ4MrKxB9",
          PreEventNote: "__FhrYr6JkEOLBHADuZP0",
          TabControlsCtn: "_1HJDDlNR32Jt_Ia9XJhZKH",
          Close: "_3cKbt74603iNN2a2pFoDL",
          ShowBothTabs: "fZBE8Pcls5-xbHBmWaIzC",
          ChatTab: "_3WoUgyFb6zejRRjTzMR36x",
          QATab: "_1An5OJv3NQypTb4kDdjRYq",
          InnerChatTab: "_1g3oabV2KUxjOJOaAzfEUp",
          TabTitle: "_24i11is7XyYPV89pSY3xBt",
          Popout: "QHxXWore8H11Ach3U2g5V",
          Active: "_3PSCm3SaHjGjYbM2kBZwKt",
          ChatStack: "_1ogmvaT56600iCAZCN3hj3",
          AboutTitle: "_3yWGoYvgAyD6vP018TFBNb",
        };
      },
      61937: (A) => {
        A.exports = {
          narrowWidth: "500px",
          ConferencePageCtn: "oP_SPwwzov5nQN2TQUAEf",
          ConferenceContentsCtn: "_1HPPRdXNo8sgT-dXQ9h-5l",
          ConferenceHeaderCtn: "_1AbLqPiq2KJuEV09TbddQW",
          LogoImage: "_3i2i50OjRZCY5qTtlLvN7G",
          LogoImageMobile: "_3iVf9n6tpBlwoSdiOW3Jhf",
          ConferenceDateRange: "_2FSEt04eUDUO8y1rLtlEat",
        };
      },
      72978: (A) => {
        A.exports = {
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
      70758: (A) => {
        A.exports = {
          YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
          YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
        };
      },
    },
  ]);
})();
