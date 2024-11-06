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
      n.r(t), n.d(t, { MeetSteamRoutes: () => de, default: () => Ee });
      var a = n(43527),
        r = n(90626),
        l = n(17083),
        i = n(92757),
        s = n(11577),
        c = n(14932),
        o = n(97058),
        m = n(84811),
        u = n(95695),
        d = n.n(u),
        E = n(38135),
        g = n(45737),
        p = n.n(g),
        _ = n(24484),
        h = n(64753),
        v = n(41735),
        S = n.n(v),
        f = n(38390),
        y = n(17720),
        w = n(46575),
        b = n(96001),
        C = n(71541),
        N = n(24054),
        I = n(78395),
        M = n(21869),
        T = n(22797),
        A = n(26408),
        R = n(68797),
        D = n(61859),
        P = n(91675),
        k = n(30470);
      function L(e) {
        const t = y.b.InitFromClanID((0, N.H7)()),
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, _.Tc)("event_gids", "application_config"),
            );
            return e;
          })();
        return r.createElement(
          "div",
          null,
          r.createElement(
            "div",
            null,
            r.createElement(
              "a",
              {
                href: `${k.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
              },
              "Open Meet Steam Event Dashboard",
            ),
          ),
          n.map((e) => r.createElement(B, { gid: e, key: e })),
        );
      }
      function B(e) {
        const { gid: t } = e,
          n = y.b.InitFromClanID((0, N.H7)()),
          a = (0, b.a)(),
          l = (0, w.my)(a, (0, N.H7)(), t),
          i = (0, f.RR)(t),
          s = i.GetNameWithFallback(0),
          [c, o, m] = (0, h.uD)();
        return r.createElement(
          "div",
          null,
          r.createElement("hr", null),
          r.createElement("div", null, s),
          r.createElement("div", null),
          r.createElement(
            "div",
            null,
            r.createElement(
              "a",
              {
                href: `${k.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t}`,
              },
              "Edit Event",
            ),
          ),
          i.jsondata.meet_steam_groups?.length > 0
            ? r.createElement(
                r.Fragment,
                null,
                i.jsondata.meet_steam_groups.map((e) =>
                  r.createElement(F, {
                    key: e.group_id,
                    group: e,
                    rgAvailability: l,
                  }),
                ),
              )
            : r.createElement("div", null, "This has no sessions defined"),
          r.createElement(
            C.$n,
            { onClick: o },
            "Invite to ",
            s,
            r.createElement(A.o, {
              tooltip:
                "This will email and show the users on their dashboard when the event is live.",
            }),
          ),
          r.createElement(
            M.E,
            { active: c },
            r.createElement(O, { hideModal: m, gid: t }),
          ),
        );
      }
      function F(e) {
        const { group: t, rgAvailability: n } = e,
          a = D.NT.GetWithFallback(t?.localized_session_title, 0);
        return r.createElement(
          "div",
          null,
          r.createElement("div", null, a),
          r.createElement(
            "div",
            null,
            "Sessions Instances: ",
            t.sessions.length,
          ),
          r.createElement(
            r.Fragment,
            null,
            t.sessions.map((e) =>
              r.createElement(x, { key: e.id, session: e, rgAvailability: n }),
            ),
          ),
        );
      }
      function x(e) {
        const { session: t, rgAvailability: n } = e,
          a = n?.find((e) => e.session_id == t.id);
        return r.createElement(
          "div",
          null,
          r.createElement(
            "div",
            null,
            (0, D.TW)(t.rtime_start),
            " for ",
            (0, P.qZ)(t.rtime_end - t.rtime_start),
          ),
          r.createElement(
            "div",
            null,
            t.max_capacity - (a?.guest_count || 0),
            " / ",
            t.max_capacity,
          ),
        );
      }
      function O(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(""),
          [i, s] = (0, r.useState)(!1),
          [c, o] = (0, r.useState)(null),
          [m, u] = (0, r.useState)(null);
        return r.createElement(
          I.o0,
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
              t.append("sessionid", k.TS.SESSIONID),
                t.append("gid", n),
                t.append("accounts", e);
              const r = `${k.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
              try {
                const e = await S().post(r, t, { withCredentials: !0 });
                if (1 == e?.data?.success)
                  o(e.data.rgInvitedAccounts.length),
                    u(e.data.rgSkippedAccounts.length);
                else {
                  let t = (0, R.H)(e);
                  console.error(
                    "DisplayPartnerEventRow error: " + t.strErrorMsg,
                    t,
                  );
                }
              } catch (e) {
                let t = (0, R.H)(e);
                console.error(
                  "DisplayPartnerEventRow error: " + t.strErrorMsg,
                  t,
                );
              }
              s(!1);
            },
            onCancel: () => {
              o(null), u(null), s(!1), l(""), t();
            },
          },
          r.createElement("textarea", {
            cols: 120,
            rows: 5,
            onChange: (e) => l(e.currentTarget.value),
            value: a,
            autoFocus: !0,
          }),
          null != c &&
            r.createElement(
              "div",
              null,
              "Invited ",
              c.toLocaleString(),
              " accounts, skipped previously invited ",
              m.toLocaleString(),
            ),
          i &&
            r.createElement(T.t, {
              size: "small",
              position: "center",
              string: (0, D.we)("#Saving"),
            }),
        );
      }
      var U = n(20194),
        Y = n(78327);
      function $() {
        const [e] = (0, r.useState)(() =>
          (0, Y.Tc)("events_list", "application_config"),
        );
        return e;
      }
      function W(e, t) {
        const n = (0, U.I)({
          queryKey: ["usePartnerEmailAndNameViaPartnerID", e, t],
          queryFn: async () => {
            const n = `${Y.TS.PARTNER_BASE_URL}/meetsteam/ajaxgetuseremailforpartnerid`,
              a = { accountid: e, sessionid: Y.TS.SESSIONID, partnerid: t },
              r = await S().get(n, { params: a });
            return r?.data?.data;
          },
          enabled: Boolean(t && e),
        });
        return n.isLoading ? null : n.data;
      }
      var j = n(48479),
        H = n(14336),
        q = n(22837),
        G = n(32179),
        z = n(29233),
        J = n(9161);
      function V(e) {
        const t = $(),
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, _.Tc)("interest_results", "application_config"),
            );
            return (0, r.useMemo)(
              () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
              [e],
            );
          })(),
          [a, l] = (0, r.useState)(""),
          i = (0, r.useMemo)(() => {
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
        return r.createElement(
          "div",
          null,
          r.createElement(C.pd, {
            type: "text",
            value: a,
            onChange: (e) => l(e.currentTarget.value.trim()),
            label: "Filter",
          }),
          t
            .filter(
              (e) => 0 == a.length || e.name.includes(a) || e.id.includes(a),
            )
            .map((e) =>
              r.createElement(K, {
                key: e.id,
                conf: e,
                nInterestCount: i.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
        );
      }
      function K(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return r.createElement(
          j.qx,
          {
            title: `${t.name} in ${t.place} with Interest: ${n.toLocaleString()}`,
            bStartMinimized: !0,
          },
          r.createElement(X, { conf: t, rgSurveyInterest: a }),
        );
      }
      function X(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, r.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          );
        return a && 0 != a.length
          ? r.createElement(
              "div",
              null,
              r.createElement(
                C.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push(["AccountID", "Name", "Partner ID", "Partner Name"]),
                      a.forEach((t) => {
                        const n = [],
                          a = new z.b2(t.steamid);
                        n.push("" + a.GetAccountID());
                        const r = (0, H.z0)(a.GetAccountID());
                        n.push(r?.m_strPlayerName ? r.m_strPlayerName : "");
                        const l = t.results.partner_id;
                        n.push("" + l);
                        const i = (0, G.Yd)(l);
                        i && n.push(i?.name), e.push(n);
                      });
                    const n = t.name.replace(" ", "_") + "_appeals_data.csv";
                    J.g.WriteCSVToFile(e, n);
                  },
                },
                "Export to CSV (wait until the table populates fully)",
              ),
              r.createElement(
                "table",
                null,
                r.createElement(
                  "thead",
                  null,
                  r.createElement(
                    "tr",
                    null,
                    r.createElement("th", null, "Account Name"),
                    r.createElement("th", null, "Actual Name"),
                    r.createElement("td", null, "Have you met steam?"),
                    r.createElement("th", null, "Email"),
                    r.createElement("th", null, "Attending count?"),
                    r.createElement("th", null, "Partner"),
                    r.createElement("th", null, "Partner Revenue"),
                    r.createElement("th", null, "Biggest Game"),
                    r.createElement("th", null, "Alt Language"),
                    r.createElement("th", null, "Country"),
                    r.createElement("th", null, "Submit Survey Time"),
                  ),
                ),
                r.createElement(
                  "tbody",
                  null,
                  a.map((e) =>
                    r.createElement(Q, {
                      key: t.id + "_" + e.steamid,
                      strsteamid: e.steamid,
                      partnerID: e.results.partner_id,
                      registration: e.results,
                    }),
                  ),
                ),
              ),
            )
          : r.createElement("div", null, "No users with interest");
      }
      function Q(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          l = (0, H.hW)(t),
          [i] = (0, G.UA)(n),
          s = new z.b2(t),
          c = (0, H.js)(s.GetAccountID()),
          o = W(s.GetAccountID(), n);
        return r.createElement(
          "tr",
          null,
          r.createElement(
            "td",
            null,
            o?.accountname || c.data?.m_strAccountName,
          ),
          r.createElement("td", null, o?.realname || l.data?.m_strPlayerName),
          r.createElement("td", null, a.have_you_met_steam ? "YES" : "NO"),
          r.createElement("td", null, a.email_override || o?.email),
          r.createElement("td", null, a.attending.length),
          r.createElement("td", null, i?.name || n),
          r.createElement("td", null, "todo"),
          r.createElement("td", null, "todo"),
          r.createElement(
            "td",
            null,
            a.english_not_good && a.preferred_language
              ? (0, q.Lg)(a.preferred_language)
              : "",
          ),
          r.createElement("td", null, a.country_code),
          r.createElement("td", null, (0, D.TW)(a.submit_time)),
        );
      }
      function Z(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Survey Results",
              key: "survey",
              contents: r.createElement(m.tH, null, r.createElement(V, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: r.createElement(m.tH, null, r.createElement(L, null)),
              onClick: t,
            },
          ];
        return r.createElement(
          "div",
          { className: p().AdminPageCtn },
          r.createElement(
            "div",
            { className: p().PageTitle },
            "Meet Steam Admin Dashboard ",
            (0, _.Fd)("current_year", "application_config"),
          ),
          r.createElement("hr", null),
          r.createElement(E.V, { tabs: n }),
          r.createElement("div", { className: d().ClearThings }),
          r.createElement("br", null),
        );
      }
      var ee = n(65946),
        te = n(79645),
        ne = n(1909),
        ae = n(56330),
        re = n(52038),
        le = n(85761),
        ie = n.n(le);
      function se(e) {
        const t = (function () {
            const [e] = (0, r.useState)(() =>
              (0, Y.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, Y.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, H.js)(Y.iA.accountid),
          [l, i] = (0, r.useState)(!1),
          [s, c] = (0, r.useState)(!1),
          [o, m] = (0, r.useState)(!1),
          [u, d] = (0, r.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? r.createElement(T.t, {
                size: "medium",
                position: "center",
                string: (0, D.we)("#Loading"),
              })
            : r.createElement(
                "div",
                { className: (0, re.A)(p().AdminPageCtn, ie().Ctn) },
                r.createElement(
                  "div",
                  { className: p().PageTitle },
                  (0, D.we)("#MeetSteam_MainTitle"),
                ),
                r.createElement("hr", null),
                r.createElement(
                  "div",
                  { className: p().ColumnCtn },
                  r.createElement(
                    "div",
                    { className: p().LeftCol },
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(
                        "h1",
                        null,
                        " ",
                        (0, D.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          r.createElement("br", null),
                        ),
                      ),
                      r.createElement(
                        "p",
                        { className: p().IntroText },
                        (0, D.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(oe, {
                        oRegistration: u,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(ce, {
                        oRegistration: u,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: (0, re.A)(p().SectionCtn, p().ActionBar) },
                      r.createElement(
                        C.jn,
                        {
                          onClick: async () => {
                            c(!0), i(!1), m(!1);
                            const e = `${Y.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", Y.TS.SESSIONID),
                              t.append("registrationJson", JSON.stringify(u));
                            try {
                              const n = await S().post(e, t, {
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
                        (0, D.we)("#Button_Submit"),
                      ),
                      s &&
                        r.createElement(T.t, {
                          size: "medium",
                          position: "center",
                          string: (0, D.we)("#Saving"),
                        }),
                      o &&
                        r.createElement(
                          "div",
                          null,
                          (0, D.we)("#Button_Saved"),
                        ),
                      l &&
                        r.createElement(
                          "div",
                          { className: ae.ErrorStylesWithIcon },
                          (0, D.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : r.createElement(
              "div",
              { className: ie().Ctn },
              (0, D.we)("#MeetSteam_closed"),
            );
      }
      function ce(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = $();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("h1", null, (0, D.we)("#MeetSteam_Events_Interest")),
          r.createElement(
            "p",
            null,
            (0, D.PP)("#MeetSteam_Events_title", "2025"),
          ),
          r.createElement(
            "p",
            null,
            r.createElement("span", { className: ie().Indicator }, "*"),
            " ",
            (0, D.PP)("#MeetSteam_Events_desc"),
          ),
          r.createElement(
            "table",
            null,
            r.createElement(
              "thead",
              null,
              r.createElement(
                "tr",
                null,
                r.createElement("th", null),
                r.createElement("th", null),
                r.createElement("th", null),
                r.createElement("th", null),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              a.map((e) =>
                r.createElement(
                  "tr",
                  { key: e.id },
                  r.createElement(
                    "td",
                    null,
                    e.attending
                      ? r.createElement(
                          "span",
                          { className: ie().Indicator },
                          "*",
                        )
                      : "",
                  ),
                  r.createElement(
                    "td",
                    null,
                    r.createElement("div", null, e.name),
                    r.createElement("div", null, e.place),
                  ),
                  r.createElement(
                    "td",
                    null,
                    r.createElement("div", null, e.time),
                  ),
                  r.createElement(
                    "td",
                    null,
                    r.createElement(C.Yh, {
                      checked: t.attending?.includes(e.id),
                      onChange: (a) => {
                        let r = t.attending ? [...t.attending] : [];
                        a && !r.includes(e.id)
                          ? (r.push(e.id), n({ ...t, attending: r }))
                          : !a &&
                            r.includes(e.id) &&
                            (r.splice(r.indexOf(e.id), 1),
                            n({ ...t, attending: r }));
                      },
                      tooltip: (0, D.we)("#MeetSteam_attend_ttip"),
                    }),
                  ),
                ),
              ),
            ),
          ),
          r.createElement("br", null),
          r.createElement(C.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, D.we)("#MeetSteam_others"),
          }),
        );
      }
      function oe(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, H.js)(Y.iA.accountid),
          l = (function (e) {
            const t = (function () {
                const [e] = (0, r.useState)(
                  () =>
                    (0, Y.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, r.useState)(() =>
                  (0, Y.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              a = W(Y.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [i, s] = (0, r.useState)(() =>
            Boolean((t.email_override && t.email_override != l) || !l),
          ),
          [c, o, m] = (0, ee.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? r.createElement(
              "div",
              null,
              r.createElement("h1", null, (0, D.we)("#MeetSteam_You")),
              r.createElement("p", null, (0, D.we)("#MeetSteam_You_Desc")),
              r.createElement(me, {
                nPartnerID: t.partner_id,
                label: (0, D.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              r.createElement(
                "div",
                { className: ie().EmailInfoRow },
                r.createElement(
                  "div",
                  { className: ie().EmailField },
                  r.createElement(C.pd, {
                    type: "string",
                    label: (0, D.we)("#MeetSteam_You_Email"),
                    disabled: !i,
                    value: t.email_override || l || "",
                    placeholder: (0, D.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !i &&
                  r.createElement(C.Yh, {
                    checked: i,
                    onChange: s,
                    label: (0, D.we)("#MeetSteam_You_Update"),
                    tooltip: (0, D.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              r.createElement(C.JU, null, (0, D.we)("#MeetSteam_NeverMet")),
              r.createElement(C.Yh, {
                label: (0, D.we)("#MeetSteam_NeverMetNo"),
                checked: c,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              r.createElement(
                C.JU,
                null,
                (0, D.we)("#MeetSteam_CapabableEnglish"),
              ),
              r.createElement(
                "div",
                { className: ie().RadioButtonCtn },
                r.createElement(C.Od, {
                  className: ie().RadioButtons,
                  checked: !o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, D.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                r.createElement(C.Od, {
                  className: ie().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, q.sf)(Y.TS.LANGUAGE),
                    }),
                  label: (0, D.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              o &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("br", null),
                  r.createElement(
                    C.JU,
                    null,
                    (0, D.we)("#MeetSteam_LanguagePref"),
                  ),
                  r.createElement(ne.Ng, {
                    selectedLang: m,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, D.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : r.createElement(T.t, {
              size: "medium",
              position: "center",
              string: (0, D.we)("#Loading"),
            });
      }
      function me(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          l = (0, te.c)(Y.iA.accountid);
        if (!l)
          return r.createElement(T.t, {
            size: "small",
            position: "center",
            string: (0, D.we)("#Loading"),
          });
        if (1 == l.length) return null;
        const i = [];
        return (
          l.forEach((e) =>
            i.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          r.createElement(C.m, {
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
      var ue = n(20587);
      const de = {
        YearlySurvery: (e = ":year") => `/${e}`,
        AdminDashboard: () => "/admin",
      };
      function Ee(e) {
        return (
          (0, r.useEffect)(() => {
            ue.O3.Init();
          }, []),
          r.createElement(
            s.m,
            null,
            r.createElement(
              l.Kd,
              { basename: (0, a.C)() + "meetsteam/" },
              r.createElement(
                i.dO,
                null,
                r.createElement(i.qh, {
                  exact: !0,
                  path: a.B.DiagData(),
                  render: (e) =>
                    r.createElement(c.z, {
                      ...e,
                      strConfigID: "application_config",
                    }),
                }),
                r.createElement(i.qh, {
                  exact: !0,
                  path: de.AdminDashboard(),
                  component: Z,
                }),
                r.createElement(i.qh, {
                  exact: !0,
                  path: de.YearlySurvery(":year(\\d+)"),
                  component: se,
                }),
                r.createElement(i.qh, { component: o.a }),
              ),
            ),
          )
        );
      }
    },
    79645: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => m, c: () => o });
      var a = n(41735),
        r = n.n(a),
        l = n(20194),
        i = n(68797),
        s = n(30470),
        c = n(78327);
      function o(e) {
        const { data: t, isLoading: n } = (0, l.I)({
          queryKey: ["PartnerInfoList", e],
          queryFn: () =>
            (async function (e) {
              const t = { accountid: e, origin: self.origin };
              let n = `${s.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
              "partnerweb" == (0, c.yK)() &&
                (n = `${s.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
              const a = await r().get(n, { params: t, withCredentials: !0 });
              if (
                !a ||
                200 != a.status ||
                1 != a.data?.success ||
                !a.data?.partners
              )
                throw `Load single user partner info failed ${((0, i.H))(a).strErrorMsg}`;
              return a.data.partners;
            })(e),
        });
        return n ? null : t;
      }
      function m(e, t) {
        const n = o(e);
        return n?.find((e) => e.partnerid === t);
      }
    },
    9161: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => l });
      var a = n(40323),
        r = n.n(a);
      class l {
        static ParseCSVFile(e) {
          return new Promise((t, n) => {
            const a = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => n({ errors: [e] }),
            };
            r().parse(e, a);
          });
        }
        static ReadFile(e) {
          return new Promise((t, n) => {
            const a = new FileReader();
            (a.onload = (e) => t(a.result)), a.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let n = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            n.href = t;
          }
          n.setAttribute("download", t), n.click();
          try {
            document.removeChild(n);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const n = r().unparse(e, { header: !0 });
          l.WriteFile(new Blob([n], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let a =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (a += new XMLSerializer().serializeToString(e)),
            l.WriteFile(
              new Blob([a], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
  },
]);
