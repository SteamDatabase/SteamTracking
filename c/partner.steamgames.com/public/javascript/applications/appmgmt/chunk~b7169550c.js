(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
    chunkid: (module) => {
      module.exports = {
        Bold: "_3cln317VYhwhE1fSeMCG48",
        Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
        Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
        TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
        Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
        Answer: "syKgzmlrcUIJHIBfWsn4h",
        Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
        Header2: "_6-VR2WCBCDupCcUN5INQM",
        Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
        Header4: "_3VHY5vmO07MFpoOgTB9eOi",
        Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
        CenterSpan: "zCnp-VELUMybbfxOD-ze9",
        SmallText: "WBzrd438Bd8Z3J-j_iglW",
        Underline: "GrhFWtBdrSZP611s1UqqT",
        Strike: "_3pK7sh9FYdigMXxcUVI4DY",
        Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
        Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
        SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
        DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
        BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
        QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
        PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
        Code: "_2ODaX8lO7DKLKke76c2Wya",
        CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
        List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
        OrderedList: "DojPxwyYpx3hwuPIaJPCq",
        ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
        _: "-xPK0REpludHjRG8xQfih",
        Table: "_2CAsiFd9UHbUOqzd0e7ioe",
        NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
        TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
        TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
        EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
        ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
        ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
        EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
        ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
        ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
        LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
        Image: "_3K0NuxYUYncdQ-cNK7udMn",
        PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
        Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
        CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
        CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
      };
    },
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
        _: () => _,
        _: () => _,
      });
      class _ {
        type = 0;
        text = "";
        tag;
        args;
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
      class _ {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(_, _) {
          (this.m_dictComponents = _), (this.m_fnAccumulatorFactory = _);
        }
        Parse(_, _, __webpack_require__ = !1) {
          const _ = (function (_, _) {
            const _ = [];
            let _ = new _(),
              _ = !1,
              _ = !1,
              _ = !1;
            for (let _ = 0; _ < _.length; _++) {
              const _ = _[_];
              switch (_.type) {
                case 0:
                  "[" == _
                    ? ((_.type = 2), (_ = !0))
                    : ((_.type = 1), "\\" == _ && _ ? (_ = !_) : (_.text += _));
                  break;
                case 2:
                case 3:
                  if ("/" == _ && _) (_.type = 3), (_.text = ""), (_ = !1);
                  else if ("[" != _ || _)
                    if ("]" != _ || _)
                      "\\" == _ && _
                        ? ((_.text += _), (_ = !_), (_ = !1))
                        : ((_.text += _), (_ = !1), (_ = !1));
                    else {
                      const _ =
                          2 == _.type &&
                          "noparse" == _.text.toLocaleLowerCase(),
                        _ =
                          3 == _.type &&
                          "noparse" == _.text.toLocaleLowerCase();
                      _ || (_ && !_)
                        ? (_.ConvertMalformedNodeToText(), (_.text += _))
                        : _
                          ? (_ = !0)
                          : _ && (_ = !1),
                        (_ = _(_, _)),
                        (_ = !1);
                    }
                  else
                    _.ConvertMalformedNodeToText(), (_ = _(_, _, 2)), (_ = !0);
                  break;
                case 1:
                  "[" != _ || _
                    ? "\\" == _ && _
                      ? (_ && (_.text += _), (_ = !_))
                      : ((_.text += _), (_ = !1))
                    : ((_ = _(_, _, 2)), (_ = !0));
              }
            }
            0 != _.type &&
              ((2 != _.type && 3 != _.type) || _.ConvertMalformedNodeToText(),
              __webpack_require__.push(_));
            return _;
          })(_ || "", __webpack_require__);
          return this.Parse_BuildElements(_, _);
        }
        Parse_BuildElements(_, _) {
          let _ = this.m_fnAccumulatorFactory(void 0);
          const _ = [],
            _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
            _ = this.m_dictComponents,
            _ = (_) => !(!_.tag || !_.get(_.tag)?.autocloses);
          let _ = !1,
            _ = !0;
          const _ = (_, _) => {
            if (_ && _.node.tag === _.text && _.get(_.node.tag)) {
              const _ = _.get(_.node.tag),
                _ = _.map((_) => _.node.tag),
                _ = {
                  parentTags: _,
                  tagname: _.node.tag,
                  args: _.node.args,
                },
                _ = _(_.Constructor, _, ...__webpack_require__.GetElements());
              (_ = _.accumulator),
                Array.isArray(_)
                  ? _.forEach((_) => __webpack_require__.AppendNode(_))
                  : __webpack_require__.AppendNode(_),
                (_ = !!_.skipFollowingNewline),
                (_ = _.bWrapTextForCopying);
            } else if (_) {
              const _ = _.accumulator;
              _.AppendText("[" + _.node.text + "]", !1),
                __webpack_require__
                  .GetElements()
                  .forEach((_) => _.AppendNode(_)),
                _.AppendText("[/" + _.text + "]", !1),
                (_ = _),
                (_ = _.bWrapTextForCopying);
            }
          };
          for (
            _.forEach((_, _) => {
              if (1 == _.type) {
                const _ = _ ? _.text.replace(/^[\t\r ]*\n/g, "") : _.text;
                __webpack_require__.AppendText(_, _), (_ = !1);
              } else if (2 == _.type) {
                const _ = _.get(_.tag);
                if (_) {
                  const _ = _();
                  if (void 0 !== _) {
                    const _ = _.get(_.node.tag);
                    _ &&
                      _.autocloses &&
                      _.tag === _.node.tag &&
                      _(_.pop(), _.node);
                  }
                  _.push({
                    accumulator: _,
                    node: _,
                    bWrapTextForCopying: _,
                  }),
                    (_ = this.m_fnAccumulatorFactory(_)),
                    (_ = !!_.skipInternalNewline),
                    (_ = _.allowWrapTextForCopying ?? !1);
                } else
                  __webpack_require__.AppendText(
                    "[" + _.text + "]",
                    0 == _.length,
                  );
              } else if (3 == _.type) {
                for (; _() && _().node.tag !== _.text && _(_().node); ) {
                  const _ = _.pop();
                  _(_, _.node);
                }
                if (_()?.node.tag == _.text) {
                  const _ = _.pop();
                  _(_, _);
                } else
                  __webpack_require__.AppendText(
                    "[/" + _.text + "]",
                    0 == _.length,
                  );
              }
            });
            _.length > 0;
          ) {
            const _ = _.pop();
            _(_, _.node);
          }
          return __webpack_require__.GetElements();
        }
      }
      function _(_, _) {
        let _ = "[" + _;
        _?.[""] && (_ += `=${_("" + _[""])}`);
        for (const _ in _)
          "" !== _ &&
            (_ += ` ${((_ = _), _.replace(/(\\| |\])/g, "\\$1"))}=${_("" + _[_])}`);
        var _;
        return (_ += "]"), _;
      }
      function _(_) {
        return `"${_.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function _(_) {
        return `[/${_}]`;
      }
      function _(_) {
        return _.replace(/(\\|\[)/g, "\\$1");
      }
      function _(_, _, __webpack_require__ = 0) {
        if (2 == _.type) {
          let _ = _.text.indexOf("=");
          const _ = _.text.indexOf(" ");
          if ((-1 != _ && (-1 == _ || _ < _) && (_ = _), _ > 0)) {
            _.tag = _.text.substr(0, _).toLocaleLowerCase();
            const _ = _.text.substr(_);
            _.args = (function (_) {
              if (!_ || _.length < 1) return {};
              const _ = {};
              let _ = "",
                _ = "",
                _ = 0,
                _ = 0;
              "=" == _[0] && (_ = 2);
              let _ = !1;
              for (_++; _ < _.length; _++) {
                const _ = _[_];
                let _ = !0,
                  _ = !1;
                switch (_) {
                  case 0:
                    if ("=" == _) return {};
                    if (" " == _) continue;
                    _ = 1;
                    break;
                  case 1:
                    ("=" != _ && " " != _) ||
                      _ ||
                      (" " == _ ? ((_ = 0), (_ = !0)) : (_ = 2), (_ = !1));
                    break;
                  case 2:
                    " " == _
                      ? ((_ = 0), (_ = !1), (_ = !0))
                      : '"' == _
                        ? ((_ = 4), (_ = !1))
                        : (_ = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == _ && 4 != _ && !_) ||
                      ('"' == _ && 4 == _ && !_)) &&
                      ((_ = 0), (_ = !1), (_ = !0));
                }
                if (_)
                  if ("\\" != _ || _)
                    if (((_ = !1), 1 == _)) _ += _;
                    else {
                      if (3 != _ && 4 != _)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + _,
                        );
                      _ += _;
                    }
                  else _ = !0;
                _ && ((_[_] = _), (_ = ""), (_ = ""));
              }
              0 != _ && (_[_] = _);
              return _;
            })(_);
          } else (_.args = {}), (_.tag = _.text.toLocaleLowerCase());
        }
        _.push(_);
        const _ = new _();
        return (_.type = _), _;
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
