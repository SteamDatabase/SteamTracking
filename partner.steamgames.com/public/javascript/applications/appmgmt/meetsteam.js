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
      e.exports = { ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8" };
    },
    19286: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => Gt, default: () => Ot });
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
        S = n(64753),
        f = n(20194),
        y = n(75233),
        I = n(41735),
        w = n.n(I),
        D = n(17720),
        b = n(78327),
        C = n(32179);
      function A() {
        const [e] = r.useState(() =>
          (0, b.Tc)("events_list", "application_config"),
        );
        return e;
      }
      function N(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function T(e) {
        const t = `${b.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: b.TS.SESSIONID, partnerid: e },
          a = await w().get(t, { params: n });
        return a?.data?.data;
      }
      function M(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function B(e, t, n) {
        return (0, f.I)({
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
      var P = n(38390),
        R = n(90362),
        k = n(96001),
        L = n(71541),
        F = n(44736),
        G = n(78395),
        O = n(21869),
        x = n(22797),
        U = n(26408),
        $ = n(52038),
        z = n(61859),
        j = n(91675),
        Y = n(30470),
        W = n(30565),
        q = n.n(W),
        H = n(34283),
        K = n.n(H),
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
          _ = te(),
          v = (0, f.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, c],
            queryFn: async () => {
              const e = {
                  steamid: D.b.InitFromAccountID(c).ConvertTo64BitString(),
                  gid: n,
                  type: 6,
                },
                t = await Q.Nl.GetUserActionData(_, e);
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
          G.o0,
          {
            strTitle: "Invite User",
            bOKDisabled: !c || a || v.isLoading,
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
              r.createElement(L.pd, {
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
            r.createElement(x.t, {
              size: "small",
              position: "center",
              string: (0, z.we)("#Saving"),
            }),
          v.isLoading &&
            r.createElement(x.t, {
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
            r.createElement(x.t, {
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
                className: K().ImportButtonLabel,
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
          a = (0, f.I)(pe(n, t, e));
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
                  const n = _.w.Init(Q.j3);
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
      var _e = n(2879);
      function ve(e, t) {
        const n = (0, k.a)(),
          a = r.useContext(fe),
          l = (0, f.I)(ye(a, n, e, t));
        return l.isLoading ? null : l.data;
      }
      function Se(e, t) {
        return _e.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const fe = r.createContext({
        loadPartnerEmailAndName: async (e, t, n) =>
          await (function (e) {
            Ie ||
              (Ie = new (me())(
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
          [n, a, l] = (0, S.uD)(),
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
            O.E,
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
                  ? r.createElement(Te, { rgEventGIDs: t, fnSelectedEvents: i })
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(Ne, { rgGidMeetSteamEvents: s }),
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
                Se(e.accountid, e.partner_id)?.realname ||
                e.accountid,
            )
            .join(",") || ""
        );
      }
      function Ce(e) {
        return be(e.cell.getValue());
      }
      function Ae(e, t) {
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
            const n = (0, k.a)(),
              a = r.useContext(fe);
            return (0, oe.E)({ queries: e.map((e, r) => ye(a, n, e, t[r])) });
          })(l, s);
        return i.filter((e) => !e.isLoading).length == i.length ? a : null;
      }
      function Ne(e) {
        const { rgGidMeetSteamEvents: t } = e,
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("partners_to_verify", "application_config"),
            );
            return e;
          })(),
          a = (0, C.vh)(n),
          l = Ae(n, t),
          s = (0, r.useMemo)(() => {
            if (!a || !l) return null;
            const e = [];
            return (
              n.forEach((t) => {
                const n = l.get(t);
                e.push({
                  partner_id: t,
                  partner_name: (0, C.Yd)(t)?.name || "Unknown",
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
                cell: Ce,
                size: 300,
              }),
              De.accessor("registrations", {
                header: "Registered to Attend",
                cell: Ce,
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
            : r.createElement(x.t, {
                string: (0, z.we)("#Loading"),
                position: "center",
              }),
        );
      }
      function Te(e) {
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
        Re = n(29233);
      function ke(e) {
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
            r.createElement(x.t, {
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
          [n] = (0, C.UA)(t.partner_id);
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
          i = (0, k.a)(),
          c = de(n),
          o = B(i, n, l?.group_id),
          u = (0, r.useMemo)(() => {
            const e = o?.data?.filter((e) => e.session_id == s.id),
              t = new Map();
            return (
              e?.forEach((e) => {
                t.set(new Re.b2(e.steamid).GetAccountID(), e);
              }),
              t
            );
          }, [s, o]),
          m = c?.filter((e) => u.has(new Re.b2(e.steamid).GetAccountID()));
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
                          r = e.partner_id ? (0, C.Yd)(e.partner_id) : void 0;
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
                        const l = new Re.b2(e.steamid);
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
                  r.createElement(U.o, {
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
                  r.createElement(Oe, {
                    key: "regrow" + e.steamid,
                    regInfo: u.get(new Re.b2(e.steamid).GetAccountID()),
                    inviteInfo: e,
                  }),
                ];
                for (let n = 0; n < e.guest_names?.length; n++)
                  t.push(
                    r.createElement(xe, {
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
      function Oe(e) {
        const { inviteInfo: t, regInfo: n } = e,
          [a] = (0, C.UA)(t.partner_id),
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
      function xe(e) {
        const { guestName: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, "(guest)"),
          r.createElement("td", null, t),
        );
      }
      function Ue(e) {
        const { rgEventGIDs: t } = e,
          [n, a, l] = (0, S.uD)(),
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
            O.E,
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
                  ? r.createElement(Te, { rgEventGIDs: t, fnSelectedEvents: i })
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(ze, { rgGidMeetSteamEvents: s }),
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
      const $e = (0, ie.FB)();
      function ze(e) {
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
          l = (0, C.vh)(a),
          s = (0, r.useMemo)(() => {
            if (!l || !n) return null;
            const e = [];
            return (
              n.forEach((t) => {
                (0, C.Yd)(t.partner_id);
                e.push({
                  partner_id: t.partner_id ? "" + t.partner_id : "",
                  partner_name: (0, C.Yd)(t.partner_id)?.name || "Unknown",
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
              $e.accessor("name", { header: "Name", size: 200 }),
              $e.accessor("accountid", { header: "Account ID", size: 150 }),
              $e.accessor("email", { header: "Email", size: 150 }),
              $e.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              $e.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              $e.accessor("partner_id", { header: "Partner ID", size: 100 }),
              $e.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
            ],
            [],
          );
        if (!l || !a || !s)
          return r.createElement(x.t, { string: (0, z.we)("#Loading") });
        return r.createElement(
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
                    onClick: function () {
                      const e = [],
                        t = [];
                      for (const e of i) t.push(e.header);
                      e.push(t);
                      for (const t of s) {
                        const n = [];
                        for (const e of i) {
                          const a = t[e.accessorKey];
                          n.push(a.toString());
                        }
                        e.push(n);
                      }
                      J.g.WriteCSVToFile(e, "registrationdump.csv");
                    },
                    style: { width: "120px" },
                  },
                  "Download CSV",
                ),
              )
            : r.createElement(x.t, {
                string: (0, z.we)("#Loading"),
                position: "center",
              }),
        );
      }
      function je(e) {
        const t = D.b.InitFromClanID((0, F.H7)()),
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
                href: `${Y.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
              },
              "Open Meet Steam Event Dashboard",
            ),
            r.createElement(we, { rgEventGIDs: n }),
            r.createElement(Ue, { rgEventGIDs: n }),
          ),
          r.createElement("hr", null),
          n.map((e) => r.createElement(Ye, { gid: e, key: e })),
        );
      }
      function Ye(e) {
        const { gid: t } = e,
          n = D.b.InitFromClanID((0, F.H7)()),
          a = (0, k.a)(),
          l = (0, R.m)(a, (0, F.H7)(), t),
          s = l.isSuccess ? l.data : null,
          i = (0, P.RR)(t),
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
                (0, z.TW)(i?.startTime),
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
                    href: `${Y.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t}`,
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
                  { href: `${Y.TS.STORE_BASE_URL}meetsteam/${t}` },
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
                  r.createElement(Ke, { gid: t }),
                  r.createElement(qe, { gid: t }),
                  r.createElement(We, { gid: t }),
                  r.createElement(He, { gid: t }),
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
                    ? r.createElement(Ve, {
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
                      r.createElement(Ve, {
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
      function We(e) {
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
            r.createElement(U.o, {
              tooltip:
                "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
            }),
          ),
          r.createElement(
            u.tH,
            null,
            r.createElement(
              O.E,
              { active: n },
              r.createElement(ae, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function qe(e) {
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
              O.E,
              { active: n },
              r.createElement(ne, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function He(e) {
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
              O.E,
              { active: n },
              r.createElement(ke, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function Ke(e) {
        const { gid: t } = e,
          n = (0, k.a)(),
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
                    a = D.b.InitFromClanID((0, F.H7)());
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
            O.E,
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
                r.createElement(x.t, { string: (0, z.we)("#Loading") }),
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
      function Ve(e) {
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
          [m, d, E] = (0, S.uD)(),
          g = B((0, k.a)(), t, n?.group_id);
        let p = Math.min((o?.guest_count / l.max_capacity) * 100, 100),
          h = o?.guest_count > 0 ? `${p}%` : "0%",
          _ = o?.guest_count >= l.max_capacity;
        return r.createElement(
          r.Fragment,
          null,
          s && Boolean(n)
            ? r.createElement(
                "td",
                null,
                i,
                r.createElement(U.o, { tooltip: c }),
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
                className: (0, $.A)(q().CapacityBarCurrent, _ ? q().Full : ""),
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
                O.E,
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
      var Je = n(22837),
        Qe = n(14336),
        Ze = n(55263),
        Xe = n(29863),
        et = n(48479);
      function tt(e) {
        const t = A(),
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
              r.createElement(nt, {
                key: e.id,
                conf: e,
                nInterestCount: i.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          r.createElement(mt, { rgSurveyInterest: n }),
        );
      }
      function nt(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return r.createElement(
          et.qx,
          {
            title: `${t.name} in ${t.place} around ${t.time}: Interest: ${n.toLocaleString()}`,
            bStartMinimized: !0,
          },
          r.createElement(rt, { conf: t, rgSurveyInterest: a }),
        );
      }
      function at(e) {
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
      function rt(e) {
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
                        (0, C.qG)(e),
                        s.prefetchQuery({
                          queryKey: N(e),
                          queryFn: async () => T(e),
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
            ? r.createElement(lt, { conf: t, rgSurveyInterest: a })
            : r.createElement("div", null, "No users with interest")
          : r.createElement(x.t, {
              position: "center",
              string: `Loading ${s} of ${a.length}`,
            });
      }
      function lt(e) {
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
                      r = new Re.b2(t.steamid);
                    n.push("" + r.GetAccountID());
                    const l = (0, Qe.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    n.push("" + s);
                    const i = t.results.email_override || "";
                    n.push("" + i),
                      n.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const c = Se(r.GetAccountID(), s);
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
                          ? (0, Je.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, C.Yd)(s);
                    n.push(o ? o.name : "");
                    const u = M(a, s);
                    u
                      ? (n.push("" + at(u.strGrossUSD)),
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
                r.createElement(st, {
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
      function st(e) {
        const { partnerID: t, registration: n } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, r.createElement(it, { ...e })),
          r.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          r.createElement(ct, { nPartnerID: t }),
          r.createElement("td", null, n.attending.length),
          r.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, Je.Lg)(n.preferred_language)
              : "",
          ),
          r.createElement("td", null, n.country_code),
          r.createElement("td", null, (0, z.TW)(n.submit_time)),
        );
      }
      function it(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          l = (0, Qe.hW)(t),
          s = ve(new Re.b2(t).GetAccountID(), n),
          i = s?.realname || l.data?.m_strPlayerName;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, i),
          r.createElement("br", null),
          r.createElement("span", null, a.email_override || s?.email),
        );
      }
      function ct(e) {
        const { nPartnerID: t } = e,
          [n] = (0, C.UA)(t),
          a = (function (e) {
            const t = (0, f.I)({
              queryKey: N(e),
              queryFn: async () => T(e),
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
              ? r.createElement(ut, { appid: a?.nBestAppID })
              : "N/A",
          ),
          r.createElement("td", null, a?.nBestAppLongTermSalesRank),
        );
      }
      const ot = {};
      function ut(e) {
        const { appid: t } = e,
          [n] = (0, Ze.t7)(t, ot),
          a = (0, r.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return r.createElement(
          Xe.Qf,
          { item: a },
          r.createElement("span", null, n?.GetName() || t),
        );
      }
      function mt(e) {
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
          et.qx,
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
                      r = new Re.b2(t.steamid);
                    a.push("" + r.GetAccountID());
                    const l = (0, Qe.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    a.push("" + s);
                    const i = t.results.email_override || "";
                    a.push("" + i),
                      a.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const c = Se(r.GetAccountID(), s);
                    a.push(c ? c.realname : ""),
                      a.push("" + t.results.attending?.length),
                      a.push(t.results.country_code),
                      a.push(
                        t.results.preferred_language
                          ? (0, Je.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, C.Yd)(s);
                    a.push(o ? o.name : "");
                    const u = M(n, s);
                    u
                      ? (a.push("" + at(u.strGrossUSD)),
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
                r.createElement(dt, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function dt(e) {
        const { survey: t } = e;
        new Re.b2(t.steamid);
        return r.createElement(
          "tr",
          null,
          r.createElement(
            "td",
            null,
            r.createElement(it, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          r.createElement(ct, { nPartnerID: t.results.partner_id }),
          r.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      var Et = n(98019);
      const gt = r.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            ht ||
              (ht = new (me())(
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
            return ht;
          })().load(e),
      });
      function pt(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let ht;
      var _t = n(73745);
      function vt(e) {
        const t = (0, k.a)(),
          n = (0, Et.q)(),
          a = (function (e) {
            const t = (0, f.I)({
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
                L.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      l.forEach((t) => {
                        const n = (0, Qe.z0)(t.accountid),
                          a =
                            ((r = t.accountid),
                            _e.L.getQueryData(["UserEmailAndLangs", r]));
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
                r.createElement(U.o, {
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
                    r.createElement(St, { key: e.accountid, organizer: e }),
                  ),
                ),
              ),
            )
          : r.createElement(x.t, {
              string: (0, z.we)("#Loading"),
              size: "medium",
            });
      }
      function St(e) {
        const { organizer: t } = e,
          n = (0, r.useMemo)(
            () => D.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          a = (0, Qe.hW)(n),
          l = (function (e) {
            const t = r.useContext(gt);
            return (0, f.I)(pt(t, e));
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
            r.createElement(ft, {
              name: s,
              rgClanEventGIDs: t.clan_event_gids,
            }),
          ),
        );
      }
      function ft(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [a, l, s] = (0, _t.uD)();
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
            O.E,
            { active: a },
            r.createElement(
              G.o0,
              { bAlertDialog: !0, closeModal: s, strTitle: `${t}'s Events` },
              n.map((e) => r.createElement(yt, { gid: e, key: e })),
            ),
          ),
        );
      }
      function yt(e) {
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
      function It(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Survey Results",
              key: "survey",
              contents: r.createElement(u.tH, null, r.createElement(tt, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: r.createElement(u.tH, null, r.createElement(je, null)),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: r.createElement(u.tH, null, r.createElement(vt, null)),
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
      var wt = n(65946),
        Dt = n(79645),
        bt = n(1909),
        Ct = n(56330),
        At = n(85761),
        Nt = n.n(At);
      function Tt(e) {
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
          { data: a } = (0, Qe.js)(b.iA.accountid),
          [l, s] = (0, r.useState)(!1),
          [i, c] = (0, r.useState)(!1),
          [o, u] = (0, r.useState)(!1),
          [m, d] = (0, r.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? r.createElement(x.t, {
                size: "medium",
                position: "center",
                string: (0, z.we)("#Loading"),
              })
            : r.createElement(
                "div",
                { className: (0, $.A)(p().AdminPageCtn, Nt().Ctn) },
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
                      r.createElement(Bt, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(Mt, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: (0, $.A)(p().SectionCtn, p().ActionBar) },
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
                        r.createElement(x.t, {
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
                          { className: Ct.ErrorStylesWithIcon },
                          (0, z.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : r.createElement(
              "div",
              { className: Nt().Ctn },
              (0, z.we)("#MeetSteam_closed"),
            );
      }
      function Mt(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = A();
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
            r.createElement("span", { className: Nt().Indicator }, "*"),
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
                          { className: Nt().Indicator },
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
      function Bt(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, Qe.js)(b.iA.accountid),
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
              a = ve(b.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [s, i] = (0, r.useState)(() =>
            Boolean((t.email_override && t.email_override != l) || !l),
          ),
          [c, o, u] = (0, wt.q3)(() => [
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
              r.createElement(Pt, {
                nPartnerID: t.partner_id,
                label: (0, z.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              r.createElement(
                "div",
                { className: Nt().EmailInfoRow },
                r.createElement(
                  "div",
                  { className: Nt().EmailField },
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
                { className: Nt().RadioButtonCtn },
                r.createElement(L.Od, {
                  className: Nt().RadioButtons,
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
                  className: Nt().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, Je.sf)(b.TS.LANGUAGE),
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
                  r.createElement(bt.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, z.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : r.createElement(x.t, {
              size: "medium",
              position: "center",
              string: (0, z.we)("#Loading"),
            });
      }
      function Pt(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          l = (0, Dt.c)(b.iA.accountid);
        if (!l)
          return r.createElement(x.t, {
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
      var Rt = n(86921),
        kt = n(13038),
        Lt = n.n(kt);
      function Ft(e) {
        const { data: t } = (0, Qe.js)(b.iA.accountid),
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
          ? r.createElement(x.t, {
              size: "medium",
              position: "center",
              string: (0, z.we)("#Loading"),
            })
          : r.createElement(
              "div",
              { className: (0, $.A)(p().AdminPageCtn, Lt().Ctn) },
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
                    { className: (0, $.A)(p().SectionCtn, p().ActionBar) },
                    r.createElement(
                      L.jn,
                      {
                        onClick: async () => {
                          d(!0), u(!1), g(!1);
                          const e = `${b.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${c}`,
                            t = new FormData();
                          t.append("gid", c),
                            t.append("sessionid", b.TS.SESSIONID);
                          let n = { gid: c, simple_response: l };
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
                      r.createElement(x.t, {
                        size: "medium",
                        position: "center",
                        string: (0, z.we)("#Saving"),
                      }),
                    E &&
                      r.createElement("div", null, (0, z.we)("#Button_Saved")),
                    o &&
                      r.createElement(
                        "div",
                        { className: Ct.ErrorStylesWithIcon },
                        (0, z.we)("#Error_ErrorCommunicatingWithNetwork"),
                      ),
                  ),
                ),
              ),
            );
      }
      const Gt = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
      };
      function Ot(e) {
        return (
          (0, r.useEffect)(() => {
            Rt.O3.Init();
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
                  path: Gt.AdminDashboard(),
                  component: It,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: Gt.YearlySurvery(":year(\\d+)"),
                  component: Tt,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: Gt.PostEventSurvey(":surveyGID(\\d+)"),
                  component: Ft,
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
  },
]);
