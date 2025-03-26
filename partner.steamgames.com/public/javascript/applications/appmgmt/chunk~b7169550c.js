/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
    1990: (t) => {
      t.exports = {
        narrowWidth: "500px",
        GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
        GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
        Active: "_8XjrTFzaSA8ubHvHCu44L",
        GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
        VOWarning: "_3LaJynPDFfccGWUEtdltlt",
        StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
        StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
        StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
      };
    },
    64734: (t) => {
      t.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    98019: (t, e, a) => {
      "use strict";
      a.d(e, { p: () => c, q: () => i });
      var n = a(20194),
        s = a(41735),
        r = a.n(s),
        o = a(78327);
      function i() {
        const t = (0, n.I)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const t = `${o.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              e = await r().get(t);
            return 200 == e?.status && 1 == e.data?.success
              ? e.data.admins
              : (console.error("ValveAccounts:", e?.status), []);
          },
        });
        return t.isLoading ? null : t.data;
      }
      function c(t) {
        const e = i();
        return e?.find((e) => e.id == t);
      }
    },
    32179: (t, e, a) => {
      "use strict";
      a.d(e, {
        MY: () => u,
        UA: () => m,
        Yd: () => h,
        qG: () => f,
        rN: () => d,
        vh: () => g,
      });
      var n = a(34629),
        s = a(41735),
        r = a.n(s),
        o = a(90626),
        i = a(68797),
        c = a(78327),
        l = a(6419);
      function u() {
        return 2 == c.TS.EUNIVERSE ? 12 : 1;
      }
      class p {
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
            const a = c.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              n = {
                sessionid: c.TS.SESSIONID,
                searchtext: t,
                origin: self.origin,
              },
              s = await r().get(a, { params: n });
            200 == s?.status && 1 == s?.data?.success
              ? s.data.publishers.forEach((t) => {
                  const a = {
                    partnerid: t.publisherid,
                    name: t.publishername,
                    partner_url:
                      c.TS.PARTNER_BASE_URL + `pub/publisher/${t.publisherid}/`,
                    contacts: t.contacts,
                  };
                  this.m_mapOptInToPartners.set(t.publisherid, a), e.push(a);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${s?.status} eresult ${s?.data?.success} and msg ${s?.data?.msg}`,
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
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              ("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        constructor() {
          let t = JSON.parse(
            JSON.stringify((0, c.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(t) &&
            (t.forEach((t) => this.m_mapOptInToPartners.set(t.partnerid, t)),
            "dev" == c.TS.WEB_UNIVERSE &&
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
      function g(t) {
        const [e, a] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            !e &&
              t?.length > 0 &&
              p
                .Get()
                .LoadMultiplePartnerInfo(t)
                .then(() => a(!0));
          }, [t, e]),
          e
        );
      }
      function m(t) {
        const [e, a] = o.useState(() => p.Get().GetPartnerInfo(t));
        return (
          o.useEffect(() => {
            !p.Get().BHasPartnerInfoLoad(t) && t > 0
              ? p
                  .Get()
                  .LoadPartnerInfo(t)
                  .then((t) => a(t))
              : p.Get().BHasPartnerInfoLoad(t) &&
                e?.partnerid != t &&
                a(p.Get().GetPartnerInfo(t));
          }, [t, e]),
          [e]
        );
      }
      function d() {
        return { fnFindPartnerByName: p.Get().FindPartnerByName };
      }
      function h(t) {
        return p.Get().GetPartnerInfo(t);
      }
      function f(t) {
        return p.Get().LoadPartnerInfo(t);
      }
      (0, n.Cg)([l.o], p.prototype, "FindPartnerByName", null);
    },
    63556: (t, e, a) => {
      "use strict";
      a.d(e, { E: () => g, O: () => p });
      var n = a(34629),
        s = a(14947),
        r = a(65946),
        o = a(22837),
        i = a(62490),
        c = a(6419),
        l = a(78327),
        u = a(91986);
      class p {
        m_eCurLang = (0, o.sf)(l.TS.LANGUAGE);
        m_rgHasData = (0, i.$Y)([], 31, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new u.l();
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
            p.s_globalSingletonStore ||
              ((p.s_globalSingletonStore = new p()),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.DUS = p.s_globalSingletonStore)),
            p.s_globalSingletonStore
          );
        }
        constructor() {
          (0, s.Gn)(this);
        }
      }
      function g() {
        return (0, r.q3)(() => p.Get().GetCurEditLanguage());
      }
      (0, n.Cg)([s.sH], p.prototype, "m_eCurLang", void 0),
        (0, n.Cg)([s.sH], p.prototype, "m_rgHasData", void 0),
        (0, n.Cg)([s.sH], p.prototype, "m_bHasLocalizationContext", void 0),
        (0, n.Cg)([c.o], p.prototype, "GetCurEditLanguage", null),
        (0, n.Cg)([c.o], p.prototype, "SetCurEditLanguage", null),
        (0, n.Cg)([s.XI.bound], p.prototype, "SetHasLanguage", null),
        (0, n.Cg)([c.o], p.prototype, "BHasLanguageData", null);
    },
    96001: (t, e, a) => {
      "use strict";
      a.d(e, { a: () => c, z: () => i });
      var n = a(81393),
        s = a(96059),
        r = a(30470),
        o = a(24484);
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
          const t = (0, o.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, n.w)(Boolean(t), "require promotion_operation_token"),
            (this.m_steamInterface = new s.D(r.TS.WEBAPI_BASE_URL, t));
        }
      }
      function c() {
        return i.Get().GetPromotionTransport().GetServiceTransport();
      }
    },
    27144: (t, e, a) => {
      "use strict";
      a.d(e, { B3: () => T, CF: () => y, KM: () => S, KT: () => E });
      var n = a(41735),
        s = a.n(n),
        r = a(58632),
        o = a.n(r),
        i = a(90626),
        c = a(20194),
        l = a(75233),
        u = a(17720),
        p = a(68797),
        g = a(78327),
        m = a(56545),
        d = a(37735),
        h = a(23809),
        f = a(2879);
      const _ = "nicknames";
      function S(t) {
        const e = (0, h.KV)(),
          { data: a, isLoading: n } = (0, c.I)({
            queryKey: [_],
            queryFn: async () => {
              const t = new Map();
              if (g.iA.logged_in) {
                const a = m.w.Init(d.dN),
                  n = (await d.xt.GetNicknameList(e, a)).Body().toObject();
                n?.nicknames &&
                  n.nicknames.length > 0 &&
                  n.nicknames.forEach((e) => {
                    t.set(e.accountid, e.nickname);
                  });
              }
              return t;
            },
          });
        return a ? a.get(t) : null;
      }
      const b = new (o())(
          (t) =>
            (async function (t) {
              if (!t || 0 == t.length) return [];
              const e =
                "community" == (0, g.yK)()
                  ? g.TS.COMMUNITY_BASE_URL
                  : g.TS.STORE_BASE_URL;
              if (1 == t.length) {
                const a = { accountid: t[0], origin: self.origin },
                  n = await s().get(`${e}actions/ajaxgetavatarpersona`, {
                    params: a,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  1 != n.data?.success ||
                  !n.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, p.H))(n).strErrorMsg}`;
                return [n.data.userinfo];
              }
              {
                const a = { accountids: t.join(","), origin: self.origin },
                  n = await s().get(`${e}actions/ajaxgetmultiavatarpersona`, {
                    params: a,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  1 != n.data?.success ||
                  !n.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, p.H))(n).strErrorMsg}`;
                const r = new Map();
                return (
                  n.data.userinfos.forEach((t) =>
                    r.set(new u.b(t.steamid).GetAccountID(), t),
                  ),
                  t.map((t) => r.get(t))
                );
              }
            })(t),
          { cache: !1 },
        ),
        L = "avatarandpersonas";
      function E(t) {
        const { data: e, isLoading: a } = (0, c.I)({
          queryKey: [L, t],
          queryFn: () => b.load(t),
        });
        return [e, a];
      }
      function T(t) {
        const e = (0, l.jE)(),
          { data: a, isLoading: n } = (0, c.I)({
            queryKey: [L, t],
            queryFn: async () => {
              const a = await b.loadMany(t);
              return (
                a.forEach((t) => {
                  const a = [L, new u.b(t.steamid).GetAccountID()];
                  e.setQueryData(a, t);
                }),
                a
              );
            },
            enabled: t?.length > 0,
          }),
          s = (0, i.useMemo)(() => {
            const t = new Array();
            return (
              a?.forEach((e) => {
                e instanceof Error || t.push(e);
              }),
              t
            );
          }, [a]);
        return n ? null : s;
      }
      function y(t) {
        return f.L.getQueryData([L, t]);
      }
    },
    1909: (t, e, a) => {
      "use strict";
      a.d(e, { Ng: () => _, iN: () => S, yk: () => b });
      var n = a(34629),
        s = a(75844),
        r = a(65946),
        o = a(90626),
        i = a(22837),
        c = a(2160),
        l = a(63556),
        u = a(95695),
        p = a.n(u),
        g = a(52038),
        m = a(61859),
        d = a(91675),
        h = a(73745),
        f = a(32754);
      let _ = class extends o.Component {
        GenerateLanguageOptions() {
          let t = [];
          const {
            fnFilterLanguage: e,
            fnLangHasData: a,
            fnLastUpdateRTime: n,
            fnIsLangSupported: s,
          } = this.props;
          this.props.bAllowUnsetOption &&
            t.push(
              o.createElement(
                "option",
                { key: "langpicker_unset", value: -1 },
                (0, m.we)("#language_selection_none"),
              ),
            );
          let r = new Array();
          const l = this.props.realms || [c.TU.k_ESteamRealmGlobal];
          for (const t of m.A0.GetLanguageListForRealms(l)) {
            if (e && !e(t)) continue;
            const a = (0, i.Lg)(t),
              n = (0, m.we)("#Language_" + a),
              o = Boolean(s) && s(t);
            r.push({ eLang: t, sLocName: n, bSupported: o });
          }
          r.sort((t, e) =>
            t.bSupported != e.bSupported
              ? t.bSupported
                ? -1
                : 1
              : t.sLocName.localeCompare(e.sLocName),
          );
          let u = !1;
          for (const e of r) {
            e.bSupported != u &&
              (t.push(
                o.createElement(
                  "option",
                  {
                    key: e.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: p().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, m.we)(
                    e.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (u = e.bSupported));
            const s = a && a(e.eLang),
              r = n && n(e.eLang);
            let i = e.sLocName;
            r &&
              0 !== r &&
              ((i += " "),
              (i += (0, m.we)(
                "#Language_Last_Update",
                (0, m.$z)(r) + " @ " + (0, d.KC)(r, { bForce24HourClock: !1 }),
              ))),
              t.push(
                o.createElement(
                  "option",
                  {
                    key: "langpicker" + e.eLang + (s ? "_hasdata" : ""),
                    value: e.eLang,
                    className: (0, g.A)(
                      { [p().LanguageWithContent]: s },
                      e.bSupported
                        ? p().SupportedLanguage
                        : p().UnsupportedLanguage,
                    ),
                  },
                  i,
                ),
              );
          }
          return t;
        }
        OnLanguageChange(t) {
          const { fnOnLanguageChanged: e, selectedLang: a } = this.props;
          let n = Number.parseInt(t.currentTarget.value);
          n != a && e && e(n);
        }
        render() {
          const { selectedLang: t, bDisabled: e, strTooltip: a } = this.props;
          let n = this.GenerateLanguageOptions();
          return o.createElement(
            f.he,
            { toolTipContent: a },
            o.createElement(
              "select",
              { value: t, onChange: this.OnLanguageChange, disabled: e },
              n,
            ),
          );
        }
      };
      function S(t) {
        const [e, a] = (0, r.q3)(() => [
          l.O.Get().GetHasLocalizationContext(),
          l.O.Get().GetCurEditLanguage(),
        ]);
        return o.createElement(_, {
          selectedLang: a,
          fnLangHasData: l.O.Get().BHasLanguageData,
          fnOnLanguageChanged: l.O.Get().SetCurEditLanguage,
          bDisabled: !e,
          strTooltip: e ? void 0 : (0, m.we)("#Localization_EditorNotInFocus"),
        });
      }
      function b(t) {
        const { fnLangHasData: e } = t;
        o.useEffect(
          () => (
            l.O.Get().SetHasLocalizationContext(!0),
            () => l.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const a = (0, r.q3)(() => {
          const t = [];
          for (let a = 0; a < 31; ++a) t[a] = e && e(a);
          return t;
        });
        return (
          o.useEffect(() => l.O.Get().SetHasLanguage(a), [a]),
          o.createElement(o.Fragment, null)
        );
      }
      (0, n.Cg)([h.oI], _.prototype, "OnLanguageChange", null),
        (_ = (0, n.Cg)([s.PA], _));
    },
    38135: (t, e, a) => {
      "use strict";
      a.d(e, { V: () => b, a: () => _ });
      var n = a(34629),
        s = a(90626),
        r = a(75844),
        o = a(92757),
        i = a(52038),
        c = a(61859),
        l = a(95034),
        u = a(1990),
        p = a.n(u),
        g = a(32754),
        m = a(51272),
        d = a(76217),
        h = a(6419);
      class f extends s.Component {
        state = { activeTab: "" };
        componentDidMount() {
          this.props.startingTab
            ? this.setState({ activeTab: this.props.startingTab })
            : !this.props.bDisableRouting &&
              this.props.location &&
              this.setState({
                activeTab: (0, l.f3)(this.props.location, "tab"),
              });
        }
        componentDidUpdate(t) {
          !this.props.bDisableRouting &&
            this.props.location &&
            this.props.location.key !== t.location.key &&
            this.setState({ activeTab: (0, l.f3)(this.props.location, "tab") });
        }
        OnTabClick(t) {
          this.setState({ activeTab: t.key }),
            !this.props.bDisableRouting &&
              this.props.history &&
              (0, l.Bm)(this.props.history, "tab", t.key),
            t.onClick && t.onClick(t);
        }
        render() {
          const t =
            this.props.tabs.find((t) => t.key === this.state.activeTab) ||
            this.props.tabs[0];
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              d.Z,
              {
                className: (0, i.A)(
                  p().GraphicalAssetsTabs,
                  this.props.classNameCtn,
                ),
              },
              this.props.tabs.map((e) =>
                s.createElement(S, {
                  key: e.key,
                  tab: e,
                  OnTabClick: this.OnTabClick,
                  classNameTab: this.props.classNameTab,
                  active: e.key === t.key,
                }),
              ),
            ),
            s.createElement(
              d.Z,
              null,
              t && s.createElement(d.Z, null, t.contents),
            ),
          );
        }
      }
      function _(t) {
        const { statusType: e = "success", children: a } = t;
        let n = "";
        return (
          "success" === e
            ? (n = p().StatusSuccess)
            : "danger" === e
              ? (n = p().StatusDanger)
              : "caution" === e && (n = p().StatusCaution),
          s.createElement(
            "div",
            { className: (0, i.A)(p().GraphicalAssetStatus, n) },
            a,
          )
        );
      }
      (0, n.Cg)([h.o], f.prototype, "OnTabClick", null);
      const S = (0, r.PA)(function (t) {
          const { tab: e, OnTabClick: a, classNameTab: n, active: r } = t;
          return e.hidden
            ? null
            : s.createElement(
                m.e7,
                {
                  condition: Boolean(e.statusToolTip || e.tooltip),
                  wrap: (t) =>
                    s.createElement(
                      g.he,
                      { toolTipContent: e.statusToolTip || e.tooltip },
                      t,
                    ),
                },
                s.createElement(
                  d.Z,
                  {
                    className: (0, i.A)(
                      p().GraphicalAssetsTab,
                      r && p().Active,
                      r && "ActiveTab",
                      n,
                    ),
                    onActivate: () => a(e),
                  },
                  Boolean(e.vo_warning) &&
                    s.createElement(
                      g.he,
                      { toolTipContent: e.vo_warning },
                      s.createElement(
                        "div",
                        { className: p().VOWarning },
                        (0, c.we)("#EventEditor_VOWarning"),
                      ),
                    ),
                  e.status,
                  e.name,
                ),
              );
        }),
        b = (0, o.y)(f);
    },
    48479: (t, e, a) => {
      "use strict";
      a.d(e, { AQ: () => m, qx: () => d });
      var n = a(16676),
        s = a(61859),
        r = a(12155),
        o = a(90626),
        i = a(52038),
        c = a(95695),
        l = a(84811),
        u = a(64734),
        p = a(65946),
        g = a(26408);
      function m(t) {
        const {
            title: e,
            tooltip: a,
            getMinimized: n,
            toggleMinimized: s,
            className: r,
            children: m,
          } = t,
          d = (0, p.q3)(() => n());
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            {
              className: (0, i.A)(
                r,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            o.createElement(
              "div",
              {
                className: (0, i.A)(
                  c.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              e,
              Boolean(a) && o.createElement(g.o, { tooltip: a }),
            ),
            o.createElement(h, { bIsMinimized: d, fnToggleMinimize: s }),
          ),
          !d && o.createElement(l.tH, null, m),
        );
      }
      function d(t) {
        const [e, a] = o.useState(Boolean(t.bStartMinimized));
        return o.createElement(
          m,
          { ...t, getMinimized: () => e, toggleMinimized: () => a(!e) },
          t.children,
        );
      }
      function h(t) {
        const { bIsMinimized: e, fnToggleMinimize: a } = t,
          i = e ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return o.createElement(
          n.$n,
          { "data-tooltip-text": (0, s.we)(i), onClick: a },
          t.bIsMinimized
            ? o.createElement(r.hz4, null)
            : o.createElement(r.Xjb, null),
        );
      }
    },
  },
]);
