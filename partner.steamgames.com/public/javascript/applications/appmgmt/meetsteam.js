/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6762],
  {
    30565: (e) => {
      e.exports = {
        EventList: "_3iKeBOMuwqPC87BLxvCKll",
        EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
        EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
        Title: "_1bLTz07sQnRA0DjTpjXCza",
      };
    },
    34283: (e) => {
      e.exports = { ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_" };
    },
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
    63658: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => Re, default: () => Me });
      var a = n(43527),
        l = n(90626),
        r = n(17083),
        s = n(92757),
        i = n(11577),
        c = n(14932),
        o = n(97058),
        u = n(84811),
        m = n(95695),
        d = n.n(m),
        E = n(38135),
        p = n(45737),
        g = n.n(p),
        h = n(24484),
        v = n(64753),
        _ = n(38390),
        S = n(17720),
        f = n(30621),
        y = n(96001),
        I = n(71541),
        b = n(30565),
        w = n.n(b),
        D = n(44736),
        A = n(21869),
        C = n(26408),
        T = n(61859),
        N = n(91675),
        P = n(30470),
        B = n(41735),
        R = n.n(B),
        M = n(78395),
        L = n(22797),
        k = n(68797),
        F = n(9161),
        O = n(34283),
        U = n.n(O);
      function x(e) {
        const { hideModal: t, gid: n } = e,
          [a, r] = (0, l.useState)(null),
          [s, i] = (0, l.useState)(!1),
          [c, o] = (0, l.useState)(null),
          [u, m] = (0, l.useState)(null);
        return l.createElement(
          M.o0,
          {
            strTitle: "Invite Users",
            bOKDisabled: !a || 0 == a.length || null != c,
            strCancelButtonText: null !== c ? "Close" : "Cancel",
            onOK: async () => {
              i(!0);
              const e = await (async function (e, t) {
                const n = t.map((e) => e.nAccountID).join(","),
                  a = t.map((e) => e.nPartnerID).join(","),
                  l = t.map((e) => e.strEmailOverride).join(",");
                let r = new FormData();
                r.append("sessionid", P.TS.SESSIONID),
                  r.append("gid", e),
                  r.append("accounts", n),
                  r.append("partnerids", a),
                  r.append("emailoverride", l);
                const s = `${P.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
                try {
                  const e = await R().post(s, r, { withCredentials: !0 });
                  if (1 != e?.data?.success) {
                    let t = (0, k.H)(e);
                    console.error(
                      "DisplayPartnerEventRow error: " + t.strErrorMsg,
                      t,
                    );
                  }
                  return e?.data;
                } catch (e) {
                  let t = (0, k.H)(e);
                  console.error(
                    "DisplayPartnerEventRow error: " + t.strErrorMsg,
                    t,
                  );
                }
                return null;
              })(n, a);
              1 == e?.success &&
                (o(e.rgInvitedAccounts.length), m(e.rgSkippedAccounts.length)),
                i(!1);
            },
            onCancel: () => {
              o(null), m(null), i(!1), r(null), t();
            },
          },
          null == a
            ? l.createElement($, { setInvites: r })
            : l.createElement(G, { rgInvites: a }),
          null != c &&
            l.createElement(
              "div",
              null,
              "Invited ",
              c.toLocaleString(),
              " accounts, skipped previously invited ",
              u.toLocaleString(),
            ),
          s &&
            l.createElement(L.t, {
              size: "small",
              position: "center",
              string: (0, T.we)("#Saving"),
            }),
        );
      }
      function G(e) {
        const { rgInvites: t } = e;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("div", null, "Total Invites Parsed: ", t.length, " "),
          l.createElement(
            "table",
            null,
            l.createElement(
              "thead",
              null,
              l.createElement(
                "tr",
                null,
                l.createElement("th", null, "AccountID"),
                l.createElement("th", null, "PartnerID"),
                l.createElement("th", null, "Email Override"),
              ),
            ),
            l.createElement(
              "tbody",
              null,
              t.map((e, t) =>
                l.createElement(
                  "tr",
                  { key: "invite" + e.nAccountID + "_" + t },
                  l.createElement("td", null, e.nAccountID),
                  l.createElement("td", null, e.nPartnerID),
                  l.createElement("td", null, e.strEmailOverride),
                ),
              ),
            ),
          ),
        );
      }
      function $(e) {
        const { setInvites: t } = e;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "div",
            null,
            "Format for CSV File, please use the template below:",
          ),
          l.createElement(
            "ul",
            null,
            l.createElement(
              "li",
              null,
              l.createElement("b", null, "nAccountID"),
              " - required, 32-bit integer value, not the 64-bit steam id",
            ),
            l.createElement(
              "li",
              null,
              l.createElement("b", null, "nPartnerID"),
              " - (preferred for biz contact)",
            ),
            l.createElement(
              "li",
              null,
              l.createElement("b", null, "strOverrideEmail"),
              " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
            ),
          ),
          l.createElement("br", null),
          l.createElement(
            "a",
            {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation();
                const t = [];
                t.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                  t.push(["388445686", "1", "adils@valvesoftware.com"]);
                F.g.WriteCSVToFile(t, "invite_template.csv");
              },
            },
            "Download Template Example",
          ),
          l.createElement("br", null),
          l.createElement("br", null),
          l.createElement(
            I.$n,
            null,
            l.createElement(
              "label",
              {
                className: U().ImportButtonLabel,
                htmlFor: "import-discount-input",
              },
              "Choose CSV File",
              l.createElement("input", {
                id: "import-discount-input",
                type: "file",
                style: { display: "none" },
                onChange: async (e) => {
                  if (e.target.files.length >= 1) {
                    const n = e.target.files[0],
                      a = await F.g.ParseCSVFile(n);
                    if (a?.data) {
                      const e = new Array();
                      a.data.forEach((t) => {
                        if (t.nAccountID) {
                          const n = {
                            nAccountID: Number.parseInt(t.nAccountID),
                          };
                          t.nPartnerID &&
                            (n.nPartnerID = Number.parseInt(t.nPartnerID)),
                            t.strEmailOverride &&
                              (n.strEmailOverride = t.strEmailOverride),
                            e.push(n);
                        }
                      }),
                        t(e);
                    }
                  }
                },
              }),
            ),
          ),
        );
      }
      var W = n(56545),
        Y = n(85737);
      function j(e) {
        const t = S.b.InitFromClanID((0, D.H7)()),
          n = (function () {
            const [e] = (0, l.useState)(() =>
              (0, h.Tc)("event_gids", "application_config"),
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
                href: `${P.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
              },
              "Open Meet Steam Event Dashboard",
            ),
          ),
          l.createElement("hr", null),
          n.map((e) => l.createElement(V, { gid: e, key: e })),
        );
      }
      function V(e) {
        const { gid: t } = e,
          n = S.b.InitFromClanID((0, D.H7)()),
          a = (0, y.a)(),
          r = (0, f.m)(a, (0, D.H7)(), t),
          s = r.isSuccess ? r.data : null,
          i = (0, _.RR)(t),
          c = i.GetNameWithFallback(0),
          [o, u, m] = (0, v.uD)(),
          d = (0, l.useMemo)(() => {
            const e = new Array();
            return (
              i.jsondata.meet_steam_groups?.forEach((t) => {
                t.sessions.forEach((n, a) => {
                  0 == a
                    ? e.push({ group: t, session: n })
                    : e.push({ session: n });
                });
              }),
              e
            );
          }, [i.jsondata.meet_steam_groups]);
        return l.createElement(
          "div",
          { className: w().EventRow },
          l.createElement(
            "div",
            { className: w().EventMainDetails },
            l.createElement("div", { className: w().Title }, c),
            l.createElement(
              "div",
              { className: w().StartDate },
              (0, T.TW)(i?.startTime),
            ),
            l.createElement(
              "div",
              null,
              " | ",
              l.createElement(
                "a",
                {
                  href: `${P.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t}`,
                },
                "Edit",
              ),
            ),
            l.createElement(
              "div",
              null,
              " | ",
              l.createElement(
                "a",
                { href: `${P.TS.STORE_BASE_URL}meetsteam/${t}` },
                "View",
              ),
            ),
            Boolean(i.BIsUnlistedEvent()) && l.createElement(q, { gid: t }),
          ),
          l.createElement(
            "div",
            null,
            l.createElement(
              "table",
              { className: "landingTable" },
              l.createElement(
                "thead",
                null,
                l.createElement(
                  "tr",
                  null,
                  l.createElement("th", null, "Group"),
                  l.createElement("th", null, "Session Start"),
                  l.createElement("th", null, "Session Duration"),
                  l.createElement("th", null, "Seats"),
                  l.createElement("th", null, "Invite"),
                  l.createElement("th", null, "Attendee"),
                ),
              ),
              l.createElement(
                "tbody",
                null,
                l.createElement(
                  "tr",
                  null,
                  Boolean(d.length > 0)
                    ? l.createElement(z, {
                        key: d[0].session.id,
                        group: d[0].group,
                        session: d[0].session,
                        rgAvailability: s,
                      })
                    : l.createElement(
                        l.Fragment,
                        null,
                        l.createElement("td", null, "None"),
                        l.createElement("td", null),
                        l.createElement("td", null),
                        l.createElement("td", null),
                      ),
                  l.createElement(
                    "td",
                    null,
                    Boolean(
                      i?.BIsUnlistedEvent() &&
                        i.jsondata.meet_steam_groups?.length > 0,
                    )
                      ? l.createElement(
                          I.$n,
                          { onClick: u },
                          "Invite via CSV",
                          l.createElement(C.o, {
                            tooltip:
                              "This will email invitee and show the users on their dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                          }),
                        )
                      : l.createElement(
                          "div",
                          null,
                          "Invite Disabled. Event need to publish into Unlisted State",
                        ),
                    l.createElement(
                      A.E,
                      { active: o },
                      l.createElement(x, { hideModal: m, gid: t }),
                    ),
                  ),
                  l.createElement("td", null, "TODO"),
                ),
                d
                  .filter((e, t) => t > 0)
                  .map((e) =>
                    l.createElement(
                      "tr",
                      { key: e.session.id },
                      l.createElement(z, {
                        group: e.group,
                        session: e.session,
                        rgAvailability: s,
                      }),
                      l.createElement("td", null),
                    ),
                  ),
              ),
            ),
          ),
        );
      }
      function q(e) {
        const { gid: t } = e,
          n = (0, y.a)(),
          [a, r] = (0, l.useState)(!1),
          [s, i] = (0, l.useState)(null);
        return l.createElement(
          "div",
          null,
          " | ",
          l.createElement(
            "a",
            {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation(), r(!0);
                const a = await (async function (e, t) {
                  const n = W.w.Init(Y.VI),
                    a = S.b.InitFromClanID((0, D.H7)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(a.ConvertTo64BitString());
                  const l = await Y.ZK.TestFireEmails(e, n);
                  return console.log("test fire", l), l.GetEResult();
                })(n, t);
                i(a);
              },
            },
            "Email Self",
          ),
          l.createElement(
            A.E,
            { active: a },
            l.createElement(
              M.o0,
              {
                bAlertDialog: !0,
                strTitle: "Test Emails",
                closeModal: () => {
                  r(!1), i(null);
                },
                onOK: () => {},
              },
              l.createElement(
                "div",
                null,
                "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
              ),
              Boolean(null == s) &&
                l.createElement(L.t, { string: (0, T.we)("#Loading") }),
              Boolean(1 == s) &&
                l.createElement("div", null, "Test Emails Sent"),
              Boolean(s && 1 != s) &&
                l.createElement(
                  "div",
                  null,
                  "Email Failed to Send. Check console",
                ),
            ),
          ),
        );
      }
      function z(e) {
        const { group: t, rgAvailability: n, session: a } = e,
          r = T.NT.GetWithFallback(t?.localized_session_title, 0),
          s = T.NT.GetWithFallback(t?.localized_session_description, 0),
          i = n?.find((e) => e.session_id == a.id);
        return l.createElement(
          l.Fragment,
          null,
          Boolean(t)
            ? l.createElement(
                "td",
                null,
                r,
                l.createElement(C.o, { tooltip: s }),
              )
            : l.createElement("td", null),
          l.createElement(
            "td",
            null,
            l.createElement(
              "span",
              null,
              (0, T.TW)(a.rtime_start) +
                "@" +
                (0, N.KC)(a.rtime_start, { bForce24HourClock: !1 }),
              " (local time)",
            ),
          ),
          l.createElement("td", null, (0, N.qZ)(a.rtime_end - a.rtime_start)),
          l.createElement(
            "td",
            null,
            i?.guest_count || 0,
            " / ",
            a.max_capacity,
          ),
        );
      }
      var H = n(20194),
        K = n(78327);
      function J() {
        const [e] = (0, l.useState)(() =>
          (0, K.Tc)("events_list", "application_config"),
        );
        return e;
      }
      function Q(e, t) {
        const n = (0, H.I)({
          queryKey: ["usePartnerEmailAndNameViaPartnerID", e, t],
          queryFn: async () => {
            const n = `${K.TS.PARTNER_BASE_URL}/meetsteam/ajaxgetuseremailforpartnerid`,
              a = { accountid: e, sessionid: K.TS.SESSIONID, partnerid: t },
              l = await R().get(n, { params: a });
            return l?.data?.data;
          },
          enabled: Boolean(t && e),
        });
        return n.isLoading ? null : n.data;
      }
      function X(e, t, n) {
        return e.getQueryData(["usePartnerEmailAndNameViaPartnerID", t, n]);
      }
      function Z(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      var ee = n(48479),
        te = n(14336),
        ne = n(22837),
        ae = n(32179),
        le = n(29233),
        re = n(55263),
        se = n(29863),
        ie = n(75233);
      function ce(e) {
        const t = J(),
          n = (function () {
            const [e] = (0, l.useState)(() =>
              (0, h.Tc)("interest_results", "application_config"),
            );
            return (0, l.useMemo)(
              () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
              [e],
            );
          })(),
          [a, r] = (0, l.useState)(""),
          s = (0, l.useMemo)(() => {
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
          { className: w().EventList },
          l.createElement(I.pd, {
            type: "text",
            value: a,
            onChange: (e) => r(e.currentTarget.value.trim()),
            label: "Filter",
          }),
          l.createElement(
            "div",
            null,
            "Total Survey Responses: ",
            (n?.length || 0).toLocaleString(),
          ),
          t
            .filter(
              (e) => 0 == a.length || e.name.includes(a) || e.id.includes(a),
            )
            .map((e) =>
              l.createElement(oe, {
                key: e.id,
                conf: e,
                nInterestCount: s.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          l.createElement(ve, { rgSurveyInterest: n }),
        );
      }
      function oe(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return l.createElement(
          ee.qx,
          { title: `${t.name}: ${n.toLocaleString()}`, bStartMinimized: !0 },
          l.createElement(me, { conf: t, rgSurveyInterest: a }),
        );
      }
      function ue(e) {
        if ("number" == typeof e) return e;
        const t = e.slice(-1).toUpperCase(),
          n = parseFloat(e.slice(0, -1));
        switch (t) {
          case "K":
            return 1e3 * n;
          case "M":
            return 1e6 * n;
          case "B":
            return 1e9 * n;
          default:
            return parseFloat(e);
        }
      }
      function me(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, ie.jE)(),
          r = (0, l.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          );
        return r && 0 != r.length
          ? l.createElement(
              "div",
              null,
              l.createElement(
                I.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push([
                      "AccountID",
                      "Partner ID",
                      "Email Override",
                      "Account Name",
                      "Name",
                      "Have you met steam",
                      "Attending Other Event Count",
                      "Country",
                      "Alt Language",
                      "Partner Name",
                      "Gross USD",
                      "Best AppID",
                      "Long Term Sales Rank",
                    ]),
                      r.forEach((t) => {
                        const n = [],
                          l = new le.b2(t.steamid);
                        n.push("" + l.GetAccountID());
                        const r = (0, te.z0)(l.GetAccountID()),
                          s = t.results.partner_id;
                        n.push("" + s);
                        const i = t.results.email_override || "";
                        n.push("" + i),
                          n.push(r?.m_strPlayerName ? r.m_strPlayerName : "");
                        const c = X(a, l.GetAccountID(), s);
                        n.push(c ? c.realname : ""),
                          n.push(t.results.have_you_met_steam ? "yes" : "no"),
                          n.push("" + t.results.attending?.length),
                          n.push(t.results.country_code),
                          n.push(
                            t.results.preferred_language
                              ? (0, ne.Lg)(t.results.preferred_language)
                              : "",
                          );
                        const o = (0, ae.Yd)(s);
                        n.push(o ? o.name : "");
                        const u = Z(a, s);
                        u
                          ? (n.push("" + ue(u.strGrossUSD)),
                            n.push("" + u.nBestAppID),
                            n.push("" + u.nBestAppLongTermSalesRank))
                          : (n.push(""), n.push(""), n.push("")),
                          e.push(n);
                      });
                    const n =
                      t.name.replace(" ", "_") + "_conference_interest.csv";
                    F.g.WriteCSVToFile(e, n);
                  },
                },
                "Export to CSV (wait until the table populates fully)",
              ),
              l.createElement(
                "table",
                { className: "landingTable" },
                l.createElement(
                  "thead",
                  null,
                  l.createElement(
                    "tr",
                    null,
                    l.createElement("th", null, "Name and Email"),
                    l.createElement("th", null, "Have you met steam?"),
                    l.createElement("th", null, "Partner"),
                    l.createElement("th", null, "Partner Revenue"),
                    l.createElement("th", null, "Biggest Game"),
                    l.createElement("th", null, "Long Term Sales Rank"),
                    l.createElement("th", null, "Attending count?"),
                    l.createElement("th", null, "Alt Language"),
                    l.createElement("th", null, "Country"),
                    l.createElement("th", null, "Submit Survey Time"),
                  ),
                ),
                l.createElement(
                  "tbody",
                  null,
                  r.map((e) =>
                    l.createElement(de, {
                      key: t.id + "_" + e.steamid,
                      strsteamid: e.steamid,
                      partnerID: e.results.partner_id,
                      registration: e.results,
                    }),
                  ),
                ),
              ),
            )
          : l.createElement("div", null, "No users with interest");
      }
      function de(e) {
        const { partnerID: t, registration: n } = e;
        return l.createElement(
          "tr",
          null,
          l.createElement("td", null, l.createElement(Ee, { ...e })),
          l.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          l.createElement(pe, { nPartnerID: t }),
          l.createElement("td", null, n.attending.length),
          l.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, ne.Lg)(n.preferred_language)
              : "",
          ),
          l.createElement("td", null, n.country_code),
          l.createElement("td", null, (0, T.TW)(n.submit_time)),
        );
      }
      function Ee(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          r = (0, te.hW)(t),
          s = Q(new le.b2(t).GetAccountID(), n),
          i = s?.realname || r.data?.m_strPlayerName || s?.accountname;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("span", null, i),
          l.createElement("br", null),
          l.createElement("span", null, a.email_override || s?.email),
        );
      }
      function pe(e) {
        const { nPartnerID: t } = e,
          [n] = (0, ae.UA)(t),
          a = (function (e) {
            const t = (0, H.I)({
              queryKey: ["usePartnerRevAndBestAppSlow", e],
              queryFn: async () => {
                const t = `${K.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
                  n = { sessionid: K.TS.SESSIONID, partnerid: e },
                  a = await R().get(t, { params: n });
                return a?.data?.data;
              },
              enabled: Boolean(e),
            });
            return t.isLoading ? null : t.data;
          })(t);
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("td", null, n ? n?.name + ` (${t})` : t),
          l.createElement("td", null, "$", a?.strGrossUSD),
          l.createElement(
            "td",
            null,
            a?.nBestAppID > 0
              ? l.createElement(he, { appid: a?.nBestAppID })
              : "N/A",
          ),
          l.createElement("td", null, a?.nBestAppLongTermSalesRank),
        );
      }
      const ge = {};
      function he(e) {
        const { appid: t } = e,
          [n] = (0, re.t7)(t, ge),
          a = (0, l.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return l.createElement(
          se.Qf,
          { item: a },
          l.createElement("span", null, n?.GetName() || t),
        );
      }
      function ve(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, ie.jE)(),
          a = (0, l.useMemo)(
            () =>
              t.filter((e) =>
                Boolean(e.results?.suggestion?.trim().length > 0),
              ),
            [t],
          );
        return l.createElement(
          ee.qx,
          {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
          },
          l.createElement(
            I.$n,
            {
              onClick: () => {
                const e = [];
                e.push([
                  "AccountID",
                  "Partner ID",
                  "Email Override",
                  "Account Name",
                  "name",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Long Term Sales Rank",
                  "Suggestion",
                ]),
                  a.forEach((t) => {
                    const a = [],
                      l = new le.b2(t.steamid);
                    a.push("" + l.GetAccountID());
                    const r = (0, te.z0)(l.GetAccountID()),
                      s = t.results.partner_id;
                    a.push("" + s);
                    const i = t.results.email_override || "";
                    a.push("" + i),
                      a.push(r?.m_strPlayerName ? r.m_strPlayerName : "");
                    const c = X(n, l.GetAccountID(), s);
                    a.push(c ? c.realname : ""),
                      a.push("" + t.results.attending?.length),
                      a.push(t.results.country_code),
                      a.push(
                        t.results.preferred_language
                          ? (0, ne.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, ae.Yd)(s);
                    a.push(o ? o.name : "");
                    const u = Z(n, s);
                    u
                      ? (a.push("" + ue(u.strGrossUSD)),
                        a.push("" + u.nBestAppID),
                        a.push("" + u.nBestAppLongTermSalesRank))
                      : (a.push(""), a.push(""), a.push("")),
                      a.push(t.results.suggestion),
                      e.push(a);
                  });
                F.g.WriteCSVToFile(e, "suggestsion.csv");
              },
            },
            "Export to CSV (wait until the table populates fully)",
          ),
          l.createElement(
            "table",
            { className: "landingTable" },
            l.createElement(
              "thead",
              null,
              l.createElement(
                "tr",
                null,
                l.createElement("th", null, "Name and Email"),
                l.createElement("th", null, "Partner"),
                l.createElement("th", null, "Partner Revenue"),
                l.createElement("th", null, "Biggest Game"),
                l.createElement("th", null, "Long Term Sales Rank"),
                l.createElement("th", null, "Suggestions"),
              ),
            ),
            l.createElement(
              "tbody",
              null,
              a.map((e) =>
                l.createElement(_e, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function _e(e) {
        const { survey: t } = e;
        new le.b2(t.steamid);
        return l.createElement(
          "tr",
          null,
          l.createElement(
            "td",
            null,
            l.createElement(Ee, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          l.createElement(pe, { nPartnerID: t.results.partner_id }),
          l.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      function Se(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Survey Results",
              key: "survey",
              contents: l.createElement(u.tH, null, l.createElement(ce, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: l.createElement(u.tH, null, l.createElement(j, null)),
              onClick: t,
            },
          ];
        return l.createElement(
          "div",
          { className: g().AdminPageCtn },
          l.createElement(
            "div",
            { className: g().PageTitle },
            "Meet Steam Admin Dashboard ",
            (0, h.Fd)("current_year", "application_config"),
          ),
          l.createElement("hr", null),
          l.createElement(E.V, { tabs: n }),
          l.createElement("div", { className: d().ClearThings }),
          l.createElement("br", null),
        );
      }
      var fe = n(65946),
        ye = n(79645),
        Ie = n(1909),
        be = n(56330),
        we = n(52038),
        De = n(85761),
        Ae = n.n(De);
      function Ce(e) {
        const t = (function () {
            const [e] = (0, l.useState)(() =>
              (0, K.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, l.useState)(
              () => (0, K.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, te.js)(K.iA.accountid),
          [r, s] = (0, l.useState)(!1),
          [i, c] = (0, l.useState)(!1),
          [o, u] = (0, l.useState)(!1),
          [m, d] = (0, l.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? l.createElement(L.t, {
                size: "medium",
                position: "center",
                string: (0, T.we)("#Loading"),
              })
            : l.createElement(
                "div",
                { className: (0, we.A)(g().AdminPageCtn, Ae().Ctn) },
                l.createElement(
                  "div",
                  { className: g().PageTitle },
                  (0, T.we)("#MeetSteam_MainTitle"),
                ),
                l.createElement("hr", null),
                l.createElement(
                  "div",
                  { className: g().ColumnCtn },
                  l.createElement(
                    "div",
                    { className: g().LeftCol },
                    l.createElement(
                      "div",
                      { className: g().SectionCtn },
                      l.createElement(
                        "h1",
                        null,
                        " ",
                        (0, T.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          l.createElement("br", null),
                        ),
                      ),
                      l.createElement(
                        "p",
                        { className: g().IntroText },
                        (0, T.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    l.createElement(
                      "div",
                      { className: g().SectionCtn },
                      l.createElement(Ne, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: g().SectionCtn },
                      l.createElement(Te, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: (0, we.A)(g().SectionCtn, g().ActionBar) },
                      l.createElement(
                        I.jn,
                        {
                          onClick: async () => {
                            c(!0), s(!1), u(!1);
                            const e = `${K.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", K.TS.SESSIONID),
                              t.append("registrationJson", JSON.stringify(m));
                            try {
                              const n = await R().post(e, t, {
                                withCredentials: !0,
                              });
                              1 != n.data.success
                                ? (console.error(
                                    "MeetSteamLanding failed " + n.data.success,
                                  ),
                                  s(!0))
                                : u(!0);
                            } catch (e) {
                              console.error(
                                "MeetSteamLanding failed caught",
                                e,
                              );
                            }
                            c(!1);
                          },
                        },
                        (0, T.we)("#Button_Submit"),
                      ),
                      i &&
                        l.createElement(L.t, {
                          size: "medium",
                          position: "center",
                          string: (0, T.we)("#Saving"),
                        }),
                      o &&
                        l.createElement(
                          "div",
                          null,
                          (0, T.we)("#Button_Saved"),
                        ),
                      r &&
                        l.createElement(
                          "div",
                          { className: be.ErrorStylesWithIcon },
                          (0, T.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : l.createElement(
              "div",
              { className: Ae().Ctn },
              (0, T.we)("#MeetSteam_closed"),
            );
      }
      function Te(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = J();
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("h1", null, (0, T.we)("#MeetSteam_Events_Interest")),
          l.createElement(
            "p",
            null,
            (0, T.PP)("#MeetSteam_Events_title", "2025"),
          ),
          l.createElement(
            "p",
            null,
            l.createElement("span", { className: Ae().Indicator }, "*"),
            " ",
            (0, T.PP)("#MeetSteam_Events_desc"),
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
                          { className: Ae().Indicator },
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
                      tooltip: (0, T.we)("#MeetSteam_attend_ttip"),
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
            label: (0, T.we)("#MeetSteam_others"),
          }),
        );
      }
      function Ne(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, te.js)(K.iA.accountid),
          r = (function (e) {
            const t = (function () {
                const [e] = (0, l.useState)(
                  () =>
                    (0, K.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, l.useState)(() =>
                  (0, K.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              a = Q(K.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [s, i] = (0, l.useState)(() =>
            Boolean((t.email_override && t.email_override != r) || !r),
          ),
          [c, o, u] = (0, fe.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? l.createElement(
              "div",
              null,
              l.createElement("h1", null, (0, T.we)("#MeetSteam_You")),
              l.createElement("p", null, (0, T.we)("#MeetSteam_You_Desc")),
              l.createElement(Pe, {
                nPartnerID: t.partner_id,
                label: (0, T.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              l.createElement(
                "div",
                { className: Ae().EmailInfoRow },
                l.createElement(
                  "div",
                  { className: Ae().EmailField },
                  l.createElement(I.pd, {
                    type: "string",
                    label: (0, T.we)("#MeetSteam_You_Email"),
                    disabled: !s,
                    value: t.email_override || r || "",
                    placeholder: (0, T.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !s &&
                  l.createElement(I.Yh, {
                    checked: s,
                    onChange: i,
                    label: (0, T.we)("#MeetSteam_You_Update"),
                    tooltip: (0, T.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              l.createElement(I.JU, null, (0, T.we)("#MeetSteam_NeverMet")),
              l.createElement(I.Yh, {
                label: (0, T.we)("#MeetSteam_NeverMetNo"),
                checked: c,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              l.createElement(
                I.JU,
                null,
                (0, T.we)("#MeetSteam_CapabableEnglish"),
              ),
              l.createElement(
                "div",
                { className: Ae().RadioButtonCtn },
                l.createElement(I.Od, {
                  className: Ae().RadioButtons,
                  checked: !o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, T.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                l.createElement(I.Od, {
                  className: Ae().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, ne.sf)(K.TS.LANGUAGE),
                    }),
                  label: (0, T.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              o &&
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("br", null),
                  l.createElement(
                    I.JU,
                    null,
                    (0, T.we)("#MeetSteam_LanguagePref"),
                  ),
                  l.createElement(Ie.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, T.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : l.createElement(L.t, {
              size: "medium",
              position: "center",
              string: (0, T.we)("#Loading"),
            });
      }
      function Pe(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          r = (0, ye.c)(K.iA.accountid);
        if (!r)
          return l.createElement(L.t, {
            size: "small",
            position: "center",
            string: (0, T.we)("#Loading"),
          });
        if (1 == r.length) return null;
        const s = [];
        return (
          r.forEach((e) =>
            s.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          l.createElement(I.m, {
            layout: "inline",
            label: a,
            rgOptions: s,
            selectedOption: t,
            onChange: (e) => {
              n(e.data);
            },
          })
        );
      }
      var Be = n(20587);
      const Re = {
        YearlySurvery: (e = ":year") => `/${e}`,
        AdminDashboard: () => "/admin",
      };
      function Me(e) {
        return (
          (0, l.useEffect)(() => {
            Be.O3.Init();
          }, []),
          l.createElement(
            i.m,
            null,
            l.createElement(
              r.Kd,
              { basename: (0, a.C)() + "meetsteam/" },
              l.createElement(
                s.dO,
                null,
                l.createElement(s.qh, {
                  exact: !0,
                  path: a.B.DiagData(),
                  render: (e) =>
                    l.createElement(c.z, {
                      ...e,
                      strConfigID: "application_config",
                    }),
                }),
                l.createElement(s.qh, {
                  exact: !0,
                  path: Re.AdminDashboard(),
                  component: Se,
                }),
                l.createElement(s.qh, {
                  exact: !0,
                  path: Re.YearlySurvery(":year(\\d+)"),
                  component: Ce,
                }),
                l.createElement(s.qh, { component: o.a }),
              ),
            ),
          )
        );
      }
    },
    79645: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u, c: () => o });
      var a = n(41735),
        l = n.n(a),
        r = n(20194),
        s = n(68797),
        i = n(30470),
        c = n(78327);
      function o(e) {
        const { data: t, isLoading: n } = (0, r.I)({
          queryKey: ["PartnerInfoList", e],
          queryFn: () =>
            (async function (e) {
              const t = { accountid: e, origin: self.origin };
              let n = `${i.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
              "partnerweb" == (0, c.yK)() &&
                (n = `${i.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
              const a = await l().get(n, { params: t, withCredentials: !0 });
              if (
                !a ||
                200 != a.status ||
                1 != a.data?.success ||
                !a.data?.partners
              )
                throw `Load single user partner info failed ${((0, s.H))(a).strErrorMsg}`;
              return a.data.partners;
            })(e),
        });
        return n ? null : t;
      }
      function u(e, t) {
        const n = o(e);
        return n?.find((e) => e.partnerid === t);
      }
    },
    9161: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => r });
      var a = n(40323),
        l = n.n(a);
      class r {
        static ParseCSVFile(e) {
          return new Promise((t, n) => {
            const a = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => n({ errors: [e] }),
            };
            l().parse(e, a);
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
          const n = l().unparse(e, { header: !0 });
          r.WriteFile(new Blob([n], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let a =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (a += new XMLSerializer().serializeToString(e)),
            r.WriteFile(
              new Blob([a], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
  },
]);
