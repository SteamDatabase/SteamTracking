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
        StartDate: "_6accgtG1qR7tHFL1wnO58",
        TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
        ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
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
    30603: (e) => {
      e.exports = { ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8" };
    },
    22611: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => Qe, default: () => Xe });
      var a = n(43527),
        r = n(90626),
        l = n(17083),
        s = n(92757),
        i = n(11577),
        o = n(14932),
        c = n(97058),
        u = n(84811),
        m = n(95695),
        d = n.n(m),
        E = n(38135),
        g = n(45737),
        p = n.n(g),
        h = n(24484),
        v = n(56545),
        _ = n(85737),
        S = n(64753),
        f = n(41735),
        y = n.n(f),
        I = n(20194),
        w = n(78327);
      function b() {
        const [e] = r.useState(() =>
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
              r = await y().get(n, { params: a });
            return r?.data?.data;
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
            const n = v.w.Init(_.q3);
            n.Body().set_clan_event_gid(t);
            const a = await _.ZK.GetRegistrations(e, n);
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
        F = n(78395),
        L = n(21869),
        k = n(22797),
        O = n(26408),
        U = n(61859),
        G = n(91675),
        x = n(30470),
        j = n(30565),
        W = n.n(j),
        Y = n(34283),
        $ = n.n(Y),
        q = n(71541),
        H = n(68797),
        z = n(9161),
        V = n(65689),
        K = n(81393),
        J = n(96059);
      class Q {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            Q.s_Singleton || ((Q.s_Singleton = new Q()), Q.s_Singleton.Init()),
            Q.s_Singleton
          );
        }
        Init() {
          const e = (0, h.Tc)("store_feature_token", "application_config");
          (0, K.w)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new J.D(x.TS.WEBAPI_BASE_URL, e));
        }
      }
      function X() {
        return Q.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      function Z(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(null),
          [o, c] = r.useState(0),
          [u, d] = r.useState(""),
          [E, g] = r.useState(""),
          [p, h] = r.useState(!1),
          v = X(),
          _ = (0, I.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, o],
            queryFn: async () => {
              const e = {
                  steamid: B.b.InitFromAccountID(o).ConvertTo64BitString(),
                  gid: n,
                  type: 6,
                },
                t = await V.Nl.GetUserActionData(v, e);
              return t.BSuccess() && t.Body().jsondata()
                ? JSON.parse(t.Body().jsondata())
                : {};
            },
            enabled: Boolean(n) && o > 0,
          });
        r.useEffect(() => {
          _.isLoading ||
            (_.isSuccess &&
              (d(_.data.partner_id ? _.data.partner_id.toString() : ""),
              g(_.data.email_override ?? ""),
              h(_.data.allow_registration_if_full ?? !1)));
        }, [_.isLoading, _.isSuccess, _.data]);
        return r.createElement(
          F.o0,
          {
            strTitle: "Invite User",
            bOKDisabled: !o || a || _.isLoading,
            onOK: async () => {
              l(!0);
              const e = Number.parseInt(u) > 0 ? Number.parseInt(u) : 0,
                a = await ae(
                  n,
                  [
                    {
                      nAccountID: o,
                      nPartnerID: e,
                      strEmailOverride: E,
                      bAllowRegistrationIfFull: p,
                    },
                  ],
                  !0,
                ),
                r = a && 1 == a.success;
              r || i("We hit error during invite, check console: " + a?.msg),
                l(!1),
                _.refetch(),
                r && t();
            },
            onCancel: t,
          },
          Boolean(s) &&
            r.createElement("div", { className: m.ErrorStylesWithIcon }, s),
          !a &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement(q.pd, {
                type: "number",
                label: "Account ID",
                onChange: (e) => c(Number.parseInt(e.currentTarget.value)),
                value: o,
              }),
              0 != o &&
                !_.isLoading &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(q.pd, {
                    type: "number",
                    label: "Partner ID (optional)",
                    onChange: (e) => d(e.currentTarget.value),
                    value: u,
                  }),
                  r.createElement(q.pd, {
                    type: "text",
                    label: "Email override (optional)",
                    onChange: (e) => g(e.currentTarget.value.trim()),
                    value: E,
                  }),
                  r.createElement(q.Yh, {
                    controlled: !0,
                    checked: p,
                    onChange: h,
                    label: "Allow if registration is full",
                  }),
                ),
            ),
          a &&
            r.createElement(k.t, {
              size: "small",
              position: "center",
              string: (0, U.we)("#Saving"),
            }),
          _.isLoading &&
            r.createElement(k.t, {
              size: "small",
              position: "center",
              string: (0, U.we)("#Loading"),
            }),
        );
      }
      function ee(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(null),
          [s, i] = (0, r.useState)(!1),
          [o, c] = (0, r.useState)(null),
          [u, d] = (0, r.useState)(null),
          [E, g] = (0, r.useState)(null);
        return r.createElement(
          F.o0,
          {
            strTitle: "Invite Users",
            bOKDisabled: !a || 0 == a.length || null != u,
            strCancelButtonText: null !== u ? "Close" : "Cancel",
            onOK: async () => {
              i(!0);
              const e = await ae(n, a, !1);
              1 == e?.success
                ? (d(e.rgInvitedAccounts.length), g(e.rgSkippedAccounts.length))
                : c("We hit error during invite, check console: " + e?.msg),
                i(!1);
            },
            onCancel: () => {
              d(null), g(null), i(!1), l(null), t();
            },
          },
          Boolean(o) &&
            r.createElement("div", { className: m.ErrorStylesWithIcon }, o),
          null != u &&
            r.createElement(
              "div",
              null,
              "Invited ",
              u.toLocaleString(),
              " accounts, skipped previously invited ",
              E.toLocaleString(),
            ),
          s &&
            r.createElement(k.t, {
              size: "small",
              position: "center",
              string: (0, U.we)("#Saving"),
            }),
          null == a
            ? r.createElement(ne, { setInvites: l })
            : r.createElement(te, { rgInvites: a }),
        );
      }
      function te(e) {
        const { rgInvites: t } = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("div", null, "Total Invites Parsed: ", t.length, " "),
          r.createElement(
            "table",
            null,
            r.createElement(
              "thead",
              null,
              r.createElement(
                "tr",
                null,
                r.createElement("th", null, "AccountID"),
                r.createElement("th", null, "PartnerID"),
                r.createElement("th", null, "Email Override"),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              t.map((e, t) =>
                r.createElement(
                  "tr",
                  { key: "invite" + e.nAccountID + "_" + t },
                  r.createElement("td", null, e.nAccountID),
                  r.createElement("td", null, e.nPartnerID),
                  r.createElement("td", null, e.strEmailOverride),
                ),
              ),
            ),
          ),
        );
      }
      function ne(e) {
        const { setInvites: t } = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            null,
            "Format for CSV File, please use the template below:",
          ),
          r.createElement(
            "ul",
            null,
            r.createElement(
              "li",
              null,
              r.createElement("b", null, "nAccountID"),
              " - required, 32-bit integer value, not the 64-bit steam id",
            ),
            r.createElement(
              "li",
              null,
              r.createElement("b", null, "nPartnerID"),
              " - (preferred for biz contact)",
            ),
            r.createElement(
              "li",
              null,
              r.createElement("b", null, "strOverrideEmail"),
              " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
            ),
          ),
          r.createElement("br", null),
          r.createElement(
            "a",
            {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation();
                const t = [];
                t.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                  t.push(["388445686", "1", "adils@valvesoftware.com"]);
                z.g.WriteCSVToFile(t, "invite_template.csv");
              },
            },
            "Download Template Example",
          ),
          r.createElement("br", null),
          r.createElement("br", null),
          r.createElement(
            q.$n,
            null,
            r.createElement(
              "label",
              {
                className: $().ImportButtonLabel,
                htmlFor: "import-discount-input",
              },
              "Choose CSV File",
              r.createElement("input", {
                id: "import-discount-input",
                type: "file",
                style: { display: "none" },
                onChange: async (e) => {
                  if (e.target.files.length >= 1) {
                    const n = e.target.files[0],
                      a = await z.g.ParseCSVFile(n);
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
      async function ae(e, t, n) {
        const a = t.map((e) => e.nAccountID).join(","),
          r = t.map((e) => e.nPartnerID).join(","),
          l = t.map((e) => e.strEmailOverride).join(","),
          s = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let i = new FormData();
        i.append("sessionid", x.TS.SESSIONID),
          i.append("gid", e),
          i.append("accounts", a),
          i.append("partnerids", r),
          i.append("emailoverride", l),
          i.append("allowregistrationiffull", s),
          i.append("forceupdate", n ? "1" : "0");
        const o = `${x.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await y().post(o, i, { withCredentials: !0 });
          if (1 != e?.data?.success) {
            let t = (0, H.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, H.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var re = n(30603),
        le = n.n(re),
        se = n(29233),
        ie = n(75233),
        oe = n(32179);
      function ce(e) {
        const { hideModal: t, gid: n } = e,
          a = me(n),
          l = (0, ie.jE)(),
          [s, i] = (0, r.useMemo)(
            () =>
              a
                ? [a.length, a.filter((e) => !e.invitation_emailed).length]
                : [0, 0],
            [a],
          );
        return r.createElement(
          F.o0,
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
            r.createElement(k.t, {
              size: "medium",
              position: "center",
              string: (0, U.we)("#Loading"),
            }),
          a &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement("div", null, "There are ", s, " registrations."),
              i > 0 &&
                r.createElement(
                  q.$n,
                  {
                    onClick: async () => {
                      await (async function (e, t) {
                        let n = new FormData();
                        n.append("sessionid", x.TS.SESSIONID),
                          n.append("gid", t);
                        const a = `${x.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                        try {
                          const r = await y().post(a, n, {
                            withCredentials: !0,
                          });
                          if (1 != r?.data?.success) {
                            let e = (0, H.H)(r);
                            console.error(
                              "AsyncSendInviteEmails error: " + e.strErrorMsg,
                              e,
                            );
                          }
                          return (
                            e.invalidateQueries({
                              queryKey: [
                                "useMeetSteamAllRegistrationStatus",
                                t,
                              ],
                            }),
                            r?.data
                          );
                        } catch (e) {
                          let t = (0, H.H)(e);
                          console.error(
                            "AsyncSendInviteEmails error: " + t.strErrorMsg,
                            t,
                          );
                        }
                        return null;
                      })(l, n);
                    },
                  },
                  i,
                  " Invites To Sent. Send now?",
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
                    r.createElement("th", null, "SteamID"),
                    r.createElement("th", null, "Name"),
                    r.createElement("th", null, "invited"),
                    r.createElement("th", null, "Invite Emailed"),
                    r.createElement("th", null, "Partner"),
                    r.createElement("th", null, "Email Override"),
                  ),
                ),
                r.createElement(
                  "tbody",
                  null,
                  a?.map((e) =>
                    r.createElement(ue, {
                      key: "regentry_" + e.steamid,
                      reg: e,
                    }),
                  ),
                ),
              ),
            ),
        );
      }
      function ue(e) {
        const { reg: t } = e,
          [n] = (0, oe.UA)(t.partner_id);
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, t.steamid),
          r.createElement("td", null, t.name),
          r.createElement("td", null, Boolean(t.invited) ? "YES" : ""),
          r.createElement(
            "td",
            null,
            Boolean(t.invitation_emailed) ? "YES" : "",
          ),
          r.createElement("td", null, n?.name, " (", t.partner_id, ")"),
          r.createElement("td", null, t.email_override),
        );
      }
      function me(e) {
        const t = X(),
          n = (0, I.I)({
            queryKey: ["useMeetSteamAllRegistrationStatus", e],
            queryFn: () =>
              (async function (e, t) {
                const n = v.w.Init(V.j3);
                n.Body().set_gids([t]), n.Body().set_type(6);
                const a = await V.Nl.GetMultipleUserActionData(e, n);
                if (!a.BSuccess())
                  throw (
                    (console.error(
                      "useMeetSteamAllRegistrationStatus",
                      (0, H.H)(a),
                    ),
                    Error("Fail to load, check console messages"))
                  );
                return a
                  .Body()
                  .entries()
                  .flatMap((e) => {
                    try {
                      const t = JSON.parse(e.jsondata());
                      return (
                        ("steamid" in t && t.steamid) ||
                          (t.steamid = e.steamid()),
                        [t]
                      );
                    } catch (t) {
                      console.error(
                        "useMeetSteamAllRegistrationStatus for steamid:" +
                          e.steamid(),
                        (0, H.H)(t),
                      );
                    }
                    return [];
                  });
              })(t, e),
            staleTime: 36e5,
            enabled: Boolean(e),
          });
        return n.isLoading ? null : n.data;
      }
      function de(e) {
        const { hideModal: t, gid: n, title: a, group: l, session: s } = e,
          i = (0, R.a)(),
          o = me(n),
          c = C(i, n, l?.group_id),
          u = (0, r.useMemo)(() => {
            const e = c?.data?.filter((e) => e.session_id == s.id),
              t = new Map();
            return (
              e?.forEach((e) => {
                t.set(new se.b2(e.steamid).GetAccountID(), e);
              }),
              t
            );
          }, [s, c]),
          m = o?.filter((e) => u.has(new se.b2(e.steamid).GetAccountID()));
        return r.createElement(
          F.o0,
          {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: t,
            strDescription: "Show who is registered for this session",
            strTitle: "Session Registration",
          },
          r.createElement(
            "div",
            { className: le().ExportToCSV },
            r.createElement(
              "a",
              {
                onClick: () =>
                  (function (e, t) {
                    const n = [];
                    n.push([
                      "SteamID",
                      "Name",
                      "Invited",
                      "Partner",
                      "Email Override",
                      "Guest Count",
                    ]),
                      t.forEach((e) => {
                        const t = [],
                          a = e.partner_id ? (0, oe.Yd)(e.partner_id) : void 0;
                        t.push("" + e.steamid),
                          t.push(e.name),
                          t.push(e.invited ? "YES" : ""),
                          t.push(a ? `${a?.name} (${e.partner_id})` : ""),
                          t.push(e.email_override),
                          t.push(
                            "" +
                              (e.guests_registered
                                ? e.guests_registered - 1
                                : 0),
                          ),
                          n.push(t);
                        for (let t = 0; t < e.guest_names?.length; t++) {
                          const a = [];
                          a.push("(guest)"),
                            a.push(e.guest_names[t]),
                            n.push(a);
                        }
                      });
                    const a =
                      "meetsteam_" +
                      e.replace(/[ <>:"/\\|?*\x00-\x1F]/g, "_") +
                      ".csv";
                    z.g.WriteCSVToFile(n, a);
                  })(a, m),
              },
              "Export to CSV",
            ),
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
                r.createElement("th", null, "SteamID"),
                r.createElement("th", null, "Name"),
                r.createElement("th", null, "Invited"),
                r.createElement("th", null, "Partner"),
                r.createElement("th", null, "Email Override"),
                r.createElement(
                  "th",
                  null,
                  "Guest Count ",
                  r.createElement(O.o, {
                    tooltip:
                      "Additional guests, doesn't include main registrant",
                  }),
                ),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              m?.flatMap((e) => {
                const t = [
                  r.createElement(Ee, {
                    key: "regrow" + e.steamid,
                    regInfo: u.get(new se.b2(e.steamid).GetAccountID()),
                    inviteInfo: e,
                  }),
                ];
                for (let n = 0; n < e.guest_names?.length; n++)
                  t.push(
                    r.createElement(ge, {
                      key: "regguestrow" + e.steamid + "_" + n,
                      guestName: e.guest_names[n],
                    }),
                  );
                return t;
              }),
            ),
          ),
        );
      }
      function Ee(e) {
        const { inviteInfo: t, regInfo: n } = e,
          [a] = (0, oe.UA)(t.partner_id);
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, t.steamid),
          r.createElement("td", null, t.name),
          r.createElement("td", null, Boolean(t.invited) ? "YES" : ""),
          r.createElement(
            "td",
            null,
            a?.name,
            " ",
            t.partner_id ? `(${t.partner_id})` : "",
          ),
          r.createElement("td", null, t.email_override),
          r.createElement(
            "td",
            null,
            n.guests_registered ? n.guests_registered - 1 : 0,
          ),
        );
      }
      function ge(e) {
        const { guestName: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, "(guest)"),
          r.createElement("td", null, t),
        );
      }
      function pe(e) {
        const t = B.b.InitFromClanID((0, P.H7)()),
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("event_gids", "application_config"),
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
                href: `${x.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
              },
              "Open Meet Steam Event Dashboard",
            ),
          ),
          r.createElement("hr", null),
          n.map((e) => r.createElement(he, { gid: e, key: e })),
        );
      }
      function he(e) {
        const { gid: t } = e,
          n = B.b.InitFromClanID((0, P.H7)()),
          a = (0, R.a)(),
          l = (0, M.m)(a, (0, P.H7)(), t),
          s = l.isSuccess ? l.data : null,
          i = (0, N.RR)(t),
          o = i.GetNameWithFallback(0),
          c = (0, r.useMemo)(() => {
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
        return r.createElement(
          "div",
          { className: W().EventRow },
          r.createElement(
            "div",
            { className: W().EventMainDetails },
            r.createElement(
              "div",
              { className: W().TitleLine },
              r.createElement("div", { className: W().Title }, o),
              r.createElement(
                "div",
                { className: W().StartDate },
                (0, U.TW)(i?.startTime),
              ),
            ),
            r.createElement(
              "div",
              { className: W().ActionLine },
              r.createElement(
                "div",
                null,
                r.createElement(
                  "a",
                  {
                    href: `${x.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t}`,
                  },
                  "Edit",
                ),
              ),
              r.createElement(
                "div",
                null,
                " | ",
                r.createElement(
                  "a",
                  { href: `${x.TS.STORE_BASE_URL}meetsteam/${t}` },
                  "View",
                ),
              ),
              Boolean(
                i.BIsUnlistedEvent() &&
                  i.jsondata.meet_steam_groups?.length > 0,
              ) &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(fe, { gid: t }),
                  r.createElement(_e, { gid: t }),
                  r.createElement(ve, { gid: t }),
                  r.createElement(Se, { gid: t }),
                ),
            ),
          ),
          r.createElement(
            "div",
            null,
            r.createElement(
              "table",
              { className: "landingTable" },
              r.createElement(
                "thead",
                null,
                r.createElement(
                  "tr",
                  null,
                  r.createElement("th", null, "Group"),
                  r.createElement("th", null, "Session Start"),
                  r.createElement("th", null, "Session Duration"),
                  r.createElement("th", null, "Seats"),
                  r.createElement("th", null, "Registered"),
                  r.createElement("th", null, "Guests"),
                  r.createElement("th", null, "Details"),
                ),
              ),
              r.createElement(
                "tbody",
                null,
                r.createElement(
                  "tr",
                  null,
                  Boolean(c.length > 0)
                    ? r.createElement(ye, {
                        key: c[0].session.id,
                        gid: t,
                        group: c[0].group,
                        session: c[0].session,
                        rgAvailability: s,
                      })
                    : r.createElement(
                        r.Fragment,
                        null,
                        r.createElement("td", null, "None"),
                        r.createElement("td", null),
                        r.createElement("td", null),
                        r.createElement("td", null),
                        r.createElement("td", null),
                        r.createElement("td", null),
                      ),
                  r.createElement(
                    "td",
                    null,
                    !Boolean(
                      i?.BIsUnlistedEvent() &&
                        i.jsondata.meet_steam_groups?.length > 0,
                    ) &&
                      r.createElement(
                        "div",
                        null,
                        "Invite Disabled. Event need to publish into Unlisted State",
                      ),
                  ),
                ),
                c
                  .filter((e, t) => t > 0)
                  .map((e) =>
                    r.createElement(
                      "tr",
                      { key: e.session.id },
                      r.createElement(ye, {
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
      function ve(e) {
        const { gid: t } = e,
          [n, a, l] = (0, S.uD)();
        return r.createElement(
          "div",
          null,
          " | ",
          r.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Invite via CSV",
            r.createElement(O.o, {
              tooltip:
                "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
            }),
          ),
          r.createElement(
            u.tH,
            null,
            r.createElement(
              L.E,
              { active: n },
              r.createElement(ee, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function _e(e) {
        const { gid: t } = e,
          [n, a, l] = (0, S.uD)();
        return r.createElement(
          "div",
          null,
          " | ",
          r.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Invite",
          ),
          r.createElement(
            u.tH,
            null,
            r.createElement(
              L.E,
              { active: n },
              r.createElement(Z, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function Se(e) {
        const { gid: t } = e,
          [n, a, l] = (0, S.uD)();
        return r.createElement(
          "div",
          null,
          " | ",
          r.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Show Invites",
          ),
          r.createElement(
            u.tH,
            null,
            r.createElement(
              L.E,
              { active: n },
              r.createElement(ce, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function fe(e) {
        const { gid: t } = e,
          n = (0, R.a)(),
          [a, l] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(null);
        return r.createElement(
          "div",
          null,
          " | ",
          r.createElement(
            "a",
            {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation(), l(!0);
                const a = await (async function (e, t) {
                  const n = v.w.Init(_.VI),
                    a = B.b.InitFromClanID((0, P.H7)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(a.ConvertTo64BitString());
                  const r = await _.ZK.TestFireEmails(e, n);
                  return console.log("test fire", r), r.GetEResult();
                })(n, t);
                i(a);
              },
            },
            "Email Self",
          ),
          r.createElement(
            L.E,
            { active: a },
            r.createElement(
              F.o0,
              {
                bAlertDialog: !0,
                strTitle: "Test Emails",
                closeModal: () => {
                  l(!1), i(null);
                },
                onOK: () => {},
              },
              r.createElement(
                "div",
                null,
                "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
              ),
              Boolean(null == s) &&
                r.createElement(k.t, { string: (0, U.we)("#Loading") }),
              Boolean(1 == s) &&
                r.createElement("div", null, "Test Emails Sent"),
              Boolean(s && 1 != s) &&
                r.createElement(
                  "div",
                  null,
                  "Email Failed to Send. Check console",
                ),
            ),
          ),
        );
      }
      function ye(e) {
        const { gid: t, group: n, rgAvailability: a, session: l } = e,
          s = U.NT.GetWithFallback(n?.localized_session_title, 0),
          i = U.NT.GetWithFallback(n?.localized_session_description, 0),
          o = a?.find((e) => e.session_id == l.id),
          [c, m, d] = (0, S.uD)(),
          E = C((0, R.a)(), t, n?.group_id);
        return r.createElement(
          r.Fragment,
          null,
          Boolean(n)
            ? r.createElement(
                "td",
                null,
                s,
                r.createElement(O.o, { tooltip: i }),
              )
            : r.createElement("td", null),
          r.createElement(
            "td",
            null,
            r.createElement(
              "span",
              null,
              (0, U.TW)(l.rtime_start) + "@" + (0, G.KC)(l.rtime_start),
              " (local time)",
            ),
          ),
          r.createElement("td", null, (0, G.IH)(l.rtime_end - l.rtime_start)),
          r.createElement(
            "td",
            null,
            o?.guest_count || 0,
            " / ",
            l.max_capacity,
          ),
          r.createElement(
            "td",
            null,
            E.isSuccess &&
              r.createElement(
                r.Fragment,
                null,
                E.data?.filter((e) => e.session_id == l.id).length,
              ),
          ),
          r.createElement(
            "td",
            null,
            E.isSuccess &&
              r.createElement(
                r.Fragment,
                null,
                E.data
                  ?.filter((e) => e.session_id == l.id)
                  .reduce((e, t) => e + t.guests_registered - 1, 0),
              ),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(q.$n, { onClick: m }, "Details"),
            r.createElement(
              u.tH,
              null,
              r.createElement(
                L.E,
                { active: c },
                r.createElement(de, {
                  gid: t,
                  title: s,
                  group: n,
                  session: l,
                  hideModal: d,
                }),
              ),
            ),
          ),
        );
      }
      var Ie = n(48479),
        we = n(14336),
        be = n(22837),
        De = n(55263),
        Ae = n(29863);
      function Te(e) {
        const t = b(),
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("interest_results", "application_config"),
            );
            return (0, r.useMemo)(
              () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
              [e],
            );
          })(),
          [a, l] = (0, r.useState)(""),
          s = (0, r.useMemo)(() => {
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
          { className: W().EventList },
          r.createElement(q.pd, {
            type: "text",
            value: a,
            onChange: (e) => l(e.currentTarget.value.trim()),
            label: "Filter",
          }),
          r.createElement(
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
              r.createElement(Ce, {
                key: e.id,
                conf: e,
                nInterestCount: s.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          r.createElement(ke, { rgSurveyInterest: n }),
        );
      }
      function Ce(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return r.createElement(
          Ie.qx,
          { title: `${t.name}: ${n.toLocaleString()}`, bStartMinimized: !0 },
          r.createElement(Be, { conf: t, rgSurveyInterest: a }),
        );
      }
      function Ne(e) {
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
      function Be(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, ie.jE)(),
          l = (0, r.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          );
        return l && 0 != l.length
          ? r.createElement(
              "div",
              null,
              r.createElement(
                q.$n,
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
                      l.forEach((t) => {
                        const n = [],
                          r = new se.b2(t.steamid);
                        n.push("" + r.GetAccountID());
                        const l = (0, we.z0)(r.GetAccountID()),
                          s = t.results.partner_id;
                        n.push("" + s);
                        const i = t.results.email_override || "";
                        n.push("" + i),
                          n.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                        const o = A(a, r.GetAccountID(), s);
                        n.push(o ? o.realname : ""),
                          n.push(t.results.have_you_met_steam ? "yes" : "no"),
                          n.push("" + t.results.attending?.length),
                          n.push(t.results.country_code),
                          n.push(
                            t.results.preferred_language
                              ? (0, be.Lg)(t.results.preferred_language)
                              : "",
                          );
                        const c = (0, oe.Yd)(s);
                        n.push(c ? c.name : "");
                        const u = T(a, s);
                        u
                          ? (n.push("" + Ne(u.strGrossUSD)),
                            n.push("" + u.nBestAppID),
                            n.push("" + u.nBestAppLongTermSalesRank))
                          : (n.push(""), n.push(""), n.push("")),
                          e.push(n);
                      });
                    const n =
                      t.name.replace(" ", "_") + "_conference_interest.csv";
                    z.g.WriteCSVToFile(e, n);
                  },
                },
                "Export to CSV (wait until the table populates fully)",
              ),
              r.createElement(
                "table",
                { className: "landingTable" },
                r.createElement(
                  "thead",
                  null,
                  r.createElement(
                    "tr",
                    null,
                    r.createElement("th", null, "Name and Email"),
                    r.createElement("th", null, "Have you met steam?"),
                    r.createElement("th", null, "Partner"),
                    r.createElement("th", null, "Partner Revenue"),
                    r.createElement("th", null, "Biggest Game"),
                    r.createElement("th", null, "Long Term Sales Rank"),
                    r.createElement("th", null, "Attending count?"),
                    r.createElement("th", null, "Alt Language"),
                    r.createElement("th", null, "Country"),
                    r.createElement("th", null, "Submit Survey Time"),
                  ),
                ),
                r.createElement(
                  "tbody",
                  null,
                  l.map((e) =>
                    r.createElement(Me, {
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
      function Me(e) {
        const { partnerID: t, registration: n } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, r.createElement(Re, { ...e })),
          r.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          r.createElement(Pe, { nPartnerID: t }),
          r.createElement("td", null, n.attending.length),
          r.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, be.Lg)(n.preferred_language)
              : "",
          ),
          r.createElement("td", null, n.country_code),
          r.createElement("td", null, (0, U.TW)(n.submit_time)),
        );
      }
      function Re(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          l = (0, we.hW)(t),
          s = D(new se.b2(t).GetAccountID(), n),
          i = s?.realname || l.data?.m_strPlayerName || s?.accountname;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, i),
          r.createElement("br", null),
          r.createElement("span", null, a.email_override || s?.email),
        );
      }
      function Pe(e) {
        const { nPartnerID: t } = e,
          [n] = (0, oe.UA)(t),
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
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("td", null, n ? n?.name + ` (${t})` : t),
          r.createElement("td", null, "$", a?.strGrossUSD),
          r.createElement(
            "td",
            null,
            a?.nBestAppID > 0
              ? r.createElement(Le, { appid: a?.nBestAppID })
              : "N/A",
          ),
          r.createElement("td", null, a?.nBestAppLongTermSalesRank),
        );
      }
      const Fe = {};
      function Le(e) {
        const { appid: t } = e,
          [n] = (0, De.t7)(t, Fe),
          a = (0, r.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return r.createElement(
          Ae.Qf,
          { item: a },
          r.createElement("span", null, n?.GetName() || t),
        );
      }
      function ke(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, ie.jE)(),
          a = (0, r.useMemo)(
            () =>
              t.filter((e) =>
                Boolean(e.results?.suggestion?.trim().length > 0),
              ),
            [t],
          );
        return r.createElement(
          Ie.qx,
          {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
          },
          r.createElement(
            q.$n,
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
                      r = new se.b2(t.steamid);
                    a.push("" + r.GetAccountID());
                    const l = (0, we.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    a.push("" + s);
                    const i = t.results.email_override || "";
                    a.push("" + i),
                      a.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const o = A(n, r.GetAccountID(), s);
                    a.push(o ? o.realname : ""),
                      a.push("" + t.results.attending?.length),
                      a.push(t.results.country_code),
                      a.push(
                        t.results.preferred_language
                          ? (0, be.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const c = (0, oe.Yd)(s);
                    a.push(c ? c.name : "");
                    const u = T(n, s);
                    u
                      ? (a.push("" + Ne(u.strGrossUSD)),
                        a.push("" + u.nBestAppID),
                        a.push("" + u.nBestAppLongTermSalesRank))
                      : (a.push(""), a.push(""), a.push("")),
                      a.push(t.results.suggestion),
                      e.push(a);
                  });
                z.g.WriteCSVToFile(e, "suggestsion.csv");
              },
            },
            "Export to CSV (wait until the table populates fully)",
          ),
          r.createElement(
            "table",
            { className: "landingTable" },
            r.createElement(
              "thead",
              null,
              r.createElement(
                "tr",
                null,
                r.createElement("th", null, "Name and Email"),
                r.createElement("th", null, "Partner"),
                r.createElement("th", null, "Partner Revenue"),
                r.createElement("th", null, "Biggest Game"),
                r.createElement("th", null, "Long Term Sales Rank"),
                r.createElement("th", null, "Suggestions"),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              a.map((e) =>
                r.createElement(Oe, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function Oe(e) {
        const { survey: t } = e;
        new se.b2(t.steamid);
        return r.createElement(
          "tr",
          null,
          r.createElement(
            "td",
            null,
            r.createElement(Re, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          r.createElement(Pe, { nPartnerID: t.results.partner_id }),
          r.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      function Ue(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Survey Results",
              key: "survey",
              contents: r.createElement(u.tH, null, r.createElement(Te, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: r.createElement(u.tH, null, r.createElement(pe, null)),
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
            (0, h.Fd)("current_year", "application_config"),
          ),
          r.createElement("hr", null),
          r.createElement(E.V, { tabs: n }),
          r.createElement("div", { className: d().ClearThings }),
          r.createElement("br", null),
        );
      }
      var Ge = n(65946),
        xe = n(79645),
        je = n(1909),
        We = n(56330),
        Ye = n(52038),
        $e = n(85761),
        qe = n.n($e);
      function He(e) {
        const t = (function () {
            const [e] = (0, r.useState)(() =>
              (0, w.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, w.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, we.js)(w.iA.accountid),
          [l, s] = (0, r.useState)(!1),
          [i, o] = (0, r.useState)(!1),
          [c, u] = (0, r.useState)(!1),
          [m, d] = (0, r.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? r.createElement(k.t, {
                size: "medium",
                position: "center",
                string: (0, U.we)("#Loading"),
              })
            : r.createElement(
                "div",
                { className: (0, Ye.A)(p().AdminPageCtn, qe().Ctn) },
                r.createElement(
                  "div",
                  { className: p().PageTitle },
                  (0, U.we)("#MeetSteam_MainTitle"),
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
                        (0, U.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          r.createElement("br", null),
                        ),
                      ),
                      r.createElement(
                        "p",
                        { className: p().IntroText },
                        (0, U.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(Ve, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(ze, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: (0, Ye.A)(p().SectionCtn, p().ActionBar) },
                      r.createElement(
                        q.jn,
                        {
                          onClick: async () => {
                            o(!0), s(!1), u(!1);
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
                            o(!1);
                          },
                        },
                        (0, U.we)("#Button_Submit"),
                      ),
                      i &&
                        r.createElement(k.t, {
                          size: "medium",
                          position: "center",
                          string: (0, U.we)("#Saving"),
                        }),
                      c &&
                        r.createElement(
                          "div",
                          null,
                          (0, U.we)("#Button_Saved"),
                        ),
                      l &&
                        r.createElement(
                          "div",
                          { className: We.ErrorStylesWithIcon },
                          (0, U.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : r.createElement(
              "div",
              { className: qe().Ctn },
              (0, U.we)("#MeetSteam_closed"),
            );
      }
      function ze(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = b();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("h1", null, (0, U.we)("#MeetSteam_Events_Interest")),
          r.createElement(
            "p",
            null,
            (0, U.PP)("#MeetSteam_Events_title", "2025"),
          ),
          r.createElement(
            "p",
            null,
            r.createElement("span", { className: qe().Indicator }, "*"),
            " ",
            (0, U.PP)("#MeetSteam_Events_desc"),
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
                          { className: qe().Indicator },
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
                    r.createElement(q.Yh, {
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
                      tooltip: (0, U.we)("#MeetSteam_attend_ttip"),
                    }),
                  ),
                ),
              ),
            ),
          ),
          r.createElement("br", null),
          r.createElement(q.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, U.we)("#MeetSteam_others"),
          }),
        );
      }
      function Ve(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, we.js)(w.iA.accountid),
          l = (function (e) {
            const t = (function () {
                const [e] = (0, r.useState)(
                  () =>
                    (0, w.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, r.useState)(() =>
                  (0, w.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              a = D(w.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [s, i] = (0, r.useState)(() =>
            Boolean((t.email_override && t.email_override != l) || !l),
          ),
          [o, c, u] = (0, Ge.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? r.createElement(
              "div",
              null,
              r.createElement("h1", null, (0, U.we)("#MeetSteam_You")),
              r.createElement("p", null, (0, U.we)("#MeetSteam_You_Desc")),
              r.createElement(Ke, {
                nPartnerID: t.partner_id,
                label: (0, U.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              r.createElement(
                "div",
                { className: qe().EmailInfoRow },
                r.createElement(
                  "div",
                  { className: qe().EmailField },
                  r.createElement(q.pd, {
                    type: "string",
                    label: (0, U.we)("#MeetSteam_You_Email"),
                    disabled: !s,
                    value: t.email_override || l || "",
                    placeholder: (0, U.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !s &&
                  r.createElement(q.Yh, {
                    checked: s,
                    onChange: i,
                    label: (0, U.we)("#MeetSteam_You_Update"),
                    tooltip: (0, U.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              r.createElement(q.JU, null, (0, U.we)("#MeetSteam_NeverMet")),
              r.createElement(q.Yh, {
                label: (0, U.we)("#MeetSteam_NeverMetNo"),
                checked: o,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              r.createElement(
                q.JU,
                null,
                (0, U.we)("#MeetSteam_CapabableEnglish"),
              ),
              r.createElement(
                "div",
                { className: qe().RadioButtonCtn },
                r.createElement(q.Od, {
                  className: qe().RadioButtons,
                  checked: !c,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, U.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                r.createElement(q.Od, {
                  className: qe().RadioButtons,
                  checked: c,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, be.sf)(w.TS.LANGUAGE),
                    }),
                  label: (0, U.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              c &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("br", null),
                  r.createElement(
                    q.JU,
                    null,
                    (0, U.we)("#MeetSteam_LanguagePref"),
                  ),
                  r.createElement(je.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, U.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : r.createElement(k.t, {
              size: "medium",
              position: "center",
              string: (0, U.we)("#Loading"),
            });
      }
      function Ke(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          l = (0, xe.c)(w.iA.accountid);
        if (!l)
          return r.createElement(k.t, {
            size: "small",
            position: "center",
            string: (0, U.we)("#Loading"),
          });
        if (1 == l.length) return null;
        const s = [];
        return (
          l.forEach((e) =>
            s.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          r.createElement(q.m, {
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
      var Je = n(20587);
      const Qe = {
        YearlySurvery: (e = ":year") => `/${e}`,
        AdminDashboard: () => "/admin",
      };
      function Xe(e) {
        return (
          (0, r.useEffect)(() => {
            Je.O3.Init();
          }, []),
          r.createElement(
            i.m,
            null,
            r.createElement(
              l.Kd,
              { basename: (0, a.C)() + "meetsteam/" },
              r.createElement(
                s.dO,
                null,
                r.createElement(s.qh, {
                  exact: !0,
                  path: a.B.DiagData(),
                  render: (e) =>
                    r.createElement(o.z, {
                      ...e,
                      strConfigID: "application_config",
                    }),
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: Qe.AdminDashboard(),
                  component: Ue,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: Qe.YearlySurvery(":year(\\d+)"),
                  component: He,
                }),
                r.createElement(s.qh, { component: c.a }),
              ),
            ),
          )
        );
      }
    },
    79645: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u, c: () => c });
      var a = n(41735),
        r = n.n(a),
        l = n(20194),
        s = n(68797),
        i = n(30470),
        o = n(78327);
      function c(e) {
        const { data: t, isLoading: n } = (0, l.I)({
          queryKey: ["PartnerInfoList", e],
          queryFn: () =>
            (async function (e) {
              const t = { accountid: e, origin: self.origin };
              let n = `${i.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
              "partnerweb" == (0, o.yK)() &&
                (n = `${i.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
              const a = await r().get(n, { params: t, withCredentials: !0 });
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
        const n = c(e);
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
