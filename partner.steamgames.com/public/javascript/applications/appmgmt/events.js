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
      a.r(t), a.d(t, { default: () => I });
      var n = a(41735),
        i = a.n(n),
        l = a(90626),
        r = a(22837),
        s = a(2160),
        o = a(4807),
        c = a(17720),
        d = a(68033),
        u = a(6205),
        m = a(16676),
        g = a(84811),
        p = a(63232),
        h = a(1909),
        E = a(25228),
        _ = a(9154),
        S = a(738),
        B = a(22797),
        f = a(62490),
        P = a(52038),
        w = a(61859),
        N = a(87669),
        v = a(68797),
        T = a(78327),
        b = a(58962);
      function L(e, t, a) {
        const n = e && e.length > a ? [...e] : (0, f.$Y)(e || [], a + 1, "");
        return (n[a] = t), n;
      }
      function C(e, t) {
        return (e && e.length > t && e[t]) || "";
      }
      function D(e, t) {
        let a = !1,
          n = !1;
        for (let i = 0; i < 31; i++) {
          const l = C(e, i).trim(),
            s = C(t, i).trim();
          if (!l && !s) continue;
          const c = (0, w.we)("#Language_" + (0, r.Lg)(i));
          if (((a = !0), !l))
            return (0, w.we)("#BuildNotes_Error_MissingTitle", c);
          if (!s) return (0, w.we)("#BuildNotes_Error_MissingDescription", c);
          if (l.length > o.dm)
            return (0, w.we)("#BuildNotes_Error_TitleTooLong", c);
          if (s.length > 32768)
            return (0, w.we)("#BuildNotes_Error_DescriptionTooLong", c);
          0 === i && (n = !0);
        }
        return a
          ? n
            ? null
            : (0, w.we)("#BuildNotes_Error_NoEnglishProvided")
          : (0, w.we)("#BuildNotes_Error_NoLanguagesProvided");
      }
      class G {
        m_nBuildVersion;
        m_bSteamChina;
        m_strBuildBranch;
        static s_Singleton;
        static Get() {
          return (
            this.s_Singleton ||
              ((this.s_Singleton = new G()), this.s_Singleton.Init()),
            this.s_Singleton
          );
        }
        Init() {
          const e = (0, T.Tc)("build_notes", "application_config");
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
      function I(e) {
        const [t, a] = l.useState(0),
          [n, r] = l.useState(null),
          [d, u] = l.useState(null),
          [p, h] = l.useState(null),
          [E, _] = l.useState("editing"),
          [S, B] = l.useState(null);
        if (!G.Get().BShouldShowPatchNotesEditor()) return null;
        const f = (e) => a(e),
          P = (e) => Boolean(C(n, e) || C(d, e)),
          N = G.Get().BCanSubmitSteamChinaPatchNotes()
            ? [s.TU.k_ESteamRealmChina, s.TU.k_ESteamRealmGlobal]
            : [s.TU.k_ESteamRealmGlobal],
          I = D(n, d),
          U =
            T.TS.COMMUNITY_BASE_URL +
            "ogg/" +
            e.appId +
            "/partnerevents/create/";
        return l.createElement(
          g.tH,
          null,
          l.createElement(
            "div",
            { className: b.BuildNoteCtn },
            l.createElement(
              "div",
              { className: b.BuildTitle },
              (0, w.we)(
                "#BuildNotes_Title",
                G.Get().GetPostedBuildVersion(),
                G.Get().GetBuildBranch() || "default",
              ),
            ),
            l.createElement(
              "div",
              { className: b.SplitPanel },
              l.createElement(
                "div",
                { className: b.DescriptionPanel },
                l.createElement(
                  "div",
                  { className: b.BuildSubTitle },
                  (0, w.we)("#BuildNotes_SubTitle"),
                ),
                l.createElement(
                  "div",
                  { className: b.InfoText },
                  (0, w.we)("#BuildNotes_Desc1"),
                ),
                l.createElement(
                  "div",
                  { className: b.InfoText },
                  (0, w.PP)("#BuildNotes_Desc2"),
                ),
                l.createElement(
                  "a",
                  { href: U },
                  l.createElement(
                    m.$n,
                    null,
                    (0, w.we)("#BuildNotes_OpenFullEditor"),
                  ),
                ),
              ),
              "editing" === E &&
                l.createElement(y, {
                  sError: I,
                  eLanguage: t,
                  realms: N,
                  fnHasLanguage: P,
                  fnSetLanguage: f,
                  fnGetTitle: (e) => C(n, e),
                  fnSetTitle: (e, t) => r(L(n, t, e)),
                  fnGetDescription: (e) => C(d, e),
                  fnSetDescription: (e, t) => u(L(d, t, e)),
                  fnOnPreviewEvent: () =>
                    h(
                      (function (e, t) {
                        let a = new o.lh();
                        (a.GID = "PreviewPartnerEventRow_0"),
                          (a.clanSteamID = new c.b(T.iA.steamid)),
                          (a.postTime = Date.now() / 1e3),
                          (a.startTime = Date.now() / 1e3),
                          (a.type = 12);
                        for (let n = 0; n < 31; n++)
                          a.name.set(n, C(e, n)), a.description.set(n, C(t, n));
                        return a;
                      })(n, d),
                    ),
                  fnApplyLoc: (e, t) => {
                    const a = new Array();
                    let i = n,
                      l = d;
                    for (const n of t) {
                      const t = e.GetLocalization("Title", n) || "",
                        r = e.GetLocalization("Description", n) || "";
                      (t || r) && a.push(n),
                        t && (i = L(i, t, n)),
                        r && (l = L(l, r, n));
                    }
                    return r(i), u(l), a;
                  },
                }),
              "submitting" === E && l.createElement(R, null),
              "failed" === E &&
                l.createElement(x, { fnOnReturnToEditor: () => _("editing") }),
              "submitted" === E &&
                l.createElement(A, { appId: e.appId, eventGid: S }),
            ),
          ),
          Boolean(p && "editing" === E) &&
            l.createElement(O, {
              event: p,
              eLanguage: t,
              realms: N,
              fnOnClose: () => h(null),
              fnOnSubmitEvent: async () => {
                h(null), _("submitting");
                const t = await (async function (e, t, a) {
                  if (D(t, a)) return null;
                  const n = Boolean(C(t, 29).trim()),
                    l = new FormData();
                  l.append("sessionid", T.TS.SESSIONID),
                    l.append("appid", "" + e),
                    l.append("post_steam_china", "" + n),
                    l.append("titles", JSON.stringify(t)),
                    l.append("descriptions", JSON.stringify(a)),
                    l.append("build_id", "" + G.Get().GetPostedBuildVersion()),
                    l.append("build_branch", G.Get().GetBuildBranch());
                  const r =
                    T.TS.PARTNER_BASE_URL +
                    "partnerevents/ajaxpublishpatchnotes";
                  try {
                    const e = await i().post(r, l, { withCredentials: !0 });
                    if (1 == e?.data?.success) return e.data;
                    console.error(
                      "buildpatchnotes: OnSubmitCreateEvent error code  " +
                        e?.data?.success +
                        " msg: " +
                        e?.data?.msg,
                    );
                  } catch (e) {
                    const t = (0, v.H)(e);
                    console.error(
                      "buildpatchnotes: OnSubmitCreateEvent " + t.strErrorMsg,
                      t,
                    );
                  }
                  return null;
                })(e.appId, n, d);
                t
                  ? (B(t.clan_event_gid),
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
                    _("submitted"))
                  : _("failed");
              },
              fnHasLanguage: P,
              fnSetLanguage: f,
            }),
        );
      }
      const y = (e) => {
          const {
            sError: t,
            eLanguage: a,
            realms: n,
            fnHasLanguage: i,
            fnSetLanguage: r,
            fnGetTitle: c,
            fnSetTitle: g,
            fnGetDescription: p,
            fnSetDescription: _,
            fnOnPreviewEvent: B,
            fnApplyLoc: f,
          } = e;
          let P = "";
          if (n.includes(s.TU.k_ESteamRealmChina)) {
            const e = "" !== c(29).trim();
            P = (0, w.we)(
              e
                ? "#BuildNotes_SteamChina_Provided"
                : "#BuildNotes_SteamChina_NotProvided",
            );
          }
          return l.createElement(
            "div",
            { className: b.RightPanel },
            l.createElement(
              "div",
              { className: b.EditTopBar },
              l.createElement(
                "div",
                { className: b.EditTitle },
                (0, w.we)("#BuildNotes_PatchnotesTitle"),
              ),
              l.createElement(
                "div",
                { className: b.LangPicker },
                l.createElement(
                  m.$n,
                  {
                    onClick: () => {
                      const e = new N.G(),
                        t = (0, w.we)("#BuildNotes_SampleTitle"),
                        a = (0, w.we)("#BuildNotes_SampleDescription");
                      for (let n = 0; n < 31; n++)
                        e.SetLocalization("Title", n, t),
                          e.SetLocalization("Description", n, a);
                      (0, S.pg)(
                        l.createElement(E.zZ, {
                          sampleLocData: e,
                          sampleFilename: "patchnote_loc_sample",
                          fnOnImportLocData: f,
                        }),
                        window,
                      );
                    },
                  },
                  (0, w.we)("#BuildNotes_ImportLocalization"),
                ),
                l.createElement(h.Ng, {
                  selectedLang: a,
                  fnOnLanguageChanged: r,
                  fnLangHasData: i,
                  realms: n,
                }),
              ),
            ),
            l.createElement(m.pd, {
              value: c(a),
              placeholder: (0, w.we)("#BuildNotes_TitlePlaceholder"),
              onChange: (e) => g(a, e.currentTarget.value),
              maxLength: o.dm,
            }),
            l.createElement(
              "div",
              { className: b.EditTitle },
              (0, w.we)("#BuildNotes_PatchnotesDesc"),
            ),
            l.createElement(u.I, {
              fnGetCurText: () => p(a),
              fnOnTextChange: (e) => _(a, e.currentTarget.value),
              fnSetText: (e) => _(a, e),
              strPlaceholder: (0, w.we)("#BuildNotes_DescPlaceholder"),
              emoticonStore: d.A,
              bSupportHTMLImport: !0,
              showFormatHelp: "PartnerEvents",
              classNameForTextArea: b.BBCodeEditor,
            }),
            l.createElement(
              "div",
              { className: b.SubmitButtonCtn },
              !Boolean(t) &&
                l.createElement(
                  m.jn,
                  { onClick: B },
                  (0, w.we)("#BuildNotes_Preview"),
                ),
              Boolean(t) &&
                l.createElement("div", { className: b.ErrorMsg }, t),
              Boolean(!t && P) &&
                l.createElement("div", { className: b.SteamChinaMsg }, P),
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
            _.of,
            null,
            l.createElement(
              "div",
              { className: b.PreviewHeader },
              l.createElement(h.Ng, {
                selectedLang: a,
                fnOnLanguageChanged: o,
                fnFilterLanguage: s,
                realms: n,
              }),
              l.createElement(
                "div",
                { className: b.SubmitButtonCtn },
                l.createElement(
                  m.$n,
                  { onClick: i },
                  (0, w.we)("#BuildNotes_Close"),
                ),
                l.createElement(
                  m.jn,
                  { onClick: r },
                  (0, w.we)("#BuildNotes_PostNotes"),
                ),
              ),
            ),
            l.createElement(
              "div",
              null,
              l.createElement(p.H, {
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
            { className: (0, P.A)(b.RightPanel, b.SubmitPanel) },
            l.createElement(B.t, { className: b.SubmitThrobber }),
            l.createElement(
              "div",
              { className: b.SubmitText },
              (0, w.we)("#BuildNotes_Submitting"),
            ),
          ),
        x = (e) =>
          l.createElement(
            "div",
            { className: (0, P.A)(b.RightPanel, b.FailedPanel) },
            l.createElement(
              "div",
              { className: b.FailedText },
              (0, w.we)("#BuildNotes_FailedDescription"),
            ),
            l.createElement(
              "div",
              { className: b.FailedButton },
              l.createElement(
                m.$n,
                { onClick: e.fnOnReturnToEditor },
                (0, w.we)("#BuildNotes_ReturnToEditor"),
              ),
            ),
          ),
        A = (e) => {
          const { appId: t, eventGid: a } = e,
            n = `${T.TS.STORE_BASE_URL}news/app/${t}/view/${a}`;
          return l.createElement(
            "div",
            { className: (0, P.A)(b.RightPanel, b.SuccessPanel) },
            l.createElement(
              "div",
              { className: b.SuccessText },
              (0, w.we)("#BuildNotes_Success"),
            ),
            l.createElement(
              "a",
              { href: n, className: b.ViewEventButton },
              l.createElement(
                m.$n,
                null,
                (0, w.we)("#BuildNotes_ViewPublished"),
              ),
            ),
          );
        };
    },
    90197: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { SaleRoutes: () => S, default: () => B });
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
      function p(e) {
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
            { to: S.SaleMigrationPageDebug(t.pageid) },
            "Debug Data",
          ),
        );
      }
      function E(e) {
        const { pageid: t } = e,
          a = d.Get().GetPageByID(t),
          n = (0, g.gS)(a.accountid);
        return n
          ? l.createElement(
              "div",
              null,
              l.createElement(
                r.N_,
                { to: S.SaleMigrationTool() },
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
      var _ = a(34667);
      const S = {
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
              path: S.SaleDashboardView(),
              component: _.h,
            }),
            l.createElement(s.qh, {
              exact: !0,
              path: S.SaleMigrationTool(),
              component: p,
            }),
            l.createElement(s.qh, {
              exact: !0,
              path: S.SaleMigrationPageDebug(":pageid"),
              render: (e) =>
                l.createElement(E, { pageid: e.match.params.pageid }),
            }),
            l.createElement(s.qh, { component: n.a }),
          ),
        );
      }
    },
  },
]);
