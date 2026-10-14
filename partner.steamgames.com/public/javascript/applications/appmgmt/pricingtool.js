/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [31101],
    {
      31716: (ne, De, s) => {
        "use strict";
        s.r(De), s.d(De, { PricingRoutes: () => oe, default: () => Se });
        var r = s(7850),
          ce = s(58732),
          fe = s(90783),
          N = s(17083),
          S = s(92757),
          W = s(26485),
          I = s(31886),
          f = s(37424),
          ve = s(40396),
          a = s(90626),
          U = s(62092),
          Z = s(58534),
          le = s(88003),
          de = s(53107),
          ye = s(82734),
          l = s(18210),
          Ce = s(3166),
          Ie = s(14578),
          _e = s.n(Ie),
          je = s(25792),
          Oe = s(71421),
          Pe = s(36707),
          te = s(95146),
          T = s(71764),
          t = s(22886),
          e = s.n(t),
          n = s(31069),
          o = s(96434),
          i = s.n(o),
          u = s(78779),
          H = s(16666),
          se = s(32),
          ie = s(64238),
          y = s.n(ie),
          B = s(179),
          d = s(64641),
          ee = s(42691),
          p = s(40441),
          C = s(20929),
          c = s(64868),
          K = s(2801),
          G = s(67829);
        function J(g) {
          const {
              bCompactMode: P,
              setCompactMode: b,
              rgGridData: x,
              strPackageFilter: j,
              setPackageFilter: h,
              bFilterToBelowMinPrice: V,
              setFilterToBelowMinPrice: M,
            } = g,
            w = (0, a.useMemo)(
              () => x.filter((me) => (0, f.Y5)(me.packageID)).length,
              [x],
            );
          let $ = a.useCallback(
            (me) => {
              h(me.data);
            },
            [h],
          );
          const ue = a.useMemo(
              () => [
                {
                  label: (0, l.we)(
                    "#PricingDashboard_ShowOnlyReleasedPackages",
                  ),
                  data: "released",
                },
                {
                  label: (0, l.we)("#PricingDashboard_ShowAllPackages"),
                  data: "all",
                },
                {
                  label: (0, l.we)(
                    "#PricingDashboard_ShowOnlyUnreleasedPackages",
                  ),
                  data: "unreleased",
                },
                {
                  label: (0, l.we)("#PricingDashboard_ShowOnlyChangedPackages"),
                  data: "changed",
                },
                {
                  label: (0, l.we)("#PricingDashboard_ShowSubmittedChanges"),
                  data: "proposed",
                },
              ],
              [],
            ),
            [pe, Ee, ke] = (0, c.uD)();
          return (0, r.jsxs)("div", {
            className: e().GridHeaderButtons,
            children: [
              (0, r.jsx)(Z.ZU, {
                rgOptions: ue,
                selectedOption: j,
                strDropDownClassName: e().Test,
                onChange: $,
                contextMenuPositionOptions: { bMatchWidth: !1 },
              }),
              !!(w || V) &&
                (0, r.jsx)("div", {
                  className: (0, Pe.A)(e().OptionCtn, e().PriceLowOption),
                  children: (0, r.jsx)(Z.Yh, {
                    checked: V,
                    onChange: M,
                    label: (0, l.we)("#PricingDashboard_FilterToLowPrice", w),
                  }),
                }),
              (0, r.jsx)("div", {
                className: (0, Pe.A)(e().OptionCtn, e().CompactOption),
                children: (0, r.jsx)(Z.Yh, {
                  checked: P,
                  onChange: b,
                  label: (0, l.we)(
                    "#PricingDashboard_ShowCompactModeCheckBoxLabel",
                  ),
                }),
              }),
              (0, r.jsx)("div", {
                className: (0, Pe.A)(e().OptionCtn),
                children: (0, r.jsx)(C.J, {}),
              }),
              (0, r.jsxs)("div", {
                className: (0, Pe.A)(e().OptionCtn),
                children: [
                  (0, r.jsx)(Z.jn, {
                    onClick: Ee,
                    children: (0, l.we)(
                      "#PricingDashboard_ApplyGuidelinesDialog_Button",
                    ),
                  }),
                  (0, r.jsx)(K.EN, {
                    active: pe,
                    children: (0, r.jsx)(G.i, { closeModal: ke }),
                  }),
                ],
              }),
            ],
          });
        }
        var ae = s(81246);
        function D(g) {
          return g.contains_game && g.contains_dlc
            ? "BOTH"
            : g.contains_game
              ? "GAME"
              : g.contains_dlc
                ? "DLC"
                : null;
        }
        function E(g, P, b) {
          const { rgSupportedPriceKeys: x } = (0, f.T7)();
          return a.useMemo(() => {
            const j = [];
            for (const h of g) {
              const V = /^-?[0-9]+$/.test(b.strSearchStringFromURL)
                ? parseInt(b.strSearchStringFromURL)
                : 0;
              if (h.packageid !== V) {
                if (P == "changed") {
                  if (!(0, f.iy)(h.packageid)) continue;
                } else if (P == "proposed") {
                  if (!(0, f.RO)(h.packageid)) continue;
                } else if (P == "released") {
                  if (!h.released) continue;
                } else if (P == "unreleased" && h.released) continue;
                if (
                  b?.bFilterToOnlyBelowMinimumPrice &&
                  !(0, f.Y5)(h.packageid)
                )
                  continue;
              }
              let M = h.grouped_app_name;
              M ||
                (h.appids.length > 1
                  ? (M = (0, l.we)(
                      "#PackageGrid_MultipleBaseGamesFoundForPackage",
                    ))
                  : (M = (0, l.we)("#PackageGrid_NoBaseGameFoundForPackage")));
              const w = {
                appids: h.appids.sort(),
                appName: M,
                packageID: h.packageid,
                packageName: h.package_name || "",
                packageType: D(h),
                released: h.released,
              };
              for (const $ of x) w[$] = $;
              j.push(w);
            }
            return j;
          }, [b, g, x, P]);
        }
        function L(g) {
          const { column: P } = g,
            b = P.id,
            x = (0, f.XK)(b),
            j = (0, f.YB)(b);
          let h = () => (0, r.jsx)(v, { priceKey: b });
          return (0, r.jsxs)("div", {
            className: e().CurrencyHeader,
            children: [
              (0, r.jsx)(Oe.he, {
                toolTipContent: x,
                direction: "top",
                className: e().CurrencyAbbreviation,
                strTooltipClassname: e().HoverToolTip,
                children: (0, r.jsxs)("div", {
                  className: e().CurrencyNameCtn,
                  children: [
                    b,
                    (0, r.jsx)("span", {
                      className: e().CurrencyName,
                      children: x,
                    }),
                  ],
                }),
              }),
              j > 0 &&
                (0, r.jsx)(T.O, {
                  hoverKey: b,
                  className: e().CurrencyMore,
                  renderHover: h,
                }),
            ],
          });
        }
        function m(g) {
          const { row: P } = g;
          return (0, r.jsx)(ae.m2, {
            packageID: P.original.packageID,
            bShowCancel: !0,
          });
        }
        function O() {
          return a.useMemo(
            () =>
              (0, H.FB)().accessor("proposalState", {
                header: (0, l.we)(
                  "#PricingDashboard_Column_PriceProposalState",
                ),
                enableSorting: !1,
                cell: m,
                size: 200,
                meta: {
                  strHeaderTooltip: (0, l.we)(
                    "#PricingDashboard_Column_PriceProposalState_ttip",
                  ),
                },
              }),
            [],
          );
        }
        function Y(g) {
          const P = (0, te.sF)(),
            b = (0, te.uv)(),
            x = (0, te.NP)(),
            j = (0, te.ZN)(),
            h = (0, te.mE)(!1),
            V = O(),
            { rgSupportedPriceKeys: M } = (0, f.T7)();
          return a.useMemo(() => {
            const w = [P, b, x, j, h, V];
            for (const $ of M)
              w.push({
                accessorKey: $,
                size: g ? 72 : 200,
                enableSorting: !1,
                header: L,
                cell: n.sh,
              });
            return w;
          }, [P, b, x, j, h, V, M, g]);
        }
        function A(g) {
          const b = (0, f.Ci)()?.length ?? 0;
          return (0, r.jsx)("div", {
            className: (0, Pe.A)(e().PricingGridCtn, b > 0 && "PendingVisible"),
            children: (0, r.jsx)(k, { ...g }),
          });
        }
        const k = a.memo(function (P) {
          const { packageData: b } = P,
            [x, j] = a.useState(!1),
            h = a.useRef(null),
            [V, M] = (0, B.QD)("filter", "released"),
            [w, $] = (0, B.QD)("filter_below_min_price", !1),
            ue = new URLSearchParams(window.location.search),
            pe = ue.has(I.xi) ? decodeURIComponent(ue.get(I.xi)) : "",
            Ee = Y(x),
            ke = E(b, V, {
              bFilterToOnlyBelowMinimumPrice: w,
              strSearchStringFromURL: pe,
            }),
            me = (0, I.pV)(),
            Re = () => me(h.current),
            Fe = (0, f.Zz)(),
            Ne = (0, u.cK)();
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(J, {
                bCompactMode: x,
                setCompactMode: j,
                rgGridData: ke,
                strPackageFilter: V,
                setPackageFilter: M,
                bFilterToBelowMinPrice: w,
                setFilterToBelowMinPrice: $,
              }),
              (0, r.jsx)("div", {
                className: e().PricingGridWrapper,
                children: (0, r.jsx)("div", {
                  className: (0, Pe.A)(e().PricingGrid, x && "CompactMode"),
                  children: (0, r.jsxs)(je.tH, {
                    children: [
                      (0, r.jsx)(te.rK, {
                        fnBLocalChangesExist: Fe,
                        fnWarnUser: Ne,
                        children: (0, r.jsx)(se.k, {
                          ref: h,
                          className: y()(
                            e().PricingGridTable,
                            "noGlobalButtonStyle",
                          ),
                          columns: Ee,
                          data: ke,
                          getRowKey: (Le, Be) => Be.packageID,
                          stickyHeader: !0,
                          nItemHeight: 43,
                          nHeaderHeight: 63,
                          overscan: 12,
                          initialExpanded: !0,
                          initialSorting: [{ id: "appName", desc: !1 }],
                          initialColumnFilters: [
                            { id: "packageName", value: pe },
                          ],
                          initialGrouping: ["appName"],
                          initialColumnVisibility: {
                            packageType: !1,
                            appids: !1,
                          },
                          initialColumnPinning: {
                            left: [
                              "packageID",
                              "appName",
                              "packageName",
                              "proposalState",
                              "USD",
                            ],
                          },
                          onGroupingChange: Re,
                          onVisibleRowsChange: Re,
                          renderGroup: te.IR,
                        }),
                      }),
                      (0, r.jsx)("br", {}),
                    ],
                  }),
                }),
              }),
            ],
          });
        });
        function v(g) {
          const { priceKey: P } = g,
            b = (0, f.XK)(P);
          let x = (0, f.mP)(P);
          return (0, r.jsx)("div", {
            className: i().PricePopout,
            children: (0, r.jsx)("div", {
              className: i().DetailRow,
              children: (0, r.jsx)("div", {
                className: i().DetailLabel,
                onClick: x,
                children: (0, l.we)("#PricingDashboard_RevertAllCurrency", b),
              }),
            }),
          });
        }
        var q = s(19367),
          _ = s.n(q),
          F = s(85599),
          z = s(22880),
          be = s(57581),
          R = s.n(be);
        function we(g) {
          const { closeModal: P } = g,
            b = (0, I.vs)(),
            x = _()().format("YYYY-MM-DDTHH-mm-ss"),
            j = (0, I.zt)(),
            h = (0, I.Yr)(),
            V = `prices_all_${b}_${x}.csv`,
            M = `prices_${b}_${x}.csv`,
            w = h.length == 0;
          return (0, r.jsxs)(K.o0, {
            bAllowFullSize: !1,
            closeModal: P,
            bAlertDialog: !0,
            strTitle: (0, l.we)("#PricingDashboard_ImportExportHeader"),
            children: [
              (0, l.we)("#PricingDashboard_ImportExport_GeneralInstructions"),
              (0, r.jsx)("br", {}),
              (0, r.jsx)("a", {
                href: Ce.TS.PARTNER_BASE_URL + "doc/store/pricing/csv",
                target: "_blank",
                children: (0, l.we)("#PricingDashboard_ImportExport_DocLink"),
              }),
              (0, r.jsx)("br", {}),
              (0, r.jsx)("br", {}),
              (0, r.jsx)("h3", {
                children: (0, l.we)("#PricingDashboard_SubtitleExport"),
              }),
              (0, r.jsx)("div", {
                className: R().Instructions,
                children: (0, l.we)(
                  "#PricingDashboard_ImportExport_DownloadInstructions",
                ),
              }),
              (0, r.jsxs)("div", {
                className: R().ButtonRows,
                children: [
                  h.length != j.length &&
                    (0, r.jsxs)("div", {
                      className: R().OptionCtn,
                      children: [
                        (0, r.jsx)("span", {
                          className: R().OptionDesc,
                          children: (0, l.we)(
                            "#PricingDashboard_ImportExport_DownloadVisible_Desc",
                          ),
                        }),
                        (0, r.jsxs)(Z.$n, {
                          className: R().Button,
                          disabled: w,
                          onClick: () => X(h, M),
                          children: [
                            (0, l.we)(
                              "#PricingDashboard_ImportExport_DownloadVisible_Button",
                            ),
                            (0, r.jsx)("span", {
                              children: (0, l.we)(
                                "#PricingDashboard_PackageCount",
                                h.length,
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, r.jsxs)("div", {
                    className: R().OptionCtn,
                    children: [
                      (0, r.jsx)("span", {
                        className: R().OptionDesc,
                        children: (0, l.we)(
                          "#PricingDashboard_ImportExport_DownloadAll_Desc",
                        ),
                      }),
                      (0, r.jsxs)(Z.$n, {
                        className: R().Button,
                        disabled: w,
                        onClick: () => X(j, V),
                        children: [
                          (0, l.we)(
                            "#PricingDashboard_ImportExport_DownloadAll_Button",
                          ),
                          (0, r.jsx)("span", {
                            children: (0, l.we)(
                              "#PricingDashboard_PackageCount",
                              j.length,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("br", {}),
              (0, r.jsx)("br", {}),
              (0, r.jsx)("h3", {
                children: (0, l.we)("#PricingDashboard_SubtitleImport"),
              }),
              (0, r.jsx)("div", {
                className: R().Instructions,
                children: (0, l.we)(
                  "#PricingDashboard_ImportExport_UploadInstructions",
                ),
              }),
              (0, r.jsx)("div", {
                className: R().ButtonRows,
                children: (0, r.jsxs)("div", {
                  className: R().OptionCtn,
                  children: [
                    (0, r.jsx)("span", {
                      className: R().OptionDesc,
                      children: (0, l.we)(
                        "#PricingDashboard_ImportExport_Upload_Desc",
                      ),
                    }),
                    (0, r.jsx)(Z.$n, {
                      className: R().Button,
                      disabled: w,
                      children: (0, r.jsxs)("label", {
                        className: R().ImportButtonLabel,
                        htmlFor: "import-price-input",
                        children: [
                          (0, l.we)(
                            "#PricingDashboard_ImportExport_Upload_Button",
                          ),
                          (0, r.jsx)("input", {
                            id: "import-price-input",
                            type: "file",
                            style: { display: "none" },
                            onChange: ($) => he($, P),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function X(g, P) {
          const b = [],
            x = (0, f.U3)(),
            j = [(0, l.we)("#PackageGrid_Column_PackageName"), "ID"];
          for (const h of x) j.push(h);
          b.push(j);
          for (const h of g) {
            const M = [(0, I.ww)(h), h.toString()];
            for (const w of x) {
              const $ = (0, f.FR)(h, w),
                ue = $ ? ($ / 100).toString() : "";
              M.push(ue);
            }
            b.push(M);
          }
          z.g.WriteCSVToFile(b, P);
        }
        async function he(g, P) {
          if (g.target.files.length >= 1) {
            const b = (0, ye.uX)(g),
              x = g.target.files[0],
              j = await z.g.ParseCSVFile(x);
            (0, le.mK)(
              (0, r.jsx)(ge, { strFilename: x.name, parseResult: j }),
              b,
            ),
              P();
          }
        }
        function Q(g, P) {
          let b = Number(g);
          return Number.isNaN(b) ? null : Math.round(b * 100);
        }
        function re(g, P, b, x) {
          const j = [],
            h = new Set(P),
            V = [];
          for (const M of g.data ?? []) {
            const w = Number(M.ID);
            if (h.has(w)) {
              j.push(w);
              for (const $ of b) {
                const ue = M[$],
                  pe = !!ue?.length && Q(ue, $);
                if (!ue?.length || Number.isNaN(pe)) continue;
                const Ee = x(w, $, pe);
                Ee && V.push(Ee);
              }
            }
          }
          return { rgPriceChanges: V, nPackagesImported: j.length };
        }
        function ge(g) {
          const { closeModal: P, strFilename: b, parseResult: x } = g,
            j = (0, I.zt)(),
            h = (0, f.U3)(),
            V = (0, f.hm)(),
            [M, w] = a.useState(null),
            [$, ue] = a.useState();
          if (
            (a.useEffect(() => {
              const { rgPriceChanges: me, nPackagesImported: Re } = re(
                x,
                j,
                h,
                V,
              );
              w(me), ue(Re);
            }, [x, j, h, V]),
            M === null)
          )
            return (0, r.jsx)(F.t, { position: "center" });
          const pe = M.length > 0,
            Ee = pe
              ? (0, l.we)("#PackageGrid_SaveChangesDialogButton")
              : (0, l.we)("#Button_Close"),
            ke = () => {
              pe && (0, le.pg)((0, r.jsx)(u.Zg, {}), window);
            };
          return (0, r.jsxs)(K.o0, {
            strTitle: (0, l.we)(
              "#PricingDashboard_ImportExport_UploadProgressTitle",
            ),
            strDescription: (0, l.we)(
              "#PricingDashboard_ImportExport_UploadProgressDetails",
              $,
            ),
            bAlertDialog: !pe,
            strOKButtonText: Ee,
            onOK: ke,
            strCancelButtonText: (0, l.we)("#Button_OK"),
            closeModal: P,
            children: [
              (0, r.jsx)("div", {
                className: R().ParseResultCount,
                children: (0, l.we)(
                  "#PricingDashboard_ImportExport_UploadResults",
                  M.length,
                ),
              }),
              pe &&
                (0, l.we)(
                  "#PricingDashboard_ImportExport_UploadNextStepInstructions",
                ),
              !!x.errors?.length &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className: R().ErrorHeader,
                      children: (0, l.we)(
                        "#PricingDashboard_ImportExport_UploadErrorsHeader",
                        x.errors?.length,
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: R().ParseErrors,
                      children: x.errors.map((me, Re) =>
                        (0, r.jsx)(
                          "div",
                          {
                            className: R().Error,
                            children: `${me.row ?? "-"} ${me.message}`,
                          },
                          `${me.message}-${Re}`,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function Te(g) {
          (0, ve.h)((0, f.Zz)());
          const P = (0, I.uw)(),
            b = "https://steamcommunity.com/groups/steamworks/discussions/29/",
            x = Ce.TS.PARTNER_BASE_URL + "doc/store/pricing",
            j = Ce.TS.HELP_BASE_URL + "wizard/HelpWithPublishing?issueid=920",
            h = (0, f.v4)(),
            V = (0, a.useMemo)(
              () => Array.from(new Set(h.map((w) => w.submitterID))),
              [h],
            ),
            M = (0, U.DW)(V);
          return (0, r.jsxs)("div", {
            className: _e().DashboardPage,
            children: [
              (0, r.jsxs)("div", {
                className: _e().DashTitle,
                children: [
                  (0, l.we)("#PricingDashboard_Title"),
                  (0, r.jsx)("div", { className: _e().FeedbackLinkCtn }),
                  (0, r.jsxs)("div", {
                    className: _e().ButtonGroup,
                    children: [
                      (0, r.jsx)(Z.$n, {
                        onClick: (w) =>
                          (0, le.pg)((0, r.jsx)(we, {}), (0, ye.uX)(w)),
                        children: (0, l.we)(
                          "#PricingDashboard_ImportExportButton",
                        ),
                      }),
                      (0, r.jsx)(Z.$n, {
                        onClick: (w) => (0, de.EP)(w, x),
                        children: (0, l.we)(
                          "#PricingDashboard_DocumentationButton",
                        ),
                      }),
                      (0, r.jsx)(Z.$n, {
                        onClick: (w) => (0, de.EP)(w, j),
                        children: (0, l.we)(
                          "#PricingDashboard_ContactUsButton",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              P.length == 0 &&
                (0, r.jsx)("div", {
                  className: _e().ErrorMessage,
                  children: (0, l.we)("#PricingDashboard_Error_NoPackages"),
                }),
              P.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(A, { packageData: P }),
                    (0, r.jsx)(u.BL, { bReloadPageOnSave: !1 }),
                  ],
                }),
            ],
          });
        }
        var Ae = s(61266),
          xe = s(13401);
        const oe = { PricingDashboard: () => "/dashboard/:publisherid(\\d*)" };
        function Se(g) {
          return (0, r.jsx)(Ae.m, {
            children: (0, r.jsx)(xe.jY, {
              children: (0, r.jsx)(N.Kd, {
                basename: (0, ce.C)() + "pricing/",
                children: (0, r.jsxs)(S.dO, {
                  children: [
                    (0, r.jsx)(S.qh, {
                      exact: !0,
                      path: ce.B.DiagData(),
                      render: (P) =>
                        (0, r.jsx)(W.z, {
                          ...P,
                          strConfigID: "application_config",
                        }),
                    }),
                    (0, r.jsx)(S.qh, {
                      path: oe.PricingDashboard(),
                      render: (P) => (0, r.jsx)(Te, {}),
                    }),
                    (0, r.jsx)(S.qh, { component: fe.a }),
                  ],
                }),
              }),
            }),
          });
        }
      },
      61266: (ne, De, s) => {
        "use strict";
        s.d(De, { T: () => f, m: () => I });
        var r = s(90626),
          ce = s(77008),
          fe = s(60298),
          N = s(10142),
          S = s(3166),
          W = s(14616);
        function I(U) {
          const [Z, le] = (0, r.useState)(!1),
            [de] = (0, r.useState)(() => ve()),
            ye = (0, r.useMemo)(
              () => ({
                country: S.TS.COUNTRY,
                language: S.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, r.useEffect)(() => (le(!0), a(de)), [de]),
            Z
              ? (0, r.createElement)(W.V3, {
                  context: ye,
                  serviceTransportOverride: de.GetServiceTransport(),
                  children: U.children,
                })
              : null
          );
        }
        function f(U) {
          const [Z] = (0, r.useState)(() => ve()),
            le = (0, r.useMemo)(
              () => ({
                country: S.TS.COUNTRY,
                language: S.TS.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: U.bIncludeUnpublished,
              }),
              [U.bIncludeUnpublished],
            );
          return (0, r.createElement)(W.V3, {
            context: le,
            serviceTransportOverride: Z.GetServiceTransport(),
            children: U.children,
          });
        }
        function ve() {
          const U = (0, S.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (0, fe.p)(new ce.D(S.TS.WEBAPI_BASE_URL, U));
        }
        function a(U) {
          return N.A.Initialize(
            U.GetServiceTransport(),
            S.iA.is_partner_member,
          );
        }
      },
      22880: (ne, De, s) => {
        "use strict";
        s.d(De, { g: () => fe });
        var r = s(40323),
          ce = s.n(r);
        class fe {
          static ParseCSVFile(S, W) {
            return new Promise((I, f) => {
              const a = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: I,
                error: (U) => f({ errors: [U] }),
                transformHeader: W,
              };
              ce().parse(S, a);
            });
          }
          static ReadFile(S) {
            return new Promise((W, I) => {
              const f = new FileReader();
              (f.onload = () => W(f.result ?? "")), f.readAsText(S);
            });
          }
          static WriteFile(S, W) {
            let I = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(S, W);
            else {
              const f = window.URL.createObjectURL(S);
              I.href = f;
            }
            I.setAttribute("download", W), I.click();
            try {
              document.removeChild(I);
            } catch {}
          }
          static WriteCSVToFile(S, W, I, f) {
            const ve = f
                ? ce().unparse({ fields: f, data: S }, { header: !0 })
                : ce().unparse(S, { header: !0 }),
              a = I == !0 ? ["\uFEFF" + ve] : [ve];
            fe.WriteFile(new Blob(a, { type: "text/csv:charset=utf-8;" }), W);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(S, W) {
            const I = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let f =
              "<" +
              I() +
              'xml version="1.0" encoding="UTF-8" ' +
              I() +
              `>
`;
            (f += new XMLSerializer().serializeToString(S)),
              fe.WriteFile(
                new Blob([f], { type: "application/xml:charset=utf-8;" }),
                W,
              );
          }
        }
      },
      42691: (ne) => {
        ne.exports = {
          DashboardPage: "_353rnPLVzyQBQhakxhkl7u",
          DashTitleBar: "_2m-_VofgoRb-uGQMrewYq3",
          DashTitle: "_1FK58fndqHlADYEX-58V0C",
          ConfidentialBanner: "_2H9KzQ8SQGvqGhbWidWzf4",
          Throbber: "_21EsxksQjCwl-Xz3TNuoPc",
          ErrorMessage: "_190uxu3FVS6Fx-IbDsfCyd",
          ButtonGroup: "_2peTiEFo27_zkZA0TzjnD4",
        };
      },
      40441: (ne) => {
        ne.exports = {
          EventDetails: "_3LMXjfy-EuA2ZWoW660vuc",
          Active: "_2BLece8YI3va6GD9JEUxjL",
          RestrictedEligibility: "_2lxTisamKtJUowDlNKSrzG",
          CollisionFreeDiscountEvent: "_15fBcZwmM-nap1QbkpRc2G",
          EventName: "_2bJFFj7RfHL_P4P-MJlzK4",
          EditEventLink: "_1XHd3t0XU1SfpsraST5Ovy",
          EventDates: "_2kY09NU8R-tjOVYmIwZ98B",
          EventDateRange: "_312igBJXB0MifodN4IBq1i",
          EventNumDays: "OAAVWKvssJLy0QM6mVcw6",
          EventLink: "VZ3pVxXbvFNzdGOkOrNGU",
          EventParticipationCtn: "_2iuUu1K5b1e71DnJKkBtHH",
          ParticipationDetails: "_2tr5XTQIvHNQiu4IZKMi7Z",
          Title: "_3mO71T0Q_migmtLfYRFb-6",
          Count: "_1pDZ1lHiN5RohGZxcDAyCK",
          Selected: "_36G76FOe3fZ8csab26PcL8",
          ParticipationToolTip: "_36hxaHrRvc7ct9bb0Aeza3",
          AppLink: "_3RF-6YnSS_2OpJmOo0BV6_",
          BasePrice: "_1a_LwvXaB11PNusz9GPz98",
          RelatedDiscount: "_12zwKFzckK0AkG-lS95iTK",
          DiscountGridDataColumn: "_1yW70vcAdwnrMIrVE8y03S",
          GridRowLoadingThrobber: "r2FLR3ukmK3cVbBV-j8Aa",
          CurrencyPicker: "_2Z65Kc_3FxlP0E15rMFuVC",
          RelatedInfoPicker: "O-95g3EzyTgFwNJ8ATC-e",
          RelatedInfoPickerCtn: "_2nnB1eMYflFLLmMAi7_jJV",
          CurrencyDropDown: "_2gGuz_TA8axLQOqAtwurFU",
          RelatedInfoDropDown: "_1jj2uEuCns_K_cIfGZcKl6",
          CurrencyDropDownItem: "_3wPHxQWhohHATqjvN6B2l3",
          RelatedInfoDropDownItem: "_1ORamDcYtEN8wS1voTsWE",
        };
      },
      22886: (ne) => {
        ne.exports = {
          PricingGridCtn: "_2j-z9aXG_KoPSY-SYZ0fkF",
          PricingGridWrapper: "_185dckQ4O6j7fFSauUkttX",
          PricingGrid: "fKA16ZB7sn97FP66zTggw",
          PricingGridDataColumn: "OVDCtDCCkCZr1my3nFNXX",
          GridHeaderButtons: "_1Z7LLb7cP6pLH8XwOgDkP",
          OptionCtn: "_1PrsCGcbjJ61fDm8stNJd2",
          PriceLowOption: "_39j_Zq7q7VRXEb-7tZMUSx",
          CurrencyHeader: "_1kvIFs23dRUETqkaH0d_RW",
          CurrencyNameCtn: "_1eoBYSPbVZ6MoUNDkL_xbp",
          CurrencyName: "_3ffEWbT5mrSdmmCBQsjpmC",
          CurrencyMore: "MltPJcBZanYmXvQaiTTTg",
          PricingGridTable: "_2xa-P-_4oTPXUvGstrnphV",
          HoverToolTip: "_1OS2vdfTf7vsWj8VhNKlXu",
        };
      },
      57581: (ne) => {
        ne.exports = {
          Instructions: "_2A9meAsgvbqtRE-WwcWklJ",
          ButtonRows: "_3BpoblG0qqkekq9SESFn1s",
          Button: "_3u7Vn4B-hH3ntVFvWBlMWP",
          ImportButtonLabel: "_3OJwY0KsAdtSzzFuOdWl8l",
          OptionCtn: "_3zj1IiybB-MxMlHawZLJeQ",
          OptionDesc: "_2QfyWyy2Z0gPCqVTApBKNV",
          ParseResultCount: "_1P_KJVQc3vmgxCssmhFas0",
          ErrorHeader: "_289pBSstep6RsTe3aedebA",
          ParseErrors: "_1VTD4841BG3WozX_i1yNEd",
        };
      },
      64641: (ne) => {
        ne.exports = {
          v6: "_2LxgdMcpWJRjkxZKbmeEEb",
          SubText: "vg0EOhKTLB3tLvshHMr7l",
          AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
          GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
          AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
          STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
          ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
          EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
          Small: "_3M4j828iWSVEZZAkypcBi1",
          FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
          ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
          MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
          SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
          RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
        };
      },
      40323: function (ne, De) {
        var s, r, ce; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((fe, N) => {
          (r = []),
            (s = N),
            (ce = typeof s == "function" ? s.apply(De, r) : s),
            ce !== void 0 && (ne.exports = ce);
        })(this, function fe() {
          var N =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : N !== void 0
                    ? N
                    : {},
            S,
            W = !N.document && !!N.postMessage,
            I = N.IS_PAPA_WORKER || !1,
            f = {},
            ve = 0,
            a = {};
          function U(t) {
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
              function (e) {
                var n = Pe(e);
                (n.chunkSize = parseInt(n.chunkSize)),
                  e.step || e.chunk || (n.chunkSize = null),
                  (this._handle = new l(n)),
                  ((this._handle.streamer = this)._config = n);
              }.call(this, t),
              (this.parseChunk = function (e, n) {
                var o = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < o) {
                  let u = this._config.newline;
                  u ||
                    ((i = this._config.quoteChar || '"'),
                    (u = this._handle.guessLineEndings(e, i))),
                    (e = [...e.split(u).slice(o)].join(u));
                }
                this.isFirstChunk &&
                  T(this._config.beforeFirstChunk) &&
                  (i = this._config.beforeFirstChunk(e)) !== void 0 &&
                  (e = i),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var o = this._partialLine + e,
                  i =
                    ((this._partialLine = ""),
                    this._handle.parse(o, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = i.meta.cursor),
                    (o =
                      (this._finished ||
                        ((this._partialLine = o.substring(e - this._baseIndex)),
                        (this._baseIndex = e)),
                      i && i.data && (this._rowCount += i.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    I)
                  )
                    N.postMessage({
                      results: i,
                      workerId: a.WORKER_ID,
                      finished: o,
                    });
                  else if (T(this._config.chunk) && !n) {
                    if (
                      (this._config.chunk(i, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = i = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(i.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(i.errors)),
                      (this._completeResults.meta = i.meta)),
                    this._completed ||
                      !o ||
                      !T(this._config.complete) ||
                      (i && i.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    o || (i && i.meta.paused) || this._nextChunk(),
                    i
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                T(this._config.error)
                  ? this._config.error(e)
                  : I &&
                    this._config.error &&
                    N.postMessage({
                      workerId: a.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function Z(t) {
            var e;
            (t = t || {}).chunkSize || (t.chunkSize = a.RemoteChunkSize),
              U.call(this, t),
              (this._nextChunk = W
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (n) {
                (this._input = n), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((e = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (e.withCredentials = this._config.withCredentials),
                    W ||
                      ((e.onload = te(this._chunkLoaded, this)),
                      (e.onerror = te(this._chunkError, this))),
                    e.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !W,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var n,
                      o = this._config.downloadRequestHeaders;
                    for (n in o) e.setRequestHeader(n, o[n]);
                  }
                  var i;
                  this._config.chunkSize &&
                    ((i = this._start + this._config.chunkSize - 1),
                    e.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + i,
                    ));
                  try {
                    e.send(this._config.downloadRequestBody);
                  } catch (u) {
                    this._chunkError(u.message);
                  }
                  W && e.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                e.readyState === 4 &&
                  (e.status < 200 || 400 <= e.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || e.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((n) =>
                            (n = n.getResponseHeader("Content-Range")) !== null
                              ? parseInt(n.substring(n.lastIndexOf("/") + 1))
                              : -1)(e)),
                      this.parseChunk(e.responseText)));
              }),
              (this._chunkError = function (n) {
                (n = e.statusText || n), this._sendError(new Error(n));
              });
          }
          function le(t) {
            (t = t || {}).chunkSize || (t.chunkSize = a.LocalChunkSize),
              U.call(this, t);
            var e,
              n,
              o = typeof FileReader < "u";
            (this.stream = function (i) {
              (this._input = i),
                (n = i.slice || i.webkitSlice || i.mozSlice),
                o
                  ? (((e = new FileReader()).onload = te(
                      this._chunkLoaded,
                      this,
                    )),
                    (e.onerror = te(this._chunkError, this)))
                  : (e = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var i = this._input,
                  u =
                    (this._config.chunkSize &&
                      ((u = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (i = n.call(i, this._start, u))),
                    e.readAsText(i, this._config.encoding));
                o || this._chunkLoaded({ target: { result: u } });
              }),
              (this._chunkLoaded = function (i) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(i.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(e.error);
              });
          }
          function de(t) {
            var e;
            U.call(this, (t = t || {})),
              (this.stream = function (n) {
                return (e = n), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var n, o;
                if (!this._finished)
                  return (
                    (n = this._config.chunkSize),
                    (e = n
                      ? ((o = e.substring(0, n)), e.substring(n))
                      : ((o = e), "")),
                    (this._finished = !e),
                    this.parseChunk(o)
                  );
              });
          }
          function ye(t) {
            U.call(this, (t = t || {}));
            var e = [],
              n = !0,
              o = !1;
            (this.pause = function () {
              U.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                U.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (i) {
                (this._input = i),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                o && e.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  e.length ? this.parseChunk(e.shift()) : (n = !0);
              }),
              (this._streamData = te(function (i) {
                try {
                  e.push(
                    typeof i == "string"
                      ? i
                      : i.toString(this._config.encoding),
                  ),
                    n &&
                      ((n = !1),
                      this._checkIsFinished(),
                      this.parseChunk(e.shift()));
                } catch (u) {
                  this._streamError(u);
                }
              }, this)),
              (this._streamError = te(function (i) {
                this._streamCleanUp(), this._sendError(i);
              }, this)),
              (this._streamEnd = te(function () {
                this._streamCleanUp(), (o = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = te(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function l(t) {
            var e,
              n,
              o,
              i,
              u = Math.pow(2, 53),
              H = -u,
              se = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              ie =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              y = this,
              B = 0,
              d = 0,
              ee = !1,
              p = !1,
              C = [],
              c = { data: [], errors: [], meta: {} };
            function K(D) {
              return t.skipEmptyLines === "greedy"
                ? D.join("").trim() === ""
                : D.length === 1 && D[0].length === 0;
            }
            function G() {
              if (
                (c &&
                  o &&
                  (ae(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      a.DefaultDelimiter +
                      "'",
                  ),
                  (o = !1)),
                t.skipEmptyLines &&
                  (c.data = c.data.filter(function (O) {
                    return !K(O);
                  })),
                J())
              ) {
                let O = function (Y, A) {
                  T(t.transformHeader) && (Y = t.transformHeader(Y, A)),
                    C.push(Y);
                };
                var m = O;
                if (c)
                  if (Array.isArray(c.data[0])) {
                    for (var D = 0; J() && D < c.data.length; D++)
                      c.data[D].forEach(O);
                    c.data.splice(0, 1);
                  } else c.data.forEach(O);
              }
              function E(O, Y) {
                for (var A = t.header ? {} : [], k = 0; k < O.length; k++) {
                  var v = k,
                    q = O[k],
                    q = ((_, F) =>
                      ((z) => (
                        t.dynamicTypingFunction &&
                          t.dynamicTyping[z] === void 0 &&
                          (t.dynamicTyping[z] = t.dynamicTypingFunction(z)),
                        (t.dynamicTyping[z] || t.dynamicTyping) === !0
                      ))(_)
                        ? F === "true" ||
                          F === "TRUE" ||
                          (F !== "false" &&
                            F !== "FALSE" &&
                            (((z) => {
                              if (
                                se.test(z) &&
                                ((z = parseFloat(z)), H < z && z < u)
                              )
                                return 1;
                            })(F)
                              ? parseFloat(F)
                              : ie.test(F)
                                ? new Date(F)
                                : F === ""
                                  ? null
                                  : F))
                        : F)(
                      (v = t.header
                        ? k >= C.length
                          ? "__parsed_extra"
                          : C[k]
                        : v),
                      (q = t.transform ? t.transform(q, v) : q),
                    );
                  v === "__parsed_extra"
                    ? ((A[v] = A[v] || []), A[v].push(q))
                    : (A[v] = q);
                }
                return (
                  t.header &&
                    (k > C.length
                      ? ae(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            C.length +
                            " fields but parsed " +
                            k,
                          d + Y,
                        )
                      : k < C.length &&
                        ae(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            C.length +
                            " fields but parsed " +
                            k,
                          d + Y,
                        )),
                  A
                );
              }
              var L;
              c &&
                (t.header || t.dynamicTyping || t.transform) &&
                ((L = 1),
                !c.data.length || Array.isArray(c.data[0])
                  ? ((c.data = c.data.map(E)), (L = c.data.length))
                  : (c.data = E(c.data, 0)),
                t.header && c.meta && (c.meta.fields = C),
                (d += L));
            }
            function J() {
              return t.header && C.length === 0;
            }
            function ae(D, E, L, m) {
              (D = { type: D, code: E, message: L }),
                m !== void 0 && (D.row = m),
                c.errors.push(D);
            }
            T(t.step) &&
              ((i = t.step),
              (t.step = function (D) {
                (c = D),
                  J()
                    ? G()
                    : (G(),
                      c.data.length !== 0 &&
                        ((B += D.data.length),
                        t.preview && B > t.preview
                          ? n.abort()
                          : ((c.data = c.data[0]), i(c, y))));
              })),
              (this.parse = function (D, E, L) {
                var m = t.quoteChar || '"',
                  m =
                    (t.newline || (t.newline = this.guessLineEndings(D, m)),
                    (o = !1),
                    t.delimiter
                      ? T(t.delimiter) &&
                        ((t.delimiter = t.delimiter(D)),
                        (c.meta.delimiter = t.delimiter))
                      : ((m = ((O, Y, A, k, v) => {
                          var q, _, F, z;
                          v = v || [
                            ",",
                            "	",
                            "|",
                            ";",
                            a.RECORD_SEP,
                            a.UNIT_SEP,
                          ];
                          for (var be = 0; be < v.length; be++) {
                            for (
                              var R,
                                we = v[be],
                                X = 0,
                                he = 0,
                                Q = 0,
                                re =
                                  ((F = void 0),
                                  new Ie({
                                    comments: k,
                                    delimiter: we,
                                    newline: Y,
                                    preview: 10,
                                  }).parse(O)),
                                ge = 0;
                              ge < re.data.length;
                              ge++
                            )
                              A && K(re.data[ge])
                                ? Q++
                                : ((R = re.data[ge].length),
                                  (he += R),
                                  F === void 0
                                    ? (F = R)
                                    : 0 < R &&
                                      ((X += Math.abs(R - F)), (F = R)));
                            0 < re.data.length && (he /= re.data.length - Q),
                              (_ === void 0 || X <= _) &&
                                (z === void 0 || z < he) &&
                                1.99 < he &&
                                ((_ = X), (q = we), (z = he));
                          }
                          return {
                            successful: !!(t.delimiter = q),
                            bestDelimiter: q,
                          };
                        })(
                          D,
                          t.newline,
                          t.skipEmptyLines,
                          t.comments,
                          t.delimitersToGuess,
                        )).successful
                          ? (t.delimiter = m.bestDelimiter)
                          : ((o = !0), (t.delimiter = a.DefaultDelimiter)),
                        (c.meta.delimiter = t.delimiter)),
                    Pe(t));
                return (
                  t.preview && t.header && m.preview++,
                  (e = D),
                  (n = new Ie(m)),
                  (c = n.parse(e, E, L)),
                  G(),
                  ee ? { meta: { paused: !0 } } : c || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return ee;
              }),
              (this.pause = function () {
                (ee = !0),
                  n.abort(),
                  (e = T(t.chunk) ? "" : e.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                y.streamer._halted
                  ? ((ee = !1), y.streamer.parseChunk(e, !0))
                  : setTimeout(y.resume, 3);
              }),
              (this.aborted = function () {
                return p;
              }),
              (this.abort = function () {
                (p = !0),
                  n.abort(),
                  (c.meta.aborted = !0),
                  T(t.complete) && t.complete(c),
                  (e = "");
              }),
              (this.guessLineEndings = function (O, m) {
                O = O.substring(0, 1048576);
                var m = new RegExp(Ce(m) + "([^]*?)" + Ce(m), "gm"),
                  L = (O = O.replace(m, "")).split("\r"),
                  m = O.split(`
`),
                  O = 1 < m.length && m[0].length < L[0].length;
                if (L.length === 1 || O)
                  return `
`;
                for (var Y = 0, A = 0; A < L.length; A++)
                  L[A][0] ===
                    `
` && Y++;
                return Y >= L.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function Ce(t) {
            return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function Ie(t) {
            var e = (t = t || {}).delimiter,
              n = t.newline,
              o = t.comments,
              i = t.step,
              u = t.preview,
              H = t.fastMode,
              se = null,
              ie = !1,
              y = t.quoteChar == null ? '"' : t.quoteChar,
              B = y;
            if (
              (t.escapeChar !== void 0 && (B = t.escapeChar),
              (typeof e != "string" || -1 < a.BAD_DELIMITERS.indexOf(e)) &&
                (e = ","),
              o === e)
            )
              throw new Error("Comment character same as delimiter");
            o === !0
              ? (o = "#")
              : (typeof o != "string" || -1 < a.BAD_DELIMITERS.indexOf(o)) &&
                (o = !1),
              n !==
                `
` &&
                n !== "\r" &&
                n !==
                  `\r
` &&
                (n = `
`);
            var d = 0,
              ee = !1;
            (this.parse = function (p, C, c) {
              if (typeof p != "string")
                throw new Error("Input must be a string");
              var K = p.length,
                G = e.length,
                J = n.length,
                ae = o.length,
                D = T(i),
                E = [],
                L = [],
                m = [],
                O = (d = 0);
              if (!p) return X();
              if (H || (H !== !1 && p.indexOf(y) === -1)) {
                for (var Y = p.split(n), A = 0; A < Y.length; A++) {
                  if (((m = Y[A]), (d += m.length), A !== Y.length - 1))
                    d += n.length;
                  else if (c) return X();
                  if (!o || m.substring(0, ae) !== o) {
                    if (D) {
                      if (((E = []), z(m.split(e)), he(), ee)) return X();
                    } else z(m.split(e));
                    if (u && u <= A) return (E = E.slice(0, u)), X(!0);
                  }
                }
                return X();
              }
              for (
                var k = p.indexOf(e, d),
                  v = p.indexOf(n, d),
                  q = new RegExp(Ce(B) + Ce(y), "g"),
                  _ = p.indexOf(y, d);
                ;
              )
                if (p[d] === y)
                  for (_ = d, d++; ; ) {
                    if ((_ = p.indexOf(y, _ + 1)) === -1)
                      return (
                        c ||
                          L.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: E.length,
                            index: d,
                          }),
                        R()
                      );
                    if (_ === K - 1) return R(p.substring(d, _).replace(q, y));
                    if (y === B && p[_ + 1] === B) _++;
                    else if (y === B || _ === 0 || p[_ - 1] !== B) {
                      k !== -1 && k < _ + 1 && (k = p.indexOf(e, _ + 1));
                      var F = be(
                        (v =
                          v !== -1 && v < _ + 1 ? p.indexOf(n, _ + 1) : v) ===
                          -1
                          ? k
                          : Math.min(k, v),
                      );
                      if (p.substr(_ + 1 + F, G) === e) {
                        m.push(p.substring(d, _).replace(q, y)),
                          p[(d = _ + 1 + F + G)] !== y && (_ = p.indexOf(y, d)),
                          (k = p.indexOf(e, d)),
                          (v = p.indexOf(n, d));
                        break;
                      }
                      if (
                        ((F = be(v)),
                        p.substring(_ + 1 + F, _ + 1 + F + J) === n)
                      ) {
                        if (
                          (m.push(p.substring(d, _).replace(q, y)),
                          we(_ + 1 + F + J),
                          (k = p.indexOf(e, d)),
                          (_ = p.indexOf(y, d)),
                          D && (he(), ee))
                        )
                          return X();
                        if (u && E.length >= u) return X(!0);
                        break;
                      }
                      L.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: E.length,
                        index: d,
                      }),
                        _++;
                    }
                  }
                else if (o && m.length === 0 && p.substring(d, d + ae) === o) {
                  if (v === -1) return X();
                  (d = v + J), (v = p.indexOf(n, d)), (k = p.indexOf(e, d));
                } else if (k !== -1 && (k < v || v === -1))
                  m.push(p.substring(d, k)), (d = k + G), (k = p.indexOf(e, d));
                else {
                  if (v === -1) break;
                  if ((m.push(p.substring(d, v)), we(v + J), D && (he(), ee)))
                    return X();
                  if (u && E.length >= u) return X(!0);
                }
              return R();
              function z(Q) {
                E.push(Q), (O = d);
              }
              function be(Q) {
                var re = 0;
                return (re =
                  Q !== -1 && (Q = p.substring(_ + 1, Q)) && Q.trim() === ""
                    ? Q.length
                    : re);
              }
              function R(Q) {
                return (
                  c ||
                    (Q === void 0 && (Q = p.substring(d)),
                    m.push(Q),
                    (d = K),
                    z(m),
                    D && he()),
                  X()
                );
              }
              function we(Q) {
                (d = Q), z(m), (m = []), (v = p.indexOf(n, d));
              }
              function X(Q) {
                if (t.header && !C && E.length && !ie) {
                  var re = E[0],
                    ge = Object.create(null),
                    Te = new Set(re);
                  let Ae = !1;
                  for (let xe = 0; xe < re.length; xe++) {
                    let oe = re[xe];
                    if (
                      ge[
                        (oe = T(t.transformHeader)
                          ? t.transformHeader(oe, xe)
                          : oe)
                      ]
                    ) {
                      let Se,
                        g = ge[oe];
                      for (; (Se = oe + "_" + g), g++, Te.has(Se); );
                      Te.add(Se),
                        (re[xe] = Se),
                        ge[oe]++,
                        (Ae = !0),
                        ((se = se === null ? {} : se)[Se] = oe);
                    } else (ge[oe] = 1), (re[xe] = oe);
                    Te.add(oe);
                  }
                  Ae && console.warn("Duplicate headers found and renamed."),
                    (ie = !0);
                }
                return {
                  data: E,
                  errors: L,
                  meta: {
                    delimiter: e,
                    linebreak: n,
                    aborted: ee,
                    truncated: !!Q,
                    cursor: O + (C || 0),
                    renamedHeaders: se,
                  },
                };
              }
              function he() {
                i(X()), (E = []), (L = []);
              }
            }),
              (this.abort = function () {
                ee = !0;
              }),
              (this.getCharIndex = function () {
                return d;
              });
          }
          function _e(t) {
            var e = t.data,
              n = f[e.workerId],
              o = !1;
            if (e.error) n.userError(e.error, e.file);
            else if (e.results && e.results.data) {
              var i = {
                abort: function () {
                  (o = !0),
                    je(e.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: Oe,
                resume: Oe,
              };
              if (T(n.userStep)) {
                for (
                  var u = 0;
                  u < e.results.data.length &&
                  (n.userStep(
                    {
                      data: e.results.data[u],
                      errors: e.results.errors,
                      meta: e.results.meta,
                    },
                    i,
                  ),
                  !o);
                  u++
                );
                delete e.results;
              } else
                T(n.userChunk) &&
                  (n.userChunk(e.results, i, e.file), delete e.results);
            }
            e.finished && !o && je(e.workerId, e.results);
          }
          function je(t, e) {
            var n = f[t];
            T(n.userComplete) && n.userComplete(e), n.terminate(), delete f[t];
          }
          function Oe() {
            throw new Error("Not implemented.");
          }
          function Pe(t) {
            if (typeof t != "object" || t === null) return t;
            var e,
              n = Array.isArray(t) ? [] : {};
            for (e in t) n[e] = Pe(t[e]);
            return n;
          }
          function te(t, e) {
            return function () {
              t.apply(e, arguments);
            };
          }
          function T(t) {
            return typeof t == "function";
          }
          return (
            (a.parse = function (t, e) {
              var n = (e = e || {}).dynamicTyping || !1;
              if (
                (T(n) && ((e.dynamicTypingFunction = n), (n = {})),
                (e.dynamicTyping = n),
                (e.transform = !!T(e.transform) && e.transform),
                !e.worker || !a.WORKERS_SUPPORTED)
              )
                return (
                  (n = null),
                  a.NODE_STREAM_INPUT,
                  typeof t == "string"
                    ? ((t = ((o) =>
                        o.charCodeAt(0) !== 65279 ? o : o.slice(1))(t)),
                      (n = new (e.download ? Z : de)(e)))
                    : t.readable === !0 && T(t.read) && T(t.on)
                      ? (n = new ye(e))
                      : ((N.File && t instanceof File) ||
                          t instanceof Object) &&
                        (n = new le(e)),
                  n.stream(t)
                );
              ((n = (() => {
                var o;
                return (
                  !!a.WORKERS_SUPPORTED &&
                  ((o = (() => {
                    var i = N.URL || N.webkitURL || null,
                      u = fe.toString();
                    return (
                      a.BLOB_URL ||
                      (a.BLOB_URL = i.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            u,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((o = new N.Worker(o)).onmessage = _e),
                  (o.id = ve++),
                  (f[o.id] = o))
                );
              })()).userStep = e.step),
                (n.userChunk = e.chunk),
                (n.userComplete = e.complete),
                (n.userError = e.error),
                (e.step = T(e.step)),
                (e.chunk = T(e.chunk)),
                (e.complete = T(e.complete)),
                (e.error = T(e.error)),
                delete e.worker,
                n.postMessage({ input: t, config: e, workerId: n.id });
            }),
            (a.unparse = function (t, e) {
              var n = !1,
                o = !0,
                i = ",",
                u = `\r
`,
                H = '"',
                se = H + H,
                ie = !1,
                y = null,
                B = !1,
                d =
                  ((() => {
                    if (typeof e == "object") {
                      if (
                        (typeof e.delimiter != "string" ||
                          a.BAD_DELIMITERS.filter(function (C) {
                            return e.delimiter.indexOf(C) !== -1;
                          }).length ||
                          (i = e.delimiter),
                        (typeof e.quotes != "boolean" &&
                          typeof e.quotes != "function" &&
                          !Array.isArray(e.quotes)) ||
                          (n = e.quotes),
                        (typeof e.skipEmptyLines != "boolean" &&
                          typeof e.skipEmptyLines != "string") ||
                          (ie = e.skipEmptyLines),
                        typeof e.newline == "string" && (u = e.newline),
                        typeof e.quoteChar == "string" && (H = e.quoteChar),
                        typeof e.header == "boolean" && (o = e.header),
                        Array.isArray(e.columns))
                      ) {
                        if (e.columns.length === 0)
                          throw new Error("Option columns is empty");
                        y = e.columns;
                      }
                      e.escapeChar !== void 0 && (se = e.escapeChar + H),
                        e.escapeFormulae instanceof RegExp
                          ? (B = e.escapeFormulae)
                          : typeof e.escapeFormulae == "boolean" &&
                            e.escapeFormulae &&
                            (B = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(Ce(H), "g"));
              if (
                (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t))
              ) {
                if (!t.length || Array.isArray(t[0])) return ee(null, t, ie);
                if (typeof t[0] == "object")
                  return ee(y || Object.keys(t[0]), t, ie);
              } else if (typeof t == "object")
                return (
                  typeof t.data == "string" && (t.data = JSON.parse(t.data)),
                  Array.isArray(t.data) &&
                    (t.fields || (t.fields = (t.meta && t.meta.fields) || y),
                    t.fields ||
                      (t.fields = Array.isArray(t.data[0])
                        ? t.fields
                        : typeof t.data[0] == "object"
                          ? Object.keys(t.data[0])
                          : []),
                    Array.isArray(t.data[0]) ||
                      typeof t.data[0] == "object" ||
                      (t.data = [t.data])),
                  ee(t.fields || [], t.data || [], ie)
                );
              throw new Error("Unable to serialize unrecognized input");
              function ee(C, c, K) {
                var G = "",
                  J =
                    (typeof C == "string" && (C = JSON.parse(C)),
                    typeof c == "string" && (c = JSON.parse(c)),
                    Array.isArray(C) && 0 < C.length),
                  ae = !Array.isArray(c[0]);
                if (J && o) {
                  for (var D = 0; D < C.length; D++)
                    0 < D && (G += i), (G += p(C[D], D));
                  0 < c.length && (G += u);
                }
                for (var E = 0; E < c.length; E++) {
                  var L = (J ? C : c[E]).length,
                    m = !1,
                    O = J ? Object.keys(c[E]).length === 0 : c[E].length === 0;
                  if (
                    (K &&
                      !J &&
                      (m =
                        K === "greedy"
                          ? c[E].join("").trim() === ""
                          : c[E].length === 1 && c[E][0].length === 0),
                    K === "greedy" && J)
                  ) {
                    for (var Y = [], A = 0; A < L; A++) {
                      var k = ae ? C[A] : A;
                      Y.push(c[E][k]);
                    }
                    m = Y.join("").trim() === "";
                  }
                  if (!m) {
                    for (var v = 0; v < L; v++) {
                      0 < v && !O && (G += i);
                      var q = J && ae ? C[v] : v;
                      G += p(c[E][q], v);
                    }
                    E < c.length - 1 && (!K || (0 < L && !O)) && (G += u);
                  }
                }
                return G;
              }
              function p(C, c) {
                var K, G;
                return C == null
                  ? ""
                  : C.constructor === Date
                    ? JSON.stringify(C).slice(1, 25)
                    : ((G = !1),
                      B &&
                        typeof C == "string" &&
                        B.test(C) &&
                        ((C = "'" + C), (G = !0)),
                      (K = C.toString().replace(d, se)),
                      (G =
                        G ||
                        n === !0 ||
                        (typeof n == "function" && n(C, c)) ||
                        (Array.isArray(n) && n[c]) ||
                        ((J, ae) => {
                          for (var D = 0; D < ae.length; D++)
                            if (-1 < J.indexOf(ae[D])) return !0;
                          return !1;
                        })(K, a.BAD_DELIMITERS) ||
                        -1 < K.indexOf(i) ||
                        K.charAt(0) === " " ||
                        K.charAt(K.length - 1) === " ")
                        ? H + K + H
                        : K);
              }
            }),
            (a.RECORD_SEP = ""),
            (a.UNIT_SEP = ""),
            (a.BYTE_ORDER_MARK = "\uFEFF"),
            (a.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              a.BYTE_ORDER_MARK,
            ]),
            (a.WORKERS_SUPPORTED = !W && !!N.Worker),
            (a.NODE_STREAM_INPUT = 1),
            (a.LocalChunkSize = 10485760),
            (a.RemoteChunkSize = 5242880),
            (a.DefaultDelimiter = ","),
            (a.Parser = Ie),
            (a.ParserHandle = l),
            (a.NetworkStreamer = Z),
            (a.FileStreamer = le),
            (a.StringStreamer = de),
            (a.ReadableStreamStreamer = ye),
            N.jQuery &&
              ((S = N.jQuery).fn.parse = function (t) {
                var e = t.config || {},
                  n = [];
                return (
                  this.each(function (u) {
                    if (
                      !(
                        S(this).prop("tagName").toUpperCase() === "INPUT" &&
                        S(this).attr("type").toLowerCase() === "file" &&
                        N.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var H = 0; H < this.files.length; H++)
                      n.push({
                        file: this.files[H],
                        inputElem: this,
                        instanceConfig: S.extend({}, e),
                      });
                  }),
                  o(),
                  this
                );
                function o() {
                  if (n.length === 0) T(t.complete) && t.complete();
                  else {
                    var u,
                      H,
                      se,
                      ie,
                      y = n[0];
                    if (T(t.before)) {
                      var B = t.before(y.file, y.inputElem);
                      if (typeof B == "object") {
                        if (B.action === "abort")
                          return (
                            (u = "AbortError"),
                            (H = y.file),
                            (se = y.inputElem),
                            (ie = B.reason),
                            void (T(t.error) && t.error({ name: u }, H, se, ie))
                          );
                        if (B.action === "skip") return void i();
                        typeof B.config == "object" &&
                          (y.instanceConfig = S.extend(
                            y.instanceConfig,
                            B.config,
                          ));
                      } else if (B === "skip") return void i();
                    }
                    var d = y.instanceConfig.complete;
                    (y.instanceConfig.complete = function (ee) {
                      T(d) && d(ee, y.file, y.inputElem), i();
                    }),
                      a.parse(y.file, y.instanceConfig);
                  }
                }
                function i() {
                  n.splice(0, 1), o();
                }
              }),
            I &&
              (N.onmessage = function (t) {
                (t = t.data),
                  a.WORKER_ID === void 0 && t && (a.WORKER_ID = t.workerId),
                  typeof t.input == "string"
                    ? N.postMessage({
                        workerId: a.WORKER_ID,
                        results: a.parse(t.input, t.config),
                        finished: !0,
                      })
                    : ((N.File && t.input instanceof File) ||
                        t.input instanceof Object) &&
                      (t = a.parse(t.input, t.config)) &&
                      N.postMessage({
                        workerId: a.WORKER_ID,
                        results: t,
                        finished: !0,
                      });
              }),
            ((Z.prototype = Object.create(U.prototype)).constructor = Z),
            ((le.prototype = Object.create(U.prototype)).constructor = le),
            ((de.prototype = Object.create(de.prototype)).constructor = de),
            ((ye.prototype = Object.create(U.prototype)).constructor = ye),
            a
          );
        });
      },
    },
  ]);
})();
