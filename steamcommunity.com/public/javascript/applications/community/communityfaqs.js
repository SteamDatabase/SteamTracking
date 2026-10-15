/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [43781],
    {
      56585: (W, be, o) => {
        "use strict";
        o.d(be, {
          IB: () => f,
          IW: () => O,
          Wj: () => C,
          X0: () => v,
          r$: () => B,
          yW: () => p,
        });
        var e = o(7850),
          q = o(72604),
          Q = o(35038),
          g = o(88942),
          N = o(61739),
          S = o(68312),
          re = o(98112),
          ge = o(90626);
        function G(_) {
          const n = (0, S.KV)(),
            ae = (0, g.I)({
              queryKey: _.queryKey,
              queryFn: async () => _.queryFn(n, ..._.args),
            });
          return _.children(ae);
        }
        function C(_, n) {
          const ae = (0, S.KV)();
          return (0, g.I)({
            queryKey: [
              "crowdin_metadata_for_clan_event",
              _.ConvertTo64BitString(),
              n,
            ],
            queryFn: async () => {
              const ie = Q.w.Init(re.$5);
              ie.Body().set_steamid(_.ConvertTo64BitString()),
                ie.Body().set_itemid(n);
              const L = await re.BE.GetClanEventCrowdInMetadata(ae, ie);
              return L.GetEResult() != q.R ? null : L.Body().toObject();
            },
          });
        }
        async function J(_, n) {
          const ae = Q.w.Init(re.hA);
          ae.Body().set_steamid(n);
          const ie = await re.BE.GetClanCrowdInMetadata(_, ae);
          if (ie.GetEResult() === q.p)
            return {
              crowdin_project_id: null,
              crowdin_directory_id: null,
              push_by_default: !1,
            };
          if (ie.GetEResult() !== q.R) throw ie.GetEResult();
          return ie.Body().toObject();
        }
        function f(_) {
          const n = (0, S.KV)();
          return (0, g.I)({
            queryKey: ["clan_crowdin_mapping", _],
            queryFn: async () => await J(n, _),
          });
        }
        function v(_) {
          return G({
            queryKey: ["clan_crowdin_mapping", _.clanSteamId],
            queryFn: J,
            args: [_.clanSteamId],
            children: _.children,
          });
        }
        const p = (0, ge.createContext)(null);
        function B(_) {
          const n = f(_.clanInfo.clanSteamID.ConvertTo64BitString());
          let ae = !1;
          return (
            n.isSuccess && (ae = n.data.push_by_default),
            (0, e.jsx)(p.Provider, {
              value: {
                clanSteamId: _.clanInfo.clanSteamID,
                bPushToCrowdInByDefault: ae,
              },
              children: _.children,
            })
          );
        }
        async function x(_, n, ae, ie) {
          const L = Q.w.Init(re.v7);
          L.Body().set_language(ie),
            L.Body().set_steamid(n),
            L.Body().set_itemid(ae);
          const me = await re.BE.FetchTranslationFromCrowdIn(_, L);
          if (me.GetEResult() != q.R)
            throw new Error(
              `Error from FetchLocalizationForClanEventFromCrowdIn: ${me.GetErrorMessage()} (${me.GetEResult()})`,
            );
          return me.Body().toObject();
        }
        function O(_, n, ae) {
          const ie = (0, S.KV)();
          return (0, N.n)({
            mutationKey: ["fetch_translation_for_clan_event", _, n, ae],
            mutationFn: async function () {
              return await x(ie, _, n, ae);
            },
            retry: !1,
          });
        }
      },
      84647: (W, be, o) => {
        "use strict";
        o.r(be), o.d(be, { FAQRoutes: () => Ge, default: () => Yt });
        var e = o(7850),
          q = o(75844),
          Q = o(90626),
          g = o(99412),
          N = o(90395),
          S = o(19316),
          re = o(92757),
          ge = o(17083),
          G = o(3166),
          C = ((i) => (
            (i.k_eView = "view"),
            (i.k_eCommunityView = "communityview"),
            (i.k_eCommunityEdit = "edit"),
            (i.k_eCommunityDashboard = "dashboard"),
            (i.k_eCommunityPreview = "preview"),
            i
          ))(C || {});
        const J = (i) => {
          const { route: a, faqid: r } = i,
            l = f(a, r);
          return i.bForceRedirect
            ? (0, e.jsx)(re.rd, { push: !0, to: l })
            : i.bForceAnchor
              ? (0, e.jsx)("a", {
                  href: G.TS.COMMUNITY_BASE_URL.slice(0, -1) + l,
                  className: i.className,
                  children: i.children,
                })
              : (0, e.jsx)(ge.N_, {
                  to: l,
                  className: i.className,
                  children: i.children,
                });
        };
        function f(i, a) {
          let r = "/faqs/" + G.UF.VANITY_ID + "/";
          switch (i) {
            case "view":
            case "communityview":
              r += "view/" + (0, N.Wj)(a);
              break;
            case "edit":
              r += "edit/" + (0, N.Wj)(a);
              break;
            case "dashboard":
              r += "dashboard";
              break;
            case "preview":
              r += "preview/" + (0, N.Wj)(a);
              break;
          }
          return r;
        }
        var v = o(2801),
          p = o(88003),
          B = o(36118),
          x = o(85599),
          O = o(71421),
          _ = o(36707),
          n = o(18210),
          ae = o(48473),
          ie = o(11259),
          L = o.n(ie),
          me = o(14947),
          I = o(72604),
          s = o(37739),
          t = o.n(s),
          d = o(76559),
          u = o(95695),
          h = o.n(u),
          D = o(26251),
          y = o(47689),
          H = o(82734),
          ne = o(92264),
          F = o(20398),
          P = o(93084),
          T = o(35098);
        const Z = "title",
          R = "content";
        function U(i, a) {
          var r, l;
          let c = new F.G();
          for (let m = g.Bhc; m < g.bP9; ++m)
            (i.BHasSomeTextForLanguage(m) || g.Bhc == a) &&
              (c.SetLocalization(
                Z,
                m,
                (r = i.GetDraftTitle(m)) != null ? r : "",
              ),
              c.SetLocalization(
                R,
                m,
                (l = i.GetDraftContent(m)) != null ? l : "",
              ));
          return c;
        }
        function b(i, a, r) {
          const l = new Set(),
            c = a.GetSortedTokenList();
          return (
            (0, me.h5)(() => {
              r.forEach((m) => {
                let E = !1;
                c.forEach((A) => {
                  const w = a.GetLocalization(A, m) || "";
                  if (A === Z) {
                    const j = i.GetDraftTitle(m);
                    (w || (j && j.length > 0)) &&
                      (i.SetDraftTitle(m, w), (E = !0));
                  }
                  if (A === R) {
                    const j = i.GetDraftContent(m);
                    (w || (j && j.length > 0)) &&
                      (i.SetDraftContent(m, w), (E = !0));
                  }
                }),
                  l.add(m);
              });
            }),
            Array.from(l)
          );
        }
        const ve = (i) => {
            const { draft: a, eLanguage: r } = i;
            return (0, e.jsxs)("div", {
              className: u.FlexRowContainer,
              children: [
                (0, e.jsx)(we, { draft: a, eLanguage: r }),
                (0, e.jsx)(D.t3, {
                  strToolTip: (0, n.we)("#FAQEditor_Loc_Import_ttip"),
                  strLabel: (0, n.we)("#EventEditor_Loc_Import_Short"),
                  fnOnImportLocData: (l, c) => b(a, l, c),
                }),
              ],
            });
          },
          pe = (i) => {
            const { draft: a } = i;
            return (0, e.jsxs)("div", {
              className: u.FlexRowContainer,
              children: [
                (0, e.jsx)("div", {
                  className: u.EditPreviewButton,
                  onClick: (r) => {
                    (0, p.pg)(
                      (0, e.jsx)(Ae, {
                        direction: "export",
                        draft: a,
                        children: " ",
                      }),
                      (0, H.uX)(r),
                    );
                  },
                  children: (0, n.we)("#EventEditor_Loc_Export_Short"),
                }),
                (0, e.jsx)("div", {
                  className: u.EditPreviewButton,
                  onClick: (r) => {
                    (0, p.pg)(
                      (0, e.jsx)(Ae, {
                        direction: "import",
                        draft: a,
                        children: " ",
                      }),
                      (0, H.uX)(r),
                    );
                  },
                  children: (0, n.we)("#EventEditor_Loc_Import_Short"),
                }),
              ],
            });
          },
          Ae = (i) => {
            const { closeModal: a, direction: r, draft: l } = i,
              [c, m] = Q.useState(!1),
              [E, A] = Q.useState(new Array()),
              w = c || E.length == 0,
              j = async () => {
                m(!0);
                try {
                  r == "import"
                    ? await N.pN
                        .Get()
                        .ImportNonEnglishDraftsFromCrowdin(l.GetFAQID(), E)
                    : await N.pN
                        .Get()
                        .ExportEnglishDraftToCrowdin(l.GetFAQID());
                } catch (je) {
                  console.error(je);
                }
                m(!1);
              },
              se = (0, n.we)(
                r == "import"
                  ? "#EventEditor_Loc_CrowdinIntegration_ImportTitle"
                  : "#EventEditor_Loc_CrowdinIntegration_ExportTitle",
              ),
              $ = (0, n.we)(
                r == "import"
                  ? "#EventEditor_Loc_Import_Crowdin_Confirm"
                  : "#EventEditor_Loc_Export_Crowdin_Confirm",
              ),
              Y =
                r == "import"
                  ? (0, e.jsx)(ue, {
                      draft: l,
                      rgAllLanguages: K,
                      rgLanguagesSelected: E,
                      fnSelectLanguages: A,
                    })
                  : null;
            return (0, e.jsx)(v.o0, {
              className: P.LanguageListDialog,
              closeModal: a,
              strTitle: se,
              strDescription: $,
              onOK: j,
              bOKDisabled: c,
              children: c ? (0, e.jsx)(x.t, { position: "center" }) : Y,
            });
          },
          we = (i) => {
            const { draft: a, eLanguage: r } = i;
            return (0, e.jsx)(O.he, {
              toolTipContent: (0, n.we)("#FAQEditor_Loc_Export_ttip"),
              children: (0, e.jsx)("div", {
                className: u.EditPreviewButton,
                onClick: (l) => {
                  (0, p.pg)(
                    (0, e.jsx)(v.o0, {
                      strTitle: (0, n.we)("#EventEditor_Loc_Export"),
                      bAlertDialog: !0,
                      children: (0, e.jsx)(D.Yg, {
                        fnGetLocData: () => U(a, r),
                        bShowXML: !0,
                        bShowCSV: !0,
                        strFileNamePrefix: "faq",
                        lang: r,
                      }),
                    }),
                    (0, H.uX)(l),
                  );
                },
                children: (0, n.we)("#EventEditor_Loc_Export_Short"),
              }),
            });
          },
          k = [
            0, 9, 8, 12, 14, 21, 2, 3, 20, 24, 13, 17, 16, 5, 6, 7, 15, 23, 11,
            4, 19, 25, 18, 1, 10, 28, 26, 22, 27, 29, 30, 31,
          ],
          K = [
            g.Uu1,
            g.NFp,
            g.A4L,
            g.m2$,
            g.iQT,
            g.L3y,
            g.egf,
            g.xcz,
            g.FH6,
            g.dZ5,
            g.K91,
            g.dFE,
            g.OFl,
            g.Pn1,
            g.JBx,
            g._Q1,
            g.QT4,
            g.Lzz,
            g.kG6,
            g.GXE,
            g.HkE,
            g.FHN,
            g.wWt,
            g.$ys,
            g.RhO,
            g.JOj,
            g.kSD,
            g.Ze9,
            g.Vlm,
          ],
          ue = (i) => {
            const {
                draft: a,
                rgAllLanguages: r,
                rgLanguagesSelected: l,
                fnSelectLanguages: c,
              } = i,
              m = (w, j) => {
                const se = l.includes(j);
                if (w && !se) {
                  const $ = l.slice();
                  $.push(j), c($);
                } else if (!w && se) {
                  const $ = l.filter((Y) => Y !== j);
                  c($);
                }
              },
              E = (w) => {
                c(w ? r.slice() : []);
              },
              A = r
                .sort((w, j) => k[w] - k[j])
                .map((w) =>
                  (0, e.jsx)(
                    z,
                    {
                      draft: a,
                      eLang: w,
                      bInitialState: l.includes(w),
                      fnOnChecked: m,
                    },
                    "langrow" + w + a.GetFAQID(),
                  ),
                );
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: P.ChecklistHeader,
                  children: [
                    (0, e.jsx)("div", {
                      className: P.Language,
                      children: (0, n.we)("#FAQCrowdin_LanguageHeader"),
                    }),
                    (0, e.jsx)("div", {
                      className: P.Timestamp,
                      children: (0, n.we)("#FAQCrowdin_DraftTimestampHeader"),
                    }),
                  ],
                }),
                (0, e.jsx)(S.Yh, {
                  className: P.CheckAll,
                  label: (0, n.we)("#FAQCrowdin_SelectAllCheckboxes"),
                  onChange: E,
                }),
                (0, e.jsx)("div", {
                  className: P.ChecklistRows,
                  children:
                    A != null
                      ? A
                      : (0, e.jsx)("div", {
                          children: (0, n.we)("#FAQCrowdin_NoDraftFound"),
                        }),
                }),
              ],
            });
          },
          z = (i) => {
            var a;
            const { draft: r, eLang: l, bInitialState: c, fnOnChecked: m } = i,
              E = r.GetLastSavedDraftVersion(l),
              A = E
                ? d.b.InitFromAccountID(Number.parseInt(E.author_account_id))
                : null,
              { data: w } = (0, T.js)(A == null ? void 0 : A.GetAccountID()),
              j = E
                ? (0, n.we)(
                    "#FAQCrowdin_SavedAtTimeByAuthor",
                    (0, n.TW)(E.timestamp) +
                      " @ " +
                      (0, ne.KC)(E.timestamp, { bForce24HourClock: !1 }),
                    (a = w == null ? void 0 : w.m_strPlayerName) != null
                      ? a
                      : E.author_account_id,
                  )
                : (0, n.we)("#FAQCrowdin_NoDraftFound"),
              se = (0, e.jsxs)("div", {
                className: P.LanguageCheckboxLabel,
                children: [
                  (0, e.jsx)("div", {
                    className: P.Language,
                    children: (0, n.we)("#Language_" + (0, g.LgB)(l)),
                  }),
                  (0, e.jsx)("div", { className: P.Timestamp, children: j }),
                ],
              });
            return (0, e.jsx)(S.Yh, {
              className: P.LanguageCheckbox,
              label: se,
              checked: c,
              onChange: ($) => m($, l),
            });
          };
        function de(i) {
          const [a, r] = (0, N.cf)(),
            [l, c] = Q.useState(0),
            [m, E] = Q.useState(!1),
            [A, w] = Q.useState(!1),
            [j, se] = Q.useState(null),
            $ = (0, y.m)("CrowdinImportDialog"),
            Y = Q.useRef([]),
            je = async () => {
              E(!0);
              for (let _e = 0; _e < a.length; _e++) {
                c(_e);
                const Ue = a[_e],
                  ke = [],
                  Xe = 5;
                for (let ze = 0; ze < K.length; ze += Xe) {
                  const Zt = K.slice(ze, ze + Xe);
                  ke.push(
                    N.pN
                      .Get()
                      .ImportNonEnglishDraftsFromCrowdin(Ue.faq_id, Zt, $),
                  );
                }
                await Promise.all(ke),
                  N.pN.Get().BHasLiveEnglishVersion(Ue.faq_id)
                    ? ((Y.current[_e] = N.pN
                        .Get()
                        .GetNonEnglishDraftsToPublish(Ue.faq_id)),
                      console.log(
                        "Going to publish FAQ",
                        Ue.faq_id,
                        Y.current[_e].map((ze) => (0, g.LgB)(ze)),
                      ))
                    : console.log("No live english version for:", Ue.faq_id);
              }
              for (let _e = 0; _e < Y.current.length; _e++) {
                const Ue = a[_e],
                  ke = Y.current[_e];
                if ((ke == null ? void 0 : ke.length) > 0) {
                  c(_e);
                  const Xe = await N.pN
                    .Get()
                    .PublishDraftByLanguage(Ue.faq_id, ke);
                  if ($.token.reason) return;
                  if (Xe != I.R) {
                    se((0, n.we)("#FAQDashboard_PublishFailed"));
                    return;
                  }
                }
              }
              w(!0), E(!1);
            };
          if (j)
            return (0, e.jsx)(v.o0, {
              strTitle: (0, n.we)("#FAQDashboard_CrowdinToolTitle"),
              strDescription: j,
              bAlertDialog: !0,
              bDestructiveWarning: !0,
              closeModal: i.closeModal,
            });
          if (A)
            return (0, e.jsx)(v.o0, {
              strTitle: (0, n.we)("#FAQDashboard_CrowdinToolTitle"),
              strDescription: (0, n.we)("#FAQDashboard_PublishComplete"),
              bAlertDialog: !0,
              closeModal: i.closeModal,
            });
          const M = (100 * (l + 0.5)) / a.length,
            ee = a[l].internal_name;
          return (0, e.jsx)(v.eV, {
            title: (0, n.we)("#FAQDashboard_CrowdinToolTitle"),
            ...i,
            onCancel: () => $.cancel("CrowdinImportDialog cancelled"),
            children: (0, e.jsxs)(S.nB, {
              children: [
                (0, e.jsxs)(S.a3, {
                  children: [
                    (0, n.we)(
                      "#FAQDashboard_CrowdinToolInstructionsWithCount",
                      a.length,
                    ),
                    (0, e.jsx)("div", {
                      className: P.Warning,
                      children: (0, n.we)("#FAQDashboard_CrowdinToolWarning"),
                    }),
                  ],
                }),
                (0, e.jsxs)(S.a3, {
                  children: [
                    (0, e.jsx)(S.$n, {
                      onClick: je,
                      disabled: m,
                      children: (0, n.we)("#FAQDashboard_UpdateAllFAQsButton"),
                    }),
                    m &&
                      (0, e.jsx)(Ee, { nProgressPct: M, strCurrentLabel: ee }),
                    Y.current.length > 0 &&
                      (0, e.jsx)(ce, {
                        rgUpdatedLanguagesForAllFAQs: Y.current,
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        function Ee(i) {
          const { nProgressPct: a, strCurrentLabel: r } = i;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: P.ImportProgressBar,
                children: (0, e.jsx)("div", {
                  className: P.ProgressMarker,
                  style: { width: a + "%" },
                }),
              }),
              (0, e.jsx)("div", {
                className: P.CurrentFAQ,
                children: (0, n.we)("#FAQDashboard_CrowdinToolProgress", r),
              }),
            ],
          });
        }
        function ce(i) {
          const { rgUpdatedLanguagesForAllFAQs: a } = i,
            [r, l] = (0, N.cf)();
          return (0, e.jsxs)("div", {
            className: P.ImportResults,
            children: [
              (0, e.jsx)("div", {
                className: P.ImportResultLabel,
                children: (0, n.we)("#FAQDashboard_CrowdinToolResultsLabel"),
              }),
              a.map((c, m) => {
                const E = r[m];
                if (c.length == 0) return null;
                const A = c.map((w) => (0, g.wwZ)(w)).join(",");
                return (0, e.jsx)(
                  "div",
                  {
                    children: (0, e.jsxs)("div", {
                      className: P.ImportResult,
                      children: [
                        (0, e.jsx)(O.he, {
                          toolTipContent: E.internal_name,
                          strTooltipClassname: t().HoverAboveModal,
                          nAllowOffscreenPx: 4e4,
                          className: P.UrlCode,
                          children: E.url_code + ": ",
                        }),
                        (0, e.jsx)(O.he, {
                          toolTipContent: A,
                          strTooltipClassname: t().HoverAboveModal,
                          nAllowOffscreenPx: 4e4,
                          direction: "left",
                          className: P.LanguageList,
                          children: A,
                        }),
                      ],
                    }),
                  },
                  E.faq_id,
                );
              }),
            ],
          });
        }
        var te = o(18057),
          V = o(55351),
          xe = o.n(V),
          X = o(3063),
          oe = o.n(X);
        const fe = (i) => {
          const { rtTimestamp: a, bShowAsWarning: r } = i;
          if (!a)
            return (0, e.jsx)("div", {
              className: oe().Never,
              children: (0, n.we)("#FAQDashboard_TimeNever"),
            });
          const l = Date.now() / 1e3 - a,
            c = l < 24 * 3600 ? (0, n.Hq)(l, !1, !0) : (0, n.$z)(a);
          return (0, e.jsx)(te.gS, {
            className: r && oe().Warning,
            rtFullDate: a,
            stylesmodule: xe(),
            children: c,
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
        const Fe = (0, q.PA)((i) => {
            const [a, r] = (0, N.cf)(),
              [l, c] = Q.useState(1),
              E = a
                .map((A) => {
                  const w = A.per_language_info.find(
                      (M) => M.language == g.Bhc,
                    ),
                    j = (w == null ? void 0 : w.last_update_timestamp) || 0,
                    se = Array.from(
                      A.per_language_info.filter(
                        (M) =>
                          M.language != g.Bhc && M.last_update_timestamp >= j,
                      ),
                    ).length,
                    $ = Array.from(
                      A.per_language_info.filter(
                        (M) => M.last_update_timestamp < j,
                      ),
                    ).length,
                    Y = Array.from(
                      A.per_language_info.filter(
                        (M) =>
                          M.last_publish_timestamp >= M.last_update_timestamp,
                      ),
                    ).length,
                    je = Array.from(
                      A.per_language_info.filter(
                        (M) =>
                          M.last_publish_timestamp < M.last_update_timestamp,
                      ),
                    ).length;
                  return [
                    A.faq_id,
                    A.internal_name,
                    j,
                    se,
                    $,
                    Y,
                    je,
                    A.visible_in_global_realm,
                    A.visible_in_china_realm,
                  ];
                })
                .sort((A, w) =>
                  l == 1 ? (0, ae.lY)(A[1], w[1]) : w[l] - A[l],
                );
            return (
              (0, Q.useEffect)(() => {
                N.pN.Get().RemoveAllDirtyDrafts();
              }, []),
              (0, e.jsx)("div", {
                className: L().FAQDashboardPage,
                children: (0, e.jsxs)("div", {
                  className: L().FAQDashboard,
                  children: [
                    (0, e.jsx)(Qe, {}),
                    (0, e.jsx)(Te, { eCurrentSortColumn: l, SetSortColumn: c }),
                    a.length == 0 &&
                      (0, e.jsx)("div", {
                        className: L().ErrorMsg,
                        children: (0, n.we)("#FAQDashboard_Empty"),
                      }),
                    E.map((A) => (0, e.jsx)(Ve, { rgColumns: A }, A[0])),
                    !r &&
                      (0, e.jsx)(x.t, { position: "center", size: "xlarge" }),
                  ],
                }),
              })
            );
          }),
          Qe = (i) => {
            const a = Q.useCallback(
                () =>
                  (0, p.mK)((0, e.jsx)(Le, {}), window, {
                    strTitle: (0, n.we)("#FAQDashboard_CreateFAQButton"),
                  }),
                [],
              ),
              r = Q.useCallback(
                () =>
                  (0, p.mK)(
                    (0, e.jsx)(de, { bDisableBackgroundDismiss: !0 }),
                    window,
                    { strTitle: (0, n.we)("#FAQDashboard_CrowdinToolTitle") },
                  ),
                [],
              );
            return (0, e.jsxs)("div", {
              className: L().DashboardHeader,
              children: [
                (0, e.jsx)("div", {
                  className: L().DashboardHeaderTitle,
                  children: (0, n.we)("#FAQDashboard_Header"),
                }),
                (0, e.jsxs)("div", {
                  className: L().DashboardHeaderButtonCtn,
                  children: [
                    (0, e.jsx)(S.$n, {
                      onClick: r,
                      children: (0, n.we)("#FAQDashboard_CrowdinToolButton"),
                    }),
                    (0, e.jsx)(S.jn, {
                      onClick: a,
                      children: (0, n.we)("#FAQDashboard_CreateFAQButton"),
                    }),
                  ],
                }),
              ],
            });
          },
          Le = (i) => {
            const [a, r] = Q.useState("");
            return (0, e.jsxs)(v.o0, {
              onOK: () => {
                N.pN.Get().CreateFAQ(a);
              },
              bOKDisabled: a.length == 0,
              closeModal: i.closeModal,
              className: L().CreateFAQDialog,
              children: [
                (0, e.jsx)(S.Y9, {
                  children: (0, n.we)("#FAQDashboard_CreateFAQButton"),
                }),
                (0, e.jsx)(S.nB, {
                  children: (0, e.jsxs)(S.a3, {
                    children: [
                      (0, n.we)("#FAQDashboard_CreateFAQInstructions"),
                      (0, e.jsx)("input", {
                        type: "text",
                        className: L().NameInput,
                        value: a,
                        placeholder: (0, n.we)("#FAQDashboard_NamePlaceHolder"),
                        onFocus: (c) => c.target.select(),
                        onChange: (c) => r(c.currentTarget.value),
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
              className: L().DashboardListHeaderRow,
              children: [
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_NameColumn",
                  bIsNameColumn: !0,
                  eThisColumn: 1,
                  ...i,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_DraftTimetampColumn",
                  eThisColumn: 2,
                  ...i,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_UpdatedLanguagesColumn",
                  eThisColumn: 3,
                  ...i,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_StaleLanguagesColumn",
                  eThisColumn: 4,
                  ...i,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_PublishedLanguagesColumn",
                  eThisColumn: 5,
                  ...i,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_NeedPublishColumn",
                  eThisColumn: 6,
                  ...i,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_VisibilityColumn",
                  eThisColumn: 7,
                  ...i,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_SteamChinaVisibilityColumn",
                  eThisColumn: 8,
                  ...i,
                }),
              ],
            }),
          le = (i) => {
            const {
                strLabelLocToken: a,
                bIsNameColumn: r,
                eThisColumn: l,
                eCurrentSortColumn: c,
                SetSortColumn: m,
              } = i,
              E = (0, _.A)(
                L().EntryColumn,
                L().ClickableHeader,
                r ? L().NameCol : L().DataCol,
                c == l && L().Selected,
              );
            return (0, e.jsxs)(O.he, {
              toolTipContent: (0, n.we)(a + "_ttip"),
              direction: "top",
              className: E,
              onClick: () => m(l),
              children: [
                (0, n.we)(a),
                (0, e.jsx)("div", {
                  className: L().DownArrow,
                  children: (0, e.jsx)(B.GB9, {}),
                }),
              ],
            });
          },
          Ce = (i) => {
            const { nCount: a, nTotal: r, nGoal: l } = i;
            return (0, e.jsx)("div", {
              className: a == l ? L().GoodCount : L().BadCount,
              children: a + " / " + r,
            });
          },
          Se = (i) => {
            const { bIsVisible: a } = i;
            return (0, e.jsx)("div", {
              className: a ? L().Visible : L().Hidden,
              children: (0, n.we)(
                a ? "#FAQDashboard_Visible" : "#FAQDashboard_Invisible",
              ),
            });
          },
          Ve = (i) => {
            const [a, r, l, c, m, E, A, w, j] = i.rgColumns,
              se = E + A,
              $ = c + m;
            return (0, e.jsxs)(J, {
              route: C.k_eCommunityEdit,
              faqid: a,
              className: L().DashboardEntry,
              children: [
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().NameCol),
                  children: (0, e.jsx)("div", {
                    className: L().EntryInternalName,
                    children: r,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(fe, { rtTimestamp: l }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Ce, { nCount: c, nTotal: $, nGoal: $ }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Ce, { nCount: m, nTotal: $, nGoal: 0 }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Ce, {
                    nCount: E,
                    nTotal: se,
                    nGoal: se,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Ce, { nCount: A, nTotal: se, nGoal: 0 }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Se, { bIsVisible: w }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Se, { bIsVisible: j }),
                }),
              ],
            });
          },
          We = (i) => {
            Q.useEffect(
              () => (
                (window.onbeforeunload = () => {
                  var r;
                  const l = N.pN.Get().GetLoadedDraftObjs();
                  return ((r =
                    l == null ? void 0 : l.filter((m) => m.BNeedsSaving())) ==
                  null
                    ? void 0
                    : r.length) > 0
                    ? (0, n.we)("#EventEditor_UnsavedChanges")
                    : null;
                }),
                () => {
                  window.onbeforeunload = () => {};
                }
              ),
              [],
            );
            const a = (r) => {
              var l, c;
              const m = N.pN.Get().GetLoadedDraftObjs();
              return ((l =
                m == null ? void 0 : m.filter((A) => A.BNeedsSaving())) == null
                ? void 0
                : l.length) > 0 &&
                (r.pathname == Ge.DashboardFAQ(G.UF.VANITY_ID) ||
                  ((c = r.pathname) != null &&
                    c.startsWith(Ge.ViewFAQ(G.UF.VANITY_ID, "").slice(0, -1))))
                ? (0, n.we)("#EventEditor_UnsavedChanges")
                : !0;
            };
            return (0, e.jsx)(re.XG, { message: a });
          };
        var Re = o(89084),
          ye = o(9046),
          Be = o(35524),
          Me = o(50109),
          dt = o(45638),
          Oe = o(25792),
          ct = o(4748),
          ut = o(63280),
          De = o.n(ut),
          He = o(74916),
          Ke = o(34592);
        const ht = (i) => {
            const a = (r) => {
              (0, p.pg)((0, e.jsx)(gt, { draft: i.draft }), (0, H.uX)(r));
            };
            return (0, e.jsx)(O.he, {
              toolTipContent: (0, n.we)("#FAQEditor_DeleteAction_ttip"),
              children: (0, e.jsx)("div", {
                className: (0, _.A)(u.EditPreviewButton, u.Delete),
                onClick: a,
                children: (0, n.we)("#FAQEditor_DeleteAction"),
              }),
            });
          },
          gt = (i) => {
            const { draft: a } = i,
              r = () => i.closeModal && i.closeModal(),
              [l, c] = Q.useState(!1),
              [m, E] = Q.useState(void 0);
            let A = (0, e.jsx)("div", {
              children: (0, n.we)("#FAQEditor_DeleteDesc"),
            });
            return (
              l
                ? (A = (0, e.jsx)(x.t, {
                    position: "center",
                    size: "medium",
                    string: (0, n.we)("#FAQEditor_DeletingInProgress"),
                  }))
                : m &&
                  (A = (0, e.jsx)("div", {
                    children: (0, n.we)(
                      "Error_Description",
                      m,
                      (0, n.we)("#Error_GenericFailureDescription"),
                    ),
                  })),
              (0, e.jsx)(Oe.tH, {
                children: (0, e.jsx)(v.x_, {
                  onEscKeypress: r,
                  children: (0, e.jsxs)(S.UC, {
                    children: [
                      (0, e.jsx)(S.Y9, {
                        children: (0, n.we)("#FAQEditor_DeleteAction"),
                      }),
                      (0, e.jsx)(S.nB, {
                        children: (0, e.jsx)(S.a3, { children: A }),
                      }),
                      (0, e.jsx)(S.wi, {
                        children: (0, e.jsx)(S.CB, {
                          onCancel: r,
                          bOKDisabled: !!(l || m),
                          strOKText: (0, n.we)("#FAQEditor_DeleteAction"),
                          strCancelText:
                            l || m ? (0, n.we)("#Button_OK") : void 0,
                          onOK: async () => {
                            c(!0),
                              N.pN
                                .Get()
                                .DeleteFAQ(a.GetFAQID())
                                .then((w) => {
                                  if (w == I.R) {
                                    const j =
                                      G.TS.COMMUNITY_BASE_URL.substr(
                                        0,
                                        G.TS.COMMUNITY_BASE_URL.length - 1,
                                      ) + f(C.k_eCommunityDashboard);
                                    window.location.href = j;
                                  }
                                  E(w);
                                })
                                .catch((w) => {
                                  const j = (0, Ke.H)(w);
                                  console.error(
                                    "FAQDeleteDialog: hit error: " +
                                      j.strErrorMsg,
                                    j,
                                  ),
                                    E(I.zi);
                                })
                                .finally(() => c(!1));
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          },
          mt = (0, q.PA)((i) => {
            const { draft: a, bDisabled: r } = i,
              l = a.BNeedsSaving(),
              c = (m) => {
                r ||
                  (0, p.pg)(
                    l
                      ? (0, e.jsx)(v.KG, {
                          strDescription: (0, n.we)(
                            "#FAQPublish_SaveRequire_ttip",
                          ),
                        })
                      : (0, e.jsx)(ft, { draft: i.draft }),
                    (0, H.uX)(m),
                  );
              };
            return (0, e.jsx)(O.he, {
              toolTipContent: (0, n.we)(
                l ? "#FAQPublish_SaveRequire_ttip" : "#FAQPublish_Publish_ttip",
              ),
              children: (0, e.jsx)("div", {
                className: (0, _.A)(u.EditPreviewButton, r && u.Disabled),
                onClick: c,
                children: (0, n.we)("#FAQPublish_Publish"),
              }),
            });
          }),
          ft = (i) => {
            var a;
            const { draft: r } = i,
              l = () => i.closeModal && i.closeModal(),
              [c, m] = Q.useState(!1),
              [E, A] = Q.useState(void 0),
              [w, j] = Q.useState(void 0),
              [se, $] = (0, N.g5)(r.GetFAQID()),
              [Y, je] = Q.useState(new Array());
            let M = null;
            if (!$)
              M = (0, e.jsx)(x.t, {
                size: "small",
                position: "center",
                string: (0, n.we)("#FAQPublish_PublishWait"),
              });
            else if (c)
              M = (0, e.jsx)(x.t, {
                position: "center",
                size: "medium",
                string: (0, n.we)("#FAQPublish_Publishing"),
              });
            else if (E)
              M = (0, e.jsx)("div", {
                children: (0, n.we)("#FAQPublish_Success"),
              });
            else if (w)
              M = (0, e.jsx)("div", {
                children: (0, n.we)(
                  "#Error_Description",
                  w,
                  (0, n.we)("#Error_GenericFailureDescription"),
                ),
              });
            else if (!se)
              M = (0, e.jsx)("div", {
                children: (0, n.we)("#FAQPublish_LoadError"),
              });
            else {
              const ee =
                (a = se.per_language_info) == null
                  ? void 0
                  : a
                      .filter(
                        (_e) =>
                          _e.last_publish_timestamp < _e.last_update_timestamp,
                      )
                      .map((_e) => _e.language);
              M = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    children: (0, n.we)("#FAQPublish_Desc"),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("div", {
                    children: (0, n.we)("#FAQPublish_Desc2"),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(ue, {
                    draft: r,
                    rgAllLanguages: ee,
                    rgLanguagesSelected: Y,
                    fnSelectLanguages: je,
                  }),
                ],
              });
            }
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsx)(v.x_, {
                onEscKeypress: l,
                children: (0, e.jsxs)(S.UC, {
                  className: P.LanguageListDialog,
                  children: [
                    (0, e.jsx)(S.Y9, {
                      children: (0, n.we)("#FAQPublish_Publish"),
                    }),
                    (0, e.jsx)(S.nB, {
                      children: (0, e.jsx)(S.a3, { children: M }),
                    }),
                    (0, e.jsx)(S.wi, {
                      children: (0, e.jsx)(S.CB, {
                        onCancel: l,
                        bOKDisabled: !!(c || E || w || Y.length == 0),
                        strOKText: (0, n.we)("#FAQPublish_Publish"),
                        strCancelText:
                          c || E || w ? (0, n.we)("#Button_OK") : void 0,
                        onOK: async () => {
                          m(!0),
                            N.pN
                              .Get()
                              .PublishDraftByLanguage(r.GetFAQID(), Y)
                              .then((ee) => {
                                ee == I.R && A(!0), j(ee);
                              })
                              .catch((ee) => {
                                const _e = (0, Ke.H)(ee);
                                console.error(
                                  "FAQPublishDialog: hit error: " +
                                    _e.strErrorMsg,
                                  _e,
                                ),
                                  j(I.zi);
                              })
                              .finally(() => m(!1));
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
              (0, p.pg)((0, e.jsx)(pt, { draft: i.draft }), (0, H.uX)(r));
            };
            return (0, e.jsx)(O.he, {
              toolTipContent: (0, n.we)("#FAQEditor_ChangeVisible_ttip"),
              children: (0, e.jsx)("div", {
                className: u.EditPreviewButton,
                onClick: a,
                children: (0, n.we)("#FAQEditor_EditVisible"),
              }),
            });
          },
          pt = (i) => {
            const { draft: a } = i,
              r = () => i.closeModal && i.closeModal(),
              [l, c] = Q.useState(!1),
              [m, E] = Q.useState(void 0),
              [A, w] = Q.useState(void 0),
              j = N.pN.Get().GetFAQArticleSummary(a.GetFAQID()),
              [se, $] = Q.useState(j.visible_in_global_realm),
              [Y, je] = Q.useState(j.visible_in_china_realm);
            let M = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  children: (0, n.we)("#FAQEditor_ChangeVisible_Desc"),
                }),
                (0, e.jsx)(S.Yh, {
                  label: (0, n.we)("#FAQEditor_VisibleInGlobal"),
                  checked: se,
                  onChange: (ee) => $(ee),
                }),
                (0, e.jsx)(S.Yh, {
                  label: (0, n.we)("#FAQEditor_VisibleInChina"),
                  checked: Y,
                  tooltip: (0, n.we)("#FAQEditor_VisibleInChina_ttip"),
                  onChange: (ee) => je(ee),
                }),
              ],
            });
            return (
              l
                ? (M = (0, e.jsx)(x.t, {
                    position: "center",
                    size: "medium",
                    string: (0, n.we)("#FAQEditor_ChangeVisible_InProgress"),
                  }))
                : m
                  ? (M = (0, e.jsx)("div", {
                      children: (0, n.we)("#FAQEditor_ChangeVisible_Success"),
                    }))
                  : A &&
                    (M = (0, e.jsx)("div", {
                      children: (0, n.we)(
                        "Error_Description",
                        A,
                        (0, n.we)("#Error_GenericFailureDescription"),
                      ),
                    })),
              (0, e.jsx)(Oe.tH, {
                children: (0, e.jsx)(v.x_, {
                  onEscKeypress: r,
                  children: (0, e.jsxs)(S.UC, {
                    children: [
                      (0, e.jsx)(S.Y9, {
                        children: (0, n.we)("#FAQEditor_ChangeVisible"),
                      }),
                      (0, e.jsx)(S.nB, {
                        children: (0, e.jsx)(S.a3, { children: M }),
                      }),
                      (0, e.jsx)(S.wi, {
                        children: (0, e.jsx)(S.CB, {
                          onCancel: r,
                          bOKDisabled: !!(l || m || A),
                          strOKText: (0, n.we)("#FAQEditor_ChangeVisible"),
                          strCancelText:
                            l || m || A ? (0, n.we)("#Button_OK") : void 0,
                          onOK: async () => {
                            c(!0),
                              N.pN
                                .Get()
                                .UpdateVisibility(a.GetFAQID(), se, Y)
                                .then((ee) => {
                                  ee == I.R && E(!0), w(ee);
                                })
                                .catch((ee) => {
                                  const _e = (0, Ke.H)(ee);
                                  console.error(
                                    "FAQChangeVisibilityDialog: hit error: " +
                                      _e.strErrorMsg,
                                    _e,
                                  ),
                                    w(I.zi);
                                })
                                .finally(() => c(!1));
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          };
        var he = o(35707),
          vt = o(6864),
          tt = o(68312),
          At = o(61739),
          Et = o(88942),
          nt = o(35038);
        const Ct = (0, q.PA)((i) => {
            var a, r, l, c, m;
            const { draft: E, eLanguage: A } = i,
              w = E.GetFAQID(),
              [j, se] = (0, N.g5)(w);
            if (!se) return null;
            const $ =
                (r =
                  (a = j == null ? void 0 : j.per_language_info) == null
                    ? void 0
                    : a.find((M) => M.language == g.Bhc)) == null
                  ? void 0
                  : r.last_update_timestamp,
              Y =
                (l = j == null ? void 0 : j.per_language_info) == null
                  ? void 0
                  : l.some(
                      (M) => M.last_publish_timestamp < M.last_update_timestamp,
                    ),
              je =
                (m =
                  (c = j == null ? void 0 : j.per_language_info) == null
                    ? void 0
                    : c
                        .slice()
                        .sort((M, ee) => k[M.language] - k[ee.language])) ==
                null
                  ? void 0
                  : m.map((M) =>
                      (0, e.jsx)(
                        Lt,
                        { info: M, rtEnglishUpdateTime: $ },
                        M.language,
                      ),
                    );
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsxs)("div", {
                className: he.LeftMenu,
                children: [
                  (0, e.jsxs)("div", {
                    className: he.Section,
                    children: [
                      (0, e.jsxs)("div", {
                        className: he.SectionTitle,
                        children: [
                          (0, n.we)("#FAQDashboard_VisibilityColumn"),
                          " ",
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: he.SectionContents,
                        children: [
                          (0, e.jsxs)("div", {
                            className: he.VisibilityCtn,
                            children: [
                              (0, e.jsxs)("div", {
                                className: (0, _.A)(he.StatusRow, he.Global),
                                children: [
                                  (0, n.we)(
                                    "#FAQDashboard_VisibleInGlobalRealmLabel",
                                  ),
                                  "\xA0",
                                  (0, e.jsx)(Se, {
                                    bIsVisible: j.visible_in_global_realm,
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, _.A)(he.StatusRow, he.China),
                                children: [
                                  (0, n.we)(
                                    "#FAQDashboard_VisibleInChinaRealmLabel",
                                  ),
                                  "\xA0",
                                  (0, e.jsx)(Se, {
                                    bIsVisible: j.visible_in_china_realm,
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                className: he.StatusBtnCtn,
                                children: (0, e.jsx)(_t, { draft: E }),
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: he.PublishCtn,
                            children: [
                              Y
                                ? (0, e.jsx)("div", {
                                    className: he.PublishStatus,
                                    children: (0, n.we)(
                                      "#FAQStatus_DraftVersionsDesc",
                                    ),
                                  })
                                : (0, e.jsx)("div", {
                                    className: he.PublishStatus,
                                    children: (0, n.we)(
                                      "#FAQStatus_NothingToPublish",
                                    ),
                                  }),
                              (0, e.jsx)("div", {
                                className: he.PublishBtn,
                                children: (0, e.jsx)(mt, {
                                  draft: E,
                                  bDisabled: !Y,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: he.Section,
                    children: [
                      (0, e.jsx)("div", {
                        className: he.SectionTitle,
                        children: (0, n.we)(
                          "#FAQDashboard_LocalizationSection",
                        ),
                      }),
                      G.iA.is_support && (0, e.jsx)(xt, { draft: E }),
                      (0, e.jsxs)("div", {
                        className: he.SectionContents,
                        children: [
                          (0, e.jsx)("div", {
                            className: he.SectionDescription,
                            children: (0, n.we)(
                              "#FAQDashboard_LocalizationSectionDesc",
                            ),
                          }),
                          (0, e.jsx)(ve, { draft: E, eLanguage: A }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: he.SectionContents,
                        children: [
                          (0, e.jsx)("div", {
                            className: he.SectionDescription,
                            children: (0, n.we)(
                              "#EventEditor_Loc_CrowdinIntegration_Desc",
                            ),
                          }),
                          (0, e.jsx)(pe, { draft: E }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: he.Section,
                    children: [
                      (0, e.jsx)("div", {
                        className: he.SectionTitle,
                        children: (0, n.we)(
                          "#FAQStatus_LocalizedVersionStatusHeader",
                        ),
                      }),
                      (0, e.jsxs)("table", {
                        className: he.FaqStatusTable,
                        children: [
                          (0, e.jsx)("thead", {
                            children: (0, e.jsxs)("tr", {
                              children: [
                                (0, e.jsx)("th", {
                                  children: (0, n.we)("#LanguageTitle"),
                                }),
                                (0, e.jsx)("th", {
                                  children: (0, n.we)("#FAQStatus_LastUpdated"),
                                }),
                                (0, e.jsx)("th", {
                                  children: (0, n.we)(
                                    "#FAQStatus_LastPublished",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("tbody", { children: je }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: he.Section,
                    children: (0, e.jsx)(ht, { draft: E }),
                  }),
                ],
              }),
            });
          }),
          xt = (0, q.PA)((i) => {
            const { draft: a } = i,
              r = Dt(a.GetFAQID()),
              l = jt(G.UF.CLANSTEAMID, a.GetFAQID()),
              [c, m] = (0, Q.useState)(g.xPp),
              [E, A] = (0, Q.useState)(!1),
              w = (je) => {
                const M = je.target.value;
                if (M === "all") m(g.xPp);
                else {
                  const ee = (0, g.sfN)(M);
                  m(ee);
                }
              },
              j = async (je) => {
                const M = a.GetJsonData();
                let ee;
                M.length === 0 ? (ee = {}) : (ee = JSON.parse(M)),
                  (ee.pushToCrowdIn = je.target.checked),
                  await a.UpdateJsonData(ee);
              },
              se = async (je) => {
                const M = a.GetJsonData();
                let ee;
                M.length === 0 ? (ee = {}) : (ee = JSON.parse(M)),
                  (ee.localizeDraft = je.target.checked),
                  await a.UpdateJsonData(ee);
              },
              $ = async () => {
                A(!0), await r.mutateAsync(c), A(!1), window.location.reload();
              };
            let Y = "";
            return (
              l.isSuccess &&
                l.data.crowdin_file_id &&
                (Y = `https://valve.crowdin.com/editor/${l.data.crowdin_project_id}/${l.data.crowdin_file_id}`),
              null
            );
            return (0, e.jsxs)("div", {
              className: he.SectionContents,
              children: [
                !1,
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      id: "localize_draft",
                      checked: a.BLocalizeDraft(),
                      onChange: se,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "localize_draft",
                      children: (0, n.we)(
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
                      onChange: j,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "push_to_crowdin",
                      children: (0, n.we)(
                        a.BLocalizeDraft()
                          ? "#FAQDashboard_CrowdIn_PushOnSave"
                          : "#FAQDashboard_CrowdIn_PushOnPublish",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    Y.length > 0 &&
                      (0, e.jsx)("a", {
                        href: Y,
                        target: "_blank",
                        children: Y,
                      }),
                    Y.length === 0 &&
                      (0, e.jsx)(e.Fragment, {
                        children: "(Not yet pushed to CrowdIn)",
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)(vt.p, { onChange: w }),
                    "\xA0",
                    !E &&
                      (0, e.jsx)("button", {
                        onClick: $,
                        children: (0, n.we)("#FAQDashboard_CrowdIn_Fetch"),
                      }),
                    E && (0, e.jsx)(x.t, { size: "small" }),
                  ],
                }),
              ],
            });
          }),
          Lt = (0, q.PA)((i) => {
            const { info: a, rtEnglishUpdateTime: r } = i,
              l = !!r && r > a.last_update_timestamp,
              c = a.last_update_timestamp > a.last_publish_timestamp;
            return (0, e.jsxs)("tr", {
              children: [
                (0, e.jsx)("td", {
                  children: (0, n.we)("#Language_" + (0, g.LgB)(a.language)),
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
                    bShowAsWarning: c,
                  }),
                }),
              ],
            });
          });
        function Dt(i) {
          const a = (0, tt.KV)();
          return (0, At.n)({
            mutationKey: ["fetch_faq_translation", i],
            mutationFn: async (r) => {
              const l = nt.w.Init(He.PS);
              return (
                l.Body().set_faq_id(i),
                l.Body().set_language(r),
                l.Body().set_steamid(G.UF.CLANSTEAMID),
                (await He.RD.FetchLocalizationFromCrowdIn(a, l)).GetEResult()
              );
            },
          });
        }
        function jt(i, a) {
          const r = (0, tt.KV)();
          return (0, Et.I)({
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
        const Ft = (0, q.PA)((i) => {
            const { draft: a } = i,
              r = a.BNeedsSaving();
            return (0, e.jsx)("div", {
              className: "btn_green_steamui btn_medium",
              onClick: (l) =>
                (0, p.pg)((0, e.jsx)(Tt, { draft: i.draft }), (0, H.uX)(l)),
              children: (0, e.jsxs)("span", {
                children: [
                  !r &&
                    (0, e.jsx)("img", { className: It.SavedImage, src: St.A }),
                  (0, n.we)(r ? "#Button_Save" : "#Button_Saved"),
                ],
              }),
            });
          }),
          Tt = (i) => {
            const { draft: a, closeModal: r } = i,
              [l, c] = Q.useState(!0),
              [m, E] = Q.useState(void 0);
            Q.useEffect(() => {
              (async () => {
                c(!0);
                try {
                  const j = await a.SaveDrafts();
                  E(j);
                } catch (j) {
                  E(I.zi),
                    console.log(
                      "FAQSaveProgressDialog hit exception " +
                        (0, Ke.H)(j).strErrorMsg,
                    );
                } finally {
                  c(!1);
                }
              })();
            }, [a]);
            const A = Q.useId();
            return (0, e.jsxs)(v.eV, {
              "aria-labelledby": A,
              bAllowFullSize: !0,
              onCancel: r,
              closeModal: r,
              children: [
                (0, e.jsx)(S.Y9, {
                  id: A,
                  children: l
                    ? (0, e.jsx)("div", {
                        children: (0, n.we)("#FAQSave_Saving"),
                      })
                    : (0, e.jsxs)("div", {
                        children: [
                          (0, n.we)(
                            m == I.R
                              ? "#FAQSave_SaveSuccess"
                              : "#FAQSave_Error",
                          ),
                          " ",
                        ],
                      }),
                }),
                (0, e.jsx)(S.nB, {
                  children: l
                    ? (0, e.jsx)(x.t, { size: "medium", position: "center" })
                    : (0, e.jsx)("div", {
                        children:
                          m == I.R
                            ? (0, e.jsx)("div", {
                                children: (0, n.we)(
                                  "#FAQSave_SaveSuccess_desc",
                                ),
                              })
                            : (0, e.jsx)("div", {
                                children: (0, n.we)(
                                  "#Error_Description",
                                  m,
                                  (0, n.we)("#Error_GenericFailureDescription"),
                                ),
                              }),
                      }),
                }),
                (0, e.jsx)(S.wi, {
                  children:
                    !l &&
                    (0, e.jsx)(S.jn, {
                      onClick: r,
                      children: (0, n.we)("#Button_OK"),
                    }),
                }),
              ],
            });
          };
        var yt = o(66444),
          $e = o.n(yt);
        const st = (0, q.PA)((i) => {
            const { draft: a, bPreview: r } = i,
              l = a.BHasPublished();
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsxs)("div", {
                className: (0, _.A)({
                  [qe.EventEditorTopBarContainer]: !0,
                  [qe.EventUnPublished]: !r && !l,
                  [qe.EventPublished]: !r && l,
                  [$e().FAQPreview]: r,
                }),
                children: [
                  (0, e.jsx)(J, {
                    route: r ? C.k_eCommunityEdit : C.k_eCommunityDashboard,
                    faqid: a.GetFAQID(),
                    className: h().EditPreviewButton,
                    children: (0, n.we)(
                      r ? "#FAQEditor_EditFAQ" : "#EventDisplay_EventsDashBtn",
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("div", {
                        className: $e().EditorInternalNameLabel,
                        children: (0, n.we)(
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
                            onClick: (c) =>
                              (0, p.pg)(
                                (0, e.jsx)(Pt, { draft: a }),
                                (0, H.uX)(c),
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: h().EventOptions,
                    children: [
                      (0, e.jsx)(bt.Ng, {
                        selectedLang: Me.O.Get().GetCurEditLanguage(),
                        fnOnLanguageChanged: Me.O.Get().SetCurEditLanguage,
                        fnLangHasData: a.BHasSomeTextForLanguage,
                        fnIsLangSupported: (c) => !0,
                        fnLastUpdateRTime: a.GetLastTimeLanguageUpdated,
                        realms: [
                          Ye.TU.k_ESteamRealmGlobal,
                          Ye.TU.k_ESteamRealmChina,
                        ],
                      }),
                      !r &&
                        (0, e.jsx)(J, {
                          route: C.k_eCommunityPreview,
                          faqid: a.GetFAQID(),
                          className: h().EditPreviewButton,
                          children: (0, n.we)("#Button_Preview"),
                        }),
                    ],
                  }),
                ],
              }),
            });
          }),
          Pt = (i) => {
            const { closeModal: a, draft: r } = i,
              [l, c] = Q.useState(r.GetFAQInternalName() || ""),
              [m, E] = Q.useState(!1),
              [A, w] = Q.useState(I.R),
              [j, se] = Q.useState(!1),
              $ = async () => {
                E(!0),
                  N.pN
                    .Get()
                    .UpdateInternalName(r.GetFAQID(), l)
                    .then((Y) => w(Y))
                    .finally(() => {
                      se(!0);
                    });
              };
            return (0, e.jsxs)(v.eV, {
              title: (0, n.we)("#FAQEditor_ChangeInternalName"),
              bAllowFullSize: !0,
              onCancel: a,
              closeModal: a,
              children: [
                (0, e.jsxs)(S.nB, {
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, n.we)("#FAQEditor_ChangeInternalName_desc"),
                    }),
                    (0, e.jsx)("input", {
                      type: "text",
                      value: l,
                      placeholder: (0, n.we)("#FAQEditor_ChangeInternalName"),
                      onFocus: (Y) => Y.target.select(),
                      onChange: (Y) => c(Y.currentTarget.value),
                      maxLength: 240,
                      disabled: m,
                    }),
                    !!(m && !j) &&
                      (0, e.jsx)(x.t, {
                        string: (0, n.we)("#Updating"),
                        position: "center",
                        size: "medium",
                      }),
                    j &&
                      (0, e.jsx)("span", {
                        children:
                          A == I.R
                            ? (0, n.we)("#EventDisplay_Share_Success")
                            : (0, n.we)(
                                "#Error_Description",
                                A,
                                (0, n.we)("#Error_GenericFailureDescription"),
                              ),
                      }),
                  ],
                }),
                (0, e.jsx)(S.wi, {
                  children: (0, e.jsx)(S.CB, {
                    bOKDisabled: l.trim().length == 0 || m,
                    onCancel: a,
                    strCancelText: j
                      ? (0, n.we)("#Button_Close")
                      : (0, n.we)("#Button_Cancel"),
                    onOK: $,
                  }),
                }),
              ],
            });
          },
          at = (0, q.PA)((i) => {
            const { draft: a, eLanguage: r } = i,
              l = a.GetFAQID(),
              [c, m] = (0, N.g5)(l),
              E = m && c.per_language_info.find((j) => j.language == r),
              w =
                m &&
                ((G.TS.EREALM == Ye.TU.k_ESteamRealmGlobal &&
                  c.visible_in_global_realm) ||
                  (G.TS.EREALM == Ye.TU.k_ESteamRealmChina &&
                    c.visible_in_china_realm)) &&
                !!(E != null && E.last_publish_timestamp);
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsx)("div", {
                className: (0, _.A)(h().SaveBackground),
                children: (0, e.jsxs)("div", {
                  className: h().FlexRowWrapFlexStartContainer,
                  style: { width: "unset", justifyContent: "center" },
                  children: [
                    (0, e.jsx)(Ft, { draft: a }),
                    !!w &&
                      (0, e.jsx)("div", {
                        className: h().EditPreviewButton,
                        children: (0, e.jsx)("a", {
                          href: G.TS.HELP_BASE_URL + "faqs/view/" + c.url_code,
                          children: (0, n.we)("#FAQEditir_ViewLiveFAQ"),
                        }),
                      }),
                  ],
                }),
              }),
            });
          });
        var Nt = o(77495);
        const Rt = (0, q.PA)((i) => {
            const { faqid: a } = i,
              [r, l] = (0, N.z5)(a),
              c = Q.useRef(void 0);
            if (l) {
              if (!r)
                return (0, e.jsx)(Ot, {
                  strError: (0, n.we)("#FAQEditor_NoFAQFound"),
                });
            } else
              return (0, e.jsx)(x.t, {
                position: "center",
                size: "xlarge",
                string: (0, n.we)("#Loading"),
              });
            const m = Me.O.Get().GetCurEditLanguage();
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)(st, { draft: r }),
                (0, e.jsxs)("div", {
                  className: De().FAQEditPage,
                  children: [
                    (0, e.jsx)("div", {
                      className: De().FAQMenuCtn,
                      children: (0, e.jsx)(Ct, { draft: r, eLanguage: m }),
                    }),
                    (0, e.jsx)("div", {
                      className: De().FAQEditorCtn,
                      children: (0, e.jsx)("div", {
                        className: De().FAQEditor,
                        children: (0, e.jsxs)("div", {
                          className: (0, _.A)(h().Columns, De().Columns),
                          children: [
                            (0, e.jsxs)("div", {
                              className: (0, _.A)(h().LeftCol, De().LeftCol),
                              children: [
                                (0, e.jsx)(Bt, { draft: r, eLanguage: m }),
                                (0, e.jsx)(Mt, {
                                  bbcodeEditorRef: c,
                                  draft: r,
                                  eLanguage: m,
                                }),
                              ],
                            }),
                            (0, e.jsx)(Qt, {
                              draft: r,
                              bbcodeEditorRef: c,
                              className: (0, _.A)(h().RightCol, De().RightCol),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(at, { draft: r, eLanguage: m }),
              ],
            });
          }),
          Qt = (i) => {
            const a = (0, Q.useMemo)(() => new d.b(G.UF.CLANSTEAMID), []);
            if (!G.UF.CAN_UPLOAD_IMAGES) return null;
            const { draft: r, bbcodeEditorRef: l } = i;
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsxs)("div", {
                className: i.className,
                children: [
                  (0, e.jsx)("div", {
                    children: (0, n.we)("#FAQEditor_ImageTitle"),
                  }),
                  (0, e.jsx)(ct.G, {
                    bShowLightBox: !0,
                    appid: void 0,
                    clanSteamID: a,
                    imageInsertCallBack: (c, m) =>
                      l.current &&
                      (0, Re.fW)(l == null ? void 0 : l.current, c, m),
                    fnSetImageURL: () => {},
                    rgRealmList: r.GetIncludedRealmList(),
                    fnLangHasData: r.BHasSomeTextForLanguage,
                    fnGetImageHash: (c, m) => {
                      if (ye.pb.includes(c)) {
                        const E = Be.R.GetAllLocalizedGroupImages();
                        return E && E.length > m && E[m] != null ? E[m] : null;
                      }
                      return null;
                    },
                    partnerEventStore: Nt.O3,
                  }),
                ],
              }),
            });
          },
          Bt = (0, q.PA)((i) => {
            const { draft: a, eLanguage: r } = i;
            return (0, e.jsxs)("div", {
              className: De().EditorTitleField,
              children: [
                (0, e.jsx)("div", {
                  className: De().EditorLabel,
                  children: (0, n.we)("#FAQEditor_TitleLabel"),
                }),
                (0, e.jsx)("input", {
                  type: "text",
                  className: De().EditorTitleFieldInput,
                  value: a.GetDraftTitle(r) || "",
                  placeholder: (0, n.we)("#FAQEditor_TitlePlaceHolder"),
                  onFocus: (c) => c.target.select(),
                  onChange: (c) => a.SetDraftTitle(r, c.currentTarget.value),
                  maxLength: 120,
                }),
              ],
            });
          }),
          Mt = (0, q.PA)((i) => {
            const { draft: a, eLanguage: r, bbcodeEditorRef: l } = i;
            return (0, e.jsxs)("div", {
              className: De().EditorPane,
              children: [
                (0, e.jsx)("div", {
                  className: De().EditorLabel,
                  children: (0, n.we)("#FAQEditor_ContentLabel"),
                }),
                (0, e.jsx)(dt.I, {
                  ref: l,
                  fnGetCurText: () => a.GetDraftContent(r) || "",
                  fnOnTextChange: (c) =>
                    a.SetDraftContent(r, c.currentTarget.value),
                  fnSetText: (c) => a.SetDraftContent(r, c),
                  strPlaceholder: (0, n.we)("#FAQEditor_ContentPlaceHolder"),
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
                (0, e.jsx)(J, {
                  route: C.k_eCommunityDashboard,
                  className: De().EscapeLink,
                  children: (0, n.we)("#FAQEditor_GoToDashboard"),
                }),
              ],
            });
        var Gt = o(71462),
          Pe = o(28735);
        const it = (i) => {
            const {
                title: a,
                content: r,
                bIsPreview: l,
                elSideBars: c,
                version: m,
                language: E,
              } = i,
              A = (0, re.zy)();
            return (
              Q.useEffect(() => {
                var w, j, se;
                const $ =
                  (j = A == null ? void 0 : A.hash) == null
                    ? void 0
                    : j.substr(
                        ((w = A == null ? void 0 : A.hash) == null
                          ? void 0
                          : w.substr(0, 1)) === "#"
                          ? 1
                          : 0,
                      );
                $ &&
                  ((se = document.getElementById($)) == null ||
                    se.scrollIntoView({ block: "start", behavior: "smooth" }));
              }, [A]),
              (0, e.jsxs)("div", {
                className: (0, _.A)(Pe.FAQViewPage, G.TS.LANGUAGE),
                children: [
                  (0, e.jsx)("a", {
                    className: Pe.SupportTitle,
                    href: `${G.TS.HELP_BASE_URL}`,
                    children: (0, n.we)("#FAQViewer_SteamSupport"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Pe.Columns,
                    children: [
                      (0, e.jsxs)("div", {
                        className: (0, _.A)(Pe.LeftCol),
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
                                children: (0, e.jsx)(Gt.u, {
                                  text: r,
                                  bShowErrorInfo: l,
                                  version: m || "0",
                                  language: E,
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
                          children: c,
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
        const Ut = (i) => {
            const { faqContent: a } = i,
              [r, l] = (0, N.W)(a.faq_id, a.version, a.language);
            return N.pN.Get().BHasFAQEdit()
              ? (0, e.jsxs)("div", {
                  className: (0, _.A)(Ie.Section, u.ValveOnlyBackground),
                  children: [
                    (0, e.jsx)("div", {
                      className: Ie.TopicHeader,
                      children: (0, n.we)("#FAQViewer_AdminLinks"),
                    }),
                    (0, e.jsx)("div", {
                      className: ot.InfoRow,
                      children: (0, n.PP)(
                        "#FAQViewer_Admin_LastUpdate",
                        r != null && r.author_account_id
                          ? (0, e.jsx)(rt.p, {
                              accountID: Number.parseInt(r.author_account_id),
                            })
                          : (0, n.we)("#FAQViewer_UnknownUser"),
                        (0, e.jsx)("span", {
                          children:
                            (0, n.TW)(a.timestamp) +
                            "@" +
                            (0, ne.KC)(a.timestamp, { bForce24HourClock: !1 }),
                        }),
                      ),
                    }),
                    (0, e.jsx)(kt, { faqContent: a }),
                    (0, e.jsx)(J, {
                      faqid: a.faq_id,
                      route: C.k_eCommunityEdit,
                      bForceAnchor: !0,
                      children: (0, n.we)("#FAQViewer_GotoEditor"),
                    }),
                  ],
                })
              : null;
          },
          kt = (i) => {
            const { faqContent: a } = i,
              [r, l] = (0, N.z5)(a.faq_id);
            if (
              !r ||
              !l ||
              r.GetLastTimeLanguageUpdated(a.language) <= a.timestamp
            )
              return null;
            const c = r.GetLastSavedDraftVersion(a.language);
            return (0, e.jsx)("div", {
              className: ot.InfoRow,
              children: (0, n.PP)(
                "#FAQViewer_DraftNewer",
                (0, e.jsx)(rt.p, {
                  accountID: Number.parseInt(c.author_account_id),
                }),
                (0, e.jsx)("span", {
                  children:
                    (0, n.TW)(c.timestamp) +
                    "@" +
                    (0, ne.KC)(c.timestamp, { bForce24HourClock: !1 }),
                }),
              ),
            });
          },
          zt = (i) =>
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: (0, _.A)(Ie.Section, Ie.NeedHelp),
                  children: [
                    (0, e.jsx)("div", {
                      className: Ie.LeftCol,
                      children: (0, e.jsx)(B._VW, { role: "presentation" }),
                    }),
                    (0, e.jsxs)("div", {
                      className: Ie.RightCol,
                      children: [
                        (0, e.jsx)("div", {
                          className: Ie.TopicHeader,
                          children: (0, n.we)(
                            "#FAQViewer_SideBar_ProblemWithSteam_Title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, n.we)(
                            "#FAQViewer_SideBar_ProblemWithSteam_Desc",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: Ie.CenterButtonCtn,
                          children: (0, e.jsx)("a", {
                            href: G.TS.HELP_BASE_URL,
                            className: u.EditPreviewButton,
                            children: (0, n.we)(
                              "#FAQViewer_SideBar_ProblemWithSteam_Link",
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !(0, G.Y2)() &&
                  (0, e.jsxs)("div", {
                    className: (0, _.A)(Ie.Section, Ie.CommunityHelp),
                    children: [
                      (0, e.jsx)("div", {
                        className: Ie.LeftCol,
                        children: (0, e.jsx)(B.ROZ, { role: "presentation" }),
                      }),
                      (0, e.jsxs)("div", {
                        className: Ie.RightCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ie.TopicHeader,
                            children: (0, n.we)(
                              "#FAQViewer_SideBar_CommunityHelp_Title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, n.we)(
                              "#FAQViewer_SideBar_CommunityHelp_Desc",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: Ie.CenterButtonCtn,
                            children: (0, e.jsx)("a", {
                              href: G.TS.COMMUNITY_BASE_URL + "discussions",
                              className: u.EditPreviewButton,
                              children: (0, n.we)(
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
              [r, l] = (0, N.Kv)(a, (0, g.sfN)(G.TS.LANGUAGE));
            if (l) {
              if (!r)
                return (0, e.jsx)(Ze, {
                  children: (0, e.jsx)(lt, {
                    strError: (0, n.we)("#FAQViewer_NoFAQFound"),
                  }),
                });
            } else
              return (0, e.jsx)(Ze, {
                children: (0, e.jsx)(x.t, {
                  position: "center",
                  size: "xlarge",
                  string: (0, n.we)("#Loading"),
                }),
              });
            return (0, e.jsx)(it, {
              title: r.title,
              content: r.content,
              version: r.version,
              elSideBars: [
                (0, e.jsx)(zt, { faqContent: r }, "sidebar"),
                (0, e.jsx)(Ut, { faqContent: r }, "adminbar"),
              ],
            });
          },
          lt = (i) => {
            var a;
            const r =
              G.TS.COMMUNITY_BASE_URL +
              (G.UF.APPID
                ? "app/" + ((a = G.UF.VANITY_ID) != null ? a : G.UF.APPID)
                : "gid/" + G.UF.CLANSTEAMID);
            return (0, e.jsxs)("div", {
              className: et().ErrorCtn,
              children: [
                (0, e.jsx)("div", {
                  className: et().ErrorMsg,
                  children: i.strError,
                }),
                (0, e.jsx)("a", {
                  className: et().EscapeLink,
                  href: r,
                  children: (0, n.we)("#FAQViewer_GoToHomepage"),
                }),
              ],
            });
          },
          Ht = (0, q.PA)((i) => {
            const { faqid: a } = i,
              [r, l] = (0, N.z5)(a),
              c = Me.O.Get().GetCurEditLanguage();
            if (l) {
              if (!r)
                return (0, e.jsx)(Ze, {
                  children: (0, e.jsx)(lt, {
                    strError: (0, n.we)("#FAQViewer_NoFAQFound"),
                  }),
                });
            } else
              return (0, e.jsx)(Ze, {
                children: (0, e.jsx)(x.t, {
                  position: "center",
                  size: "xlarge",
                  string: (0, n.we)("#Loading"),
                }),
              });
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(st, { draft: r, bPreview: !0 }),
                (0, e.jsx)(it, {
                  title: r.GetDraftTitleWithFallback(c, G.TS.EREALM),
                  content: r.GetDraftContentWithFallback(c, G.TS.EREALM),
                  version: "" + r.GetLastTimeLanguageUpdated(c),
                  language: c,
                }),
                (0, e.jsx)(at, { draft: r, eLanguage: c }),
              ],
            });
          });
        var Je = o(20076),
          Kt = o(90783);
        const Ge = {
            ViewFAQ: (i, a) => `/faqs/${i}/view/${a}*`,
            EditFAQ: (i, a) => `/faqs/${i}/edit/${a}*`,
            DashboardFAQ: (i) => `/faqs/${i}/dashboard`,
            PreviewFAQ: (i, a) => `/faqs/${i}/preview/${a}*`,
          },
          Yt = (0, q.PA)((i) =>
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(We, {}),
                (0, e.jsxs)(re.dO, {
                  children: [
                    (0, e.jsx)(re.qh, {
                      path: Ge.ViewFAQ(":vanity_str", ":faqid"),
                      render: (a) =>
                        (0, e.jsx)(Je.X, {
                          config: {
                            "faqs-root": () => {
                              const { faqid: r } = a.match.params,
                                l = (0, N.CJ)(r);
                              return (0, e.jsx)(Wt, { faqid: l });
                            },
                          },
                        }),
                    }),
                    (0, e.jsx)(re.qh, {
                      path: Ge.EditFAQ(":vanity_str", ":faqid"),
                      render: (a) =>
                        (0, e.jsx)(Je.X, {
                          config: {
                            "faqs-root": () => {
                              const { faqid: r } = a.match.params;
                              if (r) {
                                const l = (0, N.CJ)(r);
                                return l
                                  ? (0, e.jsx)(Rt, { faqid: l })
                                  : (0, e.jsx)(re.rd, {
                                      push: !0,
                                      to: f(C.k_eCommunityDashboard),
                                    });
                              } else return (0, e.jsx)(Fe, {});
                            },
                          },
                        }),
                    }),
                    (0, e.jsx)(re.qh, {
                      path: Ge.DashboardFAQ(":vanity_str"),
                      render: (a) =>
                        (0, e.jsx)(Je.X, {
                          config: { "faqs-root": () => (0, e.jsx)(Fe, {}) },
                        }),
                    }),
                    (0, e.jsx)(re.qh, {
                      path: Ge.PreviewFAQ(":vanity_str", ":faqid"),
                      render: (a) =>
                        (0, e.jsx)(Je.X, {
                          config: {
                            "faqs-root": () => {
                              const { faqid: r } = a.match.params,
                                l = (0, N.CJ)(r);
                              return (0, e.jsx)(Ht, { faqid: l });
                            },
                          },
                        }),
                    }),
                    (0, e.jsx)(re.qh, { component: Kt.a }),
                  ],
                }),
              ],
            }),
          );
      },
      6864: (W, be, o) => {
        "use strict";
        o.d(be, { p: () => O, s: () => x });
        var e = o(7850),
          q = o(90626),
          Q = o(19316),
          g = o(95695),
          N = o.n(g),
          S = o(85143),
          re = o(11243),
          ge = o(18210),
          G = o(91126),
          C = o.n(G),
          J = o(56585),
          f = o(99412),
          v = o(35766),
          p = o(85599),
          B = o(36118);
        function x(_) {
          var n, ae;
          const { editModel: ie } = _,
            [L, me] = q.useState(f.xPp),
            [I, s] = q.useState(!1),
            [t, d] = q.useState(null),
            u = (Z) => {
              const R = Z.target.value;
              if (R === "all") me(f.xPp);
              else {
                const U = (0, f.sfN)(R);
                me(U);
              }
            },
            h = ie.GetClanSteamID(),
            D = ie.GetGID(),
            y = (0, J.Wj)(h, D),
            [, H] = q.useReducer((Z) => Z + 1, 0),
            ne =
              y.isSuccess &&
              (n = y.data) != null &&
              n.crowdin_project_id &&
              (ae = y.data) != null &&
              ae.crowdin_file_id
                ? `https://valve.crowdin.com/editor/${y.data.crowdin_project_id}/${y.data.crowdin_file_id}`
                : null,
            F = (Z) => {
              ie.SetPushSourceToCrowdInAutomatically(Z), H();
            },
            P = (0, J.IW)(h.ConvertTo64BitString(), D, L),
            T = () => {
              s(!0),
                P.mutateAsync()
                  .then(() => window.location.reload())
                  .catch((Z) => {
                    d(Z.toString()), s(!1);
                  })
                  .then(() => {
                    d(null);
                  });
            };
          return y.isLoading
            ? null
            : (0, e.jsxs)(S.Eb, {
                clanSteamID: _.editModel.GetClanSteamID(),
                children: [
                  (0, e.jsx)(v.mt, {
                    active: I,
                    children: (0, e.jsx)(p.t, {}),
                  }),
                  (0, e.jsxs)("div", {
                    className: C().ValveCrowdInSyncCtn,
                    children: [
                      (0, e.jsx)(Q.J0, {
                        value: ie.BPushUpdatesToCrowdInAutomatically(),
                        onChange: F,
                      }),
                      (0, e.jsxs)("div", {
                        className: C().ValveCrowdInSyncLabel,
                        children: [
                          (0, ge.we)(
                            "#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn",
                          ),
                          "\xA0(",
                          ne
                            ? (0, e.jsx)("a", { href: ne, children: ne })
                            : (0, ge.we)(
                                "#EventEditor_Localization_NotMappedToCrowdIn",
                              ),
                          ")",
                          (0, e.jsx)(re.o, {
                            tooltip: (0, ge.we)(
                              "#EventEditor_Localization_Tooltip",
                            ),
                            className: g.tooltip_Ctn,
                          }),
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)("span", {
                            children: (0, ge.we)(
                              "#EventEditor_Localization_RememberToSave",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)(O, { onChange: u }),
                      (0, e.jsx)("div", {
                        className: N().EditPreviewButton,
                        onClick: T,
                        children: (0, ge.we)(
                          "#EventEditor_Localization_FetchLocalization",
                        ),
                      }),
                    ],
                  }),
                  t &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("div", {
                        className: C().SyncPanelError,
                        children: [(0, e.jsx)(B.X, {}), " ", t],
                      }),
                    }),
                ],
              });
        }
        function O(_) {
          const n = (0, ge.O9)(!1);
          let ae = Array.from(n.entries());
          ae.sort((L, me) => L[1].localeCompare(me[1]));
          const ie = ae.map(([L, me]) =>
            L !== "english"
              ? (0, e.jsx)("option", { value: L, children: me }, L)
              : "",
          );
          return (0, e.jsxs)("select", {
            onChange: _.onChange,
            children: [
              (0, e.jsx)("option", {
                value: "all",
                children: (0, ge.we)("#EventEditor_Localization_AllLanguages"),
              }),
              ie,
            ],
          });
        }
      },
      26251: (W, be, o) => {
        "use strict";
        o.d(be, { Yg: () => ie, t3: () => L });
        var e = o(7850),
          q = o(40323),
          Q = o.n(q),
          g = o(90626),
          N = o(99412),
          S = o(32093),
          re = o(38410),
          ge = o(19316),
          G = o(95695),
          C = o.n(G),
          J = o(2801),
          f = o(88003),
          v = o(85599),
          p = o(34592),
          B = o(36707),
          x = o(18210),
          O = o(20398),
          _ = o(71421),
          n = o(96471),
          ae = o.n(n);
        const ie = (I) => {
            const s = (t, d) => {
              t.preventDefault();
              const {
                  fnGetLocData: u,
                  closeModal: h,
                  strFileNamePrefix: D,
                  lang: y,
                } = I,
                H = u(),
                ne = new O.s();
              let F = D ? D + "_localization" : "localization";
              switch (d) {
                case "csv_row":
                  ne.WriteLocalizationData_CSV_LanguageRows(H, F + ".csv");
                  break;
                case "csv_column":
                  ne.WriteLocalizationData_CSV_LanguageColumns(H, F + ".csv");
                  break;
                case "csv_token":
                  ne.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                    H,
                    F + ".csv",
                  );
                  break;
                case "xml":
                  ne.WriteLocalizationData_XML_SingleLanguage(
                    H,
                    y,
                    F + "_" + (0, N.x6o)((0, N.LgB)(y)) + ".xml",
                  );
                  break;
              }
              h && h();
            };
            return (0, e.jsxs)(e.Fragment, {
              children: [
                !!I.bShowCSV &&
                  (0, e.jsxs)(g.Fragment, {
                    children: [
                      (0, e.jsx)(ge.jn, {
                        onClick: (t) => s(t, "csv_row"),
                        children: (0, x.we)(
                          "#Localization_Export_Btn_RowLanguages",
                        ),
                      }),
                      (0, e.jsx)(ge.jn, {
                        onClick: (t) => s(t, "csv_column"),
                        children: (0, x.we)(
                          "#Localization_Export_Btn_ColumnLanguages",
                        ),
                      }),
                      (0, e.jsx)(ge.jn, {
                        onClick: (t) => s(t, "csv_token"),
                        children: (0, x.we)(
                          "#Localization_Export_Btn_TokenLanguages",
                        ),
                      }),
                    ],
                  }),
                !!I.bShowXML &&
                  (0, e.jsx)(ge.jn, {
                    onClick: (t) => s(t, "xml"),
                    children: (0, x.we)("#Localization_Export_Btn_XML"),
                  }),
              ],
            });
          },
          L = (I) => {
            const [s, t] = (0, g.useState)(!1),
              d = (D, y) => {
                t(!1),
                  console.log(
                    "ImportLocalizationAction: On Handle Parse error: " +
                      D.message,
                    D,
                  ),
                  (0, f.pg)(
                    (0, e.jsx)(J.KG, {
                      children: (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, x.we)("#Localization_Error_Input"),
                          }),
                          (0, e.jsx)("p", { children: D.message }),
                        ],
                      }),
                    }),
                    window,
                  );
              },
              u = (D) => {
                t(!1);
                let y = "";
                D.forEach((H) => {
                  y.length > 0 && (y += ", "),
                    (y += (0, x.we)("#Language_" + (0, N.LgB)(H)));
                }),
                  (0, f.pg)(
                    (0, e.jsx)(J.o0, {
                      strTitle: (0, x.we)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                      children: (0, e.jsx)("div", {
                        children:
                          y.length == 0
                            ? (0, x.we)(
                                "#Localization_Success_ImportComplete_NoChange",
                              )
                            : (0, x.we)(
                                "#Localization_Success_ImportComplete",
                                y,
                              ),
                      }),
                    }),
                    window,
                  );
              },
              h = async (D) => {
                let y = D.target.files;
                if (y && y.length > 0) {
                  t(!0);
                  let H = new Array(),
                    ne = new O.s();
                  for (let F = 0; F < y.length; ++F)
                    if (y[F])
                      if (y[F].name.toLocaleLowerCase().endsWith(".csv")) {
                        Q().parse(y[0], {
                          header: !0,
                          complete: (P) => {
                            let Z = new O.s().DetectAndFormatCSV(P);
                            if (!Z) {
                              d({
                                code: "",
                                message: "",
                                row: 0,
                                type: "filenameerror",
                              });
                              return;
                            }
                            const R = x.A0.GetLanguageListForRealms([
                                S.TU.k_ESteamRealmGlobal,
                              ]),
                              U = I.fnOnImportLocData(Z, R);
                            u(U);
                          },
                          error: d,
                        });
                        return;
                      } else if (
                        y[F].name.toLocaleLowerCase().endsWith(".xml")
                      ) {
                        let { language: P } = (0, re.jj)(y[F].name, N.xPp);
                        if (P == null || P == N.xPp) {
                          d({
                            code: "",
                            message: (0, x.we)(
                              "#Localization_Error_FileLangauage",
                              y[F].name,
                            ),
                            row: 0,
                            type: "filenameerror",
                          });
                          return;
                        }
                        try {
                          const T =
                            await ne.ReadLocalizationData_XML_SingleLanguage(
                              y[F],
                              P,
                            );
                          I.fnOnImportLocData(T, [P]).forEach((R) => {
                            H.indexOf(R) == -1 && H.push(R);
                          });
                        } catch (T) {
                          let Z = (0, p.H)(T);
                          d({
                            code: "",
                            message: (0, x.we)(
                              "#Localization_Error_XMLParseError",
                              Z.strErrorMsg,
                            ),
                            row: 0,
                            type: "parseerror",
                          });
                          return;
                        }
                      } else
                        d({
                          code: "",
                          message: (0, x.we)(
                            "#Localization_Error_FileExtention",
                            y[F].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                  u(H);
                }
              };
            return (0, e.jsx)(_.he, {
              className: (0, B.A)(
                I.className ? I.className : G.EditPreviewButton,
              ),
              toolTipContent: I.strToolTip,
              children: (0, e.jsxs)("label", {
                className: n.ImportButton,
                htmlFor: "importlocalization",
                children: [
                  s && (0, e.jsx)(v.t, { size: "small" }),
                  (0, e.jsx)("div", {
                    className: n.Label,
                    children: (0, x.we)(
                      I.strLabel ? I.strLabel : "#Localization_Import_Btn",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    id: "importlocalization",
                    className: n.ImportButton,
                    style: { display: "none" },
                    type: "file",
                    onSubmit: h,
                    onChange: h,
                    multiple: !0,
                  }),
                ],
              }),
            });
          },
          me = (I) => {
            const {
                fnOnImportLocData: s,
                closeModal: t,
                sampleLocData: d,
                sampleFilename: u,
              } = I,
              h = (y, H) => {
                const ne = s(y, H);
                return t(), ne;
              },
              D = new CLocalizationImportExport();
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
                            D.WriteLocalizationData_CSV_LanguageRows(
                              d,
                              u + "_row.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerRow"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            D.WriteLocalizationData_CSV_LanguageColumns(
                              d,
                              u + "_col.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerCol"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            D.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                              d,
                              u + "_token.csv",
                            ),
                          children: Localize("#ImportLoc_CSVTokenLang"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            D.WriteLocalizationData_XML_SingleLanguage(
                              d,
                              k_ELanguage_English,
                              u + "xml",
                            ),
                          children: Localize("#ImportLoc_XML"),
                        }),
                      ],
                    }),
                  ],
                }),
                jsx(Dialog.Footer, {
                  children: jsx(L, {
                    strLabel: Localize("#BuildNotes_ImportLocalization"),
                    fnOnImportLocData: h,
                  }),
                }),
              ],
            });
          };
      },
      20398: (W, be, o) => {
        "use strict";
        o.d(be, { G: () => G, s: () => C });
        var e = o(99412),
          q = o(32093),
          Q = o(41635),
          g = o(22880),
          N = o(18210),
          S = Object.defineProperty,
          re = (J, f, v) =>
            f in J
              ? S(J, f, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: v,
                })
              : (J[f] = v),
          ge = (J, f, v) => re(J, typeof f != "symbol" ? f + "" : f, v);
        class G {
          constructor() {
            ge(this, "m_mapTokens", new Map());
          }
          GetLocalization(f, v) {
            const p = this.m_mapTokens.get(f);
            if (!(!p || !p[v])) return p[v];
          }
          SetLocalization(f, v, p) {
            let B = this.m_mapTokens.get(f);
            B || ((B = (0, Q.$Y)([], e.bP9, null)), this.m_mapTokens.set(f, B)),
              (B[v] = p);
          }
          GetSortedTokenList() {
            let f = [];
            return (
              this.m_mapTokens.forEach((v, p) => f.push(p)),
              f.sort((v, p) => v.localeCompare(p)),
              f
            );
          }
          GetLanguagesWithTokens() {
            let f = new Map();
            this.m_mapTokens.forEach((p) => {
              for (let B = 0; B < p.length; ++B)
                !f.has(B) &&
                  p[B] !== null &&
                  p[B] !== void 0 &&
                  p[B].trim().length > 0 &&
                  f.set(B, !0);
            });
            let v = new Array();
            return (
              f.forEach((p, B) => {
                p && v.push(B);
              }),
              v
            );
          }
          ClearLanguagesTokens(f) {
            f.forEach((v) => {
              this.m_mapTokens.forEach((p, B) => {
                v < p.length && p[v] !== null && (p[v] = null);
              });
            });
          }
          DebugPrintData() {
            const f = new Array();
            return (
              this.m_mapTokens.forEach((v, p) => f.push(`${p}=${v.join(",")}`)),
              f.join(`
`)
            );
          }
        }
        class C {
          DetectAndFormatCSV(f) {
            var v, p, B, x, O, _;
            let n = null;
            return (
              ((p =
                (v = f == null ? void 0 : f.meta) == null
                  ? void 0
                  : v.fields) == null
                ? void 0
                : p.length) >= 3 &&
              f.meta.fields[0] === "field" &&
              f.meta.fields[1] === "language" &&
              f.meta.fields[2] === "value"
                ? (n = this.ReadLocalizationData_CSV_TokenLanguageList(f))
                : ((x =
                      (B = f == null ? void 0 : f.meta) == null
                        ? void 0
                        : B.fields) == null
                      ? void 0
                      : x.length) >= 2 &&
                    f.meta.fields[0] === "field" &&
                    (0, e.sfN)(f.meta.fields[1], e.xPp) != e.xPp
                  ? (n = this.ReadLocalizationData_CSV_LanguageColumns(f))
                  : ((_ =
                      (O = f == null ? void 0 : f.meta) == null
                        ? void 0
                        : O.fields) == null
                      ? void 0
                      : _.length) >= 2 &&
                    f.meta.fields[0] === "language" &&
                    (n = this.ReadLocalizationData_CSV_LanguageRows(f)),
              n
            );
          }
          async ReadLocalizationData_XML_SingleLanguage(f, v) {
            let p = new G(),
              B = new DOMParser(),
              x = await g.g.ReadFile(f),
              O = B.parseFromString(x.toString(), "application/xml");
            for (let _ = 0; _ < O.documentElement.children.length; ++_) {
              const n = O.documentElement.children.item(_);
              if (!n.getAttribute("id"))
                throw "Can not find id for element. Probably malformed XML";
              const ae = n.getAttribute("id").toLocaleLowerCase(),
                ie = n.textContent;
              p.SetLocalization(ae, v, ie);
            }
            return p;
          }
          ReadLocalizationData_CSV_TokenLanguageList(f) {
            const v = new G();
            return (
              f.data.forEach((p) => {
                const B = p.field,
                  x = (0, e.sfN)(p.language);
                v.SetLocalization(B, x, p.value);
              }),
              v
            );
          }
          ReadLocalizationData_CSV_LanguageColumns(f) {
            const v = new G();
            return (
              f.data.forEach((p) => {
                const B = p.field;
                for (let x = e.Bhc; x < e.bP9; ++x) {
                  const O = (0, e.x6o)((0, e.LgB)(x));
                  v.SetLocalization(B, x, p[O]);
                }
              }),
              v
            );
          }
          ReadLocalizationData_CSV_LanguageRows(f) {
            const v = new G();
            return (
              f.data.forEach((p) => {
                const B = (0, e.sfN)(p.language, e.bP9);
                if (B !== e.bP9)
                  for (const [x, O] of Object.entries(p))
                    x === "language" ||
                      typeof O != "string" ||
                      v.SetLocalization(x, B, O);
              }),
              v
            );
          }
          GetExportLanguages() {
            return N.A0.GetLanguageListForRealms([q.TU.k_ESteamRealmGlobal]);
          }
          WriteLocalizationData_CSV_TokenAndLanguageColumns(f, v) {
            let p = new Array();
            f.GetSortedTokenList().forEach((x) => {
              for (const O of this.GetExportLanguages()) {
                let _ = { field: x };
                (_.language = (0, e.x6o)((0, e.LgB)(O))),
                  (_.value = f.GetLocalization(x, O)),
                  p.push(_);
              }
            }),
              g.g.WriteCSVToFile(p, v);
          }
          WriteLocalizationData_CSV_LanguageColumns(f, v) {
            let p = new Array();
            f.GetSortedTokenList().forEach((x) => {
              let O = { field: x };
              for (const _ of this.GetExportLanguages())
                O[(0, e.x6o)((0, e.LgB)(_))] = f.GetLocalization(x, _);
              p.push(O);
            }),
              g.g.WriteCSVToFile(p, v);
          }
          WriteLocalizationData_CSV_LanguageRows(f, v) {
            let p = new Array();
            for (const x of this.GetExportLanguages())
              p.length <= x - 1 && p.push({ language: "" }),
                p.push({ language: (0, e.x6o)((0, e.LgB)(x)) });
            f.GetSortedTokenList().forEach((x) => {
              for (const O of this.GetExportLanguages()) {
                const _ = f.GetLocalization(x, O);
                p[O][x] = _;
              }
            }),
              g.g.WriteCSVToFile(p, v);
          }
          WriteLocalizationData_XML_SingleLanguage(f, v, p) {
            let B = document.implementation.createDocument(
              null,
              "content",
              null,
            );
            f.GetSortedTokenList().forEach((O) => {
              let _ = B.createElement("string");
              _.setAttribute("id", O),
                _.appendChild(B.createTextNode(f.GetLocalization(O, v) || "")),
                B.documentElement.append(_);
            }),
              g.g.WriteXMLToFile(B, p);
          }
        }
      },
      11259: (W) => {
        W.exports = {
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
      63280: (W) => {
        W.exports = {
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
      93084: (W) => {
        W.exports = {
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
      35707: (W) => {
        W.exports = {
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
      3063: (W) => {
        W.exports = {
          Never: "_8rlUGGeBnYbuZpSoMtPGY",
          Warning: "pZM2L30-1FOU9cbzqy1AQ",
        };
      },
      66444: (W) => {
        W.exports = {
          FAQUnPublished: "erZyIOjQA9q0Wv28vQPiN",
          FAQPublished: "_13Wz0jEDJuyCYIYT-3Nk8X",
          EditorInternalNameLabel: "_3fAcXrEhyNYZKLFAviS1gi",
          EditorInternalName: "_3A9ciQBxaVrGEWI6kD4zod",
        };
      },
      25651: (W) => {
        W.exports = {
          ErrorCtn: "_2Dpwh3MWbH9ND0PlNK8G7M",
          ErrorMsg: "_2dTNxR8PrLvqBwSUnhUVh5",
          EscapeLink: "_19BjjT3X_AZgLiL1pFYCDG",
        };
      },
      54736: (W) => {
        W.exports = {
          DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
          EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
          EventEditorBottomBar: "_1noS58WsfHN3KuGVDzlv9r",
          EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
          EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
          AdditionalContent: "_2fUl5vCnrlT9P7kskRIiWx",
        };
      },
      51520: (W) => {
        W.exports = {
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
      91126: (W) => {
        W.exports = {
          ValveCrowdInSyncCtn: "_8MIrt7rQXkA0xE5sAjOee",
          ValveCrowdInSyncLabel: "_22b0C1Xi03QNdTFKsYypHR",
          SyncPanelError: "yn_yu2EaUigYFm9QQAD7o",
        };
      },
      28735: (W) => {
        W.exports = {
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
      20572: (W) => {
        W.exports = { InfoRow: "_3AG-7BbBE7Sw0efJrEb417" };
      },
      66891: (W) => {
        W.exports = {
          Section: "_3S-XzUnd8sYIE7sDuLmpPo",
          CommunityHelp: "_2TGFIDdCmMB614_-hieBc7",
          NeedHelp: "_1DywXfNVrbQvDpTJXgd18z",
          LeftCol: "_3gfCnqvp6FV0m9PqL9XMq",
          TopicHeader: "_3X6huZLPQI8y6LirxSv4Gy",
          CenterButtonCtn: "_3sZ58WE85Tqs8Bv8g-quYc",
        };
      },
      96471: (W) => {
        W.exports = {
          Label: "_1LhItwhLHspVcQdfcbd2Sg",
          ImportLocSampleButtonCtn: "D-1dlROLVuva-sb6tFgwU",
          SampleTitle: "_9189ilzQ3YES-a-6DyBhR",
          ImportButton: "WyfyxbGrKQq8cKMK5kfxE",
        };
      },
      40323: function (W, be) {
        var o, e, q; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((Q, g) => {
          (e = []),
            (o = g),
            (q = typeof o == "function" ? o.apply(be, e) : o),
            q !== void 0 && (W.exports = q);
        })(this, function Q() {
          var g =
              typeof self != "undefined"
                ? self
                : typeof window != "undefined"
                  ? window
                  : g !== void 0
                    ? g
                    : {},
            N,
            S = !g.document && !!g.postMessage,
            re = g.IS_PAPA_WORKER || !1,
            ge = {},
            G = 0,
            C = {};
          function J(s) {
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
                var d = L(t);
                (d.chunkSize = parseInt(d.chunkSize)),
                  t.step || t.chunk || (d.chunkSize = null),
                  (this._handle = new x(d)),
                  ((this._handle.streamer = this)._config = d);
              }.call(this, s),
              (this.parseChunk = function (t, d) {
                var u = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < u) {
                  let D = this._config.newline;
                  D ||
                    ((h = this._config.quoteChar || '"'),
                    (D = this._handle.guessLineEndings(t, h))),
                    (t = [...t.split(D).slice(u)].join(D));
                }
                this.isFirstChunk &&
                  I(this._config.beforeFirstChunk) &&
                  (h = this._config.beforeFirstChunk(t)) !== void 0 &&
                  (t = h),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var u = this._partialLine + t,
                  h =
                    ((this._partialLine = ""),
                    this._handle.parse(u, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((t = h.meta.cursor),
                    (u =
                      (this._finished ||
                        ((this._partialLine = u.substring(t - this._baseIndex)),
                        (this._baseIndex = t)),
                      h && h.data && (this._rowCount += h.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    re)
                  )
                    g.postMessage({
                      results: h,
                      workerId: C.WORKER_ID,
                      finished: u,
                    });
                  else if (I(this._config.chunk) && !d) {
                    if (
                      (this._config.chunk(h, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = h = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(h.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(h.errors)),
                      (this._completeResults.meta = h.meta)),
                    this._completed ||
                      !u ||
                      !I(this._config.complete) ||
                      (h && h.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    u || (h && h.meta.paused) || this._nextChunk(),
                    h
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (t) {
                I(this._config.error)
                  ? this._config.error(t)
                  : re &&
                    this._config.error &&
                    g.postMessage({
                      workerId: C.WORKER_ID,
                      error: t,
                      finished: !1,
                    });
              });
          }
          function f(s) {
            var t;
            (s = s || {}).chunkSize || (s.chunkSize = C.RemoteChunkSize),
              J.call(this, s),
              (this._nextChunk = S
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (d) {
                (this._input = d), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((t = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (t.withCredentials = this._config.withCredentials),
                    S ||
                      ((t.onload = me(this._chunkLoaded, this)),
                      (t.onerror = me(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !S,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var d,
                      u = this._config.downloadRequestHeaders;
                    for (d in u) t.setRequestHeader(d, u[d]);
                  }
                  var h;
                  this._config.chunkSize &&
                    ((h = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + h,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (D) {
                    this._chunkError(D.message);
                  }
                  S && t.status === 0 && this._chunkError();
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
                          ((d) =>
                            (d = d.getResponseHeader("Content-Range")) !== null
                              ? parseInt(d.substring(d.lastIndexOf("/") + 1))
                              : -1)(t)),
                      this.parseChunk(t.responseText)));
              }),
              (this._chunkError = function (d) {
                (d = t.statusText || d), this._sendError(new Error(d));
              });
          }
          function v(s) {
            (s = s || {}).chunkSize || (s.chunkSize = C.LocalChunkSize),
              J.call(this, s);
            var t,
              d,
              u = typeof FileReader != "undefined";
            (this.stream = function (h) {
              (this._input = h),
                (d = h.slice || h.webkitSlice || h.mozSlice),
                u
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
                var h = this._input,
                  D =
                    (this._config.chunkSize &&
                      ((D = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (h = d.call(h, this._start, D))),
                    t.readAsText(h, this._config.encoding));
                u || this._chunkLoaded({ target: { result: D } });
              }),
              (this._chunkLoaded = function (h) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(h.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(t.error);
              });
          }
          function p(s) {
            var t;
            J.call(this, (s = s || {})),
              (this.stream = function (d) {
                return (t = d), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var d, u;
                if (!this._finished)
                  return (
                    (d = this._config.chunkSize),
                    (t = d
                      ? ((u = t.substring(0, d)), t.substring(d))
                      : ((u = t), "")),
                    (this._finished = !t),
                    this.parseChunk(u)
                  );
              });
          }
          function B(s) {
            J.call(this, (s = s || {}));
            var t = [],
              d = !0,
              u = !1;
            (this.pause = function () {
              J.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                J.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (h) {
                (this._input = h),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                u && t.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (d = !0);
              }),
              (this._streamData = me(function (h) {
                try {
                  t.push(
                    typeof h == "string"
                      ? h
                      : h.toString(this._config.encoding),
                  ),
                    d &&
                      ((d = !1),
                      this._checkIsFinished(),
                      this.parseChunk(t.shift()));
                } catch (D) {
                  this._streamError(D);
                }
              }, this)),
              (this._streamError = me(function (h) {
                this._streamCleanUp(), this._sendError(h);
              }, this)),
              (this._streamEnd = me(function () {
                this._streamCleanUp(), (u = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = me(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function x(s) {
            var t,
              d,
              u,
              h,
              D = Math.pow(2, 53),
              y = -D,
              H = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              ne =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              F = this,
              P = 0,
              T = 0,
              Z = !1,
              R = !1,
              U = [],
              b = { data: [], errors: [], meta: {} };
            function ve(k) {
              return s.skipEmptyLines === "greedy"
                ? k.join("").trim() === ""
                : k.length === 1 && k[0].length === 0;
            }
            function pe() {
              if (
                (b &&
                  u &&
                  (we(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      C.DefaultDelimiter +
                      "'",
                  ),
                  (u = !1)),
                s.skipEmptyLines &&
                  (b.data = b.data.filter(function (de) {
                    return !ve(de);
                  })),
                Ae())
              ) {
                let de = function (Ee, ce) {
                  I(s.transformHeader) && (Ee = s.transformHeader(Ee, ce)),
                    U.push(Ee);
                };
                var z = de;
                if (b)
                  if (Array.isArray(b.data[0])) {
                    for (var k = 0; Ae() && k < b.data.length; k++)
                      b.data[k].forEach(de);
                    b.data.splice(0, 1);
                  } else b.data.forEach(de);
              }
              function K(de, Ee) {
                for (
                  var ce = s.header ? {} : [], te = 0;
                  te < de.length;
                  te++
                ) {
                  var V = te,
                    xe = de[te],
                    xe = ((X, oe) =>
                      ((fe) => (
                        s.dynamicTypingFunction &&
                          s.dynamicTyping[fe] === void 0 &&
                          (s.dynamicTyping[fe] = s.dynamicTypingFunction(fe)),
                        (s.dynamicTyping[fe] || s.dynamicTyping) === !0
                      ))(X)
                        ? oe === "true" ||
                          oe === "TRUE" ||
                          (oe !== "false" &&
                            oe !== "FALSE" &&
                            (((fe) => {
                              if (
                                H.test(fe) &&
                                ((fe = parseFloat(fe)), y < fe && fe < D)
                              )
                                return 1;
                            })(oe)
                              ? parseFloat(oe)
                              : ne.test(oe)
                                ? new Date(oe)
                                : oe === ""
                                  ? null
                                  : oe))
                        : oe)(
                      (V = s.header
                        ? te >= U.length
                          ? "__parsed_extra"
                          : U[te]
                        : V),
                      (xe = s.transform ? s.transform(xe, V) : xe),
                    );
                  V === "__parsed_extra"
                    ? ((ce[V] = ce[V] || []), ce[V].push(xe))
                    : (ce[V] = xe);
                }
                return (
                  s.header &&
                    (te > U.length
                      ? we(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            U.length +
                            " fields but parsed " +
                            te,
                          T + Ee,
                        )
                      : te < U.length &&
                        we(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            U.length +
                            " fields but parsed " +
                            te,
                          T + Ee,
                        )),
                  ce
                );
              }
              var ue;
              b &&
                (s.header || s.dynamicTyping || s.transform) &&
                ((ue = 1),
                !b.data.length || Array.isArray(b.data[0])
                  ? ((b.data = b.data.map(K)), (ue = b.data.length))
                  : (b.data = K(b.data, 0)),
                s.header && b.meta && (b.meta.fields = U),
                (T += ue));
            }
            function Ae() {
              return s.header && U.length === 0;
            }
            function we(k, K, ue, z) {
              (k = { type: k, code: K, message: ue }),
                z !== void 0 && (k.row = z),
                b.errors.push(k);
            }
            I(s.step) &&
              ((h = s.step),
              (s.step = function (k) {
                (b = k),
                  Ae()
                    ? pe()
                    : (pe(),
                      b.data.length !== 0 &&
                        ((P += k.data.length),
                        s.preview && P > s.preview
                          ? d.abort()
                          : ((b.data = b.data[0]), h(b, F))));
              })),
              (this.parse = function (k, K, ue) {
                var z = s.quoteChar || '"',
                  z =
                    (s.newline || (s.newline = this.guessLineEndings(k, z)),
                    (u = !1),
                    s.delimiter
                      ? I(s.delimiter) &&
                        ((s.delimiter = s.delimiter(k)),
                        (b.meta.delimiter = s.delimiter))
                      : ((z = ((de, Ee, ce, te, V) => {
                          var xe, X, oe, fe;
                          V = V || [
                            ",",
                            "	",
                            "|",
                            ";",
                            C.RECORD_SEP,
                            C.UNIT_SEP,
                          ];
                          for (var Ne = 0; Ne < V.length; Ne++) {
                            for (
                              var Fe,
                                Qe = V[Ne],
                                Le = 0,
                                Te = 0,
                                le = 0,
                                Ce =
                                  ((oe = void 0),
                                  new _({
                                    comments: te,
                                    delimiter: Qe,
                                    newline: Ee,
                                    preview: 10,
                                  }).parse(de)),
                                Se = 0;
                              Se < Ce.data.length;
                              Se++
                            )
                              ce && ve(Ce.data[Se])
                                ? le++
                                : ((Fe = Ce.data[Se].length),
                                  (Te += Fe),
                                  oe === void 0
                                    ? (oe = Fe)
                                    : 0 < Fe &&
                                      ((Le += Math.abs(Fe - oe)), (oe = Fe)));
                            0 < Ce.data.length && (Te /= Ce.data.length - le),
                              (X === void 0 || Le <= X) &&
                                (fe === void 0 || fe < Te) &&
                                1.99 < Te &&
                                ((X = Le), (xe = Qe), (fe = Te));
                          }
                          return {
                            successful: !!(s.delimiter = xe),
                            bestDelimiter: xe,
                          };
                        })(
                          k,
                          s.newline,
                          s.skipEmptyLines,
                          s.comments,
                          s.delimitersToGuess,
                        )).successful
                          ? (s.delimiter = z.bestDelimiter)
                          : ((u = !0), (s.delimiter = C.DefaultDelimiter)),
                        (b.meta.delimiter = s.delimiter)),
                    L(s));
                return (
                  s.preview && s.header && z.preview++,
                  (t = k),
                  (d = new _(z)),
                  (b = d.parse(t, K, ue)),
                  pe(),
                  Z ? { meta: { paused: !0 } } : b || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return Z;
              }),
              (this.pause = function () {
                (Z = !0),
                  d.abort(),
                  (t = I(s.chunk) ? "" : t.substring(d.getCharIndex()));
              }),
              (this.resume = function () {
                F.streamer._halted
                  ? ((Z = !1), F.streamer.parseChunk(t, !0))
                  : setTimeout(F.resume, 3);
              }),
              (this.aborted = function () {
                return R;
              }),
              (this.abort = function () {
                (R = !0),
                  d.abort(),
                  (b.meta.aborted = !0),
                  I(s.complete) && s.complete(b),
                  (t = "");
              }),
              (this.guessLineEndings = function (de, z) {
                de = de.substring(0, 1048576);
                var z = new RegExp(O(z) + "([^]*?)" + O(z), "gm"),
                  ue = (de = de.replace(z, "")).split("\r"),
                  z = de.split(`
`),
                  de = 1 < z.length && z[0].length < ue[0].length;
                if (ue.length === 1 || de)
                  return `
`;
                for (var Ee = 0, ce = 0; ce < ue.length; ce++)
                  ue[ce][0] ===
                    `
` && Ee++;
                return Ee >= ue.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function O(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function _(s) {
            var t = (s = s || {}).delimiter,
              d = s.newline,
              u = s.comments,
              h = s.step,
              D = s.preview,
              y = s.fastMode,
              H = null,
              ne = !1,
              F = s.quoteChar == null ? '"' : s.quoteChar,
              P = F;
            if (
              (s.escapeChar !== void 0 && (P = s.escapeChar),
              (typeof t != "string" || -1 < C.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              u === t)
            )
              throw new Error("Comment character same as delimiter");
            u === !0
              ? (u = "#")
              : (typeof u != "string" || -1 < C.BAD_DELIMITERS.indexOf(u)) &&
                (u = !1),
              d !==
                `
` &&
                d !== "\r" &&
                d !==
                  `\r
` &&
                (d = `
`);
            var T = 0,
              Z = !1;
            (this.parse = function (R, U, b) {
              if (typeof R != "string")
                throw new Error("Input must be a string");
              var ve = R.length,
                pe = t.length,
                Ae = d.length,
                we = u.length,
                k = I(h),
                K = [],
                ue = [],
                z = [],
                de = (T = 0);
              if (!R) return Le();
              if (y || (y !== !1 && R.indexOf(F) === -1)) {
                for (var Ee = R.split(d), ce = 0; ce < Ee.length; ce++) {
                  if (((z = Ee[ce]), (T += z.length), ce !== Ee.length - 1))
                    T += d.length;
                  else if (b) return Le();
                  if (!u || z.substring(0, we) !== u) {
                    if (k) {
                      if (((K = []), fe(z.split(t)), Te(), Z)) return Le();
                    } else fe(z.split(t));
                    if (D && D <= ce) return (K = K.slice(0, D)), Le(!0);
                  }
                }
                return Le();
              }
              for (
                var te = R.indexOf(t, T),
                  V = R.indexOf(d, T),
                  xe = new RegExp(O(P) + O(F), "g"),
                  X = R.indexOf(F, T);
                ;
              )
                if (R[T] === F)
                  for (X = T, T++; ; ) {
                    if ((X = R.indexOf(F, X + 1)) === -1)
                      return (
                        b ||
                          ue.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: K.length,
                            index: T,
                          }),
                        Fe()
                      );
                    if (X === ve - 1)
                      return Fe(R.substring(T, X).replace(xe, F));
                    if (F === P && R[X + 1] === P) X++;
                    else if (F === P || X === 0 || R[X - 1] !== P) {
                      te !== -1 && te < X + 1 && (te = R.indexOf(t, X + 1));
                      var oe = Ne(
                        (V =
                          V !== -1 && V < X + 1 ? R.indexOf(d, X + 1) : V) ===
                          -1
                          ? te
                          : Math.min(te, V),
                      );
                      if (R.substr(X + 1 + oe, pe) === t) {
                        z.push(R.substring(T, X).replace(xe, F)),
                          R[(T = X + 1 + oe + pe)] !== F &&
                            (X = R.indexOf(F, T)),
                          (te = R.indexOf(t, T)),
                          (V = R.indexOf(d, T));
                        break;
                      }
                      if (
                        ((oe = Ne(V)),
                        R.substring(X + 1 + oe, X + 1 + oe + Ae) === d)
                      ) {
                        if (
                          (z.push(R.substring(T, X).replace(xe, F)),
                          Qe(X + 1 + oe + Ae),
                          (te = R.indexOf(t, T)),
                          (X = R.indexOf(F, T)),
                          k && (Te(), Z))
                        )
                          return Le();
                        if (D && K.length >= D) return Le(!0);
                        break;
                      }
                      ue.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: K.length,
                        index: T,
                      }),
                        X++;
                    }
                  }
                else if (u && z.length === 0 && R.substring(T, T + we) === u) {
                  if (V === -1) return Le();
                  (T = V + Ae), (V = R.indexOf(d, T)), (te = R.indexOf(t, T));
                } else if (te !== -1 && (te < V || V === -1))
                  z.push(R.substring(T, te)),
                    (T = te + pe),
                    (te = R.indexOf(t, T));
                else {
                  if (V === -1) break;
                  if ((z.push(R.substring(T, V)), Qe(V + Ae), k && (Te(), Z)))
                    return Le();
                  if (D && K.length >= D) return Le(!0);
                }
              return Fe();
              function fe(le) {
                K.push(le), (de = T);
              }
              function Ne(le) {
                var Ce = 0;
                return (Ce =
                  le !== -1 && (le = R.substring(X + 1, le)) && le.trim() === ""
                    ? le.length
                    : Ce);
              }
              function Fe(le) {
                return (
                  b ||
                    (le === void 0 && (le = R.substring(T)),
                    z.push(le),
                    (T = ve),
                    fe(z),
                    k && Te()),
                  Le()
                );
              }
              function Qe(le) {
                (T = le), fe(z), (z = []), (V = R.indexOf(d, T));
              }
              function Le(le) {
                if (s.header && !U && K.length && !ne) {
                  var Ce = K[0],
                    Se = Object.create(null),
                    Ve = new Set(Ce);
                  let We = !1;
                  for (let Re = 0; Re < Ce.length; Re++) {
                    let ye = Ce[Re];
                    if (
                      Se[
                        (ye = I(s.transformHeader)
                          ? s.transformHeader(ye, Re)
                          : ye)
                      ]
                    ) {
                      let Be,
                        Me = Se[ye];
                      for (; (Be = ye + "_" + Me), Me++, Ve.has(Be); );
                      Ve.add(Be),
                        (Ce[Re] = Be),
                        Se[ye]++,
                        (We = !0),
                        ((H = H === null ? {} : H)[Be] = ye);
                    } else (Se[ye] = 1), (Ce[Re] = ye);
                    Ve.add(ye);
                  }
                  We && console.warn("Duplicate headers found and renamed."),
                    (ne = !0);
                }
                return {
                  data: K,
                  errors: ue,
                  meta: {
                    delimiter: t,
                    linebreak: d,
                    aborted: Z,
                    truncated: !!le,
                    cursor: de + (U || 0),
                    renamedHeaders: H,
                  },
                };
              }
              function Te() {
                h(Le()), (K = []), (ue = []);
              }
            }),
              (this.abort = function () {
                Z = !0;
              }),
              (this.getCharIndex = function () {
                return T;
              });
          }
          function n(s) {
            var t = s.data,
              d = ge[t.workerId],
              u = !1;
            if (t.error) d.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var h = {
                abort: function () {
                  (u = !0),
                    ae(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: ie,
                resume: ie,
              };
              if (I(d.userStep)) {
                for (
                  var D = 0;
                  D < t.results.data.length &&
                  (d.userStep(
                    {
                      data: t.results.data[D],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    h,
                  ),
                  !u);
                  D++
                );
                delete t.results;
              } else
                I(d.userChunk) &&
                  (d.userChunk(t.results, h, t.file), delete t.results);
            }
            t.finished && !u && ae(t.workerId, t.results);
          }
          function ae(s, t) {
            var d = ge[s];
            I(d.userComplete) && d.userComplete(t), d.terminate(), delete ge[s];
          }
          function ie() {
            throw new Error("Not implemented.");
          }
          function L(s) {
            if (typeof s != "object" || s === null) return s;
            var t,
              d = Array.isArray(s) ? [] : {};
            for (t in s) d[t] = L(s[t]);
            return d;
          }
          function me(s, t) {
            return function () {
              s.apply(t, arguments);
            };
          }
          function I(s) {
            return typeof s == "function";
          }
          return (
            (C.parse = function (s, t) {
              var d = (t = t || {}).dynamicTyping || !1;
              if (
                (I(d) && ((t.dynamicTypingFunction = d), (d = {})),
                (t.dynamicTyping = d),
                (t.transform = !!I(t.transform) && t.transform),
                !t.worker || !C.WORKERS_SUPPORTED)
              )
                return (
                  (d = null),
                  C.NODE_STREAM_INPUT,
                  typeof s == "string"
                    ? ((s = ((u) =>
                        u.charCodeAt(0) !== 65279 ? u : u.slice(1))(s)),
                      (d = new (t.download ? f : p)(t)))
                    : s.readable === !0 && I(s.read) && I(s.on)
                      ? (d = new B(t))
                      : ((g.File && s instanceof File) ||
                          s instanceof Object) &&
                        (d = new v(t)),
                  d.stream(s)
                );
              ((d = (() => {
                var u;
                return (
                  !!C.WORKERS_SUPPORTED &&
                  ((u = (() => {
                    var h = g.URL || g.webkitURL || null,
                      D = Q.toString();
                    return (
                      C.BLOB_URL ||
                      (C.BLOB_URL = h.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            D,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((u = new g.Worker(u)).onmessage = n),
                  (u.id = G++),
                  (ge[u.id] = u))
                );
              })()).userStep = t.step),
                (d.userChunk = t.chunk),
                (d.userComplete = t.complete),
                (d.userError = t.error),
                (t.step = I(t.step)),
                (t.chunk = I(t.chunk)),
                (t.complete = I(t.complete)),
                (t.error = I(t.error)),
                delete t.worker,
                d.postMessage({ input: s, config: t, workerId: d.id });
            }),
            (C.unparse = function (s, t) {
              var d = !1,
                u = !0,
                h = ",",
                D = `\r
`,
                y = '"',
                H = y + y,
                ne = !1,
                F = null,
                P = !1,
                T =
                  ((() => {
                    if (typeof t == "object") {
                      if (
                        (typeof t.delimiter != "string" ||
                          C.BAD_DELIMITERS.filter(function (U) {
                            return t.delimiter.indexOf(U) !== -1;
                          }).length ||
                          (h = t.delimiter),
                        (typeof t.quotes != "boolean" &&
                          typeof t.quotes != "function" &&
                          !Array.isArray(t.quotes)) ||
                          (d = t.quotes),
                        (typeof t.skipEmptyLines != "boolean" &&
                          typeof t.skipEmptyLines != "string") ||
                          (ne = t.skipEmptyLines),
                        typeof t.newline == "string" && (D = t.newline),
                        typeof t.quoteChar == "string" && (y = t.quoteChar),
                        typeof t.header == "boolean" && (u = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (t.columns.length === 0)
                          throw new Error("Option columns is empty");
                        F = t.columns;
                      }
                      t.escapeChar !== void 0 && (H = t.escapeChar + y),
                        t.escapeFormulae instanceof RegExp
                          ? (P = t.escapeFormulae)
                          : typeof t.escapeFormulae == "boolean" &&
                            t.escapeFormulae &&
                            (P = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(O(y), "g"));
              if (
                (typeof s == "string" && (s = JSON.parse(s)), Array.isArray(s))
              ) {
                if (!s.length || Array.isArray(s[0])) return Z(null, s, ne);
                if (typeof s[0] == "object")
                  return Z(F || Object.keys(s[0]), s, ne);
              } else if (typeof s == "object")
                return (
                  typeof s.data == "string" && (s.data = JSON.parse(s.data)),
                  Array.isArray(s.data) &&
                    (s.fields || (s.fields = (s.meta && s.meta.fields) || F),
                    s.fields ||
                      (s.fields = Array.isArray(s.data[0])
                        ? s.fields
                        : typeof s.data[0] == "object"
                          ? Object.keys(s.data[0])
                          : []),
                    Array.isArray(s.data[0]) ||
                      typeof s.data[0] == "object" ||
                      (s.data = [s.data])),
                  Z(s.fields || [], s.data || [], ne)
                );
              throw new Error("Unable to serialize unrecognized input");
              function Z(U, b, ve) {
                var pe = "",
                  Ae =
                    (typeof U == "string" && (U = JSON.parse(U)),
                    typeof b == "string" && (b = JSON.parse(b)),
                    Array.isArray(U) && 0 < U.length),
                  we = !Array.isArray(b[0]);
                if (Ae && u) {
                  for (var k = 0; k < U.length; k++)
                    0 < k && (pe += h), (pe += R(U[k], k));
                  0 < b.length && (pe += D);
                }
                for (var K = 0; K < b.length; K++) {
                  var ue = (Ae ? U : b[K]).length,
                    z = !1,
                    de = Ae
                      ? Object.keys(b[K]).length === 0
                      : b[K].length === 0;
                  if (
                    (ve &&
                      !Ae &&
                      (z =
                        ve === "greedy"
                          ? b[K].join("").trim() === ""
                          : b[K].length === 1 && b[K][0].length === 0),
                    ve === "greedy" && Ae)
                  ) {
                    for (var Ee = [], ce = 0; ce < ue; ce++) {
                      var te = we ? U[ce] : ce;
                      Ee.push(b[K][te]);
                    }
                    z = Ee.join("").trim() === "";
                  }
                  if (!z) {
                    for (var V = 0; V < ue; V++) {
                      0 < V && !de && (pe += h);
                      var xe = Ae && we ? U[V] : V;
                      pe += R(b[K][xe], V);
                    }
                    K < b.length - 1 && (!ve || (0 < ue && !de)) && (pe += D);
                  }
                }
                return pe;
              }
              function R(U, b) {
                var ve, pe;
                return U == null
                  ? ""
                  : U.constructor === Date
                    ? JSON.stringify(U).slice(1, 25)
                    : ((pe = !1),
                      P &&
                        typeof U == "string" &&
                        P.test(U) &&
                        ((U = "'" + U), (pe = !0)),
                      (ve = U.toString().replace(T, H)),
                      (pe =
                        pe ||
                        d === !0 ||
                        (typeof d == "function" && d(U, b)) ||
                        (Array.isArray(d) && d[b]) ||
                        ((Ae, we) => {
                          for (var k = 0; k < we.length; k++)
                            if (-1 < Ae.indexOf(we[k])) return !0;
                          return !1;
                        })(ve, C.BAD_DELIMITERS) ||
                        -1 < ve.indexOf(h) ||
                        ve.charAt(0) === " " ||
                        ve.charAt(ve.length - 1) === " ")
                        ? y + ve + y
                        : ve);
              }
            }),
            (C.RECORD_SEP = ""),
            (C.UNIT_SEP = ""),
            (C.BYTE_ORDER_MARK = "\uFEFF"),
            (C.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              C.BYTE_ORDER_MARK,
            ]),
            (C.WORKERS_SUPPORTED = !S && !!g.Worker),
            (C.NODE_STREAM_INPUT = 1),
            (C.LocalChunkSize = 10485760),
            (C.RemoteChunkSize = 5242880),
            (C.DefaultDelimiter = ","),
            (C.Parser = _),
            (C.ParserHandle = x),
            (C.NetworkStreamer = f),
            (C.FileStreamer = v),
            (C.StringStreamer = p),
            (C.ReadableStreamStreamer = B),
            g.jQuery &&
              ((N = g.jQuery).fn.parse = function (s) {
                var t = s.config || {},
                  d = [];
                return (
                  this.each(function (D) {
                    if (
                      !(
                        N(this).prop("tagName").toUpperCase() === "INPUT" &&
                        N(this).attr("type").toLowerCase() === "file" &&
                        g.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var y = 0; y < this.files.length; y++)
                      d.push({
                        file: this.files[y],
                        inputElem: this,
                        instanceConfig: N.extend({}, t),
                      });
                  }),
                  u(),
                  this
                );
                function u() {
                  if (d.length === 0) I(s.complete) && s.complete();
                  else {
                    var D,
                      y,
                      H,
                      ne,
                      F = d[0];
                    if (I(s.before)) {
                      var P = s.before(F.file, F.inputElem);
                      if (typeof P == "object") {
                        if (P.action === "abort")
                          return (
                            (D = "AbortError"),
                            (y = F.file),
                            (H = F.inputElem),
                            (ne = P.reason),
                            void (I(s.error) && s.error({ name: D }, y, H, ne))
                          );
                        if (P.action === "skip") return void h();
                        typeof P.config == "object" &&
                          (F.instanceConfig = N.extend(
                            F.instanceConfig,
                            P.config,
                          ));
                      } else if (P === "skip") return void h();
                    }
                    var T = F.instanceConfig.complete;
                    (F.instanceConfig.complete = function (Z) {
                      I(T) && T(Z, F.file, F.inputElem), h();
                    }),
                      C.parse(F.file, F.instanceConfig);
                  }
                }
                function h() {
                  d.splice(0, 1), u();
                }
              }),
            re &&
              (g.onmessage = function (s) {
                (s = s.data),
                  C.WORKER_ID === void 0 && s && (C.WORKER_ID = s.workerId),
                  typeof s.input == "string"
                    ? g.postMessage({
                        workerId: C.WORKER_ID,
                        results: C.parse(s.input, s.config),
                        finished: !0,
                      })
                    : ((g.File && s.input instanceof File) ||
                        s.input instanceof Object) &&
                      (s = C.parse(s.input, s.config)) &&
                      g.postMessage({
                        workerId: C.WORKER_ID,
                        results: s,
                        finished: !0,
                      });
              }),
            ((f.prototype = Object.create(J.prototype)).constructor = f),
            ((v.prototype = Object.create(J.prototype)).constructor = v),
            ((p.prototype = Object.create(p.prototype)).constructor = p),
            ((B.prototype = Object.create(J.prototype)).constructor = B),
            C
          );
        });
      },
      59461: (W, be, o) => {
        "use strict";
        o.d(be, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=";
      },
      26759: (W, be, o) => {
        "use strict";
        o.d(be, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
      },
    },
  ]);
})();
