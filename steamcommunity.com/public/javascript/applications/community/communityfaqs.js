/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [43781],
    {
      56585: (z, je, o) => {
        "use strict";
        o.d(je, {
          IB: () => F,
          IW: () => ue,
          Wj: () => d,
          X0: () => R,
          r$: () => Z,
          yW: () => B,
        });
        var e = o(7850),
          Y = o(72604),
          y = o(35038),
          f = o(88942),
          I = o(61739),
          C = o(68312),
          $ = o(98112),
          ge = o(90626);
        function g(E) {
          const s = (0, C.KV)(),
            oe = (0, f.I)({
              queryKey: E.queryKey,
              queryFn: async () => E.queryFn(s, ...E.args),
            });
          return E.children(oe);
        }
        function d(E, s) {
          const oe = (0, C.KV)();
          return (0, f.I)({
            queryKey: [
              "crowdin_metadata_for_clan_event",
              E.ConvertTo64BitString(),
              s,
            ],
            queryFn: async () => {
              const he = y.w.Init($.$5);
              he.Body().set_steamid(E.ConvertTo64BitString()),
                he.Body().set_itemid(s);
              const v = await $.BE.GetClanEventCrowdInMetadata(oe, he);
              return v.GetEResult() != Y.R ? null : v.Body().toObject();
            },
          });
        }
        async function p(E, s) {
          const oe = y.w.Init($.hA);
          oe.Body().set_steamid(s);
          const he = await $.BE.GetClanCrowdInMetadata(E, oe);
          if (he.GetEResult() === Y.p)
            return {
              crowdin_project_id: null,
              crowdin_directory_id: null,
              push_by_default: !1,
            };
          if (he.GetEResult() !== Y.R) throw he.GetEResult();
          return he.Body().toObject();
        }
        function F(E) {
          const s = (0, C.KV)();
          return (0, f.I)({
            queryKey: ["clan_crowdin_mapping", E],
            queryFn: async () => await p(s, E),
          });
        }
        function R(E) {
          return g({
            queryKey: ["clan_crowdin_mapping", E.clanSteamId],
            queryFn: p,
            args: [E.clanSteamId],
            children: E.children,
          });
        }
        const B = (0, ge.createContext)(null);
        function Z(E) {
          const s = F(E.clanInfo.clanSteamID.ConvertTo64BitString());
          let oe = !1;
          return (
            s.isSuccess && (oe = s.data.push_by_default),
            (0, e.jsx)(B.Provider, {
              value: {
                clanSteamId: E.clanInfo.clanSteamID,
                bPushToCrowdInByDefault: oe,
              },
              children: E.children,
            })
          );
        }
        async function U(E, s, oe, he) {
          const v = y.w.Init($.v7);
          v.Body().set_language(he),
            v.Body().set_steamid(s),
            v.Body().set_itemid(oe);
          const me = await $.BE.FetchTranslationFromCrowdIn(E, v);
          if (me.GetEResult() != Y.R)
            throw new Error(
              `Error from FetchLocalizationForClanEventFromCrowdIn: ${me.GetErrorMessage()} (${me.GetEResult()})`,
            );
          return me.Body().toObject();
        }
        function ue(E, s, oe) {
          const he = (0, C.KV)();
          return (0, I.n)({
            mutationKey: ["fetch_translation_for_clan_event", E, s, oe],
            mutationFn: async function () {
              return await U(he, E, s, oe);
            },
            retry: !1,
          });
        }
      },
      84647: (z, je, o) => {
        "use strict";
        o.r(je), o.d(je, { FAQRoutes: () => ke, default: () => Yt });
        var e = o(7850),
          Y = o(75844),
          y = o(90626),
          f = o(99412),
          I = o(90395),
          C = o(19316),
          $ = o(92757),
          ge = o(17083),
          g = o(3166),
          d = ((i) => (
            (i.k_eView = "view"),
            (i.k_eCommunityView = "communityview"),
            (i.k_eCommunityEdit = "edit"),
            (i.k_eCommunityDashboard = "dashboard"),
            (i.k_eCommunityPreview = "preview"),
            i
          ))(d || {});
        const p = (i) => {
          const { route: a, faqid: r } = i,
            l = F(a, r);
          return i.bForceRedirect
            ? (0, e.jsx)($.rd, { push: !0, to: l })
            : i.bForceAnchor
              ? (0, e.jsx)("a", {
                  href: g.TS.COMMUNITY_BASE_URL.slice(0, -1) + l,
                  className: i.className,
                  children: i.children,
                })
              : (0, e.jsx)(ge.N_, {
                  to: l,
                  className: i.className,
                  children: i.children,
                });
        };
        function F(i, a) {
          let r = "/faqs/" + g.UF.VANITY_ID + "/";
          switch (i) {
            case "view":
            case "communityview":
              r += "view/" + (0, I.Wj)(a);
              break;
            case "edit":
              r += "edit/" + (0, I.Wj)(a);
              break;
            case "dashboard":
              r += "dashboard";
              break;
            case "preview":
              r += "preview/" + (0, I.Wj)(a);
              break;
          }
          return r;
        }
        var R = o(2801),
          B = o(88003),
          Z = o(36118),
          U = o(85599),
          ue = o(71421),
          E = o(36707),
          s = o(18210),
          oe = o(48473),
          he = o(11259),
          v = o.n(he),
          me = o(14947),
          j = o(72604),
          n = o(37739),
          t = o.n(n),
          c = o(76559),
          h = o(95695),
          m = o.n(h),
          x = o(26251),
          N = o(47689),
          V = o(82734),
          ee = o(92264),
          w = o(20398),
          L = o(93084),
          S = o(35098);
        const te = "title",
          Q = "content";
        function O(i, a) {
          let r = new w.G();
          for (let l = f.Bhc; l < f.bP9; ++l)
            (i.BHasSomeTextForLanguage(l) || f.Bhc == a) &&
              (r.SetLocalization(te, l, i.GetDraftTitle(l) ?? ""),
              r.SetLocalization(Q, l, i.GetDraftContent(l) ?? ""));
          return r;
        }
        function b(i, a, r) {
          const l = new Set(),
            u = a.GetSortedTokenList();
          return (
            (0, me.h5)(() => {
              r.forEach((_) => {
                let P = !1;
                u.forEach((A) => {
                  const T = a.GetLocalization(A, _) || "";
                  if (A === te) {
                    const D = i.GetDraftTitle(_);
                    (T || (D && D.length > 0)) &&
                      (i.SetDraftTitle(_, T), (P = !0));
                  }
                  if (A === Q) {
                    const D = i.GetDraftContent(_);
                    (T || (D && D.length > 0)) &&
                      (i.SetDraftContent(_, T), (P = !0));
                  }
                }),
                  l.add(_);
              });
            }),
            Array.from(l)
          );
        }
        const pe = (i) => {
            const { draft: a, eLanguage: r } = i;
            return (0, e.jsxs)("div", {
              className: h.FlexRowContainer,
              children: [
                (0, e.jsx)(we, { draft: a, eLanguage: r }),
                (0, e.jsx)(x.t3, {
                  strToolTip: (0, s.we)("#FAQEditor_Loc_Import_ttip"),
                  strLabel: (0, s.we)("#EventEditor_Loc_Import_Short"),
                  fnOnImportLocData: (l, u) => b(a, l, u),
                }),
              ],
            });
          },
          _e = (i) => {
            const { draft: a } = i;
            return (0, e.jsxs)("div", {
              className: h.FlexRowContainer,
              children: [
                (0, e.jsx)("div", {
                  className: h.EditPreviewButton,
                  onClick: (r) => {
                    (0, B.pg)(
                      (0, e.jsx)(Ee, {
                        direction: "export",
                        draft: a,
                        children: " ",
                      }),
                      (0, V.uX)(r),
                    );
                  },
                  children: (0, s.we)("#EventEditor_Loc_Export_Short"),
                }),
                (0, e.jsx)("div", {
                  className: h.EditPreviewButton,
                  onClick: (r) => {
                    (0, B.pg)(
                      (0, e.jsx)(Ee, {
                        direction: "import",
                        draft: a,
                        children: " ",
                      }),
                      (0, V.uX)(r),
                    );
                  },
                  children: (0, s.we)("#EventEditor_Loc_Import_Short"),
                }),
              ],
            });
          },
          Ee = (i) => {
            const { closeModal: a, direction: r, draft: l } = i,
              [u, _] = y.useState(!1),
              [P, A] = y.useState(new Array()),
              T = u || P.length == 0,
              D = async () => {
                _(!0);
                try {
                  r == "import"
                    ? await I.pN
                        .Get()
                        .ImportNonEnglishDraftsFromCrowdin(l.GetFAQID(), P)
                    : await I.pN
                        .Get()
                        .ExportEnglishDraftToCrowdin(l.GetFAQID());
                } catch (Ae) {
                  console.error(Ae);
                }
                _(!1);
              },
              de = (0, s.we)(
                r == "import"
                  ? "#EventEditor_Loc_CrowdinIntegration_ImportTitle"
                  : "#EventEditor_Loc_CrowdinIntegration_ExportTitle",
              ),
              re = (0, s.we)(
                r == "import"
                  ? "#EventEditor_Loc_Import_Crowdin_Confirm"
                  : "#EventEditor_Loc_Export_Crowdin_Confirm",
              ),
              q =
                r == "import"
                  ? (0, e.jsx)(le, {
                      draft: l,
                      rgAllLanguages: W,
                      rgLanguagesSelected: P,
                      fnSelectLanguages: A,
                    })
                  : null;
            return (0, e.jsx)(R.o0, {
              className: L.LanguageListDialog,
              closeModal: a,
              strTitle: de,
              strDescription: re,
              onOK: D,
              bOKDisabled: u,
              children: u ? (0, e.jsx)(U.t, { position: "center" }) : q,
            });
          },
          we = (i) => {
            const { draft: a, eLanguage: r } = i;
            return (0, e.jsx)(ue.he, {
              toolTipContent: (0, s.we)("#FAQEditor_Loc_Export_ttip"),
              children: (0, e.jsx)("div", {
                className: h.EditPreviewButton,
                onClick: (l) => {
                  (0, B.pg)(
                    (0, e.jsx)(R.o0, {
                      strTitle: (0, s.we)("#EventEditor_Loc_Export"),
                      bAlertDialog: !0,
                      children: (0, e.jsx)(x.Yg, {
                        fnGetLocData: () => O(a, r),
                        bShowXML: !0,
                        bShowCSV: !0,
                        strFileNamePrefix: "faq",
                        lang: r,
                      }),
                    }),
                    (0, V.uX)(l),
                  );
                },
                children: (0, s.we)("#EventEditor_Loc_Export_Short"),
              }),
            });
          },
          M = [
            0, 9, 8, 12, 14, 21, 2, 3, 20, 24, 13, 17, 16, 5, 6, 7, 15, 23, 11,
            4, 19, 25, 18, 1, 10, 28, 26, 22, 27, 29, 30, 31,
          ],
          W = [
            f.Uu1,
            f.NFp,
            f.A4L,
            f.m2$,
            f.iQT,
            f.L3y,
            f.egf,
            f.xcz,
            f.FH6,
            f.dZ5,
            f.K91,
            f.dFE,
            f.OFl,
            f.Pn1,
            f.JBx,
            f._Q1,
            f.QT4,
            f.Lzz,
            f.kG6,
            f.GXE,
            f.HkE,
            f.FHN,
            f.wWt,
            f.$ys,
            f.RhO,
            f.JOj,
            f.kSD,
            f.Ze9,
            f.Vlm,
          ],
          le = (i) => {
            const {
                draft: a,
                rgAllLanguages: r,
                rgLanguagesSelected: l,
                fnSelectLanguages: u,
              } = i,
              _ = (T, D) => {
                const de = l.includes(D);
                if (T && !de) {
                  const re = l.slice();
                  re.push(D), u(re);
                } else if (!T && de) {
                  const re = l.filter((q) => q !== D);
                  u(re);
                }
              },
              P = (T) => {
                u(T ? r.slice() : []);
              },
              A = r
                .sort((T, D) => M[T] - M[D])
                .map((T) =>
                  (0, e.jsx)(
                    k,
                    {
                      draft: a,
                      eLang: T,
                      bInitialState: l.includes(T),
                      fnOnChecked: _,
                    },
                    "langrow" + T + a.GetFAQID(),
                  ),
                );
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: L.ChecklistHeader,
                  children: [
                    (0, e.jsx)("div", {
                      className: L.Language,
                      children: (0, s.we)("#FAQCrowdin_LanguageHeader"),
                    }),
                    (0, e.jsx)("div", {
                      className: L.Timestamp,
                      children: (0, s.we)("#FAQCrowdin_DraftTimestampHeader"),
                    }),
                  ],
                }),
                (0, e.jsx)(C.Yh, {
                  className: L.CheckAll,
                  label: (0, s.we)("#FAQCrowdin_SelectAllCheckboxes"),
                  onChange: P,
                }),
                (0, e.jsx)("div", {
                  className: L.ChecklistRows,
                  children:
                    A ??
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#FAQCrowdin_NoDraftFound"),
                    }),
                }),
              ],
            });
          },
          k = (i) => {
            const { draft: a, eLang: r, bInitialState: l, fnOnChecked: u } = i,
              _ = a.GetLastSavedDraftVersion(r),
              P = _
                ? c.b.InitFromAccountID(Number.parseInt(_.author_account_id))
                : null,
              { data: A } = (0, S.js)(P?.GetAccountID()),
              T = _
                ? (0, s.we)(
                    "#FAQCrowdin_SavedAtTimeByAuthor",
                    (0, s.TW)(_.timestamp) +
                      " @ " +
                      (0, ee.KC)(_.timestamp, { bForce24HourClock: !1 }),
                    A?.m_strPlayerName ?? _.author_account_id,
                  )
                : (0, s.we)("#FAQCrowdin_NoDraftFound"),
              D = (0, e.jsxs)("div", {
                className: L.LanguageCheckboxLabel,
                children: [
                  (0, e.jsx)("div", {
                    className: L.Language,
                    children: (0, s.we)("#Language_" + (0, f.LgB)(r)),
                  }),
                  (0, e.jsx)("div", { className: L.Timestamp, children: T }),
                ],
              });
            return (0, e.jsx)(C.Yh, {
              className: L.LanguageCheckbox,
              label: D,
              checked: l,
              onChange: (de) => u(de, r),
            });
          };
        function ae(i) {
          const [a, r] = (0, I.cf)(),
            [l, u] = y.useState(0),
            [_, P] = y.useState(!1),
            [A, T] = y.useState(!1),
            [D, de] = y.useState(null),
            re = (0, N.m)("CrowdinImportDialog"),
            q = y.useRef([]),
            Ae = async () => {
              P(!0);
              for (let be = 0; be < a.length; be++) {
                u(be);
                const Ge = a[be],
                  Ve = [],
                  Xe = 5;
                for (let Ue = 0; Ue < W.length; Ue += Xe) {
                  const Zt = W.slice(Ue, Ue + Xe);
                  Ve.push(
                    I.pN
                      .Get()
                      .ImportNonEnglishDraftsFromCrowdin(Ge.faq_id, Zt, re),
                  );
                }
                await Promise.all(Ve),
                  I.pN.Get().BHasLiveEnglishVersion(Ge.faq_id)
                    ? ((q.current[be] = I.pN
                        .Get()
                        .GetNonEnglishDraftsToPublish(Ge.faq_id)),
                      console.log(
                        "Going to publish FAQ",
                        Ge.faq_id,
                        q.current[be].map((Ue) => (0, f.LgB)(Ue)),
                      ))
                    : console.log("No live english version for:", Ge.faq_id);
              }
              for (let be = 0; be < q.current.length; be++) {
                const Ge = a[be],
                  Ve = q.current[be];
                if (Ve?.length > 0) {
                  u(be);
                  const Xe = await I.pN
                    .Get()
                    .PublishDraftByLanguage(Ge.faq_id, Ve);
                  if (re.token.reason) return;
                  if (Xe != j.R) {
                    de((0, s.we)("#FAQDashboard_PublishFailed"));
                    return;
                  }
                }
              }
              T(!0), P(!1);
            };
          if (D)
            return (0, e.jsx)(R.o0, {
              strTitle: (0, s.we)("#FAQDashboard_CrowdinToolTitle"),
              strDescription: D,
              bAlertDialog: !0,
              bDestructiveWarning: !0,
              closeModal: i.closeModal,
            });
          if (A)
            return (0, e.jsx)(R.o0, {
              strTitle: (0, s.we)("#FAQDashboard_CrowdinToolTitle"),
              strDescription: (0, s.we)("#FAQDashboard_PublishComplete"),
              bAlertDialog: !0,
              closeModal: i.closeModal,
            });
          const H = (100 * (l + 0.5)) / a.length,
            X = a[l].internal_name;
          return (0, e.jsx)(R.eV, {
            title: (0, s.we)("#FAQDashboard_CrowdinToolTitle"),
            ...i,
            onCancel: () => re.cancel("CrowdinImportDialog cancelled"),
            children: (0, e.jsxs)(C.nB, {
              children: [
                (0, e.jsxs)(C.a3, {
                  children: [
                    (0, s.we)(
                      "#FAQDashboard_CrowdinToolInstructionsWithCount",
                      a.length,
                    ),
                    (0, e.jsx)("div", {
                      className: L.Warning,
                      children: (0, s.we)("#FAQDashboard_CrowdinToolWarning"),
                    }),
                  ],
                }),
                (0, e.jsxs)(C.a3, {
                  children: [
                    (0, e.jsx)(C.$n, {
                      onClick: Ae,
                      disabled: _,
                      children: (0, s.we)("#FAQDashboard_UpdateAllFAQsButton"),
                    }),
                    _ &&
                      (0, e.jsx)(ve, { nProgressPct: H, strCurrentLabel: X }),
                    q.current.length > 0 &&
                      (0, e.jsx)(ie, {
                        rgUpdatedLanguagesForAllFAQs: q.current,
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        function ve(i) {
          const { nProgressPct: a, strCurrentLabel: r } = i;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: L.ImportProgressBar,
                children: (0, e.jsx)("div", {
                  className: L.ProgressMarker,
                  style: { width: a + "%" },
                }),
              }),
              (0, e.jsx)("div", {
                className: L.CurrentFAQ,
                children: (0, s.we)("#FAQDashboard_CrowdinToolProgress", r),
              }),
            ],
          });
        }
        function ie(i) {
          const { rgUpdatedLanguagesForAllFAQs: a } = i,
            [r, l] = (0, I.cf)();
          return (0, e.jsxs)("div", {
            className: L.ImportResults,
            children: [
              (0, e.jsx)("div", {
                className: L.ImportResultLabel,
                children: (0, s.we)("#FAQDashboard_CrowdinToolResultsLabel"),
              }),
              a.map((u, _) => {
                const P = r[_];
                if (u.length == 0) return null;
                const A = u.map((T) => (0, f.wwZ)(T)).join(",");
                return (0, e.jsx)(
                  "div",
                  {
                    children: (0, e.jsxs)("div", {
                      className: L.ImportResult,
                      children: [
                        (0, e.jsx)(ue.he, {
                          toolTipContent: P.internal_name,
                          strTooltipClassname: t().HoverAboveModal,
                          nAllowOffscreenPx: 4e4,
                          className: L.UrlCode,
                          children: P.url_code + ": ",
                        }),
                        (0, e.jsx)(ue.he, {
                          toolTipContent: A,
                          strTooltipClassname: t().HoverAboveModal,
                          nAllowOffscreenPx: 4e4,
                          direction: "left",
                          className: L.LanguageList,
                          children: A,
                        }),
                      ],
                    }),
                  },
                  P.faq_id,
                );
              }),
            ],
          });
        }
        var J = o(18057),
          G = o(55351),
          xe = o.n(G),
          K = o(3063),
          ne = o.n(K);
        const fe = (i) => {
          const { rtTimestamp: a, bShowAsWarning: r } = i;
          if (!a)
            return (0, e.jsx)("div", {
              className: ne().Never,
              children: (0, s.we)("#FAQDashboard_TimeNever"),
            });
          const l = Date.now() / 1e3 - a,
            u = l < 24 * 3600 ? (0, s.Hq)(l, !1, !0) : (0, s.$z)(a);
          return (0, e.jsx)(J.gS, {
            className: r && ne().Warning,
            rtFullDate: a,
            stylesmodule: xe(),
            children: u,
          });
        };
        var Ne = ((i) => (
          (i[(i.k_EFaqID = 0)] = "k_EFaqID"),
          (i[(i.k_EName = 1)] = "k_EName"),
          (i[(i.k_EDraftTimestamp = 2)] = "k_EDraftTimestamp"),
          (i[(i.k_EUpdatedDrafts = 3)] = "k_EUpdatedDrafts"),
          (i[(i.k_EStaleDrafts = 4)] = "k_EStaleDrafts"),
          (i[(i.k_EPublished = 5)] = "k_EPublished"),
          (i[(i.k_ENeedPublish = 6)] = "k_ENeedPublish"),
          (i[(i.k_EGlobalVisible = 7)] = "k_EGlobalVisible"),
          (i[(i.k_ESteamChinaVisible = 8)] = "k_ESteamChinaVisible"),
          i
        ))(Ne || {});
        const Fe = (0, Y.PA)((i) => {
            const [a, r] = (0, I.cf)(),
              [l, u] = y.useState(1),
              P = a
                .map((A) => {
                  const D =
                      A.per_language_info.find((H) => H.language == f.Bhc)
                        ?.last_update_timestamp || 0,
                    de = Array.from(
                      A.per_language_info.filter(
                        (H) =>
                          H.language != f.Bhc && H.last_update_timestamp >= D,
                      ),
                    ).length,
                    re = Array.from(
                      A.per_language_info.filter(
                        (H) => H.last_update_timestamp < D,
                      ),
                    ).length,
                    q = Array.from(
                      A.per_language_info.filter(
                        (H) =>
                          H.last_publish_timestamp >= H.last_update_timestamp,
                      ),
                    ).length,
                    Ae = Array.from(
                      A.per_language_info.filter(
                        (H) =>
                          H.last_publish_timestamp < H.last_update_timestamp,
                      ),
                    ).length;
                  return [
                    A.faq_id,
                    A.internal_name,
                    D,
                    de,
                    re,
                    q,
                    Ae,
                    A.visible_in_global_realm,
                    A.visible_in_china_realm,
                  ];
                })
                .sort((A, T) =>
                  l == 1 ? (0, oe.lY)(A[1], T[1]) : T[l] - A[l],
                );
            return (
              (0, y.useEffect)(() => {
                I.pN.Get().RemoveAllDirtyDrafts();
              }, []),
              (0, e.jsx)("div", {
                className: v().FAQDashboardPage,
                children: (0, e.jsxs)("div", {
                  className: v().FAQDashboard,
                  children: [
                    (0, e.jsx)(Qe, {}),
                    (0, e.jsx)(Te, { eCurrentSortColumn: l, SetSortColumn: u }),
                    a.length == 0 &&
                      (0, e.jsx)("div", {
                        className: v().ErrorMsg,
                        children: (0, s.we)("#FAQDashboard_Empty"),
                      }),
                    P.map((A) => (0, e.jsx)(ze, { rgColumns: A }, A[0])),
                    !r &&
                      (0, e.jsx)(U.t, { position: "center", size: "xlarge" }),
                  ],
                }),
              })
            );
          }),
          Qe = (i) => {
            const a = y.useCallback(
                () =>
                  (0, B.mK)((0, e.jsx)(Le, {}), window, {
                    strTitle: (0, s.we)("#FAQDashboard_CreateFAQButton"),
                  }),
                [],
              ),
              r = y.useCallback(
                () =>
                  (0, B.mK)(
                    (0, e.jsx)(ae, { bDisableBackgroundDismiss: !0 }),
                    window,
                    { strTitle: (0, s.we)("#FAQDashboard_CrowdinToolTitle") },
                  ),
                [],
              );
            return (0, e.jsxs)("div", {
              className: v().DashboardHeader,
              children: [
                (0, e.jsx)("div", {
                  className: v().DashboardHeaderTitle,
                  children: (0, s.we)("#FAQDashboard_Header"),
                }),
                (0, e.jsxs)("div", {
                  className: v().DashboardHeaderButtonCtn,
                  children: [
                    (0, e.jsx)(C.$n, {
                      onClick: r,
                      children: (0, s.we)("#FAQDashboard_CrowdinToolButton"),
                    }),
                    (0, e.jsx)(C.jn, {
                      onClick: a,
                      children: (0, s.we)("#FAQDashboard_CreateFAQButton"),
                    }),
                  ],
                }),
              ],
            });
          },
          Le = (i) => {
            const [a, r] = y.useState("");
            return (0, e.jsxs)(R.o0, {
              onOK: () => {
                I.pN.Get().CreateFAQ(a);
              },
              bOKDisabled: a.length == 0,
              closeModal: i.closeModal,
              className: v().CreateFAQDialog,
              children: [
                (0, e.jsx)(C.Y9, {
                  children: (0, s.we)("#FAQDashboard_CreateFAQButton"),
                }),
                (0, e.jsx)(C.nB, {
                  children: (0, e.jsxs)(C.a3, {
                    children: [
                      (0, s.we)("#FAQDashboard_CreateFAQInstructions"),
                      (0, e.jsx)("input", {
                        type: "text",
                        className: v().NameInput,
                        value: a,
                        placeholder: (0, s.we)("#FAQDashboard_NamePlaceHolder"),
                        onFocus: (u) => u.target.select(),
                        onChange: (u) => r(u.currentTarget.value),
                        maxLength: 120,
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          Te = (i) =>
            (0, e.jsxs)("div", {
              className: v().DashboardListHeaderRow,
              children: [
                (0, e.jsx)(se, {
                  strLabelLocToken: "#FAQDashboard_NameColumn",
                  bIsNameColumn: !0,
                  eThisColumn: 1,
                  ...i,
                }),
                (0, e.jsx)(se, {
                  strLabelLocToken: "#FAQDashboard_DraftTimetampColumn",
                  eThisColumn: 2,
                  ...i,
                }),
                (0, e.jsx)(se, {
                  strLabelLocToken: "#FAQDashboard_UpdatedLanguagesColumn",
                  eThisColumn: 3,
                  ...i,
                }),
                (0, e.jsx)(se, {
                  strLabelLocToken: "#FAQDashboard_StaleLanguagesColumn",
                  eThisColumn: 4,
                  ...i,
                }),
                (0, e.jsx)(se, {
                  strLabelLocToken: "#FAQDashboard_PublishedLanguagesColumn",
                  eThisColumn: 5,
                  ...i,
                }),
                (0, e.jsx)(se, {
                  strLabelLocToken: "#FAQDashboard_NeedPublishColumn",
                  eThisColumn: 6,
                  ...i,
                }),
                (0, e.jsx)(se, {
                  strLabelLocToken: "#FAQDashboard_VisibilityColumn",
                  eThisColumn: 7,
                  ...i,
                }),
                (0, e.jsx)(se, {
                  strLabelLocToken: "#FAQDashboard_SteamChinaVisibilityColumn",
                  eThisColumn: 8,
                  ...i,
                }),
              ],
            }),
          se = (i) => {
            const {
                strLabelLocToken: a,
                bIsNameColumn: r,
                eThisColumn: l,
                eCurrentSortColumn: u,
                SetSortColumn: _,
              } = i,
              P = (0, E.A)(
                v().EntryColumn,
                v().ClickableHeader,
                r ? v().NameCol : v().DataCol,
                u == l && v().Selected,
              );
            return (0, e.jsxs)(ue.he, {
              toolTipContent: (0, s.we)(a + "_ttip"),
              direction: "top",
              className: P,
              onClick: () => _(l),
              children: [
                (0, s.we)(a),
                (0, e.jsx)("div", {
                  className: v().DownArrow,
                  children: (0, e.jsx)(Z.GB9, {}),
                }),
              ],
            });
          },
          Ce = (i) => {
            const { nCount: a, nTotal: r, nGoal: l } = i;
            return (0, e.jsx)("div", {
              className: a == l ? v().GoodCount : v().BadCount,
              children: a + " / " + r,
            });
          },
          Se = (i) => {
            const { bIsVisible: a } = i;
            return (0, e.jsx)("div", {
              className: a ? v().Visible : v().Hidden,
              children: (0, s.we)(
                a ? "#FAQDashboard_Visible" : "#FAQDashboard_Invisible",
              ),
            });
          },
          ze = (i) => {
            const [a, r, l, u, _, P, A, T, D] = i.rgColumns,
              de = P + A,
              re = u + _;
            return (0, e.jsxs)(p, {
              route: d.k_eCommunityEdit,
              faqid: a,
              className: v().DashboardEntry,
              children: [
                (0, e.jsx)("div", {
                  className: (0, E.A)(v().EntryColumn, v().NameCol),
                  children: (0, e.jsx)("div", {
                    className: v().EntryInternalName,
                    children: r,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, E.A)(v().EntryColumn, v().DataCol),
                  children: (0, e.jsx)(fe, { rtTimestamp: l }),
                }),
                (0, e.jsx)("div", {
                  className: (0, E.A)(v().EntryColumn, v().DataCol),
                  children: (0, e.jsx)(Ce, {
                    nCount: u,
                    nTotal: re,
                    nGoal: re,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, E.A)(v().EntryColumn, v().DataCol),
                  children: (0, e.jsx)(Ce, { nCount: _, nTotal: re, nGoal: 0 }),
                }),
                (0, e.jsx)("div", {
                  className: (0, E.A)(v().EntryColumn, v().DataCol),
                  children: (0, e.jsx)(Ce, {
                    nCount: P,
                    nTotal: de,
                    nGoal: de,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, E.A)(v().EntryColumn, v().DataCol),
                  children: (0, e.jsx)(Ce, { nCount: A, nTotal: de, nGoal: 0 }),
                }),
                (0, e.jsx)("div", {
                  className: (0, E.A)(v().EntryColumn, v().DataCol),
                  children: (0, e.jsx)(Se, { bIsVisible: T }),
                }),
                (0, e.jsx)("div", {
                  className: (0, E.A)(v().EntryColumn, v().DataCol),
                  children: (0, e.jsx)(Se, { bIsVisible: D }),
                }),
              ],
            });
          },
          We = (i) => {
            y.useEffect(
              () => (
                (window.onbeforeunload = () =>
                  I.pN
                    .Get()
                    .GetLoadedDraftObjs()
                    ?.filter((u) => u.BNeedsSaving())?.length > 0
                    ? (0, s.we)("#EventEditor_UnsavedChanges")
                    : null),
                () => {
                  window.onbeforeunload = () => {};
                }
              ),
              [],
            );
            const a = (r) =>
              I.pN
                .Get()
                .GetLoadedDraftObjs()
                ?.filter((_) => _.BNeedsSaving())?.length > 0 &&
              (r.pathname == ke.DashboardFAQ(g.UF.VANITY_ID) ||
                r.pathname?.startsWith(
                  ke.ViewFAQ(g.UF.VANITY_ID, "").slice(0, -1),
                ))
                ? (0, s.we)("#EventEditor_UnsavedChanges")
                : !0;
            return (0, e.jsx)($.XG, { message: a });
          };
        var Re = o(89084),
          ye = o(9046),
          Be = o(35524),
          Me = o(50109),
          ct = o(45638),
          Oe = o(25792),
          dt = o(4748),
          ut = o(63280),
          De = o.n(ut),
          He = o(74916),
          Ke = o(34592);
        const ht = (i) => {
            const a = (r) => {
              (0, B.pg)((0, e.jsx)(gt, { draft: i.draft }), (0, V.uX)(r));
            };
            return (0, e.jsx)(ue.he, {
              toolTipContent: (0, s.we)("#FAQEditor_DeleteAction_ttip"),
              children: (0, e.jsx)("div", {
                className: (0, E.A)(h.EditPreviewButton, h.Delete),
                onClick: a,
                children: (0, s.we)("#FAQEditor_DeleteAction"),
              }),
            });
          },
          gt = (i) => {
            const { draft: a } = i,
              r = () => i.closeModal && i.closeModal(),
              [l, u] = y.useState(!1),
              [_, P] = y.useState(void 0);
            let A = (0, e.jsx)("div", {
              children: (0, s.we)("#FAQEditor_DeleteDesc"),
            });
            return (
              l
                ? (A = (0, e.jsx)(U.t, {
                    position: "center",
                    size: "medium",
                    string: (0, s.we)("#FAQEditor_DeletingInProgress"),
                  }))
                : _ &&
                  (A = (0, e.jsx)("div", {
                    children: (0, s.we)(
                      "Error_Description",
                      _,
                      (0, s.we)("#Error_GenericFailureDescription"),
                    ),
                  })),
              (0, e.jsx)(Oe.tH, {
                children: (0, e.jsx)(R.x_, {
                  onEscKeypress: r,
                  children: (0, e.jsxs)(C.UC, {
                    children: [
                      (0, e.jsx)(C.Y9, {
                        children: (0, s.we)("#FAQEditor_DeleteAction"),
                      }),
                      (0, e.jsx)(C.nB, {
                        children: (0, e.jsx)(C.a3, { children: A }),
                      }),
                      (0, e.jsx)(C.wi, {
                        children: (0, e.jsx)(C.CB, {
                          onCancel: r,
                          bOKDisabled: !!(l || _),
                          strOKText: (0, s.we)("#FAQEditor_DeleteAction"),
                          strCancelText:
                            l || _ ? (0, s.we)("#Button_OK") : void 0,
                          onOK: async () => {
                            u(!0),
                              I.pN
                                .Get()
                                .DeleteFAQ(a.GetFAQID())
                                .then((T) => {
                                  if (T == j.R) {
                                    const D =
                                      g.TS.COMMUNITY_BASE_URL.substr(
                                        0,
                                        g.TS.COMMUNITY_BASE_URL.length - 1,
                                      ) + F(d.k_eCommunityDashboard);
                                    window.location.href = D;
                                  }
                                  P(T);
                                })
                                .catch((T) => {
                                  const D = (0, Ke.H)(T);
                                  console.error(
                                    "FAQDeleteDialog: hit error: " +
                                      D.strErrorMsg,
                                    D,
                                  ),
                                    P(j.zi);
                                })
                                .finally(() => u(!1));
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          },
          mt = (0, Y.PA)((i) => {
            const { draft: a, bDisabled: r } = i,
              l = a.BNeedsSaving(),
              u = (_) => {
                r ||
                  (0, B.pg)(
                    l
                      ? (0, e.jsx)(R.KG, {
                          strDescription: (0, s.we)(
                            "#FAQPublish_SaveRequire_ttip",
                          ),
                        })
                      : (0, e.jsx)(ft, { draft: i.draft }),
                    (0, V.uX)(_),
                  );
              };
            return (0, e.jsx)(ue.he, {
              toolTipContent: (0, s.we)(
                l ? "#FAQPublish_SaveRequire_ttip" : "#FAQPublish_Publish_ttip",
              ),
              children: (0, e.jsx)("div", {
                className: (0, E.A)(h.EditPreviewButton, r && h.Disabled),
                onClick: u,
                children: (0, s.we)("#FAQPublish_Publish"),
              }),
            });
          }),
          ft = (i) => {
            const { draft: a } = i,
              r = () => i.closeModal && i.closeModal(),
              [l, u] = y.useState(!1),
              [_, P] = y.useState(void 0),
              [A, T] = y.useState(void 0),
              [D, de] = (0, I.g5)(a.GetFAQID()),
              [re, q] = y.useState(new Array());
            let Ae = null;
            if (!de)
              Ae = (0, e.jsx)(U.t, {
                size: "small",
                position: "center",
                string: (0, s.we)("#FAQPublish_PublishWait"),
              });
            else if (l)
              Ae = (0, e.jsx)(U.t, {
                position: "center",
                size: "medium",
                string: (0, s.we)("#FAQPublish_Publishing"),
              });
            else if (_)
              Ae = (0, e.jsx)("div", {
                children: (0, s.we)("#FAQPublish_Success"),
              });
            else if (A)
              Ae = (0, e.jsx)("div", {
                children: (0, s.we)(
                  "#Error_Description",
                  A,
                  (0, s.we)("#Error_GenericFailureDescription"),
                ),
              });
            else if (!D)
              Ae = (0, e.jsx)("div", {
                children: (0, s.we)("#FAQPublish_LoadError"),
              });
            else {
              const H = D.per_language_info
                ?.filter(
                  (X) => X.last_publish_timestamp < X.last_update_timestamp,
                )
                .map((X) => X.language);
              Ae = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    children: (0, s.we)("#FAQPublish_Desc"),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("div", {
                    children: (0, s.we)("#FAQPublish_Desc2"),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(le, {
                    draft: a,
                    rgAllLanguages: H,
                    rgLanguagesSelected: re,
                    fnSelectLanguages: q,
                  }),
                ],
              });
            }
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsx)(R.x_, {
                onEscKeypress: r,
                children: (0, e.jsxs)(C.UC, {
                  className: L.LanguageListDialog,
                  children: [
                    (0, e.jsx)(C.Y9, {
                      children: (0, s.we)("#FAQPublish_Publish"),
                    }),
                    (0, e.jsx)(C.nB, {
                      children: (0, e.jsx)(C.a3, { children: Ae }),
                    }),
                    (0, e.jsx)(C.wi, {
                      children: (0, e.jsx)(C.CB, {
                        onCancel: r,
                        bOKDisabled: !!(l || _ || A || re.length == 0),
                        strOKText: (0, s.we)("#FAQPublish_Publish"),
                        strCancelText:
                          l || _ || A ? (0, s.we)("#Button_OK") : void 0,
                        onOK: async () => {
                          u(!0),
                            I.pN
                              .Get()
                              .PublishDraftByLanguage(a.GetFAQID(), re)
                              .then((H) => {
                                H == j.R && P(!0), T(H);
                              })
                              .catch((H) => {
                                const X = (0, Ke.H)(H);
                                console.error(
                                  "FAQPublishDialog: hit error: " +
                                    X.strErrorMsg,
                                  X,
                                ),
                                  T(j.zi);
                              })
                              .finally(() => u(!1));
                        },
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          _t = (i) => {
            const a = (r) => {
              (0, B.pg)((0, e.jsx)(pt, { draft: i.draft }), (0, V.uX)(r));
            };
            return (0, e.jsx)(ue.he, {
              toolTipContent: (0, s.we)("#FAQEditor_ChangeVisible_ttip"),
              children: (0, e.jsx)("div", {
                className: h.EditPreviewButton,
                onClick: a,
                children: (0, s.we)("#FAQEditor_EditVisible"),
              }),
            });
          },
          pt = (i) => {
            const { draft: a } = i,
              r = () => i.closeModal && i.closeModal(),
              [l, u] = y.useState(!1),
              [_, P] = y.useState(void 0),
              [A, T] = y.useState(void 0),
              D = I.pN.Get().GetFAQArticleSummary(a.GetFAQID()),
              [de, re] = y.useState(D.visible_in_global_realm),
              [q, Ae] = y.useState(D.visible_in_china_realm);
            let H = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  children: (0, s.we)("#FAQEditor_ChangeVisible_Desc"),
                }),
                (0, e.jsx)(C.Yh, {
                  label: (0, s.we)("#FAQEditor_VisibleInGlobal"),
                  checked: de,
                  onChange: (X) => re(X),
                }),
                (0, e.jsx)(C.Yh, {
                  label: (0, s.we)("#FAQEditor_VisibleInChina"),
                  checked: q,
                  tooltip: (0, s.we)("#FAQEditor_VisibleInChina_ttip"),
                  onChange: (X) => Ae(X),
                }),
              ],
            });
            return (
              l
                ? (H = (0, e.jsx)(U.t, {
                    position: "center",
                    size: "medium",
                    string: (0, s.we)("#FAQEditor_ChangeVisible_InProgress"),
                  }))
                : _
                  ? (H = (0, e.jsx)("div", {
                      children: (0, s.we)("#FAQEditor_ChangeVisible_Success"),
                    }))
                  : A &&
                    (H = (0, e.jsx)("div", {
                      children: (0, s.we)(
                        "Error_Description",
                        A,
                        (0, s.we)("#Error_GenericFailureDescription"),
                      ),
                    })),
              (0, e.jsx)(Oe.tH, {
                children: (0, e.jsx)(R.x_, {
                  onEscKeypress: r,
                  children: (0, e.jsxs)(C.UC, {
                    children: [
                      (0, e.jsx)(C.Y9, {
                        children: (0, s.we)("#FAQEditor_ChangeVisible"),
                      }),
                      (0, e.jsx)(C.nB, {
                        children: (0, e.jsx)(C.a3, { children: H }),
                      }),
                      (0, e.jsx)(C.wi, {
                        children: (0, e.jsx)(C.CB, {
                          onCancel: r,
                          bOKDisabled: !!(l || _ || A),
                          strOKText: (0, s.we)("#FAQEditor_ChangeVisible"),
                          strCancelText:
                            l || _ || A ? (0, s.we)("#Button_OK") : void 0,
                          onOK: async () => {
                            u(!0),
                              I.pN
                                .Get()
                                .UpdateVisibility(a.GetFAQID(), de, q)
                                .then((X) => {
                                  X == j.R && P(!0), T(X);
                                })
                                .catch((X) => {
                                  const be = (0, Ke.H)(X);
                                  console.error(
                                    "FAQChangeVisibilityDialog: hit error: " +
                                      be.strErrorMsg,
                                    be,
                                  ),
                                    T(j.zi);
                                })
                                .finally(() => u(!1));
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          };
        var ce = o(35707),
          At = o(6864),
          tt = o(68312),
          Et = o(61739),
          vt = o(88942),
          nt = o(35038);
        const Ct = (0, Y.PA)((i) => {
            const { draft: a, eLanguage: r } = i,
              l = a.GetFAQID(),
              [u, _] = (0, I.g5)(l);
            if (!_) return null;
            const P = u?.per_language_info?.find(
                (D) => D.language == f.Bhc,
              )?.last_update_timestamp,
              A = u?.per_language_info?.some(
                (D) => D.last_publish_timestamp < D.last_update_timestamp,
              ),
              T = u?.per_language_info
                ?.slice()
                .sort((D, de) => M[D.language] - M[de.language])
                ?.map((D) =>
                  (0, e.jsx)(
                    Lt,
                    { info: D, rtEnglishUpdateTime: P },
                    D.language,
                  ),
                );
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsxs)("div", {
                className: ce.LeftMenu,
                children: [
                  (0, e.jsxs)("div", {
                    className: ce.Section,
                    children: [
                      (0, e.jsxs)("div", {
                        className: ce.SectionTitle,
                        children: [
                          (0, s.we)("#FAQDashboard_VisibilityColumn"),
                          " ",
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: ce.SectionContents,
                        children: [
                          (0, e.jsxs)("div", {
                            className: ce.VisibilityCtn,
                            children: [
                              (0, e.jsxs)("div", {
                                className: (0, E.A)(ce.StatusRow, ce.Global),
                                children: [
                                  (0, s.we)(
                                    "#FAQDashboard_VisibleInGlobalRealmLabel",
                                  ),
                                  "\xA0",
                                  (0, e.jsx)(Se, {
                                    bIsVisible: u.visible_in_global_realm,
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, E.A)(ce.StatusRow, ce.China),
                                children: [
                                  (0, s.we)(
                                    "#FAQDashboard_VisibleInChinaRealmLabel",
                                  ),
                                  "\xA0",
                                  (0, e.jsx)(Se, {
                                    bIsVisible: u.visible_in_china_realm,
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                className: ce.StatusBtnCtn,
                                children: (0, e.jsx)(_t, { draft: a }),
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: ce.PublishCtn,
                            children: [
                              A
                                ? (0, e.jsx)("div", {
                                    className: ce.PublishStatus,
                                    children: (0, s.we)(
                                      "#FAQStatus_DraftVersionsDesc",
                                    ),
                                  })
                                : (0, e.jsx)("div", {
                                    className: ce.PublishStatus,
                                    children: (0, s.we)(
                                      "#FAQStatus_NothingToPublish",
                                    ),
                                  }),
                              (0, e.jsx)("div", {
                                className: ce.PublishBtn,
                                children: (0, e.jsx)(mt, {
                                  draft: a,
                                  bDisabled: !A,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: ce.Section,
                    children: [
                      (0, e.jsx)("div", {
                        className: ce.SectionTitle,
                        children: (0, s.we)(
                          "#FAQDashboard_LocalizationSection",
                        ),
                      }),
                      g.iA.is_support && (0, e.jsx)(xt, { draft: a }),
                      (0, e.jsxs)("div", {
                        className: ce.SectionContents,
                        children: [
                          (0, e.jsx)("div", {
                            className: ce.SectionDescription,
                            children: (0, s.we)(
                              "#FAQDashboard_LocalizationSectionDesc",
                            ),
                          }),
                          (0, e.jsx)(pe, { draft: a, eLanguage: r }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: ce.SectionContents,
                        children: [
                          (0, e.jsx)("div", {
                            className: ce.SectionDescription,
                            children: (0, s.we)(
                              "#EventEditor_Loc_CrowdinIntegration_Desc",
                            ),
                          }),
                          (0, e.jsx)(_e, { draft: a }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: ce.Section,
                    children: [
                      (0, e.jsx)("div", {
                        className: ce.SectionTitle,
                        children: (0, s.we)(
                          "#FAQStatus_LocalizedVersionStatusHeader",
                        ),
                      }),
                      (0, e.jsxs)("table", {
                        className: ce.FaqStatusTable,
                        children: [
                          (0, e.jsx)("thead", {
                            children: (0, e.jsxs)("tr", {
                              children: [
                                (0, e.jsx)("th", {
                                  children: (0, s.we)("#LanguageTitle"),
                                }),
                                (0, e.jsx)("th", {
                                  children: (0, s.we)("#FAQStatus_LastUpdated"),
                                }),
                                (0, e.jsx)("th", {
                                  children: (0, s.we)(
                                    "#FAQStatus_LastPublished",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("tbody", { children: T }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: ce.Section,
                    children: (0, e.jsx)(ht, { draft: a }),
                  }),
                ],
              }),
            });
          }),
          xt = (0, Y.PA)((i) => {
            const { draft: a } = i,
              r = Dt(a.GetFAQID()),
              l = jt(g.UF.CLANSTEAMID, a.GetFAQID()),
              [u, _] = (0, y.useState)(f.xPp),
              [P, A] = (0, y.useState)(!1),
              T = (Ae) => {
                const H = Ae.target.value;
                if (H === "all") _(f.xPp);
                else {
                  const X = (0, f.sfN)(H);
                  _(X);
                }
              },
              D = async (Ae) => {
                const H = a.GetJsonData();
                let X;
                H.length === 0 ? (X = {}) : (X = JSON.parse(H)),
                  (X.pushToCrowdIn = Ae.target.checked),
                  await a.UpdateJsonData(X);
              },
              de = async (Ae) => {
                const H = a.GetJsonData();
                let X;
                H.length === 0 ? (X = {}) : (X = JSON.parse(H)),
                  (X.localizeDraft = Ae.target.checked),
                  await a.UpdateJsonData(X);
              },
              re = async () => {
                A(!0), await r.mutateAsync(u), A(!1), window.location.reload();
              };
            let q = "";
            return (
              l.isSuccess &&
                l.data.crowdin_file_id &&
                (q = `https://valve.crowdin.com/editor/${l.data.crowdin_project_id}/${l.data.crowdin_file_id}`),
              null
            );
            return (0, e.jsxs)("div", {
              className: ce.SectionContents,
              children: [
                !1,
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      id: "localize_draft",
                      checked: a.BLocalizeDraft(),
                      onChange: de,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "localize_draft",
                      children: (0, s.we)(
                        "#FAQDashboard_CrowdIn_LocalizeDraft",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      id: "push_to_crowdin",
                      checked: a.BPushToCrowdIn(),
                      onChange: D,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "push_to_crowdin",
                      children: (0, s.we)(
                        a.BLocalizeDraft()
                          ? "#FAQDashboard_CrowdIn_PushOnSave"
                          : "#FAQDashboard_CrowdIn_PushOnPublish",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    q.length > 0 &&
                      (0, e.jsx)("a", {
                        href: q,
                        target: "_blank",
                        children: q,
                      }),
                    q.length === 0 &&
                      (0, e.jsx)(e.Fragment, {
                        children: "(Not yet pushed to CrowdIn)",
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)(At.p, { onChange: T }),
                    "\xA0",
                    !P &&
                      (0, e.jsx)("button", {
                        onClick: re,
                        children: (0, s.we)("#FAQDashboard_CrowdIn_Fetch"),
                      }),
                    P && (0, e.jsx)(U.t, { size: "small" }),
                  ],
                }),
              ],
            });
          }),
          Lt = (0, Y.PA)((i) => {
            const { info: a, rtEnglishUpdateTime: r } = i,
              l = !!r && r > a.last_update_timestamp,
              u = a.last_update_timestamp > a.last_publish_timestamp;
            return (0, e.jsxs)("tr", {
              children: [
                (0, e.jsx)("td", {
                  children: (0, s.we)("#Language_" + (0, f.LgB)(a.language)),
                }),
                (0, e.jsx)("td", {
                  children: (0, e.jsx)(fe, {
                    rtTimestamp: a.last_update_timestamp,
                    bShowAsWarning: l,
                  }),
                }),
                (0, e.jsx)("td", {
                  children: (0, e.jsx)(fe, {
                    rtTimestamp: a.last_publish_timestamp,
                    bShowAsWarning: u,
                  }),
                }),
              ],
            });
          });
        function Dt(i) {
          const a = (0, tt.KV)();
          return (0, Et.n)({
            mutationKey: ["fetch_faq_translation", i],
            mutationFn: async (r) => {
              const l = nt.w.Init(He.PS);
              return (
                l.Body().set_faq_id(i),
                l.Body().set_language(r),
                l.Body().set_steamid(g.UF.CLANSTEAMID),
                (await He.RD.FetchLocalizationFromCrowdIn(a, l)).GetEResult()
              );
            },
          });
        }
        function jt(i, a) {
          const r = (0, tt.KV)();
          return (0, vt.I)({
            queryKey: ["get_faq_crowdin_metadata", i, a],
            queryFn: async () => {
              const l = nt.w.Init(He.lk);
              return (
                l.Body().set_faq_id(a),
                l.Body().set_steamid(i),
                (await He.RD.GetCrowdInMetadata(r, l)).Body().toObject()
              );
            },
          });
        }
        var Ye = o(32093),
          bt = o(24806),
          wt = o(26759),
          qe = o(54736),
          St = o(59461),
          It = o(51520);
        const Ft = (0, Y.PA)((i) => {
            const { draft: a } = i,
              r = a.BNeedsSaving();
            return (0, e.jsx)("div", {
              className: "btn_green_steamui btn_medium",
              onClick: (l) =>
                (0, B.pg)((0, e.jsx)(Tt, { draft: i.draft }), (0, V.uX)(l)),
              children: (0, e.jsxs)("span", {
                children: [
                  !r &&
                    (0, e.jsx)("img", { className: It.SavedImage, src: St.A }),
                  (0, s.we)(r ? "#Button_Save" : "#Button_Saved"),
                ],
              }),
            });
          }),
          Tt = (i) => {
            const { draft: a, closeModal: r } = i,
              [l, u] = y.useState(!0),
              [_, P] = y.useState(void 0);
            y.useEffect(() => {
              (async () => {
                u(!0);
                try {
                  const D = await a.SaveDrafts();
                  P(D);
                } catch (D) {
                  P(j.zi),
                    console.log(
                      "FAQSaveProgressDialog hit exception " +
                        (0, Ke.H)(D).strErrorMsg,
                    );
                } finally {
                  u(!1);
                }
              })();
            }, [a]);
            const A = y.useId();
            return (0, e.jsxs)(R.eV, {
              "aria-labelledby": A,
              bAllowFullSize: !0,
              onCancel: r,
              closeModal: r,
              children: [
                (0, e.jsx)(C.Y9, {
                  id: A,
                  children: l
                    ? (0, e.jsx)("div", {
                        children: (0, s.we)("#FAQSave_Saving"),
                      })
                    : (0, e.jsxs)("div", {
                        children: [
                          (0, s.we)(
                            _ == j.R
                              ? "#FAQSave_SaveSuccess"
                              : "#FAQSave_Error",
                          ),
                          " ",
                        ],
                      }),
                }),
                (0, e.jsx)(C.nB, {
                  children: l
                    ? (0, e.jsx)(U.t, { size: "medium", position: "center" })
                    : (0, e.jsx)("div", {
                        children:
                          _ == j.R
                            ? (0, e.jsx)("div", {
                                children: (0, s.we)(
                                  "#FAQSave_SaveSuccess_desc",
                                ),
                              })
                            : (0, e.jsx)("div", {
                                children: (0, s.we)(
                                  "#Error_Description",
                                  _,
                                  (0, s.we)("#Error_GenericFailureDescription"),
                                ),
                              }),
                      }),
                }),
                (0, e.jsx)(C.wi, {
                  children:
                    !l &&
                    (0, e.jsx)(C.jn, {
                      onClick: r,
                      children: (0, s.we)("#Button_OK"),
                    }),
                }),
              ],
            });
          };
        var yt = o(66444),
          $e = o.n(yt);
        const st = (0, Y.PA)((i) => {
            const { draft: a, bPreview: r } = i,
              l = a.BHasPublished();
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsxs)("div", {
                className: (0, E.A)({
                  [qe.EventEditorTopBarContainer]: !0,
                  [qe.EventUnPublished]: !r && !l,
                  [qe.EventPublished]: !r && l,
                  [$e().FAQPreview]: r,
                }),
                children: [
                  (0, e.jsx)(p, {
                    route: r ? d.k_eCommunityEdit : d.k_eCommunityDashboard,
                    faqid: a.GetFAQID(),
                    className: m().EditPreviewButton,
                    children: (0, s.we)(
                      r ? "#FAQEditor_EditFAQ" : "#EventDisplay_EventsDashBtn",
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("div", {
                        className: $e().EditorInternalNameLabel,
                        children: (0, s.we)(
                          r
                            ? "#FAQEditor_InternalName_Preview"
                            : "#FAQEditor_InternalName",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: $e().EditorInternalName,
                        children: [
                          a.GetFAQInternalName(),
                          (0, e.jsx)("img", {
                            src: wt.A,
                            onClick: (u) =>
                              (0, B.pg)(
                                (0, e.jsx)(Pt, { draft: a }),
                                (0, V.uX)(u),
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: m().EventOptions,
                    children: [
                      (0, e.jsx)(bt.Ng, {
                        selectedLang: Me.O.Get().GetCurEditLanguage(),
                        fnOnLanguageChanged: Me.O.Get().SetCurEditLanguage,
                        fnLangHasData: a.BHasSomeTextForLanguage,
                        fnIsLangSupported: (u) => !0,
                        fnLastUpdateRTime: a.GetLastTimeLanguageUpdated,
                        realms: [
                          Ye.TU.k_ESteamRealmGlobal,
                          Ye.TU.k_ESteamRealmChina,
                        ],
                      }),
                      !r &&
                        (0, e.jsx)(p, {
                          route: d.k_eCommunityPreview,
                          faqid: a.GetFAQID(),
                          className: m().EditPreviewButton,
                          children: (0, s.we)("#Button_Preview"),
                        }),
                    ],
                  }),
                ],
              }),
            });
          }),
          Pt = (i) => {
            const { closeModal: a, draft: r } = i,
              [l, u] = y.useState(r.GetFAQInternalName() || ""),
              [_, P] = y.useState(!1),
              [A, T] = y.useState(j.R),
              [D, de] = y.useState(!1),
              re = async () => {
                P(!0),
                  I.pN
                    .Get()
                    .UpdateInternalName(r.GetFAQID(), l)
                    .then((q) => T(q))
                    .finally(() => {
                      de(!0);
                    });
              };
            return (0, e.jsxs)(R.eV, {
              title: (0, s.we)("#FAQEditor_ChangeInternalName"),
              bAllowFullSize: !0,
              onCancel: a,
              closeModal: a,
              children: [
                (0, e.jsxs)(C.nB, {
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#FAQEditor_ChangeInternalName_desc"),
                    }),
                    (0, e.jsx)("input", {
                      type: "text",
                      value: l,
                      placeholder: (0, s.we)("#FAQEditor_ChangeInternalName"),
                      onFocus: (q) => q.target.select(),
                      onChange: (q) => u(q.currentTarget.value),
                      maxLength: 240,
                      disabled: _,
                    }),
                    !!(_ && !D) &&
                      (0, e.jsx)(U.t, {
                        string: (0, s.we)("#Updating"),
                        position: "center",
                        size: "medium",
                      }),
                    D &&
                      (0, e.jsx)("span", {
                        children:
                          A == j.R
                            ? (0, s.we)("#EventDisplay_Share_Success")
                            : (0, s.we)(
                                "#Error_Description",
                                A,
                                (0, s.we)("#Error_GenericFailureDescription"),
                              ),
                      }),
                  ],
                }),
                (0, e.jsx)(C.wi, {
                  children: (0, e.jsx)(C.CB, {
                    bOKDisabled: l.trim().length == 0 || _,
                    onCancel: a,
                    strCancelText: D
                      ? (0, s.we)("#Button_Close")
                      : (0, s.we)("#Button_Cancel"),
                    onOK: re,
                  }),
                }),
              ],
            });
          },
          at = (0, Y.PA)((i) => {
            const { draft: a, eLanguage: r } = i,
              l = a.GetFAQID(),
              [u, _] = (0, I.g5)(l),
              P = _ && u.per_language_info.find((D) => D.language == r),
              T =
                _ &&
                ((g.TS.EREALM == Ye.TU.k_ESteamRealmGlobal &&
                  u.visible_in_global_realm) ||
                  (g.TS.EREALM == Ye.TU.k_ESteamRealmChina &&
                    u.visible_in_china_realm)) &&
                !!P?.last_publish_timestamp;
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsx)("div", {
                className: (0, E.A)(m().SaveBackground),
                children: (0, e.jsxs)("div", {
                  className: m().FlexRowWrapFlexStartContainer,
                  style: { width: "unset", justifyContent: "center" },
                  children: [
                    (0, e.jsx)(Ft, { draft: a }),
                    !!T &&
                      (0, e.jsx)("div", {
                        className: m().EditPreviewButton,
                        children: (0, e.jsx)("a", {
                          href: g.TS.HELP_BASE_URL + "faqs/view/" + u.url_code,
                          children: (0, s.we)("#FAQEditir_ViewLiveFAQ"),
                        }),
                      }),
                  ],
                }),
              }),
            });
          });
        var Nt = o(77495);
        const Rt = (0, Y.PA)((i) => {
            const { faqid: a } = i,
              [r, l] = (0, I.z5)(a),
              u = y.useRef(void 0);
            if (l) {
              if (!r)
                return (0, e.jsx)(Ot, {
                  strError: (0, s.we)("#FAQEditor_NoFAQFound"),
                });
            } else
              return (0, e.jsx)(U.t, {
                position: "center",
                size: "xlarge",
                string: (0, s.we)("#Loading"),
              });
            const _ = Me.O.Get().GetCurEditLanguage();
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)(st, { draft: r }),
                (0, e.jsxs)("div", {
                  className: De().FAQEditPage,
                  children: [
                    (0, e.jsx)("div", {
                      className: De().FAQMenuCtn,
                      children: (0, e.jsx)(Ct, { draft: r, eLanguage: _ }),
                    }),
                    (0, e.jsx)("div", {
                      className: De().FAQEditorCtn,
                      children: (0, e.jsx)("div", {
                        className: De().FAQEditor,
                        children: (0, e.jsxs)("div", {
                          className: (0, E.A)(m().Columns, De().Columns),
                          children: [
                            (0, e.jsxs)("div", {
                              className: (0, E.A)(m().LeftCol, De().LeftCol),
                              children: [
                                (0, e.jsx)(Bt, { draft: r, eLanguage: _ }),
                                (0, e.jsx)(Mt, {
                                  bbcodeEditorRef: u,
                                  draft: r,
                                  eLanguage: _,
                                }),
                              ],
                            }),
                            (0, e.jsx)(Qt, {
                              draft: r,
                              bbcodeEditorRef: u,
                              className: (0, E.A)(m().RightCol, De().RightCol),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(at, { draft: r, eLanguage: _ }),
              ],
            });
          }),
          Qt = (i) => {
            const a = (0, y.useMemo)(() => new c.b(g.UF.CLANSTEAMID), []);
            if (!g.UF.CAN_UPLOAD_IMAGES) return null;
            const { draft: r, bbcodeEditorRef: l } = i;
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsxs)("div", {
                className: i.className,
                children: [
                  (0, e.jsx)("div", {
                    children: (0, s.we)("#FAQEditor_ImageTitle"),
                  }),
                  (0, e.jsx)(dt.G, {
                    bShowLightBox: !0,
                    appid: void 0,
                    clanSteamID: a,
                    imageInsertCallBack: (u, _) =>
                      l.current && (0, Re.fW)(l?.current, u, _),
                    fnSetImageURL: () => {},
                    rgRealmList: r.GetIncludedRealmList(),
                    fnLangHasData: r.BHasSomeTextForLanguage,
                    fnGetImageHash: (u, _) => {
                      if (ye.pb.includes(u)) {
                        const P = Be.R.GetAllLocalizedGroupImages();
                        return P && P.length > _ && P[_] != null ? P[_] : null;
                      }
                      return null;
                    },
                    partnerEventStore: Nt.O3,
                  }),
                ],
              }),
            });
          },
          Bt = (0, Y.PA)((i) => {
            const { draft: a, eLanguage: r } = i;
            return (0, e.jsxs)("div", {
              className: De().EditorTitleField,
              children: [
                (0, e.jsx)("div", {
                  className: De().EditorLabel,
                  children: (0, s.we)("#FAQEditor_TitleLabel"),
                }),
                (0, e.jsx)("input", {
                  type: "text",
                  className: De().EditorTitleFieldInput,
                  value: a.GetDraftTitle(r) || "",
                  placeholder: (0, s.we)("#FAQEditor_TitlePlaceHolder"),
                  onFocus: (u) => u.target.select(),
                  onChange: (u) => a.SetDraftTitle(r, u.currentTarget.value),
                  maxLength: 120,
                }),
              ],
            });
          }),
          Mt = (0, Y.PA)((i) => {
            const { draft: a, eLanguage: r, bbcodeEditorRef: l } = i;
            return (0, e.jsxs)("div", {
              className: De().EditorPane,
              children: [
                (0, e.jsx)("div", {
                  className: De().EditorLabel,
                  children: (0, s.we)("#FAQEditor_ContentLabel"),
                }),
                (0, e.jsx)(ct.I, {
                  ref: l,
                  fnGetCurText: () => a.GetDraftContent(r) || "",
                  fnOnTextChange: (u) =>
                    a.SetDraftContent(r, u.currentTarget.value),
                  fnSetText: (u) => a.SetDraftContent(r, u),
                  strPlaceholder: (0, s.we)("#FAQEditor_ContentPlaceHolder"),
                  bSupportHTMLImport: !0,
                  showFormatHelp: "PartnerEvents",
                  className: De().TextPaneContainer,
                  classNameForTextArea: De().EditorPaneTextArea,
                }),
              ],
            });
          }),
          Ot = (i) =>
            (0, e.jsxs)("div", {
              className: De().ErrorCtn,
              children: [
                (0, e.jsx)("div", {
                  className: De().ErrorMsg,
                  children: i.strError,
                }),
                (0, e.jsx)(p, {
                  route: d.k_eCommunityDashboard,
                  className: De().EscapeLink,
                  children: (0, s.we)("#FAQEditor_GoToDashboard"),
                }),
              ],
            });
        var kt = o(71462),
          Pe = o(28735);
        const it = (i) => {
            const {
                title: a,
                content: r,
                bIsPreview: l,
                elSideBars: u,
                version: _,
                language: P,
              } = i,
              A = (0, $.zy)();
            return (
              y.useEffect(() => {
                const T = A?.hash?.substr(
                  A?.hash?.substr(0, 1) === "#" ? 1 : 0,
                );
                T &&
                  document
                    .getElementById(T)
                    ?.scrollIntoView({ block: "start", behavior: "smooth" });
              }, [A]),
              (0, e.jsxs)("div", {
                className: (0, E.A)(Pe.FAQViewPage, g.TS.LANGUAGE),
                children: [
                  (0, e.jsx)("a", {
                    className: Pe.SupportTitle,
                    href: `${g.TS.HELP_BASE_URL}`,
                    children: (0, s.we)("#FAQViewer_SteamSupport"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Pe.Columns,
                    children: [
                      (0, e.jsxs)("div", {
                        className: (0, E.A)(Pe.LeftCol),
                        children: [
                          (0, e.jsx)("div", { className: Pe.TopColorBar }),
                          (0, e.jsxs)("div", {
                            className: Pe.FAQTopicCtn,
                            children: [
                              (0, e.jsx)("div", {
                                className: Pe.FAQTitle,
                                role: "heading",
                                "aria-level": 1,
                                children: a,
                              }),
                              (0, e.jsx)("div", {
                                className: Pe.FAQContent,
                                children: (0, e.jsx)(kt.u, {
                                  text: r,
                                  bShowErrorInfo: l,
                                  version: _ || "0",
                                  language: P,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Pe.RightCol,
                        children: (0, e.jsx)("div", {
                          className: Pe.SectionCtn,
                          children: u,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          Ze = (i) =>
            (0, e.jsx)("div", {
              className: Pe.FAQViewPage,
              children: i.children,
            });
        var rt = o(38129),
          ot = o(20572),
          Ie = o(66891);
        const Gt = (i) => {
            const { faqContent: a } = i,
              [r, l] = (0, I.W)(a.faq_id, a.version, a.language);
            return I.pN.Get().BHasFAQEdit()
              ? (0, e.jsxs)("div", {
                  className: (0, E.A)(Ie.Section, h.ValveOnlyBackground),
                  children: [
                    (0, e.jsx)("div", {
                      className: Ie.TopicHeader,
                      children: (0, s.we)("#FAQViewer_AdminLinks"),
                    }),
                    (0, e.jsx)("div", {
                      className: ot.InfoRow,
                      children: (0, s.PP)(
                        "#FAQViewer_Admin_LastUpdate",
                        r?.author_account_id
                          ? (0, e.jsx)(rt.p, {
                              accountID: Number.parseInt(r.author_account_id),
                            })
                          : (0, s.we)("#FAQViewer_UnknownUser"),
                        (0, e.jsx)("span", {
                          children:
                            (0, s.TW)(a.timestamp) +
                            "@" +
                            (0, ee.KC)(a.timestamp, { bForce24HourClock: !1 }),
                        }),
                      ),
                    }),
                    (0, e.jsx)(Ut, { faqContent: a }),
                    (0, e.jsx)(p, {
                      faqid: a.faq_id,
                      route: d.k_eCommunityEdit,
                      bForceAnchor: !0,
                      children: (0, s.we)("#FAQViewer_GotoEditor"),
                    }),
                  ],
                })
              : null;
          },
          Ut = (i) => {
            const { faqContent: a } = i,
              [r, l] = (0, I.z5)(a.faq_id);
            if (
              !r ||
              !l ||
              r.GetLastTimeLanguageUpdated(a.language) <= a.timestamp
            )
              return null;
            const u = r.GetLastSavedDraftVersion(a.language);
            return (0, e.jsx)("div", {
              className: ot.InfoRow,
              children: (0, s.PP)(
                "#FAQViewer_DraftNewer",
                (0, e.jsx)(rt.p, {
                  accountID: Number.parseInt(u.author_account_id),
                }),
                (0, e.jsx)("span", {
                  children:
                    (0, s.TW)(u.timestamp) +
                    "@" +
                    (0, ee.KC)(u.timestamp, { bForce24HourClock: !1 }),
                }),
              ),
            });
          },
          zt = (i) =>
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: (0, E.A)(Ie.Section, Ie.NeedHelp),
                  children: [
                    (0, e.jsx)("div", {
                      className: Ie.LeftCol,
                      children: (0, e.jsx)(Z._VW, { role: "presentation" }),
                    }),
                    (0, e.jsxs)("div", {
                      className: Ie.RightCol,
                      children: [
                        (0, e.jsx)("div", {
                          className: Ie.TopicHeader,
                          children: (0, s.we)(
                            "#FAQViewer_SideBar_ProblemWithSteam_Title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, s.we)(
                            "#FAQViewer_SideBar_ProblemWithSteam_Desc",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: Ie.CenterButtonCtn,
                          children: (0, e.jsx)("a", {
                            href: g.TS.HELP_BASE_URL,
                            className: h.EditPreviewButton,
                            children: (0, s.we)(
                              "#FAQViewer_SideBar_ProblemWithSteam_Link",
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !(0, g.Y2)() &&
                  (0, e.jsxs)("div", {
                    className: (0, E.A)(Ie.Section, Ie.CommunityHelp),
                    children: [
                      (0, e.jsx)("div", {
                        className: Ie.LeftCol,
                        children: (0, e.jsx)(Z.ROZ, { role: "presentation" }),
                      }),
                      (0, e.jsxs)("div", {
                        className: Ie.RightCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ie.TopicHeader,
                            children: (0, s.we)(
                              "#FAQViewer_SideBar_CommunityHelp_Title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#FAQViewer_SideBar_CommunityHelp_Desc",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: Ie.CenterButtonCtn,
                            children: (0, e.jsx)("a", {
                              href: g.TS.COMMUNITY_BASE_URL + "discussions",
                              className: h.EditPreviewButton,
                              children: (0, s.we)(
                                "#FAQViewer_SideBar_CommunityHelp_Link",
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
        var Vt = o(25651),
          et = o.n(Vt);
        const Wt = (i) => {
            const { faqid: a } = i,
              [r, l] = (0, I.Kv)(a, (0, f.sfN)(g.TS.LANGUAGE));
            if (l) {
              if (!r)
                return (0, e.jsx)(Ze, {
                  children: (0, e.jsx)(lt, {
                    strError: (0, s.we)("#FAQViewer_NoFAQFound"),
                  }),
                });
            } else
              return (0, e.jsx)(Ze, {
                children: (0, e.jsx)(U.t, {
                  position: "center",
                  size: "xlarge",
                  string: (0, s.we)("#Loading"),
                }),
              });
            return (0, e.jsx)(it, {
              title: r.title,
              content: r.content,
              version: r.version,
              elSideBars: [
                (0, e.jsx)(zt, { faqContent: r }, "sidebar"),
                (0, e.jsx)(Gt, { faqContent: r }, "adminbar"),
              ],
            });
          },
          lt = (i) => {
            const a =
              g.TS.COMMUNITY_BASE_URL +
              (g.UF.APPID
                ? "app/" + (g.UF.VANITY_ID ?? g.UF.APPID)
                : "gid/" + g.UF.CLANSTEAMID);
            return (0, e.jsxs)("div", {
              className: et().ErrorCtn,
              children: [
                (0, e.jsx)("div", {
                  className: et().ErrorMsg,
                  children: i.strError,
                }),
                (0, e.jsx)("a", {
                  className: et().EscapeLink,
                  href: a,
                  children: (0, s.we)("#FAQViewer_GoToHomepage"),
                }),
              ],
            });
          },
          Ht = (0, Y.PA)((i) => {
            const { faqid: a } = i,
              [r, l] = (0, I.z5)(a),
              u = Me.O.Get().GetCurEditLanguage();
            if (l) {
              if (!r)
                return (0, e.jsx)(Ze, {
                  children: (0, e.jsx)(lt, {
                    strError: (0, s.we)("#FAQViewer_NoFAQFound"),
                  }),
                });
            } else
              return (0, e.jsx)(Ze, {
                children: (0, e.jsx)(U.t, {
                  position: "center",
                  size: "xlarge",
                  string: (0, s.we)("#Loading"),
                }),
              });
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(st, { draft: r, bPreview: !0 }),
                (0, e.jsx)(it, {
                  title: r.GetDraftTitleWithFallback(u, g.TS.EREALM),
                  content: r.GetDraftContentWithFallback(u, g.TS.EREALM),
                  version: "" + r.GetLastTimeLanguageUpdated(u),
                  language: u,
                }),
                (0, e.jsx)(at, { draft: r, eLanguage: u }),
              ],
            });
          });
        var Je = o(20076),
          Kt = o(90783);
        const ke = {
            ViewFAQ: (i, a) => `/faqs/${i}/view/${a}*`,
            EditFAQ: (i, a) => `/faqs/${i}/edit/${a}*`,
            DashboardFAQ: (i) => `/faqs/${i}/dashboard`,
            PreviewFAQ: (i, a) => `/faqs/${i}/preview/${a}*`,
          },
          Yt = (0, Y.PA)((i) =>
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(We, {}),
                (0, e.jsxs)($.dO, {
                  children: [
                    (0, e.jsx)($.qh, {
                      path: ke.ViewFAQ(":vanity_str", ":faqid"),
                      render: (a) =>
                        (0, e.jsx)(Je.X, {
                          config: {
                            "faqs-root": () => {
                              const { faqid: r } = a.match.params,
                                l = (0, I.CJ)(r);
                              return (0, e.jsx)(Wt, { faqid: l });
                            },
                          },
                        }),
                    }),
                    (0, e.jsx)($.qh, {
                      path: ke.EditFAQ(":vanity_str", ":faqid"),
                      render: (a) =>
                        (0, e.jsx)(Je.X, {
                          config: {
                            "faqs-root": () => {
                              const { faqid: r } = a.match.params;
                              if (r) {
                                const l = (0, I.CJ)(r);
                                return l
                                  ? (0, e.jsx)(Rt, { faqid: l })
                                  : (0, e.jsx)($.rd, {
                                      push: !0,
                                      to: F(d.k_eCommunityDashboard),
                                    });
                              } else return (0, e.jsx)(Fe, {});
                            },
                          },
                        }),
                    }),
                    (0, e.jsx)($.qh, {
                      path: ke.DashboardFAQ(":vanity_str"),
                      render: (a) =>
                        (0, e.jsx)(Je.X, {
                          config: { "faqs-root": () => (0, e.jsx)(Fe, {}) },
                        }),
                    }),
                    (0, e.jsx)($.qh, {
                      path: ke.PreviewFAQ(":vanity_str", ":faqid"),
                      render: (a) =>
                        (0, e.jsx)(Je.X, {
                          config: {
                            "faqs-root": () => {
                              const { faqid: r } = a.match.params,
                                l = (0, I.CJ)(r);
                              return (0, e.jsx)(Ht, { faqid: l });
                            },
                          },
                        }),
                    }),
                    (0, e.jsx)($.qh, { component: Kt.a }),
                  ],
                }),
              ],
            }),
          );
      },
      6864: (z, je, o) => {
        "use strict";
        o.d(je, { p: () => ue, s: () => U });
        var e = o(7850),
          Y = o(90626),
          y = o(19316),
          f = o(95695),
          I = o.n(f),
          C = o(85143),
          $ = o(11243),
          ge = o(18210),
          g = o(91126),
          d = o.n(g),
          p = o(56585),
          F = o(99412),
          R = o(35766),
          B = o(85599),
          Z = o(36118);
        function U(E) {
          const { editModel: s } = E,
            [oe, he] = Y.useState(F.xPp),
            [v, me] = Y.useState(!1),
            [j, n] = Y.useState(null),
            t = (L) => {
              const S = L.target.value;
              if (S === "all") he(F.xPp);
              else {
                const te = (0, F.sfN)(S);
                he(te);
              }
            },
            c = s.GetClanSteamID(),
            h = s.GetGID(),
            m = (0, p.Wj)(c, h),
            [, x] = Y.useReducer((L) => L + 1, 0),
            N =
              m.isSuccess &&
              m.data?.crowdin_project_id &&
              m.data?.crowdin_file_id
                ? `https://valve.crowdin.com/editor/${m.data.crowdin_project_id}/${m.data.crowdin_file_id}`
                : null,
            V = (L) => {
              s.SetPushSourceToCrowdInAutomatically(L), x();
            },
            ee = (0, p.IW)(c.ConvertTo64BitString(), h, oe),
            w = () => {
              me(!0),
                ee
                  .mutateAsync()
                  .then(() => window.location.reload())
                  .catch((L) => {
                    n(L.toString()), me(!1);
                  })
                  .then(() => {
                    n(null);
                  });
            };
          return m.isLoading
            ? null
            : (0, e.jsxs)(C.Eb, {
                clanSteamID: E.editModel.GetClanSteamID(),
                children: [
                  (0, e.jsx)(R.mt, {
                    active: v,
                    children: (0, e.jsx)(B.t, {}),
                  }),
                  (0, e.jsxs)("div", {
                    className: d().ValveCrowdInSyncCtn,
                    children: [
                      (0, e.jsx)(y.J0, {
                        value: s.BPushUpdatesToCrowdInAutomatically(),
                        onChange: V,
                      }),
                      (0, e.jsxs)("div", {
                        className: d().ValveCrowdInSyncLabel,
                        children: [
                          (0, ge.we)(
                            "#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn",
                          ),
                          "\xA0(",
                          N
                            ? (0, e.jsx)("a", { href: N, children: N })
                            : (0, ge.we)(
                                "#EventEditor_Localization_NotMappedToCrowdIn",
                              ),
                          ")",
                          (0, e.jsx)($.o, {
                            tooltip: (0, ge.we)(
                              "#EventEditor_Localization_Tooltip",
                            ),
                            className: f.tooltip_Ctn,
                          }),
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)("span", {
                            children: (0, ge.we)(
                              "#EventEditor_Localization_RememberToSave",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)(ue, { onChange: t }),
                      (0, e.jsx)("div", {
                        className: I().EditPreviewButton,
                        onClick: w,
                        children: (0, ge.we)(
                          "#EventEditor_Localization_FetchLocalization",
                        ),
                      }),
                    ],
                  }),
                  j &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("div", {
                        className: d().SyncPanelError,
                        children: [(0, e.jsx)(Z.X, {}), " ", j],
                      }),
                    }),
                ],
              });
        }
        function ue(E) {
          const s = (0, ge.O9)(!1);
          let oe = Array.from(s.entries());
          oe.sort((v, me) => v[1].localeCompare(me[1]));
          const he = oe.map(([v, me]) =>
            v !== "english"
              ? (0, e.jsx)("option", { value: v, children: me }, v)
              : "",
          );
          return (0, e.jsxs)("select", {
            onChange: E.onChange,
            children: [
              (0, e.jsx)("option", {
                value: "all",
                children: (0, ge.we)("#EventEditor_Localization_AllLanguages"),
              }),
              he,
            ],
          });
        }
      },
      26251: (z, je, o) => {
        "use strict";
        o.d(je, { Yg: () => he, t3: () => v });
        var e = o(7850),
          Y = o(40323),
          y = o.n(Y),
          f = o(90626),
          I = o(99412),
          C = o(32093),
          $ = o(38410),
          ge = o(19316),
          g = o(95695),
          d = o.n(g),
          p = o(2801),
          F = o(88003),
          R = o(85599),
          B = o(34592),
          Z = o(36707),
          U = o(18210),
          ue = o(20398),
          E = o(71421),
          s = o(96471),
          oe = o.n(s);
        const he = (j) => {
            const n = (t, c) => {
              t.preventDefault();
              const {
                  fnGetLocData: h,
                  closeModal: m,
                  strFileNamePrefix: x,
                  lang: N,
                } = j,
                V = h(),
                ee = new ue.s();
              let w = x ? x + "_localization" : "localization";
              switch (c) {
                case "csv_row":
                  ee.WriteLocalizationData_CSV_LanguageRows(V, w + ".csv");
                  break;
                case "csv_column":
                  ee.WriteLocalizationData_CSV_LanguageColumns(V, w + ".csv");
                  break;
                case "csv_token":
                  ee.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                    V,
                    w + ".csv",
                  );
                  break;
                case "xml":
                  ee.WriteLocalizationData_XML_SingleLanguage(
                    V,
                    N,
                    w + "_" + (0, I.x6o)((0, I.LgB)(N)) + ".xml",
                  );
                  break;
              }
              m && m();
            };
            return (0, e.jsxs)(e.Fragment, {
              children: [
                !!j.bShowCSV &&
                  (0, e.jsxs)(f.Fragment, {
                    children: [
                      (0, e.jsx)(ge.jn, {
                        onClick: (t) => n(t, "csv_row"),
                        children: (0, U.we)(
                          "#Localization_Export_Btn_RowLanguages",
                        ),
                      }),
                      (0, e.jsx)(ge.jn, {
                        onClick: (t) => n(t, "csv_column"),
                        children: (0, U.we)(
                          "#Localization_Export_Btn_ColumnLanguages",
                        ),
                      }),
                      (0, e.jsx)(ge.jn, {
                        onClick: (t) => n(t, "csv_token"),
                        children: (0, U.we)(
                          "#Localization_Export_Btn_TokenLanguages",
                        ),
                      }),
                    ],
                  }),
                !!j.bShowXML &&
                  (0, e.jsx)(ge.jn, {
                    onClick: (t) => n(t, "xml"),
                    children: (0, U.we)("#Localization_Export_Btn_XML"),
                  }),
              ],
            });
          },
          v = (j) => {
            const [n, t] = (0, f.useState)(!1),
              c = (x, N) => {
                t(!1),
                  console.log(
                    "ImportLocalizationAction: On Handle Parse error: " +
                      x.message,
                    x,
                  ),
                  (0, F.pg)(
                    (0, e.jsx)(p.KG, {
                      children: (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, U.we)("#Localization_Error_Input"),
                          }),
                          (0, e.jsx)("p", { children: x.message }),
                        ],
                      }),
                    }),
                    window,
                  );
              },
              h = (x) => {
                t(!1);
                let N = "";
                x.forEach((V) => {
                  N.length > 0 && (N += ", "),
                    (N += (0, U.we)("#Language_" + (0, I.LgB)(V)));
                }),
                  (0, F.pg)(
                    (0, e.jsx)(p.o0, {
                      strTitle: (0, U.we)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                      children: (0, e.jsx)("div", {
                        children:
                          N.length == 0
                            ? (0, U.we)(
                                "#Localization_Success_ImportComplete_NoChange",
                              )
                            : (0, U.we)(
                                "#Localization_Success_ImportComplete",
                                N,
                              ),
                      }),
                    }),
                    window,
                  );
              },
              m = async (x) => {
                let N = x.target.files;
                if (N && N.length > 0) {
                  t(!0);
                  let V = new Array(),
                    ee = new ue.s();
                  for (let w = 0; w < N.length; ++w)
                    if (N[w])
                      if (N[w].name.toLocaleLowerCase().endsWith(".csv")) {
                        y().parse(N[0], {
                          header: !0,
                          complete: (L) => {
                            let te = new ue.s().DetectAndFormatCSV(L);
                            if (!te) {
                              c({
                                code: "",
                                message: "",
                                row: 0,
                                type: "filenameerror",
                              });
                              return;
                            }
                            const Q = U.A0.GetLanguageListForRealms([
                                C.TU.k_ESteamRealmGlobal,
                              ]),
                              O = j.fnOnImportLocData(te, Q);
                            h(O);
                          },
                          error: c,
                        });
                        return;
                      } else if (
                        N[w].name.toLocaleLowerCase().endsWith(".xml")
                      ) {
                        let { language: L } = (0, $.jj)(N[w].name, I.xPp);
                        if (L == null || L == I.xPp) {
                          c({
                            code: "",
                            message: (0, U.we)(
                              "#Localization_Error_FileLangauage",
                              N[w].name,
                            ),
                            row: 0,
                            type: "filenameerror",
                          });
                          return;
                        }
                        try {
                          const S =
                            await ee.ReadLocalizationData_XML_SingleLanguage(
                              N[w],
                              L,
                            );
                          j.fnOnImportLocData(S, [L]).forEach((Q) => {
                            V.indexOf(Q) == -1 && V.push(Q);
                          });
                        } catch (S) {
                          let te = (0, B.H)(S);
                          c({
                            code: "",
                            message: (0, U.we)(
                              "#Localization_Error_XMLParseError",
                              te.strErrorMsg,
                            ),
                            row: 0,
                            type: "parseerror",
                          });
                          return;
                        }
                      } else
                        c({
                          code: "",
                          message: (0, U.we)(
                            "#Localization_Error_FileExtention",
                            N[w].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                  h(V);
                }
              };
            return (0, e.jsx)(E.he, {
              className: (0, Z.A)(
                j.className ? j.className : g.EditPreviewButton,
              ),
              toolTipContent: j.strToolTip,
              children: (0, e.jsxs)("label", {
                className: s.ImportButton,
                htmlFor: "importlocalization",
                children: [
                  n && (0, e.jsx)(R.t, { size: "small" }),
                  (0, e.jsx)("div", {
                    className: s.Label,
                    children: (0, U.we)(
                      j.strLabel ? j.strLabel : "#Localization_Import_Btn",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    id: "importlocalization",
                    className: s.ImportButton,
                    style: { display: "none" },
                    type: "file",
                    onSubmit: m,
                    onChange: m,
                    multiple: !0,
                  }),
                ],
              }),
            });
          },
          me = (j) => {
            const {
                fnOnImportLocData: n,
                closeModal: t,
                sampleLocData: c,
                sampleFilename: h,
              } = j,
              m = (N, V) => {
                const ee = n(N, V);
                return t(), ee;
              },
              x = new CLocalizationImportExport();
            return jsxs(GenericDialog, {
              title: Localize("#ImportLoc_Title"),
              onCancel: t,
              closeModal: t,
              children: [
                jsxs(Dialog.Body, {
                  children: [
                    jsx("div", {
                      children: Localize("#ImportLoc_Description"),
                    }),
                    jsxs("div", {
                      className: locstyles.ImportLocSampleButtonCtn,
                      children: [
                        jsx("div", {
                          className: locstyles.SampleTitle,
                          children: Localize("#ImportLoc_SampleTitle"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            x.WriteLocalizationData_CSV_LanguageRows(
                              c,
                              h + "_row.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerRow"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            x.WriteLocalizationData_CSV_LanguageColumns(
                              c,
                              h + "_col.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerCol"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            x.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                              c,
                              h + "_token.csv",
                            ),
                          children: Localize("#ImportLoc_CSVTokenLang"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            x.WriteLocalizationData_XML_SingleLanguage(
                              c,
                              k_ELanguage_English,
                              h + "xml",
                            ),
                          children: Localize("#ImportLoc_XML"),
                        }),
                      ],
                    }),
                  ],
                }),
                jsx(Dialog.Footer, {
                  children: jsx(v, {
                    strLabel: Localize("#BuildNotes_ImportLocalization"),
                    fnOnImportLocData: m,
                  }),
                }),
              ],
            });
          };
      },
      20398: (z, je, o) => {
        "use strict";
        o.d(je, { G: () => C, s: () => $ });
        var e = o(99412),
          Y = o(32093),
          y = o(41635),
          f = o(22880),
          I = o(18210);
        class C {
          m_mapTokens = new Map();
          GetLocalization(g, d) {
            const p = this.m_mapTokens.get(g);
            if (!(!p || !p[d])) return p[d];
          }
          SetLocalization(g, d, p) {
            let F = this.m_mapTokens.get(g);
            F || ((F = (0, y.$Y)([], e.bP9, null)), this.m_mapTokens.set(g, F)),
              (F[d] = p);
          }
          GetSortedTokenList() {
            let g = [];
            return (
              this.m_mapTokens.forEach((d, p) => g.push(p)),
              g.sort((d, p) => d.localeCompare(p)),
              g
            );
          }
          GetLanguagesWithTokens() {
            let g = new Map();
            this.m_mapTokens.forEach((p) => {
              for (let F = 0; F < p.length; ++F)
                !g.has(F) &&
                  p[F] !== null &&
                  p[F] !== void 0 &&
                  p[F].trim().length > 0 &&
                  g.set(F, !0);
            });
            let d = new Array();
            return (
              g.forEach((p, F) => {
                p && d.push(F);
              }),
              d
            );
          }
          ClearLanguagesTokens(g) {
            g.forEach((d) => {
              this.m_mapTokens.forEach((p, F) => {
                d < p.length && p[d] !== null && (p[d] = null);
              });
            });
          }
          DebugPrintData() {
            const g = new Array();
            return (
              this.m_mapTokens.forEach((d, p) => g.push(`${p}=${d.join(",")}`)),
              g.join(`
`)
            );
          }
        }
        class $ {
          DetectAndFormatCSV(g) {
            let d = null;
            return (
              g?.meta?.fields?.length >= 3 &&
              g.meta.fields[0] === "field" &&
              g.meta.fields[1] === "language" &&
              g.meta.fields[2] === "value"
                ? (d = this.ReadLocalizationData_CSV_TokenLanguageList(g))
                : g?.meta?.fields?.length >= 2 &&
                    g.meta.fields[0] === "field" &&
                    (0, e.sfN)(g.meta.fields[1], e.xPp) != e.xPp
                  ? (d = this.ReadLocalizationData_CSV_LanguageColumns(g))
                  : g?.meta?.fields?.length >= 2 &&
                    g.meta.fields[0] === "language" &&
                    (d = this.ReadLocalizationData_CSV_LanguageRows(g)),
              d
            );
          }
          async ReadLocalizationData_XML_SingleLanguage(g, d) {
            let p = new C(),
              F = new DOMParser(),
              R = await f.g.ReadFile(g),
              B = F.parseFromString(R.toString(), "application/xml");
            for (let Z = 0; Z < B.documentElement.children.length; ++Z) {
              const U = B.documentElement.children.item(Z);
              if (!U.getAttribute("id"))
                throw "Can not find id for element. Probably malformed XML";
              const ue = U.getAttribute("id").toLocaleLowerCase(),
                E = U.textContent;
              p.SetLocalization(ue, d, E);
            }
            return p;
          }
          ReadLocalizationData_CSV_TokenLanguageList(g) {
            const d = new C();
            return (
              g.data.forEach((p) => {
                const F = p.field,
                  R = (0, e.sfN)(p.language);
                d.SetLocalization(F, R, p.value);
              }),
              d
            );
          }
          ReadLocalizationData_CSV_LanguageColumns(g) {
            const d = new C();
            return (
              g.data.forEach((p) => {
                const F = p.field;
                for (let R = e.Bhc; R < e.bP9; ++R) {
                  const B = (0, e.x6o)((0, e.LgB)(R));
                  d.SetLocalization(F, R, p[B]);
                }
              }),
              d
            );
          }
          ReadLocalizationData_CSV_LanguageRows(g) {
            const d = new C();
            return (
              g.data.forEach((p) => {
                const F = (0, e.sfN)(p.language, e.bP9);
                if (F !== e.bP9)
                  for (const [R, B] of Object.entries(p))
                    R === "language" ||
                      typeof B != "string" ||
                      d.SetLocalization(R, F, B);
              }),
              d
            );
          }
          GetExportLanguages() {
            return I.A0.GetLanguageListForRealms([Y.TU.k_ESteamRealmGlobal]);
          }
          WriteLocalizationData_CSV_TokenAndLanguageColumns(g, d) {
            let p = new Array();
            g.GetSortedTokenList().forEach((R) => {
              for (const B of this.GetExportLanguages()) {
                let Z = { field: R };
                (Z.language = (0, e.x6o)((0, e.LgB)(B))),
                  (Z.value = g.GetLocalization(R, B)),
                  p.push(Z);
              }
            }),
              f.g.WriteCSVToFile(p, d);
          }
          WriteLocalizationData_CSV_LanguageColumns(g, d) {
            let p = new Array();
            g.GetSortedTokenList().forEach((R) => {
              let B = { field: R };
              for (const Z of this.GetExportLanguages())
                B[(0, e.x6o)((0, e.LgB)(Z))] = g.GetLocalization(R, Z);
              p.push(B);
            }),
              f.g.WriteCSVToFile(p, d);
          }
          WriteLocalizationData_CSV_LanguageRows(g, d) {
            let p = new Array();
            for (const R of this.GetExportLanguages())
              p.length <= R - 1 && p.push({ language: "" }),
                p.push({ language: (0, e.x6o)((0, e.LgB)(R)) });
            g.GetSortedTokenList().forEach((R) => {
              for (const B of this.GetExportLanguages()) {
                const Z = g.GetLocalization(R, B);
                p[B][R] = Z;
              }
            }),
              f.g.WriteCSVToFile(p, d);
          }
          WriteLocalizationData_XML_SingleLanguage(g, d, p) {
            let F = document.implementation.createDocument(
              null,
              "content",
              null,
            );
            g.GetSortedTokenList().forEach((B) => {
              let Z = F.createElement("string");
              Z.setAttribute("id", B),
                Z.appendChild(F.createTextNode(g.GetLocalization(B, d) || "")),
                F.documentElement.append(Z);
            }),
              f.g.WriteXMLToFile(F, p);
          }
        }
      },
      11259: (z) => {
        z.exports = {
          FAQDashboardPage: "_59oO6wefB3rQ2vFht_b50",
          FAQDashboard: "tIxuPSrF_izJyj_xSBAu",
          DashboardHeader: "_1fVLwDLknGBvNqXvbz5ieq",
          DashboardHeaderTitle: "_14k5Nx2pbJlfrumOKYilwb",
          DashboardHeaderButtonCtn: "MuQkNExZZvUGyooMU1W63",
          DashboardCreateFAQButton: "_3VW3jphjSrFsWyh8CQ7qkl",
          CreateFAQDialog: "_2053etsNH77sMt0UGZ7Gkf",
          NameInput: "_3qsK9sWwA8-5XRJijxOyAq",
          ErrorMsg: "_1MkpMd3IngFLh9Lj1YdVaZ",
          DashboardListHeaderRow: "_1m9z-QOtKB83PPSMvFp2qj",
          EntryColumn: "_29DifZl5OcFsMPwjVeSKul",
          NameCol: "_1fuClf4BBhhdkGW2AiR9xz",
          DataCol: "_31hg_XZCfqD4KpN77UoWpB",
          ClickableHeader: "_2dUdD5Bxvl5g7AXm74jlY-",
          DownArrow: "_30b5IzshpNjcRcDjnbiHHV",
          Selected: "_3_SL2rzskqZJldo0NVDRPy",
          BadCount: "_1kNWcaTgntfwrNOrNOdLEs",
          Visible: "pbhW7T1VOciPsM4805I5i",
          Hidden: "_2sNUoEB66JUcm-Y3kKrdL8",
          GoodCount: "M3TAP-1MxenvBQsT-eXlR",
          DateToolTip: "Q8C5pKiJQWiQxpeE9g5A0",
          DashboardEntry: "kcPTyksATgiPUcmwAwGOe",
          EntryInternalName: "_1sL5ykMb1b1-WfHxwf8L1K",
        };
      },
      63280: (z) => {
        z.exports = {
          FAQEditPage: "_2QALaQ13bEoS_oLFjL1prx",
          FAQMenuCtn: "_1DISv1JGZ0pxbGtYHeBsJU",
          FAQEditorCtn: "sjpl-ow0jbdSysRG8jsFA",
          FAQEditor: "_3YIwjQZlP_YdCZH2DIj5f7",
          Columns: "_2O3puXm5doASD7CnAby6Uh",
          LeftCol: "_3TyuR_ycmrQIlt-wuVBtaD",
          RightCol: "_33CjP7i4tMRCeZEcf-utD8",
          EditorSaveButton: "_22iwdea7XXbiuZrrLZUU11",
          EditorLabel: "_3jk92bsX5BdG6dMFNGNNKa",
          EditorTitleField: "_37R-2WttVdEqucotluEzW_",
          EditorTitleFieldInput: "_2A5OEhQlo5sJWuhIqlkEJL",
          TextPaneContainer: "X8FYVDc-yIJ2Vmr_KQW2b",
          EditorPane: "B4ngKzLlL1gvAnj9Vdbt4",
          EditorPaneTextArea: "_1g6voAO3uBDdj9W9WjBB8z",
          ErrorCtn: "_1l94et1-5wPLcAMJ3Bx8qq",
          ErrorMsg: "_1LIvQOeIKBZzearuGAM7FW",
          EscapeLink: "_3tlrRmfmxrdkbJRk48aZDb",
        };
      },
      93084: (z) => {
        z.exports = {
          LanguageListDialog: "vp5PFufZdDer7tZRg3jrX",
          ChecklistHeader: "_1VzmzM94XEt-kbk5N0Xcwm",
          ChecklistRows: "_3qgdWDwppIPmVUI3_-IoWg",
          CheckAll: "_1I_jAq3MJfhGnx3-H9fkRc",
          LanguageCheckbox: "_1llVI6GfKRzbQRSS7bS9sI",
          LanguageCheckboxLabel: "_2S_PZcuwqHb1BUGrd6Xvnk",
          Language: "_13DIWnUBOf_d2HSzZWW_72",
          Warning: "hGncGWqE9kTLXhxQe4SJ2",
          ImportProgressBar: "_1s2UZCHSCadxdeXsd6fbj6",
          ProgressMarker: "_2q-TdYLM1Zgn9tPZ3_1wCx",
          CurrentFAQ: "_1MsSLkJk0mX4ITyxy8mpEJ",
          LanguageList: "_28hYlCdWipXh9xN8jgf8ZT",
          ImportResults: "_2FKxIYwCCRBm_BH0BsKyem",
          ImportResultLabel: "_1_icUC7cNPpNZvq_qgQ33D",
          ImportResult: "_3h1LkNfeVLc44BAuHSBudK",
          UrlCode: "MxoxU6nWqZvCxgOlJxTvE",
        };
      },
      35707: (z) => {
        z.exports = {
          LeftMenu: "_1txmemUH3rosQe71mZfr0q",
          Section: "_2j-hhYTlI8Ntg1JrTWINdL",
          SectionContents: "_3lz4JUNpNDnahEyzj1eZkK",
          SectionDescription: "_3L68i4ZAokqaCqqk7yhIau",
          SectionTitle: "_23FTZuq9MQrukHrWgZMKrp",
          VisibilityCtn: "_16zchT5YPTg-YRcLmO7T1N",
          StatusRow: "_272D2JP0YHWH_sY_IP2MJQ",
          Global: "_1DcbV58-8H0QRtU4wmimaO",
          China: "_2cUtBQSP-uCM363ee58k-t",
          StatusBtnCtn: "HJUHTdNtL70vwUqYSh-FD",
          PublishCtn: "_2syC3PimmI-5viillwUd6d",
          PublishStatus: "uvzu3hbcsBlAoiPdATNbf",
          PublishBtn: "_3P52vp7DdW5ZKRbKrEsr64",
          FaqStatusTable: "pCBfTw19y3z1htRCTD7Sk",
        };
      },
      3063: (z) => {
        z.exports = {
          Never: "_8rlUGGeBnYbuZpSoMtPGY",
          Warning: "pZM2L30-1FOU9cbzqy1AQ",
        };
      },
      66444: (z) => {
        z.exports = {
          FAQUnPublished: "erZyIOjQA9q0Wv28vQPiN",
          FAQPublished: "_13Wz0jEDJuyCYIYT-3Nk8X",
          EditorInternalNameLabel: "_3fAcXrEhyNYZKLFAviS1gi",
          EditorInternalName: "_3A9ciQBxaVrGEWI6kD4zod",
        };
      },
      25651: (z) => {
        z.exports = {
          ErrorCtn: "_2Dpwh3MWbH9ND0PlNK8G7M",
          ErrorMsg: "_2dTNxR8PrLvqBwSUnhUVh5",
          EscapeLink: "_19BjjT3X_AZgLiL1pFYCDG",
        };
      },
      54736: (z) => {
        z.exports = {
          DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
          EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
          EventEditorBottomBar: "_1noS58WsfHN3KuGVDzlv9r",
          EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
          EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
          AdditionalContent: "_2fUl5vCnrlT9P7kskRIiWx",
        };
      },
      51520: (z) => {
        z.exports = {
          SavedImage: "_1y3QVgsz4daj3E3S5wzwt-",
          SaveButtonCtn: "_2Edwnbc-tjinTT_s7zIKTd",
          SaveButton: "_2hloqzkRkAWkw50l4XPN-N",
          HaventSavedInAShortTime: "_3xoBR2gVk2F0Bmejh20Yhl",
          HaventSavedInALongTime: "_1bg505mDp3agK0eHP0NoxI",
          Pulse: "_3oWE-wt1PQ7Rv2IJ0vCmO",
          SaveSuccessNotification: "_1gabCN13JTZzv2A2fXqGve",
          SaveSuccessTitle: "_1d5GXYH4AY9WFkoszJVzsQ",
          slideIn: "_2kGhkRiew8we__yyM1878e",
          slideOut: "_2oAIIbl5uoREv1Es4TZkUQ",
        };
      },
      91126: (z) => {
        z.exports = {
          ValveCrowdInSyncCtn: "_8MIrt7rQXkA0xE5sAjOee",
          ValveCrowdInSyncLabel: "_22b0C1Xi03QNdTFKsYypHR",
          SyncPanelError: "yn_yu2EaUigYFm9QQAD7o",
        };
      },
      28735: (z) => {
        z.exports = {
          FAQViewPage: "Ya530FSNxJ-2gfv0qDZYH",
          SupportTitle: "_2BcDfuiFQ7l7yWM5Sa57S0",
          Columns: "HGDD29L4B7rnyrKITC09v",
          LeftCol: "o2y9UpxW9WmUMsLua3flf",
          TopColorBar: "_2n5PMCTXeqy_BxVZeg6Avp",
          RightCol: "_2Ta3cow-y-8kUgXcCrCP97",
          SectionCtn: "_2wa31Vkjhr311VBcF_ynDO",
          FAQTopicCtn: "_38QJomTcPqyUVRdLpfVjGA",
          FAQTitle: "_3aInU3KIhHHBWOSOjNvcVa",
          FAQContent: "_2dSVnHyS9mTV4jJctbYCcy",
        };
      },
      20572: (z) => {
        z.exports = { InfoRow: "_3AG-7BbBE7Sw0efJrEb417" };
      },
      66891: (z) => {
        z.exports = {
          Section: "_3S-XzUnd8sYIE7sDuLmpPo",
          CommunityHelp: "_2TGFIDdCmMB614_-hieBc7",
          NeedHelp: "_1DywXfNVrbQvDpTJXgd18z",
          LeftCol: "_3gfCnqvp6FV0m9PqL9XMq",
          TopicHeader: "_3X6huZLPQI8y6LirxSv4Gy",
          CenterButtonCtn: "_3sZ58WE85Tqs8Bv8g-quYc",
        };
      },
      96471: (z) => {
        z.exports = {
          Label: "_1LhItwhLHspVcQdfcbd2Sg",
          ImportLocSampleButtonCtn: "D-1dlROLVuva-sb6tFgwU",
          SampleTitle: "_9189ilzQ3YES-a-6DyBhR",
          ImportButton: "WyfyxbGrKQq8cKMK5kfxE",
        };
      },
      40323: function (z, je) {
        var o, e, Y; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((y, f) => {
          (e = []),
            (o = f),
            (Y = typeof o == "function" ? o.apply(je, e) : o),
            Y !== void 0 && (z.exports = Y);
        })(this, function y() {
          var f =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : f !== void 0
                    ? f
                    : {},
            I,
            C = !f.document && !!f.postMessage,
            $ = f.IS_PAPA_WORKER || !1,
            ge = {},
            g = 0,
            d = {};
          function p(n) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (t) {
                var c = v(t);
                (c.chunkSize = parseInt(c.chunkSize)),
                  t.step || t.chunk || (c.chunkSize = null),
                  (this._handle = new U(c)),
                  ((this._handle.streamer = this)._config = c);
              }.call(this, n),
              (this.parseChunk = function (t, c) {
                var h = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < h) {
                  let x = this._config.newline;
                  x ||
                    ((m = this._config.quoteChar || '"'),
                    (x = this._handle.guessLineEndings(t, m))),
                    (t = [...t.split(x).slice(h)].join(x));
                }
                this.isFirstChunk &&
                  j(this._config.beforeFirstChunk) &&
                  (m = this._config.beforeFirstChunk(t)) !== void 0 &&
                  (t = m),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var h = this._partialLine + t,
                  m =
                    ((this._partialLine = ""),
                    this._handle.parse(h, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((t = m.meta.cursor),
                    (h =
                      (this._finished ||
                        ((this._partialLine = h.substring(t - this._baseIndex)),
                        (this._baseIndex = t)),
                      m && m.data && (this._rowCount += m.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    $)
                  )
                    f.postMessage({
                      results: m,
                      workerId: d.WORKER_ID,
                      finished: h,
                    });
                  else if (j(this._config.chunk) && !c) {
                    if (
                      (this._config.chunk(m, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = m = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(m.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(m.errors)),
                      (this._completeResults.meta = m.meta)),
                    this._completed ||
                      !h ||
                      !j(this._config.complete) ||
                      (m && m.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    h || (m && m.meta.paused) || this._nextChunk(),
                    m
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (t) {
                j(this._config.error)
                  ? this._config.error(t)
                  : $ &&
                    this._config.error &&
                    f.postMessage({
                      workerId: d.WORKER_ID,
                      error: t,
                      finished: !1,
                    });
              });
          }
          function F(n) {
            var t;
            (n = n || {}).chunkSize || (n.chunkSize = d.RemoteChunkSize),
              p.call(this, n),
              (this._nextChunk = C
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (c) {
                (this._input = c), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((t = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (t.withCredentials = this._config.withCredentials),
                    C ||
                      ((t.onload = me(this._chunkLoaded, this)),
                      (t.onerror = me(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !C,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var c,
                      h = this._config.downloadRequestHeaders;
                    for (c in h) t.setRequestHeader(c, h[c]);
                  }
                  var m;
                  this._config.chunkSize &&
                    ((m = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + m,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (x) {
                    this._chunkError(x.message);
                  }
                  C && t.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                t.readyState === 4 &&
                  (t.status < 200 || 400 <= t.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || t.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((c) =>
                            (c = c.getResponseHeader("Content-Range")) !== null
                              ? parseInt(c.substring(c.lastIndexOf("/") + 1))
                              : -1)(t)),
                      this.parseChunk(t.responseText)));
              }),
              (this._chunkError = function (c) {
                (c = t.statusText || c), this._sendError(new Error(c));
              });
          }
          function R(n) {
            (n = n || {}).chunkSize || (n.chunkSize = d.LocalChunkSize),
              p.call(this, n);
            var t,
              c,
              h = typeof FileReader < "u";
            (this.stream = function (m) {
              (this._input = m),
                (c = m.slice || m.webkitSlice || m.mozSlice),
                h
                  ? (((t = new FileReader()).onload = me(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = me(this._chunkError, this)))
                  : (t = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var m = this._input,
                  x =
                    (this._config.chunkSize &&
                      ((x = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (m = c.call(m, this._start, x))),
                    t.readAsText(m, this._config.encoding));
                h || this._chunkLoaded({ target: { result: x } });
              }),
              (this._chunkLoaded = function (m) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(m.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(t.error);
              });
          }
          function B(n) {
            var t;
            p.call(this, (n = n || {})),
              (this.stream = function (c) {
                return (t = c), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var c, h;
                if (!this._finished)
                  return (
                    (c = this._config.chunkSize),
                    (t = c
                      ? ((h = t.substring(0, c)), t.substring(c))
                      : ((h = t), "")),
                    (this._finished = !t),
                    this.parseChunk(h)
                  );
              });
          }
          function Z(n) {
            p.call(this, (n = n || {}));
            var t = [],
              c = !0,
              h = !1;
            (this.pause = function () {
              p.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                p.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (m) {
                (this._input = m),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                h && t.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (c = !0);
              }),
              (this._streamData = me(function (m) {
                try {
                  t.push(
                    typeof m == "string"
                      ? m
                      : m.toString(this._config.encoding),
                  ),
                    c &&
                      ((c = !1),
                      this._checkIsFinished(),
                      this.parseChunk(t.shift()));
                } catch (x) {
                  this._streamError(x);
                }
              }, this)),
              (this._streamError = me(function (m) {
                this._streamCleanUp(), this._sendError(m);
              }, this)),
              (this._streamEnd = me(function () {
                this._streamCleanUp(), (h = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = me(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function U(n) {
            var t,
              c,
              h,
              m,
              x = Math.pow(2, 53),
              N = -x,
              V = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              ee =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              w = this,
              L = 0,
              S = 0,
              te = !1,
              Q = !1,
              O = [],
              b = { data: [], errors: [], meta: {} };
            function pe(M) {
              return n.skipEmptyLines === "greedy"
                ? M.join("").trim() === ""
                : M.length === 1 && M[0].length === 0;
            }
            function _e() {
              if (
                (b &&
                  h &&
                  (we(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      d.DefaultDelimiter +
                      "'",
                  ),
                  (h = !1)),
                n.skipEmptyLines &&
                  (b.data = b.data.filter(function (ae) {
                    return !pe(ae);
                  })),
                Ee())
              ) {
                let ae = function (ve, ie) {
                  j(n.transformHeader) && (ve = n.transformHeader(ve, ie)),
                    O.push(ve);
                };
                var k = ae;
                if (b)
                  if (Array.isArray(b.data[0])) {
                    for (var M = 0; Ee() && M < b.data.length; M++)
                      b.data[M].forEach(ae);
                    b.data.splice(0, 1);
                  } else b.data.forEach(ae);
              }
              function W(ae, ve) {
                for (var ie = n.header ? {} : [], J = 0; J < ae.length; J++) {
                  var G = J,
                    xe = ae[J],
                    xe = ((K, ne) =>
                      ((fe) => (
                        n.dynamicTypingFunction &&
                          n.dynamicTyping[fe] === void 0 &&
                          (n.dynamicTyping[fe] = n.dynamicTypingFunction(fe)),
                        (n.dynamicTyping[fe] || n.dynamicTyping) === !0
                      ))(K)
                        ? ne === "true" ||
                          ne === "TRUE" ||
                          (ne !== "false" &&
                            ne !== "FALSE" &&
                            (((fe) => {
                              if (
                                V.test(fe) &&
                                ((fe = parseFloat(fe)), N < fe && fe < x)
                              )
                                return 1;
                            })(ne)
                              ? parseFloat(ne)
                              : ee.test(ne)
                                ? new Date(ne)
                                : ne === ""
                                  ? null
                                  : ne))
                        : ne)(
                      (G = n.header
                        ? J >= O.length
                          ? "__parsed_extra"
                          : O[J]
                        : G),
                      (xe = n.transform ? n.transform(xe, G) : xe),
                    );
                  G === "__parsed_extra"
                    ? ((ie[G] = ie[G] || []), ie[G].push(xe))
                    : (ie[G] = xe);
                }
                return (
                  n.header &&
                    (J > O.length
                      ? we(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            O.length +
                            " fields but parsed " +
                            J,
                          S + ve,
                        )
                      : J < O.length &&
                        we(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            O.length +
                            " fields but parsed " +
                            J,
                          S + ve,
                        )),
                  ie
                );
              }
              var le;
              b &&
                (n.header || n.dynamicTyping || n.transform) &&
                ((le = 1),
                !b.data.length || Array.isArray(b.data[0])
                  ? ((b.data = b.data.map(W)), (le = b.data.length))
                  : (b.data = W(b.data, 0)),
                n.header && b.meta && (b.meta.fields = O),
                (S += le));
            }
            function Ee() {
              return n.header && O.length === 0;
            }
            function we(M, W, le, k) {
              (M = { type: M, code: W, message: le }),
                k !== void 0 && (M.row = k),
                b.errors.push(M);
            }
            j(n.step) &&
              ((m = n.step),
              (n.step = function (M) {
                (b = M),
                  Ee()
                    ? _e()
                    : (_e(),
                      b.data.length !== 0 &&
                        ((L += M.data.length),
                        n.preview && L > n.preview
                          ? c.abort()
                          : ((b.data = b.data[0]), m(b, w))));
              })),
              (this.parse = function (M, W, le) {
                var k = n.quoteChar || '"',
                  k =
                    (n.newline || (n.newline = this.guessLineEndings(M, k)),
                    (h = !1),
                    n.delimiter
                      ? j(n.delimiter) &&
                        ((n.delimiter = n.delimiter(M)),
                        (b.meta.delimiter = n.delimiter))
                      : ((k = ((ae, ve, ie, J, G) => {
                          var xe, K, ne, fe;
                          G = G || [
                            ",",
                            "	",
                            "|",
                            ";",
                            d.RECORD_SEP,
                            d.UNIT_SEP,
                          ];
                          for (var Ne = 0; Ne < G.length; Ne++) {
                            for (
                              var Fe,
                                Qe = G[Ne],
                                Le = 0,
                                Te = 0,
                                se = 0,
                                Ce =
                                  ((ne = void 0),
                                  new E({
                                    comments: J,
                                    delimiter: Qe,
                                    newline: ve,
                                    preview: 10,
                                  }).parse(ae)),
                                Se = 0;
                              Se < Ce.data.length;
                              Se++
                            )
                              ie && pe(Ce.data[Se])
                                ? se++
                                : ((Fe = Ce.data[Se].length),
                                  (Te += Fe),
                                  ne === void 0
                                    ? (ne = Fe)
                                    : 0 < Fe &&
                                      ((Le += Math.abs(Fe - ne)), (ne = Fe)));
                            0 < Ce.data.length && (Te /= Ce.data.length - se),
                              (K === void 0 || Le <= K) &&
                                (fe === void 0 || fe < Te) &&
                                1.99 < Te &&
                                ((K = Le), (xe = Qe), (fe = Te));
                          }
                          return {
                            successful: !!(n.delimiter = xe),
                            bestDelimiter: xe,
                          };
                        })(
                          M,
                          n.newline,
                          n.skipEmptyLines,
                          n.comments,
                          n.delimitersToGuess,
                        )).successful
                          ? (n.delimiter = k.bestDelimiter)
                          : ((h = !0), (n.delimiter = d.DefaultDelimiter)),
                        (b.meta.delimiter = n.delimiter)),
                    v(n));
                return (
                  n.preview && n.header && k.preview++,
                  (t = M),
                  (c = new E(k)),
                  (b = c.parse(t, W, le)),
                  _e(),
                  te ? { meta: { paused: !0 } } : b || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return te;
              }),
              (this.pause = function () {
                (te = !0),
                  c.abort(),
                  (t = j(n.chunk) ? "" : t.substring(c.getCharIndex()));
              }),
              (this.resume = function () {
                w.streamer._halted
                  ? ((te = !1), w.streamer.parseChunk(t, !0))
                  : setTimeout(w.resume, 3);
              }),
              (this.aborted = function () {
                return Q;
              }),
              (this.abort = function () {
                (Q = !0),
                  c.abort(),
                  (b.meta.aborted = !0),
                  j(n.complete) && n.complete(b),
                  (t = "");
              }),
              (this.guessLineEndings = function (ae, k) {
                ae = ae.substring(0, 1048576);
                var k = new RegExp(ue(k) + "([^]*?)" + ue(k), "gm"),
                  le = (ae = ae.replace(k, "")).split("\r"),
                  k = ae.split(`
`),
                  ae = 1 < k.length && k[0].length < le[0].length;
                if (le.length === 1 || ae)
                  return `
`;
                for (var ve = 0, ie = 0; ie < le.length; ie++)
                  le[ie][0] ===
                    `
` && ve++;
                return ve >= le.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function ue(n) {
            return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function E(n) {
            var t = (n = n || {}).delimiter,
              c = n.newline,
              h = n.comments,
              m = n.step,
              x = n.preview,
              N = n.fastMode,
              V = null,
              ee = !1,
              w = n.quoteChar == null ? '"' : n.quoteChar,
              L = w;
            if (
              (n.escapeChar !== void 0 && (L = n.escapeChar),
              (typeof t != "string" || -1 < d.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              h === t)
            )
              throw new Error("Comment character same as delimiter");
            h === !0
              ? (h = "#")
              : (typeof h != "string" || -1 < d.BAD_DELIMITERS.indexOf(h)) &&
                (h = !1),
              c !==
                `
` &&
                c !== "\r" &&
                c !==
                  `\r
` &&
                (c = `
`);
            var S = 0,
              te = !1;
            (this.parse = function (Q, O, b) {
              if (typeof Q != "string")
                throw new Error("Input must be a string");
              var pe = Q.length,
                _e = t.length,
                Ee = c.length,
                we = h.length,
                M = j(m),
                W = [],
                le = [],
                k = [],
                ae = (S = 0);
              if (!Q) return Le();
              if (N || (N !== !1 && Q.indexOf(w) === -1)) {
                for (var ve = Q.split(c), ie = 0; ie < ve.length; ie++) {
                  if (((k = ve[ie]), (S += k.length), ie !== ve.length - 1))
                    S += c.length;
                  else if (b) return Le();
                  if (!h || k.substring(0, we) !== h) {
                    if (M) {
                      if (((W = []), fe(k.split(t)), Te(), te)) return Le();
                    } else fe(k.split(t));
                    if (x && x <= ie) return (W = W.slice(0, x)), Le(!0);
                  }
                }
                return Le();
              }
              for (
                var J = Q.indexOf(t, S),
                  G = Q.indexOf(c, S),
                  xe = new RegExp(ue(L) + ue(w), "g"),
                  K = Q.indexOf(w, S);
                ;
              )
                if (Q[S] === w)
                  for (K = S, S++; ; ) {
                    if ((K = Q.indexOf(w, K + 1)) === -1)
                      return (
                        b ||
                          le.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: W.length,
                            index: S,
                          }),
                        Fe()
                      );
                    if (K === pe - 1)
                      return Fe(Q.substring(S, K).replace(xe, w));
                    if (w === L && Q[K + 1] === L) K++;
                    else if (w === L || K === 0 || Q[K - 1] !== L) {
                      J !== -1 && J < K + 1 && (J = Q.indexOf(t, K + 1));
                      var ne = Ne(
                        (G =
                          G !== -1 && G < K + 1 ? Q.indexOf(c, K + 1) : G) ===
                          -1
                          ? J
                          : Math.min(J, G),
                      );
                      if (Q.substr(K + 1 + ne, _e) === t) {
                        k.push(Q.substring(S, K).replace(xe, w)),
                          Q[(S = K + 1 + ne + _e)] !== w &&
                            (K = Q.indexOf(w, S)),
                          (J = Q.indexOf(t, S)),
                          (G = Q.indexOf(c, S));
                        break;
                      }
                      if (
                        ((ne = Ne(G)),
                        Q.substring(K + 1 + ne, K + 1 + ne + Ee) === c)
                      ) {
                        if (
                          (k.push(Q.substring(S, K).replace(xe, w)),
                          Qe(K + 1 + ne + Ee),
                          (J = Q.indexOf(t, S)),
                          (K = Q.indexOf(w, S)),
                          M && (Te(), te))
                        )
                          return Le();
                        if (x && W.length >= x) return Le(!0);
                        break;
                      }
                      le.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: W.length,
                        index: S,
                      }),
                        K++;
                    }
                  }
                else if (h && k.length === 0 && Q.substring(S, S + we) === h) {
                  if (G === -1) return Le();
                  (S = G + Ee), (G = Q.indexOf(c, S)), (J = Q.indexOf(t, S));
                } else if (J !== -1 && (J < G || G === -1))
                  k.push(Q.substring(S, J)),
                    (S = J + _e),
                    (J = Q.indexOf(t, S));
                else {
                  if (G === -1) break;
                  if ((k.push(Q.substring(S, G)), Qe(G + Ee), M && (Te(), te)))
                    return Le();
                  if (x && W.length >= x) return Le(!0);
                }
              return Fe();
              function fe(se) {
                W.push(se), (ae = S);
              }
              function Ne(se) {
                var Ce = 0;
                return (Ce =
                  se !== -1 && (se = Q.substring(K + 1, se)) && se.trim() === ""
                    ? se.length
                    : Ce);
              }
              function Fe(se) {
                return (
                  b ||
                    (se === void 0 && (se = Q.substring(S)),
                    k.push(se),
                    (S = pe),
                    fe(k),
                    M && Te()),
                  Le()
                );
              }
              function Qe(se) {
                (S = se), fe(k), (k = []), (G = Q.indexOf(c, S));
              }
              function Le(se) {
                if (n.header && !O && W.length && !ee) {
                  var Ce = W[0],
                    Se = Object.create(null),
                    ze = new Set(Ce);
                  let We = !1;
                  for (let Re = 0; Re < Ce.length; Re++) {
                    let ye = Ce[Re];
                    if (
                      Se[
                        (ye = j(n.transformHeader)
                          ? n.transformHeader(ye, Re)
                          : ye)
                      ]
                    ) {
                      let Be,
                        Me = Se[ye];
                      for (; (Be = ye + "_" + Me), Me++, ze.has(Be); );
                      ze.add(Be),
                        (Ce[Re] = Be),
                        Se[ye]++,
                        (We = !0),
                        ((V = V === null ? {} : V)[Be] = ye);
                    } else (Se[ye] = 1), (Ce[Re] = ye);
                    ze.add(ye);
                  }
                  We && console.warn("Duplicate headers found and renamed."),
                    (ee = !0);
                }
                return {
                  data: W,
                  errors: le,
                  meta: {
                    delimiter: t,
                    linebreak: c,
                    aborted: te,
                    truncated: !!se,
                    cursor: ae + (O || 0),
                    renamedHeaders: V,
                  },
                };
              }
              function Te() {
                m(Le()), (W = []), (le = []);
              }
            }),
              (this.abort = function () {
                te = !0;
              }),
              (this.getCharIndex = function () {
                return S;
              });
          }
          function s(n) {
            var t = n.data,
              c = ge[t.workerId],
              h = !1;
            if (t.error) c.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var m = {
                abort: function () {
                  (h = !0),
                    oe(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: he,
                resume: he,
              };
              if (j(c.userStep)) {
                for (
                  var x = 0;
                  x < t.results.data.length &&
                  (c.userStep(
                    {
                      data: t.results.data[x],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    m,
                  ),
                  !h);
                  x++
                );
                delete t.results;
              } else
                j(c.userChunk) &&
                  (c.userChunk(t.results, m, t.file), delete t.results);
            }
            t.finished && !h && oe(t.workerId, t.results);
          }
          function oe(n, t) {
            var c = ge[n];
            j(c.userComplete) && c.userComplete(t), c.terminate(), delete ge[n];
          }
          function he() {
            throw new Error("Not implemented.");
          }
          function v(n) {
            if (typeof n != "object" || n === null) return n;
            var t,
              c = Array.isArray(n) ? [] : {};
            for (t in n) c[t] = v(n[t]);
            return c;
          }
          function me(n, t) {
            return function () {
              n.apply(t, arguments);
            };
          }
          function j(n) {
            return typeof n == "function";
          }
          return (
            (d.parse = function (n, t) {
              var c = (t = t || {}).dynamicTyping || !1;
              if (
                (j(c) && ((t.dynamicTypingFunction = c), (c = {})),
                (t.dynamicTyping = c),
                (t.transform = !!j(t.transform) && t.transform),
                !t.worker || !d.WORKERS_SUPPORTED)
              )
                return (
                  (c = null),
                  d.NODE_STREAM_INPUT,
                  typeof n == "string"
                    ? ((n = ((h) =>
                        h.charCodeAt(0) !== 65279 ? h : h.slice(1))(n)),
                      (c = new (t.download ? F : B)(t)))
                    : n.readable === !0 && j(n.read) && j(n.on)
                      ? (c = new Z(t))
                      : ((f.File && n instanceof File) ||
                          n instanceof Object) &&
                        (c = new R(t)),
                  c.stream(n)
                );
              ((c = (() => {
                var h;
                return (
                  !!d.WORKERS_SUPPORTED &&
                  ((h = (() => {
                    var m = f.URL || f.webkitURL || null,
                      x = y.toString();
                    return (
                      d.BLOB_URL ||
                      (d.BLOB_URL = m.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            x,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((h = new f.Worker(h)).onmessage = s),
                  (h.id = g++),
                  (ge[h.id] = h))
                );
              })()).userStep = t.step),
                (c.userChunk = t.chunk),
                (c.userComplete = t.complete),
                (c.userError = t.error),
                (t.step = j(t.step)),
                (t.chunk = j(t.chunk)),
                (t.complete = j(t.complete)),
                (t.error = j(t.error)),
                delete t.worker,
                c.postMessage({ input: n, config: t, workerId: c.id });
            }),
            (d.unparse = function (n, t) {
              var c = !1,
                h = !0,
                m = ",",
                x = `\r
`,
                N = '"',
                V = N + N,
                ee = !1,
                w = null,
                L = !1,
                S =
                  ((() => {
                    if (typeof t == "object") {
                      if (
                        (typeof t.delimiter != "string" ||
                          d.BAD_DELIMITERS.filter(function (O) {
                            return t.delimiter.indexOf(O) !== -1;
                          }).length ||
                          (m = t.delimiter),
                        (typeof t.quotes != "boolean" &&
                          typeof t.quotes != "function" &&
                          !Array.isArray(t.quotes)) ||
                          (c = t.quotes),
                        (typeof t.skipEmptyLines != "boolean" &&
                          typeof t.skipEmptyLines != "string") ||
                          (ee = t.skipEmptyLines),
                        typeof t.newline == "string" && (x = t.newline),
                        typeof t.quoteChar == "string" && (N = t.quoteChar),
                        typeof t.header == "boolean" && (h = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (t.columns.length === 0)
                          throw new Error("Option columns is empty");
                        w = t.columns;
                      }
                      t.escapeChar !== void 0 && (V = t.escapeChar + N),
                        t.escapeFormulae instanceof RegExp
                          ? (L = t.escapeFormulae)
                          : typeof t.escapeFormulae == "boolean" &&
                            t.escapeFormulae &&
                            (L = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(ue(N), "g"));
              if (
                (typeof n == "string" && (n = JSON.parse(n)), Array.isArray(n))
              ) {
                if (!n.length || Array.isArray(n[0])) return te(null, n, ee);
                if (typeof n[0] == "object")
                  return te(w || Object.keys(n[0]), n, ee);
              } else if (typeof n == "object")
                return (
                  typeof n.data == "string" && (n.data = JSON.parse(n.data)),
                  Array.isArray(n.data) &&
                    (n.fields || (n.fields = (n.meta && n.meta.fields) || w),
                    n.fields ||
                      (n.fields = Array.isArray(n.data[0])
                        ? n.fields
                        : typeof n.data[0] == "object"
                          ? Object.keys(n.data[0])
                          : []),
                    Array.isArray(n.data[0]) ||
                      typeof n.data[0] == "object" ||
                      (n.data = [n.data])),
                  te(n.fields || [], n.data || [], ee)
                );
              throw new Error("Unable to serialize unrecognized input");
              function te(O, b, pe) {
                var _e = "",
                  Ee =
                    (typeof O == "string" && (O = JSON.parse(O)),
                    typeof b == "string" && (b = JSON.parse(b)),
                    Array.isArray(O) && 0 < O.length),
                  we = !Array.isArray(b[0]);
                if (Ee && h) {
                  for (var M = 0; M < O.length; M++)
                    0 < M && (_e += m), (_e += Q(O[M], M));
                  0 < b.length && (_e += x);
                }
                for (var W = 0; W < b.length; W++) {
                  var le = (Ee ? O : b[W]).length,
                    k = !1,
                    ae = Ee
                      ? Object.keys(b[W]).length === 0
                      : b[W].length === 0;
                  if (
                    (pe &&
                      !Ee &&
                      (k =
                        pe === "greedy"
                          ? b[W].join("").trim() === ""
                          : b[W].length === 1 && b[W][0].length === 0),
                    pe === "greedy" && Ee)
                  ) {
                    for (var ve = [], ie = 0; ie < le; ie++) {
                      var J = we ? O[ie] : ie;
                      ve.push(b[W][J]);
                    }
                    k = ve.join("").trim() === "";
                  }
                  if (!k) {
                    for (var G = 0; G < le; G++) {
                      0 < G && !ae && (_e += m);
                      var xe = Ee && we ? O[G] : G;
                      _e += Q(b[W][xe], G);
                    }
                    W < b.length - 1 && (!pe || (0 < le && !ae)) && (_e += x);
                  }
                }
                return _e;
              }
              function Q(O, b) {
                var pe, _e;
                return O == null
                  ? ""
                  : O.constructor === Date
                    ? JSON.stringify(O).slice(1, 25)
                    : ((_e = !1),
                      L &&
                        typeof O == "string" &&
                        L.test(O) &&
                        ((O = "'" + O), (_e = !0)),
                      (pe = O.toString().replace(S, V)),
                      (_e =
                        _e ||
                        c === !0 ||
                        (typeof c == "function" && c(O, b)) ||
                        (Array.isArray(c) && c[b]) ||
                        ((Ee, we) => {
                          for (var M = 0; M < we.length; M++)
                            if (-1 < Ee.indexOf(we[M])) return !0;
                          return !1;
                        })(pe, d.BAD_DELIMITERS) ||
                        -1 < pe.indexOf(m) ||
                        pe.charAt(0) === " " ||
                        pe.charAt(pe.length - 1) === " ")
                        ? N + pe + N
                        : pe);
              }
            }),
            (d.RECORD_SEP = ""),
            (d.UNIT_SEP = ""),
            (d.BYTE_ORDER_MARK = "\uFEFF"),
            (d.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              d.BYTE_ORDER_MARK,
            ]),
            (d.WORKERS_SUPPORTED = !C && !!f.Worker),
            (d.NODE_STREAM_INPUT = 1),
            (d.LocalChunkSize = 10485760),
            (d.RemoteChunkSize = 5242880),
            (d.DefaultDelimiter = ","),
            (d.Parser = E),
            (d.ParserHandle = U),
            (d.NetworkStreamer = F),
            (d.FileStreamer = R),
            (d.StringStreamer = B),
            (d.ReadableStreamStreamer = Z),
            f.jQuery &&
              ((I = f.jQuery).fn.parse = function (n) {
                var t = n.config || {},
                  c = [];
                return (
                  this.each(function (x) {
                    if (
                      !(
                        I(this).prop("tagName").toUpperCase() === "INPUT" &&
                        I(this).attr("type").toLowerCase() === "file" &&
                        f.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var N = 0; N < this.files.length; N++)
                      c.push({
                        file: this.files[N],
                        inputElem: this,
                        instanceConfig: I.extend({}, t),
                      });
                  }),
                  h(),
                  this
                );
                function h() {
                  if (c.length === 0) j(n.complete) && n.complete();
                  else {
                    var x,
                      N,
                      V,
                      ee,
                      w = c[0];
                    if (j(n.before)) {
                      var L = n.before(w.file, w.inputElem);
                      if (typeof L == "object") {
                        if (L.action === "abort")
                          return (
                            (x = "AbortError"),
                            (N = w.file),
                            (V = w.inputElem),
                            (ee = L.reason),
                            void (j(n.error) && n.error({ name: x }, N, V, ee))
                          );
                        if (L.action === "skip") return void m();
                        typeof L.config == "object" &&
                          (w.instanceConfig = I.extend(
                            w.instanceConfig,
                            L.config,
                          ));
                      } else if (L === "skip") return void m();
                    }
                    var S = w.instanceConfig.complete;
                    (w.instanceConfig.complete = function (te) {
                      j(S) && S(te, w.file, w.inputElem), m();
                    }),
                      d.parse(w.file, w.instanceConfig);
                  }
                }
                function m() {
                  c.splice(0, 1), h();
                }
              }),
            $ &&
              (f.onmessage = function (n) {
                (n = n.data),
                  d.WORKER_ID === void 0 && n && (d.WORKER_ID = n.workerId),
                  typeof n.input == "string"
                    ? f.postMessage({
                        workerId: d.WORKER_ID,
                        results: d.parse(n.input, n.config),
                        finished: !0,
                      })
                    : ((f.File && n.input instanceof File) ||
                        n.input instanceof Object) &&
                      (n = d.parse(n.input, n.config)) &&
                      f.postMessage({
                        workerId: d.WORKER_ID,
                        results: n,
                        finished: !0,
                      });
              }),
            ((F.prototype = Object.create(p.prototype)).constructor = F),
            ((R.prototype = Object.create(p.prototype)).constructor = R),
            ((B.prototype = Object.create(B.prototype)).constructor = B),
            ((Z.prototype = Object.create(p.prototype)).constructor = Z),
            d
          );
        });
      },
      59461: (z, je, o) => {
        "use strict";
        o.d(je, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=";
      },
      26759: (z, je, o) => {
        "use strict";
        o.d(je, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
      },
    },
  ]);
})();
