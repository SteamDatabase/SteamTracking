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
    94504: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => gt, default: () => pt });
      var a = n(43527),
        r = n(90626),
        l = n(17083),
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
        S = n(56545),
        v = n(85737),
        _ = n(64753),
        f = n(20194),
        y = n(75233),
        I = n(41735),
        w = n.n(I),
        b = n(17720),
        D = n(78327),
        A = n(32179);
      function C() {
        const [e] = r.useState(() =>
          (0, D.Tc)("events_list", "application_config"),
        );
        return e;
      }
      function T(e, t) {
        return ["usePartnerEmailAndNameViaPartnerID", e, t];
      }
      async function N(e, t) {
        const n = `${D.TS.PARTNER_BASE_URL}/meetsteam/ajaxgetuseremailforpartnerid`,
          a = { accountid: e, sessionid: D.TS.SESSIONID, partnerid: t },
          r = await w().get(n, { params: a });
        return r?.data?.data;
      }
      function B(e, t) {
        const n = (0, f.I)({
          queryKey: T(e, t),
          queryFn: async () => N(e, t),
          enabled: Boolean(t && e),
        });
        return n.isLoading ? null : n.data;
      }
      function M(e, t, n) {
        return e.getQueryData(["usePartnerEmailAndNameViaPartnerID", t, n]);
      }
      function R(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function L(e) {
        const t = `${D.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: D.TS.SESSIONID, partnerid: e },
          a = await w().get(t, { params: n });
        return a?.data?.data;
      }
      function F(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function P(e, t, n) {
        return (0, f.I)({
          queryKey: ["useMeetSteamGetAllRegistration", t, n],
          queryFn: async () => {
            const n = S.w.Init(v.q3);
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
      var k = n(38390),
        O = n(90362),
        U = n(96001),
        G = n(44736),
        x = n(78395),
        $ = n(21869),
        j = n(22797),
        q = n(26408),
        W = n(61859),
        Y = n(91675),
        z = n(30470),
        H = n(30565),
        K = n.n(H),
        V = n(34283),
        J = n.n(V),
        Q = n(71541),
        X = n(68797),
        Z = n(9161),
        ee = n(65689),
        te = n(81393),
        ne = n(96059);
      class ae {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            ae.s_Singleton ||
              ((ae.s_Singleton = new ae()), ae.s_Singleton.Init()),
            ae.s_Singleton
          );
        }
        Init() {
          const e = (0, h.Tc)("store_feature_token", "application_config");
          (0, te.w)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new ne.D(z.TS.WEBAPI_BASE_URL, e));
        }
      }
      function re() {
        return ae.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      function le(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(null),
          [c, o] = r.useState(0),
          [u, d] = r.useState(""),
          [E, g] = r.useState(""),
          [p, h] = r.useState(!1),
          S = re(),
          v = (0, f.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, c],
            queryFn: async () => {
              const e = {
                  steamid: b.b.InitFromAccountID(c).ConvertTo64BitString(),
                  gid: n,
                  type: 6,
                },
                t = await ee.Nl.GetUserActionData(S, e);
              return t.BSuccess() && t.Body().jsondata()
                ? JSON.parse(t.Body().jsondata())
                : {};
            },
            enabled: Boolean(n) && c > 0,
          });
        r.useEffect(() => {
          v.isLoading ||
            (v.isSuccess &&
              (d(v.data.partner_id ? v.data.partner_id.toString() : ""),
              g(v.data.email_override ?? ""),
              h(v.data.allow_registration_if_full ?? !1)));
        }, [v.isLoading, v.isSuccess, v.data]);
        return r.createElement(
          x.o0,
          {
            strTitle: "Invite User",
            bOKDisabled: !c || a || v.isLoading,
            onOK: async () => {
              l(!0);
              const e = Number.parseInt(u) > 0 ? Number.parseInt(u) : 0,
                a = await oe(
                  n,
                  [
                    {
                      nAccountID: c,
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
                v.refetch(),
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
              r.createElement(Q.pd, {
                type: "number",
                label: "Account ID",
                onChange: (e) => o(Number.parseInt(e.currentTarget.value)),
                value: c,
              }),
              0 != c &&
                !v.isLoading &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(Q.pd, {
                    type: "number",
                    label: "Partner ID (optional)",
                    onChange: (e) => d(e.currentTarget.value),
                    value: u,
                  }),
                  r.createElement(Q.pd, {
                    type: "text",
                    label: "Email override (optional)",
                    onChange: (e) => g(e.currentTarget.value.trim()),
                    value: E,
                  }),
                  r.createElement(Q.Yh, {
                    controlled: !0,
                    checked: p,
                    onChange: h,
                    label: "Allow if registration is full",
                  }),
                ),
            ),
          a &&
            r.createElement(j.t, {
              size: "small",
              position: "center",
              string: (0, W.we)("#Saving"),
            }),
          v.isLoading &&
            r.createElement(j.t, {
              size: "small",
              position: "center",
              string: (0, W.we)("#Loading"),
            }),
        );
      }
      function se(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(null),
          [s, i] = (0, r.useState)(!1),
          [c, o] = (0, r.useState)(null),
          [u, d] = (0, r.useState)(null),
          [E, g] = (0, r.useState)(null);
        return r.createElement(
          x.o0,
          {
            strTitle: "Invite Users",
            bOKDisabled: !a || 0 == a.length || null != u,
            strCancelButtonText: null !== u ? "Close" : "Cancel",
            onOK: async () => {
              i(!0);
              const e = await oe(n, a, !1);
              1 == e?.success
                ? (d(e.rgInvitedAccounts.length), g(e.rgSkippedAccounts.length))
                : o("We hit error during invite, check console: " + e?.msg),
                i(!1);
            },
            onCancel: () => {
              d(null), g(null), i(!1), l(null), t();
            },
          },
          Boolean(c) &&
            r.createElement("div", { className: m.ErrorStylesWithIcon }, c),
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
            r.createElement(j.t, {
              size: "small",
              position: "center",
              string: (0, W.we)("#Saving"),
            }),
          null == a
            ? r.createElement(ce, { setInvites: l })
            : r.createElement(ie, { rgInvites: a }),
        );
      }
      function ie(e) {
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
      function ce(e) {
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
                Z.g.WriteCSVToFile(t, "invite_template.csv");
              },
            },
            "Download Template Example",
          ),
          r.createElement("br", null),
          r.createElement("br", null),
          r.createElement(
            Q.$n,
            null,
            r.createElement(
              "label",
              {
                className: J().ImportButtonLabel,
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
                      a = await Z.g.ParseCSVFile(n);
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
      async function oe(e, t, n) {
        const a = t.map((e) => e.nAccountID).join(","),
          r = t.map((e) => e.nPartnerID).join(","),
          l = t.map((e) => e.strEmailOverride).join(","),
          s = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let i = new FormData();
        i.append("sessionid", z.TS.SESSIONID),
          i.append("gid", e),
          i.append("accounts", a),
          i.append("partnerids", r),
          i.append("emailoverride", l),
          i.append("allowregistrationiffull", s),
          i.append("forceupdate", n ? "1" : "0");
        const c = `${z.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await w().post(c, i, { withCredentials: !0 });
          if (1 != e?.data?.success) {
            let t = (0, X.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, X.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var ue = n(30603),
        me = n.n(ue),
        de = n(29233);
      function Ee(e) {
        const { hideModal: t, gid: n } = e,
          a = pe(n),
          l = (0, y.jE)(),
          [s, i] = (0, r.useMemo)(
            () =>
              a
                ? [a.length, a.filter((e) => !e.invitation_emailed).length]
                : [0, 0],
            [a],
          );
        return r.createElement(
          x.o0,
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
            r.createElement(j.t, {
              size: "medium",
              position: "center",
              string: (0, W.we)("#Loading"),
            }),
          a &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement("div", null, "There are ", s, " registrations."),
              i > 0 &&
                r.createElement(
                  Q.$n,
                  {
                    onClick: async () => {
                      await (async function (e, t) {
                        let n = new FormData();
                        n.append("sessionid", z.TS.SESSIONID),
                          n.append("gid", t);
                        const a = `${z.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                        try {
                          const r = await w().post(a, n, {
                            withCredentials: !0,
                          });
                          if (1 != r?.data?.success) {
                            let e = (0, X.H)(r);
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
                          let t = (0, X.H)(e);
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
                    r.createElement(ge, {
                      key: "regentry_" + e.steamid,
                      reg: e,
                    }),
                  ),
                ),
              ),
            ),
        );
      }
      function ge(e) {
        const { reg: t } = e,
          [n] = (0, A.UA)(t.partner_id);
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
      function pe(e) {
        const t = re(),
          n = (0, f.I)({
            queryKey: ["useMeetSteamAllRegistrationStatus", e],
            queryFn: () =>
              (async function (e, t) {
                const n = S.w.Init(ee.j3);
                n.Body().set_gids([t]), n.Body().set_type(6);
                const a = await ee.Nl.GetMultipleUserActionData(e, n);
                if (!a.BSuccess())
                  throw (
                    (console.error(
                      "useMeetSteamAllRegistrationStatus",
                      (0, X.H)(a),
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
                        (0, X.H)(t),
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
      function he(e) {
        const { hideModal: t, gid: n, title: a, group: l, session: s } = e,
          i = (0, U.a)(),
          c = pe(n),
          o = P(i, n, l?.group_id),
          u = (0, r.useMemo)(() => {
            const e = o?.data?.filter((e) => e.session_id == s.id),
              t = new Map();
            return (
              e?.forEach((e) => {
                t.set(new de.b2(e.steamid).GetAccountID(), e);
              }),
              t
            );
          }, [s, o]),
          m = c?.filter((e) => u.has(new de.b2(e.steamid).GetAccountID()));
        return r.createElement(
          x.o0,
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
            { className: me().ExportToCSV },
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
                          a = e.partner_id ? (0, A.Yd)(e.partner_id) : void 0;
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
                    Z.g.WriteCSVToFile(n, a);
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
                  r.createElement(q.o, {
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
                  r.createElement(Se, {
                    key: "regrow" + e.steamid,
                    regInfo: u.get(new de.b2(e.steamid).GetAccountID()),
                    inviteInfo: e,
                  }),
                ];
                for (let n = 0; n < e.guest_names?.length; n++)
                  t.push(
                    r.createElement(ve, {
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
      function Se(e) {
        const { inviteInfo: t, regInfo: n } = e,
          [a] = (0, A.UA)(t.partner_id);
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
      function ve(e) {
        const { guestName: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, "(guest)"),
          r.createElement("td", null, t),
        );
      }
      function _e(e) {
        const t = b.b.InitFromClanID((0, G.H7)()),
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
                href: `${z.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
              },
              "Open Meet Steam Event Dashboard",
            ),
          ),
          r.createElement("hr", null),
          n.map((e) => r.createElement(fe, { gid: e, key: e })),
        );
      }
      function fe(e) {
        const { gid: t } = e,
          n = b.b.InitFromClanID((0, G.H7)()),
          a = (0, U.a)(),
          l = (0, O.m)(a, (0, G.H7)(), t),
          s = l.isSuccess ? l.data : null,
          i = (0, k.RR)(t),
          c = i.GetNameWithFallback(0),
          o = (0, r.useMemo)(() => {
            const e = new Array();
            return (
              i.jsondata.meet_steam_groups?.forEach((t) => {
                t.sessions.forEach((n, a) => {
                  e.push({ group: t, session: n, firstSession: 0 == a });
                });
              }),
              e
            );
          }, [i.jsondata.meet_steam_groups]);
        return r.createElement(
          "div",
          { className: K().EventRow },
          r.createElement(
            "div",
            { className: K().EventMainDetails },
            r.createElement(
              "div",
              { className: K().TitleLine },
              r.createElement("div", { className: K().Title }, c),
              r.createElement(
                "div",
                { className: K().StartDate },
                (0, W.TW)(i?.startTime),
              ),
            ),
            r.createElement(
              "div",
              { className: K().ActionLine },
              r.createElement(
                "div",
                null,
                r.createElement(
                  "a",
                  {
                    href: `${z.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t}`,
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
                  { href: `${z.TS.STORE_BASE_URL}meetsteam/${t}` },
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
                  r.createElement(be, { gid: t }),
                  r.createElement(Ie, { gid: t }),
                  r.createElement(ye, { gid: t }),
                  r.createElement(we, { gid: t }),
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
                  Boolean(o.length > 0)
                    ? r.createElement(De, {
                        key: o[0].session.id,
                        gid: t,
                        group: o[0].group,
                        session: o[0].session,
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
                o
                  .filter((e, t) => t > 0)
                  .map((e) =>
                    r.createElement(
                      "tr",
                      { key: e.session.id },
                      r.createElement(De, {
                        group: e.group,
                        gid: t,
                        session: e.session,
                        rgAvailability: s,
                        firstSession: e.firstSession,
                      }),
                    ),
                  ),
              ),
            ),
          ),
        );
      }
      function ye(e) {
        const { gid: t } = e,
          [n, a, l] = (0, _.uD)();
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
            r.createElement(q.o, {
              tooltip:
                "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
            }),
          ),
          r.createElement(
            u.tH,
            null,
            r.createElement(
              $.E,
              { active: n },
              r.createElement(se, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function Ie(e) {
        const { gid: t } = e,
          [n, a, l] = (0, _.uD)();
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
              $.E,
              { active: n },
              r.createElement(le, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function we(e) {
        const { gid: t } = e,
          [n, a, l] = (0, _.uD)();
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
              $.E,
              { active: n },
              r.createElement(Ee, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function be(e) {
        const { gid: t } = e,
          n = (0, U.a)(),
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
                  const n = S.w.Init(v.VI),
                    a = b.b.InitFromClanID((0, G.H7)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(a.ConvertTo64BitString());
                  const r = await v.ZK.TestFireEmails(e, n);
                  return console.log("test fire", r), r.GetEResult();
                })(n, t);
                i(a);
              },
            },
            "Email Self",
          ),
          r.createElement(
            $.E,
            { active: a },
            r.createElement(
              x.o0,
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
                r.createElement(j.t, { string: (0, W.we)("#Loading") }),
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
      function De(e) {
        const {
            gid: t,
            group: n,
            rgAvailability: a,
            session: l,
            firstSession: s = !0,
          } = e,
          i = W.NT.GetWithFallback(n?.localized_session_title, 0),
          c = W.NT.GetWithFallback(n?.localized_session_description, 0),
          o = a?.find((e) => e.session_id == l.id),
          [m, d, E] = (0, _.uD)(),
          g = P((0, U.a)(), t, n?.group_id);
        return r.createElement(
          r.Fragment,
          null,
          s && Boolean(n)
            ? r.createElement(
                "td",
                null,
                i,
                r.createElement(q.o, { tooltip: c }),
              )
            : r.createElement("td", null),
          r.createElement(
            "td",
            null,
            r.createElement(
              "span",
              null,
              (0, W.TW)(l.rtime_start) + "@" + (0, Y.KC)(l.rtime_start),
              " (local time)",
            ),
          ),
          r.createElement("td", null, (0, Y.IH)(l.rtime_end - l.rtime_start)),
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
            g.isSuccess &&
              r.createElement(
                r.Fragment,
                null,
                g.data?.filter((e) => e.session_id == l.id).length,
              ),
          ),
          r.createElement(
            "td",
            null,
            g.isSuccess &&
              r.createElement(
                r.Fragment,
                null,
                g.data
                  ?.filter((e) => e.session_id == l.id)
                  .reduce((e, t) => e + t.guests_registered - 1, 0),
              ),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(Q.$n, { onClick: d }, "Details"),
            r.createElement(
              u.tH,
              null,
              r.createElement(
                $.E,
                { active: m },
                r.createElement(he, {
                  gid: t,
                  title: i,
                  group: n,
                  session: l,
                  hideModal: E,
                }),
              ),
            ),
          ),
        );
      }
      var Ae = n(48479),
        Ce = n(14336),
        Te = n(22837),
        Ne = n(55263),
        Be = n(29863);
      function Me(e) {
        const t = C(),
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
          s = D.TS.PARTNER_BASE_URL + "meetsteam/2025",
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
          { className: K().EventList },
          r.createElement(Q.pd, {
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
          r.createElement(
            "div",
            null,
            "Link to partner-facing survey: ",
            r.createElement("a", { href: s }, s),
          ),
          t
            .filter(
              (e) => 0 == a.length || e.name.includes(a) || e.id.includes(a),
            )
            .map((e) =>
              r.createElement(Re, {
                key: e.id,
                conf: e,
                nInterestCount: i.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          r.createElement($e, { rgSurveyInterest: n }),
        );
      }
      function Re(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return r.createElement(
          Ae.qx,
          { title: `${t.name}: ${n.toLocaleString()}`, bStartMinimized: !0 },
          r.createElement(Fe, { conf: t, rgSurveyInterest: a }),
        );
      }
      function Le(e) {
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
      function Fe(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, r.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          ),
          { bComplete: l, nCount: s } = (function (e) {
            const [t, n] = (0, r.useState)(!1),
              [a, l] = (0, r.useState)(0),
              s = (0, y.jE)();
            return (
              (0, r.useEffect)(() => {
                (async () => {
                  let t = 0;
                  for (const n of e) {
                    const e = n.results.partner_id,
                      a = new b.b(n.steamid).GetAccountID();
                    await Promise.all([
                      (0, A.qG)(e),
                      s.prefetchQuery({
                        queryKey: R(e),
                        queryFn: async () => L(e),
                      }),
                      s.prefetchQuery({
                        queryKey: T(a, e),
                        queryFn: async () => N(a, e),
                      }),
                    ]),
                      ++t,
                      l(t);
                  }
                  n(!0);
                })();
              }, [s, e]),
              { bComplete: t, nCount: a }
            );
          })(a);
        return l
          ? a && 0 != a.length
            ? r.createElement(Pe, { conf: t, rgSurveyInterest: a })
            : r.createElement("div", null, "No users with interest")
          : r.createElement(j.t, {
              position: "center",
              string: `Loading ${s} of ${a.length}`,
            });
      }
      function Pe(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, y.jE)();
        return r.createElement(
          "div",
          null,
          r.createElement(
            Q.$n,
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
                  n.forEach((t) => {
                    const n = [],
                      r = new de.b2(t.steamid);
                    n.push("" + r.GetAccountID());
                    const l = (0, Ce.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    n.push("" + s);
                    const i = t.results.email_override || "";
                    n.push("" + i),
                      n.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const c = M(a, r.GetAccountID(), s);
                    n.push(c ? c.realname : ""),
                      n.push(t.results.have_you_met_steam ? "yes" : "no"),
                      n.push("" + t.results.attending?.length),
                      n.push(t.results.country_code),
                      n.push(
                        t.results.preferred_language
                          ? (0, Te.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, A.Yd)(s);
                    n.push(o ? o.name : "");
                    const u = F(a, s);
                    u
                      ? (n.push("" + Le(u.strGrossUSD)),
                        n.push("" + u.nBestAppID),
                        n.push("" + u.nBestAppLongTermSalesRank))
                      : (n.push(""), n.push(""), n.push("")),
                      e.push(n);
                  });
                const r = t.name.replace(" ", "_") + "_conference_interest.csv";
                Z.g.WriteCSVToFile(e, r);
              },
            },
            "Export to CSV",
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
              n.map((e) =>
                r.createElement(ke, {
                  key: t.id + "_" + e.steamid,
                  strsteamid: e.steamid,
                  partnerID: e.results.partner_id,
                  registration: e.results,
                }),
              ),
            ),
          ),
        );
      }
      function ke(e) {
        const { partnerID: t, registration: n } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, r.createElement(Oe, { ...e })),
          r.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          r.createElement(Ue, { nPartnerID: t }),
          r.createElement("td", null, n.attending.length),
          r.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, Te.Lg)(n.preferred_language)
              : "",
          ),
          r.createElement("td", null, n.country_code),
          r.createElement("td", null, (0, W.TW)(n.submit_time)),
        );
      }
      function Oe(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          l = (0, Ce.hW)(t),
          s = B(new de.b2(t).GetAccountID(), n),
          i = s?.realname || l.data?.m_strPlayerName || s?.accountname;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, i),
          r.createElement("br", null),
          r.createElement("span", null, a.email_override || s?.email),
        );
      }
      function Ue(e) {
        const { nPartnerID: t } = e,
          [n] = (0, A.UA)(t),
          a = (function (e) {
            const t = (0, f.I)({
              queryKey: R(e),
              queryFn: async () => L(e),
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
              ? r.createElement(xe, { appid: a?.nBestAppID })
              : "N/A",
          ),
          r.createElement("td", null, a?.nBestAppLongTermSalesRank),
        );
      }
      const Ge = {};
      function xe(e) {
        const { appid: t } = e,
          [n] = (0, Ne.t7)(t, Ge),
          a = (0, r.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return r.createElement(
          Be.Qf,
          { item: a },
          r.createElement("span", null, n?.GetName() || t),
        );
      }
      function $e(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, y.jE)(),
          a = (0, r.useMemo)(
            () =>
              t.filter((e) =>
                Boolean(e.results?.suggestion?.trim().length > 0),
              ),
            [t],
          );
        return r.createElement(
          Ae.qx,
          {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
          },
          r.createElement(
            Q.$n,
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
                      r = new de.b2(t.steamid);
                    a.push("" + r.GetAccountID());
                    const l = (0, Ce.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    a.push("" + s);
                    const i = t.results.email_override || "";
                    a.push("" + i),
                      a.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const c = M(n, r.GetAccountID(), s);
                    a.push(c ? c.realname : ""),
                      a.push("" + t.results.attending?.length),
                      a.push(t.results.country_code),
                      a.push(
                        t.results.preferred_language
                          ? (0, Te.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, A.Yd)(s);
                    a.push(o ? o.name : "");
                    const u = F(n, s);
                    u
                      ? (a.push("" + Le(u.strGrossUSD)),
                        a.push("" + u.nBestAppID),
                        a.push("" + u.nBestAppLongTermSalesRank))
                      : (a.push(""), a.push(""), a.push("")),
                      a.push(t.results.suggestion),
                      e.push(a);
                  });
                Z.g.WriteCSVToFile(e, "suggestsion.csv");
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
                r.createElement(je, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function je(e) {
        const { survey: t } = e;
        new de.b2(t.steamid);
        return r.createElement(
          "tr",
          null,
          r.createElement(
            "td",
            null,
            r.createElement(Oe, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          r.createElement(Ue, { nPartnerID: t.results.partner_id }),
          r.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      var qe = n(98019),
        We = n(58632),
        Ye = n.n(We),
        ze = n(72963);
      const He = r.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            Ve ||
              (Ve = new (Ye())(
                async (e) => {
                  const t = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = {
                      sessionid: D.TS.SESSIONID,
                      strAccountIDs: e.join(","),
                    },
                    a = await w().get(t, { params: n, withCredentials: !0 });
                  if (!a || 200 != a?.status || 1 != a?.data?.success)
                    throw `Failed to load app to user email and langs: ${((0, X.H))(a).strErrorMsg}`;
                  const r = new Map();
                  return (
                    a.data.users.forEach((e) => {
                      const t = new b.b(e.steamid);
                      r.set(t.GetAccountID(), e);
                    }),
                    e.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return Ve;
          })().load(e),
      });
      function Ke(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let Ve;
      var Je = n(73745);
      function Qe(e) {
        const t = (function (e) {
            const t = (0, f.I)({
              queryKey: ["useMeetSteamSaleOperators"],
              queryFn: async () => {
                const t = S.w.Init(v.Rl),
                  n = new Date();
                n.setFullYear(n.getFullYear() - 2),
                  t.Body().set_rt_oldest_date(0);
                const a = await v.ZK.GetSaleEventOrganizers(e, t);
                return a.BSuccess()
                  ? a
                      .Body()
                      .info()
                      .map((e) => e.toObject())
                  : [];
              },
            });
            return t.isLoading ? null : t.data;
          })((0, U.a)()),
          n = (0, r.useMemo)(() => {
            if (!t) return null;
            const e = new Set(qe.b.map((e) => e.id));
            return t
              .filter((t) => !e.has(t.accountid))
              .sort(
                (e, t) => t.clan_event_gids?.length - e.clan_event_gids.length,
              );
          }, [t]);
        return n
          ? r.createElement(
              "div",
              null,
              r.createElement(
                Q.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      n.forEach((t) => {
                        const n = (0, Ce.z0)(t.accountid),
                          a =
                            ((r = t.accountid),
                            ze.L.getQueryData(["UserEmailAndLangs", r]));
                        var r;
                        e.push([
                          n?.m_strPlayerName || "",
                          "" + t.accountid,
                          a?.email_address || "",
                          t.clan_event_gids?.length.toLocaleString(),
                        ]);
                      });
                    Z.g.WriteCSVToFile(e, "sale_operators.csv");
                  },
                },
                "CSV Export",
                r.createElement(q.o, {
                  tooltip: "Wait until the page finishes loading before export",
                }),
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
                    r.createElement("th", null, "User"),
                    r.createElement("th", null, "Email"),
                    r.createElement("th", null, "Events"),
                  ),
                ),
                r.createElement(
                  "tbody",
                  null,
                  n.map((e) =>
                    r.createElement(Xe, { key: e.accountid, organizer: e }),
                  ),
                ),
              ),
            )
          : r.createElement(j.t, {
              string: (0, W.we)("#Loading"),
              size: "medium",
            });
      }
      function Xe(e) {
        const { organizer: t } = e,
          n = (0, r.useMemo)(
            () => b.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          a = (0, Ce.hW)(n),
          l = (function (e) {
            const t = r.useContext(He);
            return (0, f.I)(Ke(t, e));
          })(t.accountid),
          s = a.data?.m_strPlayerName || "";
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, s, " (", t.accountid, ")"),
          r.createElement("td", null, l?.data?.email_address),
          r.createElement(
            "td",
            null,
            r.createElement(Ze, {
              name: s,
              rgClanEventGIDs: t.clan_event_gids,
            }),
          ),
        );
      }
      function Ze(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [a, l, s] = (0, Je.uD)();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            Q.$n,
            { onClick: l },
            "See ",
            n.length.toLocaleString(),
            " Events",
          ),
          r.createElement(
            $.E,
            { active: a },
            r.createElement(
              x.o0,
              { bAlertDialog: !0, closeModal: s, strTitle: `${t}'s Events` },
              n.map((e) => r.createElement(et, { gid: e, key: e })),
            ),
          ),
        );
      }
      function et(e) {
        const { gid: t } = e,
          n = (0, k.RR)(t);
        return n
          ? r.createElement(
              "a",
              {
                href: `${z.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
                target: "_blank",
              },
              r.createElement("div", null, n.GetNameWithFallback(0)),
              r.createElement("img", { src: n.GetImageURL("capsule", 0) }),
            )
          : r.createElement("div", null, "Loading ", t);
      }
      function tt(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Survey Results",
              key: "survey",
              contents: r.createElement(u.tH, null, r.createElement(Me, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: r.createElement(u.tH, null, r.createElement(_e, null)),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: r.createElement(u.tH, null, r.createElement(Qe, null)),
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
      var nt = n(65946),
        at = n(79645),
        rt = n(1909),
        lt = n(56330),
        st = n(52038),
        it = n(85761),
        ct = n.n(it);
      function ot(e) {
        const t = (function () {
            const [e] = (0, r.useState)(() =>
              (0, D.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, D.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, Ce.js)(D.iA.accountid),
          [l, s] = (0, r.useState)(!1),
          [i, c] = (0, r.useState)(!1),
          [o, u] = (0, r.useState)(!1),
          [m, d] = (0, r.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? r.createElement(j.t, {
                size: "medium",
                position: "center",
                string: (0, W.we)("#Loading"),
              })
            : r.createElement(
                "div",
                { className: (0, st.A)(p().AdminPageCtn, ct().Ctn) },
                r.createElement(
                  "div",
                  { className: p().PageTitle },
                  (0, W.we)("#MeetSteam_MainTitle"),
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
                        (0, W.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          r.createElement("br", null),
                        ),
                      ),
                      r.createElement(
                        "p",
                        { className: p().IntroText },
                        (0, W.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(mt, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(ut, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: (0, st.A)(p().SectionCtn, p().ActionBar) },
                      r.createElement(
                        Q.jn,
                        {
                          onClick: async () => {
                            c(!0), s(!1), u(!1);
                            const e = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", D.TS.SESSIONID),
                              t.append("registrationJson", JSON.stringify(m));
                            try {
                              const n = await w().post(e, t, {
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
                        (0, W.we)("#Button_Submit"),
                      ),
                      i &&
                        r.createElement(j.t, {
                          size: "medium",
                          position: "center",
                          string: (0, W.we)("#Saving"),
                        }),
                      o &&
                        r.createElement(
                          "div",
                          null,
                          (0, W.we)("#Button_Saved"),
                        ),
                      l &&
                        r.createElement(
                          "div",
                          { className: lt.ErrorStylesWithIcon },
                          (0, W.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : r.createElement(
              "div",
              { className: ct().Ctn },
              (0, W.we)("#MeetSteam_closed"),
            );
      }
      function ut(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = C();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("h1", null, (0, W.we)("#MeetSteam_Events_Interest")),
          r.createElement(
            "p",
            null,
            (0, W.PP)("#MeetSteam_Events_title", "2025"),
          ),
          r.createElement(
            "p",
            null,
            r.createElement("span", { className: ct().Indicator }, "*"),
            " ",
            (0, W.PP)("#MeetSteam_Events_desc"),
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
                          { className: ct().Indicator },
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
                    r.createElement(Q.Yh, {
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
                      tooltip: (0, W.we)("#MeetSteam_attend_ttip"),
                    }),
                  ),
                ),
              ),
            ),
          ),
          r.createElement("br", null),
          r.createElement(Q.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, W.we)("#MeetSteam_others"),
          }),
        );
      }
      function mt(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, Ce.js)(D.iA.accountid),
          l = (function (e) {
            const t = (function () {
                const [e] = (0, r.useState)(
                  () =>
                    (0, D.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, r.useState)(() =>
                  (0, D.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              a = B(D.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [s, i] = (0, r.useState)(() =>
            Boolean((t.email_override && t.email_override != l) || !l),
          ),
          [c, o, u] = (0, nt.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? r.createElement(
              "div",
              null,
              r.createElement("h1", null, (0, W.we)("#MeetSteam_You")),
              r.createElement("p", null, (0, W.we)("#MeetSteam_You_Desc")),
              r.createElement(dt, {
                nPartnerID: t.partner_id,
                label: (0, W.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              r.createElement(
                "div",
                { className: ct().EmailInfoRow },
                r.createElement(
                  "div",
                  { className: ct().EmailField },
                  r.createElement(Q.pd, {
                    type: "string",
                    label: (0, W.we)("#MeetSteam_You_Email"),
                    disabled: !s,
                    value: t.email_override || l || "",
                    placeholder: (0, W.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !s &&
                  r.createElement(Q.Yh, {
                    checked: s,
                    onChange: i,
                    label: (0, W.we)("#MeetSteam_You_Update"),
                    tooltip: (0, W.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              r.createElement(Q.JU, null, (0, W.we)("#MeetSteam_NeverMet")),
              r.createElement(Q.Yh, {
                label: (0, W.we)("#MeetSteam_NeverMetNo"),
                checked: c,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              r.createElement(
                Q.JU,
                null,
                (0, W.we)("#MeetSteam_CapabableEnglish"),
              ),
              r.createElement(
                "div",
                { className: ct().RadioButtonCtn },
                r.createElement(Q.Od, {
                  className: ct().RadioButtons,
                  checked: !o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, W.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                r.createElement(Q.Od, {
                  className: ct().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, Te.sf)(D.TS.LANGUAGE),
                    }),
                  label: (0, W.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              o &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("br", null),
                  r.createElement(
                    Q.JU,
                    null,
                    (0, W.we)("#MeetSteam_LanguagePref"),
                  ),
                  r.createElement(rt.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, W.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : r.createElement(j.t, {
              size: "medium",
              position: "center",
              string: (0, W.we)("#Loading"),
            });
      }
      function dt(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          l = (0, at.c)(D.iA.accountid);
        if (!l)
          return r.createElement(j.t, {
            size: "small",
            position: "center",
            string: (0, W.we)("#Loading"),
          });
        if (1 == l.length) return null;
        const s = [];
        return (
          l.forEach((e) =>
            s.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          r.createElement(Q.m, {
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
      var Et = n(20587);
      const gt = {
        YearlySurvery: (e = ":year") => `/${e}`,
        AdminDashboard: () => "/admin",
      };
      function pt(e) {
        return (
          (0, r.useEffect)(() => {
            Et.O3.Init();
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
                    r.createElement(c.z, {
                      ...e,
                      strConfigID: "application_config",
                    }),
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: gt.AdminDashboard(),
                  component: tt,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: gt.YearlySurvery(":year(\\d+)"),
                  component: ot,
                }),
                r.createElement(s.qh, { component: o.a }),
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
        r = n.n(a),
        l = n(20194),
        s = n(68797),
        i = n(30470),
        c = n(78327);
      function o(e) {
        const { data: t, isLoading: n } = (0, l.I)({
          queryKey: ["PartnerInfoList", e],
          queryFn: () =>
            (async function (e) {
              const t = { accountid: e, origin: self.origin };
              let n = `${i.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
              "partnerweb" == (0, c.yK)() &&
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
