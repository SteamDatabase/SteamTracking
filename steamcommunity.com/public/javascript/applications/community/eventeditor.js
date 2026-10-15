/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [46662],
    {
      1470: (Y, Ye, u) => {
        "use strict";
        u.r(Ye), u.d(Ye, { default: () => J_ });
        var e = u(7850),
          S = u(90626),
          se = u(58732),
          M = u(75372),
          we = u(53071),
          G = u(99412),
          ge = u(41735),
          oe = u.n(ge),
          R = u(75844),
          pe = u(17083),
          ee = u(90825),
          V = u(48421),
          X = u(38884),
          k = u(76559),
          J = u(813),
          ae = u(45812),
          p = u(19316),
          ue = u(70747),
          W = u(95695),
          f = u.n(W),
          s = u(18210),
          Pe = u(5065),
          D = u(3166),
          U = u(88003),
          L = u(53107),
          K = u(7582),
          _e = u(77495),
          Se = u(84676),
          Ae = u(43308),
          F = u(2801),
          H = u(85599),
          Ue = u(22880),
          Le = u(92264),
          Re = u(36174),
          Je = u(92451),
          ot = u.n(Je);
        const qe = { include_basic_info: !0 };
        function he(a) {
          const { clanInfo: t, closeModal: n } = a,
            [i] = (0, Se.t7)(t.appid, qe),
            [l, o] = S.useState(!0),
            [r, d] = S.useState(!0),
            m = 1063339200,
            c = K.HD.GetTimeNowWithOverride(),
            [g, _] = S.useState(c - Re.Kp.PerMonth),
            [v, h] = S.useState(c),
            [x, b] = S.useState(-1),
            E = x >= 0;
          return (0, e.jsx)(F.o0, {
            strTitle: (0, s.we)("#EventDashboard_Stats_title"),
            strDescription: (0, s.we)("#EventDashboard_Stats_desc"),
            closeModal: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: E,
            onOK: () =>
              A(t, i, l ? m : g, r ? Number.MAX_SAFE_INTEGER : v, b).then(() =>
                n(),
              ),
            children:
              t.appid && !i
                ? (0, e.jsx)(H.t, {
                    string: (0, s.we)("#Loading"),
                    position: "center",
                    size: "medium",
                  })
                : (0, e.jsxs)("div", {
                    className: ot().DialogCtn,
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
                          (0, e.jsx)(p.Yh, {
                            label: (0, s.we)("#EventDashboard_Stats_Oldest"),
                            onChange: o,
                            checked: l,
                            disabled: E,
                          }),
                          !l &&
                            (0, e.jsxs)("div", {
                              children: [
                                (0, s.we)(
                                  "#EventDashboard_Stats_Oldest_Override",
                                ),
                                (0, e.jsx)(Ae.K, {
                                  nEarliestTime: m,
                                  nLatestTime: r ? void 0 : v,
                                  bShowTimeZone: !0,
                                  fnGetTimeToUpdate: () => g,
                                  fnSetTimeToUpdate: _,
                                  disabled: E,
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
                          (0, e.jsx)(p.Yh, {
                            label: (0, s.we)("#EventDashboard_Stats_Newest"),
                            onChange: d,
                            checked: r,
                            disabled: E,
                          }),
                          !r &&
                            (0, e.jsxs)("div", {
                              children: [
                                (0, s.we)(
                                  "#EventDashboard_Stats_Newest_Override",
                                ),
                                (0, e.jsx)(Ae.K, {
                                  nEarliestTime: l ? m : g,
                                  bShowTimeZone: !0,
                                  fnGetTimeToUpdate: () => v,
                                  fnSetTimeToUpdate: h,
                                  disabled: E,
                                }),
                              ],
                            }),
                        ],
                      }),
                      E &&
                        (0, e.jsx)(H.t, {
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
            r = oe().CancelToken.source();
          let d = 0;
          l(d);
          const m = 100;
          let c = 0,
            g,
            _ = new Array();
          const v = (0, G.sfN)(D.TS.LANGUAGE);
          do
            if (
              ((c += 1),
              (_ = await _e.O3.LoadAdjacentPartnerEvents(
                g,
                a.clanSteamID,
                void 0,
                0,
                m,
                { rtime_oldestevent: n, only_summaries: !0 },
                r,
              )),
              (_ == null ? void 0 : _.length) > 0)
            ) {
              (d += _.length), l(d), (g = _[_.length - 1].GID);
              const h = _.filter(
                (x) => x.startTime <= i && x.BIsVisibleEvent(),
              ).map((x) => x.GID);
              h.length > 0 &&
                (await ae.Uq.LoadStatsForEvents(a.clanSteamID, h, r),
                (d += h.length),
                l(d),
                h.forEach((x) => {
                  const b = ae.Uq.GetStatsFor(a.clanSteamID, x),
                    E = _e.O3.GetClanEventModel(x),
                    y = E.GetStartTimeAndDateUnixSeconds(),
                    P = E.GetEndTimeAndDateUnixSeconds();
                  o.push({
                    appid: a.appid,
                    app_name: (t == null ? void 0 : t.GetName()) || "",
                    event_name: E.GetNameWithFallback(v),
                    event_type: E.GetEventTypeAsString(),
                    event_start_date: (0, s.TW)(y) + " @ " + (0, Le.KC)(y),
                    event_end_date: (0, s.TW)(P) + " @ " + (0, Le.KC)(P),
                    ...b.m_stats,
                    event_gid: "'" + x,
                  });
                }));
            }
          while (_.length == m && c < 100);
          return (
            Ue.g.WriteCSVToFile(
              o,
              "event_stats_" +
                a.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                ".csv",
            ),
            !0
          );
        }
        var Q = u(82734),
          $ = u(11243),
          Oe = u(179),
          Ke = u(61322);
        function tt(a) {
          const {
              summary: t,
              clanSteamID: n,
              bEventIsInModerationQueue: i,
              bIsAllowedInLibrary: l,
              bCompact: o,
            } = a,
            [r] = (0, Oe.QD)("expanded", !1),
            [d, m] = S.useState(!!r || o),
            c = J.ac.GetClanInfoByClanAccountID(n.GetAccountID());
          return (0, e.jsx)(Ke.a, {
            summary: t,
            bCompact: o,
            bExpanded: d,
            bIsAllowedInLibrary: l,
            bEventIsInModerationQueue: i,
            header: o
              ? void 0
              : (0, e.jsxs)("div", {
                  className: Pe.StatsCtnTitle,
                  children: [
                    (0, e.jsxs)("div", {
                      className: Pe.StatTitle,
                      children: [
                        (0, s.we)("#EventDashBoard_SummaryStats_Title"),
                        (0, e.jsx)($.o, {
                          tooltip: (0, s.we)(
                            "#EventDashBoard_SummaryStats_Desc",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: Pe.StatsActionRow,
                      children: [
                        (0, e.jsx)(p.$n, {
                          onClick: (g) =>
                            (0, L.EP)(
                              g,
                              `${D.TS.PARTNER_BASE_URL}/doc/marketing/event_tools/stats`,
                            ),
                          children: (0, s.we)(
                            "#EventDashBoard_SummaryStats_AboutStats",
                          ),
                        }),
                        (0, e.jsx)(p.$n, {
                          onClick: (g) =>
                            (0, U.pg)(
                              (0, e.jsx)(he, { clanInfo: c }),
                              (0, Q.uX)(g),
                            ),
                          children: (0, s.we)(
                            "#EventDashBoard_SummaryStats_Export",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: Pe.StatsActionRow,
                      children: (0, e.jsx)(p.$n, {
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
        var ze = u(96378),
          ve = u(85143),
          Lo = u(81944),
          xa = u(71742),
          Me = u(34592),
          Qa = u(8323),
          j = u(36707),
          ie = u(54963),
          Ya = u(36943),
          No = u(65267),
          ls = u(51648),
          _t = u(18057),
          rs = u(12932),
          aa = u(71684),
          Sn = u(31467),
          Ne = u.n(Sn);
        const Mo = (a) => {
            const { closeModal: t } = a,
              n = (0, No.d)(D.UF.CLANACCOUNTID);
            return (0, e.jsx)(F.o0, {
              strTitle: "Publishing Audit History",
              bAlertDialog: !0,
              onOK: t,
              onCancel: t,
              className: "auditContents",
              strDescription:
                "Here are the publishing audit history. Recorded starting from mid-June 2021",
              children:
                n == null
                  ? (0, e.jsx)(H.t, {
                      string: (0, s.we)("#Loading"),
                      position: "center",
                      size: "medium",
                    })
                  : n.length == 0
                    ? (0, e.jsx)("div", {
                        children: "No Publishing History available",
                      })
                    : n.map((i) =>
                        (0, e.jsx)(Bo, { record: i }, i.clan_event_gid),
                      ),
            });
          },
          Bo = (a) => {
            var t;
            const { record: n } = a,
              i = S.useMemo(() => k.b.InitFromClanID(D.UF.CLANACCOUNTID), []);
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
                  children: ["Type: ", (0, aa.rG)(n.event_type)],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    "Publish Time: ",
                    (0, e.jsx)(_t.K4, {
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
            i = (0, ae.Cl)(t, n.clan_event_gid);
          return (0, e.jsxs)("div", {
            children: [
              i == null &&
                (0, e.jsx)(H.t, {
                  string: "loading",
                  position: "center",
                  size: "medium",
                }),
              i == null &&
                (0, e.jsx)("div", { children: "Failed to load events stats" }),
              !!i &&
                (0, e.jsx)(tt, { summary: i, clanSteamID: t, bCompact: !0 }),
            ],
          });
        }
        var Vt = u(26589),
          lt = u(25817),
          te = u(14947),
          ft = u(26145),
          ds = u(56412),
          cs = u(26251),
          De = u(71421),
          Po = u(20398),
          C = u(55884),
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
          zo = "summary",
          Ho = "body",
          us = "email_headline_",
          hs = "email_body_",
          Vo = "sale_section_label_",
          _s = "sale_section_label_id_",
          ms = "sale_section_subtitle_id_",
          ps = "sale_section_text_id_",
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
          Ds = "sale_section_desc_",
          ys = "sale_section_title_desc_",
          Ts = "broadcast_custom_title",
          Is = "question_",
          As = "answer_",
          Gs = "badgename_",
          Ls = "badgeinitial_",
          Ns = "badgeprogress_",
          Ms = "badgemax_",
          Bs = "quest_close_",
          Os = "quest_open_",
          Ps = "discoqueue_desc_",
          Rs = "socialshare_header_",
          ks = "socialshare_title_",
          Fs = "socialshare_desc_",
          Us = "socialshare_image_",
          zs = "socialshare_imagealttext_",
          Hs = "rewardshelf_itemdef_",
          Vs = "claimitem_button_",
          xn = "disclaimer_name_",
          Ws = "medialayout_item_",
          Qs = "mediacontent_title_",
          Ys = "mediacontent_sutitle_",
          Js = "mediacontent_desc_",
          na = "meetsteam_",
          Ks = na + "title_",
          Ja = na + "desc_",
          Qo = na + "faq_",
          Yo = na + "ia_",
          bn = na + "break_",
          sa = "techspecblock_",
          Zs = "_name_",
          qs = "_desc_",
          jn = "submenu_",
          Xs = "mediacontent_alt_text_",
          $s = "mediacontent_title_alt_text_",
          Cn = "userpoll_",
          wn = "userpoll_option_",
          Dn = "tabs_jumplist_",
          ei = "tabs_tagfilter_name_";
        function ti(a, t, n, i) {
          var l, o, r, d, m;
          let c = new Po.G();
          if (t) {
            let _ = a.GetEventModel();
            for (let v = G.Bhc; v < G.bP9; ++v)
              (a.BHasLanguageTitle(v) || v == G.Bhc) &&
                c.SetLocalization("title", v, a.GetName(v)),
                (_.BHasSubTitle(v) || v == G.Bhc) &&
                  c.SetLocalization("subtitle", v, a.GetSubTitle(v)),
                (a.BHasLanguageDescription(v) || v == G.Bhc) &&
                  c.SetLocalization("body", v, a.GetDescription(v)),
                (_.BHasSummary(v) || v == G.Bhc) &&
                  c.SetLocalization("summary", v, a.GetSummary(v)),
                a.GetEventModel().jsondata.meet_steam_groups &&
                  a.GetEventModel().jsondata.meet_steam_groups.forEach((h) => {
                    h.localized_session_title &&
                      s.NT.Get(h.localized_session_title, v) &&
                      c.SetLocalization(
                        Ks + h.group_id,
                        v,
                        s.NT.Get(h.localized_session_title, v),
                      ),
                      h.localized_session_description &&
                        s.NT.Get(h.localized_session_description, v) &&
                        c.SetLocalization(
                          Ja + h.group_id,
                          v,
                          s.NT.Get(h.localized_session_description, v),
                        ),
                      h.localized_intended_audience &&
                        s.NT.Get(h.localized_intended_audience, v) &&
                        c.SetLocalization(
                          Ja + h.group_id,
                          v,
                          s.NT.Get(h.localized_intended_audience, v),
                        ),
                      h.localized_sesssion_faq &&
                        s.NT.Get(h.localized_sesssion_faq, v) &&
                        c.SetLocalization(
                          Ja + h.group_id,
                          v,
                          s.NT.Get(h.localized_sesssion_faq, v),
                        );
                  }),
                a.GetEventModel().jsondata.meet_steam_schedules &&
                  a
                    .GetEventModel()
                    .jsondata.meet_steam_schedules.forEach((h) => {
                      var x;
                      (x = h == null ? void 0 : h.session_breaks) == null ||
                        x.forEach((b) => {
                          b.localized_break_description &&
                            s.NT.Get(b.localized_break_description, v) &&
                            c.SetLocalization(
                              bn + h.schedule_id + "_" + b.break_id,
                              v,
                              s.NT.Get(b.localized_break_description, v),
                            );
                        });
                    });
          }
          if (n && a.BHasEmailEnabled()) {
            const _ = a.GetEmailSettings();
            if (D.UF.IS_VALVE_GROUP) {
              let v = new ft.WQ(a.GetEmailSettings());
              for (let h = G.Bhc; h < G.bP9; ++h)
                v.BHasLocalizedSubject(h) &&
                  c.SetLocalization(vs, h, v.GetLocalizedSubject(h));
            }
            _.sections.forEach((v, h) => {
              let x = new ft.JW(v);
              for (let b = G.Bhc; b < G.bP9; ++b)
                x.BHasHeadlineInLanguage(b) &&
                  c.SetLocalization(us + h, b, x.GetHeadline(b)),
                  x.BHasBodyInLanguage(b) &&
                    c.SetLocalization(hs + h, b, x.GetBody(b));
            });
          }
          const g = a.GetEventModel().jsondata;
          if (
            g != null &&
            g.bBroadcastEnabled &&
            ((l = g == null ? void 0 : g.localized_broadcast_title) == null
              ? void 0
              : l.length) > 0
          ) {
            for (let _ = G.Bhc; _ < G.bP9; ++_)
              if (s.NT.Get(g.localized_broadcast_title, _)) {
                const v = g.localized_broadcast_title[_];
                c.SetLocalization(Ts, _, v);
              }
          }
          if (
            (t &&
              ((o = g.user_polls) == null ? void 0 : o.length) > 0 &&
              g.user_polls.forEach((_) => {
                var v;
                for (let h = G.Bhc; h < G.bP9; ++h)
                  _.localized_poll_description &&
                    s.NT.Get(_.localized_poll_description, h) &&
                    c.SetLocalization(
                      Cn + _.poll_id,
                      h,
                      _.localized_poll_description[h],
                    ),
                    (v = _ == null ? void 0 : _.options) == null ||
                      v.forEach((x) => {
                        x.localized_option &&
                          s.NT.Get(x.localized_option, h) &&
                          c.SetLocalization(
                            wn + x.option_id,
                            h,
                            x.localized_option[h],
                          );
                      });
              }),
            i && a.BHasSaleEnabled())
          ) {
            if (
              (r = g == null ? void 0 : g.sale_presenters) != null &&
              r.length
            )
              for (let _ = G.Bhc; _ < G.bP9; ++_)
                g.sale_presenters.forEach((v) => {
                  if (s.NT.Get(v.localized_presenter_name, _)) {
                    const h = v.localized_presenter_name[_];
                    c.SetLocalization(xn + v.unique_id, _, h);
                  }
                });
            ((m = (d = g.sale_sub_menu) == null ? void 0 : d.menu_items) == null
              ? void 0
              : m.length) > 0 &&
              g.sale_sub_menu.menu_items
                .filter((_) => {
                  var v;
                  return (
                    ((v = _.localized_sub_menu_name) == null
                      ? void 0
                      : v.length) > 0
                  );
                })
                .map((_) => {
                  for (let v = G.Bhc; v < G.bP9; ++v)
                    _.localized_sub_menu_name &&
                      s.NT.Get(_.localized_sub_menu_name, v) &&
                      c.SetLocalization(
                        jn + _.unique_id,
                        v,
                        _.localized_sub_menu_name[v],
                      );
                }),
              a
                .GetSaleSections()
                .filter((_) => !_.disable_localization)
                .forEach((_) => {
                  var v,
                    h,
                    x,
                    b,
                    E,
                    y,
                    P,
                    N,
                    q,
                    le,
                    fe,
                    me,
                    $e,
                    ht,
                    et,
                    vt,
                    Qe,
                    Ot,
                    jt,
                    nt,
                    zt,
                    Tt;
                  const gt = a.GetSaleSectionIndexByID(_.unique_id, !1);
                  for (let T = G.Bhc; T < G.bP9; ++T) {
                    if (
                      (a.BHasSaleSectionLabelLocalization(T, gt) &&
                        c.SetLocalization(
                          _s + _.unique_id,
                          T,
                          _.localized_label[T],
                        ),
                      a.BHasSaleSectionSubtitleLocalization(T, gt) &&
                        c.SetLocalization(
                          ms + _.unique_id,
                          T,
                          _.localized_subtitle[T],
                        ),
                      a.BHasSaleSectionTextLocalizationForLang(T, gt) &&
                        c.SetLocalization(
                          ps + _.unique_id,
                          T,
                          _.text_section_contents[T],
                        ),
                      a.BHasSaleSectionDescriptionBBCode(T, gt) &&
                        c.SetLocalization(
                          Ds + _.unique_id,
                          T,
                          _.localized_description[T],
                        ),
                      a.BHasSaleSectionInnerTitle(T, gt) &&
                        c.SetLocalization(
                          ys + _.unique_id,
                          T,
                          _.localized_title[T],
                        ),
                      _.section_type === "tabs" && _.tabs)
                    )
                      for (let I of _.tabs)
                        a.BHasSaleSectionTabName(T, I) &&
                          c.SetLocalization(
                            gs + _.unique_id + "_" + I.unique_id,
                            T,
                            I.localized_label[T],
                          ),
                          I.tab_jump_list &&
                            I.tab_jump_list.menu_items &&
                            I.tab_jump_list.menu_items.length > 0 &&
                            I.tab_jump_list.menu_items
                              .filter((ne) => {
                                var Ce;
                                return (
                                  ((Ce = ne.localized_sub_menu_name) == null
                                    ? void 0
                                    : Ce.length) > 0
                                );
                              })
                              .map((ne) => {
                                for (let Ce = G.Bhc; Ce < G.bP9; ++Ce)
                                  ne.localized_sub_menu_name &&
                                    s.NT.Get(ne.localized_sub_menu_name, Ce) &&
                                    c.SetLocalization(
                                      Dn + I.unique_id + "_" + ne.unique_id,
                                      Ce,
                                      ne.localized_sub_menu_name[Ce],
                                    );
                              }),
                          ai(
                            c,
                            T,
                            ei + I.unique_id + "_",
                            (v = I.tab_tag_filter) == null ? void 0 : v.rgNodes,
                          );
                    if (
                      (_.enable_faceted_browsing &&
                        (_.facets.forEach((I) => {
                          a.BHasSaleSectionFacetName(T, I) &&
                            c.SetLocalization(
                              Ss + _.unique_id + "_" + I.unique_id,
                              T,
                              I.name[T],
                            );
                        }),
                        _.facets.forEach((I) => {
                          I.facetValues.forEach((ne) => {
                            a.BHasSaleSectionFacetValueName(T, ne) &&
                              c.SetLocalization(
                                Es +
                                  _.unique_id +
                                  "_" +
                                  I.unique_id +
                                  "_" +
                                  ne.unique_id,
                                T,
                                ne.name[T],
                              ),
                              a.BHasSaleSectionFacetValueSubtitle(T, ne) &&
                                c.SetLocalization(
                                  fs +
                                    _.unique_id +
                                    "_" +
                                    I.unique_id +
                                    "_" +
                                    ne.unique_id,
                                  T,
                                  ne.subtitle[T],
                                );
                          });
                        })),
                      _.section_type == "vo_internal" &&
                        ((h = _.internal_section_data) == null
                          ? void 0
                          : h.internal_type) == "reservation_widget" &&
                        (((x = _.internal_section_data.reservation_options) ==
                        null
                          ? void 0
                          : x.length) > 0 ||
                          _.internal_section_data.reservation_layout) &&
                        ((b = _.internal_section_data.reservation_options) ==
                          null ||
                          b.forEach((I) => {
                            I.localized_reservation_desc &&
                              s.NT.Get(I.localized_reservation_desc, T) &&
                              c.SetLocalization(
                                xs + _.unique_id + "_" + I.unique_id,
                                T,
                                I.localized_reservation_desc[T],
                              ),
                              I.callout &&
                                I.callout.localized_callout &&
                                s.NT.Get(I.callout.localized_callout, T) &&
                                c.SetLocalization(
                                  Cs + _.unique_id + "_" + I.unique_id,
                                  T,
                                  I.callout.localized_callout[T],
                                ),
                              I.localized_out_of_stock_override &&
                                s.NT.Get(
                                  I.localized_out_of_stock_override,
                                  T,
                                ) &&
                                c.SetLocalization(
                                  bs + _.unique_id + "_" + I.unique_id,
                                  T,
                                  I.localized_out_of_stock_override[T],
                                ),
                              I.localized_delivery_override_desc &&
                                s.NT.Get(
                                  I.localized_delivery_override_desc,
                                  T,
                                ) &&
                                c.SetLocalization(
                                  js + _.unique_id + "_" + I.unique_id,
                                  T,
                                  I.localized_delivery_override_desc[T],
                                );
                          }),
                        (y =
                          (E = _.internal_section_data.reservation_layout) ==
                          null
                            ? void 0
                            : E.product_configs) == null ||
                          y.forEach((I) => {
                            var ne;
                            I.localized_product_config_title &&
                              s.NT.Get(I.localized_product_config_title, T) &&
                              c.SetLocalization(
                                fn + _.unique_id + "_" + I.unique_id,
                                T,
                                I.localized_product_config_title[T],
                              ),
                              (ne = I.variations) == null ||
                                ne.forEach((Ce) => {
                                  Ce.localized_variation_name &&
                                    s.NT.Get(Ce.localized_variation_name, T) &&
                                    c.SetLocalization(
                                      Wo +
                                        _.unique_id +
                                        "_" +
                                        I.unique_id +
                                        "_" +
                                        Ce.unique_id,
                                      T,
                                      Ce.localized_variation_name[T],
                                    );
                                });
                          })),
                      _.section_type == "vo_internal" &&
                        ((P = _.internal_section_data) == null
                          ? void 0
                          : P.internal_type) == "while_supplies_last" &&
                        ((N =
                          _.internal_section_data.while_supplies_last_option) ==
                        null
                          ? void 0
                          : N.length) > 0 &&
                        _.internal_section_data.while_supplies_last_option.forEach(
                          (I) => {
                            I.localized_supply_desc &&
                              s.NT.Get(I.localized_supply_desc, T) &&
                              c.SetLocalization(
                                ws + _.unique_id + "_" + I.unique_id,
                                T,
                                I.localized_supply_desc[T],
                              );
                          },
                        ),
                      (_.section_type == "quiz" ||
                        _.section_type == "template_faq") &&
                        ((le = (q = _.quiz) == null ? void 0 : q.questions) ==
                        null
                          ? void 0
                          : le.length) > 0 &&
                        ((fe = _.quiz) == null ||
                          fe.questions.forEach((I) => {
                            I.localized_question &&
                              s.NT.Get(I.localized_question, T) &&
                              c.SetLocalization(
                                Is + _.unique_id + "_" + I.unique_id,
                                T,
                                I.localized_question[T],
                              ),
                              I != null &&
                                I.answers &&
                                I.answers.forEach((ne) => {
                                  ne.localized_answer &&
                                    s.NT.Get(ne.localized_answer, T) &&
                                    c.SetLocalization(
                                      As + _.unique_id + "_" + ne.unique_id,
                                      T,
                                      ne.localized_answer[T],
                                    );
                                });
                          })),
                      _.section_type == "template_techspec" &&
                        (($e =
                          (me = _.tech_specs) == null
                            ? void 0
                            : me.tech_spec_block_list) == null
                          ? void 0
                          : $e.length) > 0 &&
                        ((ht = _.tech_specs) == null ||
                          ht.tech_spec_block_list.forEach((I) => {
                            I.localized_block_title &&
                              s.NT.Get(I.localized_block_title, T) &&
                              c.SetLocalization(
                                sa + _.unique_id + "_" + I.unique_id,
                                T,
                                I.localized_block_title[T],
                              ),
                              I != null &&
                                I.spec_list &&
                                I.spec_list.forEach((ne) => {
                                  if (
                                    ne.localized_spec_name &&
                                    s.NT.Get(ne.localized_spec_name, T)
                                  ) {
                                    const Ce =
                                      sa + _.unique_id + Zs + ne.unique_id;
                                    c.SetLocalization(
                                      Ce,
                                      T,
                                      ne.localized_spec_name[T],
                                    );
                                  }
                                  if (
                                    ne.localized_spec_description &&
                                    s.NT.Get(ne.localized_spec_description, T)
                                  ) {
                                    const Ce =
                                      sa + _.unique_id + qs + ne.unique_id;
                                    c.SetLocalization(
                                      Ce,
                                      T,
                                      ne.localized_spec_description[T].replace(
                                        /\n/g,
                                        "<br />",
                                      ),
                                    );
                                  }
                                });
                          })),
                      _.section_type == "badge_progress" && _.badge_progress)
                    ) {
                      const I = _.badge_progress;
                      I.localized_name &&
                        s.NT.Get(I.localized_name, T) &&
                        c.SetLocalization(
                          Gs + _.unique_id,
                          T,
                          I.localized_name[T],
                        ),
                        I.localized_initial_description &&
                          s.NT.Get(I.localized_initial_description, T) &&
                          c.SetLocalization(
                            Ls + _.unique_id,
                            T,
                            I.localized_initial_description[T],
                          ),
                        I.localized_progress_description &&
                          s.NT.Get(I.localized_progress_description, T) &&
                          c.SetLocalization(
                            Ns + _.unique_id,
                            T,
                            I.localized_progress_description[T],
                          ),
                        I.localized_maxtier_description &&
                          s.NT.Get(I.localized_maxtier_description, T) &&
                          c.SetLocalization(
                            Ms + _.unique_id,
                            T,
                            I.localized_maxtier_description[T],
                          );
                    }
                    _.section_type == "quest" &&
                      ((vt = (et = _.quest) == null ? void 0 : et.door_info) ==
                      null
                        ? void 0
                        : vt.length) > 0 &&
                      _.quest.door_info.forEach((I) => {
                        I.localized_open_door_description &&
                          s.NT.Get(I.localized_open_door_description, T) &&
                          c.SetLocalization(
                            Bs + _.unique_id + "_" + I.unique_id,
                            T,
                            I.localized_open_door_description[T],
                          ),
                          I.localized_closed_door_description &&
                            s.NT.Get(I.localized_closed_door_description, T) &&
                            c.SetLocalization(
                              Os + _.unique_id + "_" + I.unique_id,
                              T,
                              I.localized_closed_door_description[T],
                            );
                      }),
                      _.section_type == "rewards" &&
                        ((Ot =
                          (Qe = _.rewards) == null
                            ? void 0
                            : Qe.reward_items) == null
                          ? void 0
                          : Ot.length) > 0 &&
                        _.rewards.reward_items.forEach((I) => {
                          I.localized_reward_description &&
                            s.NT.Get(I.localized_reward_description, T) &&
                            c.SetLocalization(
                              Hs +
                                _.unique_id +
                                "_" +
                                I.virtual_item_reward_def_id,
                              T,
                              I.localized_reward_description[T],
                            );
                        }),
                      _.section_type == "claim_item" &&
                        ((nt =
                          (jt = _.claim_item_section_data) == null
                            ? void 0
                            : jt.localized_claim_button) == null
                          ? void 0
                          : nt.length) > 0 &&
                        _.claim_item_section_data.localized_claim_button &&
                        s.NT.Get(
                          _.claim_item_section_data.localized_claim_button,
                          T,
                        ) &&
                        c.SetLocalization(
                          Vs + _.unique_id,
                          T,
                          _.claim_item_section_data.localized_claim_button[T],
                        ),
                      _.section_type == "discoveryqueue" &&
                        _.discovery_queue_localized_desc &&
                        s.NT.Get(_.discovery_queue_localized_desc, T) &&
                        c.SetLocalization(
                          Ps + _.unique_id,
                          T,
                          _.discovery_queue_localized_desc[T],
                        ),
                      _.section_type == "social_share" &&
                        _.social_share.content_options.forEach((I) => {
                          const ne = I.localized_option_fields;
                          ne.localized_header &&
                            s.NT.Get(ne.localized_header, T) &&
                            c.SetLocalization(
                              Rs + _.unique_id + "_" + I.unique_id,
                              T,
                              ne.localized_header[T],
                            ),
                            ne.title &&
                              s.NT.Get(ne.title, T) &&
                              c.SetLocalization(
                                ks + _.unique_id + "_" + I.unique_id,
                                T,
                                ne.title[T],
                              ),
                            ne.description &&
                              s.NT.Get(ne.description, T) &&
                              c.SetLocalization(
                                Fs + _.unique_id + "_" + I.unique_id,
                                T,
                                ne.description[T],
                              ),
                            ne.image &&
                              s.NT.Get(ne.image, T) &&
                              c.SetLocalization(
                                Us + _.unique_id + "_" + I.unique_id,
                                T,
                                ne.image[T],
                              ),
                            ne.twitter_alt_text &&
                              s.NT.Get(ne.twitter_alt_text, T) &&
                              c.SetLocalization(
                                zs + _.unique_id + "_" + I.unique_id,
                                T,
                                ne.twitter_alt_text[T],
                              );
                        }),
                      _.section_type == "media_layout" &&
                        _.media_layout.media_content.forEach((I, ne) => {
                          const Ce = I.localized_media_desc;
                          Ce &&
                            s.NT.Get(Ce, T) &&
                            c.SetLocalization(
                              Ws + _.unique_id + "_" + ne,
                              T,
                              Ce[T],
                            );
                        }),
                      _.section_type == "template_media_content" &&
                        ((Tt =
                          (zt = _.media_container) == null
                            ? void 0
                            : zt.media_rows) == null ||
                          Tt.forEach((I, ne) => {
                            var Ce;
                            (Ce = I == null ? void 0 : I.media_columns) ==
                              null ||
                              Ce.forEach((xe) => {
                                ia(c, T, _.unique_id + "_" + xe.unique_id, xe),
                                  xe.mobile_content_varient &&
                                    ia(
                                      c,
                                      T,
                                      _.unique_id +
                                        "_" +
                                        xe.unique_id +
                                        "_mobile",
                                      xe.mobile_content_varient,
                                    ),
                                  xe.tablet_content_varient &&
                                    ia(
                                      c,
                                      T,
                                      _.unique_id +
                                        "_" +
                                        xe.unique_id +
                                        "_tablet",
                                      xe.tablet_content_varient,
                                    );
                              });
                          })),
                      _.section_type == "template_media_overlay" &&
                        _.media_overlay &&
                        (ia(c, T, _.unique_id + "_overlay", _.media_overlay),
                        _.media_overlay_mobile_content_varient &&
                          ia(
                            c,
                            T,
                            _.unique_id + "_overlay_mobile",
                            _.media_overlay_mobile_content_varient,
                          ),
                        _.media_overlay_tablet_content_varient &&
                          ia(
                            c,
                            T,
                            _.unique_id + "_overlay_tablet",
                            _.media_overlay_tablet_content_varient,
                          ));
                  }
                });
          }
          return c;
        }
        function ia(a, t, n, i) {
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
            (0, te.h5)(() => {
              n.forEach((o) => {
                let r = !1;
                l.forEach((d) => {
                  var m, c, g, _, v;
                  const h = t.GetLocalization(d, o) || "";
                  if (
                    (d === Fo &&
                      (h || a.BHasLanguageTitle(o)) &&
                      a.SetName(o, h) &&
                      (r = !0),
                    d === Ho &&
                      (h || a.BHasLanguageDescription(o)) &&
                      a.SetDescription(o, h) &&
                      (r = !0),
                    d === Uo &&
                      (h || a.BHasLanguageSubTitle(o)) &&
                      a.SetSubTitle(o, h) &&
                      (r = !0),
                    d === zo &&
                      (h || a.BHasLanguageSummary(o)) &&
                      a.SetSummary(o, h) &&
                      (r = !0),
                    d === Ts)
                  ) {
                    const x = a.GetEventModel().jsondata;
                    (h ||
                      (x.localized_broadcast_title &&
                        s.NT.Get(x.localized_broadcast_title, o))) &&
                      s.NT.Get(x.localized_broadcast_title, o) !== h &&
                      ((x.localized_broadcast_title = s.NT.Set(
                        x.localized_broadcast_title || [],
                        o,
                        h,
                      )),
                      a.SetDirty(C.IQ.jsondata_sales),
                      (r = !0));
                  }
                  if (d.startsWith(Cn)) {
                    const x = a.GetEventModel().jsondata;
                    (m = x == null ? void 0 : x.user_polls) == null ||
                      m.forEach((b) => {
                        var E;
                        d.startsWith(wn)
                          ? (E = b.options) == null ||
                            E.forEach((y) => {
                              d == wn + y.option_id &&
                                (h ||
                                  (y.localized_option &&
                                    s.NT.Get(y.localized_option, o))) &&
                                s.NT.Get(y.localized_option, o) !== h &&
                                ((y.localized_option = s.NT.Set(
                                  y.localized_option || [],
                                  o,
                                  h,
                                )),
                                a.SetDirty(C.IQ.description),
                                (r = !0));
                            })
                          : d == Cn + b.poll_id &&
                            (h ||
                              (b.localized_poll_description &&
                                s.NT.Get(b.localized_poll_description, o))) &&
                            s.NT.Get(b.localized_poll_description, o) !== h &&
                            ((b.localized_poll_description = s.NT.Set(
                              b.localized_poll_description || [],
                              o,
                              h,
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
                        let E = 0;
                        E <
                        ((c = b == null ? void 0 : b.session_breaks) == null
                          ? void 0
                          : c.length);
                        ++E
                      ) {
                        const y = b.session_breaks[E];
                        if (d == bn + b.schedule_id + "_" + y.break_id) {
                          (h || s.NT.Get(y.localized_break_description, o)) &&
                            s.NT.Get(y.localized_break_description, o) !== h &&
                            ((y.localized_break_description = s.NT.Set(
                              y.localized_break_description || [],
                              o,
                              h,
                            )),
                            a.SetDirty(C.IQ.description),
                            (r = !0));
                          break;
                        }
                      }
                    }
                  if (
                    d.startsWith(na) &&
                    a.GetEventModel().jsondata.meet_steam_groups
                  )
                    for (
                      let x = 0;
                      x < a.GetEventModel().jsondata.meet_steam_groups.length;
                      ++x
                    ) {
                      const b = a.GetEventModel().jsondata.meet_steam_groups[x];
                      if (d == Ks + b.group_id) {
                        (h || s.NT.Get(b.localized_session_title, o)) &&
                          s.NT.Get(b.localized_session_title, o) !== h &&
                          ((b.localized_session_title = s.NT.Set(
                            b.localized_session_title || [],
                            o,
                            h,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (d == Ja + b.group_id) {
                        (h || s.NT.Get(b.localized_session_description, o)) &&
                          s.NT.Get(b.localized_session_description, o) !== h &&
                          ((b.localized_session_description = s.NT.Set(
                            b.localized_session_description || [],
                            o,
                            h,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (d == Qo + b.group_id) {
                        (h || s.NT.Get(b.localized_sesssion_faq, o)) &&
                          s.NT.Get(b.localized_sesssion_faq, o) !== h &&
                          ((b.localized_sesssion_faq = s.NT.Set(
                            b.localized_sesssion_faq || [],
                            o,
                            h,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (d == Yo + b.group_id) {
                        (h || s.NT.Get(b.localized_intended_audience, o)) &&
                          s.NT.Get(b.localized_intended_audience, o) !== h &&
                          ((b.localized_intended_audience = s.NT.Set(
                            b.localized_intended_audience || [],
                            o,
                            h,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                    }
                  if (a.BHasEmailEnabled()) {
                    let x = a.GetEmailSettings();
                    if (D.UF.IS_VALVE_GROUP && d === vs) {
                      let b = new lt.pC(a);
                      (h || b.BHasLocalizedSubject(o)) &&
                        b.SetLocalizedSubject(o, h) &&
                        (r = !0);
                    }
                    x.sections.forEach((b, E) => {
                      let y = new lt.e$(b, a);
                      y.BHasHeadline() &&
                        d === us + E &&
                        (h || y.BHasHeadlineInLanguage(o)) &&
                        y.SetHeadline(h, o) &&
                        (r = !0),
                        y.BHasBody() &&
                          d === hs + E &&
                          (h || y.BHasBodyInLanguage(o)) &&
                          y.SetBody(h, o) &&
                          (r = !0);
                    });
                  }
                  if (a.BHasSaleEnabled()) {
                    const x = a.GetEventModel().jsondata;
                    (g = x == null ? void 0 : x.sale_presenters) != null &&
                      g.length &&
                      x.sale_presenters.forEach((E) => {
                        if (d === xn + E.unique_id) {
                          (h || s.NT.Get(E.localized_presenter_name, o)) &&
                            s.NT.Get(E.localized_presenter_name, o) != h &&
                            ((E.localized_presenter_name = s.NT.Set(
                              E.localized_presenter_name || [],
                              o,
                              h,
                            )),
                            a.SetDirty(C.IQ.jsondata_sales),
                            (r = !0));
                          const y = E.localized_presenter_name[o];
                          t.SetLocalization(xn + E.unique_id, o, y);
                        }
                      }),
                      ((v =
                        (_ = x.sale_sub_menu) == null
                          ? void 0
                          : _.menu_items) == null
                        ? void 0
                        : v.length) > 0 &&
                        x.sale_sub_menu.menu_items
                          .filter((E) => {
                            var y;
                            return (
                              ((y = E.localized_sub_menu_name) == null
                                ? void 0
                                : y.length) > 0
                            );
                          })
                          .map((E) => {
                            if (d === jn + E.unique_id) {
                              (h || s.NT.Get(E.localized_sub_menu_name, o)) &&
                                s.NT.Get(E.localized_sub_menu_name, o) != h &&
                                ((E.localized_sub_menu_name = s.NT.Set(
                                  E.localized_sub_menu_name || [],
                                  o,
                                  h,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0));
                              const y = E.localized_sub_menu_name[o];
                              t.SetLocalization(jn + E.unique_id, o, y);
                            }
                          }),
                      a
                        .GetSaleSections()
                        .filter((E) => !E.disable_localization)
                        .forEach((E) => {
                          var y,
                            P,
                            N,
                            q,
                            le,
                            fe,
                            me,
                            $e,
                            ht,
                            et,
                            vt,
                            Qe,
                            Ot,
                            jt,
                            nt,
                            zt,
                            Tt,
                            gt,
                            T,
                            I,
                            ne,
                            Ce,
                            xe,
                            st,
                            Ct;
                          const Ve = a.GetSaleSectionIndexByID(E.unique_id, !1);
                          if (
                            ((d === Vo + Ve || d === _s + E.unique_id) &&
                              (h ||
                                a.BHasSaleSectionLabelLocalization(o, Ve)) &&
                              a.SetSaleSectionLabelLocalization(o, Ve, h) &&
                              (r = !0),
                            d === ms + E.unique_id &&
                              (h ||
                                a.BHasSaleSectionSubtitleLocalization(o, Ve)) &&
                              a.SetSaleSectionSubtitleLocalization(o, Ve, h) &&
                              (r = !0),
                            d === Ds + E.unique_id &&
                              (h ||
                                a.BHasSaleSectionDescriptionBBCode(o, Ve)) &&
                              a.SetSaleSectionDescriptionBBCode(o, Ve, h) &&
                              (r = !0),
                            d === ys + E.unique_id &&
                              (h || a.BHasSaleSectionInnerTitle(o, Ve)) &&
                              a.SetSaleSectionInnerTitle(o, Ve, h) &&
                              (r = !0),
                            E.section_type === "tabs" && E.tabs)
                          )
                            for (const w of E.tabs)
                              d === gs + E.unique_id + "_" + w.unique_id &&
                                (h || a.BHasSaleSectionTabName(o, w)) &&
                                a.SetSaleSectionTabName(o, w, h) &&
                                (r = !0),
                                ((P =
                                  (y = w.tab_jump_list) == null
                                    ? void 0
                                    : y.menu_items) == null
                                  ? void 0
                                  : P.length) > 0 &&
                                  x.sale_sub_menu.menu_items
                                    .filter((O) => {
                                      var Z;
                                      return (
                                        ((Z = O.localized_sub_menu_name) == null
                                          ? void 0
                                          : Z.length) > 0
                                      );
                                    })
                                    .map((O) => {
                                      if (
                                        d ===
                                        Dn + w.unique_id + "_" + O.unique_id
                                      ) {
                                        (h ||
                                          s.NT.Get(
                                            O.localized_sub_menu_name,
                                            o,
                                          )) &&
                                          s.NT.Get(
                                            O.localized_sub_menu_name,
                                            o,
                                          ) != h &&
                                          ((O.localized_sub_menu_name =
                                            s.NT.Set(
                                              O.localized_sub_menu_name || [],
                                              o,
                                              h,
                                            )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                        const Z = O.localized_sub_menu_name[o];
                                        t.SetLocalization(
                                          Dn + w.unique_id + "_" + O.unique_id,
                                          o,
                                          Z,
                                        );
                                      }
                                    }),
                                si(
                                  a,
                                  d,
                                  h,
                                  o,
                                  ei + w.unique_id + "_",
                                  (N = w.tab_tag_filter) == null
                                    ? void 0
                                    : N.rgNodes,
                                ) && (r = !0);
                          if (
                            (a.BHasSaleSectionTextLocalization(Ve) &&
                              d === ps + E.unique_id &&
                              (h ||
                                a.BHasSaleSectionTextLocalizationForLang(
                                  o,
                                  Ve,
                                )) &&
                              a.SetSaleSectionTextLocalization(o, Ve, h) &&
                              (r = !0),
                            E.enable_faceted_browsing &&
                              E.facets.forEach((w) => {
                                d === Ss + E.unique_id + "_" + w.unique_id &&
                                  (h || a.BHasSaleSectionFacetName(o, w)) &&
                                  a.SetSaleSectionFacetName(o, w, h) &&
                                  (r = !0),
                                  w.facetValues.forEach((O) => {
                                    d ===
                                      Es +
                                        E.unique_id +
                                        "_" +
                                        w.unique_id +
                                        "_" +
                                        O.unique_id &&
                                      (h ||
                                        a.BHasSaleSectionFacetValueName(
                                          o,
                                          O,
                                        )) &&
                                      a.SetSaleSectionFacetValueName(o, O, h) &&
                                      (r = !0),
                                      d ===
                                        fs +
                                          E.unique_id +
                                          "_" +
                                          w.unique_id +
                                          "_" +
                                          O.unique_id &&
                                        (h ||
                                          a.BHasSaleSectionFacetValueSubtitle(
                                            o,
                                            O,
                                          )) &&
                                        a.SetSaleSectionFacetValueSubtitle(
                                          o,
                                          O,
                                          h,
                                        ) &&
                                        (r = !0);
                                  });
                              }),
                            E.section_type == "vo_internal" &&
                              ((q = E.internal_section_data) == null
                                ? void 0
                                : q.internal_type) == "reservation_widget" &&
                              (((le =
                                E.internal_section_data.reservation_options) ==
                              null
                                ? void 0
                                : le.length) > 0 ||
                                E.internal_section_data.reservation_layout) &&
                              ((fe =
                                E.internal_section_data.reservation_options) ==
                                null ||
                                fe.forEach((w) => {
                                  d === xs + E.unique_id + "_" + w.unique_id &&
                                    (h ||
                                      (w.localized_reservation_desc &&
                                        s.NT.Get(
                                          w.localized_reservation_desc,
                                          o,
                                        ))) &&
                                    s.NT.Get(
                                      w.localized_reservation_desc,
                                      o,
                                    ) !== h &&
                                    ((w.localized_reservation_desc = s.NT.Set(
                                      w.localized_reservation_desc || [],
                                      o,
                                      h,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0)),
                                    d ===
                                      Cs + E.unique_id + "_" + w.unique_id &&
                                      (h && !w.callout && (w.callout = {}),
                                      (h ||
                                        (w.callout.localized_callout &&
                                          s.NT.Get(
                                            w.callout.localized_callout,
                                            o,
                                          ))) &&
                                        s.NT.Get(
                                          w.callout.localized_callout,
                                          o,
                                        ) !== h &&
                                        ((w.callout.localized_callout =
                                          s.NT.Set(
                                            w.callout.localized_callout || [],
                                            o,
                                            h,
                                          )),
                                        a.SetDirty(C.IQ.jsondata_sales),
                                        (r = !0))),
                                    d ===
                                      bs + E.unique_id + "_" + w.unique_id &&
                                      (h ||
                                        (w.localized_out_of_stock_override &&
                                          s.NT.Get(
                                            w.localized_out_of_stock_override,
                                            o,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_out_of_stock_override,
                                        o,
                                      ) !== h &&
                                      ((w.localized_out_of_stock_override =
                                        s.NT.Set(
                                          w.localized_out_of_stock_override ||
                                            [],
                                          o,
                                          h,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      js + E.unique_id + "_" + w.unique_id &&
                                      (h ||
                                        (w.localized_delivery_override_desc &&
                                          s.NT.Get(
                                            w.localized_delivery_override_desc,
                                            o,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_delivery_override_desc,
                                        o,
                                      ) !== h &&
                                      ((w.localized_delivery_override_desc =
                                        s.NT.Set(
                                          w.localized_delivery_override_desc ||
                                            [],
                                          o,
                                          h,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0));
                                }),
                              ($e =
                                (me =
                                  E.internal_section_data.reservation_layout) ==
                                null
                                  ? void 0
                                  : me.product_configs) == null ||
                                $e.forEach((w) => {
                                  var O;
                                  d === fn + E.unique_id + "_" + w.unique_id &&
                                    (h ||
                                      (w.localized_product_config_title &&
                                        s.NT.Get(
                                          w.localized_product_config_title,
                                          o,
                                        ))) &&
                                    s.NT.Get(
                                      w.localized_product_config_title,
                                      o,
                                    ) !== h &&
                                    ((w.localized_product_config_title =
                                      s.NT.Set(
                                        w.localized_product_config_title || [],
                                        o,
                                        h,
                                      )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0)),
                                    (O = w.variations) == null ||
                                      O.forEach((Z) => {
                                        d ===
                                          fn +
                                            E.unique_id +
                                            "_" +
                                            w.unique_id +
                                            "_" +
                                            Z.unique_id &&
                                          (h ||
                                            (Z.localized_variation_name &&
                                              s.NT.Get(
                                                Z.localized_variation_name,
                                                o,
                                              ))) &&
                                          s.NT.Get(
                                            Z.localized_variation_name,
                                            o,
                                          ) !== h &&
                                          ((Z.localized_variation_name =
                                            s.NT.Set(
                                              Z.localized_variation_name || [],
                                              o,
                                              h,
                                            )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                      });
                                })),
                            E.section_type == "vo_internal" &&
                              ((ht = E.internal_section_data) == null
                                ? void 0
                                : ht.internal_type) == "while_supplies_last" &&
                              ((et =
                                E.internal_section_data
                                  .while_supplies_last_option) == null
                                ? void 0
                                : et.length) > 0 &&
                              E.internal_section_data.while_supplies_last_option.forEach(
                                (w) => {
                                  d === ws + E.unique_id + "_" + w.unique_id &&
                                    (h ||
                                      (w.localized_supply_desc &&
                                        s.NT.Get(
                                          w.localized_supply_desc,
                                          o,
                                        ))) &&
                                    s.NT.Get(w.localized_supply_desc, o) !==
                                      h &&
                                    ((w.localized_supply_desc = s.NT.Set(
                                      w.localized_supply_desc || [],
                                      o,
                                      h,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0));
                                },
                              ),
                            ((Qe =
                              (vt = E.quiz) == null ? void 0 : vt.questions) ==
                            null
                              ? void 0
                              : Qe.length) > 0 &&
                              ((Ot = E.quiz) == null ||
                                Ot.questions.forEach((w) => {
                                  var O;
                                  d === Is + E.unique_id + "_" + w.unique_id
                                    ? (h ||
                                        (w.localized_question &&
                                          s.NT.Get(w.localized_question, o))) &&
                                      s.NT.Get(w.localized_question, o) !== h &&
                                      ((w.localized_question = s.NT.Set(
                                        w.localized_question || [],
                                        o,
                                        h,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0))
                                    : ((O = w.answers) == null
                                        ? void 0
                                        : O.length) > 0 &&
                                      w.answers.forEach((Z) => {
                                        d ===
                                          As +
                                            E.unique_id +
                                            "_" +
                                            Z.unique_id &&
                                          (h ||
                                            (Z.localized_answer &&
                                              s.NT.Get(
                                                Z.localized_answer,
                                                o,
                                              ))) &&
                                          s.NT.Get(Z.localized_answer, o) !==
                                            h &&
                                          ((Z.localized_answer = s.NT.Set(
                                            Z.localized_answer || [],
                                            o,
                                            h,
                                          )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                      });
                                })),
                            ((nt =
                              (jt = E.tech_specs) == null
                                ? void 0
                                : jt.tech_spec_block_list) == null
                              ? void 0
                              : nt.length) > 0 &&
                              E.tech_specs.tech_spec_block_list.forEach((w) => {
                                var O;
                                d === sa + E.unique_id + "_" + w.unique_id
                                  ? (h ||
                                      (w.localized_block_title &&
                                        s.NT.Get(
                                          w.localized_block_title,
                                          o,
                                        ))) &&
                                    s.NT.Get(w.localized_block_title, o) !==
                                      h &&
                                    ((w.localized_block_title = s.NT.Set(
                                      w.localized_block_title || [],
                                      o,
                                      h,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0))
                                  : ((O = w.spec_list) == null
                                      ? void 0
                                      : O.length) > 0 &&
                                    w.spec_list.forEach((Z) => {
                                      d === sa + E.unique_id + Zs + Z.unique_id
                                        ? (h ||
                                            (Z.localized_spec_name &&
                                              s.NT.Get(
                                                Z.localized_spec_name,
                                                o,
                                              ))) &&
                                          s.NT.Get(Z.localized_spec_name, o) !==
                                            h &&
                                          ((Z.localized_spec_name = s.NT.Set(
                                            Z.localized_spec_name || [],
                                            o,
                                            h,
                                          )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0))
                                        : d ===
                                            sa +
                                              E.unique_id +
                                              qs +
                                              Z.unique_id &&
                                          (h ||
                                            (Z.localized_spec_description &&
                                              s.NT.Get(
                                                Z.localized_spec_description,
                                                o,
                                              ))) &&
                                          s.NT.Get(
                                            Z.localized_spec_description,
                                            o,
                                          ) !== h &&
                                          ((Z.localized_spec_description =
                                            s.NT.Set(
                                              Z.localized_spec_description ||
                                                [],
                                              o,
                                              h.replace(
                                                /<br\s*\/?>/g,
                                                `
`,
                                              ),
                                            )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                    });
                              }),
                            ((Tt =
                              (zt = E.quest) == null ? void 0 : zt.door_info) ==
                            null
                              ? void 0
                              : Tt.length) > 0 &&
                              ((gt = E.quest) == null ||
                                gt.door_info.forEach((w) => {
                                  d === Bs + E.unique_id + "_" + w.unique_id
                                    ? (h ||
                                        (w.localized_closed_door_description &&
                                          s.NT.Get(
                                            w.localized_closed_door_description,
                                            o,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_closed_door_description,
                                        o,
                                      ) !== h &&
                                      ((w.localized_closed_door_description =
                                        s.NT.Set(
                                          w.localized_closed_door_description ||
                                            [],
                                          o,
                                          h,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0))
                                    : d ===
                                        Os + E.unique_id + "_" + w.unique_id &&
                                      (h ||
                                        (w.localized_open_door_description &&
                                          s.NT.Get(
                                            w.localized_open_door_description,
                                            o,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_open_door_description,
                                        o,
                                      ) !== h &&
                                      ((w.localized_open_door_description =
                                        s.NT.Set(
                                          w.localized_open_door_description ||
                                            [],
                                          o,
                                          h,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0));
                                })),
                            ((I =
                              (T = E.rewards) == null
                                ? void 0
                                : T.reward_items) == null
                              ? void 0
                              : I.length) > 0 &&
                              E.rewards.reward_items.forEach((w) => {
                                d ===
                                  Hs +
                                    E.unique_id +
                                    "_" +
                                    w.virtual_item_reward_def_id &&
                                  (h ||
                                    (w.localized_reward_description &&
                                      s.NT.Get(
                                        w.localized_reward_description,
                                        o,
                                      ))) &&
                                  s.NT.Get(
                                    w.localized_reward_description,
                                    o,
                                  ) !== h &&
                                  ((w.localized_reward_description = s.NT.Set(
                                    w.localized_reward_description || [],
                                    o,
                                    h,
                                  )),
                                  a.SetDirty(C.IQ.jsondata_sales),
                                  (r = !0));
                              }),
                            ((Ce =
                              (ne = E.claim_item_section_data) == null
                                ? void 0
                                : ne.localized_claim_button) == null
                              ? void 0
                              : Ce.length) > 0 &&
                              d === Vs + E.unique_id &&
                              (h ||
                                (E.claim_item_section_data
                                  .localized_claim_button &&
                                  s.NT.Get(
                                    E.claim_item_section_data
                                      .localized_claim_button,
                                    o,
                                  ))) &&
                              s.NT.Get(
                                E.claim_item_section_data
                                  .localized_claim_button,
                                o,
                              ) !== h &&
                              ((E.claim_item_section_data.localized_claim_button =
                                s.NT.Set(
                                  E.claim_item_section_data
                                    .localized_claim_button || [],
                                  o,
                                  h,
                                )),
                              a.SetDirty(C.IQ.jsondata_sales),
                              (r = !0)),
                            E.section_type == "badge_progress" &&
                              E.badge_progress)
                          ) {
                            const w = E.badge_progress;
                            d === Gs + E.unique_id &&
                              (h ||
                                (w.localized_name &&
                                  s.NT.Get(w.localized_name, o))) &&
                              s.NT.Get(w.localized_name, o) !== h &&
                              ((w.localized_name = s.NT.Set(
                                w.localized_name || [],
                                o,
                                h,
                              )),
                              a.SetDirty(C.IQ.jsondata_sales),
                              (r = !0)),
                              d === Ls + E.unique_id &&
                                (h ||
                                  (w.localized_initial_description &&
                                    s.NT.Get(
                                      w.localized_initial_description,
                                      o,
                                    ))) &&
                                s.NT.Get(w.localized_initial_description, o) !==
                                  h &&
                                ((w.localized_initial_description = s.NT.Set(
                                  w.localized_initial_description || [],
                                  o,
                                  h,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0)),
                              d === Ns + E.unique_id &&
                                (h ||
                                  (w.localized_progress_description &&
                                    s.NT.Get(
                                      w.localized_progress_description,
                                      o,
                                    ))) &&
                                s.NT.Get(
                                  w.localized_progress_description,
                                  o,
                                ) !== h &&
                                ((w.localized_progress_description = s.NT.Set(
                                  w.localized_progress_description || [],
                                  o,
                                  h,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0)),
                              d === Ms + E.unique_id &&
                                (h ||
                                  (w.localized_maxtier_description &&
                                    s.NT.Get(
                                      w.localized_maxtier_description,
                                      o,
                                    ))) &&
                                s.NT.Get(w.localized_maxtier_description, o) !==
                                  h &&
                                ((w.localized_maxtier_description = s.NT.Set(
                                  w.localized_maxtier_description || [],
                                  o,
                                  h,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0));
                          }
                          if (
                            (E.section_type == "discoveryqueue" &&
                              d === Ps + E.unique_id &&
                              (h ||
                                (E.discovery_queue_localized_desc &&
                                  s.NT.Get(
                                    E.discovery_queue_localized_desc,
                                    o,
                                  ))) &&
                              s.NT.Get(E.discovery_queue_localized_desc, o) !==
                                h &&
                              ((E.discovery_queue_localized_desc = s.NT.Set(
                                E.discovery_queue_localized_desc || [],
                                o,
                                h,
                              )),
                              a.SetDirty(C.IQ.jsondata_sales),
                              (r = !0)),
                            E.section_type == "social_share" &&
                              ((xe = E.social_share.content_options) == null ||
                                xe.forEach((w) => {
                                  const O = w.localized_option_fields;
                                  d === Rs + E.unique_id + "_" + w.unique_id &&
                                    (h ||
                                      (O.localized_header &&
                                        s.NT.Get(O.localized_header, o))) &&
                                    s.NT.Get(O.localized_header, o) !== h &&
                                    ((O.localized_header = s.NT.Set(
                                      O.localized_header || [],
                                      o,
                                      h,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0)),
                                    d ===
                                      ks + E.unique_id + "_" + w.unique_id &&
                                      (h ||
                                        (O.title && s.NT.Get(O.title, o))) &&
                                      s.NT.Get(O.title, o) !== h &&
                                      ((O.title = s.NT.Set(
                                        O.title || [],
                                        o,
                                        h,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      Fs + E.unique_id + "_" + w.unique_id &&
                                      (h ||
                                        (O.description &&
                                          s.NT.Get(O.description, o))) &&
                                      s.NT.Get(O.description, o) !== h &&
                                      ((O.description = s.NT.Set(
                                        O.description || [],
                                        o,
                                        h,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      Us + E.unique_id + "_" + w.unique_id &&
                                      (h ||
                                        (O.image && s.NT.Get(O.image, o))) &&
                                      s.NT.Get(O.image, o) !== h &&
                                      ((O.image = s.NT.Set(
                                        O.image || [],
                                        o,
                                        h,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      zs + E.unique_id + "_" + w.unique_id &&
                                      (h ||
                                        (O.twitter_alt_text &&
                                          s.NT.Get(O.twitter_alt_text, o))) &&
                                      s.NT.Get(O.twitter_alt_text, o) !== h &&
                                      ((O.twitter_alt_text = s.NT.Set(
                                        O.twitter_alt_text || [],
                                        o,
                                        h,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0));
                                })),
                            E.section_type == "media_layout" &&
                              ((st = E.media_layout.media_content) == null ||
                                st.forEach((w, O) => {
                                  const Z = w.localized_media_desc;
                                  d === Ws + E.unique_id + "_" + O &&
                                    (h || (Z && s.NT.Get(Z, o))) &&
                                    s.NT.Get(Z, o) !== h &&
                                    ((w.localized_media_desc = s.NT.Set(
                                      Z || [],
                                      o,
                                      h,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0));
                                })),
                            E.section_type == "template_media_content" &&
                              ((Ct = E.media_container.media_rows) == null ||
                                Ct.forEach((w) => {
                                  w == null ||
                                    w.media_columns.forEach((O) => {
                                      let Z = oa(
                                        a,
                                        d,
                                        h,
                                        E.unique_id + "_" + O.unique_id,
                                        o,
                                        O,
                                      );
                                      r || (r = Z),
                                        O.mobile_content_varient &&
                                          ((Z = oa(
                                            a,
                                            d,
                                            h,
                                            E.unique_id +
                                              "_" +
                                              O.unique_id +
                                              "_mobile",
                                            o,
                                            O.mobile_content_varient,
                                          )),
                                          r || (r = Z)),
                                        O.tablet_content_varient &&
                                          ((Z = oa(
                                            a,
                                            d,
                                            h,
                                            E.unique_id +
                                              "_" +
                                              O.unique_id +
                                              "_tablet",
                                            o,
                                            O.tablet_content_varient,
                                          )),
                                          r || (r = Z));
                                    });
                                })),
                            E.section_type == "template_media_overlay" &&
                              E.media_overlay)
                          ) {
                            let w = oa(
                              a,
                              d,
                              h,
                              E.unique_id + "_overlay",
                              o,
                              E.media_overlay,
                            );
                            if (
                              (r || (r = w),
                              E.media_overlay_mobile_content_varient)
                            ) {
                              let O = oa(
                                a,
                                d,
                                h,
                                E.unique_id + "_overlay_mobile",
                                o,
                                E.media_overlay_mobile_content_varient,
                              );
                              r || (r = O);
                            }
                            if (E.media_overlay_tablet_content_varient) {
                              let O = oa(
                                a,
                                d,
                                h,
                                E.unique_id + "_overlay_tablet",
                                o,
                                E.media_overlay_tablet_content_varient,
                              );
                              r || (r = O);
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
        function oa(a, t, n, i, l, o) {
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
            className: (0, j.A)(W.FlexRowContainer),
            children: (0, e.jsx)(ii, { editModel: a.editModel }),
          });
        }
        const ii = (a) => {
          const { data: t } = (0, Vt.hM)(a.editModel.GetClanAccountID()),
            n = (i) => {
              i.preventDefault(),
                (0, U.pg)(
                  (0, e.jsx)(ba, { editModel: a.editModel, permissions: t }),
                  (0, Q.uX)(i),
                );
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(De.he, {
                className: (0, j.A)(W.EditPreviewButton),
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
        let ba = class extends S.Component {
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
            let t = a.GetName(G.Bhc);
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
            return (0, e.jsx)(F.eV, {
              title: (0, s.we)("#EventEditor_Loc_Export"),
              onCancel: a,
              closeModal: a,
              children: (0, e.jsxs)(p.nB, {
                children: [
                  (0, e.jsx)(p.a3, {
                    children: (0, e.jsxs)("div", {
                      className: (0, j.A)(W.FlexColumnContainer),
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, s.we)("#EventEditor_Loc_Export_Desc0"),
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, j.A)(
                            W.FlexRowContainer,
                            W.RadioOption,
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
                            W.FlexRowContainer,
                            W.RadioOption,
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
                            className: W.ValveOnlyBackground,
                            children: [
                              (0, e.jsx)("p", {
                                children:
                                  "(VO) Identify which sections to export",
                              }),
                              (0, e.jsx)(p.Yh, {
                                label: "Export Event Body",
                                onChange: (i) =>
                                  this.setState({ bExportEventBody: i }),
                                checked: this.state.bExportEventBody,
                              }),
                              (0, e.jsx)(p.Yh, {
                                disabled: !t.BHasEmailEnabled(),
                                label: "Export Email",
                                onChange: (i) =>
                                  this.setState({ bExportEmail: i }),
                                checked: this.state.bExportEmail,
                              }),
                              (0, e.jsx)(p.Yh, {
                                disabled: !t.BHasSaleEnabled(),
                                label: "Export Sales",
                                onChange: (i) =>
                                  this.setState({ bExportSale: i }),
                                checked: this.state.bExportSale,
                              }),
                            ],
                          }),
                        this.state.bShowCSV
                          ? (0, e.jsxs)(S.Fragment, {
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
                          : (0, e.jsxs)(S.Fragment, {
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
                  (0, e.jsxs)(p.wi, {
                    children: [
                      (0, e.jsx)(cs.Yg, {
                        fnGetLocData: this.GetLocalizationModel,
                        bShowCSV: this.state.bShowCSV,
                        bShowXML: !this.state.bShowCSV,
                        strFileNamePrefix: this.GetLocalizationFilePrefix(),
                        lang: this.props.editModel.GetCurEditLanguage(),
                        closeModal: this.props.closeModal,
                      }),
                      (0, e.jsx)(p.$n, {
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
        En([ie.oI], ba.prototype, "GetLocalizationModel", 1),
          En([ie.oI], ba.prototype, "OnExportTypeChange", 1),
          (ba = En([R.PA], ba));
        var re = u(86649);
        const K_ = 1,
          Z_ = 2,
          q_ = 3,
          X_ = 4,
          $_ = 5,
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
          _m = 19,
          mm = 20,
          pm = 21,
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
          Dm = 32,
          ym = 33,
          Tm = 34,
          Im = 35,
          Ko = 36;
        function Zo(a) {
          const { eventModel: t, fnOnGotoPage: n } = a;
          return t.bOldAnnouncement
            ? null
            : (0, e.jsx)("div", {
                className: (0, j.A)(re.ManageButton, re.Clone),
                onClick: (i) => {
                  i.stopPropagation(), oi(t, n);
                },
                children: (0, s.we)("#Button_Clone"),
              });
        }
        function oi(a, t) {
          M.mh
            .LoadEditorModel(a.clanSteamID, a.GID)
            .then((n) => {
              const i = ti(n, !0, !0, !0),
                l = i.GetLanguagesWithTokens();
              l.length > 1
                ? (l.sort((o, r) =>
                    (0, s.we)("#Language_" + (0, G.LgB)(o)).localeCompare(
                      (0, s.we)("#Language_" + (0, G.LgB)(r)),
                    ),
                  ),
                  (0, U.pg)(
                    (0, e.jsx)(qo, { langs: l, locData: i, fnOnGotoPage: t }),
                    window,
                  ))
                : li(t, i);
            })
            .catch((n) => {
              let i = (0, Me.H)(n);
              (0, U.pg)(
                (0, e.jsx)(F.KG, {
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
          const i = M.mh.CreateClone(),
            l = i.GetEventModel();
          if (
            ((l.jsondata.sale_header_offset = l.GetEventType() != Ko ? 530 : 0),
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
        function qo(a) {
          const { langs: t, locData: n, closeModal: i, fnOnGotoPage: l } = a,
            o = (0, G.sfN)(D.TS.LANGUAGE),
            [r, d] = S.useState(new Set(t.filter((m) => m != o)));
          return (0, e.jsxs)(F.o0, {
            strTitle: (0, s.we)("#Button_Clone"),
            onOK: () => li(l, n, Array.from(r)),
            strDescription: (0, s.we)("#EventEditor_Clone_MultiLanguages"),
            closeModal: i,
            children: [
              (0, e.jsx)("div", {
                className: re.CloneLangAlert,
                children: (0, s.we)("#EventEditor_Clone_Alert"),
              }),
              (0, e.jsx)("div", {
                className: re.CloneLangListCtn,
                children: t.map((m) =>
                  (0, e.jsx)(
                    p.Yh,
                    {
                      className: re.CloneCheckBox,
                      onChange: (c) => {
                        const g = new Set(r);
                        c ? g.delete(m) : g.add(m), d(g);
                      },
                      label: (0, s.we)("#Language_" + (0, G.LgB)(m)),
                      checked: !r.has(m),
                    },
                    m,
                  ),
                ),
              }),
              (0, e.jsx)(p.$n, {
                onClick: () => d(new Set()),
                children: (0, s.we)("#EventEditor_Clone_SelectAll"),
              }),
              (0, e.jsx)(p.$n, {
                onClick: () => d(new Set(t)),
                children: (0, s.we)("#EventEditor_Clone_DeSelectAll"),
              }),
            ],
          });
        }
        var ja = u(80963),
          ke = u(92757),
          mt = u(10142),
          je = u(25792),
          Xo = u(80635),
          ce = u(56492),
          $o = u(68266),
          el = u(39239),
          tl = u(64868);
        function al(a) {
          const [t, n] = (0, V.qm)(a.GetEventModel());
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
        var Xe = u(72604),
          nl = u(11113),
          Pt = u.n(nl),
          Wt = u(84346);
        function sl(a) {
          switch (a) {
            case G.Fwr:
            case G.u0:
            case G.zeJ:
              return !0;
          }
          return !1;
        }
        function ri(a) {
          const { eventModel: t, bAllowUpdate: n } = a,
            [i, l] = (0, V.qm)(t);
          if (!sl(t.type) && !i) return null;
          let o = (0, e.jsx)("span", {
            className: (0, j.A)(Pt().BuildDisplay, Pt().BuildUnlinked),
            children: (0, s.we)("#EventEditor_AssociateBuildBlank"),
          });
          if (i) {
            const r = (0, e.jsx)("a", {
              className: (0, j.A)(Pt().BuildIDLink),
              href: `${D.TS.PARTNER_BASE_URL}apps/builddetails/${t.appid}/${i}`,
              onClick: (d) => d.stopPropagation(),
              children: i,
            });
            l
              ? (o = (0, e.jsx)("span", {
                  className: (0, j.A)(
                    Pt().BuildDisplay,
                    Pt().BuildLinkedBranch,
                  ),
                  children: (0, s.PP)("#EventEditor_AssociatedBuild", r, l),
                }))
              : (o = (0, e.jsx)("span", {
                  className: (0, j.A)(
                    Pt().BuildDisplay,
                    Pt().BuildLinkedDefault,
                  ),
                  children: (0, s.PP)(
                    "#EventEditor_AssociatedBuild_Default",
                    r,
                  ),
                }));
          } else if (!n) return null;
          return (0, e.jsxs)("div", {
            className: Pt().AssociatedBuildBody,
            children: [
              a.children,
              o,
              (0, e.jsx)($.o, {
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
            children: (0, e.jsx)(p.$n, {
              onClick: (i) =>
                (0, U.pg)(
                  (0, e.jsx)(rl, { editModel: a.editModel }),
                  (0, Q.uX)(i),
                ),
              children: (0, s.we)("#EventEditor_AssociateBuild"),
            }),
          });
        });
        function ol(a) {
          const [t, n] = S.useState(null);
          return (
            S.useEffect(() => {
              if ((n(null), !a)) return;
              const i = oe().CancelToken.source(),
                l = D.TS.COMMUNITY_BASE_URL + `ogg/${a}/ajaxgetappbranches`;
              return (
                oe()
                  .get(l, { withCredentials: !0, cancelToken: i.token })
                  .then((r) => {
                    var d;
                    if (!i.token.reason) {
                      const m =
                        ((d = r == null ? void 0 : r.data) == null
                          ? void 0
                          : d.success) == Xe.R;
                      n(
                        m
                          ? r.data.branches.sort((c, g) => g.date - c.date)
                          : [],
                      );
                    }
                  })
                  .catch((r) => {
                    if (!i.token.reason) {
                      const d = (0, Me.H)(r);
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
          const n = new Date(a.date * 1e3).toLocaleDateString((0, Wt.J)());
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
            [l, o] = S.useState(void 0),
            [r, d, m] = al(t),
            c = () => {
              m(l == null ? void 0 : l.build_id, l == null ? void 0 : l.branch),
                n();
            };
          if (i != null && i.length && l === void 0) {
            const v = i.find((h) => h.branch == "");
            v && o(v);
          }
          const g = !!i,
            _ = new Array();
          return (
            _.push({
              label: (0, s.we)("#EventEditor_AssociateBuildClear"),
              data: null,
            }),
            i == null ||
              i.forEach((v) => {
                _.push({ label: ll(v), data: v });
              }),
            (0, e.jsx)(je.tH, {
              children: (0, e.jsx)(U.x_, {
                onEscKeypress: n,
                children: (0, e.jsxs)(p.UC, {
                  children: [
                    (0, e.jsx)(p.Y9, {
                      children: (0, s.we)("#EventEditor_AssociateBuildDialog"),
                    }),
                    (0, e.jsxs)(p.nB, {
                      children: [
                        (0, e.jsx)(p.a3, {
                          children: (0, s.we)(
                            "#EventEditor_AssociateBuildDialogDesc",
                          ),
                        }),
                        g &&
                          (0, e.jsx)(p.m, {
                            rgOptions: _,
                            selectedOption: l,
                            onChange: (v) => o(v.data),
                          }),
                        !g && (0, e.jsx)(H.t, {}),
                      ],
                    }),
                    (0, e.jsx)(p.wi, {
                      children: (0, e.jsx)(p.CB, {
                        onCancel: n,
                        bOKDisabled: !g,
                        onOK: c,
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
        var xt = u(24642);
        const dl = (0, R.PA)(function (t) {
          var n;
          const {
              eventModel: i,
              appid_or_vanity_str: l,
              bShowGameName: o,
              bShowEventMetaDataSizes: r,
            } = t,
            [d, m] = S.useState(null),
            c = S.useRef(!1),
            g = S.useCallback((Qe) => {
              (c.current = !1), m(Qe);
            }, []),
            _ = S.useCallback(
              (Qe) => {
                Qe.target instanceof HTMLButtonElement ||
                  Qe.target instanceof HTMLAnchorElement ||
                  (g("edit"), Qe.stopPropagation());
              },
              [g],
            ),
            v = S.useCallback((Qe) => {
              Qe.stopPropagation();
            }, []),
            h = i.GID,
            x = i.bOldAnnouncement;
          if (d && !c.current)
            switch (((c.current = !0), d)) {
              case "clone":
                return (0, e.jsx)(ke.rd, { push: !0, to: se.GY.Edit(l, "") });
              case "edit":
                return (0, e.jsx)(ce.OG, {
                  eventModel: i,
                  route: ce.PH.k_eCommunityEdit,
                });
              case "view":
                return i.BIsVisibleEvent()
                  ? (0, e.jsx)(ce.OG, { eventModel: i, route: ce.PH.k_eView })
                  : (0, e.jsx)(ce.OG, {
                      eventModel: i,
                      route: ce.PH.k_eCommunityPreview,
                    });
              default:
                console.log("EventDisplayTile - Unexpected Case - " + d);
            }
          let b = (0, G.sfN)(D.TS.LANGUAGE);
          i.BIsLanguageValidForRealms(b) ||
            (b = i.BInRealmGlobal() ? G.Bhc : G.ZLm);
          let E = i.GetNameWithFallback(b);
          const y = i.BHasSubTitle(b),
            P = !0,
            N = i.BHasSaleEnabled(),
            q = i.visibility_state != ee.zv.k_EEventStateUnpublished,
            le = i.visibility_state != ee.zv.k_EEventStateVisible,
            fe = i.visibility_state == ee.zv.k_EEventStateUnlisted,
            me = i.BShowLibrarySpotlight(!0),
            $e = q && le && !fe;
          o &&
            (E =
              (((n = mt.A.Get().GetApp(i.appid)) == null
                ? void 0
                : n.GetName()) || "") +
              ": " +
              E);
          const ht =
              i.BIsPartnerEvent() &&
              i.BIsVisibleEvent() &&
              ae.Uq.GetStatsFor(i.clanSteamID, h),
            et = J.ac.GetOGGClanInfo(i.appid),
            vt = !!(
              x &&
              et &&
              et.is_ogg &&
              et.clanAccountID != i.announcementClanSteamID.GetAccountID()
            );
          return (0, e.jsx)(je.tH, {
            children: (0, e.jsxs)("div", {
              className: (0, j.A)({
                [re.TileContainer]: !0,
                [re.TileAgeAppropriate]: P,
                [re.TileAgeNotAppropriate]: !P,
                [re.ShowEventMetaDataSizes]: r,
                [re.ShowLibrarySpotlight]: me,
              }),
              children: [
                me && (0, e.jsx)(cl, {}),
                (0, e.jsxs)("div", {
                  className: re.TileEventRow,
                  children: [
                    (0, e.jsx)(_l, {
                      fnOnFallbackClick: _,
                      lang: b,
                      eventModel: i,
                    }),
                    (0, e.jsx)("div", {
                      className: re.TileTextContainer,
                      onClick: _,
                      children: (0, e.jsxs)("div", {
                        className: re.TileDescriptionContainer,
                        children: [
                          (0, e.jsxs)("div", {
                            style: { display: "flex" },
                            children: [
                              (0, e.jsx)("div", {
                                className: re.TileTextAppName,
                                children: E,
                              }),
                              (0, e.jsxs)("div", {
                                className: re.TileTextEventType,
                                children: [
                                  i.GetCategoryAsString(!0),
                                  N &&
                                    (0, e.jsxs)("span", {
                                      className: re.TileHasSale,
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
                            className: W.ContainerSpaceBetween,
                            children: [
                              (0, e.jsxs)("div", {
                                className: re.TileTextStartsIn,
                                children: [
                                  (0, e.jsx)(_t.K4, {
                                    dateAndTime:
                                      i.GetStartTimeAndDateUnixSeconds(),
                                    bSingleLine: !0,
                                  }),
                                  !le && q && (0, e.jsx)(ul, { eventModel: i }),
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
                              !!ht &&
                                (0, e.jsxs)("div", {
                                  className: re.TileStats,
                                  children: [
                                    (0, s.PP)(
                                      "#EventDashBoard_Summary_Tile_Impressions",
                                      (0, e.jsx)("span", {
                                        children: (0, xt.D)(
                                          ht.m_stats.total_showm,
                                        ),
                                      }),
                                    ),
                                    (0, e.jsx)("br", {}),
                                    (0, s.PP)(
                                      "#EventDashBoard_Summary_Tile_Read",
                                      (0, e.jsx)("span", {
                                        children: (0, xt.D)(
                                          ht.m_stats.total_read,
                                        ),
                                      }),
                                    ),
                                  ],
                                }),
                            ],
                          }),
                          $e && (0, e.jsx)(hl, { eventModel: i }),
                          vt
                            ? (0, e.jsxs)("div", {
                                className: re.TileButtonContainer,
                                onClick: v,
                                children: [
                                  (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#EventEditor_DataFromConnectAnnouncement",
                                    ),
                                  }),
                                  (0, e.jsx)(ce.tj, {
                                    className: (0, j.A)(
                                      re.ManageButton,
                                      re.Edit,
                                    ),
                                    eventModel: i,
                                    route: ce.PH.k_eView,
                                    children: (0, s.we)("#Button_ViewPage"),
                                  }),
                                ],
                              })
                            : (0, e.jsx)(ml, { fnOnGotoPage: g, ...t }),
                          r &&
                            (0, e.jsx)(ve.Eb, {
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
            className: re.PartnerEventFeaturedHeader,
            children: [
              (0, s.we)("#EventDisplay_Visible_Featured"),
              (0, e.jsx)(De.he, {
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
                  className: re.EventStateUpcoming,
                  children: (0, s.we)("#EventDisplay_Upcoming"),
                })
              : (0, aa.JS)(n.type) && n.GetEndTimeAndDateUnixSeconds() > i
                ? (0, e.jsx)("span", {
                    className: re.EventStateActive,
                    children: (0, s.we)("#EventDisplay_Active"),
                  })
                : n.GetStartTimeAndDateUnixSeconds() > i + 3600
                  ? (0, e.jsx)("span", {
                      className: re.EventStateRecent,
                      children: (0, s.we)("#EventDisplay_RecentlyActive"),
                    })
                  : null;
          }),
          hl = (0, R.PA)(function (t) {
            const { eventModel: n } = t;
            return n.visibilityStartTime == n.startTime
              ? (0, e.jsx)("div", {
                  className: re.TileTextStartsIn,
                  children: (0, s.we)(
                    "#EventEditor_Status_WillBeVisible_EventStart",
                  ),
                })
              : (0, e.jsx)("div", {
                  className: re.TileTextStartsIn,
                  children: (0, s.PP)(
                    "#EventEditor_Status_WillBeVisible_At",
                    (0, e.jsx)(_t.K4, {
                      dateAndTime: n.GetVisibilityStartTimeAndDateUnixSeconds(),
                      bSingleLine: !0,
                    }),
                  ),
                });
          });
        function _l(a) {
          const { fnOnFallbackClick: t, eventModel: n, lang: i } = a;
          let o = [(0, $o.m0)(n, "capsule", i)];
          return (0, e.jsx)("div", {
            className: re.TileImageCtn,
            onClick: (r) => t(r),
            children: (0, e.jsx)(el.o, { className: re.TileImage, srcs: o }),
          });
        }
        const ml = (0, R.PA)(function (t) {
          const { eventModel: n, fnOnGotoPage: i, refresh: l } = t,
            o = S.useCallback((_) => {
              _.stopPropagation();
            }, []),
            r = S.useCallback(() => {
              i("view");
            }, [i]),
            d = n.bOldAnnouncement,
            m = n.visibility_state != ee.zv.k_EEventStateVisible,
            c = n.visibility_state == ee.zv.k_EEventStateUnlisted,
            g = n.visibility_state != ee.zv.k_EEventStateUnpublished;
          return (0, e.jsxs)("div", {
            className: re.TileButtonContainer,
            onClick: o,
            children: [
              !d &&
                (0, e.jsx)(ce.tj, {
                  className: (0, j.A)(re.ManageButton, re.Edit),
                  eventModel: n,
                  route: ce.PH.k_eCommunityEdit,
                  onClick: o,
                  children: (0, s.we)("#Button_Edit"),
                }),
              d &&
                (0, e.jsx)(ce.tj, {
                  className: (0, j.A)(re.ManageButton, re.Edit),
                  eventModel: n,
                  route: ce.PH.k_eCommunityMigrate,
                  onClick: o,
                  children: (0, e.jsx)(De.he, {
                    toolTipContent: (0, s.we)(
                      "#EventEditor_Button_MigrateAndEdit_Announcement_ttip",
                    ),
                    children: (0, s.we)("#EventEditor_Button_MigrateAndEdit"),
                  }),
                }),
              m &&
                !c &&
                (0, e.jsx)(ce.tj, {
                  className: (0, j.A)(re.ManageButton, re.View),
                  eventModel: n,
                  route: ce.PH.k_eCommunityPreview,
                  onClick: o,
                  children: (0, e.jsx)(De.he, {
                    toolTipContent: (0, s.we)(
                      "#EventEditor_Button_PreviewButton_ttip",
                    ),
                    children: (0, s.we)("#EventDisplay_Preview"),
                  }),
                }),
              (!m || c) &&
                (0, e.jsx)(ce.tj, {
                  className: (0, j.A)(re.ManageButton, re.View),
                  eventModel: n,
                  route: ce.PH.k_eView,
                  onClick: o,
                  children: (0, s.we)("#EventDisplay_View"),
                }),
              !g &&
                !d &&
                (0, e.jsx)(pl, { eventModel: n, OnPublishSuccess: r }),
              (0, e.jsx)("div", { className: re.Spacer, children: "\xA0" }),
              (0, e.jsx)(Zo, { eventModel: n, fnOnGotoPage: i }),
              (0, e.jsx)(vl, { eventModel: n, refresh: l }),
            ],
          });
        });
        function pl(a) {
          const { eventModel: t, OnPublishSuccess: n } = a,
            [i, l] = S.useState({ kind: "none" }),
            o = S.useCallback(() => l({ kind: "none" }), []),
            r = (0, ve.Dd)(t.clanSteamID, !0),
            d = S.useCallback(
              (m) => {
                m.stopPropagation(),
                  M.mh
                    .LoadEditorModel(t.clanSteamID, t.GID)
                    .then(() => {
                      l({ kind: "publish" });
                    })
                    .catch((c) => {
                      const g = (0, Me.H)(c);
                      l({ kind: "error", strMessage: g.strErrorMsg });
                    });
              },
              [t],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, j.A)(re.ManageButton, re.Publish),
                onClick: d,
                children: (0, s.we)("#EventDisplay_Publish"),
              }),
              (0, e.jsx)(F.EN, {
                active: i.kind == "publish",
                children:
                  i.kind == "publish" &&
                  (0, e.jsx)(ja.i, {
                    editModel: M.mh.GetEditModel(),
                    partnerEventEditorStore: M.mh,
                    bValveAdmin: r,
                    closeModal: o,
                    OnPublishSuccess: n,
                  }),
              }),
              (0, e.jsx)(F.EN, {
                active: i.kind == "error",
                children:
                  i.kind == "error" &&
                  (0, e.jsx)(F.KG, {
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
            r = S.useCallback(
              (d) => {
                d.stopPropagation(), l();
              },
              [l],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(De.he, {
                toolTipContent: (0, s.we)(
                  "#EventEditor_Button_DeleteButton_ttip",
                ),
                children: (0, e.jsx)("div", {
                  className: (0, j.A)(re.ManageButton, re.Delete),
                  onClick: r,
                  children: (0, s.we)("#Button_Delete"),
                }),
              }),
              (0, e.jsx)(F.EN, {
                active: i,
                children: (0, e.jsx)(Xo.p, {
                  eventModel: t,
                  partnerEventStore: M.mh,
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
              className: re.MetaDataCtn,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    "Total Size: ",
                    (n =
                      (t = JSON.stringify(i.jsondata)) == null
                        ? void 0
                        : t.length) == null
                      ? void 0
                      : n.toLocaleString((0, Wt.J)()),
                  ],
                }),
                l
                  .slice(0, 10)
                  .map((r) =>
                    (0, e.jsxs)(
                      "div",
                      { children: [r.key, ": ", (0, xt.D)(r.size)] },
                      r.key,
                    ),
                  ),
              ],
            })
          );
        };
        var Rt = u(50974);
        const yn = 10,
          Sl = (0, R.PA)((a) => {
            const { match: t } = a,
              [n, i] = S.useState(!1),
              [l, o] = S.useState(""),
              [r, d] = S.useState(""),
              [m, c] = S.useState(!1),
              [g, _] = S.useState(0),
              v = S.useRef(void 0),
              h = S.useMemo(() => new k.b(D.UF.CLANSTEAMID), []),
              x = S.useMemo(() => new Qa.LU(), []),
              b = S.useMemo(() => oe().CancelToken.source(), []),
              {
                bIsFetching: E,
                nHiddenEventCount: y,
                rgEventModels: P,
                fnRefetch: N,
              } = (0, M.lX)(h, !n),
              {
                rgClanEventData: q,
                bHasNextPage: le,
                fnFetchNextPage: fe,
                bIsFetching: me,
                bIsFetchingNextPage: $e,
                clanEventSummaryStatus: ht,
                clanEventSummaryLoadError: et,
                fnRefetch: vt,
              } = (0, V.SG)(h, yn, b);
            S.useEffect(
              () => (N(), vt(), () => b.cancel("EventListView to unload")),
              [b, vt, N],
            );
            const Qe = El(me, E),
              Ot = (0, ie.Sz)(me),
              jt = S.useMemo(() => {
                (0, xa.wT)(
                  !P || P.every((Z) => Z != null),
                  "draftClanEvents has a null event",
                );
                const xe = (Z) => m || Z.GetEventType() != G.ajI,
                  st = new Map(),
                  Ct =
                    q == null
                      ? void 0
                      : q.pages.flatMap((Z) => Z).map((Z) => (0, X.oE)(h, Z)),
                  Ve = Ct == null ? void 0 : Ct.filter(xe);
                Ve == null || Ve.forEach((Z) => st.set(Z.GID, Z));
                const w = P == null ? void 0 : P.filter(xe);
                w == null || w.forEach((Z) => st.set(Z.GID, Z));
                const O =
                  (Ct != null ? Ct : []).length + (P != null ? P : []).length;
                return (
                  _(
                    O -
                      (Ve != null ? Ve : []).length -
                      (w != null ? w : []).length,
                  ),
                  Array.from(st.values())
                );
              }, [P, q == null ? void 0 : q.pages, m, h]);
            S.useEffect(() => {
              const xe = jt
                .filter(
                  (st) =>
                    !!(st && st.BIsVisibleEvent() && st.BIsPartnerEvent()),
                )
                .map((st) => st.GID);
              xe.length > 0 && ae.Uq.LoadStatsForEvents(h, xe, b);
            }, [b, h, jt]),
              S.useEffect(() => {
                if (ht == "error") {
                  const xe = (0, Me.H)(et);
                  (0, U.pg)(
                    (0, e.jsx)(F.KG, {
                      children: (0, s.we)(
                        "#Error_Description",
                        xe.errorCode,
                        xe.strErrorMsg,
                      ),
                    }),
                    window,
                  );
                }
              }, [et, ht]);
            const nt = (xe, st) => {
                var Ct;
                const Ve = [];
                let w = jt;
                if ((w == null ? void 0 : w.length) > 0) {
                  (w = w.slice().filter((O) => {
                    var Z;
                    return !(
                      O.visibility_state !== xe ||
                      (r &&
                        !(
                          (Z = O.GetNameWithFallback(
                            (0, G.sfN)(D.TS.LANGUAGE),
                          )) != null && Z.toLocaleLowerCase().includes(r)
                        ))
                    );
                  })),
                    w.sort(
                      (O, Z) => (
                        (0, xa.wT)(
                          O !== Z,
                          `Unexpected duplicates in the list: ${O} ${Z}`,
                        ),
                        O.BShowLibrarySpotlight(!0) &&
                        !Z.BShowLibrarySpotlight(!0)
                          ? -1
                          : !O.BShowLibrarySpotlight(!0) &&
                              Z.BShowLibrarySpotlight(!0)
                            ? 1
                            : Z.startTime - O.startTime
                      ),
                    );
                  for (const O of w)
                    Ve.push(
                      (0, e.jsx)(
                        dl,
                        {
                          appid_or_vanity_str: t.params.appid_or_vanity_str,
                          gid: O.GID,
                          eventModel: O,
                          bShowEventMetaDataSizes: n,
                          refresh: () => {
                            vt(), N();
                          },
                        },
                        O.GID,
                      ),
                    );
                }
                for (
                  let O = 0;
                  O <
                  st - ((Ct = w == null ? void 0 : w.length) != null ? Ct : 0);
                  O++
                )
                  Ve.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: re.TileContainer,
                        children: (0, e.jsx)(ze.h, {
                          capsules_per_row: [1],
                          is_event_dash_row: !0,
                        }),
                      },
                      `tile_${xe}_ghost_${O}`,
                    ),
                  );
                return Ve;
              },
              zt = S.useCallback(
                (xe) => {
                  xe && !$e && fe();
                },
                [$e, fe],
              );
            S.useEffect(() => {
              x.Schedule(200, () =>
                d(l == null ? void 0 : l.trim().toLocaleLowerCase()),
              );
            }, [x, l]);
            const Tt = nt(ee.zv.k_EEventStateUnpublished, E ? y : 0),
              gt = nt(ee.zv.k_EEventStateStaged),
              T = nt(ee.zv.k_EEventStateUnlisted),
              I = nt(ee.zv.k_EEventStateVisible),
              ne = S.useMemo(() => {
                if (!I) return;
                if (me || !le) return I;
                const xe = I.length >= yn ? I.length - yn : I.length,
                  st = (0, e.jsx)(
                    Lo.J,
                    { trigger: "repeated", onVisibilityChange: zt },
                    "visibilityTracker",
                  );
                return [...I.slice(0, xe), st, ...I.slice(xe)];
              }, [le, me, I, zt]),
              Ce =
                Tt.length > 0 || gt.length > 0 || T.length > 0 || I.length > 0;
            return (0, e.jsx)(je.tH, {
              children: (0, e.jsxs)("div", {
                ref: v,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, j.A)("maincontent", Ne().EventDashboardCtn),
                    children: [
                      (0, e.jsx)(fl, {
                        appid_or_vanity_str: t.params.appid_or_vanity_str,
                      }),
                      (0, e.jsxs)(ve.Eb, {
                        requireAdmin: !0,
                        clanSteamID: h,
                        children: [
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(
                              "maincontent",
                              Ne().EventDashboardCtn,
                              Ne().EventDashAdminToolsCtn,
                              f().FlexRowContainer,
                            ),
                            children: [
                              (0, e.jsx)(p.Yh, {
                                label: "Show Event Metadata Size",
                                tooltip:
                                  "Surfaces the size of the biggest sections in the event's metadata",
                                onChange: i,
                                checked: n,
                              }),
                              (0, e.jsx)(p.$n, {
                                onClick: (xe) =>
                                  (0, U.pg)((0, e.jsx)(Mo, {}), (0, Q.uX)(xe)),
                                children: "Show Publishing Audit History",
                              }),
                            ],
                          }),
                          h.GetAccountID() == Rt.bv &&
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
                  (me || Ce || l.length > 0) &&
                    (0, e.jsx)("div", {
                      className: (0, j.A)(
                        Ne().EventDashboardCtn,
                        Ne().EventDashboardSearchCtn,
                        "maincontent",
                      ),
                      children: (0, e.jsx)(p.pd, {
                        type: "text",
                        label: (0, s.we)("#EventCalendar_UniversalSearch"),
                        value: l,
                        onChange: (xe) => o(xe.target.value),
                      }),
                    }),
                  !m &&
                    g > 0 &&
                    (0, e.jsx)("div", {
                      className: (0, j.A)(
                        Ne().EventDashboardCtn,
                        "maincontent",
                      ),
                      children: (0, e.jsx)(ve.Eb, {
                        requireAdmin: !0,
                        clanSteamID: h,
                        children: (0, e.jsx)("a", {
                          onClick: () => c(!0),
                          children: `Show ${g} hidden Creator Home events`,
                        }),
                      }),
                    }),
                  E &&
                    (0, e.jsx)(H.t, {
                      position: "center",
                      string: (0, s.we)("#Loading"),
                    }),
                  !Qe &&
                    (0, e.jsxs)("div", {
                      className: Ne().MainLists,
                      children: [
                        Tt.length > 0 &&
                          !E &&
                          (0, e.jsx)("div", {
                            className: (0, j.A)(Ne().Section, Ne().Unpublished),
                            children: (0, e.jsxs)("div", {
                              className: (0, j.A)(
                                "maincontent",
                                "eventlist",
                                Ne().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: Ne().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)(
                                      "#EventDisplay_Unpublished_Title",
                                    ),
                                    (0, e.jsx)($.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Unpublished_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                Tt.length > 0 && Tt,
                              ],
                            }),
                          }),
                        gt.length > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, j.A)(Ne().Section, Ne().Staged),
                            children: (0, e.jsxs)("div", {
                              className: (0, j.A)(
                                "maincontent",
                                "eventlist",
                                Ne().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: Ne().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)("#EventDisplay_Stage_Title"),
                                    (0, e.jsx)($.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Stage_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                gt.length > 0 && gt,
                              ],
                            }),
                          }),
                        T.length > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, j.A)(Ne().Section, Ne().Staged),
                            children: (0, e.jsxs)("div", {
                              className: (0, j.A)(
                                "maincontent",
                                "eventlist",
                                Ne().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: Ne().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)("#EventDisplay_Unlisted_Title"),
                                    (0, e.jsx)($.o, {
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
                            Ne().Section,
                            Ne().DisplaySectionHeaderContainer,
                            Ne().Visible,
                          ),
                          children: (0, e.jsxs)("div", {
                            className: (0, j.A)(
                              "maincontent",
                              "eventlist",
                              Ne().EventDashboardCtn,
                            ),
                            children: [
                              (0, e.jsx)("div", {
                                className: Ne().DisplaySectionHeader,
                                children: (0, s.we)(
                                  "#EventDisplay_Visible_Title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: Ne().DisplaySectionSubHeader,
                                children: (0, s.we)(
                                  "#EventDisplay_Visible_Title_WithRange",
                                ),
                              }),
                              ne,
                              !me &&
                                !ne &&
                                (0, e.jsx)("div", {
                                  children: (0, s.we)("#EventDisplay_NoPublic"),
                                }),
                              (me || (Ot && le)) &&
                                (0, e.jsx)(H.t, {
                                  position: "center",
                                  string: (0, s.we)("#Loading"),
                                }),
                              !le &&
                                (0, e.jsx)("div", {
                                  children: (0, s.we)(
                                    "#EventDisplay_AllPublicShown",
                                  ),
                                }),
                              et &&
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
          const [n, i] = S.useState(!0);
          return (
            (0, ie.Z3)(() => i(!1), 4e3),
            S.useEffect(() => {
              !a && !t && i(!1);
            }, [t, a]),
            n
          );
        }
        const fl = (0, R.PA)((a) => {
            const { appid_or_vanity_str: t } = a,
              n = new k.b(D.UF.CLANSTEAMID),
              i = J.ac.GetClanInfoByClanAccountID(n.GetAccountID()),
              l = ae.Uq.GetTotalStats(n);
            return (0, e.jsxs)("div", {
              className: f().EventDashboardHeader,
              children: [
                (0, e.jsx)(ue.xL, { identifier: t }),
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
                      children: (0, e.jsx)(pe.N_, {
                        className: (0, j.A)(f().Button, f().Primary),
                        to: se.GY.Create(t),
                        onClick: () => M.mh.ResetModel(),
                        children: (0, s.we)("#EventDisplay_CreateNewEvent"),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().EventDashboardStatsCtn,
                  children: (0, e.jsx)(tt, {
                    summary: l.m_stats,
                    clanSteamID: n,
                    bIsAllowedInLibrary: i == null ? void 0 : i.is_ogg,
                  }),
                }),
              ],
            });
          }),
          ci = (0, Ya.L)(Sl);
        var xl = u(85122),
          bl = u(77477),
          jl = u(57161),
          Cl = u(30825),
          ui = u(58483),
          wl = u(98112),
          Dl = u(78745),
          yl = Object.defineProperty,
          Tl = Object.getOwnPropertyDescriptor,
          Il = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Tl(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && yl(t, n, l), l;
          };
        let Tn = class extends S.Component {
          constructor() {
            super(...arguments),
              (this.m_clanSteamID = new k.b(D.UF.CLANSTEAMID));
          }
          componentDidMount() {
            M.mh.GetEditModel() &&
              this.props.mode === "view" &&
              M.mh.GetEditModel().ClearDirty();
          }
          componentDidUpdate(a) {
            M.mh.GetEditModel() &&
              this.props.mode === "view" &&
              M.mh.GetEditModel().ClearDirty();
          }
          render() {
            const { mode: a } = this.props;
            if (a === "view") {
              let t = M.mh.GetEditModel().GetEventModel(),
                n = (0, G.sfN)(D.TS.LANGUAGE);
              return t.BHasSaleEnabled()
                ? (0, e.jsx)(je.tH, {
                    children: (0, e.jsx)(Dl._, {
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
                          partnerEventStore: M.mh,
                        }),
                        otherEventRow: (0, e.jsx)(Cl.r, {
                          clanAccountID: t.clanSteamID.GetAccountID(),
                          trackingLocation: wl.Tc.My,
                          gidAnnouncement: t.AnnouncementGID,
                          partnerEventStore: M.Av,
                          bViewAllShowInfiniteScroll: !t.BIsOGGEvent(),
                        }),
                      }),
                  });
            } else
              return (0, e.jsx)(bl.l, {
                editModel: M.mh.GetEditModel(),
                appid_or_vanity_str:
                  this.props.match.params.appid_or_vanity_str,
                gid: this.props.match.params.gid,
                bDisplaySale: a === "previewsale",
              });
          }
        };
        Tn = Il([R.PA], Tn);
        const In = (0, Ya.L)(Tn);
        var la = u(33512),
          hi = u(21438),
          Al = u(39093),
          ra = u(62616),
          B = u(65946);
        const Gl = 0,
          Ka = 1,
          Za = 2;
        var Ll = ((a) => (
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
          ))(Ll || {}),
          Nl = ((a) => (
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
          ))(Nl || {}),
          rt = u(60480),
          _i = u(1880),
          Ml = u(64641),
          da = u.n(Ml),
          ca = u(16369),
          An = u(95682),
          We = u(79573),
          Bl = u(25359),
          be = u.n(Bl),
          Gn = u(21418),
          Ln = u(47689),
          Ol = u(26759),
          mi = u(46066),
          Qt = u(54016),
          He = u(29630);
        const Ca = (a) => {
            let t = null;
            a.artworkType === "capsule"
              ? (t = (0, e.jsxs)(S.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_capsule_1"),
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${He.zU.GetBaseURL()}31721797/2ef00d65527edf9aecdaddee086b0f5ee0cc2fe6.jpg`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${He.zU.GetBaseURL()}7614223/fe3aa1776d96e4aa215edbdacc363a9ed005213e.png`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${He.zU.GetBaseURL()}27000850/dc17534edaabe8d351fdfb1c6186c4eb3e637c8d.png`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${He.zU.GetBaseURL()}31013613/a98ecca7730e4857cb5f83e50f3304ce13bf56bf.jpg`,
                        }),
                      ],
                    }),
                  ],
                }))
              : a.artworkType === "background"
                ? (t = (0, e.jsxs)(S.Fragment, {
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, s.we)("#selectimage_tip_background_1"),
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${He.zU.GetBaseURL()}3703047/72feb03fa4eced13596f0ff7b9ec434865cb73e4.png`,
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${He.zU.GetBaseURL()}5193306/62436147b454715822a198a2767e5c7a8560617e.jpg`,
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${He.zU.GetBaseURL()}31721797/77cbe3f768e16b149c78f127b09c047826646ba5.png`,
                      }),
                    ],
                  }))
                : a.artworkType === "spotlight" &&
                  (t = (0, e.jsx)(S.Fragment, {
                    children: (0, e.jsxs)("div", {
                      className: be().AssetExampleSpotlightCtn,
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
              (0, U.pg)(
                (0, e.jsx)(F.o0, {
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
                    (0, e.jsx)(p.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: () => n(t),
                      children: (0, s.we)("#EventEditor_ViewExamples"),
                    }),
                    (0, e.jsx)(p.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: (i) =>
                        (0, L.EP)(
                          i,
                          "https://partner.steamgames.com/doc/store/assets/eventassets",
                        ),
                      children: (0, s.we)("#EventEditor_Learn_More"),
                    }),
                  ],
                })
              : null;
          },
          qa = (a) => {
            let t = null;
            a.artworkType === "sale_header"
              ? (t = (0, e.jsxs)(S.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_sale_header_1"),
                    }),
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_sale_header_2"),
                    }),
                    (0, e.jsxs)("div", {
                      className: be().SaleHeaderExampleCtn,
                      children: [
                        (0, e.jsxs)("div", {
                          className: be().SaleHeaderExampleCol,
                          children: [
                            (0, e.jsx)("a", {
                              href: `${He.zU.GetBaseURL()}4/a7dcfaf476e3351bb34b8af3e423a6e6cd652a04.jpg`,
                              target: "_blank",
                              children: (0, e.jsx)("img", {
                                src: `${He.zU.GetBaseURL()}4/a7dcfaf476e3351bb34b8af3e423a6e6cd652a04.jpg`,
                              }),
                            }),
                            (0, e.jsx)("a", {
                              href: `${He.zU.GetBaseURL()}4/502e9a6d3bb266b4274a946192bb960f15e1d136.png`,
                              target: "_blank",
                              children: (0, e.jsx)("img", {
                                src: `${He.zU.GetBaseURL()}4/502e9a6d3bb266b4274a946192bb960f15e1d136.png`,
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: be().SaleHeaderExampleCol,
                          children: (0, e.jsx)("a", {
                            href: `${He.zU.GetBaseURL()}4/0b6edf0575cc418172fc9d7614ae5c2881d1dcc0.jpg`,
                            target: "_blank",
                            children: (0, e.jsx)("img", {
                              src: `${He.zU.GetBaseURL()}4/0b6edf0575cc418172fc9d7614ae5c2881d1dcc0.jpg`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }))
              : a.artworkType === "product_banner" &&
                (t = (0, e.jsxs)(S.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)(
                        "#selectimage_tip_sale_product_banner",
                      ),
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${He.zU.GetBaseURL()}4/8298b4d6ebf6f6dd2355054431d339ec9dcafdef.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${He.zU.GetBaseURL()}4/cc803d270bf7f47ee508bbadf14577bbfe5f6500.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${He.zU.GetBaseURL()}4/309cb650beb92e00ae352710387832aea78433ef.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${He.zU.GetBaseURL()}4/ecd819245dd4aca57aed76f714a28b2356ad90f2.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${He.zU.GetBaseURL()}4/7375e5c0f2adb7241870acfa931e167ff13c669f.gif`,
                    }),
                  ],
                }));
            const n = (i) => {
              (0, U.pg)(
                (0, e.jsx)(F.o0, {
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
                    (0, e.jsx)(p.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: () => n(t),
                      children: (0, s.we)("#EventEditor_ViewExamples"),
                    }),
                    (0, e.jsx)(p.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: (i) =>
                        (0, L.EP)(
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
        var dt = u(80738),
          Pl = u(42440),
          Rl = u(83402),
          kl = u(93153),
          ua = u(61819),
          wt = u(36631),
          wa = u(46777),
          Yt = u(91512),
          kt = u(18197),
          Fl = u(8982);
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
            g = (0, B.q3)(() => n.jsondata.contenthub_override_section_styles),
            _ = (0, B.q3)(() => n.jsondata.contenthub_override_tab_styles),
            v = (0, B.q3)(() => n.jsondata.contenthub_override_tab_definitions),
            h = (0, B.q3)(
              () => n.jsondata.contenthub_override_item_browser_flavors,
            ),
            x = (0, B.q3)(
              () => n.jsondata.contenthub_override_item_browser_facets,
            ),
            b = (0, B.q3)(() => n.jsondata.contenthub_disable_overrides),
            E = (0, B.q3)(
              () => n.jsondata.contenthub_dlc_for_your_flavor_override,
            ),
            [y, P] = (0, S.useState)(() => {
              var N;
              return (
                ((N = n.jsondata.prune_list_optin_name) == null
                  ? void 0
                  : N.length) > 0
              );
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.JU, {
                style: { marginTop: "0px" },
                children: "Content Hub Specification",
              }),
              (0, e.jsx)(p.Yh, {
                label: "Auto update vanity URL based on configured content hub",
                checked: i,
                onChange: (N) => {
                  (n.jsondata.bAutoUpdateVanityURLForContentHub = N),
                    N && (0, kt.sL)(n.GetContentHub(), t),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "This is an individual content hub...",
                tooltip:
                  "If checked, this sale page will be used to render only a specific content hub. Check this if you are defining tabs/merchandising for some specific hub, or if you're defining a theme sale.",
                checked: l,
                onChange: (N) => {
                  (n.jsondata.sale_defines_specific_contenthub = N || void 0),
                    n.jsondata.bAutoUpdateVanityURLForContentHub &&
                      (0, kt.sL)(n.GetContentHub(), t),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              l && (0, e.jsx)(zl, { ...a }),
              (0, e.jsx)(p.Yh, {
                label: "This is a limited time sale event",
                tooltip:
                  "If checked, this sale page will be used when rendering content hubs only during the time period specified in the Options tab of the sale editor. Check this if you are defining a takeover for a seasonal sale, or if you're defining a theme sale.",
                checked: o,
                onChange: (N) => {
                  (n.jsondata.sale_defines_temporary_contenthub = N || void 0),
                    n.jsondata.bAutoUpdateVanityURLForContentHub &&
                      (0, kt.sL)(n.GetContentHub(), t),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.JU, {
                style: { marginTop: "16px" },
                children: "App Inclusion",
              }),
              (0, e.jsx)(p.Yh, {
                label: "Show discounted (and free-to-play) items only",
                checked: r,
                onChange: (N) => {
                  (n.jsondata.content_hub_discounted_only = N),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Include/exclude items based on registration state... ",
                tooltip:
                  "If checked, this hub will include opted-in games and exclude pruned out games from the selected opt-in event. Typically used when defining a theme sale.",
                checked: y,
                onChange: (N) => {
                  P(N),
                    N || (n.jsondata.prune_list_optin_name = void 0),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              y && (0, e.jsx)(Hl, { ...a }),
              (0, e.jsx)(p.JU, {
                style: { marginTop: "16px" },
                children: "Overrides",
              }),
              (0, e.jsx)(p.Yh, {
                label: "Show restricted-width title and main carousel",
                checked: d,
                onChange: (N) => {
                  (n.jsondata.content_hub_restricted_width = N),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override artwork",
                tooltip:
                  "If checked, use artwork (background, fonts, colors, etc.) from this sale page instead of the artwork defined in the sale page it inherits from.",
                checked: c,
                onChange: (N) => {
                  (n.jsondata.contenthub_override_artwork = N),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override section styles",
                tooltip:
                  "If checked, for every section that exists in this sale page and the parent sale page, use section styles (colors, etc.) from this sale page instead of from the parent.",
                checked: g,
                onChange: (N) => {
                  (n.jsondata.contenthub_override_section_styles = N),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override tab styles",
                tooltip:
                  "If checked, and a tabs section exists in this sale page and the parent sale page, use tab styles (colors, fonts, etc.) from this sale page instead of from the parent.",
                checked: _,
                onChange: (N) => {
                  (n.jsondata.contenthub_override_tab_styles = N),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override tab definitions",
                tooltip:
                  "If checked, and a tabs section exists in this sale page and the parent sale page, use the tab definitions (names, filters, etc.) from this sale page instead of from the parent.",
                checked: v,
                onChange: (N) => {
                  (n.jsondata.contenthub_override_tab_definitions = N),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override item browser flavor tabs",
                tooltip:
                  "If checked, and an item browser section exists in this sale page and the parent sale page, use the flavor definitions (e.g. Popular, Recently Released, etc.) from this sale page instead of from the parent.",
                checked: h,
                onChange: (N) => {
                  (n.jsondata.contenthub_override_item_browser_flavors = N),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label:
                  "Ignore item browser tab overrides during sale takeovers",
                checked: m,
                onChange: (N) => {
                  (n.jsondata.ignore_item_browser_overrides = N),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override item browser facets",
                tooltip:
                  "If checked, and an item browser section exists in this sale page and the parent sale page, use the facet menu from this sale page instead of from the parent.",
                checked: x,
                onChange: (N) => {
                  (n.jsondata.contenthub_override_item_browser_facets = N),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Disable override logic",
                tooltip:
                  "If checked, the sections defined in this sale page will be used as-is, instead of being combined with parent sale pages via the override logic.",
                checked: b,
                onChange: (N) => {
                  (n.jsondata.contenthub_disable_overrides = N),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(Fl.x, {
                strFlavor: E || "popular",
                fnSetFlavor: (N) => {
                  n.jsondata.contenthub_dlc_for_your_flavor_override = N;
                },
                strLabelOverride: "Override DLC For You filter/sort",
              }),
              (0, e.jsx)(Vl, { ...a }),
            ],
          });
        }
        function zl(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, B.q3)(() => n.GetContentHubType()),
            l = (0, B.q3)(() => n.GetContentHubCategory()),
            o = (0, B.q3)(() => n.GetContentHubTag()),
            { contentHubNames: r } = (0, Rl._)(),
            d = (0, S.useMemo)(
              () => (r ? r.hubtypes.map((g) => ({ value: g, label: g })) : []),
              [r],
            ),
            m = (0, S.useMemo)(
              () =>
                r
                  ? Array.from(r.categories.keys()).map((g) => ({
                      value: g,
                      label: `${r.categories.get(g)} (${g})`,
                    }))
                  : [],
              [r],
            ),
            c = (0, S.useMemo)(
              () =>
                r
                  ? Array.from(r.tags.keys()).map((g) => ({
                      value: `${g}`,
                      label: `${r.tags.get(g)} (${g})`,
                    }))
                  : [],
              [r],
            );
          return (0, e.jsxs)("div", {
            style: { marginLeft: "32px", marginRight: "32px" },
            children: [
              (0, e.jsx)(p.JU, {
                children: (0, s.we)("#Sale_BrowseSection_ContentHubType"),
              }),
              (0, e.jsx)("div", {
                style: { marginBottom: "12px" },
                children: (0, e.jsx)(ua.Ay, {
                  isSearchable: !0,
                  className: "react-select-container",
                  classNamePrefix: "react-select",
                  isDisabled: !d,
                  options: d,
                  value: d == null ? void 0 : d.find((g) => g.value === i),
                  onChange: (g) => {
                    (n.jsondata.source_content_hub = {
                      type: g.value,
                      category: g.value === "category" ? l : void 0,
                      tagid: g.value === "tags" ? o : void 0,
                    }),
                      t.SetDirty(C.IQ.jsondata_sales);
                  },
                }),
              }),
              i === "category" &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(p.JU, {
                      children: (0, s.we)(
                        "#Sale_BrowseSection_ContentHubCategory",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      style: { marginBottom: "12px" },
                      children: (0, e.jsx)(ua.Ay, {
                        isSearchable: !0,
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isDisabled: !m,
                        options: m,
                        value:
                          m == null ? void 0 : m.find((g) => g.value === l),
                        onChange: (g) => {
                          (n.jsondata.source_content_hub = {
                            type: i,
                            category: g == null ? void 0 : g.value,
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
                    (0, e.jsx)(p.JU, {
                      children: (0, s.we)("#Sale_BrowseSection_ContentHubTag"),
                    }),
                    (0, e.jsx)("div", {
                      style: { marginBottom: "12px" },
                      children: (0, e.jsx)(ua.Ay, {
                        isSearchable: !0,
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isDisabled: !c,
                        options: c,
                        value:
                          c == null
                            ? void 0
                            : c.find((g) => Number(g.value) === o),
                        onChange: (g) => {
                          (n.jsondata.source_content_hub = {
                            type: i,
                            tagid: Number(g == null ? void 0 : g.value),
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
        function Hl(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, B.q3)(() => n.jsondata.prune_list_optin_name),
            l = (0, B.q3)(() => n.jsondata.optin_only),
            { rgOptIns: o } = (0, kl.Zs)(),
            r = (0, S.useMemo)(
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
              (0, e.jsx)(p.JU, { children: "Opt-In Event" }),
              (0, e.jsxs)("div", {
                style: { marginBottom: "12px" },
                children: [
                  (0, e.jsx)(ua.Ay, {
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
                  (0, e.jsx)(p.Yh, {
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
                  (0, e.jsx)(p.JU, {
                    style: { marginTop: "16px" },
                    children: "Section Layout",
                  }),
                  (0, e.jsx)(Yt.A, {
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
                  (0, e.jsx)(p.$n, {
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
            g = (0, S.useMemo)(
              () =>
                !i && l && l.contenthub_section_groups
                  ? l.contenthub_section_groups.map((v) => ({
                      data: v.name,
                      label: v.name,
                    }))
                  : [],
              [l, i],
            ),
            _ = [
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
                          (0, e.jsx)(p.pd, {
                            label: "Name",
                            value: r,
                            onChange: (v) => {
                              (n.name = v.target.value), o();
                            },
                          }),
                          (0, e.jsx)(p.pd, {
                            label: "Description",
                            value: d,
                            onChange: (v) => {
                              (n.description = v.target.value), o();
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
                              (0, e.jsx)(p.JU, {
                                children: "section group inherited from parent",
                              }),
                              (0, e.jsx)(p.m, {
                                rgOptions: g,
                                selectedOption: r,
                                onChange: (v) => {
                                  (n.name = v.data), o();
                                },
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            style: { flexGrow: 1, marginLeft: "4px" },
                            children: [
                              (0, e.jsx)(p.JU, { children: "Override Type" }),
                              (0, e.jsx)(p.m, {
                                rgOptions: _,
                                selectedOption: c,
                                onChange: (v) => {
                                  (n.override_type = v.data), o();
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
                      (0, e.jsx)(p.JU, {
                        children: "Locally Defined Sections To Display",
                      }),
                      (0, e.jsx)(Yt.A, {
                        items: m,
                        onDelete: (v) => {
                          (n.sections = [
                            ...n.sections.slice(0, v),
                            ...n.sections.slice(v + 1),
                          ]),
                            o();
                        },
                        onReorder: () => {
                          o();
                        },
                        render: (v) =>
                          (0, e.jsx)(Ql, {
                            editModel: t,
                            sectionRef: v,
                            onChange: o,
                          }),
                      }),
                      (0, e.jsx)(p.$n, {
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
            r = (0, wt.yD)(),
            d = o.map((c, g) => ({
              data: c.unique_id,
              label: (0, wa.h_)(
                r.eLocation,
                c,
                (0, G.sfN)(D.TS.LANGUAGE),
                t.GetEventModel(),
                g,
              ),
            })),
            m = (0, B.q3)(() => n.sectionid);
          return (0, e.jsx)("div", {
            style: { width: "100%" },
            children: (0, e.jsx)(p.m, {
              rgOptions: d,
              selectedOption: m,
              onChange: (c) => {
                (n.sectionid = c.data), i();
              },
            }),
          });
        }
        var Da = u(76846),
          Yl = u(52695);
        function Jl(a) {
          const { model: t, fnOnDirty: n } = a,
            { openColorPicker: i } = (0, Da.p)(),
            [l, o] = (0, B.q3)(() => [
              t.sale_background_color,
              t.sale_background_repeat,
            ]);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().FlexRowContainer, be().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: be().OptionCtn,
                children: [
                  (0, e.jsx)(p.JU, {
                    children: (0, s.we)("#Sale_Section_Background_Color"),
                  }),
                  (0, e.jsxs)("div", {
                    className: be().ButtonRow,
                    children: [
                      (0, e.jsx)(p.$n, {
                        className: be().BackgroundColorBtn,
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
                      (0, e.jsx)(p.$n, {
                        className: be().BackgroundColorResetBtn,
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
                className: be().OptionCtn,
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
        var ha = u(73593);
        function Kl(a) {
          const { strArrowColor: t, fnUpdateArrowColor: n, arrowStyle: i } = a,
            { openColorPicker: l } = (0, Da.p)(),
            [o, r] = S.useState(t == null);
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(p.$n, {
              className: be().BackgroundColorBtn,
              onClick: (d) => l(d, { color: t, onChange: n }),
              children: [
                (0, e.jsx)(ha.m, {
                  direction: "left",
                  arrowFill: t,
                  arrowStyle: i,
                }),
                (0, s.we)("#EventEditor_BG_Arrow_Color"),
                (0, e.jsx)($.o, {
                  tooltip: (0, s.we)("#EventEditor_BG_Arrow_Color_ttip"),
                }),
                (0, e.jsx)(ha.m, {
                  direction: "right",
                  arrowFill: t,
                  arrowStyle: i,
                }),
              ],
            }),
          });
        }
        function pi(a) {
          const { label: t, fnUpdateColor: n, strColorToChange: i } = a,
            { openColorPicker: l } = (0, Da.p)();
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(p.$n, {
              className: be().BackgroundColorBtn,
              onClick: (o) => l(o, { color: i, onChange: n }),
              children: [
                t,
                (0, e.jsx)($.o, {
                  tooltip: (0, s.we)("#EventEditor_BG_Arrow_Color_ttip"),
                }),
                (0, e.jsx)(ha.U, { ...a, bIsActive: !1 }),
                (0, e.jsx)(ha.U, { ...a, bIsActive: !0 }),
                (0, e.jsx)(ha.U, { ...a, bIsActive: !1 }),
                (0, e.jsx)(ha.U, { ...a, bIsActive: !1 }),
              ],
            }),
          });
        }
        var Dt = u(34452);
        function Zl(a) {
          return (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)(ql, { ...a }), (0, e.jsx)(Xl, { ...a })],
          });
        }
        function ql(a) {
          const { model: t, fnOnDirty: n } = a,
            [i, l] = (0, B.q3)(() => [
              t.sale_carousel_arrow_color,
              t.sale_carousel_arrow_style || Dt.C.k_ECutArrowStyle,
            ]),
            o = (0, S.useMemo)(() => {
              const r = [];
              return (
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_CutArrowStyles"),
                  data: Dt.C.k_ECutArrowStyle,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_DoubleArrowStyles"),
                  data: Dt.C.k_EDoubleArrowStyle,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_ChevronStyles"),
                  data: Dt.C.k_EThickChevron,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_FlatArrowStyles"),
                  data: Dt.C.k_EFilledArrow,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_PointyArrowStyles"),
                  data: Dt.C.k_EPointyArrow,
                }),
                r
              );
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().FlexRowContainer, be().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: be().OptionCtn,
                children: [
                  (0, e.jsx)(p.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_Colors"),
                  }),
                  (0, e.jsx)(Kl, {
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
                className: be().OptionCtn,
                children: [
                  (0, e.jsx)(p.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_ArrowStyles"),
                  }),
                  (0, e.jsx)(p.m, {
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
              t.sale_carousel_breadcrumb_style || Dt.m.k_EPillCrumb,
            ]),
            r = (0, S.useMemo)(() => {
              const d = [];
              return (
                d.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_PillStyles",
                  ),
                  data: Dt.m.k_EPillCrumb,
                }),
                d.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_CircularStyles",
                  ),
                  data: Dt.m.k_ECircularCrumb,
                }),
                d.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_SquareStyles",
                  ),
                  data: Dt.m.k_ESquareCrumb,
                }),
                d
              );
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().FlexRowContainer, be().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: be().OptionCtn,
                children: [
                  (0, e.jsx)(p.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_BreadCrumb"),
                  }),
                  (0, e.jsx)(pi, {
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
                  (0, e.jsx)(pi, {
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
                className: be().OptionCtn,
                children: [
                  (0, e.jsx)(p.JU, {
                    children: (0, s.we)(
                      "#Sale_Section_Carousel_BreadCrumbStyles",
                    ),
                  }),
                  (0, e.jsx)(p.m, {
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
        var $l = u(13854);
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
          return (0, e.jsxs)(ve.Eb, {
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
                          (0, e.jsx)(p.pd, {
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
              (0, e.jsx)(p.Yh, {
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
              (0, e.jsx)(Zl, {
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
            n = S.createRef(),
            [i, l, o, r] = (0, B.q3)(() => [
              $l.OQ(t.GetNumberOfDays(), 5, 14),
              t.GetNumSalesBackgroundHeader(),
              t.GetEventStartTime(),
              t.GetNumberOfDays(),
            ]),
            d = S.useCallback(() => {
              const _ = [
                { label: (0, s.we)("#Sale_HeaderArtwork_Single"), data: 1 },
              ];
              if (i > 1)
                for (let v = 2; v <= i; v++)
                  _.push({
                    label: (0, s.we)("#Sale_HeaderArtwork_Multi_Amount", v),
                    data: v,
                  });
              return _;
            }, [i]),
            m = S.useCallback(
              (_) => {
                const v = _.data;
                l !== v &&
                  (0, U.pg)(
                    (0, e.jsx)(F.o0, {
                      strTitle: (0, s.we)("#Button_Confirm"),
                      strDescription: (0, s.we)("#Sale_HeaderArtwork_Warning"),
                      onOK: () => t.SetNumSalesBackgroundHeader(v),
                      onCancel: () => {
                        var h;
                        return (h = n == null ? void 0 : n.current) == null
                          ? void 0
                          : h.SetSelectedOption(l);
                      },
                    }),
                    window,
                  );
              },
              [t, l, n],
            ),
            c = S.useCallback(() => {
              const _ = [];
              for (let v = 0; v < l; v++) {
                let x = o + 86400 * v;
                const E = {
                  label: (0, s.PP)(
                    v + 1 == l
                      ? "#Sale_HeaderArtwork_DayTimeOnward"
                      : "#Sale_HeaderArtwork_DayTime",
                    v + 1,
                    (0, e.jsx)(_t.K4, { dateAndTime: x, bSingleLine: !0 }),
                    (0, e.jsx)(_t.K4, {
                      dateAndTime: x + 86400,
                      bSingleLine: !0,
                    }),
                  ),
                  data: v,
                };
                _.push(E);
              }
              return _;
            }, [l, o]),
            g = (_) => {
              t.GetEventModel().m_overrideCurrentDay = _.data;
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.m, {
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
                strClassName: be().SaleDaySelection,
              }),
              l > 1 &&
                (0, e.jsx)(p.m, {
                  strDropDownClassName: f().DropDownScroll,
                  label: (0, s.we)("#Sale_HeaderArtwork_EditDay"),
                  tooltip: (0, s.we)("#Sale_HeaderArtwork_EditDay_hint"),
                  rgOptions: c(),
                  selectedOption: t.GetEventModel().GetDayIndexFromEventStart(),
                  onChange: g,
                  bDisableMouseOverlay: !0,
                  contextMenuPositionOptions: {
                    bDisableMouseOverlay: !0,
                    bDisablePopTop: !0,
                  },
                  strClassName: be().SaleDaySelection,
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
          return (0, e.jsxs)(ve.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, j.A)(f().ValveOnlyBackground, f().SaleEditorSpacing),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Sale_BackgroundVideo_Title"),
              }),
              (0, s.we)("#Sale_BackgroundVideo_Instructions"),
              (0, e.jsx)(p.pd, {
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
              (0, e.jsx)(p.pd, {
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
        var Jt = u(56330),
          sr = u(52500),
          ye = u(10206),
          ir = u(2259),
          or = u(26917),
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
              (0, te.Gn)(this, { m_mapVisibleSections: te.sH });
          }
        }
        const vi = (0, S.createContext)(null);
        function ur(a) {
          const [t] = (0, S.useState)(() => new cr());
          return (0, e.jsx)(vi.Provider, { value: t, children: a.children });
        }
        function gi() {
          const a = (0, S.useContext)(vi);
          if (!a)
            throw new Error(
              "useVisibleSectionStore must be used within a VisibleSectionStoreProvider",
            );
          return a;
        }
        function Kt(a) {
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
            je.tH,
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
            g = d == G.ajI,
            _ = (0, ve.Dd)(o.GetClanSteamID(), !0),
            v = (q, le = !1) => (0, dt.Nx)(q, le),
            h = (q, le = !1) => (0, dt.mi)(q, le),
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
            E =
              ((i = o.GetEventModel().jsondata.localized_sale_logo) == null
                ? void 0
                : i.length) || 0,
            y =
              ((l = o.GetEventModel().jsondata.localized_sale_overlay) == null
                ? void 0
                : l.length) || 0,
            P = (0, sr.b)(o.GetEventModel().jsondata.sale_logo_url),
            N = [];
          return (
            g
              ? N.push("sale_header")
              : (N.push(
                  "sale_header",
                  "product_banner",
                  "product_mobile_banner",
                  "sale_logo",
                ),
                _ && N.push("sale_overlay")),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(An.t, {
                  clanSteamID: o.GetClanSteamID(),
                  rgSupportArtwork: N,
                  fnSetImageURL: o.SetImageURL,
                  bAllowPreviousClanImageSelection: !0,
                  rgRealmList: o.GetIncludedRealmList(),
                }),
                (0, e.jsx)(Kt, {
                  strSectionId: "SalePageEdit_SaleBgImg",
                  children: (0, e.jsx)(We.it, {
                    id: "SalePageEdit_SaleBgImg",
                    appid: r,
                    eventModel: o.GetEventModel(),
                    clanSteamID: o.GetClanSteamID(),
                    title: (0, s.we)("#EventEditor_ArtworkType_sale_header"),
                    artworkType: "sale_header",
                    elEventArtworkExample: (0, e.jsx)(qa, {
                      artworkType: "sale_header",
                    }),
                    bIsMinimized: v("sale_header"),
                    fnLangHasData: (q) => o.BHasImage("sale_header", q),
                    fnSetImageURL: o.SetImageURL,
                    fnGetImageHashAndExt: o.GetImageHashAndExt,
                    fnToggleMinimize: () => h("sale_header"),
                    partnerEventStore: M.mh,
                    elAdditionalControls: (0, e.jsx)(tr, { editModel: o }),
                  }),
                }),
                !g &&
                  (0, e.jsx)(Kt, {
                    strSectionId: "SalePageEdit_SaleLogo",
                    children: (0, e.jsxs)("div", {
                      className: ye.SalePageLogoCtn,
                      children: [
                        (0, e.jsx)(We.it, {
                          id: "SalePageEdit_SaleLogo",
                          clanSteamID: o.GetClanSteamID(),
                          eventModel: o.GetEventModel(),
                          appid: r,
                          title: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo",
                          ),
                          artworkType: "sale_logo",
                          elEventArtworkExample: (0, e.jsx)(qa, {
                            artworkType: "sale_logo",
                          }),
                          bIsMinimized: v("sale_logo"),
                          fnLangHasData: (q) => o.BHasImage("sale_logo", q),
                          fnSetImageURL: o.SetImageURL,
                          fnGetImageHashAndExt: o.GetImageHashAndExt,
                          fnToggleMinimize: () => h("sale_logo"),
                          partnerEventStore: M.mh,
                          fnRemoveAllArtwork:
                            E == 0
                              ? void 0
                              : () => {
                                  (0, te.h5)(() => {
                                    (o.GetEventModel().jsondata.localized_sale_logo =
                                      []),
                                      o.SetDirty(C.IQ.jsondata_sales);
                                  });
                                },
                        }),
                        (0, e.jsx)(p.pd, {
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
                          onChange: (q) => {
                            (0, te.h5)(() => {
                              (o.GetEventModel().jsondata.sale_logo_url =
                                q.target.value),
                                o.SetDirty(C.IQ.jsondata_sales);
                            });
                          },
                        }),
                        P &&
                          (0, e.jsx)("div", {
                            className: Jt.ErrorStylesWithIcon,
                            children: P,
                          }),
                      ],
                    }),
                  }),
                !g &&
                  (0, e.jsx)(Kt, {
                    strSectionId: "SalePageEdit_SaleBanner",
                    children: (0, e.jsx)(We.it, {
                      id: "SalePageEdit_SaleBanner",
                      clanSteamID: o.GetClanSteamID(),
                      eventModel: o.GetEventModel(),
                      appid: r,
                      fnLangHasData: (q) => o.BHasImage("product_banner", q),
                      fnSetImageURL: o.SetImageURL,
                      fnGetImageHashAndExt: o.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_sale_product_banner",
                      ),
                      artworkType: "product_banner",
                      bIsMinimized: v("product_banner"),
                      fnToggleMinimize: () => h("product_banner"),
                      strWarning: m
                        ? (0, s.we)("#Sale_BannerVisibility_Warning")
                        : void 0,
                      elEventArtworkExample: (0, e.jsx)(qa, {
                        artworkType: "product_banner",
                      }),
                      partnerEventStore: M.mh,
                      fnRemoveAllArtwork:
                        x == 0
                          ? void 0
                          : () => {
                              (0, te.h5)(() => {
                                (o.GetEventModel().jsondata.localized_sale_product_banner =
                                  []),
                                  o.SetDirty(C.IQ.jsondata_sales);
                              });
                            },
                    }),
                  }),
                !g &&
                  (0, e.jsx)(Kt, {
                    strSectionId: "SalePageEdit_SaleMobileBanner",
                    children: (0, e.jsx)(We.it, {
                      id: "SalePageEdit_SaleMobileBanner",
                      clanSteamID: o.GetClanSteamID(),
                      eventModel: o.GetEventModel(),
                      appid: r,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_sale_product_mobile_banner",
                      ),
                      artworkType: "product_mobile_banner",
                      bIsMinimized: v("product_mobile_banner"),
                      fnToggleMinimize: () => h("product_mobile_banner"),
                      fnLangHasData: (q) =>
                        o.BHasImage("product_mobile_banner", q),
                      fnSetImageURL: o.SetImageURL,
                      fnGetImageHashAndExt: o.GetImageHashAndExt,
                      partnerEventStore: M.mh,
                      strWarning: c
                        ? (0, s.we)("#Sale_BannerVisibility_Warning")
                        : void 0,
                      fnRemoveAllArtwork:
                        b == 0
                          ? void 0
                          : () => {
                              (0, te.h5)(() => {
                                (o.GetEventModel().jsondata.localized_sale_product_mobile_banner =
                                  []),
                                  o.SetDirty(C.IQ.jsondata_sales);
                              });
                            },
                    }),
                  }),
                !g &&
                  (0, e.jsx)(Kt, {
                    strSectionId: "SalePageEdit_SaleOverlay",
                    children: (0, e.jsx)(ve.Eb, {
                      clanSteamID: o.GetClanSteamID(),
                      requireAdmin: !0,
                      className: ye.SalePageLogoCtn,
                      children: (0, e.jsx)(We.it, {
                        id: "SalePageEdit_SaleOverlay",
                        clanSteamID: o.GetClanSteamID(),
                        eventModel: o.GetEventModel(),
                        appid: r,
                        title: (0, s.we)(
                          "#EventEditor_ArtworkType_sale_overlay",
                        ),
                        artworkType: "sale_overlay",
                        elEventArtworkExample: (0, e.jsx)(qa, {
                          artworkType: "sale_overlay",
                        }),
                        bIsMinimized: v("sale_overlay"),
                        fnToggleMinimize: () => h("sale_overlay"),
                        fnLangHasData: (q) => o.BHasImage("sale_overlay", q),
                        fnSetImageURL: o.SetImageURL,
                        fnGetImageHashAndExt: o.GetImageHashAndExt,
                        partnerEventStore: M.mh,
                        fnRemoveAllArtwork:
                          y == 0
                            ? void 0
                            : () => {
                                (0, te.h5)(() => {
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
        var Xa = u(50109),
          Te = u(8681),
          St = u(73191),
          pt = u(11833),
          ya = u(88942),
          bt = u(98609);
        async function _r(a) {
          var t, n;
          const i = { accountid: a, origin: self.origin };
          let l = `${bt.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
          (0, D.yK)() == "partner" &&
            (l = `${bt.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
          const o = await oe().get(l, { params: i, withCredentials: !0 });
          if (
            !o ||
            o.status != 200 ||
            ((t = o.data) == null ? void 0 : t.success) != Xe.R ||
            !((n = o.data) != null && n.partners)
          )
            throw `Load single user partner info failed ${((0, Me.H))(o).strErrorMsg}`;
          return o.data.partners;
        }
        function Si(a) {
          const { data: t, isLoading: n } = (0, ya.I)({
            queryKey: ["PartnerInfoList", a],
            queryFn: () => _r(a),
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
            d = (0, S.useMemo)(
              () =>
                (r == null ? void 0 : r.length) > 0
                  ? r.map((m) => ({ label: m.partner_name, data: m.partnerid }))
                  : null,
              [r],
            );
          return d == null
            ? null
            : (0, e.jsx)(p.m, {
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
              (0, e.jsx)(p.m, {
                rgOptions: i,
                strDropDownClassName: W.DropDownScroll,
                strDropDownMenuCtnClass: W.DropDownScroll,
                strDropDownItemClassName: W.DropDownScrollItem,
                selectedOption: t,
                onChange: (l) => n(l.data),
                contextMenuPositionOptions: { bDisablePopTop: !0 },
              }),
            ],
          });
        }
        function xi(a) {
          const { clanSteamID: t, gidClanEvent: n } = a,
            { bLoading: i } = (0, Te.g7)(t.GetAccountID(), n);
          return i
            ? (0, e.jsx)(H.t, { string: (0, s.we)("#Loading") })
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
              fnSetExternalSaleEventType: g,
            } = (0, Te.g7)(t.GetAccountID(), n),
            [_, v] = (0, S.useState)(m ? l : !0),
            [h, x] = (0, S.useState)(r);
          return (
            (0, ie.hL)(i, () => {
              o(_), d(h);
            }),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(p.Yh, {
                  checked: i ? _ : m ? l : !0,
                  onChange: (b) => {
                    v(b), i || o(b);
                  },
                  label:
                    "Require Approval by Valve Admin in order to publish this sales events",
                  tooltip:
                    "They will see a warning indicating they cannot publish until Valve approves the page. Approval is done by Valve Admin in the same place.",
                }),
                (0, e.jsx)(p.Yh, {
                  checked: i ? h : r,
                  onChange: (b) => {
                    x(b), i || d(b);
                  },
                  label: (0, s.we)("#SalePresented_By_Admin"),
                  tooltip: (0, s.we)("#SalePresneted_By_Admin_ttip"),
                }),
                (0, e.jsx)(fi, {
                  strExternalSaleEventType: c,
                  fnSetExternalSaleEventType: g,
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
              bPublishRequiresValveApproval: g,
              nAccountApproved: _,
              bRequiresHostDisclaimer: v,
              fnSetStoreRequireHostDisclaimer: h,
            } = (0, Te.g7)(i.GetAccountID(), l),
            { oPrivateData: x } = (0, Te.fj)(i.GetAccountID(), l),
            b = ji(i, l);
          if (m)
            return (
              b &&
              (0, e.jsx)("div", {
                className: (0, j.A)(
                  pt.ApprovalRequiredCtn,
                  pt.PublishWithRestrictions,
                ),
                children: (0, e.jsx)("div", {
                  className: pt.Left,
                  children: (0, e.jsx)(Ci, { clanSteamID: i, gidClanEvent: l }),
                }),
              })
            );
          if (!c && g && !_) {
            const E = (N) => {
                (0, U.pg)(
                  (0, e.jsx)(Sr, { clanSteamID: i, gidClanEvent: l }),
                  (0, Q.uX)(N),
                );
              },
              y = (N) => {
                (0, U.pg)(
                  (0, e.jsx)(vr, { clanSteamID: i, gidClanEvent: l }),
                  (0, Q.uX)(N),
                );
              },
              P =
                (t = x == null ? void 0 : x.jsonData) == null
                  ? void 0
                  : t.strSalePageApprovalHelpTicketReferenceCode;
            return (0, e.jsxs)("div", {
              className: (0, j.A)(
                pt.ApprovalRequiredCtn,
                P ? pt.PendingApproval : "",
              ),
              children: [
                (0, e.jsx)("div", {
                  className: pt.Left,
                  children: P
                    ? (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: pt.Title,
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
                            className: pt.Title,
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
                  className: pt.Right,
                  children: [
                    P
                      ? (0, e.jsx)(L.uU, {
                          href: `${D.TS.HELP_BASE_URL}en/wizard/HelpRequest/${((n = x == null ? void 0 : x.jsonData)) == null ? void 0 : n.strSalePageApprovalHelpTicketReferenceCode}`,
                          className: (0, j.A)(W.EditPreviewButton, W.Button),
                          bForceExternal: !0,
                          children: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Link",
                          ),
                        })
                      : (0, e.jsx)(De.he, {
                          toolTipContent: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Approval_ttip",
                          ),
                          children: (0, e.jsx)(p.jn, {
                            onClick: E,
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Request_Button",
                            ),
                          }),
                        }),
                    (0, e.jsxs)(ve.Eb, {
                      clanSteamID: i,
                      children: [
                        (0, e.jsxs)(p.$n, {
                          onClick: y,
                          children: [
                            "Approve... ",
                            (0, e.jsx)($.o, {
                              tooltip: (0, s.we)(
                                "#EventEditor_SaleValveApproval_Admin_Tooltip",
                              ),
                            }),
                          ],
                        }),
                        (o == null ? void 0 : o.length) > 0 &&
                          (0, e.jsx)(p.$n, {
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
          } else if (!c && g && _)
            return (0, e.jsx)("div", {
              className: (0, j.A)(pt.ApprovalRequiredCtn, pt.Approved),
              children: (0, e.jsxs)("div", {
                className: pt.Left,
                children: [
                  (0, e.jsxs)("div", {
                    className: pt.Title,
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
          } = (0, Te.fp)(a.GetAccountID(), t);
          return !n && (!i || !l || !o);
        }
        function Ci(a) {
          const { clanSteamID: t, gidClanEvent: n } = a,
            i = ji(t, n),
            {
              bAllowAddingAppsPackagesBundles: l,
              bAllowChangingVanityURL: o,
              bAllowMakingChangesToSalePage: r,
            } = (0, Te.fp)(t.GetAccountID(), n);
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
                            (0, e.jsx)($.o, {
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
                            (0, e.jsx)($.o, {
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
              fnSetAllowMakingChangesToSalePage: g,
            } = (0, Te.fp)(t.GetAccountID(), n);
          return i && l
            ? (0, e.jsx)(H.t, {
                string: (0, s.we)("#Loading"),
                size: "medium",
                position: "center",
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h3", { children: "Post Approval Controls" }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(p.Yh, {
                    checked: o,
                    onChange: c,
                    label: "Allow Updating Vanity URL After Approval",
                    tooltip:
                      "Unset when we plan to feature with a direct link to the landing page",
                  }),
                  (0, e.jsx)(p.Yh, {
                    checked: r,
                    onChange: m,
                    label: "Allow Adding Apps/Packages/Bundles after Approval",
                    tooltip:
                      "Use when we agreed to a specific app/package/bundle list for them to use.",
                  }),
                  (0, e.jsx)(p.Yh, {
                    checked: d,
                    onChange: g,
                    label:
                      "Allow Updating layout/artwork/ordering/carousels After Approval",
                    tooltip:
                      "Use when we don't have full trust that they won't change the art or featuring in a way that breaks what we reviewed and agreed upon",
                  }),
                ],
              });
        }
        function pr(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: i } = a,
            l = "Update Post Review Editability",
            [o, r, d] = (0, Te.hr)(),
            m = (0, St.vs)();
          return m.bLoading
            ? (0, e.jsx)(St.Hh, { state: m, strDialogTitle: l, closeModal: i })
            : (0, e.jsx)(F.o0, {
                strTitle: l,
                onOK: () => {
                  m.fnSetLoading(!0),
                    d(n)
                      .then((c) => {
                        c == Xe.R
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
                          m.fnSetStrError((0, Me.H)(c).strErrorMsg);
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
            { fnSetAccountApproved: l } = (0, Te.g7)(t.GetAccountID(), n),
            [o, r, d] = (0, Te.hr)(),
            m = "APPROVE SALE PAGE?",
            c = (0, St.vs)();
          if (c.bLoading)
            return (0, e.jsx)(St.Hh, {
              state: c,
              strDialogTitle: m,
              closeModal: i,
            });
          const g = () => {
            c.fnSetLoading(!0),
              l(D.iA.accountid),
              d(n)
                .then((_) => {
                  _ == Xe.R
                    ? i()
                    : (r(),
                      c.fnSetError(!0),
                      c.fnSetStrError("Failed to update Private Data: " + _));
                })
                .catch((_) => {
                  r(),
                    c.fnSetError(!0),
                    c.fnSetStrError((0, Me.H)(_).strErrorMsg);
                });
          };
          return (0, e.jsx)(F.o0, {
            strTitle: m,
            strDescription:
              "This will remove the publishing block and allow the partner to publish anytime afterward. As a reminder, these are the things we should check before approving:",
            onOK: g,
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
            let r = await oe().post(l, o, { withCredentials: !0 });
            return !r || r.status != 200 || r.data.success != Xe.R
              ? (console.error(
                  "CreateReviewRequestTicket failed.",
                  r && (0, Me.H)(r),
                ),
                r.data.success == Xe.Ze ? r.data : null)
              : r.data;
          } catch (r) {
            const d = (0, Me.H)(r);
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
            } = (0, Te.fj)(t.GetAccountID(), n),
            [d, m] = (0, S.useState)(""),
            [c, g] = (0, S.useState)(null),
            _ = (0, St.vs)();
          return _.bLoading
            ? (0, e.jsx)(St.Hh, {
                state: _,
                strDialogTitle: (0, s.we)(
                  "#EventEditor_SaleValveApproval_Request_Approval",
                ),
                closeModal: i,
              })
            : (0, e.jsxs)(F.o0, {
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
                  _.fnSetLoading(!0),
                    gr(t, n, d, c)
                      .then((v) => {
                        v && v.success == Xe.R
                          ? (r({
                              ...o,
                              strSalePageApprovalHelpTicketReferenceCode:
                                v.reference_code,
                            }),
                            _.fnSetSuccess(!0),
                            _.fnSetElSuccess(
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#EventEditor_SaleValveApproval_Request_Success",
                                    ),
                                  }),
                                  (0, e.jsx)(L.uU, {
                                    href: v.help_url,
                                    bForceExternal: !0,
                                    children: (0, s.we)(
                                      "#EventEditor_SaleValveApproval_Request_Link",
                                    ),
                                  }),
                                ],
                              }),
                            ))
                          : v.success == Xe.Ze
                            ? (_.fnSetError(!0),
                              _.fnSetStrError(
                                (0, s.we)(
                                  "#EventEditor_SaleValveApproval_Request_DuplicateError",
                                ),
                              ))
                            : (_.fnSetError(!0),
                              _.fnSetStrError(
                                (0, s.we)(
                                  "#EventEditor_SaleValveApproval_Request_Error",
                                ),
                              ));
                      })
                      .catch((v) => {
                        _.fnSetError(!0),
                          _.fnSetStrError(
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
                  (0, e.jsx)(p.pd, {
                    type: "text",
                    label: (0, s.we)(
                      "#EventEditor_SaleValveApproval_Request_InputText",
                    ),
                    onChange: (v) => m(v.currentTarget.value || ""),
                    value: d,
                  }),
                  (0, e.jsx)(Ei, {
                    accountID: D.iA.accountid,
                    partnerID: c,
                    fnSetPartnerID: g,
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
        var Er = u(74535),
          yt = u(36118),
          Be = u(22230);
        function fr(a) {
          const t = M.mh.GetEditModel(),
            {
              bLoading: n,
              nAcceptingGuidelineAccount: i,
              bRequiresHostDisclaimer: l,
            } = (0, Te.lA)(t.GetClanAccountID(), t.GetGID()),
            [o, r] = (0, B.q3)(() => [
              t.BHasSaleEnabled(),
              t.GetEventModel().jsondata.sale_presenters,
            ]),
            d = (0, ve.Dd)(t.GetClanSteamID(), !0);
          if (!o) return (0, e.jsx)(e.Fragment, {});
          const m = !!i;
          return d ||
            (m && (!l || (r == null ? void 0 : r.length) >= 1)) ||
            t.GetEventType() == G.ajI
            ? (0, e.jsx)(e.Fragment, { children: a.children })
            : n
              ? (0, e.jsx)(H.t, {})
              : m
                ? (0, e.jsxs)("div", {
                    className: Be.GuidelinesNoticeCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: Be.Intro,
                        children: [
                          (0, e.jsx)("div", {
                            className: Be.State,
                            children: (0, e.jsx)(yt.Jlk, {}),
                          }),
                          (0, e.jsx)("div", {
                            className: Be.Description,
                            children: (0, s.we)(
                              "#EventDisclaimer_GuidelineAccepted",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: Be.Intro,
                        children: [
                          (0, e.jsx)("div", {
                            className: Be.State,
                            children: "\xA0",
                          }),
                          (0, e.jsxs)("div", {
                            className: Be.Description,
                            children: [
                              (0, s.we)("#EventDisclaimer_desc"),
                              (0, e.jsx)("div", {
                                className: Be.OpenGuidelinesBtnCtn,
                                children: (0, e.jsx)(p.jn, {
                                  onClick: (c) =>
                                    (0, U.pg)((0, e.jsx)(Nn, {}), (0, Q.uX)(c)),
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
                    className: Be.GuidelinesNoticeCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: Be.Intro,
                        children: [" ", (0, s.we)("#EventSaleGuidelines_desc")],
                      }),
                      (0, e.jsx)("div", {
                        className: Be.OpenGuidelinesBtnCtn,
                        children: (0, e.jsx)(p.jn, {
                          onClick: (c) =>
                            (0, U.pg)(
                              (0, e.jsx)(Ti, { bCheckListReadOnly: !1 }),
                              (0, Q.uX)(c),
                            ),
                          children: (0, s.we)("#EventSaleGuidelines_Review"),
                        }),
                      }),
                    ],
                  });
        }
        function xr(a) {
          const t = M.mh.GetEditModel(),
            { bLoading: n, nAcceptingGuidelineAccount: i } = (0, Te.lA)(
              t.GetClanAccountID(),
              t.GetGID(),
            ),
            l = (0, ve.Dd)(t.GetClanSteamID(), !0),
            { bVisible: o } = (0, J._5)(t.GetEventModel(), l),
            { bVisible: r } = (0, J.Ao)(t.GetEventModel());
          return n || o || r
            ? null
            : l
              ? (0, e.jsx)(Cr, {})
              : i
                ? (0, e.jsx)(Di, {})
                : null;
        }
        function Di() {
          const a = M.mh.GetEditModel(),
            {
              rtAcceptanceTime: t,
              strSalePageApprovalHelpTicketReferenceCode: n,
            } = (0, Te.lA)(a.GetClanAccountID(), a.GetGID()),
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
            className: Be.GuidelinesDoneCtn,
            children: [
              (0, e.jsxs)("div", {
                className: Be.Text,
                children: [
                  (0, s.PP)(
                    "#EventSaleGuidelines_AlreadyReviewed",
                    (0, e.jsx)(_t.K4, { dateAndTime: t, bSingleLine: !0 }),
                  ),
                  !i &&
                    (0, e.jsxs)("div", {
                      className: Be.OrganizerInfoNeeded,
                      children: [
                        (0, s.we)("#SalePresented_By_Instructions"),
                        " \u{1F846}",
                      ],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: Be.ProcessButtons,
                children: [
                  (0, e.jsx)(p.$n, {
                    onClick: (l) =>
                      (0, U.pg)(
                        (0, e.jsx)(Ti, { bCheckListReadOnly: !0 }),
                        (0, Q.uX)(l),
                      ),
                    children: (0, s.we)("#EventSaleGuidelines_Review"),
                  }),
                  i
                    ? (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)(p.$n, {
                          onClick: (l) =>
                            (0, U.pg)((0, e.jsx)(Nn, {}), (0, Q.uX)(l)),
                          children: (0, s.we)("#EventDisclaimer_button"),
                        }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)(p.jn, {
                          onClick: (l) =>
                            (0, U.pg)((0, e.jsx)(Nn, {}), (0, Q.uX)(l)),
                          children: (0, s.we)("#EventDisclaimer_button_enter"),
                        }),
                      }),
                  !!n &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsx)(p.$n, {
                        onClick: (l) =>
                          (0, L.Id)(
                            l,
                            `${D.TS.HELP_BASE_URL}en/wizard/HelpRequest/${n}`,
                          ),
                        children: (0, s.we)(
                          "#EventEditor_SaleValveApproval_Request_Link",
                        ),
                      }),
                    }),
                  (0, e.jsx)(ve.Eb, {
                    clanSteamID: a.GetClanSteamID(),
                    children: (0, e.jsx)(br, {}),
                  }),
                ],
              }),
            ],
          });
        }
        function br(a) {
          const t = M.mh.GetEditModel(),
            n = t.GetClanAccountID(),
            i = t.GetGID(),
            [l, o, r] = (0, ie.uD)(!1),
            {
              bLoading: d,
              bPublishRequiresValveApproval: m,
              nAccountApproved: c,
              bRequiresHostDisclaimer: g,
              fnSetStoreRequireHostDisclaimer: _,
            } = (0, Te.g7)(n, i);
          return !m || !c
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(p.$n, {
                    onClick: o,
                    children: (0, e.jsx)(De.Gq, {
                      toolTipContent:
                        "Make the partner re-request reviewing the sale page because we are allowing them to make further changes",
                      children: (0, e.jsx)("span", {
                        children: "Remove Reviewed Stats",
                      }),
                    }),
                  }),
                  (0, e.jsx)(F.EN, {
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
            [o, r, d] = (0, Te.hr)(),
            { fnRemoveApprovalAccount: m } = (0, Te.g7)(t.GetAccountID(), n),
            {
              fnSetAllowAddingAppsPackagesBundles: c,
              fnSetAllowChangingVanityURL: g,
              fnSetAllowMakingChangesToSalePage: _,
            } = (0, Te.fp)(t.GetAccountID(), n),
            v = (0, St.vs)();
          if (v.bLoading)
            return (0, e.jsx)(St.Hh, {
              state: v,
              strDialogTitle: l,
              closeModal: i,
            });
          const h = () => {
            v.fnSetLoading(!0),
              c(!0),
              g(!0),
              _(!0),
              m(D.iA.accountid),
              d(n)
                .then((x) => {
                  x == Xe.R
                    ? i()
                    : (r(),
                      v.fnSetError(!0),
                      v.fnSetStrError("Failed to update Private Data: " + x));
                })
                .catch((x) => {
                  r(),
                    v.fnSetError(!0),
                    v.fnSetStrError((0, Me.H)(x).strErrorMsg);
                });
          };
          return (0, e.jsx)(F.o0, {
            strTitle: l,
            strDescription:
              "The sale is currently approved. This will revert this state and will require the sale operator to request permissions again. Are you sure?",
            onOK: h,
            strOKButtonText: "Yes, Approve",
            bDisableBackgroundDismiss: !0,
            closeModal: i,
            onCancel: r,
            bOKDisabled: !!v.bError,
            children: (0, e.jsx)("div", {
              children:
                "This will also permit them to make any changes to the sale page",
            }),
          });
        }
        function yi(a) {
          const t = M.mh.GetEditModel(),
            { bLoading: n, bPublishRequiresValveApproval: i } = (0, Te.g7)(
              t.GetClanAccountID(),
              t.GetGID(),
            ),
            [l, o] = S.useState(void 0);
          return (
            S.useEffect(() => {
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
          const a = M.mh.GetEditModel(),
            { nAcceptingGuidelineAccount: t } = (0, Te.lA)(
              a.GetClanAccountID(),
              a.GetGID(),
            );
          return Rt.WN.includes(a.GetClanAccountID())
            ? null
            : t
              ? (0, e.jsxs)("div", {
                  className: Be.ValveOnlyGuidelineSummary,
                  children: [
                    (0, e.jsx)(Di, {}),
                    (0, e.jsxs)("div", {
                      className: Be.SignedBy,
                      children: [
                        "Accepted by:\xA0",
                        (0, e.jsx)(ls.B, {
                          accountID: t,
                          locToken: "#EventModTile_Signer",
                        }),
                      ],
                    }),
                    (0, e.jsx)(yi, {}),
                  ],
                })
              : (0, e.jsxs)("div", {
                  className: Be.ValveOnlyGuidelineSummary,
                  children: [
                    "The event organizer has not yet accepted the agreements for this sale page. The next time that any non-Valve account attempts to edit this sale, they should be required to accept the agreements.",
                    (0, e.jsx)(yi, {}),
                  ],
                });
        }
        function Ti(a) {
          const { bCheckListReadOnly: t, closeModal: n } = a,
            i = M.mh.GetEditModel(),
            {
              nAcceptingGuidelineAccount: l,
              strPrimaryContactName: o,
              strPrimaryContactEmail: r,
              fnSetAcceptingGuideLine: d,
              fnSetContactEmailAndName: m,
              strExternalSaleEventType: c,
            } = (0, Te.lA)(i.GetClanAccountID(), i.GetGID()),
            [g, _, v] = (0, Te.hr)(),
            h = !!l,
            [x, b] = S.useState(h),
            [E, y] = S.useState(h),
            [P, N] = S.useState(h),
            q = `${D.TS.PARTNER_BASE_URL}doc/store/promo/${c}_page`,
            le = (0, s.we)(`#EventSaleGuidelines_doc_${c}`),
            [fe, me] = S.useState(o || ""),
            [$e, ht] = S.useState(r || ""),
            [et, vt] = S.useState(!1),
            [Qe, Ot] = S.useState(null),
            jt = x && E && P && fe.length > 0 && $e.length > 0;
          return (0, e.jsx)(F.o0, {
            strTitle: (0, s.we)("#EventSaleGuideLines_title"),
            strDescription: (0, s.we)("#EventSaleGuidelines_desc"),
            bOKDisabled: !jt || et,
            onOK: () => {
              t || d(D.iA.accountid),
                m(fe, $e),
                !t && i.GetGID()
                  ? (vt(!0),
                    v(i.GetGID())
                      .then(n)
                      .catch((nt) => {
                        Ot((0, Me.H)(nt).strErrorMsg);
                      }))
                  : n && n();
            },
            onCancel: n,
            closeModal: n,
            children:
              et || Qe
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      et &&
                        (0, e.jsx)(H.t, {
                          string: (0, s.we)("#Saving"),
                          size: "medium",
                          position: "center",
                        }),
                      !!Qe && (0, e.jsx)("div", { children: Qe }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    className: Be.AgreementsCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)(p.Yh, {
                            label: (0, s.we)("#EventSaleGuidelines_rule_5"),
                            checked: x,
                            onChange: b,
                            disabled: t,
                          }),
                          (0, e.jsx)(p.Yh, {
                            label: (0, s.we)("#EventSaleGuidelines_rule_1"),
                            checked: E,
                            onChange: y,
                            disabled: t,
                          }),
                          (0, e.jsx)(p.Yh, {
                            label: (0, e.jsx)("span", {
                              style: { display: "inline" },
                              children: (0, s.PP)(
                                "#EventSaleGuidelines_rule_6",
                                (0, e.jsx)("a", {
                                  href: q,
                                  target: "_blank",
                                  children: le,
                                }),
                              ),
                            }),
                            checked: P,
                            onChange: N,
                            disabled: t,
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: Be.ContactSectionCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Be.SectionTitle,
                            children: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_desc",
                            ),
                          }),
                          (0, e.jsx)(p.pd, {
                            placeholder: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_name",
                            ),
                            value: fe,
                            onChange: (nt) => me(nt.currentTarget.value),
                          }),
                          (0, e.jsx)(p.pd, {
                            placeholder: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_email",
                            ),
                            value: $e,
                            onChange: (nt) => ht(nt.currentTarget.value),
                          }),
                        ],
                      }),
                    ],
                  }),
          });
        }
        function Nn(a) {
          var t;
          const { closeModal: n } = a,
            i = M.mh.GetEditModel(),
            [l, o] = S.useState(!1),
            r = (0, B.q3)(
              () => i.GetEventModel().jsondata.sale_presenters || [],
            ),
            [d, m] = S.useState(r);
          return (0, e.jsxs)(F.o0, {
            strTitle: (0, s.we)("#EventDisclaimer_title"),
            strDescription: (0, s.we)("#EventDisclaimer_desc_details"),
            onCancel: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled:
              !l &&
              (d.length == 0 ||
                ((t = d[0].url) == null ? void 0 : t.length) == 0 ||
                d.some((c) => !p.pd.validateUrl(c.url)) ||
                d.some((c) => {
                  var g;
                  return !(
                    ((g = c.localized_presenter_name[G.Bhc]) == null
                      ? void 0
                      : g.length) > 0
                  );
                })),
            onOK: () => {
              (i.GetEventModel().jsondata.sale_presenters = d),
                i.SetDirty(C.IQ.jsondata_sales),
                n();
            },
            children: [
              (0, e.jsx)(Qt.$A, { editModel: i, eInitLangLanguage: G.Bhc }),
              (0, e.jsx)(Yt.A, {
                items: d,
                onDelete: (c) => m(d.length == 1 ? [] : [...d.splice(c, 1)]),
                onReorder: () => m([...d]),
                render: (c, g) =>
                  (0, e.jsx)(wr, {
                    presenter: c,
                    setPresenter: (_) => {
                      (d[g] = { ..._ }), m([...d]);
                    },
                  }),
              }),
              (0, e.jsx)(p.$n, {
                onClick: () => {
                  let c = Math.floor(1 + Math.random() * 1e5);
                  for (; d && d.some((g) => g.unique_id === c); )
                    c = Math.floor(1 + Math.random() * 1e5);
                  m([
                    ...d,
                    {
                      unique_id: c,
                      localized_presenter_name: new Array(G.bP9),
                      url: "",
                    },
                  ]);
                },
                children: (0, s.we)("#EventDisclaimer_add"),
              }),
              (d == null ? void 0 : d.length) > 0 &&
                (0, e.jsxs)("div", {
                  className: Be.PresenterPreviewCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: Be.PresenterPreviewDesc,
                      children: (0, s.we)("#EventDisclaimer_preview"),
                    }),
                    (0, e.jsx)(Er.W, { rgPresenters: d }),
                  ],
                }),
              (0, e.jsx)(ve.Eb, {
                clanSteamID: i.GetClanSteamID(),
                children: (0, e.jsx)(p.$n, {
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
            [i] = (0, B.q3)(() => [Xa.O.Get().GetCurEditLanguage()]);
          return (0, e.jsxs)("div", {
            className: Be.PresenterInfoCtn,
            children: [
              (0, e.jsx)(p.pd, {
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
              (0, e.jsx)(p.pd, {
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
        var Dr = u(34336),
          yr = Object.defineProperty,
          Tr = (a, t, n) =>
            t in a
              ? yr(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          $a = (a, t, n) => Tr(a, typeof t != "symbol" ? t + "" : t, n),
          Ta = ((a) => (
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
          ))(Ta || {}),
          Ir = ((a) => (
            (a.ManagerUsers = "pubrightmanageusers"),
            (a.ActualAuthority = "pubrightactualauthority"),
            (a.ViewFinancials = "pubrightviewfinancials"),
            (a.ApproveWalletFunding = "pubrightapprovewalletfunding"),
            (a.ManageLicensedSites = "pubrightmanagelicensedsites"),
            a
          ))(Ir || {});
        const Zt = class za {
          static ConstructAppRightsMap() {
            const t = new Map();
            return za.AppRights.forEach((n) => t.set(n.token, n)), t;
          }
          static ConstructPubRightsMap() {
            const t = new Map();
            return za.PubRights.forEach((n) => t.set(n.token, n)), t;
          }
          static GetAppRightFlags(t) {
            let n = 0;
            return (
              t.forEach((i) => {
                n |= za.MapAppRights.get(i).flag;
              }),
              n
            );
          }
          static GetPublisherRightFlags(t) {
            let n = 0;
            return (
              t.forEach((i) => {
                n |= za.MapPubRights.get(i).flag;
              }),
              n
            );
          }
        };
        $a(Zt, "AppRights", [
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
          $a(Zt, "MapAppRights", Zt.ConstructAppRightsMap()),
          $a(Zt, "PubRights", [
            { flag: 1, token: "pubrightmanageusers" },
            { flag: 2, token: "pubrightactualauthority" },
            { flag: 4, token: "pubrightviewfinancials" },
            { flag: 8, token: "pubrightapprovewalletfunding" },
            { flag: 16, token: "pubrightmanagelicensedsites" },
          ]),
          $a(Zt, "MapPubRights", Zt.ConstructPubRightsMap());
        let Mn = Zt;
        var Ar = u(39905),
          Gr = u(49236);
        function Lr(a) {
          const { editModel: t } = a,
            [n] = (0, B.q3)(() => [
              t.GetEventModel().jsondata.sale_named_section_background_styles,
            ]),
            [i, l, o] = (0, ie.uD)(),
            [r, d] = (0, S.useState)(void 0);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.$n, {
                onClick: l,
                children: (0, s.we)("#Sale_ManageBackgroundStyles"),
              }),
              (0, e.jsx)(F.EN, {
                active: i,
                children: (0, e.jsxs)(F.o0, {
                  strTitle: (0, s.we)("#Sale_ManageBackgroundStyles"),
                  strDescription: (0, s.we)(
                    "#Sale_ManageBackgroundStyles_desc",
                  ),
                  bAlertDialog: !0,
                  closeModal: o,
                  children: [
                    (0, e.jsx)(p.$n, {
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
                          (0, e.jsx)(p.JU, {
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
        function Nr(a) {
          const { salePage: t, updateLandingPage: n } = a,
            i = M.mh.GetEditModel(),
            [l, o] = (0, B.q3)(() => [
              i.GetEventModel().jsondata.sale_opt_in_page_name,
              i.GetEventModel().jsondata.sale_show_creator,
            ]);
          return (0, e.jsxs)("div", {
            className: ye.Columns,
            children: [
              (0, e.jsxs)("div", {
                className: ye.LeftCol,
                children: [
                  t && (0, e.jsx)(Rr, {}),
                  n && (0, e.jsx)(kr, {}),
                  t && (0, e.jsx)(Pr, {}),
                ],
              }),
              (0, e.jsxs)("div", {
                className: ye.RightCol,
                children: [
                  t && (0, e.jsx)(Or, {}),
                  t &&
                    (0, e.jsx)(ve.Eb, {
                      clanSteamID: i.GetClanSteamID(),
                      className: W.EditPreviewButton,
                      children: (0, e.jsx)(p.pd, {
                        type: "text",
                        label: (0, s.we)("#Sale_OptInPageName"),
                        tooltip: (0, s.we)("#Sale_OptInPageName_ttip"),
                        value: l,
                        onChange: (r) => {
                          (0, te.h5)(() => {
                            (i.GetEventModel().jsondata.sale_opt_in_page_name =
                              r.target.value),
                              i.SetDirty(C.IQ.jsondata_sales);
                          });
                        },
                      }),
                    }),
                  t &&
                    (0, e.jsx)(De.he, {
                      toolTipContent: (0, s.we)("#Sale_ShowCreatorHome_ttip"),
                      direction: "top",
                      children: (0, e.jsx)("div", {
                        className: W.InputBorder,
                        children: (0, e.jsx)(p.RF, {
                          onChange: (r) => {
                            (0, te.h5)(() => {
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
                    (0, e.jsxs)(ve.Eb, {
                      clanSteamID: i.GetClanSteamID(),
                      children: [
                        (0, e.jsx)(Br, {}),
                        (0, e.jsx)(Mr, {}),
                        (0, e.jsx)(De.he, {
                          toolTipContent:
                            "Update what a partner is able to change after a sale page is reviewed by Valve",
                          children: (0, e.jsx)(p.$n, {
                            onClick: (r) =>
                              (0, U.pg)(
                                (0, e.jsx)(pr, {
                                  clanSteamID: i.GetClanSteamID(),
                                  gidClanEvent: i.GetGID(),
                                }),
                                (0, Q.uX)(r),
                              ),
                            children: "Update Sale Page Editability",
                          }),
                        }),
                      ],
                    }),
                  (0, e.jsx)(ve.Eb, {
                    clanSteamID: i.GetClanSteamID(),
                    children: (0, e.jsx)(Dr.i, { editModel: i }),
                  }),
                  (0, e.jsx)(ve.Eb, {
                    clanSteamID: i.GetClanSteamID(),
                    children: (0, e.jsx)(Lr, { editModel: i }),
                  }),
                ],
              }),
            ],
          });
        }
        function Mr(a) {
          const t = M.mh.GetEditModel();
          return (0, e.jsx)(De.he, {
            toolTipContent:
              "Deep discount sale events are curated by Valve to promote successful older games, typically with a 90% discount",
            direction: "top",
            children: (0, e.jsx)("div", {
              className: W.InputBorder,
              children: (0, e.jsx)(p.RF, {
                onChange: (n) => t.SetTag("vo_deep_discount_sale", n),
                checked: t.GetEventModel().BHasTag("vo_deep_discount_sale"),
                label: "(VO) This is a deep discount event?",
              }),
            }),
          });
        }
        function Br(a) {
          var t, n;
          const i = M.mh.GetEditModel(),
            [l, o, r, d] = (0, B.q3)(() => {
              var v, h, x;
              return [
                (v = i.GetEventModel().jsondata.ownership_requirement_info) ==
                null
                  ? void 0
                  : v.bLockedToAppOwners,
                (h = i.GetEventModel().jsondata.ownership_requirement_info) ==
                null
                  ? void 0
                  : h.strRedirectURL,
                i.GetEventModel().jsondata.sale_use_subscription_layout,
                (x = i.GetEventModel().jsondata.app_right_requirement_info) ==
                null
                  ? void 0
                  : x.bLockedToPartnerAppRights,
              ];
            }),
            [m, c] = S.useState(
              i.GetEventModel().BIsLockedToGameOwners()
                ? (t = i.GetEventModel().GetRequiredAppIDs()) == null
                  ? void 0
                  : t.join(",")
                : "",
            ),
            [g, _] = S.useState(
              i.GetEventModel().BIsLockedToGameOwners()
                ? (n = i.GetEventModel().GetRequiredPackageIDs()) == null
                  ? void 0
                  : n.join(",")
                : "",
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(De.he, {
                toolTipContent: (0, s.we)("#Sale_OwnershipRestrictions_ttip"),
                direction: "top",
                children: (0, e.jsx)("div", {
                  className: W.InputBorder,
                  children: (0, e.jsx)(p.RF, {
                    onChange: (v) => {
                      (0, te.h5)(() => {
                        const h = i.GetEventModel().jsondata;
                        h.ownership_requirement_info
                          ? (h.ownership_requirement_info.bLockedToAppOwners =
                              v)
                          : (h.ownership_requirement_info = {
                              bLockedToAppOwners: v,
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
                (0, e.jsxs)(S.Fragment, {
                  children: [
                    (0, e.jsx)(p.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_RequiredApps"),
                      tooltip: (0, s.we)("#Sale_RequiredApps_ttip"),
                      onChange: (v) => {
                        m != v.target.value &&
                          (c(v.target.value),
                          (0, te.h5)(() => {
                            const h = i.GetEventModel().GetRequiredAppIDs(),
                              x = v.target.value
                                .split(",")
                                .map(Number)
                                .filter((b) => b > 0);
                            h.splice(0, h.length, ...x),
                              i.SetDirty(C.IQ.jsondata_sales);
                          }));
                      },
                      value: m,
                    }),
                    (0, e.jsx)(p.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_RequiredPackages"),
                      tooltip: (0, s.we)("#Sale_RequiredPackages_ttip"),
                      onChange: (v) => {
                        g != v.target.value &&
                          (_(v.target.value),
                          (0, te.h5)(() => {
                            const h = i.GetEventModel().GetRequiredPackageIDs(),
                              x = v.target.value
                                .split(",")
                                .map(Number)
                                .filter((b) => b > 0);
                            h.splice(0, h.length, ...x),
                              i.SetDirty(C.IQ.jsondata_sales);
                          }));
                      },
                      value: g,
                    }),
                    (0, e.jsx)(p.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_OwnershipLockRedirect"),
                      tooltip: (0, s.we)("#Sale_OwnershipLockRedirect_ttip"),
                      onChange: (v) => {
                        o != v.target.value &&
                          (0, te.h5)(() => {
                            (i.GetEventModel().jsondata.ownership_requirement_info.strRedirectURL =
                              v.target.value),
                              i.SetDirty(C.IQ.jsondata_sales);
                          });
                      },
                      value: o,
                    }),
                    (0, e.jsx)(ve.Eb, {
                      clanSteamID: i.GetClanSteamID(),
                      children: (0, e.jsx)(p.Yh, {
                        onChange: (v) => {
                          (0, te.h5)(() => {
                            (i.GetEventModel().jsondata.sale_use_subscription_layout =
                              v),
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
              (0, e.jsx)(De.he, {
                toolTipContent: (0, s.we)(
                  "#Sale_PartnerAppEditRestrictions_ttip",
                ),
                direction: "top",
                children: (0, e.jsx)("div", {
                  className: W.InputBorder,
                  children: (0, e.jsx)(p.RF, {
                    onChange: (v) => {
                      (0, te.h5)(() => {
                        const h = i.GetEventModel().jsondata;
                        h.app_right_requirement_info
                          ? (h.app_right_requirement_info.bLockedToPartnerAppRights =
                              v)
                          : (h.app_right_requirement_info = {
                              bLockedToPartnerAppRights: v,
                              nAppRightFlag: Mn.GetAppRightFlags([Ta.EditInfo]),
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
          const t = M.mh.GetEditModel(),
            n = (0, B.q3)(
              () => t.GetEventModel().jsondata.sale_discount_event_id,
            ),
            i = async () => {
              const l = new Set(),
                o = new Array();
              t.GetEventModel().jsondata.sale_sections.forEach((g) => {
                g.capsules.forEach(async (_) => {
                  _.type === "bundle"
                    ? o.push(mt.A.Get().QueueBundleRequest(Number(_.id), {}))
                    : _.type === "sub" &&
                      o.push(mt.A.Get().QueuePackageRequest(Number(_.id), {}));
                });
              }),
                await Promise.all(o),
                t.GetEventModel().jsondata.sale_sections.forEach((g) => {
                  g.capsules.forEach(async (_) => {
                    if (_.type === "bundle" || _.type === "sub") {
                      const v =
                        _.type === "bundle"
                          ? mt.A.Get().GetBundle(Number(_.id))
                          : mt.A.Get().GetPackage(Number(_.id));
                      v && v.GetIncludedAppIDs().forEach((h) => l.add(h));
                    } else l.add(Number(_.id));
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
                  await oe().post(
                    D.TS.COMMUNITY_BASE_URL +
                      "actions/ajaxcreateupdatediscountevent",
                    d,
                    { withCredentials: !0 },
                  )
                ).data.discountid ||
                t.GetEventModel().jsondata.sale_discount_event_id;
              t.GetEventModel().jsondata.sale_discount_event_id ||
                (t.GetEventModel().jsondata.sale_discount_event_id = c),
                (0, U.pg)(
                  (0, e.jsx)(ja.t, {
                    editModel: t,
                    bSkipChecks: !0,
                    partnerEventEditorStore: M.mh,
                    OnSuccess: () => {
                      window.open(
                        D.TS.PARTNER_BASE_URL + "admin/editdiscountevent/" + c,
                      );
                    },
                  }),
                  window,
                );
            };
          return (0, e.jsxs)(ve.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: W.EditPreviewButton,
            children: [
              (0, e.jsxs)("div", {
                className: W.EventEditorTextTitle,
                children: [
                  (0, s.we)("#Sale_CreateUpdateDiscountEventTitle"),
                  (0, e.jsx)($.o, {
                    tooltip: (0, s.we)(
                      "#Sale_CreateUpdateDiscountEventTitle_ttip",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)(p.jn, {
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
          const t = M.mh.GetEditModel(),
            [n, i, l, o, r] = (0, B.q3)(() => {
              const g = t.GetEventModel().jsondata;
              return [
                g.sale_section_disable_capitalize,
                g.sale_section_font_size,
                g.sale_font,
                g.sale_font_weight,
                g.sale_associated_advertising_appid,
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
            ].map((g) => ({
              ...g,
              label: (0, e.jsx)("div", {
                style: { ...g.data },
                children: g.label,
              }),
            })),
            m = d.find((g) => g.data.fontFamily == l && g.data.fontWeight == o),
            c = m && m.data;
          return (0, e.jsxs)(ve.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            children: [
              (0, e.jsx)(p.m, {
                label: (0, s.we)("#Sale_SaleFont"),
                tooltip: (0, s.we)("#Sale_SaleFont_ttip"),
                strDropDownClassName: W.DropDownScroll,
                rgOptions: d,
                selectedOption: c,
                onChange: (g) => {
                  (0, te.h5)(() => {
                    (t.GetEventModel().jsondata.sale_font = g.data.fontFamily),
                      (t.GetEventModel().jsondata.sale_font_weight =
                        g.data.fontWeight),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                contextMenuPositionOptions: { bDisablePopTop: !0 },
              }),
              (0, e.jsx)(p.pd, {
                type: "text",
                label: (0, s.we)("#Sale_SectionTitleFontSize"),
                tooltip: (0, s.we)("#Sale_SectionTitleFontSize_ttip"),
                onChange: (g) => {
                  (0, te.h5)(() => {
                    (t.GetEventModel().jsondata.sale_section_font_size = Number(
                      g.target.value,
                    )),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                value: i,
              }),
              (0, e.jsx)(p.Yh, {
                label: (0, s.we)("#Sale_DontCapitalizeSectionTitles"),
                tooltip: (0, s.we)("#Sale_DontCapitalizeSectionTitles_ttip"),
                onChange: (g) => {
                  (0, te.h5)(() => {
                    (t.GetEventModel().jsondata.sale_section_disable_capitalize =
                      g),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                checked: n,
              }),
              (0, e.jsx)(p.pd, {
                type: "number",
                label: (0, s.we)("#Sale_AdvertisingApp_ID"),
                tooltip: (0, s.we)("#Sale_AdvertisingApp_ID_ttip"),
                onChange: (g) => {
                  (0, te.h5)(() => {
                    (t.GetEventModel().jsondata.sale_associated_advertising_appid =
                      Number(g.target.value)),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                value: r,
              }),
            ],
          });
        }
        function Rr(a) {
          const t = M.mh.GetEditModel(),
            { bAllowChangingVanityURL: n, bAllowMakingChangesToSalePage: i } =
              (0, Te.fp)(t.GetClanAccountID(), t.GetGID()),
            [l, o, r] = (0, B.q3)(() => [
              t.GetEventModel().jsondata.sale_vanity_id,
              t.GetEventModel().jsondata
                .sale_vanity_id_valve_approved_for_sale_subpath,
              t.GetEventModel().jsondata.bAutoUpdateVanityURLForContentHub,
            ]),
            { creatorHome: d } = (0, rt.FV)(t.GetClanAccountID());
          let m = null;
          return (
            l && !o
              ? d
                ? (m = d.GetCreatorHomeURL("publisher") + "sale/" + l)
                : (m = `${D.TS.STORE_BASE_URL}curator/${t.GetClanAccountID()}/sale/${l}`)
              : l && o && (m = D.TS.STORE_BASE_URL + "sale/" + l),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(p.pd, {
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
                      className: Jt.ErrorStylesWithIcon,
                      children: (0, s.we)(
                        "#EventEditor_SaleNotReady_SaleVanity_ttip",
                      ),
                    }),
                (0, e.jsx)(ve.Eb, {
                  requireAdmin: !0,
                  clanSteamID: t.GetClanSteamID(),
                  children: (0, e.jsx)(p.Yh, {
                    label: (0, s.we)("#Sale_ValveTopSalePath"),
                    tooltip: (0, s.we)("#Sale_ValveTopSalePath_ttip"),
                    onChange: (c) => {
                      (0, te.h5)(() => {
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
          const t = M.mh.GetEditModel(),
            n = (0, B.q3)(
              () =>
                t.GetEventModel().jsondata.sale_update_landing_page_vanity_id,
            ),
            [i, l] = (0, J.TB)(t.GetClanAccountID()),
            [o] = (0, Se.t7)(l.appid, { include_basic_info: !0 });
          if (i || !o) return;
          const r =
            n != null && n.length ? o.GetStorePageURL() + "/" + n : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.pd, {
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
                    className: Jt.ErrorStylesWithIcon,
                    children: (0, s.we)(
                      "#EventEditor_SaleNotReady_UpdateLandingPage_ttip",
                    ),
                  }),
            ],
          });
        }
        var Ii = u(87426),
          Bn = u(15736);
        function It(a) {
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
            g = (0, B.q3)(() => n && (0, dt.Nx)(t)),
            _ = (0, ve.Dd)(d, m);
          if (d && !_) return null;
          const v = n
            ? (h) => {
                (0, dt.mi)(t), h.preventDefault(), h.stopPropagation();
              }
            : void 0;
          return (0, e.jsx)(Kt, {
            strSectionId: t,
            children: (0, e.jsxs)("div", {
              id: t,
              className: (0, j.A)({
                [ye.SettingCtn]: !0,
                [ye.ValveOnly]: r || !!d,
              }),
              children: [
                (0, e.jsxs)("div", {
                  className: (0, j.A)(ye.Title, n && ye.HasHover),
                  onClick: v,
                  children: [
                    i,
                    o && (0, e.jsx)($.o, { tooltip: o }),
                    !!c &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(Ii.R6, {
                            dataToCopy: Bn.E.k_EventData_SubMenu,
                          }),
                          (0, e.jsx)(Ii.oO, {
                            dataToPaste: Bn.E.k_EventData_SubMenu,
                          }),
                        ],
                      }),
                    n &&
                      (0, e.jsx)(rs.pn, {
                        bIsMinimized: g,
                        fnToggleMinimize: () => (0, dt.mi)(t),
                      }),
                  ],
                }),
                !g && l,
              ],
            }),
          });
        }
        var _a = u(88748);
        function Fr(a) {
          const { editModel: t } = a,
            [n, i, l] = (0, B.q3)(() => [
              t.GetEventModel().BIsNextFest(),
              t.GetEventModel().jsondata.sale_ml_recommender_delay_hours,
              t.GetEventModel().jsondata.sale_ml_recommender_weight_exponent,
            ]);
          return n
            ? (0, e.jsxs)("div", {
                className: ye.SettingCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: ye.Title,
                    children: "Next Fest",
                  }),
                  "For the Live Next Fest event make sure to clone, review and operate the Next Fest event using:",
                  (0, e.jsx)("a", {
                    target: "_blank",
                    href: "https://confluence.valve.org/display/SteamBiz/Next+Fest+Launch+Checklist",
                    children: " Operations Checklist",
                  }),
                  (0, e.jsxs)("div", {
                    className: _a.WarningContainer,
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
                          (0, ee.ye)(o.section_type) && !o.show_as_demos,
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
                          (0, ee.ye)(o.section_type) &&
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
                  (0, e.jsx)(p.pd, {
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
                  (0, e.jsx)(p.pd, {
                    type: "number",
                    mustBeNumeric: !0,
                    rangeMin: -1,
                    label: "Recommendation weight exponent",
                    tooltip:
                      "After the randomization delay, items are shuffled weighted by their ML recommended rank. Higher values keep the top recommendations closer to the front. Leave empty or 0 to use the default of " +
                      ee.ld +
                      ". Set to -1 to disable shuffling and use the exact recommended order.",
                    onChange: (o) => {
                      (t.GetEventModel().jsondata.sale_ml_recommender_weight_exponent =
                        Number(o.target.value)),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                    placeholder: String(ee.ld),
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
              className: _a.Warning,
              children: [
                o(),
                (0, e.jsx)("div", {
                  className: _a.Buttons,
                  children:
                    i &&
                    (0, e.jsx)(p.$n, {
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
                  .map((v, h) =>
                    (0, e.jsx)(
                      "div",
                      {
                        children: (0, e.jsx)(wa.fi, {
                          eventModel: t.GetEventModel(),
                          saleSection: v,
                          editLanguage: t.GetCurEditLanguage(),
                          index: h,
                        }),
                      },
                      v.unique_id,
                    ),
                  )
                  .concat(
                    d.length > m
                      ? [(0, e.jsx)("div", { children: "..." }, "elipses")]
                      : [],
                  ),
              }),
              g = (0, e.jsx)(De.Gq, {
                toolTipContent: c,
                children: (0, e.jsxs)("span", {
                  className: _a.TooltipIndicator,
                  children: [d.length, " sections"],
                }),
              }),
              _ = () => {
                d.forEach(i), t.SetDirty(C.IQ.jsondata_sales);
              };
            return (0, e.jsxs)("div", {
              className: _a.Warning,
              children: [
                o(g),
                (0, e.jsx)("div", {
                  className: _a.Buttons,
                  children:
                    i &&
                    (0, e.jsx)(p.$n, {
                      onClick: () => _(),
                      children: l != null ? l : "Fix it",
                    }),
                }),
              ],
            });
          }),
          zr = (0, R.PA)((a) => {
            var t, n;
            const { editModel: i, fnOnOKCallback: l } = a,
              o = i.GetEventModel(),
              {
                fnSetStorePublishingRequiresValveApproval: r,
                fnSetUserWhoEnabledSalePage: d,
              } = (0, Te.g7)(i.GetClanAccountID(), i.GetGID()),
              [m, c] = S.useState(
                (t = o.jsondata.sale_vanity_id) != null ? t : "",
              ),
              [g] = S.useState(new Qa.lu()),
              _ =
                !bt.iA.is_support &&
                !(
                  (n = rt.pF.GetCreatorHome(i.GetClanSteamID())) != null &&
                  n.BHasClanAccountFlagSet(la.Wv.Mv)
                ),
              v = Math.floor(Date.now() / 1e3),
              h = new Date();
            h.setHours(10), h.setMinutes(0), h.setSeconds(0);
            const x = new Date();
            x.setDate(h.getDate() + 1),
              x.setHours(10),
              x.setMinutes(0),
              x.setSeconds(0);
            const [b, E] = S.useState(
                o.startTime > v ? o.startTime : Math.floor(x.getTime() / 1e3),
              ),
              y = new Date();
            y.setDate(x.getDate() + 1),
              y.setHours(10),
              y.setMinutes(0),
              y.setSeconds(0);
            const [P, N] = S.useState(
                (o == null ? void 0 : o.endTime) > Math.floor(y.getTime() / 1e3)
                  ? o.endTime
                  : Math.floor(y.getTime() / 1e3),
              ),
              q = () => {
                (0, te.h5)(() => {
                  i.SetSaleVanityID(m),
                    i.SetEventStartTime(b),
                    i.SetEventEndTime(P),
                    d(bt.iA.accountid),
                    _ && r(!0),
                    g.Dispatch(),
                    l();
                }),
                  a.closeModal && a.closeModal();
              },
              le = () => {
                (0, te.h5)(() => {
                  (i.GetEventModel().jsondata.bSaleEnabled = !1),
                    i.SetDirty(C.IQ.jsondata_sales);
                }),
                  a.closeModal && a.closeModal();
              },
              fe = m.replace(/[^\w-]/g, "").length > 0 && b && P;
            return (0, e.jsx)(je.tH, {
              children: (0, e.jsx)(F.x_, {
                onEscKeypress: le,
                children: (0, e.jsxs)(p.UC, {
                  children: [
                    (0, e.jsx)(p.Y9, {
                      children: (0, s.we)("#Sale_EnableTitle"),
                    }),
                    (0, e.jsx)(p.nB, {
                      children: (0, e.jsx)(p.a3, {
                        children: (0, e.jsxs)("div", {
                          className: ye.SetupCtn,
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
                            (0, e.jsx)(p.pd, {
                              type: "text",
                              label: (0, s.we)("#Sale_VanityID"),
                              tooltip: (0, s.we)("#Sale_VanityID_ttip"),
                              onChange: (me) => c(me.target.value),
                              value: m,
                            }),
                            (0, e.jsx)(Ae.K, {
                              strDescription: (0, s.we)("#Sale_New_Start"),
                              nEarliestTime: 0,
                              fnGetTimeToUpdate: () => b,
                              fnSetTimeToUpdate: E,
                              fnIsValidDateTime: () => !0,
                              bShowTimeZone: !0,
                            }),
                            (0, e.jsx)(Ae.K, {
                              strDescription: (0, s.we)("#Sale_New_End"),
                              nEarliestTime: 0,
                              fnGetTimeToUpdate: () => P,
                              fnSetTimeToUpdate: N,
                              fnIsValidDateTime: () => P > b,
                              bShowTimeZone: !0,
                            }),
                            (0, e.jsx)(ve.Eb, {
                              clanSteamID: i.GetClanSteamID(),
                              requireAdmin: !0,
                              children: (0, e.jsx)(xi, {
                                clanSteamID: i.GetClanSteamID(),
                                gidClanEvent: i.GetGID(),
                                fnOkCallbackList: g,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsx)(p.wi, {
                      children: (0, e.jsx)(p.CB, {
                        onCancel: le,
                        bOKDisabled: !fe,
                        onOK: q,
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
          Hr = (0, R.PA)((a) => {
            var t;
            const { editModel: n, fnOnOKCallback: i } = a,
              l = n.GetEventModel(),
              [o, r] = S.useState(
                (t = l.jsondata.sale_update_landing_page_vanity_id) != null
                  ? t
                  : "",
              ),
              d = () => {
                (0, te.h5)(() => {
                  n.SetSaleUpdateLandingPageVanityID(o), i();
                }),
                  a.closeModal && a.closeModal();
              },
              m = () => {
                (0, te.h5)(() => {
                  (n.GetEventModel().jsondata.bSaleEnabled = !1),
                    n.SetDirty(C.IQ.jsondata_sales);
                }),
                  a.closeModal && a.closeModal();
              },
              c = o.replace(/[^\w-]/g, "").length > 0;
            return (0, e.jsx)(je.tH, {
              children: (0, e.jsx)(F.x_, {
                onEscKeypress: m,
                children: (0, e.jsxs)(p.UC, {
                  children: [
                    (0, e.jsx)(p.Y9, {
                      children: (0, s.we)(
                        "#Sale_UpdateLandingPage_EnableTitle",
                      ),
                    }),
                    (0, e.jsx)(p.nB, {
                      children: (0, e.jsx)(p.a3, {
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("span", {
                              children: (0, s.we)(
                                "#Sale_UpdateLandingPage_EnableDesc",
                              ),
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)(p.pd, {
                              type: "text",
                              label: (0, s.we)(
                                "#Sale_UpdateLandingPageVanityID",
                              ),
                              tooltip: (0, s.we)(
                                "#Sale_UpdateLandingPageVanityID_ttip",
                              ),
                              onChange: (g) => r(g.target.value),
                              value: o,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsx)(p.wi, {
                      children: (0, e.jsx)(p.CB, {
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
            n = M.mh.GetEditModel(),
            [i, l] = S.useState(n.BHasSaleEnabled()),
            { creatorHome: o } = (0, rt.FV)(
              n.GetEventModel().clanSteamID.GetAccountID(),
            ),
            r = S.useRef(void 0),
            d = (_) => {
              var v;
              l(_),
                (v = r == null ? void 0 : r.current) == null ||
                  v.setState({ checked: _ }),
                (0, te.h5)(() => {
                  (n.GetEventModel().jsondata.bSaleEnabled = _),
                    n.SetDirty(C.IQ.jsondata_sales);
                });
            },
            m = (0, ve.Dd)(n.GetClanSteamID(), !0),
            c =
              !n.BIsSourceEventSaleEnabled() &&
              t != Za &&
              (!o || !o.BHasClanAccountFlagSet(la.Wv.Jn)) &&
              !m,
            g = t != Za;
          return (0, e.jsxs)("div", {
            className: W.InputBorder,
            children: [
              (0, e.jsx)(p.RF, {
                ref: r,
                onChange: (_) => {
                  var v;
                  _ && g
                    ? ((v = r == null ? void 0 : r.current) == null ||
                        v.setState({ checked: !1 }),
                      l(!1),
                      (0, U.pg)(
                        t == Ka
                          ? (0, e.jsx)(Hr, {
                              editModel: n,
                              fnOnOKCallback: () => d(!0),
                            })
                          : (0, e.jsx)(zr, {
                              editModel: n,
                              fnOnOKCallback: () => d(!0),
                            }),
                        window,
                      ))
                    : d(_);
                },
                label: (0, s.we)(
                  t == Ka ? "#Sale_option_updatelandingpage" : "#Sale_option",
                ),
                disabled: c,
                checked: i,
              }),
              c &&
                (0, e.jsx)("div", {
                  className: Jt.WarningStyles,
                  children: (0, s.we)("#Sale_Enable_Warning"),
                }),
            ],
          });
        }
        var Li = u(55737),
          en = u(16346),
          On = u(29543),
          Pn = u(34360),
          Vr = u(1743),
          Wr = u(75912),
          Ni = u(11436);
        function Qr(a) {
          const t = () => a.closeModal && a.closeModal(),
            [n, i] = (0, S.useState)(!1),
            [l, o] = (0, S.useState)(null),
            [r, d] = (0, S.useState)(null),
            [m, c] = (0, S.useState)(null),
            [g, _] = (0, S.useState)(!1);
          (0, S.useEffect)(() => {
            const x = oe().CancelToken.source();
            return (
              Mi().then(() => {
                x.token.reason || i(!0);
              }),
              () => x.cancel("SaleEventExplorerDialog: unmounting")
            );
          }, []);
          const v = (x, b, E, y) => {
              o(x), d(b), c(E), _(y);
            },
            h = () => {
              (0, U.pg)(
                (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEditor_GenericAreYouSure"),
                  strDescription: (0, s.we)("#Sale_Debug_Delete"),
                  onOK: () => {
                    Zr(l), t();
                  },
                }),
                window,
              );
            };
          return (0, e.jsx)(je.tH, {
            children: (0, e.jsx)(F.x_, {
              onEscKeypress: t,
              children: (0, e.jsxs)(p.UC, {
                children: [
                  (0, e.jsx)(p.Y9, {
                    children: (0, s.we)("#Sale_Debug_Title"),
                  }),
                  (0, e.jsx)(p.nB, {
                    children: (0, e.jsx)(p.a3, {
                      children: n
                        ? (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsx)("div", {
                                children: (0, s.we)("#Sale_Debug_Desc"),
                              }),
                              (0, e.jsx)(Yr, { fnSetSaleItem: v }),
                              l
                                ? (0, e.jsx)(Kr, {
                                    saleCapsule: l,
                                    list: r,
                                    tabList: m,
                                    bInLinkedItems: g,
                                  })
                                : (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#Sale_Debug_NoMatchingItem",
                                    ),
                                  }),
                            ],
                          })
                        : (0, e.jsx)(H.t, {
                            string: (0, s.we)("#Sale_Debug_Loading"),
                            size: "medium",
                          }),
                    }),
                  }),
                  (0, e.jsx)(p.wi, {
                    children: (0, e.jsx)(p.CB, {
                      onCancel: t,
                      bOKDisabled: !l,
                      strOKText: (0, s.we)("#Button_Delete"),
                      onOK: h,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        async function Mi() {
          const a = M.mh.GetEditModel();
          await mt.A.Get().HintLoadStoreItems(
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
            ((n = mt.A.Get().GetStoreItem(a.id, (0, On.SW)(a.type))) == null
              ? void 0
              : n.GetName()) || t
          );
        }
        function Yr(a) {
          const { fnSetSaleItem: t } = a,
            n = (0, S.useRef)(null),
            i = (0, S.useRef)(null),
            l = (0, S.useRef)(0),
            o = (0, S.useRef)(void 0);
          (0, S.useEffect)(() => () => window.clearTimeout(l.current), []);
          const r = (0, S.useCallback)(
            async (d) => {
              let m = d.target.value;
              !m ||
                m.trim().length == 0 ||
                ((m = m.toLocaleLowerCase()),
                window.clearTimeout(l.current),
                n.current && n.current("SearchForCurator: new request"),
                (l.current = window.setTimeout(async () => {
                  const c = M.mh.GetEditModel();
                  let g = Number.parseInt(m.trim()),
                    _ = new Array();
                  if (c.GetEventModel().BHasSaleEnabled()) {
                    const v = (E) =>
                        E.id == g || Rn(E).toLowerCase().indexOf(m) >= 0,
                      h = (E) => {
                        _.findIndex((y) => y.id == E.id && y.type == E.type) <
                          0 && _.push(E);
                      };
                    c.GetEventModel().jsondata.sale_sections.forEach((E) => {
                      E.capsules && E.capsules.filter(v).forEach(h);
                    });
                    const x = c.GetTabSaleSection();
                    x &&
                      x.tabs.forEach((E) => {
                        E.capsules && E.capsules.filter(v).forEach(h);
                      });
                    const b = (E) => {
                      var y, P;
                      const N = (me) => E.id == me.id && E.type == me.type;
                      let q = new Array();
                      c.GetEventModel().jsondata.sale_sections.forEach((me) => {
                        var $e;
                        (($e = me.capsules) == null
                          ? void 0
                          : $e.filter(N).length) > 0 && q.push(me);
                      });
                      let le = new Array();
                      x &&
                        ((y = x.tabs) == null ||
                          y.forEach((me) => {
                            me.capsules.filter(N).length > 0 && le.push(me);
                          }));
                      const fe =
                        ((P = c.GetEventModel().jsondata.tagged_items) == null
                          ? void 0
                          : P.findIndex(
                              (me) => me && N(me == null ? void 0 : me.capsule),
                            )) >= 0;
                      t(E, q, le, fe);
                    };
                    i.current = (0, en.lX)(
                      (0, e.jsx)(Jr, { list: _, fnChooseCapsule: b }),
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
          return (0, e.jsx)(p.pd, {
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
        function Kr(a) {
          const { saleCapsule: t, list: n, tabList: i, bInLinkedItems: l } = a,
            o = M.mh.GetEditModel(),
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
                            children: (0, e.jsx)(wa.fi, {
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
        function Zr(a) {
          if (!a) return;
          const t = M.mh.GetEditModel();
          (0, te.h5)(() => {
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
        function Bi(a) {
          return `${a.type}:${a.id}`;
        }
        function kn(a) {
          const t = a.split(":");
          return { type: t[0], id: parseInt(t[1]) };
        }
        function qr() {
          var a, t;
          const n = [],
            i = new Map(),
            l = M.mh.GetEditModel(),
            o = l.GetTabSaleSection();
          return (
            (a = o == null ? void 0 : o.tabs) == null ||
              a.forEach((r) => {
                var d;
                const m = {
                  type: "tab",
                  unique_id: r.unique_id,
                  strLabel: (0, s.we)(
                    ((d = r.localized_label) == null ? void 0 : d[G.Bhc]) ||
                      r.default_label,
                  ),
                };
                n.push(m),
                  r.capsules.forEach((c) => {
                    const g = Bi(c);
                    i.has(g) || i.set(g, new Set()), i.get(g).add(r.unique_id);
                  });
              }),
            (t = l.GetEventModel().jsondata.sale_sections) == null ||
              t.forEach((r) => {
                if (r.section_type != "items") return;
                const d = {
                  type: "section",
                  unique_id: r.unique_id,
                  strLabel: (0, s.we)(
                    (0, Ni.s0)(r, l.GetEventModel(), wt.uF) ||
                      r.localized_label[G.Bhc] ||
                      r.default_label,
                  ),
                };
                n.push(d),
                  r.capsules.forEach((m) => {
                    const c = Bi(m);
                    i.has(c) || i.set(c, new Set()), i.get(c).add(r.unique_id);
                  });
              }),
            { mapItemLocations: i, rgSections: n }
          );
        }
        function Xr(a) {
          const [t, n] = (0, S.useState)(!1),
            [i, l] = (0, S.useState)(null),
            o = () => a.closeModal && a.closeModal();
          (0, S.useEffect)(() => {
            const c = oe().CancelToken.source();
            return (
              Mi().then(() => {
                c.token.reason || n(!0);
              }),
              l(qr()),
              () =>
                c.cancel("SaleEventItemLocationCSVDownloadDialog: unmounting")
            );
          }, []);
          let r = null;
          if (i) {
            const c = i.rgSections.filter((v) => v.type == "tab").length,
              g = i.rgSections.length - c,
              _ = i.mapItemLocations.size;
            r = (0, s.we)("#Sale_GameExport_ContentSummary", c, g, _);
          }
          const d = () => {
              var c;
              const { mapItemLocations: g, rgSections: _ } = i,
                v = [];
              for (const E of Array.from(g.keys())) {
                const y = kn(E);
                let P;
                try {
                  P =
                    (c = mt.A.Get().GetStoreItem(y.id, (0, On.SW)(y.type))) ==
                    null
                      ? void 0
                      : c.GetName();
                } catch {}
                v.push([`${y.type}: ${P || y.id}`, E]);
              }
              v.sort();
              const h = [],
                x = ["Item", "AppID", "Count"];
              for (const E of _) x.push(`${E.strLabel} (${E.type})`);
              h.push(x);
              for (const [E, y] of v) {
                const P = g.get(y),
                  N = kn(y),
                  q = [E, N.id.toString(), P.size.toString()];
                for (const le of _) q.push(P.has(le.unique_id) ? "1" : " ");
                h.push(q);
              }
              const b = "item_locations.csv";
              Ue.g.WriteCSVToFile(h, b),
                (0, U.mK)(
                  (0, e.jsx)(F.o0, {
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
                g = [],
                _ = ["Type", "ID", "Name", "Dev", "Pub", "Franchise"];
              g.push(_);
              const v = [];
              for (const x of Array.from(c.keys())) {
                const b = kn(x);
                try {
                  const E = mt.A.Get().GetStoreItem(b.id, (0, On.SW)(b.type));
                  v.push([b.type, E.GetName() || b.id.toString(), E]);
                } catch {}
              }
              v.sort();
              for (const [x, b, E] of v) {
                const y = E.GetDeveloperNames().join(","),
                  P = E.GetPublisherNames().join(","),
                  N = E.GetFranchiseNames().join(","),
                  q = [x.toString(), E.GetID().toString(), b, y, P, N];
                g.push(q);
              }
              const h = "item_pubs.csv";
              Ue.g.WriteCSVToFile(g, h),
                (0, U.mK)(
                  (0, e.jsx)(F.o0, {
                    strTitle: (0, s.we)("#Sale_GameExport_Title"),
                    bAlertDialog: !0,
                    strDescription: (0, s.we)(
                      "#Sale_GameExport_FileExported",
                      h,
                    ),
                  }),
                  window,
                ),
                o();
            };
          return (0, e.jsx)(je.tH, {
            children: (0, e.jsx)(F.x_, {
              onEscKeypress: o,
              children: (0, e.jsxs)(p.UC, {
                children: [
                  (0, e.jsx)(p.Y9, {
                    children: (0, s.we)("#Sale_GameExport_Title"),
                  }),
                  (0, e.jsxs)(p.nB, {
                    children: [
                      (0, e.jsxs)(p.a3, {
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, s.we)("#Sale_GameExport_Desc"),
                          }),
                          (0, e.jsx)("br", {}),
                          t
                            ? r
                            : (0, e.jsx)(H.t, {
                                position: "center",
                                string: (0, s.we)("#Sale_Debug_Loading"),
                                size: "medium",
                              }),
                          (0, e.jsx)(p.$n, {
                            onClick: d,
                            disabled: !t,
                            children: (0, s.we)("#Sale_Export"),
                          }),
                        ],
                      }),
                      (0, e.jsx)(ve.Eb, {
                        clanSteamID: M.mh.GetEditModel().GetClanSteamID(),
                        children: (0, e.jsxs)(p.a3, {
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, s.we)("#Sale_GameExport_Desc2"),
                            }),
                            (0, e.jsx)(p.$n, {
                              onClick: m,
                              disabled: !t,
                              children: (0, s.we)("#Sale_Export"),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(p.wi, {
                    children: (0, e.jsx)(p.jn, {
                      onClick: o,
                      children: (0, s.we)("#Button_Close"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        var Ee = u(63872),
          Ie = u.n(Ee),
          Fn = u(18994),
          qt = u(49285);
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
                        [qt.TOCEntry]: !0,
                        [qt.SectionOnScreen]: n.bSectionIsVisible,
                        [qt.TOCIndent]: n.bIndent,
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
                      className: qt.TOCEntryText,
                      children: n.strLabel,
                    }),
                  },
                  "tc_" + n.strSectionId,
                ),
              );
            }),
            (0, e.jsxs)("div", {
              className: (0, j.A)(qt.TableOfContentsContainer, a.className),
              children: [
                a.elHeader,
                (0, e.jsxs)("div", {
                  className: qt.TableOfContents,
                  children: [
                    (0, e.jsx)("div", {
                      className: qt.Header,
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
        var Un = u(74107),
          tn = u(9295);
        function ed(a) {
          const t = a.eventType == G.ajI;
          return (0, e.jsxs)("div", {
            className: tn.ManageLocCtn,
            children: [
              (0, e.jsx)("div", {
                className: tn.Header,
                children: Un.F5.Localize("#EventEditor_Loc_Title"),
              }),
              (0, e.jsxs)("div", {
                className: tn.ManageLocContents,
                children: [
                  t
                    ? Un.F5.Localize("#EventEditor_Loc_Overview_Page")
                    : Un.F5.Localize("#EventEditor_Loc_Overview"),
                  (0, e.jsx)("div", {
                    className: tn.LocButtonsCtn,
                    children: a.children,
                  }),
                ],
              }),
            ],
          });
        }
        var Ft = u(41635),
          an = u(6231),
          td = u(6103),
          nn = u.n(td),
          ad = u(41878),
          Oi = u(57673),
          nd = u(28796),
          sn = u.n(nd),
          Pi = u(54968);
        function Ri(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, ce.Bw)(n, ce.PH.k_eStoreSalePage, "forceAbsolute"),
            l = (0, ce.Bw)(n, ce.PH.k_eStoreHardwarePreview, "forceAbsolute"),
            r = (0, ve.Dd)(t.GetClanSteamID(), !0) && (0, ce.LH)(n),
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
          const m = (_) => {
              var v, h;
              const x = d.find((E) => E.data == _),
                b = !((v = x == null ? void 0 : x.newWindow) != null && v);
              Pi.xr
                .Get()
                .ShowPreviewWindow(
                  (h = x == null ? void 0 : x.url) != null ? h : i,
                  n,
                  b,
                  x == null ? void 0 : x.size,
                  x == null ? void 0 : x.queryParams,
                );
            },
            c = (0, Pi.cv)(),
            g = (_) => {
              let v = { bOverlapHorizontal: !0 };
              const h = (0, e.jsx)(p.n4, {
                rgOptions: d,
                onValueSelected: (x, b) => m(b.data),
              });
              (0, en.lX)(h, _, v);
            };
          return (0, e.jsxs)("div", {
            className: (0, j.A)(sn().LivePreview, c && sn().Connected),
            children: [
              (0, e.jsx)(p.$n, {
                className: (0, j.A)(sn().Button),
                onClick: () => m(void 0),
                children: (0, s.we)("#Sale_Debug_LivePreview"),
              }),
              (0, e.jsx)(p.$n, {
                className: (0, j.A)(sn().DeviceDropdown),
                onClick: (_) => g(_),
                children: (0, e.jsx)(yt.GB9, {}),
              }),
            ],
          });
        }
        function sd(a) {
          return (0, e.jsx)(wt.Cs, {
            location: wt.W3,
            children: (0, e.jsx)(id, { ...a }),
          });
        }
        const id = (0, R.PA)((a) => {
            const { editModel: t } = a,
              n = (0, D.Qn)(),
              i = gi(),
              [l, o, r, d] = (0, B.q3)(() => [
                (0, an.QD)(),
                (0, an.dy)(),
                !!t.GetEventModel().jsondata.sale_sub_menu,
                t.GetEventType(),
              ]),
              m = d == G.ajI,
              c = (E) => {
                a.onSelected && a.onSelected(E);
              },
              g = (E, y, P, N = !1, q) => {
                E.push({
                  strLabel: y,
                  strSectionId: P,
                  style: q,
                  bIndent: N,
                  bSectionIsVisible: i.m_mapVisibleSections.has(P),
                });
              };
            let _ = t.GetEventModel(),
              v = new Array();
            g(v, (0, s.we)("#Sale_PageConfigOptions"), "SalePageEdit_Config");
            const h = (0, ve.Dd)(t.GetClanSteamID(), !1);
            (h || _.GetTaggedItems().length > 0) &&
              g(
                v,
                (0, s.we)(
                  "#Sale_TaggedItemsSection",
                  _.GetTaggedItems().length,
                ),
                "SalePageEdit_TaggedItems",
              ),
              g(
                v,
                (0, s.we)(
                  m ? "#Sale_Artwork_Sections_Page" : "#Sale_Artwork_Sections",
                ),
                "SalePageEdit_AllArtworkCtn",
              ),
              (_.BHasTag("contenthub") || _.BUsesContentHubForItemSource()) &&
                g(v, "Content Hub Settings", "SalePageEdit_ContentHub");
            let x = !1,
              b = 0;
            if (
              (_.GetSaleSections().forEach((E, y) => {
                if (x && l && !(0, Oi.bF)(o, E)) b += 1;
                else {
                  const P = (0, e.jsx)(wa.fi, {
                      saleSection: E,
                      eventModel: t.GetEventModel(),
                      editLanguage: t.GetCurEditLanguage(),
                      index: y,
                    }),
                    N = { ...(0, kt.sq)(E, _, n), color: E.label_color },
                    q = Fn.mj + E.unique_id;
                  g(v, P, q, x, N), E.section_type === "tabs" && (x = !0);
                }
              }),
              b > 0)
            ) {
              const E = (0, e.jsxs)("div", {
                className: nn().Ctn,
                onClick: (y) => {
                  (0, an.qT)(void 0), y.stopPropagation();
                },
                children: [
                  (0, e.jsx)("div", {
                    className: nn().ButtonIcon,
                    children: (0, e.jsx)(yt.X, {}),
                  }),
                  (0, s.we)("#Sale_TOC_ClearFilter"),
                  (0, e.jsx)($.o, {
                    tooltip: (0, s.we)("#Sale_TOC_ClearFilter_ttip", b),
                  }),
                ],
              });
              g(v, E, "DummyTargetNotReal", !0);
            }
            return (
              h &&
                (r &&
                  g(v, "(VO) Sub Menu Editor", "SalePageEdit_SubMenuEditor"),
                g(v, "(VO) Custom CSS Editor", "SalePageEdit_CustomCSSCode")),
              (0, e.jsx)(je.tH, {
                children: (0, e.jsx)($r, {
                  className: nn().SalePageTOCPlacement,
                  elHeader: (0, e.jsx)(ed, {
                    eventType: a.editModel.GetEventType(),
                    children: (0, e.jsx)(ii, { editModel: a.editModel }),
                  }),
                  strHeader: (0, s.we)("#Sale_TOC"),
                  rows: v,
                  onSelected: c,
                  elBottomContent: (0, e.jsx)(ki, { editModel: a.editModel }),
                }),
              })
            );
          }),
          ki = (a) => {
            const { editModel: t } = a,
              [n, i, l] = (0, ie.uD)(),
              o = (0, te.XI)((r) => {
                const d = {
                    ...ee.G6,
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
                  (0, dt.mi)((0, dt.LY)(d), !0),
                  l();
              });
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(F.EN, {
                    active: n,
                    children: (0, e.jsx)(od, {
                      clanSteamID: t.GetClanSteamID(),
                      eventType: t.GetEventType(),
                      fnSectionTypeChosen: o,
                      closeModal: l,
                    }),
                  }),
                }),
                (0, e.jsx)(p.jn, {
                  onClick: i,
                  className: W.AddSectionButton,
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
            [o, r] = S.useState("unselected_empty"),
            d = (0, ad.q)(t, n);
          return (0, e.jsxs)(F.o0, {
            strTitle: (0, s.we)("#Sale_AddNewSection_Title"),
            strDescription: (0, s.we)("#Sale_AddNewSection_Desc"),
            onOK: () => i(o),
            onCancel: l,
            closeModal: l,
            children: [
              (0, e.jsx)(kt.gB, {
                rgSectionTypeInfos: d,
                sectionType: o,
                fnSetSectionType: (m) => r(m),
              }),
              (0, e.jsx)("div", {
                className: (0, j.A)(W.FlexColumnContainer, nn().ReassignCtn),
              }),
            ],
          });
        }
        function ld(a) {
          const t = M.mh.GetEditModel(),
            [n, i, l] = (0, ie.uD)(),
            { bSoloMode: o, SetSoloMode: r } = (0, dt.eQ)();
          return (0, e.jsxs)("div", {
            className: Ee.BottomBarControls,
            children: [
              (0, e.jsx)("div", {
                children: (0, e.jsx)(De.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Debug_LivePreview_ttip"),
                  children: (0, e.jsx)(Ri, { editModel: t }),
                }),
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(De.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Debug_Tooltip"),
                  children: (0, e.jsx)(p.$n, {
                    onClick: (d) => (0, U.pg)((0, e.jsx)(Qr, {}), (0, Q.uX)(d)),
                    children: (0, e.jsx)(yt.eSy, {}),
                  }),
                }),
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(De.Gq, {
                  toolTipContent: (0, s.we)("#Sale_GameExport_Desc"),
                  children: (0, e.jsx)(p.$n, {
                    onClick: (d) => (0, U.pg)((0, e.jsx)(Xr, {}), (0, Q.uX)(d)),
                    children: (0, e.jsx)(yt.f5X, {}),
                  }),
                }),
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(F.EN, {
                    active: n,
                    children: (0, e.jsx)(rd, { editModel: t, closeModal: l }),
                  }),
                  (0, e.jsx)(De.Gq, {
                    toolTipContent: (0, s.we)("#Sale_ReorderSections_ttip"),
                    children: (0, e.jsx)(p.$n, {
                      onClick: () => i(),
                      children: (0, e.jsx)(yt._EF, {}),
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: Ee.MinimizeAll,
                children: (0, e.jsx)(De.Gq, {
                  toolTipContent: (0, s.we)(
                    "#Sale_Section_MinimizeAll_Tooltip",
                  ),
                  children: (0, e.jsx)(p.$n, {
                    onClick: dt.TA,
                    children: (0, e.jsx)(yt.Xjb, {}),
                  }),
                }),
              }),
              (0, e.jsx)("div", {
                className: Ee.MinimizeAll,
                children: (0, e.jsx)(De.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Section_SoloMode_ttip"),
                  children: (0, e.jsx)(p.Yh, {
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
            [l, o] = S.useState(null);
          S.useEffect(() => (o([...i]), () => o(null)), [i]);
          const r = (0, D.Qn)(),
            d = (m) => {
              const c = t.GetSaleSections().findIndex((_) => m === _),
                g = {
                  ...(0, kt.sq)(m, t.GetEventModel(), r),
                  color: m.label_color,
                };
              return (0, e.jsx)("div", {
                className: Ee.SectionTitle,
                style: g,
                children: (0, e.jsx)(wa.fi, {
                  saleSection: m,
                  editLanguage: t.GetCurEditLanguage(),
                  eventModel: t.GetEventModel(),
                  index: c,
                }),
              });
            };
          return (0, e.jsx)(wt.Cs, {
            location: wt.Ay,
            children: (0, e.jsx)(F.o0, {
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
                    className: Ee.ReorderSectionCtn,
                    children: (0, e.jsx)("div", {
                      className: Ee.SectionList,
                      children: (0, e.jsx)(Yt.A, {
                        items: l,
                        onMove: (m, c) => {
                          let g = [...l];
                          (0, Ft.yY)(g, m, c), o(g);
                        },
                        render: d,
                      }),
                    }),
                  })
                : (0, e.jsx)(H.t, {
                    string: (0, s.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
            }),
          });
        }
        const dd = S.lazy(() =>
          Promise.all([u.e(10091), u.e(8502)]).then(u.bind(u, 17065)),
        );
        function cd(a) {
          const { editModel: t } = a,
            n = (v) => {
              t.GetEventModel().jsondata.sale_custom_css != v &&
                ((t.GetEventModel().jsondata.sale_custom_css = v),
                t.SetDirty(C.IQ.jsondata_sales));
            },
            i = t.GetEventModel().jsondata,
            [l, o, r] = (0, B.q3)(() => [
              i.sale_custom_css,
              i.sale_vanity_id_valve_approved_for_sale_subpath,
              t.GetName(),
            ]),
            [d, m] = S.useState(() => r + "_custom.css"),
            c = (v) => {
              var h;
              const x = (h = v.target.files) == null ? void 0 : h[0];
              if (x) {
                m(v.target.files[0].name);
                const b = new FileReader();
                (b.onload = (E) => {
                  const y = E.target.result.toString();
                  (t.GetEventModel().jsondata.sale_custom_css = y),
                    t.SetDirty(C.IQ.jsondata_sales),
                    (v.target.value = "");
                }),
                  b.readAsText(x);
              }
            },
            g = () => {
              const v = document.createElement("a"),
                h = new Blob([l], { type: "text/css" });
              (v.href = URL.createObjectURL(h)),
                (v.download = d),
                document.body.appendChild(v),
                v.click();
            },
            _ = {
              selectOnLineNumbers: !0,
              tabCompletion: "on",
              colorDecorators: !0,
              scrollBeyondLastLine: !1,
              automaticLayout: !0,
            };
          return (0, e.jsx)(e.Fragment, {
            children: o
              ? (0, e.jsxs)("div", {
                  className: ye.CustomCssCtn,
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
                      className: ye.CodeSnippet,
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
                      className: ye.CodeSnippet,
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
                      className: ye.ButtonGroup,
                      children: [
                        (0, e.jsx)("input", { type: "file", onChange: c }),
                        (0, e.jsx)(p.$n, { onClick: g, children: "Export" }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: ye.CodeEditor,
                      children: (0, e.jsx)(S.Suspense, {
                        fallback: null,
                        children: (0, e.jsx)(dd, {
                          width: "100%",
                          height: "100%",
                          language: "css",
                          theme: "vs-dark",
                          value: l || "",
                          options: _,
                          onChange: n,
                        }),
                      }),
                    }),
                  ],
                })
              : (0, e.jsx)("div", {
                  className: ye.SettingCtn,
                  children: (0, e.jsx)("p", {
                    children:
                      "The custom CSS editor is disabled. The sale page needs to be setup to use store/sale. This is a Valve Only setting found in the General Configuration Section",
                  }),
                }),
          });
        }
        var ud = u(30366),
          hd = u(72739),
          ma = u(54736),
          _d = u(40604);
        const Fi = S.createContext(void 0);
        function md(a) {
          return (0, e.jsx)(Fi, { value: a.elContent, children: a.children });
        }
        function pd(a) {
          const t = S.useContext(Fi);
          return t ? hd.createPortal(a.children, t) : null;
        }
        const vd = (0, R.PA)((a) => {
            const t = M.mh.GetEditModel(),
              n = t.GetCategoryAsType(),
              i = t.BPublished(),
              l = t.BUnlisted(),
              o = t.BVisible(),
              r = n == G.ajI;
            return (0, e.jsxs)("div", {
              className: (0, j.A)(
                ma.EventEditorTopBarContainer,
                i && (o || l) ? ma.EventPublished : ma.EventUnPublished,
              ),
              children: [
                (0, e.jsxs)("div", {
                  className: f().EventBarBackAndTitle,
                  children: [
                    (0, e.jsx)(ce.tj, {
                      eventModel: t.GetEventModel(),
                      route: ce.PH.k_eCommunityAdminPage,
                      className: f().EventBarBack,
                      children: (0, s.we)("#EventDisplay_EventsDashBtn"),
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventBarTitleCtn,
                      children: (0, e.jsx)(Qt.zm, { editModel: t }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().EventOptions,
                  children: (0, e.jsx)(Qt.$A, { editModel: t }),
                }),
                (0, e.jsxs)("div", {
                  className: f().EventEditButtons,
                  children: [
                    !r &&
                      (0, e.jsx)(ce.tj, {
                        eventModel: t.GetEventModel(),
                        route: ce.PH.k_eCommunityPreview,
                        className: f().EditPreviewButton,
                        children:
                          n == G.uYK
                            ? (0, s.we)("#EventEditor_Preview_News")
                            : (0, s.we)("#EventEditor_Preview"),
                      }),
                    t.BHasSaleEnabled() &&
                      (0, e.jsx)(ce.tj, {
                        eventModel: t.GetEventModel(),
                        route: ce.PH.k_eCommunityPreviewSale,
                        className: f().EditPreviewButton,
                        children: r
                          ? (0, s.we)("#EventEditor_PreviewSale_Page")
                          : (0, s.we)("#EventEditor_PreviewSale"),
                      }),
                    t.BHasSaleEnabled() &&
                      (0, e.jsx)(De.Gq, {
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
              n = M.mh.GetEditModel(),
              i = n.GetEventModel(),
              l = n.GetEventType() == G.ajI,
              { creatorHome: o } = (0, rt.FV)(n.GetClanAccountID()),
              r = l && (o == null ? void 0 : o.GetLinkedEventGID()) == i.GID,
              d =
                (n.GetVisibilityState() == ee.zv.k_EEventStateVisible ||
                  n.BUnlisted()) &&
                (!l || r);
            return (0, e.jsxs)("div", {
              className: ma.EventEditorBottomBar,
              children: [
                (0, e.jsx)(_d.c, { editModel: M.mh.GetEditModel() }),
                !l &&
                  (0, e.jsx)(ce.tj, {
                    eventModel: i,
                    route: ce.PH.k_eCommunityPreview,
                    className: f().EditPreviewButton,
                    children: (0, s.we)("#EventEditor_Preview"),
                  }),
                d &&
                  (0, e.jsxs)(S.Fragment, {
                    children: [
                      (0, e.jsx)(ce.tj, {
                        className: f().EditPreviewButton,
                        eventModel: i,
                        route: ce.PH.k_eStoreView,
                        children: l
                          ? (0, s.we)("#EventEditor_ViewLive_CreatorHome")
                          : (0, s.we)("#EventEditor_ViewLive"),
                      }),
                      (0, e.jsx)("span", {
                        className: ma.DisplayAdminPanel_Spacer,
                        children: " ",
                      }),
                    ],
                  }),
                (0, e.jsx)("div", { className: ma.AdditionalContent, ref: t }),
              ],
            });
          });
        var Sd = u(47797),
          Ed = u(18368),
          At = u.n(Ed),
          pa = u(47534),
          fd = u(24660);
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
            o = S.useMemo(
              () =>
                i
                  .filter(
                    (g) =>
                      t.findIndex((_) => _.type === g.type) === -1 ||
                      g.type === "qq" ||
                      g.type === "qqlink",
                  )
                  .map((g) => ({
                    label: (0, s.we)(`#StoreAdmin_SocialMedia_Type_${g.type}`),
                    data: g.type,
                  }))
                  .sort((g, _) => (g.label < _.label ? -1 : 1)),
              [i, t],
            ),
            r = (g) => {
              let _ = t.slice();
              _.splice(g, 1), n(_);
            },
            d = (g, _) => {
              let v = t.slice();
              (0, Ft.yY)(v, g, _), n(v);
            },
            m = (g, _) => {
              const v = t.map((h, x) => (x === g ? { ...h, link: _ } : h));
              n(v);
            },
            c = (g) => {
              let _ = t.slice();
              _.push({ type: g, link: "" }), n(_);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(xd, { options: o, onAddLink: c }),
              (0, e.jsx)(Yt.A, {
                items: t,
                onDelete: r,
                onMove: d,
                render: (g, _) =>
                  (0, e.jsx)(
                    bd,
                    {
                      item: g,
                      onUpdateLink: (v) => m(_, v),
                      validationData: l[g.type],
                    },
                    g.type,
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
            children: (0, e.jsx)(p.ZU, {
              strDefaultLabel: (0, s.we)("#StoreAdmin_SocialMedia_Add"),
              controlled: !0,
              rgOptions: t,
              onChange: i,
              selectedOption: null,
            }),
          });
        }
        function zi(a, t) {
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
          const { bValid: o, strTooltip: r } = zi(t, i);
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
                (0, e.jsx)(De.he, {
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
              const n = `${bt.TS.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
                i = { origin: self.origin },
                l = await oe().get(n, { params: i });
              return (l == null ? void 0 : l.status) == 200 &&
                ((t = l.data) == null ? void 0 : t.success) == Xe.R
                ? l.data
                : (console.error(
                    "useSocialMediaSupports:",
                    l == null ? void 0 : l.status,
                  ),
                  { success: Xe.zi });
            },
          });
          return a.isLoading ? null : a.data;
        }
        function Dd(a) {
          const { editModel: t } = a;
          return (0, B.q3)(() => t.GetEventType()) == G.ajI
            ? (0, e.jsx)(Td, { editModel: t })
            : (0, e.jsx)(yd, { editModel: t });
        }
        function yd(a) {
          const { editModel: t } = a,
            n = t.GetCurEditLanguage(),
            [i, l, o, r] = (0, B.q3)(() => [
              t.GetName(n) || "",
              t.GetSummary(n) || "",
              t.GetDescription(n) || "",
              t.GetImageURL("capsule", n) || null,
            ]),
            d = l || ee.lh.GenerateSummaryFromText(o);
          return (0, e.jsx)(Hi, {
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
            [n, i] = (0, J.TB)(t.GetClanAccountID());
          return (0, e.jsx)(Hi, {
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
        function Hi(a) {
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
            [g, _] = (0, B.q3)(() => [
              c.GetSaleSectionsByType("social_share") || [],
              c.jsondata.sale_default_social_media_disabled,
            ]),
            v = (b) => {
              (c.jsondata.sale_default_social_media_disabled = !b),
                t.SetDirty(C.IQ.jsondata_sales);
            },
            h = g.length > 0,
            x = !(_ || h);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("p", {
                children: (0, s.we)("#Sale_DefaultSocialModule_Description"),
              }),
              (0, e.jsx)(ve.Eb, {
                clanSteamID: t.GetClanSteamID(),
                requireAdmin: !0,
                children: (0, e.jsx)("p", {
                  className: At().DefaultSocialOverrideMsg,
                  children: (0, s.we)(
                    h
                      ? "#Sale_DefaultSocialModule_DisabledByOverride"
                      : "#Sale_DefaultSocialModule_Override",
                  ),
                }),
              }),
              x &&
                (0, e.jsxs)("div", {
                  className: At().SocialShareCtn,
                  children: [
                    (0, e.jsx)("img", {
                      className: (0, j.A)(
                        At().DefaultSocialImgCtn,
                        m && At().Small,
                      ),
                      src: r,
                    }),
                    (0, e.jsxs)("div", {
                      className: At().SocialShareText,
                      children: [
                        (0, e.jsxs)("div", {
                          className: At().SocialTitle,
                          children: [
                            n,
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("span", { children: i }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: At().SocialDesc,
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
              (0, e.jsx)(p.RF, {
                onChange: v,
                label: (0, s.we)("#Sale_DefaultSocialModule_Toggle"),
                checked: x,
                disabled: h,
              }),
              !d && (0, e.jsx)(Id, { editModel: t }),
            ],
          });
        }
        function Id(a) {
          const { editModel: t } = a,
            [n, i] = (0, S.useState)(() => {
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
                : (0, e.jsx)(p.RF, {
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
          (0, S.useEffect)(() => {
            const r = t.GetEventModel().jsondata;
            r.sale_social_media_items || (r.sale_social_media_items = []);
          }, [t]);
          const i = (0, B.q3)(
              () => t.GetEventModel().jsondata.sale_social_media_items || [],
            ),
            [l, o] = (0, S.useState)(() => i);
          return n
            ? n.success != Xe.R
              ? (0, e.jsx)("div", {
                  className: At().ErrorContainer,
                  children: (0, e.jsx)("div", {
                    className: At().ErrorText,
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
                          .filter((m) => zi(m, d[m.type]).bValid)),
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
            : (0, e.jsx)(H.t, {
                string: (0, s.we)("#Loading"),
                position: "center",
              });
        }
        var Gd = u(54345),
          it = u(49199),
          Ld = u(25518),
          Nd = u(4748),
          Md = u(89084),
          Bd = u(45638),
          on = u(32093),
          ln = u(19619),
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
          Ia = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Od(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Vi(t, n, l), l;
          },
          Aa = (a, t, n) => Pd(a, typeof t != "symbol" ? t + "" : t, n);
        const Xt = class Ht {
          constructor() {
            Aa(this, "m_mapNewsCurators", new Map()),
              Aa(this, "m_bIsLoadComplete", !1),
              Aa(this, "m_mapLangToNewsCurators", new Map()),
              Aa(this, "m_LoadingPromise", null),
              (0, te.Gn)(this);
          }
          static Get() {
            return (
              Ht.s_newsCuratorStore ||
                ((Ht.s_newsCuratorStore = new Ht()),
                (Ht.s_newsCuratorStore.m_LoadingPromise =
                  Ht.s_newsCuratorStore.Init()),
                (window.g_NewsCuratorStore = Ht.s_newsCuratorStore)),
              Ht.s_newsCuratorStore
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
            const l = await oe().get(n, { params: i });
            (0, te.h5)(() => {
              l.data && l.data.success && this.HandleCuratorResponse(l.data),
                (this.m_bIsLoadComplete = !0);
            });
          }
          HandleCuratorResponse(t) {
            var n;
            if (
              (t.groupvanityinfo && J.ac.RegisterClanData(t.groupvanityinfo),
              t.newscuratorinfo)
            )
              for (const i of t.newscuratorinfo) {
                if (this.m_mapNewsCurators.has(i.clanAccountID)) continue;
                this.m_mapNewsCurators.set(i.clanAccountID, i);
                const l = J.ac.GetClanInfoByClanAccountID(i.clanAccountID);
                l &&
                  ((n = this.m_mapLangToNewsCurators.get(l.rss_language)) ==
                    null ||
                    n.push(i));
              }
          }
        };
        Aa(Xt, "s_newsCuratorStore"),
          Ia([te.sH], Xt.prototype, "m_mapNewsCurators", 2),
          Ia([te.sH], Xt.prototype, "m_bIsLoadComplete", 2),
          Ia([te.sH], Xt.prototype, "m_mapLangToNewsCurators", 2),
          Ia([te.EW], Xt.prototype, "allNewsCurators", 1),
          Ia([te.XI], Xt.prototype, "HandleCuratorResponse", 1);
        let Rd = Xt;
        var Wi = u(48473),
          kd = u(16345),
          Gt = u.n(kd),
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
          zd = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Fd(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Qi(t, n, l), l;
          },
          rn = (a, t, n) => Ud(a, typeof t != "symbol" ? t + "" : t, n);
        function dn(a) {
          const t = new Set();
          return (
            (a.indexOf("games") >= 0 || a.indexOf("dlc") >= 0) && t.add("apps"),
            a.indexOf("curators") >= 0 && t.add("curators"),
            t
          );
        }
        function Hd(a) {
          return a == "game" || a == "software"
            ? "games"
            : a == "dlc" || a == "music"
              ? "dlc"
              : null;
        }
        const Vd = 300;
        class Yi extends S.Component {
          constructor() {
            super(...arguments),
              rn(this, "state", {
                strSearchString: "",
                rgAppSuggestions: null,
                rgCuratorSuggestions: null,
              }),
              rn(this, "m_nHighestSentRequestID", 0),
              rn(
                this,
                "m_mapHighestReceivedRequestIDFromBackEnd",
                new Map([
                  ["apps", 0],
                  ["curators", 0],
                ]),
              ),
              rn(this, "m_timerForChange", new Qa.LU());
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
            const n = dn(this.props.rgCorporaToSearch);
            n.has("apps") && this.GetAppSuggestionsFromServer(t),
              n.has("curators") && this.GetCuratorSuggestions(t);
          }
          async GetCuratorSuggestions(t) {
            var n;
            const i = Rd.Get().allNewsCurators,
              l = [];
            for (const o of i) {
              const r = J.ac.GetClanInfoByClanAccountID(o.clanAccountID),
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
                  ln.Fm.Get().BIsIgnoringCurator(r.clanAccountID)
                )
                  continue;
                const c = ln.Fm.Get().BIsFollowingCurator(r.clanAccountID),
                  g = (0, e.jsx)(
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
                    ? this.props.fnDecorateSuggestion(d, g)
                    : g,
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
                realm: on.TU.k_ESteamRealmGlobal,
                origin: self.origin,
                f: "jsonfull",
                term: t.replace(" ", "+"),
                require_type: l.join(","),
                excluded_tags: ln.Fm.Get().GetExcludedTagsSortedByID(),
                excluded_content_descriptors:
                  ln.Fm.Get().ExcludedContentDescriptor,
              },
              r = `${D.TS.STORE_BASE_URL}search/suggest`,
              d = await oe().get(r, { params: o, withCredentials: !0 });
            if (i < this.m_mapHighestReceivedRequestIDFromBackEnd.get("apps"))
              return;
            this.m_mapHighestReceivedRequestIDFromBackEnd.set("apps", i);
            let m;
            (n = d == null ? void 0 : d.data) != null &&
              n.length &&
              (m = d.data.map((c) => {
                const g = { corpus: Hd(c.type), ...c, id: parseInt(c.id) };
                if (
                  this.props.fnFilterSuggestion &&
                  !this.props.fnFilterSuggestion(g)
                )
                  return null;
                const _ = (0, e.jsx)(
                  Ji,
                  { suggestion: g, fnOnSelected: this.props.fnOnSelected },
                  g.type + g.id,
                );
                return this.props.fnDecorateSuggestion
                  ? this.props.fnDecorateSuggestion(g, _)
                  : _;
              })),
              this.setState({ rgAppSuggestions: m });
          }
          async UpdateSuggestions(t) {
            const n =
              t.target.value && t.target.value.trim().toLocaleLowerCase();
            if ((this.m_nHighestSentRequestID++, !(n != null && n.length))) {
              Array.from(dn(this.props.rgCorporaToSearch)).forEach((i) =>
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
              g = (d == null ? void 0 : d.length) > 0,
              _ = dn(i).size > 1,
              v =
                _ &&
                c &&
                (0, s.we)(
                  i.indexOf("dlc") >= 0
                    ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                    : "#EventCalendar_SearchResultsHeader_GameSection",
                ),
              h = Array.from(dn(i)).some(
                (b) =>
                  this.m_nHighestSentRequestID >
                  this.m_mapHighestReceivedRequestIDFromBackEnd.get(b),
              ),
              x = !g && !c && !h;
            return (0, e.jsxs)("div", {
              className: Gt().SuggestContainer,
              children: [
                (0, e.jsx)(p.pd, {
                  type: "text",
                  label: t,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: m,
                  focusOnMount: n,
                }),
                m &&
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(Gt().Results, l),
                    children: [
                      c &&
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              _ &&
                                (0, e.jsx)("div", {
                                  className: Gt().ResultSectionHeader,
                                  children: v,
                                }),
                              r,
                            ],
                          },
                          "game-suggestions",
                        ),
                      g &&
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              _ &&
                                (0, e.jsx)("div", {
                                  className: Gt().ResultSectionHeader,
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
                            className: Gt().EmptyResults,
                            children: (0, s.we)(
                              "#EventCalendar_GameSearch_NoneFound",
                            ),
                          },
                          "empty-results",
                        ),
                      h && (0, e.jsx)(H.t, { size: "small" }),
                    ],
                  }),
              ],
            });
          }
        }
        zd([ie.oI], Yi.prototype, "UpdateSuggestions", 1);
        const Ji = (a) =>
          (0, e.jsxs)(
            "div",
            {
              className: Gt().ResultRow,
              onClick: () => a.fnOnSelected(a.suggestion),
              children: [
                (0, e.jsx)("img", {
                  src: a.suggestion.img,
                  className: Gt().AvatarImage,
                }),
                (0, e.jsxs)("div", {
                  className: Gt().GameName,
                  children: [" ", (0, Wi.EK)(a.suggestion.name), " "],
                }),
                a.bShowFollowingLabel &&
                  (0, e.jsx)("div", {
                    className: Gt().Label,
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
            [l, o] = (0, S.useState)(!!i);
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
                        (0, e.jsx)($.o, {
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
                          Ee.EventEditorTitleInput,
                          Ee.Subtitle,
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
              : (0, e.jsx)(p.Yh, {
                  checked: l,
                  onChange: o,
                  label: (0, s.we)("#EventEditor_Associated_App_Question"),
                  tooltip: (0, s.we)("#EventEditor_Associated_App_ttip"),
                });
        }
        var Qd = u(56585),
          Ga = u(77128),
          Yd = u(6864),
          Jd = u(78606),
          Ki = u.n(Jd),
          La = u(72609);
        function Kd(a) {
          return (0, e.jsx)("div", {
            className: Ki().HighlightBox,
            children: (0, s.oW)(
              "#PartnerEvent_MM_TitleTip",
              (0, e.jsx)("i", {}),
            ),
          });
        }
        function Zd(a) {
          return (0, e.jsxs)("div", {
            className: Ki().HighlightBox,
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
                  href: `${La.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                  children: (0, s.we)("#PartnerEvent_MM_LearnMore"),
                }),
              }),
            ],
          });
        }
        function qd(a) {
          const t = S.useRef(void 0),
            { editModel: n, bCanManuallyTagAssociatedApps: i } = a,
            l = S.useCallback((r, d) => {
              t.current && t.current(r, d);
            }, []),
            o = (0, B.q3)(() => n.BHasTag("vo_marketing_message"));
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Xd, { editModel: n }),
              (0, e.jsx)(Zi, { editModel: n }),
              (0, e.jsx)($d, { editModel: n }),
              (0, e.jsx)(ec, { editModel: n }),
              !!i && (0, e.jsx)(tc, { editModel: n }),
              (0, e.jsx)(il, { editModel: n }),
              (0, e.jsx)(Wd, { editModel: n }),
              o && (0, e.jsx)(Zd, {}),
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
                className: Ga.LanguageControlsCtn,
                children: [
                  (0, s.we)("#EventEditor_LangaugeDesc"),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(f().FlexRowContainer, Ga.ToolContainer),
                    children: [
                      (0, e.jsx)(Qt.$A, { editModel: t }),
                      (0, e.jsx)(Jo, { editModel: t }),
                    ],
                  }),
                  i && (0, e.jsx)(Yd.s, { editModel: a.editModel }),
                ],
              }),
            }),
          });
        }
        function Zi(a) {
          const { editModel: t } = a,
            [n, i] = (0, B.q3)(() => [
              t.GetName(t.GetCurEditLanguage()) || "",
              t.GetEventType(),
            ]),
            l = n.length >= ee.dm,
            o = (0, B.q3)(() => t.BHasTag("vo_marketing_message"));
          let r = (0, s.we)("#EventEditor_EventTitle"),
            d = (0, s.we)("#EventEditor_Title_General_ttip");
          return (
            i == G.uYK
              ? (r = (0, s.we)("#EventEditor_AnnouncementTitle"))
              : i == G.ajI &&
                ((r = (0, s.we)("#EventEditor_CreatorHomeTitle")),
                (d = (0, s.we)("#EventEditor_Title_CreatorHome_ttip"))),
            (0, e.jsxs)(e.Fragment, {
              children: [
                o && (0, e.jsx)(Kd, {}),
                (0, e.jsxs)("div", {
                  className: f().EventEditorTextTitle,
                  children: [
                    r,
                    !!l &&
                      (0, e.jsx)("span", {
                        className: f().EventEditorTextTitleLengthInfo,
                        children: (0, s.we)(
                          "#EventEditor_EventTitle_Max_Characters_Reached",
                          ee.dm,
                        ),
                      }),
                    (0, e.jsx)($.o, { tooltip: d, className: f().tooltip_Ctn }),
                    (0, e.jsx)("span", {
                      className: (0, j.A)(
                        Ee.CharactorRemaining,
                        l ? Ee.CharactorExhausted : "",
                      ),
                      children: (0, s.we)(
                        "#EventEditor_Input_Characters_Left",
                        ee.dm - n.length,
                      ),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().InputBorder,
                  children: (0, e.jsx)("input", {
                    type: "text",
                    className: (0, j.A)({
                      [Ee.EventEditorTitleInput]: !0,
                      [Ee.MainTitle]: !0,
                      [Ee.EventEditorInputMaxLength]: l,
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
                    maxLength: ee.dm,
                  }),
                }),
              ],
            })
          );
        }
        function $d(a) {
          const { editModel: t } = a,
            n = (0, B.q3)(() => t.GetSubTitle(t.GetCurEditLanguage()) || ""),
            i = n.length >= ee.Pd;
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
                      ee.Pd,
                    ),
                  }),
                  (0, e.jsx)($.o, {
                    tooltip: (0, s.we)(
                      "#EventEditor_SubTitle_General_ttip",
                      ee.Pd,
                    ),
                    className: f().tooltip_Ctn,
                  }),
                  (0, e.jsx)("span", {
                    className: (0, j.A)(
                      Ee.CharactorRemaining,
                      i ? Ee.CharactorExhausted : "",
                    ),
                    children: (0, s.we)(
                      "#EventEditor_Input_Characters_Left",
                      ee.Pd - n.length,
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: f().InputBorder,
                children: (0, e.jsx)("input", {
                  type: "text",
                  className: (0, j.A)(
                    Ee.EventEditorTitleInput,
                    Ee.Subtitle,
                    i ? Ee.EventEditorInputMaxLength : "",
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
                  maxLength: ee.Pd,
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
              ? (l = (0, s.we)("#EventEditor_Summary_Placeholder", ee.p$))
              : (l =
                  (0, s.we)("#EventEditor_Summary_Autogenerated") +
                  ee.lh.GenerateSummaryFromText(i)));
          let o = n.length >= ee.p$;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: Ee.EventEditorInputPaneContents,
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
                          ee.p$,
                        ),
                      }),
                      (0, e.jsx)($.o, {
                        tooltip: (0, s.we)("#EventEditor_Summary_Ttip", ee.p$),
                        className: f().tooltip_Ctn,
                      }),
                      (0, e.jsx)("span", {
                        className: (0, j.A)(
                          Ee.CharactorRemaining,
                          o ? Ee.CharactorExhausted : "",
                        ),
                        children: (0, s.we)(
                          "#EventEditor_Input_Characters_Left",
                          ee.p$ - n.length,
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsx)("textarea", {
                    className: (0, j.A)(
                      Ee.EventEditorTitleInput,
                      Ee.Summary,
                      o ? Ee.EventEditorInputMaxLength : "",
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
                    maxLength: ee.p$,
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
                  (0, e.jsx)($.o, {
                    tooltip: (0, s.we)("#EventEditor_ReferencedAppIDs_Tooltip"),
                    className: f().tooltip_Ctn,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: Ee.SaleImportURL,
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
                (0, e.jsx)(Yt.A, {
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
            [n] = (0, Se.t7)(t, {});
          return (0, e.jsx)("div", {
            className: Ee.ResultRow,
            children: (0, e.jsxs)("div", {
              className: Ee.GameName,
              children: [
                " ",
                (0, Wi.EK)((n == null ? void 0 : n.GetName()) || "") +
                  ` (${t})`,
                " ",
              ],
            }),
          });
        }
        const nc = S.lazy(() => u.e(27257).then(u.bind(u, 27257)));
        function sc(a) {
          const { editModel: t, refOnInsertImage: n } = a,
            i = (0, ui.LJ)(),
            [l, o] = ic(t),
            r = (0, B.q3)(() => t.GetEventType()),
            d = (0, ie.QS)(
              (c) => {
                if (!c) return;
                const g = (_, v) => (0, Md.fW)(c, _, v);
                return (
                  (n.current = g),
                  () => {
                    n.current == g && (n.current = void 0);
                  }
                );
              },
              [n],
            ),
            m = S.useMemo(() => {
              const c = D.iA.is_support;
              return (0, Ld.BY)({
                bIncludeMedia: D.UF.CAN_UPLOAD_IMAGES,
                bIncludeValveOnly: c,
              });
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().LeftCol, Ga.DescEditorPadding),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children:
                  r == G.uYK
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
                ? (0, e.jsx)(S.Suspense, {
                    children: (0, e.jsx)(nc, {
                      editModel: t,
                      refOnInsertImage: n,
                      limitBBCode: m,
                    }),
                  })
                : (0, e.jsx)(Bd.I, {
                    fnGetCurText: () =>
                      t.GetDescription(t.GetCurEditLanguage()),
                    fnOnTextChange: (c) => {
                      var g;
                      return t.SetDescription(
                        t.GetCurEditLanguage(),
                        ((g = c == null ? void 0 : c.currentTarget) == null
                          ? void 0
                          : g.value) || "",
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
                    classNameForTextArea: Ee.EventEditorDescription,
                    clanSteamID: t.GetClanSteamID(),
                  }),
            ],
          });
        }
        function ic(a) {
          const t = "partnerEventsRichEditorOptIn",
            [i, l] = S.useState(() => {
              var r;
              return ((r = localStorage.getItem(t)) != null ? r : "1") == "1";
            }),
            o = S.useCallback(
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
                  Ga.DescEditorPadding,
                  Ga.ImagePickerCtn,
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: f().EventEditorTextTitle,
                    children: [
                      (0, s.we)("#ImagePicker_PreviousImages2"),
                      (0, e.jsx)($.o, {
                        tooltip: (0, s.we)("#ImagePicker_Images_ttip"),
                        className: f().tooltip_Ctn,
                      }),
                    ],
                  }),
                  (0, e.jsx)(Nd.G, {
                    bShowLightBox: !0,
                    appid: l,
                    clanSteamID: i,
                    imageInsertCallBack: n,
                    fnSetImageURL: t.SetImageURL,
                    rgRealmList: o,
                    fnLangHasData: t.BHasTitleImage,
                    fnGetImageHash: t.GetImageHashAndExt,
                    partnerEventStore: M.mh,
                  }),
                ],
              })
            : null;
        }
        function lc(a) {
          return (0, e.jsx)("div", {
            className: it.TutoralCtn,
            children: (0, e.jsxs)("div", {
              className: it.ExplanationCtn,
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
        function qi(a) {
          const { editModel: t } = a,
            [n, i] = (0, B.q3)(() => [t.GetGID(), t.GetClanAccountID()]),
            l = !!n,
            { creatorHome: o } = (0, rt.FV)(i),
            r = null,
            d = o ? o.GetCreatorHomeURL(r) + "admin/curator_edit" : void 0,
            m = o ? o.GetCreatorHomeURL(r) + "#edit" : void 0;
          return (0, e.jsxs)("div", {
            className: it.CreatorHomeEditCtn,
            children: [
              (0, e.jsx)(Xi, { editModel: t }),
              (0, e.jsx)(Zi, { editModel: t }),
              l &&
                o &&
                (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("div", {
                    className: it.AdminLinkCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: it.LeftCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: it.Label,
                            children: (0, s.we)(
                              "#EventEditor_Event_CreatorHome_AdminAvatarLabel",
                            ),
                          }),
                          (0, e.jsx)("img", {
                            src: o.GetAvatarURLFullSize(),
                            className: it.AvatarImage,
                          }),
                          (0, e.jsx)("div", {
                            className: it.EditLink,
                            children: (0, s.oW)(
                              "#EventEditor_Event_CreatorHome_AdminLinkAvatarLabel",
                              m ? (0, e.jsx)("a", { href: m }) : void 0,
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: it.RightCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: it.Label,
                            children: (0, s.we)(
                              "#EventEditor_Event_CreatorHome_AdminTaglineLabel",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: it.Tagline,
                            children: o.GetTagLine(),
                          }),
                          (0, e.jsx)("div", {
                            className: it.EditLink,
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
                  className: it.SaveWarningCtn,
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
            { creatorHome: o } = (0, rt.FV)(i),
            d = o
              ? o.GetCreatorHomeURL(null) + "admin/creatorhome_link"
              : void 0,
            c = (o == null ? void 0 : o.GetLinkedEventGID()) == n;
          return (0, e.jsxs)("div", {
            className: (0, j.A)(
              it.SelectedExplanationCtn,
              (!l || !c) && it.Warning,
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
        var rc = u(30976),
          dc = u(84865);
        function zn(a) {
          const { editModel: t, mode: n } = a,
            [i, l] = (0, B.q3)(() => [t.GetGID(), t.GetEventType()]);
          return i
            ? (0, e.jsx)(dc.sn, {
                children: (0, e.jsx)(ur, {
                  children: (0, e.jsx)(cc, { editModel: t, mode: n }),
                }),
              })
            : l == G.ajI
              ? (0, e.jsx)(qi, { editModel: t })
              : (0, e.jsx)("div", {
                  className: (0, j.A)(ye.SaleContainer, "SaleContainer"),
                  children: (0, s.we)("#Sale_SaveFirst"),
                });
        }
        function cc(a) {
          const { editModel: t, mode: n } = a,
            [i, l, o, r, d, m, c] = (0, B.q3)(() => {
              var me;
              return [
                t.GetEventType(),
                t.GetEventModel().jsondata.sale_presenters,
                t.GetEventModel().jsondata,
                t.GetEventModel().clanSteamID,
                t.GetGID(),
                ((me = t.GetEventModel().jsondata.sale_presenters) == null
                  ? void 0
                  : me.length) > 0,
                t.BVisible(),
              ];
            }),
            { creatorHome: g } = (0, rt.FV)(r.GetAccountID()),
            { bRequiresHostDisclaimer: _ } = (0, Te.lA)(r.GetAccountID(), d),
            v = Rt.WN.includes(r.GetAccountID()),
            h = i == G.ajI;
          (0, S.useEffect)(() => {
            dt.oq.Get().EnsureLoaded(t),
              !dt.oq.Get().BHasExplicitSettings(t) &&
                t.GetSaleSectionCount() > 10 &&
                (0, dt.TA)();
          }, [t]);
          const x = S.useCallback((me) => {
              (0, dt.Nx)(me.strSectionId) && (0, dt.mi)(me.strSectionId);
            }, []),
            b = (0, ve.Dd)(t.GetClanSteamID()),
            E = (0, ve.Dd)(t.GetClanSteamID(), !0);
          if (
            !t.BIsSourceEventSaleEnabled() &&
            o.clone_from_event_gid &&
            o.clone_from_sale_enabled &&
            (!g || !g.BHasClanAccountFlagSet(la.Wv.Jn))
          )
            return (0, e.jsxs)("div", {
              className: (0, j.A)(ye.SaleContainer, "SaleContainer"),
              children: [
                (0, e.jsx)("div", {
                  className: Jt.WarningStyles,
                  children: (0, s.we)("#Sale_CloneNotReady"),
                }),
                (0, e.jsx)(Gi, { mode: n }),
              ],
            });
          let y = "#Sale_title",
            P = "doc/marketing/event_tools/sales/tools";
          n == Ka
            ? ((y = "#Sale_UpdateLandingPage_title"),
              (P = "doc/marketing/event_tools/updatelandingpages/tools"))
            : n == Za &&
              ((y = "#Sale_CreatorHome_title"),
              (P = "doc/marketing/event_tools/creatorhome/tools"));
          const { bVisible: N } = (0, J.Yp)(t.GetEventModel(), E),
            { bVisible: q } = (0, J._5)(t.GetEventModel(), E),
            { bVisible: le } = (0, J.Ao)(t.GetEventModel()),
            fe = N || q || (le && b);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(ye.SaleContainer, "SaleContainer"),
            children: [
              !h && (0, e.jsx)(Gi, { mode: n }),
              (0, e.jsxs)("div", {
                className: W.EventEditorTextTitleCtn,
                children: [
                  (0, e.jsx)("span", {
                    className: (0, j.A)(W.EventEditorTextTitle, W.FlexGrow),
                    children: (0, s.we)(y),
                  }),
                  (0, e.jsx)(L.uU, {
                    href: D.TS.PARTNER_BASE_URL + P,
                    className: (0, j.A)(W.doclink),
                    children: (0, e.jsx)("span", {
                      children: (0, s.we)("#Broadcast_documentation"),
                    }),
                  }),
                ],
              }),
              h && (0, e.jsx)(qi, { editModel: t }),
              (0, e.jsxs)(fr, {
                children: [
                  !!(!v && (!_ || m)) &&
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
                      (0, e.jsx)(pd, { children: (0, e.jsx)(ld, {}) }),
                      (0, e.jsx)(sd, { editModel: t, onSelected: x }),
                      (0, e.jsx)(Fr, { editModel: t }),
                      h &&
                        (0, e.jsx)(It, {
                          strSectionId: "SalePageEdit_CreatorHomeTutorial",
                          hasMinimize: !0,
                          strTitle: (0, s.we)("#Sale_PageCreatorHomeTutorial"),
                          children: (0, e.jsx)(lc, {}),
                        }),
                      fe &&
                        (0, e.jsx)(It, {
                          strSectionId: "SalePageEdit_Config",
                          hasMinimize: !0,
                          strTitle: (0, s.we)("#Sale_PageConfigOptions"),
                          children: (0, e.jsx)(Nr, {
                            salePage: N,
                            updateLandingPage: q,
                          }),
                        }),
                      (0, e.jsx)(uc, { ...a }),
                      (0, e.jsx)(It, {
                        strSectionId: "SalePageEdit_AllArtworkCtn",
                        hasMinimize: !0,
                        strTitle: (0, s.we)(
                          h
                            ? "#Sale_Artwork_Sections_Page"
                            : "#Sale_Artwork_Sections",
                        ),
                        children: (0, e.jsx)(hr, { editModel: t }),
                      }),
                      (t.BHasTag("contenthub") ||
                        t.GetEventModel().BUsesContentHubForItemSource()) &&
                        (0, e.jsx)(It, {
                          strSectionId: "SalePageEdit_ContentHub",
                          hasMinimize: !0,
                          strTitle: "Content Hub Settings",
                          strToolTip:
                            "Manage settings for content hubs, including overrides for specific hubs and hub-based sales.",
                          children: (0, e.jsx)(Ul, { editModel: t }),
                        }),
                      (0, e.jsx)(hc, { editModel: t }),
                      (0, e.jsx)(It, {
                        strSectionId: "SalePageEdit_SocialModule",
                        hasMinimize: !0,
                        strTitle: (0, s.we)("#Sale_DefaultSocialModule"),
                        children: (0, e.jsx)(Dd, { editModel: t }),
                      }),
                      (0, e.jsx)("div", { className: ye.SectionDivider }),
                      !h &&
                        (0, e.jsx)(It, {
                          strSectionId: "SalePageEdit_BrowseMore",
                          strTitle: `(VO) ${(0, s.we)("#Sale_BrowseMore")}`,
                          valveOnlyClanSteamID: t.GetClanSteamID(),
                          requireAdmin: !0,
                          children: (0, e.jsx)(mc, { editModel: t }),
                        }),
                      !h &&
                        (0, e.jsx)(It, {
                          strSectionId: "SalePageEdit_SubMenuEditor",
                          hasMinimize: !0,
                          strTitle: "(VO) Sub Menu Editor",
                          valveOnlyClanSteamID: t.GetClanSteamID(),
                          dataToCopy: Bn.E.k_EventData_SubMenu,
                          children: (0, e.jsx)(Gd.vk, { editModel: t }),
                        }),
                      (0, e.jsx)(It, {
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
              strExternalSaleEventType: g,
              fnSetExternalSaleEventType: _,
            } = (0, Te.g7)(o.GetAccountID(), r),
            v = (0, Sd.iR)(n.GetEventModel());
          if (c) return (0, e.jsx)(H.t, { size: "small" });
          const h = l == G.ajI;
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(It, {
              strSectionId: "SalePageEdit_TaggedItems",
              hasMinimize: !0,
              strToolTip: (0, s.we)("#Sale_TagFilter_SectionTooltip"),
              strTitle: (0, s.we)(
                "#Sale_TaggedItemsSection",
                v
                  ? (t = m == null ? void 0 : m.length) != null
                    ? t
                    : 0
                  : n.GetEventModel().GetTaggedItems().length,
              ),
              children: [
                v && (0, e.jsx)(Li.w7, { editModel: n }),
                !v && (0, e.jsx)(Li.PT, { editModel: n }),
                !h &&
                  (0, e.jsxs)(ve.Eb, {
                    clanSteamID: o,
                    children: [
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(fi, {
                        strExternalSaleEventType: g,
                        fnSetExternalSaleEventType: _,
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
              const P = new Map();
              for (const [N, q] of l.GetSaleSections().entries())
                P.set(q.section_type, (P.get(q.section_type) || 0) + 1),
                  y == -1 && q.section_type == "tabs" && (y = N);
              return [l.GetSaleSections().length, P, y, (0, an.dy)()];
            }),
            [c, g] = S.useState(""),
            _ = (y) => {
              var P, N;
              const q =
                (P = c == null ? void 0 : c.trim().toLowerCase()) != null
                  ? P
                  : "";
              if (
                q.length == 0 ||
                ((N = y.internal_section_title) != null &&
                  N.toLowerCase().includes(q)) ||
                y.section_type.includes(q)
              )
                return !0;
              const le = (0, Ni.yO)(
                y,
                l,
                i,
                l.clanSteamID.GetAccountID(),
                wt.uF,
              );
              return typeof le == "string" && le.toLowerCase().includes(q);
            },
            v =
              m !== void 0 ||
              ((t = c == null ? void 0 : c.trim()) == null
                ? void 0
                : t.length) > 0,
            h = l
              .GetSaleSections()
              .filter(
                (y, P) => (m === void 0 || P < d || (0, Oi.bF)(m, y)) && _(y),
              ),
            x = pc(h),
            b = (y, P) => {
              var N;
              const q = Fn.mj + y.unique_id,
                le = (0, kt.vx)(y.section_type) && r.get(y.section_type) > 1;
              return (0, e.jsx)(
                Kt,
                {
                  strSectionId: q,
                  children: (0, e.jsx)(kt.m, {
                    ref:
                      P == h.length - 1
                        ? (fe) => x(fe, h[P].unique_id)
                        : void 0,
                    index: P,
                    saleSection: y,
                    isDuplicateSingleton: le,
                    editModel: n,
                    editLanguage: i,
                  }),
                },
                Fn.mj + ((N = y.unique_id) != null ? N : P),
              );
            },
            E = (y, P) => {
              (0, Ft.yY)(n.GetEventModel().jsondata.sale_sections, y, P),
                n.SetDirty(C.IQ.jsondata_sales);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: ye.CustomSectionsTitle,
                children: [
                  (0, e.jsx)("div", {
                    className: W.EventEditorTextTitle,
                    children: (0, s.we)("#Sale_Sections_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: ye.EventEditorSectionSearchLabel,
                    children: (0, s.we)("#Sale_Sections_Search"),
                  }),
                  (0, e.jsx)(p.pd, {
                    type: "text",
                    value: c,
                    onChange: (y) => g(y.target.value),
                  }),
                ],
              }),
              o == 0
                ? (0, e.jsx)(_c, {})
                : (0, e.jsx)(Yt.A, {
                    items: h,
                    bDisabled: v,
                    onMove: E,
                    render: b,
                  }),
              (0, e.jsxs)("div", {
                id: "sale_editor_button_after_all_sections",
                className: ye.AddSectionBtnCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, j.A)(
                      W.SaleSectionHeader,
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
        function _c(a) {
          return (0, e.jsxs)("div", {
            id: "NoSaleSections",
            className: (0, j.A)(ye.SaleSection, ye.InEditor),
            children: [
              (0, e.jsx)("div", {
                className: (0, j.A)(W.SaleSectionHeader, "SaleSectionHeader"),
                children: (0, s.we)("#Sale_SectionListPlaceholder_Header"),
              }),
              (0, e.jsx)("div", {
                className: ye.SaleSectionPlaceholder,
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
            { openColorPicker: d } = (0, Da.p)(),
            m = (h) => {
              d(h, {
                color: l,
                onChange: (x) => v(x, "sale_browsemore_color"),
              });
            },
            c = (h) => {
              const { sale_browsemore_bgcolor: x } = t.GetEventModel().jsondata;
              d(h, {
                color: x,
                onChange: (b) => v(b, "sale_browsemore_bgcolor"),
              });
            },
            g = (h) => {
              (t.GetEventModel().jsondata.sale_browse_more_button = h),
                t.SetDirty(C.IQ.jsondata_sales);
            },
            _ = (h) => {
              const x = t.GetEventModel().jsondata;
              (x[h.target.name] = h.target.value),
                t.SetDirty(C.IQ.jsondata_sales);
            },
            v = (h, x) => {
              const b = t.GetEventModel().jsondata;
              (b[x] = h), t.SetDirty(C.IQ.jsondata_sales);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.RF, {
                onChange: g,
                label: (0, s.we)("#Sale_BrowseMore_Desc"),
                checked: r,
              }),
              r &&
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)(p.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_BrowseMore_URL"),
                      name: "sale_browsemore_url",
                      placeholder: (0, s.we)("#Sale_BrowseMore_URL"),
                      value: i,
                      onChange: _,
                    }),
                    (0, e.jsx)(p.$n, {
                      onClick: m,
                      className: W.EventEditorTextTitle,
                      style: { color: l, backgroundColor: o },
                      children: (0, s.we)("#Sale_Section_Label_Color"),
                    }),
                    (0, e.jsx)(p.$n, {
                      onClick: c,
                      className: W.EventEditorTextTitle,
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
        function pc(a) {
          const t = a.map((o) => o.unique_id).join(","),
            [n, i] = S.useState(t);
          return (
            S.useEffect(() => {
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
              const i = k.b.InitFromClanID(t),
                l = `${La.TS.COMMUNITY_BASE_URL}gid/${i.ConvertTo64BitString()}/ajaxgetsalesectionstats?event_gid=${a}`,
                o = { event_gid: a };
              return (await oe().get(l, { params: o })).data.results || [];
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
                  (0, e.jsx)(p.$n, {
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
                      Ue.g.WriteCSVToFile(i, l);
                    },
                    children: "Export to CSV",
                  }),
                  (0, e.jsx)(Ec, { rgStats: n }),
                  (0, e.jsx)(fc, { rgStats: n }),
                ],
              })
            : (0, e.jsx)(H.t, {});
        }
        function $i(a, t) {
          return !t || t == 0 ? "" : "" + ((a * 100) / t).toFixed(1);
        }
        function $t(a) {
          return new Intl.NumberFormat((0, s.l4)(), {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(a);
        }
        function Ec(a) {
          const { rgStats: t } = a,
            n = (0, S.useMemo)(() => {
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
                            children: $t(n.total_impressions),
                          }),
                          (0, e.jsx)("td", { children: $t(n.total_views) }),
                          (0, e.jsx)("td", {
                            children: $i(n.total_views, n.total_impressions),
                          }),
                          (0, e.jsx)("td", {
                            children: $t(n.total_owner_impressions),
                          }),
                          (0, e.jsx)("td", {
                            children: $t(n.total_owner_views),
                          }),
                          (0, e.jsx)("td", { children: $t(n.total_wishlists) }),
                          (0, e.jsx)("td", {
                            children: $i(
                              n.total_wishlists,
                              n.total_impressions,
                            ),
                          }),
                          (0, e.jsx)("td", {
                            children: $t(n.total_add_to_carts),
                          }),
                          (0, e.jsx)("td", { children: $t(n.total_ignores) }),
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
            n = (0, S.useMemo)(() => {
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
            i = (0, S.useMemo)(
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
        var bc = u(35076),
          jc = u(70377),
          Lt = u(25279);
        const cn = "vo_sale_store_capsules",
          Hn = [
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
          Cc = Hn.map((a) => a.artworkType);
        function wc(a) {
          return "#EventEditor_ArtworkType_" + a.artworkType;
        }
        function Dc(a) {
          var t;
          return (t = Hn.find((n) => n.artworkType === a)) == null
            ? void 0
            : t.type;
        }
        function yc(a, t, n) {
          var i, l;
          return (l =
            (i = a == null ? void 0 : a[t]) == null ? void 0 : i[n]) != null
            ? l
            : null;
        }
        function Tc(a, t) {
          return t
            ? `${bt.TS.STORE_ITEM_BASE_URL}steam/clans/${a}/${t}`
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
          const o = Ft.$Y(
            [...((l = a == null ? void 0 : a[t]) != null ? l : [])],
            G.bP9,
            null,
          );
          return (o[n] = i), { ...a, [t]: o };
        }
        function Gc(a, t) {
          const n = { ...a };
          return delete n[t], n;
        }
        var Lc = u(5471),
          Nc = u(91261),
          Mc = u(47155),
          Na = u.n(Mc);
        function to(a, t) {
          return a.BHasSaleEnabled() && (0, J.Yp)(a, t).bVisible;
        }
        function Bc(a, t) {
          return to(a.GetEventModel(), t) ? t || a.BHasTag(cn) : !1;
        }
        function Oc(a) {
          const { editModel: t } = a,
            n = (0, S.useCallback)(
              (r, d, m) => {
                (0, te.h5)(() => {
                  const c = t.GetEventModel().jsondata;
                  (c.sale_store_capsules = Ac(c.sale_store_capsules, r, d, m)),
                    t.SetDirty(C.IQ.jsondata_image);
                });
              },
              [t],
            ),
            i = (0, S.useCallback)(
              (r) => {
                (0, te.h5)(() => {
                  const d = t.GetEventModel().jsondata;
                  (d.sale_store_capsules = Gc(d.sale_store_capsules, r)),
                    t.SetDirty(C.IQ.jsondata_image);
                });
              },
              [t],
            ),
            l = (0, S.useCallback)(
              (r, d, m, c, g) => {
                const _ = Dc(g);
                if (!_) {
                  (0, xa.wT)(
                    !1,
                    "Unexpected artwork type for a sale store capsule: " + g,
                  );
                  return;
                }
                const v = (0, jc.G)(r, d);
                v != null && v.image
                  ? n(_, m, v)
                  : (0, xa.wT)(
                      !1,
                      "Sale store capsule conversion produced no image: " + r,
                    );
              },
              [n],
            ),
            o = (0, B.q3)(() => !t.BHasTag(cn));
          return (0, e.jsxs)("div", {
            className: (0, j.A)(
              be().ArtworkSelectorContainer,
              o && f().ValveOnlyBackground,
            ),
            children: [
              (0, e.jsx)("div", {
                className: be().Title,
                children:
                  (o ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_SaleStoreCapsules_Title"),
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(be().SelectImageBlock, be().Tips),
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
                className: (0, j.A)(be().SelectImageBlock, Na().UploaderCtn),
                children: (0, e.jsx)(Lc.a, {
                  rgRealmList: t.GetIncludedRealmList(),
                  rgSupportArtwork: [...Cc],
                  strUploadAjaxURL: (0, bc.vH)(t.GetClanSteamID()),
                  fnOnUploadSuccess: l,
                  bTwoPhaseUpload: !0,
                  bDirectTempStorageUpload: !0,
                }),
              }),
              Hn.map((r) =>
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
            d = (0, S.useCallback)(
              (g) => {
                var _;
                const v = yc(o, n.type, g);
                return v ? Tc(r, (_ = v.image_2x) != null ? _ : v.image) : null;
              },
              [o, n.type, r],
            ),
            m = (0, S.useMemo)(() => Ic(o, n.type), [o, n.type]),
            c = Lt.Fj[n.artworkType];
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
                      (0, Lt.qj)(c.width),
                      "px x ",
                      (0, Lt.qj)(c.height),
                      "px",
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(be().SelectImageBlock, be().Tips),
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
              (0, e.jsx)(Nc.z, {
                rgAssetLangs: m,
                fnGetAssetUrl: d,
                fnDeletAssetLang: (g) => i(n.type, g, null),
                fnDeleteAllAssets: () => l(n.type),
                imageClassname: Na().CapsulePreview,
                bVerifyAssets: !0,
              }),
            ],
          });
        }
        var Ma = u(34032),
          Rc = Object.defineProperty,
          kc = Object.getOwnPropertyDescriptor,
          Fe = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? kc(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && Rc(t, n, l), l;
          };
        class Ge {
          constructor(t) {
            (this.m_editModel = void 0),
              (0, te.Gn)(this),
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
                if (n != G.xPp)
                  this.GetJSONData().broadcast_language = new Array();
                else return;
              const o = this.GetJSONData().broadcast_language;
              if (o.length < i && n == G.xPp) return;
              for (; o.length <= i; ) o.push(G.xPp);
              if (o[i] != n) {
                for (o[i] = n; o.length > 0 && o[o.length - 1] == G.xPp; )
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
            const l = (0, Ft.$Y)(
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
        Fe([te.sH], Ge.prototype, "m_editModel", 2),
          Fe([te.XI], Ge.prototype, "SetBroadcastEnabled", 1),
          Fe([te.XI], Ge.prototype, "SetBroadcastForceBanner", 1),
          Fe([te.XI], Ge.prototype, "SetChangeSetting", 1),
          Fe([te.XI], Ge.prototype, "SetTitleToken", 1),
          Fe([te.XI], Ge.prototype, "SetCustomTitleLocalize", 1),
          Fe([te.XI], Ge.prototype, "AddAccountToWhiteList", 1),
          Fe([te.XI], Ge.prototype, "DeleteWhiteListAccount", 1),
          Fe([te.XI], Ge.prototype, "SetWhiteListAccountLanguage", 1),
          Fe([te.XI], Ge.prototype, "SetWhiteListAccountPriority", 1),
          Fe([te.XI], Ge.prototype, "RemoveWhiteListAtIndex", 1),
          Fe([te.XI], Ge.prototype, "ClearWhiteList", 1),
          Fe([te.XI], Ge.prototype, "SetBroadcastContentType", 1),
          Fe([te.XI], Ge.prototype, "SetPrerollVODAppID", 1),
          Fe([te.XI], Ge.prototype, "SetPrerollTrailer", 1),
          Fe([te.XI], Ge.prototype, "SetDropsEnabled", 1),
          Fe([te.XI], Ge.prototype, "SetItemDropManual", 1),
          Fe([te.XI], Ge.prototype, "SetItemDropMinutes", 1),
          Fe([te.XI], Ge.prototype, "SetItemDropDetailEvents", 1),
          Fe([te.XI], Ge.prototype, "SetWidePlayerLayout", 1),
          Fe([te.XI], Ge.prototype, "SetWidePlayerSupportChat", 1),
          Fe([te.XI], Ge.prototype, "SetChatAnnouncementGiveawayGID", 1);
        var Vn = u(44894),
          Fc = u(98794),
          Uc = Object.defineProperty,
          zc = (a, t, n) =>
            t in a
              ? Uc(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          ao = (a, t, n) => zc(a, typeof t != "symbol" ? t + "" : t, n);
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
              const l = await oe().get(
                D.TS.COMMUNITY_BASE_URL + "actions/ajaxlistfriends",
              );
              if (
                (l == null ? void 0 : l.status) == 200 &&
                ((t = l.data) == null ? void 0 : t.success) == Xe.R &&
                (n = l.data) != null &&
                n.friends
              )
                return (
                  (this.m_rgFriendsList = l.data.friends), this.m_rgFriendsList
                );
              (this.m_rgFriendsList = []), (i = (0, Me.H)(l));
            } catch (l) {
              i = (0, Me.H)(l);
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
        function Hc() {
          const [a, t] = S.useState(so.Get().GetFriendLiset());
          return (
            S.useEffect(() => {
              a || so.Get().LoadFriendList().then(t);
            }, []),
            a
          );
        }
        var Vc = u(35098),
          Wn = u(24806),
          Wc = u(1885),
          Qc = u(86836),
          ea = u.n(Qc),
          Yc = u(25046),
          io = u(29522);
        function Jc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            i = (o) => {},
            l = [
              {
                name: "Trailer",
                key: "overview",
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(Kc, { ...a }),
                }),
                onClick: i,
              },
              {
                name: "Deprecated VOD",
                key: "mature",
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(Zc, { ...a }),
                }),
                onClick: i,
              },
            ];
          return (0, e.jsxs)(ve.Eb, {
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
        function Kc(a) {
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
              (0, e.jsx)(p.pd, {
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
              (0, e.jsx)(p.pd, {
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
        function Zc(a) {
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
              (0, e.jsx)(p.pd, {
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
        var qc = Object.defineProperty,
          Xc = Object.getOwnPropertyDescriptor,
          Et = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Xc(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && qc(t, n, l), l;
          };
        let ct = class extends S.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                strCustomTitle: "",
                customTitleLanguage: G.Bhc,
                whitelistSteamID: "",
              });
          }
          GetBroadcastEditModel() {
            return new Ge(this.props.editModel);
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
            i = (0, en.lX)(
              (0, e.jsx)(Da.$, {
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
              l = s.A0.GetLanguageListForRealms([on.TU.k_ESteamRealmGlobal]);
            for (const r of l) {
              const m = {
                label: (0, s.we)("#language_selection_" + (0, G.LgB)(r)),
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
              className: Ie().EventEditorInputPaneContents,
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
                  children: (0, e.jsx)(p.RF, {
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
                          (0, e.jsx)(p.m, {
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
                            className: ea().customTitleOptionsCtn,
                            children: [
                              (0, e.jsxs)("div", {
                                className: (0, j.A)(
                                  f().FlexRowContainer,
                                  ea().CustomTitleCtn,
                                ),
                                children: [
                                  (0, e.jsx)("div", {
                                    style: { width: "400px" },
                                    children: (0, e.jsx)(p.pd, {
                                      placeholder: (0, s.we)(
                                        "#Broadcast_use_custom",
                                      ),
                                      onChange: this.OnCustomTitleChange,
                                      value: this.state.strCustomTitle,
                                    }),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: ea().LanguageContainer,
                                    children: (0, e.jsx)(p.m, {
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
                                    className: ea().AddTitleButton,
                                    children: (0, e.jsx)(p.jn, {
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
                                              ea().TitleRowCtn,
                                              f().FlexRowContainer,
                                            ),
                                            children: [
                                              r,
                                              " (",
                                              (0, s.we)(
                                                "#language_selection_" +
                                                  (0, G.LgB)(d),
                                              ),
                                              ")",
                                              (0, e.jsx)("div", {
                                                style: { marginLeft: "auto" },
                                                children: (0, e.jsx)("img", {
                                                  className: da().RemoveIcon,
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
                      (0, e.jsx)(p.$n, {
                        onClick: this.OnOpenGradientOuterColor,
                        className: f().EventEditorTextTitle,
                        style: {
                          backgroundColor:
                            this.props.editModel.GetEventModel().jsondata
                              .broadcast_gradient_outer_color,
                        },
                        children: (0, s.we)("#Broadcast_GradientOuterColor"),
                      }),
                      (0, e.jsx)(p.$n, {
                        onClick: this.OnOpenGradientInnerColor,
                        className: f().EventEditorTextTitle,
                        style: {
                          backgroundColor:
                            this.props.editModel.GetEventModel().jsondata
                              .broadcast_gradient_inner_color,
                        },
                        children: (0, s.we)("#Broadcast_GradientInnerColor"),
                      }),
                      a.GetEventType() != G.ajI &&
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
                        children: (0, e.jsx)(p.RF, {
                          onChange: this.OnBroadcastForceBanner,
                          label: (0, s.we)("#Broadcast_artwork_banner"),
                          tooltip: (0, s.we)("#Broadcast_artwork_banner_hint"),
                          checked: a.GetEventModel().BHasBroadcastForceBanner(),
                        }),
                      }),
                      (0, e.jsx)(We.it, {
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
                        partnerEventStore: M.mh,
                      }),
                      (0, e.jsx)(We.it, {
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
                        partnerEventStore: M.mh,
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        Et([ie.oI], ct.prototype, "OnBroadcastOptionChange", 1),
          Et([ie.oI], ct.prototype, "OnBroadcastForceBanner", 1),
          Et([ie.oI], ct.prototype, "OnChatChange", 1),
          Et([ie.oI], ct.prototype, "OnTitleChange", 1),
          Et([ie.oI], ct.prototype, "OnCustomTitleChange", 1),
          Et([ie.oI], ct.prototype, "OnCustomTitleLanguageChange", 1),
          Et([ie.oI], ct.prototype, "AddTitle", 1),
          Et([ie.oI], ct.prototype, "RemoveTitle", 1),
          Et([ie.oI], ct.prototype, "OnSaleColorChange", 1),
          Et([ie.oI], ct.prototype, "OnOpenGradientInnerColor", 1),
          Et([ie.oI], ct.prototype, "OnOpenGradientOuterColor", 1),
          (ct = Et([R.PA], ct));
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
                    className: Ie().BroadcastAccountList,
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
                      const l = new k.b(i);
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
            n = Hc();
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
                  (0, en.lX)(
                    (0, e.jsx)("div", {
                      className: f().DropDownScroll,
                      children: (n || []).map((l) =>
                        (0, e.jsx)(
                          Pn.kt,
                          {
                            onSelected: () => {
                              const o = new k.b(l.steamid);
                              t.AddAccountToWhiteList(o.GetAccountID());
                            },
                            children: (0, e.jsxs)("div", {
                              style: { display: "flex", alignItems: "center" },
                              children: [
                                (0, e.jsx)("img", {
                                  className: ea().WhitelistAvatar,
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
          return (0, e.jsxs)(ve.Eb, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, j.A)(f().ValveOnlyBackground),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: "(VO) " + (0, s.we)("#Broadcast_DropsTitle"),
              }),
              (0, e.jsx)(p.Yh, {
                onChange: (c) => n.SetDropsEnabled(c),
                label: (0, s.we)("#Broadcast_Drops_Enable"),
                checked: !!i,
              }),
              !!i &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(p.Yh, {
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
              (0, e.jsx)(p.pd, {
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
              (0, e.jsx)(p.Yh, {
                onChange: (o) => n.SetWidePlayerLayout(o),
                label: (0, s.we)("#Broadcast_WidePlayer_Use"),
                tooltip: (0, s.we)("#Broadcast_WidePlayer_ttip"),
                checked: !!i,
              }),
              (0, e.jsx)(p.Yh, {
                onChange: (o) => n.SetWidePlayerSupportChat(o),
                label: (0, s.we)("#Broadcast_WidePlayer_Chat_Use"),
                tooltip: (0, s.we)("#Broadcast_WidePlayer_Chat_ttip"),
                checked: !!l,
                disabled: !i,
              }),
              (0, e.jsxs)(ve.Eb, {
                requireAdmin: !0,
                clanSteamID: t.GetClanSteamID(),
                className: (0, j.A)(f().ValveOnlyBackground),
                children: [
                  (0, e.jsx)(De.he, {
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
              let m = M.mh.GetEditModel();
              return new Ge(m);
            };
          let o = M.mh.GetEditModel().GetEventModel(),
            r = (0, B.q3)(() => o.jsondata.broadcast_whitelist.indexOf(t)),
            d = (0, B.q3)(() => {
              let m = o.jsondata.broadcast_language,
                c = G.xPp;
              return (
                r >= 0 && m && r < m.length && m[r] !== void 0 && (c = m[r]), c
              );
            });
          return n
            ? (0, e.jsx)(H.t, { size: "small", string: (0, s.we)("#Loading") })
            : i
              ? (0, e.jsxs)("div", {
                  className: (0, j.A)(da().FlexCenter, ea().AccountRow),
                  children: [
                    (0, e.jsxs)("a", {
                      className: (0, j.A)(
                        da().FlexCenter,
                        Ie().BroadcastAccountInfo,
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
                    (0, e.jsxs)(De.he, {
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
                      className: (0, j.A)(da().FlexCenter, da().RemoveIcon),
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
          const t = M.mh.GetEditModel(),
            n = new Ge(t),
            i = (r) => {
              n.SetWhiteListAccountPriority(a.accountid, r.data);
            },
            l = [
              { label: (0, s.we)("#Broadcast_Priority_Primary"), data: Ma.U7 },
              { label: (0, s.we)("#Broadcast_Priority_Featured"), data: Ma._ },
              {
                label: (0, s.we)("#Broadcast_Priority_DefaultFeatured"),
                data: Ma.zl,
              },
              { label: (0, s.we)("#Broadcast_Priority_General"), data: Ma.mP },
            ],
            o = n.GetWhiteListAccountPriority(a.accountid, Ma.mP);
          return (0, e.jsxs)(De.he, {
            toolTipContent: (0, s.we)("#Broadcast_Priority_hint"),
            className: Ie().PrioritySelector,
            children: [
              (0, e.jsxs)("span", {
                children: [(0, s.we)("#Broadcast_Priority_label"), ": "],
              }),
              (0, e.jsx)(p.m, { rgOptions: l, selectedOption: o, onChange: i }),
            ],
          });
        }
        function iu(a) {
          const t = M.mh.GetEditModel(),
            n = new Ge(t),
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
          return (0, e.jsxs)(De.he, {
            toolTipContent: (0, s.we)("#Broadcast_ContentType_Desc"),
            className: Ie().PrioritySelector,
            children: [
              (0, e.jsxs)("span", {
                children: [(0, s.we)("#Broadcast_ContentType"), ": "],
              }),
              (0, e.jsx)(p.m, {
                rgOptions: i,
                selectedOption: l,
                onChange: (o) => n.SetBroadcastContentType(o.data),
              }),
            ],
          });
        }
        var ou = u(85408),
          lu = u(75909),
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
          un = (a, t, n) => du(a, typeof t != "symbol" ? t + "" : t, n);
        const oo = class Va {
          constructor() {
            un(this, "m_mapAppIDToDLCs", new Map()),
              un(this, "m_mapAppIDToSoundTracks", new Map()),
              un(this, "m_mapPromise", new Map()),
              (0, te.Gn)(this);
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
                let o = await oe().get(l, {
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
                const l = (0, Me.H)(i);
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
              Va.s_Singleton || (Va.s_Singleton = new Va()), Va.s_Singleton
            );
          }
        };
        un(oo, "s_Singleton");
        let Ba = oo;
        function lo(a) {
          const [t, n] = useState(a),
            [i, l] = useState(Ba.Get().GetDLCForAppID(t));
          return (
            useEffect(() => {
              a &&
                (a != t || !i) &&
                Ba.Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((o) => {
                    l(o.dlcs), n(a);
                  });
            }, [t, a, i]),
            i
          );
        }
        function Lm(a) {
          const [t, n] = useState(a),
            [i, l] = useState(Ba.Get().GetSoundTracksForAppID(t));
          return (
            useEffect(() => {
              a &&
                (a != t || !i) &&
                Ba.Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((o) => {
                    l(o.soundtracks), n(a);
                  });
            }, [t, a, i]),
            i
          );
        }
        function Nm(a) {
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
        var ro = u(38080),
          cu = u(27344),
          uu = u(72805),
          hu = u(38745),
          z = u(30040),
          _u = u(22142),
          mu = Object.defineProperty,
          pu = Object.getOwnPropertyDescriptor,
          at = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? pu(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && mu(t, n, l), l;
          };
        let Nt = class extends S.Component {
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
            (0, U.pg)(
              (0, e.jsx)(F.o0, {
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
              className: z.ImgCrossCtn,
              children: (0, e.jsx)(De.he, {
                toolTipContent: (0, s.we)("#EventEmail_Template_Remove", t),
                children: (0, e.jsx)("img", {
                  className: z.ImgCross,
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
              className: (0, j.A)(t, z.DevEmailEmailBackground, z.EmailSection),
              children: [
                a.BHasHeadline() &&
                  (0, e.jsxs)(S.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("headline"),
                      (0, e.jsx)("input", {
                        type: "text",
                        className: z.HeadlineInput,
                        placeholder: (0, s.we)("#EventEmail_EnterHeadline"),
                        value: a.GetHeadline(n),
                        onChange: this.OnHeadlineChange,
                      }),
                    ],
                  }),
                a.BHasBody() &&
                  (0, e.jsxs)(S.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("body"),
                      (0, e.jsx)("textarea", {
                        className: z.BodyInput,
                        placeholder: (0, s.we)("#EventEmail_EnterBodyCopy"),
                        value: a.GetBody(n),
                        rows: 8,
                        onChange: this.OnBodyChange,
                      }),
                    ],
                  }),
                a.BHasCallToAction() &&
                  (0, e.jsxs)(S.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("action"),
                      (0, e.jsx)(va, { appid: o, section: a }),
                    ],
                  }),
                a.BHasImage() &&
                  (0, e.jsxs)(S.Fragment, {
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
                  (0, e.jsxs)(S.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("youtube"),
                      (0, e.jsxs)("div", {
                        className: z.VideoCtn,
                        children: [
                          (0, e.jsx)("img", { src: a.GetYouTubeImageURL() }),
                          !!i &&
                            (0, e.jsxs)("div", {
                              className: z.VideoInputCtn,
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
        at([ie.oI], Nt.prototype, "OnHeadlineChange", 1),
          at([ie.oI], Nt.prototype, "OnBodyChange", 1),
          at([ie.oI], Nt.prototype, "OnVideoChange", 1),
          at([ie.oI], Nt.prototype, "OnRemoveSubSection", 1),
          (Nt = at([R.PA], Nt));
        let va = class extends S.Component {
          constructor() {
            super(...arguments),
              (this.m_cancelSignal = oe().CancelToken.source()),
              (this.state = { dlcs: void 0 });
          }
          async LoadDLCForApp() {
            this.setState({
              dlcs: (
                await Ba.Get().LoadDLCAndSoundTracksForAppID(
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
              ft.uM.forEach((t) => {
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
            for (let t in ft.gs)
              if (!isNaN(Number(t))) {
                let n = ft.WH[t];
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
                        children: (0, e.jsx)(H.t, {
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
            ft.uM.forEach((n) => {
              n === a.target.value && t.SetButtonTextLock(n);
            });
          }
          OnDestinationChange(a) {
            const { section: t } = this.props;
            let n = Number(a.target.value);
            (0, te.h5)(() => {
              n < ft.gg
                ? (t.SetButtonDestination(n), t.SetButtonAppOverride(void 0))
                : (t.SetButtonDestination(ft.gs.k_EStorePage),
                  t.SetButtonAppOverride(n));
            });
          }
          OnChangeStorePageURL() {
            const { section: a } = this.props;
            (0, U.pg)(
              (0, e.jsx)(hn, {
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
              className: z.ButtonSettingContainer,
              children: [
                (0, e.jsxs)("div", {
                  className: z.ButtonSettingRow,
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
                          (0, e.jsx)($.o, {
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
                      (0, e.jsx)(p.jn, {
                        onClick: this.OnChangeStorePageURL,
                        children: (0, s.we)("#EventEmail_Section_UpdateURL"),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        at([ie.oI], va.prototype, "OnButtonLocChange", 1),
          at([ie.oI], va.prototype, "OnDestinationChange", 1),
          at([ie.oI], va.prototype, "OnChangeStorePageURL", 1),
          (va = at([R.PA], va));
        let hn = class extends S.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                bIsValid: lt.e$.IsValidStoreURL(this.props.strExistingURL),
                strURL: this.props.strExistingURL
                  ? this.props.strExistingURL
                  : "",
              });
          }
          OnURLUpdate(a) {
            let t = a.currentTarget.value;
            this.setState({ bIsValid: lt.e$.IsValidStoreURL(t), strURL: t });
          }
          render() {
            const { fnUpdateURLOnSuccess: a, closeModal: t } = this.props;
            return (0, e.jsx)(F.o0, {
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
                  className: z.ButtonDestInputSaleURL,
                  value: this.state.strURL,
                  onChange: this.OnURLUpdate,
                }),
              }),
            });
          }
        };
        at([ie.oI], hn.prototype, "OnURLUpdate", 1), (hn = at([R.PA], hn));
        function vu(a) {
          const {
              clanSteamID: t,
              section: n,
              lang: i,
              bEditor: l,
              artworkType: o,
            } = a,
            [r, d] = S.useState(i),
            m = M.mh.GetEditModel(),
            c = S.useCallback(
              (h, x, b) => {
                He.zU.GetExtensionString(h) &&
                  n.SetImage(He.zU.GetHashAndExt(h), b),
                  d(b);
              },
              [n],
            ),
            [g, _, v] = (0, B.q3)(() => [
              n.BHasSomeImage(),
              Lt.Fj[o],
              n.GetEmailImageURLWithFallback(r, t),
            ]);
          return (0, e.jsxs)("div", {
            className: z.ImagePreview,
            children: [
              (0, e.jsxs)("div", {
                className: z.FullImageCtn,
                children: [
                  (0, e.jsx)("img", {
                    width: v ? (0, Lt.qj)(_.width) : void 0,
                    height: v ? (0, Lt.qj)(_.height) : void 0,
                    src: v,
                  }),
                  !!l &&
                    (0, e.jsx)(ta, {
                      section: n,
                      clanSteamID: t,
                      lang: i,
                      artworkType: o,
                    }),
                ],
              }),
              g &&
                (0, e.jsx)(_u.h, {
                  clanSteamID: t,
                  langOverride: r,
                  fnGetImageHash: (h) => n.GetImageHash(h),
                  fnOnLanguagePreviewChange: (h) => d(h),
                  fnOnRemoveImage: (h) => n.SetImage(null, h),
                  fnOnArtworkLangChange: c,
                  realms: m.GetIncludedRealmList(),
                  fnLangHasData: m.BHasTitleImage,
                }),
            ],
          });
        }
        let ta = class extends S.Component {
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
                  let i = He.zU.GetExtensionString(n.uploadResult);
                  a.SetImage(n.uploadResult.image_hash + i, n.image.language);
                }
            } catch (t) {
              console.error("DoUpload failed:" + (0, Me.H)(t).strErrorMsg);
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
                    (0, U.pg)(
                      (0, e.jsx)(F.KG, {
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
            let t = Lt.Fj[a];
            return (0, e.jsxs)(S.Fragment, {
              children: [
                (0, e.jsx)("span", {
                  className: z.EmailInputText,
                  children: (0, s.we)("#EventEmail_SelectBrandingImage"),
                }),
                (0, e.jsx)("span", {
                  children: (0, s.we)(
                    "#EventEmail_ImageDimension",
                    (0, Lt.qj)(t.width),
                    (0, Lt.qj)(t.height),
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
                  let l = (0, Me.H)(i);
                  console.error("AddExistingClanImage: " + l.strErrorMsg, l),
                    (0, U.pg)(
                      (0, e.jsx)(F.KG, {
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
                className: z.EditImageInputCtn,
                children: (0, e.jsx)(H.t, {
                  position: "center",
                  size: "medium",
                  string: (0, s.we)("#Loading"),
                }),
              });
            const { clanSteamID: t } = this.props;
            let n = (0, ro.fY)(this.m_clanImageUploader, "emailartupload_");
            return (0, e.jsx)("div", {
              className: z.EditImageInputCtn,
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
        at([ie.oI], ta.prototype, "DoUpload", 1),
          at([ie.oI], ta.prototype, "OnDropFiles", 1),
          at([ie.oI], ta.prototype, "RenderInstructions", 1),
          at([ie.oI], ta.prototype, "OnPreviousImageSelected", 1),
          (ta = at([R.PA], ta));
        const gu =
            u.p +
            "images/applications/community/Logo_Steamworks.png?v=valveisgoodatcaching",
          Su =
            u.p +
            "images/applications/community/Logo_Steam_NoWords_Dark.png?v=valveisgoodatcaching",
          co =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAgCAYAAAAPHGYtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8FJREFUeNrsWltIVEEYXs28ZPebEVq+BBGZIl1ALc0LaDd9q8gi6yl66LGgh24PPddDPkVXlCDIzbByqcwoSsEsWB80NKxIpIhKKiTdvh/+iZ/D6ZxZ3KNnaT74dmbOzM6emf8652xCJBIJGPgTiWYLjHAMjHCMcAwmCUn0sXN37VuzFRNCKxgEq8DeG43Xz8dMOMBys78TwmJwNvgLnBNTyxFoBDvMXmvjILia66/AMXDEK+G0wiQvmz3XA8JBiRIO9q0HRU/MY47LDexBMR0cxg20WPoyUZRzM4z+Tod5trD5K1zD+DGN369EsQQcxfgGl7GLUGzlZg/Gd1j681DkcTOE/g+W/vkodthM3Y2x3VOSELjgAFgKfqObt2xoLXiW67vAzn9sWgopFzhTXO4Fn2n8/jGwGPwKNriM/QnWg6lgG7jZ0n8CrAHHLYqisAy8ZHP9FAnIj6l0E5cU8NZZ+sq4HAVbHOYotggmIDQ8ZoDikL8PcbMASjFDKMg0FCXcbMfYzw5TUV+dYNOUpdIuoBRRpYbkwp7zYpNRFPL1B1jsd4c5lCA+gQMs5G3gcQ/WdAvcDiazUtzl6/ngXDHGCSN+iL2JGto4iOKlEI5CAZimuVjlxx8JC1sDAWd5sKbb7LYIFTZWHtCwhEw6+wmu8vMTgqCNq1AuIiL67eINLSxbWZjQ5ABbT6xdG7mkdhtlUvUuVrj4eEKgGXdOcta2CbwnFvsUix12+K4UAAmnn336AnZ39R65NlKeHChHBicThZpWTniPNWX73q2xNtIBSz3iKceC01Gu13QRKt4MYp434LgI2mWYK82Ddcl7qmAXnBqFcFLpDCOY7We3Jl0bWcxGtiLHxfK5oYibs9BuI6K+QW2CJRbEyrWR2+oSwinleh/6whpTZHB8VNzvZ7emtPEImMtnGsJrLLbf4TuVQgHmcfZkZ1l3PHJt+axM7zStZojPNFa0+V04T8AvvMl7NRcr481h8IdonwazeMwhj4RzBlzKdHXBULQhjq1xlRDQjY/BJTWjuk9Yg5NLo0NflXAnFyz9a1lglLbmclxzQjrG2W1uM7570eZ+wxjfh+oKvvQRfBFPz+6ifdkmU+YBlw0tEoe+kE3//ShTalKkahvmuFjP3/MPJyNxg6Qox9OGnuO626uF38J/252DHoq5nFLxmy7PtR479F0BU7h+NRBnSKC/RsH81f+j6swrA32wmyXrDWLfary2nJX8jsJADwsn060dZRrEYUJgMNkxx8BYjoERjhGOgRHO/40/AgwA6Pwl5bmDALcAAAAASUVORK5CYII=",
          Eu =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA4CAYAAABJ7S5PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEJGOUM2QTBGNkY5MTFFOUJBQTg4OUJENjhFNUQyN0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEJGOUM2OUZGNkY5MTFFOUJBQTg4OUJENjhFNUQyN0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI2RThDNjdERjZGODExRTk5N0QwOTZDNjI3Q0M0MTRDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI2RThDNjdFRjZGODExRTk5N0QwOTZDNjI3Q0M0MTRDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XKq1FgAAAwJJREFUeNrsm4tRhDAQhoNjA7RAC7QQSzhLiCVgCVgClnBXAlcClAAlYAlnMm7OHeSRF4HEy8yOzp0w7Mfun90kJrfbjTwGIU8PBD/j2fYGSZJs/YwpN8Yt55bBTzmu3Fqwi8nN7xkhfrGxDYdwuhKPqGgdANO5d3r3Y8Y5ujMI4dCgAQFbM4oaPHIEt8KBMOVYBn/IdgJRGQLANiAYlFsJEYO/z9ZAFOgC5hmECwjY2bnvCqwRcyCa0UXME4iTQwhLVo3F8g8IUOipi9nGIFILTTCGAGlTTIGgS+G0IYjCA4QCdOGENGOQM4cOCGFnPOU4BLF1NHRzgjqXGlTxptQhCF/a8CfdlzSCatyohNwOIS0mIZiI5dIUxSxB1B4BDBCBRGX67AxzkB0cxGTFKf2e6j5NmhdZuw9InY82LtCcKbfhn5b1gJyaGoCSB9mG8zDpeWv9gctQw5EjCF+jlvkLvZ0WRHrfMVMk+ar0fFqx5P/TzJfijb1EtgjVKi/V8ZQ4caMAQ1z4CmH879YshdM1h9FxK+Gzd259BL72yhqhWVmGZkRZI/gH10gj/6qbGquiEqNQblFQhakPC3VEF5k+ZFoagcZ7ZGnRm6SGIHSJKEXUmsiVFeoq5rRYXI+IDEatGgiq23pFoE0YcwoCdaRFQDNKpyMNydpKtGjERo2X3BugBxfJNxXBVz4WsNMqs5do0BXLEBdpmHMQAUZFrZM/JmJ5DgDCoLuCbjprNCGuSzoFEQCMs83itekBsqNpRkMM92GtQKCzVuUBZpTBZhNJuaBaG3DOksLDyDORqaeiSW47tDYglAoqjcNkqeeZxSoSnKXGCATznCJOIDgDASlRE//ls7ONZWMQO3ehtWv90e01KDjfhFQs6YB4BuWnE2qfkmOcbWihpd52v2X05suDtdJsa8prh9KrHQslLwCUNQIVR7504UxGJ958glCqLLmGyOW53OHD9uT3ONGF7HQOQ/pvVGKDuGZoRiGoxJ7bie6RKe0+HR5EjOPxX34wvgUYAA3Q5FQ1OsEYAAAAAElFTkSuQmCC";
        var uo = u(71647),
          fu = Object.defineProperty,
          xu = Object.getOwnPropertyDescriptor,
          Oa = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? xu(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && fu(t, n, l), l;
          };
        const bu = {
          localized_headline: new Array(G.bP9),
          localized_body: new Array(G.bP9),
          localized_image: new Array(G.bP9),
          button_destination: ft.gs.k_EEventPage,
          button_loc_token: "EventEmail_Button_ClickForMoreDetails",
          video_link: "",
        };
        let Qn = class extends S.Component {
          GetEmailEditModel() {
            return new lt.pC(this.props.editModel);
          }
          render() {
            const { editModel: a } = this.props;
            let t = a.GetCurEditLanguage(),
              n = this.GetEmailEditModel(),
              i = [];
            n.GetSectionObjects().forEach((o, r) => {
              i.push(
                (0, e.jsx)(
                  Nt,
                  {
                    lang: t,
                    clanSteamID: a.GetClanSteamID(),
                    bEditor: a.BIsEmailEditable(),
                    appid: a.GetAppID(),
                    section: o,
                    additionalClassName: z.HeaderSection,
                    bTemplateEditable: !0,
                    fnRemoveSection: () => n.RemoveSection(r),
                  },
                  "email_editor_section_" + r,
                ),
              );
            });
            let l = n.GetLocalizedSubject(t);
            return (0, e.jsxs)("div", {
              className: z.EmailEditorContent,
              children: [
                (0, e.jsxs)("div", {
                  className: z.RightAlign,
                  children: [
                    (0, e.jsxs)("span", {
                      className: z.EmailOptionTitle,
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
                  className: (0, j.A)(f().FlexRowContainer, z.EmailSubjectCtn),
                  children: [
                    (0, e.jsx)("span", {
                      className: z.EmailOptionTitle,
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
                  className: (0, j.A)(z.EmailTemplate, z.DevEmailTemplate),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, j.A)(z.CenterAlign, z.DevEmail_TopHeader),
                      children: (0, e.jsx)("a", {
                        href: D.TS.PARTNER_BASE_URL,
                        children: (0, e.jsx)("img", {
                          src: gu,
                          className: z.DevEmail_TopLogo,
                        }),
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, j.A)(z.DevEmail_Content),
                      children: (0, e.jsx)("div", {
                        className: z.DevEmail_Subject,
                        children: l,
                      }),
                    }),
                    i,
                    (0, e.jsxs)("div", {
                      className: (0, j.A)(z.EmailSection, z.SupportCtn),
                      children: [
                        (0, e.jsx)("b", { children: "Have Questions?" }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("a", { href: "#", children: "Contact us" }),
                        " and we'll get right back to you.",
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, j.A)(z.DevEmail_Content),
                      children: [
                        (0, e.jsx)("img", {
                          src: Su,
                          className: z.DevEmail_SignOff_Img,
                        }),
                        (0, e.jsx)("div", {
                          className: z.DevEmail_Signoff,
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
                  className: (0, j.A)(z.DevEmail_Footer_Ctn),
                  children: [
                    (0, e.jsx)("span", {
                      className: z.DevEmail_Footer_Reason,
                      children: (0, s.we)(
                        "#EventEmail_Developer_Footer_Reason",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: z.DevEmail_Footer_SubSection,
                      children: [
                        (0, e.jsx)("img", { src: co, width: 103, height: 43 }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              className: z.DevEmail_Footer_Bold,
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
                              className: z.DevEmail_Footer_Regular,
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
                                    className: z.DevEmail_Follow,
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
                  className: (0, j.A)(f().Button, z.CenterAlign),
                  onClick: () => {
                    n.AddSection(bu);
                  },
                  children: (0, s.we)("#EventEmail_Template_AddSection"),
                }),
              ],
            });
          }
        };
        Qn = Oa([R.PA], Qn);
        let ga = class extends S.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                capabilities: void 0,
                selectedCapability: void 0,
                nDuplicatesRemoved: 0,
              }),
              (this.m_cancelSignal = oe().CancelToken.source()),
              (this.m_appFileInput = S.createRef()),
              (this.m_pubFileInput = S.createRef());
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("DevEventRecipientOptions cancelled");
          }
          async componentDidMount() {
            let a = await M.mh.GetPartnerCapabilities(this.m_cancelSignal),
              t = this.GetEmailEditModel(),
              n = { label: a[0].capability, value: a[0] };
            a.forEach((i) => {
              i.id === t.GetInternalTargetingPartnerCapability() &&
                (n = { label: i.capability, value: i });
            }),
              this.setState({ capabilities: a, selectedCapability: n });
          }
          GetEmailEditModel() {
            return new lt.pC(this.props.editModel);
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
            (0, U.pg)(
              (0, e.jsx)(F.o0, {
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
              return (0, e.jsx)(H.t, { string: (0, s.we)("#Loading") });
            let a = this.GetEmailEditModel();
            const t = this.state.capabilities.map((l) => ({
                value: l,
                label: l.capability,
              })),
              n = Mn.PubRights.map((l) =>
                (0, e.jsx)(
                  p.Yh,
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
                  ![Ta.Download, Ta.UploadCDKeys, Ta.ManageCEG].includes(
                    l.token,
                  ),
              ).map((l) =>
                (0, e.jsx)(
                  p.Yh,
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
              className: z.RecipientCtn,
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
                      className: z.DevEmail_RecipientTable,
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
                                children: (0, e.jsx)(p.Yh, {
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
                                children: (0, e.jsx)(ua.Ay, {
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
                      (0, e.jsx)(H.t, { size: "small" }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("b", {
                        children: (0, s.we)(
                          "#EventEmail_Developer_FilterOptional",
                        ),
                      }),
                    }),
                    this.state.nDuplicatesRemoved > 0 &&
                      (0, e.jsx)("div", {
                        className: Jt.WarningStylesBackground,
                        children: (0, e.jsx)("b", {
                          children: (0, s.we)(
                            "#EventEmail_Developer_DuplicateRemoved",
                            (0, xt.D)(this.state.nDuplicatesRemoved),
                          ),
                        }),
                      }),
                    (0, e.jsxs)("div", {
                      className: z.TargetCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: z.TargetTypeTitle,
                          children: (0, e.jsx)("b", {
                            children: "App Targeting",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: z.TargetTypeCtn,
                          children: [
                            !!a.GetInternalTargetAppCount() &&
                              (0, e.jsxs)("div", {
                                className: z.TargetedListCtn,
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
                              className: z.SelectListCtn,
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
                      className: z.TargetCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: z.TargetTypeTitle,
                          children: (0, e.jsx)("b", {
                            children: "Publisher Targeting",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: z.TargetTypeCtn,
                          children: [
                            a.GetInternalTargetPublisherCount() &&
                              (0, e.jsxs)("div", {
                                className: z.TargetedListCtn,
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
                              className: z.SelectListCtn,
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
        Oa([ie.oI], ga.prototype, "OnFileChoice", 1),
          Oa([ie.oI], ga.prototype, "ShowTargets", 1),
          Oa([ie.oI], ga.prototype, "ClearTargets", 1),
          (ga = Oa([R.PA], ga));
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
        const _o = (a) => {
            const [t, n] = (0, S.useState)(a ? void 0 : !1);
            return (
              (0, S.useEffect)(() => {
                const i = oe().CancelToken.source();
                return (
                  a &&
                    (async () => {
                      const o = await Du.Get().HintLoadIsAppReleaseInSteamChina(
                        a,
                        i,
                      );
                      i.token.reason || n(o);
                    })(),
                  () => i.cancel("useSteamChinaAppIsVisible: unmounting")
                );
              }, [a]),
              !!t
            );
          },
          mo = class Wa {
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
                const o = await oe().get(l, {
                  withCredentials: !0,
                  cancelToken: n.token,
                });
                if (
                  ((i = o == null ? void 0 : o.data) == null
                    ? void 0
                    : i.success) == Xe.R &&
                  !n.token.reason
                )
                  return (
                    this.m_mapAppToSCVisibility.set(t, !!o.data.visible),
                    !!o.data.visible
                  );
              } catch (o) {
                const r = (0, Me.H)(o);
                console.error(
                  "HintLoadIsAppReleaseInSteamChina: " + r.strErrorMsg,
                  r,
                );
              }
              return !1;
            }
            static Get() {
              return (
                Wa.s_Singleton || (Wa.s_Singleton = new Wa()), Wa.s_Singleton
              );
            }
          };
        ho(mo, "s_Singleton");
        let Du = mo;
        function yu(a) {
          const { editModel: t } = a,
            n = (0, Xa.E)(),
            l = new lt.pC(t).GetSectionObj(0),
            [o, r] = (0, B.q3)(() => [l.GetHeadline(n), l.GetBody(n)]);
          return (0, e.jsx)("div", {
            className: z.EmailEditorContent,
            children: (0, e.jsx)("div", {
              className: z.EmailTemplate,
              children: (0, e.jsxs)("div", {
                className: (0, j.A)(z.DevEmailEmailBackground, z.EmailSection),
                children: [
                  (0, e.jsx)("p", {
                    children:
                      "This description and location information is automatically injected into the registration and reminder emails",
                  }),
                  (0, e.jsx)(p.JU, {
                    children: "Short Description For Email Rendering",
                  }),
                  (0, e.jsx)("textarea", {
                    className: z.BodyInput,
                    placeholder: "Come join us...",
                    value: o,
                    rows: 8,
                    onChange: (d) =>
                      l.SetHeadline(d.currentTarget.value || "", n),
                  }),
                  (0, e.jsx)(p.JU, {
                    children: "Event Location (address / building)",
                  }),
                  (0, e.jsx)("textarea", {
                    className: z.BodyInput,
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
        var po = u(25515),
          Tu = u(31501),
          Iu = Object.defineProperty,
          Au = Object.getOwnPropertyDescriptor,
          ut = (a, t, n, i) => {
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
            a.clanSteamID.GetAccountID() == (0, ca.H)()
            ? !0
            : (D.UF.IS_OGG || D.UF.IS_VALVE_GROUP) &&
                !!(t != null && t.valve_admin);
        }
        const Gu = (0, R.PA)((a) => {
            const { editModel: t } = a,
              { bHasValidatedEmail: n } = (0, ou.n)(),
              { data: i } = (0, Vt.hM)(t.GetClanAccountID());
            if (!vo(t.GetEventModel(), i)) return null;
            const o = (0, ca.H)() !== t.GetClanAccountID();
            return (0, e.jsxs)(S.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: z.EmailTabCtn,
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
                      children: (0, e.jsx)(p.RF, {
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
                    className: Ee.EventEditorInputPaneContainer,
                    children: [
                      o &&
                        (0, e.jsx)(je.tH, {
                          children: (0, e.jsx)(Ra, { editModel: t }),
                        }),
                      o &&
                        (0, e.jsx)(je.tH, {
                          children: (0, e.jsx)(Ut, {
                            editModel: t,
                            bHasValidatedEmail: n,
                            permissions: i,
                          }),
                        }),
                      (0, e.jsx)(je.tH, {
                        children:
                          (0, ca.H)() === t.GetClanAccountID()
                            ? (0, e.jsx)(yu, { editModel: t })
                            : (0, e.jsx)(e.Fragment, {
                                children: D.UF.IS_VALVE_GROUP
                                  ? (0, e.jsx)(Qn, { editModel: t })
                                  : (0, e.jsx)(Nu, { editModel: t }),
                              }),
                      }),
                      (0, e.jsx)(Lu, { editModel: t }),
                      o &&
                        (0, e.jsx)(je.tH, {
                          children: D.UF.IS_VALVE_GROUP
                            ? (0, e.jsx)(ga, { editModel: t })
                            : (0, e.jsxs)(S.Fragment, {
                                children: [
                                  (0, e.jsx)(Yn, {
                                    editModel: t,
                                    permissions: i,
                                  }),
                                  (0, e.jsx)(_n, {
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
          Lu = (a) =>
            _o(a.editModel.GetAppID())
              ? (0, e.jsx)("div", {
                  className: Jt.WarningStylesBackground,
                  children: (0, s.we)("#EventEmail_SteamChina_Warning"),
                })
              : null;
        let Ut = class extends S.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSettingUp: !1 }),
              (this.m_cancelSignal = oe().CancelToken.source());
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventEmailControlBar cancelled");
          }
          FireTestEmail() {
            const { editModel: a } = this.props;
            M.mh
              .FireTestEmail(
                a.GetClanSteamID(),
                a.GetGID(),
                a.GetCurEditLanguage(),
                this.m_cancelSignal,
              )
              .then((t) => {
                (0, U.pg)(
                  (0, e.jsx)(F.o0, {
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
                (0, U.pg)(
                  (0, e.jsx)(F.KG, { children: (0, Me.H)(t).strErrorMsg }),
                  window,
                );
              });
          }
          OnTestEmail(a) {
            const { editModel: t } = this.props;
            a.preventDefault(),
              this.props.bHasValidatedEmail &&
              !t.BIsDirtyType(C.IQ.jsondata_email)
                ? (0, U.HT)(
                    (0, e.jsx)(F.o0, {
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
                    (0, Q.uX)(a),
                  )
                : t.BIsDirtyType(C.IQ.jsondata_email)
                  ? (0, U.pg)(
                      (0, e.jsx)(F.KG, {
                        children: (0, s.we)("#EventEmail_Test_Dirty"),
                      }),
                      window,
                    )
                  : (0, U.pg)(
                      (0, e.jsx)(F.KG, {
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
            (0, U.pg)(
              (0, e.jsx)(mn, { editModel: this.props.editModel }),
              (0, Q.uX)(a),
            );
          }
          OnSetupAndFireEmailConfirm(a) {
            (0, U.HT)(
              (0, e.jsx)(F.o0, {
                strTitle: "(VO) Setup and Send Email",
                onOK: () =>
                  this.setState({ bSettingUp: !0 }, this.OnSetupAndFireEmail),
                onCancel: () => {},
                children: (0, e.jsx)("div", {
                  children:
                    "(VO) Be thoughtful. Talk to Alden or Adil if not sure. By pressing this, we will setup a database entry to fire this email in its current form and target. Double check the audience make sense and the localization looks good. This will also begin firing immediately.",
                }),
              }),
              (0, Q.uX)(a),
            );
          }
          async OnSetupAndFireEmail() {
            const { editModel: a } = this.props;
            try {
              let t = D.UF.IS_VALVE_GROUP
                ? await M.mh.SetupInternalPartnerCommunication(
                    this.m_cancelSignal,
                    a.GetClanSteamID(),
                    a.GetGID(),
                    a.GetEmailSettings().internal_targeting,
                  )
                : await M.mh.SetupPartnerEmailCampaign(
                    a.GetClanSteamID(),
                    a.GetGID(),
                    this.m_cancelSignal,
                  );
              (0, U.pg)(
                (0, e.jsxs)(F.o0, {
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
              let n = (0, Me.H)(t);
              console.error("OnSetupAndFireEmail failed: " + n.strErrorMsg),
                (0, U.pg)(
                  (0, e.jsx)(F.o0, {
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
              className: z.ControlBarCtn,
              children: [
                (0, e.jsxs)("a", {
                  onClick: this.OnTestEmail,
                  className: f().EditPreviewButton,
                  children: [
                    this.state.bSettingUp && (0, e.jsx)(H.t, { size: "small" }),
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
        ut([ie.oI], Ut.prototype, "FireTestEmail", 1),
          ut([ie.oI], Ut.prototype, "OnTestEmail", 1),
          ut([ie.oI], Ut.prototype, "OnPrepareEmail", 1),
          ut([ie.oI], Ut.prototype, "OnSetupAndFireEmailConfirm", 1),
          ut([ie.oI], Ut.prototype, "OnSetupAndFireEmail", 1),
          (Ut = ut([R.PA], Ut));
        const Nu = (0, R.PA)((a) => {
          const { editModel: t } = a,
            n = (y) => {
              var P;
              let N = Array(),
                q = (P = mt.A.Get().GetApp(y)) == null ? void 0 : P.GetName();
              return (
                ft.j3.forEach((le) =>
                  N.push(
                    (0, e.jsx)(
                      "option",
                      { value: le, children: (0, s.we)("#" + le, q) },
                      le,
                    ),
                  ),
                ),
                N
              );
            },
            i = (y) => {
              a.editModel.SetCurEditLanguage(y);
            },
            l = (y) => {
              ft.j3.forEach((P) => {
                P === y.target.value && new lt.pC(t).SetSubjectTextLoc(P);
              });
            };
          let o = new lt.pC(t),
            r = n(t.GetAppID()),
            d = t.GetCurEditLanguage();
          const m = t.GetAppID(),
            [c] = (0, Se.t7)(m, { include_basic_info: !0 });
          if (!c)
            return (0, e.jsx)(H.t, {
              string: (0, s.we)("#Loading"),
              position: "center",
              size: "small",
            });
          let g = o.GetSectionObj(0),
            _ = o.GetSectionObj(1),
            v = "#EventEmail_Reason_Played",
            h = !1,
            x = "#EventEmail_Footer_Reason_Played",
            b = c == null ? void 0 : c.GetStorePageURL(),
            E = c == null ? void 0 : c.GetName();
          if (!o.BIsTargetingGamePlayers()) {
            if (o.BIsTargetingGameFollowers())
              (v = "#EventEmail_Reason_Follow"),
                (h = !0),
                (x = "#EventEmail_Footer_Reason_Followed");
            else if (o.BIsTargetingGameWishlisters())
              (v = "#EventEmail_Reason_Wishlist"),
                (h = !0),
                (x = "#EventEmail_Footer_Reason_Wishlisted");
            else if (o.BIsTargetingSomeCreator()) {
              (v = "#EventEmail_Reason_Follow"),
                (h = !0),
                (x = "#EventEmail_Footer_Reason_Followed");
              let y = o.GetSomeCreatorTarget(),
                P = c.GetAllCreatorClanIDs().find((N) => N == y);
              if (P) {
                const N = k.b.InitFromClanID(P);
                let q = rt.pF.GetCreatorHome(N);
                if (q) {
                  let le = "developer";
                  c.GetAllDeveloperCreatorClans().includes(P) ||
                    (c.GetAllPublisherCreatorClans().includes(P)
                      ? (le = "publisher")
                      : (le = "franchise")),
                    (b = q.GetCreatorHomeURL(le)),
                    (E = q.GetName());
                }
              }
            }
          }
          return (0, e.jsxs)("div", {
            className: z.EmailEditorContent,
            children: [
              (0, e.jsxs)("div", {
                className: (0, j.A)(f().FlexRowContainer, z.EmailSubjectCtn),
                children: [
                  (0, e.jsx)("span", {
                    className: z.EmailOptionTitle,
                    children: (0, s.we)("#EventEmail_Subject"),
                  }),
                  (0, e.jsx)("select", {
                    className: z.EmailSubjectSelect,
                    value: o.GetSubjectTextLoc(),
                    onChange: l,
                    children: r,
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: z.RightAlign,
                children: [
                  (0, e.jsxs)("span", {
                    className: z.EmailOptionTitle,
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
                className: z.EmailTemplate,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, j.A)(z.EmailIconHeader, z.CenterAlign),
                    children: (0, e.jsx)("img", { src: ju }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, j.A)(
                      z.EmailBackground,
                      z.EmailReasonHeader,
                      z.EmailTextCtn,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: z.Hello,
                        children: (0, s.we)(
                          "#EventEmail_Hello",
                          (0, s.we)("#EventEmail_UserName"),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: z.Reason,
                        children: (0, s.we)(v, E),
                      }),
                      !h &&
                        (0, e.jsx)("a", {
                          className: z.GameLink,
                          href: b,
                          children: E,
                        }),
                    ],
                  }),
                  (0, e.jsx)(Nt, {
                    lang: d,
                    clanSteamID: t.GetClanSteamID(),
                    bEditor: t.BIsEmailEditable(),
                    appid: t.GetAppID(),
                    section: g,
                    additionalClassName: z.HeaderSection,
                  }),
                  (0, e.jsx)(Nt, {
                    lang: d,
                    clanSteamID: t.GetClanSteamID(),
                    bEditor: t.BIsEmailEditable(),
                    appid: t.GetAppID(),
                    section: _,
                    additionalClassName: z.HeaderSection,
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsxs)("div", {
                    className: z.Footer,
                    children: [
                      (0, e.jsx)("div", { children: (0, s.we)(x) }),
                      (0, e.jsx)("span", {
                        children: (0, s.we)("#EventEmail_Footer_Game", E),
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
                              E,
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
                    className: (0, j.A)(z.FooterLegal, f().FlexRowContainer),
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
        let _n = class extends S.Component {
          constructor() {
            super(...arguments), (this.state = {});
          }
          GetEmailEditModel() {
            return new lt.pC(this.props.editModel);
          }
          async componentDidMount() {
            let a = await J.ac.LoadClanInfoForClanSteamID(
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
              return (0, e.jsx)(H.t, {
                string: (0, s.we)("#Loading"),
                size: "medium",
              });
            const n = this.GetEmailEditModel();
            return (0, e.jsxs)("div", {
              className: (0, j.A)(f().ValveOnlyBackground, z.RecipientCtn),
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
                      (0, e.jsx)(p.RF, {
                        onChange: (i) =>
                          this.GetEmailEditModel().SetFilterIRTopN(i),
                        label: (0, s.we)("#EventEmail_Filter_IR"),
                        checked: n.BIsIRTopNFiltering(),
                      }),
                    !!this.state.clanInfo.is_ogg &&
                      (0, e.jsx)(p.RF, {
                        onChange: (i) =>
                          this.GetEmailEditModel().SetFilterWishlist(i),
                        label: (0, s.we)("#EventEmail_Filter_Wishlist"),
                        checked: n.BIsWishListFiltering(),
                      }),
                    (0, e.jsx)(p.pd, {
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
        ut([ie.oI], _n.prototype, "OnControlGroupSpinnerChange", 1),
          (_n = ut([R.PA], _n));
        let Yn = class extends S.Component {
          constructor() {
            super(...arguments),
              (this.state = { bLoadingCreator: !0 }),
              (this.m_cancelSignal = oe().CancelToken.source());
          }
          async LoadCreatorHome() {
            this.state.bLoadingCreator ||
              this.setState({ bLoadingCreator: !0 });
            const { editModel: a } = this.props;
            mt.A.Get().QueueAppRequest(a.GetAppID(), {
              include_basic_info: !0,
            });
            let t = new Array();
            (
              await rt.pF.LoadCreatorHomeListForAppIncludeHiddden(
                a.GetAppID(),
                this.m_cancelSignal,
              )
            ).forEach((i) => {
              let l = k.b.InitFromClanID(i.clan_account_id);
              t.push(rt.pF.LoadCreatorHome(l, !1, this.m_cancelSignal));
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
            return new lt.pC(this.props.editModel);
          }
          BuildCreatorHomeToggle(a) {
            let t = new Array(),
              n = new Array();
            if (this.state.bLoadingCreator)
              t.push((0, e.jsx)(H.t, {}, "EmailRecipientControls_creator"));
            else {
              const { editModel: i } = this.props;
              let l = new lt.pC(i);
              rt.pF
                .GetCreatorHomeListForAppIncludeHidden(i.GetAppID())
                .forEach((o) => {
                  let r = rt.pF.GetCreatorHomeByID(o);
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
                      m = (0, e.jsx)(Pa, {
                        audience: r.GetNumFollowers(),
                        label: (0, s.PP)(
                          "#EventEmail_Recipients_follower_creator",
                          d,
                        ),
                      });
                    t.push(
                      (0, e.jsx)(
                        p.RF,
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
                        ((m = (0, e.jsx)(Pa, {
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
                              children: (0, e.jsx)(p.RF, {
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
            let t = new lt.pC(a);
            const { permissions: n } = this.props;
            return (0, e.jsxs)("div", {
              className: z.RecipientCtn,
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
                    (0, e.jsx)(p.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetTargetingExistingPlayer(i),
                      label: (0, s.we)("#EventEmail_Recipients_players"),
                      checked: t.BIsTargetingGamePlayers(),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetTargetingGameWishlist(i),
                      label: (0, s.we)("#EventEmail_Recipients_wishlist"),
                      checked: t.BIsTargetingGameWishlisters(),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetTargetingGameFollower(i),
                      label: (0, e.jsx)(Pa, {
                        label: (0, s.we)("#EventEmail_Recipients_follower"),
                        audience: J.ac.GetClanMemberCount(a.GetAppID()),
                      }),
                      checked: t.BIsTargetingGameFollowers(),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetExcludeGameOwners(i),
                      label: (0, e.jsx)(Pa, {
                        label: (0, s.we)(
                          "#EventEmail_Recipients_exclude_owners",
                        ),
                      }),
                      checked: t.BIsExcludingGameOwners(),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetOwnersWithNoPlaytime(i),
                      label: (0, e.jsx)(Pa, {
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
        Yn = ut([R.PA], Yn);
        class Pa extends S.Component {
          render() {
            const { valveOnly: t, label: n } = this.props;
            return (0, e.jsxs)("div", {
              className: z.TargetAndAudience,
              children: [
                (0, e.jsxs)("span", {
                  children: [t && (0, e.jsx)("span", { children: "(VO) " }), n],
                }),
                (0, e.jsx)("span", {
                  children:
                    this.props.audience !== void 0 &&
                    (0, xt.D)(this.props.audience),
                }),
              ],
            });
          }
        }
        let mn = class extends S.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                state: this.props.editModel.BIsDirty() ? "unsaved" : "loading",
              });
          }
          componentDidMount() {
            const { editModel: a } = this.props;
            if (this.state.state == "loading") {
              let t = (0, po.Lk)(a),
                n = (0, po.Z6)(a);
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
            new lt.pC(a).LockEmail(),
              this.setState({ state: "saving" }, () => {
                M.mh.SaveModel(a.GetClanSteamID()).then((n) => {
                  this.setState({ state: "done" });
                });
              });
          }
          render() {
            switch (this.state.state) {
              case "loading":
                return (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                  closeModal: this.props.closeModal,
                  children: (0, e.jsx)(H.t, {}),
                });
              case "ready":
                return (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Desc"),
                  onOK: this.OnLockEmail,
                  onCancel: this.props.closeModal,
                });
              case "readywithwarning":
                return (0, e.jsx)(F.o0, {
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
                return (0, e.jsx)(F.KG, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Unsaved"),
                  closeModal: this.props.closeModal,
                });
              case "saving":
                return (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)(
                    "#EventEmail_Preparation_InProcess",
                  ),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                  children: (0, e.jsx)(H.t, {}),
                });
              case "done":
                return (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Done"),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                });
              default:
                return (0, e.jsx)(F.KG, {
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
        ut([ie.oI], mn.prototype, "OnLockEmail", 1), (mn = ut([R.PA], mn));
        const go = 300;
        let Ra = class extends S.Component {
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
              let i = await oe().get(t, { params: n, withCredentials: !0 });
              this.setState({ stats: i.data.result, bRefreshing: !1 });
            } catch (i) {
              this.setState({
                bRefreshing: !1,
                err_msg: (0, Me.H)(i).strErrorMsg,
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
            const { editModel: g } = this.props;
            if (!g.GetEventModel().jsondata.email_setting.force_feature_id)
              return (0, e.jsx)("div", {});
            if (this.state.err_msg)
              return (0, e.jsxs)("div", {
                className: Ee.EventEditorInputPaneContents,
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
                className: Ee.EventEditorInputPaneContents,
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
                    children: (0, e.jsx)(H.t, {}),
                  }),
                ],
              });
            const _ = this.state.stats;
            return (0, e.jsxs)("div", {
              className: Ee.EventEditorInputPaneContents,
              children: [
                (0, e.jsxs)("div", {
                  className: f().EventEditorTextTitle,
                  children: [
                    (0, s.we)("#EventEmail_Stats_Title"),
                    this.state.bRefreshing &&
                      (0, e.jsx)(H.t, { size: "small" }),
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
                        (0, s.we)("#EventEmail_Stats_State_" + _.state),
                      ),
                    }),
                    _.state == "sending" &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_Started",
                          (0, s.TW)(_.rtime_start_firing),
                        ),
                      }),
                    (_.state == "complete" || _.state == "aborted") &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_Completed",
                          (0, s.TW)(_.rtime_start_firing),
                          (0, s.TW)(_.rtime_stop_firing),
                        ),
                      }),
                    _.state == "window_closed" &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_WindowClosed",
                          (0, s.TW)(_.rtime_stop_firing),
                        ),
                      }),
                    !!_.rtime_last_update_time &&
                      (0, e.jsxs)(S.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Examined",
                              (t =
                                (a = _.accounts_examined) == null
                                  ? void 0
                                  : a.toLocaleString((0, Wt.J)())) != null
                                ? t
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Duplicates",
                              (i =
                                (n = _.accounts_duplicates) == null
                                  ? void 0
                                  : n.toLocaleString((0, Wt.J)())) != null
                                ? i
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Emailed",
                              (o =
                                (l = _.accounts_emailed) == null
                                  ? void 0
                                  : l.toLocaleString((0, Wt.J)())) != null
                                ? o
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Skipped",
                              (d =
                                (r = _.accounts_not_emailed) == null
                                  ? void 0
                                  : r.toLocaleString((0, Wt.J)())) != null
                                ? d
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Failed",
                              (c =
                                (m = _.accounts_email_failed) == null
                                  ? void 0
                                  : m.toLocaleString((0, Wt.J)())) != null
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
        ut([ie.oI], Ra.prototype, "RefreshIfNeeded", 1),
          ut([ie.oI], Ra.prototype, "RefreshStats", 1),
          (Ra = ut([R.PA], Ra));
        var Mu = u(65700),
          Bu = u(18735),
          Ou = u(58360),
          Pu = u(4969),
          Ru = u.n(Pu);
        function ku(a) {
          const t = (0, ya.I)({
            queryKey: ["demoappdetailsforbase", a],
            queryFn: async () => {
              var n;
              const i = `${bt.TS.COMMUNITY_BASE_URL}demos/ajaxgetappdemoinfo`,
                l = { appid: a, origin: self.origin },
                o = await oe().get(i, { params: l });
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
        function Bm(a, t) {
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
        function zu(a) {
          const t = _o(a.appid);
          return a.appid ? t : D.UF.IS_ALLOWED_SC;
        }
        const Hu = (0, R.PA)((a) => {
          const { editModel: t } = a;
          let n = (0, aa.JS)(t.GetEventType());
          const { data: i } = (0, Vt.hM)(t.GetClanAccountID()),
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
                  (0, e.jsx)(pn, { editModel: t }),
                  (!l || (i == null ? void 0 : i.valve_admin)) &&
                    (0, e.jsx)(Vu, { editModel: t }),
                  (0, e.jsx)("div", { className: f().ClearThings }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(Ie().OptionsNotes, f().RightCol),
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
          let n = S.useRef(void 0);
          const i = S.useCallback(
              (x) => {
                t.GetAppID() == ee.DU && t.BHasTag("hide_library_overview") && x
                  ? (0, U.pg)(
                      (0, e.jsx)(F.o0, {
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
          let [o, r, d, m, c, g, _, v, h] = (0, B.q3)(() => [
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
            className: Ie().EventEditorInputPaneContents,
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
                    (0, e.jsx)(p.RF, {
                      onChange: (x) => t.SetTag("hide_store", !x),
                      label: (0, s.we)("#EventEditor_Options_Show_Store"),
                      checked: d ? v : !1,
                      description: d
                        ? void 0
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", m),
                      disabled: !d,
                    }),
                    (0, e.jsx)(Wu, { editModel: t }),
                    (0, e.jsx)(p.RF, {
                      onChange: i,
                      label: (0, s.we)(
                        "#EventEditor_Options_Show_Library_Overview",
                      ),
                      checked: o ? g : !1,
                      description: o
                        ? (0, s.we)(
                            "#EventEditor_Options_Show_Library_Overview_Desc",
                          )
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", m),
                      disabled: !o,
                      ref: n,
                    }),
                    (0, e.jsx)(p.RF, {
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
                    (0, e.jsx)(p.RF, {
                      onChange: l,
                      label: (0, s.we)(
                        "#EventEditor_Options_Library_Spotlight_Label",
                      ),
                      checked: _,
                      description: (0, s.we)(
                        "#EventEditor_Options_Library_Spotlight_Desc",
                      ),
                      disabled: !c || !r,
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextTitle,
                      children: (0, s.we)("#EventEditor_Options_Desc"),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (x) => t.SetTag("workshop", x),
                      label: (0, s.we)("#EventEditor_Options_Workshop_Label"),
                      checked: h,
                      description: (0, s.we)(
                        "#EventEditor_Options_Workshop_Desc",
                      ),
                    }),
                    !1,
                    (0, e.jsx)(Xu, { editModel: t }),
                    (0, e.jsx)(Zu, { editModel: t }),
                  ],
                }),
                (0, e.jsx)(Qu, { editModel: t }),
              ],
            }),
          });
        }
        const Wu = (0, R.PA)((a) => {
          const { editModel: t } = a,
            { data: n } = (0, Vt.hM)(t.GetClanAccountID());
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
            children: (0, e.jsx)(p.RF, {
              onChange: (o) => t.SetTag(ee.Yf, o),
              label: "(VO) Hide this sale from the Specials page carousel",
              tooltip: "Affects the sale events carousel on " + l,
              checked: t.GetEventModel().BHasTag(ee.Yf),
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
            return (0, e.jsx)(H.t, {
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
            (0, e.jsx)(p.RF, {
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
            { data: n } = (0, Vt.hM)(t.GetClanAccountID()),
            i = !!(n != null && n.valve_admin);
          let l = S.useRef(void 0);
          const o = t.GetEventType(),
            [r] = (0, B.q3)(() => [
              t.GetEventModel().jsondata.country_restriction,
            ]);
          if (!i) return null;
          const d = (c) => {
              t.BHasSaleEnabled() && c && !t.BHasTag("mod_hide_store")
                ? (0, U.pg)(
                    (0, e.jsx)(F.o0, {
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
              t.GetAppID() == ee.qF
                ? "Deck"
                : t.GetAppID() == ee.IT
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
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("mod_hide_library_overview", c),
                    label: (0, s.we)(
                      "#EventEditor_Options_Hide_Library_Overview",
                    ),
                    checked: t
                      .GetEventModel()
                      .BHasTag("mod_hide_library_overview"),
                  }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("mod_hide_library_detail", c),
                    label: (0, s.we)(
                      "#EventEditor_Options_Hide_Library_Detail",
                    ),
                    checked: t
                      .GetEventModel()
                      .BHasTag("mod_hide_library_detail"),
                  }),
                  (0, e.jsx)(p.RF, {
                    onChange: d,
                    ref: l,
                    label: (0, s.we)("#EventEditor_Options_Hide_Store"),
                    checked: t.GetEventModel().BHasTag("mod_hide_store"),
                  }),
                  !!D.UF.IS_OGG &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetSteamStoreSpotlight(c),
                      label: "(VO) Allow Spotlight on Steam Store Product Page",
                      checked: t.BAllowedSteamStoreSpotlight(),
                      description:
                        "Allows the partner to upload a store spotlight artwork to be shown on the product page for upto a week from the event start.",
                    }),
                  !!to(t.GetEventModel(), i) &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetTag(cn, c),
                      label:
                        "(VO) Let Partners Upload Store Capsules for this Sale",
                      checked: t.GetEventModel().BHasTag(cn),
                      description:
                        "Opens the store capsule uploader on the artwork tab to everyone who can edit this event. We can always reach it ourselves without this; turning it off hides it from them again but keeps whatever they uploaded.",
                    }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetLibraryHomeSpotlight(c),
                    label: "(VO) Force Spotlight on Library Home",
                    checked: t.BHasLibaryHomeSpotlight(),
                    disabled: !t.BHasSpotlightArtwork(),
                    description:
                      "Shows the spotlight artwork in the 'Whats New' section at the top of the library home for all owners.",
                  }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("blog", c),
                    label: "(VO) Mark as Blog for Valve Game Teams",
                    checked: t.GetEventModel().BHasTag("blog"),
                    description:
                      "Add the 'blog' tag to this post. Allowing game team website to filter news posts intended for their blog.",
                  }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("adult_only_content", c),
                    label: "(VO) Event Contains Adult Only Content",
                    checked: t.GetEventModel().BHasTag("adult_only_content"),
                    description:
                      "Set this to on if the post contains adult only content so that it can be filtered accordingly.",
                  }),
                  t.GetAppID() == ee.DU &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(p.RF, {
                          onChange: (c) => t.SetTag("steam_blog", c),
                          label: "(VO) Steam Official Blog",
                          checked: t.GetEventModel().BHasTag("steam_blog"),
                          description:
                            "When checked this event will surface on https://store.steampowered.com/news/app/593110. Make sure to set this before you publish, or it will have no effect.",
                        }),
                        (0, e.jsx)(p.RF, {
                          onChange: (c) => t.SetTag("skip_megaphone", c),
                          label: "(VO) Skip Lighting Up Steam Client Megaphone",
                          checked: t.GetEventModel().BHasTag("skip_megaphone"),
                          description:
                            "By default small event (patch notes) do not light up the megaphone in the Steam client. Enabling this flag does the same for all other event type.",
                        }),
                      ],
                    }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("forced_featured", c),
                    label: "(VO) Force Feature this event in the NewsHub",
                    checked: t.GetEventModel().BHasTag("forced_featured"),
                    description:
                      "Add the 'forced_featured' tag to this post. This will prioritize the event appearing in algorithmic featured newshub section.",
                  }),
                  !!t.GetEventModel().BIsOGGEvent() &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetTag("seasonal_sale_featuring", c),
                      label: "(VO) Feature this event during the Seasonal Sale",
                      checked: t
                        .GetEventModel()
                        .BHasTag("seasonal_sale_featuring"),
                      description:
                        "Add the 'seasonal_sale_featuring' tag to this post. This will push the event to appear on the front page during a seasonal sale. This assume the content is specific to in-game items on sale for the underlying game",
                    }),
                  t.GetClanAccountID() == Rt.bv &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetTag("contenthub", c),
                      checked: t.GetEventModel().BHasTag("contenthub"),
                      label: "(VO) Tag as Content Hub",
                      description:
                        "Add the 'contenthub' tag to this event. Removes certain publishing restrictions for this event.",
                    }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("patchnotes", c),
                    checked: t.GetEventModel().BHasTag("patchnotes"),
                    label: "(VO) Tag as Patch Notes",
                    description:
                      "Add the 'patchnotes' tag to this event. Allows the event to show in certain contexts normally only showing Small Update/Patch Notes events such as Steam Client patch notes.",
                  }),
                  !!D.UF.IS_OGG &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => {
                        c &&
                          (t.setEventType(G.zeJ), t.SetSteamStoreSpotlight(c)),
                          t.SetTag("vo_marketing_message", c);
                      },
                      label: "(VO) Marketing Message Major Update",
                      disabled:
                        !t.GetEventModel().BHasTag("vo_marketing_message") &&
                        o != G.zeJ,
                      checked: t
                        .GetEventModel()
                        .BHasTag("vo_marketing_message"),
                      description:
                        "This will surface on the event editor the rules and requirements behind being featured in a marketing message to better align them with customer information." +
                        (o != G.zeJ
                          ? " This can only be enable for Major Update Type."
                          : ""),
                    }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("vo_prevent_delete", c),
                    label: "(VO) Prevent this event from being deleted.",
                    checked: t.GetEventModel().BHasTag("vo_prevent_delete"),
                    description:
                      "To prevent a partner or Valve from deleting this event because something is featuring it or depends on it.",
                  }),
                  (t.GetClanAccountID() == Rt.GU ||
                    ((D.TS.EUNIVERSE == G.Rv || D.TS.EUNIVERSE == G.CII) &&
                      t.GetClanAccountID() == Rt.mW)) &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetTag("steam_top_releases", c),
                      label: "(VO) Is Monthly Top Sellers?",
                      checked: t.GetEventModel().BHasTag("steam_top_releases"),
                      description:
                        "Add the 'steam_top_releases' tag to this post. This allows the Steam Top Release Charts to pull the official top releases events into those pages.",
                    }),
                  (t.GetClanAccountID() == Rt.GU ||
                    ((D.TS.EUNIVERSE == G.Rv || D.TS.EUNIVERSE == G.CII) &&
                      t.GetClanAccountID() == Rt.mW)) &&
                    (0, e.jsx)(p.RF, {
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
                        (0, e.jsx)(p.RF, {
                          onChange: (c) => t.SetTag("stablechannel", c),
                          label: `(VO) Steam ${m} Stable Channel`,
                          checked: t.GetEventModel().BHasTag("stablechannel"),
                          description: `Surface this to users who are subscribed to Steam ${m} Stable Build. Only include Stable Steam ${m} Client or Stable SteamOS notes.`,
                        }),
                        (0, e.jsx)(p.RF, {
                          onChange: (c) => t.SetTag("betachannel", c),
                          label: `(VO) Steam ${m} Beta Channel`,
                          checked: t.GetEventModel().BHasTag("betachannel"),
                          description: `Surface this to users who are subscribed to Steam ${m} Beta Build. Only include Beta Steam ${m} Client or Stable SteamOS notes.`,
                        }),
                        (0, e.jsx)(p.RF, {
                          onChange: (c) => t.SetTag("previewchannel", c),
                          label: `(VO) Steam ${m} Preview Channel`,
                          checked: t.GetEventModel().BHasTag("previewchannel"),
                          description: `Surface this to users who are subscribed to Steam ${m} Preview Build. Only include Beta Steam ${m} Client or Beta SteamOS notes.`,
                        }),
                      ],
                    }),
                  (0, e.jsx)(p.pd, {
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
        let pn = class extends S.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSending: !1 }),
              (this.m_cancelSignal = oe().CancelToken.source());
          }
          TestFireEvent() {
            const { editModel: a } = this.props;
            this.setState({ bSending: !0 }, () => {
              M.mh.FireTestEventNotifiation(
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
              n = (0, aa.rQ)(t);
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
              className: (0, j.A)(Ie().EventEditorInputPaneContents),
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
                        (0, e.jsx)(H.t, { size: "small", position: "center" }),
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
        So([ie.oI], pn.prototype, "TestFireEvent", 1), (pn = So([R.PA], pn));
        const Yu = (0, R.PA)((a) => {
          const { editModel: t } = a;
          if (!t.BIsEventForOGGWithoutVisibleStorePage()) return null;
          const i = (l) => t.SetOptedInForOGGWithoutVisibleStorePage(l);
          return (0, e.jsx)("div", {
            className: Ie().EventEditorInputPaneContents,
            children: (0, e.jsxs)("div", {
              className: f().LeftCol,
              children: [
                (0, e.jsxs)("div", {
                  className: f().EventEditorTextTitle,
                  children: [
                    (0, s.we)("#EventEditor_Options_VisibilityOptIn_Title"),
                    (0, e.jsx)("span", {
                      className: Ie().RequiredFieldLabel,
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
                    (0, e.jsx)(p.RF, {
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
                on.TU.k_ESteamRealmChina,
              ),
            n =
              a.BInRealmGlobal() &&
              s.A0.IsELanguageValidInRealm(
                a.GetCurEditLanguage(),
                on.TU.k_ESteamRealmGlobal,
              );
          !t && !n && a.SetCurEditLanguage(a.BInRealmChina() ? G.ZLm : G.Bhc);
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
            return (0, e.jsx)(p.RF, {
              onChange: n,
              label: (0, s.we)("#EventEditor_Options_ShowInSteamChina"),
              description: (0, s.we)(
                "#EventEditor_Options_ShowInSteamChina_Desc",
              ),
              checked: t.BInRealmChina(),
            });
          }),
          Ku = (0, R.PA)((a) => {
            const { editModel: t } = a;
            if (t.BInRealmGlobal() && !t.BInRealmChina()) return null;
            const n = (i) => {
              i
                ? t.AddTag("disable_steam_global")
                : t.ClearTags(["disable_steam_global"]),
                Eo(t);
            };
            return (0, e.jsx)(p.RF, {
              onChange: n,
              label: (0, s.we)("#EventEditor_Options_ShowInSteamGlobal"),
              description: (0, s.we)(
                "#EventEditor_Options_ShowInSteamGlobal_Desc",
              ),
              checked: !t.BInRealmGlobal(),
            });
          }),
          Zu = (0, R.PA)((a) => {
            const { editModel: t } = a,
              n = zu(t.GetEventModel());
            return (0, e.jsxs)("div", {
              children: [
                n && (0, e.jsx)(Ju, { editModel: t }),
                (0, e.jsx)(Ku, { editModel: t }),
              ],
            });
          }),
          qu = (a) => {
            const [t] = (0, Se.t7)(a, mt.A.k_DataRequest_CommonOnly);
            return !!(t && t.HasContentDescriptorID(Bu.u7));
          },
          Xu = (0, R.PA)((a) => {
            const { editModel: t } = a;
            return qu(t.GetAppID())
              ? (0, e.jsx)(p.RF, {
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
        var $u = u(24118),
          eh = u(6542),
          ka = u.n(eh);
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
            i = S.useRef(void 0),
            [l, o] = S.useState(!1),
            r = t.GetClanSteamID(),
            d = t.GetGID(),
            {
              bLoading: m,
              bPublishRequiresValveApproval: c,
              nAccountApproved: g,
            } = (0, Te.g7)(r.GetAccountID(), d);
          S.useEffect(() => {
            n && i != null && i.current && i.current.click();
          }, [n]);
          const _ = t.GetEventType() == G.ajI,
            v = r.GetAccountID() == (0, ca.H)() || _,
            h = (0, ve.Dd)(r, !0),
            x = !v && h,
            b = (fe, me) => {
              (0, U.pg)(
                (0, e.jsx)(ja.i, {
                  editModel: t,
                  bUnlistedMode: me,
                  bValveAdmin: h,
                  OnPublishSuccess: () => o(!0),
                  partnerEventEditorStore: M.mh,
                }),
                (0, Q.uX)(fe),
              );
            },
            E = (fe) => {
              t.SetVisibilityPublishingSetup(C.Fl.immediate),
                (0, U.pg)(
                  (0, e.jsx)(ja.i, {
                    editModel: t,
                    bValveAdmin: h,
                    OnPublishSuccess: () => o(!0),
                    partnerEventEditorStore: M.mh,
                    closeModal: () => {
                      t.ResetSetVisibilityStartTime();
                    },
                  }),
                  (0, Q.uX)(fe),
                );
            };
          if (l)
            return (0, e.jsx)(ce.OG, {
              eventModel: t.GetEventModel(),
              route: ce.PH.k_eView,
            });
          const y = t.BHidden(),
            P = t.BPublished(),
            N = t.BUnlisted();
          if ((!y || N) && P) return null;
          if (m)
            return (0, e.jsx)(H.t, {
              string: (0, s.we)("#Loading"),
              size: "small",
            });
          const q = t.BAllowedToPublishStagedEvents(),
            le = c && !g;
          return (0, e.jsxs)("div", {
            className: (0, j.A)(f().FlexColumnContainer, ka().PublishOption),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Button_Publish"),
              }),
              (0, e.jsxs)("div", {
                className: (0, j.A)(ka().PublishButtonCtn),
                children: [
                  le &&
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
                  !P &&
                    !le &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !v &&
                          (0, e.jsx)(Jn, {
                            label: (0, s.we)("#Button_Publish"),
                            description: (0, s.we)("#EventEditor_Publish_Desc"),
                            refActionButton: i,
                            onClick: (fe) => b(fe, !1),
                          }),
                        (v || x) &&
                          (0, e.jsx)(L.e7, {
                            condition: x,
                            wrap: (fe) =>
                              (0, e.jsx)(ve.Eb, {
                                clanSteamID: r,
                                requireAdmin: !0,
                                children: fe,
                              }),
                            children: (0, e.jsx)(Jn, {
                              label: _
                                ? (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_CreatorHome",
                                  )
                                : (0, s.we)("#EventEditor_Publish_Unlisted"),
                              description: _
                                ? (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_CreatorHome_Desc",
                                  )
                                : (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_Desc",
                                  ),
                              refActionButton: v ? i : void 0,
                              onClick: (fe) => b(fe, !0),
                            }),
                          }),
                      ],
                    }),
                  !!(P && y && !N && !le) &&
                    (0, e.jsx)(L.e7, {
                      condition: !q,
                      wrap: (fe) =>
                        (0, e.jsx)(De.he, {
                          toolTipContent: (0, s.we)(
                            "#EventEditor_Publish_Disable_ttip",
                          ),
                          children: fe,
                        }),
                      children: (0, e.jsx)(Jn, {
                        label: (0, s.we)("#EventEditor_Publish_VisibleNow"),
                        refActionButton: i,
                        disabled: !q,
                        onClick: E,
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
                (0, e.jsx)("div", { className: ka().Description, children: n }),
              (0, e.jsxs)(p.$n, {
                onClick: r,
                className: (0, j.A)(
                  ka().EventPublishButton,
                  "DialogButton Primary",
                  ka().PublishButton,
                ),
                ref: o,
                disabled: l,
                children: [t, i && (0, e.jsx)($.o, { tooltip: i })],
              }),
            ],
          });
        }
        var de = u(82267),
          fo = u.n(de),
          Fa = u(83963);
        class Mt {
          constructor() {
            (this.m_mapVisibilityUpdateRounds = new Map()),
              (this.m_mapVisibilityUpdateLoadPromises = new Map()),
              (this.m_mapVisibilityUpdateChangeCallback = new Map()),
              (this.m_mapVisibilityLaunchRounds = new Map()),
              (this.m_mapVisibilityLaunchLoadPromises = new Map()),
              (this.m_mapVisibilityLaunchChangeCallback = new Map());
          }
          GetVisibilityRounds(t, n) {
            return t == Fa.tw.I8
              ? this.m_mapVisibilityUpdateRounds.get(n)
              : this.m_mapVisibilityLaunchRounds.get(n);
          }
          GetVisibilityRoundsChangeCallback(t, n) {
            const i =
              t == Fa.tw.I8
                ? this.m_mapVisibilityUpdateChangeCallback
                : this.m_mapVisibilityLaunchChangeCallback;
            return i.has(n) || i.set(n, new Qa.lu()), i.get(n);
          }
          async LoadVisibilityRounds(t, n) {
            const i =
              t == Fa.tw.I8
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
                d = await oe().get(o, { params: r, withCredentials: !0 });
              if (
                (d == null ? void 0 : d.status) == 200 &&
                ((i = d == null ? void 0 : d.data) == null
                  ? void 0
                  : i.success) == Xe.R
              ) {
                const m =
                    t == Fa.tw.I8
                      ? this.m_mapVisibilityUpdateRounds
                      : this.m_mapVisibilityLaunchRounds,
                  c = d.data.data || [];
                return (
                  m.set(n, c),
                  this.GetVisibilityRoundsChangeCallback(t, n).Dispatch(c),
                  c
                );
              }
              l = (0, Me.H)(d);
            } catch (o) {
              l = (0, Me.H)(o);
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
              Mt.s_Singleton ||
                ((Mt.s_Singleton = new Mt()), Mt.s_Singleton.Init()),
              Mt.s_Singleton
            );
          }
          Init() {}
        }
        function nh(a, t) {
          const [n, i] = (0, S.useState)(Mt.Get().GetVisibilityRounds(a, t));
          return (
            (0, S.useEffect)(() => {
              (!n ||
                n.length == 0 ||
                n[0].appid != t ||
                n[0].feature_type != a) &&
                Mt.Get()
                  .LoadVisibilityRounds(a, t)
                  .then((l) => i(l));
            }, [t, n, a]),
            (0, ie.hL)(Mt.Get().GetVisibilityRoundsChangeCallback(a, t), i),
            n
          );
        }
        var Kn = u(69168),
          sh = u(11823);
        const ih = 100;
        function oh(a) {
          var t;
          const { editModel: n } = a,
            [i, l, o] = (0, B.q3)(() => [
              n.GetEventState(),
              n.GetClanSteamID(),
              n.GetEventModel().jsondata.clone_from_event_gid,
            ]),
            r = (0, Ln.m)("EventReplacePublishingControls"),
            { rgClanEventData: d } = (0, V.SG)(l, ih, r);
          return !o ||
            !((t = d == null ? void 0 : d.pages) != null && t.length) ||
            i != ee.zv.k_EEventStateUnpublished
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
            [i, l] = (0, S.useState)(null),
            [o, r, d] = (0, ie.uD)(),
            m = (0, S.useMemo)(
              () =>
                n.map((c) => ({
                  value: c.gid,
                  label:
                    c.event_name +
                    ": " +
                    (0, s.TW)(c.rtime32_start_time) +
                    " @ " +
                    (0, _t.pg)(c.rtime32_start_time),
                })),
              [n],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)("#EventPublishing_Replace_Pick"),
              }),
              (0, e.jsx)(ua.Ay, {
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
              (0, e.jsx)(p.$n, {
                disabled: !i,
                onClick: r,
                children: (0, s.we)("#EventPublishing_Replace_Selected"),
              }),
              (0, e.jsx)(Kn.E, {
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
            l = (0, Xa.E)(),
            [o, r] = (0, S.useState)(),
            [d] = (0, S.useState)(() => new M.Nc()),
            [m, c] = (0, S.useState)(null),
            [g, _] = (0, S.useState)(!1),
            [v, h] = (0, S.useState)(!1),
            [x, b, E] = (0, B.q3)(() => [
              m == null ? void 0 : m.GetClanSteamID(),
              m == null ? void 0 : m.GetEventModel().GetNameWithFallback(l),
              m == null ? void 0 : m.GetEventModel().GetLastUpdateTime(),
            ]);
          (0, S.useEffect)(() => {
            i &&
              (m == null ? void 0 : m.GetGID()) != i &&
              d.LoadEditorModel(n.GetClanSteamID(), i).then((q) => {
                c(q);
              }),
              i &&
                !o &&
                M.Nc.GetLastUpdateTimeForEvent(
                  n.GetClanSteamID(),
                  i,
                  null,
                  null,
                ).then(r);
          }, [n, i, m, d, o]);
          const [y, P] = (0, S.useState)(!1),
            N = (0, St.vs)();
          return N.bLoading
            ? (0, e.jsx)(St.Hh, {
                state: N,
                strDialogTitle: (0, s.we)("#EventPublishing_Replace_To"),
                closeModal: t,
              })
            : y
              ? (0, e.jsx)(ja.t, {
                  editModel: m,
                  partnerEventEditorStore: d,
                  OnSuccess: () => {},
                  closeModal: t,
                  bReplaceEventMode: !0,
                  elSuccessDisplayLinks: (0, e.jsx)("a", {
                    href: `${La.TS.COMMUNITY_BASE_URL}/gid/${x == null ? void 0 : x.ConvertTo64BitString()}/partnerevents/edit/${i}`,
                    children: (0, s.we)("#EventEdit_Replacing_Open"),
                  }),
                })
              : (0, e.jsx)(_i.o0, {
                  onCancel: t,
                  strTitle: (0, s.we)("#EventPublishing_Replace_To"),
                  strDescription: (0, s.we)(
                    "#EventPublishing_Replace_Dialog_Desc1",
                  ),
                  bOKDisabled: !g,
                  onOK: () => {
                    v || (m.ReplaceFrom(n), P(!0));
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
                                    (0, s.TW)(E) + " @ " + (0, _t.pg)(E),
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
                            (0, e.jsx)(p.Yh, {
                              checked: g,
                              onChange: _,
                              label: (0, s.we)(
                                "#EventPublishing_Replace_Confirm",
                              ),
                            }),
                            !!La.iA.is_support &&
                              (0, e.jsx)(sh.DA, {
                                curEventModelJson: n.GetEventModel().jsondata,
                                prevEventModelJson: m.GetEventModel().jsondata,
                                onShowCallback: () => h(!0),
                                onCancelCallback: () => h(!1),
                              }),
                          ],
                        })
                      : (0, e.jsx)(H.t, { string: (0, s.we)("#Loading") }),
                });
        }
        function rh(a) {
          const { editModel: t } = a,
            n = (0, Xa.E)(),
            [i] = (0, B.q3)(() => [
              t.GetEventModel().jsondata.clone_from_event_gid,
            ]),
            l = (0, V.RR)(i),
            [o, r, d] = (0, ie.uD)();
          if (!i) return null;
          if (i && !l)
            return (0, e.jsx)(H.t, { string: (0, s.we)("#Loading") });
          const m = l.BIsVisibleEvent() || l.BIsUnlistedEvent();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.PP)(
                  "#EventPublishing_Replace_CloneFrom",
                  (0, e.jsx)(pe.N_, {
                    to: `${i}`,
                    children: l.GetNameWithFallback(n),
                  }),
                ),
              }),
              (0, e.jsxs)(p.$n, {
                disabled: !m,
                onClick: r,
                children: [
                  (0, s.we)("#EventPublishing_Replace_CloneFrom_Replace"),
                  (0, e.jsx)($.o, {
                    tooltip: (0, s.we)(
                      m
                        ? "#EventPublishing_Replace_CloneFrom_Replace_ttip"
                        : "#EventPublishing_Replace_CloneFrom_Replace_ttip_fail",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)(Kn.E, {
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
        var dh = u(68297),
          ch = u.n(dh);
        function uh(a) {
          const { editModel: t } = a,
            [n] = (0, B.q3)(() => [t.BHasTag("vo_marketing_message")]);
          if (n) return (0, e.jsx)(_h, { ...a });
        }
        const hh = 3;
        function _h(a) {
          var t, n;
          const { editModel: i } = a,
            [l, o, r] = (0, B.q3)(() => [
              i.BHasTag("vo_marketing_message"),
              i.GetClanAccountID(),
              i.GetGID(),
            ]),
            d = (0, Te.fj)(o, r),
            [m, c] = (0, S.useState)(() => {
              var b, E;
              return (E =
                (b = d == null ? void 0 : d.oPrivateData) == null
                  ? void 0
                  : b.jsonData) == null
                ? void 0
                : E.strMarketingMessageMajorUpdateHelpTicketReferenceCode;
            }),
            [g, _] = (0, S.useState)(null);
          (0, S.useEffect)(() => {
            var b, E, y, P;
            (E =
              (b = d == null ? void 0 : d.oPrivateData) == null
                ? void 0
                : b.jsonData) != null &&
              E.strMarketingMessageMajorUpdateHelpTicketReferenceCode &&
              c(
                (P =
                  (y = d == null ? void 0 : d.oPrivateData) == null
                    ? void 0
                    : y.jsonData) == null
                  ? void 0
                  : P.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
              );
          }, [
            (n =
              (t = d == null ? void 0 : d.oPrivateData) == null
                ? void 0
                : t.jsonData) == null
              ? void 0
              : n.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
          ]);
          const [v, h, x] = (0, ie.uD)(!1);
          return (0, e.jsxs)("div", {
            className: ch().Ctn,
            children: [
              (0, e.jsx)("div", {
                className: W.EventEditorTextTitle,
                children: (0, s.we)("#MM_MajorUpdate_Review_title"),
              }),
              (0, e.jsx)("div", {
                children: m
                  ? (0, e.jsx)("p", {
                      children: (0, s.oW)(
                        "#MM_MajorUpdate_Review_ticked_created",
                        (0, e.jsx)(L.uU, {
                          href: `${bt.TS.HELP_BASE_URL}en/wizard/HelpRequest/${m}`,
                          className: (0, j.A)(W.EditPreviewButton, W.Button),
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
                          accountID: bt.iA.accountid,
                          partnerID: g,
                          fnSetPartnerID: _,
                          strLabel: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Partner",
                          ),
                          strTooltip: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Partner_ttip",
                          ),
                        }),
                        (0, e.jsx)(p.$n, {
                          onClick: h,
                          children: (0, s.we)("#MM_MajorUpdate_Review_create"),
                        }),
                        (0, e.jsx)(Kn.E, {
                          active: v,
                          children: (0, e.jsx)(mh, {
                            editModel: i,
                            nPartnerID: g,
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
            o = (0, St.vs)();
          return (
            (0, S.useEffect)(() => {
              o.bLoading ||
                (o.fnSetLoading(!0),
                (async () => {
                  const d = t.GetClanSteamID(),
                    m = t.GetGID(),
                    c = await ph(
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
            (0, e.jsx)(St.Hh, {
              state: o,
              strDialogTitle: (0, s.we)("#MM_MajorUpdate_Review_create"),
              closeModal: i,
            })
          );
        }
        async function ph(a, t, n, i, l) {
          const o =
              bt.TS.COMMUNITY_BASE_URL +
              "partnereventdata/ajaxrequestmarketingmessagemajorupdatereview",
            r = new URLSearchParams();
          r.append("sessionid", (0, D.KC)()),
            r.append("clanAccountID", "" + a.GetAccountID()),
            r.append("appid", "" + t),
            r.append("gidClanEvent", n),
            r.append("partnerID", "" + l),
            r.append("message", i);
          try {
            let d = await oe().post(o, r, { withCredentials: !0 });
            return !d || d.status != 200 || d.data.success != Xe.R
              ? (console.error(
                  "CreateMarketingMessageMajorUpdateReviewRequestTicket failed.",
                  d && (0, Me.H)(d),
                ),
                d.data.success == Xe.Ze ? d.data : null)
              : d.data;
          } catch (d) {
            const m = (0, Me.H)(d);
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
            { data: d } = (0, Vt.hM)(t.GetClanAccountID());
          return (0, e.jsx)("div", {
            className: (0, j.A)(de.PublishContainer),
            children: (0, e.jsx)("div", {
              className: (0, j.A)(W.ReachBackground),
              children: (0, e.jsxs)("div", {
                className: Ee.EventEditorInputPaneContents,
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
                      W.FlexRowContainer,
                      de.PublishOptionsCtn,
                    ),
                    children: [
                      (0, e.jsx)(th, { editModel: t, bTakePublishAction: !1 }),
                      (0, e.jsx)(oh, { editModel: t }),
                    ],
                  }),
                  (0, e.jsx)(uh, { editModel: t }),
                  (0, e.jsx)(Zn, {
                    eventType: l,
                    clanSteamID: n,
                    permissions: d,
                  }),
                  (0, e.jsx)("div", { className: W.ClearThings }),
                ],
              }),
            }),
          });
        }
        let Zn = class extends S.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                bLoadingClanInfo: !J.ac.BHasClanInfoLoaded(
                  this.props.clanSteamID,
                ),
              });
          }
          async componentDidMount() {
            this.state.bLoadingClanInfo &&
              (await J.ac.LoadClanInfoForClanSteamID(this.props.clanSteamID),
              this.setState({ bLoadingClanInfo: !1 }));
          }
          render() {
            if (this.props.eventType == G.ajI) return;
            if (this.state.bLoadingClanInfo)
              return (0, e.jsx)("div", {
                className: "ReachCtn",
                children: (0, e.jsx)(H.t, {}),
              });
            let a = M.mh.GetEditModel(),
              t = a.GetCategoryAsType();
            const { permissions: n } = this.props,
              i = J.ac.GetClanInfoByClanAccountID(
                a.GetClanSteamID().GetAccountID(),
              );
            if (!(n != null && n.can_edit)) return (0, e.jsx)(S.Fragment, {});
            let l = a.BHasSaleEnabled() || i.is_ogg;
            const r =
              (a.BWillShowOnLibraryOverviewDueToSettings() ||
                a.BWillShowOnLibraryDetailDueToSettings()) &&
              (0, ee.Dn)(a.GetEventModel());
            return (0, e.jsxs)("div", {
              className: "ReachCtn",
              children: [
                (0, e.jsx)("div", {
                  className: W.EventEditorTextTitle,
                  children: (0, s.we)("#EventReach_Title"),
                }),
                (0, e.jsxs)("div", {
                  className: de.ReachItems,
                  children: [
                    (0, e.jsx)("div", {
                      className: W.EventEditorTextSubTitle,
                      children: (0, s.we)("#EventReach_SubTitle"),
                    }),
                    (0, e.jsx)("div", {
                      className: de.ReachColumnTitles,
                      children: (0, e.jsx)("div", {
                        className: de.ReachColumnName,
                        children: (0, s.we)("#EventReach_Location"),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: de.ReachItemList,
                      children: [
                        a.BWillShowOnStoreDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: de.ReachSubject,
                            children: [
                              (0, s.we)("#EventReach_GamePage"),
                              (0, e.jsx)($.o, {
                                tooltip: (0, s.we)("#EventReach_GamePage_ttip"),
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          className: de.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_GameNewsPg"),
                            (0, e.jsx)($.o, {
                              tooltip: (0, s.we)("#EventReach_GameNewsPg_ttip"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, j.A)(de.ReachSubject),
                          children: [
                            (0, s.we)("#EventReach_PersonalizedCalendar"),
                            (0, e.jsx)($.o, {
                              tooltip: (0, s.we)(
                                "#EventReach_PersonalizedCalendar_ttip",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: de.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_Community"),
                            (0, e.jsx)($.o, {
                              tooltip: (0, s.we)("#EventReach_Community_ttip"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: de.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_FriendActivity"),
                            (0, e.jsx)($.o, {
                              tooltip: (0, s.we)(
                                "#EventReach_FriendActivity_ttip",
                              ),
                            }),
                          ],
                        }),
                        a.BWillShowOnLibraryOverviewDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(de.ReachSubject),
                            children: [
                              (0, s.we)("#EventReach_LibraryHome"),
                              r &&
                                (0, e.jsxs)("span", {
                                  className: de.ReachPendingVisibilityText,
                                  children: [
                                    "  ",
                                    (0, s.we)(
                                      "#EventReach_LibraryVisibilityPendingModeration",
                                    ),
                                  ],
                                }),
                              (0, e.jsx)($.o, {
                                tooltip: (0, s.we)(
                                  "#EventReach_LibraryHome_ttip",
                                ),
                              }),
                            ],
                          }),
                        a.BWillShowOnLibraryDetailDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(de.ReachSubject),
                            children: [
                              (0, s.we)("#EventReach_LibraryDetail"),
                              r &&
                                (0, e.jsxs)("span", {
                                  className: de.ReachPendingVisibilityText,
                                  children: [
                                    "  ",
                                    (0, s.we)(
                                      "#EventReach_LibraryVisibilityPendingModeration",
                                    ),
                                  ],
                                }),
                              (0, e.jsx)($.o, {
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
                            className: (0, j.A)(de.ReachSubject, de.Future),
                            children: [
                              (0, s.we)("#EventReach_Future"),
                              " ",
                              (0, s.we)("#EventReach_Reminder"),
                              (0, e.jsx)($.o, {
                                tooltip: (0, s.we)("#EventReach_Reminder_ttip"),
                              }),
                            ],
                          }),
                        !!a.BIsAllowedInNotifications() &&
                          (0, e.jsxs)("div", {
                            className: (0, j.A)(de.ReachSubject, de.Future),
                            children: [
                              (0, s.we)("#EventReach_Future"),
                              " ",
                              (0, s.we)("#EventReach_EmailRollUp"),
                              (0, e.jsx)($.o, {
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
                            className: de.ReachColumnTitles,
                            children: (0, e.jsx)("div", {
                              className: de.ReachColumnName,
                              children: (0, s.we)(
                                "#EventReach_OptionalLocation",
                              ),
                            }),
                          }),
                          i.is_ogg &&
                            (0, e.jsxs)("div", {
                              className: de.ReachItemList,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: de.ReachSubject,
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: de.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(ue.EQ, {
                                          bOn: a
                                            .GetEventModel()
                                            .BHasTag("workshop"),
                                        }),
                                        (0, e.jsx)("span", {
                                          className:
                                            de.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_Workshop",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)($.o, {
                                      tooltip: (0, s.we)(
                                        "#EventReach_Workshop_ttip",
                                      ),
                                    }),
                                  ],
                                }),
                                t == G.zeJ && (0, e.jsx)(fh, {}),
                                (0, e.jsxs)("div", {
                                  className: (0, j.A)(de.ReachSubject),
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: de.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(ue.EQ, {
                                          bOn: a
                                            .GetEventModel()
                                            .BShowLibrarySpotlight(),
                                        }),
                                        (0, e.jsx)("span", {
                                          className:
                                            de.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_LibraySpotLight",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)($.o, {
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
                              className: de.ReachItemList,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: de.ReachSubject,
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: de.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(ue.EQ, {
                                          bOn: a.BHasSaleProductBanners(),
                                        }),
                                        (0, e.jsx)("span", {
                                          className:
                                            de.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_SaleBanner",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)($.o, {
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
                                          (0, e.jsx)(_t.K4, {
                                            dateAndTime: a.GetEventStartTime(),
                                            bSingleLine: !0,
                                          }),
                                          (0, e.jsx)(_t.K4, {
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
        Zn = Sh([R.PA], Zn);
        function fh(a) {
          const t = M.mh.GetEditModel(),
            n = nh(Fa.tw.I8, t.GetAppID());
          return (0, e.jsxs)("div", {
            className: de.ReachSubject,
            children: [
              (0, e.jsxs)("span", {
                className: de.ReachSubjectOptional,
                children: [
                  n == null || n == null
                    ? (0, e.jsx)(H.t, {
                        size: "small",
                        string: (0, s.we)("#Loading"),
                      })
                    : (0, e.jsx)(ue.EQ, {
                        bOn: n.some(
                          (i) => i.announcementid == t.GetAnnouncementGID(),
                        ),
                      }),
                  (0, e.jsx)("span", {
                    className: de.ReactSubjectOptionalText,
                    children: (0, s.we)("#EventReach_RecentlyUpdatedPg"),
                  }),
                ],
              }),
              (0, e.jsx)($.o, {
                tooltip: (0, s.we)("#EventReach_RecentlyUpdatedPg_ttip"),
              }),
            ],
          });
        }
        function xh(a) {
          const { editModel: t } = a,
            [n, i, l, o, r, d, m, c, g] = (0, B.q3)(() => [
              t.GetEventModel().GID,
              t.GetEventModel().AnnouncementGID,
              t.ComputeEditingModelTimeOverrides(),
              t.BHidden(),
              t.BPublished(),
              t.GetEventVisibilityStartTime(),
              t.GetVisibilitySetting(),
              t.GetEventModel().GetVisibilityStartTimeAndDateUnixSeconds(),
              t.GetEventType() == G.ajI,
            ]);
          let _;
          if (!r)
            if (t.GetStartTimeEditChoice() == C.z8.k_ESpecified)
              switch (m) {
                case C.Fl.event_start:
                  _ = (0, e.jsx)("div", {
                    className: de.VisibilityNote,
                    children: (0, e.jsx)("p", {
                      children: (0, s.we)(
                        "#EventEditor_Status_WillBeVisible_EventStart",
                      ),
                    }),
                  });
                  break;
                case C.Fl.specified_time:
                  _ = (0, e.jsx)("div", {
                    className: de.VisibilityNote,
                    children: (0, e.jsx)("p", {
                      children: (0, s.PP)(
                        "#EventEditor_Status_WillBeVisible_At",
                        (0, e.jsx)(_t.K4, { dateAndTime: c, bSingleLine: !0 }),
                      ),
                    }),
                  });
                  break;
                case C.Fl.immediate:
                default:
                  _ = (0, e.jsxs)("div", {
                    className: de.VisibilityNote,
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
              _ = (0, e.jsxs)("div", {
                className: de.VisibilityNote,
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
          const v = (0, ce.T7)(t.GetEventModel());
          return (0, e.jsxs)("div", {
            className: de.SummaryContainer,
            children: [
              (0, e.jsx)("div", {
                className: W.EventEditorTextTitle,
                children: (0, s.we)("#EventPublishing_Summary"),
              }),
              (0, e.jsxs)("div", {
                className: de.SummaryItems,
                children: [
                  (0, e.jsxs)("div", {
                    className: de.StatusRow,
                    children: [
                      (0, e.jsx)("div", {
                        className: de.StatusText,
                        children: (0, e.jsx)(Qt.zm, { editModel: t }),
                      }),
                      r &&
                        !o &&
                        !g &&
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)(ce.tj, {
                            className: (0, j.A)(W.Button, W.Primary),
                            eventModel: t.GetEventModel(),
                            route: ce.PH.k_eStoreView,
                            children: (0, s.we)("#EventEditor_ViewLive"),
                          }),
                        }),
                    ],
                  }),
                  !g &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsxs)("div", {
                          className: W.FlexRowContainer,
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
                            (0, e.jsx)(_t.K4, {
                              dateAndTime: l.nOverrideStartTime,
                              bSingleLine: !0,
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: W.FlexRowContainer,
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
                                    (0, e.jsx)(_t.K4, {
                                      dateAndTime: d,
                                      bSingleLine: !0,
                                    }),
                                  ),
                                  "\xA0",
                                  (0, s.we)("#EventEditor_Visibility_NoAction"),
                                ],
                              }),
                            _,
                          ],
                        }),
                        !!(n || i) &&
                          (0, e.jsx)("div", {
                            className: de.LinkRow,
                            children: (0, e.jsx)($u.V, {
                              eventLink: v,
                              labelOverride: "#EventEditor_Status_FutureURL",
                            }),
                          }),
                      ],
                    }),
                  g &&
                    (0, e.jsx)("div", {
                      className: W.FlexRowContainer,
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
            l = (0, Ln.m)("EventInputPane"),
            o = (0, hi.LU)(),
            r = o.GetEventModel();
          (0, S.useEffect)(() => {
            D.UF.IS_CURATOR && rt.pF.LoadCreatorHome(i, !1, l);
          }, [i, l]);
          const d = (0, S.useCallback)(() => {
              const N = rt.pF.GetCreatorHome(i);
              return D.iA.is_support &&
                D.UF.CAN_UPLOAD_IMAGES &&
                D.UF.IS_CURATOR &&
                N
                ? !(
                    N.BHasClanAccountFlagSet(la.Wv.bM) ||
                    N.BHasClanAccountFlagSet(la.Wv._x) ||
                    N.BHasClanAccountFlagSet(la.Wv.Jb) ||
                    N.GetNumFollowers() >= 15e3
                  )
                : !1;
            }, [i]),
            { data: m } = (0, Vt.hM)(r.clanSteamID.GetAccountID()),
            c = !!(m != null && m.valve_admin),
            g = (0, J.Yp)(r, c),
            _ = (0, B.q3)(() => (0, ra.C7)(c)),
            v = (0, J._5)(r, c),
            h = (0, B.q3)(() => (0, ra.cA)(c)),
            x = (0, J.Ao)(r);
          (0, xa.wT)(
            [g.bVisible, v.bVisible, x.bVisible].filter(Boolean).length <= 1,
            "Sale, Update Landing Page, and Creator Home should be mutually exclusive",
          );
          const b = !vo(o.GetEventModel(), m);
          J.ac.LoadClanInfoForClanSteamID(i);
          const E = !!(
              (t = J.ac.GetClanInfoByClanAccountID(i.GetAccountID())) != null &&
              t.has_rss_feed
            ),
            y = (N) =>
              window.sessionStorage.setItem(
                "editorCurrentTab",
                `?tab=${N.key}`,
              ),
            P = [
              {
                name: (0, s.we)("#EventEditor_Description_tab"),
                key: "description",
                status: (0, e.jsx)(Sa, { fnGetStatus: ra._P }),
                hidden: x.bVisible,
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(qd, {
                    editModel: o,
                    bInitiatePublishDialog: n,
                    bCanManuallyTagAssociatedApps: E,
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
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(zn, { mode: Za, editModel: o }),
                }),
                onClick: y,
              },
              {
                name: (0, s.we)("#EventEditor_Visibility_Title"),
                key: "options",
                status: (0, e.jsx)(Sa, { fnGetStatus: ra.e5 }),
                hidden: x.bVisible,
                contents: (0, e.jsxs)(je.tH, {
                  children: [
                    (0, e.jsx)(Hu, { editModel: o }),
                    (0, e.jsx)("div", { className: f().ClearThings }),
                  ],
                }),
                onClick: y,
              },
              {
                name: (0, s.we)("#EventEditor_Artwork"),
                key: "artwork",
                status: (0, e.jsx)(Sa, { fnGetStatus: ra.uu }),
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
                  o.GetClanAccountID() == (0, ca.H)(),
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(ct, { editModel: o }),
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
                  o.GetClanAccountID() == (0, ca.H)()
                    ? (0, e.jsx)(Sa, { fnGetStatus: ra.ER })
                    : void 0,
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(Gu, { editModel: o }),
                }),
                onClick: y,
              },
              {
                name:
                  (g.bValveOnly ? "(VO) " : "") + (0, s.we)("#Sale_TabTitle"),
                key: "sale",
                status: (0, e.jsx)(Sa, { fnGetStatus: () => _ }),
                statusToolTip: _ == null ? void 0 : _.ttip,
                hidden: !g.bVisible,
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(zn, { mode: Gl, editModel: o }),
                }),
                onClick: y,
              },
              {
                name:
                  (v.bValveOnly ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_UpdateLandingPage_Title"),
                key: "updatelandingpage",
                status: (0, e.jsx)(Sa, { fnGetStatus: () => h }),
                statusToolTip: h == null ? void 0 : h.ttip,
                hidden: !v.bVisible,
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(zn, { mode: Ka, editModel: o }),
                }),
                onClick: y,
              },
              {
                name: (0, s.we)("#Button_Publish"),
                key: "publishing",
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(Eh, { editModel: o }),
                }),
                onClick: y,
              },
              {
                name: "(VO) Debug",
                key: "debug",
                hidden: !c,
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(Al.Oq, { editModel: o }),
                }),
                onClick: y,
              },
              {
                name: "(VO) Stats",
                key: "stats",
                hidden: !c || !r.GID || !r.BHasSaleEnabled(),
                contents: (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(gc, { editModel: o }),
                }),
                onClick: y,
              },
            ];
          return (0, e.jsxs)(jh, {
            children: [
              (0, e.jsx)(Gn.V, { tabs: P }),
              (0, e.jsx)("div", { className: f().ClearThings }),
            ],
          });
        }
        function jh(a) {
          const [t, n] = S.useState();
          return (0, e.jsx)("div", {
            className: Ie().EventEditorInputPaneContainer,
            children: (0, e.jsxs)(md, {
              elContent: t,
              children: [
                (0, e.jsx)("div", {
                  className: Ie().EventEditorInputPaneContents,
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
        const Sa = (0, R.PA)(function (t) {
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
            (0, S.useEffect)(() => {
              J.ac.LoadOGGClanInfoForIdentifier(a.appid_or_vanity_str);
            }, [a.appid_or_vanity_str]);
            const {
                clanSteamID: n,
                gid: i,
                appid: l,
                bInitiatePublishDialog: o,
                appid_or_vanity_str: r,
              } = a,
              m = !(D.UF.IS_CREATOR_HOME || D.UF.IS_CURATOR)
                ? (t = mt.A.Get().GetApp(l)) == null
                  ? void 0
                  : t.GetName()
                : D.UF.VANITY_ID,
              c = M.mh.GetEditModel();
            return (0, e.jsx)(hi.A4, {
              editModel: c,
              children: (0, e.jsxs)("div", {
                className: (0, j.A)(Ie().wrapper),
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
                      Ie().EventEditBelowTopBarContainer,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: Ie().EventEditBelowTopBarGameName,
                        children: m,
                      }),
                      (0, e.jsxs)("div", {
                        className: Ie().EventEditBelowTopBarRow,
                        children: [
                          (0, e.jsx)(Ch, { editModel: c }),
                          (0, e.jsx)(De.Gq, {
                            toolTipContent: c.GetName(),
                            direction: "bottom",
                            children: (0, e.jsx)("div", {
                              className: Ie().EventEditBelowTopBarEventName,
                              children: c.GetName(),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: Ie().maincontent,
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
            { bCanChange: m, strReasonText: c } = (0, we.NN)(t),
            g = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("span", {
                  children: [(0, s.we)("#EventEditor_TypeTitle"), " "],
                }),
                l,
                m && (0, e.jsx)("img", { src: Ol.A }),
                !m && (0, e.jsx)($.o, { tooltip: c }),
              ],
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              m &&
                (0, e.jsx)(pe.N_, {
                  className: (0, j.A)(
                    Ie().EventEditBelowTopBarCategoryChoice,
                    Ie().AllowHover,
                  ),
                  to: n ? se.GY.MigrateCategory(i, o) : se.GY.Category(i, r),
                  children: g,
                }),
              !m &&
                (0, e.jsx)("div", {
                  className: Ie().EventEditBelowTopBarCategoryChoice,
                  children: g,
                }),
            ],
          });
        }
        function wh() {
          const a = (0, mi.il)(),
            t = M.mh.GetEditModel(),
            [n, i] = (0, S.useState)(!1);
          return (
            (0, S.useEffect)(() => {
              if (!(t != null && t.BTagsNeedResync())) return;
              let l = !1;
              return (
                (0, mi.I9)(a, t)
                  .then((o) => {
                    !l &&
                      o.length > 0 &&
                      (0, _i.pY)(
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
        const Dh = (0, R.PA)(function (t) {
            const n = (0, S.useMemo)(() => new k.b(D.UF.CLANSTEAMID), []),
              { bResyncing: i, bFailed: l } = wh();
            return i
              ? (0, e.jsxs)("div", {
                  className: da().FlexCenter,
                  children: [
                    (0, e.jsx)(H.t, {}),
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEditor_TagResyncProgress"),
                    }),
                  ],
                })
              : l
                ? (0, e.jsx)(Qt.XW, {
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
          qn = (0, Ya.L)(Dh);
        class yh extends S.Component {
          constructor(t) {
            super(t),
              (this.m_bRedirect = !1),
              (this.m_bRedirect =
                M.mh.GetEditModel() === void 0 ||
                M.mh.GetEditModel().GetCategoryAsType() == G.DRF);
          }
          render() {
            return this.m_bRedirect
              ? (0, e.jsx)(ke.rd, {
                  to: se.GY.Category(
                    this.props.match.params.appid_or_vanity_str,
                    "",
                  ),
                })
              : (0, e.jsx)(qn, { ...this.props });
          }
        }
        function Th(a) {
          return a ? a.filter(Boolean).length : 0;
        }
        function Ih(a) {
          const { editModel: t } = a,
            n = (0, ve.Dd)(t.GetClanSteamID(), !0),
            [i, l, o, r, d, m, c, g, _, v] = (0, B.q3)(() => [
              t.GetEventType(),
              !!t.GetEventModel().BHasTag("steam_best_of_year"),
              t.GetClanSteamID(),
              t.GetEventModel().vecTags,
              t.GetIncludedRealmList(),
              t.GetEventType() === G.HFK,
              Th(t.GetEventModel().jsondata.localized_spotlight_image),
              t.BAllowedSteamStoreSpotlight(),
              t.GetAppID(),
              Bc(t, n),
            ]),
            h = ["background", "capsule"];
          c > 0
            ? h.push("spotlight")
            : D.UF.IS_OGG &&
              g &&
              (h.push("localized_store_app_spotlight"),
              h.push("localized_store_app_spotlight_mobile")),
            l && h.push("bestofyear_banner", "bestofyear_banner_mobile");
          const x = h.includes("spotlight"),
            b = h.includes("localized_store_app_spotlight"),
            E = h.includes("localized_store_app_spotlight_mobile");
          return (0, e.jsxs)(je.tH, {
            children: [
              (0, e.jsxs)("div", {
                className: Ie().ArtworkTipsCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ie().ArtworkTips,
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
                    className: Ie().ArtworkDocs,
                    target: D.TS.IN_CLIENT ? void 0 : "_blank",
                    children: [
                      (0, e.jsx)("div", {
                        className: Ie().ArtworkExampleCtn,
                        children: (0, e.jsx)("img", {
                          className: Ie().ArtworkExampleThumbnail,
                          src: D.TS.IMG_URL + "events/thumb_library_home.jpg",
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: Ie().ArtworkExampleTitle,
                        children: (0, s.we)("#selectimage_viewExamples"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(An.t, {
                clanSteamID: o,
                rgSupportArtwork: h,
                fnSetImageURL: t.SetImageURL,
                bAllowPreviousClanImageSelection: !0,
                rgRealmList: d,
              }),
              (0, e.jsx)(We.it, {
                clanSteamID: o,
                appid: _,
                eventModel: t.GetEventModel(),
                title: (0, s.we)("#EventEditor_ArtworkType_capsule"),
                artworkType: "capsule",
                fnLangHasData: t.BHasTitleImage,
                fnSetImageURL: t.SetImageURL,
                fnGetImageHashAndExt: t.GetImageHashAndExt,
                headerHint: (0, aa.bc)(i, r) ? We.uE.k_Required : void 0,
                elEventArtworkExample: (0, e.jsx)(Ca, {
                  artworkType: "capsule",
                }),
                partnerEventStore: M.mh,
              }),
              (0, e.jsx)(We.it, {
                clanSteamID: o,
                appid: _,
                eventModel: t.GetEventModel(),
                title: (0, s.we)("#EventEditor_ArtworkType_background"),
                fnLangHasData: t.BHasTitleImage,
                fnSetImageURL: t.SetImageURL,
                fnGetImageHashAndExt: t.GetImageHashAndExt,
                artworkType: "background",
                headerHint: We.uE.k_Suggested,
                elEventArtworkExample: (0, e.jsx)(Ca, {
                  artworkType: "background",
                }),
                partnerEventStore: M.mh,
              }),
              !!(m && (b || E || x)) &&
                (0, e.jsxs)("div", {
                  className: be().ArtworkSelectorContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: be().Title,
                      children: (0, s.we)(
                        "#EventEditor_ArtworkType_store_spotlight",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, j.A)(be().SelectImageBlock, be().Tips),
                      children: (0, s.we)(
                        "#EventEditor_ArtworkType_SpotlightNotSupport",
                        t.GetCategoryAsString(),
                      ),
                    }),
                    (0, e.jsx)("br", {}),
                  ],
                }),
              !!(b && !m) &&
                (0, e.jsx)(We.it, {
                  clanSteamID: o,
                  appid: _,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)(
                    "#EventEditor_ArtworkType_localized_store_app_spotlight",
                  ),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "localized_store_app_spotlight",
                  elEventArtworkExample: (0, e.jsx)(Ca, {
                    artworkType: "localized_store_app_spotlight",
                  }),
                  headerHint: We.uE.k_Requested,
                  partnerEventStore: M.mh,
                }),
              !!(E && !m) &&
                (0, e.jsx)(We.it, {
                  clanSteamID: o,
                  appid: _,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)(
                    "#EventEditor_ArtworkType_localized_store_app_spotlight_mobile",
                  ),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "localized_store_app_spotlight_mobile",
                  elEventArtworkExample: (0, e.jsx)(Ca, {
                    artworkType: "localized_store_app_spotlight_mobile",
                  }),
                  headerHint: We.uE.k_Requested,
                  partnerEventStore: M.mh,
                }),
              !!(x && !m) &&
                (0, e.jsx)(We.it, {
                  clanSteamID: o,
                  appid: _,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)("#EventEditor_ArtworkType_store_spotlight"),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "spotlight",
                  headerHint: (0, aa.Ch)(i) ? We.uE.k_Suggested : void 0,
                  elEventArtworkExample: (0, e.jsx)(Ca, {
                    artworkType: "spotlight",
                  }),
                  partnerEventStore: M.mh,
                }),
              !!D.UF.IS_OGG &&
                (0, e.jsx)(We.it, {
                  clanSteamID: o,
                  appid: _,
                  eventModel: t.GetEventModel(),
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  title: (0, s.we)("#EventEditor_ArtworkType_hero"),
                  fnLangHasData: t.BHasTitleImage,
                  artworkType: "hero",
                  partnerEventStore: M.mh,
                }),
              !!l &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(We.it, {
                      clanSteamID: o,
                      appid: _,
                      eventModel: t.GetEventModel(),
                      fnLangHasData: t.BHasTitleImage,
                      fnSetImageURL: t.SetImageURL,
                      fnGetImageHashAndExt: t.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_bestofyear_banner",
                      ),
                      artworkType: "bestofyear_banner",
                      partnerEventStore: M.mh,
                    }),
                    (0, e.jsx)(We.it, {
                      clanSteamID: o,
                      appid: _,
                      eventModel: t.GetEventModel(),
                      fnLangHasData: t.BHasTitleImage,
                      fnSetImageURL: t.SetImageURL,
                      fnGetImageHashAndExt: t.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_bestofyear_banner_mobile",
                      ),
                      artworkType: "bestofyear_banner_mobile",
                      partnerEventStore: M.mh,
                    }),
                  ],
                }),
              !!v && (0, e.jsx)(Oc, { editModel: t }),
            ],
          });
        }
        var vn = u(9608),
          Ah = u(77008),
          Gh = u(85528),
          Ua = u(75779),
          Lh = u(30454);
        async function Nh() {
          const a = await (0, Lh.d)(
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
        function Bh() {
          return ["DeckCompatCounts"];
        }
        function Oh() {
          return {
            queryKey: Bh(),
            queryFn: () => Nh(),
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
            case Ua.sd:
              return a == null ? void 0 : a.playable;
            case Ua.V8:
              return a == null ? void 0 : a.unsupported;
            default:
              return a == null ? void 0 : a.verified;
          }
        }
        var Ze = u(70187),
          kh = u(36549),
          Xn = u(39153),
          jo = u(47610),
          Fh = u(18860),
          $n = u(87805);
        function Co(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, Ze.j$)(a.args)),
            i = S.useMemo(() => {
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
            const l = Number.parseInt((0, Ze.j$)(a.args, "depositpackageid")),
              o = Number.parseInt((0, Ze.j$)(a.args, "psulesspackageid")),
              r = (0, Ze.j$)(a.args, "out_of_stock_override"),
              d = (0, Ze.j$)(a.args, "delivery_override"),
              m = (0, Ze.j$)(a.args, "delivery_override_out_of_stock");
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
            { data: g } = (0, jo.DR)(t),
            { data: _ } = (0, jo.DR)(l),
            v = (0, S.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + t,
                  reservation_package: t,
                  deposit_package: n,
                  localized_reservation_desc: (0, Ft.$Y)([], G.bP9, null),
                  localized_out_of_stock_override: (0, Ft.$Y)(
                    [o || null],
                    G.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, Ft.$Y)(
                    [r || null],
                    G.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!d,
                  psu_less_package: l,
                },
              ],
              [t, n, o, r, d, l],
            );
          if (!g || (l && !_))
            return (0, e.jsx)(H.t, {
              string: (0, s.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const h = !La.iA.logged_in || !g.account_restricted_from_purchasing,
            x =
              g.reservation_state == Fh.G.k_EPurchaseReservationState_Reserved
                ? g
                : void 0;
          return (0, e.jsxs)(je.tH, {
            children: [
              c &&
                (0, e.jsx)(S.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(c, {
                    bIsPreview: !!i,
                    rgReservationDef: v,
                  }),
                }),
              !!g.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: v[0].unique_id,
                  children: [
                    (0, e.jsx)($n.b, {
                      reservationDef: v[0],
                      hardwareDetail: g,
                      bPSULessModel: !1,
                      reservedHardwareDetail: x,
                    }),
                    h &&
                      (0, e.jsx)($n.p, {
                        section: m,
                        reservationDef: v[0],
                        hardwareDetail: g,
                        reservedHardwareDetail: x,
                      }),
                    _ &&
                      (_ == null ? void 0 : _.allow_purchase_in_country) &&
                      (0, e.jsx)($n.b, {
                        reservationDef: v[0],
                        hardwareDetail: _,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var zh = u(6878),
          Hh = u(21035),
          wo = u(72865),
          Vh = u(38081),
          es = u.n(Vh),
          Ea = u(69596),
          Wh = u(10026),
          Qh = u.n(Wh),
          Yh = u(19298),
          Jh = u(11996),
          Kh = u(19047),
          Do = u(89926),
          Zh = u(32545),
          ts = u.n(Zh);
        function qh(a) {
          const { appID: t, classOverride: n, styleOverride: i } = a,
            [l, o] = (0, S.useState)(!1),
            r = (0, Ln.m)("GameHoverFollowButton"),
            { elDialogElement: d, fnShowLogonDialog: m } = (0, Do.l)(),
            c = (0, Jh.Fh)(t),
            { mutateAsync: g } = (0, Kh.L)(t, !c, void 0),
            _ = async (v) => {
              v.preventDefault(),
                v.stopPropagation(),
                D.iA.logged_in
                  ? (o(!0), await g(), r.token.reason || o(!1))
                  : m();
            };
          return (0, e.jsxs)(Yh.Z, {
            className: (0, j.A)(ts().FollowButton, n),
            onClick: _,
            style: i,
            children: [
              c ? (0, e.jsx)(yt.pPV, {}) : (0, e.jsx)(yt.c9e, {}),
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
          return (0, e.jsx)(qh, {
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
          const n = (0, Ea.O)(a.args.color, "black"),
            i = (0, Ea.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(Xh, { appid: t, color: n, bgcolor: i });
        }
        var as = u(57646);
        function e_(a) {
          const t = Number(a.args.packageid);
          return t
            ? (0, e.jsx)(as.eF, {
                packageID: t,
                display_style: (0, as._w)(a.args.display),
              })
            : null;
        }
        function t_(a) {
          const t = Number(a.args.packageid),
            n = Number(a.args.compareid);
          return !t || !n
            ? null
            : (0, e.jsx)(as.hJ, { packageID: t, compareID: n });
        }
        function a_(a) {
          var t;
          const n = (t = a.args[""]) == null ? void 0 : t.trim();
          return n
            ? (0, e.jsx)("div", { className: n, children: a.children })
            : (0, e.jsx)(e.Fragment, { children: a.children });
        }
        var n_ = u(18657),
          yo = u.n(n_),
          s_ = u(63026);
        function i_(a) {
          const { clanAccountID: t, color: n, bgcolor: i } = a,
            [l, o] = S.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, j.A)(yo().BBCodeFollowButton, l && yo().isHovered),
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            children: (0, e.jsx)(s_.Q, {
              nCreatorAccountID: t,
              classOverride: es().FollowGameButtonNotTop,
              styleOverride: { color: n, backgroundColor: i },
              followType: "group",
            }),
          });
        }
        function o_(a) {
          const { event: t } = a.context,
            n =
              Number(a.args.groupid) ||
              (t == null ? void 0 : t.clanSteamID.GetAccountID());
          if (!n) return null;
          const i = (0, Ea.O)(a.args.color, "black"),
            l = (0, Ea.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(i_, { clanAccountID: n, color: i, bgcolor: l });
        }
        var l_ = u(83482),
          r_ = u(44267),
          d_ = u(9202),
          To = u.n(d_);
        function c_(a) {
          const { appid: t, color: n, bgcolor: i } = a,
            l = (0, wo.n9)(),
            o = (0, io.$5)(t),
            r = (0, l_.L3)(l);
          return (0, e.jsx)("div", {
            className: To().WishlistHoverCtn,
            children: (0, e.jsx)(r_.E, {
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
        function u_(a) {
          const t = Number(a.args.appid);
          if (!t) return null;
          const n = (0, Ea.O)(a.args.color, "black"),
            i = (0, Ea.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(c_, { appid: t, color: n, bgcolor: i });
        }
        let ns = null;
        function h_() {
          return (
            ns == null &&
              (ns = new Map([
                ["wishlist", { Constructor: u_, autocloses: !1 }],
                ["followgroup", { Constructor: o_, autocloses: !1 }],
                ["classname", { Constructor: a_, autocloses: !1 }],
                ["price", { Constructor: e_, autocloses: !1 }],
                ["pricesavings", { Constructor: t_, autocloses: !1 }],
                ["reservationbutton", { Constructor: Co, autocloses: !1 }],
              ])),
            ns
          );
        }
        var __ = u(37656),
          Bt = u(29868);
        function Io(a) {
          return a < 10 ? "0" + a : a;
        }
        function m_(a) {
          const { giveawayid: t } = a,
            n = (0, __.w)(t),
            {
              bLoadingGiveawayInfo: i,
              winner_count: l,
              closed: o,
              seconds_until_drawing: r,
            } = n;
          return i
            ? null
            : (0, e.jsxs)("div", {
                className: Bt.countdownCtn,
                children: [
                  !!o &&
                    (0, e.jsx)("div", {
                      className: Bt.Closed,
                      children:
                        l > 0
                          ? (0, s.we)("#Giveaway_Closed", (0, xt.D)(l))
                          : (0, s.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !o &&
                    (0, e.jsxs)(S.Fragment, {
                      children: [
                        r <= 0
                          ? (0, e.jsxs)("div", {
                              className: Bt.Throbber,
                              children: [
                                (0, e.jsx)(H.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, s.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Bt.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Bt.CountDownTime,
                                  children:
                                    Io(Math.floor(r / 60)) + ":" + Io(r % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Bt.CountDownText,
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
                            className: Bt.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Bt.WinnerCount,
                                children: (0, xt.D)(l),
                              }),
                              (0, e.jsx)("div", {
                                className: Bt.WinnerText,
                                children: (0, s.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var p_ = u(88245),
          v_ = u(35702),
          g_ = u(39256),
          S_ = u(4720),
          E_ = u(5613),
          f_ = u(57810),
          x_ = u(20122),
          Ao = u(81416);
        function b_(a) {
          const { eventModel: t, nEventBadgeID: n } = a,
            i = (0, v_.fy)(n);
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
                  return (0, e.jsx)(j_, {
                    eventModel: t,
                    nBadgeLevel: l,
                    nMaxLevel: d,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, xt.D)(l),
            });
          }
          return null;
        }
        function j_(a) {
          const { eventModel: t, nBadgeLevel: n, nMaxLevel: i } = a,
            l = S.useMemo(() => {
              const c = t
                .GetSaleSections()
                .filter((g) => g.section_type == "discoveryqueue");
              return (c == null ? void 0 : c.length) > 0 ? c[0] : null;
            }, [t]),
            { storePageFilter: o, eStoreDiscoveryQueueType: r } = S.useMemo(
              () => (0, E_.lx)(t, l),
              [t, l],
            ),
            d = (0, f_.Uf)(r, o),
            m = Math.min(n + d, i);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, xt.D)(m),
          });
        }
        function C_(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, Ze.j$)(a.args, "eventid"));
          return D.iA.logged_in && n
            ? (0, e.jsx)(b_, { nEventBadgeID: n, eventModel: t })
            : null;
        }
        function w_(a) {
          const { nDoorIndex: t, children: n } = a,
            i = (0, Xn.OM)(t),
            l = (0, Xn.gP)(),
            [o, r] = S.useState(!1),
            [d, m] = S.useState(!1),
            { elDialogElement: c, fnShowLogonDialog: g } = (0, Do.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.$n, {
                disabled: i,
                onClick: (_) => {
                  o ||
                    (D.iA.logged_in
                      ? (r(!0),
                        l({ iDoorIndex: t })
                          .then((v) => {
                            v || m(!0), r(!1);
                          })
                          .catch(() => {
                            m(!0), r(!1);
                          }))
                      : g());
                },
                children: d
                  ? (0, e.jsx)("div", {
                      children: (0, s.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!o && (0, e.jsx)(H.t, { size: "small" }),
                        !!i && (0, e.jsx)(yt.Jlk, {}),
                        n,
                      ],
                    }),
              }),
              c,
            ],
          });
        }
        function D_(a) {
          const t = Number.parseInt((0, Ze.j$)(a.args)) || 0;
          return t >= 0 && t < 32
            ? (0, e.jsx)(w_, { nDoorIndex: t, children: a.children })
            : null;
        }
        const y_ = (0, ke.y)(x_.H);
        function T_(a) {
          var t, n;
          const i = Number.parseInt((0, Ze.j$)(a.args)),
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
              return (0, e.jsx)(wt.Cs, {
                location: o ? wt.HY : wt.bs,
                children: (0, e.jsx)(y_, {
                  event: l,
                  section: l.jsondata.sale_sections[r],
                  activeTab: new S_.y(null, d),
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
                className: g_.ErrorDiv,
                children: ["Error could not find sale section ", i],
              });
          }
          return null;
        }
        let ss = null;
        function I_() {
          return (
            ss == null &&
              (ss = new Map([
                ...Array.from(h_().entries()),
                [
                  "itemdef",
                  {
                    Constructor: A_,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: $h, autocloses: !1 }],
                ["deckcompatcount", { Constructor: G_, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: L_, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: O_, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: N_, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: C_, autocloses: !1 }],
                ["optindoorquest", { Constructor: D_, autocloses: !1 }],
                ["localize", { Constructor: B_, autocloses: !1 }],
                ["salesection", { Constructor: T_, autocloses: !1 }],
                ["reservationbutton", { Constructor: R_, autocloses: !1 }],
              ])),
            ss
          );
        }
        function A_(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, Ze.j$)(a.args, "appid")),
            i = Number.parseInt((0, Ze.j$)(a.args, "itemdefid")),
            l = Number.parseInt((0, Ze.j$)(a.args, "maxquantity")),
            o = (0, Ze.j$)(a.args, "calltoaction");
          return !(0, p_.gS)(n, i, !1) || !t
            ? (0, e.jsx)(H.t, {
                size: "small",
                position: "center",
                string: (0, s.we)("#Loading"),
              })
            : (0, e.jsx)(Hh.f, {
                language: a.language,
                clanAccountID: t.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: n, nItemDefID: i, max_quantity: l },
                strCallToAction: o,
              });
        }
        function G_(a) {
          const t = Ph();
          if (!t) return (0, e.jsx)(H.t, { size: "small" });
          const n = Number.parseInt((0, Ze.j$)(a.args));
          return (0, e.jsx)("span", { children: (0, xt.D)(Number(Rh(t, n))) });
        }
        function L_(a) {
          var t, n, i, l;
          const o = (0, kh.jR)(D.iA.accountid, "library");
          if (!o) return (0, e.jsx)(H.t, { size: "small" });
          const r = Number.parseInt((0, Ze.j$)(a.args));
          let d = ((t = o.verifiedList) == null ? void 0 : t.length) || 0;
          switch (r) {
            case Ua.sd:
              d = ((n = o.playableList) == null ? void 0 : n.length) || 0;
              break;
            case Ua.V8:
              d = ((i = o.unsupportedList) == null ? void 0 : i.length) || 0;
              break;
            case Ua.YX:
              d = ((l = o.unknownList) == null ? void 0 : l.length) || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, xt.D)(Number(d)) });
        }
        function N_(a) {
          const t = Number.parseInt((0, Ze.j$)(a.args)),
            n =
              "hide" in a.args && !!Number.parseInt((0, Ze.j$)(a.args, "hide"));
          return t >= 0
            ? (0, e.jsx)(M_, { nDoorIndex: t, bHide: n, children: a.children })
            : null;
        }
        function M_(a) {
          const { nDoorIndex: t, bHide: n, children: i } = a,
            l = (0, Xn.OM)(t);
          return l == null
            ? null
            : (l && !n) || (!l && n)
              ? (0, e.jsx)(e.Fragment, { children: a.children })
              : null;
        }
        function B_(a) {
          return (0, e.jsx)("span", {
            className: zh.LocalizeBlock,
            children: (0, s.oW)(
              a.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function O_(a) {
          let t = (0, Ze.j$)(a.args);
          return t
            ? (0, e.jsx)(m_, { giveawayid: t })
            : (0, e.jsx)(S.Fragment, {});
        }
        const P_ = void 0;
        function R_(a) {
          return (0, e.jsx)(Co, { ...a, PreviewActions: P_ });
        }
        var k_ = u(93464),
          F_ = u(10303),
          Pm = u(83492),
          U_ = u(90783),
          z_ = u(39567),
          H_ = Object.defineProperty,
          V_ = Object.getOwnPropertyDescriptor,
          W_ = (a, t, n, i) => {
            for (
              var l = i > 1 ? void 0 : i ? V_(t, n) : t, o = a.length - 1, r;
              o >= 0;
              o--
            )
              (r = a[o]) && (l = (i ? r(t, n, l) : r(l)) || l);
            return i && l && H_(t, n, l), l;
          };
        let is = class extends vn.mn {
          constructor() {
            super(...arguments), (this.state = { bLoading: !0 });
          }
          GetRedirectRender() {
            return (0, e.jsx)(ke.rd, {
              push: !0,
              to: se.GY.Edit(
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
                  appid: bt.UF.APPID,
                  appid_or_vanity_str:
                    this.props.match.params.appid_or_vanity_str,
                  gid: "",
                  clanSteamID: this.m_clanSteamID,
                });
          }
        };
        is = W_([R.PA], is);
        const Q_ = (0, Ya.L)(Y_);
        function Y_(a) {
          const t = M.mh.GetEditModel(),
            n = t.GetEventModel(),
            [i, l] = S.useState();
          if ((S.useEffect(() => oi(n, l), [n]), i))
            switch (i) {
              case "clone":
                return (0, e.jsx)(ke.rd, {
                  push: !0,
                  to: se.GY.Edit(a.match.params.appid_or_vanity_str, ""),
                });
              case "edit":
                return (0, e.jsx)(ce.OG, {
                  eventModel: n,
                  route: ce.PH.k_eCommunityEdit,
                });
              case "view":
                return n.BIsVisibleEvent()
                  ? (0, e.jsx)(ce.OG, { eventModel: n, route: ce.PH.k_eView })
                  : (0, e.jsx)(ce.OG, {
                      eventModel: n,
                      route: ce.PH.k_eCommunityPreview,
                    });
              default:
                console.log(
                  "EventCloneLandingInternal - Unexpected Case - " + i,
                );
            }
          return (0, e.jsx)(ce.tj, {
            eventModel: t.GetEventModel(),
            route: ce.PH.k_eCommunityAdminPage,
            children: (0, s.we)("#EventDisplay_ReturnToDashboard"),
          });
        }
        function J_(a) {
          const [t, n] = S.useState(!0),
            i = (0, z_.vb)(D.TS.LANGUAGE);
          return (
            S.useEffect(() => {
              Gh.Vw.Init(new Ah.D(D.TS.WEBAPI_BASE_URL)),
                _e.O3.Init(),
                M.mh.Init(),
                n(!1);
            }, []),
            t || !i
              ? (0, e.jsx)(H.t, {
                  position: "center",
                  size: "medium",
                  string: (0, s.we)("#Loading"),
                })
              : (0, e.jsx)(je.tH, {
                  children: (0, e.jsx)(k_.d3, {
                    dictionary: I_(),
                    children: (0, e.jsxs)(F_.I.Provider, {
                      value: { bCanUseLink: !0 },
                      children: [
                        (0, e.jsx)(Qt.EB, {}),
                        (0, e.jsxs)(ke.dO, {
                          children: [
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.Home(":appid_or_vanity_str"),
                              component: ci,
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.List(":appid_or_vanity_str"),
                              component: ci,
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.Create(":appid_or_vanity_str"),
                              component: we.A9,
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.Category(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, S.createElement)(we.A9, {
                                  ...l,
                                  key: l.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.EditRedirectToCategory(
                                ":appid_or_vanity_str",
                              ),
                              render: (l) => (0, e.jsx)(yh, { ...l }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.Edit(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, S.createElement)(qn, {
                                  ...l,
                                  key: l.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.Clone(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, S.createElement)(Q_, {
                                  ...l,
                                  key: l.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.Publish(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, S.createElement)(qn, {
                                  ...l,
                                  key: l.match.params.gid,
                                  bInitiatePublishDialog: !0,
                                }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.PreviewSale(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, S.createElement)(In, {
                                  ...l,
                                  key: l.match.params.gid,
                                  mode: "previewsale",
                                }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.Preview(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (l) =>
                                (0, S.createElement)(In, {
                                  ...l,
                                  key: l.match.params.gid,
                                  mode: "preview",
                                }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.View(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)",
                              ),
                              render: (l) =>
                                (0, S.createElement)(In, {
                                  ...l,
                                  key: l.match.params.gid,
                                  mode: "view",
                                }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.Migrate(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (l) =>
                                (0, S.createElement)(is, {
                                  ...l,
                                  key: l.match.params.oldAnnouncementGID,
                                }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.MigrateCategory(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (l) =>
                                (0, S.createElement)(vn.pl, {
                                  ...l,
                                  key: l.match.params.oldAnnouncementGID,
                                }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.ViewOldAnnouncement(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (l) =>
                                (0, S.createElement)(vn.Io, {
                                  ...l,
                                  key: l.match.params.oldAnnouncementGID,
                                  bClearDirty: !0,
                                  bPreview: !1,
                                }),
                            }),
                            (0, e.jsx)(ke.qh, {
                              exact: !0,
                              path: se.GY.PreviewOldAnnouncement(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (l) =>
                                (0, S.createElement)(vn.Io, {
                                  ...l,
                                  key: l.match.params.oldAnnouncementGID,
                                  bClearDirty: !0,
                                  bPreview: !0,
                                }),
                            }),
                            (0, e.jsx)(ke.qh, { component: U_.a }),
                          ],
                        }),
                      ],
                    }),
                  }),
                })
          );
        }
      },
      6864: (Y, Ye, u) => {
        "use strict";
        u.d(Ye, { p: () => p, s: () => ae });
        var e = u(7850),
          S = u(90626),
          se = u(19316),
          M = u(95695),
          we = u.n(M),
          G = u(85143),
          ge = u(11243),
          oe = u(18210),
          R = u(91126),
          pe = u.n(R),
          ee = u(56585),
          V = u(99412),
          X = u(35766),
          k = u(85599),
          J = u(36118);
        function ae(ue) {
          var W, f;
          const { editModel: s } = ue,
            [Pe, D] = S.useState(V.xPp),
            [U, L] = S.useState(!1),
            [K, _e] = S.useState(null),
            Se = (qe) => {
              const he = qe.target.value;
              if (he === "all") D(V.xPp);
              else {
                const A = (0, V.sfN)(he);
                D(A);
              }
            },
            Ae = s.GetClanSteamID(),
            F = s.GetGID(),
            H = (0, ee.Wj)(Ae, F),
            [, Ue] = S.useReducer((qe) => qe + 1, 0),
            Le =
              H.isSuccess &&
              (W = H.data) != null &&
              W.crowdin_project_id &&
              (f = H.data) != null &&
              f.crowdin_file_id
                ? `https://valve.crowdin.com/editor/${H.data.crowdin_project_id}/${H.data.crowdin_file_id}`
                : null,
            Re = (qe) => {
              s.SetPushSourceToCrowdInAutomatically(qe), Ue();
            },
            Je = (0, ee.IW)(Ae.ConvertTo64BitString(), F, Pe),
            ot = () => {
              L(!0),
                Je.mutateAsync()
                  .then(() => window.location.reload())
                  .catch((qe) => {
                    _e(qe.toString()), L(!1);
                  })
                  .then(() => {
                    _e(null);
                  });
            };
          return H.isLoading
            ? null
            : (0, e.jsxs)(G.Eb, {
                clanSteamID: ue.editModel.GetClanSteamID(),
                children: [
                  (0, e.jsx)(X.mt, {
                    active: U,
                    children: (0, e.jsx)(k.t, {}),
                  }),
                  (0, e.jsxs)("div", {
                    className: pe().ValveCrowdInSyncCtn,
                    children: [
                      (0, e.jsx)(se.J0, {
                        value: s.BPushUpdatesToCrowdInAutomatically(),
                        onChange: Re,
                      }),
                      (0, e.jsxs)("div", {
                        className: pe().ValveCrowdInSyncLabel,
                        children: [
                          (0, oe.we)(
                            "#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn",
                          ),
                          "\xA0(",
                          Le
                            ? (0, e.jsx)("a", { href: Le, children: Le })
                            : (0, oe.we)(
                                "#EventEditor_Localization_NotMappedToCrowdIn",
                              ),
                          ")",
                          (0, e.jsx)(ge.o, {
                            tooltip: (0, oe.we)(
                              "#EventEditor_Localization_Tooltip",
                            ),
                            className: M.tooltip_Ctn,
                          }),
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)("span", {
                            children: (0, oe.we)(
                              "#EventEditor_Localization_RememberToSave",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)(p, { onChange: Se }),
                      (0, e.jsx)("div", {
                        className: we().EditPreviewButton,
                        onClick: ot,
                        children: (0, oe.we)(
                          "#EventEditor_Localization_FetchLocalization",
                        ),
                      }),
                    ],
                  }),
                  K &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("div", {
                        className: pe().SyncPanelError,
                        children: [(0, e.jsx)(J.X, {}), " ", K],
                      }),
                    }),
                ],
              });
        }
        function p(ue) {
          const W = (0, oe.O9)(!1);
          let f = Array.from(W.entries());
          f.sort((Pe, D) => Pe[1].localeCompare(D[1]));
          const s = f.map(([Pe, D]) =>
            Pe !== "english"
              ? (0, e.jsx)("option", { value: Pe, children: D }, Pe)
              : "",
          );
          return (0, e.jsxs)("select", {
            onChange: ue.onChange,
            children: [
              (0, e.jsx)("option", {
                value: "all",
                children: (0, oe.we)("#EventEditor_Localization_AllLanguages"),
              }),
              s,
            ],
          });
        }
      },
      24118: (Y, Ye, u) => {
        "use strict";
        u.d(Ye, { V: () => V });
        var e = u(7850),
          S = u(19298),
          se = u(90626),
          M = u(14256),
          we = u.n(M),
          G = u(95695),
          ge = u.n(G),
          oe = u(71421),
          R = u(36707),
          pe = u(18210),
          ee = u(96715);
        function V(X) {
          const { eventLink: k, labelOverride: J } = X,
            ae = se.useRef(null),
            [p, ue] = se.useState(""),
            W = () => {
              var f;
              const s =
                (f = ae.current) == null ? void 0 : f.ownerDocument.defaultView;
              !ae.current ||
                !s ||
                s.navigator.clipboard
                  .writeText(ae.current.value)
                  .then(() =>
                    ue((0, pe.we)("#EventDisplay_Share_CopiedToClipboard")),
                  )
                  .catch((Pe) => {
                    ue(
                      (0, pe.we)("#EventDisplay_Share_FailedToCopyToClipboard"),
                    ),
                      console.error("Failed to copy link to clipboard:", Pe);
                  });
            };
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: (0, R.A)(ge().FlexRowContainer, we().linkField),
                children: [
                  (0, e.jsx)("span", {
                    className: we().LinkInputLabel,
                    children: (0, pe.we)(
                      J != null ? J : "#EventDisplay_Share_Link",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    className: we().LinkInput,
                    ref: ae,
                    value: k,
                    readOnly: !0,
                    onClick: W,
                  }),
                  (0, e.jsx)(S.Z, {
                    className: (0, R.A)(
                      ge().Button,
                      ge().Icon,
                      we().LinkButton,
                    ),
                    onActivate: W,
                    children: (0, e.jsx)(oe.Gq, {
                      toolTipContent: (0, pe.we)(
                        "#ToolTip_CopyLinkToClipboard",
                      ),
                      children: (0, e.jsx)("img", {
                        className: we().ClipboardIcon,
                        src: ee.A,
                        alt: (0, pe.we)("#ToolTip_CopyLinkToClipboard"),
                      }),
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("div", { className: we().ClipboardText, children: p }),
            ],
          });
        }
      },
      37656: (Y, Ye, u) => {
        "use strict";
        u.d(Ye, { w: () => D });
        var e = u(41735),
          S = u.n(e),
          se = u(14947),
          M = u(65946),
          we = u(90626),
          G = u(27066),
          ge = u(8323),
          oe = u(54963),
          R = u(3166),
          pe = Object.defineProperty,
          ee = Object.getOwnPropertyDescriptor,
          V = (U, L, K) =>
            L in U
              ? pe(U, L, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: K,
                })
              : (U[L] = K),
          X = (U, L, K, _e) => {
            for (
              var Se = _e > 1 ? void 0 : _e ? ee(L, K) : L,
                Ae = U.length - 1,
                F;
              Ae >= 0;
              Ae--
            )
              (F = U[Ae]) && (Se = (_e ? F(L, K, Se) : F(Se)) || Se);
            return _e && Se && pe(L, K, Se), Se;
          },
          k = (U, L, K) => V(U, typeof L != "symbol" ? L + "" : L, K);
        const J = class Go {
          constructor() {
            k(this, "giveaway_id"),
              k(this, "seconds_until_drawing"),
              k(this, "rtime_start"),
              k(this, "rtime_end"),
              k(this, "closed"),
              k(this, "winner_count"),
              (0, se.Gn)(this);
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
            const L = new Go();
            return (
              (L.giveaway_id = this.giveaway_id),
              (L.seconds_until_drawing = this.seconds_until_drawing),
              (L.rtime_start = this.rtime_start),
              (L.rtime_end = this.rtime_end),
              (L.closed = this.closed),
              (L.winner_count = this.winner_count),
              L
            );
          }
        };
        X([se.sH], J.prototype, "giveaway_id", 2),
          X([se.sH], J.prototype, "seconds_until_drawing", 2),
          X([se.sH], J.prototype, "rtime_start", 2),
          X([se.sH], J.prototype, "rtime_end", 2),
          X([se.sH], J.prototype, "closed", 2),
          X([se.sH], J.prototype, "winner_count", 2);
        let ae = J;
        const p = class fa {
          constructor() {
            k(this, "m_mapGiveawayIDToNextDrawInfo", new Map()),
              k(this, "m_mapGiveawayIDAndInstanceToNextDrawInfo", new Map()),
              k(this, "m_bLoadedFromConfig", !1),
              k(this, "m_mapNextDrawChangeCallback", new Map()),
              (0, se.Gn)(this);
          }
          GetKey(L, K) {
            return L + "_" + K;
          }
          GetInfoByInstance(L, K) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(L, K),
            );
          }
          GetNextDrawChangeCallback(L) {
            return (
              this.m_mapNextDrawChangeCallback.has(L) ||
                this.m_mapNextDrawChangeCallback.set(L, new ge.lu()),
              this.m_mapNextDrawChangeCallback.get(L)
            );
          }
          CopyToGiveaway(L, K) {
            K.closed != L.closed && (K.closed = L.closed),
              K.giveaway_id != L.giveaway_id && (K.giveaway_id = L.giveaway_id),
              K.rtime_start != L.rtime_start && (K.rtime_start = L.rtime_start),
              K.rtime_end != L.rtime_end && (K.rtime_end = L.rtime_end),
              K.winner_count != L.winner_count &&
                (K.winner_count = L.winner_count),
              K.seconds_until_drawing != L.seconds_until_drawing &&
                (K.seconds_until_drawing = L.seconds_until_drawing);
          }
          async ReloadGiveaway(L, K) {
            if (!L) return null;
            let _e = R.TS.STORE_BASE_URL + "prizes/nextdraw/" + L,
              Se = null,
              Ae = { origin: self.origin };
            return (
              (Se = await S().get(_e, { params: Ae })),
              (0, se.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(L) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(L, new ae()),
                  this.CopyToGiveaway(
                    Se.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(L),
                  ),
                  K !== void 0)
                ) {
                  const F = this.GetKey(L, K);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(F) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      F,
                      new ae(),
                    ),
                    this.CopyToGiveaway(
                      Se.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(F),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(L).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(L),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(L)
            );
          }
          static Get() {
            return (
              fa.s_Singleton ||
                ((fa.s_Singleton = new fa()), fa.s_Singleton.Init()),
              fa.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let L = (0, R.Tc)("giveawaynextdraw", "application_config");
              if (L && L.giveaway_id) {
                let K = new ae();
                this.CopyToGiveaway(L, K),
                  this.m_mapGiveawayIDToNextDrawInfo.set(L.giveaway_id, K);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        k(p, "s_Singleton"),
          X([se.sH], p.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          X([se.XI], p.prototype, "CopyToGiveaway", 1);
        let ue = p;
        const W = class os {
          constructor() {
            k(this, "m_intervalID"),
              k(this, "m_intervalCountDownID"),
              k(this, "m_myInstanceNumber", 0),
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
          SetupRefreshDataInterval(L, K) {
            if ((this.ClearRefreshInterval(), !L.closed)) {
              let _e =
                L.seconds_until_drawing <= 0 && L.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(K, _e);
            }
          }
          SetupCountDown(L, K) {
            L > 0 && (this.m_intervalCountDownID = window.setInterval(K, 1e3));
          }
        };
        k(W, "s_GlobalInstance", 0),
          X([G.o], W.prototype, "ClearRefreshInterval", 1),
          X([G.o], W.prototype, "ClearCountDown", 1),
          X([G.o], W.prototype, "SetupRefreshDataInterval", 1),
          X([G.o], W.prototype, "SetupCountDown", 1);
        let f = W;
        function s(U, L) {
          const K = ue.Get().GetInfoByInstance(U, L.m_myInstanceNumber);
          (K.seconds_until_drawing -= 1),
            K.seconds_until_drawing == 0 && L.ClearCountDown();
        }
        function Pe(U, L) {
          const K = ue.Get().GetInfoByInstance(U, L.m_myInstanceNumber);
          K &&
            K.BIsValid() &&
            K.seconds_until_drawing <= 0 &&
            !K.closed &&
            (L.ClearCountDown(),
            ue
              .Get()
              .ReloadGiveaway(U, L.m_myInstanceNumber)
              .then((_e) => {
                L.SetupCountDown(_e.seconds_until_drawing, () => s(U, L));
              }));
        }
        function D(U) {
          const [L] = (0, we.useState)(new f()),
            K = (0, oe.CH)();
          (0, we.useEffect)(
            () => (
              ue
                .Get()
                .ReloadGiveaway(U, L.m_myInstanceNumber)
                .then((H) => {
                  L.SetupRefreshDataInterval(H, () => Pe(U, L)),
                    L.SetupCountDown(H.seconds_until_drawing, () => s(U, L)),
                    K();
                }),
              () => {
                L.ClearRefreshInterval(), L.ClearCountDown();
              }
            ),
            [L, U, K],
          );
          const _e = ue.Get().GetInfoByInstance(U, L.m_myInstanceNumber),
            [Se, Ae, F] = (0, M.q3)(() => [
              _e == null ? void 0 : _e.winner_count,
              _e == null ? void 0 : _e.closed,
              _e == null ? void 0 : _e.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !_e || _e.giveaway_id == null || !_e.BStarted() || Se === void 0,
            winner_count: Se,
            closed: Ae,
            seconds_until_drawing: F,
          };
        }
      },
      1885: (Y, Ye, u) => {
        "use strict";
        u.d(Ye, { jl: () => ot, Bv: () => Je });
        var e = u(7850),
          S = u(90626),
          se = u(54963),
          M = u(41735),
          we = u.n(M),
          G = u(19316),
          ge = u(18210),
          oe = u(91640),
          R = u.n(oe),
          pe = u(3166),
          ee = u(76559),
          V = u(82734),
          X = u(14947),
          k = u(35413),
          J = u(71742),
          ae = u(34592),
          p = Object.defineProperty,
          ue = Object.getOwnPropertyDescriptor,
          W = (he, A, Q) =>
            A in he
              ? p(he, A, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: Q,
                })
              : (he[A] = Q),
          f = (he, A, Q, $) => {
            for (
              var Oe = $ > 1 ? void 0 : $ ? ue(A, Q) : A,
                Ke = he.length - 1,
                tt;
              Ke >= 0;
              Ke--
            )
              (tt = he[Ke]) && (Oe = ($ ? tt(A, Q, Oe) : tt(Oe)) || Oe);
            return $ && Oe && p(A, Q, Oe), Oe;
          },
          s = (he, A, Q) => W(he, typeof A != "symbol" ? A + "" : A, Q);
        class Pe {
          constructor() {
            s(this, "m_mapProfiles", new Map()),
              s(this, "m_mapProfilesLoading", new Map()),
              (0, X.Gn)(this);
          }
          async LoadProfiles(A, Q) {
            (0, J.wT)(
              A.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let $ = A.filter(
              (ze) =>
                !this.m_mapProfiles.has(ze) &&
                !this.m_mapProfilesLoading.has(ze),
            );
            if ($.length == 0) return this.m_mapProfilesLoading.get(A[0]);
            let Oe = pe.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              Ke = we().get(Oe, {
                params: { steamids: $.join(",") },
                withCredentials: !0,
                cancelToken: Q == null ? void 0 : Q.token,
              });
            $.forEach((ze) => this.m_mapProfilesLoading.set(ze, Ke));
            let tt = await Ke;
            tt.data &&
              tt.status == 200 &&
              tt.data.forEach((ze) => {
                (ze.avatar_hash = ze.avatar_url),
                  (ze.avatar_url_medium = (0, k.t)(ze.avatar_url, "medium")),
                  (ze.avatar_url_full = (0, k.t)(ze.avatar_url, "full")),
                  (ze.avatar_url = (0, k.t)(ze.avatar_url)),
                  this.m_mapProfiles.set(ze.steamid, ze),
                  this.m_mapProfilesLoading.delete(ze.steamid);
              });
          }
          GetProfile(A) {
            return this.m_mapProfiles.get(A);
          }
          GetProfileByAccountID(A) {
            return this.m_mapProfiles.get(
              ee.b.InitFromAccountID(A).ConvertTo64BitString(),
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
              ee.b.InitFromAccountID(A).ConvertTo64BitString(),
            );
          }
          BHasProfileBySteamID(A) {
            return this.m_mapProfiles.has(A.ConvertTo64BitString());
          }
          BHasAllProfilesBySteamID(A) {
            return !A.some((Q) => !this.BHasProfileBySteamID(Q));
          }
          GetProfileURLBySteamID(A) {
            const Q = this.GetProfileBySteamID(A);
            return Q && Q.profile_url
              ? pe.TS.COMMUNITY_BASE_URL + "id/" + Q.profile_url
              : pe.TS.COMMUNITY_BASE_URL +
                  "profiles/" +
                  A.ConvertTo64BitString();
          }
          GetPersonaNameBySteamID(A) {
            const Q = this.GetProfileBySteamID(A);
            return Q && Q.persona_name ? Q.persona_name : "";
          }
        }
        f([X.sH], Pe.prototype, "m_mapProfiles", 2);
        const D = new Pe();
        function U(he) {
          const A = React.useMemo(
              () =>
                he ? (typeof he == "string" ? new CSteamID(he) : he) : null,
              [he],
            ),
            [Q, $] = useState(!!A && !D.BHasProfileBySteamID(A));
          useEffect(() => {
            const Ke = axios.CancelToken.source();
            return (
              A &&
                !D.BHasProfileBySteamID(A) &&
                D.LoadProfiles([A.ConvertTo64BitString()])
                  .catch((tt) => {
                    const ze = GetMsgAndErrorCodeFromResponse(tt);
                    console.error(
                      "useUserProfile failed to load profile for " +
                        A.ConvertTo64BitString() +
                        ": " +
                        ze.strErrorMsg,
                      ze,
                    );
                  })
                  .finally(() => {
                    Ke.token.reason || $(!1);
                  }),
              () => Ke.cancel("unmounting useUserProfile")
            );
          }, [he]);
          const Oe = !!A && D.GetProfileBySteamID(A);
          return [Q, Oe];
        }
        function L(he) {
          const A = React.useMemo(
            () => (he ? CSteamID.InitFromAccountID(he) : null),
            [he],
          );
          return U(A);
        }
        var K = u(72604),
          _e = u(36118),
          Se = u(41301),
          Ae = u(24660),
          F = Object.defineProperty,
          H = Object.getOwnPropertyDescriptor,
          Ue = (he, A, Q) =>
            A in he
              ? F(he, A, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: Q,
                })
              : (he[A] = Q),
          Le = (he, A, Q, $) => {
            for (
              var Oe = $ > 1 ? void 0 : $ ? H(A, Q) : A, Ke = he.length - 1, tt;
              Ke >= 0;
              Ke--
            )
              (tt = he[Ke]) && (Oe = ($ ? tt(A, Q, Oe) : tt(Oe)) || Oe);
            return $ && Oe && F(A, Q, Oe), Oe;
          },
          Re = (he, A, Q) => Ue(he, typeof A != "symbol" ? A + "" : A, Q);
        class Je extends S.Component {
          constructor() {
            super(...arguments),
              Re(this, "state", {
                invite_token: "",
                input_search: "",
                friend_code_copied: !1,
                invite_copied: !1,
              });
          }
          async componentDidMount() {
            const A = await we().get(
              pe.TS.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: (0, pe.KC)() } },
            );
            if (A && A.data && A.data.tokens) {
              const Q = A.data.tokens.filter(($) => $.valid);
              Q.length
                ? this.setState({ invite_token: Q[0].invite_token })
                : this.OnCreateInviteLink();
            } else this.OnCreateInviteLink();
          }
          async OnCreateInviteLink() {
            const A = new FormData();
            A.append("sessionid", (0, pe.KC)()),
              A.append("steamid_user", pe.iA.steamid),
              A.append("duration", (720 * 60 * 60).toString());
            const Q = await we().post(
              pe.TS.COMMUNITY_BASE_URL + "invites/ajaxcreate",
              A,
            );
            Q &&
              Q.data &&
              Q.data.invite &&
              this.setState({ invite_token: Q.data.invite.invite_token });
          }
          OnCopy(A, Q) {
            A === "friend_code" &&
              (this.setState({ friend_code_copied: !0 }),
              setTimeout(() => this.setState({ friend_code_copied: !1 }), 1e3)),
              A === "invite" &&
                (this.setState({ invite_copied: !0 }),
                setTimeout(() => this.setState({ invite_copied: !1 }), 1e3)),
              (0, V.OG)(Q);
          }
          async OnAddFriend(A) {
            const Q = new FormData();
            Q.append("sessionID", (0, pe.KC)()),
              Q.append("steamid", A),
              Q.append("accept_invite", "0");
            try {
              const $ = await we().post(
                pe.TS.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                Q,
              );
              return $ && $.data && $.data.success == K.R;
            } catch {
              return !1;
            }
          }
          OnSearchChange(A) {
            this.setState({ input_search: A.target.value });
          }
          OnSearchKeyDown(A) {
            A.keyCode === Se.wd && this.OnSearchSubmit();
          }
          OnSearchSubmit() {
            window.open(
              pe.TS.COMMUNITY_BASE_URL +
                "search/users/#text=" +
                encodeURIComponent(this.state.input_search),
              "_self",
            );
          }
          render() {
            const A = pe.iA.short_url + "/" + this.state.invite_token;
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
                          children: pe.iA.accountid,
                        }),
                        (0, e.jsx)(G.jn, {
                          autoFocus: !0,
                          className: R().Button,
                          onClick: () =>
                            this.OnCopy("friend_code", String(pe.iA.accountid)),
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
                    (0, e.jsx)(ot, {
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
                        (0, e.jsx)(G.jn, {
                          className: R().Button,
                          onClick: () => this.OnCopy("invite", A),
                          children: this.state.invite_copied
                            ? (0, ge.we)("#ManageFriends_Copied")
                            : (0, ge.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, e.jsx)(G.$n, {
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
                          children: (0, e.jsx)(G.pd, {
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
                          children: (0, e.jsx)(_e.eSy, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        Le([se.oI], Je.prototype, "OnCreateInviteLink", 1),
          Le([se.oI], Je.prototype, "OnCopy", 1),
          Le([se.oI], Je.prototype, "OnAddFriend", 1),
          Le([se.oI], Je.prototype, "OnSearchChange", 1),
          Le([se.oI], Je.prototype, "OnSearchKeyDown", 1),
          Le([se.oI], Je.prototype, "OnSearchSubmit", 1);
        class ot extends S.Component {
          constructor() {
            super(...arguments),
              Re(this, "state", {
                input_friend_code: "",
                disable_send_invite: !1,
                searchResult: null,
                invite_status: "pending",
              }),
              Re(this, "m_currentRequest", 0);
          }
          async OnFriendCodeChange(A) {
            const Q = A.target.value.split(",")[0];
            this.setState({ input_friend_code: Q, invite_status: "pending" }),
              window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(
                () => this.LoadProfile(Q),
                500,
              ));
          }
          async LoadProfile(A) {
            if (A) {
              const Q = ee.b.InitFromAccountID(Number(A));
              await D.LoadProfiles([Q.ConvertTo64BitString()]);
              const $ = D.GetProfile(Q.ConvertTo64BitString());
              $
                ? this.setState({
                    searchResult: $,
                    disable_send_invite:
                      pe.iA.is_limited ||
                      (this.props.bDisableForFriends && $.is_friend) ||
                      (this.props.bDisableForSelf &&
                        $.steamid === pe.iA.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          }
          async OnActionClick(A) {
            const Q = new FormData();
            Q.append("sessionID", (0, pe.KC)()),
              Q.append("steamid", A),
              Q.append("accept_invite", "0"),
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
                (0, e.jsx)(G.pd, {
                  className: R().Input,
                  value: this.state.input_friend_code,
                  onChange: this.OnFriendCodeChange,
                  placeholder: (0, ge.we)(
                    "#ManageFriends_EnterFriendCodePlaceholder",
                  ),
                }),
                (0, e.jsx)(qe, {
                  searchResult: this.state.searchResult,
                  invite_status: this.state.invite_status,
                  bShowStatus: this.props.bShowStatus,
                  children: (0, e.jsx)(G.jn, {
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
        Le([se.oI], ot.prototype, "OnFriendCodeChange", 1),
          Le([se.oI], ot.prototype, "LoadProfile", 1),
          Le([se.oI], ot.prototype, "OnActionClick", 1);
        const qe = (he) => {
          const {
              searchResult: A,
              invite_status: Q,
              bShowStatus: $,
              children: Oe,
            } = he,
            Ke = (0, pe.Qn)();
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
                              (0, e.jsx)(Ae.Ii, {
                                target: Ke ? void 0 : "_blank",
                                href:
                                  pe.TS.COMMUNITY_BASE_URL +
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
                      Oe,
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
                          children: (0, e.jsx)(Ae.Ii, {
                            target: Ke ? void 0 : "_blank",
                            href:
                              pe.TS.COMMUNITY_BASE_URL +
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
                      $ &&
                        Q === "failure" &&
                        (0, e.jsx)("div", {
                          className: R().Failure,
                          children: (0, ge.we)("#ManageFriends_InviteFailure"),
                        }),
                      $ &&
                        Q === "success" &&
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
      26251: (Y, Ye, u) => {
        "use strict";
        u.d(Ye, { Yg: () => s, t3: () => Pe });
        var e = u(7850),
          S = u(40323),
          se = u.n(S),
          M = u(90626),
          we = u(99412),
          G = u(32093),
          ge = u(38410),
          oe = u(19316),
          R = u(95695),
          pe = u.n(R),
          ee = u(2801),
          V = u(88003),
          X = u(85599),
          k = u(34592),
          J = u(36707),
          ae = u(18210),
          p = u(20398),
          ue = u(71421),
          W = u(96471),
          f = u.n(W);
        const s = (U) => {
            const L = (K, _e) => {
              K.preventDefault();
              const {
                  fnGetLocData: Se,
                  closeModal: Ae,
                  strFileNamePrefix: F,
                  lang: H,
                } = U,
                Ue = Se(),
                Le = new p.s();
              let Re = F ? F + "_localization" : "localization";
              switch (_e) {
                case "csv_row":
                  Le.WriteLocalizationData_CSV_LanguageRows(Ue, Re + ".csv");
                  break;
                case "csv_column":
                  Le.WriteLocalizationData_CSV_LanguageColumns(Ue, Re + ".csv");
                  break;
                case "csv_token":
                  Le.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                    Ue,
                    Re + ".csv",
                  );
                  break;
                case "xml":
                  Le.WriteLocalizationData_XML_SingleLanguage(
                    Ue,
                    H,
                    Re + "_" + (0, we.x6o)((0, we.LgB)(H)) + ".xml",
                  );
                  break;
              }
              Ae && Ae();
            };
            return (0, e.jsxs)(e.Fragment, {
              children: [
                !!U.bShowCSV &&
                  (0, e.jsxs)(M.Fragment, {
                    children: [
                      (0, e.jsx)(oe.jn, {
                        onClick: (K) => L(K, "csv_row"),
                        children: (0, ae.we)(
                          "#Localization_Export_Btn_RowLanguages",
                        ),
                      }),
                      (0, e.jsx)(oe.jn, {
                        onClick: (K) => L(K, "csv_column"),
                        children: (0, ae.we)(
                          "#Localization_Export_Btn_ColumnLanguages",
                        ),
                      }),
                      (0, e.jsx)(oe.jn, {
                        onClick: (K) => L(K, "csv_token"),
                        children: (0, ae.we)(
                          "#Localization_Export_Btn_TokenLanguages",
                        ),
                      }),
                    ],
                  }),
                !!U.bShowXML &&
                  (0, e.jsx)(oe.jn, {
                    onClick: (K) => L(K, "xml"),
                    children: (0, ae.we)("#Localization_Export_Btn_XML"),
                  }),
              ],
            });
          },
          Pe = (U) => {
            const [L, K] = (0, M.useState)(!1),
              _e = (F, H) => {
                K(!1),
                  console.log(
                    "ImportLocalizationAction: On Handle Parse error: " +
                      F.message,
                    F,
                  ),
                  (0, V.pg)(
                    (0, e.jsx)(ee.KG, {
                      children: (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, ae.we)("#Localization_Error_Input"),
                          }),
                          (0, e.jsx)("p", { children: F.message }),
                        ],
                      }),
                    }),
                    window,
                  );
              },
              Se = (F) => {
                K(!1);
                let H = "";
                F.forEach((Ue) => {
                  H.length > 0 && (H += ", "),
                    (H += (0, ae.we)("#Language_" + (0, we.LgB)(Ue)));
                }),
                  (0, V.pg)(
                    (0, e.jsx)(ee.o0, {
                      strTitle: (0, ae.we)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                      children: (0, e.jsx)("div", {
                        children:
                          H.length == 0
                            ? (0, ae.we)(
                                "#Localization_Success_ImportComplete_NoChange",
                              )
                            : (0, ae.we)(
                                "#Localization_Success_ImportComplete",
                                H,
                              ),
                      }),
                    }),
                    window,
                  );
              },
              Ae = async (F) => {
                let H = F.target.files;
                if (H && H.length > 0) {
                  K(!0);
                  let Ue = new Array(),
                    Le = new p.s();
                  for (let Re = 0; Re < H.length; ++Re)
                    if (H[Re])
                      if (H[Re].name.toLocaleLowerCase().endsWith(".csv")) {
                        se().parse(H[0], {
                          header: !0,
                          complete: (Je) => {
                            let qe = new p.s().DetectAndFormatCSV(Je);
                            if (!qe) {
                              _e({
                                code: "",
                                message: "",
                                row: 0,
                                type: "filenameerror",
                              });
                              return;
                            }
                            const he = ae.A0.GetLanguageListForRealms([
                                G.TU.k_ESteamRealmGlobal,
                              ]),
                              A = U.fnOnImportLocData(qe, he);
                            Se(A);
                          },
                          error: _e,
                        });
                        return;
                      } else if (
                        H[Re].name.toLocaleLowerCase().endsWith(".xml")
                      ) {
                        let { language: Je } = (0, ge.jj)(H[Re].name, we.xPp);
                        if (Je == null || Je == we.xPp) {
                          _e({
                            code: "",
                            message: (0, ae.we)(
                              "#Localization_Error_FileLangauage",
                              H[Re].name,
                            ),
                            row: 0,
                            type: "filenameerror",
                          });
                          return;
                        }
                        try {
                          const ot =
                            await Le.ReadLocalizationData_XML_SingleLanguage(
                              H[Re],
                              Je,
                            );
                          U.fnOnImportLocData(ot, [Je]).forEach((he) => {
                            Ue.indexOf(he) == -1 && Ue.push(he);
                          });
                        } catch (ot) {
                          let qe = (0, k.H)(ot);
                          _e({
                            code: "",
                            message: (0, ae.we)(
                              "#Localization_Error_XMLParseError",
                              qe.strErrorMsg,
                            ),
                            row: 0,
                            type: "parseerror",
                          });
                          return;
                        }
                      } else
                        _e({
                          code: "",
                          message: (0, ae.we)(
                            "#Localization_Error_FileExtention",
                            H[Re].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                  Se(Ue);
                }
              };
            return (0, e.jsx)(ue.he, {
              className: (0, J.A)(
                U.className ? U.className : R.EditPreviewButton,
              ),
              toolTipContent: U.strToolTip,
              children: (0, e.jsxs)("label", {
                className: W.ImportButton,
                htmlFor: "importlocalization",
                children: [
                  L && (0, e.jsx)(X.t, { size: "small" }),
                  (0, e.jsx)("div", {
                    className: W.Label,
                    children: (0, ae.we)(
                      U.strLabel ? U.strLabel : "#Localization_Import_Btn",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    id: "importlocalization",
                    className: W.ImportButton,
                    style: { display: "none" },
                    type: "file",
                    onSubmit: Ae,
                    onChange: Ae,
                    multiple: !0,
                  }),
                ],
              }),
            });
          },
          D = (U) => {
            const {
                fnOnImportLocData: L,
                closeModal: K,
                sampleLocData: _e,
                sampleFilename: Se,
              } = U,
              Ae = (H, Ue) => {
                const Le = L(H, Ue);
                return K(), Le;
              },
              F = new CLocalizationImportExport();
            return jsxs(GenericDialog, {
              title: Localize("#ImportLoc_Title"),
              onCancel: K,
              closeModal: K,
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
                            F.WriteLocalizationData_CSV_LanguageRows(
                              _e,
                              Se + "_row.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerRow"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            F.WriteLocalizationData_CSV_LanguageColumns(
                              _e,
                              Se + "_col.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerCol"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            F.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                              _e,
                              Se + "_token.csv",
                            ),
                          children: Localize("#ImportLoc_CSVTokenLang"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            F.WriteLocalizationData_XML_SingleLanguage(
                              _e,
                              k_ELanguage_English,
                              Se + "xml",
                            ),
                          children: Localize("#ImportLoc_XML"),
                        }),
                      ],
                    }),
                  ],
                }),
                jsx(Dialog.Footer, {
                  children: jsx(Pe, {
                    strLabel: Localize("#BuildNotes_ImportLocalization"),
                    fnOnImportLocData: Ae,
                  }),
                }),
              ],
            });
          };
      },
      20398: (Y, Ye, u) => {
        "use strict";
        u.d(Ye, { G: () => R, s: () => pe });
        var e = u(99412),
          S = u(32093),
          se = u(41635),
          M = u(22880),
          we = u(18210),
          G = Object.defineProperty,
          ge = (ee, V, X) =>
            V in ee
              ? G(ee, V, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: X,
                })
              : (ee[V] = X),
          oe = (ee, V, X) => ge(ee, typeof V != "symbol" ? V + "" : V, X);
        class R {
          constructor() {
            oe(this, "m_mapTokens", new Map());
          }
          GetLocalization(V, X) {
            const k = this.m_mapTokens.get(V);
            if (!(!k || !k[X])) return k[X];
          }
          SetLocalization(V, X, k) {
            let J = this.m_mapTokens.get(V);
            J ||
              ((J = (0, se.$Y)([], e.bP9, null)), this.m_mapTokens.set(V, J)),
              (J[X] = k);
          }
          GetSortedTokenList() {
            let V = [];
            return (
              this.m_mapTokens.forEach((X, k) => V.push(k)),
              V.sort((X, k) => X.localeCompare(k)),
              V
            );
          }
          GetLanguagesWithTokens() {
            let V = new Map();
            this.m_mapTokens.forEach((k) => {
              for (let J = 0; J < k.length; ++J)
                !V.has(J) &&
                  k[J] !== null &&
                  k[J] !== void 0 &&
                  k[J].trim().length > 0 &&
                  V.set(J, !0);
            });
            let X = new Array();
            return (
              V.forEach((k, J) => {
                k && X.push(J);
              }),
              X
            );
          }
          ClearLanguagesTokens(V) {
            V.forEach((X) => {
              this.m_mapTokens.forEach((k, J) => {
                X < k.length && k[X] !== null && (k[X] = null);
              });
            });
          }
          DebugPrintData() {
            const V = new Array();
            return (
              this.m_mapTokens.forEach((X, k) => V.push(`${k}=${X.join(",")}`)),
              V.join(`
`)
            );
          }
        }
        class pe {
          DetectAndFormatCSV(V) {
            var X, k, J, ae, p, ue;
            let W = null;
            return (
              ((k =
                (X = V == null ? void 0 : V.meta) == null
                  ? void 0
                  : X.fields) == null
                ? void 0
                : k.length) >= 3 &&
              V.meta.fields[0] === "field" &&
              V.meta.fields[1] === "language" &&
              V.meta.fields[2] === "value"
                ? (W = this.ReadLocalizationData_CSV_TokenLanguageList(V))
                : ((ae =
                      (J = V == null ? void 0 : V.meta) == null
                        ? void 0
                        : J.fields) == null
                      ? void 0
                      : ae.length) >= 2 &&
                    V.meta.fields[0] === "field" &&
                    (0, e.sfN)(V.meta.fields[1], e.xPp) != e.xPp
                  ? (W = this.ReadLocalizationData_CSV_LanguageColumns(V))
                  : ((ue =
                      (p = V == null ? void 0 : V.meta) == null
                        ? void 0
                        : p.fields) == null
                      ? void 0
                      : ue.length) >= 2 &&
                    V.meta.fields[0] === "language" &&
                    (W = this.ReadLocalizationData_CSV_LanguageRows(V)),
              W
            );
          }
          async ReadLocalizationData_XML_SingleLanguage(V, X) {
            let k = new R(),
              J = new DOMParser(),
              ae = await M.g.ReadFile(V),
              p = J.parseFromString(ae.toString(), "application/xml");
            for (let ue = 0; ue < p.documentElement.children.length; ++ue) {
              const W = p.documentElement.children.item(ue);
              if (!W.getAttribute("id"))
                throw "Can not find id for element. Probably malformed XML";
              const f = W.getAttribute("id").toLocaleLowerCase(),
                s = W.textContent;
              k.SetLocalization(f, X, s);
            }
            return k;
          }
          ReadLocalizationData_CSV_TokenLanguageList(V) {
            const X = new R();
            return (
              V.data.forEach((k) => {
                const J = k.field,
                  ae = (0, e.sfN)(k.language);
                X.SetLocalization(J, ae, k.value);
              }),
              X
            );
          }
          ReadLocalizationData_CSV_LanguageColumns(V) {
            const X = new R();
            return (
              V.data.forEach((k) => {
                const J = k.field;
                for (let ae = e.Bhc; ae < e.bP9; ++ae) {
                  const p = (0, e.x6o)((0, e.LgB)(ae));
                  X.SetLocalization(J, ae, k[p]);
                }
              }),
              X
            );
          }
          ReadLocalizationData_CSV_LanguageRows(V) {
            const X = new R();
            return (
              V.data.forEach((k) => {
                const J = (0, e.sfN)(k.language, e.bP9);
                if (J !== e.bP9)
                  for (const [ae, p] of Object.entries(k))
                    ae === "language" ||
                      typeof p != "string" ||
                      X.SetLocalization(ae, J, p);
              }),
              X
            );
          }
          GetExportLanguages() {
            return we.A0.GetLanguageListForRealms([S.TU.k_ESteamRealmGlobal]);
          }
          WriteLocalizationData_CSV_TokenAndLanguageColumns(V, X) {
            let k = new Array();
            V.GetSortedTokenList().forEach((ae) => {
              for (const p of this.GetExportLanguages()) {
                let ue = { field: ae };
                (ue.language = (0, e.x6o)((0, e.LgB)(p))),
                  (ue.value = V.GetLocalization(ae, p)),
                  k.push(ue);
              }
            }),
              M.g.WriteCSVToFile(k, X);
          }
          WriteLocalizationData_CSV_LanguageColumns(V, X) {
            let k = new Array();
            V.GetSortedTokenList().forEach((ae) => {
              let p = { field: ae };
              for (const ue of this.GetExportLanguages())
                p[(0, e.x6o)((0, e.LgB)(ue))] = V.GetLocalization(ae, ue);
              k.push(p);
            }),
              M.g.WriteCSVToFile(k, X);
          }
          WriteLocalizationData_CSV_LanguageRows(V, X) {
            let k = new Array();
            for (const ae of this.GetExportLanguages())
              k.length <= ae - 1 && k.push({ language: "" }),
                k.push({ language: (0, e.x6o)((0, e.LgB)(ae)) });
            V.GetSortedTokenList().forEach((ae) => {
              for (const p of this.GetExportLanguages()) {
                const ue = V.GetLocalization(ae, p);
                k[p][ae] = ue;
              }
            }),
              M.g.WriteCSVToFile(k, X);
          }
          WriteLocalizationData_XML_SingleLanguage(V, X, k) {
            let J = document.implementation.createDocument(
              null,
              "content",
              null,
            );
            V.GetSortedTokenList().forEach((p) => {
              let ue = J.createElement("string");
              ue.setAttribute("id", p),
                ue.appendChild(J.createTextNode(V.GetLocalization(p, X) || "")),
                J.documentElement.append(ue);
            }),
              M.g.WriteXMLToFile(J, k);
          }
        }
      },
      49199: (Y) => {
        Y.exports = {
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
      68297: (Y) => {
        Y.exports = { Ctn: "_3cNoLVtVVzke0LB8WeiaxS" };
      },
      78606: (Y) => {
        Y.exports = { HighlightBox: "_1C8qNhbbX8u5CxFNklZmlc" };
      },
      1743: (Y) => {
        Y.exports = { SearchResults: "_26iJ3c5EI_arYCNqRvcLNX" };
      },
      22230: (Y) => {
        Y.exports = {
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
      28796: (Y) => {
        Y.exports = {
          LivePreview: "eFYn5NNpjD2UUEaetVynq",
          Button: "_1_mHUKME5i3Y8zoNldiFoQ",
          DeviceDropdown: "_3k5_ki8-nxIYRWf3FJmYr7",
          Connected: "_1oL5XzL932fPV06pp5B5w7",
        };
      },
      6103: (Y) => {
        Y.exports = {
          Ctn: "BTMmbSI5WdBvCQVAgf3-i",
          ButtonIcon: "_21IZDNymOVDf4u4Ont7WVA",
          SalePageTOCPlacement: "_3swQ-bhpt-4JFhKZu9FvNW",
        };
      },
      47155: (Y) => {
        Y.exports = {
          UploaderCtn: "_1B1zXx3Ukh5fPY5eB6F2Ca",
          CapsuleCtn: "_3K7h_ivhFFa9wmqp1O_e5n",
          CapsuleTitle: "_1YilvBMh1lDdWYGq5MnmqO",
          CapsuleDimensions: "_2R7J4mdptFLnMorL9p9WuY",
          CapsulePreview: "_2eDmRg0urY8jNMPG7lpQ91",
        };
      },
      18368: (Y) => {
        Y.exports = {
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
      88748: (Y) => {
        Y.exports = {
          WarningContainer: "_3KKQLT-cntemarSxLAOHU4",
          Warning: "_3j12-L_RkqFQTnTaY3jfxl",
          Buttons: "_1NXKvU6Jb0wmgRqjJNUvTo",
          TooltipIndicator: "_3q4PQbri3zpBCLZtr1RhjU",
        };
      },
      11113: (Y) => {
        Y.exports = {
          AssociatedBuildBody: "_1rnVUYtxCV0s6yyvpWQdNr",
          BuildDisplay: "_1HwK4xlcGUHwQQ8N0JlIOY",
          BuildUnlinked: "_1cg3t7W3zJ1d2fyZeemkqS",
          BuildLinkedBranch: "_2ssXJvILzS4NK3EGgXkahJ",
          BuildLinkedDefault: "fHJYYxIYA2NCGNolmgOMi",
          BuildIDLink: "_2-Syn-OgAW18RXr3Rz6YOD",
        };
      },
      86836: (Y) => {
        Y.exports = {
          AddTitleButton: "XKHg8utmcVGXt54ZWUTca",
          CustomTitleCtn: "_1qoSQ8xx3K6loQPzOE0HiB",
          LanguageContainer: "_3WmqO9SJ2x76duLZu9m2_w",
          customTitleOptionsCtn: "zhH_Vr0LaMN9JLW17_6Sg",
          TitleRowCtn: "_96im4Pfj3wp5vXCaqhDwZ",
          AccountRow: "_2uIyvmr0xlWuKw0K7c5XEB",
        };
      },
      54736: (Y) => {
        Y.exports = {
          DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
          EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
          EventEditorBottomBar: "_1noS58WsfHN3KuGVDzlv9r",
          EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
          EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
          AdditionalContent: "_2fUl5vCnrlT9P7kskRIiWx",
        };
      },
      31467: (Y) => {
        Y.exports = {
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
      30040: (Y) => {
        Y.exports = {
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
      4969: (Y) => {
        Y.exports = {
          ThemedCtn: "_3JuTN3-LxaE1Kvz0sU14cv",
          CategoryOption: "_4ke28HUvwT2rIC2CU4462",
          CategoryTitle: "Dx6oJLmZ21r_VQlYV17ML",
          event_nomination_banner_ctn: "_1w12VaiWFhKBsTkQ0M7Mla",
          event_nomination_banner: "_2nEQSt0e5gAadvWMl-0IYD",
          event_nomination_banner_text: "_1gePUvogr9fXbuDaaMXFeP",
        };
      },
      6542: (Y) => {
        Y.exports = {
          PublishOption: "_6BF_4hDIQb4IUVMnPGyOc",
          Description: "_1zX1bcfpvl3eDzOofaa0Ld",
          PublishButton: "_3DS9nFmljPIAzK4YYNyJ7M",
          PublishButtonCtn: "dwVDG_w5nz5NZkVrF3Ymt",
          EventPublishButton: "_eYd_33i0Tu425frNF-D0",
        };
      },
      82267: (Y) => {
        Y.exports = {
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
      86649: (Y) => {
        Y.exports = {
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
      31501: (Y) => {
        Y.exports = {
          ErrorMessaage: "_13sZcUrcBMNUU0KdAqKPUS",
          UpdatingMessage: "_3baPwwHaL5S0vl62s9YPRm",
        };
      },
      91126: (Y) => {
        Y.exports = {
          ValveCrowdInSyncCtn: "_8MIrt7rQXkA0xE5sAjOee",
          ValveCrowdInSyncLabel: "_22b0C1Xi03QNdTFKsYypHR",
          SyncPanelError: "yn_yu2EaUigYFm9QQAD7o",
        };
      },
      9295: (Y) => {
        Y.exports = {
          ManageLocCtn: "_1f5Ik3OrM66FNXPSlNh_zR",
          LocButtonsCtn: "bAoVO_tlg_jpl-uvQ9JFF",
          ManageLocContents: "_2k4C7NwMxpGzAuHjmqEURq",
          Header: "_1_uWHf6GPtvPfqvUQr-Alu",
        };
      },
      26917: (Y) => {
        Y.exports = { Waypoint: "_2pZVu5uwOWvVnfNisJPOB9" };
      },
      49285: (Y) => {
        Y.exports = {
          TableOfContentsContainer: "_3N5be2rmYYNMGufXaKpBSb",
          TableOfContents: "_3tLgun3y-qOlJAVcfwxowt",
          TOCEntry: "_1fzqunMp3Jq_h9SsiGwRGu",
          TOCEntryText: "_2GtCXeIDXaH3zjSXPON8Mc",
          SectionOnScreen: "_3xZOOBpCfl1mS9OS-_DVq4",
          TOCIndent: "_1fP_E_5IswSiXZj42jqqWq",
          Header: "_1GAZYe3epNmQSdQq0rhZBQ",
        };
      },
      32545: (Y) => {
        Y.exports = {
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
      10026: (Y) => {
        Y.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (Y) => {
        Y.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (Y) => {
        Y.exports = {
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
      92451: (Y) => {
        Y.exports = { DialogCtn: "e7i0Hs6j09gCdPXXjl7Lk" };
      },
      11833: (Y) => {
        Y.exports = {
          ApprovalRequiredCtn: "_2pKjCSfT0Aa7Wx8_VoNJzc",
          PendingApproval: "_27C9CXtP6vYFYNpAhDJciM",
          Approved: "_2W3o61eSl990XjaneBlzaE",
          PublishWithRestrictions: "_32dufkQ3fNn_8sJusL-nd_",
          Right: "_2lUXdTnEBjAXrbGOs8rZVb",
          Title: "Oc0UNBEG4L2poFTcpQzwx",
          RequireText: "OZlfJDOJer5NjUxcJJf7Z",
        };
      },
      47534: (Y) => {
        Y.exports = {
          SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
          SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
          SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
          SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
          ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
          AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
        };
      },
      9202: (Y) => {
        Y.exports = {
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
      91640: (Y) => {
        Y.exports = {
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
      96471: (Y) => {
        Y.exports = {
          Label: "_1LhItwhLHspVcQdfcbd2Sg",
          ImportLocSampleButtonCtn: "D-1dlROLVuva-sb6tFgwU",
          SampleTitle: "_9189ilzQ3YES-a-6DyBhR",
          ImportButton: "WyfyxbGrKQq8cKMK5kfxE",
        };
      },
      16345: (Y) => {
        Y.exports = {
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
      26759: (Y, Ye, u) => {
        "use strict";
        u.d(Ye, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
      },
      96715: (Y, Ye, u) => {
        "use strict";
        u.d(Ye, { A: () => e });
        const e =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
    },
  ]);
})();
