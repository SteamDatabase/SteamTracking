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
            _.createElement(
              "div",
              {
                key: _.strProfileColorKey,
                className: "form_row_flex",
              },
              _.createElement(
                "div",
                {
                  className: "form_label_flex",
                },
                "*",
                _.strProfileColorLabel,
              ),
              _.createElement(
                "div",
                {
                  className: "form_data_flex",
                },
                (function (_) {
                  const { strKVPrepend: _, bWriteAsRGBOnly: _ } = _;
                  let [_, _] = _.useState(_.strCurrentColor);
                  const _ = _.useRef(void 0),
                    _ = (_) => {
                      const _ = (_) => {
                        _(_);
                      };
                      (0, _._)(
                        _.createElement(_._, {
                          onChange: _,
                          color: _,
                          disableAlpha: _,
                        }),
                        _,
                        {
                          bDisablePopTop: !0,
                        },
                      );
                    },
                    _ = () => {
                      _(_.current.value);
                    };
                  return _.createElement(
                    _.Fragment,
                    null,
                    _.createElement("input", {
                      ref: _,
                      type: "text",
                      name: `${_ || "item[profile_colors]"}[${_.strProfileColorKey}]`,
                      onChange: _,
                      placeholder: _
                        ? "255,255,255"
                        : "rgba(255, 255, 255, .5)",
                      size: 20,
                      value: _ ? _(_) : _,
                      readOnly: !0,
                    }),
                    _.createElement("div", {
                      className: _().profile_color_preview,
                      style: {
                        backgroundColor: `${_}`,
                      },
                      onClick: _,
                    }),
                  );
                })(_),
              ),
            ),
          );
        return _.createElement(
          "div",
          {
            className: _().profile_colors_ctn,
          },
          _,
        );
      }
      function _(_) {
        const _ = _.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
        if (!_) return null;
        const [, __webpack_require__, _, _] = _;
        return `${__webpack_require__},${_},${_}`;
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
        const [_, __webpack_require__] = (0, _.useState)("closed"),
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
                _.append("sessionid", _._.SESSIONID);
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
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            _._,
            {
              active: "editor" === _ || "alert" === _,
            },
            _.createElement(
              _._,
              {
                "aria-labelledby": _,
                closeModal: () => __webpack_require__("closed"),
              },
              "editor" === _ &&
                _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(
                    "div",
                    {
                      className: _.EditionsEditorContents,
                    },
                    _.createElement(
                      "h2",
                      {
                        _: _,
                      },
                      (0, _._)("#StoreAdmin_EditEditions_DialogTitle"),
                    ),
                    _.isPending && _.createElement(_._, null),
                    !_.isPending &&
                      _.createElement(
                        _.Fragment,
                        null,
                        null !== _ &&
                          _.createElement(
                            "div",
                            {
                              className: _.ErrorBox,
                            },
                            _.createElement(_._, null),
                            _.createElement("div", null, _),
                          ),
                        _.createElement(_, {
                          rgEditions: _,
                          rgCandidates: _.rgCandidates,
                          setEditions: _,
                        }),
                        _.createElement("div", {
                          className: _.EditionPickerHr,
                        }),
                        _.createElement(_, {
                          mapOriginalImages: _,
                          mapImages: _,
                          setImages: _,
                          mapAltText: _,
                          setAltText: _,
                          bAppHasSteamChinaToolsEnabled:
                            _.bAppHasSteamChinaToolsEnabled,
                        }),
                      ),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: _.EditionsEditorDialogButtons,
                    },
                    _.createElement(
                      "button",
                      {
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
                      },
                      (0, _._)("#StoreAdmin_EditEditions_SaveButton"),
                    ),
                    _.createElement(
                      "button",
                      {
                        onClick: () => {
                          _(new _(_)), __webpack_require__("closed");
                        },
                      },
                      (0, _._)("#StoreAdmin_EditEditions_CancelButton"),
                    ),
                  ),
                  _.createElement(
                    "p",
                    {
                      className: _.NeedToPublishNotification,
                    },
                    (0, _._)(
                      "#StoreAdmin_EditEditions_NeedToPublishNotice",
                      _.createElement("a", {
                        target: "_blank",
                        href: `${_._.PARTNER_BASE_URL}admin/game/edit/${_.nItemId}?activetab=tab_publish`,
                      }),
                    ),
                  ),
                ),
              "alert" === _ &&
                _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(
                    "div",
                    {
                      className: _.EditionEditorContents,
                    },
                    _.createElement(
                      "h2",
                      null,
                      (0, _._)("#StoreAdmin_EditEditions_SavingTitle"),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _.EditionsEditorSaveStatus,
                      },
                      _.isPending &&
                        _.createElement(
                          _.Fragment,
                          null,
                          _.createElement(_._, null),
                          " ",
                          (0, _._)("#StoreAdmin_EditEditions_Saving"),
                        ),
                      !_.isPending &&
                        _.createElement(
                          "span",
                          null,
                          (0, _._)("#StoreAdmin_EditEditions_Saved"),
                        ),
                    ),
                    _.createElement(
                      "span",
                      {
                        className: _.PublishReminder,
                      },
                      (0, _._)(
                        "#StoreAdmin_EditEditions_NeedToPublishAlert",
                        _.createElement("a", {
                          target: "_blank",
                          href: `${_._.PARTNER_BASE_URL}admin/game/edit/${_.nItemId}?activetab=tab_publish`,
                        }),
                      ),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _.EditionsEditorDialogButtons,
                      },
                      _.createElement(
                        "button",
                        {
                          onClick: () => {
                            __webpack_require__("refreshing"),
                              window.location.reload();
                          },
                        },
                        (0, _._)("#StoreAdmin_EditEditions_OK"),
                      ),
                    ),
                  ),
                ),
            ),
          ),
          _.rgCandidates.length > 1 &&
            _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                {
                  className: (0, _._)(
                    _.EditionsEditorRow,
                    _ && _.ImageProvided,
                  ),
                },
                "closed" === _ &&
                  _.createElement(
                    _.Fragment,
                    null,
                    _.createElement(
                      "button",
                      {
                        className: _.OpenEditorButton,
                        onClick: () => __webpack_require__("editor"),
                      },
                      (0, _._)("#StoreAdmin_EditEditions_ManageEditionsButton"),
                    ),
                    _?.size > 0
                      ? _.createElement(
                          "span",
                          null,
                          (0, _._)(
                            "#StoreAdmin_EditEditions_ManageEditionsDescription",
                            _.size,
                          ),
                        )
                      : _.createElement(
                          "span",
                          null,
                          (0, _._)(
                            "#StoreAdmin_EditEditions_GroupEditionsDescription",
                          ),
                        ),
                    _.createElement(
                      "span",
                      null,
                      _
                        ? _.createElement(
                            "span",
                            {
                              className: (0, _._)(
                                _.TaskDone,
                                "icon_check_green",
                              ),
                            },
                            (0, _._)(
                              "#StoreAdmin_EditEditions_ManageEditions_HasComparisonGraphic",
                            ),
                          )
                        : (0, _._)(
                            "#StoreAdmin_EditEditions_ManageEditions_NoComparisonGraphic",
                          ),
                    ),
                  ),
                "refreshing" === _ &&
                  _.createElement(
                    _.Fragment,
                    null,
                    _.createElement(_._, {
                      size: "small",
                    }),
                  ),
              ),
            ),
        );
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
        const {
            rgEditions: _,
            rgCandidates: __webpack_require__,
            setEditions: _,
          } = _,
          _ = new Map();
        for (const _ of _.rgCandidates) _.set(_.nId, _);
        const [_, _] = (0, _.useState)(""),
          _ = __webpack_require__.filter(
            (_) => -1 !== _.strName.toLowerCase().indexOf(_.toLowerCase()),
          );
        return _.createElement(
          "div",
          {
            className: _.EditionPicker,
          },
          _.createElement(
            "p",
            null,
            (0, _._)(
              "#StoreAdmin_EditEditions_GroupEditionsIntro",
              _.createElement("a", {
                target: "_blank",
                href: `${_._.PARTNER_BASE_URL}doc/store/manageeditions`,
              }),
            ),
          ),
          _.createElement("br", null),
          _.createElement(
            "h3",
            null,
            (0, _._)("#StoreAdmin_EditEditions_StepNumber1"),
          ),
          _.createElement(
            "p",
            null,
            (0, _._)("#StoreAdmin_EditEditions_SelectEditionsDescription"),
          ),
          _.createElement(
            "div",
            {
              className: _.EditionPickerFilterBox,
            },
            _.createElement("input", {
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
          ),
          _.createElement(
            "table",
            null,
            _.createElement(
              "thead",
              null,
              _.createElement(
                "tr",
                null,
                _.createElement(
                  "td",
                  null,
                  (0, _._)("#StoreAdmin_EditEditions_ColumnEdition"),
                ),
                _.createElement(
                  "td",
                  null,
                  (0, _._)("#StoreAdmin_EditEditions_ColumnPackageTitle"),
                ),
                _.createElement(
                  "td",
                  null,
                  (0, _._)("#StoreAdmin_EditEditions_ColumnState"),
                ),
                _.createElement(
                  "td",
                  null,
                  (0, _._)("#StoreAdmin_EditEditions_ColumnPrice"),
                ),
              ),
            ),
            _.createElement(
              "tbody",
              null,
              _.map((_) => {
                const _ = _.has(_(_));
                let _ = _.HiddenColor;
                return (
                  "Released" === _.strReleaseState
                    ? (_ = _.ReleasedColor)
                    : "Prepurchase" === _.strReleaseState
                      ? (_ = _.PrepurchaseColor)
                      : "Beta" === _.strReleaseState && (_ = _.BetaColor),
                  _.createElement(
                    "tr",
                    {
                      key: _.nId,
                      className: (0, _._)(_, _.EditionPickerRow),
                    },
                    _.createElement(
                      "td",
                      null,
                      _.createElement("input", {
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
                    ),
                    _.createElement("td", null, _.strName),
                    _.createElement("td", null, _.strLocalizedReleaseState),
                    _.createElement("td", {
                      dangerouslySetInnerHTML: {
                        __html: _.strPricing,
                      },
                    }),
                  )
                );
                var _, _;
              }),
            ),
          ),
        );
      }
      function _(_) {
        const {
            mapOriginalImages: _,
            mapImages: __webpack_require__,
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
        return _.createElement(
          "div",
          {
            className: _.LocalizedImageSelector,
          },
          _.createElement(
            "h3",
            null,
            (0, _._)("#StoreAdmin_EditEditions_StepNumber2"),
          ),
          _.createElement(
            "p",
            null,
            (0, _._)(
              "#StoreAdmin_EditEditions_UploadComparisonGraphicsDescription",
              _,
              _,
            ),
          ),
          _.createElement(
            "div",
            {
              className: _.Header,
            },
            _.createElement("input", {
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
                  const _ = new Map(__webpack_require__);
                  _.set(_, _), _(_), _(null);
                }
              },
              style: {
                display: "none",
              },
            }),
            _.createElement(
              "select",
              {
                onChange: (_) => {
                  _(_.target.value), _(null);
                },
                className: _(_),
              },
              (0, _._)(_, (_, _) =>
                _.createElement(
                  "option",
                  {
                    key: _,
                    value: _,
                    className: _(_),
                  },
                  _,
                ),
              ),
            ),
          ),
          _.createElement(
            "p",
            {
              className: _.ErrorBox,
            },
            null !== _ &&
              _.createElement(_.Fragment, null, _.createElement(_._, null), _),
          ),
          _.createElement(
            "div",
            {
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
                  const _ = new Map(__webpack_require__);
                  _.set(_, _), _(_), _(null);
                }
              },
            },
            _
              ? _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(
                    "div",
                    {
                      className: _.DragAndDropDescriptionWithImage,
                    },
                    (0, _._)("#StoreAdmin_EditEditions_DragAndDropToReplace"),
                  ),
                  _.createElement("img", {
                    src: _,
                  }),
                  _.createElement(
                    "div",
                    {
                      className: _.DeleteLink,
                    },
                    _.createElement(
                      "a",
                      {
                        onClick: () => {
                          if (__webpack_require__.has(_)) {
                            const _ = new Map(__webpack_require__);
                            _.delete(_), _(_), _(null);
                          }
                        },
                      },
                      (0, _._)("#StoreAdmin_EditEditions_Delete"),
                    ),
                  ),
                )
              : _.createElement(
                  "div",
                  {
                    className: _.DragAndDropDescriptionWithoutImage,
                  },
                  (0, _._)("#StoreAdmin_EditEditions_DragAndDropHere"),
                ),
          ),
          _.createElement(
            "h3",
            null,
            (0, _._)("#StoreAdmin_EditEditions_StepNumber3"),
          ),
          _.createElement(
            "label",
            {
              htmlFor: "altTextArea",
            },
            _.createElement(
              "p",
              null,
              (0, _._)("#StoreAdmin_EditEditions_AltTextDescription"),
            ),
          ),
          _.createElement("textarea", {
            _: "altTextArea",
            className: _.AltTextArea,
            onChange: (_) => {
              const _ = new Map(_);
              _.set(_, _.target.value), _(_);
            },
            value: _.get(_) ?? "",
          }),
        );
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
        FrontPageEdit: (_) => `/admin/store/pageclusteredit/frontpage/${_}`,
        FrontPageSteamChinaEdit: (_) =>
          `/admin/store/pageclusteredit/frontpage_china/${_}`,
        ContentHubEditor: (_, _) =>
          `/admin/store/pageclusteredit/content_hub_${_}/${_}`,
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
