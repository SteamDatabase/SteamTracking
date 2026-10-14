/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [6662],
    {
      1470: (z, Et, p) => {
        "use strict";
        p.r(Et), p.d(Et, { default: () => Jp });
        var e = p(7850),
          E = p(90626),
          ee = p(58732),
          P = p(75372),
          Re = p(53071),
          N = p(99412),
          ge = p(41735),
          pe = p.n(ge),
          R = p(75844),
          ue = p(17083),
          $ = p(90825),
          ht = p(48421),
          Oe = p(38884),
          me = p(76559),
          oe = p(813),
          Ve = p(45812),
          g = p(19316),
          We = p(70747),
          J = p(95695),
          f = p.n(J),
          s = p(18210),
          pt = p(5065),
          D = p(3166),
          W = p(88003),
          O = p(53107),
          K = p(7582),
          je = p(77495),
          Ie = p(84676),
          Ke = p(43308),
          V = p(2801),
          Z = p(85599),
          $t = p(22880),
          dt = p(92264),
          Ea = p(36174),
          Ct = p(92451),
          Ft = p.n(Ct);
        const gn = { include_basic_info: !0 };
        function re(a) {
          const { clanInfo: t, closeModal: n } = a,
            [i] = (0, Ie.t7)(t.appid, gn),
            [l, o] = E.useState(!0),
            [r, d] = E.useState(!0),
            m = 1063339200,
            c = K.HD.GetTimeNowWithOverride(),
            [v, h] = E.useState(c - Ea.Kp.PerMonth),
            [_, u] = E.useState(c),
            [x, b] = E.useState(-1),
            S = x >= 0;
          return (0, e.jsx)(V.o0, {
            strTitle: (0, s.we)("#EventDashboard_Stats_title"),
            strDescription: (0, s.we)("#EventDashboard_Stats_desc"),
            closeModal: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: S,
            onOK: () =>
              A(t, i, l ? m : v, r ? Number.MAX_SAFE_INTEGER : _, b).then(() =>
                n(),
              ),
            children:
              t.appid && !i
                ? (0, e.jsx)(Z.t, {
                    string: (0, s.we)("#Loading"),
                    position: "center",
                    size: "medium",
                  })
                : (0, e.jsxs)("div", {
                    className: Ft().DialogCtn,
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
                          (0, e.jsx)(g.Yh, {
                            label: (0, s.we)("#EventDashboard_Stats_Oldest"),
                            onChange: o,
                            checked: l,
                            disabled: S,
                          }),
                          !l &&
                            (0, e.jsxs)("div", {
                              children: [
                                (0, s.we)(
                                  "#EventDashboard_Stats_Oldest_Override",
                                ),
                                (0, e.jsx)(Ke.K, {
                                  nEarliestTime: m,
                                  nLatestTime: r ? void 0 : _,
                                  bShowTimeZone: !0,
                                  fnGetTimeToUpdate: () => v,
                                  fnSetTimeToUpdate: h,
                                  disabled: S,
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
                          (0, e.jsx)(g.Yh, {
                            label: (0, s.we)("#EventDashboard_Stats_Newest"),
                            onChange: d,
                            checked: r,
                            disabled: S,
                          }),
                          !r &&
                            (0, e.jsxs)("div", {
                              children: [
                                (0, s.we)(
                                  "#EventDashboard_Stats_Newest_Override",
                                ),
                                (0, e.jsx)(Ke.K, {
                                  nEarliestTime: l ? m : v,
                                  bShowTimeZone: !0,
                                  fnGetTimeToUpdate: () => _,
                                  fnSetTimeToUpdate: u,
                                  disabled: S,
                                }),
                              ],
                            }),
                        ],
                      }),
                      S &&
                        (0, e.jsx)(Z.t, {
                          position: "center",
                          size: "medium",
                          string: (0, s.we)(
                            "#EventDashboard_Stats_Progress",
                            x,
                          ),
                        }),
                    ],
                  }),
          });
        }
        async function A(a, t, n, i, l) {
          const o = new Array(),
            r = pe().CancelToken.source();
          let d = 0;
          l(d);
          const m = 100;
          let c = 0,
            v,
            h = new Array();
          const _ = (0, N.sfN)(D.TS.LANGUAGE);
          do
            if (
              ((c += 1),
              (h = await je.O3.LoadAdjacentPartnerEvents(
                v,
                a.clanSteamID,
                void 0,
                0,
                m,
                { rtime_oldestevent: n, only_summaries: !0 },
                r,
              )),
              (h == null ? void 0 : h.length) > 0)
            ) {
              (d += h.length), l(d), (v = h[h.length - 1].GID);
              const u = h
                .filter((x) => x.startTime <= i && x.BIsVisibleEvent())
                .map((x) => x.GID);
              u.length > 0 &&
                (await Ve.Uq.LoadStatsForEvents(a.clanSteamID, u, r),
                (d += u.length),
                l(d),
                u.forEach((x) => {
                  const b = Ve.Uq.GetStatsFor(a.clanSteamID, x),
                    S = je.O3.GetClanEventModel(x),
                    y = S.GetStartTimeAndDateUnixSeconds(),
                    L = S.GetEndTimeAndDateUnixSeconds();
                  o.push({
                    appid: a.appid,
                    app_name: (t == null ? void 0 : t.GetName()) || "",
                    event_name: S.GetNameWithFallback(_),
                    event_type: S.GetEventTypeAsString(),
                    event_start_date: (0, s.TW)(y) + " @ " + (0, dt.KC)(y),
                    event_end_date: (0, s.TW)(L) + " @ " + (0, dt.KC)(L),
                    ...b.m_stats,
                    event_gid: "'" + x,
                  });
                }));
            }
          while (h.length == m && c < 100);
          return (
            $t.g.WriteCSVToFile(
              o,
              "event_stats_" +
                a.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                ".csv",
            ),
            !0
          );
        }
        var F = p(82734),
          Q = p(11243),
          Te = p(179),
          ke = p(61322);
        function Qe(a) {
          const {
              summary: t,
              clanSteamID: n,
              bEventIsInModerationQueue: i,
              bIsAllowedInLibrary: l,
              bCompact: o,
            } = a,
            [r] = (0, Te.QD)("expanded", !1),
            [d, m] = E.useState(!!r || o),
            c = oe.ac.GetClanInfoByClanAccountID(n.GetAccountID());
          return (0, e.jsx)(ke.a, {
            summary: t,
            bCompact: o,
            bExpanded: d,
            bIsAllowedInLibrary: l,
            bEventIsInModerationQueue: i,
            header: o
              ? void 0
              : (0, e.jsxs)("div", {
                  className: pt.StatsCtnTitle,
                  children: [
                    (0, e.jsxs)("div", {
                      className: pt.StatTitle,
                      children: [
                        (0, s.we)("#EventDashBoard_SummaryStats_Title"),
                        (0, e.jsx)(Q.o, {
                          tooltip: (0, s.we)(
                            "#EventDashBoard_SummaryStats_Desc",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: pt.StatsActionRow,
                      children: [
                        (0, e.jsx)(g.$n, {
                          onClick: (v) =>
                            (0, O.EP)(
                              v,
                              `${D.TS.PARTNER_BASE_URL}/doc/marketing/event_tools/stats`,
                            ),
                          children: (0, s.we)(
                            "#EventDashBoard_SummaryStats_AboutStats",
                          ),
                        }),
                        (0, e.jsx)(g.$n, {
                          onClick: (v) =>
                            (0, W.pg)(
                              (0, e.jsx)(re, { clanInfo: c }),
                              (0, F.uX)(v),
                            ),
                          children: (0, s.we)(
                            "#EventDashBoard_SummaryStats_Export",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: pt.StatsActionRow,
                      children: (0, e.jsx)(g.$n, {
                        onClick: () => m(!d),
                        children: (0, s.we)(
                          "#EventDashBoard_SummaryStats_Details",
                        ),
                      }),
                    }),
                  ],
                }),
          });
        }
        var Ne = p(96378),
          le = p(85143),
          No = p(81944),
          fa = p(71742),
          ye = p(34592),
          Wa = p(8323),
          j = p(36707),
          X = p(54963),
          Qa = p(36943),
          Bo = p(65267),
          ls = p(51648),
          st = p(18057),
          rs = p(12932),
          ea = p(71684),
          Sn = p(31467),
          we = p.n(Sn);
        const Mo = (a) => {
            const { closeModal: t } = a,
              n = (0, Bo.d)(D.UF.CLANACCOUNTID);
            return (0, e.jsx)(V.o0, {
              strTitle: "Publishing Audit History",
              bAlertDialog: !0,
              onOK: t,
              onCancel: t,
              className: "auditContents",
              strDescription:
                "Here are the publishing audit history. Recorded starting from mid-June 2021",
              children:
                n == null
                  ? (0, e.jsx)(Z.t, {
                      string: (0, s.we)("#Loading"),
                      position: "center",
                      size: "medium",
                    })
                  : n.length == 0
                    ? (0, e.jsx)("div", {
                        children: "No Publishing History available",
                      })
                    : n.map((i) =>
                        (0, e.jsx)(Lo, { record: i }, i.clan_event_gid),
                      ),
            });
          },
          Lo = (a) => {
            var t;
            const { record: n } = a,
              i = E.useMemo(() => me.b.InitFromClanID(D.UF.CLANACCOUNTID), []);
            return (0, e.jsxs)("div", {
              className: Sn.AuditInfoItem,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    "Clan Event GID:",
                    (0, e.jsx)("a", {
                      href: `${D.TS.COMMUNITY_BASE_URL}gid/${i.ConvertTo64BitString()}/partnerevents/edit/${n.clan_event_gid}`,
                      target: "_blank",
                      children: n.clan_event_gid,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: ["Type: ", (0, ea.rG)(n.event_type)],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    "Publish Time: ",
                    (0, e.jsx)(st.K4, {
                      dateAndTime: n.publish_time,
                      bSingleLine: !0,
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  children: (0, e.jsx)(ls.B, {
                    accountID: n.publish_account_id,
                    locToken: "#EventDashbard_PublishingAccount",
                  }),
                }),
                (0, e.jsxs)("div", {
                  children: [
                    "tags: ",
                    (t = n.tags) == null ? void 0 : t.join(", "),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: Sn.AuditItemStatsCtn,
                  children: (0, e.jsx)(rs.qx, {
                    title: "Show Event Stats",
                    bStartMinimized: !0,
                    children: (0, e.jsx)(Oo, { clanSteamID: i, record: n }),
                  }),
                }),
                (0, e.jsx)("hr", {}),
              ],
            });
          };
        function Oo(a) {
          const { clanSteamID: t, record: n } = a,
            i = (0, Ve.Cl)(t, n.clan_event_gid);
          return (0, e.jsxs)("div", {
            children: [
              i == null &&
                (0, e.jsx)(Z.t, {
                  string: "loading",
                  position: "center",
                  size: "medium",
                }),
              i == null &&
                (0, e.jsx)("div", { children: "Failed to load events stats" }),
              !!i &&
                (0, e.jsx)(Qe, { summary: i, clanSteamID: t, bCompact: !0 }),
            ],
          });
        }
        var Ut = p(26589),
          Xe = p(25817),
          Y = p(14947),
          mt = p(26145),
          ds = p(56412),
          cs = p(26251),
          Ee = p(71421),
          Po = p(20398),
          C = p(55884),
          Ro = Object.defineProperty,
          ko = Object.getOwnPropertyDescriptor,
          En = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? ko(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Ro(t, n, l), l;
          };
        const Fo = "title",
          Uo = "subtitle",
          Ho = "summary",
          zo = "body",
          us = "email_headline_",
          hs = "email_body_",
          Vo = "sale_section_label_",
          ps = "sale_section_label_id_",
          ms = "sale_section_subtitle_id_",
          _s = "sale_section_text_id_",
          vs = "email_subject",
          gs = "sale_tab_name_",
          Ss = "sale_facet_name_",
          Es = "sale_facetvalue_name_",
          fs = "sale_facetvalue_subtitle_",
          xs = "sale_reservation_bbcode_",
          bs = "sale_reservation_outofstock_",
          js = "sale_reservation_delivery_",
          fn = "sale_reservation_product_",
          Wo = "sale_reservation_variation_",
          Cs = "sale_reservatin_callout_",
          ws = "sale_white_supplies_last_bbcode_",
          ys = "sale_section_desc_",
          Ds = "sale_section_title_desc_",
          Ts = "broadcast_custom_title",
          Is = "question_",
          As = "answer_",
          Gs = "badgename_",
          Ns = "badgeinitial_",
          Bs = "badgeprogress_",
          Ms = "badgemax_",
          Ls = "quest_close_",
          Os = "quest_open_",
          Ps = "discoqueue_desc_",
          Rs = "socialshare_header_",
          ks = "socialshare_title_",
          Fs = "socialshare_desc_",
          Us = "socialshare_image_",
          Hs = "socialshare_imagealttext_",
          zs = "rewardshelf_itemdef_",
          Vs = "claimitem_button_",
          xn = "disclaimer_name_",
          Ws = "medialayout_item_",
          Qs = "mediacontent_title_",
          Ys = "mediacontent_sutitle_",
          Js = "mediacontent_desc_",
          ta = "meetsteam_",
          qs = ta + "title_",
          Ya = ta + "desc_",
          Qo = ta + "faq_",
          Yo = ta + "ia_",
          bn = ta + "break_",
          aa = "techspecblock_",
          Ks = "_name_",
          Zs = "_desc_",
          jn = "submenu_",
          Xs = "mediacontent_alt_text_",
          $s = "mediacontent_title_alt_text_",
          Cn = "userpoll_",
          wn = "userpoll_option_",
          yn = "tabs_jumplist_",
          ei = "tabs_tagfilter_name_";
        function ti(a, t, n, i) {
          var l, o, r, d, m;
          let c = new Po.G();
          if (t) {
            let h = a.GetEventModel();
            for (let _ = N.Bhc; _ < N.bP9; ++_)
              (a.BHasLanguageTitle(_) || _ == N.Bhc) &&
                c.SetLocalization("title", _, a.GetName(_)),
                (h.BHasSubTitle(_) || _ == N.Bhc) &&
                  c.SetLocalization("subtitle", _, a.GetSubTitle(_)),
                (a.BHasLanguageDescription(_) || _ == N.Bhc) &&
                  c.SetLocalization("body", _, a.GetDescription(_)),
                (h.BHasSummary(_) || _ == N.Bhc) &&
                  c.SetLocalization("summary", _, a.GetSummary(_)),
                a.GetEventModel().jsondata.meet_steam_groups &&
                  a.GetEventModel().jsondata.meet_steam_groups.forEach((u) => {
                    u.localized_session_title &&
                      s.NT.Get(u.localized_session_title, _) &&
                      c.SetLocalization(
                        qs + u.group_id,
                        _,
                        s.NT.Get(u.localized_session_title, _),
                      ),
                      u.localized_session_description &&
                        s.NT.Get(u.localized_session_description, _) &&
                        c.SetLocalization(
                          Ya + u.group_id,
                          _,
                          s.NT.Get(u.localized_session_description, _),
                        ),
                      u.localized_intended_audience &&
                        s.NT.Get(u.localized_intended_audience, _) &&
                        c.SetLocalization(
                          Ya + u.group_id,
                          _,
                          s.NT.Get(u.localized_intended_audience, _),
                        ),
                      u.localized_sesssion_faq &&
                        s.NT.Get(u.localized_sesssion_faq, _) &&
                        c.SetLocalization(
                          Ya + u.group_id,
                          _,
                          s.NT.Get(u.localized_sesssion_faq, _),
                        );
                  }),
                a.GetEventModel().jsondata.meet_steam_schedules &&
                  a
                    .GetEventModel()
                    .jsondata.meet_steam_schedules.forEach((u) => {
                      var x;
                      (x = u == null ? void 0 : u.session_breaks) == null ||
                        x.forEach((b) => {
                          b.localized_break_description &&
                            s.NT.Get(b.localized_break_description, _) &&
                            c.SetLocalization(
                              bn + u.schedule_id + "_" + b.break_id,
                              _,
                              s.NT.Get(b.localized_break_description, _),
                            );
                        });
                    });
          }
          if (n && a.BHasEmailEnabled()) {
            const h = a.GetEmailSettings();
            if (D.UF.IS_VALVE_GROUP) {
              let _ = new mt.WQ(a.GetEmailSettings());
              for (let u = N.Bhc; u < N.bP9; ++u)
                _.BHasLocalizedSubject(u) &&
                  c.SetLocalization(vs, u, _.GetLocalizedSubject(u));
            }
            h.sections.forEach((_, u) => {
              let x = new mt.JW(_);
              for (let b = N.Bhc; b < N.bP9; ++b)
                x.BHasHeadlineInLanguage(b) &&
                  c.SetLocalization(us + u, b, x.GetHeadline(b)),
                  x.BHasBodyInLanguage(b) &&
                    c.SetLocalization(hs + u, b, x.GetBody(b));
            });
          }
          const v = a.GetEventModel().jsondata;
          if (
            v != null &&
            v.bBroadcastEnabled &&
            ((l = v == null ? void 0 : v.localized_broadcast_title) == null
              ? void 0
              : l.length) > 0
          ) {
            for (let h = N.Bhc; h < N.bP9; ++h)
              if (s.NT.Get(v.localized_broadcast_title, h)) {
                const _ = v.localized_broadcast_title[h];
                c.SetLocalization(Ts, h, _);
              }
          }
          if (
            (t &&
              ((o = v.user_polls) == null ? void 0 : o.length) > 0 &&
              v.user_polls.forEach((h) => {
                var _;
                for (let u = N.Bhc; u < N.bP9; ++u)
                  h.localized_poll_description &&
                    s.NT.Get(h.localized_poll_description, u) &&
                    c.SetLocalization(
                      Cn + h.poll_id,
                      u,
                      h.localized_poll_description[u],
                    ),
                    (_ = h == null ? void 0 : h.options) == null ||
                      _.forEach((x) => {
                        x.localized_option &&
                          s.NT.Get(x.localized_option, u) &&
                          c.SetLocalization(
                            wn + x.option_id,
                            u,
                            x.localized_option[u],
                          );
                      });
              }),
            i && a.BHasSaleEnabled())
          ) {
            if (
              (r = v == null ? void 0 : v.sale_presenters) != null &&
              r.length
            )
              for (let h = N.Bhc; h < N.bP9; ++h)
                v.sale_presenters.forEach((_) => {
                  if (s.NT.Get(_.localized_presenter_name, h)) {
                    const u = _.localized_presenter_name[h];
                    c.SetLocalization(xn + _.unique_id, h, u);
                  }
                });
            ((m = (d = v.sale_sub_menu) == null ? void 0 : d.menu_items) == null
              ? void 0
              : m.length) > 0 &&
              v.sale_sub_menu.menu_items
                .filter((h) => {
                  var _;
                  return (
                    ((_ = h.localized_sub_menu_name) == null
                      ? void 0
                      : _.length) > 0
                  );
                })
                .map((h) => {
                  for (let _ = N.Bhc; _ < N.bP9; ++_)
                    h.localized_sub_menu_name &&
                      s.NT.Get(h.localized_sub_menu_name, _) &&
                      c.SetLocalization(
                        jn + h.unique_id,
                        _,
                        h.localized_sub_menu_name[_],
                      );
                }),
              a
                .GetSaleSections()
                .filter((h) => !h.disable_localization)
                .forEach((h) => {
                  var _,
                    u,
                    x,
                    b,
                    S,
                    y,
                    L,
                    G,
                    H,
                    te,
                    ce,
                    ie,
                    He,
                    nt,
                    ze,
                    lt,
                    Pe,
                    Nt,
                    gt,
                    Je,
                    Rt,
                    jt;
                  const rt = a.GetSaleSectionIndexByID(h.unique_id, !1);
                  for (let T = N.Bhc; T < N.bP9; ++T) {
                    if (
                      (a.BHasSaleSectionLabelLocalization(T, rt) &&
                        c.SetLocalization(
                          ps + h.unique_id,
                          T,
                          h.localized_label[T],
                        ),
                      a.BHasSaleSectionSubtitleLocalization(T, rt) &&
                        c.SetLocalization(
                          ms + h.unique_id,
                          T,
                          h.localized_subtitle[T],
                        ),
                      a.BHasSaleSectionTextLocalizationForLang(T, rt) &&
                        c.SetLocalization(
                          _s + h.unique_id,
                          T,
                          h.text_section_contents[T],
                        ),
                      a.BHasSaleSectionDescriptionBBCode(T, rt) &&
                        c.SetLocalization(
                          ys + h.unique_id,
                          T,
                          h.localized_description[T],
                        ),
                      a.BHasSaleSectionInnerTitle(T, rt) &&
                        c.SetLocalization(
                          Ds + h.unique_id,
                          T,
                          h.localized_title[T],
                        ),
                      h.section_type === "tabs" && h.tabs)
                    )
                      for (let I of h.tabs)
                        a.BHasSaleSectionTabName(T, I) &&
                          c.SetLocalization(
                            gs + h.unique_id + "_" + I.unique_id,
                            T,
                            I.localized_label[T],
                          ),
                          I.tab_jump_list &&
                            I.tab_jump_list.menu_items &&
                            I.tab_jump_list.menu_items.length > 0 &&
                            I.tab_jump_list.menu_items
                              .filter((q) => {
                                var Se;
                                return (
                                  ((Se = q.localized_sub_menu_name) == null
                                    ? void 0
                                    : Se.length) > 0
                                );
                              })
                              .map((q) => {
                                for (let Se = N.Bhc; Se < N.bP9; ++Se)
                                  q.localized_sub_menu_name &&
                                    s.NT.Get(q.localized_sub_menu_name, Se) &&
                                    c.SetLocalization(
                                      yn + I.unique_id + "_" + q.unique_id,
                                      Se,
                                      q.localized_sub_menu_name[Se],
                                    );
                              }),
                          ai(
                            c,
                            T,
                            ei + I.unique_id + "_",
                            (_ = I.tab_tag_filter) == null ? void 0 : _.rgNodes,
                          );
                    if (
                      (h.enable_faceted_browsing &&
                        (h.facets.forEach((I) => {
                          a.BHasSaleSectionFacetName(T, I) &&
                            c.SetLocalization(
                              Ss + h.unique_id + "_" + I.unique_id,
                              T,
                              I.name[T],
                            );
                        }),
                        h.facets.forEach((I) => {
                          I.facetValues.forEach((q) => {
                            a.BHasSaleSectionFacetValueName(T, q) &&
                              c.SetLocalization(
                                Es +
                                  h.unique_id +
                                  "_" +
                                  I.unique_id +
                                  "_" +
                                  q.unique_id,
                                T,
                                q.name[T],
                              ),
                              a.BHasSaleSectionFacetValueSubtitle(T, q) &&
                                c.SetLocalization(
                                  fs +
                                    h.unique_id +
                                    "_" +
                                    I.unique_id +
                                    "_" +
                                    q.unique_id,
                                  T,
                                  q.subtitle[T],
                                );
                          });
                        })),
                      h.section_type == "vo_internal" &&
                        ((u = h.internal_section_data) == null
                          ? void 0
                          : u.internal_type) == "reservation_widget" &&
                        (((x = h.internal_section_data.reservation_options) ==
                        null
                          ? void 0
                          : x.length) > 0 ||
                          h.internal_section_data.reservation_layout) &&
                        ((b = h.internal_section_data.reservation_options) ==
                          null ||
                          b.forEach((I) => {
                            I.localized_reservation_desc &&
                              s.NT.Get(I.localized_reservation_desc, T) &&
                              c.SetLocalization(
                                xs + h.unique_id + "_" + I.unique_id,
                                T,
                                I.localized_reservation_desc[T],
                              ),
                              I.callout &&
                                I.callout.localized_callout &&
                                s.NT.Get(I.callout.localized_callout, T) &&
                                c.SetLocalization(
                                  Cs + h.unique_id + "_" + I.unique_id,
                                  T,
                                  I.callout.localized_callout[T],
                                ),
                              I.localized_out_of_stock_override &&
                                s.NT.Get(
                                  I.localized_out_of_stock_override,
                                  T,
                                ) &&
                                c.SetLocalization(
                                  bs + h.unique_id + "_" + I.unique_id,
                                  T,
                                  I.localized_out_of_stock_override[T],
                                ),
                              I.localized_delivery_override_desc &&
                                s.NT.Get(
                                  I.localized_delivery_override_desc,
                                  T,
                                ) &&
                                c.SetLocalization(
                                  js + h.unique_id + "_" + I.unique_id,
                                  T,
                                  I.localized_delivery_override_desc[T],
                                );
                          }),
                        (y =
                          (S = h.internal_section_data.reservation_layout) ==
                          null
                            ? void 0
                            : S.product_configs) == null ||
                          y.forEach((I) => {
                            var q;
                            I.localized_product_config_title &&
                              s.NT.Get(I.localized_product_config_title, T) &&
                              c.SetLocalization(
                                fn + h.unique_id + "_" + I.unique_id,
                                T,
                                I.localized_product_config_title[T],
                              ),
                              (q = I.variations) == null ||
                                q.forEach((Se) => {
                                  Se.localized_variation_name &&
                                    s.NT.Get(Se.localized_variation_name, T) &&
                                    c.SetLocalization(
                                      Wo +
                                        h.unique_id +
                                        "_" +
                                        I.unique_id +
                                        "_" +
                                        Se.unique_id,
                                      T,
                                      Se.localized_variation_name[T],
                                    );
                                });
                          })),
                      h.section_type == "vo_internal" &&
                        ((L = h.internal_section_data) == null
                          ? void 0
                          : L.internal_type) == "while_supplies_last" &&
                        ((G =
                          h.internal_section_data.while_supplies_last_option) ==
                        null
                          ? void 0
                          : G.length) > 0 &&
                        h.internal_section_data.while_supplies_last_option.forEach(
                          (I) => {
                            I.localized_supply_desc &&
                              s.NT.Get(I.localized_supply_desc, T) &&
                              c.SetLocalization(
                                ws + h.unique_id + "_" + I.unique_id,
                                T,
                                I.localized_supply_desc[T],
                              );
                          },
                        ),
                      (h.section_type == "quiz" ||
                        h.section_type == "template_faq") &&
                        ((te = (H = h.quiz) == null ? void 0 : H.questions) ==
                        null
                          ? void 0
                          : te.length) > 0 &&
                        ((ce = h.quiz) == null ||
                          ce.questions.forEach((I) => {
                            I.localized_question &&
                              s.NT.Get(I.localized_question, T) &&
                              c.SetLocalization(
                                Is + h.unique_id + "_" + I.unique_id,
                                T,
                                I.localized_question[T],
                              ),
                              I != null &&
                                I.answers &&
                                I.answers.forEach((q) => {
                                  q.localized_answer &&
                                    s.NT.Get(q.localized_answer, T) &&
                                    c.SetLocalization(
                                      As + h.unique_id + "_" + q.unique_id,
                                      T,
                                      q.localized_answer[T],
                                    );
                                });
                          })),
                      h.section_type == "template_techspec" &&
                        ((He =
                          (ie = h.tech_specs) == null
                            ? void 0
                            : ie.tech_spec_block_list) == null
                          ? void 0
                          : He.length) > 0 &&
                        ((nt = h.tech_specs) == null ||
                          nt.tech_spec_block_list.forEach((I) => {
                            I.localized_block_title &&
                              s.NT.Get(I.localized_block_title, T) &&
                              c.SetLocalization(
                                aa + h.unique_id + "_" + I.unique_id,
                                T,
                                I.localized_block_title[T],
                              ),
                              I != null &&
                                I.spec_list &&
                                I.spec_list.forEach((q) => {
                                  if (
                                    q.localized_spec_name &&
                                    s.NT.Get(q.localized_spec_name, T)
                                  ) {
                                    const Se =
                                      aa + h.unique_id + Ks + q.unique_id;
                                    c.SetLocalization(
                                      Se,
                                      T,
                                      q.localized_spec_name[T],
                                    );
                                  }
                                  if (
                                    q.localized_spec_description &&
                                    s.NT.Get(q.localized_spec_description, T)
                                  ) {
                                    const Se =
                                      aa + h.unique_id + Zs + q.unique_id;
                                    c.SetLocalization(
                                      Se,
                                      T,
                                      q.localized_spec_description[T].replace(
                                        /\n/g,
                                        "<br />",
                                      ),
                                    );
                                  }
                                });
                          })),
                      h.section_type == "badge_progress" && h.badge_progress)
                    ) {
                      const I = h.badge_progress;
                      I.localized_name &&
                        s.NT.Get(I.localized_name, T) &&
                        c.SetLocalization(
                          Gs + h.unique_id,
                          T,
                          I.localized_name[T],
                        ),
                        I.localized_initial_description &&
                          s.NT.Get(I.localized_initial_description, T) &&
                          c.SetLocalization(
                            Ns + h.unique_id,
                            T,
                            I.localized_initial_description[T],
                          ),
                        I.localized_progress_description &&
                          s.NT.Get(I.localized_progress_description, T) &&
                          c.SetLocalization(
                            Bs + h.unique_id,
                            T,
                            I.localized_progress_description[T],
                          ),
                        I.localized_maxtier_description &&
                          s.NT.Get(I.localized_maxtier_description, T) &&
                          c.SetLocalization(
                            Ms + h.unique_id,
                            T,
                            I.localized_maxtier_description[T],
                          );
                    }
                    h.section_type == "quest" &&
                      ((lt = (ze = h.quest) == null ? void 0 : ze.door_info) ==
                      null
                        ? void 0
                        : lt.length) > 0 &&
                      h.quest.door_info.forEach((I) => {
                        I.localized_open_door_description &&
                          s.NT.Get(I.localized_open_door_description, T) &&
                          c.SetLocalization(
                            Ls + h.unique_id + "_" + I.unique_id,
                            T,
                            I.localized_open_door_description[T],
                          ),
                          I.localized_closed_door_description &&
                            s.NT.Get(I.localized_closed_door_description, T) &&
                            c.SetLocalization(
                              Os + h.unique_id + "_" + I.unique_id,
                              T,
                              I.localized_closed_door_description[T],
                            );
                      }),
                      h.section_type == "rewards" &&
                        ((Nt =
                          (Pe = h.rewards) == null
                            ? void 0
                            : Pe.reward_items) == null
                          ? void 0
                          : Nt.length) > 0 &&
                        h.rewards.reward_items.forEach((I) => {
                          I.localized_reward_description &&
                            s.NT.Get(I.localized_reward_description, T) &&
                            c.SetLocalization(
                              zs +
                                h.unique_id +
                                "_" +
                                I.virtual_item_reward_def_id,
                              T,
                              I.localized_reward_description[T],
                            );
                        }),
                      h.section_type == "claim_item" &&
                        ((Je =
                          (gt = h.claim_item_section_data) == null
                            ? void 0
                            : gt.localized_claim_button) == null
                          ? void 0
                          : Je.length) > 0 &&
                        h.claim_item_section_data.localized_claim_button &&
                        s.NT.Get(
                          h.claim_item_section_data.localized_claim_button,
                          T,
                        ) &&
                        c.SetLocalization(
                          Vs + h.unique_id,
                          T,
                          h.claim_item_section_data.localized_claim_button[T],
                        ),
                      h.section_type == "discoveryqueue" &&
                        h.discovery_queue_localized_desc &&
                        s.NT.Get(h.discovery_queue_localized_desc, T) &&
                        c.SetLocalization(
                          Ps + h.unique_id,
                          T,
                          h.discovery_queue_localized_desc[T],
                        ),
                      h.section_type == "social_share" &&
                        h.social_share.content_options.forEach((I) => {
                          const q = I.localized_option_fields;
                          q.localized_header &&
                            s.NT.Get(q.localized_header, T) &&
                            c.SetLocalization(
                              Rs + h.unique_id + "_" + I.unique_id,
                              T,
                              q.localized_header[T],
                            ),
                            q.title &&
                              s.NT.Get(q.title, T) &&
                              c.SetLocalization(
                                ks + h.unique_id + "_" + I.unique_id,
                                T,
                                q.title[T],
                              ),
                            q.description &&
                              s.NT.Get(q.description, T) &&
                              c.SetLocalization(
                                Fs + h.unique_id + "_" + I.unique_id,
                                T,
                                q.description[T],
                              ),
                            q.image &&
                              s.NT.Get(q.image, T) &&
                              c.SetLocalization(
                                Us + h.unique_id + "_" + I.unique_id,
                                T,
                                q.image[T],
                              ),
                            q.twitter_alt_text &&
                              s.NT.Get(q.twitter_alt_text, T) &&
                              c.SetLocalization(
                                Hs + h.unique_id + "_" + I.unique_id,
                                T,
                                q.twitter_alt_text[T],
                              );
                        }),
                      h.section_type == "media_layout" &&
                        h.media_layout.media_content.forEach((I, q) => {
                          const Se = I.localized_media_desc;
                          Se &&
                            s.NT.Get(Se, T) &&
                            c.SetLocalization(
                              Ws + h.unique_id + "_" + q,
                              T,
                              Se[T],
                            );
                        }),
                      h.section_type == "template_media_content" &&
                        ((jt =
                          (Rt = h.media_container) == null
                            ? void 0
                            : Rt.media_rows) == null ||
                          jt.forEach((I, q) => {
                            var Se;
                            (Se = I == null ? void 0 : I.media_columns) ==
                              null ||
                              Se.forEach((he) => {
                                na(c, T, h.unique_id + "_" + he.unique_id, he),
                                  he.mobile_content_varient &&
                                    na(
                                      c,
                                      T,
                                      h.unique_id +
                                        "_" +
                                        he.unique_id +
                                        "_mobile",
                                      he.mobile_content_varient,
                                    ),
                                  he.tablet_content_varient &&
                                    na(
                                      c,
                                      T,
                                      h.unique_id +
                                        "_" +
                                        he.unique_id +
                                        "_tablet",
                                      he.tablet_content_varient,
                                    );
                              });
                          })),
                      h.section_type == "template_media_overlay" &&
                        h.media_overlay &&
                        (na(c, T, h.unique_id + "_overlay", h.media_overlay),
                        h.media_overlay_mobile_content_varient &&
                          na(
                            c,
                            T,
                            h.unique_id + "_overlay_mobile",
                            h.media_overlay_mobile_content_varient,
                          ),
                        h.media_overlay_tablet_content_varient &&
                          na(
                            c,
                            T,
                            h.unique_id + "_overlay_tablet",
                            h.media_overlay_tablet_content_varient,
                          ));
                  }
                });
          }
          return c;
        }
        function na(a, t, n, i) {
          var l;
          let o = i.localized_media_title;
          o && s.NT.Get(o, t) && a.SetLocalization(Qs + n, t, o[t]),
            (o = i.localized_media_subtitle),
            o && s.NT.Get(o, t) && a.SetLocalization(Ys + n, t, o[t]),
            (o = i.localized_media_description),
            o && s.NT.Get(o, t) && a.SetLocalization(Js + n, t, o[t]),
            (o = i.localized_alt_text),
            o && s.NT.Get(o, t) && a.SetLocalization(Xs + n, t, o[t]),
            (o = (l = i.title_media) == null ? void 0 : l.localized_alt_text),
            o && s.NT.Get(o, t) && a.SetLocalization($s + n, t, o[t]);
        }
        function ai(a, t, n, i) {
          for (const l of i != null ? i : []) {
            const o = n + (0, ds.ln)(l);
            s.NT.Get(l.rgLocalizedNames, t) &&
              a.SetLocalization(o, t, l.rgLocalizedNames[t]),
              ai(a, t, o + "/", l.rgChildren);
          }
        }
        function ni(a, t, n) {
          let i = new Array();
          const l = t.GetSortedTokenList();
          return (
            (0, Y.h5)(() => {
              n.forEach((o) => {
                let r = !1;
                l.forEach((d) => {
                  var m, c, v, h, _;
                  const u = t.GetLocalization(d, o) || "";
                  if (
                    (d === Fo &&
                      (u || a.BHasLanguageTitle(o)) &&
                      a.SetName(o, u) &&
                      (r = !0),
                    d === zo &&
                      (u || a.BHasLanguageDescription(o)) &&
                      a.SetDescription(o, u) &&
                      (r = !0),
                    d === Uo &&
                      (u || a.BHasLanguageSubTitle(o)) &&
                      a.SetSubTitle(o, u) &&
                      (r = !0),
                    d === Ho &&
                      (u || a.BHasLanguageSummary(o)) &&
                      a.SetSummary(o, u) &&
                      (r = !0),
                    d === Ts)
                  ) {
                    const x = a.GetEventModel().jsondata;
                    (u ||
                      (x.localized_broadcast_title &&
                        s.NT.Get(x.localized_broadcast_title, o))) &&
                      s.NT.Get(x.localized_broadcast_title, o) !== u &&
                      ((x.localized_broadcast_title = s.NT.Set(
                        x.localized_broadcast_title || [],
                        o,
                        u,
                      )),
                      a.SetDirty(C.IQ.jsondata_sales),
                      (r = !0));
                  }
                  if (d.startsWith(Cn)) {
                    const x = a.GetEventModel().jsondata;
                    (m = x == null ? void 0 : x.user_polls) == null ||
                      m.forEach((b) => {
                        var S;
                        d.startsWith(wn)
                          ? (S = b.options) == null ||
                            S.forEach((y) => {
                              d == wn + y.option_id &&
                                (u ||
                                  (y.localized_option &&
                                    s.NT.Get(y.localized_option, o))) &&
                                s.NT.Get(y.localized_option, o) !== u &&
                                ((y.localized_option = s.NT.Set(
                                  y.localized_option || [],
                                  o,
                                  u,
                                )),
                                a.SetDirty(C.IQ.description),
                                (r = !0));
                            })
                          : d == Cn + b.poll_id &&
                            (u ||
                              (b.localized_poll_description &&
                                s.NT.Get(b.localized_poll_description, o))) &&
                            s.NT.Get(b.localized_poll_description, o) !== u &&
                            ((b.localized_poll_description = s.NT.Set(
                              b.localized_poll_description || [],
                              o,
                              u,
                            )),
                            a.SetDirty(C.IQ.description),
                            (r = !0));
                      });
                  }
                  if (
                    d.startsWith(bn) &&
                    a.GetEventModel().jsondata.meet_steam_schedules
                  )
                    for (
                      let x = 0;
                      x <
                      a.GetEventModel().jsondata.meet_steam_schedules.length;
                      ++x
                    ) {
                      const b =
                        a.GetEventModel().jsondata.meet_steam_schedules[x];
                      for (
                        let S = 0;
                        S <
                        ((c = b == null ? void 0 : b.session_breaks) == null
                          ? void 0
                          : c.length);
                        ++S
                      ) {
                        const y = b.session_breaks[S];
                        if (d == bn + b.schedule_id + "_" + y.break_id) {
                          (u || s.NT.Get(y.localized_break_description, o)) &&
                            s.NT.Get(y.localized_break_description, o) !== u &&
                            ((y.localized_break_description = s.NT.Set(
                              y.localized_break_description || [],
                              o,
                              u,
                            )),
                            a.SetDirty(C.IQ.description),
                            (r = !0));
                          break;
                        }
                      }
                    }
                  if (
                    d.startsWith(ta) &&
                    a.GetEventModel().jsondata.meet_steam_groups
                  )
                    for (
                      let x = 0;
                      x < a.GetEventModel().jsondata.meet_steam_groups.length;
                      ++x
                    ) {
                      const b = a.GetEventModel().jsondata.meet_steam_groups[x];
                      if (d == qs + b.group_id) {
                        (u || s.NT.Get(b.localized_session_title, o)) &&
                          s.NT.Get(b.localized_session_title, o) !== u &&
                          ((b.localized_session_title = s.NT.Set(
                            b.localized_session_title || [],
                            o,
                            u,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (d == Ya + b.group_id) {
                        (u || s.NT.Get(b.localized_session_description, o)) &&
                          s.NT.Get(b.localized_session_description, o) !== u &&
                          ((b.localized_session_description = s.NT.Set(
                            b.localized_session_description || [],
                            o,
                            u,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (d == Qo + b.group_id) {
                        (u || s.NT.Get(b.localized_sesssion_faq, o)) &&
                          s.NT.Get(b.localized_sesssion_faq, o) !== u &&
                          ((b.localized_sesssion_faq = s.NT.Set(
                            b.localized_sesssion_faq || [],
                            o,
                            u,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (d == Yo + b.group_id) {
                        (u || s.NT.Get(b.localized_intended_audience, o)) &&
                          s.NT.Get(b.localized_intended_audience, o) !== u &&
                          ((b.localized_intended_audience = s.NT.Set(
                            b.localized_intended_audience || [],
                            o,
                            u,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                    }
                  if (a.BHasEmailEnabled()) {
                    let x = a.GetEmailSettings();
                    if (D.UF.IS_VALVE_GROUP && d === vs) {
                      let b = new Xe.pC(a);
                      (u || b.BHasLocalizedSubject(o)) &&
                        b.SetLocalizedSubject(o, u) &&
                        (r = !0);
                    }
                    x.sections.forEach((b, S) => {
                      let y = new Xe.e$(b, a);
                      y.BHasHeadline() &&
                        d === us + S &&
                        (u || y.BHasHeadlineInLanguage(o)) &&
                        y.SetHeadline(u, o) &&
                        (r = !0),
                        y.BHasBody() &&
                          d === hs + S &&
                          (u || y.BHasBodyInLanguage(o)) &&
                          y.SetBody(u, o) &&
                          (r = !0);
                    });
                  }
                  if (a.BHasSaleEnabled()) {
                    const x = a.GetEventModel().jsondata;
                    (v = x == null ? void 0 : x.sale_presenters) != null &&
                      v.length &&
                      x.sale_presenters.forEach((S) => {
                        if (d === xn + S.unique_id) {
                          (u || s.NT.Get(S.localized_presenter_name, o)) &&
                            s.NT.Get(S.localized_presenter_name, o) != u &&
                            ((S.localized_presenter_name = s.NT.Set(
                              S.localized_presenter_name || [],
                              o,
                              u,
                            )),
                            a.SetDirty(C.IQ.jsondata_sales),
                            (r = !0));
                          const y = S.localized_presenter_name[o];
                          t.SetLocalization(xn + S.unique_id, o, y);
                        }
                      }),
                      ((_ =
                        (h = x.sale_sub_menu) == null
                          ? void 0
                          : h.menu_items) == null
                        ? void 0
                        : _.length) > 0 &&
                        x.sale_sub_menu.menu_items
                          .filter((S) => {
                            var y;
                            return (
                              ((y = S.localized_sub_menu_name) == null
                                ? void 0
                                : y.length) > 0
                            );
                          })
                          .map((S) => {
                            if (d === jn + S.unique_id) {
                              (u || s.NT.Get(S.localized_sub_menu_name, o)) &&
                                s.NT.Get(S.localized_sub_menu_name, o) != u &&
                                ((S.localized_sub_menu_name = s.NT.Set(
                                  S.localized_sub_menu_name || [],
                                  o,
                                  u,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0));
                              const y = S.localized_sub_menu_name[o];
                              t.SetLocalization(jn + S.unique_id, o, y);
                            }
                          }),
                      a
                        .GetSaleSections()
                        .filter((S) => !S.disable_localization)
                        .forEach((S) => {
                          var y,
                            L,
                            G,
                            H,
                            te,
                            ce,
                            ie,
                            He,
                            nt,
                            ze,
                            lt,
                            Pe,
                            Nt,
                            gt,
                            Je,
                            Rt,
                            jt,
                            rt,
                            T,
                            I,
                            q,
                            Se,
                            he,
                            qe,
                            St;
                          const Me = a.GetSaleSectionIndexByID(S.unique_id, !1);
                          if (
                            ((d === Vo + Me || d === ps + S.unique_id) &&
                              (u ||
                                a.BHasSaleSectionLabelLocalization(o, Me)) &&
                              a.SetSaleSectionLabelLocalization(o, Me, u) &&
                              (r = !0),
                            d === ms + S.unique_id &&
                              (u ||
                                a.BHasSaleSectionSubtitleLocalization(o, Me)) &&
                              a.SetSaleSectionSubtitleLocalization(o, Me, u) &&
                              (r = !0),
                            d === ys + S.unique_id &&
                              (u ||
                                a.BHasSaleSectionDescriptionBBCode(o, Me)) &&
                              a.SetSaleSectionDescriptionBBCode(o, Me, u) &&
                              (r = !0),
                            d === Ds + S.unique_id &&
                              (u || a.BHasSaleSectionInnerTitle(o, Me)) &&
                              a.SetSaleSectionInnerTitle(o, Me, u) &&
                              (r = !0),
                            S.section_type === "tabs" && S.tabs)
                          )
                            for (const w of S.tabs)
                              d === gs + S.unique_id + "_" + w.unique_id &&
                                (u || a.BHasSaleSectionTabName(o, w)) &&
                                a.SetSaleSectionTabName(o, w, u) &&
                                (r = !0),
                                ((L =
                                  (y = w.tab_jump_list) == null
                                    ? void 0
                                    : y.menu_items) == null
                                  ? void 0
                                  : L.length) > 0 &&
                                  x.sale_sub_menu.menu_items
                                    .filter((M) => {
                                      var U;
                                      return (
                                        ((U = M.localized_sub_menu_name) == null
                                          ? void 0
                                          : U.length) > 0
                                      );
                                    })
                                    .map((M) => {
                                      if (
                                        d ===
                                        yn + w.unique_id + "_" + M.unique_id
                                      ) {
                                        (u ||
                                          s.NT.Get(
                                            M.localized_sub_menu_name,
                                            o,
                                          )) &&
                                          s.NT.Get(
                                            M.localized_sub_menu_name,
                                            o,
                                          ) != u &&
                                          ((M.localized_sub_menu_name =
                                            s.NT.Set(
                                              M.localized_sub_menu_name || [],
                                              o,
                                              u,
                                            )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                        const U = M.localized_sub_menu_name[o];
                                        t.SetLocalization(
                                          yn + w.unique_id + "_" + M.unique_id,
                                          o,
                                          U,
                                        );
                                      }
                                    }),
                                si(
                                  a,
                                  d,
                                  u,
                                  o,
                                  ei + w.unique_id + "_",
                                  (G = w.tab_tag_filter) == null
                                    ? void 0
                                    : G.rgNodes,
                                ) && (r = !0);
                          if (
                            (a.BHasSaleSectionTextLocalization(Me) &&
                              d === _s + S.unique_id &&
                              (u ||
                                a.BHasSaleSectionTextLocalizationForLang(
                                  o,
                                  Me,
                                )) &&
                              a.SetSaleSectionTextLocalization(o, Me, u) &&
                              (r = !0),
                            S.enable_faceted_browsing &&
                              S.facets.forEach((w) => {
                                d === Ss + S.unique_id + "_" + w.unique_id &&
                                  (u || a.BHasSaleSectionFacetName(o, w)) &&
                                  a.SetSaleSectionFacetName(o, w, u) &&
                                  (r = !0),
                                  w.facetValues.forEach((M) => {
                                    d ===
                                      Es +
                                        S.unique_id +
                                        "_" +
                                        w.unique_id +
                                        "_" +
                                        M.unique_id &&
                                      (u ||
                                        a.BHasSaleSectionFacetValueName(
                                          o,
                                          M,
                                        )) &&
                                      a.SetSaleSectionFacetValueName(o, M, u) &&
                                      (r = !0),
                                      d ===
                                        fs +
                                          S.unique_id +
                                          "_" +
                                          w.unique_id +
                                          "_" +
                                          M.unique_id &&
                                        (u ||
                                          a.BHasSaleSectionFacetValueSubtitle(
                                            o,
                                            M,
                                          )) &&
                                        a.SetSaleSectionFacetValueSubtitle(
                                          o,
                                          M,
                                          u,
                                        ) &&
                                        (r = !0);
                                  });
                              }),
                            S.section_type == "vo_internal" &&
                              ((H = S.internal_section_data) == null
                                ? void 0
                                : H.internal_type) == "reservation_widget" &&
                              (((te =
                                S.internal_section_data.reservation_options) ==
                              null
                                ? void 0
                                : te.length) > 0 ||
                                S.internal_section_data.reservation_layout) &&
                              ((ce =
                                S.internal_section_data.reservation_options) ==
                                null ||
                                ce.forEach((w) => {
                                  d === xs + S.unique_id + "_" + w.unique_id &&
                                    (u ||
                                      (w.localized_reservation_desc &&
                                        s.NT.Get(
                                          w.localized_reservation_desc,
                                          o,
                                        ))) &&
                                    s.NT.Get(
                                      w.localized_reservation_desc,
                                      o,
                                    ) !== u &&
                                    ((w.localized_reservation_desc = s.NT.Set(
                                      w.localized_reservation_desc || [],
                                      o,
                                      u,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0)),
                                    d ===
                                      Cs + S.unique_id + "_" + w.unique_id &&
                                      (u && !w.callout && (w.callout = {}),
                                      (u ||
                                        (w.callout.localized_callout &&
                                          s.NT.Get(
                                            w.callout.localized_callout,
                                            o,
                                          ))) &&
                                        s.NT.Get(
                                          w.callout.localized_callout,
                                          o,
                                        ) !== u &&
                                        ((w.callout.localized_callout =
                                          s.NT.Set(
                                            w.callout.localized_callout || [],
                                            o,
                                            u,
                                          )),
                                        a.SetDirty(C.IQ.jsondata_sales),
                                        (r = !0))),
                                    d ===
                                      bs + S.unique_id + "_" + w.unique_id &&
                                      (u ||
                                        (w.localized_out_of_stock_override &&
                                          s.NT.Get(
                                            w.localized_out_of_stock_override,
                                            o,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_out_of_stock_override,
                                        o,
                                      ) !== u &&
                                      ((w.localized_out_of_stock_override =
                                        s.NT.Set(
                                          w.localized_out_of_stock_override ||
                                            [],
                                          o,
                                          u,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      js + S.unique_id + "_" + w.unique_id &&
                                      (u ||
                                        (w.localized_delivery_override_desc &&
                                          s.NT.Get(
                                            w.localized_delivery_override_desc,
                                            o,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_delivery_override_desc,
                                        o,
                                      ) !== u &&
                                      ((w.localized_delivery_override_desc =
                                        s.NT.Set(
                                          w.localized_delivery_override_desc ||
                                            [],
                                          o,
                                          u,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0));
                                }),
                              (He =
                                (ie =
                                  S.internal_section_data.reservation_layout) ==
                                null
                                  ? void 0
                                  : ie.product_configs) == null ||
                                He.forEach((w) => {
                                  var M;
                                  d === fn + S.unique_id + "_" + w.unique_id &&
                                    (u ||
                                      (w.localized_product_config_title &&
                                        s.NT.Get(
                                          w.localized_product_config_title,
                                          o,
                                        ))) &&
                                    s.NT.Get(
                                      w.localized_product_config_title,
                                      o,
                                    ) !== u &&
                                    ((w.localized_product_config_title =
                                      s.NT.Set(
                                        w.localized_product_config_title || [],
                                        o,
                                        u,
                                      )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0)),
                                    (M = w.variations) == null ||
                                      M.forEach((U) => {
                                        d ===
                                          fn +
                                            S.unique_id +
                                            "_" +
                                            w.unique_id +
                                            "_" +
                                            U.unique_id &&
                                          (u ||
                                            (U.localized_variation_name &&
                                              s.NT.Get(
                                                U.localized_variation_name,
                                                o,
                                              ))) &&
                                          s.NT.Get(
                                            U.localized_variation_name,
                                            o,
                                          ) !== u &&
                                          ((U.localized_variation_name =
                                            s.NT.Set(
                                              U.localized_variation_name || [],
                                              o,
                                              u,
                                            )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                      });
                                })),
                            S.section_type == "vo_internal" &&
                              ((nt = S.internal_section_data) == null
                                ? void 0
                                : nt.internal_type) == "while_supplies_last" &&
                              ((ze =
                                S.internal_section_data
                                  .while_supplies_last_option) == null
                                ? void 0
                                : ze.length) > 0 &&
                              S.internal_section_data.while_supplies_last_option.forEach(
                                (w) => {
                                  d === ws + S.unique_id + "_" + w.unique_id &&
                                    (u ||
                                      (w.localized_supply_desc &&
                                        s.NT.Get(
                                          w.localized_supply_desc,
                                          o,
                                        ))) &&
                                    s.NT.Get(w.localized_supply_desc, o) !==
                                      u &&
                                    ((w.localized_supply_desc = s.NT.Set(
                                      w.localized_supply_desc || [],
                                      o,
                                      u,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0));
                                },
                              ),
                            ((Pe =
                              (lt = S.quiz) == null ? void 0 : lt.questions) ==
                            null
                              ? void 0
                              : Pe.length) > 0 &&
                              ((Nt = S.quiz) == null ||
                                Nt.questions.forEach((w) => {
                                  var M;
                                  d === Is + S.unique_id + "_" + w.unique_id
                                    ? (u ||
                                        (w.localized_question &&
                                          s.NT.Get(w.localized_question, o))) &&
                                      s.NT.Get(w.localized_question, o) !== u &&
                                      ((w.localized_question = s.NT.Set(
                                        w.localized_question || [],
                                        o,
                                        u,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0))
                                    : ((M = w.answers) == null
                                        ? void 0
                                        : M.length) > 0 &&
                                      w.answers.forEach((U) => {
                                        d ===
                                          As +
                                            S.unique_id +
                                            "_" +
                                            U.unique_id &&
                                          (u ||
                                            (U.localized_answer &&
                                              s.NT.Get(
                                                U.localized_answer,
                                                o,
                                              ))) &&
                                          s.NT.Get(U.localized_answer, o) !==
                                            u &&
                                          ((U.localized_answer = s.NT.Set(
                                            U.localized_answer || [],
                                            o,
                                            u,
                                          )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                      });
                                })),
                            ((Je =
                              (gt = S.tech_specs) == null
                                ? void 0
                                : gt.tech_spec_block_list) == null
                              ? void 0
                              : Je.length) > 0 &&
                              S.tech_specs.tech_spec_block_list.forEach((w) => {
                                var M;
                                d === aa + S.unique_id + "_" + w.unique_id
                                  ? (u ||
                                      (w.localized_block_title &&
                                        s.NT.Get(
                                          w.localized_block_title,
                                          o,
                                        ))) &&
                                    s.NT.Get(w.localized_block_title, o) !==
                                      u &&
                                    ((w.localized_block_title = s.NT.Set(
                                      w.localized_block_title || [],
                                      o,
                                      u,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0))
                                  : ((M = w.spec_list) == null
                                      ? void 0
                                      : M.length) > 0 &&
                                    w.spec_list.forEach((U) => {
                                      d === aa + S.unique_id + Ks + U.unique_id
                                        ? (u ||
                                            (U.localized_spec_name &&
                                              s.NT.Get(
                                                U.localized_spec_name,
                                                o,
                                              ))) &&
                                          s.NT.Get(U.localized_spec_name, o) !==
                                            u &&
                                          ((U.localized_spec_name = s.NT.Set(
                                            U.localized_spec_name || [],
                                            o,
                                            u,
                                          )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0))
                                        : d ===
                                            aa +
                                              S.unique_id +
                                              Zs +
                                              U.unique_id &&
                                          (u ||
                                            (U.localized_spec_description &&
                                              s.NT.Get(
                                                U.localized_spec_description,
                                                o,
                                              ))) &&
                                          s.NT.Get(
                                            U.localized_spec_description,
                                            o,
                                          ) !== u &&
                                          ((U.localized_spec_description =
                                            s.NT.Set(
                                              U.localized_spec_description ||
                                                [],
                                              o,
                                              u.replace(
                                                /<br\s*\/?>/g,
                                                `
`,
                                              ),
                                            )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                    });
                              }),
                            ((jt =
                              (Rt = S.quest) == null ? void 0 : Rt.door_info) ==
                            null
                              ? void 0
                              : jt.length) > 0 &&
                              ((rt = S.quest) == null ||
                                rt.door_info.forEach((w) => {
                                  d === Ls + S.unique_id + "_" + w.unique_id
                                    ? (u ||
                                        (w.localized_closed_door_description &&
                                          s.NT.Get(
                                            w.localized_closed_door_description,
                                            o,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_closed_door_description,
                                        o,
                                      ) !== u &&
                                      ((w.localized_closed_door_description =
                                        s.NT.Set(
                                          w.localized_closed_door_description ||
                                            [],
                                          o,
                                          u,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0))
                                    : d ===
                                        Os + S.unique_id + "_" + w.unique_id &&
                                      (u ||
                                        (w.localized_open_door_description &&
                                          s.NT.Get(
                                            w.localized_open_door_description,
                                            o,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_open_door_description,
                                        o,
                                      ) !== u &&
                                      ((w.localized_open_door_description =
                                        s.NT.Set(
                                          w.localized_open_door_description ||
                                            [],
                                          o,
                                          u,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0));
                                })),
                            ((I =
                              (T = S.rewards) == null
                                ? void 0
                                : T.reward_items) == null
                              ? void 0
                              : I.length) > 0 &&
                              S.rewards.reward_items.forEach((w) => {
                                d ===
                                  zs +
                                    S.unique_id +
                                    "_" +
                                    w.virtual_item_reward_def_id &&
                                  (u ||
                                    (w.localized_reward_description &&
                                      s.NT.Get(
                                        w.localized_reward_description,
                                        o,
                                      ))) &&
                                  s.NT.Get(
                                    w.localized_reward_description,
                                    o,
                                  ) !== u &&
                                  ((w.localized_reward_description = s.NT.Set(
                                    w.localized_reward_description || [],
                                    o,
                                    u,
                                  )),
                                  a.SetDirty(C.IQ.jsondata_sales),
                                  (r = !0));
                              }),
                            ((Se =
                              (q = S.claim_item_section_data) == null
                                ? void 0
                                : q.localized_claim_button) == null
                              ? void 0
                              : Se.length) > 0 &&
                              d === Vs + S.unique_id &&
                              (u ||
                                (S.claim_item_section_data
                                  .localized_claim_button &&
                                  s.NT.Get(
                                    S.claim_item_section_data
                                      .localized_claim_button,
                                    o,
                                  ))) &&
                              s.NT.Get(
                                S.claim_item_section_data
                                  .localized_claim_button,
                                o,
                              ) !== u &&
                              ((S.claim_item_section_data.localized_claim_button =
                                s.NT.Set(
                                  S.claim_item_section_data
                                    .localized_claim_button || [],
                                  o,
                                  u,
                                )),
                              a.SetDirty(C.IQ.jsondata_sales),
                              (r = !0)),
                            S.section_type == "badge_progress" &&
                              S.badge_progress)
                          ) {
                            const w = S.badge_progress;
                            d === Gs + S.unique_id &&
                              (u ||
                                (w.localized_name &&
                                  s.NT.Get(w.localized_name, o))) &&
                              s.NT.Get(w.localized_name, o) !== u &&
                              ((w.localized_name = s.NT.Set(
                                w.localized_name || [],
                                o,
                                u,
                              )),
                              a.SetDirty(C.IQ.jsondata_sales),
                              (r = !0)),
                              d === Ns + S.unique_id &&
                                (u ||
                                  (w.localized_initial_description &&
                                    s.NT.Get(
                                      w.localized_initial_description,
                                      o,
                                    ))) &&
                                s.NT.Get(w.localized_initial_description, o) !==
                                  u &&
                                ((w.localized_initial_description = s.NT.Set(
                                  w.localized_initial_description || [],
                                  o,
                                  u,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0)),
                              d === Bs + S.unique_id &&
                                (u ||
                                  (w.localized_progress_description &&
                                    s.NT.Get(
                                      w.localized_progress_description,
                                      o,
                                    ))) &&
                                s.NT.Get(
                                  w.localized_progress_description,
                                  o,
                                ) !== u &&
                                ((w.localized_progress_description = s.NT.Set(
                                  w.localized_progress_description || [],
                                  o,
                                  u,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0)),
                              d === Ms + S.unique_id &&
                                (u ||
                                  (w.localized_maxtier_description &&
                                    s.NT.Get(
                                      w.localized_maxtier_description,
                                      o,
                                    ))) &&
                                s.NT.Get(w.localized_maxtier_description, o) !==
                                  u &&
                                ((w.localized_maxtier_description = s.NT.Set(
                                  w.localized_maxtier_description || [],
                                  o,
                                  u,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0));
                          }
                          if (
                            (S.section_type == "discoveryqueue" &&
                              d === Ps + S.unique_id &&
                              (u ||
                                (S.discovery_queue_localized_desc &&
                                  s.NT.Get(
                                    S.discovery_queue_localized_desc,
                                    o,
                                  ))) &&
                              s.NT.Get(S.discovery_queue_localized_desc, o) !==
                                u &&
                              ((S.discovery_queue_localized_desc = s.NT.Set(
                                S.discovery_queue_localized_desc || [],
                                o,
                                u,
                              )),
                              a.SetDirty(C.IQ.jsondata_sales),
                              (r = !0)),
                            S.section_type == "social_share" &&
                              ((he = S.social_share.content_options) == null ||
                                he.forEach((w) => {
                                  const M = w.localized_option_fields;
                                  d === Rs + S.unique_id + "_" + w.unique_id &&
                                    (u ||
                                      (M.localized_header &&
                                        s.NT.Get(M.localized_header, o))) &&
                                    s.NT.Get(M.localized_header, o) !== u &&
                                    ((M.localized_header = s.NT.Set(
                                      M.localized_header || [],
                                      o,
                                      u,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0)),
                                    d ===
                                      ks + S.unique_id + "_" + w.unique_id &&
                                      (u ||
                                        (M.title && s.NT.Get(M.title, o))) &&
                                      s.NT.Get(M.title, o) !== u &&
                                      ((M.title = s.NT.Set(
                                        M.title || [],
                                        o,
                                        u,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      Fs + S.unique_id + "_" + w.unique_id &&
                                      (u ||
                                        (M.description &&
                                          s.NT.Get(M.description, o))) &&
                                      s.NT.Get(M.description, o) !== u &&
                                      ((M.description = s.NT.Set(
                                        M.description || [],
                                        o,
                                        u,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      Us + S.unique_id + "_" + w.unique_id &&
                                      (u ||
                                        (M.image && s.NT.Get(M.image, o))) &&
                                      s.NT.Get(M.image, o) !== u &&
                                      ((M.image = s.NT.Set(
                                        M.image || [],
                                        o,
                                        u,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      Hs + S.unique_id + "_" + w.unique_id &&
                                      (u ||
                                        (M.twitter_alt_text &&
                                          s.NT.Get(M.twitter_alt_text, o))) &&
                                      s.NT.Get(M.twitter_alt_text, o) !== u &&
                                      ((M.twitter_alt_text = s.NT.Set(
                                        M.twitter_alt_text || [],
                                        o,
                                        u,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0));
                                })),
                            S.section_type == "media_layout" &&
                              ((qe = S.media_layout.media_content) == null ||
                                qe.forEach((w, M) => {
                                  const U = w.localized_media_desc;
                                  d === Ws + S.unique_id + "_" + M &&
                                    (u || (U && s.NT.Get(U, o))) &&
                                    s.NT.Get(U, o) !== u &&
                                    ((w.localized_media_desc = s.NT.Set(
                                      U || [],
                                      o,
                                      u,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0));
                                })),
                            S.section_type == "template_media_content" &&
                              ((St = S.media_container.media_rows) == null ||
                                St.forEach((w) => {
                                  w == null ||
                                    w.media_columns.forEach((M) => {
                                      let U = sa(
                                        a,
                                        d,
                                        u,
                                        S.unique_id + "_" + M.unique_id,
                                        o,
                                        M,
                                      );
                                      r || (r = U),
                                        M.mobile_content_varient &&
                                          ((U = sa(
                                            a,
                                            d,
                                            u,
                                            S.unique_id +
                                              "_" +
                                              M.unique_id +
                                              "_mobile",
                                            o,
                                            M.mobile_content_varient,
                                          )),
                                          r || (r = U)),
                                        M.tablet_content_varient &&
                                          ((U = sa(
                                            a,
                                            d,
                                            u,
                                            S.unique_id +
                                              "_" +
                                              M.unique_id +
                                              "_tablet",
                                            o,
                                            M.tablet_content_varient,
                                          )),
                                          r || (r = U));
                                    });
                                })),
                            S.section_type == "template_media_overlay" &&
                              S.media_overlay)
                          ) {
                            let w = sa(
                              a,
                              d,
                              u,
                              S.unique_id + "_overlay",
                              o,
                              S.media_overlay,
                            );
                            if (
                              (r || (r = w),
                              S.media_overlay_mobile_content_varient)
                            ) {
                              let M = sa(
                                a,
                                d,
                                u,
                                S.unique_id + "_overlay_mobile",
                                o,
                                S.media_overlay_mobile_content_varient,
                              );
                              r || (r = M);
                            }
                            if (S.media_overlay_tablet_content_varient) {
                              let M = sa(
                                a,
                                d,
                                u,
                                S.unique_id + "_overlay_tablet",
                                o,
                                S.media_overlay_tablet_content_varient,
                              );
                              r || (r = M);
                            }
                          }
                        });
                  }
                }),
                  r && i.push(o);
              });
            }),
            i
          );
        }
        function sa(a, t, n, i, l, o) {
          let r = !1;
          if (t === Qs + i) {
            const d = o.localized_media_title;
            (n || (d && s.NT.Get(d, l))) &&
              s.NT.Get(d, l) !== n &&
              ((o.localized_media_title = s.NT.Set(d || [], l, n)),
              a.SetDirty(C.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === Ys + i) {
            const d = o.localized_media_subtitle;
            (n || (d && s.NT.Get(d, l))) &&
              s.NT.Get(d, l) !== n &&
              ((o.localized_media_subtitle = s.NT.Set(d || [], l, n)),
              a.SetDirty(C.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === Js + i) {
            const d = o.localized_media_description;
            (n || (d && s.NT.Get(d, l))) &&
              s.NT.Get(d, l) !== n &&
              ((o.localized_media_description = s.NT.Set(d || [], l, n)),
              a.SetDirty(C.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === Xs + i) {
            const d = o.localized_alt_text;
            (n || (d && s.NT.Get(d, l))) &&
              s.NT.Get(d, l) !== n &&
              ((o.localized_alt_text = s.NT.Set(d || [], l, n)),
              a.SetDirty(C.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === $s + i) {
            const d = o.title_media.localized_alt_text;
            (n || (d && s.NT.Get(d, l))) &&
              s.NT.Get(d, l) !== n &&
              ((o.title_media.localized_alt_text = s.NT.Set(d || [], l, n)),
              a.SetDirty(C.IQ.jsondata_sales),
              (r = !0));
          }
          return r;
        }
        function si(a, t, n, i, l, o) {
          for (const r of o != null ? o : []) {
            const d = l + (0, ds.ln)(r);
            if (t === d)
              return s.NT.Get(r.rgLocalizedNames, i) === n
                ? !1
                : ((r.rgLocalizedNames = s.NT.Set(
                    r.rgLocalizedNames || [],
                    i,
                    n,
                  )),
                  a.SetDirty(C.IQ.jsondata_sales),
                  !0);
            if (t.startsWith(d + "/"))
              return si(a, t, n, i, d + "/", r.rgChildren);
          }
          return !1;
        }
        function Jo(a) {
          return (0, e.jsx)("div", {
            className: (0, j.A)(J.FlexRowContainer),
            children: (0, e.jsx)(ii, { editModel: a.editModel }),
          });
        }
        const ii = (a) => {
          const { data: t } = (0, Ut.hM)(a.editModel.GetClanAccountID()),
            n = (i) => {
              i.preventDefault(),
                (0, W.pg)(
                  (0, e.jsx)(xa, { editModel: a.editModel, permissions: t }),
                  (0, F.uX)(i),
                );
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ee.he, {
                className: (0, j.A)(J.EditPreviewButton),
                toolTipContent: (0, s.we)("#EventEditor_Loc_Export_Desc0"),
                children: (0, e.jsx)("a", {
                  onClick: n,
                  children: (0, s.we)("#EventEditor_Loc_Export_Short"),
                }),
              }),
              (0, e.jsx)(cs.t3, {
                strToolTip: (0, s.we)("#EventEditor_Loc_Import_ttip"),
                strLabel: (0, s.we)("#EventEditor_Loc_Import_Short"),
                fnOnImportLocData: (i, l) => ni(a.editModel, i, l),
              }),
            ],
          });
        };
        let xa = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                bShowCSV: !0,
                bExportEventBody: !0,
                bExportEmail: this.props.editModel.BHasEmailEnabled(),
                bExportSale: this.props.editModel.BHasSaleEnabled(),
              });
          }
          GetLocalizationFilePrefix() {
            const { editModel: a } = this.props;
            let t = a.GetName(N.Bhc);
            return (!t || t.trim() == "") && (t = "event"), t;
          }
          GetLocalizationModel() {
            return ti(
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
            return (0, e.jsx)(V.eV, {
              title: (0, s.we)("#EventEditor_Loc_Export"),
              onCancel: a,
              closeModal: a,
              children: (0, e.jsxs)(g.nB, {
                children: [
                  (0, e.jsx)(g.a3, {
                    children: (0, e.jsxs)("div", {
                      className: (0, j.A)(J.FlexColumnContainer),
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, s.we)("#EventEditor_Loc_Export_Desc0"),
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, j.A)(
                            J.FlexRowContainer,
                            J.RadioOption,
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
                            J.FlexRowContainer,
                            J.RadioOption,
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
                          n != null &&
                          n.support_user &&
                          (t.BHasSaleEnabled() || t.BHasEmailEnabled)
                        ) &&
                          (0, e.jsxs)("div", {
                            className: J.ValveOnlyBackground,
                            children: [
                              (0, e.jsx)("p", {
                                children:
                                  "(VO) Identify which sections to export",
                              }),
                              (0, e.jsx)(g.Yh, {
                                label: "Export Event Body",
                                onChange: (i) =>
                                  this.setState({ bExportEventBody: i }),
                                checked: this.state.bExportEventBody,
                              }),
                              (0, e.jsx)(g.Yh, {
                                disabled: !t.BHasEmailEnabled(),
                                label: "Export Email",
                                onChange: (i) =>
                                  this.setState({ bExportEmail: i }),
                                checked: this.state.bExportEmail,
                              }),
                              (0, e.jsx)(g.Yh, {
                                disabled: !t.BHasSaleEnabled(),
                                label: "Export Sales",
                                onChange: (i) =>
                                  this.setState({ bExportSale: i }),
                                checked: this.state.bExportSale,
                              }),
                            ],
                          }),
                        this.state.bShowCSV
                          ? (0, e.jsxs)(E.Fragment, {
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
                          : (0, e.jsxs)(E.Fragment, {
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
                  (0, e.jsxs)(g.wi, {
                    children: [
                      (0, e.jsx)(cs.Yg, {
                        fnGetLocData: this.GetLocalizationModel,
                        bShowCSV: this.state.bShowCSV,
                        bShowXML: !this.state.bShowCSV,
                        strFileNamePrefix: this.GetLocalizationFilePrefix(),
                        lang: this.props.editModel.GetCurEditLanguage(),
                        closeModal: this.props.closeModal,
                      }),
                      (0, e.jsx)(g.$n, {
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
        En([X.oI], xa.prototype, "GetLocalizationModel", 1),
          En([X.oI], xa.prototype, "OnExportTypeChange", 1),
          (xa = En([R.PA], xa));
        var ae = p(86649);
        const qp = 1,
          Kp = 2,
          Zp = 3,
          Xp = 4,
          $p = 5,
          em = 6,
          tm = 7,
          am = 8,
          nm = 9,
          sm = 10,
          im = 11,
          om = 12,
          lm = 13,
          rm = 14,
          dm = 15,
          cm = 16,
          um = 17,
          hm = 18,
          pm = 19,
          mm = 20,
          _m = 21,
          vm = 22,
          gm = 23,
          Sm = 24,
          Em = 25,
          fm = 26,
          xm = 27,
          bm = 28,
          jm = 29,
          Cm = 30,
          wm = 31,
          ym = 32,
          Dm = 33,
          Tm = 34,
          Im = 35,
          qo = 36;
        function Ko(a) {
          const { eventModel: t, fnOnGotoPage: n } = a;
          return t.bOldAnnouncement
            ? null
            : (0, e.jsx)("div", {
                className: (0, j.A)(ae.ManageButton, ae.Clone),
                onClick: (i) => {
                  i.stopPropagation(), oi(t, n);
                },
                children: (0, s.we)("#Button_Clone"),
              });
        }
        function oi(a, t) {
          P.mh
            .LoadEditorModel(a.clanSteamID, a.GID)
            .then((n) => {
              const i = ti(n, !0, !0, !0),
                l = i.GetLanguagesWithTokens();
              l.length > 1
                ? (l.sort((o, r) =>
                    (0, s.we)("#Language_" + (0, N.LgB)(o)).localeCompare(
                      (0, s.we)("#Language_" + (0, N.LgB)(r)),
                    ),
                  ),
                  (0, W.pg)(
                    (0, e.jsx)(Zo, { langs: l, locData: i, fnOnGotoPage: t }),
                    window,
                  ))
                : li(t, i);
            })
            .catch((n) => {
              let i = (0, ye.H)(n);
              (0, W.pg)(
                (0, e.jsx)(V.KG, {
                  strTitle: (0, s.we)("#EventEditor_CloneError"),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  strDescription: (0, s.we)(
                    "#EventEditor_CloneError_Desc",
                    i.strErrorMsg,
                  ),
                }),
                window,
                { strTitle: (0, s.we)("#EventEditor_CloneError") },
              );
            });
        }
        function li(a, t, n) {
          const i = P.mh.CreateClone(),
            l = i.GetEventModel();
          if (
            ((l.jsondata.sale_header_offset = l.GetEventType() != qo ? 530 : 0),
            n && n.length > 0)
          ) {
            const o = t.GetLanguagesWithTokens();
            t.ClearLanguagesTokens(n);
            const r = l.jsondata.bSaleEnabled;
            (l.jsondata.bSaleEnabled = !0),
              ni(i, t, o),
              (l.jsondata.bSaleEnabled = r);
          }
          a("clone");
        }
        function Zo(a) {
          const { langs: t, locData: n, closeModal: i, fnOnGotoPage: l } = a,
            o = (0, N.sfN)(D.TS.LANGUAGE),
            [r, d] = E.useState(new Set(t.filter((m) => m != o)));
          return (0, e.jsxs)(V.o0, {
            strTitle: (0, s.we)("#Button_Clone"),
            onOK: () => li(l, n, Array.from(r)),
            strDescription: (0, s.we)("#EventEditor_Clone_MultiLanguages"),
            closeModal: i,
            children: [
              (0, e.jsx)("div", {
                className: ae.CloneLangAlert,
                children: (0, s.we)("#EventEditor_Clone_Alert"),
              }),
              (0, e.jsx)("div", {
                className: ae.CloneLangListCtn,
                children: t.map((m) =>
                  (0, e.jsx)(
                    g.Yh,
                    {
                      className: ae.CloneCheckBox,
                      onChange: (c) => {
                        const v = new Set(r);
                        c ? v.delete(m) : v.add(m), d(v);
                      },
                      label: (0, s.we)("#Language_" + (0, N.LgB)(m)),
                      checked: !r.has(m),
                    },
                    m,
                  ),
                ),
              }),
              (0, e.jsx)(g.$n, {
                onClick: () => d(new Set()),
                children: (0, s.we)("#EventEditor_Clone_SelectAll"),
              }),
              (0, e.jsx)(g.$n, {
                onClick: () => d(new Set(t)),
                children: (0, s.we)("#EventEditor_Clone_DeSelectAll"),
              }),
            ],
          });
        }
        var ba = p(80963),
          Ae = p(92757),
          it = p(10142),
          ve = p(25792),
          Xo = p(80635),
          se = p(56492),
          $o = p(68266),
          el = p(39239),
          tl = p(64868);
        function al(a) {
          const [t, n] = (0, ht.qm)(a.GetEventModel());
          return [
            t,
            n,
            (l, o) => {
              (t != l || n != o) &&
                ((a.GetEventModel().m_nBuildID = l),
                (a.GetEventModel().m_strBuildBranch = o),
                a.SetDirty(C.IQ.description));
            },
          ];
        }
        var Ue = p(72604),
          nl = p(11113),
          Bt = p.n(nl),
          Ht = p(84346);
        function sl(a) {
          switch (a) {
            case N.Fwr:
            case N.u0:
            case N.zeJ:
              return !0;
          }
          return !1;
        }
        function ri(a) {
          const { eventModel: t, bAllowUpdate: n } = a,
            [i, l] = (0, ht.qm)(t);
          if (!sl(t.type) && !i) return null;
          let o = (0, e.jsx)("span", {
            className: (0, j.A)(Bt().BuildDisplay, Bt().BuildUnlinked),
            children: (0, s.we)("#EventEditor_AssociateBuildBlank"),
          });
          if (i) {
            const r = (0, e.jsx)("a", {
              className: (0, j.A)(Bt().BuildIDLink),
              href: `${D.TS.PARTNER_BASE_URL}apps/builddetails/${t.appid}/${i}`,
              onClick: (d) => d.stopPropagation(),
              children: i,
            });
            l
              ? (o = (0, e.jsx)("span", {
                  className: (0, j.A)(
                    Bt().BuildDisplay,
                    Bt().BuildLinkedBranch,
                  ),
                  children: (0, s.PP)("#EventEditor_AssociatedBuild", r, l),
                }))
              : (o = (0, e.jsx)("span", {
                  className: (0, j.A)(
                    Bt().BuildDisplay,
                    Bt().BuildLinkedDefault,
                  ),
                  children: (0, s.PP)(
                    "#EventEditor_AssociatedBuild_Default",
                    r,
                  ),
                }));
          } else if (!n) return null;
          return (0, e.jsxs)("div", {
            className: Bt().AssociatedBuildBody,
            children: [
              a.children,
              o,
              (0, e.jsx)(Q.o, {
                tooltip: (0, s.we)("#EventEditor_AssociateBuild_ttip"),
                className: f().tooltip_Ctn,
              }),
            ],
          });
        }
        const il = (0, R.PA)((a) => {
          const { editModel: t } = a,
            n = t.GetEventModel();
          return (0, e.jsx)(ri, {
            eventModel: n,
            bAllowUpdate: !0,
            children: (0, e.jsx)(g.$n, {
              onClick: (i) =>
                (0, W.pg)(
                  (0, e.jsx)(rl, { editModel: a.editModel }),
                  (0, F.uX)(i),
                ),
              children: (0, s.we)("#EventEditor_AssociateBuild"),
            }),
          });
        });
        function ol(a) {
          const [t, n] = E.useState(null);
          return (
            E.useEffect(() => {
              if ((n(null), !a)) return;
              const i = pe().CancelToken.source(),
                l = D.TS.COMMUNITY_BASE_URL + `ogg/${a}/ajaxgetappbranches`;
              return (
                pe()
                  .get(l, { withCredentials: !0, cancelToken: i.token })
                  .then((r) => {
                    var d;
                    if (!i.token.reason) {
                      const m =
                        ((d = r == null ? void 0 : r.data) == null
                          ? void 0
                          : d.success) == Ue.R;
                      n(
                        m
                          ? r.data.branches.sort((c, v) => v.date - c.date)
                          : [],
                      );
                    }
                  })
                  .catch((r) => {
                    if (!i.token.reason) {
                      const d = (0, ye.H)(r);
                      console.error("useBranchInfo: " + d.strErrorMsg, d);
                    }
                  }),
                () => i.cancel("useBranchInfo: unmounting")
              );
            }, [a]),
            t
          );
        }
        function ll(a) {
          const n = new Date(a.date * 1e3).toLocaleDateString((0, Ht.J)());
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
        const rl = (a) => {
          const { editModel: t, closeModal: n } = a,
            i = ol(t.GetEventModel().appid),
            [l, o] = E.useState(void 0),
            [r, d, m] = al(t),
            c = () => {
              m(l == null ? void 0 : l.build_id, l == null ? void 0 : l.branch),
                n();
            };
          if (i != null && i.length && l === void 0) {
            const _ = i.find((u) => u.branch == "");
            _ && o(_);
          }
          const v = !!i,
            h = new Array();
          return (
            h.push({
              label: (0, s.we)("#EventEditor_AssociateBuildClear"),
              data: null,
            }),
            i == null ||
              i.forEach((_) => {
                h.push({ label: ll(_), data: _ });
              }),
            (0, e.jsx)(ve.tH, {
              children: (0, e.jsx)(W.x_, {
                onEscKeypress: n,
                children: (0, e.jsxs)(g.UC, {
                  children: [
                    (0, e.jsx)(g.Y9, {
                      children: (0, s.we)("#EventEditor_AssociateBuildDialog"),
                    }),
                    (0, e.jsxs)(g.nB, {
                      children: [
                        (0, e.jsx)(g.a3, {
                          children: (0, s.we)(
                            "#EventEditor_AssociateBuildDialogDesc",
                          ),
                        }),
                        v &&
                          (0, e.jsx)(g.m, {
                            rgOptions: h,
                            selectedOption: l,
                            onChange: (_) => o(_.data),
                          }),
                        !v && (0, e.jsx)(Z.t, {}),
                      ],
                    }),
                    (0, e.jsx)(g.wi, {
                      children: (0, e.jsx)(g.CB, {
                        onCancel: n,
                        bOKDisabled: !v,
                        onOK: c,
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
        var _t = p(24642);
        const dl = (0, R.PA)(function (t) {
          var n;
          const {
              eventModel: i,
              appid_or_vanity_str: l,
              bShowGameName: o,
              bShowEventMetaDataSizes: r,
            } = t,
            [d, m] = E.useState(null),
            c = E.useRef(!1),
            v = E.useCallback((Pe) => {
              (c.current = !1), m(Pe);
            }, []),
            h = E.useCallback(
              (Pe) => {
                Pe.target instanceof HTMLButtonElement ||
                  Pe.target instanceof HTMLAnchorElement ||
                  (v("edit"), Pe.stopPropagation());
              },
              [v],
            ),
            _ = E.useCallback((Pe) => {
              Pe.stopPropagation();
            }, []),
            u = i.GID,
            x = i.bOldAnnouncement;
          if (d && !c.current)
            switch (((c.current = !0), d)) {
              case "clone":
                return (0, e.jsx)(Ae.rd, { push: !0, to: ee.GY.Edit(l, "") });
              case "edit":
                return (0, e.jsx)(se.OG, {
                  eventModel: i,
                  route: se.PH.k_eCommunityEdit,
                });
              case "view":
                return i.BIsVisibleEvent()
                  ? (0, e.jsx)(se.OG, { eventModel: i, route: se.PH.k_eView })
                  : (0, e.jsx)(se.OG, {
                      eventModel: i,
                      route: se.PH.k_eCommunityPreview,
                    });
              default:
                console.log("EventDisplayTile - Unexpected Case - " + d);
            }
          let b = (0, N.sfN)(D.TS.LANGUAGE);
          i.BIsLanguageValidForRealms(b) ||
            (b = i.BInRealmGlobal() ? N.Bhc : N.ZLm);
          let S = i.GetNameWithFallback(b);
          const y = i.BHasSubTitle(b),
            L = !0,
            G = i.BHasSaleEnabled(),
            H = i.visibility_state != $.zv.k_EEventStateUnpublished,
            te = i.visibility_state != $.zv.k_EEventStateVisible,
            ce = i.visibility_state == $.zv.k_EEventStateUnlisted,
            ie = i.BShowLibrarySpotlight(!0),
            He = H && te && !ce;
          o &&
            (S =
              (((n = it.A.Get().GetApp(i.appid)) == null
                ? void 0
                : n.GetName()) || "") +
              ": " +
              S);
          const nt =
              i.BIsPartnerEvent() &&
              i.BIsVisibleEvent() &&
              Ve.Uq.GetStatsFor(i.clanSteamID, u),
            ze = oe.ac.GetOGGClanInfo(i.appid),
            lt = !!(
              x &&
              ze &&
              ze.is_ogg &&
              ze.clanAccountID != i.announcementClanSteamID.GetAccountID()
            );
          return (0, e.jsx)(ve.tH, {
            children: (0, e.jsxs)("div", {
              className: (0, j.A)({
                [ae.TileContainer]: !0,
                [ae.TileAgeAppropriate]: L,
                [ae.TileAgeNotAppropriate]: !L,
                [ae.ShowEventMetaDataSizes]: r,
                [ae.ShowLibrarySpotlight]: ie,
              }),
              children: [
                ie && (0, e.jsx)(cl, {}),
                (0, e.jsxs)("div", {
                  className: ae.TileEventRow,
                  children: [
                    (0, e.jsx)(pl, {
                      fnOnFallbackClick: h,
                      lang: b,
                      eventModel: i,
                    }),
                    (0, e.jsx)("div", {
                      className: ae.TileTextContainer,
                      onClick: h,
                      children: (0, e.jsxs)("div", {
                        className: ae.TileDescriptionContainer,
                        children: [
                          (0, e.jsxs)("div", {
                            style: { display: "flex" },
                            children: [
                              (0, e.jsx)("div", {
                                className: ae.TileTextAppName,
                                children: S,
                              }),
                              (0, e.jsxs)("div", {
                                className: ae.TileTextEventType,
                                children: [
                                  i.GetCategoryAsString(!0),
                                  G &&
                                    (0, e.jsxs)("span", {
                                      className: ae.TileHasSale,
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
                          y && !1,
                          (0, e.jsxs)("div", {
                            className: J.ContainerSpaceBetween,
                            children: [
                              (0, e.jsxs)("div", {
                                className: ae.TileTextStartsIn,
                                children: [
                                  (0, e.jsx)(st.K4, {
                                    dateAndTime:
                                      i.GetStartTimeAndDateUnixSeconds(),
                                    bSingleLine: !0,
                                  }),
                                  !te && H && (0, e.jsx)(ul, { eventModel: i }),
                                  i.BHasTag("auto_rssfeed") &&
                                    (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("br", {}),
                                        (0, e.jsx)("a", {
                                          href:
                                            D.TS.STORE_BASE_URL +
                                            "curator/" +
                                            i.clanSteamID.GetAccountID() +
                                            "/admin/manage_rss/",
                                          children:
                                            " " +
                                            (0, s.we)(
                                              "#EventEditor_Status_FromRSSFeed",
                                            ),
                                        }),
                                      ],
                                    }),
                                  (0, e.jsx)(ri, {
                                    eventModel: i,
                                    bAllowUpdate: !1,
                                  }),
                                ],
                              }),
                              !!nt &&
                                (0, e.jsxs)("div", {
                                  className: ae.TileStats,
                                  children: [
                                    (0, s.PP)(
                                      "#EventDashBoard_Summary_Tile_Impressions",
                                      (0, e.jsx)("span", {
                                        children: (0, _t.D)(
                                          nt.m_stats.total_showm,
                                        ),
                                      }),
                                    ),
                                    (0, e.jsx)("br", {}),
                                    (0, s.PP)(
                                      "#EventDashBoard_Summary_Tile_Read",
                                      (0, e.jsx)("span", {
                                        children: (0, _t.D)(
                                          nt.m_stats.total_read,
                                        ),
                                      }),
                                    ),
                                  ],
                                }),
                            ],
                          }),
                          He && (0, e.jsx)(hl, { eventModel: i }),
                          lt
                            ? (0, e.jsxs)("div", {
                                className: ae.TileButtonContainer,
                                onClick: _,
                                children: [
                                  (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#EventEditor_DataFromConnectAnnouncement",
                                    ),
                                  }),
                                  (0, e.jsx)(se.tj, {
                                    className: (0, j.A)(
                                      ae.ManageButton,
                                      ae.Edit,
                                    ),
                                    eventModel: i,
                                    route: se.PH.k_eView,
                                    children: (0, s.we)("#Button_ViewPage"),
                                  }),
                                ],
                              })
                            : (0, e.jsx)(ml, { fnOnGotoPage: v, ...t }),
                          r &&
                            (0, e.jsx)(le.Eb, {
                              requireAdmin: !0,
                              clanSteamID: i.clanSteamID,
                              children: (0, e.jsx)(gl, { eventModel: i }),
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
        function cl() {
          return (0, e.jsxs)("div", {
            className: ae.PartnerEventFeaturedHeader,
            children: [
              (0, s.we)("#EventDisplay_Visible_Featured"),
              (0, e.jsx)(Ee.he, {
                toolTipContent: (0, s.we)(
                  "#EventDisplay_Visible_Featured_Tooltip",
                ),
                children: "\xA0(?)",
              }),
            ],
          });
        }
        const ul = (0, R.PA)(function (t) {
            const { eventModel: n } = t,
              i = K.HD.GetTimeNowWithOverride();
            return n.GetStartTimeAndDateUnixSeconds() > i
              ? (0, e.jsx)("span", {
                  className: ae.EventStateUpcoming,
                  children: (0, s.we)("#EventDisplay_Upcoming"),
                })
              : (0, ea.JS)(n.type) && n.GetEndTimeAndDateUnixSeconds() > i
                ? (0, e.jsx)("span", {
                    className: ae.EventStateActive,
                    children: (0, s.we)("#EventDisplay_Active"),
                  })
                : n.GetStartTimeAndDateUnixSeconds() > i + 3600
                  ? (0, e.jsx)("span", {
                      className: ae.EventStateRecent,
                      children: (0, s.we)("#EventDisplay_RecentlyActive"),
                    })
                  : null;
          }),
          hl = (0, R.PA)(function (t) {
            const { eventModel: n } = t;
            return n.visibilityStartTime == n.startTime
              ? (0, e.jsx)("div", {
                  className: ae.TileTextStartsIn,
                  children: (0, s.we)(
                    "#EventEditor_Status_WillBeVisible_EventStart",
                  ),
                })
              : (0, e.jsx)("div", {
                  className: ae.TileTextStartsIn,
                  children: (0, s.PP)(
                    "#EventEditor_Status_WillBeVisible_At",
                    (0, e.jsx)(st.K4, {
                      dateAndTime: n.GetVisibilityStartTimeAndDateUnixSeconds(),
                      bSingleLine: !0,
                    }),
                  ),
                });
          });
        function pl(a) {
          const { fnOnFallbackClick: t, eventModel: n, lang: i } = a;
          let o = [(0, $o.m0)(n, "capsule", i)];
          return (0, e.jsx)("div", {
            className: ae.TileImageCtn,
            onClick: (r) => t(r),
            children: (0, e.jsx)(el.o, { className: ae.TileImage, srcs: o }),
          });
        }
        const ml = (0, R.PA)(function (t) {
          const { eventModel: n, fnOnGotoPage: i, refresh: l } = t,
            o = E.useCallback((h) => {
              h.stopPropagation();
            }, []),
            r = E.useCallback(() => {
              i("view");
            }, [i]),
            d = n.bOldAnnouncement,
            m = n.visibility_state != $.zv.k_EEventStateVisible,
            c = n.visibility_state == $.zv.k_EEventStateUnlisted,
            v = n.visibility_state != $.zv.k_EEventStateUnpublished;
          return (0, e.jsxs)("div", {
            className: ae.TileButtonContainer,
            onClick: o,
            children: [
              !d &&
                (0, e.jsx)(se.tj, {
                  className: (0, j.A)(ae.ManageButton, ae.Edit),
                  eventModel: n,
                  route: se.PH.k_eCommunityEdit,
                  onClick: o,
                  children: (0, s.we)("#Button_Edit"),
                }),
              d &&
                (0, e.jsx)(se.tj, {
                  className: (0, j.A)(ae.ManageButton, ae.Edit),
                  eventModel: n,
                  route: se.PH.k_eCommunityMigrate,
                  onClick: o,
                  children: (0, e.jsx)(Ee.he, {
                    toolTipContent: (0, s.we)(
                      "#EventEditor_Button_MigrateAndEdit_Announcement_ttip",
                    ),
                    children: (0, s.we)("#EventEditor_Button_MigrateAndEdit"),
                  }),
                }),
              m &&
                !c &&
                (0, e.jsx)(se.tj, {
                  className: (0, j.A)(ae.ManageButton, ae.View),
                  eventModel: n,
                  route: se.PH.k_eCommunityPreview,
                  onClick: o,
                  children: (0, e.jsx)(Ee.he, {
                    toolTipContent: (0, s.we)(
                      "#EventEditor_Button_PreviewButton_ttip",
                    ),
                    children: (0, s.we)("#EventDisplay_Preview"),
                  }),
                }),
              (!m || c) &&
                (0, e.jsx)(se.tj, {
                  className: (0, j.A)(ae.ManageButton, ae.View),
                  eventModel: n,
                  route: se.PH.k_eView,
                  onClick: o,
                  children: (0, s.we)("#EventDisplay_View"),
                }),
              !v &&
                !d &&
                (0, e.jsx)(_l, { eventModel: n, OnPublishSuccess: r }),
              (0, e.jsx)("div", { className: ae.Spacer, children: "\xA0" }),
              (0, e.jsx)(Ko, { eventModel: n, fnOnGotoPage: i }),
              (0, e.jsx)(vl, { eventModel: n, refresh: l }),
            ],
          });
        });
        function _l(a) {
          const { eventModel: t, OnPublishSuccess: n } = a,
            [i, l] = E.useState({ kind: "none" }),
            o = E.useCallback(() => l({ kind: "none" }), []),
            r = (0, le.Dd)(t.clanSteamID, !0),
            d = E.useCallback(
              (m) => {
                m.stopPropagation(),
                  P.mh
                    .LoadEditorModel(t.clanSteamID, t.GID)
                    .then(() => {
                      l({ kind: "publish" });
                    })
                    .catch((c) => {
                      const v = (0, ye.H)(c);
                      l({ kind: "error", strMessage: v.strErrorMsg });
                    });
              },
              [t],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, j.A)(ae.ManageButton, ae.Publish),
                onClick: d,
                children: (0, s.we)("#EventDisplay_Publish"),
              }),
              (0, e.jsx)(V.EN, {
                active: i.kind == "publish",
                children:
                  i.kind == "publish" &&
                  (0, e.jsx)(ba.i, {
                    editModel: P.mh.GetEditModel(),
                    partnerEventEditorStore: P.mh,
                    bValveAdmin: r,
                    closeModal: o,
                    OnPublishSuccess: n,
                  }),
              }),
              (0, e.jsx)(V.EN, {
                active: i.kind == "error",
                children:
                  i.kind == "error" &&
                  (0, e.jsx)(V.KG, {
                    strTitle: (0, s.we)("#EventEditor_PublishingError"),
                    bAlertDialog: !0,
                    bDestructiveWarning: !0,
                    strDescription: (0, s.we)(
                      "#EventEditor_PublishingError_Desc",
                      i.strMessage,
                    ),
                    closeModal: o,
                  }),
              }),
            ],
          });
        }
        function vl(a) {
          const { eventModel: t, refresh: n } = a,
            [i, l, o] = (0, tl.uD)(),
            r = E.useCallback(
              (d) => {
                d.stopPropagation(), l();
              },
              [l],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ee.he, {
                toolTipContent: (0, s.we)(
                  "#EventEditor_Button_DeleteButton_ttip",
                ),
                children: (0, e.jsx)("div", {
                  className: (0, j.A)(ae.ManageButton, ae.Delete),
                  onClick: r,
                  children: (0, s.we)("#Button_Delete"),
                }),
              }),
              (0, e.jsx)(V.EN, {
                active: i,
                children: (0, e.jsx)(Xo.p, {
                  eventModel: t,
                  partnerEventStore: P.mh,
                  closeModal: o,
                  onDeleteSuccessAndCloseDialog: n,
                }),
              }),
            ],
          });
        }
        function di(a, t) {
          if (!a || t <= 0) return [];
          const n = new Array();
          return (
            Object.keys(a).forEach((i) => {
              var l;
              const o = a[i],
                r = ((l = JSON.stringify(o)) == null ? void 0 : l.length) || 0;
              n.push({ key: i, size: r }),
                o &&
                  (typeof o == "object" || Array.isArray(o)) &&
                  r > 100 &&
                  di(o, t - 1).forEach((d) => {
                    n.push({ key: i + ":" + d.key, size: d.size });
                  });
            }),
            n
          );
        }
        const gl = (a) => {
          var t, n;
          const { eventModel: i } = a;
          if (!(i != null && i.jsondata)) return null;
          const l = di(i.jsondata, 3);
          return (
            l.sort((r, d) => d.size - r.size),
            (0, e.jsxs)("div", {
              className: ae.MetaDataCtn,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    "Total Size: ",
                    (n =
                      (t = JSON.stringify(i.jsondata)) == null
                        ? void 0
                        : t.length) == null
                      ? void 0
                      : n.toLocaleString((0, Ht.J)()),
                  ],
                }),
                l
                  .slice(0, 10)
                  .map((r) =>
                    (0, e.jsxs)(
                      "div",
                      { children: [r.key, ": ", (0, _t.D)(r.size)] },
                      r.key,
                    ),
                  ),
              ],
            })
          );
        };
        var Mt = p(50974);
        const Dn = 10,
          Sl = (0, R.PA)((a) => {
            const { match: t } = a,
              [n, i] = E.useState(!1),
              [l, o] = E.useState(""),
              [r, d] = E.useState(""),
              [m, c] = E.useState(!1),
              [v, h] = E.useState(0),
              _ = E.useRef(void 0),
              u = E.useMemo(() => new me.b(D.UF.CLANSTEAMID), []),
              x = E.useMemo(() => new Wa.LU(), []),
              b = E.useMemo(() => pe().CancelToken.source(), []),
              {
                bIsFetching: S,
                nHiddenEventCount: y,
                rgEventModels: L,
                fnRefetch: G,
              } = (0, P.lX)(u, !n),
              {
                rgClanEventData: H,
                bHasNextPage: te,
                fnFetchNextPage: ce,
                bIsFetching: ie,
                bIsFetchingNextPage: He,
                clanEventSummaryStatus: nt,
                clanEventSummaryLoadError: ze,
                fnRefetch: lt,
              } = (0, ht.SG)(u, Dn, b);
            E.useEffect(
              () => (G(), lt(), () => b.cancel("EventListView to unload")),
              [b, lt, G],
            );
            const Pe = El(ie, S),
              Nt = (0, X.Sz)(ie),
              gt = E.useMemo(() => {
                (0, fa.wT)(
                  !L || L.every((U) => U != null),
                  "draftClanEvents has a null event",
                );
                const he = (U) => m || U.GetEventType() != N.ajI,
                  qe = new Map(),
                  St =
                    H == null
                      ? void 0
                      : H.pages.flatMap((U) => U).map((U) => (0, Oe.oE)(u, U)),
                  Me = St == null ? void 0 : St.filter(he);
                Me == null || Me.forEach((U) => qe.set(U.GID, U));
                const w = L == null ? void 0 : L.filter(he);
                w == null || w.forEach((U) => qe.set(U.GID, U));
                const M =
                  (St != null ? St : []).length + (L != null ? L : []).length;
                return (
                  h(
                    M -
                      (Me != null ? Me : []).length -
                      (w != null ? w : []).length,
                  ),
                  Array.from(qe.values())
                );
              }, [L, H == null ? void 0 : H.pages, m, u]);
            E.useEffect(() => {
              const he = gt
                .filter(
                  (qe) =>
                    !!(qe && qe.BIsVisibleEvent() && qe.BIsPartnerEvent()),
                )
                .map((qe) => qe.GID);
              he.length > 0 && Ve.Uq.LoadStatsForEvents(u, he, b);
            }, [b, u, gt]),
              E.useEffect(() => {
                if (nt == "error") {
                  const he = (0, ye.H)(ze);
                  (0, W.pg)(
                    (0, e.jsx)(V.KG, {
                      children: (0, s.we)(
                        "#Error_Description",
                        he.errorCode,
                        he.strErrorMsg,
                      ),
                    }),
                    window,
                  );
                }
              }, [ze, nt]);
            const Je = (he, qe) => {
                var St;
                const Me = [];
                let w = gt;
                if ((w == null ? void 0 : w.length) > 0) {
                  (w = w.slice().filter((M) => {
                    var U;
                    return !(
                      M.visibility_state !== he ||
                      (r &&
                        !(
                          (U = M.GetNameWithFallback(
                            (0, N.sfN)(D.TS.LANGUAGE),
                          )) != null && U.toLocaleLowerCase().includes(r)
                        ))
                    );
                  })),
                    w.sort(
                      (M, U) => (
                        (0, fa.wT)(
                          M !== U,
                          `Unexpected duplicates in the list: ${M} ${U}`,
                        ),
                        M.BShowLibrarySpotlight(!0) &&
                        !U.BShowLibrarySpotlight(!0)
                          ? -1
                          : !M.BShowLibrarySpotlight(!0) &&
                              U.BShowLibrarySpotlight(!0)
                            ? 1
                            : U.startTime - M.startTime
                      ),
                    );
                  for (const M of w)
                    Me.push(
                      (0, e.jsx)(
                        dl,
                        {
                          appid_or_vanity_str: t.params.appid_or_vanity_str,
                          gid: M.GID,
                          eventModel: M,
                          bShowEventMetaDataSizes: n,
                          refresh: () => {
                            lt(), G();
                          },
                        },
                        M.GID,
                      ),
                    );
                }
                for (
                  let M = 0;
                  M <
                  qe - ((St = w == null ? void 0 : w.length) != null ? St : 0);
                  M++
                )
                  Me.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: ae.TileContainer,
                        children: (0, e.jsx)(Ne.h, {
                          capsules_per_row: [1],
                          is_event_dash_row: !0,
                        }),
                      },
                      `tile_${he}_ghost_${M}`,
                    ),
                  );
                return Me;
              },
              Rt = E.useCallback(
                (he) => {
                  he && !He && ce();
                },
                [He, ce],
              );
            E.useEffect(() => {
              x.Schedule(200, () =>
                d(l == null ? void 0 : l.trim().toLocaleLowerCase()),
              );
            }, [x, l]);
            const jt = Je($.zv.k_EEventStateUnpublished, S ? y : 0),
              rt = Je($.zv.k_EEventStateStaged),
              T = Je($.zv.k_EEventStateUnlisted),
              I = Je($.zv.k_EEventStateVisible),
              q = E.useMemo(() => {
                if (!I) return;
                if (ie || !te) return I;
                const he = I.length >= Dn ? I.length - Dn : I.length,
                  qe = (0, e.jsx)(
                    No.J,
                    { trigger: "repeated", onVisibilityChange: Rt },
                    "visibilityTracker",
                  );
                return [...I.slice(0, he), qe, ...I.slice(he)];
              }, [te, ie, I, Rt]),
              Se =
                jt.length > 0 || rt.length > 0 || T.length > 0 || I.length > 0;
            return (0, e.jsx)(ve.tH, {
              children: (0, e.jsxs)("div", {
                ref: _,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, j.A)("maincontent", we().EventDashboardCtn),
                    children: [
                      (0, e.jsx)(fl, {
                        appid_or_vanity_str: t.params.appid_or_vanity_str,
                      }),
                      (0, e.jsxs)(le.Eb, {
                        requireAdmin: !0,
                        clanSteamID: u,
                        children: [
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(
                              "maincontent",
                              we().EventDashboardCtn,
                              we().EventDashAdminToolsCtn,
                              f().FlexRowContainer,
                            ),
                            children: [
                              (0, e.jsx)(g.Yh, {
                                label: "Show Event Metadata Size",
                                tooltip:
                                  "Surfaces the size of the biggest sections in the event's metadata",
                                onChange: i,
                                checked: n,
                              }),
                              (0, e.jsx)(g.$n, {
                                onClick: (he) =>
                                  (0, W.pg)((0, e.jsx)(Mo, {}), (0, F.uX)(he)),
                                children: "Show Publishing Audit History",
                              }),
                            ],
                          }),
                          u.GetAccountID() == Mt.bv &&
                            (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("a", {
                                  href: "https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m",
                                  target: "_blank",
                                  children: "Content Hub Graphana Stats Page",
                                }),
                                (0, e.jsx)("br", {}),
                                (0, e.jsx)("a", {
                                  href: `${D.TS.COMMUNITY_BASE_URL}groups/store_contenthubs/partnerevents/edit/3016840454305565993?tab=sale`,
                                  children:
                                    "Open 'Default Contnet Hub Sale Page Editor'",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (ie || Se || l.length > 0) &&
                    (0, e.jsx)("div", {
                      className: (0, j.A)(
                        we().EventDashboardCtn,
                        we().EventDashboardSearchCtn,
                        "maincontent",
                      ),
                      children: (0, e.jsx)(g.pd, {
                        type: "text",
                        label: (0, s.we)("#EventCalendar_UniversalSearch"),
                        value: l,
                        onChange: (he) => o(he.target.value),
                      }),
                    }),
                  !m &&
                    v > 0 &&
                    (0, e.jsx)("div", {
                      className: (0, j.A)(
                        we().EventDashboardCtn,
                        "maincontent",
                      ),
                      children: (0, e.jsx)(le.Eb, {
                        requireAdmin: !0,
                        clanSteamID: u,
                        children: (0, e.jsx)("a", {
                          onClick: () => c(!0),
                          children: `Show ${v} hidden Creator Home events`,
                        }),
                      }),
                    }),
                  S &&
                    (0, e.jsx)(Z.t, {
                      position: "center",
                      string: (0, s.we)("#Loading"),
                    }),
                  !Pe &&
                    (0, e.jsxs)("div", {
                      className: we().MainLists,
                      children: [
                        jt.length > 0 &&
                          !S &&
                          (0, e.jsx)("div", {
                            className: (0, j.A)(we().Section, we().Unpublished),
                            children: (0, e.jsxs)("div", {
                              className: (0, j.A)(
                                "maincontent",
                                "eventlist",
                                we().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: we().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)(
                                      "#EventDisplay_Unpublished_Title",
                                    ),
                                    (0, e.jsx)(Q.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Unpublished_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                jt.length > 0 && jt,
                              ],
                            }),
                          }),
                        rt.length > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, j.A)(we().Section, we().Staged),
                            children: (0, e.jsxs)("div", {
                              className: (0, j.A)(
                                "maincontent",
                                "eventlist",
                                we().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: we().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)("#EventDisplay_Stage_Title"),
                                    (0, e.jsx)(Q.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Stage_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                rt.length > 0 && rt,
                              ],
                            }),
                          }),
                        T.length > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, j.A)(we().Section, we().Staged),
                            children: (0, e.jsxs)("div", {
                              className: (0, j.A)(
                                "maincontent",
                                "eventlist",
                                we().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: we().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)("#EventDisplay_Unlisted_Title"),
                                    (0, e.jsx)(Q.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Unlisted_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                T.length > 0 && T,
                              ],
                            }),
                          }),
                        (0, e.jsx)("div", {
                          className: (0, j.A)(
                            we().Section,
                            we().DisplaySectionHeaderContainer,
                            we().Visible,
                          ),
                          children: (0, e.jsxs)("div", {
                            className: (0, j.A)(
                              "maincontent",
                              "eventlist",
                              we().EventDashboardCtn,
                            ),
                            children: [
                              (0, e.jsx)("div", {
                                className: we().DisplaySectionHeader,
                                children: (0, s.we)(
                                  "#EventDisplay_Visible_Title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: we().DisplaySectionSubHeader,
                                children: (0, s.we)(
                                  "#EventDisplay_Visible_Title_WithRange",
                                ),
                              }),
                              q,
                              !ie &&
                                !q &&
                                (0, e.jsx)("div", {
                                  children: (0, s.we)("#EventDisplay_NoPublic"),
                                }),
                              (ie || (Nt && te)) &&
                                (0, e.jsx)(Z.t, {
                                  position: "center",
                                  string: (0, s.we)("#Loading"),
                                }),
                              !te &&
                                (0, e.jsx)("div", {
                                  children: (0, s.we)(
                                    "#EventDisplay_AllPublicShown",
                                  ),
                                }),
                              ze &&
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
        function El(a, t) {
          const [n, i] = E.useState(!0);
          return (
            (0, X.Z3)(() => i(!1), 4e3),
            E.useEffect(() => {
              !a && !t && i(!1);
            }, [t, a]),
            n
          );
        }
        const fl = (0, R.PA)((a) => {
            const { appid_or_vanity_str: t } = a,
              n = new me.b(D.UF.CLANSTEAMID),
              i = oe.ac.GetClanInfoByClanAccountID(n.GetAccountID()),
              l = Ve.Uq.GetTotalStats(n);
            return (0, e.jsxs)("div", {
              className: f().EventDashboardHeader,
              children: [
                (0, e.jsx)(We.xL, { identifier: t }),
                (0, e.jsxs)("div", {
                  className: f().EventDashboardTitles,
                  children: [
                    (0, e.jsxs)("div", {
                      className: f().maintitle,
                      children: [
                        (0, s.we)("#EventDisplay_Events"),
                        (0, e.jsx)("div", {
                          className: f().subtitle,
                          children: (0, s.we)("#EventDisplay_Edit_Desc"),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventDashboardActions,
                      children: (0, e.jsx)(ue.N_, {
                        className: (0, j.A)(f().Button, f().Primary),
                        to: ee.GY.Create(t),
                        onClick: () => P.mh.ResetModel(),
                        children: (0, s.we)("#EventDisplay_CreateNewEvent"),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().EventDashboardStatsCtn,
                  children: (0, e.jsx)(Qe, {
                    summary: l.m_stats,
                    clanSteamID: n,
                    bIsAllowedInLibrary: i == null ? void 0 : i.is_ogg,
                  }),
                }),
              ],
            });
          }),
          ci = (0, Qa.L)(Sl);
        var xl = p(85122),
          bl = p(77477),
          jl = p(57161),
          Cl = p(30825),
          ui = p(58483),
          wl = p(98112),
          yl = p(78745),
          Dl = Object.defineProperty,
          Tl = Object.getOwnPropertyDescriptor,
          Il = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Tl(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Dl(t, n, l), l;
          };
        let Tn = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.m_clanSteamID = new me.b(D.UF.CLANSTEAMID));
          }
          componentDidMount() {
            P.mh.GetEditModel() &&
              this.props.mode === "view" &&
              P.mh.GetEditModel().ClearDirty();
          }
          componentDidUpdate(a) {
            P.mh.GetEditModel() &&
              this.props.mode === "view" &&
              P.mh.GetEditModel().ClearDirty();
          }
          render() {
            const { mode: a } = this.props;
            if (a === "view") {
              let t = P.mh.GetEditModel().GetEventModel(),
                n = (0, N.sfN)(D.TS.LANGUAGE);
              return t.BHasSaleEnabled()
                ? (0, e.jsx)(ve.tH, {
                    children: (0, e.jsx)(yl._, {
                      eventModel: t,
                      bIsPreview: !0,
                      language: n,
                    }),
                  })
                : (0, e.jsx)(ui.sU, {
                    children: (i) =>
                      (0, e.jsx)(xl.jA, {
                        event: t,
                        lang: n,
                        emoticonStore: i,
                        adminPanel: (0, e.jsx)(jl.g, {
                          eventModel: t,
                          partnerEventStore: P.mh,
                        }),
                        otherEventRow: (0, e.jsx)(Cl.r, {
                          clanAccountID: t.clanSteamID.GetAccountID(),
                          trackingLocation: wl.Tc.My,
                          gidAnnouncement: t.AnnouncementGID,
                          partnerEventStore: P.Av,
                          bViewAllShowInfiniteScroll: !t.BIsOGGEvent(),
                        }),
                      }),
                  });
            } else
              return (0, e.jsx)(bl.l, {
                editModel: P.mh.GetEditModel(),
                appid_or_vanity_str:
                  this.props.match.params.appid_or_vanity_str,
                gid: this.props.match.params.gid,
                bDisplaySale: a === "previewsale",
              });
          }
        };
        Tn = Il([R.PA], Tn);
        const In = (0, Qa.L)(Tn);
        var ia = p(33512),
          hi = p(21438),
          Al = p(39093),
          oa = p(62616),
          B = p(65946);
        const Gl = 0,
          Ja = 1,
          qa = 2;
        var Nl = ((a) => (
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
          ))(Nl || {}),
          Bl = ((a) => (
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
          ))(Bl || {}),
          $e = p(60480),
          pi = p(1880),
          Ml = p(64641),
          la = p.n(Ml),
          ra = p(16369),
          An = p(95682),
          Le = p(79573),
          Ll = p(25359),
          _e = p.n(Ll),
          Gn = p(21418),
          Nn = p(47689),
          Ol = p(26759),
          mi = p(46066),
          zt = p(54016),
          Be = p(29630);
        const ja = (a) => {
            let t = null;
            a.artworkType === "capsule"
              ? (t = (0, e.jsxs)(E.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_capsule_1"),
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${Be.zU.GetBaseURL()}31721797/2ef00d65527edf9aecdaddee086b0f5ee0cc2fe6.jpg`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${Be.zU.GetBaseURL()}7614223/fe3aa1776d96e4aa215edbdacc363a9ed005213e.png`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${Be.zU.GetBaseURL()}27000850/dc17534edaabe8d351fdfb1c6186c4eb3e637c8d.png`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${Be.zU.GetBaseURL()}31013613/a98ecca7730e4857cb5f83e50f3304ce13bf56bf.jpg`,
                        }),
                      ],
                    }),
                  ],
                }))
              : a.artworkType === "background"
                ? (t = (0, e.jsxs)(E.Fragment, {
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, s.we)("#selectimage_tip_background_1"),
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${Be.zU.GetBaseURL()}3703047/72feb03fa4eced13596f0ff7b9ec434865cb73e4.png`,
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${Be.zU.GetBaseURL()}5193306/62436147b454715822a198a2767e5c7a8560617e.jpg`,
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${Be.zU.GetBaseURL()}31721797/77cbe3f768e16b149c78f127b09c047826646ba5.png`,
                      }),
                    ],
                  }))
                : a.artworkType === "spotlight" &&
                  (t = (0, e.jsx)(E.Fragment, {
                    children: (0, e.jsxs)("div", {
                      className: _e().AssetExampleSpotlightCtn,
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
            const n = (i) => {
              (0, W.pg)(
                (0, e.jsx)(V.o0, {
                  onOK: () => {},
                  onCancel: () => {},
                  bAlertDialog: !0,
                  strTitle: (0, s.we)(
                    `#EventEditor_ExampleTitle_${a.artworkType}`,
                  ),
                  strDescription: (0, s.we)("#EventEditor_ExampleDescription"),
                  children: i,
                }),
                window,
              );
            };
            return t
              ? (0, e.jsxs)("div", {
                  className: f().FlexRowContainer,
                  children: [
                    (0, e.jsx)(g.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: () => n(t),
                      children: (0, s.we)("#EventEditor_ViewExamples"),
                    }),
                    (0, e.jsx)(g.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: (i) =>
                        (0, O.EP)(
                          i,
                          "https://partner.steamgames.com/doc/store/assets/eventassets",
                        ),
                      children: (0, s.we)("#EventEditor_Learn_More"),
                    }),
                  ],
                })
              : null;
          },
          Ka = (a) => {
            let t = null;
            a.artworkType === "sale_header"
              ? (t = (0, e.jsxs)(E.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_sale_header_1"),
                    }),
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_sale_header_2"),
                    }),
                    (0, e.jsxs)("div", {
                      className: _e().SaleHeaderExampleCtn,
                      children: [
                        (0, e.jsxs)("div", {
                          className: _e().SaleHeaderExampleCol,
                          children: [
                            (0, e.jsx)("a", {
                              href: `${Be.zU.GetBaseURL()}4/a7dcfaf476e3351bb34b8af3e423a6e6cd652a04.jpg`,
                              target: "_blank",
                              children: (0, e.jsx)("img", {
                                src: `${Be.zU.GetBaseURL()}4/a7dcfaf476e3351bb34b8af3e423a6e6cd652a04.jpg`,
                              }),
                            }),
                            (0, e.jsx)("a", {
                              href: `${Be.zU.GetBaseURL()}4/502e9a6d3bb266b4274a946192bb960f15e1d136.png`,
                              target: "_blank",
                              children: (0, e.jsx)("img", {
                                src: `${Be.zU.GetBaseURL()}4/502e9a6d3bb266b4274a946192bb960f15e1d136.png`,
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: _e().SaleHeaderExampleCol,
                          children: (0, e.jsx)("a", {
                            href: `${Be.zU.GetBaseURL()}4/0b6edf0575cc418172fc9d7614ae5c2881d1dcc0.jpg`,
                            target: "_blank",
                            children: (0, e.jsx)("img", {
                              src: `${Be.zU.GetBaseURL()}4/0b6edf0575cc418172fc9d7614ae5c2881d1dcc0.jpg`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }))
              : a.artworkType === "product_banner" &&
                (t = (0, e.jsxs)(E.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)(
                        "#selectimage_tip_sale_product_banner",
                      ),
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${Be.zU.GetBaseURL()}4/8298b4d6ebf6f6dd2355054431d339ec9dcafdef.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${Be.zU.GetBaseURL()}4/cc803d270bf7f47ee508bbadf14577bbfe5f6500.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${Be.zU.GetBaseURL()}4/309cb650beb92e00ae352710387832aea78433ef.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${Be.zU.GetBaseURL()}4/ecd819245dd4aca57aed76f714a28b2356ad90f2.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${Be.zU.GetBaseURL()}4/7375e5c0f2adb7241870acfa931e167ff13c669f.gif`,
                    }),
                  ],
                }));
            const n = (i) => {
              (0, W.pg)(
                (0, e.jsx)(V.o0, {
                  onOK: () => {},
                  onCancel: () => {},
                  bAlertDialog: !0,
                  strTitle: (0, s.we)(
                    `#EventEditor_ExampleTitle_${a.artworkType}`,
                  ),
                  strDescription: (0, s.we)("#EventEditor_ExampleDescription"),
                  children: i,
                }),
                window,
              );
            };
            return t
              ? (0, e.jsxs)("div", {
                  className: f().FlexRowContainer,
                  children: [
                    (0, e.jsx)(g.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: () => n(t),
                      children: (0, s.we)("#EventEditor_ViewExamples"),
                    }),
                    (0, e.jsx)(g.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: (i) =>
                        (0, O.EP)(
                          i,
                          "https://partner.steamgames.com/doc/marketing/event_tools/sales/tools",
                        ),
                      children: (0, s.we)("#EventEditor_Learn_More"),
                    }),
                    (0, e.jsx)("br", {}),
                  ],
                })
              : null;
          };
        var et = p(80738),
          Pl = p(42440),
          Rl = p(83402),
          kl = p(93153),
          da = p(61819),
          ft = p(36631),
          Ca = p(46777),
          Vt = p(91512),
          Lt = p(18197),
          Fl = p(8982);
        function Ul(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, B.q3)(() => n.jsondata.bAutoUpdateVanityURLForContentHub),
            l = (0, B.q3)(() => n.jsondata.sale_defines_specific_contenthub),
            o = (0, B.q3)(() => n.jsondata.sale_defines_temporary_contenthub),
            r = (0, B.q3)(() => n.BContentHubDiscountedOnly()),
            d = (0, B.q3)(() => n.jsondata.content_hub_restricted_width),
            m = (0, B.q3)(() => n.jsondata.ignore_item_browser_overrides),
            c = (0, B.q3)(() => n.jsondata.contenthub_override_artwork),
            v = (0, B.q3)(() => n.jsondata.contenthub_override_section_styles),
            h = (0, B.q3)(() => n.jsondata.contenthub_override_tab_styles),
            _ = (0, B.q3)(() => n.jsondata.contenthub_override_tab_definitions),
            u = (0, B.q3)(
              () => n.jsondata.contenthub_override_item_browser_flavors,
            ),
            x = (0, B.q3)(
              () => n.jsondata.contenthub_override_item_browser_facets,
            ),
            b = (0, B.q3)(() => n.jsondata.contenthub_disable_overrides),
            S = (0, B.q3)(
              () => n.jsondata.contenthub_dlc_for_your_flavor_override,
            ),
            [y, L] = (0, E.useState)(() => {
              var G;
              return (
                ((G = n.jsondata.prune_list_optin_name) == null
                  ? void 0
                  : G.length) > 0
              );
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(g.JU, {
                style: { marginTop: "0px" },
                children: "Content Hub Specification",
              }),
              (0, e.jsx)(g.Yh, {
                label: "Auto update vanity URL based on configured content hub",
                checked: i,
                onChange: (G) => {
                  (n.jsondata.bAutoUpdateVanityURLForContentHub = G),
                    G && (0, Lt.sL)(n.GetContentHub(), t),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.Yh, {
                label: "This is an individual content hub...",
                tooltip:
                  "If checked, this sale page will be used to render only a specific content hub. Check this if you are defining tabs/merchandising for some specific hub, or if you're defining a theme sale.",
                checked: l,
                onChange: (G) => {
                  (n.jsondata.sale_defines_specific_contenthub = G || void 0),
                    n.jsondata.bAutoUpdateVanityURLForContentHub &&
                      (0, Lt.sL)(n.GetContentHub(), t),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              l && (0, e.jsx)(Hl, { ...a }),
              (0, e.jsx)(g.Yh, {
                label: "This is a limited time sale event",
                tooltip:
                  "If checked, this sale page will be used when rendering content hubs only during the time period specified in the Options tab of the sale editor. Check this if you are defining a takeover for a seasonal sale, or if you're defining a theme sale.",
                checked: o,
                onChange: (G) => {
                  (n.jsondata.sale_defines_temporary_contenthub = G || void 0),
                    n.jsondata.bAutoUpdateVanityURLForContentHub &&
                      (0, Lt.sL)(n.GetContentHub(), t),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.JU, {
                style: { marginTop: "16px" },
                children: "App Inclusion",
              }),
              (0, e.jsx)(g.Yh, {
                label: "Show discounted (and free-to-play) items only",
                checked: r,
                onChange: (G) => {
                  (n.jsondata.content_hub_discounted_only = G),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.Yh, {
                label: "Include/exclude items based on registration state... ",
                tooltip:
                  "If checked, this hub will include opted-in games and exclude pruned out games from the selected opt-in event. Typically used when defining a theme sale.",
                checked: y,
                onChange: (G) => {
                  L(G),
                    G || (n.jsondata.prune_list_optin_name = void 0),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              y && (0, e.jsx)(zl, { ...a }),
              (0, e.jsx)(g.JU, {
                style: { marginTop: "16px" },
                children: "Overrides",
              }),
              (0, e.jsx)(g.Yh, {
                label: "Show restricted-width title and main carousel",
                checked: d,
                onChange: (G) => {
                  (n.jsondata.content_hub_restricted_width = G),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.Yh, {
                label: "Override artwork",
                tooltip:
                  "If checked, use artwork (background, fonts, colors, etc.) from this sale page instead of the artwork defined in the sale page it inherits from.",
                checked: c,
                onChange: (G) => {
                  (n.jsondata.contenthub_override_artwork = G),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.Yh, {
                label: "Override section styles",
                tooltip:
                  "If checked, for every section that exists in this sale page and the parent sale page, use section styles (colors, etc.) from this sale page instead of from the parent.",
                checked: v,
                onChange: (G) => {
                  (n.jsondata.contenthub_override_section_styles = G),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.Yh, {
                label: "Override tab styles",
                tooltip:
                  "If checked, and a tabs section exists in this sale page and the parent sale page, use tab styles (colors, fonts, etc.) from this sale page instead of from the parent.",
                checked: h,
                onChange: (G) => {
                  (n.jsondata.contenthub_override_tab_styles = G),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.Yh, {
                label: "Override tab definitions",
                tooltip:
                  "If checked, and a tabs section exists in this sale page and the parent sale page, use the tab definitions (names, filters, etc.) from this sale page instead of from the parent.",
                checked: _,
                onChange: (G) => {
                  (n.jsondata.contenthub_override_tab_definitions = G),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.Yh, {
                label: "Override item browser flavor tabs",
                tooltip:
                  "If checked, and an item browser section exists in this sale page and the parent sale page, use the flavor definitions (e.g. Popular, Recently Released, etc.) from this sale page instead of from the parent.",
                checked: u,
                onChange: (G) => {
                  (n.jsondata.contenthub_override_item_browser_flavors = G),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.Yh, {
                label:
                  "Ignore item browser tab overrides during sale takeovers",
                checked: m,
                onChange: (G) => {
                  (n.jsondata.ignore_item_browser_overrides = G),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.Yh, {
                label: "Override item browser facets",
                tooltip:
                  "If checked, and an item browser section exists in this sale page and the parent sale page, use the facet menu from this sale page instead of from the parent.",
                checked: x,
                onChange: (G) => {
                  (n.jsondata.contenthub_override_item_browser_facets = G),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(g.Yh, {
                label: "Disable override logic",
                tooltip:
                  "If checked, the sections defined in this sale page will be used as-is, instead of being combined with parent sale pages via the override logic.",
                checked: b,
                onChange: (G) => {
                  (n.jsondata.contenthub_disable_overrides = G),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(Fl.x, {
                strFlavor: S || "popular",
                fnSetFlavor: (G) => {
                  n.jsondata.contenthub_dlc_for_your_flavor_override = G;
                },
                strLabelOverride: "Override DLC For You filter/sort",
              }),
              (0, e.jsx)(Vl, { ...a }),
            ],
          });
        }
        function Hl(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, B.q3)(() => n.GetContentHubType()),
            l = (0, B.q3)(() => n.GetContentHubCategory()),
            o = (0, B.q3)(() => n.GetContentHubTag()),
            { contentHubNames: r } = (0, Rl._)(),
            d = (0, E.useMemo)(
              () => (r ? r.hubtypes.map((v) => ({ value: v, label: v })) : []),
              [r],
            ),
            m = (0, E.useMemo)(
              () =>
                r
                  ? Array.from(r.categories.keys()).map((v) => ({
                      value: v,
                      label: `${r.categories.get(v)} (${v})`,
                    }))
                  : [],
              [r],
            ),
            c = (0, E.useMemo)(
              () =>
                r
                  ? Array.from(r.tags.keys()).map((v) => ({
                      value: `${v}`,
                      label: `${r.tags.get(v)} (${v})`,
                    }))
                  : [],
              [r],
            );
          return (0, e.jsxs)("div", {
            style: { marginLeft: "32px", marginRight: "32px" },
            children: [
              (0, e.jsx)(g.JU, {
                children: (0, s.we)("#Sale_BrowseSection_ContentHubType"),
              }),
              (0, e.jsx)("div", {
                style: { marginBottom: "12px" },
                children: (0, e.jsx)(da.Ay, {
                  isSearchable: !0,
                  className: "react-select-container",
                  classNamePrefix: "react-select",
                  isDisabled: !d,
                  options: d,
                  value: d == null ? void 0 : d.find((v) => v.value === i),
                  onChange: (v) => {
                    (n.jsondata.source_content_hub = {
                      type: v.value,
                      category: v.value === "category" ? l : void 0,
                      tagid: v.value === "tags" ? o : void 0,
                    }),
                      t.SetDirty(C.IQ.jsondata_sales);
                  },
                }),
              }),
              i === "category" &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(g.JU, {
                      children: (0, s.we)(
                        "#Sale_BrowseSection_ContentHubCategory",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      style: { marginBottom: "12px" },
                      children: (0, e.jsx)(da.Ay, {
                        isSearchable: !0,
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isDisabled: !m,
                        options: m,
                        value:
                          m == null ? void 0 : m.find((v) => v.value === l),
                        onChange: (v) => {
                          (n.jsondata.source_content_hub = {
                            type: i,
                            category: v == null ? void 0 : v.value,
                          }),
                            t.SetDirty(C.IQ.jsondata_sales);
                        },
                      }),
                    }),
                  ],
                }),
              i === "tags" &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(g.JU, {
                      children: (0, s.we)("#Sale_BrowseSection_ContentHubTag"),
                    }),
                    (0, e.jsx)("div", {
                      style: { marginBottom: "12px" },
                      children: (0, e.jsx)(da.Ay, {
                        isSearchable: !0,
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isDisabled: !c,
                        options: c,
                        value:
                          c == null
                            ? void 0
                            : c.find((v) => Number(v.value) === o),
                        onChange: (v) => {
                          (n.jsondata.source_content_hub = {
                            type: i,
                            tagid: Number(v == null ? void 0 : v.value),
                          }),
                            t.SetDirty(C.IQ.jsondata_sales);
                        },
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function zl(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, B.q3)(() => n.jsondata.prune_list_optin_name),
            l = (0, B.q3)(() => n.jsondata.optin_only),
            { rgOptIns: o } = (0, kl.Zs)(),
            r = (0, E.useMemo)(
              () =>
                o
                  ? o.map((d) => ({
                      value: d.pageid,
                      label: `${d.title[D.TS.LANGUAGE]} (${d.pageid})`,
                    }))
                  : [],
              [o],
            );
          return (0, e.jsxs)("div", {
            style: { marginLeft: "32px", marginRight: "32px" },
            children: [
              (0, e.jsx)(g.JU, { children: "Opt-In Event" }),
              (0, e.jsxs)("div", {
                style: { marginBottom: "12px" },
                children: [
                  (0, e.jsx)(da.Ay, {
                    isSearchable: !0,
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isDisabled: !r,
                    options: r,
                    value: r == null ? void 0 : r.find((d) => d.value === i),
                    onChange: (d) => {
                      (n.jsondata.prune_list_optin_name = d.value),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                  }),
                  (0, e.jsx)(g.Yh, {
                    label: "Only show invited games",
                    tooltip:
                      "If checked, this hub will only show games that have been invited to register for the event. Typically used when defining a theme sale.",
                    checked: l,
                    onChange: (d) => {
                      (n.jsondata.optin_only = d),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                  }),
                ],
              }),
            ],
          });
        }
        function Vl(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, B.q3)(
              () =>
                !n.jsondata.sale_defines_specific_contenthub &&
                !n.jsondata.sale_defines_temporary_contenthub,
            ),
            l = (0, B.q3)(() => n.jsondata.contenthub_section_groups),
            [o, r] = (0, Pl._)(!0);
          return !i && o
            ? null
            : (0, e.jsxs)("div", {
                style: { width: "100%" },
                children: [
                  (0, e.jsx)(g.JU, {
                    style: { marginTop: "16px" },
                    children: "Section Layout",
                  }),
                  (0, e.jsx)(Vt.A, {
                    items: l || [],
                    onDelete: (d) => {
                      (n.jsondata.contenthub_section_groups = [
                        ...n.jsondata.contenthub_section_groups.slice(0, d),
                        ...n.jsondata.contenthub_section_groups.slice(d + 1),
                      ]),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                    onReorder: () => {
                      t.SetDirty(C.IQ.jsondata_sales);
                    },
                    render: (d) =>
                      (0, e.jsx)(Wl, {
                        editModel: t,
                        group: d,
                        isEditable: i,
                        baseEventJSON: r,
                        onChange: () => {
                          t.SetDirty(C.IQ.jsondata_sales);
                        },
                      }),
                  }),
                  (0, e.jsx)(g.$n, {
                    style: { maxWidth: "200px", margin: "0 auto" },
                    onClick: () => {
                      l || (n.jsondata.contenthub_section_groups = []),
                        (n.jsondata.contenthub_section_groups = [
                          ...n.jsondata.contenthub_section_groups,
                          { name: "", sections: [] },
                        ]),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                    children: "Add Group",
                  }),
                ],
              });
        }
        function Wl(a) {
          const {
              editModel: t,
              group: n,
              isEditable: i,
              baseEventJSON: l,
              onChange: o,
            } = a,
            r = (0, B.q3)(() => n.name),
            d = (0, B.q3)(() => n.description),
            m = (0, B.q3)(() => n.sections),
            c = (0, B.q3)(() => n.override_type),
            v = (0, E.useMemo)(
              () =>
                !i && l && l.contenthub_section_groups
                  ? l.contenthub_section_groups.map((_) => ({
                      data: _.name,
                      label: _.name,
                    }))
                  : [],
              [l, i],
            ),
            h = [
              { data: "replace", label: "Replace" },
              { data: "before", label: "Add Before" },
              { data: "after", label: "Add After" },
            ];
          return !i && !l
            ? null
            : (0, e.jsxs)("div", {
                style: { width: "100%" },
                children: [
                  i
                    ? (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)(g.pd, {
                            label: "Name",
                            value: r,
                            onChange: (_) => {
                              (n.name = _.target.value), o();
                            },
                          }),
                          (0, e.jsx)(g.pd, {
                            label: "Description",
                            value: d,
                            onChange: (_) => {
                              (n.description = _.target.value), o();
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
                              (0, e.jsx)(g.JU, {
                                children: "section group inherited from parent",
                              }),
                              (0, e.jsx)(g.m, {
                                rgOptions: v,
                                selectedOption: r,
                                onChange: (_) => {
                                  (n.name = _.data), o();
                                },
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            style: { flexGrow: 1, marginLeft: "4px" },
                            children: [
                              (0, e.jsx)(g.JU, { children: "Override Type" }),
                              (0, e.jsx)(g.m, {
                                rgOptions: h,
                                selectedOption: c,
                                onChange: (_) => {
                                  (n.override_type = _.data), o();
                                },
                              }),
                              !c &&
                                (0, e.jsx)("div", {
                                  className: f().ErrorStylesWithIcon,
                                  children: "Must choose Override Type",
                                }),
                            ],
                          }),
                        ],
                      }),
                  (0, e.jsxs)("div", {
                    style: { marginLeft: "32px", marginRight: "32px" },
                    children: [
                      (0, e.jsx)(g.JU, {
                        children: "Locally Defined Sections To Display",
                      }),
                      (0, e.jsx)(Vt.A, {
                        items: m,
                        onDelete: (_) => {
                          (n.sections = [
                            ...n.sections.slice(0, _),
                            ...n.sections.slice(_ + 1),
                          ]),
                            o();
                        },
                        onReorder: () => {
                          o();
                        },
                        render: (_) =>
                          (0, e.jsx)(Ql, {
                            editModel: t,
                            sectionRef: _,
                            onChange: o,
                          }),
                      }),
                      (0, e.jsx)(g.$n, {
                        style: { maxWidth: "150px", margin: "0 auto" },
                        onClick: () => {
                          (n.sections = [...n.sections, { sectionid: 0 }]), o();
                        },
                        children: "Add Section",
                      }),
                    ],
                  }),
                ],
              });
        }
        function Ql(a) {
          const { editModel: t, sectionRef: n, onChange: i } = a,
            l = t.GetEventModel(),
            o = (0, B.q3)(() => l.GetSaleSections()),
            r = (0, ft.yD)(),
            d = o.map((c, v) => ({
              data: c.unique_id,
              label: (0, Ca.h_)(
                r.eLocation,
                c,
                (0, N.sfN)(D.TS.LANGUAGE),
                t.GetEventModel(),
                v,
              ),
            })),
            m = (0, B.q3)(() => n.sectionid);
          return (0, e.jsx)("div", {
            style: { width: "100%" },
            children: (0, e.jsx)(g.m, {
              rgOptions: d,
              selectedOption: m,
              onChange: (c) => {
                (n.sectionid = c.data), i();
              },
            }),
          });
        }
        var wa = p(76846),
          Yl = p(52695);
        function Jl(a) {
          const { model: t, fnOnDirty: n } = a,
            { openColorPicker: i } = (0, wa.p)(),
            [l, o] = (0, B.q3)(() => [
              t.sale_background_color,
              t.sale_background_repeat,
            ]);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().FlexRowContainer, _e().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: _e().OptionCtn,
                children: [
                  (0, e.jsx)(g.JU, {
                    children: (0, s.we)("#Sale_Section_Background_Color"),
                  }),
                  (0, e.jsxs)("div", {
                    className: _e().ButtonRow,
                    children: [
                      (0, e.jsx)(g.$n, {
                        className: _e().BackgroundColorBtn,
                        onClick: (r) => {
                          i(r, {
                            color: l,
                            onChange: (d) => {
                              (t.sale_background_color = d), n();
                            },
                          });
                        },
                        style: { backgroundColor: l },
                        children: (0, s.we)("#Sale_BackgroundColor"),
                      }),
                      (0, e.jsx)(g.$n, {
                        className: _e().BackgroundColorResetBtn,
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
                className: _e().OptionCtn,
                children: (0, e.jsx)(Yl.n, {
                  setting: o,
                  fnUpdateSetting: (r) => {
                    t.sale_background_repeat != r &&
                      ((t.sale_background_repeat = r), n());
                  },
                }),
              }),
            ],
          });
        }
        var ca = p(73593);
        function ql(a) {
          const { strArrowColor: t, fnUpdateArrowColor: n, arrowStyle: i } = a,
            { openColorPicker: l } = (0, wa.p)(),
            [o, r] = E.useState(t == null);
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(g.$n, {
              className: _e().BackgroundColorBtn,
              onClick: (d) => l(d, { color: t, onChange: n }),
              children: [
                (0, e.jsx)(ca.m, {
                  direction: "left",
                  arrowFill: t,
                  arrowStyle: i,
                }),
                (0, s.we)("#EventEditor_BG_Arrow_Color"),
                (0, e.jsx)(Q.o, {
                  tooltip: (0, s.we)("#EventEditor_BG_Arrow_Color_ttip"),
                }),
                (0, e.jsx)(ca.m, {
                  direction: "right",
                  arrowFill: t,
                  arrowStyle: i,
                }),
              ],
            }),
          });
        }
        function _i(a) {
          const { label: t, fnUpdateColor: n, strColorToChange: i } = a,
            { openColorPicker: l } = (0, wa.p)();
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(g.$n, {
              className: _e().BackgroundColorBtn,
              onClick: (o) => l(o, { color: i, onChange: n }),
              children: [
                t,
                (0, e.jsx)(Q.o, {
                  tooltip: (0, s.we)("#EventEditor_BG_Arrow_Color_ttip"),
                }),
                (0, e.jsx)(ca.U, { ...a, bIsActive: !1 }),
                (0, e.jsx)(ca.U, { ...a, bIsActive: !0 }),
                (0, e.jsx)(ca.U, { ...a, bIsActive: !1 }),
                (0, e.jsx)(ca.U, { ...a, bIsActive: !1 }),
              ],
            }),
          });
        }
        var xt = p(34452);
        function Kl(a) {
          return (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)(Zl, { ...a }), (0, e.jsx)(Xl, { ...a })],
          });
        }
        function Zl(a) {
          const { model: t, fnOnDirty: n } = a,
            [i, l] = (0, B.q3)(() => [
              t.sale_carousel_arrow_color,
              t.sale_carousel_arrow_style || xt.C.k_ECutArrowStyle,
            ]),
            o = (0, E.useMemo)(() => {
              const r = [];
              return (
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_CutArrowStyles"),
                  data: xt.C.k_ECutArrowStyle,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_DoubleArrowStyles"),
                  data: xt.C.k_EDoubleArrowStyle,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_ChevronStyles"),
                  data: xt.C.k_EThickChevron,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_FlatArrowStyles"),
                  data: xt.C.k_EFilledArrow,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_PointyArrowStyles"),
                  data: xt.C.k_EPointyArrow,
                }),
                r
              );
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().FlexRowContainer, _e().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: _e().OptionCtn,
                children: [
                  (0, e.jsx)(g.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_Colors"),
                  }),
                  (0, e.jsx)(ql, {
                    strArrowColor: i,
                    arrowStyle: l,
                    fnUpdateArrowColor: (r) => {
                      t.sale_carousel_arrow_color != r &&
                        ((t.sale_carousel_arrow_color = r), n());
                    },
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: _e().OptionCtn,
                children: [
                  (0, e.jsx)(g.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_ArrowStyles"),
                  }),
                  (0, e.jsx)(g.m, {
                    strDropDownClassName: f().DropDownScroll,
                    rgOptions: o,
                    selectedOption: l,
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
        function Xl(a) {
          const { model: t, fnOnDirty: n } = a,
            [i, l, o] = (0, B.q3)(() => [
              t.sale_carousel_breadcrumb_color,
              t.sale_carousel_active_breadcrumb_color,
              t.sale_carousel_breadcrumb_style || xt.m.k_EPillCrumb,
            ]),
            r = (0, E.useMemo)(() => {
              const d = [];
              return (
                d.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_PillStyles",
                  ),
                  data: xt.m.k_EPillCrumb,
                }),
                d.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_CircularStyles",
                  ),
                  data: xt.m.k_ECircularCrumb,
                }),
                d.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_SquareStyles",
                  ),
                  data: xt.m.k_ESquareCrumb,
                }),
                d
              );
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().FlexRowContainer, _e().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: _e().OptionCtn,
                children: [
                  (0, e.jsx)(g.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_BreadCrumb"),
                  }),
                  (0, e.jsx)(_i, {
                    label: (0, s.we)("#Sale_Section_Carousel_BreadCrumb_Color"),
                    strColorToChange: i,
                    breadcrumbColor: i,
                    breadcrumbActiveColor: l,
                    breadcrumbStyle: o,
                    fnUpdateColor: (d) => {
                      t.sale_carousel_breadcrumb_color != d &&
                        ((t.sale_carousel_breadcrumb_color = d), n());
                    },
                  }),
                  (0, e.jsx)(_i, {
                    label: (0, s.we)(
                      "#Sale_Section_Carousel_ActiveBreadCrumb_Color",
                    ),
                    strColorToChange: l,
                    breadcrumbColor: i,
                    breadcrumbActiveColor: l,
                    breadcrumbStyle: o,
                    fnUpdateColor: (d) => {
                      t.sale_carousel_active_breadcrumb_color != d &&
                        ((t.sale_carousel_active_breadcrumb_color = d), n());
                    },
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: _e().OptionCtn,
                children: [
                  (0, e.jsx)(g.JU, {
                    children: (0, s.we)(
                      "#Sale_Section_Carousel_BreadCrumbStyles",
                    ),
                  }),
                  (0, e.jsx)(g.m, {
                    strDropDownClassName: f().DropDownScroll,
                    rgOptions: r,
                    selectedOption: o,
                    onChange: (d) => {
                      t.sale_carousel_breadcrumb_style != d.data &&
                        ((t.sale_carousel_breadcrumb_style = d.data), n());
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                ],
              }),
            ],
          });
        }
        var $l = p(13854);
        function er(a) {
          const { editModel: t } = a,
            [n, i, l] = (0, B.q3)(() => {
              var o;
              return [
                t.GetEventModel().jsondata.sale_header_offset,
                ((o = t.GetEventModel().jsondata.localized_sale_logo) == null
                  ? void 0
                  : o.filter(Boolean).length) || 0,
                t.GetEventModel().jsondata.sale_header_disable_top_margin,
              ];
            });
          return (0, e.jsxs)(le.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, j.A)(
              f().PixelOffsetCtn,
              f().ValveOnlyBackground,
              f().SaleEditorSpacing,
            ),
            children: [
              (0, e.jsx)("div", {
                className: "DialogLabel",
                children: (0, s.we)("#Sale_HeaderOffset") + " (VO)",
              }),
              i > 0
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
                          f().FlexRowContainer,
                          f().PixelOffsetRow,
                        ),
                        children: [
                          (0, e.jsx)(g.pd, {
                            value: n,
                            onChange: (o) => {
                              var r;
                              (t.GetEventModel().jsondata.sale_header_offset =
                                Number(
                                  (r = o == null ? void 0 : o.target) == null
                                    ? void 0
                                    : r.value,
                                ) || 0),
                                t.SetDirty(C.IQ.jsondata_sales);
                            },
                          }),
                          (0, e.jsxs)("div", {
                            className: f().PixelOffsetNote,
                            children: [
                              (0, e.jsx)("div", {
                                className: f().PixelOffsetCallout,
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
              (0, e.jsx)(g.Yh, {
                checked: l,
                label: "Disable Sale Page Top Pixels",
                onChange: (o) => {
                  (t.GetEventModel().jsondata.sale_header_disable_top_margin =
                    o),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
            ],
          });
        }
        function tr(a) {
          const { editModel: t } = a,
            [n, i] = (0, B.q3)(() => [
              t.GetEventModel().jsondata.sale_background_color,
              t.GetEventModel().jsondata.sale_background_repeat,
            ]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Jl, {
                model: t.GetEventModel().jsondata,
                fnOnDirty: () => t.SetDirty(C.IQ.jsondata_sales),
              }),
              (0, e.jsx)(Kl, {
                model: t.GetEventModel().jsondata,
                fnOnDirty: () => t.SetDirty(C.IQ.jsondata_sales),
              }),
              (0, e.jsx)(er, { editModel: t }),
              (0, e.jsx)(nr, { editModel: t }),
              (0, e.jsx)(ar, { editModel: t }),
            ],
          });
        }
        function ar(a) {
          const { editModel: t } = a,
            n = E.createRef(),
            [i, l, o, r] = (0, B.q3)(() => [
              $l.OQ(t.GetNumberOfDays(), 5, 14),
              t.GetNumSalesBackgroundHeader(),
              t.GetEventStartTime(),
              t.GetNumberOfDays(),
            ]),
            d = E.useCallback(() => {
              const h = [
                { label: (0, s.we)("#Sale_HeaderArtwork_Single"), data: 1 },
              ];
              if (i > 1)
                for (let _ = 2; _ <= i; _++)
                  h.push({
                    label: (0, s.we)("#Sale_HeaderArtwork_Multi_Amount", _),
                    data: _,
                  });
              return h;
            }, [i]),
            m = E.useCallback(
              (h) => {
                const _ = h.data;
                l !== _ &&
                  (0, W.pg)(
                    (0, e.jsx)(V.o0, {
                      strTitle: (0, s.we)("#Button_Confirm"),
                      strDescription: (0, s.we)("#Sale_HeaderArtwork_Warning"),
                      onOK: () => t.SetNumSalesBackgroundHeader(_),
                      onCancel: () => {
                        var u;
                        return (u = n == null ? void 0 : n.current) == null
                          ? void 0
                          : u.SetSelectedOption(l);
                      },
                    }),
                    window,
                  );
              },
              [t, l, n],
            ),
            c = E.useCallback(() => {
              const h = [];
              for (let _ = 0; _ < l; _++) {
                let x = o + 86400 * _;
                const S = {
                  label: (0, s.PP)(
                    _ + 1 == l
                      ? "#Sale_HeaderArtwork_DayTimeOnward"
                      : "#Sale_HeaderArtwork_DayTime",
                    _ + 1,
                    (0, e.jsx)(st.K4, { dateAndTime: x, bSingleLine: !0 }),
                    (0, e.jsx)(st.K4, {
                      dateAndTime: x + 86400,
                      bSingleLine: !0,
                    }),
                  ),
                  data: _,
                };
                h.push(S);
              }
              return h;
            }, [l, o]),
            v = (h) => {
              t.GetEventModel().m_overrideCurrentDay = h.data;
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(g.m, {
                dropDownControlRef: n,
                strDropDownClassName: f().DropDownScroll,
                label: (0, s.we)("#Sale_HeaderArtwork_Multi"),
                tooltip: (0, s.we)("#Sale_HeaderArtwork_Multi_hint"),
                rgOptions: d(),
                selectedOption: l,
                onChange: m,
                bDisableMouseOverlay: !0,
                disabled: r <= 1,
                contextMenuPositionOptions: {
                  bDisableMouseOverlay: !0,
                  bDisablePopTop: !0,
                },
                strClassName: _e().SaleDaySelection,
              }),
              l > 1 &&
                (0, e.jsx)(g.m, {
                  strDropDownClassName: f().DropDownScroll,
                  label: (0, s.we)("#Sale_HeaderArtwork_EditDay"),
                  tooltip: (0, s.we)("#Sale_HeaderArtwork_EditDay_hint"),
                  rgOptions: c(),
                  selectedOption: t.GetEventModel().GetDayIndexFromEventStart(),
                  onChange: v,
                  bDisableMouseOverlay: !0,
                  contextMenuPositionOptions: {
                    bDisableMouseOverlay: !0,
                    bDisablePopTop: !0,
                  },
                  strClassName: _e().SaleDaySelection,
                }),
            ],
          });
        }
        function nr(a) {
          const { editModel: t } = a,
            [n, i] = (0, B.q3)(() => [
              t.GetEventModel().jsondata.sale_background_video_webm,
              t.GetEventModel().jsondata.sale_background_video_mp4,
            ]);
          return (0, e.jsxs)(le.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, j.A)(f().ValveOnlyBackground, f().SaleEditorSpacing),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Sale_BackgroundVideo_Title"),
              }),
              (0, s.we)("#Sale_BackgroundVideo_Instructions"),
              (0, e.jsx)(g.pd, {
                label: (0, s.we)("#Sale_BackgroundVideo_WebM"),
                onChange: (l) => {
                  var o;
                  (t.GetEventModel().jsondata.sale_background_video_webm =
                    ((o = l == null ? void 0 : l.target) == null
                      ? void 0
                      : o.value) || ""),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
                value: n,
              }),
              (0, e.jsx)(g.pd, {
                label: (0, s.we)("#Sale_BackgroundVideo_MP4"),
                onChange: (l) => {
                  var o;
                  (t.GetEventModel().jsondata.sale_background_video_mp4 =
                    ((o = l == null ? void 0 : l.target) == null
                      ? void 0
                      : o.value) || ""),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
                value: i,
              }),
            ],
          });
        }
        var Wt = p(56330),
          sr = p(52500),
          fe = p(10206),
          ir = p(2259),
          or = p(26917),
          lr = Object.defineProperty,
          rr = (a, t, n) =>
            t in a
              ? lr(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          dr = (a, t, n) => rr(a, typeof t != "symbol" ? t + "" : t, n);
        class cr {
          constructor() {
            dr(this, "m_mapVisibleSections", new Map()),
              (0, Y.Gn)(this, { m_mapVisibleSections: Y.sH });
          }
        }
        const vi = (0, E.createContext)(null);
        function ur(a) {
          const [t] = (0, E.useState)(() => new cr());
          return (0, e.jsx)(vi.Provider, { value: t, children: a.children });
        }
        function gi() {
          const a = (0, E.useContext)(vi);
          if (!a)
            throw new Error(
              "useVisibleSectionStore must be used within a VisibleSectionStoreProvider",
            );
          return a;
        }
        function Qt(a) {
          const { strSectionId: t, children: n } = a,
            i = gi(),
            l = (0, ir.OO)(
              {
                onEnter: () => i.m_mapVisibleSections.set(t, t),
                onLeave: () => i.m_mapVisibleSections.delete(t),
              },
              { rootMargin: "-100px 0px -100px 0px" },
            );
          return (0, e.jsx)(
            ve.tH,
            {
              children: (0, e.jsx)(
                "div",
                { className: or.Waypoint, ref: l, children: n },
                "waypoint_sale_sect_" + t,
              ),
            },
            "eb_sale_sect_" + t,
          );
        }
        const hr = (0, R.PA)((a) => {
          var t, n, i, l;
          const { editModel: o } = a,
            [r, d] = (0, B.q3)(() => [o.GetAppID(), o.GetEventType()]),
            m = !!(
              o.BHasSomeImage("product_banner") &&
              o.GetEventModel().BHasTag("hide_store")
            ),
            c = !!(
              o.BHasSomeImage("product_mobile_banner") &&
              o.GetEventModel().BHasTag("hide_store")
            ),
            v = d == N.ajI,
            h = (0, le.Dd)(o.GetClanSteamID(), !0),
            _ = (H, te = !1) => (0, et.Nx)(H, te),
            u = (H, te = !1) => (0, et.mi)(H, te),
            x =
              ((t = o.GetEventModel().jsondata.localized_sale_product_banner) ==
              null
                ? void 0
                : t.length) || 0,
            b =
              ((n =
                o.GetEventModel().jsondata
                  .localized_sale_product_mobile_banner) == null
                ? void 0
                : n.length) || 0,
            S =
              ((i = o.GetEventModel().jsondata.localized_sale_logo) == null
                ? void 0
                : i.length) || 0,
            y =
              ((l = o.GetEventModel().jsondata.localized_sale_overlay) == null
                ? void 0
                : l.length) || 0,
            L = (0, sr.b)(o.GetEventModel().jsondata.sale_logo_url),
            G = [];
          return (
            v
              ? G.push("sale_header")
              : (G.push(
                  "sale_header",
                  "product_banner",
                  "product_mobile_banner",
                  "sale_logo",
                ),
                h && G.push("sale_overlay")),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(An.t, {
                  clanSteamID: o.GetClanSteamID(),
                  rgSupportArtwork: G,
                  fnSetImageURL: o.SetImageURL,
                  bAllowPreviousClanImageSelection: !0,
                  rgRealmList: o.GetIncludedRealmList(),
                }),
                (0, e.jsx)(Qt, {
                  strSectionId: "SalePageEdit_SaleBgImg",
                  children: (0, e.jsx)(Le.it, {
                    id: "SalePageEdit_SaleBgImg",
                    appid: r,
                    eventModel: o.GetEventModel(),
                    clanSteamID: o.GetClanSteamID(),
                    title: (0, s.we)("#EventEditor_ArtworkType_sale_header"),
                    artworkType: "sale_header",
                    elEventArtworkExample: (0, e.jsx)(Ka, {
                      artworkType: "sale_header",
                    }),
                    bIsMinimized: _("sale_header"),
                    fnLangHasData: (H) => o.BHasImage("sale_header", H),
                    fnSetImageURL: o.SetImageURL,
                    fnGetImageHashAndExt: o.GetImageHashAndExt,
                    fnToggleMinimize: () => u("sale_header"),
                    partnerEventStore: P.mh,
                    elAdditionalControls: (0, e.jsx)(tr, { editModel: o }),
                  }),
                }),
                !v &&
                  (0, e.jsx)(Qt, {
                    strSectionId: "SalePageEdit_SaleLogo",
                    children: (0, e.jsxs)("div", {
                      className: fe.SalePageLogoCtn,
                      children: [
                        (0, e.jsx)(Le.it, {
                          id: "SalePageEdit_SaleLogo",
                          clanSteamID: o.GetClanSteamID(),
                          eventModel: o.GetEventModel(),
                          appid: r,
                          title: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo",
                          ),
                          artworkType: "sale_logo",
                          elEventArtworkExample: (0, e.jsx)(Ka, {
                            artworkType: "sale_logo",
                          }),
                          bIsMinimized: _("sale_logo"),
                          fnLangHasData: (H) => o.BHasImage("sale_logo", H),
                          fnSetImageURL: o.SetImageURL,
                          fnGetImageHashAndExt: o.GetImageHashAndExt,
                          fnToggleMinimize: () => u("sale_logo"),
                          partnerEventStore: P.mh,
                          fnRemoveAllArtwork:
                            S == 0
                              ? void 0
                              : () => {
                                  (0, Y.h5)(() => {
                                    (o.GetEventModel().jsondata.localized_sale_logo =
                                      []),
                                      o.SetDirty(C.IQ.jsondata_sales);
                                  });
                                },
                        }),
                        (0, e.jsx)(g.pd, {
                          label: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo_url",
                          ),
                          value: o.GetEventModel().jsondata.sale_logo_url,
                          tooltip: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo_url_tooltip",
                          ),
                          description: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo_url_example",
                          ),
                          onChange: (H) => {
                            (0, Y.h5)(() => {
                              (o.GetEventModel().jsondata.sale_logo_url =
                                H.target.value),
                                o.SetDirty(C.IQ.jsondata_sales);
                            });
                          },
                        }),
                        L &&
                          (0, e.jsx)("div", {
                            className: Wt.ErrorStylesWithIcon,
                            children: L,
                          }),
                      ],
                    }),
                  }),
                !v &&
                  (0, e.jsx)(Qt, {
                    strSectionId: "SalePageEdit_SaleBanner",
                    children: (0, e.jsx)(Le.it, {
                      id: "SalePageEdit_SaleBanner",
                      clanSteamID: o.GetClanSteamID(),
                      eventModel: o.GetEventModel(),
                      appid: r,
                      fnLangHasData: (H) => o.BHasImage("product_banner", H),
                      fnSetImageURL: o.SetImageURL,
                      fnGetImageHashAndExt: o.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_sale_product_banner",
                      ),
                      artworkType: "product_banner",
                      bIsMinimized: _("product_banner"),
                      fnToggleMinimize: () => u("product_banner"),
                      strWarning: m
                        ? (0, s.we)("#Sale_BannerVisibility_Warning")
                        : void 0,
                      elEventArtworkExample: (0, e.jsx)(Ka, {
                        artworkType: "product_banner",
                      }),
                      partnerEventStore: P.mh,
                      fnRemoveAllArtwork:
                        x == 0
                          ? void 0
                          : () => {
                              (0, Y.h5)(() => {
                                (o.GetEventModel().jsondata.localized_sale_product_banner =
                                  []),
                                  o.SetDirty(C.IQ.jsondata_sales);
                              });
                            },
                    }),
                  }),
                !v &&
                  (0, e.jsx)(Qt, {
                    strSectionId: "SalePageEdit_SaleMobileBanner",
                    children: (0, e.jsx)(Le.it, {
                      id: "SalePageEdit_SaleMobileBanner",
                      clanSteamID: o.GetClanSteamID(),
                      eventModel: o.GetEventModel(),
                      appid: r,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_sale_product_mobile_banner",
                      ),
                      artworkType: "product_mobile_banner",
                      bIsMinimized: _("product_mobile_banner"),
                      fnToggleMinimize: () => u("product_mobile_banner"),
                      fnLangHasData: (H) =>
                        o.BHasImage("product_mobile_banner", H),
                      fnSetImageURL: o.SetImageURL,
                      fnGetImageHashAndExt: o.GetImageHashAndExt,
                      partnerEventStore: P.mh,
                      strWarning: c
                        ? (0, s.we)("#Sale_BannerVisibility_Warning")
                        : void 0,
                      fnRemoveAllArtwork:
                        b == 0
                          ? void 0
                          : () => {
                              (0, Y.h5)(() => {
                                (o.GetEventModel().jsondata.localized_sale_product_mobile_banner =
                                  []),
                                  o.SetDirty(C.IQ.jsondata_sales);
                              });
                            },
                    }),
                  }),
                !v &&
                  (0, e.jsx)(Qt, {
                    strSectionId: "SalePageEdit_SaleOverlay",
                    children: (0, e.jsx)(le.Eb, {
                      clanSteamID: o.GetClanSteamID(),
                      requireAdmin: !0,
                      className: fe.SalePageLogoCtn,
                      children: (0, e.jsx)(Le.it, {
                        id: "SalePageEdit_SaleOverlay",
                        clanSteamID: o.GetClanSteamID(),
                        eventModel: o.GetEventModel(),
                        appid: r,
                        title: (0, s.we)(
                          "#EventEditor_ArtworkType_sale_overlay",
                        ),
                        artworkType: "sale_overlay",
                        elEventArtworkExample: (0, e.jsx)(Ka, {
                          artworkType: "sale_overlay",
                        }),
                        bIsMinimized: _("sale_overlay"),
                        fnToggleMinimize: () => u("sale_overlay"),
                        fnLangHasData: (H) => o.BHasImage("sale_overlay", H),
                        fnSetImageURL: o.SetImageURL,
                        fnGetImageHashAndExt: o.GetImageHashAndExt,
                        partnerEventStore: P.mh,
                        fnRemoveAllArtwork:
                          y == 0
                            ? void 0
                            : () => {
                                (0, Y.h5)(() => {
                                  (o.GetEventModel().jsondata.localized_sale_overlay =
                                    []),
                                    o.SetDirty(C.IQ.jsondata_sales);
                                });
                              },
                      }),
                    }),
                  }),
              ],
            })
          );
        });
        var Za = p(50109),
          xe = p(8681),
          ct = p(73191),
          ot = p(11833),
          ya = p(88942),
          vt = p(98609);
        async function pr(a) {
          var t, n;
          const i = { accountid: a, origin: self.origin };
          let l = `${vt.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
          (0, D.yK)() == "partner" &&
            (l = `${vt.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
          const o = await pe().get(l, { params: i, withCredentials: !0 });
          if (
            !o ||
            o.status != 200 ||
            ((t = o.data) == null ? void 0 : t.success) != Ue.R ||
            !((n = o.data) != null && n.partners)
          )
            throw `Load single user partner info failed ${((0, ye.H))(o).strErrorMsg}`;
          return o.data.partners;
        }
        function Si(a) {
          const { data: t, isLoading: n } = (0, ya.I)({
            queryKey: ["PartnerInfoList", a],
            queryFn: () => pr(a),
          });
          return n ? null : t;
        }
        function Am(a, t) {
          const n = Si(a);
          return n == null ? void 0 : n.find((i) => i.partnerid === t);
        }
        function Ei(a) {
          const {
              accountID: t,
              partnerID: n,
              fnSetPartnerID: i,
              strLabel: l,
              strTooltip: o,
            } = a,
            r = Si(t),
            d = (0, E.useMemo)(
              () =>
                (r == null ? void 0 : r.length) > 0
                  ? r.map((m) => ({ label: m.partner_name, data: m.partnerid }))
                  : null,
              [r],
            );
          return d == null
            ? null
            : (0, e.jsx)(g.m, {
                label: l,
                tooltip: o,
                rgOptions: d,
                selectedOption: n,
                onChange: (m) => i(m.data),
              });
        }
        function fi(a) {
          const { strExternalSaleEventType: t, fnSetExternalSaleEventType: n } =
              a,
            i = [
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
              (0, e.jsx)(g.m, {
                rgOptions: i,
                strDropDownClassName: J.DropDownScroll,
                strDropDownMenuCtnClass: J.DropDownScroll,
                strDropDownItemClassName: J.DropDownScrollItem,
                selectedOption: t,
                onChange: (l) => n(l.data),
                contextMenuPositionOptions: { bDisablePopTop: !0 },
              }),
            ],
          });
        }
        function xi(a) {
          const { clanSteamID: t, gidClanEvent: n } = a,
            { bLoading: i } = (0, xe.g7)(t.GetAccountID(), n);
          return i
            ? (0, e.jsx)(Z.t, { string: (0, s.we)("#Loading") })
            : (0, e.jsx)(mr, { ...a });
        }
        function mr(a) {
          const { clanSteamID: t, gidClanEvent: n, fnOkCallbackList: i } = a,
            {
              bPublishRequiresValveApproval: l,
              fnSetStorePublishingRequiresValveApproval: o,
              bRequiresHostDisclaimer: r,
              fnSetStoreRequireHostDisclaimer: d,
              bHasSettingForRequiresValveApproval: m,
              strExternalSaleEventType: c,
              fnSetExternalSaleEventType: v,
            } = (0, xe.g7)(t.GetAccountID(), n),
            [h, _] = (0, E.useState)(m ? l : !0),
            [u, x] = (0, E.useState)(r);
          return (
            (0, X.hL)(i, () => {
              o(h), d(u);
            }),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(g.Yh, {
                  checked: i ? h : m ? l : !0,
                  onChange: (b) => {
                    _(b), i || o(b);
                  },
                  label:
                    "Require Approval by Valve Admin in order to publish this sales events",
                  tooltip:
                    "They will see a warning indicating they cannot publish until Valve approves the page. Approval is done by Valve Admin in the same place.",
                }),
                (0, e.jsx)(g.Yh, {
                  checked: i ? u : r,
                  onChange: (b) => {
                    x(b), i || d(b);
                  },
                  label: (0, s.we)("#SalePresented_By_Admin"),
                  tooltip: (0, s.we)("#SalePresneted_By_Admin_ttip"),
                }),
                (0, e.jsx)(fi, {
                  strExternalSaleEventType: c,
                  fnSetExternalSaleEventType: v,
                }),
              ],
            })
          );
        }
        function bi(a) {
          var t, n;
          const {
              clanSteamID: i,
              gidClanEvent: l,
              rgSalePresenters: o,
              fnCleanSaleEventPresenters: r,
              bPublishTab: d,
              bIsEventVisible: m,
            } = a,
            {
              bLoading: c,
              bPublishRequiresValveApproval: v,
              nAccountApproved: h,
              bRequiresHostDisclaimer: _,
              fnSetStoreRequireHostDisclaimer: u,
            } = (0, xe.g7)(i.GetAccountID(), l),
            { oPrivateData: x } = (0, xe.fj)(i.GetAccountID(), l),
            b = ji(i, l);
          if (m)
            return (
              b &&
              (0, e.jsx)("div", {
                className: (0, j.A)(
                  ot.ApprovalRequiredCtn,
                  ot.PublishWithRestrictions,
                ),
                children: (0, e.jsx)("div", {
                  className: ot.Left,
                  children: (0, e.jsx)(Ci, { clanSteamID: i, gidClanEvent: l }),
                }),
              })
            );
          if (!c && v && !h) {
            const S = (G) => {
                (0, W.pg)(
                  (0, e.jsx)(Sr, { clanSteamID: i, gidClanEvent: l }),
                  (0, F.uX)(G),
                );
              },
              y = (G) => {
                (0, W.pg)(
                  (0, e.jsx)(vr, { clanSteamID: i, gidClanEvent: l }),
                  (0, F.uX)(G),
                );
              },
              L =
                (t = x == null ? void 0 : x.jsonData) == null
                  ? void 0
                  : t.strSalePageApprovalHelpTicketReferenceCode;
            return (0, e.jsxs)("div", {
              className: (0, j.A)(
                ot.ApprovalRequiredCtn,
                L ? ot.PendingApproval : "",
              ),
              children: [
                (0, e.jsx)("div", {
                  className: ot.Left,
                  children: L
                    ? (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: ot.Title,
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
                            className: ot.Title,
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
                  className: ot.Right,
                  children: [
                    L
                      ? (0, e.jsx)(O.uU, {
                          href: `${D.TS.HELP_BASE_URL}en/wizard/HelpRequest/${((n = x == null ? void 0 : x.jsonData)) == null ? void 0 : n.strSalePageApprovalHelpTicketReferenceCode}`,
                          className: (0, j.A)(J.EditPreviewButton, J.Button),
                          bForceExternal: !0,
                          children: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Link",
                          ),
                        })
                      : (0, e.jsx)(Ee.he, {
                          toolTipContent: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Approval_ttip",
                          ),
                          children: (0, e.jsx)(g.jn, {
                            onClick: S,
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Request_Button",
                            ),
                          }),
                        }),
                    (0, e.jsxs)(le.Eb, {
                      clanSteamID: i,
                      children: [
                        (0, e.jsxs)(g.$n, {
                          onClick: y,
                          children: [
                            "Approve... ",
                            (0, e.jsx)(Q.o, {
                              tooltip: (0, s.we)(
                                "#EventEditor_SaleValveApproval_Admin_Tooltip",
                              ),
                            }),
                          ],
                        }),
                        (o == null ? void 0 : o.length) > 0 &&
                          (0, e.jsx)(g.$n, {
                            onClick: r,
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
          } else if (!c && v && h)
            return (0, e.jsx)("div", {
              className: (0, j.A)(ot.ApprovalRequiredCtn, ot.Approved),
              children: (0, e.jsxs)("div", {
                className: ot.Left,
                children: [
                  (0, e.jsxs)("div", {
                    className: ot.Title,
                    children: [
                      "\u2713 ",
                      (0, s.we)(
                        "#EventEditor_SaleValveApproval_Approved_Title",
                      ),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    children: (0, s.we)(
                      d
                        ? "#EventEditor_SaleValveApproval_Approved_Desc_OnPublish"
                        : "#EventEditor_SaleValveApproval_Approved_Desc",
                    ),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(Ci, { clanSteamID: i, gidClanEvent: l }),
                ],
              }),
            });
          return null;
        }
        function ji(a, t) {
          const {
            bLoading: n,
            bAllowAddingAppsPackagesBundles: i,
            bAllowChangingVanityURL: l,
            bAllowMakingChangesToSalePage: o,
          } = (0, xe.fp)(a.GetAccountID(), t);
          return !n && (!i || !l || !o);
        }
        function Ci(a) {
          const { clanSteamID: t, gidClanEvent: n } = a,
            i = ji(t, n),
            {
              bAllowAddingAppsPackagesBundles: l,
              bAllowChangingVanityURL: o,
              bAllowMakingChangesToSalePage: r,
            } = (0, xe.fp)(t.GetAccountID(), n);
          return i
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("div", {
                    children: (0, s.we)("#EventEditor_SaleEditor_Restriction"),
                  }),
                  (0, e.jsxs)("ul", {
                    children: [
                      !o &&
                        (0, e.jsxs)("li", {
                          children: [
                            (0, s.we)("#EventEditor_SaleEditor_Block_URL"),
                            " ",
                            (0, e.jsx)(Q.o, {
                              tooltip: (0, s.we)(
                                "#EventEditor_SaleEditor_Block_URL_ttip",
                              ),
                            }),
                          ],
                        }),
                      !l &&
                        (0, e.jsxs)("li", {
                          children: [
                            (0, s.we)("#EventEditor_SaleEditor_Block_App"),
                            " ",
                            (0, e.jsx)(Q.o, {
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
        function wi(a) {
          const { clanSteamID: t, gidClanEvent: n, bShowThrobber: i } = a,
            {
              bLoading: l,
              bAllowChangingVanityURL: o,
              bAllowAddingAppsPackagesBundles: r,
              bAllowMakingChangesToSalePage: d,
              fnSetAllowAddingAppsPackagesBundles: m,
              fnSetAllowChangingVanityURL: c,
              fnSetAllowMakingChangesToSalePage: v,
            } = (0, xe.fp)(t.GetAccountID(), n);
          return i && l
            ? (0, e.jsx)(Z.t, {
                string: (0, s.we)("#Loading"),
                size: "medium",
                position: "center",
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h3", { children: "Post Approval Controls" }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(g.Yh, {
                    checked: o,
                    onChange: c,
                    label: "Allow Updating Vanity URL After Approval",
                    tooltip:
                      "Unset when we plan to feature with a direct link to the landing page",
                  }),
                  (0, e.jsx)(g.Yh, {
                    checked: r,
                    onChange: m,
                    label: "Allow Adding Apps/Packages/Bundles after Approval",
                    tooltip:
                      "Use when we agreed to a specific app/package/bundle list for them to use.",
                  }),
                  (0, e.jsx)(g.Yh, {
                    checked: d,
                    onChange: v,
                    label:
                      "Allow Updating layout/artwork/ordering/carousels After Approval",
                    tooltip:
                      "Use when we don't have full trust that they won't change the art or featuring in a way that breaks what we reviewed and agreed upon",
                  }),
                ],
              });
        }
        function _r(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: i } = a,
            l = "Update Post Review Editability",
            [o, r, d] = (0, xe.hr)(),
            m = (0, ct.vs)();
          return m.bLoading
            ? (0, e.jsx)(ct.Hh, { state: m, strDialogTitle: l, closeModal: i })
            : (0, e.jsx)(V.o0, {
                strTitle: l,
                onOK: () => {
                  m.fnSetLoading(!0),
                    d(n)
                      .then((c) => {
                        c == Ue.R
                          ? i()
                          : (r(),
                            m.fnSetError(!0),
                            m.fnSetStrError(
                              "Failed to update Private Data: " + c,
                            ));
                      })
                      .catch((c) => {
                        r(),
                          m.fnSetError(!0),
                          m.fnSetStrError((0, ye.H)(c).strErrorMsg);
                      });
                },
                strOKButtonText: "Update",
                bDisableBackgroundDismiss: !0,
                closeModal: i,
                onCancel: r,
                bOKDisabled: !!m.bError,
                children: (0, e.jsx)(wi, {
                  clanSteamID: t,
                  gidClanEvent: n,
                  bShowThrobber: !0,
                }),
              });
        }
        function vr(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: i } = a,
            { fnSetAccountApproved: l } = (0, xe.g7)(t.GetAccountID(), n),
            [o, r, d] = (0, xe.hr)(),
            m = "APPROVE SALE PAGE?",
            c = (0, ct.vs)();
          if (c.bLoading)
            return (0, e.jsx)(ct.Hh, {
              state: c,
              strDialogTitle: m,
              closeModal: i,
            });
          const v = () => {
            c.fnSetLoading(!0),
              l(D.iA.accountid),
              d(n)
                .then((h) => {
                  h == Ue.R
                    ? i()
                    : (r(),
                      c.fnSetError(!0),
                      c.fnSetStrError("Failed to update Private Data: " + h));
                })
                .catch((h) => {
                  r(),
                    c.fnSetError(!0),
                    c.fnSetStrError((0, ye.H)(h).strErrorMsg);
                });
          };
          return (0, e.jsx)(V.o0, {
            strTitle: m,
            strDescription:
              "This will remove the publishing block and allow the partner to publish anytime afterward. As a reminder, these are the things we should check before approving:",
            onOK: v,
            strOKButtonText: "Yes, Approve",
            bDisableBackgroundDismiss: !0,
            closeModal: i,
            onCancel: r,
            bOKDisabled: !!c.bError,
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
                (0, e.jsx)(wi, { clanSteamID: t, gidClanEvent: n }),
              ],
            }),
          });
        }
        async function gr(a, t, n, i) {
          const l =
              D.TS.COMMUNITY_BASE_URL +
              "partnereventdata/ajaxrequestsalepagereview",
            o = new URLSearchParams();
          o.append("sessionid", (0, D.KC)()),
            o.append("clanAccountID", "" + a.GetAccountID()),
            o.append("gidClanEvent", t),
            o.append("partnerID", "" + i),
            o.append("message", n);
          try {
            let r = await pe().post(l, o, { withCredentials: !0 });
            return !r || r.status != 200 || r.data.success != Ue.R
              ? (console.error(
                  "CreateReviewRequestTicket failed.",
                  r && (0, ye.H)(r),
                ),
                r.data.success == Ue.Ze ? r.data : null)
              : r.data;
          } catch (r) {
            const d = (0, ye.H)(r);
            console.error(
              "CreateReviewRequestTicket failed: " + d.strErrorMsg,
              d,
            );
          }
          return null;
        }
        function Sr(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: i } = a,
            {
              bLoading: l,
              oPrivateData: o,
              fnSetPrivateJsonNoDirty: r,
            } = (0, xe.fj)(t.GetAccountID(), n),
            [d, m] = (0, E.useState)(""),
            [c, v] = (0, E.useState)(null),
            h = (0, ct.vs)();
          return h.bLoading
            ? (0, e.jsx)(ct.Hh, {
                state: h,
                strDialogTitle: (0, s.we)(
                  "#EventEditor_SaleValveApproval_Request_Approval",
                ),
                closeModal: i,
              })
            : (0, e.jsxs)(V.o0, {
                strTitle: (0, s.we)(
                  "#EventEditor_SaleValveApproval_Request_Approval",
                ),
                strDescription: (0, s.we)(
                  "#EventEditor_SaleValveApproval_Request_Desc",
                ),
                bDisableBackgroundDismiss: !0,
                bOKDisabled: l,
                onCancel: i,
                onOK: async () => {
                  h.fnSetLoading(!0),
                    gr(t, n, d, c)
                      .then((_) => {
                        _ && _.success == Ue.R
                          ? (r({
                              ...o,
                              strSalePageApprovalHelpTicketReferenceCode:
                                _.reference_code,
                            }),
                            h.fnSetSuccess(!0),
                            h.fnSetElSuccess(
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#EventEditor_SaleValveApproval_Request_Success",
                                    ),
                                  }),
                                  (0, e.jsx)(O.uU, {
                                    href: _.help_url,
                                    bForceExternal: !0,
                                    children: (0, s.we)(
                                      "#EventEditor_SaleValveApproval_Request_Link",
                                    ),
                                  }),
                                ],
                              }),
                            ))
                          : _.success == Ue.Ze
                            ? (h.fnSetError(!0),
                              h.fnSetStrError(
                                (0, s.we)(
                                  "#EventEditor_SaleValveApproval_Request_DuplicateError",
                                ),
                              ))
                            : (h.fnSetError(!0),
                              h.fnSetStrError(
                                (0, s.we)(
                                  "#EventEditor_SaleValveApproval_Request_Error",
                                ),
                              ));
                      })
                      .catch((_) => {
                        h.fnSetError(!0),
                          h.fnSetStrError(
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
                  (0, e.jsx)(g.pd, {
                    type: "text",
                    label: (0, s.we)(
                      "#EventEditor_SaleValveApproval_Request_InputText",
                    ),
                    onChange: (_) => m(_.currentTarget.value || ""),
                    value: d,
                  }),
                  (0, e.jsx)(Ei, {
                    accountID: D.iA.accountid,
                    partnerID: c,
                    fnSetPartnerID: v,
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
        var Er = p(74535),
          bt = p(36118),
          De = p(22230);
        function fr(a) {
          const t = P.mh.GetEditModel(),
            {
              bLoading: n,
              nAcceptingGuidelineAccount: i,
              bRequiresHostDisclaimer: l,
            } = (0, xe.lA)(t.GetClanAccountID(), t.GetGID()),
            [o, r] = (0, B.q3)(() => [
              t.BHasSaleEnabled(),
              t.GetEventModel().jsondata.sale_presenters,
            ]),
            d = (0, le.Dd)(t.GetClanSteamID(), !0);
          if (!o) return (0, e.jsx)(e.Fragment, {});
          const m = !!i;
          return d ||
            (m && (!l || (r == null ? void 0 : r.length) >= 1)) ||
            t.GetEventType() == N.ajI
            ? (0, e.jsx)(e.Fragment, { children: a.children })
            : n
              ? (0, e.jsx)(Z.t, {})
              : m
                ? (0, e.jsxs)("div", {
                    className: De.GuidelinesNoticeCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: De.Intro,
                        children: [
                          (0, e.jsx)("div", {
                            className: De.State,
                            children: (0, e.jsx)(bt.Jlk, {}),
                          }),
                          (0, e.jsx)("div", {
                            className: De.Description,
                            children: (0, s.we)(
                              "#EventDisclaimer_GuidelineAccepted",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: De.Intro,
                        children: [
                          (0, e.jsx)("div", {
                            className: De.State,
                            children: "\xA0",
                          }),
                          (0, e.jsxs)("div", {
                            className: De.Description,
                            children: [
                              (0, s.we)("#EventDisclaimer_desc"),
                              (0, e.jsx)("div", {
                                className: De.OpenGuidelinesBtnCtn,
                                children: (0, e.jsx)(g.jn, {
                                  onClick: (c) =>
                                    (0, W.pg)((0, e.jsx)(Bn, {}), (0, F.uX)(c)),
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
                    className: De.GuidelinesNoticeCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: De.Intro,
                        children: [" ", (0, s.we)("#EventSaleGuidelines_desc")],
                      }),
                      (0, e.jsx)("div", {
                        className: De.OpenGuidelinesBtnCtn,
                        children: (0, e.jsx)(g.jn, {
                          onClick: (c) =>
                            (0, W.pg)(
                              (0, e.jsx)(Ti, { bCheckListReadOnly: !1 }),
                              (0, F.uX)(c),
                            ),
                          children: (0, s.we)("#EventSaleGuidelines_Review"),
                        }),
                      }),
                    ],
                  });
        }
        function xr(a) {
          const t = P.mh.GetEditModel(),
            { bLoading: n, nAcceptingGuidelineAccount: i } = (0, xe.lA)(
              t.GetClanAccountID(),
              t.GetGID(),
            ),
            l = (0, le.Dd)(t.GetClanSteamID(), !0),
            { bVisible: o } = (0, oe._5)(t.GetEventModel(), l),
            { bVisible: r } = (0, oe.Ao)(t.GetEventModel());
          return n || o || r
            ? null
            : l
              ? (0, e.jsx)(Cr, {})
              : i
                ? (0, e.jsx)(yi, {})
                : null;
        }
        function yi() {
          const a = P.mh.GetEditModel(),
            {
              rtAcceptanceTime: t,
              strSalePageApprovalHelpTicketReferenceCode: n,
            } = (0, xe.lA)(a.GetClanAccountID(), a.GetGID()),
            i = (0, B.q3)(() => {
              var l;
              const o = a.GetEventModel().jsondata.sale_presenters;
              return (
                (o == null ? void 0 : o.length) > 0 &&
                ((l = o[0].localized_presenter_name) == null
                  ? void 0
                  : l.length) > 0 &&
                o[0].localized_presenter_name[0].length > 0
              );
            });
          return (0, e.jsxs)("div", {
            className: De.GuidelinesDoneCtn,
            children: [
              (0, e.jsxs)("div", {
                className: De.Text,
                children: [
                  (0, s.PP)(
                    "#EventSaleGuidelines_AlreadyReviewed",
                    (0, e.jsx)(st.K4, { dateAndTime: t, bSingleLine: !0 }),
                  ),
                  !i &&
                    (0, e.jsxs)("div", {
                      className: De.OrganizerInfoNeeded,
                      children: [
                        (0, s.we)("#SalePresented_By_Instructions"),
                        " \u{1F846}",
                      ],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: De.ProcessButtons,
                children: [
                  (0, e.jsx)(g.$n, {
                    onClick: (l) =>
                      (0, W.pg)(
                        (0, e.jsx)(Ti, { bCheckListReadOnly: !0 }),
                        (0, F.uX)(l),
                      ),
                    children: (0, s.we)("#EventSaleGuidelines_Review"),
                  }),
                  i
                    ? (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)(g.$n, {
                          onClick: (l) =>
                            (0, W.pg)((0, e.jsx)(Bn, {}), (0, F.uX)(l)),
                          children: (0, s.we)("#EventDisclaimer_button"),
                        }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)(g.jn, {
                          onClick: (l) =>
                            (0, W.pg)((0, e.jsx)(Bn, {}), (0, F.uX)(l)),
                          children: (0, s.we)("#EventDisclaimer_button_enter"),
                        }),
                      }),
                  !!n &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsx)(g.$n, {
                        onClick: (l) =>
                          (0, O.Id)(
                            l,
                            `${D.TS.HELP_BASE_URL}en/wizard/HelpRequest/${n}`,
                          ),
                        children: (0, s.we)(
                          "#EventEditor_SaleValveApproval_Request_Link",
                        ),
                      }),
                    }),
                  (0, e.jsx)(le.Eb, {
                    clanSteamID: a.GetClanSteamID(),
                    children: (0, e.jsx)(br, {}),
                  }),
                ],
              }),
            ],
          });
        }
        function br(a) {
          const t = P.mh.GetEditModel(),
            n = t.GetClanAccountID(),
            i = t.GetGID(),
            [l, o, r] = (0, X.uD)(!1),
            {
              bLoading: d,
              bPublishRequiresValveApproval: m,
              nAccountApproved: c,
              bRequiresHostDisclaimer: v,
              fnSetStoreRequireHostDisclaimer: h,
            } = (0, xe.g7)(n, i);
          return !m || !c
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(g.$n, {
                    onClick: o,
                    children: (0, e.jsx)(Ee.Gq, {
                      toolTipContent:
                        "Make the partner re-request reviewing the sale page because we are allowing them to make further changes",
                      children: (0, e.jsx)("span", {
                        children: "Remove Reviewed Stats",
                      }),
                    }),
                  }),
                  (0, e.jsx)(V.EN, {
                    active: l,
                    children: (0, e.jsx)(jr, {
                      clanSteamID: t.GetClanSteamID(),
                      gidClanEvent: t.GetGID(),
                      closeModal: r,
                    }),
                  }),
                ],
              });
        }
        function jr(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: i } = a,
            l = "Revert SALE PAGE Approval?",
            [o, r, d] = (0, xe.hr)(),
            { fnRemoveApprovalAccount: m } = (0, xe.g7)(t.GetAccountID(), n),
            {
              fnSetAllowAddingAppsPackagesBundles: c,
              fnSetAllowChangingVanityURL: v,
              fnSetAllowMakingChangesToSalePage: h,
            } = (0, xe.fp)(t.GetAccountID(), n),
            _ = (0, ct.vs)();
          if (_.bLoading)
            return (0, e.jsx)(ct.Hh, {
              state: _,
              strDialogTitle: l,
              closeModal: i,
            });
          const u = () => {
            _.fnSetLoading(!0),
              c(!0),
              v(!0),
              h(!0),
              m(D.iA.accountid),
              d(n)
                .then((x) => {
                  x == Ue.R
                    ? i()
                    : (r(),
                      _.fnSetError(!0),
                      _.fnSetStrError("Failed to update Private Data: " + x));
                })
                .catch((x) => {
                  r(),
                    _.fnSetError(!0),
                    _.fnSetStrError((0, ye.H)(x).strErrorMsg);
                });
          };
          return (0, e.jsx)(V.o0, {
            strTitle: l,
            strDescription:
              "The sale is currently approved. This will revert this state and will require the sale operator to request permissions again. Are you sure?",
            onOK: u,
            strOKButtonText: "Yes, Approve",
            bDisableBackgroundDismiss: !0,
            closeModal: i,
            onCancel: r,
            bOKDisabled: !!_.bError,
            children: (0, e.jsx)("div", {
              children:
                "This will also permit them to make any changes to the sale page",
            }),
          });
        }
        function Di(a) {
          const t = P.mh.GetEditModel(),
            { bLoading: n, bPublishRequiresValveApproval: i } = (0, xe.g7)(
              t.GetClanAccountID(),
              t.GetGID(),
            ),
            [l, o] = E.useState(void 0);
          return (
            E.useEffect(() => {
              n ||
                (l === void 0
                  ? o(!!i)
                  : l != !!i && t.SetDirty(C.IQ.jsondata_sales));
            }, [t, n, l, i]),
            !t.BHidden() || t.BPublished()
              ? null
              : (0, e.jsx)(xi, {
                  gidClanEvent: t.GetGID(),
                  clanSteamID: t.GetClanSteamID(),
                })
          );
        }
        function Cr() {
          const a = P.mh.GetEditModel(),
            { nAcceptingGuidelineAccount: t } = (0, xe.lA)(
              a.GetClanAccountID(),
              a.GetGID(),
            );
          return Mt.WN.includes(a.GetClanAccountID())
            ? null
            : t
              ? (0, e.jsxs)("div", {
                  className: De.ValveOnlyGuidelineSummary,
                  children: [
                    (0, e.jsx)(yi, {}),
                    (0, e.jsxs)("div", {
                      className: De.SignedBy,
                      children: [
                        "Accepted by:\xA0",
                        (0, e.jsx)(ls.B, {
                          accountID: t,
                          locToken: "#EventModTile_Signer",
                        }),
                      ],
                    }),
                    (0, e.jsx)(Di, {}),
                  ],
                })
              : (0, e.jsxs)("div", {
                  className: De.ValveOnlyGuidelineSummary,
                  children: [
                    "The event organizer has not yet accepted the agreements for this sale page. The next time that any non-Valve account attempts to edit this sale, they should be required to accept the agreements.",
                    (0, e.jsx)(Di, {}),
                  ],
                });
        }
        function Ti(a) {
          const { bCheckListReadOnly: t, closeModal: n } = a,
            i = P.mh.GetEditModel(),
            {
              nAcceptingGuidelineAccount: l,
              strPrimaryContactName: o,
              strPrimaryContactEmail: r,
              fnSetAcceptingGuideLine: d,
              fnSetContactEmailAndName: m,
              strExternalSaleEventType: c,
            } = (0, xe.lA)(i.GetClanAccountID(), i.GetGID()),
            [v, h, _] = (0, xe.hr)(),
            u = !!l,
            [x, b] = E.useState(u),
            [S, y] = E.useState(u),
            [L, G] = E.useState(u),
            H = `${D.TS.PARTNER_BASE_URL}doc/store/promo/${c}_page`,
            te = (0, s.we)(`#EventSaleGuidelines_doc_${c}`),
            [ce, ie] = E.useState(o || ""),
            [He, nt] = E.useState(r || ""),
            [ze, lt] = E.useState(!1),
            [Pe, Nt] = E.useState(null),
            gt = x && S && L && ce.length > 0 && He.length > 0;
          return (0, e.jsx)(V.o0, {
            strTitle: (0, s.we)("#EventSaleGuideLines_title"),
            strDescription: (0, s.we)("#EventSaleGuidelines_desc"),
            bOKDisabled: !gt || ze,
            onOK: () => {
              t || d(D.iA.accountid),
                m(ce, He),
                !t && i.GetGID()
                  ? (lt(!0),
                    _(i.GetGID())
                      .then(n)
                      .catch((Je) => {
                        Nt((0, ye.H)(Je).strErrorMsg);
                      }))
                  : n && n();
            },
            onCancel: n,
            closeModal: n,
            children:
              ze || Pe
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      ze &&
                        (0, e.jsx)(Z.t, {
                          string: (0, s.we)("#Saving"),
                          size: "medium",
                          position: "center",
                        }),
                      !!Pe && (0, e.jsx)("div", { children: Pe }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    className: De.AgreementsCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)(g.Yh, {
                            label: (0, s.we)("#EventSaleGuidelines_rule_5"),
                            checked: x,
                            onChange: b,
                            disabled: t,
                          }),
                          (0, e.jsx)(g.Yh, {
                            label: (0, s.we)("#EventSaleGuidelines_rule_1"),
                            checked: S,
                            onChange: y,
                            disabled: t,
                          }),
                          (0, e.jsx)(g.Yh, {
                            label: (0, e.jsx)("span", {
                              style: { display: "inline" },
                              children: (0, s.PP)(
                                "#EventSaleGuidelines_rule_6",
                                (0, e.jsx)("a", {
                                  href: H,
                                  target: "_blank",
                                  children: te,
                                }),
                              ),
                            }),
                            checked: L,
                            onChange: G,
                            disabled: t,
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: De.ContactSectionCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: De.SectionTitle,
                            children: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_desc",
                            ),
                          }),
                          (0, e.jsx)(g.pd, {
                            placeholder: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_name",
                            ),
                            value: ce,
                            onChange: (Je) => ie(Je.currentTarget.value),
                          }),
                          (0, e.jsx)(g.pd, {
                            placeholder: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_email",
                            ),
                            value: He,
                            onChange: (Je) => nt(Je.currentTarget.value),
                          }),
                        ],
                      }),
                    ],
                  }),
          });
        }
        function Bn(a) {
          var t;
          const { closeModal: n } = a,
            i = P.mh.GetEditModel(),
            [l, o] = E.useState(!1),
            r = (0, B.q3)(
              () => i.GetEventModel().jsondata.sale_presenters || [],
            ),
            [d, m] = E.useState(r);
          return (0, e.jsxs)(V.o0, {
            strTitle: (0, s.we)("#EventDisclaimer_title"),
            strDescription: (0, s.we)("#EventDisclaimer_desc_details"),
            onCancel: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled:
              !l &&
              (d.length == 0 ||
                ((t = d[0].url) == null ? void 0 : t.length) == 0 ||
                d.some((c) => !g.pd.validateUrl(c.url)) ||
                d.some((c) => {
                  var v;
                  return !(
                    ((v = c.localized_presenter_name[N.Bhc]) == null
                      ? void 0
                      : v.length) > 0
                  );
                })),
            onOK: () => {
              (i.GetEventModel().jsondata.sale_presenters = d),
                i.SetDirty(C.IQ.jsondata_sales),
                n();
            },
            children: [
              (0, e.jsx)(zt.$A, { editModel: i, eInitLangLanguage: N.Bhc }),
              (0, e.jsx)(Vt.A, {
                items: d,
                onDelete: (c) => m(d.length == 1 ? [] : [...d.splice(c, 1)]),
                onReorder: () => m([...d]),
                render: (c, v) =>
                  (0, e.jsx)(wr, {
                    presenter: c,
                    setPresenter: (h) => {
                      (d[v] = { ...h }), m([...d]);
                    },
                  }),
              }),
              (0, e.jsx)(g.$n, {
                onClick: () => {
                  let c = Math.floor(1 + Math.random() * 1e5);
                  for (; d && d.some((v) => v.unique_id === c); )
                    c = Math.floor(1 + Math.random() * 1e5);
                  m([
                    ...d,
                    {
                      unique_id: c,
                      localized_presenter_name: new Array(N.bP9),
                      url: "",
                    },
                  ]);
                },
                children: (0, s.we)("#EventDisclaimer_add"),
              }),
              (d == null ? void 0 : d.length) > 0 &&
                (0, e.jsxs)("div", {
                  className: De.PresenterPreviewCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: De.PresenterPreviewDesc,
                      children: (0, s.we)("#EventDisclaimer_preview"),
                    }),
                    (0, e.jsx)(Er.W, { rgPresenters: d }),
                  ],
                }),
              (0, e.jsx)(le.Eb, {
                clanSteamID: i.GetClanSteamID(),
                children: (0, e.jsx)(g.$n, {
                  onClick: () => {
                    m([]), o(!0);
                  },
                  children:
                    "(VO) Clear Presenters to hide event organizers display",
                }),
              }),
            ],
          });
        }
        function wr(a) {
          const { presenter: t, setPresenter: n } = a,
            [i] = (0, B.q3)(() => [Za.O.Get().GetCurEditLanguage()]);
          return (0, e.jsxs)("div", {
            className: De.PresenterInfoCtn,
            children: [
              (0, e.jsx)(g.pd, {
                label: (0, s.we)("#EventDisclaimer_name"),
                type: "text",
                value: s.NT.Get(t.localized_presenter_name, i) || "",
                onChange: (l) => {
                  (t.localized_presenter_name = s.NT.Set(
                    t.localized_presenter_name,
                    i,
                    l.currentTarget.value,
                  )),
                    n(t);
                },
              }),
              (0, e.jsx)(g.pd, {
                label: (0, s.we)("#EventDisclaimer_url"),
                type: "text",
                mustBeURL: !0,
                placeholder: "https://",
                value: t.url,
                onChange: (l) => {
                  (t.url = l.currentTarget.value), n(t);
                },
              }),
            ],
          });
        }
        var yr = p(34336),
          Dr = Object.defineProperty,
          Tr = (a, t, n) =>
            t in a
              ? Dr(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          Xa = (a, t, n) => Tr(a, typeof t != "symbol" ? t + "" : t, n),
          Da = ((a) => (
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
          ))(Da || {}),
          Ir = ((a) => (
            (a.ManagerUsers = "pubrightmanageusers"),
            (a.ActualAuthority = "pubrightactualauthority"),
            (a.ViewFinancials = "pubrightviewfinancials"),
            (a.ApproveWalletFunding = "pubrightapprovewalletfunding"),
            (a.ManageLicensedSites = "pubrightmanagelicensedsites"),
            a
          ))(Ir || {});
        const Yt = class Ua {
          static ConstructAppRightsMap() {
            const t = new Map();
            return Ua.AppRights.forEach((n) => t.set(n.token, n)), t;
          }
          static ConstructPubRightsMap() {
            const t = new Map();
            return Ua.PubRights.forEach((n) => t.set(n.token, n)), t;
          }
          static GetAppRightFlags(t) {
            let n = 0;
            return (
              t.forEach((i) => {
                n |= Ua.MapAppRights.get(i).flag;
              }),
              n
            );
          }
          static GetPublisherRightFlags(t) {
            let n = 0;
            return (
              t.forEach((i) => {
                n |= Ua.MapPubRights.get(i).flag;
              }),
              n
            );
          }
        };
        Xa(Yt, "AppRights", [
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
        ]),
          Xa(Yt, "MapAppRights", Yt.ConstructAppRightsMap()),
          Xa(Yt, "PubRights", [
            { flag: 1, token: "pubrightmanageusers" },
            { flag: 2, token: "pubrightactualauthority" },
            { flag: 4, token: "pubrightviewfinancials" },
            { flag: 8, token: "pubrightapprovewalletfunding" },
            { flag: 16, token: "pubrightmanagelicensedsites" },
          ]),
          Xa(Yt, "MapPubRights", Yt.ConstructPubRightsMap());
        let Mn = Yt;
        var Ar = p(39905),
          Gr = p(49236);
        function Nr(a) {
          const { editModel: t } = a,
            [n] = (0, B.q3)(() => [
              t.GetEventModel().jsondata.sale_named_section_background_styles,
            ]),
            [i, l, o] = (0, X.uD)(),
            [r, d] = (0, E.useState)(void 0);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(g.$n, {
                onClick: l,
                children: (0, s.we)("#Sale_ManageBackgroundStyles"),
              }),
              (0, e.jsx)(V.EN, {
                active: i,
                children: (0, e.jsxs)(V.o0, {
                  strTitle: (0, s.we)("#Sale_ManageBackgroundStyles"),
                  strDescription: (0, s.we)(
                    "#Sale_ManageBackgroundStyles_desc",
                  ),
                  bAlertDialog: !0,
                  closeModal: o,
                  children: [
                    (0, e.jsx)(g.$n, {
                      onClick: () => {
                        const m = {};
                        do
                          m.background_style_identifier =
                            "CustomBackground_" +
                            Math.floor(1 + Math.random() * 1e5);
                        while (
                          n &&
                          n.find(
                            (c) =>
                              c.background_style_identifier ==
                              m.background_style_identifier,
                          )
                        );
                        n
                          ? (t.GetEventModel().jsondata.sale_named_section_background_styles =
                              [
                                ...t.GetEventModel().jsondata
                                  .sale_named_section_background_styles,
                                m,
                              ])
                          : (t.GetEventModel().jsondata.sale_named_section_background_styles =
                              [m]),
                          t.SetDirty(C.IQ.jsondata_sales);
                      },
                      children: Ar.Z.Localize("#Button_Create"),
                    }),
                    !n || n.length == 0
                      ? (0, e.jsx)("p", {
                          children: (0, s.we)(
                            "#Sale_ManageBackgroundStyles_none",
                          ),
                        })
                      : (0, e.jsx)("ul", {
                          children: n.map((m, c) =>
                            (0, e.jsx)(
                              "ol",
                              {
                                onClick: () => d(c),
                                children: (0, e.jsx)("p", {
                                  children: m.background_style_identifier,
                                }),
                              },
                              m.background_style_identifier,
                            ),
                          ),
                        }),
                    r !== void 0 &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("hr", {}),
                          (0, e.jsx)(g.JU, {
                            children: (0, s.we)(
                              "#Sale_ManageBackgroundStyles_edit",
                              n[r].background_style_identifier,
                            ),
                          }),
                          (0, e.jsx)(Gr.CF, {
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
        function Br(a) {
          const { salePage: t, updateLandingPage: n } = a,
            i = P.mh.GetEditModel(),
            [l, o] = (0, B.q3)(() => [
              i.GetEventModel().jsondata.sale_opt_in_page_name,
              i.GetEventModel().jsondata.sale_show_creator,
            ]);
          return (0, e.jsxs)("div", {
            className: fe.Columns,
            children: [
              (0, e.jsxs)("div", {
                className: fe.LeftCol,
                children: [
                  t && (0, e.jsx)(Rr, {}),
                  n && (0, e.jsx)(kr, {}),
                  t && (0, e.jsx)(Pr, {}),
                ],
              }),
              (0, e.jsxs)("div", {
                className: fe.RightCol,
                children: [
                  t && (0, e.jsx)(Or, {}),
                  t &&
                    (0, e.jsx)(le.Eb, {
                      clanSteamID: i.GetClanSteamID(),
                      className: J.EditPreviewButton,
                      children: (0, e.jsx)(g.pd, {
                        type: "text",
                        label: (0, s.we)("#Sale_OptInPageName"),
                        tooltip: (0, s.we)("#Sale_OptInPageName_ttip"),
                        value: l,
                        onChange: (r) => {
                          (0, Y.h5)(() => {
                            (i.GetEventModel().jsondata.sale_opt_in_page_name =
                              r.target.value),
                              i.SetDirty(C.IQ.jsondata_sales);
                          });
                        },
                      }),
                    }),
                  t &&
                    (0, e.jsx)(Ee.he, {
                      toolTipContent: (0, s.we)("#Sale_ShowCreatorHome_ttip"),
                      direction: "top",
                      children: (0, e.jsx)("div", {
                        className: J.InputBorder,
                        children: (0, e.jsx)(g.RF, {
                          onChange: (r) => {
                            (0, Y.h5)(() => {
                              (i.GetEventModel().jsondata.sale_show_creator =
                                r),
                                i.SetDirty(C.IQ.jsondata_sales);
                            });
                          },
                          label: (0, s.we)("#Sale_ShowCreatorHome"),
                          checked: o,
                        }),
                      }),
                    }),
                  t &&
                    (0, e.jsxs)(le.Eb, {
                      clanSteamID: i.GetClanSteamID(),
                      children: [
                        (0, e.jsx)(Lr, {}),
                        (0, e.jsx)(Mr, {}),
                        (0, e.jsx)(Ee.he, {
                          toolTipContent:
                            "Update what a partner is able to change after a sale page is reviewed by Valve",
                          children: (0, e.jsx)(g.$n, {
                            onClick: (r) =>
                              (0, W.pg)(
                                (0, e.jsx)(_r, {
                                  clanSteamID: i.GetClanSteamID(),
                                  gidClanEvent: i.GetGID(),
                                }),
                                (0, F.uX)(r),
                              ),
                            children: "Update Sale Page Editability",
                          }),
                        }),
                      ],
                    }),
                  (0, e.jsx)(le.Eb, {
                    clanSteamID: i.GetClanSteamID(),
                    children: (0, e.jsx)(yr.i, { editModel: i }),
                  }),
                  (0, e.jsx)(le.Eb, {
                    clanSteamID: i.GetClanSteamID(),
                    children: (0, e.jsx)(Nr, { editModel: i }),
                  }),
                ],
              }),
            ],
          });
        }
        function Mr(a) {
          const t = P.mh.GetEditModel();
          return (0, e.jsx)(Ee.he, {
            toolTipContent:
              "Deep discount sale events are curated by Valve to promote successful older games, typically with a 90% discount",
            direction: "top",
            children: (0, e.jsx)("div", {
              className: J.InputBorder,
              children: (0, e.jsx)(g.RF, {
                onChange: (n) => t.SetTag("vo_deep_discount_sale", n),
                checked: t.GetEventModel().BHasTag("vo_deep_discount_sale"),
                label: "(VO) This is a deep discount event?",
              }),
            }),
          });
        }
        function Lr(a) {
          var t, n;
          const i = P.mh.GetEditModel(),
            [l, o, r, d] = (0, B.q3)(() => {
              var _, u, x;
              return [
                (_ = i.GetEventModel().jsondata.ownership_requirement_info) ==
                null
                  ? void 0
                  : _.bLockedToAppOwners,
                (u = i.GetEventModel().jsondata.ownership_requirement_info) ==
                null
                  ? void 0
                  : u.strRedirectURL,
                i.GetEventModel().jsondata.sale_use_subscription_layout,
                (x = i.GetEventModel().jsondata.app_right_requirement_info) ==
                null
                  ? void 0
                  : x.bLockedToPartnerAppRights,
              ];
            }),
            [m, c] = E.useState(
              i.GetEventModel().BIsLockedToGameOwners()
                ? (t = i.GetEventModel().GetRequiredAppIDs()) == null
                  ? void 0
                  : t.join(",")
                : "",
            ),
            [v, h] = E.useState(
              i.GetEventModel().BIsLockedToGameOwners()
                ? (n = i.GetEventModel().GetRequiredPackageIDs()) == null
                  ? void 0
                  : n.join(",")
                : "",
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ee.he, {
                toolTipContent: (0, s.we)("#Sale_OwnershipRestrictions_ttip"),
                direction: "top",
                children: (0, e.jsx)("div", {
                  className: J.InputBorder,
                  children: (0, e.jsx)(g.RF, {
                    onChange: (_) => {
                      (0, Y.h5)(() => {
                        const u = i.GetEventModel().jsondata;
                        u.ownership_requirement_info
                          ? (u.ownership_requirement_info.bLockedToAppOwners =
                              _)
                          : (u.ownership_requirement_info = {
                              bLockedToAppOwners: _,
                              rgRequiredAppIDs: [],
                              rgRequiredPackageIDs: [],
                              strRedirectURL: "",
                            }),
                          i.SetDirty(C.IQ.jsondata_sales);
                      });
                    },
                    label: (0, s.we)("#Sale_OwnershipRestrictions"),
                    checked: l,
                  }),
                }),
              }),
              l &&
                (0, e.jsxs)(E.Fragment, {
                  children: [
                    (0, e.jsx)(g.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_RequiredApps"),
                      tooltip: (0, s.we)("#Sale_RequiredApps_ttip"),
                      onChange: (_) => {
                        m != _.target.value &&
                          (c(_.target.value),
                          (0, Y.h5)(() => {
                            const u = i.GetEventModel().GetRequiredAppIDs(),
                              x = _.target.value
                                .split(",")
                                .map(Number)
                                .filter((b) => b > 0);
                            u.splice(0, u.length, ...x),
                              i.SetDirty(C.IQ.jsondata_sales);
                          }));
                      },
                      value: m,
                    }),
                    (0, e.jsx)(g.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_RequiredPackages"),
                      tooltip: (0, s.we)("#Sale_RequiredPackages_ttip"),
                      onChange: (_) => {
                        v != _.target.value &&
                          (h(_.target.value),
                          (0, Y.h5)(() => {
                            const u = i.GetEventModel().GetRequiredPackageIDs(),
                              x = _.target.value
                                .split(",")
                                .map(Number)
                                .filter((b) => b > 0);
                            u.splice(0, u.length, ...x),
                              i.SetDirty(C.IQ.jsondata_sales);
                          }));
                      },
                      value: v,
                    }),
                    (0, e.jsx)(g.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_OwnershipLockRedirect"),
                      tooltip: (0, s.we)("#Sale_OwnershipLockRedirect_ttip"),
                      onChange: (_) => {
                        o != _.target.value &&
                          (0, Y.h5)(() => {
                            (i.GetEventModel().jsondata.ownership_requirement_info.strRedirectURL =
                              _.target.value),
                              i.SetDirty(C.IQ.jsondata_sales);
                          });
                      },
                      value: o,
                    }),
                    (0, e.jsx)(le.Eb, {
                      clanSteamID: i.GetClanSteamID(),
                      children: (0, e.jsx)(g.Yh, {
                        onChange: (_) => {
                          (0, Y.h5)(() => {
                            (i.GetEventModel().jsondata.sale_use_subscription_layout =
                              _),
                              i.SetDirty(C.IQ.jsondata_sales);
                          });
                        },
                        label:
                          "(VO) " + (0, s.we)("#Sale_UseSubscriptionLayout"),
                        tooltip: (0, s.we)("#Sale_UseSubscriptionLayout_ttip"),
                        checked: !!r,
                      }),
                    }),
                  ],
                }),
              (0, e.jsx)(Ee.he, {
                toolTipContent: (0, s.we)(
                  "#Sale_PartnerAppEditRestrictions_ttip",
                ),
                direction: "top",
                children: (0, e.jsx)("div", {
                  className: J.InputBorder,
                  children: (0, e.jsx)(g.RF, {
                    onChange: (_) => {
                      (0, Y.h5)(() => {
                        const u = i.GetEventModel().jsondata;
                        u.app_right_requirement_info
                          ? (u.app_right_requirement_info.bLockedToPartnerAppRights =
                              _)
                          : (u.app_right_requirement_info = {
                              bLockedToPartnerAppRights: _,
                              nAppRightFlag: Mn.GetAppRightFlags([Da.EditInfo]),
                            }),
                          i.SetDirty(C.IQ.jsondata_sales);
                      });
                    },
                    label: (0, s.we)("#Sale_PartnerAppEditRestrictions"),
                    checked: !!d,
                  }),
                }),
              }),
            ],
          });
        }
        function Or(a) {
          const t = P.mh.GetEditModel(),
            n = (0, B.q3)(
              () => t.GetEventModel().jsondata.sale_discount_event_id,
            ),
            i = async () => {
              const l = new Set(),
                o = new Array();
              t.GetEventModel().jsondata.sale_sections.forEach((v) => {
                v.capsules.forEach(async (h) => {
                  h.type === "bundle"
                    ? o.push(it.A.Get().QueueBundleRequest(Number(h.id), {}))
                    : h.type === "sub" &&
                      o.push(it.A.Get().QueuePackageRequest(Number(h.id), {}));
                });
              }),
                await Promise.all(o),
                t.GetEventModel().jsondata.sale_sections.forEach((v) => {
                  v.capsules.forEach(async (h) => {
                    if (h.type === "bundle" || h.type === "sub") {
                      const _ =
                        h.type === "bundle"
                          ? it.A.Get().GetBundle(Number(h.id))
                          : it.A.Get().GetPackage(Number(h.id));
                      _ && _.GetIncludedAppIDs().forEach((u) => l.add(u));
                    } else l.add(Number(h.id));
                  });
                });
              let r = Array.from(l);
              r.sort();
              const d = new FormData();
              d.append("sessionid", (0, D.KC)()),
                d.append("name", "[AUTO] " + t.GetName()),
                d.append("event", "1"),
                d.append("type", "discount"),
                d.append("header", t.GetName()),
                d.append("appids", r.join(",")),
                d.append("start_date", t.GetEventStartTime().toString()),
                d.append("end_date", t.GetEventEndTime().toString()),
                d.append("description", "#discount_desc_preset_special"),
                t.GetEventModel().jsondata.sale_discount_event_id &&
                  d.append(
                    "discount_id",
                    t
                      .GetEventModel()
                      .jsondata.sale_discount_event_id.toString(),
                  );
              const c =
                (
                  await pe().post(
                    D.TS.COMMUNITY_BASE_URL +
                      "actions/ajaxcreateupdatediscountevent",
                    d,
                    { withCredentials: !0 },
                  )
                ).data.discountid ||
                t.GetEventModel().jsondata.sale_discount_event_id;
              t.GetEventModel().jsondata.sale_discount_event_id ||
                (t.GetEventModel().jsondata.sale_discount_event_id = c),
                (0, W.pg)(
                  (0, e.jsx)(ba.t, {
                    editModel: t,
                    bSkipChecks: !0,
                    partnerEventEditorStore: P.mh,
                    OnSuccess: () => {
                      window.open(
                        D.TS.PARTNER_BASE_URL + "admin/editdiscountevent/" + c,
                      );
                    },
                  }),
                  window,
                );
            };
          return (0, e.jsxs)(le.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: J.EditPreviewButton,
            children: [
              (0, e.jsxs)("div", {
                className: J.EventEditorTextTitle,
                children: [
                  (0, s.we)("#Sale_CreateUpdateDiscountEventTitle"),
                  (0, e.jsx)(Q.o, {
                    tooltip: (0, s.we)(
                      "#Sale_CreateUpdateDiscountEventTitle_ttip",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)(g.jn, {
                onClick: i,
                children: t.GetEventModel().jsondata.sale_discount_event_id
                  ? (0, s.we)(
                      "#Sale_UpdateDiscountEvent",
                      t.GetEventModel().jsondata.sale_discount_event_id,
                    )
                  : (0, s.we)("#Sale_CreateDiscountEvent"),
              }),
              !!n &&
                (0, e.jsx)("a", {
                  href: `${D.TS.PARTNER_BASE_URL}admin/editdiscountevent/${n}`,
                  target: "_blank",
                  children: "Edit Discount Event",
                }),
            ],
          });
        }
        function Pr(a) {
          const t = P.mh.GetEditModel(),
            [n, i, l, o, r] = (0, B.q3)(() => {
              const v = t.GetEventModel().jsondata;
              return [
                v.sale_section_disable_capitalize,
                v.sale_section_font_size,
                v.sale_font,
                v.sale_font_weight,
                v.sale_associated_advertising_appid,
              ];
            }),
            d = [
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
            ].map((v) => ({
              ...v,
              label: (0, e.jsx)("div", {
                style: { ...v.data },
                children: v.label,
              }),
            })),
            m = d.find((v) => v.data.fontFamily == l && v.data.fontWeight == o),
            c = m && m.data;
          return (0, e.jsxs)(le.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            children: [
              (0, e.jsx)(g.m, {
                label: (0, s.we)("#Sale_SaleFont"),
                tooltip: (0, s.we)("#Sale_SaleFont_ttip"),
                strDropDownClassName: J.DropDownScroll,
                rgOptions: d,
                selectedOption: c,
                onChange: (v) => {
                  (0, Y.h5)(() => {
                    (t.GetEventModel().jsondata.sale_font = v.data.fontFamily),
                      (t.GetEventModel().jsondata.sale_font_weight =
                        v.data.fontWeight),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                contextMenuPositionOptions: { bDisablePopTop: !0 },
              }),
              (0, e.jsx)(g.pd, {
                type: "text",
                label: (0, s.we)("#Sale_SectionTitleFontSize"),
                tooltip: (0, s.we)("#Sale_SectionTitleFontSize_ttip"),
                onChange: (v) => {
                  (0, Y.h5)(() => {
                    (t.GetEventModel().jsondata.sale_section_font_size = Number(
                      v.target.value,
                    )),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                value: i,
              }),
              (0, e.jsx)(g.Yh, {
                label: (0, s.we)("#Sale_DontCapitalizeSectionTitles"),
                tooltip: (0, s.we)("#Sale_DontCapitalizeSectionTitles_ttip"),
                onChange: (v) => {
                  (0, Y.h5)(() => {
                    (t.GetEventModel().jsondata.sale_section_disable_capitalize =
                      v),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                checked: n,
              }),
              (0, e.jsx)(g.pd, {
                type: "number",
                label: (0, s.we)("#Sale_AdvertisingApp_ID"),
                tooltip: (0, s.we)("#Sale_AdvertisingApp_ID_ttip"),
                onChange: (v) => {
                  (0, Y.h5)(() => {
                    (t.GetEventModel().jsondata.sale_associated_advertising_appid =
                      Number(v.target.value)),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                value: r,
              }),
            ],
          });
        }
        function Rr(a) {
          const t = P.mh.GetEditModel(),
            { bAllowChangingVanityURL: n, bAllowMakingChangesToSalePage: i } =
              (0, xe.fp)(t.GetClanAccountID(), t.GetGID()),
            [l, o, r] = (0, B.q3)(() => [
              t.GetEventModel().jsondata.sale_vanity_id,
              t.GetEventModel().jsondata
                .sale_vanity_id_valve_approved_for_sale_subpath,
              t.GetEventModel().jsondata.bAutoUpdateVanityURLForContentHub,
            ]),
            { creatorHome: d } = (0, $e.FV)(t.GetClanAccountID());
          let m = null;
          return (
            l && !o
              ? d
                ? (m = d.GetCreatorHomeURL("publisher") + "sale/" + l)
                : (m = `${D.TS.STORE_BASE_URL}curator/${t.GetClanAccountID()}/sale/${l}`)
              : l && o && (m = D.TS.STORE_BASE_URL + "sale/" + l),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(g.pd, {
                  type: "text",
                  label: (0, s.we)("#Sale_VanityID"),
                  tooltip: (0, s.we)("#Sale_VanityID_ttip"),
                  onChange: (c) => t.SetSaleVanityID(c.target.value),
                  value: l,
                  disabled: r || !n || !i,
                }),
                t.GetEventModel().jsondata.bAutoUpdateVanityURLForContentHub &&
                  (0, e.jsx)("div", {
                    className: "LongURL Note",
                    children:
                      "The vanity URL for this sale page is automatically set based on its content hub configuration. Adjust the settings under Content Hub Settings to change this behavior.",
                  }),
                m
                  ? (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("span", {
                          className: "DialogLabel",
                          children: (0, s.we)("#Sale_VanityID_Link"),
                        }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("a", {
                          href: m,
                          className: "LongURL",
                          target: D.TS.IN_CLIENT ? "" : "_blank",
                          children: m,
                        }),
                      ],
                    })
                  : (0, e.jsx)("div", {
                      className: Wt.ErrorStylesWithIcon,
                      children: (0, s.we)(
                        "#EventEditor_SaleNotReady_SaleVanity_ttip",
                      ),
                    }),
                (0, e.jsx)(le.Eb, {
                  requireAdmin: !0,
                  clanSteamID: t.GetClanSteamID(),
                  children: (0, e.jsx)(g.Yh, {
                    label: (0, s.we)("#Sale_ValveTopSalePath"),
                    tooltip: (0, s.we)("#Sale_ValveTopSalePath_ttip"),
                    onChange: (c) => {
                      (0, Y.h5)(() => {
                        (t.GetEventModel().jsondata.sale_vanity_id_valve_approved_for_sale_subpath =
                          c),
                          t.SetDirty(C.IQ.jsondata_sales);
                      });
                    },
                    checked: o,
                  }),
                }),
              ],
            })
          );
        }
        function kr(a) {
          const t = P.mh.GetEditModel(),
            n = (0, B.q3)(
              () =>
                t.GetEventModel().jsondata.sale_update_landing_page_vanity_id,
            ),
            [i, l] = (0, oe.TB)(t.GetClanAccountID()),
            [o] = (0, Ie.t7)(l.appid, { include_basic_info: !0 });
          if (i || !o) return;
          const r =
            n != null && n.length ? o.GetStorePageURL() + "/" + n : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(g.pd, {
                type: "text",
                label: (0, s.we)("#Sale_VanityID"),
                tooltip: (0, s.we)("#Sale_VanityID_ttip"),
                onChange: (d) =>
                  t.SetSaleUpdateLandingPageVanityID(d.target.value),
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
                        target: D.TS.IN_CLIENT ? "" : "_blank",
                        children: r,
                      }),
                    ],
                  })
                : (0, e.jsx)("div", {
                    className: Wt.ErrorStylesWithIcon,
                    children: (0, s.we)(
                      "#EventEditor_SaleNotReady_UpdateLandingPage_ttip",
                    ),
                  }),
            ],
          });
        }
        var Ii = p(87426),
          Ln = p(15736);
        function wt(a) {
          const {
              strSectionId: t,
              hasMinimize: n,
              strTitle: i,
              children: l,
              strToolTip: o,
              valveOnly: r,
              valveOnlyClanSteamID: d,
              requireAdmin: m,
              dataToCopy: c,
            } = a,
            v = (0, B.q3)(() => n && (0, et.Nx)(t)),
            h = (0, le.Dd)(d, m);
          if (d && !h) return null;
          const _ = n
            ? (u) => {
                (0, et.mi)(t), u.preventDefault(), u.stopPropagation();
              }
            : void 0;
          return (0, e.jsx)(Qt, {
            strSectionId: t,
            children: (0, e.jsxs)("div", {
              id: t,
              className: (0, j.A)({
                [fe.SettingCtn]: !0,
                [fe.ValveOnly]: r || !!d,
              }),
              children: [
                (0, e.jsxs)("div", {
                  className: (0, j.A)(fe.Title, n && fe.HasHover),
                  onClick: _,
                  children: [
                    i,
                    o && (0, e.jsx)(Q.o, { tooltip: o }),
                    !!c &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(Ii.R6, {
                            dataToCopy: Ln.E.k_EventData_SubMenu,
                          }),
                          (0, e.jsx)(Ii.oO, {
                            dataToPaste: Ln.E.k_EventData_SubMenu,
                          }),
                        ],
                      }),
                    n &&
                      (0, e.jsx)(rs.pn, {
                        bIsMinimized: v,
                        fnToggleMinimize: () => (0, et.mi)(t),
                      }),
                  ],
                }),
                !v && l,
              ],
            }),
          });
        }
        var ua = p(88748);
        function Fr(a) {
          const { editModel: t } = a,
            [n, i, l] = (0, B.q3)(() => [
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
                    className: ua.WarningContainer,
                    children: [
                      (0, e.jsx)(Ur, {
                        editModel: t,
                        fnPredicate: (o) =>
                          !(o.jsondata.sale_ml_recommender_delay_hours > 0),
                        fnFixIt: (o) =>
                          (o.jsondata.sale_ml_recommender_delay_hours = 48),
                        fixItText: "Set to 48 hours",
                        children: () =>
                          (0, e.jsx)("span", {
                            children:
                              "Next Fest should have ML Recommender Delay set.",
                          }),
                      }),
                      (0, e.jsx)(Ai, {
                        editModel: t,
                        fnPredicate: (o) =>
                          (0, $.ye)(o.section_type) && !o.show_as_demos,
                        fnFixIt: (o) => (o.show_as_demos = !0),
                        children: (o) =>
                          (0, e.jsxs)("span", {
                            children: [
                              "There are ",
                              o,
                              ` that don't have the "Show demo information" checkbox checked.`,
                            ],
                          }),
                      }),
                      (0, e.jsx)(Ai, {
                        editModel: t,
                        fnPredicate: (o) =>
                          (0, $.ye)(o.section_type) &&
                          !o.prefer_demo_store_page,
                        fnFixIt: (o) => (o.prefer_demo_store_page = !0),
                        children: (o) =>
                          (0, e.jsxs)("span", {
                            children: [
                              "There are ",
                              o,
                              ` that don't have the "Prefer demo standalone store pages" checkbox checked.`,
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(g.pd, {
                    type: "number",
                    mustBeNumeric: !0,
                    rangeMin: 0,
                    label: "Randomization delay (hours)",
                    tooltip:
                      "The number of hours from the start of Next Fest to show the items in random order instead of ML recommended order",
                    onChange: (o) => {
                      (t.GetEventModel().jsondata.sale_ml_recommender_delay_hours =
                        Number(o.target.value)),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                    placeholder: String(1e4),
                    value: i,
                  }),
                  (0, e.jsx)(g.pd, {
                    type: "number",
                    mustBeNumeric: !0,
                    rangeMin: -1,
                    label: "Recommendation weight exponent",
                    tooltip:
                      "After the randomization delay, items are shuffled weighted by their ML recommended rank. Higher values keep the top recommendations closer to the front. Leave empty or 0 to use the default of " +
                      $.ld +
                      ". Set to -1 to disable shuffling and use the exact recommended order.",
                    onChange: (o) => {
                      (t.GetEventModel().jsondata.sale_ml_recommender_weight_exponent =
                        Number(o.target.value)),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                    placeholder: String($.ld),
                    value: l,
                  }),
                ],
              })
            : null;
        }
        const Ur = (0, R.PA)((a) => {
            const {
              editModel: t,
              fnPredicate: n,
              fnFixIt: i,
              fixItText: l,
              children: o,
            } = a;
            if (!(n == null ? void 0 : n(t.GetEventModel()))) return null;
            const d = () => {
              i(t.GetEventModel()), t.SetDirty(C.IQ.jsondata_sales);
            };
            return (0, e.jsxs)("div", {
              className: ua.Warning,
              children: [
                o(),
                (0, e.jsx)("div", {
                  className: ua.Buttons,
                  children:
                    i &&
                    (0, e.jsx)(g.$n, {
                      onClick: () => d(),
                      children: l || "Fix it",
                    }),
                }),
              ],
            });
          }),
          Ai = (0, R.PA)((a) => {
            const {
                editModel: t,
                fnPredicate: n,
                fnFixIt: i,
                fixItText: l,
                children: o,
              } = a,
              d = t.GetSaleSections().filter(n);
            if (d.length == 0) return null;
            const m = 25,
              c = (0, e.jsx)(e.Fragment, {
                children: d
                  .slice(0, m)
                  .map((_, u) =>
                    (0, e.jsx)(
                      "div",
                      {
                        children: (0, e.jsx)(Ca.fi, {
                          eventModel: t.GetEventModel(),
                          saleSection: _,
                          editLanguage: t.GetCurEditLanguage(),
                          index: u,
                        }),
                      },
                      _.unique_id,
                    ),
                  )
                  .concat(
                    d.length > m
                      ? [(0, e.jsx)("div", { children: "..." }, "elipses")]
                      : [],
                  ),
              }),
              v = (0, e.jsx)(Ee.Gq, {
                toolTipContent: c,
                children: (0, e.jsxs)("span", {
                  className: ua.TooltipIndicator,
                  children: [d.length, " sections"],
                }),
              }),
              h = () => {
                d.forEach(i), t.SetDirty(C.IQ.jsondata_sales);
              };
            return (0, e.jsxs)("div", {
              className: ua.Warning,
              children: [
                o(v),
                (0, e.jsx)("div", {
                  className: ua.Buttons,
                  children:
                    i &&
                    (0, e.jsx)(g.$n, {
                      onClick: () => h(),
                      children: l != null ? l : "Fix it",
                    }),
                }),
              ],
            });
          }),
          Hr = (0, R.PA)((a) => {
            var t, n;
            const { editModel: i, fnOnOKCallback: l } = a,
              o = i.GetEventModel(),
              {
                fnSetStorePublishingRequiresValveApproval: r,
                fnSetUserWhoEnabledSalePage: d,
              } = (0, xe.g7)(i.GetClanAccountID(), i.GetGID()),
              [m, c] = E.useState(
                (t = o.jsondata.sale_vanity_id) != null ? t : "",
              ),
              [v] = E.useState(new Wa.lu()),
              h =
                !vt.iA.is_support &&
                !(
                  (n = $e.pF.GetCreatorHome(i.GetClanSteamID())) != null &&
                  n.BHasClanAccountFlagSet(ia.Wv.Mv)
                ),
              _ = Math.floor(Date.now() / 1e3),
              u = new Date();
            u.setHours(10), u.setMinutes(0), u.setSeconds(0);
            const x = new Date();
            x.setDate(u.getDate() + 1),
              x.setHours(10),
              x.setMinutes(0),
              x.setSeconds(0);
            const [b, S] = E.useState(
                o.startTime > _ ? o.startTime : Math.floor(x.getTime() / 1e3),
              ),
              y = new Date();
            y.setDate(x.getDate() + 1),
              y.setHours(10),
              y.setMinutes(0),
              y.setSeconds(0);
            const [L, G] = E.useState(
                (o == null ? void 0 : o.endTime) > Math.floor(y.getTime() / 1e3)
                  ? o.endTime
                  : Math.floor(y.getTime() / 1e3),
              ),
              H = () => {
                (0, Y.h5)(() => {
                  i.SetSaleVanityID(m),
                    i.SetEventStartTime(b),
                    i.SetEventEndTime(L),
                    d(vt.iA.accountid),
                    h && r(!0),
                    v.Dispatch(),
                    l();
                }),
                  a.closeModal && a.closeModal();
              },
              te = () => {
                (0, Y.h5)(() => {
                  (i.GetEventModel().jsondata.bSaleEnabled = !1),
                    i.SetDirty(C.IQ.jsondata_sales);
                }),
                  a.closeModal && a.closeModal();
              },
              ce = m.replace(/[^\w-]/g, "").length > 0 && b && L;
            return (0, e.jsx)(ve.tH, {
              children: (0, e.jsx)(V.x_, {
                onEscKeypress: te,
                children: (0, e.jsxs)(g.UC, {
                  children: [
                    (0, e.jsx)(g.Y9, {
                      children: (0, s.we)("#Sale_EnableTitle"),
                    }),
                    (0, e.jsx)(g.nB, {
                      children: (0, e.jsx)(g.a3, {
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
                            (0, e.jsx)(g.pd, {
                              type: "text",
                              label: (0, s.we)("#Sale_VanityID"),
                              tooltip: (0, s.we)("#Sale_VanityID_ttip"),
                              onChange: (ie) => c(ie.target.value),
                              value: m,
                            }),
                            (0, e.jsx)(Ke.K, {
                              strDescription: (0, s.we)("#Sale_New_Start"),
                              nEarliestTime: 0,
                              fnGetTimeToUpdate: () => b,
                              fnSetTimeToUpdate: S,
                              fnIsValidDateTime: () => !0,
                              bShowTimeZone: !0,
                            }),
                            (0, e.jsx)(Ke.K, {
                              strDescription: (0, s.we)("#Sale_New_End"),
                              nEarliestTime: 0,
                              fnGetTimeToUpdate: () => L,
                              fnSetTimeToUpdate: G,
                              fnIsValidDateTime: () => L > b,
                              bShowTimeZone: !0,
                            }),
                            (0, e.jsx)(le.Eb, {
                              clanSteamID: i.GetClanSteamID(),
                              requireAdmin: !0,
                              children: (0, e.jsx)(xi, {
                                clanSteamID: i.GetClanSteamID(),
                                gidClanEvent: i.GetGID(),
                                fnOkCallbackList: v,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsx)(g.wi, {
                      children: (0, e.jsx)(g.CB, {
                        onCancel: te,
                        bOKDisabled: !ce,
                        onOK: H,
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
          zr = (0, R.PA)((a) => {
            var t;
            const { editModel: n, fnOnOKCallback: i } = a,
              l = n.GetEventModel(),
              [o, r] = E.useState(
                (t = l.jsondata.sale_update_landing_page_vanity_id) != null
                  ? t
                  : "",
              ),
              d = () => {
                (0, Y.h5)(() => {
                  n.SetSaleUpdateLandingPageVanityID(o), i();
                }),
                  a.closeModal && a.closeModal();
              },
              m = () => {
                (0, Y.h5)(() => {
                  (n.GetEventModel().jsondata.bSaleEnabled = !1),
                    n.SetDirty(C.IQ.jsondata_sales);
                }),
                  a.closeModal && a.closeModal();
              },
              c = o.replace(/[^\w-]/g, "").length > 0;
            return (0, e.jsx)(ve.tH, {
              children: (0, e.jsx)(V.x_, {
                onEscKeypress: m,
                children: (0, e.jsxs)(g.UC, {
                  children: [
                    (0, e.jsx)(g.Y9, {
                      children: (0, s.we)(
                        "#Sale_UpdateLandingPage_EnableTitle",
                      ),
                    }),
                    (0, e.jsx)(g.nB, {
                      children: (0, e.jsx)(g.a3, {
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("span", {
                              children: (0, s.we)(
                                "#Sale_UpdateLandingPage_EnableDesc",
                              ),
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)(g.pd, {
                              type: "text",
                              label: (0, s.we)(
                                "#Sale_UpdateLandingPageVanityID",
                              ),
                              tooltip: (0, s.we)(
                                "#Sale_UpdateLandingPageVanityID_ttip",
                              ),
                              onChange: (v) => r(v.target.value),
                              value: o,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsx)(g.wi, {
                      children: (0, e.jsx)(g.CB, {
                        onCancel: m,
                        bOKDisabled: !c,
                        onOK: d,
                      }),
                    }),
                  ],
                }),
              }),
            });
          });
        function Gi(a) {
          const { mode: t } = a,
            n = P.mh.GetEditModel(),
            [i, l] = E.useState(n.BHasSaleEnabled()),
            { creatorHome: o } = (0, $e.FV)(
              n.GetEventModel().clanSteamID.GetAccountID(),
            ),
            r = E.useRef(void 0),
            d = (h) => {
              var _;
              l(h),
                (_ = r == null ? void 0 : r.current) == null ||
                  _.setState({ checked: h }),
                (0, Y.h5)(() => {
                  (n.GetEventModel().jsondata.bSaleEnabled = h),
                    n.SetDirty(C.IQ.jsondata_sales);
                });
            },
            m = (0, le.Dd)(n.GetClanSteamID(), !0),
            c =
              !n.BIsSourceEventSaleEnabled() &&
              t != qa &&
              (!o || !o.BHasClanAccountFlagSet(ia.Wv.Jn)) &&
              !m,
            v = t != qa;
          return (0, e.jsxs)("div", {
            className: J.InputBorder,
            children: [
              (0, e.jsx)(g.RF, {
                ref: r,
                onChange: (h) => {
                  var _;
                  h && v
                    ? ((_ = r == null ? void 0 : r.current) == null ||
                        _.setState({ checked: !1 }),
                      l(!1),
                      (0, W.pg)(
                        t == Ja
                          ? (0, e.jsx)(zr, {
                              editModel: n,
                              fnOnOKCallback: () => d(!0),
                            })
                          : (0, e.jsx)(Hr, {
                              editModel: n,
                              fnOnOKCallback: () => d(!0),
                            }),
                        window,
                      ))
                    : d(h);
                },
                label: (0, s.we)(
                  t == Ja ? "#Sale_option_updatelandingpage" : "#Sale_option",
                ),
                disabled: c,
                checked: i,
              }),
              c &&
                (0, e.jsx)("div", {
                  className: Wt.WarningStyles,
                  children: (0, s.we)("#Sale_Enable_Warning"),
                }),
            ],
          });
        }
        var Ni = p(55737),
          $a = p(16346),
          On = p(29543),
          Pn = p(34360),
          Vr = p(1743),
          Wr = p(75912),
          Bi = p(11436);
        function Qr(a) {
          const t = () => a.closeModal && a.closeModal(),
            [n, i] = (0, E.useState)(!1),
            [l, o] = (0, E.useState)(null),
            [r, d] = (0, E.useState)(null),
            [m, c] = (0, E.useState)(null),
            [v, h] = (0, E.useState)(!1);
          (0, E.useEffect)(() => {
            const x = pe().CancelToken.source();
            return (
              Mi().then(() => {
                x.token.reason || i(!0);
              }),
              () => x.cancel("SaleEventExplorerDialog: unmounting")
            );
          }, []);
          const _ = (x, b, S, y) => {
              o(x), d(b), c(S), h(y);
            },
            u = () => {
              (0, W.pg)(
                (0, e.jsx)(V.o0, {
                  strTitle: (0, s.we)("#EventEditor_GenericAreYouSure"),
                  strDescription: (0, s.we)("#Sale_Debug_Delete"),
                  onOK: () => {
                    Kr(l), t();
                  },
                }),
                window,
              );
            };
          return (0, e.jsx)(ve.tH, {
            children: (0, e.jsx)(V.x_, {
              onEscKeypress: t,
              children: (0, e.jsxs)(g.UC, {
                children: [
                  (0, e.jsx)(g.Y9, {
                    children: (0, s.we)("#Sale_Debug_Title"),
                  }),
                  (0, e.jsx)(g.nB, {
                    children: (0, e.jsx)(g.a3, {
                      children: n
                        ? (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsx)("div", {
                                children: (0, s.we)("#Sale_Debug_Desc"),
                              }),
                              (0, e.jsx)(Yr, { fnSetSaleItem: _ }),
                              l
                                ? (0, e.jsx)(qr, {
                                    saleCapsule: l,
                                    list: r,
                                    tabList: m,
                                    bInLinkedItems: v,
                                  })
                                : (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#Sale_Debug_NoMatchingItem",
                                    ),
                                  }),
                            ],
                          })
                        : (0, e.jsx)(Z.t, {
                            string: (0, s.we)("#Sale_Debug_Loading"),
                            size: "medium",
                          }),
                    }),
                  }),
                  (0, e.jsx)(g.wi, {
                    children: (0, e.jsx)(g.CB, {
                      onCancel: t,
                      bOKDisabled: !l,
                      strOKText: (0, s.we)("#Button_Delete"),
                      onOK: u,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        async function Mi() {
          const a = P.mh.GetEditModel();
          await it.A.Get().HintLoadStoreItems(
            Array.from(a.GetAllSalePageFeaturedItems("apps")),
            Array.from(a.GetAllSalePageFeaturedItems("packages")),
            Array.from(a.GetAllSalePageFeaturedItems("bundles")),
            null,
            null,
            null,
            { include_assets: !0 },
          );
        }
        function Rn(a, t = "") {
          var n;
          return (
            ((n = it.A.Get().GetStoreItem(a.id, (0, On.SW)(a.type))) == null
              ? void 0
              : n.GetName()) || t
          );
        }
        function Yr(a) {
          const { fnSetSaleItem: t } = a,
            n = (0, E.useRef)(null),
            i = (0, E.useRef)(null),
            l = (0, E.useRef)(0),
            o = (0, E.useRef)(void 0);
          (0, E.useEffect)(() => () => window.clearTimeout(l.current), []);
          const r = (0, E.useCallback)(
            async (d) => {
              let m = d.target.value;
              !m ||
                m.trim().length == 0 ||
                ((m = m.toLocaleLowerCase()),
                window.clearTimeout(l.current),
                n.current && n.current("SearchForCurator: new request"),
                (l.current = window.setTimeout(async () => {
                  const c = P.mh.GetEditModel();
                  let v = Number.parseInt(m.trim()),
                    h = new Array();
                  if (c.GetEventModel().BHasSaleEnabled()) {
                    const _ = (S) =>
                        S.id == v || Rn(S).toLowerCase().indexOf(m) >= 0,
                      u = (S) => {
                        h.findIndex((y) => y.id == S.id && y.type == S.type) <
                          0 && h.push(S);
                      };
                    c.GetEventModel().jsondata.sale_sections.forEach((S) => {
                      S.capsules && S.capsules.filter(_).forEach(u);
                    });
                    const x = c.GetTabSaleSection();
                    x &&
                      x.tabs.forEach((S) => {
                        S.capsules && S.capsules.filter(_).forEach(u);
                      });
                    const b = (S) => {
                      var y, L;
                      const G = (ie) => S.id == ie.id && S.type == ie.type;
                      let H = new Array();
                      c.GetEventModel().jsondata.sale_sections.forEach((ie) => {
                        var He;
                        ((He = ie.capsules) == null
                          ? void 0
                          : He.filter(G).length) > 0 && H.push(ie);
                      });
                      let te = new Array();
                      x &&
                        ((y = x.tabs) == null ||
                          y.forEach((ie) => {
                            ie.capsules.filter(G).length > 0 && te.push(ie);
                          }));
                      const ce =
                        ((L = c.GetEventModel().jsondata.tagged_items) == null
                          ? void 0
                          : L.findIndex(
                              (ie) => ie && G(ie == null ? void 0 : ie.capsule),
                            )) >= 0;
                      t(S, H, te, ce);
                    };
                    i.current = (0, $a.lX)(
                      (0, e.jsx)(Jr, { list: h, fnChooseCapsule: b }),
                      o.current.element,
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
          return (0, e.jsx)(g.pd, {
            type: "text",
            placeholder: (0, s.we)("#Sale_Debug_Placeholder"),
            tooltip: (0, s.we)("#Sale_Debug_InputToolTip"),
            onChange: r,
            onBlur: () => {
              setTimeout(() => i.current && i.current.Hide(), 200);
            },
            ref: o,
          });
        }
        function Jr(a) {
          const { list: t, fnChooseCapsule: n } = a;
          return (0, e.jsx)(Pn.tz, {
            className: Vr.SearchResults,
            children: t.map((i) =>
              (0, e.jsx)(
                Pn.kt,
                {
                  onSelected: () => n(i),
                  children: (0, e.jsx)("div", {
                    children: (0, s.we)(
                      "#Sale_Debug_ContextItem",
                      Rn(i, (0, s.we)("#Sale_Debug_Unknown")),
                      i.type,
                    ),
                  }),
                },
                "sale_" + i.id + "_tpe_" + i.type,
              ),
            ),
          });
        }
        function qr(a) {
          const { saleCapsule: t, list: n, tabList: i, bInLinkedItems: l } = a,
            o = P.mh.GetEditModel(),
            r = o.GetCurEditLanguage();
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)(
                  "#Sale_Debug_MatchItem",
                  Rn(t, (0, s.we)("#Sale_Debug_Unknown")),
                  t.type,
                ),
              }),
              (0, e.jsx)("div", {
                children: (0, s.we)("#Sale_Debug_AppearsIn"),
              }),
              (0, e.jsx)("ol", {
                children:
                  n && n.length > 0
                    ? n.map((d) =>
                        (0, e.jsx)(
                          "li",
                          {
                            children: (0, e.jsx)(Ca.fi, {
                              saleSection: d,
                              editLanguage: r,
                              eventModel: o.GetEventModel(),
                              index: o.GetSaleSectionIndexByID(d.unique_id, !0),
                            }),
                          },
                          d.unique_id,
                        ),
                      )
                    : (0, s.we)("#Sale_Debug_NoMatchingItem"),
              }),
              (0, e.jsx)("div", {
                children: (0, s.we)("#Sale_Debug_Tab_AppearsIn"),
              }),
              (0, e.jsx)("ol", {
                children:
                  i && i.length > 0
                    ? i.map((d) =>
                        (0, e.jsx)(
                          "li",
                          { children: (0, Wr.l8)(d, r) },
                          d.unique_id,
                        ),
                      )
                    : (0, s.we)("#Sale_Debug_NoMatchingItem"),
              }),
              (0, e.jsx)("div", {
                children: (0, s.we)(
                  l
                    ? "#Sale_Debug_LinkedSection"
                    : "#Sale_Debug_Not_LinkedSection",
                ),
              }),
            ],
          });
        }
        function Kr(a) {
          if (!a) return;
          const t = P.mh.GetEditModel();
          (0, Y.h5)(() => {
            let n = 0;
            const i = (o) => {
              let r = o.capsules.findIndex(
                (d) => d.id == a.id && d.type == a.type,
              );
              for (; r >= 0; )
                o.capsules.splice(r, 1),
                  (n += 1),
                  (r = o.capsules.findIndex(
                    (d) => d.id == a.id && d.type == a.type,
                  ));
            };
            t.GetEventModel().jsondata.sale_sections.forEach(i);
            let l = t.GetTabSaleSection();
            l && l.tabs.forEach(i), n && t.SetDirty(C.IQ.jsondata_sales);
          });
        }
        function Li(a) {
          return `${a.type}:${a.id}`;
        }
        function kn(a) {
          const t = a.split(":");
          return { type: t[0], id: parseInt(t[1]) };
        }
        function Zr() {
          var a, t;
          const n = [],
            i = new Map(),
            l = P.mh.GetEditModel(),
            o = l.GetTabSaleSection();
          return (
            (a = o == null ? void 0 : o.tabs) == null ||
              a.forEach((r) => {
                var d;
                const m = {
                  type: "tab",
                  unique_id: r.unique_id,
                  strLabel: (0, s.we)(
                    ((d = r.localized_label) == null ? void 0 : d[N.Bhc]) ||
                      r.default_label,
                  ),
                };
                n.push(m),
                  r.capsules.forEach((c) => {
                    const v = Li(c);
                    i.has(v) || i.set(v, new Set()), i.get(v).add(r.unique_id);
                  });
              }),
            (t = l.GetEventModel().jsondata.sale_sections) == null ||
              t.forEach((r) => {
                if (r.section_type != "items") return;
                const d = {
                  type: "section",
                  unique_id: r.unique_id,
                  strLabel: (0, s.we)(
                    (0, Bi.s0)(r, l.GetEventModel(), ft.uF) ||
                      r.localized_label[N.Bhc] ||
                      r.default_label,
                  ),
                };
                n.push(d),
                  r.capsules.forEach((m) => {
                    const c = Li(m);
                    i.has(c) || i.set(c, new Set()), i.get(c).add(r.unique_id);
                  });
              }),
            { mapItemLocations: i, rgSections: n }
          );
        }
        function Xr(a) {
          const [t, n] = (0, E.useState)(!1),
            [i, l] = (0, E.useState)(null),
            o = () => a.closeModal && a.closeModal();
          (0, E.useEffect)(() => {
            const c = pe().CancelToken.source();
            return (
              Mi().then(() => {
                c.token.reason || n(!0);
              }),
              l(Zr()),
              () =>
                c.cancel("SaleEventItemLocationCSVDownloadDialog: unmounting")
            );
          }, []);
          let r = null;
          if (i) {
            const c = i.rgSections.filter((_) => _.type == "tab").length,
              v = i.rgSections.length - c,
              h = i.mapItemLocations.size;
            r = (0, s.we)("#Sale_GameExport_ContentSummary", c, v, h);
          }
          const d = () => {
              var c;
              const { mapItemLocations: v, rgSections: h } = i,
                _ = [];
              for (const S of Array.from(v.keys())) {
                const y = kn(S);
                let L;
                try {
                  L =
                    (c = it.A.Get().GetStoreItem(y.id, (0, On.SW)(y.type))) ==
                    null
                      ? void 0
                      : c.GetName();
                } catch {}
                _.push([`${y.type}: ${L || y.id}`, S]);
              }
              _.sort();
              const u = [],
                x = ["Item", "AppID", "Count"];
              for (const S of h) x.push(`${S.strLabel} (${S.type})`);
              u.push(x);
              for (const [S, y] of _) {
                const L = v.get(y),
                  G = kn(y),
                  H = [S, G.id.toString(), L.size.toString()];
                for (const te of h) H.push(L.has(te.unique_id) ? "1" : " ");
                u.push(H);
              }
              const b = "item_locations.csv";
              $t.g.WriteCSVToFile(u, b),
                (0, W.mK)(
                  (0, e.jsx)(V.o0, {
                    strTitle: (0, s.we)("#Sale_GameExport_Title"),
                    bAlertDialog: !0,
                    strDescription: (0, s.we)(
                      "#Sale_GameExport_FileExported",
                      b,
                    ),
                  }),
                  window,
                ),
                o();
            },
            m = () => {
              const { mapItemLocations: c } = i,
                v = [],
                h = ["Type", "ID", "Name", "Dev", "Pub", "Franchise"];
              v.push(h);
              const _ = [];
              for (const x of Array.from(c.keys())) {
                const b = kn(x);
                try {
                  const S = it.A.Get().GetStoreItem(b.id, (0, On.SW)(b.type));
                  _.push([b.type, S.GetName() || b.id.toString(), S]);
                } catch {}
              }
              _.sort();
              for (const [x, b, S] of _) {
                const y = S.GetDeveloperNames().join(","),
                  L = S.GetPublisherNames().join(","),
                  G = S.GetFranchiseNames().join(","),
                  H = [x.toString(), S.GetID().toString(), b, y, L, G];
                v.push(H);
              }
              const u = "item_pubs.csv";
              $t.g.WriteCSVToFile(v, u),
                (0, W.mK)(
                  (0, e.jsx)(V.o0, {
                    strTitle: (0, s.we)("#Sale_GameExport_Title"),
                    bAlertDialog: !0,
                    strDescription: (0, s.we)(
                      "#Sale_GameExport_FileExported",
                      u,
                    ),
                  }),
                  window,
                ),
                o();
            };
          return (0, e.jsx)(ve.tH, {
            children: (0, e.jsx)(V.x_, {
              onEscKeypress: o,
              children: (0, e.jsxs)(g.UC, {
                children: [
                  (0, e.jsx)(g.Y9, {
                    children: (0, s.we)("#Sale_GameExport_Title"),
                  }),
                  (0, e.jsxs)(g.nB, {
                    children: [
                      (0, e.jsxs)(g.a3, {
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, s.we)("#Sale_GameExport_Desc"),
                          }),
                          (0, e.jsx)("br", {}),
                          t
                            ? r
                            : (0, e.jsx)(Z.t, {
                                position: "center",
                                string: (0, s.we)("#Sale_Debug_Loading"),
                                size: "medium",
                              }),
                          (0, e.jsx)(g.$n, {
                            onClick: d,
                            disabled: !t,
                            children: (0, s.we)("#Sale_Export"),
                          }),
                        ],
                      }),
                      (0, e.jsx)(le.Eb, {
                        clanSteamID: P.mh.GetEditModel().GetClanSteamID(),
                        children: (0, e.jsxs)(g.a3, {
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, s.we)("#Sale_GameExport_Desc2"),
                            }),
                            (0, e.jsx)(g.$n, {
                              onClick: m,
                              disabled: !t,
                              children: (0, s.we)("#Sale_Export"),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(g.wi, {
                    children: (0, e.jsx)(g.jn, {
                      onClick: o,
                      children: (0, s.we)("#Button_Close"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        var de = p(63872),
          be = p.n(de),
          Fn = p(18994),
          Jt = p(49285);
        const $r = (a) => {
          const t = new Array();
          return (
            a.rows.forEach((n) => {
              const i = () => {
                a.onSelected && a.onSelected(n);
                let l = document.getElementById(n.strSectionId);
                l && (l.scrollIntoView(!0), window.scrollBy(0, -75));
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
                        [Jt.TOCEntry]: !0,
                        [Jt.SectionOnScreen]: n.bSectionIsVisible,
                        [Jt.TOCIndent]: n.bIndent,
                      },
                      n.strClassName,
                    ),
                    onClick: i,
                    onKeyDown: (l) => {
                      (l.key === "Enter" || l.key === " ") &&
                        (l.preventDefault(), i());
                    },
                    children: (0, e.jsx)("div", {
                      style: n.style,
                      className: Jt.TOCEntryText,
                      children: n.strLabel,
                    }),
                  },
                  "tc_" + n.strSectionId,
                ),
              );
            }),
            (0, e.jsxs)("div", {
              className: (0, j.A)(Jt.TableOfContentsContainer, a.className),
              children: [
                a.elHeader,
                (0, e.jsxs)("div", {
                  className: Jt.TableOfContents,
                  children: [
                    (0, e.jsx)("div", {
                      className: Jt.Header,
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
        var Un = p(74107),
          en = p(9295);
        function ed(a) {
          const t = a.eventType == N.ajI;
          return (0, e.jsxs)("div", {
            className: en.ManageLocCtn,
            children: [
              (0, e.jsx)("div", {
                className: en.Header,
                children: Un.F5.Localize("#EventEditor_Loc_Title"),
              }),
              (0, e.jsxs)("div", {
                className: en.ManageLocContents,
                children: [
                  t
                    ? Un.F5.Localize("#EventEditor_Loc_Overview_Page")
                    : Un.F5.Localize("#EventEditor_Loc_Overview"),
                  (0, e.jsx)("div", {
                    className: en.LocButtonsCtn,
                    children: a.children,
                  }),
                ],
              }),
            ],
          });
        }
        var Ot = p(41635),
          tn = p(6231),
          td = p(6103),
          an = p.n(td),
          ad = p(41878),
          Oi = p(57673),
          nd = p(28796),
          nn = p.n(nd),
          Pi = p(54968);
        function Ri(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, se.Bw)(n, se.PH.k_eStoreSalePage, "forceAbsolute"),
            l = (0, se.Bw)(n, se.PH.k_eStoreHardwarePreview, "forceAbsolute"),
            r = (0, le.Dd)(t.GetClanSteamID(), !0) && (0, se.LH)(n),
            d = [
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
            d.push({
              label: "(VO) Pre-launch hardware page",
              tooltip: "Valve admins on dev and beta only.",
              data: "hardwarepreview",
              size: { width: 1500, height: 1100 },
              url: l,
            });
          const m = (h) => {
              var _, u;
              const x = d.find((S) => S.data == h),
                b = !((_ = x == null ? void 0 : x.newWindow) != null && _);
              Pi.xr
                .Get()
                .ShowPreviewWindow(
                  (u = x == null ? void 0 : x.url) != null ? u : i,
                  n,
                  b,
                  x == null ? void 0 : x.size,
                  x == null ? void 0 : x.queryParams,
                );
            },
            c = (0, Pi.cv)(),
            v = (h) => {
              let _ = { bOverlapHorizontal: !0 };
              const u = (0, e.jsx)(g.n4, {
                rgOptions: d,
                onValueSelected: (x, b) => m(b.data),
              });
              (0, $a.lX)(u, h, _);
            };
          return (0, e.jsxs)("div", {
            className: (0, j.A)(nn().LivePreview, c && nn().Connected),
            children: [
              (0, e.jsx)(g.$n, {
                className: (0, j.A)(nn().Button),
                onClick: () => m(void 0),
                children: (0, s.we)("#Sale_Debug_LivePreview"),
              }),
              (0, e.jsx)(g.$n, {
                className: (0, j.A)(nn().DeviceDropdown),
                onClick: (h) => v(h),
                children: (0, e.jsx)(bt.GB9, {}),
              }),
            ],
          });
        }
        function sd(a) {
          return (0, e.jsx)(ft.Cs, {
            location: ft.W3,
            children: (0, e.jsx)(id, { ...a }),
          });
        }
        const id = (0, R.PA)((a) => {
            const { editModel: t } = a,
              n = (0, D.Qn)(),
              i = gi(),
              [l, o, r, d] = (0, B.q3)(() => [
                (0, tn.QD)(),
                (0, tn.dy)(),
                !!t.GetEventModel().jsondata.sale_sub_menu,
                t.GetEventType(),
              ]),
              m = d == N.ajI,
              c = (S) => {
                a.onSelected && a.onSelected(S);
              },
              v = (S, y, L, G = !1, H) => {
                S.push({
                  strLabel: y,
                  strSectionId: L,
                  style: H,
                  bIndent: G,
                  bSectionIsVisible: i.m_mapVisibleSections.has(L),
                });
              };
            let h = t.GetEventModel(),
              _ = new Array();
            v(_, (0, s.we)("#Sale_PageConfigOptions"), "SalePageEdit_Config");
            const u = (0, le.Dd)(t.GetClanSteamID(), !1);
            (u || h.GetTaggedItems().length > 0) &&
              v(
                _,
                (0, s.we)(
                  "#Sale_TaggedItemsSection",
                  h.GetTaggedItems().length,
                ),
                "SalePageEdit_TaggedItems",
              ),
              v(
                _,
                (0, s.we)(
                  m ? "#Sale_Artwork_Sections_Page" : "#Sale_Artwork_Sections",
                ),
                "SalePageEdit_AllArtworkCtn",
              ),
              (h.BHasTag("contenthub") || h.BUsesContentHubForItemSource()) &&
                v(_, "Content Hub Settings", "SalePageEdit_ContentHub");
            let x = !1,
              b = 0;
            if (
              (h.GetSaleSections().forEach((S, y) => {
                if (x && l && !(0, Oi.bF)(o, S)) b += 1;
                else {
                  const L = (0, e.jsx)(Ca.fi, {
                      saleSection: S,
                      eventModel: t.GetEventModel(),
                      editLanguage: t.GetCurEditLanguage(),
                      index: y,
                    }),
                    G = { ...(0, Lt.sq)(S, h, n), color: S.label_color },
                    H = Fn.mj + S.unique_id;
                  v(_, L, H, x, G), S.section_type === "tabs" && (x = !0);
                }
              }),
              b > 0)
            ) {
              const S = (0, e.jsxs)("div", {
                className: an().Ctn,
                onClick: (y) => {
                  (0, tn.qT)(void 0), y.stopPropagation();
                },
                children: [
                  (0, e.jsx)("div", {
                    className: an().ButtonIcon,
                    children: (0, e.jsx)(bt.X, {}),
                  }),
                  (0, s.we)("#Sale_TOC_ClearFilter"),
                  (0, e.jsx)(Q.o, {
                    tooltip: (0, s.we)("#Sale_TOC_ClearFilter_ttip", b),
                  }),
                ],
              });
              v(_, S, "DummyTargetNotReal", !0);
            }
            return (
              u &&
                (r &&
                  v(_, "(VO) Sub Menu Editor", "SalePageEdit_SubMenuEditor"),
                v(_, "(VO) Custom CSS Editor", "SalePageEdit_CustomCSSCode")),
              (0, e.jsx)(ve.tH, {
                children: (0, e.jsx)($r, {
                  className: an().SalePageTOCPlacement,
                  elHeader: (0, e.jsx)(ed, {
                    eventType: a.editModel.GetEventType(),
                    children: (0, e.jsx)(ii, { editModel: a.editModel }),
                  }),
                  strHeader: (0, s.we)("#Sale_TOC"),
                  rows: _,
                  onSelected: c,
                  elBottomContent: (0, e.jsx)(ki, { editModel: a.editModel }),
                }),
              })
            );
          }),
          ki = (a) => {
            const { editModel: t } = a,
              [n, i, l] = (0, X.uD)(),
              o = (0, Y.XI)((r) => {
                const d = {
                    ...$.G6,
                    unique_id: t.GenerateSaleSectionUniqueID(),
                  },
                  m = t.GetEventModel().jsondata.sale_sections.slice(-1)[0];
                m &&
                  ((d.label_color = m.label_color),
                  (d.background_gradient_bottom = m.background_gradient_bottom),
                  (d.background_gradient_top = m.background_gradient_top),
                  (d.border_color = m.border_color),
                  (d.border_width = m.border_width)),
                  C.nG.SetSaleSectionType(t.GetEventType(), d, r),
                  t.GetEventModel().jsondata.sale_sections.push(d),
                  t.SetDirty(C.IQ.jsondata_sales),
                  (0, et.mi)((0, et.LY)(d), !0),
                  l();
              });
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(V.EN, {
                    active: n,
                    children: (0, e.jsx)(od, {
                      clanSteamID: t.GetClanSteamID(),
                      eventType: t.GetEventType(),
                      fnSectionTypeChosen: o,
                      closeModal: l,
                    }),
                  }),
                }),
                (0, e.jsx)(g.jn, {
                  onClick: i,
                  className: J.AddSectionButton,
                  children: (0, s.we)("#Sale_AddNewSection"),
                }),
              ],
            });
          };
        function od(a) {
          const {
              clanSteamID: t,
              eventType: n,
              fnSectionTypeChosen: i,
              closeModal: l,
            } = a,
            [o, r] = E.useState("unselected_empty"),
            d = (0, ad.q)(t, n);
          return (0, e.jsxs)(V.o0, {
            strTitle: (0, s.we)("#Sale_AddNewSection_Title"),
            strDescription: (0, s.we)("#Sale_AddNewSection_Desc"),
            onOK: () => i(o),
            onCancel: l,
            closeModal: l,
            children: [
              (0, e.jsx)(Lt.gB, {
                rgSectionTypeInfos: d,
                sectionType: o,
                fnSetSectionType: (m) => r(m),
              }),
              (0, e.jsx)("div", {
                className: (0, j.A)(J.FlexColumnContainer, an().ReassignCtn),
              }),
            ],
          });
        }
        function ld(a) {
          const t = P.mh.GetEditModel(),
            [n, i, l] = (0, X.uD)(),
            { bSoloMode: o, SetSoloMode: r } = (0, et.eQ)();
          return (0, e.jsxs)("div", {
            className: de.BottomBarControls,
            children: [
              (0, e.jsx)("div", {
                children: (0, e.jsx)(Ee.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Debug_LivePreview_ttip"),
                  children: (0, e.jsx)(Ri, { editModel: t }),
                }),
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(Ee.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Debug_Tooltip"),
                  children: (0, e.jsx)(g.$n, {
                    onClick: (d) => (0, W.pg)((0, e.jsx)(Qr, {}), (0, F.uX)(d)),
                    children: (0, e.jsx)(bt.eSy, {}),
                  }),
                }),
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(Ee.Gq, {
                  toolTipContent: (0, s.we)("#Sale_GameExport_Desc"),
                  children: (0, e.jsx)(g.$n, {
                    onClick: (d) => (0, W.pg)((0, e.jsx)(Xr, {}), (0, F.uX)(d)),
                    children: (0, e.jsx)(bt.f5X, {}),
                  }),
                }),
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(V.EN, {
                    active: n,
                    children: (0, e.jsx)(rd, { editModel: t, closeModal: l }),
                  }),
                  (0, e.jsx)(Ee.Gq, {
                    toolTipContent: (0, s.we)("#Sale_ReorderSections_ttip"),
                    children: (0, e.jsx)(g.$n, {
                      onClick: () => i(),
                      children: (0, e.jsx)(bt._EF, {}),
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: de.MinimizeAll,
                children: (0, e.jsx)(Ee.Gq, {
                  toolTipContent: (0, s.we)(
                    "#Sale_Section_MinimizeAll_Tooltip",
                  ),
                  children: (0, e.jsx)(g.$n, {
                    onClick: et.TA,
                    children: (0, e.jsx)(bt.Xjb, {}),
                  }),
                }),
              }),
              (0, e.jsx)("div", {
                className: de.MinimizeAll,
                children: (0, e.jsx)(Ee.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Section_SoloMode_ttip"),
                  children: (0, e.jsx)(g.Yh, {
                    label: (0, s.we)("#Sale_Section_SoloMode"),
                    checked: o,
                    onChange: (d) => r(d),
                  }),
                }),
              }),
            ],
          });
        }
        function rd(a) {
          const { editModel: t, closeModal: n } = a,
            i = (0, B.q3)(() => t.GetSaleSections()),
            [l, o] = E.useState(null);
          E.useEffect(() => (o([...i]), () => o(null)), [i]);
          const r = (0, D.Qn)(),
            d = (m) => {
              const c = t.GetSaleSections().findIndex((h) => m === h),
                v = {
                  ...(0, Lt.sq)(m, t.GetEventModel(), r),
                  color: m.label_color,
                };
              return (0, e.jsx)("div", {
                className: de.SectionTitle,
                style: v,
                children: (0, e.jsx)(Ca.fi, {
                  saleSection: m,
                  editLanguage: t.GetCurEditLanguage(),
                  eventModel: t.GetEventModel(),
                  index: c,
                }),
              });
            };
          return (0, e.jsx)(ft.Cs, {
            location: ft.Ay,
            children: (0, e.jsx)(V.o0, {
              strTitle: (0, s.we)("#Sale_ReorderSections"),
              onOK: () => {
                (t.GetEventModel().jsondata.sale_sections = l),
                  t.SetDirty(C.IQ.jsondata_sales),
                  o(null);
              },
              onCancel: () => o(null),
              closeModal: n,
              children: l
                ? (0, e.jsx)("div", {
                    className: de.ReorderSectionCtn,
                    children: (0, e.jsx)("div", {
                      className: de.SectionList,
                      children: (0, e.jsx)(Vt.A, {
                        items: l,
                        onMove: (m, c) => {
                          let v = [...l];
                          (0, Ot.yY)(v, m, c), o(v);
                        },
                        render: d,
                      }),
                    }),
                  })
                : (0, e.jsx)(Z.t, {
                    string: (0, s.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
            }),
          });
        }
        const dd = E.lazy(() =>
          Promise.all([p.e(91), p.e(8502)]).then(p.bind(p, 17065)),
        );
        function cd(a) {
          const { editModel: t } = a,
            n = (_) => {
              t.GetEventModel().jsondata.sale_custom_css != _ &&
                ((t.GetEventModel().jsondata.sale_custom_css = _),
                t.SetDirty(C.IQ.jsondata_sales));
            },
            i = t.GetEventModel().jsondata,
            [l, o, r] = (0, B.q3)(() => [
              i.sale_custom_css,
              i.sale_vanity_id_valve_approved_for_sale_subpath,
              t.GetName(),
            ]),
            [d, m] = E.useState(() => r + "_custom.css"),
            c = (_) => {
              var u;
              const x = (u = _.target.files) == null ? void 0 : u[0];
              if (x) {
                m(_.target.files[0].name);
                const b = new FileReader();
                (b.onload = (S) => {
                  const y = S.target.result.toString();
                  (t.GetEventModel().jsondata.sale_custom_css = y),
                    t.SetDirty(C.IQ.jsondata_sales),
                    (_.target.value = "");
                }),
                  b.readAsText(x);
              }
            },
            v = () => {
              const _ = document.createElement("a"),
                u = new Blob([l], { type: "text/css" });
              (_.href = URL.createObjectURL(u)),
                (_.download = d),
                document.body.appendChild(_),
                _.click();
            },
            h = {
              selectOnLineNumbers: !0,
              tabCompletion: "on",
              colorDecorators: !0,
              scrollBeyondLastLine: !1,
              automaticLayout: !0,
            };
          return (0, e.jsx)(e.Fragment, {
            children: o
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
                        (0, e.jsx)("input", { type: "file", onChange: c }),
                        (0, e.jsx)(g.$n, { onClick: v, children: "Export" }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: fe.CodeEditor,
                      children: (0, e.jsx)(E.Suspense, {
                        fallback: null,
                        children: (0, e.jsx)(dd, {
                          width: "100%",
                          height: "100%",
                          language: "css",
                          theme: "vs-dark",
                          value: l || "",
                          options: h,
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
        var ud = p(30366),
          hd = p(72739),
          ha = p(54736),
          pd = p(40604);
        const Fi = E.createContext(void 0);
        function md(a) {
          return (0, e.jsx)(Fi, { value: a.elContent, children: a.children });
        }
        function _d(a) {
          const t = E.useContext(Fi);
          return t ? hd.createPortal(a.children, t) : null;
        }
        const vd = (0, R.PA)((a) => {
            const t = P.mh.GetEditModel(),
              n = t.GetCategoryAsType(),
              i = t.BPublished(),
              l = t.BUnlisted(),
              o = t.BVisible(),
              r = n == N.ajI;
            return (0, e.jsxs)("div", {
              className: (0, j.A)(
                ha.EventEditorTopBarContainer,
                i && (o || l) ? ha.EventPublished : ha.EventUnPublished,
              ),
              children: [
                (0, e.jsxs)("div", {
                  className: f().EventBarBackAndTitle,
                  children: [
                    (0, e.jsx)(se.tj, {
                      eventModel: t.GetEventModel(),
                      route: se.PH.k_eCommunityAdminPage,
                      className: f().EventBarBack,
                      children: (0, s.we)("#EventDisplay_EventsDashBtn"),
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventBarTitleCtn,
                      children: (0, e.jsx)(zt.zm, { editModel: t }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().EventOptions,
                  children: (0, e.jsx)(zt.$A, { editModel: t }),
                }),
                (0, e.jsxs)("div", {
                  className: f().EventEditButtons,
                  children: [
                    !r &&
                      (0, e.jsx)(se.tj, {
                        eventModel: t.GetEventModel(),
                        route: se.PH.k_eCommunityPreview,
                        className: f().EditPreviewButton,
                        children:
                          n == N.uYK
                            ? (0, s.we)("#EventEditor_Preview_News")
                            : (0, s.we)("#EventEditor_Preview"),
                      }),
                    t.BHasSaleEnabled() &&
                      (0, e.jsx)(se.tj, {
                        eventModel: t.GetEventModel(),
                        route: se.PH.k_eCommunityPreviewSale,
                        className: f().EditPreviewButton,
                        children: r
                          ? (0, s.we)("#EventEditor_PreviewSale_Page")
                          : (0, s.we)("#EventEditor_PreviewSale"),
                      }),
                    t.BHasSaleEnabled() &&
                      (0, e.jsx)(Ee.Gq, {
                        toolTipContent: (0, s.we)(
                          "#Sale_Debug_LivePreview_ttip",
                        ),
                        children: (0, e.jsx)(Ri, { editModel: t }),
                      }),
                  ],
                }),
              ],
            });
          }),
          gd = (0, R.PA)((a) => {
            const { setAdditionalContentDiv: t } = a,
              n = P.mh.GetEditModel(),
              i = n.GetEventModel(),
              l = n.GetEventType() == N.ajI,
              { creatorHome: o } = (0, $e.FV)(n.GetClanAccountID()),
              r = l && (o == null ? void 0 : o.GetLinkedEventGID()) == i.GID,
              d =
                (n.GetVisibilityState() == $.zv.k_EEventStateVisible ||
                  n.BUnlisted()) &&
                (!l || r);
            return (0, e.jsxs)("div", {
              className: ha.EventEditorBottomBar,
              children: [
                (0, e.jsx)(pd.c, { editModel: P.mh.GetEditModel() }),
                !l &&
                  (0, e.jsx)(se.tj, {
                    eventModel: i,
                    route: se.PH.k_eCommunityPreview,
                    className: f().EditPreviewButton,
                    children: (0, s.we)("#EventEditor_Preview"),
                  }),
                d &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      (0, e.jsx)(se.tj, {
                        className: f().EditPreviewButton,
                        eventModel: i,
                        route: se.PH.k_eStoreView,
                        children: l
                          ? (0, s.we)("#EventEditor_ViewLive_CreatorHome")
                          : (0, s.we)("#EventEditor_ViewLive"),
                      }),
                      (0, e.jsx)("span", {
                        className: ha.DisplayAdminPanel_Spacer,
                        children: " ",
                      }),
                    ],
                  }),
                (0, e.jsx)("div", { className: ha.AdditionalContent, ref: t }),
              ],
            });
          });
        var Sd = p(47797),
          Ed = p(18368),
          yt = p.n(Ed),
          pa = p(47534),
          fd = p(24660);
        function Gm(a) {
          const { rgSocialMedia: t } = a,
            [n, i] = React.useState(t ? [...t] : []),
            [l, o] = React.useState(n.length),
            r = React.useCallback(
              (d) => {
                d.length > l && o(d.length), i(d);
              },
              [l],
            );
          return jsxs("div", {
            children: [
              jsx(Ui, { ...a, rgSocialMediaItems: n, fnSetItems: r }),
              jsx(Cd, { items: n, maxSeen: l }),
            ],
          });
        }
        function Ui(a) {
          const {
              rgSocialMediaItems: t,
              fnSetItems: n,
              rgSupportedSocialMediaTypes: i,
              rgValidationData: l,
            } = a,
            o = E.useMemo(
              () =>
                i
                  .filter(
                    (v) =>
                      t.findIndex((h) => h.type === v.type) === -1 ||
                      v.type === "qq" ||
                      v.type === "qqlink",
                  )
                  .map((v) => ({
                    label: (0, s.we)(`#StoreAdmin_SocialMedia_Type_${v.type}`),
                    data: v.type,
                  }))
                  .sort((v, h) => (v.label < h.label ? -1 : 1)),
              [i, t],
            ),
            r = (v) => {
              let h = t.slice();
              h.splice(v, 1), n(h);
            },
            d = (v, h) => {
              let _ = t.slice();
              (0, Ot.yY)(_, v, h), n(_);
            },
            m = (v, h) => {
              const _ = t.map((u, x) => (x === v ? { ...u, link: h } : u));
              n(_);
            },
            c = (v) => {
              let h = t.slice();
              h.push({ type: v, link: "" }), n(h);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(xd, { options: o, onAddLink: c }),
              (0, e.jsx)(Vt.A, {
                items: t,
                onDelete: r,
                onMove: d,
                render: (v, h) =>
                  (0, e.jsx)(
                    bd,
                    {
                      item: v,
                      onUpdateLink: (_) => m(h, _),
                      validationData: l[v.type],
                    },
                    v.type,
                  ),
              }),
            ],
          });
        }
        function xd(a) {
          const { options: t, onAddLink: n } = a,
            i = (l) => {
              const o = l.data;
              o && n(o);
            };
          return (0, e.jsx)("div", {
            className: pa.AddLinkDropDown,
            children: (0, e.jsx)(g.ZU, {
              strDefaultLabel: (0, s.we)("#StoreAdmin_SocialMedia_Add"),
              controlled: !0,
              rgOptions: t,
              onChange: i,
              selectedOption: null,
            }),
          });
        }
        function Hi(a, t) {
          let n = !0,
            i = "";
          return (
            t.prefix
              ? (a.type === "mastodon"
                  ? (i = (0, s.we)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      t.prefix.join(", "),
                    ))
                  : (i = (0, s.we)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      t.prefix.join(", "),
                    )),
                a.link &&
                  ((n = !1),
                  t.prefix.forEach((l) => {
                    a.link.startsWith(l) && (n = !0);
                  })))
              : t.number
                ? ((i = (0, s.we)("#StoreAdmin_SocialMedia_ValidationNumber")),
                  a.link && (n = /^\d+$/.test(a.link)))
                : t.text
                  ? (i = (0, s.we)("#StoreAdmin_SocialMedia_ValidationText"))
                  : t.regex &&
                    a.type === "tumblr" &&
                    (i = (0, s.we)("#StoreAdmin_SocialMedia_ValidationTumblr")),
            { bValid: n, strTooltip: i }
          );
        }
        function bd(a) {
          const { item: t, onUpdateLink: n, validationData: i } = a;
          let l;
          i.number
            ? (l = (0, s.we)("#StoreAdmin_SocialMedia_EnterNumber"))
            : i.text
              ? (l = (0, s.we)("#StoreAdmin_SocialMedia_EnterName"))
              : (l = (0, s.we)("#StoreAdmin_SocialMedia_EnterLink"));
          const { bValid: o, strTooltip: r } = Hi(t, i);
          return (0, e.jsxs)("div", {
            className: pa.SocialMediaRow,
            children: [
              (0, e.jsx)("div", {
                className: pa.SocialMediaType,
                children: (0, s.we)(`#StoreAdmin_SocialMedia_Type_${t.type}`),
              }),
              (0, e.jsx)(fd.BA, {
                className: pa.SocialMediaLink,
                type: "text",
                value: t.link,
                placeholder: l,
                onChange: (d) => n(d.target.value),
              }),
              r &&
                (0, e.jsx)(Ee.he, {
                  className: pa.SocialMediaTooltip,
                  toolTipContent: r,
                  children: "(?)",
                }),
              !o &&
                (0, e.jsx)("div", {
                  className: pa.ValidationError,
                  children: r,
                }),
            ],
          });
        }
        function jd(a, t) {
          let n = Array(),
            i = 0;
          for (
            a.forEach((l) => {
              l.link &&
                (n.push(
                  React.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${i}][type]`,
                    value: l.type,
                  }),
                ),
                n.push(
                  React.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${i}][link]`,
                    value: l.link,
                  }),
                ),
                i++);
            });
            i < t;
          )
            n.push(
              React.createElement("input", {
                type: "hidden",
                name: `app[content][ordered_social_links][${i}]`,
                value: "",
              }),
            ),
              i++;
          return (
            [
              "discord_server",
              "youtube",
              "facebook",
              "twitter",
              "twitch",
            ].forEach((l) => {
              n.push(
                React.createElement("input", {
                  type: "hidden",
                  name: `app[content][links][${l}]`,
                  value: "",
                }),
              );
            }),
            n
          );
        }
        function Cd(a) {
          const { items: t, maxSeen: n } = a,
            i = React.useMemo(() => jd(t, n), [t, n]);
          return jsxs(Fragment, { children: [...i] });
        }
        function wd() {
          const a = (0, ya.I)({
            queryKey: ["useSocialMediaSupports"],
            queryFn: async () => {
              var t;
              const n = `${vt.TS.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
                i = { origin: self.origin },
                l = await pe().get(n, { params: i });
              return (l == null ? void 0 : l.status) == 200 &&
                ((t = l.data) == null ? void 0 : t.success) == Ue.R
                ? l.data
                : (console.error(
                    "useSocialMediaSupports:",
                    l == null ? void 0 : l.status,
                  ),
                  { success: Ue.zi });
            },
          });
          return a.isLoading ? null : a.data;
        }
        function yd(a) {
          const { editModel: t } = a;
          return (0, B.q3)(() => t.GetEventType()) == N.ajI
            ? (0, e.jsx)(Td, { editModel: t })
            : (0, e.jsx)(Dd, { editModel: t });
        }
        function Dd(a) {
          const { editModel: t } = a,
            n = t.GetCurEditLanguage(),
            [i, l, o, r] = (0, B.q3)(() => [
              t.GetName(n) || "",
              t.GetSummary(n) || "",
              t.GetDescription(n) || "",
              t.GetImageURL("capsule", n) || null,
            ]),
            d = l || $.lh.GenerateSummaryFromText(o);
          return (0, e.jsx)(zi, {
            editModel: t,
            title: i,
            titleTip: (0, s.we)("#Sale_DefaultSocialModule_DefaultTitle"),
            summary: d,
            summaryTip: (0, s.we)("#Sale_DefaultSocialModule_DefaultDesc"),
            imageUrl: r,
            socialMediaLinksEditor: !0,
          });
        }
        function Td(a) {
          const { editModel: t } = a,
            [n, i] = (0, oe.TB)(t.GetClanAccountID());
          return (0, e.jsx)(zi, {
            editModel: t,
            title: i.curator_title,
            titleTip: (0, s.we)(
              "#Sale_DefaultSocialModule_DefaultTitle_CreatorHome",
            ),
            summary: i.curator_description,
            summaryTip: (0, s.we)(
              "#Sale_DefaultSocialModule_DefaultDesc_CreatorHome",
            ),
            imageUrl: i.avatar_full_url,
            smallImage: !0,
          });
        }
        function zi(a) {
          const {
              editModel: t,
              title: n,
              titleTip: i,
              summary: l,
              summaryTip: o,
              imageUrl: r,
              socialMediaLinksEditor: d,
              smallImage: m,
            } = a,
            c = t.GetEventModel(),
            [v, h] = (0, B.q3)(() => [
              c.GetSaleSectionsByType("social_share") || [],
              c.jsondata.sale_default_social_media_disabled,
            ]),
            _ = (b) => {
              (c.jsondata.sale_default_social_media_disabled = !b),
                t.SetDirty(C.IQ.jsondata_sales);
            },
            u = v.length > 0,
            x = !(h || u);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("p", {
                children: (0, s.we)("#Sale_DefaultSocialModule_Description"),
              }),
              (0, e.jsx)(le.Eb, {
                clanSteamID: t.GetClanSteamID(),
                requireAdmin: !0,
                children: (0, e.jsx)("p", {
                  className: yt().DefaultSocialOverrideMsg,
                  children: (0, s.we)(
                    u
                      ? "#Sale_DefaultSocialModule_DisabledByOverride"
                      : "#Sale_DefaultSocialModule_Override",
                  ),
                }),
              }),
              x &&
                (0, e.jsxs)("div", {
                  className: yt().SocialShareCtn,
                  children: [
                    (0, e.jsx)("img", {
                      className: (0, j.A)(
                        yt().DefaultSocialImgCtn,
                        m && yt().Small,
                      ),
                      src: r,
                    }),
                    (0, e.jsxs)("div", {
                      className: yt().SocialShareText,
                      children: [
                        (0, e.jsxs)("div", {
                          className: yt().SocialTitle,
                          children: [
                            n,
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("span", { children: i }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: yt().SocialDesc,
                          children: [
                            l,
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("span", { children: o }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              (0, e.jsx)(g.RF, {
                onChange: _,
                label: (0, s.we)("#Sale_DefaultSocialModule_Toggle"),
                checked: x,
                disabled: u,
              }),
              !d && (0, e.jsx)(Id, { editModel: t }),
            ],
          });
        }
        function Id(a) {
          const { editModel: t } = a,
            [n, i] = (0, E.useState)(() => {
              var l;
              return (
                ((l = t.GetEventModel().jsondata.sale_social_media_items) ==
                null
                  ? void 0
                  : l.length) > 0
              );
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("p", {
                children: (0, s.we)("#Sale_DefaultSocialModule_LinkDesc"),
              }),
              n
                ? (0, e.jsx)(Ad, { editModel: t })
                : (0, e.jsx)(g.RF, {
                    onChange: () => i(!0),
                    label: (0, s.we)(
                      "#Sale_DefaultSocialModule_EnableSocialMediaLink",
                    ),
                    checked: n,
                  }),
            ],
          });
        }
        function Ad(a) {
          const { editModel: t } = a,
            n = wd();
          (0, E.useEffect)(() => {
            const r = t.GetEventModel().jsondata;
            r.sale_social_media_items || (r.sale_social_media_items = []);
          }, [t]);
          const i = (0, B.q3)(
              () => t.GetEventModel().jsondata.sale_social_media_items || [],
            ),
            [l, o] = (0, E.useState)(() => i);
          return n
            ? n.success != Ue.R
              ? (0, e.jsx)("div", {
                  className: yt().ErrorContainer,
                  children: (0, e.jsx)("div", {
                    className: yt().ErrorText,
                    children: (0, s.we)("#GrantAwardError_Busy"),
                  }),
                })
              : (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(Ui, {
                      rgValidationData: n.rgValidationData,
                      rgSupportedSocialMediaTypes:
                        n.rgSupportedSocialMediaTypes,
                      rgSocialMediaItems: l,
                      fnSetItems: (r) => {
                        const d = n.rgValidationData;
                        (t.GetEventModel().jsondata.sale_social_media_items = r
                          .filter((m) => !!m.link)
                          .filter((m) => Hi(m, d[m.type]).bValid)),
                          t.SetDirty(C.IQ.jsondata_sales),
                          o(r);
                      },
                    }),
                    i.length == 0 &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#Sale_DefaultSocialModule_NoLinks",
                        ),
                      }),
                  ],
                })
            : (0, e.jsx)(Z.t, {
                string: (0, s.we)("#Loading"),
                position: "center",
              });
        }
        var Gd = p(54345),
          Ze = p(49199),
          Nd = p(25518),
          Bd = p(4748),
          Md = p(89084),
          Ld = p(45638),
          sn = p(32093),
          on = p(19619),
          Vi = Object.defineProperty,
          Od = Object.getOwnPropertyDescriptor,
          Pd = (a, t, n) =>
            t in a
              ? Vi(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          Ta = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Od(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Vi(t, n, l), l;
          },
          Ia = (a, t, n) => Pd(a, typeof t != "symbol" ? t + "" : t, n);
        const qt = class kt {
          constructor() {
            Ia(this, "m_mapNewsCurators", new Map()),
              Ia(this, "m_bIsLoadComplete", !1),
              Ia(this, "m_mapLangToNewsCurators", new Map()),
              Ia(this, "m_LoadingPromise", null),
              (0, Y.Gn)(this);
          }
          static Get() {
            return (
              kt.s_newsCuratorStore ||
                ((kt.s_newsCuratorStore = new kt()),
                (kt.s_newsCuratorStore.m_LoadingPromise =
                  kt.s_newsCuratorStore.Init()),
                (window.g_NewsCuratorStore = kt.s_newsCuratorStore)),
              kt.s_newsCuratorStore
            );
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
            s.A0.GetLanguageListForRealms([D.TS.EREALM]).forEach((o) =>
              this.m_mapLangToNewsCurators.set(o, []),
            );
            const n = D.TS.STORE_BASE_URL + "events/ajaxgetnewscurators";
            let i = { origin: self.origin };
            const l = await pe().get(n, { params: i });
            (0, Y.h5)(() => {
              l.data && l.data.success && this.HandleCuratorResponse(l.data),
                (this.m_bIsLoadComplete = !0);
            });
          }
          HandleCuratorResponse(t) {
            var n;
            if (
              (t.groupvanityinfo && oe.ac.RegisterClanData(t.groupvanityinfo),
              t.newscuratorinfo)
            )
              for (const i of t.newscuratorinfo) {
                if (this.m_mapNewsCurators.has(i.clanAccountID)) continue;
                this.m_mapNewsCurators.set(i.clanAccountID, i);
                const l = oe.ac.GetClanInfoByClanAccountID(i.clanAccountID);
                l &&
                  ((n = this.m_mapLangToNewsCurators.get(l.rss_language)) ==
                    null ||
                    n.push(i));
              }
          }
        };
        Ia(qt, "s_newsCuratorStore"),
          Ta([Y.sH], qt.prototype, "m_mapNewsCurators", 2),
          Ta([Y.sH], qt.prototype, "m_bIsLoadComplete", 2),
          Ta([Y.sH], qt.prototype, "m_mapLangToNewsCurators", 2),
          Ta([Y.EW], qt.prototype, "allNewsCurators", 1),
          Ta([Y.XI], qt.prototype, "HandleCuratorResponse", 1);
        let Rd = qt;
        var Wi = p(48473),
          kd = p(16345),
          Dt = p.n(kd),
          Qi = Object.defineProperty,
          Fd = Object.getOwnPropertyDescriptor,
          Ud = (a, t, n) =>
            t in a
              ? Qi(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          Hd = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Fd(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Qi(t, n, l), l;
          },
          ln = (a, t, n) => Ud(a, typeof t != "symbol" ? t + "" : t, n);
        function rn(a) {
          const t = new Set();
          return (
            (a.indexOf("games") >= 0 || a.indexOf("dlc") >= 0) && t.add("apps"),
            a.indexOf("curators") >= 0 && t.add("curators"),
            t
          );
        }
        function zd(a) {
          return a == "game" || a == "software"
            ? "games"
            : a == "dlc" || a == "music"
              ? "dlc"
              : null;
        }
        const Vd = 300;
        class Yi extends E.Component {
          constructor() {
            super(...arguments),
              ln(this, "state", {
                strSearchString: "",
                rgAppSuggestions: null,
                rgCuratorSuggestions: null,
              }),
              ln(this, "m_nHighestSentRequestID", 0),
              ln(
                this,
                "m_mapHighestReceivedRequestIDFromBackEnd",
                new Map([
                  ["apps", 0],
                  ["curators", 0],
                ]),
              ),
              ln(this, "m_timerForChange", new Wa.LU());
          }
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
            const n = rn(this.props.rgCorporaToSearch);
            n.has("apps") && this.GetAppSuggestionsFromServer(t),
              n.has("curators") && this.GetCuratorSuggestions(t);
          }
          async GetCuratorSuggestions(t) {
            var n;
            const i = Rd.Get().allNewsCurators,
              l = [];
            for (const o of i) {
              const r = oe.ac.GetClanInfoByClanAccountID(o.clanAccountID),
                d = {
                  corpus: "curators",
                  id: o.clanAccountID,
                  name: r == null ? void 0 : r.group_name,
                  img: r == null ? void 0 : r.avatar_full_url,
                };
              if (
                (
                  ((n = r == null ? void 0 : r.group_name) == null
                    ? void 0
                    : n.toLocaleLowerCase()) || ""
                ).indexOf(t) >= 0
              ) {
                if (
                  (this.props.fnFilterSuggestion &&
                    !this.props.fnFilterSuggestion(d)) ||
                  on.Fm.Get().BIsIgnoringCurator(r.clanAccountID)
                )
                  continue;
                const c = on.Fm.Get().BIsFollowingCurator(r.clanAccountID),
                  v = (0, e.jsx)(
                    Ji,
                    {
                      suggestion: d,
                      fnOnSelected: this.props.fnOnSelected,
                      bShowFollowingLabel: c,
                    },
                    "curatorsug_" + d.id,
                  );
                l.push(
                  this.props.fnDecorateSuggestion
                    ? this.props.fnDecorateSuggestion(d, v)
                    : v,
                );
              }
            }
            this.m_mapHighestReceivedRequestIDFromBackEnd.set(
              "curators",
              this.m_nHighestSentRequestID,
            ),
              this.setState({ rgCuratorSuggestions: l });
          }
          async GetAppSuggestionsFromServer(t) {
            var n;
            const i = this.m_nHighestSentRequestID,
              l = [];
            this.props.rgCorporaToSearch.indexOf("games") >= 0 &&
              (l.push("game"), l.push("software")),
              this.props.rgCorporaToSearch.indexOf("dlc") >= 0 &&
                (l.push("dlc"), l.push("music"));
            const o = {
                cc: D.TS.COUNTRY,
                l: D.TS.LANGUAGE,
                realm: sn.TU.k_ESteamRealmGlobal,
                origin: self.origin,
                f: "jsonfull",
                term: t.replace(" ", "+"),
                require_type: l.join(","),
                excluded_tags: on.Fm.Get().GetExcludedTagsSortedByID(),
                excluded_content_descriptors:
                  on.Fm.Get().ExcludedContentDescriptor,
              },
              r = `${D.TS.STORE_BASE_URL}search/suggest`,
              d = await pe().get(r, { params: o, withCredentials: !0 });
            if (i < this.m_mapHighestReceivedRequestIDFromBackEnd.get("apps"))
              return;
            this.m_mapHighestReceivedRequestIDFromBackEnd.set("apps", i);
            let m;
            (n = d == null ? void 0 : d.data) != null &&
              n.length &&
              (m = d.data.map((c) => {
                const v = { corpus: zd(c.type), ...c, id: parseInt(c.id) };
                if (
                  this.props.fnFilterSuggestion &&
                  !this.props.fnFilterSuggestion(v)
                )
                  return null;
                const h = (0, e.jsx)(
                  Ji,
                  { suggestion: v, fnOnSelected: this.props.fnOnSelected },
                  v.type + v.id,
                );
                return this.props.fnDecorateSuggestion
                  ? this.props.fnDecorateSuggestion(v, h)
                  : h;
              })),
              this.setState({ rgAppSuggestions: m });
          }
          async UpdateSuggestions(t) {
            const n =
              t.target.value && t.target.value.trim().toLocaleLowerCase();
            if ((this.m_nHighestSentRequestID++, !(n != null && n.length))) {
              Array.from(rn(this.props.rgCorporaToSearch)).forEach((i) =>
                this.m_mapHighestReceivedRequestIDFromBackEnd.set(
                  i,
                  this.m_nHighestSentRequestID,
                ),
              ),
                this.m_timerForChange.Cancel(),
                this.setState({ strSearchString: "" }),
                this.ResetSuggestions();
              return;
            }
            this.setState({ strSearchString: n }),
              this.m_timerForChange.Schedule(Vd, () =>
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
            const i = 10;
            let l = t ? t.length : i,
              o = n ? n.length : i;
            return (
              l + o > i && (l = i - Math.min(o, 2)),
              (o = i - l),
              (t = t == null ? void 0 : t.slice(0, l)),
              (n = n == null ? void 0 : n.slice(0, o)),
              { rgAppSuggestions: t, rgCuratorSuggestions: n }
            );
          }
          render() {
            const {
                strLabel: t,
                focusOnMount: n,
                rgCorporaToSearch: i,
                strResultsClass: l,
              } = this.props,
              { strSearchString: o } = this.state,
              { rgAppSuggestions: r, rgCuratorSuggestions: d } =
                this.GetLimitedSuggestions(),
              m = (o == null ? void 0 : o.length) > 0,
              c = (r == null ? void 0 : r.length) > 0,
              v = (d == null ? void 0 : d.length) > 0,
              h = rn(i).size > 1,
              _ =
                h &&
                c &&
                (0, s.we)(
                  i.indexOf("dlc") >= 0
                    ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                    : "#EventCalendar_SearchResultsHeader_GameSection",
                ),
              u = Array.from(rn(i)).some(
                (b) =>
                  this.m_nHighestSentRequestID >
                  this.m_mapHighestReceivedRequestIDFromBackEnd.get(b),
              ),
              x = !v && !c && !u;
            return (0, e.jsxs)("div", {
              className: Dt().SuggestContainer,
              children: [
                (0, e.jsx)(g.pd, {
                  type: "text",
                  label: t,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: m,
                  focusOnMount: n,
                }),
                m &&
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(Dt().Results, l),
                    children: [
                      c &&
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              h &&
                                (0, e.jsx)("div", {
                                  className: Dt().ResultSectionHeader,
                                  children: _,
                                }),
                              r,
                            ],
                          },
                          "game-suggestions",
                        ),
                      v &&
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              h &&
                                (0, e.jsx)("div", {
                                  className: Dt().ResultSectionHeader,
                                  children: (0, s.we)(
                                    "#EventCalendar_SearchResultsHeader_CuratorSection",
                                  ),
                                }),
                              d,
                            ],
                          },
                          "curator-suggestions",
                        ),
                      x &&
                        (0, e.jsx)(
                          "div",
                          {
                            className: Dt().EmptyResults,
                            children: (0, s.we)(
                              "#EventCalendar_GameSearch_NoneFound",
                            ),
                          },
                          "empty-results",
                        ),
                      u && (0, e.jsx)(Z.t, { size: "small" }),
                    ],
                  }),
              ],
            });
          }
        }
        Hd([X.oI], Yi.prototype, "UpdateSuggestions", 1);
        const Ji = (a) =>
          (0, e.jsxs)(
            "div",
            {
              className: Dt().ResultRow,
              onClick: () => a.fnOnSelected(a.suggestion),
              children: [
                (0, e.jsx)("img", {
                  src: a.suggestion.img,
                  className: Dt().AvatarImage,
                }),
                (0, e.jsxs)("div", {
                  className: Dt().GameName,
                  children: [" ", (0, Wi.EK)(a.suggestion.name), " "],
                }),
                a.bShowFollowingLabel &&
                  (0, e.jsx)("div", {
                    className: Dt().Label,
                    children: (0, s.we)("#EventCalendar_FollowingCurator"),
                  }),
              ],
            },
            `suggestion-${a.suggestion.id}`,
          );
        function Wd(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, B.q3)(() => n.jsondata.associated_appid || 0),
            [l, o] = (0, E.useState)(!!i);
          return n.appid
            ? null
            : l
              ? (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("div", {
                      className: f().EventEditorTextTitleCtn,
                      children: [
                        (0, e.jsx)("span", {
                          className: f().EventEditorTextTitle,
                          children: (0, s.we)("#EventEditor_Associated_App"),
                        }),
                        (0, e.jsx)(Q.o, {
                          tooltip: (0, s.we)(
                            "#EventEditor_Associated_App_ttip",
                          ),
                          className: f().tooltip_Ctn,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: f().InputBorder,
                      children: (0, e.jsx)("input", {
                        type: "number",
                        className: (0, j.A)(
                          de.EventEditorTitleInput,
                          de.Subtitle,
                        ),
                        value: i,
                        onChange: (r) => {
                          const d = Number.parseInt(r.currentTarget.value);
                          d !== n.jsondata.associated_appid &&
                            ((n.jsondata.associated_appid = d || void 0),
                            t.SetDirty(C.IQ.description));
                        },
                      }),
                    }),
                  ],
                })
              : (0, e.jsx)(g.Yh, {
                  checked: l,
                  onChange: o,
                  label: (0, s.we)("#EventEditor_Associated_App_Question"),
                  tooltip: (0, s.we)("#EventEditor_Associated_App_ttip"),
                });
        }
        var Qd = p(56585),
          Aa = p(77128),
          Yd = p(6864),
          Jd = p(78606),
          qi = p.n(Jd),
          Ga = p(72609);
        function qd(a) {
          return (0, e.jsx)("div", {
            className: qi().HighlightBox,
            children: (0, s.oW)(
              "#PartnerEvent_MM_TitleTip",
              (0, e.jsx)("i", {}),
            ),
          });
        }
        function Kd(a) {
          return (0, e.jsxs)("div", {
            className: qi().HighlightBox,
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
                  href: `${Ga.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                  children: (0, s.we)("#PartnerEvent_MM_LearnMore"),
                }),
              }),
            ],
          });
        }
        function Zd(a) {
          const t = E.useRef(void 0),
            { editModel: n, bCanManuallyTagAssociatedApps: i } = a,
            l = E.useCallback((r, d) => {
              t.current && t.current(r, d);
            }, []),
            o = (0, B.q3)(() => n.BHasTag("vo_marketing_message"));
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Xd, { editModel: n }),
              (0, e.jsx)(Ki, { editModel: n }),
              (0, e.jsx)($d, { editModel: n }),
              (0, e.jsx)(ec, { editModel: n }),
              !!i && (0, e.jsx)(tc, { editModel: n }),
              (0, e.jsx)(il, { editModel: n }),
              (0, e.jsx)(Wd, { editModel: n }),
              o && (0, e.jsx)(Kd, {}),
              (0, e.jsxs)("div", {
                className: f().Columns,
                children: [
                  (0, e.jsx)(sc, { editModel: n, refOnInsertImage: t }),
                  (0, e.jsx)(oc, { editModel: n, fnInsertImage: l }),
                ],
              }),
            ],
          });
        }
        function Xd(a) {
          const { editModel: t } = a,
            n = (0, Qd.IB)(a.editModel.GetClanSteamID().ConvertTo64BitString()),
            i = n.isSuccess && !!n.data.crowdin_project_id;
          return (0, e.jsx)("div", {
            children: (0, e.jsx)("div", {
              className: f().FlexColumnContainer,
              children: (0, e.jsxs)("div", {
                className: Aa.LanguageControlsCtn,
                children: [
                  (0, s.we)("#EventEditor_LangaugeDesc"),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(f().FlexRowContainer, Aa.ToolContainer),
                    children: [
                      (0, e.jsx)(zt.$A, { editModel: t }),
                      (0, e.jsx)(Jo, { editModel: t }),
                    ],
                  }),
                  i && (0, e.jsx)(Yd.s, { editModel: a.editModel }),
                ],
              }),
            }),
          });
        }
        function Ki(a) {
          const { editModel: t } = a,
            [n, i] = (0, B.q3)(() => [
              t.GetName(t.GetCurEditLanguage()) || "",
              t.GetEventType(),
            ]),
            l = n.length >= $.dm,
            o = (0, B.q3)(() => t.BHasTag("vo_marketing_message"));
          let r = (0, s.we)("#EventEditor_EventTitle"),
            d = (0, s.we)("#EventEditor_Title_General_ttip");
          return (
            i == N.uYK
              ? (r = (0, s.we)("#EventEditor_AnnouncementTitle"))
              : i == N.ajI &&
                ((r = (0, s.we)("#EventEditor_CreatorHomeTitle")),
                (d = (0, s.we)("#EventEditor_Title_CreatorHome_ttip"))),
            (0, e.jsxs)(e.Fragment, {
              children: [
                o && (0, e.jsx)(qd, {}),
                (0, e.jsxs)("div", {
                  className: f().EventEditorTextTitle,
                  children: [
                    r,
                    !!l &&
                      (0, e.jsx)("span", {
                        className: f().EventEditorTextTitleLengthInfo,
                        children: (0, s.we)(
                          "#EventEditor_EventTitle_Max_Characters_Reached",
                          $.dm,
                        ),
                      }),
                    (0, e.jsx)(Q.o, { tooltip: d, className: f().tooltip_Ctn }),
                    (0, e.jsx)("span", {
                      className: (0, j.A)(
                        de.CharactorRemaining,
                        l ? de.CharactorExhausted : "",
                      ),
                      children: (0, s.we)(
                        "#EventEditor_Input_Characters_Left",
                        $.dm - n.length,
                      ),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().InputBorder,
                  children: (0, e.jsx)("input", {
                    type: "text",
                    className: (0, j.A)({
                      [de.EventEditorTitleInput]: !0,
                      [de.MainTitle]: !0,
                      [de.EventEditorInputMaxLength]: l,
                    }),
                    value: n,
                    placeholder: (0, s.we)("#EventEditor_Name_Placeholder"),
                    onFocus: (m) => {
                      var c;
                      return (c = m == null ? void 0 : m.target) == null
                        ? void 0
                        : c.select();
                    },
                    onChange: (m) => {
                      var c;
                      return t.SetName(
                        t.GetCurEditLanguage(),
                        ((c = m == null ? void 0 : m.currentTarget) == null
                          ? void 0
                          : c.value) || "",
                      );
                    },
                    maxLength: $.dm,
                  }),
                }),
              ],
            })
          );
        }
        function $d(a) {
          const { editModel: t } = a,
            n = (0, B.q3)(() => t.GetSubTitle(t.GetCurEditLanguage()) || ""),
            i = n.length >= $.Pd;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: f().EventEditorTextTitleCtn,
                children: [
                  (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_Event_SubTitle"),
                  }),
                  (0, e.jsx)("span", {
                    className: f().EventEditorTextTitleLengthInfo,
                    children: (0, s.we)(
                      i
                        ? "#EventEditor_Event_SubTitle_Details_Reached"
                        : "#EventEditor_Event_SubTitle_Details",
                      $.Pd,
                    ),
                  }),
                  (0, e.jsx)(Q.o, {
                    tooltip: (0, s.we)(
                      "#EventEditor_SubTitle_General_ttip",
                      $.Pd,
                    ),
                    className: f().tooltip_Ctn,
                  }),
                  (0, e.jsx)("span", {
                    className: (0, j.A)(
                      de.CharactorRemaining,
                      i ? de.CharactorExhausted : "",
                    ),
                    children: (0, s.we)(
                      "#EventEditor_Input_Characters_Left",
                      $.Pd - n.length,
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: f().InputBorder,
                children: (0, e.jsx)("input", {
                  type: "text",
                  className: (0, j.A)(
                    de.EventEditorTitleInput,
                    de.Subtitle,
                    i ? de.EventEditorInputMaxLength : "",
                  ),
                  value: n,
                  placeholder: (0, s.we)(
                    "#EventEditor_Name_SubTitle_Placeholder",
                  ),
                  onFocus: (l) => {
                    var o;
                    return (o = l == null ? void 0 : l.target) == null
                      ? void 0
                      : o.select();
                  },
                  onChange: (l) => {
                    var o;
                    return t.SetSubTitle(
                      t.GetCurEditLanguage(),
                      ((o = l == null ? void 0 : l.currentTarget) == null
                        ? void 0
                        : o.value) || "",
                    );
                  },
                  maxLength: $.Pd,
                }),
              }),
            ],
          });
        }
        function ec(a) {
          const { editModel: t } = a,
            [n, i] = (0, B.q3)(() => [
              t.GetSummary(t.GetCurEditLanguage()) || "",
              t.GetDescription(t.GetCurEditLanguage()) || "",
            ]);
          let l = "";
          n.trim().length == 0 &&
            (i.length == 0
              ? (l = (0, s.we)("#EventEditor_Summary_Placeholder", $.p$))
              : (l =
                  (0, s.we)("#EventEditor_Summary_Autogenerated") +
                  $.lh.GenerateSummaryFromText(i)));
          let o = n.length >= $.p$;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: de.EventEditorInputPaneContents,
                children: [
                  (0, e.jsxs)("div", {
                    className: f().EventEditorTextTitleCtn,
                    children: [
                      (0, e.jsx)("span", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#EventEditor_Summary_Title"),
                      }),
                      (0, e.jsx)("span", {
                        className: f().EventEditorTextTitleLengthInfo,
                        children: (0, s.we)(
                          o
                            ? "#EventEditor_Summary_Title_Length_Reached"
                            : "#EventEditor_Summary_Title_Length",
                          $.p$,
                        ),
                      }),
                      (0, e.jsx)(Q.o, {
                        tooltip: (0, s.we)("#EventEditor_Summary_Ttip", $.p$),
                        className: f().tooltip_Ctn,
                      }),
                      (0, e.jsx)("span", {
                        className: (0, j.A)(
                          de.CharactorRemaining,
                          o ? de.CharactorExhausted : "",
                        ),
                        children: (0, s.we)(
                          "#EventEditor_Input_Characters_Left",
                          $.p$ - n.length,
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsx)("textarea", {
                    className: (0, j.A)(
                      de.EventEditorTitleInput,
                      de.Summary,
                      o ? de.EventEditorInputMaxLength : "",
                    ),
                    value: n,
                    placeholder: l,
                    onFocus: (r) => {
                      var d;
                      return (d = r == null ? void 0 : r.target) == null
                        ? void 0
                        : d.select();
                    },
                    onChange: (r) => {
                      var d;
                      return t.SetSummary(
                        t.GetCurEditLanguage(),
                        ((d = r == null ? void 0 : r.currentTarget) == null
                          ? void 0
                          : d.value) || "",
                      );
                    },
                    maxLength: $.p$,
                    cols: 40,
                    rows: 2,
                  }),
                ],
              }),
              (0, e.jsx)("div", { className: f().ClearThings }),
            ],
          });
        }
        function tc(a) {
          const { editModel: t } = a;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: f().EventEditorTextTitleCtn,
                children: [
                  (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_ReferencedAppIDs_Header"),
                  }),
                  (0, e.jsx)(Q.o, {
                    tooltip: (0, s.we)("#EventEditor_ReferencedAppIDs_Tooltip"),
                    className: f().tooltip_Ctn,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: de.SaleImportURL,
                children: (0, e.jsx)(Yi, {
                  strLabel: (0, s.we)(
                    "#EventEditor_ReferencedAppIDs_SearchLabel",
                  ),
                  fnFilterSuggestion: (n) =>
                    !t.GetReferencedAppIDArray().includes(Number(n.id)),
                  fnOnSelected: (n) => {
                    t.GetReferencedAppIDArray().includes(Number(n.id)) ||
                      (t.GetReferencedAppIDArray().push(Number(n.id)),
                      t.SetDirty(C.IQ.jsondata_other));
                  },
                  rgCorporaToSearch: ["games", "dlc"],
                }),
              }),
              t.GetReferencedAppIDArray().length > 0 &&
                (0, e.jsx)(Vt.A, {
                  items: t.GetReferencedAppIDArray(),
                  onDelete: (n) => {
                    t.GetReferencedAppIDArray().splice(n),
                      t.SetDirty(C.IQ.jsondata_other);
                  },
                  onReorder: () => t.SetDirty(C.IQ.jsondata_other),
                  render: (n) =>
                    (0, e.jsx)(ac, { appid: n }, `suggestion-${n}`),
                }),
            ],
          });
        }
        function ac(a) {
          const { appid: t } = a,
            [n] = (0, Ie.t7)(t, {});
          return (0, e.jsx)("div", {
            className: de.ResultRow,
            children: (0, e.jsxs)("div", {
              className: de.GameName,
              children: [
                " ",
                (0, Wi.EK)((n == null ? void 0 : n.GetName()) || "") +
                  ` (${t})`,
                " ",
              ],
            }),
          });
        }
        const nc = E.lazy(() => p.e(7257).then(p.bind(p, 27257)));
        function sc(a) {
          const { editModel: t, refOnInsertImage: n } = a,
            i = (0, ui.LJ)(),
            [l, o] = ic(t),
            r = (0, B.q3)(() => t.GetEventType()),
            d = (0, X.QS)(
              (c) => {
                if (!c) return;
                const v = (h, _) => (0, Md.fW)(c, h, _);
                return (
                  (n.current = v),
                  () => {
                    n.current == v && (n.current = void 0);
                  }
                );
              },
              [n],
            ),
            m = E.useMemo(() => {
              const c = D.iA.is_support;
              return (0, Nd.BY)({
                bIncludeMedia: D.UF.CAN_UPLOAD_IMAGES,
                bIncludeValveOnly: c,
              });
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().LeftCol, Aa.DescEditorPadding),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children:
                  r == N.uYK
                    ? (0, s.we)("#EventEditor_DescriptionNews")
                    : (0, s.we)("#EventEditor_Description"),
              }),
              (0, e.jsxs)("label", {
                children: [
                  (0, e.jsx)("input", {
                    type: "checkbox",
                    checked: l,
                    onChange: (c) => o(c.currentTarget.checked),
                  }),
                  (0, s.we)("#EventEditor_UseVisualEditor"),
                ],
              }),
              l
                ? (0, e.jsx)(E.Suspense, {
                    children: (0, e.jsx)(nc, {
                      editModel: t,
                      refOnInsertImage: n,
                      limitBBCode: m,
                    }),
                  })
                : (0, e.jsx)(Ld.I, {
                    fnGetCurText: () =>
                      t.GetDescription(t.GetCurEditLanguage()),
                    fnOnTextChange: (c) => {
                      var v;
                      return t.SetDescription(
                        t.GetCurEditLanguage(),
                        ((v = c == null ? void 0 : c.currentTarget) == null
                          ? void 0
                          : v.value) || "",
                      );
                    },
                    fnSetText: (c) =>
                      t.SetDescription(t.GetCurEditLanguage(), c),
                    strPlaceholder: (0, s.we)(
                      "#EventEditor_Description_PlaceHolder",
                    ),
                    ref: d,
                    emoticonStore: i,
                    bSupportHTMLImport: !0,
                    showFormatHelp: "PartnerEvents",
                    limitBBCode: m,
                    classNameForTextArea: de.EventEditorDescription,
                    clanSteamID: t.GetClanSteamID(),
                  }),
            ],
          });
        }
        function ic(a) {
          const t = "partnerEventsRichEditorOptIn",
            [i, l] = E.useState(() => {
              var r;
              return ((r = localStorage.getItem(t)) != null ? r : "1") == "1";
            }),
            o = E.useCallback(
              (r) => {
                localStorage.setItem(t, r ? "1" : "0"), l(r);
              },
              [t],
            );
          return [i, o];
        }
        function oc(a) {
          const { editModel: t, fnInsertImage: n } = a,
            [i, l, o] = (0, B.q3)(() => [
              t.GetClanSteamID(),
              t.GetAppID(),
              t.GetIncludedRealmList(),
            ]);
          return D.UF.CAN_UPLOAD_IMAGES
            ? (0, e.jsxs)("div", {
                className: (0, j.A)(
                  f().RightCol,
                  Aa.DescEditorPadding,
                  Aa.ImagePickerCtn,
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: f().EventEditorTextTitle,
                    children: [
                      (0, s.we)("#ImagePicker_PreviousImages2"),
                      (0, e.jsx)(Q.o, {
                        tooltip: (0, s.we)("#ImagePicker_Images_ttip"),
                        className: f().tooltip_Ctn,
                      }),
                    ],
                  }),
                  (0, e.jsx)(Bd.G, {
                    bShowLightBox: !0,
                    appid: l,
                    clanSteamID: i,
                    imageInsertCallBack: n,
                    fnSetImageURL: t.SetImageURL,
                    rgRealmList: o,
                    fnLangHasData: t.BHasTitleImage,
                    fnGetImageHash: t.GetImageHashAndExt,
                    partnerEventStore: P.mh,
                  }),
                ],
              })
            : null;
        }
        function lc(a) {
          return (0, e.jsx)("div", {
            className: Ze.TutoralCtn,
            children: (0, e.jsxs)("div", {
              className: Ze.ExplanationCtn,
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
        function Zi(a) {
          const { editModel: t } = a,
            [n, i] = (0, B.q3)(() => [t.GetGID(), t.GetClanAccountID()]),
            l = !!n,
            { creatorHome: o } = (0, $e.FV)(i),
            r = null,
            d = o ? o.GetCreatorHomeURL(r) + "admin/curator_edit" : void 0,
            m = o ? o.GetCreatorHomeURL(r) + "#edit" : void 0;
          return (0, e.jsxs)("div", {
            className: Ze.CreatorHomeEditCtn,
            children: [
              (0, e.jsx)(Xi, { editModel: t }),
              (0, e.jsx)(Ki, { editModel: t }),
              l &&
                o &&
                (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("div", {
                    className: Ze.AdminLinkCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: Ze.LeftCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ze.Label,
                            children: (0, s.we)(
                              "#EventEditor_Event_CreatorHome_AdminAvatarLabel",
                            ),
                          }),
                          (0, e.jsx)("img", {
                            src: o.GetAvatarURLFullSize(),
                            className: Ze.AvatarImage,
                          }),
                          (0, e.jsx)("div", {
                            className: Ze.EditLink,
                            children: (0, s.oW)(
                              "#EventEditor_Event_CreatorHome_AdminLinkAvatarLabel",
                              m ? (0, e.jsx)("a", { href: m }) : void 0,
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: Ze.RightCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ze.Label,
                            children: (0, s.we)(
                              "#EventEditor_Event_CreatorHome_AdminTaglineLabel",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: Ze.Tagline,
                            children: o.GetTagLine(),
                          }),
                          (0, e.jsx)("div", {
                            className: Ze.EditLink,
                            children: (0, s.oW)(
                              "#EventEditor_Event_CreatorHome_AdminLinkTaglineLabel",
                              d ? (0, e.jsx)("a", { href: d }) : void 0,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              !l &&
                (0, e.jsx)("div", {
                  className: Ze.SaveWarningCtn,
                  children: (0, s.we)("#Sale_SaveFirst_CreatorHome"),
                }),
              (0, e.jsx)("br", {}),
            ],
          });
        }
        function Xi(a) {
          const { editModel: t } = a,
            [n, i, l] = (0, B.q3)(() => [
              t.GetGID(),
              t.GetClanAccountID(),
              t.BVisible() || t.BUnlisted(),
            ]),
            { creatorHome: o } = (0, $e.FV)(i),
            d = o
              ? o.GetCreatorHomeURL(null) + "admin/creatorhome_link"
              : void 0,
            c = (o == null ? void 0 : o.GetLinkedEventGID()) == n;
          return (0, e.jsxs)("div", {
            className: (0, j.A)(
              Ze.SelectedExplanationCtn,
              (!l || !c) && Ze.Warning,
            ),
            children: [
              !l &&
                (0, e.jsx)("div", {
                  children: (0, s.we)("#EventEditor_Event_CreatorHome_Hidden"),
                }),
              l &&
                !c &&
                (0, e.jsx)("div", {
                  children: (0, s.oW)(
                    "#EventEditor_Event_CreatorHome_NotSelected",
                    (0, e.jsx)("b", {}),
                    d ? (0, e.jsx)("a", { href: d }) : void 0,
                  ),
                }),
              l &&
                c &&
                (0, e.jsx)("div", {
                  children: (0, s.oW)(
                    "#EventEditor_Event_CreatorHome_Selected",
                    d ? (0, e.jsx)("a", { href: d }) : void 0,
                  ),
                }),
            ],
          });
        }
        var rc = p(30976),
          dc = p(84865);
        function Hn(a) {
          const { editModel: t, mode: n } = a,
            [i, l] = (0, B.q3)(() => [t.GetGID(), t.GetEventType()]);
          return i
            ? (0, e.jsx)(dc.sn, {
                children: (0, e.jsx)(ur, {
                  children: (0, e.jsx)(cc, { editModel: t, mode: n }),
                }),
              })
            : l == N.ajI
              ? (0, e.jsx)(Zi, { editModel: t })
              : (0, e.jsx)("div", {
                  className: (0, j.A)(fe.SaleContainer, "SaleContainer"),
                  children: (0, s.we)("#Sale_SaveFirst"),
                });
        }
        function cc(a) {
          const { editModel: t, mode: n } = a,
            [i, l, o, r, d, m, c] = (0, B.q3)(() => {
              var ie;
              return [
                t.GetEventType(),
                t.GetEventModel().jsondata.sale_presenters,
                t.GetEventModel().jsondata,
                t.GetEventModel().clanSteamID,
                t.GetGID(),
                ((ie = t.GetEventModel().jsondata.sale_presenters) == null
                  ? void 0
                  : ie.length) > 0,
                t.BVisible(),
              ];
            }),
            { creatorHome: v } = (0, $e.FV)(r.GetAccountID()),
            { bRequiresHostDisclaimer: h } = (0, xe.lA)(r.GetAccountID(), d),
            _ = Mt.WN.includes(r.GetAccountID()),
            u = i == N.ajI;
          (0, E.useEffect)(() => {
            et.oq.Get().EnsureLoaded(t),
              !et.oq.Get().BHasExplicitSettings(t) &&
                t.GetSaleSectionCount() > 10 &&
                (0, et.TA)();
          }, [t]);
          const x = E.useCallback((ie) => {
              (0, et.Nx)(ie.strSectionId) && (0, et.mi)(ie.strSectionId);
            }, []),
            b = (0, le.Dd)(t.GetClanSteamID()),
            S = (0, le.Dd)(t.GetClanSteamID(), !0);
          if (
            !t.BIsSourceEventSaleEnabled() &&
            o.clone_from_event_gid &&
            o.clone_from_sale_enabled &&
            (!v || !v.BHasClanAccountFlagSet(ia.Wv.Jn))
          )
            return (0, e.jsxs)("div", {
              className: (0, j.A)(fe.SaleContainer, "SaleContainer"),
              children: [
                (0, e.jsx)("div", {
                  className: Wt.WarningStyles,
                  children: (0, s.we)("#Sale_CloneNotReady"),
                }),
                (0, e.jsx)(Gi, { mode: n }),
              ],
            });
          let y = "#Sale_title",
            L = "doc/marketing/event_tools/sales/tools";
          n == Ja
            ? ((y = "#Sale_UpdateLandingPage_title"),
              (L = "doc/marketing/event_tools/updatelandingpages/tools"))
            : n == qa &&
              ((y = "#Sale_CreatorHome_title"),
              (L = "doc/marketing/event_tools/creatorhome/tools"));
          const { bVisible: G } = (0, oe.Yp)(t.GetEventModel(), S),
            { bVisible: H } = (0, oe._5)(t.GetEventModel(), S),
            { bVisible: te } = (0, oe.Ao)(t.GetEventModel()),
            ce = G || H || (te && b);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(fe.SaleContainer, "SaleContainer"),
            children: [
              !u && (0, e.jsx)(Gi, { mode: n }),
              (0, e.jsxs)("div", {
                className: J.EventEditorTextTitleCtn,
                children: [
                  (0, e.jsx)("span", {
                    className: (0, j.A)(J.EventEditorTextTitle, J.FlexGrow),
                    children: (0, s.we)(y),
                  }),
                  (0, e.jsx)(O.uU, {
                    href: D.TS.PARTNER_BASE_URL + L,
                    className: (0, j.A)(J.doclink),
                    children: (0, e.jsx)("span", {
                      children: (0, s.we)("#Broadcast_documentation"),
                    }),
                  }),
                ],
              }),
              u && (0, e.jsx)(Zi, { editModel: t }),
              (0, e.jsxs)(fr, {
                children: [
                  !!(!_ && (!h || m)) &&
                    (0, e.jsx)(bi, {
                      clanSteamID: r,
                      gidClanEvent: d,
                      rgSalePresenters: l,
                      bIsEventVisible: c,
                      fnCleanSaleEventPresenters: () => {
                        (t.GetEventModel().jsondata.sale_presenters = void 0),
                          t.SetDirty(C.IQ.jsondata_sales);
                      },
                      bPublishTab: !1,
                    }),
                  (0, e.jsx)(xr, {}),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)(_d, { children: (0, e.jsx)(ld, {}) }),
                      (0, e.jsx)(sd, { editModel: t, onSelected: x }),
                      (0, e.jsx)(Fr, { editModel: t }),
                      u &&
                        (0, e.jsx)(wt, {
                          strSectionId: "SalePageEdit_CreatorHomeTutorial",
                          hasMinimize: !0,
                          strTitle: (0, s.we)("#Sale_PageCreatorHomeTutorial"),
                          children: (0, e.jsx)(lc, {}),
                        }),
                      ce &&
                        (0, e.jsx)(wt, {
                          strSectionId: "SalePageEdit_Config",
                          hasMinimize: !0,
                          strTitle: (0, s.we)("#Sale_PageConfigOptions"),
                          children: (0, e.jsx)(Br, {
                            salePage: G,
                            updateLandingPage: H,
                          }),
                        }),
                      (0, e.jsx)(uc, { ...a }),
                      (0, e.jsx)(wt, {
                        strSectionId: "SalePageEdit_AllArtworkCtn",
                        hasMinimize: !0,
                        strTitle: (0, s.we)(
                          u
                            ? "#Sale_Artwork_Sections_Page"
                            : "#Sale_Artwork_Sections",
                        ),
                        children: (0, e.jsx)(hr, { editModel: t }),
                      }),
                      (t.BHasTag("contenthub") ||
                        t.GetEventModel().BUsesContentHubForItemSource()) &&
                        (0, e.jsx)(wt, {
                          strSectionId: "SalePageEdit_ContentHub",
                          hasMinimize: !0,
                          strTitle: "Content Hub Settings",
                          strToolTip:
                            "Manage settings for content hubs, including overrides for specific hubs and hub-based sales.",
                          children: (0, e.jsx)(Ul, { editModel: t }),
                        }),
                      (0, e.jsx)(hc, { editModel: t }),
                      (0, e.jsx)(wt, {
                        strSectionId: "SalePageEdit_SocialModule",
                        hasMinimize: !0,
                        strTitle: (0, s.we)("#Sale_DefaultSocialModule"),
                        children: (0, e.jsx)(yd, { editModel: t }),
                      }),
                      (0, e.jsx)("div", { className: fe.SectionDivider }),
                      !u &&
                        (0, e.jsx)(wt, {
                          strSectionId: "SalePageEdit_BrowseMore",
                          strTitle: `(VO) ${(0, s.we)("#Sale_BrowseMore")}`,
                          valveOnlyClanSteamID: t.GetClanSteamID(),
                          requireAdmin: !0,
                          children: (0, e.jsx)(mc, { editModel: t }),
                        }),
                      !u &&
                        (0, e.jsx)(wt, {
                          strSectionId: "SalePageEdit_SubMenuEditor",
                          hasMinimize: !0,
                          strTitle: "(VO) Sub Menu Editor",
                          valveOnlyClanSteamID: t.GetClanSteamID(),
                          dataToCopy: Ln.E.k_EventData_SubMenu,
                          children: (0, e.jsx)(Gd.vk, { editModel: t }),
                        }),
                      (0, e.jsx)(wt, {
                        strSectionId: "SalePageEdit_CustomCSSCode",
                        hasMinimize: !0,
                        strTitle: "(VO) Custom CSS",
                        valveOnlyClanSteamID: t.GetClanSteamID(),
                        children: (0, e.jsx)(cd, { editModel: t }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function uc(a) {
          var t;
          const { editModel: n, mode: i } = a,
            [l, o, r, d] = (0, B.q3)(() => [
              n.GetEventType(),
              n.GetEventModel().clanSteamID,
              n.GetEventModel().GID,
              n.GetEventModel().jsondata.sale_creator_home_filter_listid,
            ]),
            m = (0, rc.a)(o.GetAccountID(), d),
            {
              bLoading: c,
              strExternalSaleEventType: v,
              fnSetExternalSaleEventType: h,
            } = (0, xe.g7)(o.GetAccountID(), r),
            _ = (0, Sd.iR)(n.GetEventModel());
          if (c) return (0, e.jsx)(Z.t, { size: "small" });
          const u = l == N.ajI;
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(wt, {
              strSectionId: "SalePageEdit_TaggedItems",
              hasMinimize: !0,
              strToolTip: (0, s.we)("#Sale_TagFilter_SectionTooltip"),
              strTitle: (0, s.we)(
                "#Sale_TaggedItemsSection",
                _
                  ? (t = m == null ? void 0 : m.length) != null
                    ? t
                    : 0
                  : n.GetEventModel().GetTaggedItems().length,
              ),
              children: [
                _ && (0, e.jsx)(Ni.w7, { editModel: n }),
                !_ && (0, e.jsx)(Ni.PT, { editModel: n }),
                !u &&
                  (0, e.jsxs)(le.Eb, {
                    clanSteamID: o,
                    children: [
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(fi, {
                        strExternalSaleEventType: v,
                        fnSetExternalSaleEventType: h,
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function hc(a) {
          var t;
          const { editModel: n } = a,
            i = n.GetCurEditLanguage(),
            l = n.GetEventModel(),
            [o, r, d, m] = (0, B.q3)(() => {
              let y = -1;
              const L = new Map();
              for (const [G, H] of l.GetSaleSections().entries())
                L.set(H.section_type, (L.get(H.section_type) || 0) + 1),
                  y == -1 && H.section_type == "tabs" && (y = G);
              return [l.GetSaleSections().length, L, y, (0, tn.dy)()];
            }),
            [c, v] = E.useState(""),
            h = (y) => {
              var L, G;
              const H =
                (L = c == null ? void 0 : c.trim().toLowerCase()) != null
                  ? L
                  : "";
              if (
                H.length == 0 ||
                ((G = y.internal_section_title) != null &&
                  G.toLowerCase().includes(H)) ||
                y.section_type.includes(H)
              )
                return !0;
              const te = (0, Bi.yO)(
                y,
                l,
                i,
                l.clanSteamID.GetAccountID(),
                ft.uF,
              );
              return typeof te == "string" && te.toLowerCase().includes(H);
            },
            _ =
              m !== void 0 ||
              ((t = c == null ? void 0 : c.trim()) == null
                ? void 0
                : t.length) > 0,
            u = l
              .GetSaleSections()
              .filter(
                (y, L) => (m === void 0 || L < d || (0, Oi.bF)(m, y)) && h(y),
              ),
            x = _c(u),
            b = (y, L) => {
              var G;
              const H = Fn.mj + y.unique_id,
                te = (0, Lt.vx)(y.section_type) && r.get(y.section_type) > 1;
              return (0, e.jsx)(
                Qt,
                {
                  strSectionId: H,
                  children: (0, e.jsx)(Lt.m, {
                    ref:
                      L == u.length - 1
                        ? (ce) => x(ce, u[L].unique_id)
                        : void 0,
                    index: L,
                    saleSection: y,
                    isDuplicateSingleton: te,
                    editModel: n,
                    editLanguage: i,
                  }),
                },
                Fn.mj + ((G = y.unique_id) != null ? G : L),
              );
            },
            S = (y, L) => {
              (0, Ot.yY)(n.GetEventModel().jsondata.sale_sections, y, L),
                n.SetDirty(C.IQ.jsondata_sales);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: fe.CustomSectionsTitle,
                children: [
                  (0, e.jsx)("div", {
                    className: J.EventEditorTextTitle,
                    children: (0, s.we)("#Sale_Sections_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: fe.EventEditorSectionSearchLabel,
                    children: (0, s.we)("#Sale_Sections_Search"),
                  }),
                  (0, e.jsx)(g.pd, {
                    type: "text",
                    value: c,
                    onChange: (y) => v(y.target.value),
                  }),
                ],
              }),
              o == 0
                ? (0, e.jsx)(pc, {})
                : (0, e.jsx)(Vt.A, {
                    items: u,
                    bDisabled: _,
                    onMove: S,
                    render: b,
                  }),
              (0, e.jsxs)("div", {
                id: "sale_editor_button_after_all_sections",
                className: fe.AddSectionBtnCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, j.A)(
                      J.SaleSectionHeader,
                      "SaleSectionHeader",
                    ),
                    children: (0, s.we)("#Sale_AddNewSection_Title"),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, s.we)("#Sale_AddNewSection_Desc"),
                  }),
                  (0, e.jsx)(ki, { editModel: n }),
                ],
              }),
            ],
          });
        }
        function pc(a) {
          return (0, e.jsxs)("div", {
            id: "NoSaleSections",
            className: (0, j.A)(fe.SaleSection, fe.InEditor),
            children: [
              (0, e.jsx)("div", {
                className: (0, j.A)(J.SaleSectionHeader, "SaleSectionHeader"),
                children: (0, s.we)("#Sale_SectionListPlaceholder_Header"),
              }),
              (0, e.jsx)("div", {
                className: fe.SaleSectionPlaceholder,
                children: (0, s.we)("#Sale_SectionListPlaceholder_Content"),
              }),
            ],
          });
        }
        function mc(a) {
          const { editModel: t } = a,
            n = t.GetEventModel().jsondata,
            [i, l, o, r] = (0, B.q3)(() => [
              n.sale_browsemore_url,
              n.sale_browsemore_color,
              n.sale_browsemore_bgcolor,
              n.sale_browse_more_button,
            ]),
            { openColorPicker: d } = (0, wa.p)(),
            m = (u) => {
              d(u, {
                color: l,
                onChange: (x) => _(x, "sale_browsemore_color"),
              });
            },
            c = (u) => {
              const { sale_browsemore_bgcolor: x } = t.GetEventModel().jsondata;
              d(u, {
                color: x,
                onChange: (b) => _(b, "sale_browsemore_bgcolor"),
              });
            },
            v = (u) => {
              (t.GetEventModel().jsondata.sale_browse_more_button = u),
                t.SetDirty(C.IQ.jsondata_sales);
            },
            h = (u) => {
              const x = t.GetEventModel().jsondata;
              (x[u.target.name] = u.target.value),
                t.SetDirty(C.IQ.jsondata_sales);
            },
            _ = (u, x) => {
              const b = t.GetEventModel().jsondata;
              (b[x] = u), t.SetDirty(C.IQ.jsondata_sales);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(g.RF, {
                onChange: v,
                label: (0, s.we)("#Sale_BrowseMore_Desc"),
                checked: r,
              }),
              r &&
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)(g.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_BrowseMore_URL"),
                      name: "sale_browsemore_url",
                      placeholder: (0, s.we)("#Sale_BrowseMore_URL"),
                      value: i,
                      onChange: h,
                    }),
                    (0, e.jsx)(g.$n, {
                      onClick: m,
                      className: J.EventEditorTextTitle,
                      style: { color: l, backgroundColor: o },
                      children: (0, s.we)("#Sale_Section_Label_Color"),
                    }),
                    (0, e.jsx)(g.$n, {
                      onClick: c,
                      className: J.EventEditorTextTitle,
                      style: { color: l, backgroundColor: o },
                      children: (0, s.we)("#Sale_Section_Background_Color"),
                    }),
                    (0, e.jsx)(ud.A, {
                      text: (0, s.we)("#Sale_SeeAllSpecials"),
                      url: "",
                      color: l,
                      bgcolor: o,
                    }),
                  ],
                }),
            ],
          });
        }
        function _c(a) {
          const t = a.map((o) => o.unique_id).join(","),
            [n, i] = E.useState(t);
          return (
            E.useEffect(() => {
              i(t);
            }, [t]),
            (o, r) => {
              if (!o) return;
              const d = n.length == 0 && r > 0,
                m = n + "," + r == t;
              (d || m) &&
                o.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          );
        }
        function vc(a, t) {
          const n = (0, ya.I)({
            queryKey: ["useSaleSectionAggregateData", a, t],
            queryFn: async () => {
              const i = me.b.InitFromClanID(t),
                l = `${Ga.TS.COMMUNITY_BASE_URL}gid/${i.ConvertTo64BitString()}/ajaxgetsalesectionstats?event_gid=${a}`,
                o = { event_gid: a };
              return (await pe().get(l, { params: o })).data.results || [];
            },
            enabled: !!(a && t),
          });
          return n.isLoading ? null : n.data;
        }
        function gc(a) {
          const { editModel: t } = a,
            n = (0, K.f1)(),
            [i, l, o] = (0, B.q3)(() => [
              t.BHasSaleEnabled(),
              t.BHidden(),
              t.GetEventStartTime(),
            ]);
          return !i || l || o > n
            ? (0, e.jsx)("div", {
                children: "Sale Page not visible or started. No stats to share",
              })
            : (0, e.jsx)(Sc, { ...a });
        }
        function Sc(a) {
          const { editModel: t } = a,
            n = vc(t.GetGID(), t.GetClanAccountID());
          return n
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(g.$n, {
                    onClick: () => {
                      const i = [];
                      i.push([
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
                        n.forEach((o) => {
                          i.push([
                            "" + o.feature,
                            (0, s.TW)(o.rtdate + 1440 * 60),
                            "" + o.total_impressions,
                            "" + o.total_views,
                            "" + o.total_owner_impressions,
                            "" + o.total_owner_views,
                            "" + o.total_wishlists,
                            "" + o.total_add_to_carts,
                            "" + o.total_ignores,
                          ]);
                        });
                      const l =
                        (t.GetName() + "_stats").replace(" ", "_") + ".csv";
                      $t.g.WriteCSVToFile(i, l);
                    },
                    children: "Export to CSV",
                  }),
                  (0, e.jsx)(Ec, { rgStats: n }),
                  (0, e.jsx)(fc, { rgStats: n }),
                ],
              })
            : (0, e.jsx)(Z.t, {});
        }
        function $i(a, t) {
          return !t || t == 0 ? "" : "" + ((a * 100) / t).toFixed(1);
        }
        function Kt(a) {
          return new Intl.NumberFormat((0, s.l4)(), {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(a);
        }
        function Ec(a) {
          const { rgStats: t } = a,
            n = (0, E.useMemo)(() => {
              const i = new Map();
              return (
                t.forEach((l) => {
                  if (i.has(l.feature)) {
                    const o = i.get(l.feature);
                    (o.total_views += l.total_views),
                      (o.total_impressions += l.total_impressions),
                      (o.total_owner_views += l.total_owner_views),
                      (o.total_owner_impressions += l.total_owner_impressions),
                      (o.total_wishlists += l.total_wishlists),
                      (o.total_ignores += l.total_ignores),
                      (o.total_add_to_carts += l.total_add_to_carts),
                      i.set(l.feature, o);
                  } else i.set(l.feature, { ...l });
                }),
                Array.from(i.values()).sort(
                  (l, o) => o.total_impressions - l.total_impressions,
                )
              );
            }, [t]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("h3", { children: "Total For Entire Sale" }),
              (0, e.jsx)(eo, { rgStats: n }),
            ],
          });
        }
        function eo(a) {
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
                            children: Kt(n.total_impressions),
                          }),
                          (0, e.jsx)("td", { children: Kt(n.total_views) }),
                          (0, e.jsx)("td", {
                            children: $i(n.total_views, n.total_impressions),
                          }),
                          (0, e.jsx)("td", {
                            children: Kt(n.total_owner_impressions),
                          }),
                          (0, e.jsx)("td", {
                            children: Kt(n.total_owner_views),
                          }),
                          (0, e.jsx)("td", { children: Kt(n.total_wishlists) }),
                          (0, e.jsx)("td", {
                            children: $i(
                              n.total_wishlists,
                              n.total_impressions,
                            ),
                          }),
                          (0, e.jsx)("td", {
                            children: Kt(n.total_add_to_carts),
                          }),
                          (0, e.jsx)("td", { children: Kt(n.total_ignores) }),
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
        function fc(a) {
          const { rgStats: t } = a,
            n = (0, E.useMemo)(() => {
              const i = new Set();
              return (
                t.forEach((l) => {
                  i.add(l.rtdate);
                }),
                Array.from(i).sort((l, o) => l - o)
              );
            }, [t]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("h1", { children: "By Each Date" }),
              n.map((i) => (0, e.jsx)(xc, { rgStats: t, rtDate: i }, "" + i)),
            ],
          });
        }
        function xc(a) {
          const { rgStats: t, rtDate: n } = a,
            i = (0, E.useMemo)(
              () =>
                t
                  .filter((l) => l.rtdate == n)
                  .sort((l, o) => o.total_impressions - l.total_impressions),
              [t, n],
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("h3", {
                children: ["Stats for: ", (0, s.TW)(n + 1440 * 60)],
              }),
              (0, e.jsx)(eo, { rgStats: i }),
            ],
          });
        }
        var bc = p(35076),
          jc = p(70377),
          Tt = p(25279);
        const dn = "vo_sale_store_capsules",
          zn = [
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
          Cc = zn.map((a) => a.artworkType);
        function wc(a) {
          return "#EventEditor_ArtworkType_" + a.artworkType;
        }
        function yc(a) {
          var t;
          return (t = zn.find((n) => n.artworkType === a)) == null
            ? void 0
            : t.type;
        }
        function Dc(a, t, n) {
          var i, l;
          return (l =
            (i = a == null ? void 0 : a[t]) == null ? void 0 : i[n]) != null
            ? l
            : null;
        }
        function Tc(a, t) {
          return t
            ? `${vt.TS.STORE_ITEM_BASE_URL}steam/clans/${a}/${t}`
            : void 0;
        }
        function Ic(a, t) {
          const n = a == null ? void 0 : a[t];
          return n
            ? Array.from(n.keys()).filter((i) => {
                var l;
                return !!((l = n[i]) != null && l.image);
              })
            : [];
        }
        function Ac(a, t, n, i) {
          var l;
          const o = Ot.$Y(
            [...((l = a == null ? void 0 : a[t]) != null ? l : [])],
            N.bP9,
            null,
          );
          return (o[n] = i), { ...a, [t]: o };
        }
        function Gc(a, t) {
          const n = { ...a };
          return delete n[t], n;
        }
        var Nc = p(5471),
          Bc = p(91261),
          Mc = p(47155),
          Na = p.n(Mc);
        function to(a, t) {
          return a.BHasSaleEnabled() && (0, oe.Yp)(a, t).bVisible;
        }
        function Lc(a, t) {
          return to(a.GetEventModel(), t) ? t || a.BHasTag(dn) : !1;
        }
        function Oc(a) {
          const { editModel: t } = a,
            n = (0, E.useCallback)(
              (r, d, m) => {
                (0, Y.h5)(() => {
                  const c = t.GetEventModel().jsondata;
                  (c.sale_store_capsules = Ac(c.sale_store_capsules, r, d, m)),
                    t.SetDirty(C.IQ.jsondata_image);
                });
              },
              [t],
            ),
            i = (0, E.useCallback)(
              (r) => {
                (0, Y.h5)(() => {
                  const d = t.GetEventModel().jsondata;
                  (d.sale_store_capsules = Gc(d.sale_store_capsules, r)),
                    t.SetDirty(C.IQ.jsondata_image);
                });
              },
              [t],
            ),
            l = (0, E.useCallback)(
              (r, d, m, c, v) => {
                const h = yc(v);
                if (!h) {
                  (0, fa.wT)(
                    !1,
                    "Unexpected artwork type for a sale store capsule: " + v,
                  );
                  return;
                }
                const _ = (0, jc.G)(r, d);
                _ != null && _.image
                  ? n(h, m, _)
                  : (0, fa.wT)(
                      !1,
                      "Sale store capsule conversion produced no image: " + r,
                    );
              },
              [n],
            ),
            o = (0, B.q3)(() => !t.BHasTag(dn));
          return (0, e.jsxs)("div", {
            className: (0, j.A)(
              _e().ArtworkSelectorContainer,
              o && f().ValveOnlyBackground,
            ),
            children: [
              (0, e.jsx)("div", {
                className: _e().Title,
                children:
                  (o ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_SaleStoreCapsules_Title"),
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(_e().SelectImageBlock, _e().Tips),
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
                className: (0, j.A)(_e().SelectImageBlock, Na().UploaderCtn),
                children: (0, e.jsx)(Nc.a, {
                  rgRealmList: t.GetIncludedRealmList(),
                  rgSupportArtwork: [...Cc],
                  strUploadAjaxURL: (0, bc.vH)(t.GetClanSteamID()),
                  fnOnUploadSuccess: l,
                  bTwoPhaseUpload: !0,
                  bDirectTempStorageUpload: !0,
                }),
              }),
              zn.map((r) =>
                (0, e.jsx)(
                  Pc,
                  {
                    editModel: t,
                    info: r,
                    fnSetCapsuleMedia: n,
                    fnClearCapsule: i,
                  },
                  r.type,
                ),
              ),
            ],
          });
        }
        function Pc(a) {
          const {
              editModel: t,
              info: n,
              fnSetCapsuleMedia: i,
              fnClearCapsule: l,
            } = a,
            o = (0, B.q3)(() => t.GetEventModel().jsondata.sale_store_capsules),
            r = t.GetClanAccountID(),
            d = (0, E.useCallback)(
              (v) => {
                var h;
                const _ = Dc(o, n.type, v);
                return _ ? Tc(r, (h = _.image_2x) != null ? h : _.image) : null;
              },
              [o, n.type, r],
            ),
            m = (0, E.useMemo)(() => Ic(o, n.type), [o, n.type]),
            c = Tt.Fj[n.artworkType];
          return (0, e.jsxs)("div", {
            className: Na().CapsuleCtn,
            children: [
              (0, e.jsxs)("div", {
                className: Na().CapsuleTitle,
                children: [
                  (0, s.we)(wc(n)),
                  (0, e.jsxs)("span", {
                    className: Na().CapsuleDimensions,
                    children: [
                      (0, Tt.qj)(c.width),
                      "px x ",
                      (0, Tt.qj)(c.height),
                      "px",
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(_e().SelectImageBlock, _e().Tips),
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
              (0, e.jsx)(Bc.z, {
                rgAssetLangs: m,
                fnGetAssetUrl: d,
                fnDeletAssetLang: (v) => i(n.type, v, null),
                fnDeleteAllAssets: () => l(n.type),
                imageClassname: Na().CapsulePreview,
                bVerifyAssets: !0,
              }),
            ],
          });
        }
        var Ba = p(34032),
          Rc = Object.defineProperty,
          kc = Object.getOwnPropertyDescriptor,
          Ge = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? kc(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Rc(t, n, l), l;
          };
        class Ce {
          constructor(t) {
            (this.m_editModel = void 0),
              (0, Y.Gn)(this),
              (this.m_editModel = t);
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
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetBroadcastForceBanner(t) {
            this.GetJSONData().broadcast_force_banner !== t &&
              ((this.GetJSONData().broadcast_force_banner = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetChangeSetting(t) {
            this.GetJSONData().broadcastChatSetting !== t &&
              ((this.GetJSONData().broadcastChatSetting = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetTitleToken(t) {
            this.GetJSONData().default_broadcast_title !== t &&
              ((this.GetJSONData().default_broadcast_title = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetCustomTitleLocalize(t, n) {
            this.GetJSONData().localized_broadcast_title[t] !== n &&
              ((this.GetJSONData().localized_broadcast_title[t] = n),
              (this.GetJSONData().localized_broadcast_title = [
                ...this.GetJSONData().localized_broadcast_title,
              ]),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          AddAccountToWhiteList(t) {
            const n = this.GetJSONData().broadcast_whitelist;
            n.includes(t) ||
              (n.push(t),
              (this.GetJSONData().broadcast_whitelist = [
                ...this.GetJSONData().broadcast_whitelist,
              ]),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
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
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetWhiteListAccountLanguage(t, n) {
            let i = this.GetJSONData().broadcast_whitelist.indexOf(t);
            if (i < 0) return;
            const l = this.GetJSONData().broadcast_whitelist;
            if (i < l.length) {
              if (!this.GetJSONData().broadcast_language)
                if (n != N.xPp)
                  this.GetJSONData().broadcast_language = new Array();
                else return;
              const o = this.GetJSONData().broadcast_language;
              if (o.length < i && n == N.xPp) return;
              for (; o.length <= i; ) o.push(N.xPp);
              if (o[i] != n) {
                for (o[i] = n; o.length > 0 && o[o.length - 1] == N.xPp; )
                  o.pop();
                o.length == 0
                  ? (this.GetJSONData().broadcast_language = void 0)
                  : (this.GetJSONData().broadcast_language = [
                      ...this.GetJSONData().broadcast_language,
                    ]),
                  this.m_editModel.SetDirty(C.IQ.jsondata_broadcast);
              }
            }
          }
          SetWhiteListAccountPriority(t, n) {
            const i = this.GetJSONData().broadcast_whitelist.indexOf(t);
            if (i < 0) return;
            const l = (0, Ot.$Y)(
              this.GetJSONData().broadcast_priority || [],
              i + 1,
              "",
            );
            for (l[i] = n; l.length > 0 && !l[l.length - 1]; ) l.pop();
            (this.GetJSONData().broadcast_priority = l),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast);
          }
          GetWhiteListAccountPriority(t, n) {
            const i = this.GetJSONData().broadcast_whitelist.indexOf(t);
            return i < 0 ||
              !this.GetJSONData().broadcast_priority ||
              i >= this.GetJSONData().broadcast_priority.length
              ? n
              : this.GetJSONData().broadcast_priority[i] || n;
          }
          RemoveWhiteListAtIndex(t) {
            this.GetJSONData().broadcast_whitelist.length > t &&
              (this.GetJSONData().broadcast_whitelist.splice(t, 1),
              (this.GetJSONData().broadcast_whitelist = [
                ...this.GetJSONData().broadcast_whitelist,
              ]),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          ClearWhiteList() {
            this.GetJSONData().broadcast_whitelist.length > 0 &&
              ((this.GetJSONData().broadcast_whitelist = []),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          GetBroadcastContentType() {
            return this.GetJSONData().broadcast_content_type;
          }
          SetBroadcastContentType(t) {
            this.GetJSONData().broadcast_content_type != t &&
              ((this.GetJSONData().broadcast_content_type = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          GetPrerollVideo() {
            return this.GetJSONData().broadcast_preroll_vod_appid;
          }
          SetPrerollVODAppID(t) {
            this.GetJSONData().broadcast_preroll_vod_appid !== t &&
              ((this.GetJSONData().broadcast_preroll_vod_appid = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
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
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
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
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetItemDropManual(t) {
            this.GetJSONData().broadcast_item_drops_manual != t &&
              ((this.GetJSONData().broadcast_item_drops_manual = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetItemDropMinutes(t) {
            this.GetJSONData().broadcast_item_drops_min_watch_time_minutes !=
              t &&
              ((this.GetJSONData().broadcast_item_drops_min_watch_time_minutes =
                t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetItemDropDetailEvents(t, n) {
            (this.GetJSONData().broadcast_item_drops_details_clan_accountid !=
              t ||
              this.GetJSONData().broadcast_item_drops_details_event_gid != n) &&
              ((this.GetJSONData().broadcast_item_drops_details_event_gid = n),
              (this.GetJSONData().broadcast_item_drops_details_clan_accountid =
                t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetWidePlayerLayout(t) {
            this.GetJSONData().broadcast_display_wide_player != t &&
              ((this.GetJSONData().broadcast_display_wide_player = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetWidePlayerSupportChat(t) {
            this.GetJSONData().broadcast_dispaly_wide_player_allow_chat != t &&
              ((this.GetJSONData().broadcast_dispaly_wide_player_allow_chat =
                t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetChatAnnouncementGiveawayGID(t) {
            this.GetJSONData().broadcast_chat_announcement_giveaway != t &&
              ((this.GetJSONData().broadcast_chat_announcement_giveaway = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
        }
        Ge([Y.sH], Ce.prototype, "m_editModel", 2),
          Ge([Y.XI], Ce.prototype, "SetBroadcastEnabled", 1),
          Ge([Y.XI], Ce.prototype, "SetBroadcastForceBanner", 1),
          Ge([Y.XI], Ce.prototype, "SetChangeSetting", 1),
          Ge([Y.XI], Ce.prototype, "SetTitleToken", 1),
          Ge([Y.XI], Ce.prototype, "SetCustomTitleLocalize", 1),
          Ge([Y.XI], Ce.prototype, "AddAccountToWhiteList", 1),
          Ge([Y.XI], Ce.prototype, "DeleteWhiteListAccount", 1),
          Ge([Y.XI], Ce.prototype, "SetWhiteListAccountLanguage", 1),
          Ge([Y.XI], Ce.prototype, "SetWhiteListAccountPriority", 1),
          Ge([Y.XI], Ce.prototype, "RemoveWhiteListAtIndex", 1),
          Ge([Y.XI], Ce.prototype, "ClearWhiteList", 1),
          Ge([Y.XI], Ce.prototype, "SetBroadcastContentType", 1),
          Ge([Y.XI], Ce.prototype, "SetPrerollVODAppID", 1),
          Ge([Y.XI], Ce.prototype, "SetPrerollTrailer", 1),
          Ge([Y.XI], Ce.prototype, "SetDropsEnabled", 1),
          Ge([Y.XI], Ce.prototype, "SetItemDropManual", 1),
          Ge([Y.XI], Ce.prototype, "SetItemDropMinutes", 1),
          Ge([Y.XI], Ce.prototype, "SetItemDropDetailEvents", 1),
          Ge([Y.XI], Ce.prototype, "SetWidePlayerLayout", 1),
          Ge([Y.XI], Ce.prototype, "SetWidePlayerSupportChat", 1),
          Ge([Y.XI], Ce.prototype, "SetChatAnnouncementGiveawayGID", 1);
        var Vn = p(44894),
          Fc = p(98794),
          Uc = Object.defineProperty,
          Hc = (a, t, n) =>
            t in a
              ? Uc(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          ao = (a, t, n) => Hc(a, typeof t != "symbol" ? t + "" : t, n);
        const no = class Ha {
          constructor() {
            ao(this, "m_rgFriendsList", null);
          }
          GetFriendLiset() {
            return this.m_rgFriendsList;
          }
          async LoadFriendList() {
            var t, n;
            let i = null;
            if (this.m_rgFriendsList) return this.m_rgFriendsList;
            if (!D.iA.logged_in) return [];
            try {
              const l = await pe().get(
                D.TS.COMMUNITY_BASE_URL + "actions/ajaxlistfriends",
              );
              if (
                (l == null ? void 0 : l.status) == 200 &&
                ((t = l.data) == null ? void 0 : t.success) == Ue.R &&
                (n = l.data) != null &&
                n.friends
              )
                return (
                  (this.m_rgFriendsList = l.data.friends), this.m_rgFriendsList
                );
              (this.m_rgFriendsList = []), (i = (0, ye.H)(l));
            } catch (l) {
              i = (0, ye.H)(l);
            }
            return (
              console.error(
                "CSimpleFriendsListStore.LoadFriendList failed: " +
                  (i == null ? void 0 : i.strErrorMsg),
                i,
              ),
              []
            );
          }
          static Get() {
            return (
              Ha.s_Singleton || (Ha.s_Singleton = new Ha()), Ha.s_Singleton
            );
          }
        };
        ao(no, "s_Singleton");
        let so = no;
        function zc() {
          const [a, t] = E.useState(so.Get().GetFriendLiset());
          return (
            E.useEffect(() => {
              a || so.Get().LoadFriendList().then(t);
            }, []),
            a
          );
        }
        var Vc = p(35098),
          Wn = p(24806),
          Wc = p(1885),
          Qc = p(86836),
          Zt = p.n(Qc),
          Yc = p(25046),
          io = p(29522);
        function Jc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            i = (o) => {},
            l = [
              {
                name: "Trailer",
                key: "overview",
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(qc, { ...a }),
                }),
                onClick: i,
              },
              {
                name: "Deprecated VOD",
                key: "mature",
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Kc, { ...a }),
                }),
                onClick: i,
              },
            ];
          return (0, e.jsxs)(le.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, j.A)(f().ValveOnlyBackground),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Broadcast_preroll_title"),
              }),
              (0, e.jsx)(Gn.V, { tabs: l, bDisableRouting: !0 }),
            ],
          });
        }
        function qc(a) {
          var t;
          const { editModel: n, broadcastEditModel: i } = a,
            l = (0, B.q3)(() => (i == null ? void 0 : i.GetPrerollTrailer())),
            o = (0, io.$5)(l.strAppid ? Number.parseInt(l.strAppid) : void 0),
            r = (0, Yc.BF)(
              o,
              l.strTrailerid ? Number.parseInt(l.strTrailerid) : void 0,
            ),
            d =
              (t = r == null ? void 0 : r.microtrailer) == null
                ? void 0
                : t[0].filename;
          return (0, e.jsxs)("div", {
            className: (0, j.A)(
              f().FlexColumnContainer,
              f().EventDefaultRowContainer,
            ),
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)("#Broadcast_preroll_trailer_desc"),
              }),
              (0, e.jsx)(g.pd, {
                type: "text",
                placeholder: (0, s.we)("#Broadcast_preroll_trailer_AppPrompt"),
                mustBeNumeric: !0,
                rangeMin: 1,
                value: l.strAppid || "",
                onChange: (m) => {
                  var c;
                  return i.SetPrerollTrailer(
                    m.target.value.trim(),
                    (c = l.strTrailerid) != null ? c : "",
                  );
                },
              }),
              (0, e.jsx)(g.pd, {
                type: "text",
                placeholder: (0, s.we)(
                  "#Broadcast_preroll_trailer_TrailerPrompt",
                ),
                mustBeNumeric: !0,
                rangeMin: 1,
                value: l.strTrailerid || "",
                onChange: (m) =>
                  i.SetPrerollTrailer(l.strAppid || "", m.target.value.trim()),
              }),
              r &&
                d &&
                (0, e.jsx)("a", {
                  href: `${D.TS.STORE_BASE_URL}trailer/assets/?trailer=${d.substring(0, d.lastIndexOf("/"))}`,
                  children: (0, s.we)("#Broadcast_preroll_trailer_link"),
                }),
            ],
          });
        }
        function Kc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            i = (0, B.q3)(() => (n == null ? void 0 : n.GetPrerollVideo()));
          return (0, e.jsxs)("div", {
            className: (0, j.A)(
              f().FlexColumnContainer,
              f().EventDefaultRowContainer,
            ),
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)("#Broadcast_preroll_desc"),
              }),
              (0, e.jsx)(g.pd, {
                type: "text",
                placeholder: (0, s.we)("#Broadcast_preroll_prompt"),
                mustBeNumeric: !0,
                rangeMin: 1,
                value: i || "",
                onChange: (l) => n.SetPrerollVODAppID(l.target.value.trim()),
              }),
              !!i &&
                (0, e.jsx)("a", {
                  href: D.TS.PARTNER_BASE_URL + "apps/landing/" + i,
                  children: (0, s.we)("#Broadcast_preroll_app_link"),
                }),
            ],
          });
        }
        var Zc = Object.defineProperty,
          Xc = Object.getOwnPropertyDescriptor,
          ut = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Xc(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Zc(t, n, l), l;
          };
        let tt = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                strCustomTitle: "",
                customTitleLanguage: N.Bhc,
                whitelistSteamID: "",
              });
          }
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
            (n[t] = a), this.props.editModel.SetDirty(C.IQ.jsondata_sales);
          }
          OnOpenGradientInnerColor(a) {
            this.OpenColorPopover(a, "broadcast_gradient_inner_color");
          }
          OnOpenGradientOuterColor(a) {
            this.OpenColorPopover(a, "broadcast_gradient_outer_color");
          }
          OpenColorPopover(a, t) {
            const n = this.props.editModel.GetEventModel().jsondata[t];
            let i = null;
            const l = () => (i == null ? void 0 : i.Hide());
            i = (0, $a.lX)(
              (0, e.jsx)(wa.$, {
                color: n,
                onChange: (o) => this.OnSaleColorChange(o, t),
                onRequestClose: l,
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
              i = [],
              l = s.A0.GetLanguageListForRealms([sn.TU.k_ESteamRealmGlobal]);
            for (const r of l) {
              const m = {
                label: (0, s.we)("#language_selection_" + (0, N.LgB)(r)),
                data: r,
              };
              i.push(m);
            }
            const o = Fc.i.map((r) =>
              (0, e.jsxs)(
                "div",
                {
                  className: (0, j.A)(f().FlexRowContainer, f().RadioOption),
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
                  className: f().EventEditorTextTitleCtn,
                  children: [
                    (0, e.jsx)("span", {
                      className: (0, j.A)(
                        f().EventEditorTextTitle,
                        f().FlexGrow,
                      ),
                      children: (0, s.we)("#Broadcast_title"),
                    }),
                    (0, e.jsx)("a", {
                      target: D.TS.IN_CLIENT ? void 0 : "_blank",
                      href:
                        D.TS.PARTNER_BASE_URL +
                        "doc/marketing/event_tools/sales/livestream",
                      className: (0, j.A)(f().doclink),
                      children: (0, e.jsx)("span", {
                        children: (0, s.we)("#Broadcast_documentation"),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().InputBorder,
                  children: (0, e.jsx)(g.RF, {
                    onChange: this.OnBroadcastOptionChange,
                    label: (0, s.we)("#Broadcast_option"),
                    checked: a.GetEventModel().BHasBroadcastEnabled(),
                  }),
                }),
                a.GetEventModel().BHasBroadcastEnabled() &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_title_title"),
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, j.A)(
                          f().FlexColumnContainer,
                          f().EventDefaultRowContainer,
                        ),
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, s.we)("#Broadcast_title_desc"),
                          }),
                          (0, e.jsx)(g.m, {
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
                            className: Zt().customTitleOptionsCtn,
                            children: [
                              (0, e.jsxs)("div", {
                                className: (0, j.A)(
                                  f().FlexRowContainer,
                                  Zt().CustomTitleCtn,
                                ),
                                children: [
                                  (0, e.jsx)("div", {
                                    style: { width: "400px" },
                                    children: (0, e.jsx)(g.pd, {
                                      placeholder: (0, s.we)(
                                        "#Broadcast_use_custom",
                                      ),
                                      onChange: this.OnCustomTitleChange,
                                      value: this.state.strCustomTitle,
                                    }),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Zt().LanguageContainer,
                                    children: (0, e.jsx)(g.m, {
                                      bDisableMouseOverlay: !0,
                                      strDropDownClassName: f().DropDownScroll,
                                      rgOptions: i,
                                      selectedOption:
                                        this.state.customTitleLanguage,
                                      onChange:
                                        this.OnCustomTitleLanguageChange,
                                    }),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Zt().AddTitleButton,
                                    children: (0, e.jsx)(g.jn, {
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
                                className: (0, j.A)(f().FlexColumnContainer),
                                children: t.localized_broadcast_title.map(
                                  (r, d) =>
                                    r
                                      ? (0, e.jsxs)(
                                          "div",
                                          {
                                            className: (0, j.A)(
                                              Zt().TitleRowCtn,
                                              f().FlexRowContainer,
                                            ),
                                            children: [
                                              r,
                                              " (",
                                              (0, s.we)(
                                                "#language_selection_" +
                                                  (0, N.LgB)(d),
                                              ),
                                              ")",
                                              (0, e.jsx)("div", {
                                                style: { marginLeft: "auto" },
                                                children: (0, e.jsx)("img", {
                                                  className: la().RemoveIcon,
                                                  src: Vn.A,
                                                  onClick: () =>
                                                    this.RemoveTitle(d),
                                                }),
                                              }),
                                            ],
                                          },
                                          d,
                                        )
                                      : null,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_background"),
                      }),
                      (0, e.jsx)(g.$n, {
                        onClick: this.OnOpenGradientOuterColor,
                        className: f().EventEditorTextTitle,
                        style: {
                          backgroundColor:
                            this.props.editModel.GetEventModel().jsondata
                              .broadcast_gradient_outer_color,
                        },
                        children: (0, s.we)("#Broadcast_GradientOuterColor"),
                      }),
                      (0, e.jsx)(g.$n, {
                        onClick: this.OnOpenGradientInnerColor,
                        className: f().EventEditorTextTitle,
                        style: {
                          backgroundColor:
                            this.props.editModel.GetEventModel().jsondata
                              .broadcast_gradient_inner_color,
                        },
                        children: (0, s.we)("#Broadcast_GradientInnerColor"),
                      }),
                      a.GetEventType() != N.ajI &&
                        (0, e.jsx)($c, {
                          broadcastEditModel: this.GetBroadcastEditModel(),
                        }),
                      (0, e.jsx)(Jc, {
                        editModel: a,
                        broadcastEditModel: this.GetBroadcastEditModel(),
                      }),
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_chat_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, j.A)(
                          f().FlexColumnContainer,
                          f().EventDefaultRowContainer,
                        ),
                        children: o,
                      }),
                      (0, e.jsx)(tu, {
                        editModel: a,
                        broadcastEditModel: this.GetBroadcastEditModel(),
                      }),
                      (0, e.jsx)(au, {
                        editModel: a,
                        broadcastEditModel: this.GetBroadcastEditModel(),
                      }),
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_artwork"),
                      }),
                      (0, e.jsx)(An.t, {
                        clanSteamID: a.GetClanSteamID(),
                        rgSupportArtwork: ["broadcast_left", "broadcast_right"],
                        fnSetImageURL: a.SetImageURL,
                        bAllowPreviousClanImageSelection: !0,
                        rgRealmList: a.GetIncludedRealmList(),
                      }),
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_artwork_options"),
                      }),
                      (0, e.jsx)("div", {
                        className: f().InputBorder,
                        children: (0, e.jsx)(g.RF, {
                          onChange: this.OnBroadcastForceBanner,
                          label: (0, s.we)("#Broadcast_artwork_banner"),
                          tooltip: (0, s.we)("#Broadcast_artwork_banner_hint"),
                          checked: a.GetEventModel().BHasBroadcastForceBanner(),
                        }),
                      }),
                      (0, e.jsx)(Le.it, {
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
                        partnerEventStore: P.mh,
                      }),
                      (0, e.jsx)(Le.it, {
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
                        partnerEventStore: P.mh,
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        ut([X.oI], tt.prototype, "OnBroadcastOptionChange", 1),
          ut([X.oI], tt.prototype, "OnBroadcastForceBanner", 1),
          ut([X.oI], tt.prototype, "OnChatChange", 1),
          ut([X.oI], tt.prototype, "OnTitleChange", 1),
          ut([X.oI], tt.prototype, "OnCustomTitleChange", 1),
          ut([X.oI], tt.prototype, "OnCustomTitleLanguageChange", 1),
          ut([X.oI], tt.prototype, "AddTitle", 1),
          ut([X.oI], tt.prototype, "RemoveTitle", 1),
          ut([X.oI], tt.prototype, "OnSaleColorChange", 1),
          ut([X.oI], tt.prototype, "OnOpenGradientInnerColor", 1),
          ut([X.oI], tt.prototype, "OnOpenGradientOuterColor", 1),
          (tt = ut([R.PA], tt));
        function $c(a) {
          const { broadcastEditModel: t } = a,
            n = (0, B.q3)(() => t.GetBroadcastAllowList() || []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Broadcast_whitelist"),
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(
                  f().FlexColumnContainer,
                  f().EventDefaultRowContainer,
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
                    children: n.map((i) =>
                      (0, e.jsx)(
                        nu,
                        { accountid: i },
                        "broadcastaccountrow_" + i,
                      ),
                    ),
                  }),
                  (0, e.jsx)(eu, { broadcastEditModel: t }),
                  (0, e.jsx)(Wc.jl, {
                    onButtonClick: async (i) => {
                      const l = new me.b(i);
                      return t.AddAccountToWhiteList(l.GetAccountID()), !0;
                    },
                    buttonText: (0, s.we)("#Broadcast_whitelist_adduser"),
                  }),
                  (0, e.jsx)("div", {
                    children: (0, s.PP)(
                      "#Broadcast_whitelist_friendcode",
                      (0, e.jsx)("a", {
                        target: "_blank",
                        href: D.TS.COMMUNITY_BASE_URL + "my/friends/add",
                        children: D.TS.COMMUNITY_BASE_URL + "my/friends/add",
                      }),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function eu(a) {
          const { broadcastEditModel: t } = a,
            n = zc();
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().FlexRowWrapFlexStartContainer),
            children: [
              (0, e.jsx)("a", {
                onClick: () => t.AddAccountToWhiteList(D.iA.accountid),
                className: f().EditPreviewButton,
                children: (0, s.we)("#Broadcast_whitelist_addme"),
              }),
              (0, e.jsx)("a", {
                onClick: (i) =>
                  (0, $a.lX)(
                    (0, e.jsx)("div", {
                      className: f().DropDownScroll,
                      children: (n || []).map((l) =>
                        (0, e.jsx)(
                          Pn.kt,
                          {
                            onSelected: () => {
                              const o = new me.b(l.steamid);
                              t.AddAccountToWhiteList(o.GetAccountID());
                            },
                            children: (0, e.jsxs)("div", {
                              style: { display: "flex", alignItems: "center" },
                              children: [
                                (0, e.jsx)("img", {
                                  className: Zt().WhitelistAvatar,
                                  src: l.avatar_url,
                                }),
                                l.persona_name,
                              ],
                            }),
                          },
                          l.steamid,
                        ),
                      ),
                    }),
                    i,
                  ),
                className: f().EditPreviewButton,
                children: (0, s.we)("#Broadcast_whitelist_addfriend"),
              }),
              (0, e.jsx)("a", {
                onClick: () => t.ClearWhiteList(),
                className: f().EditPreviewButton,
                children: (0, s.we)("#Broadcast_whitelist_clear"),
              }),
            ],
          });
        }
        function tu(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            [i, l, o, r, d, m] = (0, B.q3)(() => [
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
          return (0, e.jsxs)(le.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, j.A)(f().ValveOnlyBackground),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: "(VO) " + (0, s.we)("#Broadcast_DropsTitle"),
              }),
              (0, e.jsx)(g.Yh, {
                onChange: (c) => n.SetDropsEnabled(c),
                label: (0, s.we)("#Broadcast_Drops_Enable"),
                checked: !!i,
              }),
              !!i &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(g.Yh, {
                      onChange: (c) => n.SetItemDropManual(c),
                      label: (0, s.we)("#Broadcast_Drops_IsManualDrops"),
                      checked: !!l,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "broadcast_min_mintes",
                      children: (0, s.we)("#Broadcast_Drops_Minute"),
                    }),
                    (0, e.jsx)("input", {
                      id: "broadcast_min_mintes",
                      type: "number",
                      min: "5",
                      value: o,
                      onChange: (c) =>
                        n.SetItemDropMinutes(Number.parseInt(c.target.value)),
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextSubTitle,
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
                      onChange: (c) =>
                        n.SetItemDropDetailEvents(
                          Number.parseInt(c.target.value),
                          d,
                        ),
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "broadcast_detail_clan_event_gid",
                      children: (0, s.we)("#Broadcast_Drops_Details_GID"),
                    }),
                    (0, e.jsx)("input", {
                      id: "broadcast_detail_clan_event_gid",
                      type: "text",
                      value: d,
                      onChange: (c) =>
                        n.SetItemDropDetailEvents(r, c.target.value),
                    }),
                  ],
                }),
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children:
                  "(VO) " +
                  (0, s.we)("#Broadcast_ChatAnnouncement_Giveaway_title"),
              }),
              (0, e.jsx)(g.pd, {
                type: "number",
                value: m,
                tooltip: (0, s.we)(
                  "#Broadcast_ChatAnnouncement_Giveaway_gid_ttip",
                ),
                label: (0, s.we)("#Broadcast_ChatAnnouncement_Giveaway_gid"),
                onChange: (c) =>
                  n.SetChatAnnouncementGiveawayGID(c.target.value),
              }),
            ],
          });
        }
        function au(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            i = (0, B.q3)(
              () => t.GetEventModel().jsondata.broadcast_display_wide_player,
            ),
            l = (0, B.q3)(
              () =>
                t.GetEventModel().jsondata
                  .broadcast_dispaly_wide_player_allow_chat,
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Broadcast_WidePlayer"),
              }),
              (0, e.jsx)(g.Yh, {
                onChange: (o) => n.SetWidePlayerLayout(o),
                label: (0, s.we)("#Broadcast_WidePlayer_Use"),
                tooltip: (0, s.we)("#Broadcast_WidePlayer_ttip"),
                checked: !!i,
              }),
              (0, e.jsx)(g.Yh, {
                onChange: (o) => n.SetWidePlayerSupportChat(o),
                label: (0, s.we)("#Broadcast_WidePlayer_Chat_Use"),
                tooltip: (0, s.we)("#Broadcast_WidePlayer_Chat_ttip"),
                checked: !!l,
                disabled: !i,
              }),
              (0, e.jsxs)(le.Eb, {
                requireAdmin: !0,
                clanSteamID: t.GetClanSteamID(),
                className: (0, j.A)(f().ValveOnlyBackground),
                children: [
                  (0, e.jsx)(Ee.he, {
                    toolTipContent: (0, s.we)("#Broadcast_ContentType_Desc"),
                    children: (0, e.jsx)("div", {
                      className: f().EventEditorTextTitle,
                      children: "(VO) " + (0, s.we)("#Broadcast_ContentType"),
                    }),
                  }),
                  (0, e.jsx)(iu, {}),
                ],
              }),
            ],
          });
        }
        function nu(a) {
          const { accountid: t } = a,
            { isLoading: n, data: i } = (0, Vc.js)(t),
            l = () => {
              let m = P.mh.GetEditModel();
              return new Ce(m);
            };
          let o = P.mh.GetEditModel().GetEventModel(),
            r = (0, B.q3)(() => o.jsondata.broadcast_whitelist.indexOf(t)),
            d = (0, B.q3)(() => {
              let m = o.jsondata.broadcast_language,
                c = N.xPp;
              return (
                r >= 0 && m && r < m.length && m[r] !== void 0 && (c = m[r]), c
              );
            });
          return n
            ? (0, e.jsx)(Z.t, { size: "small", string: (0, s.we)("#Loading") })
            : i
              ? (0, e.jsxs)("div", {
                  className: (0, j.A)(la().FlexCenter, Zt().AccountRow),
                  children: [
                    (0, e.jsxs)("a", {
                      className: (0, j.A)(
                        la().FlexCenter,
                        be().BroadcastAccountInfo,
                      ),
                      href: i.GetCommunityProfileURL(),
                      target: "_blank",
                      children: [
                        i
                          ? (0, e.jsx)("img", {
                              style: { marginRight: "8px" },
                              src: i.avatar_url,
                            })
                          : null,
                        i ? i.m_strPlayerName : null,
                      ],
                    }),
                    (0, e.jsxs)(Ee.he, {
                      toolTipContent: (0, s.we)("#Broadcast_Language_hint"),
                      children: [
                        (0, e.jsxs)("span", {
                          children: [(0, s.we)("#EventEditor_Langauge"), ": "],
                        }),
                        (0, e.jsx)(Wn.Ng, {
                          bAllowUnsetOption: !0,
                          selectedLang: d,
                          fnOnLanguageChanged: (m) =>
                            l().SetWhiteListAccountLanguage(t, m),
                        }),
                      ],
                    }),
                    (0, e.jsx)(su, { accountid: t }),
                    (0, e.jsx)("img", {
                      className: (0, j.A)(la().FlexCenter, la().RemoveIcon),
                      src: Vn.A,
                      onClick: () => l().DeleteWhiteListAccount(t),
                    }),
                  ],
                })
              : (0, e.jsx)("div", {
                  children: (0, s.we)("#Broadcast_FailedToLoadUser"),
                });
        }
        function su(a) {
          const t = P.mh.GetEditModel(),
            n = new Ce(t),
            i = (r) => {
              n.SetWhiteListAccountPriority(a.accountid, r.data);
            },
            l = [
              { label: (0, s.we)("#Broadcast_Priority_Primary"), data: Ba.U7 },
              { label: (0, s.we)("#Broadcast_Priority_Featured"), data: Ba._ },
              {
                label: (0, s.we)("#Broadcast_Priority_DefaultFeatured"),
                data: Ba.zl,
              },
              { label: (0, s.we)("#Broadcast_Priority_General"), data: Ba.mP },
            ],
            o = n.GetWhiteListAccountPriority(a.accountid, Ba.mP);
          return (0, e.jsxs)(Ee.he, {
            toolTipContent: (0, s.we)("#Broadcast_Priority_hint"),
            className: be().PrioritySelector,
            children: [
              (0, e.jsxs)("span", {
                children: [(0, s.we)("#Broadcast_Priority_label"), ": "],
              }),
              (0, e.jsx)(g.m, { rgOptions: l, selectedOption: o, onChange: i }),
            ],
          });
        }
        function iu(a) {
          const t = P.mh.GetEditModel(),
            n = new Ce(t),
            i = [
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
            l = n.GetBroadcastContentType();
          return (0, e.jsxs)(Ee.he, {
            toolTipContent: (0, s.we)("#Broadcast_ContentType_Desc"),
            className: be().PrioritySelector,
            children: [
              (0, e.jsxs)("span", {
                children: [(0, s.we)("#Broadcast_ContentType"), ": "],
              }),
              (0, e.jsx)(g.m, {
                rgOptions: i,
                selectedOption: l,
                onChange: (o) => n.SetBroadcastContentType(o.data),
              }),
            ],
          });
        }
        var ou = p(85408),
          lu = p(75909),
          ru = Object.defineProperty,
          du = (a, t, n) =>
            t in a
              ? ru(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          cn = (a, t, n) => du(a, typeof t != "symbol" ? t + "" : t, n);
        const oo = class za {
          constructor() {
            cn(this, "m_mapAppIDToDLCs", new Map()),
              cn(this, "m_mapAppIDToSoundTracks", new Map()),
              cn(this, "m_mapPromise", new Map()),
              (0, Y.Gn)(this);
          }
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
                let i = {
                    origin: self.origin,
                    cc: D.TS.COUNTRY || "US",
                    l: D.TS.LANGUAGE,
                  },
                  l = "";
                (0, D.yK)() == "partner"
                  ? (l = `${D.TS.PARTNER_BASE_URL}seasonpass/ajaxgetreleasedorupcomingdlc?parentappid=${t}`)
                  : (l = D.TS.STORE_BASE_URL + "dlc/" + t + "/ajaxgetdlclist");
                let o = await pe().get(l, {
                    params: i,
                    cancelToken: n == null ? void 0 : n.token,
                  }),
                  r = Array();
                o.data.dlcs &&
                  o.data.dlcs.forEach((d) => {
                    r.push({
                      appid: d.appid,
                      name: d.name,
                      is_released_somewhere: !!d.is_released_somewhere,
                    });
                  }),
                  this.m_mapAppIDToDLCs.set(t, r),
                  (r = Array()),
                  o.data.soundtracks &&
                    o.data.soundtracks.forEach((d) => {
                      r.push({
                        appid: d.appid,
                        name: d.name,
                        is_released_somewhere: !!d.is_released_somewhere,
                      });
                    }),
                  this.m_mapAppIDToSoundTracks.set(t, r);
              } catch (i) {
                const l = (0, ye.H)(i);
                console.error(
                  "LoadDLCAndSoundTracksForAppID for appid: " +
                    t +
                    " hit: " +
                    l.strErrorMsg,
                  l,
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
          static Get() {
            return (
              za.s_Singleton || (za.s_Singleton = new za()), za.s_Singleton
            );
          }
        };
        cn(oo, "s_Singleton");
        let Ma = oo;
        function lo(a) {
          const [t, n] = useState(a),
            [i, l] = useState(Ma.Get().GetDLCForAppID(t));
          return (
            useEffect(() => {
              a &&
                (a != t || !i) &&
                Ma.Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((o) => {
                    l(o.dlcs), n(a);
                  });
            }, [t, a, i]),
            i
          );
        }
        function Nm(a) {
          const [t, n] = useState(a),
            [i, l] = useState(Ma.Get().GetSoundTracksForAppID(t));
          return (
            useEffect(() => {
              a &&
                (a != t || !i) &&
                Ma.Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((o) => {
                    l(o.soundtracks), n(a);
                  });
            }, [t, a, i]),
            i
          );
        }
        function Bm(a) {
          const t = lo(a);
          return useMemo(
            () =>
              (t == null
                ? void 0
                : t.filter((i) => !!i.is_released_somewhere)) || null,
            [t],
          );
        }
        function Mm(a) {
          const t = lo(a);
          return useMemo(
            () =>
              (t == null
                ? void 0
                : t.filter((i) => !i.is_released_somewhere)) || null,
            [t],
          );
        }
        var ro = p(38080),
          cu = p(27344),
          uu = p(72805),
          hu = p(38745),
          k = p(30040),
          pu = p(22142),
          mu = Object.defineProperty,
          _u = Object.getOwnPropertyDescriptor,
          Ye = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? _u(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && mu(t, n, l), l;
          };
        let It = class extends E.Component {
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
            (0, W.pg)(
              (0, e.jsx)(V.o0, {
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
              className: k.ImgCrossCtn,
              children: (0, e.jsx)(Ee.he, {
                toolTipContent: (0, s.we)("#EventEmail_Template_Remove", t),
                children: (0, e.jsx)("img", {
                  className: k.ImgCross,
                  src: Vn.A,
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
              bEditor: i,
              clanSteamID: l,
              appid: o,
              bTemplateEditable: r,
            } = this.props;
            return (0, e.jsxs)("div", {
              className: (0, j.A)(t, k.DevEmailEmailBackground, k.EmailSection),
              children: [
                a.BHasHeadline() &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("headline"),
                      (0, e.jsx)("input", {
                        type: "text",
                        className: k.HeadlineInput,
                        placeholder: (0, s.we)("#EventEmail_EnterHeadline"),
                        value: a.GetHeadline(n),
                        onChange: this.OnHeadlineChange,
                      }),
                    ],
                  }),
                a.BHasBody() &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("body"),
                      (0, e.jsx)("textarea", {
                        className: k.BodyInput,
                        placeholder: (0, s.we)("#EventEmail_EnterBodyCopy"),
                        value: a.GetBody(n),
                        rows: 8,
                        onChange: this.OnBodyChange,
                      }),
                    ],
                  }),
                a.BHasCallToAction() &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("action"),
                      (0, e.jsx)(ma, { appid: o, section: a }),
                    ],
                  }),
                a.BHasImage() &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("img"),
                      (0, e.jsx)(vu, {
                        section: a,
                        lang: n,
                        clanSteamID: l,
                        bEditor: i,
                        artworkType: r ? "email_centered" : "email_full",
                      }),
                    ],
                  }),
                a.BHasVideo() &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("youtube"),
                      (0, e.jsxs)("div", {
                        className: k.VideoCtn,
                        children: [
                          (0, e.jsx)("img", { src: a.GetYouTubeImageURL() }),
                          !!i &&
                            (0, e.jsxs)("div", {
                              className: k.VideoInputCtn,
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
        Ye([X.oI], It.prototype, "OnHeadlineChange", 1),
          Ye([X.oI], It.prototype, "OnBodyChange", 1),
          Ye([X.oI], It.prototype, "OnVideoChange", 1),
          Ye([X.oI], It.prototype, "OnRemoveSubSection", 1),
          (It = Ye([R.PA], It));
        let ma = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.m_cancelSignal = pe().CancelToken.source()),
              (this.state = { dlcs: void 0 });
          }
          async LoadDLCForApp() {
            this.setState({
              dlcs: (
                await Ma.Get().LoadDLCAndSoundTracksForAppID(
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
              mt.uM.forEach((t) => {
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
            for (let t in mt.gs)
              if (!isNaN(Number(t))) {
                let n = mt.WH[t];
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
                        children: (0, e.jsx)(Z.t, {
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
            mt.uM.forEach((n) => {
              n === a.target.value && t.SetButtonTextLock(n);
            });
          }
          OnDestinationChange(a) {
            const { section: t } = this.props;
            let n = Number(a.target.value);
            (0, Y.h5)(() => {
              n < mt.gg
                ? (t.SetButtonDestination(n), t.SetButtonAppOverride(void 0))
                : (t.SetButtonDestination(mt.gs.k_EStorePage),
                  t.SetButtonAppOverride(n));
            });
          }
          OnChangeStorePageURL() {
            const { section: a } = this.props;
            (0, W.pg)(
              (0, e.jsx)(un, {
                strExistingURL:
                  D.TS.STORE_BASE_URL + a.GetDestinationStorePath(),
                fnUpdateURLOnSuccess: a.SetButtonDestinationStoreURL,
              }),
              window,
            );
          }
          render() {
            const { section: a } = this.props;
            let t = this.BuildTextOptions(),
              n = this.BuildDestinationOptions(),
              i = a.BHasButtonAppIDOverride()
                ? a.GetButtonAppidOverride()
                : a.GetDestination();
            return (0, e.jsxs)("div", {
              className: k.ButtonSettingContainer,
              children: [
                (0, e.jsxs)("div", {
                  className: k.ButtonSettingRow,
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
                      value: i,
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
                          (0, e.jsx)(Q.o, {
                            tooltip: (0, s.we)(
                              "#EventEmail_Section_EnterSalesPage_ttip",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("span", {
                        children:
                          D.TS.STORE_BASE_URL + a.GetDestinationStorePath(),
                      }),
                      (0, e.jsx)(g.jn, {
                        onClick: this.OnChangeStorePageURL,
                        children: (0, s.we)("#EventEmail_Section_UpdateURL"),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        Ye([X.oI], ma.prototype, "OnButtonLocChange", 1),
          Ye([X.oI], ma.prototype, "OnDestinationChange", 1),
          Ye([X.oI], ma.prototype, "OnChangeStorePageURL", 1),
          (ma = Ye([R.PA], ma));
        let un = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                bIsValid: Xe.e$.IsValidStoreURL(this.props.strExistingURL),
                strURL: this.props.strExistingURL
                  ? this.props.strExistingURL
                  : "",
              });
          }
          OnURLUpdate(a) {
            let t = a.currentTarget.value;
            this.setState({ bIsValid: Xe.e$.IsValidStoreURL(t), strURL: t });
          }
          render() {
            const { fnUpdateURLOnSuccess: a, closeModal: t } = this.props;
            return (0, e.jsx)(V.o0, {
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
                  className: k.ButtonDestInputSaleURL,
                  value: this.state.strURL,
                  onChange: this.OnURLUpdate,
                }),
              }),
            });
          }
        };
        Ye([X.oI], un.prototype, "OnURLUpdate", 1), (un = Ye([R.PA], un));
        function vu(a) {
          const {
              clanSteamID: t,
              section: n,
              lang: i,
              bEditor: l,
              artworkType: o,
            } = a,
            [r, d] = E.useState(i),
            m = P.mh.GetEditModel(),
            c = E.useCallback(
              (u, x, b) => {
                Be.zU.GetExtensionString(u) &&
                  n.SetImage(Be.zU.GetHashAndExt(u), b),
                  d(b);
              },
              [n],
            ),
            [v, h, _] = (0, B.q3)(() => [
              n.BHasSomeImage(),
              Tt.Fj[o],
              n.GetEmailImageURLWithFallback(r, t),
            ]);
          return (0, e.jsxs)("div", {
            className: k.ImagePreview,
            children: [
              (0, e.jsxs)("div", {
                className: k.FullImageCtn,
                children: [
                  (0, e.jsx)("img", {
                    width: _ ? (0, Tt.qj)(h.width) : void 0,
                    height: _ ? (0, Tt.qj)(h.height) : void 0,
                    src: _,
                  }),
                  !!l &&
                    (0, e.jsx)(Xt, {
                      section: n,
                      clanSteamID: t,
                      lang: i,
                      artworkType: o,
                    }),
                ],
              }),
              v &&
                (0, e.jsx)(pu.h, {
                  clanSteamID: t,
                  langOverride: r,
                  fnGetImageHash: (u) => n.GetImageHash(u),
                  fnOnLanguagePreviewChange: (u) => d(u),
                  fnOnRemoveImage: (u) => n.SetImage(null, u),
                  fnOnArtworkLangChange: c,
                  realms: m.GetIncludedRealmList(),
                  fnLangHasData: m.BHasTitleImage,
                }),
            ],
          });
        }
        let Xt = class extends E.Component {
          constructor(a) {
            super(a),
              (this.state = { bDownloadFromClanImageStore: !1 }),
              (this.m_clanImageUploader = void 0),
              this.RefreshUploader();
          }
          componentDidUpdate(a) {
            (a.clanSteamID.GetAccountID() !=
              this.props.clanSteamID.GetAccountID() ||
              a.artworkType != this.props.artworkType) &&
              this.RefreshUploader();
          }
          RefreshUploader() {
            this.m_clanImageUploader = new lu.VE(this.props.clanSteamID, [
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
                  let i = Be.zU.GetExtensionString(n.uploadResult);
                  a.SetImage(n.uploadResult.image_hash + i, n.image.language);
                }
            } catch (t) {
              console.error("DoUpload failed:" + (0, ye.H)(t).strErrorMsg);
            }
          }
          async OnDropFiles(a) {
            if (a && a.length > 0) {
              const { lang: t } = this.props;
              let n = !0,
                i = Array.from(a);
              for (let l = 0; n && l < i.length; l++) {
                let o = i[l];
                (n = await this.m_clanImageUploader.AddImage(o, t)),
                  n ||
                    (console.error(
                      "ClanImagePicker.OnDropFiles: failed on i=" +
                        l +
                        " file=" +
                        o.name,
                    ),
                    (0, W.pg)(
                      (0, e.jsx)(V.KG, {
                        strDescription: (0, s.we)("#ImagePicker_Error", o.name),
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
            let t = Tt.Fj[a];
            return (0, e.jsxs)(E.Fragment, {
              children: [
                (0, e.jsx)("span", {
                  className: k.EmailInputText,
                  children: (0, s.we)("#EventEmail_SelectBrandingImage"),
                }),
                (0, e.jsx)("span", {
                  children: (0, s.we)(
                    "#EventEmail_ImageDimension",
                    (0, Tt.qj)(t.width),
                    (0, Tt.qj)(t.height),
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
                } catch (i) {
                  let l = (0, ye.H)(i);
                  console.error("AddExistingClanImage: " + l.strErrorMsg, l),
                    (0, W.pg)(
                      (0, e.jsx)(V.KG, {
                        strDescription: (0, s.we)(
                          "#EventError_Code",
                          l.strErrorMsg,
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
                className: k.EditImageInputCtn,
                children: (0, e.jsx)(Z.t, {
                  position: "center",
                  size: "medium",
                  string: (0, s.we)("#Loading"),
                }),
              });
            const { clanSteamID: t } = this.props;
            let n = (0, ro.fY)(this.m_clanImageUploader, "emailartupload_");
            return (0, e.jsx)("div", {
              className: k.EditImageInputCtn,
              children: (0, e.jsxs)(hu.D, {
                onDropFiles: this.OnDropFiles,
                elAdditonalButtons: [
                  (0, e.jsx)(
                    uu.Hd,
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
                    className: cu.UploadPreviewCtn,
                    children: n,
                  }),
                  (0, e.jsx)(ro.PY, {
                    imageUploader: this.m_clanImageUploader,
                    fnOnUploadImageRequested: this.DoUpload,
                  }),
                ],
              }),
            });
          }
        };
        Ye([X.oI], Xt.prototype, "DoUpload", 1),
          Ye([X.oI], Xt.prototype, "OnDropFiles", 1),
          Ye([X.oI], Xt.prototype, "RenderInstructions", 1),
          Ye([X.oI], Xt.prototype, "OnPreviousImageSelected", 1),
          (Xt = Ye([R.PA], Xt));
        const gu =
            p.p +
            "images/applications/community/Logo_Steamworks.png?v=valveisgoodatcaching",
          Su =
            p.p +
            "images/applications/community/Logo_Steam_NoWords_Dark.png?v=valveisgoodatcaching",
          co =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAgCAYAAAAPHGYtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8FJREFUeNrsWltIVEEYXs28ZPebEVq+BBGZIl1ALc0LaDd9q8gi6yl66LGgh24PPddDPkVXlCDIzbByqcwoSsEsWB80NKxIpIhKKiTdvh/+iZ/D6ZxZ3KNnaT74dmbOzM6emf8652xCJBIJGPgTiWYLjHAMjHCMcAwmCUn0sXN37VuzFRNCKxgEq8DeG43Xz8dMOMBys78TwmJwNvgLnBNTyxFoBDvMXmvjILia66/AMXDEK+G0wiQvmz3XA8JBiRIO9q0HRU/MY47LDexBMR0cxg20WPoyUZRzM4z+Tod5trD5K1zD+DGN369EsQQcxfgGl7GLUGzlZg/Gd1j681DkcTOE/g+W/vkodthM3Y2x3VOSELjgAFgKfqObt2xoLXiW67vAzn9sWgopFzhTXO4Fn2n8/jGwGPwKNriM/QnWg6lgG7jZ0n8CrAHHLYqisAy8ZHP9FAnIj6l0E5cU8NZZ+sq4HAVbHOYotggmIDQ8ZoDikL8PcbMASjFDKMg0FCXcbMfYzw5TUV+dYNOUpdIuoBRRpYbkwp7zYpNRFPL1B1jsd4c5lCA+gQMs5G3gcQ/WdAvcDiazUtzl6/ngXDHGCSN+iL2JGto4iOKlEI5CAZimuVjlxx8JC1sDAWd5sKbb7LYIFTZWHtCwhEw6+wmu8vMTgqCNq1AuIiL67eINLSxbWZjQ5ABbT6xdG7mkdhtlUvUuVrj4eEKgGXdOcta2CbwnFvsUix12+K4UAAmnn336AnZ39R65NlKeHChHBicThZpWTniPNWX73q2xNtIBSz3iKceC01Gu13QRKt4MYp434LgI2mWYK82Ddcl7qmAXnBqFcFLpDCOY7We3Jl0bWcxGtiLHxfK5oYibs9BuI6K+QW2CJRbEyrWR2+oSwinleh/6whpTZHB8VNzvZ7emtPEImMtnGsJrLLbf4TuVQgHmcfZkZ1l3PHJt+axM7zStZojPNFa0+V04T8AvvMl7NRcr481h8IdonwazeMwhj4RzBlzKdHXBULQhjq1xlRDQjY/BJTWjuk9Yg5NLo0NflXAnFyz9a1lglLbmclxzQjrG2W1uM7570eZ+wxjfh+oKvvQRfBFPz+6ifdkmU+YBlw0tEoe+kE3//ShTalKkahvmuFjP3/MPJyNxg6Qox9OGnuO626uF38J/252DHoq5nFLxmy7PtR479F0BU7h+NRBnSKC/RsH81f+j6swrA32wmyXrDWLfary2nJX8jsJADwsn060dZRrEYUJgMNkxx8BYjoERjhGOgRHO/40/AgwA6Pwl5bmDALcAAAAASUVORK5CYII=",
          Eu =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA4CAYAAABJ7S5PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEJGOUM2QTBGNkY5MTFFOUJBQTg4OUJENjhFNUQyN0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEJGOUM2OUZGNkY5MTFFOUJBQTg4OUJENjhFNUQyN0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI2RThDNjdERjZGODExRTk5N0QwOTZDNjI3Q0M0MTRDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI2RThDNjdFRjZGODExRTk5N0QwOTZDNjI3Q0M0MTRDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XKq1FgAAAwJJREFUeNrsm4tRhDAQhoNjA7RAC7QQSzhLiCVgCVgClnBXAlcClAAlYAlnMm7OHeSRF4HEy8yOzp0w7Mfun90kJrfbjTwGIU8PBD/j2fYGSZJs/YwpN8Yt55bBTzmu3Fqwi8nN7xkhfrGxDYdwuhKPqGgdANO5d3r3Y8Y5ujMI4dCgAQFbM4oaPHIEt8KBMOVYBn/IdgJRGQLANiAYlFsJEYO/z9ZAFOgC5hmECwjY2bnvCqwRcyCa0UXME4iTQwhLVo3F8g8IUOipi9nGIFILTTCGAGlTTIGgS+G0IYjCA4QCdOGENGOQM4cOCGFnPOU4BLF1NHRzgjqXGlTxptQhCF/a8CfdlzSCatyohNwOIS0mIZiI5dIUxSxB1B4BDBCBRGX67AxzkB0cxGTFKf2e6j5NmhdZuw9InY82LtCcKbfhn5b1gJyaGoCSB9mG8zDpeWv9gctQw5EjCF+jlvkLvZ0WRHrfMVMk+ar0fFqx5P/TzJfijb1EtgjVKi/V8ZQ4caMAQ1z4CmH879YshdM1h9FxK+Gzd259BL72yhqhWVmGZkRZI/gH10gj/6qbGquiEqNQblFQhakPC3VEF5k+ZFoagcZ7ZGnRm6SGIHSJKEXUmsiVFeoq5rRYXI+IDEatGgiq23pFoE0YcwoCdaRFQDNKpyMNydpKtGjERo2X3BugBxfJNxXBVz4WsNMqs5do0BXLEBdpmHMQAUZFrZM/JmJ5DgDCoLuCbjprNCGuSzoFEQCMs83itekBsqNpRkMM92GtQKCzVuUBZpTBZhNJuaBaG3DOksLDyDORqaeiSW47tDYglAoqjcNkqeeZxSoSnKXGCATznCJOIDgDASlRE//ls7ONZWMQO3ehtWv90e01KDjfhFQs6YB4BuWnE2qfkmOcbWihpd52v2X05suDtdJsa8prh9KrHQslLwCUNQIVR7504UxGJ958glCqLLmGyOW53OHD9uT3ONGF7HQOQ/pvVGKDuGZoRiGoxJ7bie6RKe0+HR5EjOPxX34wvgUYAA3Q5FQ1OsEYAAAAAElFTkSuQmCC";
        var uo = p(71647),
          fu = Object.defineProperty,
          xu = Object.getOwnPropertyDescriptor,
          La = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? xu(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && fu(t, n, l), l;
          };
        const bu = {
          localized_headline: new Array(N.bP9),
          localized_body: new Array(N.bP9),
          localized_image: new Array(N.bP9),
          button_destination: mt.gs.k_EEventPage,
          button_loc_token: "EventEmail_Button_ClickForMoreDetails",
          video_link: "",
        };
        let Qn = class extends E.Component {
          GetEmailEditModel() {
            return new Xe.pC(this.props.editModel);
          }
          render() {
            const { editModel: a } = this.props;
            let t = a.GetCurEditLanguage(),
              n = this.GetEmailEditModel(),
              i = [];
            n.GetSectionObjects().forEach((o, r) => {
              i.push(
                (0, e.jsx)(
                  It,
                  {
                    lang: t,
                    clanSteamID: a.GetClanSteamID(),
                    bEditor: a.BIsEmailEditable(),
                    appid: a.GetAppID(),
                    section: o,
                    additionalClassName: k.HeaderSection,
                    bTemplateEditable: !0,
                    fnRemoveSection: () => n.RemoveSection(r),
                  },
                  "email_editor_section_" + r,
                ),
              );
            });
            let l = n.GetLocalizedSubject(t);
            return (0, e.jsxs)("div", {
              className: k.EmailEditorContent,
              children: [
                (0, e.jsxs)("div", {
                  className: k.RightAlign,
                  children: [
                    (0, e.jsxs)("span", {
                      className: k.EmailOptionTitle,
                      children: [(0, s.we)("#LanguageTitle"), ": "],
                    }),
                    (0, e.jsx)(Wn.Ng, {
                      selectedLang: t,
                      fnLangHasData: n.BHasSomeLanguage,
                      fnOnLanguageChanged: (o) => a.SetCurEditLanguage(o),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(f().FlexRowContainer, k.EmailSubjectCtn),
                  children: [
                    (0, e.jsx)("span", {
                      className: k.EmailOptionTitle,
                      children: (0, s.we)("#EventEmail_Subject"),
                    }),
                    (0, e.jsx)("input", {
                      type: "text",
                      value: l,
                      size: 90,
                      maxLength: 250,
                      onChange: (o) =>
                        this.GetEmailEditModel().SetLocalizedSubject(
                          a.GetCurEditLanguage(),
                          o.currentTarget.value,
                        ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(k.EmailTemplate, k.DevEmailTemplate),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, j.A)(k.CenterAlign, k.DevEmail_TopHeader),
                      children: (0, e.jsx)("a", {
                        href: D.TS.PARTNER_BASE_URL,
                        children: (0, e.jsx)("img", {
                          src: gu,
                          className: k.DevEmail_TopLogo,
                        }),
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, j.A)(k.DevEmail_Content),
                      children: (0, e.jsx)("div", {
                        className: k.DevEmail_Subject,
                        children: l,
                      }),
                    }),
                    i,
                    (0, e.jsxs)("div", {
                      className: (0, j.A)(k.EmailSection, k.SupportCtn),
                      children: [
                        (0, e.jsx)("b", { children: "Have Questions?" }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("a", { href: "#", children: "Contact us" }),
                        " and we'll get right back to you.",
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, j.A)(k.DevEmail_Content),
                      children: [
                        (0, e.jsx)("img", {
                          src: Su,
                          className: k.DevEmail_SignOff_Img,
                        }),
                        (0, e.jsx)("div", {
                          className: k.DevEmail_Signoff,
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
                  className: (0, j.A)(k.DevEmail_Footer_Ctn),
                  children: [
                    (0, e.jsx)("span", {
                      className: k.DevEmail_Footer_Reason,
                      children: (0, s.we)(
                        "#EventEmail_Developer_Footer_Reason",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: k.DevEmail_Footer_SubSection,
                      children: [
                        (0, e.jsx)("img", { src: co, width: 103, height: 43 }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              className: k.DevEmail_Footer_Bold,
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
                              className: k.DevEmail_Footer_Regular,
                              children: (0, s.we)(
                                "#EventEmail_Developer_Footer_Valve3",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              children: (0, e.jsxs)("a", {
                                className: f().FlexRowContainer,
                                href:
                                  (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                                  "https://twitter.com/steam_games",
                                target: D.TS.IN_CLIENT ? void 0 : "_blank",
                                children: [
                                  (0, e.jsx)("img", {
                                    src: Eu,
                                    width: 33,
                                    height: 28,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: k.DevEmail_Follow,
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
                  className: (0, j.A)(f().Button, k.CenterAlign),
                  onClick: () => {
                    n.AddSection(bu);
                  },
                  children: (0, s.we)("#EventEmail_Template_AddSection"),
                }),
              ],
            });
          }
        };
        Qn = La([R.PA], Qn);
        let _a = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                capabilities: void 0,
                selectedCapability: void 0,
                nDuplicatesRemoved: 0,
              }),
              (this.m_cancelSignal = pe().CancelToken.source()),
              (this.m_appFileInput = E.createRef()),
              (this.m_pubFileInput = E.createRef());
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("DevEventRecipientOptions cancelled");
          }
          async componentDidMount() {
            let a = await P.mh.GetPartnerCapabilities(this.m_cancelSignal),
              t = this.GetEmailEditModel(),
              n = { label: a[0].capability, value: a[0] };
            a.forEach((i) => {
              i.id === t.GetInternalTargetingPartnerCapability() &&
                (n = { label: i.capability, value: i });
            }),
              this.setState({ capabilities: a, selectedCapability: n });
          }
          GetEmailEditModel() {
            return new Xe.pC(this.props.editModel);
          }
          async OnFileChoice(a, t) {
            let n = t.target.files;
            if (n && n.length > 0 && n[0]) {
              let i = this;
              this.setState({ readingFile: !0, file: n[0] }, () => {
                const l = new FileReader();
                (l.onload = function () {
                  const o = l.result
                      .toString()
                      .split(`
`)
                      .map((d) => Number.parseInt(d)),
                    r = new Set(o);
                  a == "app"
                    ? i.GetEmailEditModel().SetInternalAppIDs(Array.from(r))
                    : i
                        .GetEmailEditModel()
                        .SetInternalPublisherIDs(Array.from(r)),
                    i.setState({
                      readingFile: !1,
                      nDuplicatesRemoved: o.length - r.size,
                      file: null,
                    });
                }),
                  (l.onerror = function () {
                    console.error(
                      "DevEventRecipientOptions - Failed to read file",
                      l,
                    ),
                      i.setState({ readingFile: !1, file: null });
                  }),
                  l.readAsText(this.state.file);
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
            (0, W.pg)(
              (0, e.jsx)(V.o0, {
                strTitle: (0, s.we)(
                  a == "app"
                    ? "#EventEmail_Developer_ShowApps"
                    : "#EventEmail_Developer_ShowPublisher",
                  n.length,
                ),
                onOK: () => {},
                onCancel: () => {},
                bAlertDialog: !0,
                children: n.map((i) =>
                  (0, e.jsx)("div", { children: i }, a + "_" + i),
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
              return (0, e.jsx)(Z.t, { string: (0, s.we)("#Loading") });
            let a = this.GetEmailEditModel();
            const t = this.state.capabilities.map((l) => ({
                value: l,
                label: l.capability,
              })),
              n = Mn.PubRights.map((l) =>
                (0, e.jsx)(
                  g.Yh,
                  {
                    onChange: (o) =>
                      a.UpdateInternalTargetPublisherRights(l.flag, o),
                    label: (0, s.we)("#PubRight_" + l.token),
                    tooltip: (0, s.we)("#PubRight_" + l.token + "_Tooltip"),
                    checked: a.BHasInternalTargetingPublisherRight(l.flag),
                  },
                  "PubRights" + l.flag,
                ),
              ),
              i = Mn.AppRights.filter(
                (l) =>
                  ![Da.Download, Da.UploadCDKeys, Da.ManageCEG].includes(
                    l.token,
                  ),
              ).map((l) =>
                (0, e.jsx)(
                  g.Yh,
                  {
                    onChange: (o) => a.UpdateInternalTargetAppRights(l.flag, o),
                    label: (0, s.we)("#AppRight_" + l.token),
                    tooltip: (0, s.we)("#AppRight_" + l.token + "_Tooltip"),
                    checked: a.BHasInternalTargetingAppRight(l.flag),
                  },
                  "AppRights" + l.flag,
                ),
              );
            return (0, e.jsxs)("div", {
              className: k.RecipientCtn,
              children: [
                (0, e.jsx)("div", {
                  className: (0, j.A)(f().EventEditorTextTitle),
                  children: (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Recipients"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEmail_Recipients_desc"),
                    }),
                    (0, e.jsx)("table", {
                      className: k.DevEmail_RecipientTable,
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
                                children: (0, e.jsx)(g.Yh, {
                                  onChange: (l) =>
                                    a.SetInternalTargetPriority(l),
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
                                children: (0, e.jsx)(da.Ay, {
                                  className: "react-select-container",
                                  classNamePrefix: "react-select",
                                  isSearchable: !0,
                                  isMulti: !1,
                                  value: this.state.selectedCapability,
                                  options: t,
                                  onChange: (l) =>
                                    this.setState(
                                      { selectedCapability: l },
                                      () =>
                                        this.GetEmailEditModel().SetInternalTargetPartnerCapability(
                                          l.value.id,
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
                              (0, e.jsx)("td", { children: i }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    this.state.readingFile &&
                      (0, e.jsx)(Z.t, { size: "small" }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("b", {
                        children: (0, s.we)(
                          "#EventEmail_Developer_FilterOptional",
                        ),
                      }),
                    }),
                    this.state.nDuplicatesRemoved > 0 &&
                      (0, e.jsx)("div", {
                        className: Wt.WarningStylesBackground,
                        children: (0, e.jsx)("b", {
                          children: (0, s.we)(
                            "#EventEmail_Developer_DuplicateRemoved",
                            (0, _t.D)(this.state.nDuplicatesRemoved),
                          ),
                        }),
                      }),
                    (0, e.jsxs)("div", {
                      className: k.TargetCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: k.TargetTypeTitle,
                          children: (0, e.jsx)("b", {
                            children: "App Targeting",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: k.TargetTypeCtn,
                          children: [
                            !!a.GetInternalTargetAppCount() &&
                              (0, e.jsxs)("div", {
                                className: k.TargetedListCtn,
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
                              className: k.SelectListCtn,
                              children: [
                                (0, s.we)("#EventEmail_Developer_AddApps"),
                                (0, e.jsx)("label", {
                                  className: uo.SelectImageButton,
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
                                  onSubmit: (l) => this.OnFileChoice("app", l),
                                  onChange: (l) => this.OnFileChoice("app", l),
                                  multiple: !1,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: k.TargetCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: k.TargetTypeTitle,
                          children: (0, e.jsx)("b", {
                            children: "Publisher Targeting",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: k.TargetTypeCtn,
                          children: [
                            a.GetInternalTargetPublisherCount() &&
                              (0, e.jsxs)("div", {
                                className: k.TargetedListCtn,
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
                              className: k.SelectListCtn,
                              children: [
                                (0, s.we)("#EventEmail_Developer_AddPublisher"),
                                (0, e.jsx)("label", {
                                  className: uo.SelectImageButton,
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
                                  onSubmit: (l) =>
                                    this.OnFileChoice("publisher", l),
                                  onChange: (l) =>
                                    this.OnFileChoice("publisher", l),
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
        La([X.oI], _a.prototype, "OnFileChoice", 1),
          La([X.oI], _a.prototype, "ShowTargets", 1),
          La([X.oI], _a.prototype, "ClearTargets", 1),
          (_a = La([R.PA], _a));
        const ju =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAgCAYAAAAPHGYtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABo1JREFUeNrsWg1MVlUY/iDTElOcI9ZgZBorV8ywVFYGc05mZQbmMgoNk37NQq3IJZWoLf+l9eMqSQ1lpm4aWgStpauZYbl+wK3EssjKflYmtAyi59Hnbme3e7/v3o9PVtt9t2fnfPe+55x7z3Pe97znvV9cZ2dnKJD/pvTwqji5oLAPiuuAscBwYBDQR7dbgWZgP1APbN9UXXU8mN6uSVwkywEpyShKgTsMMiJJG1AJLAZJLcE0x5gckBKH4i5gCXBOlP3TesqACpAU+M9YkANieqN4GbgpRuPsYLcgqC2Y8i6QI2I4maNjPNYHwJhgL4qSHLmyzcCNUfTVAewGPtHvoUA2EG/o1DKoAEF/B1PvP1q7P0pidjFgwKR/YbPCdBQviSTKOOAR4Mlg6n1YDiYyBQUn92yffbwJXC/L4R6Va1ynFZ4B7FQITvkTyLATGci/xXQ5ZVEQw/NNkeo1wBxgr8D6awDZv026lF7AY8HUe7QcWE1/1I8AZ/lsvxYWMA3t6Q4n0jrw+y9ZIl1mHbAN157G73WoTzX2p1Rc/97D4XegiL4SSAR+VHCxBu0/ls5CFJdG6KoG+muk/wKKc130jkLvTofn4KKqAs4EGqCzyOV556IYCRyEzoMuOv0UDcfrPWpwrQD1nnw//H7dtJyJURBjRWBW+6UWMRTU23kNyNOlvUY7urrJHoi5GAUJuA8YpqwEX3wm8D7uD5DqKOCGCMgwus4No5fr8jh03ZOkU4axE130RkpnDnQud9HhgT5feoOhd772/1vNM6UVEIyNgpgTis5Ccoe/O+jwWm/V2233OGZFhDEYPPRV25kiipZUCHyGBfCz9J6hhapOEm5XfQHwi+r7Hfpnqmmjw8HZSYqMei9N5LMRnr/UflYEEbS8B2x6fI8kvcdgOznDoyDncUxOo+rvArcYZFlSaFy7yHbvCg9jDFTZjLFWq74HqMZLxhtWusV4+TyDnErc+ypM/024v9aDBZ+nSNN6V1rqdA/kTELbCzHGQeMayUo1lXj2g95WVGlp6+3kJPsk5j25LEsWA/swwAqU1iTSb19D4uWv7dmGZFxPwIO1hhnncyCHxEJ3h1ZWPdp0xOis1Fd7miktcsmmTJErJtGz5c4z0XYYdD8Kt6cDDykNZonjPoR+DqM47BSt8QEfBg55zJdN5QQZHR9FkSUX9JZAn5yle/Ptq0WSGGGsJ0Knst0UZsTfYOCCSVkQxuf7kWnAlzakhnFpm/A+DTpyhAwLdZK3Ae7BRbI8WuAYFJcBJPQ3T6E0BvwJoCWka7UzBHZbmSXQPeTA/BGgGEgTihl54IHmy/f6FvapTMMs4FNdZpQ1D/jQCAhOm2CMESiGWI+kstpy27jvFkh9A2xQBFaia7NVPuU7QyBXwRRLLQZNk2sqFlF8oANWOBrmZZK0h2XqfJMeRv1XDwTR7a0i0Pcl2uTzFbkxNF/ZhblntrzEg3VZZ7ocPEOOYfH9lFHZ4NJ2qebgbrTjgr9WVsf95UU/h1D7pHwNcIWmaSJITgYGmcG9woWY8SgalRFYGIGYHyLsN+wvQecl65kabZFO0mm2GlpFgX4maCGsVJrLkulh5rBJh3O6++26vMTrftnDw8o9oSo3/DbtTVwJV+HeMb0EQ+nlwD0+3n2fBx1OwgytuiaFsAXG/YYuzj83dbvlHMN7VaqeJ+s4OanAH4beUN0fjT4GObl6w4VNAAbooL/eV+JT4SeTk8+Hy3lpJXCD2yg/Wo56psx6iM+JqfegczOQ4kJ6nbEao5VsIylrCSOmSlsgwDNVqc2qUnWIjFNgMM9lzvZAd7fGWWEsds+Ws0tuaxY6YqT1nNId7S7tuC/lQzdLbXv6nJQOY3MNJ+N0VuK3pQsUznKFblHqyMk9fGeQ5vZxry5c+sbwBq3qa6vDpLdAp0LP1d+4ZWVCzBCbi2uEntuSnXKVzV6y0qtt8fi3iu/fsX9ihu5y5ZgOiEi/UoU+pwSpTe97ziKRYaVbUpQ+4QphFvkVnQPGKwLhSlgXxZj8ZFAeTH1kMVMgjMsftd3PVfi3TMm6zSLlauWWRkUxZnnwLce/5YSUiMzWOcKSVUoq8nzTIh+7TKT5lVqvB7BAgj94/D/cmuHe2rSvvBrDcU6SHRDTRXIMgnjGuDfk/J3GqxxXXmxC8J+1GLg1hxQGPyfM1UHL6z8/g7/jdgc5Zp4rdOpTrflHdivHZv6RnYfYbYEL60ZyAul++UeAAQDyv2dSS4HffQAAAABJRU5ErkJggg==";
        var Cu = Object.defineProperty,
          wu = (a, t, n) =>
            t in a
              ? Cu(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          ho = (a, t, n) => wu(a, typeof t != "symbol" ? t + "" : t, n);
        const po = (a) => {
            const [t, n] = (0, E.useState)(a ? void 0 : !1);
            return (
              (0, E.useEffect)(() => {
                const i = pe().CancelToken.source();
                return (
                  a &&
                    (async () => {
                      const o = await yu
                        .Get()
                        .HintLoadIsAppReleaseInSteamChina(a, i);
                      i.token.reason || n(o);
                    })(),
                  () => i.cancel("useSteamChinaAppIsVisible: unmounting")
                );
              }, [a]),
              !!t
            );
          },
          mo = class Va {
            constructor() {
              ho(this, "m_mapAppToSCVisibility", new Map());
            }
            BIsAppReleasedInSteamChina(t) {
              return !!this.m_mapAppToSCVisibility.get(t);
            }
            async HintLoadIsAppReleaseInSteamChina(t, n) {
              var i;
              if (this.m_mapAppToSCVisibility.has(t))
                return this.m_mapAppToSCVisibility.get(t);
              const l = D.TS.COMMUNITY_BASE_URL + `ogg/${t}/ajaxisvisibleinsc`;
              try {
                const o = await pe().get(l, {
                  withCredentials: !0,
                  cancelToken: n.token,
                });
                if (
                  ((i = o == null ? void 0 : o.data) == null
                    ? void 0
                    : i.success) == Ue.R &&
                  !n.token.reason
                )
                  return (
                    this.m_mapAppToSCVisibility.set(t, !!o.data.visible),
                    !!o.data.visible
                  );
              } catch (o) {
                const r = (0, ye.H)(o);
                console.error(
                  "HintLoadIsAppReleaseInSteamChina: " + r.strErrorMsg,
                  r,
                );
              }
              return !1;
            }
            static Get() {
              return (
                Va.s_Singleton || (Va.s_Singleton = new Va()), Va.s_Singleton
              );
            }
          };
        ho(mo, "s_Singleton");
        let yu = mo;
        function Du(a) {
          const { editModel: t } = a,
            n = (0, Za.E)(),
            l = new Xe.pC(t).GetSectionObj(0),
            [o, r] = (0, B.q3)(() => [l.GetHeadline(n), l.GetBody(n)]);
          return (0, e.jsx)("div", {
            className: k.EmailEditorContent,
            children: (0, e.jsx)("div", {
              className: k.EmailTemplate,
              children: (0, e.jsxs)("div", {
                className: (0, j.A)(k.DevEmailEmailBackground, k.EmailSection),
                children: [
                  (0, e.jsx)("p", {
                    children:
                      "This description and location information is automatically injected into the registration and reminder emails",
                  }),
                  (0, e.jsx)(g.JU, {
                    children: "Short Description For Email Rendering",
                  }),
                  (0, e.jsx)("textarea", {
                    className: k.BodyInput,
                    placeholder: "Come join us...",
                    value: o,
                    rows: 8,
                    onChange: (d) =>
                      l.SetHeadline(d.currentTarget.value || "", n),
                  }),
                  (0, e.jsx)(g.JU, {
                    children: "Event Location (address / building)",
                  }),
                  (0, e.jsx)("textarea", {
                    className: k.BodyInput,
                    placeholder: "10040 NE 4th Ave..",
                    value: r,
                    rows: 8,
                    onChange: (d) => l.SetBody(d.currentTarget.value || "", n),
                  }),
                ],
              }),
            }),
          });
        }
        var _o = p(25515),
          Tu = p(31501),
          Iu = Object.defineProperty,
          Au = Object.getOwnPropertyDescriptor,
          at = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Au(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Iu(t, n, l), l;
          };
        function vo(a, t) {
          return a.BHasEmailEnabled() ||
            a.clanSteamID.GetAccountID() == (0, ra.H)()
            ? !0
            : (D.UF.IS_OGG || D.UF.IS_VALVE_GROUP) &&
                !!(t != null && t.valve_admin);
        }
        const Gu = (0, R.PA)((a) => {
            const { editModel: t } = a,
              { bHasValidatedEmail: n } = (0, ou.n)(),
              { data: i } = (0, Ut.hM)(t.GetClanAccountID());
            if (!vo(t.GetEventModel(), i)) return null;
            const o = (0, ra.H)() !== t.GetClanAccountID();
            return (0, e.jsxs)(E.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: k.EmailTabCtn,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, j.A)(f().EventEditorTextTitleCtn),
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, j.A)(
                            f().EventEditorTextTitle,
                            f().FlexGrow,
                          ),
                          children: (0, s.we)("#EventEmail_FeatureTitle"),
                        }),
                        (0, e.jsx)("a", {
                          href: "#",
                          className: (0, j.A)(f().doclink),
                          children: (0, e.jsx)("span", {
                            children: (0, s.we)(
                              "#selectimage_see_documentation",
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, j.A)(f().FlexColumnContainer),
                      children: (0, e.jsx)(g.RF, {
                        label: (0, s.we)("#EventEmail_EnableEmailOption"),
                        onChange: (r) => {
                          const { editModel: d } = a,
                            m = d.GetClanSteamID().GetAccountID();
                          (d.CreateOrGetEmailSettings(m).bEnable = r),
                            d.SetDirty(C.IQ.jsondata_email);
                        },
                        checked: t.BIsEmailEnabled(),
                      }),
                    }),
                  ],
                }),
                !!t.BIsEmailEnabled() &&
                  (0, e.jsxs)("div", {
                    className: de.EventEditorInputPaneContainer,
                    children: [
                      o &&
                        (0, e.jsx)(ve.tH, {
                          children: (0, e.jsx)(Pa, { editModel: t }),
                        }),
                      o &&
                        (0, e.jsx)(ve.tH, {
                          children: (0, e.jsx)(Pt, {
                            editModel: t,
                            bHasValidatedEmail: n,
                            permissions: i,
                          }),
                        }),
                      (0, e.jsx)(ve.tH, {
                        children:
                          (0, ra.H)() === t.GetClanAccountID()
                            ? (0, e.jsx)(Du, { editModel: t })
                            : (0, e.jsx)(e.Fragment, {
                                children: D.UF.IS_VALVE_GROUP
                                  ? (0, e.jsx)(Qn, { editModel: t })
                                  : (0, e.jsx)(Bu, { editModel: t }),
                              }),
                      }),
                      (0, e.jsx)(Nu, { editModel: t }),
                      o &&
                        (0, e.jsx)(ve.tH, {
                          children: D.UF.IS_VALVE_GROUP
                            ? (0, e.jsx)(_a, { editModel: t })
                            : (0, e.jsxs)(E.Fragment, {
                                children: [
                                  (0, e.jsx)(Yn, {
                                    editModel: t,
                                    permissions: i,
                                  }),
                                  (0, e.jsx)(hn, {
                                    editModel: t,
                                    permissions: i,
                                  }),
                                ],
                              }),
                        }),
                    ],
                  }),
              ],
            });
          }),
          Nu = (a) =>
            po(a.editModel.GetAppID())
              ? (0, e.jsx)("div", {
                  className: Wt.WarningStylesBackground,
                  children: (0, s.we)("#EventEmail_SteamChina_Warning"),
                })
              : null;
        let Pt = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSettingUp: !1 }),
              (this.m_cancelSignal = pe().CancelToken.source());
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventEmailControlBar cancelled");
          }
          FireTestEmail() {
            const { editModel: a } = this.props;
            P.mh
              .FireTestEmail(
                a.GetClanSteamID(),
                a.GetGID(),
                a.GetCurEditLanguage(),
                this.m_cancelSignal,
              )
              .then((t) => {
                (0, W.pg)(
                  (0, e.jsx)(V.o0, {
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
                (0, W.pg)(
                  (0, e.jsx)(V.KG, { children: (0, ye.H)(t).strErrorMsg }),
                  window,
                );
              });
          }
          OnTestEmail(a) {
            const { editModel: t } = this.props;
            a.preventDefault(),
              this.props.bHasValidatedEmail &&
              !t.BIsDirtyType(C.IQ.jsondata_email)
                ? (0, W.HT)(
                    (0, e.jsx)(V.o0, {
                      strTitle: (0, s.we)("#EventEmail_Test_Email"),
                      onOK: this.FireTestEmail,
                      onCancel: () => {},
                      children: (0, s.PP)(
                        "#EventEmail_Send_TestEmail_Desc",
                        (0, e.jsx)("a", {
                          target: D.TS.IN_CLIENT ? void 0 : "blank",
                          href: D.TS.STORE_BASE_URL + "account/",
                          children: D.TS.STORE_BASE_URL + "account/",
                        }),
                      ),
                    }),
                    (0, F.uX)(a),
                  )
                : t.BIsDirtyType(C.IQ.jsondata_email)
                  ? (0, W.pg)(
                      (0, e.jsx)(V.KG, {
                        children: (0, s.we)("#EventEmail_Test_Dirty"),
                      }),
                      window,
                    )
                  : (0, W.pg)(
                      (0, e.jsx)(V.KG, {
                        children: (0, s.PP)(
                          "#EventEmail_Test_Email_Fail",
                          (0, e.jsx)("a", {
                            target: D.TS.IN_CLIENT ? void 0 : "blank",
                            href: D.TS.STORE_BASE_URL + "account/",
                            children: D.TS.STORE_BASE_URL + "account/",
                          }),
                        ),
                      }),
                      window,
                    );
          }
          OnPrepareEmail(a) {
            (0, W.pg)(
              (0, e.jsx)(pn, { editModel: this.props.editModel }),
              (0, F.uX)(a),
            );
          }
          OnSetupAndFireEmailConfirm(a) {
            (0, W.HT)(
              (0, e.jsx)(V.o0, {
                strTitle: "(VO) Setup and Send Email",
                onOK: () =>
                  this.setState({ bSettingUp: !0 }, this.OnSetupAndFireEmail),
                onCancel: () => {},
                children: (0, e.jsx)("div", {
                  children:
                    "(VO) Be thoughtful. Talk to Alden or Adil if not sure. By pressing this, we will setup a database entry to fire this email in its current form and target. Double check the audience make sense and the localization looks good. This will also begin firing immediately.",
                }),
              }),
              (0, F.uX)(a),
            );
          }
          async OnSetupAndFireEmail() {
            const { editModel: a } = this.props;
            try {
              let t = D.UF.IS_VALVE_GROUP
                ? await P.mh.SetupInternalPartnerCommunication(
                    this.m_cancelSignal,
                    a.GetClanSteamID(),
                    a.GetGID(),
                    a.GetEmailSettings().internal_targeting,
                  )
                : await P.mh.SetupPartnerEmailCampaign(
                    a.GetClanSteamID(),
                    a.GetGID(),
                    this.m_cancelSignal,
                  );
              (0, W.pg)(
                (0, e.jsxs)(V.o0, {
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
                (0, W.pg)(
                  (0, e.jsx)(V.o0, {
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
              className: k.ControlBarCtn,
              children: [
                (0, e.jsxs)("a", {
                  onClick: this.OnTestEmail,
                  className: f().EditPreviewButton,
                  children: [
                    this.state.bSettingUp && (0, e.jsx)(Z.t, { size: "small" }),
                    (0, s.we)("#EventEmail_Control_TestEmail"),
                  ],
                }),
                t &&
                  (n == null ? void 0 : n.valve_admin) &&
                  (0, e.jsx)("a", {
                    onClick: this.OnSetupAndFireEmailConfirm,
                    className: f().EditPreviewButton,
                    children: "(VO) Setup and Fire Email",
                  }),
                t &&
                  !(n != null && n.valve_admin) &&
                  (0, e.jsx)("div", {
                    children: (0, s.we)(
                      "#EventEmail_Ready_ValveRequiredToSend",
                    ),
                  }),
                !t &&
                  (0, e.jsx)("a", {
                    onClick: this.OnPrepareEmail,
                    className: f().EditPreviewButton,
                    children: (0, s.we)("#EventEmail_Control_Prepare"),
                  }),
              ],
            });
          }
        };
        at([X.oI], Pt.prototype, "FireTestEmail", 1),
          at([X.oI], Pt.prototype, "OnTestEmail", 1),
          at([X.oI], Pt.prototype, "OnPrepareEmail", 1),
          at([X.oI], Pt.prototype, "OnSetupAndFireEmailConfirm", 1),
          at([X.oI], Pt.prototype, "OnSetupAndFireEmail", 1),
          (Pt = at([R.PA], Pt));
        const Bu = (0, R.PA)((a) => {
          const { editModel: t } = a,
            n = (y) => {
              var L;
              let G = Array(),
                H = (L = it.A.Get().GetApp(y)) == null ? void 0 : L.GetName();
              return (
                mt.j3.forEach((te) =>
                  G.push(
                    (0, e.jsx)(
                      "option",
                      { value: te, children: (0, s.we)("#" + te, H) },
                      te,
                    ),
                  ),
                ),
                G
              );
            },
            i = (y) => {
              a.editModel.SetCurEditLanguage(y);
            },
            l = (y) => {
              mt.j3.forEach((L) => {
                L === y.target.value && new Xe.pC(t).SetSubjectTextLoc(L);
              });
            };
          let o = new Xe.pC(t),
            r = n(t.GetAppID()),
            d = t.GetCurEditLanguage();
          const m = t.GetAppID(),
            [c] = (0, Ie.t7)(m, { include_basic_info: !0 });
          if (!c)
            return (0, e.jsx)(Z.t, {
              string: (0, s.we)("#Loading"),
              position: "center",
              size: "small",
            });
          let v = o.GetSectionObj(0),
            h = o.GetSectionObj(1),
            _ = "#EventEmail_Reason_Played",
            u = !1,
            x = "#EventEmail_Footer_Reason_Played",
            b = c == null ? void 0 : c.GetStorePageURL(),
            S = c == null ? void 0 : c.GetName();
          if (!o.BIsTargetingGamePlayers()) {
            if (o.BIsTargetingGameFollowers())
              (_ = "#EventEmail_Reason_Follow"),
                (u = !0),
                (x = "#EventEmail_Footer_Reason_Followed");
            else if (o.BIsTargetingGameWishlisters())
              (_ = "#EventEmail_Reason_Wishlist"),
                (u = !0),
                (x = "#EventEmail_Footer_Reason_Wishlisted");
            else if (o.BIsTargetingSomeCreator()) {
              (_ = "#EventEmail_Reason_Follow"),
                (u = !0),
                (x = "#EventEmail_Footer_Reason_Followed");
              let y = o.GetSomeCreatorTarget(),
                L = c.GetAllCreatorClanIDs().find((G) => G == y);
              if (L) {
                const G = me.b.InitFromClanID(L);
                let H = $e.pF.GetCreatorHome(G);
                if (H) {
                  let te = "developer";
                  c.GetAllDeveloperCreatorClans().includes(L) ||
                    (c.GetAllPublisherCreatorClans().includes(L)
                      ? (te = "publisher")
                      : (te = "franchise")),
                    (b = H.GetCreatorHomeURL(te)),
                    (S = H.GetName());
                }
              }
            }
          }
          return (0, e.jsxs)("div", {
            className: k.EmailEditorContent,
            children: [
              (0, e.jsxs)("div", {
                className: (0, j.A)(f().FlexRowContainer, k.EmailSubjectCtn),
                children: [
                  (0, e.jsx)("span", {
                    className: k.EmailOptionTitle,
                    children: (0, s.we)("#EventEmail_Subject"),
                  }),
                  (0, e.jsx)("select", {
                    className: k.EmailSubjectSelect,
                    value: o.GetSubjectTextLoc(),
                    onChange: l,
                    children: r,
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: k.RightAlign,
                children: [
                  (0, e.jsxs)("span", {
                    className: k.EmailOptionTitle,
                    children: [(0, s.we)("#LanguageTitle"), ": "],
                  }),
                  (0, e.jsx)(Wn.Ng, {
                    selectedLang: d,
                    fnLangHasData: o.BHasSomeLanguage,
                    fnOnLanguageChanged: i,
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: k.EmailTemplate,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, j.A)(k.EmailIconHeader, k.CenterAlign),
                    children: (0, e.jsx)("img", { src: ju }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(
                      k.EmailBackground,
                      k.EmailReasonHeader,
                      k.EmailTextCtn,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: k.Hello,
                        children: (0, s.we)(
                          "#EventEmail_Hello",
                          (0, s.we)("#EventEmail_UserName"),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: k.Reason,
                        children: (0, s.we)(_, S),
                      }),
                      !u &&
                        (0, e.jsx)("a", {
                          className: k.GameLink,
                          href: b,
                          children: S,
                        }),
                    ],
                  }),
                  (0, e.jsx)(It, {
                    lang: d,
                    clanSteamID: t.GetClanSteamID(),
                    bEditor: t.BIsEmailEditable(),
                    appid: t.GetAppID(),
                    section: v,
                    additionalClassName: k.HeaderSection,
                  }),
                  (0, e.jsx)(It, {
                    lang: d,
                    clanSteamID: t.GetClanSteamID(),
                    bEditor: t.BIsEmailEditable(),
                    appid: t.GetAppID(),
                    section: h,
                    additionalClassName: k.HeaderSection,
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsxs)("div", {
                    className: k.Footer,
                    children: [
                      (0, e.jsx)("div", { children: (0, s.we)(x) }),
                      (0, e.jsx)("span", {
                        children: (0, s.we)("#EventEmail_Footer_Game", S),
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
                              S,
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
                    className: (0, j.A)(k.FooterLegal, f().FlexRowContainer),
                    children: [
                      (0, e.jsx)("img", { src: co }),
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
        let hn = class extends E.Component {
          constructor() {
            super(...arguments), (this.state = {});
          }
          GetEmailEditModel() {
            return new Xe.pC(this.props.editModel);
          }
          async componentDidMount() {
            let a = await oe.ac.LoadClanInfoForClanSteamID(
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
            if (!(t != null && t.support_user)) return null;
            if (!this.state.clanInfo)
              return (0, e.jsx)(Z.t, {
                string: (0, s.we)("#Loading"),
                size: "medium",
              });
            const n = this.GetEmailEditModel();
            return (0, e.jsxs)("div", {
              className: (0, j.A)(f().ValveOnlyBackground, k.RecipientCtn),
              children: [
                (0, e.jsx)("div", {
                  className: (0, j.A)(f().EventEditorTextTitle),
                  children: (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Filter"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEmail_Filter_Desc"),
                    }),
                    !!this.state.clanInfo.is_ogg &&
                      (0, e.jsx)(g.RF, {
                        onChange: (i) =>
                          this.GetEmailEditModel().SetFilterIRTopN(i),
                        label: (0, s.we)("#EventEmail_Filter_IR"),
                        checked: n.BIsIRTopNFiltering(),
                      }),
                    !!this.state.clanInfo.is_ogg &&
                      (0, e.jsx)(g.RF, {
                        onChange: (i) =>
                          this.GetEmailEditModel().SetFilterWishlist(i),
                        label: (0, s.we)("#EventEmail_Filter_Wishlist"),
                        checked: n.BIsWishListFiltering(),
                      }),
                    (0, e.jsx)(g.pd, {
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
        at([X.oI], hn.prototype, "OnControlGroupSpinnerChange", 1),
          (hn = at([R.PA], hn));
        let Yn = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = { bLoadingCreator: !0 }),
              (this.m_cancelSignal = pe().CancelToken.source());
          }
          async LoadCreatorHome() {
            this.state.bLoadingCreator ||
              this.setState({ bLoadingCreator: !0 });
            const { editModel: a } = this.props;
            it.A.Get().QueueAppRequest(a.GetAppID(), {
              include_basic_info: !0,
            });
            let t = new Array();
            (
              await $e.pF.LoadCreatorHomeListForAppIncludeHiddden(
                a.GetAppID(),
                this.m_cancelSignal,
              )
            ).forEach((i) => {
              let l = me.b.InitFromClanID(i.clan_account_id);
              t.push($e.pF.LoadCreatorHome(l, !1, this.m_cancelSignal));
            }),
              Promise.all(t).then((i) => {
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
            return new Xe.pC(this.props.editModel);
          }
          BuildCreatorHomeToggle(a) {
            let t = new Array(),
              n = new Array();
            if (this.state.bLoadingCreator)
              t.push((0, e.jsx)(Z.t, {}, "EmailRecipientControls_creator"));
            else {
              const { editModel: i } = this.props;
              let l = new Xe.pC(i);
              $e.pF
                .GetCreatorHomeListForAppIncludeHidden(i.GetAppID())
                .forEach((o) => {
                  let r = $e.pF.GetCreatorHomeByID(o);
                  if (
                    r &&
                    !n.some((d) => d.clan_account_id === r.GetClanAccountID())
                  ) {
                    let d = (0, e.jsxs)("a", {
                        target: D.TS.IN_CLIENT ? void 0 : "_blank",
                        href: r.GetCreatorHomeURL(o.type),
                        children: [
                          r.BIsHidden()
                            ? (0, s.we)("#EventEmail_CreatorHidden") + " "
                            : "",
                          r.GetName(),
                        ],
                      }),
                      m = (0, e.jsx)(Oa, {
                        audience: r.GetNumFollowers(),
                        label: (0, s.PP)(
                          "#EventEmail_Recipients_follower_creator",
                          d,
                        ),
                      });
                    t.push(
                      (0, e.jsx)(
                        g.RF,
                        {
                          onChange: (c) =>
                            this.GetEmailEditModel().SetTargetingCreator(
                              c,
                              o.clan_account_id,
                            ),
                          label: m,
                          checked: l.BIsTargetingCreator(r.GetClanAccountID()),
                        },
                        "RecipientToggle_" + o.clan_account_id,
                      ),
                    ),
                      a != null &&
                        a.support_user &&
                        ((m = (0, e.jsx)(Oa, {
                          valveOnly: !0,
                          label: (0, s.PP)(
                            "#EventEmail_Recipients_player_creator",
                            d,
                          ),
                        })),
                        t.push(
                          (0, e.jsx)(
                            "span",
                            {
                              className: (0, j.A)(f().ValveOnlyBackground),
                              children: (0, e.jsx)(g.RF, {
                                onChange: (c) =>
                                  this.GetEmailEditModel().SetTargetingCreatorPlayer(
                                    c,
                                    o.clan_account_id,
                                  ),
                                label: m,
                                checked: l.BIsTargetingCreatorPlayer(
                                  r.GetClanAccountID(),
                                ),
                              }),
                            },
                            "RecipientToggle_player_" + o.clan_account_id,
                          ),
                        ),
                        n.push(o));
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
            let t = new Xe.pC(a);
            const { permissions: n } = this.props;
            return (0, e.jsxs)("div", {
              className: k.RecipientCtn,
              children: [
                (0, e.jsx)("div", {
                  className: (0, j.A)(f().EventEditorTextTitle),
                  children: (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Recipients"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEmail_Recipients_desc"),
                    }),
                    (0, e.jsx)(g.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetTargetingExistingPlayer(i),
                      label: (0, s.we)("#EventEmail_Recipients_players"),
                      checked: t.BIsTargetingGamePlayers(),
                    }),
                    (0, e.jsx)(g.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetTargetingGameWishlist(i),
                      label: (0, s.we)("#EventEmail_Recipients_wishlist"),
                      checked: t.BIsTargetingGameWishlisters(),
                    }),
                    (0, e.jsx)(g.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetTargetingGameFollower(i),
                      label: (0, e.jsx)(Oa, {
                        label: (0, s.we)("#EventEmail_Recipients_follower"),
                        audience: oe.ac.GetClanMemberCount(a.GetAppID()),
                      }),
                      checked: t.BIsTargetingGameFollowers(),
                    }),
                    (0, e.jsx)(g.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetExcludeGameOwners(i),
                      label: (0, e.jsx)(Oa, {
                        label: (0, s.we)(
                          "#EventEmail_Recipients_exclude_owners",
                        ),
                      }),
                      checked: t.BIsExcludingGameOwners(),
                    }),
                    (0, e.jsx)(g.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetOwnersWithNoPlaytime(i),
                      label: (0, e.jsx)(Oa, {
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
        Yn = at([R.PA], Yn);
        class Oa extends E.Component {
          render() {
            const { valveOnly: t, label: n } = this.props;
            return (0, e.jsxs)("div", {
              className: k.TargetAndAudience,
              children: [
                (0, e.jsxs)("span", {
                  children: [t && (0, e.jsx)("span", { children: "(VO) " }), n],
                }),
                (0, e.jsx)("span", {
                  children:
                    this.props.audience !== void 0 &&
                    (0, _t.D)(this.props.audience),
                }),
              ],
            });
          }
        }
        let pn = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                state: this.props.editModel.BIsDirty() ? "unsaved" : "loading",
              });
          }
          componentDidMount() {
            const { editModel: a } = this.props;
            if (this.state.state == "loading") {
              let t = (0, _o.Lk)(a),
                n = (0, _o.Z6)(a);
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
            new Xe.pC(a).LockEmail(),
              this.setState({ state: "saving" }, () => {
                P.mh.SaveModel(a.GetClanSteamID()).then((n) => {
                  this.setState({ state: "done" });
                });
              });
          }
          render() {
            switch (this.state.state) {
              case "loading":
                return (0, e.jsx)(V.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                  closeModal: this.props.closeModal,
                  children: (0, e.jsx)(Z.t, {}),
                });
              case "ready":
                return (0, e.jsx)(V.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Desc"),
                  onOK: this.OnLockEmail,
                  onCancel: this.props.closeModal,
                });
              case "readywithwarning":
                return (0, e.jsx)(V.o0, {
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
                return (0, e.jsx)(V.KG, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Unsaved"),
                  closeModal: this.props.closeModal,
                });
              case "saving":
                return (0, e.jsx)(V.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)(
                    "#EventEmail_Preparation_InProcess",
                  ),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                  children: (0, e.jsx)(Z.t, {}),
                });
              case "done":
                return (0, e.jsx)(V.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Done"),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                });
              default:
                return (0, e.jsx)(V.KG, {
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
        at([X.oI], pn.prototype, "OnLockEmail", 1), (pn = at([R.PA], pn));
        const go = 300;
        let Pa = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = { rtimeLastRefresh: 0, bRefreshing: !1 });
          }
          RefreshIfNeeded() {
            let a = Math.floor(Date.now() / 1e3);
            const { editModel: t } = this.props;
            !this.state.err_msg &&
              t.GetEventModel().jsondata.email_setting.force_feature_id &&
              this.state.rtimeLastRefresh + go < a &&
              !this.state.bRefreshing &&
              this.setState({ bRefreshing: !0 }, this.RefreshStats);
          }
          async RefreshStats() {
            const { editModel: a } = this.props;
            let t =
                D.TS.COMMUNITY_BASE_URL + "eventemail/ajaxgetpartneremailstats",
              n = {
                clanid: a.GetClanSteamID().GetAccountID(),
                gidevent: a.GetGID(),
                sessionid: (0, D.KC)(),
              };
            try {
              let i = await pe().get(t, { params: n, withCredentials: !0 });
              this.setState({ stats: i.data.result, bRefreshing: !1 });
            } catch (i) {
              this.setState({
                bRefreshing: !1,
                err_msg: (0, ye.H)(i).strErrorMsg,
              });
            }
          }
          componentDidMount() {
            this.RefreshIfNeeded(),
              (this.autoRefreshInterval = window.setInterval(
                this.RefreshIfNeeded,
                go * 1e3,
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
            var a, t, n, i, l, o, r, d, m, c;
            const { editModel: v } = this.props;
            if (!v.GetEventModel().jsondata.email_setting.force_feature_id)
              return (0, e.jsx)("div", {});
            if (this.state.err_msg)
              return (0, e.jsxs)("div", {
                className: de.EventEditorInputPaneContents,
                children: [
                  (0, e.jsx)("div", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Stats_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, j.A)(
                      f().FlexColumnContainer,
                      f().EventDefaultRowContainer,
                    ),
                    children: (0, e.jsx)("span", {
                      className: Tu.ErrorMessaage,
                      children: this.state.err_msg,
                    }),
                  }),
                ],
              });
            if (!this.state.stats)
              return (0, e.jsxs)("div", {
                className: de.EventEditorInputPaneContents,
                children: [
                  (0, e.jsx)("div", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Stats_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, j.A)(
                      f().FlexColumnContainer,
                      f().EventDefaultRowContainer,
                    ),
                    children: (0, e.jsx)(Z.t, {}),
                  }),
                ],
              });
            const h = this.state.stats;
            return (0, e.jsxs)("div", {
              className: de.EventEditorInputPaneContents,
              children: [
                (0, e.jsxs)("div", {
                  className: f().EventEditorTextTitle,
                  children: [
                    (0, s.we)("#EventEmail_Stats_Title"),
                    this.state.bRefreshing &&
                      (0, e.jsx)(Z.t, { size: "small" }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextSubTitle,
                      children: (0, s.we)(
                        "#EventEmail_Stats_State",
                        (0, s.we)("#EventEmail_Stats_State_" + h.state),
                      ),
                    }),
                    h.state == "sending" &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_Started",
                          (0, s.TW)(h.rtime_start_firing),
                        ),
                      }),
                    (h.state == "complete" || h.state == "aborted") &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_Completed",
                          (0, s.TW)(h.rtime_start_firing),
                          (0, s.TW)(h.rtime_stop_firing),
                        ),
                      }),
                    h.state == "window_closed" &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_WindowClosed",
                          (0, s.TW)(h.rtime_stop_firing),
                        ),
                      }),
                    !!h.rtime_last_update_time &&
                      (0, e.jsxs)(E.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Examined",
                              (t =
                                (a = h.accounts_examined) == null
                                  ? void 0
                                  : a.toLocaleString((0, Ht.J)())) != null
                                ? t
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Duplicates",
                              (i =
                                (n = h.accounts_duplicates) == null
                                  ? void 0
                                  : n.toLocaleString((0, Ht.J)())) != null
                                ? i
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Emailed",
                              (o =
                                (l = h.accounts_emailed) == null
                                  ? void 0
                                  : l.toLocaleString((0, Ht.J)())) != null
                                ? o
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Skipped",
                              (d =
                                (r = h.accounts_not_emailed) == null
                                  ? void 0
                                  : r.toLocaleString((0, Ht.J)())) != null
                                ? d
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Failed",
                              (c =
                                (m = h.accounts_email_failed) == null
                                  ? void 0
                                  : m.toLocaleString((0, Ht.J)())) != null
                                ? c
                                : 0,
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
        at([X.oI], Pa.prototype, "RefreshIfNeeded", 1),
          at([X.oI], Pa.prototype, "RefreshStats", 1),
          (Pa = at([R.PA], Pa));
        var Mu = p(65700),
          Lu = p(18735),
          Ou = p(58360),
          Pu = p(4969),
          Ru = p.n(Pu);
        function ku(a) {
          const t = (0, ya.I)({
            queryKey: ["demoappdetailsforbase", a],
            queryFn: async () => {
              var n;
              const i = `${vt.TS.COMMUNITY_BASE_URL}demos/ajaxgetappdemoinfo`,
                l = { appid: a, origin: self.origin },
                o = await pe().get(i, { params: l });
              return (
                ((n = o == null ? void 0 : o.data) == null
                  ? void 0
                  : n.demos) || []
              );
            },
            enabled: !!a,
          });
          return t != null && t.isLoading ? null : t.data;
        }
        function Lm(a, t) {
          return useMutation({
            mutationFn: async () => {
              var n;
              const i = `${Config.COMMUNITY_BASE_URL}demos/ajaxensuredemohasogg`,
                l = new FormData();
              l.append("sessionid", GetSessionID()),
                l.append("appid", "" + a),
                l.append("demo_appid", "" + t);
              const o = await axios.post(i, l, { withCredentials: !0 });
              return (
                ((n = o == null ? void 0 : o.data) == null
                  ? void 0
                  : n.ogg_clan_account_id) || null
              );
            },
          });
        }
        var Fu = Object.defineProperty,
          Uu = Object.getOwnPropertyDescriptor,
          So = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Uu(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Fu(t, n, l), l;
          };
        function Hu(a) {
          const t = po(a.appid);
          return a.appid ? t : D.UF.IS_ALLOWED_SC;
        }
        const zu = (0, R.PA)((a) => {
          const { editModel: t } = a;
          let n = (0, ea.JS)(t.GetEventType());
          const { data: i } = (0, Ut.hM)(t.GetClanAccountID()),
            l = t.BHasTag("curator");
          return (0, e.jsxs)("div", {
            className: f().Columns,
            children: [
              (0, e.jsxs)("div", {
                className: (0, j.A)(f().LeftCol),
                children: [
                  (0, e.jsx)(Yu, { editModel: t }),
                  (0, e.jsx)(Ou.u, { bHideEndRange: !n, editModel: t }),
                  !!t.BHasTag("steam_award_nomination_request") &&
                    (0, e.jsx)(Mu.ks, {}),
                  (0, e.jsx)(mn, { editModel: t }),
                  (!l || (i == null ? void 0 : i.valve_admin)) &&
                    (0, e.jsx)(Vu, { editModel: t }),
                  (0, e.jsx)("div", { className: f().ClearThings }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(be().OptionsNotes, f().RightCol),
                children: [
                  (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_Time_Zone"),
                  }),
                  (0, s.we)("#EventEditor_Time_ttip"),
                ],
              }),
            ],
          });
        });
        function Vu(a) {
          const { editModel: t } = a;
          let n = E.useRef(void 0);
          const i = E.useCallback(
              (x) => {
                t.GetAppID() == $.DU && t.BHasTag("hide_library_overview") && x
                  ? (0, W.pg)(
                      (0, e.jsx)(V.o0, {
                        strTitle: (0, s.we)("#EventEditor_GenericAreYouSure"),
                        strDescription:
                          "Showing on the library home page will pin this event into the first spot in the 'Whats New' section for ALL Steam Library. Are you sure this is an Steam update that applies to all Steam Library users? Be thoughtful.",
                        onOK: () => t.ClearTags(["hide_library_overview"]),
                        onCancel: () => {
                          var b;
                          return (b = n == null ? void 0 : n.current) == null
                            ? void 0
                            : b.setState({ checked: !n.current.checked });
                        },
                      }),
                      window,
                    )
                  : t.SetTag("hide_library_overview", !x);
              },
              [t],
            ),
            l = (x) => {
              t.SetLibrarySpotlight(x);
            };
          let [o, r, d, m, c, v, h, _, u] = (0, B.q3)(() => [
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
              className: f().LeftCol,
              children: [
                (0, e.jsx)("div", {
                  className: f().EventEditorTextTitle,
                  children: (0, s.we)("#EventEditor_Options_Title"),
                }),
                (0, e.jsxs)("div", {
                  className: (0, j.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextSubTitle,
                      children: (0, s.PP)(
                        "#EventEditor_Options_Show_Warning",
                        (0, e.jsx)("a", {
                          href: "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B",
                          target: D.TS.IN_CLIENT ? void 0 : "_blank",
                          children: (0, s.we)(
                            "#EventEditor_Options_Show_WarningLink",
                          ),
                        }),
                      ),
                    }),
                    (0, e.jsx)(g.RF, {
                      onChange: (x) => t.SetTag("hide_store", !x),
                      label: (0, s.we)("#EventEditor_Options_Show_Store"),
                      checked: d ? _ : !1,
                      description: d
                        ? void 0
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", m),
                      disabled: !d,
                    }),
                    (0, e.jsx)(Wu, { editModel: t }),
                    (0, e.jsx)(g.RF, {
                      onChange: i,
                      label: (0, s.we)(
                        "#EventEditor_Options_Show_Library_Overview",
                      ),
                      checked: o ? v : !1,
                      description: o
                        ? (0, s.we)(
                            "#EventEditor_Options_Show_Library_Overview_Desc",
                          )
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", m),
                      disabled: !o,
                      ref: n,
                    }),
                    (0, e.jsx)(g.RF, {
                      onChange: (x) => t.SetTag("hide_library_detail", !x),
                      label: (0, s.we)(
                        "#EventEditor_Options_Show_Library_Detail",
                      ),
                      checked: r ? c : !1,
                      description: r
                        ? void 0
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", m),
                      disabled: !r,
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextTitle,
                      children: (0, s.we)("#EventEditor_Options_Special_Desc"),
                    }),
                    (0, e.jsx)(g.RF, {
                      onChange: l,
                      label: (0, s.we)(
                        "#EventEditor_Options_Library_Spotlight_Label",
                      ),
                      checked: h,
                      description: (0, s.we)(
                        "#EventEditor_Options_Library_Spotlight_Desc",
                      ),
                      disabled: !c || !r,
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextTitle,
                      children: (0, s.we)("#EventEditor_Options_Desc"),
                    }),
                    (0, e.jsx)(g.RF, {
                      onChange: (x) => t.SetTag("workshop", x),
                      label: (0, s.we)("#EventEditor_Options_Workshop_Label"),
                      checked: u,
                      description: (0, s.we)(
                        "#EventEditor_Options_Workshop_Desc",
                      ),
                    }),
                    !1,
                    (0, e.jsx)(Xu, { editModel: t }),
                    (0, e.jsx)(Ku, { editModel: t }),
                  ],
                }),
                (0, e.jsx)(Qu, { editModel: t }),
              ],
            }),
          });
        }
        const Wu = (0, R.PA)((a) => {
          const { editModel: t } = a,
            { data: n } = (0, Ut.hM)(t.GetClanAccountID());
          if (
            !!!(n != null && n.valve_admin) ||
            D.UF.IS_OGG ||
            !t.BHasSaleEnabled()
          )
            return null;
          const l = D.TS.STORE_BASE_URL + "specials/";
          return (0, e.jsx)("div", {
            className: (0, j.A)(
              f().FlexColumnContainer,
              f().ValveOnlyBackground,
            ),
            children: (0, e.jsx)(g.RF, {
              onChange: (o) => t.SetTag($.Yf, o),
              label: "(VO) Hide this sale from the Specials page carousel",
              tooltip: "Affects the sale events carousel on " + l,
              checked: t.GetEventModel().BHasTag($.Yf),
              description:
                "Live sale pages are listed in the sale events carousel on the store's Specials page. Turn this on to keep this sale out of that carousel. The store takes a few minutes to pick up the change.",
            }),
          });
        });
        function Om(a) {
          const { editModel: t } = a,
            n = ku(t.GetAppID()),
            [i, l] = (0, B.q3)(() => [
              t.GetEventModel().BHasTag("show_library_demo_detail"),
              t.GetGID(),
            ]);
          if (n == null)
            return (0, e.jsx)(Z.t, {
              string: (0, s.we)("#EventEditor_Options_LoadingDemoInfo"),
              position: "center",
              size: "small",
            });
          const o = n.filter((c) => c.is_released_somewhere && c.appid > 0),
            r = o.length > 0;
          let d = !1,
            m = null;
          return (
            r
              ? l ||
                ((d = !0),
                (m = (0, s.we)("#EventEditor_Options_SaveFirstToRepostDemo")))
              : ((d = !0),
                (m = (0, s.we)("#EventEditor_Options_VisibleDemoTooltip"))),
            (0, e.jsx)(g.RF, {
              onChange: (c) => {
                t.SetDemoAppIDForRepost(o[0].appid),
                  t.SetTag("repost_source_possible", !0),
                  c
                    ? (t.SetTag("show_library_demo_detail", !0),
                      t.SetTag("clear_library_demo_detail", !1))
                    : (t.SetTag("show_library_demo_detail", !1),
                      t.BHasOriginalTag("show_library_demo_detail") &&
                        t.SetTag("clear_library_demo_detail", !0));
              },
              tooltip: d
                ? m
                : (0, s.we)("#EventEditor_Options_DemoRepostTooltop"),
              label: (0, s.we)("#EventEditor_Options_Demo_Library_Detail"),
              checked: i,
              description: (0, s.we)("#EventEditor_Options_Demo_Library_Desc"),
              disabled: d,
            })
          );
        }
        const Qu = (0, R.PA)((a) => {
          const { editModel: t } = a,
            { data: n } = (0, Ut.hM)(t.GetClanAccountID()),
            i = !!(n != null && n.valve_admin);
          let l = E.useRef(void 0);
          const o = t.GetEventType(),
            [r] = (0, B.q3)(() => [
              t.GetEventModel().jsondata.country_restriction,
            ]);
          if (!i) return null;
          const d = (c) => {
              t.BHasSaleEnabled() && c && !t.BHasTag("mod_hide_store")
                ? (0, W.pg)(
                    (0, e.jsx)(V.o0, {
                      strTitle: (0, s.we)("#EventEditor_Options_Hide_Store"),
                      strDescription:
                        "There is an active sale on this event. Setting this flag will HIDE the sale page completely. Are you sure?",
                      onOK: () => t.AddTag("mod_hide_store"),
                      onCancel: () => l.current.SetChecked(!1, !1),
                    }),
                    window,
                  )
                : t.SetTag("mod_hide_store", c);
            },
            m =
              t.GetAppID() == $.qF
                ? "Deck"
                : t.GetAppID() == $.IT
                  ? "Frame"
                  : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#EventEditor_Options_Moderation"),
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(
                  f().FlexColumnContainer,
                  f().EventDefaultRowContainer,
                  f().ValveOnlyBackground,
                ),
                children: [
                  (0, e.jsx)(g.RF, {
                    onChange: (c) => t.SetTag("mod_hide_library_overview", c),
                    label: (0, s.we)(
                      "#EventEditor_Options_Hide_Library_Overview",
                    ),
                    checked: t
                      .GetEventModel()
                      .BHasTag("mod_hide_library_overview"),
                  }),
                  (0, e.jsx)(g.RF, {
                    onChange: (c) => t.SetTag("mod_hide_library_detail", c),
                    label: (0, s.we)(
                      "#EventEditor_Options_Hide_Library_Detail",
                    ),
                    checked: t
                      .GetEventModel()
                      .BHasTag("mod_hide_library_detail"),
                  }),
                  (0, e.jsx)(g.RF, {
                    onChange: d,
                    ref: l,
                    label: (0, s.we)("#EventEditor_Options_Hide_Store"),
                    checked: t.GetEventModel().BHasTag("mod_hide_store"),
                  }),
                  !!D.UF.IS_OGG &&
                    (0, e.jsx)(g.RF, {
                      onChange: (c) => t.SetSteamStoreSpotlight(c),
                      label: "(VO) Allow Spotlight on Steam Store Product Page",
                      checked: t.BAllowedSteamStoreSpotlight(),
                      description:
                        "Allows the partner to upload a store spotlight artwork to be shown on the product page for upto a week from the event start.",
                    }),
                  !!to(t.GetEventModel(), i) &&
                    (0, e.jsx)(g.RF, {
                      onChange: (c) => t.SetTag(dn, c),
                      label:
                        "(VO) Let Partners Upload Store Capsules for this Sale",
                      checked: t.GetEventModel().BHasTag(dn),
                      description:
                        "Opens the store capsule uploader on the artwork tab to everyone who can edit this event. We can always reach it ourselves without this; turning it off hides it from them again but keeps whatever they uploaded.",
                    }),
                  (0, e.jsx)(g.RF, {
                    onChange: (c) => t.SetLibraryHomeSpotlight(c),
                    label: "(VO) Force Spotlight on Library Home",
                    checked: t.BHasLibaryHomeSpotlight(),
                    disabled: !t.BHasSpotlightArtwork(),
                    description:
                      "Shows the spotlight artwork in the 'Whats New' section at the top of the library home for all owners.",
                  }),
                  (0, e.jsx)(g.RF, {
                    onChange: (c) => t.SetTag("blog", c),
                    label: "(VO) Mark as Blog for Valve Game Teams",
                    checked: t.GetEventModel().BHasTag("blog"),
                    description:
                      "Add the 'blog' tag to this post. Allowing game team website to filter news posts intended for their blog.",
                  }),
                  (0, e.jsx)(g.RF, {
                    onChange: (c) => t.SetTag("adult_only_content", c),
                    label: "(VO) Event Contains Adult Only Content",
                    checked: t.GetEventModel().BHasTag("adult_only_content"),
                    description:
                      "Set this to on if the post contains adult only content so that it can be filtered accordingly.",
                  }),
                  t.GetAppID() == $.DU &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(g.RF, {
                          onChange: (c) => t.SetTag("steam_blog", c),
                          label: "(VO) Steam Official Blog",
                          checked: t.GetEventModel().BHasTag("steam_blog"),
                          description:
                            "When checked this event will surface on https://store.steampowered.com/news/app/593110. Make sure to set this before you publish, or it will have no effect.",
                        }),
                        (0, e.jsx)(g.RF, {
                          onChange: (c) => t.SetTag("skip_megaphone", c),
                          label: "(VO) Skip Lighting Up Steam Client Megaphone",
                          checked: t.GetEventModel().BHasTag("skip_megaphone"),
                          description:
                            "By default small event (patch notes) do not light up the megaphone in the Steam client. Enabling this flag does the same for all other event type.",
                        }),
                      ],
                    }),
                  (0, e.jsx)(g.RF, {
                    onChange: (c) => t.SetTag("forced_featured", c),
                    label: "(VO) Force Feature this event in the NewsHub",
                    checked: t.GetEventModel().BHasTag("forced_featured"),
                    description:
                      "Add the 'forced_featured' tag to this post. This will prioritize the event appearing in algorithmic featured newshub section.",
                  }),
                  !!t.GetEventModel().BIsOGGEvent() &&
                    (0, e.jsx)(g.RF, {
                      onChange: (c) => t.SetTag("seasonal_sale_featuring", c),
                      label: "(VO) Feature this event during the Seasonal Sale",
                      checked: t
                        .GetEventModel()
                        .BHasTag("seasonal_sale_featuring"),
                      description:
                        "Add the 'seasonal_sale_featuring' tag to this post. This will push the event to appear on the front page during a seasonal sale. This assume the content is specific to in-game items on sale for the underlying game",
                    }),
                  t.GetClanAccountID() == Mt.bv &&
                    (0, e.jsx)(g.RF, {
                      onChange: (c) => t.SetTag("contenthub", c),
                      checked: t.GetEventModel().BHasTag("contenthub"),
                      label: "(VO) Tag as Content Hub",
                      description:
                        "Add the 'contenthub' tag to this event. Removes certain publishing restrictions for this event.",
                    }),
                  (0, e.jsx)(g.RF, {
                    onChange: (c) => t.SetTag("patchnotes", c),
                    checked: t.GetEventModel().BHasTag("patchnotes"),
                    label: "(VO) Tag as Patch Notes",
                    description:
                      "Add the 'patchnotes' tag to this event. Allows the event to show in certain contexts normally only showing Small Update/Patch Notes events such as Steam Client patch notes.",
                  }),
                  !!D.UF.IS_OGG &&
                    (0, e.jsx)(g.RF, {
                      onChange: (c) => {
                        c &&
                          (t.setEventType(N.zeJ), t.SetSteamStoreSpotlight(c)),
                          t.SetTag("vo_marketing_message", c);
                      },
                      label: "(VO) Marketing Message Major Update",
                      disabled:
                        !t.GetEventModel().BHasTag("vo_marketing_message") &&
                        o != N.zeJ,
                      checked: t
                        .GetEventModel()
                        .BHasTag("vo_marketing_message"),
                      description:
                        "This will surface on the event editor the rules and requirements behind being featured in a marketing message to better align them with customer information." +
                        (o != N.zeJ
                          ? " This can only be enable for Major Update Type."
                          : ""),
                    }),
                  (0, e.jsx)(g.RF, {
                    onChange: (c) => t.SetTag("vo_prevent_delete", c),
                    label: "(VO) Prevent this event from being deleted.",
                    checked: t.GetEventModel().BHasTag("vo_prevent_delete"),
                    description:
                      "To prevent a partner or Valve from deleting this event because something is featuring it or depends on it.",
                  }),
                  (t.GetClanAccountID() == Mt.GU ||
                    ((D.TS.EUNIVERSE == N.Rv || D.TS.EUNIVERSE == N.CII) &&
                      t.GetClanAccountID() == Mt.mW)) &&
                    (0, e.jsx)(g.RF, {
                      onChange: (c) => t.SetTag("steam_top_releases", c),
                      label: "(VO) Is Monthly Top Sellers?",
                      checked: t.GetEventModel().BHasTag("steam_top_releases"),
                      description:
                        "Add the 'steam_top_releases' tag to this post. This allows the Steam Top Release Charts to pull the official top releases events into those pages.",
                    }),
                  (t.GetClanAccountID() == Mt.GU ||
                    ((D.TS.EUNIVERSE == N.Rv || D.TS.EUNIVERSE == N.CII) &&
                      t.GetClanAccountID() == Mt.mW)) &&
                    (0, e.jsx)(g.RF, {
                      onChange: (c) => t.SetTag("steam_best_of_year", c),
                      label: "(VO) Is Best of Year?",
                      checked: t.GetEventModel().BHasTag("steam_best_of_year"),
                      description:
                        "Add the 'steam_best_of_year' tag to this post. This allows the Steam Best of Year to pull the official best of year events into those pages.",
                    }),
                  !!m &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("p", {
                          children:
                            "Channels where we want to surface these events to. See for details: https://confluence.valve.org/pages/viewpage.action?pageId=214073964",
                        }),
                        (0, e.jsx)(g.RF, {
                          onChange: (c) => t.SetTag("stablechannel", c),
                          label: `(VO) Steam ${m} Stable Channel`,
                          checked: t.GetEventModel().BHasTag("stablechannel"),
                          description: `Surface this to users who are subscribed to Steam ${m} Stable Build. Only include Stable Steam ${m} Client or Stable SteamOS notes.`,
                        }),
                        (0, e.jsx)(g.RF, {
                          onChange: (c) => t.SetTag("betachannel", c),
                          label: `(VO) Steam ${m} Beta Channel`,
                          checked: t.GetEventModel().BHasTag("betachannel"),
                          description: `Surface this to users who are subscribed to Steam ${m} Beta Build. Only include Beta Steam ${m} Client or Stable SteamOS notes.`,
                        }),
                        (0, e.jsx)(g.RF, {
                          onChange: (c) => t.SetTag("previewchannel", c),
                          label: `(VO) Steam ${m} Preview Channel`,
                          checked: t.GetEventModel().BHasTag("previewchannel"),
                          description: `Surface this to users who are subscribed to Steam ${m} Preview Build. Only include Beta Steam ${m} Client or Beta SteamOS notes.`,
                        }),
                      ],
                    }),
                  (0, e.jsx)(g.pd, {
                    type: "text",
                    label: (0, s.we)("#EventEditor_Options_RegionRestrictions"),
                    placeholder: (0, s.we)(
                      "#EventEditor_Options_RegionRestrictions_placeholder",
                    ),
                    onChange: (c) => {
                      (t.GetEventModel().jsondata.country_restriction =
                        c.currentTarget.value),
                        t.SetDirty(C.IQ.description);
                    },
                    value: r,
                  }),
                ],
              }),
            ],
          });
        });
        let mn = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSending: !1 }),
              (this.m_cancelSignal = pe().CancelToken.source());
          }
          TestFireEvent() {
            const { editModel: a } = this.props;
            this.setState({ bSending: !0 }, () => {
              P.mh.FireTestEventNotifiation(
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
              n = (0, ea.rQ)(t);
            const i =
              a.GetEventModel().BIsVisibleEvent() &&
              a.GetEventModel().GetStartTimeAndDateUnixSeconds() <
                Math.floor(Date.now() / 1e3);
            if (!n || i) return null;
            let l = a.GetVisibilityPublishingSetup(),
              r =
                a.GetStartTimeEditChoice() == C.z8.k_ENow ||
                l == C.Fl.event_start;
            return (0, e.jsx)("div", {
              className: (0, j.A)(be().EventEditorInputPaneContents),
              children: (0, e.jsxs)("div", {
                className: (0, j.A)(f().LeftCol, Ru().ThemedCtn),
                children: [
                  (0, e.jsx)("div", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_Reminder_title"),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(
                      f().FlexColumnContainer,
                      f().EventDefaultRowContainer,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextSubTitle,
                        children: (0, s.we)("#EventEditor_Reminder_desc"),
                      }),
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextSubTitle,
                        children: (0, s.PP)(
                          "#EventEditor_Reminder_desc2",
                          (0, e.jsx)("a", {
                            href: D.TS.STORE_BASE_URL + "mobile?show=steamapp",
                            target: D.TS.IN_CLIENT ? void 0 : "_blank",
                            children: (0, s.we)(
                              "#EventEditor_Reminder_mobileapp",
                            ),
                          }),
                        ),
                      }),
                      this.state.bSending &&
                        (0, e.jsx)(Z.t, { size: "small", position: "center" }),
                      (0, e.jsx)("button", {
                        className: f().Button,
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
        So([X.oI], mn.prototype, "TestFireEvent", 1), (mn = So([R.PA], mn));
        const Yu = (0, R.PA)((a) => {
          const { editModel: t } = a;
          if (!t.BIsEventForOGGWithoutVisibleStorePage()) return null;
          const i = (l) => t.SetOptedInForOGGWithoutVisibleStorePage(l);
          return (0, e.jsx)("div", {
            className: be().EventEditorInputPaneContents,
            children: (0, e.jsxs)("div", {
              className: f().LeftCol,
              children: [
                (0, e.jsxs)("div", {
                  className: f().EventEditorTextTitle,
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
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextSubTitle,
                      children: (0, s.we)(
                        "#EventEditor_Options_VisibilityOptIn_Description",
                        t.GetAppID(),
                      ),
                    }),
                    (0, e.jsx)(g.RF, {
                      onChange: i,
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
        function Eo(a) {
          const t =
              a.BInRealmChina() &&
              s.A0.IsELanguageValidInRealm(
                a.GetCurEditLanguage(),
                sn.TU.k_ESteamRealmChina,
              ),
            n =
              a.BInRealmGlobal() &&
              s.A0.IsELanguageValidInRealm(
                a.GetCurEditLanguage(),
                sn.TU.k_ESteamRealmGlobal,
              );
          !t && !n && a.SetCurEditLanguage(a.BInRealmChina() ? N.ZLm : N.Bhc);
        }
        const Ju = (0, R.PA)((a) => {
            const { editModel: t } = a,
              n = (i) => {
                i
                  ? (t.AddTag("enable_steam_china"),
                    t.AddTag("disable_steam_global"))
                  : t.ClearTags(["enable_steam_china", "disable_steam_global"]),
                  Eo(t);
              };
            return (0, e.jsx)(g.RF, {
              onChange: n,
              label: (0, s.we)("#EventEditor_Options_ShowInSteamChina"),
              description: (0, s.we)(
                "#EventEditor_Options_ShowInSteamChina_Desc",
              ),
              checked: t.BInRealmChina(),
            });
          }),
          qu = (0, R.PA)((a) => {
            const { editModel: t } = a;
            if (t.BInRealmGlobal() && !t.BInRealmChina()) return null;
            const n = (i) => {
              i
                ? t.AddTag("disable_steam_global")
                : t.ClearTags(["disable_steam_global"]),
                Eo(t);
            };
            return (0, e.jsx)(g.RF, {
              onChange: n,
              label: (0, s.we)("#EventEditor_Options_ShowInSteamGlobal"),
              description: (0, s.we)(
                "#EventEditor_Options_ShowInSteamGlobal_Desc",
              ),
              checked: !t.BInRealmGlobal(),
            });
          }),
          Ku = (0, R.PA)((a) => {
            const { editModel: t } = a,
              n = Hu(t.GetEventModel());
            return (0, e.jsxs)("div", {
              children: [
                n && (0, e.jsx)(Ju, { editModel: t }),
                (0, e.jsx)(qu, { editModel: t }),
              ],
            });
          }),
          Zu = (a) => {
            const [t] = (0, Ie.t7)(a, it.A.k_DataRequest_CommonOnly);
            return !!(t && t.HasContentDescriptorID(Lu.u7));
          },
          Xu = (0, R.PA)((a) => {
            const { editModel: t } = a;
            return Zu(t.GetAppID())
              ? (0, e.jsx)(g.RF, {
                  onChange: (i) => t.SetTag("adult_only_content", i),
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
        var $u = p(24118),
          eh = p(6542),
          Ra = p.n(eh);
        function th(a) {
          const { editModel: t } = a,
            n = (0, B.q3)(() => ({
              bHidden: t.BHidden(),
              bUnlisted: t.BUnlisted(),
              bPublished: t.BPublished(),
            }));
          return (!n.bHidden || n.bUnlisted) && n.bPublished
            ? null
            : (0, e.jsx)(ah, { ...a });
        }
        const ah = (0, R.PA)((a) => {
          const { editModel: t, bTakePublishAction: n } = a,
            i = E.useRef(void 0),
            [l, o] = E.useState(!1),
            r = t.GetClanSteamID(),
            d = t.GetGID(),
            {
              bLoading: m,
              bPublishRequiresValveApproval: c,
              nAccountApproved: v,
            } = (0, xe.g7)(r.GetAccountID(), d);
          E.useEffect(() => {
            n && i != null && i.current && i.current.click();
          }, [n]);
          const h = t.GetEventType() == N.ajI,
            _ = r.GetAccountID() == (0, ra.H)() || h,
            u = (0, le.Dd)(r, !0),
            x = !_ && u,
            b = (ce, ie) => {
              (0, W.pg)(
                (0, e.jsx)(ba.i, {
                  editModel: t,
                  bUnlistedMode: ie,
                  bValveAdmin: u,
                  OnPublishSuccess: () => o(!0),
                  partnerEventEditorStore: P.mh,
                }),
                (0, F.uX)(ce),
              );
            },
            S = (ce) => {
              t.SetVisibilityPublishingSetup(C.Fl.immediate),
                (0, W.pg)(
                  (0, e.jsx)(ba.i, {
                    editModel: t,
                    bValveAdmin: u,
                    OnPublishSuccess: () => o(!0),
                    partnerEventEditorStore: P.mh,
                    closeModal: () => {
                      t.ResetSetVisibilityStartTime();
                    },
                  }),
                  (0, F.uX)(ce),
                );
            };
          if (l)
            return (0, e.jsx)(se.OG, {
              eventModel: t.GetEventModel(),
              route: se.PH.k_eView,
            });
          const y = t.BHidden(),
            L = t.BPublished(),
            G = t.BUnlisted();
          if ((!y || G) && L) return null;
          if (m)
            return (0, e.jsx)(Z.t, {
              string: (0, s.we)("#Loading"),
              size: "small",
            });
          const H = t.BAllowedToPublishStagedEvents(),
            te = c && !v;
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().FlexColumnContainer, Ra().PublishOption),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Button_Publish"),
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(Ra().PublishButtonCtn),
                children: [
                  te &&
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
                  !L &&
                    !te &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !_ &&
                          (0, e.jsx)(Jn, {
                            label: (0, s.we)("#Button_Publish"),
                            description: (0, s.we)("#EventEditor_Publish_Desc"),
                            refActionButton: i,
                            onClick: (ce) => b(ce, !1),
                          }),
                        (_ || x) &&
                          (0, e.jsx)(O.e7, {
                            condition: x,
                            wrap: (ce) =>
                              (0, e.jsx)(le.Eb, {
                                clanSteamID: r,
                                requireAdmin: !0,
                                children: ce,
                              }),
                            children: (0, e.jsx)(Jn, {
                              label: h
                                ? (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_CreatorHome",
                                  )
                                : (0, s.we)("#EventEditor_Publish_Unlisted"),
                              description: h
                                ? (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_CreatorHome_Desc",
                                  )
                                : (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_Desc",
                                  ),
                              refActionButton: _ ? i : void 0,
                              onClick: (ce) => b(ce, !0),
                            }),
                          }),
                      ],
                    }),
                  !!(L && y && !G && !te) &&
                    (0, e.jsx)(O.e7, {
                      condition: !H,
                      wrap: (ce) =>
                        (0, e.jsx)(Ee.he, {
                          toolTipContent: (0, s.we)(
                            "#EventEditor_Publish_Disable_ttip",
                          ),
                          children: ce,
                        }),
                      children: (0, e.jsx)(Jn, {
                        label: (0, s.we)("#EventEditor_Publish_VisibleNow"),
                        refActionButton: i,
                        disabled: !H,
                        onClick: S,
                      }),
                    }),
                ],
              }),
            ],
          });
        });
        function Jn(a) {
          const {
            label: t,
            description: n,
            tooltip: i,
            disabled: l,
            refActionButton: o,
            onClick: r,
          } = a;
          return (0, e.jsxs)("div", {
            children: [
              n &&
                (0, e.jsx)("div", { className: Ra().Description, children: n }),
              (0, e.jsxs)(g.$n, {
                onClick: r,
                className: (0, j.A)(
                  Ra().EventPublishButton,
                  "DialogButton Primary",
                  Ra().PublishButton,
                ),
                ref: o,
                disabled: l,
                children: [t, i && (0, e.jsx)(Q.o, { tooltip: i })],
              }),
            ],
          });
        }
        var ne = p(82267),
          fo = p.n(ne),
          ka = p(83963);
        class At {
          constructor() {
            (this.m_mapVisibilityUpdateRounds = new Map()),
              (this.m_mapVisibilityUpdateLoadPromises = new Map()),
              (this.m_mapVisibilityUpdateChangeCallback = new Map()),
              (this.m_mapVisibilityLaunchRounds = new Map()),
              (this.m_mapVisibilityLaunchLoadPromises = new Map()),
              (this.m_mapVisibilityLaunchChangeCallback = new Map());
          }
          GetVisibilityRounds(t, n) {
            return t == ka.tw.I8
              ? this.m_mapVisibilityUpdateRounds.get(n)
              : this.m_mapVisibilityLaunchRounds.get(n);
          }
          GetVisibilityRoundsChangeCallback(t, n) {
            const i =
              t == ka.tw.I8
                ? this.m_mapVisibilityUpdateChangeCallback
                : this.m_mapVisibilityLaunchChangeCallback;
            return i.has(n) || i.set(n, new Wa.lu()), i.get(n);
          }
          async LoadVisibilityRounds(t, n) {
            const i =
              t == ka.tw.I8
                ? this.m_mapVisibilityUpdateLoadPromises
                : this.m_mapVisibilityLaunchLoadPromises;
            return (
              i.has(n) || i.set(n, this.InternalLoadVisibilityRounds(t, n)),
              i.get(n)
            );
          }
          async InternalLoadVisibilityRounds(t, n) {
            var i;
            let l = null;
            try {
              const o = `${D.TS.COMMUNITY_BASE_URL}ogg/${n}/ajaxgetappvisibilityrounds`,
                r = { type: t },
                d = await pe().get(o, { params: r, withCredentials: !0 });
              if (
                (d == null ? void 0 : d.status) == 200 &&
                ((i = d == null ? void 0 : d.data) == null
                  ? void 0
                  : i.success) == Ue.R
              ) {
                const m =
                    t == ka.tw.I8
                      ? this.m_mapVisibilityUpdateRounds
                      : this.m_mapVisibilityLaunchRounds,
                  c = d.data.data || [];
                return (
                  m.set(n, c),
                  this.GetVisibilityRoundsChangeCallback(t, n).Dispatch(c),
                  c
                );
              }
              l = (0, ye.H)(d);
            } catch (o) {
              l = (0, ye.H)(o);
            }
            return (
              console.error(
                "CVisibilityRoundsStore.InternalLoadVisibilityRounds failed: " +
                  (l == null ? void 0 : l.strErrorMsg),
                l,
              ),
              null
            );
          }
          static Get() {
            return (
              At.s_Singleton ||
                ((At.s_Singleton = new At()), At.s_Singleton.Init()),
              At.s_Singleton
            );
          }
          Init() {}
        }
        function nh(a, t) {
          const [n, i] = (0, E.useState)(At.Get().GetVisibilityRounds(a, t));
          return (
            (0, E.useEffect)(() => {
              (!n ||
                n.length == 0 ||
                n[0].appid != t ||
                n[0].feature_type != a) &&
                At.Get()
                  .LoadVisibilityRounds(a, t)
                  .then((l) => i(l));
            }, [t, n, a]),
            (0, X.hL)(At.Get().GetVisibilityRoundsChangeCallback(a, t), i),
            n
          );
        }
        var qn = p(69168),
          sh = p(11823);
        const ih = 100;
        function oh(a) {
          var t;
          const { editModel: n } = a,
            [i, l, o] = (0, B.q3)(() => [
              n.GetEventState(),
              n.GetClanSteamID(),
              n.GetEventModel().jsondata.clone_from_event_gid,
            ]),
            r = (0, Nn.m)("EventReplacePublishingControls"),
            { rgClanEventData: d } = (0, ht.SG)(l, ih, r);
          return !o ||
            !((t = d == null ? void 0 : d.pages) != null && t.length) ||
            i != $.zv.k_EEventStateUnpublished
            ? null
            : (0, e.jsxs)("div", {
                className: (0, j.A)(
                  f().FlexColumnContainer,
                  fo().PublishOption,
                ),
                children: [
                  (0, e.jsx)("div", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventPublishing_Replace_To"),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(f().RightColumnContainer),
                    children: [
                      (0, s.we)("#EventPublishing_Replace_To_Desc"),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(rh, { editModel: n }),
                      (0, e.jsx)(lh, {
                        editModel: n,
                        rgEventSummaries: d.pages[0],
                      }),
                    ],
                  }),
                ],
              });
        }
        function lh(a) {
          const { editModel: t, rgEventSummaries: n } = a,
            [i, l] = (0, E.useState)(null),
            [o, r, d] = (0, X.uD)(),
            m = (0, E.useMemo)(
              () =>
                n.map((c) => ({
                  value: c.gid,
                  label:
                    c.event_name +
                    ": " +
                    (0, s.TW)(c.rtime32_start_time) +
                    " @ " +
                    (0, st.pg)(c.rtime32_start_time),
                })),
              [n],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)("#EventPublishing_Replace_Pick"),
              }),
              (0, e.jsx)(da.Ay, {
                isSearchable: !0,
                isMulti: !1,
                isClearable: !0,
                className: fo().ItemSelect,
                options: m,
                value: m.find((c) => c.value === i),
                onChange: (c) => {
                  c && l(c.value);
                },
              }),
              (0, e.jsx)(g.$n, {
                disabled: !i,
                onClick: r,
                children: (0, s.we)("#EventPublishing_Replace_Selected"),
              }),
              (0, e.jsx)(qn.E, {
                active: o,
                children: (0, e.jsx)(xo, {
                  editModel: t,
                  gidTargetClanEvent: i,
                  closeModal: d,
                }),
              }),
            ],
          });
        }
        function xo(a) {
          const { closeModal: t, editModel: n, gidTargetClanEvent: i } = a,
            l = (0, Za.E)(),
            [o, r] = (0, E.useState)(),
            [d] = (0, E.useState)(() => new P.Nc()),
            [m, c] = (0, E.useState)(null),
            [v, h] = (0, E.useState)(!1),
            [_, u] = (0, E.useState)(!1),
            [x, b, S] = (0, B.q3)(() => [
              m == null ? void 0 : m.GetClanSteamID(),
              m == null ? void 0 : m.GetEventModel().GetNameWithFallback(l),
              m == null ? void 0 : m.GetEventModel().GetLastUpdateTime(),
            ]);
          (0, E.useEffect)(() => {
            i &&
              (m == null ? void 0 : m.GetGID()) != i &&
              d.LoadEditorModel(n.GetClanSteamID(), i).then((H) => {
                c(H);
              }),
              i &&
                !o &&
                P.Nc.GetLastUpdateTimeForEvent(
                  n.GetClanSteamID(),
                  i,
                  null,
                  null,
                ).then(r);
          }, [n, i, m, d, o]);
          const [y, L] = (0, E.useState)(!1),
            G = (0, ct.vs)();
          return G.bLoading
            ? (0, e.jsx)(ct.Hh, {
                state: G,
                strDialogTitle: (0, s.we)("#EventPublishing_Replace_To"),
                closeModal: t,
              })
            : y
              ? (0, e.jsx)(ba.t, {
                  editModel: m,
                  partnerEventEditorStore: d,
                  OnSuccess: () => {},
                  closeModal: t,
                  bReplaceEventMode: !0,
                  elSuccessDisplayLinks: (0, e.jsx)("a", {
                    href: `${Ga.TS.COMMUNITY_BASE_URL}/gid/${x == null ? void 0 : x.ConvertTo64BitString()}/partnerevents/edit/${i}`,
                    children: (0, s.we)("#EventEdit_Replacing_Open"),
                  }),
                })
              : (0, e.jsx)(pi.o0, {
                  onCancel: t,
                  strTitle: (0, s.we)("#EventPublishing_Replace_To"),
                  strDescription: (0, s.we)(
                    "#EventPublishing_Replace_Dialog_Desc1",
                  ),
                  bOKDisabled: !v,
                  onOK: () => {
                    _ || (m.ReplaceFrom(n), L(!0));
                  },
                  children:
                    m && o
                      ? (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsxs)("ul", {
                              children: [
                                (0, e.jsx)("li", {
                                  children: (0, s.we)(
                                    "#EventPublishing_Replace_Dialog_Desc2",
                                    b,
                                  ),
                                }),
                                (0, e.jsx)("li", {
                                  children: (0, s.we)(
                                    "#EventPublishing_Replace_Dialog_Desc3",
                                    (0, s.TW)(S) + " @ " + (0, st.pg)(S),
                                  ),
                                }),
                                (0, e.jsx)("li", {
                                  children: (0, s.we)(
                                    "#EventPublishing_Replace_Dialog_Desc4",
                                    o.persona_name,
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, s.we)("#Dialog_AreYouSure"),
                            }),
                            (0, e.jsx)(g.Yh, {
                              checked: v,
                              onChange: h,
                              label: (0, s.we)(
                                "#EventPublishing_Replace_Confirm",
                              ),
                            }),
                            !!Ga.iA.is_support &&
                              (0, e.jsx)(sh.DA, {
                                curEventModelJson: n.GetEventModel().jsondata,
                                prevEventModelJson: m.GetEventModel().jsondata,
                                onShowCallback: () => u(!0),
                                onCancelCallback: () => u(!1),
                              }),
                          ],
                        })
                      : (0, e.jsx)(Z.t, { string: (0, s.we)("#Loading") }),
                });
        }
        function rh(a) {
          const { editModel: t } = a,
            n = (0, Za.E)(),
            [i] = (0, B.q3)(() => [
              t.GetEventModel().jsondata.clone_from_event_gid,
            ]),
            l = (0, ht.RR)(i),
            [o, r, d] = (0, X.uD)();
          if (!i) return null;
          if (i && !l)
            return (0, e.jsx)(Z.t, { string: (0, s.we)("#Loading") });
          const m = l.BIsVisibleEvent() || l.BIsUnlistedEvent();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.PP)(
                  "#EventPublishing_Replace_CloneFrom",
                  (0, e.jsx)(ue.N_, {
                    to: `${i}`,
                    children: l.GetNameWithFallback(n),
                  }),
                ),
              }),
              (0, e.jsxs)(g.$n, {
                disabled: !m,
                onClick: r,
                children: [
                  (0, s.we)("#EventPublishing_Replace_CloneFrom_Replace"),
                  (0, e.jsx)(Q.o, {
                    tooltip: (0, s.we)(
                      m
                        ? "#EventPublishing_Replace_CloneFrom_Replace_ttip"
                        : "#EventPublishing_Replace_CloneFrom_Replace_ttip_fail",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)(qn.E, {
                active: o,
                children: (0, e.jsx)(xo, {
                  editModel: t,
                  gidTargetClanEvent: i,
                  closeModal: d,
                }),
              }),
            ],
          });
        }
        var dh = p(68297),
          ch = p.n(dh);
        function uh(a) {
          const { editModel: t } = a,
            [n] = (0, B.q3)(() => [t.BHasTag("vo_marketing_message")]);
          if (n) return (0, e.jsx)(ph, { ...a });
        }
        const hh = 3;
        function ph(a) {
          var t, n;
          const { editModel: i } = a,
            [l, o, r] = (0, B.q3)(() => [
              i.BHasTag("vo_marketing_message"),
              i.GetClanAccountID(),
              i.GetGID(),
            ]),
            d = (0, xe.fj)(o, r),
            [m, c] = (0, E.useState)(() => {
              var b, S;
              return (S =
                (b = d == null ? void 0 : d.oPrivateData) == null
                  ? void 0
                  : b.jsonData) == null
                ? void 0
                : S.strMarketingMessageMajorUpdateHelpTicketReferenceCode;
            }),
            [v, h] = (0, E.useState)(null);
          (0, E.useEffect)(() => {
            var b, S, y, L;
            (S =
              (b = d == null ? void 0 : d.oPrivateData) == null
                ? void 0
                : b.jsonData) != null &&
              S.strMarketingMessageMajorUpdateHelpTicketReferenceCode &&
              c(
                (L =
                  (y = d == null ? void 0 : d.oPrivateData) == null
                    ? void 0
                    : y.jsonData) == null
                  ? void 0
                  : L.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
              );
          }, [
            (n =
              (t = d == null ? void 0 : d.oPrivateData) == null
                ? void 0
                : t.jsonData) == null
              ? void 0
              : n.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
          ]);
          const [_, u, x] = (0, X.uD)(!1);
          return (0, e.jsxs)("div", {
            className: ch().Ctn,
            children: [
              (0, e.jsx)("div", {
                className: J.EventEditorTextTitle,
                children: (0, s.we)("#MM_MajorUpdate_Review_title"),
              }),
              (0, e.jsx)("div", {
                children: m
                  ? (0, e.jsx)("p", {
                      children: (0, s.oW)(
                        "#MM_MajorUpdate_Review_ticked_created",
                        (0, e.jsx)(O.uU, {
                          href: `${vt.TS.HELP_BASE_URL}en/wizard/HelpRequest/${m}`,
                          className: (0, j.A)(J.EditPreviewButton, J.Button),
                          bForceExternal: !0,
                        }),
                      ),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, s.we)(
                            "#MM_MajorUpdate_Review_desc",
                            hh,
                          ),
                        }),
                        (0, e.jsx)(Ei, {
                          accountID: vt.iA.accountid,
                          partnerID: v,
                          fnSetPartnerID: h,
                          strLabel: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Partner",
                          ),
                          strTooltip: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Partner_ttip",
                          ),
                        }),
                        (0, e.jsx)(g.$n, {
                          onClick: u,
                          children: (0, s.we)("#MM_MajorUpdate_Review_create"),
                        }),
                        (0, e.jsx)(qn.E, {
                          active: _,
                          children: (0, e.jsx)(mh, {
                            editModel: i,
                            nPartnerID: v,
                            closeModal: x,
                            fnSetTicketID: c,
                          }),
                        }),
                      ],
                    }),
              }),
            ],
          });
        }
        function mh(a) {
          const {
              editModel: t,
              nPartnerID: n,
              closeModal: i,
              fnSetTicketID: l,
            } = a,
            o = (0, ct.vs)();
          return (
            (0, E.useEffect)(() => {
              o.bLoading ||
                (o.fnSetLoading(!0),
                (async () => {
                  const d = t.GetClanSteamID(),
                    m = t.GetGID(),
                    c = await _h(
                      d,
                      t.GetAppID(),
                      m,
                      "Requesting Marketing Message Major Update Review",
                      n,
                    );
                  c
                    ? (l(c.reference_code), o.fnSetSuccess(!0))
                    : (o.fnSetError(!0),
                      o.fnSetStrError(
                        (0, s.we)("#Login_Error_Network_Description"),
                      ));
                })());
            }, [n, t, o.bLoading, o, l]),
            (0, e.jsx)(ct.Hh, {
              state: o,
              strDialogTitle: (0, s.we)("#MM_MajorUpdate_Review_create"),
              closeModal: i,
            })
          );
        }
        async function _h(a, t, n, i, l) {
          const o =
              vt.TS.COMMUNITY_BASE_URL +
              "partnereventdata/ajaxrequestmarketingmessagemajorupdatereview",
            r = new URLSearchParams();
          r.append("sessionid", (0, D.KC)()),
            r.append("clanAccountID", "" + a.GetAccountID()),
            r.append("appid", "" + t),
            r.append("gidClanEvent", n),
            r.append("partnerID", "" + l),
            r.append("message", i);
          try {
            let d = await pe().post(o, r, { withCredentials: !0 });
            return !d || d.status != 200 || d.data.success != Ue.R
              ? (console.error(
                  "CreateMarketingMessageMajorUpdateReviewRequestTicket failed.",
                  d && (0, ye.H)(d),
                ),
                d.data.success == Ue.Ze ? d.data : null)
              : d.data;
          } catch (d) {
            const m = (0, ye.H)(d);
            console.error(
              "CreateMarketingMessageMajorUpdateReviewRequestTicket failed: " +
                m.strErrorMsg,
              m,
            );
          }
          return null;
        }
        var vh = Object.defineProperty,
          gh = Object.getOwnPropertyDescriptor,
          Sh = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? gh(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && vh(t, n, l), l;
          };
        function Eh(a) {
          const { editModel: t } = a,
            [n, i, l, o, r] = (0, B.q3)(() => [
              t.GetClanSteamID(),
              t.GetGID(),
              t.GetEventType(),
              t.GetEventModel().jsondata.sale_presenters,
              t.BVisible(),
            ]),
            { data: d } = (0, Ut.hM)(t.GetClanAccountID());
          return (0, e.jsx)("div", {
            className: (0, j.A)(ne.PublishContainer),
            children: (0, e.jsx)("div", {
              className: (0, j.A)(J.ReachBackground),
              children: (0, e.jsxs)("div", {
                className: de.EventEditorInputPaneContents,
                children: [
                  (0, e.jsx)(bi, {
                    clanSteamID: n,
                    gidClanEvent: i,
                    rgSalePresenters: o,
                    fnCleanSaleEventPresenters: () => {
                      (t.GetEventModel().jsondata.sale_presenters = void 0),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                    bPublishTab: !0,
                    bIsEventVisible: r,
                  }),
                  (0, e.jsx)(xh, { editModel: t }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(
                      J.FlexRowContainer,
                      ne.PublishOptionsCtn,
                    ),
                    children: [
                      (0, e.jsx)(th, { editModel: t, bTakePublishAction: !1 }),
                      (0, e.jsx)(oh, { editModel: t }),
                    ],
                  }),
                  (0, e.jsx)(uh, { editModel: t }),
                  (0, e.jsx)(Kn, {
                    eventType: l,
                    clanSteamID: n,
                    permissions: d,
                  }),
                  (0, e.jsx)("div", { className: J.ClearThings }),
                ],
              }),
            }),
          });
        }
        let Kn = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                bLoadingClanInfo: !oe.ac.BHasClanInfoLoaded(
                  this.props.clanSteamID,
                ),
              });
          }
          async componentDidMount() {
            this.state.bLoadingClanInfo &&
              (await oe.ac.LoadClanInfoForClanSteamID(this.props.clanSteamID),
              this.setState({ bLoadingClanInfo: !1 }));
          }
          render() {
            if (this.props.eventType == N.ajI) return;
            if (this.state.bLoadingClanInfo)
              return (0, e.jsx)("div", {
                className: "ReachCtn",
                children: (0, e.jsx)(Z.t, {}),
              });
            let a = P.mh.GetEditModel(),
              t = a.GetCategoryAsType();
            const { permissions: n } = this.props,
              i = oe.ac.GetClanInfoByClanAccountID(
                a.GetClanSteamID().GetAccountID(),
              );
            if (!(n != null && n.can_edit)) return (0, e.jsx)(E.Fragment, {});
            let l = a.BHasSaleEnabled() || i.is_ogg;
            const r =
              (a.BWillShowOnLibraryOverviewDueToSettings() ||
                a.BWillShowOnLibraryDetailDueToSettings()) &&
              (0, $.Dn)(a.GetEventModel());
            return (0, e.jsxs)("div", {
              className: "ReachCtn",
              children: [
                (0, e.jsx)("div", {
                  className: J.EventEditorTextTitle,
                  children: (0, s.we)("#EventReach_Title"),
                }),
                (0, e.jsxs)("div", {
                  className: ne.ReachItems,
                  children: [
                    (0, e.jsx)("div", {
                      className: J.EventEditorTextSubTitle,
                      children: (0, s.we)("#EventReach_SubTitle"),
                    }),
                    (0, e.jsx)("div", {
                      className: ne.ReachColumnTitles,
                      children: (0, e.jsx)("div", {
                        className: ne.ReachColumnName,
                        children: (0, s.we)("#EventReach_Location"),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: ne.ReachItemList,
                      children: [
                        a.BWillShowOnStoreDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: ne.ReachSubject,
                            children: [
                              (0, s.we)("#EventReach_GamePage"),
                              (0, e.jsx)(Q.o, {
                                tooltip: (0, s.we)("#EventReach_GamePage_ttip"),
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          className: ne.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_GameNewsPg"),
                            (0, e.jsx)(Q.o, {
                              tooltip: (0, s.we)("#EventReach_GameNewsPg_ttip"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, j.A)(ne.ReachSubject),
                          children: [
                            (0, s.we)("#EventReach_PersonalizedCalendar"),
                            (0, e.jsx)(Q.o, {
                              tooltip: (0, s.we)(
                                "#EventReach_PersonalizedCalendar_ttip",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: ne.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_Community"),
                            (0, e.jsx)(Q.o, {
                              tooltip: (0, s.we)("#EventReach_Community_ttip"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: ne.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_FriendActivity"),
                            (0, e.jsx)(Q.o, {
                              tooltip: (0, s.we)(
                                "#EventReach_FriendActivity_ttip",
                              ),
                            }),
                          ],
                        }),
                        a.BWillShowOnLibraryOverviewDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(ne.ReachSubject),
                            children: [
                              (0, s.we)("#EventReach_LibraryHome"),
                              r &&
                                (0, e.jsxs)("span", {
                                  className: ne.ReachPendingVisibilityText,
                                  children: [
                                    "  ",
                                    (0, s.we)(
                                      "#EventReach_LibraryVisibilityPendingModeration",
                                    ),
                                  ],
                                }),
                              (0, e.jsx)(Q.o, {
                                tooltip: (0, s.we)(
                                  "#EventReach_LibraryHome_ttip",
                                ),
                              }),
                            ],
                          }),
                        a.BWillShowOnLibraryDetailDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(ne.ReachSubject),
                            children: [
                              (0, s.we)("#EventReach_LibraryDetail"),
                              r &&
                                (0, e.jsxs)("span", {
                                  className: ne.ReachPendingVisibilityText,
                                  children: [
                                    "  ",
                                    (0, s.we)(
                                      "#EventReach_LibraryVisibilityPendingModeration",
                                    ),
                                  ],
                                }),
                              (0, e.jsx)(Q.o, {
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
                            className: (0, j.A)(ne.ReachSubject, ne.Future),
                            children: [
                              (0, s.we)("#EventReach_Future"),
                              " ",
                              (0, s.we)("#EventReach_Reminder"),
                              (0, e.jsx)(Q.o, {
                                tooltip: (0, s.we)("#EventReach_Reminder_ttip"),
                              }),
                            ],
                          }),
                        !!a.BIsAllowedInNotifications() &&
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(ne.ReachSubject, ne.Future),
                            children: [
                              (0, s.we)("#EventReach_Future"),
                              " ",
                              (0, s.we)("#EventReach_EmailRollUp"),
                              (0, e.jsx)(Q.o, {
                                tooltip: (0, s.we)(
                                  "#EventReach_EmailRollUp_ttip",
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                    l &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: ne.ReachColumnTitles,
                            children: (0, e.jsx)("div", {
                              className: ne.ReachColumnName,
                              children: (0, s.we)(
                                "#EventReach_OptionalLocation",
                              ),
                            }),
                          }),
                          i.is_ogg &&
                            (0, e.jsxs)("div", {
                              className: ne.ReachItemList,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: ne.ReachSubject,
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: ne.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(We.EQ, {
                                          bOn: a
                                            .GetEventModel()
                                            .BHasTag("workshop"),
                                        }),
                                        (0, e.jsx)("span", {
                                          className:
                                            ne.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_Workshop",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(Q.o, {
                                      tooltip: (0, s.we)(
                                        "#EventReach_Workshop_ttip",
                                      ),
                                    }),
                                  ],
                                }),
                                t == N.zeJ && (0, e.jsx)(fh, {}),
                                (0, e.jsxs)("div", {
                                  className: (0, j.A)(ne.ReachSubject),
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: ne.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(We.EQ, {
                                          bOn: a
                                            .GetEventModel()
                                            .BShowLibrarySpotlight(),
                                        }),
                                        (0, e.jsx)("span", {
                                          className:
                                            ne.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_LibraySpotLight",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(Q.o, {
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
                              className: ne.ReachItemList,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: ne.ReachSubject,
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: ne.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(We.EQ, {
                                          bOn: a.BHasSaleProductBanners(),
                                        }),
                                        (0, e.jsx)("span", {
                                          className:
                                            ne.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_SaleBanner",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(Q.o, {
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
                                          (0, e.jsx)(st.K4, {
                                            dateAndTime: a.GetEventStartTime(),
                                            bSingleLine: !0,
                                          }),
                                          (0, e.jsx)(st.K4, {
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
        Kn = Sh([R.PA], Kn);
        function fh(a) {
          const t = P.mh.GetEditModel(),
            n = nh(ka.tw.I8, t.GetAppID());
          return (0, e.jsxs)("div", {
            className: ne.ReachSubject,
            children: [
              (0, e.jsxs)("span", {
                className: ne.ReachSubjectOptional,
                children: [
                  n == null || n == null
                    ? (0, e.jsx)(Z.t, {
                        size: "small",
                        string: (0, s.we)("#Loading"),
                      })
                    : (0, e.jsx)(We.EQ, {
                        bOn: n.some(
                          (i) => i.announcementid == t.GetAnnouncementGID(),
                        ),
                      }),
                  (0, e.jsx)("span", {
                    className: ne.ReactSubjectOptionalText,
                    children: (0, s.we)("#EventReach_RecentlyUpdatedPg"),
                  }),
                ],
              }),
              (0, e.jsx)(Q.o, {
                tooltip: (0, s.we)("#EventReach_RecentlyUpdatedPg_ttip"),
              }),
            ],
          });
        }
        function xh(a) {
          const { editModel: t } = a,
            [n, i, l, o, r, d, m, c, v] = (0, B.q3)(() => [
              t.GetEventModel().GID,
              t.GetEventModel().AnnouncementGID,
              t.ComputeEditingModelTimeOverrides(),
              t.BHidden(),
              t.BPublished(),
              t.GetEventVisibilityStartTime(),
              t.GetVisibilitySetting(),
              t.GetEventModel().GetVisibilityStartTimeAndDateUnixSeconds(),
              t.GetEventType() == N.ajI,
            ]);
          let h;
          if (!r)
            if (t.GetStartTimeEditChoice() == C.z8.k_ESpecified)
              switch (m) {
                case C.Fl.event_start:
                  h = (0, e.jsx)("div", {
                    className: ne.VisibilityNote,
                    children: (0, e.jsx)("p", {
                      children: (0, s.we)(
                        "#EventEditor_Status_WillBeVisible_EventStart",
                      ),
                    }),
                  });
                  break;
                case C.Fl.specified_time:
                  h = (0, e.jsx)("div", {
                    className: ne.VisibilityNote,
                    children: (0, e.jsx)("p", {
                      children: (0, s.PP)(
                        "#EventEditor_Status_WillBeVisible_At",
                        (0, e.jsx)(st.K4, { dateAndTime: c, bSingleLine: !0 }),
                      ),
                    }),
                  });
                  break;
                case C.Fl.immediate:
                default:
                  h = (0, e.jsxs)("div", {
                    className: ne.VisibilityNote,
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
              h = (0, e.jsxs)("div", {
                className: ne.VisibilityNote,
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
          const _ = (0, se.T7)(t.GetEventModel());
          return (0, e.jsxs)("div", {
            className: ne.SummaryContainer,
            children: [
              (0, e.jsx)("div", {
                className: J.EventEditorTextTitle,
                children: (0, s.we)("#EventPublishing_Summary"),
              }),
              (0, e.jsxs)("div", {
                className: ne.SummaryItems,
                children: [
                  (0, e.jsxs)("div", {
                    className: ne.StatusRow,
                    children: [
                      (0, e.jsx)("div", {
                        className: ne.StatusText,
                        children: (0, e.jsx)(zt.zm, { editModel: t }),
                      }),
                      r &&
                        !o &&
                        !v &&
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)(se.tj, {
                            className: (0, j.A)(J.Button, J.Primary),
                            eventModel: t.GetEventModel(),
                            route: se.PH.k_eStoreView,
                            children: (0, s.we)("#EventEditor_ViewLive"),
                          }),
                        }),
                    ],
                  }),
                  !v &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsxs)("div", {
                          className: J.FlexRowContainer,
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
                            (0, e.jsx)(st.K4, {
                              dateAndTime: l.nOverrideStartTime,
                              bSingleLine: !0,
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: J.FlexRowContainer,
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
                            !!(r && o) &&
                              (0, e.jsxs)("span", {
                                children: [
                                  (0, s.PP)(
                                    "#EventEditor_Visibility_AutoVisible",
                                    (0, e.jsx)(st.K4, {
                                      dateAndTime: d,
                                      bSingleLine: !0,
                                    }),
                                  ),
                                  "\xA0",
                                  (0, s.we)("#EventEditor_Visibility_NoAction"),
                                ],
                              }),
                            h,
                          ],
                        }),
                        !!(n || i) &&
                          (0, e.jsx)("div", {
                            className: ne.LinkRow,
                            children: (0, e.jsx)($u.V, {
                              eventLink: _,
                              labelOverride: "#EventEditor_Status_FutureURL",
                            }),
                          }),
                      ],
                    }),
                  v &&
                    (0, e.jsx)("div", {
                      className: J.FlexRowContainer,
                      children: (0, e.jsx)(Xi, { editModel: t }),
                    }),
                ],
              }),
            ],
          });
        }
        function bh(a) {
          var t;
          const { bInitiatePublishDialog: n, clanSteamID: i } = a,
            l = (0, Nn.m)("EventInputPane"),
            o = (0, hi.LU)(),
            r = o.GetEventModel();
          (0, E.useEffect)(() => {
            D.UF.IS_CURATOR && $e.pF.LoadCreatorHome(i, !1, l);
          }, [i, l]);
          const d = (0, E.useCallback)(() => {
              const G = $e.pF.GetCreatorHome(i);
              return D.iA.is_support &&
                D.UF.CAN_UPLOAD_IMAGES &&
                D.UF.IS_CURATOR &&
                G
                ? !(
                    G.BHasClanAccountFlagSet(ia.Wv.bM) ||
                    G.BHasClanAccountFlagSet(ia.Wv._x) ||
                    G.BHasClanAccountFlagSet(ia.Wv.Jb) ||
                    G.GetNumFollowers() >= 15e3
                  )
                : !1;
            }, [i]),
            { data: m } = (0, Ut.hM)(r.clanSteamID.GetAccountID()),
            c = !!(m != null && m.valve_admin),
            v = (0, oe.Yp)(r, c),
            h = (0, B.q3)(() => (0, oa.C7)(c)),
            _ = (0, oe._5)(r, c),
            u = (0, B.q3)(() => (0, oa.cA)(c)),
            x = (0, oe.Ao)(r);
          (0, fa.wT)(
            [v.bVisible, _.bVisible, x.bVisible].filter(Boolean).length <= 1,
            "Sale, Update Landing Page, and Creator Home should be mutually exclusive",
          );
          const b = !vo(o.GetEventModel(), m);
          oe.ac.LoadClanInfoForClanSteamID(i);
          const S = !!(
              (t = oe.ac.GetClanInfoByClanAccountID(i.GetAccountID())) !=
                null && t.has_rss_feed
            ),
            y = (G) =>
              window.sessionStorage.setItem(
                "editorCurrentTab",
                `?tab=${G.key}`,
              ),
            L = [
              {
                name: (0, s.we)("#EventEditor_Description_tab"),
                key: "description",
                status: (0, e.jsx)(va, { fnGetStatus: oa._P }),
                hidden: x.bVisible,
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Zd, {
                    editModel: o,
                    bInitiatePublishDialog: n,
                    bCanManuallyTagAssociatedApps: S,
                  }),
                }),
                onClick: y,
              },
              {
                name:
                  (x.bValveOnly ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_CreatorHome_Title"),
                key: "creatorhome",
                hidden: !x.bVisible,
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Hn, { mode: qa, editModel: o }),
                }),
                onClick: y,
              },
              {
                name: (0, s.we)("#EventEditor_Visibility_Title"),
                key: "options",
                status: (0, e.jsx)(va, { fnGetStatus: oa.e5 }),
                hidden: x.bVisible,
                contents: (0, e.jsxs)(ve.tH, {
                  children: [
                    (0, e.jsx)(zu, { editModel: o }),
                    (0, e.jsx)("div", { className: f().ClearThings }),
                  ],
                }),
                onClick: y,
              },
              {
                name: (0, s.we)("#EventEditor_Artwork"),
                key: "artwork",
                status: (0, e.jsx)(va, { fnGetStatus: oa.uu }),
                hidden: !D.UF.CAN_UPLOAD_IMAGES || x.bVisible,
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(Ih, { editModel: o }),
                onClick: y,
              },
              {
                name: (0, s.we)("#Broadcast_tab"),
                key: "broadcast",
                hidden:
                  !D.UF.CAN_UPLOAD_IMAGES ||
                  o.GetClanAccountID() == (0, ra.H)(),
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(tt, { editModel: o }),
                }),
                onClick: y,
              },
              {
                name:
                  (r.BHasEmailEnabled() ? "" : "(VO) ") +
                  (0, s.we)("#EventEmail_TabTitle"),
                key: "email",
                hidden: b,
                status:
                  o.GetClanAccountID() == (0, ra.H)()
                    ? (0, e.jsx)(va, { fnGetStatus: oa.ER })
                    : void 0,
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Gu, { editModel: o }),
                }),
                onClick: y,
              },
              {
                name:
                  (v.bValveOnly ? "(VO) " : "") + (0, s.we)("#Sale_TabTitle"),
                key: "sale",
                status: (0, e.jsx)(va, { fnGetStatus: () => h }),
                statusToolTip: h == null ? void 0 : h.ttip,
                hidden: !v.bVisible,
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Hn, { mode: Gl, editModel: o }),
                }),
                onClick: y,
              },
              {
                name:
                  (_.bValveOnly ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_UpdateLandingPage_Title"),
                key: "updatelandingpage",
                status: (0, e.jsx)(va, { fnGetStatus: () => u }),
                statusToolTip: u == null ? void 0 : u.ttip,
                hidden: !_.bVisible,
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Hn, { mode: Ja, editModel: o }),
                }),
                onClick: y,
              },
              {
                name: (0, s.we)("#Button_Publish"),
                key: "publishing",
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Eh, { editModel: o }),
                }),
                onClick: y,
              },
              {
                name: "(VO) Debug",
                key: "debug",
                hidden: !c,
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(Al.Oq, { editModel: o }),
                }),
                onClick: y,
              },
              {
                name: "(VO) Stats",
                key: "stats",
                hidden: !c || !r.GID || !r.BHasSaleEnabled(),
                contents: (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(gc, { editModel: o }),
                }),
                onClick: y,
              },
            ];
          return (0, e.jsxs)(jh, {
            children: [
              (0, e.jsx)(Gn.V, { tabs: L }),
              (0, e.jsx)("div", { className: f().ClearThings }),
            ],
          });
        }
        function jh(a) {
          const [t, n] = E.useState();
          return (0, e.jsx)("div", {
            className: be().EventEditorInputPaneContainer,
            children: (0, e.jsxs)(md, {
              elContent: t,
              children: [
                (0, e.jsx)("div", {
                  className: be().EventEditorInputPaneContents,
                  children: a.children,
                }),
                (0, e.jsx)("div", {
                  className: (0, j.A)(f().SaveBackground),
                  children: (0, e.jsx)(gd, { setAdditionalContentDiv: n }),
                }),
              ],
            }),
          });
        }
        const va = (0, R.PA)(function (t) {
            const n = t.fnGetStatus();
            if (!n) return null;
            const { text: i, complete: l, total: o } = n;
            return (0, e.jsx)(Gn.a, {
              statusType: l >= o ? "success" : "danger",
              children: i,
            });
          }),
          bo = (0, R.PA)((a) => {
            var t;
            (0, E.useEffect)(() => {
              oe.ac.LoadOGGClanInfoForIdentifier(a.appid_or_vanity_str);
            }, [a.appid_or_vanity_str]);
            const {
                clanSteamID: n,
                gid: i,
                appid: l,
                bInitiatePublishDialog: o,
                appid_or_vanity_str: r,
              } = a,
              m = !(D.UF.IS_CREATOR_HOME || D.UF.IS_CURATOR)
                ? (t = it.A.Get().GetApp(l)) == null
                  ? void 0
                  : t.GetName()
                : D.UF.VANITY_ID,
              c = P.mh.GetEditModel();
            return (0, e.jsx)(hi.A4, {
              editModel: c,
              children: (0, e.jsxs)("div", {
                className: (0, j.A)(be().wrapper),
                children: [
                  (0, e.jsx)(vd, {
                    clanSteamID: n,
                    appid: l,
                    gid: i,
                    appid_or_vanity_str: r,
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(
                      f().FlexColumnContainer,
                      be().EventEditBelowTopBarContainer,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: be().EventEditBelowTopBarGameName,
                        children: m,
                      }),
                      (0, e.jsxs)("div", {
                        className: be().EventEditBelowTopBarRow,
                        children: [
                          (0, e.jsx)(Ch, { editModel: c }),
                          (0, e.jsx)(Ee.Gq, {
                            toolTipContent: c.GetName(),
                            direction: "bottom",
                            children: (0, e.jsx)("div", {
                              className: be().EventEditBelowTopBarEventName,
                              children: c.GetName(),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: be().maincontent,
                    children: (0, e.jsx)(bh, {
                      appid_or_vanity_str: r,
                      appid: l,
                      gid: i,
                      bInitiatePublishDialog: o,
                      clanSteamID: n,
                    }),
                  }),
                  (0, e.jsx)("div", {}),
                ],
              }),
            });
          });
        function Ch(a) {
          const { editModel: t } = a,
            [n, i, l, o, r, d] = (0, B.q3)(() => [
              t.GetEventModel().bOldAnnouncement,
              t.GetStrVanityOrAppID(),
              t.GetCategoryAsString(),
              t.GetAnnouncementGID(),
              t.BHasGid() ? t.GetGID() : "",
              t.BHasTag("vo_marketing_message"),
            ]),
            { bCanChange: m, strReasonText: c } = (0, Re.NN)(t),
            v = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("span", {
                  children: [(0, s.we)("#EventEditor_TypeTitle"), " "],
                }),
                l,
                m && (0, e.jsx)("img", { src: Ol.A }),
                !m && (0, e.jsx)(Q.o, { tooltip: c }),
              ],
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              m &&
                (0, e.jsx)(ue.N_, {
                  className: (0, j.A)(
                    be().EventEditBelowTopBarCategoryChoice,
                    be().AllowHover,
                  ),
                  to: n ? ee.GY.MigrateCategory(i, o) : ee.GY.Category(i, r),
                  children: v,
                }),
              !m &&
                (0, e.jsx)("div", {
                  className: be().EventEditBelowTopBarCategoryChoice,
                  children: v,
                }),
            ],
          });
        }
        function wh() {
          const a = (0, mi.il)(),
            t = P.mh.GetEditModel(),
            [n, i] = (0, E.useState)(!1);
          return (
            (0, E.useEffect)(() => {
              if (!(t != null && t.BTagsNeedResync())) return;
              let l = !1;
              return (
                (0, mi.I9)(a, t)
                  .then((o) => {
                    !l &&
                      o.length > 0 &&
                      (0, pi.pY)(
                        (0, s.we)(
                          "#EventEditor_TagResyncIncomplete",
                          o.length,
                          o
                            .slice(0, 10)
                            .map((r) => r.type + " " + r.id)
                            .join(", "),
                        ),
                        window,
                      );
                  })
                  .catch((o) => {
                    console.error(
                      "Failed to rebuild the stripped tags for this event",
                      o,
                    ),
                      l || i(!0);
                  }),
                () => {
                  l = !0;
                }
              );
            }, [t, a]),
            {
              bResyncing: !!(t != null && t.BTagsNeedResync()) && !n,
              bFailed: n,
            }
          );
        }
        const yh = (0, R.PA)(function (t) {
            const n = (0, E.useMemo)(() => new me.b(D.UF.CLANSTEAMID), []),
              { bResyncing: i, bFailed: l } = wh();
            return i
              ? (0, e.jsxs)("div", {
                  className: la().FlexCenter,
                  children: [
                    (0, e.jsx)(Z.t, {}),
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEditor_TagResyncProgress"),
                    }),
                  ],
                })
              : l
                ? (0, e.jsx)(zt.XW, {
                    strErrorMsg: (0, s.we)("#EventEditor_TagResyncFailed"),
                    appid_or_vanity_str: t.match.params.appid_or_vanity_str,
                  })
                : (0, e.jsx)(bo, {
                    appid_or_vanity_str: t.match.params.appid_or_vanity_str,
                    appid: D.UF.APPID,
                    gid: t.match.params.gid,
                    clanSteamID: n,
                    bInitiatePublishDialog: t.bInitiatePublishDialog,
                  });
          }),
          Zn = (0, Qa.L)(yh);
        class Dh extends E.Component {
          constructor(t) {
            super(t),
              (this.m_bRedirect = !1),
              (this.m_bRedirect =
                P.mh.GetEditModel() === void 0 ||
                P.mh.GetEditModel().GetCategoryAsType() == N.DRF);
          }
          render() {
            return this.m_bRedirect
              ? (0, e.jsx)(Ae.rd, {
                  to: ee.GY.Category(
                    this.props.match.params.appid_or_vanity_str,
                    "",
                  ),
                })
              : (0, e.jsx)(Zn, { ...this.props });
          }
        }
        function Th(a) {
          return a ? a.filter(Boolean).length : 0;
        }
        function Ih(a) {
          const { editModel: t } = a,
            n = (0, le.Dd)(t.GetClanSteamID(), !0),
            [i, l, o, r, d, m, c, v, h, _] = (0, B.q3)(() => [
              t.GetEventType(),
              !!t.GetEventModel().BHasTag("steam_best_of_year"),
              t.GetClanSteamID(),
              t.GetEventModel().vecTags,
              t.GetIncludedRealmList(),
              t.GetEventType() === N.HFK,
              Th(t.GetEventModel().jsondata.localized_spotlight_image),
              t.BAllowedSteamStoreSpotlight(),
              t.GetAppID(),
              Lc(t, n),
            ]),
            u = ["background", "capsule"];
          c > 0
            ? u.push("spotlight")
            : D.UF.IS_OGG &&
              v &&
              (u.push("localized_store_app_spotlight"),
              u.push("localized_store_app_spotlight_mobile")),
            l && u.push("bestofyear_banner", "bestofyear_banner_mobile");
          const x = u.includes("spotlight"),
            b = u.includes("localized_store_app_spotlight"),
            S = u.includes("localized_store_app_spotlight_mobile");
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
                                  target: D.TS.IN_CLIENT ? void 0 : "_blank",
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
                    target: D.TS.IN_CLIENT ? void 0 : "_blank",
                    children: [
                      (0, e.jsx)("div", {
                        className: be().ArtworkExampleCtn,
                        children: (0, e.jsx)("img", {
                          className: be().ArtworkExampleThumbnail,
                          src: D.TS.IMG_URL + "events/thumb_library_home.jpg",
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
              (0, e.jsx)(An.t, {
                clanSteamID: o,
                rgSupportArtwork: u,
                fnSetImageURL: t.SetImageURL,
                bAllowPreviousClanImageSelection: !0,
                rgRealmList: d,
              }),
              (0, e.jsx)(Le.it, {
                clanSteamID: o,
                appid: h,
                eventModel: t.GetEventModel(),
                title: (0, s.we)("#EventEditor_ArtworkType_capsule"),
                artworkType: "capsule",
                fnLangHasData: t.BHasTitleImage,
                fnSetImageURL: t.SetImageURL,
                fnGetImageHashAndExt: t.GetImageHashAndExt,
                headerHint: (0, ea.bc)(i, r) ? Le.uE.k_Required : void 0,
                elEventArtworkExample: (0, e.jsx)(ja, {
                  artworkType: "capsule",
                }),
                partnerEventStore: P.mh,
              }),
              (0, e.jsx)(Le.it, {
                clanSteamID: o,
                appid: h,
                eventModel: t.GetEventModel(),
                title: (0, s.we)("#EventEditor_ArtworkType_background"),
                fnLangHasData: t.BHasTitleImage,
                fnSetImageURL: t.SetImageURL,
                fnGetImageHashAndExt: t.GetImageHashAndExt,
                artworkType: "background",
                headerHint: Le.uE.k_Suggested,
                elEventArtworkExample: (0, e.jsx)(ja, {
                  artworkType: "background",
                }),
                partnerEventStore: P.mh,
              }),
              !!(m && (b || S || x)) &&
                (0, e.jsxs)("div", {
                  className: _e().ArtworkSelectorContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: _e().Title,
                      children: (0, s.we)(
                        "#EventEditor_ArtworkType_store_spotlight",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, j.A)(_e().SelectImageBlock, _e().Tips),
                      children: (0, s.we)(
                        "#EventEditor_ArtworkType_SpotlightNotSupport",
                        t.GetCategoryAsString(),
                      ),
                    }),
                    (0, e.jsx)("br", {}),
                  ],
                }),
              !!(b && !m) &&
                (0, e.jsx)(Le.it, {
                  clanSteamID: o,
                  appid: h,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)(
                    "#EventEditor_ArtworkType_localized_store_app_spotlight",
                  ),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "localized_store_app_spotlight",
                  elEventArtworkExample: (0, e.jsx)(ja, {
                    artworkType: "localized_store_app_spotlight",
                  }),
                  headerHint: Le.uE.k_Requested,
                  partnerEventStore: P.mh,
                }),
              !!(S && !m) &&
                (0, e.jsx)(Le.it, {
                  clanSteamID: o,
                  appid: h,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)(
                    "#EventEditor_ArtworkType_localized_store_app_spotlight_mobile",
                  ),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "localized_store_app_spotlight_mobile",
                  elEventArtworkExample: (0, e.jsx)(ja, {
                    artworkType: "localized_store_app_spotlight_mobile",
                  }),
                  headerHint: Le.uE.k_Requested,
                  partnerEventStore: P.mh,
                }),
              !!(x && !m) &&
                (0, e.jsx)(Le.it, {
                  clanSteamID: o,
                  appid: h,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)("#EventEditor_ArtworkType_store_spotlight"),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "spotlight",
                  headerHint: (0, ea.Ch)(i) ? Le.uE.k_Suggested : void 0,
                  elEventArtworkExample: (0, e.jsx)(ja, {
                    artworkType: "spotlight",
                  }),
                  partnerEventStore: P.mh,
                }),
              !!D.UF.IS_OGG &&
                (0, e.jsx)(Le.it, {
                  clanSteamID: o,
                  appid: h,
                  eventModel: t.GetEventModel(),
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  title: (0, s.we)("#EventEditor_ArtworkType_hero"),
                  fnLangHasData: t.BHasTitleImage,
                  artworkType: "hero",
                  partnerEventStore: P.mh,
                }),
              !!l &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(Le.it, {
                      clanSteamID: o,
                      appid: h,
                      eventModel: t.GetEventModel(),
                      fnLangHasData: t.BHasTitleImage,
                      fnSetImageURL: t.SetImageURL,
                      fnGetImageHashAndExt: t.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_bestofyear_banner",
                      ),
                      artworkType: "bestofyear_banner",
                      partnerEventStore: P.mh,
                    }),
                    (0, e.jsx)(Le.it, {
                      clanSteamID: o,
                      appid: h,
                      eventModel: t.GetEventModel(),
                      fnLangHasData: t.BHasTitleImage,
                      fnSetImageURL: t.SetImageURL,
                      fnGetImageHashAndExt: t.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_bestofyear_banner_mobile",
                      ),
                      artworkType: "bestofyear_banner_mobile",
                      partnerEventStore: P.mh,
                    }),
                  ],
                }),
              !!_ && (0, e.jsx)(Oc, { editModel: t }),
            ],
          });
        }
        var _n = p(9608),
          Ah = p(77008),
          Gh = p(85528),
          Fa = p(75779),
          Nh = p(30454);
        async function Bh() {
          const a = await (0, Nh.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!a.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return a.counts;
        }
        const Mh = 300 * 1e3;
        function Lh() {
          return ["DeckCompatCounts"];
        }
        function Oh() {
          return {
            queryKey: Lh(),
            queryFn: () => Bh(),
            staleTime: Mh,
            retry: !1,
          };
        }
        function Ph() {
          const { data: a } = (0, ya.I)(Oh());
          return a;
        }
        function Rh(a, t) {
          switch (t) {
            case Fa.sd:
              return a == null ? void 0 : a.playable;
            case Fa.V8:
              return a == null ? void 0 : a.unsupported;
            default:
              return a == null ? void 0 : a.verified;
          }
        }
        var Fe = p(70187),
          kh = p(36549),
          Xn = p(39153),
          jo = p(47610),
          Fh = p(18860),
          $n = p(87805);
        function Co(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, Fe.j$)(a.args)),
            i = E.useMemo(() => {
              var l;
              if (t)
                return (l = t.jsondata.sale_sections) == null
                  ? void 0
                  : l.find((o) => {
                      var r, d;
                      return (
                        o.section_type == "vo_internal" &&
                        (((r = o.internal_section_data) == null
                          ? void 0
                          : r.internal_type) == "reservation_widget" ||
                          ((d = o.internal_section_data) == null
                            ? void 0
                            : d.internal_type) == "while_supplies_last")
                      );
                    });
            }, [t]);
          if (n && i) {
            const l = Number.parseInt((0, Fe.j$)(a.args, "depositpackageid")),
              o = Number.parseInt((0, Fe.j$)(a.args, "psulesspackageid")),
              r = (0, Fe.j$)(a.args, "out_of_stock_override"),
              d = (0, Fe.j$)(a.args, "delivery_override"),
              m = (0, Fe.j$)(a.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(Uh, {
              section: i,
              reservationPackageID: n,
              depositPackageID: l,
              psuLessPackageID: o,
              strOutOfStockOverride: r,
              strDeliveryOverride: m || d,
              bDeliveryOverrideOnlyIfOutOfStock: !!m,
              PreviewActions: a.PreviewActions,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        function Uh(a) {
          const {
              reservationPackageID: t,
              depositPackageID: n,
              bIsPreview: i,
              psuLessPackageID: l,
              strOutOfStockOverride: o,
              strDeliveryOverride: r,
              bDeliveryOverrideOnlyIfOutOfStock: d,
              section: m,
              PreviewActions: c,
            } = a,
            { data: v } = (0, jo.DR)(t),
            { data: h } = (0, jo.DR)(l),
            _ = (0, E.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + t,
                  reservation_package: t,
                  deposit_package: n,
                  localized_reservation_desc: (0, Ot.$Y)([], N.bP9, null),
                  localized_out_of_stock_override: (0, Ot.$Y)(
                    [o || null],
                    N.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, Ot.$Y)(
                    [r || null],
                    N.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!d,
                  psu_less_package: l,
                },
              ],
              [t, n, o, r, d, l],
            );
          if (!v || (l && !h))
            return (0, e.jsx)(Z.t, {
              string: (0, s.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const u = !Ga.iA.logged_in || !v.account_restricted_from_purchasing,
            x =
              v.reservation_state == Fh.G.k_EPurchaseReservationState_Reserved
                ? v
                : void 0;
          return (0, e.jsxs)(ve.tH, {
            children: [
              c &&
                (0, e.jsx)(E.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(c, {
                    bIsPreview: !!i,
                    rgReservationDef: _,
                  }),
                }),
              !!v.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: _[0].unique_id,
                  children: [
                    (0, e.jsx)($n.b, {
                      reservationDef: _[0],
                      hardwareDetail: v,
                      bPSULessModel: !1,
                      reservedHardwareDetail: x,
                    }),
                    u &&
                      (0, e.jsx)($n.p, {
                        section: m,
                        reservationDef: _[0],
                        hardwareDetail: v,
                        reservedHardwareDetail: x,
                      }),
                    h &&
                      (h == null ? void 0 : h.allow_purchase_in_country) &&
                      (0, e.jsx)($n.b, {
                        reservationDef: _[0],
                        hardwareDetail: h,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var Hh = p(6878),
          zh = p(21035),
          wo = p(72865),
          Vh = p(38081),
          es = p.n(Vh),
          ga = p(69596),
          Wh = p(10026),
          Qh = p.n(Wh),
          Yh = p(19298),
          Jh = p(11996),
          qh = p(19047),
          yo = p(89926),
          Kh = p(32545),
          ts = p.n(Kh);
        function Zh(a) {
          const { appID: t, classOverride: n, styleOverride: i } = a,
            [l, o] = (0, E.useState)(!1),
            r = (0, Nn.m)("GameHoverFollowButton"),
            { elDialogElement: d, fnShowLogonDialog: m } = (0, yo.l)(),
            c = (0, Jh.Fh)(t),
            { mutateAsync: v } = (0, qh.L)(t, !c, void 0),
            h = async (_) => {
              _.preventDefault(),
                _.stopPropagation(),
                D.iA.logged_in
                  ? (o(!0), await v(), r.token.reason || o(!1))
                  : m();
            };
          return (0, e.jsxs)(Yh.Z, {
            className: (0, j.A)(ts().FollowButton, n),
            onClick: h,
            style: i,
            children: [
              c ? (0, e.jsx)(bt.pPV, {}) : (0, e.jsx)(bt.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, j.A)(
                  ts().FollowButtonText,
                  l && ts().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, s.we)(
                  c ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              d,
            ],
          });
        }
        function Xh(a) {
          const { appid: t, color: n, bgcolor: i } = a,
            l = (0, wo.n9)();
          return (0, e.jsx)(Zh, {
            appID: t,
            classOverride: (0, j.A)(
              es().FollowGameButtonNotTop,
              Qh().BBCodeFollowButton,
            ),
            styleOverride: { color: n, backgroundColor: i },
          });
        }
        function $h(a) {
          const t = Number(a.args.appid);
          if (!t) return null;
          const n = (0, ga.O)(a.args.color, "black"),
            i = (0, ga.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(Xh, { appid: t, color: n, bgcolor: i });
        }
        var as = p(57646);
        function ep(a) {
          const t = Number(a.args.packageid);
          return t
            ? (0, e.jsx)(as.eF, {
                packageID: t,
                display_style: (0, as._w)(a.args.display),
              })
            : null;
        }
        function tp(a) {
          const t = Number(a.args.packageid),
            n = Number(a.args.compareid);
          return !t || !n
            ? null
            : (0, e.jsx)(as.hJ, { packageID: t, compareID: n });
        }
        function ap(a) {
          var t;
          const n = (t = a.args[""]) == null ? void 0 : t.trim();
          return n
            ? (0, e.jsx)("div", { className: n, children: a.children })
            : (0, e.jsx)(e.Fragment, { children: a.children });
        }
        var np = p(18657),
          Do = p.n(np),
          sp = p(63026);
        function ip(a) {
          const { clanAccountID: t, color: n, bgcolor: i } = a,
            [l, o] = E.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, j.A)(Do().BBCodeFollowButton, l && Do().isHovered),
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            children: (0, e.jsx)(sp.Q, {
              nCreatorAccountID: t,
              classOverride: es().FollowGameButtonNotTop,
              styleOverride: { color: n, backgroundColor: i },
              followType: "group",
            }),
          });
        }
        function op(a) {
          const { event: t } = a.context,
            n =
              Number(a.args.groupid) ||
              (t == null ? void 0 : t.clanSteamID.GetAccountID());
          if (!n) return null;
          const i = (0, ga.O)(a.args.color, "black"),
            l = (0, ga.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(ip, { clanAccountID: n, color: i, bgcolor: l });
        }
        var lp = p(83482),
          rp = p(44267),
          dp = p(9202),
          To = p.n(dp);
        function cp(a) {
          const { appid: t, color: n, bgcolor: i } = a,
            l = (0, wo.n9)(),
            o = (0, io.$5)(t),
            r = (0, lp.L3)(l);
          return (0, e.jsx)("div", {
            className: To().WishlistHoverCtn,
            children: (0, e.jsx)(rp.E, {
              snr: r,
              id: o,
              classOverride: (0, j.A)(
                es().WishlistButtonNotTop,
                To().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: n, backgroundColor: i },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function up(a) {
          const t = Number(a.args.appid);
          if (!t) return null;
          const n = (0, ga.O)(a.args.color, "black"),
            i = (0, ga.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(cp, { appid: t, color: n, bgcolor: i });
        }
        let ns = null;
        function hp() {
          return (
            ns == null &&
              (ns = new Map([
                ["wishlist", { Constructor: up, autocloses: !1 }],
                ["followgroup", { Constructor: op, autocloses: !1 }],
                ["classname", { Constructor: ap, autocloses: !1 }],
                ["price", { Constructor: ep, autocloses: !1 }],
                ["pricesavings", { Constructor: tp, autocloses: !1 }],
                ["reservationbutton", { Constructor: Co, autocloses: !1 }],
              ])),
            ns
          );
        }
        var pp = p(37656),
          Gt = p(29868);
        function Io(a) {
          return a < 10 ? "0" + a : a;
        }
        function mp(a) {
          const { giveawayid: t } = a,
            n = (0, pp.w)(t),
            {
              bLoadingGiveawayInfo: i,
              winner_count: l,
              closed: o,
              seconds_until_drawing: r,
            } = n;
          return i
            ? null
            : (0, e.jsxs)("div", {
                className: Gt.countdownCtn,
                children: [
                  !!o &&
                    (0, e.jsx)("div", {
                      className: Gt.Closed,
                      children:
                        l > 0
                          ? (0, s.we)("#Giveaway_Closed", (0, _t.D)(l))
                          : (0, s.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !o &&
                    (0, e.jsxs)(E.Fragment, {
                      children: [
                        r <= 0
                          ? (0, e.jsxs)("div", {
                              className: Gt.Throbber,
                              children: [
                                (0, e.jsx)(Z.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, s.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Gt.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Gt.CountDownTime,
                                  children:
                                    Io(Math.floor(r / 60)) + ":" + Io(r % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Gt.CountDownText,
                                  children: [
                                    (0, s.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, s.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        l > 0 &&
                          (0, e.jsxs)("div", {
                            className: Gt.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Gt.WinnerCount,
                                children: (0, _t.D)(l),
                              }),
                              (0, e.jsx)("div", {
                                className: Gt.WinnerText,
                                children: (0, s.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var _p = p(88245),
          vp = p(35702),
          gp = p(39256),
          Sp = p(4720),
          Ep = p(5613),
          fp = p(57810),
          xp = p(20122),
          Ao = p(81416);
        function bp(a) {
          const { eventModel: t, nEventBadgeID: n } = a,
            i = (0, vp.fy)(n);
          if ((i == null ? void 0 : i.level) > 0) {
            let l = i.level;
            if (t != null && t.BHasSaleEnabled()) {
              const o = t.GetSaleSectionsByType("badge_progress");
              if ((o == null ? void 0 : o.length) == 1) {
                const r = o[0].badge_progress;
                if (
                  (r == null ? void 0 : r.event_badgeid) == n &&
                  r != null &&
                  r.granted_by_discovery_queue
                ) {
                  const d = r.levels[r.levels.length - 1].level;
                  return (0, e.jsx)(jp, {
                    eventModel: t,
                    nBadgeLevel: l,
                    nMaxLevel: d,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, _t.D)(l),
            });
          }
          return null;
        }
        function jp(a) {
          const { eventModel: t, nBadgeLevel: n, nMaxLevel: i } = a,
            l = E.useMemo(() => {
              const c = t
                .GetSaleSections()
                .filter((v) => v.section_type == "discoveryqueue");
              return (c == null ? void 0 : c.length) > 0 ? c[0] : null;
            }, [t]),
            { storePageFilter: o, eStoreDiscoveryQueueType: r } = E.useMemo(
              () => (0, Ep.lx)(t, l),
              [t, l],
            ),
            d = (0, fp.Uf)(r, o),
            m = Math.min(n + d, i);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, _t.D)(m),
          });
        }
        function Cp(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, Fe.j$)(a.args, "eventid"));
          return D.iA.logged_in && n
            ? (0, e.jsx)(bp, { nEventBadgeID: n, eventModel: t })
            : null;
        }
        function wp(a) {
          const { nDoorIndex: t, children: n } = a,
            i = (0, Xn.OM)(t),
            l = (0, Xn.gP)(),
            [o, r] = E.useState(!1),
            [d, m] = E.useState(!1),
            { elDialogElement: c, fnShowLogonDialog: v } = (0, yo.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(g.$n, {
                disabled: i,
                onClick: (h) => {
                  o ||
                    (D.iA.logged_in
                      ? (r(!0),
                        l({ iDoorIndex: t })
                          .then((_) => {
                            _ || m(!0), r(!1);
                          })
                          .catch(() => {
                            m(!0), r(!1);
                          }))
                      : v());
                },
                children: d
                  ? (0, e.jsx)("div", {
                      children: (0, s.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!o && (0, e.jsx)(Z.t, { size: "small" }),
                        !!i && (0, e.jsx)(bt.Jlk, {}),
                        n,
                      ],
                    }),
              }),
              c,
            ],
          });
        }
        function yp(a) {
          const t = Number.parseInt((0, Fe.j$)(a.args)) || 0;
          return t >= 0 && t < 32
            ? (0, e.jsx)(wp, { nDoorIndex: t, children: a.children })
            : null;
        }
        const Dp = (0, Ae.y)(xp.H);
        function Tp(a) {
          var t, n;
          const i = Number.parseInt((0, Fe.j$)(a.args)),
            { event: l, showErrorInfo: o } = a.context;
          if (i) {
            const r =
              (n =
                (t = l == null ? void 0 : l.jsondata) == null
                  ? void 0
                  : t.sale_sections) == null
                ? void 0
                : n.findIndex((d) => d.unique_id == i);
            if (r >= 0) {
              const d = l.GetDayIndexFromEventStart();
              return (0, e.jsx)(ft.Cs, {
                location: o ? ft.HY : ft.bs,
                children: (0, e.jsx)(Dp, {
                  event: l,
                  section: l.jsondata.sale_sections[r],
                  activeTab: new Sp.y(null, d),
                  language: a.language,
                  nSaleDayIndex: d,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: o
                    ? Ao.S.EPreviewMode_Enabled
                    : Ao.S.EPreviewMode_Disabled,
                }),
              });
            } else if (o)
              return (0, e.jsxs)("div", {
                className: gp.ErrorDiv,
                children: ["Error could not find sale section ", i],
              });
          }
          return null;
        }
        let ss = null;
        function Ip() {
          return (
            ss == null &&
              (ss = new Map([
                ...Array.from(hp().entries()),
                [
                  "itemdef",
                  {
                    Constructor: Ap,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: $h, autocloses: !1 }],
                ["deckcompatcount", { Constructor: Gp, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: Np, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: Op, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: Bp, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: Cp, autocloses: !1 }],
                ["optindoorquest", { Constructor: yp, autocloses: !1 }],
                ["localize", { Constructor: Lp, autocloses: !1 }],
                ["salesection", { Constructor: Tp, autocloses: !1 }],
                ["reservationbutton", { Constructor: Rp, autocloses: !1 }],
              ])),
            ss
          );
        }
        function Ap(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, Fe.j$)(a.args, "appid")),
            i = Number.parseInt((0, Fe.j$)(a.args, "itemdefid")),
            l = Number.parseInt((0, Fe.j$)(a.args, "maxquantity")),
            o = (0, Fe.j$)(a.args, "calltoaction");
          return !(0, _p.gS)(n, i, !1) || !t
            ? (0, e.jsx)(Z.t, {
                size: "small",
                position: "center",
                string: (0, s.we)("#Loading"),
              })
            : (0, e.jsx)(zh.f, {
                language: a.language,
                clanAccountID: t.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: n, nItemDefID: i, max_quantity: l },
                strCallToAction: o,
              });
        }
        function Gp(a) {
          const t = Ph();
          if (!t) return (0, e.jsx)(Z.t, { size: "small" });
          const n = Number.parseInt((0, Fe.j$)(a.args));
          return (0, e.jsx)("span", { children: (0, _t.D)(Number(Rh(t, n))) });
        }
        function Np(a) {
          var t, n, i, l;
          const o = (0, kh.jR)(D.iA.accountid, "library");
          if (!o) return (0, e.jsx)(Z.t, { size: "small" });
          const r = Number.parseInt((0, Fe.j$)(a.args));
          let d = ((t = o.verifiedList) == null ? void 0 : t.length) || 0;
          switch (r) {
            case Fa.sd:
              d = ((n = o.playableList) == null ? void 0 : n.length) || 0;
              break;
            case Fa.V8:
              d = ((i = o.unsupportedList) == null ? void 0 : i.length) || 0;
              break;
            case Fa.YX:
              d = ((l = o.unknownList) == null ? void 0 : l.length) || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, _t.D)(Number(d)) });
        }
        function Bp(a) {
          const t = Number.parseInt((0, Fe.j$)(a.args)),
            n =
              "hide" in a.args && !!Number.parseInt((0, Fe.j$)(a.args, "hide"));
          return t >= 0
            ? (0, e.jsx)(Mp, { nDoorIndex: t, bHide: n, children: a.children })
            : null;
        }
        function Mp(a) {
          const { nDoorIndex: t, bHide: n, children: i } = a,
            l = (0, Xn.OM)(t);
          return l == null
            ? null
            : (l && !n) || (!l && n)
              ? (0, e.jsx)(e.Fragment, { children: a.children })
              : null;
        }
        function Lp(a) {
          return (0, e.jsx)("span", {
            className: Hh.LocalizeBlock,
            children: (0, s.oW)(
              a.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function Op(a) {
          let t = (0, Fe.j$)(a.args);
          return t
            ? (0, e.jsx)(mp, { giveawayid: t })
            : (0, e.jsx)(E.Fragment, {});
        }
        const Pp = void 0;
        function Rp(a) {
          return (0, e.jsx)(Co, { ...a, PreviewActions: Pp });
        }
        var kp = p(93464),
          Fp = p(10303),
          Pm = p(83492),
          Up = p(90783),
          Hp = p(39567),
          zp = Object.defineProperty,
          Vp = Object.getOwnPropertyDescriptor,
          Wp = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Vp(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && zp(t, n, l), l;
          };
        let is = class extends _n.mn {
          constructor() {
            super(...arguments), (this.state = { bLoading: !0 });
          }
          GetRedirectRender() {
            return (0, e.jsx)(Ae.rd, {
              push: !0,
              to: ee.GY.Edit(
                this.props.match.params.appid_or_vanity_str,
                this.state.redirectToGIDEvent,
              ),
            });
          }
          render() {
            let a = super.render();
            return a != null
              ? a
              : (0, e.jsx)(bo, {
                  appid: vt.UF.APPID,
                  appid_or_vanity_str:
                    this.props.match.params.appid_or_vanity_str,
                  gid: "",
                  clanSteamID: this.m_clanSteamID,
                });
          }
        };
        is = Wp([R.PA], is);
        const Qp = (0, Qa.L)(Yp);
        function Yp(a) {
          const t = P.mh.GetEditModel(),
            n = t.GetEventModel(),
            [i, l] = E.useState();
          if ((E.useEffect(() => oi(n, l), [n]), i))
            switch (i) {
              case "clone":
                return (0, e.jsx)(Ae.rd, {
                  push: !0,
                  to: ee.GY.Edit(a.match.params.appid_or_vanity_str, ""),
                });
              case "edit":
                return (0, e.jsx)(se.OG, {
                  eventModel: n,
                  route: se.PH.k_eCommunityEdit,
                });
              case "view":
                return n.BIsVisibleEvent()
                  ? (0, e.jsx)(se.OG, { eventModel: n, route: se.PH.k_eView })
                  : (0, e.jsx)(se.OG, {
                      eventModel: n,
                      route: se.PH.k_eCommunityPreview,
                    });
              default:
                console.log(
                  "EventCloneLandingInternal - Unexpected Case - " + i,
                );
            }
          return (0, e.jsx)(se.tj, {
            eventModel: t.GetEventModel(),
            route: se.PH.k_eCommunityAdminPage,
            children: (0, s.we)("#EventDisplay_ReturnToDashboard"),
          });
        }
        function Jp(a) {
          const [t, n] = E.useState(!0),
            i = (0, Hp.vb)(D.TS.LANGUAGE);
          return (
            E.useEffect(() => {
              Gh.Vw.Init(new Ah.D(D.TS.WEBAPI_BASE_URL)),
                je.O3.Init(),
                P.mh.Init(),
                n(!1);
            }, []),
            t || !i
              ? (0, e.jsx)(Z.t, {
                  position: "center",
                  size: "medium",
                  string: (0, s.we)("#Loading"),
                })
              : (0, e.jsx)(ve.tH, {
                  children: (0, e.jsx)(kp.d3, {
                    dictionary: Ip(),
                    children: (0, e.jsxs)(Fp.I.Provider, {
                      value: { bCanUseLink: !0 },
                      children: [
                        (0, e.jsx)(zt.EB, {}),
                        (0, e.jsxs)(Ae.dO, {
                          children: [
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.Home(":appid_or_vanity_str"),
                              component: ci,
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.List(":appid_or_vanity_str"),
                              component: ci,
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.Create(":appid_or_vanity_str"),
                              component: Re.A9,
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.Category(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, E.createElement)(Re.A9, {
                                  ...l,
                                  key: l.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.EditRedirectToCategory(
                                ":appid_or_vanity_str",
                              ),
                              render: (l) => (0, e.jsx)(Dh, { ...l }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.Edit(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, E.createElement)(Zn, {
                                  ...l,
                                  key: l.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.Clone(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, E.createElement)(Qp, {
                                  ...l,
                                  key: l.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.Publish(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, E.createElement)(Zn, {
                                  ...l,
                                  key: l.match.params.gid,
                                  bInitiatePublishDialog: !0,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.PreviewSale(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, E.createElement)(In, {
                                  ...l,
                                  key: l.match.params.gid,
                                  mode: "previewsale",
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.Preview(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, E.createElement)(In, {
                                  ...l,
                                  key: l.match.params.gid,
                                  mode: "preview",
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.View(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)",
                              ),
                              render: (l) =>
                                (0, E.createElement)(In, {
                                  ...l,
                                  key: l.match.params.gid,
                                  mode: "view",
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.Migrate(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (l) =>
                                (0, E.createElement)(is, {
                                  ...l,
                                  key: l.match.params.oldAnnouncementGID,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.MigrateCategory(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (l) =>
                                (0, E.createElement)(_n.pl, {
                                  ...l,
                                  key: l.match.params.oldAnnouncementGID,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.ViewOldAnnouncement(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (l) =>
                                (0, E.createElement)(_n.Io, {
                                  ...l,
                                  key: l.match.params.oldAnnouncementGID,
                                  bClearDirty: !0,
                                  bPreview: !1,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, {
                              exact: !0,
                              path: ee.GY.PreviewOldAnnouncement(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (l) =>
                                (0, E.createElement)(_n.Io, {
                                  ...l,
                                  key: l.match.params.oldAnnouncementGID,
                                  bClearDirty: !0,
                                  bPreview: !0,
                                }),
                            }),
                            (0, e.jsx)(Ae.qh, { component: Up.a }),
                          ],
                        }),
                      ],
                    }),
                  }),
                })
          );
        }
      },
      24118: (z, Et, p) => {
        "use strict";
        p.d(Et, { V: () => ht });
        var e = p(7850),
          E = p(19298),
          ee = p(90626),
          P = p(14256),
          Re = p.n(P),
          N = p(95695),
          ge = p.n(N),
          pe = p(71421),
          R = p(36707),
          ue = p(18210),
          $ = p(96715);
        function ht(Oe) {
          const { eventLink: me, labelOverride: oe } = Oe,
            Ve = ee.useRef(null),
            [g, We] = ee.useState(""),
            J = () => {
              var f;
              const s =
                (f = Ve.current) == null ? void 0 : f.ownerDocument.defaultView;
              !Ve.current ||
                !s ||
                s.navigator.clipboard
                  .writeText(Ve.current.value)
                  .then(() =>
                    We((0, ue.we)("#EventDisplay_Share_CopiedToClipboard")),
                  )
                  .catch((pt) => {
                    We(
                      (0, ue.we)("#EventDisplay_Share_FailedToCopyToClipboard"),
                    ),
                      console.error("Failed to copy link to clipboard:", pt);
                  });
            };
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: (0, R.A)(ge().FlexRowContainer, Re().linkField),
                children: [
                  (0, e.jsx)("span", {
                    className: Re().LinkInputLabel,
                    children: (0, ue.we)(
                      oe != null ? oe : "#EventDisplay_Share_Link",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    className: Re().LinkInput,
                    ref: Ve,
                    value: me,
                    readOnly: !0,
                    onClick: J,
                  }),
                  (0, e.jsx)(E.Z, {
                    className: (0, R.A)(
                      ge().Button,
                      ge().Icon,
                      Re().LinkButton,
                    ),
                    onActivate: J,
                    children: (0, e.jsx)(pe.Gq, {
                      toolTipContent: (0, ue.we)(
                        "#ToolTip_CopyLinkToClipboard",
                      ),
                      children: (0, e.jsx)("img", {
                        className: Re().ClipboardIcon,
                        src: $.A,
                        alt: (0, ue.we)("#ToolTip_CopyLinkToClipboard"),
                      }),
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("div", { className: Re().ClipboardText, children: g }),
            ],
          });
        }
      },
      37656: (z, Et, p) => {
        "use strict";
        p.d(Et, { w: () => D });
        var e = p(41735),
          E = p.n(e),
          ee = p(14947),
          P = p(65946),
          Re = p(90626),
          N = p(27066),
          ge = p(8323),
          pe = p(54963),
          R = p(3166),
          ue = Object.defineProperty,
          $ = Object.getOwnPropertyDescriptor,
          ht = (W, O, K) =>
            O in W
              ? ue(W, O, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: K,
                })
              : (W[O] = K),
          Oe = (W, O, K, je) => {
            for (
              var Ie = je > 1 ? void 0 : je ? $(O, K) : O, Ke = W.length - 1, V;
              Ke >= 0;
              Ke--
            )
              (V = W[Ke]) && (Ie = (je ? V(O, K, Ie) : V(Ie)) || Ie);
            return je && Ie && ue(O, K, Ie), Ie;
          },
          me = (W, O, K) => ht(W, typeof O != "symbol" ? O + "" : O, K);
        const oe = class Go {
          constructor() {
            me(this, "giveaway_id"),
              me(this, "seconds_until_drawing"),
              me(this, "rtime_start"),
              me(this, "rtime_end"),
              me(this, "closed"),
              me(this, "winner_count"),
              (0, ee.Gn)(this);
          }
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const O = new Go();
            return (
              (O.giveaway_id = this.giveaway_id),
              (O.seconds_until_drawing = this.seconds_until_drawing),
              (O.rtime_start = this.rtime_start),
              (O.rtime_end = this.rtime_end),
              (O.closed = this.closed),
              (O.winner_count = this.winner_count),
              O
            );
          }
        };
        Oe([ee.sH], oe.prototype, "giveaway_id", 2),
          Oe([ee.sH], oe.prototype, "seconds_until_drawing", 2),
          Oe([ee.sH], oe.prototype, "rtime_start", 2),
          Oe([ee.sH], oe.prototype, "rtime_end", 2),
          Oe([ee.sH], oe.prototype, "closed", 2),
          Oe([ee.sH], oe.prototype, "winner_count", 2);
        let Ve = oe;
        const g = class Sa {
          constructor() {
            me(this, "m_mapGiveawayIDToNextDrawInfo", new Map()),
              me(this, "m_mapGiveawayIDAndInstanceToNextDrawInfo", new Map()),
              me(this, "m_bLoadedFromConfig", !1),
              me(this, "m_mapNextDrawChangeCallback", new Map()),
              (0, ee.Gn)(this);
          }
          GetKey(O, K) {
            return O + "_" + K;
          }
          GetInfoByInstance(O, K) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(O, K),
            );
          }
          GetNextDrawChangeCallback(O) {
            return (
              this.m_mapNextDrawChangeCallback.has(O) ||
                this.m_mapNextDrawChangeCallback.set(O, new ge.lu()),
              this.m_mapNextDrawChangeCallback.get(O)
            );
          }
          CopyToGiveaway(O, K) {
            K.closed != O.closed && (K.closed = O.closed),
              K.giveaway_id != O.giveaway_id && (K.giveaway_id = O.giveaway_id),
              K.rtime_start != O.rtime_start && (K.rtime_start = O.rtime_start),
              K.rtime_end != O.rtime_end && (K.rtime_end = O.rtime_end),
              K.winner_count != O.winner_count &&
                (K.winner_count = O.winner_count),
              K.seconds_until_drawing != O.seconds_until_drawing &&
                (K.seconds_until_drawing = O.seconds_until_drawing);
          }
          async ReloadGiveaway(O, K) {
            if (!O) return null;
            let je = R.TS.STORE_BASE_URL + "prizes/nextdraw/" + O,
              Ie = null,
              Ke = { origin: self.origin };
            return (
              (Ie = await E().get(je, { params: Ke })),
              (0, ee.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(O) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(O, new Ve()),
                  this.CopyToGiveaway(
                    Ie.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(O),
                  ),
                  K !== void 0)
                ) {
                  const V = this.GetKey(O, K);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(V) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      V,
                      new Ve(),
                    ),
                    this.CopyToGiveaway(
                      Ie.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(V),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(O).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(O),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(O)
            );
          }
          static Get() {
            return (
              Sa.s_Singleton ||
                ((Sa.s_Singleton = new Sa()), Sa.s_Singleton.Init()),
              Sa.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let O = (0, R.Tc)("giveawaynextdraw", "application_config");
              if (O && O.giveaway_id) {
                let K = new Ve();
                this.CopyToGiveaway(O, K),
                  this.m_mapGiveawayIDToNextDrawInfo.set(O.giveaway_id, K);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        me(g, "s_Singleton"),
          Oe([ee.sH], g.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          Oe([ee.XI], g.prototype, "CopyToGiveaway", 1);
        let We = g;
        const J = class os {
          constructor() {
            me(this, "m_intervalID"),
              me(this, "m_intervalCountDownID"),
              me(this, "m_myInstanceNumber", 0),
              (this.m_myInstanceNumber = os.s_GlobalInstance),
              (os.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(O, K) {
            if ((this.ClearRefreshInterval(), !O.closed)) {
              let je =
                O.seconds_until_drawing <= 0 && O.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(K, je);
            }
          }
          SetupCountDown(O, K) {
            O > 0 && (this.m_intervalCountDownID = window.setInterval(K, 1e3));
          }
        };
        me(J, "s_GlobalInstance", 0),
          Oe([N.o], J.prototype, "ClearRefreshInterval", 1),
          Oe([N.o], J.prototype, "ClearCountDown", 1),
          Oe([N.o], J.prototype, "SetupRefreshDataInterval", 1),
          Oe([N.o], J.prototype, "SetupCountDown", 1);
        let f = J;
        function s(W, O) {
          const K = We.Get().GetInfoByInstance(W, O.m_myInstanceNumber);
          (K.seconds_until_drawing -= 1),
            K.seconds_until_drawing == 0 && O.ClearCountDown();
        }
        function pt(W, O) {
          const K = We.Get().GetInfoByInstance(W, O.m_myInstanceNumber);
          K &&
            K.BIsValid() &&
            K.seconds_until_drawing <= 0 &&
            !K.closed &&
            (O.ClearCountDown(),
            We.Get()
              .ReloadGiveaway(W, O.m_myInstanceNumber)
              .then((je) => {
                O.SetupCountDown(je.seconds_until_drawing, () => s(W, O));
              }));
        }
        function D(W) {
          const [O] = (0, Re.useState)(new f()),
            K = (0, pe.CH)();
          (0, Re.useEffect)(
            () => (
              We.Get()
                .ReloadGiveaway(W, O.m_myInstanceNumber)
                .then((Z) => {
                  O.SetupRefreshDataInterval(Z, () => pt(W, O)),
                    O.SetupCountDown(Z.seconds_until_drawing, () => s(W, O)),
                    K();
                }),
              () => {
                O.ClearRefreshInterval(), O.ClearCountDown();
              }
            ),
            [O, W, K],
          );
          const je = We.Get().GetInfoByInstance(W, O.m_myInstanceNumber),
            [Ie, Ke, V] = (0, P.q3)(() => [
              je == null ? void 0 : je.winner_count,
              je == null ? void 0 : je.closed,
              je == null ? void 0 : je.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !je || je.giveaway_id == null || !je.BStarted() || Ie === void 0,
            winner_count: Ie,
            closed: Ke,
            seconds_until_drawing: V,
          };
        }
      },
      1885: (z, Et, p) => {
        "use strict";
        p.d(Et, { jl: () => Ft, Bv: () => Ct });
        var e = p(7850),
          E = p(90626),
          ee = p(54963),
          P = p(41735),
          Re = p.n(P),
          N = p(19316),
          ge = p(18210),
          pe = p(91640),
          R = p.n(pe),
          ue = p(3166),
          $ = p(76559),
          ht = p(82734),
          Oe = p(14947),
          me = p(35413),
          oe = p(71742),
          Ve = p(34592),
          g = Object.defineProperty,
          We = Object.getOwnPropertyDescriptor,
          J = (re, A, F) =>
            A in re
              ? g(re, A, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: F,
                })
              : (re[A] = F),
          f = (re, A, F, Q) => {
            for (
              var Te = Q > 1 ? void 0 : Q ? We(A, F) : A,
                ke = re.length - 1,
                Qe;
              ke >= 0;
              ke--
            )
              (Qe = re[ke]) && (Te = (Q ? Qe(A, F, Te) : Qe(Te)) || Te);
            return Q && Te && g(A, F, Te), Te;
          },
          s = (re, A, F) => J(re, typeof A != "symbol" ? A + "" : A, F);
        class pt {
          constructor() {
            s(this, "m_mapProfiles", new Map()),
              s(this, "m_mapProfilesLoading", new Map()),
              (0, Oe.Gn)(this);
          }
          async LoadProfiles(A, F) {
            (0, oe.wT)(
              A.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let Q = A.filter(
              (Ne) =>
                !this.m_mapProfiles.has(Ne) &&
                !this.m_mapProfilesLoading.has(Ne),
            );
            if (Q.length == 0) return this.m_mapProfilesLoading.get(A[0]);
            let Te = ue.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              ke = Re().get(Te, {
                params: { steamids: Q.join(",") },
                withCredentials: !0,
                cancelToken: F == null ? void 0 : F.token,
              });
            Q.forEach((Ne) => this.m_mapProfilesLoading.set(Ne, ke));
            let Qe = await ke;
            Qe.data &&
              Qe.status == 200 &&
              Qe.data.forEach((Ne) => {
                (Ne.avatar_hash = Ne.avatar_url),
                  (Ne.avatar_url_medium = (0, me.t)(Ne.avatar_url, "medium")),
                  (Ne.avatar_url_full = (0, me.t)(Ne.avatar_url, "full")),
                  (Ne.avatar_url = (0, me.t)(Ne.avatar_url)),
                  this.m_mapProfiles.set(Ne.steamid, Ne),
                  this.m_mapProfilesLoading.delete(Ne.steamid);
              });
          }
          GetProfile(A) {
            return this.m_mapProfiles.get(A);
          }
          GetProfileByAccountID(A) {
            return this.m_mapProfiles.get(
              $.b.InitFromAccountID(A).ConvertTo64BitString(),
            );
          }
          GetProfileBySteamID(A) {
            return this.m_mapProfiles.get(A.ConvertTo64BitString());
          }
          BHasProfile(A) {
            return this.m_mapProfiles.has(A);
          }
          BHasProfileByAccountID(A) {
            return this.m_mapProfiles.has(
              $.b.InitFromAccountID(A).ConvertTo64BitString(),
            );
          }
          BHasProfileBySteamID(A) {
            return this.m_mapProfiles.has(A.ConvertTo64BitString());
          }
          BHasAllProfilesBySteamID(A) {
            return !A.some((F) => !this.BHasProfileBySteamID(F));
          }
          GetProfileURLBySteamID(A) {
            const F = this.GetProfileBySteamID(A);
            return F && F.profile_url
              ? ue.TS.COMMUNITY_BASE_URL + "id/" + F.profile_url
              : ue.TS.COMMUNITY_BASE_URL +
                  "profiles/" +
                  A.ConvertTo64BitString();
          }
          GetPersonaNameBySteamID(A) {
            const F = this.GetProfileBySteamID(A);
            return F && F.persona_name ? F.persona_name : "";
          }
        }
        f([Oe.sH], pt.prototype, "m_mapProfiles", 2);
        const D = new pt();
        function W(re) {
          const A = React.useMemo(
              () =>
                re ? (typeof re == "string" ? new CSteamID(re) : re) : null,
              [re],
            ),
            [F, Q] = useState(!!A && !D.BHasProfileBySteamID(A));
          useEffect(() => {
            const ke = axios.CancelToken.source();
            return (
              A &&
                !D.BHasProfileBySteamID(A) &&
                D.LoadProfiles([A.ConvertTo64BitString()])
                  .catch((Qe) => {
                    const Ne = GetMsgAndErrorCodeFromResponse(Qe);
                    console.error(
                      "useUserProfile failed to load profile for " +
                        A.ConvertTo64BitString() +
                        ": " +
                        Ne.strErrorMsg,
                      Ne,
                    );
                  })
                  .finally(() => {
                    ke.token.reason || Q(!1);
                  }),
              () => ke.cancel("unmounting useUserProfile")
            );
          }, [re]);
          const Te = !!A && D.GetProfileBySteamID(A);
          return [F, Te];
        }
        function O(re) {
          const A = React.useMemo(
            () => (re ? CSteamID.InitFromAccountID(re) : null),
            [re],
          );
          return W(A);
        }
        var K = p(72604),
          je = p(36118),
          Ie = p(41301),
          Ke = p(24660),
          V = Object.defineProperty,
          Z = Object.getOwnPropertyDescriptor,
          $t = (re, A, F) =>
            A in re
              ? V(re, A, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: F,
                })
              : (re[A] = F),
          dt = (re, A, F, Q) => {
            for (
              var Te = Q > 1 ? void 0 : Q ? Z(A, F) : A, ke = re.length - 1, Qe;
              ke >= 0;
              ke--
            )
              (Qe = re[ke]) && (Te = (Q ? Qe(A, F, Te) : Qe(Te)) || Te);
            return Q && Te && V(A, F, Te), Te;
          },
          Ea = (re, A, F) => $t(re, typeof A != "symbol" ? A + "" : A, F);
        class Ct extends E.Component {
          constructor() {
            super(...arguments),
              Ea(this, "state", {
                invite_token: "",
                input_search: "",
                friend_code_copied: !1,
                invite_copied: !1,
              });
          }
          async componentDidMount() {
            const A = await Re().get(
              ue.TS.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: (0, ue.KC)() } },
            );
            if (A && A.data && A.data.tokens) {
              const F = A.data.tokens.filter((Q) => Q.valid);
              F.length
                ? this.setState({ invite_token: F[0].invite_token })
                : this.OnCreateInviteLink();
            } else this.OnCreateInviteLink();
          }
          async OnCreateInviteLink() {
            const A = new FormData();
            A.append("sessionid", (0, ue.KC)()),
              A.append("steamid_user", ue.iA.steamid),
              A.append("duration", (720 * 60 * 60).toString());
            const F = await Re().post(
              ue.TS.COMMUNITY_BASE_URL + "invites/ajaxcreate",
              A,
            );
            F &&
              F.data &&
              F.data.invite &&
              this.setState({ invite_token: F.data.invite.invite_token });
          }
          OnCopy(A, F) {
            A === "friend_code" &&
              (this.setState({ friend_code_copied: !0 }),
              setTimeout(() => this.setState({ friend_code_copied: !1 }), 1e3)),
              A === "invite" &&
                (this.setState({ invite_copied: !0 }),
                setTimeout(() => this.setState({ invite_copied: !1 }), 1e3)),
              (0, ht.OG)(F);
          }
          async OnAddFriend(A) {
            const F = new FormData();
            F.append("sessionID", (0, ue.KC)()),
              F.append("steamid", A),
              F.append("accept_invite", "0");
            try {
              const Q = await Re().post(
                ue.TS.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                F,
              );
              return Q && Q.data && Q.data.success == K.R;
            } catch {
              return !1;
            }
          }
          OnSearchChange(A) {
            this.setState({ input_search: A.target.value });
          }
          OnSearchKeyDown(A) {
            A.keyCode === Ie.wd && this.OnSearchSubmit();
          }
          OnSearchSubmit() {
            window.open(
              ue.TS.COMMUNITY_BASE_URL +
                "search/users/#text=" +
                encodeURIComponent(this.state.input_search),
              "_self",
            );
          }
          render() {
            const A = ue.iA.short_url + "/" + this.state.invite_token;
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: R().HeaderBlock,
                  children: (0, ge.we)("#ManageFriends_AddAFriend"),
                }),
                (0, e.jsxs)("div", {
                  className: R().Background,
                  children: [
                    (0, e.jsx)("h1", {
                      className: R().Heading,
                      children: (0, ge.we)("#ManageFriends_YourFriendCode"),
                    }),
                    (0, e.jsxs)("div", {
                      className: R().CopyContainer,
                      children: [
                        (0, e.jsx)("h1", {
                          className: R().Text,
                          children: ue.iA.accountid,
                        }),
                        (0, e.jsx)(N.jn, {
                          autoFocus: !0,
                          className: R().Button,
                          onClick: () =>
                            this.OnCopy("friend_code", String(ue.iA.accountid)),
                          children: this.state.friend_code_copied
                            ? (0, ge.we)("#ManageFriends_Copied")
                            : (0, ge.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, e.jsx)("p", {
                      className: R().Body,
                      children: (0, ge.we)("#ManageFriends_EnterFriendCode"),
                    }),
                    (0, e.jsx)(Ft, {
                      onButtonClick: this.OnAddFriend,
                      buttonText: (0, ge.we)("#ManageFriends_SendInvite"),
                      bDisableForSelf: !0,
                      bDisableForFriends: !0,
                      bShowStatus: !0,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: R().DimBackground,
                  children: [
                    (0, e.jsx)("h1", {
                      className: R().Heading,
                      children: (0, ge.we)("#ManageFriends_OrSendQuickInvite"),
                    }),
                    (0, e.jsx)("p", {
                      className: R().Body,
                      children: (0, ge.we)(
                        "#ManageFriends_QuickInviteDescription",
                      ),
                    }),
                    (0, e.jsx)("p", {
                      className: R().Body,
                      children: (0, ge.we)("#ManageFriends_QuickInviteNote"),
                    }),
                    (0, e.jsxs)("div", {
                      className: R().CopyContainer,
                      children: [
                        !!this.state.invite_token &&
                          (0, e.jsx)("div", {
                            className: R().Link,
                            children: A,
                          }),
                        (0, e.jsx)(N.jn, {
                          className: R().Button,
                          onClick: () => this.OnCopy("invite", A),
                          children: this.state.invite_copied
                            ? (0, ge.we)("#ManageFriends_Copied")
                            : (0, ge.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, e.jsx)(N.$n, {
                      className: R().GenerateLinkButton,
                      onClick: this.OnCreateInviteLink,
                      children: (0, ge.we)("#ManageFriends_CreateInviteLink"),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: R().Background,
                  children: [
                    (0, e.jsx)("h1", {
                      className: R().Heading,
                      children: (0, ge.we)("#ManageFriends_OrSearch"),
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
                          children: (0, e.jsx)(N.pd, {
                            className: R().Input,
                            onKeyDown: this.OnSearchKeyDown,
                            value: this.state.input_search,
                            onChange: this.OnSearchChange,
                            placeholder: (0, ge.we)(
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
                          children: (0, e.jsx)(je.eSy, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        dt([ee.oI], Ct.prototype, "OnCreateInviteLink", 1),
          dt([ee.oI], Ct.prototype, "OnCopy", 1),
          dt([ee.oI], Ct.prototype, "OnAddFriend", 1),
          dt([ee.oI], Ct.prototype, "OnSearchChange", 1),
          dt([ee.oI], Ct.prototype, "OnSearchKeyDown", 1),
          dt([ee.oI], Ct.prototype, "OnSearchSubmit", 1);
        class Ft extends E.Component {
          constructor() {
            super(...arguments),
              Ea(this, "state", {
                input_friend_code: "",
                disable_send_invite: !1,
                searchResult: null,
                invite_status: "pending",
              }),
              Ea(this, "m_currentRequest", 0);
          }
          async OnFriendCodeChange(A) {
            const F = A.target.value.split(",")[0];
            this.setState({ input_friend_code: F, invite_status: "pending" }),
              window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(
                () => this.LoadProfile(F),
                500,
              ));
          }
          async LoadProfile(A) {
            if (A) {
              const F = $.b.InitFromAccountID(Number(A));
              await D.LoadProfiles([F.ConvertTo64BitString()]);
              const Q = D.GetProfile(F.ConvertTo64BitString());
              Q
                ? this.setState({
                    searchResult: Q,
                    disable_send_invite:
                      ue.iA.is_limited ||
                      (this.props.bDisableForFriends && Q.is_friend) ||
                      (this.props.bDisableForSelf &&
                        Q.steamid === ue.iA.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          }
          async OnActionClick(A) {
            const F = new FormData();
            F.append("sessionID", (0, ue.KC)()),
              F.append("steamid", A),
              F.append("accept_invite", "0"),
              this.setState({ disable_send_invite: !0 }),
              (await this.props.onButtonClick(A))
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
              className: R().FriendCodeSelector,
              children: [
                (0, e.jsx)(N.pd, {
                  className: R().Input,
                  value: this.state.input_friend_code,
                  onChange: this.OnFriendCodeChange,
                  placeholder: (0, ge.we)(
                    "#ManageFriends_EnterFriendCodePlaceholder",
                  ),
                }),
                (0, e.jsx)(gn, {
                  searchResult: this.state.searchResult,
                  invite_status: this.state.invite_status,
                  bShowStatus: this.props.bShowStatus,
                  children: (0, e.jsx)(N.jn, {
                    className: R().SendInviteButton,
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
        dt([ee.oI], Ft.prototype, "OnFriendCodeChange", 1),
          dt([ee.oI], Ft.prototype, "LoadProfile", 1),
          dt([ee.oI], Ft.prototype, "OnActionClick", 1);
        const gn = (re) => {
          const {
              searchResult: A,
              invite_status: F,
              bShowStatus: Q,
              children: Te,
            } = re,
            ke = (0, ue.Qn)();
          return A
            ? (0, e.jsxs)("div", {
                className: R().ProfileCard,
                children: [
                  (0, e.jsxs)("div", {
                    className: R().UserContainer,
                    children: [
                      (0, e.jsx)("div", {
                        className: R().Image,
                        children: (0, e.jsx)("img", {
                          style: { width: "100%", height: "100%" },
                          src: A.avatar_url_full,
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: R().ProfileContent,
                        children: [
                          (0, e.jsx)("h1", {
                            className: R().Heading,
                            children: A.persona_name,
                          }),
                          (0, e.jsxs)("div", {
                            className: R().ProfileLink,
                            children: [
                              (0, e.jsx)(Ke.Ii, {
                                target: ke ? void 0 : "_blank",
                                href:
                                  ue.TS.COMMUNITY_BASE_URL +
                                  "profiles/" +
                                  A.steamid,
                                children: (0, ge.we)(
                                  "#ManageFriends_ProfileLink",
                                ),
                              }),
                              (0, e.jsx)("br", {}),
                              (0, e.jsxs)("span", {
                                className: R().Body,
                                children: [
                                  A.real_name,
                                  (0, e.jsx)("br", {}),
                                  `${A.city}${A.city ? "," : ""} ${A.state}${A.state ? "," : ""} ${A.country}`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      Te,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: R().ProfileLink,
                    children: [
                      A.is_friend &&
                        (0, e.jsx)("div", {
                          children: (0, ge.we)("#ManageFriends_IsFriend"),
                        }),
                      A.friends_in_common != 0 &&
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)(Ke.Ii, {
                            target: ke ? void 0 : "_blank",
                            href:
                              ue.TS.COMMUNITY_BASE_URL +
                              "profiles/" +
                              A.steamid +
                              "/friendscommon",
                            children:
                              A.friends_in_common === 1
                                ? (0, ge.we)(
                                    "#ManageFriends_FriendsInCommonSingular",
                                    A.friends_in_common,
                                  )
                                : (0, ge.we)(
                                    "#ManageFriends_FriendsInCommon",
                                    A.friends_in_common,
                                  ),
                          }),
                        }),
                      Q &&
                        F === "failure" &&
                        (0, e.jsx)("div", {
                          className: R().Failure,
                          children: (0, ge.we)("#ManageFriends_InviteFailure"),
                        }),
                      Q &&
                        F === "success" &&
                        (0, e.jsx)("div", {
                          className: R().Success,
                          children: (0, ge.we)(
                            "#ManageFriends_InviteSuccess",
                            A.persona_name,
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        };
      },
      49199: (z) => {
        z.exports = {
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
      68297: (z) => {
        z.exports = { Ctn: "_3cNoLVtVVzke0LB8WeiaxS" };
      },
      78606: (z) => {
        z.exports = { HighlightBox: "_1C8qNhbbX8u5CxFNklZmlc" };
      },
      1743: (z) => {
        z.exports = { SearchResults: "_26iJ3c5EI_arYCNqRvcLNX" };
      },
      22230: (z) => {
        z.exports = {
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
      28796: (z) => {
        z.exports = {
          LivePreview: "eFYn5NNpjD2UUEaetVynq",
          Button: "_1_mHUKME5i3Y8zoNldiFoQ",
          DeviceDropdown: "_3k5_ki8-nxIYRWf3FJmYr7",
          Connected: "_1oL5XzL932fPV06pp5B5w7",
        };
      },
      6103: (z) => {
        z.exports = {
          Ctn: "BTMmbSI5WdBvCQVAgf3-i",
          ButtonIcon: "_21IZDNymOVDf4u4Ont7WVA",
          SalePageTOCPlacement: "_3swQ-bhpt-4JFhKZu9FvNW",
        };
      },
      47155: (z) => {
        z.exports = {
          UploaderCtn: "_1B1zXx3Ukh5fPY5eB6F2Ca",
          CapsuleCtn: "_3K7h_ivhFFa9wmqp1O_e5n",
          CapsuleTitle: "_1YilvBMh1lDdWYGq5MnmqO",
          CapsuleDimensions: "_2R7J4mdptFLnMorL9p9WuY",
          CapsulePreview: "_2eDmRg0urY8jNMPG7lpQ91",
        };
      },
      18368: (z) => {
        z.exports = {
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
      88748: (z) => {
        z.exports = {
          WarningContainer: "_3KKQLT-cntemarSxLAOHU4",
          Warning: "_3j12-L_RkqFQTnTaY3jfxl",
          Buttons: "_1NXKvU6Jb0wmgRqjJNUvTo",
          TooltipIndicator: "_3q4PQbri3zpBCLZtr1RhjU",
        };
      },
      11113: (z) => {
        z.exports = {
          AssociatedBuildBody: "_1rnVUYtxCV0s6yyvpWQdNr",
          BuildDisplay: "_1HwK4xlcGUHwQQ8N0JlIOY",
          BuildUnlinked: "_1cg3t7W3zJ1d2fyZeemkqS",
          BuildLinkedBranch: "_2ssXJvILzS4NK3EGgXkahJ",
          BuildLinkedDefault: "fHJYYxIYA2NCGNolmgOMi",
          BuildIDLink: "_2-Syn-OgAW18RXr3Rz6YOD",
        };
      },
      86836: (z) => {
        z.exports = {
          AddTitleButton: "XKHg8utmcVGXt54ZWUTca",
          CustomTitleCtn: "_1qoSQ8xx3K6loQPzOE0HiB",
          LanguageContainer: "_3WmqO9SJ2x76duLZu9m2_w",
          customTitleOptionsCtn: "zhH_Vr0LaMN9JLW17_6Sg",
          TitleRowCtn: "_96im4Pfj3wp5vXCaqhDwZ",
          AccountRow: "_2uIyvmr0xlWuKw0K7c5XEB",
        };
      },
      31467: (z) => {
        z.exports = {
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
      30040: (z) => {
        z.exports = {
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
      4969: (z) => {
        z.exports = {
          ThemedCtn: "_3JuTN3-LxaE1Kvz0sU14cv",
          CategoryOption: "_4ke28HUvwT2rIC2CU4462",
          CategoryTitle: "Dx6oJLmZ21r_VQlYV17ML",
          event_nomination_banner_ctn: "_1w12VaiWFhKBsTkQ0M7Mla",
          event_nomination_banner: "_2nEQSt0e5gAadvWMl-0IYD",
          event_nomination_banner_text: "_1gePUvogr9fXbuDaaMXFeP",
        };
      },
      6542: (z) => {
        z.exports = {
          PublishOption: "_6BF_4hDIQb4IUVMnPGyOc",
          Description: "_1zX1bcfpvl3eDzOofaa0Ld",
          PublishButton: "_3DS9nFmljPIAzK4YYNyJ7M",
          PublishButtonCtn: "dwVDG_w5nz5NZkVrF3Ymt",
          EventPublishButton: "_eYd_33i0Tu425frNF-D0",
        };
      },
      82267: (z) => {
        z.exports = {
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
      86649: (z) => {
        z.exports = {
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
      31501: (z) => {
        z.exports = {
          ErrorMessaage: "_13sZcUrcBMNUU0KdAqKPUS",
          UpdatingMessage: "_3baPwwHaL5S0vl62s9YPRm",
        };
      },
      9295: (z) => {
        z.exports = {
          ManageLocCtn: "_1f5Ik3OrM66FNXPSlNh_zR",
          LocButtonsCtn: "bAoVO_tlg_jpl-uvQ9JFF",
          ManageLocContents: "_2k4C7NwMxpGzAuHjmqEURq",
          Header: "_1_uWHf6GPtvPfqvUQr-Alu",
        };
      },
      26917: (z) => {
        z.exports = { Waypoint: "_2pZVu5uwOWvVnfNisJPOB9" };
      },
      49285: (z) => {
        z.exports = {
          TableOfContentsContainer: "_3N5be2rmYYNMGufXaKpBSb",
          TableOfContents: "_3tLgun3y-qOlJAVcfwxowt",
          TOCEntry: "_1fzqunMp3Jq_h9SsiGwRGu",
          TOCEntryText: "_2GtCXeIDXaH3zjSXPON8Mc",
          SectionOnScreen: "_3xZOOBpCfl1mS9OS-_DVq4",
          TOCIndent: "_1fP_E_5IswSiXZj42jqqWq",
          Header: "_1GAZYe3epNmQSdQq0rhZBQ",
        };
      },
      32545: (z) => {
        z.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
          BackgroundAnimation: "uyy8KyiiqaQ8u9bMDwblz",
          "ItemFocusAnim-darkerGrey-nocolor": "_1ZwgsD1DzopaHZlXaaWS7B",
          "ItemFocusAnim-darkerGrey": "_1sm-Ag9q7YyfjTirEAUKbD",
          "ItemFocusAnim-darkGreySettings": "Y4bvEiSraTDYjd2Nd9Mwc",
          "ItemFocusAnim-darkGrey": "J6U-QgbF3DbDkS-3DeQdU",
          "ItemFocusAnim-grey": "_377hQ8s9afH681BN_ZEsfJ",
          "ItemFocusAnim-translucent-white-10": "_3ztC4gHbTuhtfBA2YmQnsW",
          "ItemFocusAnim-translucent-white-20": "pjQnWETBI391eZg-gLCoU",
          "ItemFocusAnimBorder-darkGrey": "_35tkELTOnZffhYZXF6IM5p",
          "ItemFocusAnim-green": "ubgODmIok4_aHDeaT6Dpl",
          focusAnimation: "_3hPkc-RJEDgRJ0ItWpPsP9",
          hoverAnimation: "_3cu-nLm0UDnrFRy4HkVrO8",
        };
      },
      10026: (z) => {
        z.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (z) => {
        z.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (z) => {
        z.exports = {
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
      92451: (z) => {
        z.exports = { DialogCtn: "e7i0Hs6j09gCdPXXjl7Lk" };
      },
      11833: (z) => {
        z.exports = {
          ApprovalRequiredCtn: "_2pKjCSfT0Aa7Wx8_VoNJzc",
          PendingApproval: "_27C9CXtP6vYFYNpAhDJciM",
          Approved: "_2W3o61eSl990XjaneBlzaE",
          PublishWithRestrictions: "_32dufkQ3fNn_8sJusL-nd_",
          Right: "_2lUXdTnEBjAXrbGOs8rZVb",
          Title: "Oc0UNBEG4L2poFTcpQzwx",
          RequireText: "OZlfJDOJer5NjUxcJJf7Z",
        };
      },
      47534: (z) => {
        z.exports = {
          SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
          SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
          SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
          SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
          ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
          AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
        };
      },
      9202: (z) => {
        z.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
          BackgroundAnimation: "Auhol3RHXIE3fQUoyOoWR",
          "ItemFocusAnim-darkerGrey-nocolor": "_2b6SJAbnZzhfHFRjTpAhNy",
          "ItemFocusAnim-darkerGrey": "XywxBIK9eHokhhsZGNBan",
          "ItemFocusAnim-darkGreySettings": "_2kXRPMPgy0P9b0CoapcXw7",
          "ItemFocusAnim-darkGrey": "_3eSI5prhRv2g28mH4BvfI1",
          "ItemFocusAnim-grey": "SwPqPFwuEkTnSchUdaYfU",
          "ItemFocusAnim-translucent-white-10": "oXUFMy_wfkldK82-xV12m",
          "ItemFocusAnim-translucent-white-20": "_3s81IjXe5IWP8-T018RCQq",
          "ItemFocusAnimBorder-darkGrey": "_1Zq30UmvKFxqjOzEaqp0l",
          "ItemFocusAnim-green": "_3G3OfrZkx3Nt3Q_A9oFTkP",
          focusAnimation: "N5bN0xQL6oj7EZSzAeJ-B",
          hoverAnimation: "_2MUmffXlPUO3g7xxum02Qa",
        };
      },
      91640: (z) => {
        z.exports = {
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
          BackgroundAnimation: "_3yBb7Zq-JsZsUC7j0xfwNs",
          "ItemFocusAnim-darkerGrey-nocolor": "_3mEJMPBWqIai6TZ5Asmwzc",
          "ItemFocusAnim-darkerGrey": "_1bq8dQKi1_Y3Cx4SqKPEbe",
          "ItemFocusAnim-darkGreySettings": "_3HZYqGe5_hsFFJcgBTMMSW",
          "ItemFocusAnim-darkGrey": "qqYMXWoOu5it3a3atTegO",
          "ItemFocusAnim-grey": "ULAazkgE1qcpwKYFDQ6cA",
          "ItemFocusAnim-translucent-white-10": "_2_8edxNWb8zuaY6iv3wJSx",
          "ItemFocusAnim-translucent-white-20": "_1TV5evTLXXGDV16o8ltkb7",
          "ItemFocusAnimBorder-darkGrey": "_2N1KfmpWvdxv64J5Rs82CX",
          "ItemFocusAnim-green": "_3UU3hyYWsBPGsxljxX3hbB",
          focusAnimation: "_2u4UlTYeTMTUGVGicBx0My",
          hoverAnimation: "_16_WHz1Oh5Jy0J3qvG4rto",
        };
      },
      16345: (z) => {
        z.exports = {
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
      96715: (z, Et, p) => {
        "use strict";
        p.d(Et, { A: () => e });
        const e =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
    },
  ]);
})();
