/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6762],
  {
    78430: (e) => {
      e.exports = { FeedbackText: "_1xRt0l_W6ami9_cnLrxvfj" };
    },
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
    5695: (e, t, n) => {
      "use strict";
      n.d(t, { DP: () => i, Gb: () => s, iS: () => o, sM: () => c });
      var a = n(90626),
        r = n(78430),
        l = n.n(r);
      function s(e) {
        const t = e.getValue();
        return t?.length > 0
          ? a.createElement(i, { text: t, regExp: /\r\n|\r|\n/ })
          : "";
      }
      function i(e) {
        const { text: t, regExp: n } = e;
        if (!t) return a.createElement(a.Fragment, null);
        const r = t.split(n);
        return a.createElement(
          "div",
          { className: l().FeedbackText },
          r.map((e, t) =>
            a.createElement(
              "span",
              { key: t },
              e,
              t < r.length - 1 && a.createElement("br", null),
            ),
          ),
        );
      }
      function c(e) {
        return Number.parseInt(e.getValue()) ? "yes" : "no";
      }
      function o(e) {
        return Number.parseInt(e.getValue()).toLocaleString();
      }
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
    21711: (e, t, n) => {
      "use strict";
      n.d(t, { N6: () => E, PQ: () => d, Z4: () => g });
      var a = n(41735),
        r = n.n(a),
        l = n(90626),
        s = n(20194),
        i = n(78327),
        c = n(29233),
        o = n(62490);
      class u {
        m_mapPartnerToContactInfo = new Map();
        m_mapPromisePartnerLoading = new Map();
        async FetchValvePartnerContacts(e) {
          const t =
              i.TS.PARTNER_BASE_URL + "actions/ajaxgetpartnervalvecontacts",
            n = { sessionid: i.TS.SESSIONID, strPartnerIDs: e.join(",") },
            a = await r().get(t, { params: n, withCredentials: !0 });
          return 200 == a?.status && 1 == a?.data.success
            ? (a.data.contacts.forEach((e) => {
                this.m_mapPartnerToContactInfo.has(e.partnerid) ||
                  this.m_mapPartnerToContactInfo.set(e.partnerid, []),
                  this.m_mapPartnerToContactInfo.get(e.partnerid).push(e);
              }),
              a.data.contacts)
            : [];
        }
        async LoadValvePartnerContact(e) {
          return e
            ? this.m_mapPartnerToContactInfo.has(e)
              ? this.m_mapPartnerToContactInfo.get(e)
              : (this.m_mapPromisePartnerLoading.has(e) ||
                  this.m_mapPromisePartnerLoading.set(
                    e,
                    this.InternalLoadValvePartnerContact(e),
                  ),
                this.m_mapPromisePartnerLoading.get(e))
            : [];
        }
        async InternalLoadValvePartnerContact(e) {
          return this.FetchValvePartnerContacts([e]);
        }
        GetPartnerContact(e) {
          return this.m_mapPartnerToContactInfo.get(e);
        }
        GetPartnerContactAccountsByFilter(e, t, n) {
          const a = this.m_mapPartnerToContactInfo.get(e);
          if (a?.length > 0) {
            const e = a
              .filter((e) => !e.appid || e.appid == t)
              .filter(
                (e) =>
                  !n ||
                  "any" == n ||
                  ("business" == n && e.is_business_contact) ||
                  ("tech" == n && e.is_tech_contact),
              )
              .map((e) => new c.b2(e.steamid).GetAccountID());
            return o.Ew(e);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return (
            u.s_Singleton ||
              ((u.s_Singleton = new u()),
              u.s_Singleton.Init(),
              "dev" == i.TS.WEB_UNIVERSE &&
                (window.g_PartnerValveContactStore = u.s_Singleton)),
            u.s_Singleton
          );
        }
        Init() {
          const e = (0, i.Fd)(
            "partner_valve_contact_list",
            "application_config",
          );
          e &&
            e.forEach((e) => {
              this.m_mapPartnerToContactInfo.has(e.partnerid)
                ? this.m_mapPartnerToContactInfo.get(e.partnerid).push(e)
                : this.m_mapPartnerToContactInfo.set(e.partnerid, [e]);
            });
        }
      }
      function m(e) {
        return ["PartnerValveContactByPartnerID", e];
      }
      function d(e, t) {
        return e.prefetchQuery({
          queryKey: m(t),
          queryFn: async () => u.Get().LoadValvePartnerContact(t),
        });
      }
      function E(e, t, n) {
        return u.Get().GetPartnerContactAccountsByFilter(e, t, n);
      }
      function g(e, t, n) {
        const [a, r] = (0, l.useState)(null),
          i = (function (e) {
            const { data: t, isLoading: n } = (0, s.I)({
              queryKey: m(e),
              queryFn: async () => u.Get().LoadValvePartnerContact(e),
            });
            return n ? null : t;
          })(e);
        return (
          (0, l.useEffect)(() => {
            i && r(u.Get().GetPartnerContactAccountsByFilter(e, t, n));
          }, [i, t, n, e]),
          a
        );
      }
    },
    36637: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => Zt, default: () => Xt });
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
        b = n(78327),
        A = n(32179),
        C = n(21711);
      function T() {
        const [e] = r.useState(() =>
          (0, b.Tc)("events_list", "application_config"),
        );
        return e;
      }
      function N(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function P(e) {
        const t = `${b.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: b.TS.SESSIONID, partnerid: e },
          a = await w().get(t, { params: n });
        return a?.data?.data;
      }
      function B(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function M(e, t, n) {
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
      var R = n(38390),
        L = n(90362),
        k = n(96001),
        G = n(16676),
        F = n(85383),
        x = n(78395),
        O = n(21869),
        U = n(22797),
        $ = n(26408),
        z = n(52038),
        j = n(61859),
        V = n(91675),
        q = n(30470),
        W = n(30565),
        Y = n.n(W),
        K = n(34283),
        H = n.n(K),
        J = n(68797),
        Q = n(9161),
        Z = n(65689),
        X = n(81393),
        ee = n(96059);
      class te {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            te.s_Singleton ||
              ((te.s_Singleton = new te()), te.s_Singleton.Init()),
            te.s_Singleton
          );
        }
        Init() {
          const e = (0, h.Tc)("store_feature_token", "application_config");
          (0, X.wT)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new ee.D(q.TS.WEBAPI_BASE_URL, e));
        }
      }
      function ne() {
        return te.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      function ae(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(null),
          [c, o] = r.useState(0),
          [u, d] = r.useState(""),
          [E, g] = r.useState(""),
          [p, h] = r.useState(!1),
          _ = ne(),
          v = (0, S.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, c],
            queryFn: async () => {
              const e = {
                  steamid: D.b.InitFromAccountID(c).ConvertTo64BitString(),
                  gid: n,
                  type: 6,
                },
                t = await Z.Nl.GetUserActionData(_, e);
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
                a = await ie(
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
              r.createElement(G.pd, {
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
                  r.createElement(G.pd, {
                    type: "number",
                    label: "Partner ID (optional)",
                    onChange: (e) => d(e.currentTarget.value),
                    value: u,
                  }),
                  r.createElement(G.pd, {
                    type: "text",
                    label: "Email override (optional)",
                    onChange: (e) => g(e.currentTarget.value.trim()),
                    value: E,
                  }),
                  r.createElement(G.Yh, {
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
              string: (0, j.we)("#Saving"),
            }),
          v.isLoading &&
            r.createElement(U.t, {
              size: "small",
              position: "center",
              string: (0, j.we)("#Loading"),
            }),
        );
      }
      function re(e) {
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
              const e = await ie(n, a, !1);
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
            r.createElement(U.t, {
              size: "small",
              position: "center",
              string: (0, j.we)("#Saving"),
            }),
          null == a
            ? r.createElement(se, { setInvites: l })
            : r.createElement(le, { rgInvites: a }),
        );
      }
      function le(e) {
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
      function se(e) {
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
                Q.g.WriteCSVToFile(t, "invite_template.csv");
              },
            },
            "Download Template Example",
          ),
          r.createElement("br", null),
          r.createElement("br", null),
          r.createElement(
            G.$n,
            null,
            r.createElement(
              "label",
              {
                className: H().ImportButtonLabel,
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
                      a = await Q.g.ParseCSVFile(n);
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
      async function ie(e, t, n) {
        const a = t.map((e) => e.nAccountID).join(","),
          r = t.map((e) => e.nPartnerID).join(","),
          l = t.map((e) => e.strEmailOverride).join(","),
          s = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let i = new FormData();
        i.append("sessionid", q.TS.SESSIONID),
          i.append("gid", e),
          i.append("accounts", a),
          i.append("partnerids", r),
          i.append("emailoverride", l),
          i.append("allowregistrationiffull", s),
          i.append("forceupdate", n ? "1" : "0");
        const c = `${q.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await w().post(c, i, { withCredentials: !0 });
          if (1 != e?.data?.success) {
            let t = (0, J.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, J.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var ce = n(16666),
        oe = n(66051),
        ue = n(54806),
        me = n(58632),
        de = n.n(me);
      function Ee(e) {
        const t = ne(),
          n = r.useContext(pe),
          a = (0, S.I)(he(n, t, e));
        return a.isLoading ? null : a.data;
      }
      function ge(e) {
        const t = ne(),
          n = r.useContext(pe);
        return (0, ue.E)({ queries: e.map((e) => he(n, t, e)) });
      }
      const pe = r.createContext({
        loadMeetSteamAllRegistration: async (e, t) =>
          await (function (e) {
            _e ||
              (_e = new (de())(
                async (t) => {
                  const n = _.w.Init(Z.j3);
                  n.Body().set_gids([...t]), n.Body().set_type(6);
                  const a = await Z.Nl.GetMultipleUserActionData(e, n);
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
            return _e;
          })(e).load(t),
      });
      function he(e, t, n) {
        return {
          queryKey: ["MeetSteamAllRegistrationStatus", n],
          queryFn: () => e.loadMeetSteamAllRegistration(t, n),
          enabled: !!n,
        };
      }
      let _e;
      var ve = n(7860);
      function fe(e, t) {
        const n = (0, k.a)(),
          a = r.useContext(ye),
          l = (0, S.I)(Ie(a, n, e, t));
        return l.isLoading ? null : l.data;
      }
      function Se(e, t) {
        return ve.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const ye = r.createContext({
        loadPartnerEmailAndName: async (e, t, n) =>
          await (function (e) {
            we ||
              (we = new (de())(
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
            return we;
          })(e).load({ accountID: t, partnerID: n }),
      });
      function Ie(e, t, n, a) {
        return {
          queryKey: ["PartnerEmailAndName", n, a],
          queryFn: () => e.loadPartnerEmailAndName(t, n, a),
          enabled: !!n || !!a,
        };
      }
      let we;
      function De(e) {
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
            O.E,
            { active: n },
            r.createElement(
              u.tH,
              null,
              r.createElement(
                x.o0,
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
                      r.createElement(Ne, { rgGidMeetSteamEvents: s }),
                      r.createElement(
                        G.$n,
                        { onClick: () => i(null) },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const be = (0, ce.FB)();
      function Ae(e) {
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
        return Ae(e.cell.getValue());
      }
      function Te(e, t) {
        const n = ge(t),
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
              a = r.useContext(ye);
            return (0, ue.E)({ queries: e.map((e, r) => Ie(a, n, e, t[r])) });
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
          a = (0, A.vh)(n),
          l = Te(n, t),
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
              be.accessor("partner_id", { header: "Partner ID", size: 100 }),
              be.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              be.accessor("invitations", {
                header: "Invitations",
                cell: Ce,
                size: 300,
              }),
              be.accessor("registrations", {
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
          r.createElement(G.JU, null, "Partner Analysis"),
          Boolean(s)
            ? r.createElement(
                u.tH,
                null,
                r.createElement(oe.k, {
                  columns: i,
                  data: s,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: n.length,
                }),
                r.createElement("br", null),
                r.createElement(
                  G.$n,
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
                              ? Ae(a)
                              : a.toString(),
                          );
                        }
                        e.push(n);
                      }
                      Q.g.WriteCSVToFile(e, "partneranalysis.csv");
                    },
                    style: { width: "120px" },
                  },
                  "Download CSV",
                ),
              )
            : r.createElement(U.t, {
                string: (0, j.we)("#Loading"),
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
          r.createElement(G.JU, null, "Choose Events"),
          t.map((e) =>
            r.createElement(Be, {
              key: e,
              gidClanEvent: e,
              rgSelected: a,
              fnSetSelected: l,
            }),
          ),
          r.createElement(
            G.$n,
            { disabled: 0 == a.length, onClick: () => n(a) },
            "Continue",
          ),
        );
      }
      function Be(e) {
        const { gidClanEvent: t, rgSelected: n, fnSetSelected: a } = e,
          l = (0, R.RR)(t).GetNameWithFallback(0);
        return r.createElement(G.Yh, {
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
      var Me = n(30603),
        Re = n.n(Me),
        Le = n(29233);
      function ke(e) {
        const { hideModal: t, gid: n } = e,
          a = Ee(n),
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
            r.createElement(U.t, {
              size: "medium",
              position: "center",
              string: (0, j.we)("#Loading"),
            }),
          a &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement("div", null, "There are ", s, " registrations."),
              i > 0 &&
                r.createElement(
                  G.$n,
                  {
                    onClick: async () => {
                      await (async function (e, t) {
                        let n = new FormData();
                        n.append("sessionid", q.TS.SESSIONID),
                          n.append("gid", t);
                        const a = `${q.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                        try {
                          const r = await w().post(a, n, {
                            withCredentials: !0,
                          });
                          if (1 != r?.data?.success) {
                            let e = (0, J.H)(r);
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
                          let t = (0, J.H)(e);
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
                    r.createElement(Ge, {
                      key: "regentry_" + e.steamid,
                      reg: e,
                    }),
                  ),
                ),
              ),
            ),
        );
      }
      function Ge(e) {
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
          i = (0, k.a)(),
          c = Ee(n),
          o = M(i, n, l?.group_id),
          u = (0, r.useMemo)(() => {
            const e = o?.data?.filter((e) => e.session_id == s.id),
              t = new Map();
            return (
              e?.forEach((e) => {
                t.set(new Le.b2(e.steamid).GetAccountID(), e);
              }),
              t
            );
          }, [s, o]),
          m = c?.filter((e) => u.has(new Le.b2(e.steamid).GetAccountID()));
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
            { className: Re().ExportToCSV },
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
                        const l = new Le.b2(e.steamid);
                        if (n.has(l.GetAccountID())) {
                          const a = xe(n.get(l.GetAccountID()), e);
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
                    Q.g.WriteCSVToFile(a, r);
                  })(a, m, u),
              },
              "Export to CSV",
            ),
          ),
          r.createElement(
            "table",
            { className: Re().Table },
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
                  r.createElement(Oe, {
                    key: "regrow" + e.steamid,
                    regInfo: u.get(new Le.b2(e.steamid).GetAccountID()),
                    inviteInfo: e,
                  }),
                ];
                for (let n = 0; n < e.guest_names?.length; n++)
                  t.push(
                    r.createElement(Ue, {
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
      function xe(e, t) {
        const n = `registration_emailed_${e.group_id}_${e.session_id}`;
        let a = null;
        return n in t && (a = t[n]), a;
      }
      function Oe(e) {
        const { inviteInfo: t, regInfo: n } = e,
          [a] = (0, A.UA)(t.partner_id),
          l = xe(n, t);
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
          r.createElement("td", null, l ? (0, j.TW)(l) : ""),
        );
      }
      function Ue(e) {
        const { guestName: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, "(guest)"),
          r.createElement("td", null, t),
        );
      }
      var $e = n(2516);
      function ze(e) {
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
            O.E,
            { active: n },
            r.createElement(
              u.tH,
              null,
              r.createElement(
                x.o0,
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
                      r.createElement(Ve, { rgGidMeetSteamEvents: s }),
                      r.createElement(
                        G.$n,
                        { onClick: () => i(null) },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const je = (0, ce.FB)();
      function Ve(e) {
        const { rgGidMeetSteamEvents: t } = e,
          { rgAllRegistrations: n, rgPartnerIDs: a } = (function (e) {
            const t = ge(e),
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
              je.accessor("name", { header: "Name", size: 200 }),
              je.accessor("accountid", { header: "Account ID", size: 150 }),
              je.accessor("email", { header: "Email", size: 150 }),
              je.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              je.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              je.accessor("partner_id", { header: "Partner ID", size: 100 }),
              je.accessor("partner_name", {
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
              r.createElement(G.JU, null, "Registations"),
              Boolean(s)
                ? r.createElement(
                    u.tH,
                    null,
                    r.createElement(oe.k, {
                      columns: i,
                      data: s,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: a.length,
                    }),
                    r.createElement("br", null),
                    r.createElement(
                      G.$n,
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
                : r.createElement(U.t, {
                    string: (0, j.we)("#Loading"),
                    position: "center",
                  }),
            )
          : r.createElement(U.t, { string: (0, j.we)("#Loading") });
      }
      var qe = n(65);
      function We(e) {
        const t = Ye();
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
      function Ye() {
        const [e] = (0, r.useState)(() => {
          const e = (0, b.Tc)("survey_list", "application_config") || {},
            t = new Map();
          for (const n of Object.keys(e)) t.set(n, e[n]);
          return t;
        });
        return e;
      }
      var Ke = n(95034);
      function He(e) {
        const t = D.b.InitFromClanID((0, F.H7)()),
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("event_gids", "application_config"),
            );
            return e;
          })(),
          [a, l] = (0, Ke.QD)("showpastevents", !1),
          { bIsLoading: s, events: i } = (0, R.PB)(n),
          c = r.useMemo(() => {
            if (!i) return null;
            const e =
                a && i
                  ? [...i]
                  : i?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
              t = Array.from(
                (0, qe.bv)(e, (e) => (0, qe.J2)(new Date(1e3 * e.startTime))),
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
                      href: `${q.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                    },
                    "Open Meet Steam Event Dashboard",
                  ),
                  r.createElement(De, { rgEventGIDs: n }),
                  r.createElement(ze, { rgEventGIDs: n }),
                ),
                r.createElement(G.Yh, {
                  checked: a,
                  onChange: l,
                  label: "Show Past Events",
                }),
                r.createElement("hr", null),
                c.map((e) =>
                  r.createElement(Je, {
                    key: e[0],
                    month: new Date(1e3 * e[0]),
                    events: e[1],
                  }),
                ),
              )
            : null;
      }
      function Je(e) {
        const { month: t, events: n } = e,
          a = r.useMemo(() => [...n].sort((e) => -e.startTime), [n]),
          l = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(t);
        return r.createElement(
          "div",
          null,
          r.createElement("div", { className: Y().MonthTitle }, l),
          r.createElement(
            "div",
            { className: Y().MonthEvents },
            a.map((e) => r.createElement(Qe, { oEvent: e, key: e.GID })),
          ),
        );
      }
      function Qe(e) {
        const { oEvent: t } = e,
          n = t.GID,
          a = D.b.InitFromClanID((0, F.H7)()),
          l = (0, k.a)(),
          s = (0, L.m)(l, (0, F.H7)(), n),
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
          { className: Y().EventRow },
          r.createElement(
            "div",
            { className: Y().EventMainDetails },
            r.createElement(
              "div",
              { className: Y().TitleLine },
              r.createElement("div", { className: Y().Title }, c),
              r.createElement(
                "div",
                { className: Y().StartDate },
                (0, j.TW)(t?.startTime),
              ),
            ),
            r.createElement(
              "div",
              { className: Y().ActionLine },
              r.createElement(
                "div",
                null,
                r.createElement(
                  "a",
                  {
                    href: `${q.TS.COMMUNITY_BASE_URL}gid/${a.ConvertTo64BitString()}/partnerevents/edit/${n}`,
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
                  { href: `${q.TS.STORE_BASE_URL}meetsteam/${n}` },
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
                  r.createElement(nt, { gid: n }),
                  " | ",
                  r.createElement(
                    "a",
                    {
                      href: `${q.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${q.iA.accountid}`,
                    },
                    "QR Page",
                  ),
                  r.createElement(Ze, { gid: n }),
                  r.createElement(et, { gid: n }),
                  r.createElement(Xe, { gid: n }),
                  r.createElement(tt, { gid: n }),
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
                    ? r.createElement(at, {
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
                      r.createElement(at, {
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
      function Ze(e) {
        const { gid: t } = e,
          n = Ye();
        return Array.from(n.keys()).includes(t)
          ? r.createElement(
              r.Fragment,
              null,
              " | ",
              r.createElement(
                "a",
                { href: `${q.TS.PARTNER_BASE_URL}meetsteam/survey/${t}` },
                "Survey",
              ),
            )
          : null;
      }
      function Xe(e) {
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
              O.E,
              { active: n },
              r.createElement(re, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function et(e) {
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
              O.E,
              { active: n },
              r.createElement(ae, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function tt(e) {
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
              O.E,
              { active: n },
              r.createElement(ke, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function nt(e) {
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
                r.createElement(U.t, { string: (0, j.we)("#Loading") }),
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
      function at(e) {
        const {
            gid: t,
            group: n,
            rgAvailability: a,
            session: l,
            firstSession: s = !0,
          } = e,
          i = j.NT.GetWithFallback(n?.localized_session_title, 0),
          c = j.NT.GetWithFallback(n?.localized_session_description, 0),
          o = j.NT.GetWithFallback(n?.localized_intended_audience, 0),
          m = a?.find((e) => e.group_id == n.group_id && e.session_id == l.id),
          [d, E, g] = (0, f.uD)(),
          p = M((0, k.a)(), t, n?.group_id);
        let h = Math.min((m?.guest_count / l.max_capacity) * 100, 100),
          _ = m?.guest_count > 0 ? `${h}%` : "0%",
          v = m?.guest_count >= l.max_capacity;
        return r.createElement(
          r.Fragment,
          null,
          s && Boolean(n)
            ? r.createElement(
                "td",
                null,
                i,
                r.createElement($.o, { tooltip: c }),
                Boolean(o) && r.createElement("div", null, o),
              )
            : r.createElement("td", null),
          r.createElement(
            "td",
            null,
            r.createElement(
              "span",
              null,
              (0, j.TW)(l.rtime_start) + "@" + (0, V.KC)(l.rtime_start),
              " (local time)",
            ),
          ),
          r.createElement("td", null, (0, V.IH)(l.rtime_end - l.rtime_start)),
          r.createElement(
            "td",
            null,
            m?.guest_count || 0,
            " / ",
            l.max_capacity,
            r.createElement("br", null),
            r.createElement(
              "div",
              { className: Y().CapacityBarMax },
              r.createElement("div", {
                className: (0, z.A)(Y().CapacityBarCurrent, v ? Y().Full : ""),
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
            r.createElement(G.$n, { onClick: E }, "Details"),
            r.createElement(
              u.tH,
              null,
              r.createElement(
                O.E,
                { active: d },
                r.createElement(Fe, {
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
      var rt = n(22837),
        lt = n(14336),
        st = n(55263),
        it = n(29863),
        ct = n(48479),
        ot = n(82097),
        ut = n(98019);
      function mt(e) {
        const t = T(),
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
          { className: Y().EventList },
          r.createElement(G.pd, {
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
              r.createElement(dt, {
                key: e.id,
                conf: e,
                nInterestCount: i.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          r.createElement(yt, { rgSurveyInterest: n }),
        );
      }
      function dt(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return r.createElement(
          ct.qx,
          {
            title: `${t.name} in ${t.place} around ${t.time}: Interest: ${n.toLocaleString()}`,
            bStartMinimized: !0,
          },
          r.createElement(gt, { conf: t, rgSurveyInterest: a }),
        );
      }
      function Et(e) {
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
      function gt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, r.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          ),
          l = (0, ut.qh)(),
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
                        (0, A.qG)(e),
                        s.prefetchQuery({
                          queryKey: N(e),
                          queryFn: async () => P(e),
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
              ? r.createElement(pt, { conf: t, rgSurveyInterest: a })
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
      function pt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, y.jE)();
        return r.createElement(
          "div",
          null,
          r.createElement(
            G.$n,
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
                      r = new Le.b2(t.steamid);
                    n.push("" + r.GetAccountID());
                    const l = (0, lt.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    n.push("" + s);
                    const i = (0, C.N6)(s).map(
                      (e) => (0, ut.YA)(a, e)?.displayName || "" + e,
                    );
                    n.push(i.join("|"));
                    const c = t.results.email_override || "";
                    n.push("" + c),
                      n.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const o = Se(r.GetAccountID(), s);
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
                          ? (0, rt.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const u = (0, A.Yd)(s);
                    n.push(u ? u.name : "");
                    const m = B(a, s);
                    m
                      ? (n.push("" + Et(m.strGrossUSD)),
                        n.push("" + m.nBestAppID),
                        n.push(ot.A.Get().GetApp(m.nBestAppID)?.GetName()),
                        n.push("" + m.nBestAppLongTermSalesRank))
                      : (n.push(""), n.push(""), n.push(""), n.push("")),
                      e.push(n);
                  });
                const r = t.name.replace(" ", "_") + "_conference_interest.csv";
                Q.g.WriteCSVToFile(e, r);
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
                r.createElement(ht, {
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
      function ht(e) {
        const { partnerID: t, registration: n } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, r.createElement(_t, { ...e })),
          r.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          r.createElement(vt, { nPartnerID: t }),
          r.createElement("td", null, n.attending.length),
          r.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, rt.Lg)(n.preferred_language)
              : "",
          ),
          r.createElement("td", null, n.country_code),
          r.createElement("td", null, (0, j.TW)(n.submit_time)),
        );
      }
      function _t(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          l = (0, lt.hW)(t),
          s = fe(new Le.b2(t).GetAccountID(), n),
          i = s?.realname || l.data?.m_strPlayerName;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, i),
          r.createElement("br", null),
          r.createElement("span", null, a.email_override || s?.email),
        );
      }
      function vt(e) {
        const { nPartnerID: t } = e,
          [n] = (0, A.UA)(t),
          a = (function (e) {
            const t = (0, S.I)({
              queryKey: N(e),
              queryFn: async () => P(e),
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
            l?.map((e) => (0, ut.YA)(s, e)?.displayName || "" + e).join(","),
          ),
          r.createElement("td", null, "$", a?.strGrossUSD),
          r.createElement(
            "td",
            null,
            a?.nBestAppID > 0
              ? r.createElement(St, { appid: a?.nBestAppID })
              : "N/A",
          ),
          r.createElement("td", null, a?.nBestAppLongTermSalesRank),
        );
      }
      const ft = {};
      function St(e) {
        const { appid: t } = e,
          [n] = (0, st.t7)(t, ft),
          a = (0, r.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return r.createElement(
          it.Qf,
          { item: a },
          r.createElement("span", null, n?.GetName() || t),
        );
      }
      function yt(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, y.jE)(),
          a =
            ((0, ut.qh)(),
            (0, r.useMemo)(
              () =>
                t.filter((e) =>
                  Boolean(e.results?.suggestion?.trim().length > 0),
                ),
              [t],
            ));
        return r.createElement(
          ct.qx,
          {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
          },
          r.createElement(
            G.$n,
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
                      r = new Le.b2(t.steamid);
                    a.push("" + r.GetAccountID());
                    const l = (0, lt.z0)(r.GetAccountID()),
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
                          ? (0, rt.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, A.Yd)(s);
                    a.push(o ? o.name : "");
                    const u = B(n, s);
                    u
                      ? (a.push("" + Et(u.strGrossUSD)),
                        a.push("" + u.nBestAppID),
                        a.push("" + u.nBestAppLongTermSalesRank))
                      : (a.push(""), a.push(""), a.push("")),
                      a.push(t.results.suggestion),
                      e.push(a);
                  });
                Q.g.WriteCSVToFile(e, "suggestsion.csv");
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
                r.createElement(It, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function It(e) {
        const { survey: t } = e;
        new Le.b2(t.steamid);
        return r.createElement(
          "tr",
          null,
          r.createElement(
            "td",
            null,
            r.createElement(_t, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          r.createElement(vt, { nPartnerID: t.results.partner_id }),
          r.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      const wt = r.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            bt ||
              (bt = new (de())(
                async (e) => {
                  const t = `${b.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = {
                      sessionid: b.TS.SESSIONID,
                      strAccountIDs: e.join(","),
                    },
                    a = await w().get(t, { params: n, withCredentials: !0 });
                  if (!a || 200 != a?.status || 1 != a?.data?.success)
                    throw `Failed to load app to user email and langs: ${((0, J.H))(a).strErrorMsg}`;
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
            return bt;
          })().load(e),
      });
      function Dt(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let bt;
      var At = n(73745);
      function Ct(e) {
        const t = (0, k.a)(),
          n = (0, ut.qh)(),
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
                G.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      l.forEach((t) => {
                        const n = (0, lt.z0)(t.accountid),
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
                    Q.g.WriteCSVToFile(e, "sale_operators.csv");
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
                    r.createElement(Tt, { key: e.accountid, organizer: e }),
                  ),
                ),
              ),
            )
          : r.createElement(U.t, {
              string: (0, j.we)("#Loading"),
              size: "medium",
            });
      }
      function Tt(e) {
        const { organizer: t } = e,
          n = (0, r.useMemo)(
            () => D.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          a = (0, lt.hW)(n),
          l = (function (e) {
            const t = r.useContext(wt);
            return (0, S.I)(Dt(t, e));
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
            r.createElement(Nt, {
              name: s,
              rgClanEventGIDs: t.clan_event_gids,
            }),
          ),
        );
      }
      function Nt(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [a, l, s] = (0, At.uD)();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            G.$n,
            { onClick: l },
            "See ",
            n.length.toLocaleString(),
            " Events",
          ),
          r.createElement(
            O.E,
            { active: a },
            r.createElement(
              x.o0,
              { bAlertDialog: !0, closeModal: s, strTitle: `${t}'s Events` },
              n.map((e) => r.createElement(Pt, { gid: e, key: e })),
            ),
          ),
        );
      }
      function Pt(e) {
        const { gid: t } = e,
          n = (0, R.RR)(t);
        return n
          ? r.createElement(
              "a",
              {
                href: `${q.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
                target: "_blank",
              },
              r.createElement("div", null, n.GetNameWithFallback(0)),
              r.createElement("img", { src: n.GetImageURL("capsule", 0) }),
            )
          : r.createElement("div", null, "Loading ", t);
      }
      function Bt(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: r.createElement(u.tH, null, r.createElement(mt, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: r.createElement(u.tH, null, r.createElement(He, null)),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: r.createElement(u.tH, null, r.createElement(Ct, null)),
              onClick: t,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: r.createElement(u.tH, null, r.createElement(We, null)),
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
      var Mt = n(65946),
        Rt = n(79645),
        Lt = n(1909),
        kt = n(56330),
        Gt = n(85761),
        Ft = n.n(Gt);
      function xt(e) {
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
          { data: a } = (0, lt.js)(b.iA.accountid),
          [l, s] = (0, r.useState)(!1),
          [i, c] = (0, r.useState)(!1),
          [o, u] = (0, r.useState)(!1),
          [m, d] = (0, r.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? r.createElement(U.t, {
                size: "medium",
                position: "center",
                string: (0, j.we)("#Loading"),
              })
            : r.createElement(
                "div",
                { className: (0, z.A)(p().AdminPageCtn, Ft().Ctn) },
                r.createElement(
                  "div",
                  { className: p().PageTitle },
                  (0, j.we)("#MeetSteam_MainTitle"),
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
                        (0, j.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          r.createElement("br", null),
                        ),
                      ),
                      r.createElement(
                        "p",
                        { className: p().IntroText },
                        (0, j.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(Ut, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(Ot, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: (0, z.A)(p().SectionCtn, p().ActionBar) },
                      r.createElement(
                        G.jn,
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
                        (0, j.we)("#Button_Submit"),
                      ),
                      i &&
                        r.createElement(U.t, {
                          size: "medium",
                          position: "center",
                          string: (0, j.we)("#Saving"),
                        }),
                      o &&
                        r.createElement(
                          "div",
                          null,
                          (0, j.we)("#Button_Saved"),
                        ),
                      l &&
                        r.createElement(
                          "div",
                          { className: kt.ErrorStylesWithIcon },
                          (0, j.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : r.createElement(
              "div",
              { className: Ft().Ctn },
              (0, j.we)("#MeetSteam_closed"),
            );
      }
      function Ot(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = T();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("h1", null, (0, j.we)("#MeetSteam_Events_Interest")),
          r.createElement(
            "p",
            null,
            (0, j.PP)("#MeetSteam_Events_title", "2025"),
          ),
          r.createElement(
            "p",
            null,
            r.createElement("span", { className: Ft().Indicator }, "*"),
            " ",
            (0, j.PP)("#MeetSteam_Events_desc"),
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
                          { className: Ft().Indicator },
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
                    r.createElement(G.Yh, {
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
                      tooltip: (0, j.we)("#MeetSteam_attend_ttip"),
                    }),
                  ),
                ),
              ),
            ),
          ),
          r.createElement("br", null),
          r.createElement(G.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, j.we)("#MeetSteam_others"),
          }),
        );
      }
      function Ut(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, lt.js)(b.iA.accountid),
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
              a = fe(b.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [s, i] = (0, r.useState)(() =>
            Boolean((t.email_override && t.email_override != l) || !l),
          ),
          [c, o, u] = (0, Mt.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? r.createElement(
              "div",
              null,
              r.createElement("h1", null, (0, j.we)("#MeetSteam_You")),
              r.createElement("p", null, (0, j.we)("#MeetSteam_You_Desc")),
              r.createElement($t, {
                nPartnerID: t.partner_id,
                label: (0, j.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              r.createElement(
                "div",
                { className: Ft().EmailInfoRow },
                r.createElement(
                  "div",
                  { className: Ft().EmailField },
                  r.createElement(G.pd, {
                    type: "string",
                    label: (0, j.we)("#MeetSteam_You_Email"),
                    disabled: !s,
                    value: t.email_override || l || "",
                    placeholder: (0, j.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !s &&
                  r.createElement(G.Yh, {
                    checked: s,
                    onChange: i,
                    label: (0, j.we)("#MeetSteam_You_Update"),
                    tooltip: (0, j.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              r.createElement(G.JU, null, (0, j.we)("#MeetSteam_NeverMet")),
              r.createElement(G.Yh, {
                label: (0, j.we)("#MeetSteam_NeverMetNo"),
                checked: c,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              r.createElement(
                G.JU,
                null,
                (0, j.we)("#MeetSteam_CapabableEnglish"),
              ),
              r.createElement(
                "div",
                { className: Ft().RadioButtonCtn },
                r.createElement(G.Od, {
                  className: Ft().RadioButtons,
                  checked: !o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, j.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                r.createElement(G.Od, {
                  className: Ft().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, rt.sf)(b.TS.LANGUAGE),
                    }),
                  label: (0, j.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              o &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("br", null),
                  r.createElement(
                    G.JU,
                    null,
                    (0, j.we)("#MeetSteam_LanguagePref"),
                  ),
                  r.createElement(Lt.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, j.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : r.createElement(U.t, {
              size: "medium",
              position: "center",
              string: (0, j.we)("#Loading"),
            });
      }
      function $t(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          l = (0, Rt.c)(b.iA.accountid);
        if (!l)
          return r.createElement(U.t, {
            size: "small",
            position: "center",
            string: (0, j.we)("#Loading"),
          });
        if (1 == l.length) return null;
        const s = [];
        return (
          l.forEach((e) =>
            s.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          r.createElement(G.m, {
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
      var zt = n(20587),
        jt = n(13038),
        Vt = n.n(jt);
      function qt(e) {
        const { data: t } = (0, lt.js)(b.iA.accountid),
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
          ? r.createElement(U.t, {
              size: "medium",
              position: "center",
              string: (0, j.we)("#Loading"),
            })
          : r.createElement(
              "div",
              { className: (0, z.A)(p().AdminPageCtn, Vt().Ctn) },
              r.createElement(
                "div",
                { className: p().PageTitle },
                (0, j.we)("#MeetSteam_PostSurvey_Title", n),
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
                      (0, j.we)("#MeetSteam_PostSurvey_Question"),
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
                    { className: (0, z.A)(p().SectionCtn, p().ActionBar) },
                    r.createElement(
                      G.jn,
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
                      (0, j.we)("#Button_Submit"),
                    ),
                    m &&
                      r.createElement(U.t, {
                        size: "medium",
                        position: "center",
                        string: (0, j.we)("#Saving"),
                      }),
                    E &&
                      r.createElement("div", null, (0, j.we)("#Button_Saved")),
                    o &&
                      r.createElement(
                        "div",
                        { className: kt.ErrorStylesWithIcon },
                        (0, j.we)("#Error_ErrorCommunicatingWithNetwork"),
                      ),
                  ),
                ),
              ),
            );
      }
      var Wt = n(27144),
        Yt = n(5695);
      function Kt(e) {
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
          { bIsLoading: i, events: c } = (0, R.PB)(t),
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
          d = (0, Wt.B3)(u);
        return !i && m && d
          ? r.createElement(Jt, {
              rgSurveyResults: n,
              mapAccountsToReg: a,
              meetSteamEvents: c,
            })
          : r.createElement(U.t, {
              string: "Loading Event, Partner and User Info",
            });
      }
      const Ht = (0, ce.FB)();
      function Jt(e) {
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
                  const e = (0, Wt.CF)(l.GetAccountID());
                  e && (s.name = e.persona_name);
                }
                r.push(s);
              }),
              r
            );
          }, [n, a, t]),
          s = (0, r.useMemo)(
            () => [
              Ht.accessor("name", { header: "Name", size: 150 }),
              Ht.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: Yt.Gb,
              }),
              Ht.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: Qt,
              }),
              Ht.accessor("accountid", { header: "Account ID", size: 150 }),
              Ht.accessor("email", { header: "Email", size: 150 }),
              Ht.accessor("partner_name", {
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
                  G.$n,
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
                r.createElement(oe.k, {
                  columns: s,
                  data: l,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: l.length,
                }),
              ),
            )
          : r.createElement(U.t, { string: (0, j.we)("#Loading") });
      }
      function Qt(e) {
        const t = e.getValue();
        return t?.length > 0
          ? r.createElement(Yt.DP, { text: e.getValue(), regExp: /\|/ })
          : "";
      }
      const Zt = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (e = ":surveyGID") => `/surveyresults/${e}`,
      };
      function Xt(e) {
        return (
          (0, r.useEffect)(() => {
            zt.O3.Init();
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
                  path: Zt.AdminDashboard(),
                  component: Bt,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: Zt.YearlySurvery(":year(\\d+)"),
                  component: xt,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: Zt.PostEventSurvey(":surveyGID(\\d+)"),
                  component: qt,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: Zt.PostEventSurveyResults(":surveyGID(\\d+)"),
                  component: Kt,
                }),
                r.createElement(s.qh, { component: o.a }),
              ),
            ),
          )
        );
      }
    },
    11577: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => o });
      var a = n(90626),
        r = n(96059),
        l = n(82097),
        s = n(81393),
        i = n(78327),
        c = n(38452);
      function o(e) {
        const [t, n] = (0, a.useState)(!1),
          [o] = (0, a.useState)(() =>
            (function () {
              const e = (0, i.Tc)(
                "partnerbrowse_webapi_token",
                "application_config",
              );
              (0, s.wT)(Boolean(e), "require partnerbrowse_webapi_token");
              const t = new r.D(i.TS.WEBAPI_BASE_URL, e);
              ("dev" != i.TS.WEB_UNIVERSE && "beta" != i.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: Initializing CStoreItemCache with access token",
                  e,
                );
              return t;
            })(),
          ),
          u = (0, a.useMemo)(
            () => ({
              country: i.TS.COUNTRY,
              language: i.TS.LANGUAGE,
              realm: i.TS.EREALM,
              bUsePartnerAPI: !0,
            }),
            [],
          );
        return (
          (0, a.useEffect)(
            () => (
              n(!0),
              (function (e) {
                return l.A.Initialize(
                  e.GetServiceTransport(),
                  i.iA.is_partner_member,
                );
              })(o)
            ),
            [o],
          ),
          t
            ? (0, a.createElement)(c.V3, {
                context: u,
                serviceTransportOverride: o.GetServiceTransport(),
                children: e.children,
              })
            : null
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
