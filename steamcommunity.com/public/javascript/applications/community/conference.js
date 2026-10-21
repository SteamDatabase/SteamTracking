/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [68521],
    {
      5306: (N, ce, s) => {
        "use strict";
        s.r(ce), s.d(ce, { ConferenceRoutes: () => Ge, default: () => rn });
        var e = s(7850),
          K = s(92757),
          ke = s(20076),
          de = s(29630),
          p = s(99412),
          $ = s(76559),
          me = s(90395),
          S = s(3166),
          Re = s(14947);
        class L {
          m_mapConferences = Re.sH.map();
          GetConferenceInfo(t) {
            return this.m_mapConferences.get(t);
          }
          static s_Singleton;
          static Get() {
            return (
              L.s_Singleton ||
                ((L.s_Singleton = new L()), L.s_Singleton.Init()),
              L.s_Singleton
            );
          }
          async Init() {
            let t = (0, S.Tc)("conferenceinfo", "application_config");
            if (this.ValidateStoreDefault(t)) {
              const n = (0, p.sfN)(S.TS.LANGUAGE),
                o = (0, me.CJ)(t.clan_faq_about_page),
                i = me.pN.Get().GetFAQPublishedContent(o, n),
                r = {
                  strConferenceID: t.vanity,
                  rtStartTime: t.start_rtime,
                  rtEndTime: t.end_rtime,
                  clanSteamID: new $.b(t.event_group_steamid),
                  broadcastSteamID: new $.b(t.broadcast_steamid),
                  bPartnerOnly: t.partner_only,
                  faqAboutPage: i,
                  strLocalizedLogos: null,
                  strLocalizedMobileLogos: null,
                  globalQandASessionID: t.global_qanda_session_id,
                  youtubeVideoID: t.youtubeVideoID,
                };
              this.m_mapConferences.set(t.vanity, r);
              const d = await (0, de.Er)(t.localized_logo, n, i?.timestamp),
                m = await (0, de.Er)(t.localized_mobile_logo, n, i?.timestamp);
              this.m_mapConferences.set(t.vanity, {
                ...r,
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
          F = s(25792),
          V = s(18057),
          ue = s(13465),
          Ue = s(21418),
          c = s(18210),
          _ = s(65946),
          I = s(90626),
          Ve = s(9398),
          Oe = s(23240),
          ve = s(90711),
          We = s(25317),
          C = s(36707),
          Qe = s(88619),
          Ye = s(53120),
          Ke = s(54089);
        function ze(a) {
          const { conferenceInfo: t } = a,
            n = t.broadcastSteamID.ConvertTo64BitString();
          return (0, e.jsx)(F.tH, {
            children: (0, e.jsx)(Oe.default, {
              steamIDBroadcast: n,
              watchLocation: ve.nn.CJ,
              bStartMuted: !0,
            }),
          });
        }
        function he(a) {
          const { conferenceInfo: t } = a,
            n = (0, _.q3)(() => t.broadcastSteamID.ConvertTo64BitString());
          return (0, e.jsx)("div", {
            className: (0, C.A)(
              Qe.BroadcastChatCtn,
              a.className ? `${a.className}` : "",
            ),
            children: (0, e.jsx)(F.tH, {
              children: (0, e.jsx)(Ve.I, {
                emoticonStore: We.MX,
                watchLocation: ve.nn.CJ,
                steamID: n,
                globalChat: !0,
                bPartnerMemberOnlyChat: t.bPartnerOnly,
                bInvertLayout: !0,
              }),
            }),
          });
        }
        function Ce(a) {
          const { conferenceInfo: t } = a,
            [n, o] = I.useState(!1);
          return n
            ? null
            : (0, e.jsxs)("div", {
                className: Ye.broadcast_floating,
                children: [
                  (0, e.jsx)(Ke.BroadcastEmbeddablePopoutHeader, {
                    steamIDBroadcast: t.broadcastSteamID.ConvertTo64BitString(),
                    OnPreventPopup: () => o(!0),
                  }),
                  (0, e.jsx)(ze, { conferenceInfo: t }),
                ],
              });
        }
        var fe = s(26485);
        function Je(a) {
          const { conferenceInfo: t } = a;
          return null;
        }
        var ge = s(67628),
          Xe = s(71462),
          w = s(36118),
          P = s(71421),
          ne = s(36174),
          T = s(98241);
        class O {
          m_inFlight = null;
          async LoadInitialCalendarData(t, n) {
            return (
              this.m_inFlight ||
                (this.m_inFlight = this.InternalLoadInitialCalendarData(t, n)),
              this.m_inFlight
            );
          }
          async InternalLoadInitialCalendarData(t, n) {
            (0, T.Zr)({ collectionid: n, bSectionByDay: !0, rtCalendarEnd: t });
            const o = (0, T.v0)(),
              i = (0, S.Tc)("conference_calendar", "application_config");
            i && (await o.RegisterCalendarEventsAndModels(i)),
              o.SetFilteredView((r) => !0);
          }
          static m_singleton;
          static Get() {
            return O.m_singleton || (O.m_singleton = new O()), O.m_singleton;
          }
          constructor() {}
        }
        var xe = s(98112),
          Ze = s(18614),
          z = s(77495),
          $e = s(19316),
          _e = s(91424),
          q = s(75844),
          b = s(49789),
          qe = s(90825),
          J = s(9046),
          ae = s(813),
          y = s(81673),
          et = s(10014),
          tt = s(16346),
          nt = s(19619),
          at = s(74618),
          G = s(34360),
          Se = s(82734),
          ot = s(53113),
          oe = s(2801),
          se = s(88003),
          st = s(72978),
          l = s.n(st),
          B = s(56492),
          lt = s(89926),
          it = s(35675);
        function rt(a) {
          const { closeModal: t } = a,
            n = () => {
              (0, T.v0)().m_visibilityStore.SetGameSourceAllowed(
                y.FD.k_ECurator,
                !0,
              ),
                t && t();
            },
            o = () => {
              (0,
              T.v0)().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(
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
            onCancel: o,
          });
        }
        function ct(a) {
          a ||
            ((0, T.dP)() &&
              ((0,
              T.v0)().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
                (0, T.v0)().m_visibilityStore.BIsGameSourceAllowed(
                  y.FD.k_ECurator,
                ) ||
                (0, se.pg)((0, e.jsx)(rt, {}), window)));
        }
        const dt = (0, q.PA)((a) => {
          const { eventModel: t, calendarEvent: n, history: o } = a,
            i = (E) => {
              let v = n.GetEntityName();
              (0, se.pg)(
                (0, e.jsx)(oe.o0, {
                  strTitle: (0, c.we)("#EventCalendar_MuteApp_Title", v),
                  strDescription: (0, c.we)(
                    "#EventCalendar_MuteApp_details",
                    v,
                  ),
                  onOK: () =>
                    (0, T.v0)().UpdateEventBlockFromCalendarEvent(n, !1),
                  children: (0, e.jsx)("a", {
                    href: S.TS.STORE_BASE_URL + "account/emailoptout/app",
                    target: S.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, c.we)("#EventCalendar_ManageMutedSources"),
                  }),
                }),
                (0, Se.uX)(E),
              );
            },
            r = () => {
              (0, T.v0)().UpdateEventBlockFromCalendarEvent(n, !0);
            },
            d = () => {
              const E = m().MapClanEventTypeToGroup(t.GetEventType());
              m().SetEventTypeGroupAllowed(E, !1);
            },
            m = () => (0, T.v0)().m_visibilityStore,
            u = (E, v, x, g = !0) => {
              m().BIsGameSourceAllowed(v) &&
                (g &&
                  E.push(
                    (0, e.jsx)(
                      G.kt,
                      {
                        disabled: !0,
                        onSelected: () => {},
                        children: (0, c.we)("#EventCalender_Reason_" + v),
                      },
                      `item-source-${x}-${v}`,
                    ),
                  ),
                E.push(
                  (0, e.jsx)(
                    G.kt,
                    {
                      onSelected: () => {
                        m().SetGameSourceAllowed(v, !1);
                      },
                      children: (0, c.we)("#EventCalender_Hide_Reason_" + v),
                    },
                    `item-hidesource-${x}-${v}`,
                  ),
                ));
            },
            f = (0, B.Bw)(t, B.PH.k_eStoreNewsHub, "allowRelative"),
            D = () => {
              f.startsWith("http") ? (window.location.href = f) : o.push(f);
            },
            A = (E) => {
              let v = [];
              const x = n.GetSource(),
                g = n.unique_id,
                H = (0, S.Y2)(),
                k = (0, T.v0)();
              k.BIsGlobalCalendar() &&
                (x &&
                  x & b.bK.k_eLibrary &&
                  (m().BIsGameSourceAllowed(y.FD.k_ERecent) && n.appInfo
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
                          `item-source-${g}-lastplayed`,
                        ),
                      ),
                      u(v, y.FD.k_ERecent, g, !1))
                    : u(v, y.FD.k_ELibrary, g)),
                x && x & b.bK.k_eWishlist && u(v, y.FD.k_EWishlist, g),
                x && x & b.bK.k_eFollowing && u(v, y.FD.k_EFollowing, g),
                !H && x && x & b.bK.k_eCurator && u(v, y.FD.k_ECurator, g),
                x && x & b.bK.k_eRecommended && u(v, y.FD.k_ERecommended, g),
                x && x & b.bK.k_eSteam && u(v, y.FD.k_ESteam, g),
                x && x & b.bK.k_eFeatured && u(v, y.FD.k_EFeatured, g)),
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
                S.iA.logged_in &&
                  (at.S.Get().BIsEventBlocked(n)
                    ? v.push(
                        (0, e.jsx)(
                          G.kt,
                          {
                            onSelected: r,
                            children: (0, e.jsx)(P.he, {
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
                            onSelected: i,
                            children: (0, e.jsx)(P.he, {
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
                  !H &&
                  v.push((0, e.jsx)(mt, { eventModel: t, calendarEvent: n })),
                k.BIsSingleSourceCalendar() ||
                  v.push(
                    (0, e.jsx)(
                      G.kt,
                      {
                        onSelected: D,
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
                          (window.location.href = (0, ot.k2)(
                            S.TS.STORE_BASE_URL + "app/" + t.appid,
                          )),
                        children: (0, c.we)("#EventDisplay_ViewStorePage"),
                      },
                      t.GID + "goto",
                    ),
                  ),
                (0, tt.lX)((0, e.jsx)(G.tz, { children: v }), E);
            };
          return (0, e.jsx)("div", {
            className: (0, C.A)(l().FooterStat, l().Options),
            onClick: A,
            children: (0, e.jsx)(w.faJ, {}),
          });
        });
        function mt(a) {
          const { eventModel: t, calendarEvent: n } = a,
            o = (0, it.eT)(t.clanSteamID.GetAccountID()),
            { elDialogElement: i, fnShowLogonDialog: r } = (0, lt.l)(),
            d = I.useCallback(async () => {
              S.iA.logged_in
                ? (await nt.Fm.Get().UpdateFollowOrIgnoreCurator(
                    t.clanSteamID,
                    !0,
                    !o,
                  ),
                  ct(!!o))
                : r();
            }, [o, t.clanSteamID, r]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(
                G.kt,
                {
                  onSelected: d,
                  children: (0, e.jsx)(P.he, {
                    toolTipContent: (0, c.we)(
                      o
                        ? "#EventCalendar_UnFollowCurator_ttip"
                        : "#EventCalendar_FollowCurator_ttip",
                    ),
                    children: (0, c.we)(
                      o
                        ? "#EventCalendar_UnFollowCurator"
                        : "#EventCalendar_FollowCurator",
                      n.GetEntityName(),
                    ),
                  }),
                },
                t.GID + "followcurator",
              ),
              i,
            ],
          });
        }
        const ut = (0, K.y)(dt);
        var vt = s(20035),
          ht = s(68988),
          M = s(90533),
          Ct = s(85741),
          ft = s(68266),
          gt = s(53876),
          xt = s(88812),
          je = s(6221),
          Ie = s(21659),
          St = s(39239),
          Ee = s(32608),
          jt = s(70758),
          le = s.n(jt),
          pe = s(1123);
        const be = (a) => {
            const t = ["maxresdefault", "mqdefault", "default"],
              [n, o] = I.useState(0);
            I.useEffect(() => o(0), [a.video]);
            const i = I.useRef(void 0);
            if (a.altImgWithFallback && a.altImgWithFallback.length > 0)
              return (0, e.jsx)(St.o, {
                className: a.className,
                srcs: a.altImgWithFallback,
              });
            if (a.altImg)
              return (0, e.jsx)("img", {
                src: a.altImg,
                className: a.className,
              });
            {
              const r =
                  "https://img.youtube.com/vi/" + a.video + "/" + t[n] + ".jpg",
                d = () => {
                  n + 1 < t.length && o(n + 1);
                },
                m = () => {
                  i.current && i.current.naturalHeight < 91 && d();
                };
              return (0, e.jsx)("img", {
                ref: i,
                onLoad: m,
                onError: d,
                src: r,
                className: (0, C.A)(le().YoutubePreviewImage, a.className),
              });
            }
          },
          It = (a) => {
            const [t, n] = I.useState(!1);
            (0, Ee.VC)(!!a.preloadYoutubeScripts);
            const o = (0, pe.Rp)("youtube");
            if (!t || !o) {
              const i = (r) => {
                a.onPlayerActivated && a.onPlayerActivated(),
                  n(!0),
                  r.stopPropagation(),
                  r.preventDefault();
              };
              return (0, e.jsxs)("div", {
                className: (0, C.A)(
                  "YoutubePreviewContainer",
                  le().YoutubePreviewImage,
                  a.imageClassnames,
                ),
                onClick: o ? i : void 0,
                children: [
                  (0, e.jsx)(be, {
                    className: "YoutubePreviewImage",
                    altImgWithFallback: a.altImgWithFallback,
                    altImg: a.altImg,
                    video: a.video,
                  }),
                  o &&
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
                ...a,
                classnames: (0, C.A)(le().YoutubePlayer, a.classnames),
              });
          };
        var ie = s(19730),
          Et = s(71684),
          pt = s(29522),
          bt = s(40358);
        function Tt(a) {
          const {
              eventModel: t,
              calendarEvent: n,
              bSuppressHoverEffects: o,
              mode: i,
              bHideGameTitle: r,
              fnOnClicked: d,
            } = a,
            [m, u] = I.useState(!1),
            f = (0, M.fm)(),
            D = (0, pt.$5)(t.GetAppIDOrReferenceAppID());
          (0, bt.lv)(D);
          const A = (0, Ct.Mg)(t);
          (0, ae.$5)(n.clanInfo?.clanid);
          const E = (0, p.sfN)(S.TS.LANGUAGE),
            v = "capsule",
            [x, g, H, k, X, Q, ee, cn, dn, mn, un] = (0, _.q3)(() => [
              t.has_live_stream,
              t.GetEventType(),
              t.GetAllTags(),
              t.GetCategoryAsString(),
              t.GetNameWithFallback(E),
              t.BImageNeedScreenshotFallback(v, E),
              t.appid,
              t.GID,
              t.GetStartTimeAndDateUnixSeconds(),
              t.GetSubTitleWithLanguageFallback(E),
              t.GetSummaryWithFallback(E),
            ]),
            [vn, hn] = I.useState(() =>
              (0, Ie.c5)() && g == p.zeJ ? J.wI.full : J.wI.capsule_main,
            ),
            Cn = (0, pe.Ey)(),
            fn = !!(Q && ee && A),
            gn = (0, ft.m0)(fn ? void 0 : t, v, E, vn, Cn) ?? A,
            xn = re(t, i),
            Sn = (0, gt.uU)(cn),
            Pe = l()[`EventType${g}`],
            jn = H.map((te) => l()[`Tag-${te}`]),
            In = (0, C.A)(
              l().TileContainer,
              Pe,
              x && l().TileVideoIcon,
              o ? l().DisableHovers : l().EnableHovers,
              m && l().VideoPlayerReady,
              xn && l().HasVideo,
              Sn && l().HasBeenRead,
              i === "wide" && l().WideMode,
              i === "carousel" && l().CarouselMode,
              i === "upcoming" && l().UpcomingMode,
              ...jn,
            );
          let R = mn,
            Z = un;
          R === Z && (Z = void 0), R === X && (R = void 0);
          const Fe = (0, qe.j3)(gn),
            Le = (0, e.jsx)(Nt, {
              setVideoPlayerReady: u,
              calendarEvent: n,
              eventModel: t,
              mode: i,
              artworkType: v,
              strCapsuleImgURLForBackground: Fe,
              fnSetCoverSize: hn,
            }),
            En = m && i !== "carousel",
            Be = o && g != p.zeJ && !En,
            pn = Be && Le,
            bn = !Be && Le,
            Tn =
              g !== p.uYK && g !== p.Fwr && U.HD.GetTimeNowWithOverride() < dn,
            Y = i !== "wide" || o,
            Me =
              Tn &&
              (0, e.jsx)("div", {
                className: (0, C.A)(l().ReminderContainer, Y && l().OnlyIcon),
                children: (0, e.jsx)(je.j, {
                  eventModel: t,
                  lang: E,
                  bShowStartTime: !0,
                  bOnlyShowIcon: Y,
                  bExpandLeft: Y,
                }),
              }),
            He = !!(g !== p.Fwr && Z),
            yn = !!(R && (!He || !yt(R, Z)));
          return (0, e.jsxs)("div", {
            className: In,
            children: [
              (0, e.jsx)(vt.C, { event: t, recordNewsHubStats: !0 }),
              (0, e.jsx)(B.tj, {
                eventModel: t,
                route: B.PH.k_eView,
                children: (0, e.jsxs)("div", {
                  className: l().Tile,
                  onClick: (te) => {
                    f.RecordInteraction(M.Eg.k_eClickThrough),
                      !(0, B.sY)() &&
                        (d(t), te.stopPropagation(), te.preventDefault());
                  },
                  children: [
                    g === p.zeJ &&
                      (0, e.jsx)("div", {
                        className: (0, C.A)(
                          l().TileBackgroundImage,
                          Q && l().FallbackImage,
                        ),
                        style: { backgroundImage: `url(${Fe})` },
                      }),
                    (0, e.jsxs)("div", {
                      className: l().MainContentContainer,
                      children: [
                        bn,
                        (0, e.jsxs)("div", {
                          className: l().TileTextContainer,
                          children: [
                            g == p.Fwr &&
                              (0, e.jsx)("div", {
                                className: l().PatchIconCtn,
                                children: (0, e.jsx)(w.vjL, {}),
                              }),
                            (0, e.jsxs)("div", {
                              className: l().EventTitleCtn,
                              children: [
                                pn,
                                !r &&
                                  (0, e.jsxs)("div", {
                                    className: l().GameSource,
                                    children: [
                                      (0, e.jsx)(wt, { ...a }),
                                      n && (0, e.jsx)(Pt, { calendarEvent: n }),
                                    ],
                                  }),
                                (0, e.jsx)("div", {
                                  className: l().EventName,
                                  children: X,
                                }),
                                (0, e.jsxs)("div", {
                                  className: l().EventTypeAndDateCtn,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: (0, C.A)(
                                        l().TileTextCategoryType,
                                        Pe,
                                      ),
                                      children: k,
                                    }),
                                    (0, e.jsx)(Gt, {
                                      eventModel: t,
                                      className: (0, C.A)(
                                        Y && l().LeaveRoomForReminder,
                                      ),
                                    }),
                                    Y && Me,
                                  ],
                                }),
                                yn &&
                                  (0, e.jsx)("div", {
                                    className: l().EventSubTitle,
                                    children: R,
                                  }),
                                He &&
                                  (0, e.jsx)("div", {
                                    className: (0, C.A)(
                                      l().EventSummaryDefault,
                                      R ? l().SubTitleShown : "",
                                    ),
                                    children: Z,
                                  }),
                              ],
                            }),
                            !Y && Me,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, e.jsx)(Bt, { ...a }),
            ],
          });
        }
        function yt(a, t) {
          const n = (r) => r.replace(/\W+/g, "").toLocaleLowerCase(),
            o = n(a);
          return n(t).startsWith(o);
        }
        function re(a, t) {
          const { video_preview_type: n, video_preview_id: o, type: i } = a;
          return !(t === "upcoming" || !o || i === p.Fwr || n !== "youtube");
        }
        function Dt(a) {
          const { eventModel: t, fnSetVideoStateReady: n, mode: o } = a,
            { video_preview_id: i, type: r } = a.eventModel,
            d = (0, M.fm)(),
            m = (0, p.sfN)(S.TS.LANGUAGE),
            u = (0, Ie.c5)() && r == p.zeJ ? J.wI.full : J.wI.capsule_main,
            f = (0, xt.WC)(t, "capsule", m, u, !0);
          if (o === "carousel")
            return (0, e.jsx)(be, {
              altImgWithFallback: f,
              video: i,
              className: l().YoutubePreviewImage,
            });
          const D = () => {
            d.RecordInteraction(M.Eg.k_ePlayedVideo), n(!0);
          };
          return (0, e.jsx)(It, {
            video: i,
            altImgWithFallback: f,
            autoplay: !0,
            autopause: !0,
            showFullscreenBtn: !0,
            controls: !0,
            imageClassnames: l().YoutubePreviewImage,
            onPlayerActivated: D,
            preloadYoutubeScripts: !0,
            playsInline: !0,
          });
        }
        function Nt(a) {
          const {
              eventModel: t,
              calendarEvent: n,
              mode: o,
              artworkType: i,
              strCapsuleImgURLForBackground: r,
              setVideoPlayerReady: d,
              fnSetCoverSize: m,
            } = a,
            u = (0, p.sfN)(S.TS.LANGUAGE),
            f = re(t, o),
            D = !re(t, o) && o !== "upcoming",
            [A, E, v, x, g, H] = (0, _.q3)(() => [
              t.GetEventType(),
              t.has_live_stream,
              t.has_live_stream,
              t.clanSteamID.GetAccountID(),
              n.GetGameCapsule(),
              t.BImageNeedScreenshotFallback(i, u),
            ]);
          I.useEffect(() => {
            if (r) {
              const ee = new Image();
              (ee.src = r),
                (ee.onerror = () => {
                  m(J.wI.full);
                });
            }
          }, [r, m]);
          const [, k] = (0, ae.TB)(x),
            X = k && !k.is_ogg;
          let Q = t.GetSummaryWithFallback(u);
          return (
            t.GetSubTitleWithLanguageFallback(u) === Q && (Q = void 0),
            (0, e.jsxs)("div", {
              className: l().CoverImageCtn,
              children: [
                f &&
                  (0, e.jsx)(Dt, {
                    eventModel: t,
                    mode: o,
                    calendarEvent: n,
                    fnSetVideoStateReady: d,
                  }),
                D &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      A === p.Fwr &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: l().GameCapsuleCtn,
                              children: (0, e.jsx)("div", {
                                className: (0, C.A)({
                                  [l().AppBannerLogo]: !0,
                                  [l().FallbackImage]: H,
                                  [l().ClanSource]: X,
                                }),
                                style: { backgroundImage: `url(${g})` },
                              }),
                            }),
                            (0, e.jsx)("div", {
                              className: l().GameShortDescription,
                              children: Q,
                            }),
                          ],
                        }),
                      A !== p.Fwr &&
                        (0, e.jsxs)("div", {
                          className: (0, C.A)({
                            [l().EventCapsuleCtn]: !0,
                            [l().LiveBroadcastPreview]: v,
                          }),
                          children: [
                            (0, e.jsx)("div", {
                              className: (0, C.A)({
                                [l().TileImage]: !0,
                                [l().FallbackImage]: H,
                                [l().ClanSource]: X,
                              }),
                              style: { backgroundImage: `url(${r})` },
                            }),
                            v &&
                              (0, e.jsx)("div", {
                                className: l().TileCoverImagePlayable,
                              }),
                            E &&
                              (0, e.jsx)("div", {
                                className: l().TileCoverLiveIcon,
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
        const At = (0, q.PA)((a) => {
            const {
                eventModel: t,
                calendarEvent: n,
                bSuppressHoverEffects: o,
                history: i,
              } = a,
              r = (0, B.Bw)(t, B.PH.k_eStoreNewsHub, "allowRelative"),
              d = (D) => {
                r.startsWith("http") ? (window.location.href = r) : i.push(r),
                  D.stopPropagation(),
                  D.preventDefault();
              },
              m = n.GetEntityName(),
              u = n.GetGameIcon(),
              f = (0, C.A)(
                l().GameTitleContainer,
                o ? l().DisableHovers : l().EnableHovers,
              );
            return (0, e.jsx)(F.tH, {
              children: (0, e.jsx)("div", {
                className: l().TileTextHeader,
                children: (0, e.jsxs)("div", {
                  className: f,
                  onClick: d,
                  children: [
                    (0, e.jsx)("img", { className: l().AppIcon, src: u }),
                    (0, e.jsxs)("div", {
                      className: l().TileTextAppName,
                      children: [m, " "],
                    }),
                  ],
                }),
              }),
            });
          }),
          wt = (0, K.y)(At),
          Gt = (0, q.PA)((a) => {
            const { eventModel: t, calendarEvent: n, className: o } = a,
              i = (0, T.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
              r = t ? t.GetStartTimeAndDateUnixSeconds() : n.start_time,
              d = t && (0, Et.JS)(t.type) && t.GetEndTimeAndDateUnixSeconds();
            if (d && r < i && i < d) {
              const m = d - i,
                u = (0, c.Hq)(m, !0);
              return (0, e.jsxs)("div", {
                className: (0, C.A)(l().LiveText, o),
                children: [
                  (0, e.jsx)(V.gS, {
                    rtFullDate: r,
                    stylesmodule: l(),
                    children: (0, e.jsx)("div", {
                      className: l().LiveNow,
                      children: (0, c.we)("#EventCalendar_LiveNow"),
                    }),
                  }),
                  (0, e.jsx)(V.gS, {
                    rtFullDate: d,
                    stylesmodule: l(),
                    children: (0, c.we)("#EventCalendar_TimeLeft", u),
                  }),
                ],
              });
            } else if (r < i) {
              const m = i - r,
                u = m < 24 * 3600 ? (0, c.Hq)(m, !1, !0) : (0, c._l)(r);
              return (0, e.jsx)(V.gS, {
                className: o,
                rtFullDate: r,
                stylesmodule: l(),
                children: (0, e.jsx)("div", {
                  className: l().PastDateText,
                  children: u,
                }),
              });
            } else {
              const m = new Date(i * 1e3);
              m.setHours(0, 0, 0, 1);
              const u = m.getTime() / 1e3,
                f = Math.floor((r - u) / (24 * 3600)),
                D =
                  f > 1 && f <= 5 ? (0, c.cc)(new Date(r * 1e3)) : (0, c._l)(r),
                A = (0, V.pg)(r);
              return (0, e.jsx)(V.gS, {
                className: o,
                rtFullDate: r,
                stylesmodule: l(),
                children: (0, e.jsx)("div", {
                  className: l().FutureDateText,
                  children: (0, c.we)(
                    "#EventCalendar_WillStartAtDateTime",
                    D,
                    A,
                  ),
                }),
              });
            }
          }),
          Pt = (0, q.PA)((a) => {
            const t = a.calendarEvent.GetSource(),
              n = [],
              o = (0, T.v0)().m_visibilityStore;
            t & b.bK.k_eLibrary && o.BIsGameSourceAllowed(y.FD.k_ELibrary)
              ? n.push({
                  id: b.bK.k_eLibrary,
                  name: "#EventCalendar_GameSource_inLibrary",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_library",
                  styles: l().LibrarySource,
                })
              : t & b.bK.k_eWishlist && o.BIsGameSourceAllowed(y.FD.k_EWishlist)
                ? n.push({
                    id: b.bK.k_eWishlist,
                    name: "#EventCalendar_GameSource_onWishlist",
                    ttip: "#EventCalendar_GameSource_EventExplanation_ttip_wishlist",
                    styles: l().WishlistSource,
                  })
                : t & b.bK.k_eRecommended &&
                    o.BIsGameSourceAllowed(y.FD.k_ERecommended)
                  ? n.push({
                      id: b.bK.k_eRecommended,
                      name: "#EventCalendar_GameSource_recommended_Verbose",
                      ttip: "#EventCalendar_GameSource_EventExplanation_ttip_recommended",
                      styles: l().RecommendedSource,
                    })
                  : t & b.bK.k_eFeatured &&
                    o.BIsGameSourceAllowed(y.FD.k_EFeatured) &&
                    n.push({
                      id: b.bK.k_eFeatured,
                      name: "#EventCalendar_GameSource_featured",
                      ttip: "#EventCalendar_GameSource_ttip_featured",
                      styles: l().FeaturedSource,
                    }),
              t & b.bK.k_eFollowing &&
                o.BIsGameSourceAllowed(y.FD.k_EFollowing) &&
                n.push({
                  id: b.bK.k_eFollowing,
                  name: "#EventCalendar_GameSource_followed",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_following",
                  styles: l().FollowingSource,
                });
            const i = n.map((r, d) => {
              const m = a.calendarEvent.unique_id;
              return Ft(
                `item-source-${m}-${r.id}`,
                r.name,
                r.ttip,
                r.styles,
                d + 1 < n.length,
              );
            });
            return (0, e.jsx)("div", {
              className: l().SourceList,
              children: i,
            });
          }),
          Ft = (a, t, n, o, i) =>
            (0, e.jsx)(
              P.he,
              {
                className: (0, C.A)(l().Source, o),
                toolTipContent: (0, c.we)(n),
                children: (0, c.we)(t) + (i ? ", " : ""),
              },
              a,
            );
        function Lt(a) {
          return S.iA.logged_in
            ? S.iA.is_limited
              ? l().Vote_LimitedUser
              : a === "up"
                ? l().Vote_Positive
                : a === "down"
                  ? l().Vote_Negative
                  : l().Vote_Ready
            : l().Vote_NotLoggedIn;
        }
        function Bt(a) {
          const { eventModel: t } = a,
            n = (0, M.fm)(),
            { myVote: o, Vote: i } = (0, ht.C)(t, { bAsk: !1 }),
            [, r] = (0, ae.TB)(t.clanSteamID.GetAccountID()),
            d = () => {
              o !== "up" &&
                (0, et.W)() &&
                (i("up"), n.RecordInteraction(M.Eg.k_eThumbsUp));
            },
            m = () => {
              n.RecordInteraction(M.Eg.k_eDiscussions);
            },
            [u, f, D] = (0, _.q3)(() => [
              Math.max(0, t.nVotesUp - t.nVotesDown),
              t.GetDiscussionURL(r?.vanity_url),
              t.nCommentCount,
            ]),
            A = Lt(o),
            E = !(0, S.Y2)() && f,
            v =
              t.live_stream_viewer_count > 0
                ? t.live_stream_viewer_count
                : void 0;
          return (0, e.jsx)("div", {
            className: l().Footer,
            children: (0, e.jsxs)("div", {
              className: l().FooterRightSide,
              children: [
                !!v &&
                  (0, e.jsx)("div", {
                    className: l().TileViewerCount,
                    children: (0, ie.Dq)(v),
                  }),
                (0, e.jsxs)("div", {
                  className: (0, C.A)(l().FooterStat, l().Vote, A),
                  onClick: d,
                  children: [
                    (0, e.jsx)(w.bfp, { className: l().RateIcon }),
                    (0, e.jsx)("span", { children: (0, ie.Dq)(Number(u)) }),
                  ],
                }),
                E &&
                  (0, e.jsx)("div", {
                    className: l().FooterStat,
                    children: (0, e.jsxs)("a", {
                      href: f,
                      className: l().CommentIconCtn,
                      target: "_blank",
                      onClick: m,
                      children: [
                        (0, e.jsx)(w._h6, { className: l().CommentIcon }),
                        (0, e.jsx)("span", { children: (0, ie.Dq)(Number(D)) }),
                      ],
                    }),
                  }),
                (0, e.jsx)(ut, { ...a }),
              ],
            }),
          });
        }
        var Mt = s(19188),
          Te = s(179),
          Ht = s(54963);
        const kt = "emclan",
          Rt = "emgid";
        function ye(a) {
          const { displayLocation: t, fnChangeModalEvent: n } = a,
            [o, i] = I.useState(null),
            [r, d] = (0, Te.QD)(Rt, null),
            [m, u] = (0, Te.QD)(kt, null);
          return (
            (0, Ht.hL)(n, (f, D) => {
              d(f), u($.b.InitFromClanID(D).ConvertTo64BitString());
            }),
            I.useEffect(() => {
              if (r != null && m != null) {
                const f = new $.b(m);
                z.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  f,
                  r,
                  0,
                ).then(i);
              }
            }, [r, m]),
            o
              ? (0, e.jsx)(Mt.N, {
                  appid: o.appid,
                  trackingLocation: t,
                  announcementGID: o.GetAnnouncementGID(),
                  partnerEventStore: z.O3,
                  eventModel: o,
                  showAppHeader: !0,
                  closeModal: () => {
                    i(null), u(null), d(null);
                  },
                })
              : null
          );
        }
        var Ut = s(34736),
          Vt = s(85599),
          Ot = s(47689),
          De = s(8323),
          Wt = s(92264),
          j = s(63585);
        const Ne = 10;
        function Qt(a) {
          const t = (0, T.v0)(),
            n = (0, U.P_)(Ne),
            o = t.GetActiveEventsAt(n) || [],
            [i] = I.useState(new De.lu()),
            r = I.useCallback(
              (d, m) => (0, _e.Y)(z.O3.GetClanEventModel(d), window),
              [],
            );
          return t.GetNumEventsLoaded() == 0
            ? (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_No_Schedule_Yet"),
              })
            : (0, e.jsxs)("div", {
                className: j.EventsScheduleCtn,
                children: [
                  (0, e.jsx)(ye, {
                    displayLocation: xe.Tc.My,
                    fnChangeModalEvent: i,
                  }),
                  (0, e.jsx)(Jt, { rgActiveEvents: o, fnDisplayModalEvent: r }),
                  (0, e.jsx)(Kt, {
                    rgActiveEvents: o,
                    fnDisplayModalEvent: r,
                    rtNow: n,
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)($e.$n, {
                    onClick: (d) =>
                      (0, se.pg)((0, e.jsx)($t, {}), (0, Se.uX)(d)),
                    children: (0, c.we)("#Conference_NeedHelp"),
                  }),
                ],
              });
        }
        function Yt(a) {
          return (0, e.jsx)(Ae, { ...a, children: (0, e.jsx)(Qt, { ...a }) });
        }
        function Kt(a) {
          const { rgActiveEvents: t, rtNow: n } = a,
            i = (0, T.v0)()
              .GetCalendarItemsInTimeRange(n + 1)
              .rgCalendarItems.filter(
                (r) => !t.some((d) => d.GID == r.unique_id),
              )
              .sort((r, d) => r.start_time - d.start_time);
          return i.length == 0
            ? (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_No_More_Schedule"),
              })
            : (0, e.jsxs)("div", {
                className: j.UpcomingEventsCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: j.SectionTitle,
                    children: (0, c.we)("#Conference_ScheduleNext"),
                  }),
                  (0, e.jsx)("div", {
                    className: j.EventSchedCtn,
                    children: i.map((r, d) =>
                      (0, e.jsx)(
                        zt,
                        {
                          bDisplayAsUpNext: d == 0 && t.length >= 1,
                          calendarItem: r,
                          fnDisplayModalEvent: a.fnDisplayModalEvent,
                          rtNow: n,
                        },
                        r.unique_id,
                      ),
                    ),
                  }),
                ],
              });
        }
        function zt(a) {
          const {
              calendarItem: t,
              bDisplayAsUpNext: n,
              fnDisplayModalEvent: o,
              rtNow: i,
            } = a,
            r = z.O3.GetClanEventModel(t.unique_id),
            d = (0, p.sfN)(S.TS.LANGUAGE),
            m = r.GetStartTimeAndDateUnixSeconds(),
            u = (0, ne.JD)(new Date(i * 1e3), new Date(m * 1e3));
          return (0, e.jsxs)("div", {
            className: j.EventItemCtn,
            onClick: () => o(r.GID, r.clanSteamID.GetAccountID()),
            children: [
              (0, e.jsx)("div", {
                className: j.Title,
                children: r.GetNameWithFallback(d),
              }),
              (0, e.jsxs)("div", {
                className: j.SessionTime,
                children: [
                  !u && (0, e.jsx)("div", { children: (0, c.TW)(m, !0) }),
                  (0, e.jsx)("div", {
                    children:
                      n && u
                        ? (0, c.we)(
                            "#Conference_StartInMin",
                            Math.max(1, Math.floor((m - i) / 60)),
                          )
                        : (0, c.we)(
                            "#Conference_StartsAt",
                            (0, Wt.KC)(m, { bForce24HourClock: !1 }),
                          ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: (0, C.A)(j.ReminderContainer, j.OnlyIcon),
                children: (0, e.jsx)(je.j, {
                  eventModel: r,
                  lang: d,
                  bOnlyShowIcon: !0,
                  bExpandLeft: !0,
                  bShowStartTime: !1,
                }),
              }),
            ],
          });
        }
        function Jt(a) {
          const { rgActiveEvents: t, fnDisplayModalEvent: n } = a;
          if (!t || t.length == 0) return null;
          const o = t[0],
            i = (0, p.sfN)(S.TS.LANGUAGE),
            r = Ze.m.ParseEventModelPresenters(o, i);
          return (0, e.jsxs)("div", {
            className: j.ActiveEventCtn,
            children: [
              (0, e.jsxs)("div", {
                className: j.LiveNote,
                children: [
                  (0, e.jsx)("div", { className: j.LiveIcon }),
                  "Live Now!",
                ],
              }),
              (0, e.jsx)("div", {
                className: j.Title,
                children: o.GetNameWithFallback(i),
              }),
              !!r &&
                r.map((d) =>
                  (0, e.jsx)(
                    Ut.fI,
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
                className: j.EventDescription,
                children: o.GetSummaryWithFallback(i),
              }),
              (0, e.jsx)("div", {
                className: j.ReadMoreBtn,
                onClick: () => n(o.GID, o.clanSteamID.GetAccountID()),
                children: (0, c.we)("#EventEmail_Button_ClickForMoreDetails"),
              }),
            ],
          });
        }
        function Xt(a) {
          const { conferenceInfo: t } = a,
            n = (0, T.v0)(),
            o = (0, U.P_)(Ne),
            i = n.GetActiveEventsAt(o) || [],
            [r] = I.useState(new De.lu()),
            d = n
              .GetCalendarItemsInTimeRange(t.rtStartTime - 1, o)
              .rgCalendarItems.filter(
                (m) => i.length == 0 || i[0].GID != m.unique_id,
              )
              .sort((m, u) => m.start_time - u.start_time);
          return d.length == 0
            ? (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_NoPastEvents"),
              })
            : (0, e.jsxs)("div", {
                className: j.PastEventsCtn,
                children: [
                  (0, e.jsx)(ye, {
                    displayLocation: xe.Tc.My,
                    fnChangeModalEvent: r,
                  }),
                  d.map((m) => {
                    const u = z.O3.GetClanEventModel(m.unique_id);
                    return (0, e.jsx)(
                      Tt,
                      {
                        eventModel: u,
                        calendarEvent: m,
                        bSuppressHoverEffects: !1,
                        mode: "wide",
                        fnOnClicked: () =>
                          r.Dispatch(u.GID, u.clanSteamID.GetAccountID()),
                      },
                      "row" + m.unique_id,
                    );
                  }),
                ],
              });
        }
        function Zt(a) {
          return (0, e.jsx)(Ae, { ...a, children: (0, e.jsx)(Xt, { ...a }) });
        }
        function Ae(a) {
          const { conferenceInfo: t } = a,
            n = (0, Ot.m)("WithCalendarStore"),
            [o, i] = (0, I.useState)(!0);
          return (
            (0, I.useEffect)(() => {
              n.token.reason ||
                O.Get()
                  .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
                  .finally(() => {
                    n.token.reason || i(!1);
                  });
            }, [t.rtEndTime, t.strConferenceID, n]),
            o
              ? (0, e.jsx)(Vt.t, {})
              : (0, e.jsx)(e.Fragment, { children: a.children })
          );
        }
        function $t(a) {
          const { closeModal: t } = a;
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
                    className: j.HelpDialogDetailsCtn,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)(
                          "#Conference_NeedHelp_BroadcastChatQ",
                        ),
                      }),
                      (0, e.jsxs)("ul", {
                        className: j.HelpRequirements,
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
                    className: j.HelpDialogDetailsCtn,
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
                    className: j.HelpDialogDetailsCtn,
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
          _t = s(43597);
        const we = 30;
        function qt(a) {
          const { conferenceInfo: t, bShowYouTube: n } = a,
            [o, i] = I.useState(!1),
            d =
              (0, U.P_)(ne.Kp.PerMinute) < t.rtStartTime - we * ne.Kp.PerMinute;
          return (0, e.jsxs)("div", {
            className: h.ConferenceHome,
            children: [
              (0, e.jsx)("div", {
                className: (0, C.A)(h.LeftCol, o ? "Active" : "Hidden"),
                children: (0, e.jsxs)("div", {
                  className: h.AgendaCtn,
                  children: [
                    (0, e.jsx)(Yt, { conferenceInfo: t }),
                    (0, e.jsxs)("div", {
                      className: h.AgendaToggle,
                      onClick: () => {
                        i(!o);
                      },
                      children: [
                        (0, e.jsx)(P.he, {
                          toolTipContent: (0, c.we)("#QAndA_HideSchedule"),
                          children: (0, e.jsx)("div", {
                            className: h.CollapseBtn,
                            children: (0, e.jsx)(w.F2T, { angle: 0 }),
                          }),
                        }),
                        (0, e.jsx)(P.he, {
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
                    (0, e.jsx)(_t.AX, {
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
                    : (0, e.jsx)(en, { conferenceInfo: t }),
                ],
              }),
            ],
          });
        }
        function en(a) {
          const { conferenceInfo: t } = a,
            [n, o] = I.useState(window.innerWidth > 910),
            [i, r] = I.useState(!0),
            d =
              S.TS.COMMUNITY_BASE_URL +
              "broadcast/chatonly/" +
              t.broadcastSteamID.ConvertTo64BitString(),
            m =
              S.TS.COMMUNITY_BASE_URL +
              "questions/" +
              S.UF.VANITY_ID +
              "/view/" +
              t.globalQandASessionID;
          return (0, e.jsxs)("div", {
            className: h.InteractionCtn,
            children: [
              (0, e.jsxs)("div", {
                className: h.TabControlsCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, C.A)(
                      h.InnerChatTab,
                      h.ChatTab,
                      n ? h.Active : "",
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: h.TabTitle,
                        onClick: () => {
                          o(!0), r(!1);
                        },
                        children: (0, c.we)("#Conference_Tab_Chat"),
                      }),
                      (0, e.jsx)(P.he, {
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
                    className: (0, C.A)(
                      h.InnerChatTab,
                      h.QATab,
                      i ? h.Active : "",
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: h.TabTitle,
                        onClick: () => {
                          o(!1), r(!0);
                        },
                        children: (0, c.we)("#Conference_Tab_QandA"),
                      }),
                      (0, e.jsx)(P.he, {
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
                  (0, e.jsx)(P.he, {
                    toolTipContent: (0, c.we)("#QAndA_ChatToggle_ShowBoth"),
                    children: (0, e.jsx)("div", {
                      className: h.ShowBothTabs,
                      onClick: () => {
                        o(!0), r(!0);
                      },
                      children: (0, e.jsx)(w.QQ4, {}),
                    }),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: h.ChatStack,
                children: [
                  !!((n && i) || (!i && !n)) &&
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
                  !!(n && !i) &&
                    (0, e.jsx)(he, { conferenceInfo: t, className: h.ChatCtn }),
                  !!(!n && i) &&
                    (0, e.jsx)(ge.u6, { gidSession: t.globalQandASessionID }),
                ],
              }),
            ],
          });
        }
        function tn(a) {
          const { conferenceInfo: t } = a;
          if (!t.faqAboutPage)
            return (0, e.jsx)("div", {
              children: (0, c.we)("#Conference_NoAbout"),
            });
          const { title: n, content: o, timestamp: i } = t.faqAboutPage;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { className: h.AboutTitle, children: n }),
              (0, e.jsx)(Xe.u, { text: o, bShowErrorInfo: !1, version: "0" }),
            ],
          });
        }
        function nn(a) {
          const { conferenceInfo: t } = a;
          return (0, e.jsx)(Zt, { conferenceInfo: t });
        }
        var W = s(61937);
        function an(a) {
          const { strVanity: t } = a,
            n = L.Get().GetConferenceInfo(t);
          return n
            ? (0, e.jsx)(F.tH, {
                children: (0, e.jsx)("div", {
                  className: W.ConferencePageCtn,
                  children: (0, e.jsx)(on, { conferenceInfo: n }),
                }),
              })
            : (0, e.jsx)("div", { children: (0, c.we)("#Conference_Invalid") });
        }
        function on(a) {
          const { conferenceInfo: t } = a,
            n = (r) =>
              window.sessionStorage.setItem(
                "conferenceCurrentTab",
                `?tab=${r.key}`,
              ),
            o = [],
            i = (0, U.f1)();
          return (
            i < t.rtEndTime &&
              o.push({
                name: (0, c.we)("#Conference_tab_Home"),
                key: "live",
                contents: (0, e.jsx)(F.tH, {
                  children: (0, e.jsx)(qt, {
                    bShowYouTube: !!t.youtubeVideoID,
                    conferenceInfo: t,
                  }),
                }),
                onClick: n,
              }),
            o.push({
              name: (0, c.we)("#Conference_tab_Past"),
              key: "past",
              contents: (0, e.jsxs)(F.tH, {
                children: [
                  (0, e.jsx)(nn, { conferenceInfo: t }),
                  !t.youtubeVideoID &&
                    i < t.rtEndTime &&
                    (0, e.jsx)(Ce, { conferenceInfo: t }),
                ],
              }),
              onClick: n,
            }),
            o.push({
              name: (0, c.we)("#Conference_tab_Info"),
              key: "about",
              contents: (0, e.jsxs)(F.tH, {
                children: [
                  (0, e.jsx)(tn, { conferenceInfo: t }),
                  !t.youtubeVideoID &&
                    i < t.rtEndTime &&
                    (0, e.jsx)(Ce, { conferenceInfo: t }),
                ],
              }),
              onClick: n,
            }),
            o.push({
              name: "(VO/Internal) Debug",
              key: "debug",
              hidden: !0,
              contents: (0, e.jsx)(F.tH, {
                children: (0, e.jsx)(Je, { conferenceInfo: t }),
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
                (0, e.jsx)(Ue.V, { tabs: o }),
              ],
            })
          );
        }
        var sn = s(90783);
        const Ge = {
          LandingPage: (a) => `/(conference|steamworksvirtualconference)/${a}`,
        };
        function ln(a) {
          return (0, e.jsxs)(K.dO, {
            children: [
              (0, e.jsx)(K.qh, {
                path: Ge.LandingPage(":vanity_str"),
                render: (t) =>
                  (0, e.jsx)(ke.X, {
                    config: {
                      "conference-root": () => {
                        const { vanity_str: n } = t.match.params;
                        return (0, e.jsx)(an, {
                          strVanity: n.toLocaleLowerCase(),
                        });
                      },
                    },
                  }),
              }),
              (0, e.jsx)(K.qh, { component: sn.a }),
            ],
          });
        }
        const rn = ln;
      },
      88619: (N) => {
        N.exports = { BroadcastChatCtn: "_28b1vPJH7sip9Uh_p3OJvD" };
      },
      63585: (N) => {
        N.exports = {
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
      44104: (N) => {
        N.exports = {
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
      61937: (N) => {
        N.exports = {
          narrowWidth: "500px",
          ConferencePageCtn: "oP_SPwwzov5nQN2TQUAEf",
          ConferenceContentsCtn: "_1HPPRdXNo8sgT-dXQ9h-5l",
          ConferenceHeaderCtn: "_1AbLqPiq2KJuEV09TbddQW",
          LogoImage: "_3i2i50OjRZCY5qTtlLvN7G",
          LogoImageMobile: "_3iVf9n6tpBlwoSdiOW3Jhf",
          ConferenceDateRange: "_2FSEt04eUDUO8y1rLtlEat",
        };
      },
      72978: (N) => {
        N.exports = {
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
      70758: (N) => {
        N.exports = {
          YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
          YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
        };
      },
    },
  ]);
})();
