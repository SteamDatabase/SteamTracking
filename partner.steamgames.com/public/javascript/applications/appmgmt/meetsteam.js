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
    30603: (e) => {
      e.exports = {
        ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
        Table: "_2JSoC65mCQdxh-B_srjUjf",
      };
    },
    36637: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => sn, default: () => cn });
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
        _ = n(56545),
        v = n(85737),
        f = n(64753),
        S = n(20194),
        y = n(75233),
        I = n(41735),
        w = n.n(I),
        D = n(17720),
        A = n(78327),
        b = n(32179),
        C = n(21711),
        T = n(44165),
        N = n(95034);
      function M() {
        const [e] = r.useState(() =>
            (0, A.Tc)("events_list", "application_config"),
          ),
          [t] = (0, N.QD)("filter"),
          n = (0, T.f1)(),
          [a, l] = r.useMemo(() => {
            let t = new Array(),
              a = new Array();
            return (
              e.forEach((e) => {
                e.endtime &&
                (function (e, t = !1) {
                  const [n, a = "00:00:00"] = e.trim().split(/\s+/),
                    [r, l, s] = n.split("-").map(Number),
                    [i, c, o] = a.split(":").map(Number),
                    u = t
                      ? Date.UTC(r, l - 1, s, i, c, o ?? 0)
                      : new Date(r, l - 1, s, i, c, o ?? 0).getTime();
                  return Math.floor(u / 1e3);
                })(e.endtime) < n
                  ? a.push(e)
                  : t.push(e);
              }),
              [a, t]
            );
          }, [e, n]);
        return {
          rgOldEvents: a,
          rgEvents: l,
          selectConference: (0, r.useMemo)(
            () => e.find((e) => e.id === t?.toLocaleLowerCase()),
            [e, t],
          ),
        };
      }
      function B(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function R(e) {
        const t = `${A.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: A.TS.SESSIONID, partnerid: e },
          a = await w().get(t, { params: n });
        return a?.data?.data;
      }
      function P(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function k(e, t, n) {
        return (0, S.I)({
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
      var G = n(38390),
        L = n(50304),
        F = n(96001),
        O = n(16676),
        x = n(26161),
        $ = n(78395),
        z = n(21869),
        U = n(22797),
        j = n(26408),
        q = n(52038),
        Y = n(61859),
        K = n(91675),
        W = n(30470),
        H = n(30565),
        V = n.n(H),
        J = n(34283),
        Q = n.n(J),
        Z = n(68797),
        X = n(9161),
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
          (0, te.wT)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new ne.D(W.TS.WEBAPI_BASE_URL, e));
        }
      }
      function re() {
        return ae.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      var le = n(6083);
      function se(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(null),
          [c, o] = r.useState(0),
          [u, d] = r.useState(""),
          [E, g] = r.useState(""),
          [p, h] = r.useState(!1),
          _ = re(),
          v = (0, S.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, c],
            queryFn: async () => {
              const e = {
                  steamid: D.b.InitFromAccountID(c).ConvertTo64BitString(),
                  gid: n,
                  type: 6,
                },
                t = await ee.Nl.GetUserActionData(_, e);
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
          $.o0,
          {
            strTitle: "Invite User",
            bOKDisabled: !c || a || v.isLoading,
            onOK: async () => {
              l(!0);
              const e = Number.parseInt(u) > 0 ? Number.parseInt(u) : 0,
                a = await ue(
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
              r.createElement(O.pd, {
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
                  r.createElement(O.pd, {
                    type: "number",
                    label: "Partner ID (optional)",
                    onChange: (e) => d(e.currentTarget.value),
                    value: u,
                  }),
                  r.createElement(O.pd, {
                    type: "text",
                    label: "Email override (optional)",
                    onChange: (e) => g(e.currentTarget.value.trim()),
                    value: E,
                  }),
                  r.createElement(O.Yh, {
                    controlled: !0,
                    checked: p,
                    onChange: h,
                    label: "Allow if registration is full",
                  }),
                ),
            ),
          a &&
            r.createElement(U.t, {
              size: "small",
              position: "center",
              string: (0, Y.we)("#Saving"),
            }),
          v.isLoading &&
            r.createElement(U.t, {
              size: "small",
              position: "center",
              string: (0, Y.we)("#Loading"),
            }),
        );
      }
      function ie(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(null),
          [s, i] = (0, r.useState)(!1),
          [c, o] = (0, r.useState)(null),
          [u, d] = (0, r.useState)(null),
          [E, g] = (0, r.useState)(null);
        return r.createElement(
          $.o0,
          {
            strTitle: "Invite Users",
            bOKDisabled: !a || 0 == a.length || null != u,
            strCancelButtonText: null !== u ? "Close" : "Cancel",
            onOK: async () => {
              i(!0);
              const e = await ue(n, a, !1);
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
              (0, le.D)(u),
              " accounts, skipped previously invited ",
              (0, le.D)(E),
            ),
          s &&
            r.createElement(U.t, {
              size: "small",
              position: "center",
              string: (0, Y.we)("#Saving"),
            }),
          null == a
            ? r.createElement(oe, { setInvites: l })
            : r.createElement(ce, { rgInvites: a }),
        );
      }
      function ce(e) {
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
      function oe(e) {
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
                X.g.WriteCSVToFile(t, "invite_template.csv");
              },
            },
            "Download Template Example",
          ),
          r.createElement("br", null),
          r.createElement("br", null),
          r.createElement(
            O.$n,
            null,
            r.createElement(
              "label",
              {
                className: Q().ImportButtonLabel,
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
                      a = await X.g.ParseCSVFile(n);
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
      async function ue(e, t, n) {
        const a = t.map((e) => e.nAccountID).join(","),
          r = t.map((e) => e.nPartnerID).join(","),
          l = t.map((e) => e.strEmailOverride).join(","),
          s = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let i = new FormData();
        i.append("sessionid", W.TS.SESSIONID),
          i.append("gid", e),
          i.append("accounts", a),
          i.append("partnerids", r),
          i.append("emailoverride", l),
          i.append("allowregistrationiffull", s),
          i.append("forceupdate", n ? "1" : "0");
        const c = `${W.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await w().post(c, i, { withCredentials: !0 });
          if (1 != e?.data?.success) {
            let t = (0, Z.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, Z.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var me = n(16666),
        de = n(66051),
        Ee = n(54806),
        ge = n(58632),
        pe = n.n(ge);
      function he(e) {
        const t = re(),
          n = r.useContext(ve),
          a = (0, S.I)(fe(n, t, e));
        return a.isLoading ? null : a.data;
      }
      function _e(e) {
        const t = re(),
          n = r.useContext(ve);
        return (0, Ee.E)({ queries: e.map((e) => fe(n, t, e)) });
      }
      const ve = r.createContext({
        loadMeetSteamAllRegistration: async (e, t) =>
          await (function (e) {
            Se ||
              (Se = new (pe())(
                async (t) => {
                  const n = _.w.Init(ee.j3);
                  n.Body().set_gids([...t]), n.Body().set_type(6);
                  const a = await ee.Nl.GetMultipleUserActionData(e, n);
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
            return Se;
          })(e).load(t),
      });
      function fe(e, t, n) {
        return {
          queryKey: ["MeetSteamAllRegistrationStatus", n],
          queryFn: () => e.loadMeetSteamAllRegistration(t, n),
          enabled: !!n,
        };
      }
      let Se;
      var ye = n(7860);
      function Ie(e, t) {
        const n = (0, F.a)(),
          a = r.useContext(De),
          l = (0, S.I)(Ae(a, n, e, t));
        return l.isLoading ? null : l.data;
      }
      function we(e, t) {
        return ye.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const De = r.createContext({
        loadPartnerEmailAndName: async (e, t, n) =>
          await (function (e) {
            be ||
              (be = new (pe())(
                async (t) => {
                  const n = _.w.Init(v.g9);
                  n.Body().set_accountids(t.map((e) => e.accountID)),
                    n.Body().set_partnerids(t.map((e) => e.partnerID));
                  const a = await v.ZK.GetBatchPartnerEmailAndName(e, n);
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
            return be;
          })(e).load({ accountID: t, partnerID: n }),
      });
      function Ae(e, t, n, a) {
        return {
          queryKey: ["PartnerEmailAndName", n, a],
          queryFn: () => e.loadPartnerEmailAndName(t, n, a),
          enabled: !!n || !!a,
        };
      }
      let be;
      function Ce(e) {
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
            z.E,
            { active: n },
            r.createElement(
              u.tH,
              null,
              r.createElement(
                $.o0,
                {
                  closeModal: l,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                },
                Boolean(null == s)
                  ? r.createElement(Pe, { rgEventGIDs: t, fnSelectedEvents: i })
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(Re, { rgGidMeetSteamEvents: s }),
                      r.createElement(
                        O.$n,
                        { onClick: () => i(null) },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const Te = (0, me.FB)();
      function Ne(e) {
        return (
          (e = e?.filter(
            (t, n) =>
              0 == n || !e.slice(0, n).some((e) => e.accountid == t.accountid),
          )),
          e
            ?.map(
              (e) =>
                e.name ||
                we(e.accountid, e.partner_id)?.realname ||
                e.accountid,
            )
            .join(",") || ""
        );
      }
      function Me(e) {
        return Ne(e.cell.getValue());
      }
      function Be(e, t) {
        const n = _e(t),
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
            const n = (0, F.a)(),
              a = r.useContext(De);
            return (0, Ee.E)({ queries: e.map((e, r) => Ae(a, n, e, t[r])) });
          })(l, s);
        return i.filter((e) => !e.isLoading).length == i.length ? a : null;
      }
      function Re(e) {
        const { rgGidMeetSteamEvents: t } = e,
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("partners_to_verify", "application_config"),
            );
            return e;
          })(),
          a = (0, b.vh)(n),
          l = Be(n, t),
          s = (0, r.useMemo)(() => {
            if (!a || !l) return null;
            const e = [];
            return (
              n.forEach((t) => {
                const n = l.get(t);
                e.push({
                  partner_id: t,
                  partner_name: (0, b.Yd)(t)?.name || "Unknown",
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
              Te.accessor("partner_id", { header: "Partner ID", size: 100 }),
              Te.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              Te.accessor("invitations", {
                header: "Invitations",
                cell: Me,
                size: 300,
              }),
              Te.accessor("registrations", {
                header: "Registered to Attend",
                cell: Me,
                size: 300,
              }),
            ],
            [],
          );
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(O.JU, null, "Partner Analysis"),
          Boolean(s)
            ? r.createElement(
                u.tH,
                null,
                r.createElement(de.k, {
                  columns: i,
                  data: s,
                  getRowKey: (e) => e,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: n.length,
                }),
                r.createElement("br", null),
                r.createElement(
                  O.$n,
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
                              ? Ne(a)
                              : a.toString(),
                          );
                        }
                        e.push(n);
                      }
                      X.g.WriteCSVToFile(e, "partneranalysis.csv");
                    },
                    style: { width: "120px" },
                  },
                  "Download CSV",
                ),
              )
            : r.createElement(U.t, {
                string: (0, Y.we)("#Loading"),
                position: "center",
              }),
        );
      }
      function Pe(e) {
        const { rgEventGIDs: t, fnSelectedEvents: n } = e,
          [a, l] = (0, r.useState)([]);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(O.JU, null, "Choose Events"),
          t.map((e) =>
            r.createElement(ke, {
              key: e,
              gidClanEvent: e,
              rgSelected: a,
              fnSetSelected: l,
            }),
          ),
          r.createElement(
            O.$n,
            { disabled: 0 == a.length, onClick: () => n(a) },
            "Continue",
          ),
        );
      }
      function ke(e) {
        const { gidClanEvent: t, rgSelected: n, fnSetSelected: a } = e,
          l = (0, G.RR)(t).GetNameWithFallback(0);
        return r.createElement(O.Yh, {
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
      var Ge = n(30603),
        Le = n.n(Ge),
        Fe = n(29233);
      function Oe(e) {
        const { hideModal: t, gid: n } = e,
          a = he(n),
          l = (0, y.jE)(),
          [s, i] = (0, r.useMemo)(
            () =>
              a
                ? [a.length, a.filter((e) => !e.invitation_emailed).length]
                : [0, 0],
            [a],
          );
        return r.createElement(
          $.o0,
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
            r.createElement(U.t, {
              size: "medium",
              position: "center",
              string: (0, Y.we)("#Loading"),
            }),
          a &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement("div", null, "There are ", s, " registrations."),
              i > 0 &&
                r.createElement(
                  O.$n,
                  {
                    onClick: async () => {
                      await (async function (e, t) {
                        let n = new FormData();
                        n.append("sessionid", W.TS.SESSIONID),
                          n.append("gid", t);
                        const a = `${W.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                        try {
                          const r = await w().post(a, n, {
                            withCredentials: !0,
                          });
                          if (1 != r?.data?.success) {
                            let e = (0, Z.H)(r);
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
                          let t = (0, Z.H)(e);
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
                    r.createElement(xe, {
                      key: "regentry_" + e.steamid,
                      reg: e,
                    }),
                  ),
                ),
              ),
            ),
        );
      }
      function xe(e) {
        const { reg: t } = e,
          [n] = (0, b.UA)(t.partner_id);
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
      function $e(e) {
        const { hideModal: t, gid: n, title: a, group: l, session: s } = e,
          i = (0, F.a)(),
          c = he(n),
          o = k(i, n, l?.group_id),
          [u, m] = (0, r.useMemo)(() => {
            const e = o?.data?.filter((e) => e.session_id == s.id),
              t = new Map(),
              n = new Map();
            return (
              e?.forEach((e) => {
                const a = new Fe.b2(e.steamid).GetAccountID();
                if ((t.set(a, e), e.jsondata)) {
                  const t = JSON.parse(e.jsondata);
                  t.pre_event_partner_questions &&
                    n.set(a, t.pre_event_partner_questions);
                }
              }),
              [t, n]
            );
          }, [s, o]),
          d = c?.filter((e) => u.has(new Fe.b2(e.steamid).GetAccountID()));
        return r.createElement(
          $.o0,
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
            { className: Le().ExportToCSV },
            r.createElement(
              "a",
              {
                onClick: () =>
                  (function (e, t, n, a, r) {
                    const l = [],
                      s = [
                        "SteamID",
                        "Name",
                        "Invited",
                        "Partner",
                        "Email Override",
                        "Guest Count",
                        "Reg Confirmation Email Sent",
                      ];
                    e.ask_registration_question && s.push("Pre Reg Answer");
                    l.push(s),
                      n.forEach((t) => {
                        const n = [],
                          s = t.partner_id ? (0, b.Yd)(t.partner_id) : void 0;
                        n.push("" + t.steamid),
                          n.push(t.name),
                          n.push(t.invited ? "YES" : ""),
                          n.push(s ? `${s?.name} (${t.partner_id})` : ""),
                          n.push(t.email_override),
                          n.push(
                            "" +
                              (t.guests_registered
                                ? t.guests_registered - 1
                                : 0),
                          );
                        const i = new Fe.b2(t.steamid);
                        if (a.has(i.GetAccountID())) {
                          const e = ze(a.get(i.GetAccountID()), t);
                          if (e) {
                            const t = new Date(1e3 * e)
                              .toISOString()
                              .replace("T", " ")
                              .split(".")[0];
                            n.push(t);
                          } else n.push("");
                        } else n.push("");
                        if (e.ask_registration_question) {
                          const t = r
                            .get(i.GetAccountID())
                            ?.find((t) => t.group_id == e.group_id);
                          t && n.push(t.question);
                        }
                        l.push(n);
                        for (let e = 0; e < t.guest_names?.length; e++) {
                          const n = [];
                          n.push("(guest)"),
                            n.push(t.guest_names[e]),
                            l.push(n);
                        }
                      });
                    const i =
                      "meetsteam_" +
                      t.replace(/[ <>:"/\\|?*\x00-\x1F]/g, "_") +
                      ".csv";
                    X.g.WriteCSVToFile(l, i);
                  })(l, a, d, u, m),
              },
              "Export to CSV",
            ),
          ),
          r.createElement(
            "table",
            { className: Le().Table },
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
                  r.createElement(j.o, {
                    tooltip:
                      "Additional guests, doesn't include main registrant",
                  }),
                ),
                r.createElement("th", null, "Reg Confirm Email Sent"),
                l.ask_registration_question &&
                  r.createElement("th", null, "Answer"),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              d?.flatMap((e) => {
                const t = new Fe.b2(e.steamid).GetAccountID(),
                  n = [
                    r.createElement(Ue, {
                      key: "regrow" + e.steamid,
                      group: l,
                      regInfo: u.get(t),
                      inviteInfo: e,
                      preRegQuestions: m.get(t),
                    }),
                  ];
                for (let t = 0; t < e.guest_names?.length; t++)
                  n.push(
                    r.createElement(je, {
                      key: "regguestrow" + e.steamid + "_" + t,
                      guestName: e.guest_names[t],
                    }),
                  );
                return n;
              }),
            ),
          ),
        );
      }
      function ze(e, t) {
        const n = `registration_emailed_${e.group_id}_${e.session_id}`;
        let a = null;
        return n in t && (a = t[n]), a;
      }
      function Ue(e) {
        const { inviteInfo: t, regInfo: n, group: a, preRegQuestions: l } = e,
          [s] = (0, b.UA)(t.partner_id),
          i = ze(n, t);
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, t.steamid),
          r.createElement("td", null, t.name),
          r.createElement("td", null, Boolean(t.invited) ? "YES" : ""),
          r.createElement(
            "td",
            null,
            (s?.name ?? t.game) ? `Game: ${t.game}` : "",
            " ",
            t.partner_id ? `(${t.partner_id})` : "",
          ),
          r.createElement("td", null, t.email_override),
          r.createElement(
            "td",
            null,
            n.guests_registered ? n.guests_registered - 1 : 0,
          ),
          r.createElement("td", null, i ? (0, Y.TW)(i) : ""),
          a.ask_registration_question &&
            r.createElement(
              "td",
              null,
              l?.find((e) => e.group_id == a.group_id)?.question || "",
            ),
        );
      }
      function je(e) {
        const { guestName: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, "(guest)"),
          r.createElement("td", null, t),
        );
      }
      var qe = n(2516);
      function Ye(e) {
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
            z.E,
            { active: n },
            r.createElement(
              u.tH,
              null,
              r.createElement(
                $.o0,
                {
                  closeModal: l,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                },
                Boolean(null == s)
                  ? r.createElement(Pe, { rgEventGIDs: t, fnSelectedEvents: i })
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(We, { rgGidMeetSteamEvents: s }),
                      r.createElement(
                        O.$n,
                        { onClick: () => i(null) },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const Ke = (0, me.FB)();
      function We(e) {
        const { rgGidMeetSteamEvents: t } = e,
          { rgAllRegistrations: n, rgPartnerIDs: a } = (function (e) {
            const t = _e(e),
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
          l = (0, b.vh)(a),
          s = (0, r.useMemo)(() => {
            if (!l || !n) return null;
            const e = [];
            return (
              n.forEach((t) => {
                (0, b.Yd)(t.partner_id);
                e.push({
                  partner_id: t.partner_id ? "" + t.partner_id : "",
                  partner_name: (0, b.Yd)(t.partner_id)?.name || "Unknown",
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
              Ke.accessor("name", { header: "Name", size: 200 }),
              Ke.accessor("accountid", { header: "Account ID", size: 150 }),
              Ke.accessor("email", { header: "Email", size: 150 }),
              Ke.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              Ke.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              Ke.accessor("partner_id", { header: "Partner ID", size: 100 }),
              Ke.accessor("partner_name", {
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
              r.createElement(O.JU, null, "Registations"),
              Boolean(s)
                ? r.createElement(
                    u.tH,
                    null,
                    r.createElement(de.k, {
                      columns: i,
                      data: s,
                      getRowKey: (e) => e,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: a.length,
                    }),
                    r.createElement("br", null),
                    r.createElement(
                      O.$n,
                      {
                        id: "download-csv",
                        onClick: () =>
                          (0, qe.K)(
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
                : r.createElement(U.t, {
                    string: (0, Y.we)("#Loading"),
                    position: "center",
                  }),
            )
          : r.createElement(U.t, { string: (0, Y.we)("#Loading") });
      }
      var He = n(65);
      function Ve(e) {
        const t = Je();
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
                    href: `${A.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
                    target: "_blank",
                  },
                  t,
                ),
              ),
            ),
          ),
        );
      }
      function Je() {
        const [e] = (0, r.useState)(() => {
          const e = (0, A.Tc)("survey_list", "application_config") || {},
            t = new Map();
          for (const n of Object.keys(e)) t.set(n, e[n]);
          return t;
        });
        return e;
      }
      var Qe = n(23459),
        Ze = n(19367),
        Xe = n.n(Ze);
      function et(e) {
        const t = D.b.InitFromClanID((0, x.H)()),
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("event_gids", "application_config"),
            );
            return e;
          })(),
          [a, l] = (0, N.QD)("showpastevents", !1),
          { bIsLoading: s, events: i } = (0, G.PB)(n),
          c = r.useMemo(() => {
            if (!i) return null;
            const e =
                a && i
                  ? [...i]
                  : i?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
              t = Array.from(
                (0, He.bv)(e, (e) => (0, He.J2)(new Date(1e3 * e.startTime))),
              );
            return t?.sort((e) => -e[0]), t;
          }, [i, a]);
        return s
          ? r.createElement(U.t, null)
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
                      href: `${W.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                    },
                    "Open Meet Steam Event Dashboard",
                  ),
                  r.createElement(Ce, { rgEventGIDs: n }),
                  r.createElement(Ye, { rgEventGIDs: n }),
                ),
                r.createElement(O.Yh, {
                  checked: a,
                  onChange: l,
                  label: "Show Past Events",
                }),
                r.createElement("hr", null),
                c.map((e) =>
                  r.createElement(tt, {
                    key: e[0],
                    month: new Date(1e3 * e[0]),
                    events: e[1],
                  }),
                ),
              )
            : null;
      }
      function tt(e) {
        const { month: t, events: n } = e,
          a = r.useMemo(() => [...n].sort((e) => -e.startTime), [n]),
          l = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(t);
        return r.createElement(
          "div",
          null,
          r.createElement("div", { className: V().MonthTitle }, l),
          r.createElement(
            "div",
            { className: V().MonthEvents },
            a.map((e) => r.createElement(nt, { oEvent: e, key: e.GID })),
          ),
        );
      }
      function nt(e) {
        const { oEvent: t } = e,
          n = t.GID,
          a = D.b.InitFromClanID((0, x.H)()),
          l = (0, F.a)(),
          s = (0, L.my)(l, (0, x.H)(), n),
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
          { className: V().EventRow },
          r.createElement(
            "div",
            { className: V().EventMainDetails },
            r.createElement(
              "div",
              { className: V().TitleLine },
              r.createElement("div", { className: V().Title }, c),
              r.createElement(
                "div",
                { className: V().StartDate },
                (0, Y.TW)(t?.startTime),
              ),
            ),
            r.createElement(
              "div",
              { className: V().ActionLine },
              r.createElement(
                "div",
                null,
                r.createElement(
                  "a",
                  {
                    href: `${W.TS.COMMUNITY_BASE_URL}gid/${a.ConvertTo64BitString()}/partnerevents/edit/${n}`,
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
                  { href: `${W.TS.STORE_BASE_URL}meetsteam/${n}` },
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
                  r.createElement(it, { gid: n }),
                  " | ",
                  r.createElement(
                    "a",
                    {
                      href: `${W.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${W.iA.accountid}`,
                    },
                    "QR Page",
                  ),
                  " | ",
                  r.createElement(
                    "a",
                    {
                      href: `${W.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                    },
                    "Attendance List",
                  ),
                  r.createElement(at, { gid: n }),
                  r.createElement(lt, { gid: n }),
                  r.createElement(rt, { gid: n }),
                  r.createElement(st, { gid: n }),
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
                    ? r.createElement(ct, {
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
                      r.createElement(ct, {
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
      function at(e) {
        const { gid: t } = e,
          n = Je();
        return Array.from(n.keys()).includes(t)
          ? r.createElement(
              r.Fragment,
              null,
              " | ",
              r.createElement(
                "a",
                { href: `${W.TS.PARTNER_BASE_URL}meetsteam/survey/${t}` },
                "Survey",
              ),
            )
          : null;
      }
      function rt(e) {
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
            r.createElement(j.o, {
              tooltip:
                "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
            }),
          ),
          r.createElement(
            u.tH,
            null,
            r.createElement(
              z.E,
              { active: n },
              r.createElement(ie, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function lt(e) {
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
              z.E,
              { active: n },
              r.createElement(se, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function st(e) {
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
              z.E,
              { active: n },
              r.createElement(Oe, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function it(e) {
        const { gid: t } = e,
          n = (0, F.a)(),
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
                  const n = _.w.Init(v.VI),
                    a = D.b.InitFromClanID((0, x.H)());
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
            z.E,
            { active: a },
            r.createElement(
              $.o0,
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
                r.createElement(U.t, { string: (0, Y.we)("#Loading") }),
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
      function ct(e) {
        const {
            gid: t,
            group: n,
            rgAvailability: a,
            session: l,
            firstSession: s = !0,
          } = e,
          i = Y.NT.GetWithFallback(n?.localized_session_title, 0),
          c = Y.NT.GetWithFallback(n?.localized_session_description, 0),
          o = Y.NT.GetWithFallback(n?.localized_intended_audience, 0),
          m = a?.find((e) => e.group_id == n.group_id && e.session_id == l.id),
          [d, E, g] = (0, f.uD)(),
          p = k((0, F.a)(), t, n?.group_id);
        let h = Math.min((m?.guest_count / l.max_capacity) * 100, 100),
          _ = m?.guest_count > 0 ? `${h}%` : "0%",
          v = m?.guest_count >= l.max_capacity;
        const S = Intl.DateTimeFormat().resolvedOptions().timeZone,
          y =
            "in_person" === l.location_type
              ? (l.in_person_time_zone ?? Qe.hh)
              : S;
        return r.createElement(
          r.Fragment,
          null,
          s && Boolean(n)
            ? r.createElement(
                "td",
                null,
                i,
                r.createElement(j.o, { tooltip: c }),
                Boolean(o) && r.createElement("div", null, o),
              )
            : r.createElement("td", null),
          r.createElement(
            "td",
            null,
            r.createElement(
              "span",
              null,
              (function (e, t) {
                const n = Xe().unix(e),
                  a = Xe().unix(e).tz(t),
                  r = a.utcOffset() - n.utcOffset(),
                  l = new Date(1e3 * (e + 60 * r)),
                  s = new Date();
                return `${l.getFullYear() == s.getFullYear() ? ((0, K.$w))(l, !1, !1) : ((0, K._9))(l, !1, !1)} ${(0, K.KC)(e + 60 * r)} ${a.format("z")}`;
              })(l.rtime_start, y),
            ),
          ),
          r.createElement("td", null, (0, K.IH)(l.rtime_end - l.rtime_start)),
          r.createElement(
            "td",
            null,
            m?.guest_count || 0,
            " / ",
            l.max_capacity,
            r.createElement("br", null),
            r.createElement(
              "div",
              { className: V().CapacityBarMax },
              r.createElement("div", {
                className: (0, q.A)(V().CapacityBarCurrent, v ? V().Full : ""),
                style: { width: _ },
              }),
            ),
          ),
          r.createElement(
            "td",
            null,
            p.isSuccess &&
              r.createElement(
                r.Fragment,
                null,
                p.data?.filter((e) => e.session_id == l.id).length,
              ),
          ),
          r.createElement(
            "td",
            null,
            p.isSuccess &&
              r.createElement(
                r.Fragment,
                null,
                p.data
                  ?.filter((e) => e.session_id == l.id)
                  .reduce((e, t) => e + t.guests_registered - 1, 0),
              ),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(O.$n, { onClick: E }, "Details"),
            r.createElement(
              u.tH,
              null,
              r.createElement(
                z.E,
                { active: d },
                r.createElement($e, {
                  gid: t,
                  title: i,
                  group: n,
                  session: l,
                  hideModal: g,
                }),
              ),
            ),
          ),
        );
      }
      var ot = n(22837),
        ut = n(14336),
        mt = n(55263),
        dt = n(29863),
        Et = n(48479),
        gt = n(16021),
        pt = n(98019);
      function ht(e) {
        const { rgEvents: t } = M(),
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
          s = A.TS.PARTNER_BASE_URL + "meetsteam",
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
          { className: V().EventList },
          r.createElement(O.pd, {
            type: "text",
            value: a,
            onChange: (e) => l(e.currentTarget.value.trim()),
            label: "Filter",
          }),
          r.createElement(
            "div",
            null,
            "Total Survey Responses: ",
            (0, le.D)(n?.length || 0),
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
              r.createElement(_t, {
                key: e.id,
                conf: e,
                nInterestCount: i.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          r.createElement(bt, { rgSurveyInterest: n }),
        );
      }
      function _t(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return r.createElement(
          Et.qx,
          {
            title: `${t.name} in ${t.place} around ${t.time}: Interest: ${(0, le.D)(n)}`,
            bStartMinimized: !0,
          },
          r.createElement(ft, { conf: t, rgSurveyInterest: a }),
        );
      }
      function vt(e) {
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
      function ft(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, r.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          ),
          l = (0, pt.qh)(),
          { bComplete: s, nCount: i } = (function (e) {
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
                        (0, b.qG)(e),
                        s.prefetchQuery({
                          queryKey: B(e),
                          queryFn: async () => R(e),
                        }),
                        (0, C.PQ)(s, e),
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
        return s
          ? l?.length
            ? a && 0 != a.length
              ? r.createElement(St, { conf: t, rgSurveyInterest: a })
              : r.createElement("div", null, "No users with interest")
            : r.createElement(U.t, {
                position: "center",
                string: "Loading Valve Account info (this shouldn't take long)",
              })
          : r.createElement(U.t, {
              position: "center",
              string: `Loading ${i} of ${a.length}`,
            });
      }
      function St(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, y.jE)();
        return r.createElement(
          "div",
          null,
          r.createElement(
            O.$n,
            {
              onClick: () => {
                const e = [];
                e.push([
                  "AccountID",
                  "Partner ID",
                  "Valve Partner Contacts",
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
                  "Best AppID Name",
                  "Long Term Sales Rank",
                ]),
                  n.forEach((t) => {
                    const n = [],
                      r = new Fe.b2(t.steamid);
                    n.push("" + r.GetAccountID());
                    const l = (0, ut.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    n.push("" + s);
                    const i = (0, C.N6)(s).map(
                      (e) => (0, pt.YA)(a, e)?.displayName || "" + e,
                    );
                    n.push(i.join("|"));
                    const c = t.results.email_override || "";
                    n.push("" + c),
                      n.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const o = we(r.GetAccountID(), s);
                    if (
                      (n.push(o ? o.realname : ""),
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
                          ? (0, ot.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const u = (0, b.Yd)(s);
                    n.push(u ? u.name : "");
                    const m = P(a, s);
                    m
                      ? (n.push("" + vt(m.strGrossUSD)),
                        n.push("" + m.nBestAppID),
                        n.push(gt.A.Get().GetApp(m.nBestAppID)?.GetName()),
                        n.push("" + m.nBestAppLongTermSalesRank))
                      : (n.push(""), n.push(""), n.push(""), n.push("")),
                      e.push(n);
                  });
                const r = t.name.replace(" ", "_") + "_conference_interest.csv";
                X.g.WriteCSVToFile(e, r);
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
                r.createElement("th", null, "Valve Contacts"),
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
                r.createElement(yt, {
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
      function yt(e) {
        const { partnerID: t, registration: n } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, r.createElement(It, { ...e })),
          r.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          r.createElement(wt, { nPartnerID: t }),
          r.createElement("td", null, n.attending.length),
          r.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, ot.Lg)(n.preferred_language)
              : "",
          ),
          r.createElement("td", null, n.country_code),
          r.createElement("td", null, (0, Y.TW)(n.submit_time)),
        );
      }
      function It(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          l = (0, ut.hW)(t),
          s = Ie(new Fe.b2(t).GetAccountID(), n),
          i = s?.realname || l.data?.m_strPlayerName;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, i),
          r.createElement("br", null),
          r.createElement("span", null, a.email_override || s?.email),
        );
      }
      function wt(e) {
        const { nPartnerID: t } = e,
          [n] = (0, b.UA)(t),
          a = (function (e) {
            const t = (0, S.I)({
              queryKey: B(e),
              queryFn: async () => R(e),
              enabled: Boolean(e),
            });
            return t.isLoading ? null : t.data;
          })(t),
          l = (0, C.Z4)(t),
          s = (0, y.jE)();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("td", null, n ? n?.name + ` (${t})` : t),
          r.createElement(
            "td",
            null,
            l?.map((e) => (0, pt.YA)(s, e)?.displayName || "" + e).join(","),
          ),
          r.createElement("td", null, "$", a?.strGrossUSD),
          r.createElement(
            "td",
            null,
            a?.nBestAppID > 0
              ? r.createElement(At, { appid: a?.nBestAppID })
              : "N/A",
          ),
          r.createElement("td", null, a?.nBestAppLongTermSalesRank),
        );
      }
      const Dt = {};
      function At(e) {
        const { appid: t } = e,
          [n] = (0, mt.t7)(t, Dt),
          a = (0, r.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return r.createElement(
          dt.Qf,
          { item: a },
          r.createElement("span", null, n?.GetName() || t),
        );
      }
      function bt(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, y.jE)(),
          a =
            ((0, pt.qh)(),
            (0, r.useMemo)(
              () =>
                t.filter((e) =>
                  Boolean(e.results?.suggestion?.trim().length > 0),
                ),
              [t],
            ));
        return r.createElement(
          Et.qx,
          {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
          },
          r.createElement(
            O.$n,
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
                      r = new Fe.b2(t.steamid);
                    a.push("" + r.GetAccountID());
                    const l = (0, ut.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    a.push("" + s);
                    const i = t.results.email_override || "";
                    a.push("" + i),
                      a.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const c = we(r.GetAccountID(), s);
                    a.push(c ? c.realname : ""),
                      a.push("" + t.results.attending?.length),
                      a.push(t.results.country_code),
                      a.push(
                        t.results.preferred_language
                          ? (0, ot.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, b.Yd)(s);
                    a.push(o ? o.name : "");
                    const u = P(n, s);
                    u
                      ? (a.push("" + vt(u.strGrossUSD)),
                        a.push("" + u.nBestAppID),
                        a.push("" + u.nBestAppLongTermSalesRank))
                      : (a.push(""), a.push(""), a.push("")),
                      a.push(t.results.suggestion),
                      e.push(a);
                  });
                X.g.WriteCSVToFile(e, "suggestsion.csv");
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
                r.createElement("th", null, "Valve Contacts"),
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
                r.createElement(Ct, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function Ct(e) {
        const { survey: t } = e;
        new Fe.b2(t.steamid);
        return r.createElement(
          "tr",
          null,
          r.createElement(
            "td",
            null,
            r.createElement(It, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          r.createElement(wt, { nPartnerID: t.results.partner_id }),
          r.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      const Tt = r.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            Mt ||
              (Mt = new (pe())(
                async (e) => {
                  const t = `${A.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = {
                      sessionid: A.TS.SESSIONID,
                      strAccountIDs: e.join(","),
                    },
                    a = await w().get(t, { params: n, withCredentials: !0 });
                  if (!a || 200 != a?.status || 1 != a?.data?.success)
                    throw `Failed to load app to user email and langs: ${((0, Z.H))(a).strErrorMsg}`;
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
            return Mt;
          })().load(e),
      });
      function Nt(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let Mt;
      var Bt = n(73745),
        Rt = n(3049);
      function Pt(e) {
        const t = (0, F.a)(),
          n = (0, pt.qh)(),
          a = (function (e) {
            const t = (0, S.I)({
              queryKey: ["useMeetSteamSaleOperators"],
              queryFn: async () => {
                const t = _.w.Init(v.Rl),
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
                O.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      l.forEach((t) => {
                        const n = (0, ut.z0)(t.accountid),
                          a =
                            ((r = t.accountid),
                            ye.L.getQueryData(["UserEmailAndLangs", r]));
                        var r;
                        e.push([
                          n?.m_strPlayerName || "",
                          "" + t.accountid,
                          a?.email_address || "",
                          t.clan_event_gids?.length.toLocaleString((0, Rt.J)()),
                        ]);
                      });
                    X.g.WriteCSVToFile(e, "sale_operators.csv");
                  },
                },
                "CSV Export",
                r.createElement(j.o, {
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
                    r.createElement(kt, { key: e.accountid, organizer: e }),
                  ),
                ),
              ),
            )
          : r.createElement(U.t, {
              string: (0, Y.we)("#Loading"),
              size: "medium",
            });
      }
      function kt(e) {
        const { organizer: t } = e,
          n = (0, r.useMemo)(
            () => D.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          a = (0, ut.hW)(n),
          l = (function (e) {
            const t = r.useContext(Tt);
            return (0, S.I)(Nt(t, e));
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
            r.createElement(Gt, {
              name: s,
              rgClanEventGIDs: t.clan_event_gids,
            }),
          ),
        );
      }
      function Gt(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [a, l, s] = (0, Bt.uD)();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            O.$n,
            { onClick: l },
            "See ",
            (0, le.D)(n.length),
            " Events",
          ),
          r.createElement(
            z.E,
            { active: a },
            r.createElement(
              $.o0,
              { bAlertDialog: !0, closeModal: s, strTitle: `${t}'s Events` },
              n.map((e) => r.createElement(Lt, { gid: e, key: e })),
            ),
          ),
        );
      }
      function Lt(e) {
        const { gid: t } = e,
          n = (0, G.RR)(t);
        return n
          ? r.createElement(
              "a",
              {
                href: `${W.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
                target: "_blank",
              },
              r.createElement("div", null, n.GetNameWithFallback(0)),
              r.createElement("img", { src: n.GetImageURL("capsule", 0) }),
            )
          : r.createElement("div", null, "Loading ", t);
      }
      function Ft(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: r.createElement(u.tH, null, r.createElement(ht, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: r.createElement(u.tH, null, r.createElement(et, null)),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: r.createElement(u.tH, null, r.createElement(Pt, null)),
              onClick: t,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: r.createElement(u.tH, null, r.createElement(Ve, null)),
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
      var Ot = n(65946),
        xt = n(79645),
        $t = n(1909),
        zt = n(56330),
        Ut = n(85761),
        jt = n.n(Ut);
      function qt(e) {
        const t = (function () {
            const [e] = (0, r.useState)(() =>
              (0, A.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, A.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, ut.js)(A.iA.accountid),
          [l, s] = (0, r.useState)(!1),
          [i, c] = (0, r.useState)(!1),
          [o, u] = (0, r.useState)(!1),
          [m, d] = (0, r.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? r.createElement(U.t, {
                size: "medium",
                position: "center",
                string: (0, Y.we)("#Loading"),
              })
            : r.createElement(
                "div",
                { className: (0, q.A)(p().AdminPageCtn, jt().Ctn) },
                r.createElement(
                  "div",
                  { className: p().PageTitle },
                  (0, Y.we)("#MeetSteam_MainTitle"),
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
                        (0, Y.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          r.createElement("br", null),
                        ),
                      ),
                      r.createElement(
                        "p",
                        { className: p().IntroText },
                        (0, Y.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(Ht, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(Yt, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: (0, q.A)(p().SectionCtn, p().ActionBar) },
                      r.createElement(
                        O.jn,
                        {
                          onClick: async () => {
                            c(!0), s(!1), u(!1);
                            const e = `${A.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", A.TS.SESSIONID),
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
                        (0, Y.we)("#Button_Submit"),
                      ),
                      i &&
                        r.createElement(U.t, {
                          size: "medium",
                          position: "center",
                          string: (0, Y.we)("#Saving"),
                        }),
                      o &&
                        r.createElement(
                          "div",
                          null,
                          (0, Y.we)("#Button_Saved"),
                        ),
                      l &&
                        r.createElement(
                          "div",
                          { className: zt.ErrorStylesWithIcon },
                          (0, Y.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : r.createElement(
              "div",
              { className: jt().Ctn },
              (0, Y.we)("#MeetSteam_closed"),
            );
      }
      function Yt(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          { rgEvents: a, rgOldEvents: l, selectConference: s } = M();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("h1", null, (0, Y.we)("#MeetSteam_Events_Interest")),
          r.createElement(
            "p",
            null,
            (0, Y.PP)(
              "#MeetSteam_Events_title",
              (0, A.Tc)("meet_steam_year", "application_config") || "2025",
            ),
          ),
          r.createElement(
            "p",
            null,
            r.createElement("span", { className: jt().Indicator }, "*"),
            " ",
            (0, Y.PP)("#MeetSteam_Events_desc"),
          ),
          Boolean(s) &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement("hr", null),
              r.createElement("p", null, (0, Y.we)("#MeetSteam_ConferenceOrg")),
              r.createElement(Kt, { ...e, rgConference: [s] }),
              r.createElement("br", null),
              r.createElement("br", null),
              r.createElement("hr", null),
              r.createElement(
                "h2",
                null,
                (0, Y.we)("#MeetSteam_OtherConference"),
              ),
            ),
          r.createElement(Kt, { ...e, rgConference: a }),
          r.createElement("br", null),
          r.createElement(O.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, Y.we)("#MeetSteam_others"),
          }),
          Boolean(l?.length > 0) &&
            r.createElement(
              Et.qx,
              {
                bStartMinimized: !0,
                title: (0, Y.we)("#MeetSteam_PastEvents", l.length),
              },
              r.createElement(Kt, { ...e, rgConference: l }),
            ),
        );
      }
      function Kt(e) {
        const { rgConference: t } = e;
        return r.createElement(
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
            t.map((t) =>
              r.createElement(
                "tr",
                { key: t.id },
                r.createElement(
                  "td",
                  null,
                  t.attending
                    ? r.createElement(
                        "span",
                        { className: jt().Indicator },
                        "*",
                      )
                    : "",
                ),
                r.createElement(
                  "td",
                  null,
                  r.createElement("div", null, t.name),
                  r.createElement("div", null, t.place),
                ),
                r.createElement(
                  "td",
                  null,
                  r.createElement("div", null, t.time),
                ),
                r.createElement(
                  "td",
                  null,
                  r.createElement(Wt, { ...e, conf: t }),
                ),
              ),
            ),
          ),
        );
      }
      function Wt(e) {
        const { oRegistration: t, fnSetRegistration: n, conf: a } = e;
        return r.createElement(O.Yh, {
          checked: t.attending?.includes(a.id),
          onChange: (e) => {
            let r = t.attending ? [...t.attending] : [];
            e && !r.includes(a.id)
              ? (r.push(a.id), n({ ...t, attending: r }))
              : !e &&
                r.includes(a.id) &&
                (r.splice(r.indexOf(a.id), 1), n({ ...t, attending: r }));
          },
          tooltip: (0, Y.we)("#MeetSteam_attend_ttip"),
        });
      }
      function Ht(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, ut.js)(A.iA.accountid),
          l = (function (e) {
            const t = (function () {
                const [e] = (0, r.useState)(
                  () =>
                    (0, A.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, r.useState)(() =>
                  (0, A.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              a = Ie(A.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [s, i] = (0, r.useState)(() =>
            Boolean((t.email_override && t.email_override != l) || !l),
          ),
          [c, o, u] = (0, Ot.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? r.createElement(
              "div",
              null,
              r.createElement("h1", null, (0, Y.we)("#MeetSteam_You")),
              r.createElement("p", null, (0, Y.we)("#MeetSteam_You_Desc")),
              r.createElement(Vt, {
                nPartnerID: t.partner_id,
                label: (0, Y.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              r.createElement(
                "div",
                { className: jt().EmailInfoRow },
                r.createElement(
                  "div",
                  { className: jt().EmailField },
                  r.createElement(O.pd, {
                    type: "string",
                    label: (0, Y.we)("#MeetSteam_You_Email"),
                    disabled: !s,
                    value: t.email_override || l || "",
                    placeholder: (0, Y.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !s &&
                  r.createElement(O.Yh, {
                    checked: s,
                    onChange: i,
                    label: (0, Y.we)("#MeetSteam_You_Update"),
                    tooltip: (0, Y.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              r.createElement(O.JU, null, (0, Y.we)("#MeetSteam_NeverMet")),
              r.createElement(O.Yh, {
                label: (0, Y.we)("#MeetSteam_NeverMetNo"),
                checked: c,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              r.createElement(
                O.JU,
                null,
                (0, Y.we)("#MeetSteam_CapabableEnglish"),
              ),
              r.createElement(
                "div",
                { className: jt().RadioButtonCtn },
                r.createElement(O.Od, {
                  className: jt().RadioButtons,
                  checked: !o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, Y.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                r.createElement(O.Od, {
                  className: jt().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, ot.sf)(A.TS.LANGUAGE),
                    }),
                  label: (0, Y.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              o &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("br", null),
                  r.createElement(
                    O.JU,
                    null,
                    (0, Y.we)("#MeetSteam_LanguagePref"),
                  ),
                  r.createElement($t.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, Y.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : r.createElement(U.t, {
              size: "medium",
              position: "center",
              string: (0, Y.we)("#Loading"),
            });
      }
      function Vt(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          l = (0, xt.c)(A.iA.accountid);
        if (!l)
          return r.createElement(U.t, {
            size: "small",
            position: "center",
            string: (0, Y.we)("#Loading"),
          });
        if (1 == l.length) return null;
        const s = [];
        return (
          l.forEach((e) =>
            s.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          r.createElement(O.m, {
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
      var Jt = n(20587),
        Qt = n(13038),
        Zt = n.n(Qt);
      function Xt(e) {
        const { data: t } = (0, ut.js)(A.iA.accountid),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, A.Tc)("survey_event_name", "application_config") || "",
            );
            return e;
          })(),
          a = (function () {
            const [e] = (0, r.useState)(
              () => (0, A.Tc)("survey_data", "application_config") || "",
            );
            return e;
          })(),
          [l, i] = (0, r.useState)(() => a || ""),
          { surveyGID: c } = (0, s.g)(),
          [o, u] = (0, r.useState)(!1),
          [m, d] = (0, r.useState)(!1),
          [E, g] = (0, r.useState)(!1);
        return !t || t.m_bPlayerNamePending
          ? r.createElement(U.t, {
              size: "medium",
              position: "center",
              string: (0, Y.we)("#Loading"),
            })
          : r.createElement(
              "div",
              { className: (0, q.A)(p().AdminPageCtn, Zt().Ctn) },
              r.createElement(
                "div",
                { className: p().PageTitle },
                (0, Y.we)("#MeetSteam_PostSurvey_Title", n),
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
                      (0, Y.we)("#MeetSteam_PostSurvey_Question"),
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
                    { className: (0, q.A)(p().SectionCtn, p().ActionBar) },
                    r.createElement(
                      O.jn,
                      {
                        onClick: async () => {
                          d(!0), u(!1), g(!1);
                          const e = `${A.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${c}`,
                            t = new FormData();
                          t.append("gid", c),
                            t.append("sessionid", A.TS.SESSIONID);
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
                      (0, Y.we)("#Button_Submit"),
                    ),
                    m &&
                      r.createElement(U.t, {
                        size: "medium",
                        position: "center",
                        string: (0, Y.we)("#Saving"),
                      }),
                    E &&
                      r.createElement("div", null, (0, Y.we)("#Button_Saved")),
                    o &&
                      r.createElement(
                        "div",
                        { className: zt.ErrorStylesWithIcon },
                        (0, Y.we)("#Error_ErrorCommunicatingWithNetwork"),
                      ),
                  ),
                ),
              ),
            );
      }
      var en = n(27144),
        tn = n(5695);
      function nn(e) {
        const t = (function () {
            const [e] = (0, r.useState)(
              () => (0, A.Tc)("event_gids", "application_config") || [],
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, A.Tc)("survey_results", "application_config") || [],
            );
            return e;
          })(),
          a = (function () {
            const e = (function () {
              const [e] = (0, r.useState)(() => {
                const e = new Map(),
                  t =
                    (0, A.Tc)("registration_by_gid", "application_config") ||
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
          { bIsLoading: i, events: c } = (0, G.PB)(t),
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
          m = (0, b.vh)(o),
          d = (0, en.B3)(u);
        return !i && m && d
          ? r.createElement(rn, {
              rgSurveyResults: n,
              mapAccountsToReg: a,
              meetSteamEvents: c,
            })
          : r.createElement(U.t, {
              string: "Loading Event, Partner and User Info",
            });
      }
      const an = (0, me.FB)();
      function rn(e) {
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
                  const r = (0, b.Yd)(a.partner_id);
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
                  const e = (0, en.CF)(l.GetAccountID());
                  e && (s.name = e.persona_name);
                }
                r.push(s);
              }),
              r
            );
          }, [n, a, t]),
          s = (0, r.useMemo)(
            () => [
              an.accessor("name", { header: "Name", size: 150 }),
              an.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: tn.Gb,
              }),
              an.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: ln,
              }),
              an.accessor("accountid", { header: "Account ID", size: 150 }),
              an.accessor("email", { header: "Email", size: 150 }),
              an.accessor("partner_name", {
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
                  O.$n,
                  {
                    id: "download-csv",
                    onClick: () =>
                      (0, qe.K)(
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
                r.createElement(de.k, {
                  columns: s,
                  data: l,
                  getRowKey: (e) => e,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: l.length,
                }),
              ),
            )
          : r.createElement(U.t, { string: (0, Y.we)("#Loading") });
      }
      function ln(e) {
        const t = e.getValue();
        return t?.length > 0
          ? r.createElement(tn.DP, { text: e.getValue(), regExp: /\|/ })
          : "";
      }
      const sn = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (e = ":surveyGID") => `/surveyresults/${e}`,
      };
      function cn(e) {
        return (
          (0, r.useEffect)(() => {
            Jt.O3.Init();
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
                  path: sn.AdminDashboard(),
                  component: Ft,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: sn.YearlySurvery(":year(\\d+)"),
                  component: qt,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: sn.PostEventSurvey(":surveyGID(\\d+)"),
                  component: Xt,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: sn.PostEventSurveyResults(":surveyGID(\\d+)"),
                  component: nn,
                }),
                r.createElement(s.qh, { component: o.a }),
              ),
            ),
          )
        );
      }
    },
  },
]);
