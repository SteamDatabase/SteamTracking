/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [46662],
    {
      28630: (P, Re, h) => {
        "use strict";
        h.r(Re), h.d(Re, { default: () => wm });
        var e = h(7850),
          g = h(90626),
          Y = h(58732),
          G = h(75372),
          Se = h(53071),
          T = h(99412),
          de = h(41735),
          K = h.n(de),
          w = h(75844),
          R = h(17083),
          A = h(90825),
          H = h(48421),
          ee = h(38884),
          X = h(76559),
          Q = h(813),
          ie = h(45812),
          _ = h(19316),
          Le = h(70747),
          F = h(95695),
          x = h.n(F),
          s = h(18210),
          he = h(5065),
          f = h(3166),
          y = h(88003),
          te = h(53107),
          ae = h(7582),
          pe = h(77495),
          ge = h(84676),
          _e = h(43308),
          B = h(2801),
          N = h(85599),
          we = h(22880),
          He = h(92264),
          ne = h(36174),
          I = h(92451),
          V = h.n(I);
        const se = { include_basic_info: !0 };
        function Ee(a) {
          const { clanInfo: t, closeModal: n } = a,
            [o] = (0, ge.t7)(t.appid, se),
            [i, l] = g.useState(!0),
            [r, c] = g.useState(!0),
            d = 1063339200,
            u = ae.HD.GetTimeNowWithOverride(),
            [p, m] = g.useState(u - ne.Kp.PerMonth),
            [S, v] = g.useState(u),
            [E, D] = g.useState(-1),
            C = E >= 0;
          return (0, e.jsx)(B.o0, {
            strTitle: (0, s.we)("#EventDashboard_Stats_title"),
            strDescription: (0, s.we)("#EventDashboard_Stats_desc"),
            closeModal: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: C,
            onOK: () =>
              Be(t, o, i ? d : p, r ? Number.MAX_SAFE_INTEGER : S, D).then(() =>
                n(),
              ),
            children:
              t.appid && !o
                ? (0, e.jsx)(N.t, {
                    string: (0, s.we)("#Loading"),
                    position: "center",
                    size: "medium",
                  })
                : (0, e.jsxs)("div", {
                    className: V().DialogCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: "DialogLabel",
                        children: (0, s.we)(
                          "#EventDashboard_Stats_Oldest_Title",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: "_DialogInputContainer _DialogLayout",
                        children: [
                          (0, e.jsx)(_.Yh, {
                            label: (0, s.we)("#EventDashboard_Stats_Oldest"),
                            onChange: l,
                            checked: i,
                            disabled: C,
                          }),
                          !i &&
                            (0, e.jsxs)("div", {
                              children: [
                                (0, s.we)(
                                  "#EventDashboard_Stats_Oldest_Override",
                                ),
                                (0, e.jsx)(_e.K, {
                                  nEarliestTime: d,
                                  nLatestTime: r ? void 0 : S,
                                  bShowTimeZone: !0,
                                  fnGetTimeToUpdate: () => p,
                                  fnSetTimeToUpdate: m,
                                  disabled: C,
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: "DialogLabel",
                        children: (0, s.we)(
                          "#EventDashboard_Stats_Newest_Title",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: "_DialogInputContainer _DialogLayout",
                        children: [
                          (0, e.jsx)(_.Yh, {
                            label: (0, s.we)("#EventDashboard_Stats_Newest"),
                            onChange: c,
                            checked: r,
                            disabled: C,
                          }),
                          !r &&
                            (0, e.jsxs)("div", {
                              children: [
                                (0, s.we)(
                                  "#EventDashboard_Stats_Newest_Override",
                                ),
                                (0, e.jsx)(_e.K, {
                                  nEarliestTime: i ? d : p,
                                  bShowTimeZone: !0,
                                  fnGetTimeToUpdate: () => S,
                                  fnSetTimeToUpdate: v,
                                  disabled: C,
                                }),
                              ],
                            }),
                        ],
                      }),
                      C &&
                        (0, e.jsx)(N.t, {
                          position: "center",
                          size: "medium",
                          string: (0, s.we)(
                            "#EventDashboard_Stats_Progress",
                            E,
                          ),
                        }),
                    ],
                  }),
          });
        }
        async function Be(a, t, n, o, i) {
          const l = new Array(),
            r = K().CancelToken.source();
          let c = 0;
          i(c);
          const d = 100;
          let u = 0,
            p,
            m = new Array();
          const S = (0, T.sfN)(f.TS.LANGUAGE);
          do
            if (
              ((u += 1),
              (m = await pe.O3.LoadAdjacentPartnerEvents(
                p,
                a.clanSteamID,
                void 0,
                0,
                d,
                { rtime_oldestevent: n, only_summaries: !0 },
                r,
              )),
              m?.length > 0)
            ) {
              (c += m.length), i(c), (p = m[m.length - 1].GID);
              const v = m
                .filter((E) => E.startTime <= o && E.BIsVisibleEvent())
                .map((E) => E.GID);
              v.length > 0 &&
                (await ie.Uq.LoadStatsForEvents(a.clanSteamID, v, r),
                (c += v.length),
                i(c),
                v.forEach((E) => {
                  const D = ie.Uq.GetStatsFor(a.clanSteamID, E),
                    C = pe.O3.GetClanEventModel(E),
                    M = C.GetStartTimeAndDateUnixSeconds(),
                    z = C.GetEndTimeAndDateUnixSeconds();
                  l.push({
                    appid: a.appid,
                    app_name: t?.GetName() || "",
                    event_name: C.GetNameWithFallback(S),
                    event_type: C.GetEventTypeAsString(),
                    event_start_date: (0, s.TW)(M) + " @ " + (0, He.KC)(M),
                    event_end_date: (0, s.TW)(z) + " @ " + (0, He.KC)(z),
                    ...D.m_stats,
                    event_gid: "'" + E,
                  });
                }));
            }
          while (m.length == d && u < 100);
          return (
            we.g.WriteCSVToFile(
              l,
              "event_stats_" +
                a.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                ".csv",
            ),
            !0
          );
        }
        var ue = h(82734),
          W = h(11243),
          go = h(179),
          So = h(61322);
        function Yn(a) {
          const {
              summary: t,
              clanSteamID: n,
              bEventIsInModerationQueue: o,
              bIsAllowedInLibrary: i,
              bCompact: l,
            } = a,
            [r] = (0, go.QD)("expanded", !1),
            [c, d] = g.useState(!!r || l),
            u = Q.ac.GetClanInfoByClanAccountID(n.GetAccountID());
          return (0, e.jsx)(So.a, {
            summary: t,
            bCompact: l,
            bExpanded: c,
            bIsAllowedInLibrary: i,
            bEventIsInModerationQueue: o,
            header: l
              ? void 0
              : (0, e.jsxs)("div", {
                  className: he.StatsCtnTitle,
                  children: [
                    (0, e.jsxs)("div", {
                      className: he.StatTitle,
                      children: [
                        (0, s.we)("#EventDashBoard_SummaryStats_Title"),
                        (0, e.jsx)(W.o, {
                          tooltip: (0, s.we)(
                            "#EventDashBoard_SummaryStats_Desc",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: he.StatsActionRow,
                      children: [
                        (0, e.jsx)(_.$n, {
                          onClick: (p) =>
                            (0, te.EP)(
                              p,
                              `${f.TS.PARTNER_BASE_URL}/doc/marketing/event_tools/stats`,
                            ),
                          children: (0, s.we)(
                            "#EventDashBoard_SummaryStats_AboutStats",
                          ),
                        }),
                        (0, e.jsx)(_.$n, {
                          onClick: (p) =>
                            (0, y.pg)(
                              (0, e.jsx)(Ee, { clanInfo: u }),
                              (0, ue.uX)(p),
                            ),
                          children: (0, s.we)(
                            "#EventDashBoard_SummaryStats_Export",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: he.StatsActionRow,
                      children: (0, e.jsx)(_.$n, {
                        onClick: () => d(!c),
                        children: (0, s.we)(
                          "#EventDashBoard_SummaryStats_Details",
                        ),
                      }),
                    }),
                  ],
                }),
          });
        }
        var Eo = h(96378),
          oe = h(85143),
          xo = h(81944),
          Wt = h(71742),
          ye = h(34592),
          Na = h(8323),
          j = h(36707),
          J = h(54963),
          Ma = h(36943),
          fo = h(65267),
          Jn = h(51648),
          Ze = h(18057),
          Kn = h(12932),
          Qt = h(71684),
          nn = h(31467),
          De = h.n(nn);
        const jo = (a) => {
            const { closeModal: t } = a,
              n = (0, fo.d)(f.UF.CLANACCOUNTID);
            return (0, e.jsx)(B.o0, {
              strTitle: "Publishing Audit History",
              bAlertDialog: !0,
              onOK: t,
              onCancel: t,
              className: "auditContents",
              strDescription:
                "Here are the publishing audit history. Recorded starting from mid-June 2021",
              children:
                n == null
                  ? (0, e.jsx)(N.t, {
                      string: (0, s.we)("#Loading"),
                      position: "center",
                      size: "medium",
                    })
                  : n.length == 0
                    ? (0, e.jsx)("div", {
                        children: "No Publishing History available",
                      })
                    : n.map((o) =>
                        (0, e.jsx)(bo, { record: o }, o.clan_event_gid),
                      ),
            });
          },
          bo = (a) => {
            const { record: t } = a,
              n = g.useMemo(() => X.b.InitFromClanID(f.UF.CLANACCOUNTID), []);
            return (0, e.jsxs)("div", {
              className: nn.AuditInfoItem,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    "Clan Event GID:",
                    (0, e.jsx)("a", {
                      href: `${f.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t.clan_event_gid}`,
                      target: "_blank",
                      children: t.clan_event_gid,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: ["Type: ", (0, Qt.rG)(t.event_type)],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    "Publish Time: ",
                    (0, e.jsx)(Ze.K4, {
                      dateAndTime: t.publish_time,
                      bSingleLine: !0,
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  children: (0, e.jsx)(Jn.B, {
                    accountID: t.publish_account_id,
                    locToken: "#EventDashbard_PublishingAccount",
                  }),
                }),
                (0, e.jsxs)("div", {
                  children: ["tags: ", t.tags?.join(", ")],
                }),
                (0, e.jsx)("div", {
                  className: nn.AuditItemStatsCtn,
                  children: (0, e.jsx)(Kn.qx, {
                    title: "Show Event Stats",
                    bStartMinimized: !0,
                    children: (0, e.jsx)(Co, { clanSteamID: n, record: t }),
                  }),
                }),
                (0, e.jsx)("hr", {}),
              ],
            });
          };
        function Co(a) {
          const { clanSteamID: t, record: n } = a,
            o = (0, ie.Cl)(t, n.clan_event_gid);
          return (0, e.jsxs)("div", {
            children: [
              o == null &&
                (0, e.jsx)(N.t, {
                  string: "loading",
                  position: "center",
                  size: "medium",
                }),
              o == null &&
                (0, e.jsx)("div", { children: "Failed to load events stats" }),
              !!o &&
                (0, e.jsx)(Yn, { summary: o, clanSteamID: t, bCompact: !0 }),
            ],
          });
        }
        var Nt = h(26589),
          We = h(25817),
          U = h(14947),
          ot = h(26145),
          Zn = h(56412),
          qn = h(26251),
          xe = h(71421),
          wo = h(20398),
          b = h(55884),
          Do = Object.defineProperty,
          yo = Object.getOwnPropertyDescriptor,
          sn = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? yo(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && Do(t, n, i), i;
          };
        const To = "title",
          Io = "subtitle",
          Ao = "summary",
          Go = "body",
          Xn = "email_headline_",
          $n = "email_body_",
          Lo = "sale_section_label_",
          es = "sale_section_label_id_",
          ts = "sale_section_subtitle_id_",
          as = "sale_section_text_id_",
          ns = "email_subject",
          ss = "sale_tab_name_",
          is = "sale_facet_name_",
          os = "sale_facetvalue_name_",
          ls = "sale_facetvalue_subtitle_",
          rs = "sale_reservation_bbcode_",
          ds = "sale_reservation_outofstock_",
          cs = "sale_reservation_delivery_",
          on = "sale_reservation_product_",
          No = "sale_reservation_variation_",
          us = "sale_reservatin_callout_",
          hs = "sale_white_supplies_last_bbcode_",
          ms = "sale_section_desc_",
          ps = "sale_section_title_desc_",
          _s = "broadcast_custom_title",
          vs = "question_",
          gs = "answer_",
          Ss = "badgename_",
          Es = "badgeinitial_",
          xs = "badgeprogress_",
          fs = "badgemax_",
          js = "quest_close_",
          bs = "quest_open_",
          Cs = "discoqueue_desc_",
          ws = "socialshare_header_",
          Ds = "socialshare_title_",
          ys = "socialshare_desc_",
          Ts = "socialshare_image_",
          Is = "socialshare_imagealttext_",
          As = "rewardshelf_itemdef_",
          Gs = "claimitem_button_",
          ln = "disclaimer_name_",
          Ls = "medialayout_item_",
          Ns = "mediacontent_title_",
          Ms = "mediacontent_sutitle_",
          Bs = "mediacontent_desc_",
          Yt = "meetsteam_",
          Os = Yt + "title_",
          Ba = Yt + "desc_",
          Mo = Yt + "faq_",
          Bo = Yt + "ia_",
          rn = Yt + "break_",
          Jt = "techspecblock_",
          Ps = "_name_",
          Rs = "_desc_",
          dn = "submenu_",
          ks = "mediacontent_alt_text_",
          Fs = "mediacontent_title_alt_text_",
          cn = "userpoll_",
          un = "userpoll_option_",
          hn = "tabs_jumplist_",
          Us = "tabs_tagfilter_name_";
        function zs(a, t, n, o) {
          let i = new wo.G();
          if (t) {
            let r = a.GetEventModel();
            for (let c = T.Bhc; c < T.bP9; ++c)
              (a.BHasLanguageTitle(c) || c == T.Bhc) &&
                i.SetLocalization("title", c, a.GetName(c)),
                (r.BHasSubTitle(c) || c == T.Bhc) &&
                  i.SetLocalization("subtitle", c, a.GetSubTitle(c)),
                (a.BHasLanguageDescription(c) || c == T.Bhc) &&
                  i.SetLocalization("body", c, a.GetDescription(c)),
                (r.BHasSummary(c) || c == T.Bhc) &&
                  i.SetLocalization("summary", c, a.GetSummary(c)),
                a.GetEventModel().jsondata.meet_steam_groups &&
                  a.GetEventModel().jsondata.meet_steam_groups.forEach((d) => {
                    d.localized_session_title &&
                      s.NT.Get(d.localized_session_title, c) &&
                      i.SetLocalization(
                        Os + d.group_id,
                        c,
                        s.NT.Get(d.localized_session_title, c),
                      ),
                      d.localized_session_description &&
                        s.NT.Get(d.localized_session_description, c) &&
                        i.SetLocalization(
                          Ba + d.group_id,
                          c,
                          s.NT.Get(d.localized_session_description, c),
                        ),
                      d.localized_intended_audience &&
                        s.NT.Get(d.localized_intended_audience, c) &&
                        i.SetLocalization(
                          Ba + d.group_id,
                          c,
                          s.NT.Get(d.localized_intended_audience, c),
                        ),
                      d.localized_sesssion_faq &&
                        s.NT.Get(d.localized_sesssion_faq, c) &&
                        i.SetLocalization(
                          Ba + d.group_id,
                          c,
                          s.NT.Get(d.localized_sesssion_faq, c),
                        );
                  }),
                a.GetEventModel().jsondata.meet_steam_schedules &&
                  a
                    .GetEventModel()
                    .jsondata.meet_steam_schedules.forEach((d) => {
                      d?.session_breaks?.forEach((u) => {
                        u.localized_break_description &&
                          s.NT.Get(u.localized_break_description, c) &&
                          i.SetLocalization(
                            rn + d.schedule_id + "_" + u.break_id,
                            c,
                            s.NT.Get(u.localized_break_description, c),
                          );
                      });
                    });
          }
          if (n && a.BHasEmailEnabled()) {
            const r = a.GetEmailSettings();
            if (f.UF.IS_VALVE_GROUP) {
              let c = new ot.WQ(a.GetEmailSettings());
              for (let d = T.Bhc; d < T.bP9; ++d)
                c.BHasLocalizedSubject(d) &&
                  i.SetLocalization(ns, d, c.GetLocalizedSubject(d));
            }
            r.sections.forEach((c, d) => {
              let u = new ot.JW(c);
              for (let p = T.Bhc; p < T.bP9; ++p)
                u.BHasHeadlineInLanguage(p) &&
                  i.SetLocalization(Xn + d, p, u.GetHeadline(p)),
                  u.BHasBodyInLanguage(p) &&
                    i.SetLocalization($n + d, p, u.GetBody(p));
            });
          }
          const l = a.GetEventModel().jsondata;
          if (
            l?.bBroadcastEnabled &&
            l?.localized_broadcast_title?.length > 0
          ) {
            for (let r = T.Bhc; r < T.bP9; ++r)
              if (s.NT.Get(l.localized_broadcast_title, r)) {
                const c = l.localized_broadcast_title[r];
                i.SetLocalization(_s, r, c);
              }
          }
          if (
            (t &&
              l.user_polls?.length > 0 &&
              l.user_polls.forEach((r) => {
                for (let c = T.Bhc; c < T.bP9; ++c)
                  r.localized_poll_description &&
                    s.NT.Get(r.localized_poll_description, c) &&
                    i.SetLocalization(
                      cn + r.poll_id,
                      c,
                      r.localized_poll_description[c],
                    ),
                    r?.options?.forEach((d) => {
                      d.localized_option &&
                        s.NT.Get(d.localized_option, c) &&
                        i.SetLocalization(
                          un + d.option_id,
                          c,
                          d.localized_option[c],
                        );
                    });
              }),
            o && a.BHasSaleEnabled())
          ) {
            if (l?.sale_presenters?.length)
              for (let r = T.Bhc; r < T.bP9; ++r)
                l.sale_presenters.forEach((c) => {
                  if (s.NT.Get(c.localized_presenter_name, r)) {
                    const d = c.localized_presenter_name[r];
                    i.SetLocalization(ln + c.unique_id, r, d);
                  }
                });
            l.sale_sub_menu?.menu_items?.length > 0 &&
              l.sale_sub_menu.menu_items
                .filter((r) => r.localized_sub_menu_name?.length > 0)
                .map((r) => {
                  for (let c = T.Bhc; c < T.bP9; ++c)
                    r.localized_sub_menu_name &&
                      s.NT.Get(r.localized_sub_menu_name, c) &&
                      i.SetLocalization(
                        dn + r.unique_id,
                        c,
                        r.localized_sub_menu_name[c],
                      );
                }),
              a
                .GetSaleSections()
                .filter((r) => !r.disable_localization)
                .forEach((r) => {
                  const c = a.GetSaleSectionIndexByID(r.unique_id, !1);
                  for (let d = T.Bhc; d < T.bP9; ++d) {
                    if (
                      (a.BHasSaleSectionLabelLocalization(d, c) &&
                        i.SetLocalization(
                          es + r.unique_id,
                          d,
                          r.localized_label[d],
                        ),
                      a.BHasSaleSectionSubtitleLocalization(d, c) &&
                        i.SetLocalization(
                          ts + r.unique_id,
                          d,
                          r.localized_subtitle[d],
                        ),
                      a.BHasSaleSectionTextLocalizationForLang(d, c) &&
                        i.SetLocalization(
                          as + r.unique_id,
                          d,
                          r.text_section_contents[d],
                        ),
                      a.BHasSaleSectionDescriptionBBCode(d, c) &&
                        i.SetLocalization(
                          ms + r.unique_id,
                          d,
                          r.localized_description[d],
                        ),
                      a.BHasSaleSectionInnerTitle(d, c) &&
                        i.SetLocalization(
                          ps + r.unique_id,
                          d,
                          r.localized_title[d],
                        ),
                      r.section_type === "tabs" && r.tabs)
                    )
                      for (let u of r.tabs)
                        a.BHasSaleSectionTabName(d, u) &&
                          i.SetLocalization(
                            ss + r.unique_id + "_" + u.unique_id,
                            d,
                            u.localized_label[d],
                          ),
                          u.tab_jump_list &&
                            u.tab_jump_list.menu_items &&
                            u.tab_jump_list.menu_items.length > 0 &&
                            u.tab_jump_list.menu_items
                              .filter(
                                (p) => p.localized_sub_menu_name?.length > 0,
                              )
                              .map((p) => {
                                for (let m = T.Bhc; m < T.bP9; ++m)
                                  p.localized_sub_menu_name &&
                                    s.NT.Get(p.localized_sub_menu_name, m) &&
                                    i.SetLocalization(
                                      hn + u.unique_id + "_" + p.unique_id,
                                      m,
                                      p.localized_sub_menu_name[m],
                                    );
                              }),
                          Hs(
                            i,
                            d,
                            Us + u.unique_id + "_",
                            u.tab_tag_filter?.rgNodes,
                          );
                    if (
                      (r.enable_faceted_browsing &&
                        (r.facets.forEach((u) => {
                          a.BHasSaleSectionFacetName(d, u) &&
                            i.SetLocalization(
                              is + r.unique_id + "_" + u.unique_id,
                              d,
                              u.name[d],
                            );
                        }),
                        r.facets.forEach((u) => {
                          u.facetValues.forEach((p) => {
                            a.BHasSaleSectionFacetValueName(d, p) &&
                              i.SetLocalization(
                                os +
                                  r.unique_id +
                                  "_" +
                                  u.unique_id +
                                  "_" +
                                  p.unique_id,
                                d,
                                p.name[d],
                              ),
                              a.BHasSaleSectionFacetValueSubtitle(d, p) &&
                                i.SetLocalization(
                                  ls +
                                    r.unique_id +
                                    "_" +
                                    u.unique_id +
                                    "_" +
                                    p.unique_id,
                                  d,
                                  p.subtitle[d],
                                );
                          });
                        })),
                      r.section_type == "vo_internal" &&
                        r.internal_section_data?.internal_type ==
                          "reservation_widget" &&
                        (r.internal_section_data.reservation_options?.length >
                          0 ||
                          r.internal_section_data.reservation_layout) &&
                        (r.internal_section_data.reservation_options?.forEach(
                          (u) => {
                            u.localized_reservation_desc &&
                              s.NT.Get(u.localized_reservation_desc, d) &&
                              i.SetLocalization(
                                rs + r.unique_id + "_" + u.unique_id,
                                d,
                                u.localized_reservation_desc[d],
                              ),
                              u.callout &&
                                u.callout.localized_callout &&
                                s.NT.Get(u.callout.localized_callout, d) &&
                                i.SetLocalization(
                                  us + r.unique_id + "_" + u.unique_id,
                                  d,
                                  u.callout.localized_callout[d],
                                ),
                              u.localized_out_of_stock_override &&
                                s.NT.Get(
                                  u.localized_out_of_stock_override,
                                  d,
                                ) &&
                                i.SetLocalization(
                                  ds + r.unique_id + "_" + u.unique_id,
                                  d,
                                  u.localized_out_of_stock_override[d],
                                ),
                              u.localized_delivery_override_desc &&
                                s.NT.Get(
                                  u.localized_delivery_override_desc,
                                  d,
                                ) &&
                                i.SetLocalization(
                                  cs + r.unique_id + "_" + u.unique_id,
                                  d,
                                  u.localized_delivery_override_desc[d],
                                );
                          },
                        ),
                        r.internal_section_data.reservation_layout?.product_configs?.forEach(
                          (u) => {
                            u.localized_product_config_title &&
                              s.NT.Get(u.localized_product_config_title, d) &&
                              i.SetLocalization(
                                on + r.unique_id + "_" + u.unique_id,
                                d,
                                u.localized_product_config_title[d],
                              ),
                              u.variations?.forEach((p) => {
                                p.localized_variation_name &&
                                  s.NT.Get(p.localized_variation_name, d) &&
                                  i.SetLocalization(
                                    No +
                                      r.unique_id +
                                      "_" +
                                      u.unique_id +
                                      "_" +
                                      p.unique_id,
                                    d,
                                    p.localized_variation_name[d],
                                  );
                              });
                          },
                        )),
                      r.section_type == "vo_internal" &&
                        r.internal_section_data?.internal_type ==
                          "while_supplies_last" &&
                        r.internal_section_data.while_supplies_last_option
                          ?.length > 0 &&
                        r.internal_section_data.while_supplies_last_option.forEach(
                          (u) => {
                            u.localized_supply_desc &&
                              s.NT.Get(u.localized_supply_desc, d) &&
                              i.SetLocalization(
                                hs + r.unique_id + "_" + u.unique_id,
                                d,
                                u.localized_supply_desc[d],
                              );
                          },
                        ),
                      (r.section_type == "quiz" ||
                        r.section_type == "template_faq") &&
                        r.quiz?.questions?.length > 0 &&
                        r.quiz?.questions.forEach((u) => {
                          u.localized_question &&
                            s.NT.Get(u.localized_question, d) &&
                            i.SetLocalization(
                              vs + r.unique_id + "_" + u.unique_id,
                              d,
                              u.localized_question[d],
                            ),
                            u?.answers &&
                              u.answers.forEach((p) => {
                                p.localized_answer &&
                                  s.NT.Get(p.localized_answer, d) &&
                                  i.SetLocalization(
                                    gs + r.unique_id + "_" + p.unique_id,
                                    d,
                                    p.localized_answer[d],
                                  );
                              });
                        }),
                      r.section_type == "template_techspec" &&
                        r.tech_specs?.tech_spec_block_list?.length > 0 &&
                        r.tech_specs?.tech_spec_block_list.forEach((u) => {
                          u.localized_block_title &&
                            s.NT.Get(u.localized_block_title, d) &&
                            i.SetLocalization(
                              Jt + r.unique_id + "_" + u.unique_id,
                              d,
                              u.localized_block_title[d],
                            ),
                            u?.spec_list &&
                              u.spec_list.forEach((p) => {
                                if (
                                  p.localized_spec_name &&
                                  s.NT.Get(p.localized_spec_name, d)
                                ) {
                                  const m = Jt + r.unique_id + Ps + p.unique_id;
                                  i.SetLocalization(
                                    m,
                                    d,
                                    p.localized_spec_name[d],
                                  );
                                }
                                if (
                                  p.localized_spec_description &&
                                  s.NT.Get(p.localized_spec_description, d)
                                ) {
                                  const m = Jt + r.unique_id + Rs + p.unique_id;
                                  i.SetLocalization(
                                    m,
                                    d,
                                    p.localized_spec_description[d].replace(
                                      /\n/g,
                                      "<br />",
                                    ),
                                  );
                                }
                              });
                        }),
                      r.section_type == "badge_progress" && r.badge_progress)
                    ) {
                      const u = r.badge_progress;
                      u.localized_name &&
                        s.NT.Get(u.localized_name, d) &&
                        i.SetLocalization(
                          Ss + r.unique_id,
                          d,
                          u.localized_name[d],
                        ),
                        u.localized_initial_description &&
                          s.NT.Get(u.localized_initial_description, d) &&
                          i.SetLocalization(
                            Es + r.unique_id,
                            d,
                            u.localized_initial_description[d],
                          ),
                        u.localized_progress_description &&
                          s.NT.Get(u.localized_progress_description, d) &&
                          i.SetLocalization(
                            xs + r.unique_id,
                            d,
                            u.localized_progress_description[d],
                          ),
                        u.localized_maxtier_description &&
                          s.NT.Get(u.localized_maxtier_description, d) &&
                          i.SetLocalization(
                            fs + r.unique_id,
                            d,
                            u.localized_maxtier_description[d],
                          );
                    }
                    r.section_type == "quest" &&
                      r.quest?.door_info?.length > 0 &&
                      r.quest.door_info.forEach((u) => {
                        u.localized_open_door_description &&
                          s.NT.Get(u.localized_open_door_description, d) &&
                          i.SetLocalization(
                            js + r.unique_id + "_" + u.unique_id,
                            d,
                            u.localized_open_door_description[d],
                          ),
                          u.localized_closed_door_description &&
                            s.NT.Get(u.localized_closed_door_description, d) &&
                            i.SetLocalization(
                              bs + r.unique_id + "_" + u.unique_id,
                              d,
                              u.localized_closed_door_description[d],
                            );
                      }),
                      r.section_type == "rewards" &&
                        r.rewards?.reward_items?.length > 0 &&
                        r.rewards.reward_items.forEach((u) => {
                          u.localized_reward_description &&
                            s.NT.Get(u.localized_reward_description, d) &&
                            i.SetLocalization(
                              As +
                                r.unique_id +
                                "_" +
                                u.virtual_item_reward_def_id,
                              d,
                              u.localized_reward_description[d],
                            );
                        }),
                      r.section_type == "claim_item" &&
                        r.claim_item_section_data?.localized_claim_button
                          ?.length > 0 &&
                        r.claim_item_section_data.localized_claim_button &&
                        s.NT.Get(
                          r.claim_item_section_data.localized_claim_button,
                          d,
                        ) &&
                        i.SetLocalization(
                          Gs + r.unique_id,
                          d,
                          r.claim_item_section_data.localized_claim_button[d],
                        ),
                      r.section_type == "discoveryqueue" &&
                        r.discovery_queue_localized_desc &&
                        s.NT.Get(r.discovery_queue_localized_desc, d) &&
                        i.SetLocalization(
                          Cs + r.unique_id,
                          d,
                          r.discovery_queue_localized_desc[d],
                        ),
                      r.section_type == "social_share" &&
                        r.social_share.content_options.forEach((u) => {
                          const p = u.localized_option_fields;
                          p.localized_header &&
                            s.NT.Get(p.localized_header, d) &&
                            i.SetLocalization(
                              ws + r.unique_id + "_" + u.unique_id,
                              d,
                              p.localized_header[d],
                            ),
                            p.title &&
                              s.NT.Get(p.title, d) &&
                              i.SetLocalization(
                                Ds + r.unique_id + "_" + u.unique_id,
                                d,
                                p.title[d],
                              ),
                            p.description &&
                              s.NT.Get(p.description, d) &&
                              i.SetLocalization(
                                ys + r.unique_id + "_" + u.unique_id,
                                d,
                                p.description[d],
                              ),
                            p.image &&
                              s.NT.Get(p.image, d) &&
                              i.SetLocalization(
                                Ts + r.unique_id + "_" + u.unique_id,
                                d,
                                p.image[d],
                              ),
                            p.twitter_alt_text &&
                              s.NT.Get(p.twitter_alt_text, d) &&
                              i.SetLocalization(
                                Is + r.unique_id + "_" + u.unique_id,
                                d,
                                p.twitter_alt_text[d],
                              );
                        }),
                      r.section_type == "media_layout" &&
                        r.media_layout.media_content.forEach((u, p) => {
                          const m = u.localized_media_desc;
                          m &&
                            s.NT.Get(m, d) &&
                            i.SetLocalization(
                              Ls + r.unique_id + "_" + p,
                              d,
                              m[d],
                            );
                        }),
                      r.section_type == "template_media_content" &&
                        r.media_container?.media_rows?.forEach((u, p) => {
                          u?.media_columns?.forEach((m) => {
                            Kt(i, d, r.unique_id + "_" + m.unique_id, m),
                              m.mobile_content_varient &&
                                Kt(
                                  i,
                                  d,
                                  r.unique_id + "_" + m.unique_id + "_mobile",
                                  m.mobile_content_varient,
                                ),
                              m.tablet_content_varient &&
                                Kt(
                                  i,
                                  d,
                                  r.unique_id + "_" + m.unique_id + "_tablet",
                                  m.tablet_content_varient,
                                );
                          });
                        }),
                      r.section_type == "template_media_overlay" &&
                        r.media_overlay &&
                        (Kt(i, d, r.unique_id + "_overlay", r.media_overlay),
                        r.media_overlay_mobile_content_varient &&
                          Kt(
                            i,
                            d,
                            r.unique_id + "_overlay_mobile",
                            r.media_overlay_mobile_content_varient,
                          ),
                        r.media_overlay_tablet_content_varient &&
                          Kt(
                            i,
                            d,
                            r.unique_id + "_overlay_tablet",
                            r.media_overlay_tablet_content_varient,
                          ));
                  }
                });
          }
          return i;
        }
        function Kt(a, t, n, o) {
          let i = o.localized_media_title;
          i && s.NT.Get(i, t) && a.SetLocalization(Ns + n, t, i[t]),
            (i = o.localized_media_subtitle),
            i && s.NT.Get(i, t) && a.SetLocalization(Ms + n, t, i[t]),
            (i = o.localized_media_description),
            i && s.NT.Get(i, t) && a.SetLocalization(Bs + n, t, i[t]),
            (i = o.localized_alt_text),
            i && s.NT.Get(i, t) && a.SetLocalization(ks + n, t, i[t]),
            (i = o.title_media?.localized_alt_text),
            i && s.NT.Get(i, t) && a.SetLocalization(Fs + n, t, i[t]);
        }
        function Hs(a, t, n, o) {
          for (const i of o ?? []) {
            const l = n + (0, Zn.ln)(i);
            s.NT.Get(i.rgLocalizedNames, t) &&
              a.SetLocalization(l, t, i.rgLocalizedNames[t]),
              Hs(a, t, l + "/", i.rgChildren);
          }
        }
        function Vs(a, t, n) {
          let o = new Array();
          const i = t.GetSortedTokenList();
          return (
            (0, U.h5)(() => {
              n.forEach((l) => {
                let r = !1;
                i.forEach((c) => {
                  const d = t.GetLocalization(c, l) || "";
                  if (
                    (c === To &&
                      (d || a.BHasLanguageTitle(l)) &&
                      a.SetName(l, d) &&
                      (r = !0),
                    c === Go &&
                      (d || a.BHasLanguageDescription(l)) &&
                      a.SetDescription(l, d) &&
                      (r = !0),
                    c === Io &&
                      (d || a.BHasLanguageSubTitle(l)) &&
                      a.SetSubTitle(l, d) &&
                      (r = !0),
                    c === Ao &&
                      (d || a.BHasLanguageSummary(l)) &&
                      a.SetSummary(l, d) &&
                      (r = !0),
                    c === _s)
                  ) {
                    const u = a.GetEventModel().jsondata;
                    (d ||
                      (u.localized_broadcast_title &&
                        s.NT.Get(u.localized_broadcast_title, l))) &&
                      s.NT.Get(u.localized_broadcast_title, l) !== d &&
                      ((u.localized_broadcast_title = s.NT.Set(
                        u.localized_broadcast_title || [],
                        l,
                        d,
                      )),
                      a.SetDirty(b.IQ.jsondata_sales),
                      (r = !0));
                  }
                  if (
                    (c.startsWith(cn) &&
                      a.GetEventModel().jsondata?.user_polls?.forEach((p) => {
                        c.startsWith(un)
                          ? p.options?.forEach((m) => {
                              c == un + m.option_id &&
                                (d ||
                                  (m.localized_option &&
                                    s.NT.Get(m.localized_option, l))) &&
                                s.NT.Get(m.localized_option, l) !== d &&
                                ((m.localized_option = s.NT.Set(
                                  m.localized_option || [],
                                  l,
                                  d,
                                )),
                                a.SetDirty(b.IQ.description),
                                (r = !0));
                            })
                          : c == cn + p.poll_id &&
                            (d ||
                              (p.localized_poll_description &&
                                s.NT.Get(p.localized_poll_description, l))) &&
                            s.NT.Get(p.localized_poll_description, l) !== d &&
                            ((p.localized_poll_description = s.NT.Set(
                              p.localized_poll_description || [],
                              l,
                              d,
                            )),
                            a.SetDirty(b.IQ.description),
                            (r = !0));
                      }),
                    c.startsWith(rn) &&
                      a.GetEventModel().jsondata.meet_steam_schedules)
                  )
                    for (
                      let u = 0;
                      u <
                      a.GetEventModel().jsondata.meet_steam_schedules.length;
                      ++u
                    ) {
                      const p =
                        a.GetEventModel().jsondata.meet_steam_schedules[u];
                      for (let m = 0; m < p?.session_breaks?.length; ++m) {
                        const S = p.session_breaks[m];
                        if (c == rn + p.schedule_id + "_" + S.break_id) {
                          (d || s.NT.Get(S.localized_break_description, l)) &&
                            s.NT.Get(S.localized_break_description, l) !== d &&
                            ((S.localized_break_description = s.NT.Set(
                              S.localized_break_description || [],
                              l,
                              d,
                            )),
                            a.SetDirty(b.IQ.description),
                            (r = !0));
                          break;
                        }
                      }
                    }
                  if (
                    c.startsWith(Yt) &&
                    a.GetEventModel().jsondata.meet_steam_groups
                  )
                    for (
                      let u = 0;
                      u < a.GetEventModel().jsondata.meet_steam_groups.length;
                      ++u
                    ) {
                      const p = a.GetEventModel().jsondata.meet_steam_groups[u];
                      if (c == Os + p.group_id) {
                        (d || s.NT.Get(p.localized_session_title, l)) &&
                          s.NT.Get(p.localized_session_title, l) !== d &&
                          ((p.localized_session_title = s.NT.Set(
                            p.localized_session_title || [],
                            l,
                            d,
                          )),
                          a.SetDirty(b.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (c == Ba + p.group_id) {
                        (d || s.NT.Get(p.localized_session_description, l)) &&
                          s.NT.Get(p.localized_session_description, l) !== d &&
                          ((p.localized_session_description = s.NT.Set(
                            p.localized_session_description || [],
                            l,
                            d,
                          )),
                          a.SetDirty(b.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (c == Mo + p.group_id) {
                        (d || s.NT.Get(p.localized_sesssion_faq, l)) &&
                          s.NT.Get(p.localized_sesssion_faq, l) !== d &&
                          ((p.localized_sesssion_faq = s.NT.Set(
                            p.localized_sesssion_faq || [],
                            l,
                            d,
                          )),
                          a.SetDirty(b.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (c == Bo + p.group_id) {
                        (d || s.NT.Get(p.localized_intended_audience, l)) &&
                          s.NT.Get(p.localized_intended_audience, l) !== d &&
                          ((p.localized_intended_audience = s.NT.Set(
                            p.localized_intended_audience || [],
                            l,
                            d,
                          )),
                          a.SetDirty(b.IQ.description),
                          (r = !0));
                        break;
                      }
                    }
                  if (a.BHasEmailEnabled()) {
                    let u = a.GetEmailSettings();
                    if (f.UF.IS_VALVE_GROUP && c === ns) {
                      let p = new We.pC(a);
                      (d || p.BHasLocalizedSubject(l)) &&
                        p.SetLocalizedSubject(l, d) &&
                        (r = !0);
                    }
                    u.sections.forEach((p, m) => {
                      let S = new We.e$(p, a);
                      S.BHasHeadline() &&
                        c === Xn + m &&
                        (d || S.BHasHeadlineInLanguage(l)) &&
                        S.SetHeadline(d, l) &&
                        (r = !0),
                        S.BHasBody() &&
                          c === $n + m &&
                          (d || S.BHasBodyInLanguage(l)) &&
                          S.SetBody(d, l) &&
                          (r = !0);
                    });
                  }
                  if (a.BHasSaleEnabled()) {
                    const u = a.GetEventModel().jsondata;
                    u?.sale_presenters?.length &&
                      u.sale_presenters.forEach((m) => {
                        if (c === ln + m.unique_id) {
                          (d || s.NT.Get(m.localized_presenter_name, l)) &&
                            s.NT.Get(m.localized_presenter_name, l) != d &&
                            ((m.localized_presenter_name = s.NT.Set(
                              m.localized_presenter_name || [],
                              l,
                              d,
                            )),
                            a.SetDirty(b.IQ.jsondata_sales),
                            (r = !0));
                          const S = m.localized_presenter_name[l];
                          t.SetLocalization(ln + m.unique_id, l, S);
                        }
                      }),
                      u.sale_sub_menu?.menu_items?.length > 0 &&
                        u.sale_sub_menu.menu_items
                          .filter((m) => m.localized_sub_menu_name?.length > 0)
                          .map((m) => {
                            if (c === dn + m.unique_id) {
                              (d || s.NT.Get(m.localized_sub_menu_name, l)) &&
                                s.NT.Get(m.localized_sub_menu_name, l) != d &&
                                ((m.localized_sub_menu_name = s.NT.Set(
                                  m.localized_sub_menu_name || [],
                                  l,
                                  d,
                                )),
                                a.SetDirty(b.IQ.jsondata_sales),
                                (r = !0));
                              const S = m.localized_sub_menu_name[l];
                              t.SetLocalization(dn + m.unique_id, l, S);
                            }
                          }),
                      a
                        .GetSaleSections()
                        .filter((m) => !m.disable_localization)
                        .forEach((m) => {
                          const S = a.GetSaleSectionIndexByID(m.unique_id, !1);
                          if (
                            ((c === Lo + S || c === es + m.unique_id) &&
                              (d || a.BHasSaleSectionLabelLocalization(l, S)) &&
                              a.SetSaleSectionLabelLocalization(l, S, d) &&
                              (r = !0),
                            c === ts + m.unique_id &&
                              (d ||
                                a.BHasSaleSectionSubtitleLocalization(l, S)) &&
                              a.SetSaleSectionSubtitleLocalization(l, S, d) &&
                              (r = !0),
                            c === ms + m.unique_id &&
                              (d || a.BHasSaleSectionDescriptionBBCode(l, S)) &&
                              a.SetSaleSectionDescriptionBBCode(l, S, d) &&
                              (r = !0),
                            c === ps + m.unique_id &&
                              (d || a.BHasSaleSectionInnerTitle(l, S)) &&
                              a.SetSaleSectionInnerTitle(l, S, d) &&
                              (r = !0),
                            m.section_type === "tabs" && m.tabs)
                          )
                            for (const v of m.tabs)
                              c === ss + m.unique_id + "_" + v.unique_id &&
                                (d || a.BHasSaleSectionTabName(l, v)) &&
                                a.SetSaleSectionTabName(l, v, d) &&
                                (r = !0),
                                v.tab_jump_list?.menu_items?.length > 0 &&
                                  u.sale_sub_menu.menu_items
                                    .filter(
                                      (E) =>
                                        E.localized_sub_menu_name?.length > 0,
                                    )
                                    .map((E) => {
                                      if (
                                        c ===
                                        hn + v.unique_id + "_" + E.unique_id
                                      ) {
                                        (d ||
                                          s.NT.Get(
                                            E.localized_sub_menu_name,
                                            l,
                                          )) &&
                                          s.NT.Get(
                                            E.localized_sub_menu_name,
                                            l,
                                          ) != d &&
                                          ((E.localized_sub_menu_name =
                                            s.NT.Set(
                                              E.localized_sub_menu_name || [],
                                              l,
                                              d,
                                            )),
                                          a.SetDirty(b.IQ.jsondata_sales),
                                          (r = !0));
                                        const D = E.localized_sub_menu_name[l];
                                        t.SetLocalization(
                                          hn + v.unique_id + "_" + E.unique_id,
                                          l,
                                          D,
                                        );
                                      }
                                    }),
                                Ws(
                                  a,
                                  c,
                                  d,
                                  l,
                                  Us + v.unique_id + "_",
                                  v.tab_tag_filter?.rgNodes,
                                ) && (r = !0);
                          if (
                            (a.BHasSaleSectionTextLocalization(S) &&
                              c === as + m.unique_id &&
                              (d ||
                                a.BHasSaleSectionTextLocalizationForLang(
                                  l,
                                  S,
                                )) &&
                              a.SetSaleSectionTextLocalization(l, S, d) &&
                              (r = !0),
                            m.enable_faceted_browsing &&
                              m.facets.forEach((v) => {
                                c === is + m.unique_id + "_" + v.unique_id &&
                                  (d || a.BHasSaleSectionFacetName(l, v)) &&
                                  a.SetSaleSectionFacetName(l, v, d) &&
                                  (r = !0),
                                  v.facetValues.forEach((E) => {
                                    c ===
                                      os +
                                        m.unique_id +
                                        "_" +
                                        v.unique_id +
                                        "_" +
                                        E.unique_id &&
                                      (d ||
                                        a.BHasSaleSectionFacetValueName(
                                          l,
                                          E,
                                        )) &&
                                      a.SetSaleSectionFacetValueName(l, E, d) &&
                                      (r = !0),
                                      c ===
                                        ls +
                                          m.unique_id +
                                          "_" +
                                          v.unique_id +
                                          "_" +
                                          E.unique_id &&
                                        (d ||
                                          a.BHasSaleSectionFacetValueSubtitle(
                                            l,
                                            E,
                                          )) &&
                                        a.SetSaleSectionFacetValueSubtitle(
                                          l,
                                          E,
                                          d,
                                        ) &&
                                        (r = !0);
                                  });
                              }),
                            m.section_type == "vo_internal" &&
                              m.internal_section_data?.internal_type ==
                                "reservation_widget" &&
                              (m.internal_section_data.reservation_options
                                ?.length > 0 ||
                                m.internal_section_data.reservation_layout) &&
                              (m.internal_section_data.reservation_options?.forEach(
                                (v) => {
                                  c === rs + m.unique_id + "_" + v.unique_id &&
                                    (d ||
                                      (v.localized_reservation_desc &&
                                        s.NT.Get(
                                          v.localized_reservation_desc,
                                          l,
                                        ))) &&
                                    s.NT.Get(
                                      v.localized_reservation_desc,
                                      l,
                                    ) !== d &&
                                    ((v.localized_reservation_desc = s.NT.Set(
                                      v.localized_reservation_desc || [],
                                      l,
                                      d,
                                    )),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0)),
                                    c ===
                                      us + m.unique_id + "_" + v.unique_id &&
                                      (d && !v.callout && (v.callout = {}),
                                      (d ||
                                        (v.callout.localized_callout &&
                                          s.NT.Get(
                                            v.callout.localized_callout,
                                            l,
                                          ))) &&
                                        s.NT.Get(
                                          v.callout.localized_callout,
                                          l,
                                        ) !== d &&
                                        ((v.callout.localized_callout =
                                          s.NT.Set(
                                            v.callout.localized_callout || [],
                                            l,
                                            d,
                                          )),
                                        a.SetDirty(b.IQ.jsondata_sales),
                                        (r = !0))),
                                    c ===
                                      ds + m.unique_id + "_" + v.unique_id &&
                                      (d ||
                                        (v.localized_out_of_stock_override &&
                                          s.NT.Get(
                                            v.localized_out_of_stock_override,
                                            l,
                                          ))) &&
                                      s.NT.Get(
                                        v.localized_out_of_stock_override,
                                        l,
                                      ) !== d &&
                                      ((v.localized_out_of_stock_override =
                                        s.NT.Set(
                                          v.localized_out_of_stock_override ||
                                            [],
                                          l,
                                          d,
                                        )),
                                      a.SetDirty(b.IQ.jsondata_sales),
                                      (r = !0)),
                                    c ===
                                      cs + m.unique_id + "_" + v.unique_id &&
                                      (d ||
                                        (v.localized_delivery_override_desc &&
                                          s.NT.Get(
                                            v.localized_delivery_override_desc,
                                            l,
                                          ))) &&
                                      s.NT.Get(
                                        v.localized_delivery_override_desc,
                                        l,
                                      ) !== d &&
                                      ((v.localized_delivery_override_desc =
                                        s.NT.Set(
                                          v.localized_delivery_override_desc ||
                                            [],
                                          l,
                                          d,
                                        )),
                                      a.SetDirty(b.IQ.jsondata_sales),
                                      (r = !0));
                                },
                              ),
                              m.internal_section_data.reservation_layout?.product_configs?.forEach(
                                (v) => {
                                  c === on + m.unique_id + "_" + v.unique_id &&
                                    (d ||
                                      (v.localized_product_config_title &&
                                        s.NT.Get(
                                          v.localized_product_config_title,
                                          l,
                                        ))) &&
                                    s.NT.Get(
                                      v.localized_product_config_title,
                                      l,
                                    ) !== d &&
                                    ((v.localized_product_config_title =
                                      s.NT.Set(
                                        v.localized_product_config_title || [],
                                        l,
                                        d,
                                      )),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0)),
                                    v.variations?.forEach((E) => {
                                      c ===
                                        on +
                                          m.unique_id +
                                          "_" +
                                          v.unique_id +
                                          "_" +
                                          E.unique_id &&
                                        (d ||
                                          (E.localized_variation_name &&
                                            s.NT.Get(
                                              E.localized_variation_name,
                                              l,
                                            ))) &&
                                        s.NT.Get(
                                          E.localized_variation_name,
                                          l,
                                        ) !== d &&
                                        ((E.localized_variation_name = s.NT.Set(
                                          E.localized_variation_name || [],
                                          l,
                                          d,
                                        )),
                                        a.SetDirty(b.IQ.jsondata_sales),
                                        (r = !0));
                                    });
                                },
                              )),
                            m.section_type == "vo_internal" &&
                              m.internal_section_data?.internal_type ==
                                "while_supplies_last" &&
                              m.internal_section_data.while_supplies_last_option
                                ?.length > 0 &&
                              m.internal_section_data.while_supplies_last_option.forEach(
                                (v) => {
                                  c === hs + m.unique_id + "_" + v.unique_id &&
                                    (d ||
                                      (v.localized_supply_desc &&
                                        s.NT.Get(
                                          v.localized_supply_desc,
                                          l,
                                        ))) &&
                                    s.NT.Get(v.localized_supply_desc, l) !==
                                      d &&
                                    ((v.localized_supply_desc = s.NT.Set(
                                      v.localized_supply_desc || [],
                                      l,
                                      d,
                                    )),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0));
                                },
                              ),
                            m.quiz?.questions?.length > 0 &&
                              m.quiz?.questions.forEach((v) => {
                                c === vs + m.unique_id + "_" + v.unique_id
                                  ? (d ||
                                      (v.localized_question &&
                                        s.NT.Get(v.localized_question, l))) &&
                                    s.NT.Get(v.localized_question, l) !== d &&
                                    ((v.localized_question = s.NT.Set(
                                      v.localized_question || [],
                                      l,
                                      d,
                                    )),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0))
                                  : v.answers?.length > 0 &&
                                    v.answers.forEach((E) => {
                                      c ===
                                        gs + m.unique_id + "_" + E.unique_id &&
                                        (d ||
                                          (E.localized_answer &&
                                            s.NT.Get(E.localized_answer, l))) &&
                                        s.NT.Get(E.localized_answer, l) !== d &&
                                        ((E.localized_answer = s.NT.Set(
                                          E.localized_answer || [],
                                          l,
                                          d,
                                        )),
                                        a.SetDirty(b.IQ.jsondata_sales),
                                        (r = !0));
                                    });
                              }),
                            m.tech_specs?.tech_spec_block_list?.length > 0 &&
                              m.tech_specs.tech_spec_block_list.forEach((v) => {
                                c === Jt + m.unique_id + "_" + v.unique_id
                                  ? (d ||
                                      (v.localized_block_title &&
                                        s.NT.Get(
                                          v.localized_block_title,
                                          l,
                                        ))) &&
                                    s.NT.Get(v.localized_block_title, l) !==
                                      d &&
                                    ((v.localized_block_title = s.NT.Set(
                                      v.localized_block_title || [],
                                      l,
                                      d,
                                    )),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0))
                                  : v.spec_list?.length > 0 &&
                                    v.spec_list.forEach((E) => {
                                      c === Jt + m.unique_id + Ps + E.unique_id
                                        ? (d ||
                                            (E.localized_spec_name &&
                                              s.NT.Get(
                                                E.localized_spec_name,
                                                l,
                                              ))) &&
                                          s.NT.Get(E.localized_spec_name, l) !==
                                            d &&
                                          ((E.localized_spec_name = s.NT.Set(
                                            E.localized_spec_name || [],
                                            l,
                                            d,
                                          )),
                                          a.SetDirty(b.IQ.jsondata_sales),
                                          (r = !0))
                                        : c ===
                                            Jt +
                                              m.unique_id +
                                              Rs +
                                              E.unique_id &&
                                          (d ||
                                            (E.localized_spec_description &&
                                              s.NT.Get(
                                                E.localized_spec_description,
                                                l,
                                              ))) &&
                                          s.NT.Get(
                                            E.localized_spec_description,
                                            l,
                                          ) !== d &&
                                          ((E.localized_spec_description =
                                            s.NT.Set(
                                              E.localized_spec_description ||
                                                [],
                                              l,
                                              d.replace(
                                                /<br\s*\/?>/g,
                                                `
`,
                                              ),
                                            )),
                                          a.SetDirty(b.IQ.jsondata_sales),
                                          (r = !0));
                                    });
                              }),
                            m.quest?.door_info?.length > 0 &&
                              m.quest?.door_info.forEach((v) => {
                                c === js + m.unique_id + "_" + v.unique_id
                                  ? (d ||
                                      (v.localized_closed_door_description &&
                                        s.NT.Get(
                                          v.localized_closed_door_description,
                                          l,
                                        ))) &&
                                    s.NT.Get(
                                      v.localized_closed_door_description,
                                      l,
                                    ) !== d &&
                                    ((v.localized_closed_door_description =
                                      s.NT.Set(
                                        v.localized_closed_door_description ||
                                          [],
                                        l,
                                        d,
                                      )),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0))
                                  : c ===
                                      bs + m.unique_id + "_" + v.unique_id &&
                                    (d ||
                                      (v.localized_open_door_description &&
                                        s.NT.Get(
                                          v.localized_open_door_description,
                                          l,
                                        ))) &&
                                    s.NT.Get(
                                      v.localized_open_door_description,
                                      l,
                                    ) !== d &&
                                    ((v.localized_open_door_description =
                                      s.NT.Set(
                                        v.localized_open_door_description || [],
                                        l,
                                        d,
                                      )),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0));
                              }),
                            m.rewards?.reward_items?.length > 0 &&
                              m.rewards.reward_items.forEach((v) => {
                                c ===
                                  As +
                                    m.unique_id +
                                    "_" +
                                    v.virtual_item_reward_def_id &&
                                  (d ||
                                    (v.localized_reward_description &&
                                      s.NT.Get(
                                        v.localized_reward_description,
                                        l,
                                      ))) &&
                                  s.NT.Get(
                                    v.localized_reward_description,
                                    l,
                                  ) !== d &&
                                  ((v.localized_reward_description = s.NT.Set(
                                    v.localized_reward_description || [],
                                    l,
                                    d,
                                  )),
                                  a.SetDirty(b.IQ.jsondata_sales),
                                  (r = !0));
                              }),
                            m.claim_item_section_data?.localized_claim_button
                              ?.length > 0 &&
                              c === Gs + m.unique_id &&
                              (d ||
                                (m.claim_item_section_data
                                  .localized_claim_button &&
                                  s.NT.Get(
                                    m.claim_item_section_data
                                      .localized_claim_button,
                                    l,
                                  ))) &&
                              s.NT.Get(
                                m.claim_item_section_data
                                  .localized_claim_button,
                                l,
                              ) !== d &&
                              ((m.claim_item_section_data.localized_claim_button =
                                s.NT.Set(
                                  m.claim_item_section_data
                                    .localized_claim_button || [],
                                  l,
                                  d,
                                )),
                              a.SetDirty(b.IQ.jsondata_sales),
                              (r = !0)),
                            m.section_type == "badge_progress" &&
                              m.badge_progress)
                          ) {
                            const v = m.badge_progress;
                            c === Ss + m.unique_id &&
                              (d ||
                                (v.localized_name &&
                                  s.NT.Get(v.localized_name, l))) &&
                              s.NT.Get(v.localized_name, l) !== d &&
                              ((v.localized_name = s.NT.Set(
                                v.localized_name || [],
                                l,
                                d,
                              )),
                              a.SetDirty(b.IQ.jsondata_sales),
                              (r = !0)),
                              c === Es + m.unique_id &&
                                (d ||
                                  (v.localized_initial_description &&
                                    s.NT.Get(
                                      v.localized_initial_description,
                                      l,
                                    ))) &&
                                s.NT.Get(v.localized_initial_description, l) !==
                                  d &&
                                ((v.localized_initial_description = s.NT.Set(
                                  v.localized_initial_description || [],
                                  l,
                                  d,
                                )),
                                a.SetDirty(b.IQ.jsondata_sales),
                                (r = !0)),
                              c === xs + m.unique_id &&
                                (d ||
                                  (v.localized_progress_description &&
                                    s.NT.Get(
                                      v.localized_progress_description,
                                      l,
                                    ))) &&
                                s.NT.Get(
                                  v.localized_progress_description,
                                  l,
                                ) !== d &&
                                ((v.localized_progress_description = s.NT.Set(
                                  v.localized_progress_description || [],
                                  l,
                                  d,
                                )),
                                a.SetDirty(b.IQ.jsondata_sales),
                                (r = !0)),
                              c === fs + m.unique_id &&
                                (d ||
                                  (v.localized_maxtier_description &&
                                    s.NT.Get(
                                      v.localized_maxtier_description,
                                      l,
                                    ))) &&
                                s.NT.Get(v.localized_maxtier_description, l) !==
                                  d &&
                                ((v.localized_maxtier_description = s.NT.Set(
                                  v.localized_maxtier_description || [],
                                  l,
                                  d,
                                )),
                                a.SetDirty(b.IQ.jsondata_sales),
                                (r = !0));
                          }
                          if (
                            (m.section_type == "discoveryqueue" &&
                              c === Cs + m.unique_id &&
                              (d ||
                                (m.discovery_queue_localized_desc &&
                                  s.NT.Get(
                                    m.discovery_queue_localized_desc,
                                    l,
                                  ))) &&
                              s.NT.Get(m.discovery_queue_localized_desc, l) !==
                                d &&
                              ((m.discovery_queue_localized_desc = s.NT.Set(
                                m.discovery_queue_localized_desc || [],
                                l,
                                d,
                              )),
                              a.SetDirty(b.IQ.jsondata_sales),
                              (r = !0)),
                            m.section_type == "social_share" &&
                              m.social_share.content_options?.forEach((v) => {
                                const E = v.localized_option_fields;
                                c === ws + m.unique_id + "_" + v.unique_id &&
                                  (d ||
                                    (E.localized_header &&
                                      s.NT.Get(E.localized_header, l))) &&
                                  s.NT.Get(E.localized_header, l) !== d &&
                                  ((E.localized_header = s.NT.Set(
                                    E.localized_header || [],
                                    l,
                                    d,
                                  )),
                                  a.SetDirty(b.IQ.jsondata_sales),
                                  (r = !0)),
                                  c === Ds + m.unique_id + "_" + v.unique_id &&
                                    (d || (E.title && s.NT.Get(E.title, l))) &&
                                    s.NT.Get(E.title, l) !== d &&
                                    ((E.title = s.NT.Set(E.title || [], l, d)),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0)),
                                  c === ys + m.unique_id + "_" + v.unique_id &&
                                    (d ||
                                      (E.description &&
                                        s.NT.Get(E.description, l))) &&
                                    s.NT.Get(E.description, l) !== d &&
                                    ((E.description = s.NT.Set(
                                      E.description || [],
                                      l,
                                      d,
                                    )),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0)),
                                  c === Ts + m.unique_id + "_" + v.unique_id &&
                                    (d || (E.image && s.NT.Get(E.image, l))) &&
                                    s.NT.Get(E.image, l) !== d &&
                                    ((E.image = s.NT.Set(E.image || [], l, d)),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0)),
                                  c === Is + m.unique_id + "_" + v.unique_id &&
                                    (d ||
                                      (E.twitter_alt_text &&
                                        s.NT.Get(E.twitter_alt_text, l))) &&
                                    s.NT.Get(E.twitter_alt_text, l) !== d &&
                                    ((E.twitter_alt_text = s.NT.Set(
                                      E.twitter_alt_text || [],
                                      l,
                                      d,
                                    )),
                                    a.SetDirty(b.IQ.jsondata_sales),
                                    (r = !0));
                              }),
                            m.section_type == "media_layout" &&
                              m.media_layout.media_content?.forEach((v, E) => {
                                const D = v.localized_media_desc;
                                c === Ls + m.unique_id + "_" + E &&
                                  (d || (D && s.NT.Get(D, l))) &&
                                  s.NT.Get(D, l) !== d &&
                                  ((v.localized_media_desc = s.NT.Set(
                                    D || [],
                                    l,
                                    d,
                                  )),
                                  a.SetDirty(b.IQ.jsondata_sales),
                                  (r = !0));
                              }),
                            m.section_type == "template_media_content" &&
                              m.media_container.media_rows?.forEach((v) => {
                                v?.media_columns.forEach((E) => {
                                  let D = Zt(
                                    a,
                                    c,
                                    d,
                                    m.unique_id + "_" + E.unique_id,
                                    l,
                                    E,
                                  );
                                  (r ||= D),
                                    E.mobile_content_varient &&
                                      ((D = Zt(
                                        a,
                                        c,
                                        d,
                                        m.unique_id +
                                          "_" +
                                          E.unique_id +
                                          "_mobile",
                                        l,
                                        E.mobile_content_varient,
                                      )),
                                      (r ||= D)),
                                    E.tablet_content_varient &&
                                      ((D = Zt(
                                        a,
                                        c,
                                        d,
                                        m.unique_id +
                                          "_" +
                                          E.unique_id +
                                          "_tablet",
                                        l,
                                        E.tablet_content_varient,
                                      )),
                                      (r ||= D));
                                });
                              }),
                            m.section_type == "template_media_overlay" &&
                              m.media_overlay)
                          ) {
                            let v = Zt(
                              a,
                              c,
                              d,
                              m.unique_id + "_overlay",
                              l,
                              m.media_overlay,
                            );
                            if (
                              ((r ||= v),
                              m.media_overlay_mobile_content_varient)
                            ) {
                              let E = Zt(
                                a,
                                c,
                                d,
                                m.unique_id + "_overlay_mobile",
                                l,
                                m.media_overlay_mobile_content_varient,
                              );
                              r ||= E;
                            }
                            if (m.media_overlay_tablet_content_varient) {
                              let E = Zt(
                                a,
                                c,
                                d,
                                m.unique_id + "_overlay_tablet",
                                l,
                                m.media_overlay_tablet_content_varient,
                              );
                              r ||= E;
                            }
                          }
                        });
                  }
                }),
                  r && o.push(l);
              });
            }),
            o
          );
        }
        function Zt(a, t, n, o, i, l) {
          let r = !1;
          if (t === Ns + o) {
            const c = l.localized_media_title;
            (n || (c && s.NT.Get(c, i))) &&
              s.NT.Get(c, i) !== n &&
              ((l.localized_media_title = s.NT.Set(c || [], i, n)),
              a.SetDirty(b.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === Ms + o) {
            const c = l.localized_media_subtitle;
            (n || (c && s.NT.Get(c, i))) &&
              s.NT.Get(c, i) !== n &&
              ((l.localized_media_subtitle = s.NT.Set(c || [], i, n)),
              a.SetDirty(b.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === Bs + o) {
            const c = l.localized_media_description;
            (n || (c && s.NT.Get(c, i))) &&
              s.NT.Get(c, i) !== n &&
              ((l.localized_media_description = s.NT.Set(c || [], i, n)),
              a.SetDirty(b.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === ks + o) {
            const c = l.localized_alt_text;
            (n || (c && s.NT.Get(c, i))) &&
              s.NT.Get(c, i) !== n &&
              ((l.localized_alt_text = s.NT.Set(c || [], i, n)),
              a.SetDirty(b.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === Fs + o) {
            const c = l.title_media.localized_alt_text;
            (n || (c && s.NT.Get(c, i))) &&
              s.NT.Get(c, i) !== n &&
              ((l.title_media.localized_alt_text = s.NT.Set(c || [], i, n)),
              a.SetDirty(b.IQ.jsondata_sales),
              (r = !0));
          }
          return r;
        }
        function Ws(a, t, n, o, i, l) {
          for (const r of l ?? []) {
            const c = i + (0, Zn.ln)(r);
            if (t === c)
              return s.NT.Get(r.rgLocalizedNames, o) === n
                ? !1
                : ((r.rgLocalizedNames = s.NT.Set(
                    r.rgLocalizedNames || [],
                    o,
                    n,
                  )),
                  a.SetDirty(b.IQ.jsondata_sales),
                  !0);
            if (t.startsWith(c + "/"))
              return Ws(a, t, n, o, c + "/", r.rgChildren);
          }
          return !1;
        }
        function Oo(a) {
          return (0, e.jsx)("div", {
            className: (0, j.A)(F.FlexRowContainer),
            children: (0, e.jsx)(Qs, { editModel: a.editModel }),
          });
        }
        const Qs = (a) => {
          const { data: t } = (0, Nt.hM)(a.editModel.GetClanAccountID()),
            n = (o) => {
              o.preventDefault(),
                (0, y.pg)(
                  (0, e.jsx)(pa, { editModel: a.editModel, permissions: t }),
                  (0, ue.uX)(o),
                );
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(xe.he, {
                className: (0, j.A)(F.EditPreviewButton),
                toolTipContent: (0, s.we)("#EventEditor_Loc_Export_Desc0"),
                children: (0, e.jsx)("a", {
                  onClick: n,
                  children: (0, s.we)("#EventEditor_Loc_Export_Short"),
                }),
              }),
              (0, e.jsx)(qn.t3, {
                strToolTip: (0, s.we)("#EventEditor_Loc_Import_ttip"),
                strLabel: (0, s.we)("#EventEditor_Loc_Import_Short"),
                fnOnImportLocData: (o, i) => Vs(a.editModel, o, i),
              }),
            ],
          });
        };
        let pa = class extends g.Component {
          state = {
            bShowCSV: !0,
            bExportEventBody: !0,
            bExportEmail: this.props.editModel.BHasEmailEnabled(),
            bExportSale: this.props.editModel.BHasSaleEnabled(),
          };
          GetLocalizationFilePrefix() {
            const { editModel: a } = this.props;
            let t = a.GetName(T.Bhc);
            return (!t || t.trim() == "") && (t = "event"), t;
          }
          GetLocalizationModel() {
            return zs(
              this.props.editModel,
              this.state.bExportEventBody,
              this.state.bExportEmail,
              this.state.bExportSale,
            );
          }
          OnExportTypeChange(a) {
            this.setState({ bShowCSV: a == "csv" });
          }
          render() {
            const { closeModal: a, editModel: t, permissions: n } = this.props;
            return (0, e.jsx)(B.eV, {
              title: (0, s.we)("#EventEditor_Loc_Export"),
              onCancel: a,
              closeModal: a,
              children: (0, e.jsxs)(_.nB, {
                children: [
                  (0, e.jsx)(_.a3, {
                    children: (0, e.jsxs)("div", {
                      className: (0, j.A)(F.FlexColumnContainer),
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, s.we)("#EventEditor_Loc_Export_Desc0"),
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, j.A)(
                            F.FlexRowContainer,
                            F.RadioOption,
                          ),
                          children: [
                            (0, e.jsx)("input", {
                              type: "radio",
                              name: "ExportOption",
                              id: "EventEditor_ExportCSVOption",
                              value: "csv",
                              checked: this.state.bShowCSV,
                              onChange: () => this.OnExportTypeChange("csv"),
                            }),
                            (0, e.jsx)("label", {
                              htmlFor: "EventEditor_ExportCSVOption",
                              children: (0, e.jsx)("span", {
                                children: (0, s.we)(
                                  "#EventEditor_Loc_Export_CSV",
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, j.A)(
                            F.FlexRowContainer,
                            F.RadioOption,
                          ),
                          children: [
                            (0, e.jsx)("input", {
                              type: "radio",
                              name: "ExportOption",
                              id: "EventEditor_ExportXMLOption",
                              value: "xml",
                              checked: !this.state.bShowCSV,
                              onChange: () => this.OnExportTypeChange("xml"),
                            }),
                            (0, e.jsx)("label", {
                              htmlFor: "EventEditor_ExportXMLOption",
                              children: (0, e.jsx)("span", {
                                children: (0, s.we)(
                                  "#EventEditor_Loc_Export_XML",
                                ),
                              }),
                            }),
                          ],
                        }),
                        !!(
                          n?.support_user &&
                          (t.BHasSaleEnabled() || t.BHasEmailEnabled)
                        ) &&
                          (0, e.jsxs)("div", {
                            className: F.ValveOnlyBackground,
                            children: [
                              (0, e.jsx)("p", {
                                children:
                                  "(VO) Identify which sections to export",
                              }),
                              (0, e.jsx)(_.Yh, {
                                label: "Export Event Body",
                                onChange: (o) =>
                                  this.setState({ bExportEventBody: o }),
                                checked: this.state.bExportEventBody,
                              }),
                              (0, e.jsx)(_.Yh, {
                                disabled: !t.BHasEmailEnabled(),
                                label: "Export Email",
                                onChange: (o) =>
                                  this.setState({ bExportEmail: o }),
                                checked: this.state.bExportEmail,
                              }),
                              (0, e.jsx)(_.Yh, {
                                disabled: !t.BHasSaleEnabled(),
                                label: "Export Sales",
                                onChange: (o) =>
                                  this.setState({ bExportSale: o }),
                                checked: this.state.bExportSale,
                              }),
                            ],
                          }),
                        this.state.bShowCSV
                          ? (0, e.jsxs)(g.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, s.we)(
                                    "#EventEditor_Loc_Export_Desc",
                                  ),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, s.we)(
                                    "#EventEditor_Loc_Export_Desc2",
                                  ),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, s.we)(
                                    "#EventEditor_Loc_Export_Desc3",
                                  ),
                                }),
                              ],
                            })
                          : (0, e.jsxs)(g.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, s.we)(
                                    "#EventEditor_Loc_Export_XMLDesc",
                                  ),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, s.we)(
                                    "#EventEditor_Loc_Export_XMLDesc2",
                                  ),
                                }),
                              ],
                            }),
                      ],
                    }),
                  }),
                  (0, e.jsxs)(_.wi, {
                    children: [
                      (0, e.jsx)(qn.Yg, {
                        fnGetLocData: this.GetLocalizationModel,
                        bShowCSV: this.state.bShowCSV,
                        bShowXML: !this.state.bShowCSV,
                        strFileNamePrefix: this.GetLocalizationFilePrefix(),
                        lang: this.props.editModel.GetCurEditLanguage(),
                        closeModal: this.props.closeModal,
                      }),
                      (0, e.jsx)(_.$n, {
                        onClick: a,
                        children: (0, s.we)("#Button_Cancel"),
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
        };
        sn([J.oI], pa.prototype, "GetLocalizationModel", 1),
          sn([J.oI], pa.prototype, "OnExportTypeChange", 1),
          (pa = sn([w.PA], pa));
        var Z = h(86649);
        const ym = 1,
          Tm = 2,
          Im = 3,
          Am = 4,
          Gm = 5,
          Lm = 6,
          Nm = 7,
          Mm = 8,
          Bm = 9,
          Om = 10,
          Pm = 11,
          Rm = 12,
          km = 13,
          Fm = 14,
          Um = 15,
          zm = 16,
          Hm = 17,
          Vm = 18,
          Wm = 19,
          Qm = 20,
          Ym = 21,
          Jm = 22,
          Km = 23,
          Zm = 24,
          qm = 25,
          Xm = 26,
          $m = 27,
          ep = 28,
          tp = 29,
          ap = 30,
          np = 31,
          sp = 32,
          ip = 33,
          op = 34,
          lp = 35,
          Po = 36;
        function Ro(a) {
          const { eventModel: t, fnOnGotoPage: n } = a;
          return t.bOldAnnouncement
            ? null
            : (0, e.jsx)("div", {
                className: (0, j.A)(Z.ManageButton, Z.Clone),
                onClick: (o) => {
                  o.stopPropagation(), Ys(t, n);
                },
                children: (0, s.we)("#Button_Clone"),
              });
        }
        function Ys(a, t) {
          G.mh
            .LoadEditorModel(a.clanSteamID, a.GID)
            .then((n) => {
              const o = zs(n, !0, !0, !0),
                i = o.GetLanguagesWithTokens();
              i.length > 1
                ? (i.sort((l, r) =>
                    (0, s.we)("#Language_" + (0, T.LgB)(l)).localeCompare(
                      (0, s.we)("#Language_" + (0, T.LgB)(r)),
                    ),
                  ),
                  (0, y.pg)(
                    (0, e.jsx)(ko, { langs: i, locData: o, fnOnGotoPage: t }),
                    window,
                  ))
                : Js(t, o);
            })
            .catch((n) => {
              let o = (0, ye.H)(n);
              (0, y.pg)(
                (0, e.jsx)(B.KG, {
                  strTitle: (0, s.we)("#EventEditor_CloneError"),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  strDescription: (0, s.we)(
                    "#EventEditor_CloneError_Desc",
                    o.strErrorMsg,
                  ),
                }),
                window,
                { strTitle: (0, s.we)("#EventEditor_CloneError") },
              );
            });
        }
        function Js(a, t, n) {
          const o = G.mh.CreateClone(),
            i = o.GetEventModel();
          if (
            ((i.jsondata.sale_header_offset = i.GetEventType() != Po ? 530 : 0),
            n && n.length > 0)
          ) {
            const l = t.GetLanguagesWithTokens();
            t.ClearLanguagesTokens(n);
            const r = i.jsondata.bSaleEnabled;
            (i.jsondata.bSaleEnabled = !0),
              Vs(o, t, l),
              (i.jsondata.bSaleEnabled = r);
          }
          a("clone");
        }
        function ko(a) {
          const { langs: t, locData: n, closeModal: o, fnOnGotoPage: i } = a,
            l = (0, T.sfN)(f.TS.LANGUAGE),
            [r, c] = g.useState(new Set(t.filter((d) => d != l)));
          return (0, e.jsxs)(B.o0, {
            strTitle: (0, s.we)("#Button_Clone"),
            onOK: () => Js(i, n, Array.from(r)),
            strDescription: (0, s.we)("#EventEditor_Clone_MultiLanguages"),
            closeModal: o,
            children: [
              (0, e.jsx)("div", {
                className: Z.CloneLangAlert,
                children: (0, s.we)("#EventEditor_Clone_Alert"),
              }),
              (0, e.jsx)("div", {
                className: Z.CloneLangListCtn,
                children: t.map((d) =>
                  (0, e.jsx)(
                    _.Yh,
                    {
                      className: Z.CloneCheckBox,
                      onChange: (u) => {
                        const p = new Set(r);
                        u ? p.delete(d) : p.add(d), c(p);
                      },
                      label: (0, s.we)("#Language_" + (0, T.LgB)(d)),
                      checked: !r.has(d),
                    },
                    d,
                  ),
                ),
              }),
              (0, e.jsx)(_.$n, {
                onClick: () => c(new Set()),
                children: (0, s.we)("#EventEditor_Clone_SelectAll"),
              }),
              (0, e.jsx)(_.$n, {
                onClick: () => c(new Set(t)),
                children: (0, s.we)("#EventEditor_Clone_DeSelectAll"),
              }),
            ],
          });
        }
        var _a = h(80963),
          Ae = h(92757),
          qe = h(10142),
          ve = h(25792),
          Fo = h(80635),
          $ = h(56492),
          Uo = h(68266),
          zo = h(39239),
          Ho = h(64868);
        function Vo(a) {
          const [t, n] = (0, H.qm)(a.GetEventModel());
          return [
            t,
            n,
            (i, l) => {
              (t != i || n != l) &&
                ((a.GetEventModel().m_nBuildID = i),
                (a.GetEventModel().m_strBuildBranch = l),
                a.SetDirty(b.IQ.description));
            },
          ];
        }
        var Fe = h(72604),
          Wo = h(11113),
          wt = h.n(Wo),
          Mt = h(84346);
        function Qo(a) {
          switch (a) {
            case T.Fwr:
            case T.u0:
            case T.zeJ:
              return !0;
          }
          return !1;
        }
        function Ks(a) {
          const { eventModel: t, bAllowUpdate: n } = a,
            [o, i] = (0, H.qm)(t);
          if (!Qo(t.type) && !o) return null;
          let l = (0, e.jsx)("span", {
            className: (0, j.A)(wt().BuildDisplay, wt().BuildUnlinked),
            children: (0, s.we)("#EventEditor_AssociateBuildBlank"),
          });
          if (o) {
            const r = (0, e.jsx)("a", {
              className: (0, j.A)(wt().BuildIDLink),
              href: `${f.TS.PARTNER_BASE_URL}apps/builddetails/${t.appid}/${o}`,
              onClick: (c) => c.stopPropagation(),
              children: o,
            });
            i
              ? (l = (0, e.jsx)("span", {
                  className: (0, j.A)(
                    wt().BuildDisplay,
                    wt().BuildLinkedBranch,
                  ),
                  children: (0, s.PP)("#EventEditor_AssociatedBuild", r, i),
                }))
              : (l = (0, e.jsx)("span", {
                  className: (0, j.A)(
                    wt().BuildDisplay,
                    wt().BuildLinkedDefault,
                  ),
                  children: (0, s.PP)(
                    "#EventEditor_AssociatedBuild_Default",
                    r,
                  ),
                }));
          } else if (!n) return null;
          return (0, e.jsxs)("div", {
            className: wt().AssociatedBuildBody,
            children: [
              a.children,
              l,
              (0, e.jsx)(W.o, {
                tooltip: (0, s.we)("#EventEditor_AssociateBuild_ttip"),
                className: x().tooltip_Ctn,
              }),
            ],
          });
        }
        const Yo = (0, w.PA)((a) => {
          const { editModel: t } = a,
            n = t.GetEventModel();
          return (0, e.jsx)(Ks, {
            eventModel: n,
            bAllowUpdate: !0,
            children: (0, e.jsx)(_.$n, {
              onClick: (o) =>
                (0, y.pg)(
                  (0, e.jsx)(Zo, { editModel: a.editModel }),
                  (0, ue.uX)(o),
                ),
              children: (0, s.we)("#EventEditor_AssociateBuild"),
            }),
          });
        });
        function Jo(a) {
          const [t, n] = g.useState(null);
          return (
            g.useEffect(() => {
              if ((n(null), !a)) return;
              const o = K().CancelToken.source(),
                i = f.TS.COMMUNITY_BASE_URL + `ogg/${a}/ajaxgetappbranches`;
              return (
                K()
                  .get(i, { withCredentials: !0, cancelToken: o.token })
                  .then((r) => {
                    if (!o.token.reason) {
                      const c = r?.data?.success == Fe.R;
                      n(
                        c
                          ? r.data.branches.sort((d, u) => u.date - d.date)
                          : [],
                      );
                    }
                  })
                  .catch((r) => {
                    if (!o.token.reason) {
                      const c = (0, ye.H)(r);
                      console.error("useBranchInfo: " + c.strErrorMsg, c);
                    }
                  }),
                () => o.cancel("useBranchInfo: unmounting")
              );
            }, [a]),
            t
          );
        }
        function Ko(a) {
          const n = new Date(a.date * 1e3).toLocaleDateString((0, Mt.J)());
          return a.branch
            ? (0, s.we)(
                "#EventEditor_AssociateBuildBranch",
                a.branch,
                a.build_id,
                n,
              )
            : (0, s.we)(
                "#EventEditor_AssociateBuildDefaultBranch",
                a.build_id,
                n,
              );
        }
        const Zo = (a) => {
          const { editModel: t, closeModal: n } = a,
            o = Jo(t.GetEventModel().appid),
            [i, l] = g.useState(void 0),
            [r, c, d] = Vo(t),
            u = () => {
              d(i?.build_id, i?.branch), n();
            };
          if (o?.length && i === void 0) {
            const S = o.find((v) => v.branch == "");
            S && l(S);
          }
          const p = !!o,
            m = new Array();
          return (
            m.push({
              label: (0, s.we)("#EventEditor_AssociateBuildClear"),
              data: null,
            }),
            o?.forEach((S) => {
              m.push({ label: Ko(S), data: S });
            }),
            (0, e.jsx)(ve.tH, {
              children: (0, e.jsx)(y.x_, {
                onEscKeypress: n,
                children: (0, e.jsxs)(_.UC, {
                  children: [
                    (0, e.jsx)(_.Y9, {
                      children: (0, s.we)("#EventEditor_AssociateBuildDialog"),
                    }),
                    (0, e.jsxs)(_.nB, {
                      children: [
                        (0, e.jsx)(_.a3, {
                          children: (0, s.we)(
                            "#EventEditor_AssociateBuildDialogDesc",
                          ),
                        }),
                        p &&
                          (0, e.jsx)(_.m, {
                            rgOptions: m,
                            selectedOption: i,
                            onChange: (S) => l(S.data),
                          }),
                        !p && (0, e.jsx)(N.t, {}),
                      ],
                    }),
                    (0, e.jsx)(_.wi, {
                      children: (0, e.jsx)(_.CB, {
                        onCancel: n,
                        bOKDisabled: !p,
                        onOK: u,
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
        var lt = h(24642);
        const qo = (0, w.PA)(function (t) {
          const {
              eventModel: n,
              appid_or_vanity_str: o,
              bShowGameName: i,
              bShowEventMetaDataSizes: l,
            } = t,
            [r, c] = g.useState(null),
            d = g.useRef(!1),
            u = g.useCallback((et) => {
              (d.current = !1), c(et);
            }, []),
            p = g.useCallback(
              (et) => {
                et.target instanceof HTMLButtonElement ||
                  et.target instanceof HTMLAnchorElement ||
                  (u("edit"), et.stopPropagation());
              },
              [u],
            ),
            m = g.useCallback((et) => {
              et.stopPropagation();
            }, []),
            S = n.GID,
            v = n.bOldAnnouncement;
          if (r && !d.current)
            switch (((d.current = !0), r)) {
              case "clone":
                return (0, e.jsx)(Ae.rd, { push: !0, to: Y.GY.Edit(o, "") });
              case "edit":
                return (0, e.jsx)($.OG, {
                  eventModel: n,
                  route: $.PH.k_eCommunityEdit,
                });
              case "view":
                return n.BIsVisibleEvent()
                  ? (0, e.jsx)($.OG, { eventModel: n, route: $.PH.k_eView })
                  : (0, e.jsx)($.OG, {
                      eventModel: n,
                      route: $.PH.k_eCommunityPreview,
                    });
              default:
                console.log("EventDisplayTile - Unexpected Case - " + r);
            }
          let E = (0, T.sfN)(f.TS.LANGUAGE);
          n.BIsLanguageValidForRealms(E) ||
            (E = n.BInRealmGlobal() ? T.Bhc : T.ZLm);
          let D = n.GetNameWithFallback(E);
          const C = n.BHasSubTitle(E),
            M = !0,
            z = n.BHasSaleEnabled(),
            k = n.visibility_state != A.zv.k_EEventStateUnpublished,
            le = n.visibility_state != A.zv.k_EEventStateVisible,
            me = n.visibility_state == A.zv.k_EEventStateUnlisted,
            Ie = n.BShowLibrarySpotlight(!0),
            ze = k && le && !me;
          i && (D = (qe.A.Get().GetApp(n.appid)?.GetName() || "") + ": " + D);
          const pt =
              n.BIsPartnerEvent() &&
              n.BIsVisibleEvent() &&
              ie.Uq.GetStatsFor(n.clanSteamID, S),
            Gt = Q.ac.GetOGGClanInfo(n.appid),
            jt = !!(
              v &&
              Gt &&
              Gt.is_ogg &&
              Gt.clanAccountID != n.announcementClanSteamID.GetAccountID()
            );
          return (0, e.jsx)(ve.tH, {
            children: (0, e.jsxs)("div", {
              className: (0, j.A)({
                [Z.TileContainer]: !0,
                [Z.TileAgeAppropriate]: M,
                [Z.TileAgeNotAppropriate]: !M,
                [Z.ShowEventMetaDataSizes]: l,
                [Z.ShowLibrarySpotlight]: Ie,
              }),
              children: [
                Ie && (0, e.jsx)(Xo, {}),
                (0, e.jsxs)("div", {
                  className: Z.TileEventRow,
                  children: [
                    (0, e.jsx)(tl, {
                      fnOnFallbackClick: p,
                      lang: E,
                      eventModel: n,
                    }),
                    (0, e.jsx)("div", {
                      className: Z.TileTextContainer,
                      onClick: p,
                      children: (0, e.jsxs)("div", {
                        className: Z.TileDescriptionContainer,
                        children: [
                          (0, e.jsxs)("div", {
                            style: { display: "flex" },
                            children: [
                              (0, e.jsx)("div", {
                                className: Z.TileTextAppName,
                                children: D,
                              }),
                              (0, e.jsxs)("div", {
                                className: Z.TileTextEventType,
                                children: [
                                  n.GetCategoryAsString(!0),
                                  z &&
                                    (0, e.jsxs)("span", {
                                      className: Z.TileHasSale,
                                      children: [
                                        " | ",
                                        (0, s.we)(
                                          "#EventEditor_Status_HasSale",
                                        ),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          C && !1,
                          (0, e.jsxs)("div", {
                            className: F.ContainerSpaceBetween,
                            children: [
                              (0, e.jsxs)("div", {
                                className: Z.TileTextStartsIn,
                                children: [
                                  (0, e.jsx)(Ze.K4, {
                                    dateAndTime:
                                      n.GetStartTimeAndDateUnixSeconds(),
                                    bSingleLine: !0,
                                  }),
                                  !le && k && (0, e.jsx)($o, { eventModel: n }),
                                  n.BHasTag("auto_rssfeed") &&
                                    (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("br", {}),
                                        (0, e.jsx)("a", {
                                          href:
                                            f.TS.STORE_BASE_URL +
                                            "curator/" +
                                            n.clanSteamID.GetAccountID() +
                                            "/admin/manage_rss/",
                                          children:
                                            " " +
                                            (0, s.we)(
                                              "#EventEditor_Status_FromRSSFeed",
                                            ),
                                        }),
                                      ],
                                    }),
                                  (0, e.jsx)(Ks, {
                                    eventModel: n,
                                    bAllowUpdate: !1,
                                  }),
                                ],
                              }),
                              !!pt &&
                                (0, e.jsxs)("div", {
                                  className: Z.TileStats,
                                  children: [
                                    (0, s.PP)(
                                      "#EventDashBoard_Summary_Tile_Impressions",
                                      (0, e.jsx)("span", {
                                        children: (0, lt.D)(
                                          pt.m_stats.total_showm,
                                        ),
                                      }),
                                    ),
                                    (0, e.jsx)("br", {}),
                                    (0, s.PP)(
                                      "#EventDashBoard_Summary_Tile_Read",
                                      (0, e.jsx)("span", {
                                        children: (0, lt.D)(
                                          pt.m_stats.total_read,
                                        ),
                                      }),
                                    ),
                                  ],
                                }),
                            ],
                          }),
                          ze && (0, e.jsx)(el, { eventModel: n }),
                          jt
                            ? (0, e.jsxs)("div", {
                                className: Z.TileButtonContainer,
                                onClick: m,
                                children: [
                                  (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#EventEditor_DataFromConnectAnnouncement",
                                    ),
                                  }),
                                  (0, e.jsx)($.tj, {
                                    className: (0, j.A)(Z.ManageButton, Z.Edit),
                                    eventModel: n,
                                    route: $.PH.k_eView,
                                    children: (0, s.we)("#Button_ViewPage"),
                                  }),
                                ],
                              })
                            : (0, e.jsx)(al, { fnOnGotoPage: u, ...t }),
                          l &&
                            (0, e.jsx)(oe.Eb, {
                              requireAdmin: !0,
                              clanSteamID: n.clanSteamID,
                              children: (0, e.jsx)(il, { eventModel: n }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        });
        function Xo() {
          return (0, e.jsxs)("div", {
            className: Z.PartnerEventFeaturedHeader,
            children: [
              (0, s.we)("#EventDisplay_Visible_Featured"),
              (0, e.jsx)(xe.he, {
                toolTipContent: (0, s.we)(
                  "#EventDisplay_Visible_Featured_Tooltip",
                ),
                children: "\xA0(?)",
              }),
            ],
          });
        }
        const $o = (0, w.PA)(function (t) {
            const { eventModel: n } = t,
              o = ae.HD.GetTimeNowWithOverride();
            return n.GetStartTimeAndDateUnixSeconds() > o
              ? (0, e.jsx)("span", {
                  className: Z.EventStateUpcoming,
                  children: (0, s.we)("#EventDisplay_Upcoming"),
                })
              : (0, Qt.JS)(n.type) && n.GetEndTimeAndDateUnixSeconds() > o
                ? (0, e.jsx)("span", {
                    className: Z.EventStateActive,
                    children: (0, s.we)("#EventDisplay_Active"),
                  })
                : n.GetStartTimeAndDateUnixSeconds() > o + 3600
                  ? (0, e.jsx)("span", {
                      className: Z.EventStateRecent,
                      children: (0, s.we)("#EventDisplay_RecentlyActive"),
                    })
                  : null;
          }),
          el = (0, w.PA)(function (t) {
            const { eventModel: n } = t;
            return n.visibilityStartTime == n.startTime
              ? (0, e.jsx)("div", {
                  className: Z.TileTextStartsIn,
                  children: (0, s.we)(
                    "#EventEditor_Status_WillBeVisible_EventStart",
                  ),
                })
              : (0, e.jsx)("div", {
                  className: Z.TileTextStartsIn,
                  children: (0, s.PP)(
                    "#EventEditor_Status_WillBeVisible_At",
                    (0, e.jsx)(Ze.K4, {
                      dateAndTime: n.GetVisibilityStartTimeAndDateUnixSeconds(),
                      bSingleLine: !0,
                    }),
                  ),
                });
          });
        function tl(a) {
          const { fnOnFallbackClick: t, eventModel: n, lang: o } = a;
          let l = [(0, Uo.m0)(n, "capsule", o)];
          return (0, e.jsx)("div", {
            className: Z.TileImageCtn,
            onClick: (r) => t(r),
            children: (0, e.jsx)(zo.o, { className: Z.TileImage, srcs: l }),
          });
        }
        const al = (0, w.PA)(function (t) {
          const { eventModel: n, fnOnGotoPage: o, refresh: i } = t,
            l = g.useCallback((m) => {
              m.stopPropagation();
            }, []),
            r = g.useCallback(() => {
              o("view");
            }, [o]),
            c = n.bOldAnnouncement,
            d = n.visibility_state != A.zv.k_EEventStateVisible,
            u = n.visibility_state == A.zv.k_EEventStateUnlisted,
            p = n.visibility_state != A.zv.k_EEventStateUnpublished;
          return (0, e.jsxs)("div", {
            className: Z.TileButtonContainer,
            onClick: l,
            children: [
              !c &&
                (0, e.jsx)($.tj, {
                  className: (0, j.A)(Z.ManageButton, Z.Edit),
                  eventModel: n,
                  route: $.PH.k_eCommunityEdit,
                  onClick: l,
                  children: (0, s.we)("#Button_Edit"),
                }),
              c &&
                (0, e.jsx)($.tj, {
                  className: (0, j.A)(Z.ManageButton, Z.Edit),
                  eventModel: n,
                  route: $.PH.k_eCommunityMigrate,
                  onClick: l,
                  children: (0, e.jsx)(xe.he, {
                    toolTipContent: (0, s.we)(
                      "#EventEditor_Button_MigrateAndEdit_Announcement_ttip",
                    ),
                    children: (0, s.we)("#EventEditor_Button_MigrateAndEdit"),
                  }),
                }),
              d &&
                !u &&
                (0, e.jsx)($.tj, {
                  className: (0, j.A)(Z.ManageButton, Z.View),
                  eventModel: n,
                  route: $.PH.k_eCommunityPreview,
                  onClick: l,
                  children: (0, e.jsx)(xe.he, {
                    toolTipContent: (0, s.we)(
                      "#EventEditor_Button_PreviewButton_ttip",
                    ),
                    children: (0, s.we)("#EventDisplay_Preview"),
                  }),
                }),
              (!d || u) &&
                (0, e.jsx)($.tj, {
                  className: (0, j.A)(Z.ManageButton, Z.View),
                  eventModel: n,
                  route: $.PH.k_eView,
                  onClick: l,
                  children: (0, s.we)("#EventDisplay_View"),
                }),
              !p &&
                !c &&
                (0, e.jsx)(nl, { eventModel: n, OnPublishSuccess: r }),
              (0, e.jsx)("div", { className: Z.Spacer, children: "\xA0" }),
              (0, e.jsx)(Ro, { eventModel: n, fnOnGotoPage: o }),
              (0, e.jsx)(sl, { eventModel: n, refresh: i }),
            ],
          });
        });
        function nl(a) {
          const { eventModel: t, OnPublishSuccess: n } = a,
            [o, i] = g.useState({ kind: "none" }),
            l = g.useCallback(() => i({ kind: "none" }), []),
            r = (0, oe.Dd)(t.clanSteamID, !0),
            c = g.useCallback(
              (d) => {
                d.stopPropagation(),
                  G.mh
                    .LoadEditorModel(t.clanSteamID, t.GID)
                    .then(() => {
                      i({ kind: "publish" });
                    })
                    .catch((u) => {
                      const p = (0, ye.H)(u);
                      i({ kind: "error", strMessage: p.strErrorMsg });
                    });
              },
              [t],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, j.A)(Z.ManageButton, Z.Publish),
                onClick: c,
                children: (0, s.we)("#EventDisplay_Publish"),
              }),
              (0, e.jsx)(B.EN, {
                active: o.kind == "publish",
                children:
                  o.kind == "publish" &&
                  (0, e.jsx)(_a.i, {
                    editModel: G.mh.GetEditModel(),
                    partnerEventEditorStore: G.mh,
                    bValveAdmin: r,
                    closeModal: l,
                    OnPublishSuccess: n,
                  }),
              }),
              (0, e.jsx)(B.EN, {
                active: o.kind == "error",
                children:
                  o.kind == "error" &&
                  (0, e.jsx)(B.KG, {
                    strTitle: (0, s.we)("#EventEditor_PublishingError"),
                    bAlertDialog: !0,
                    bDestructiveWarning: !0,
                    strDescription: (0, s.we)(
                      "#EventEditor_PublishingError_Desc",
                      o.strMessage,
                    ),
                    closeModal: l,
                  }),
              }),
            ],
          });
        }
        function sl(a) {
          const { eventModel: t, refresh: n } = a,
            [o, i, l] = (0, Ho.uD)(),
            r = g.useCallback(
              (c) => {
                c.stopPropagation(), i();
              },
              [i],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(xe.he, {
                toolTipContent: (0, s.we)(
                  "#EventEditor_Button_DeleteButton_ttip",
                ),
                children: (0, e.jsx)("div", {
                  className: (0, j.A)(Z.ManageButton, Z.Delete),
                  onClick: r,
                  children: (0, s.we)("#Button_Delete"),
                }),
              }),
              (0, e.jsx)(B.EN, {
                active: o,
                children: (0, e.jsx)(Fo.p, {
                  eventModel: t,
                  partnerEventStore: G.mh,
                  closeModal: l,
                  onDeleteSuccessAndCloseDialog: n,
                }),
              }),
            ],
          });
        }
        function Zs(a, t) {
          if (!a || t <= 0) return [];
          const n = new Array();
          return (
            Object.keys(a).forEach((o) => {
              const i = a[o],
                l = JSON.stringify(i)?.length || 0;
              n.push({ key: o, size: l }),
                i &&
                  (typeof i == "object" || Array.isArray(i)) &&
                  l > 100 &&
                  Zs(i, t - 1).forEach((r) => {
                    n.push({ key: o + ":" + r.key, size: r.size });
                  });
            }),
            n
          );
        }
        const il = (a) => {
          const { eventModel: t } = a;
          if (!t?.jsondata) return null;
          const n = Zs(t.jsondata, 3);
          return (
            n.sort((i, l) => l.size - i.size),
            (0, e.jsxs)("div", {
              className: Z.MetaDataCtn,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    "Total Size: ",
                    JSON.stringify(t.jsondata)?.length?.toLocaleString(
                      (0, Mt.J)(),
                    ),
                  ],
                }),
                n
                  .slice(0, 10)
                  .map((i) =>
                    (0, e.jsxs)(
                      "div",
                      { children: [i.key, ": ", (0, lt.D)(i.size)] },
                      i.key,
                    ),
                  ),
              ],
            })
          );
        };
        var Dt = h(50974);
        const mn = 10,
          ol = (0, w.PA)((a) => {
            const { match: t } = a,
              [n, o] = g.useState(!1),
              [i, l] = g.useState(""),
              [r, c] = g.useState(""),
              [d, u] = g.useState(!1),
              [p, m] = g.useState(0),
              S = g.useRef(void 0),
              v = g.useMemo(() => new X.b(f.UF.CLANSTEAMID), []),
              E = g.useMemo(() => new Na.LU(), []),
              D = g.useMemo(() => K().CancelToken.source(), []),
              {
                bIsFetching: C,
                nHiddenEventCount: M,
                rgEventModels: z,
                fnRefetch: k,
              } = (0, G.lX)(v, !n),
              {
                rgClanEventData: le,
                bHasNextPage: me,
                fnFetchNextPage: Ie,
                bIsFetching: ze,
                bIsFetchingNextPage: pt,
                clanEventSummaryStatus: Gt,
                clanEventSummaryLoadError: jt,
                fnRefetch: et,
              } = (0, H.SG)(v, mn, D);
            g.useEffect(
              () => (k(), et(), () => D.cancel("EventListView to unload")),
              [D, et, k],
            );
            const Ga = ll(ze, C),
              Wn = (0, J.Sz)(ze),
              La = g.useMemo(() => {
                (0, Wt.wT)(
                  !z || z.every((at) => at != null),
                  "draftClanEvents has a null event",
                );
                const Me = (at) => d || at.GetEventType() != T.ajI,
                  tt = new Map(),
                  Ht = le?.pages
                    .flatMap((at) => at)
                    .map((at) => (0, ee.oE)(v, at)),
                  Ct = Ht?.filter(Me);
                Ct?.forEach((at) => tt.set(at.GID, at));
                const Pe = z?.filter(Me);
                Pe?.forEach((at) => tt.set(at.GID, at));
                const Vt = (Ht ?? []).length + (z ?? []).length;
                return (
                  m(Vt - (Ct ?? []).length - (Pe ?? []).length),
                  Array.from(tt.values())
                );
              }, [z, le?.pages, d, v]);
            g.useEffect(() => {
              const Me = La.filter(
                (tt) => !!(tt && tt.BIsVisibleEvent() && tt.BIsPartnerEvent()),
              ).map((tt) => tt.GID);
              Me.length > 0 && ie.Uq.LoadStatsForEvents(v, Me, D);
            }, [D, v, La]),
              g.useEffect(() => {
                if (Gt == "error") {
                  const Me = (0, ye.H)(jt);
                  (0, y.pg)(
                    (0, e.jsx)(B.KG, {
                      children: (0, s.we)(
                        "#Error_Description",
                        Me.errorCode,
                        Me.strErrorMsg,
                      ),
                    }),
                    window,
                  );
                }
              }, [jt, Gt]);
            const _t = (Me, tt) => {
                const Ht = [];
                let Ct = La;
                if (Ct?.length > 0) {
                  (Ct = Ct.slice().filter(
                    (Pe) =>
                      !(
                        Pe.visibility_state !== Me ||
                        (r &&
                          !Pe.GetNameWithFallback((0, T.sfN)(f.TS.LANGUAGE))
                            ?.toLocaleLowerCase()
                            .includes(r))
                      ),
                  )),
                    Ct.sort(
                      (Pe, Vt) => (
                        (0, Wt.wT)(
                          Pe !== Vt,
                          `Unexpected duplicates in the list: ${Pe} ${Vt}`,
                        ),
                        Pe.BShowLibrarySpotlight(!0) &&
                        !Vt.BShowLibrarySpotlight(!0)
                          ? -1
                          : !Pe.BShowLibrarySpotlight(!0) &&
                              Vt.BShowLibrarySpotlight(!0)
                            ? 1
                            : Vt.startTime - Pe.startTime
                      ),
                    );
                  for (const Pe of Ct)
                    Ht.push(
                      (0, e.jsx)(
                        qo,
                        {
                          appid_or_vanity_str: t.params.appid_or_vanity_str,
                          gid: Pe.GID,
                          eventModel: Pe,
                          bShowEventMetaDataSizes: n,
                          refresh: () => {
                            et(), k();
                          },
                        },
                        Pe.GID,
                      ),
                    );
                }
                for (let Pe = 0; Pe < tt - (Ct?.length ?? 0); Pe++)
                  Ht.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: Z.TileContainer,
                        children: (0, e.jsx)(Eo.h, {
                          capsules_per_row: [1],
                          is_event_dash_row: !0,
                        }),
                      },
                      `tile_${Me}_ghost_${Pe}`,
                    ),
                  );
                return Ht;
              },
              po = g.useCallback(
                (Me) => {
                  Me && !pt && Ie();
                },
                [pt, Ie],
              );
            g.useEffect(() => {
              E.Schedule(200, () => c(i?.trim().toLocaleLowerCase()));
            }, [E, i]);
            const en = _t(A.zv.k_EEventStateUnpublished, C ? M : 0),
              tn = _t(A.zv.k_EEventStateStaged),
              an = _t(A.zv.k_EEventStateUnlisted),
              bt = _t(A.zv.k_EEventStateVisible),
              _o = g.useMemo(() => {
                if (!bt) return;
                if (ze || !me) return bt;
                const Me = bt.length >= mn ? bt.length - mn : bt.length,
                  tt = (0, e.jsx)(
                    xo.J,
                    { trigger: "repeated", onVisibilityChange: po },
                    "visibilityTracker",
                  );
                return [...bt.slice(0, Me), tt, ...bt.slice(Me)];
              }, [me, ze, bt, po]),
              Dm =
                en.length > 0 ||
                tn.length > 0 ||
                an.length > 0 ||
                bt.length > 0;
            return (0, e.jsx)(ve.tH, {
              children: (0, e.jsxs)("div", {
                ref: S,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, j.A)("maincontent", De().EventDashboardCtn),
                    children: [
                      (0, e.jsx)(rl, {
                        appid_or_vanity_str: t.params.appid_or_vanity_str,
                      }),
                      (0, e.jsxs)(oe.Eb, {
                        requireAdmin: !0,
                        clanSteamID: v,
                        children: [
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(
                              "maincontent",
                              De().EventDashboardCtn,
                              De().EventDashAdminToolsCtn,
                              x().FlexRowContainer,
                            ),
                            children: [
                              (0, e.jsx)(_.Yh, {
                                label: "Show Event Metadata Size",
                                tooltip:
                                  "Surfaces the size of the biggest sections in the event's metadata",
                                onChange: o,
                                checked: n,
                              }),
                              (0, e.jsx)(_.$n, {
                                onClick: (Me) =>
                                  (0, y.pg)((0, e.jsx)(jo, {}), (0, ue.uX)(Me)),
                                children: "Show Publishing Audit History",
                              }),
                            ],
                          }),
                          v.GetAccountID() == Dt.bv &&
                            (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("a", {
                                  href: "https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m",
                                  target: "_blank",
                                  children: "Content Hub Graphana Stats Page",
                                }),
                                (0, e.jsx)("br", {}),
                                (0, e.jsx)("a", {
                                  href: `${f.TS.COMMUNITY_BASE_URL}groups/store_contenthubs/partnerevents/edit/3016840454305565993?tab=sale`,
                                  children:
                                    "Open 'Default Contnet Hub Sale Page Editor'",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (ze || Dm || i.length > 0) &&
                    (0, e.jsx)("div", {
                      className: (0, j.A)(
                        De().EventDashboardCtn,
                        De().EventDashboardSearchCtn,
                        "maincontent",
                      ),
                      children: (0, e.jsx)(_.pd, {
                        type: "text",
                        label: (0, s.we)("#EventCalendar_UniversalSearch"),
                        value: i,
                        onChange: (Me) => l(Me.target.value),
                      }),
                    }),
                  !d &&
                    p > 0 &&
                    (0, e.jsx)("div", {
                      className: (0, j.A)(
                        De().EventDashboardCtn,
                        "maincontent",
                      ),
                      children: (0, e.jsx)(oe.Eb, {
                        requireAdmin: !0,
                        clanSteamID: v,
                        children: (0, e.jsx)("a", {
                          onClick: () => u(!0),
                          children: `Show ${p} hidden Creator Home events`,
                        }),
                      }),
                    }),
                  C &&
                    (0, e.jsx)(N.t, {
                      position: "center",
                      string: (0, s.we)("#Loading"),
                    }),
                  !Ga &&
                    (0, e.jsxs)("div", {
                      className: De().MainLists,
                      children: [
                        en.length > 0 &&
                          !C &&
                          (0, e.jsx)("div", {
                            className: (0, j.A)(De().Section, De().Unpublished),
                            children: (0, e.jsxs)("div", {
                              className: (0, j.A)(
                                "maincontent",
                                "eventlist",
                                De().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: De().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)(
                                      "#EventDisplay_Unpublished_Title",
                                    ),
                                    (0, e.jsx)(W.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Unpublished_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                en.length > 0 && en,
                              ],
                            }),
                          }),
                        tn.length > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, j.A)(De().Section, De().Staged),
                            children: (0, e.jsxs)("div", {
                              className: (0, j.A)(
                                "maincontent",
                                "eventlist",
                                De().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: De().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)("#EventDisplay_Stage_Title"),
                                    (0, e.jsx)(W.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Stage_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                tn.length > 0 && tn,
                              ],
                            }),
                          }),
                        an.length > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, j.A)(De().Section, De().Staged),
                            children: (0, e.jsxs)("div", {
                              className: (0, j.A)(
                                "maincontent",
                                "eventlist",
                                De().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: De().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)("#EventDisplay_Unlisted_Title"),
                                    (0, e.jsx)(W.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Unlisted_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                an.length > 0 && an,
                              ],
                            }),
                          }),
                        (0, e.jsx)("div", {
                          className: (0, j.A)(
                            De().Section,
                            De().DisplaySectionHeaderContainer,
                            De().Visible,
                          ),
                          children: (0, e.jsxs)("div", {
                            className: (0, j.A)(
                              "maincontent",
                              "eventlist",
                              De().EventDashboardCtn,
                            ),
                            children: [
                              (0, e.jsx)("div", {
                                className: De().DisplaySectionHeader,
                                children: (0, s.we)(
                                  "#EventDisplay_Visible_Title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: De().DisplaySectionSubHeader,
                                children: (0, s.we)(
                                  "#EventDisplay_Visible_Title_WithRange",
                                ),
                              }),
                              _o,
                              !ze &&
                                !_o &&
                                (0, e.jsx)("div", {
                                  children: (0, s.we)("#EventDisplay_NoPublic"),
                                }),
                              (ze || (Wn && me)) &&
                                (0, e.jsx)(N.t, {
                                  position: "center",
                                  string: (0, s.we)("#Loading"),
                                }),
                              !me &&
                                (0, e.jsx)("div", {
                                  children: (0, s.we)(
                                    "#EventDisplay_AllPublicShown",
                                  ),
                                }),
                              jt &&
                                (0, e.jsx)("div", {
                                  children: (0, s.we)(
                                    "#EventDisplay_HitErrorInfiniteScroll",
                                  ),
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            });
          });
        function ll(a, t) {
          const [n, o] = g.useState(!0);
          return (
            (0, J.Z3)(() => o(!1), 4e3),
            g.useEffect(() => {
              !a && !t && o(!1);
            }, [t, a]),
            n
          );
        }
        const rl = (0, w.PA)((a) => {
            const { appid_or_vanity_str: t } = a,
              n = new X.b(f.UF.CLANSTEAMID),
              o = Q.ac.GetClanInfoByClanAccountID(n.GetAccountID()),
              i = ie.Uq.GetTotalStats(n);
            return (0, e.jsxs)("div", {
              className: x().EventDashboardHeader,
              children: [
                (0, e.jsx)(Le.xL, { identifier: t }),
                (0, e.jsxs)("div", {
                  className: x().EventDashboardTitles,
                  children: [
                    (0, e.jsxs)("div", {
                      className: x().maintitle,
                      children: [
                        (0, s.we)("#EventDisplay_Events"),
                        (0, e.jsx)("div", {
                          className: x().subtitle,
                          children: (0, s.we)("#EventDisplay_Edit_Desc"),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: x().EventDashboardActions,
                      children: (0, e.jsx)(R.N_, {
                        className: (0, j.A)(x().Button, x().Primary),
                        to: Y.GY.Create(t),
                        onClick: () => G.mh.ResetModel(),
                        children: (0, s.we)("#EventDisplay_CreateNewEvent"),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: x().EventDashboardStatsCtn,
                  children: (0, e.jsx)(Yn, {
                    summary: i.m_stats,
                    clanSteamID: n,
                    bIsAllowedInLibrary: o?.is_ogg,
                  }),
                }),
              ],
            });
          }),
          qs = (0, Ma.L)(ol);
        var dl = h(85122),
          cl = h(77477),
          ul = h(57161),
          hl = h(30825),
          Xs = h(58483),
          ml = h(98112),
          pl = h(78745),
          _l = Object.defineProperty,
          vl = Object.getOwnPropertyDescriptor,
          gl = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? vl(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && _l(t, n, i), i;
          };
        let pn = class extends g.Component {
          m_clanSteamID = new X.b(f.UF.CLANSTEAMID);
          componentDidMount() {
            G.mh.GetEditModel() &&
              this.props.mode === "view" &&
              G.mh.GetEditModel().ClearDirty();
          }
          componentDidUpdate(a) {
            G.mh.GetEditModel() &&
              this.props.mode === "view" &&
              G.mh.GetEditModel().ClearDirty();
          }
          render() {
            const { mode: a } = this.props;
            if (a === "view") {
              let t = G.mh.GetEditModel().GetEventModel(),
                n = (0, T.sfN)(f.TS.LANGUAGE);
              return t.BHasSaleEnabled()
                ? (0, e.jsx)(ve.tH, {
                    children: (0, e.jsx)(pl._, {
                      eventModel: t,
                      bIsPreview: !0,
                      language: n,
                    }),
                  })
                : (0, e.jsx)(Xs.sU, {
                    children: (o) =>
                      (0, e.jsx)(dl.jA, {
                        event: t,
                        lang: n,
                        emoticonStore: o,
                        adminPanel: (0, e.jsx)(ul.g, {
                          eventModel: t,
                          partnerEventStore: G.mh,
                        }),
                        otherEventRow: (0, e.jsx)(hl.r, {
                          clanAccountID: t.clanSteamID.GetAccountID(),
                          trackingLocation: ml.Tc.My,
                          gidAnnouncement: t.AnnouncementGID,
                          partnerEventStore: G.Av,
                          bViewAllShowInfiniteScroll: !t.BIsOGGEvent(),
                        }),
                      }),
                  });
            } else
              return (0, e.jsx)(cl.l, {
                editModel: G.mh.GetEditModel(),
                appid_or_vanity_str:
                  this.props.match.params.appid_or_vanity_str,
                gid: this.props.match.params.gid,
                bDisplaySale: a === "previewsale",
              });
          }
        };
        pn = gl([w.PA], pn);
        const _n = (0, Ma.L)(pn);
        var qt = h(33512),
          $s = h(21438),
          Sl = h(39093),
          Xt = h(62616),
          L = h(65946);
        const El = 0,
          Oa = 1,
          Pa = 2;
        var xl = ((a) => (
            (a[(a.k_EClanAccountTypePrivate = 0)] =
              "k_EClanAccountTypePrivate"),
            (a[(a.k_EClanAccountTypePublic = 1)] = "k_EClanAccountTypePublic"),
            (a[(a.k_EClanAccountTypeLocked = 2)] = "k_EClanAccountTypeLocked"),
            (a[(a.k_EClanAccountTypeDisabled = 3)] =
              "k_EClanAccountTypeDisabled"),
            (a[(a.k_EClanAccountTypeOfficial = 4)] =
              "k_EClanAccountTypeOfficial"),
            (a[(a.k_EClanAccountTypeDeleted = 5)] =
              "k_EClanAccountTypeDeleted"),
            (a[(a.k_EClanAccountTypeValveOfficial = 6)] =
              "k_EClanAccountTypeValveOfficial"),
            (a[(a.k_EClanAccountTypeInviteOnly = 7)] =
              "k_EClanAccountTypeInviteOnly"),
            a
          ))(xl || {}),
          fl = ((a) => (
            (a[(a.k_EAMFindAccountTypeInvalid = 0)] =
              "k_EAMFindAccountTypeInvalid"),
            (a[(a.k_EAMFindAccountTypeAccountName = 1)] =
              "k_EAMFindAccountTypeAccountName"),
            (a[(a.k_EAMFindAccountTypeEmail = 2)] =
              "k_EAMFindAccountTypeEmail"),
            (a[(a.k_EAMFindAccountTypePersonaName = 3)] =
              "k_EAMFindAccountTypePersonaName"),
            (a[(a.k_EAMFindAccountTypeURL = 4)] = "k_EAMFindAccountTypeURL"),
            (a[(a.k_EAMFindAccountTypeAllOnline_Obsolete = 5)] =
              "k_EAMFindAccountTypeAllOnline_Obsolete"),
            (a[(a.k_EAMFindAccountTypeAll = 6)] = "k_EAMFindAccountTypeAll"),
            (a[(a.k_EAMFindClanTypeClanName = 7)] =
              "k_EAMFindClanTypeClanName"),
            (a[(a.k_EAMFindClanTypeURL = 8)] = "k_EAMFindClanTypeURL"),
            (a[(a.k_EAMFindClanTypeOfficialURL = 9)] =
              "k_EAMFindClanTypeOfficialURL"),
            (a[(a.k_EAMFindClanTypeAppID = 10)] = "k_EAMFindClanTypeAppID"),
            (a[(a.k_EAMFindCheckAccountNameInUse = 11)] =
              "k_EAMFindCheckAccountNameInUse"),
            (a[(a.k_EAMFindCheckEmailAddressInUse = 12)] =
              "k_EAMFindCheckEmailAddressInUse"),
            (a[(a.k_EAMNotFindCreateAccount = 13)] =
              "k_EAMNotFindCreateAccount"),
            (a[(a.k_EAMFindClanTypeCreatorVanity = 14)] =
              "k_EAMFindClanTypeCreatorVanity"),
            a
          ))(fl || {}),
          Qe = h(60480),
          ei = h(1880),
          jl = h(64641),
          $t = h.n(jl),
          ea = h(16369),
          vn = h(95682),
          Oe = h(79573),
          bl = h(25359),
          re = h.n(bl),
          gn = h(21418),
          Sn = h(47689),
          Cl = h(26759),
          ti = h(46066),
          Bt = h(54016),
          Ne = h(29630);
        const va = (a) => {
            let t = null;
            a.artworkType === "capsule"
              ? (t = (0, e.jsxs)(g.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_capsule_1"),
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${Ne.zU.GetBaseURL()}31721797/2ef00d65527edf9aecdaddee086b0f5ee0cc2fe6.jpg`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${Ne.zU.GetBaseURL()}7614223/fe3aa1776d96e4aa215edbdacc363a9ed005213e.png`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${Ne.zU.GetBaseURL()}27000850/dc17534edaabe8d351fdfb1c6186c4eb3e637c8d.png`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${Ne.zU.GetBaseURL()}31013613/a98ecca7730e4857cb5f83e50f3304ce13bf56bf.jpg`,
                        }),
                      ],
                    }),
                  ],
                }))
              : a.artworkType === "background"
                ? (t = (0, e.jsxs)(g.Fragment, {
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, s.we)("#selectimage_tip_background_1"),
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${Ne.zU.GetBaseURL()}3703047/72feb03fa4eced13596f0ff7b9ec434865cb73e4.png`,
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${Ne.zU.GetBaseURL()}5193306/62436147b454715822a198a2767e5c7a8560617e.jpg`,
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${Ne.zU.GetBaseURL()}31721797/77cbe3f768e16b149c78f127b09c047826646ba5.png`,
                      }),
                    ],
                  }))
                : a.artworkType === "spotlight" &&
                  (t = (0, e.jsx)(g.Fragment, {
                    children: (0, e.jsxs)("div", {
                      className: re().AssetExampleSpotlightCtn,
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, s.we)(
                            "#selectimage_tip_store_spotlight_2",
                          ),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, s.we)(
                            "#selectimage_tip_store_spotlight_3",
                          ),
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "100%" },
                          src: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/spotlight_example_3.jpg",
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "100%" },
                          src: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/spotlight_example_4.jpg",
                        }),
                      ],
                    }),
                  }));
            const n = (o) => {
              (0, y.pg)(
                (0, e.jsx)(B.o0, {
                  onOK: () => {},
                  onCancel: () => {},
                  bAlertDialog: !0,
                  strTitle: (0, s.we)(
                    `#EventEditor_ExampleTitle_${a.artworkType}`,
                  ),
                  strDescription: (0, s.we)("#EventEditor_ExampleDescription"),
                  children: o,
                }),
                window,
              );
            };
            return t
              ? (0, e.jsxs)("div", {
                  className: x().FlexRowContainer,
                  children: [
                    (0, e.jsx)(_.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: () => n(t),
                      children: (0, s.we)("#EventEditor_ViewExamples"),
                    }),
                    (0, e.jsx)(_.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: (o) =>
                        (0, te.EP)(
                          o,
                          "https://partner.steamgames.com/doc/store/assets/eventassets",
                        ),
                      children: (0, s.we)("#EventEditor_Learn_More"),
                    }),
                  ],
                })
              : null;
          },
          Ra = (a) => {
            let t = null;
            a.artworkType === "sale_header"
              ? (t = (0, e.jsxs)(g.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_sale_header_1"),
                    }),
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_sale_header_2"),
                    }),
                    (0, e.jsxs)("div", {
                      className: re().SaleHeaderExampleCtn,
                      children: [
                        (0, e.jsxs)("div", {
                          className: re().SaleHeaderExampleCol,
                          children: [
                            (0, e.jsx)("a", {
                              href: `${Ne.zU.GetBaseURL()}4/a7dcfaf476e3351bb34b8af3e423a6e6cd652a04.jpg`,
                              target: "_blank",
                              children: (0, e.jsx)("img", {
                                src: `${Ne.zU.GetBaseURL()}4/a7dcfaf476e3351bb34b8af3e423a6e6cd652a04.jpg`,
                              }),
                            }),
                            (0, e.jsx)("a", {
                              href: `${Ne.zU.GetBaseURL()}4/502e9a6d3bb266b4274a946192bb960f15e1d136.png`,
                              target: "_blank",
                              children: (0, e.jsx)("img", {
                                src: `${Ne.zU.GetBaseURL()}4/502e9a6d3bb266b4274a946192bb960f15e1d136.png`,
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: re().SaleHeaderExampleCol,
                          children: (0, e.jsx)("a", {
                            href: `${Ne.zU.GetBaseURL()}4/0b6edf0575cc418172fc9d7614ae5c2881d1dcc0.jpg`,
                            target: "_blank",
                            children: (0, e.jsx)("img", {
                              src: `${Ne.zU.GetBaseURL()}4/0b6edf0575cc418172fc9d7614ae5c2881d1dcc0.jpg`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }))
              : a.artworkType === "product_banner" &&
                (t = (0, e.jsxs)(g.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)(
                        "#selectimage_tip_sale_product_banner",
                      ),
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${Ne.zU.GetBaseURL()}4/8298b4d6ebf6f6dd2355054431d339ec9dcafdef.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${Ne.zU.GetBaseURL()}4/cc803d270bf7f47ee508bbadf14577bbfe5f6500.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${Ne.zU.GetBaseURL()}4/309cb650beb92e00ae352710387832aea78433ef.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${Ne.zU.GetBaseURL()}4/ecd819245dd4aca57aed76f714a28b2356ad90f2.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${Ne.zU.GetBaseURL()}4/7375e5c0f2adb7241870acfa931e167ff13c669f.gif`,
                    }),
                  ],
                }));
            const n = (o) => {
              (0, y.pg)(
                (0, e.jsx)(B.o0, {
                  onOK: () => {},
                  onCancel: () => {},
                  bAlertDialog: !0,
                  strTitle: (0, s.we)(
                    `#EventEditor_ExampleTitle_${a.artworkType}`,
                  ),
                  strDescription: (0, s.we)("#EventEditor_ExampleDescription"),
                  children: o,
                }),
                window,
              );
            };
            return t
              ? (0, e.jsxs)("div", {
                  className: x().FlexRowContainer,
                  children: [
                    (0, e.jsx)(_.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: () => n(t),
                      children: (0, s.we)("#EventEditor_ViewExamples"),
                    }),
                    (0, e.jsx)(_.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: (o) =>
                        (0, te.EP)(
                          o,
                          "https://partner.steamgames.com/doc/marketing/event_tools/sales/tools",
                        ),
                      children: (0, s.we)("#EventEditor_Learn_More"),
                    }),
                    (0, e.jsx)("br", {}),
                  ],
                })
              : null;
          };
        var Ye = h(80738),
          wl = h(42440),
          Dl = h(83402),
          yl = h(93153),
          ta = h(61819),
          dt = h(36631),
          ga = h(46777),
          Ot = h(91512),
          yt = h(18197),
          Tl = h(8982);
        function Il(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            o = (0, L.q3)(() => n.jsondata.bAutoUpdateVanityURLForContentHub),
            i = (0, L.q3)(() => n.jsondata.sale_defines_specific_contenthub),
            l = (0, L.q3)(() => n.jsondata.sale_defines_temporary_contenthub),
            r = (0, L.q3)(() => n.BContentHubDiscountedOnly()),
            c = (0, L.q3)(() => n.jsondata.content_hub_restricted_width),
            d = (0, L.q3)(() => n.jsondata.ignore_item_browser_overrides),
            u = (0, L.q3)(() => n.jsondata.contenthub_override_artwork),
            p = (0, L.q3)(() => n.jsondata.contenthub_override_section_styles),
            m = (0, L.q3)(() => n.jsondata.contenthub_override_tab_styles),
            S = (0, L.q3)(() => n.jsondata.contenthub_override_tab_definitions),
            v = (0, L.q3)(
              () => n.jsondata.contenthub_override_item_browser_flavors,
            ),
            E = (0, L.q3)(
              () => n.jsondata.contenthub_override_item_browser_facets,
            ),
            D = (0, L.q3)(() => n.jsondata.contenthub_disable_overrides),
            C = (0, L.q3)(
              () => n.jsondata.contenthub_dlc_for_your_flavor_override,
            ),
            [M, z] = (0, g.useState)(
              () => n.jsondata.prune_list_optin_name?.length > 0,
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.JU, {
                style: { marginTop: "0px" },
                children: "Content Hub Specification",
              }),
              (0, e.jsx)(_.Yh, {
                label: "Auto update vanity URL based on configured content hub",
                checked: o,
                onChange: (k) => {
                  (n.jsondata.bAutoUpdateVanityURLForContentHub = k),
                    k && (0, yt.sL)(n.GetContentHub(), t),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.Yh, {
                label: "This is an individual content hub...",
                tooltip:
                  "If checked, this sale page will be used to render only a specific content hub. Check this if you are defining tabs/merchandising for some specific hub, or if you're defining a theme sale.",
                checked: i,
                onChange: (k) => {
                  (n.jsondata.sale_defines_specific_contenthub = k || void 0),
                    n.jsondata.bAutoUpdateVanityURLForContentHub &&
                      (0, yt.sL)(n.GetContentHub(), t),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              i && (0, e.jsx)(Al, { ...a }),
              (0, e.jsx)(_.Yh, {
                label: "This is a limited time sale event",
                tooltip:
                  "If checked, this sale page will be used when rendering content hubs only during the time period specified in the Options tab of the sale editor. Check this if you are defining a takeover for a seasonal sale, or if you're defining a theme sale.",
                checked: l,
                onChange: (k) => {
                  (n.jsondata.sale_defines_temporary_contenthub = k || void 0),
                    n.jsondata.bAutoUpdateVanityURLForContentHub &&
                      (0, yt.sL)(n.GetContentHub(), t),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.JU, {
                style: { marginTop: "16px" },
                children: "App Inclusion",
              }),
              (0, e.jsx)(_.Yh, {
                label: "Show discounted (and free-to-play) items only",
                checked: r,
                onChange: (k) => {
                  (n.jsondata.content_hub_discounted_only = k),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.Yh, {
                label: "Include/exclude items based on registration state... ",
                tooltip:
                  "If checked, this hub will include opted-in games and exclude pruned out games from the selected opt-in event. Typically used when defining a theme sale.",
                checked: M,
                onChange: (k) => {
                  z(k),
                    k || (n.jsondata.prune_list_optin_name = void 0),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              M && (0, e.jsx)(Gl, { ...a }),
              (0, e.jsx)(_.JU, {
                style: { marginTop: "16px" },
                children: "Overrides",
              }),
              (0, e.jsx)(_.Yh, {
                label: "Show restricted-width title and main carousel",
                checked: c,
                onChange: (k) => {
                  (n.jsondata.content_hub_restricted_width = k),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.Yh, {
                label: "Override artwork",
                tooltip:
                  "If checked, use artwork (background, fonts, colors, etc.) from this sale page instead of the artwork defined in the sale page it inherits from.",
                checked: u,
                onChange: (k) => {
                  (n.jsondata.contenthub_override_artwork = k),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.Yh, {
                label: "Override section styles",
                tooltip:
                  "If checked, for every section that exists in this sale page and the parent sale page, use section styles (colors, etc.) from this sale page instead of from the parent.",
                checked: p,
                onChange: (k) => {
                  (n.jsondata.contenthub_override_section_styles = k),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.Yh, {
                label: "Override tab styles",
                tooltip:
                  "If checked, and a tabs section exists in this sale page and the parent sale page, use tab styles (colors, fonts, etc.) from this sale page instead of from the parent.",
                checked: m,
                onChange: (k) => {
                  (n.jsondata.contenthub_override_tab_styles = k),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.Yh, {
                label: "Override tab definitions",
                tooltip:
                  "If checked, and a tabs section exists in this sale page and the parent sale page, use the tab definitions (names, filters, etc.) from this sale page instead of from the parent.",
                checked: S,
                onChange: (k) => {
                  (n.jsondata.contenthub_override_tab_definitions = k),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.Yh, {
                label: "Override item browser flavor tabs",
                tooltip:
                  "If checked, and an item browser section exists in this sale page and the parent sale page, use the flavor definitions (e.g. Popular, Recently Released, etc.) from this sale page instead of from the parent.",
                checked: v,
                onChange: (k) => {
                  (n.jsondata.contenthub_override_item_browser_flavors = k),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.Yh, {
                label:
                  "Ignore item browser tab overrides during sale takeovers",
                checked: d,
                onChange: (k) => {
                  (n.jsondata.ignore_item_browser_overrides = k),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.Yh, {
                label: "Override item browser facets",
                tooltip:
                  "If checked, and an item browser section exists in this sale page and the parent sale page, use the facet menu from this sale page instead of from the parent.",
                checked: E,
                onChange: (k) => {
                  (n.jsondata.contenthub_override_item_browser_facets = k),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(_.Yh, {
                label: "Disable override logic",
                tooltip:
                  "If checked, the sections defined in this sale page will be used as-is, instead of being combined with parent sale pages via the override logic.",
                checked: D,
                onChange: (k) => {
                  (n.jsondata.contenthub_disable_overrides = k),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(Tl.x, {
                strFlavor: C || "popular",
                fnSetFlavor: (k) => {
                  n.jsondata.contenthub_dlc_for_your_flavor_override = k;
                },
                strLabelOverride: "Override DLC For You filter/sort",
              }),
              (0, e.jsx)(Ll, { ...a }),
            ],
          });
        }
        function Al(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            o = (0, L.q3)(() => n.GetContentHubType()),
            i = (0, L.q3)(() => n.GetContentHubCategory()),
            l = (0, L.q3)(() => n.GetContentHubTag()),
            { contentHubNames: r } = (0, Dl._)(),
            c = (0, g.useMemo)(
              () => (r ? r.hubtypes.map((p) => ({ value: p, label: p })) : []),
              [r],
            ),
            d = (0, g.useMemo)(
              () =>
                r
                  ? Array.from(r.categories.keys()).map((p) => ({
                      value: p,
                      label: `${r.categories.get(p)} (${p})`,
                    }))
                  : [],
              [r],
            ),
            u = (0, g.useMemo)(
              () =>
                r
                  ? Array.from(r.tags.keys()).map((p) => ({
                      value: `${p}`,
                      label: `${r.tags.get(p)} (${p})`,
                    }))
                  : [],
              [r],
            );
          return (0, e.jsxs)("div", {
            style: { marginLeft: "32px", marginRight: "32px" },
            children: [
              (0, e.jsx)(_.JU, {
                children: (0, s.we)("#Sale_BrowseSection_ContentHubType"),
              }),
              (0, e.jsx)("div", {
                style: { marginBottom: "12px" },
                children: (0, e.jsx)(ta.Ay, {
                  isSearchable: !0,
                  className: "react-select-container",
                  classNamePrefix: "react-select",
                  isDisabled: !c,
                  options: c,
                  value: c?.find((p) => p.value === o),
                  onChange: (p) => {
                    (n.jsondata.source_content_hub = {
                      type: p.value,
                      category: p.value === "category" ? i : void 0,
                      tagid: p.value === "tags" ? l : void 0,
                    }),
                      t.SetDirty(b.IQ.jsondata_sales);
                  },
                }),
              }),
              o === "category" &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(_.JU, {
                      children: (0, s.we)(
                        "#Sale_BrowseSection_ContentHubCategory",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      style: { marginBottom: "12px" },
                      children: (0, e.jsx)(ta.Ay, {
                        isSearchable: !0,
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isDisabled: !d,
                        options: d,
                        value: d?.find((p) => p.value === i),
                        onChange: (p) => {
                          (n.jsondata.source_content_hub = {
                            type: o,
                            category: p?.value,
                          }),
                            t.SetDirty(b.IQ.jsondata_sales);
                        },
                      }),
                    }),
                  ],
                }),
              o === "tags" &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(_.JU, {
                      children: (0, s.we)("#Sale_BrowseSection_ContentHubTag"),
                    }),
                    (0, e.jsx)("div", {
                      style: { marginBottom: "12px" },
                      children: (0, e.jsx)(ta.Ay, {
                        isSearchable: !0,
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isDisabled: !u,
                        options: u,
                        value: u?.find((p) => Number(p.value) === l),
                        onChange: (p) => {
                          (n.jsondata.source_content_hub = {
                            type: o,
                            tagid: Number(p?.value),
                          }),
                            t.SetDirty(b.IQ.jsondata_sales);
                        },
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function Gl(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            o = (0, L.q3)(() => n.jsondata.prune_list_optin_name),
            i = (0, L.q3)(() => n.jsondata.optin_only),
            { rgOptIns: l } = (0, yl.Zs)(),
            r = (0, g.useMemo)(
              () =>
                l
                  ? l.map((c) => ({
                      value: c.pageid,
                      label: `${c.title[f.TS.LANGUAGE]} (${c.pageid})`,
                    }))
                  : [],
              [l],
            );
          return (0, e.jsxs)("div", {
            style: { marginLeft: "32px", marginRight: "32px" },
            children: [
              (0, e.jsx)(_.JU, { children: "Opt-In Event" }),
              (0, e.jsxs)("div", {
                style: { marginBottom: "12px" },
                children: [
                  (0, e.jsx)(ta.Ay, {
                    isSearchable: !0,
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isDisabled: !r,
                    options: r,
                    value: r?.find((c) => c.value === o),
                    onChange: (c) => {
                      (n.jsondata.prune_list_optin_name = c.value),
                        t.SetDirty(b.IQ.jsondata_sales);
                    },
                  }),
                  (0, e.jsx)(_.Yh, {
                    label: "Only show invited games",
                    tooltip:
                      "If checked, this hub will only show games that have been invited to register for the event. Typically used when defining a theme sale.",
                    checked: i,
                    onChange: (c) => {
                      (n.jsondata.optin_only = c),
                        t.SetDirty(b.IQ.jsondata_sales);
                    },
                  }),
                ],
              }),
            ],
          });
        }
        function Ll(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            o = (0, L.q3)(
              () =>
                !n.jsondata.sale_defines_specific_contenthub &&
                !n.jsondata.sale_defines_temporary_contenthub,
            ),
            i = (0, L.q3)(() => n.jsondata.contenthub_section_groups),
            [l, r] = (0, wl._)(!0);
          return !o && l
            ? null
            : (0, e.jsxs)("div", {
                style: { width: "100%" },
                children: [
                  (0, e.jsx)(_.JU, {
                    style: { marginTop: "16px" },
                    children: "Section Layout",
                  }),
                  (0, e.jsx)(Ot.A, {
                    items: i || [],
                    onDelete: (c) => {
                      (n.jsondata.contenthub_section_groups = [
                        ...n.jsondata.contenthub_section_groups.slice(0, c),
                        ...n.jsondata.contenthub_section_groups.slice(c + 1),
                      ]),
                        t.SetDirty(b.IQ.jsondata_sales);
                    },
                    onReorder: () => {
                      t.SetDirty(b.IQ.jsondata_sales);
                    },
                    render: (c) =>
                      (0, e.jsx)(Nl, {
                        editModel: t,
                        group: c,
                        isEditable: o,
                        baseEventJSON: r,
                        onChange: () => {
                          t.SetDirty(b.IQ.jsondata_sales);
                        },
                      }),
                  }),
                  (0, e.jsx)(_.$n, {
                    style: { maxWidth: "200px", margin: "0 auto" },
                    onClick: () => {
                      i || (n.jsondata.contenthub_section_groups = []),
                        (n.jsondata.contenthub_section_groups = [
                          ...n.jsondata.contenthub_section_groups,
                          { name: "", sections: [] },
                        ]),
                        t.SetDirty(b.IQ.jsondata_sales);
                    },
                    children: "Add Group",
                  }),
                ],
              });
        }
        function Nl(a) {
          const {
              editModel: t,
              group: n,
              isEditable: o,
              baseEventJSON: i,
              onChange: l,
            } = a,
            r = (0, L.q3)(() => n.name),
            c = (0, L.q3)(() => n.description),
            d = (0, L.q3)(() => n.sections),
            u = (0, L.q3)(() => n.override_type),
            p = (0, g.useMemo)(
              () =>
                !o && i && i.contenthub_section_groups
                  ? i.contenthub_section_groups.map((S) => ({
                      data: S.name,
                      label: S.name,
                    }))
                  : [],
              [i, o],
            ),
            m = [
              { data: "replace", label: "Replace" },
              { data: "before", label: "Add Before" },
              { data: "after", label: "Add After" },
            ];
          return !o && !i
            ? null
            : (0, e.jsxs)("div", {
                style: { width: "100%" },
                children: [
                  o
                    ? (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)(_.pd, {
                            label: "Name",
                            value: r,
                            onChange: (S) => {
                              (n.name = S.target.value), l();
                            },
                          }),
                          (0, e.jsx)(_.pd, {
                            label: "Description",
                            value: c,
                            onChange: (S) => {
                              (n.description = S.target.value), l();
                            },
                          }),
                        ],
                      })
                    : (0, e.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          (0, e.jsxs)("div", {
                            style: { flexGrow: 1, marginRight: "4px" },
                            children: [
                              (0, e.jsx)(_.JU, {
                                children: "section group inherited from parent",
                              }),
                              (0, e.jsx)(_.m, {
                                rgOptions: p,
                                selectedOption: r,
                                onChange: (S) => {
                                  (n.name = S.data), l();
                                },
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            style: { flexGrow: 1, marginLeft: "4px" },
                            children: [
                              (0, e.jsx)(_.JU, { children: "Override Type" }),
                              (0, e.jsx)(_.m, {
                                rgOptions: m,
                                selectedOption: u,
                                onChange: (S) => {
                                  (n.override_type = S.data), l();
                                },
                              }),
                              !u &&
                                (0, e.jsx)("div", {
                                  className: x().ErrorStylesWithIcon,
                                  children: "Must choose Override Type",
                                }),
                            ],
                          }),
                        ],
                      }),
                  (0, e.jsxs)("div", {
                    style: { marginLeft: "32px", marginRight: "32px" },
                    children: [
                      (0, e.jsx)(_.JU, {
                        children: "Locally Defined Sections To Display",
                      }),
                      (0, e.jsx)(Ot.A, {
                        items: d,
                        onDelete: (S) => {
                          (n.sections = [
                            ...n.sections.slice(0, S),
                            ...n.sections.slice(S + 1),
                          ]),
                            l();
                        },
                        onReorder: () => {
                          l();
                        },
                        render: (S) =>
                          (0, e.jsx)(Ml, {
                            editModel: t,
                            sectionRef: S,
                            onChange: l,
                          }),
                      }),
                      (0, e.jsx)(_.$n, {
                        style: { maxWidth: "150px", margin: "0 auto" },
                        onClick: () => {
                          (n.sections = [...n.sections, { sectionid: 0 }]), l();
                        },
                        children: "Add Section",
                      }),
                    ],
                  }),
                ],
              });
        }
        function Ml(a) {
          const { editModel: t, sectionRef: n, onChange: o } = a,
            i = t.GetEventModel(),
            l = (0, L.q3)(() => i.GetSaleSections()),
            r = (0, dt.yD)(),
            c = l.map((u, p) => ({
              data: u.unique_id,
              label: (0, ga.h_)(
                r.eLocation,
                u,
                (0, T.sfN)(f.TS.LANGUAGE),
                t.GetEventModel(),
                p,
              ),
            })),
            d = (0, L.q3)(() => n.sectionid);
          return (0, e.jsx)("div", {
            style: { width: "100%" },
            children: (0, e.jsx)(_.m, {
              rgOptions: c,
              selectedOption: d,
              onChange: (u) => {
                (n.sectionid = u.data), o();
              },
            }),
          });
        }
        var aa = h(76846),
          Bl = h(52695);
        function Ol(a) {
          const { model: t, fnOnDirty: n } = a,
            { openColorPicker: o } = (0, aa.p)(),
            [i, l] = (0, L.q3)(() => [
              t.sale_background_color,
              t.sale_background_repeat,
            ]);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(x().FlexRowContainer, re().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: re().OptionCtn,
                children: [
                  (0, e.jsx)(_.JU, {
                    children: (0, s.we)("#Sale_Section_Background_Color"),
                  }),
                  (0, e.jsxs)("div", {
                    className: re().ButtonRow,
                    children: [
                      (0, e.jsx)(_.$n, {
                        className: re().BackgroundColorBtn,
                        onClick: (r) => {
                          o(r, {
                            color: i,
                            onChange: (c) => {
                              (t.sale_background_color = c), n();
                            },
                          });
                        },
                        style: { backgroundColor: i },
                        children: (0, s.we)("#Sale_BackgroundColor"),
                      }),
                      (0, e.jsx)(_.$n, {
                        className: re().BackgroundColorResetBtn,
                        onClick: (r) => {
                          (t.sale_background_color = ""), n();
                        },
                        children: (0, s.we)("#Sale_BackgroundColor_Reset"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: re().OptionCtn,
                children: (0, e.jsx)(Bl.n, {
                  setting: l,
                  fnUpdateSetting: (r) => {
                    t.sale_background_repeat != r &&
                      ((t.sale_background_repeat = r), n());
                  },
                }),
              }),
            ],
          });
        }
        var na = h(73593);
        function Pl(a) {
          const { strArrowColor: t, fnUpdateArrowColor: n, arrowStyle: o } = a,
            { openColorPicker: i } = (0, aa.p)(),
            [l, r] = g.useState(t == null);
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(_.$n, {
              className: re().BackgroundColorBtn,
              onClick: (c) => i(c, { color: t, onChange: n }),
              children: [
                (0, e.jsx)(na.m, {
                  direction: "left",
                  arrowFill: t,
                  arrowStyle: o,
                }),
                (0, s.we)("#EventEditor_BG_Arrow_Color"),
                (0, e.jsx)(W.o, {
                  tooltip: (0, s.we)("#EventEditor_BG_Arrow_Color_ttip"),
                }),
                (0, e.jsx)(na.m, {
                  direction: "right",
                  arrowFill: t,
                  arrowStyle: o,
                }),
              ],
            }),
          });
        }
        function ai(a) {
          const { label: t, fnUpdateColor: n, strColorToChange: o } = a,
            { openColorPicker: i } = (0, aa.p)();
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(_.$n, {
              className: re().BackgroundColorBtn,
              onClick: (l) => i(l, { color: o, onChange: n }),
              children: [
                t,
                (0, e.jsx)(W.o, {
                  tooltip: (0, s.we)("#EventEditor_BG_Arrow_Color_ttip"),
                }),
                (0, e.jsx)(na.U, { ...a, bIsActive: !1 }),
                (0, e.jsx)(na.U, { ...a, bIsActive: !0 }),
                (0, e.jsx)(na.U, { ...a, bIsActive: !1 }),
                (0, e.jsx)(na.U, { ...a, bIsActive: !1 }),
              ],
            }),
          });
        }
        var ct = h(34452);
        function Rl(a) {
          return (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)(kl, { ...a }), (0, e.jsx)(Fl, { ...a })],
          });
        }
        function kl(a) {
          const { model: t, fnOnDirty: n } = a,
            [o, i] = (0, L.q3)(() => [
              t.sale_carousel_arrow_color,
              t.sale_carousel_arrow_style || ct.C.k_ECutArrowStyle,
            ]),
            l = (0, g.useMemo)(() => {
              const r = [];
              return (
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_CutArrowStyles"),
                  data: ct.C.k_ECutArrowStyle,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_DoubleArrowStyles"),
                  data: ct.C.k_EDoubleArrowStyle,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_ChevronStyles"),
                  data: ct.C.k_EThickChevron,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_FlatArrowStyles"),
                  data: ct.C.k_EFilledArrow,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_PointyArrowStyles"),
                  data: ct.C.k_EPointyArrow,
                }),
                r
              );
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(x().FlexRowContainer, re().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: re().OptionCtn,
                children: [
                  (0, e.jsx)(_.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_Colors"),
                  }),
                  (0, e.jsx)(Pl, {
                    strArrowColor: o,
                    arrowStyle: i,
                    fnUpdateArrowColor: (r) => {
                      t.sale_carousel_arrow_color != r &&
                        ((t.sale_carousel_arrow_color = r), n());
                    },
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: re().OptionCtn,
                children: [
                  (0, e.jsx)(_.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_ArrowStyles"),
                  }),
                  (0, e.jsx)(_.m, {
                    strDropDownClassName: x().DropDownScroll,
                    rgOptions: l,
                    selectedOption: i,
                    onChange: (r) => {
                      t.sale_carousel_arrow_style != r.data &&
                        ((t.sale_carousel_arrow_style = r.data), n());
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                ],
              }),
            ],
          });
        }
        function Fl(a) {
          const { model: t, fnOnDirty: n } = a,
            [o, i, l] = (0, L.q3)(() => [
              t.sale_carousel_breadcrumb_color,
              t.sale_carousel_active_breadcrumb_color,
              t.sale_carousel_breadcrumb_style || ct.m.k_EPillCrumb,
            ]),
            r = (0, g.useMemo)(() => {
              const c = [];
              return (
                c.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_PillStyles",
                  ),
                  data: ct.m.k_EPillCrumb,
                }),
                c.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_CircularStyles",
                  ),
                  data: ct.m.k_ECircularCrumb,
                }),
                c.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_SquareStyles",
                  ),
                  data: ct.m.k_ESquareCrumb,
                }),
                c
              );
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(x().FlexRowContainer, re().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: re().OptionCtn,
                children: [
                  (0, e.jsx)(_.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_BreadCrumb"),
                  }),
                  (0, e.jsx)(ai, {
                    label: (0, s.we)("#Sale_Section_Carousel_BreadCrumb_Color"),
                    strColorToChange: o,
                    breadcrumbColor: o,
                    breadcrumbActiveColor: i,
                    breadcrumbStyle: l,
                    fnUpdateColor: (c) => {
                      t.sale_carousel_breadcrumb_color != c &&
                        ((t.sale_carousel_breadcrumb_color = c), n());
                    },
                  }),
                  (0, e.jsx)(ai, {
                    label: (0, s.we)(
                      "#Sale_Section_Carousel_ActiveBreadCrumb_Color",
                    ),
                    strColorToChange: i,
                    breadcrumbColor: o,
                    breadcrumbActiveColor: i,
                    breadcrumbStyle: l,
                    fnUpdateColor: (c) => {
                      t.sale_carousel_active_breadcrumb_color != c &&
                        ((t.sale_carousel_active_breadcrumb_color = c), n());
                    },
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: re().OptionCtn,
                children: [
                  (0, e.jsx)(_.JU, {
                    children: (0, s.we)(
                      "#Sale_Section_Carousel_BreadCrumbStyles",
                    ),
                  }),
                  (0, e.jsx)(_.m, {
                    strDropDownClassName: x().DropDownScroll,
                    rgOptions: r,
                    selectedOption: l,
                    onChange: (c) => {
                      t.sale_carousel_breadcrumb_style != c.data &&
                        ((t.sale_carousel_breadcrumb_style = c.data), n());
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                ],
              }),
            ],
          });
        }
        var Ul = h(13854);
        function zl(a) {
          const { editModel: t } = a,
            [n, o, i] = (0, L.q3)(() => [
              t.GetEventModel().jsondata.sale_header_offset,
              t.GetEventModel().jsondata.localized_sale_logo?.filter(Boolean)
                .length || 0,
              t.GetEventModel().jsondata.sale_header_disable_top_margin,
            ]);
          return (0, e.jsxs)(oe.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, j.A)(
              x().PixelOffsetCtn,
              x().ValveOnlyBackground,
              x().SaleEditorSpacing,
            ),
            children: [
              (0, e.jsx)("div", {
                className: "DialogLabel",
                children: (0, s.we)("#Sale_HeaderOffset") + " (VO)",
              }),
              o > 0
                ? (0, e.jsx)("div", {
                    children: (0, s.we)("#Sale_HeaderOffset_disabled"),
                  })
                : (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, s.we)("#Sale_HeaderOffset_Desc"),
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, j.A)(
                          x().FlexRowContainer,
                          x().PixelOffsetRow,
                        ),
                        children: [
                          (0, e.jsx)(_.pd, {
                            value: n,
                            onChange: (l) => {
                              (t.GetEventModel().jsondata.sale_header_offset =
                                Number(l?.target?.value) || 0),
                                t.SetDirty(b.IQ.jsondata_sales);
                            },
                          }),
                          (0, e.jsxs)("div", {
                            className: x().PixelOffsetNote,
                            children: [
                              (0, e.jsx)("div", {
                                className: x().PixelOffsetCallout,
                                children: (0, s.we)(
                                  "#Sale_HeaderOffset_Max",
                                  "530",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                children: (0, s.we)(
                                  "#Sale_HeaderOffset_MaxDeck",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              (0, e.jsx)(_.Yh, {
                checked: i,
                label: "Disable Sale Page Top Pixels",
                onChange: (l) => {
                  (t.GetEventModel().jsondata.sale_header_disable_top_margin =
                    l),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
              }),
            ],
          });
        }
        function Hl(a) {
          const { editModel: t } = a,
            [n, o] = (0, L.q3)(() => [
              t.GetEventModel().jsondata.sale_background_color,
              t.GetEventModel().jsondata.sale_background_repeat,
            ]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ol, {
                model: t.GetEventModel().jsondata,
                fnOnDirty: () => t.SetDirty(b.IQ.jsondata_sales),
              }),
              (0, e.jsx)(Rl, {
                model: t.GetEventModel().jsondata,
                fnOnDirty: () => t.SetDirty(b.IQ.jsondata_sales),
              }),
              (0, e.jsx)(zl, { editModel: t }),
              (0, e.jsx)(Wl, { editModel: t }),
              (0, e.jsx)(Vl, { editModel: t }),
            ],
          });
        }
        function Vl(a) {
          const { editModel: t } = a,
            n = g.createRef(),
            [o, i, l, r] = (0, L.q3)(() => [
              Ul.OQ(t.GetNumberOfDays(), 5, 14),
              t.GetNumSalesBackgroundHeader(),
              t.GetEventStartTime(),
              t.GetNumberOfDays(),
            ]),
            c = g.useCallback(() => {
              const m = [
                { label: (0, s.we)("#Sale_HeaderArtwork_Single"), data: 1 },
              ];
              if (o > 1)
                for (let S = 2; S <= o; S++)
                  m.push({
                    label: (0, s.we)("#Sale_HeaderArtwork_Multi_Amount", S),
                    data: S,
                  });
              return m;
            }, [o]),
            d = g.useCallback(
              (m) => {
                const S = m.data;
                i !== S &&
                  (0, y.pg)(
                    (0, e.jsx)(B.o0, {
                      strTitle: (0, s.we)("#Button_Confirm"),
                      strDescription: (0, s.we)("#Sale_HeaderArtwork_Warning"),
                      onOK: () => t.SetNumSalesBackgroundHeader(S),
                      onCancel: () => n?.current?.SetSelectedOption(i),
                    }),
                    window,
                  );
              },
              [t, i, n],
            ),
            u = g.useCallback(() => {
              const m = [];
              for (let S = 0; S < i; S++) {
                let E = l + 86400 * S;
                const C = {
                  label: (0, s.PP)(
                    S + 1 == i
                      ? "#Sale_HeaderArtwork_DayTimeOnward"
                      : "#Sale_HeaderArtwork_DayTime",
                    S + 1,
                    (0, e.jsx)(Ze.K4, { dateAndTime: E, bSingleLine: !0 }),
                    (0, e.jsx)(Ze.K4, {
                      dateAndTime: E + 86400,
                      bSingleLine: !0,
                    }),
                  ),
                  data: S,
                };
                m.push(C);
              }
              return m;
            }, [i, l]),
            p = (m) => {
              t.GetEventModel().m_overrideCurrentDay = m.data;
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.m, {
                dropDownControlRef: n,
                strDropDownClassName: x().DropDownScroll,
                label: (0, s.we)("#Sale_HeaderArtwork_Multi"),
                tooltip: (0, s.we)("#Sale_HeaderArtwork_Multi_hint"),
                rgOptions: c(),
                selectedOption: i,
                onChange: d,
                bDisableMouseOverlay: !0,
                disabled: r <= 1,
                contextMenuPositionOptions: {
                  bDisableMouseOverlay: !0,
                  bDisablePopTop: !0,
                },
                strClassName: re().SaleDaySelection,
              }),
              i > 1 &&
                (0, e.jsx)(_.m, {
                  strDropDownClassName: x().DropDownScroll,
                  label: (0, s.we)("#Sale_HeaderArtwork_EditDay"),
                  tooltip: (0, s.we)("#Sale_HeaderArtwork_EditDay_hint"),
                  rgOptions: u(),
                  selectedOption: t.GetEventModel().GetDayIndexFromEventStart(),
                  onChange: p,
                  bDisableMouseOverlay: !0,
                  contextMenuPositionOptions: {
                    bDisableMouseOverlay: !0,
                    bDisablePopTop: !0,
                  },
                  strClassName: re().SaleDaySelection,
                }),
            ],
          });
        }
        function Wl(a) {
          const { editModel: t } = a,
            [n, o] = (0, L.q3)(() => [
              t.GetEventModel().jsondata.sale_background_video_webm,
              t.GetEventModel().jsondata.sale_background_video_mp4,
            ]);
          return (0, e.jsxs)(oe.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, j.A)(x().ValveOnlyBackground, x().SaleEditorSpacing),
            children: [
              (0, e.jsx)("div", {
                className: x().EventEditorTextTitle,
                children: (0, s.we)("#Sale_BackgroundVideo_Title"),
              }),
              (0, s.we)("#Sale_BackgroundVideo_Instructions"),
              (0, e.jsx)(_.pd, {
                label: (0, s.we)("#Sale_BackgroundVideo_WebM"),
                onChange: (i) => {
                  (t.GetEventModel().jsondata.sale_background_video_webm =
                    i?.target?.value || ""),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
                value: n,
              }),
              (0, e.jsx)(_.pd, {
                label: (0, s.we)("#Sale_BackgroundVideo_MP4"),
                onChange: (i) => {
                  (t.GetEventModel().jsondata.sale_background_video_mp4 =
                    i?.target?.value || ""),
                    t.SetDirty(b.IQ.jsondata_sales);
                },
                value: o,
              }),
            ],
          });
        }
        var Pt = h(56330),
          Ql = h(52500),
          fe = h(10206),
          Yl = h(2259),
          Jl = h(26917);
        class Kl {
          m_mapVisibleSections = new Map();
          constructor() {
            (0, U.Gn)(this, { m_mapVisibleSections: U.sH });
          }
        }
        const ni = (0, g.createContext)(null);
        function Zl(a) {
          const [t] = (0, g.useState)(() => new Kl());
          return (0, e.jsx)(ni.Provider, { value: t, children: a.children });
        }
        function si() {
          const a = (0, g.useContext)(ni);
          if (!a)
            throw new Error(
              "useVisibleSectionStore must be used within a VisibleSectionStoreProvider",
            );
          return a;
        }
        function Tt(a) {
          const { strSectionId: t, children: n } = a,
            o = si(),
            i = (0, Yl.OO)(
              {
                onEnter: () => o.m_mapVisibleSections.set(t, t),
                onLeave: () => o.m_mapVisibleSections.delete(t),
              },
              { rootMargin: "-100px 0px -100px 0px" },
            );
          return (0, e.jsx)(
            ve.tH,
            {
              children: (0, e.jsx)(
                "div",
                { className: Jl.Waypoint, ref: i, children: n },
                "waypoint_sale_sect_" + t,
              ),
            },
            "eb_sale_sect_" + t,
          );
        }
        var ii = h(86959),
          oi = h(70377),
          li = h(35076),
          nt = h(87498),
          ri = h(5471),
          ql = h(14846),
          Xe = h.n(ql);
        const Xl = ["sale_cross_promo_background"];
        function $l(a) {
          const { editModel: t } = a,
            { openColorPicker: n } = (0, aa.p)(),
            [o, i] = (0, L.q3)(() => [
              t.GetEventModel().jsondata.sale_cross_promo_carousel_background,
              t.GetEventModel().jsondata.sale_cross_promo_carousel_fade_color,
            ]),
            l = (0, g.useCallback)(
              (p, m, S, v, E, D, C) => {
                const M = (0, oi.G)(p, m);
                if (!M?.image) {
                  (0, Wt.wT)(
                    !1,
                    "Cross-promote background conversion produced no image: " +
                      p,
                  );
                  return;
                }
                (M.aspect_ratio = (0, ii.H1)(D, C)),
                  (0, U.h5)(() => {
                    (t.GetEventModel().jsondata.sale_cross_promo_carousel_background =
                      M),
                      t.SetDirty(b.IQ.jsondata_image);
                  });
              },
              [t],
            ),
            r = (0, g.useCallback)(
              (p) => {
                (0, U.h5)(() => {
                  (t.GetEventModel().jsondata.sale_cross_promo_carousel_fade_color =
                    p || void 0),
                    t.SetDirty(b.IQ.jsondata_sales);
                });
              },
              [t],
            ),
            c = (0, g.useCallback)(() => {
              (0, U.h5)(() => {
                delete t.GetEventModel().jsondata
                  .sale_cross_promo_carousel_background,
                  t.SetDirty(b.IQ.jsondata_image);
              });
            }, [t]),
            d = (0, ii.Fk)(t.GetClanAccountID(), o?.image),
            u = nt.Fj.sale_cross_promo_background;
          return (0, e.jsxs)("div", {
            className: re().ArtworkSelectorContainer,
            children: [
              (0, e.jsx)("div", {
                className: re().Title,
                children:
                  "(VO) " + (0, s.we)("#EventEditor_CrossPromoArt_Title"),
              }),
              (0, e.jsx)("div", {
                className: (0, j.A)(re().SelectImageBlock, re().Tips),
                children: (0, e.jsx)("p", {
                  children: (0, s.we)(
                    "#EventEditor_CrossPromoArt_Tip",
                    (0, nt.qj)(u.width),
                    (0, nt.qj)(u.height),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: (0, j.A)(re().SelectImageBlock, Xe().UploaderCtn),
                children: (0, e.jsx)(ri.a, {
                  rgRealmList: t.GetIncludedRealmList(),
                  rgSupportArtwork: Xl,
                  strUploadAjaxURL: (0, li.vH)(t.GetClanSteamID()),
                  fnOnUploadSuccess: l,
                  bTwoPhaseUpload: !0,
                  bDirectTempStorageUpload: !0,
                }),
              }),
              (0, e.jsxs)("div", {
                className: Xe().ControlsRow,
                children: [
                  (0, e.jsx)("span", {
                    className: Xe().FadeColorLabel,
                    children: (0, s.we)(
                      "#EventEditor_CrossPromoArt_FadeColor_Label",
                    ),
                  }),
                  (0, e.jsx)("span", {
                    className: Xe().ColorSwatch,
                    style: i ? { background: i } : void 0,
                  }),
                  (0, e.jsx)("span", {
                    className: Xe().FadeColorValue,
                    children:
                      i ||
                      (0, s.we)("#EventEditor_CrossPromoArt_FadeColor_Unset"),
                  }),
                  (0, e.jsx)(_.$n, {
                    className: Xe().SmallBtn,
                    onClick: (p) => n(p, { color: i, onChange: r }),
                    children: (0, s.we)("#EventEditor_CrossPromoArt_FadeColor"),
                  }),
                  i &&
                    (0, e.jsx)(_.$n, {
                      className: Xe().SmallBtn,
                      onClick: () => r(void 0),
                      children: (0, s.we)(
                        "#EventEditor_CrossPromoArt_FadeColor_Clear",
                      ),
                    }),
                  d &&
                    (0, e.jsx)(_.$n, {
                      className: Xe().SmallBtn,
                      onClick: c,
                      children: (0, s.we)("#EventEditor_CrossPromoArt_Remove"),
                    }),
                ],
              }),
              (0, e.jsx)(er, { strBackgroundURL: d, strFadeColor: i }),
            ],
          });
        }
        function er(a) {
          const { strBackgroundURL: t, strFadeColor: n } = a;
          return (0, e.jsx)("div", {
            className: Xe().PreviewCtn,
            style: n ? { backgroundColor: n } : void 0,
            children: (0, e.jsxs)("div", {
              className: (0, j.A)(
                Xe().PreviewArt,
                !t && Xe().PreviewPlaceholder,
              ),
              style: t ? { backgroundImage: `url(${t})` } : void 0,
              children: [
                !t &&
                  (0, e.jsx)("div", {
                    className: Xe().Empty,
                    children: (0, s.we)("#EventEditor_CrossPromoArt_None"),
                  }),
                n &&
                  (0, e.jsx)("div", {
                    className: Xe().PreviewFade,
                    style: { "--cross-promo-fade-color": n },
                  }),
              ],
            }),
          });
        }
        const tr = (0, w.PA)((a) => {
          const { editModel: t } = a,
            [n, o] = (0, L.q3)(() => [t.GetAppID(), t.GetEventType()]),
            i = !!(
              t.BHasSomeImage("product_banner") &&
              t.GetEventModel().BHasTag("hide_store")
            ),
            l = !!(
              t.BHasSomeImage("product_mobile_banner") &&
              t.GetEventModel().BHasTag("hide_store")
            ),
            r = o == T.ajI,
            c = (0, oe.Dd)(t.GetClanSteamID(), !0),
            d = (C, M = !1) => (0, Ye.Nx)(C, M),
            u = (C, M = !1) => (0, Ye.mi)(C, M),
            p =
              t.GetEventModel().jsondata.localized_sale_product_banner
                ?.length || 0,
            m =
              t.GetEventModel().jsondata.localized_sale_product_mobile_banner
                ?.length || 0,
            S = t.GetEventModel().jsondata.localized_sale_logo?.length || 0,
            v = t.GetEventModel().jsondata.localized_sale_overlay?.length || 0,
            E = (0, Ql.b)(t.GetEventModel().jsondata.sale_logo_url),
            D = [];
          return (
            r
              ? D.push("sale_header")
              : (D.push(
                  "sale_header",
                  "product_banner",
                  "product_mobile_banner",
                  "sale_logo",
                ),
                c && D.push("sale_overlay")),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(vn.t, {
                  clanSteamID: t.GetClanSteamID(),
                  rgSupportArtwork: D,
                  fnSetImageURL: t.SetImageURL,
                  bAllowPreviousClanImageSelection: !0,
                  rgRealmList: t.GetIncludedRealmList(),
                }),
                (0, e.jsx)(Tt, {
                  strSectionId: "SalePageEdit_SaleBgImg",
                  children: (0, e.jsx)(Oe.it, {
                    id: "SalePageEdit_SaleBgImg",
                    appid: n,
                    eventModel: t.GetEventModel(),
                    clanSteamID: t.GetClanSteamID(),
                    title: (0, s.we)("#EventEditor_ArtworkType_sale_header"),
                    artworkType: "sale_header",
                    elEventArtworkExample: (0, e.jsx)(Ra, {
                      artworkType: "sale_header",
                    }),
                    bIsMinimized: d("sale_header"),
                    fnLangHasData: (C) => t.BHasImage("sale_header", C),
                    fnSetImageURL: t.SetImageURL,
                    fnGetImageHashAndExt: t.GetImageHashAndExt,
                    fnToggleMinimize: () => u("sale_header"),
                    partnerEventStore: G.mh,
                    elAdditionalControls: (0, e.jsx)(Hl, { editModel: t }),
                  }),
                }),
                !r &&
                  (0, e.jsx)(Tt, {
                    strSectionId: "SalePageEdit_SaleLogo",
                    children: (0, e.jsxs)("div", {
                      className: fe.SalePageLogoCtn,
                      children: [
                        (0, e.jsx)(Oe.it, {
                          id: "SalePageEdit_SaleLogo",
                          clanSteamID: t.GetClanSteamID(),
                          eventModel: t.GetEventModel(),
                          appid: n,
                          title: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo",
                          ),
                          artworkType: "sale_logo",
                          elEventArtworkExample: (0, e.jsx)(Ra, {
                            artworkType: "sale_logo",
                          }),
                          bIsMinimized: d("sale_logo"),
                          fnLangHasData: (C) => t.BHasImage("sale_logo", C),
                          fnSetImageURL: t.SetImageURL,
                          fnGetImageHashAndExt: t.GetImageHashAndExt,
                          fnToggleMinimize: () => u("sale_logo"),
                          partnerEventStore: G.mh,
                          fnRemoveAllArtwork:
                            S == 0
                              ? void 0
                              : () => {
                                  (0, U.h5)(() => {
                                    (t.GetEventModel().jsondata.localized_sale_logo =
                                      []),
                                      t.SetDirty(b.IQ.jsondata_sales);
                                  });
                                },
                        }),
                        (0, e.jsx)(_.pd, {
                          label: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo_url",
                          ),
                          value: t.GetEventModel().jsondata.sale_logo_url,
                          tooltip: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo_url_tooltip",
                          ),
                          description: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo_url_example",
                          ),
                          onChange: (C) => {
                            (0, U.h5)(() => {
                              (t.GetEventModel().jsondata.sale_logo_url =
                                C.target.value),
                                t.SetDirty(b.IQ.jsondata_sales);
                            });
                          },
                        }),
                        E &&
                          (0, e.jsx)("div", {
                            className: Pt.ErrorStylesWithIcon,
                            children: E,
                          }),
                        (0, e.jsxs)(oe.Eb, {
                          clanSteamID: t.GetClanSteamID(),
                          requireAdmin: !0,
                          children: [
                            (0, e.jsx)(_.Yh, {
                              label: (0, s.we)(
                                "#EventEditor_SaleLogo_CrossPromoOnly",
                              ),
                              tooltip: (0, s.we)(
                                "#EventEditor_SaleLogo_CrossPromoOnly_ttip",
                              ),
                              checked:
                                !!t.GetEventModel().jsondata
                                  .sale_logo_cross_promo_only,
                              onChange: (C) => {
                                (0, U.h5)(() => {
                                  (t.GetEventModel().jsondata.sale_logo_cross_promo_only =
                                    C || void 0),
                                    t.SetDirty(b.IQ.jsondata_sales);
                                });
                              },
                            }),
                            t.GetEventModel().jsondata
                              .sale_logo_cross_promo_only &&
                              (0, e.jsx)("div", {
                                children: (0, s.we)(
                                  "#EventEditor_SaleLogo_CrossPromoOnly_Note",
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                !r &&
                  (0, e.jsx)(Tt, {
                    strSectionId: "SalePageEdit_SaleBanner",
                    children: (0, e.jsx)(Oe.it, {
                      id: "SalePageEdit_SaleBanner",
                      clanSteamID: t.GetClanSteamID(),
                      eventModel: t.GetEventModel(),
                      appid: n,
                      fnLangHasData: (C) => t.BHasImage("product_banner", C),
                      fnSetImageURL: t.SetImageURL,
                      fnGetImageHashAndExt: t.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_sale_product_banner",
                      ),
                      artworkType: "product_banner",
                      bIsMinimized: d("product_banner"),
                      fnToggleMinimize: () => u("product_banner"),
                      strWarning: i
                        ? (0, s.we)("#Sale_BannerVisibility_Warning")
                        : void 0,
                      elEventArtworkExample: (0, e.jsx)(Ra, {
                        artworkType: "product_banner",
                      }),
                      partnerEventStore: G.mh,
                      fnRemoveAllArtwork:
                        p == 0
                          ? void 0
                          : () => {
                              (0, U.h5)(() => {
                                (t.GetEventModel().jsondata.localized_sale_product_banner =
                                  []),
                                  t.SetDirty(b.IQ.jsondata_sales);
                              });
                            },
                    }),
                  }),
                !r &&
                  (0, e.jsx)(Tt, {
                    strSectionId: "SalePageEdit_SaleMobileBanner",
                    children: (0, e.jsx)(Oe.it, {
                      id: "SalePageEdit_SaleMobileBanner",
                      clanSteamID: t.GetClanSteamID(),
                      eventModel: t.GetEventModel(),
                      appid: n,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_sale_product_mobile_banner",
                      ),
                      artworkType: "product_mobile_banner",
                      bIsMinimized: d("product_mobile_banner"),
                      fnToggleMinimize: () => u("product_mobile_banner"),
                      fnLangHasData: (C) =>
                        t.BHasImage("product_mobile_banner", C),
                      fnSetImageURL: t.SetImageURL,
                      fnGetImageHashAndExt: t.GetImageHashAndExt,
                      partnerEventStore: G.mh,
                      strWarning: l
                        ? (0, s.we)("#Sale_BannerVisibility_Warning")
                        : void 0,
                      fnRemoveAllArtwork:
                        m == 0
                          ? void 0
                          : () => {
                              (0, U.h5)(() => {
                                (t.GetEventModel().jsondata.localized_sale_product_mobile_banner =
                                  []),
                                  t.SetDirty(b.IQ.jsondata_sales);
                              });
                            },
                    }),
                  }),
                !r &&
                  (0, e.jsx)(Tt, {
                    strSectionId: "SalePageEdit_CrossPromoArt",
                    children: (0, e.jsx)(oe.Eb, {
                      clanSteamID: t.GetClanSteamID(),
                      requireAdmin: !0,
                      children: (0, e.jsx)($l, { editModel: t }),
                    }),
                  }),
                !r &&
                  (0, e.jsx)(Tt, {
                    strSectionId: "SalePageEdit_SaleOverlay",
                    children: (0, e.jsx)(oe.Eb, {
                      clanSteamID: t.GetClanSteamID(),
                      requireAdmin: !0,
                      className: fe.SalePageLogoCtn,
                      children: (0, e.jsx)(Oe.it, {
                        id: "SalePageEdit_SaleOverlay",
                        clanSteamID: t.GetClanSteamID(),
                        eventModel: t.GetEventModel(),
                        appid: n,
                        title: (0, s.we)(
                          "#EventEditor_ArtworkType_sale_overlay",
                        ),
                        artworkType: "sale_overlay",
                        elEventArtworkExample: (0, e.jsx)(Ra, {
                          artworkType: "sale_overlay",
                        }),
                        bIsMinimized: d("sale_overlay"),
                        fnToggleMinimize: () => u("sale_overlay"),
                        fnLangHasData: (C) => t.BHasImage("sale_overlay", C),
                        fnSetImageURL: t.SetImageURL,
                        fnGetImageHashAndExt: t.GetImageHashAndExt,
                        partnerEventStore: G.mh,
                        fnRemoveAllArtwork:
                          v == 0
                            ? void 0
                            : () => {
                                (0, U.h5)(() => {
                                  (t.GetEventModel().jsondata.localized_sale_overlay =
                                    []),
                                    t.SetDirty(b.IQ.jsondata_sales);
                                });
                              },
                      }),
                    }),
                  }),
              ],
            })
          );
        });
        var ka = h(50109),
          je = h(8681),
          st = h(73191),
          $e = h(11833),
          Sa = h(88942),
          rt = h(98609);
        async function ar(a) {
          const t = { accountid: a, origin: self.origin };
          let n = `${rt.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
          (0, f.yK)() == "partner" &&
            (n = `${rt.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
          const o = await K().get(n, { params: t, withCredentials: !0 });
          if (
            !o ||
            o.status != 200 ||
            o.data?.success != Fe.R ||
            !o.data?.partners
          )
            throw `Load single user partner info failed ${((0, ye.H))(o).strErrorMsg}`;
          return o.data.partners;
        }
        function di(a) {
          const { data: t, isLoading: n } = (0, Sa.I)({
            queryKey: ["PartnerInfoList", a],
            queryFn: () => ar(a),
          });
          return n ? null : t;
        }
        function rp(a, t) {
          return di(a)?.find((o) => o.partnerid === t);
        }
        function ci(a) {
          const {
              accountID: t,
              partnerID: n,
              fnSetPartnerID: o,
              strLabel: i,
              strTooltip: l,
            } = a,
            r = di(t),
            c = (0, g.useMemo)(
              () =>
                r?.length > 0
                  ? r.map((d) => ({ label: d.partner_name, data: d.partnerid }))
                  : null,
              [r],
            );
          return c == null
            ? null
            : (0, e.jsx)(_.m, {
                label: i,
                tooltip: l,
                rgOptions: c,
                selectedOption: n,
                onChange: (d) => o(d.data),
              });
        }
        function ui(a) {
          const { strExternalSaleEventType: t, fnSetExternalSaleEventType: n } =
              a,
            o = [
              {
                label: "Publisher/Developer Sale",
                data: "publisher",
                tooltip:
                  "A developer, publisher or franchise want to showcase their games on a sale page.",
              },
              {
                label: "Showcase/Festival/Convention",
                data: "showcase",
                tooltip:
                  "festivals, convensions, showcases. Typically events with a physical presence, but not always",
              },
              {
                label: "Regional Sale",
                data: "region",
                tooltip: "For Made in XYZ Location events",
              },
              {
                label: "Themed Sale",
                data: "theme",
                tooltip:
                  "For events organized around a particular genre, theme, style",
              },
              {
                label: "Franchise Sale",
                data: "franchise",
                tooltip: "For events organized around a particular franchise",
              },
              {
                label: "DEV Only: Locked Publisher/Developer Sale",
                data: "locked_publisher",
                tooltip:
                  "A developer, publisher or franchise want to showcase their games on a sale page and are limited to only their linked apps with their creator home.",
              },
              {
                label: "DEV Only: Locked Franchise Sale",
                data: "locked_franchise",
                tooltip:
                  "For events organized around a particular franchise and are limited to only their linked apps to their creator home",
              },
            ];
          return (0, e.jsxs)("div", {
            children: [
              "Please Select event type so that:",
              (0, e.jsxs)("ol", {
                children: [
                  (0, e.jsx)("li", {
                    children:
                      "we can show the right documentation to the partner",
                  }),
                  (0, e.jsx)("li", {
                    children:
                      "Dev/Pub/Franchise sales are limited to the created apps if the hosting group is a creator hoem",
                  }),
                ],
              }),
              (0, e.jsx)(_.m, {
                rgOptions: o,
                strDropDownClassName: F.DropDownScroll,
                strDropDownMenuCtnClass: F.DropDownScroll,
                strDropDownItemClassName: F.DropDownScrollItem,
                selectedOption: t,
                onChange: (i) => n(i.data),
                contextMenuPositionOptions: { bDisablePopTop: !0 },
              }),
            ],
          });
        }
        function hi(a) {
          const { clanSteamID: t, gidClanEvent: n } = a,
            { bLoading: o } = (0, je.g7)(t.GetAccountID(), n);
          return o
            ? (0, e.jsx)(N.t, { string: (0, s.we)("#Loading") })
            : (0, e.jsx)(nr, { ...a });
        }
        function nr(a) {
          const { clanSteamID: t, gidClanEvent: n, fnOkCallbackList: o } = a,
            {
              bPublishRequiresValveApproval: i,
              fnSetStorePublishingRequiresValveApproval: l,
              bRequiresHostDisclaimer: r,
              fnSetStoreRequireHostDisclaimer: c,
              bHasSettingForRequiresValveApproval: d,
              strExternalSaleEventType: u,
              fnSetExternalSaleEventType: p,
            } = (0, je.g7)(t.GetAccountID(), n),
            [m, S] = (0, g.useState)(d ? i : !0),
            [v, E] = (0, g.useState)(r);
          return (
            (0, J.hL)(o, () => {
              l(m), c(v);
            }),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(_.Yh, {
                  checked: o ? m : d ? i : !0,
                  onChange: (D) => {
                    S(D), o || l(D);
                  },
                  label:
                    "Require Approval by Valve Admin in order to publish this sales events",
                  tooltip:
                    "They will see a warning indicating they cannot publish until Valve approves the page. Approval is done by Valve Admin in the same place.",
                }),
                (0, e.jsx)(_.Yh, {
                  checked: o ? v : r,
                  onChange: (D) => {
                    E(D), o || c(D);
                  },
                  label: (0, s.we)("#SalePresented_By_Admin"),
                  tooltip: (0, s.we)("#SalePresneted_By_Admin_ttip"),
                }),
                (0, e.jsx)(ui, {
                  strExternalSaleEventType: u,
                  fnSetExternalSaleEventType: p,
                }),
              ],
            })
          );
        }
        function mi(a) {
          const {
              clanSteamID: t,
              gidClanEvent: n,
              rgSalePresenters: o,
              fnCleanSaleEventPresenters: i,
              bPublishTab: l,
              bIsEventVisible: r,
            } = a,
            {
              bLoading: c,
              bPublishRequiresValveApproval: d,
              nAccountApproved: u,
              bRequiresHostDisclaimer: p,
              fnSetStoreRequireHostDisclaimer: m,
            } = (0, je.g7)(t.GetAccountID(), n),
            { oPrivateData: S } = (0, je.fj)(t.GetAccountID(), n),
            v = pi(t, n);
          if (r)
            return (
              v &&
              (0, e.jsx)("div", {
                className: (0, j.A)(
                  $e.ApprovalRequiredCtn,
                  $e.PublishWithRestrictions,
                ),
                children: (0, e.jsx)("div", {
                  className: $e.Left,
                  children: (0, e.jsx)(_i, { clanSteamID: t, gidClanEvent: n }),
                }),
              })
            );
          if (!c && d && !u) {
            const E = (M) => {
                (0, y.pg)(
                  (0, e.jsx)(lr, { clanSteamID: t, gidClanEvent: n }),
                  (0, ue.uX)(M),
                );
              },
              D = (M) => {
                (0, y.pg)(
                  (0, e.jsx)(ir, { clanSteamID: t, gidClanEvent: n }),
                  (0, ue.uX)(M),
                );
              },
              C = S?.jsonData?.strSalePageApprovalHelpTicketReferenceCode;
            return (0, e.jsxs)("div", {
              className: (0, j.A)(
                $e.ApprovalRequiredCtn,
                C ? $e.PendingApproval : "",
              ),
              children: [
                (0, e.jsx)("div", {
                  className: $e.Left,
                  children: C
                    ? (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: $e.Title,
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Title_Pending",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Desc_Pending",
                            ),
                          }),
                        ],
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: $e.Title,
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Desc",
                            ),
                          }),
                        ],
                      }),
                }),
                (0, e.jsxs)("div", {
                  className: $e.Right,
                  children: [
                    C
                      ? (0, e.jsx)(te.uU, {
                          href: `${f.TS.HELP_BASE_URL}en/wizard/HelpRequest/${S?.jsonData?.strSalePageApprovalHelpTicketReferenceCode}`,
                          className: (0, j.A)(F.EditPreviewButton, F.Button),
                          bForceExternal: !0,
                          children: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Link",
                          ),
                        })
                      : (0, e.jsx)(xe.he, {
                          toolTipContent: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Approval_ttip",
                          ),
                          children: (0, e.jsx)(_.jn, {
                            onClick: E,
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Request_Button",
                            ),
                          }),
                        }),
                    (0, e.jsxs)(oe.Eb, {
                      clanSteamID: t,
                      children: [
                        (0, e.jsxs)(_.$n, {
                          onClick: D,
                          children: [
                            "Approve... ",
                            (0, e.jsx)(W.o, {
                              tooltip: (0, s.we)(
                                "#EventEditor_SaleValveApproval_Admin_Tooltip",
                              ),
                            }),
                          ],
                        }),
                        o?.length > 0 &&
                          (0, e.jsx)(_.$n, {
                            onClick: i,
                            children: (0, s.we)(
                              "#SalePresented_By_ClearPresenters",
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          } else if (!c && d && u)
            return (0, e.jsx)("div", {
              className: (0, j.A)($e.ApprovalRequiredCtn, $e.Approved),
              children: (0, e.jsxs)("div", {
                className: $e.Left,
                children: [
                  (0, e.jsxs)("div", {
                    className: $e.Title,
                    children: [
                      "\u2713 ",
                      (0, s.we)(
                        "#EventEditor_SaleValveApproval_Approved_Title",
                      ),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    children: (0, s.we)(
                      l
                        ? "#EventEditor_SaleValveApproval_Approved_Desc_OnPublish"
                        : "#EventEditor_SaleValveApproval_Approved_Desc",
                    ),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(_i, { clanSteamID: t, gidClanEvent: n }),
                ],
              }),
            });
          return null;
        }
        function pi(a, t) {
          const {
            bLoading: n,
            bAllowAddingAppsPackagesBundles: o,
            bAllowChangingVanityURL: i,
            bAllowMakingChangesToSalePage: l,
          } = (0, je.fp)(a.GetAccountID(), t);
          return !n && (!o || !i || !l);
        }
        function _i(a) {
          const { clanSteamID: t, gidClanEvent: n } = a,
            o = pi(t, n),
            {
              bAllowAddingAppsPackagesBundles: i,
              bAllowChangingVanityURL: l,
              bAllowMakingChangesToSalePage: r,
            } = (0, je.fp)(t.GetAccountID(), n);
          return o
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("div", {
                    children: (0, s.we)("#EventEditor_SaleEditor_Restriction"),
                  }),
                  (0, e.jsxs)("ul", {
                    children: [
                      !l &&
                        (0, e.jsxs)("li", {
                          children: [
                            (0, s.we)("#EventEditor_SaleEditor_Block_URL"),
                            " ",
                            (0, e.jsx)(W.o, {
                              tooltip: (0, s.we)(
                                "#EventEditor_SaleEditor_Block_URL_ttip",
                              ),
                            }),
                          ],
                        }),
                      !i &&
                        (0, e.jsxs)("li", {
                          children: [
                            (0, s.we)("#EventEditor_SaleEditor_Block_App"),
                            " ",
                            (0, e.jsx)(W.o, {
                              tooltip: (0, s.we)(
                                "#EventEditor_SaleEditor_Block_App_ttip",
                              ),
                            }),
                          ],
                        }),
                      !r &&
                        (0, e.jsx)("li", {
                          children: (0, s.we)(
                            "#EventEditor_SaleEditor_Block_Sale",
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function vi(a) {
          const { clanSteamID: t, gidClanEvent: n, bShowThrobber: o } = a,
            {
              bLoading: i,
              bAllowChangingVanityURL: l,
              bAllowAddingAppsPackagesBundles: r,
              bAllowMakingChangesToSalePage: c,
              fnSetAllowAddingAppsPackagesBundles: d,
              fnSetAllowChangingVanityURL: u,
              fnSetAllowMakingChangesToSalePage: p,
            } = (0, je.fp)(t.GetAccountID(), n);
          return o && i
            ? (0, e.jsx)(N.t, {
                string: (0, s.we)("#Loading"),
                size: "medium",
                position: "center",
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h3", { children: "Post Approval Controls" }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(_.Yh, {
                    checked: l,
                    onChange: u,
                    label: "Allow Updating Vanity URL After Approval",
                    tooltip:
                      "Unset when we plan to feature with a direct link to the landing page",
                  }),
                  (0, e.jsx)(_.Yh, {
                    checked: r,
                    onChange: d,
                    label: "Allow Adding Apps/Packages/Bundles after Approval",
                    tooltip:
                      "Use when we agreed to a specific app/package/bundle list for them to use.",
                  }),
                  (0, e.jsx)(_.Yh, {
                    checked: c,
                    onChange: p,
                    label:
                      "Allow Updating layout/artwork/ordering/carousels After Approval",
                    tooltip:
                      "Use when we don't have full trust that they won't change the art or featuring in a way that breaks what we reviewed and agreed upon",
                  }),
                ],
              });
        }
        function sr(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: o } = a,
            i = "Update Post Review Editability",
            [l, r, c] = (0, je.hr)(),
            d = (0, st.vs)();
          return d.bLoading
            ? (0, e.jsx)(st.Hh, { state: d, strDialogTitle: i, closeModal: o })
            : (0, e.jsx)(B.o0, {
                strTitle: i,
                onOK: () => {
                  d.fnSetLoading(!0),
                    c(n)
                      .then((u) => {
                        u == Fe.R
                          ? o()
                          : (r(),
                            d.fnSetError(!0),
                            d.fnSetStrError(
                              "Failed to update Private Data: " + u,
                            ));
                      })
                      .catch((u) => {
                        r(),
                          d.fnSetError(!0),
                          d.fnSetStrError((0, ye.H)(u).strErrorMsg);
                      });
                },
                strOKButtonText: "Update",
                bDisableBackgroundDismiss: !0,
                closeModal: o,
                onCancel: r,
                bOKDisabled: !!d.bError,
                children: (0, e.jsx)(vi, {
                  clanSteamID: t,
                  gidClanEvent: n,
                  bShowThrobber: !0,
                }),
              });
        }
        function ir(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: o } = a,
            { fnSetAccountApproved: i } = (0, je.g7)(t.GetAccountID(), n),
            [l, r, c] = (0, je.hr)(),
            d = "APPROVE SALE PAGE?",
            u = (0, st.vs)();
          if (u.bLoading)
            return (0, e.jsx)(st.Hh, {
              state: u,
              strDialogTitle: d,
              closeModal: o,
            });
          const p = () => {
            u.fnSetLoading(!0),
              i(f.iA.accountid),
              c(n)
                .then((m) => {
                  m == Fe.R
                    ? o()
                    : (r(),
                      u.fnSetError(!0),
                      u.fnSetStrError("Failed to update Private Data: " + m));
                })
                .catch((m) => {
                  r(),
                    u.fnSetError(!0),
                    u.fnSetStrError((0, ye.H)(m).strErrorMsg);
                });
          };
          return (0, e.jsx)(B.o0, {
            strTitle: d,
            strDescription:
              "This will remove the publishing block and allow the partner to publish anytime afterward. As a reminder, these are the things we should check before approving:",
            onOK: p,
            strOKButtonText: "Yes, Approve",
            bDisableBackgroundDismiss: !0,
            closeModal: o,
            onCancel: r,
            bOKDisabled: !!u.bError,
            children: (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("br", {}),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("h3", { children: "Key requirements:" }),
                (0, e.jsxs)("ul", {
                  children: [
                    (0, e.jsx)("li", {
                      children:
                        "Is the event organizer clearly communicated on the sale page?",
                    }),
                    (0, e.jsx)("li", {
                      children: "Are the dates set correctly?",
                    }),
                    (0, e.jsx)("li", {
                      children:
                        "Are the store page banners reasonable and avoid sponsor logos?",
                    }),
                  ],
                }),
                (0, e.jsx)("h3", {
                  children: "If we are promoting this event:",
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    (0, e.jsx)("li", {
                      children:
                        "Does the artwork fit the space and fade nicely on the edges?",
                    }),
                    (0, e.jsx)("li", {
                      children:
                        "Do we have all layered art files in hand if we are promoting this event?",
                    }),
                  ],
                }),
                (0, e.jsx)(vi, { clanSteamID: t, gidClanEvent: n }),
              ],
            }),
          });
        }
        async function or(a, t, n, o) {
          const i =
              f.TS.COMMUNITY_BASE_URL +
              "partnereventdata/ajaxrequestsalepagereview",
            l = new URLSearchParams();
          l.append("sessionid", (0, f.KC)()),
            l.append("clanAccountID", "" + a.GetAccountID()),
            l.append("gidClanEvent", t),
            l.append("partnerID", "" + o),
            l.append("message", n);
          try {
            let r = await K().post(i, l, { withCredentials: !0 });
            return !r || r.status != 200 || r.data.success != Fe.R
              ? (console.error(
                  "CreateReviewRequestTicket failed.",
                  r && (0, ye.H)(r),
                ),
                r.data.success == Fe.Ze ? r.data : null)
              : r.data;
          } catch (r) {
            const c = (0, ye.H)(r);
            console.error(
              "CreateReviewRequestTicket failed: " + c.strErrorMsg,
              c,
            );
          }
          return null;
        }
        function lr(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: o } = a,
            {
              bLoading: i,
              oPrivateData: l,
              fnSetPrivateJsonNoDirty: r,
            } = (0, je.fj)(t.GetAccountID(), n),
            [c, d] = (0, g.useState)(""),
            [u, p] = (0, g.useState)(null),
            m = (0, st.vs)();
          return m.bLoading
            ? (0, e.jsx)(st.Hh, {
                state: m,
                strDialogTitle: (0, s.we)(
                  "#EventEditor_SaleValveApproval_Request_Approval",
                ),
                closeModal: o,
              })
            : (0, e.jsxs)(B.o0, {
                strTitle: (0, s.we)(
                  "#EventEditor_SaleValveApproval_Request_Approval",
                ),
                strDescription: (0, s.we)(
                  "#EventEditor_SaleValveApproval_Request_Desc",
                ),
                bDisableBackgroundDismiss: !0,
                bOKDisabled: i,
                onCancel: o,
                onOK: async () => {
                  m.fnSetLoading(!0),
                    or(t, n, c, u)
                      .then((S) => {
                        S && S.success == Fe.R
                          ? (r({
                              ...l,
                              strSalePageApprovalHelpTicketReferenceCode:
                                S.reference_code,
                            }),
                            m.fnSetSuccess(!0),
                            m.fnSetElSuccess(
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#EventEditor_SaleValveApproval_Request_Success",
                                    ),
                                  }),
                                  (0, e.jsx)(te.uU, {
                                    href: S.help_url,
                                    bForceExternal: !0,
                                    children: (0, s.we)(
                                      "#EventEditor_SaleValveApproval_Request_Link",
                                    ),
                                  }),
                                ],
                              }),
                            ))
                          : S.success == Fe.Ze
                            ? (m.fnSetError(!0),
                              m.fnSetStrError(
                                (0, s.we)(
                                  "#EventEditor_SaleValveApproval_Request_DuplicateError",
                                ),
                              ))
                            : (m.fnSetError(!0),
                              m.fnSetStrError(
                                (0, s.we)(
                                  "#EventEditor_SaleValveApproval_Request_Error",
                                ),
                              ));
                      })
                      .catch((S) => {
                        m.fnSetError(!0),
                          m.fnSetStrError(
                            (0, s.we)(
                              "#EventEditor_SaleValveApproval_Request_Error",
                            ),
                          );
                      });
                },
                children: [
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("br", {}),
                  (0, s.we)("#EventEditor_SaleValveApproval_Request_Desc2"),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("br", {}),
                  (0, s.we)("#EventEditor_SaleValveApproval_Request_Desc3"),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(_.pd, {
                    type: "text",
                    label: (0, s.we)(
                      "#EventEditor_SaleValveApproval_Request_InputText",
                    ),
                    onChange: (S) => d(S.currentTarget.value || ""),
                    value: c,
                  }),
                  (0, e.jsx)(ci, {
                    accountID: f.iA.accountid,
                    partnerID: u,
                    fnSetPartnerID: p,
                    strLabel: (0, s.we)(
                      "#EventEditor_SaleValveApproval_Request_Partner",
                    ),
                    strTooltip: (0, s.we)(
                      "#EventEditor_SaleValveApproval_Request_Partner_ttip",
                    ),
                  }),
                ],
              });
        }
        var rr = h(74535),
          ut = h(36118),
          Te = h(22230);
        function dr(a) {
          const t = G.mh.GetEditModel(),
            {
              bLoading: n,
              nAcceptingGuidelineAccount: o,
              bRequiresHostDisclaimer: i,
            } = (0, je.lA)(t.GetClanAccountID(), t.GetGID()),
            [l, r] = (0, L.q3)(() => [
              t.BHasSaleEnabled(),
              t.GetEventModel().jsondata.sale_presenters,
            ]),
            c = (0, oe.Dd)(t.GetClanSteamID(), !0);
          if (!l) return (0, e.jsx)(e.Fragment, {});
          const d = !!o;
          return c || (d && (!i || r?.length >= 1)) || t.GetEventType() == T.ajI
            ? (0, e.jsx)(e.Fragment, { children: a.children })
            : n
              ? (0, e.jsx)(N.t, {})
              : d
                ? (0, e.jsxs)("div", {
                    className: Te.GuidelinesNoticeCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: Te.Intro,
                        children: [
                          (0, e.jsx)("div", {
                            className: Te.State,
                            children: (0, e.jsx)(ut.Jlk, {}),
                          }),
                          (0, e.jsx)("div", {
                            className: Te.Description,
                            children: (0, s.we)(
                              "#EventDisclaimer_GuidelineAccepted",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: Te.Intro,
                        children: [
                          (0, e.jsx)("div", {
                            className: Te.State,
                            children: "\xA0",
                          }),
                          (0, e.jsxs)("div", {
                            className: Te.Description,
                            children: [
                              (0, s.we)("#EventDisclaimer_desc"),
                              (0, e.jsx)("div", {
                                className: Te.OpenGuidelinesBtnCtn,
                                children: (0, e.jsx)(_.jn, {
                                  onClick: (u) =>
                                    (0, y.pg)(
                                      (0, e.jsx)(En, {}),
                                      (0, ue.uX)(u),
                                    ),
                                  children: (0, s.we)(
                                    "#EventDisclaimer_button_enter",
                                  ),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    className: Te.GuidelinesNoticeCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: Te.Intro,
                        children: [" ", (0, s.we)("#EventSaleGuidelines_desc")],
                      }),
                      (0, e.jsx)("div", {
                        className: Te.OpenGuidelinesBtnCtn,
                        children: (0, e.jsx)(_.jn, {
                          onClick: (u) =>
                            (0, y.pg)(
                              (0, e.jsx)(Ei, { bCheckListReadOnly: !1 }),
                              (0, ue.uX)(u),
                            ),
                          children: (0, s.we)("#EventSaleGuidelines_Review"),
                        }),
                      }),
                    ],
                  });
        }
        function cr(a) {
          const t = G.mh.GetEditModel(),
            { bLoading: n, nAcceptingGuidelineAccount: o } = (0, je.lA)(
              t.GetClanAccountID(),
              t.GetGID(),
            ),
            i = (0, oe.Dd)(t.GetClanSteamID(), !0),
            { bVisible: l } = (0, Q._5)(t.GetEventModel(), i),
            { bVisible: r } = (0, Q.Ao)(t.GetEventModel());
          return n || l || r
            ? null
            : i
              ? (0, e.jsx)(mr, {})
              : o
                ? (0, e.jsx)(gi, {})
                : null;
        }
        function gi() {
          const a = G.mh.GetEditModel(),
            {
              rtAcceptanceTime: t,
              strSalePageApprovalHelpTicketReferenceCode: n,
            } = (0, je.lA)(a.GetClanAccountID(), a.GetGID()),
            o = (0, L.q3)(() => {
              const i = a.GetEventModel().jsondata.sale_presenters;
              return (
                i?.length > 0 &&
                i[0].localized_presenter_name?.length > 0 &&
                i[0].localized_presenter_name[0].length > 0
              );
            });
          return (0, e.jsxs)("div", {
            className: Te.GuidelinesDoneCtn,
            children: [
              (0, e.jsxs)("div", {
                className: Te.Text,
                children: [
                  (0, s.PP)(
                    "#EventSaleGuidelines_AlreadyReviewed",
                    (0, e.jsx)(Ze.K4, { dateAndTime: t, bSingleLine: !0 }),
                  ),
                  !o &&
                    (0, e.jsxs)("div", {
                      className: Te.OrganizerInfoNeeded,
                      children: [
                        (0, s.we)("#SalePresented_By_Instructions"),
                        " \u{1F846}",
                      ],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: Te.ProcessButtons,
                children: [
                  (0, e.jsx)(_.$n, {
                    onClick: (i) =>
                      (0, y.pg)(
                        (0, e.jsx)(Ei, { bCheckListReadOnly: !0 }),
                        (0, ue.uX)(i),
                      ),
                    children: (0, s.we)("#EventSaleGuidelines_Review"),
                  }),
                  o
                    ? (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)(_.$n, {
                          onClick: (i) =>
                            (0, y.pg)((0, e.jsx)(En, {}), (0, ue.uX)(i)),
                          children: (0, s.we)("#EventDisclaimer_button"),
                        }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)(_.jn, {
                          onClick: (i) =>
                            (0, y.pg)((0, e.jsx)(En, {}), (0, ue.uX)(i)),
                          children: (0, s.we)("#EventDisclaimer_button_enter"),
                        }),
                      }),
                  !!n &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsx)(_.$n, {
                        onClick: (i) =>
                          (0, te.Id)(
                            i,
                            `${f.TS.HELP_BASE_URL}en/wizard/HelpRequest/${n}`,
                          ),
                        children: (0, s.we)(
                          "#EventEditor_SaleValveApproval_Request_Link",
                        ),
                      }),
                    }),
                  (0, e.jsx)(oe.Eb, {
                    clanSteamID: a.GetClanSteamID(),
                    children: (0, e.jsx)(ur, {}),
                  }),
                ],
              }),
            ],
          });
        }
        function ur(a) {
          const t = G.mh.GetEditModel(),
            n = t.GetClanAccountID(),
            o = t.GetGID(),
            [i, l, r] = (0, J.uD)(!1),
            {
              bLoading: c,
              bPublishRequiresValveApproval: d,
              nAccountApproved: u,
              bRequiresHostDisclaimer: p,
              fnSetStoreRequireHostDisclaimer: m,
            } = (0, je.g7)(n, o);
          return !d || !u
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(_.$n, {
                    onClick: l,
                    children: (0, e.jsx)(xe.Gq, {
                      toolTipContent:
                        "Make the partner re-request reviewing the sale page because we are allowing them to make further changes",
                      children: (0, e.jsx)("span", {
                        children: "Remove Reviewed Stats",
                      }),
                    }),
                  }),
                  (0, e.jsx)(B.EN, {
                    active: i,
                    children: (0, e.jsx)(hr, {
                      clanSteamID: t.GetClanSteamID(),
                      gidClanEvent: t.GetGID(),
                      closeModal: r,
                    }),
                  }),
                ],
              });
        }
        function hr(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: o } = a,
            i = "Revert SALE PAGE Approval?",
            [l, r, c] = (0, je.hr)(),
            { fnRemoveApprovalAccount: d } = (0, je.g7)(t.GetAccountID(), n),
            {
              fnSetAllowAddingAppsPackagesBundles: u,
              fnSetAllowChangingVanityURL: p,
              fnSetAllowMakingChangesToSalePage: m,
            } = (0, je.fp)(t.GetAccountID(), n),
            S = (0, st.vs)();
          if (S.bLoading)
            return (0, e.jsx)(st.Hh, {
              state: S,
              strDialogTitle: i,
              closeModal: o,
            });
          const v = () => {
            S.fnSetLoading(!0),
              u(!0),
              p(!0),
              m(!0),
              d(f.iA.accountid),
              c(n)
                .then((E) => {
                  E == Fe.R
                    ? o()
                    : (r(),
                      S.fnSetError(!0),
                      S.fnSetStrError("Failed to update Private Data: " + E));
                })
                .catch((E) => {
                  r(),
                    S.fnSetError(!0),
                    S.fnSetStrError((0, ye.H)(E).strErrorMsg);
                });
          };
          return (0, e.jsx)(B.o0, {
            strTitle: i,
            strDescription:
              "The sale is currently approved. This will revert this state and will require the sale operator to request permissions again. Are you sure?",
            onOK: v,
            strOKButtonText: "Yes, Approve",
            bDisableBackgroundDismiss: !0,
            closeModal: o,
            onCancel: r,
            bOKDisabled: !!S.bError,
            children: (0, e.jsx)("div", {
              children:
                "This will also permit them to make any changes to the sale page",
            }),
          });
        }
        function Si(a) {
          const t = G.mh.GetEditModel(),
            { bLoading: n, bPublishRequiresValveApproval: o } = (0, je.g7)(
              t.GetClanAccountID(),
              t.GetGID(),
            ),
            [i, l] = g.useState(void 0);
          return (
            g.useEffect(() => {
              n ||
                (i === void 0
                  ? l(!!o)
                  : i != !!o && t.SetDirty(b.IQ.jsondata_sales));
            }, [t, n, i, o]),
            !t.BHidden() || t.BPublished()
              ? null
              : (0, e.jsx)(hi, {
                  gidClanEvent: t.GetGID(),
                  clanSteamID: t.GetClanSteamID(),
                })
          );
        }
        function mr() {
          const a = G.mh.GetEditModel(),
            { nAcceptingGuidelineAccount: t } = (0, je.lA)(
              a.GetClanAccountID(),
              a.GetGID(),
            );
          return Dt.WN.includes(a.GetClanAccountID())
            ? null
            : t
              ? (0, e.jsxs)("div", {
                  className: Te.ValveOnlyGuidelineSummary,
                  children: [
                    (0, e.jsx)(gi, {}),
                    (0, e.jsxs)("div", {
                      className: Te.SignedBy,
                      children: [
                        "Accepted by:\xA0",
                        (0, e.jsx)(Jn.B, {
                          accountID: t,
                          locToken: "#EventModTile_Signer",
                        }),
                      ],
                    }),
                    (0, e.jsx)(Si, {}),
                  ],
                })
              : (0, e.jsxs)("div", {
                  className: Te.ValveOnlyGuidelineSummary,
                  children: [
                    "The event organizer has not yet accepted the agreements for this sale page. The next time that any non-Valve account attempts to edit this sale, they should be required to accept the agreements.",
                    (0, e.jsx)(Si, {}),
                  ],
                });
        }
        function Ei(a) {
          const { bCheckListReadOnly: t, closeModal: n } = a,
            o = G.mh.GetEditModel(),
            {
              nAcceptingGuidelineAccount: i,
              strPrimaryContactName: l,
              strPrimaryContactEmail: r,
              fnSetAcceptingGuideLine: c,
              fnSetContactEmailAndName: d,
              strExternalSaleEventType: u,
            } = (0, je.lA)(o.GetClanAccountID(), o.GetGID()),
            [p, m, S] = (0, je.hr)(),
            v = !!i,
            [E, D] = g.useState(v),
            [C, M] = g.useState(v),
            [z, k] = g.useState(v),
            le = `${f.TS.PARTNER_BASE_URL}doc/store/promo/${u}_page`,
            me = (0, s.we)(`#EventSaleGuidelines_doc_${u}`),
            [Ie, ze] = g.useState(l || ""),
            [pt, Gt] = g.useState(r || ""),
            [jt, et] = g.useState(!1),
            [Ga, Wn] = g.useState(null),
            La = E && C && z && Ie.length > 0 && pt.length > 0;
          return (0, e.jsx)(B.o0, {
            strTitle: (0, s.we)("#EventSaleGuideLines_title"),
            strDescription: (0, s.we)("#EventSaleGuidelines_desc"),
            bOKDisabled: !La || jt,
            onOK: () => {
              t || c(f.iA.accountid),
                d(Ie, pt),
                !t && o.GetGID()
                  ? (et(!0),
                    S(o.GetGID())
                      .then(n)
                      .catch((_t) => {
                        Wn((0, ye.H)(_t).strErrorMsg);
                      }))
                  : n && n();
            },
            onCancel: n,
            closeModal: n,
            children:
              jt || Ga
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      jt &&
                        (0, e.jsx)(N.t, {
                          string: (0, s.we)("#Saving"),
                          size: "medium",
                          position: "center",
                        }),
                      !!Ga && (0, e.jsx)("div", { children: Ga }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    className: Te.AgreementsCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)(_.Yh, {
                            label: (0, s.we)("#EventSaleGuidelines_rule_5"),
                            checked: E,
                            onChange: D,
                            disabled: t,
                          }),
                          (0, e.jsx)(_.Yh, {
                            label: (0, s.we)("#EventSaleGuidelines_rule_1"),
                            checked: C,
                            onChange: M,
                            disabled: t,
                          }),
                          (0, e.jsx)(_.Yh, {
                            label: (0, e.jsx)("span", {
                              style: { display: "inline" },
                              children: (0, s.PP)(
                                "#EventSaleGuidelines_rule_6",
                                (0, e.jsx)("a", {
                                  href: le,
                                  target: "_blank",
                                  children: me,
                                }),
                              ),
                            }),
                            checked: z,
                            onChange: k,
                            disabled: t,
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: Te.ContactSectionCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Te.SectionTitle,
                            children: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_desc",
                            ),
                          }),
                          (0, e.jsx)(_.pd, {
                            placeholder: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_name",
                            ),
                            value: Ie,
                            onChange: (_t) => ze(_t.currentTarget.value),
                          }),
                          (0, e.jsx)(_.pd, {
                            placeholder: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_email",
                            ),
                            value: pt,
                            onChange: (_t) => Gt(_t.currentTarget.value),
                          }),
                        ],
                      }),
                    ],
                  }),
          });
        }
        function En(a) {
          const { closeModal: t } = a,
            n = G.mh.GetEditModel(),
            [o, i] = g.useState(!1),
            l = (0, L.q3)(
              () => n.GetEventModel().jsondata.sale_presenters || [],
            ),
            [r, c] = g.useState(l);
          return (0, e.jsxs)(B.o0, {
            strTitle: (0, s.we)("#EventDisclaimer_title"),
            strDescription: (0, s.we)("#EventDisclaimer_desc_details"),
            onCancel: t,
            bDisableBackgroundDismiss: !0,
            bOKDisabled:
              !o &&
              (r.length == 0 ||
                r[0].url?.length == 0 ||
                r.some((d) => !_.pd.validateUrl(d.url)) ||
                r.some(
                  (d) => !(d.localized_presenter_name[T.Bhc]?.length > 0),
                )),
            onOK: () => {
              (n.GetEventModel().jsondata.sale_presenters = r),
                n.SetDirty(b.IQ.jsondata_sales),
                t();
            },
            children: [
              (0, e.jsx)(Bt.$A, { editModel: n, eInitLangLanguage: T.Bhc }),
              (0, e.jsx)(Ot.A, {
                items: r,
                onDelete: (d) => c(r.length == 1 ? [] : [...r.splice(d, 1)]),
                onReorder: () => c([...r]),
                render: (d, u) =>
                  (0, e.jsx)(pr, {
                    presenter: d,
                    setPresenter: (p) => {
                      (r[u] = { ...p }), c([...r]);
                    },
                  }),
              }),
              (0, e.jsx)(_.$n, {
                onClick: () => {
                  let d = Math.floor(1 + Math.random() * 1e5);
                  for (; r && r.some((u) => u.unique_id === d); )
                    d = Math.floor(1 + Math.random() * 1e5);
                  c([
                    ...r,
                    {
                      unique_id: d,
                      localized_presenter_name: new Array(T.bP9),
                      url: "",
                    },
                  ]);
                },
                children: (0, s.we)("#EventDisclaimer_add"),
              }),
              r?.length > 0 &&
                (0, e.jsxs)("div", {
                  className: Te.PresenterPreviewCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: Te.PresenterPreviewDesc,
                      children: (0, s.we)("#EventDisclaimer_preview"),
                    }),
                    (0, e.jsx)(rr.W, { rgPresenters: r }),
                  ],
                }),
              (0, e.jsx)(oe.Eb, {
                clanSteamID: n.GetClanSteamID(),
                children: (0, e.jsx)(_.$n, {
                  onClick: () => {
                    c([]), i(!0);
                  },
                  children:
                    "(VO) Clear Presenters to hide event organizers display",
                }),
              }),
            ],
          });
        }
        function pr(a) {
          const { presenter: t, setPresenter: n } = a,
            [o] = (0, L.q3)(() => [ka.O.Get().GetCurEditLanguage()]);
          return (0, e.jsxs)("div", {
            className: Te.PresenterInfoCtn,
            children: [
              (0, e.jsx)(_.pd, {
                label: (0, s.we)("#EventDisclaimer_name"),
                type: "text",
                value: s.NT.Get(t.localized_presenter_name, o) || "",
                onChange: (i) => {
                  (t.localized_presenter_name = s.NT.Set(
                    t.localized_presenter_name,
                    o,
                    i.currentTarget.value,
                  )),
                    n(t);
                },
              }),
              (0, e.jsx)(_.pd, {
                label: (0, s.we)("#EventDisclaimer_url"),
                type: "text",
                mustBeURL: !0,
                placeholder: "https://",
                value: t.url,
                onChange: (i) => {
                  (t.url = i.currentTarget.value), n(t);
                },
              }),
            ],
          });
        }
        var _r = h(34336),
          Ea = ((a) => (
            (a.EditInfo = "apprighteditinfo"),
            (a.Publish = "apprightpublish"),
            (a.ViewErrorData = "apprightviewerrordata"),
            (a.Download = "apprightdownload"),
            (a.UploadCDKeys = "apprightuploadcdkeys"),
            (a.GenerateCDKeys = "apprightgeneratecdkeys"),
            (a.ViewFinancials = "apprightviewfinancials"),
            (a.ManageCEG = "apprightmanageceg"),
            (a.ManagingSigning = "apprightmanagesigning"),
            (a.ManageCDKeys = "apprightmanagecdkeys"),
            (a.EditMarketing = "apprighteditmarketing"),
            (a.EconomySupport = "apprighteconomysupport"),
            (a.EconomySupportSupervisor = "apprighteconomysupportsupervisor"),
            (a.ManagePricing = "appmanagepricing"),
            (a.BroadcastLive = "apprightbroadcastlive"),
            (a.AppRightEditStoreDisplayContent =
              "apprighteditstoredisplaycontent"),
            (a.AppRightViewMarketingTraffic = "apprightviewmarketingtraffic"),
            a
          ))(Ea || {}),
          vr = ((a) => (
            (a.ManagerUsers = "pubrightmanageusers"),
            (a.ActualAuthority = "pubrightactualauthority"),
            (a.ViewFinancials = "pubrightviewfinancials"),
            (a.ApproveWalletFunding = "pubrightapprovewalletfunding"),
            (a.ManageLicensedSites = "pubrightmanagelicensedsites"),
            a
          ))(vr || {});
        class ht {
          static AppRights = [
            { flag: 1, token: "apprighteditinfo" },
            { flag: 2, token: "apprightpublish" },
            { flag: 4, token: "apprightviewerrordata" },
            { flag: 8, token: "apprightdownload" },
            { flag: 16, token: "apprightuploadcdkeys" },
            { flag: 32, token: "apprightgeneratecdkeys" },
            { flag: 64, token: "apprightviewfinancials" },
            { flag: 128, token: "apprightmanageceg" },
            { flag: 256, token: "apprightmanagesigning" },
            { flag: 512, token: "apprightmanagecdkeys" },
            { flag: 1024, token: "apprighteditmarketing" },
            { flag: 2048, token: "apprighteconomysupport" },
            { flag: 4096, token: "apprighteconomysupportsupervisor" },
            { flag: 8192, token: "appmanagepricing" },
            { flag: 16384, token: "apprightbroadcastlive" },
            { flag: 32768, token: "apprightviewmarketingtraffic" },
            { flag: 65536, token: "apprighteditstoredisplaycontent" },
          ];
          static MapAppRights = ht.ConstructAppRightsMap();
          static ConstructAppRightsMap() {
            const t = new Map();
            return ht.AppRights.forEach((n) => t.set(n.token, n)), t;
          }
          static PubRights = [
            { flag: 1, token: "pubrightmanageusers" },
            { flag: 2, token: "pubrightactualauthority" },
            { flag: 4, token: "pubrightviewfinancials" },
            { flag: 8, token: "pubrightapprovewalletfunding" },
            { flag: 16, token: "pubrightmanagelicensedsites" },
          ];
          static MapPubRights = ht.ConstructPubRightsMap();
          static ConstructPubRightsMap() {
            const t = new Map();
            return ht.PubRights.forEach((n) => t.set(n.token, n)), t;
          }
          static GetAppRightFlags(t) {
            let n = 0;
            return (
              t.forEach((o) => {
                n |= ht.MapAppRights.get(o).flag;
              }),
              n
            );
          }
          static GetPublisherRightFlags(t) {
            let n = 0;
            return (
              t.forEach((o) => {
                n |= ht.MapPubRights.get(o).flag;
              }),
              n
            );
          }
        }
        var gr = h(39905),
          Sr = h(49236);
        function Er(a) {
          const { editModel: t } = a,
            [n] = (0, L.q3)(() => [
              t.GetEventModel().jsondata.sale_named_section_background_styles,
            ]),
            [o, i, l] = (0, J.uD)(),
            [r, c] = (0, g.useState)(void 0);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.$n, {
                onClick: i,
                children: (0, s.we)("#Sale_ManageBackgroundStyles"),
              }),
              (0, e.jsx)(B.EN, {
                active: o,
                children: (0, e.jsxs)(B.o0, {
                  strTitle: (0, s.we)("#Sale_ManageBackgroundStyles"),
                  strDescription: (0, s.we)(
                    "#Sale_ManageBackgroundStyles_desc",
                  ),
                  bAlertDialog: !0,
                  closeModal: l,
                  children: [
                    (0, e.jsx)(_.$n, {
                      onClick: () => {
                        const d = {};
                        do
                          d.background_style_identifier =
                            "CustomBackground_" +
                            Math.floor(1 + Math.random() * 1e5);
                        while (
                          n &&
                          n.find(
                            (u) =>
                              u.background_style_identifier ==
                              d.background_style_identifier,
                          )
                        );
                        n
                          ? (t.GetEventModel().jsondata.sale_named_section_background_styles =
                              [
                                ...t.GetEventModel().jsondata
                                  .sale_named_section_background_styles,
                                d,
                              ])
                          : (t.GetEventModel().jsondata.sale_named_section_background_styles =
                              [d]),
                          t.SetDirty(b.IQ.jsondata_sales);
                      },
                      children: gr.Z.Localize("#Button_Create"),
                    }),
                    !n || n.length == 0
                      ? (0, e.jsx)("p", {
                          children: (0, s.we)(
                            "#Sale_ManageBackgroundStyles_none",
                          ),
                        })
                      : (0, e.jsx)("ul", {
                          children: n.map((d, u) =>
                            (0, e.jsx)(
                              "ol",
                              {
                                onClick: () => c(u),
                                children: (0, e.jsx)("p", {
                                  children: d.background_style_identifier,
                                }),
                              },
                              d.background_style_identifier,
                            ),
                          ),
                        }),
                    r !== void 0 &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("hr", {}),
                          (0, e.jsx)(_.JU, {
                            children: (0, s.we)(
                              "#Sale_ManageBackgroundStyles_edit",
                              n[r].background_style_identifier,
                            ),
                          }),
                          (0, e.jsx)(Sr.CF, {
                            editModel: t,
                            backgroundSection: n[r],
                            bHasBackgroundImageControls: !0,
                            bDisallowNamedStyles: !0,
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            ],
          });
        }
        function xr(a) {
          const { salePage: t, updateLandingPage: n } = a,
            o = G.mh.GetEditModel(),
            [i, l] = (0, L.q3)(() => [
              o.GetEventModel().jsondata.sale_opt_in_page_name,
              o.GetEventModel().jsondata.sale_show_creator,
            ]);
          return (0, e.jsxs)("div", {
            className: fe.Columns,
            children: [
              (0, e.jsxs)("div", {
                className: fe.LeftCol,
                children: [
                  t && (0, e.jsx)(wr, {}),
                  n && (0, e.jsx)(Dr, {}),
                  t && (0, e.jsx)(Cr, {}),
                ],
              }),
              (0, e.jsxs)("div", {
                className: fe.RightCol,
                children: [
                  t && (0, e.jsx)(br, {}),
                  t &&
                    (0, e.jsx)(oe.Eb, {
                      clanSteamID: o.GetClanSteamID(),
                      className: F.EditPreviewButton,
                      children: (0, e.jsx)(_.pd, {
                        type: "text",
                        label: (0, s.we)("#Sale_OptInPageName"),
                        tooltip: (0, s.we)("#Sale_OptInPageName_ttip"),
                        value: i,
                        onChange: (r) => {
                          (0, U.h5)(() => {
                            (o.GetEventModel().jsondata.sale_opt_in_page_name =
                              r.target.value),
                              o.SetDirty(b.IQ.jsondata_sales);
                          });
                        },
                      }),
                    }),
                  t &&
                    (0, e.jsx)(xe.he, {
                      toolTipContent: (0, s.we)("#Sale_ShowCreatorHome_ttip"),
                      direction: "top",
                      children: (0, e.jsx)("div", {
                        className: F.InputBorder,
                        children: (0, e.jsx)(_.RF, {
                          onChange: (r) => {
                            (0, U.h5)(() => {
                              (o.GetEventModel().jsondata.sale_show_creator =
                                r),
                                o.SetDirty(b.IQ.jsondata_sales);
                            });
                          },
                          label: (0, s.we)("#Sale_ShowCreatorHome"),
                          checked: l,
                        }),
                      }),
                    }),
                  t &&
                    (0, e.jsxs)(oe.Eb, {
                      clanSteamID: o.GetClanSteamID(),
                      children: [
                        (0, e.jsx)(jr, {}),
                        (0, e.jsx)(fr, {}),
                        (0, e.jsx)(xe.he, {
                          toolTipContent:
                            "Update what a partner is able to change after a sale page is reviewed by Valve",
                          children: (0, e.jsx)(_.$n, {
                            onClick: (r) =>
                              (0, y.pg)(
                                (0, e.jsx)(sr, {
                                  clanSteamID: o.GetClanSteamID(),
                                  gidClanEvent: o.GetGID(),
                                }),
                                (0, ue.uX)(r),
                              ),
                            children: "Update Sale Page Editability",
                          }),
                        }),
                      ],
                    }),
                  (0, e.jsx)(oe.Eb, {
                    clanSteamID: o.GetClanSteamID(),
                    children: (0, e.jsx)(_r.i, { editModel: o }),
                  }),
                  (0, e.jsx)(oe.Eb, {
                    clanSteamID: o.GetClanSteamID(),
                    children: (0, e.jsx)(Er, { editModel: o }),
                  }),
                ],
              }),
            ],
          });
        }
        function fr(a) {
          const t = G.mh.GetEditModel();
          return (0, e.jsx)(xe.he, {
            toolTipContent:
              "Deep discount sale events are curated by Valve to promote successful older games, typically with a 90% discount",
            direction: "top",
            children: (0, e.jsx)("div", {
              className: F.InputBorder,
              children: (0, e.jsx)(_.RF, {
                onChange: (n) => t.SetTag("vo_deep_discount_sale", n),
                checked: t.GetEventModel().BHasTag("vo_deep_discount_sale"),
                label: "(VO) This is a deep discount event?",
              }),
            }),
          });
        }
        function jr(a) {
          const t = G.mh.GetEditModel(),
            [n, o, i, l] = (0, L.q3)(() => [
              t.GetEventModel().jsondata.ownership_requirement_info
                ?.bLockedToAppOwners,
              t.GetEventModel().jsondata.ownership_requirement_info
                ?.strRedirectURL,
              t.GetEventModel().jsondata.sale_use_subscription_layout,
              t.GetEventModel().jsondata.app_right_requirement_info
                ?.bLockedToPartnerAppRights,
            ]),
            [r, c] = g.useState(
              t.GetEventModel().BIsLockedToGameOwners()
                ? t.GetEventModel().GetRequiredAppIDs()?.join(",")
                : "",
            ),
            [d, u] = g.useState(
              t.GetEventModel().BIsLockedToGameOwners()
                ? t.GetEventModel().GetRequiredPackageIDs()?.join(",")
                : "",
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(xe.he, {
                toolTipContent: (0, s.we)("#Sale_OwnershipRestrictions_ttip"),
                direction: "top",
                children: (0, e.jsx)("div", {
                  className: F.InputBorder,
                  children: (0, e.jsx)(_.RF, {
                    onChange: (p) => {
                      (0, U.h5)(() => {
                        const m = t.GetEventModel().jsondata;
                        m.ownership_requirement_info
                          ? (m.ownership_requirement_info.bLockedToAppOwners =
                              p)
                          : (m.ownership_requirement_info = {
                              bLockedToAppOwners: p,
                              rgRequiredAppIDs: [],
                              rgRequiredPackageIDs: [],
                              strRedirectURL: "",
                            }),
                          t.SetDirty(b.IQ.jsondata_sales);
                      });
                    },
                    label: (0, s.we)("#Sale_OwnershipRestrictions"),
                    checked: n,
                  }),
                }),
              }),
              n &&
                (0, e.jsxs)(g.Fragment, {
                  children: [
                    (0, e.jsx)(_.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_RequiredApps"),
                      tooltip: (0, s.we)("#Sale_RequiredApps_ttip"),
                      onChange: (p) => {
                        r != p.target.value &&
                          (c(p.target.value),
                          (0, U.h5)(() => {
                            const m = t.GetEventModel().GetRequiredAppIDs(),
                              S = p.target.value
                                .split(",")
                                .map(Number)
                                .filter((v) => v > 0);
                            m.splice(0, m.length, ...S),
                              t.SetDirty(b.IQ.jsondata_sales);
                          }));
                      },
                      value: r,
                    }),
                    (0, e.jsx)(_.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_RequiredPackages"),
                      tooltip: (0, s.we)("#Sale_RequiredPackages_ttip"),
                      onChange: (p) => {
                        d != p.target.value &&
                          (u(p.target.value),
                          (0, U.h5)(() => {
                            const m = t.GetEventModel().GetRequiredPackageIDs(),
                              S = p.target.value
                                .split(",")
                                .map(Number)
                                .filter((v) => v > 0);
                            m.splice(0, m.length, ...S),
                              t.SetDirty(b.IQ.jsondata_sales);
                          }));
                      },
                      value: d,
                    }),
                    (0, e.jsx)(_.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_OwnershipLockRedirect"),
                      tooltip: (0, s.we)("#Sale_OwnershipLockRedirect_ttip"),
                      onChange: (p) => {
                        o != p.target.value &&
                          (0, U.h5)(() => {
                            (t.GetEventModel().jsondata.ownership_requirement_info.strRedirectURL =
                              p.target.value),
                              t.SetDirty(b.IQ.jsondata_sales);
                          });
                      },
                      value: o,
                    }),
                    (0, e.jsx)(oe.Eb, {
                      clanSteamID: t.GetClanSteamID(),
                      children: (0, e.jsx)(_.Yh, {
                        onChange: (p) => {
                          (0, U.h5)(() => {
                            (t.GetEventModel().jsondata.sale_use_subscription_layout =
                              p),
                              t.SetDirty(b.IQ.jsondata_sales);
                          });
                        },
                        label:
                          "(VO) " + (0, s.we)("#Sale_UseSubscriptionLayout"),
                        tooltip: (0, s.we)("#Sale_UseSubscriptionLayout_ttip"),
                        checked: !!i,
                      }),
                    }),
                  ],
                }),
              (0, e.jsx)(xe.he, {
                toolTipContent: (0, s.we)(
                  "#Sale_PartnerAppEditRestrictions_ttip",
                ),
                direction: "top",
                children: (0, e.jsx)("div", {
                  className: F.InputBorder,
                  children: (0, e.jsx)(_.RF, {
                    onChange: (p) => {
                      (0, U.h5)(() => {
                        const m = t.GetEventModel().jsondata;
                        m.app_right_requirement_info
                          ? (m.app_right_requirement_info.bLockedToPartnerAppRights =
                              p)
                          : (m.app_right_requirement_info = {
                              bLockedToPartnerAppRights: p,
                              nAppRightFlag: ht.GetAppRightFlags([Ea.EditInfo]),
                            }),
                          t.SetDirty(b.IQ.jsondata_sales);
                      });
                    },
                    label: (0, s.we)("#Sale_PartnerAppEditRestrictions"),
                    checked: !!l,
                  }),
                }),
              }),
            ],
          });
        }
        function br(a) {
          const t = G.mh.GetEditModel(),
            n = (0, L.q3)(
              () => t.GetEventModel().jsondata.sale_discount_event_id,
            ),
            o = async () => {
              const i = new Set(),
                l = new Array();
              t.GetEventModel().jsondata.sale_sections.forEach((p) => {
                p.capsules.forEach(async (m) => {
                  m.type === "bundle"
                    ? l.push(qe.A.Get().QueueBundleRequest(Number(m.id), {}))
                    : m.type === "sub" &&
                      l.push(qe.A.Get().QueuePackageRequest(Number(m.id), {}));
                });
              }),
                await Promise.all(l),
                t.GetEventModel().jsondata.sale_sections.forEach((p) => {
                  p.capsules.forEach(async (m) => {
                    if (m.type === "bundle" || m.type === "sub") {
                      const S =
                        m.type === "bundle"
                          ? qe.A.Get().GetBundle(Number(m.id))
                          : qe.A.Get().GetPackage(Number(m.id));
                      S && S.GetIncludedAppIDs().forEach((v) => i.add(v));
                    } else i.add(Number(m.id));
                  });
                });
              let r = Array.from(i);
              r.sort();
              const c = new FormData();
              c.append("sessionid", (0, f.KC)()),
                c.append("name", "[AUTO] " + t.GetName()),
                c.append("event", "1"),
                c.append("type", "discount"),
                c.append("header", t.GetName()),
                c.append("appids", r.join(",")),
                c.append("start_date", t.GetEventStartTime().toString()),
                c.append("end_date", t.GetEventEndTime().toString()),
                c.append("description", "#discount_desc_preset_special"),
                t.GetEventModel().jsondata.sale_discount_event_id &&
                  c.append(
                    "discount_id",
                    t
                      .GetEventModel()
                      .jsondata.sale_discount_event_id.toString(),
                  );
              const u =
                (
                  await K().post(
                    f.TS.COMMUNITY_BASE_URL +
                      "actions/ajaxcreateupdatediscountevent",
                    c,
                    { withCredentials: !0 },
                  )
                ).data.discountid ||
                t.GetEventModel().jsondata.sale_discount_event_id;
              t.GetEventModel().jsondata.sale_discount_event_id ||
                (t.GetEventModel().jsondata.sale_discount_event_id = u),
                (0, y.pg)(
                  (0, e.jsx)(_a.t, {
                    editModel: t,
                    bSkipChecks: !0,
                    partnerEventEditorStore: G.mh,
                    OnSuccess: () => {
                      window.open(
                        f.TS.PARTNER_BASE_URL + "admin/editdiscountevent/" + u,
                      );
                    },
                  }),
                  window,
                );
            };
          return (0, e.jsxs)(oe.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: F.EditPreviewButton,
            children: [
              (0, e.jsxs)("div", {
                className: F.EventEditorTextTitle,
                children: [
                  (0, s.we)("#Sale_CreateUpdateDiscountEventTitle"),
                  (0, e.jsx)(W.o, {
                    tooltip: (0, s.we)(
                      "#Sale_CreateUpdateDiscountEventTitle_ttip",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)(_.jn, {
                onClick: o,
                children: t.GetEventModel().jsondata.sale_discount_event_id
                  ? (0, s.we)(
                      "#Sale_UpdateDiscountEvent",
                      t.GetEventModel().jsondata.sale_discount_event_id,
                    )
                  : (0, s.we)("#Sale_CreateDiscountEvent"),
              }),
              !!n &&
                (0, e.jsx)("a", {
                  href: `${f.TS.PARTNER_BASE_URL}admin/editdiscountevent/${n}`,
                  target: "_blank",
                  children: "Edit Discount Event",
                }),
            ],
          });
        }
        function Cr(a) {
          const t = G.mh.GetEditModel(),
            [n, o, i, l, r] = (0, L.q3)(() => {
              const p = t.GetEventModel().jsondata;
              return [
                p.sale_section_disable_capitalize,
                p.sale_section_font_size,
                p.sale_font,
                p.sale_font_weight,
                p.sale_associated_advertising_appid,
              ];
            }),
            c = [
              { label: "Default", data: { fontFamily: "" } },
              {
                label: "Default, Bold",
                data: {
                  fontFamily: "'Motiva Sans', 'Play', sans-serif",
                  fontWeight: "bold",
                },
              },
              {
                label: "Jolly Lodger (Halloween)",
                data: {
                  fontFamily:
                    "'Jolly Lodger', 'New Rocker', 'Chonburi', 'Motiva Sans'",
                },
              },
              {
                label: "Sigmar One",
                data: { fontFamily: "'Sigmar One', sans-serif" },
              },
            ].map((p) => ({
              ...p,
              label: (0, e.jsx)("div", {
                style: { ...p.data },
                children: p.label,
              }),
            })),
            d = c.find((p) => p.data.fontFamily == i && p.data.fontWeight == l),
            u = d && d.data;
          return (0, e.jsxs)(oe.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            children: [
              (0, e.jsx)(_.m, {
                label: (0, s.we)("#Sale_SaleFont"),
                tooltip: (0, s.we)("#Sale_SaleFont_ttip"),
                strDropDownClassName: F.DropDownScroll,
                rgOptions: c,
                selectedOption: u,
                onChange: (p) => {
                  (0, U.h5)(() => {
                    (t.GetEventModel().jsondata.sale_font = p.data.fontFamily),
                      (t.GetEventModel().jsondata.sale_font_weight =
                        p.data.fontWeight),
                      t.SetDirty(b.IQ.jsondata_sales);
                  });
                },
                contextMenuPositionOptions: { bDisablePopTop: !0 },
              }),
              (0, e.jsx)(_.pd, {
                type: "text",
                label: (0, s.we)("#Sale_SectionTitleFontSize"),
                tooltip: (0, s.we)("#Sale_SectionTitleFontSize_ttip"),
                onChange: (p) => {
                  (0, U.h5)(() => {
                    (t.GetEventModel().jsondata.sale_section_font_size = Number(
                      p.target.value,
                    )),
                      t.SetDirty(b.IQ.jsondata_sales);
                  });
                },
                value: o,
              }),
              (0, e.jsx)(_.Yh, {
                label: (0, s.we)("#Sale_DontCapitalizeSectionTitles"),
                tooltip: (0, s.we)("#Sale_DontCapitalizeSectionTitles_ttip"),
                onChange: (p) => {
                  (0, U.h5)(() => {
                    (t.GetEventModel().jsondata.sale_section_disable_capitalize =
                      p),
                      t.SetDirty(b.IQ.jsondata_sales);
                  });
                },
                checked: n,
              }),
              (0, e.jsx)(_.pd, {
                type: "number",
                label: (0, s.we)("#Sale_AdvertisingApp_ID"),
                tooltip: (0, s.we)("#Sale_AdvertisingApp_ID_ttip"),
                onChange: (p) => {
                  (0, U.h5)(() => {
                    (t.GetEventModel().jsondata.sale_associated_advertising_appid =
                      Number(p.target.value)),
                      t.SetDirty(b.IQ.jsondata_sales);
                  });
                },
                value: r,
              }),
            ],
          });
        }
        function wr(a) {
          const t = G.mh.GetEditModel(),
            { bAllowChangingVanityURL: n, bAllowMakingChangesToSalePage: o } =
              (0, je.fp)(t.GetClanAccountID(), t.GetGID()),
            [i, l, r] = (0, L.q3)(() => [
              t.GetEventModel().jsondata.sale_vanity_id,
              t.GetEventModel().jsondata
                .sale_vanity_id_valve_approved_for_sale_subpath,
              t.GetEventModel().jsondata.bAutoUpdateVanityURLForContentHub,
            ]),
            { creatorHome: c } = (0, Qe.FV)(t.GetClanAccountID());
          let d = null;
          return (
            i && !l
              ? c
                ? (d = c.GetCreatorHomeURL("publisher") + "sale/" + i)
                : (d = `${f.TS.STORE_BASE_URL}curator/${t.GetClanAccountID()}/sale/${i}`)
              : i && l && (d = f.TS.STORE_BASE_URL + "sale/" + i),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(_.pd, {
                  type: "text",
                  label: (0, s.we)("#Sale_VanityID"),
                  tooltip: (0, s.we)("#Sale_VanityID_ttip"),
                  onChange: (u) => t.SetSaleVanityID(u.target.value),
                  value: i,
                  disabled: r || !n || !o,
                }),
                t.GetEventModel().jsondata.bAutoUpdateVanityURLForContentHub &&
                  (0, e.jsx)("div", {
                    className: "LongURL Note",
                    children:
                      "The vanity URL for this sale page is automatically set based on its content hub configuration. Adjust the settings under Content Hub Settings to change this behavior.",
                  }),
                d
                  ? (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("span", {
                          className: "DialogLabel",
                          children: (0, s.we)("#Sale_VanityID_Link"),
                        }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("a", {
                          href: d,
                          className: "LongURL",
                          target: f.TS.IN_CLIENT ? "" : "_blank",
                          children: d,
                        }),
                      ],
                    })
                  : (0, e.jsx)("div", {
                      className: Pt.ErrorStylesWithIcon,
                      children: (0, s.we)(
                        "#EventEditor_SaleNotReady_SaleVanity_ttip",
                      ),
                    }),
                (0, e.jsx)(oe.Eb, {
                  requireAdmin: !0,
                  clanSteamID: t.GetClanSteamID(),
                  children: (0, e.jsx)(_.Yh, {
                    label: (0, s.we)("#Sale_ValveTopSalePath"),
                    tooltip: (0, s.we)("#Sale_ValveTopSalePath_ttip"),
                    onChange: (u) => {
                      (0, U.h5)(() => {
                        (t.GetEventModel().jsondata.sale_vanity_id_valve_approved_for_sale_subpath =
                          u),
                          t.SetDirty(b.IQ.jsondata_sales);
                      });
                    },
                    checked: l,
                  }),
                }),
              ],
            })
          );
        }
        function Dr(a) {
          const t = G.mh.GetEditModel(),
            n = (0, L.q3)(
              () =>
                t.GetEventModel().jsondata.sale_update_landing_page_vanity_id,
            ),
            [o, i] = (0, Q.TB)(t.GetClanAccountID()),
            [l] = (0, ge.t7)(i.appid, { include_basic_info: !0 });
          if (o || !l) return;
          const r = n?.length ? l.GetStorePageURL() + "/" + n : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.pd, {
                type: "text",
                label: (0, s.we)("#Sale_VanityID"),
                tooltip: (0, s.we)("#Sale_VanityID_ttip"),
                onChange: (c) =>
                  t.SetSaleUpdateLandingPageVanityID(c.target.value),
                value: n,
              }),
              r
                ? (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("span", {
                        className: "DialogLabel",
                        children: (0, s.we)("#Sale_VanityID_Link"),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("a", {
                        href: r,
                        className: "LongURL",
                        target: f.TS.IN_CLIENT ? "" : "_blank",
                        children: r,
                      }),
                    ],
                  })
                : (0, e.jsx)("div", {
                    className: Pt.ErrorStylesWithIcon,
                    children: (0, s.we)(
                      "#EventEditor_SaleNotReady_UpdateLandingPage_ttip",
                    ),
                  }),
            ],
          });
        }
        var xi = h(87426),
          xn = h(15736);
        function vt(a) {
          const {
              strSectionId: t,
              hasMinimize: n,
              strTitle: o,
              children: i,
              strToolTip: l,
              valveOnly: r,
              valveOnlyClanSteamID: c,
              requireAdmin: d,
              dataToCopy: u,
            } = a,
            p = (0, L.q3)(() => n && (0, Ye.Nx)(t)),
            m = (0, oe.Dd)(c, d);
          if (c && !m) return null;
          const S = n
            ? (v) => {
                (0, Ye.mi)(t), v.preventDefault(), v.stopPropagation();
              }
            : void 0;
          return (0, e.jsx)(Tt, {
            strSectionId: t,
            children: (0, e.jsxs)("div", {
              id: t,
              className: (0, j.A)({
                [fe.SettingCtn]: !0,
                [fe.ValveOnly]: r || !!c,
              }),
              children: [
                (0, e.jsxs)("div", {
                  className: (0, j.A)(fe.Title, n && fe.HasHover),
                  onClick: S,
                  children: [
                    o,
                    l && (0, e.jsx)(W.o, { tooltip: l }),
                    !!u &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(xi.R6, {
                            dataToCopy: xn.E.k_EventData_SubMenu,
                          }),
                          (0, e.jsx)(xi.oO, {
                            dataToPaste: xn.E.k_EventData_SubMenu,
                          }),
                        ],
                      }),
                    n &&
                      (0, e.jsx)(Kn.pn, {
                        bIsMinimized: p,
                        fnToggleMinimize: () => (0, Ye.mi)(t),
                      }),
                  ],
                }),
                !p && i,
              ],
            }),
          });
        }
        var sa = h(88748);
        function yr(a) {
          const { editModel: t } = a,
            [n, o, i] = (0, L.q3)(() => [
              t.GetEventModel().BIsNextFest(),
              t.GetEventModel().jsondata.sale_ml_recommender_delay_hours,
              t.GetEventModel().jsondata.sale_ml_recommender_weight_exponent,
            ]);
          return n
            ? (0, e.jsxs)("div", {
                className: fe.SettingCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: fe.Title,
                    children: "Next Fest",
                  }),
                  "For the Live Next Fest event make sure to clone, review and operate the Next Fest event using:",
                  (0, e.jsx)("a", {
                    target: "_blank",
                    href: "https://confluence.valve.org/display/SteamBiz/Next+Fest+Launch+Checklist",
                    children: " Operations Checklist",
                  }),
                  (0, e.jsxs)("div", {
                    className: sa.WarningContainer,
                    children: [
                      (0, e.jsx)(Tr, {
                        editModel: t,
                        fnPredicate: (l) =>
                          !(l.jsondata.sale_ml_recommender_delay_hours > 0),
                        fnFixIt: (l) =>
                          (l.jsondata.sale_ml_recommender_delay_hours = 48),
                        fixItText: "Set to 48 hours",
                        children: () =>
                          (0, e.jsx)("span", {
                            children:
                              "Next Fest should have ML Recommender Delay set.",
                          }),
                      }),
                      (0, e.jsx)(fi, {
                        editModel: t,
                        fnPredicate: (l) =>
                          (0, A.ye)(l.section_type) && !l.show_as_demos,
                        fnFixIt: (l) => (l.show_as_demos = !0),
                        children: (l) =>
                          (0, e.jsxs)("span", {
                            children: [
                              "There are ",
                              l,
                              ` that don't have the "Show demo information" checkbox checked.`,
                            ],
                          }),
                      }),
                      (0, e.jsx)(fi, {
                        editModel: t,
                        fnPredicate: (l) =>
                          (0, A.ye)(l.section_type) &&
                          !l.prefer_demo_store_page,
                        fnFixIt: (l) => (l.prefer_demo_store_page = !0),
                        children: (l) =>
                          (0, e.jsxs)("span", {
                            children: [
                              "There are ",
                              l,
                              ` that don't have the "Prefer demo standalone store pages" checkbox checked.`,
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(_.pd, {
                    type: "number",
                    mustBeNumeric: !0,
                    rangeMin: 0,
                    label: "Randomization delay (hours)",
                    tooltip:
                      "The number of hours from the start of Next Fest to show the items in random order instead of ML recommended order",
                    onChange: (l) => {
                      (t.GetEventModel().jsondata.sale_ml_recommender_delay_hours =
                        Number(l.target.value)),
                        t.SetDirty(b.IQ.jsondata_sales);
                    },
                    placeholder: String(1e4),
                    value: o,
                  }),
                  (0, e.jsx)(_.pd, {
                    type: "number",
                    mustBeNumeric: !0,
                    rangeMin: -1,
                    label: "Recommendation weight exponent",
                    tooltip:
                      "After the randomization delay, items are shuffled weighted by their ML recommended rank. Higher values keep the top recommendations closer to the front. Leave empty or 0 to use the default of " +
                      A.ld +
                      ". Set to -1 to disable shuffling and use the exact recommended order.",
                    onChange: (l) => {
                      (t.GetEventModel().jsondata.sale_ml_recommender_weight_exponent =
                        Number(l.target.value)),
                        t.SetDirty(b.IQ.jsondata_sales);
                    },
                    placeholder: String(A.ld),
                    value: i,
                  }),
                ],
              })
            : null;
        }
        const Tr = (0, w.PA)((a) => {
            const {
              editModel: t,
              fnPredicate: n,
              fnFixIt: o,
              fixItText: i,
              children: l,
            } = a;
            if (!n?.(t.GetEventModel())) return null;
            const c = () => {
              o(t.GetEventModel()), t.SetDirty(b.IQ.jsondata_sales);
            };
            return (0, e.jsxs)("div", {
              className: sa.Warning,
              children: [
                l(),
                (0, e.jsx)("div", {
                  className: sa.Buttons,
                  children:
                    o &&
                    (0, e.jsx)(_.$n, {
                      onClick: () => c(),
                      children: i || "Fix it",
                    }),
                }),
              ],
            });
          }),
          fi = (0, w.PA)((a) => {
            const {
                editModel: t,
                fnPredicate: n,
                fnFixIt: o,
                fixItText: i,
                children: l,
              } = a,
              c = t.GetSaleSections().filter(n);
            if (c.length == 0) return null;
            const d = 25,
              u = (0, e.jsx)(e.Fragment, {
                children: c
                  .slice(0, d)
                  .map((S, v) =>
                    (0, e.jsx)(
                      "div",
                      {
                        children: (0, e.jsx)(ga.fi, {
                          eventModel: t.GetEventModel(),
                          saleSection: S,
                          editLanguage: t.GetCurEditLanguage(),
                          index: v,
                        }),
                      },
                      S.unique_id,
                    ),
                  )
                  .concat(
                    c.length > d
                      ? [(0, e.jsx)("div", { children: "..." }, "elipses")]
                      : [],
                  ),
              }),
              p = (0, e.jsx)(xe.Gq, {
                toolTipContent: u,
                children: (0, e.jsxs)("span", {
                  className: sa.TooltipIndicator,
                  children: [c.length, " sections"],
                }),
              }),
              m = () => {
                c.forEach(o), t.SetDirty(b.IQ.jsondata_sales);
              };
            return (0, e.jsxs)("div", {
              className: sa.Warning,
              children: [
                l(p),
                (0, e.jsx)("div", {
                  className: sa.Buttons,
                  children:
                    o &&
                    (0, e.jsx)(_.$n, {
                      onClick: () => m(),
                      children: i ?? "Fix it",
                    }),
                }),
              ],
            });
          }),
          Ir = (0, w.PA)((a) => {
            const { editModel: t, fnOnOKCallback: n } = a,
              o = t.GetEventModel(),
              {
                fnSetStorePublishingRequiresValveApproval: i,
                fnSetUserWhoEnabledSalePage: l,
              } = (0, je.g7)(t.GetClanAccountID(), t.GetGID()),
              [r, c] = g.useState(o.jsondata.sale_vanity_id ?? ""),
              [d] = g.useState(new Na.lu()),
              u =
                !rt.iA.is_support &&
                !Qe.pF
                  .GetCreatorHome(t.GetClanSteamID())
                  ?.BHasClanAccountFlagSet(qt.Wv.Mv),
              p = Math.floor(Date.now() / 1e3),
              m = new Date();
            m.setHours(10), m.setMinutes(0), m.setSeconds(0);
            const S = new Date();
            S.setDate(m.getDate() + 1),
              S.setHours(10),
              S.setMinutes(0),
              S.setSeconds(0);
            const [v, E] = g.useState(
                o.startTime > p ? o.startTime : Math.floor(S.getTime() / 1e3),
              ),
              D = new Date();
            D.setDate(S.getDate() + 1),
              D.setHours(10),
              D.setMinutes(0),
              D.setSeconds(0);
            const [C, M] = g.useState(
                o?.endTime > Math.floor(D.getTime() / 1e3)
                  ? o.endTime
                  : Math.floor(D.getTime() / 1e3),
              ),
              z = () => {
                (0, U.h5)(() => {
                  t.SetSaleVanityID(r),
                    t.SetEventStartTime(v),
                    t.SetEventEndTime(C),
                    l(rt.iA.accountid),
                    u && i(!0),
                    d.Dispatch(),
                    n();
                }),
                  a.closeModal && a.closeModal();
              },
              k = () => {
                (0, U.h5)(() => {
                  (t.GetEventModel().jsondata.bSaleEnabled = !1),
                    t.SetDirty(b.IQ.jsondata_sales);
                }),
                  a.closeModal && a.closeModal();
              },
              le = r.replace(/[^\w-]/g, "").length > 0 && v && C;
            return (0, e.jsx)(ve.tH, {
              children: (0, e.jsx)(B.x_, {
                onEscKeypress: k,
                children: (0, e.jsxs)(_.UC, {
                  children: [
                    (0, e.jsx)(_.Y9, {
                      children: (0, s.we)("#Sale_EnableTitle"),
                    }),
                    (0, e.jsx)(_.nB, {
                      children: (0, e.jsx)(_.a3, {
                        children: (0, e.jsxs)("div", {
                          className: fe.SetupCtn,
                          children: [
                            (0, e.jsx)("span", {
                              children: (0, s.we)("#Sale_EnableDesc"),
                            }),
                            (0, e.jsxs)("ol", {
                              children: [
                                (0, e.jsx)("li", {
                                  children: (0, s.we)("#Sale_EnableDesc_1"),
                                }),
                                (0, e.jsx)("li", {
                                  children: (0, s.we)("#Sale_EnableDesc_2"),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)(_.pd, {
                              type: "text",
                              label: (0, s.we)("#Sale_VanityID"),
                              tooltip: (0, s.we)("#Sale_VanityID_ttip"),
                              onChange: (me) => c(me.target.value),
                              value: r,
                            }),
                            (0, e.jsx)(_e.K, {
                              strDescription: (0, s.we)("#Sale_New_Start"),
                              nEarliestTime: 0,
                              fnGetTimeToUpdate: () => v,
                              fnSetTimeToUpdate: E,
                              fnIsValidDateTime: () => !0,
                              bShowTimeZone: !0,
                            }),
                            (0, e.jsx)(_e.K, {
                              strDescription: (0, s.we)("#Sale_New_End"),
                              nEarliestTime: 0,
                              fnGetTimeToUpdate: () => C,
                              fnSetTimeToUpdate: M,
                              fnIsValidDateTime: () => C > v,
                              bShowTimeZone: !0,
                            }),
                            (0, e.jsx)(oe.Eb, {
                              clanSteamID: t.GetClanSteamID(),
                              requireAdmin: !0,
                              children: (0, e.jsx)(hi, {
                                clanSteamID: t.GetClanSteamID(),
                                gidClanEvent: t.GetGID(),
                                fnOkCallbackList: d,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsx)(_.wi, {
                      children: (0, e.jsx)(_.CB, {
                        onCancel: k,
                        bOKDisabled: !le,
                        onOK: z,
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
          Ar = (0, w.PA)((a) => {
            const { editModel: t, fnOnOKCallback: n } = a,
              o = t.GetEventModel(),
              [i, l] = g.useState(
                o.jsondata.sale_update_landing_page_vanity_id ?? "",
              ),
              r = () => {
                (0, U.h5)(() => {
                  t.SetSaleUpdateLandingPageVanityID(i), n();
                }),
                  a.closeModal && a.closeModal();
              },
              c = () => {
                (0, U.h5)(() => {
                  (t.GetEventModel().jsondata.bSaleEnabled = !1),
                    t.SetDirty(b.IQ.jsondata_sales);
                }),
                  a.closeModal && a.closeModal();
              },
              d = i.replace(/[^\w-]/g, "").length > 0;
            return (0, e.jsx)(ve.tH, {
              children: (0, e.jsx)(B.x_, {
                onEscKeypress: c,
                children: (0, e.jsxs)(_.UC, {
                  children: [
                    (0, e.jsx)(_.Y9, {
                      children: (0, s.we)(
                        "#Sale_UpdateLandingPage_EnableTitle",
                      ),
                    }),
                    (0, e.jsx)(_.nB, {
                      children: (0, e.jsx)(_.a3, {
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("span", {
                              children: (0, s.we)(
                                "#Sale_UpdateLandingPage_EnableDesc",
                              ),
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)(_.pd, {
                              type: "text",
                              label: (0, s.we)(
                                "#Sale_UpdateLandingPageVanityID",
                              ),
                              tooltip: (0, s.we)(
                                "#Sale_UpdateLandingPageVanityID_ttip",
                              ),
                              onChange: (u) => l(u.target.value),
                              value: i,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsx)(_.wi, {
                      children: (0, e.jsx)(_.CB, {
                        onCancel: c,
                        bOKDisabled: !d,
                        onOK: r,
                      }),
                    }),
                  ],
                }),
              }),
            });
          });
        function ji(a) {
          const { mode: t } = a,
            n = G.mh.GetEditModel(),
            [o, i] = g.useState(n.BHasSaleEnabled()),
            { creatorHome: l } = (0, Qe.FV)(
              n.GetEventModel().clanSteamID.GetAccountID(),
            ),
            r = g.useRef(void 0),
            c = (m) => {
              i(m),
                r?.current?.setState({ checked: m }),
                (0, U.h5)(() => {
                  (n.GetEventModel().jsondata.bSaleEnabled = m),
                    n.SetDirty(b.IQ.jsondata_sales);
                });
            },
            d = (0, oe.Dd)(n.GetClanSteamID(), !0),
            u =
              !n.BIsSourceEventSaleEnabled() &&
              t != Pa &&
              (!l || !l.BHasClanAccountFlagSet(qt.Wv.Jn)) &&
              !d,
            p = t != Pa;
          return (0, e.jsxs)("div", {
            className: F.InputBorder,
            children: [
              (0, e.jsx)(_.RF, {
                ref: r,
                onChange: (m) => {
                  m && p
                    ? (r?.current?.setState({ checked: !1 }),
                      i(!1),
                      (0, y.pg)(
                        t == Oa
                          ? (0, e.jsx)(Ar, {
                              editModel: n,
                              fnOnOKCallback: () => c(!0),
                            })
                          : (0, e.jsx)(Ir, {
                              editModel: n,
                              fnOnOKCallback: () => c(!0),
                            }),
                        window,
                      ))
                    : c(m);
                },
                label: (0, s.we)(
                  t == Oa ? "#Sale_option_updatelandingpage" : "#Sale_option",
                ),
                disabled: u,
                checked: o,
              }),
              u &&
                (0, e.jsx)("div", {
                  className: Pt.WarningStyles,
                  children: (0, s.we)("#Sale_Enable_Warning"),
                }),
            ],
          });
        }
        var bi = h(55737),
          Fa = h(16346),
          fn = h(29543),
          jn = h(34360),
          Gr = h(1743),
          Lr = h(75912),
          Ci = h(11436);
        function Nr(a) {
          const t = () => a.closeModal && a.closeModal(),
            [n, o] = (0, g.useState)(!1),
            [i, l] = (0, g.useState)(null),
            [r, c] = (0, g.useState)(null),
            [d, u] = (0, g.useState)(null),
            [p, m] = (0, g.useState)(!1);
          (0, g.useEffect)(() => {
            const E = K().CancelToken.source();
            return (
              wi().then(() => {
                E.token.reason || o(!0);
              }),
              () => E.cancel("SaleEventExplorerDialog: unmounting")
            );
          }, []);
          const S = (E, D, C, M) => {
              l(E), c(D), u(C), m(M);
            },
            v = () => {
              (0, y.pg)(
                (0, e.jsx)(B.o0, {
                  strTitle: (0, s.we)("#EventEditor_GenericAreYouSure"),
                  strDescription: (0, s.we)("#Sale_Debug_Delete"),
                  onOK: () => {
                    Pr(i), t();
                  },
                }),
                window,
              );
            };
          return (0, e.jsx)(ve.tH, {
            children: (0, e.jsx)(B.x_, {
              onEscKeypress: t,
              children: (0, e.jsxs)(_.UC, {
                children: [
                  (0, e.jsx)(_.Y9, {
                    children: (0, s.we)("#Sale_Debug_Title"),
                  }),
                  (0, e.jsx)(_.nB, {
                    children: (0, e.jsx)(_.a3, {
                      children: n
                        ? (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsx)("div", {
                                children: (0, s.we)("#Sale_Debug_Desc"),
                              }),
                              (0, e.jsx)(Mr, { fnSetSaleItem: S }),
                              i
                                ? (0, e.jsx)(Or, {
                                    saleCapsule: i,
                                    list: r,
                                    tabList: d,
                                    bInLinkedItems: p,
                                  })
                                : (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#Sale_Debug_NoMatchingItem",
                                    ),
                                  }),
                            ],
                          })
                        : (0, e.jsx)(N.t, {
                            string: (0, s.we)("#Sale_Debug_Loading"),
                            size: "medium",
                          }),
                    }),
                  }),
                  (0, e.jsx)(_.wi, {
                    children: (0, e.jsx)(_.CB, {
                      onCancel: t,
                      bOKDisabled: !i,
                      strOKText: (0, s.we)("#Button_Delete"),
                      onOK: v,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        async function wi() {
          const a = G.mh.GetEditModel();
          await qe.A.Get().HintLoadStoreItems(
            Array.from(a.GetAllSalePageFeaturedItems("apps")),
            Array.from(a.GetAllSalePageFeaturedItems("packages")),
            Array.from(a.GetAllSalePageFeaturedItems("bundles")),
            null,
            null,
            null,
            { include_assets: !0 },
          );
        }
        function bn(a, t = "") {
          return (
            qe.A.Get()
              .GetStoreItem(a.id, (0, fn.SW)(a.type))
              ?.GetName() || t
          );
        }
        function Mr(a) {
          const { fnSetSaleItem: t } = a,
            n = (0, g.useRef)(null),
            o = (0, g.useRef)(null),
            i = (0, g.useRef)(0),
            l = (0, g.useRef)(void 0);
          (0, g.useEffect)(() => () => window.clearTimeout(i.current), []);
          const r = (0, g.useCallback)(
            async (c) => {
              let d = c.target.value;
              !d ||
                d.trim().length == 0 ||
                ((d = d.toLocaleLowerCase()),
                window.clearTimeout(i.current),
                n.current && n.current("SearchForCurator: new request"),
                (i.current = window.setTimeout(async () => {
                  const u = G.mh.GetEditModel();
                  let p = Number.parseInt(d.trim()),
                    m = new Array();
                  if (u.GetEventModel().BHasSaleEnabled()) {
                    const S = (C) =>
                        C.id == p || bn(C).toLowerCase().indexOf(d) >= 0,
                      v = (C) => {
                        m.findIndex((M) => M.id == C.id && M.type == C.type) <
                          0 && m.push(C);
                      };
                    u.GetEventModel().jsondata.sale_sections.forEach((C) => {
                      C.capsules && C.capsules.filter(S).forEach(v);
                    });
                    const E = u.GetTabSaleSection();
                    E &&
                      E.tabs.forEach((C) => {
                        C.capsules && C.capsules.filter(S).forEach(v);
                      });
                    const D = (C) => {
                      const M = (me) => C.id == me.id && C.type == me.type;
                      let z = new Array();
                      u.GetEventModel().jsondata.sale_sections.forEach((me) => {
                        me.capsules?.filter(M).length > 0 && z.push(me);
                      });
                      let k = new Array();
                      E &&
                        E.tabs?.forEach((me) => {
                          me.capsules.filter(M).length > 0 && k.push(me);
                        });
                      const le =
                        u
                          .GetEventModel()
                          .jsondata.tagged_items?.findIndex(
                            (me) => me && M(me?.capsule),
                          ) >= 0;
                      t(C, z, k, le);
                    };
                    o.current = (0, Fa.lX)(
                      (0, e.jsx)(Br, { list: m, fnChooseCapsule: D }),
                      l.current.element,
                      {
                        bOverlapHorizontal: !0,
                        bMatchWidth: !0,
                        bFitToWindow: !0,
                        bDisablePopTop: !0,
                        bNoFocusWhenShown: !0,
                        bSkipFocusWhenReady: !0,
                      },
                    );
                  }
                }, 300)));
            },
            [t],
          );
          return (0, e.jsx)(_.pd, {
            type: "text",
            placeholder: (0, s.we)("#Sale_Debug_Placeholder"),
            tooltip: (0, s.we)("#Sale_Debug_InputToolTip"),
            onChange: r,
            onBlur: () => {
              setTimeout(() => o.current && o.current.Hide(), 200);
            },
            ref: l,
          });
        }
        function Br(a) {
          const { list: t, fnChooseCapsule: n } = a;
          return (0, e.jsx)(jn.tz, {
            className: Gr.SearchResults,
            children: t.map((o) =>
              (0, e.jsx)(
                jn.kt,
                {
                  onSelected: () => n(o),
                  children: (0, e.jsx)("div", {
                    children: (0, s.we)(
                      "#Sale_Debug_ContextItem",
                      bn(o, (0, s.we)("#Sale_Debug_Unknown")),
                      o.type,
                    ),
                  }),
                },
                "sale_" + o.id + "_tpe_" + o.type,
              ),
            ),
          });
        }
        function Or(a) {
          const { saleCapsule: t, list: n, tabList: o, bInLinkedItems: i } = a,
            l = G.mh.GetEditModel(),
            r = l.GetCurEditLanguage();
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)(
                  "#Sale_Debug_MatchItem",
                  bn(t, (0, s.we)("#Sale_Debug_Unknown")),
                  t.type,
                ),
              }),
              (0, e.jsx)("div", {
                children: (0, s.we)("#Sale_Debug_AppearsIn"),
              }),
              (0, e.jsx)("ol", {
                children:
                  n && n.length > 0
                    ? n.map((c) =>
                        (0, e.jsx)(
                          "li",
                          {
                            children: (0, e.jsx)(ga.fi, {
                              saleSection: c,
                              editLanguage: r,
                              eventModel: l.GetEventModel(),
                              index: l.GetSaleSectionIndexByID(c.unique_id, !0),
                            }),
                          },
                          c.unique_id,
                        ),
                      )
                    : (0, s.we)("#Sale_Debug_NoMatchingItem"),
              }),
              (0, e.jsx)("div", {
                children: (0, s.we)("#Sale_Debug_Tab_AppearsIn"),
              }),
              (0, e.jsx)("ol", {
                children:
                  o && o.length > 0
                    ? o.map((c) =>
                        (0, e.jsx)(
                          "li",
                          { children: (0, Lr.l8)(c, r) },
                          c.unique_id,
                        ),
                      )
                    : (0, s.we)("#Sale_Debug_NoMatchingItem"),
              }),
              (0, e.jsx)("div", {
                children: (0, s.we)(
                  i
                    ? "#Sale_Debug_LinkedSection"
                    : "#Sale_Debug_Not_LinkedSection",
                ),
              }),
            ],
          });
        }
        function Pr(a) {
          if (!a) return;
          const t = G.mh.GetEditModel();
          (0, U.h5)(() => {
            let n = 0;
            const o = (l) => {
              let r = l.capsules.findIndex(
                (c) => c.id == a.id && c.type == a.type,
              );
              for (; r >= 0; )
                l.capsules.splice(r, 1),
                  (n += 1),
                  (r = l.capsules.findIndex(
                    (c) => c.id == a.id && c.type == a.type,
                  ));
            };
            t.GetEventModel().jsondata.sale_sections.forEach(o);
            let i = t.GetTabSaleSection();
            i && i.tabs.forEach(o), n && t.SetDirty(b.IQ.jsondata_sales);
          });
        }
        function Di(a) {
          return `${a.type}:${a.id}`;
        }
        function Cn(a) {
          const t = a.split(":");
          return { type: t[0], id: parseInt(t[1]) };
        }
        function Rr() {
          const a = [],
            t = new Map(),
            n = G.mh.GetEditModel();
          return (
            n.GetTabSaleSection()?.tabs?.forEach((i) => {
              const l = {
                type: "tab",
                unique_id: i.unique_id,
                strLabel: (0, s.we)(
                  i.localized_label?.[T.Bhc] || i.default_label,
                ),
              };
              a.push(l),
                i.capsules.forEach((r) => {
                  const c = Di(r);
                  t.has(c) || t.set(c, new Set()), t.get(c).add(i.unique_id);
                });
            }),
            n.GetEventModel().jsondata.sale_sections?.forEach((i) => {
              if (i.section_type != "items") return;
              const l = {
                type: "section",
                unique_id: i.unique_id,
                strLabel: (0, s.we)(
                  (0, Ci.s0)(i, n.GetEventModel(), dt.uF) ||
                    i.localized_label[T.Bhc] ||
                    i.default_label,
                ),
              };
              a.push(l),
                i.capsules.forEach((r) => {
                  const c = Di(r);
                  t.has(c) || t.set(c, new Set()), t.get(c).add(i.unique_id);
                });
            }),
            { mapItemLocations: t, rgSections: a }
          );
        }
        function kr(a) {
          const [t, n] = (0, g.useState)(!1),
            [o, i] = (0, g.useState)(null),
            l = () => a.closeModal && a.closeModal();
          (0, g.useEffect)(() => {
            const u = K().CancelToken.source();
            return (
              wi().then(() => {
                u.token.reason || n(!0);
              }),
              i(Rr()),
              () =>
                u.cancel("SaleEventItemLocationCSVDownloadDialog: unmounting")
            );
          }, []);
          let r = null;
          if (o) {
            const u = o.rgSections.filter((S) => S.type == "tab").length,
              p = o.rgSections.length - u,
              m = o.mapItemLocations.size;
            r = (0, s.we)("#Sale_GameExport_ContentSummary", u, p, m);
          }
          const c = () => {
              const { mapItemLocations: u, rgSections: p } = o,
                m = [];
              for (const D of Array.from(u.keys())) {
                const C = Cn(D);
                let M;
                try {
                  M = qe.A.Get()
                    .GetStoreItem(C.id, (0, fn.SW)(C.type))
                    ?.GetName();
                } catch {}
                m.push([`${C.type}: ${M || C.id}`, D]);
              }
              m.sort();
              const S = [],
                v = ["Item", "AppID", "Count"];
              for (const D of p) v.push(`${D.strLabel} (${D.type})`);
              S.push(v);
              for (const [D, C] of m) {
                const M = u.get(C),
                  z = Cn(C),
                  k = [D, z.id.toString(), M.size.toString()];
                for (const le of p) k.push(M.has(le.unique_id) ? "1" : " ");
                S.push(k);
              }
              const E = "item_locations.csv";
              we.g.WriteCSVToFile(S, E),
                (0, y.mK)(
                  (0, e.jsx)(B.o0, {
                    strTitle: (0, s.we)("#Sale_GameExport_Title"),
                    bAlertDialog: !0,
                    strDescription: (0, s.we)(
                      "#Sale_GameExport_FileExported",
                      E,
                    ),
                  }),
                  window,
                ),
                l();
            },
            d = () => {
              const { mapItemLocations: u } = o,
                p = [],
                m = ["Type", "ID", "Name", "Dev", "Pub", "Franchise"];
              p.push(m);
              const S = [];
              for (const E of Array.from(u.keys())) {
                const D = Cn(E);
                try {
                  const C = qe.A.Get().GetStoreItem(D.id, (0, fn.SW)(D.type));
                  S.push([D.type, C.GetName() || D.id.toString(), C]);
                } catch {}
              }
              S.sort();
              for (const [E, D, C] of S) {
                const M = C.GetDeveloperNames().join(","),
                  z = C.GetPublisherNames().join(","),
                  k = C.GetFranchiseNames().join(","),
                  le = [E.toString(), C.GetID().toString(), D, M, z, k];
                p.push(le);
              }
              const v = "item_pubs.csv";
              we.g.WriteCSVToFile(p, v),
                (0, y.mK)(
                  (0, e.jsx)(B.o0, {
                    strTitle: (0, s.we)("#Sale_GameExport_Title"),
                    bAlertDialog: !0,
                    strDescription: (0, s.we)(
                      "#Sale_GameExport_FileExported",
                      v,
                    ),
                  }),
                  window,
                ),
                l();
            };
          return (0, e.jsx)(ve.tH, {
            children: (0, e.jsx)(B.x_, {
              onEscKeypress: l,
              children: (0, e.jsxs)(_.UC, {
                children: [
                  (0, e.jsx)(_.Y9, {
                    children: (0, s.we)("#Sale_GameExport_Title"),
                  }),
                  (0, e.jsxs)(_.nB, {
                    children: [
                      (0, e.jsxs)(_.a3, {
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, s.we)("#Sale_GameExport_Desc"),
                          }),
                          (0, e.jsx)("br", {}),
                          t
                            ? r
                            : (0, e.jsx)(N.t, {
                                position: "center",
                                string: (0, s.we)("#Sale_Debug_Loading"),
                                size: "medium",
                              }),
                          (0, e.jsx)(_.$n, {
                            onClick: c,
                            disabled: !t,
                            children: (0, s.we)("#Sale_Export"),
                          }),
                        ],
                      }),
                      (0, e.jsx)(oe.Eb, {
                        clanSteamID: G.mh.GetEditModel().GetClanSteamID(),
                        children: (0, e.jsxs)(_.a3, {
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, s.we)("#Sale_GameExport_Desc2"),
                            }),
                            (0, e.jsx)(_.$n, {
                              onClick: d,
                              disabled: !t,
                              children: (0, s.we)("#Sale_Export"),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(_.wi, {
                    children: (0, e.jsx)(_.jn, {
                      onClick: l,
                      children: (0, s.we)("#Button_Close"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        var ce = h(63872),
          be = h.n(ce),
          wn = h(18994),
          Rt = h(49285);
        const Fr = (a) => {
          const t = new Array();
          return (
            a.rows.forEach((n) => {
              const o = () => {
                a.onSelected && a.onSelected(n);
                let i = document.getElementById(n.strSectionId);
                i && (i.scrollIntoView(!0), window.scrollBy(0, -75));
              };
              t.push(
                (0, e.jsx)(
                  "div",
                  {
                    id: "tc_" + n.strSectionId,
                    role: "button",
                    tabIndex: 0,
                    className: (0, j.A)(
                      {
                        [Rt.TOCEntry]: !0,
                        [Rt.SectionOnScreen]: n.bSectionIsVisible,
                        [Rt.TOCIndent]: n.bIndent,
                      },
                      n.strClassName,
                    ),
                    onClick: o,
                    onKeyDown: (i) => {
                      (i.key === "Enter" || i.key === " ") &&
                        (i.preventDefault(), o());
                    },
                    children: (0, e.jsx)("div", {
                      style: n.style,
                      className: Rt.TOCEntryText,
                      children: n.strLabel,
                    }),
                  },
                  "tc_" + n.strSectionId,
                ),
              );
            }),
            (0, e.jsxs)("div", {
              className: (0, j.A)(Rt.TableOfContentsContainer, a.className),
              children: [
                a.elHeader,
                (0, e.jsxs)("div", {
                  className: Rt.TableOfContents,
                  children: [
                    (0, e.jsx)("div", {
                      className: Rt.Header,
                      children: a.strHeader,
                    }),
                    t,
                    a.elBottomContent,
                  ],
                }),
              ],
            })
          );
        };
        var Dn = h(74107),
          Ua = h(9295);
        function Ur(a) {
          const t = a.eventType == T.ajI;
          return (0, e.jsxs)("div", {
            className: Ua.ManageLocCtn,
            children: [
              (0, e.jsx)("div", {
                className: Ua.Header,
                children: Dn.F5.Localize("#EventEditor_Loc_Title"),
              }),
              (0, e.jsxs)("div", {
                className: Ua.ManageLocContents,
                children: [
                  t
                    ? Dn.F5.Localize("#EventEditor_Loc_Overview_Page")
                    : Dn.F5.Localize("#EventEditor_Loc_Overview"),
                  (0, e.jsx)("div", {
                    className: Ua.LocButtonsCtn,
                    children: a.children,
                  }),
                ],
              }),
            ],
          });
        }
        var It = h(41635),
          za = h(6231),
          zr = h(6103),
          Ha = h.n(zr),
          Hr = h(41878),
          yi = h(57673),
          Vr = h(28796),
          Va = h.n(Vr),
          Ti = h(54968);
        function Ii(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            o = (0, $.Bw)(n, $.PH.k_eStoreSalePage, "forceAbsolute"),
            i = (0, $.Bw)(n, $.PH.k_eStoreHardwarePreview, "forceAbsolute"),
            r = (0, oe.Dd)(t.GetClanSteamID(), !0) && (0, $.LH)(n),
            c = [
              {
                label: (0, s.we)("#Sale_Debug_LivePreview_Device_Desktop"),
                data: "desktop",
                size: { width: 1500, height: 1100 },
              },
              {
                label: (0, s.we)("#Sale_Debug_LivePreview_Device_Mobile"),
                data: "mobile",
                size: { width: 402, height: 874 },
              },
              {
                label: (0, s.we)("#Sale_Debug_LivePreview_Device_SteamDeck"),
                data: "steamdeck",
                size: { width: 852, height: 532 },
                queryParams: [{ key: "force_gamepad_client_view", value: "1" }],
              },
              {
                label: (0, s.we)("#Sale_Debug_LivePreview_Device_NewTab"),
                tooltip: (0, s.we)(
                  "#Sale_Debug_LivePreview_Device_NewTab_ttip",
                ),
                data: "window",
                newWindow: !0,
              },
            ];
          r &&
            c.push({
              label: "(VO) Pre-launch hardware page",
              tooltip: "Valve admins on dev and beta only.",
              data: "hardwarepreview",
              size: { width: 1500, height: 1100 },
              url: i,
            });
          const d = (m) => {
              const S = c.find((E) => E.data == m),
                v = !(S?.newWindow ?? !1);
              Ti.xr
                .Get()
                .ShowPreviewWindow(S?.url ?? o, n, v, S?.size, S?.queryParams);
            },
            u = (0, Ti.cv)(),
            p = (m) => {
              let S = { bOverlapHorizontal: !0 };
              const v = (0, e.jsx)(_.n4, {
                rgOptions: c,
                onValueSelected: (E, D) => d(D.data),
              });
              (0, Fa.lX)(v, m, S);
            };
          return (0, e.jsxs)("div", {
            className: (0, j.A)(Va().LivePreview, u && Va().Connected),
            children: [
              (0, e.jsx)(_.$n, {
                className: (0, j.A)(Va().Button),
                onClick: () => d(void 0),
                children: (0, s.we)("#Sale_Debug_LivePreview"),
              }),
              (0, e.jsx)(_.$n, {
                className: (0, j.A)(Va().DeviceDropdown),
                onClick: (m) => p(m),
                children: (0, e.jsx)(ut.GB9, {}),
              }),
            ],
          });
        }
        function Wr(a) {
          return (0, e.jsx)(dt.Cs, {
            location: dt.W3,
            children: (0, e.jsx)(Qr, { ...a }),
          });
        }
        const Qr = (0, w.PA)((a) => {
            const { editModel: t } = a,
              n = (0, f.Qn)(),
              o = si(),
              [i, l, r, c] = (0, L.q3)(() => [
                (0, za.QD)(),
                (0, za.dy)(),
                !!t.GetEventModel().jsondata.sale_sub_menu,
                t.GetEventType(),
              ]),
              d = c == T.ajI,
              u = (C) => {
                a.onSelected && a.onSelected(C);
              },
              p = (C, M, z, k = !1, le) => {
                C.push({
                  strLabel: M,
                  strSectionId: z,
                  style: le,
                  bIndent: k,
                  bSectionIsVisible: o.m_mapVisibleSections.has(z),
                });
              };
            let m = t.GetEventModel(),
              S = new Array();
            p(S, (0, s.we)("#Sale_PageConfigOptions"), "SalePageEdit_Config");
            const v = (0, oe.Dd)(t.GetClanSteamID(), !1);
            (v || m.GetTaggedItems().length > 0) &&
              p(
                S,
                (0, s.we)(
                  "#Sale_TaggedItemsSection",
                  m.GetTaggedItems().length,
                ),
                "SalePageEdit_TaggedItems",
              ),
              p(
                S,
                (0, s.we)(
                  d ? "#Sale_Artwork_Sections_Page" : "#Sale_Artwork_Sections",
                ),
                "SalePageEdit_AllArtworkCtn",
              ),
              (m.BHasTag("contenthub") || m.BUsesContentHubForItemSource()) &&
                p(S, "Content Hub Settings", "SalePageEdit_ContentHub");
            let E = !1,
              D = 0;
            if (
              (m.GetSaleSections().forEach((C, M) => {
                if (E && i && !(0, yi.bF)(l, C)) D += 1;
                else {
                  const z = (0, e.jsx)(ga.fi, {
                      saleSection: C,
                      eventModel: t.GetEventModel(),
                      editLanguage: t.GetCurEditLanguage(),
                      index: M,
                    }),
                    k = { ...(0, yt.sq)(C, m, n), color: C.label_color },
                    le = wn.mj + C.unique_id;
                  p(S, z, le, E, k), C.section_type === "tabs" && (E = !0);
                }
              }),
              D > 0)
            ) {
              const C = (0, e.jsxs)("div", {
                className: Ha().Ctn,
                onClick: (M) => {
                  (0, za.qT)(void 0), M.stopPropagation();
                },
                children: [
                  (0, e.jsx)("div", {
                    className: Ha().ButtonIcon,
                    children: (0, e.jsx)(ut.X, {}),
                  }),
                  (0, s.we)("#Sale_TOC_ClearFilter"),
                  (0, e.jsx)(W.o, {
                    tooltip: (0, s.we)("#Sale_TOC_ClearFilter_ttip", D),
                  }),
                ],
              });
              p(S, C, "DummyTargetNotReal", !0);
            }
            return (
              v &&
                (r &&
                  p(S, "(VO) Sub Menu Editor", "SalePageEdit_SubMenuEditor"),
                p(S, "(VO) Custom CSS Editor", "SalePageEdit_CustomCSSCode")),
              (0, e.jsx)(ve.tH, {
                children: (0, e.jsx)(Fr, {
                  className: Ha().SalePageTOCPlacement,
                  elHeader: (0, e.jsx)(Ur, {
                    eventType: a.editModel.GetEventType(),
                    children: (0, e.jsx)(Qs, { editModel: a.editModel }),
                  }),
                  strHeader: (0, s.we)("#Sale_TOC"),
                  rows: S,
                  onSelected: u,
                  elBottomContent: (0, e.jsx)(Ai, { editModel: a.editModel }),
                }),
              })
            );
          }),
          Ai = (a) => {
            const { editModel: t } = a,
              [n, o, i] = (0, J.uD)(),
              l = (0, U.XI)((r) => {
                const c = {
                    ...A.G6,
                    unique_id: t.GenerateSaleSectionUniqueID(),
                  },
                  d = t.GetEventModel().jsondata.sale_sections.slice(-1)[0];
                d &&
                  ((c.label_color = d.label_color),
                  (c.background_gradient_bottom = d.background_gradient_bottom),
                  (c.background_gradient_top = d.background_gradient_top),
                  (c.border_color = d.border_color),
                  (c.border_width = d.border_width)),
                  b.nG.SetSaleSectionType(t.GetEventType(), c, r),
                  t.GetEventModel().jsondata.sale_sections.push(c),
                  t.SetDirty(b.IQ.jsondata_sales),
                  (0, Ye.mi)((0, Ye.LY)(c), !0),
                  i();
              });
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(B.EN, {
                    active: n,
                    children: (0, e.jsx)(Yr, {
                      clanSteamID: t.GetClanSteamID(),
                      eventType: t.GetEventType(),
                      fnSectionTypeChosen: l,
                      closeModal: i,
                    }),
                  }),
                }),
                (0, e.jsx)(_.jn, {
                  onClick: o,
                  className: F.AddSectionButton,
                  children: (0, s.we)("#Sale_AddNewSection"),
                }),
              ],
            });
          };
        function Yr(a) {
          const {
              clanSteamID: t,
              eventType: n,
              fnSectionTypeChosen: o,
              closeModal: i,
            } = a,
            [l, r] = g.useState("unselected_empty"),
            c = (0, Hr.q)(t, n);
          return (0, e.jsxs)(B.o0, {
            strTitle: (0, s.we)("#Sale_AddNewSection_Title"),
            strDescription: (0, s.we)("#Sale_AddNewSection_Desc"),
            onOK: () => o(l),
            onCancel: i,
            closeModal: i,
            children: [
              (0, e.jsx)(yt.gB, {
                rgSectionTypeInfos: c,
                sectionType: l,
                fnSetSectionType: (d) => r(d),
              }),
              (0, e.jsx)("div", {
                className: (0, j.A)(F.FlexColumnContainer, Ha().ReassignCtn),
              }),
            ],
          });
        }
        function Jr(a) {
          const t = G.mh.GetEditModel(),
            [n, o, i] = (0, J.uD)(),
            { bSoloMode: l, SetSoloMode: r } = (0, Ye.eQ)();
          return (0, e.jsxs)("div", {
            className: ce.BottomBarControls,
            children: [
              (0, e.jsx)("div", {
                children: (0, e.jsx)(xe.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Debug_LivePreview_ttip"),
                  children: (0, e.jsx)(Ii, { editModel: t }),
                }),
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(xe.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Debug_Tooltip"),
                  children: (0, e.jsx)(_.$n, {
                    onClick: (c) =>
                      (0, y.pg)((0, e.jsx)(Nr, {}), (0, ue.uX)(c)),
                    children: (0, e.jsx)(ut.eSy, {}),
                  }),
                }),
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(xe.Gq, {
                  toolTipContent: (0, s.we)("#Sale_GameExport_Desc"),
                  children: (0, e.jsx)(_.$n, {
                    onClick: (c) =>
                      (0, y.pg)((0, e.jsx)(kr, {}), (0, ue.uX)(c)),
                    children: (0, e.jsx)(ut.f5X, {}),
                  }),
                }),
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(B.EN, {
                    active: n,
                    children: (0, e.jsx)(Kr, { editModel: t, closeModal: i }),
                  }),
                  (0, e.jsx)(xe.Gq, {
                    toolTipContent: (0, s.we)("#Sale_ReorderSections_ttip"),
                    children: (0, e.jsx)(_.$n, {
                      onClick: () => o(),
                      children: (0, e.jsx)(ut._EF, {}),
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: ce.MinimizeAll,
                children: (0, e.jsx)(xe.Gq, {
                  toolTipContent: (0, s.we)(
                    "#Sale_Section_MinimizeAll_Tooltip",
                  ),
                  children: (0, e.jsx)(_.$n, {
                    onClick: Ye.TA,
                    children: (0, e.jsx)(ut.Xjb, {}),
                  }),
                }),
              }),
              (0, e.jsx)("div", {
                className: ce.MinimizeAll,
                children: (0, e.jsx)(xe.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Section_SoloMode_ttip"),
                  children: (0, e.jsx)(_.Yh, {
                    label: (0, s.we)("#Sale_Section_SoloMode"),
                    checked: l,
                    onChange: (c) => r(c),
                  }),
                }),
              }),
            ],
          });
        }
        function Kr(a) {
          const { editModel: t, closeModal: n } = a,
            o = (0, L.q3)(() => t.GetSaleSections()),
            [i, l] = g.useState(null);
          g.useEffect(() => (l([...o]), () => l(null)), [o]);
          const r = (0, f.Qn)(),
            c = (d) => {
              const u = t.GetSaleSections().findIndex((m) => d === m),
                p = {
                  ...(0, yt.sq)(d, t.GetEventModel(), r),
                  color: d.label_color,
                };
              return (0, e.jsx)("div", {
                className: ce.SectionTitle,
                style: p,
                children: (0, e.jsx)(ga.fi, {
                  saleSection: d,
                  editLanguage: t.GetCurEditLanguage(),
                  eventModel: t.GetEventModel(),
                  index: u,
                }),
              });
            };
          return (0, e.jsx)(dt.Cs, {
            location: dt.Ay,
            children: (0, e.jsx)(B.o0, {
              strTitle: (0, s.we)("#Sale_ReorderSections"),
              onOK: () => {
                (t.GetEventModel().jsondata.sale_sections = i),
                  t.SetDirty(b.IQ.jsondata_sales),
                  l(null);
              },
              onCancel: () => l(null),
              closeModal: n,
              children: i
                ? (0, e.jsx)("div", {
                    className: ce.ReorderSectionCtn,
                    children: (0, e.jsx)("div", {
                      className: ce.SectionList,
                      children: (0, e.jsx)(Ot.A, {
                        items: i,
                        onMove: (d, u) => {
                          let p = [...i];
                          (0, It.yY)(p, d, u), l(p);
                        },
                        render: c,
                      }),
                    }),
                  })
                : (0, e.jsx)(N.t, {
                    string: (0, s.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
            }),
          });
        }
        const Zr = g.lazy(() =>
          Promise.all([h.e(10091), h.e(8502)]).then(h.bind(h, 17065)),
        );
        function qr(a) {
          const { editModel: t } = a,
            n = (S) => {
              t.GetEventModel().jsondata.sale_custom_css != S &&
                ((t.GetEventModel().jsondata.sale_custom_css = S),
                t.SetDirty(b.IQ.jsondata_sales));
            },
            o = t.GetEventModel().jsondata,
            [i, l, r] = (0, L.q3)(() => [
              o.sale_custom_css,
              o.sale_vanity_id_valve_approved_for_sale_subpath,
              t.GetName(),
            ]),
            [c, d] = g.useState(() => r + "_custom.css"),
            u = (S) => {
              const v = S.target.files?.[0];
              if (v) {
                d(S.target.files[0].name);
                const E = new FileReader();
                (E.onload = (D) => {
                  const C = D.target.result.toString();
                  (t.GetEventModel().jsondata.sale_custom_css = C),
                    t.SetDirty(b.IQ.jsondata_sales),
                    (S.target.value = "");
                }),
                  E.readAsText(v);
              }
            },
            p = () => {
              const S = document.createElement("a"),
                v = new Blob([i], { type: "text/css" });
              (S.href = URL.createObjectURL(v)),
                (S.download = c),
                document.body.appendChild(S),
                S.click();
            },
            m = {
              selectOnLineNumbers: !0,
              tabCompletion: "on",
              colorDecorators: !0,
              scrollBeyondLastLine: !1,
              automaticLayout: !0,
            };
          return (0, e.jsx)(e.Fragment, {
            children: l
              ? (0, e.jsxs)("div", {
                  className: fe.CustomCssCtn,
                  children: [
                    (0, e.jsx)("p", {
                      children:
                        "Add custom CSS which is only added to the store's sale page header. Please include nocache=1 in url when viewing your latest changes on the store. Avoid targeting the generated class names like 'broadcast_embeddable_Event_1A0NY' as the 1A0NY is programmatically generated and can be changed by the compiler with future props.",
                    }),
                    (0, e.jsx)("h3", { children: "Custom Fonts" }),
                    (0, e.jsx)("p", {
                      children:
                        " If you're going to import custom fonts you need to declare each family separately or they won't import correctly. ",
                    }),
                    (0, e.jsxs)("div", {
                      className: fe.CodeSnippet,
                      children: [
                        (0, e.jsx)("code", { children: "'//For Example'" }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("code", {
                          children:
                            "@import url('https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap'); ",
                        }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("code", {
                          children:
                            "@import url('https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap');",
                        }),
                      ],
                    }),
                    (0, e.jsx)("p", {
                      children:
                        "Additionally, when you declare a font-family in your custom CSS do not wrap the name of the family in quotation marks.",
                    }),
                    (0, e.jsxs)("div", {
                      className: fe.CodeSnippet,
                      children: [
                        (0, e.jsx)("code", { children: "'//For Example'" }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("code", {
                          children: "font-family: Protest Strike",
                        }),
                        " will work, ",
                        (0, e.jsx)("code", {
                          children: 'font-family: "Protest Strike"',
                        }),
                        " will NOT",
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: fe.ButtonGroup,
                      children: [
                        (0, e.jsx)("input", { type: "file", onChange: u }),
                        (0, e.jsx)(_.$n, { onClick: p, children: "Export" }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: fe.CodeEditor,
                      children: (0, e.jsx)(g.Suspense, {
                        fallback: null,
                        children: (0, e.jsx)(Zr, {
                          width: "100%",
                          height: "100%",
                          language: "css",
                          theme: "vs-dark",
                          value: i || "",
                          options: m,
                          onChange: n,
                        }),
                      }),
                    }),
                  ],
                })
              : (0, e.jsx)("div", {
                  className: fe.SettingCtn,
                  children: (0, e.jsx)("p", {
                    children:
                      "The custom CSS editor is disabled. The sale page needs to be setup to use store/sale. This is a Valve Only setting found in the General Configuration Section",
                  }),
                }),
          });
        }
        var Xr = h(30366),
          $r = h(72739),
          ia = h(54736),
          ed = h(40604);
        const Gi = g.createContext(void 0);
        function td(a) {
          return (0, e.jsx)(Gi, { value: a.elContent, children: a.children });
        }
        function ad(a) {
          const t = g.useContext(Gi);
          return t ? $r.createPortal(a.children, t) : null;
        }
        const nd = (0, w.PA)((a) => {
            const t = G.mh.GetEditModel(),
              n = t.GetCategoryAsType(),
              o = t.BPublished(),
              i = t.BUnlisted(),
              l = t.BVisible(),
              r = n == T.ajI;
            return (0, e.jsxs)("div", {
              className: (0, j.A)(
                ia.EventEditorTopBarContainer,
                o && (l || i) ? ia.EventPublished : ia.EventUnPublished,
              ),
              children: [
                (0, e.jsxs)("div", {
                  className: x().EventBarBackAndTitle,
                  children: [
                    (0, e.jsx)($.tj, {
                      eventModel: t.GetEventModel(),
                      route: $.PH.k_eCommunityAdminPage,
                      className: x().EventBarBack,
                      children: (0, s.we)("#EventDisplay_EventsDashBtn"),
                    }),
                    (0, e.jsx)("div", {
                      className: x().EventBarTitleCtn,
                      children: (0, e.jsx)(Bt.zm, { editModel: t }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: x().EventOptions,
                  children: (0, e.jsx)(Bt.$A, { editModel: t }),
                }),
                (0, e.jsxs)("div", {
                  className: x().EventEditButtons,
                  children: [
                    !r &&
                      (0, e.jsx)($.tj, {
                        eventModel: t.GetEventModel(),
                        route: $.PH.k_eCommunityPreview,
                        className: x().EditPreviewButton,
                        children:
                          n == T.uYK
                            ? (0, s.we)("#EventEditor_Preview_News")
                            : (0, s.we)("#EventEditor_Preview"),
                      }),
                    t.BHasSaleEnabled() &&
                      (0, e.jsx)($.tj, {
                        eventModel: t.GetEventModel(),
                        route: $.PH.k_eCommunityPreviewSale,
                        className: x().EditPreviewButton,
                        children: r
                          ? (0, s.we)("#EventEditor_PreviewSale_Page")
                          : (0, s.we)("#EventEditor_PreviewSale"),
                      }),
                    t.BHasSaleEnabled() &&
                      (0, e.jsx)(xe.Gq, {
                        toolTipContent: (0, s.we)(
                          "#Sale_Debug_LivePreview_ttip",
                        ),
                        children: (0, e.jsx)(Ii, { editModel: t }),
                      }),
                  ],
                }),
              ],
            });
          }),
          sd = (0, w.PA)((a) => {
            const { setAdditionalContentDiv: t } = a,
              n = G.mh.GetEditModel(),
              o = n.GetEventModel(),
              i = n.GetEventType() == T.ajI,
              { creatorHome: l } = (0, Qe.FV)(n.GetClanAccountID()),
              r = i && l?.GetLinkedEventGID() == o.GID,
              c =
                (n.GetVisibilityState() == A.zv.k_EEventStateVisible ||
                  n.BUnlisted()) &&
                (!i || r);
            return (0, e.jsxs)("div", {
              className: ia.EventEditorBottomBar,
              children: [
                (0, e.jsx)(ed.c, { editModel: G.mh.GetEditModel() }),
                !i &&
                  (0, e.jsx)($.tj, {
                    eventModel: o,
                    route: $.PH.k_eCommunityPreview,
                    className: x().EditPreviewButton,
                    children: (0, s.we)("#EventEditor_Preview"),
                  }),
                c &&
                  (0, e.jsxs)(g.Fragment, {
                    children: [
                      (0, e.jsx)($.tj, {
                        className: x().EditPreviewButton,
                        eventModel: o,
                        route: $.PH.k_eStoreView,
                        children: i
                          ? (0, s.we)("#EventEditor_ViewLive_CreatorHome")
                          : (0, s.we)("#EventEditor_ViewLive"),
                      }),
                      (0, e.jsx)("span", {
                        className: ia.DisplayAdminPanel_Spacer,
                        children: " ",
                      }),
                    ],
                  }),
                (0, e.jsx)("div", { className: ia.AdditionalContent, ref: t }),
              ],
            });
          });
        var id = h(47797),
          od = h(18368),
          gt = h.n(od),
          oa = h(47534),
          ld = h(24660);
        function dp(a) {
          const { rgSocialMedia: t } = a,
            [n, o] = React.useState(t ? [...t] : []),
            [i, l] = React.useState(n.length),
            r = React.useCallback(
              (c) => {
                c.length > i && l(c.length), o(c);
              },
              [i],
            );
          return jsxs("div", {
            children: [
              jsx(Li, { ...a, rgSocialMediaItems: n, fnSetItems: r }),
              jsx(ud, { items: n, maxSeen: i }),
            ],
          });
        }
        function Li(a) {
          const {
              rgSocialMediaItems: t,
              fnSetItems: n,
              rgSupportedSocialMediaTypes: o,
              rgValidationData: i,
            } = a,
            l = g.useMemo(
              () =>
                o
                  .filter(
                    (p) =>
                      t.findIndex((m) => m.type === p.type) === -1 ||
                      p.type === "qq" ||
                      p.type === "qqlink",
                  )
                  .map((p) => ({
                    label: (0, s.we)(`#StoreAdmin_SocialMedia_Type_${p.type}`),
                    data: p.type,
                  }))
                  .sort((p, m) => (p.label < m.label ? -1 : 1)),
              [o, t],
            ),
            r = (p) => {
              let m = t.slice();
              m.splice(p, 1), n(m);
            },
            c = (p, m) => {
              let S = t.slice();
              (0, It.yY)(S, p, m), n(S);
            },
            d = (p, m) => {
              const S = t.map((v, E) => (E === p ? { ...v, link: m } : v));
              n(S);
            },
            u = (p) => {
              let m = t.slice();
              m.push({ type: p, link: "" }), n(m);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(rd, { options: l, onAddLink: u }),
              (0, e.jsx)(Ot.A, {
                items: t,
                onDelete: r,
                onMove: c,
                render: (p, m) =>
                  (0, e.jsx)(
                    dd,
                    {
                      item: p,
                      onUpdateLink: (S) => d(m, S),
                      validationData: i[p.type],
                    },
                    p.type,
                  ),
              }),
            ],
          });
        }
        function rd(a) {
          const { options: t, onAddLink: n } = a,
            o = (i) => {
              const l = i.data;
              l && n(l);
            };
          return (0, e.jsx)("div", {
            className: oa.AddLinkDropDown,
            children: (0, e.jsx)(_.ZU, {
              strDefaultLabel: (0, s.we)("#StoreAdmin_SocialMedia_Add"),
              controlled: !0,
              rgOptions: t,
              onChange: o,
              selectedOption: null,
            }),
          });
        }
        function Ni(a, t) {
          let n = !0,
            o = "";
          return (
            t.prefix
              ? (a.type === "mastodon"
                  ? (o = (0, s.we)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      t.prefix.join(", "),
                    ))
                  : (o = (0, s.we)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      t.prefix.join(", "),
                    )),
                a.link &&
                  ((n = !1),
                  t.prefix.forEach((i) => {
                    a.link.startsWith(i) && (n = !0);
                  })))
              : t.number
                ? ((o = (0, s.we)("#StoreAdmin_SocialMedia_ValidationNumber")),
                  a.link && (n = /^\d+$/.test(a.link)))
                : t.text
                  ? (o = (0, s.we)("#StoreAdmin_SocialMedia_ValidationText"))
                  : t.regex &&
                    a.type === "tumblr" &&
                    (o = (0, s.we)("#StoreAdmin_SocialMedia_ValidationTumblr")),
            { bValid: n, strTooltip: o }
          );
        }
        function dd(a) {
          const { item: t, onUpdateLink: n, validationData: o } = a;
          let i;
          o.number
            ? (i = (0, s.we)("#StoreAdmin_SocialMedia_EnterNumber"))
            : o.text
              ? (i = (0, s.we)("#StoreAdmin_SocialMedia_EnterName"))
              : (i = (0, s.we)("#StoreAdmin_SocialMedia_EnterLink"));
          const { bValid: l, strTooltip: r } = Ni(t, o);
          return (0, e.jsxs)("div", {
            className: oa.SocialMediaRow,
            children: [
              (0, e.jsx)("div", {
                className: oa.SocialMediaType,
                children: (0, s.we)(`#StoreAdmin_SocialMedia_Type_${t.type}`),
              }),
              (0, e.jsx)(ld.BA, {
                className: oa.SocialMediaLink,
                type: "text",
                value: t.link,
                placeholder: i,
                onChange: (c) => n(c.target.value),
              }),
              r &&
                (0, e.jsx)(xe.he, {
                  className: oa.SocialMediaTooltip,
                  toolTipContent: r,
                  children: "(?)",
                }),
              !l &&
                (0, e.jsx)("div", {
                  className: oa.ValidationError,
                  children: r,
                }),
            ],
          });
        }
        function cd(a, t) {
          let n = Array(),
            o = 0;
          for (
            a.forEach((i) => {
              i.link &&
                (n.push(
                  React.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${o}][type]`,
                    value: i.type,
                  }),
                ),
                n.push(
                  React.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${o}][link]`,
                    value: i.link,
                  }),
                ),
                o++);
            });
            o < t;
          )
            n.push(
              React.createElement("input", {
                type: "hidden",
                name: `app[content][ordered_social_links][${o}]`,
                value: "",
              }),
            ),
              o++;
          return (
            [
              "discord_server",
              "youtube",
              "facebook",
              "twitter",
              "twitch",
            ].forEach((i) => {
              n.push(
                React.createElement("input", {
                  type: "hidden",
                  name: `app[content][links][${i}]`,
                  value: "",
                }),
              );
            }),
            n
          );
        }
        function ud(a) {
          const { items: t, maxSeen: n } = a,
            o = React.useMemo(() => cd(t, n), [t, n]);
          return jsxs(Fragment, { children: [...o] });
        }
        function hd() {
          const a = (0, Sa.I)({
            queryKey: ["useSocialMediaSupports"],
            queryFn: async () => {
              const t = `${rt.TS.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
                n = { origin: self.origin },
                o = await K().get(t, { params: n });
              return o?.status == 200 && o.data?.success == Fe.R
                ? o.data
                : (console.error("useSocialMediaSupports:", o?.status),
                  { success: Fe.zi });
            },
          });
          return a.isLoading ? null : a.data;
        }
        function md(a) {
          const { editModel: t } = a;
          return (0, L.q3)(() => t.GetEventType()) == T.ajI
            ? (0, e.jsx)(_d, { editModel: t })
            : (0, e.jsx)(pd, { editModel: t });
        }
        function pd(a) {
          const { editModel: t } = a,
            n = t.GetCurEditLanguage(),
            [o, i, l, r] = (0, L.q3)(() => [
              t.GetName(n) || "",
              t.GetSummary(n) || "",
              t.GetDescription(n) || "",
              t.GetImageURL("capsule", n) || null,
            ]),
            c = i || A.lh.GenerateSummaryFromText(l);
          return (0, e.jsx)(Mi, {
            editModel: t,
            title: o,
            titleTip: (0, s.we)("#Sale_DefaultSocialModule_DefaultTitle"),
            summary: c,
            summaryTip: (0, s.we)("#Sale_DefaultSocialModule_DefaultDesc"),
            imageUrl: r,
            socialMediaLinksEditor: !0,
          });
        }
        function _d(a) {
          const { editModel: t } = a,
            [n, o] = (0, Q.TB)(t.GetClanAccountID());
          return (0, e.jsx)(Mi, {
            editModel: t,
            title: o.curator_title,
            titleTip: (0, s.we)(
              "#Sale_DefaultSocialModule_DefaultTitle_CreatorHome",
            ),
            summary: o.curator_description,
            summaryTip: (0, s.we)(
              "#Sale_DefaultSocialModule_DefaultDesc_CreatorHome",
            ),
            imageUrl: o.avatar_full_url,
            smallImage: !0,
          });
        }
        function Mi(a) {
          const {
              editModel: t,
              title: n,
              titleTip: o,
              summary: i,
              summaryTip: l,
              imageUrl: r,
              socialMediaLinksEditor: c,
              smallImage: d,
            } = a,
            u = t.GetEventModel(),
            [p, m] = (0, L.q3)(() => [
              u.GetSaleSectionsByType("social_share") || [],
              u.jsondata.sale_default_social_media_disabled,
            ]),
            S = (D) => {
              (u.jsondata.sale_default_social_media_disabled = !D),
                t.SetDirty(b.IQ.jsondata_sales);
            },
            v = p.length > 0,
            E = !(m || v);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("p", {
                children: (0, s.we)("#Sale_DefaultSocialModule_Description"),
              }),
              (0, e.jsx)(oe.Eb, {
                clanSteamID: t.GetClanSteamID(),
                requireAdmin: !0,
                children: (0, e.jsx)("p", {
                  className: gt().DefaultSocialOverrideMsg,
                  children: (0, s.we)(
                    v
                      ? "#Sale_DefaultSocialModule_DisabledByOverride"
                      : "#Sale_DefaultSocialModule_Override",
                  ),
                }),
              }),
              E &&
                (0, e.jsxs)("div", {
                  className: gt().SocialShareCtn,
                  children: [
                    (0, e.jsx)("img", {
                      className: (0, j.A)(
                        gt().DefaultSocialImgCtn,
                        d && gt().Small,
                      ),
                      src: r,
                    }),
                    (0, e.jsxs)("div", {
                      className: gt().SocialShareText,
                      children: [
                        (0, e.jsxs)("div", {
                          className: gt().SocialTitle,
                          children: [
                            n,
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("span", { children: o }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: gt().SocialDesc,
                          children: [
                            i,
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("span", { children: l }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              (0, e.jsx)(_.RF, {
                onChange: S,
                label: (0, s.we)("#Sale_DefaultSocialModule_Toggle"),
                checked: E,
                disabled: v,
              }),
              !c && (0, e.jsx)(vd, { editModel: t }),
            ],
          });
        }
        function vd(a) {
          const { editModel: t } = a,
            [n, o] = (0, g.useState)(
              () =>
                t.GetEventModel().jsondata.sale_social_media_items?.length > 0,
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("p", {
                children: (0, s.we)("#Sale_DefaultSocialModule_LinkDesc"),
              }),
              n
                ? (0, e.jsx)(gd, { editModel: t })
                : (0, e.jsx)(_.RF, {
                    onChange: () => o(!0),
                    label: (0, s.we)(
                      "#Sale_DefaultSocialModule_EnableSocialMediaLink",
                    ),
                    checked: n,
                  }),
            ],
          });
        }
        function gd(a) {
          const { editModel: t } = a,
            n = hd();
          (0, g.useEffect)(() => {
            const r = t.GetEventModel().jsondata;
            r.sale_social_media_items || (r.sale_social_media_items = []);
          }, [t]);
          const o = (0, L.q3)(
              () => t.GetEventModel().jsondata.sale_social_media_items || [],
            ),
            [i, l] = (0, g.useState)(() => o);
          return n
            ? n.success != Fe.R
              ? (0, e.jsx)("div", {
                  className: gt().ErrorContainer,
                  children: (0, e.jsx)("div", {
                    className: gt().ErrorText,
                    children: (0, s.we)("#GrantAwardError_Busy"),
                  }),
                })
              : (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(Li, {
                      rgValidationData: n.rgValidationData,
                      rgSupportedSocialMediaTypes:
                        n.rgSupportedSocialMediaTypes,
                      rgSocialMediaItems: i,
                      fnSetItems: (r) => {
                        const c = n.rgValidationData;
                        (t.GetEventModel().jsondata.sale_social_media_items = r
                          .filter((d) => !!d.link)
                          .filter((d) => Ni(d, c[d.type]).bValid)),
                          t.SetDirty(b.IQ.jsondata_sales),
                          l(r);
                      },
                    }),
                    o.length == 0 &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#Sale_DefaultSocialModule_NoLinks",
                        ),
                      }),
                  ],
                })
            : (0, e.jsx)(N.t, {
                string: (0, s.we)("#Loading"),
                position: "center",
              });
        }
        var Sd = h(54345),
          Ve = h(49199),
          Ed = h(25518),
          xd = h(4748),
          fd = h(89084),
          jd = h(45638),
          Wa = h(32093),
          Qa = h(19619),
          bd = Object.defineProperty,
          Cd = Object.getOwnPropertyDescriptor,
          xa = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Cd(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && bd(t, n, i), i;
          };
        const la = class Lt {
          static s_newsCuratorStore;
          m_mapNewsCurators = new Map();
          m_bIsLoadComplete = !1;
          m_mapLangToNewsCurators = new Map();
          m_LoadingPromise = null;
          static Get() {
            return (
              Lt.s_newsCuratorStore ||
                ((Lt.s_newsCuratorStore = new Lt()),
                (Lt.s_newsCuratorStore.m_LoadingPromise =
                  Lt.s_newsCuratorStore.Init()),
                (window.g_NewsCuratorStore = Lt.s_newsCuratorStore)),
              Lt.s_newsCuratorStore
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
            s.A0.GetLanguageListForRealms([f.TS.EREALM]).forEach((l) =>
              this.m_mapLangToNewsCurators.set(l, []),
            );
            const n = f.TS.STORE_BASE_URL + "events/ajaxgetnewscurators";
            let o = { origin: self.origin };
            const i = await K().get(n, { params: o });
            (0, U.h5)(() => {
              i.data && i.data.success && this.HandleCuratorResponse(i.data),
                (this.m_bIsLoadComplete = !0);
            });
          }
          HandleCuratorResponse(t) {
            if (
              (t.groupvanityinfo && Q.ac.RegisterClanData(t.groupvanityinfo),
              t.newscuratorinfo)
            )
              for (const n of t.newscuratorinfo) {
                if (this.m_mapNewsCurators.has(n.clanAccountID)) continue;
                this.m_mapNewsCurators.set(n.clanAccountID, n);
                const o = Q.ac.GetClanInfoByClanAccountID(n.clanAccountID);
                o && this.m_mapLangToNewsCurators.get(o.rss_language)?.push(n);
              }
          }
        };
        xa([U.sH], la.prototype, "m_mapNewsCurators", 2),
          xa([U.sH], la.prototype, "m_bIsLoadComplete", 2),
          xa([U.sH], la.prototype, "m_mapLangToNewsCurators", 2),
          xa([U.EW], la.prototype, "allNewsCurators", 1),
          xa([U.XI], la.prototype, "HandleCuratorResponse", 1);
        let wd = la;
        var Bi = h(48473),
          Dd = h(16345),
          St = h.n(Dd),
          yd = Object.defineProperty,
          Td = Object.getOwnPropertyDescriptor,
          Id = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Td(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && yd(t, n, i), i;
          };
        function Ya(a) {
          const t = new Set();
          return (
            (a.indexOf("games") >= 0 || a.indexOf("dlc") >= 0) && t.add("apps"),
            a.indexOf("curators") >= 0 && t.add("curators"),
            t
          );
        }
        function Ad(a) {
          return a == "game" || a == "software"
            ? "games"
            : a == "dlc" || a == "music"
              ? "dlc"
              : null;
        }
        const Gd = 300;
        class Oi extends g.Component {
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
          m_timerForChange = new Na.LU();
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
            const n = Ya(this.props.rgCorporaToSearch);
            n.has("apps") && this.GetAppSuggestionsFromServer(t),
              n.has("curators") && this.GetCuratorSuggestions(t);
          }
          async GetCuratorSuggestions(t) {
            const n = wd.Get().allNewsCurators,
              o = [];
            for (const i of n) {
              const l = Q.ac.GetClanInfoByClanAccountID(i.clanAccountID),
                r = {
                  corpus: "curators",
                  id: i.clanAccountID,
                  name: l?.group_name,
                  img: l?.avatar_full_url,
                };
              if ((l?.group_name?.toLocaleLowerCase() || "").indexOf(t) >= 0) {
                if (
                  (this.props.fnFilterSuggestion &&
                    !this.props.fnFilterSuggestion(r)) ||
                  Qa.Fm.Get().BIsIgnoringCurator(l.clanAccountID)
                )
                  continue;
                const d = Qa.Fm.Get().BIsFollowingCurator(l.clanAccountID),
                  u = (0, e.jsx)(
                    Pi,
                    {
                      suggestion: r,
                      fnOnSelected: this.props.fnOnSelected,
                      bShowFollowingLabel: d,
                    },
                    "curatorsug_" + r.id,
                  );
                o.push(
                  this.props.fnDecorateSuggestion
                    ? this.props.fnDecorateSuggestion(r, u)
                    : u,
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
            const n = this.m_nHighestSentRequestID,
              o = [];
            this.props.rgCorporaToSearch.indexOf("games") >= 0 &&
              (o.push("game"), o.push("software")),
              this.props.rgCorporaToSearch.indexOf("dlc") >= 0 &&
                (o.push("dlc"), o.push("music"));
            const i = {
                cc: f.TS.COUNTRY,
                l: f.TS.LANGUAGE,
                realm: Wa.TU.k_ESteamRealmGlobal,
                origin: self.origin,
                f: "jsonfull",
                term: t.replace(" ", "+"),
                require_type: o.join(","),
                excluded_tags: Qa.Fm.Get().GetExcludedTagsSortedByID(),
                excluded_content_descriptors:
                  Qa.Fm.Get().ExcludedContentDescriptor,
              },
              l = `${f.TS.STORE_BASE_URL}search/suggest`,
              r = await K().get(l, { params: i, withCredentials: !0 });
            if (n < this.m_mapHighestReceivedRequestIDFromBackEnd.get("apps"))
              return;
            this.m_mapHighestReceivedRequestIDFromBackEnd.set("apps", n);
            let c;
            r?.data?.length &&
              (c = r.data.map((d) => {
                const u = { corpus: Ad(d.type), ...d, id: parseInt(d.id) };
                if (
                  this.props.fnFilterSuggestion &&
                  !this.props.fnFilterSuggestion(u)
                )
                  return null;
                const p = (0, e.jsx)(
                  Pi,
                  { suggestion: u, fnOnSelected: this.props.fnOnSelected },
                  u.type + u.id,
                );
                return this.props.fnDecorateSuggestion
                  ? this.props.fnDecorateSuggestion(u, p)
                  : p;
              })),
              this.setState({ rgAppSuggestions: c });
          }
          async UpdateSuggestions(t) {
            const n =
              t.target.value && t.target.value.trim().toLocaleLowerCase();
            if ((this.m_nHighestSentRequestID++, !n?.length)) {
              Array.from(Ya(this.props.rgCorporaToSearch)).forEach((o) =>
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
            this.setState({ strSearchString: n }),
              this.m_timerForChange.Schedule(Gd, () =>
                this.GetSuggestionsFromServer(n),
              );
          }
          ResetSuggestions() {
            this.setState({
              rgAppSuggestions: null,
              rgCuratorSuggestions: null,
            });
          }
          GetLimitedSuggestions() {
            let { rgAppSuggestions: t, rgCuratorSuggestions: n } = this.state;
            const o = 10;
            let i = t ? t.length : o,
              l = n ? n.length : o;
            return (
              i + l > o && (i = o - Math.min(l, 2)),
              (l = o - i),
              (t = t?.slice(0, i)),
              (n = n?.slice(0, l)),
              { rgAppSuggestions: t, rgCuratorSuggestions: n }
            );
          }
          render() {
            const {
                strLabel: t,
                focusOnMount: n,
                rgCorporaToSearch: o,
                strResultsClass: i,
              } = this.props,
              { strSearchString: l } = this.state,
              { rgAppSuggestions: r, rgCuratorSuggestions: c } =
                this.GetLimitedSuggestions(),
              d = l?.length > 0,
              u = r?.length > 0,
              p = c?.length > 0,
              m = Ya(o).size > 1,
              S =
                m &&
                u &&
                (0, s.we)(
                  o.indexOf("dlc") >= 0
                    ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                    : "#EventCalendar_SearchResultsHeader_GameSection",
                ),
              v = Array.from(Ya(o)).some(
                (D) =>
                  this.m_nHighestSentRequestID >
                  this.m_mapHighestReceivedRequestIDFromBackEnd.get(D),
              ),
              E = !p && !u && !v;
            return (0, e.jsxs)("div", {
              className: St().SuggestContainer,
              children: [
                (0, e.jsx)(_.pd, {
                  type: "text",
                  label: t,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: d,
                  focusOnMount: n,
                }),
                d &&
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(St().Results, i),
                    children: [
                      u &&
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              m &&
                                (0, e.jsx)("div", {
                                  className: St().ResultSectionHeader,
                                  children: S,
                                }),
                              r,
                            ],
                          },
                          "game-suggestions",
                        ),
                      p &&
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              m &&
                                (0, e.jsx)("div", {
                                  className: St().ResultSectionHeader,
                                  children: (0, s.we)(
                                    "#EventCalendar_SearchResultsHeader_CuratorSection",
                                  ),
                                }),
                              c,
                            ],
                          },
                          "curator-suggestions",
                        ),
                      E &&
                        (0, e.jsx)(
                          "div",
                          {
                            className: St().EmptyResults,
                            children: (0, s.we)(
                              "#EventCalendar_GameSearch_NoneFound",
                            ),
                          },
                          "empty-results",
                        ),
                      v && (0, e.jsx)(N.t, { size: "small" }),
                    ],
                  }),
              ],
            });
          }
        }
        Id([J.oI], Oi.prototype, "UpdateSuggestions", 1);
        const Pi = (a) =>
          (0, e.jsxs)(
            "div",
            {
              className: St().ResultRow,
              onClick: () => a.fnOnSelected(a.suggestion),
              children: [
                (0, e.jsx)("img", {
                  src: a.suggestion.img,
                  className: St().AvatarImage,
                }),
                (0, e.jsxs)("div", {
                  className: St().GameName,
                  children: [" ", (0, Bi.EK)(a.suggestion.name), " "],
                }),
                a.bShowFollowingLabel &&
                  (0, e.jsx)("div", {
                    className: St().Label,
                    children: (0, s.we)("#EventCalendar_FollowingCurator"),
                  }),
              ],
            },
            `suggestion-${a.suggestion.id}`,
          );
        function Ld(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            o = (0, L.q3)(() => n.jsondata.associated_appid || 0),
            [i, l] = (0, g.useState)(!!o);
          return n.appid
            ? null
            : i
              ? (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("div", {
                      className: x().EventEditorTextTitleCtn,
                      children: [
                        (0, e.jsx)("span", {
                          className: x().EventEditorTextTitle,
                          children: (0, s.we)("#EventEditor_Associated_App"),
                        }),
                        (0, e.jsx)(W.o, {
                          tooltip: (0, s.we)(
                            "#EventEditor_Associated_App_ttip",
                          ),
                          className: x().tooltip_Ctn,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: x().InputBorder,
                      children: (0, e.jsx)("input", {
                        type: "number",
                        className: (0, j.A)(
                          ce.EventEditorTitleInput,
                          ce.Subtitle,
                        ),
                        value: o,
                        onChange: (r) => {
                          const c = Number.parseInt(r.currentTarget.value);
                          c !== n.jsondata.associated_appid &&
                            ((n.jsondata.associated_appid = c || void 0),
                            t.SetDirty(b.IQ.description));
                        },
                      }),
                    }),
                  ],
                })
              : (0, e.jsx)(_.Yh, {
                  checked: i,
                  onChange: l,
                  label: (0, s.we)("#EventEditor_Associated_App_Question"),
                  tooltip: (0, s.we)("#EventEditor_Associated_App_ttip"),
                });
        }
        var Nd = h(56585),
          fa = h(77128),
          Md = h(6864),
          Bd = h(78606),
          Ri = h.n(Bd),
          ja = h(72609);
        function Od(a) {
          return (0, e.jsx)("div", {
            className: Ri().HighlightBox,
            children: (0, s.oW)(
              "#PartnerEvent_MM_TitleTip",
              (0, e.jsx)("i", {}),
            ),
          });
        }
        function Pd(a) {
          return (0, e.jsxs)("div", {
            className: Ri().HighlightBox,
            children: [
              (0, e.jsx)("p", {
                children: (0, s.we)("#PartnerEvent_MM_DescriptionTip1"),
              }),
              (0, e.jsxs)("ul", {
                children: [
                  (0, e.jsx)("li", {
                    children: (0, s.we)("#PartnerEvent_MM_DescriptionTip2"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, s.we)("#PartnerEvent_MM_DescriptionTip3"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, s.we)("#PartnerEvent_MM_DescriptionTip4"),
                  }),
                ],
              }),
              (0, e.jsx)("p", {
                children: (0, s.we)("#PartnerEvent_MM_DescriptionTip5"),
              }),
              (0, e.jsx)("p", {
                children: (0, e.jsx)("a", {
                  href: `${ja.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                  children: (0, s.we)("#PartnerEvent_MM_LearnMore"),
                }),
              }),
            ],
          });
        }
        function Rd(a) {
          const t = g.useRef(void 0),
            { editModel: n, bCanManuallyTagAssociatedApps: o } = a,
            i = g.useCallback((r, c) => {
              t.current && t.current(r, c);
            }, []),
            l = (0, L.q3)(() => n.BHasTag("vo_marketing_message"));
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(kd, { editModel: n }),
              (0, e.jsx)(ki, { editModel: n }),
              (0, e.jsx)(Fd, { editModel: n }),
              (0, e.jsx)(Ud, { editModel: n }),
              !!o && (0, e.jsx)(zd, { editModel: n }),
              (0, e.jsx)(Yo, { editModel: n }),
              (0, e.jsx)(Ld, { editModel: n }),
              l && (0, e.jsx)(Pd, {}),
              (0, e.jsxs)("div", {
                className: x().Columns,
                children: [
                  (0, e.jsx)(Wd, { editModel: n, refOnInsertImage: t }),
                  (0, e.jsx)(Yd, { editModel: n, fnInsertImage: i }),
                ],
              }),
            ],
          });
        }
        function kd(a) {
          const { editModel: t } = a,
            n = (0, Nd.IB)(a.editModel.GetClanSteamID().ConvertTo64BitString()),
            o = n.isSuccess && !!n.data.crowdin_project_id;
          return (0, e.jsx)("div", {
            children: (0, e.jsx)("div", {
              className: x().FlexColumnContainer,
              children: (0, e.jsxs)("div", {
                className: fa.LanguageControlsCtn,
                children: [
                  (0, s.we)("#EventEditor_LangaugeDesc"),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(x().FlexRowContainer, fa.ToolContainer),
                    children: [
                      (0, e.jsx)(Bt.$A, { editModel: t }),
                      (0, e.jsx)(Oo, { editModel: t }),
                    ],
                  }),
                  o && (0, e.jsx)(Md.s, { editModel: a.editModel }),
                ],
              }),
            }),
          });
        }
        function ki(a) {
          const { editModel: t } = a,
            [n, o] = (0, L.q3)(() => [
              t.GetName(t.GetCurEditLanguage()) || "",
              t.GetEventType(),
            ]),
            i = n.length >= A.dm,
            l = (0, L.q3)(() => t.BHasTag("vo_marketing_message"));
          let r = (0, s.we)("#EventEditor_EventTitle"),
            c = (0, s.we)("#EventEditor_Title_General_ttip");
          return (
            o == T.uYK
              ? (r = (0, s.we)("#EventEditor_AnnouncementTitle"))
              : o == T.ajI &&
                ((r = (0, s.we)("#EventEditor_CreatorHomeTitle")),
                (c = (0, s.we)("#EventEditor_Title_CreatorHome_ttip"))),
            (0, e.jsxs)(e.Fragment, {
              children: [
                l && (0, e.jsx)(Od, {}),
                (0, e.jsxs)("div", {
                  className: x().EventEditorTextTitle,
                  children: [
                    r,
                    !!i &&
                      (0, e.jsx)("span", {
                        className: x().EventEditorTextTitleLengthInfo,
                        children: (0, s.we)(
                          "#EventEditor_EventTitle_Max_Characters_Reached",
                          A.dm,
                        ),
                      }),
                    (0, e.jsx)(W.o, { tooltip: c, className: x().tooltip_Ctn }),
                    (0, e.jsx)("span", {
                      className: (0, j.A)(
                        ce.CharactorRemaining,
                        i ? ce.CharactorExhausted : "",
                      ),
                      children: (0, s.we)(
                        "#EventEditor_Input_Characters_Left",
                        A.dm - n.length,
                      ),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: x().InputBorder,
                  children: (0, e.jsx)("input", {
                    type: "text",
                    className: (0, j.A)({
                      [ce.EventEditorTitleInput]: !0,
                      [ce.MainTitle]: !0,
                      [ce.EventEditorInputMaxLength]: i,
                    }),
                    value: n,
                    placeholder: (0, s.we)("#EventEditor_Name_Placeholder"),
                    onFocus: (d) => d?.target?.select(),
                    onChange: (d) =>
                      t.SetName(
                        t.GetCurEditLanguage(),
                        d?.currentTarget?.value || "",
                      ),
                    maxLength: A.dm,
                  }),
                }),
              ],
            })
          );
        }
        function Fd(a) {
          const { editModel: t } = a,
            n = (0, L.q3)(() => t.GetSubTitle(t.GetCurEditLanguage()) || ""),
            o = n.length >= A.Pd;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: x().EventEditorTextTitleCtn,
                children: [
                  (0, e.jsx)("span", {
                    className: x().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_Event_SubTitle"),
                  }),
                  (0, e.jsx)("span", {
                    className: x().EventEditorTextTitleLengthInfo,
                    children: (0, s.we)(
                      o
                        ? "#EventEditor_Event_SubTitle_Details_Reached"
                        : "#EventEditor_Event_SubTitle_Details",
                      A.Pd,
                    ),
                  }),
                  (0, e.jsx)(W.o, {
                    tooltip: (0, s.we)(
                      "#EventEditor_SubTitle_General_ttip",
                      A.Pd,
                    ),
                    className: x().tooltip_Ctn,
                  }),
                  (0, e.jsx)("span", {
                    className: (0, j.A)(
                      ce.CharactorRemaining,
                      o ? ce.CharactorExhausted : "",
                    ),
                    children: (0, s.we)(
                      "#EventEditor_Input_Characters_Left",
                      A.Pd - n.length,
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: x().InputBorder,
                children: (0, e.jsx)("input", {
                  type: "text",
                  className: (0, j.A)(
                    ce.EventEditorTitleInput,
                    ce.Subtitle,
                    o ? ce.EventEditorInputMaxLength : "",
                  ),
                  value: n,
                  placeholder: (0, s.we)(
                    "#EventEditor_Name_SubTitle_Placeholder",
                  ),
                  onFocus: (i) => i?.target?.select(),
                  onChange: (i) =>
                    t.SetSubTitle(
                      t.GetCurEditLanguage(),
                      i?.currentTarget?.value || "",
                    ),
                  maxLength: A.Pd,
                }),
              }),
            ],
          });
        }
        function Ud(a) {
          const { editModel: t } = a,
            [n, o] = (0, L.q3)(() => [
              t.GetSummary(t.GetCurEditLanguage()) || "",
              t.GetDescription(t.GetCurEditLanguage()) || "",
            ]);
          let i = "";
          n.trim().length == 0 &&
            (o.length == 0
              ? (i = (0, s.we)("#EventEditor_Summary_Placeholder", A.p$))
              : (i =
                  (0, s.we)("#EventEditor_Summary_Autogenerated") +
                  A.lh.GenerateSummaryFromText(o)));
          let l = n.length >= A.p$;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: ce.EventEditorInputPaneContents,
                children: [
                  (0, e.jsxs)("div", {
                    className: x().EventEditorTextTitleCtn,
                    children: [
                      (0, e.jsx)("span", {
                        className: x().EventEditorTextTitle,
                        children: (0, s.we)("#EventEditor_Summary_Title"),
                      }),
                      (0, e.jsx)("span", {
                        className: x().EventEditorTextTitleLengthInfo,
                        children: (0, s.we)(
                          l
                            ? "#EventEditor_Summary_Title_Length_Reached"
                            : "#EventEditor_Summary_Title_Length",
                          A.p$,
                        ),
                      }),
                      (0, e.jsx)(W.o, {
                        tooltip: (0, s.we)("#EventEditor_Summary_Ttip", A.p$),
                        className: x().tooltip_Ctn,
                      }),
                      (0, e.jsx)("span", {
                        className: (0, j.A)(
                          ce.CharactorRemaining,
                          l ? ce.CharactorExhausted : "",
                        ),
                        children: (0, s.we)(
                          "#EventEditor_Input_Characters_Left",
                          A.p$ - n.length,
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsx)("textarea", {
                    className: (0, j.A)(
                      ce.EventEditorTitleInput,
                      ce.Summary,
                      l ? ce.EventEditorInputMaxLength : "",
                    ),
                    value: n,
                    placeholder: i,
                    onFocus: (r) => r?.target?.select(),
                    onChange: (r) =>
                      t.SetSummary(
                        t.GetCurEditLanguage(),
                        r?.currentTarget?.value || "",
                      ),
                    maxLength: A.p$,
                    cols: 40,
                    rows: 2,
                  }),
                ],
              }),
              (0, e.jsx)("div", { className: x().ClearThings }),
            ],
          });
        }
        function zd(a) {
          const { editModel: t } = a;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: x().EventEditorTextTitleCtn,
                children: [
                  (0, e.jsx)("span", {
                    className: x().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_ReferencedAppIDs_Header"),
                  }),
                  (0, e.jsx)(W.o, {
                    tooltip: (0, s.we)("#EventEditor_ReferencedAppIDs_Tooltip"),
                    className: x().tooltip_Ctn,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: ce.SaleImportURL,
                children: (0, e.jsx)(Oi, {
                  strLabel: (0, s.we)(
                    "#EventEditor_ReferencedAppIDs_SearchLabel",
                  ),
                  fnFilterSuggestion: (n) =>
                    !t.GetReferencedAppIDArray().includes(Number(n.id)),
                  fnOnSelected: (n) => {
                    t.GetReferencedAppIDArray().includes(Number(n.id)) ||
                      (t.GetReferencedAppIDArray().push(Number(n.id)),
                      t.SetDirty(b.IQ.jsondata_other));
                  },
                  rgCorporaToSearch: ["games", "dlc"],
                }),
              }),
              t.GetReferencedAppIDArray().length > 0 &&
                (0, e.jsx)(Ot.A, {
                  items: t.GetReferencedAppIDArray(),
                  onDelete: (n) => {
                    t.GetReferencedAppIDArray().splice(n),
                      t.SetDirty(b.IQ.jsondata_other);
                  },
                  onReorder: () => t.SetDirty(b.IQ.jsondata_other),
                  render: (n) =>
                    (0, e.jsx)(Hd, { appid: n }, `suggestion-${n}`),
                }),
            ],
          });
        }
        function Hd(a) {
          const { appid: t } = a,
            [n] = (0, ge.t7)(t, {});
          return (0, e.jsx)("div", {
            className: ce.ResultRow,
            children: (0, e.jsxs)("div", {
              className: ce.GameName,
              children: [" ", (0, Bi.EK)(n?.GetName() || "") + ` (${t})`, " "],
            }),
          });
        }
        const Vd = g.lazy(() => h.e(27257).then(h.bind(h, 27257)));
        function Wd(a) {
          const { editModel: t, refOnInsertImage: n } = a,
            o = (0, Xs.LJ)(),
            [i, l] = Qd(t),
            r = (0, L.q3)(() => t.GetEventType()),
            c = (0, J.QS)(
              (u) => {
                if (!u) return;
                const p = (m, S) => (0, fd.fW)(u, m, S);
                return (
                  (n.current = p),
                  () => {
                    n.current == p && (n.current = void 0);
                  }
                );
              },
              [n],
            ),
            d = g.useMemo(() => {
              const u = f.iA.is_support;
              return (0, Ed.BY)({
                bIncludeMedia: f.UF.CAN_UPLOAD_IMAGES,
                bIncludeValveOnly: u,
              });
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(x().LeftCol, fa.DescEditorPadding),
            children: [
              (0, e.jsx)("div", {
                className: x().EventEditorTextTitle,
                children:
                  r == T.uYK
                    ? (0, s.we)("#EventEditor_DescriptionNews")
                    : (0, s.we)("#EventEditor_Description"),
              }),
              (0, e.jsxs)("label", {
                children: [
                  (0, e.jsx)("input", {
                    type: "checkbox",
                    checked: i,
                    onChange: (u) => l(u.currentTarget.checked),
                  }),
                  (0, s.we)("#EventEditor_UseVisualEditor"),
                ],
              }),
              i
                ? (0, e.jsx)(g.Suspense, {
                    children: (0, e.jsx)(Vd, {
                      editModel: t,
                      refOnInsertImage: n,
                      limitBBCode: d,
                    }),
                  })
                : (0, e.jsx)(jd.I, {
                    fnGetCurText: () =>
                      t.GetDescription(t.GetCurEditLanguage()),
                    fnOnTextChange: (u) =>
                      t.SetDescription(
                        t.GetCurEditLanguage(),
                        u?.currentTarget?.value || "",
                      ),
                    fnSetText: (u) =>
                      t.SetDescription(t.GetCurEditLanguage(), u),
                    strPlaceholder: (0, s.we)(
                      "#EventEditor_Description_PlaceHolder",
                    ),
                    ref: c,
                    emoticonStore: o,
                    bSupportHTMLImport: !0,
                    showFormatHelp: "PartnerEvents",
                    limitBBCode: d,
                    classNameForTextArea: ce.EventEditorDescription,
                    clanSteamID: t.GetClanSteamID(),
                  }),
            ],
          });
        }
        function Qd(a) {
          const t = "partnerEventsRichEditorOptIn",
            [o, i] = g.useState(() => (localStorage.getItem(t) ?? "1") == "1"),
            l = g.useCallback(
              (r) => {
                localStorage.setItem(t, r ? "1" : "0"), i(r);
              },
              [t],
            );
          return [o, l];
        }
        function Yd(a) {
          const { editModel: t, fnInsertImage: n } = a,
            [o, i, l] = (0, L.q3)(() => [
              t.GetClanSteamID(),
              t.GetAppID(),
              t.GetIncludedRealmList(),
            ]);
          return f.UF.CAN_UPLOAD_IMAGES
            ? (0, e.jsxs)("div", {
                className: (0, j.A)(
                  x().RightCol,
                  fa.DescEditorPadding,
                  fa.ImagePickerCtn,
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: x().EventEditorTextTitle,
                    children: [
                      (0, s.we)("#ImagePicker_PreviousImages2"),
                      (0, e.jsx)(W.o, {
                        tooltip: (0, s.we)("#ImagePicker_Images_ttip"),
                        className: x().tooltip_Ctn,
                      }),
                    ],
                  }),
                  (0, e.jsx)(xd.G, {
                    bShowLightBox: !0,
                    appid: i,
                    clanSteamID: o,
                    imageInsertCallBack: n,
                    fnSetImageURL: t.SetImageURL,
                    rgRealmList: l,
                    fnLangHasData: t.BHasTitleImage,
                    fnGetImageHash: t.GetImageHashAndExt,
                    partnerEventStore: G.mh,
                  }),
                ],
              })
            : null;
        }
        function Jd(a) {
          return (0, e.jsx)("div", {
            className: Ve.TutoralCtn,
            children: (0, e.jsxs)("div", {
              className: Ve.ExplanationCtn,
              children: [
                (0, e.jsx)("h2", {
                  children: (0, s.oW)("#EventEditor_CreatorHome_Intro_Welcome"),
                }),
                (0, e.jsx)("p", {
                  children: (0, s.oW)(
                    "#EventEditor_CreatorHome_Intro_Desc1",
                    (0, e.jsx)("strong", {}),
                  ),
                }),
                (0, e.jsx)("p", {
                  children: (0, s.oW)(
                    "#EventEditor_CreatorHome_Intro_Desc2",
                    (0, e.jsx)("strong", {}),
                    (0, e.jsx)("a", {
                      href: "https://partner.steamgames.com/doc/store/creator_homepage",
                    }),
                  ),
                }),
                (0, e.jsx)("p", {
                  children: (0, s.oW)(
                    "#EventEditor_CreatorHome_Intro_Desc3",
                    (0, e.jsx)("strong", {}),
                  ),
                }),
                (0, e.jsx)("p", {
                  children: (0, e.jsx)("a", {
                    href: "https://partner.steamgames.com/doc/marketing/event_tools/creatorhome/tools",
                    children: (0, s.oW)(
                      "#EventEditor_CreatorHome_Intro_Documentation",
                    ),
                  }),
                }),
              ],
            }),
          });
        }
        function Fi(a) {
          const { editModel: t } = a,
            [n, o] = (0, L.q3)(() => [t.GetGID(), t.GetClanAccountID()]),
            i = !!n,
            { creatorHome: l } = (0, Qe.FV)(o),
            r = null,
            c = l ? l.GetCreatorHomeURL(r) + "admin/curator_edit" : void 0,
            d = l ? l.GetCreatorHomeURL(r) + "#edit" : void 0;
          return (0, e.jsxs)("div", {
            className: Ve.CreatorHomeEditCtn,
            children: [
              (0, e.jsx)(Ui, { editModel: t }),
              (0, e.jsx)(ki, { editModel: t }),
              i &&
                l &&
                (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("div", {
                    className: Ve.AdminLinkCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: Ve.LeftCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ve.Label,
                            children: (0, s.we)(
                              "#EventEditor_Event_CreatorHome_AdminAvatarLabel",
                            ),
                          }),
                          (0, e.jsx)("img", {
                            src: l.GetAvatarURLFullSize(),
                            className: Ve.AvatarImage,
                          }),
                          (0, e.jsx)("div", {
                            className: Ve.EditLink,
                            children: (0, s.oW)(
                              "#EventEditor_Event_CreatorHome_AdminLinkAvatarLabel",
                              d ? (0, e.jsx)("a", { href: d }) : void 0,
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: Ve.RightCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ve.Label,
                            children: (0, s.we)(
                              "#EventEditor_Event_CreatorHome_AdminTaglineLabel",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: Ve.Tagline,
                            children: l.GetTagLine(),
                          }),
                          (0, e.jsx)("div", {
                            className: Ve.EditLink,
                            children: (0, s.oW)(
                              "#EventEditor_Event_CreatorHome_AdminLinkTaglineLabel",
                              c ? (0, e.jsx)("a", { href: c }) : void 0,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              !i &&
                (0, e.jsx)("div", {
                  className: Ve.SaveWarningCtn,
                  children: (0, s.we)("#Sale_SaveFirst_CreatorHome"),
                }),
              (0, e.jsx)("br", {}),
            ],
          });
        }
        function Ui(a) {
          const { editModel: t } = a,
            [n, o, i] = (0, L.q3)(() => [
              t.GetGID(),
              t.GetClanAccountID(),
              t.BVisible() || t.BUnlisted(),
            ]),
            { creatorHome: l } = (0, Qe.FV)(o),
            c = l
              ? l.GetCreatorHomeURL(null) + "admin/creatorhome_link"
              : void 0,
            u = l?.GetLinkedEventGID() == n;
          return (0, e.jsxs)("div", {
            className: (0, j.A)(
              Ve.SelectedExplanationCtn,
              (!i || !u) && Ve.Warning,
            ),
            children: [
              !i &&
                (0, e.jsx)("div", {
                  children: (0, s.we)("#EventEditor_Event_CreatorHome_Hidden"),
                }),
              i &&
                !u &&
                (0, e.jsx)("div", {
                  children: (0, s.oW)(
                    "#EventEditor_Event_CreatorHome_NotSelected",
                    (0, e.jsx)("b", {}),
                    c ? (0, e.jsx)("a", { href: c }) : void 0,
                  ),
                }),
              i &&
                u &&
                (0, e.jsx)("div", {
                  children: (0, s.oW)(
                    "#EventEditor_Event_CreatorHome_Selected",
                    c ? (0, e.jsx)("a", { href: c }) : void 0,
                  ),
                }),
            ],
          });
        }
        var Kd = h(30976),
          Zd = h(84865);
        function yn(a) {
          const { editModel: t, mode: n } = a,
            [o, i] = (0, L.q3)(() => [t.GetGID(), t.GetEventType()]);
          return o
            ? (0, e.jsx)(Zd.sn, {
                children: (0, e.jsx)(Zl, {
                  children: (0, e.jsx)(qd, { editModel: t, mode: n }),
                }),
              })
            : i == T.ajI
              ? (0, e.jsx)(Fi, { editModel: t })
              : (0, e.jsx)("div", {
                  className: (0, j.A)(fe.SaleContainer, "SaleContainer"),
                  children: (0, s.we)("#Sale_SaveFirst"),
                });
        }
        function qd(a) {
          const { editModel: t, mode: n } = a,
            [o, i, l, r, c, d, u] = (0, L.q3)(() => [
              t.GetEventType(),
              t.GetEventModel().jsondata.sale_presenters,
              t.GetEventModel().jsondata,
              t.GetEventModel().clanSteamID,
              t.GetGID(),
              t.GetEventModel().jsondata.sale_presenters?.length > 0,
              t.BVisible(),
            ]),
            { creatorHome: p } = (0, Qe.FV)(r.GetAccountID()),
            { bRequiresHostDisclaimer: m } = (0, je.lA)(r.GetAccountID(), c),
            S = Dt.WN.includes(r.GetAccountID()),
            v = o == T.ajI;
          (0, g.useEffect)(() => {
            Ye.oq.Get().EnsureLoaded(t),
              !Ye.oq.Get().BHasExplicitSettings(t) &&
                t.GetSaleSectionCount() > 10 &&
                (0, Ye.TA)();
          }, [t]);
          const E = g.useCallback((ze) => {
              (0, Ye.Nx)(ze.strSectionId) && (0, Ye.mi)(ze.strSectionId);
            }, []),
            D = (0, oe.Dd)(t.GetClanSteamID()),
            C = (0, oe.Dd)(t.GetClanSteamID(), !0);
          if (
            !t.BIsSourceEventSaleEnabled() &&
            l.clone_from_event_gid &&
            l.clone_from_sale_enabled &&
            (!p || !p.BHasClanAccountFlagSet(qt.Wv.Jn))
          )
            return (0, e.jsxs)("div", {
              className: (0, j.A)(fe.SaleContainer, "SaleContainer"),
              children: [
                (0, e.jsx)("div", {
                  className: Pt.WarningStyles,
                  children: (0, s.we)("#Sale_CloneNotReady"),
                }),
                (0, e.jsx)(ji, { mode: n }),
              ],
            });
          let M = "#Sale_title",
            z = "doc/marketing/event_tools/sales/tools";
          n == Oa
            ? ((M = "#Sale_UpdateLandingPage_title"),
              (z = "doc/marketing/event_tools/updatelandingpages/tools"))
            : n == Pa &&
              ((M = "#Sale_CreatorHome_title"),
              (z = "doc/marketing/event_tools/creatorhome/tools"));
          const { bVisible: k } = (0, Q.Yp)(t.GetEventModel(), C),
            { bVisible: le } = (0, Q._5)(t.GetEventModel(), C),
            { bVisible: me } = (0, Q.Ao)(t.GetEventModel()),
            Ie = k || le || (me && D);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(fe.SaleContainer, "SaleContainer"),
            children: [
              !v && (0, e.jsx)(ji, { mode: n }),
              (0, e.jsxs)("div", {
                className: F.EventEditorTextTitleCtn,
                children: [
                  (0, e.jsx)("span", {
                    className: (0, j.A)(F.EventEditorTextTitle, F.FlexGrow),
                    children: (0, s.we)(M),
                  }),
                  (0, e.jsx)(te.uU, {
                    href: f.TS.PARTNER_BASE_URL + z,
                    className: (0, j.A)(F.doclink),
                    children: (0, e.jsx)("span", {
                      children: (0, s.we)("#Broadcast_documentation"),
                    }),
                  }),
                ],
              }),
              v && (0, e.jsx)(Fi, { editModel: t }),
              (0, e.jsxs)(dr, {
                children: [
                  !!(!S && (!m || d)) &&
                    (0, e.jsx)(mi, {
                      clanSteamID: r,
                      gidClanEvent: c,
                      rgSalePresenters: i,
                      bIsEventVisible: u,
                      fnCleanSaleEventPresenters: () => {
                        (t.GetEventModel().jsondata.sale_presenters = void 0),
                          t.SetDirty(b.IQ.jsondata_sales);
                      },
                      bPublishTab: !1,
                    }),
                  (0, e.jsx)(cr, {}),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)(ad, { children: (0, e.jsx)(Jr, {}) }),
                      (0, e.jsx)(Wr, { editModel: t, onSelected: E }),
                      (0, e.jsx)(yr, { editModel: t }),
                      v &&
                        (0, e.jsx)(vt, {
                          strSectionId: "SalePageEdit_CreatorHomeTutorial",
                          hasMinimize: !0,
                          strTitle: (0, s.we)("#Sale_PageCreatorHomeTutorial"),
                          children: (0, e.jsx)(Jd, {}),
                        }),
                      Ie &&
                        (0, e.jsx)(vt, {
                          strSectionId: "SalePageEdit_Config",
                          hasMinimize: !0,
                          strTitle: (0, s.we)("#Sale_PageConfigOptions"),
                          children: (0, e.jsx)(xr, {
                            salePage: k,
                            updateLandingPage: le,
                          }),
                        }),
                      (0, e.jsx)(Xd, { ...a }),
                      (0, e.jsx)(vt, {
                        strSectionId: "SalePageEdit_AllArtworkCtn",
                        hasMinimize: !0,
                        strTitle: (0, s.we)(
                          v
                            ? "#Sale_Artwork_Sections_Page"
                            : "#Sale_Artwork_Sections",
                        ),
                        children: (0, e.jsx)(tr, { editModel: t }),
                      }),
                      (t.BHasTag("contenthub") ||
                        t.GetEventModel().BUsesContentHubForItemSource()) &&
                        (0, e.jsx)(vt, {
                          strSectionId: "SalePageEdit_ContentHub",
                          hasMinimize: !0,
                          strTitle: "Content Hub Settings",
                          strToolTip:
                            "Manage settings for content hubs, including overrides for specific hubs and hub-based sales.",
                          children: (0, e.jsx)(Il, { editModel: t }),
                        }),
                      (0, e.jsx)($d, { editModel: t }),
                      (0, e.jsx)(vt, {
                        strSectionId: "SalePageEdit_SocialModule",
                        hasMinimize: !0,
                        strTitle: (0, s.we)("#Sale_DefaultSocialModule"),
                        children: (0, e.jsx)(md, { editModel: t }),
                      }),
                      (0, e.jsx)("div", { className: fe.SectionDivider }),
                      !v &&
                        (0, e.jsx)(vt, {
                          strSectionId: "SalePageEdit_BrowseMore",
                          strTitle: `(VO) ${(0, s.we)("#Sale_BrowseMore")}`,
                          valveOnlyClanSteamID: t.GetClanSteamID(),
                          requireAdmin: !0,
                          children: (0, e.jsx)(tc, { editModel: t }),
                        }),
                      !v &&
                        (0, e.jsx)(vt, {
                          strSectionId: "SalePageEdit_SubMenuEditor",
                          hasMinimize: !0,
                          strTitle: "(VO) Sub Menu Editor",
                          valveOnlyClanSteamID: t.GetClanSteamID(),
                          dataToCopy: xn.E.k_EventData_SubMenu,
                          children: (0, e.jsx)(Sd.vk, { editModel: t }),
                        }),
                      (0, e.jsx)(vt, {
                        strSectionId: "SalePageEdit_CustomCSSCode",
                        hasMinimize: !0,
                        strTitle: "(VO) Custom CSS",
                        valveOnlyClanSteamID: t.GetClanSteamID(),
                        children: (0, e.jsx)(qr, { editModel: t }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Xd(a) {
          const { editModel: t, mode: n } = a,
            [o, i, l, r] = (0, L.q3)(() => [
              t.GetEventType(),
              t.GetEventModel().clanSteamID,
              t.GetEventModel().GID,
              t.GetEventModel().jsondata.sale_creator_home_filter_listid,
            ]),
            c = (0, Kd.a)(i.GetAccountID(), r),
            {
              bLoading: d,
              strExternalSaleEventType: u,
              fnSetExternalSaleEventType: p,
            } = (0, je.g7)(i.GetAccountID(), l),
            m = (0, id.iR)(t.GetEventModel());
          if (d) return (0, e.jsx)(N.t, { size: "small" });
          const S = o == T.ajI;
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(vt, {
              strSectionId: "SalePageEdit_TaggedItems",
              hasMinimize: !0,
              strToolTip: (0, s.we)("#Sale_TagFilter_SectionTooltip"),
              strTitle: (0, s.we)(
                "#Sale_TaggedItemsSection",
                m
                  ? (c?.length ?? 0)
                  : t.GetEventModel().GetTaggedItems().length,
              ),
              children: [
                m && (0, e.jsx)(bi.w7, { editModel: t }),
                !m && (0, e.jsx)(bi.PT, { editModel: t }),
                !S &&
                  (0, e.jsxs)(oe.Eb, {
                    clanSteamID: i,
                    children: [
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(ui, {
                        strExternalSaleEventType: u,
                        fnSetExternalSaleEventType: p,
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function $d(a) {
          const { editModel: t } = a,
            n = t.GetCurEditLanguage(),
            o = t.GetEventModel(),
            [i, l, r, c] = (0, L.q3)(() => {
              let C = -1;
              const M = new Map();
              for (const [z, k] of o.GetSaleSections().entries())
                M.set(k.section_type, (M.get(k.section_type) || 0) + 1),
                  C == -1 && k.section_type == "tabs" && (C = z);
              return [o.GetSaleSections().length, M, C, (0, za.dy)()];
            }),
            [d, u] = g.useState(""),
            p = (C) => {
              const M = d?.trim().toLowerCase() ?? "";
              if (
                M.length == 0 ||
                C.internal_section_title?.toLowerCase().includes(M) ||
                C.section_type.includes(M)
              )
                return !0;
              const z = (0, Ci.yO)(
                C,
                o,
                n,
                o.clanSteamID.GetAccountID(),
                dt.uF,
              );
              return typeof z == "string" && z.toLowerCase().includes(M);
            },
            m = c !== void 0 || d?.trim()?.length > 0,
            S = o
              .GetSaleSections()
              .filter(
                (C, M) => (c === void 0 || M < r || (0, yi.bF)(c, C)) && p(C),
              ),
            v = ac(S),
            E = (C, M) => {
              const z = wn.mj + C.unique_id,
                k = (0, yt.vx)(C.section_type) && l.get(C.section_type) > 1;
              return (0, e.jsx)(
                Tt,
                {
                  strSectionId: z,
                  children: (0, e.jsx)(yt.m, {
                    ref:
                      M == S.length - 1
                        ? (le) => v(le, S[M].unique_id)
                        : void 0,
                    index: M,
                    saleSection: C,
                    isDuplicateSingleton: k,
                    editModel: t,
                    editLanguage: n,
                  }),
                },
                wn.mj + (C.unique_id ?? M),
              );
            },
            D = (C, M) => {
              (0, It.yY)(t.GetEventModel().jsondata.sale_sections, C, M),
                t.SetDirty(b.IQ.jsondata_sales);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: fe.CustomSectionsTitle,
                children: [
                  (0, e.jsx)("div", {
                    className: F.EventEditorTextTitle,
                    children: (0, s.we)("#Sale_Sections_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: fe.EventEditorSectionSearchLabel,
                    children: (0, s.we)("#Sale_Sections_Search"),
                  }),
                  (0, e.jsx)(_.pd, {
                    type: "text",
                    value: d,
                    onChange: (C) => u(C.target.value),
                  }),
                ],
              }),
              i == 0
                ? (0, e.jsx)(ec, {})
                : (0, e.jsx)(Ot.A, {
                    items: S,
                    bDisabled: m,
                    onMove: D,
                    render: E,
                  }),
              (0, e.jsxs)("div", {
                id: "sale_editor_button_after_all_sections",
                className: fe.AddSectionBtnCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, j.A)(
                      F.SaleSectionHeader,
                      "SaleSectionHeader",
                    ),
                    children: (0, s.we)("#Sale_AddNewSection_Title"),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, s.we)("#Sale_AddNewSection_Desc"),
                  }),
                  (0, e.jsx)(Ai, { editModel: t }),
                ],
              }),
            ],
          });
        }
        function ec(a) {
          return (0, e.jsxs)("div", {
            id: "NoSaleSections",
            className: (0, j.A)(fe.SaleSection, fe.InEditor),
            children: [
              (0, e.jsx)("div", {
                className: (0, j.A)(F.SaleSectionHeader, "SaleSectionHeader"),
                children: (0, s.we)("#Sale_SectionListPlaceholder_Header"),
              }),
              (0, e.jsx)("div", {
                className: fe.SaleSectionPlaceholder,
                children: (0, s.we)("#Sale_SectionListPlaceholder_Content"),
              }),
            ],
          });
        }
        function tc(a) {
          const { editModel: t } = a,
            n = t.GetEventModel().jsondata,
            [o, i, l, r] = (0, L.q3)(() => [
              n.sale_browsemore_url,
              n.sale_browsemore_color,
              n.sale_browsemore_bgcolor,
              n.sale_browse_more_button,
            ]),
            { openColorPicker: c } = (0, aa.p)(),
            d = (v) => {
              c(v, {
                color: i,
                onChange: (E) => S(E, "sale_browsemore_color"),
              });
            },
            u = (v) => {
              const { sale_browsemore_bgcolor: E } = t.GetEventModel().jsondata;
              c(v, {
                color: E,
                onChange: (D) => S(D, "sale_browsemore_bgcolor"),
              });
            },
            p = (v) => {
              (t.GetEventModel().jsondata.sale_browse_more_button = v),
                t.SetDirty(b.IQ.jsondata_sales);
            },
            m = (v) => {
              const E = t.GetEventModel().jsondata;
              (E[v.target.name] = v.target.value),
                t.SetDirty(b.IQ.jsondata_sales);
            },
            S = (v, E) => {
              const D = t.GetEventModel().jsondata;
              (D[E] = v), t.SetDirty(b.IQ.jsondata_sales);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.RF, {
                onChange: p,
                label: (0, s.we)("#Sale_BrowseMore_Desc"),
                checked: r,
              }),
              r &&
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)(_.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_BrowseMore_URL"),
                      name: "sale_browsemore_url",
                      placeholder: (0, s.we)("#Sale_BrowseMore_URL"),
                      value: o,
                      onChange: m,
                    }),
                    (0, e.jsx)(_.$n, {
                      onClick: d,
                      className: F.EventEditorTextTitle,
                      style: { color: i, backgroundColor: l },
                      children: (0, s.we)("#Sale_Section_Label_Color"),
                    }),
                    (0, e.jsx)(_.$n, {
                      onClick: u,
                      className: F.EventEditorTextTitle,
                      style: { color: i, backgroundColor: l },
                      children: (0, s.we)("#Sale_Section_Background_Color"),
                    }),
                    (0, e.jsx)(Xr.A, {
                      text: (0, s.we)("#Sale_SeeAllSpecials"),
                      url: "",
                      color: i,
                      bgcolor: l,
                    }),
                  ],
                }),
            ],
          });
        }
        function ac(a) {
          const t = a.map((l) => l.unique_id).join(","),
            [n, o] = g.useState(t);
          return (
            g.useEffect(() => {
              o(t);
            }, [t]),
            (l, r) => {
              if (!l) return;
              const c = n.length == 0 && r > 0,
                d = n + "," + r == t;
              (c || d) &&
                l.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          );
        }
        function nc(a, t) {
          const n = (0, Sa.I)({
            queryKey: ["useSaleSectionAggregateData", a, t],
            queryFn: async () => {
              const o = X.b.InitFromClanID(t),
                i = `${ja.TS.COMMUNITY_BASE_URL}gid/${o.ConvertTo64BitString()}/ajaxgetsalesectionstats?event_gid=${a}`,
                l = { event_gid: a };
              return (await K().get(i, { params: l })).data.results || [];
            },
            enabled: !!(a && t),
          });
          return n.isLoading ? null : n.data;
        }
        function sc(a) {
          const { editModel: t } = a,
            n = (0, ae.f1)(),
            [o, i, l] = (0, L.q3)(() => [
              t.BHasSaleEnabled(),
              t.BHidden(),
              t.GetEventStartTime(),
            ]);
          return !o || i || l > n
            ? (0, e.jsx)("div", {
                children: "Sale Page not visible or started. No stats to share",
              })
            : (0, e.jsx)(ic, { ...a });
        }
        function ic(a) {
          const { editModel: t } = a,
            n = nc(t.GetGID(), t.GetClanAccountID());
          return n
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(_.$n, {
                    onClick: () => {
                      const o = [];
                      o.push([
                        "Feature",
                        "Date",
                        "Impression",
                        "Visits",
                        "Ownership Impression",
                        "Owner Visit",
                        "Wishlist",
                        "Add to Cart",
                        "Ignore",
                      ]),
                        n.forEach((l) => {
                          o.push([
                            "" + l.feature,
                            (0, s.TW)(l.rtdate + 1440 * 60),
                            "" + l.total_impressions,
                            "" + l.total_views,
                            "" + l.total_owner_impressions,
                            "" + l.total_owner_views,
                            "" + l.total_wishlists,
                            "" + l.total_add_to_carts,
                            "" + l.total_ignores,
                          ]);
                        });
                      const i =
                        (t.GetName() + "_stats").replace(" ", "_") + ".csv";
                      we.g.WriteCSVToFile(o, i);
                    },
                    children: "Export to CSV",
                  }),
                  (0, e.jsx)(oc, { rgStats: n }),
                  (0, e.jsx)(lc, { rgStats: n }),
                ],
              })
            : (0, e.jsx)(N.t, {});
        }
        function zi(a, t) {
          return !t || t == 0 ? "" : "" + ((a * 100) / t).toFixed(1);
        }
        function kt(a) {
          return new Intl.NumberFormat((0, s.l4)(), {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(a);
        }
        function oc(a) {
          const { rgStats: t } = a,
            n = (0, g.useMemo)(() => {
              const o = new Map();
              return (
                t.forEach((i) => {
                  if (o.has(i.feature)) {
                    const l = o.get(i.feature);
                    (l.total_views += i.total_views),
                      (l.total_impressions += i.total_impressions),
                      (l.total_owner_views += i.total_owner_views),
                      (l.total_owner_impressions += i.total_owner_impressions),
                      (l.total_wishlists += i.total_wishlists),
                      (l.total_ignores += i.total_ignores),
                      (l.total_add_to_carts += i.total_add_to_carts),
                      o.set(i.feature, l);
                  } else o.set(i.feature, { ...i });
                }),
                Array.from(o.values()).sort(
                  (i, l) => l.total_impressions - i.total_impressions,
                )
              );
            }, [t]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("h3", { children: "Total For Entire Sale" }),
              (0, e.jsx)(Hi, { rgStats: n }),
            ],
          });
        }
        function Hi(a) {
          const { rgStats: t } = a;
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)("table", {
              children: [
                (0, e.jsxs)("thead", {
                  children: [
                    (0, e.jsx)("th", { children: "Feature" }),
                    (0, e.jsx)("th", { children: "Impressions" }),
                    (0, e.jsx)("th", { children: "Visits" }),
                    (0, e.jsx)("th", { children: "Impression to Visits" }),
                    (0, e.jsx)("th", { children: "Owner Impressions" }),
                    (0, e.jsx)("th", { children: "Owner Visits" }),
                    (0, e.jsx)("th", { children: "Wishlist" }),
                    (0, e.jsx)("th", { children: "Impression to Wishlist" }),
                    (0, e.jsx)("th", { children: "Add to Cart" }),
                    (0, e.jsx)("th", { children: "Ignore" }),
                  ],
                }),
                (0, e.jsx)("tbody", {
                  children: t.map((n) =>
                    (0, e.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, e.jsx)("td", { children: n.feature }),
                          (0, e.jsx)("td", {
                            children: kt(n.total_impressions),
                          }),
                          (0, e.jsx)("td", { children: kt(n.total_views) }),
                          (0, e.jsx)("td", {
                            children: zi(n.total_views, n.total_impressions),
                          }),
                          (0, e.jsx)("td", {
                            children: kt(n.total_owner_impressions),
                          }),
                          (0, e.jsx)("td", {
                            children: kt(n.total_owner_views),
                          }),
                          (0, e.jsx)("td", { children: kt(n.total_wishlists) }),
                          (0, e.jsx)("td", {
                            children: zi(
                              n.total_wishlists,
                              n.total_impressions,
                            ),
                          }),
                          (0, e.jsx)("td", {
                            children: kt(n.total_add_to_carts),
                          }),
                          (0, e.jsx)("td", { children: kt(n.total_ignores) }),
                        ],
                      },
                      n.feature + "_" + n.rtdate,
                    ),
                  ),
                }),
              ],
            }),
          });
        }
        function lc(a) {
          const { rgStats: t } = a,
            n = (0, g.useMemo)(() => {
              const o = new Set();
              return (
                t.forEach((i) => {
                  o.add(i.rtdate);
                }),
                Array.from(o).sort((i, l) => i - l)
              );
            }, [t]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("h1", { children: "By Each Date" }),
              n.map((o) => (0, e.jsx)(rc, { rgStats: t, rtDate: o }, "" + o)),
            ],
          });
        }
        function rc(a) {
          const { rgStats: t, rtDate: n } = a,
            o = (0, g.useMemo)(
              () =>
                t
                  .filter((i) => i.rtdate == n)
                  .sort((i, l) => l.total_impressions - i.total_impressions),
              [t, n],
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("h3", {
                children: ["Stats for: ", (0, s.TW)(n + 1440 * 60)],
              }),
              (0, e.jsx)(Hi, { rgStats: o }),
            ],
          });
        }
        const Ja = "vo_sale_store_capsules",
          Tn = [
            {
              type: "header_2x",
              artworkType: "sale_store_capsule_header",
              strDesignToken: "#EventEditor_SaleStoreCapsule_header_Design",
              strUsageToken: "#EventEditor_SaleStoreCapsule_header_Usage",
            },
            {
              type: "small_capsule_2x",
              artworkType: "sale_store_capsule_small",
              strDesignToken: "#EventEditor_SaleStoreCapsule_small_Design",
              strUsageToken: "#EventEditor_SaleStoreCapsule_small_Usage",
            },
            {
              type: "main_capsule_2x",
              artworkType: "sale_store_capsule_main",
              strDesignToken: "#EventEditor_SaleStoreCapsule_main_Design",
              strUsageToken: "#EventEditor_SaleStoreCapsule_main_Usage",
            },
            {
              type: "hero_capsule_2x",
              artworkType: "sale_store_capsule_vertical",
              strDesignToken: "#EventEditor_SaleStoreCapsule_vertical_Design",
              strUsageToken: "#EventEditor_SaleStoreCapsule_vertical_Usage",
            },
          ],
          dc = Tn.map((a) => a.artworkType);
        function cc(a) {
          return "#EventEditor_ArtworkType_" + a.artworkType;
        }
        function uc(a) {
          return Tn.find((t) => t.artworkType === a)?.type;
        }
        function hc(a, t, n) {
          return a?.[t]?.[n] ?? null;
        }
        function mc(a, t) {
          return t
            ? `${rt.TS.STORE_ITEM_BASE_URL}steam/clans/${a}/${t}`
            : void 0;
        }
        function pc(a, t) {
          const n = a?.[t];
          return n ? Array.from(n.keys()).filter((o) => !!n[o]?.image) : [];
        }
        function _c(a, t, n, o) {
          const i = It.$Y([...(a?.[t] ?? [])], T.bP9, null);
          return (i[n] = o), { ...a, [t]: i };
        }
        function vc(a, t) {
          const n = { ...a };
          return delete n[t], n;
        }
        var gc = h(91261),
          Sc = h(47155),
          ba = h.n(Sc);
        function Vi(a, t) {
          return a.BHasSaleEnabled() && (0, Q.Yp)(a, t).bVisible;
        }
        function Ec(a, t) {
          return Vi(a.GetEventModel(), t) ? t || a.BHasTag(Ja) : !1;
        }
        function xc(a) {
          const { editModel: t } = a,
            n = (0, g.useCallback)(
              (r, c, d) => {
                (0, U.h5)(() => {
                  const u = t.GetEventModel().jsondata;
                  (u.sale_store_capsules = _c(u.sale_store_capsules, r, c, d)),
                    t.SetDirty(b.IQ.jsondata_image);
                });
              },
              [t],
            ),
            o = (0, g.useCallback)(
              (r) => {
                (0, U.h5)(() => {
                  const c = t.GetEventModel().jsondata;
                  (c.sale_store_capsules = vc(c.sale_store_capsules, r)),
                    t.SetDirty(b.IQ.jsondata_image);
                });
              },
              [t],
            ),
            i = (0, g.useCallback)(
              (r, c, d, u, p) => {
                const m = uc(p);
                if (!m) {
                  (0, Wt.wT)(
                    !1,
                    "Unexpected artwork type for a sale store capsule: " + p,
                  );
                  return;
                }
                const S = (0, oi.G)(r, c);
                S?.image
                  ? n(m, d, S)
                  : (0, Wt.wT)(
                      !1,
                      "Sale store capsule conversion produced no image: " + r,
                    );
              },
              [n],
            ),
            l = (0, L.q3)(() => !t.BHasTag(Ja));
          return (0, e.jsxs)("div", {
            className: (0, j.A)(
              re().ArtworkSelectorContainer,
              l && x().ValveOnlyBackground,
            ),
            children: [
              (0, e.jsx)("div", {
                className: re().Title,
                children:
                  (l ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_SaleStoreCapsules_Title"),
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(re().SelectImageBlock, re().Tips),
                children: [
                  (0, e.jsx)("p", {
                    children: (0, s.we)("#EventEditor_SaleStoreCapsules_Tip1"),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, s.we)("#EventEditor_SaleStoreCapsules_Tip2"),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: (0, j.A)(re().SelectImageBlock, ba().UploaderCtn),
                children: (0, e.jsx)(ri.a, {
                  rgRealmList: t.GetIncludedRealmList(),
                  rgSupportArtwork: [...dc],
                  strUploadAjaxURL: (0, li.vH)(t.GetClanSteamID()),
                  fnOnUploadSuccess: i,
                  bTwoPhaseUpload: !0,
                  bDirectTempStorageUpload: !0,
                }),
              }),
              Tn.map((r) =>
                (0, e.jsx)(
                  fc,
                  {
                    editModel: t,
                    info: r,
                    fnSetCapsuleMedia: n,
                    fnClearCapsule: o,
                  },
                  r.type,
                ),
              ),
            ],
          });
        }
        function fc(a) {
          const {
              editModel: t,
              info: n,
              fnSetCapsuleMedia: o,
              fnClearCapsule: i,
            } = a,
            l = (0, L.q3)(() => t.GetEventModel().jsondata.sale_store_capsules),
            r = t.GetClanAccountID(),
            c = (0, g.useCallback)(
              (p) => {
                const m = hc(l, n.type, p);
                return m ? mc(r, m.image_2x ?? m.image) : null;
              },
              [l, n.type, r],
            ),
            d = (0, g.useMemo)(() => pc(l, n.type), [l, n.type]),
            u = nt.Fj[n.artworkType];
          return (0, e.jsxs)("div", {
            className: ba().CapsuleCtn,
            children: [
              (0, e.jsxs)("div", {
                className: ba().CapsuleTitle,
                children: [
                  (0, s.we)(cc(n)),
                  (0, e.jsxs)("span", {
                    className: ba().CapsuleDimensions,
                    children: [
                      (0, nt.qj)(u.width),
                      "px x ",
                      (0, nt.qj)(u.height),
                      "px",
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(re().SelectImageBlock, re().Tips),
                children: [
                  (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("b", {
                        children: (0, s.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, s.we)(n.strDesignToken),
                    ],
                  }),
                  (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("b", {
                        children: (0, s.we)("#selectimage_tip_usage_title"),
                      }),
                      ": ",
                      (0, s.we)(n.strUsageToken),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(gc.z, {
                rgAssetLangs: d,
                fnGetAssetUrl: c,
                fnDeletAssetLang: (p) => o(n.type, p, null),
                fnDeleteAllAssets: () => i(n.type),
                imageClassname: ba().CapsulePreview,
                bVerifyAssets: !0,
              }),
            ],
          });
        }
        var Ca = h(34032),
          jc = Object.defineProperty,
          bc = Object.getOwnPropertyDescriptor,
          Ge = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? bc(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && jc(t, n, i), i;
          };
        class Ce {
          m_editModel = void 0;
          constructor(t) {
            (0, U.Gn)(this), (this.m_editModel = t);
          }
          GetJSONData() {
            return this.m_editModel.GetEventModel().jsondata;
          }
          GetBroadcastAllowList() {
            return this.GetJSONData().broadcast_whitelist;
          }
          SetBroadcastEnabled(t) {
            this.GetJSONData().bBroadcastEnabled !== t &&
              ((this.GetJSONData().bBroadcastEnabled = t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetBroadcastForceBanner(t) {
            this.GetJSONData().broadcast_force_banner !== t &&
              ((this.GetJSONData().broadcast_force_banner = t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetChangeSetting(t) {
            this.GetJSONData().broadcastChatSetting !== t &&
              ((this.GetJSONData().broadcastChatSetting = t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetTitleToken(t) {
            this.GetJSONData().default_broadcast_title !== t &&
              ((this.GetJSONData().default_broadcast_title = t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetCustomTitleLocalize(t, n) {
            this.GetJSONData().localized_broadcast_title[t] !== n &&
              ((this.GetJSONData().localized_broadcast_title[t] = n),
              (this.GetJSONData().localized_broadcast_title = [
                ...this.GetJSONData().localized_broadcast_title,
              ]),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          AddAccountToWhiteList(t) {
            const n = this.GetJSONData().broadcast_whitelist;
            n.includes(t) ||
              (n.push(t),
              (this.GetJSONData().broadcast_whitelist = [
                ...this.GetJSONData().broadcast_whitelist,
              ]),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          DeleteWhiteListAccount(t) {
            let n = this.GetJSONData().broadcast_whitelist.indexOf(t);
            n < 0 ||
              (this.GetJSONData().broadcast_whitelist.splice(n, 1),
              this.GetJSONData().broadcast_language &&
                this.GetJSONData().broadcast_language.length > n &&
                this.GetJSONData().broadcast_language.splice(n, 1),
              this.GetJSONData().broadcast_priority &&
                this.GetJSONData().broadcast_priority.length > n &&
                this.GetJSONData().broadcast_priority.splice(n, 1),
              (this.GetJSONData().broadcast_whitelist = [
                ...this.GetJSONData().broadcast_whitelist,
              ]),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetWhiteListAccountLanguage(t, n) {
            let o = this.GetJSONData().broadcast_whitelist.indexOf(t);
            if (o < 0) return;
            const i = this.GetJSONData().broadcast_whitelist;
            if (o < i.length) {
              if (!this.GetJSONData().broadcast_language)
                if (n != T.xPp)
                  this.GetJSONData().broadcast_language = new Array();
                else return;
              const l = this.GetJSONData().broadcast_language;
              if (l.length < o && n == T.xPp) return;
              for (; l.length <= o; ) l.push(T.xPp);
              if (l[o] != n) {
                for (l[o] = n; l.length > 0 && l[l.length - 1] == T.xPp; )
                  l.pop();
                l.length == 0
                  ? (this.GetJSONData().broadcast_language = void 0)
                  : (this.GetJSONData().broadcast_language = [
                      ...this.GetJSONData().broadcast_language,
                    ]),
                  this.m_editModel.SetDirty(b.IQ.jsondata_broadcast);
              }
            }
          }
          SetWhiteListAccountPriority(t, n) {
            const o = this.GetJSONData().broadcast_whitelist.indexOf(t);
            if (o < 0) return;
            const i = (0, It.$Y)(
              this.GetJSONData().broadcast_priority || [],
              o + 1,
              "",
            );
            for (i[o] = n; i.length > 0 && !i[i.length - 1]; ) i.pop();
            (this.GetJSONData().broadcast_priority = i),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast);
          }
          GetWhiteListAccountPriority(t, n) {
            const o = this.GetJSONData().broadcast_whitelist.indexOf(t);
            return o < 0 ||
              !this.GetJSONData().broadcast_priority ||
              o >= this.GetJSONData().broadcast_priority.length
              ? n
              : this.GetJSONData().broadcast_priority[o] || n;
          }
          RemoveWhiteListAtIndex(t) {
            this.GetJSONData().broadcast_whitelist.length > t &&
              (this.GetJSONData().broadcast_whitelist.splice(t, 1),
              (this.GetJSONData().broadcast_whitelist = [
                ...this.GetJSONData().broadcast_whitelist,
              ]),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          ClearWhiteList() {
            this.GetJSONData().broadcast_whitelist.length > 0 &&
              ((this.GetJSONData().broadcast_whitelist = []),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          GetBroadcastContentType() {
            return this.GetJSONData().broadcast_content_type;
          }
          SetBroadcastContentType(t) {
            this.GetJSONData().broadcast_content_type != t &&
              ((this.GetJSONData().broadcast_content_type = t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          GetPrerollVideo() {
            return this.GetJSONData().broadcast_preroll_vod_appid;
          }
          SetPrerollVODAppID(t) {
            this.GetJSONData().broadcast_preroll_vod_appid !== t &&
              ((this.GetJSONData().broadcast_preroll_vod_appid = t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          GetPrerollTrailer() {
            return {
              strAppid: this.GetJSONData().broadcast_preroll_trailer_appid,
              strTrailerid: this.GetJSONData().broadcsat_preroll_trailer_id,
            };
          }
          SetPrerollTrailer(t, n) {
            (this.GetJSONData().broadcast_preroll_trailer_appid !== t ||
              this.GetJSONData().broadcsat_preroll_trailer_id !== n) &&
              ((this.GetJSONData().broadcast_preroll_trailer_appid = t),
              (this.GetJSONData().broadcsat_preroll_trailer_id = n),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetDropsEnabled(t) {
            this.GetJSONData().broadcast_item_drops_enabled != t &&
              (t
                ? ((this.GetJSONData().broadcast_item_drops_enabled = !0),
                  (this.GetJSONData().broadcast_item_drops_manual = !1),
                  (this.GetJSONData().broadcast_item_drops_min_watch_time_minutes = 30))
                : ((this.GetJSONData().broadcast_item_drops_enabled = void 0),
                  (this.GetJSONData().broadcast_item_drops_manual = void 0),
                  (this.GetJSONData().broadcast_item_drops_min_watch_time_minutes =
                    void 0),
                  (this.GetJSONData().broadcast_item_drops_details_clan_accountid =
                    void 0),
                  (this.GetJSONData().broadcast_item_drops_details_event_gid =
                    void 0)),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetItemDropManual(t) {
            this.GetJSONData().broadcast_item_drops_manual != t &&
              ((this.GetJSONData().broadcast_item_drops_manual = t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetItemDropMinutes(t) {
            this.GetJSONData().broadcast_item_drops_min_watch_time_minutes !=
              t &&
              ((this.GetJSONData().broadcast_item_drops_min_watch_time_minutes =
                t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetItemDropDetailEvents(t, n) {
            (this.GetJSONData().broadcast_item_drops_details_clan_accountid !=
              t ||
              this.GetJSONData().broadcast_item_drops_details_event_gid != n) &&
              ((this.GetJSONData().broadcast_item_drops_details_event_gid = n),
              (this.GetJSONData().broadcast_item_drops_details_clan_accountid =
                t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetWidePlayerLayout(t) {
            this.GetJSONData().broadcast_display_wide_player != t &&
              ((this.GetJSONData().broadcast_display_wide_player = t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetWidePlayerSupportChat(t) {
            this.GetJSONData().broadcast_dispaly_wide_player_allow_chat != t &&
              ((this.GetJSONData().broadcast_dispaly_wide_player_allow_chat =
                t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
          SetChatAnnouncementGiveawayGID(t) {
            this.GetJSONData().broadcast_chat_announcement_giveaway != t &&
              ((this.GetJSONData().broadcast_chat_announcement_giveaway = t),
              this.m_editModel.SetDirty(b.IQ.jsondata_broadcast));
          }
        }
        Ge([U.sH], Ce.prototype, "m_editModel", 2),
          Ge([U.XI], Ce.prototype, "SetBroadcastEnabled", 1),
          Ge([U.XI], Ce.prototype, "SetBroadcastForceBanner", 1),
          Ge([U.XI], Ce.prototype, "SetChangeSetting", 1),
          Ge([U.XI], Ce.prototype, "SetTitleToken", 1),
          Ge([U.XI], Ce.prototype, "SetCustomTitleLocalize", 1),
          Ge([U.XI], Ce.prototype, "AddAccountToWhiteList", 1),
          Ge([U.XI], Ce.prototype, "DeleteWhiteListAccount", 1),
          Ge([U.XI], Ce.prototype, "SetWhiteListAccountLanguage", 1),
          Ge([U.XI], Ce.prototype, "SetWhiteListAccountPriority", 1),
          Ge([U.XI], Ce.prototype, "RemoveWhiteListAtIndex", 1),
          Ge([U.XI], Ce.prototype, "ClearWhiteList", 1),
          Ge([U.XI], Ce.prototype, "SetBroadcastContentType", 1),
          Ge([U.XI], Ce.prototype, "SetPrerollVODAppID", 1),
          Ge([U.XI], Ce.prototype, "SetPrerollTrailer", 1),
          Ge([U.XI], Ce.prototype, "SetDropsEnabled", 1),
          Ge([U.XI], Ce.prototype, "SetItemDropManual", 1),
          Ge([U.XI], Ce.prototype, "SetItemDropMinutes", 1),
          Ge([U.XI], Ce.prototype, "SetItemDropDetailEvents", 1),
          Ge([U.XI], Ce.prototype, "SetWidePlayerLayout", 1),
          Ge([U.XI], Ce.prototype, "SetWidePlayerSupportChat", 1),
          Ge([U.XI], Ce.prototype, "SetChatAnnouncementGiveawayGID", 1);
        var In = h(44894),
          Cc = h(98794);
        class Ft {
          m_rgFriendsList = null;
          GetFriendLiset() {
            return this.m_rgFriendsList;
          }
          async LoadFriendList() {
            let t = null;
            if (this.m_rgFriendsList) return this.m_rgFriendsList;
            if (!f.iA.logged_in) return [];
            try {
              const n = await K().get(
                f.TS.COMMUNITY_BASE_URL + "actions/ajaxlistfriends",
              );
              if (
                n?.status == 200 &&
                n.data?.success == Fe.R &&
                n.data?.friends
              )
                return (
                  (this.m_rgFriendsList = n.data.friends), this.m_rgFriendsList
                );
              (this.m_rgFriendsList = []), (t = (0, ye.H)(n));
            } catch (n) {
              t = (0, ye.H)(n);
            }
            return (
              console.error(
                "CSimpleFriendsListStore.LoadFriendList failed: " +
                  t?.strErrorMsg,
                t,
              ),
              []
            );
          }
          static s_Singleton;
          static Get() {
            return (
              Ft.s_Singleton || (Ft.s_Singleton = new Ft()), Ft.s_Singleton
            );
          }
          constructor() {}
        }
        function wc() {
          const [a, t] = g.useState(Ft.Get().GetFriendLiset());
          return (
            g.useEffect(() => {
              a || Ft.Get().LoadFriendList().then(t);
            }, []),
            a
          );
        }
        var Dc = h(35098),
          An = h(24806),
          yc = h(1885),
          Tc = h(86836),
          Ut = h.n(Tc),
          Ic = h(25046),
          Wi = h(29522);
        function Ac(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            o = (l) => {},
            i = [
              {
                name: "Trailer",
                key: "overview",
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Gc, { ...a }),
                }),
                onClick: o,
              },
              {
                name: "Deprecated VOD",
                key: "mature",
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Lc, { ...a }),
                }),
                onClick: o,
              },
            ];
          return (0, e.jsxs)(oe.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, j.A)(x().ValveOnlyBackground),
            children: [
              (0, e.jsx)("div", {
                className: x().EventEditorTextTitle,
                children: (0, s.we)("#Broadcast_preroll_title"),
              }),
              (0, e.jsx)(gn.V, { tabs: i, bDisableRouting: !0 }),
            ],
          });
        }
        function Gc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            o = (0, L.q3)(() => n?.GetPrerollTrailer()),
            i = (0, Wi.$5)(o.strAppid ? Number.parseInt(o.strAppid) : void 0),
            l = (0, Ic.BF)(
              i,
              o.strTrailerid ? Number.parseInt(o.strTrailerid) : void 0,
            ),
            r = l?.microtrailer?.[0].filename;
          return (0, e.jsxs)("div", {
            className: (0, j.A)(
              x().FlexColumnContainer,
              x().EventDefaultRowContainer,
            ),
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)("#Broadcast_preroll_trailer_desc"),
              }),
              (0, e.jsx)(_.pd, {
                type: "text",
                placeholder: (0, s.we)("#Broadcast_preroll_trailer_AppPrompt"),
                mustBeNumeric: !0,
                rangeMin: 1,
                value: o.strAppid || "",
                onChange: (c) =>
                  n.SetPrerollTrailer(
                    c.target.value.trim(),
                    o.strTrailerid ?? "",
                  ),
              }),
              (0, e.jsx)(_.pd, {
                type: "text",
                placeholder: (0, s.we)(
                  "#Broadcast_preroll_trailer_TrailerPrompt",
                ),
                mustBeNumeric: !0,
                rangeMin: 1,
                value: o.strTrailerid || "",
                onChange: (c) =>
                  n.SetPrerollTrailer(o.strAppid || "", c.target.value.trim()),
              }),
              l &&
                r &&
                (0, e.jsx)("a", {
                  href: `${f.TS.STORE_BASE_URL}trailer/assets/?trailer=${r.substring(0, r.lastIndexOf("/"))}`,
                  children: (0, s.we)("#Broadcast_preroll_trailer_link"),
                }),
            ],
          });
        }
        function Lc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            o = (0, L.q3)(() => n?.GetPrerollVideo());
          return (0, e.jsxs)("div", {
            className: (0, j.A)(
              x().FlexColumnContainer,
              x().EventDefaultRowContainer,
            ),
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)("#Broadcast_preroll_desc"),
              }),
              (0, e.jsx)(_.pd, {
                type: "text",
                placeholder: (0, s.we)("#Broadcast_preroll_prompt"),
                mustBeNumeric: !0,
                rangeMin: 1,
                value: o || "",
                onChange: (i) => n.SetPrerollVODAppID(i.target.value.trim()),
              }),
              !!o &&
                (0, e.jsx)("a", {
                  href: f.TS.PARTNER_BASE_URL + "apps/landing/" + o,
                  children: (0, s.we)("#Broadcast_preroll_app_link"),
                }),
            ],
          });
        }
        var Nc = Object.defineProperty,
          Mc = Object.getOwnPropertyDescriptor,
          it = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Mc(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && Nc(t, n, i), i;
          };
        let Je = class extends g.Component {
          state = {
            strCustomTitle: "",
            customTitleLanguage: T.Bhc,
            whitelistSteamID: "",
          };
          GetBroadcastEditModel() {
            return new Ce(this.props.editModel);
          }
          OnBroadcastOptionChange(a) {
            this.GetBroadcastEditModel().SetBroadcastEnabled(a);
          }
          OnBroadcastForceBanner(a) {
            this.GetBroadcastEditModel().SetBroadcastForceBanner(a);
          }
          OnChatChange(a) {
            this.GetBroadcastEditModel().SetChangeSetting(a);
          }
          OnTitleChange(a) {
            this.GetBroadcastEditModel().SetTitleToken(a.data);
          }
          OnCustomTitleChange(a) {
            this.setState({ strCustomTitle: a.target.value });
          }
          OnCustomTitleLanguageChange(a) {
            this.setState({ customTitleLanguage: a.data });
          }
          AddTitle() {
            this.GetBroadcastEditModel().SetCustomTitleLocalize(
              this.state.customTitleLanguage,
              this.state.strCustomTitle,
            ),
              this.setState({ strCustomTitle: "" });
          }
          RemoveTitle(a) {
            this.GetBroadcastEditModel().SetCustomTitleLocalize(a, null);
          }
          OnSaleColorChange(a, t) {
            const n = this.props.editModel.GetEventModel().jsondata;
            (n[t] = a), this.props.editModel.SetDirty(b.IQ.jsondata_sales);
          }
          OnOpenGradientInnerColor(a) {
            this.OpenColorPopover(a, "broadcast_gradient_inner_color");
          }
          OnOpenGradientOuterColor(a) {
            this.OpenColorPopover(a, "broadcast_gradient_outer_color");
          }
          OpenColorPopover(a, t) {
            const n = this.props.editModel.GetEventModel().jsondata[t];
            let o = null;
            const i = () => o?.Hide();
            o = (0, Fa.lX)(
              (0, e.jsx)(aa.$, {
                color: n,
                onChange: (l) => this.OnSaleColorChange(l, t),
                onRequestClose: i,
              }),
              a,
              { bDisablePopTop: !0 },
            );
          }
          render() {
            const { editModel: a } = this.props,
              t = a.GetEventModel().jsondata,
              n = [
                "#Broadcast_default_title_dev",
                "#Broadcast_default_title_community",
                "#Broadcast_default_title_comp",
                "#Broadcast_default_title_speed",
                "#Broadcast_default_title_simple",
                "#Broadcast_default_title_dev_chat",
                "#Broadcast_default_title_ama",
              ].map((r) => ({ label: (0, s.we)(r), data: r })),
              o = [],
              i = s.A0.GetLanguageListForRealms([Wa.TU.k_ESteamRealmGlobal]);
            for (const r of i) {
              const d = {
                label: (0, s.we)("#language_selection_" + (0, T.LgB)(r)),
                data: r,
              };
              o.push(d);
            }
            const l = Cc.i.map((r) =>
              (0, e.jsxs)(
                "div",
                {
                  className: (0, j.A)(x().FlexRowContainer, x().RadioOption),
                  children: [
                    (0, e.jsx)("input", {
                      type: "radio",
                      name: "BroadcastChat",
                      id: "EventEditor_BroadcastSChat_" + r,
                      value: r,
                      checked:
                        a.GetEventModel().GetBroadcastChatVisibility() === r,
                      onChange: () => this.OnChatChange(r),
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "EventEditor_BroadcastSChat_" + r,
                      children: (0, e.jsx)("span", {
                        children: (0, s.we)("#Broadcast_chat_" + r),
                      }),
                    }),
                  ],
                },
                "broadcastchatOptions_" + r,
              ),
            );
            return (0, e.jsxs)("div", {
              className: be().EventEditorInputPaneContents,
              children: [
                (0, e.jsxs)("div", {
                  className: x().EventEditorTextTitleCtn,
                  children: [
                    (0, e.jsx)("span", {
                      className: (0, j.A)(
                        x().EventEditorTextTitle,
                        x().FlexGrow,
                      ),
                      children: (0, s.we)("#Broadcast_title"),
                    }),
                    (0, e.jsx)("a", {
                      target: f.TS.IN_CLIENT ? void 0 : "_blank",
                      href:
                        f.TS.PARTNER_BASE_URL +
                        "doc/marketing/event_tools/sales/livestream",
                      className: (0, j.A)(x().doclink),
                      children: (0, e.jsx)("span", {
                        children: (0, s.we)("#Broadcast_documentation"),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: x().InputBorder,
                  children: (0, e.jsx)(_.RF, {
                    onChange: this.OnBroadcastOptionChange,
                    label: (0, s.we)("#Broadcast_option"),
                    checked: a.GetEventModel().BHasBroadcastEnabled(),
                  }),
                }),
                a.GetEventModel().BHasBroadcastEnabled() &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("div", {
                        className: x().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_title_title"),
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, j.A)(
                          x().FlexColumnContainer,
                          x().EventDefaultRowContainer,
                        ),
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, s.we)("#Broadcast_title_desc"),
                          }),
                          (0, e.jsx)(_.m, {
                            rgOptions: n,
                            selectedOption: n[0].data,
                            onChange: this.OnTitleChange,
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#Broadcast_option_customtitle",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: Ut().customTitleOptionsCtn,
                            children: [
                              (0, e.jsxs)("div", {
                                className: (0, j.A)(
                                  x().FlexRowContainer,
                                  Ut().CustomTitleCtn,
                                ),
                                children: [
                                  (0, e.jsx)("div", {
                                    style: { width: "400px" },
                                    children: (0, e.jsx)(_.pd, {
                                      placeholder: (0, s.we)(
                                        "#Broadcast_use_custom",
                                      ),
                                      onChange: this.OnCustomTitleChange,
                                      value: this.state.strCustomTitle,
                                    }),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Ut().LanguageContainer,
                                    children: (0, e.jsx)(_.m, {
                                      bDisableMouseOverlay: !0,
                                      strDropDownClassName: x().DropDownScroll,
                                      rgOptions: o,
                                      selectedOption:
                                        this.state.customTitleLanguage,
                                      onChange:
                                        this.OnCustomTitleLanguageChange,
                                    }),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Ut().AddTitleButton,
                                    children: (0, e.jsx)(_.jn, {
                                      onClick: () => this.AddTitle(),
                                      children: (0, s.we)(
                                        "#Broadcast_add_title",
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                              (0, e.jsx)("p", {
                                children: (0, s.we)(
                                  "#Sale_option_customtitle_entered",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: (0, j.A)(x().FlexColumnContainer),
                                children: t.localized_broadcast_title.map(
                                  (r, c) =>
                                    r
                                      ? (0, e.jsxs)(
                                          "div",
                                          {
                                            className: (0, j.A)(
                                              Ut().TitleRowCtn,
                                              x().FlexRowContainer,
                                            ),
                                            children: [
                                              r,
                                              " (",
                                              (0, s.we)(
                                                "#language_selection_" +
                                                  (0, T.LgB)(c),
                                              ),
                                              ")",
                                              (0, e.jsx)("div", {
                                                style: { marginLeft: "auto" },
                                                children: (0, e.jsx)("img", {
                                                  className: $t().RemoveIcon,
                                                  src: In.A,
                                                  onClick: () =>
                                                    this.RemoveTitle(c),
                                                }),
                                              }),
                                            ],
                                          },
                                          c,
                                        )
                                      : null,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: x().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_background"),
                      }),
                      (0, e.jsx)(_.$n, {
                        onClick: this.OnOpenGradientOuterColor,
                        className: x().EventEditorTextTitle,
                        style: {
                          backgroundColor:
                            this.props.editModel.GetEventModel().jsondata
                              .broadcast_gradient_outer_color,
                        },
                        children: (0, s.we)("#Broadcast_GradientOuterColor"),
                      }),
                      (0, e.jsx)(_.$n, {
                        onClick: this.OnOpenGradientInnerColor,
                        className: x().EventEditorTextTitle,
                        style: {
                          backgroundColor:
                            this.props.editModel.GetEventModel().jsondata
                              .broadcast_gradient_inner_color,
                        },
                        children: (0, s.we)("#Broadcast_GradientInnerColor"),
                      }),
                      a.GetEventType() != T.ajI &&
                        (0, e.jsx)(Bc, {
                          broadcastEditModel: this.GetBroadcastEditModel(),
                        }),
                      (0, e.jsx)(Ac, {
                        editModel: a,
                        broadcastEditModel: this.GetBroadcastEditModel(),
                      }),
                      (0, e.jsx)("div", {
                        className: x().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_chat_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, j.A)(
                          x().FlexColumnContainer,
                          x().EventDefaultRowContainer,
                        ),
                        children: l,
                      }),
                      (0, e.jsx)(Pc, {
                        editModel: a,
                        broadcastEditModel: this.GetBroadcastEditModel(),
                      }),
                      (0, e.jsx)(Rc, {
                        editModel: a,
                        broadcastEditModel: this.GetBroadcastEditModel(),
                      }),
                      (0, e.jsx)("div", {
                        className: x().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_artwork"),
                      }),
                      (0, e.jsx)(vn.t, {
                        clanSteamID: a.GetClanSteamID(),
                        rgSupportArtwork: ["broadcast_left", "broadcast_right"],
                        fnSetImageURL: a.SetImageURL,
                        bAllowPreviousClanImageSelection: !0,
                        rgRealmList: a.GetIncludedRealmList(),
                      }),
                      (0, e.jsx)("div", {
                        className: x().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_artwork_options"),
                      }),
                      (0, e.jsx)("div", {
                        className: x().InputBorder,
                        children: (0, e.jsx)(_.RF, {
                          onChange: this.OnBroadcastForceBanner,
                          label: (0, s.we)("#Broadcast_artwork_banner"),
                          tooltip: (0, s.we)("#Broadcast_artwork_banner_hint"),
                          checked: a.GetEventModel().BHasBroadcastForceBanner(),
                        }),
                      }),
                      (0, e.jsx)(Oe.it, {
                        clanSteamID: a.GetClanSteamID(),
                        title: (0, s.we)(
                          "#EventEditor_ArtworkType_broadcast_left",
                        ),
                        artworkType: "broadcast_left",
                        appid: a.GetAppID(),
                        eventModel: a.GetEventModel(),
                        fnLangHasData: a.BHasTitleImage,
                        realms: a.GetIncludedRealmList(),
                        fnSetImageURL: a.SetImageURL,
                        fnGetImageHashAndExt: a.GetImageHashAndExt,
                        partnerEventStore: G.mh,
                      }),
                      (0, e.jsx)(Oe.it, {
                        clanSteamID: a.GetClanSteamID(),
                        title: (0, s.we)(
                          "#EventEditor_ArtworkType_broadcast_right",
                        ),
                        eventModel: a.GetEventModel(),
                        artworkType: "broadcast_right",
                        appid: a.GetAppID(),
                        fnLangHasData: a.BHasTitleImage,
                        realms: a.GetIncludedRealmList(),
                        fnSetImageURL: a.SetImageURL,
                        fnGetImageHashAndExt: a.GetImageHashAndExt,
                        partnerEventStore: G.mh,
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        it([J.oI], Je.prototype, "OnBroadcastOptionChange", 1),
          it([J.oI], Je.prototype, "OnBroadcastForceBanner", 1),
          it([J.oI], Je.prototype, "OnChatChange", 1),
          it([J.oI], Je.prototype, "OnTitleChange", 1),
          it([J.oI], Je.prototype, "OnCustomTitleChange", 1),
          it([J.oI], Je.prototype, "OnCustomTitleLanguageChange", 1),
          it([J.oI], Je.prototype, "AddTitle", 1),
          it([J.oI], Je.prototype, "RemoveTitle", 1),
          it([J.oI], Je.prototype, "OnSaleColorChange", 1),
          it([J.oI], Je.prototype, "OnOpenGradientInnerColor", 1),
          it([J.oI], Je.prototype, "OnOpenGradientOuterColor", 1),
          (Je = it([w.PA], Je));
        function Bc(a) {
          const { broadcastEditModel: t } = a,
            n = (0, L.q3)(() => t.GetBroadcastAllowList() || []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: x().EventEditorTextTitle,
                children: (0, s.we)("#Broadcast_whitelist"),
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(
                  x().FlexColumnContainer,
                  x().EventDefaultRowContainer,
                ),
                children: [
                  (0, e.jsx)("div", {
                    children: (0, s.we)("#Broadcast_whitelist_desc"),
                  }),
                  (0, e.jsx)("div", {
                    children: (0, s.we)("#Broadcast_option_drag_ttip"),
                  }),
                  (0, e.jsx)("div", {
                    className: be().BroadcastAccountList,
                    children: n.map((o) =>
                      (0, e.jsx)(
                        kc,
                        { accountid: o },
                        "broadcastaccountrow_" + o,
                      ),
                    ),
                  }),
                  (0, e.jsx)(Oc, { broadcastEditModel: t }),
                  (0, e.jsx)(yc.jl, {
                    onButtonClick: async (o) => {
                      const i = new X.b(o);
                      return t.AddAccountToWhiteList(i.GetAccountID()), !0;
                    },
                    buttonText: (0, s.we)("#Broadcast_whitelist_adduser"),
                  }),
                  (0, e.jsx)("div", {
                    children: (0, s.PP)(
                      "#Broadcast_whitelist_friendcode",
                      (0, e.jsx)("a", {
                        target: "_blank",
                        href: f.TS.COMMUNITY_BASE_URL + "my/friends/add",
                        children: f.TS.COMMUNITY_BASE_URL + "my/friends/add",
                      }),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Oc(a) {
          const { broadcastEditModel: t } = a,
            n = wc();
          return (0, e.jsxs)("div", {
            className: (0, j.A)(x().FlexRowWrapFlexStartContainer),
            children: [
              (0, e.jsx)("a", {
                onClick: () => t.AddAccountToWhiteList(f.iA.accountid),
                className: x().EditPreviewButton,
                children: (0, s.we)("#Broadcast_whitelist_addme"),
              }),
              (0, e.jsx)("a", {
                onClick: (o) =>
                  (0, Fa.lX)(
                    (0, e.jsx)("div", {
                      className: x().DropDownScroll,
                      children: (n || []).map((i) =>
                        (0, e.jsx)(
                          jn.kt,
                          {
                            onSelected: () => {
                              const l = new X.b(i.steamid);
                              t.AddAccountToWhiteList(l.GetAccountID());
                            },
                            children: (0, e.jsxs)("div", {
                              style: { display: "flex", alignItems: "center" },
                              children: [
                                (0, e.jsx)("img", {
                                  className: Ut().WhitelistAvatar,
                                  src: i.avatar_url,
                                }),
                                i.persona_name,
                              ],
                            }),
                          },
                          i.steamid,
                        ),
                      ),
                    }),
                    o,
                  ),
                className: x().EditPreviewButton,
                children: (0, s.we)("#Broadcast_whitelist_addfriend"),
              }),
              (0, e.jsx)("a", {
                onClick: () => t.ClearWhiteList(),
                className: x().EditPreviewButton,
                children: (0, s.we)("#Broadcast_whitelist_clear"),
              }),
            ],
          });
        }
        function Pc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            [o, i, l, r, c, d] = (0, L.q3)(() => [
              t.GetEventModel().jsondata.broadcast_item_drops_enabled,
              t.GetEventModel().jsondata.broadcast_item_drops_manual,
              t.GetEventModel().jsondata
                .broadcast_item_drops_min_watch_time_minutes,
              t.GetEventModel().jsondata
                .broadcast_item_drops_details_clan_accountid,
              t.GetEventModel().jsondata.broadcast_item_drops_details_event_gid,
              t.GetEventModel().jsondata.broadcast_chat_announcement_giveaway ||
                0,
            ]);
          return (0, e.jsxs)(oe.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, j.A)(x().ValveOnlyBackground),
            children: [
              (0, e.jsx)("div", {
                className: x().EventEditorTextTitle,
                children: "(VO) " + (0, s.we)("#Broadcast_DropsTitle"),
              }),
              (0, e.jsx)(_.Yh, {
                onChange: (u) => n.SetDropsEnabled(u),
                label: (0, s.we)("#Broadcast_Drops_Enable"),
                checked: !!o,
              }),
              !!o &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(_.Yh, {
                      onChange: (u) => n.SetItemDropManual(u),
                      label: (0, s.we)("#Broadcast_Drops_IsManualDrops"),
                      checked: !!i,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "broadcast_min_mintes",
                      children: (0, s.we)("#Broadcast_Drops_Minute"),
                    }),
                    (0, e.jsx)("input", {
                      id: "broadcast_min_mintes",
                      type: "number",
                      min: "5",
                      value: l,
                      onChange: (u) =>
                        n.SetItemDropMinutes(Number.parseInt(u.target.value)),
                    }),
                    (0, e.jsx)("div", {
                      className: x().EventEditorTextSubTitle,
                      children: (0, s.we)("#Broadcast_Drops_Details"),
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "broadcast_detail_clan_account",
                      children: (0, s.we)("#Broadcast_Drops_Details_Account"),
                    }),
                    (0, e.jsx)("input", {
                      id: "broadcast_detail_clan_account",
                      type: "number",
                      min: "0",
                      value: r,
                      onChange: (u) =>
                        n.SetItemDropDetailEvents(
                          Number.parseInt(u.target.value),
                          c,
                        ),
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "broadcast_detail_clan_event_gid",
                      children: (0, s.we)("#Broadcast_Drops_Details_GID"),
                    }),
                    (0, e.jsx)("input", {
                      id: "broadcast_detail_clan_event_gid",
                      type: "text",
                      value: c,
                      onChange: (u) =>
                        n.SetItemDropDetailEvents(r, u.target.value),
                    }),
                  ],
                }),
              (0, e.jsx)("div", {
                className: x().EventEditorTextTitle,
                children:
                  "(VO) " +
                  (0, s.we)("#Broadcast_ChatAnnouncement_Giveaway_title"),
              }),
              (0, e.jsx)(_.pd, {
                type: "number",
                value: d,
                tooltip: (0, s.we)(
                  "#Broadcast_ChatAnnouncement_Giveaway_gid_ttip",
                ),
                label: (0, s.we)("#Broadcast_ChatAnnouncement_Giveaway_gid"),
                onChange: (u) =>
                  n.SetChatAnnouncementGiveawayGID(u.target.value),
              }),
            ],
          });
        }
        function Rc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            o = (0, L.q3)(
              () => t.GetEventModel().jsondata.broadcast_display_wide_player,
            ),
            i = (0, L.q3)(
              () =>
                t.GetEventModel().jsondata
                  .broadcast_dispaly_wide_player_allow_chat,
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: x().EventEditorTextTitle,
                children: (0, s.we)("#Broadcast_WidePlayer"),
              }),
              (0, e.jsx)(_.Yh, {
                onChange: (l) => n.SetWidePlayerLayout(l),
                label: (0, s.we)("#Broadcast_WidePlayer_Use"),
                tooltip: (0, s.we)("#Broadcast_WidePlayer_ttip"),
                checked: !!o,
              }),
              (0, e.jsx)(_.Yh, {
                onChange: (l) => n.SetWidePlayerSupportChat(l),
                label: (0, s.we)("#Broadcast_WidePlayer_Chat_Use"),
                tooltip: (0, s.we)("#Broadcast_WidePlayer_Chat_ttip"),
                checked: !!i,
                disabled: !o,
              }),
              (0, e.jsxs)(oe.Eb, {
                requireAdmin: !0,
                clanSteamID: t.GetClanSteamID(),
                className: (0, j.A)(x().ValveOnlyBackground),
                children: [
                  (0, e.jsx)(xe.he, {
                    toolTipContent: (0, s.we)("#Broadcast_ContentType_Desc"),
                    children: (0, e.jsx)("div", {
                      className: x().EventEditorTextTitle,
                      children: "(VO) " + (0, s.we)("#Broadcast_ContentType"),
                    }),
                  }),
                  (0, e.jsx)(Uc, {}),
                ],
              }),
            ],
          });
        }
        function kc(a) {
          const { accountid: t } = a,
            { isLoading: n, data: o } = (0, Dc.js)(t),
            i = () => {
              let d = G.mh.GetEditModel();
              return new Ce(d);
            };
          let l = G.mh.GetEditModel().GetEventModel(),
            r = (0, L.q3)(() => l.jsondata.broadcast_whitelist.indexOf(t)),
            c = (0, L.q3)(() => {
              let d = l.jsondata.broadcast_language,
                u = T.xPp;
              return (
                r >= 0 && d && r < d.length && d[r] !== void 0 && (u = d[r]), u
              );
            });
          return n
            ? (0, e.jsx)(N.t, { size: "small", string: (0, s.we)("#Loading") })
            : o
              ? (0, e.jsxs)("div", {
                  className: (0, j.A)($t().FlexCenter, Ut().AccountRow),
                  children: [
                    (0, e.jsxs)("a", {
                      className: (0, j.A)(
                        $t().FlexCenter,
                        be().BroadcastAccountInfo,
                      ),
                      href: o.GetCommunityProfileURL(),
                      target: "_blank",
                      children: [
                        o
                          ? (0, e.jsx)("img", {
                              style: { marginRight: "8px" },
                              src: o.avatar_url,
                            })
                          : null,
                        o ? o.m_strPlayerName : null,
                      ],
                    }),
                    (0, e.jsxs)(xe.he, {
                      toolTipContent: (0, s.we)("#Broadcast_Language_hint"),
                      children: [
                        (0, e.jsxs)("span", {
                          children: [(0, s.we)("#EventEditor_Langauge"), ": "],
                        }),
                        (0, e.jsx)(An.Ng, {
                          bAllowUnsetOption: !0,
                          selectedLang: c,
                          fnOnLanguageChanged: (d) =>
                            i().SetWhiteListAccountLanguage(t, d),
                        }),
                      ],
                    }),
                    (0, e.jsx)(Fc, { accountid: t }),
                    (0, e.jsx)("img", {
                      className: (0, j.A)($t().FlexCenter, $t().RemoveIcon),
                      src: In.A,
                      onClick: () => i().DeleteWhiteListAccount(t),
                    }),
                  ],
                })
              : (0, e.jsx)("div", {
                  children: (0, s.we)("#Broadcast_FailedToLoadUser"),
                });
        }
        function Fc(a) {
          const t = G.mh.GetEditModel(),
            n = new Ce(t),
            o = (r) => {
              n.SetWhiteListAccountPriority(a.accountid, r.data);
            },
            i = [
              { label: (0, s.we)("#Broadcast_Priority_Primary"), data: Ca.U7 },
              { label: (0, s.we)("#Broadcast_Priority_Featured"), data: Ca._ },
              {
                label: (0, s.we)("#Broadcast_Priority_DefaultFeatured"),
                data: Ca.zl,
              },
              { label: (0, s.we)("#Broadcast_Priority_General"), data: Ca.mP },
            ],
            l = n.GetWhiteListAccountPriority(a.accountid, Ca.mP);
          return (0, e.jsxs)(xe.he, {
            toolTipContent: (0, s.we)("#Broadcast_Priority_hint"),
            className: be().PrioritySelector,
            children: [
              (0, e.jsxs)("span", {
                children: [(0, s.we)("#Broadcast_Priority_label"), ": "],
              }),
              (0, e.jsx)(_.m, { rgOptions: i, selectedOption: l, onChange: o }),
            ],
          });
        }
        function Uc(a) {
          const t = G.mh.GetEditModel(),
            n = new Ce(t),
            o = [
              {
                label: (0, s.we)("#Broadcast_ContentType_Unknown"),
                data: void 0,
              },
              { label: (0, s.we)("#Broadcast_ContentType_Live"), data: "live" },
              {
                label: (0, s.we)("#Broadcast_ContentType_Premiere"),
                data: "premiere",
              },
              {
                label: (0, s.we)("#Broadcast_ContentType_Encore"),
                data: "encore",
              },
            ],
            i = n.GetBroadcastContentType();
          return (0, e.jsxs)(xe.he, {
            toolTipContent: (0, s.we)("#Broadcast_ContentType_Desc"),
            className: be().PrioritySelector,
            children: [
              (0, e.jsxs)("span", {
                children: [(0, s.we)("#Broadcast_ContentType"), ": "],
              }),
              (0, e.jsx)(_.m, {
                rgOptions: o,
                selectedOption: i,
                onChange: (l) => n.SetBroadcastContentType(l.data),
              }),
            ],
          });
        }
        var zc = h(85408),
          Hc = h(75909);
        class mt {
          m_mapAppIDToDLCs = new Map();
          m_mapAppIDToSoundTracks = new Map();
          m_mapPromise = new Map();
          GetDLCForAppID(t) {
            return this.m_mapAppIDToDLCs.get(t);
          }
          GetSoundTracksForAppID(t) {
            return this.m_mapAppIDToSoundTracks.get(t);
          }
          async LoadDLCAndSoundTracksForAppID(t, n) {
            return (
              this.m_mapPromise.has(t) ||
                this.m_mapPromise.set(
                  t,
                  this.InternalLoadDLCAndSoundTracksForAppID(t, n),
                ),
              this.m_mapPromise.get(t)
            );
          }
          async InternalLoadDLCAndSoundTracksForAppID(t, n) {
            if (!this.m_mapAppIDToDLCs.has(t) && t != 0)
              try {
                let o = {
                    origin: self.origin,
                    cc: f.TS.COUNTRY || "US",
                    l: f.TS.LANGUAGE,
                  },
                  i = "";
                (0, f.yK)() == "partner"
                  ? (i = `${f.TS.PARTNER_BASE_URL}seasonpass/ajaxgetreleasedorupcomingdlc?parentappid=${t}`)
                  : (i = f.TS.STORE_BASE_URL + "dlc/" + t + "/ajaxgetdlclist");
                let l = await K().get(i, { params: o, cancelToken: n?.token }),
                  r = Array();
                l.data.dlcs &&
                  l.data.dlcs.forEach((c) => {
                    r.push({
                      appid: c.appid,
                      name: c.name,
                      is_released_somewhere: !!c.is_released_somewhere,
                    });
                  }),
                  this.m_mapAppIDToDLCs.set(t, r),
                  (r = Array()),
                  l.data.soundtracks &&
                    l.data.soundtracks.forEach((c) => {
                      r.push({
                        appid: c.appid,
                        name: c.name,
                        is_released_somewhere: !!c.is_released_somewhere,
                      });
                    }),
                  this.m_mapAppIDToSoundTracks.set(t, r);
              } catch (o) {
                const i = (0, ye.H)(o);
                console.error(
                  "LoadDLCAndSoundTracksForAppID for appid: " +
                    t +
                    " hit: " +
                    i.strErrorMsg,
                  i,
                );
              }
            return {
              dlcs: this.m_mapAppIDToDLCs.has(t)
                ? this.m_mapAppIDToDLCs.get(t)
                : [],
              soundtracks: this.m_mapAppIDToSoundTracks.has(t)
                ? this.m_mapAppIDToSoundTracks.get(t)
                : [],
            };
          }
          static s_Singleton;
          static Get() {
            return (
              mt.s_Singleton || (mt.s_Singleton = new mt()), mt.s_Singleton
            );
          }
          constructor() {
            (0, U.Gn)(this);
          }
        }
        function Qi(a) {
          const [t, n] = useState(a),
            [o, i] = useState(mt.Get().GetDLCForAppID(t));
          return (
            useEffect(() => {
              a &&
                (a != t || !o) &&
                mt
                  .Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((l) => {
                    i(l.dlcs), n(a);
                  });
            }, [t, a, o]),
            o
          );
        }
        function cp(a) {
          const [t, n] = useState(a),
            [o, i] = useState(mt.Get().GetSoundTracksForAppID(t));
          return (
            useEffect(() => {
              a &&
                (a != t || !o) &&
                mt
                  .Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((l) => {
                    i(l.soundtracks), n(a);
                  });
            }, [t, a, o]),
            o
          );
        }
        function up(a) {
          const t = Qi(a);
          return useMemo(
            () => t?.filter((o) => !!o.is_released_somewhere) || null,
            [t],
          );
        }
        function hp(a) {
          const t = Qi(a);
          return useMemo(
            () => t?.filter((o) => !o.is_released_somewhere) || null,
            [t],
          );
        }
        var Yi = h(38080),
          Vc = h(27344),
          Wc = h(72805),
          Qc = h(38745),
          O = h(30040),
          Yc = h(22142),
          Jc = Object.defineProperty,
          Kc = Object.getOwnPropertyDescriptor,
          Ue = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Kc(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && Jc(t, n, i), i;
          };
        let Et = class extends g.Component {
          OnHeadlineChange(a) {
            const { section: t, lang: n } = this.props;
            t.SetHeadline(a.currentTarget.value || null, n);
          }
          OnBodyChange(a) {
            const { section: t, lang: n } = this.props;
            t.SetBody(a.currentTarget.value || null, n);
          }
          OnVideoChange(a) {
            const { section: t } = this.props;
            t.SetVideoLink(a.currentTarget.value || null);
          }
          OnRemoveSubSection(a) {
            const { section: t, fnRemoveSection: n } = this.props;
            (0, y.pg)(
              (0, e.jsx)(B.o0, {
                strTitle: (0, s.we)("#EventEmail_Template_EditTitle"),
                strDescription: (0, s.we)(
                  "#EventEmail_Template_RemoveSubSection",
                  (0, s.we)("#EventEmail_Template_Sub_" + a),
                ),
                onOK: () => {
                  t.RemoveSubSection(a), !t.BHasSomeSubSection() && n && n();
                },
              }),
              window,
            );
          }
          GenerateTemplateRemove(a) {
            let t = (0, s.we)("#EventEmail_Template_Sub_" + a);
            return (0, e.jsx)("div", {
              className: O.ImgCrossCtn,
              children: (0, e.jsx)(xe.he, {
                toolTipContent: (0, s.we)("#EventEmail_Template_Remove", t),
                children: (0, e.jsx)("img", {
                  className: O.ImgCross,
                  src: In.A,
                  onClick: () => this.OnRemoveSubSection(a),
                }),
              }),
            });
          }
          render() {
            const {
              section: a,
              additionalClassName: t,
              lang: n,
              bEditor: o,
              clanSteamID: i,
              appid: l,
              bTemplateEditable: r,
            } = this.props;
            return (0, e.jsxs)("div", {
              className: (0, j.A)(t, O.DevEmailEmailBackground, O.EmailSection),
              children: [
                a.BHasHeadline() &&
                  (0, e.jsxs)(g.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("headline"),
                      (0, e.jsx)("input", {
                        type: "text",
                        className: O.HeadlineInput,
                        placeholder: (0, s.we)("#EventEmail_EnterHeadline"),
                        value: a.GetHeadline(n),
                        onChange: this.OnHeadlineChange,
                      }),
                    ],
                  }),
                a.BHasBody() &&
                  (0, e.jsxs)(g.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("body"),
                      (0, e.jsx)("textarea", {
                        className: O.BodyInput,
                        placeholder: (0, s.we)("#EventEmail_EnterBodyCopy"),
                        value: a.GetBody(n),
                        rows: 8,
                        onChange: this.OnBodyChange,
                      }),
                    ],
                  }),
                a.BHasCallToAction() &&
                  (0, e.jsxs)(g.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("action"),
                      (0, e.jsx)(ra, { appid: l, section: a }),
                    ],
                  }),
                a.BHasImage() &&
                  (0, e.jsxs)(g.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("img"),
                      (0, e.jsx)(Zc, {
                        section: a,
                        lang: n,
                        clanSteamID: i,
                        bEditor: o,
                        artworkType: r ? "email_centered" : "email_full",
                      }),
                    ],
                  }),
                a.BHasVideo() &&
                  (0, e.jsxs)(g.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("youtube"),
                      (0, e.jsxs)("div", {
                        className: O.VideoCtn,
                        children: [
                          (0, e.jsx)("img", { src: a.GetYouTubeImageURL() }),
                          !!o &&
                            (0, e.jsxs)("div", {
                              className: O.VideoInputCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  children: (0, s.we)(
                                    "#EventEditor_InsertYouTube_Placholder",
                                  ),
                                }),
                                (0, e.jsx)("input", {
                                  type: "text",
                                  value: a.GetVideoURL(),
                                  onChange: this.OnVideoChange,
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, s.we)(
                                      "#EventEditor_InsertYouTube_UpdateThumbnail",
                                    ),
                                    (0, e.jsx)("a", {
                                      href: "https://support.google.com/youtube/answer/72431",
                                      target: "_blank",
                                      children: (0, s.we)(
                                        "#EventEditor_InsertYouTube_LearnHow",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        Ue([J.oI], Et.prototype, "OnHeadlineChange", 1),
          Ue([J.oI], Et.prototype, "OnBodyChange", 1),
          Ue([J.oI], Et.prototype, "OnVideoChange", 1),
          Ue([J.oI], Et.prototype, "OnRemoveSubSection", 1),
          (Et = Ue([w.PA], Et));
        let ra = class extends g.Component {
          m_cancelSignal = K().CancelToken.source();
          state = { dlcs: void 0 };
          async LoadDLCForApp() {
            this.setState({
              dlcs: (
                await mt
                  .Get()
                  .LoadDLCAndSoundTracksForAppID(
                    this.props.appid,
                    this.m_cancelSignal,
                  )
              ).dlcs,
            });
          }
          componentDidMount() {
            this.LoadDLCForApp();
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EmailCallToAction cancelled");
          }
          BuildTextOptions() {
            let a = new Array();
            return (
              ot.uM.forEach((t) => {
                a.push(
                  (0, e.jsx)(
                    "option",
                    { value: t, children: (0, s.we)("#" + t) },
                    t,
                  ),
                );
              }),
              a
            );
          }
          BuildDestinationOptions() {
            let a = new Array();
            for (let t in ot.gs)
              if (!isNaN(Number(t))) {
                let n = ot.WH[t];
                a.push(
                  (0, e.jsx)(
                    "option",
                    { value: t, children: (0, s.we)("#" + n) },
                    n,
                  ),
                );
              }
            return (
              this.state.dlcs === void 0
                ? a.push(
                    (0, e.jsx)(
                      "option",
                      {
                        children: (0, e.jsx)(N.t, {
                          string: (0, s.we)("#EventEmail_LoadingDLC"),
                          size: "small",
                        }),
                      },
                      "CallToActionThrobber",
                    ),
                  )
                : this.state.dlcs.forEach((t) => {
                    a.push(
                      (0, e.jsx)(
                        "option",
                        {
                          value: t.appid,
                          children: (0, s.we)(
                            "#EventEmail_Destination_DLCPage",
                            t.name,
                            t.appid,
                          ),
                        },
                        "dlc" + t.appid,
                      ),
                    );
                  }),
              a
            );
          }
          OnButtonLocChange(a) {
            const { section: t } = this.props;
            ot.uM.forEach((n) => {
              n === a.target.value && t.SetButtonTextLock(n);
            });
          }
          OnDestinationChange(a) {
            const { section: t } = this.props;
            let n = Number(a.target.value);
            (0, U.h5)(() => {
              n < ot.gg
                ? (t.SetButtonDestination(n), t.SetButtonAppOverride(void 0))
                : (t.SetButtonDestination(ot.gs.k_EStorePage),
                  t.SetButtonAppOverride(n));
            });
          }
          OnChangeStorePageURL() {
            const { section: a } = this.props;
            (0, y.pg)(
              (0, e.jsx)(Ka, {
                strExistingURL:
                  f.TS.STORE_BASE_URL + a.GetDestinationStorePath(),
                fnUpdateURLOnSuccess: a.SetButtonDestinationStoreURL,
              }),
              window,
            );
          }
          render() {
            const { section: a } = this.props;
            let t = this.BuildTextOptions(),
              n = this.BuildDestinationOptions(),
              o = a.BHasButtonAppIDOverride()
                ? a.GetButtonAppidOverride()
                : a.GetDestination();
            return (0, e.jsxs)("div", {
              className: O.ButtonSettingContainer,
              children: [
                (0, e.jsxs)("div", {
                  className: O.ButtonSettingRow,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, s.we)("#EventEmail_Section_ButtonText"),
                    }),
                    (0, e.jsx)("select", {
                      value: a.GetButtonTextLoc(),
                      onChange: this.OnButtonLocChange,
                      children: t,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, s.we)("#EventEmail_Section_Destination"),
                    }),
                    (0, e.jsx)("select", {
                      value: o,
                      onChange: this.OnDestinationChange,
                      children: n,
                    }),
                  ],
                }),
                a.BIsStoreSalesPage() &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsxs)("span", {
                        children: [
                          (0, s.we)("#EventEmail_Section_EnterSalesPage"),
                          " ",
                          (0, e.jsx)(W.o, {
                            tooltip: (0, s.we)(
                              "#EventEmail_Section_EnterSalesPage_ttip",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("span", {
                        children:
                          f.TS.STORE_BASE_URL + a.GetDestinationStorePath(),
                      }),
                      (0, e.jsx)(_.jn, {
                        onClick: this.OnChangeStorePageURL,
                        children: (0, s.we)("#EventEmail_Section_UpdateURL"),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        Ue([J.oI], ra.prototype, "OnButtonLocChange", 1),
          Ue([J.oI], ra.prototype, "OnDestinationChange", 1),
          Ue([J.oI], ra.prototype, "OnChangeStorePageURL", 1),
          (ra = Ue([w.PA], ra));
        let Ka = class extends g.Component {
          state = {
            bIsValid: We.e$.IsValidStoreURL(this.props.strExistingURL),
            strURL: this.props.strExistingURL ? this.props.strExistingURL : "",
          };
          OnURLUpdate(a) {
            let t = a.currentTarget.value;
            this.setState({ bIsValid: We.e$.IsValidStoreURL(t), strURL: t });
          }
          render() {
            const { fnUpdateURLOnSuccess: a, closeModal: t } = this.props;
            return (0, e.jsx)(B.o0, {
              strDescription: (0, s.we)(
                "#EventEmail_Section_EnterSalesPage_ttip",
              ),
              strTitle: (0, s.we)("#EventEmail_Section_UpdateURL"),
              onOK: () => {
                a(this.state.strURL), t();
              },
              onCancel: t,
              bOKDisabled: !this.state.bIsValid,
              children: (0, e.jsx)("div", {
                children: (0, e.jsx)("input", {
                  type: "test",
                  className: O.ButtonDestInputSaleURL,
                  value: this.state.strURL,
                  onChange: this.OnURLUpdate,
                }),
              }),
            });
          }
        };
        Ue([J.oI], Ka.prototype, "OnURLUpdate", 1), (Ka = Ue([w.PA], Ka));
        function Zc(a) {
          const {
              clanSteamID: t,
              section: n,
              lang: o,
              bEditor: i,
              artworkType: l,
            } = a,
            [r, c] = g.useState(o),
            d = G.mh.GetEditModel(),
            u = g.useCallback(
              (v, E, D) => {
                Ne.zU.GetExtensionString(v) &&
                  n.SetImage(Ne.zU.GetHashAndExt(v), D),
                  c(D);
              },
              [n],
            ),
            [p, m, S] = (0, L.q3)(() => [
              n.BHasSomeImage(),
              nt.Fj[l],
              n.GetEmailImageURLWithFallback(r, t),
            ]);
          return (0, e.jsxs)("div", {
            className: O.ImagePreview,
            children: [
              (0, e.jsxs)("div", {
                className: O.FullImageCtn,
                children: [
                  (0, e.jsx)("img", {
                    width: S ? (0, nt.qj)(m.width) : void 0,
                    height: S ? (0, nt.qj)(m.height) : void 0,
                    src: S,
                  }),
                  !!i &&
                    (0, e.jsx)(zt, {
                      section: n,
                      clanSteamID: t,
                      lang: o,
                      artworkType: l,
                    }),
                ],
              }),
              p &&
                (0, e.jsx)(Yc.h, {
                  clanSteamID: t,
                  langOverride: r,
                  fnGetImageHash: (v) => n.GetImageHash(v),
                  fnOnLanguagePreviewChange: (v) => c(v),
                  fnOnRemoveImage: (v) => n.SetImage(null, v),
                  fnOnArtworkLangChange: u,
                  realms: d.GetIncludedRealmList(),
                  fnLangHasData: d.BHasTitleImage,
                }),
            ],
          });
        }
        let zt = class extends g.Component {
          state = { bDownloadFromClanImageStore: !1 };
          m_clanImageUploader = void 0;
          constructor(a) {
            super(a), this.RefreshUploader();
          }
          componentDidUpdate(a) {
            (a.clanSteamID.GetAccountID() !=
              this.props.clanSteamID.GetAccountID() ||
              a.artworkType != this.props.artworkType) &&
              this.RefreshUploader();
          }
          RefreshUploader() {
            this.m_clanImageUploader = new Hc.VE(this.props.clanSteamID, [
              this.props.artworkType,
            ]);
          }
          async DoUpload() {
            const { section: a } = this.props;
            try {
              const t = await this.m_clanImageUploader.UploadAllImages();
              for (const n of t)
                if (!n.bSuccess || n.uploadResult.success !== 1)
                  (n.image.status = "failed"),
                    (n.image.message = n.uploadResult.message);
                else {
                  n.image.status = "success";
                  let o = Ne.zU.GetExtensionString(n.uploadResult);
                  a.SetImage(n.uploadResult.image_hash + o, n.image.language);
                }
            } catch (t) {
              console.error("DoUpload failed:" + (0, ye.H)(t).strErrorMsg);
            }
          }
          async OnDropFiles(a) {
            if (a && a.length > 0) {
              const { lang: t } = this.props;
              let n = !0,
                o = Array.from(a);
              for (let i = 0; n && i < o.length; i++) {
                let l = o[i];
                (n = await this.m_clanImageUploader.AddImage(l, t)),
                  n ||
                    (console.error(
                      "ClanImagePicker.OnDropFiles: failed on i=" +
                        i +
                        " file=" +
                        l.name,
                    ),
                    (0, y.pg)(
                      (0, e.jsx)(B.KG, {
                        strDescription: (0, s.we)("#ImagePicker_Error", l.name),
                      }),
                      window,
                    ));
              }
              return n;
            }
            return !1;
          }
          RenderInstructions() {
            const { artworkType: a } = this.props;
            let t = nt.Fj[a];
            return (0, e.jsxs)(g.Fragment, {
              children: [
                (0, e.jsx)("span", {
                  className: O.EmailInputText,
                  children: (0, s.we)("#EventEmail_SelectBrandingImage"),
                }),
                (0, e.jsx)("span", {
                  children: (0, s.we)(
                    "#EventEmail_ImageDimension",
                    (0, nt.qj)(t.width),
                    (0, nt.qj)(t.height),
                  ),
                }),
              ],
            });
          }
          async OnPreviousImageSelected(a, t) {
            this.state.bDownloadFromClanImageStore ||
              this.setState({ bDownloadFromClanImageStore: !0 }, async () => {
                const { lang: n } = this.props;
                try {
                  await this.m_clanImageUploader.AddExistingClanImage(a, n);
                } catch (o) {
                  let i = (0, ye.H)(o);
                  console.error("AddExistingClanImage: " + i.strErrorMsg, i),
                    (0, y.pg)(
                      (0, e.jsx)(B.KG, {
                        strDescription: (0, s.we)(
                          "#EventError_Code",
                          i.strErrorMsg,
                        ),
                      }),
                      window,
                    );
                }
                this.setState({ bDownloadFromClanImageStore: !1 });
              });
          }
          render() {
            const { section: a } = this.props;
            if (this.state.bDownloadFromClanImageStore)
              return (0, e.jsx)("div", {
                className: O.EditImageInputCtn,
                children: (0, e.jsx)(N.t, {
                  position: "center",
                  size: "medium",
                  string: (0, s.we)("#Loading"),
                }),
              });
            const { clanSteamID: t } = this.props;
            let n = (0, Yi.fY)(this.m_clanImageUploader, "emailartupload_");
            return (0, e.jsx)("div", {
              className: O.EditImageInputCtn,
              children: (0, e.jsxs)(Qc.D, {
                onDropFiles: this.OnDropFiles,
                elAdditonalButtons: [
                  (0, e.jsx)(
                    Wc.Hd,
                    {
                      OnClanImageSelected: this.OnPreviousImageSelected,
                      clanSteamID: t,
                    },
                    "emailsecion",
                  ),
                ],
                renderDesciption: this.RenderInstructions,
                children: [
                  (0, e.jsx)("div", {
                    className: Vc.UploadPreviewCtn,
                    children: n,
                  }),
                  (0, e.jsx)(Yi.PY, {
                    imageUploader: this.m_clanImageUploader,
                    fnOnUploadImageRequested: this.DoUpload,
                  }),
                ],
              }),
            });
          }
        };
        Ue([J.oI], zt.prototype, "DoUpload", 1),
          Ue([J.oI], zt.prototype, "OnDropFiles", 1),
          Ue([J.oI], zt.prototype, "RenderInstructions", 1),
          Ue([J.oI], zt.prototype, "OnPreviousImageSelected", 1),
          (zt = Ue([w.PA], zt));
        const qc =
            h.p +
            "images/applications/community/Logo_Steamworks.png?v=valveisgoodatcaching",
          Xc =
            h.p +
            "images/applications/community/Logo_Steam_NoWords_Dark.png?v=valveisgoodatcaching",
          Ji =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAgCAYAAAAPHGYtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8FJREFUeNrsWltIVEEYXs28ZPebEVq+BBGZIl1ALc0LaDd9q8gi6yl66LGgh24PPddDPkVXlCDIzbByqcwoSsEsWB80NKxIpIhKKiTdvh/+iZ/D6ZxZ3KNnaT74dmbOzM6emf8652xCJBIJGPgTiWYLjHAMjHCMcAwmCUn0sXN37VuzFRNCKxgEq8DeG43Xz8dMOMBys78TwmJwNvgLnBNTyxFoBDvMXmvjILia66/AMXDEK+G0wiQvmz3XA8JBiRIO9q0HRU/MY47LDexBMR0cxg20WPoyUZRzM4z+Tod5trD5K1zD+DGN369EsQQcxfgGl7GLUGzlZg/Gd1j681DkcTOE/g+W/vkodthM3Y2x3VOSELjgAFgKfqObt2xoLXiW67vAzn9sWgopFzhTXO4Fn2n8/jGwGPwKNriM/QnWg6lgG7jZ0n8CrAHHLYqisAy8ZHP9FAnIj6l0E5cU8NZZ+sq4HAVbHOYotggmIDQ8ZoDikL8PcbMASjFDKMg0FCXcbMfYzw5TUV+dYNOUpdIuoBRRpYbkwp7zYpNRFPL1B1jsd4c5lCA+gQMs5G3gcQ/WdAvcDiazUtzl6/ngXDHGCSN+iL2JGto4iOKlEI5CAZimuVjlxx8JC1sDAWd5sKbb7LYIFTZWHtCwhEw6+wmu8vMTgqCNq1AuIiL67eINLSxbWZjQ5ABbT6xdG7mkdhtlUvUuVrj4eEKgGXdOcta2CbwnFvsUix12+K4UAAmnn336AnZ39R65NlKeHChHBicThZpWTniPNWX73q2xNtIBSz3iKceC01Gu13QRKt4MYp434LgI2mWYK82Ddcl7qmAXnBqFcFLpDCOY7We3Jl0bWcxGtiLHxfK5oYibs9BuI6K+QW2CJRbEyrWR2+oSwinleh/6whpTZHB8VNzvZ7emtPEImMtnGsJrLLbf4TuVQgHmcfZkZ1l3PHJt+axM7zStZojPNFa0+V04T8AvvMl7NRcr481h8IdonwazeMwhj4RzBlzKdHXBULQhjq1xlRDQjY/BJTWjuk9Yg5NLo0NflXAnFyz9a1lglLbmclxzQjrG2W1uM7570eZ+wxjfh+oKvvQRfBFPz+6ifdkmU+YBlw0tEoe+kE3//ShTalKkahvmuFjP3/MPJyNxg6Qox9OGnuO626uF38J/252DHoq5nFLxmy7PtR479F0BU7h+NRBnSKC/RsH81f+j6swrA32wmyXrDWLfary2nJX8jsJADwsn060dZRrEYUJgMNkxx8BYjoERjhGOgRHO/40/AgwA6Pwl5bmDALcAAAAASUVORK5CYII=",
          $c =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA4CAYAAABJ7S5PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEJGOUM2QTBGNkY5MTFFOUJBQTg4OUJENjhFNUQyN0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEJGOUM2OUZGNkY5MTFFOUJBQTg4OUJENjhFNUQyN0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI2RThDNjdERjZGODExRTk5N0QwOTZDNjI3Q0M0MTRDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI2RThDNjdFRjZGODExRTk5N0QwOTZDNjI3Q0M0MTRDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XKq1FgAAAwJJREFUeNrsm4tRhDAQhoNjA7RAC7QQSzhLiCVgCVgClnBXAlcClAAlYAlnMm7OHeSRF4HEy8yOzp0w7Mfun90kJrfbjTwGIU8PBD/j2fYGSZJs/YwpN8Yt55bBTzmu3Fqwi8nN7xkhfrGxDYdwuhKPqGgdANO5d3r3Y8Y5ujMI4dCgAQFbM4oaPHIEt8KBMOVYBn/IdgJRGQLANiAYlFsJEYO/z9ZAFOgC5hmECwjY2bnvCqwRcyCa0UXME4iTQwhLVo3F8g8IUOipi9nGIFILTTCGAGlTTIGgS+G0IYjCA4QCdOGENGOQM4cOCGFnPOU4BLF1NHRzgjqXGlTxptQhCF/a8CfdlzSCatyohNwOIS0mIZiI5dIUxSxB1B4BDBCBRGX67AxzkB0cxGTFKf2e6j5NmhdZuw9InY82LtCcKbfhn5b1gJyaGoCSB9mG8zDpeWv9gctQw5EjCF+jlvkLvZ0WRHrfMVMk+ar0fFqx5P/TzJfijb1EtgjVKi/V8ZQ4caMAQ1z4CmH879YshdM1h9FxK+Gzd259BL72yhqhWVmGZkRZI/gH10gj/6qbGquiEqNQblFQhakPC3VEF5k+ZFoagcZ7ZGnRm6SGIHSJKEXUmsiVFeoq5rRYXI+IDEatGgiq23pFoE0YcwoCdaRFQDNKpyMNydpKtGjERo2X3BugBxfJNxXBVz4WsNMqs5do0BXLEBdpmHMQAUZFrZM/JmJ5DgDCoLuCbjprNCGuSzoFEQCMs83itekBsqNpRkMM92GtQKCzVuUBZpTBZhNJuaBaG3DOksLDyDORqaeiSW47tDYglAoqjcNkqeeZxSoSnKXGCATznCJOIDgDASlRE//ls7ONZWMQO3ehtWv90e01KDjfhFQs6YB4BuWnE2qfkmOcbWihpd52v2X05suDtdJsa8prh9KrHQslLwCUNQIVR7504UxGJ958glCqLLmGyOW53OHD9uT3ONGF7HQOQ/pvVGKDuGZoRiGoxJ7bie6RKe0+HR5EjOPxX34wvgUYAA3Q5FQ1OsEYAAAAAElFTkSuQmCC";
        var Ki = h(71647),
          eu = Object.defineProperty,
          tu = Object.getOwnPropertyDescriptor,
          wa = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? tu(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && eu(t, n, i), i;
          };
        const au = {
          localized_headline: new Array(T.bP9),
          localized_body: new Array(T.bP9),
          localized_image: new Array(T.bP9),
          button_destination: ot.gs.k_EEventPage,
          button_loc_token: "EventEmail_Button_ClickForMoreDetails",
          video_link: "",
        };
        let Gn = class extends g.Component {
          GetEmailEditModel() {
            return new We.pC(this.props.editModel);
          }
          render() {
            const { editModel: a } = this.props;
            let t = a.GetCurEditLanguage(),
              n = this.GetEmailEditModel(),
              o = [];
            n.GetSectionObjects().forEach((l, r) => {
              o.push(
                (0, e.jsx)(
                  Et,
                  {
                    lang: t,
                    clanSteamID: a.GetClanSteamID(),
                    bEditor: a.BIsEmailEditable(),
                    appid: a.GetAppID(),
                    section: l,
                    additionalClassName: O.HeaderSection,
                    bTemplateEditable: !0,
                    fnRemoveSection: () => n.RemoveSection(r),
                  },
                  "email_editor_section_" + r,
                ),
              );
            });
            let i = n.GetLocalizedSubject(t);
            return (0, e.jsxs)("div", {
              className: O.EmailEditorContent,
              children: [
                (0, e.jsxs)("div", {
                  className: O.RightAlign,
                  children: [
                    (0, e.jsxs)("span", {
                      className: O.EmailOptionTitle,
                      children: [(0, s.we)("#LanguageTitle"), ": "],
                    }),
                    (0, e.jsx)(An.Ng, {
                      selectedLang: t,
                      fnLangHasData: n.BHasSomeLanguage,
                      fnOnLanguageChanged: (l) => a.SetCurEditLanguage(l),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(x().FlexRowContainer, O.EmailSubjectCtn),
                  children: [
                    (0, e.jsx)("span", {
                      className: O.EmailOptionTitle,
                      children: (0, s.we)("#EventEmail_Subject"),
                    }),
                    (0, e.jsx)("input", {
                      type: "text",
                      value: i,
                      size: 90,
                      maxLength: 250,
                      onChange: (l) =>
                        this.GetEmailEditModel().SetLocalizedSubject(
                          a.GetCurEditLanguage(),
                          l.currentTarget.value,
                        ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(O.EmailTemplate, O.DevEmailTemplate),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, j.A)(O.CenterAlign, O.DevEmail_TopHeader),
                      children: (0, e.jsx)("a", {
                        href: f.TS.PARTNER_BASE_URL,
                        children: (0, e.jsx)("img", {
                          src: qc,
                          className: O.DevEmail_TopLogo,
                        }),
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, j.A)(O.DevEmail_Content),
                      children: (0, e.jsx)("div", {
                        className: O.DevEmail_Subject,
                        children: i,
                      }),
                    }),
                    o,
                    (0, e.jsxs)("div", {
                      className: (0, j.A)(O.EmailSection, O.SupportCtn),
                      children: [
                        (0, e.jsx)("b", { children: "Have Questions?" }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("a", { href: "#", children: "Contact us" }),
                        " and we'll get right back to you.",
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, j.A)(O.DevEmail_Content),
                      children: [
                        (0, e.jsx)("img", {
                          src: Xc,
                          className: O.DevEmail_SignOff_Img,
                        }),
                        (0, e.jsx)("div", {
                          className: O.DevEmail_Signoff,
                          children: (0, e.jsxs)("div", {
                            children: [
                              "- ",
                              (0, s.we)("#EventEmail_Developer_SignOff2"),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(O.DevEmail_Footer_Ctn),
                  children: [
                    (0, e.jsx)("span", {
                      className: O.DevEmail_Footer_Reason,
                      children: (0, s.we)(
                        "#EventEmail_Developer_Footer_Reason",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: O.DevEmail_Footer_SubSection,
                      children: [
                        (0, e.jsx)("img", { src: Ji, width: 103, height: 43 }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              className: O.DevEmail_Footer_Bold,
                              children: (0, e.jsxs)("strong", {
                                children: [
                                  (0, s.we)(
                                    "#EventEmail_Developer_Footer_Valve",
                                  ),
                                  (0, e.jsx)("br", {}),
                                  (0, s.we)(
                                    "#EventEmail_Developer_Footer_Valve2",
                                  ),
                                ],
                              }),
                            }),
                            (0, e.jsx)("div", {
                              className: O.DevEmail_Footer_Regular,
                              children: (0, s.we)(
                                "#EventEmail_Developer_Footer_Valve3",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              children: (0, e.jsxs)("a", {
                                className: x().FlexRowContainer,
                                href:
                                  (f.TS.IN_CLIENT ? "steam://openurl/" : "") +
                                  "https://twitter.com/steam_games",
                                target: f.TS.IN_CLIENT ? void 0 : "_blank",
                                children: [
                                  (0, e.jsx)("img", {
                                    src: $c,
                                    width: 33,
                                    height: 28,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: O.DevEmail_Follow,
                                    children: (0, s.we)(
                                      "#EventEmail_Developer_Footer_Follow",
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)("button", {
                  className: (0, j.A)(x().Button, O.CenterAlign),
                  onClick: () => {
                    n.AddSection(au);
                  },
                  children: (0, s.we)("#EventEmail_Template_AddSection"),
                }),
              ],
            });
          }
        };
        Gn = wa([w.PA], Gn);
        let da = class extends g.Component {
          state = {
            capabilities: void 0,
            selectedCapability: void 0,
            nDuplicatesRemoved: 0,
          };
          m_cancelSignal = K().CancelToken.source();
          m_appFileInput = g.createRef();
          m_pubFileInput = g.createRef();
          componentWillUnmount() {
            this.m_cancelSignal.cancel("DevEventRecipientOptions cancelled");
          }
          async componentDidMount() {
            let a = await G.mh.GetPartnerCapabilities(this.m_cancelSignal),
              t = this.GetEmailEditModel(),
              n = { label: a[0].capability, value: a[0] };
            a.forEach((o) => {
              o.id === t.GetInternalTargetingPartnerCapability() &&
                (n = { label: o.capability, value: o });
            }),
              this.setState({ capabilities: a, selectedCapability: n });
          }
          GetEmailEditModel() {
            return new We.pC(this.props.editModel);
          }
          async OnFileChoice(a, t) {
            let n = t.target.files;
            if (n && n.length > 0 && n[0]) {
              let o = this;
              this.setState({ readingFile: !0, file: n[0] }, () => {
                const i = new FileReader();
                (i.onload = function () {
                  const l = i.result
                      .toString()
                      .split(`
`)
                      .map((c) => Number.parseInt(c)),
                    r = new Set(l);
                  a == "app"
                    ? o.GetEmailEditModel().SetInternalAppIDs(Array.from(r))
                    : o
                        .GetEmailEditModel()
                        .SetInternalPublisherIDs(Array.from(r)),
                    o.setState({
                      readingFile: !1,
                      nDuplicatesRemoved: l.length - r.size,
                      file: null,
                    });
                }),
                  (i.onerror = function () {
                    console.error(
                      "DevEventRecipientOptions - Failed to read file",
                      i,
                    ),
                      o.setState({ readingFile: !1, file: null });
                  }),
                  i.readAsText(this.state.file);
              });
            }
            this.m_appFileInput.current &&
              this.m_appFileInput.current.value &&
              (this.m_appFileInput.current.value = null),
              this.m_pubFileInput.current &&
                this.m_pubFileInput.current.value &&
                (this.m_pubFileInput.current.value = null);
          }
          ShowTargets(a) {
            let t = this.GetEmailEditModel(),
              n =
                a == "app"
                  ? t.GetInternalTargetAppIDs()
                  : t.GetInternalTargetPublisherIDs();
            (0, y.pg)(
              (0, e.jsx)(B.o0, {
                strTitle: (0, s.we)(
                  a == "app"
                    ? "#EventEmail_Developer_ShowApps"
                    : "#EventEmail_Developer_ShowPublisher",
                  n.length,
                ),
                onOK: () => {},
                onCancel: () => {},
                bAlertDialog: !0,
                children: n.map((o) =>
                  (0, e.jsx)("div", { children: o }, a + "_" + o),
                ),
              }),
              window,
            );
          }
          ClearTargets(a) {
            const t = this.GetEmailEditModel();
            a == "app"
              ? t.SetInternalAppIDs([])
              : a == "publisher" && t.SetInternalPublisherIDs([]);
          }
          render() {
            if (!this.state.capabilities)
              return (0, e.jsx)(N.t, { string: (0, s.we)("#Loading") });
            let a = this.GetEmailEditModel();
            const t = this.state.capabilities.map((i) => ({
                value: i,
                label: i.capability,
              })),
              n = ht.PubRights.map((i) =>
                (0, e.jsx)(
                  _.Yh,
                  {
                    onChange: (l) =>
                      a.UpdateInternalTargetPublisherRights(i.flag, l),
                    label: (0, s.we)("#PubRight_" + i.token),
                    tooltip: (0, s.we)("#PubRight_" + i.token + "_Tooltip"),
                    checked: a.BHasInternalTargetingPublisherRight(i.flag),
                  },
                  "PubRights" + i.flag,
                ),
              ),
              o = ht.AppRights.filter(
                (i) =>
                  ![Ea.Download, Ea.UploadCDKeys, Ea.ManageCEG].includes(
                    i.token,
                  ),
              ).map((i) =>
                (0, e.jsx)(
                  _.Yh,
                  {
                    onChange: (l) => a.UpdateInternalTargetAppRights(i.flag, l),
                    label: (0, s.we)("#AppRight_" + i.token),
                    tooltip: (0, s.we)("#AppRight_" + i.token + "_Tooltip"),
                    checked: a.BHasInternalTargetingAppRight(i.flag),
                  },
                  "AppRights" + i.flag,
                ),
              );
            return (0, e.jsxs)("div", {
              className: O.RecipientCtn,
              children: [
                (0, e.jsx)("div", {
                  className: (0, j.A)(x().EventEditorTextTitle),
                  children: (0, e.jsx)("span", {
                    className: x().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Recipients"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    x().FlexColumnContainer,
                    x().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEmail_Recipients_desc"),
                    }),
                    (0, e.jsx)("table", {
                      className: O.DevEmail_RecipientTable,
                      children: (0, e.jsxs)("tbody", {
                        children: [
                          (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", {
                                children: (0, s.we)(
                                  "#EventEmail_Developer_IsUrgent",
                                ),
                              }),
                              (0, e.jsx)("td", {
                                children: (0, e.jsx)(_.Yh, {
                                  onChange: (i) =>
                                    a.SetInternalTargetPriority(i),
                                  label: (0, s.we)(
                                    "#EventEmail_Developer_IsUrgent_Desc",
                                  ),
                                  checked: a.BHasInternalTargetingPriority(),
                                }),
                              }),
                            ],
                          }),
                          (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", {
                                children: (0, s.we)(
                                  "#EventEmail_Developer_PartnerCapability",
                                ),
                              }),
                              (0, e.jsx)("td", {
                                children: (0, e.jsx)(ta.Ay, {
                                  className: "react-select-container",
                                  classNamePrefix: "react-select",
                                  isSearchable: !0,
                                  isMulti: !1,
                                  value: this.state.selectedCapability,
                                  options: t,
                                  onChange: (i) =>
                                    this.setState(
                                      { selectedCapability: i },
                                      () =>
                                        this.GetEmailEditModel().SetInternalTargetPartnerCapability(
                                          i.value.id,
                                        ),
                                    ),
                                }),
                              }),
                            ],
                          }),
                          (0, e.jsx)("tr", {
                            children: (0, e.jsx)("th", {
                              colSpan: 2,
                              children: (0, s.we)(
                                "#EventEmail_Developer_RightDesc",
                              ),
                            }),
                          }),
                          (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", {
                                children: (0, s.we)(
                                  "#EventEmail_Developer_PublisherRights",
                                ),
                              }),
                              (0, e.jsx)("td", { children: n }),
                            ],
                          }),
                          (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", {
                                children: (0, s.we)(
                                  "#EventEmail_Developer_AppRights",
                                ),
                              }),
                              (0, e.jsx)("td", { children: o }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    this.state.readingFile &&
                      (0, e.jsx)(N.t, { size: "small" }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("b", {
                        children: (0, s.we)(
                          "#EventEmail_Developer_FilterOptional",
                        ),
                      }),
                    }),
                    this.state.nDuplicatesRemoved > 0 &&
                      (0, e.jsx)("div", {
                        className: Pt.WarningStylesBackground,
                        children: (0, e.jsx)("b", {
                          children: (0, s.we)(
                            "#EventEmail_Developer_DuplicateRemoved",
                            (0, lt.D)(this.state.nDuplicatesRemoved),
                          ),
                        }),
                      }),
                    (0, e.jsxs)("div", {
                      className: O.TargetCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: O.TargetTypeTitle,
                          children: (0, e.jsx)("b", {
                            children: "App Targeting",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: O.TargetTypeCtn,
                          children: [
                            !!a.GetInternalTargetAppCount() &&
                              (0, e.jsxs)("div", {
                                className: O.TargetedListCtn,
                                children: [
                                  (0, e.jsxs)("div", {
                                    children: [
                                      a.GetInternalTargetAppCount(),
                                      " apps targeted.",
                                    ],
                                  }),
                                  (0, e.jsx)("button", {
                                    className: "btn_blue_steamui btn_medium",
                                    onClick: () => this.ShowTargets("app"),
                                    children: (0, e.jsx)("span", {
                                      children: (0, s.we)(
                                        "#EventEmail_Developer_ShowApps",
                                        a.GetInternalTargetAppCount(),
                                      ),
                                    }),
                                  }),
                                  (0, e.jsx)("button", {
                                    className: "btn_blue_steamui btn_medium",
                                    onClick: () => this.ClearTargets("app"),
                                    children: (0, e.jsx)("span", {
                                      children: (0, s.we)(
                                        "#EventEmail_Developer_ClearApps",
                                        a.GetInternalTargetAppCount(),
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            (0, e.jsxs)("div", {
                              className: O.SelectListCtn,
                              children: [
                                (0, s.we)("#EventEmail_Developer_AddApps"),
                                (0, e.jsx)("label", {
                                  className: Ki.SelectImageButton,
                                  htmlFor: "internal_loadappid",
                                  children: (0, s.we)(
                                    "#EventEmail_Developer_SelectFile",
                                  ),
                                }),
                                (0, e.jsx)("input", {
                                  ref: this.m_appFileInput,
                                  id: "internal_loadappid",
                                  style: { display: "none" },
                                  type: "file",
                                  onSubmit: (i) => this.OnFileChoice("app", i),
                                  onChange: (i) => this.OnFileChoice("app", i),
                                  multiple: !1,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: O.TargetCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: O.TargetTypeTitle,
                          children: (0, e.jsx)("b", {
                            children: "Publisher Targeting",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: O.TargetTypeCtn,
                          children: [
                            a.GetInternalTargetPublisherCount() &&
                              (0, e.jsxs)("div", {
                                className: O.TargetedListCtn,
                                children: [
                                  (0, e.jsxs)("div", {
                                    children: [
                                      a.GetInternalTargetPublisherCount(),
                                      " publishers targeted.",
                                    ],
                                  }),
                                  (0, e.jsx)("button", {
                                    className: "btn_blue_steamui btn_medium",
                                    onClick: () =>
                                      this.ShowTargets("publisher"),
                                    children: (0, e.jsx)("span", {
                                      children: (0, s.we)(
                                        "#EventEmail_Developer_ShowPublisher",
                                        a.GetInternalTargetPublisherCount(),
                                      ),
                                    }),
                                  }),
                                  (0, e.jsx)("button", {
                                    className: "btn_blue_steamui btn_medium",
                                    onClick: () =>
                                      this.ClearTargets("publisher"),
                                    children: (0, e.jsx)("span", {
                                      children: (0, s.we)(
                                        "#EventEmail_Developer_ClearApps",
                                        a.GetInternalTargetAppCount(),
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            (0, e.jsxs)("div", {
                              className: O.SelectListCtn,
                              children: [
                                (0, s.we)("#EventEmail_Developer_AddPublisher"),
                                (0, e.jsx)("label", {
                                  className: Ki.SelectImageButton,
                                  htmlFor: "internal_loadpubid",
                                  children: (0, s.we)(
                                    "#EventEmail_Developer_SelectFile",
                                  ),
                                }),
                                (0, e.jsx)("input", {
                                  ref: this.m_appFileInput,
                                  id: "internal_loadpubid",
                                  style: { display: "none" },
                                  type: "file",
                                  onSubmit: (i) =>
                                    this.OnFileChoice("publisher", i),
                                  onChange: (i) =>
                                    this.OnFileChoice("publisher", i),
                                  multiple: !1,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        wa([J.oI], da.prototype, "OnFileChoice", 1),
          wa([J.oI], da.prototype, "ShowTargets", 1),
          wa([J.oI], da.prototype, "ClearTargets", 1),
          (da = wa([w.PA], da));
        const nu =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAgCAYAAAAPHGYtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABo1JREFUeNrsWg1MVlUY/iDTElOcI9ZgZBorV8ywVFYGc05mZQbmMgoNk37NQq3IJZWoLf+l9eMqSQ1lpm4aWgStpauZYbl+wK3EssjKflYmtAyi59Hnbme3e7/v3o9PVtt9t2fnfPe+55x7z3Pe97znvV9cZ2dnKJD/pvTwqji5oLAPiuuAscBwYBDQR7dbgWZgP1APbN9UXXU8mN6uSVwkywEpyShKgTsMMiJJG1AJLAZJLcE0x5gckBKH4i5gCXBOlP3TesqACpAU+M9YkANieqN4GbgpRuPsYLcgqC2Y8i6QI2I4maNjPNYHwJhgL4qSHLmyzcCNUfTVAewGPtHvoUA2EG/o1DKoAEF/B1PvP1q7P0pidjFgwKR/YbPCdBQviSTKOOAR4Mlg6n1YDiYyBQUn92yffbwJXC/L4R6Va1ynFZ4B7FQITvkTyLATGci/xXQ5ZVEQw/NNkeo1wBxgr8D6awDZv026lF7AY8HUe7QcWE1/1I8AZ/lsvxYWMA3t6Q4n0jrw+y9ZIl1mHbAN157G73WoTzX2p1Rc/97D4XegiL4SSAR+VHCxBu0/ls5CFJdG6KoG+muk/wKKc130jkLvTofn4KKqAs4EGqCzyOV556IYCRyEzoMuOv0UDcfrPWpwrQD1nnw//H7dtJyJURBjRWBW+6UWMRTU23kNyNOlvUY7urrJHoi5GAUJuA8YpqwEX3wm8D7uD5DqKOCGCMgwus4No5fr8jh03ZOkU4axE130RkpnDnQud9HhgT5feoOhd772/1vNM6UVEIyNgpgTis5Ccoe/O+jwWm/V2233OGZFhDEYPPRV25kiipZUCHyGBfCz9J6hhapOEm5XfQHwi+r7Hfpnqmmjw8HZSYqMei9N5LMRnr/UflYEEbS8B2x6fI8kvcdgOznDoyDncUxOo+rvArcYZFlSaFy7yHbvCg9jDFTZjLFWq74HqMZLxhtWusV4+TyDnErc+ypM/024v9aDBZ+nSNN6V1rqdA/kTELbCzHGQeMayUo1lXj2g95WVGlp6+3kJPsk5j25LEsWA/swwAqU1iTSb19D4uWv7dmGZFxPwIO1hhnncyCHxEJ3h1ZWPdp0xOis1Fd7miktcsmmTJErJtGz5c4z0XYYdD8Kt6cDDykNZonjPoR+DqM47BSt8QEfBg55zJdN5QQZHR9FkSUX9JZAn5yle/Ptq0WSGGGsJ0Knst0UZsTfYOCCSVkQxuf7kWnAlzakhnFpm/A+DTpyhAwLdZK3Ae7BRbI8WuAYFJcBJPQ3T6E0BvwJoCWka7UzBHZbmSXQPeTA/BGgGEgTihl54IHmy/f6FvapTMMs4FNdZpQ1D/jQCAhOm2CMESiGWI+kstpy27jvFkh9A2xQBFaia7NVPuU7QyBXwRRLLQZNk2sqFlF8oANWOBrmZZK0h2XqfJMeRv1XDwTR7a0i0Pcl2uTzFbkxNF/ZhblntrzEg3VZZ7ocPEOOYfH9lFHZ4NJ2qebgbrTjgr9WVsf95UU/h1D7pHwNcIWmaSJITgYGmcG9woWY8SgalRFYGIGYHyLsN+wvQecl65kabZFO0mm2GlpFgX4maCGsVJrLkulh5rBJh3O6++26vMTrftnDw8o9oSo3/DbtTVwJV+HeMb0EQ+nlwD0+3n2fBx1OwgytuiaFsAXG/YYuzj83dbvlHMN7VaqeJ+s4OanAH4beUN0fjT4GObl6w4VNAAbooL/eV+JT4SeTk8+Hy3lpJXCD2yg/Wo56psx6iM+JqfegczOQ4kJ6nbEao5VsIylrCSOmSlsgwDNVqc2qUnWIjFNgMM9lzvZAd7fGWWEsds+Ws0tuaxY6YqT1nNId7S7tuC/lQzdLbXv6nJQOY3MNJ+N0VuK3pQsUznKFblHqyMk9fGeQ5vZxry5c+sbwBq3qa6vDpLdAp0LP1d+4ZWVCzBCbi2uEntuSnXKVzV6y0qtt8fi3iu/fsX9ihu5y5ZgOiEi/UoU+pwSpTe97ziKRYaVbUpQ+4QphFvkVnQPGKwLhSlgXxZj8ZFAeTH1kMVMgjMsftd3PVfi3TMm6zSLlauWWRkUxZnnwLce/5YSUiMzWOcKSVUoq8nzTIh+7TKT5lVqvB7BAgj94/D/cmuHe2rSvvBrDcU6SHRDTRXIMgnjGuDfk/J3GqxxXXmxC8J+1GLg1hxQGPyfM1UHL6z8/g7/jdgc5Zp4rdOpTrflHdivHZv6RnYfYbYEL60ZyAul++UeAAQDyv2dSS4HffQAAAABJRU5ErkJggg==",
          Zi = (a) => {
            const [t, n] = (0, g.useState)(a ? void 0 : !1);
            return (
              (0, g.useEffect)(() => {
                const o = K().CancelToken.source();
                return (
                  a &&
                    (async () => {
                      const l = await ca
                        .Get()
                        .HintLoadIsAppReleaseInSteamChina(a, o);
                      o.token.reason || n(l);
                    })(),
                  () => o.cancel("useSteamChinaAppIsVisible: unmounting")
                );
              }, [a]),
              !!t
            );
          };
        class ca {
          m_mapAppToSCVisibility = new Map();
          BIsAppReleasedInSteamChina(t) {
            return !!this.m_mapAppToSCVisibility.get(t);
          }
          async HintLoadIsAppReleaseInSteamChina(t, n) {
            if (this.m_mapAppToSCVisibility.has(t))
              return this.m_mapAppToSCVisibility.get(t);
            const o = f.TS.COMMUNITY_BASE_URL + `ogg/${t}/ajaxisvisibleinsc`;
            try {
              const i = await K().get(o, {
                withCredentials: !0,
                cancelToken: n.token,
              });
              if (i?.data?.success == Fe.R && !n.token.reason)
                return (
                  this.m_mapAppToSCVisibility.set(t, !!i.data.visible),
                  !!i.data.visible
                );
            } catch (i) {
              const l = (0, ye.H)(i);
              console.error(
                "HintLoadIsAppReleaseInSteamChina: " + l.strErrorMsg,
                l,
              );
            }
            return !1;
          }
          static s_Singleton;
          static Get() {
            return (
              ca.s_Singleton || (ca.s_Singleton = new ca()), ca.s_Singleton
            );
          }
        }
        function su(a) {
          const { editModel: t } = a,
            n = (0, ka.E)(),
            i = new We.pC(t).GetSectionObj(0),
            [l, r] = (0, L.q3)(() => [i.GetHeadline(n), i.GetBody(n)]);
          return (0, e.jsx)("div", {
            className: O.EmailEditorContent,
            children: (0, e.jsx)("div", {
              className: O.EmailTemplate,
              children: (0, e.jsxs)("div", {
                className: (0, j.A)(O.DevEmailEmailBackground, O.EmailSection),
                children: [
                  (0, e.jsx)("p", {
                    children:
                      "This description and location information is automatically injected into the registration and reminder emails",
                  }),
                  (0, e.jsx)(_.JU, {
                    children: "Short Description For Email Rendering",
                  }),
                  (0, e.jsx)("textarea", {
                    className: O.BodyInput,
                    placeholder: "Come join us...",
                    value: l,
                    rows: 8,
                    onChange: (c) =>
                      i.SetHeadline(c.currentTarget.value || "", n),
                  }),
                  (0, e.jsx)(_.JU, {
                    children: "Event Location (address / building)",
                  }),
                  (0, e.jsx)("textarea", {
                    className: O.BodyInput,
                    placeholder: "10040 NE 4th Ave..",
                    value: r,
                    rows: 8,
                    onChange: (c) => i.SetBody(c.currentTarget.value || "", n),
                  }),
                ],
              }),
            }),
          });
        }
        var qi = h(25515),
          iu = h(31501),
          ou = Object.defineProperty,
          lu = Object.getOwnPropertyDescriptor,
          Ke = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? lu(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && ou(t, n, i), i;
          };
        function Xi(a, t) {
          return a.BHasEmailEnabled() ||
            a.clanSteamID.GetAccountID() == (0, ea.H)()
            ? !0
            : (f.UF.IS_OGG || f.UF.IS_VALVE_GROUP) && !!t?.valve_admin;
        }
        const ru = (0, w.PA)((a) => {
            const { editModel: t } = a,
              { bHasValidatedEmail: n } = (0, zc.n)(),
              { data: o } = (0, Nt.hM)(t.GetClanAccountID());
            if (!Xi(t.GetEventModel(), o)) return null;
            const l = (0, ea.H)() !== t.GetClanAccountID();
            return (0, e.jsxs)(g.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: O.EmailTabCtn,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, j.A)(x().EventEditorTextTitleCtn),
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, j.A)(
                            x().EventEditorTextTitle,
                            x().FlexGrow,
                          ),
                          children: (0, s.we)("#EventEmail_FeatureTitle"),
                        }),
                        (0, e.jsx)("a", {
                          href: "#",
                          className: (0, j.A)(x().doclink),
                          children: (0, e.jsx)("span", {
                            children: (0, s.we)(
                              "#selectimage_see_documentation",
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, j.A)(x().FlexColumnContainer),
                      children: (0, e.jsx)(_.RF, {
                        label: (0, s.we)("#EventEmail_EnableEmailOption"),
                        onChange: (r) => {
                          const { editModel: c } = a,
                            d = c.GetClanSteamID().GetAccountID();
                          (c.CreateOrGetEmailSettings(d).bEnable = r),
                            c.SetDirty(b.IQ.jsondata_email);
                        },
                        checked: t.BIsEmailEnabled(),
                      }),
                    }),
                  ],
                }),
                !!t.BIsEmailEnabled() &&
                  (0, e.jsxs)("div", {
                    className: ce.EventEditorInputPaneContainer,
                    children: [
                      l &&
                        (0, e.jsx)(ve.tH, {
                          children: (0, e.jsx)(ya, { editModel: t }),
                        }),
                      l &&
                        (0, e.jsx)(ve.tH, {
                          children: (0, e.jsx)(At, {
                            editModel: t,
                            bHasValidatedEmail: n,
                            permissions: o,
                          }),
                        }),
                      (0, e.jsx)(ve.tH, {
                        children:
                          (0, ea.H)() === t.GetClanAccountID()
                            ? (0, e.jsx)(su, { editModel: t })
                            : (0, e.jsx)(e.Fragment, {
                                children: f.UF.IS_VALVE_GROUP
                                  ? (0, e.jsx)(Gn, { editModel: t })
                                  : (0, e.jsx)(cu, { editModel: t }),
                              }),
                      }),
                      (0, e.jsx)(du, { editModel: t }),
                      l &&
                        (0, e.jsx)(ve.tH, {
                          children: f.UF.IS_VALVE_GROUP
                            ? (0, e.jsx)(da, { editModel: t })
                            : (0, e.jsxs)(g.Fragment, {
                                children: [
                                  (0, e.jsx)(Ln, {
                                    editModel: t,
                                    permissions: o,
                                  }),
                                  (0, e.jsx)(Za, {
                                    editModel: t,
                                    permissions: o,
                                  }),
                                ],
                              }),
                        }),
                    ],
                  }),
              ],
            });
          }),
          du = (a) =>
            Zi(a.editModel.GetAppID())
              ? (0, e.jsx)("div", {
                  className: Pt.WarningStylesBackground,
                  children: (0, s.we)("#EventEmail_SteamChina_Warning"),
                })
              : null;
        let At = class extends g.Component {
          state = { bSettingUp: !1 };
          m_cancelSignal = K().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventEmailControlBar cancelled");
          }
          FireTestEmail() {
            const { editModel: a } = this.props;
            G.mh
              .FireTestEmail(
                a.GetClanSteamID(),
                a.GetGID(),
                a.GetCurEditLanguage(),
                this.m_cancelSignal,
              )
              .then((t) => {
                (0, y.pg)(
                  (0, e.jsx)(B.o0, {
                    strTitle: (0, s.we)("#EventDisplay_Share_Success"),
                    onOK: () => {},
                    onCancel: () => {},
                    bAlertDialog: !0,
                    children: (0, s.we)("#EventEmail_TestEmailQueue"),
                  }),
                  window,
                );
              })
              .catch((t) => {
                (0, y.pg)(
                  (0, e.jsx)(B.KG, { children: (0, ye.H)(t).strErrorMsg }),
                  window,
                );
              });
          }
          OnTestEmail(a) {
            const { editModel: t } = this.props;
            a.preventDefault(),
              this.props.bHasValidatedEmail &&
              !t.BIsDirtyType(b.IQ.jsondata_email)
                ? (0, y.HT)(
                    (0, e.jsx)(B.o0, {
                      strTitle: (0, s.we)("#EventEmail_Test_Email"),
                      onOK: this.FireTestEmail,
                      onCancel: () => {},
                      children: (0, s.PP)(
                        "#EventEmail_Send_TestEmail_Desc",
                        (0, e.jsx)("a", {
                          target: f.TS.IN_CLIENT ? void 0 : "blank",
                          href: f.TS.STORE_BASE_URL + "account/",
                          children: f.TS.STORE_BASE_URL + "account/",
                        }),
                      ),
                    }),
                    (0, ue.uX)(a),
                  )
                : t.BIsDirtyType(b.IQ.jsondata_email)
                  ? (0, y.pg)(
                      (0, e.jsx)(B.KG, {
                        children: (0, s.we)("#EventEmail_Test_Dirty"),
                      }),
                      window,
                    )
                  : (0, y.pg)(
                      (0, e.jsx)(B.KG, {
                        children: (0, s.PP)(
                          "#EventEmail_Test_Email_Fail",
                          (0, e.jsx)("a", {
                            target: f.TS.IN_CLIENT ? void 0 : "blank",
                            href: f.TS.STORE_BASE_URL + "account/",
                            children: f.TS.STORE_BASE_URL + "account/",
                          }),
                        ),
                      }),
                      window,
                    );
          }
          OnPrepareEmail(a) {
            (0, y.pg)(
              (0, e.jsx)(qa, { editModel: this.props.editModel }),
              (0, ue.uX)(a),
            );
          }
          OnSetupAndFireEmailConfirm(a) {
            (0, y.HT)(
              (0, e.jsx)(B.o0, {
                strTitle: "(VO) Setup and Send Email",
                onOK: () =>
                  this.setState({ bSettingUp: !0 }, this.OnSetupAndFireEmail),
                onCancel: () => {},
                children: (0, e.jsx)("div", {
                  children:
                    "(VO) Be thoughtful. Talk to Alden or Adil if not sure. By pressing this, we will setup a database entry to fire this email in its current form and target. Double check the audience make sense and the localization looks good. This will also begin firing immediately.",
                }),
              }),
              (0, ue.uX)(a),
            );
          }
          async OnSetupAndFireEmail() {
            const { editModel: a } = this.props;
            try {
              let t = f.UF.IS_VALVE_GROUP
                ? await G.mh.SetupInternalPartnerCommunication(
                    this.m_cancelSignal,
                    a.GetClanSteamID(),
                    a.GetGID(),
                    a.GetEmailSettings().internal_targeting,
                  )
                : await G.mh.SetupPartnerEmailCampaign(
                    a.GetClanSteamID(),
                    a.GetGID(),
                    this.m_cancelSignal,
                  );
              (0, y.pg)(
                (0, e.jsxs)(B.o0, {
                  strTitle: (0, s.we)("#EventDisplay_Share_Success"),
                  onOK: () => {},
                  onCancel: () => {},
                  bAlertDialog: !0,
                  children: [
                    (0, e.jsx)("div", {
                      children:
                        "Succesfully created the email on the server and saved it to the event. We are done!",
                    }),
                    !!t.warning &&
                      "However we hit the following warning: " + t.warning_msg,
                  ],
                }),
                window,
              );
            } catch (t) {
              let n = (0, ye.H)(t);
              console.error("OnSetupAndFireEmail failed: " + n.strErrorMsg),
                (0, y.pg)(
                  (0, e.jsx)(B.o0, {
                    strTitle: (0, s.we)("#Error_Message"),
                    onOK: () => {},
                    onCancel: () => {},
                    bAlertDialog: !0,
                    children: (0, e.jsxs)("div", {
                      children: [
                        "We hit the follwoing error: Error Code (",
                        n.errorCode,
                        ")",
                        (0, e.jsx)("br", {}),
                        "Error Message: ",
                        n.strErrorMsg,
                      ],
                    }),
                  }),
                  window,
                );
            } finally {
              this.setState({ bSettingUp: !1 });
            }
          }
          render() {
            const { editModel: a } = this.props,
              t = !!a.GetEmailSettings().locked,
              { permissions: n } = this.props;
            return (0, e.jsxs)("div", {
              className: O.ControlBarCtn,
              children: [
                (0, e.jsxs)("a", {
                  onClick: this.OnTestEmail,
                  className: x().EditPreviewButton,
                  children: [
                    this.state.bSettingUp && (0, e.jsx)(N.t, { size: "small" }),
                    (0, s.we)("#EventEmail_Control_TestEmail"),
                  ],
                }),
                t &&
                  n?.valve_admin &&
                  (0, e.jsx)("a", {
                    onClick: this.OnSetupAndFireEmailConfirm,
                    className: x().EditPreviewButton,
                    children: "(VO) Setup and Fire Email",
                  }),
                t &&
                  !n?.valve_admin &&
                  (0, e.jsx)("div", {
                    children: (0, s.we)(
                      "#EventEmail_Ready_ValveRequiredToSend",
                    ),
                  }),
                !t &&
                  (0, e.jsx)("a", {
                    onClick: this.OnPrepareEmail,
                    className: x().EditPreviewButton,
                    children: (0, s.we)("#EventEmail_Control_Prepare"),
                  }),
              ],
            });
          }
        };
        Ke([J.oI], At.prototype, "FireTestEmail", 1),
          Ke([J.oI], At.prototype, "OnTestEmail", 1),
          Ke([J.oI], At.prototype, "OnPrepareEmail", 1),
          Ke([J.oI], At.prototype, "OnSetupAndFireEmailConfirm", 1),
          Ke([J.oI], At.prototype, "OnSetupAndFireEmail", 1),
          (At = Ke([w.PA], At));
        const cu = (0, w.PA)((a) => {
          const { editModel: t } = a,
            n = (M) => {
              let z = Array(),
                k = qe.A.Get().GetApp(M)?.GetName();
              return (
                ot.j3.forEach((le) =>
                  z.push(
                    (0, e.jsx)(
                      "option",
                      { value: le, children: (0, s.we)("#" + le, k) },
                      le,
                    ),
                  ),
                ),
                z
              );
            },
            o = (M) => {
              a.editModel.SetCurEditLanguage(M);
            },
            i = (M) => {
              ot.j3.forEach((z) => {
                z === M.target.value && new We.pC(t).SetSubjectTextLoc(z);
              });
            };
          let l = new We.pC(t),
            r = n(t.GetAppID()),
            c = t.GetCurEditLanguage();
          const d = t.GetAppID(),
            [u] = (0, ge.t7)(d, { include_basic_info: !0 });
          if (!u)
            return (0, e.jsx)(N.t, {
              string: (0, s.we)("#Loading"),
              position: "center",
              size: "small",
            });
          let p = l.GetSectionObj(0),
            m = l.GetSectionObj(1),
            S = "#EventEmail_Reason_Played",
            v = !1,
            E = "#EventEmail_Footer_Reason_Played",
            D = u?.GetStorePageURL(),
            C = u?.GetName();
          if (!l.BIsTargetingGamePlayers()) {
            if (l.BIsTargetingGameFollowers())
              (S = "#EventEmail_Reason_Follow"),
                (v = !0),
                (E = "#EventEmail_Footer_Reason_Followed");
            else if (l.BIsTargetingGameWishlisters())
              (S = "#EventEmail_Reason_Wishlist"),
                (v = !0),
                (E = "#EventEmail_Footer_Reason_Wishlisted");
            else if (l.BIsTargetingSomeCreator()) {
              (S = "#EventEmail_Reason_Follow"),
                (v = !0),
                (E = "#EventEmail_Footer_Reason_Followed");
              let M = l.GetSomeCreatorTarget(),
                z = u.GetAllCreatorClanIDs().find((k) => k == M);
              if (z) {
                const k = X.b.InitFromClanID(z);
                let le = Qe.pF.GetCreatorHome(k);
                if (le) {
                  let me = "developer";
                  u.GetAllDeveloperCreatorClans().includes(z) ||
                    (u.GetAllPublisherCreatorClans().includes(z)
                      ? (me = "publisher")
                      : (me = "franchise")),
                    (D = le.GetCreatorHomeURL(me)),
                    (C = le.GetName());
                }
              }
            }
          }
          return (0, e.jsxs)("div", {
            className: O.EmailEditorContent,
            children: [
              (0, e.jsxs)("div", {
                className: (0, j.A)(x().FlexRowContainer, O.EmailSubjectCtn),
                children: [
                  (0, e.jsx)("span", {
                    className: O.EmailOptionTitle,
                    children: (0, s.we)("#EventEmail_Subject"),
                  }),
                  (0, e.jsx)("select", {
                    className: O.EmailSubjectSelect,
                    value: l.GetSubjectTextLoc(),
                    onChange: i,
                    children: r,
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: O.RightAlign,
                children: [
                  (0, e.jsxs)("span", {
                    className: O.EmailOptionTitle,
                    children: [(0, s.we)("#LanguageTitle"), ": "],
                  }),
                  (0, e.jsx)(An.Ng, {
                    selectedLang: c,
                    fnLangHasData: l.BHasSomeLanguage,
                    fnOnLanguageChanged: o,
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: O.EmailTemplate,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, j.A)(O.EmailIconHeader, O.CenterAlign),
                    children: (0, e.jsx)("img", { src: nu }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(
                      O.EmailBackground,
                      O.EmailReasonHeader,
                      O.EmailTextCtn,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: O.Hello,
                        children: (0, s.we)(
                          "#EventEmail_Hello",
                          (0, s.we)("#EventEmail_UserName"),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: O.Reason,
                        children: (0, s.we)(S, C),
                      }),
                      !v &&
                        (0, e.jsx)("a", {
                          className: O.GameLink,
                          href: D,
                          children: C,
                        }),
                    ],
                  }),
                  (0, e.jsx)(Et, {
                    lang: c,
                    clanSteamID: t.GetClanSteamID(),
                    bEditor: t.BIsEmailEditable(),
                    appid: t.GetAppID(),
                    section: p,
                    additionalClassName: O.HeaderSection,
                  }),
                  (0, e.jsx)(Et, {
                    lang: c,
                    clanSteamID: t.GetClanSteamID(),
                    bEditor: t.BIsEmailEditable(),
                    appid: t.GetAppID(),
                    section: m,
                    additionalClassName: O.HeaderSection,
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsxs)("div", {
                    className: O.Footer,
                    children: [
                      (0, e.jsx)("div", { children: (0, s.we)(E) }),
                      (0, e.jsx)("span", {
                        children: (0, s.we)("#EventEmail_Footer_Game", C),
                      }),
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Footer_OptOut_Desc_Game",
                        ),
                      }),
                      (0, e.jsxs)("span", {
                        children: [
                          (0, e.jsx)("a", {
                            href: "#",
                            children: (0, s.we)(
                              "#EventEmail_Footer_OptOut_Target",
                              C,
                            ),
                          }),
                          " " + (0, s.we)("#EventEmail_Footer_OptOut_Or") + " ",
                          (0, e.jsx)("a", {
                            href: "#",
                            children: (0, s.we)(
                              "#EventEmail_Footer_Optout_All",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(O.FooterLegal, x().FlexRowContainer),
                    children: [
                      (0, e.jsx)("img", { src: Ji }),
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Footer_LegalWithAddress_Line1",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Footer_LegalWithAddress_Line2",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
        let Za = class extends g.Component {
          state = {};
          GetEmailEditModel() {
            return new We.pC(this.props.editModel);
          }
          async componentDidMount() {
            let a = await Q.ac.LoadClanInfoForClanSteamID(
              this.props.editModel.GetClanSteamID(),
            );
            this.setState({ clanInfo: a });
          }
          OnControlGroupSpinnerChange(a) {
            let t = Number.parseInt(a.target.value);
            this.GetEmailEditModel().SetControlGroupPercent(t);
          }
          render() {
            const { editModel: a, permissions: t } = this.props;
            if (!t?.support_user) return null;
            if (!this.state.clanInfo)
              return (0, e.jsx)(N.t, {
                string: (0, s.we)("#Loading"),
                size: "medium",
              });
            const n = this.GetEmailEditModel();
            return (0, e.jsxs)("div", {
              className: (0, j.A)(x().ValveOnlyBackground, O.RecipientCtn),
              children: [
                (0, e.jsx)("div", {
                  className: (0, j.A)(x().EventEditorTextTitle),
                  children: (0, e.jsx)("span", {
                    className: x().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Filter"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    x().FlexColumnContainer,
                    x().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEmail_Filter_Desc"),
                    }),
                    !!this.state.clanInfo.is_ogg &&
                      (0, e.jsx)(_.RF, {
                        onChange: (o) =>
                          this.GetEmailEditModel().SetFilterIRTopN(o),
                        label: (0, s.we)("#EventEmail_Filter_IR"),
                        checked: n.BIsIRTopNFiltering(),
                      }),
                    !!this.state.clanInfo.is_ogg &&
                      (0, e.jsx)(_.RF, {
                        onChange: (o) =>
                          this.GetEmailEditModel().SetFilterWishlist(o),
                        label: (0, s.we)("#EventEmail_Filter_Wishlist"),
                        checked: n.BIsWishListFiltering(),
                      }),
                    (0, e.jsx)(_.pd, {
                      type: "number",
                      min: "0",
                      max: "99",
                      label: (0, s.we)("#EventEmail_Filter_ControlGroup"),
                      value: n.GetControlGroupPercent(),
                      onChange: this.OnControlGroupSpinnerChange,
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Ke([J.oI], Za.prototype, "OnControlGroupSpinnerChange", 1),
          (Za = Ke([w.PA], Za));
        let Ln = class extends g.Component {
          state = { bLoadingCreator: !0 };
          m_cancelSignal = K().CancelToken.source();
          async LoadCreatorHome() {
            this.state.bLoadingCreator ||
              this.setState({ bLoadingCreator: !0 });
            const { editModel: a } = this.props;
            qe.A.Get().QueueAppRequest(a.GetAppID(), {
              include_basic_info: !0,
            });
            let t = new Array();
            (
              await Qe.pF.LoadCreatorHomeListForAppIncludeHiddden(
                a.GetAppID(),
                this.m_cancelSignal,
              )
            ).forEach((o) => {
              let i = X.b.InitFromClanID(o.clan_account_id);
              t.push(Qe.pF.LoadCreatorHome(i, !1, this.m_cancelSignal));
            }),
              Promise.all(t).then((o) => {
                this.m_cancelSignal.token.reason ||
                  this.setState({ bLoadingCreator: !1 });
              });
          }
          componentDidMount() {
            this.LoadCreatorHome();
          }
          componentDidUpdate(a) {
            a.editModel.GetAppID() != this.props.editModel.GetAppID() &&
              this.LoadCreatorHome();
          }
          GetEmailEditModel() {
            return new We.pC(this.props.editModel);
          }
          BuildCreatorHomeToggle(a) {
            let t = new Array(),
              n = new Array();
            if (this.state.bLoadingCreator)
              t.push((0, e.jsx)(N.t, {}, "EmailRecipientControls_creator"));
            else {
              const { editModel: o } = this.props;
              let i = new We.pC(o);
              Qe.pF
                .GetCreatorHomeListForAppIncludeHidden(o.GetAppID())
                .forEach((l) => {
                  let r = Qe.pF.GetCreatorHomeByID(l);
                  if (
                    r &&
                    !n.some((c) => c.clan_account_id === r.GetClanAccountID())
                  ) {
                    let c = (0, e.jsxs)("a", {
                        target: f.TS.IN_CLIENT ? void 0 : "_blank",
                        href: r.GetCreatorHomeURL(l.type),
                        children: [
                          r.BIsHidden()
                            ? (0, s.we)("#EventEmail_CreatorHidden") + " "
                            : "",
                          r.GetName(),
                        ],
                      }),
                      d = (0, e.jsx)(Da, {
                        audience: r.GetNumFollowers(),
                        label: (0, s.PP)(
                          "#EventEmail_Recipients_follower_creator",
                          c,
                        ),
                      });
                    t.push(
                      (0, e.jsx)(
                        _.RF,
                        {
                          onChange: (u) =>
                            this.GetEmailEditModel().SetTargetingCreator(
                              u,
                              l.clan_account_id,
                            ),
                          label: d,
                          checked: i.BIsTargetingCreator(r.GetClanAccountID()),
                        },
                        "RecipientToggle_" + l.clan_account_id,
                      ),
                    ),
                      a?.support_user &&
                        ((d = (0, e.jsx)(Da, {
                          valveOnly: !0,
                          label: (0, s.PP)(
                            "#EventEmail_Recipients_player_creator",
                            c,
                          ),
                        })),
                        t.push(
                          (0, e.jsx)(
                            "span",
                            {
                              className: (0, j.A)(x().ValveOnlyBackground),
                              children: (0, e.jsx)(_.RF, {
                                onChange: (u) =>
                                  this.GetEmailEditModel().SetTargetingCreatorPlayer(
                                    u,
                                    l.clan_account_id,
                                  ),
                                label: d,
                                checked: i.BIsTargetingCreatorPlayer(
                                  r.GetClanAccountID(),
                                ),
                              }),
                            },
                            "RecipientToggle_player_" + l.clan_account_id,
                          ),
                        ),
                        n.push(l));
                  }
                }),
                t.length == 0 &&
                  t.push(
                    (0, e.jsx)(
                      "div",
                      {
                        children: (0, s.PP)(
                          "#EventEmail_Recipients_NoCreatorHome",
                          (0, e.jsx)("a", {
                            href: "https://partner.steamgames.com/doc/store/creator_homepage",
                            children:
                              "https://partner.steamgames.com/doc/store/creator_homepage",
                          }),
                        ),
                      },
                      "creatorhome_plug",
                    ),
                  );
            }
            return t;
          }
          render() {
            const { editModel: a } = this.props;
            let t = new We.pC(a);
            const { permissions: n } = this.props;
            return (0, e.jsxs)("div", {
              className: O.RecipientCtn,
              children: [
                (0, e.jsx)("div", {
                  className: (0, j.A)(x().EventEditorTextTitle),
                  children: (0, e.jsx)("span", {
                    className: x().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Recipients"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    x().FlexColumnContainer,
                    x().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEmail_Recipients_desc"),
                    }),
                    (0, e.jsx)(_.RF, {
                      onChange: (o) =>
                        this.GetEmailEditModel().SetTargetingExistingPlayer(o),
                      label: (0, s.we)("#EventEmail_Recipients_players"),
                      checked: t.BIsTargetingGamePlayers(),
                    }),
                    (0, e.jsx)(_.RF, {
                      onChange: (o) =>
                        this.GetEmailEditModel().SetTargetingGameWishlist(o),
                      label: (0, s.we)("#EventEmail_Recipients_wishlist"),
                      checked: t.BIsTargetingGameWishlisters(),
                    }),
                    (0, e.jsx)(_.RF, {
                      onChange: (o) =>
                        this.GetEmailEditModel().SetTargetingGameFollower(o),
                      label: (0, e.jsx)(Da, {
                        label: (0, s.we)("#EventEmail_Recipients_follower"),
                        audience: Q.ac.GetClanMemberCount(a.GetAppID()),
                      }),
                      checked: t.BIsTargetingGameFollowers(),
                    }),
                    (0, e.jsx)(_.RF, {
                      onChange: (o) =>
                        this.GetEmailEditModel().SetExcludeGameOwners(o),
                      label: (0, e.jsx)(Da, {
                        label: (0, s.we)(
                          "#EventEmail_Recipients_exclude_owners",
                        ),
                      }),
                      checked: t.BIsExcludingGameOwners(),
                    }),
                    (0, e.jsx)(_.RF, {
                      onChange: (o) =>
                        this.GetEmailEditModel().SetOwnersWithNoPlaytime(o),
                      label: (0, e.jsx)(Da, {
                        label: (0, s.we)("#EventEmail_Recipients_no_playtime"),
                      }),
                      checked: t.BIsTargetingGameOwnersWithoutPlaytime(),
                    }),
                    this.BuildCreatorHomeToggle(n),
                  ],
                }),
              ],
            });
          }
        };
        Ln = Ke([w.PA], Ln);
        class Da extends g.Component {
          render() {
            const { valveOnly: t, label: n } = this.props;
            return (0, e.jsxs)("div", {
              className: O.TargetAndAudience,
              children: [
                (0, e.jsxs)("span", {
                  children: [t && (0, e.jsx)("span", { children: "(VO) " }), n],
                }),
                (0, e.jsx)("span", {
                  children:
                    this.props.audience !== void 0 &&
                    (0, lt.D)(this.props.audience),
                }),
              ],
            });
          }
        }
        let qa = class extends g.Component {
          state = {
            state: this.props.editModel.BIsDirty() ? "unsaved" : "loading",
          };
          componentDidMount() {
            const { editModel: a } = this.props;
            if (this.state.state == "loading") {
              let t = (0, qi.Lk)(a),
                n = (0, qi.Z6)(a);
              this.setState({
                error: t,
                warning: n,
                state:
                  t.length > 0
                    ? "error"
                    : n.length > 0
                      ? "readywithwarning"
                      : "ready",
              });
            }
          }
          OnLockEmail() {
            const { editModel: a } = this.props;
            new We.pC(a).LockEmail(),
              this.setState({ state: "saving" }, () => {
                G.mh.SaveModel(a.GetClanSteamID()).then((n) => {
                  this.setState({ state: "done" });
                });
              });
          }
          render() {
            switch (this.state.state) {
              case "loading":
                return (0, e.jsx)(B.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                  closeModal: this.props.closeModal,
                  children: (0, e.jsx)(N.t, {}),
                });
              case "ready":
                return (0, e.jsx)(B.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Desc"),
                  onOK: this.OnLockEmail,
                  onCancel: this.props.closeModal,
                });
              case "readywithwarning":
                return (0, e.jsx)(B.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Desc"),
                  onOK: this.OnLockEmail,
                  onCancel: this.props.closeModal,
                  closeModal: this.props.closeModal,
                  children: (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, s.we)(
                          "#EventEmail_Preparation_DescWarning",
                        ),
                      }),
                      (0, e.jsx)("ol", { children: this.state.warning }),
                    ],
                  }),
                });
              case "unsaved":
                return (0, e.jsx)(B.KG, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Unsaved"),
                  closeModal: this.props.closeModal,
                });
              case "saving":
                return (0, e.jsx)(B.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)(
                    "#EventEmail_Preparation_InProcess",
                  ),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                  children: (0, e.jsx)(N.t, {}),
                });
              case "done":
                return (0, e.jsx)(B.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Done"),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                });
              default:
                return (0, e.jsx)(B.KG, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Error"),
                  closeModal: this.props.closeModal,
                  children: (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("ol", { children: this.state.error }),
                      this.state.warning.length > 0 &&
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("p", {
                              children: (0, s.we)(
                                "#EventEmail_Preparation_DescWarning",
                              ),
                            }),
                            (0, e.jsx)("ol", { children: this.state.warning }),
                          ],
                        }),
                    ],
                  }),
                });
            }
          }
        };
        Ke([J.oI], qa.prototype, "OnLockEmail", 1), (qa = Ke([w.PA], qa));
        const $i = 300;
        let ya = class extends g.Component {
          state = { rtimeLastRefresh: 0, bRefreshing: !1 };
          autoRefreshInterval;
          RefreshIfNeeded() {
            let a = Math.floor(Date.now() / 1e3);
            const { editModel: t } = this.props;
            !this.state.err_msg &&
              t.GetEventModel().jsondata.email_setting.force_feature_id &&
              this.state.rtimeLastRefresh + $i < a &&
              !this.state.bRefreshing &&
              this.setState({ bRefreshing: !0 }, this.RefreshStats);
          }
          async RefreshStats() {
            const { editModel: a } = this.props;
            let t =
                f.TS.COMMUNITY_BASE_URL + "eventemail/ajaxgetpartneremailstats",
              n = {
                clanid: a.GetClanSteamID().GetAccountID(),
                gidevent: a.GetGID(),
                sessionid: (0, f.KC)(),
              };
            try {
              let o = await K().get(t, { params: n, withCredentials: !0 });
              this.setState({ stats: o.data.result, bRefreshing: !1 });
            } catch (o) {
              this.setState({
                bRefreshing: !1,
                err_msg: (0, ye.H)(o).strErrorMsg,
              });
            }
          }
          componentDidMount() {
            this.RefreshIfNeeded(),
              (this.autoRefreshInterval = window.setInterval(
                this.RefreshIfNeeded,
                $i * 1e3,
              ));
          }
          componentDidUpdate(a) {
            this.props.editModel.GetGID() != a.editModel.GetGID() &&
              this.setState({ rtimeLastRefresh: 0 }, this.RefreshIfNeeded);
          }
          componentWillUnmount() {
            this.autoRefreshInterval &&
              (window.clearInterval(this.autoRefreshInterval),
              (this.autoRefreshInterval = void 0));
          }
          render() {
            const { editModel: a } = this.props;
            if (!a.GetEventModel().jsondata.email_setting.force_feature_id)
              return (0, e.jsx)("div", {});
            if (this.state.err_msg)
              return (0, e.jsxs)("div", {
                className: ce.EventEditorInputPaneContents,
                children: [
                  (0, e.jsx)("div", {
                    className: x().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Stats_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, j.A)(
                      x().FlexColumnContainer,
                      x().EventDefaultRowContainer,
                    ),
                    children: (0, e.jsx)("span", {
                      className: iu.ErrorMessaage,
                      children: this.state.err_msg,
                    }),
                  }),
                ],
              });
            if (!this.state.stats)
              return (0, e.jsxs)("div", {
                className: ce.EventEditorInputPaneContents,
                children: [
                  (0, e.jsx)("div", {
                    className: x().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Stats_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, j.A)(
                      x().FlexColumnContainer,
                      x().EventDefaultRowContainer,
                    ),
                    children: (0, e.jsx)(N.t, {}),
                  }),
                ],
              });
            const t = this.state.stats;
            return (0, e.jsxs)("div", {
              className: ce.EventEditorInputPaneContents,
              children: [
                (0, e.jsxs)("div", {
                  className: x().EventEditorTextTitle,
                  children: [
                    (0, s.we)("#EventEmail_Stats_Title"),
                    this.state.bRefreshing &&
                      (0, e.jsx)(N.t, { size: "small" }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    x().FlexColumnContainer,
                    x().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: x().EventEditorTextSubTitle,
                      children: (0, s.we)(
                        "#EventEmail_Stats_State",
                        (0, s.we)("#EventEmail_Stats_State_" + t.state),
                      ),
                    }),
                    t.state == "sending" &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_Started",
                          (0, s.TW)(t.rtime_start_firing),
                        ),
                      }),
                    (t.state == "complete" || t.state == "aborted") &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_Completed",
                          (0, s.TW)(t.rtime_start_firing),
                          (0, s.TW)(t.rtime_stop_firing),
                        ),
                      }),
                    t.state == "window_closed" &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_WindowClosed",
                          (0, s.TW)(t.rtime_stop_firing),
                        ),
                      }),
                    !!t.rtime_last_update_time &&
                      (0, e.jsxs)(g.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Examined",
                              t.accounts_examined?.toLocaleString(
                                (0, Mt.J)(),
                              ) ?? 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Duplicates",
                              t.accounts_duplicates?.toLocaleString(
                                (0, Mt.J)(),
                              ) ?? 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Emailed",
                              t.accounts_emailed?.toLocaleString((0, Mt.J)()) ??
                                0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Skipped",
                              t.accounts_not_emailed?.toLocaleString(
                                (0, Mt.J)(),
                              ) ?? 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Failed",
                              t.accounts_email_failed?.toLocaleString(
                                (0, Mt.J)(),
                              ) ?? 0,
                            ),
                          }),
                        ],
                      }),
                    (0, e.jsx)("div", {
                      children: (0, s.we)(
                        "#EventEmail_Stats_Last_Refresh_Time",
                        (0, s.Hq)(this.state.rtimeLastRefresh),
                      ),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Ke([J.oI], ya.prototype, "RefreshIfNeeded", 1),
          Ke([J.oI], ya.prototype, "RefreshStats", 1),
          (ya = Ke([w.PA], ya));
        var uu = h(65700),
          hu = h(18735),
          mu = h(58360),
          pu = h(4969),
          _u = h.n(pu);
        function vu(a) {
          const t = (0, Sa.I)({
            queryKey: ["demoappdetailsforbase", a],
            queryFn: async () => {
              const n = `${rt.TS.COMMUNITY_BASE_URL}demos/ajaxgetappdemoinfo`,
                o = { appid: a, origin: self.origin };
              return (await K().get(n, { params: o }))?.data?.demos || [];
            },
            enabled: !!a,
          });
          return t?.isLoading ? null : t.data;
        }
        function mp(a, t) {
          return useMutation({
            mutationFn: async () => {
              const n = `${Config.COMMUNITY_BASE_URL}demos/ajaxensuredemohasogg`,
                o = new FormData();
              return (
                o.append("sessionid", GetSessionID()),
                o.append("appid", "" + a),
                o.append("demo_appid", "" + t),
                (await axios.post(n, o, { withCredentials: !0 }))?.data
                  ?.ogg_clan_account_id || null
              );
            },
          });
        }
        var gu = Object.defineProperty,
          Su = Object.getOwnPropertyDescriptor,
          eo = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Su(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && gu(t, n, i), i;
          };
        function Eu(a) {
          const t = Zi(a.appid);
          return a.appid ? t : f.UF.IS_ALLOWED_SC;
        }
        const xu = (0, w.PA)((a) => {
          const { editModel: t } = a;
          let n = (0, Qt.JS)(t.GetEventType());
          const { data: o } = (0, Nt.hM)(t.GetClanAccountID()),
            i = t.BHasTag("curator");
          return (0, e.jsxs)("div", {
            className: x().Columns,
            children: [
              (0, e.jsxs)("div", {
                className: (0, j.A)(x().LeftCol),
                children: [
                  (0, e.jsx)(Cu, { editModel: t }),
                  (0, e.jsx)(mu.u, { bHideEndRange: !n, editModel: t }),
                  !!t.BHasTag("steam_award_nomination_request") &&
                    (0, e.jsx)(uu.ks, {}),
                  (0, e.jsx)(Xa, { editModel: t }),
                  (!i || o?.valve_admin) && (0, e.jsx)(fu, { editModel: t }),
                  (0, e.jsx)("div", { className: x().ClearThings }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(be().OptionsNotes, x().RightCol),
                children: [
                  (0, e.jsx)("span", {
                    className: x().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_Time_Zone"),
                  }),
                  (0, s.we)("#EventEditor_Time_ttip"),
                ],
              }),
            ],
          });
        });
        function fu(a) {
          const { editModel: t } = a;
          let n = g.useRef(void 0);
          const o = g.useCallback(
              (E) => {
                t.GetAppID() == A.DU && t.BHasTag("hide_library_overview") && E
                  ? (0, y.pg)(
                      (0, e.jsx)(B.o0, {
                        strTitle: (0, s.we)("#EventEditor_GenericAreYouSure"),
                        strDescription:
                          "Showing on the library home page will pin this event into the first spot in the 'Whats New' section for ALL Steam Library. Are you sure this is an Steam update that applies to all Steam Library users? Be thoughtful.",
                        onOK: () => t.ClearTags(["hide_library_overview"]),
                        onCancel: () =>
                          n?.current?.setState({ checked: !n.current.checked }),
                      }),
                      window,
                    )
                  : t.SetTag("hide_library_overview", !E);
              },
              [t],
            ),
            i = (E) => {
              t.SetLibrarySpotlight(E);
            };
          let [l, r, c, d, u, p, m, S, v] = (0, L.q3)(() => [
            t.BIsAllowedOnLibraryOverview(),
            t.BIsAllowedOnLibraryDetail(),
            t.BIsAllowedOnStore(),
            t.GetCategoryAsString(),
            !t.GetEventModel().BHasTag("hide_library_detail"),
            !t.GetEventModel().BHasTag("hide_library_overview"),
            t.GetEventModel().BShowLibrarySpotlight(),
            !t.GetEventModel().BHasTag("hide_store"),
            t.GetEventModel().BHasTag("workshop"),
          ]);
          return (0, e.jsx)("div", {
            className: be().EventEditorInputPaneContents,
            children: (0, e.jsxs)("div", {
              className: x().LeftCol,
              children: [
                (0, e.jsx)("div", {
                  className: x().EventEditorTextTitle,
                  children: (0, s.we)("#EventEditor_Options_Title"),
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    x().FlexColumnContainer,
                    x().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: x().EventEditorTextSubTitle,
                      children: (0, s.PP)(
                        "#EventEditor_Options_Show_Warning",
                        (0, e.jsx)("a", {
                          href: "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B",
                          target: f.TS.IN_CLIENT ? void 0 : "_blank",
                          children: (0, s.we)(
                            "#EventEditor_Options_Show_WarningLink",
                          ),
                        }),
                      ),
                    }),
                    (0, e.jsx)(_.RF, {
                      onChange: (E) => t.SetTag("hide_store", !E),
                      label: (0, s.we)("#EventEditor_Options_Show_Store"),
                      checked: c ? S : !1,
                      description: c
                        ? void 0
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", d),
                      disabled: !c,
                    }),
                    (0, e.jsx)(ju, { editModel: t }),
                    (0, e.jsx)(_.RF, {
                      onChange: o,
                      label: (0, s.we)(
                        "#EventEditor_Options_Show_Library_Overview",
                      ),
                      checked: l ? p : !1,
                      description: l
                        ? (0, s.we)(
                            "#EventEditor_Options_Show_Library_Overview_Desc",
                          )
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", d),
                      disabled: !l,
                      ref: n,
                    }),
                    (0, e.jsx)(_.RF, {
                      onChange: (E) => t.SetTag("hide_library_detail", !E),
                      label: (0, s.we)(
                        "#EventEditor_Options_Show_Library_Detail",
                      ),
                      checked: r ? u : !1,
                      description: r
                        ? void 0
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", d),
                      disabled: !r,
                    }),
                    (0, e.jsx)("div", {
                      className: x().EventEditorTextTitle,
                      children: (0, s.we)("#EventEditor_Options_Special_Desc"),
                    }),
                    (0, e.jsx)(_.RF, {
                      onChange: i,
                      label: (0, s.we)(
                        "#EventEditor_Options_Library_Spotlight_Label",
                      ),
                      checked: m,
                      description: (0, s.we)(
                        "#EventEditor_Options_Library_Spotlight_Desc",
                      ),
                      disabled: !u || !r,
                    }),
                    (0, e.jsx)("div", {
                      className: x().EventEditorTextTitle,
                      children: (0, s.we)("#EventEditor_Options_Desc"),
                    }),
                    (0, e.jsx)(_.RF, {
                      onChange: (E) => t.SetTag("workshop", E),
                      label: (0, s.we)("#EventEditor_Options_Workshop_Label"),
                      checked: v,
                      description: (0, s.we)(
                        "#EventEditor_Options_Workshop_Desc",
                      ),
                    }),
                    !1,
                    (0, e.jsx)(Iu, { editModel: t }),
                    (0, e.jsx)(yu, { editModel: t }),
                  ],
                }),
                (0, e.jsx)(bu, { editModel: t }),
              ],
            }),
          });
        }
        const ju = (0, w.PA)((a) => {
          const { editModel: t } = a,
            { data: n } = (0, Nt.hM)(t.GetClanAccountID());
          if (!!!n?.valve_admin || f.UF.IS_OGG || !t.BHasSaleEnabled())
            return null;
          const i = f.TS.STORE_BASE_URL + "specials/";
          return (0, e.jsx)("div", {
            className: (0, j.A)(
              x().FlexColumnContainer,
              x().ValveOnlyBackground,
            ),
            children: (0, e.jsx)(_.RF, {
              onChange: (l) => t.SetTag(A.Yf, l),
              label: "(VO) Hide this sale from the Specials page carousel",
              tooltip: "Affects the sale events carousel on " + i,
              checked: t.GetEventModel().BHasTag(A.Yf),
              description:
                "Live sale pages are listed in the sale events carousel on the store's Specials page. Turn this on to keep this sale out of that carousel. The store takes a few minutes to pick up the change.",
            }),
          });
        });
        function pp(a) {
          const { editModel: t } = a,
            n = vu(t.GetAppID()),
            [o, i] = (0, L.q3)(() => [
              t.GetEventModel().BHasTag("show_library_demo_detail"),
              t.GetGID(),
            ]);
          if (n == null)
            return (0, e.jsx)(N.t, {
              string: (0, s.we)("#EventEditor_Options_LoadingDemoInfo"),
              position: "center",
              size: "small",
            });
          const l = n.filter((u) => u.is_released_somewhere && u.appid > 0),
            r = l.length > 0;
          let c = !1,
            d = null;
          return (
            r
              ? i ||
                ((c = !0),
                (d = (0, s.we)("#EventEditor_Options_SaveFirstToRepostDemo")))
              : ((c = !0),
                (d = (0, s.we)("#EventEditor_Options_VisibleDemoTooltip"))),
            (0, e.jsx)(_.RF, {
              onChange: (u) => {
                t.SetDemoAppIDForRepost(l[0].appid),
                  t.SetTag("repost_source_possible", !0),
                  u
                    ? (t.SetTag("show_library_demo_detail", !0),
                      t.SetTag("clear_library_demo_detail", !1))
                    : (t.SetTag("show_library_demo_detail", !1),
                      t.BHasOriginalTag("show_library_demo_detail") &&
                        t.SetTag("clear_library_demo_detail", !0));
              },
              tooltip: c
                ? d
                : (0, s.we)("#EventEditor_Options_DemoRepostTooltop"),
              label: (0, s.we)("#EventEditor_Options_Demo_Library_Detail"),
              checked: o,
              description: (0, s.we)("#EventEditor_Options_Demo_Library_Desc"),
              disabled: c,
            })
          );
        }
        const bu = (0, w.PA)((a) => {
          const { editModel: t } = a,
            { data: n } = (0, Nt.hM)(t.GetClanAccountID()),
            o = !!n?.valve_admin;
          let i = g.useRef(void 0);
          const l = t.GetEventType(),
            [r] = (0, L.q3)(() => [
              t.GetEventModel().jsondata.country_restriction,
            ]);
          if (!o) return null;
          const c = (u) => {
              t.BHasSaleEnabled() && u && !t.BHasTag("mod_hide_store")
                ? (0, y.pg)(
                    (0, e.jsx)(B.o0, {
                      strTitle: (0, s.we)("#EventEditor_Options_Hide_Store"),
                      strDescription:
                        "There is an active sale on this event. Setting this flag will HIDE the sale page completely. Are you sure?",
                      onOK: () => t.AddTag("mod_hide_store"),
                      onCancel: () => i.current.SetChecked(!1, !1),
                    }),
                    window,
                  )
                : t.SetTag("mod_hide_store", u);
            },
            d =
              t.GetAppID() == A.qF
                ? "Deck"
                : t.GetAppID() == A.IT
                  ? "Frame"
                  : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: x().EventEditorTextTitle,
                children: (0, s.we)("#EventEditor_Options_Moderation"),
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(
                  x().FlexColumnContainer,
                  x().EventDefaultRowContainer,
                  x().ValveOnlyBackground,
                ),
                children: [
                  (0, e.jsx)(_.RF, {
                    onChange: (u) => t.SetTag("mod_hide_library_overview", u),
                    label: (0, s.we)(
                      "#EventEditor_Options_Hide_Library_Overview",
                    ),
                    checked: t
                      .GetEventModel()
                      .BHasTag("mod_hide_library_overview"),
                  }),
                  (0, e.jsx)(_.RF, {
                    onChange: (u) => t.SetTag("mod_hide_library_detail", u),
                    label: (0, s.we)(
                      "#EventEditor_Options_Hide_Library_Detail",
                    ),
                    checked: t
                      .GetEventModel()
                      .BHasTag("mod_hide_library_detail"),
                  }),
                  (0, e.jsx)(_.RF, {
                    onChange: c,
                    ref: i,
                    label: (0, s.we)("#EventEditor_Options_Hide_Store"),
                    checked: t.GetEventModel().BHasTag("mod_hide_store"),
                  }),
                  !!f.UF.IS_OGG &&
                    (0, e.jsx)(_.RF, {
                      onChange: (u) => t.SetSteamStoreSpotlight(u),
                      label: "(VO) Allow Spotlight on Steam Store Product Page",
                      checked: t.BAllowedSteamStoreSpotlight(),
                      description:
                        "Allows the partner to upload a store spotlight artwork to be shown on the product page for upto a week from the event start.",
                    }),
                  !!Vi(t.GetEventModel(), o) &&
                    (0, e.jsx)(_.RF, {
                      onChange: (u) => t.SetTag(Ja, u),
                      label:
                        "(VO) Let Partners Upload Store Capsules for this Sale",
                      checked: t.GetEventModel().BHasTag(Ja),
                      description:
                        "Opens the store capsule uploader on the artwork tab to everyone who can edit this event. We can always reach it ourselves without this; turning it off hides it from them again but keeps whatever they uploaded.",
                    }),
                  (0, e.jsx)(_.RF, {
                    onChange: (u) => t.SetLibraryHomeSpotlight(u),
                    label: "(VO) Force Spotlight on Library Home",
                    checked: t.BHasLibaryHomeSpotlight(),
                    disabled: !t.BHasSpotlightArtwork(),
                    description:
                      "Shows the spotlight artwork in the 'Whats New' section at the top of the library home for all owners.",
                  }),
                  (0, e.jsx)(_.RF, {
                    onChange: (u) => t.SetTag("blog", u),
                    label: "(VO) Mark as Blog for Valve Game Teams",
                    checked: t.GetEventModel().BHasTag("blog"),
                    description:
                      "Add the 'blog' tag to this post. Allowing game team website to filter news posts intended for their blog.",
                  }),
                  (0, e.jsx)(_.RF, {
                    onChange: (u) => t.SetTag("adult_only_content", u),
                    label: "(VO) Event Contains Adult Only Content",
                    checked: t.GetEventModel().BHasTag("adult_only_content"),
                    description:
                      "Set this to on if the post contains adult only content so that it can be filtered accordingly.",
                  }),
                  t.GetAppID() == A.DU &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(_.RF, {
                          onChange: (u) => t.SetTag("steam_blog", u),
                          label: "(VO) Steam Official Blog",
                          checked: t.GetEventModel().BHasTag("steam_blog"),
                          description:
                            "When checked this event will surface on https://store.steampowered.com/news/app/593110. Make sure to set this before you publish, or it will have no effect.",
                        }),
                        (0, e.jsx)(_.RF, {
                          onChange: (u) => t.SetTag("skip_megaphone", u),
                          label: "(VO) Skip Lighting Up Steam Client Megaphone",
                          checked: t.GetEventModel().BHasTag("skip_megaphone"),
                          description:
                            "By default small event (patch notes) do not light up the megaphone in the Steam client. Enabling this flag does the same for all other event type.",
                        }),
                      ],
                    }),
                  (0, e.jsx)(_.RF, {
                    onChange: (u) => t.SetTag("forced_featured", u),
                    label: "(VO) Force Feature this event in the NewsHub",
                    checked: t.GetEventModel().BHasTag("forced_featured"),
                    description:
                      "Add the 'forced_featured' tag to this post. This will prioritize the event appearing in algorithmic featured newshub section.",
                  }),
                  !!t.GetEventModel().BIsOGGEvent() &&
                    (0, e.jsx)(_.RF, {
                      onChange: (u) => t.SetTag("seasonal_sale_featuring", u),
                      label: "(VO) Feature this event during the Seasonal Sale",
                      checked: t
                        .GetEventModel()
                        .BHasTag("seasonal_sale_featuring"),
                      description:
                        "Add the 'seasonal_sale_featuring' tag to this post. This will push the event to appear on the front page during a seasonal sale. This assume the content is specific to in-game items on sale for the underlying game",
                    }),
                  t.GetClanAccountID() == Dt.bv &&
                    (0, e.jsx)(_.RF, {
                      onChange: (u) => t.SetTag("contenthub", u),
                      checked: t.GetEventModel().BHasTag("contenthub"),
                      label: "(VO) Tag as Content Hub",
                      description:
                        "Add the 'contenthub' tag to this event. Removes certain publishing restrictions for this event.",
                    }),
                  (0, e.jsx)(_.RF, {
                    onChange: (u) => t.SetTag("patchnotes", u),
                    checked: t.GetEventModel().BHasTag("patchnotes"),
                    label: "(VO) Tag as Patch Notes",
                    description:
                      "Add the 'patchnotes' tag to this event. Allows the event to show in certain contexts normally only showing Small Update/Patch Notes events such as Steam Client patch notes.",
                  }),
                  !!f.UF.IS_OGG &&
                    (0, e.jsx)(_.RF, {
                      onChange: (u) => {
                        u &&
                          (t.setEventType(T.zeJ), t.SetSteamStoreSpotlight(u)),
                          t.SetTag("vo_marketing_message", u);
                      },
                      label: "(VO) Marketing Message Major Update",
                      disabled:
                        !t.GetEventModel().BHasTag("vo_marketing_message") &&
                        l != T.zeJ,
                      checked: t
                        .GetEventModel()
                        .BHasTag("vo_marketing_message"),
                      description:
                        "This will surface on the event editor the rules and requirements behind being featured in a marketing message to better align them with customer information." +
                        (l != T.zeJ
                          ? " This can only be enable for Major Update Type."
                          : ""),
                    }),
                  (0, e.jsx)(_.RF, {
                    onChange: (u) => t.SetTag("vo_prevent_delete", u),
                    label: "(VO) Prevent this event from being deleted.",
                    checked: t.GetEventModel().BHasTag("vo_prevent_delete"),
                    description:
                      "To prevent a partner or Valve from deleting this event because something is featuring it or depends on it.",
                  }),
                  (t.GetClanAccountID() == Dt.GU ||
                    ((f.TS.EUNIVERSE == T.Rv || f.TS.EUNIVERSE == T.CII) &&
                      t.GetClanAccountID() == Dt.mW)) &&
                    (0, e.jsx)(_.RF, {
                      onChange: (u) => t.SetTag("steam_top_releases", u),
                      label: "(VO) Is Monthly Top Sellers?",
                      checked: t.GetEventModel().BHasTag("steam_top_releases"),
                      description:
                        "Add the 'steam_top_releases' tag to this post. This allows the Steam Top Release Charts to pull the official top releases events into those pages.",
                    }),
                  (t.GetClanAccountID() == Dt.GU ||
                    ((f.TS.EUNIVERSE == T.Rv || f.TS.EUNIVERSE == T.CII) &&
                      t.GetClanAccountID() == Dt.mW)) &&
                    (0, e.jsx)(_.RF, {
                      onChange: (u) => t.SetTag("steam_best_of_year", u),
                      label: "(VO) Is Best of Year?",
                      checked: t.GetEventModel().BHasTag("steam_best_of_year"),
                      description:
                        "Add the 'steam_best_of_year' tag to this post. This allows the Steam Best of Year to pull the official best of year events into those pages.",
                    }),
                  !!d &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("p", {
                          children:
                            "Channels where we want to surface these events to. See for details: https://confluence.valve.org/pages/viewpage.action?pageId=214073964",
                        }),
                        (0, e.jsx)(_.RF, {
                          onChange: (u) => t.SetTag("stablechannel", u),
                          label: `(VO) Steam ${d} Stable Channel`,
                          checked: t.GetEventModel().BHasTag("stablechannel"),
                          description: `Surface this to users who are subscribed to Steam ${d} Stable Build. Only include Stable Steam ${d} Client or Stable SteamOS notes.`,
                        }),
                        (0, e.jsx)(_.RF, {
                          onChange: (u) => t.SetTag("betachannel", u),
                          label: `(VO) Steam ${d} Beta Channel`,
                          checked: t.GetEventModel().BHasTag("betachannel"),
                          description: `Surface this to users who are subscribed to Steam ${d} Beta Build. Only include Beta Steam ${d} Client or Stable SteamOS notes.`,
                        }),
                        (0, e.jsx)(_.RF, {
                          onChange: (u) => t.SetTag("previewchannel", u),
                          label: `(VO) Steam ${d} Preview Channel`,
                          checked: t.GetEventModel().BHasTag("previewchannel"),
                          description: `Surface this to users who are subscribed to Steam ${d} Preview Build. Only include Beta Steam ${d} Client or Beta SteamOS notes.`,
                        }),
                      ],
                    }),
                  (0, e.jsx)(_.pd, {
                    type: "text",
                    label: (0, s.we)("#EventEditor_Options_RegionRestrictions"),
                    placeholder: (0, s.we)(
                      "#EventEditor_Options_RegionRestrictions_placeholder",
                    ),
                    onChange: (u) => {
                      (t.GetEventModel().jsondata.country_restriction =
                        u.currentTarget.value),
                        t.SetDirty(b.IQ.description);
                    },
                    value: r,
                  }),
                ],
              }),
            ],
          });
        });
        let Xa = class extends g.Component {
          state = { bSending: !1 };
          m_cancelSignal = K().CancelToken.source();
          TestFireEvent() {
            const { editModel: a } = this.props;
            this.setState({ bSending: !0 }, () => {
              G.mh.FireTestEventNotifiation(
                a.GetClanSteamID(),
                a.GetGID(),
                this.m_cancelSignal,
              ),
                this.setState({ bSending: !1 });
            });
          }
          render() {
            const { editModel: a } = this.props;
            let t = a.GetEventType(),
              n = (0, Qt.rQ)(t);
            const o =
              a.GetEventModel().BIsVisibleEvent() &&
              a.GetEventModel().GetStartTimeAndDateUnixSeconds() <
                Math.floor(Date.now() / 1e3);
            if (!n || o) return null;
            let i = a.GetVisibilityPublishingSetup(),
              r =
                a.GetStartTimeEditChoice() == b.z8.k_ENow ||
                i == b.Fl.event_start;
            return (0, e.jsx)("div", {
              className: (0, j.A)(be().EventEditorInputPaneContents),
              children: (0, e.jsxs)("div", {
                className: (0, j.A)(x().LeftCol, _u().ThemedCtn),
                children: [
                  (0, e.jsx)("div", {
                    className: x().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_Reminder_title"),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(
                      x().FlexColumnContainer,
                      x().EventDefaultRowContainer,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: x().EventEditorTextSubTitle,
                        children: (0, s.we)("#EventEditor_Reminder_desc"),
                      }),
                      (0, e.jsx)("div", {
                        className: x().EventEditorTextSubTitle,
                        children: (0, s.PP)(
                          "#EventEditor_Reminder_desc2",
                          (0, e.jsx)("a", {
                            href: f.TS.STORE_BASE_URL + "mobile?show=steamapp",
                            target: f.TS.IN_CLIENT ? void 0 : "_blank",
                            children: (0, s.we)(
                              "#EventEditor_Reminder_mobileapp",
                            ),
                          }),
                        ),
                      }),
                      this.state.bSending &&
                        (0, e.jsx)(N.t, { size: "small", position: "center" }),
                      (0, e.jsx)("button", {
                        className: x().Button,
                        onClick: this.TestFireEvent,
                        disabled: r,
                        children: (0, s.we)("#EventEditor_Reminder_testfire"),
                      }),
                      r &&
                        (0, e.jsx)("span", {
                          children: (0, s.we)("#EventEditor_Reminder_disable"),
                        }),
                    ],
                  }),
                ],
              }),
            });
          }
        };
        eo([J.oI], Xa.prototype, "TestFireEvent", 1), (Xa = eo([w.PA], Xa));
        const Cu = (0, w.PA)((a) => {
          const { editModel: t } = a;
          if (!t.BIsEventForOGGWithoutVisibleStorePage()) return null;
          const o = (i) => t.SetOptedInForOGGWithoutVisibleStorePage(i);
          return (0, e.jsx)("div", {
            className: be().EventEditorInputPaneContents,
            children: (0, e.jsxs)("div", {
              className: x().LeftCol,
              children: [
                (0, e.jsxs)("div", {
                  className: x().EventEditorTextTitle,
                  children: [
                    (0, s.we)("#EventEditor_Options_VisibilityOptIn_Title"),
                    (0, e.jsx)("span", {
                      className: be().RequiredFieldLabel,
                      children: (0, s.we)("#EventEditor_Required"),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    x().FlexColumnContainer,
                    x().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: x().EventEditorTextSubTitle,
                      children: (0, s.we)(
                        "#EventEditor_Options_VisibilityOptIn_Description",
                        t.GetAppID(),
                      ),
                    }),
                    (0, e.jsx)(_.RF, {
                      onChange: o,
                      label: (0, s.we)(
                        "#EventEditor_Options_VisibilityOptIn_Label",
                      ),
                      checked: t.BOptedInForOGGWithoutVisibleStorePage(),
                    }),
                  ],
                }),
              ],
            }),
          });
        });
        function to(a) {
          const t =
              a.BInRealmChina() &&
              s.A0.IsELanguageValidInRealm(
                a.GetCurEditLanguage(),
                Wa.TU.k_ESteamRealmChina,
              ),
            n =
              a.BInRealmGlobal() &&
              s.A0.IsELanguageValidInRealm(
                a.GetCurEditLanguage(),
                Wa.TU.k_ESteamRealmGlobal,
              );
          !t && !n && a.SetCurEditLanguage(a.BInRealmChina() ? T.ZLm : T.Bhc);
        }
        const wu = (0, w.PA)((a) => {
            const { editModel: t } = a,
              n = (o) => {
                o
                  ? (t.AddTag("enable_steam_china"),
                    t.AddTag("disable_steam_global"))
                  : t.ClearTags(["enable_steam_china", "disable_steam_global"]),
                  to(t);
              };
            return (0, e.jsx)(_.RF, {
              onChange: n,
              label: (0, s.we)("#EventEditor_Options_ShowInSteamChina"),
              description: (0, s.we)(
                "#EventEditor_Options_ShowInSteamChina_Desc",
              ),
              checked: t.BInRealmChina(),
            });
          }),
          Du = (0, w.PA)((a) => {
            const { editModel: t } = a;
            if (t.BInRealmGlobal() && !t.BInRealmChina()) return null;
            const n = (o) => {
              o
                ? t.AddTag("disable_steam_global")
                : t.ClearTags(["disable_steam_global"]),
                to(t);
            };
            return (0, e.jsx)(_.RF, {
              onChange: n,
              label: (0, s.we)("#EventEditor_Options_ShowInSteamGlobal"),
              description: (0, s.we)(
                "#EventEditor_Options_ShowInSteamGlobal_Desc",
              ),
              checked: !t.BInRealmGlobal(),
            });
          }),
          yu = (0, w.PA)((a) => {
            const { editModel: t } = a,
              n = Eu(t.GetEventModel());
            return (0, e.jsxs)("div", {
              children: [
                n && (0, e.jsx)(wu, { editModel: t }),
                (0, e.jsx)(Du, { editModel: t }),
              ],
            });
          }),
          Tu = (a) => {
            const [t] = (0, ge.t7)(a, qe.A.k_DataRequest_CommonOnly);
            return !!(t && t.HasContentDescriptorID(hu.u7));
          },
          Iu = (0, w.PA)((a) => {
            const { editModel: t } = a;
            return Tu(t.GetAppID())
              ? (0, e.jsx)(_.RF, {
                  onChange: (o) => t.SetTag("adult_only_content", o),
                  label: (0, s.we)(
                    "#EventEditor_Options_Has_Adult_Only_Content",
                  ),
                  checked: t.GetEventModel().BHasTag("adult_only_content"),
                  description: (0, s.we)(
                    "#EventEditor_Options_Has_Adult_Only_Content_Desc",
                  ),
                })
              : null;
          });
        var Au = h(24118),
          Gu = h(6542),
          Ta = h.n(Gu);
        function Lu(a) {
          const { editModel: t } = a,
            n = (0, L.q3)(() => ({
              bHidden: t.BHidden(),
              bUnlisted: t.BUnlisted(),
              bPublished: t.BPublished(),
            }));
          return (!n.bHidden || n.bUnlisted) && n.bPublished
            ? null
            : (0, e.jsx)(Nu, { ...a });
        }
        const Nu = (0, w.PA)((a) => {
          const { editModel: t, bTakePublishAction: n } = a,
            o = g.useRef(void 0),
            [i, l] = g.useState(!1),
            r = t.GetClanSteamID(),
            c = t.GetGID(),
            {
              bLoading: d,
              bPublishRequiresValveApproval: u,
              nAccountApproved: p,
            } = (0, je.g7)(r.GetAccountID(), c);
          g.useEffect(() => {
            n && o?.current && o.current.click();
          }, [n]);
          const m = t.GetEventType() == T.ajI,
            S = r.GetAccountID() == (0, ea.H)() || m,
            v = (0, oe.Dd)(r, !0),
            E = !S && v,
            D = (Ie, ze) => {
              (0, y.pg)(
                (0, e.jsx)(_a.i, {
                  editModel: t,
                  bUnlistedMode: ze,
                  bValveAdmin: v,
                  OnPublishSuccess: () => l(!0),
                  partnerEventEditorStore: G.mh,
                }),
                (0, ue.uX)(Ie),
              );
            },
            C = (Ie) => {
              t.SetVisibilityPublishingSetup(b.Fl.immediate),
                (0, y.pg)(
                  (0, e.jsx)(_a.i, {
                    editModel: t,
                    bValveAdmin: v,
                    OnPublishSuccess: () => l(!0),
                    partnerEventEditorStore: G.mh,
                    closeModal: () => {
                      t.ResetSetVisibilityStartTime();
                    },
                  }),
                  (0, ue.uX)(Ie),
                );
            };
          if (i)
            return (0, e.jsx)($.OG, {
              eventModel: t.GetEventModel(),
              route: $.PH.k_eView,
            });
          const M = t.BHidden(),
            z = t.BPublished(),
            k = t.BUnlisted();
          if ((!M || k) && z) return null;
          if (d)
            return (0, e.jsx)(N.t, {
              string: (0, s.we)("#Loading"),
              size: "small",
            });
          const le = t.BAllowedToPublishStagedEvents(),
            me = u && !p;
          return (0, e.jsxs)("div", {
            className: (0, j.A)(x().FlexColumnContainer, Ta().PublishOption),
            children: [
              (0, e.jsx)("div", {
                className: x().EventEditorTextTitle,
                children: (0, s.we)("#Button_Publish"),
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(Ta().PublishButtonCtn),
                children: [
                  me &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, s.we)(
                            "#EventEditor_Publish_PublicBlock_Title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, s.we)(
                            "#EventEditor_Publish_PublicBlock_Desc",
                          ),
                        }),
                      ],
                    }),
                  !z &&
                    !me &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !S &&
                          (0, e.jsx)(Nn, {
                            label: (0, s.we)("#Button_Publish"),
                            description: (0, s.we)("#EventEditor_Publish_Desc"),
                            refActionButton: o,
                            onClick: (Ie) => D(Ie, !1),
                          }),
                        (S || E) &&
                          (0, e.jsx)(te.e7, {
                            condition: E,
                            wrap: (Ie) =>
                              (0, e.jsx)(oe.Eb, {
                                clanSteamID: r,
                                requireAdmin: !0,
                                children: Ie,
                              }),
                            children: (0, e.jsx)(Nn, {
                              label: m
                                ? (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_CreatorHome",
                                  )
                                : (0, s.we)("#EventEditor_Publish_Unlisted"),
                              description: m
                                ? (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_CreatorHome_Desc",
                                  )
                                : (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_Desc",
                                  ),
                              refActionButton: S ? o : void 0,
                              onClick: (Ie) => D(Ie, !0),
                            }),
                          }),
                      ],
                    }),
                  !!(z && M && !k && !me) &&
                    (0, e.jsx)(te.e7, {
                      condition: !le,
                      wrap: (Ie) =>
                        (0, e.jsx)(xe.he, {
                          toolTipContent: (0, s.we)(
                            "#EventEditor_Publish_Disable_ttip",
                          ),
                          children: Ie,
                        }),
                      children: (0, e.jsx)(Nn, {
                        label: (0, s.we)("#EventEditor_Publish_VisibleNow"),
                        refActionButton: o,
                        disabled: !le,
                        onClick: C,
                      }),
                    }),
                ],
              }),
            ],
          });
        });
        function Nn(a) {
          const {
            label: t,
            description: n,
            tooltip: o,
            disabled: i,
            refActionButton: l,
            onClick: r,
          } = a;
          return (0, e.jsxs)("div", {
            children: [
              n &&
                (0, e.jsx)("div", { className: Ta().Description, children: n }),
              (0, e.jsxs)(_.$n, {
                onClick: r,
                className: (0, j.A)(
                  Ta().EventPublishButton,
                  "DialogButton Primary",
                  Ta().PublishButton,
                ),
                ref: l,
                disabled: i,
                children: [t, o && (0, e.jsx)(W.o, { tooltip: o })],
              }),
            ],
          });
        }
        var q = h(82267),
          ao = h.n(q),
          Ia = h(83963);
        class xt {
          m_mapVisibilityUpdateRounds = new Map();
          m_mapVisibilityUpdateLoadPromises = new Map();
          m_mapVisibilityUpdateChangeCallback = new Map();
          m_mapVisibilityLaunchRounds = new Map();
          m_mapVisibilityLaunchLoadPromises = new Map();
          m_mapVisibilityLaunchChangeCallback = new Map();
          GetVisibilityRounds(t, n) {
            return t == Ia.tw.I8
              ? this.m_mapVisibilityUpdateRounds.get(n)
              : this.m_mapVisibilityLaunchRounds.get(n);
          }
          GetVisibilityRoundsChangeCallback(t, n) {
            const o =
              t == Ia.tw.I8
                ? this.m_mapVisibilityUpdateChangeCallback
                : this.m_mapVisibilityLaunchChangeCallback;
            return o.has(n) || o.set(n, new Na.lu()), o.get(n);
          }
          async LoadVisibilityRounds(t, n) {
            const o =
              t == Ia.tw.I8
                ? this.m_mapVisibilityUpdateLoadPromises
                : this.m_mapVisibilityLaunchLoadPromises;
            return (
              o.has(n) || o.set(n, this.InternalLoadVisibilityRounds(t, n)),
              o.get(n)
            );
          }
          async InternalLoadVisibilityRounds(t, n) {
            let o = null;
            try {
              const i = `${f.TS.COMMUNITY_BASE_URL}ogg/${n}/ajaxgetappvisibilityrounds`,
                l = { type: t },
                r = await K().get(i, { params: l, withCredentials: !0 });
              if (r?.status == 200 && r?.data?.success == Fe.R) {
                const c =
                    t == Ia.tw.I8
                      ? this.m_mapVisibilityUpdateRounds
                      : this.m_mapVisibilityLaunchRounds,
                  d = r.data.data || [];
                return (
                  c.set(n, d),
                  this.GetVisibilityRoundsChangeCallback(t, n).Dispatch(d),
                  d
                );
              }
              o = (0, ye.H)(r);
            } catch (i) {
              o = (0, ye.H)(i);
            }
            return (
              console.error(
                "CVisibilityRoundsStore.InternalLoadVisibilityRounds failed: " +
                  o?.strErrorMsg,
                o,
              ),
              null
            );
          }
          static s_Singleton;
          static Get() {
            return (
              xt.s_Singleton ||
                ((xt.s_Singleton = new xt()), xt.s_Singleton.Init()),
              xt.s_Singleton
            );
          }
          constructor() {}
          Init() {}
        }
        function Mu(a, t) {
          const [n, o] = (0, g.useState)(xt.Get().GetVisibilityRounds(a, t));
          return (
            (0, g.useEffect)(() => {
              (!n ||
                n.length == 0 ||
                n[0].appid != t ||
                n[0].feature_type != a) &&
                xt
                  .Get()
                  .LoadVisibilityRounds(a, t)
                  .then((i) => o(i));
            }, [t, n, a]),
            (0, J.hL)(xt.Get().GetVisibilityRoundsChangeCallback(a, t), o),
            n
          );
        }
        var Mn = h(69168),
          Bu = h(11823);
        const Ou = 100;
        function Pu(a) {
          const { editModel: t } = a,
            [n, o, i] = (0, L.q3)(() => [
              t.GetEventState(),
              t.GetClanSteamID(),
              t.GetEventModel().jsondata.clone_from_event_gid,
            ]),
            l = (0, Sn.m)("EventReplacePublishingControls"),
            { rgClanEventData: r } = (0, H.SG)(o, Ou, l);
          return !i || !r?.pages?.length || n != A.zv.k_EEventStateUnpublished
            ? null
            : (0, e.jsxs)("div", {
                className: (0, j.A)(
                  x().FlexColumnContainer,
                  ao().PublishOption,
                ),
                children: [
                  (0, e.jsx)("div", {
                    className: x().EventEditorTextTitle,
                    children: (0, s.we)("#EventPublishing_Replace_To"),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(x().RightColumnContainer),
                    children: [
                      (0, s.we)("#EventPublishing_Replace_To_Desc"),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(ku, { editModel: t }),
                      (0, e.jsx)(Ru, {
                        editModel: t,
                        rgEventSummaries: r.pages[0],
                      }),
                    ],
                  }),
                ],
              });
        }
        function Ru(a) {
          const { editModel: t, rgEventSummaries: n } = a,
            [o, i] = (0, g.useState)(null),
            [l, r, c] = (0, J.uD)(),
            d = (0, g.useMemo)(
              () =>
                n.map((u) => ({
                  value: u.gid,
                  label:
                    u.event_name +
                    ": " +
                    (0, s.TW)(u.rtime32_start_time) +
                    " @ " +
                    (0, Ze.pg)(u.rtime32_start_time),
                })),
              [n],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)("#EventPublishing_Replace_Pick"),
              }),
              (0, e.jsx)(ta.Ay, {
                isSearchable: !0,
                isMulti: !1,
                isClearable: !0,
                className: ao().ItemSelect,
                options: d,
                value: d.find((u) => u.value === o),
                onChange: (u) => {
                  u && i(u.value);
                },
              }),
              (0, e.jsx)(_.$n, {
                disabled: !o,
                onClick: r,
                children: (0, s.we)("#EventPublishing_Replace_Selected"),
              }),
              (0, e.jsx)(Mn.E, {
                active: l,
                children: (0, e.jsx)(no, {
                  editModel: t,
                  gidTargetClanEvent: o,
                  closeModal: c,
                }),
              }),
            ],
          });
        }
        function no(a) {
          const { closeModal: t, editModel: n, gidTargetClanEvent: o } = a,
            i = (0, ka.E)(),
            [l, r] = (0, g.useState)(),
            [c] = (0, g.useState)(() => new G.Nc()),
            [d, u] = (0, g.useState)(null),
            [p, m] = (0, g.useState)(!1),
            [S, v] = (0, g.useState)(!1),
            [E, D, C] = (0, L.q3)(() => [
              d?.GetClanSteamID(),
              d?.GetEventModel().GetNameWithFallback(i),
              d?.GetEventModel().GetLastUpdateTime(),
            ]);
          (0, g.useEffect)(() => {
            o &&
              d?.GetGID() != o &&
              c.LoadEditorModel(n.GetClanSteamID(), o).then((le) => {
                u(le);
              }),
              o &&
                !l &&
                G.Nc.GetLastUpdateTimeForEvent(
                  n.GetClanSteamID(),
                  o,
                  null,
                  null,
                ).then(r);
          }, [n, o, d, c, l]);
          const [M, z] = (0, g.useState)(!1),
            k = (0, st.vs)();
          return k.bLoading
            ? (0, e.jsx)(st.Hh, {
                state: k,
                strDialogTitle: (0, s.we)("#EventPublishing_Replace_To"),
                closeModal: t,
              })
            : M
              ? (0, e.jsx)(_a.t, {
                  editModel: d,
                  partnerEventEditorStore: c,
                  OnSuccess: () => {},
                  closeModal: t,
                  bReplaceEventMode: !0,
                  elSuccessDisplayLinks: (0, e.jsx)("a", {
                    href: `${ja.TS.COMMUNITY_BASE_URL}/gid/${E?.ConvertTo64BitString()}/partnerevents/edit/${o}`,
                    children: (0, s.we)("#EventEdit_Replacing_Open"),
                  }),
                })
              : (0, e.jsx)(ei.o0, {
                  onCancel: t,
                  strTitle: (0, s.we)("#EventPublishing_Replace_To"),
                  strDescription: (0, s.we)(
                    "#EventPublishing_Replace_Dialog_Desc1",
                  ),
                  bOKDisabled: !p,
                  onOK: () => {
                    S || (d.ReplaceFrom(n), z(!0));
                  },
                  children:
                    d && l
                      ? (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsxs)("ul", {
                              children: [
                                (0, e.jsx)("li", {
                                  children: (0, s.we)(
                                    "#EventPublishing_Replace_Dialog_Desc2",
                                    D,
                                  ),
                                }),
                                (0, e.jsx)("li", {
                                  children: (0, s.we)(
                                    "#EventPublishing_Replace_Dialog_Desc3",
                                    (0, s.TW)(C) + " @ " + (0, Ze.pg)(C),
                                  ),
                                }),
                                (0, e.jsx)("li", {
                                  children: (0, s.we)(
                                    "#EventPublishing_Replace_Dialog_Desc4",
                                    l.persona_name,
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, s.we)("#Dialog_AreYouSure"),
                            }),
                            (0, e.jsx)(_.Yh, {
                              checked: p,
                              onChange: m,
                              label: (0, s.we)(
                                "#EventPublishing_Replace_Confirm",
                              ),
                            }),
                            !!ja.iA.is_support &&
                              (0, e.jsx)(Bu.DA, {
                                curEventModelJson: n.GetEventModel().jsondata,
                                prevEventModelJson: d.GetEventModel().jsondata,
                                onShowCallback: () => v(!0),
                                onCancelCallback: () => v(!1),
                              }),
                          ],
                        })
                      : (0, e.jsx)(N.t, { string: (0, s.we)("#Loading") }),
                });
        }
        function ku(a) {
          const { editModel: t } = a,
            n = (0, ka.E)(),
            [o] = (0, L.q3)(() => [
              t.GetEventModel().jsondata.clone_from_event_gid,
            ]),
            i = (0, H.RR)(o),
            [l, r, c] = (0, J.uD)();
          if (!o) return null;
          if (o && !i)
            return (0, e.jsx)(N.t, { string: (0, s.we)("#Loading") });
          const d = i.BIsVisibleEvent() || i.BIsUnlistedEvent();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.PP)(
                  "#EventPublishing_Replace_CloneFrom",
                  (0, e.jsx)(R.N_, {
                    to: `${o}`,
                    children: i.GetNameWithFallback(n),
                  }),
                ),
              }),
              (0, e.jsxs)(_.$n, {
                disabled: !d,
                onClick: r,
                children: [
                  (0, s.we)("#EventPublishing_Replace_CloneFrom_Replace"),
                  (0, e.jsx)(W.o, {
                    tooltip: (0, s.we)(
                      d
                        ? "#EventPublishing_Replace_CloneFrom_Replace_ttip"
                        : "#EventPublishing_Replace_CloneFrom_Replace_ttip_fail",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)(Mn.E, {
                active: l,
                children: (0, e.jsx)(no, {
                  editModel: t,
                  gidTargetClanEvent: o,
                  closeModal: c,
                }),
              }),
            ],
          });
        }
        var Fu = h(68297),
          Uu = h.n(Fu);
        function zu(a) {
          const { editModel: t } = a,
            [n] = (0, L.q3)(() => [t.BHasTag("vo_marketing_message")]);
          if (n) return (0, e.jsx)(Vu, { ...a });
        }
        const Hu = 3;
        function Vu(a) {
          const { editModel: t } = a,
            [n, o, i] = (0, L.q3)(() => [
              t.BHasTag("vo_marketing_message"),
              t.GetClanAccountID(),
              t.GetGID(),
            ]),
            l = (0, je.fj)(o, i),
            [r, c] = (0, g.useState)(
              () =>
                l?.oPrivateData?.jsonData
                  ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
            ),
            [d, u] = (0, g.useState)(null);
          (0, g.useEffect)(() => {
            l?.oPrivateData?.jsonData
              ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode &&
              c(
                l?.oPrivateData?.jsonData
                  ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
              );
          }, [
            l?.oPrivateData?.jsonData
              ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
          ]);
          const [p, m, S] = (0, J.uD)(!1);
          return (0, e.jsxs)("div", {
            className: Uu().Ctn,
            children: [
              (0, e.jsx)("div", {
                className: F.EventEditorTextTitle,
                children: (0, s.we)("#MM_MajorUpdate_Review_title"),
              }),
              (0, e.jsx)("div", {
                children: r
                  ? (0, e.jsx)("p", {
                      children: (0, s.oW)(
                        "#MM_MajorUpdate_Review_ticked_created",
                        (0, e.jsx)(te.uU, {
                          href: `${rt.TS.HELP_BASE_URL}en/wizard/HelpRequest/${r}`,
                          className: (0, j.A)(F.EditPreviewButton, F.Button),
                          bForceExternal: !0,
                        }),
                      ),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, s.we)(
                            "#MM_MajorUpdate_Review_desc",
                            Hu,
                          ),
                        }),
                        (0, e.jsx)(ci, {
                          accountID: rt.iA.accountid,
                          partnerID: d,
                          fnSetPartnerID: u,
                          strLabel: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Partner",
                          ),
                          strTooltip: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Partner_ttip",
                          ),
                        }),
                        (0, e.jsx)(_.$n, {
                          onClick: m,
                          children: (0, s.we)("#MM_MajorUpdate_Review_create"),
                        }),
                        (0, e.jsx)(Mn.E, {
                          active: p,
                          children: (0, e.jsx)(Wu, {
                            editModel: t,
                            nPartnerID: d,
                            closeModal: S,
                            fnSetTicketID: c,
                          }),
                        }),
                      ],
                    }),
              }),
            ],
          });
        }
        function Wu(a) {
          const {
              editModel: t,
              nPartnerID: n,
              closeModal: o,
              fnSetTicketID: i,
            } = a,
            l = (0, st.vs)();
          return (
            (0, g.useEffect)(() => {
              l.bLoading ||
                (l.fnSetLoading(!0),
                (async () => {
                  const c = t.GetClanSteamID(),
                    d = t.GetGID(),
                    u = await Qu(
                      c,
                      t.GetAppID(),
                      d,
                      "Requesting Marketing Message Major Update Review",
                      n,
                    );
                  u
                    ? (i(u.reference_code), l.fnSetSuccess(!0))
                    : (l.fnSetError(!0),
                      l.fnSetStrError(
                        (0, s.we)("#Login_Error_Network_Description"),
                      ));
                })());
            }, [n, t, l.bLoading, l, i]),
            (0, e.jsx)(st.Hh, {
              state: l,
              strDialogTitle: (0, s.we)("#MM_MajorUpdate_Review_create"),
              closeModal: o,
            })
          );
        }
        async function Qu(a, t, n, o, i) {
          const l =
              rt.TS.COMMUNITY_BASE_URL +
              "partnereventdata/ajaxrequestmarketingmessagemajorupdatereview",
            r = new URLSearchParams();
          r.append("sessionid", (0, f.KC)()),
            r.append("clanAccountID", "" + a.GetAccountID()),
            r.append("appid", "" + t),
            r.append("gidClanEvent", n),
            r.append("partnerID", "" + i),
            r.append("message", o);
          try {
            let c = await K().post(l, r, { withCredentials: !0 });
            return !c || c.status != 200 || c.data.success != Fe.R
              ? (console.error(
                  "CreateMarketingMessageMajorUpdateReviewRequestTicket failed.",
                  c && (0, ye.H)(c),
                ),
                c.data.success == Fe.Ze ? c.data : null)
              : c.data;
          } catch (c) {
            const d = (0, ye.H)(c);
            console.error(
              "CreateMarketingMessageMajorUpdateReviewRequestTicket failed: " +
                d.strErrorMsg,
              d,
            );
          }
          return null;
        }
        var Yu = Object.defineProperty,
          Ju = Object.getOwnPropertyDescriptor,
          Ku = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Ju(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && Yu(t, n, i), i;
          };
        function Zu(a) {
          const { editModel: t } = a,
            [n, o, i, l, r] = (0, L.q3)(() => [
              t.GetClanSteamID(),
              t.GetGID(),
              t.GetEventType(),
              t.GetEventModel().jsondata.sale_presenters,
              t.BVisible(),
            ]),
            { data: c } = (0, Nt.hM)(t.GetClanAccountID());
          return (0, e.jsx)("div", {
            className: (0, j.A)(q.PublishContainer),
            children: (0, e.jsx)("div", {
              className: (0, j.A)(F.ReachBackground),
              children: (0, e.jsxs)("div", {
                className: ce.EventEditorInputPaneContents,
                children: [
                  (0, e.jsx)(mi, {
                    clanSteamID: n,
                    gidClanEvent: o,
                    rgSalePresenters: l,
                    fnCleanSaleEventPresenters: () => {
                      (t.GetEventModel().jsondata.sale_presenters = void 0),
                        t.SetDirty(b.IQ.jsondata_sales);
                    },
                    bPublishTab: !0,
                    bIsEventVisible: r,
                  }),
                  (0, e.jsx)(Xu, { editModel: t }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(
                      F.FlexRowContainer,
                      q.PublishOptionsCtn,
                    ),
                    children: [
                      (0, e.jsx)(Lu, { editModel: t, bTakePublishAction: !1 }),
                      (0, e.jsx)(Pu, { editModel: t }),
                    ],
                  }),
                  (0, e.jsx)(zu, { editModel: t }),
                  (0, e.jsx)(Bn, {
                    eventType: i,
                    clanSteamID: n,
                    permissions: c,
                  }),
                  (0, e.jsx)("div", { className: F.ClearThings }),
                ],
              }),
            }),
          });
        }
        let Bn = class extends g.Component {
          state = {
            bLoadingClanInfo: !Q.ac.BHasClanInfoLoaded(this.props.clanSteamID),
          };
          async componentDidMount() {
            this.state.bLoadingClanInfo &&
              (await Q.ac.LoadClanInfoForClanSteamID(this.props.clanSteamID),
              this.setState({ bLoadingClanInfo: !1 }));
          }
          render() {
            if (this.props.eventType == T.ajI) return;
            if (this.state.bLoadingClanInfo)
              return (0, e.jsx)("div", {
                className: "ReachCtn",
                children: (0, e.jsx)(N.t, {}),
              });
            let a = G.mh.GetEditModel(),
              t = a.GetCategoryAsType();
            const { permissions: n } = this.props,
              o = Q.ac.GetClanInfoByClanAccountID(
                a.GetClanSteamID().GetAccountID(),
              );
            if (!n?.can_edit) return (0, e.jsx)(g.Fragment, {});
            let i = a.BHasSaleEnabled() || o.is_ogg;
            const r =
              (a.BWillShowOnLibraryOverviewDueToSettings() ||
                a.BWillShowOnLibraryDetailDueToSettings()) &&
              (0, A.Dn)(a.GetEventModel());
            return (0, e.jsxs)("div", {
              className: "ReachCtn",
              children: [
                (0, e.jsx)("div", {
                  className: F.EventEditorTextTitle,
                  children: (0, s.we)("#EventReach_Title"),
                }),
                (0, e.jsxs)("div", {
                  className: q.ReachItems,
                  children: [
                    (0, e.jsx)("div", {
                      className: F.EventEditorTextSubTitle,
                      children: (0, s.we)("#EventReach_SubTitle"),
                    }),
                    (0, e.jsx)("div", {
                      className: q.ReachColumnTitles,
                      children: (0, e.jsx)("div", {
                        className: q.ReachColumnName,
                        children: (0, s.we)("#EventReach_Location"),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: q.ReachItemList,
                      children: [
                        a.BWillShowOnStoreDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: q.ReachSubject,
                            children: [
                              (0, s.we)("#EventReach_GamePage"),
                              (0, e.jsx)(W.o, {
                                tooltip: (0, s.we)("#EventReach_GamePage_ttip"),
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          className: q.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_GameNewsPg"),
                            (0, e.jsx)(W.o, {
                              tooltip: (0, s.we)("#EventReach_GameNewsPg_ttip"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, j.A)(q.ReachSubject),
                          children: [
                            (0, s.we)("#EventReach_PersonalizedCalendar"),
                            (0, e.jsx)(W.o, {
                              tooltip: (0, s.we)(
                                "#EventReach_PersonalizedCalendar_ttip",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: q.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_Community"),
                            (0, e.jsx)(W.o, {
                              tooltip: (0, s.we)("#EventReach_Community_ttip"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: q.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_FriendActivity"),
                            (0, e.jsx)(W.o, {
                              tooltip: (0, s.we)(
                                "#EventReach_FriendActivity_ttip",
                              ),
                            }),
                          ],
                        }),
                        a.BWillShowOnLibraryOverviewDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(q.ReachSubject),
                            children: [
                              (0, s.we)("#EventReach_LibraryHome"),
                              r &&
                                (0, e.jsxs)("span", {
                                  className: q.ReachPendingVisibilityText,
                                  children: [
                                    "  ",
                                    (0, s.we)(
                                      "#EventReach_LibraryVisibilityPendingModeration",
                                    ),
                                  ],
                                }),
                              (0, e.jsx)(W.o, {
                                tooltip: (0, s.we)(
                                  "#EventReach_LibraryHome_ttip",
                                ),
                              }),
                            ],
                          }),
                        a.BWillShowOnLibraryDetailDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(q.ReachSubject),
                            children: [
                              (0, s.we)("#EventReach_LibraryDetail"),
                              r &&
                                (0, e.jsxs)("span", {
                                  className: q.ReachPendingVisibilityText,
                                  children: [
                                    "  ",
                                    (0, s.we)(
                                      "#EventReach_LibraryVisibilityPendingModeration",
                                    ),
                                  ],
                                }),
                              (0, e.jsx)(W.o, {
                                tooltip: (0, s.we)(
                                  "#EventReach_LibraryDetail_ttip",
                                ),
                              }),
                            ],
                          }),
                        !!(
                          a.BIsAllowedInNotifications() &&
                          a.BIsVisibleBeforeStart()
                        ) &&
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(q.ReachSubject, q.Future),
                            children: [
                              (0, s.we)("#EventReach_Future"),
                              " ",
                              (0, s.we)("#EventReach_Reminder"),
                              (0, e.jsx)(W.o, {
                                tooltip: (0, s.we)("#EventReach_Reminder_ttip"),
                              }),
                            ],
                          }),
                        !!a.BIsAllowedInNotifications() &&
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(q.ReachSubject, q.Future),
                            children: [
                              (0, s.we)("#EventReach_Future"),
                              " ",
                              (0, s.we)("#EventReach_EmailRollUp"),
                              (0, e.jsx)(W.o, {
                                tooltip: (0, s.we)(
                                  "#EventReach_EmailRollUp_ttip",
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                    i &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: q.ReachColumnTitles,
                            children: (0, e.jsx)("div", {
                              className: q.ReachColumnName,
                              children: (0, s.we)(
                                "#EventReach_OptionalLocation",
                              ),
                            }),
                          }),
                          o.is_ogg &&
                            (0, e.jsxs)("div", {
                              className: q.ReachItemList,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: q.ReachSubject,
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: q.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(Le.EQ, {
                                          bOn: a
                                            .GetEventModel()
                                            .BHasTag("workshop"),
                                        }),
                                        (0, e.jsx)("span", {
                                          className: q.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_Workshop",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(W.o, {
                                      tooltip: (0, s.we)(
                                        "#EventReach_Workshop_ttip",
                                      ),
                                    }),
                                  ],
                                }),
                                t == T.zeJ && (0, e.jsx)(qu, {}),
                                (0, e.jsxs)("div", {
                                  className: (0, j.A)(q.ReachSubject),
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: q.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(Le.EQ, {
                                          bOn: a
                                            .GetEventModel()
                                            .BShowLibrarySpotlight(),
                                        }),
                                        (0, e.jsx)("span", {
                                          className: q.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_LibraySpotLight",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(W.o, {
                                      tooltip: (0, s.we)(
                                        "#EventReach_LibraySpotLight_ttip",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          a.BHasSaleEnabled() &&
                            (0, e.jsxs)("div", {
                              className: q.ReachItemList,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: q.ReachSubject,
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: q.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(Le.EQ, {
                                          bOn: a.BHasSaleProductBanners(),
                                        }),
                                        (0, e.jsx)("span", {
                                          className: q.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_SaleBanner",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(W.o, {
                                      tooltip: (0, s.we)(
                                        "#EventReach_SaleBanner_ttip",
                                      ),
                                    }),
                                  ],
                                }),
                                !!(
                                  a.BHasSaleProductBanners() &&
                                  a.GetEventStartTime() &&
                                  a.GetEventEndTime()
                                ) &&
                                  (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsx)("br", {}),
                                      (0, e.jsx)("div", {
                                        children: (0, s.PP)(
                                          "#EventReact_SaleBannerDuration",
                                          (0, e.jsx)(Ze.K4, {
                                            dateAndTime: a.GetEventStartTime(),
                                            bSingleLine: !0,
                                          }),
                                          (0, e.jsx)(Ze.K4, {
                                            dateAndTime: Math.min(
                                              a.GetEventEndTime(),
                                              a.GetEventStartTime() +
                                                336 * 60 * 60,
                                            ),
                                            bSingleLine: !0,
                                          }),
                                        ),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
        };
        Bn = Ku([w.PA], Bn);
        function qu(a) {
          const t = G.mh.GetEditModel(),
            n = Mu(Ia.tw.I8, t.GetAppID());
          return (0, e.jsxs)("div", {
            className: q.ReachSubject,
            children: [
              (0, e.jsxs)("span", {
                className: q.ReachSubjectOptional,
                children: [
                  n == null || n == null
                    ? (0, e.jsx)(N.t, {
                        size: "small",
                        string: (0, s.we)("#Loading"),
                      })
                    : (0, e.jsx)(Le.EQ, {
                        bOn: n.some(
                          (o) => o.announcementid == t.GetAnnouncementGID(),
                        ),
                      }),
                  (0, e.jsx)("span", {
                    className: q.ReactSubjectOptionalText,
                    children: (0, s.we)("#EventReach_RecentlyUpdatedPg"),
                  }),
                ],
              }),
              (0, e.jsx)(W.o, {
                tooltip: (0, s.we)("#EventReach_RecentlyUpdatedPg_ttip"),
              }),
            ],
          });
        }
        function Xu(a) {
          const { editModel: t } = a,
            [n, o, i, l, r, c, d, u, p] = (0, L.q3)(() => [
              t.GetEventModel().GID,
              t.GetEventModel().AnnouncementGID,
              t.ComputeEditingModelTimeOverrides(),
              t.BHidden(),
              t.BPublished(),
              t.GetEventVisibilityStartTime(),
              t.GetVisibilitySetting(),
              t.GetEventModel().GetVisibilityStartTimeAndDateUnixSeconds(),
              t.GetEventType() == T.ajI,
            ]);
          let m;
          if (!r)
            if (t.GetStartTimeEditChoice() == b.z8.k_ESpecified)
              switch (d) {
                case b.Fl.event_start:
                  m = (0, e.jsx)("div", {
                    className: q.VisibilityNote,
                    children: (0, e.jsx)("p", {
                      children: (0, s.we)(
                        "#EventEditor_Status_WillBeVisible_EventStart",
                      ),
                    }),
                  });
                  break;
                case b.Fl.specified_time:
                  m = (0, e.jsx)("div", {
                    className: q.VisibilityNote,
                    children: (0, e.jsx)("p", {
                      children: (0, s.PP)(
                        "#EventEditor_Status_WillBeVisible_At",
                        (0, e.jsx)(Ze.K4, { dateAndTime: u, bSingleLine: !0 }),
                      ),
                    }),
                  });
                  break;
                case b.Fl.immediate:
                default:
                  m = (0, e.jsxs)("div", {
                    className: q.VisibilityNote,
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, s.we)(
                          "#EventPublishing_Summary_Immediate",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, s.we)(
                          "#EventPublishing_Summary_ModerationNote",
                        ),
                      }),
                    ],
                  });
              }
            else
              m = (0, e.jsxs)("div", {
                className: q.VisibilityNote,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, s.we)("#EventPublishing_Summary_Immediate"),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, s.we)(
                      "#EventPublishing_Summary_ModerationNote",
                    ),
                  }),
                ],
              });
          const S = (0, $.T7)(t.GetEventModel());
          return (0, e.jsxs)("div", {
            className: q.SummaryContainer,
            children: [
              (0, e.jsx)("div", {
                className: F.EventEditorTextTitle,
                children: (0, s.we)("#EventPublishing_Summary"),
              }),
              (0, e.jsxs)("div", {
                className: q.SummaryItems,
                children: [
                  (0, e.jsxs)("div", {
                    className: q.StatusRow,
                    children: [
                      (0, e.jsx)("div", {
                        className: q.StatusText,
                        children: (0, e.jsx)(Bt.zm, { editModel: t }),
                      }),
                      r &&
                        !l &&
                        !p &&
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)($.tj, {
                            className: (0, j.A)(F.Button, F.Primary),
                            eventModel: t.GetEventModel(),
                            route: $.PH.k_eStoreView,
                            children: (0, s.we)("#EventEditor_ViewLive"),
                          }),
                        }),
                    ],
                  }),
                  !p &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsxs)("div", {
                          className: F.FlexRowContainer,
                          children: [
                            (0, e.jsxs)("span", {
                              children: [
                                (0, e.jsxs)("b", {
                                  children: [
                                    (0, s.we)("#EventDisplay_TimeUpcoming"),
                                    ":",
                                  ],
                                }),
                                "\xA0",
                              ],
                            }),
                            (0, e.jsx)(Ze.K4, {
                              dateAndTime: i.nOverrideStartTime,
                              bSingleLine: !0,
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: F.FlexRowContainer,
                          children: [
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsxs)("b", {
                                  children: [
                                    (0, s.we)(
                                      "#EventPublishing_Summary_VisibilityStart",
                                    ),
                                    ":",
                                  ],
                                }),
                                "\xA0",
                              ],
                            }),
                            !!(r && l) &&
                              (0, e.jsxs)("span", {
                                children: [
                                  (0, s.PP)(
                                    "#EventEditor_Visibility_AutoVisible",
                                    (0, e.jsx)(Ze.K4, {
                                      dateAndTime: c,
                                      bSingleLine: !0,
                                    }),
                                  ),
                                  "\xA0",
                                  (0, s.we)("#EventEditor_Visibility_NoAction"),
                                ],
                              }),
                            m,
                          ],
                        }),
                        !!(n || o) &&
                          (0, e.jsx)("div", {
                            className: q.LinkRow,
                            children: (0, e.jsx)(Au.V, {
                              eventLink: S,
                              labelOverride: "#EventEditor_Status_FutureURL",
                            }),
                          }),
                      ],
                    }),
                  p &&
                    (0, e.jsx)("div", {
                      className: F.FlexRowContainer,
                      children: (0, e.jsx)(Ui, { editModel: t }),
                    }),
                ],
              }),
            ],
          });
        }
        function $u(a) {
          const { bInitiatePublishDialog: t, clanSteamID: n } = a,
            o = (0, Sn.m)("EventInputPane"),
            i = (0, $s.LU)(),
            l = i.GetEventModel();
          (0, g.useEffect)(() => {
            f.UF.IS_CURATOR && Qe.pF.LoadCreatorHome(n, !1, o);
          }, [n, o]);
          const r = (0, g.useCallback)(() => {
              const z = Qe.pF.GetCreatorHome(n);
              return f.iA.is_support &&
                f.UF.CAN_UPLOAD_IMAGES &&
                f.UF.IS_CURATOR &&
                z
                ? !(
                    z.BHasClanAccountFlagSet(qt.Wv.bM) ||
                    z.BHasClanAccountFlagSet(qt.Wv._x) ||
                    z.BHasClanAccountFlagSet(qt.Wv.Jb) ||
                    z.GetNumFollowers() >= 15e3
                  )
                : !1;
            }, [n]),
            { data: c } = (0, Nt.hM)(l.clanSteamID.GetAccountID()),
            d = !!c?.valve_admin,
            u = (0, Q.Yp)(l, d),
            p = (0, L.q3)(() => (0, Xt.C7)(d)),
            m = (0, Q._5)(l, d),
            S = (0, L.q3)(() => (0, Xt.cA)(d)),
            v = (0, Q.Ao)(l);
          (0, Wt.wT)(
            [u.bVisible, m.bVisible, v.bVisible].filter(Boolean).length <= 1,
            "Sale, Update Landing Page, and Creator Home should be mutually exclusive",
          );
          const E = !Xi(i.GetEventModel(), c);
          Q.ac.LoadClanInfoForClanSteamID(n);
          const D = !!Q.ac.GetClanInfoByClanAccountID(n.GetAccountID())
              ?.has_rss_feed,
            C = (z) =>
              window.sessionStorage.setItem(
                "editorCurrentTab",
                `?tab=${z.key}`,
              ),
            M = [
              {
                name: (0, s.we)("#EventEditor_Description_tab"),
                key: "description",
                status: (0, e.jsx)(ua, { fnGetStatus: Xt._P }),
                hidden: v.bVisible,
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Rd, {
                    editModel: i,
                    bInitiatePublishDialog: t,
                    bCanManuallyTagAssociatedApps: D,
                  }),
                }),
                onClick: C,
              },
              {
                name:
                  (v.bValveOnly ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_CreatorHome_Title"),
                key: "creatorhome",
                hidden: !v.bVisible,
                vo_warning:
                  r() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(yn, { mode: Pa, editModel: i }),
                }),
                onClick: C,
              },
              {
                name: (0, s.we)("#EventEditor_Visibility_Title"),
                key: "options",
                status: (0, e.jsx)(ua, { fnGetStatus: Xt.e5 }),
                hidden: v.bVisible,
                contents: (0, e.jsxs)(ve.tH, {
                  children: [
                    (0, e.jsx)(xu, { editModel: i }),
                    (0, e.jsx)("div", { className: x().ClearThings }),
                  ],
                }),
                onClick: C,
              },
              {
                name: (0, s.we)("#EventEditor_Artwork"),
                key: "artwork",
                status: (0, e.jsx)(ua, { fnGetStatus: Xt.uu }),
                hidden: !f.UF.CAN_UPLOAD_IMAGES || v.bVisible,
                vo_warning:
                  r() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(oh, { editModel: i }),
                onClick: C,
              },
              {
                name: (0, s.we)("#Broadcast_tab"),
                key: "broadcast",
                hidden:
                  !f.UF.CAN_UPLOAD_IMAGES ||
                  i.GetClanAccountID() == (0, ea.H)(),
                vo_warning:
                  r() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Je, { editModel: i }),
                }),
                onClick: C,
              },
              {
                name:
                  (l.BHasEmailEnabled() ? "" : "(VO) ") +
                  (0, s.we)("#EventEmail_TabTitle"),
                key: "email",
                hidden: E,
                status:
                  i.GetClanAccountID() == (0, ea.H)()
                    ? (0, e.jsx)(ua, { fnGetStatus: Xt.ER })
                    : void 0,
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(ru, { editModel: i }),
                }),
                onClick: C,
              },
              {
                name:
                  (u.bValveOnly ? "(VO) " : "") + (0, s.we)("#Sale_TabTitle"),
                key: "sale",
                status: (0, e.jsx)(ua, { fnGetStatus: () => p }),
                statusToolTip: p?.ttip,
                hidden: !u.bVisible,
                vo_warning:
                  r() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(yn, { mode: El, editModel: i }),
                }),
                onClick: C,
              },
              {
                name:
                  (m.bValveOnly ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_UpdateLandingPage_Title"),
                key: "updatelandingpage",
                status: (0, e.jsx)(ua, { fnGetStatus: () => S }),
                statusToolTip: S?.ttip,
                hidden: !m.bVisible,
                vo_warning:
                  r() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(yn, { mode: Oa, editModel: i }),
                }),
                onClick: C,
              },
              {
                name: (0, s.we)("#Button_Publish"),
                key: "publishing",
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Zu, { editModel: i }),
                }),
                onClick: C,
              },
              {
                name: "(VO) Debug",
                key: "debug",
                hidden: !d,
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Sl.Oq, { editModel: i }),
                }),
                onClick: C,
              },
              {
                name: "(VO) Stats",
                key: "stats",
                hidden: !d || !l.GID || !l.BHasSaleEnabled(),
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(sc, { editModel: i }),
                }),
                onClick: C,
              },
            ];
          return (0, e.jsxs)(eh, {
            children: [
              (0, e.jsx)(gn.V, { tabs: M }),
              (0, e.jsx)("div", { className: x().ClearThings }),
            ],
          });
        }
        function eh(a) {
          const [t, n] = g.useState();
          return (0, e.jsx)("div", {
            className: be().EventEditorInputPaneContainer,
            children: (0, e.jsxs)(td, {
              elContent: t,
              children: [
                (0, e.jsx)("div", {
                  className: be().EventEditorInputPaneContents,
                  children: a.children,
                }),
                (0, e.jsx)("div", {
                  className: (0, j.A)(x().SaveBackground),
                  children: (0, e.jsx)(sd, { setAdditionalContentDiv: n }),
                }),
              ],
            }),
          });
        }
        const ua = (0, w.PA)(function (t) {
            const n = t.fnGetStatus();
            if (!n) return null;
            const { text: o, complete: i, total: l } = n;
            return (0, e.jsx)(gn.a, {
              statusType: i >= l ? "success" : "danger",
              children: o,
            });
          }),
          so = (0, w.PA)((a) => {
            (0, g.useEffect)(() => {
              Q.ac.LoadOGGClanInfoForIdentifier(a.appid_or_vanity_str);
            }, [a.appid_or_vanity_str]);
            const {
                clanSteamID: t,
                gid: n,
                appid: o,
                bInitiatePublishDialog: i,
                appid_or_vanity_str: l,
              } = a,
              c = !(f.UF.IS_CREATOR_HOME || f.UF.IS_CURATOR)
                ? qe.A.Get().GetApp(o)?.GetName()
                : f.UF.VANITY_ID,
              d = G.mh.GetEditModel();
            return (0, e.jsx)($s.A4, {
              editModel: d,
              children: (0, e.jsxs)("div", {
                className: (0, j.A)(be().wrapper),
                children: [
                  (0, e.jsx)(nd, {
                    clanSteamID: t,
                    appid: o,
                    gid: n,
                    appid_or_vanity_str: l,
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(
                      x().FlexColumnContainer,
                      be().EventEditBelowTopBarContainer,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: be().EventEditBelowTopBarGameName,
                        children: c,
                      }),
                      (0, e.jsxs)("div", {
                        className: be().EventEditBelowTopBarRow,
                        children: [
                          (0, e.jsx)(th, { editModel: d }),
                          (0, e.jsx)(xe.Gq, {
                            toolTipContent: d.GetName(),
                            direction: "bottom",
                            children: (0, e.jsx)("div", {
                              className: be().EventEditBelowTopBarEventName,
                              children: d.GetName(),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: be().maincontent,
                    children: (0, e.jsx)($u, {
                      appid_or_vanity_str: l,
                      appid: o,
                      gid: n,
                      bInitiatePublishDialog: i,
                      clanSteamID: t,
                    }),
                  }),
                  (0, e.jsx)("div", {}),
                ],
              }),
            });
          });
        function th(a) {
          const { editModel: t } = a,
            [n, o, i, l, r, c] = (0, L.q3)(() => [
              t.GetEventModel().bOldAnnouncement,
              t.GetStrVanityOrAppID(),
              t.GetCategoryAsString(),
              t.GetAnnouncementGID(),
              t.BHasGid() ? t.GetGID() : "",
              t.BHasTag("vo_marketing_message"),
            ]),
            { bCanChange: d, strReasonText: u } = (0, Se.NN)(t),
            p = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("span", {
                  children: [(0, s.we)("#EventEditor_TypeTitle"), " "],
                }),
                i,
                d && (0, e.jsx)("img", { src: Cl.A }),
                !d && (0, e.jsx)(W.o, { tooltip: u }),
              ],
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              d &&
                (0, e.jsx)(R.N_, {
                  className: (0, j.A)(
                    be().EventEditBelowTopBarCategoryChoice,
                    be().AllowHover,
                  ),
                  to: n ? Y.GY.MigrateCategory(o, l) : Y.GY.Category(o, r),
                  children: p,
                }),
              !d &&
                (0, e.jsx)("div", {
                  className: be().EventEditBelowTopBarCategoryChoice,
                  children: p,
                }),
            ],
          });
        }
        function ah() {
          const a = (0, ti.il)(),
            t = G.mh.GetEditModel(),
            [n, o] = (0, g.useState)(!1);
          return (
            (0, g.useEffect)(() => {
              if (!t?.BTagsNeedResync()) return;
              let i = !1;
              return (
                (0, ti.I9)(a, t)
                  .then((l) => {
                    !i &&
                      l.length > 0 &&
                      (0, ei.pY)(
                        (0, s.we)(
                          "#EventEditor_TagResyncIncomplete",
                          l.length,
                          l
                            .slice(0, 10)
                            .map((r) => r.type + " " + r.id)
                            .join(", "),
                        ),
                        window,
                      );
                  })
                  .catch((l) => {
                    console.error(
                      "Failed to rebuild the stripped tags for this event",
                      l,
                    ),
                      i || o(!0);
                  }),
                () => {
                  i = !0;
                }
              );
            }, [t, a]),
            { bResyncing: !!t?.BTagsNeedResync() && !n, bFailed: n }
          );
        }
        const nh = (0, w.PA)(function (t) {
            const n = (0, g.useMemo)(() => new X.b(f.UF.CLANSTEAMID), []),
              { bResyncing: o, bFailed: i } = ah();
            return o
              ? (0, e.jsxs)("div", {
                  className: $t().FlexCenter,
                  children: [
                    (0, e.jsx)(N.t, {}),
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEditor_TagResyncProgress"),
                    }),
                  ],
                })
              : i
                ? (0, e.jsx)(Bt.XW, {
                    strErrorMsg: (0, s.we)("#EventEditor_TagResyncFailed"),
                    appid_or_vanity_str: t.match.params.appid_or_vanity_str,
                  })
                : (0, e.jsx)(so, {
                    appid_or_vanity_str: t.match.params.appid_or_vanity_str,
                    appid: f.UF.APPID,
                    gid: t.match.params.gid,
                    clanSteamID: n,
                    bInitiatePublishDialog: t.bInitiatePublishDialog,
                  });
          }),
          On = (0, Ma.L)(nh);
        class sh extends g.Component {
          m_bRedirect = !1;
          constructor(t) {
            super(t),
              (this.m_bRedirect =
                G.mh.GetEditModel() === void 0 ||
                G.mh.GetEditModel().GetCategoryAsType() == T.DRF);
          }
          render() {
            return this.m_bRedirect
              ? (0, e.jsx)(Ae.rd, {
                  to: Y.GY.Category(
                    this.props.match.params.appid_or_vanity_str,
                    "",
                  ),
                })
              : (0, e.jsx)(On, { ...this.props });
          }
        }
        function ih(a) {
          return a ? a.filter(Boolean).length : 0;
        }
        function oh(a) {
          const { editModel: t } = a,
            n = (0, oe.Dd)(t.GetClanSteamID(), !0),
            [o, i, l, r, c, d, u, p, m, S] = (0, L.q3)(() => [
              t.GetEventType(),
              !!t.GetEventModel().BHasTag("steam_best_of_year"),
              t.GetClanSteamID(),
              t.GetEventModel().vecTags,
              t.GetIncludedRealmList(),
              t.GetEventType() === T.HFK,
              ih(t.GetEventModel().jsondata.localized_spotlight_image),
              t.BAllowedSteamStoreSpotlight(),
              t.GetAppID(),
              Ec(t, n),
            ]),
            v = ["background", "capsule"];
          u > 0
            ? v.push("spotlight")
            : f.UF.IS_OGG &&
              p &&
              (v.push("localized_store_app_spotlight"),
              v.push("localized_store_app_spotlight_mobile")),
            i && v.push("bestofyear_banner", "bestofyear_banner_mobile");
          const E = v.includes("spotlight"),
            D = v.includes("localized_store_app_spotlight"),
            C = v.includes("localized_store_app_spotlight_mobile");
          return (0, e.jsxs)(ve.tH, {
            children: [
              (0, e.jsxs)("div", {
                className: be().ArtworkTipsCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: be().ArtworkTips,
                    children: [
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, s.we)("#selectimage_tip3_title"),
                          }),
                          ": ",
                          (0, s.PP)(
                            "#selectimage_tip3",
                            (0, e.jsxs)("span", {
                              children: [
                                (0, e.jsx)("br", {}),
                                (0, e.jsx)("a", {
                                  target: f.TS.IN_CLIENT ? void 0 : "_blank",
                                  href: "https://partner.steamgames.com/doc/store/localization#supported_languages",
                                  children: (0, s.we)(
                                    "#selectimage_see_documentation",
                                  ),
                                }),
                              ],
                            }),
                          ),
                        ],
                      }),
                      (0, e.jsx)("p", {
                        children: (0, e.jsx)("a", {
                          href: "https://www.dropbox.com/scl/fo/cvkwbosmrimklcl9h0qko/AF5IPErKP-mQM_3YO1Dw2lA?rlkey=b3ad0izykq367g4luasrinw9z&dl=0",
                          download: !0,
                          children: (0, s.we)("#selectimage_downloadtemplate"),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("a", {
                    href: "https://partner.steamgames.com/doc/marketing/event_tools/event_examples",
                    className: be().ArtworkDocs,
                    target: f.TS.IN_CLIENT ? void 0 : "_blank",
                    children: [
                      (0, e.jsx)("div", {
                        className: be().ArtworkExampleCtn,
                        children: (0, e.jsx)("img", {
                          className: be().ArtworkExampleThumbnail,
                          src: f.TS.IMG_URL + "events/thumb_library_home.jpg",
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: be().ArtworkExampleTitle,
                        children: (0, s.we)("#selectimage_viewExamples"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(vn.t, {
                clanSteamID: l,
                rgSupportArtwork: v,
                fnSetImageURL: t.SetImageURL,
                bAllowPreviousClanImageSelection: !0,
                rgRealmList: c,
              }),
              (0, e.jsx)(Oe.it, {
                clanSteamID: l,
                appid: m,
                eventModel: t.GetEventModel(),
                title: (0, s.we)("#EventEditor_ArtworkType_capsule"),
                artworkType: "capsule",
                fnLangHasData: t.BHasTitleImage,
                fnSetImageURL: t.SetImageURL,
                fnGetImageHashAndExt: t.GetImageHashAndExt,
                headerHint: (0, Qt.bc)(o, r) ? Oe.uE.k_Required : void 0,
                elEventArtworkExample: (0, e.jsx)(va, {
                  artworkType: "capsule",
                }),
                partnerEventStore: G.mh,
              }),
              (0, e.jsx)(Oe.it, {
                clanSteamID: l,
                appid: m,
                eventModel: t.GetEventModel(),
                title: (0, s.we)("#EventEditor_ArtworkType_background"),
                fnLangHasData: t.BHasTitleImage,
                fnSetImageURL: t.SetImageURL,
                fnGetImageHashAndExt: t.GetImageHashAndExt,
                artworkType: "background",
                headerHint: Oe.uE.k_Suggested,
                elEventArtworkExample: (0, e.jsx)(va, {
                  artworkType: "background",
                }),
                partnerEventStore: G.mh,
              }),
              !!(d && (D || C || E)) &&
                (0, e.jsxs)("div", {
                  className: re().ArtworkSelectorContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: re().Title,
                      children: (0, s.we)(
                        "#EventEditor_ArtworkType_store_spotlight",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, j.A)(re().SelectImageBlock, re().Tips),
                      children: (0, s.we)(
                        "#EventEditor_ArtworkType_SpotlightNotSupport",
                        t.GetCategoryAsString(),
                      ),
                    }),
                    (0, e.jsx)("br", {}),
                  ],
                }),
              !!(D && !d) &&
                (0, e.jsx)(Oe.it, {
                  clanSteamID: l,
                  appid: m,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)(
                    "#EventEditor_ArtworkType_localized_store_app_spotlight",
                  ),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "localized_store_app_spotlight",
                  elEventArtworkExample: (0, e.jsx)(va, {
                    artworkType: "localized_store_app_spotlight",
                  }),
                  headerHint: Oe.uE.k_Requested,
                  partnerEventStore: G.mh,
                }),
              !!(C && !d) &&
                (0, e.jsx)(Oe.it, {
                  clanSteamID: l,
                  appid: m,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)(
                    "#EventEditor_ArtworkType_localized_store_app_spotlight_mobile",
                  ),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "localized_store_app_spotlight_mobile",
                  elEventArtworkExample: (0, e.jsx)(va, {
                    artworkType: "localized_store_app_spotlight_mobile",
                  }),
                  headerHint: Oe.uE.k_Requested,
                  partnerEventStore: G.mh,
                }),
              !!(E && !d) &&
                (0, e.jsx)(Oe.it, {
                  clanSteamID: l,
                  appid: m,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)("#EventEditor_ArtworkType_store_spotlight"),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "spotlight",
                  headerHint: (0, Qt.Ch)(o) ? Oe.uE.k_Suggested : void 0,
                  elEventArtworkExample: (0, e.jsx)(va, {
                    artworkType: "spotlight",
                  }),
                  partnerEventStore: G.mh,
                }),
              !!f.UF.IS_OGG &&
                (0, e.jsx)(Oe.it, {
                  clanSteamID: l,
                  appid: m,
                  eventModel: t.GetEventModel(),
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  title: (0, s.we)("#EventEditor_ArtworkType_hero"),
                  fnLangHasData: t.BHasTitleImage,
                  artworkType: "hero",
                  partnerEventStore: G.mh,
                }),
              !!i &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(Oe.it, {
                      clanSteamID: l,
                      appid: m,
                      eventModel: t.GetEventModel(),
                      fnLangHasData: t.BHasTitleImage,
                      fnSetImageURL: t.SetImageURL,
                      fnGetImageHashAndExt: t.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_bestofyear_banner",
                      ),
                      artworkType: "bestofyear_banner",
                      partnerEventStore: G.mh,
                    }),
                    (0, e.jsx)(Oe.it, {
                      clanSteamID: l,
                      appid: m,
                      eventModel: t.GetEventModel(),
                      fnLangHasData: t.BHasTitleImage,
                      fnSetImageURL: t.SetImageURL,
                      fnGetImageHashAndExt: t.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_bestofyear_banner_mobile",
                      ),
                      artworkType: "bestofyear_banner_mobile",
                      partnerEventStore: G.mh,
                    }),
                  ],
                }),
              !!S && (0, e.jsx)(xc, { editModel: t }),
            ],
          });
        }
        var $a = h(9608),
          lh = h(77008),
          rh = h(85528),
          Aa = h(75779),
          dh = h(30454);
        async function ch() {
          const a = await (0, dh.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!a.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return a.counts;
        }
        const uh = 300 * 1e3;
        function hh() {
          return ["DeckCompatCounts"];
        }
        function mh() {
          return {
            queryKey: hh(),
            queryFn: () => ch(),
            staleTime: uh,
            retry: !1,
          };
        }
        function ph() {
          const { data: a } = (0, Sa.I)(mh());
          return a;
        }
        function _h(a, t) {
          switch (t) {
            case Aa.sd:
              return a?.playable;
            case Aa.V8:
              return a?.unsupported;
            default:
              return a?.verified;
          }
        }
        var ke = h(70187),
          vh = h(36549),
          Pn = h(39153),
          io = h(47610),
          gh = h(18860),
          Rn = h(87805);
        function oo(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, ke.j$)(a.args)),
            o = g.useMemo(() => {
              if (t)
                return t.jsondata.sale_sections?.find(
                  (i) =>
                    i.section_type == "vo_internal" &&
                    (i.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      i.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [t]);
          if (n && o) {
            const i = Number.parseInt((0, ke.j$)(a.args, "depositpackageid")),
              l = Number.parseInt((0, ke.j$)(a.args, "psulesspackageid")),
              r = (0, ke.j$)(a.args, "out_of_stock_override"),
              c = (0, ke.j$)(a.args, "delivery_override"),
              d = (0, ke.j$)(a.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(Sh, {
              section: o,
              reservationPackageID: n,
              depositPackageID: i,
              psuLessPackageID: l,
              strOutOfStockOverride: r,
              strDeliveryOverride: d || c,
              bDeliveryOverrideOnlyIfOutOfStock: !!d,
              PreviewActions: a.PreviewActions,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        function Sh(a) {
          const {
              reservationPackageID: t,
              depositPackageID: n,
              bIsPreview: o,
              psuLessPackageID: i,
              strOutOfStockOverride: l,
              strDeliveryOverride: r,
              bDeliveryOverrideOnlyIfOutOfStock: c,
              section: d,
              PreviewActions: u,
            } = a,
            { data: p } = (0, io.DR)(t),
            { data: m } = (0, io.DR)(i),
            S = (0, g.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + t,
                  reservation_package: t,
                  deposit_package: n,
                  localized_reservation_desc: (0, It.$Y)([], T.bP9, null),
                  localized_out_of_stock_override: (0, It.$Y)(
                    [l || null],
                    T.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, It.$Y)(
                    [r || null],
                    T.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!c,
                  psu_less_package: i,
                },
              ],
              [t, n, l, r, c, i],
            );
          if (!p || (i && !m))
            return (0, e.jsx)(N.t, {
              string: (0, s.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const v = !ja.iA.logged_in || !p.account_restricted_from_purchasing,
            E =
              p.reservation_state == gh.G.k_EPurchaseReservationState_Reserved
                ? p
                : void 0;
          return (0, e.jsxs)(ve.tH, {
            children: [
              u &&
                (0, e.jsx)(g.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(u, {
                    bIsPreview: !!o,
                    rgReservationDef: S,
                  }),
                }),
              !!p.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: S[0].unique_id,
                  children: [
                    (0, e.jsx)(Rn.b, {
                      reservationDef: S[0],
                      hardwareDetail: p,
                      bPSULessModel: !1,
                      reservedHardwareDetail: E,
                    }),
                    v &&
                      (0, e.jsx)(Rn.p, {
                        section: d,
                        reservationDef: S[0],
                        hardwareDetail: p,
                        reservedHardwareDetail: E,
                      }),
                    m &&
                      m?.allow_purchase_in_country &&
                      (0, e.jsx)(Rn.b, {
                        reservationDef: S[0],
                        hardwareDetail: m,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var Eh = h(6878),
          xh = h(21035),
          lo = h(72865),
          fh = h(38081),
          kn = h.n(fh),
          ha = h(69596),
          jh = h(10026),
          bh = h.n(jh),
          Ch = h(19298),
          wh = h(11996),
          Dh = h(19047),
          ro = h(89926),
          yh = h(32545),
          Fn = h.n(yh);
        function Th(a) {
          const { appID: t, classOverride: n, styleOverride: o } = a,
            [i, l] = (0, g.useState)(!1),
            r = (0, Sn.m)("GameHoverFollowButton"),
            { elDialogElement: c, fnShowLogonDialog: d } = (0, ro.l)(),
            u = (0, wh.Fh)(t),
            { mutateAsync: p } = (0, Dh.L)(t, !u, void 0),
            m = async (S) => {
              S.preventDefault(),
                S.stopPropagation(),
                f.iA.logged_in
                  ? (l(!0), await p(), r.token.reason || l(!1))
                  : d();
            };
          return (0, e.jsxs)(Ch.Z, {
            className: (0, j.A)(Fn().FollowButton, n),
            onClick: m,
            style: o,
            children: [
              u ? (0, e.jsx)(ut.pPV, {}) : (0, e.jsx)(ut.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, j.A)(
                  Fn().FollowButtonText,
                  i && Fn().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, s.we)(
                  u ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              c,
            ],
          });
        }
        function Ih(a) {
          const { appid: t, color: n, bgcolor: o } = a,
            i = (0, lo.n9)();
          return (0, e.jsx)(Th, {
            appID: t,
            classOverride: (0, j.A)(
              kn().FollowGameButtonNotTop,
              bh().BBCodeFollowButton,
            ),
            styleOverride: { color: n, backgroundColor: o },
          });
        }
        function Ah(a) {
          const t = Number(a.args.appid);
          if (!t) return null;
          const n = (0, ha.O)(a.args.color, "black"),
            o = (0, ha.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(Ih, { appid: t, color: n, bgcolor: o });
        }
        var Un = h(57646);
        function Gh(a) {
          const t = Number(a.args.packageid);
          return t
            ? (0, e.jsx)(Un.eF, {
                packageID: t,
                display_style: (0, Un._w)(a.args.display),
              })
            : null;
        }
        function Lh(a) {
          const t = Number(a.args.packageid),
            n = Number(a.args.compareid);
          return !t || !n
            ? null
            : (0, e.jsx)(Un.hJ, { packageID: t, compareID: n });
        }
        function Nh(a) {
          const t = a.args[""]?.trim();
          return t
            ? (0, e.jsx)("div", { className: t, children: a.children })
            : (0, e.jsx)(e.Fragment, { children: a.children });
        }
        var Mh = h(18657),
          co = h.n(Mh),
          Bh = h(63026);
        function Oh(a) {
          const { clanAccountID: t, color: n, bgcolor: o } = a,
            [i, l] = g.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, j.A)(co().BBCodeFollowButton, i && co().isHovered),
            onMouseEnter: () => l(!0),
            onMouseLeave: () => l(!1),
            children: (0, e.jsx)(Bh.Q, {
              nCreatorAccountID: t,
              classOverride: kn().FollowGameButtonNotTop,
              styleOverride: { color: n, backgroundColor: o },
              followType: "group",
            }),
          });
        }
        function Ph(a) {
          const { event: t } = a.context,
            n = Number(a.args.groupid) || t?.clanSteamID.GetAccountID();
          if (!n) return null;
          const o = (0, ha.O)(a.args.color, "black"),
            i = (0, ha.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(Oh, { clanAccountID: n, color: o, bgcolor: i });
        }
        var Rh = h(83482),
          kh = h(44267),
          Fh = h(9202),
          uo = h.n(Fh);
        function Uh(a) {
          const { appid: t, color: n, bgcolor: o } = a,
            i = (0, lo.n9)(),
            l = (0, Wi.$5)(t),
            r = (0, Rh.L3)(i);
          return (0, e.jsx)("div", {
            className: uo().WishlistHoverCtn,
            children: (0, e.jsx)(kh.E, {
              snr: r,
              id: l,
              classOverride: (0, j.A)(
                kn().WishlistButtonNotTop,
                uo().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: n, backgroundColor: o },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function zh(a) {
          const t = Number(a.args.appid);
          if (!t) return null;
          const n = (0, ha.O)(a.args.color, "black"),
            o = (0, ha.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(Uh, { appid: t, color: n, bgcolor: o });
        }
        let zn = null;
        function Hh() {
          return (
            zn == null &&
              (zn = new Map([
                ["wishlist", { Constructor: zh, autocloses: !1 }],
                ["followgroup", { Constructor: Ph, autocloses: !1 }],
                ["classname", { Constructor: Nh, autocloses: !1 }],
                ["price", { Constructor: Gh, autocloses: !1 }],
                ["pricesavings", { Constructor: Lh, autocloses: !1 }],
                ["reservationbutton", { Constructor: oo, autocloses: !1 }],
              ])),
            zn
          );
        }
        var Vh = h(37656),
          ft = h(29868);
        function ho(a) {
          return a < 10 ? "0" + a : a;
        }
        function Wh(a) {
          const { giveawayid: t } = a,
            n = (0, Vh.w)(t),
            {
              bLoadingGiveawayInfo: o,
              winner_count: i,
              closed: l,
              seconds_until_drawing: r,
            } = n;
          return o
            ? null
            : (0, e.jsxs)("div", {
                className: ft.countdownCtn,
                children: [
                  !!l &&
                    (0, e.jsx)("div", {
                      className: ft.Closed,
                      children:
                        i > 0
                          ? (0, s.we)("#Giveaway_Closed", (0, lt.D)(i))
                          : (0, s.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !l &&
                    (0, e.jsxs)(g.Fragment, {
                      children: [
                        r <= 0
                          ? (0, e.jsxs)("div", {
                              className: ft.Throbber,
                              children: [
                                (0, e.jsx)(N.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, s.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: ft.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: ft.CountDownTime,
                                  children:
                                    ho(Math.floor(r / 60)) + ":" + ho(r % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: ft.CountDownText,
                                  children: [
                                    (0, s.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, s.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        i > 0 &&
                          (0, e.jsxs)("div", {
                            className: ft.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: ft.WinnerCount,
                                children: (0, lt.D)(i),
                              }),
                              (0, e.jsx)("div", {
                                className: ft.WinnerText,
                                children: (0, s.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var Qh = h(88245),
          Yh = h(35702),
          Jh = h(39256),
          Kh = h(4720),
          Zh = h(32630),
          qh = h(57810),
          Xh = h(20122),
          mo = h(81416);
        function $h(a) {
          const { eventModel: t, nEventBadgeID: n } = a,
            o = (0, Yh.fy)(n);
          if (o?.level > 0) {
            let i = o.level;
            if (t?.BHasSaleEnabled()) {
              const l = t.GetSaleSectionsByType("badge_progress");
              if (l?.length == 1) {
                const r = l[0].badge_progress;
                if (r?.event_badgeid == n && r?.granted_by_discovery_queue) {
                  const c = r.levels[r.levels.length - 1].level;
                  return (0, e.jsx)(em, {
                    eventModel: t,
                    nBadgeLevel: i,
                    nMaxLevel: c,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, lt.D)(i),
            });
          }
          return null;
        }
        function em(a) {
          const { eventModel: t, nBadgeLevel: n, nMaxLevel: o } = a,
            i = g.useMemo(() => {
              const u = t
                .GetSaleSections()
                .filter((p) => p.section_type == "discoveryqueue");
              return u?.length > 0 ? u[0] : null;
            }, [t]),
            { storePageFilter: l, eStoreDiscoveryQueueType: r } = g.useMemo(
              () => (0, Zh.lx)(t, i),
              [t, i],
            ),
            c = (0, qh.Uf)(r, l),
            d = Math.min(n + c, o);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, lt.D)(d),
          });
        }
        function tm(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, ke.j$)(a.args, "eventid"));
          return f.iA.logged_in && n
            ? (0, e.jsx)($h, { nEventBadgeID: n, eventModel: t })
            : null;
        }
        function am(a) {
          const { nDoorIndex: t, children: n } = a,
            o = (0, Pn.OM)(t),
            i = (0, Pn.gP)(),
            [l, r] = g.useState(!1),
            [c, d] = g.useState(!1),
            { elDialogElement: u, fnShowLogonDialog: p } = (0, ro.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.$n, {
                disabled: o,
                onClick: (m) => {
                  l ||
                    (f.iA.logged_in
                      ? (r(!0),
                        i({ iDoorIndex: t })
                          .then((S) => {
                            S || d(!0), r(!1);
                          })
                          .catch(() => {
                            d(!0), r(!1);
                          }))
                      : p());
                },
                children: c
                  ? (0, e.jsx)("div", {
                      children: (0, s.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!l && (0, e.jsx)(N.t, { size: "small" }),
                        !!o && (0, e.jsx)(ut.Jlk, {}),
                        n,
                      ],
                    }),
              }),
              u,
            ],
          });
        }
        function nm(a) {
          const t = Number.parseInt((0, ke.j$)(a.args)) || 0;
          return t >= 0 && t < 32
            ? (0, e.jsx)(am, { nDoorIndex: t, children: a.children })
            : null;
        }
        const sm = (0, Ae.y)(Xh.H);
        function im(a) {
          const t = Number.parseInt((0, ke.j$)(a.args)),
            { event: n, showErrorInfo: o } = a.context;
          if (t) {
            const i = n?.jsondata?.sale_sections?.findIndex(
              (l) => l.unique_id == t,
            );
            if (i >= 0) {
              const l = n.GetDayIndexFromEventStart();
              return (0, e.jsx)(dt.Cs, {
                location: o ? dt.HY : dt.bs,
                children: (0, e.jsx)(sm, {
                  event: n,
                  section: n.jsondata.sale_sections[i],
                  activeTab: new Kh.y(null, l),
                  language: a.language,
                  nSaleDayIndex: l,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: o
                    ? mo.S.EPreviewMode_Enabled
                    : mo.S.EPreviewMode_Disabled,
                }),
              });
            } else if (o)
              return (0, e.jsxs)("div", {
                className: Jh.ErrorDiv,
                children: ["Error could not find sale section ", t],
              });
          }
          return null;
        }
        let Hn = null;
        function om() {
          return (
            Hn == null &&
              (Hn = new Map([
                ...Array.from(Hh().entries()),
                [
                  "itemdef",
                  {
                    Constructor: lm,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: Ah, autocloses: !1 }],
                ["deckcompatcount", { Constructor: rm, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: dm, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: mm, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: cm, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: tm, autocloses: !1 }],
                ["optindoorquest", { Constructor: nm, autocloses: !1 }],
                ["localize", { Constructor: hm, autocloses: !1 }],
                ["salesection", { Constructor: im, autocloses: !1 }],
                ["reservationbutton", { Constructor: _m, autocloses: !1 }],
              ])),
            Hn
          );
        }
        function lm(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, ke.j$)(a.args, "appid")),
            o = Number.parseInt((0, ke.j$)(a.args, "itemdefid")),
            i = Number.parseInt((0, ke.j$)(a.args, "maxquantity")),
            l = (0, ke.j$)(a.args, "calltoaction");
          return !(0, Qh.gS)(n, o, !1) || !t
            ? (0, e.jsx)(N.t, {
                size: "small",
                position: "center",
                string: (0, s.we)("#Loading"),
              })
            : (0, e.jsx)(xh.f, {
                language: a.language,
                clanAccountID: t.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: n, nItemDefID: o, max_quantity: i },
                strCallToAction: l,
              });
        }
        function rm(a) {
          const t = ph();
          if (!t) return (0, e.jsx)(N.t, { size: "small" });
          const n = Number.parseInt((0, ke.j$)(a.args));
          return (0, e.jsx)("span", { children: (0, lt.D)(Number(_h(t, n))) });
        }
        function dm(a) {
          const t = (0, vh.jR)(f.iA.accountid, "library");
          if (!t) return (0, e.jsx)(N.t, { size: "small" });
          const n = Number.parseInt((0, ke.j$)(a.args));
          let o = t.verifiedList?.length || 0;
          switch (n) {
            case Aa.sd:
              o = t.playableList?.length || 0;
              break;
            case Aa.V8:
              o = t.unsupportedList?.length || 0;
              break;
            case Aa.YX:
              o = t.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, lt.D)(Number(o)) });
        }
        function cm(a) {
          const t = Number.parseInt((0, ke.j$)(a.args)),
            n =
              "hide" in a.args && !!Number.parseInt((0, ke.j$)(a.args, "hide"));
          return t >= 0
            ? (0, e.jsx)(um, { nDoorIndex: t, bHide: n, children: a.children })
            : null;
        }
        function um(a) {
          const { nDoorIndex: t, bHide: n, children: o } = a,
            i = (0, Pn.OM)(t);
          return i == null
            ? null
            : (i && !n) || (!i && n)
              ? (0, e.jsx)(e.Fragment, { children: a.children })
              : null;
        }
        function hm(a) {
          return (0, e.jsx)("span", {
            className: Eh.LocalizeBlock,
            children: (0, s.oW)(
              a.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function mm(a) {
          let t = (0, ke.j$)(a.args);
          return t
            ? (0, e.jsx)(Wh, { giveawayid: t })
            : (0, e.jsx)(g.Fragment, {});
        }
        const pm = void 0;
        function _m(a) {
          return (0, e.jsx)(oo, { ...a, PreviewActions: pm });
        }
        var vm = h(93464),
          gm = h(10303),
          _p = h(83492),
          Sm = h(90783),
          Em = h(39567),
          xm = Object.defineProperty,
          fm = Object.getOwnPropertyDescriptor,
          jm = (a, t, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? fm(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (i = (o ? r(t, n, i) : r(i)) || i);
            return o && i && xm(t, n, i), i;
          };
        let Vn = class extends $a.mn {
          state = { bLoading: !0 };
          GetRedirectRender() {
            return (0, e.jsx)(Ae.rd, {
              push: !0,
              to: Y.GY.Edit(
                this.props.match.params.appid_or_vanity_str,
                this.state.redirectToGIDEvent,
              ),
            });
          }
          render() {
            let a = super.render();
            return (
              a ??
              (0, e.jsx)(so, {
                appid: rt.UF.APPID,
                appid_or_vanity_str:
                  this.props.match.params.appid_or_vanity_str,
                gid: "",
                clanSteamID: this.m_clanSteamID,
              })
            );
          }
        };
        Vn = jm([w.PA], Vn);
        const bm = (0, Ma.L)(Cm);
        function Cm(a) {
          const t = G.mh.GetEditModel(),
            n = t.GetEventModel(),
            [o, i] = g.useState();
          if ((g.useEffect(() => Ys(n, i), [n]), o))
            switch (o) {
              case "clone":
                return (0, e.jsx)(Ae.rd, {
                  push: !0,
                  to: Y.GY.Edit(a.match.params.appid_or_vanity_str, ""),
                });
              case "edit":
                return (0, e.jsx)($.OG, {
                  eventModel: n,
                  route: $.PH.k_eCommunityEdit,
                });
              case "view":
                return n.BIsVisibleEvent()
                  ? (0, e.jsx)($.OG, { eventModel: n, route: $.PH.k_eView })
                  : (0, e.jsx)($.OG, {
                      eventModel: n,
                      route: $.PH.k_eCommunityPreview,
                    });
              default:
                console.log(
                  "EventCloneLandingInternal - Unexpected Case - " + o,
                );
            }
          return (0, e.jsx)($.tj, {
            eventModel: t.GetEventModel(),
            route: $.PH.k_eCommunityAdminPage,
            children: (0, s.we)("#EventDisplay_ReturnToDashboard"),
          });
        }
        function wm(a) {
          const [t, n] = g.useState(!0),
            o = (0, Em.vb)(f.TS.LANGUAGE);
          return (
            g.useEffect(() => {
              rh.Vw.Init(new lh.D(f.TS.WEBAPI_BASE_URL)),
                pe.O3.Init(),
                G.mh.Init(),
                n(!1);
            }, []),
            t || !o
              ? (0, e.jsx)(N.t, {
                  position: "center",
                  size: "medium",
                  string: (0, s.we)("#Loading"),
                })
              : (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(vm.d3, {
                    dictionary: om(),
                    children: (0, e.jsxs)(gm.I.Provider, {
                      value: { bCanUseLink: !0 },
                      children: [
                        (0, e.jsx)(Bt.EB, {}),
                        (0, e.jsxs)(Ae.dO, {
                          children: [
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.Home(":appid_or_vanity_str"),
                              component: qs,
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.List(":appid_or_vanity_str"),
                              component: qs,
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.Create(":appid_or_vanity_str"),
                              component: Se.A9,
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.Category(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (i) =>
                                (0, g.createElement)(Se.A9, {
                                  ...i,
                                  key: i.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.EditRedirectToCategory(
                                ":appid_or_vanity_str",
                              ),
                              render: (i) => (0, e.jsx)(sh, { ...i }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.Edit(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (i) =>
                                (0, g.createElement)(On, {
                                  ...i,
                                  key: i.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.Clone(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (i) =>
                                (0, g.createElement)(bm, {
                                  ...i,
                                  key: i.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.Publish(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (i) =>
                                (0, g.createElement)(On, {
                                  ...i,
                                  key: i.match.params.gid,
                                  bInitiatePublishDialog: !0,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.PreviewSale(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (i) =>
                                (0, g.createElement)(_n, {
                                  ...i,
                                  key: i.match.params.gid,
                                  mode: "previewsale",
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.Preview(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (i) =>
                                (0, g.createElement)(_n, {
                                  ...i,
                                  key: i.match.params.gid,
                                  mode: "preview",
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.View(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)",
                              ),
                              render: (i) =>
                                (0, g.createElement)(_n, {
                                  ...i,
                                  key: i.match.params.gid,
                                  mode: "view",
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.Migrate(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (i) =>
                                (0, g.createElement)(Vn, {
                                  ...i,
                                  key: i.match.params.oldAnnouncementGID,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.MigrateCategory(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (i) =>
                                (0, g.createElement)($a.pl, {
                                  ...i,
                                  key: i.match.params.oldAnnouncementGID,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.ViewOldAnnouncement(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (i) =>
                                (0, g.createElement)($a.Io, {
                                  ...i,
                                  key: i.match.params.oldAnnouncementGID,
                                  bClearDirty: !0,
                                  bPreview: !1,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: Y.GY.PreviewOldAnnouncement(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (i) =>
                                (0, g.createElement)($a.Io, {
                                  ...i,
                                  key: i.match.params.oldAnnouncementGID,
                                  bClearDirty: !0,
                                  bPreview: !0,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, { component: Sm.a }),
                          ],
                        }),
                      ],
                    }),
                  }),
                })
          );
        }
      },
      6864: (P, Re, h) => {
        "use strict";
        h.d(Re, { p: () => _, s: () => ie });
        var e = h(7850),
          g = h(90626),
          Y = h(19316),
          G = h(95695),
          Se = h.n(G),
          T = h(85143),
          de = h(11243),
          K = h(18210),
          w = h(91126),
          R = h.n(w),
          A = h(56585),
          H = h(99412),
          ee = h(35766),
          X = h(85599),
          Q = h(36118);
        function ie(Le) {
          const { editModel: F } = Le,
            [x, s] = g.useState(H.xPp),
            [he, f] = g.useState(!1),
            [y, te] = g.useState(null),
            ae = (I) => {
              const V = I.target.value;
              if (V === "all") s(H.xPp);
              else {
                const se = (0, H.sfN)(V);
                s(se);
              }
            },
            pe = F.GetClanSteamID(),
            ge = F.GetGID(),
            _e = (0, A.Wj)(pe, ge),
            [, B] = g.useReducer((I) => I + 1, 0),
            N =
              _e.isSuccess &&
              _e.data?.crowdin_project_id &&
              _e.data?.crowdin_file_id
                ? `https://valve.crowdin.com/editor/${_e.data.crowdin_project_id}/${_e.data.crowdin_file_id}`
                : null,
            we = (I) => {
              F.SetPushSourceToCrowdInAutomatically(I), B();
            },
            He = (0, A.IW)(pe.ConvertTo64BitString(), ge, x),
            ne = () => {
              f(!0),
                He.mutateAsync()
                  .then(() => window.location.reload())
                  .catch((I) => {
                    te(I.toString()), f(!1);
                  })
                  .then(() => {
                    te(null);
                  });
            };
          return _e.isLoading
            ? null
            : (0, e.jsxs)(T.Eb, {
                clanSteamID: Le.editModel.GetClanSteamID(),
                children: [
                  (0, e.jsx)(ee.mt, {
                    active: he,
                    children: (0, e.jsx)(X.t, {}),
                  }),
                  (0, e.jsxs)("div", {
                    className: R().ValveCrowdInSyncCtn,
                    children: [
                      (0, e.jsx)(Y.J0, {
                        value: F.BPushUpdatesToCrowdInAutomatically(),
                        onChange: we,
                      }),
                      (0, e.jsxs)("div", {
                        className: R().ValveCrowdInSyncLabel,
                        children: [
                          (0, K.we)(
                            "#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn",
                          ),
                          "\xA0(",
                          N
                            ? (0, e.jsx)("a", { href: N, children: N })
                            : (0, K.we)(
                                "#EventEditor_Localization_NotMappedToCrowdIn",
                              ),
                          ")",
                          (0, e.jsx)(de.o, {
                            tooltip: (0, K.we)(
                              "#EventEditor_Localization_Tooltip",
                            ),
                            className: G.tooltip_Ctn,
                          }),
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)("span", {
                            children: (0, K.we)(
                              "#EventEditor_Localization_RememberToSave",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)(_, { onChange: ae }),
                      (0, e.jsx)("div", {
                        className: Se().EditPreviewButton,
                        onClick: ne,
                        children: (0, K.we)(
                          "#EventEditor_Localization_FetchLocalization",
                        ),
                      }),
                    ],
                  }),
                  y &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("div", {
                        className: R().SyncPanelError,
                        children: [(0, e.jsx)(Q.X, {}), " ", y],
                      }),
                    }),
                ],
              });
        }
        function _(Le) {
          const F = (0, K.O9)(!1);
          let x = Array.from(F.entries());
          x.sort((he, f) => he[1].localeCompare(f[1]));
          const s = x.map(([he, f]) =>
            he !== "english"
              ? (0, e.jsx)("option", { value: he, children: f }, he)
              : "",
          );
          return (0, e.jsxs)("select", {
            onChange: Le.onChange,
            children: [
              (0, e.jsx)("option", {
                value: "all",
                children: (0, K.we)("#EventEditor_Localization_AllLanguages"),
              }),
              s,
            ],
          });
        }
      },
      24118: (P, Re, h) => {
        "use strict";
        h.d(Re, { V: () => H });
        var e = h(7850),
          g = h(19298),
          Y = h(90626),
          G = h(14256),
          Se = h.n(G),
          T = h(95695),
          de = h.n(T),
          K = h(71421),
          w = h(36707),
          R = h(18210),
          A = h(96715);
        function H(ee) {
          const { eventLink: X, labelOverride: Q } = ee,
            ie = Y.useRef(null),
            [_, Le] = Y.useState(""),
            F = () => {
              const x = ie.current?.ownerDocument.defaultView;
              !ie.current ||
                !x ||
                x.navigator.clipboard
                  .writeText(ie.current.value)
                  .then(() =>
                    Le((0, R.we)("#EventDisplay_Share_CopiedToClipboard")),
                  )
                  .catch((s) => {
                    Le(
                      (0, R.we)("#EventDisplay_Share_FailedToCopyToClipboard"),
                    ),
                      console.error("Failed to copy link to clipboard:", s);
                  });
            };
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: (0, w.A)(de().FlexRowContainer, Se().linkField),
                children: [
                  (0, e.jsx)("span", {
                    className: Se().LinkInputLabel,
                    children: (0, R.we)(Q ?? "#EventDisplay_Share_Link"),
                  }),
                  (0, e.jsx)("input", {
                    className: Se().LinkInput,
                    ref: ie,
                    value: X,
                    readOnly: !0,
                    onClick: F,
                  }),
                  (0, e.jsx)(g.Z, {
                    className: (0, w.A)(
                      de().Button,
                      de().Icon,
                      Se().LinkButton,
                    ),
                    onActivate: F,
                    children: (0, e.jsx)(K.Gq, {
                      toolTipContent: (0, R.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, e.jsx)("img", {
                        className: Se().ClipboardIcon,
                        src: A.A,
                        alt: (0, R.we)("#ToolTip_CopyLinkToClipboard"),
                      }),
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("div", { className: Se().ClipboardText, children: _ }),
            ],
          });
        }
      },
      37656: (P, Re, h) => {
        "use strict";
        h.d(Re, { w: () => s });
        var e = h(41735),
          g = h.n(e),
          Y = h(14947),
          G = h(65946),
          Se = h(90626),
          T = h(27066),
          de = h(8323),
          K = h(54963),
          w = h(3166),
          R = Object.defineProperty,
          A = Object.getOwnPropertyDescriptor,
          H = (he, f, y, te) => {
            for (
              var ae = te > 1 ? void 0 : te ? A(f, y) : f,
                pe = he.length - 1,
                ge;
              pe >= 0;
              pe--
            )
              (ge = he[pe]) && (ae = (te ? ge(f, y, ae) : ge(ae)) || ae);
            return te && ae && R(f, y, ae), ae;
          };
        const ee = class vo {
          constructor() {
            (0, Y.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return this.BIsValid()
              ? this.seconds_until_drawing !== void 0 &&
                this.seconds_until_drawing >= 0
                ? !0
                : this.winner_count !== void 0 && this.winner_count > 0
              : !1;
          }
          clone() {
            const f = new vo();
            return (
              (f.giveaway_id = this.giveaway_id),
              (f.seconds_until_drawing = this.seconds_until_drawing),
              (f.rtime_start = this.rtime_start),
              (f.rtime_end = this.rtime_end),
              (f.closed = this.closed),
              (f.winner_count = this.winner_count),
              f
            );
          }
        };
        H([Y.sH], ee.prototype, "giveaway_id", 2),
          H([Y.sH], ee.prototype, "seconds_until_drawing", 2),
          H([Y.sH], ee.prototype, "rtime_start", 2),
          H([Y.sH], ee.prototype, "rtime_end", 2),
          H([Y.sH], ee.prototype, "closed", 2),
          H([Y.sH], ee.prototype, "winner_count", 2);
        let X = ee;
        const Q = class ma {
          constructor() {
            (0, Y.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(f, y) {
            return f + "_" + y;
          }
          GetInfoByInstance(f, y) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(f, y),
            );
          }
          GetNextDrawChangeCallback(f) {
            let y = this.m_mapNextDrawChangeCallback.get(f);
            return (
              y ||
                ((y = new de.lu()), this.m_mapNextDrawChangeCallback.set(f, y)),
              y
            );
          }
          CopyToGiveaway(f, y) {
            y.closed != f.closed && (y.closed = f.closed),
              y.giveaway_id != f.giveaway_id && (y.giveaway_id = f.giveaway_id),
              y.rtime_start != f.rtime_start && (y.rtime_start = f.rtime_start),
              y.rtime_end != f.rtime_end && (y.rtime_end = f.rtime_end),
              y.winner_count != f.winner_count &&
                (y.winner_count = f.winner_count),
              y.seconds_until_drawing != f.seconds_until_drawing &&
                (y.seconds_until_drawing = f.seconds_until_drawing);
          }
          async ReloadGiveaway(f, y) {
            if (!f) return null;
            let te = w.TS.STORE_BASE_URL + "prizes/nextdraw/" + f,
              ae = { origin: self.origin };
            const pe = await g().get(te, { params: ae }),
              ge = (0, Y.h5)(() => {
                let _e = this.m_mapGiveawayIDToNextDrawInfo.get(f);
                if (
                  (_e ||
                    ((_e = new X()),
                    this.m_mapGiveawayIDToNextDrawInfo.set(f, _e)),
                  this.CopyToGiveaway(pe.data, _e),
                  y !== void 0)
                ) {
                  const B = this.GetKey(f, y);
                  let N = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(B);
                  N ||
                    ((N = new X()),
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(B, N)),
                    this.CopyToGiveaway(pe.data, N);
                }
                return _e;
              });
            return this.GetNextDrawChangeCallback(f).Dispatch(ge), ge;
          }
          static s_Singleton;
          static Get() {
            return (
              ma.s_Singleton ||
                ((ma.s_Singleton = new ma()), ma.s_Singleton.Init()),
              ma.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let f = (0, w.Tc)("giveawaynextdraw", "application_config");
              if (f && f.giveaway_id) {
                let y = new X();
                this.CopyToGiveaway(f, y),
                  this.m_mapGiveawayIDToNextDrawInfo.set(f.giveaway_id, y);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        H([Y.sH], Q.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          H([Y.XI], Q.prototype, "CopyToGiveaway", 1);
        let ie = Q;
        const _ = class Qn {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = Qn.s_GlobalInstance),
              (Qn.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(f, y) {
            if ((this.ClearRefreshInterval(), !f.closed)) {
              let ae =
                f.seconds_until_drawing !== void 0 &&
                f.seconds_until_drawing <= 0 &&
                f.winner_count == 0
                  ? 60 * 1e3
                  : 5 * 1e3;
              this.m_intervalID = window.setInterval(y, ae);
            }
          }
          SetupCountDown(f, y) {
            f !== void 0 &&
              f > 0 &&
              (this.m_intervalCountDownID = window.setInterval(y, 1e3));
          }
        };
        H([T.o], _.prototype, "ClearRefreshInterval", 1),
          H([T.o], _.prototype, "ClearCountDown", 1),
          H([T.o], _.prototype, "SetupRefreshDataInterval", 1),
          H([T.o], _.prototype, "SetupCountDown", 1);
        let Le = _;
        function F(he, f) {
          const y = ie.Get().GetInfoByInstance(he, f.m_myInstanceNumber);
          !y ||
            y.seconds_until_drawing === void 0 ||
            ((y.seconds_until_drawing -= 1),
            y.seconds_until_drawing == 0 && f.ClearCountDown());
        }
        function x(he, f) {
          const y = ie.Get().GetInfoByInstance(he, f.m_myInstanceNumber);
          y &&
            y.BIsValid() &&
            y.seconds_until_drawing !== void 0 &&
            y.seconds_until_drawing <= 0 &&
            !y.closed &&
            (f.ClearCountDown(),
            ie
              .Get()
              .ReloadGiveaway(he, f.m_myInstanceNumber)
              .then((te) => {
                te &&
                  f.SetupCountDown(te.seconds_until_drawing, () => F(he, f));
              }));
        }
        function s(he) {
          const [f] = (0, Se.useState)(new Le()),
            y = (0, K.CH)();
          (0, Se.useEffect)(
            () => (
              ie
                .Get()
                .ReloadGiveaway(he, f.m_myInstanceNumber)
                .then((_e) => {
                  _e &&
                    (f.SetupRefreshDataInterval(_e, () => x(he, f)),
                    f.SetupCountDown(_e.seconds_until_drawing, () => F(he, f)),
                    y());
                }),
              () => {
                f.ClearRefreshInterval(), f.ClearCountDown();
              }
            ),
            [f, he, y],
          );
          const te = ie.Get().GetInfoByInstance(he, f.m_myInstanceNumber),
            [ae, pe, ge] = (0, G.q3)(() => [
              te?.winner_count,
              te?.closed,
              te?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !te || te.giveaway_id == null || !te.BStarted() || ae === void 0,
            winner_count: ae,
            closed: pe,
            seconds_until_drawing: ge,
          };
        }
      },
      1885: (P, Re, h) => {
        "use strict";
        h.d(Re, { jl: () => we, Bv: () => N });
        var e = h(7850),
          g = h(90626),
          Y = h(54963),
          G = h(41735),
          Se = h.n(G),
          T = h(19316),
          de = h(18210),
          K = h(91640),
          w = h.n(K),
          R = h(3166),
          A = h(76559),
          H = h(82734),
          ee = h(14947),
          X = h(35413),
          Q = h(71742),
          ie = h(34592),
          _ = Object.defineProperty,
          Le = Object.getOwnPropertyDescriptor,
          F = (ne, I, V, se) => {
            for (
              var Ee = se > 1 ? void 0 : se ? Le(I, V) : I,
                Be = ne.length - 1,
                ue;
              Be >= 0;
              Be--
            )
              (ue = ne[Be]) && (Ee = (se ? ue(I, V, Ee) : ue(Ee)) || Ee);
            return se && Ee && _(I, V, Ee), Ee;
          };
        class x {
          constructor() {
            (0, ee.Gn)(this);
          }
          m_mapProfiles = new Map();
          m_mapProfilesLoading = new Map();
          async LoadProfiles(I, V) {
            (0, Q.wT)(
              I.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let se = I.filter(
              (W) =>
                !this.m_mapProfiles.has(W) && !this.m_mapProfilesLoading.has(W),
            );
            if (se.length == 0) return this.m_mapProfilesLoading.get(I[0]);
            let Ee = R.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              Be = Se().get(Ee, {
                params: { steamids: se.join(",") },
                withCredentials: !0,
                cancelToken: V?.token,
              });
            se.forEach((W) => this.m_mapProfilesLoading.set(W, Be));
            let ue = await Be;
            ue.data &&
              ue.status == 200 &&
              ue.data.forEach((W) => {
                (W.avatar_hash = W.avatar_url),
                  (W.avatar_url_medium = (0, X.t)(W.avatar_url, "medium")),
                  (W.avatar_url_full = (0, X.t)(W.avatar_url, "full")),
                  (W.avatar_url = (0, X.t)(W.avatar_url)),
                  this.m_mapProfiles.set(W.steamid, W),
                  this.m_mapProfilesLoading.delete(W.steamid);
              });
          }
          GetProfile(I) {
            return this.m_mapProfiles.get(I);
          }
          GetProfileByAccountID(I) {
            return this.m_mapProfiles.get(
              A.b.InitFromAccountID(I).ConvertTo64BitString(),
            );
          }
          GetProfileBySteamID(I) {
            return this.m_mapProfiles.get(I.ConvertTo64BitString());
          }
          BHasProfile(I) {
            return this.m_mapProfiles.has(I);
          }
          BHasProfileByAccountID(I) {
            return this.m_mapProfiles.has(
              A.b.InitFromAccountID(I).ConvertTo64BitString(),
            );
          }
          BHasProfileBySteamID(I) {
            return this.m_mapProfiles.has(I.ConvertTo64BitString());
          }
          BHasAllProfilesBySteamID(I) {
            return !I.some((V) => !this.BHasProfileBySteamID(V));
          }
          GetProfileURLBySteamID(I) {
            const V = this.GetProfileBySteamID(I);
            return V && V.profile_url
              ? R.TS.COMMUNITY_BASE_URL + "id/" + V.profile_url
              : R.TS.COMMUNITY_BASE_URL +
                  "profiles/" +
                  I.ConvertTo64BitString();
          }
          GetPersonaNameBySteamID(I) {
            const V = this.GetProfileBySteamID(I);
            return V && V.persona_name ? V.persona_name : "";
          }
        }
        F([ee.sH], x.prototype, "m_mapProfiles", 2);
        const s = new x();
        function he(ne) {
          const I = React.useMemo(
              () =>
                ne ? (typeof ne == "string" ? new CSteamID(ne) : ne) : null,
              [ne],
            ),
            [V, se] = useState(!!I && !s.BHasProfileBySteamID(I));
          useEffect(() => {
            const Be = axios.CancelToken.source();
            return (
              I &&
                !s.BHasProfileBySteamID(I) &&
                s
                  .LoadProfiles([I.ConvertTo64BitString()])
                  .catch((ue) => {
                    const W = GetMsgAndErrorCodeFromResponse(ue);
                    console.error(
                      "useUserProfile failed to load profile for " +
                        I.ConvertTo64BitString() +
                        ": " +
                        W.strErrorMsg,
                      W,
                    );
                  })
                  .finally(() => {
                    Be.token.reason || se(!1);
                  }),
              () => Be.cancel("unmounting useUserProfile")
            );
          }, [ne]);
          const Ee = !!I && s.GetProfileBySteamID(I);
          return [V, Ee];
        }
        function f(ne) {
          const I = React.useMemo(
            () => (ne ? CSteamID.InitFromAccountID(ne) : null),
            [ne],
          );
          return he(I);
        }
        var y = h(72604),
          te = h(36118),
          ae = h(41301),
          pe = h(24660),
          ge = Object.defineProperty,
          _e = Object.getOwnPropertyDescriptor,
          B = (ne, I, V, se) => {
            for (
              var Ee = se > 1 ? void 0 : se ? _e(I, V) : I,
                Be = ne.length - 1,
                ue;
              Be >= 0;
              Be--
            )
              (ue = ne[Be]) && (Ee = (se ? ue(I, V, Ee) : ue(Ee)) || Ee);
            return se && Ee && ge(I, V, Ee), Ee;
          };
        class N extends g.Component {
          state = {
            invite_token: "",
            input_search: "",
            friend_code_copied: !1,
            invite_copied: !1,
          };
          async componentDidMount() {
            const I = await Se().get(
              R.TS.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: (0, R.KC)() } },
            );
            if (I && I.data && I.data.tokens) {
              const V = I.data.tokens.filter((se) => se.valid);
              V.length
                ? this.setState({ invite_token: V[0].invite_token })
                : this.OnCreateInviteLink();
            } else this.OnCreateInviteLink();
          }
          async OnCreateInviteLink() {
            const I = new FormData();
            I.append("sessionid", (0, R.KC)()),
              I.append("steamid_user", R.iA.steamid),
              I.append("duration", (720 * 60 * 60).toString());
            const V = await Se().post(
              R.TS.COMMUNITY_BASE_URL + "invites/ajaxcreate",
              I,
            );
            V &&
              V.data &&
              V.data.invite &&
              this.setState({ invite_token: V.data.invite.invite_token });
          }
          OnCopy(I, V) {
            I === "friend_code" &&
              (this.setState({ friend_code_copied: !0 }),
              setTimeout(() => this.setState({ friend_code_copied: !1 }), 1e3)),
              I === "invite" &&
                (this.setState({ invite_copied: !0 }),
                setTimeout(() => this.setState({ invite_copied: !1 }), 1e3)),
              (0, H.OG)(V);
          }
          async OnAddFriend(I) {
            const V = new FormData();
            V.append("sessionID", (0, R.KC)()),
              V.append("steamid", I),
              V.append("accept_invite", "0");
            try {
              const se = await Se().post(
                R.TS.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                V,
              );
              return se && se.data && se.data.success == y.R;
            } catch {
              return !1;
            }
          }
          OnSearchChange(I) {
            this.setState({ input_search: I.target.value });
          }
          OnSearchKeyDown(I) {
            I.keyCode === ae.wd && this.OnSearchSubmit();
          }
          OnSearchSubmit() {
            window.open(
              R.TS.COMMUNITY_BASE_URL +
                "search/users/#text=" +
                encodeURIComponent(this.state.input_search),
              "_self",
            );
          }
          render() {
            const I = R.iA.short_url + "/" + this.state.invite_token;
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: w().HeaderBlock,
                  children: (0, de.we)("#ManageFriends_AddAFriend"),
                }),
                (0, e.jsxs)("div", {
                  className: w().Background,
                  children: [
                    (0, e.jsx)("h1", {
                      className: w().Heading,
                      children: (0, de.we)("#ManageFriends_YourFriendCode"),
                    }),
                    (0, e.jsxs)("div", {
                      className: w().CopyContainer,
                      children: [
                        (0, e.jsx)("h1", {
                          className: w().Text,
                          children: R.iA.accountid,
                        }),
                        (0, e.jsx)(T.jn, {
                          autoFocus: !0,
                          className: w().Button,
                          onClick: () =>
                            this.OnCopy("friend_code", String(R.iA.accountid)),
                          children: this.state.friend_code_copied
                            ? (0, de.we)("#ManageFriends_Copied")
                            : (0, de.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, e.jsx)("p", {
                      className: w().Body,
                      children: (0, de.we)("#ManageFriends_EnterFriendCode"),
                    }),
                    (0, e.jsx)(we, {
                      onButtonClick: this.OnAddFriend,
                      buttonText: (0, de.we)("#ManageFriends_SendInvite"),
                      bDisableForSelf: !0,
                      bDisableForFriends: !0,
                      bShowStatus: !0,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: w().DimBackground,
                  children: [
                    (0, e.jsx)("h1", {
                      className: w().Heading,
                      children: (0, de.we)("#ManageFriends_OrSendQuickInvite"),
                    }),
                    (0, e.jsx)("p", {
                      className: w().Body,
                      children: (0, de.we)(
                        "#ManageFriends_QuickInviteDescription",
                      ),
                    }),
                    (0, e.jsx)("p", {
                      className: w().Body,
                      children: (0, de.we)("#ManageFriends_QuickInviteNote"),
                    }),
                    (0, e.jsxs)("div", {
                      className: w().CopyContainer,
                      children: [
                        !!this.state.invite_token &&
                          (0, e.jsx)("div", {
                            className: w().Link,
                            children: I,
                          }),
                        (0, e.jsx)(T.jn, {
                          className: w().Button,
                          onClick: () => this.OnCopy("invite", I),
                          children: this.state.invite_copied
                            ? (0, de.we)("#ManageFriends_Copied")
                            : (0, de.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, e.jsx)(T.$n, {
                      className: w().GenerateLinkButton,
                      onClick: this.OnCreateInviteLink,
                      children: (0, de.we)("#ManageFriends_CreateInviteLink"),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: w().Background,
                  children: [
                    (0, e.jsx)("h1", {
                      className: w().Heading,
                      children: (0, de.we)("#ManageFriends_OrSearch"),
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "598px",
                        position: "relative",
                      },
                      children: [
                        (0, e.jsx)("div", {
                          style: { width: "100%" },
                          children: (0, e.jsx)(T.pd, {
                            className: w().Input,
                            onKeyDown: this.OnSearchKeyDown,
                            value: this.state.input_search,
                            onChange: this.OnSearchChange,
                            placeholder: (0, de.we)(
                              "#ManageFriends_EnterProfileName",
                            ),
                          }),
                        }),
                        (0, e.jsx)("div", {
                          id: "searchIcon",
                          style: {
                            position: "absolute",
                            right: "10px",
                            cursor: "pointer",
                          },
                          onClick: this.OnSearchSubmit,
                          children: (0, e.jsx)(te.eSy, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        B([Y.oI], N.prototype, "OnCreateInviteLink", 1),
          B([Y.oI], N.prototype, "OnCopy", 1),
          B([Y.oI], N.prototype, "OnAddFriend", 1),
          B([Y.oI], N.prototype, "OnSearchChange", 1),
          B([Y.oI], N.prototype, "OnSearchKeyDown", 1),
          B([Y.oI], N.prototype, "OnSearchSubmit", 1);
        class we extends g.Component {
          state = {
            input_friend_code: "",
            disable_send_invite: !1,
            searchResult: null,
            invite_status: "pending",
          };
          m_currentRequest = 0;
          async OnFriendCodeChange(I) {
            const V = I.target.value.split(",")[0];
            this.setState({ input_friend_code: V, invite_status: "pending" }),
              window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(
                () => this.LoadProfile(V),
                500,
              ));
          }
          async LoadProfile(I) {
            if (I) {
              const V = A.b.InitFromAccountID(Number(I));
              await s.LoadProfiles([V.ConvertTo64BitString()]);
              const se = s.GetProfile(V.ConvertTo64BitString());
              se
                ? this.setState({
                    searchResult: se,
                    disable_send_invite:
                      R.iA.is_limited ||
                      (this.props.bDisableForFriends && se.is_friend) ||
                      (this.props.bDisableForSelf &&
                        se.steamid === R.iA.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          }
          async OnActionClick(I) {
            const V = new FormData();
            V.append("sessionID", (0, R.KC)()),
              V.append("steamid", I),
              V.append("accept_invite", "0"),
              this.setState({ disable_send_invite: !0 }),
              (await this.props.onButtonClick(I))
                ? (this.setState({
                    input_friend_code: "",
                    invite_status: "success",
                  }),
                  setTimeout(() => this.setState({ searchResult: null }), 3e3))
                : this.setState({
                    invite_status: "failure",
                    disable_send_invite: !1,
                  });
          }
          render() {
            return (0, e.jsxs)("div", {
              className: w().FriendCodeSelector,
              children: [
                (0, e.jsx)(T.pd, {
                  className: w().Input,
                  value: this.state.input_friend_code,
                  onChange: this.OnFriendCodeChange,
                  placeholder: (0, de.we)(
                    "#ManageFriends_EnterFriendCodePlaceholder",
                  ),
                }),
                (0, e.jsx)(He, {
                  searchResult: this.state.searchResult,
                  invite_status: this.state.invite_status,
                  bShowStatus: this.props.bShowStatus,
                  children: (0, e.jsx)(T.jn, {
                    className: w().SendInviteButton,
                    onClick: () =>
                      this.OnActionClick(this.state.searchResult.steamid),
                    disabled: this.state.disable_send_invite,
                    children: this.props.buttonText,
                  }),
                }),
              ],
            });
          }
        }
        B([Y.oI], we.prototype, "OnFriendCodeChange", 1),
          B([Y.oI], we.prototype, "LoadProfile", 1),
          B([Y.oI], we.prototype, "OnActionClick", 1);
        const He = (ne) => {
          const {
              searchResult: I,
              invite_status: V,
              bShowStatus: se,
              children: Ee,
            } = ne,
            Be = (0, R.Qn)();
          return I
            ? (0, e.jsxs)("div", {
                className: w().ProfileCard,
                children: [
                  (0, e.jsxs)("div", {
                    className: w().UserContainer,
                    children: [
                      (0, e.jsx)("div", {
                        className: w().Image,
                        children: (0, e.jsx)("img", {
                          style: { width: "100%", height: "100%" },
                          src: I.avatar_url_full,
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: w().ProfileContent,
                        children: [
                          (0, e.jsx)("h1", {
                            className: w().Heading,
                            children: I.persona_name,
                          }),
                          (0, e.jsxs)("div", {
                            className: w().ProfileLink,
                            children: [
                              (0, e.jsx)(pe.Ii, {
                                target: Be ? void 0 : "_blank",
                                href:
                                  R.TS.COMMUNITY_BASE_URL +
                                  "profiles/" +
                                  I.steamid,
                                children: (0, de.we)(
                                  "#ManageFriends_ProfileLink",
                                ),
                              }),
                              (0, e.jsx)("br", {}),
                              (0, e.jsxs)("span", {
                                className: w().Body,
                                children: [
                                  I.real_name,
                                  (0, e.jsx)("br", {}),
                                  `${I.city}${I.city ? "," : ""} ${I.state}${I.state ? "," : ""} ${I.country}`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      Ee,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: w().ProfileLink,
                    children: [
                      I.is_friend &&
                        (0, e.jsx)("div", {
                          children: (0, de.we)("#ManageFriends_IsFriend"),
                        }),
                      I.friends_in_common != 0 &&
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)(pe.Ii, {
                            target: Be ? void 0 : "_blank",
                            href:
                              R.TS.COMMUNITY_BASE_URL +
                              "profiles/" +
                              I.steamid +
                              "/friendscommon",
                            children:
                              I.friends_in_common === 1
                                ? (0, de.we)(
                                    "#ManageFriends_FriendsInCommonSingular",
                                    I.friends_in_common,
                                  )
                                : (0, de.we)(
                                    "#ManageFriends_FriendsInCommon",
                                    I.friends_in_common,
                                  ),
                          }),
                        }),
                      se &&
                        V === "failure" &&
                        (0, e.jsx)("div", {
                          className: w().Failure,
                          children: (0, de.we)("#ManageFriends_InviteFailure"),
                        }),
                      se &&
                        V === "success" &&
                        (0, e.jsx)("div", {
                          className: w().Success,
                          children: (0, de.we)(
                            "#ManageFriends_InviteSuccess",
                            I.persona_name,
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        };
      },
      26251: (P, Re, h) => {
        "use strict";
        h.d(Re, { Yg: () => s, t3: () => he });
        var e = h(7850),
          g = h(40323),
          Y = h.n(g),
          G = h(90626),
          Se = h(99412),
          T = h(32093),
          de = h(38410),
          K = h(19316),
          w = h(95695),
          R = h.n(w),
          A = h(2801),
          H = h(88003),
          ee = h(85599),
          X = h(34592),
          Q = h(36707),
          ie = h(18210),
          _ = h(20398),
          Le = h(71421),
          F = h(96471),
          x = h.n(F);
        const s = (y) => {
            const te = (ae, pe) => {
              ae.preventDefault();
              const {
                  fnGetLocData: ge,
                  closeModal: _e,
                  strFileNamePrefix: B,
                  lang: N,
                } = y,
                we = ge(),
                He = new _.s();
              let ne = B ? B + "_localization" : "localization";
              switch (pe) {
                case "csv_row":
                  He.WriteLocalizationData_CSV_LanguageRows(we, ne + ".csv");
                  break;
                case "csv_column":
                  He.WriteLocalizationData_CSV_LanguageColumns(we, ne + ".csv");
                  break;
                case "csv_token":
                  He.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                    we,
                    ne + ".csv",
                  );
                  break;
                case "xml":
                  He.WriteLocalizationData_XML_SingleLanguage(
                    we,
                    N,
                    ne + "_" + (0, Se.x6o)((0, Se.LgB)(N)) + ".xml",
                  );
                  break;
              }
              _e && _e();
            };
            return (0, e.jsxs)(e.Fragment, {
              children: [
                !!y.bShowCSV &&
                  (0, e.jsxs)(G.Fragment, {
                    children: [
                      (0, e.jsx)(K.jn, {
                        onClick: (ae) => te(ae, "csv_row"),
                        children: (0, ie.we)(
                          "#Localization_Export_Btn_RowLanguages",
                        ),
                      }),
                      (0, e.jsx)(K.jn, {
                        onClick: (ae) => te(ae, "csv_column"),
                        children: (0, ie.we)(
                          "#Localization_Export_Btn_ColumnLanguages",
                        ),
                      }),
                      (0, e.jsx)(K.jn, {
                        onClick: (ae) => te(ae, "csv_token"),
                        children: (0, ie.we)(
                          "#Localization_Export_Btn_TokenLanguages",
                        ),
                      }),
                    ],
                  }),
                !!y.bShowXML &&
                  (0, e.jsx)(K.jn, {
                    onClick: (ae) => te(ae, "xml"),
                    children: (0, ie.we)("#Localization_Export_Btn_XML"),
                  }),
              ],
            });
          },
          he = (y) => {
            const [te, ae] = (0, G.useState)(!1),
              pe = (B, N) => {
                ae(!1),
                  console.log(
                    "ImportLocalizationAction: On Handle Parse error: " +
                      B.message,
                    B,
                  ),
                  (0, H.pg)(
                    (0, e.jsx)(A.KG, {
                      children: (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, ie.we)("#Localization_Error_Input"),
                          }),
                          (0, e.jsx)("p", { children: B.message }),
                        ],
                      }),
                    }),
                    window,
                  );
              },
              ge = (B) => {
                ae(!1);
                let N = "";
                B.forEach((we) => {
                  N.length > 0 && (N += ", "),
                    (N += (0, ie.we)("#Language_" + (0, Se.LgB)(we)));
                }),
                  (0, H.pg)(
                    (0, e.jsx)(A.o0, {
                      strTitle: (0, ie.we)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                      children: (0, e.jsx)("div", {
                        children:
                          N.length == 0
                            ? (0, ie.we)(
                                "#Localization_Success_ImportComplete_NoChange",
                              )
                            : (0, ie.we)(
                                "#Localization_Success_ImportComplete",
                                N,
                              ),
                      }),
                    }),
                    window,
                  );
              },
              _e = async (B) => {
                let N = B.target.files;
                if (N && N.length > 0) {
                  ae(!0);
                  let we = new Array(),
                    He = new _.s();
                  for (let ne = 0; ne < N.length; ++ne)
                    if (N[ne])
                      if (N[ne].name.toLocaleLowerCase().endsWith(".csv")) {
                        Y().parse(N[0], {
                          header: !0,
                          complete: (I) => {
                            let se = new _.s().DetectAndFormatCSV(I);
                            if (!se) {
                              pe({
                                code: "",
                                message: "",
                                row: 0,
                                type: "filenameerror",
                              });
                              return;
                            }
                            const Ee = ie.A0.GetLanguageListForRealms([
                                T.TU.k_ESteamRealmGlobal,
                              ]),
                              Be = y.fnOnImportLocData(se, Ee);
                            ge(Be);
                          },
                          error: pe,
                        });
                        return;
                      } else if (
                        N[ne].name.toLocaleLowerCase().endsWith(".xml")
                      ) {
                        let { language: I } = (0, de.jj)(N[ne].name, Se.xPp);
                        if (I == null || I == Se.xPp) {
                          pe({
                            code: "",
                            message: (0, ie.we)(
                              "#Localization_Error_FileLangauage",
                              N[ne].name,
                            ),
                            row: 0,
                            type: "filenameerror",
                          });
                          return;
                        }
                        try {
                          const V =
                            await He.ReadLocalizationData_XML_SingleLanguage(
                              N[ne],
                              I,
                            );
                          y.fnOnImportLocData(V, [I]).forEach((Ee) => {
                            we.indexOf(Ee) == -1 && we.push(Ee);
                          });
                        } catch (V) {
                          let se = (0, X.H)(V);
                          pe({
                            code: "",
                            message: (0, ie.we)(
                              "#Localization_Error_XMLParseError",
                              se.strErrorMsg,
                            ),
                            row: 0,
                            type: "parseerror",
                          });
                          return;
                        }
                      } else
                        pe({
                          code: "",
                          message: (0, ie.we)(
                            "#Localization_Error_FileExtention",
                            N[ne].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                  ge(we);
                }
              };
            return (0, e.jsx)(Le.he, {
              className: (0, Q.A)(
                y.className ? y.className : w.EditPreviewButton,
              ),
              toolTipContent: y.strToolTip,
              children: (0, e.jsxs)("label", {
                className: F.ImportButton,
                htmlFor: "importlocalization",
                children: [
                  te && (0, e.jsx)(ee.t, { size: "small" }),
                  (0, e.jsx)("div", {
                    className: F.Label,
                    children: (0, ie.we)(
                      y.strLabel ? y.strLabel : "#Localization_Import_Btn",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    id: "importlocalization",
                    className: F.ImportButton,
                    style: { display: "none" },
                    type: "file",
                    onSubmit: _e,
                    onChange: _e,
                    multiple: !0,
                  }),
                ],
              }),
            });
          },
          f = (y) => {
            const {
                fnOnImportLocData: te,
                closeModal: ae,
                sampleLocData: pe,
                sampleFilename: ge,
              } = y,
              _e = (N, we) => {
                const He = te(N, we);
                return ae(), He;
              },
              B = new CLocalizationImportExport();
            return jsxs(GenericDialog, {
              title: Localize("#ImportLoc_Title"),
              onCancel: ae,
              closeModal: ae,
              children: [
                jsxs(Dialog.Body, {
                  children: [
                    jsx("div", {
                      children: Localize("#ImportLoc_Description"),
                    }),
                    jsxs("div", {
                      className: locstyles.ImportLocSampleButtonCtn,
                      children: [
                        jsx("div", {
                          className: locstyles.SampleTitle,
                          children: Localize("#ImportLoc_SampleTitle"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            B.WriteLocalizationData_CSV_LanguageRows(
                              pe,
                              ge + "_row.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerRow"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            B.WriteLocalizationData_CSV_LanguageColumns(
                              pe,
                              ge + "_col.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerCol"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            B.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                              pe,
                              ge + "_token.csv",
                            ),
                          children: Localize("#ImportLoc_CSVTokenLang"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            B.WriteLocalizationData_XML_SingleLanguage(
                              pe,
                              k_ELanguage_English,
                              ge + "xml",
                            ),
                          children: Localize("#ImportLoc_XML"),
                        }),
                      ],
                    }),
                  ],
                }),
                jsx(Dialog.Footer, {
                  children: jsx(he, {
                    strLabel: Localize("#BuildNotes_ImportLocalization"),
                    fnOnImportLocData: _e,
                  }),
                }),
              ],
            });
          };
      },
      20398: (P, Re, h) => {
        "use strict";
        h.d(Re, { G: () => T, s: () => de });
        var e = h(99412),
          g = h(32093),
          Y = h(41635),
          G = h(22880),
          Se = h(18210);
        class T {
          m_mapTokens = new Map();
          GetLocalization(w, R) {
            const A = this.m_mapTokens.get(w);
            if (!(!A || !A[R])) return A[R];
          }
          SetLocalization(w, R, A) {
            let H = this.m_mapTokens.get(w);
            H || ((H = (0, Y.$Y)([], e.bP9, null)), this.m_mapTokens.set(w, H)),
              (H[R] = A);
          }
          GetSortedTokenList() {
            let w = [];
            return (
              this.m_mapTokens.forEach((R, A) => w.push(A)),
              w.sort((R, A) => R.localeCompare(A)),
              w
            );
          }
          GetLanguagesWithTokens() {
            let w = new Map();
            this.m_mapTokens.forEach((A) => {
              for (let H = 0; H < A.length; ++H)
                !w.has(H) &&
                  A[H] !== null &&
                  A[H] !== void 0 &&
                  A[H].trim().length > 0 &&
                  w.set(H, !0);
            });
            let R = new Array();
            return (
              w.forEach((A, H) => {
                A && R.push(H);
              }),
              R
            );
          }
          ClearLanguagesTokens(w) {
            w.forEach((R) => {
              this.m_mapTokens.forEach((A, H) => {
                R < A.length && A[R] !== null && (A[R] = null);
              });
            });
          }
          DebugPrintData() {
            const w = new Array();
            return (
              this.m_mapTokens.forEach((R, A) => w.push(`${A}=${R.join(",")}`)),
              w.join(`
`)
            );
          }
        }
        class de {
          DetectAndFormatCSV(w) {
            let R = null;
            return (
              w?.meta?.fields?.length >= 3 &&
              w.meta.fields[0] === "field" &&
              w.meta.fields[1] === "language" &&
              w.meta.fields[2] === "value"
                ? (R = this.ReadLocalizationData_CSV_TokenLanguageList(w))
                : w?.meta?.fields?.length >= 2 &&
                    w.meta.fields[0] === "field" &&
                    (0, e.sfN)(w.meta.fields[1], e.xPp) != e.xPp
                  ? (R = this.ReadLocalizationData_CSV_LanguageColumns(w))
                  : w?.meta?.fields?.length >= 2 &&
                    w.meta.fields[0] === "language" &&
                    (R = this.ReadLocalizationData_CSV_LanguageRows(w)),
              R
            );
          }
          async ReadLocalizationData_XML_SingleLanguage(w, R) {
            let A = new T(),
              H = new DOMParser(),
              ee = await G.g.ReadFile(w),
              X = H.parseFromString(ee.toString(), "application/xml");
            for (let Q = 0; Q < X.documentElement.children.length; ++Q) {
              const ie = X.documentElement.children.item(Q);
              if (!ie.getAttribute("id"))
                throw "Can not find id for element. Probably malformed XML";
              const _ = ie.getAttribute("id").toLocaleLowerCase(),
                Le = ie.textContent;
              A.SetLocalization(_, R, Le);
            }
            return A;
          }
          ReadLocalizationData_CSV_TokenLanguageList(w) {
            const R = new T();
            return (
              w.data.forEach((A) => {
                const H = A.field,
                  ee = (0, e.sfN)(A.language);
                R.SetLocalization(H, ee, A.value);
              }),
              R
            );
          }
          ReadLocalizationData_CSV_LanguageColumns(w) {
            const R = new T();
            return (
              w.data.forEach((A) => {
                const H = A.field;
                for (let ee = e.Bhc; ee < e.bP9; ++ee) {
                  const X = (0, e.x6o)((0, e.LgB)(ee));
                  R.SetLocalization(H, ee, A[X]);
                }
              }),
              R
            );
          }
          ReadLocalizationData_CSV_LanguageRows(w) {
            const R = new T();
            return (
              w.data.forEach((A) => {
                const H = (0, e.sfN)(A.language, e.bP9);
                if (H !== e.bP9)
                  for (const [ee, X] of Object.entries(A))
                    ee === "language" ||
                      typeof X != "string" ||
                      R.SetLocalization(ee, H, X);
              }),
              R
            );
          }
          GetExportLanguages() {
            return Se.A0.GetLanguageListForRealms([g.TU.k_ESteamRealmGlobal]);
          }
          WriteLocalizationData_CSV_TokenAndLanguageColumns(w, R) {
            let A = new Array();
            w.GetSortedTokenList().forEach((ee) => {
              for (const X of this.GetExportLanguages()) {
                let Q = { field: ee };
                (Q.language = (0, e.x6o)((0, e.LgB)(X))),
                  (Q.value = w.GetLocalization(ee, X)),
                  A.push(Q);
              }
            }),
              G.g.WriteCSVToFile(A, R);
          }
          WriteLocalizationData_CSV_LanguageColumns(w, R) {
            let A = new Array();
            w.GetSortedTokenList().forEach((ee) => {
              let X = { field: ee };
              for (const Q of this.GetExportLanguages())
                X[(0, e.x6o)((0, e.LgB)(Q))] = w.GetLocalization(ee, Q);
              A.push(X);
            }),
              G.g.WriteCSVToFile(A, R);
          }
          WriteLocalizationData_CSV_LanguageRows(w, R) {
            let A = new Array();
            for (const ee of this.GetExportLanguages())
              A.length <= ee - 1 && A.push({ language: "" }),
                A.push({ language: (0, e.x6o)((0, e.LgB)(ee)) });
            w.GetSortedTokenList().forEach((ee) => {
              for (const X of this.GetExportLanguages()) {
                const Q = w.GetLocalization(ee, X);
                A[X][ee] = Q;
              }
            }),
              G.g.WriteCSVToFile(A, R);
          }
          WriteLocalizationData_XML_SingleLanguage(w, R, A) {
            let H = document.implementation.createDocument(
              null,
              "content",
              null,
            );
            w.GetSortedTokenList().forEach((X) => {
              let Q = H.createElement("string");
              Q.setAttribute("id", X),
                Q.appendChild(H.createTextNode(w.GetLocalization(X, R) || "")),
                H.documentElement.append(Q);
            }),
              G.g.WriteXMLToFile(H, A);
          }
        }
      },
      49199: (P) => {
        P.exports = {
          TutoralCtn: "_2uGI1RkZsAgH5FJJPm48Mk",
          CreatorHomeEditCtn: "VbOoix4tAefx_Ubkf3VXl",
          SelectedExplanationCtn: "_2Kz-YjmWq9XV50Bq3pKfJd",
          AdminLinkCtn: "_26ME5VmoXDX5fdxtHMtJsX",
          LeftCol: "B2oAcAebO_bbVwXs3w_aF",
          RightCol: "_3h8IKAOLHOxucAap792BUn",
          EditLink: "_1dED5yJb9LJHtHR-wOyzjs",
          Label: "_1dpVUl_36BZE7zol5hXJtt",
          Tagline: "rug6IxzHTjfFtn_iUFpSu",
          AvatarImage: "_1eBqhQYUv9YYTswWfT8DIo",
          SaveWarningCtn: "acItF6ldLBfiep28ZGGai",
          ExplanationCtn: "_3rgjlem-dIfIrDEOWm6NLp",
          Warning: "jrKwhfgNFBea4v_qCpgy8",
        };
      },
      68297: (P) => {
        P.exports = { Ctn: "_3cNoLVtVVzke0LB8WeiaxS" };
      },
      78606: (P) => {
        P.exports = { HighlightBox: "_1C8qNhbbX8u5CxFNklZmlc" };
      },
      1743: (P) => {
        P.exports = { SearchResults: "_26iJ3c5EI_arYCNqRvcLNX" };
      },
      22230: (P) => {
        P.exports = {
          ValveOnlyGuidelineSummary: "G_5BBG-e-VdrVy_cH-T74",
          GuidelinesDoneCtn: "-bMPuCQgMEZkaXDe9xr-s",
          SignedBy: "aFTvaToeoa7vQ3T3g-gJn",
          GuidelinesNoticeCtn: "_2vRv873nmO8VDKcGv910N9",
          OpenGuidelinesBtnCtn: "_1xJdiPfxlTdNN2usH5IiPi",
          Text: "_1yrjmb8acKppoFMX4a89JM",
          ProcessButtons: "_3d-YuHWm4kFxhwoHUQvLY3",
          OrganizerInfoNeeded: "_1zDJ15qYWvZk2pOJT6Fpma",
          PresenterInfoCtn: "LtbslF-lKB5TuSodjwica",
          PresenterPreviewCtn: "_2Hk4rTxT-iClgcyX6vhQ-T",
          PresenterPreviewDesc: "_3pwOKm3mb1P6DMLSJV_irO",
          Intro: "yYvoXKxnt_cvDzZA4SWjg",
          State: "_3m-uJBKckbfIRJDTdOsxHc",
          AgreementsCtn: "_1TWapuESBrD691ajclNSk",
          ContactSectionCtn: "_3gDWxWwsVwJMSsDuwNdjWm",
          SectionTitle: "_3HeMoToqc_aBQ6fOQyGJv6",
        };
      },
      28796: (P) => {
        P.exports = {
          LivePreview: "eFYn5NNpjD2UUEaetVynq",
          Button: "_1_mHUKME5i3Y8zoNldiFoQ",
          DeviceDropdown: "_3k5_ki8-nxIYRWf3FJmYr7",
          Connected: "_1oL5XzL932fPV06pp5B5w7",
        };
      },
      6103: (P) => {
        P.exports = {
          Ctn: "BTMmbSI5WdBvCQVAgf3-i",
          ButtonIcon: "_21IZDNymOVDf4u4Ont7WVA",
          SalePageTOCPlacement: "_3swQ-bhpt-4JFhKZu9FvNW",
        };
      },
      14846: (P) => {
        P.exports = {
          UploaderCtn: "_2pUza_pnbgUythyKOjqxzo",
          ControlsRow: "_3_gnpCxErTMQb0psyMNlVR",
          FadeColorLabel: "_3qyY3cTQWHxeyBMVLidq9m",
          ColorSwatch: "_2ExdJKlXoLbv3dpXCYivJp",
          FadeColorValue: "oM9dArrfzKNMmCWJjniBS",
          SmallBtn: "EH1UVP6JohkAOVavQxOEF",
          PreviewCtn: "_2frpp5o_RADaM2yEuWdDO4",
          PreviewArt: "_3gL2tdNsAa8cNXf1HxCWKm",
          PreviewPlaceholder: "_3LNtkSgj8P6uG4al16RF5s",
          Empty: "_16yHi2sJaW9QaDg4Zh6KX5",
          PreviewFade: "_3w3hfJYQwizAonvS6PbqxS",
        };
      },
      47155: (P) => {
        P.exports = {
          UploaderCtn: "_1B1zXx3Ukh5fPY5eB6F2Ca",
          CapsuleCtn: "_3K7h_ivhFFa9wmqp1O_e5n",
          CapsuleTitle: "_1YilvBMh1lDdWYGq5MnmqO",
          CapsuleDimensions: "_2R7J4mdptFLnMorL9p9WuY",
          CapsulePreview: "_2eDmRg0urY8jNMPG7lpQ91",
        };
      },
      18368: (P) => {
        P.exports = {
          SocialShareCtn: "FFYZQ30ue3bMXnyIP5UrW",
          DefaultSocialOverrideMsg: "DdtTvlKvWgvmBUSKQLgf1",
          DefaultSocialImgCtn: "_10QpUx-xWFinl4cM4hpslY",
          Small: "_1I5VGNY5lZBCAPQRmiK5oV",
          SocialShareText: "_3AR23rWGeNb-oZhicgbdGr",
          SocialTitle: "_2AobCe1CkG1-bdYa01CFZU",
          SocialDesc: "_1Unfeuc-ubWDHNdJjT-Xhv",
          ErrorContainer: "_2FQ2lKY1ejk_P-O1Vkr45Z",
          ErrorText: "_1lC9RtUD5LH34BUY2oMEWR",
        };
      },
      88748: (P) => {
        P.exports = {
          WarningContainer: "_3KKQLT-cntemarSxLAOHU4",
          Warning: "_3j12-L_RkqFQTnTaY3jfxl",
          Buttons: "_1NXKvU6Jb0wmgRqjJNUvTo",
          TooltipIndicator: "_3q4PQbri3zpBCLZtr1RhjU",
        };
      },
      11113: (P) => {
        P.exports = {
          AssociatedBuildBody: "_1rnVUYtxCV0s6yyvpWQdNr",
          BuildDisplay: "_1HwK4xlcGUHwQQ8N0JlIOY",
          BuildUnlinked: "_1cg3t7W3zJ1d2fyZeemkqS",
          BuildLinkedBranch: "_2ssXJvILzS4NK3EGgXkahJ",
          BuildLinkedDefault: "fHJYYxIYA2NCGNolmgOMi",
          BuildIDLink: "_2-Syn-OgAW18RXr3Rz6YOD",
        };
      },
      86836: (P) => {
        P.exports = {
          AddTitleButton: "XKHg8utmcVGXt54ZWUTca",
          CustomTitleCtn: "_1qoSQ8xx3K6loQPzOE0HiB",
          LanguageContainer: "_3WmqO9SJ2x76duLZu9m2_w",
          customTitleOptionsCtn: "zhH_Vr0LaMN9JLW17_6Sg",
          TitleRowCtn: "_96im4Pfj3wp5vXCaqhDwZ",
          AccountRow: "_2uIyvmr0xlWuKw0K7c5XEB",
        };
      },
      54736: (P) => {
        P.exports = {
          DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
          EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
          EventEditorBottomBar: "_1noS58WsfHN3KuGVDzlv9r",
          EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
          EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
          AdditionalContent: "_2fUl5vCnrlT9P7kskRIiWx",
        };
      },
      31467: (P) => {
        P.exports = {
          DisplaySectionHeaderContainer: "_1xnIXWjdhCoRxuorR33Hja",
          DisplaySectionHeader: "_34f0ckwUpFDCDFOre5vKKc",
          DisplaySectionSubHeader: "_23nhJsiCnqk1JbRY4BqQYI",
          DisplaySectionEmpty: "_2BmSNGrjP-OITpT0J86b8v",
          EventDashboardDataCtn: "_1uPNGB9kdIqm4bvA3MWImI",
          LoadMoreEventsCtn: "_2asU2ngzNsnuUiOXlnE9gs",
          EventDashboardCtn: "_2WqPrwl1Lj6NrDCl6PxxBM",
          EventDashAdminToolsCtn: "_1OMO4Lb3thfoiLCtomeJ5l",
          EventDashboardSearchCtn: "_2Xt1OEvVr8cLVtuc0pJgwh",
          MainLists: "_2Yhqn7VDJjxvfEh06aKUZr",
          ManageButton: "_230VZeyDMcnXTFGA7wbiRz",
          Edit: "pvLmXgZ5uK2ammqFQVDtK",
          Delete: "_9SG7g0HWSikC38CnZUZPa",
          Clone: "_21_l8F0r9GZ8oNHQawRql9",
          View: "_3xhNUX1f66dkbO0jpbcrUB",
          Publish: "_2ewSqivponp2ZnRx--ccH",
          Section: "_16BNVQTv5mM5n7gkZtksG1",
          Unpublished: "_2MUzvx5CleYIyyUnHga8ex",
          AuditInfoItem: "_3zF56_7Le3QZgMK6daAhiC",
          AuditItemStatsCtn: "_2is7FNTYDmGf8I2LvURouk",
        };
      },
      30040: (P) => {
        P.exports = {
          CenterAlign: "cMmai1T2HLkMm53hworFg",
          ControlBarCtn: "_1RQ0BaFzyVrnbeaKB486g2",
          ButtonSettingContainer: "_3jwD2isodRqha0tS-q5TpD",
          ButtonSettingRow: "_1mF5pWZlkV-uvlPZeq-ATE",
          DevHeader: "_35PpKbsBORHxXvGWt2cUXd",
          EmailTabCtn: "fDsyXs0SX_yDzpvJgrj9Q",
          EmailInputText: "_1UcSgRiHZawoyZCBLSEYOw",
          EmailBackground: "bEP0PYdTho_Gl5g1z0hjx",
          DevEmailEmailBackground: "_20VcuDt9BKhha67F592sBU",
          EmailEditorContent: "_1nDhBmZLQlVzj3E7WKKhWq",
          EmailIconHeader: "_3LZBlwbB2tIXbCKqRcW8HK",
          FooterLegal: "bJOiiRXFyVnQ_XIwB8q71",
          EditImageInputCtn: "_1LyXpjatj6a2roksJ1w-Et",
          EmailInput: "_2D8ACkzapgcXt2i4mtVaUl",
          EmailOptionTitle: "_1zLvJ9yv1UricUaXbx0_S6",
          EmailSection: "_1zUIkI7AgdYO4GwG_NQHCK",
          EmailSubjectCtn: "BHpFDMbEwMQJp9qUbcnBp",
          EmailSubjectSelect: "_18xOZXw0zCpDoxyJ6IpE9O",
          EmailTemplate: "_18iTrIYTp7iRLbc4Gf8nPS",
          EmailTextCtn: "_1rQlPdfCXmfGtHnibyLU0q",
          HeadlineInput: "_2lHX9aoh5vq8UVFZpoUXLi",
          Footer: "_23AXhs6fxOH-ri30Ku83kQ",
          ImgCrossCtn: "_59gyFo1iYkpAzzfYIfPB",
          FullImageCtn: "uv6NVLDsJZRg2Vd6UPU57",
          BodyInput: "_3VRhYM6Jz6nfphcVyPLbHF",
          Hello: "Gd3d5QHNaw4ZwdI1OpckY",
          Reason: "_10TSvg1eJrb02iaDHClaMm",
          RecipientCtn: "_330DrT_T9AuTNElumsTjbO",
          GameLink: "_39DSSDvMsjSABWClwcIbZw",
          RightAlign: "zffsfYWrudjCkI4Dsh6SP",
          TargetAndAudience: "_3h8QMOnSMH3qwo0pouxQl1",
          VideoCtn: "_2mtrEAz9iqZDwFHWOFEWYs",
          VideoInputCtn: "_1ESNVZsJhsRKLGR6DIDgGv",
          ButtonDestInputSaleURL: "_3Lr4kQNl8EB90bYreCkavO",
          DevEmailTemplate: "sC9ZVo4LWRmp7sk7FL_1m",
          DevEmail_Content: "_25GtlukMBCGELygDEnZfrY",
          DevEmail_TopLogo: "_1dbBhgsGLkRM492mX7zkNQ",
          DevEmail_TopHeader: "_2lmZlTXR6-c1uaj5PbNgf3",
          DevEmail_Subject: "_37Wbo2nuC0l3mNcjGRZHyg",
          DevEmail_SignOff_Img: "KW2YG6hHfFQVuV4eJ3Ipz",
          DevEmail_Signoff: "_3iJuG0UcI4rSj5zJKaL5fc",
          DevEmail_Footer_Ctn: "RINyWReHxs1fxv1jgY7G4",
          DevEmail_Footer_Reason: "_1h_BmZOxsmD73ffKbjlIdO",
          DevEmail_Footer_SubSection: "_2gEsj3IHJae8fb06fRdJk_",
          DevEmail_Footer_Bold: "CSfHWKG5qt7_XeLCkaw8P",
          DevEmail_Footer_Regular: "_1dDJaK_qsXmQ27GlhTJhAA",
          DevEmail_Follow: "_1gwxy_hzPqUh-p_K4z_Edy",
          DevEmail_RecipientTable: "_2EDtiW4k-fQawJspq90nOy",
          TargetCtn: "_1Ts_ngj40ZiCo9Sc68jnwf",
          TargetTypeTitle: "_2EritTe1Kxna1Z6lA0jGtL",
          TargetTypeCtn: "_3TxAc5Yw0K8WYy6-rGW7Qn",
          TargetedListCtn: "_3NubRccs6p7sKSNLv5Qtmq",
          SelectListCtn: "_980o4njosOdbwYRFG-3CJ",
          SupportCtn: "_27guD_MAYlcodq6X9jXiyE",
        };
      },
      4969: (P) => {
        P.exports = {
          ThemedCtn: "_3JuTN3-LxaE1Kvz0sU14cv",
          CategoryOption: "_4ke28HUvwT2rIC2CU4462",
          CategoryTitle: "Dx6oJLmZ21r_VQlYV17ML",
          event_nomination_banner_ctn: "_1w12VaiWFhKBsTkQ0M7Mla",
          event_nomination_banner: "_2nEQSt0e5gAadvWMl-0IYD",
          event_nomination_banner_text: "_1gePUvogr9fXbuDaaMXFeP",
        };
      },
      6542: (P) => {
        P.exports = {
          PublishOption: "_6BF_4hDIQb4IUVMnPGyOc",
          Description: "_1zX1bcfpvl3eDzOofaa0Ld",
          PublishButton: "_3DS9nFmljPIAzK4YYNyJ7M",
          PublishButtonCtn: "dwVDG_w5nz5NZkVrF3Ymt",
          EventPublishButton: "_eYd_33i0Tu425frNF-D0",
        };
      },
      82267: (P) => {
        P.exports = {
          SummaryItems: "_12a_LkNOoLjY4U8GJXGiJr",
          ReachItems: "H_jRCccfsQh7wJDqpSFW",
          StatusRow: "SZwFXdjVvpVCLQbSx9W0N",
          StatusText: "_1NUKtMG9ZbBMEKZGUbo5dU",
          LinkRow: "_1WnQ1-TNrdTLC4CNy0LMal",
          PublishOptionsCtn: "_379kpZ55vVRtg4v3mmyzjh",
          PublishOption: "_2iQ1tjpuZUgm_7yak-mUME",
          VisibilityNote: "_2UnJcjbE6D6gpVyZQK1fpg",
          ReachSubject: "_3EQb8yhc8g_YREweH7REin",
          Future: "_5EyH71mHwoPLik7PPLwj6",
          ReachColumnTitles: "_6VhIV7p4e0V5K7UQS8rQ3",
          ReachColumnName: "_3ORkBJ_KuD1aaROllFDvmr",
          ReachSubjectOptional: "aXhwG7UbxYk72LUwo7nf3",
          ReactSubjectOptionalText: "_2CIfGSkukCcX90z7Zh50qn",
          ReachPendingVisibilityText: "n1wAjXJP9DpVKq6YYJXlu",
        };
      },
      86649: (P) => {
        P.exports = {
          TileContainer: "_1eeyC5eleIewWdIjFUHKZF",
          TileEventRow: "nCFimHHGxes3vcTixXyoM",
          ShowEventMetaDataSizes: "EU0bQ6RzkpH7YEV3PqpFi",
          ShowLibrarySpotlight: "_2cmpQqEtWhQKNVzgGRC1gf",
          TileImageCtn: "_1vi2yQBaJNZnrkCvcAkYPu",
          PartnerEventFeaturedHeader: "_2BHkjrXI8mj4iCap8XAl7C",
          EventStateUpcoming: "qfpNtFPUJlNjLktoUvJ0k",
          EventStateActive: "_3F1Bjy-j37LMI3EtJA1h2Q",
          EventStateRecent: "_2ge3pkXyDOZWz8-ARJz8UM",
          TileStats: "GZhweiVUpwbzoIjDE7u-Z",
          Spacer: "Lux3qW8DzWm72y25tK65P",
          TileImage: "_5NjHVepJ-MpagvcelrrLe",
          TileTextContainer: "_31yesbrR3TY0eFzQ5LMPfu",
          TileTextAppName: "_3x6bHYqsfNw0nz_4TDuSxI",
          TileTextEventType: "_2DMSloKwrNjr6coAQd8ZiI",
          TileHasSale: "_1trq1cVOPKvVg7fFpo7i1j",
          TileTextStartsIn: "_3jRSO6lxpLL9G3wo0SR_bn",
          TileTextSubTitle: "_3Sc1E4dUzfzO6of2iXaKtc",
          TileDescriptionContainer: "_2yxWDPnwMaM08JNkzITkA2",
          TileButtonContainer: "_1JNbDS8V61g_7Wpc_xtkEQ",
          TileAgeNotAppropriate: "_1EyzXBq7ZEaS5rLANMjygs",
          ManageButton: "_60IytO_Ke7DCDgSXKUCxJ",
          Edit: "_2h3YfZsHYE19rH00uHNKVS",
          Delete: "_8zmLUr-qx1Bzu4WqzkSj2",
          Clone: "_1QJ8IfR50ZDSYZqiwaHD6Z",
          View: "_1IvY3uUm_10hrO9weWkZ3L",
          Publish: "_1szIuk73YkbLwAB0TblZQB",
          CloneLangAlert: "_2U-5yBEKxtzmhHMrEKXA09",
          CloneLangListCtn: "_3Nj5xHseX0-Ki-jpnVPZzP",
          CloneCheckBox: "_28WRJt_EhqnDXXoRbzDKHq",
          MetaDataCtn: "_3EXNJZmBWQbV9eSwfrVIgH",
        };
      },
      31501: (P) => {
        P.exports = {
          ErrorMessaage: "_13sZcUrcBMNUU0KdAqKPUS",
          UpdatingMessage: "_3baPwwHaL5S0vl62s9YPRm",
        };
      },
      91126: (P) => {
        P.exports = {
          ValveCrowdInSyncCtn: "_8MIrt7rQXkA0xE5sAjOee",
          ValveCrowdInSyncLabel: "_22b0C1Xi03QNdTFKsYypHR",
          SyncPanelError: "yn_yu2EaUigYFm9QQAD7o",
        };
      },
      9295: (P) => {
        P.exports = {
          ManageLocCtn: "_1f5Ik3OrM66FNXPSlNh_zR",
          LocButtonsCtn: "bAoVO_tlg_jpl-uvQ9JFF",
          ManageLocContents: "_2k4C7NwMxpGzAuHjmqEURq",
          Header: "_1_uWHf6GPtvPfqvUQr-Alu",
        };
      },
      26917: (P) => {
        P.exports = { Waypoint: "_2pZVu5uwOWvVnfNisJPOB9" };
      },
      49285: (P) => {
        P.exports = {
          TableOfContentsContainer: "_3N5be2rmYYNMGufXaKpBSb",
          TableOfContents: "_3tLgun3y-qOlJAVcfwxowt",
          TOCEntry: "_1fzqunMp3Jq_h9SsiGwRGu",
          TOCEntryText: "_2GtCXeIDXaH3zjSXPON8Mc",
          SectionOnScreen: "_3xZOOBpCfl1mS9OS-_DVq4",
          TOCIndent: "_1fP_E_5IswSiXZj42jqqWq",
          Header: "_1GAZYe3epNmQSdQq0rhZBQ",
        };
      },
      32545: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
        };
      },
      10026: (P) => {
        P.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (P) => {
        P.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (P) => {
        P.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      92451: (P) => {
        P.exports = { DialogCtn: "e7i0Hs6j09gCdPXXjl7Lk" };
      },
      11833: (P) => {
        P.exports = {
          ApprovalRequiredCtn: "_2pKjCSfT0Aa7Wx8_VoNJzc",
          PendingApproval: "_27C9CXtP6vYFYNpAhDJciM",
          Approved: "_2W3o61eSl990XjaneBlzaE",
          PublishWithRestrictions: "_32dufkQ3fNn_8sJusL-nd_",
          Right: "_2lUXdTnEBjAXrbGOs8rZVb",
          Title: "Oc0UNBEG4L2poFTcpQzwx",
          RequireText: "OZlfJDOJer5NjUxcJJf7Z",
        };
      },
      47534: (P) => {
        P.exports = {
          SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
          SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
          SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
          SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
          ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
          AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
        };
      },
      9202: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
        };
      },
      91640: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          Heading: "_3kTQIYYiQiVR_DeJepkOwJ",
          Body: "_2s393FLIe2l5quVJHoS53K",
          HeaderBlock: "X9bYNT3rKpg6L1Cgq45pG",
          Background: "_1xwi06sEKXpwIpZcgHle_h",
          DimBackground: "_2N55HNCo3jLIzL6RNNlRUo",
          Input: "_1BUtyMrOPfXVpnfK-Z5OnA",
          CopyContainer: "_1HjkZ3ooQw-4TV518YPtvp",
          Text: "_1ehqRyqgPLFNoFwFifHPPR",
          Link: "_18Sc08YQfmAIVx8H1h8A1V",
          Button: "_2772E6skxrFIemLRdp0EKv",
          GenerateLinkButton: "T52tUwptWdakIKgaAVn3i",
          ProfileCard: "_28a_CNvDls7VgWoPW2-9Kz",
          UserContainer: "_29w-2Eb_kk-viSqGW8RTn2",
          Image: "_1n4lDOfOQzOhvshIPt1UWT",
          ProfileContent: "_1qz9xLw5YttjO8gVfuMwS",
          ProfileLink: "_1tEt0fYckNbFAqGLEfrsfj",
          Failure: "UoMCo-OvninFBFozRomeh",
          Success: "zNkywkFbUJio86FBwBWwx",
          FriendCodeSelector: "_3nmSpgo_T_V0-Er7h8J2Ar",
          SendInviteButton: "kcAlkPA1uhcWs_5eatvVd",
        };
      },
      96471: (P) => {
        P.exports = {
          Label: "_1LhItwhLHspVcQdfcbd2Sg",
          ImportLocSampleButtonCtn: "D-1dlROLVuva-sb6tFgwU",
          SampleTitle: "_9189ilzQ3YES-a-6DyBhR",
          ImportButton: "WyfyxbGrKQq8cKMK5kfxE",
        };
      },
      16345: (P) => {
        P.exports = {
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
      26759: (P, Re, h) => {
        "use strict";
        h.d(Re, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
      },
      96715: (P, Re, h) => {
        "use strict";
        h.d(Re, { A: () => e });
        const e =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
    },
  ]);
})();
