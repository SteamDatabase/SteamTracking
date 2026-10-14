/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [3781],
    {
      56585: (K, Te, c) => {
        "use strict";
        c.d(Te, {
          IB: () => ye,
          IW: () => Ce,
          Wj: () => b,
          X0: () => le,
          r$: () => Ie,
          yW: () => de,
        });
        var e = c(7850),
          ee = c(72604),
          D = c(35038),
          g = c(88942),
          y = c(61739),
          _ = c(68312),
          se = c(98112),
          Ne = c(90626);
        function O(C) {
          const a = (0, _.KV)(),
            ce = (0, g.I)({
              queryKey: C.queryKey,
              queryFn: async () => C.queryFn(a, ...C.args),
            });
          return C.children(ce);
        }
        function b(C, a) {
          const ce = (0, _.KV)();
          return (0, g.I)({
            queryKey: [
              "crowdin_metadata_for_clan_event",
              C.ConvertTo64BitString(),
              a,
            ],
            queryFn: async () => {
              const ve = D.w.Init(se.$5);
              ve.Body().set_steamid(C.ConvertTo64BitString()),
                ve.Body().set_itemid(a);
              const j = await se.BE.GetClanEventCrowdInMetadata(ce, ve);
              return j.GetEResult() != ee.R ? null : j.Body().toObject();
            },
          });
        }
        async function fe(C, a) {
          const ce = D.w.Init(se.hA);
          ce.Body().set_steamid(a);
          const ve = await se.BE.GetClanCrowdInMetadata(C, ce);
          if (ve.GetEResult() === ee.p)
            return {
              crowdin_project_id: null,
              crowdin_directory_id: null,
              push_by_default: !1,
            };
          if (ve.GetEResult() !== ee.R) throw ve.GetEResult();
          return ve.Body().toObject();
        }
        function ye(C) {
          const a = (0, _.KV)();
          return (0, g.I)({
            queryKey: ["clan_crowdin_mapping", C],
            queryFn: async () => await fe(a, C),
          });
        }
        function le(C) {
          return O({
            queryKey: ["clan_crowdin_mapping", C.clanSteamId],
            queryFn: fe,
            args: [C.clanSteamId],
            children: C.children,
          });
        }
        const de = (0, Ne.createContext)(null);
        function Ie(C) {
          const a = ye(C.clanInfo.clanSteamID.ConvertTo64BitString());
          let ce = !1;
          return (
            a.isSuccess && (ce = a.data.push_by_default),
            (0, e.jsx)(de.Provider, {
              value: {
                clanSteamId: C.clanInfo.clanSteamID,
                bPushToCrowdInByDefault: ce,
              },
              children: C.children,
            })
          );
        }
        async function pe(C, a, ce, ve) {
          const j = D.w.Init(se.v7);
          j.Body().set_language(ve),
            j.Body().set_steamid(a),
            j.Body().set_itemid(ce);
          const _e = await se.BE.FetchTranslationFromCrowdIn(C, j);
          if (_e.GetEResult() != ee.R)
            throw new Error(
              `Error from FetchLocalizationForClanEventFromCrowdIn: ${_e.GetErrorMessage()} (${_e.GetEResult()})`,
            );
          return _e.Body().toObject();
        }
        function Ce(C, a, ce) {
          const ve = (0, _.KV)();
          return (0, y.n)({
            mutationKey: ["fetch_translation_for_clan_event", C, a, ce],
            mutationFn: async function () {
              return await pe(ve, C, a, ce);
            },
            retry: !1,
          });
        }
      },
      84647: (K, Te, c) => {
        "use strict";
        c.r(Te), c.d(Te, { FAQRoutes: () => Oe, default: () => Yt });
        var e = c(7850),
          ee = c(75844),
          D = c(90626),
          g = c(99412),
          y = c(90395),
          _ = c(19316),
          se = c(92757),
          Ne = c(17083),
          O = c(3166),
          b = ((s) => (
            (s.k_eView = "view"),
            (s.k_eCommunityView = "communityview"),
            (s.k_eCommunityEdit = "edit"),
            (s.k_eCommunityDashboard = "dashboard"),
            (s.k_eCommunityPreview = "preview"),
            s
          ))(b || {});
        const fe = (s) => {
          const { route: t, faqid: i } = s,
            o = ye(t, i);
          return s.bForceRedirect
            ? (0, e.jsx)(se.rd, { push: !0, to: o })
            : s.bForceAnchor
              ? (0, e.jsx)("a", {
                  href: O.TS.COMMUNITY_BASE_URL.slice(0, -1) + o,
                  className: s.className,
                  children: s.children,
                })
              : (0, e.jsx)(Ne.N_, {
                  to: o,
                  className: s.className,
                  children: s.children,
                });
        };
        function ye(s, t) {
          let i = "/faqs/" + O.UF.VANITY_ID + "/";
          switch (s) {
            case "view":
            case "communityview":
              i += "view/" + (0, y.Wj)(t);
              break;
            case "edit":
              i += "edit/" + (0, y.Wj)(t);
              break;
            case "dashboard":
              i += "dashboard";
              break;
            case "preview":
              i += "preview/" + (0, y.Wj)(t);
              break;
          }
          return i;
        }
        var le = c(2801),
          de = c(88003),
          Ie = c(36118),
          pe = c(85599),
          Ce = c(71421),
          C = c(36707),
          a = c(18210),
          ce = c(48473),
          ve = c(11259),
          j = c.n(ve),
          _e = c(14947),
          T = c(72604),
          n = c(37739),
          r = c.n(n),
          l = c(76559),
          h = c(95695),
          f = c.n(h),
          L = c(26251),
          ne = c(47689),
          ae = c(82734),
          be = c(92264),
          P = c(20398),
          F = c(93084),
          E = c(35098);
        const ue = "title",
          S = "content";
        function R(s, t) {
          var i, o;
          let d = new P.G();
          for (let u = g.Bhc; u < g.bP9; ++u)
            (s.BHasSomeTextForLanguage(u) || g.Bhc == t) &&
              (d.SetLocalization(
                ue,
                u,
                (i = s.GetDraftTitle(u)) != null ? i : "",
              ),
              d.SetLocalization(
                S,
                u,
                (o = s.GetDraftContent(u)) != null ? o : "",
              ));
          return d;
        }
        function x(s, t, i) {
          const o = new Set(),
            d = t.GetSortedTokenList();
          return (
            (0, _e.h5)(() => {
              i.forEach((u) => {
                let p = !1;
                d.forEach((m) => {
                  const A = t.GetLocalization(m, u) || "";
                  if (m === ue) {
                    const v = s.GetDraftTitle(u);
                    (A || (v && v.length > 0)) &&
                      (s.SetDraftTitle(u, A), (p = !0));
                  }
                  if (m === S) {
                    const v = s.GetDraftContent(u);
                    (A || (v && v.length > 0)) &&
                      (s.SetDraftContent(u, A), (p = !0));
                  }
                }),
                  o.add(u);
              });
            }),
            Array.from(o)
          );
        }
        const re = (s) => {
            const { draft: t, eLanguage: i } = s;
            return (0, e.jsxs)("div", {
              className: h.FlexRowContainer,
              children: [
                (0, e.jsx)(je, { draft: t, eLanguage: i }),
                (0, e.jsx)(L.t3, {
                  strToolTip: (0, a.we)("#FAQEditor_Loc_Import_ttip"),
                  strLabel: (0, a.we)("#EventEditor_Loc_Import_Short"),
                  fnOnImportLocData: (o, d) => x(t, o, d),
                }),
              ],
            });
          },
          te = (s) => {
            const { draft: t } = s;
            return (0, e.jsxs)("div", {
              className: h.FlexRowContainer,
              children: [
                (0, e.jsx)("div", {
                  className: h.EditPreviewButton,
                  onClick: (i) => {
                    (0, de.pg)(
                      (0, e.jsx)(ie, {
                        direction: "export",
                        draft: t,
                        children: " ",
                      }),
                      (0, ae.uX)(i),
                    );
                  },
                  children: (0, a.we)("#EventEditor_Loc_Export_Short"),
                }),
                (0, e.jsx)("div", {
                  className: h.EditPreviewButton,
                  onClick: (i) => {
                    (0, de.pg)(
                      (0, e.jsx)(ie, {
                        direction: "import",
                        draft: t,
                        children: " ",
                      }),
                      (0, ae.uX)(i),
                    );
                  },
                  children: (0, a.we)("#EventEditor_Loc_Import_Short"),
                }),
              ],
            });
          },
          ie = (s) => {
            const { closeModal: t, direction: i, draft: o } = s,
              [d, u] = D.useState(!1),
              [p, m] = D.useState(new Array()),
              A = d || p.length == 0,
              v = async () => {
                u(!0);
                try {
                  i == "import"
                    ? await y.pN
                        .Get()
                        .ImportNonEnglishDraftsFromCrowdin(o.GetFAQID(), p)
                    : await y.pN
                        .Get()
                        .ExportEnglishDraftToCrowdin(o.GetFAQID());
                } catch (Ae) {
                  console.error(Ae);
                }
                u(!1);
              },
              H = (0, a.we)(
                i == "import"
                  ? "#EventEditor_Loc_CrowdinIntegration_ImportTitle"
                  : "#EventEditor_Loc_CrowdinIntegration_ExportTitle",
              ),
              M = (0, a.we)(
                i == "import"
                  ? "#EventEditor_Loc_Import_Crowdin_Confirm"
                  : "#EventEditor_Loc_Export_Crowdin_Confirm",
              ),
              k =
                i == "import"
                  ? (0, e.jsx)(q, {
                      draft: o,
                      rgAllLanguages: B,
                      rgLanguagesSelected: p,
                      fnSelectLanguages: m,
                    })
                  : null;
            return (0, e.jsx)(le.o0, {
              className: F.LanguageListDialog,
              closeModal: t,
              strTitle: H,
              strDescription: M,
              onOK: v,
              bOKDisabled: d,
              children: d ? (0, e.jsx)(pe.t, { position: "center" }) : k,
            });
          },
          je = (s) => {
            const { draft: t, eLanguage: i } = s;
            return (0, e.jsx)(Ce.he, {
              toolTipContent: (0, a.we)("#FAQEditor_Loc_Export_ttip"),
              children: (0, e.jsx)("div", {
                className: h.EditPreviewButton,
                onClick: (o) => {
                  (0, de.pg)(
                    (0, e.jsx)(le.o0, {
                      strTitle: (0, a.we)("#EventEditor_Loc_Export"),
                      bAlertDialog: !0,
                      children: (0, e.jsx)(L.Yg, {
                        fnGetLocData: () => R(t, i),
                        bShowXML: !0,
                        bShowCSV: !0,
                        strFileNamePrefix: "faq",
                        lang: i,
                      }),
                    }),
                    (0, ae.uX)(o),
                  );
                },
                children: (0, a.we)("#EventEditor_Loc_Export_Short"),
              }),
            });
          },
          I = [
            0, 9, 8, 12, 14, 21, 2, 3, 20, 24, 13, 17, 16, 5, 6, 7, 15, 23, 11,
            4, 19, 25, 18, 1, 10, 28, 26, 22, 27, 29, 30, 31,
          ],
          B = [
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
          q = (s) => {
            const {
                draft: t,
                rgAllLanguages: i,
                rgLanguagesSelected: o,
                fnSelectLanguages: d,
              } = s,
              u = (A, v) => {
                const H = o.includes(v);
                if (A && !H) {
                  const M = o.slice();
                  M.push(v), d(M);
                } else if (!A && H) {
                  const M = o.filter((k) => k !== v);
                  d(M);
                }
              },
              p = (A) => {
                d(A ? i.slice() : []);
              },
              m = i
                .sort((A, v) => I[A] - I[v])
                .map((A) =>
                  (0, e.jsx)(
                    N,
                    {
                      draft: t,
                      eLang: A,
                      bInitialState: o.includes(A),
                      fnOnChecked: u,
                    },
                    "langrow" + A + t.GetFAQID(),
                  ),
                );
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: F.ChecklistHeader,
                  children: [
                    (0, e.jsx)("div", {
                      className: F.Language,
                      children: (0, a.we)("#FAQCrowdin_LanguageHeader"),
                    }),
                    (0, e.jsx)("div", {
                      className: F.Timestamp,
                      children: (0, a.we)("#FAQCrowdin_DraftTimestampHeader"),
                    }),
                  ],
                }),
                (0, e.jsx)(_.Yh, {
                  className: F.CheckAll,
                  label: (0, a.we)("#FAQCrowdin_SelectAllCheckboxes"),
                  onChange: p,
                }),
                (0, e.jsx)("div", {
                  className: F.ChecklistRows,
                  children:
                    m != null
                      ? m
                      : (0, e.jsx)("div", {
                          children: (0, a.we)("#FAQCrowdin_NoDraftFound"),
                        }),
                }),
              ],
            });
          },
          N = (s) => {
            var t;
            const { draft: i, eLang: o, bInitialState: d, fnOnChecked: u } = s,
              p = i.GetLastSavedDraftVersion(o),
              m = p
                ? l.b.InitFromAccountID(Number.parseInt(p.author_account_id))
                : null,
              { data: A } = (0, E.js)(m == null ? void 0 : m.GetAccountID()),
              v = p
                ? (0, a.we)(
                    "#FAQCrowdin_SavedAtTimeByAuthor",
                    (0, a.TW)(p.timestamp) +
                      " @ " +
                      (0, be.KC)(p.timestamp, { bForce24HourClock: !1 }),
                    (t = A == null ? void 0 : A.m_strPlayerName) != null
                      ? t
                      : p.author_account_id,
                  )
                : (0, a.we)("#FAQCrowdin_NoDraftFound"),
              H = (0, e.jsxs)("div", {
                className: F.LanguageCheckboxLabel,
                children: [
                  (0, e.jsx)("div", {
                    className: F.Language,
                    children: (0, a.we)("#Language_" + (0, g.LgB)(o)),
                  }),
                  (0, e.jsx)("div", { className: F.Timestamp, children: v }),
                ],
              });
            return (0, e.jsx)(_.Yh, {
              className: F.LanguageCheckbox,
              label: H,
              checked: d,
              onChange: (M) => u(M, o),
            });
          };
        function Y(s) {
          const [t, i] = (0, y.cf)(),
            [o, d] = D.useState(0),
            [u, p] = D.useState(!1),
            [m, A] = D.useState(!1),
            [v, H] = D.useState(null),
            M = (0, ne.m)("CrowdinImportDialog"),
            k = D.useRef([]),
            Ae = async () => {
              p(!0);
              for (let $ = 0; $ < t.length; $++) {
                d($);
                const Me = t[$],
                  Ue = [],
                  Je = 5;
                for (let Ve = 0; Ve < B.length; Ve += Je) {
                  const Zt = B.slice(Ve, Ve + Je);
                  Ue.push(
                    y.pN
                      .Get()
                      .ImportNonEnglishDraftsFromCrowdin(Me.faq_id, Zt, M),
                  );
                }
                await Promise.all(Ue),
                  y.pN.Get().BHasLiveEnglishVersion(Me.faq_id)
                    ? ((k.current[$] = y.pN
                        .Get()
                        .GetNonEnglishDraftsToPublish(Me.faq_id)),
                      console.log(
                        "Going to publish FAQ",
                        Me.faq_id,
                        k.current[$].map((Ve) => (0, g.LgB)(Ve)),
                      ))
                    : console.log("No live english version for:", Me.faq_id);
              }
              for (let $ = 0; $ < k.current.length; $++) {
                const Me = t[$],
                  Ue = k.current[$];
                if ((Ue == null ? void 0 : Ue.length) > 0) {
                  d($);
                  const Je = await y.pN
                    .Get()
                    .PublishDraftByLanguage(Me.faq_id, Ue);
                  if (M.token.reason) return;
                  if (Je != T.R) {
                    H((0, a.we)("#FAQDashboard_PublishFailed"));
                    return;
                  }
                }
              }
              A(!0), p(!1);
            };
          if (v)
            return (0, e.jsx)(le.o0, {
              strTitle: (0, a.we)("#FAQDashboard_CrowdinToolTitle"),
              strDescription: v,
              bAlertDialog: !0,
              bDestructiveWarning: !0,
              closeModal: s.closeModal,
            });
          if (m)
            return (0, e.jsx)(le.o0, {
              strTitle: (0, a.we)("#FAQDashboard_CrowdinToolTitle"),
              strDescription: (0, a.we)("#FAQDashboard_PublishComplete"),
              bAlertDialog: !0,
              closeModal: s.closeModal,
            });
          const w = (100 * (o + 0.5)) / t.length,
            U = t[o].internal_name;
          return (0, e.jsx)(le.eV, {
            title: (0, a.we)("#FAQDashboard_CrowdinToolTitle"),
            ...s,
            onCancel: () => M.cancel("CrowdinImportDialog cancelled"),
            children: (0, e.jsxs)(_.nB, {
              children: [
                (0, e.jsxs)(_.a3, {
                  children: [
                    (0, a.we)(
                      "#FAQDashboard_CrowdinToolInstructionsWithCount",
                      t.length,
                    ),
                    (0, e.jsx)("div", {
                      className: F.Warning,
                      children: (0, a.we)("#FAQDashboard_CrowdinToolWarning"),
                    }),
                  ],
                }),
                (0, e.jsxs)(_.a3, {
                  children: [
                    (0, e.jsx)(_.$n, {
                      onClick: Ae,
                      disabled: u,
                      children: (0, a.we)("#FAQDashboard_UpdateAllFAQsButton"),
                    }),
                    u &&
                      (0, e.jsx)(oe, { nProgressPct: w, strCurrentLabel: U }),
                    k.current.length > 0 &&
                      (0, e.jsx)(Z, {
                        rgUpdatedLanguagesForAllFAQs: k.current,
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        function oe(s) {
          const { nProgressPct: t, strCurrentLabel: i } = s;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: F.ImportProgressBar,
                children: (0, e.jsx)("div", {
                  className: F.ProgressMarker,
                  style: { width: t + "%" },
                }),
              }),
              (0, e.jsx)("div", {
                className: F.CurrentFAQ,
                children: (0, a.we)("#FAQDashboard_CrowdinToolProgress", i),
              }),
            ],
          });
        }
        function Z(s) {
          const { rgUpdatedLanguagesForAllFAQs: t } = s,
            [i, o] = (0, y.cf)();
          return (0, e.jsxs)("div", {
            className: F.ImportResults,
            children: [
              (0, e.jsx)("div", {
                className: F.ImportResultLabel,
                children: (0, a.we)("#FAQDashboard_CrowdinToolResultsLabel"),
              }),
              t.map((d, u) => {
                const p = i[u];
                if (d.length == 0) return null;
                const m = d.map((A) => (0, g.wwZ)(A)).join(",");
                return (0, e.jsx)(
                  "div",
                  {
                    children: (0, e.jsxs)("div", {
                      className: F.ImportResult,
                      children: [
                        (0, e.jsx)(Ce.he, {
                          toolTipContent: p.internal_name,
                          strTooltipClassname: r().HoverAboveModal,
                          nAllowOffscreenPx: 4e4,
                          className: F.UrlCode,
                          children: p.url_code + ": ",
                        }),
                        (0, e.jsx)(Ce.he, {
                          toolTipContent: m,
                          strTooltipClassname: r().HoverAboveModal,
                          nAllowOffscreenPx: 4e4,
                          direction: "left",
                          className: F.LanguageList,
                          children: m,
                        }),
                      ],
                    }),
                  },
                  p.faq_id,
                );
              }),
            ],
          });
        }
        var V = c(18057),
          Q = c(55351),
          ge = c.n(Q),
          G = c(3063),
          z = c.n(G);
        const X = (s) => {
          const { rtTimestamp: t, bShowAsWarning: i } = s;
          if (!t)
            return (0, e.jsx)("div", {
              className: z().Never,
              children: (0, a.we)("#FAQDashboard_TimeNever"),
            });
          const o = Date.now() / 1e3 - t,
            d = o < 24 * 3600 ? (0, a.Hq)(o, !1, !0) : (0, a.$z)(t);
          return (0, e.jsx)(V.gS, {
            className: i && z().Warning,
            rtFullDate: t,
            stylesmodule: ge(),
            children: d,
          });
        };
        var Qe = ((s) => (
          (s[(s.k_EFaqID = 0)] = "k_EFaqID"),
          (s[(s.k_EName = 1)] = "k_EName"),
          (s[(s.k_EDraftTimestamp = 2)] = "k_EDraftTimestamp"),
          (s[(s.k_EUpdatedDrafts = 3)] = "k_EUpdatedDrafts"),
          (s[(s.k_EStaleDrafts = 4)] = "k_EStaleDrafts"),
          (s[(s.k_EPublished = 5)] = "k_EPublished"),
          (s[(s.k_ENeedPublish = 6)] = "k_ENeedPublish"),
          (s[(s.k_EGlobalVisible = 7)] = "k_EGlobalVisible"),
          (s[(s.k_ESteamChinaVisible = 8)] = "k_ESteamChinaVisible"),
          s
        ))(Qe || {});
        const De = (0, ee.PA)((s) => {
            const [t, i] = (0, y.cf)(),
              [o, d] = D.useState(1),
              p = t
                .map((m) => {
                  const A = m.per_language_info.find(
                      (w) => w.language == g.Bhc,
                    ),
                    v = (A == null ? void 0 : A.last_update_timestamp) || 0,
                    H = Array.from(
                      m.per_language_info.filter(
                        (w) =>
                          w.language != g.Bhc && w.last_update_timestamp >= v,
                      ),
                    ).length,
                    M = Array.from(
                      m.per_language_info.filter(
                        (w) => w.last_update_timestamp < v,
                      ),
                    ).length,
                    k = Array.from(
                      m.per_language_info.filter(
                        (w) =>
                          w.last_publish_timestamp >= w.last_update_timestamp,
                      ),
                    ).length,
                    Ae = Array.from(
                      m.per_language_info.filter(
                        (w) =>
                          w.last_publish_timestamp < w.last_update_timestamp,
                      ),
                    ).length;
                  return [
                    m.faq_id,
                    m.internal_name,
                    v,
                    H,
                    M,
                    k,
                    Ae,
                    m.visible_in_global_realm,
                    m.visible_in_china_realm,
                  ];
                })
                .sort((m, A) =>
                  o == 1 ? (0, ce.lY)(m[1], A[1]) : A[o] - m[o],
                );
            return (
              (0, D.useEffect)(() => {
                y.pN.Get().RemoveAllDirtyDrafts();
              }, []),
              (0, e.jsx)("div", {
                className: j().FAQDashboardPage,
                children: (0, e.jsxs)("div", {
                  className: j().FAQDashboard,
                  children: [
                    (0, e.jsx)(Re, {}),
                    (0, e.jsx)(Fe, { eCurrentSortColumn: o, SetSortColumn: d }),
                    t.length == 0 &&
                      (0, e.jsx)("div", {
                        className: j().ErrorMsg,
                        children: (0, a.we)("#FAQDashboard_Empty"),
                      }),
                    p.map((m) => (0, e.jsx)(He, { rgColumns: m }, m[0])),
                    !i &&
                      (0, e.jsx)(pe.t, { position: "center", size: "xlarge" }),
                  ],
                }),
              })
            );
          }),
          Re = (s) => {
            const t = D.useCallback(
                () =>
                  (0, de.mK)((0, e.jsx)(me, {}), window, {
                    strTitle: (0, a.we)("#FAQDashboard_CreateFAQButton"),
                  }),
                [],
              ),
              i = D.useCallback(
                () =>
                  (0, de.mK)(
                    (0, e.jsx)(Y, { bDisableBackgroundDismiss: !0 }),
                    window,
                    { strTitle: (0, a.we)("#FAQDashboard_CrowdinToolTitle") },
                  ),
                [],
              );
            return (0, e.jsxs)("div", {
              className: j().DashboardHeader,
              children: [
                (0, e.jsx)("div", {
                  className: j().DashboardHeaderTitle,
                  children: (0, a.we)("#FAQDashboard_Header"),
                }),
                (0, e.jsxs)("div", {
                  className: j().DashboardHeaderButtonCtn,
                  children: [
                    (0, e.jsx)(_.$n, {
                      onClick: i,
                      children: (0, a.we)("#FAQDashboard_CrowdinToolButton"),
                    }),
                    (0, e.jsx)(_.jn, {
                      onClick: t,
                      children: (0, a.we)("#FAQDashboard_CreateFAQButton"),
                    }),
                  ],
                }),
              ],
            });
          },
          me = (s) => {
            const [t, i] = D.useState("");
            return (0, e.jsxs)(le.o0, {
              onOK: () => {
                y.pN.Get().CreateFAQ(t);
              },
              bOKDisabled: t.length == 0,
              closeModal: s.closeModal,
              className: j().CreateFAQDialog,
              children: [
                (0, e.jsx)(_.Y9, {
                  children: (0, a.we)("#FAQDashboard_CreateFAQButton"),
                }),
                (0, e.jsx)(_.nB, {
                  children: (0, e.jsxs)(_.a3, {
                    children: [
                      (0, a.we)("#FAQDashboard_CreateFAQInstructions"),
                      (0, e.jsx)("input", {
                        type: "text",
                        className: j().NameInput,
                        value: t,
                        placeholder: (0, a.we)("#FAQDashboard_NamePlaceHolder"),
                        onFocus: (d) => d.target.select(),
                        onChange: (d) => i(d.currentTarget.value),
                        maxLength: 120,
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          Fe = (s) =>
            (0, e.jsxs)("div", {
              className: j().DashboardListHeaderRow,
              children: [
                (0, e.jsx)(W, {
                  strLabelLocToken: "#FAQDashboard_NameColumn",
                  bIsNameColumn: !0,
                  eThisColumn: 1,
                  ...s,
                }),
                (0, e.jsx)(W, {
                  strLabelLocToken: "#FAQDashboard_DraftTimetampColumn",
                  eThisColumn: 2,
                  ...s,
                }),
                (0, e.jsx)(W, {
                  strLabelLocToken: "#FAQDashboard_UpdatedLanguagesColumn",
                  eThisColumn: 3,
                  ...s,
                }),
                (0, e.jsx)(W, {
                  strLabelLocToken: "#FAQDashboard_StaleLanguagesColumn",
                  eThisColumn: 4,
                  ...s,
                }),
                (0, e.jsx)(W, {
                  strLabelLocToken: "#FAQDashboard_PublishedLanguagesColumn",
                  eThisColumn: 5,
                  ...s,
                }),
                (0, e.jsx)(W, {
                  strLabelLocToken: "#FAQDashboard_NeedPublishColumn",
                  eThisColumn: 6,
                  ...s,
                }),
                (0, e.jsx)(W, {
                  strLabelLocToken: "#FAQDashboard_VisibilityColumn",
                  eThisColumn: 7,
                  ...s,
                }),
                (0, e.jsx)(W, {
                  strLabelLocToken: "#FAQDashboard_SteamChinaVisibilityColumn",
                  eThisColumn: 8,
                  ...s,
                }),
              ],
            }),
          W = (s) => {
            const {
                strLabelLocToken: t,
                bIsNameColumn: i,
                eThisColumn: o,
                eCurrentSortColumn: d,
                SetSortColumn: u,
              } = s,
              p = (0, C.A)(
                j().EntryColumn,
                j().ClickableHeader,
                i ? j().NameCol : j().DataCol,
                d == o && j().Selected,
              );
            return (0, e.jsxs)(Ce.he, {
              toolTipContent: (0, a.we)(t + "_ttip"),
              direction: "top",
              className: p,
              onClick: () => u(o),
              children: [
                (0, a.we)(t),
                (0, e.jsx)("div", {
                  className: j().DownArrow,
                  children: (0, e.jsx)(Ie.GB9, {}),
                }),
              ],
            });
          },
          he = (s) => {
            const { nCount: t, nTotal: i, nGoal: o } = s;
            return (0, e.jsx)("div", {
              className: t == o ? j().GoodCount : j().BadCount,
              children: t + " / " + i,
            });
          },
          Ee = (s) => {
            const { bIsVisible: t } = s;
            return (0, e.jsx)("div", {
              className: t ? j().Visible : j().Hidden,
              children: (0, a.we)(
                t ? "#FAQDashboard_Visible" : "#FAQDashboard_Invisible",
              ),
            });
          },
          He = (s) => {
            const [t, i, o, d, u, p, m, A, v] = s.rgColumns,
              H = p + m,
              M = d + u;
            return (0, e.jsxs)(fe, {
              route: b.k_eCommunityEdit,
              faqid: t,
              className: j().DashboardEntry,
              children: [
                (0, e.jsx)("div", {
                  className: (0, C.A)(j().EntryColumn, j().NameCol),
                  children: (0, e.jsx)("div", {
                    className: j().EntryInternalName,
                    children: i,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, C.A)(j().EntryColumn, j().DataCol),
                  children: (0, e.jsx)(X, { rtTimestamp: o }),
                }),
                (0, e.jsx)("div", {
                  className: (0, C.A)(j().EntryColumn, j().DataCol),
                  children: (0, e.jsx)(he, { nCount: d, nTotal: M, nGoal: M }),
                }),
                (0, e.jsx)("div", {
                  className: (0, C.A)(j().EntryColumn, j().DataCol),
                  children: (0, e.jsx)(he, { nCount: u, nTotal: M, nGoal: 0 }),
                }),
                (0, e.jsx)("div", {
                  className: (0, C.A)(j().EntryColumn, j().DataCol),
                  children: (0, e.jsx)(he, { nCount: p, nTotal: H, nGoal: H }),
                }),
                (0, e.jsx)("div", {
                  className: (0, C.A)(j().EntryColumn, j().DataCol),
                  children: (0, e.jsx)(he, { nCount: m, nTotal: H, nGoal: 0 }),
                }),
                (0, e.jsx)("div", {
                  className: (0, C.A)(j().EntryColumn, j().DataCol),
                  children: (0, e.jsx)(Ee, { bIsVisible: A }),
                }),
                (0, e.jsx)("div", {
                  className: (0, C.A)(j().EntryColumn, j().DataCol),
                  children: (0, e.jsx)(Ee, { bIsVisible: v }),
                }),
              ],
            });
          },
          ze = (s) => {
            D.useEffect(
              () => (
                (window.onbeforeunload = () => {
                  var i;
                  const o = y.pN.Get().GetLoadedDraftObjs();
                  return ((i =
                    o == null ? void 0 : o.filter((u) => u.BNeedsSaving())) ==
                  null
                    ? void 0
                    : i.length) > 0
                    ? (0, a.we)("#EventEditor_UnsavedChanges")
                    : null;
                }),
                () => {
                  window.onbeforeunload = () => {};
                }
              ),
              [],
            );
            const t = (i) => {
              var o, d;
              const u = y.pN.Get().GetLoadedDraftObjs();
              return ((o =
                u == null ? void 0 : u.filter((m) => m.BNeedsSaving())) == null
                ? void 0
                : o.length) > 0 &&
                (i.pathname == Oe.DashboardFAQ(O.UF.VANITY_ID) ||
                  ((d = i.pathname) != null &&
                    d.startsWith(Oe.ViewFAQ(O.UF.VANITY_ID, "").slice(0, -1))))
                ? (0, a.we)("#EventEditor_UnsavedChanges")
                : !0;
            };
            return (0, e.jsx)(se.XG, { message: t });
          };
        var Pe = c(89084),
          Se = c(9046),
          Be = c(35524),
          ke = c(50109),
          dt = c(45638),
          Ge = c(25792),
          ct = c(4748),
          ut = c(63280),
          xe = c.n(ut),
          We = c(74916),
          Ke = c(34592);
        const ht = (s) => {
            const t = (i) => {
              (0, de.pg)((0, e.jsx)(ft, { draft: s.draft }), (0, ae.uX)(i));
            };
            return (0, e.jsx)(Ce.he, {
              toolTipContent: (0, a.we)("#FAQEditor_DeleteAction_ttip"),
              children: (0, e.jsx)("div", {
                className: (0, C.A)(h.EditPreviewButton, h.Delete),
                onClick: t,
                children: (0, a.we)("#FAQEditor_DeleteAction"),
              }),
            });
          },
          ft = (s) => {
            const { draft: t } = s,
              i = () => s.closeModal && s.closeModal(),
              [o, d] = D.useState(!1),
              [u, p] = D.useState(void 0);
            let m = (0, e.jsx)("div", {
              children: (0, a.we)("#FAQEditor_DeleteDesc"),
            });
            return (
              o
                ? (m = (0, e.jsx)(pe.t, {
                    position: "center",
                    size: "medium",
                    string: (0, a.we)("#FAQEditor_DeletingInProgress"),
                  }))
                : u &&
                  (m = (0, e.jsx)("div", {
                    children: (0, a.we)(
                      "Error_Description",
                      u,
                      (0, a.we)("#Error_GenericFailureDescription"),
                    ),
                  })),
              (0, e.jsx)(Ge.tH, {
                children: (0, e.jsx)(le.x_, {
                  onEscKeypress: i,
                  children: (0, e.jsxs)(_.UC, {
                    children: [
                      (0, e.jsx)(_.Y9, {
                        children: (0, a.we)("#FAQEditor_DeleteAction"),
                      }),
                      (0, e.jsx)(_.nB, {
                        children: (0, e.jsx)(_.a3, { children: m }),
                      }),
                      (0, e.jsx)(_.wi, {
                        children: (0, e.jsx)(_.CB, {
                          onCancel: i,
                          bOKDisabled: !!(o || u),
                          strOKText: (0, a.we)("#FAQEditor_DeleteAction"),
                          strCancelText:
                            o || u ? (0, a.we)("#Button_OK") : void 0,
                          onOK: async () => {
                            d(!0),
                              y.pN
                                .Get()
                                .DeleteFAQ(t.GetFAQID())
                                .then((A) => {
                                  if (A == T.R) {
                                    const v =
                                      O.TS.COMMUNITY_BASE_URL.substr(
                                        0,
                                        O.TS.COMMUNITY_BASE_URL.length - 1,
                                      ) + ye(b.k_eCommunityDashboard);
                                    window.location.href = v;
                                  }
                                  p(A);
                                })
                                .catch((A) => {
                                  const v = (0, Ke.H)(A);
                                  console.error(
                                    "FAQDeleteDialog: hit error: " +
                                      v.strErrorMsg,
                                    v,
                                  ),
                                    p(T.zi);
                                })
                                .finally(() => d(!1));
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          },
          gt = (0, ee.PA)((s) => {
            const { draft: t, bDisabled: i } = s,
              o = t.BNeedsSaving(),
              d = (u) => {
                i ||
                  (0, de.pg)(
                    o
                      ? (0, e.jsx)(le.KG, {
                          strDescription: (0, a.we)(
                            "#FAQPublish_SaveRequire_ttip",
                          ),
                        })
                      : (0, e.jsx)(mt, { draft: s.draft }),
                    (0, ae.uX)(u),
                  );
              };
            return (0, e.jsx)(Ce.he, {
              toolTipContent: (0, a.we)(
                o ? "#FAQPublish_SaveRequire_ttip" : "#FAQPublish_Publish_ttip",
              ),
              children: (0, e.jsx)("div", {
                className: (0, C.A)(h.EditPreviewButton, i && h.Disabled),
                onClick: d,
                children: (0, a.we)("#FAQPublish_Publish"),
              }),
            });
          }),
          mt = (s) => {
            var t;
            const { draft: i } = s,
              o = () => s.closeModal && s.closeModal(),
              [d, u] = D.useState(!1),
              [p, m] = D.useState(void 0),
              [A, v] = D.useState(void 0),
              [H, M] = (0, y.g5)(i.GetFAQID()),
              [k, Ae] = D.useState(new Array());
            let w = null;
            if (!M)
              w = (0, e.jsx)(pe.t, {
                size: "small",
                position: "center",
                string: (0, a.we)("#FAQPublish_PublishWait"),
              });
            else if (d)
              w = (0, e.jsx)(pe.t, {
                position: "center",
                size: "medium",
                string: (0, a.we)("#FAQPublish_Publishing"),
              });
            else if (p)
              w = (0, e.jsx)("div", {
                children: (0, a.we)("#FAQPublish_Success"),
              });
            else if (A)
              w = (0, e.jsx)("div", {
                children: (0, a.we)(
                  "#Error_Description",
                  A,
                  (0, a.we)("#Error_GenericFailureDescription"),
                ),
              });
            else if (!H)
              w = (0, e.jsx)("div", {
                children: (0, a.we)("#FAQPublish_LoadError"),
              });
            else {
              const U =
                (t = H.per_language_info) == null
                  ? void 0
                  : t
                      .filter(
                        ($) =>
                          $.last_publish_timestamp < $.last_update_timestamp,
                      )
                      .map(($) => $.language);
              w = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    children: (0, a.we)("#FAQPublish_Desc"),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("div", {
                    children: (0, a.we)("#FAQPublish_Desc2"),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(q, {
                    draft: i,
                    rgAllLanguages: U,
                    rgLanguagesSelected: k,
                    fnSelectLanguages: Ae,
                  }),
                ],
              });
            }
            return (0, e.jsx)(Ge.tH, {
              children: (0, e.jsx)(le.x_, {
                onEscKeypress: o,
                children: (0, e.jsxs)(_.UC, {
                  className: F.LanguageListDialog,
                  children: [
                    (0, e.jsx)(_.Y9, {
                      children: (0, a.we)("#FAQPublish_Publish"),
                    }),
                    (0, e.jsx)(_.nB, {
                      children: (0, e.jsx)(_.a3, { children: w }),
                    }),
                    (0, e.jsx)(_.wi, {
                      children: (0, e.jsx)(_.CB, {
                        onCancel: o,
                        bOKDisabled: !!(d || p || A || k.length == 0),
                        strOKText: (0, a.we)("#FAQPublish_Publish"),
                        strCancelText:
                          d || p || A ? (0, a.we)("#Button_OK") : void 0,
                        onOK: async () => {
                          u(!0),
                            y.pN
                              .Get()
                              .PublishDraftByLanguage(i.GetFAQID(), k)
                              .then((U) => {
                                U == T.R && m(!0), v(U);
                              })
                              .catch((U) => {
                                const $ = (0, Ke.H)(U);
                                console.error(
                                  "FAQPublishDialog: hit error: " +
                                    $.strErrorMsg,
                                  $,
                                ),
                                  v(T.zi);
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
          pt = (s) => {
            const t = (i) => {
              (0, de.pg)((0, e.jsx)(vt, { draft: s.draft }), (0, ae.uX)(i));
            };
            return (0, e.jsx)(Ce.he, {
              toolTipContent: (0, a.we)("#FAQEditor_ChangeVisible_ttip"),
              children: (0, e.jsx)("div", {
                className: h.EditPreviewButton,
                onClick: t,
                children: (0, a.we)("#FAQEditor_EditVisible"),
              }),
            });
          },
          vt = (s) => {
            const { draft: t } = s,
              i = () => s.closeModal && s.closeModal(),
              [o, d] = D.useState(!1),
              [u, p] = D.useState(void 0),
              [m, A] = D.useState(void 0),
              v = y.pN.Get().GetFAQArticleSummary(t.GetFAQID()),
              [H, M] = D.useState(v.visible_in_global_realm),
              [k, Ae] = D.useState(v.visible_in_china_realm);
            let w = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  children: (0, a.we)("#FAQEditor_ChangeVisible_Desc"),
                }),
                (0, e.jsx)(_.Yh, {
                  label: (0, a.we)("#FAQEditor_VisibleInGlobal"),
                  checked: H,
                  onChange: (U) => M(U),
                }),
                (0, e.jsx)(_.Yh, {
                  label: (0, a.we)("#FAQEditor_VisibleInChina"),
                  checked: k,
                  tooltip: (0, a.we)("#FAQEditor_VisibleInChina_ttip"),
                  onChange: (U) => Ae(U),
                }),
              ],
            });
            return (
              o
                ? (w = (0, e.jsx)(pe.t, {
                    position: "center",
                    size: "medium",
                    string: (0, a.we)("#FAQEditor_ChangeVisible_InProgress"),
                  }))
                : u
                  ? (w = (0, e.jsx)("div", {
                      children: (0, a.we)("#FAQEditor_ChangeVisible_Success"),
                    }))
                  : m &&
                    (w = (0, e.jsx)("div", {
                      children: (0, a.we)(
                        "Error_Description",
                        m,
                        (0, a.we)("#Error_GenericFailureDescription"),
                      ),
                    })),
              (0, e.jsx)(Ge.tH, {
                children: (0, e.jsx)(le.x_, {
                  onEscKeypress: i,
                  children: (0, e.jsxs)(_.UC, {
                    children: [
                      (0, e.jsx)(_.Y9, {
                        children: (0, a.we)("#FAQEditor_ChangeVisible"),
                      }),
                      (0, e.jsx)(_.nB, {
                        children: (0, e.jsx)(_.a3, { children: w }),
                      }),
                      (0, e.jsx)(_.wi, {
                        children: (0, e.jsx)(_.CB, {
                          onCancel: i,
                          bOKDisabled: !!(o || u || m),
                          strOKText: (0, a.we)("#FAQEditor_ChangeVisible"),
                          strCancelText:
                            o || u || m ? (0, a.we)("#Button_OK") : void 0,
                          onOK: async () => {
                            d(!0),
                              y.pN
                                .Get()
                                .UpdateVisibility(t.GetFAQID(), H, k)
                                .then((U) => {
                                  U == T.R && p(!0), A(U);
                                })
                                .catch((U) => {
                                  const $ = (0, Ke.H)(U);
                                  console.error(
                                    "FAQChangeVisibilityDialog: hit error: " +
                                      $.strErrorMsg,
                                    $,
                                  ),
                                    A(T.zi);
                                })
                                .finally(() => d(!1));
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          };
        var J = c(35707),
          xt = c(6864),
          tt = c(68312),
          At = c(61739),
          bt = c(88942),
          st = c(35038);
        const Ct = (0, ee.PA)((s) => {
            var t, i, o, d, u;
            const { draft: p, eLanguage: m } = s,
              A = p.GetFAQID(),
              [v, H] = (0, y.g5)(A);
            if (!H) return null;
            const M =
                (i =
                  (t = v == null ? void 0 : v.per_language_info) == null
                    ? void 0
                    : t.find((w) => w.language == g.Bhc)) == null
                  ? void 0
                  : i.last_update_timestamp,
              k =
                (o = v == null ? void 0 : v.per_language_info) == null
                  ? void 0
                  : o.some(
                      (w) => w.last_publish_timestamp < w.last_update_timestamp,
                    ),
              Ae =
                (u =
                  (d = v == null ? void 0 : v.per_language_info) == null
                    ? void 0
                    : d
                        .slice()
                        .sort((w, U) => I[w.language] - I[U.language])) == null
                  ? void 0
                  : u.map((w) =>
                      (0, e.jsx)(
                        jt,
                        { info: w, rtEnglishUpdateTime: M },
                        w.language,
                      ),
                    );
            return (0, e.jsx)(Ge.tH, {
              children: (0, e.jsxs)("div", {
                className: J.LeftMenu,
                children: [
                  (0, e.jsxs)("div", {
                    className: J.Section,
                    children: [
                      (0, e.jsxs)("div", {
                        className: J.SectionTitle,
                        children: [
                          (0, a.we)("#FAQDashboard_VisibilityColumn"),
                          " ",
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: J.SectionContents,
                        children: [
                          (0, e.jsxs)("div", {
                            className: J.VisibilityCtn,
                            children: [
                              (0, e.jsxs)("div", {
                                className: (0, C.A)(J.StatusRow, J.Global),
                                children: [
                                  (0, a.we)(
                                    "#FAQDashboard_VisibleInGlobalRealmLabel",
                                  ),
                                  "\xA0",
                                  (0, e.jsx)(Ee, {
                                    bIsVisible: v.visible_in_global_realm,
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, C.A)(J.StatusRow, J.China),
                                children: [
                                  (0, a.we)(
                                    "#FAQDashboard_VisibleInChinaRealmLabel",
                                  ),
                                  "\xA0",
                                  (0, e.jsx)(Ee, {
                                    bIsVisible: v.visible_in_china_realm,
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                className: J.StatusBtnCtn,
                                children: (0, e.jsx)(pt, { draft: p }),
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: J.PublishCtn,
                            children: [
                              k
                                ? (0, e.jsx)("div", {
                                    className: J.PublishStatus,
                                    children: (0, a.we)(
                                      "#FAQStatus_DraftVersionsDesc",
                                    ),
                                  })
                                : (0, e.jsx)("div", {
                                    className: J.PublishStatus,
                                    children: (0, a.we)(
                                      "#FAQStatus_NothingToPublish",
                                    ),
                                  }),
                              (0, e.jsx)("div", {
                                className: J.PublishBtn,
                                children: (0, e.jsx)(gt, {
                                  draft: p,
                                  bDisabled: !k,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: J.Section,
                    children: [
                      (0, e.jsx)("div", {
                        className: J.SectionTitle,
                        children: (0, a.we)(
                          "#FAQDashboard_LocalizationSection",
                        ),
                      }),
                      O.iA.is_support && (0, e.jsx)(_t, { draft: p }),
                      (0, e.jsxs)("div", {
                        className: J.SectionContents,
                        children: [
                          (0, e.jsx)("div", {
                            className: J.SectionDescription,
                            children: (0, a.we)(
                              "#FAQDashboard_LocalizationSectionDesc",
                            ),
                          }),
                          (0, e.jsx)(re, { draft: p, eLanguage: m }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: J.SectionContents,
                        children: [
                          (0, e.jsx)("div", {
                            className: J.SectionDescription,
                            children: (0, a.we)(
                              "#EventEditor_Loc_CrowdinIntegration_Desc",
                            ),
                          }),
                          (0, e.jsx)(te, { draft: p }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: J.Section,
                    children: [
                      (0, e.jsx)("div", {
                        className: J.SectionTitle,
                        children: (0, a.we)(
                          "#FAQStatus_LocalizedVersionStatusHeader",
                        ),
                      }),
                      (0, e.jsxs)("table", {
                        className: J.FaqStatusTable,
                        children: [
                          (0, e.jsx)("thead", {
                            children: (0, e.jsxs)("tr", {
                              children: [
                                (0, e.jsx)("th", {
                                  children: (0, a.we)("#LanguageTitle"),
                                }),
                                (0, e.jsx)("th", {
                                  children: (0, a.we)("#FAQStatus_LastUpdated"),
                                }),
                                (0, e.jsx)("th", {
                                  children: (0, a.we)(
                                    "#FAQStatus_LastPublished",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("tbody", { children: Ae }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: J.Section,
                    children: (0, e.jsx)(ht, { draft: p }),
                  }),
                ],
              }),
            });
          }),
          _t = (0, ee.PA)((s) => {
            const { draft: t } = s,
              i = Et(t.GetFAQID()),
              o = wt(O.UF.CLANSTEAMID, t.GetFAQID()),
              [d, u] = (0, D.useState)(g.xPp),
              [p, m] = (0, D.useState)(!1),
              A = (Ae) => {
                const w = Ae.target.value;
                if (w === "all") u(g.xPp);
                else {
                  const U = (0, g.sfN)(w);
                  u(U);
                }
              },
              v = async (Ae) => {
                const w = t.GetJsonData();
                let U;
                w.length === 0 ? (U = {}) : (U = JSON.parse(w)),
                  (U.pushToCrowdIn = Ae.target.checked),
                  await t.UpdateJsonData(U);
              },
              H = async (Ae) => {
                const w = t.GetJsonData();
                let U;
                w.length === 0 ? (U = {}) : (U = JSON.parse(w)),
                  (U.localizeDraft = Ae.target.checked),
                  await t.UpdateJsonData(U);
              },
              M = async () => {
                m(!0), await i.mutateAsync(d), m(!1), window.location.reload();
              };
            let k = "";
            return (
              o.isSuccess &&
                o.data.crowdin_file_id &&
                (k = `https://valve.crowdin.com/editor/${o.data.crowdin_project_id}/${o.data.crowdin_file_id}`),
              null
            );
            return (0, e.jsxs)("div", {
              className: J.SectionContents,
              children: [
                !1,
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      id: "localize_draft",
                      checked: t.BLocalizeDraft(),
                      onChange: H,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "localize_draft",
                      children: (0, a.we)(
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
                      checked: t.BPushToCrowdIn(),
                      onChange: v,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "push_to_crowdin",
                      children: (0, a.we)(
                        t.BLocalizeDraft()
                          ? "#FAQDashboard_CrowdIn_PushOnSave"
                          : "#FAQDashboard_CrowdIn_PushOnPublish",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    k.length > 0 &&
                      (0, e.jsx)("a", {
                        href: k,
                        target: "_blank",
                        children: k,
                      }),
                    k.length === 0 &&
                      (0, e.jsx)(e.Fragment, {
                        children: "(Not yet pushed to CrowdIn)",
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)(xt.p, { onChange: A }),
                    "\xA0",
                    !p &&
                      (0, e.jsx)("button", {
                        onClick: M,
                        children: (0, a.we)("#FAQDashboard_CrowdIn_Fetch"),
                      }),
                    p && (0, e.jsx)(pe.t, { size: "small" }),
                  ],
                }),
              ],
            });
          }),
          jt = (0, ee.PA)((s) => {
            const { info: t, rtEnglishUpdateTime: i } = s,
              o = !!i && i > t.last_update_timestamp,
              d = t.last_update_timestamp > t.last_publish_timestamp;
            return (0, e.jsxs)("tr", {
              children: [
                (0, e.jsx)("td", {
                  children: (0, a.we)("#Language_" + (0, g.LgB)(t.language)),
                }),
                (0, e.jsx)("td", {
                  children: (0, e.jsx)(X, {
                    rtTimestamp: t.last_update_timestamp,
                    bShowAsWarning: o,
                  }),
                }),
                (0, e.jsx)("td", {
                  children: (0, e.jsx)(X, {
                    rtTimestamp: t.last_publish_timestamp,
                    bShowAsWarning: d,
                  }),
                }),
              ],
            });
          });
        function Et(s) {
          const t = (0, tt.KV)();
          return (0, At.n)({
            mutationKey: ["fetch_faq_translation", s],
            mutationFn: async (i) => {
              const o = st.w.Init(We.PS);
              return (
                o.Body().set_faq_id(s),
                o.Body().set_language(i),
                o.Body().set_steamid(O.UF.CLANSTEAMID),
                (await We.RD.FetchLocalizationFromCrowdIn(t, o)).GetEResult()
              );
            },
          });
        }
        function wt(s, t) {
          const i = (0, tt.KV)();
          return (0, bt.I)({
            queryKey: ["get_faq_crowdin_metadata", s, t],
            queryFn: async () => {
              const o = st.w.Init(We.lk);
              return (
                o.Body().set_faq_id(t),
                o.Body().set_steamid(s),
                (await We.RD.GetCrowdInMetadata(i, o)).Body().toObject()
              );
            },
          });
        }
        var Ye = c(32093),
          Dt = c(24806),
          Ft = c(26759),
          Xe = c(54736),
          St = c(59461),
          yt = c(51520);
        const Lt = (0, ee.PA)((s) => {
            const { draft: t } = s,
              i = t.BNeedsSaving();
            return (0, e.jsx)("div", {
              className: "btn_green_steamui btn_medium",
              onClick: (o) =>
                (0, de.pg)((0, e.jsx)(It, { draft: s.draft }), (0, ae.uX)(o)),
              children: (0, e.jsxs)("span", {
                children: [
                  !i &&
                    (0, e.jsx)("img", { className: yt.SavedImage, src: St.A }),
                  (0, a.we)(i ? "#Button_Save" : "#Button_Saved"),
                ],
              }),
            });
          }),
          It = (s) => {
            const { draft: t, closeModal: i } = s,
              [o, d] = D.useState(!0),
              [u, p] = D.useState(void 0);
            D.useEffect(() => {
              (async () => {
                d(!0);
                try {
                  const v = await t.SaveDrafts();
                  p(v);
                } catch (v) {
                  p(T.zi),
                    console.log(
                      "FAQSaveProgressDialog hit exception " +
                        (0, Ke.H)(v).strErrorMsg,
                    );
                } finally {
                  d(!1);
                }
              })();
            }, [t]);
            const m = D.useId();
            return (0, e.jsxs)(le.eV, {
              "aria-labelledby": m,
              bAllowFullSize: !0,
              onCancel: i,
              closeModal: i,
              children: [
                (0, e.jsx)(_.Y9, {
                  id: m,
                  children: o
                    ? (0, e.jsx)("div", {
                        children: (0, a.we)("#FAQSave_Saving"),
                      })
                    : (0, e.jsxs)("div", {
                        children: [
                          (0, a.we)(
                            u == T.R
                              ? "#FAQSave_SaveSuccess"
                              : "#FAQSave_Error",
                          ),
                          " ",
                        ],
                      }),
                }),
                (0, e.jsx)(_.nB, {
                  children: o
                    ? (0, e.jsx)(pe.t, { size: "medium", position: "center" })
                    : (0, e.jsx)("div", {
                        children:
                          u == T.R
                            ? (0, e.jsx)("div", {
                                children: (0, a.we)(
                                  "#FAQSave_SaveSuccess_desc",
                                ),
                              })
                            : (0, e.jsx)("div", {
                                children: (0, a.we)(
                                  "#Error_Description",
                                  u,
                                  (0, a.we)("#Error_GenericFailureDescription"),
                                ),
                              }),
                      }),
                }),
                (0, e.jsx)(_.wi, {
                  children:
                    !o &&
                    (0, e.jsx)(_.jn, {
                      onClick: i,
                      children: (0, a.we)("#Button_OK"),
                    }),
                }),
              ],
            });
          };
        var Tt = c(66444),
          $e = c.n(Tt);
        const nt = (0, ee.PA)((s) => {
            const { draft: t, bPreview: i } = s,
              o = t.BHasPublished();
            return (0, e.jsx)(Ge.tH, {
              children: (0, e.jsxs)("div", {
                className: (0, C.A)({
                  [Xe.EventEditorTopBarContainer]: !0,
                  [Xe.EventUnPublished]: !i && !o,
                  [Xe.EventPublished]: !i && o,
                  [$e().FAQPreview]: i,
                }),
                children: [
                  (0, e.jsx)(fe, {
                    route: i ? b.k_eCommunityEdit : b.k_eCommunityDashboard,
                    faqid: t.GetFAQID(),
                    className: f().EditPreviewButton,
                    children: (0, a.we)(
                      i ? "#FAQEditor_EditFAQ" : "#EventDisplay_EventsDashBtn",
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("div", {
                        className: $e().EditorInternalNameLabel,
                        children: (0, a.we)(
                          i
                            ? "#FAQEditor_InternalName_Preview"
                            : "#FAQEditor_InternalName",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: $e().EditorInternalName,
                        children: [
                          t.GetFAQInternalName(),
                          (0, e.jsx)("img", {
                            src: Ft.A,
                            onClick: (d) =>
                              (0, de.pg)(
                                (0, e.jsx)(Nt, { draft: t }),
                                (0, ae.uX)(d),
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: f().EventOptions,
                    children: [
                      (0, e.jsx)(Dt.Ng, {
                        selectedLang: ke.O.Get().GetCurEditLanguage(),
                        fnOnLanguageChanged: ke.O.Get().SetCurEditLanguage,
                        fnLangHasData: t.BHasSomeTextForLanguage,
                        fnIsLangSupported: (d) => !0,
                        fnLastUpdateRTime: t.GetLastTimeLanguageUpdated,
                        realms: [
                          Ye.TU.k_ESteamRealmGlobal,
                          Ye.TU.k_ESteamRealmChina,
                        ],
                      }),
                      !i &&
                        (0, e.jsx)(fe, {
                          route: b.k_eCommunityPreview,
                          faqid: t.GetFAQID(),
                          className: f().EditPreviewButton,
                          children: (0, a.we)("#Button_Preview"),
                        }),
                    ],
                  }),
                ],
              }),
            });
          }),
          Nt = (s) => {
            const { closeModal: t, draft: i } = s,
              [o, d] = D.useState(i.GetFAQInternalName() || ""),
              [u, p] = D.useState(!1),
              [m, A] = D.useState(T.R),
              [v, H] = D.useState(!1),
              M = async () => {
                p(!0),
                  y.pN
                    .Get()
                    .UpdateInternalName(i.GetFAQID(), o)
                    .then((k) => A(k))
                    .finally(() => {
                      H(!0);
                    });
              };
            return (0, e.jsxs)(le.eV, {
              title: (0, a.we)("#FAQEditor_ChangeInternalName"),
              bAllowFullSize: !0,
              onCancel: t,
              closeModal: t,
              children: [
                (0, e.jsxs)(_.nB, {
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, a.we)("#FAQEditor_ChangeInternalName_desc"),
                    }),
                    (0, e.jsx)("input", {
                      type: "text",
                      value: o,
                      placeholder: (0, a.we)("#FAQEditor_ChangeInternalName"),
                      onFocus: (k) => k.target.select(),
                      onChange: (k) => d(k.currentTarget.value),
                      maxLength: 240,
                      disabled: u,
                    }),
                    !!(u && !v) &&
                      (0, e.jsx)(pe.t, {
                        string: (0, a.we)("#Updating"),
                        position: "center",
                        size: "medium",
                      }),
                    v &&
                      (0, e.jsx)("span", {
                        children:
                          m == T.R
                            ? (0, a.we)("#EventDisplay_Share_Success")
                            : (0, a.we)(
                                "#Error_Description",
                                m,
                                (0, a.we)("#Error_GenericFailureDescription"),
                              ),
                      }),
                  ],
                }),
                (0, e.jsx)(_.wi, {
                  children: (0, e.jsx)(_.CB, {
                    bOKDisabled: o.trim().length == 0 || u,
                    onCancel: t,
                    strCancelText: v
                      ? (0, a.we)("#Button_Close")
                      : (0, a.we)("#Button_Cancel"),
                    onOK: M,
                  }),
                }),
              ],
            });
          },
          at = (0, ee.PA)((s) => {
            const { draft: t, eLanguage: i } = s,
              o = t.GetFAQID(),
              [d, u] = (0, y.g5)(o),
              p = u && d.per_language_info.find((v) => v.language == i),
              A =
                u &&
                ((O.TS.EREALM == Ye.TU.k_ESteamRealmGlobal &&
                  d.visible_in_global_realm) ||
                  (O.TS.EREALM == Ye.TU.k_ESteamRealmChina &&
                    d.visible_in_china_realm)) &&
                !!(p != null && p.last_publish_timestamp);
            return (0, e.jsx)(Ge.tH, {
              children: (0, e.jsx)("div", {
                className: (0, C.A)(f().SaveBackground),
                children: (0, e.jsxs)("div", {
                  className: f().FlexRowWrapFlexStartContainer,
                  style: { width: "unset", justifyContent: "center" },
                  children: [
                    (0, e.jsx)(Lt, { draft: t }),
                    !!A &&
                      (0, e.jsx)("div", {
                        className: f().EditPreviewButton,
                        children: (0, e.jsx)("a", {
                          href: O.TS.HELP_BASE_URL + "faqs/view/" + d.url_code,
                          children: (0, a.we)("#FAQEditir_ViewLiveFAQ"),
                        }),
                      }),
                  ],
                }),
              }),
            });
          });
        var Qt = c(77495);
        const Pt = (0, ee.PA)((s) => {
            const { faqid: t } = s,
              [i, o] = (0, y.z5)(t),
              d = D.useRef(void 0);
            if (o) {
              if (!i)
                return (0, e.jsx)(Gt, {
                  strError: (0, a.we)("#FAQEditor_NoFAQFound"),
                });
            } else
              return (0, e.jsx)(pe.t, {
                position: "center",
                size: "xlarge",
                string: (0, a.we)("#Loading"),
              });
            const u = ke.O.Get().GetCurEditLanguage();
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)(nt, { draft: i }),
                (0, e.jsxs)("div", {
                  className: xe().FAQEditPage,
                  children: [
                    (0, e.jsx)("div", {
                      className: xe().FAQMenuCtn,
                      children: (0, e.jsx)(Ct, { draft: i, eLanguage: u }),
                    }),
                    (0, e.jsx)("div", {
                      className: xe().FAQEditorCtn,
                      children: (0, e.jsx)("div", {
                        className: xe().FAQEditor,
                        children: (0, e.jsxs)("div", {
                          className: (0, C.A)(f().Columns, xe().Columns),
                          children: [
                            (0, e.jsxs)("div", {
                              className: (0, C.A)(f().LeftCol, xe().LeftCol),
                              children: [
                                (0, e.jsx)(Bt, { draft: i, eLanguage: u }),
                                (0, e.jsx)(kt, {
                                  bbcodeEditorRef: d,
                                  draft: i,
                                  eLanguage: u,
                                }),
                              ],
                            }),
                            (0, e.jsx)(Rt, {
                              draft: i,
                              bbcodeEditorRef: d,
                              className: (0, C.A)(f().RightCol, xe().RightCol),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(at, { draft: i, eLanguage: u }),
              ],
            });
          }),
          Rt = (s) => {
            const t = (0, D.useMemo)(() => new l.b(O.UF.CLANSTEAMID), []);
            if (!O.UF.CAN_UPLOAD_IMAGES) return null;
            const { draft: i, bbcodeEditorRef: o } = s;
            return (0, e.jsx)(Ge.tH, {
              children: (0, e.jsxs)("div", {
                className: s.className,
                children: [
                  (0, e.jsx)("div", {
                    children: (0, a.we)("#FAQEditor_ImageTitle"),
                  }),
                  (0, e.jsx)(ct.G, {
                    bShowLightBox: !0,
                    appid: void 0,
                    clanSteamID: t,
                    imageInsertCallBack: (d, u) =>
                      o.current &&
                      (0, Pe.fW)(o == null ? void 0 : o.current, d, u),
                    fnSetImageURL: () => {},
                    rgRealmList: i.GetIncludedRealmList(),
                    fnLangHasData: i.BHasSomeTextForLanguage,
                    fnGetImageHash: (d, u) => {
                      if (Se.pb.includes(d)) {
                        const p = Be.R.GetAllLocalizedGroupImages();
                        return p && p.length > u && p[u] != null ? p[u] : null;
                      }
                      return null;
                    },
                    partnerEventStore: Qt.O3,
                  }),
                ],
              }),
            });
          },
          Bt = (0, ee.PA)((s) => {
            const { draft: t, eLanguage: i } = s;
            return (0, e.jsxs)("div", {
              className: xe().EditorTitleField,
              children: [
                (0, e.jsx)("div", {
                  className: xe().EditorLabel,
                  children: (0, a.we)("#FAQEditor_TitleLabel"),
                }),
                (0, e.jsx)("input", {
                  type: "text",
                  className: xe().EditorTitleFieldInput,
                  value: t.GetDraftTitle(i) || "",
                  placeholder: (0, a.we)("#FAQEditor_TitlePlaceHolder"),
                  onFocus: (d) => d.target.select(),
                  onChange: (d) => t.SetDraftTitle(i, d.currentTarget.value),
                  maxLength: 120,
                }),
              ],
            });
          }),
          kt = (0, ee.PA)((s) => {
            const { draft: t, eLanguage: i, bbcodeEditorRef: o } = s;
            return (0, e.jsxs)("div", {
              className: xe().EditorPane,
              children: [
                (0, e.jsx)("div", {
                  className: xe().EditorLabel,
                  children: (0, a.we)("#FAQEditor_ContentLabel"),
                }),
                (0, e.jsx)(dt.I, {
                  ref: o,
                  fnGetCurText: () => t.GetDraftContent(i) || "",
                  fnOnTextChange: (d) =>
                    t.SetDraftContent(i, d.currentTarget.value),
                  fnSetText: (d) => t.SetDraftContent(i, d),
                  strPlaceholder: (0, a.we)("#FAQEditor_ContentPlaceHolder"),
                  bSupportHTMLImport: !0,
                  showFormatHelp: "PartnerEvents",
                  className: xe().TextPaneContainer,
                  classNameForTextArea: xe().EditorPaneTextArea,
                }),
              ],
            });
          }),
          Gt = (s) =>
            (0, e.jsxs)("div", {
              className: xe().ErrorCtn,
              children: [
                (0, e.jsx)("div", {
                  className: xe().ErrorMsg,
                  children: s.strError,
                }),
                (0, e.jsx)(fe, {
                  route: b.k_eCommunityDashboard,
                  className: xe().EscapeLink,
                  children: (0, a.we)("#FAQEditor_GoToDashboard"),
                }),
              ],
            });
        var Ot = c(71462),
          Le = c(28735);
        const rt = (s) => {
            const {
                title: t,
                content: i,
                bIsPreview: o,
                elSideBars: d,
                version: u,
                language: p,
              } = s,
              m = (0, se.zy)();
            return (
              D.useEffect(() => {
                var A, v, H;
                const M =
                  (v = m == null ? void 0 : m.hash) == null
                    ? void 0
                    : v.substr(
                        ((A = m == null ? void 0 : m.hash) == null
                          ? void 0
                          : A.substr(0, 1)) === "#"
                          ? 1
                          : 0,
                      );
                M &&
                  ((H = document.getElementById(M)) == null ||
                    H.scrollIntoView({ block: "start", behavior: "smooth" }));
              }, [m]),
              (0, e.jsxs)("div", {
                className: (0, C.A)(Le.FAQViewPage, O.TS.LANGUAGE),
                children: [
                  (0, e.jsx)("a", {
                    className: Le.SupportTitle,
                    href: `${O.TS.HELP_BASE_URL}`,
                    children: (0, a.we)("#FAQViewer_SteamSupport"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Le.Columns,
                    children: [
                      (0, e.jsxs)("div", {
                        className: (0, C.A)(Le.LeftCol),
                        children: [
                          (0, e.jsx)("div", { className: Le.TopColorBar }),
                          (0, e.jsxs)("div", {
                            className: Le.FAQTopicCtn,
                            children: [
                              (0, e.jsx)("div", {
                                className: Le.FAQTitle,
                                role: "heading",
                                "aria-level": 1,
                                children: t,
                              }),
                              (0, e.jsx)("div", {
                                className: Le.FAQContent,
                                children: (0, e.jsx)(Ot.u, {
                                  text: i,
                                  bShowErrorInfo: o,
                                  version: u || "0",
                                  language: p,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Le.RightCol,
                        children: (0, e.jsx)("div", {
                          className: Le.SectionCtn,
                          children: d,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          Ze = (s) =>
            (0, e.jsx)("div", {
              className: Le.FAQViewPage,
              children: s.children,
            });
        var it = c(38129),
          ot = c(20572),
          we = c(66891);
        const Mt = (s) => {
            const { faqContent: t } = s,
              [i, o] = (0, y.W)(t.faq_id, t.version, t.language);
            return y.pN.Get().BHasFAQEdit()
              ? (0, e.jsxs)("div", {
                  className: (0, C.A)(we.Section, h.ValveOnlyBackground),
                  children: [
                    (0, e.jsx)("div", {
                      className: we.TopicHeader,
                      children: (0, a.we)("#FAQViewer_AdminLinks"),
                    }),
                    (0, e.jsx)("div", {
                      className: ot.InfoRow,
                      children: (0, a.PP)(
                        "#FAQViewer_Admin_LastUpdate",
                        i != null && i.author_account_id
                          ? (0, e.jsx)(it.p, {
                              accountID: Number.parseInt(i.author_account_id),
                            })
                          : (0, a.we)("#FAQViewer_UnknownUser"),
                        (0, e.jsx)("span", {
                          children:
                            (0, a.TW)(t.timestamp) +
                            "@" +
                            (0, be.KC)(t.timestamp, { bForce24HourClock: !1 }),
                        }),
                      ),
                    }),
                    (0, e.jsx)(Ut, { faqContent: t }),
                    (0, e.jsx)(fe, {
                      faqid: t.faq_id,
                      route: b.k_eCommunityEdit,
                      bForceAnchor: !0,
                      children: (0, a.we)("#FAQViewer_GotoEditor"),
                    }),
                  ],
                })
              : null;
          },
          Ut = (s) => {
            const { faqContent: t } = s,
              [i, o] = (0, y.z5)(t.faq_id);
            if (
              !i ||
              !o ||
              i.GetLastTimeLanguageUpdated(t.language) <= t.timestamp
            )
              return null;
            const d = i.GetLastSavedDraftVersion(t.language);
            return (0, e.jsx)("div", {
              className: ot.InfoRow,
              children: (0, a.PP)(
                "#FAQViewer_DraftNewer",
                (0, e.jsx)(it.p, {
                  accountID: Number.parseInt(d.author_account_id),
                }),
                (0, e.jsx)("span", {
                  children:
                    (0, a.TW)(d.timestamp) +
                    "@" +
                    (0, be.KC)(d.timestamp, { bForce24HourClock: !1 }),
                }),
              ),
            });
          },
          Vt = (s) =>
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: (0, C.A)(we.Section, we.NeedHelp),
                  children: [
                    (0, e.jsx)("div", {
                      className: we.LeftCol,
                      children: (0, e.jsx)(Ie._VW, { role: "presentation" }),
                    }),
                    (0, e.jsxs)("div", {
                      className: we.RightCol,
                      children: [
                        (0, e.jsx)("div", {
                          className: we.TopicHeader,
                          children: (0, a.we)(
                            "#FAQViewer_SideBar_ProblemWithSteam_Title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, a.we)(
                            "#FAQViewer_SideBar_ProblemWithSteam_Desc",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: we.CenterButtonCtn,
                          children: (0, e.jsx)("a", {
                            href: O.TS.HELP_BASE_URL,
                            className: h.EditPreviewButton,
                            children: (0, a.we)(
                              "#FAQViewer_SideBar_ProblemWithSteam_Link",
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !(0, O.Y2)() &&
                  (0, e.jsxs)("div", {
                    className: (0, C.A)(we.Section, we.CommunityHelp),
                    children: [
                      (0, e.jsx)("div", {
                        className: we.LeftCol,
                        children: (0, e.jsx)(Ie.ROZ, { role: "presentation" }),
                      }),
                      (0, e.jsxs)("div", {
                        className: we.RightCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: we.TopicHeader,
                            children: (0, a.we)(
                              "#FAQViewer_SideBar_CommunityHelp_Title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, a.we)(
                              "#FAQViewer_SideBar_CommunityHelp_Desc",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: we.CenterButtonCtn,
                            children: (0, e.jsx)("a", {
                              href: O.TS.COMMUNITY_BASE_URL + "discussions",
                              className: h.EditPreviewButton,
                              children: (0, a.we)(
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
        var Ht = c(25651),
          et = c.n(Ht);
        const zt = (s) => {
            const { faqid: t } = s,
              [i, o] = (0, y.Kv)(t, (0, g.sfN)(O.TS.LANGUAGE));
            if (o) {
              if (!i)
                return (0, e.jsx)(Ze, {
                  children: (0, e.jsx)(lt, {
                    strError: (0, a.we)("#FAQViewer_NoFAQFound"),
                  }),
                });
            } else
              return (0, e.jsx)(Ze, {
                children: (0, e.jsx)(pe.t, {
                  position: "center",
                  size: "xlarge",
                  string: (0, a.we)("#Loading"),
                }),
              });
            return (0, e.jsx)(rt, {
              title: i.title,
              content: i.content,
              version: i.version,
              elSideBars: [
                (0, e.jsx)(Vt, { faqContent: i }, "sidebar"),
                (0, e.jsx)(Mt, { faqContent: i }, "adminbar"),
              ],
            });
          },
          lt = (s) => {
            var t;
            const i =
              O.TS.COMMUNITY_BASE_URL +
              (O.UF.APPID
                ? "app/" + ((t = O.UF.VANITY_ID) != null ? t : O.UF.APPID)
                : "gid/" + O.UF.CLANSTEAMID);
            return (0, e.jsxs)("div", {
              className: et().ErrorCtn,
              children: [
                (0, e.jsx)("div", {
                  className: et().ErrorMsg,
                  children: s.strError,
                }),
                (0, e.jsx)("a", {
                  className: et().EscapeLink,
                  href: i,
                  children: (0, a.we)("#FAQViewer_GoToHomepage"),
                }),
              ],
            });
          },
          Wt = (0, ee.PA)((s) => {
            const { faqid: t } = s,
              [i, o] = (0, y.z5)(t),
              d = ke.O.Get().GetCurEditLanguage();
            if (o) {
              if (!i)
                return (0, e.jsx)(Ze, {
                  children: (0, e.jsx)(lt, {
                    strError: (0, a.we)("#FAQViewer_NoFAQFound"),
                  }),
                });
            } else
              return (0, e.jsx)(Ze, {
                children: (0, e.jsx)(pe.t, {
                  position: "center",
                  size: "xlarge",
                  string: (0, a.we)("#Loading"),
                }),
              });
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(nt, { draft: i, bPreview: !0 }),
                (0, e.jsx)(rt, {
                  title: i.GetDraftTitleWithFallback(d, O.TS.EREALM),
                  content: i.GetDraftContentWithFallback(d, O.TS.EREALM),
                  version: "" + i.GetLastTimeLanguageUpdated(d),
                  language: d,
                }),
                (0, e.jsx)(at, { draft: i, eLanguage: d }),
              ],
            });
          });
        var qe = c(20076),
          Kt = c(90783);
        const Oe = {
            ViewFAQ: (s, t) => `/faqs/${s}/view/${t}*`,
            EditFAQ: (s, t) => `/faqs/${s}/edit/${t}*`,
            DashboardFAQ: (s) => `/faqs/${s}/dashboard`,
            PreviewFAQ: (s, t) => `/faqs/${s}/preview/${t}*`,
          },
          Yt = (0, ee.PA)((s) =>
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(ze, {}),
                (0, e.jsxs)(se.dO, {
                  children: [
                    (0, e.jsx)(se.qh, {
                      path: Oe.ViewFAQ(":vanity_str", ":faqid"),
                      render: (t) =>
                        (0, e.jsx)(qe.X, {
                          config: {
                            "faqs-root": () => {
                              const { faqid: i } = t.match.params,
                                o = (0, y.CJ)(i);
                              return (0, e.jsx)(zt, { faqid: o });
                            },
                          },
                        }),
                    }),
                    (0, e.jsx)(se.qh, {
                      path: Oe.EditFAQ(":vanity_str", ":faqid"),
                      render: (t) =>
                        (0, e.jsx)(qe.X, {
                          config: {
                            "faqs-root": () => {
                              const { faqid: i } = t.match.params;
                              if (i) {
                                const o = (0, y.CJ)(i);
                                return o
                                  ? (0, e.jsx)(Pt, { faqid: o })
                                  : (0, e.jsx)(se.rd, {
                                      push: !0,
                                      to: ye(b.k_eCommunityDashboard),
                                    });
                              } else return (0, e.jsx)(De, {});
                            },
                          },
                        }),
                    }),
                    (0, e.jsx)(se.qh, {
                      path: Oe.DashboardFAQ(":vanity_str"),
                      render: (t) =>
                        (0, e.jsx)(qe.X, {
                          config: { "faqs-root": () => (0, e.jsx)(De, {}) },
                        }),
                    }),
                    (0, e.jsx)(se.qh, {
                      path: Oe.PreviewFAQ(":vanity_str", ":faqid"),
                      render: (t) =>
                        (0, e.jsx)(qe.X, {
                          config: {
                            "faqs-root": () => {
                              const { faqid: i } = t.match.params,
                                o = (0, y.CJ)(i);
                              return (0, e.jsx)(Wt, { faqid: o });
                            },
                          },
                        }),
                    }),
                    (0, e.jsx)(se.qh, { component: Kt.a }),
                  ],
                }),
              ],
            }),
          );
      },
      11259: (K) => {
        K.exports = {
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
      63280: (K) => {
        K.exports = {
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
      93084: (K) => {
        K.exports = {
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
      35707: (K) => {
        K.exports = {
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
      3063: (K) => {
        K.exports = {
          Never: "_8rlUGGeBnYbuZpSoMtPGY",
          Warning: "pZM2L30-1FOU9cbzqy1AQ",
        };
      },
      66444: (K) => {
        K.exports = {
          FAQUnPublished: "erZyIOjQA9q0Wv28vQPiN",
          FAQPublished: "_13Wz0jEDJuyCYIYT-3Nk8X",
          EditorInternalNameLabel: "_3fAcXrEhyNYZKLFAviS1gi",
          EditorInternalName: "_3A9ciQBxaVrGEWI6kD4zod",
        };
      },
      25651: (K) => {
        K.exports = {
          ErrorCtn: "_2Dpwh3MWbH9ND0PlNK8G7M",
          ErrorMsg: "_2dTNxR8PrLvqBwSUnhUVh5",
          EscapeLink: "_19BjjT3X_AZgLiL1pFYCDG",
        };
      },
      51520: (K) => {
        K.exports = {
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
      28735: (K) => {
        K.exports = {
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
      20572: (K) => {
        K.exports = { InfoRow: "_3AG-7BbBE7Sw0efJrEb417" };
      },
      66891: (K) => {
        K.exports = {
          Section: "_3S-XzUnd8sYIE7sDuLmpPo",
          CommunityHelp: "_2TGFIDdCmMB614_-hieBc7",
          NeedHelp: "_1DywXfNVrbQvDpTJXgd18z",
          LeftCol: "_3gfCnqvp6FV0m9PqL9XMq",
          TopicHeader: "_3X6huZLPQI8y6LirxSv4Gy",
          CenterButtonCtn: "_3sZ58WE85Tqs8Bv8g-quYc",
        };
      },
      40323: function (K, Te) {
        var c, e, ee; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((D, g) => {
          (e = []),
            (c = g),
            (ee = typeof c == "function" ? c.apply(Te, e) : c),
            ee !== void 0 && (K.exports = ee);
        })(this, function D() {
          var g =
              typeof self != "undefined"
                ? self
                : typeof window != "undefined"
                  ? window
                  : g !== void 0
                    ? g
                    : {},
            y,
            _ = !g.document && !!g.postMessage,
            se = g.IS_PAPA_WORKER || !1,
            Ne = {},
            O = 0,
            b = {};
          function fe(n) {
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
              function (r) {
                var l = j(r);
                (l.chunkSize = parseInt(l.chunkSize)),
                  r.step || r.chunk || (l.chunkSize = null),
                  (this._handle = new pe(l)),
                  ((this._handle.streamer = this)._config = l);
              }.call(this, n),
              (this.parseChunk = function (r, l) {
                var h = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < h) {
                  let L = this._config.newline;
                  L ||
                    ((f = this._config.quoteChar || '"'),
                    (L = this._handle.guessLineEndings(r, f))),
                    (r = [...r.split(L).slice(h)].join(L));
                }
                this.isFirstChunk &&
                  T(this._config.beforeFirstChunk) &&
                  (f = this._config.beforeFirstChunk(r)) !== void 0 &&
                  (r = f),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var h = this._partialLine + r,
                  f =
                    ((this._partialLine = ""),
                    this._handle.parse(h, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((r = f.meta.cursor),
                    (h =
                      (this._finished ||
                        ((this._partialLine = h.substring(r - this._baseIndex)),
                        (this._baseIndex = r)),
                      f && f.data && (this._rowCount += f.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    se)
                  )
                    g.postMessage({
                      results: f,
                      workerId: b.WORKER_ID,
                      finished: h,
                    });
                  else if (T(this._config.chunk) && !l) {
                    if (
                      (this._config.chunk(f, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = f = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(f.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(f.errors)),
                      (this._completeResults.meta = f.meta)),
                    this._completed ||
                      !h ||
                      !T(this._config.complete) ||
                      (f && f.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    h || (f && f.meta.paused) || this._nextChunk(),
                    f
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (r) {
                T(this._config.error)
                  ? this._config.error(r)
                  : se &&
                    this._config.error &&
                    g.postMessage({
                      workerId: b.WORKER_ID,
                      error: r,
                      finished: !1,
                    });
              });
          }
          function ye(n) {
            var r;
            (n = n || {}).chunkSize || (n.chunkSize = b.RemoteChunkSize),
              fe.call(this, n),
              (this._nextChunk = _
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (l) {
                (this._input = l), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((r = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (r.withCredentials = this._config.withCredentials),
                    _ ||
                      ((r.onload = _e(this._chunkLoaded, this)),
                      (r.onerror = _e(this._chunkError, this))),
                    r.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !_,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var l,
                      h = this._config.downloadRequestHeaders;
                    for (l in h) r.setRequestHeader(l, h[l]);
                  }
                  var f;
                  this._config.chunkSize &&
                    ((f = this._start + this._config.chunkSize - 1),
                    r.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + f,
                    ));
                  try {
                    r.send(this._config.downloadRequestBody);
                  } catch (L) {
                    this._chunkError(L.message);
                  }
                  _ && r.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                r.readyState === 4 &&
                  (r.status < 200 || 400 <= r.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || r.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((l) =>
                            (l = l.getResponseHeader("Content-Range")) !== null
                              ? parseInt(l.substring(l.lastIndexOf("/") + 1))
                              : -1)(r)),
                      this.parseChunk(r.responseText)));
              }),
              (this._chunkError = function (l) {
                (l = r.statusText || l), this._sendError(new Error(l));
              });
          }
          function le(n) {
            (n = n || {}).chunkSize || (n.chunkSize = b.LocalChunkSize),
              fe.call(this, n);
            var r,
              l,
              h = typeof FileReader != "undefined";
            (this.stream = function (f) {
              (this._input = f),
                (l = f.slice || f.webkitSlice || f.mozSlice),
                h
                  ? (((r = new FileReader()).onload = _e(
                      this._chunkLoaded,
                      this,
                    )),
                    (r.onerror = _e(this._chunkError, this)))
                  : (r = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var f = this._input,
                  L =
                    (this._config.chunkSize &&
                      ((L = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (f = l.call(f, this._start, L))),
                    r.readAsText(f, this._config.encoding));
                h || this._chunkLoaded({ target: { result: L } });
              }),
              (this._chunkLoaded = function (f) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(f.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(r.error);
              });
          }
          function de(n) {
            var r;
            fe.call(this, (n = n || {})),
              (this.stream = function (l) {
                return (r = l), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var l, h;
                if (!this._finished)
                  return (
                    (l = this._config.chunkSize),
                    (r = l
                      ? ((h = r.substring(0, l)), r.substring(l))
                      : ((h = r), "")),
                    (this._finished = !r),
                    this.parseChunk(h)
                  );
              });
          }
          function Ie(n) {
            fe.call(this, (n = n || {}));
            var r = [],
              l = !0,
              h = !1;
            (this.pause = function () {
              fe.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                fe.prototype.resume.apply(this, arguments),
                  this._input.resume();
              }),
              (this.stream = function (f) {
                (this._input = f),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                h && r.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  r.length ? this.parseChunk(r.shift()) : (l = !0);
              }),
              (this._streamData = _e(function (f) {
                try {
                  r.push(
                    typeof f == "string"
                      ? f
                      : f.toString(this._config.encoding),
                  ),
                    l &&
                      ((l = !1),
                      this._checkIsFinished(),
                      this.parseChunk(r.shift()));
                } catch (L) {
                  this._streamError(L);
                }
              }, this)),
              (this._streamError = _e(function (f) {
                this._streamCleanUp(), this._sendError(f);
              }, this)),
              (this._streamEnd = _e(function () {
                this._streamCleanUp(), (h = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = _e(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function pe(n) {
            var r,
              l,
              h,
              f,
              L = Math.pow(2, 53),
              ne = -L,
              ae = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              be =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              P = this,
              F = 0,
              E = 0,
              ue = !1,
              S = !1,
              R = [],
              x = { data: [], errors: [], meta: {} };
            function re(I) {
              return n.skipEmptyLines === "greedy"
                ? I.join("").trim() === ""
                : I.length === 1 && I[0].length === 0;
            }
            function te() {
              if (
                (x &&
                  h &&
                  (je(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      b.DefaultDelimiter +
                      "'",
                  ),
                  (h = !1)),
                n.skipEmptyLines &&
                  (x.data = x.data.filter(function (Y) {
                    return !re(Y);
                  })),
                ie())
              ) {
                let Y = function (oe, Z) {
                  T(n.transformHeader) && (oe = n.transformHeader(oe, Z)),
                    R.push(oe);
                };
                var N = Y;
                if (x)
                  if (Array.isArray(x.data[0])) {
                    for (var I = 0; ie() && I < x.data.length; I++)
                      x.data[I].forEach(Y);
                    x.data.splice(0, 1);
                  } else x.data.forEach(Y);
              }
              function B(Y, oe) {
                for (var Z = n.header ? {} : [], V = 0; V < Y.length; V++) {
                  var Q = V,
                    ge = Y[V],
                    ge = ((G, z) =>
                      ((X) => (
                        n.dynamicTypingFunction &&
                          n.dynamicTyping[X] === void 0 &&
                          (n.dynamicTyping[X] = n.dynamicTypingFunction(X)),
                        (n.dynamicTyping[X] || n.dynamicTyping) === !0
                      ))(G)
                        ? z === "true" ||
                          z === "TRUE" ||
                          (z !== "false" &&
                            z !== "FALSE" &&
                            (((X) => {
                              if (
                                ae.test(X) &&
                                ((X = parseFloat(X)), ne < X && X < L)
                              )
                                return 1;
                            })(z)
                              ? parseFloat(z)
                              : be.test(z)
                                ? new Date(z)
                                : z === ""
                                  ? null
                                  : z))
                        : z)(
                      (Q = n.header
                        ? V >= R.length
                          ? "__parsed_extra"
                          : R[V]
                        : Q),
                      (ge = n.transform ? n.transform(ge, Q) : ge),
                    );
                  Q === "__parsed_extra"
                    ? ((Z[Q] = Z[Q] || []), Z[Q].push(ge))
                    : (Z[Q] = ge);
                }
                return (
                  n.header &&
                    (V > R.length
                      ? je(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            R.length +
                            " fields but parsed " +
                            V,
                          E + oe,
                        )
                      : V < R.length &&
                        je(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            R.length +
                            " fields but parsed " +
                            V,
                          E + oe,
                        )),
                  Z
                );
              }
              var q;
              x &&
                (n.header || n.dynamicTyping || n.transform) &&
                ((q = 1),
                !x.data.length || Array.isArray(x.data[0])
                  ? ((x.data = x.data.map(B)), (q = x.data.length))
                  : (x.data = B(x.data, 0)),
                n.header && x.meta && (x.meta.fields = R),
                (E += q));
            }
            function ie() {
              return n.header && R.length === 0;
            }
            function je(I, B, q, N) {
              (I = { type: I, code: B, message: q }),
                N !== void 0 && (I.row = N),
                x.errors.push(I);
            }
            T(n.step) &&
              ((f = n.step),
              (n.step = function (I) {
                (x = I),
                  ie()
                    ? te()
                    : (te(),
                      x.data.length !== 0 &&
                        ((F += I.data.length),
                        n.preview && F > n.preview
                          ? l.abort()
                          : ((x.data = x.data[0]), f(x, P))));
              })),
              (this.parse = function (I, B, q) {
                var N = n.quoteChar || '"',
                  N =
                    (n.newline || (n.newline = this.guessLineEndings(I, N)),
                    (h = !1),
                    n.delimiter
                      ? T(n.delimiter) &&
                        ((n.delimiter = n.delimiter(I)),
                        (x.meta.delimiter = n.delimiter))
                      : ((N = ((Y, oe, Z, V, Q) => {
                          var ge, G, z, X;
                          Q = Q || [
                            ",",
                            "	",
                            "|",
                            ";",
                            b.RECORD_SEP,
                            b.UNIT_SEP,
                          ];
                          for (var Qe = 0; Qe < Q.length; Qe++) {
                            for (
                              var De,
                                Re = Q[Qe],
                                me = 0,
                                Fe = 0,
                                W = 0,
                                he =
                                  ((z = void 0),
                                  new C({
                                    comments: V,
                                    delimiter: Re,
                                    newline: oe,
                                    preview: 10,
                                  }).parse(Y)),
                                Ee = 0;
                              Ee < he.data.length;
                              Ee++
                            )
                              Z && re(he.data[Ee])
                                ? W++
                                : ((De = he.data[Ee].length),
                                  (Fe += De),
                                  z === void 0
                                    ? (z = De)
                                    : 0 < De &&
                                      ((me += Math.abs(De - z)), (z = De)));
                            0 < he.data.length && (Fe /= he.data.length - W),
                              (G === void 0 || me <= G) &&
                                (X === void 0 || X < Fe) &&
                                1.99 < Fe &&
                                ((G = me), (ge = Re), (X = Fe));
                          }
                          return {
                            successful: !!(n.delimiter = ge),
                            bestDelimiter: ge,
                          };
                        })(
                          I,
                          n.newline,
                          n.skipEmptyLines,
                          n.comments,
                          n.delimitersToGuess,
                        )).successful
                          ? (n.delimiter = N.bestDelimiter)
                          : ((h = !0), (n.delimiter = b.DefaultDelimiter)),
                        (x.meta.delimiter = n.delimiter)),
                    j(n));
                return (
                  n.preview && n.header && N.preview++,
                  (r = I),
                  (l = new C(N)),
                  (x = l.parse(r, B, q)),
                  te(),
                  ue ? { meta: { paused: !0 } } : x || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return ue;
              }),
              (this.pause = function () {
                (ue = !0),
                  l.abort(),
                  (r = T(n.chunk) ? "" : r.substring(l.getCharIndex()));
              }),
              (this.resume = function () {
                P.streamer._halted
                  ? ((ue = !1), P.streamer.parseChunk(r, !0))
                  : setTimeout(P.resume, 3);
              }),
              (this.aborted = function () {
                return S;
              }),
              (this.abort = function () {
                (S = !0),
                  l.abort(),
                  (x.meta.aborted = !0),
                  T(n.complete) && n.complete(x),
                  (r = "");
              }),
              (this.guessLineEndings = function (Y, N) {
                Y = Y.substring(0, 1048576);
                var N = new RegExp(Ce(N) + "([^]*?)" + Ce(N), "gm"),
                  q = (Y = Y.replace(N, "")).split("\r"),
                  N = Y.split(`
`),
                  Y = 1 < N.length && N[0].length < q[0].length;
                if (q.length === 1 || Y)
                  return `
`;
                for (var oe = 0, Z = 0; Z < q.length; Z++)
                  q[Z][0] ===
                    `
` && oe++;
                return oe >= q.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function Ce(n) {
            return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function C(n) {
            var r = (n = n || {}).delimiter,
              l = n.newline,
              h = n.comments,
              f = n.step,
              L = n.preview,
              ne = n.fastMode,
              ae = null,
              be = !1,
              P = n.quoteChar == null ? '"' : n.quoteChar,
              F = P;
            if (
              (n.escapeChar !== void 0 && (F = n.escapeChar),
              (typeof r != "string" || -1 < b.BAD_DELIMITERS.indexOf(r)) &&
                (r = ","),
              h === r)
            )
              throw new Error("Comment character same as delimiter");
            h === !0
              ? (h = "#")
              : (typeof h != "string" || -1 < b.BAD_DELIMITERS.indexOf(h)) &&
                (h = !1),
              l !==
                `
` &&
                l !== "\r" &&
                l !==
                  `\r
` &&
                (l = `
`);
            var E = 0,
              ue = !1;
            (this.parse = function (S, R, x) {
              if (typeof S != "string")
                throw new Error("Input must be a string");
              var re = S.length,
                te = r.length,
                ie = l.length,
                je = h.length,
                I = T(f),
                B = [],
                q = [],
                N = [],
                Y = (E = 0);
              if (!S) return me();
              if (ne || (ne !== !1 && S.indexOf(P) === -1)) {
                for (var oe = S.split(l), Z = 0; Z < oe.length; Z++) {
                  if (((N = oe[Z]), (E += N.length), Z !== oe.length - 1))
                    E += l.length;
                  else if (x) return me();
                  if (!h || N.substring(0, je) !== h) {
                    if (I) {
                      if (((B = []), X(N.split(r)), Fe(), ue)) return me();
                    } else X(N.split(r));
                    if (L && L <= Z) return (B = B.slice(0, L)), me(!0);
                  }
                }
                return me();
              }
              for (
                var V = S.indexOf(r, E),
                  Q = S.indexOf(l, E),
                  ge = new RegExp(Ce(F) + Ce(P), "g"),
                  G = S.indexOf(P, E);
                ;
              )
                if (S[E] === P)
                  for (G = E, E++; ; ) {
                    if ((G = S.indexOf(P, G + 1)) === -1)
                      return (
                        x ||
                          q.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: B.length,
                            index: E,
                          }),
                        De()
                      );
                    if (G === re - 1)
                      return De(S.substring(E, G).replace(ge, P));
                    if (P === F && S[G + 1] === F) G++;
                    else if (P === F || G === 0 || S[G - 1] !== F) {
                      V !== -1 && V < G + 1 && (V = S.indexOf(r, G + 1));
                      var z = Qe(
                        (Q =
                          Q !== -1 && Q < G + 1 ? S.indexOf(l, G + 1) : Q) ===
                          -1
                          ? V
                          : Math.min(V, Q),
                      );
                      if (S.substr(G + 1 + z, te) === r) {
                        N.push(S.substring(E, G).replace(ge, P)),
                          S[(E = G + 1 + z + te)] !== P &&
                            (G = S.indexOf(P, E)),
                          (V = S.indexOf(r, E)),
                          (Q = S.indexOf(l, E));
                        break;
                      }
                      if (
                        ((z = Qe(Q)),
                        S.substring(G + 1 + z, G + 1 + z + ie) === l)
                      ) {
                        if (
                          (N.push(S.substring(E, G).replace(ge, P)),
                          Re(G + 1 + z + ie),
                          (V = S.indexOf(r, E)),
                          (G = S.indexOf(P, E)),
                          I && (Fe(), ue))
                        )
                          return me();
                        if (L && B.length >= L) return me(!0);
                        break;
                      }
                      q.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: B.length,
                        index: E,
                      }),
                        G++;
                    }
                  }
                else if (h && N.length === 0 && S.substring(E, E + je) === h) {
                  if (Q === -1) return me();
                  (E = Q + ie), (Q = S.indexOf(l, E)), (V = S.indexOf(r, E));
                } else if (V !== -1 && (V < Q || Q === -1))
                  N.push(S.substring(E, V)),
                    (E = V + te),
                    (V = S.indexOf(r, E));
                else {
                  if (Q === -1) break;
                  if ((N.push(S.substring(E, Q)), Re(Q + ie), I && (Fe(), ue)))
                    return me();
                  if (L && B.length >= L) return me(!0);
                }
              return De();
              function X(W) {
                B.push(W), (Y = E);
              }
              function Qe(W) {
                var he = 0;
                return (he =
                  W !== -1 && (W = S.substring(G + 1, W)) && W.trim() === ""
                    ? W.length
                    : he);
              }
              function De(W) {
                return (
                  x ||
                    (W === void 0 && (W = S.substring(E)),
                    N.push(W),
                    (E = re),
                    X(N),
                    I && Fe()),
                  me()
                );
              }
              function Re(W) {
                (E = W), X(N), (N = []), (Q = S.indexOf(l, E));
              }
              function me(W) {
                if (n.header && !R && B.length && !be) {
                  var he = B[0],
                    Ee = Object.create(null),
                    He = new Set(he);
                  let ze = !1;
                  for (let Pe = 0; Pe < he.length; Pe++) {
                    let Se = he[Pe];
                    if (
                      Ee[
                        (Se = T(n.transformHeader)
                          ? n.transformHeader(Se, Pe)
                          : Se)
                      ]
                    ) {
                      let Be,
                        ke = Ee[Se];
                      for (; (Be = Se + "_" + ke), ke++, He.has(Be); );
                      He.add(Be),
                        (he[Pe] = Be),
                        Ee[Se]++,
                        (ze = !0),
                        ((ae = ae === null ? {} : ae)[Be] = Se);
                    } else (Ee[Se] = 1), (he[Pe] = Se);
                    He.add(Se);
                  }
                  ze && console.warn("Duplicate headers found and renamed."),
                    (be = !0);
                }
                return {
                  data: B,
                  errors: q,
                  meta: {
                    delimiter: r,
                    linebreak: l,
                    aborted: ue,
                    truncated: !!W,
                    cursor: Y + (R || 0),
                    renamedHeaders: ae,
                  },
                };
              }
              function Fe() {
                f(me()), (B = []), (q = []);
              }
            }),
              (this.abort = function () {
                ue = !0;
              }),
              (this.getCharIndex = function () {
                return E;
              });
          }
          function a(n) {
            var r = n.data,
              l = Ne[r.workerId],
              h = !1;
            if (r.error) l.userError(r.error, r.file);
            else if (r.results && r.results.data) {
              var f = {
                abort: function () {
                  (h = !0),
                    ce(r.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: ve,
                resume: ve,
              };
              if (T(l.userStep)) {
                for (
                  var L = 0;
                  L < r.results.data.length &&
                  (l.userStep(
                    {
                      data: r.results.data[L],
                      errors: r.results.errors,
                      meta: r.results.meta,
                    },
                    f,
                  ),
                  !h);
                  L++
                );
                delete r.results;
              } else
                T(l.userChunk) &&
                  (l.userChunk(r.results, f, r.file), delete r.results);
            }
            r.finished && !h && ce(r.workerId, r.results);
          }
          function ce(n, r) {
            var l = Ne[n];
            T(l.userComplete) && l.userComplete(r), l.terminate(), delete Ne[n];
          }
          function ve() {
            throw new Error("Not implemented.");
          }
          function j(n) {
            if (typeof n != "object" || n === null) return n;
            var r,
              l = Array.isArray(n) ? [] : {};
            for (r in n) l[r] = j(n[r]);
            return l;
          }
          function _e(n, r) {
            return function () {
              n.apply(r, arguments);
            };
          }
          function T(n) {
            return typeof n == "function";
          }
          return (
            (b.parse = function (n, r) {
              var l = (r = r || {}).dynamicTyping || !1;
              if (
                (T(l) && ((r.dynamicTypingFunction = l), (l = {})),
                (r.dynamicTyping = l),
                (r.transform = !!T(r.transform) && r.transform),
                !r.worker || !b.WORKERS_SUPPORTED)
              )
                return (
                  (l = null),
                  b.NODE_STREAM_INPUT,
                  typeof n == "string"
                    ? ((n = ((h) =>
                        h.charCodeAt(0) !== 65279 ? h : h.slice(1))(n)),
                      (l = new (r.download ? ye : de)(r)))
                    : n.readable === !0 && T(n.read) && T(n.on)
                      ? (l = new Ie(r))
                      : ((g.File && n instanceof File) ||
                          n instanceof Object) &&
                        (l = new le(r)),
                  l.stream(n)
                );
              ((l = (() => {
                var h;
                return (
                  !!b.WORKERS_SUPPORTED &&
                  ((h = (() => {
                    var f = g.URL || g.webkitURL || null,
                      L = D.toString();
                    return (
                      b.BLOB_URL ||
                      (b.BLOB_URL = f.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            L,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((h = new g.Worker(h)).onmessage = a),
                  (h.id = O++),
                  (Ne[h.id] = h))
                );
              })()).userStep = r.step),
                (l.userChunk = r.chunk),
                (l.userComplete = r.complete),
                (l.userError = r.error),
                (r.step = T(r.step)),
                (r.chunk = T(r.chunk)),
                (r.complete = T(r.complete)),
                (r.error = T(r.error)),
                delete r.worker,
                l.postMessage({ input: n, config: r, workerId: l.id });
            }),
            (b.unparse = function (n, r) {
              var l = !1,
                h = !0,
                f = ",",
                L = `\r
`,
                ne = '"',
                ae = ne + ne,
                be = !1,
                P = null,
                F = !1,
                E =
                  ((() => {
                    if (typeof r == "object") {
                      if (
                        (typeof r.delimiter != "string" ||
                          b.BAD_DELIMITERS.filter(function (R) {
                            return r.delimiter.indexOf(R) !== -1;
                          }).length ||
                          (f = r.delimiter),
                        (typeof r.quotes != "boolean" &&
                          typeof r.quotes != "function" &&
                          !Array.isArray(r.quotes)) ||
                          (l = r.quotes),
                        (typeof r.skipEmptyLines != "boolean" &&
                          typeof r.skipEmptyLines != "string") ||
                          (be = r.skipEmptyLines),
                        typeof r.newline == "string" && (L = r.newline),
                        typeof r.quoteChar == "string" && (ne = r.quoteChar),
                        typeof r.header == "boolean" && (h = r.header),
                        Array.isArray(r.columns))
                      ) {
                        if (r.columns.length === 0)
                          throw new Error("Option columns is empty");
                        P = r.columns;
                      }
                      r.escapeChar !== void 0 && (ae = r.escapeChar + ne),
                        r.escapeFormulae instanceof RegExp
                          ? (F = r.escapeFormulae)
                          : typeof r.escapeFormulae == "boolean" &&
                            r.escapeFormulae &&
                            (F = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(Ce(ne), "g"));
              if (
                (typeof n == "string" && (n = JSON.parse(n)), Array.isArray(n))
              ) {
                if (!n.length || Array.isArray(n[0])) return ue(null, n, be);
                if (typeof n[0] == "object")
                  return ue(P || Object.keys(n[0]), n, be);
              } else if (typeof n == "object")
                return (
                  typeof n.data == "string" && (n.data = JSON.parse(n.data)),
                  Array.isArray(n.data) &&
                    (n.fields || (n.fields = (n.meta && n.meta.fields) || P),
                    n.fields ||
                      (n.fields = Array.isArray(n.data[0])
                        ? n.fields
                        : typeof n.data[0] == "object"
                          ? Object.keys(n.data[0])
                          : []),
                    Array.isArray(n.data[0]) ||
                      typeof n.data[0] == "object" ||
                      (n.data = [n.data])),
                  ue(n.fields || [], n.data || [], be)
                );
              throw new Error("Unable to serialize unrecognized input");
              function ue(R, x, re) {
                var te = "",
                  ie =
                    (typeof R == "string" && (R = JSON.parse(R)),
                    typeof x == "string" && (x = JSON.parse(x)),
                    Array.isArray(R) && 0 < R.length),
                  je = !Array.isArray(x[0]);
                if (ie && h) {
                  for (var I = 0; I < R.length; I++)
                    0 < I && (te += f), (te += S(R[I], I));
                  0 < x.length && (te += L);
                }
                for (var B = 0; B < x.length; B++) {
                  var q = (ie ? R : x[B]).length,
                    N = !1,
                    Y = ie ? Object.keys(x[B]).length === 0 : x[B].length === 0;
                  if (
                    (re &&
                      !ie &&
                      (N =
                        re === "greedy"
                          ? x[B].join("").trim() === ""
                          : x[B].length === 1 && x[B][0].length === 0),
                    re === "greedy" && ie)
                  ) {
                    for (var oe = [], Z = 0; Z < q; Z++) {
                      var V = je ? R[Z] : Z;
                      oe.push(x[B][V]);
                    }
                    N = oe.join("").trim() === "";
                  }
                  if (!N) {
                    for (var Q = 0; Q < q; Q++) {
                      0 < Q && !Y && (te += f);
                      var ge = ie && je ? R[Q] : Q;
                      te += S(x[B][ge], Q);
                    }
                    B < x.length - 1 && (!re || (0 < q && !Y)) && (te += L);
                  }
                }
                return te;
              }
              function S(R, x) {
                var re, te;
                return R == null
                  ? ""
                  : R.constructor === Date
                    ? JSON.stringify(R).slice(1, 25)
                    : ((te = !1),
                      F &&
                        typeof R == "string" &&
                        F.test(R) &&
                        ((R = "'" + R), (te = !0)),
                      (re = R.toString().replace(E, ae)),
                      (te =
                        te ||
                        l === !0 ||
                        (typeof l == "function" && l(R, x)) ||
                        (Array.isArray(l) && l[x]) ||
                        ((ie, je) => {
                          for (var I = 0; I < je.length; I++)
                            if (-1 < ie.indexOf(je[I])) return !0;
                          return !1;
                        })(re, b.BAD_DELIMITERS) ||
                        -1 < re.indexOf(f) ||
                        re.charAt(0) === " " ||
                        re.charAt(re.length - 1) === " ")
                        ? ne + re + ne
                        : re);
              }
            }),
            (b.RECORD_SEP = ""),
            (b.UNIT_SEP = ""),
            (b.BYTE_ORDER_MARK = "\uFEFF"),
            (b.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              b.BYTE_ORDER_MARK,
            ]),
            (b.WORKERS_SUPPORTED = !_ && !!g.Worker),
            (b.NODE_STREAM_INPUT = 1),
            (b.LocalChunkSize = 10485760),
            (b.RemoteChunkSize = 5242880),
            (b.DefaultDelimiter = ","),
            (b.Parser = C),
            (b.ParserHandle = pe),
            (b.NetworkStreamer = ye),
            (b.FileStreamer = le),
            (b.StringStreamer = de),
            (b.ReadableStreamStreamer = Ie),
            g.jQuery &&
              ((y = g.jQuery).fn.parse = function (n) {
                var r = n.config || {},
                  l = [];
                return (
                  this.each(function (L) {
                    if (
                      !(
                        y(this).prop("tagName").toUpperCase() === "INPUT" &&
                        y(this).attr("type").toLowerCase() === "file" &&
                        g.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var ne = 0; ne < this.files.length; ne++)
                      l.push({
                        file: this.files[ne],
                        inputElem: this,
                        instanceConfig: y.extend({}, r),
                      });
                  }),
                  h(),
                  this
                );
                function h() {
                  if (l.length === 0) T(n.complete) && n.complete();
                  else {
                    var L,
                      ne,
                      ae,
                      be,
                      P = l[0];
                    if (T(n.before)) {
                      var F = n.before(P.file, P.inputElem);
                      if (typeof F == "object") {
                        if (F.action === "abort")
                          return (
                            (L = "AbortError"),
                            (ne = P.file),
                            (ae = P.inputElem),
                            (be = F.reason),
                            void (
                              T(n.error) && n.error({ name: L }, ne, ae, be)
                            )
                          );
                        if (F.action === "skip") return void f();
                        typeof F.config == "object" &&
                          (P.instanceConfig = y.extend(
                            P.instanceConfig,
                            F.config,
                          ));
                      } else if (F === "skip") return void f();
                    }
                    var E = P.instanceConfig.complete;
                    (P.instanceConfig.complete = function (ue) {
                      T(E) && E(ue, P.file, P.inputElem), f();
                    }),
                      b.parse(P.file, P.instanceConfig);
                  }
                }
                function f() {
                  l.splice(0, 1), h();
                }
              }),
            se &&
              (g.onmessage = function (n) {
                (n = n.data),
                  b.WORKER_ID === void 0 && n && (b.WORKER_ID = n.workerId),
                  typeof n.input == "string"
                    ? g.postMessage({
                        workerId: b.WORKER_ID,
                        results: b.parse(n.input, n.config),
                        finished: !0,
                      })
                    : ((g.File && n.input instanceof File) ||
                        n.input instanceof Object) &&
                      (n = b.parse(n.input, n.config)) &&
                      g.postMessage({
                        workerId: b.WORKER_ID,
                        results: n,
                        finished: !0,
                      });
              }),
            ((ye.prototype = Object.create(fe.prototype)).constructor = ye),
            ((le.prototype = Object.create(fe.prototype)).constructor = le),
            ((de.prototype = Object.create(de.prototype)).constructor = de),
            ((Ie.prototype = Object.create(fe.prototype)).constructor = Ie),
            b
          );
        });
      },
      59461: (K, Te, c) => {
        "use strict";
        c.d(Te, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=";
      },
    },
  ]);
})();
