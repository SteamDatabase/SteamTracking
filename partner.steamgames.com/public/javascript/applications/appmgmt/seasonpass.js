/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5139],
  {
    54697: (e) => {
      e.exports = {
        EditorCtn: "_1e7R1v8JgXJX3ldR60tdgy",
        HeaderCtn: "_8kQzgEw9baCkU0Ind_gdU",
        Row: "_3rKNAI3Je6QeUIPturHjCZ",
      };
    },
    45737: (e) => {
      e.exports = {
        AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
        WidePageCtn: "uHgjQHyNygSKukDngfNQO",
        PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
        PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
        Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
        PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
        ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
        ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
        ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
        LeftCol: "_1AqrivbzwCs57BXiugqpeA",
        ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
        ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
        SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
        Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
        ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
        SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
        warning: "_2HiNh3o5cgMEbzFKYBUjAy",
        RightCol: "_3kaQhRnhNh_awrnNX90rui",
        NoSticky: "JQNb8bHftBTAYpCXTx52v",
        SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
        Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
        TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
        DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
        Indent: "_7PV326-4cpZdmTCEdgC2l",
        DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
        FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
        MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
        StatusLineItemCtn: "_2h8s6LCid-ECW3NhDIBaFX",
        StatusIcon: "_3dYtRWTacFdf4BVwqGSgcd",
        StatusIconDone: "_1tiAc3o7NUJsBdgLS6vCl_",
        UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
        UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
        MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
        BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
        UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
        LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
        LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
        UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
        LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
        DeleteAll: "rYuknI3K1VFknv90GNUTc",
        EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
        StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
        HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
        StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
        Stat: "_3OYQbVCq1yBuEx1XcDzG06",
        BigStat: "lYYwDDss378Sm0FKPBxPh",
        IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
      };
    },
    91702: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => G, G: () => N });
      var n = a(90626),
        s = a(44165),
        l = a(45737),
        o = a.n(l),
        r = a(7068),
        i = a(95695),
        c = a.n(i),
        u = a(99637),
        m = a(8905),
        d = a(78395),
        g = a(738),
        p = a(22797),
        _ = a(26408),
        E = a(52038),
        S = a(56011),
        C = a(61859),
        L = a(91675),
        h = a(30470),
        A = a(24484),
        b = a(54697),
        v = a.n(b),
        P = a(1909),
        w = a(2160),
        f = a(22837),
        y = a(4544),
        D = a(63556);
      function I(e) {
        const {
            text: t,
            placeholderToken: a,
            kvName: s,
            onChangeText: l,
            bOnlyDisplay: o,
          } = e,
          r = (0, D.E)(),
          i = C.A0.GetLanguageListForRealms([w.TU.k_ESteamRealmGlobal]),
          c = new Array();
        i.forEach((e) => {
          c.push(
            n.createElement("input", {
              key: s + "_" + e,
              type: "hidden",
              name: `${s}[${(0, f.Lg)(e, "english")}]`,
              value: (0, y.VX)(t, e),
            }),
          );
        });
        const u = (0, y.VX)(t, r) || "";
        return n.createElement(
          "div",
          null,
          o
            ? n.createElement("div", null, u)
            : n.createElement("input", {
                type: "text",
                placeholder: (0, C.we)(a || "#KVInputBox_Default"),
                value: u,
                onChange: (e) => l(e.currentTarget.value, r),
              }),
          c,
        );
      }
      var T = a(66418);
      function G(e) {
        const t = (function () {
          const [e] = (0, n.useState)(() =>
            (0, A.Tc)("season_passid", "application_config"),
          );
          return e;
        })();
        return null == null.version
          ? n.createElement(p.t, {
              string: (0, C.we)("#Loading"),
              size: "medium",
            })
          : n.createElement(
              "div",
              { className: v().EditorCtn },
              n.createElement(H, { seasonPassID: t, fnAppendSeasonPass: null }),
              n.createElement(k, {
                seasonPassID: t,
                seasonPassData: null.oMilestoneTracking,
              }),
            );
      }
      function N(e) {
        const { seasonPassID: t, seasonPassData: a } = e,
          [s, l] = (0, n.useState)(a || { commitments: [] });
        return n.createElement(
          "div",
          { className: v().EditorCtn },
          n.createElement(P.yk, null),
          " ",
          n.createElement(H, {
            seasonPassID: t,
            fnAppendSeasonPass: (e) =>
              l({ ...s, commitments: [...(s.commitments || []), e] }),
          }),
          n.createElement(k, { seasonPassID: t, seasonPassData: s }),
        );
      }
      function k(e) {
        const { seasonPassID: t, seasonPassData: a } = e;
        return n.createElement(
          "div",
          null,
          n.createElement(P.iN, null),
          n.createElement(r.JU, null, (0, C.we)("#SeasonPass_Milestone_table")),
          n.createElement(
            "table",
            null,
            n.createElement(
              "thead",
              null,
              n.createElement(
                "tr",
                null,
                n.createElement(
                  "th",
                  null,
                  (0, C.we)("#SeasonPass_Milestone_col_complete"),
                ),
                n.createElement(
                  "th",
                  null,
                  (0, C.we)("#SeasonPass_Miletone_desc"),
                ),
                n.createElement("th", null, (0, C.we)("#SeasonPass_Delivery")),
                n.createElement(
                  "th",
                  null,
                  (0, C.we)("#SeasonPass_Miletone_Customer_desc"),
                ),
                n.createElement(
                  "th",
                  null,
                  (0, C.we)("#SeasonPass_Miletone_date_display"),
                ),
                n.createElement(
                  "th",
                  null,
                  (0, C.we)("#SeasonPass_Milestone_col_whom"),
                ),
                n.createElement(
                  "th",
                  null,
                  (0, C.we)("#SeasonPass_Milestone_col_lastupdate"),
                ),
                n.createElement("th", null),
              ),
            ),
            n.createElement(
              "tbody",
              null,
              a?.commitments?.map((e, a) =>
                n.createElement(B, {
                  key: "row" + e.milestone_id,
                  seasonPassID: t,
                  inputMilestone: e,
                  index: a,
                }),
              ),
            ),
          ),
        );
      }
      function B(e) {
        const { seasonPassID: t, inputMilestone: a, index: s } = e,
          [l, o] = (0, n.useState)(a);
        return n.createElement(
          "tr",
          null,
          n.createElement("td", null),
          n.createElement(
            "td",
            null,
            l.internal_desc,
            n.createElement("input", {
              type: "hidden",
              name: `app[seasonpass][commitments][${s}][internal_desc]`,
              value: l.internal_desc,
            }),
          ),
          n.createElement(
            "td",
            null,
            (0, C.TW)(l.expected_delivery),
            " @ ",
            (0, L.KC)(l.expected_delivery),
            n.createElement("input", {
              type: "hidden",
              name: `app[seasonpass][commitments][${s}][expected_delivery]`,
              value: l.expected_delivery,
            }),
          ),
          n.createElement(
            "td",
            null,
            n.createElement(I, {
              text: l.localized_title,
              onChangeText: null,
              kvName: `app[seasonpass][commitments][${s}][localized_title]`,
              bOnlyDisplay: !0,
            }),
          ),
          n.createElement("td", null),
          n.createElement(
            "td",
            null,
            n.createElement(m.p, { accountID: l.submit_accountid }),
            n.createElement("input", {
              type: "hidden",
              name: `app[seasonpass][commitments][${s}][submit_accountid]`,
              value: l.submit_accountid,
            }),
          ),
          n.createElement(
            "td",
            null,
            (0, C.TW)(l.submit_time),
            " @ ",
            (0, L.KC)(l.submit_time),
            n.createElement("input", {
              type: "hidden",
              name: `app[seasonpass][commitments][${s}][submit_time]`,
              value: l.submit_time,
            }),
          ),
          n.createElement(
            "td",
            null,
            n.createElement(
              r.$n,
              {
                onClick: (e) =>
                  (0, g.pg)(
                    n.createElement(U, {
                      seasonPassID: t,
                      milestoneID: l.milestone_id,
                      mileStone: l,
                      onSave: o,
                    }),
                    (0, S.uX)(e),
                  ),
              },
              (0, C.we)("#Button_Edit"),
            ),
          ),
        );
      }
      function H(e) {
        const { seasonPassID: t, fnAppendSeasonPass: a } = e;
        return n.createElement(
          "div",
          { className: v().EditorCtn },
          n.createElement(
            "div",
            { className: v().HeaderCtn },
            n.createElement(
              "div",
              { className: o().ColumnCtn },
              n.createElement(
                "div",
                { className: o().LeftCol },
                n.createElement(
                  "div",
                  { className: o().ColHeader },
                  (0, C.we)(
                    "#SeasonPass_Title",
                    t.seasonPassItemName,
                    (0, C.we)(
                      t.dlcAppID ? "#SeasonPass_AppID" : "SeasonPass_PackageID",
                      t.dlcAppID || t.packageID,
                    ),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: o().SectionCtn },
                  (0, C.we)("#SeasonPass_Desc"),
                ),
              ),
              n.createElement(
                "div",
                { className: o().RightCol },
                n.createElement(
                  "div",
                  { className: o().ColHeader },
                  n.createElement(
                    "a",
                    {
                      href: `${h.TS.PARTNER_BASE_URL}doc/features/seasonpass`,
                      className: (0, E.A)(o().Button, c().Button),
                      target: "_blank",
                    },
                    (0, C.we)("#AssetRequest_General_SeeDocs"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: o().SectionCtn },
                  n.createElement(
                    r.jn,
                    {
                      onClick: (e) =>
                        (0, g.pg)(
                          n.createElement(U, { seasonPassID: t, onSave: a }),
                          (0, S.uX)(e),
                        ),
                    },
                    (0, C.we)("#SeasonPass_ItemNew"),
                  ),
                  n.createElement(
                    "div",
                    null,
                    (0, C.we)("#SeasonPass_ItemNew_desc"),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function U(e) {
        const {
            closeModal: t,
            mileStone: a,
            seasonPassID: l,
            milestoneID: o,
            onSave: i,
          } = e,
          c = (0, s.f1)(),
          [m, g] = (0, n.useState)(a?.internal_desc || ""),
          [p, E] = (0, n.useState)(a?.expected_delivery || c + 86400),
          S = (0, C.we)(a ? "#SeasonPass_Update" : "#SeasonPass_Create");
        return n.createElement(
          d.o0,
          {
            strTitle: S,
            strDescription: (0, C.we)("#SeasonPass_Create_desc"),
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            strOKButtonText: (0, C.we)(a ? "#Button_Update" : "#Button_Append"),
            onOK: () =>
              i({
                milestone_id: o,
                internal_desc: m,
                expected_delivery: p,
                submit_time: c,
                submit_accountid: T.i.accountid,
              }),
            bOKDisabled: m.length < 3 || p < c,
            closeModal: t,
          },
          n.createElement(
            r.JU,
            null,
            (0, C.we)("#SeasonPass_Delivery"),
            n.createElement(_.o, {
              tooltip: (0, C.we)("#SeasonPass_Delivery_ttip"),
            }),
          ),
          n.createElement(u.K, {
            nEarliestTime: c,
            fnGetTimeToUpdate: () => p,
            fnSetTimeToUpdate: E,
            fnIsValidDateTime: () => c < p,
          }),
          n.createElement(r.JU, null, (0, C.we)("#SeasonPass_Miletone_desc")),
          n.createElement("textarea", {
            cols: 120,
            rows: 10,
            onChange: (e) => g(e.currentTarget.value),
            value: m,
            autoFocus: !0,
          }),
        );
      }
    },
    68606: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { SeasonPassHubRoutes: () => c, default: () => u });
      var n = a(90626),
        s = a(97058),
        l = a(17083),
        o = a(92757),
        r = a(43527),
        i = a(91702);
      const c = {
        AppSurvey: (e = ":appid") => `/app_survey/${e}`,
        PackageSurvey: (e = ":packageid") => `/package_survey/${e}`,
      };
      function u(e) {
        return n.createElement(
          l.Kd,
          { basename: (0, r.C)() + "seasonpass/" },
          n.createElement(
            o.dO,
            null,
            n.createElement(o.qh, {
              path: c.AppSurvey(),
              render: (e) => n.createElement(i.A, null),
            }),
            n.createElement(o.qh, {
              path: c.PackageSurvey(),
              render: (e) => n.createElement(i.A, null),
            }),
            n.createElement(o.qh, { component: s.a }),
          ),
        );
      }
    },
    66418: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => s, i: () => l });
      var n = a(30470);
      const s = window.Config ?? n.TS,
        l = window.UserConfig ?? n.iA;
    },
    4544: (e, t, a) => {
      "use strict";
      a.d(t, { Uh: () => o, VX: () => s, pV: () => l });
      var n = a(22837);
      function s(e, t) {
        const a = (0, n.Lg)(t);
        return e ? e[a] : "";
      }
      function l(e, t, a) {
        const s = (0, n.Lg)(t);
        return e[s] != a && ((e[s] = a), !0);
      }
      function o(e) {
        if (!e) return 0;
        let t = 0;
        for (let a = 0; a < 31; ++a) {
          e[(0, n.Lg)(a)] && (t += 1);
        }
        return t;
      }
    },
    63556: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => m, O: () => u });
      var n = a(34629),
        s = a(14947),
        l = a(65946),
        o = a(22837),
        r = a(62490),
        i = a(10333),
        c = a(78327);
      class u {
        m_eCurLang = (0, o.sf)(c.TS.LANGUAGE);
        m_rgHasData = (0, r.$Y)([], 31, !1);
        m_bHasLocalizationContext = !1;
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(e) {
          return this.m_eCurLang != e && ((this.m_eCurLang = e), !0);
        }
        SetHasLanguage(e) {
          e.forEach((e, t) => {
            this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
          });
        }
        BHasLanguageData(e) {
          return this.m_rgHasData[e];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(e) {
          e != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = e);
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
      function m() {
        return (0, l.q3)(() => u.Get().GetCurEditLanguage());
      }
      (0, n.Cg)([s.sH], u.prototype, "m_eCurLang", void 0),
        (0, n.Cg)([s.sH], u.prototype, "m_rgHasData", void 0),
        (0, n.Cg)([s.sH], u.prototype, "m_bHasLocalizationContext", void 0),
        (0, n.Cg)([i.o], u.prototype, "GetCurEditLanguage", null),
        (0, n.Cg)([i.o], u.prototype, "SetCurEditLanguage", null),
        (0, n.Cg)([s.XI.bound], u.prototype, "SetHasLanguage", null),
        (0, n.Cg)([i.o], u.prototype, "BHasLanguageData", null);
    },
    1909: (e, t, a) => {
      "use strict";
      a.d(t, { Ng: () => S, iN: () => C, yk: () => L });
      var n = a(34629),
        s = a(75844),
        l = a(65946),
        o = a(90626),
        r = a(22837),
        i = a(2160),
        c = a(63556),
        u = a(95695),
        m = a.n(u),
        d = a(52038),
        g = a(61859),
        p = a(91675),
        _ = a(56093),
        E = a(32754);
      let S = class extends o.Component {
        GenerateLanguageOptions() {
          let e = [];
          const {
            fnFilterLanguage: t,
            fnLangHasData: a,
            fnLastUpdateRTime: n,
            fnIsLangSupported: s,
          } = this.props;
          this.props.bAllowUnsetOption &&
            e.push(
              o.createElement(
                "option",
                { key: "langpicker_unset", value: -1 },
                (0, g.we)("#language_selection_none"),
              ),
            );
          let l = new Array();
          const c = this.props.realms || [i.TU.k_ESteamRealmGlobal];
          for (const e of g.A0.GetLanguageListForRealms(c)) {
            if (t && !t(e)) continue;
            const a = (0, r.Lg)(e),
              n = (0, g.we)("#Language_" + a),
              o = Boolean(s) && s(e);
            l.push({ eLang: e, sLocName: n, bSupported: o });
          }
          l.sort((e, t) =>
            e.bSupported != t.bSupported
              ? e.bSupported
                ? -1
                : 1
              : e.sLocName.localeCompare(t.sLocName),
          );
          let u = !1;
          for (const t of l) {
            t.bSupported != u &&
              (e.push(
                o.createElement(
                  "option",
                  {
                    key: t.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: m().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, g.we)(
                    t.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (u = t.bSupported));
            const s = a && a(t.eLang),
              l = n && n(t.eLang);
            let r = t.sLocName;
            l &&
              0 !== l &&
              ((r += " "),
              (r += (0, g.we)(
                "#Language_Last_Update",
                (0, g.$z)(l) + " @ " + (0, p.KC)(l, { bForce24HourClock: !1 }),
              ))),
              e.push(
                o.createElement(
                  "option",
                  {
                    key: "langpicker" + t.eLang + (s ? "_hasdata" : ""),
                    value: t.eLang,
                    className: (0, d.A)(
                      { [m().LanguageWithContent]: s },
                      t.bSupported
                        ? m().SupportedLanguage
                        : m().UnsupportedLanguage,
                    ),
                  },
                  r,
                ),
              );
          }
          return e;
        }
        OnLanguageChange(e) {
          const { fnOnLanguageChanged: t, selectedLang: a } = this.props;
          let n = Number.parseInt(e.currentTarget.value);
          n != a && t && t(n);
        }
        render() {
          const { selectedLang: e, bDisabled: t, strTooltip: a } = this.props;
          let n = this.GenerateLanguageOptions();
          return o.createElement(
            E.he,
            { toolTipContent: a },
            o.createElement(
              "select",
              { value: e, onChange: this.OnLanguageChange, disabled: t },
              n,
            ),
          );
        }
      };
      function C(e) {
        const [t, a] = (0, l.q3)(() => [
          c.O.Get().GetHasLocalizationContext(),
          c.O.Get().GetCurEditLanguage(),
        ]);
        return o.createElement(S, {
          selectedLang: a,
          fnLangHasData: c.O.Get().BHasLanguageData,
          fnOnLanguageChanged: c.O.Get().SetCurEditLanguage,
          bDisabled: !t,
          strTooltip: t ? void 0 : (0, g.we)("#Localization_EditorNotInFocus"),
        });
      }
      function L(e) {
        const { fnLangHasData: t } = e;
        o.useEffect(
          () => (
            c.O.Get().SetHasLocalizationContext(!0),
            () => c.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const a = (0, l.q3)(() => {
          const e = [];
          for (let a = 0; a < 31; ++a) e[a] = t && t(a);
          return e;
        });
        return (
          o.useEffect(() => c.O.Get().SetHasLanguage(a), [a]),
          o.createElement(o.Fragment, null)
        );
      }
      (0, n.Cg)([_.oI], S.prototype, "OnLanguageChange", null),
        (S = (0, n.Cg)([s.PA], S));
    },
    44894: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
