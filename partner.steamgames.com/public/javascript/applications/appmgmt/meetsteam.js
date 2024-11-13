/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6762],
  {
    30565: (e) => {
      e.exports = { EventList: "_3iKeBOMuwqPC87BLxvCKll" };
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
      n.r(t), n.d(t, { MeetSteamRoutes: () => Pe, default: () => Be });
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
        _ = n(64753),
        v = n(38390),
        S = n(17720),
        f = n(30621),
        y = n(96001),
        I = n(71541),
        b = n(44736),
        w = n(21869),
        C = n(26408),
        D = n(61859),
        A = n(91675),
        T = n(30470),
        N = n(41735),
        P = n.n(N),
        B = n(78395),
        M = n(22797),
        R = n(68797),
        L = n(9161),
        k = n(34283),
        F = n.n(k);
      function O(e) {
        const { hideModal: t, gid: n } = e,
          [a, r] = (0, l.useState)(null),
          [s, i] = (0, l.useState)(!1),
          [c, o] = (0, l.useState)(null),
          [u, m] = (0, l.useState)(null);
        return l.createElement(
          B.o0,
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
                r.append("sessionid", T.TS.SESSIONID),
                  r.append("gid", e),
                  r.append("accounts", n),
                  r.append("partnerids", a),
                  r.append("emailoverride", l);
                const s = `${T.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
                try {
                  const e = await P().post(s, r, { withCredentials: !0 });
                  if (1 != e?.data?.success) {
                    let t = (0, R.H)(e);
                    console.error(
                      "DisplayPartnerEventRow error: " + t.strErrorMsg,
                      t,
                    );
                  }
                  return e?.data;
                } catch (e) {
                  let t = (0, R.H)(e);
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
            ? l.createElement(x, { setInvites: r })
            : l.createElement(U, { rgInvites: a }),
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
            l.createElement(M.t, {
              size: "small",
              position: "center",
              string: (0, D.we)("#Saving"),
            }),
        );
      }
      function U(e) {
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
      function x(e) {
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
                L.g.WriteCSVToFile(t, "invite_template.csv");
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
                className: F().ImportButtonLabel,
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
                      a = await L.g.ParseCSVFile(n);
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
      var $ = n(56545),
        W = n(85737);
      function G(e) {
        const t = S.b.InitFromClanID((0, b.H7)()),
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
                href: `${T.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
              },
              "Open Meet Steam Event Dashboard",
            ),
          ),
          l.createElement("hr", null),
          l.createElement(
            "table",
            null,
            l.createElement(
              "thead",
              null,
              l.createElement(
                "tr",
                null,
                l.createElement("th", null, "Event Name"),
                l.createElement("th", null, "Links"),
                l.createElement("th", null, "Event Start"),
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
              n.map((e) => l.createElement(Y, { gid: e, key: e })),
            ),
          ),
        );
      }
      function Y(e) {
        const { gid: t } = e,
          n = S.b.InitFromClanID((0, b.H7)()),
          a = (0, y.a)(),
          r = (0, f.m)(a, (0, b.H7)(), t),
          s = r.isSuccess ? r.data : null,
          i = (0, v.RR)(t),
          c = i.GetNameWithFallback(0),
          [o, u, m] = (0, _.uD)(),
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
          l.Fragment,
          null,
          l.createElement(
            "tr",
            null,
            l.createElement("td", null, c),
            l.createElement(
              "td",
              null,
              l.createElement(
                "div",
                null,
                l.createElement(
                  "a",
                  {
                    href: `${T.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t}`,
                  },
                  "Edit",
                ),
              ),
              l.createElement(
                "div",
                null,
                l.createElement(
                  "a",
                  { href: `${T.TS.STORE_BASE_URL}meetsteam/${t}` },
                  "View",
                ),
              ),
              Boolean(i.BIsUnlistedEvent()) && l.createElement(j, { gid: t }),
            ),
            l.createElement("td", null, (0, D.TW)(i?.startTime)),
            Boolean(d.length > 0)
              ? l.createElement(q, {
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
                w.E,
                { active: o },
                l.createElement(O, { hideModal: m, gid: t }),
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
                l.createElement("td", { colSpan: 3 }),
                l.createElement(q, {
                  group: e.group,
                  session: e.session,
                  rgAvailability: s,
                }),
                l.createElement("td", null),
              ),
            ),
        );
      }
      function j(e) {
        const { gid: t } = e,
          n = (0, y.a)(),
          [a, r] = (0, l.useState)(!1),
          [s, i] = (0, l.useState)(null);
        return l.createElement(
          "div",
          null,
          l.createElement(
            "a",
            {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation(), r(!0);
                const a = await (async function (e, t) {
                  const n = $.w.Init(W.VI),
                    a = S.b.InitFromClanID((0, b.H7)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(a.ConvertTo64BitString());
                  const l = await W.ZK.TestFireEmails(e, n);
                  return console.log("test fire", l), l.GetEResult();
                })(n, t);
                i(a);
              },
            },
            "Email Self",
          ),
          l.createElement(
            w.E,
            { active: a },
            l.createElement(
              B.o0,
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
                l.createElement(M.t, { string: (0, D.we)("#Loading") }),
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
      function q(e) {
        const { group: t, rgAvailability: n, session: a } = e,
          r = D.NT.GetWithFallback(t?.localized_session_title, 0),
          s = D.NT.GetWithFallback(t?.localized_session_description, 0),
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
              (0, D.TW)(a.rtime_start) +
                "@" +
                (0, A.KC)(a.rtime_start, { bForce24HourClock: !1 }),
              " (local time)",
            ),
          ),
          l.createElement("td", null, (0, A.qZ)(a.rtime_end - a.rtime_start)),
          l.createElement(
            "td",
            null,
            i?.guest_count || 0,
            " / ",
            a.max_capacity,
          ),
        );
      }
      var V = n(20194),
        H = n(78327);
      function z() {
        const [e] = (0, l.useState)(() =>
          (0, H.Tc)("events_list", "application_config"),
        );
        return e;
      }
      function K(e, t) {
        const n = (0, V.I)({
          queryKey: ["usePartnerEmailAndNameViaPartnerID", e, t],
          queryFn: async () => {
            const n = `${H.TS.PARTNER_BASE_URL}/meetsteam/ajaxgetuseremailforpartnerid`,
              a = { accountid: e, sessionid: H.TS.SESSIONID, partnerid: t },
              l = await P().get(n, { params: a });
            return l?.data?.data;
          },
          enabled: Boolean(t && e),
        });
        return n.isLoading ? null : n.data;
      }
      function J(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      var Q = n(48479),
        X = n(14336),
        Z = n(22837),
        ee = n(32179),
        te = n(29233),
        ne = n(30565),
        ae = n.n(ne),
        le = n(55263),
        re = n(29863),
        se = n(75233);
      function ie(e) {
        const t = z(),
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
          { className: ae().EventList },
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
              l.createElement(ce, {
                key: e.id,
                conf: e,
                nInterestCount: s.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          l.createElement(ge, { rgSurveyInterest: n }),
        );
      }
      function ce(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return l.createElement(
          Q.qx,
          { title: `${t.name}: ${n.toLocaleString()}`, bStartMinimized: !0 },
          l.createElement(oe, { conf: t, rgSurveyInterest: a }),
        );
      }
      function oe(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, se.jE)(),
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
                          l = new te.b2(t.steamid);
                        n.push("" + l.GetAccountID());
                        const r = (0, X.z0)(l.GetAccountID()),
                          s = t.results.partner_id;
                        n.push("" + s);
                        const i = t.results.email_override || "";
                        n.push("" + i),
                          n.push(r?.m_strPlayerName ? r.m_strPlayerName : ""),
                          n.push(t.results.have_you_met_steam ? "yes" : "no"),
                          n.push("" + t.results.attending?.length),
                          n.push(t.results.country_code),
                          n.push(
                            t.results.preferred_language
                              ? (0, Z.Lg)(t.results.preferred_language)
                              : "",
                          );
                        const c = (0, ee.Yd)(s);
                        n.push(c ? c.name : "");
                        const o = J(a, s);
                        o
                          ? (n.push(o.strGrossUSD),
                            n.push("" + o.nBestAppID),
                            n.push("" + o.nBestAppLongTermSalesRank))
                          : (n.push(""), n.push(""), n.push("")),
                          e.push(n);
                      });
                    const n =
                      t.name.replace(" ", "_") + "_conference_interest.csv";
                    L.g.WriteCSVToFile(e, n);
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
                    l.createElement(ue, {
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
      function ue(e) {
        const { partnerID: t, registration: n } = e;
        return l.createElement(
          "tr",
          null,
          l.createElement("td", null, l.createElement(me, { ...e })),
          l.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          l.createElement(de, { nPartnerID: t }),
          l.createElement("td", null, n.attending.length),
          l.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, Z.Lg)(n.preferred_language)
              : "",
          ),
          l.createElement("td", null, n.country_code),
          l.createElement("td", null, (0, D.TW)(n.submit_time)),
        );
      }
      function me(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          r = (0, X.hW)(t),
          s = K(new te.b2(t).GetAccountID(), n),
          i = s?.realname || r.data?.m_strPlayerName || s?.accountname;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("span", null, i),
          l.createElement("br", null),
          l.createElement("span", null, a.email_override || s?.email),
        );
      }
      function de(e) {
        const { nPartnerID: t } = e,
          [n] = (0, ee.UA)(t),
          a = (function (e) {
            const t = (0, V.I)({
              queryKey: ["usePartnerRevAndBestAppSlow", e],
              queryFn: async () => {
                const t = `${H.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
                  n = { sessionid: H.TS.SESSIONID, partnerid: e },
                  a = await P().get(t, { params: n });
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
              ? l.createElement(pe, { appid: a?.nBestAppID })
              : "N/A",
          ),
          l.createElement("td", null, a?.nBestAppLongTermSalesRank),
        );
      }
      const Ee = {};
      function pe(e) {
        const { appid: t } = e,
          [n] = (0, le.t7)(t, Ee),
          a = (0, l.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return l.createElement(
          re.Qf,
          { item: a },
          l.createElement("span", null, n?.GetName() || t),
        );
      }
      function ge(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, se.jE)(),
          a = (0, l.useMemo)(
            () =>
              t.filter((e) =>
                Boolean(e.results?.suggestion?.trim().length > 0),
              ),
            [t],
          );
        return l.createElement(
          Q.qx,
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
                  "Name",
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
                      l = new te.b2(t.steamid);
                    a.push("" + l.GetAccountID());
                    const r = (0, X.z0)(l.GetAccountID()),
                      s = t.results.partner_id;
                    a.push("" + s);
                    const i = t.results.email_override || "";
                    a.push("" + i),
                      a.push(r?.m_strPlayerName ? r.m_strPlayerName : ""),
                      a.push("" + t.results.attending?.length),
                      a.push(t.results.country_code),
                      a.push(
                        t.results.preferred_language
                          ? (0, Z.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const c = (0, ee.Yd)(s);
                    a.push(c ? c.name : "");
                    const o = J(n, s);
                    o
                      ? (a.push(o.strGrossUSD),
                        a.push("" + o.nBestAppID),
                        a.push("" + o.nBestAppLongTermSalesRank))
                      : (a.push(""), a.push(""), a.push("")),
                      a.push(t.results.suggestion),
                      e.push(a);
                  });
                L.g.WriteCSVToFile(e, "suggestsion.csv");
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
                l.createElement(he, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function he(e) {
        const { survey: t } = e;
        new te.b2(t.steamid);
        return l.createElement(
          "tr",
          null,
          l.createElement(
            "td",
            null,
            l.createElement(me, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          l.createElement(de, { nPartnerID: t.results.partner_id }),
          l.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      function _e(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Survey Results",
              key: "survey",
              contents: l.createElement(u.tH, null, l.createElement(ie, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: l.createElement(u.tH, null, l.createElement(G, null)),
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
      var ve = n(65946),
        Se = n(79645),
        fe = n(1909),
        ye = n(56330),
        Ie = n(52038),
        be = n(85761),
        we = n.n(be);
      function Ce(e) {
        const t = (function () {
            const [e] = (0, l.useState)(() =>
              (0, H.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, l.useState)(
              () => (0, H.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, X.js)(H.iA.accountid),
          [r, s] = (0, l.useState)(!1),
          [i, c] = (0, l.useState)(!1),
          [o, u] = (0, l.useState)(!1),
          [m, d] = (0, l.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? l.createElement(M.t, {
                size: "medium",
                position: "center",
                string: (0, D.we)("#Loading"),
              })
            : l.createElement(
                "div",
                { className: (0, Ie.A)(g().AdminPageCtn, we().Ctn) },
                l.createElement(
                  "div",
                  { className: g().PageTitle },
                  (0, D.we)("#MeetSteam_MainTitle"),
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
                        (0, D.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          l.createElement("br", null),
                        ),
                      ),
                      l.createElement(
                        "p",
                        { className: g().IntroText },
                        (0, D.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    l.createElement(
                      "div",
                      { className: g().SectionCtn },
                      l.createElement(Ae, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: g().SectionCtn },
                      l.createElement(De, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: (0, Ie.A)(g().SectionCtn, g().ActionBar) },
                      l.createElement(
                        I.jn,
                        {
                          onClick: async () => {
                            c(!0), s(!1), u(!1);
                            const e = `${H.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", H.TS.SESSIONID),
                              t.append("registrationJson", JSON.stringify(m));
                            try {
                              const n = await P().post(e, t, {
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
                        (0, D.we)("#Button_Submit"),
                      ),
                      i &&
                        l.createElement(M.t, {
                          size: "medium",
                          position: "center",
                          string: (0, D.we)("#Saving"),
                        }),
                      o &&
                        l.createElement(
                          "div",
                          null,
                          (0, D.we)("#Button_Saved"),
                        ),
                      r &&
                        l.createElement(
                          "div",
                          { className: ye.ErrorStylesWithIcon },
                          (0, D.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : l.createElement(
              "div",
              { className: we().Ctn },
              (0, D.we)("#MeetSteam_closed"),
            );
      }
      function De(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = z();
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
            l.createElement("span", { className: we().Indicator }, "*"),
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
                          { className: we().Indicator },
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
      function Ae(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, X.js)(H.iA.accountid),
          r = (function (e) {
            const t = (function () {
                const [e] = (0, l.useState)(
                  () =>
                    (0, H.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, l.useState)(() =>
                  (0, H.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              a = K(H.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [s, i] = (0, l.useState)(() =>
            Boolean((t.email_override && t.email_override != r) || !r),
          ),
          [c, o, u] = (0, ve.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? l.createElement(
              "div",
              null,
              l.createElement("h1", null, (0, D.we)("#MeetSteam_You")),
              l.createElement("p", null, (0, D.we)("#MeetSteam_You_Desc")),
              l.createElement(Te, {
                nPartnerID: t.partner_id,
                label: (0, D.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              l.createElement(
                "div",
                { className: we().EmailInfoRow },
                l.createElement(
                  "div",
                  { className: we().EmailField },
                  l.createElement(I.pd, {
                    type: "string",
                    label: (0, D.we)("#MeetSteam_You_Email"),
                    disabled: !s,
                    value: t.email_override || r || "",
                    placeholder: (0, D.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !s &&
                  l.createElement(I.Yh, {
                    checked: s,
                    onChange: i,
                    label: (0, D.we)("#MeetSteam_You_Update"),
                    tooltip: (0, D.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              l.createElement(I.JU, null, (0, D.we)("#MeetSteam_NeverMet")),
              l.createElement(I.Yh, {
                label: (0, D.we)("#MeetSteam_NeverMetNo"),
                checked: c,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              l.createElement(
                I.JU,
                null,
                (0, D.we)("#MeetSteam_CapabableEnglish"),
              ),
              l.createElement(
                "div",
                { className: we().RadioButtonCtn },
                l.createElement(I.Od, {
                  className: we().RadioButtons,
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
                l.createElement(I.Od, {
                  className: we().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, Z.sf)(H.TS.LANGUAGE),
                    }),
                  label: (0, D.we)("#MeetSteam_CapabableEnglish_No"),
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
                    (0, D.we)("#MeetSteam_LanguagePref"),
                  ),
                  l.createElement(fe.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, D.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : l.createElement(M.t, {
              size: "medium",
              position: "center",
              string: (0, D.we)("#Loading"),
            });
      }
      function Te(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          r = (0, Se.c)(H.iA.accountid);
        if (!r)
          return l.createElement(M.t, {
            size: "small",
            position: "center",
            string: (0, D.we)("#Loading"),
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
      var Ne = n(20587);
      const Pe = {
        YearlySurvery: (e = ":year") => `/${e}`,
        AdminDashboard: () => "/admin",
      };
      function Be(e) {
        return (
          (0, l.useEffect)(() => {
            Ne.O3.Init();
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
                  path: Pe.AdminDashboard(),
                  component: _e,
                }),
                l.createElement(s.qh, {
                  exact: !0,
                  path: Pe.YearlySurvery(":year(\\d+)"),
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
