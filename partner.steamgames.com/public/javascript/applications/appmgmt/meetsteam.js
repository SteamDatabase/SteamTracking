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
        RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
        RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
      };
    },
    70879: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => ue, default: () => de });
      var a = n(43527),
        l = n(90626),
        r = n(17083),
        i = n(92757),
        s = n(11577),
        c = n(14932),
        o = n(97058),
        m = n(84811),
        u = n(95695),
        d = n.n(u),
        E = n(38135),
        g = n(24484),
        p = n(64753),
        _ = n(41735),
        h = n.n(_),
        v = n(38390),
        S = n(17720),
        f = n(46575),
        y = n(96001),
        w = n(71541),
        b = n(24054),
        C = n(78395),
        N = n(21869),
        I = n(22797),
        M = n(26408),
        T = n(68797),
        A = n(61859),
        D = n(91675),
        R = n(30470);
      function P(e) {
        const t = S.b.InitFromClanID(b.z5),
          n = (function () {
            const [e] = (0, l.useState)(() =>
              (0, g.Tc)("event_gids", "application_config"),
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
                href: `${R.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
              },
              "Open Meet Steam Event Dashboard",
            ),
          ),
          n.map((e) => l.createElement(k, { gid: e, key: e })),
        );
      }
      function k(e) {
        const { gid: t } = e,
          n = S.b.InitFromClanID(b.z5),
          a = (0, y.a)(),
          r = (0, f.my)(a, b.z5, t),
          i = (0, v.RR)(t),
          s = i.GetNameWithFallback(0),
          [c, o, m] = (0, p.uD)();
        return l.createElement(
          "div",
          null,
          l.createElement("hr", null),
          l.createElement("div", null, s),
          l.createElement("div", null),
          l.createElement(
            "div",
            null,
            l.createElement(
              "a",
              {
                href: `${R.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t}`,
              },
              "Edit Event",
            ),
          ),
          i.jsondata.meet_steam_groups?.length > 0
            ? l.createElement(
                l.Fragment,
                null,
                i.jsondata.meet_steam_groups.map((e) =>
                  l.createElement(B, {
                    key: e.group_id,
                    group: e,
                    rgAvailability: r,
                  }),
                ),
              )
            : l.createElement("div", null, "This has no sessions defined"),
          l.createElement(
            w.$n,
            { onClick: o },
            "Invite to ",
            s,
            l.createElement(M.o, {
              tooltip:
                "This will email and show the users on their dashboard when the event is live.",
            }),
          ),
          l.createElement(
            N.E,
            { active: c },
            l.createElement(L, { hideModal: m, gid: t }),
          ),
        );
      }
      function B(e) {
        const { group: t, rgAvailability: n } = e,
          a = A.NT.GetWithFallback(t?.localized_session_title, 0);
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
              l.createElement(O, { key: e.id, session: e, rgAvailability: n }),
            ),
          ),
        );
      }
      function O(e) {
        const { session: t, rgAvailability: n } = e,
          a = n?.find((e) => e.session_id == t.id);
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            null,
            (0, A.TW)(t.rtime_start),
            " for ",
            (0, D.qZ)(t.rtime_end - t.rtime_start),
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
      function L(e) {
        const { hideModal: t, gid: n } = e,
          [a, r] = (0, l.useState)(""),
          [i, s] = (0, l.useState)(!1),
          [c, o] = (0, l.useState)(null),
          [m, u] = (0, l.useState)(null);
        return l.createElement(
          C.o0,
          {
            strTitle: "Invite Users",
            bOKDisabled: !a || 0 == a.trim().length || null != c,
            strDescription:
              "ADDING: Enter Accounts IDs you wish to invite separated newlines",
            strCancelButtonText: null !== c ? "Close" : "Cancel",
            onOK: async () => {
              s(!0);
              const e = a
                .split(/\r?\n/)
                .filter((e) => "" !== e.trim())
                .join(",");
              let t = new FormData();
              t.append("sessionid", R.TS.SESSIONID),
                t.append("gid", n),
                t.append("accounts", e);
              const l = `${R.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
              try {
                const e = await h().post(l, t, { withCredentials: !0 });
                if (1 == e?.data?.success)
                  o(e.data.rgInvitedAccounts.length),
                    u(e.data.rgSkippedAccounts.length);
                else {
                  let t = (0, T.H)(e);
                  console.error(
                    "DisplayPartnerEventRow error: " + t.strErrorMsg,
                    t,
                  );
                }
              } catch (e) {
                let t = (0, T.H)(e);
                console.error(
                  "DisplayPartnerEventRow error: " + t.strErrorMsg,
                  t,
                );
              }
              s(!1);
            },
            onCancel: () => {
              o(null), u(null), s(!1), r(""), t();
            },
          },
          l.createElement("textarea", {
            cols: 120,
            rows: 5,
            onChange: (e) => r(e.currentTarget.value),
            value: a,
            autoFocus: !0,
          }),
          null != c &&
            l.createElement(
              "div",
              null,
              "Invited ",
              c.toLocaleString(),
              " accounts, skipped previously invited ",
              m.toLocaleString(),
            ),
          i &&
            l.createElement(I.t, {
              size: "small",
              position: "center",
              string: (0, A.we)("#Saving"),
            }),
        );
      }
      function F() {
        const [e] = (0, l.useState)(() =>
          (0, g.Tc)("events_list", "application_config"),
        );
        return e;
      }
      var Y = n(48479),
        x = n(14336),
        U = n(32179),
        $ = n(29233),
        z = n(9161);
      function j(e) {
        const t = F(),
          n = (function () {
            const [e] = (0, l.useState)(() =>
              (0, g.Tc)("interest_results", "application_config"),
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
          l.createElement(w.pd, {
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
              l.createElement(J, {
                key: e.id,
                conf: e,
                nInterestCount: i.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
        );
      }
      function J(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return l.createElement(
          Y.qx,
          {
            title: `${t.name} in ${t.place} with Interest: ${n.toLocaleString()}`,
            bStartMinimized: !0,
          },
          l.createElement(W, { conf: t, rgSurveyInterest: a }),
        );
      }
      function W(e) {
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
                w.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push(["AccountID", "Name", "Partner ID", "Partner Name"]),
                      a.forEach((t) => {
                        const n = [],
                          a = new $.b2(t.steamid);
                        n.push("" + a.GetAccountID());
                        const l = (0, x.z0)(a.GetAccountID());
                        n.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                        const r = t.results.partner_id;
                        n.push("" + r);
                        const i = (0, U.Yd)(r);
                        i && n.push(i?.name), e.push(n);
                      });
                    const n = t.name.replace(" ", "_") + "_appeals_data.csv";
                    z.g.WriteCSVToFile(e, n);
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
                    l.createElement("th", null, "Account Name"),
                    l.createElement("th", null, "Actual Name"),
                    l.createElement("th", null, "Email"),
                    l.createElement("th", null, "Partner"),
                    l.createElement("th", null, "Partner Revenue"),
                    l.createElement("th", null, "Biggest Game"),
                    l.createElement("th", null, "Country (via IP)"),
                    l.createElement("th", null, "Submit Survey Time"),
                  ),
                ),
                l.createElement(
                  "tbody",
                  null,
                  a.map((e) =>
                    l.createElement(q, {
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
      function q(e) {
        const { strsteamid: t, partnerID: n } = e,
          a = (0, x.hW)(t),
          [r] = (0, U.UA)(n);
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
            (0, g.Fd)("current_year", "application_config"),
          ),
          l.createElement("hr", null),
          l.createElement(E.V, { tabs: n }),
          l.createElement("div", { className: d().ClearThings }),
          l.createElement("br", null),
        );
      }
      var H = n(22837),
        K = n(20194),
        V = n(79645),
        X = n(45737),
        Z = n.n(X),
        Q = n(56330),
        ee = n(52038),
        te = n(78327),
        ne = n(85761),
        ae = n.n(ne),
        le = n(65946),
        re = n(1909);
      function ie(e) {
        const t = (function () {
            const [e] = (0, l.useState)(() =>
              (0, te.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, l.useState)(
              () => (0, te.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, x.js)(te.iA.accountid),
          [r, i] = (0, l.useState)(!1),
          [s, c] = (0, l.useState)(!1),
          [o, m] = (0, l.useState)(!1),
          [u, d] = (0, l.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? l.createElement(I.t, {
                size: "medium",
                position: "center",
                string: (0, A.we)("#Loading"),
              })
            : l.createElement(
                "div",
                { className: (0, ee.A)(Z().AdminPageCtn, ae().Ctn) },
                l.createElement(
                  "div",
                  { className: Z().PageTitle },
                  (0, A.we)("#MeetSteam_MainTitle"),
                ),
                l.createElement("hr", null),
                l.createElement(
                  "div",
                  { className: Z().ColumnCtn },
                  l.createElement(
                    "div",
                    { className: Z().LeftCol },
                    l.createElement(
                      "div",
                      { className: Z().SectionCtn },
                      l.createElement(
                        "h1",
                        null,
                        " ",
                        (0, A.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          l.createElement("br", null),
                        ),
                      ),
                      l.createElement(
                        "p",
                        { className: Z().IntroText },
                        (0, A.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    l.createElement(
                      "div",
                      { className: Z().SectionCtn },
                      l.createElement(ce, {
                        oRegistration: u,
                        fnSetRegistration: d,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: Z().SectionCtn },
                      l.createElement(se, {
                        oRegistration: u,
                        fnSetRegistration: d,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: (0, ee.A)(Z().SectionCtn, Z().ActionBar) },
                      l.createElement(
                        w.jn,
                        {
                          onClick: async () => {
                            c(!0), i(!1), m(!1);
                            const e = `${te.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", te.TS.SESSIONID),
                              t.append("registrationJson", JSON.stringify(u));
                            try {
                              const n = await h().post(e, t, {
                                withCredentials: !0,
                              });
                              1 != n.data.success
                                ? (console.error(
                                    "MeetSteamLanding failed " + n.data.success,
                                  ),
                                  i(!0))
                                : m(!0);
                            } catch (e) {
                              console.error(
                                "MeetSteamLanding failed caught",
                                e,
                              );
                            }
                            c(!1);
                          },
                        },
                        (0, A.we)("#Button_Submit"),
                      ),
                      s &&
                        l.createElement(I.t, {
                          size: "medium",
                          position: "center",
                          string: (0, A.we)("#Saving"),
                        }),
                      o &&
                        l.createElement(
                          "div",
                          null,
                          (0, A.we)("#Button_Saved"),
                        ),
                      r &&
                        l.createElement(
                          "div",
                          { className: Q.ErrorStylesWithIcon },
                          (0, A.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : l.createElement(
              "div",
              { className: ae().Ctn },
              (0, A.we)("#MeetSteam_closed"),
            );
      }
      function se(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = F();
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("h1", null, (0, A.we)("#MeetSteam_Events_Interest")),
          l.createElement(
            "p",
            null,
            (0, A.PP)("#MeetSteam_Events_title", "2025"),
          ),
          l.createElement(
            "p",
            null,
            l.createElement("span", { className: ae().Indicator }, "*"),
            " ",
            (0, A.PP)("#MeetSteam_Events_desc"),
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
                          { className: ae().Indicator },
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
                    l.createElement(w.Yh, {
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
                      tooltip: (0, A.we)("#MeetSteam_attend_ttip"),
                    }),
                  ),
                ),
              ),
            ),
          ),
          l.createElement("br", null),
          l.createElement(w.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, A.we)("#MeetSteam_others"),
          }),
        );
      }
      function ce(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, x.js)(te.iA.accountid),
          r = (function (e) {
            const t = (function () {
                const [e] = (0, l.useState)(
                  () =>
                    (0, te.Tc)("partner_user_email", "application_config") ||
                    "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, l.useState)(() =>
                  (0, te.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              a = (0, K.I)({
                queryKey: ["usePartnerEmailByID", e],
                queryFn: async () => {
                  const t = `${te.TS.PARTNER_BASE_URL}/meetsteam/ajaxgetuseremailforpartnerid`,
                    n = { sessionid: te.TS.SESSIONID, partnerid: e },
                    a = await h().get(t, { params: n });
                  return a?.data?.email || "";
                },
                enabled: e && e != n,
              });
            return e == n ? t : a.isLoading ? "" : a.data;
          })(t?.partner_id),
          [i, s] = (0, l.useState)(() =>
            Boolean((t.email_override && t.email_override != r) || !r),
          ),
          [c, o, m] = (0, le.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? l.createElement(
              "div",
              null,
              l.createElement("h1", null, (0, A.we)("#MeetSteam_You")),
              l.createElement("p", null, (0, A.we)("#MeetSteam_You_Desc")),
              l.createElement(oe, {
                nPartnerID: t.partner_id,
                label: (0, A.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              l.createElement(
                "div",
                { className: ae().EmailInfoRow },
                l.createElement(
                  "div",
                  { className: ae().EmailField },
                  l.createElement(w.pd, {
                    type: "string",
                    label: (0, A.we)("#MeetSteam_You_Email"),
                    disabled: !i,
                    value: t.email_override || r || "",
                    placeholder: (0, A.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !i &&
                  l.createElement(w.Yh, {
                    checked: i,
                    onChange: s,
                    label: (0, A.we)("#MeetSteam_You_Update"),
                    tooltip: (0, A.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              l.createElement(w.JU, null, (0, A.we)("#MeetSteam_NeverMet")),
              l.createElement(w.Yh, {
                label: (0, A.we)("#MeetSteam_NeverMetNo"),
                checked: c,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              l.createElement(
                w.JU,
                null,
                (0, A.we)("#MeetSteam_CapabableEnglish"),
              ),
              l.createElement(
                "div",
                { className: ae().RadioButtonCtn },
                l.createElement(w.Od, {
                  className: ae().RadioButtons,
                  checked: !o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, A.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                l.createElement(w.Od, {
                  className: ae().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, H.sf)(te.TS.LANGUAGE),
                    }),
                  label: (0, A.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              o &&
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("br", null),
                  l.createElement(
                    w.JU,
                    null,
                    (0, A.we)("#MeetSteam_LanguagePref"),
                  ),
                  l.createElement(re.Ng, {
                    selectedLang: m,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, A.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : l.createElement(I.t, {
              size: "medium",
              position: "center",
              string: (0, A.we)("#Loading"),
            });
      }
      function oe(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          r = (0, V.c)(te.iA.accountid);
        if (!r)
          return l.createElement(I.t, {
            size: "small",
            position: "center",
            string: (0, A.we)("#Loading"),
          });
        if (1 == r.length) return null;
        const i = [];
        return (
          r.forEach((e) =>
            i.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          l.createElement(w.m, {
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
      var me = n(20587);
      const ue = {
        YearlySurvery: (e = ":year") => `/${e}`,
        AdminDashboard: () => "/admin",
      };
      function de(e) {
        return (
          (0, l.useEffect)(() => {
            me.O3.Init();
          }, []),
          l.createElement(
            s.m,
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
                    l.createElement(c.z, {
                      ...e,
                      strConfigID: "application_config",
                    }),
                }),
                l.createElement(i.qh, {
                  exact: !0,
                  path: ue.AdminDashboard(),
                  component: G,
                }),
                l.createElement(i.qh, {
                  exact: !0,
                  path: ue.YearlySurvery(":year(\\d+)"),
                  component: ie,
                }),
                l.createElement(i.qh, { component: o.a }),
              ),
            ),
          )
        );
      }
    },
  },
]);
