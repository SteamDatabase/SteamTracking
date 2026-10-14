(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [31101],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            PricingRoutes: () => _,
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              bCompactMode: _,
              setCompactMode: _,
              rgGridData: _,
              strPackageFilter: _,
              setPackageFilter: _,
              bFilterToBelowMinPrice: _,
              setFilterToBelowMinPrice: _,
            } = _,
            _ = (0, _.useMemo)(
              () => _.filter((_) => (0, _._)(_.packageID)).length,
              [_],
            );
          let _ = _.useCallback(
            (_) => {
              _(_.data);
            },
            [_],
          );
          const _ = _.useMemo(
              () => [
                {
                  label: (0, _._)("#PricingDashboard_ShowOnlyReleasedPackages"),
                  data: "released",
                },
                {
                  label: (0, _._)("#PricingDashboard_ShowAllPackages"),
                  data: "all",
                },
                {
                  label: (0, _._)(
                    "#PricingDashboard_ShowOnlyUnreleasedPackages",
                  ),
                  data: "unreleased",
                },
                {
                  label: (0, _._)("#PricingDashboard_ShowOnlyChangedPackages"),
                  data: "changed",
                },
                {
                  label: (0, _._)("#PricingDashboard_ShowSubmittedChanges"),
                  data: "proposed",
                },
              ],
              [],
            ),
            [_, _, _] = (0, _._)();
          return (0, _.jsxs)("div", {
            className: _().GridHeaderButtons,
            children: [
              (0, _.jsx)(_._, {
                rgOptions: _,
                selectedOption: _,
                strDropDownClassName: _().Test,
                onChange: _,
                contextMenuPositionOptions: {
                  bMatchWidth: !1,
                },
              }),
              !!(_ || _) &&
                (0, _.jsx)("div", {
                  className: (0, _._)(_().OptionCtn, _().PriceLowOption),
                  children: (0, _.jsx)(_._, {
                    checked: _,
                    onChange: _,
                    label: (0, _._)("#PricingDashboard_FilterToLowPrice", _),
                  }),
                }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().OptionCtn, _().CompactOption),
                children: (0, _.jsx)(_._, {
                  checked: _,
                  onChange: _,
                  label: (0, _._)(
                    "#PricingDashboard_ShowCompactModeCheckBoxLabel",
                  ),
                }),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().OptionCtn),
                children: (0, _.jsx)(_._, {}),
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().OptionCtn),
                children: [
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: (0, _._)(
                      "#PricingDashboard_ApplyGuidelinesDialog_Button",
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    active: _,
                    children: (0, _.jsx)(_._, {
                      closeModal: _,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return _.contains_game && _.contains_dlc
            ? "BOTH"
            : _.contains_game
              ? "GAME"
              : _.contains_dlc
                ? "DLC"
                : null;
        }
        function _(_, _, _) {
          const { rgSupportedPriceKeys: _ } = (0, _._)();
          return _.useMemo(() => {
            const _ = [];
            for (const _ of _) {
              const _ = /^-?[0-9]+$/.test(_.strSearchStringFromURL)
                ? parseInt(_.strSearchStringFromURL)
                : 0;
              if (_.packageid !== _) {
                if (_ == "changed") {
                  if (!(0, _._)(_.packageid)) continue;
                } else if (_ == "proposed") {
                  if (!(0, _._)(_.packageid)) continue;
                } else if (_ == "released") {
                  if (!_.released) continue;
                } else if (_ == "unreleased" && _.released) continue;
                if (_?.bFilterToOnlyBelowMinimumPrice && !(0, _._)(_.packageid))
                  continue;
              }
              let _ = _.grouped_app_name;
              _ ||
                (_.appids.length > 1
                  ? (_ = (0, _._)(
                      "#PackageGrid_MultipleBaseGamesFoundForPackage",
                    ))
                  : (_ = (0, _._)("#PackageGrid_NoBaseGameFoundForPackage")));
              const _ = {
                appids: _.appids.sort(),
                appName: _,
                packageID: _.packageid,
                packageName: _.package_name || "",
                packageType: _(_),
                released: _.released,
              };
              for (const _ of _) _[_] = _;
              _.push(_);
            }
            return _;
          }, [_, _, _, _]);
        }
        function _(_) {
          const { column: _ } = _,
            _ = _._,
            _ = (0, _._)(_),
            _ = (0, _._)(_);
          let _ = () =>
            (0, _.jsx)(_, {
              priceKey: _,
            });
          return (0, _.jsxs)("div", {
            className: _().CurrencyHeader,
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: _,
                direction: "top",
                className: _().CurrencyAbbreviation,
                strTooltipClassname: _().HoverToolTip,
                children: (0, _.jsxs)("div", {
                  className: _().CurrencyNameCtn,
                  children: [
                    _,
                    (0, _.jsx)("span", {
                      className: _().CurrencyName,
                      children: _,
                    }),
                  ],
                }),
              }),
              _ > 0 &&
                (0, _.jsx)(_._, {
                  hoverKey: _,
                  className: _().CurrencyMore,
                  renderHover: _,
                }),
            ],
          });
        }
        function _(_) {
          const { row: _ } = _;
          return (0, _.jsx)(_._, {
            packageID: _.original.packageID,
            bShowCancel: !0,
          });
        }
        function _() {
          return _.useMemo(
            () =>
              (0, _._)().accessor("proposalState", {
                header: (0, _._)("#PricingDashboard_Column_PriceProposalState"),
                enableSorting: !1,
                cell: _,
                size: 200,
                meta: {
                  strHeaderTooltip: (0, _._)(
                    "#PricingDashboard_Column_PriceProposalState_ttip",
                  ),
                },
              }),
            [],
          );
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(!1),
            _ = _(),
            { rgSupportedPriceKeys: _ } = (0, _._)();
          return _.useMemo(() => {
            const _ = [_, _, _, _, _, _];
            for (const _ of _)
              _.push({
                accessorKey: _,
                size: _ ? 72 : 200,
                enableSorting: !1,
                header: _,
                cell: _._,
              });
            return _;
          }, [_, _, _, _, _, _, _, _]);
        }
        function _(_) {
          const _ = (0, _._)()?.length ?? 0;
          return (0, _.jsx)("div", {
            className: (0, _._)(_().PricingGridCtn, _ > 0 && "PendingVisible"),
            children: (0, _.jsx)(_, {
              ..._,
            }),
          });
        }
        const _ = _.memo(function (_) {
          const { packageData: _ } = _,
            [_, _] = _.useState(!1),
            _ = _.useRef(null),
            [_, _] = (0, _._)("filter", "released"),
            [_, _] = (0, _._)("filter_below_min_price", !1),
            _ = new URLSearchParams(window.location.search),
            _ = _.has(_._) ? decodeURIComponent(_.get(_._)) : "",
            _ = _(_),
            _ = _(_, _, {
              bFilterToOnlyBelowMinimumPrice: _,
              strSearchStringFromURL: _,
            }),
            _ = (0, _._)(),
            _ = () => _(_.current),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                bCompactMode: _,
                setCompactMode: _,
                rgGridData: _,
                strPackageFilter: _,
                setPackageFilter: _,
                bFilterToBelowMinPrice: _,
                setFilterToBelowMinPrice: _,
              }),
              (0, _.jsx)("div", {
                className: _().PricingGridWrapper,
                children: (0, _.jsx)("div", {
                  className: (0, _._)(_().PricingGrid, _ && "CompactMode"),
                  children: (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsx)(_._, {
                        fnBLocalChangesExist: _,
                        fnWarnUser: _,
                        children: (0, _.jsx)(_._, {
                          ref: _,
                          className: _()(
                            _().PricingGridTable,
                            "noGlobalButtonStyle",
                          ),
                          columns: _,
                          data: _,
                          getRowKey: (_, _) => _.packageID,
                          stickyHeader: !0,
                          nItemHeight: 43,
                          nHeaderHeight: 63,
                          overscan: 12,
                          initialExpanded: !0,
                          initialSorting: [
                            {
                              _: "appName",
                              desc: !1,
                            },
                          ],
                          initialColumnFilters: [
                            {
                              _: "packageName",
                              value: _,
                            },
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
                          onGroupingChange: _,
                          onVisibleRowsChange: _,
                          renderGroup: _._,
                        }),
                      }),
                      (0, _.jsx)("br", {}),
                    ],
                  }),
                }),
              }),
            ],
          });
        });
        function _(_) {
          const { priceKey: _ } = _,
            _ = (0, _._)(_);
          let _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: _().PricePopout,
            children: (0, _.jsx)("div", {
              className: _().DetailRow,
              children: (0, _.jsx)("div", {
                className: _().DetailLabel,
                onClick: _,
                children: (0, _._)("#PricingDashboard_RevertAllCurrency", _),
              }),
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { closeModal: _ } = _,
            _ = (0, _._)(),
            _ = _()().format("YYYY-MM-DDTHH-mm-ss"),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = `prices_all_${_}_${_}.csv`,
            _ = `prices_${_}_${_}.csv`,
            _ = _.length == 0;
          return (0, _.jsxs)(_._, {
            bAllowFullSize: !1,
            closeModal: _,
            bAlertDialog: !0,
            strTitle: (0, _._)("#PricingDashboard_ImportExportHeader"),
            children: [
              (0, _._)("#PricingDashboard_ImportExport_GeneralInstructions"),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("a", {
                href: _._.PARTNER_BASE_URL + "doc/store/pricing/csv",
                target: "_blank",
                children: (0, _._)("#PricingDashboard_ImportExport_DocLink"),
              }),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("h3", {
                children: (0, _._)("#PricingDashboard_SubtitleExport"),
              }),
              (0, _.jsx)("div", {
                className: _().Instructions,
                children: (0, _._)(
                  "#PricingDashboard_ImportExport_DownloadInstructions",
                ),
              }),
              (0, _.jsxs)("div", {
                className: _().ButtonRows,
                children: [
                  _.length != _.length &&
                    (0, _.jsxs)("div", {
                      className: _().OptionCtn,
                      children: [
                        (0, _.jsx)("span", {
                          className: _().OptionDesc,
                          children: (0, _._)(
                            "#PricingDashboard_ImportExport_DownloadVisible_Desc",
                          ),
                        }),
                        (0, _.jsxs)(_._, {
                          className: _().Button,
                          disabled: _,
                          onClick: () => _(_, _),
                          children: [
                            (0, _._)(
                              "#PricingDashboard_ImportExport_DownloadVisible_Button",
                            ),
                            (0, _.jsx)("span", {
                              children: (0, _._)(
                                "#PricingDashboard_PackageCount",
                                _.length,
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, _.jsxs)("div", {
                    className: _().OptionCtn,
                    children: [
                      (0, _.jsx)("span", {
                        className: _().OptionDesc,
                        children: (0, _._)(
                          "#PricingDashboard_ImportExport_DownloadAll_Desc",
                        ),
                      }),
                      (0, _.jsxs)(_._, {
                        className: _().Button,
                        disabled: _,
                        onClick: () => _(_, _),
                        children: [
                          (0, _._)(
                            "#PricingDashboard_ImportExport_DownloadAll_Button",
                          ),
                          (0, _.jsx)("span", {
                            children: (0, _._)(
                              "#PricingDashboard_PackageCount",
                              _.length,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("h3", {
                children: (0, _._)("#PricingDashboard_SubtitleImport"),
              }),
              (0, _.jsx)("div", {
                className: _().Instructions,
                children: (0, _._)(
                  "#PricingDashboard_ImportExport_UploadInstructions",
                ),
              }),
              (0, _.jsx)("div", {
                className: _().ButtonRows,
                children: (0, _.jsxs)("div", {
                  className: _().OptionCtn,
                  children: [
                    (0, _.jsx)("span", {
                      className: _().OptionDesc,
                      children: (0, _._)(
                        "#PricingDashboard_ImportExport_Upload_Desc",
                      ),
                    }),
                    (0, _.jsx)(_._, {
                      className: _().Button,
                      disabled: _,
                      children: (0, _.jsxs)("label", {
                        className: _().ImportButtonLabel,
                        htmlFor: "import-price-input",
                        children: [
                          (0, _._)(
                            "#PricingDashboard_ImportExport_Upload_Button",
                          ),
                          (0, _.jsx)("input", {
                            _: "import-price-input",
                            type: "file",
                            style: {
                              display: "none",
                            },
                            onChange: (_) => _(_, _),
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
        function _(_, _) {
          const _ = [],
            _ = (0, _._)(),
            _ = [(0, _._)("#PackageGrid_Column_PackageName"), "ID"];
          for (const _ of _) _.push(_);
          _.push(_);
          for (const _ of _) {
            const _ = [(0, _._)(_), _.toString()];
            for (const _ of _) {
              const _ = (0, _._)(_, _),
                _ = _ ? (_ / 100).toString() : "";
              _.push(_);
            }
            _.push(_);
          }
          _._.WriteCSVToFile(_, _);
        }
        async function _(_, _) {
          if (_.target.files.length >= 1) {
            const _ = (0, _._)(_),
              _ = _.target.files[0],
              _ = await _._.ParseCSVFile(_);
            (0, _._)(
              (0, _.jsx)(_, {
                strFilename: _.name,
                parseResult: _,
              }),
              _,
            ),
              _();
          }
        }
        function _(_, _) {
          let _ = Number(_);
          return Number.isNaN(_) ? null : Math.round(_ * 100);
        }
        function _(_, _, _, _) {
          const _ = [],
            _ = new Set(_),
            _ = [];
          for (const _ of _.data ?? []) {
            const _ = Number(_._);
            if (_.has(_)) {
              _.push(_);
              for (const _ of _) {
                const _ = _[_],
                  _ = !!_?.length && _(_, _);
                if (!_?.length || Number.isNaN(_)) continue;
                const _ = _(_, _, _);
                _ && _.push(_);
              }
            }
          }
          return {
            rgPriceChanges: _,
            nPackagesImported: _.length,
          };
        }
        function _(_) {
          const { closeModal: _, strFilename: _, parseResult: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            [_, _] = _.useState(null),
            [_, _] = _.useState();
          if (
            (_.useEffect(() => {
              const { rgPriceChanges: _, nPackagesImported: _ } = _(_, _, _, _);
              _(_), _(_);
            }, [_, _, _, _]),
            _ === null)
          )
            return (0, _.jsx)(_._, {
              position: "center",
            });
          const _ = _.length > 0,
            _ = _
              ? (0, _._)("#PackageGrid_SaveChangesDialogButton")
              : (0, _._)("#Button_Close"),
            _ = () => {
              _ && (0, _._)((0, _.jsx)(_._, {}), window);
            };
          return (0, _.jsxs)(_._, {
            strTitle: (0, _._)(
              "#PricingDashboard_ImportExport_UploadProgressTitle",
            ),
            strDescription: (0, _._)(
              "#PricingDashboard_ImportExport_UploadProgressDetails",
              _,
            ),
            bAlertDialog: !_,
            strOKButtonText: _,
            onOK: _,
            strCancelButtonText: (0, _._)("#Button_OK"),
            closeModal: _,
            children: [
              (0, _.jsx)("div", {
                className: _().ParseResultCount,
                children: (0, _._)(
                  "#PricingDashboard_ImportExport_UploadResults",
                  _.length,
                ),
              }),
              _ &&
                (0, _._)(
                  "#PricingDashboard_ImportExport_UploadNextStepInstructions",
                ),
              !!_.errors?.length &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      className: _().ErrorHeader,
                      children: (0, _._)(
                        "#PricingDashboard_ImportExport_UploadErrorsHeader",
                        _.errors?.length,
                      ),
                    }),
                    (0, _.jsx)("div", {
                      className: _().ParseErrors,
                      children: _.errors.map((_, _) =>
                        (0, _.jsx)(
                          "div",
                          {
                            className: _().Error,
                            children: `${_.row ?? "-"} ${_.message}`,
                          },
                          `${_.message}-${_}`,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          (0, _._)((0, _._)());
          const _ = (0, _._)(),
            _ = "https://steamcommunity.com/groups/steamworks/discussions/29/",
            _ = _._.PARTNER_BASE_URL + "doc/store/pricing",
            _ = _._.HELP_BASE_URL + "wizard/HelpWithPublishing?issueid=920",
            _ = (0, _._)(),
            _ = (0, _.useMemo)(
              () => Array.from(new Set(_.map((_) => _.submitterID))),
              [_],
            ),
            _ = (0, _._)(_);
          return (0, _.jsxs)("div", {
            className: _().DashboardPage,
            children: [
              (0, _.jsxs)("div", {
                className: _().DashTitle,
                children: [
                  (0, _._)("#PricingDashboard_Title"),
                  (0, _.jsx)("div", {
                    className: _().FeedbackLinkCtn,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().ButtonGroup,
                    children: [
                      (0, _.jsx)(_._, {
                        onClick: (_) =>
                          (0, _._)((0, _.jsx)(_, {}), (0, _._)(_)),
                        children: (0, _._)(
                          "#PricingDashboard_ImportExportButton",
                        ),
                      }),
                      (0, _.jsx)(_._, {
                        onClick: (_) => (0, _._)(_, _),
                        children: (0, _._)(
                          "#PricingDashboard_DocumentationButton",
                        ),
                      }),
                      (0, _.jsx)(_._, {
                        onClick: (_) => (0, _._)(_, _),
                        children: (0, _._)("#PricingDashboard_ContactUsButton"),
                      }),
                    ],
                  }),
                ],
              }),
              _.length == 0 &&
                (0, _.jsx)("div", {
                  className: _().ErrorMessage,
                  children: (0, _._)("#PricingDashboard_Error_NoPackages"),
                }),
              _.length > 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      packageData: _,
                    }),
                    (0, _.jsx)(_._, {
                      bReloadPageOnSave: !1,
                    }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          PricingDashboard: () => "/dashboard/:publisherid(\\d*)",
        };
        function _(_) {
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                basename: (0, _._)() + "pricing/",
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.DiagData(),
                      render: (_) =>
                        (0, _.jsx)(_._, {
                          ..._,
                          strConfigID: "application_config",
                        }),
                    }),
                    (0, _.jsx)(_._, {
                      path: _.PricingDashboard(),
                      render: (_) => (0, _.jsx)(_, {}),
                    }),
                    (0, _.jsx)(_._, {
                      component: _._,
                    }),
                  ],
                }),
              }),
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)(!1),
            [_] = (0, _.useState)(() => _()),
            _ = (0, _.useMemo)(
              () => ({
                country: _._.COUNTRY,
                language: _._.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, _.useEffect)(() => (_(!0), _(_)), [_]),
            _
              ? (0, _.createElement)(_._, {
                  context: _,
                  serviceTransportOverride: _.GetServiceTransport(),
                  children: _.children,
                })
              : null
          );
        }
        function _(_) {
          const [_] = (0, _.useState)(() => _()),
            _ = (0, _.useMemo)(
              () => ({
                country: _._.COUNTRY,
                language: _._.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: _.bIncludeUnpublished,
              }),
              [_.bIncludeUnpublished],
            );
          return (0, _.createElement)(_._, {
            context: _,
            serviceTransportOverride: _.GetServiceTransport(),
            children: _.children,
          });
        }
        function _() {
          const _ = (0, _._)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (0, _._)(new _._(_._.WEBAPI_BASE_URL, _));
        }
        function _(_) {
          return _._.Initialize(_.GetServiceTransport(), _._.is_partner_member);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        class _ {
          static ParseCSVFile(_, _) {
            return new Promise((_, _) => {
              const _ = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: _,
                error: (_) =>
                  _({
                    errors: [_],
                  }),
                transformHeader: _,
              };
              _().parse(_, _);
            });
          }
          static ReadFile(_) {
            return new Promise((_, _) => {
              const _ = new FileReader();
              (_.onload = () => _(_.result ?? "")), _.readAsText(_);
            });
          }
          static WriteFile(_, _) {
            let _ = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(_, _);
            else {
              const _ = window.URL.createObjectURL(_);
              _.href = _;
            }
            _.setAttribute("download", _), _.click();
            try {
              document.removeChild(_);
            } catch {}
          }
          static WriteCSVToFile(_, _, _, _) {
            const _ = _
                ? _().unparse(
                    {
                      fields: _,
                      data: _,
                    },
                    {
                      header: !0,
                    },
                  )
                : _().unparse(_, {
                    header: !0,
                  }),
              _ = _ == !0 ? ["\uFEFF" + _] : [_];
            _.WriteFile(
              new Blob(_, {
                type: "text/csv:charset=utf-8;",
              }),
              _,
            );
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(_, _) {
            const _ = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let _ =
              "<" +
              _() +
              'xml version="1.0" encoding="UTF-8" ' +
              _() +
              `>
`;
            (_ += new XMLSerializer().serializeToString(_)),
              _.WriteFile(
                new Blob([_], {
                  type: "application/xml:charset=utf-8;",
                }),
                _,
              );
          }
        }
      },
      chunkid: (module) => {
        module.exports = {
          DashboardPage: "_353rnPLVzyQBQhakxhkl7u",
          DashTitleBar: "_2m-_VofgoRb-uGQMrewYq3",
          DashTitle: "_1FK58fndqHlADYEX-58V0C",
          ConfidentialBanner: "_2H9KzQ8SQGvqGhbWidWzf4",
          Throbber: "_21EsxksQjCwl-Xz3TNuoPc",
          ErrorMessage: "_190uxu3FVS6Fx-IbDsfCyd",
          ButtonGroup: "_2peTiEFo27_zkZA0TzjnD4",
        };
      },
      chunkid: (module) => {
        module.exports = {
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
      chunkid: (module) => {
        module.exports = {
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
      chunkid: (module) => {
        module.exports = {
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
      chunkid: (module) => {
        module.exports = {
          _: "_2LxgdMcpWJRjkxZKbmeEEb",
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
      chunkid: function (_, _) {
        var _, _, _;
        ((_, _) => {
          (_ = []),
            (_ = _),
            (_ = typeof _ == "function" ? __webpack_require__.apply(_, _) : _),
            _ !== void 0 && (_.exports = _);
        })(this, function _() {
          var _ =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : _ !== void 0
                    ? _
                    : {},
            _,
            _ = !_.document && !!_.postMessage,
            _ = _.IS_PAPA_WORKER || !1,
            _ = {},
            _ = 0,
            _ = {};
          function _(_) {
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
              (this._completeResults = {
                data: [],
                errors: [],
                meta: {},
              }),
              function (_) {
                var _ = _(_);
                (_.chunkSize = parseInt(_.chunkSize)),
                  _.step || _.chunk || (_.chunkSize = null),
                  (this._handle = new _(_)),
                  ((this._handle.streamer = this)._config = _);
              }.call(this, _),
              (this.parseChunk = function (_, _) {
                var _ = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < _) {
                  let _ = this._config.newline;
                  _ ||
                    ((_ = this._config.quoteChar || '"'),
                    (_ = this._handle.guessLineEndings(_, _))),
                    (_ = [..._.split(_).slice(_)].join(_));
                }
                this.isFirstChunk &&
                  _(this._config.beforeFirstChunk) &&
                  (_ = this._config.beforeFirstChunk(_)) !== void 0 &&
                  (_ = _),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var _ = this._partialLine + _,
                  _ =
                    ((this._partialLine = ""),
                    this._handle.parse(_, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((_ = _.meta.cursor),
                    (_ =
                      (this._finished ||
                        ((this._partialLine = _.substring(_ - this._baseIndex)),
                        (this._baseIndex = _)),
                      _ && _.data && (this._rowCount += _.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    _)
                  )
                    _.postMessage({
                      results: _,
                      workerId: _.WORKER_ID,
                      finished: _,
                    });
                  else if (_(this._config.chunk) && !_) {
                    if (
                      (this._config.chunk(_, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = _ = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(_.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(_.errors)),
                      (this._completeResults.meta = _.meta)),
                    this._completed ||
                      !_ ||
                      !_(this._config.complete) ||
                      (_ && _.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    _ || (_ && _.meta.paused) || this._nextChunk(),
                    _
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (_) {
                _(this._config.error)
                  ? this._config.error(_)
                  : _ &&
                    this._config.error &&
                    _.postMessage({
                      workerId: _.WORKER_ID,
                      error: _,
                      finished: !1,
                    });
              });
          }
          function _(_) {
            var _;
            (_ = _ || {}).chunkSize || (_.chunkSize = _.RemoteChunkSize),
              _.call(this, _),
              (this._nextChunk = _
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (_) {
                (this._input = _), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((_ = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (_.withCredentials = this._config.withCredentials),
                    _ ||
                      ((_.onload = _(this._chunkLoaded, this)),
                      (_.onerror = _(this._chunkError, this))),
                    _.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !_,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var _,
                      _ = this._config.downloadRequestHeaders;
                    for (_ in _) _.setRequestHeader(_, _[_]);
                  }
                  var _;
                  this._config.chunkSize &&
                    ((_ = this._start + this._config.chunkSize - 1),
                    _.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + _,
                    ));
                  try {
                    _.send(this._config.downloadRequestBody);
                  } catch (_) {
                    this._chunkError(_.message);
                  }
                  _ && _.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                _.readyState === 4 &&
                  (_.status < 200 || 400 <= _.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || _.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((_) =>
                            (_ = _.getResponseHeader("Content-Range")) !== null
                              ? parseInt(_.substring(_.lastIndexOf("/") + 1))
                              : -1)(_)),
                      this.parseChunk(_.responseText)));
              }),
              (this._chunkError = function (_) {
                (_ = _.statusText || _), this._sendError(new Error(_));
              });
          }
          function _(_) {
            (_ = _ || {}).chunkSize || (_.chunkSize = _.LocalChunkSize),
              _.call(this, _);
            var _,
              _,
              _ = typeof FileReader < "u";
            (this.stream = function (_) {
              (this._input = _),
                (_ = _.slice || _.webkitSlice || _.mozSlice),
                _
                  ? (((_ = new FileReader()).onload = _(
                      this._chunkLoaded,
                      this,
                    )),
                    (_.onerror = _(this._chunkError, this)))
                  : (_ = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var _ = this._input,
                  _ =
                    (this._config.chunkSize &&
                      ((_ = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (_ = _.call(_, this._start, _))),
                    _.readAsText(_, this._config.encoding));
                _ ||
                  this._chunkLoaded({
                    target: {
                      result: _,
                    },
                  });
              }),
              (this._chunkLoaded = function (_) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(_.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(_.error);
              });
          }
          function _(_) {
            var _;
            _.call(this, (_ = _ || {})),
              (this.stream = function (_) {
                return (_ = _), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var _, _;
                if (!this._finished)
                  return (
                    (_ = this._config.chunkSize),
                    (_ = _
                      ? ((_ = _.substring(0, _)), _.substring(_))
                      : ((_ = _), "")),
                    (this._finished = !_),
                    this.parseChunk(_)
                  );
              });
          }
          function _(_) {
            _.call(this, (_ = _ || {}));
            var _ = [],
              _ = !0,
              _ = !1;
            (this.pause = function () {
              _.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                _.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (_) {
                (this._input = _),
                  this._input._("data", this._streamData),
                  this._input._("end", this._streamEnd),
                  this._input._("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                _ && _.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  _.length ? this.parseChunk(_.shift()) : (_ = !0);
              }),
              (this._streamData = _(function (_) {
                try {
                  _.push(
                    typeof _ == "string"
                      ? _
                      : _.toString(this._config.encoding),
                  ),
                    _ &&
                      ((_ = !1),
                      this._checkIsFinished(),
                      this.parseChunk(_.shift()));
                } catch (_) {
                  this._streamError(_);
                }
              }, this)),
              (this._streamError = _(function (_) {
                this._streamCleanUp(), this._sendError(_);
              }, this)),
              (this._streamEnd = _(function () {
                this._streamCleanUp(), (_ = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = _(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function _(_) {
            var _,
              _,
              _,
              _,
              _ = Math.pow(2, 53),
              _ = -_,
              _ = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              _ =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              _ = this,
              _ = 0,
              _ = 0,
              _ = !1,
              _ = !1,
              _ = [],
              _ = {
                data: [],
                errors: [],
                meta: {},
              };
            function _(_) {
              return _.skipEmptyLines === "greedy"
                ? _.join("").trim() === ""
                : _.length === 1 && _[0].length === 0;
            }
            function _() {
              if (
                (_ &&
                  _ &&
                  (_(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      _.DefaultDelimiter +
                      "'",
                  ),
                  (_ = !1)),
                _.skipEmptyLines &&
                  (_.data = _.data.filter(function (_) {
                    return !_(_);
                  })),
                _())
              ) {
                let _ = function (_, _) {
                  _(_.transformHeader) && (_ = _.transformHeader(_, _)),
                    _.push(_);
                };
                var _ = _;
                if (_)
                  if (Array.isArray(_.data[0])) {
                    for (var _ = 0; _() && _ < _.data.length; _++)
                      _.data[_].forEach(_);
                    _.data.splice(0, 1);
                  } else _.data.forEach(_);
              }
              function _(_, _) {
                for (var _ = _.header ? {} : [], _ = 0; _ < _.length; _++) {
                  var _ = _,
                    _ = _[_],
                    _ = ((_, _) =>
                      ((_) => (
                        _.dynamicTypingFunction &&
                          _.dynamicTyping[_] === void 0 &&
                          (_.dynamicTyping[_] = _.dynamicTypingFunction(_)),
                        (_.dynamicTyping[_] || _.dynamicTyping) === !0
                      ))(_)
                        ? _ === "true" ||
                          _ === "TRUE" ||
                          (_ !== "false" &&
                            _ !== "FALSE" &&
                            (((_) => {
                              if (
                                _.test(_) &&
                                ((_ = parseFloat(_)), _ < _ && _ < _)
                              )
                                return 1;
                            })(_)
                              ? parseFloat(_)
                              : _.test(_)
                                ? new Date(_)
                                : _ === ""
                                  ? null
                                  : _))
                        : _)(
                      (_ = _.header
                        ? _ >= _.length
                          ? "__parsed_extra"
                          : _[_]
                        : _),
                      (_ = _.transform ? _.transform(_, _) : _),
                    );
                  _ === "__parsed_extra"
                    ? ((_[_] = _[_] || []), _[_].push(_))
                    : (_[_] = _);
                }
                return (
                  _.header &&
                    (_ > _.length
                      ? _(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            _.length +
                            " fields but parsed " +
                            _,
                          _ + _,
                        )
                      : _ < _.length &&
                        _(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            _.length +
                            " fields but parsed " +
                            _,
                          _ + _,
                        )),
                  _
                );
              }
              var _;
              _ &&
                (_.header || _.dynamicTyping || _.transform) &&
                ((_ = 1),
                !_.data.length || Array.isArray(_.data[0])
                  ? ((_.data = _.data.map(_)), (_ = _.data.length))
                  : (_.data = _(_.data, 0)),
                _.header && _.meta && (_.meta.fields = _),
                (_ += _));
            }
            function _() {
              return _.header && _.length === 0;
            }
            function _(_, _, _, _) {
              (_ = {
                type: _,
                code: _,
                message: _,
              }),
                _ !== void 0 && (_.row = _),
                _.errors.push(_);
            }
            _(_.step) &&
              ((_ = _.step),
              (_.step = function (_) {
                (_ = _),
                  _()
                    ? _()
                    : (_(),
                      _.data.length !== 0 &&
                        ((_ += _.data.length),
                        _.preview && _ > _.preview
                          ? _.abort()
                          : ((_.data = _.data[0]), _(_, _))));
              })),
              (this.parse = function (_, _, _) {
                var _ = _.quoteChar || '"',
                  _ =
                    (_.newline || (_.newline = this.guessLineEndings(_, _)),
                    (_ = !1),
                    _.delimiter
                      ? _(_.delimiter) &&
                        ((_.delimiter = _.delimiter(_)),
                        (_.meta.delimiter = _.delimiter))
                      : ((_ = ((_, _, _, _, _) => {
                          var _, _, _, _;
                          _ = _ || [
                            ",",
                            "	",
                            "|",
                            ";",
                            _.RECORD_SEP,
                            _.UNIT_SEP,
                          ];
                          for (var _ = 0; _ < _.length; _++) {
                            for (
                              var _,
                                _ = _[_],
                                _ = 0,
                                _ = 0,
                                _ = 0,
                                _ =
                                  ((_ = void 0),
                                  new _({
                                    comments: _,
                                    delimiter: _,
                                    newline: _,
                                    preview: 10,
                                  }).parse(_)),
                                _ = 0;
                              _ < _.data.length;
                              _++
                            )
                              _ && _(_.data[_])
                                ? _++
                                : ((_ = _.data[_].length),
                                  (_ += _),
                                  _ === void 0
                                    ? (_ = _)
                                    : 0 < _ &&
                                      ((_ += Math.abs(_ - _)), (_ = _)));
                            0 < _.data.length && (_ /= _.data.length - _),
                              (_ === void 0 || _ <= _) &&
                                (_ === void 0 || _ < _) &&
                                1.99 < _ &&
                                ((_ = _), (_ = _), (_ = _));
                          }
                          return {
                            successful: !!(_.delimiter = _),
                            bestDelimiter: _,
                          };
                        })(
                          _,
                          _.newline,
                          _.skipEmptyLines,
                          _.comments,
                          _.delimitersToGuess,
                        )).successful
                          ? (_.delimiter = _.bestDelimiter)
                          : ((_ = !0), (_.delimiter = _.DefaultDelimiter)),
                        (_.meta.delimiter = _.delimiter)),
                    _(_));
                return (
                  _.preview && _.header && _.preview++,
                  (_ = _),
                  (_ = new _(_)),
                  (_ = _.parse(_, _, _)),
                  _(),
                  _
                    ? {
                        meta: {
                          paused: !0,
                        },
                      }
                    : _ || {
                        meta: {
                          paused: !1,
                        },
                      }
                );
              }),
              (this.paused = function () {
                return _;
              }),
              (this.pause = function () {
                (_ = !0),
                  _.abort(),
                  (_ = _(_.chunk) ? "" : _.substring(_.getCharIndex()));
              }),
              (this.resume = function () {
                _.streamer._halted
                  ? ((_ = !1), _.streamer.parseChunk(_, !0))
                  : setTimeout(_.resume, 3);
              }),
              (this.aborted = function () {
                return _;
              }),
              (this.abort = function () {
                (_ = !0),
                  _.abort(),
                  (_.meta.aborted = !0),
                  _(_.complete) && _.complete(_),
                  (_ = "");
              }),
              (this.guessLineEndings = function (_, _) {
                _ = _.substring(0, 1048576);
                var _ = new RegExp(_(_) + "([^]*?)" + _(_), "gm"),
                  _ = (_ = _.replace(_, "")).split("\r"),
                  _ = _.split(`
`),
                  _ = 1 < _.length && _[0].length < _[0].length;
                if (_.length === 1 || _)
                  return `
`;
                for (var _ = 0, _ = 0; _ < _.length; _++)
                  _[_][0] ===
                    `
` && _++;
                return _ >= _.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function _(_) {
            return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function _(_) {
            var _ = (_ = _ || {}).delimiter,
              _ = _.newline,
              _ = _.comments,
              _ = _.step,
              _ = _.preview,
              _ = _.fastMode,
              _ = null,
              _ = !1,
              _ = _.quoteChar == null ? '"' : _.quoteChar,
              _ = _;
            if (
              (_.escapeChar !== void 0 && (_ = _.escapeChar),
              (typeof _ != "string" || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
                (_ = ","),
              _ === _)
            )
              throw new Error("Comment character same as delimiter");
            _ === !0
              ? (_ = "#")
              : (typeof _ != "string" || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
                (_ = !1),
              _ !==
                `
` &&
                _ !== "\r" &&
                _ !==
                  `\r
` &&
                (_ = `
`);
            var _ = 0,
              _ = !1;
            (this.parse = function (_, _, _) {
              if (typeof _ != "string")
                throw new Error("Input must be a string");
              var _ = _.length,
                _ = _.length,
                _ = _.length,
                _ = _.length,
                _ = _(_),
                _ = [],
                _ = [],
                _ = [],
                _ = (_ = 0);
              if (!_) return _();
              if (_ || (_ !== !1 && _.indexOf(_) === -1)) {
                for (var _ = _.split(_), _ = 0; _ < _.length; _++) {
                  if (((_ = _[_]), (_ += _.length), _ !== _.length - 1))
                    _ += _.length;
                  else if (_) return _();
                  if (!_ || _.substring(0, _) !== _) {
                    if (_) {
                      if (((_ = []), _(_.split(_)), _(), _)) return _();
                    } else _(_.split(_));
                    if (_ && _ <= _) return (_ = _.slice(0, _)), _(!0);
                  }
                }
                return _();
              }
              for (
                var _ = _.indexOf(_, _),
                  _ = _.indexOf(_, _),
                  _ = new RegExp(_(_) + _(_), "g"),
                  _ = _.indexOf(_, _);
                ;
              )
                if (_[_] === _)
                  for (_ = _, _++; ; ) {
                    if ((_ = _.indexOf(_, _ + 1)) === -1)
                      return (
                        _ ||
                          _.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: _.length,
                            index: _,
                          }),
                        _()
                      );
                    if (_ === _ - 1) return _(_.substring(_, _).replace(_, _));
                    if (_ === _ && _[_ + 1] === _) _++;
                    else if (_ === _ || _ === 0 || _[_ - 1] !== _) {
                      _ !== -1 && _ < _ + 1 && (_ = _.indexOf(_, _ + 1));
                      var _ = _(
                        (_ =
                          _ !== -1 && _ < _ + 1 ? _.indexOf(_, _ + 1) : _) ===
                          -1
                          ? _
                          : Math.min(_, _),
                      );
                      if (_.substr(_ + 1 + _, _) === _) {
                        _.push(_.substring(_, _).replace(_, _)),
                          _[(_ = _ + 1 + _ + _)] !== _ && (_ = _.indexOf(_, _)),
                          (_ = _.indexOf(_, _)),
                          (_ = _.indexOf(_, _));
                        break;
                      }
                      if (
                        ((_ = _(_)),
                        _.substring(_ + 1 + _, _ + 1 + _ + _) === _)
                      ) {
                        if (
                          (_.push(_.substring(_, _).replace(_, _)),
                          _(_ + 1 + _ + _),
                          (_ = _.indexOf(_, _)),
                          (_ = _.indexOf(_, _)),
                          _ && (_(), _))
                        )
                          return _();
                        if (_ && _.length >= _) return _(!0);
                        break;
                      }
                      _.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: _.length,
                        index: _,
                      }),
                        _++;
                    }
                  }
                else if (_ && _.length === 0 && _.substring(_, _ + _) === _) {
                  if (_ === -1) return _();
                  (_ = _ + _), (_ = _.indexOf(_, _)), (_ = _.indexOf(_, _));
                } else if (_ !== -1 && (_ < _ || _ === -1))
                  _.push(_.substring(_, _)), (_ = _ + _), (_ = _.indexOf(_, _));
                else {
                  if (_ === -1) break;
                  if ((_.push(_.substring(_, _)), _(_ + _), _ && (_(), _)))
                    return _();
                  if (_ && _.length >= _) return _(!0);
                }
              return _();
              function _(_) {
                _.push(_), (_ = _);
              }
              function _(_) {
                var _ = 0;
                return (_ =
                  _ !== -1 && (_ = _.substring(_ + 1, _)) && _.trim() === ""
                    ? _.length
                    : _);
              }
              function _(_) {
                return (
                  _ ||
                    (_ === void 0 && (_ = _.substring(_)),
                    _.push(_),
                    (_ = _),
                    _(_),
                    _ && _()),
                  _()
                );
              }
              function _(_) {
                (_ = _), _(_), (_ = []), (_ = _.indexOf(_, _));
              }
              function _(_) {
                if (_.header && !_ && _.length && !_) {
                  var _ = _[0],
                    _ = Object.create(null),
                    _ = new Set(_);
                  let _ = !1;
                  for (let _ = 0; _ < _.length; _++) {
                    let _ = _[_];
                    if (
                      _[
                        (_ = _(_.transformHeader) ? _.transformHeader(_, _) : _)
                      ]
                    ) {
                      let _,
                        _ = _[_];
                      for (; (_ = _ + "_" + _), _++, _.has(_); );
                      _.add(_),
                        (_[_] = _),
                        _[_]++,
                        (_ = !0),
                        ((_ = _ === null ? {} : _)[_] = _);
                    } else (_[_] = 1), (_[_] = _);
                    _.add(_);
                  }
                  _ && console.warn("Duplicate headers found and renamed."),
                    (_ = !0);
                }
                return {
                  data: _,
                  errors: _,
                  meta: {
                    delimiter: _,
                    linebreak: _,
                    aborted: _,
                    truncated: !!_,
                    cursor: _ + (_ || 0),
                    renamedHeaders: _,
                  },
                };
              }
              function _() {
                _(_()), (_ = []), (_ = []);
              }
            }),
              (this.abort = function () {
                _ = !0;
              }),
              (this.getCharIndex = function () {
                return _;
              });
          }
          function _(_) {
            var _ = _.data,
              _ = _[_.workerId],
              _ = !1;
            if (_.error) _.userError(_.error, _.file);
            else if (_.results && _.results.data) {
              var _ = {
                abort: function () {
                  (_ = !0),
                    _(_.workerId, {
                      data: [],
                      errors: [],
                      meta: {
                        aborted: !0,
                      },
                    });
                },
                pause: _,
                resume: _,
              };
              if (_(_.userStep)) {
                for (
                  var _ = 0;
                  _ < _.results.data.length &&
                  (_.userStep(
                    {
                      data: _.results.data[_],
                      errors: _.results.errors,
                      meta: _.results.meta,
                    },
                    _,
                  ),
                  !_);
                  _++
                );
                delete _.results;
              } else
                _(_.userChunk) &&
                  (_.userChunk(_.results, _, _.file), delete _.results);
            }
            _.finished && !_ && _(_.workerId, _.results);
          }
          function _(_, _) {
            var _ = _[_];
            _(_.userComplete) && _.userComplete(_), _.terminate(), delete _[_];
          }
          function _() {
            throw new Error("Not implemented.");
          }
          function _(_) {
            if (typeof _ != "object" || _ === null) return _;
            var _,
              _ = Array.isArray(_) ? [] : {};
            for (_ in _) _[_] = _(_[_]);
            return _;
          }
          function _(_, _) {
            return function () {
              _.apply(_, arguments);
            };
          }
          function _(_) {
            return typeof _ == "function";
          }
          return (
            (_.parse = function (_, _) {
              var _ = (_ = _ || {}).dynamicTyping || !1;
              if (
                (_(_) && ((_.dynamicTypingFunction = _), (_ = {})),
                (_.dynamicTyping = _),
                (_.transform = !!_(_.transform) && _.transform),
                !_.worker || !_.WORKERS_SUPPORTED)
              )
                return (
                  (_ = null),
                  _.NODE_STREAM_INPUT,
                  typeof _ == "string"
                    ? ((_ = ((_) =>
                        _.charCodeAt(0) !== 65279 ? _ : _.slice(1))(_)),
                      (_ = new (_.download ? _ : _)(_)))
                    : _.readable === !0 && _(_.read) && _(_._)
                      ? (_ = new _(_))
                      : ((_.File && _ instanceof File) ||
                          _ instanceof Object) &&
                        (_ = new _(_)),
                  _.stream(_)
                );
              ((_ = (() => {
                var _;
                return (
                  !!_.WORKERS_SUPPORTED &&
                  ((_ = (() => {
                    var _ = _.URL || _.webkitURL || null,
                      _ = _.toString();
                    return (
                      _.BLOB_URL ||
                      (_.BLOB_URL = _.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            _,
                            ")();",
                          ],
                          {
                            type: "text/javascript",
                          },
                        ),
                      ))
                    );
                  })()),
                  ((_ = new _.Worker(_)).onmessage = _),
                  (_._ = _++),
                  (_[_._] = _))
                );
              })()).userStep = _.step),
                (_.userChunk = _.chunk),
                (_.userComplete = _.complete),
                (_.userError = _.error),
                (_.step = _(_.step)),
                (_.chunk = _(_.chunk)),
                (_.complete = _(_.complete)),
                (_.error = _(_.error)),
                delete _.worker,
                _.postMessage({
                  input: _,
                  config: _,
                  workerId: _._,
                });
            }),
            (_.unparse = function (_, _) {
              var _ = !1,
                _ = !0,
                _ = ",",
                _ = `\r
`,
                _ = '"',
                _ = _ + _,
                _ = !1,
                _ = null,
                _ = !1,
                _ =
                  ((() => {
                    if (typeof _ == "object") {
                      if (
                        (typeof _.delimiter != "string" ||
                          _.BAD_DELIMITERS.filter(function (_) {
                            return _.delimiter.indexOf(_) !== -1;
                          }).length ||
                          (_ = _.delimiter),
                        (typeof _.quotes != "boolean" &&
                          typeof _.quotes != "function" &&
                          !Array.isArray(_.quotes)) ||
                          (_ = _.quotes),
                        (typeof _.skipEmptyLines != "boolean" &&
                          typeof _.skipEmptyLines != "string") ||
                          (_ = _.skipEmptyLines),
                        typeof _.newline == "string" && (_ = _.newline),
                        typeof _.quoteChar == "string" && (_ = _.quoteChar),
                        typeof _.header == "boolean" && (_ = _.header),
                        Array.isArray(_.columns))
                      ) {
                        if (_.columns.length === 0)
                          throw new Error("Option columns is empty");
                        _ = _.columns;
                      }
                      _.escapeChar !== void 0 && (_ = _.escapeChar + _),
                        _.escapeFormulae instanceof RegExp
                          ? (_ = _.escapeFormulae)
                          : typeof _.escapeFormulae == "boolean" &&
                            _.escapeFormulae &&
                            (_ = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(_(_), "g"));
              if (
                (typeof _ == "string" && (_ = JSON.parse(_)), Array.isArray(_))
              ) {
                if (!_.length || Array.isArray(_[0])) return _(null, _, _);
                if (typeof _[0] == "object")
                  return _(_ || Object.keys(_[0]), _, _);
              } else if (typeof _ == "object")
                return (
                  typeof _.data == "string" && (_.data = JSON.parse(_.data)),
                  Array.isArray(_.data) &&
                    (_.fields || (_.fields = (_.meta && _.meta.fields) || _),
                    _.fields ||
                      (_.fields = Array.isArray(_.data[0])
                        ? _.fields
                        : typeof _.data[0] == "object"
                          ? Object.keys(_.data[0])
                          : []),
                    Array.isArray(_.data[0]) ||
                      typeof _.data[0] == "object" ||
                      (_.data = [_.data])),
                  _(_.fields || [], _.data || [], _)
                );
              throw new Error("Unable to serialize unrecognized input");
              function _(_, _, _) {
                var _ = "",
                  _ =
                    (typeof _ == "string" && (_ = JSON.parse(_)),
                    typeof _ == "string" && (_ = JSON.parse(_)),
                    Array.isArray(_) && 0 < _.length),
                  _ = !Array.isArray(_[0]);
                if (_ && _) {
                  for (var _ = 0; _ < _.length; _++)
                    0 < _ && (_ += _), (_ += _(_[_], _));
                  0 < _.length && (_ += _);
                }
                for (var _ = 0; _ < _.length; _++) {
                  var _ = (_ ? _ : _[_]).length,
                    _ = !1,
                    _ = _ ? Object.keys(_[_]).length === 0 : _[_].length === 0;
                  if (
                    (_ &&
                      !_ &&
                      (_ =
                        _ === "greedy"
                          ? _[_].join("").trim() === ""
                          : _[_].length === 1 && _[_][0].length === 0),
                    _ === "greedy" && _)
                  ) {
                    for (var _ = [], _ = 0; _ < _; _++) {
                      var _ = _ ? _[_] : _;
                      _.push(_[_][_]);
                    }
                    _ = _.join("").trim() === "";
                  }
                  if (!_) {
                    for (var _ = 0; _ < _; _++) {
                      0 < _ && !_ && (_ += _);
                      var _ = _ && _ ? _[_] : _;
                      _ += _(_[_][_], _);
                    }
                    _ < _.length - 1 && (!_ || (0 < _ && !_)) && (_ += _);
                  }
                }
                return _;
              }
              function _(_, _) {
                var _, _;
                return _ == null
                  ? ""
                  : _.constructor === Date
                    ? JSON.stringify(_).slice(1, 25)
                    : ((_ = !1),
                      _ &&
                        typeof _ == "string" &&
                        _.test(_) &&
                        ((_ = "'" + _), (_ = !0)),
                      (_ = _.toString().replace(_, _)),
                      (_ =
                        _ ||
                        _ === !0 ||
                        (typeof _ == "function" && _(_, _)) ||
                        (Array.isArray(_) && _[_]) ||
                        ((_, _) => {
                          for (var _ = 0; _ < _.length; _++)
                            if (-1 < _.indexOf(_[_])) return !0;
                          return !1;
                        })(_, _.BAD_DELIMITERS) ||
                        -1 < _.indexOf(_) ||
                        _.charAt(0) === " " ||
                        _.charAt(_.length - 1) === " ")
                        ? _ + _ + _
                        : _);
              }
            }),
            (_.RECORD_SEP = ""),
            (_.UNIT_SEP = ""),
            (_.BYTE_ORDER_MARK = "\uFEFF"),
            (_.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              _.BYTE_ORDER_MARK,
            ]),
            (_.WORKERS_SUPPORTED = !_ && !!_.Worker),
            (_.NODE_STREAM_INPUT = 1),
            (_.LocalChunkSize = 10485760),
            (_.RemoteChunkSize = 5242880),
            (_.DefaultDelimiter = ","),
            (_.Parser = _),
            (_.ParserHandle = _),
            (_.NetworkStreamer = _),
            (_.FileStreamer = _),
            (_.StringStreamer = _),
            (_.ReadableStreamStreamer = _),
            _.jQuery &&
              ((_ = _.jQuery)._.parse = function (_) {
                var _ = _.config || {},
                  _ = [];
                return (
                  this.each(function (_) {
                    if (
                      !(
                        _(this).prop("tagName").toUpperCase() === "INPUT" &&
                        _(this).attr("type").toLowerCase() === "file" &&
                        _.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var _ = 0; _ < this.files.length; _++)
                      _.push({
                        file: this.files[_],
                        inputElem: this,
                        instanceConfig: _.extend({}, _),
                      });
                  }),
                  _(),
                  this
                );
                function _() {
                  if (_.length === 0) _(_.complete) && _.complete();
                  else {
                    var _,
                      _,
                      _,
                      _,
                      _ = _[0];
                    if (_(_.before)) {
                      var _ = _.before(_.file, _.inputElem);
                      if (typeof _ == "object") {
                        if (_.action === "abort")
                          return (
                            (_ = "AbortError"),
                            (_ = _.file),
                            (_ = _.inputElem),
                            (_ = _.reason),
                            void (
                              _(_.error) &&
                              _.error(
                                {
                                  name: _,
                                },
                                _,
                                _,
                                _,
                              )
                            )
                          );
                        if (_.action === "skip") return void _();
                        typeof _.config == "object" &&
                          (_.instanceConfig = _.extend(
                            _.instanceConfig,
                            _.config,
                          ));
                      } else if (_ === "skip") return void _();
                    }
                    var _ = _.instanceConfig.complete;
                    (_.instanceConfig.complete = function (_) {
                      _(_) && _(_, _.file, _.inputElem), _();
                    }),
                      _.parse(_.file, _.instanceConfig);
                  }
                }
                function _() {
                  _.splice(0, 1), _();
                }
              }),
            _ &&
              (_.onmessage = function (_) {
                (_ = _.data),
                  _.WORKER_ID === void 0 && _ && (_.WORKER_ID = _.workerId),
                  typeof _.input == "string"
                    ? _.postMessage({
                        workerId: _.WORKER_ID,
                        results: _.parse(_.input, _.config),
                        finished: !0,
                      })
                    : ((_.File && _.input instanceof File) ||
                        _.input instanceof Object) &&
                      (_ = _.parse(_.input, _.config)) &&
                      _.postMessage({
                        workerId: _.WORKER_ID,
                        results: _,
                        finished: !0,
                      });
              }),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            _
          );
        });
      },
    },
  ]);
})();
