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
        CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
        CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
        Full: "ndEhtgivpXhCilYDnAAVe",
        MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
        MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
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
    13038: (e) => {
      e.exports = {
        Ctn: "_1olTwzPkPjzL36u0WgyDG0",
        Indicator: "_3d0cYrmQzzda_P3DQ994kX",
      };
    },
    68248: (e) => {
      e.exports = { FeedbackText: "_3jpQHJv-0p0qOhN1Fx0wER" };
    },
    30603: (e) => {
      e.exports = {
        ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
        Table: "_2JSoC65mCQdxh-B_srjUjf",
      };
    },
    2516: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => r });
      var a = n(9161);
      function r(e, t, n) {
        const r = [],
          l = n.map((e) => e.header);
        r.push(l);
        for (const e of t) {
          const t = [];
          for (const a of n) {
            const n = e[a.accessorKey];
            t.push(null != n ? n.toString() : "");
          }
          r.push(t);
        }
        a.g.WriteCSVToFile(r, e);
      }
    },
    36637: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => Jt, default: () => Qt });
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
        v = n(56545),
        _ = n(85737),
        f = n(64753),
        S = n(20194),
        y = n(75233),
        I = n(41735),
        w = n.n(I),
        D = n(17720),
        b = n(78327),
        A = n(32179);
      function C() {
        const [e] = r.useState(() =>
          (0, b.Tc)("events_list", "application_config"),
        );
        return e;
      }
      function T(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function N(e) {
        const t = `${b.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: b.TS.SESSIONID, partnerid: e },
          a = await w().get(t, { params: n });
        return a?.data?.data;
      }
      function M(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function B(e, t, n) {
        return (0, S.I)({
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
      var P = n(38390),
        k = n(90362),
        R = n(96001),
        L = n(16676),
        F = n(44736),
        G = n(78395),
        x = n(21869),
        O = n(22797),
        $ = n(26408),
        U = n(52038),
        z = n(61859),
        j = n(91675),
        Y = n(30470),
        K = n(30565),
        q = n.n(K),
        H = n(34283),
        W = n.n(H),
        V = n(68797),
        J = n(9161),
        Q = n(65689),
        Z = n(81393),
        X = n(96059);
      class ee {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            ee.s_Singleton ||
              ((ee.s_Singleton = new ee()), ee.s_Singleton.Init()),
            ee.s_Singleton
          );
        }
        Init() {
          const e = (0, h.Tc)("store_feature_token", "application_config");
          (0, Z.w)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new X.D(Y.TS.WEBAPI_BASE_URL, e));
        }
      }
      function te() {
        return ee.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      function ne(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(null),
          [c, o] = r.useState(0),
          [u, d] = r.useState(""),
          [E, g] = r.useState(""),
          [p, h] = r.useState(!1),
          v = te(),
          _ = (0, S.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, c],
            queryFn: async () => {
              const e = {
                  steamid: D.b.InitFromAccountID(c).ConvertTo64BitString(),
                  gid: n,
                  type: 6,
                },
                t = await Q.Nl.GetUserActionData(v, e);
              return t.BSuccess() && t.Body().jsondata()
                ? JSON.parse(t.Body().jsondata())
                : {};
            },
            enabled: Boolean(n) && c > 0,
          });
        r.useEffect(() => {
          _.isLoading ||
            (_.isSuccess &&
              (d(_.data.partner_id ? _.data.partner_id.toString() : ""),
              g(_.data.email_override ?? ""),
              h(_.data.allow_registration_if_full ?? !1)));
        }, [_.isLoading, _.isSuccess, _.data]);
        return r.createElement(
          G.o0,
          {
            strTitle: "Invite User",
            bOKDisabled: !c || a || _.isLoading,
            onOK: async () => {
              l(!0);
              const e = Number.parseInt(u) > 0 ? Number.parseInt(u) : 0,
                a = await se(
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
              r.createElement(L.pd, {
                type: "number",
                label: "Account ID",
                onChange: (e) => o(Number.parseInt(e.currentTarget.value)),
                value: c,
              }),
              0 != c &&
                !_.isLoading &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(L.pd, {
                    type: "number",
                    label: "Partner ID (optional)",
                    onChange: (e) => d(e.currentTarget.value),
                    value: u,
                  }),
                  r.createElement(L.pd, {
                    type: "text",
                    label: "Email override (optional)",
                    onChange: (e) => g(e.currentTarget.value.trim()),
                    value: E,
                  }),
                  r.createElement(L.Yh, {
                    controlled: !0,
                    checked: p,
                    onChange: h,
                    label: "Allow if registration is full",
                  }),
                ),
            ),
          a &&
            r.createElement(O.t, {
              size: "small",
              position: "center",
              string: (0, z.we)("#Saving"),
            }),
          _.isLoading &&
            r.createElement(O.t, {
              size: "small",
              position: "center",
              string: (0, z.we)("#Loading"),
            }),
        );
      }
      function ae(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(null),
          [s, i] = (0, r.useState)(!1),
          [c, o] = (0, r.useState)(null),
          [u, d] = (0, r.useState)(null),
          [E, g] = (0, r.useState)(null);
        return r.createElement(
          G.o0,
          {
            strTitle: "Invite Users",
            bOKDisabled: !a || 0 == a.length || null != u,
            strCancelButtonText: null !== u ? "Close" : "Cancel",
            onOK: async () => {
              i(!0);
              const e = await se(n, a, !1);
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
            r.createElement(O.t, {
              size: "small",
              position: "center",
              string: (0, z.we)("#Saving"),
            }),
          null == a
            ? r.createElement(le, { setInvites: l })
            : r.createElement(re, { rgInvites: a }),
        );
      }
      function re(e) {
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
      function le(e) {
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
                J.g.WriteCSVToFile(t, "invite_template.csv");
              },
            },
            "Download Template Example",
          ),
          r.createElement("br", null),
          r.createElement("br", null),
          r.createElement(
            L.$n,
            null,
            r.createElement(
              "label",
              {
                className: W().ImportButtonLabel,
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
                      a = await J.g.ParseCSVFile(n);
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
      async function se(e, t, n) {
        const a = t.map((e) => e.nAccountID).join(","),
          r = t.map((e) => e.nPartnerID).join(","),
          l = t.map((e) => e.strEmailOverride).join(","),
          s = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let i = new FormData();
        i.append("sessionid", Y.TS.SESSIONID),
          i.append("gid", e),
          i.append("accounts", a),
          i.append("partnerids", r),
          i.append("emailoverride", l),
          i.append("allowregistrationiffull", s),
          i.append("forceupdate", n ? "1" : "0");
        const c = `${Y.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await w().post(c, i, { withCredentials: !0 });
          if (1 != e?.data?.success) {
            let t = (0, V.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, V.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var ie = n(16666),
        ce = n(66051),
        oe = n(54806),
        ue = n(58632),
        me = n.n(ue);
      function de(e) {
        const t = te(),
          n = r.useContext(ge),
          a = (0, S.I)(pe(n, t, e));
        return a.isLoading ? null : a.data;
      }
      function Ee(e) {
        const t = te(),
          n = r.useContext(ge);
        return (0, oe.E)({ queries: e.map((e) => pe(n, t, e)) });
      }
      const ge = r.createContext({
        loadMeetSteamAllRegistration: async (e, t) =>
          await (function (e) {
            he ||
              (he = new (me())(
                async (t) => {
                  const n = v.w.Init(Q.j3);
                  n.Body().set_gids([...t]), n.Body().set_type(6);
                  const a = await Q.Nl.GetMultipleUserActionData(e, n);
                  if (!a.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${a.GetErrorMessage()}`;
                  const r = new Map();
                  return (
                    a
                      .Body()
                      .entries()
                      .forEach((e) => {
                        try {
                          const t = JSON.parse(e.jsondata());
                          if (!("steamid" in t) || !t.steamid) {
                            t.steamid = e.steamid();
                            const n = new D.b(t.steamid);
                            t.accountid = n.GetAccountID();
                          }
                          const n = e.gid();
                          return (
                            r.has(n) ? r.get(n).push(t) : r.set(n, [t]), [t]
                          );
                        } catch (t) {
                          throw `Failed to parse GetMultipleUserActionData with details: ${e.steamid()}`;
                        }
                      }),
                    t.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 5 },
              ));
            return he;
          })(e).load(t),
      });
      function pe(e, t, n) {
        return {
          queryKey: ["MeetSteamAllRegistrationStatus", n],
          queryFn: () => e.loadMeetSteamAllRegistration(t, n),
          enabled: !!n,
        };
      }
      let he;
      var ve = n(2879);
      function _e(e, t) {
        const n = (0, R.a)(),
          a = r.useContext(Se),
          l = (0, S.I)(ye(a, n, e, t));
        return l.isLoading ? null : l.data;
      }
      function fe(e, t) {
        return ve.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const Se = r.createContext({
        loadPartnerEmailAndName: async (e, t, n) =>
          await (function (e) {
            Ie ||
              (Ie = new (me())(
                async (t) => {
                  const n = v.w.Init(_.g9);
                  n.Body().set_accountids(t.map((e) => e.accountID)),
                    n.Body().set_partnerids(t.map((e) => e.partnerID));
                  const a = await _.ZK.GetBatchPartnerEmailAndName(e, n);
                  if (!a.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${a.GetErrorMessage()}`;
                  const r = new Map();
                  return (
                    a
                      .Body()
                      .info()
                      .forEach((e) => {
                        r.set(
                          e.accountid() + "_" + e.partnerid(),
                          e.toObject(),
                        );
                      }),
                    t.map((e) => r.get(e.accountID + "_" + e.partnerID) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return Ie;
          })(e).load({ accountID: t, partnerID: n }),
      });
      function ye(e, t, n, a) {
        return {
          queryKey: ["PartnerEmailAndName", n, a],
          queryFn: () => e.loadPartnerEmailAndName(t, n, a),
          enabled: !!n || !!a,
        };
      }
      let Ie;
      function we(e) {
        const { rgEventGIDs: t } = e,
          [n, a, l] = (0, f.uD)(),
          [s, i] = (0, r.useState)(null);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, " | "),
          r.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Analyse Top Partner Coverage",
          ),
          r.createElement(
            x.E,
            { active: n },
            r.createElement(
              u.tH,
              null,
              r.createElement(
                G.o0,
                {
                  closeModal: l,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                },
                Boolean(null == s)
                  ? r.createElement(Ne, { rgEventGIDs: t, fnSelectedEvents: i })
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(Te, { rgGidMeetSteamEvents: s }),
                      r.createElement(
                        L.$n,
                        { onClick: () => i(null) },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const De = (0, ie.FB)();
      function be(e) {
        return (
          (e = e?.filter(
            (t, n) =>
              0 == n || !e.slice(0, n).some((e) => e.accountid == t.accountid),
          )),
          e
            ?.map(
              (e) =>
                e.name ||
                fe(e.accountid, e.partner_id)?.realname ||
                e.accountid,
            )
            .join(",") || ""
        );
      }
      function Ae(e) {
        return be(e.cell.getValue());
      }
      function Ce(e, t) {
        const n = Ee(t),
          [a, l, s] = (0, r.useMemo)(() => {
            if (n.filter((e) => !e.isLoading).length != n.length)
              return [null, [], []];
            const t = new Map(),
              a = new Set(e),
              r = new Map();
            n.forEach((e) =>
              e.data.forEach((e) => {
                if (
                  a.has(e.partner_id) &&
                  (r.has(e.partner_id)
                    ? r.get(e.partner_id).push(e)
                    : r.set(e.partner_id, [e]),
                  !e.name)
                ) {
                  const n = e.accountid;
                  t.set(`${n}_${e.partner_id}`, {
                    accountID: n,
                    partnerID: e.partner_id,
                  });
                }
              }),
            );
            const l = Array.from(t.values());
            return [r, l.map((e) => e.accountID), l.map((e) => e.partnerID)];
          }, [n, e]),
          i = (function (e, t) {
            const n = (0, R.a)(),
              a = r.useContext(Se);
            return (0, oe.E)({ queries: e.map((e, r) => ye(a, n, e, t[r])) });
          })(l, s);
        return i.filter((e) => !e.isLoading).length == i.length ? a : null;
      }
      function Te(e) {
        const { rgGidMeetSteamEvents: t } = e,
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("partners_to_verify", "application_config"),
            );
            return e;
          })(),
          a = (0, A.vh)(n),
          l = Ce(n, t),
          s = (0, r.useMemo)(() => {
            if (!a || !l) return null;
            const e = [];
            return (
              n.forEach((t) => {
                const n = l.get(t);
                e.push({
                  partner_id: t,
                  partner_name: (0, A.Yd)(t)?.name || "Unknown",
                  invitations:
                    n?.filter(
                      (e) =>
                        e.invited &&
                        !Object.keys(e).some((e) =>
                          e.startsWith("registration_emailed"),
                        ),
                    ) || [],
                  registrations:
                    n?.filter((e) =>
                      Object.keys(e).some((e) =>
                        e.startsWith("registration_emailed"),
                      ),
                    ) || [],
                });
              }),
              e
            );
          }, [a, l, n]),
          i = (0, r.useMemo)(
            () => [
              De.accessor("partner_id", { header: "Partner ID", size: 100 }),
              De.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              De.accessor("invitations", {
                header: "Invitations",
                cell: Ae,
                size: 300,
              }),
              De.accessor("registrations", {
                header: "Registered to Attend",
                cell: Ae,
                size: 300,
              }),
            ],
            [],
          );
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(L.JU, null, "Partner Analysis"),
          Boolean(s)
            ? r.createElement(
                u.tH,
                null,
                r.createElement(ce.k, {
                  columns: i,
                  data: s,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: n.length,
                }),
                r.createElement("br", null),
                r.createElement(
                  L.$n,
                  {
                    id: "download-csv",
                    onClick: function () {
                      const e = [],
                        t = [];
                      for (const e of i) t.push(e.header);
                      e.push(t);
                      for (const t of s) {
                        const n = [];
                        for (const e of i) {
                          const a = t[e.accessorKey];
                          n.push(
                            "invitations" == e.accessorKey ||
                              "registrations" == e.accessorKey
                              ? be(a)
                              : a.toString(),
                          );
                        }
                        e.push(n);
                      }
                      J.g.WriteCSVToFile(e, "partneranalysis.csv");
                    },
                    style: { width: "120px" },
                  },
                  "Download CSV",
                ),
              )
            : r.createElement(O.t, {
                string: (0, z.we)("#Loading"),
                position: "center",
              }),
        );
      }
      function Ne(e) {
        const { rgEventGIDs: t, fnSelectedEvents: n } = e,
          [a, l] = (0, r.useState)([]);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(L.JU, null, "Choose Events"),
          t.map((e) =>
            r.createElement(Me, {
              key: e,
              gidClanEvent: e,
              rgSelected: a,
              fnSetSelected: l,
            }),
          ),
          r.createElement(
            L.$n,
            { disabled: 0 == a.length, onClick: () => n(a) },
            "Continue",
          ),
        );
      }
      function Me(e) {
        const { gidClanEvent: t, rgSelected: n, fnSetSelected: a } = e,
          l = (0, P.RR)(t).GetNameWithFallback(0);
        return r.createElement(L.Yh, {
          label: l,
          checked: n.includes(t),
          onChange: (e) => {
            const r = n.indexOf(t),
              l = Boolean(r >= 0);
            e && !l
              ? a([...n, t])
              : !e && l && a([...n.slice(0, r), ...n.slice(r + 1)]);
          },
        });
      }
      var Be = n(30603),
        Pe = n.n(Be),
        ke = n(29233);
      function Re(e) {
        const { hideModal: t, gid: n } = e,
          a = de(n),
          l = (0, y.jE)(),
          [s, i] = (0, r.useMemo)(
            () =>
              a
                ? [a.length, a.filter((e) => !e.invitation_emailed).length]
                : [0, 0],
            [a],
          );
        return r.createElement(
          G.o0,
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
            r.createElement(O.t, {
              size: "medium",
              position: "center",
              string: (0, z.we)("#Loading"),
            }),
          a &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement("div", null, "There are ", s, " registrations."),
              i > 0 &&
                r.createElement(
                  L.$n,
                  {
                    onClick: async () => {
                      await (async function (e, t) {
                        let n = new FormData();
                        n.append("sessionid", Y.TS.SESSIONID),
                          n.append("gid", t);
                        const a = `${Y.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                        try {
                          const r = await w().post(a, n, {
                            withCredentials: !0,
                          });
                          if (1 != r?.data?.success) {
                            let e = (0, V.H)(r);
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
                          let t = (0, V.H)(e);
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
                    r.createElement(Le, {
                      key: "regentry_" + e.steamid,
                      reg: e,
                    }),
                  ),
                ),
              ),
            ),
        );
      }
      function Le(e) {
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
      function Fe(e) {
        const { hideModal: t, gid: n, title: a, group: l, session: s } = e,
          i = (0, R.a)(),
          c = de(n),
          o = B(i, n, l?.group_id),
          u = (0, r.useMemo)(() => {
            const e = o?.data?.filter((e) => e.session_id == s.id),
              t = new Map();
            return (
              e?.forEach((e) => {
                t.set(new ke.b2(e.steamid).GetAccountID(), e);
              }),
              t
            );
          }, [s, o]),
          m = c?.filter((e) => u.has(new ke.b2(e.steamid).GetAccountID()));
        return r.createElement(
          G.o0,
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
            { className: Pe().ExportToCSV },
            r.createElement(
              "a",
              {
                onClick: () =>
                  (function (e, t, n) {
                    const a = [];
                    a.push([
                      "SteamID",
                      "Name",
                      "Invited",
                      "Partner",
                      "Email Override",
                      "Guest Count",
                      "Reg Confirmation Email Sent",
                    ]),
                      t.forEach((e) => {
                        const t = [],
                          r = e.partner_id ? (0, A.Yd)(e.partner_id) : void 0;
                        t.push("" + e.steamid),
                          t.push(e.name),
                          t.push(e.invited ? "YES" : ""),
                          t.push(r ? `${r?.name} (${e.partner_id})` : ""),
                          t.push(e.email_override),
                          t.push(
                            "" +
                              (e.guests_registered
                                ? e.guests_registered - 1
                                : 0),
                          );
                        const l = new ke.b2(e.steamid);
                        if (n.has(l.GetAccountID())) {
                          const a = Ge(n.get(l.GetAccountID()), e);
                          if (a) {
                            const e = new Date(1e3 * a)
                              .toISOString()
                              .replace("T", " ")
                              .split(".")[0];
                            t.push(e);
                          } else t.push("");
                        } else t.push("");
                        a.push(t);
                        for (let t = 0; t < e.guest_names?.length; t++) {
                          const n = [];
                          n.push("(guest)"),
                            n.push(e.guest_names[t]),
                            a.push(n);
                        }
                      });
                    const r =
                      "meetsteam_" +
                      e.replace(/[ <>:"/\\|?*\x00-\x1F]/g, "_") +
                      ".csv";
                    J.g.WriteCSVToFile(a, r);
                  })(a, m, u),
              },
              "Export to CSV",
            ),
          ),
          r.createElement(
            "table",
            { className: Pe().Table },
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
                  r.createElement($.o, {
                    tooltip:
                      "Additional guests, doesn't include main registrant",
                  }),
                ),
                r.createElement("th", null, "Reg Confirm Email Sent"),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              m?.flatMap((e) => {
                const t = [
                  r.createElement(xe, {
                    key: "regrow" + e.steamid,
                    regInfo: u.get(new ke.b2(e.steamid).GetAccountID()),
                    inviteInfo: e,
                  }),
                ];
                for (let n = 0; n < e.guest_names?.length; n++)
                  t.push(
                    r.createElement(Oe, {
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
      function Ge(e, t) {
        const n = `registration_emailed_${e.group_id}_${e.session_id}`;
        let a = null;
        return n in t && (a = t[n]), a;
      }
      function xe(e) {
        const { inviteInfo: t, regInfo: n } = e,
          [a] = (0, A.UA)(t.partner_id),
          l = Ge(n, t);
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
          r.createElement("td", null, l ? (0, z.TW)(l) : ""),
        );
      }
      function Oe(e) {
        const { guestName: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, "(guest)"),
          r.createElement("td", null, t),
        );
      }
      var $e = n(2516);
      function Ue(e) {
        const { rgEventGIDs: t } = e,
          [n, a, l] = (0, f.uD)(),
          [s, i] = (0, r.useState)(null);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, " | "),
          r.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Show Registration Across Events",
          ),
          r.createElement(
            x.E,
            { active: n },
            r.createElement(
              u.tH,
              null,
              r.createElement(
                G.o0,
                {
                  closeModal: l,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                },
                Boolean(null == s)
                  ? r.createElement(Ne, { rgEventGIDs: t, fnSelectedEvents: i })
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(je, { rgGidMeetSteamEvents: s }),
                      r.createElement(
                        L.$n,
                        { onClick: () => i(null) },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const ze = (0, ie.FB)();
      function je(e) {
        const { rgGidMeetSteamEvents: t } = e,
          { rgAllRegistrations: n, rgPartnerIDs: a } = (function (e) {
            const t = Ee(e),
              [n, a] = (0, r.useMemo)(() => {
                if (t.filter((e) => !e.isLoading).length != t.length)
                  return [null, null];
                const e = new Array(),
                  n = new Set();
                return (
                  t.forEach((t) => {
                    t.data.forEach((t) => {
                      t.guests_registered > 0 &&
                        (e.push(t), t.partner_id && n.add(t.partner_id));
                    });
                  }),
                  [Array.from(n), e]
                );
              }, [t]);
            return { rgAllRegistrations: a, rgPartnerIDs: n };
          })(t),
          l = (0, A.vh)(a),
          s = (0, r.useMemo)(() => {
            if (!l || !n) return null;
            const e = [];
            return (
              n.forEach((t) => {
                (0, A.Yd)(t.partner_id);
                e.push({
                  partner_id: t.partner_id ? "" + t.partner_id : "",
                  partner_name: (0, A.Yd)(t.partner_id)?.name || "Unknown",
                  name: t.name,
                  accountid: t.accountid,
                  email: t.email_override,
                  guest_registrated: t.guests_registered - 1,
                  guest_names:
                    t.guest_names?.length > 0 ? t.guest_names.join(",") : "",
                });
              }),
              e
            );
          }, [l, n]),
          i = (0, r.useMemo)(
            () => [
              ze.accessor("name", { header: "Name", size: 200 }),
              ze.accessor("accountid", { header: "Account ID", size: 150 }),
              ze.accessor("email", { header: "Email", size: 150 }),
              ze.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              ze.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              ze.accessor("partner_id", { header: "Partner ID", size: 100 }),
              ze.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
            ],
            [],
          );
        return l && a && s
          ? r.createElement(
              r.Fragment,
              null,
              r.createElement(L.JU, null, "Registations"),
              Boolean(s)
                ? r.createElement(
                    u.tH,
                    null,
                    r.createElement(ce.k, {
                      columns: i,
                      data: s,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: a.length,
                    }),
                    r.createElement("br", null),
                    r.createElement(
                      L.$n,
                      {
                        id: "download-csv",
                        onClick: () =>
                          (0, $e.K)(
                            "registrationdump.csv",
                            s,
                            i.map((e) => ({
                              accessorKey: e.accessorKey,
                              header:
                                "string" == typeof e.header
                                  ? e.header
                                  : (e.accessorKey ?? ""),
                            })),
                          ),
                        style: { width: "120px" },
                      },
                      "Download CSV",
                    ),
                  )
                : r.createElement(O.t, {
                    string: (0, z.we)("#Loading"),
                    position: "center",
                  }),
            )
          : r.createElement(O.t, { string: (0, z.we)("#Loading") });
      }
      var Ye = n(65);
      function Ke(e) {
        const t = D.b.InitFromClanID((0, F.H7)()),
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("event_gids", "application_config"),
            );
            return e;
          })(),
          [a, l] = r.useState(!1),
          { bIsLoading: s, events: i } = (0, P.PB)(n),
          c = r.useMemo(() => {
            if (!i) return null;
            const e =
                a && i
                  ? [...i]
                  : i?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
              t = Array.from(
                (0, Ye.bv)(e, (e) => (0, Ye.J2)(new Date(1e3 * e.startTime))),
              );
            return t?.sort((e) => -e[0]), t;
          }, [i, a]);
        return s
          ? r.createElement(O.t, null)
          : c
            ? r.createElement(
                "div",
                null,
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "a",
                    {
                      href: `${Y.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                    },
                    "Open Meet Steam Event Dashboard",
                  ),
                  r.createElement(we, { rgEventGIDs: n }),
                  r.createElement(Ue, { rgEventGIDs: n }),
                ),
                r.createElement(L.Yh, {
                  checked: a,
                  onChange: l,
                  label: "Show Past Events",
                }),
                r.createElement("hr", null),
                c.map((e) =>
                  r.createElement(qe, {
                    key: e[0],
                    month: new Date(1e3 * e[0]),
                    events: e[1],
                  }),
                ),
              )
            : null;
      }
      function qe(e) {
        const { month: t, events: n } = e,
          a = r.useMemo(() => [...n].sort((e) => -e.startTime), [n]),
          l = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(t);
        return r.createElement(
          "div",
          null,
          r.createElement("div", { className: q().MonthTitle }, l),
          r.createElement(
            "div",
            { className: q().MonthEvents },
            a.map((e) => r.createElement(He, { oEvent: e, key: e.GID })),
          ),
        );
      }
      function He(e) {
        const { oEvent: t } = e,
          n = t.GID,
          a = D.b.InitFromClanID((0, F.H7)()),
          l = (0, R.a)(),
          s = (0, k.m)(l, (0, F.H7)(), n),
          i = s.isSuccess ? s.data : null,
          c = t.GetNameWithFallback(0),
          o = (0, r.useMemo)(() => {
            const e = new Array();
            return (
              t.jsondata.meet_steam_groups?.forEach((t) => {
                t.sessions.forEach((n, a) => {
                  e.push({ group: t, session: n, firstSession: 0 == a });
                });
              }),
              e
            );
          }, [t.jsondata.meet_steam_groups]);
        return r.createElement(
          "div",
          { className: q().EventRow },
          r.createElement(
            "div",
            { className: q().EventMainDetails },
            r.createElement(
              "div",
              { className: q().TitleLine },
              r.createElement("div", { className: q().Title }, c),
              r.createElement(
                "div",
                { className: q().StartDate },
                (0, z.TW)(t?.startTime),
              ),
            ),
            r.createElement(
              "div",
              { className: q().ActionLine },
              r.createElement(
                "div",
                null,
                r.createElement(
                  "a",
                  {
                    href: `${Y.TS.COMMUNITY_BASE_URL}gid/${a.ConvertTo64BitString()}/partnerevents/edit/${n}`,
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
                  { href: `${Y.TS.STORE_BASE_URL}meetsteam/${n}` },
                  "View",
                ),
              ),
              Boolean(
                t.BIsUnlistedEvent() &&
                  t.jsondata.meet_steam_groups?.length > 0,
              ) &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(Qe, { gid: n }),
                  r.createElement(Ve, { gid: n }),
                  r.createElement(We, { gid: n }),
                  r.createElement(Je, { gid: n }),
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
                  r.createElement(
                    "th",
                    { style: { width: "50px" } },
                    "Registered",
                  ),
                  r.createElement("th", { style: { width: "50px" } }, "Guests"),
                  r.createElement(
                    "th",
                    { style: { width: "100px" } },
                    "Details",
                  ),
                ),
              ),
              r.createElement(
                "tbody",
                null,
                r.createElement(
                  "tr",
                  null,
                  Boolean(o.length > 0)
                    ? r.createElement(Ze, {
                        key: o[0].session.id,
                        gid: n,
                        group: o[0].group,
                        session: o[0].session,
                        rgAvailability: i,
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
                      t?.BIsUnlistedEvent() &&
                        t.jsondata.meet_steam_groups?.length > 0,
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
                      r.createElement(Ze, {
                        group: e.group,
                        gid: n,
                        session: e.session,
                        rgAvailability: i,
                        firstSession: e.firstSession,
                      }),
                    ),
                  ),
              ),
            ),
          ),
        );
      }
      function We(e) {
        const { gid: t } = e,
          [n, a, l] = (0, f.uD)();
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
            r.createElement($.o, {
              tooltip:
                "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
            }),
          ),
          r.createElement(
            u.tH,
            null,
            r.createElement(
              x.E,
              { active: n },
              r.createElement(ae, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function Ve(e) {
        const { gid: t } = e,
          [n, a, l] = (0, f.uD)();
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
              x.E,
              { active: n },
              r.createElement(ne, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function Je(e) {
        const { gid: t } = e,
          [n, a, l] = (0, f.uD)();
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
              x.E,
              { active: n },
              r.createElement(Re, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function Qe(e) {
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
                    a = D.b.InitFromClanID((0, F.H7)());
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
            x.E,
            { active: a },
            r.createElement(
              G.o0,
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
                r.createElement(O.t, { string: (0, z.we)("#Loading") }),
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
      function Ze(e) {
        const {
            gid: t,
            group: n,
            rgAvailability: a,
            session: l,
            firstSession: s = !0,
          } = e,
          i = z.NT.GetWithFallback(n?.localized_session_title, 0),
          c = z.NT.GetWithFallback(n?.localized_session_description, 0),
          o = a?.find((e) => e.session_id == l.id),
          [m, d, E] = (0, f.uD)(),
          g = B((0, R.a)(), t, n?.group_id);
        let p = Math.min((o?.guest_count / l.max_capacity) * 100, 100),
          h = o?.guest_count > 0 ? `${p}%` : "0%",
          v = o?.guest_count >= l.max_capacity;
        return r.createElement(
          r.Fragment,
          null,
          s && Boolean(n)
            ? r.createElement(
                "td",
                null,
                i,
                r.createElement($.o, { tooltip: c }),
              )
            : r.createElement("td", null),
          r.createElement(
            "td",
            null,
            r.createElement(
              "span",
              null,
              (0, z.TW)(l.rtime_start) + "@" + (0, j.KC)(l.rtime_start),
              " (local time)",
            ),
          ),
          r.createElement("td", null, (0, j.IH)(l.rtime_end - l.rtime_start)),
          r.createElement(
            "td",
            null,
            o?.guest_count || 0,
            " / ",
            l.max_capacity,
            r.createElement("br", null),
            r.createElement(
              "div",
              { className: q().CapacityBarMax },
              r.createElement("div", {
                className: (0, U.A)(q().CapacityBarCurrent, v ? q().Full : ""),
                style: { width: h },
              }),
            ),
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
            r.createElement(L.$n, { onClick: d }, "Details"),
            r.createElement(
              u.tH,
              null,
              r.createElement(
                x.E,
                { active: m },
                r.createElement(Fe, {
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
      var Xe = n(22837),
        et = n(14336),
        tt = n(55263),
        nt = n(29863),
        at = n(48479);
      function rt(e) {
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
          s = b.TS.PARTNER_BASE_URL + "meetsteam/2025",
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
          { className: q().EventList },
          r.createElement(L.pd, {
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
              r.createElement(lt, {
                key: e.id,
                conf: e,
                nInterestCount: i.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          r.createElement(gt, { rgSurveyInterest: n }),
        );
      }
      function lt(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return r.createElement(
          at.qx,
          {
            title: `${t.name} in ${t.place} around ${t.time}: Interest: ${n.toLocaleString()}`,
            bStartMinimized: !0,
          },
          r.createElement(it, { conf: t, rgSurveyInterest: a }),
        );
      }
      function st(e) {
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
      function it(e) {
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
                    const e = n.results.partner_id;
                    new D.b(n.steamid).GetAccountID(),
                      await Promise.all([
                        (0, A.qG)(e),
                        s.prefetchQuery({
                          queryKey: T(e),
                          queryFn: async () => N(e),
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
            ? r.createElement(ct, { conf: t, rgSurveyInterest: a })
            : r.createElement("div", null, "No users with interest")
          : r.createElement(O.t, {
              position: "center",
              string: `Loading ${s} of ${a.length}`,
            });
      }
      function ct(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, y.jE)();
        return r.createElement(
          "div",
          null,
          r.createElement(
            L.$n,
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
                  "Survey Time",
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
                      r = new ke.b2(t.steamid);
                    n.push("" + r.GetAccountID());
                    const l = (0, et.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    n.push("" + s);
                    const i = t.results.email_override || "";
                    n.push("" + i),
                      n.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const c = fe(r.GetAccountID(), s);
                    if (
                      (n.push(c ? c.realname : ""),
                      n.push(t.results.have_you_met_steam ? "yes" : "no"),
                      t.results.submit_time)
                    ) {
                      const e = t.results.submit_time,
                        a = new Date(1e3 * e)
                          .toISOString()
                          .replace("T", " ")
                          .split(".")[0];
                      n.push(a);
                    } else n.push("");
                    n.push("" + t.results.attending?.length),
                      n.push(t.results.country_code),
                      n.push(
                        t.results.preferred_language
                          ? (0, Xe.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, A.Yd)(s);
                    n.push(o ? o.name : "");
                    const u = M(a, s);
                    u
                      ? (n.push("" + st(u.strGrossUSD)),
                        n.push("" + u.nBestAppID),
                        n.push("" + u.nBestAppLongTermSalesRank))
                      : (n.push(""), n.push(""), n.push("")),
                      e.push(n);
                  });
                const r = t.name.replace(" ", "_") + "_conference_interest.csv";
                J.g.WriteCSVToFile(e, r);
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
                r.createElement(ot, {
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
      function ot(e) {
        const { partnerID: t, registration: n } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, r.createElement(ut, { ...e })),
          r.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          r.createElement(mt, { nPartnerID: t }),
          r.createElement("td", null, n.attending.length),
          r.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, Xe.Lg)(n.preferred_language)
              : "",
          ),
          r.createElement("td", null, n.country_code),
          r.createElement("td", null, (0, z.TW)(n.submit_time)),
        );
      }
      function ut(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          l = (0, et.hW)(t),
          s = _e(new ke.b2(t).GetAccountID(), n),
          i = s?.realname || l.data?.m_strPlayerName;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, i),
          r.createElement("br", null),
          r.createElement("span", null, a.email_override || s?.email),
        );
      }
      function mt(e) {
        const { nPartnerID: t } = e,
          [n] = (0, A.UA)(t),
          a = (function (e) {
            const t = (0, S.I)({
              queryKey: T(e),
              queryFn: async () => N(e),
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
              ? r.createElement(Et, { appid: a?.nBestAppID })
              : "N/A",
          ),
          r.createElement("td", null, a?.nBestAppLongTermSalesRank),
        );
      }
      const dt = {};
      function Et(e) {
        const { appid: t } = e,
          [n] = (0, tt.t7)(t, dt),
          a = (0, r.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return r.createElement(
          nt.Qf,
          { item: a },
          r.createElement("span", null, n?.GetName() || t),
        );
      }
      function gt(e) {
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
          at.qx,
          {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
          },
          r.createElement(
            L.$n,
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
                      r = new ke.b2(t.steamid);
                    a.push("" + r.GetAccountID());
                    const l = (0, et.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    a.push("" + s);
                    const i = t.results.email_override || "";
                    a.push("" + i),
                      a.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const c = fe(r.GetAccountID(), s);
                    a.push(c ? c.realname : ""),
                      a.push("" + t.results.attending?.length),
                      a.push(t.results.country_code),
                      a.push(
                        t.results.preferred_language
                          ? (0, Xe.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, A.Yd)(s);
                    a.push(o ? o.name : "");
                    const u = M(n, s);
                    u
                      ? (a.push("" + st(u.strGrossUSD)),
                        a.push("" + u.nBestAppID),
                        a.push("" + u.nBestAppLongTermSalesRank))
                      : (a.push(""), a.push(""), a.push("")),
                      a.push(t.results.suggestion),
                      e.push(a);
                  });
                J.g.WriteCSVToFile(e, "suggestsion.csv");
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
                r.createElement(pt, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function pt(e) {
        const { survey: t } = e;
        new ke.b2(t.steamid);
        return r.createElement(
          "tr",
          null,
          r.createElement(
            "td",
            null,
            r.createElement(ut, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          r.createElement(mt, { nPartnerID: t.results.partner_id }),
          r.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      var ht = n(98019);
      const vt = r.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            ft ||
              (ft = new (me())(
                async (e) => {
                  const t = `${b.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = {
                      sessionid: b.TS.SESSIONID,
                      strAccountIDs: e.join(","),
                    },
                    a = await w().get(t, { params: n, withCredentials: !0 });
                  if (!a || 200 != a?.status || 1 != a?.data?.success)
                    throw `Failed to load app to user email and langs: ${((0, V.H))(a).strErrorMsg}`;
                  const r = new Map();
                  return (
                    a.data.users.forEach((e) => {
                      const t = new D.b(e.steamid);
                      r.set(t.GetAccountID(), e);
                    }),
                    e.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return ft;
          })().load(e),
      });
      function _t(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let ft;
      var St = n(73745);
      function yt(e) {
        const t = (0, R.a)(),
          n = (0, ht.q)(),
          a = (function (e) {
            const t = (0, S.I)({
              queryKey: ["useMeetSteamSaleOperators"],
              queryFn: async () => {
                const t = v.w.Init(_.Rl),
                  n = new Date();
                n.setFullYear(n.getFullYear() - 2),
                  t.Body().set_rt_oldest_date(0);
                const a = await _.ZK.GetSaleEventOrganizers(e, t);
                return a.BSuccess()
                  ? a
                      .Body()
                      .info()
                      .map((e) => e.toObject())
                  : [];
              },
            });
            return t.isLoading ? null : t.data;
          })(t),
          l = (0, r.useMemo)(() => {
            if (!a || !n) return null;
            const e = new Set(n.map((e) => e.id));
            return a
              .filter((t) => !e.has(t.accountid))
              .sort(
                (e, t) => t.clan_event_gids?.length - e.clan_event_gids.length,
              );
          }, [a, n]);
        return l
          ? r.createElement(
              "div",
              null,
              r.createElement(
                L.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      l.forEach((t) => {
                        const n = (0, et.z0)(t.accountid),
                          a =
                            ((r = t.accountid),
                            ve.L.getQueryData(["UserEmailAndLangs", r]));
                        var r;
                        e.push([
                          n?.m_strPlayerName || "",
                          "" + t.accountid,
                          a?.email_address || "",
                          t.clan_event_gids?.length.toLocaleString(),
                        ]);
                      });
                    J.g.WriteCSVToFile(e, "sale_operators.csv");
                  },
                },
                "CSV Export",
                r.createElement($.o, {
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
                  l.map((e) =>
                    r.createElement(It, { key: e.accountid, organizer: e }),
                  ),
                ),
              ),
            )
          : r.createElement(O.t, {
              string: (0, z.we)("#Loading"),
              size: "medium",
            });
      }
      function It(e) {
        const { organizer: t } = e,
          n = (0, r.useMemo)(
            () => D.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          a = (0, et.hW)(n),
          l = (function (e) {
            const t = r.useContext(vt);
            return (0, S.I)(_t(t, e));
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
            r.createElement(wt, {
              name: s,
              rgClanEventGIDs: t.clan_event_gids,
            }),
          ),
        );
      }
      function wt(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [a, l, s] = (0, St.uD)();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            L.$n,
            { onClick: l },
            "See ",
            n.length.toLocaleString(),
            " Events",
          ),
          r.createElement(
            x.E,
            { active: a },
            r.createElement(
              G.o0,
              { bAlertDialog: !0, closeModal: s, strTitle: `${t}'s Events` },
              n.map((e) => r.createElement(Dt, { gid: e, key: e })),
            ),
          ),
        );
      }
      function Dt(e) {
        const { gid: t } = e,
          n = (0, P.RR)(t);
        return n
          ? r.createElement(
              "a",
              {
                href: `${Y.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
                target: "_blank",
              },
              r.createElement("div", null, n.GetNameWithFallback(0)),
              r.createElement("img", { src: n.GetImageURL("capsule", 0) }),
            )
          : r.createElement("div", null, "Loading ", t);
      }
      function bt(e) {
        const t = (function () {
          const [e] = (0, r.useState)(() => {
            const e = (0, b.Tc)("survey_list", "application_config") || {},
              t = new Map();
            for (const n of Object.keys(e)) t.set(n, e[n]);
            return t;
          });
          return e;
        })();
        return r.createElement(
          "div",
          null,
          r.createElement(
            "ol",
            null,
            Array.from(t.entries()).map(([e, t]) =>
              r.createElement(
                "li",
                { key: e },
                r.createElement(
                  "a",
                  {
                    href: `${b.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
                    target: "_blank",
                  },
                  t,
                ),
              ),
            ),
          ),
        );
      }
      function At(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: r.createElement(u.tH, null, r.createElement(rt, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: r.createElement(u.tH, null, r.createElement(Ke, null)),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: r.createElement(u.tH, null, r.createElement(yt, null)),
              onClick: t,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: r.createElement(u.tH, null, r.createElement(bt, null)),
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
      var Ct = n(65946),
        Tt = n(79645),
        Nt = n(1909),
        Mt = n(56330),
        Bt = n(85761),
        Pt = n.n(Bt);
      function kt(e) {
        const t = (function () {
            const [e] = (0, r.useState)(() =>
              (0, b.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, b.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, et.js)(b.iA.accountid),
          [l, s] = (0, r.useState)(!1),
          [i, c] = (0, r.useState)(!1),
          [o, u] = (0, r.useState)(!1),
          [m, d] = (0, r.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? r.createElement(O.t, {
                size: "medium",
                position: "center",
                string: (0, z.we)("#Loading"),
              })
            : r.createElement(
                "div",
                { className: (0, U.A)(p().AdminPageCtn, Pt().Ctn) },
                r.createElement(
                  "div",
                  { className: p().PageTitle },
                  (0, z.we)("#MeetSteam_MainTitle"),
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
                        (0, z.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          r.createElement("br", null),
                        ),
                      ),
                      r.createElement(
                        "p",
                        { className: p().IntroText },
                        (0, z.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(Lt, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(Rt, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: (0, U.A)(p().SectionCtn, p().ActionBar) },
                      r.createElement(
                        L.jn,
                        {
                          onClick: async () => {
                            c(!0), s(!1), u(!1);
                            const e = `${b.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", b.TS.SESSIONID),
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
                        (0, z.we)("#Button_Submit"),
                      ),
                      i &&
                        r.createElement(O.t, {
                          size: "medium",
                          position: "center",
                          string: (0, z.we)("#Saving"),
                        }),
                      o &&
                        r.createElement(
                          "div",
                          null,
                          (0, z.we)("#Button_Saved"),
                        ),
                      l &&
                        r.createElement(
                          "div",
                          { className: Mt.ErrorStylesWithIcon },
                          (0, z.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : r.createElement(
              "div",
              { className: Pt().Ctn },
              (0, z.we)("#MeetSteam_closed"),
            );
      }
      function Rt(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = C();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("h1", null, (0, z.we)("#MeetSteam_Events_Interest")),
          r.createElement(
            "p",
            null,
            (0, z.PP)("#MeetSteam_Events_title", "2025"),
          ),
          r.createElement(
            "p",
            null,
            r.createElement("span", { className: Pt().Indicator }, "*"),
            " ",
            (0, z.PP)("#MeetSteam_Events_desc"),
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
                          { className: Pt().Indicator },
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
                    r.createElement(L.Yh, {
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
                      tooltip: (0, z.we)("#MeetSteam_attend_ttip"),
                    }),
                  ),
                ),
              ),
            ),
          ),
          r.createElement("br", null),
          r.createElement(L.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, z.we)("#MeetSteam_others"),
          }),
        );
      }
      function Lt(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, et.js)(b.iA.accountid),
          l = (function (e) {
            const t = (function () {
                const [e] = (0, r.useState)(
                  () =>
                    (0, b.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, r.useState)(() =>
                  (0, b.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              a = _e(b.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [s, i] = (0, r.useState)(() =>
            Boolean((t.email_override && t.email_override != l) || !l),
          ),
          [c, o, u] = (0, Ct.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? r.createElement(
              "div",
              null,
              r.createElement("h1", null, (0, z.we)("#MeetSteam_You")),
              r.createElement("p", null, (0, z.we)("#MeetSteam_You_Desc")),
              r.createElement(Ft, {
                nPartnerID: t.partner_id,
                label: (0, z.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              r.createElement(
                "div",
                { className: Pt().EmailInfoRow },
                r.createElement(
                  "div",
                  { className: Pt().EmailField },
                  r.createElement(L.pd, {
                    type: "string",
                    label: (0, z.we)("#MeetSteam_You_Email"),
                    disabled: !s,
                    value: t.email_override || l || "",
                    placeholder: (0, z.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !s &&
                  r.createElement(L.Yh, {
                    checked: s,
                    onChange: i,
                    label: (0, z.we)("#MeetSteam_You_Update"),
                    tooltip: (0, z.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              r.createElement(L.JU, null, (0, z.we)("#MeetSteam_NeverMet")),
              r.createElement(L.Yh, {
                label: (0, z.we)("#MeetSteam_NeverMetNo"),
                checked: c,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              r.createElement(
                L.JU,
                null,
                (0, z.we)("#MeetSteam_CapabableEnglish"),
              ),
              r.createElement(
                "div",
                { className: Pt().RadioButtonCtn },
                r.createElement(L.Od, {
                  className: Pt().RadioButtons,
                  checked: !o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, z.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                r.createElement(L.Od, {
                  className: Pt().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, Xe.sf)(b.TS.LANGUAGE),
                    }),
                  label: (0, z.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              o &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("br", null),
                  r.createElement(
                    L.JU,
                    null,
                    (0, z.we)("#MeetSteam_LanguagePref"),
                  ),
                  r.createElement(Nt.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, z.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : r.createElement(O.t, {
              size: "medium",
              position: "center",
              string: (0, z.we)("#Loading"),
            });
      }
      function Ft(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          l = (0, Tt.c)(b.iA.accountid);
        if (!l)
          return r.createElement(O.t, {
            size: "small",
            position: "center",
            string: (0, z.we)("#Loading"),
          });
        if (1 == l.length) return null;
        const s = [];
        return (
          l.forEach((e) =>
            s.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          r.createElement(L.m, {
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
      var Gt = n(86921),
        xt = n(13038),
        Ot = n.n(xt);
      function $t(e) {
        const { data: t } = (0, et.js)(b.iA.accountid),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, b.Tc)("survey_event_name", "application_config") || "",
            );
            return e;
          })(),
          a = (function () {
            const [e] = (0, r.useState)(
              () => (0, b.Tc)("survey_data", "application_config") || "",
            );
            return e;
          })(),
          [l, i] = (0, r.useState)(() => a || ""),
          { surveyGID: c } = (0, s.g)(),
          [o, u] = (0, r.useState)(!1),
          [m, d] = (0, r.useState)(!1),
          [E, g] = (0, r.useState)(!1);
        return !t || t.m_bPlayerNamePending
          ? r.createElement(O.t, {
              size: "medium",
              position: "center",
              string: (0, z.we)("#Loading"),
            })
          : r.createElement(
              "div",
              { className: (0, U.A)(p().AdminPageCtn, Ot().Ctn) },
              r.createElement(
                "div",
                { className: p().PageTitle },
                (0, z.we)("#MeetSteam_PostSurvey_Title", n),
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
                      "div",
                      null,
                      (0, z.we)("#MeetSteam_PostSurvey_Question"),
                    ),
                    r.createElement("textarea", {
                      rows: 10,
                      onChange: (e) => i(e.currentTarget.value),
                      value: l,
                      autoFocus: !0,
                    }),
                  ),
                  r.createElement(
                    "div",
                    { className: (0, U.A)(p().SectionCtn, p().ActionBar) },
                    r.createElement(
                      L.jn,
                      {
                        onClick: async () => {
                          d(!0), u(!1), g(!1);
                          const e = `${b.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${c}`,
                            t = new FormData();
                          t.append("gid", c),
                            t.append("sessionid", b.TS.SESSIONID);
                          let n = {
                            gid: c,
                            simple_response: l,
                            submit_time: Math.floor(new Date().getTime() / 1e3),
                          };
                          t.append("surveyjson", JSON.stringify(n));
                          try {
                            const n = await w().post(e, t, {
                              withCredentials: !0,
                            });
                            1 != n.data.success
                              ? (console.error(
                                  "MeetSteamLanding failed " + n.data.success,
                                ),
                                u(!0))
                              : g(!0);
                          } catch (e) {
                            console.error("MeetSteamLanding failed caught", e);
                          }
                          d(!1);
                        },
                      },
                      (0, z.we)("#Button_Submit"),
                    ),
                    m &&
                      r.createElement(O.t, {
                        size: "medium",
                        position: "center",
                        string: (0, z.we)("#Saving"),
                      }),
                    E &&
                      r.createElement("div", null, (0, z.we)("#Button_Saved")),
                    o &&
                      r.createElement(
                        "div",
                        { className: Mt.ErrorStylesWithIcon },
                        (0, z.we)("#Error_ErrorCommunicatingWithNetwork"),
                      ),
                  ),
                ),
              ),
            );
      }
      var Ut = n(27144),
        zt = n(68248),
        jt = n.n(zt);
      function Yt(e) {
        const t = (function () {
            const [e] = (0, r.useState)(
              () => (0, b.Tc)("event_gids", "application_config") || [],
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, b.Tc)("survey_results", "application_config") || [],
            );
            return e;
          })(),
          a = (function () {
            const e = (function () {
              const [e] = (0, r.useState)(() => {
                const e = new Map(),
                  t =
                    (0, b.Tc)("registration_by_gid", "application_config") ||
                    {};
                for (const n in t) {
                  const a = t[n];
                  e.set(n, a);
                }
                return e;
              });
              return e;
            })();
            return (0, r.useMemo)(() => {
              const t = new Map();
              return (
                e.forEach((e, n) => {
                  e.forEach((e) => {
                    const a = new D.b(e.steamid);
                    t.has(a.GetAccountID()) || t.set(a.GetAccountID(), []),
                      (e.gidEvent = n),
                      t.get(a.GetAccountID()).push(e);
                  });
                }),
                t
              );
            }, [e]);
          })(),
          { surveyGID: l } = (0, s.g)(),
          { bIsLoading: i, events: c } = (0, P.PB)(t),
          [o, u] = (0, r.useMemo)(
            () => [
              n
                .map((e) => {
                  const t = new D.b(e.steamid);
                  if (a.has(t.GetAccountID())) {
                    const e = a.get(t.GetAccountID());
                    return JSON.parse(e[0].jsondata).partner_id;
                  }
                  return null;
                })
                .filter(Boolean),
              n.map((e) => new D.b(e.steamid).GetAccountID()),
            ],
            [a, n],
          ),
          m = (0, A.vh)(o),
          d = (0, Ut.B3)(u);
        return !i && m && d
          ? r.createElement(qt, {
              rgSurveyResults: n,
              mapAccountsToReg: a,
              meetSteamEvents: c,
            })
          : r.createElement(O.t, {
              string: "Loading Event, Partner and User Info",
            });
      }
      const Kt = (0, ie.FB)();
      function qt(e) {
        const {
            rgSurveyResults: t,
            mapAccountsToReg: n,
            meetSteamEvents: a,
          } = e,
          l = (0, r.useMemo)(() => {
            if (!t) return null;
            const e = new Map();
            a.forEach((t) => e.set(t.GID, t));
            const r = [];
            return (
              t.forEach((t) => {
                const a = JSON.parse(t.jsondata),
                  l = new D.b(t.steamid);
                let s = {
                  feedback: a.simple_response,
                  accountid: l.GetAccountID(),
                };
                if (n.has(l.GetAccountID())) {
                  const t = n.get(l.GetAccountID()),
                    a = JSON.parse(t[0].jsondata);
                  (s.partner_id = a.partner_id),
                    (s.email = a.email_override),
                    (s.name = a.name),
                    (s.registrations = "");
                  const r = (0, A.Yd)(a.partner_id);
                  r && (s.partner_name = r.name),
                    t.forEach((t) => {
                      const n = e.get(t.gidEvent);
                      if (n) {
                        const e = n.jsondata.meet_steam_groups.find(
                          (e) => e.group_id === t.group_id,
                        ).localized_session_title[0];
                        s.registrations.length > 0 && (s.registrations += "|"),
                          (s.registrations += e);
                      }
                    });
                } else {
                  const e = (0, Ut.CF)(l.GetAccountID());
                  e && (s.name = e.persona_name);
                }
                r.push(s);
              }),
              r
            );
          }, [n, a, t]),
          s = (0, r.useMemo)(
            () => [
              Kt.accessor("name", { header: "Name", size: 150 }),
              Kt.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: Wt,
              }),
              Kt.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: Ht,
              }),
              Kt.accessor("accountid", { header: "Account ID", size: 150 }),
              Kt.accessor("email", { header: "Email", size: 150 }),
              Kt.accessor("partner_name", {
                header: "Partner Name",
                size: 200,
              }),
            ],
            [],
          );
        return l
          ? r.createElement(
              u.tH,
              null,
              r.createElement(
                "div",
                { className: p().AdminPageCtn },
                r.createElement(
                  "div",
                  { className: p().PageTitle },
                  "Survey Results",
                ),
                r.createElement("hr", null),
                r.createElement(
                  L.$n,
                  {
                    id: "download-csv",
                    onClick: () =>
                      (0, $e.K)(
                        "meetsteam_survey_results.csv",
                        l,
                        s.map((e) => ({
                          accessorKey: e.accessorKey,
                          header:
                            "string" == typeof e.header
                              ? e.header
                              : (e.accessorKey ?? ""),
                        })),
                      ),
                    style: { width: "120px" },
                  },
                  "Download CSV",
                ),
                r.createElement("br", null),
                r.createElement(ce.k, {
                  columns: s,
                  data: l,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: l.length,
                }),
              ),
            )
          : r.createElement(O.t, { string: (0, z.we)("#Loading") });
      }
      function Ht(e) {
        const t = e.getValue();
        return t?.length > 0
          ? r.createElement(Vt, { text: e.getValue(), regExp: /\|/ })
          : "";
      }
      function Wt(e) {
        return r.createElement(Vt, {
          text: e.getValue(),
          regExp: /\r\n|\r|\n/,
        });
      }
      function Vt(e) {
        const { text: t, regExp: n } = e,
          a = t.split(n);
        return r.createElement(
          "div",
          { className: jt().FeedbackText },
          a.map((e, t) =>
            r.createElement(
              "span",
              { key: t },
              e,
              t < a.length - 1 && r.createElement("br", null),
            ),
          ),
        );
      }
      const Jt = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (e = ":surveyGID") => `/surveyresults/${e}`,
      };
      function Qt(e) {
        return (
          (0, r.useEffect)(() => {
            Gt.O3.Init();
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
                  path: Jt.AdminDashboard(),
                  component: At,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: Jt.YearlySurvery(":year(\\d+)"),
                  component: kt,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: Jt.PostEventSurvey(":surveyGID(\\d+)"),
                  component: $t,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: Jt.PostEventSurveyResults(":surveyGID(\\d+)"),
                  component: Yt,
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
    65: (e, t, n) => {
      "use strict";
      function a(e) {
        const t = new Date(e.getTime());
        return t.setHours(0, 0, 0, 0), t;
      }
      function r(e) {
        const t = new Date(e.getTime());
        return t.setDate(1), t.setHours(0, 0, 0, 0), t;
      }
      function l(e, t) {
        const n = new Date(e);
        return n.setDate(e.getDate() + t), n;
      }
      function s(e, t) {
        return e.reduce((e, n) => {
          const a = t(n),
            r = Math.floor(a.getTime() / 1e3),
            l = e.get(r) || [];
          return e.set(r, [...l, n]), e;
        }, new Map());
      }
      n.d(t, { J2: () => r, bv: () => s, kO: () => l, xi: () => a });
    },
  },
]);
