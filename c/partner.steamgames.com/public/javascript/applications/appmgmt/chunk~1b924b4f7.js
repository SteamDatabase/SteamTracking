(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7043],
  {
    chunkid: (module) => {
      module.exports = {
        PriceCell: "_1sKIcxV1HaEWCa1x_sSuVT",
        PricePrefix: "gPcNwuh4LJPmwRZrAbrA5",
        PriceSuffix: "_3AEJb3AH01qQaG89JOYAh4",
        PackagePricingContext: "_3_niTWrZ8h834BjbLqyByP",
        EditablePrice: "pm5xM6Dyy-9XY0g9TpjX1",
        PriceInput: "_1PcwXjG-2t5JOJuL7yhOYG",
        USD: "_1C7qRJ6YdGWEwEK4QsMRUX",
        ProposedPrice: "rVkmDwpTOXR4DqdBdbiPf",
        ApprovedCanPublish: "_1JBd8mxmIpyOChqhkSKSUg",
        ChangedLocally: "_5mvGWs3IDSRLfxvHx8wig",
        WarningPrice: "_1Qd5uW_BK8PBDJiDBjDCPN",
        SevereWarningPrice: "_1o6zP8gegcka6hdQA2lJjv",
        BadPrice: "_18aiu0HZznAMnGQfWExtTm",
        PriceChange: "w-K7qF60ELXWtEjymcY68",
        NewPrice: "_3sgbtvMYimrD0kSs3VCoPx",
        PriceAlert: "_2eadUvk4zK7FL9FFvy3Gd2",
        PriceChangeArrow: "_1z0l2rhYAxXf6M_tgnczgZ",
        PriceIncrease: "_2jQyP7o7hbWM4EhAkKLAks",
        PricePopout: "_1AoyzK2lSPVwQJoIYEjFbR",
        DetailRow: "_3P_fJH02fBcdGM2etenWu7",
        DetailLabel: "_3RXb3FOdpsOt-aVMvfnb6W",
        DetailPrice: "_2k3CVLd6A1QAixKOkfGx6P",
        DetailButton: "_3ILP7OdXtGjDaSvJqI81RV",
        Disabled: "_3mZHsQVQB8w84OblleAq68",
        HoverToolTip: "_36qS74l1tXSXwGdyfIFQ-G",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PriceGuidelinesPicker: "_2skmsPR7jCBo5xHN2v_E6A",
        SelectionIndicator: "krnfTfrwAOa14We87yU4k",
        GuidelinesPanel: "_29sQa7P4ANi-KFpS_lkroj",
        GuidelinesDescription: "_3poXK_qmmnRcHLvBGFqi8h",
        GuidelinesGrid: "_1Kz7R_x889mAnYo3uORnzL",
        GridElement: "_1r_b9RJn1Ca6KSjtSm7RPF",
        CurrentPrice: "_3wZdsoh1-V6RQ2rsPkj-ga",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PopoverMenu: "_2i2FUBZKGyiP5Sb6tuASpO",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      let _ = null;
      function _(_) {
        const { packageID: _, strPriceKey: _ } = _,
          {
            nPriceInCents: _,
            nPublishedPriceInCents: _,
            nProposedPriceInCents: _,
            nSuggestedPriceInCents: _,
            fnSetPrice: _,
          } = (0, _._)(_, _),
          { nPriceInCents: _ } = (0, _._)(_, "USD"),
          _ = !(!_ || (_ && _ == _)),
          _ = (0, _._)(_),
          _ = _ && _(_.rtSubmitted),
          { data: _ } = (0, _._)(_?.submitterID),
          _ = _ ? _.m_strPlayerName : _?.submitterID,
          _ = _?.eState == _._;
        return (_ || _ || _) && _ == _ + _
          ? (0, _.jsxs)("div", {
              className: _().PricePopout,
              children: [
                !!_ &&
                  (0, _.jsxs)(_._, {
                    className: _().DetailRow,
                    direction: "left",
                    toolTipContent: (0, _._)(
                      "#PricingDashboard_CurrentPriceOnStore_ttip",
                    ),
                    children: [
                      (0, _.jsx)("div", {
                        className: _().DetailLabel,
                        children: (0, _._)(
                          "#PricingDashboard_CurrentPriceOnStore",
                        ),
                      }),
                      (0, _.jsx)("div", {
                        className: _().DetailPrice,
                        children: (0, _._)(_, _).join(""),
                      }),
                      (0, _.jsx)(_._, {
                        className: (0, _._)(
                          _().DetailButton,
                          _ == _ && _().Disabled,
                        ),
                        onClick: () => _(_),
                        bDisabled: _ == _,
                        toolTipContent: (0, _._)(
                          "#PricingDashboard_UseThisOldPrice_ttip",
                        ),
                        children: (0, _._)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                _ &&
                  (0, _.jsxs)(_._, {
                    className: _().DetailRow,
                    direction: "left",
                    toolTipContent: _
                      ? (0, _._)("#PricingDashboard_ApprovedPrice_ttip")
                      : (0, _._)("#PricingDashboard_ProposedPrice_ttip", _, _),
                    children: [
                      (0, _.jsx)("div", {
                        className: _().DetailLabel,
                        children: (0, _._)(
                          _
                            ? "#PricingDashboard_ApprovedPrice"
                            : "#PricingDashboard_ProposedPrice",
                        ),
                      }),
                      (0, _.jsx)("div", {
                        className: _().DetailPrice,
                        children: (0, _._)(_, _).join(""),
                      }),
                      (0, _.jsx)(_._, {
                        className: (0, _._)(
                          _().DetailButton,
                          _ == _ && _().Disabled,
                        ),
                        onClick: () => _(_),
                        bDisabled: _ == _,
                        toolTipContent: (0, _._)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, _._)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                !!_ &&
                  (0, _.jsxs)(_._, {
                    className: _().DetailRow,
                    direction: "left",
                    toolTipContent: _._.Localize(
                      "#PricingDashboard_Method_SuggestedPrice_ttip",
                      (0, _._)(_, "USD").join(""),
                    ),
                    children: [
                      (0, _.jsx)("div", {
                        className: _().DetailLabel,
                        children: _._.Localize(
                          "#PricingDashboard_Method_SuggestedPrice",
                        ),
                      }),
                      (0, _.jsx)("div", {
                        className: _().DetailPrice,
                        children: (0, _._)(_, _).join(""),
                      }),
                      (0, _.jsx)(_._, {
                        className: (0, _._)(
                          _().DetailButton,
                          _ == _ && _().Disabled,
                        ),
                        onClick: () => _(_),
                        bDisabled: _ == _,
                        toolTipContent: (0, _._)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, _._)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
              ],
            })
          : null;
      }
      function _(_) {
        const { cell: _, row: _ } = _,
          _ = _.original.packageID,
          _ = _.getValue(),
          {
            nPriceInCents: _,
            nPublishedPriceInCents: _,
            nProposedPriceInCents: _,
            fnSetPrice: _,
          } = (0, _._)(_, _),
          [_, _, _] = (0, _._)(_, _),
          _ = (0, _._)(_),
          _ = _.useRef(void 0),
          { strClassName: _ } = _(_, _),
          _ = "USD" == _,
          _ = _ ?? _,
          _ = _ != _;
        return (0, _.jsxs)("div", {
          ref: _,
          onKeyDown: _._,
          className: _,
          children: [
            _ &&
              (0, _.jsx)(_, {
                nPriceInCents: _,
                nSavedPriceInCents: _,
              }),
            (0, _.jsx)("div", {
              className: _().PricePrefix,
              children: _ && _,
            }),
            (0, _.jsx)(_._, {
              menuTarget: (0, _.jsx)("div", {
                className: _().EditablePrice,
                children: (0, _.jsx)(_._, {
                  value: _,
                  className: _().PriceInput,
                  onChange: (_) => {
                    const _ = _.target.value.replace(/[^0-9]/g, "");
                    let _ = Number(_ || 0);
                    if (Number.isNaN(_)) return;
                    _.bWholeUnitsOnly && (_ *= 100);
                    const _ = 2147483647;
                    _ > _ && (_ = _), _(_);
                  },
                  onFocus: () => {
                    _ = _ + _;
                  },
                }),
              }),
              direction: "up",
              interactionMode: _._,
              dismissOnClick: !0,
              renderWhenClosed: !1,
              children: (0, _.jsx)(_, {
                packageID: _,
                strPriceKey: _,
              }),
            }),
            (0, _.jsx)("div", {
              className: _().PriceSuffix,
              children: _ && _,
            }),
            _ &&
              (0, _.jsx)(_, {
                packageID: _,
                appids: _.original.appids,
                bCanSetToFree: _.original.bCanSetToFree,
              }),
            (0, _.jsx)(_, {
              packageID: _,
              strPriceKey: _,
            }),
          ],
        });
      }
      function _(_) {
        const { packageID: _, appids: _, bCanSetToFree: _ } = _,
          { fnApplyGuidelines: _ } = (0, _._)((0, _._)());
        return (0, _.jsx)(_._, {
          fnGetUSDPriceInCents: () => (0, _._)(_, "USD"),
          fnOnUpdate: (_) => _(_, _),
          strDescription: _._.Localize(
            "#PricingDashboard_GuidelinesPickerDescription_New",
          ),
          nPackageID: _,
          appids: _,
          bCanSetToFree: _,
        });
      }
      function _(_) {
        const { packageID: _, strPriceKey: _ } = _,
          { strPriceWarning: _, bBadPrice: _, bShowWarningIcon: _ } = _(_, _);
        return _
          ? (0, _.jsx)(_._, {
              className: _().PriceAlert,
              strTooltipClassname: _().HoverToolTip,
              toolTipContent: _,
              direction: "top",
              children: (0, _.jsx)(_.eTF, {
                color: _ ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            })
          : null;
      }
      const _ = 2.25,
        _ = 0.5;
      function _(_, _) {
        const {
            nPriceInCents: _,
            nPublishedPriceInCents: _,
            nProposedPriceInCents: _,
            nMinPriceInCents: _,
            nMaxPriceInCents: _,
            nMaxDiscountPercentage: _,
            nSuggestedPriceInCents: _,
          } = (0, _._)(_, _),
          _ = (0, _._)(_),
          _ = "USD" == _,
          _ = _ != (_ ?? _),
          _ = _ < _,
          _ = !!_ && _ > _,
          _ = !!_ && _ > _ * _,
          _ = !!_ && _ < _ * _,
          _ = !!_ && _ < _ && !!_,
          _ = !!_ && _ == _ && !!_;
        let _ = !1;
        _
          ? (_ = (0, _._)("#PricingDashboard_PriceIncreaseDisallowed"))
          : _ && !_
            ? (_ = (0, _._)("#PricingDashboard_PriceTooLow_Grandfathered"))
            : _
              ? (_ = (0, _._)(
                  "#PricingDashboard_PriceTooLow",
                  (0, _._)(_, _).join(""),
                ))
              : _
                ? (_ = (0, _._)(
                    "#PricingDashboard_PriceMuchHigherThanMethod",
                    (0, _._)(_, _).join(""),
                  ))
                : _ && _
                  ? (_ = (0, _._)(
                      "#PricingDashboard_PriceMuchLowerThanMethod_AndLimitDiscount",
                      (0, _._)(_, _).join(""),
                      _,
                    ))
                  : _
                    ? (_ = (0, _._)(
                        "#PricingDashboard_PriceMuchLowerThanMethod",
                        (0, _._)(_, _).join(""),
                      ))
                    : _
                      ? (_ = (0, _._)(
                          "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                          _,
                        ))
                      : _ && (_ = (0, _._)("#PricingDashboard_PriceCheap", _));
        const _ = _ || _,
          _ = _ || _,
          _ = _ || _ || _,
          _ = !(_ || !_ || (_ && _ == _)),
          _ = _?.eState == _._,
          _ = (0, _._)(
            _().PriceCell,
            _ && _().USD,
            _ && _().ChangedLocally,
            _ && _().ProposedPrice,
            _ && _().ApprovedCanPublish,
            _ && _().WarningPrice,
            _ && _().SevereWarningPrice,
            _ && _().BadPrice,
          );
        return _.useMemo(
          () => ({
            strPriceWarning: _,
            strClassName: _,
            bBadPrice: _,
            bShowSevereWarning: _,
            bShowWarningIcon: _,
          }),
          [_, _, _, _, _],
        );
      }
      function _(_) {
        const { nPriceInCents: _, nSavedPriceInCents: _ } = _;
        let _ = null,
          _ = null,
          _ = null,
          _ = null;
        if (_) {
          const _ = Math.ceil((100 * (_ - _)) / _),
            _ = _ > _;
          (_ = _
            ? (0, _._)("#PricingDashboard_PriceIncreaseBy", _ + "%")
            : (0, _._)("#PricingDashboard_PriceLowerBy", _ + "%")),
            (_ = (0, _._)(_().PriceChange, _ && _().PriceIncrease)),
            (_ = (0, _.jsx)("div", {
              className: _().PriceChangeArrow,
              children: (0, _.jsx)(_.i3G, {
                angle: _ ? 0 : 180,
              }),
            })),
            (_ = _ + "%");
        } else
          (_ = (0, _._)("#PricingDashboard_PriceIsNew_Short")),
            (_ = (0, _._)(_().NewPrice));
        return (0, _.jsxs)(_._, {
          className: _,
          strTooltipClassname: _().HoverToolTip,
          toolTipContent: _,
          direction: "top",
          children: [_, _],
        });
      }
      function _(_) {
        return new Date(1e3 * _).toLocaleString(_._.GetPreferredLocales(), {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return (_) => {
          _?.(_), _?.(_);
        };
      }
      function _(_) {
        const {
            direction: _,
            interactionMode: _ = _._,
            ignoreHorizontal: _,
            ignoreVertical: _,
            dismissOnClick: _,
            menuTarget: _,
            className: _,
            children: _,
            renderWhenClosed: _ = !0,
            ..._
          } = _,
          {
            isShowingMenu: _,
            triggerProps: _,
            menuProps: _,
            closeMenu: _,
          } = (0, _._)(_),
          _ = _.useRef(null),
          _ = (0, _._)(_, _.props.navRef),
          _ = _.useRef(null);
        return (
          _.useEffect(() => {
            _
              ? _.current?.TakeFocus()
              : _.current?.BFocusWithin() && _.current?.TakeFocus();
          }, [_]),
          (0, _.jsxs)(_.Fragment, {
            children: [
              _.cloneElement(_, {
                ..._,
                onMouseEnter: _(_.props.onMouseEnter, _.onMouseEnter),
                onMouseLeave: _(_.props.onMouseLeave, _.onMouseLeave),
                navRef: _,
              }),
              (0, _.jsx)(_._, {
                ..._,
                ..._,
                className: _()(_.className, _),
                navRef: _,
                onCancel: _,
                onFocusWithin: (_) => !_ && _(),
                childFocusDisabled: !_,
                children: (0, _.jsx)(_._, {
                  children: (_ || _) && _,
                }),
              }),
            ],
          })
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
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
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_.k_FreeToPlay = "freetoplay"), (_.k_Free = "free");
      })(_ || (_ = {}));
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            strButtonOverride: _,
            appids: _,
            nPackageID: _,
            onClick: _,
          } = _,
          _ = _(),
          [_, _, _] = (0, _._)();
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_._, {
              toolTipContent: _
                ? _._.Localize("#FreeOnDemand_Button_ttip")
                : _._.Localize("#FreeOnDemand_Button_disabled_ttip"),
              children: (0, _.jsx)(_._, {
                onClick: () => {
                  _?.(), _();
                },
                color: "dull",
                children: _ || _._.Localize("#FreeOnDemand_Button"),
              }),
            }),
            (0, _.jsx)(_._, {
              active: _,
              children:
                _ && _ && 1 == _.length
                  ? (0, _.jsx)(_, {
                      closeModal: _,
                      nPackageID: _,
                      nAppID: _[0],
                    })
                  : (0, _.jsx)(_, {
                      closeModal: _,
                    }),
            }),
          ],
        });
      }
      function _(_) {
        const { closeModal: _, nAppID: _, nPackageID: _ } = _,
          [_, _] = (0, _.useState)(_.k_FreeToPlay),
          _ = (function (_, _) {
            return (0, _._)({
              mutationKey: ["settofree", _],
              mutationFn: async (_) => {
                const { displayOption: _, fnOnStoreSaveSucceed: _ } = _;
                if (!_ || !_) throw new Error("Invalid parameters provided");
                {
                  const _ = new FormData();
                  if (
                    (_.set("sessionid", (0, _._)()),
                    _.set("appid", "" + _),
                    _.set(
                      "displaytext",
                      _ == _.k_Free
                        ? "#PurchaseButton_Free"
                        : "#PurchaseButton_FreeToPlay",
                    ),
                    !(
                      await fetch(
                        `${_._.PARTNER_BASE_URL}store/ajaxupdatef2pstore`,
                        {
                          method: "POST",
                          credentials: "include",
                          body: _,
                        },
                      )
                    )._)
                  )
                    throw new Error(
                      _._.Localize("#FreeOnDemand_Store_Error", _),
                    );
                }
                _ && _();
                {
                  const _ = new FormData();
                  if (
                    (_.set("sessionid", (0, _._)()),
                    _.set("action", "save"),
                    _.set("billing_type", "12"),
                    !(
                      await fetch(
                        `${_._.PARTNER_BASE_URL}store/ajaxpackagesave/${_}`,
                        {
                          method: "POST",
                          credentials: "include",
                          body: _,
                        },
                      )
                    )._)
                  )
                    throw new Error(
                      _._.Localize("#FreeOnDemand_Package_Error", _),
                    );
                }
              },
            });
          })(_, _),
          _ = (0, _._)();
        return _.bLoading
          ? (0, _.jsx)(_._, {
              state: _,
              strDialogTitle: _._.Localize("#FreeOnDemand_Title"),
              closeModal: () => {
                window.location.replace(
                  `${_._.PARTNER_BASE_URL}store/packagelanding/${_}`,
                ),
                  _();
              },
            })
          : (0, _.jsxs)(_._, {
              strTitle: _._.Localize("#FreeOnDemand_Title"),
              strDescription: _._.Localize("#FreeOnDemand_Desc"),
              strOKButtonText: _._.Localize("#FreeOnDemand_Button_Confirm"),
              onCancel: _,
              onOK: async () => {
                try {
                  _.fnSetLoading(!0),
                    _.fnSetThrobber(
                      _._.Localize("#FreeOnDemand_Convert_Store"),
                    ),
                    await _.mutateAsync({
                      displayOption: _,
                      fnOnStoreSaveSucceed: () => {
                        _.fnSetThrobber(
                          _._.Localize("#FreeOnDemand_Convert_Package"),
                        );
                      },
                    }),
                    _.fnSetSuccess(!0),
                    _.fnSetStrSuccess(
                      _._.Localize("#FreeOnDemand_ConvertSuccess"),
                    );
                } catch (_) {
                  _.fnSetError(!0),
                    _.fnSetStrError(
                      _ instanceof Error
                        ? _.message
                        : _._.Localize("#Error_ErrorCommunicatingWithNetwork"),
                    );
                }
              },
              children: [
                (0, _.jsx)("br", {}),
                (0, _.jsxs)(_._, {
                  paddingTop: "4",
                  children: [
                    (0, _.jsx)(_._, {
                      size: "4",
                      children: _._.Localize("#FreeOnDemand_Radio"),
                    }),
                    (0, _.jsx)(_._, {
                      padding: "4",
                      background: "greyneutral-6",
                      radius: "sm",
                      children: (0, _.jsx)(_._, {
                        value: _,
                        options: [_.k_FreeToPlay, _.k_Free],
                        getOptionLabel: (_) =>
                          _ == _.k_Free
                            ? _._.Localize("#FreeOnDemand_Radio_Free")
                            : _._.Localize("#FreeOnDemand_Radio_FreeToPlay"),
                        onValueChange: _,
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
      function _(_) {
        const { closeModal: _ } = _,
          _ = `${_._.SUPPORT_BASE_URL}wizard/HelpWithPublishing?issueid=915`;
        return (0, _.jsxs)(_._, {
          strTitle: _._.Localize("#FreeOnDemand_Title"),
          strDescription: _._.Localize("#FreeOnDemand_Desc_NotPermitted"),
          closeModal: _,
          children: [
            (0, _.jsx)("br", {}),
            (0, _.jsx)("br", {}),
            (0, _.jsx)("a", {
              href: _,
              target: "_blank",
              rel: "noreferrer",
              children: _,
            }),
          ],
        });
      }
      function _() {
        const [_] = (0, _.useState)(
          (0, _._)("bCanSetFree", "application_config"),
        );
        return _;
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = (0, _.jsx)("button", {
          className: _().PriceGuidelinesPicker,
          children: (0, _.jsx)(_.GB9, {}),
        });
        return (0, _.jsx)(_, {
          menuTarget: _,
          ..._,
        });
      }
      function _(_) {
        const { strButton: _, strTooltip: _ } = _,
          _ = (0, _.jsxs)(_._, {
            onClick: () => {},
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: _,
                children: (0, _.jsx)("span", {
                  children: _,
                }),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().SelectionIndicator,
                  "DialogDropDown_Arrow",
                ),
                children: (0, _.jsx)(_.GB9, {}),
              }),
            ],
          });
        return (0, _.jsx)(_, {
          menuTarget: _,
          ..._,
        });
      }
      function _(_) {
        const { menuTarget: _ } = _,
          _ = _.useRef(null);
        return (0, _.jsx)(_._, {
          menuTarget: _,
          direction: "down",
          interactionMode: _._,
          ref: _,
          children: (0, _.jsx)(_, {
            onSelect: () => _.current?.close(),
            ..._,
          }),
        });
      }
      function _(_) {
        const {
            fnGetUSDPriceInCents: _,
            fnOnUpdate: _,
            strDescription: _,
            bCanSetToFree: _,
            nPackageID: _,
            onSelect: _,
            appids: _,
          } = _,
          _ = (0, _._)(),
          _ = _();
        if (!_) return null;
        const _ = _.GetUSDPricePointsInCents();
        return (0, _.jsxs)("div", {
          className: _().GuidelinesPanel,
          children: [
            (0, _.jsx)("div", {
              className: _().GuidelinesDescription,
              children: _ || _._.Localize("#PricingGuideline_Default"),
            }),
            (0, _.jsxs)("div", {
              className: _().GuidelinesGrid,
              children: [
                void 0 !== _ &&
                  (0, _.jsx)(
                    "div",
                    {
                      className: _().GridElement,
                      children: (0, _.jsx)(_._, {
                        nPackageID: _,
                        strButtonOverride: _._.Localize(
                          "#FreeOnDemand_InlineOption",
                        ),
                        appids: _,
                      }),
                    },
                    "settofree",
                  ),
                _.map((_) =>
                  (0, _.jsx)(
                    "button",
                    {
                      onClick: () => {
                        _(), __webpack_require__(_);
                      },
                      className: (0, _._)({
                        [_().GridElement]: !0,
                        [_().CurrentPrice]: _ == _,
                      }),
                      children: (0, _._)(_, _._),
                    },
                    _,
                  ),
                ),
              ],
            }),
          ],
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      const _ = {};
      (_.arabic = () =>
        __webpack_require__._("chunkid").then(_._.bind(_, 2944, 19))),
        (_.brazilian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 48898, 19))),
        (_.bulgarian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 6825, 19))),
        (_.czech = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 38323, 19))),
        (_.danish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 64341, 19))),
        (_.dutch = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 39606, 19))),
        (_.english = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 42692, 19))),
        (_.finnish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 87239, 19))),
        (_.french = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 25516, 19))),
        (_.german = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 63714, 19))),
        (_.greek = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 31275, 19))),
        (_.hungarian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 59469, 19))),
        (_.indonesian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 7644, 19))),
        (_.italian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 1724, 19))),
        (_.japanese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 34731, 19))),
        (_.koreana = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 14219, 19))),
        (_.latam = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 83059, 19))),
        (_.malay = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 57036, 19))),
        (_.norwegian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 62220, 19))),
        (_.polish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 35501, 19))),
        (_.portuguese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 69977, 19))),
        (_.romanian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 57175, 19))),
        (_.russian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 13757, 19))),
        (_.schinese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 80216, 19))),
        (_.spanish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 34036, 19))),
        (_.swedish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 59365, 19))),
        (_.tchinese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 54763, 19))),
        (_.thai = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 65666, 19))),
        (_.turkish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 38052, 19))),
        (_.ukrainian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 50290, 19))),
        (_.vietnamese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 56627, 19)));
      const _ = (0, _._)(async function (_) {
        if (_[_]) return _[_]();
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(async function () {
        if (
          "undefined" == typeof HTMLElement ||
          "object" != typeof HTMLElement.prototype ||
          !("popover" in HTMLElement.prototype)
        ) {
          (
            await __webpack_require__
              ._("chunkid")
              .then(__webpack_require__.bind(__webpack_require__, "chunkid"))
          ).apply();
        }
      })();
      const _ = 0,
        _ = 1,
        _ = 2;
      function _(_) {
        const {
            direction: _,
            ignoreHorizontal: _,
            ignoreVertical: _,
            dismissOnClick: _,
            interactionMode: _ = _,
          } = _,
          _ = (0, _.useRef)(null),
          _ = (0, _.useRef)(!1),
          _ = (0, _.useRef)(!1),
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useMemo)(
            () =>
              (function (_) {
                const [_, _] = (0, _._)(_, "-");
                return "left" === _ || "right" === _ ? [void 0, _] : [_, _];
              })(_),
            [_],
          ),
          _ = (0, _.useCallback)(() => {
            if (!_.current || !_.current) return;
            const _ = _.current.getBoundingClientRect(),
              _ = _.current.getBoundingClientRect();
            let _ = _;
            const _ = _.current.matches(":dir(rtl)");
            _ && ("left" === _ ? (_ = "right") : "right" === _ && (_ = "left")),
              _.current.style.setProperty("--parentWidth", `${_.width}px`),
              _.current.style.setProperty("--parentHeight", `${_.height}px`);
            let _ = 0;
            if (!_) {
              if (_.width) {
                if ("left" === _) {
                  _ = (_ ? _.right : _.left) - _.width;
                }
                if ("right" === _) {
                  const _ = _ ? _.left : _.right;
                  _ = document.body.clientWidth - (_ + _.width);
                }
                void 0 === _ &&
                  (_ = _
                    ? _.right - _.width
                    : document.body.clientWidth - (_.left + _.width)),
                  (_ = Math.min(_, 0));
              }
              "left" === _
                ? _
                  ? ((_.current.style.left = "unset"),
                    (_.current.style.right = `${document.body.clientWidth - _.right + _}px`))
                  : ((_.current.style.left = "unset"),
                    (_.current.style.right = `${document.body.clientWidth - _.left + _}px`))
                : "right" === _
                  ? _
                    ? ((_.current.style.left = `${_.left + _}px`),
                      (_.current.style.right = "unset"))
                    : ((_.current.style.left = `${_.right + _}px`),
                      (_.current.style.right = "unset"))
                  : void 0 === _ &&
                    (_
                      ? ((_.current.style.left = "unset"),
                        (_.current.style.right = `${document.body.clientWidth - _.right + _}px`))
                      : ((_.current.style.left = `${_.left + _}px`),
                        (_.current.style.right = "unset")));
            }
            _ ||
              ("down" === _
                ? ((_.current.style.top = `${_.bottom}px`),
                  (_.current.style.bottom = "unset"),
                  _.current.style.setProperty(
                    "--availableHeight",
                    document.documentElement.clientHeight - _.bottom + "px",
                  ))
                : "up" === _
                  ? ((_.current.style.top = "unset"),
                    (_.current.style.bottom =
                      document.documentElement.clientHeight - _.top + "px"),
                    _.current.style.setProperty(
                      "--availableHeight",
                      `${_.top}px`,
                    ))
                  : void 0 === _ &&
                    ((_.current.style.top = `${_.top}px`),
                    (_.current.style.bottom = "unset"),
                    _.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - _.top + "px",
                    )));
          }, [_, _, _, _]),
          _ = (0, _.useMemo)(() => {
            if (_.current) return (0, _._)(_.current);
          }, [_.current]);
        (0, _.useEffect)(
          () =>
            _
              ? (_.current?.showPopover(),
                _(),
                _?.addEventListener("scroll", _),
                window.addEventListener("scroll", _),
                () => {
                  _?.removeEventListener("scroll", _),
                    window.addEventListener("scroll", _);
                })
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  _.current?.hidePopover(),
                () => {}),
          [_, _, _],
        );
        const _ = (0, _.useCallback)(() => {
            _(), _(!0), (_.current = !0);
          }, [_]),
          _ = (0, _.useCallback)(() => {
            (_.current = !1), _.current || _(!1);
          }, []),
          _ = (0, _.useCallback)(() => {
            (_.current = !0), _(!0);
          }, []),
          _ = (0, _.useCallback)(
            (_) => {
              _.current?.contains(_.target) && _();
            },
            [_],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              _.current?.contains(_.target) && _();
            },
            [_],
          ),
          _ = (0, _.useCallback)(() => {
            (_.current = !1), _.current || _(!1);
          }, []),
          _ = (0, _.useCallback)(
            (_) => {
              _.current?.contains(_.target) && _();
            },
            [_],
          ),
          _ = (0, _.useCallback)(() => {
            _(), _();
          }, [_, _]),
          _ = (0, _.useCallback)(
            (_) => {
              "Enter" === _.key && (_.preventDefault(), _ ? _() : _());
            },
            [_, _, _],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              _.currentTarget.contains(_.relatedTarget) ||
                _.current?.contains(_.relatedTarget) ||
                _();
            },
            [_],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              _ === _ && _();
            },
            [_, _],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              const _ =
                  _.relatedTarget && !_.currentTarget.contains(_.relatedTarget),
                _ = !_.relatedTarget && !_.current;
              (_ || _) && (_(), _(!1));
            },
            [_],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              _.current?.contains(_.target) &&
                (_ && _ ? _() : _.current && _());
            },
            [_, _, _, _],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              _.current?.contains(_.target) &&
                ("Enter" === _.key && _ && _ ? _() : _(),
                "Escape" === _.key && _ && (_(), _.stopPropagation()));
            },
            [_, _, _, _],
          );
        let _;
        _ !== _ || _
          ? _ === _ && (_ = _ ? _ : _)
          : (_ = (_) => {
              _.preventDefault(), _();
            });
        const _ = {
            "aria-expanded": _,
            role: "button",
            onMouseEnter: _ === _ ? _ : void 0,
            onMouseLeave: _ === _ ? _ : void 0,
            onClick: _,
            ref: _,
            onKeyDown: _,
            onFocus: _,
            onBlur: _,
          },
          _ = {
            popover: "manual",
            ref: _,
            onMouseEnter: _,
            onMouseLeave: _,
            onFocus: _,
            onBlur: _,
            onClick: _,
            onKeyDown: _,
            className: _.PopoverMenu,
          };
        return (
          (0, _.useImperativeHandle)(
            _.ref,
            () => ({
              show: _,
              hide: _,
              close: _,
            }),
            [_, _, _],
          ),
          {
            isShowingMenu: _,
            triggerProps: _,
            menuProps: _,
            closeMenu: _,
          }
        );
      }
    },
  },
]);
