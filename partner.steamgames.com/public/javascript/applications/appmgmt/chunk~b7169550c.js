/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
    33645: (t) => {
      t.exports = {
        Bold: "_3cln317VYhwhE1fSeMCG48",
        Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
        Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
        Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
        Header2: "_6-VR2WCBCDupCcUN5INQM",
        Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
        Header4: "_3VHY5vmO07MFpoOgTB9eOi",
        Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
        CenterSpan: "zCnp-VELUMybbfxOD-ze9",
        SmallText: "WBzrd438Bd8Z3J-j_iglW",
        Underline: "GrhFWtBdrSZP611s1UqqT",
        Strike: "_3pK7sh9FYdigMXxcUVI4DY",
        Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
        Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
        SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
        DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
        BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
        QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
        PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
        Code: "_2ODaX8lO7DKLKke76c2Wya",
        CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
        List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
        OrderedList: "DojPxwyYpx3hwuPIaJPCq",
        ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
        HR: "-xPK0REpludHjRG8xQfih",
        Table: "_2CAsiFd9UHbUOqzd0e7ioe",
        NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
        TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
        TableData: "_1PCHOM5zSRFfeHzwDmEukB",
        TableHeader: "_1NpENNz7rvObsTC99AQFda",
        EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
        ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
        ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
        EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
        ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
        ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
        LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
        Image: "_3K0NuxYUYncdQ-cNK7udMn",
        PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
        Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
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
    32179: (t, e, a) => {
      "use strict";
      a.d(e, {
        MY: () => p,
        UA: () => m,
        Yd: () => _,
        rN: () => d,
        vh: () => g,
      });
      var n = a(34629),
        r = a(41735),
        o = a.n(r),
        s = a(90626),
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
              r = await o().get(a, { params: n });
            200 == r?.status && 1 == r?.data?.success
              ? r.data.publishers.forEach((t) => {
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
        const [e, a] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
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
        const [e, a] = s.useState(() => u.Get().GetPartnerInfo(t));
        return (
          s.useEffect(() => {
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
      function _(t) {
        return u.Get().GetPartnerInfo(t);
      }
      (0, n.Cg)([c.o], u.prototype, "FindPartnerByName", null);
    },
    63556: (t, e, a) => {
      "use strict";
      a.d(e, { E: () => g, O: () => u });
      var n = a(34629),
        r = a(14947),
        o = a(65946),
        s = a(22837),
        i = a(62490),
        l = a(6419),
        c = a(78327),
        p = a(91986);
      class u {
        m_eCurLang = (0, s.sf)(c.TS.LANGUAGE);
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
          (0, r.Gn)(this);
        }
      }
      function g() {
        return (0, o.q3)(() => u.Get().GetCurEditLanguage());
      }
      (0, n.Cg)([r.sH], u.prototype, "m_eCurLang", void 0),
        (0, n.Cg)([r.sH], u.prototype, "m_rgHasData", void 0),
        (0, n.Cg)([r.sH], u.prototype, "m_bHasLocalizationContext", void 0),
        (0, n.Cg)([l.o], u.prototype, "GetCurEditLanguage", null),
        (0, n.Cg)([l.o], u.prototype, "SetCurEditLanguage", null),
        (0, n.Cg)([r.XI.bound], u.prototype, "SetHasLanguage", null),
        (0, n.Cg)([l.o], u.prototype, "BHasLanguageData", null);
    },
    96001: (t, e, a) => {
      "use strict";
      a.d(e, { a: () => l, z: () => i });
      var n = a(81393),
        r = a(96059),
        o = a(30470),
        s = a(24484);
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
          (0, n.w)(Boolean(t), "require promotion_operation_token"),
            (this.m_steamInterface = new r.D(o.TS.WEBAPI_BASE_URL, t));
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
        r = a(75844),
        o = a(65946),
        s = a(90626),
        i = a(22837),
        l = a(2160),
        c = a(63556),
        p = a(95695),
        u = a.n(p),
        g = a(52038),
        m = a(61859),
        d = a(91675),
        _ = a(375),
        h = a(32754);
      let S = class extends s.Component {
        GenerateLanguageOptions() {
          let t = [];
          const {
            fnFilterLanguage: e,
            fnLangHasData: a,
            fnLastUpdateRTime: n,
            fnIsLangSupported: r,
          } = this.props;
          this.props.bAllowUnsetOption &&
            t.push(
              s.createElement(
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
              s = Boolean(r) && r(t);
            o.push({ eLang: t, sLocName: n, bSupported: s });
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
                s.createElement(
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
            const r = a && a(e.eLang),
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
                s.createElement(
                  "option",
                  {
                    key: "langpicker" + e.eLang + (r ? "_hasdata" : ""),
                    value: e.eLang,
                    className: (0, g.A)(
                      { [u().LanguageWithContent]: r },
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
          return s.createElement(
            h.he,
            { toolTipContent: a },
            s.createElement(
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
        return s.createElement(S, {
          selectedLang: a,
          fnLangHasData: c.O.Get().BHasLanguageData,
          fnOnLanguageChanged: c.O.Get().SetCurEditLanguage,
          bDisabled: !e,
          strTooltip: e ? void 0 : (0, m.we)("#Localization_EditorNotInFocus"),
        });
      }
      function f(t) {
        const { fnLangHasData: e } = t;
        s.useEffect(
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
          s.useEffect(() => c.O.Get().SetHasLanguage(a), [a]),
          s.createElement(s.Fragment, null)
        );
      }
      (0, n.Cg)([_.oI], S.prototype, "OnLanguageChange", null),
        (S = (0, n.Cg)([r.PA], S));
    },
    38135: (t, e, a) => {
      "use strict";
      a.d(e, { V: () => d });
      var n = a(90626),
        r = a(92757),
        o = a(52038),
        s = a(61859),
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
                              (0, s.we)("#EventEditor_VOWarning"),
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
      const d = (0, r.y)(m);
    },
    48479: (t, e, a) => {
      "use strict";
      a.d(e, { AQ: () => m, qx: () => d });
      var n = a(71541),
        r = a(61859),
        o = a(12155),
        s = a(90626),
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
            toggleMinimized: r,
            className: o,
            children: m,
          } = t,
          d = (0, u.q3)(() => n());
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            {
              className: (0, i.A)(
                o,
                p.SectionTitleHeader,
                p.required_title,
                "SectionTitleHeader",
              ),
            },
            s.createElement(
              "div",
              {
                className: (0, i.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              e,
              Boolean(a) && s.createElement(g.o, { tooltip: a }),
            ),
            s.createElement(_, { bIsMinimized: d, fnToggleMinimize: r }),
          ),
          !d && s.createElement(c.tH, null, m),
        );
      }
      function d(t) {
        const [e, a] = s.useState(Boolean(t.bStartMinimized));
        return s.createElement(
          m,
          { ...t, getMinimized: () => e, toggleMinimized: () => a(!e) },
          t.children,
        );
      }
      function _(t) {
        const { bIsMinimized: e, fnToggleMinimize: a } = t,
          i = e ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return s.createElement(
          n.$n,
          { "data-tooltip-text": (0, r.we)(i), onClick: a },
          t.bIsMinimized
            ? s.createElement(o.hz4, null)
            : s.createElement(o.Xjb, null),
        );
      }
    },
  },
]);
