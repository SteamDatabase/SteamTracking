/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
    1990: (t) => {
      t.exports = {
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
      a.d(e, { b: () => n });
      const n = [
        { id: 303520413, displayName: "Adam" },
        { id: 388445686, displayName: "Adil" },
        { id: 85411739, displayName: "Alden" },
        { id: 1685193861, displayName: "Anna" },
        { id: 1153232713, displayName: "Augusta" },
        { id: 1016413309, displayName: "Brock" },
        { id: 55551709, displayName: "Connor" },
        { id: 1153054355, displayName: "DJ" },
        { id: 328711801, displayName: "Erik" },
        { id: 72848153, displayName: "Izumi" },
        { id: 76493708, displayName: "Jason" },
        { id: 1620810191, displayName: "Javier" },
        { id: 100402330, displayName: "Kassidy" },
        { id: 1561376890, displayName: "Kevin" },
        { id: 1553660262, displayName: "Lyria" },
        { id: 1297385845, displayName: "Marc" },
        { id: 1184183308, displayName: "Miranda" },
        { id: 1152779073, displayName: "Nathaniel" },
        { id: 1258631037, displayName: "Odin" },
        { id: 1211448543, displayName: "Ria" },
        { id: 1538854785, displayName: "Sam" },
        { id: 1289103430, displayName: "Steve" },
        { id: 122962881, displayName: "TomG" },
        { id: 1791131761, displayName: "Katie" },
        { id: 1154697588, displayName: "Lawrence" },
        { id: 1714390508, displayName: "Karen" },
        { id: 279305676, displayName: "Daria" },
        { id: 1152866291, displayName: "Jay" },
        { id: 19992847, displayName: "Jacob" },
        { id: 1062028143, displayName: "Yosef" },
        { id: 913236548, displayName: "Dennis" },
        { id: 1597518683, displayName: "Fred" },
        { id: 1349490052, displayName: "Lukasz" },
        { id: 1513239904, displayName: "Aaron" },
      ];
    },
    32179: (t, e, a) => {
      "use strict";
      a.d(e, {
        MY: () => c,
        UA: () => m,
        Yd: () => h,
        qG: () => S,
        rN: () => g,
        vh: () => d,
      });
      var n = a(34629),
        s = a(41735),
        i = a.n(s),
        r = a(90626),
        o = a(68797),
        l = a(78327),
        p = a(6419);
      function c() {
        return 2 == l.TS.EUNIVERSE ? 12 : 1;
      }
      class u {
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
            const a = l.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              n = {
                sessionid: l.TS.SESSIONID,
                searchtext: t,
                origin: self.origin,
              },
              s = await i().get(a, { params: n });
            200 == s?.status && 1 == s?.data?.success
              ? s.data.publishers.forEach((t) => {
                  const a = {
                    partnerid: t.publisherid,
                    name: t.publishername,
                    partner_url:
                      l.TS.PARTNER_BASE_URL + `pub/publisher/${t.publisherid}/`,
                    contacts: t.contacts,
                  };
                  this.m_mapOptInToPartners.set(t.publisherid, a), e.push(a);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${s?.status} eresult ${s?.data?.success} and msg ${s?.data?.msg}`,
                );
          } catch (t) {
            const e = (0, o.H)(t);
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
          const e = t.map((t) => !this.m_mapOptInToPartners.has(t));
          if (e.length > 0) {
            const t = e.map((t) => this.FindPartnerByName("" + t));
            await Promise.all(t);
          }
          return t.map((t) => this.m_mapOptInToPartners.get(t)).filter(Boolean);
        }
        static s_Singleton;
        static Get() {
          return (
            u.s_Singleton ||
              ((u.s_Singleton = new u()),
              ("dev" != l.TS.WEB_UNIVERSE && "beta" != l.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = u.s_Singleton)),
            u.s_Singleton
          );
        }
        constructor() {
          let t = JSON.parse(
            JSON.stringify((0, l.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(t) &&
            (t.forEach((t) => this.m_mapOptInToPartners.set(t.partnerid, t)),
            "dev" == l.TS.WEB_UNIVERSE &&
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
      function d(t) {
        const [e, a] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            !e &&
              t?.length > 0 &&
              u
                .Get()
                .LoadMultiplePartnerInfo(t)
                .then(() => a(!0));
          }, [t, e]),
          e
        );
      }
      function m(t) {
        const [e, a] = r.useState(() => u.Get().GetPartnerInfo(t));
        return (
          r.useEffect(() => {
            !u.Get().BHasPartnerInfoLoad(t) && t > 0
              ? u
                  .Get()
                  .LoadPartnerInfo(t)
                  .then((t) => a(t))
              : u.Get().BHasPartnerInfoLoad(t) &&
                e?.partnerid != t &&
                a(u.Get().GetPartnerInfo(t));
          }, [t, e]),
          [e]
        );
      }
      function g() {
        return { fnFindPartnerByName: u.Get().FindPartnerByName };
      }
      function h(t) {
        return u.Get().GetPartnerInfo(t);
      }
      function S(t) {
        return u.Get().LoadPartnerInfo(t);
      }
      (0, n.Cg)([p.o], u.prototype, "FindPartnerByName", null);
    },
    63556: (t, e, a) => {
      "use strict";
      a.d(e, { E: () => d, O: () => u });
      var n = a(34629),
        s = a(14947),
        i = a(65946),
        r = a(22837),
        o = a(62490),
        l = a(6419),
        p = a(78327),
        c = a(91986);
      class u {
        m_eCurLang = (0, r.sf)(p.TS.LANGUAGE);
        m_rgHasData = (0, o.$Y)([], 31, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new c.l();
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
            u.s_globalSingletonStore ||
              ((u.s_globalSingletonStore = new u()),
              "dev" == p.TS.WEB_UNIVERSE &&
                (window.DUS = u.s_globalSingletonStore)),
            u.s_globalSingletonStore
          );
        }
        constructor() {
          (0, s.Gn)(this);
        }
      }
      function d() {
        return (0, i.q3)(() => u.Get().GetCurEditLanguage());
      }
      (0, n.Cg)([s.sH], u.prototype, "m_eCurLang", void 0),
        (0, n.Cg)([s.sH], u.prototype, "m_rgHasData", void 0),
        (0, n.Cg)([s.sH], u.prototype, "m_bHasLocalizationContext", void 0),
        (0, n.Cg)([l.o], u.prototype, "GetCurEditLanguage", null),
        (0, n.Cg)([l.o], u.prototype, "SetCurEditLanguage", null),
        (0, n.Cg)([s.XI.bound], u.prototype, "SetHasLanguage", null),
        (0, n.Cg)([l.o], u.prototype, "BHasLanguageData", null);
    },
    96001: (t, e, a) => {
      "use strict";
      a.d(e, { a: () => l, z: () => o });
      var n = a(81393),
        s = a(96059),
        i = a(30470),
        r = a(24484);
      class o {
        m_steamInterface;
        GetPromotionTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            o.s_Singleton || ((o.s_Singleton = new o()), o.s_Singleton.Init()),
            o.s_Singleton
          );
        }
        Init() {
          const t = (0, r.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, n.w)(Boolean(t), "require promotion_operation_token"),
            (this.m_steamInterface = new s.D(i.TS.WEBAPI_BASE_URL, t));
        }
      }
      function l() {
        return o.Get().GetPromotionTransport().GetServiceTransport();
      }
    },
    1909: (t, e, a) => {
      "use strict";
      a.d(e, { Ng: () => _, iN: () => b, yk: () => y });
      var n = a(34629),
        s = a(75844),
        i = a(65946),
        r = a(90626),
        o = a(22837),
        l = a(2160),
        p = a(63556),
        c = a(95695),
        u = a.n(c),
        d = a(52038),
        m = a(61859),
        g = a(91675),
        h = a(73745),
        S = a(32754);
      let _ = class extends r.Component {
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
              r.createElement(
                "option",
                { key: "langpicker_unset", value: -1 },
                (0, m.we)("#language_selection_none"),
              ),
            );
          let i = new Array();
          const p = this.props.realms || [l.TU.k_ESteamRealmGlobal];
          for (const t of m.A0.GetLanguageListForRealms(p)) {
            if (e && !e(t)) continue;
            const a = (0, o.Lg)(t),
              n = (0, m.we)("#Language_" + a),
              r = Boolean(s) && s(t);
            i.push({ eLang: t, sLocName: n, bSupported: r });
          }
          i.sort((t, e) =>
            t.bSupported != e.bSupported
              ? t.bSupported
                ? -1
                : 1
              : t.sLocName.localeCompare(e.sLocName),
          );
          let c = !1;
          for (const e of i) {
            e.bSupported != c &&
              (t.push(
                r.createElement(
                  "option",
                  {
                    key: e.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: u().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, m.we)(
                    e.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (c = e.bSupported));
            const s = a && a(e.eLang),
              i = n && n(e.eLang);
            let o = e.sLocName;
            i &&
              0 !== i &&
              ((o += " "),
              (o += (0, m.we)(
                "#Language_Last_Update",
                (0, m.$z)(i) + " @ " + (0, g.KC)(i, { bForce24HourClock: !1 }),
              ))),
              t.push(
                r.createElement(
                  "option",
                  {
                    key: "langpicker" + e.eLang + (s ? "_hasdata" : ""),
                    value: e.eLang,
                    className: (0, d.A)(
                      { [u().LanguageWithContent]: s },
                      e.bSupported
                        ? u().SupportedLanguage
                        : u().UnsupportedLanguage,
                    ),
                  },
                  o,
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
          return r.createElement(
            S.he,
            { toolTipContent: a },
            r.createElement(
              "select",
              { value: t, onChange: this.OnLanguageChange, disabled: e },
              n,
            ),
          );
        }
      };
      function b(t) {
        const [e, a] = (0, i.q3)(() => [
          p.O.Get().GetHasLocalizationContext(),
          p.O.Get().GetCurEditLanguage(),
        ]);
        return r.createElement(_, {
          selectedLang: a,
          fnLangHasData: p.O.Get().BHasLanguageData,
          fnOnLanguageChanged: p.O.Get().SetCurEditLanguage,
          bDisabled: !e,
          strTooltip: e ? void 0 : (0, m.we)("#Localization_EditorNotInFocus"),
        });
      }
      function y(t) {
        const { fnLangHasData: e } = t;
        r.useEffect(
          () => (
            p.O.Get().SetHasLocalizationContext(!0),
            () => p.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const a = (0, i.q3)(() => {
          const t = [];
          for (let a = 0; a < 31; ++a) t[a] = e && e(a);
          return t;
        });
        return (
          r.useEffect(() => p.O.Get().SetHasLanguage(a), [a]),
          r.createElement(r.Fragment, null)
        );
      }
      (0, n.Cg)([h.oI], _.prototype, "OnLanguageChange", null),
        (_ = (0, n.Cg)([s.PA], _));
    },
    38135: (t, e, a) => {
      "use strict";
      a.d(e, { V: () => y, a: () => _ });
      var n = a(34629),
        s = a(90626),
        i = a(75844),
        r = a(92757),
        o = a(52038),
        l = a(61859),
        p = a(95034),
        c = a(1990),
        u = a.n(c),
        d = a(32754),
        m = a(51272),
        g = a(76217),
        h = a(6419);
      class S extends s.Component {
        state = { activeTab: "" };
        componentDidMount() {
          this.props.startingTab
            ? this.setState({ activeTab: this.props.startingTab })
            : !this.props.bDisableRouting &&
              this.props.location &&
              this.setState({
                activeTab: (0, p.f3)(this.props.location, "tab"),
              });
        }
        componentDidUpdate(t) {
          !this.props.bDisableRouting &&
            this.props.location &&
            this.props.location.key !== t.location.key &&
            this.setState({ activeTab: (0, p.f3)(this.props.location, "tab") });
        }
        OnTabClick(t) {
          this.setState({ activeTab: t.key }),
            !this.props.bDisableRouting &&
              this.props.history &&
              (0, p.Bm)(this.props.history, "tab", t.key),
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
              g.Z,
              {
                className: (0, o.A)(
                  u().GraphicalAssetsTabs,
                  this.props.classNameCtn,
                ),
              },
              this.props.tabs.map((e) =>
                s.createElement(b, {
                  key: e.key,
                  tab: e,
                  OnTabClick: this.OnTabClick,
                  classNameTab: this.props.classNameTab,
                  active: e.key === t.key,
                }),
              ),
            ),
            s.createElement(
              g.Z,
              null,
              t && s.createElement(g.Z, null, t.contents),
            ),
          );
        }
      }
      function _(t) {
        const { statusType: e = "success", children: a } = t;
        let n = "";
        return (
          "success" === e
            ? (n = u().StatusSuccess)
            : "danger" === e
              ? (n = u().StatusDanger)
              : "caution" === e && (n = u().StatusCaution),
          s.createElement(
            "div",
            { className: (0, o.A)(u().GraphicalAssetStatus, n) },
            a,
          )
        );
      }
      (0, n.Cg)([h.o], S.prototype, "OnTabClick", null);
      const b = (0, i.PA)(function (t) {
          const { tab: e, OnTabClick: a, classNameTab: n, active: i } = t;
          return e.hidden
            ? null
            : s.createElement(
                m.e7,
                {
                  condition: Boolean(e.statusToolTip || e.tooltip),
                  wrap: (t) =>
                    s.createElement(
                      d.he,
                      { toolTipContent: e.statusToolTip || e.tooltip },
                      t,
                    ),
                },
                s.createElement(
                  g.Z,
                  {
                    className: (0, o.A)(
                      u().GraphicalAssetsTab,
                      i && u().Active,
                      i && "ActiveTab",
                      n,
                    ),
                    onActivate: () => a(e),
                  },
                  Boolean(e.vo_warning) &&
                    s.createElement(
                      d.he,
                      { toolTipContent: e.vo_warning },
                      s.createElement(
                        "div",
                        { className: u().VOWarning },
                        (0, l.we)("#EventEditor_VOWarning"),
                      ),
                    ),
                  e.status,
                  e.name,
                ),
              );
        }),
        y = (0, r.y)(S);
    },
    48479: (t, e, a) => {
      "use strict";
      a.d(e, { AQ: () => m, qx: () => g });
      var n = a(71541),
        s = a(61859),
        i = a(12155),
        r = a(90626),
        o = a(52038),
        l = a(95695),
        p = a(84811),
        c = a(64734),
        u = a(65946),
        d = a(26408);
      function m(t) {
        const {
            title: e,
            tooltip: a,
            getMinimized: n,
            toggleMinimized: s,
            className: i,
            children: m,
          } = t,
          g = (0, u.q3)(() => n());
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            {
              className: (0, o.A)(
                i,
                c.SectionTitleHeader,
                c.required_title,
                "SectionTitleHeader",
              ),
            },
            r.createElement(
              "div",
              {
                className: (0, o.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              e,
              Boolean(a) && r.createElement(d.o, { tooltip: a }),
            ),
            r.createElement(h, { bIsMinimized: g, fnToggleMinimize: s }),
          ),
          !g && r.createElement(p.tH, null, m),
        );
      }
      function g(t) {
        const [e, a] = r.useState(Boolean(t.bStartMinimized));
        return r.createElement(
          m,
          { ...t, getMinimized: () => e, toggleMinimized: () => a(!e) },
          t.children,
        );
      }
      function h(t) {
        const { bIsMinimized: e, fnToggleMinimize: a } = t,
          o = e ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return r.createElement(
          n.$n,
          { "data-tooltip-text": (0, s.we)(o), onClick: a },
          t.bIsMinimized
            ? r.createElement(i.hz4, null)
            : r.createElement(i.Xjb, null),
        );
      }
    },
  },
]);
