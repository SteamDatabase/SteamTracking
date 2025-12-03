/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4268],
  {
    58962: (e) => {
      e.exports = {
        BuildNoteCtn: "cZP-58cHflQCLG6CHvwKG",
        SplitPanel: "_2TINcVLR2kmBWAVOOtG0cF",
        DescriptionPanel: "_2N1THxFjyQb75AY6b7SpZX",
        RightPanel: "EN_YgGmWh95hbxn-2pmD5",
        BuildTitle: "_-2I9CETSXyA66SWcV5iEv",
        BuildSubTitle: "_2lG_bxKnQtJIUYWD19KGoy",
        InfoText: "_3-WB4tkYQI0EftRXikEI4t",
        EditTopBar: "bJHHP4182a1PZlP-rurGN",
        LangPicker: "_1P7AcuhlijPijxLhFPngFp",
        EditTitle: "_2o-fIjMrt8xP5BFnQuwu_p",
        SubmitButtonCtn: "Vj8rXBuNz4JT-2Y8QgK36",
        BBCodeEditor: "_2gIbttbPBWi6pXxhPzfmD5",
        ErrorMsg: "_2yUUHPTbyDbnoX2gCflGh-",
        SteamChinaMsg: "_3EFpCoez_gInT6uBoW-MLR",
        PreviewHeader: "_3GODeMU9hr5NrqreP7TL3E",
        SubmitPanel: "_2WB1wNg29mL3fTTeWX9HJU",
        SubmitThrobber: "_2rWSmSZSQLbv7D2bBBc6PO",
        SuccessPanel: "_3jQwVKtYzS0V9pBPwJTUW6",
        ViewEventButton: "_3zUBg8T8MJnKb-eS1s3sK6",
        FailedPanel: "_1H8COg73O0FBzdyTrSg2pu",
        FailedText: "pu4VYcHm6vt6RCeDA73L0",
        FailedButton: "soZLp0uToUv-yRJFwckG9",
      };
    },
    76483: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => k });
      var n = a(41735),
        i = a.n(n),
        l = a(90626),
        r = a(22837),
        s = a(37085),
        o = a(2160),
        c = a(4807),
        d = a(17720),
        u = a(68033),
        m = a(6205),
        g = a(16676),
        _ = a(84811),
        h = a(63232),
        S = a(1909),
        p = a(25228),
        E = a(9154),
        B = a(738),
        f = a(22797),
        P = a(62490),
        w = a(52038),
        N = a(61859),
        v = a(87669),
        T = a(68797),
        b = a(78327),
        L = a(58962);
      function C(e, t, a) {
        const n = e && e.length > a ? [...e] : (0, P.$Y)(e || [], a + 1, "");
        return (n[a] = t), n;
      }
      function D(e, t) {
        return (e && e.length > t && e[t]) || "";
      }
      function G(e, t) {
        let a = !1,
          n = !1;
        for (let i = r.gS.k_Lang_English; i < r.gS.k_Lang_MAX; i++) {
          const l = D(e, i).trim(),
            s = D(t, i).trim();
          if (!l && !s) continue;
          const o = (0, N.we)("#Language_" + (0, r.Lg)(i));
          if (((a = !0), !l))
            return (0, N.we)("#BuildNotes_Error_MissingTitle", o);
          if (!s) return (0, N.we)("#BuildNotes_Error_MissingDescription", o);
          if (l.length > c.dm)
            return (0, N.we)("#BuildNotes_Error_TitleTooLong", o);
          if (s.length > 32768)
            return (0, N.we)("#BuildNotes_Error_DescriptionTooLong", o);
          i === r.gS.k_Lang_English && (n = !0);
        }
        return a
          ? n
            ? null
            : (0, N.we)("#BuildNotes_Error_NoEnglishProvided")
          : (0, N.we)("#BuildNotes_Error_NoLanguagesProvided");
      }
      class I {
        m_nBuildVersion;
        m_bSteamChina;
        m_strBuildBranch;
        static s_Singleton;
        static Get() {
          return (
            this.s_Singleton ||
              ((this.s_Singleton = new I()), this.s_Singleton.Init()),
            this.s_Singleton
          );
        }
        Init() {
          const e = (0, b.Tc)("build_notes", "application_config");
          (this.m_nBuildVersion = e?.build_version || 0),
            (this.m_bSteamChina = e?.steam_china || !1),
            (this.m_strBuildBranch = e?.build_branch || ""),
            (this.m_strBuildBranch = this.m_strBuildBranch
              .trim()
              .toLocaleLowerCase()),
            "default" === this.m_strBuildBranch && (this.m_strBuildBranch = "");
        }
        GetPostedBuildVersion() {
          return this.m_nBuildVersion;
        }
        BShouldShowPatchNotesEditor() {
          return this.GetPostedBuildVersion() > 0;
        }
        BCanSubmitSteamChinaPatchNotes() {
          return this.m_bSteamChina;
        }
        GetBuildBranch() {
          return this.m_strBuildBranch;
        }
      }
      function k(e) {
        const [t, a] = l.useState(r.gS.k_Lang_English),
          [n, u] = l.useState(null),
          [m, h] = l.useState(null),
          [S, p] = l.useState(null),
          [E, B] = l.useState("editing"),
          [f, P] = l.useState(null);
        if (!I.Get().BShouldShowPatchNotesEditor()) return null;
        const w = (e) => a(e),
          v = (e) => Boolean(D(n, e) || D(m, e)),
          k = I.Get().BCanSubmitSteamChinaPatchNotes()
            ? [o.TU.k_ESteamRealmChina, o.TU.k_ESteamRealmGlobal]
            : [o.TU.k_ESteamRealmGlobal],
          U = G(n, m),
          x =
            b.TS.COMMUNITY_BASE_URL +
            "ogg/" +
            e.appId +
            "/partnerevents/create/";
        return l.createElement(
          _.tH,
          null,
          l.createElement(
            "div",
            { className: L.BuildNoteCtn },
            l.createElement(
              "div",
              { className: L.BuildTitle },
              (0, N.we)(
                "#BuildNotes_Title",
                I.Get().GetPostedBuildVersion(),
                I.Get().GetBuildBranch() || "default",
              ),
            ),
            l.createElement(
              "div",
              { className: L.SplitPanel },
              l.createElement(
                "div",
                { className: L.DescriptionPanel },
                l.createElement(
                  "div",
                  { className: L.BuildSubTitle },
                  (0, N.we)("#BuildNotes_SubTitle"),
                ),
                l.createElement(
                  "div",
                  { className: L.InfoText },
                  (0, N.we)("#BuildNotes_Desc1"),
                ),
                l.createElement(
                  "div",
                  { className: L.InfoText },
                  (0, N.PP)("#BuildNotes_Desc2"),
                ),
                l.createElement(
                  "a",
                  { href: x },
                  l.createElement(
                    g.$n,
                    null,
                    (0, N.we)("#BuildNotes_OpenFullEditor"),
                  ),
                ),
              ),
              "editing" === E &&
                l.createElement(y, {
                  sError: U,
                  eLanguage: t,
                  realms: k,
                  fnHasLanguage: v,
                  fnSetLanguage: w,
                  fnGetTitle: (e) => D(n, e),
                  fnSetTitle: (e, t) => u(C(n, t, e)),
                  fnGetDescription: (e) => D(m, e),
                  fnSetDescription: (e, t) => h(C(m, t, e)),
                  fnOnPreviewEvent: () =>
                    p(
                      (function (e, t) {
                        let a = new c.lh();
                        (a.GID = "PreviewPartnerEventRow_0"),
                          (a.clanSteamID = new d.b(b.iA.steamid)),
                          (a.postTime = Date.now() / 1e3),
                          (a.startTime = Date.now() / 1e3),
                          (a.type = r.Mv.k_ESmallUpdateEvent);
                        for (
                          let n = r.gS.k_Lang_English;
                          n < r.gS.k_Lang_MAX;
                          n++
                        )
                          a.name.set(n, D(e, n)), a.description.set(n, D(t, n));
                        return a;
                      })(n, m),
                    ),
                  fnApplyLoc: (e, t) => {
                    const a = new Array();
                    let i = n,
                      l = m;
                    for (const n of t) {
                      const t = e.GetLocalization("Title", n) || "",
                        r = e.GetLocalization("Description", n) || "";
                      (t || r) && a.push(n),
                        t && (i = C(i, t, n)),
                        r && (l = C(l, r, n));
                    }
                    return u(i), h(l), a;
                  },
                }),
              "submitting" === E && l.createElement(R, null),
              "failed" === E &&
                l.createElement(A, { fnOnReturnToEditor: () => B("editing") }),
              "submitted" === E &&
                l.createElement(M, { appId: e.appId, eventGid: f }),
            ),
          ),
          Boolean(S && "editing" === E) &&
            l.createElement(O, {
              event: S,
              eLanguage: t,
              realms: k,
              fnOnClose: () => p(null),
              fnOnSubmitEvent: async () => {
                p(null), B("submitting");
                const t = await (async function (e, t, a) {
                  if (G(t, a)) return null;
                  const n = Boolean(
                      D(t, r.gS.k_Lang_SteamChina_SChinese).trim(),
                    ),
                    l = new FormData();
                  l.append("sessionid", b.TS.SESSIONID),
                    l.append("appid", "" + e),
                    l.append("post_steam_china", "" + n),
                    l.append("titles", JSON.stringify(t)),
                    l.append("descriptions", JSON.stringify(a)),
                    l.append("build_id", "" + I.Get().GetPostedBuildVersion()),
                    l.append("build_branch", I.Get().GetBuildBranch());
                  const o =
                    b.TS.PARTNER_BASE_URL +
                    "partnerevents/ajaxpublishpatchnotes";
                  try {
                    const e = await i().post(o, l, { withCredentials: !0 });
                    if (e?.data?.success == s.d.k_EResultOK) return e.data;
                    console.error(
                      "buildpatchnotes: OnSubmitCreateEvent error code  " +
                        e?.data?.success +
                        " msg: " +
                        e?.data?.msg,
                    );
                  } catch (e) {
                    const t = (0, T.H)(e);
                    console.error(
                      "buildpatchnotes: OnSubmitCreateEvent " + t.strErrorMsg,
                      t,
                    );
                  }
                  return null;
                })(e.appId, n, m);
                t
                  ? (P(t.clan_event_gid),
                    (function () {
                      const e = new URLSearchParams(window.location.search);
                      e.delete("submittedbuild"), e.delete("buildbranch");
                      const t = e.toString(),
                        a =
                          window.location.origin +
                          window.location.pathname +
                          (t ? "?" + t : "") +
                          window.location.hash;
                      window.history.replaceState({}, "", a);
                    })(),
                    B("submitted"))
                  : B("failed");
              },
              fnHasLanguage: v,
              fnSetLanguage: w,
            }),
        );
      }
      const y = (e) => {
          const {
            sError: t,
            eLanguage: a,
            realms: n,
            fnHasLanguage: i,
            fnSetLanguage: s,
            fnGetTitle: d,
            fnSetTitle: _,
            fnGetDescription: h,
            fnSetDescription: E,
            fnOnPreviewEvent: f,
            fnApplyLoc: P,
          } = e;
          let w = "";
          if (n.includes(o.TU.k_ESteamRealmChina)) {
            const e = "" !== d(r.gS.k_Lang_SteamChina_SChinese).trim();
            w = (0, N.we)(
              e
                ? "#BuildNotes_SteamChina_Provided"
                : "#BuildNotes_SteamChina_NotProvided",
            );
          }
          return l.createElement(
            "div",
            { className: L.RightPanel },
            l.createElement(
              "div",
              { className: L.EditTopBar },
              l.createElement(
                "div",
                { className: L.EditTitle },
                (0, N.we)("#BuildNotes_PatchnotesTitle"),
              ),
              l.createElement(
                "div",
                { className: L.LangPicker },
                l.createElement(
                  g.$n,
                  {
                    onClick: () => {
                      const e = new v.G(),
                        t = (0, N.we)("#BuildNotes_SampleTitle"),
                        a = (0, N.we)("#BuildNotes_SampleDescription");
                      for (
                        let n = r.gS.k_Lang_English;
                        n < r.gS.k_Lang_MAX;
                        n++
                      )
                        e.SetLocalization("Title", n, t),
                          e.SetLocalization("Description", n, a);
                      (0, B.pg)(
                        l.createElement(p.zZ, {
                          sampleLocData: e,
                          sampleFilename: "patchnote_loc_sample",
                          fnOnImportLocData: P,
                        }),
                        window,
                      );
                    },
                  },
                  (0, N.we)("#BuildNotes_ImportLocalization"),
                ),
                l.createElement(S.Ng, {
                  selectedLang: a,
                  fnOnLanguageChanged: s,
                  fnLangHasData: i,
                  realms: n,
                }),
              ),
            ),
            l.createElement(g.pd, {
              value: d(a),
              placeholder: (0, N.we)("#BuildNotes_TitlePlaceholder"),
              onChange: (e) => _(a, e.currentTarget.value),
              maxLength: c.dm,
            }),
            l.createElement(
              "div",
              { className: L.EditTitle },
              (0, N.we)("#BuildNotes_PatchnotesDesc"),
            ),
            l.createElement(m.I, {
              fnGetCurText: () => h(a),
              fnOnTextChange: (e) => E(a, e.currentTarget.value),
              fnSetText: (e) => E(a, e),
              strPlaceholder: (0, N.we)("#BuildNotes_DescPlaceholder"),
              emoticonStore: u.A,
              bSupportHTMLImport: !0,
              showFormatHelp: "PartnerEvents",
              classNameForTextArea: L.BBCodeEditor,
            }),
            l.createElement(
              "div",
              { className: L.SubmitButtonCtn },
              !Boolean(t) &&
                l.createElement(
                  g.jn,
                  { onClick: f },
                  (0, N.we)("#BuildNotes_Preview"),
                ),
              Boolean(t) &&
                l.createElement("div", { className: L.ErrorMsg }, t),
              Boolean(!t && w) &&
                l.createElement("div", { className: L.SteamChinaMsg }, w),
            ),
          );
        },
        O = (e) => {
          const {
            event: t,
            eLanguage: a,
            realms: n,
            fnOnClose: i,
            fnOnSubmitEvent: r,
            fnHasLanguage: s,
            fnSetLanguage: o,
          } = e;
          return l.createElement(
            E.of,
            null,
            l.createElement(
              "div",
              { className: L.PreviewHeader },
              l.createElement(S.Ng, {
                selectedLang: a,
                fnOnLanguageChanged: o,
                fnFilterLanguage: s,
                realms: n,
              }),
              l.createElement(
                "div",
                { className: L.SubmitButtonCtn },
                l.createElement(
                  g.$n,
                  { onClick: i },
                  (0, N.we)("#BuildNotes_Close"),
                ),
                l.createElement(
                  g.jn,
                  { onClick: r },
                  (0, N.we)("#BuildNotes_PostNotes"),
                ),
              ),
            ),
            l.createElement(
              "div",
              null,
              l.createElement(h.H, {
                event: t,
                fnClose: i,
                langOverride: a,
                isPreview: !0,
              }),
            ),
          );
        },
        R = (e) =>
          l.createElement(
            "div",
            { className: (0, w.A)(L.RightPanel, L.SubmitPanel) },
            l.createElement(f.t, { className: L.SubmitThrobber }),
            l.createElement(
              "div",
              { className: L.SubmitText },
              (0, N.we)("#BuildNotes_Submitting"),
            ),
          ),
        A = (e) =>
          l.createElement(
            "div",
            { className: (0, w.A)(L.RightPanel, L.FailedPanel) },
            l.createElement(
              "div",
              { className: L.FailedText },
              (0, N.we)("#BuildNotes_FailedDescription"),
            ),
            l.createElement(
              "div",
              { className: L.FailedButton },
              l.createElement(
                g.$n,
                { onClick: e.fnOnReturnToEditor },
                (0, N.we)("#BuildNotes_ReturnToEditor"),
              ),
            ),
          ),
        M = (e) => {
          const { appId: t, eventGid: a } = e,
            n = `${b.TS.STORE_BASE_URL}news/app/${t}/view/${a}`;
          return l.createElement(
            "div",
            { className: (0, w.A)(L.RightPanel, L.SuccessPanel) },
            l.createElement(
              "div",
              { className: L.SuccessText },
              (0, N.we)("#BuildNotes_Success"),
            ),
            l.createElement(
              "a",
              { href: n, className: L.ViewEventButton },
              l.createElement(
                g.$n,
                null,
                (0, N.we)("#BuildNotes_ViewPublished"),
              ),
            ),
          );
        };
    },
    90197: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { SaleRoutes: () => E, default: () => B });
      var n = a(97058),
        i = a(43527),
        l = a(90626),
        r = a(17083),
        s = a(92757),
        o = a(14932),
        c = a(78327);
      class d {
        static s_PageStore;
        m_mapSalePage = new Map();
        m_rgUnmigratedSalesPage = new Array();
        GetUnmigratedSalesPages() {
          return this.m_rgUnmigratedSalesPage;
        }
        GetAllSalePages() {
          return Array.from(this.m_mapSalePage.values());
        }
        GetPageByID(e) {
          return this.m_mapSalePage.get(e);
        }
        static Get() {
          return (
            d.s_PageStore || ((d.s_PageStore = new d()), d.s_PageStore.Init()),
            d.s_PageStore
          );
        }
        Init() {
          let e = (0, c.Tc)("old_sale_pages", "application_config");
          this.ValidateStoreDefault(e) &&
            e.forEach((e) => {
              this.m_mapSalePage.set(e.pageid, e),
                e.migrated_clan_account_id ||
                  this.m_rgUnmigratedSalesPage.push(e);
            });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) && "string" == typeof t[0].pageid
          );
        }
      }
      var u = a(76684),
        m = a(22797),
        g = a(14446);
      function _(e) {
        return l.createElement(
          "div",
          null,
          l.createElement("h2", null, "Unmigrated Sales Pages"),
          l.createElement("hr", null),
          d
            .Get()
            .GetUnmigratedSalesPages()
            .map((e) =>
              l.createElement(h, { key: e.pageid, pageid: e.pageid }),
            ),
        );
      }
      function h(e) {
        let t = d.Get().GetPageByID(e.pageid);
        return l.createElement(
          "div",
          null,
          l.createElement("div", null, t.pageid),
          l.createElement(
            r.N_,
            { to: E.SaleMigrationPageDebug(t.pageid) },
            "Debug Data",
          ),
        );
      }
      function S(e) {
        const { pageid: t } = e,
          a = d.Get().GetPageByID(t),
          n = (0, g.gS)(a.accountid);
        return n
          ? l.createElement(
              "div",
              null,
              l.createElement(
                r.N_,
                { to: E.SaleMigrationTool() },
                "< Return to Migration Toolset",
              ),
              l.createElement("h2", null, "Debug: ", e.pageid),
              l.createElement("hr", null),
              l.createElement("div", null, "Name: ", a.display_name),
              l.createElement(
                "div",
                null,
                "Creator: ",
                a.accountid,
                " - ",
                n.persona,
              ),
              l.createElement(
                "div",
                null,
                "Last Modified: ",
                a.last_modified,
                Boolean(0 != a.last_modified) &&
                  l.createElement(u.K4, {
                    dateAndTime: a.last_modified,
                    bSingleLine: !0,
                  }),
              ),
              l.createElement("h1", null, "Sale Page Body Raw"),
              l.createElement(o.G, { data: a }),
            )
          : l.createElement(m.t, { string: "Loading User Info" });
      }
      var p = a(34667);
      const E = {
        SaleDashboardView: () => "/(dashboard)?/",
        SaleMigrationTool: () => "/migration/",
        SaleMigrationPageDebug: (e) => `/migration/debug/${e}/`,
      };
      function B(e) {
        return l.createElement(
          r.Kd,
          { basename: (0, i.C)() + "sales/" },
          l.createElement(
            s.dO,
            null,
            l.createElement(s.qh, {
              exact: !0,
              path: i.B.DiagData(),
              render: (e) =>
                l.createElement(o.z, {
                  ...e,
                  strConfigID: "application_config",
                }),
            }),
            l.createElement(s.qh, {
              exact: !0,
              path: E.SaleDashboardView(),
              component: p.h,
            }),
            l.createElement(s.qh, {
              exact: !0,
              path: E.SaleMigrationTool(),
              component: _,
            }),
            l.createElement(s.qh, {
              exact: !0,
              path: E.SaleMigrationPageDebug(":pageid"),
              render: (e) =>
                l.createElement(S, { pageid: e.match.params.pageid }),
            }),
            l.createElement(s.qh, { component: n.a }),
          ),
        );
      }
    },
  },
]);
