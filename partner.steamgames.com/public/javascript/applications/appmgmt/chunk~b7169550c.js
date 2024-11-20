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
    32179: (t, e, a) => {
      "use strict";
      a.d(e, {
        MY: () => p,
        UA: () => m,
        Yd: () => h,
        rN: () => d,
        vh: () => g,
      });
      var n = a(34629),
        s = a(41735),
        o = a.n(s),
        r = a(90626),
        i = a(68797),
        l = a(78327),
        c = a(6419);
      function p() {
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
      function g(t) {
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
      function d() {
        return { fnFindPartnerByName: u.Get().FindPartnerByName };
      }
      function h(t) {
        return u.Get().GetPartnerInfo(t);
      }
      (0, n.Cg)([c.o], u.prototype, "FindPartnerByName", null);
    },
    63556: (t, e, a) => {
      "use strict";
      a.d(e, { E: () => g, O: () => u });
      var n = a(34629),
        s = a(14947),
        o = a(65946),
        r = a(22837),
        i = a(62490),
        l = a(6419),
        c = a(78327),
        p = a(91986);
      class u {
        m_eCurLang = (0, r.sf)(c.TS.LANGUAGE);
        m_rgHasData = (0, i.$Y)([], 31, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new p.l();
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
              "dev" == c.TS.WEB_UNIVERSE &&
                (window.DUS = u.s_globalSingletonStore)),
            u.s_globalSingletonStore
          );
        }
        constructor() {
          (0, s.Gn)(this);
        }
      }
      function g() {
        return (0, o.q3)(() => u.Get().GetCurEditLanguage());
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
      a.d(e, { a: () => l, z: () => i });
      var n = a(81393),
        s = a(96059),
        o = a(30470),
        r = a(24484);
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
          const t = (0, r.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, n.w)(Boolean(t), "require promotion_operation_token"),
            (this.m_steamInterface = new s.D(o.TS.WEBAPI_BASE_URL, t));
        }
      }
      function l() {
        return i.Get().GetPromotionTransport().GetServiceTransport();
      }
    },
    1909: (t, e, a) => {
      "use strict";
      a.d(e, { Ng: () => S, iN: () => b, yk: () => f });
      var n = a(34629),
        s = a(75844),
        o = a(65946),
        r = a(90626),
        i = a(22837),
        l = a(2160),
        c = a(63556),
        p = a(95695),
        u = a.n(p),
        g = a(52038),
        m = a(61859),
        d = a(91675),
        h = a(73745),
        _ = a(32754);
      let S = class extends r.Component {
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
          let o = new Array();
          const c = this.props.realms || [l.TU.k_ESteamRealmGlobal];
          for (const t of m.A0.GetLanguageListForRealms(c)) {
            if (e && !e(t)) continue;
            const a = (0, i.Lg)(t),
              n = (0, m.we)("#Language_" + a),
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
          let p = !1;
          for (const e of o) {
            e.bSupported != p &&
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
              (p = e.bSupported));
            const s = a && a(e.eLang),
              o = n && n(e.eLang);
            let i = e.sLocName;
            o &&
              0 !== o &&
              ((i += " "),
              (i += (0, m.we)(
                "#Language_Last_Update",
                (0, m.$z)(o) + " @ " + (0, d.KC)(o, { bForce24HourClock: !1 }),
              ))),
              t.push(
                r.createElement(
                  "option",
                  {
                    key: "langpicker" + e.eLang + (s ? "_hasdata" : ""),
                    value: e.eLang,
                    className: (0, g.A)(
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
            _.he,
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
          c.O.Get().GetHasLocalizationContext(),
          c.O.Get().GetCurEditLanguage(),
        ]);
        return r.createElement(S, {
          selectedLang: a,
          fnLangHasData: c.O.Get().BHasLanguageData,
          fnOnLanguageChanged: c.O.Get().SetCurEditLanguage,
          bDisabled: !e,
          strTooltip: e ? void 0 : (0, m.we)("#Localization_EditorNotInFocus"),
        });
      }
      function f(t) {
        const { fnLangHasData: e } = t;
        r.useEffect(
          () => (
            c.O.Get().SetHasLocalizationContext(!0),
            () => c.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const a = (0, o.q3)(() => {
          const t = [];
          for (let a = 0; a < 31; ++a) t[a] = e && e(a);
          return t;
        });
        return (
          r.useEffect(() => c.O.Get().SetHasLanguage(a), [a]),
          r.createElement(r.Fragment, null)
        );
      }
      (0, n.Cg)([h.oI], S.prototype, "OnLanguageChange", null),
        (S = (0, n.Cg)([s.PA], S));
    },
    38135: (t, e, a) => {
      "use strict";
      a.d(e, { V: () => d });
      var n = a(90626),
        s = a(92757),
        o = a(52038),
        r = a(61859),
        i = a(95034),
        l = a(1990),
        c = a.n(l),
        p = a(32754),
        u = a(51272),
        g = a(76217);
      class m extends n.Component {
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
              g.Z,
              {
                className: (0, o.A)(
                  c().GraphicalAssetsTabs,
                  this.props.classNameCtn,
                ),
              },
              this.props.tabs.map((e) => {
                if (!e.hidden) {
                  let a = "";
                  return (
                    "success" === e.statusType
                      ? (a = c().StatusSuccess)
                      : "danger" === e.statusType
                        ? (a = c().StatusDanger)
                        : "caution" === e.statusType && (a = c().StatusCaution),
                    n.createElement(
                      u.e7,
                      {
                        key: e.key,
                        condition: Boolean(e.statusToolTip || e.tooltip),
                        wrap: (t) =>
                          n.createElement(
                            p.he,
                            { toolTipContent: e.statusToolTip || e.tooltip },
                            t,
                          ),
                      },
                      n.createElement(
                        g.Z,
                        {
                          key: e.key,
                          className: (0, o.A)(
                            `${c().GraphicalAssetsTab} ${e.key === t.key ? ((0, o.A))(c().Active, "ActiveTab") : ""}`,
                            this.props.classNameTab,
                          ),
                          onActivate: () => this.OnTabClick(e),
                        },
                        Boolean(e.vo_warning) &&
                          n.createElement(
                            p.he,
                            { toolTipContent: e.vo_warning },
                            n.createElement(
                              "div",
                              { className: c().VOWarning },
                              (0, r.we)("#EventEditor_VOWarning"),
                            ),
                          ),
                        Boolean(e.status) &&
                          n.createElement(
                            "div",
                            {
                              className: (0, o.A)(c().GraphicalAssetStatus, a),
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
              g.Z,
              null,
              t && n.createElement(g.Z, null, t.contents),
            ),
          );
        }
      }
      const d = (0, s.y)(m);
    },
    48479: (t, e, a) => {
      "use strict";
      a.d(e, { AQ: () => m, qx: () => d });
      var n = a(71541),
        s = a(61859),
        o = a(12155),
        r = a(90626),
        i = a(52038),
        l = a(95695),
        c = a(84811),
        p = a(64734),
        u = a(65946),
        g = a(26408);
      function m(t) {
        const {
            title: e,
            tooltip: a,
            getMinimized: n,
            toggleMinimized: s,
            className: o,
            children: m,
          } = t,
          d = (0, u.q3)(() => n());
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            {
              className: (0, i.A)(
                o,
                p.SectionTitleHeader,
                p.required_title,
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
              Boolean(a) && r.createElement(g.o, { tooltip: a }),
            ),
            r.createElement(h, { bIsMinimized: d, fnToggleMinimize: s }),
          ),
          !d && r.createElement(c.tH, null, m),
        );
      }
      function d(t) {
        const [e, a] = r.useState(Boolean(t.bStartMinimized));
        return r.createElement(
          m,
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
