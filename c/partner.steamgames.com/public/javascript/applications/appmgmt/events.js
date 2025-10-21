(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4268],
  {
    chunkid: (module) => {
      module.exports = {
        BuildNoteCtn: "cZP-58cHflQCLG6CHvwKG",
        SplitPanel: "_2TINcVLR2kmBWAVOOtG0cF",
        DescriptionPanel: "_2N1THxFjyQb75AY6b7SpZX",
        RightPanel: "EN_YgGmWh95hbxn-2pmD5",
        BuildTitle: "_-2I9CETSXyA66SWcV5iEv",
        BuildSubTitle: "_2lG_bxKnQtJIUYWD19KGoy",
        InfoText: "_3-WB4tkYQI0EftRXikEI4t",
        EditTopBar: "bJHHP4182a1PZlP-rurGN",
        LangPicker: "_1P7AcuhlijPijxLhFPngFp",
        EditTitle: "_2o-fIjMrt8xP5BFnQuwu_p",
        SubmitButtonCtn: "Vj8rXBuNz4JT-2Y8QgK36",
        BBCodeEditor: "_2gIbttbPBWi6pXxhPzfmD5",
        ErrorMsg: "_2yUUHPTbyDbnoX2gCflGh-",
        SteamChinaMsg: "_3EFpCoez_gInT6uBoW-MLR",
        PreviewHeader: "_3GODeMU9hr5NrqreP7TL3E",
        SubmitPanel: "_2WB1wNg29mL3fTTeWX9HJU",
        SubmitThrobber: "_2rWSmSZSQLbv7D2bBBc6PO",
        SuccessPanel: "_3jQwVKtYzS0V9pBPwJTUW6",
        ViewEventButton: "_3zUBg8T8MJnKb-eS1s3sK6",
        FailedPanel: "_1H8COg73O0FBzdyTrSg2pu",
        FailedText: "pu4VYcHm6vt6RCeDA73L0",
        FailedButton: "soZLp0uToUv-yRJFwckG9",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, _) {
        const _ = _ && _.length > _ ? [..._] : (0, _._)(_ || [], _ + 1, "");
        return (_[_] = _), _;
      }
      function _(_, _) {
        return (_ && _.length > _ && _[_]) || "";
      }
      function _(_, _) {
        let _ = !1,
          _ = !1;
        for (let _ = 0; _ < 31; _++) {
          const _ = _(_, _).trim(),
            _ = _(_, _).trim();
          if (!_ && !_) continue;
          const _ = (0, _._)("#Language_" + (0, _._)(_));
          if (((_ = !0), !_))
            return (0, _._)("#BuildNotes_Error_MissingTitle", _);
          if (!_) return (0, _._)("#BuildNotes_Error_MissingDescription", _);
          if (_.length > _._)
            return (0, _._)("#BuildNotes_Error_TitleTooLong", _);
          if (_.length > 32768)
            return (0, _._)("#BuildNotes_Error_DescriptionTooLong", _);
          0 === _ && (_ = !0);
        }
        return _
          ? _
            ? null
            : (0, _._)("#BuildNotes_Error_NoEnglishProvided")
          : (0, _._)("#BuildNotes_Error_NoLanguagesProvided");
      }
      class _ {
        m_nBuildVersion;
        m_bSteamChina;
        m_strBuildBranch;
        static s_Singleton;
        static Get() {
          return (
            this.s_Singleton ||
              ((this.s_Singleton = new _()), this.s_Singleton.Init()),
            this.s_Singleton
          );
        }
        Init() {
          const _ = (0, _._)("build_notes", "application_config");
          (this.m_nBuildVersion = _?.build_version || 0),
            (this.m_bSteamChina = _?.steam_china || !1),
            (this.m_strBuildBranch = _?.build_branch || ""),
            (this.m_strBuildBranch = this.m_strBuildBranch
              .trim()
              .toLocaleLowerCase()),
            "default" === this.m_strBuildBranch && (this.m_strBuildBranch = "");
        }
        GetPostedBuildVersion() {
          return this.m_nBuildVersion;
        }
        BShouldShowPatchNotesEditor() {
          return this.GetPostedBuildVersion() > 0;
        }
        BCanSubmitSteamChinaPatchNotes() {
          return this.m_bSteamChina;
        }
        GetBuildBranch() {
          return this.m_strBuildBranch;
        }
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(0),
          [_, _] = _.useState(null),
          [_, _] = _.useState(null),
          [_, _] = _.useState(null),
          [_, _] = _.useState("editing"),
          [_, _] = _.useState(null);
        if (!_.Get().BShouldShowPatchNotesEditor()) return null;
        const _ = (_) => __webpack_require__(_),
          _ = (_) => Boolean(_(_, _) || _(_, _)),
          _ = _.Get().BCanSubmitSteamChinaPatchNotes()
            ? [_._.k_ESteamRealmChina, _._.k_ESteamRealmGlobal]
            : [_._.k_ESteamRealmGlobal],
          _ = _(_, _),
          _ =
            _._.COMMUNITY_BASE_URL +
            "ogg/" +
            _.appId +
            "/partnerevents/create/";
        return _.createElement(
          _._,
          null,
          _.createElement(
            "div",
            {
              className: _.BuildNoteCtn,
            },
            _.createElement(
              "div",
              {
                className: _.BuildTitle,
              },
              (0, _._)(
                "#BuildNotes_Title",
                _.Get().GetPostedBuildVersion(),
                _.Get().GetBuildBranch() || "default",
              ),
            ),
            _.createElement(
              "div",
              {
                className: _.SplitPanel,
              },
              _.createElement(
                "div",
                {
                  className: _.DescriptionPanel,
                },
                _.createElement(
                  "div",
                  {
                    className: _.BuildSubTitle,
                  },
                  (0, _._)("#BuildNotes_SubTitle"),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.InfoText,
                  },
                  (0, _._)("#BuildNotes_Desc1"),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.InfoText,
                  },
                  (0, _._)("#BuildNotes_Desc2"),
                ),
                _.createElement(
                  "a",
                  {
                    href: _,
                  },
                  _.createElement(
                    _._,
                    null,
                    (0, _._)("#BuildNotes_OpenFullEditor"),
                  ),
                ),
              ),
              "editing" === _ &&
                _.createElement(_, {
                  sError: _,
                  eLanguage: _,
                  realms: _,
                  fnHasLanguage: _,
                  fnSetLanguage: _,
                  fnGetTitle: (_) => _(_, _),
                  fnSetTitle: (_, _) => _(_(_, _, _)),
                  fnGetDescription: (_) => _(_, _),
                  fnSetDescription: (_, _) => _(_(_, _, _)),
                  fnOnPreviewEvent: () =>
                    _(
                      (function (_, _) {
                        let _ = new _._();
                        (_.GID = "PreviewPartnerEventRow_0"),
                          (_.clanSteamID = new _._(_._.steamid)),
                          (_.postTime = Date.now() / 1e3),
                          (_.startTime = Date.now() / 1e3),
                          (_.type = 12);
                        for (let _ = 0; _ < 31; _++)
                          _.name.set(_, _(_, _)), _.description.set(_, _(_, _));
                        return _;
                      })(_, _),
                    ),
                  fnApplyLoc: (_, _) => {
                    const _ = new Array();
                    let _ = _,
                      _ = _;
                    for (const _ of _) {
                      const _ = _.GetLocalization("Title", _) || "",
                        _ = _.GetLocalization("Description", _) || "";
                      (_ || _) && __webpack_require__.push(_),
                        _ && (_ = _(_, _, _)),
                        _ && (_ = _(_, _, _));
                    }
                    return _(_), _(_), _;
                  },
                }),
              "submitting" === _ && _.createElement(_, null),
              "failed" === _ &&
                _.createElement(_, {
                  fnOnReturnToEditor: () => _("editing"),
                }),
              "submitted" === _ &&
                _.createElement(_, {
                  appId: _.appId,
                  eventGid: _,
                }),
            ),
          ),
          Boolean(_ && "editing" === _) &&
            _.createElement(_, {
              event: _,
              eLanguage: _,
              realms: _,
              fnOnClose: () => _(null),
              fnOnSubmitEvent: async () => {
                _(null), _("submitting");
                const _ = await (async function (_, _, _) {
                  if (_(_, _)) return null;
                  const _ = Boolean(_(_, 29).trim()),
                    _ = new FormData();
                  _.append("sessionid", _._.SESSIONID),
                    _.append("appid", "" + _),
                    _.append("post_steam_china", "" + _),
                    _.append("titles", JSON.stringify(_)),
                    _.append("descriptions", JSON.stringify(_)),
                    _.append("build_id", "" + _.Get().GetPostedBuildVersion()),
                    _.append("build_branch", _.Get().GetBuildBranch());
                  const _ =
                    _._.PARTNER_BASE_URL +
                    "partnerevents/ajaxpublishpatchnotes";
                  try {
                    const _ = await _().post(_, _, {
                      withCredentials: !0,
                    });
                    if (1 == _?.data?.success) return _.data;
                    console.error(
                      "buildpatchnotes: OnSubmitCreateEvent error code  " +
                        _?.data?.success +
                        " msg: " +
                        _?.data?.msg,
                    );
                  } catch (_) {
                    const _ = (0, _._)(_);
                    console.error(
                      "buildpatchnotes: OnSubmitCreateEvent " + _.strErrorMsg,
                      _,
                    );
                  }
                  return null;
                })(_.appId, _, _);
                _
                  ? (_(_.clan_event_gid),
                    (function () {
                      const _ = new URLSearchParams(window.location.search);
                      _.delete("submittedbuild"), _.delete("buildbranch");
                      const _ = _.toString(),
                        _ =
                          window.location.origin +
                          window.location.pathname +
                          (_ ? "?" + _ : "") +
                          window.location.hash;
                      window.history.replaceState({}, "", _);
                    })(),
                    _("submitted"))
                  : _("failed");
              },
              fnHasLanguage: _,
              fnSetLanguage: _,
            }),
        );
      }
      const _ = (_) => {
          const {
            sError: _,
            eLanguage: __webpack_require__,
            realms: _,
            fnHasLanguage: _,
            fnSetLanguage: _,
            fnGetTitle: _,
            fnSetTitle: _,
            fnGetDescription: _,
            fnSetDescription: _,
            fnOnPreviewEvent: _,
            fnApplyLoc: _,
          } = _;
          let _ = "";
          if (_.includes(_._.k_ESteamRealmChina)) {
            const _ = "" !== _(29).trim();
            _ = (0, _._)(
              _
                ? "#BuildNotes_SteamChina_Provided"
                : "#BuildNotes_SteamChina_NotProvided",
            );
          }
          return _.createElement(
            "div",
            {
              className: _.RightPanel,
            },
            _.createElement(
              "div",
              {
                className: _.EditTopBar,
              },
              _.createElement(
                "div",
                {
                  className: _.EditTitle,
                },
                (0, _._)("#BuildNotes_PatchnotesTitle"),
              ),
              _.createElement(
                "div",
                {
                  className: _.LangPicker,
                },
                _.createElement(
                  _._,
                  {
                    onClick: () => {
                      const _ = new _._(),
                        _ = (0, _._)("#BuildNotes_SampleTitle"),
                        _ = (0, _._)("#BuildNotes_SampleDescription");
                      for (let _ = 0; _ < 31; _++)
                        _.SetLocalization("Title", _, _),
                          _.SetLocalization("Description", _, _);
                      (0, _._)(
                        _.createElement(_._, {
                          sampleLocData: _,
                          sampleFilename: "patchnote_loc_sample",
                          fnOnImportLocData: _,
                        }),
                        window,
                      );
                    },
                  },
                  (0, _._)("#BuildNotes_ImportLocalization"),
                ),
                _.createElement(_._, {
                  selectedLang: __webpack_require__,
                  fnOnLanguageChanged: _,
                  fnLangHasData: _,
                  realms: _,
                }),
              ),
            ),
            _.createElement(_._, {
              value: _(__webpack_require__),
              placeholder: (0, _._)("#BuildNotes_TitlePlaceholder"),
              onChange: (_) => _(__webpack_require__, _.currentTarget.value),
              maxLength: _._,
            }),
            _.createElement(
              "div",
              {
                className: _.EditTitle,
              },
              (0, _._)("#BuildNotes_PatchnotesDesc"),
            ),
            _.createElement(_._, {
              fnGetCurText: () => _(__webpack_require__),
              fnOnTextChange: (_) =>
                _(__webpack_require__, _.currentTarget.value),
              fnSetText: (_) => _(__webpack_require__, _),
              strPlaceholder: (0, _._)("#BuildNotes_DescPlaceholder"),
              emoticonStore: _._,
              bSupportHTMLImport: !0,
              showFormatHelp: "PartnerEvents",
              classNameForTextArea: _.BBCodeEditor,
            }),
            _.createElement(
              "div",
              {
                className: _.SubmitButtonCtn,
              },
              !Boolean(_) &&
                _.createElement(
                  _._,
                  {
                    onClick: _,
                  },
                  (0, _._)("#BuildNotes_Preview"),
                ),
              Boolean(_) &&
                _.createElement(
                  "div",
                  {
                    className: _.ErrorMsg,
                  },
                  _,
                ),
              Boolean(!_ && _) &&
                _.createElement(
                  "div",
                  {
                    className: _.SteamChinaMsg,
                  },
                  _,
                ),
            ),
          );
        },
        _ = (_) => {
          const {
            event: _,
            eLanguage: __webpack_require__,
            realms: _,
            fnOnClose: _,
            fnOnSubmitEvent: _,
            fnHasLanguage: _,
            fnSetLanguage: _,
          } = _;
          return _.createElement(
            _._,
            null,
            _.createElement(
              "div",
              {
                className: _.PreviewHeader,
              },
              _.createElement(_._, {
                selectedLang: __webpack_require__,
                fnOnLanguageChanged: _,
                fnFilterLanguage: _,
                realms: _,
              }),
              _.createElement(
                "div",
                {
                  className: _.SubmitButtonCtn,
                },
                _.createElement(
                  _._,
                  {
                    onClick: _,
                  },
                  (0, _._)("#BuildNotes_Close"),
                ),
                _.createElement(
                  _._,
                  {
                    onClick: _,
                  },
                  (0, _._)("#BuildNotes_PostNotes"),
                ),
              ),
            ),
            _.createElement(
              "div",
              null,
              _.createElement(_._, {
                event: _,
                fnClose: _,
                langOverride: __webpack_require__,
                isPreview: !0,
              }),
            ),
          );
        },
        _ = (_) =>
          _.createElement(
            "div",
            {
              className: (0, _._)(_.RightPanel, _.SubmitPanel),
            },
            _.createElement(_._, {
              className: _.SubmitThrobber,
            }),
            _.createElement(
              "div",
              {
                className: _.SubmitText,
              },
              (0, _._)("#BuildNotes_Submitting"),
            ),
          ),
        _ = (_) =>
          _.createElement(
            "div",
            {
              className: (0, _._)(_.RightPanel, _.FailedPanel),
            },
            _.createElement(
              "div",
              {
                className: _.FailedText,
              },
              (0, _._)("#BuildNotes_FailedDescription"),
            ),
            _.createElement(
              "div",
              {
                className: _.FailedButton,
              },
              _.createElement(
                _._,
                {
                  onClick: _.fnOnReturnToEditor,
                },
                (0, _._)("#BuildNotes_ReturnToEditor"),
              ),
            ),
          ),
        _ = (_) => {
          const { appId: _, eventGid: __webpack_require__ } = _,
            _ = `${_._.STORE_BASE_URL}news/app/${_}/view/${__webpack_require__}`;
          return _.createElement(
            "div",
            {
              className: (0, _._)(_.RightPanel, _.SuccessPanel),
            },
            _.createElement(
              "div",
              {
                className: _.SuccessText,
              },
              (0, _._)("#BuildNotes_Success"),
            ),
            _.createElement(
              "a",
              {
                href: _,
                className: _.ViewEventButton,
              },
              _.createElement(_._, null, (0, _._)("#BuildNotes_ViewPublished")),
            ),
          );
        };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          SaleRoutes: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        static s_PageStore;
        m_mapSalePage = new Map();
        m_rgUnmigratedSalesPage = new Array();
        GetUnmigratedSalesPages() {
          return this.m_rgUnmigratedSalesPage;
        }
        GetAllSalePages() {
          return Array.from(this.m_mapSalePage.values());
        }
        GetPageByID(_) {
          return this.m_mapSalePage.get(_);
        }
        static Get() {
          return (
            _.s_PageStore || ((_.s_PageStore = new _()), _.s_PageStore.Init()),
            _.s_PageStore
          );
        }
        Init() {
          let _ = (0, _._)("old_sale_pages", "application_config");
          this.ValidateStoreDefault(_) &&
            _.forEach((_) => {
              this.m_mapSalePage.set(_.pageid, _),
                _.migrated_clan_account_id ||
                  this.m_rgUnmigratedSalesPage.push(_);
            });
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !!(
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              "object" == typeof _[0]
            ) && "string" == typeof _[0].pageid
          );
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _.createElement(
          "div",
          null,
          _.createElement("h2", null, "Unmigrated Sales Pages"),
          _.createElement("hr", null),
          _.Get()
            .GetUnmigratedSalesPages()
            .map((_) =>
              _.createElement(_, {
                key: _.pageid,
                pageid: _.pageid,
              }),
            ),
        );
      }
      function _(_) {
        let _ = _.Get().GetPageByID(_.pageid);
        return _.createElement(
          "div",
          null,
          _.createElement("div", null, _.pageid),
          _.createElement(
            _._,
            {
              _: _.SaleMigrationPageDebug(_.pageid),
            },
            "Debug Data",
          ),
        );
      }
      function _(_) {
        const { pageid: _ } = _,
          _ = _.Get().GetPageByID(_),
          _ = (0, _._)(_.accountid);
        return _
          ? _.createElement(
              "div",
              null,
              _.createElement(
                _._,
                {
                  _: _.SaleMigrationTool(),
                },
                "< Return to Migration Toolset",
              ),
              _.createElement("h2", null, "Debug: ", _.pageid),
              _.createElement("hr", null),
              _.createElement("div", null, "Name: ", _.display_name),
              _.createElement(
                "div",
                null,
                "Creator: ",
                _.accountid,
                " - ",
                _.persona,
              ),
              _.createElement(
                "div",
                null,
                "Last Modified: ",
                _.last_modified,
                Boolean(0 != _.last_modified) &&
                  _.createElement(_._, {
                    dateAndTime: _.last_modified,
                    bSingleLine: !0,
                  }),
              ),
              _.createElement("h1", null, "Sale Page Body Raw"),
              _.createElement(_._, {
                data: _,
              }),
            )
          : _.createElement(_._, {
              string: "Loading User Info",
            });
      }
      var _ = __webpack_require__("chunkid");
      const _ = {
        SaleDashboardView: () => "/(dashboard)?/",
        SaleMigrationTool: () => "/migration/",
        SaleMigrationPageDebug: (_) => `/migration/debug/${_}/`,
      };
      function _(_) {
        return _.createElement(
          _._,
          {
            basename: (0, _._)() + "sales/",
          },
          _.createElement(
            _._,
            null,
            _.createElement(_._, {
              exact: !0,
              path: _._.DiagData(),
              render: (_) =>
                _.createElement(_._, {
                  ..._,
                  strConfigID: "application_config",
                }),
            }),
            _.createElement(_._, {
              exact: !0,
              path: _.SaleDashboardView(),
              component: _._,
            }),
            _.createElement(_._, {
              exact: !0,
              path: _.SaleMigrationTool(),
              component: _,
            }),
            _.createElement(_._, {
              exact: !0,
              path: _.SaleMigrationPageDebug(":pageid"),
              render: (_) =>
                _.createElement(_, {
                  pageid: _.match.params.pageid,
                }),
            }),
            _.createElement(_._, {
              component: _._,
            }),
          ),
        );
      }
    },
  },
]);
