(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4017],
  {
    chunkid: (module) => {
      module.exports = {
        profile_color_preview: "_2VqhO10AlkJOsh7sPoqPcp",
      };
    },
    chunkid: (module) => {
      module.exports = {
        EditionPickerHr: "_2N7bWzRE2_6yMlW8HoWwKL",
        NeedToPublishNotification: "_1YyjMfNhBo6lWsvunbhkmG",
        EditionsEditorRow: "_1kVAFKlQN-iaGJNQM64lbU",
        ImageProvided: "_3acPE1-7PEV9Fv1BIkpb1d",
        PublishReminder: "_2bw5Zr8a6ik4-NIjVgcZSn",
        TaskDone: "_3cgXyLkVbKXYv6hxcrj0P9",
        EditionsEditorContents: "WKVcCeIwShQXxr0XjInT9",
        ErrorList: "_34AP-LqjTCmVO7oQmBRksn",
        ErrorListItems: "_3OPqG7OUgCU252R-DdB0Qj",
        EditionsEditorDialogButtons: "zHZhZ_cYU43MhqpRkvAuR",
        EditionPicker: "N1f8Ye9Eude7K2vJSL7AZ",
        EditionPickerFilterBox: "WLQyL6JRweNM6PHgWKRaB",
        HiddenColor: "_1YtkUWpJ0G7lnnX5bj8X7_",
        ReleasedColor: "_1_2YmmBAHhhpvApS2NQe-r",
        PrepurchaseColor: "_2o-Djga-h_lkGoTFS-PjlF",
        BetaColor: "_29O7AlK2wwhmKjrCxAPIRk",
        EditionsEditorSaveStatus: "_21ABdLhAaZ1KIV7osV-RYV",
        LocalizedImageSelector: "_1K9mhqXjo6xi6qVHMBwcTQ",
        Header: "_3oC7Qb8-E-MF_hxZKzOPyQ",
        UploadedImageOption: "_2F05QhQ_9_rf7qryFDLsh6",
        ExistsImageOption: "_2DTeKovr7g8Z4rrBjVNTZb",
        MissingImageOption: "_29pcde0Q7kd7ClgWo9w5NB",
        ImageDropPane: "_1RWj0soRG2Y-mtoq_nOEe3",
        DragAndDropDescriptionWithImage: "_3-2d6qJPYFImAjNB825gPq",
        DragAndDropDescriptionWithoutImage: "_2FAmjUnpcILnVdO29vdLn6",
        DeleteLink: "D_kqKamsBe39qbMqcuino",
        ErrorBox: "_20-2lEQLGnc64V46i5khL-",
        AltTextArea: "_20wBVZiv8PNqku4mQTONkN",
      };
    },
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { rgGameProfileColorDefs: _ } = _,
          _ = _.map((_) =>
            (0, _.jsxs)(
              "div",
              {
                className: "form_row_flex",
                children: [
                  (0, _.jsxs)("div", {
                    className: "form_label_flex",
                    children: ["*", _.strProfileColorLabel],
                  }),
                  (0, _.jsx)("div", {
                    className: "form_data_flex",
                    children: _(_),
                  }),
                ],
              },
              _.strProfileColorKey,
            ),
          );
        return (0, _.jsx)("div", {
          className: _().profile_colors_ctn,
          children: _,
        });
      }
      function _(_) {
        const _ = _.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
        if (!_) return null;
        const [, _, _, _] = _;
        return `${_},${_},${_}`;
      }
      function _(_) {
        const { strKVPrepend: _, bWriteAsRGBOnly: _ } = _;
        let [_, _] = _.useState(_.strCurrentColor);
        const _ = _.useRef(void 0),
          { openColorPicker: _ } = (0, _._)();
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)("input", {
              ref: _,
              type: "text",
              name: `${_ || "item[profile_colors]"}[${_.strProfileColorKey}]`,
              onChange: () => {
                _(_.current.value);
              },
              placeholder: _ ? "255,255,255" : "rgba(255, 255, 255, .5)",
              size: 20,
              value: _ ? _(_) : _,
              readOnly: !0,
            }),
            (0, _.jsx)("div", {
              className: _().profile_color_preview,
              style: {
                backgroundColor: `${_}`,
              },
              onClick: (_) => {
                _(_, {
                  color: _,
                  onChange: _,
                  disableAlpha: _,
                });
              },
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
      var _ = __webpack_require__("chunkid"),
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
        _ = __webpack_require__("chunkid");
      const _ = 748,
        _ = 896;
      class _ {
        rgSet = new Set();
        constructor(_) {
          for (const _ of _) this.rgSet.add(JSON.stringify(_));
        }
        has(_) {
          const _ = JSON.stringify(_);
          return this.rgSet.has(_);
        }
        add(_) {
          const _ = JSON.stringify(_);
          return this.rgSet.add(_), this;
        }
        delete(_) {
          const _ = JSON.stringify(_);
          return this.rgSet.delete(_);
        }
        get size() {
          return this.rgSet.size;
        }
        *[Symbol.iterator]() {
          for (const _ of this.rgSet) yield JSON.parse(_);
        }
      }
      function _(_) {
        const [_, _] = (0, _.useState)("closed"),
          _ = _.rgEditions,
          [_, _] = (0, _.useState)(new _(_)),
          _ = new Map();
        for (const _ of Object.keys(_.rgEditionsComparisonGraphics))
          _.set(_, _.rgEditionsComparisonGraphics[_]);
        const [_, _] = (0, _.useState)(() => {
            const _ = new Map();
            for (const _ of Object.keys(_.rgEditionsAltText))
              _.set(_, _.rgEditionsAltText[_]);
            return _;
          }),
          [_, _] = (0, _.useState)(_),
          _ = Object.keys(_.rgEditionsComparisonGraphics).length > 0,
          _ = (function (_, _) {
            return (0, _._)({
              mutationFn: async (_) => {
                const {
                    rgEditionsToSave: _,
                    rgGraphicsToDelete: _,
                    mapGraphicsToUpload: _,
                    mapAltText: _,
                  } = _,
                  _ = new FormData();
                _.append("sessionid", (0, _._)());
                const _ = Math.max(_.length, _.length);
                for (let _ = 0; _ < _; _++)
                  _ >= _.length
                    ? (_.append(
                        `app[related_items][editions][${_}][packageid]`,
                        "",
                      ),
                      _.append(
                        `app[related_items][editions][${_}][bundleid]`,
                        "",
                      ))
                    : _[_].packageid
                      ? (_.append(
                          `app[related_items][editions][${_}][packageid]`,
                          "" + _[_].packageid,
                        ),
                        _.append(
                          `app[related_items][editions][${_}][bundleid]`,
                          "",
                        ))
                      : _[_].bundleid
                        ? (_.append(
                            `app[related_items][editions][${_}][packageid]`,
                            "",
                          ),
                          _.append(
                            `app[related_items][editions][${_}][bundleid]`,
                            "" + _[_].bundleid,
                          ))
                        : console.log(
                            "Tried to save an edition with neither packageid or bundleid.",
                          );
                _.forEach((_, _) => {
                  _.append(
                    `edition_comparison|edition_comparision|assets|edition_comparison|image|${_}`,
                    _,
                  );
                });
                for (const _ of _)
                  _.append(`app[assets][edition_comparison][image][${_}]`, "");
                _.forEach((_, _) => {
                  _.append(
                    `app[assets][edition_comparison][image_alt_text][${_}]`,
                    _,
                  );
                });
                const _ = `${_._.PARTNER_BASE_URL}admin/game/quickupdateajax/${_}`;
                return _().post(_, _);
              },
            });
          })(_.nItemId, _),
          _ = new Map();
        for (const _ of _.rgCandidates) _.set(_.nId, _);
        let _ = null;
        if (
          _.size > 0 &&
          -1 !== _.nBasePackageId &&
          !_.has({
            packageid: _.nBasePackageId,
          })
        ) {
          const _ = _.rgCandidates.find((_) => _.nId === _.nBasePackageId);
          _ = (0, _._)(
            "#StoreAdmin_EditEditions_MustIncludeCheapestBasePageError",
            _?.strName,
            _.nBasePackageId,
          );
        }
        const _ = _.useId();
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_._, {
              active: "editor" === _ || "alert" === _,
              children: (0, _.jsxs)(_._, {
                "aria-labelledby": _,
                closeModal: () => __webpack_require__("closed"),
                children: [
                  "editor" === _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          className: _.EditionsEditorContents,
                          children: [
                            (0, _.jsx)("h2", {
                              _: _,
                              children: (0, _._)(
                                "#StoreAdmin_EditEditions_DialogTitle",
                              ),
                            }),
                            _.isPending && (0, _.jsx)(_._, {}),
                            !_.isPending &&
                              (0, _.jsxs)(_.Fragment, {
                                children: [
                                  null !== _ &&
                                    (0, _.jsxs)("div", {
                                      className: _.ErrorBox,
                                      children: [
                                        (0, _.jsx)(_._, {}),
                                        (0, _.jsx)("div", {
                                          children: _,
                                        }),
                                      ],
                                    }),
                                  (0, _.jsx)(_, {
                                    rgEditions: _,
                                    rgCandidates: _.rgCandidates,
                                    setEditions: _,
                                  }),
                                  (0, _.jsx)("div", {
                                    className: _.EditionPickerHr,
                                  }),
                                  (0, _.jsx)(_, {
                                    mapOriginalImages: _,
                                    mapImages: _,
                                    setImages: _,
                                    mapAltText: _,
                                    setAltText: _,
                                    bAppHasSteamChinaToolsEnabled:
                                      _.bAppHasSteamChinaToolsEnabled,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _.EditionsEditorDialogButtons,
                          children: [
                            (0, _.jsx)("button", {
                              className: "btn_green_white_innerfade",
                              disabled: null !== _,
                              onClick: async () => {
                                const _ = new Map();
                                _.forEach((_, _) => {
                                  _ instanceof File && _.set(_, _);
                                });
                                const _ = [];
                                _.forEach((_, _) => {
                                  _.has(_) || _.push(_);
                                }),
                                  _.mutate({
                                    rgEditionsToSave: Array.from(_),
                                    mapGraphicsToUpload: _,
                                    mapAltText: _,
                                    rgGraphicsToDelete: _,
                                  }),
                                  __webpack_require__("alert");
                              },
                              children: (0, _._)(
                                "#StoreAdmin_EditEditions_SaveButton",
                              ),
                            }),
                            (0, _.jsx)("button", {
                              onClick: () => {
                                _(new _(_)), __webpack_require__("closed");
                              },
                              children: (0, _._)(
                                "#StoreAdmin_EditEditions_CancelButton",
                              ),
                            }),
                          ],
                        }),
                        (0, _.jsx)("p", {
                          className: _.NeedToPublishNotification,
                          children: (0, _._)(
                            "#StoreAdmin_EditEditions_NeedToPublishNotice",
                            (0, _.jsx)("a", {
                              target: "_blank",
                              href: `${_._.PARTNER_BASE_URL}admin/game/edit/${_.nItemId}?activetab=tab_publish`,
                            }),
                          ),
                        }),
                      ],
                    }),
                  "alert" === _ &&
                    (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsxs)("div", {
                        className: _.EditionEditorContents,
                        children: [
                          (0, _.jsx)("h2", {
                            children: (0, _._)(
                              "#StoreAdmin_EditEditions_SavingTitle",
                            ),
                          }),
                          (0, _.jsxs)("div", {
                            className: _.EditionsEditorSaveStatus,
                            children: [
                              _.isPending &&
                                (0, _.jsxs)(_.Fragment, {
                                  children: [
                                    (0, _.jsx)(_._, {}),
                                    " ",
                                    (0, _._)("#StoreAdmin_EditEditions_Saving"),
                                  ],
                                }),
                              !_.isPending &&
                                (0, _.jsx)("span", {
                                  children: (0, _._)(
                                    "#StoreAdmin_EditEditions_Saved",
                                  ),
                                }),
                            ],
                          }),
                          (0, _.jsx)("span", {
                            className: _.PublishReminder,
                            children: (0, _._)(
                              "#StoreAdmin_EditEditions_NeedToPublishAlert",
                              (0, _.jsx)("a", {
                                target: "_blank",
                                href: `${_._.PARTNER_BASE_URL}admin/game/edit/${_.nItemId}?activetab=tab_publish`,
                              }),
                            ),
                          }),
                          (0, _.jsx)("div", {
                            className: _.EditionsEditorDialogButtons,
                            children: (0, _.jsx)("button", {
                              onClick: () => {
                                __webpack_require__("refreshing"),
                                  window.location.reload();
                              },
                              children: (0, _._)("#StoreAdmin_EditEditions_OK"),
                            }),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
            (_.rgCandidates.length > 1 || _.rgEditions.length > 0) &&
              (0, _.jsx)(_.Fragment, {
                children: (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _.EditionsEditorRow,
                    _ && _.ImageProvided,
                  ),
                  children: [
                    "closed" === _ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)("button", {
                            className: _.OpenEditorButton,
                            onClick: () => __webpack_require__("editor"),
                            children: (0, _._)(
                              "#StoreAdmin_EditEditions_ManageEditionsButton",
                            ),
                          }),
                          _?.size > 0
                            ? (0, _.jsx)("span", {
                                children: (0, _._)(
                                  "#StoreAdmin_EditEditions_ManageEditionsDescription",
                                  _.size,
                                ),
                              })
                            : (0, _.jsx)("span", {
                                children: (0, _._)(
                                  "#StoreAdmin_EditEditions_GroupEditionsDescription",
                                ),
                              }),
                          (0, _.jsx)("span", {
                            children: _
                              ? (0, _.jsx)("span", {
                                  className: (0, _._)(
                                    _.TaskDone,
                                    "icon_check_green",
                                  ),
                                  children: (0, _._)(
                                    "#StoreAdmin_EditEditions_ManageEditions_HasComparisonGraphic",
                                  ),
                                })
                              : (0, _._)(
                                  "#StoreAdmin_EditEditions_ManageEditions_NoComparisonGraphic",
                                ),
                          }),
                        ],
                      }),
                    "refreshing" === _ &&
                      (0, _.jsx)(_.Fragment, {
                        children: (0, _.jsx)(_._, {
                          size: "small",
                        }),
                      }),
                  ],
                }),
              }),
          ],
        });
      }
      const _ = (_) =>
        "bundle" === _.eType
          ? {
              bundleid: _.nId,
            }
          : {
              packageid: _.nId,
            };
      function _(_) {
        const { rgEditions: _, rgCandidates: _, setEditions: _ } = _,
          _ = new Map();
        for (const _ of _.rgCandidates) _.set(_.nId, _);
        const [_, _] = (0, _.useState)(""),
          _ = __webpack_require__.filter(
            (_) => -1 !== _.strName.toLowerCase().indexOf(_.toLowerCase()),
          );
        return (0, _.jsxs)("div", {
          className: _.EditionPicker,
          children: [
            (0, _.jsx)("p", {
              children: (0, _._)(
                "#StoreAdmin_EditEditions_GroupEditionsIntro",
                (0, _.jsx)("a", {
                  target: "_blank",
                  href: `${_._.PARTNER_BASE_URL}doc/store/manageeditions`,
                }),
              ),
            }),
            (0, _.jsx)("br", {}),
            (0, _.jsx)("h3", {
              children: (0, _._)("#StoreAdmin_EditEditions_StepNumber1"),
            }),
            (0, _.jsx)("p", {
              children: (0, _._)(
                "#StoreAdmin_EditEditions_SelectEditionsDescription",
              ),
            }),
            (0, _.jsx)("div", {
              className: _.EditionPickerFilterBox,
              children: (0, _.jsx)("input", {
                type: "text",
                placeholder: (0, _._)(
                  "#StoreAdmin_EditEditions_FilterDescription",
                ),
                value: _,
                onChange: (_) => {
                  const _ = _.target.value;
                  _(_);
                },
              }),
            }),
            (0, _.jsxs)("table", {
              children: [
                (0, _.jsx)("thead", {
                  children: (0, _.jsxs)("tr", {
                    children: [
                      (0, _.jsx)("td", {
                        children: (0, _._)(
                          "#StoreAdmin_EditEditions_ColumnEdition",
                        ),
                      }),
                      (0, _.jsx)("td", {
                        children: (0, _._)(
                          "#StoreAdmin_EditEditions_ColumnPackageTitle",
                        ),
                      }),
                      (0, _.jsx)("td", {
                        children: (0, _._)(
                          "#StoreAdmin_EditEditions_ColumnState",
                        ),
                      }),
                      (0, _.jsx)("td", {
                        children: (0, _._)(
                          "#StoreAdmin_EditEditions_ColumnPrice",
                        ),
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)("tbody", {
                  children: _.map((_) => {
                    const _ = _.has(_(_));
                    let _ = _.HiddenColor;
                    return (
                      "Released" === _.strReleaseState
                        ? (_ = _.ReleasedColor)
                        : "Prepurchase" === _.strReleaseState
                          ? (_ = _.PrepurchaseColor)
                          : "Beta" === _.strReleaseState && (_ = _.BetaColor),
                      (0, _.jsxs)(
                        "tr",
                        {
                          className: (0, _._)(_, _.EditionPickerRow),
                          children: [
                            (0, _.jsx)("td", {
                              children: (0, _.jsx)("input", {
                                type: "checkbox",
                                onChange:
                                  ((_ = _.eType),
                                  (_ = _.nId),
                                  (_) => {
                                    const _ = new _(_);
                                    _.target.checked
                                      ? __webpack_require__.add(
                                          "package" === _
                                            ? {
                                                packageid: _,
                                              }
                                            : {
                                                bundleid: _,
                                              },
                                        )
                                      : __webpack_require__.delete(
                                          "package" === _
                                            ? {
                                                packageid: _,
                                              }
                                            : {
                                                bundleid: _,
                                              },
                                        ),
                                      _(_);
                                  }),
                                checked: _,
                              }),
                            }),
                            (0, _.jsx)("td", {
                              children: _.strName,
                            }),
                            (0, _.jsx)("td", {
                              children: _.strLocalizedReleaseState,
                            }),
                            (0, _.jsx)("td", {
                              dangerouslySetInnerHTML: {
                                __html: _.strPricing,
                              },
                            }),
                          ],
                        },
                        _.nId,
                      )
                    );
                    var _, _;
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const {
            mapOriginalImages: _,
            mapImages: _,
            setImages: _,
            mapAltText: _,
            setAltText: _,
            bAppHasSteamChinaToolsEnabled: _,
          } = _,
          [_, _] = (0, _.useState)(null),
          _ = (0, _._)(_.bAppHasSteamChinaToolsEnabled),
          [_, _] = (0, _.useState)("english"),
          _ = (0, _.useRef)(null);
        let _ = null,
          _ = "missing";
        if (__webpack_require__.has(_)) {
          const _ = __webpack_require__.get(_);
          _ instanceof File
            ? ((_ = URL.createObjectURL(_)), (_ = "uploaded"))
            : ((_ = _), (_ = "exists"));
        }
        const _ = (_) =>
          __webpack_require__.has(_) &&
          __webpack_require__.get(_) instanceof File
            ? _.UploadedImageOption
            : __webpack_require__.has(_)
              ? _.ExistsImageOption
              : _.MissingImageOption;
        return (0, _.jsxs)("div", {
          className: _.LocalizedImageSelector,
          children: [
            (0, _.jsx)("h3", {
              children: (0, _._)("#StoreAdmin_EditEditions_StepNumber2"),
            }),
            (0, _.jsx)("p", {
              children: (0, _._)(
                "#StoreAdmin_EditEditions_UploadComparisonGraphicsDescription",
                _,
                _,
              ),
            }),
            (0, _.jsxs)("div", {
              className: _.Header,
              children: [
                (0, _.jsx)("input", {
                  type: "file",
                  ref: _,
                  onChange: async (_) => {
                    if (_.target.files && _.target.files[0]) {
                      const _ = _.target.files[0],
                        _ = await createImageBitmap(_);
                      if (_.width !== _ || _.height !== _)
                        return void _(
                          (0, _._)(
                            "#StoreAdmin_EditEditions_ImageSizeError",
                            _,
                            _,
                            _.width,
                            _.height,
                          ),
                        );
                      const _ = new Map(_);
                      _.set(_, _), _(_), _(null);
                    }
                  },
                  style: {
                    display: "none",
                  },
                }),
                (0, _.jsx)("select", {
                  onChange: (_) => {
                    _(_.target.value), _(null);
                  },
                  className: _(_),
                  children: (0, _._)(_, (_, _) =>
                    (0, _.jsx)(
                      "option",
                      {
                        value: _,
                        className: _(_),
                        children: _,
                      },
                      _,
                    ),
                  ),
                }),
              ],
            }),
            (0, _.jsx)("p", {
              className: _.ErrorBox,
              children:
                null !== _ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [(0, _.jsx)(_._, {}), _],
                }),
            }),
            (0, _.jsx)("div", {
              className: _.ImageDropPane,
              onClick: () => _.current?.click(),
              onDragOver: (_) => _.preventDefault(),
              onDrop: async (_) => {
                if (
                  (_.preventDefault(),
                  _.dataTransfer.files && _.dataTransfer.files[0])
                ) {
                  const _ = _.dataTransfer.files[0],
                    _ = await createImageBitmap(_);
                  if (_.width !== _ || _.height !== _)
                    return void _(
                      (0, _._)(
                        "#StoreAdmin_EditEditions_ImageSizeError",
                        _,
                        _,
                        _.width,
                        _.height,
                      ),
                    );
                  const _ = new Map(_);
                  _.set(_, _), _(_), _(null);
                }
              },
              children: _
                ? (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("div", {
                        className: _.DragAndDropDescriptionWithImage,
                        children: (0, _._)(
                          "#StoreAdmin_EditEditions_DragAndDropToReplace",
                        ),
                      }),
                      (0, _.jsx)("img", {
                        src: _,
                      }),
                      (0, _.jsx)("div", {
                        className: _.DeleteLink,
                        children: (0, _.jsx)("a", {
                          onClick: () => {
                            if (__webpack_require__.has(_)) {
                              const _ = new Map(_);
                              _.delete(_), _(_), _(null);
                            }
                          },
                          children: (0, _._)("#StoreAdmin_EditEditions_Delete"),
                        }),
                      }),
                    ],
                  })
                : (0, _.jsx)("div", {
                    className: _.DragAndDropDescriptionWithoutImage,
                    children: (0, _._)(
                      "#StoreAdmin_EditEditions_DragAndDropHere",
                    ),
                  }),
            }),
            (0, _.jsx)("h3", {
              children: (0, _._)("#StoreAdmin_EditEditions_StepNumber3"),
            }),
            (0, _.jsx)("label", {
              htmlFor: "altTextArea",
              children: (0, _.jsx)("p", {
                children: (0, _._)(
                  "#StoreAdmin_EditEditions_AltTextDescription",
                ),
              }),
            }),
            (0, _.jsx)("textarea", {
              _: "altTextArea",
              className: _.AltTextArea,
              onChange: (_) => {
                const _ = new Map(_);
                _.set(_, _.target.value), _(_);
              },
              value: _.get(_) ?? "",
            }),
          ],
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
            value: _,
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
        return (0, _.jsx)(_._, {
          disabled: !_,
          strDefaultLabel: _,
          rgOptions: _,
          selectedOption: _ ? _ : null,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { appid: _, onClose: _, onCommit: _ } = _,
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
        let _ = (0, _.jsx)(_, {
          setOnOKButton: _,
          onCommit: _,
        });
        return (
          _
            ? (_ = (0, _.jsx)(_, {
                strError: (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
              }))
            : (!_ && _) || (_ = (0, _.jsx)(_._, {})),
          (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)(_, {
              fnSubmit: _,
              fnCloseModal: _,
              children: _,
            }),
          })
        );
      }
      const _ = _.createContext(null);
      function _() {
        return _.useContext(_);
      }
      const _ = _.memo(function (_) {
        const {
            appid: _,
            bCanUpdateComingSoonDate: _,
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
                      rtReleaseDate: _,
                      strComingSoonDisplay: _,
                    } = _,
                    _ = `${_._.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${_}`,
                    _ = new FormData();
                  _.append("sessionid", (0, _._)()),
                    _ &&
                      _.append("release_date", __webpack_require__.toString());
                  _.append("coming_soon_display", _);
                  const _ = await _().post(_, _);
                  if (!_.data || _.data.success != _._)
                    throw (0, _._)(
                      "#Error_Description",
                      _.data?.success,
                      _.data?.error_message || "unknown",
                    );
                })({
                  unAppID: _,
                  rtReleaseDate: _ ? _ : null,
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
          }, [_, _, _, _, _, _]);
        return (
          _.useEffect(() => {
            _("none" == _ ? () => _ : null);
          }, [_, _, _, _]),
          (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  strError: _,
                }),
              (0, _.jsx)(_, {}),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsxs)(_, {
                    label: (0, _._)("#App_Landing_IntendedReleaseDateTitle"),
                    children: [
                      (0, _.jsx)(_, {
                        rtSelectedDate: _,
                        setSelectedDate: _,
                      }),
                      (0, _.jsx)(_, {}),
                    ],
                  }),
                  (0, _.jsxs)(_, {
                    label: (0, _._)("#App_Landing_PublicDateDisplayTitle"),
                    children: [
                      (0, _.jsx)(_._, {
                        rtSteamReleaseDate: _,
                        value: _,
                        onChange: _,
                      }),
                      (0, _.jsx)("p", {
                        children: (0, _._)("#App_Landing_ReleaseDateStorePage"),
                      }),
                      (0, _.jsx)("p", {
                        children: (0, _._)(
                          "#App_Landing_ReleaseDateStoreListing",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _.ReleaseColumnFooter,
                children: (0, _._)(
                  "#App_Landing_NeedHelpWithReleaseDates",
                  (0, _.jsx)("a", {
                    target: "_blank",
                    href: `${_._.PARTNER_BASE_URL}doc/store/coming_soon`,
                  }),
                  (0, _.jsx)("a", {
                    target: "_blank",
                    href: `${(0, _._)()}wizard/HelpWithPublishing`,
                  }),
                ),
              }),
              (0, _.jsx)(_, {}),
            ],
          })
        );
      });
      function _(_) {
        const { strError: _ } = _;
        return (0, _.jsx)("div", {
          className: _.ErrorBox,
          children: _,
        });
      }
      function _() {
        const {
          bIsComingSoon: _,
          bIsStorePageReviewed: _,
          bIsWaitingForBuildReview: _,
          bIsFirstSelfPublishingApp: _,
          rtEarliestDate: _,
          bRequiresReleaseWaitingPeriod: _,
        } = _();
        return _ && _
          ? _
            ? (0, _.jsx)(_, {
                children: (0, _._)(
                  "#App_Landing_Release_EarliestDate_BuildReview",
                ),
              })
            : (0, _.jsx)(_, {
                children: (0, _._)(
                  "#App_Landing_Release_EarliestDate",
                  (0, _._)(_),
                ),
              })
          : _ && _
            ? (0, _.jsx)(_, {
                children: (0, _._)(
                  "#App_Landing_Release_EarliestDate_TwoWeeks30Days",
                ),
              })
            : _
              ? (0, _.jsx)(_, {
                  children: (0, _._)(
                    "#App_Landing_Release_EarliestDate_TwoWeeks",
                  ),
                })
              : null;
      }
      function _(_) {
        const { fnCloseModal: _, fnSubmit: _, children: _ } = _,
          { bCanUpdateComingSoonDate: _ } = _() || {
            bCanUpdateComingSoonDate: !0,
          };
        return (0, _.jsxs)(_._, {
          active: !0,
          className: _.ReleaseDateModal,
          onDismiss: _,
          children: [
            (0, _.jsx)(_._, {
              children: (0, _._)(
                _
                  ? "#App_Landing_Set_Release_Date"
                  : "#App_Landing_Change_Release_Date",
              ),
            }),
            (0, _.jsx)(_._, {
              className: _.ReleaseDateRequestBody,
              children: _,
            }),
            (0, _.jsx)(_._, {
              bOKDisabled: !_,
              onCancel: _,
              strCancelText: (0, _._)("#App_Landing_Requested_Date_Cancel"),
              onOK: _,
              strOKText: (0, _._)("#App_Landing_Requested_Date_Update"),
            }),
          ],
        });
      }
      function _(_) {
        const { label: _, children: _ } = _;
        return (0, _.jsxs)(_._, {
          className: _.Column,
          children: [
            (0, _.jsxs)("div", {
              className: _.ColumnLabel,
              children: [_, ":"],
            }),
            (0, _.jsx)("div", {
              className: _.ColumnContent,
              children: _,
            }),
          ],
        });
      }
      function _(_) {
        const { rtSelectedDate: _, setSelectedDate: _ } = _,
          { bCanUpdateComingSoonDate: _, rtEarliestDate: _ } = _();
        return (0, _.jsx)(_.Fragment, {
          children: (0, _.jsx)(_._, {
            bWeekdaysOnly: !0,
            bNoDefaultDate: !0,
            disabled: !_,
            nEarliestTime: _,
            fnGetTimeToUpdate: () => _,
            fnSetTimeToUpdate: _,
            className: _.DatePicker,
            bShowTimeZone: !0,
            strAlsoShowTimeZone: _._,
          }),
        });
      }
      function _(_) {
        const { bCanUpdateComingSoonDate: _, rtReleaseDate: _ } = _();
        return _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_Set_Release_Date_SetIntended",
                  ),
                }),
                (0, _.jsx)("p", {
                  children: (0, _._)("#App_Landing_Set_Release_Date_Weekends"),
                }),
                (0, _.jsx)("p", {
                  children: (0, _._)(
                    "#App_Landing_Set_Release_Date_PacificTime",
                  ),
                }),
              ],
            })
          : (0, _.jsx)("p", {
              children: (0, _._)(
                (0, _._)(
                  "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc",
                  (0, _._)(_),
                ),
                (0, _.jsx)("a", {
                  href: `${(0, _._)()}wizard/HelpWithPublishing?issueid=905`,
                }),
              ),
            });
      }
      function _(_) {
        return (0, _.jsx)("span", {
          className: _.BlueNote,
          children: _.children,
        });
      }
      function _(_) {
        const {
          rtEarliestDate: _,
          strReleaseState: _,
          bCanUpdateComingSoonDate: _,
        } = _();
        return "prerelease" != _ || _
          ? null
          : (0, _.jsx)("div", {
              className: _.PublishNowWarning,
              children: (0, _._)(
                "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note",
                (0, _._)(_),
              ),
            });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            bIsGameEdit: _,
            unAppID: _,
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
        return (0, _.jsxs)(_.Fragment, {
          children: [
            _ &&
              (0, _.jsx)(_, {
                appid: _,
                onClose: _,
                onCommit: _,
              }),
            _ &&
              (0, _.jsx)(_, {
                appid: _,
                bIsGameEdit: _,
                closeModal: () => _(!1),
              }),
            (0, _.jsxs)("div", {
              className: (0, _._)(_.ReleaseDateInfoCtn, _ && _.GameEditCtn),
              children: [
                (0, _.jsxs)("div", {
                  className: _.ReleaseDateContent,
                  children: [
                    (0, _.jsx)(_, {
                      label: (0, _._)("#App_Landing_SpecifiedReleaseDate"),
                      children: (0, _.jsx)(_, {
                        rtReleaseDate: _,
                      }),
                    }),
                    (0, _.jsx)(_, {
                      label: (0, _._)("#App_Landing_CustomersSeeReleaseDate"),
                      children: (0, _.jsx)("div", {
                        className: (0, _._)(_.BigField, _ ? _.Set : _.Unset),
                        children: _
                          ? (0, _._)(_, _)
                          : (0, _._)("#App_Landing_UnsetReleaseDate"),
                      }),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.EditButton,
                  onClick: _,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(_.Spacer, _.Top),
                    }),
                    (0, _.jsx)("div", {
                      className: _.EditButtonIcon,
                      children: (0, _.jsx)(_.ffu, {}),
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(_.Spacer, _.Bottom),
                    }),
                  ],
                }),
              ],
            }),
            1e3 * _ > new Date().getTime() &&
              (0, _.jsx)(_, {
                label: (0, _._)("#App_Landing_EarliestAdvancedAccessDate"),
                children: (0, _.jsx)(_, {
                  rtReleaseDate: _,
                }),
              }),
          ],
        });
      }
      function _(_) {
        const { rtReleaseDate: _ } = _;
        return _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(_.BigField, _.Set),
                  children: (0, _._)(_),
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(_.SubField, _.Set),
                  children: (0, _._)(
                    _,
                    {},
                    {
                      timeZoneName: "short",
                    },
                  ),
                }),
              ],
            })
          : (0, _.jsx)("div", {
              className: (0, _._)(_.BigField, _.Unset),
              children: (0, _._)("#App_Landing_UnsetReleaseDate"),
            });
      }
      function _(_) {
        return (0, _.jsxs)("div", {
          className: _.LabelField,
          children: [
            (0, _.jsx)("div", {
              className: _.Label,
              children: _.label,
            }),
            _.children,
          ],
        });
      }
      function _(_) {
        const { appid: _, bIsGameEdit: _, closeModal: _ } = _,
          _ = _.useCallback(() => {
            _
              ? (window.TabSelect("tab_publish"), window.scrollTo(0, 0))
              : (window.location.href =
                  _._.GameEditByAppID(_.toString()) + "?activetab=tab_publish"),
              _();
          }, [_, _, _]);
        return (0, _.jsx)(_._, {
          active: !0,
          children: (0, _.jsx)(_._, {
            strTitle: (0, _._)("#App_Landing_ReleaseDate_ChangesSaved"),
            strDescription: (0, _._)("#App_Landing_Release_PublishStorePrompt"),
            strOKButtonText: (0, _._)("#App_Landing_Release_PrepareToPublish"),
            onOK: _,
            strCancelButtonText: (0, _._)("#Button_OK"),
            closeModal: _,
          }),
        });
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
        FrontPageEdit: (_) => `/admin/store/pageclusteredit/frontpage/${_}`,
        FrontPageSteamChinaEdit: (_) =>
          `/admin/store/pageclusteredit/frontpage_china/${_}`,
        ContentHubEditor: (_, _) =>
          `/admin/store/pageclusteredit/content_hub_${_}/${_}`,
        StoreAdminCreatorHome: () => "/admin/creatorhome",
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
