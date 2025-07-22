/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    98019: (e, t, n) => {
      "use strict";
      n.d(t, { YA: () => u, p: () => c, qh: () => i });
      var a = n(20194),
        r = n(41735),
        o = n.n(r),
        s = n(78327);
      function i() {
        const e = (0, a.I)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const e = `${s.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              t = await o().get(e);
            return 200 == t?.status && 1 == t.data?.success
              ? t.data.admins
              : (console.error("ValveAccounts:", t?.status), []);
          },
        });
        return e.isLoading ? null : e.data;
      }
      function c(e) {
        const t = i();
        return t?.find((t) => t.id == e);
      }
      function u(e, t) {
        const n = e.getQueryData(["useValveAccounts"]);
        return n?.find((e) => e.id === t);
      }
    },
    32179: (e, t, n) => {
      "use strict";
      n.d(t, {
        MY: () => l,
        UA: () => g,
        Yd: () => f,
        qG: () => h,
        rN: () => m,
        vh: () => d,
      });
      var a = n(34629),
        r = n(41735),
        o = n.n(r),
        s = n(90626),
        i = n(68797),
        c = n(78327),
        u = n(6419);
      function l() {
        return 2 == c.TS.EUNIVERSE ? 12 : 1;
      }
      class p {
        m_mapOptInToPartners = new Map();
        m_mapPromises = new Map();
        GetPartnerInfo(e) {
          return this.m_mapOptInToPartners.get(e);
        }
        BHasPartnerInfoLoad(e) {
          return this.m_mapOptInToPartners.has(e);
        }
        async FindPartnerByName(e) {
          return (
            this.m_mapPromises.has(e) ||
              this.m_mapPromises.set(e, this.InternalFindPartnerByName(e)),
            this.m_mapPromises.get(e)
          );
        }
        async InternalFindPartnerByName(e) {
          const t = new Array();
          try {
            const n = c.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              a = {
                sessionid: c.TS.SESSIONID,
                searchtext: e,
                origin: self.origin,
              },
              r = await o().get(n, { params: a });
            200 == r?.status && 1 == r?.data?.success
              ? r.data.publishers.forEach((e) => {
                  const n = {
                    partnerid: e.publisherid,
                    name: e.publishername,
                    partner_url:
                      c.TS.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
                    contacts: e.contacts,
                  };
                  this.m_mapOptInToPartners.set(e.publisherid, n), t.push(n);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${r?.status} eresult ${r?.data?.success} and msg ${r?.data?.msg}`,
                );
          } catch (e) {
            const t = (0, i.H)(e);
            console.error(
              "CPartnerInfoStore.FindPartnerByName failed add: " +
                t.strErrorMsg,
              t,
            );
          }
          return t;
        }
        async LoadPartnerInfo(e) {
          if (this.m_mapOptInToPartners.has(e))
            return this.m_mapOptInToPartners.get(e);
          await this.FindPartnerByName("" + e);
          return (
            this.BHasPartnerInfoLoad(e) ||
              this.m_mapOptInToPartners.set(e, null),
            this.m_mapOptInToPartners.get(e)
          );
        }
        async LoadMultiplePartnerInfo(e) {
          if (!e || 0 == e.length) return [];
          const t = e.filter((e) => !this.m_mapOptInToPartners.has(e));
          return (
            t.length > 0 && (await this.FindPartnerByName("" + t.join(","))),
            e.map((e) => this.m_mapOptInToPartners.get(e)).filter(Boolean)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              ("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        constructor() {
          let e = JSON.parse(
            JSON.stringify((0, c.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(e) &&
            (e.forEach((e) => this.m_mapOptInToPartners.set(e.partnerid, e)),
            "dev" == c.TS.WEB_UNIVERSE &&
              console.log("DEV_DEUBG: CPartnerInfoStore::constructor", e));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].partnerid &&
            "string" == typeof t[0].name
          );
        }
      }
      function d(e) {
        const [t, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            !t &&
              e?.length > 0 &&
              p
                .Get()
                .LoadMultiplePartnerInfo(e)
                .then(() => n(!0));
          }, [e, t]),
          t
        );
      }
      function g(e) {
        const [t, n] = s.useState(() => p.Get().GetPartnerInfo(e));
        return (
          s.useEffect(() => {
            !p.Get().BHasPartnerInfoLoad(e) && e > 0
              ? p
                  .Get()
                  .LoadPartnerInfo(e)
                  .then((e) => n(e))
              : p.Get().BHasPartnerInfoLoad(e) &&
                t?.partnerid != e &&
                n(p.Get().GetPartnerInfo(e));
          }, [e, t]),
          [t]
        );
      }
      function m() {
        return { fnFindPartnerByName: p.Get().FindPartnerByName };
      }
      function f(e) {
        return p.Get().GetPartnerInfo(e);
      }
      function h(e) {
        return p.Get().LoadPartnerInfo(e);
      }
      (0, a.Cg)([u.o], p.prototype, "FindPartnerByName", null);
    },
    96001: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => c, z: () => i });
      var a = n(81393),
        r = n(96059),
        o = n(30470),
        s = n(24484);
      class i {
        m_steamInterface;
        GetPromotionTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            i.s_Singleton || ((i.s_Singleton = new i()), i.s_Singleton.Init()),
            i.s_Singleton
          );
        }
        Init() {
          const e = (0, s.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, a.wT)(Boolean(e), "require promotion_operation_token"),
            (this.m_steamInterface = new r.D(o.TS.WEBAPI_BASE_URL, e));
        }
      }
      function c() {
        return i.Get().GetPromotionTransport().GetServiceTransport();
      }
    },
    27144: (e, t, n) => {
      "use strict";
      n.d(t, { B3: () => y, CF: () => T, KM: () => S, KT: () => I });
      var a = n(41735),
        r = n.n(a),
        o = n(58632),
        s = n.n(o),
        i = n(90626),
        c = n(20194),
        u = n(75233),
        l = n(17720),
        p = n(68797),
        d = n(78327),
        g = n(56545),
        m = n(37735),
        f = n(23809),
        h = n(7860);
      const _ = "nicknames";
      function S(e) {
        const t = (0, f.KV)(),
          { data: n, isLoading: a } = (0, c.I)({
            queryKey: [_],
            queryFn: async () => {
              const e = new Map();
              if (d.iA.logged_in) {
                const n = g.w.Init(m.dN),
                  a = (await m.xt.GetNicknameList(t, n)).Body().toObject();
                a?.nicknames &&
                  a.nicknames.length > 0 &&
                  a.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return n ? n.get(e) : null;
      }
      const L = new (s())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, d.yK)()
                  ? d.TS.COMMUNITY_BASE_URL
                  : d.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, p.H))(a).strErrorMsg}`;
                return [a.data.userinfo];
              }
              {
                const n = { accountids: e.join(","), origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, p.H))(a).strErrorMsg}`;
                const o = new Map();
                return (
                  a.data.userinfos.forEach((e) =>
                    o.set(new l.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => o.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        E = "avatarandpersonas";
      function I(e) {
        const { data: t, isLoading: n } = (0, c.I)({
          queryKey: [E, e],
          queryFn: () => L.load(e),
        });
        return [t, n];
      }
      function y(e) {
        const t = (0, u.jE)(),
          { data: n, isLoading: a } = (0, c.I)({
            queryKey: [E, e],
            queryFn: async () => {
              const n = await L.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [E, new l.b(e.steamid).GetAccountID()];
                  t.setQueryData(n, e);
                }),
                n
              );
            },
            enabled: e?.length > 0,
          }),
          r = (0, i.useMemo)(() => {
            const e = new Array();
            return (
              n?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [n]);
        return a ? null : r;
      }
      function T(e) {
        return h.L.getQueryData([E, e]);
      }
    },
    1909: (e, t, n) => {
      "use strict";
      n.d(t, { Ng: () => _, iN: () => S, yk: () => L });
      var a = n(34629),
        r = n(75844),
        o = n(65946),
        s = n(90626),
        i = n(22837),
        c = n(2160),
        u = n(63556),
        l = n(95695),
        p = n.n(l),
        d = n(52038),
        g = n(61859),
        m = n(91675),
        f = n(73745),
        h = n(32754);
      let _ = class extends s.Component {
        GenerateLanguageOptions() {
          let e = [];
          const {
            fnFilterLanguage: t,
            fnLangHasData: n,
            fnLastUpdateRTime: a,
            fnIsLangSupported: r,
          } = this.props;
          this.props.bAllowUnsetOption &&
            e.push(
              s.createElement(
                "option",
                { key: "langpicker_unset", value: -1 },
                (0, g.we)("#language_selection_none"),
              ),
            );
          let o = new Array();
          const u = this.props.realms || [c.TU.k_ESteamRealmGlobal];
          for (const e of g.A0.GetLanguageListForRealms(u)) {
            if (t && !t(e)) continue;
            const n = (0, i.Lg)(e),
              a = (0, g.we)("#Language_" + n),
              s = Boolean(r) && r(e);
            o.push({ eLang: e, sLocName: a, bSupported: s });
          }
          o.sort((e, t) =>
            e.bSupported != t.bSupported
              ? e.bSupported
                ? -1
                : 1
              : e.sLocName.localeCompare(t.sLocName),
          );
          let l = !1;
          for (const t of o) {
            t.bSupported != l &&
              (e.push(
                s.createElement(
                  "option",
                  {
                    key: t.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: p().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, g.we)(
                    t.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (l = t.bSupported));
            const r = n && n(t.eLang),
              o = a && a(t.eLang);
            let i = t.sLocName;
            o &&
              0 !== o &&
              ((i += " "),
              (i += (0, g.we)(
                "#Language_Last_Update",
                (0, g.$z)(o) + " @ " + (0, m.KC)(o, { bForce24HourClock: !1 }),
              ))),
              e.push(
                s.createElement(
                  "option",
                  {
                    key: "langpicker" + t.eLang + (r ? "_hasdata" : ""),
                    value: t.eLang,
                    className: (0, d.A)(
                      { [p().LanguageWithContent]: r },
                      t.bSupported
                        ? p().SupportedLanguage
                        : p().UnsupportedLanguage,
                    ),
                  },
                  i,
                ),
              );
          }
          return e;
        }
        OnLanguageChange(e) {
          const { fnOnLanguageChanged: t, selectedLang: n } = this.props;
          let a = Number.parseInt(e.currentTarget.value);
          a != n && t && t(a);
        }
        render() {
          const { selectedLang: e, bDisabled: t, strTooltip: n } = this.props;
          let a = this.GenerateLanguageOptions();
          return s.createElement(
            h.he,
            { toolTipContent: n },
            s.createElement(
              "select",
              { value: e, onChange: this.OnLanguageChange, disabled: t },
              a,
            ),
          );
        }
      };
      function S(e) {
        const [t, n] = (0, o.q3)(() => [
          u.O.Get().GetHasLocalizationContext(),
          u.O.Get().GetCurEditLanguage(),
        ]);
        return s.createElement(_, {
          selectedLang: n,
          fnLangHasData: u.O.Get().BHasLanguageData,
          fnOnLanguageChanged: u.O.Get().SetCurEditLanguage,
          bDisabled: !t,
          strTooltip: t ? void 0 : (0, g.we)("#Localization_EditorNotInFocus"),
        });
      }
      function L(e) {
        const { fnLangHasData: t } = e;
        s.useEffect(
          () => (
            u.O.Get().SetHasLocalizationContext(!0),
            () => u.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const n = (0, o.q3)(() => {
          const e = [];
          for (let n = 0; n < 31; ++n) e[n] = t && t(n);
          return e;
        });
        return (
          s.useEffect(() => u.O.Get().SetHasLanguage(n), [n]),
          s.createElement(s.Fragment, null)
        );
      }
      (0, a.Cg)([f.oI], _.prototype, "OnLanguageChange", null),
        (_ = (0, a.Cg)([r.PA], _));
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => g, pn: () => f, qx: () => m });
      var a = n(16676),
        r = n(61859),
        o = n(12155),
        s = n(90626),
        i = n(52038),
        c = n(95695),
        u = n(84811),
        l = n(64734),
        p = n(65946),
        d = n(26408);
      function g(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: a,
            toggleMinimized: r,
            className: o,
            children: g,
            elAdditionalButtons: m,
          } = e,
          h = (0, p.q3)(() => a());
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            {
              className: (0, i.A)(
                o,
                l.SectionTitleHeader,
                l.required_title,
                "SectionTitleHeader",
              ),
            },
            s.createElement(
              "div",
              {
                className: (0, i.A)(
                  c.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && s.createElement(d.o, { tooltip: n }),
            ),
            s.createElement(
              "div",
              { className: l.SectionTitleButtons },
              m,
              s.createElement(f, { bIsMinimized: h, fnToggleMinimize: r }),
            ),
          ),
          !h && s.createElement(u.tH, null, g),
        );
      }
      function m(e) {
        const [t, n] = s.useState(Boolean(e.bStartMinimized));
        return s.createElement(
          g,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function f(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          i = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return s.createElement(
          a.$n,
          { "data-tooltip-text": (0, r.we)(i), onClick: n },
          e.bIsMinimized
            ? s.createElement(o.hz4, null)
            : s.createElement(o.Xjb, null),
        );
      }
    },
  },
]);
