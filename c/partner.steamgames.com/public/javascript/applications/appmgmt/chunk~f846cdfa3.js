(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4017],
  {
    chunkid: (module) => {
      module.exports = {
        ReleaseDateInfoCtn: "_2mHXbGuTlraXe_Q1JYKmJZ",
        GameEditCtn: "_2JigUHOJ_OTCRjbohXgz9q",
        ReleaseDateContent: "AVZgMOcgNdb95embDq8g1",
        EditButton: "_1R5w2idIf5H3xZh7C6ObQL",
        Spacer: "_3TcEpA8cfRVBTd8q_vvFWu",
        Top: "kNcnUbYODwtyQ3AZp_VUM",
        Bottom: "_2TBzK4oRpgLv5hHxtojPq5",
        EditButtonIcon: "_22a0aPwQVuTJx58YZQWYBd",
        LabelField: "_1olrpCNFeNf7UfruKHLVhY",
        Label: "M3h38e4KnwYsDvQP72dg0",
        BigField: "_4jS-jBGyvj3mr8jkJ46Gc",
        Set: "eEhAf6mE-OR6VCf4eHEkC",
      };
    },
    chunkid: (module) => {
      module.exports = {
        ReleaseDateModal: "RKE7g5McLhANBdiTzm-ai",
        ReleaseDateRequestBody: "_32CdqVuKRqrf1SR8Hday6v",
        Column: "_gUUe9JABsRpGmdkooO11",
        ColumnLabel: "xebmA68ybtGEgyG_oVMM0",
        ReleaseColumnFooter: "_3egfk1DBae-OZSZtcwrDDq",
        ColumnContent: "eZhskcRU_Ejw5kmSBLRTU",
        BlueNote: "_1iIVgx9LfomTs6Ycj6qYgV",
        PublishNowWarning: "_2-dra08qCgH_F_0T756AwP",
        ErrorBox: "_27JIJRbunDgYqS_xDV7Xha",
        HTMLErrorBoxAppear: "bXT6nAG7o3DqMjoZ_zWJ",
      };
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
        _ = __webpack_require__("chunkid");
      const _ = [
          "date_full",
          "date_month",
          "date_quarter",
          "date_year",
          "text_comingsoon",
          "text_tba",
        ],
        _ = ["date_full", "date_month", "date_quarter"];
      function _(_) {
        const {
            rtSteamReleaseDate: _,
            value: __webpack_require__,
            onChange: _,
            rgComingSoonOptionOverride: _,
            bExpandedDisplay: _,
          } = _,
          _ = !!_,
          _ = _.useMemo(
            () =>
              (_ || _).map((_) => ({
                label: (0, _._)(_, _, null, _),
                data: _,
              })),
            [_, _, _],
          ),
          _ = _.useCallback(
            (_) => {
              _(_.data);
            },
            [_],
          ),
          _ = _
            ? (0, _._)("#GameEdit_ComingSoon_SelectAnOption")
            : (0, _._)("#App_Landing_NoDateSelected");
        return _.createElement(_._, {
          disabled: !_,
          strDefaultLabel: _,
          rgOptions: _,
          selectedOption: _ ? __webpack_require__ : null,
          onChange: _,
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { appid: _, onClose: __webpack_require__, onCommit: _ } = _,
          [_, _] = _.useState(null),
          {
            data: _,
            isLoading: _,
            isLoadingError: _,
          } = (function (_) {
            return (0, _._)({
              queryKey: ["ReleaseRequest", _],
              queryFn: async () => {
                const _ = await _().get(
                  `${_._.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${_}`,
                );
                if ("string" == typeof _.data)
                  throw "Error loading release status";
                return {
                  appid: _,
                  ..._?.data,
                };
              },
            });
          })(_),
          _ = "prerelease" == _?.strReleaseState,
          _ = _.useCallback(
            (_, _) => {
              _._.invalidateQueries({
                queryKey: ["ReleaseRequest", _],
              }),
                _(_, _, _);
            },
            [_, _, _],
          );
        let _ = _.createElement(_, {
          setOnOKButton: _,
          onCommit: _,
        });
        return (
          _
            ? (_ = _.createElement(_, {
                strError: (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
              }))
            : (!_ && _) || (_ = _.createElement(_._, null)),
          _.createElement(
            _.Provider,
            {
              value: _,
            },
            _.createElement(
              _,
              {
                fnSubmit: _,
                fnCloseModal: __webpack_require__,
              },
              _,
            ),
          )
        );
      }
      const _ = _.createContext(null);
      function _() {
        return _.useContext(_);
      }
      const _ = _.memo(function (_) {
        const {
            appid: _,
            bCanUpdateComingSoonDate: __webpack_require__,
            rtReleaseDate: _,
            strComingSoonDisplay: _,
          } = _(),
          { setOnOKButton: _, onCommit: _ } = _,
          [_, _] = _.useState(_),
          [_, _] = _.useState(_ || void 0),
          [_, _] = _.useState("none"),
          [_, _] = _.useState(),
          _ = _.useCallback((_) => {
            _(_), _("none");
          }, []),
          _ = _.useCallback(() => {
            if (_)
              if (_) {
                _("submitting"), _(null);
                (async function (_) {
                  const {
                      unAppID: _,
                      rtReleaseDate: __webpack_require__,
                      strComingSoonDisplay: _,
                    } = _,
                    _ = `${_._.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${_}`,
                    _ = new FormData();
                  _.append("sessionid", _._.SESSIONID),
                    __webpack_require__ &&
                      _.append("release_date", __webpack_require__.toString());
                  _.append("coming_soon_display", _);
                  const _ = await _().post(_, _);
                  if (!_.data || 1 != _.data.success)
                    throw (0, _._)(
                      "#Error_Description",
                      _.data?.success,
                      _.data?.error_message || "unknown",
                    );
                })({
                  unAppID: _,
                  rtReleaseDate: __webpack_require__ ? _ : null,
                  strComingSoonDisplay: _,
                })
                  .then(() => {
                    _("refreshing"), _(_, _);
                  })
                  .catch((_) => {
                    _(_);
                  });
              } else
                _((0, _._)("#App_Landing_ReleaseDate_Error_ComingSoonDisplay"));
            else _((0, _._)("#App_Landing_ReleaseDate_Error_NoDate"));
          }, [_, _, _, __webpack_require__, _, _]);
        return (
          _.useEffect(() => {
            _("none" == _ ? () => _ : null);
          }, [_, __webpack_require__, _, _]),
          _.createElement(
            _.Fragment,
            null,
            _ &&
              _.createElement(_, {
                strError: _,
              }),
            _.createElement(_, null),
            _.createElement(
              _._,
              null,
              _.createElement(
                _,
                {
                  label: (0, _._)("#App_Landing_IntendedReleaseDateTitle"),
                },
                _.createElement(_, {
                  rtSelectedDate: _,
                  setSelectedDate: _,
                }),
                _.createElement(_, null),
              ),
              _.createElement(
                _,
                {
                  label: (0, _._)("#App_Landing_PublicDateDisplayTitle"),
                },
                _.createElement(_._, {
                  rtSteamReleaseDate: _,
                  value: _,
                  onChange: _,
                }),
                _.createElement(
                  "p",
                  null,
                  (0, _._)("#App_Landing_ReleaseDateStorePage"),
                ),
                _.createElement(
                  "p",
                  null,
                  (0, _._)("#App_Landing_ReleaseDateStoreListing"),
                ),
              ),
            ),
            _.createElement(
              "div",
              {
                className: _.ReleaseColumnFooter,
              },
              (0, _._)(
                "#App_Landing_NeedHelpWithReleaseDates",
                _.createElement("a", {
                  target: "_blank",
                  href: `${_._.PARTNER_BASE_URL}doc/store/coming_soon`,
                }),
                _.createElement("a", {
                  target: "_blank",
                  href: `${(0, _._)()}wizard/HelpWithPublishing`,
                }),
              ),
            ),
            _.createElement(_, null),
          )
        );
      });
      function _(_) {
        const { strError: _ } = _;
        return _.createElement(
          "div",
          {
            className: _.ErrorBox,
          },
          _,
        );
      }
      function _() {
        const {
          bIsComingSoon: _,
          bIsStorePageReviewed: _,
          bIsWaitingForBuildReview: __webpack_require__,
          bIsFirstSelfPublishingApp: _,
          rtEarliestDate: _,
        } = _();
        return _ && _
          ? __webpack_require__
            ? _.createElement(
                _,
                null,
                (0, _._)("#App_Landing_Release_EarliestDate_BuildReview"),
              )
            : _.createElement(
                _,
                null,
                (0, _._)("#App_Landing_Release_EarliestDate", (0, _._)(_)),
              )
          : _
            ? _.createElement(
                _,
                null,
                (0, _._)("#App_Landing_Release_EarliestDate_TwoWeeks30Days"),
              )
            : _.createElement(
                _,
                null,
                (0, _._)("#App_Landing_Release_EarliestDate_TwoWeeks"),
              );
      }
      function _(_) {
        const {
            fnCloseModal: _,
            fnSubmit: __webpack_require__,
            children: _,
          } = _,
          { bCanUpdateComingSoonDate: _ } = _() || {
            bCanUpdateComingSoonDate: !0,
          };
        return _.createElement(
          _._,
          {
            active: !0,
            className: _.ReleaseDateModal,
            onDismiss: _,
          },
          _.createElement(
            _._,
            null,
            (0, _._)(
              _
                ? "#App_Landing_Set_Release_Date"
                : "#App_Landing_Change_Release_Date",
            ),
          ),
          _.createElement(
            _._,
            {
              className: _.ReleaseDateRequestBody,
            },
            _,
          ),
          _.createElement(_._, {
            bOKDisabled: !__webpack_require__,
            onCancel: _,
            strCancelText: (0, _._)("#App_Landing_Requested_Date_Cancel"),
            onOK: __webpack_require__,
            strOKText: (0, _._)("#App_Landing_Requested_Date_Update"),
          }),
        );
      }
      function _(_) {
        const { label: _, children: __webpack_require__ } = _;
        return _.createElement(
          _._,
          {
            className: _.Column,
          },
          _.createElement(
            "div",
            {
              className: _.ColumnLabel,
            },
            _,
            ":",
          ),
          _.createElement(
            "div",
            {
              className: _.ColumnContent,
            },
            __webpack_require__,
          ),
        );
      }
      function _(_) {
        const { rtSelectedDate: _, setSelectedDate: __webpack_require__ } = _,
          { bCanUpdateComingSoonDate: _, rtEarliestDate: _ } = _();
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(_._, {
            bWeekdaysOnly: !0,
            bNoDefaultDate: !0,
            disabled: !_,
            nEarliestTime: _,
            fnGetTimeToUpdate: () => _,
            fnSetTimeToUpdate: __webpack_require__,
            className: _.DatePicker,
            bShowTimeZone: !0,
            strAlsoShowTimeZone: _._,
          }),
        );
      }
      function _(_) {
        const {
          bCanUpdateComingSoonDate: _,
          rtReleaseDate: __webpack_require__,
        } = _();
        return _
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "p",
                null,
                (0, _._)("#App_Landing_Set_Release_Date_SetIntended"),
              ),
              _.createElement(
                "p",
                null,
                (0, _._)("#App_Landing_Set_Release_Date_Weekends"),
              ),
              _.createElement(
                "p",
                null,
                (0, _._)("#App_Landing_Set_Release_Date_PacificTime"),
              ),
            )
          : _.createElement(
              "p",
              null,
              (0, _._)(
                (0, _._)(
                  "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc",
                  (0, _._)(__webpack_require__),
                ),
                _.createElement("a", {
                  href: `${(0, _._)()}wizard/HelpWithPublishing?issueid=905`,
                }),
              ),
            );
      }
      function _(_) {
        return _.createElement(
          "span",
          {
            className: _.BlueNote,
          },
          _.children,
        );
      }
      function _(_) {
        const {
          rtEarliestDate: _,
          strReleaseState: __webpack_require__,
          bCanUpdateComingSoonDate: _,
        } = _();
        return "prerelease" != __webpack_require__ || _
          ? null
          : _.createElement(
              "div",
              {
                className: _.PublishNowWarning,
              },
              (0, _._)(
                "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note",
                (0, _._)(_),
              ),
            );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            bIsGameEdit: _,
            unAppID: __webpack_require__,
            rgEarliestAdvancedAccessDate: _,
          } = _,
          [_, _] = _.useState(_.rtReleaseDate),
          [_, _] = _.useState(_.strComingSoonDisplay),
          [_, _] = _.useState(!1),
          [_, _] = _.useState(!1),
          _ = _.useCallback(() => _(!0), []),
          _ = _.useCallback(() => _(!1), []),
          _ = _.useCallback((_, _, _) => {
            _(_), _(_), _(!1), _ && _(!0);
          }, []);
        return _.createElement(
          _.Fragment,
          null,
          _ &&
            _.createElement(_, {
              appid: __webpack_require__,
              onClose: _,
              onCommit: _,
            }),
          _ &&
            _.createElement(_, {
              appid: __webpack_require__,
              bIsGameEdit: _,
              closeModal: () => _(!1),
            }),
          _.createElement(
            "div",
            {
              className: (0, _._)(_.ReleaseDateInfoCtn, _ && _.GameEditCtn),
            },
            _.createElement(
              "div",
              {
                className: _.ReleaseDateContent,
              },
              _.createElement(
                _,
                {
                  label: (0, _._)("#App_Landing_SpecifiedReleaseDate"),
                },
                _.createElement(_, {
                  rtReleaseDate: _,
                }),
              ),
              _.createElement(
                _,
                {
                  label: (0, _._)("#App_Landing_CustomersSeeReleaseDate"),
                },
                _.createElement(
                  "div",
                  {
                    className: (0, _._)(_.BigField, _ ? _.Set : _.Unset),
                  },
                  _
                    ? (0, _._)(_, _)
                    : (0, _._)("#App_Landing_UnsetReleaseDate"),
                ),
              ),
            ),
            _.createElement(
              "div",
              {
                className: _.EditButton,
                onClick: _,
              },
              _.createElement("div", {
                className: (0, _._)(_.Spacer, _.Top),
              }),
              _.createElement(
                "div",
                {
                  className: _.EditButtonIcon,
                },
                _.createElement(_.ffu, null),
              ),
              _.createElement("div", {
                className: (0, _._)(_.Spacer, _.Bottom),
              }),
            ),
          ),
          1e3 * _ > new Date().getTime() &&
            _.createElement(
              _,
              {
                label: (0, _._)("#App_Landing_EarliestAdvancedAccessDate"),
              },
              _.createElement(_, {
                rtReleaseDate: _,
              }),
            ),
        );
      }
      function _(_) {
        const { rtReleaseDate: _ } = _;
        return _
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                {
                  className: (0, _._)(_.BigField, _.Set),
                },
                (0, _._)(_),
              ),
              _.createElement(
                "div",
                {
                  className: (0, _._)(_.SubField, _.Set),
                },
                (0, _._)(
                  _,
                  {},
                  {
                    timeZoneName: "short",
                  },
                ),
              ),
            )
          : _.createElement(
              "div",
              {
                className: (0, _._)(_.BigField, _.Unset),
              },
              (0, _._)("#App_Landing_UnsetReleaseDate"),
            );
      }
      function _(_) {
        return _.createElement(
          "div",
          {
            className: _.LabelField,
          },
          _.createElement(
            "div",
            {
              className: _.Label,
            },
            _.label,
          ),
          _.children,
        );
      }
      function _(_) {
        const { appid: _, bIsGameEdit: __webpack_require__, closeModal: _ } = _,
          _ = _.useCallback(() => {
            __webpack_require__
              ? (window.TabSelect("tab_publish"), window.scrollTo(0, 0))
              : (window.location.href =
                  _._.GameEditByAppID(_.toString()) + "?activetab=tab_publish"),
              _();
          }, [_, __webpack_require__, _]);
        return _.createElement(
          _._,
          {
            active: !0,
          },
          _.createElement(_._, {
            strTitle: (0, _._)("#App_Landing_ReleaseDate_ChangesSaved"),
            strDescription: (0, _._)("#App_Landing_Release_PublishStorePrompt"),
            strOKButtonText: (0, _._)("#App_Landing_Release_PrepareToPublish"),
            onOK: _,
            strCancelButtonText: (0, _._)("#Button_OK"),
            closeModal: _,
          }),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      let _ = {
        GameEdit: (_, _) => `/admin/game/${_}/${_}`,
        PackageEdit: (_, _) => `/admin/store/${_}/${_}`,
        BundleEdit: (_, _) => `/bundles/${_}/${_}`,
        GameEditByAppID: (_) => `/admin/game/editbyappid/${_}`,
        ReviewPriceProposals: () => "/admin/reviewpricesubmissions/",
        PackageLanding: (_) => `/store/packagelanding/${_}`,
      };
      const _ = ["edit", "diff", "revert", "prepare", "publish"],
        _ = [
          "package",
          "packagesave",
          "packagediff",
          "packagerevert",
          "packageprepare",
          "packagepublish",
        ],
        _ = ["view", "preparestore", "revertstore", "savestore", "publish"];
    },
  },
]);
