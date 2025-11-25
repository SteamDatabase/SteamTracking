(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9855],
  {
    chunkid: (module) => {
      module.exports = {
        DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
        EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
        EventEditorBottomBar: "_1noS58WsfHN3KuGVDzlv9r",
        EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
        EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
        AdditionalContent: "_2fUl5vCnrlT9P7kskRIiWx",
      };
    },
    chunkid: (module) => {
      module.exports = {
        ValveCrowdInSyncCtn: "_8MIrt7rQXkA0xE5sAjOee",
        ValveCrowdInSyncLabel: "_22b0C1Xi03QNdTFKsYypHR",
        SyncPanelError: "yn_yu2EaUigYFm9QQAD7o",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Label: "_1LhItwhLHspVcQdfcbd2Sg",
        ImportLocSampleButtonCtn: "D-1dlROLVuva-sb6tFgwU",
        SampleTitle: "_9189ilzQ3YES-a-6DyBhR",
        ImportButton: "WyfyxbGrKQq8cKMK5kfxE",
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        var _, _;
        const { editModel: _ } = _,
          [_, _] = _.useState(1),
          [_, _] = _.useState(!1),
          [_, _] = _.useState(null),
          _ = _.GetClanSteamID(),
          _ = _.GetGID(),
          _ = (0, _._)(_, _),
          [, _] = _.useReducer((_) => _ + 1, 0),
          _ =
            _.isSuccess &&
            (null === (_ = _.data) || void 0 === _
              ? void 0
              : _.crowdin_project_id) &&
            (null === (_ = _.data) || void 0 === _ ? void 0 : _.crowdin_file_id)
              ? `https://valve.crowdin.com/editor/${_.data.crowdin_project_id}/${_.data.crowdin_file_id}`
              : null,
          _ = (0, _._)(_.ConvertTo64BitString(), _, _);
        return _.isLoading
          ? null
          : _.createElement(
              _._,
              {
                clanSteamID: _.editModel.GetClanSteamID(),
              },
              _.createElement(
                _._,
                {
                  active: _,
                },
                _.createElement(_._, null),
              ),
              _.createElement(
                "div",
                {
                  className: _().ValveCrowdInSyncCtn,
                },
                _.createElement(_._, {
                  value: _.BPushUpdatesToCrowdInAutomatically(),
                  onChange: (_) => {
                    _.SetPushSourceToCrowdInAutomatically(_), _();
                  },
                }),
                _.createElement(
                  "div",
                  {
                    className: _().ValveCrowdInSyncLabel,
                  },
                  (0, _._)(
                    "#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn",
                  ),
                  " (",
                  _
                    ? _.createElement(
                        "a",
                        {
                          href: _,
                        },
                        _,
                      )
                    : (0, _._)("#EventEditor_Localization_NotMappedToCrowdIn"),
                  ")",
                  _.createElement(_._, {
                    tooltip: (0, _._)("#EventEditor_Localization_Tooltip"),
                    className: _.tooltip_Ctn,
                  }),
                  _.createElement("br", null),
                  _.createElement(
                    "span",
                    null,
                    (0, _._)("#EventEditor_Localization_RememberToSave"),
                  ),
                ),
                _.createElement(_, {
                  onChange: (_) => {
                    const _ = _.target.value;
                    if ("all" === _) _(-1);
                    else {
                      const _ = (0, _._)(_);
                      _(_);
                    }
                  },
                }),
                _.createElement(
                  "div",
                  {
                    className: _().EditPreviewButton,
                    onClick: () => {
                      _(!0),
                        _.mutateAsync()
                          .then(() => window.location.reload())
                          .catch((_) => {
                            _(_.toString()), _(!1);
                          })
                          .then(() => {
                            _(null);
                          });
                    },
                  },
                  (0, _._)("#EventEditor_Localization_FetchLocalization"),
                ),
              ),
              _ &&
                _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(
                    "div",
                    {
                      className: _().SyncPanelError,
                    },
                    _.createElement(_._, null),
                    " ",
                    _,
                  ),
                ),
            );
      }
      function _(_) {
        const _ = (0, _._)(!1);
        let _ = Array.from(_.entries());
        __webpack_require__.sort((_, _) => _[1].localeCompare(_[1]));
        const _ = __webpack_require__.map(([_, _]) =>
          "english" !== _
            ? _.createElement(
                "option",
                {
                  key: _,
                  value: _,
                },
                _,
              )
            : "",
        );
        return _.createElement(
          "select",
          {
            onChange: _.onChange,
          },
          _.createElement(
            "option",
            {
              value: "all",
            },
            (0, _._)("#EventEditor_Localization_AllLanguages"),
          ),
          _,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
          const _ = (_, _) => {
            _.preventDefault();
            const {
                fnGetLocData: _,
                closeModal: _,
                strFileNamePrefix: _,
                lang: _,
              } = _,
              _ = _(),
              _ = new _._();
            let _ = _ ? _ + "_localization" : "localization";
            switch (_) {
              case "csv_row":
                _.WriteLocalizationData_CSV_LanguageRows(_, _ + ".csv");
                break;
              case "csv_column":
                _.WriteLocalizationData_CSV_LanguageColumns(_, _ + ".csv");
                break;
              case "csv_token":
                _.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                  _,
                  _ + ".csv",
                );
                break;
              case "xml":
                _.WriteLocalizationData_XML_SingleLanguage(
                  _,
                  _,
                  _ + "_" + (0, _._)((0, _._)(_)) + ".xml",
                );
            }
            _ && _();
          };
          return _.createElement(
            _.Fragment,
            null,
            Boolean(_.bShowCSV) &&
              _.createElement(
                _.Fragment,
                null,
                _.createElement(
                  _._,
                  {
                    onClick: (_) => _(_, "csv_row"),
                  },
                  (0, _._)("#Localization_Export_Btn_RowLanguages"),
                ),
                _.createElement(
                  _._,
                  {
                    onClick: (_) => _(_, "csv_column"),
                  },
                  (0, _._)("#Localization_Export_Btn_ColumnLanguages"),
                ),
                _.createElement(
                  _._,
                  {
                    onClick: (_) => _(_, "csv_token"),
                  },
                  (0, _._)("#Localization_Export_Btn_TokenLanguages"),
                ),
              ),
            Boolean(_.bShowXML) &&
              _.createElement(
                _._,
                {
                  onClick: (_) => _(_, "xml"),
                },
                (0, _._)("#Localization_Export_Btn_XML"),
              ),
          );
        },
        _ = (_) => {
          const [_, __webpack_require__] = (0, _.useState)(!1),
            _ = (_, _) => {
              __webpack_require__(!1),
                console.log(
                  "ImportLocalizationAction: On Handle Parse error: " +
                    _.message,
                  _,
                ),
                (0, _._)(
                  _.createElement(
                    _._,
                    null,
                    _.createElement(
                      "div",
                      null,
                      _.createElement(
                        "p",
                        null,
                        (0, _._)("#Localization_Error_Input"),
                      ),
                      _.createElement("p", null, _.message),
                    ),
                  ),
                  window,
                );
            },
            _ = (_) => {
              __webpack_require__(!1);
              let _ = "";
              _.forEach((_) => {
                _.length > 0 && (_ += ", "),
                  (_ += (0, _._)("#Language_" + (0, _._)(_)));
              }),
                (0, _._)(
                  _.createElement(
                    _._,
                    {
                      strTitle: (0, _._)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                    },
                    _.createElement(
                      "div",
                      null,
                      0 == _.length
                        ? (0, _._)(
                            "#Localization_Success_ImportComplete_NoChange",
                          )
                        : (0, _._)("#Localization_Success_ImportComplete", _),
                    ),
                  ),
                  window,
                );
            },
            _ = async (_) => {
              let _ = _.target.files;
              if (_ && _.length > 0) {
                __webpack_require__(!0);
                let _ = new Array(),
                  _ = new _._();
                for (let _ = 0; _ < _.length; ++_)
                  if (_[_]) {
                    if (_[_].name.toLocaleLowerCase().endsWith(".csv"))
                      return void _().parse(_[0], {
                        header: !0,
                        complete: (_) => {
                          let _ = new _._().DetectAndFormatCSV(_);
                          if (!_)
                            return void _({
                              code: "",
                              message: "",
                              row: 0,
                              type: "filenameerror",
                            });
                          const _ = _._.GetLanguageListForRealms([
                              _._.k_ESteamRealmGlobal,
                            ]),
                            _ = _.fnOnImportLocData(_, _);
                          _(_);
                        },
                        error: _,
                      });
                    if (_[_].name.toLocaleLowerCase().endsWith(".xml")) {
                      let { language: _ } = (0, _._)(_[_].name, -1);
                      if (null == _ || -1 == _)
                        return void _({
                          code: "",
                          message: (0, _._)(
                            "#Localization_Error_FileLangauage",
                            _[_].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                      try {
                        const _ =
                          await _.ReadLocalizationData_XML_SingleLanguage(
                            _[_],
                            _,
                          );
                        _.fnOnImportLocData(_, [_]).forEach((_) => {
                          -1 == _.indexOf(_) && _.push(_);
                        });
                      } catch (_) {
                        let _ = (0, _._)(_);
                        return void _({
                          code: "",
                          message: (0, _._)(
                            "#Localization_Error_XMLParseError",
                            _.strErrorMsg,
                          ),
                          row: 0,
                          type: "parseerror",
                        });
                      }
                    } else
                      _({
                        code: "",
                        message: (0, _._)(
                          "#Localization_Error_FileExtention",
                          _[_].name,
                        ),
                        row: 0,
                        type: "filenameerror",
                      });
                  }
                _(_);
              }
            };
          return _.createElement(
            _._,
            {
              className: (0, _._)(
                _.className ? _.className : _.EditPreviewButton,
              ),
              toolTipContent: _.strToolTip,
            },
            _.createElement(
              "label",
              {
                className: _.ImportButton,
                htmlFor: "importlocalization",
              },
              _ &&
                _.createElement(_._, {
                  size: "small",
                }),
              _.createElement(
                "div",
                {
                  className: _.Label,
                },
                (0, _._)(_.strLabel ? _.strLabel : "#Localization_Import_Btn"),
              ),
              _.createElement("input", {
                _: "importlocalization",
                className: _.ImportButton,
                style: {
                  display: "none",
                },
                type: "file",
                onSubmit: _,
                onChange: _,
                multiple: !0,
              }),
            ),
          );
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          this.m_mapTokens = new Map();
        }
        GetLocalization(_, _) {
          const _ = this.m_mapTokens.get(_);
          if (_ && _[_]) return _[_];
        }
        SetLocalization(_, _, _) {
          let _ = this.m_mapTokens.get(_);
          _ || ((_ = (0, _._)([], 31, null)), this.m_mapTokens.set(_, _)),
            (_[_] = _);
        }
        GetSortedTokenList() {
          let _ = [];
          return (
            this.m_mapTokens.forEach((_, _) => _.push(_)),
            _.sort((_, _) => _.localeCompare(_)),
            _
          );
        }
        GetLanguagesWithTokens() {
          let _ = new Map();
          this.m_mapTokens.forEach((_) => {
            for (let _ = 0; _ < _.length; ++_)
              !_.has(_) &&
                null !== _[_] &&
                void 0 !== _[_] &&
                _[_].trim().length > 0 &&
                _.set(_, !0);
          });
          let _ = new Array();
          return (
            _.forEach((_, _) => {
              _ && _.push(_);
            }),
            _
          );
        }
        ClearLanguagesTokens(_) {
          _.forEach((_) => {
            this.m_mapTokens.forEach((_, _) => {
              _ < _.length && null !== _[_] && (_[_] = null);
            });
          });
        }
        DebugPrintData() {
          const _ = new Array();
          return (
            this.m_mapTokens.forEach((_, _) => _.push(`${_}=${_.join(",")}`)),
            _.join("\n")
          );
        }
      }
      class _ {
        DetectAndFormatCSV(_) {
          var _, _, _, _, _, _;
          let _ = null;
          return (
            (null ===
              (_ =
                null === (_ = null == _ ? void 0 : _.meta) || void 0 === _
                  ? void 0
                  : _.fields) || void 0 === _
              ? void 0
              : _.length) >= 3 &&
            "field" === _.meta.fields[0] &&
            "language" === _.meta.fields[1] &&
            "value" === _.meta.fields[2]
              ? (_ = this.ReadLocalizationData_CSV_TokenLanguageList(_))
              : (null ===
                    (_ =
                      null === (_ = null == _ ? void 0 : _.meta) || void 0 === _
                        ? void 0
                        : _.fields) || void 0 === _
                    ? void 0
                    : _.length) >= 2 &&
                  "field" === _.meta.fields[0] &&
                  -1 != (0, _._)(_.meta.fields[1], -1)
                ? (_ = this.ReadLocalizationData_CSV_LanguageColumns(_))
                : (null ===
                    (_ =
                      null === (_ = null == _ ? void 0 : _.meta) || void 0 === _
                        ? void 0
                        : _.fields) || void 0 === _
                    ? void 0
                    : _.length) >= 2 &&
                  "language" === _.meta.fields[0] &&
                  (_ = this.ReadLocalizationData_CSV_LanguageRows(_)),
            _
          );
        }
        async ReadLocalizationData_XML_SingleLanguage(_, _) {
          let _ = new _(),
            _ = new DOMParser(),
            _ = await _._.ReadFile(_),
            _ = _.parseFromString(_.toString(), "application/xml");
          for (let _ = 0; _ < _.documentElement.children.length; ++_) {
            const _ = _.documentElement.children.item(_);
            if (!_.getAttribute("id"))
              throw "Can not find id for element. Probably malformed XML";
            const _ = _.getAttribute("id").toLocaleLowerCase(),
              _ = _.textContent;
            __webpack_require__.SetLocalization(_, _, _);
          }
          return _;
        }
        ReadLocalizationData_CSV_TokenLanguageList(_) {
          const _ = new _();
          return (
            _.data.forEach((_) => {
              const _ = _.field,
                _ = (0, _._)(_.language);
              _.SetLocalization(_, _, _.value);
            }),
            _
          );
        }
        ReadLocalizationData_CSV_LanguageColumns(_) {
          const _ = new _();
          return (
            _.data.forEach((_) => {
              const _ = _.field;
              for (let _ = 0; _ < 31; ++_) {
                const _ = (0, _._)((0, _._)(_));
                _.SetLocalization(_, _, _[_]);
              }
            }),
            _
          );
        }
        ReadLocalizationData_CSV_LanguageRows(_) {
          const _ = new _();
          return (
            _.data.forEach((_) => {
              const _ = (0, _._)(_.language, 31);
              if (31 !== _)
                for (const [_, _] of Object.entries(_))
                  "language" !== _ &&
                    "string" == typeof _ &&
                    _.SetLocalization(_, _, _);
            }),
            _
          );
        }
        GetExportLanguages() {
          return _._.GetLanguageListForRealms([_._.k_ESteamRealmGlobal]);
        }
        WriteLocalizationData_CSV_TokenAndLanguageColumns(_, _) {
          let _ = new Array();
          _.GetSortedTokenList().forEach((_) => {
            for (const _ of this.GetExportLanguages()) {
              let _ = {
                field: _,
              };
              (_.language = (0, _._)((0, _._)(_))),
                (_.value = _.GetLocalization(_, _)),
                __webpack_require__.push(_);
            }
          }),
            _._.WriteCSVToFile(_, _);
        }
        WriteLocalizationData_CSV_LanguageColumns(_, _) {
          let _ = new Array();
          _.GetSortedTokenList().forEach((_) => {
            let _ = {
              field: _,
            };
            for (const _ of this.GetExportLanguages())
              _[(0, _._)((0, _._)(_))] = _.GetLocalization(_, _);
            __webpack_require__.push(_);
          }),
            _._.WriteCSVToFile(_, _);
        }
        WriteLocalizationData_CSV_LanguageRows(_, _) {
          let _ = new Array();
          for (const _ of this.GetExportLanguages())
            _.length <= _ - 1 &&
              __webpack_require__.push({
                language: "",
              }),
              __webpack_require__.push({
                language: (0, _._)((0, _._)(_)),
              });
          _.GetSortedTokenList().forEach((_) => {
            for (const _ of this.GetExportLanguages()) {
              const _ = _.GetLocalization(_, _);
              _[_][_] = _;
            }
          }),
            _._.WriteCSVToFile(_, _);
        }
        WriteLocalizationData_XML_SingleLanguage(_, _, _) {
          let _ = document.implementation.createDocument(null, "content", null);
          _.GetSortedTokenList().forEach((_) => {
            let _ = _.createElement("string");
            _.setAttribute("id", _),
              _.appendChild(_.createTextNode(_.GetLocalization(_, _) || "")),
              _.documentElement.append(_);
          }),
            _._.WriteXMLToFile(_, _);
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
    },
  },
]);
