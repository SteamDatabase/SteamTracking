(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
    chunkid: (module) => {
      module.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _() {
        const _ = (0, _._)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const _ = `${_._.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              _ = await _().get(_);
            return 200 == _?.status && 1 == _.data?.success
              ? _.data.admins
              : (console.error("ValveAccounts:", _?.status), []);
          },
        });
        return _.isLoading ? null : _.data;
      }
      function _(_) {
        const _ = _();
        return _?.find((_) => _._ == _);
      }
      function _(_, _) {
        const _ = _.getQueryData(["useValveAccounts"]);
        return __webpack_require__?.find((_) => _._ === _);
      }
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        return 2 == _._.EUNIVERSE ? 12 : 1;
      }
      class _ {
        m_mapOptInToPartners = new Map();
        m_mapPromises = new Map();
        GetPartnerInfo(_) {
          return this.m_mapOptInToPartners.get(_);
        }
        BHasPartnerInfoLoad(_) {
          return this.m_mapOptInToPartners.has(_);
        }
        async FindPartnerByName(_) {
          return (
            this.m_mapPromises.has(_) ||
              this.m_mapPromises.set(_, this.InternalFindPartnerByName(_)),
            this.m_mapPromises.get(_)
          );
        }
        async InternalFindPartnerByName(_) {
          const _ = new Array();
          try {
            const _ = _._.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              _ = {
                sessionid: _._.SESSIONID,
                searchtext: _,
                origin: self.origin,
              },
              _ = await _().get(_, {
                params: _,
              });
            200 == _?.status && 1 == _?.data?.success
              ? _.data.publishers.forEach((_) => {
                  const _ = {
                    partnerid: _.publisherid,
                    name: _.publishername,
                    partner_url:
                      _._.PARTNER_BASE_URL + `pub/publisher/${_.publisherid}/`,
                    contacts: _.contacts,
                  };
                  this.m_mapOptInToPartners.set(_.publisherid, _), _.push(_);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${_?.status} eresult ${_?.data?.success} and msg ${_?.data?.msg}`,
                );
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "CPartnerInfoStore.FindPartnerByName failed add: " +
                _.strErrorMsg,
              _,
            );
          }
          return _;
        }
        async LoadPartnerInfo(_) {
          if (this.m_mapOptInToPartners.has(_))
            return this.m_mapOptInToPartners.get(_);
          await this.FindPartnerByName("" + _);
          return (
            this.BHasPartnerInfoLoad(_) ||
              this.m_mapOptInToPartners.set(_, null),
            this.m_mapOptInToPartners.get(_)
          );
        }
        async LoadMultiplePartnerInfo(_) {
          if (!_ || 0 == _.length) return [];
          const _ = _.filter((_) => !this.m_mapOptInToPartners.has(_));
          return (
            _.length > 0 && (await this.FindPartnerByName("" + _.join(","))),
            _.map((_) => this.m_mapOptInToPartners.get(_)).filter(Boolean)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {
          let _ = JSON.parse(
            JSON.stringify((0, _._)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(_) &&
            (_.forEach((_) => this.m_mapOptInToPartners.set(_.partnerid, _)),
            "dev" == _._.WEB_UNIVERSE &&
              console.log("DEV_DEUBG: CPartnerInfoStore::constructor", _));
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !!(
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              "object" == typeof _[0]
            ) &&
            "number" == typeof _[0].partnerid &&
            "string" == typeof _[0].name
          );
        }
      }
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(!1);
        return (
          (0, _.useEffect)(() => {
            !_ &&
              _?.length > 0 &&
              _.Get()
                .LoadMultiplePartnerInfo(_)
                .then(() => __webpack_require__(!0));
          }, [_, _]),
          _
        );
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(() =>
          _.Get().GetPartnerInfo(_),
        );
        return (
          _.useEffect(() => {
            !_.Get().BHasPartnerInfoLoad(_) && _ > 0
              ? _.Get()
                  .LoadPartnerInfo(_)
                  .then((_) => __webpack_require__(_))
              : _.Get().BHasPartnerInfoLoad(_) &&
                _?.partnerid != _ &&
                __webpack_require__(_.Get().GetPartnerInfo(_));
          }, [_, _]),
          [_]
        );
      }
      function _() {
        return {
          fnFindPartnerByName: _.Get().FindPartnerByName,
        };
      }
      function _(_) {
        return _.Get().GetPartnerInfo(_);
      }
      function _(_) {
        return _.Get().LoadPartnerInfo(_);
      }
      (0, _._)([_._], _.prototype, "FindPartnerByName", null);
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
        _ = __webpack_require__("chunkid");
      class _ {
        m_eCurLang = (0, _._)(_._.LANGUAGE);
        m_rgHasData = (0, _._)([], 31, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new _._();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(_) {
          return (
            this.m_eCurLang != _ &&
            ((this.m_eCurLang = _), this.GetCallback().Dispatch(_), !0)
          );
        }
        SetHasLanguage(_) {
          _.forEach((_, _) => {
            this.m_rgHasData[_] != _ && (this.m_rgHasData[_] = _);
          });
        }
        BHasLanguageData(_) {
          return this.m_rgHasData[_];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(_) {
          _ != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = _);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            _.s_globalSingletonStore ||
              ((_.s_globalSingletonStore = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.DUS = _.s_globalSingletonStore)),
            _.s_globalSingletonStore
          );
        }
        constructor() {
          (0, _._)(this);
        }
      }
      function _() {
        return (0, _._)(() => _.Get().GetCurEditLanguage());
      }
      (0, _._)([_._], _.prototype, "m_eCurLang", void 0),
        (0, _._)([_._], _.prototype, "m_rgHasData", void 0),
        (0, _._)([_._], _.prototype, "m_bHasLocalizationContext", void 0),
        (0, _._)([_._], _.prototype, "GetCurEditLanguage", null),
        (0, _._)([_._], _.prototype, "SetCurEditLanguage", null),
        (0, _._)([_._.bound], _.prototype, "SetHasLanguage", null),
        (0, _._)([_._], _.prototype, "BHasLanguageData", null);
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
      class _ {
        m_steamInterface;
        GetPromotionTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        Init() {
          const _ = (0, _._)("promotion_operation_token", "application_config");
          (0, _._)(Boolean(_), "require promotion_operation_token"),
            (this.m_steamInterface = new _._(_._.WEBAPI_BASE_URL, _));
        }
      }
      function _() {
        return _.Get().GetPromotionTransport().GetServiceTransport();
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
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
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
        _ = __webpack_require__("chunkid");
      const _ = "nicknames";
      function _(_) {
        const _ = (0, _._)(),
          { data: __webpack_require__, isLoading: _ } = (0, _._)({
            queryKey: [_],
            queryFn: async () => {
              const _ = new Map();
              if (_._.logged_in) {
                const _ = _._.Init(_._),
                  _ = (await _._.GetNicknameList(_, _)).Body().toObject();
                _?.nicknames &&
                  _.nicknames.length > 0 &&
                  _.nicknames.forEach((_) => {
                    _.set(_.accountid, _.nickname);
                  });
              }
              return _;
            },
          });
        return __webpack_require__ ? __webpack_require__.get(_) : null;
      }
      const _ = new (_())(
          (_) =>
            (async function (_) {
              if (!_ || 0 == _.length) return [];
              const _ =
                "community" == (0, _._)()
                  ? _._.COMMUNITY_BASE_URL
                  : _._.STORE_BASE_URL;
              if (1 == _.length) {
                const _ = {
                    accountid: _[0],
                    origin: self.origin,
                  },
                  _ = await _().get(`${_}actions/ajaxgetavatarpersona`, {
                    params: _,
                  });
                if (
                  !_ ||
                  200 != _.status ||
                  1 != _.data?.success ||
                  !_.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
                return [_.data.userinfo];
              }
              {
                const _ = {
                    accountids: _.join(","),
                    origin: self.origin,
                  },
                  _ = await _().get(`${_}actions/ajaxgetmultiavatarpersona`, {
                    params: _,
                  });
                if (
                  !_ ||
                  200 != _.status ||
                  1 != _.data?.success ||
                  !_.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
                const _ = new Map();
                return (
                  _.data.userinfos.forEach((_) =>
                    _.set(new _._(_.steamid).GetAccountID(), _),
                  ),
                  _.map((_) => _.get(_))
                );
              }
            })(_),
          {
            cache: !1,
          },
        ),
        _ = "avatarandpersonas";
      function _(_) {
        const { data: _, isLoading: __webpack_require__ } = (0, _._)({
          queryKey: [_, _],
          queryFn: () => _.load(_),
        });
        return [_, __webpack_require__];
      }
      function _(_) {
        const _ = (0, _._)(),
          { data: __webpack_require__, isLoading: _ } = (0, _._)({
            queryKey: [_, _],
            queryFn: async () => {
              const _ = await _.loadMany(_);
              return (
                __webpack_require__.forEach((_) => {
                  const _ = [_, new _._(_.steamid).GetAccountID()];
                  _.setQueryData(_, _);
                }),
                _
              );
            },
            enabled: _?.length > 0,
          }),
          _ = (0, _.useMemo)(() => {
            const _ = new Array();
            return (
              __webpack_require__?.forEach((_) => {
                _ instanceof Error || _.push(_);
              }),
              _
            );
          }, [__webpack_require__]);
        return _ ? null : _;
      }
      function _(_) {
        return _._.getQueryData([_, _]);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      let _ = class extends _.Component {
        GenerateLanguageOptions() {
          let _ = [];
          const {
            fnFilterLanguage: _,
            fnLangHasData: __webpack_require__,
            fnLastUpdateRTime: _,
            fnIsLangSupported: _,
          } = this.props;
          this.props.bAllowUnsetOption &&
            _.push(
              _.createElement(
                "option",
                {
                  key: "langpicker_unset",
                  value: -1,
                },
                (0, _._)("#language_selection_none"),
              ),
            );
          let _ = new Array();
          const _ = this.props.realms || [_._.k_ESteamRealmGlobal];
          for (const _ of _._.GetLanguageListForRealms(_)) {
            if (_ && !_(_)) continue;
            const _ = (0, _._)(_),
              _ = (0, _._)("#Language_" + _),
              _ = Boolean(_) && _(_);
            _.push({
              eLang: _,
              sLocName: _,
              bSupported: _,
            });
          }
          _.sort((_, _) =>
            _.bSupported != _.bSupported
              ? _.bSupported
                ? -1
                : 1
              : _.sLocName.localeCompare(_.sLocName),
          );
          let _ = !1;
          for (const _ of _) {
            _.bSupported != _ &&
              (_.push(
                _.createElement(
                  "option",
                  {
                    key: _.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: _().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, _._)(
                    _.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (_ = _.bSupported));
            const _ = _ && __webpack_require__(_.eLang),
              _ = _ && _(_.eLang);
            let _ = _.sLocName;
            _ &&
              0 !== _ &&
              ((_ += " "),
              (_ += (0, _._)(
                "#Language_Last_Update",
                (0, _._)(_) +
                  " @ " +
                  (0, _._)(_, {
                    bForce24HourClock: !1,
                  }),
              ))),
              _.push(
                _.createElement(
                  "option",
                  {
                    key: "langpicker" + _.eLang + (_ ? "_hasdata" : ""),
                    value: _.eLang,
                    className: (0, _._)(
                      {
                        [_().LanguageWithContent]: _,
                      },
                      _.bSupported
                        ? _().SupportedLanguage
                        : _().UnsupportedLanguage,
                    ),
                  },
                  _,
                ),
              );
          }
          return _;
        }
        OnLanguageChange(_) {
          const { fnOnLanguageChanged: _, selectedLang: __webpack_require__ } =
            this.props;
          let _ = Number.parseInt(_.currentTarget.value);
          _ != __webpack_require__ && _ && _(_);
        }
        render() {
          const {
            selectedLang: _,
            bDisabled: _,
            strTooltip: __webpack_require__,
          } = this.props;
          let _ = this.GenerateLanguageOptions();
          return _.createElement(
            _._,
            {
              toolTipContent: __webpack_require__,
            },
            _.createElement(
              "select",
              {
                value: _,
                onChange: this.OnLanguageChange,
                disabled: _,
              },
              _,
            ),
          );
        }
      };
      function _(_) {
        const [_, __webpack_require__] = (0, _._)(() => [
          _._.Get().GetHasLocalizationContext(),
          _._.Get().GetCurEditLanguage(),
        ]);
        return _.createElement(_, {
          selectedLang: __webpack_require__,
          fnLangHasData: _._.Get().BHasLanguageData,
          fnOnLanguageChanged: _._.Get().SetCurEditLanguage,
          bDisabled: !_,
          strTooltip: _ ? void 0 : (0, _._)("#Localization_EditorNotInFocus"),
        });
      }
      function _(_) {
        const { fnLangHasData: _ } = _;
        _.useEffect(
          () => (
            _._.Get().SetHasLocalizationContext(!0),
            () => _._.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const _ = (0, _._)(() => {
          const _ = [];
          for (let _ = 0; _ < 31; ++_) _[_] = _ && _(_);
          return _;
        });
        return (
          _.useEffect(() => _._.Get().SetHasLanguage(_), [_]),
          _.createElement(_.Fragment, null)
        );
      }
      (0, _._)([_._], _.prototype, "OnLanguageChange", null),
        (_ = (0, _._)([_._], _));
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            title: _,
            tooltip: __webpack_require__,
            getMinimized: _,
            toggleMinimized: _,
            className: _,
            children: _,
            elAdditionalButtons: _,
          } = _,
          _ = (0, _._)(() => _());
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: (0, _._)(
                _,
                _.SectionTitleHeader,
                _.required_title,
                "SectionTitleHeader",
              ),
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(
                  _.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              _,
              Boolean(__webpack_require__) &&
                _.createElement(_._, {
                  tooltip: __webpack_require__,
                }),
            ),
            _.createElement(
              "div",
              {
                className: _.SectionTitleButtons,
              },
              _,
              _.createElement(_, {
                bIsMinimized: _,
                fnToggleMinimize: _,
              }),
            ),
          ),
          !_ && _.createElement(_._, null, _),
        );
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(Boolean(_.bStartMinimized));
        return _.createElement(
          _,
          {
            ..._,
            getMinimized: () => _,
            toggleMinimized: () => __webpack_require__(!_),
          },
          _.children,
        );
      }
      function _(_) {
        const { bIsMinimized: _, fnToggleMinimize: __webpack_require__ } = _,
          _ = _ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return _.createElement(
          _._,
          {
            "data-tooltip-text": (0, _._)(_),
            onClick: __webpack_require__,
          },
          _.bIsMinimized
            ? _.createElement(_.hz4, null)
            : _.createElement(_.Xjb, null),
        );
      }
    },
  },
]);
