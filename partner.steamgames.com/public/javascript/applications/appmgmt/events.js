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
    76483: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => I });
      var i = n(7850),
        a = n(41735),
        s = n.n(a),
        r = n(90626),
        l = n(22837),
        o = n(37085),
        d = n(2160),
        c = n(62641),
        u = n(17720),
        h = n(65606),
        g = n(83309),
        m = n(16676),
        p = n(84811),
        _ = n(80327),
        S = n(1909),
        B = n(25228),
        x = n(9154),
        f = n(738),
        P = n(22797),
        j = n(62490),
        w = n(52038),
        N = n(61859),
        b = n(87669),
        v = n(68797),
        T = n(78327),
        L = n(58962);
      function C(e, t, n) {
        const i = e && e.length > n ? [...e] : (0, j.$Y)(e || [], n + 1, "");
        return (i[n] = t), i;
      }
      function E(e, t) {
        return (e && e.length > t && e[t]) || "";
      }
      function D(e, t) {
        let n = !1,
          i = !1;
        for (let a = l.Bhc; a < l.bP9; a++) {
          const s = E(e, a).trim(),
            r = E(t, a).trim();
          if (!s && !r) continue;
          const o = (0, N.we)("#Language_" + (0, l.LgB)(a));
          if (((n = !0), !s))
            return (0, N.we)("#BuildNotes_Error_MissingTitle", o);
          if (!r) return (0, N.we)("#BuildNotes_Error_MissingDescription", o);
          if (s.length > c.dm)
            return (0, N.we)("#BuildNotes_Error_TitleTooLong", o);
          if (r.length > 32768)
            return (0, N.we)("#BuildNotes_Error_DescriptionTooLong", o);
          a === l.Bhc && (i = !0);
        }
        return n
          ? i
            ? null
            : (0, N.we)("#BuildNotes_Error_NoEnglishProvided")
          : (0, N.we)("#BuildNotes_Error_NoLanguagesProvided");
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
        const [t, n] = r.useState(l.Bhc),
          [a, h] = r.useState(null),
          [g, _] = r.useState(null),
          [S, B] = r.useState(null),
          [x, f] = r.useState("editing"),
          [P, j] = r.useState(null);
        if (!G.Get().BShouldShowPatchNotesEditor()) return null;
        const w = (e) => n(e),
          b = (e) => Boolean(E(a, e) || E(g, e)),
          I = G.Get().BCanSubmitSteamChinaPatchNotes()
            ? [d.TU.k_ESteamRealmChina, d.TU.k_ESteamRealmGlobal]
            : [d.TU.k_ESteamRealmGlobal],
          M = D(a, g),
          F =
            T.TS.COMMUNITY_BASE_URL +
            "ogg/" +
            e.appId +
            "/partnerevents/create/";
        return (0, i.jsxs)(p.tH, {
          children: [
            (0, i.jsxs)("div", {
              className: L.BuildNoteCtn,
              children: [
                (0, i.jsx)("div", {
                  className: L.BuildTitle,
                  children: (0, N.we)(
                    "#BuildNotes_Title",
                    G.Get().GetPostedBuildVersion(),
                    G.Get().GetBuildBranch() || "default",
                  ),
                }),
                (0, i.jsxs)("div", {
                  className: L.SplitPanel,
                  children: [
                    (0, i.jsxs)("div", {
                      className: L.DescriptionPanel,
                      children: [
                        (0, i.jsx)("div", {
                          className: L.BuildSubTitle,
                          children: (0, N.we)("#BuildNotes_SubTitle"),
                        }),
                        (0, i.jsx)("div", {
                          className: L.InfoText,
                          children: (0, N.we)("#BuildNotes_Desc1"),
                        }),
                        (0, i.jsx)("div", {
                          className: L.InfoText,
                          children: (0, N.PP)("#BuildNotes_Desc2"),
                        }),
                        (0, i.jsx)("a", {
                          href: F,
                          children: (0, i.jsx)(m.$n, {
                            children: (0, N.we)("#BuildNotes_OpenFullEditor"),
                          }),
                        }),
                      ],
                    }),
                    "editing" === x &&
                      (0, i.jsx)(R, {
                        sError: M,
                        eLanguage: t,
                        realms: I,
                        fnHasLanguage: b,
                        fnSetLanguage: w,
                        fnGetTitle: (e) => E(a, e),
                        fnSetTitle: (e, t) => h(C(a, t, e)),
                        fnGetDescription: (e) => E(g, e),
                        fnSetDescription: (e, t) => _(C(g, t, e)),
                        fnOnPreviewEvent: () =>
                          B(
                            (function (e, t) {
                              let n = new c.lh();
                              (n.GID = "PreviewPartnerEventRow_0"),
                                (n.clanSteamID = new u.b(T.iA.steamid)),
                                (n.postTime = Date.now() / 1e3),
                                (n.startTime = Date.now() / 1e3),
                                (n.createTime = Date.now() / 1e3),
                                (n.type = l.Fwr);
                              for (let i = l.Bhc; i < l.bP9; i++)
                                n.name.set(i, E(e, i)),
                                  n.description.set(i, E(t, i));
                              return n;
                            })(a, g),
                          ),
                        fnApplyLoc: (e, t) => {
                          const n = new Array();
                          let i = a,
                            s = g;
                          for (const a of t) {
                            const t = e.GetLocalization("Title", a) || "",
                              r = e.GetLocalization("Description", a) || "";
                            (t || r) && n.push(a),
                              t && (i = C(i, t, a)),
                              r && (s = C(s, r, a));
                          }
                          return h(i), _(s), n;
                        },
                      }),
                    "submitting" === x && (0, i.jsx)(O, {}),
                    "failed" === x &&
                      (0, i.jsx)(U, { fnOnReturnToEditor: () => f("editing") }),
                    "submitted" === x &&
                      (0, i.jsx)(A, { appId: e.appId, eventGid: P }),
                  ],
                }),
              ],
            }),
            Boolean(S && "editing" === x) &&
              (0, i.jsx)(y, {
                event: S,
                eLanguage: t,
                realms: I,
                fnOnClose: () => B(null),
                fnOnSubmitEvent: async () => {
                  B(null), f("submitting");
                  const t = await (async function (e, t, n) {
                    if (D(t, n)) return null;
                    const i = Boolean(E(t, l.ZLm).trim()),
                      a = new FormData();
                    a.append("sessionid", (0, T.KC)()),
                      a.append("appid", "" + e),
                      a.append("post_steam_china", "" + i),
                      a.append("titles", JSON.stringify(t)),
                      a.append("descriptions", JSON.stringify(n)),
                      a.append(
                        "build_id",
                        "" + G.Get().GetPostedBuildVersion(),
                      ),
                      a.append("build_branch", G.Get().GetBuildBranch());
                    const r =
                      T.TS.PARTNER_BASE_URL +
                      "partnerevents/ajaxpublishpatchnotes";
                    try {
                      const e = await s().post(r, a, { withCredentials: !0 });
                      if (e?.data?.success == o.R) return e.data;
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
                  })(e.appId, a, g);
                  t
                    ? (j(t.clan_event_gid),
                      (function () {
                        const e = new URLSearchParams(window.location.search);
                        e.delete("submittedbuild"), e.delete("buildbranch");
                        const t = e.toString(),
                          n =
                            window.location.origin +
                            window.location.pathname +
                            (t ? "?" + t : "") +
                            window.location.hash;
                        window.history.replaceState({}, "", n);
                      })(),
                      f("submitted"))
                    : f("failed");
                },
                fnHasLanguage: b,
                fnSetLanguage: w,
              }),
          ],
        });
      }
      const R = (e) => {
          const {
              sError: t,
              eLanguage: n,
              realms: a,
              fnHasLanguage: s,
              fnSetLanguage: r,
              fnGetTitle: o,
              fnSetTitle: u,
              fnGetDescription: p,
              fnSetDescription: _,
              fnOnPreviewEvent: x,
              fnApplyLoc: P,
            } = e,
            j = (0, h.LJ)();
          let w = "";
          if (a.includes(d.TU.k_ESteamRealmChina)) {
            const e = "" !== o(l.ZLm).trim();
            w = (0, N.we)(
              e
                ? "#BuildNotes_SteamChina_Provided"
                : "#BuildNotes_SteamChina_NotProvided",
            );
          }
          return (0, i.jsxs)("div", {
            className: L.RightPanel,
            children: [
              (0, i.jsxs)("div", {
                className: L.EditTopBar,
                children: [
                  (0, i.jsx)("div", {
                    className: L.EditTitle,
                    children: (0, N.we)("#BuildNotes_PatchnotesTitle"),
                  }),
                  (0, i.jsxs)("div", {
                    className: L.LangPicker,
                    children: [
                      (0, i.jsx)(m.$n, {
                        onClick: () => {
                          const e = new b.G(),
                            t = (0, N.we)("#BuildNotes_SampleTitle"),
                            n = (0, N.we)("#BuildNotes_SampleDescription");
                          for (let i = l.Bhc; i < l.bP9; i++)
                            e.SetLocalization("Title", i, t),
                              e.SetLocalization("Description", i, n);
                          (0, f.pg)(
                            (0, i.jsx)(B.zZ, {
                              sampleLocData: e,
                              sampleFilename: "patchnote_loc_sample",
                              fnOnImportLocData: P,
                            }),
                            window,
                          );
                        },
                        children: (0, N.we)("#BuildNotes_ImportLocalization"),
                      }),
                      (0, i.jsx)(S.Ng, {
                        selectedLang: n,
                        fnOnLanguageChanged: r,
                        fnLangHasData: s,
                        realms: a,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(m.pd, {
                value: o(n),
                placeholder: (0, N.we)("#BuildNotes_TitlePlaceholder"),
                onChange: (e) => u(n, e.currentTarget.value),
                maxLength: c.dm,
              }),
              (0, i.jsx)("div", {
                className: L.EditTitle,
                children: (0, N.we)("#BuildNotes_PatchnotesDesc"),
              }),
              (0, i.jsx)(g.I, {
                fnGetCurText: () => p(n),
                fnOnTextChange: (e) => _(n, e.currentTarget.value),
                fnSetText: (e) => _(n, e),
                strPlaceholder: (0, N.we)("#BuildNotes_DescPlaceholder"),
                emoticonStore: j,
                bSupportHTMLImport: !0,
                showFormatHelp: "PartnerEvents",
                classNameForTextArea: L.BBCodeEditor,
              }),
              (0, i.jsxs)("div", {
                className: L.SubmitButtonCtn,
                children: [
                  !Boolean(t) &&
                    (0, i.jsx)(m.jn, {
                      onClick: x,
                      children: (0, N.we)("#BuildNotes_Preview"),
                    }),
                  Boolean(t) &&
                    (0, i.jsx)("div", { className: L.ErrorMsg, children: t }),
                  Boolean(!t && w) &&
                    (0, i.jsx)("div", {
                      className: L.SteamChinaMsg,
                      children: w,
                    }),
                ],
              }),
            ],
          });
        },
        y = (e) => {
          const {
            event: t,
            eLanguage: n,
            realms: a,
            fnOnClose: s,
            fnOnSubmitEvent: r,
            fnHasLanguage: l,
            fnSetLanguage: o,
          } = e;
          return (0, i.jsxs)(x.of, {
            children: [
              (0, i.jsxs)("div", {
                className: L.PreviewHeader,
                children: [
                  (0, i.jsx)(S.Ng, {
                    selectedLang: n,
                    fnOnLanguageChanged: o,
                    fnFilterLanguage: l,
                    realms: a,
                  }),
                  (0, i.jsxs)("div", {
                    className: L.SubmitButtonCtn,
                    children: [
                      (0, i.jsx)(m.$n, {
                        onClick: s,
                        children: (0, N.we)("#BuildNotes_Close"),
                      }),
                      (0, i.jsx)(m.jn, {
                        onClick: r,
                        children: (0, N.we)("#BuildNotes_PostNotes"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                children: (0, i.jsx)(_.H, {
                  event: t,
                  fnClose: s,
                  langOverride: n,
                  isPreview: !0,
                }),
              }),
            ],
          });
        },
        O = (e) =>
          (0, i.jsxs)("div", {
            className: (0, w.A)(L.RightPanel, L.SubmitPanel),
            children: [
              (0, i.jsx)(P.t, { className: L.SubmitThrobber }),
              (0, i.jsx)("div", {
                className: L.SubmitText,
                children: (0, N.we)("#BuildNotes_Submitting"),
              }),
            ],
          }),
        U = (e) =>
          (0, i.jsxs)("div", {
            className: (0, w.A)(L.RightPanel, L.FailedPanel),
            children: [
              (0, i.jsx)("div", {
                className: L.FailedText,
                children: (0, N.we)("#BuildNotes_FailedDescription"),
              }),
              (0, i.jsx)("div", {
                className: L.FailedButton,
                children: (0, i.jsx)(m.$n, {
                  onClick: e.fnOnReturnToEditor,
                  children: (0, N.we)("#BuildNotes_ReturnToEditor"),
                }),
              }),
            ],
          }),
        A = (e) => {
          const { appId: t, eventGid: n } = e,
            a = `${T.TS.STORE_BASE_URL}news/app/${t}/view/${n}`;
          return (0, i.jsxs)("div", {
            className: (0, w.A)(L.RightPanel, L.SuccessPanel),
            children: [
              (0, i.jsx)("div", {
                className: L.SuccessText,
                children: (0, N.we)("#BuildNotes_Success"),
              }),
              (0, i.jsx)("a", {
                href: a,
                className: L.ViewEventButton,
                children: (0, i.jsx)(m.$n, {
                  children: (0, N.we)("#BuildNotes_ViewPublished"),
                }),
              }),
            ],
          });
        };
    },
    90197: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { SaleRoutes: () => B, default: () => x });
      var i = n(7850),
        a = n(97058),
        s = n(43527),
        r = n(17083),
        l = n(92757),
        o = n(14932),
        d = n(78327);
      class c {
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
            c.s_PageStore || ((c.s_PageStore = new c()), c.s_PageStore.Init()),
            c.s_PageStore
          );
        }
        Init() {
          let e = (0, d.Tc)("old_sale_pages", "application_config");
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
      var u = n(34121),
        h = n(22797),
        g = n(14446);
      function m(e) {
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("h2", { children: "Unmigrated Sales Pages" }),
            (0, i.jsx)("hr", {}),
            c
              .Get()
              .GetUnmigratedSalesPages()
              .map((e) => (0, i.jsx)(p, { pageid: e.pageid }, e.pageid)),
          ],
        });
      }
      function p(e) {
        let t = c.Get().GetPageByID(e.pageid);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("div", { children: t.pageid }),
            (0, i.jsx)(r.N_, {
              to: B.SaleMigrationPageDebug(t.pageid),
              children: "Debug Data",
            }),
          ],
        });
      }
      function _(e) {
        const { pageid: t } = e,
          n = c.Get().GetPageByID(t),
          a = (0, g.gS)(n.accountid);
        return a
          ? (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(r.N_, {
                  to: B.SaleMigrationTool(),
                  children: "< Return to Migration Toolset",
                }),
                (0, i.jsxs)("h2", { children: ["Debug: ", e.pageid] }),
                (0, i.jsx)("hr", {}),
                (0, i.jsxs)("div", { children: ["Name: ", n.display_name] }),
                (0, i.jsxs)("div", {
                  children: ["Creator: ", n.accountid, " - ", a.persona],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    "Last Modified: ",
                    n.last_modified,
                    Boolean(0 != n.last_modified) &&
                      (0, i.jsx)(u.K4, {
                        dateAndTime: n.last_modified,
                        bSingleLine: !0,
                      }),
                  ],
                }),
                (0, i.jsx)("h1", { children: "Sale Page Body Raw" }),
                (0, i.jsx)(o.G, { data: n }),
              ],
            })
          : (0, i.jsx)(h.t, { string: "Loading User Info" });
      }
      var S = n(34667);
      const B = {
        SaleDashboardView: () => "/(dashboard)?/",
        SaleMigrationTool: () => "/migration/",
        SaleMigrationPageDebug: (e) => `/migration/debug/${e}/`,
      };
      function x(e) {
        return (0, i.jsx)(r.Kd, {
          basename: (0, s.C)() + "sales/",
          children: (0, i.jsxs)(l.dO, {
            children: [
              (0, i.jsx)(l.qh, {
                exact: !0,
                path: s.B.DiagData(),
                render: (e) =>
                  (0, i.jsx)(o.z, { ...e, strConfigID: "application_config" }),
              }),
              (0, i.jsx)(l.qh, {
                exact: !0,
                path: B.SaleDashboardView(),
                component: S.h,
              }),
              (0, i.jsx)(l.qh, {
                exact: !0,
                path: B.SaleMigrationTool(),
                component: m,
              }),
              (0, i.jsx)(l.qh, {
                exact: !0,
                path: B.SaleMigrationPageDebug(":pageid"),
                render: (e) => (0, i.jsx)(_, { pageid: e.match.params.pageid }),
              }),
              (0, i.jsx)(l.qh, { component: a.a }),
            ],
          }),
        });
      }
    },
  },
]);
