/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6762],
  {
    85761: (e) => {
      e.exports = {
        Ctn: "_8n9wPNrWDu91tlwBW9bHt",
        Indicator: "_355XkH0xfIpJF1YsMX7I7k",
        EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
        EmailField: "_1E-g4exFlAQhvXDqspYTR0",
      };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    70879: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => se, default: () => oe });
      var a = n(43527),
        l = n(90626),
        r = n(17083),
        i = n(92757),
        c = n(11577),
        s = n(14932),
        o = n(97058),
        m = n(84811),
        u = n(95695),
        d = n.n(u),
        E = n(38135),
        p = n(24484),
        g = n(64753),
        _ = n(41735),
        v = n.n(_),
        h = n(38390),
        S = n(17720),
        f = n(46575),
        y = n(96001),
        I = n(71541),
        b = n(24054),
        w = n(78395),
        M = n(21869),
        C = n(22797),
        T = n(26408),
        N = n(68797),
        D = n(61859),
        A = n(91675),
        k = n(30470);
      function P(e) {
        const t = S.b.InitFromClanID(b.z5),
          n = (function () {
            const [e] = (0, l.useState)(() =>
              (0, p.Tc)("event_gids", "application_config"),
            );
            return e;
          })();
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            null,
            l.createElement(
              "a",
              {
                href: `${k.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
              },
              "Open Meet Steam Event Dashboard",
            ),
          ),
          n.map((e) => l.createElement(R, { gid: e, key: e })),
        );
      }
      function R(e) {
        const { gid: t } = e,
          n = S.b.InitFromClanID(b.z5),
          a = (0, y.a)(),
          r = (0, f.my)(a, b.z5, t),
          i = (0, h.RR)(t),
          c = i.GetNameWithFallback(0),
          [s, o, m] = (0, g.uD)();
        return l.createElement(
          "div",
          null,
          l.createElement("hr", null),
          l.createElement("div", null, c),
          l.createElement("div", null),
          l.createElement(
            "div",
            null,
            l.createElement(
              "a",
              {
                href: `${k.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t}`,
              },
              "Edit Event",
            ),
          ),
          i.jsondata.meet_steam_groups?.length > 0
            ? l.createElement(
                l.Fragment,
                null,
                i.jsondata.meet_steam_groups.map((e) =>
                  l.createElement(z, {
                    key: e.group_id,
                    group: e,
                    rgAvailability: r,
                  }),
                ),
              )
            : l.createElement("div", null, "This has no sessions defined"),
          l.createElement(
            I.$n,
            { onClick: o },
            "Invite to ",
            c,
            l.createElement(T.o, {
              tooltip:
                "This will email and show the users on their dashboard when the event is live.",
            }),
          ),
          l.createElement(
            M.E,
            { active: s },
            l.createElement(F, { hideModal: m, gid: t }),
          ),
        );
      }
      function z(e) {
        const { group: t, rgAvailability: n } = e,
          a = D.NT.GetWithFallback(t?.localized_session_title, 0);
        return l.createElement(
          "div",
          null,
          l.createElement("div", null, a),
          l.createElement(
            "div",
            null,
            "Sessions Instances: ",
            t.sessions.length,
          ),
          l.createElement(
            l.Fragment,
            null,
            t.sessions.map((e) =>
              l.createElement(x, { key: e.id, session: e, rgAvailability: n }),
            ),
          ),
        );
      }
      function x(e) {
        const { session: t, rgAvailability: n } = e,
          a = n?.find((e) => e.session_id == t.id);
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            null,
            (0, D.TW)(t.rtime_start),
            " for ",
            (0, A.qZ)(t.rtime_end - t.rtime_start),
          ),
          l.createElement(
            "div",
            null,
            t.max_capacity - (a?.guest_count || 0),
            " / ",
            t.max_capacity,
          ),
        );
      }
      function F(e) {
        const { hideModal: t, gid: n } = e,
          [a, r] = (0, l.useState)(""),
          [i, c] = (0, l.useState)(!1),
          [s, o] = (0, l.useState)(null),
          [m, u] = (0, l.useState)(null);
        return l.createElement(
          w.o0,
          {
            strTitle: "Invite Users",
            bOKDisabled: !a || 0 == a.trim().length || null != s,
            strDescription:
              "ADDING: Enter Accounts IDs you wish to invite separated newlines",
            strCancelButtonText: null !== s ? "Close" : "Cancel",
            onOK: async () => {
              c(!0);
              const e = a
                .split(/\r?\n/)
                .filter((e) => "" !== e.trim())
                .join(",");
              let t = new FormData();
              t.append("sessionid", k.TS.SESSIONID),
                t.append("gid", n),
                t.append("accounts", e);
              const l = `${k.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
              try {
                const e = await v().post(l, t, { withCredentials: !0 });
                if (1 == e?.data?.success)
                  o(e.data.rgInvitedAccounts.length),
                    u(e.data.rgSkippedAccounts.length);
                else {
                  let t = (0, N.H)(e);
                  console.error(
                    "DisplayPartnerEventRow error: " + t.strErrorMsg,
                    t,
                  );
                }
              } catch (e) {
                let t = (0, N.H)(e);
                console.error(
                  "DisplayPartnerEventRow error: " + t.strErrorMsg,
                  t,
                );
              }
              c(!1);
            },
            onCancel: () => {
              o(null), u(null), c(!1), r(""), t();
            },
          },
          l.createElement("textarea", {
            cols: 120,
            rows: 5,
            onChange: (e) => r(e.currentTarget.value),
            value: a,
            autoFocus: !0,
          }),
          null != s &&
            l.createElement(
              "div",
              null,
              "Invited ",
              s.toLocaleString(),
              " accounts, skipped previously invited ",
              m.toLocaleString(),
            ),
          i &&
            l.createElement(C.t, {
              size: "small",
              position: "center",
              string: (0, D.we)("#Saving"),
            }),
        );
      }
      function Y() {
        const [e] = (0, l.useState)(() =>
          (0, p.Tc)("events_list", "application_config"),
        );
        return e;
      }
      var B = n(48479),
        L = n(14336),
        O = n(32179),
        $ = n(29233),
        q = n(9161);
      function j(e) {
        const t = Y(),
          n = (function () {
            const [e] = (0, l.useState)(() =>
              (0, p.Tc)("interest_results", "application_config"),
            );
            return (0, l.useMemo)(
              () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
              [e],
            );
          })(),
          [a, r] = (0, l.useState)(""),
          i = (0, l.useMemo)(() => {
            const e = new Map();
            return (
              n.forEach((t) => {
                t.results?.attending?.forEach((t) => {
                  e.has(t) ? e.set(t, e.get(t) + 1) : e.set(t, 1);
                });
              }),
              e
            );
          }, [n]);
        return l.createElement(
          "div",
          null,
          l.createElement(I.pd, {
            type: "text",
            value: a,
            onChange: (e) => r(e.currentTarget.value.trim()),
            label: "Filter",
          }),
          t
            .filter(
              (e) => 0 == a.length || e.name.includes(a) || e.id.includes(a),
            )
            .map((e) =>
              l.createElement(H, {
                key: e.id,
                conf: e,
                nInterestCount: i.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
        );
      }
      function H(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return l.createElement(
          B.qx,
          {
            title: `${t.name} in ${t.place} with Interest: ${n.toLocaleString()}`,
            bStartMinimized: !0,
          },
          l.createElement(U, { conf: t, rgSurveyInterest: a }),
        );
      }
      function U(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, l.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          );
        return a && 0 != a.length
          ? l.createElement(
              "div",
              null,
              l.createElement(
                I.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push(["AccountID", "Name", "Partner ID", "Partner Name"]),
                      a.forEach((t) => {
                        const n = [],
                          a = new $.b2(t.steamid);
                        n.push("" + a.GetAccountID());
                        const l = (0, L.z0)(a.GetAccountID());
                        n.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                        const r = t.results.partner_id;
                        n.push("" + r);
                        const i = (0, O.Yd)(r);
                        i && n.push(i?.name), e.push(n);
                      });
                    const n = t.name.replace(" ", "_") + "_appeals_data.csv";
                    q.g.WriteCSVToFile(e, n);
                  },
                },
                "Export to CSV (wait until the table populates fully)",
              ),
              l.createElement(
                "table",
                null,
                l.createElement(
                  "thead",
                  null,
                  l.createElement(
                    "tr",
                    null,
                    l.createElement("th", null, "Name"),
                    l.createElement("th", null, "Partner"),
                  ),
                ),
                l.createElement(
                  "tbody",
                  null,
                  a.map((e) =>
                    l.createElement(W, {
                      key: t.id + "_" + e.steamid,
                      strsteamid: e.steamid,
                      partnerID: e.results.partner_id,
                    }),
                  ),
                ),
              ),
            )
          : l.createElement("div", null, "No users with interest");
      }
      function W(e) {
        const { strsteamid: t, partnerID: n } = e,
          a = (0, L.hW)(t),
          [r] = (0, O.UA)(n);
        return l.createElement(
          "tr",
          null,
          l.createElement("td", null, a.data?.m_strPlayerName),
          l.createElement("td", null, r?.name || n),
        );
      }
      function G(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Survey Results",
              key: "survey",
              contents: l.createElement(m.tH, null, l.createElement(j, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: l.createElement(m.tH, null, l.createElement(P, null)),
              onClick: t,
            },
          ];
        return l.createElement(
          "div",
          null,
          l.createElement(
            "h2",
            null,
            "Meet Steam Admin Dashboard ",
            (0, p.Fd)("current_year", "application_config"),
          ),
          l.createElement("hr", null),
          l.createElement(E.V, { tabs: n }),
          l.createElement("div", { className: d().ClearThings }),
          l.createElement("br", null),
        );
      }
      var J = n(79645),
        K = n(45737),
        V = n.n(K),
        X = n(56330),
        Q = n(52038),
        Z = n(78327),
        ee = n(85761),
        te = n.n(ee);
      function ne(e) {
        const t = (function () {
            const [e] = (0, l.useState)(() =>
              (0, Z.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, l.useState)(
              () => (0, Z.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, L.js)(Z.iA.accountid),
          [r, i] = (0, l.useState)(!1),
          c = ie(),
          s = (function () {
            const [e] = (0, l.useState)(() =>
              (0, Z.Tc)("primary_partner_id", "application_config"),
            );
            return e;
          })(),
          [o, m] = (0, l.useState)(() =>
            n.email_override ? n : { ...n, email_override: c, partner_id: s },
          );
        return t
          ? !a || a.m_bPlayerNamePending
            ? l.createElement(C.t, {
                size: "medium",
                position: "center",
                string: (0, D.we)("#Loading"),
              })
            : l.createElement(
                "div",
                { className: (0, Q.A)(V().AdminPageCtn, te().Ctn) },
                l.createElement(
                  "div",
                  { className: V().PageTitle },
                  (0, D.we)("#MeetSteam_MainTitle"),
                ),
                l.createElement("hr", null),
                l.createElement(
                  "div",
                  { className: V().ColumnCtn },
                  l.createElement(
                    "div",
                    { className: V().LeftCol },
                    l.createElement(
                      "div",
                      { className: V().SectionCtn },
                      l.createElement(
                        "h1",
                        null,
                        " ",
                        (0, D.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          l.createElement("br", null),
                        ),
                      ),
                      l.createElement(
                        "p",
                        { className: V().IntroText },
                        (0, D.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    l.createElement(
                      "div",
                      { className: V().SectionCtn },
                      l.createElement(le, {
                        oRegistration: o,
                        fnSetRegistration: m,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: V().SectionCtn },
                      l.createElement(ae, {
                        oRegistration: o,
                        fnSetRegistration: m,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: (0, Q.A)(V().SectionCtn, V().ActionBar) },
                      l.createElement(
                        I.jn,
                        {
                          onClick: async () => {
                            const e = `${Z.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", Z.TS.SESSIONID),
                              t.append("registrationJson", JSON.stringify(o));
                            const n = await v().post(e, t, {
                              withCredentials: !0,
                            });
                            1 != n.data.success &&
                              (console.error(
                                "MeetSteamLanding failed " + n.data.success,
                              ),
                              i(!0));
                          },
                        },
                        (0, D.we)("#Button_Submit"),
                      ),
                      r &&
                        l.createElement(
                          "div",
                          { className: X.ErrorStylesWithIcon },
                          (0, D.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : l.createElement(
              "div",
              { className: te().Ctn },
              (0, D.we)("#MeetSteam_closed"),
            );
      }
      function ae(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = Y();
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("h1", null, (0, D.we)("#MeetSteam_Events_Interest")),
          l.createElement(
            "p",
            null,
            (0, D.PP)("#MeetSteam_Events_title", "2025"),
          ),
          l.createElement(
            "p",
            null,
            l.createElement("span", { className: te().Indicator }, "*"),
            " ",
            (0, D.PP)("#MeetSteam_Events_desc"),
          ),
          l.createElement(
            "table",
            null,
            l.createElement(
              "thead",
              null,
              l.createElement(
                "tr",
                null,
                l.createElement("th", null),
                l.createElement("th", null),
                l.createElement("th", null),
                l.createElement("th", null),
              ),
            ),
            l.createElement(
              "tbody",
              null,
              a.map((e) =>
                l.createElement(
                  "tr",
                  { key: e.id },
                  l.createElement(
                    "td",
                    null,
                    e.attending
                      ? l.createElement(
                          "span",
                          { className: te().Indicator },
                          "*",
                        )
                      : "",
                  ),
                  l.createElement(
                    "td",
                    null,
                    l.createElement("div", null, e.name),
                    l.createElement("div", null, e.place),
                  ),
                  l.createElement(
                    "td",
                    null,
                    l.createElement("div", null, e.time),
                  ),
                  l.createElement(
                    "td",
                    null,
                    l.createElement(I.Yh, {
                      checked: t.attending?.includes(e.id),
                      onChange: (a) => {
                        let l = t.attending ? [...t.attending] : [];
                        a && !l.includes(e.id)
                          ? (l.push(e.id), n({ ...t, attending: l }))
                          : !a &&
                            l.includes(e.id) &&
                            (l.splice(l.indexOf(e.id), 1),
                            n({ ...t, attending: l }));
                      },
                      tooltip: (0, D.we)("#MeetSteam_attend_ttip"),
                    }),
                  ),
                ),
              ),
            ),
          ),
          l.createElement("br", null),
          l.createElement(I.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, D.we)("#MeetSteam_others"),
          }),
        );
      }
      function le(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, L.js)(Z.iA.accountid),
          r = ie(),
          [i, c] = (0, l.useState)(() => Boolean(t.email_override != r));
        return a.data
          ? l.createElement(
              "div",
              null,
              l.createElement("h1", null, (0, D.we)("#MeetSteam_You")),
              l.createElement("p", null, (0, D.we)("#MeetSteam_You_Desc")),
              l.createElement(
                "div",
                { className: te().EmailInfoRow },
                l.createElement(
                  "div",
                  { className: te().EmailField },
                  l.createElement(I.pd, {
                    type: "string",
                    label: (0, D.we)("#MeetSteam_You_Email"),
                    disabled: !i,
                    value: t.email_override || r || "",
                    placeholder: (0, D.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !i &&
                  l.createElement(I.Yh, {
                    checked: i,
                    onChange: c,
                    label: (0, D.we)("#MeetSteam_You_Update"),
                    tooltip: (0, D.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              l.createElement(re, {
                nPartnerID: t.partner_id,
                label: (0, D.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
            )
          : l.createElement(C.t, {
              size: "medium",
              position: "center",
              string: (0, D.we)("#Loading"),
            });
      }
      function re(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          r = (0, J.c)(Z.iA.accountid);
        if (!r)
          return l.createElement(C.t, {
            size: "small",
            position: "center",
            string: (0, D.we)("#Loading"),
          });
        const i = [];
        return (
          r.forEach((e) =>
            i.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          l.createElement(I.m, {
            layout: "inline",
            label: a,
            rgOptions: i,
            selectedOption: t,
            onChange: (e) => {
              n(e.data);
            },
          })
        );
      }
      function ie() {
        const [e] = (0, l.useState)(
          () => (0, Z.Tc)("partner_user_email", "application_config") || "",
        );
        return e;
      }
      var ce = n(20587);
      const se = {
        YearlySurvery: (e = ":year") => `/${e}`,
        AdminDashboard: () => "/admin",
      };
      function oe(e) {
        return (
          (0, l.useEffect)(() => {
            ce.O3.Init();
          }, []),
          l.createElement(
            c.m,
            null,
            l.createElement(
              r.Kd,
              { basename: (0, a.C)() + "meetsteam/" },
              l.createElement(
                i.dO,
                null,
                l.createElement(i.qh, {
                  exact: !0,
                  path: a.B.DiagData(),
                  render: (e) =>
                    l.createElement(s.z, {
                      ...e,
                      strConfigID: "application_config",
                    }),
                }),
                l.createElement(i.qh, {
                  exact: !0,
                  path: se.AdminDashboard(),
                  component: G,
                }),
                l.createElement(i.qh, {
                  exact: !0,
                  path: se.YearlySurvery(":year(\\d+)"),
                  component: ne,
                }),
                l.createElement(i.qh, { component: o.a }),
              ),
            ),
          )
        );
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => E, qx: () => p });
      var a = n(71541),
        l = n(61859),
        r = n(12155),
        i = n(90626),
        c = n(52038),
        s = n(95695),
        o = n(84811),
        m = n(64734),
        u = n(65946),
        d = n(26408);
      function E(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: a,
            toggleMinimized: l,
            className: r,
            children: E,
          } = e,
          p = (0, u.q3)(() => a());
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            {
              className: (0, c.A)(
                r,
                m.SectionTitleHeader,
                m.required_title,
                "SectionTitleHeader",
              ),
            },
            i.createElement(
              "div",
              {
                className: (0, c.A)(
                  s.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && i.createElement(d.o, { tooltip: n }),
            ),
            i.createElement(g, { bIsMinimized: p, fnToggleMinimize: l }),
          ),
          !p && i.createElement(o.tH, null, E),
        );
      }
      function p(e) {
        const [t, n] = i.useState(Boolean(e.bStartMinimized));
        return i.createElement(
          E,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function g(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          c = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return i.createElement(
          a.$n,
          { "data-tooltip-text": (0, l.we)(c), onClick: n },
          e.bIsMinimized
            ? i.createElement(r.hz4, null)
            : i.createElement(r.Xjb, null),
        );
      }
    },
  },
]);
