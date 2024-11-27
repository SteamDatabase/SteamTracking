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
    22611: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => $e, default: () => qe });
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
        g = n(45737),
        p = n.n(g),
        h = n(24484),
        _ = n(56545),
        v = n(85737),
        S = n(64753),
        f = n(41735),
        y = n.n(f),
        I = n(20194),
        w = n(78327);
      function b() {
        const [e] = l.useState(() =>
          (0, w.Tc)("events_list", "application_config"),
        );
        return e;
      }
      function D(e, t) {
        const n = (0, I.I)({
          queryKey: ["usePartnerEmailAndNameViaPartnerID", e, t],
          queryFn: async () => {
            const n = `${w.TS.PARTNER_BASE_URL}/meetsteam/ajaxgetuseremailforpartnerid`,
              a = { accountid: e, sessionid: w.TS.SESSIONID, partnerid: t },
              l = await y().get(n, { params: a });
            return l?.data?.data;
          },
          enabled: Boolean(t && e),
        });
        return n.isLoading ? null : n.data;
      }
      function A(e, t, n) {
        return e.getQueryData(["usePartnerEmailAndNameViaPartnerID", t, n]);
      }
      function T(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function C(e, t, n) {
        return (0, I.I)({
          queryKey: ["useMeetSteamGetAllRegistration", t, n],
          queryFn: async () => {
            const n = _.w.Init(v.q3);
            n.Body().set_clan_event_gid(t);
            const a = await v.ZK.GetRegistrations(e, n);
            return a.BSuccess()
              ? a
                  .Body()
                  .registrations()
                  .map((e) => e.toObject())
              : [];
          },
          enabled: null != t && 0 != n,
        });
      }
      var N = n(38390),
        B = n(17720),
        M = n(90362),
        R = n(96001),
        P = n(44736),
        k = n(78395),
        F = n(21869),
        L = n(22797),
        O = n(26408),
        G = n(61859),
        U = n(91675),
        x = n(30470),
        j = n(30565),
        W = n.n(j),
        Y = n(71541),
        $ = n(68797),
        q = n(9161),
        H = n(34283),
        z = n.n(H);
      function V(e) {
        const { hideModal: t, gid: n } = e,
          [a, r] = (0, l.useState)(null),
          [s, i] = (0, l.useState)(!1),
          [c, o] = (0, l.useState)(null),
          [u, d] = (0, l.useState)(null),
          [E, g] = (0, l.useState)(null);
        return l.createElement(
          k.o0,
          {
            strTitle: "Invite Users",
            bOKDisabled: !a || 0 == a.length || null != u,
            strCancelButtonText: null !== u ? "Close" : "Cancel",
            onOK: async () => {
              i(!0);
              const e = await (async function (e, t) {
                const n = t.map((e) => e.nAccountID).join(","),
                  a = t.map((e) => e.nPartnerID).join(","),
                  l = t.map((e) => e.strEmailOverride).join(",");
                let r = new FormData();
                r.append("sessionid", x.TS.SESSIONID),
                  r.append("gid", e),
                  r.append("accounts", n),
                  r.append("partnerids", a),
                  r.append("emailoverride", l);
                const s = `${x.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
                try {
                  const e = await y().post(s, r, { withCredentials: !0 });
                  if (1 != e?.data?.success) {
                    let t = (0, $.H)(e);
                    console.error(
                      "DisplayPartnerEventRow error: " + t.strErrorMsg,
                      t,
                    );
                  }
                  return e?.data;
                } catch (e) {
                  let t = (0, $.H)(e);
                  console.error(
                    "DisplayPartnerEventRow error: " + t.strErrorMsg,
                    t,
                  );
                }
                return null;
              })(n, a);
              1 == e?.success
                ? (d(e.rgInvitedAccounts.length), g(e.rgSkippedAccounts.length))
                : o("We hit error during invite, check console: " + e?.msg),
                i(!1);
            },
            onCancel: () => {
              d(null), g(null), i(!1), r(null), t();
            },
          },
          Boolean(c) &&
            l.createElement("div", { className: m.ErrorStylesWithIcon }, c),
          null != u &&
            l.createElement(
              "div",
              null,
              "Invited ",
              u.toLocaleString(),
              " accounts, skipped previously invited ",
              E.toLocaleString(),
            ),
          s &&
            l.createElement(L.t, {
              size: "small",
              position: "center",
              string: (0, G.we)("#Saving"),
            }),
          null == a
            ? l.createElement(J, { setInvites: r })
            : l.createElement(K, { rgInvites: a }),
        );
      }
      function K(e) {
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
      function J(e) {
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
                q.g.WriteCSVToFile(t, "invite_template.csv");
              },
            },
            "Download Template Example",
          ),
          l.createElement("br", null),
          l.createElement("br", null),
          l.createElement(
            Y.$n,
            null,
            l.createElement(
              "label",
              {
                className: z().ImportButtonLabel,
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
                      a = await q.g.ParseCSVFile(n);
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
      var Q = n(29233),
        X = n(65689),
        Z = n(32179),
        ee = n(81393),
        te = n(96059);
      class ne {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            ne.s_Singleton ||
              ((ne.s_Singleton = new ne()), ne.s_Singleton.Init()),
            ne.s_Singleton
          );
        }
        Init() {
          const e = (0, h.Tc)("store_feature_token", "application_config");
          (0, ee.w)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new te.D(x.TS.WEBAPI_BASE_URL, e));
        }
      }
      function ae(e) {
        const { hideModal: t, gid: n } = e,
          a = re(n);
        return l.createElement(
          k.o0,
          {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: t,
            strDescription:
              "This will show the users we have invited and their status. As well as individual who were just sent the registration page on their own.",
            strTitle: "Invitation And Registration Status",
          },
          !a &&
            l.createElement(L.t, {
              size: "medium",
              position: "center",
              string: (0, G.we)("#Loading"),
            }),
          a &&
            l.createElement(
              "table",
              null,
              l.createElement(
                "thead",
                null,
                l.createElement(
                  "tr",
                  null,
                  l.createElement("th", null, "SteamID"),
                  l.createElement("th", null, "Name"),
                  l.createElement("th", null, "invited"),
                  l.createElement("th", null, "Invite Emailed"),
                  l.createElement("th", null, "Partner"),
                  l.createElement("th", null, "Email Override"),
                ),
              ),
              l.createElement(
                "tbody",
                null,
                a?.map((e) =>
                  l.createElement(le, { key: "regentry_" + e.steamid, reg: e }),
                ),
              ),
            ),
        );
      }
      function le(e) {
        const { reg: t } = e,
          [n] = (0, Z.UA)(t.partner_id);
        return l.createElement(
          "tr",
          null,
          l.createElement("td", null, t.steamid),
          l.createElement("td", null, t.name),
          l.createElement("td", null, Boolean(t.invited) ? "YES" : ""),
          l.createElement(
            "td",
            null,
            Boolean(t.invitation_emailed) ? "YES" : "",
          ),
          l.createElement("td", null, n?.name, " (", t.partner_id, ")"),
          l.createElement("td", null, t.email_override),
        );
      }
      function re(e) {
        const t = ne.Get().GetSaleFeatureTransport().GetServiceTransport(),
          n = (0, I.I)({
            queryKey: ["useMeetSteamAllRegistrationStatus", e],
            queryFn: () =>
              (async function (e, t) {
                const n = _.w.Init(X.j3);
                n.Body().set_gids([t]), n.Body().set_type(6);
                try {
                  const t = await X.Nl.GetMultipleUserActionData(e, n);
                  if (!t.BSuccess())
                    throw (
                      (console.error(
                        "useMeetSteamAllRegistrationStatus",
                        (0, $.H)(t),
                      ),
                      Error("Fail to load, check console messages"))
                    );
                  return t
                    .Body()
                    .entries()
                    .map((e) => {
                      const t = JSON.parse(e.jsondata());
                      return t.steamid || (t.steamid = e.steamid()), t;
                    });
                } catch (e) {
                  throw (
                    (console.error(
                      "useMeetSteamAllRegistrationStatus",
                      (0, $.H)(e),
                    ),
                    Error("Fail to load, check console messages"))
                  );
                }
              })(t, e),
            staleTime: 36e5,
            enabled: Boolean(e),
          });
        return n.isLoading ? null : n.data;
      }
      function se(e) {
        const { hideModal: t, gid: n, group: a, session: r } = e,
          s = (0, R.a)(),
          i = re(n),
          c = C(s, n, a?.group_id),
          o = (0, l.useMemo)(() => {
            const e = c?.data?.filter((e) => e.session_id == r.id),
              t = new Map();
            return (
              e?.forEach((e) => {
                t.set(new Q.b2(e.steamid).GetAccountID(), e);
              }),
              t
            );
          }, [r, c]);
        return l.createElement(
          k.o0,
          {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: t,
            strDescription: "Show who is registered for this session",
            strTitle: "Session Registration",
          },
          l.createElement(
            "table",
            null,
            l.createElement(
              "thead",
              null,
              l.createElement(
                "tr",
                null,
                l.createElement("th", null, "SteamID"),
                l.createElement("th", null, "Name"),
                l.createElement("th", null, "invited"),
                l.createElement("th", null, "Partner"),
                l.createElement("th", null, "Email Override"),
                l.createElement("th", null, "Guess Count"),
              ),
            ),
            l.createElement(
              "tbody",
              null,
              i
                ?.filter((e) => o.has(new Q.b2(e.steamid).GetAccountID()))
                .map((e) =>
                  l.createElement(ie, {
                    key: "regrow" + e.steamid,
                    regInfo: o.get(new Q.b2(e.steamid).GetAccountID()),
                    inviteInfo: e,
                  }),
                ),
            ),
          ),
        );
      }
      function ie(e) {
        const { inviteInfo: t, regInfo: n } = e,
          [a] = (0, Z.UA)(t.partner_id);
        return l.createElement(
          "tr",
          null,
          l.createElement("td", null, t.steamid),
          l.createElement("td", null, t.name),
          l.createElement("td", null, Boolean(t.invited) ? "YES" : ""),
          l.createElement("td", null, a?.name, " (", t.partner_id, ")"),
          l.createElement("td", null, t.email_override),
          l.createElement("td", null, n.guests_registered || 0),
        );
      }
      function ce(e) {
        const t = B.b.InitFromClanID((0, P.H7)()),
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
                href: `${x.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
              },
              "Open Meet Steam Event Dashboard",
            ),
          ),
          l.createElement("hr", null),
          n.map((e) => l.createElement(oe, { gid: e, key: e })),
        );
      }
      function oe(e) {
        const { gid: t } = e,
          n = B.b.InitFromClanID((0, P.H7)()),
          a = (0, R.a)(),
          r = (0, M.m)(a, (0, P.H7)(), t),
          s = r.isSuccess ? r.data : null,
          i = (0, N.RR)(t),
          c = i.GetNameWithFallback(0),
          o = (0, l.useMemo)(() => {
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
          { className: W().EventRow },
          l.createElement(
            "div",
            { className: W().EventMainDetails },
            l.createElement("div", { className: W().Title }, c),
            l.createElement(
              "div",
              { className: W().StartDate },
              (0, G.TW)(i?.startTime),
            ),
            l.createElement(
              "div",
              null,
              " | ",
              l.createElement(
                "a",
                {
                  href: `${x.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t}`,
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
                { href: `${x.TS.STORE_BASE_URL}meetsteam/${t}` },
                "View",
              ),
            ),
            Boolean(
              i.BIsUnlistedEvent() && i.jsondata.meet_steam_groups?.length > 0,
            ) &&
              l.createElement(
                l.Fragment,
                null,
                l.createElement(de, { gid: t }),
                l.createElement(ue, { gid: t }),
                l.createElement(me, { gid: t }),
              ),
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
                  l.createElement("th", null, "Registered"),
                  l.createElement("th", null, "Guests"),
                  l.createElement("th", null, "Details"),
                ),
              ),
              l.createElement(
                "tbody",
                null,
                l.createElement(
                  "tr",
                  null,
                  Boolean(o.length > 0)
                    ? l.createElement(Ee, {
                        key: o[0].session.id,
                        gid: t,
                        group: o[0].group,
                        session: o[0].session,
                        rgAvailability: s,
                      })
                    : l.createElement(
                        l.Fragment,
                        null,
                        l.createElement("td", null, "None"),
                        l.createElement("td", null),
                        l.createElement("td", null),
                        l.createElement("td", null),
                        l.createElement("td", null),
                        l.createElement("td", null),
                      ),
                  l.createElement(
                    "td",
                    null,
                    !Boolean(
                      i?.BIsUnlistedEvent() &&
                        i.jsondata.meet_steam_groups?.length > 0,
                    ) &&
                      l.createElement(
                        "div",
                        null,
                        "Invite Disabled. Event need to publish into Unlisted State",
                      ),
                  ),
                ),
                o
                  .filter((e, t) => t > 0)
                  .map((e) =>
                    l.createElement(
                      "tr",
                      { key: e.session.id },
                      l.createElement(Ee, {
                        group: e.group,
                        gid: t,
                        session: e.session,
                        rgAvailability: s,
                      }),
                    ),
                  ),
              ),
            ),
          ),
        );
      }
      function ue(e) {
        const { gid: t } = e,
          [n, a, r] = (0, S.uD)();
        return l.createElement(
          "div",
          null,
          " | ",
          l.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Invite via CSV",
            l.createElement(O.o, {
              tooltip:
                "This will email invitee and show the users on their dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
            }),
          ),
          l.createElement(
            u.tH,
            null,
            l.createElement(
              F.E,
              { active: n },
              l.createElement(V, { hideModal: r, gid: t }),
            ),
          ),
        );
      }
      function me(e) {
        const { gid: t } = e,
          [n, a, r] = (0, S.uD)();
        return l.createElement(
          "div",
          null,
          " | ",
          l.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Show Invites",
          ),
          l.createElement(
            u.tH,
            null,
            l.createElement(
              F.E,
              { active: n },
              l.createElement(ae, { hideModal: r, gid: t }),
            ),
          ),
        );
      }
      function de(e) {
        const { gid: t } = e,
          n = (0, R.a)(),
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
                  const n = _.w.Init(v.VI),
                    a = B.b.InitFromClanID((0, P.H7)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(a.ConvertTo64BitString());
                  const l = await v.ZK.TestFireEmails(e, n);
                  return console.log("test fire", l), l.GetEResult();
                })(n, t);
                i(a);
              },
            },
            "Email Self",
          ),
          l.createElement(
            F.E,
            { active: a },
            l.createElement(
              k.o0,
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
                l.createElement(L.t, { string: (0, G.we)("#Loading") }),
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
      function Ee(e) {
        const { gid: t, group: n, rgAvailability: a, session: r } = e,
          s = G.NT.GetWithFallback(n?.localized_session_title, 0),
          i = G.NT.GetWithFallback(n?.localized_session_description, 0),
          c = a?.find((e) => e.session_id == r.id),
          [o, m, d] = (0, S.uD)(),
          E = C((0, R.a)(), t, n?.group_id);
        return l.createElement(
          l.Fragment,
          null,
          Boolean(n)
            ? l.createElement(
                "td",
                null,
                s,
                l.createElement(O.o, { tooltip: i }),
              )
            : l.createElement("td", null),
          l.createElement(
            "td",
            null,
            l.createElement(
              "span",
              null,
              (0, G.TW)(r.rtime_start) +
                "@" +
                (0, U.KC)(r.rtime_start, { bForce24HourClock: !1 }),
              " (local time)",
            ),
          ),
          l.createElement("td", null, (0, U.qZ)(r.rtime_end - r.rtime_start)),
          l.createElement(
            "td",
            null,
            c?.guest_count || 0,
            " / ",
            r.max_capacity,
          ),
          l.createElement(
            "td",
            null,
            E.isSuccess &&
              l.createElement(
                l.Fragment,
                null,
                E.data?.filter((e) => e.session_id == r.id).length,
              ),
          ),
          l.createElement(
            "td",
            null,
            E.isSuccess &&
              l.createElement(
                l.Fragment,
                null,
                E.data
                  ?.filter((e) => e.session_id == r.id)
                  .reduce((e, t) => e + t.guests_registered - 1, 0),
              ),
          ),
          l.createElement(
            "td",
            null,
            l.createElement(Y.$n, { onClick: m }, "Details"),
            l.createElement(
              u.tH,
              null,
              l.createElement(
                F.E,
                { active: o },
                l.createElement(se, {
                  gid: t,
                  group: n,
                  session: r,
                  hideModal: d,
                }),
              ),
            ),
          ),
        );
      }
      var ge = n(48479),
        pe = n(14336),
        he = n(22837),
        _e = n(55263),
        ve = n(29863),
        Se = n(75233);
      function fe(e) {
        const t = b(),
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
          { className: W().EventList },
          l.createElement(Y.pd, {
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
              l.createElement(ye, {
                key: e.id,
                conf: e,
                nInterestCount: s.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          l.createElement(Ne, { rgSurveyInterest: n }),
        );
      }
      function ye(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return l.createElement(
          ge.qx,
          { title: `${t.name}: ${n.toLocaleString()}`, bStartMinimized: !0 },
          l.createElement(we, { conf: t, rgSurveyInterest: a }),
        );
      }
      function Ie(e) {
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
      function we(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, Se.jE)(),
          r = (0, l.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          );
        return r && 0 != r.length
          ? l.createElement(
              "div",
              null,
              l.createElement(
                Y.$n,
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
                          l = new Q.b2(t.steamid);
                        n.push("" + l.GetAccountID());
                        const r = (0, pe.z0)(l.GetAccountID()),
                          s = t.results.partner_id;
                        n.push("" + s);
                        const i = t.results.email_override || "";
                        n.push("" + i),
                          n.push(r?.m_strPlayerName ? r.m_strPlayerName : "");
                        const c = A(a, l.GetAccountID(), s);
                        n.push(c ? c.realname : ""),
                          n.push(t.results.have_you_met_steam ? "yes" : "no"),
                          n.push("" + t.results.attending?.length),
                          n.push(t.results.country_code),
                          n.push(
                            t.results.preferred_language
                              ? (0, he.Lg)(t.results.preferred_language)
                              : "",
                          );
                        const o = (0, Z.Yd)(s);
                        n.push(o ? o.name : "");
                        const u = T(a, s);
                        u
                          ? (n.push("" + Ie(u.strGrossUSD)),
                            n.push("" + u.nBestAppID),
                            n.push("" + u.nBestAppLongTermSalesRank))
                          : (n.push(""), n.push(""), n.push("")),
                          e.push(n);
                      });
                    const n =
                      t.name.replace(" ", "_") + "_conference_interest.csv";
                    q.g.WriteCSVToFile(e, n);
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
                    l.createElement(be, {
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
      function be(e) {
        const { partnerID: t, registration: n } = e;
        return l.createElement(
          "tr",
          null,
          l.createElement("td", null, l.createElement(De, { ...e })),
          l.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          l.createElement(Ae, { nPartnerID: t }),
          l.createElement("td", null, n.attending.length),
          l.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, he.Lg)(n.preferred_language)
              : "",
          ),
          l.createElement("td", null, n.country_code),
          l.createElement("td", null, (0, G.TW)(n.submit_time)),
        );
      }
      function De(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          r = (0, pe.hW)(t),
          s = D(new Q.b2(t).GetAccountID(), n),
          i = s?.realname || r.data?.m_strPlayerName || s?.accountname;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("span", null, i),
          l.createElement("br", null),
          l.createElement("span", null, a.email_override || s?.email),
        );
      }
      function Ae(e) {
        const { nPartnerID: t } = e,
          [n] = (0, Z.UA)(t),
          a = (function (e) {
            const t = (0, I.I)({
              queryKey: ["usePartnerRevAndBestAppSlow", e],
              queryFn: async () => {
                const t = `${w.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
                  n = { sessionid: w.TS.SESSIONID, partnerid: e },
                  a = await y().get(t, { params: n });
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
              ? l.createElement(Ce, { appid: a?.nBestAppID })
              : "N/A",
          ),
          l.createElement("td", null, a?.nBestAppLongTermSalesRank),
        );
      }
      const Te = {};
      function Ce(e) {
        const { appid: t } = e,
          [n] = (0, _e.t7)(t, Te),
          a = (0, l.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return l.createElement(
          ve.Qf,
          { item: a },
          l.createElement("span", null, n?.GetName() || t),
        );
      }
      function Ne(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, Se.jE)(),
          a = (0, l.useMemo)(
            () =>
              t.filter((e) =>
                Boolean(e.results?.suggestion?.trim().length > 0),
              ),
            [t],
          );
        return l.createElement(
          ge.qx,
          {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
          },
          l.createElement(
            Y.$n,
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
                      l = new Q.b2(t.steamid);
                    a.push("" + l.GetAccountID());
                    const r = (0, pe.z0)(l.GetAccountID()),
                      s = t.results.partner_id;
                    a.push("" + s);
                    const i = t.results.email_override || "";
                    a.push("" + i),
                      a.push(r?.m_strPlayerName ? r.m_strPlayerName : "");
                    const c = A(n, l.GetAccountID(), s);
                    a.push(c ? c.realname : ""),
                      a.push("" + t.results.attending?.length),
                      a.push(t.results.country_code),
                      a.push(
                        t.results.preferred_language
                          ? (0, he.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, Z.Yd)(s);
                    a.push(o ? o.name : "");
                    const u = T(n, s);
                    u
                      ? (a.push("" + Ie(u.strGrossUSD)),
                        a.push("" + u.nBestAppID),
                        a.push("" + u.nBestAppLongTermSalesRank))
                      : (a.push(""), a.push(""), a.push("")),
                      a.push(t.results.suggestion),
                      e.push(a);
                  });
                q.g.WriteCSVToFile(e, "suggestsion.csv");
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
                l.createElement(Be, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function Be(e) {
        const { survey: t } = e;
        new Q.b2(t.steamid);
        return l.createElement(
          "tr",
          null,
          l.createElement(
            "td",
            null,
            l.createElement(De, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          l.createElement(Ae, { nPartnerID: t.results.partner_id }),
          l.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      function Me(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Survey Results",
              key: "survey",
              contents: l.createElement(u.tH, null, l.createElement(fe, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: l.createElement(u.tH, null, l.createElement(ce, null)),
              onClick: t,
            },
          ];
        return l.createElement(
          "div",
          { className: p().AdminPageCtn },
          l.createElement(
            "div",
            { className: p().PageTitle },
            "Meet Steam Admin Dashboard ",
            (0, h.Fd)("current_year", "application_config"),
          ),
          l.createElement("hr", null),
          l.createElement(E.V, { tabs: n }),
          l.createElement("div", { className: d().ClearThings }),
          l.createElement("br", null),
        );
      }
      var Re = n(65946),
        Pe = n(79645),
        ke = n(1909),
        Fe = n(56330),
        Le = n(52038),
        Oe = n(85761),
        Ge = n.n(Oe);
      function Ue(e) {
        const t = (function () {
            const [e] = (0, l.useState)(() =>
              (0, w.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, l.useState)(
              () => (0, w.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, pe.js)(w.iA.accountid),
          [r, s] = (0, l.useState)(!1),
          [i, c] = (0, l.useState)(!1),
          [o, u] = (0, l.useState)(!1),
          [m, d] = (0, l.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? l.createElement(L.t, {
                size: "medium",
                position: "center",
                string: (0, G.we)("#Loading"),
              })
            : l.createElement(
                "div",
                { className: (0, Le.A)(p().AdminPageCtn, Ge().Ctn) },
                l.createElement(
                  "div",
                  { className: p().PageTitle },
                  (0, G.we)("#MeetSteam_MainTitle"),
                ),
                l.createElement("hr", null),
                l.createElement(
                  "div",
                  { className: p().ColumnCtn },
                  l.createElement(
                    "div",
                    { className: p().LeftCol },
                    l.createElement(
                      "div",
                      { className: p().SectionCtn },
                      l.createElement(
                        "h1",
                        null,
                        " ",
                        (0, G.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          l.createElement("br", null),
                        ),
                      ),
                      l.createElement(
                        "p",
                        { className: p().IntroText },
                        (0, G.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    l.createElement(
                      "div",
                      { className: p().SectionCtn },
                      l.createElement(je, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: p().SectionCtn },
                      l.createElement(xe, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: (0, Le.A)(p().SectionCtn, p().ActionBar) },
                      l.createElement(
                        Y.jn,
                        {
                          onClick: async () => {
                            c(!0), s(!1), u(!1);
                            const e = `${w.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", w.TS.SESSIONID),
                              t.append("registrationJson", JSON.stringify(m));
                            try {
                              const n = await y().post(e, t, {
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
                        (0, G.we)("#Button_Submit"),
                      ),
                      i &&
                        l.createElement(L.t, {
                          size: "medium",
                          position: "center",
                          string: (0, G.we)("#Saving"),
                        }),
                      o &&
                        l.createElement(
                          "div",
                          null,
                          (0, G.we)("#Button_Saved"),
                        ),
                      r &&
                        l.createElement(
                          "div",
                          { className: Fe.ErrorStylesWithIcon },
                          (0, G.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : l.createElement(
              "div",
              { className: Ge().Ctn },
              (0, G.we)("#MeetSteam_closed"),
            );
      }
      function xe(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = b();
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("h1", null, (0, G.we)("#MeetSteam_Events_Interest")),
          l.createElement(
            "p",
            null,
            (0, G.PP)("#MeetSteam_Events_title", "2025"),
          ),
          l.createElement(
            "p",
            null,
            l.createElement("span", { className: Ge().Indicator }, "*"),
            " ",
            (0, G.PP)("#MeetSteam_Events_desc"),
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
                          { className: Ge().Indicator },
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
                    l.createElement(Y.Yh, {
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
                      tooltip: (0, G.we)("#MeetSteam_attend_ttip"),
                    }),
                  ),
                ),
              ),
            ),
          ),
          l.createElement("br", null),
          l.createElement(Y.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, G.we)("#MeetSteam_others"),
          }),
        );
      }
      function je(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, pe.js)(w.iA.accountid),
          r = (function (e) {
            const t = (function () {
                const [e] = (0, l.useState)(
                  () =>
                    (0, w.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, l.useState)(() =>
                  (0, w.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              a = D(w.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [s, i] = (0, l.useState)(() =>
            Boolean((t.email_override && t.email_override != r) || !r),
          ),
          [c, o, u] = (0, Re.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? l.createElement(
              "div",
              null,
              l.createElement("h1", null, (0, G.we)("#MeetSteam_You")),
              l.createElement("p", null, (0, G.we)("#MeetSteam_You_Desc")),
              l.createElement(We, {
                nPartnerID: t.partner_id,
                label: (0, G.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              l.createElement(
                "div",
                { className: Ge().EmailInfoRow },
                l.createElement(
                  "div",
                  { className: Ge().EmailField },
                  l.createElement(Y.pd, {
                    type: "string",
                    label: (0, G.we)("#MeetSteam_You_Email"),
                    disabled: !s,
                    value: t.email_override || r || "",
                    placeholder: (0, G.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !s &&
                  l.createElement(Y.Yh, {
                    checked: s,
                    onChange: i,
                    label: (0, G.we)("#MeetSteam_You_Update"),
                    tooltip: (0, G.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              l.createElement(Y.JU, null, (0, G.we)("#MeetSteam_NeverMet")),
              l.createElement(Y.Yh, {
                label: (0, G.we)("#MeetSteam_NeverMetNo"),
                checked: c,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              l.createElement(
                Y.JU,
                null,
                (0, G.we)("#MeetSteam_CapabableEnglish"),
              ),
              l.createElement(
                "div",
                { className: Ge().RadioButtonCtn },
                l.createElement(Y.Od, {
                  className: Ge().RadioButtons,
                  checked: !o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, G.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                l.createElement(Y.Od, {
                  className: Ge().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, he.sf)(w.TS.LANGUAGE),
                    }),
                  label: (0, G.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              o &&
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("br", null),
                  l.createElement(
                    Y.JU,
                    null,
                    (0, G.we)("#MeetSteam_LanguagePref"),
                  ),
                  l.createElement(ke.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, G.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : l.createElement(L.t, {
              size: "medium",
              position: "center",
              string: (0, G.we)("#Loading"),
            });
      }
      function We(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          r = (0, Pe.c)(w.iA.accountid);
        if (!r)
          return l.createElement(L.t, {
            size: "small",
            position: "center",
            string: (0, G.we)("#Loading"),
          });
        if (1 == r.length) return null;
        const s = [];
        return (
          r.forEach((e) =>
            s.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          l.createElement(Y.m, {
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
      var Ye = n(20587);
      const $e = {
        YearlySurvery: (e = ":year") => `/${e}`,
        AdminDashboard: () => "/admin",
      };
      function qe(e) {
        return (
          (0, l.useEffect)(() => {
            Ye.O3.Init();
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
                  path: $e.AdminDashboard(),
                  component: Me,
                }),
                l.createElement(s.qh, {
                  exact: !0,
                  path: $e.YearlySurvery(":year(\\d+)"),
                  component: Ue,
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
