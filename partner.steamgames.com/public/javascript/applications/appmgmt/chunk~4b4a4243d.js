/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8758],
  {
    19976: (t) => {
      t.exports = {
        DashStatsContainerPlaceholder: "_2BvHwqhjDNBILY7HxYZ5fA",
        DashStatsContainer: "_2pZUWz9doUUVgJTIiA_5qb",
        Chart: "_2z00NeTIYdtaDdJPVZrLm2",
        Stats: "_2jxzC1AyBA_xxpsnV5l1uW",
        StatsTitle: "UzSNxw8oOZZcgW8SXBp54",
        StatSubtitle: "_24k9yBmCwJ4zrfjtg4_A3D",
        Concurrent: "_3W_8ES3hX7fVooWDlaL9Q-",
        Now: "_2QJ6AbiOJ3XddtA1cOYnCp",
        CurrentStats: "_4ImisFVqyptwO9u0G6-0g",
        TooltipPartnerSummary: "_2WuiD5rL3fQXyAI5CXaOiX",
        LineItemsCtn: "_2Vj424_xUjyMnNmBpDenLi",
        ToolTipTable: "_1CBlLckQLSqavhG2S5qNYb",
        ToolTipTableRow: "_1hcQcqAFKPCYQUGtHIcGn4",
        TotalRow: "_1esRSJn8rPckHux_JS4iQg",
        ToolTipTableCell: "iIyyn73ITYmBOzqghT5NY",
        ModuleCtn: "_2jVePp7nya3Nj-SFteMHaj",
        LeftAlign: "mgkgnb7LlDnVJwX6L29YM",
        ModuleTitle: "_1_qWSYHWj0MC9ivPG5LNEJ",
        ViewDetailLink: "_3LC92YRlgqBty5woF3CakT",
        HeaderCtn: "-BcZBPWZjsiRyi3CtgICp",
        StatGroup: "_2H61dmCW7zg12hj9OKWviV",
        Header: "gpt4bNGeQpWFC9R3TR6gU",
        Numerals: "_1aa9BSk_Qolo1ZpNuEGUqD",
      };
    },
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
      ];
    },
    32179: (t, e, a) => {
      "use strict";
      a.d(e, { MY: () => c, UA: () => d, rN: () => g });
      var n = a(34629),
        s = a(41735),
        o = a.n(s),
        r = a(90626),
        i = a(68797),
        l = a(78327),
        p = a(10333);
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
              s = await o().get(a, { params: n });
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
      (0, n.Cg)([p.o], u.prototype, "FindPartnerByName", null);
    },
    27429: (t, e, a) => {
      "use strict";
      function n(t, e) {
        const a = new Date(1e3 * t),
          n = e ? new Date(1e3 * e) : new Date(a);
        e || n.setDate(a.getDate() + 6);
        const s = a.toLocaleString("en-US", { month: "short" }),
          o = a.getDate(),
          r = n.toLocaleString("en-US", { month: "short" }),
          i = n.getDate();
        return s === r ? `${s} ${o} - ${i}` : `${s} ${o} - ${r} ${i}`;
      }
      function s(t) {
        let e = o(t);
        return e.endsWith("M") || e.endsWith("K")
          ? `$${e}`
          : new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(Number(e));
      }
      function o(t) {
        let e;
        return (
          (e =
            Math.abs(t) >= 1e6
              ? (t / 1e6).toFixed(1) + "M"
              : Math.abs(t) >= 1e3
                ? (t / 1e3).toFixed(1) + "K"
                : t.toFixed(2)),
          e
        );
      }
      a.d(e, { E8: () => n, Z2: () => s, ct: () => o });
    },
    4544: (t, e, a) => {
      "use strict";
      a.d(e, { Uh: () => r, VX: () => s, pV: () => o });
      var n = a(22837);
      function s(t, e) {
        const a = (0, n.Lg)(e);
        return t ? t[a] : "";
      }
      function o(t, e, a) {
        const s = (0, n.Lg)(e);
        return t[s] != a && ((t[s] = a), !0);
      }
      function r(t) {
        if (!t) return 0;
        let e = 0;
        for (let a = 0; a < 31; ++a) {
          t[(0, n.Lg)(a)] && (e += 1);
        }
        return e;
      }
    },
    63556: (t, e, a) => {
      "use strict";
      a.d(e, { E: () => u, O: () => c });
      var n = a(34629),
        s = a(14947),
        o = a(65946),
        r = a(22837),
        i = a(62490),
        l = a(10333),
        p = a(78327);
      class c {
        m_eCurLang = (0, r.sf)(p.TS.LANGUAGE);
        m_rgHasData = (0, i.$Y)([], 31, !1);
        m_bHasLocalizationContext = !1;
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(t) {
          return this.m_eCurLang != t && ((this.m_eCurLang = t), !0);
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
            c.s_globalSingletonStore ||
              ((c.s_globalSingletonStore = new c()),
              "dev" == p.TS.WEB_UNIVERSE &&
                (window.DUS = c.s_globalSingletonStore)),
            c.s_globalSingletonStore
          );
        }
        constructor() {
          (0, s.Gn)(this);
        }
      }
      function u() {
        return (0, o.q3)(() => c.Get().GetCurEditLanguage());
      }
      (0, n.Cg)([s.sH], c.prototype, "m_eCurLang", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_rgHasData", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_bHasLocalizationContext", void 0),
        (0, n.Cg)([l.o], c.prototype, "GetCurEditLanguage", null),
        (0, n.Cg)([l.o], c.prototype, "SetCurEditLanguage", null),
        (0, n.Cg)([s.XI.bound], c.prototype, "SetHasLanguage", null),
        (0, n.Cg)([l.o], c.prototype, "BHasLanguageData", null);
    },
    64046: (t, e, a) => {
      "use strict";
      a.d(e, { s: () => i });
      var n = a(34629),
        s = a(90626),
        o = a(43465),
        r = a(56093);
      class i extends s.Component {
        state = { color: this.props.color || "rgba(1.0,1.0,1.0,1.0)" };
        static GetColorString(t) {
          return `rgba(${t.rgb.r}, ${t.rgb.g}, ${t.rgb.b}, ${t.rgb.a})`;
        }
        OnColorChange(t) {
          const e = i.GetColorString(t);
          this.setState({ color: e }), this.props.onChange(e);
        }
        render() {
          return s.createElement(o.xk, {
            onChange: this.OnColorChange,
            color: this.state.color,
          });
        }
      }
      (0, n.Cg)([r.oI], i.prototype, "OnColorChange", null);
    },
    1909: (t, e, a) => {
      "use strict";
      a.d(e, { Ng: () => _, iN: () => b, yk: () => L });
      var n = a(34629),
        s = a(75844),
        o = a(65946),
        r = a(90626),
        i = a(22837),
        l = a(2160),
        p = a(63556),
        c = a(95695),
        u = a.n(c),
        d = a(52038),
        g = a(61859),
        m = a(91675),
        h = a(56093),
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
                (0, g.we)("#language_selection_none"),
              ),
            );
          let o = new Array();
          const p = this.props.realms || [l.TU.k_ESteamRealmGlobal];
          for (const t of g.A0.GetLanguageListForRealms(p)) {
            if (e && !e(t)) continue;
            const a = (0, i.Lg)(t),
              n = (0, g.we)("#Language_" + a),
              r = Boolean(s) && s(t);
            o.push({ eLang: t, sLocName: n, bSupported: r });
          }
          o.sort((t, e) =>
            t.bSupported != e.bSupported
              ? t.bSupported
                ? -1
                : 1
              : t.sLocName.localeCompare(e.sLocName),
          );
          let c = !1;
          for (const e of o) {
            e.bSupported != c &&
              (t.push(
                r.createElement(
                  "option",
                  {
                    key: e.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: u().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, g.we)(
                    e.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (c = e.bSupported));
            const s = a && a(e.eLang),
              o = n && n(e.eLang);
            let i = e.sLocName;
            o &&
              0 !== o &&
              ((i += " "),
              (i += (0, g.we)(
                "#Language_Last_Update",
                (0, g.$z)(o) + " @ " + (0, m.KC)(o, { bForce24HourClock: !1 }),
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
        const [e, a] = (0, o.q3)(() => [
          p.O.Get().GetHasLocalizationContext(),
          p.O.Get().GetCurEditLanguage(),
        ]);
        return r.createElement(_, {
          selectedLang: a,
          fnLangHasData: p.O.Get().BHasLanguageData,
          fnOnLanguageChanged: p.O.Get().SetCurEditLanguage,
          bDisabled: !e,
          strTooltip: e ? void 0 : (0, g.we)("#Localization_EditorNotInFocus"),
        });
      }
      function L(t) {
        const { fnLangHasData: e } = t;
        r.useEffect(
          () => (
            p.O.Get().SetHasLocalizationContext(!0),
            () => p.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const a = (0, o.q3)(() => {
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
      a.d(e, { V: () => m });
      var n = a(90626),
        s = a(92757),
        o = a(52038),
        r = a(61859),
        i = a(95034),
        l = a(1990),
        p = a.n(l),
        c = a(32754),
        u = a(51272),
        d = a(32381);
      class g extends n.Component {
        state = { activeTab: "" };
        componentDidMount() {
          this.props.startingTab
            ? this.setState({ activeTab: this.props.startingTab })
            : !this.props.bDisableRouting &&
              this.props.location &&
              this.setState({
                activeTab: (0, i.f3)(this.props.location, "tab"),
              });
        }
        componentDidUpdate(t) {
          !this.props.bDisableRouting &&
            this.props.location &&
            this.props.location.key !== t.location.key &&
            this.setState({ activeTab: (0, i.f3)(this.props.location, "tab") });
        }
        OnTabClick(t) {
          this.setState({ activeTab: t.key }),
            !this.props.bDisableRouting &&
              this.props.history &&
              (0, i.Bm)(this.props.history, "tab", t.key),
            t.onClick && t.onClick(t);
        }
        render() {
          const t =
            this.props.tabs.find((t) => t.key === this.state.activeTab) ||
            this.props.tabs[0];
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              d.Z,
              {
                className: (0, o.A)(
                  p().GraphicalAssetsTabs,
                  this.props.classNameCtn,
                ),
              },
              this.props.tabs.map((e) => {
                if (!e.hidden) {
                  let a = "";
                  return (
                    "success" === e.statusType
                      ? (a = p().StatusSuccess)
                      : "danger" === e.statusType
                        ? (a = p().StatusDanger)
                        : "caution" === e.statusType && (a = p().StatusCaution),
                    n.createElement(
                      u.e7,
                      {
                        key: e.key,
                        condition: Boolean(e.statusToolTip || e.tooltip),
                        wrap: (t) =>
                          n.createElement(
                            c.he,
                            { toolTipContent: e.statusToolTip || e.tooltip },
                            t,
                          ),
                      },
                      n.createElement(
                        d.Z,
                        {
                          key: e.key,
                          className: (0, o.A)(
                            `${p().GraphicalAssetsTab} ${e.key === t.key ? (0, o.A)(p().Active, "ActiveTab") : ""}`,
                            this.props.classNameTab,
                          ),
                          onActivate: () => this.OnTabClick(e),
                        },
                        Boolean(e.vo_warning) &&
                          n.createElement(
                            c.he,
                            { toolTipContent: e.vo_warning },
                            n.createElement(
                              "div",
                              { className: p().VOWarning },
                              (0, r.we)("#EventEditor_VOWarning"),
                            ),
                          ),
                        Boolean(e.status) &&
                          n.createElement(
                            "div",
                            {
                              className: (0, o.A)(p().GraphicalAssetStatus, a),
                            },
                            e.status,
                          ),
                        e.name,
                      ),
                    )
                  );
                }
                return null;
              }),
            ),
            n.createElement(
              d.Z,
              null,
              t && n.createElement(d.Z, null, t.contents),
            ),
          );
        }
      }
      const m = (0, s.y)(g);
    },
    48479: (t, e, a) => {
      "use strict";
      a.d(e, { AQ: () => g, qx: () => m });
      var n = a(7068),
        s = a(61859),
        o = a(12155),
        r = a(90626),
        i = a(52038),
        l = a(95695),
        p = a(84811),
        c = a(64734),
        u = a(65946),
        d = a(26408);
      function g(t) {
        const {
            title: e,
            tooltip: a,
            getMinimized: n,
            toggleMinimized: s,
            className: o,
            children: g,
          } = t,
          m = (0, u.q3)(() => n());
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            {
              className: (0, i.A)(
                o,
                c.SectionTitleHeader,
                c.required_title,
                "SectionTitleHeader",
              ),
            },
            r.createElement(
              "div",
              {
                className: (0, i.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              e,
              Boolean(a) && r.createElement(d.o, { tooltip: a }),
            ),
            r.createElement(h, { bIsMinimized: m, fnToggleMinimize: s }),
          ),
          !m && r.createElement(p.tH, null, g),
        );
      }
      function m(t) {
        const [e, a] = r.useState(Boolean(t.bStartMinimized));
        return r.createElement(
          g,
          { ...t, getMinimized: () => e, toggleMinimized: () => a(!e) },
          t.children,
        );
      }
      function h(t) {
        const { bIsMinimized: e, fnToggleMinimize: a } = t,
          i = e ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return r.createElement(
          n.$n,
          { "data-tooltip-text": (0, s.we)(i), onClick: a },
          t.bIsMinimized
            ? r.createElement(o.hz4, null)
            : r.createElement(o.Xjb, null),
        );
      }
    },
  },
]);
