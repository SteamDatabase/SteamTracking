/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
    64734: (t) => {
      t.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    98019: (t, e, n) => {
      "use strict";
      n.d(e, { YA: () => c, p: () => u, qh: () => i });
      var a = n(20194),
        r = n(41735),
        o = n.n(r),
        s = n(78327);
      function i() {
        const t = (0, a.I)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const t = `${s.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              e = await o().get(t);
            return 200 == e?.status && 1 == e.data?.success
              ? e.data.admins
              : (console.error("ValveAccounts:", e?.status), []);
          },
        });
        return t.isLoading ? null : t.data;
      }
      function u(t) {
        const e = i();
        return e?.find((e) => e.id == t);
      }
      function c(t, e) {
        const n = t.getQueryData(["useValveAccounts"]);
        return n?.find((t) => t.id === e);
      }
    },
    32179: (t, e, n) => {
      "use strict";
      n.d(e, {
        MY: () => l,
        UA: () => d,
        Yd: () => f,
        qG: () => _,
        rN: () => m,
        vh: () => p,
      });
      var a = n(34629),
        r = n(41735),
        o = n.n(r),
        s = n(90626),
        i = n(68797),
        u = n(78327),
        c = n(6419);
      function l() {
        return 2 == u.TS.EUNIVERSE ? 12 : 1;
      }
      class g {
        m_mapOptInToPartners = new Map();
        m_mapPromises = new Map();
        GetPartnerInfo(t) {
          return this.m_mapOptInToPartners.get(t);
        }
        BHasPartnerInfoLoad(t) {
          return this.m_mapOptInToPartners.has(t);
        }
        async FindPartnerByName(t) {
          return (
            this.m_mapPromises.has(t) ||
              this.m_mapPromises.set(t, this.InternalFindPartnerByName(t)),
            this.m_mapPromises.get(t)
          );
        }
        async InternalFindPartnerByName(t) {
          const e = new Array();
          try {
            const n = u.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              a = {
                sessionid: u.TS.SESSIONID,
                searchtext: t,
                origin: self.origin,
              },
              r = await o().get(n, { params: a });
            200 == r?.status && 1 == r?.data?.success
              ? r.data.publishers.forEach((t) => {
                  const n = {
                    partnerid: t.publisherid,
                    name: t.publishername,
                    partner_url:
                      u.TS.PARTNER_BASE_URL + `pub/publisher/${t.publisherid}/`,
                    contacts: t.contacts,
                  };
                  this.m_mapOptInToPartners.set(t.publisherid, n), e.push(n);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${r?.status} eresult ${r?.data?.success} and msg ${r?.data?.msg}`,
                );
          } catch (t) {
            const e = (0, i.H)(t);
            console.error(
              "CPartnerInfoStore.FindPartnerByName failed add: " +
                e.strErrorMsg,
              e,
            );
          }
          return e;
        }
        async LoadPartnerInfo(t) {
          if (this.m_mapOptInToPartners.has(t))
            return this.m_mapOptInToPartners.get(t);
          await this.FindPartnerByName("" + t);
          return (
            this.BHasPartnerInfoLoad(t) ||
              this.m_mapOptInToPartners.set(t, null),
            this.m_mapOptInToPartners.get(t)
          );
        }
        async LoadMultiplePartnerInfo(t) {
          if (!t || 0 == t.length) return [];
          const e = t.filter((t) => !this.m_mapOptInToPartners.has(t));
          return (
            e.length > 0 && (await this.FindPartnerByName("" + e.join(","))),
            t.map((t) => this.m_mapOptInToPartners.get(t)).filter(Boolean)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            g.s_Singleton ||
              ((g.s_Singleton = new g()),
              ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = g.s_Singleton)),
            g.s_Singleton
          );
        }
        constructor() {
          let t = JSON.parse(
            JSON.stringify((0, u.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(t) &&
            (t.forEach((t) => this.m_mapOptInToPartners.set(t.partnerid, t)),
            "dev" == u.TS.WEB_UNIVERSE &&
              console.log("DEV_DEUBG: CPartnerInfoStore::constructor", t));
        }
        ValidateStoreDefault(t) {
          const e = t;
          return (
            !!(
              e &&
              Array.isArray(e) &&
              e.length > 0 &&
              "object" == typeof e[0]
            ) &&
            "number" == typeof e[0].partnerid &&
            "string" == typeof e[0].name
          );
        }
      }
      function p(t) {
        const [e, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            !e &&
              t?.length > 0 &&
              g
                .Get()
                .LoadMultiplePartnerInfo(t)
                .then(() => n(!0));
          }, [t, e]),
          e
        );
      }
      function d(t) {
        const [e, n] = s.useState(() => g.Get().GetPartnerInfo(t));
        return (
          s.useEffect(() => {
            !g.Get().BHasPartnerInfoLoad(t) && t > 0
              ? g
                  .Get()
                  .LoadPartnerInfo(t)
                  .then((t) => n(t))
              : g.Get().BHasPartnerInfoLoad(t) &&
                e?.partnerid != t &&
                n(g.Get().GetPartnerInfo(t));
          }, [t, e]),
          [e]
        );
      }
      function m() {
        return { fnFindPartnerByName: g.Get().FindPartnerByName };
      }
      function f(t) {
        return g.Get().GetPartnerInfo(t);
      }
      function _(t) {
        return g.Get().LoadPartnerInfo(t);
      }
      (0, a.Cg)([c.o], g.prototype, "FindPartnerByName", null);
    },
    63556: (t, e, n) => {
      "use strict";
      n.d(e, { E: () => p, O: () => g });
      var a = n(34629),
        r = n(14947),
        o = n(65946),
        s = n(22837),
        i = n(62490),
        u = n(6419),
        c = n(78327),
        l = n(91986);
      class g {
        m_eCurLang = (0, s.sf)(c.TS.LANGUAGE);
        m_rgHasData = (0, i.$Y)([], 31, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new l.l();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(t) {
          return (
            this.m_eCurLang != t &&
            ((this.m_eCurLang = t), this.GetCallback().Dispatch(t), !0)
          );
        }
        SetHasLanguage(t) {
          t.forEach((t, e) => {
            this.m_rgHasData[e] != t && (this.m_rgHasData[e] = t);
          });
        }
        BHasLanguageData(t) {
          return this.m_rgHasData[t];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(t) {
          t != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = t);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            g.s_globalSingletonStore ||
              ((g.s_globalSingletonStore = new g()),
              "dev" == c.TS.WEB_UNIVERSE &&
                (window.DUS = g.s_globalSingletonStore)),
            g.s_globalSingletonStore
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
      }
      function p() {
        return (0, o.q3)(() => g.Get().GetCurEditLanguage());
      }
      (0, a.Cg)([r.sH], g.prototype, "m_eCurLang", void 0),
        (0, a.Cg)([r.sH], g.prototype, "m_rgHasData", void 0),
        (0, a.Cg)([r.sH], g.prototype, "m_bHasLocalizationContext", void 0),
        (0, a.Cg)([u.o], g.prototype, "GetCurEditLanguage", null),
        (0, a.Cg)([u.o], g.prototype, "SetCurEditLanguage", null),
        (0, a.Cg)([r.XI.bound], g.prototype, "SetHasLanguage", null),
        (0, a.Cg)([u.o], g.prototype, "BHasLanguageData", null);
    },
    96001: (t, e, n) => {
      "use strict";
      n.d(e, { a: () => u, z: () => i });
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
          const t = (0, s.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, a.w)(Boolean(t), "require promotion_operation_token"),
            (this.m_steamInterface = new r.D(o.TS.WEBAPI_BASE_URL, t));
        }
      }
      function u() {
        return i.Get().GetPromotionTransport().GetServiceTransport();
      }
    },
    27144: (t, e, n) => {
      "use strict";
      n.d(e, { B3: () => b, CF: () => I, KM: () => S, KT: () => y });
      var a = n(41735),
        r = n.n(a),
        o = n(58632),
        s = n.n(o),
        i = n(90626),
        u = n(20194),
        c = n(75233),
        l = n(17720),
        g = n(68797),
        p = n(78327),
        d = n(56545),
        m = n(37735),
        f = n(23809),
        _ = n(7860);
      const h = "nicknames";
      function S(t) {
        const e = (0, f.KV)(),
          { data: n, isLoading: a } = (0, u.I)({
            queryKey: [h],
            queryFn: async () => {
              const t = new Map();
              if (p.iA.logged_in) {
                const n = d.w.Init(m.dN),
                  a = (await m.xt.GetNicknameList(e, n)).Body().toObject();
                a?.nicknames &&
                  a.nicknames.length > 0 &&
                  a.nicknames.forEach((e) => {
                    t.set(e.accountid, e.nickname);
                  });
              }
              return t;
            },
          });
        return n ? n.get(t) : null;
      }
      const L = new (s())(
          (t) =>
            (async function (t) {
              if (!t || 0 == t.length) return [];
              const e =
                "community" == (0, p.yK)()
                  ? p.TS.COMMUNITY_BASE_URL
                  : p.TS.STORE_BASE_URL;
              if (1 == t.length) {
                const n = { accountid: t[0], origin: self.origin },
                  a = await r().get(`${e}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, g.H))(a).strErrorMsg}`;
                return [a.data.userinfo];
              }
              {
                const n = { accountids: t.join(","), origin: self.origin },
                  a = await r().get(`${e}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, g.H))(a).strErrorMsg}`;
                const o = new Map();
                return (
                  a.data.userinfos.forEach((t) =>
                    o.set(new l.b(t.steamid).GetAccountID(), t),
                  ),
                  t.map((t) => o.get(t))
                );
              }
            })(t),
          { cache: !1 },
        ),
        E = "avatarandpersonas";
      function y(t) {
        const { data: e, isLoading: n } = (0, u.I)({
          queryKey: [E, t],
          queryFn: () => L.load(t),
        });
        return [e, n];
      }
      function b(t) {
        const e = (0, c.jE)(),
          { data: n, isLoading: a } = (0, u.I)({
            queryKey: [E, t],
            queryFn: async () => {
              const n = await L.loadMany(t);
              return (
                n.forEach((t) => {
                  const n = [E, new l.b(t.steamid).GetAccountID()];
                  e.setQueryData(n, t);
                }),
                n
              );
            },
            enabled: t?.length > 0,
          }),
          r = (0, i.useMemo)(() => {
            const t = new Array();
            return (
              n?.forEach((e) => {
                e instanceof Error || t.push(e);
              }),
              t
            );
          }, [n]);
        return a ? null : r;
      }
      function I(t) {
        return _.L.getQueryData([E, t]);
      }
    },
    1909: (t, e, n) => {
      "use strict";
      n.d(e, { Ng: () => h, iN: () => S, yk: () => L });
      var a = n(34629),
        r = n(75844),
        o = n(65946),
        s = n(90626),
        i = n(22837),
        u = n(2160),
        c = n(63556),
        l = n(95695),
        g = n.n(l),
        p = n(52038),
        d = n(61859),
        m = n(91675),
        f = n(73745),
        _ = n(32754);
      let h = class extends s.Component {
        GenerateLanguageOptions() {
          let t = [];
          const {
            fnFilterLanguage: e,
            fnLangHasData: n,
            fnLastUpdateRTime: a,
            fnIsLangSupported: r,
          } = this.props;
          this.props.bAllowUnsetOption &&
            t.push(
              s.createElement(
                "option",
                { key: "langpicker_unset", value: -1 },
                (0, d.we)("#language_selection_none"),
              ),
            );
          let o = new Array();
          const c = this.props.realms || [u.TU.k_ESteamRealmGlobal];
          for (const t of d.A0.GetLanguageListForRealms(c)) {
            if (e && !e(t)) continue;
            const n = (0, i.Lg)(t),
              a = (0, d.we)("#Language_" + n),
              s = Boolean(r) && r(t);
            o.push({ eLang: t, sLocName: a, bSupported: s });
          }
          o.sort((t, e) =>
            t.bSupported != e.bSupported
              ? t.bSupported
                ? -1
                : 1
              : t.sLocName.localeCompare(e.sLocName),
          );
          let l = !1;
          for (const e of o) {
            e.bSupported != l &&
              (t.push(
                s.createElement(
                  "option",
                  {
                    key: e.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: g().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, d.we)(
                    e.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (l = e.bSupported));
            const r = n && n(e.eLang),
              o = a && a(e.eLang);
            let i = e.sLocName;
            o &&
              0 !== o &&
              ((i += " "),
              (i += (0, d.we)(
                "#Language_Last_Update",
                (0, d.$z)(o) + " @ " + (0, m.KC)(o, { bForce24HourClock: !1 }),
              ))),
              t.push(
                s.createElement(
                  "option",
                  {
                    key: "langpicker" + e.eLang + (r ? "_hasdata" : ""),
                    value: e.eLang,
                    className: (0, p.A)(
                      { [g().LanguageWithContent]: r },
                      e.bSupported
                        ? g().SupportedLanguage
                        : g().UnsupportedLanguage,
                    ),
                  },
                  i,
                ),
              );
          }
          return t;
        }
        OnLanguageChange(t) {
          const { fnOnLanguageChanged: e, selectedLang: n } = this.props;
          let a = Number.parseInt(t.currentTarget.value);
          a != n && e && e(a);
        }
        render() {
          const { selectedLang: t, bDisabled: e, strTooltip: n } = this.props;
          let a = this.GenerateLanguageOptions();
          return s.createElement(
            _.he,
            { toolTipContent: n },
            s.createElement(
              "select",
              { value: t, onChange: this.OnLanguageChange, disabled: e },
              a,
            ),
          );
        }
      };
      function S(t) {
        const [e, n] = (0, o.q3)(() => [
          c.O.Get().GetHasLocalizationContext(),
          c.O.Get().GetCurEditLanguage(),
        ]);
        return s.createElement(h, {
          selectedLang: n,
          fnLangHasData: c.O.Get().BHasLanguageData,
          fnOnLanguageChanged: c.O.Get().SetCurEditLanguage,
          bDisabled: !e,
          strTooltip: e ? void 0 : (0, d.we)("#Localization_EditorNotInFocus"),
        });
      }
      function L(t) {
        const { fnLangHasData: e } = t;
        s.useEffect(
          () => (
            c.O.Get().SetHasLocalizationContext(!0),
            () => c.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const n = (0, o.q3)(() => {
          const t = [];
          for (let n = 0; n < 31; ++n) t[n] = e && e(n);
          return t;
        });
        return (
          s.useEffect(() => c.O.Get().SetHasLanguage(n), [n]),
          s.createElement(s.Fragment, null)
        );
      }
      (0, a.Cg)([f.oI], h.prototype, "OnLanguageChange", null),
        (h = (0, a.Cg)([r.PA], h));
    },
    48479: (t, e, n) => {
      "use strict";
      n.d(e, { AQ: () => d, qx: () => m });
      var a = n(16676),
        r = n(61859),
        o = n(12155),
        s = n(90626),
        i = n(52038),
        u = n(95695),
        c = n(84811),
        l = n(64734),
        g = n(65946),
        p = n(26408);
      function d(t) {
        const {
            title: e,
            tooltip: n,
            getMinimized: a,
            toggleMinimized: r,
            className: o,
            children: d,
            elAdditionalButtons: m,
          } = t,
          _ = (0, g.q3)(() => a());
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
                  u.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              e,
              Boolean(n) && s.createElement(p.o, { tooltip: n }),
            ),
            s.createElement(
              "div",
              { className: l.SectionTitleButtons },
              m,
              s.createElement(f, { bIsMinimized: _, fnToggleMinimize: r }),
            ),
          ),
          !_ && s.createElement(c.tH, null, d),
        );
      }
      function m(t) {
        const [e, n] = s.useState(Boolean(t.bStartMinimized));
        return s.createElement(
          d,
          { ...t, getMinimized: () => e, toggleMinimized: () => n(!e) },
          t.children,
        );
      }
      function f(t) {
        const { bIsMinimized: e, fnToggleMinimize: n } = t,
          i = e ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return s.createElement(
          a.$n,
          { "data-tooltip-text": (0, r.we)(i), onClick: n },
          t.bIsMinimized
            ? s.createElement(o.hz4, null)
            : s.createElement(o.Xjb, null),
        );
      }
    },
  },
]);
